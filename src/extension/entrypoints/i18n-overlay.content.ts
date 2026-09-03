// filepath: src/extension/entrypoints/i18n-overlay.content.ts
/**
 * 运行时 DOM 翻译覆盖 content script
 *
 * 工作机制:
 *   1. 仅在浏览器语言为中文时启用(自动检测)
 *   2. 扫描可见 DOM 文本节点,用 OVERLAY_DICT 做精确 + 子串替换
 *   3. 用 MutationObserver 监听 DOM 变化,翻译动态插入的节点
 *   4. 跳过已经翻译过的节点(避免重复翻译)
 *   5. 不翻译 TornTools 自身控制面板和按钮(避免误伤)
 *
 * 配合 t() 模块使用:静态 UI 走 t(),动态注入 UI 走本脚本。
 */
import { OVERLAY_DICT } from "@extension/utils/i18n/overlay";

function shouldEnable(): boolean {
	try {
		const lang = navigator.language || "";
		return lang.toLowerCase().startsWith("zh");
	} catch {
		return false;
	}
}

function waitForBody(): Promise<void> {
	return new Promise((resolve) => {
		if (document.body) {
			resolve();
		} else {
			document.addEventListener("DOMContentLoaded", () => resolve(), { once: true });
		}
	});
}

const translatedNodes = new WeakSet<Element>();

function isInsideTorntoolsControlPanel(node: Node | null): boolean {
	let cur: Element | null = node instanceof Element ? node : node?.parentElement ?? null;
	while (cur) {
		if (cur.id && (cur.id.startsWith("tt-") || cur.id === "torn-cn-panel" || cur.id === "torn-cn-notice")) {
			return true;
		}
		cur = cur.parentElement;
	}
	return false;
}

function shouldSkipTag(tag: string): boolean {
	const t = tag.toLowerCase();
	return t === "script" || t === "style" || t === "noscript" || t === "textarea" || t === "input";
}

function translateTextNode(node: Text): boolean {
	if (!node.nodeValue || translatedNodes.has(node.parentElement as Element)) return false;
	const original = node.nodeValue;
	if (!/[a-zA-Z]/.test(original)) return false; // 没有英文字母
	const trimmed = original.trim();
	if (!trimmed) return false;

	// 1) 精确匹配
	const exact = OVERLAY_DICT[trimmed];
	if (exact && exact !== trimmed) {
		const leading = original.startsWith(trimmed) ? "" : original.slice(0, original.indexOf(trimmed));
		const trailing =
			original.endsWith(trimmed) || original.indexOf(trimmed) + trimmed.length >= original.length
				? ""
				: original.slice(original.indexOf(trimmed) + trimmed.length);
		node.nodeValue = leading + exact + trailing;
		translatedNodes.add(node.parentElement as Element);
		return true;
	}

	// 2) 子串匹配(按 key 长度降序,避免短 key 先命中破坏长 key)
	const keys = Object.keys(OVERLAY_DICT).sort((a, b) => b.length - a.length);
	let result = original;
	let hit = false;
	for (const key of keys) {
		if (key.length < 3) continue; // 太短的 key 容易误命中
		if (!result.includes(key)) continue;
		result = result.split(key).join(OVERLAY_DICT[key]);
		hit = true;
	}
	if (hit) {
		node.nodeValue = result;
		translatedNodes.add(node.parentElement as Element);
		return true;
	}
	return false;
}

function translateElement(el: Element) {
	if (!el || isInsideTorntoolsControlPanel(el)) return;
	const tag = el.tagName;
	if (!tag || shouldSkipTag(tag)) return;

	// 翻译文本子节点
	const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
		acceptNode(node) {
		const t = (node.nodeValue || "").trim();
		if (!t || !/[a-zA-Z]/.test(t)) return NodeFilter.FILTER_REJECT;
		const parent = node.parentElement;
		if (!parent || isInsideTorntoolsControlPanel(parent)) return NodeFilter.FILTER_REJECT;
		return NodeFilter.FILTER_ACCEPT;
		},
	});
	const nodes: Text[] = [];
	let cur = walker.nextNode();
	while (cur) {
		nodes.push(cur as Text);
		cur = walker.nextNode();
	}
	for (const n of nodes) translateTextNode(n);
}

function translateAttributes(el: Element) {
	if (!el || isInsideTorntoolsControlPanel(el)) return;
	const attrs = ["placeholder", "title", "alt", "aria-label"];
	for (const attr of attrs) {
		const v = el.getAttribute(attr);
		if (!v || !/[a-zA-Z]/.test(v)) continue;
		const trimmed = v.trim();
		const exact = OVERLAY_DICT[trimmed];
		if (exact) {
		el.setAttribute(attr, v.replace(trimmed, exact));
		}
	}
}

function init() {
	translateElement(document.body);
	translateAttributes(document.body);

	const observer = new MutationObserver((mutations) => {
		for (const m of mutations) {
		if (m.type === "childList") {
			for (const node of Array.from(m.addedNodes)) {
				if (node.nodeType === 1) {
					translateElement(node as Element);
					translateAttributes(node as Element);
				} else if (node.nodeType === 3) {
					translateTextNode(node as Text);
				}
			}
		} else if (m.type === "attributes") {
			translateAttributes(m.target as Element);
		}
		}
	});

	observer.observe(document.body, {
		childList: true,
		subtree: true,
		attributes: true,
		attributeFilter: ["placeholder", "title", "alt", "aria-label"],
	});
}

// noinspection JSUnusedGlobalSymbols
export default defineContentScript({
	matches: ["https://*.torn.com/*"],
	excludeMatches: [
		"https://*.torn.com/logout.php*",
		"https://api.torn.com/*",
		"https://wiki.torn.com/*",
	],
	runAt: "document_idle",
	async main() {
		if (!shouldEnable()) return;
		await waitForBody();
		init();
	},
});