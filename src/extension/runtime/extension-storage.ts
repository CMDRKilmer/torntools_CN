import type { CacheEntry, DatabaseCache } from "@common/utils/data/cache";
import { api } from "@common/utils/data/database";
import type { Database, DatabaseKey } from "@common/utils/data/database";
import { DEFAULT_STORAGE, getDefaultStorage } from "@common/utils/data/default-database";
import {
	bumpCacheVersion,
	CACHE_VERSION_KEY,
	FALLBACK_CACHE_KEY,
	getCache,
	removeCacheEntries,
	setCacheEntries as idbSetCacheEntries,
} from "@common/utils/data/idb-cache";
import { TornToolsStorage } from "@common/utils/data/storage";
import { SCRIPT_TYPE } from "@common/utils/functions/utilities";
import { browser } from "wxt/browser";
import { BACKGROUND_SERVICE } from "@/services/proxy-services";

const isContentScript = SCRIPT_TYPE === "CONTENT";

function flattenCache(cache: DatabaseCache): CacheEntry[] {
	const entries: CacheEntry[] = [];
	for (const [sectionOrKey, sectionValue] of Object.entries(cache)) {
		if (sectionValue && typeof sectionValue === "object" && !("value" in sectionValue)) {
			for (const [key, cacheValue] of Object.entries(sectionValue as Record<string, CacheEntry["cacheValue"]>)) {
				entries.push({ section: sectionOrKey, key, cacheValue });
			}
		} else {
			entries.push({ key: sectionOrKey, cacheValue: sectionValue as CacheEntry["cacheValue"] });
		}
	}

	return entries;
}

async function readCache(): Promise<DatabaseCache | undefined> {
	if (isContentScript) {
		try {
			return await callBackgroundWithRetry(() => BACKGROUND_SERVICE.cacheGet());
		} catch (error) {
			console.warn("cacheGet failed:", error);
			return undefined;
		}
	}
	return getCache();
}

async function writeCacheEntries(entries: CacheEntry[]): Promise<void> {
	if (isContentScript) {
		try {
			await callBackgroundWithRetry(() => BACKGROUND_SERVICE.cacheSetEntries(entries));
		} catch (error) {
			console.warn("cacheSetEntries failed:", error);
		}
		return;
	}
	await idbSetCacheEntries(entries);
	await bumpCacheVersion();
}

async function clearCacheFromStorage(section?: string): Promise<void> {
	if (isContentScript) {
		try {
			await callBackgroundWithRetry(() => BACKGROUND_SERVICE.cacheClearEntries(section));
		} catch (error) {
			console.warn("cacheClearEntries failed:", error);
		}
		return;
	}
	await removeCacheEntries(section);
	await bumpCacheVersion();
}

/**
 * 在扩展上下文里调 background RPC,SW 未启动时等 500ms 重试一次。
 * 这里本地复制一份,避免 extension-context.ts 与 extension-storage.ts 之间形成
 * 互相 import 循环(storage.ts 被 context.ts 间接 import)。
 */
async function callBackgroundWithRetry<T>(fn: () => Promise<T>, retries = 1): Promise<T> {
	try {
		return await fn();
	} catch (error: any) {
		const message = error?.message || "";
		const isSwStartFailure = /No SW|Could not establish|Receiving end does not exist/i.test(message);
		if (!isSwStartFailure || retries <= 0) throw error;

		await new Promise((resolve) => setTimeout(resolve, 500));
		return callBackgroundWithRetry(fn, retries - 1);
	}
}

export class TTExtensionStorage extends TornToolsStorage {
	override get(): Promise<Database>;
	override get<K extends DatabaseKey>(key: K): Promise<Database[K]>;
	override get<K extends readonly DatabaseKey[]>(keys: K): Promise<{ [I in keyof K]: K[I] extends DatabaseKey ? Database[K[I]] : never }>;
	override async get(key?: DatabaseKey | DatabaseKey[]) {
		if (Array.isArray(key)) {
			const data = await this.safeStorageGet(key as string[]);
			if ((key as DatabaseKey[]).includes("cache")) {
				data.cache = await readCache();
			}

			return key.map((i) => data[i]);
		} else if (key) {
			if (key === "cache") return await readCache();
			return (await this.safeStorageGet([key]))[key];
		} else {
			const data = await this.safeStorageGet();
			delete data[CACHE_VERSION_KEY];
			delete data[FALLBACK_CACHE_KEY];

			const cache = await readCache();
			if (cache !== undefined) data.cache = cache;

			return data;
		}
	}

	/**
	 * storage.local.get 的容错包装:
	 * 当扩展上下文失效(Extension context invalidated)、SW 被回收或 tab 关闭时,
	 * 直接抛错会让上层崩溃。这里捕获后返回空对象,让上层走默认值。
	 */
	private async safeStorageGet(keys?: string | string[]) {
		try {
			return await browser.storage.local.get(keys as any);
		} catch (error) {
			console.warn("storage.local.get failed:", error);
			return {} as Record<string, any>;
		}
	}

	override async set(object: { [key: string]: any }) {
		const cache = object.cache;
		const rest = { ...object };
		delete rest.cache;

		if (cache !== undefined) {
			try {
				await writeCacheEntries(flattenCache(cache));
			} catch (error) {
				console.warn("writeCacheEntries failed:", error);
			}
		}
		if (Object.keys(rest).length) {
			try {
				await browser.storage.local.set(rest);
			} catch (error) {
				console.warn("storage.local.set failed:", error);
			}
		}
	}

	override async setCacheEntries(entries: CacheEntry[]) {
		await writeCacheEntries(entries);
	}

	override async clearCache(section?: string) {
		await clearCacheFromStorage(section);
	}

	override async remove(key: string | string[]) {
		const keys = Array.isArray(key) ? key : [key];

		const writes: Promise<void>[] = [];
		if (keys.includes("cache")) writes.push(clearCacheFromStorage());
		if (keys.some((k) => k !== "cache"))
			writes.push(browser.storage.local.remove(keys.filter((k) => k !== "cache")).catch((error) => console.warn("storage.local.remove failed:", error)));

		await Promise.all(writes);
	}

	override async clear() {
		try {
			await browser.storage.local.clear();
		} catch (error) {
			console.warn("storage.local.clear failed:", error);
		}
		await clearCacheFromStorage();
	}

	override async reset(key?: "attackHistory" | "stakeouts" | "factionStakeouts"): Promise<void> {
		if (["attackHistory", "stakeouts", "factionStakeouts"].includes(key)) {
			await this.set({ [key]: getDefaultStorage(DEFAULT_STORAGE)[key] });
		} else {
			const apiKey = api ? api.torn.key : undefined;

			await this.clear();
			await this.set(getDefaultStorage(DEFAULT_STORAGE));
			await this.change({ api: { torn: { key: apiKey } } });

			console.log("Storage cleared");
			console.log("New storage", await this.get());
		}
	}

	override async getSize() {
		let size: number;

		if (browser.storage.local.getBytesInUse) {
			size = await browser.storage.local.getBytesInUse();
			size += JSON.stringify((await readCache()) ?? {}).length;
		} else size = JSON.stringify(await this.get(null)).length;

		return size;
	}
}
