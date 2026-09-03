// filepath: src/extension/utils/i18n/en.ts
/**
 * 英文 fallback 表(所有 t() 调用必须有英文原文 key)
 *
 * 当 zh-CN 表里没有对应 key 时,自动回退到原文,
 * 保证哪怕汉化未完成 UI 也不会出现空白。
 */
import type { LocaleTable } from "./types";

export const EN: LocaleTable = {
	popup: {
		Dashboard: "Dashboard",
		Market: "Market",
		Calculator: "Calculator",
		Stocks: "Stocks",
		Notifications: "Notifications",
		Settings: "Settings",
		Loading: "Loading...",
	},
	options: {
		About: "About",
		Changelog: "Changelog",
		Preferences: "Preferences",
		Export: "Export",
		"Missing Permissions": "Missing Permissions",
		Connections: "Connections",
		Financial: "Financial",
		Global: "Global",
		Internal: "Internal",
		QoL: "QoL",
		Notifications: "Notifications",
		Popup: "Popup",
		API: "API",
		Sidebar: "Sidebar",
		Chat: "Chat",
		Advanced: "Advanced",
		Money: "Money",
		Markets: "Markets",
		Items: "Items",
		Information: "Information",
		Combat: "Combat",
		Travel: "Travel",
		Faction: "Faction",
		Profile: "Profile",
		Companies: "Companies",
		Gym: "Gym",
		Speed: "Speed",
		Racing: "Racing",
		Services: "Services",
		Targets: "Targets",
		"Popup Tabs": "Popup Tabs",
		"Quick Links": "Quick Links",
		Theme: "Theme",
		Language: "Language",
		Save: "Save",
		Cancel: "Cancel",
		Reset: "Reset",
	},
	common: {
		Yes: "Yes",
		No: "No",
		On: "On",
		Off: "Off",
		Enabled: "Enabled",
		Disabled: "Disabled",
		Search: "Search",
		Filter: "Filter",
		Apply: "Apply",
		Close: "Close",
		Open: "Open",
		Confirm: "Confirm",
	},
	overlay: {
		// Reserved for runtime DOM translator (added in step 6)
	},
};
