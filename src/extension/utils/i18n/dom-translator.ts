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
 *   5. 跳过已经包含中文字符的文本节点(防止重复翻译)
 *   6. 翻译 placeholder/title/alt/aria-label/data-title/data-original-title
 *      /data-tooltip/data-content 等 tooltip 类属性
 *
 * 设计目标:
 *   - 与现有 t() 静态重构互补:重构覆盖入口层组件,本脚本覆盖所有深层 Svelte
 *     组件里的硬编码英文标签
 *   - 性能:WeakSet 记录已翻译节点,避免重复扫描
 */
import { OVERLAY_DICT } from "./overlay";

const translatedNodes = new WeakSet<Element>();
let observer: MutationObserver | null = null;

/** 已翻译过的文本缓存(原文本 → 译文本),避免重复查表 */
const translatedCache = new Map<string, string>();

/** 翻译时使用的属性白名单(Tooltip + 关键 ARIA) */
const TRANSLATABLE_ATTRS = ["placeholder", "title", "alt", "aria-label", "data-title", "data-original-title", "data-tooltip", "data-content", "data-tip"];

/** 中文检测正则:含汉字则认为已翻译,跳过 */
const CN_CHAR_RE = /[\u4e00-\u9fff]/;

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

/**
 * 翻译一个文本节点。
 * 返回 true 表示有变化,父元素将被加入 translatedNodes 防止重复扫描。
 */
function translateTextNode(node: Text): boolean {
	const parent = node.parentElement;
	if (parent && translatedNodes.has(parent)) return false;
	const original = node.nodeValue || "";
	if (!original || !/[a-zA-Z]/.test(original)) return false; // 没有英文字母
	if (CN_CHAR_RE.test(original)) return false; // 已含中文,跳过

	const trimmed = original.trim();
	if (!trimmed) return false;

	// 1) 精确匹配(整字符串 trim 后)
	const exact = translatedCache.get(trimmed) ?? OVERLAY_DICT[trimmed];
	if (exact && exact !== trimmed) {
		translatedCache.set(trimmed, exact);
		const start = original.indexOf(trimmed);
		const before = start > 0 ? original.slice(0, start) : "";
		const after = start + trimmed.length < original.length ? original.slice(start + trimmed.length) : "";
		node.nodeValue = before + exact + after;
		if (parent) translatedNodes.add(parent);
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
		if (parent) translatedNodes.add(parent);
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
			if (CN_CHAR_RE.test(t)) return NodeFilter.FILTER_REJECT;
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
	for (const attr of TRANSLATABLE_ATTRS) {
		const v = el.getAttribute(attr);
		if (!v || !/[a-zA-Z]/.test(v)) continue;
		if (CN_CHAR_RE.test(v)) continue;
		const trimmed = v.trim();

		// 1) 精确匹配
		const exact = translatedCache.get(trimmed) ?? OVERLAY_DICT[trimmed];
		if (exact && exact !== trimmed) {
			translatedCache.set(trimmed, exact);
			el.setAttribute(attr, v.replace(trimmed, exact));
			continue;
		}

		// 2) 子串匹配(长 key 优先)
		const keys = Object.keys(OVERLAY_DICT).sort((a, b) => b.length - a.length);
		let result = v;
		let hit = false;
		for (const key of keys) {
			if (key.length < 3) continue;
			if (!result.includes(key)) continue;
			result = result.split(key).join(OVERLAY_DICT[key]);
			hit = true;
		}
		if (hit) {
			el.setAttribute(attr, result);
		}
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
			attributeFilter: TRANSLATABLE_ATTRS,
		});
	};

	if (document.body) start();
	else document.addEventListener("DOMContentLoaded", start, { once: true });

	return () => observer?.disconnect();
}
