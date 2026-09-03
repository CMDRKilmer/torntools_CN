import { settings } from "@common/utils/data/database";
import { requireElement } from "@common/utils/functions/requires";
import { getPageStatus } from "@common/utils/functions/torn";
import { toClipboard } from "@common/utils/functions/utilities";
import { Feature } from "@features/feature";

async function addID() {
	await requireElement(".basic-info .info-table > *:first-child");

	const title = document.querySelector("h4#skip-to-content");
	if (!title) return;

	// 兼容部分页面标题不包含 's Profile 字样(例如自己/下线/被封号档案),避免正则 match 返回 null
	const rawText = (title.textContent || "").trim();
	const match = rawText.match(/(.*)'s? Profile/i);
	if (!match) return;

	const displayName = match[1];
	let userId: number | null = null;
	try {
		userId = getUserID();
	} catch {
		// 信息表还没渲染或选择器失效,放弃追加 ID
		return;
	}

	title.textContent = `${displayName} [${userId}]`;
	title.setAttribute("title", "Click to copy.");
	title.addEventListener("click", copyID);
}
function copyID() {
	const el = document.querySelector("h4#skip-to-content");
	if (el) toClipboard(el.textContent || "");
}

function getUserID() {
	const el = document.querySelector(".basic-information .profile-container ul.info-table .user-info-value > *:first-child");
	const match = (el?.textContent || "").match(/(?<=\[)\d*(?=])/i);
	if (!match) throw new Error("User ID not found");
	return parseInt(match[0], 10);
}

export default class ProfileIDFeature extends Feature {
	constructor() {
		super("Profile ID", "profile");
	}

	override precondition() {
		return getPageStatus().access;
	}

	override isEnabled() {
		return settings.pages.profile.idBesideProfileName;
	}

	override async execute() {
		await addID();
	}

	override storageKeys() {
		return ["settings.pages.profile.idBesideProfileName"];
	}
}
