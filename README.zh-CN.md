# TornTools 中文版 (TornTools CN)

> 基于 [TornTools](https://github.com/Mephiles/torntools_extension) 的简体中文汉化衍生项目。
> 上游原作者:**Mephiles** (Gregor Kaljulaid, Torn 玩家 ID `[2087524]`)及贡献者。
> 本衍生项目使用 GPL-3.0 协议,保留上游版权。

Torn 是一款基于文字的角色扮演网页游戏,英文界面让中文玩家感到壁垒。TornTools 是 Torn 玩家社区最受欢迎的浏览器增强工具之一,本仓库在不改动上游功能的前提下,把它的界面翻译成简体中文。

---

## 与上游差异

- **新增 `src/extension/utils/i18n/` 模块**:极简的 `t(ns, key)` 函数 + `en` / `zh-CN` 两份 locale 表
- **运行时 DOM 翻译覆盖**:`src/extension/entrypoints/i18n-overlay.content.ts`
  - 仅当浏览器语言为中文时启用
  - 监听 DOM 变化,翻译 TornTools 注入到 TORN 页面的所有 UI 文本
  - 不动源码、不动功能,跟随上游更新不会冲突
- **Manifest 改写**(`wxt.config.ts`):扩展名称、描述改为中文,作者标注为衍生项目
- **已重构的高频 UI**:
  - `popup/tabs.ts` — 弹窗标签(面板/市场/计算器/股票/通知)
  - `popup/.../GlobalLayout.svelte` — 设置按钮、加载提示
  - `options/.../GlobalLayout.svelte` — 顶部导航
  - `options/.../configuration.ts` — 设置分组(Internal / Global / Financial / QoL / Connections)
- **`popup/index.html` 与 `options/index.html`**`:`<html lang="zh-CN">`,标题中文化

---

## 翻译策略

本衍生项目采用**双轨翻译**方案,而不是把 800+ 源文件里的硬编码英文全部替换:

1. **静态 UI**(popup、options 顶部导航、分组标题等):通过 `t("namespace", "key")` 重构,构建时替换为中文。
2. **动态 UI**(TornTools 注入到 TORN 页面的 199 个 feature、60 个 userscript):不修改源码,而是部署一个 DOM 翻译 content script,运行时遍历可见文本节点并查表替换。

**为什么不全量重构源码?**

- TornTools 上游更新频繁,全量重构会让 merge conflict 变成噩梦
- 词典只需追加键值对就能生效,与上游解耦
- 维护成本:一次脚本可覆盖未来数十次功能更新

---

## 翻译词典

| 文件 | 用途 |
| --- | --- |
| `src/extension/utils/i18n/en.ts` | 英文 fallback 表(所有 t() 调用的 key 兜底) |
| `src/extension/utils/i18n/zh-CN.ts` | 简体中文静态 UI 表 |
| `src/extension/utils/i18n/overlay.ts` | 运行时 DOM 翻译词典(覆盖动态 UI) |
| `torn-cn-dictionary.md` | 主站翻译总词典(已存在,本项目可复用) |

词典基础采用 TORN 中文玩家社区约定译法(锅巴汉化 + 官方 Wiki):

- `Energy=能量` / `Nerve=勇气` / `Happy=幸福度` / `Life=生命值`
- `Merits=功勋点` / `Rank=段位` / `Respect=面子` / `Bust=劫狱`
- 枪械型号、药品品牌、能量饮料、酒类品牌等**专有名词保留原文**

---

## 开发

### 环境

- [Bun](https://bun.sh) ≥ 1.4(项目使用 `bun.lock`,不是 npm/yarn/pnpm)
- [wxt](https://wxt.dev) ≥ 0.21(由 `bun install` 时通过 `postinstall` 自动安装)

### 安装依赖

```bash
bun install
```

### 开发模式(Chrome)

```bash
bun run dev:chrome
```

`wxt` 会自动检测变更并重新构建,扩展加载路径在终端日志中。

### 构建生产包

```bash
bun run build          # 同时构建 Chrome 和 Firefox
bun run zip            # 生成 .zip 上架包
```

构建产物:

- `output/chrome-mv3/` — Chrome 用的 MV3 扩展目录
- `output/chrome-mv3.zip` — Chrome Web Store 上架包
- `output/firefox-mv2/` — Firefox 用的 MV2 扩展目录
- `output/firefox-mv2.zip` — Firefox Add-ons 上架包

### 类型检查 & Lint

```bash
bun run types          # tsc --noEmit
bun run lint           # oxlint
bun run format         # oxfmt --check
bun run check:fix      # 自动修复 lint + format
```

### 同步上游

```bash
git fetch upstream
git merge upstream/master
```

合并后如果 `src/extension/utils/i18n/*.ts` 出现冲突,优先保留本仓库的汉化版本。

---

## 词典维护

发现新版本 TornTools 引入未翻译的英文,有两种补充方式:

### 1. 静态 UI(在 .svelte / .ts 文件里)

```svelte
<!-- popup/components/SettingsPage.svelte -->
<script lang="ts">
    import { t } from "@extension/utils/i18n";
</script>

<button>{t("options", "Save")}</button>
```

然后在 `src/extension/utils/i18n/zh-CN.ts` 补上对应翻译:

```ts
export const ZH_CN: LocaleTable = {
    options: {
        Save: "保存",
        // ...
    },
};
```

### 2. 动态 UI(TornTools 注入到 TORN 页面的)

直接在 `src/extension/utils/i18n/overlay.ts` 里追加键值对:

```ts
export const OVERLAY_DICT: I18nRecord = {
    "New feature name": "新功能中文名",
    // ...
};
```

> ⚠️ 子串匹配按 key 长度降序,过短(如 3 字符以下)的 key 会被忽略以避免误命中。

---

## 上架到商店

### Chrome Web Store

1. 注册 [Chrome Web Store 开发者账号](https://chrome.google.com/webstore/devconsole/)(一次性 $5 USD 注册费)
2. 用 `bun run zip:chrome` 生成 `.zip` 包
3. 在开发者控制台上传、填写描述、截图(可用汉化后的界面)
4. 提交审核。Chrome 审核一般 1-3 个工作日

### Firefox Add-ons

1. 注册 [Mozilla Add-ons 开发者账号](https://addons.mozilla.org/)(免费)
2. 用 `bun run zip:firefox` 生成 `.zip` 包
3. 提交审核。Firefox 审核一般几天

### Edge Add-ons

与 Chrome MV3 兼容,直接用 `bun run zip:chrome` 的产物,在 Partner Center 提交

---

## 致谢

- 原项目 [Mephiles/torntools_extension](https://github.com/Mephiles/torntools_extension) 及所有贡献者([DeKleineKobini](https://github.com/DeKleineKobini)、[Sashank999](https://github.com/Sashank999)、[Harpush](https://github.com/Harpush) 等)
- 中文翻译基础:锅巴汉化(原 `pakeh2866/Torn_js`)
- 本衍生项目:CMDRKilmer

---

## 协议

[GPL-3.0](./LICENSE.md) — 与上游保持一致。任何衍生项目同样需要开源,并标注原作者。