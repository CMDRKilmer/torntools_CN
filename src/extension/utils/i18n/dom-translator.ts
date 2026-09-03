// filepath: src/extension/utils/i18n/dom-translator.ts
/**
 * 通用 DOM 翻译器
 *
 * 被 popup/options/background-spawned UI 在 onMount 时调用,
 * 在 Chrome 扩展自身页面里跑(没有 content script 注入,只能由 entry 自己调用)。
 *
 * 工作机制:
 *   1. 仅在 navigator.language 以 zh 开头时启用
 *   2. 扫描 document.body 的可见文本节点,查 OVERLAY_DICT 表替换
 *   3. MutationObserver 监听 DOM 变化,翻译新增的文本
 *   4. 跳过 <script>/<style>/<textarea>/<input> 与 id 以 tt- 开头的元素
 *
 * 设计目标:
 *   - 与现有 t() 静态重构互补:重构覆盖入口层组件,本脚本覆盖所有深层 Svelte
 *     组件里的硬编码英文标签
 *   - 性能:WeakSet 记录已翻译节点,避免重复扫描
 */
import { OVERLAY_DICT } from "./overlay";

const translatedNodes = new WeakSet<Element>();
let observer: MutationObserver | null = null;

export function shouldEnableTranslation(): boolean {
	try {
		const lang = navigator.language || "";
		return lang.toLowerCase().startsWith("zh");
	} catch {
		return false;
	}
}

function isInsideSkip(node: Node | null): boolean {
	let cur: Element | null = node instanceof Element ? node : (node?.parentElement ?? null);
	while (cur) {
		if (cur.id && cur.id.startsWith("tt-")) return true;
		cur = cur.parentElement;
	}
	return false;
}

function shouldSkipTag(tag: string): boolean {
	const t = tag.toLowerCase();
	return t === "script" || t === "style" || t === "noscript" || t === "textarea" || t === "input" || t === "code";
}

function translateTextNode(node: Text): boolean {
	if (!node.nodeValue) return false;
	if (translatedNodes.has(node.parentElement as Element)) return false;
	const original = node.nodeValue;
	if (!/[a-zA-Z]/.test(original)) return false;
	const trimmed = original.trim();
	if (!trimmed) return false;

	// 1) 精确匹配(整字符串 trim 后)
	const exact = OVERLAY_DICT[trimmed];
	if (exact && exact !== trimmed) {
		const start = original.indexOf(trimmed);
		const before = start > 0 ? original.slice(0, start) : "";
		const after = start + trimmed.length < original.length ? original.slice(start + trimmed.length) : "";
		node.nodeValue = before + exact + after;
		translatedNodes.add(node.parentElement as Element);
		return true;
	}

	// 2) 子串匹配
	const keys = Object.keys(OVERLAY_DICT).sort((a, b) => b.length - a.length);
	let result = original;
	let hit = false;
	for (const key of keys) {
		if (key.length < 3) continue;
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

function translateElement(el: Element): void {
	if (!el || isInsideSkip(el)) return;
	const tag = el.tagName;
	if (!tag || shouldSkipTag(tag)) return;

	const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
		acceptNode(node) {
			const t = (node.nodeValue || "").trim();
			if (!t || !/[a-zA-Z]/.test(t)) return NodeFilter.FILTER_REJECT;
			const parent = node.parentElement;
			if (!parent || isInsideSkip(parent)) return NodeFilter.FILTER_REJECT;
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

function translateAttributes(el: Element): void {
	if (!el || isInsideSkip(el)) return;
	const attrs = ["placeholder", "title", "alt", "aria-label"];
	for (const attr of attrs) {
		const v = el.getAttribute(attr);
		if (!v || !/[a-zA-Z]/.test(v)) continue;
		const trimmed = v.trim();
		const exact = OVERLAY_DICT[trimmed];
		if (exact) el.setAttribute(attr, v.replace(trimmed, exact));
	}
}

/**
 * 在 entry 文件(popup.ts / options.ts)的 onMount 里调用一次
 */
export function mountDomTranslator(): () => void {
	if (!shouldEnableTranslation()) {
		return () => undefined;
	}
	if (observer) {
		return () => observer?.disconnect();
	}

	// 等 DOM 可用
	const start = () => {
		translateElement(document.body);
		translateAttributes(document.body);

		observer = new MutationObserver((mutations) => {
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
	};

	if (document.body) start();
	else document.addEventListener("DOMContentLoaded", start, { once: true });

	return () => observer?.disconnect();
}
