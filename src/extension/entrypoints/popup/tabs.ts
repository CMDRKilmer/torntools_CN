import type { DatabaseSettings } from "@common/utils/data/database";
import { t } from "@extension/utils/i18n";

export type PopupTabKey = "dashboard" | "marketSearch" | "calculator" | "stocksOverview" | "notifications";

export interface PopupTab {
	key: PopupTabKey;
	label: string;
	path: string;
}

const POPUP_TABS: PopupTab[] = [
	{ key: "dashboard", label: t("popup", "Dashboard"), path: "/dashboard" },
	{ key: "marketSearch", label: t("popup", "Market"), path: "/market" },
	{ key: "calculator", label: t("popup", "Calculator"), path: "/calculator" },
	{ key: "stocksOverview", label: t("popup", "Stocks"), path: "/stocks" },
	{ key: "notifications", label: t("popup", "Notifications"), path: "/notifications" },
];

export function getEnabledPopupTabs(settings: DatabaseSettings | undefined) {
	if (!settings?.pages?.popup) return [];

	return POPUP_TABS.filter((tab) => settings.pages.popup[tab.key]);
}

export function getStartupPath(settings: DatabaseSettings | undefined, hasApiKey: boolean) {
	if (!hasApiKey) return "/initialize";

	const enabledTabs = getEnabledPopupTabs(settings);
	const defaultTab = enabledTabs.find((tab) => tab.key === settings?.pages?.popup?.defaultTab);

	return defaultTab?.path ?? enabledTabs[0]?.path ?? "/dashboard";
}
