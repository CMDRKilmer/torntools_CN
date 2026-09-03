import { t } from "@extension/utils/i18n";

export interface PreferenceSection {
	id: string;
	title: string;
}

export interface PreferenceGroup {
	id: PreferenceGroupId;
	title: string;
	sections?: readonly PreferenceSection[];
}

export type PreferenceGroupId = "internal" | "global" | "financial" | "qol" | "connections";

export const PREFERENCE_GROUPS = [
	{
		id: "internal",
		title: t("options", "Internal"),
		sections: [
			{ id: "internal", title: t("options", "Internal") },
			{ id: "popup", title: t("options", "Popup") },
			{ id: "notifications", title: t("options", "Notifications") },
			{ id: "api", title: t("options", "API") },
		],
	},
	{
		id: "global",
		title: t("options", "Global"),
		sections: [
			{ id: "global", title: t("options", "Global") },
			{ id: "sidebar", title: t("options", "Sidebar") },
			{ id: "chat", title: t("options", "Chat") },
			{ id: "advanced", title: t("options", "Advanced") },
		],
	},
	{
		id: "financial",
		title: t("options", "Financial"),
		sections: [
			{ id: "money", title: t("options", "Money") },
			{ id: "markets", title: t("options", "Markets") },
			{ id: "items", title: t("options", "Items") },
		],
	},
	{
		id: "qol",
		title: t("options", "QoL"),
		sections: [
			{ id: "information", title: t("options", "Information") },
			{ id: "combat", title: t("options", "Combat") },
			{ id: "travel", title: t("options", "Travel") },
			{ id: "faction", title: t("options", "Faction") },
			{ id: "profile", title: t("options", "Profile") },
			{ id: "companies", title: t("options", "Companies") },
			{ id: "gym", title: t("options", "Gym") },
			{ id: "speed", title: t("options", "Speed") },
			{ id: "racing", title: t("options", "Racing") },
		],
	},
	{
		id: "connections",
		title: t("options", "Connections"),
		sections: [{ id: "services", title: t("options", "Services") }],
	},
] as const satisfies readonly PreferenceGroup[];
export const DEFAULT_GROUP_ID: PreferenceGroupId = "internal";
