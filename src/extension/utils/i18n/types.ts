// filepath: src/extension/utils/i18n/types.ts
/**
 * i18n 类型定义
 */

export type Locale = "en" | "zh-CN";

export interface I18nRecord {
	[key: string]: string;
}

/**
 * 按分类组织的扁平化字符串表
 */
export type LocaleTable = Record<string, I18nRecord>;

/**
 * 命名空间(t 函数的第一个参数),便于按 UI 分区
 */
export type Namespace = "common" | "popup" | "options" | "overlay";
