import { ttStorage } from "@common/utils/context";
import { DEFAULT_STORAGE, getDefaultStorage } from "@common/utils/data/default-database";
import { initializeDatabase, storageListeners } from "@common/utils/data/database";
import type {
	DatabaseApi,
	DatabaseFactiondata,
	DatabaseNpcs,
	DatabaseSettings,
	DatabaseStockdata,
	DatabaseTorndata,
	DatabaseUserdata,
} from "@common/utils/data/database";
import { writable } from "svelte/store";

/**
 * 把 settings 与 DEFAULT_STORAGE 合并,缺什么字段补什么字段,确保 settings.external/themes
 * 等 v9.3 新增字段即使在旧版持久化数据中也能 fallback 到默认。
 */
function mergeWithDefaults<T>(loaded: T | undefined, defaults: any): T {
	const merged = getDefaultStorage(defaults) as any;
	if (loaded && typeof loaded === "object") {
		for (const key of Object.keys(loaded as Record<string, unknown>)) {
			merged[key] = (loaded as any)[key];
		}
	}
	return merged;
}

let storesInitialized = $state(false);
export const settingsStore = writable<DatabaseSettings>();
export const apiStore = writable<DatabaseApi>();
export const userdataStore = writable<DatabaseUserdata>();
export const torndataStore = writable<DatabaseTorndata>();
export const stockdataStore = writable<DatabaseStockdata>();
export const factiondataStore = writable<DatabaseFactiondata>();
export const npcsStore = writable<DatabaseNpcs>();

export function initializeDatabaseStore() {
	if (storesInitialized) return;

	loadDatabaseStores().then(() => (storesInitialized = true));

	storageListeners.settings.push((_oldSettings, newSettings) => settingsStore.set(newSettings));
	storageListeners.api.push((_oldApi, newApi) => apiStore.set(newApi));
	storageListeners.userdata.push((_oldUserdata, newUserdata) => userdataStore.set(newUserdata));
	storageListeners.torndata.push((_oldTorndata, newTorndata) => torndataStore.set(newTorndata));
	storageListeners.stockdata.push((_oldStockdata, newStockdata) => stockdataStore.set(newStockdata));
	storageListeners.factiondata.push((_oldFactiondata, newFactiondata) => factiondataStore.set(newFactiondata));
	storageListeners.npcs.push((_oldNpcs, newNpcs) => npcsStore.set(newNpcs));
}

async function loadDatabaseStores() {
	await initializeDatabase();

	const [settings, api, userdata, torndata, stockdata, factiondata, npcs] = await ttStorage.get([
		"settings",
		"api",
		"userdata",
		"torndata",
		"stockdata",
		"factiondata",
		"npcs",
	] as const);

	// 防御:旧版持久化或扩展上下文失效时,settings 可能是 undefined 或缺字段。
	// 用 DEFAULT_STORAGE 兜底合并,保证 settings.external / themes 等 v9.3 新增字段存在。
	const safeSettings = mergeWithDefaults(settings, DEFAULT_STORAGE.settings);
	const safeApi = mergeWithDefaults(api, DEFAULT_STORAGE.api);
	const safeUserdata = mergeWithDefaults(userdata, DEFAULT_STORAGE.userdata);
	const safeTorndata = mergeWithDefaults(torndata, DEFAULT_STORAGE.torndata);
	const safeStockdata = mergeWithDefaults(stockdata, DEFAULT_STORAGE.stockdata);
	const safeFactiondata = mergeWithDefaults(factiondata, DEFAULT_STORAGE.factiondata);
	const safeNpcs = mergeWithDefaults(npcs, DEFAULT_STORAGE.npcs);

	settingsStore.set(safeSettings);
	apiStore.set(safeApi);
	userdataStore.set(safeUserdata);
	torndataStore.set(safeTorndata);
	stockdataStore.set(safeStockdata);
	factiondataStore.set(safeFactiondata);
	npcsStore.set(safeNpcs);
}

export function isStoresInitialized() {
	return storesInitialized;
}
