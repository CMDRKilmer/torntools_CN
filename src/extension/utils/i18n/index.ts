// filepath: src/extension/utils/i18n/index.ts
/**
 * 极简 i18n 模块
 *
 * 设计目标:
 *   - 不依赖运行时,build-time 树摇剔除未引用的 locale
 *   - 同步 t() 调用,不引入异步开销
 *   - 单文件 locale,词条按 UI 分区(popup / options / common / overlay)
 *   - 缺译自动回退英文,缺失即原文,UI 永不空白
 *
 * 使用:
 *   import { t, setLocale } from "@/utils/i18n";
 *   t("popup", "Dashboard")                 // => "面板" (zh-CN) / "Dashboard" (en)
 *   t("options", "Save", "保存")             // 带默认值,避免漏译
 */
import { EN } from "./en";
import type { Locale, LocaleTable, Namespace } from "./types";
import { ZH_CN } from "./zh-CN";

const LOCALES: Record<Locale, LocaleTable> = {
	en: EN,
	"zh-CN": ZH_CN,
};

let currentLocale: Locale = "en";

/**
 * 检测浏览器语言(在 content script / popup 启动时调用)
 */
export function detectLocale(): Locale {
	try {
		const lang = (typeof navigator !== "undefined" && navigator.language) || "en";
		if (lang.toLowerCase().startsWith("zh")) return "zh-CN";
	} catch {
		// ignore
	}
	return "en";
}

/**
 * 显式切换语言(由 content script 设置 storage 或 settings)
 */
export function setLocale(locale: Locale) {
	if (LOCALES[locale]) currentLocale = locale;
}

/**
 * 取当前语言
 */
export function getLocale(): Locale {
	return currentLocale;
}

/**
 * 翻译函数
 * @param ns       命名空间(popup / options / common / overlay)
 * @param key      词条 key
 * @param fallback 兜底值(可选),未命中 locale 表时返回
 */
export function t(ns: Namespace, key: string, fallback?: string): string {
	const table = LOCALES[currentLocale]?.[ns];
	if (table && key in table && table[key]) return table[key];

	// 回退英文
	const enTable = EN[ns];
	if (enTable && key in enTable && enTable[key]) return enTable[key];

	// 最后回退到 fallback / 原 key
	return fallback ?? key;
}

/**
 * 批量翻译对象(把 { "Save": "save", ... } 转成中文版)
 * 用于数据驱动的标签,例如 popup tabs
 */
export function tMap(ns: Namespace, items: Record<string, string>): Record<string, string> {
	const result: Record<string, string> = {};
	for (const [key, value] of Object.entries(items)) {
		result[key] = t(ns, value, value);
	}
	return result;
}

/**
 * 自动初始化(模块首次加载时根据浏览器语言决定默认 locale)
 */
(function autoInit() {
	currentLocale = detectLocale();
})();
