#!/usr/bin/env bun
/**
 * 合并 torn-cn-dictionary.md 到 overlay.ts 的构建工具
 *
 * 读取 ../torn-cn-dictionary.md,解析所有 `| 英文 | 中文 |` 行,
 * 把不重复的词条追加到 src/extension/utils/i18n/overlay.ts。
 *
 * 用法:
 *   bun run tools/merge-dictionary.ts
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const DICT_MD = join(ROOT, "..", "torn-cn-dictionary.md");
const OVERLAY_TS = join(ROOT, "src", "extension", "utils", "i18n", "overlay.ts");

interface Entry {
	en: string;
	zh: string;
}

/**
 * 解析 markdown 表格行,只取 `| 英文 | 中文 |` 格式
 * 跳过:
 *   - 表头分隔行 (|---|---|)
 *   - 表格外的纯文本/标题
 *   - 第二列含 `→` 或 `/` (合译/多译,需人工拆分)
 *   - 英文列含 ` / ` (多英文对应一中文,跳过避免歧义)
 *   - 英文列包含括号注释(保留原文,避免误匹配)
 *   - 中文列含 `保留原文`
 */
function parseDictionary(md: string): Entry[] {
	const out: Entry[] = [];
	const lines = md.split(/\r?\n/);
	for (const line of lines) {
		const m = line.match(/^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|/);
		if (!m) continue;
		const en = m[1].trim();
		const zh = m[2].trim();
		// 过滤表头/分隔
		if (en === "英文" || en === "---" || en.startsWith("---")) continue;
		// 过滤非简单翻译
		if (!en || !zh) continue;
		if (zh.includes("保留原文")) continue;
		if (zh.includes("→")) continue;
		if (en.includes("/")) continue; // 多英文对应一中文,人工拆分
		if (en.includes("(") && en.includes(")")) continue; // 含括号注释
		// 跳过太短/无意义的英文 key(单字符 / 纯符号)
		if (en.length < 2) continue;
		out.push({ en, zh });
	}
	return out;
}

/**
 * 从 overlay.ts 提取现有 key,避免重复
 */
function extractExistingKeys(tsContent: string): Set<string> {
	const set = new Set<string>();
	// 匹配 "Key": "..." 或 Key: "..." 形式
	const re = /(?<![\w$])\s*"?(?<![.\w])([A-Za-z][\w \-_.:&'/]*?)"?\s*:\s*"/g;
	let m: RegExpExecArray | null;
	while ((m = re.exec(tsContent))) {
		set.add(m[1]);
	}
	return set;
}

/**
 * 主流程
 */
const md = readFileSync(DICT_MD, "utf8");
const ts = readFileSync(OVERLAY_TS, "utf8");

const allEntries = parseDictionary(md);
const existingKeys = extractExistingKeys(ts);

console.log(`[merge-dictionary] 解析 ${allEntries.length} 个字典条目`);
console.log(`[merge-dictionary] overlay.ts 现有 ${existingKeys.size} 个 key`);

// 准备需要追加的新条目(去重 + 与现有 key 去重)
const newEntries: Entry[] = [];
const seenInBatch = new Set<string>();
for (const e of allEntries) {
	if (existingKeys.has(e.en)) continue;
	if (seenInBatch.has(e.en)) continue;
	seenInBatch.add(e.en);
	newEntries.push(e);
}

console.log(`[merge-dictionary] 新增 ${newEntries.length} 个条目`);

if (newEntries.length === 0) {
	console.log("[merge-dictionary] 无新增,退出。");
	process.exit(0);
}

// 按英文长度倒序(短 key 后匹配避免破坏长 key),生成分组注释
const groupedByCategory: Record<string, Entry[]> = {};
for (const e of newEntries) {
	// 简化分类:用第一个英文单词或前 12 字符
	const cat = e.en.split(/[\s(]/)[0] || "Other";
	if (!groupedByCategory[cat]) groupedByCategory[cat] = [];
	groupedByCategory[cat].push(e);
}

// 生成 TS 代码块
const block = ["", "\t// ========== 合并自 torn-cn-dictionary.md (自动生成) =========="];
for (const [cat, entries] of Object.entries(groupedByCategory)) {
	block.push(`\t// --- ${cat} ---`);
	for (const e of entries) {
		// key 需要引号当含空格/特殊字符
		const keyNeedsQuote = /[\s\-_:&'/.,()]/.test(e.en);
		const key = keyNeedsQuote ? `"${e.en.replaceAll('"', '\\"')}"` : e.en;
		const value = e.zh.replaceAll('"', '\\"');
		block.push(`\t${key}: "${value}",`);
	}
}
const newBlock = block.join("\n");

// 在 `};` 结束前插入
const closingIdx = ts.lastIndexOf("};");
if (closingIdx === -1) {
	console.error("[merge-dictionary] 未找到 overlay.ts 结束标记");
	process.exit(1);
}

const updated = ts.slice(0, closingIdx) + newBlock + "\n" + ts.slice(closingIdx);
writeFileSync(OVERLAY_TS, updated, "utf8");
console.log(`[merge-dictionary] 已写入 ${newEntries.length} 个新条目到 overlay.ts`);
