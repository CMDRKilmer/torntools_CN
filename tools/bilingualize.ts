#!/usr/bin/env bun
/**
 * 把 overlay.ts / zh-CN.ts 的 value 全部改为双语格式
 *
 * 策略: 按行处理(避免多行 value 与正则匹配错乱)
 *   \tEnergy: "能量",
 *     ↓
 *   \tEnergy: "能量 (Energy)",
 *
 * 跳过规则:
 *   - 注释行 / 段标题
 *   - UI 短词白名单(Cancel/Save/Yes/No 等,保持纯中文)
 *   - value 已含括号(已合译)
 *   - value === key(占位未翻译)
 *   - key 含模板符号 {}<>%
 *
 * 用法:
 *   bun run tools/bilingualize.ts
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const TARGETS = ["src/extension/utils/i18n/overlay.ts", "src/extension/utils/i18n/zh-CN.ts"];

/** UI 短词白名单 */
const UI_SHORT_WORDS = new Set([
	"Yes",
	"No",
	"On",
	"Off",
	"OK",
	"Ok",
	"Cancel",
	"Save",
	"Close",
	"Open",
	"Apply",
	"Reset",
	"Refresh",
	"Reload",
	"Edit",
	"Delete",
	"Add",
	"Remove",
	"Search",
	"Filter",
	"Sort",
	"Submit",
	"Confirm",
	"Enable",
	"Disable",
	"Back",
	"Next",
	"Continue",
	"Finish",
	"Done",
	"Select",
	"Upgrade",
	"Work",
	"Create",
	"Donate",
	"Give",
	"Retrieve",
	"Deposit",
	"Withdraw",
	"Report",
	"Message",
	"Send",
	"Reply",
	"Loading",
	"Error",
	"Warning",
	"Info",
	"Success",
	"Online",
	"Offline",
	"Today",
	"Yesterday",
	"Now",
	"Days",
	"Hours",
	"Minutes",
	"Seconds",
	"Weeks",
	"Months",
	"Years",
	"Start",
	"Stop",
	"Pause",
	"Resume",
	"Active",
	"Inactive",
	"Available",
	"Unavailable",
	"All",
	"None",
	"Default",
	"Custom",
	"Auto",
	"Manual",
	"New",
	"Old",
	"Recent",
	"Oldest",
	"Actions",
	"Action",
	"History",
	"Logs",
	"Log",
	"Reports",
	"Statistics",
	"Stats",
	"Settings",
	"Configuration",
	"Help",
	"About",
	"Version",
	"Latest",
	"Current",
	"Visible",
	"Hidden",
	"Public",
	"Private",
	"Shared",
	"Unshared",
	"Connected",
	"Disconnected",
	"Away",
	"Busy",
	"Idle",
	"Experimental",
	"Beta",
	"Alpha",
	"Stable",
	"Production",
	"Development",
	"Section",
	"Group",
	"Page",
	"Subpage",
	"Tab",
	"Overview",
	"Bars",
	"Stakeouts",
	"Cooldowns",
	"Required",
	"Optional",
	"Total",
	"Average",
	"Maximum",
	"Minimum",
	"Median",
	"Mode",
	"Sum",
	"Range",
	"Combat",
	"Travel",
	"Faction",
	"Profile",
	"Companies",
	"Gym",
	"Racing",
	"Services",
	"Targets",
	"Information",
	"Markets",
	"Items",
	"Money",
	"Sidebar",
	"Chat",
	"Advanced",
	"Financial",
	"Global",
	"Internal",
	"QoL",
	"Connections",
	"Speed",
	"Theme",
	"Language",
	"Popup",
	"API",
	"Calculator",
	"Stocks",
	"Notifications",
	"Dashboard",
	"Market",
	"Import",
	"Export",
	"Preferences",
	"Changelog",
]);

/**
 * 解析一行 I18n 条目
 * 返回 null 表示不是有效条目(注释/空行/段标题/import 等)
 *
 * 支持格式:
 *   \tKey: "value",
 *   \t"Key:": "value:",
 *   \t"Key Name": "value",
 */
function parseLine(line: string): { key: string; value: string; valueStart: number; valueEnd: number } | null {
	if (!line.startsWith('	')) return null;
	const trimmed = line.trimStart();
	if (trimmed.startsWith("//") || trimmed.startsWith("*") || trimmed.startsWith("/*")) return null;

	const m = line.match(/^(\t+)(?:"((?:[^"\\]|\\.)+)"|([A-Za-z_][\w]*))([\t ]*):([\t ]*)"((?:[^"\\]|\\.)*)"(\s*,?\s*)$/);
	if (!m) return null;

	const [, indent, quotedKey, bareKey, sepWs, valWs, value] = m;
	const key = quotedKey ?? bareKey;

	// 精确算到 value 内容的第一个字符位置
	const valueContentStart =
		indent.length +
		(quotedKey ? quotedKey.length + 2 : bareKey.length) +
		sepWs.length +
		1 + // 冒号
		valWs.length +
		1; // value 开引号
	const valueContentEnd = valueContentStart + value.length;

	return { key, value, valueStart: valueContentStart, valueEnd: valueContentEnd };
}

function shouldSkip(key: string, value: string): boolean {
	if (!value || !key) return true;
	if (/[()（）[\]【】]/.test(value)) return true;
	if (value === key) return true;
	if (/[{}%<>]/.test(key)) return true;
	if (/[%$]\d|\{[^}]+\}/.test(value)) return true;
	return false;
}

function isUiShortWord(key: string): boolean {
	return UI_SHORT_WORDS.has(key);
}

function bilingualize(value: string, key: string): string {
	const t = value.trimEnd();
	if (!t) return value;
	return `${t} (${key})`;
}

function processFile(path: string): { changed: number; total: number; skipped: number } {
	const full = join(ROOT, path);
	const orig = readFileSync(full, "utf8");
	const lines = orig.split("\n");

	let changed = 0;
	let total = 0;
	let skipped = 0;

	const outLines: string[] = [];
	for (const line of lines) {
		const entry = parseLine(line);
		if (!entry) {
			outLines.push(line);
			continue;
		}
		total++;
		const { key, value, valueStart, valueEnd } = entry;

		if (isUiShortWord(key)) {
			skipped++;
			outLines.push(line);
			continue;
		}
		if (shouldSkip(key, value)) {
			skipped++;
			outLines.push(line);
			continue;
		}
		const newValue = bilingualize(value, key);
		if (newValue === value) {
			skipped++;
			outLines.push(line);
			continue;
		}
		const newLine = line.slice(0, valueStart) + newValue + line.slice(valueEnd);
		outLines.push(newLine);
		changed++;
	}

	writeFileSync(full, outLines.join("\n"), "utf8");
	console.log(`[bilingualize] ${path}`);
	console.log(`  total=${total} changed=${changed} skipped=${skipped}`);
	return { changed, total, skipped };
}

let totalChanged = 0;
let totalAll = 0;
let totalSkip = 0;
for (const t of TARGETS) {
	const r = processFile(t);
	totalChanged += r.changed;
	totalAll += r.total;
	totalSkip += r.skipped;
}
console.log(`\n[bilingualize] 总览:total=${totalAll} changed=${totalChanged} skipped=${totalSkip}`);
