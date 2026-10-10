# Torn API 中文整理文档

> **来源页面**：<https://www.torn.com/api.html>
> **抓取日期**：2026-10-10
> **机读数据**：[selections.json](./selections.json)（9 大类 / 223 项 selection，含访问等级与 v1/v2 版本标记）
> **整理说明**：selection 名称、错误码名称、ToS 选项值等**官方标识保留英文原文**（它们是代码里要写死的字面量），叙述部分为中文翻译与结构化整理。
> **实测校正**：2026-10-10 用真实密钥对 163 项 selection 逐个实测，发现官方表格有 7 处版本标记错误、1 项 selection 未收录，已在本文与 [selections.json](./selections.json) 中修正，详见 [9.5](#95-实测校验与官方文档差异)。

## 目录

1. [快速开始：请求格式](#1-快速开始请求格式)
2. [概述](#2-概述)
3. [可接受使用规范](#3-可接受使用规范)
4. [API 服务条款（ToS）要求](#4-api-服务条款tos要求)
5. [关于「不公平优势」](#5-关于不公平优势)
6. [日志记录](#6-日志记录)
7. [自动限流与封禁](#7-自动限流与封禁)
8. [缓存机制](#8-缓存机制)
9. [密钥访问等级与 selection 完整表](#9-密钥访问等级与-selection-完整表)
10. [错误码](#10-错误码)
11. [官方链接](#11-官方链接)

---

## 1. 快速开始：请求格式

### 1.1 基础地址

| 版本 | 请求格式 | 密钥传递方式 |
| --- | --- | --- |
| API v1 | `https://api.torn.com/{section}/{id}?selections={s1,s2}&key={API_KEY}` | URL 查询参数 `key` |
| API v2 | `https://api.torn.com/v2/{section}/{id}?selections={s1,s2}&legacy={...}` | 请求头 `Authorization: ApiKey {API_KEY}` |

- `{section}` 取值为本文第 9 章的 9 个分类：`user`、`faction`、`company`、`property`、`market`、`torn`、`racing`、`forum`、`key`。
- `{id}` 为目标对象 ID（如用户 ID）；部分 section（如 `torn`、`market`）可不带 ID。
- 多个 selection 用英文逗号连接，例如：`selections=basic,profile,bars`。

v1 示例：

```text
https://api.torn.com/user/1234567?selections=basic,profile&key=XXXXXXXXXXXXXXXX
```

- v1 的具体拼接方式来自官方 api.html 的「Try It!」页面逻辑。
- v2 的 `selections` / `legacy` 参数与 `Authorization: ApiKey` 请求头写法，可参考本仓库实现：[api-fetcher.ts](../../src/common/utils/functions/api-fetcher.ts)（`FETCH_PLATFORMS.tornv2` 与 `buildUrl()` / `buildHeaders()`）。

### 1.2 在线工具

| 工具 | 链接 |
| --- | --- |
| API v2 Playground | <https://api-playground.torn.com/> |
| API v2 Swagger（接口明细） | <https://www.torn.com/swagger.php> |
| Custom Key Builder（按权限勾选生成密钥） | 官方 api.html 页内「Custom Key Builder」 |

---

## 2. 概述

Torn API 的目标是为玩家提供一个**官方支持、只读**的途径，用于从 Torn 拉取关于自己、帮派或公司的有用信息。你既可以只为自己取账号数据，也可以构建一个面向整个社区、基于这些数据做有趣事情的网站。

无论你是在做一个战争期间辅助帮派的浏览器扩展、一个提供即时通知的手机应用，还是一个用于绘制数据图表的网站——可能性是无穷的——这一切都只需要一个 **16 位字符的 API 密钥**。官方鼓励你发挥创意，构建能扩展 Torn 玩法与乐趣的功能和工具。

---

## 3. 可接受使用规范

- 这套系统的设计目标是：**你只需要向用户索取一个 API 密钥**即可。用户的所有信息都能仅凭其密钥取得，不应当存在索取用户名或用户 ID 的需求。**永远不要**向任何用户索取 Torn 密码。
- 你必须妥善、保密地保护密钥以及由密钥获得的数据，除非密钥所有者明确许可。当用户把密钥交给你时，他们是把信任交给了你——不要滥用这份信任。违规应用会被**立即永久封禁**访问 API 的权限。
- 官方恳请所有使用 API 的网站和应用遵守 Torn 的**禁止广告政策**，以保证良好的用户体验；但可以申请例外。若你希望投放广告、接受自愿性的真实货币捐赠，或向用户收费，请[联系我们](mailto:webmaster@torn.com)。
- 请确保脚本经过优化，**只请求当前需求所需的信息**，请求的数据越少越好；这能提升加载速度并减轻 Torn 服务器压力。
- 所有脚本或工具都必须遵守下述 API 服务条款（ToS）规范。

---

## 4. API 服务条款（ToS）要求

在创建脚本、油猴脚本、表格（sheet）、扩展、API 服务、机器人、第三方网站或任何其他 API 工具（统称「服务」）时，**最终用户必须清楚他们的 API 密钥将被如何使用**。

下面这张表列出了对最终用户最重要的信息，让他们对所用服务有个清晰预期：

| 数据存储<br>Data Storage | 数据共享<br>Data Sharing | 使用目的<br>Purpose of Use | 密钥存储与共享<br>Key Storage & Sharing | 密钥权限等级<br>Key Access Level |
| --- | --- | --- | --- | --- |
| 数据是否会因任何目的被存储？ | 除最终用户外，还有谁能访问这些数据？ | 存储的数据被用于什么？ | API 密钥是否会被安全存储、谁能访问？ | 需要什么权限等级或具体勾选哪些 selection？ |
| `No / Only locally`<br>`Temporary - less than a minute`<br>`Temporary - less than a day`<br>`Persistent - until account deletion`<br>`Persistent - forever` | `Nobody`<br>`Faction`<br>`Friends & faction`<br>`General public`<br>`Service owners`<br>`Service owners & their customers` | `Non malicious statistical analysis`<br>`Public amusement`<br>`Public community tools`<br>`Competitive advantage [Please specify]`<br>`Personal gain [Please specify]`<br>`Other [Please specify]` | `Not stored / Not shared`<br>`Stored / Used only for automation`<br>`Stored / Shared with the faction`<br>`Stored / Shared with other services` | `Public`<br>`Minimal`<br>`Limited`<br>`Full`<br>`Custom - specify selections` |

### 4.1 判定规则

- 如果服务**不存储、不共享**数据和密钥，只需声明这一点即可；否则，必须在用户提供 API 密钥的任何位置，以上表格式**清晰可见地**说明上述 ToS 信息。
- 当你的服务与其他服务进行**选择性集成（opt-in）**时，至少要提供你所允许集成的那个服务的 ToS 链接。
- 当你的服务与其他服务进行**自动集成**时，你的 ToS 必须覆盖你所集成服务的用途。
- 将密钥用于 ToS 所述之外的目的，或欺骗最终用户、让其误以为密钥用于其他目的，均属**违规且会被处罚**。
- 这些规则同样适用于**从其他玩家处购买 API 密钥**的人。
- 若不确定如何描述你的服务，可联系 [Torn 官方人员](https://www.torn.com/staff.php)。
- 若怀疑自己的密钥被滥用，可使用 `'key' -> 'log'` selection 查看并监控 API 密钥的使用历史。
- 所有服务都必须遵守 [Torn 的脚本规则](https://www.torn.com/rules.php)。

### 4.2 ToS 示例

**示例 1** — 一个使用 `'user' -> 'log'` 展示特定玩法统计数据、且仅将密钥/数据保存在用户浏览器中的第三方网站。

> ToS：你完全掌控自己的数据；一切都保存在你的浏览器中，不向任何地方发送数据。

这类网站不强制要求表格形式的 ToS，但对最终用户有帮助，可以写成：

| Data Storage | Data Sharing | Purpose of Use | Key Storage & Sharing | Key Access Level |
| --- | --- | --- | --- | --- |
| `Only locally` | `Nobody` | `Not eligible - only end user has access` | `Stored locally / Not shared` | `Full Access` |

**示例 2** — 一个在帮派成员之间共享个人数据、并在自有数据库中存储 API 密钥与私有用户信息的第三方网站。

| Data Storage | Data Sharing | Purpose of Use | Key Storage & Sharing | Key Access Level |
| --- | --- | --- | --- | --- |
| `Persistent - until account deletion or faction change` | `Faction` | `Show information to other faction members` | `Stored remotely securely / Used only for automation` | `Limited Access` |

**示例 3** — 一个基于冷却与其他玩家活动提供通知、并允许完全 opt-in 集成其他服务的浏览器扩展。

> ToS：你完全掌控自己的数据；一切都保存在你的浏览器中，不向任何地方发送数据。你可以在此查看我们详细的 API 使用情况：`link_to_api_usage_page`
>
> `[ ]` 服务 XYZ：勾选以集成服务 XYZ。XYZ 的服务条款见：`link_to_XYZ_tos`
>
> `[ ]` 服务 ZZZ：勾选以集成服务 ZZZ。ZZZ 的服务条款见：`link_to_ZZZ_tos`

这类扩展同样不强制表格形式，但可以写成：

| Data Storage | Data Sharing | Purpose of Use | Key Storage & Sharing | Key Access Level |
| --- | --- | --- | --- | --- |
| `Only locally` | `Nobody` | `Not eligible - only end user has access` | `Stored locally / Not shared` | `Limited Access` |

**示例 4** — 一个拉取当前玩偶/鲜花价格的 Google 表格。

| Data Storage | Data Sharing | Purpose of Use | Key Storage & Sharing | Key Access Level |
| --- | --- | --- | --- | --- |
| `Persistent - Until sheet deletion` | `Everyone with a sheet access` | `Competitive Advantage [Monitoring of underpriced Plushies/Flowers]` | `Stored in code details / Everyone with sheet access` | `Custom : 'market' -> 'itemmarket'` |

**示例 5** — 一个 Discord 帮派机器人，提交的 API 密钥被用于为其他服务拉取数据。

| Data Storage | Data Sharing | Purpose of Use | Key Storage & Sharing | Key Access Level |
| --- | --- | --- | --- | --- |
| `Persistent - data is forever visible on faction discord`<br>`Persistent - data is forever visible on other discord servers`<br>`Persistent - data is saved to server DB` | `Friends & faction`<br>`Service owners & their customers` | `Competitive advantage [Discord notifications about players holding large amounts of cash after selling items through Item Market / Bazaar]`<br>`Personal gain [Selling data gathered with the key to other players / factions]` | `Stored securely / Shared with other services : XYZ Mug Bot, XYZ Cache Bot` | `Limited Access` |

---

## 5. 关于「不公平优势」

官方理解：为 Torn 搭建一套 API 系统可能会让部分用户获得不公平优势。官方希望这套系统是**扩展和增强玩法**，而不是让人更容易在与他人的竞争中占便宜。开发过程中已考虑到这一点，官方也会持续听取反馈并做出必要调整。

---

## 6. 日志记录

请注意：官方会**记录请求的所有细节与输入**并进行例行检查。一旦发生滥用，官方将不经通知地永久封禁相关 IP 地址、密钥与用户对系统的访问。

---

## 7. 自动限流与封禁

- **每个用户**（其名下所有密钥合计）每分钟最多发起 **100 次**独立请求。这几乎足以支撑任何合理需求。
- 使用**无效密钥**的多次请求可能导致**临时 IP 封禁**——你必须在出错时移除已禁用或无效的密钥，以此规避该问题。
- 这些限制可能会为保障 Torn 服务器稳定而**不经通知地变更**。

> 对应错误码：`5`（请求过于频繁）、`8`（IP 被封禁）。

---

## 8. 缓存机制

官方正在建设两类缓存。

### 8.1 服务缓存（Service Cache）

- **所有** API 请求都会被服务端缓存，缓存最长可持续 **30 秒**。因此，两次相邻的**完全相同**的请求会返回同一份数据。
- 目的：降低服务器负载——多个工具/网站/脚本可能几乎同时请求相同数据，通常没必要各自单独处理。
- 副作用：有时你需要最新数据。为此，你可以通过让请求「唯一化」来绕过该缓存，例如加一个 `timestamp` 查询参数（注意：`comment` 参数**不会**用于绕过缓存）。
- **命中服务缓存的请求不消耗 API 密钥配额。**

### 8.2 全局缓存（Global Cache）

- 有若干 selection 是**全局缓存**的：所有用户请求这些 selection 时都会拿到相同的同一份数据，**与使用哪个密钥、请求是否唯一无关**。
- 该类缓存由服务端设置，**无法绕过**。
- 目的：避免某些 selection 带来的潜在不公平优势。
- 目前使用全局缓存的 selection 共 **7 项**：

| section | selection |
| --- | --- |
| `market` | `itemmarket` |
| `market` | `properties` |
| `market` | `rentals` |
| `company` | `companies` |
| `user` | `bazaar` |
| `torn` | `bounties` |
| `user` | `bounties` |

> 实践提示：由于全局缓存不可绕过，依赖上述数据（尤其 `market.itemmarket`）的工具必须自行处理「数据可能已过期」的情况，不能假定每次请求都是实时值。

---

## 9. 密钥访问等级与 selection 完整表

### 9.1 四种访问等级

API 密钥有四种访问等级，它限制了密钥能访问哪些 selection。每个 selection 都被分配了访问等级要求，见下表（颜色与官方页面一致）。

| 等级 | 官方名称 | 说明 |
| --- | --- | --- |
| ⬜ 白 | `Public` | 公开访问 |
| 🟩 绿 | `Minimal Access` | 最低权限 |
| 🟨 黄 | `Limited Access` | 受限权限 |
| 🟥 红 | `Full Access` | 完全权限 |

### 9.2 版本标记

表中 selection 名称前的星号表示版本可用性：

| 标记 | 含义 |
| --- | --- |
| 无标记 | API v1 与 v2 都可用 |
| `*` | 仅 API v1 可用 |
| `**` | 仅 API v2 可用 |
| `***` | 在 v1 与 v2 中的**访问权限不同** |

> 注意：官方表格中的版本标记存在错标。第 9.3 节的标记是**以实测结果为准**的版本；带 `†` 的行表示与官方表格不一致（或官方未收录），差异清单见 [9.5](#95-实测校验与官方文档差异)。

### 9.3 完整 selection 表（9 类，共 223 项）

> **数据来源**：`https://www.torn.com/apipublic.php?lookup=true`（官方 api.html 页面中该表由 JS 动态注入）
> **机读版本**：[selections.json](./selections.json)
> **标记说明**：带 `†` 的行是 2026-10-10 用真实密钥**实测校正或补充**的结果（官方表格标记有误 / 未收录），依据见 [9.5](#95-实测校验与官方文档差异)。

#### user (73 项)

| Selection | 访问等级 | 版本 |
| --- | --- | --- |
| `hof` | Public 公开 | v1/v2 不同 *** |
| `competition` | Public 公开 | 仅 v2 ** |
| `faction` | Public 公开 | 仅 v2 ** |
| `forumposts` | Public 公开 | 仅 v2 ** |
| `forumthreads` | Public 公开 | 仅 v2 ** |
| `job` | Public 公开 | 仅 v2 ** |
| `properties` | Public 公开 | v1 + v2 † |
| `search` | Public 公开 | 仅 v2 ** |
| `snapshot` | Public 公开 | 仅 v2 ** |
| `basic` | Public 公开 | v1 + v2 |
| `bazaar` | Public 公开 | v1 + v2 |
| `bounties` | Public 公开 | 仅 v2 ** † |
| `criminalrecord` | Public 公开 | v1 + v2 |
| `discord` | Public 公开 | v1 + v2 |
| `display` | Public 公开 | v1 + v2 |
| `icons` | Public 公开 | v1 + v2 |
| `lookup` | Public 公开 | v1 + v2 |
| `medals` | Public 公开 | v1 + v2 |
| `personalstats` | Public 公开 | v1 + v2 |
| `profile` | Public 公开 | v1 + v2 |
| `property` | Public 公开 | 仅 v2 ** † |
| `timestamp` | Public 公开 | v1 + v2 |
| `calendar` | Minimal Access 最低权限 | 仅 v2 ** |
| `enlistedcars` | Minimal Access 最低权限 | 仅 v2 ** |
| `forumfeed` | Minimal Access 最低权限 | 仅 v2 ** |
| `forumfriends` | Minimal Access 最低权限 | 仅 v2 ** |
| `forumsubscribedthreads` | Minimal Access 最低权限 | 仅 v2 ** |
| `itemmods` | Minimal Access 最低权限 | 仅 v2 ** |
| `organizedcrime` | Minimal Access 最低权限 | 仅 v2 ** |
| `organizedcrimes` | Minimal Access 最低权限 | 仅 v2 ** |
| `races` | Minimal Access 最低权限 | 仅 v2 ** |
| `racingrecords` | Minimal Access 最低权限 | 仅 v2 ** |
| `virus` | Minimal Access 最低权限 | 仅 v2 ** |
| `ammo` | Minimal Access 最低权限 | v1 + v2 |
| `bars` | Minimal Access 最低权限 | v1 + v2 |
| `cooldowns` | Minimal Access 最低权限 | v1 + v2 |
| `crimes` | Minimal Access 最低权限 | v1 + v2 |
| `education` | Minimal Access 最低权限 | v1 + v2 |
| `equipment` | Minimal Access 最低权限 | v1 + v2 |
| `gym` | Minimal Access 最低权限 | v1 + v2 |
| `honors` | Minimal Access 最低权限 | v1 + v2 |
| `inventory` | Minimal Access 最低权限 | v1 + v2 |
| `jobpoints` | Minimal Access 最低权限 | v1 + v2 |
| `jobranks` | Minimal Access 最低权限 | 仅 v2 ** † |
| `merits` | Minimal Access 最低权限 | v1 + v2 |
| `missions` | Minimal Access 最低权限 | v1 + v2 |
| `notifications` | Minimal Access 最低权限 | v1 + v2 |
| `perks` | Minimal Access 最低权限 | v1 + v2 |
| `refills` | Minimal Access 最低权限 | v1 + v2 |
| `revives` | Minimal Access 最低权限 | v1 + v2 |
| `revivesfull` | Minimal Access 最低权限 | v1 + v2 |
| `skills` | Minimal Access 最低权限 | v1 + v2 |
| `travel` | Minimal Access 最低权限 | v1 + v2 |
| `weaponexp` | Minimal Access 最低权限 | v1 + v2 |
| `workstats` | Minimal Access 最低权限 | v1 + v2 |
| `casino` | Limited Access 受限权限 | 仅 v2 ** |
| `itemmarket` | Limited Access 受限权限 | 仅 v2 ** |
| `list` | Limited Access 受限权限 | 仅 v2 ** |
| `trade` | Limited Access 受限权限 | 仅 v2 ** |
| `trades` | Limited Access 受限权限 | 仅 v2 ** |
| `attacks` | Limited Access 受限权限 | v1 + v2 |
| `attacksfull` | Limited Access 受限权限 | v1 + v2 |
| `battlestats` | Limited Access 受限权限 | v1 + v2 |
| `events` | Limited Access 受限权限 | v1 + v2 |
| `messages` | Limited Access 受限权限 | v1 + v2 |
| `money` | Limited Access 受限权限 | v1 + v2 |
| `networth` | Limited Access 受限权限 | v1 + v2 |
| `newevents` | Limited Access 受限权限 | v1 + v2 |
| `newmessages` | Limited Access 受限权限 | v1 + v2 |
| `reports` | Limited Access 受限权限 | v1 + v2 |
| `stocks` | Limited Access 受限权限 | v1 + v2 |
| `log` | Full Access 完全权限 | v1 + v2 |
| `publicstatus` | 未知（官方未收录） | 仅 v1 * † |

#### faction (60 项)

| Selection | 访问等级 | 版本 |
| --- | --- | --- |
| `chainreport` | Public 公开 | 仅 v2 ** |
| `dirtybombs` | Public 公开 | 仅 v2 ** |
| `members` | Public 公开 | 仅 v2 ** |
| `rackets` | Public 公开 | 仅 v2 ** |
| `raids` | Public 公开 | 仅 v2 ** |
| `rankedwarreport` | Public 公开 | 仅 v2 ** |
| `search` | Public 公开 | 仅 v2 ** |
| `snapshot` | Public 公开 | 仅 v2 ** |
| `territoryownership` | Public 公开 | 仅 v2 ** |
| `territorywarreport` | Public 公开 | 仅 v2 ** |
| `territorywars` | Public 公开 | 仅 v2 ** |
| `warfare` | Public 公开 | 仅 v2 ** |
| `warfarechains` | Public 公开 | 仅 v2 ** |
| `warfareraids` | Public 公开 | 仅 v2 ** |
| `warfareranked` | Public 公开 | 仅 v2 ** |
| `warfareterritory` | Public 公开 | 仅 v2 ** |
| `wars` | Public 公开 | 仅 v2 ** |
| `basic` | Public 公开 | v1 + v2 |
| `chain` | Public 公开 | v1 + v2 |
| `chains` | Public 公开 | v1 + v2 |
| `hof` | Public 公开 | v1 + v2 |
| `lookup` | Public 公开 | v1 + v2 |
| `raidreport` | Public 公开 | v1 + v2 |
| `rankedwars` | Public 公开 | v1 + v2 |
| `territory` | Public 公开 | v1 + v2 |
| `timestamp` | Public 公开 | v1 + v2 |
| `crime` | Minimal Access 最低权限 | 仅 v2 ** |
| `news` | Minimal Access 最低权限 | 仅 v2 ** |
| `armor` | Minimal Access 最低权限 | 仅 v1 * |
| `armorynews` | Minimal Access 最低权限 | 仅 v1 * |
| `boosters` | Minimal Access 最低权限 | 仅 v1 * |
| `caches` | Minimal Access 最低权限 | 仅 v1 * |
| `crimenews` | Minimal Access 最低权限 | 仅 v1 * |
| `drugs` | Minimal Access 最低权限 | 仅 v1 * |
| `mainnews` | Minimal Access 最低权限 | 仅 v1 * |
| `medical` | Minimal Access 最低权限 | 仅 v1 * |
| `membershipnews` | Minimal Access 最低权限 | 仅 v1 * |
| `temporary` | Minimal Access 最低权限 | 仅 v1 * |
| `territorynews` | Minimal Access 最低权限 | 仅 v1 * |
| `utilities` | Minimal Access 最低权限 | 仅 v1 * |
| `weapons` | Minimal Access 最低权限 | 仅 v1 * |
| `applications` | Minimal Access 最低权限 | v1 + v2 |
| `crimeexp` | Minimal Access 最低权限 | v1 + v2 |
| `crimes` | Minimal Access 最低权限 | v1 + v2 |
| `positions` | Minimal Access 最低权限 | v1 + v2 |
| `revives` | Minimal Access 最低权限 | v1 + v2 |
| `revivesfull` | Minimal Access 最低权限 | v1 + v2 |
| `stats` | Minimal Access 最低权限 | v1 + v2 |
| `upgrades` | Minimal Access 最低权限 | v1 + v2 |
| `balance` | Limited Access 受限权限 | 仅 v2 ** |
| `inventory` | Limited Access 受限权限 | 仅 v2 ** |
| `attacknews` | Limited Access 受限权限 | 仅 v1 * |
| `cesium` | Limited Access 受限权限 | 仅 v1 * |
| `currency` | Limited Access 受限权限 | 仅 v1 * |
| `donations` | Limited Access 受限权限 | 仅 v1 * |
| `fundsnews` | Limited Access 受限权限 | 仅 v1 * |
| `attacks` | Limited Access 受限权限 | v1 + v2 |
| `attacksfull` | Limited Access 受限权限 | v1 + v2 |
| `contributors` | Limited Access 受限权限 | v1 + v2 |
| `reports` | Limited Access 受限权限 | v1 + v2 |

#### company (11 项)

| Selection | 访问等级 | 版本 |
| --- | --- | --- |
| `search` | Public 公开 | 仅 v2 ** |
| `snapshot` | Public 公开 | 仅 v2 ** |
| `companies` | Public 公开 | v1 + v2 |
| `employees` | Public 公开 | v1 + v2 |
| `lookup` | Public 公开 | v1 + v2 |
| `profile` | Public 公开 | v1 + v2 |
| `timestamp` | Public 公开 | v1 + v2 |
| `detailed` | Limited Access 受限权限 | 仅 v1 * |
| `applications` | Limited Access 受限权限 | v1 + v2 |
| `news` | Limited Access 受限权限 | v1 + v2 |
| `stock` | Limited Access 受限权限 | v1 + v2 |

#### property (3 项)

| Selection | 访问等级 | 版本 |
| --- | --- | --- |
| `lookup` | Public 公开 | v1 + v2 |
| `property` | Public 公开 | v1 + v2 |
| `timestamp` | Public 公开 | v1 + v2 |

#### market (9 项)

| Selection | 访问等级 | 版本 |
| --- | --- | --- |
| `auctionhouse` | Public 公开 | 仅 v2 ** |
| `auctionhouselisting` | Public 公开 | 仅 v2 ** |
| `itemmarket` | Public 公开 | 仅 v2 ** |
| `properties` | Public 公开 | 仅 v2 ** |
| `rentals` | Public 公开 | 仅 v2 ** |
| `bazaar` | Public 公开 | v1 + v2 |
| `lookup` | Public 公开 | v1 + v2 |
| `pointsmarket` | Public 公开 | v1 + v2 |
| `timestamp` | Public 公开 | v1 + v2 |

#### torn (51 项)

| Selection | 访问等级 | 版本 |
| --- | --- | --- |
| `attacklog` | Public 公开 | 仅 v2 ** |
| `bounties` | Public 公开 | 仅 v2 ** |
| `calendar` | Public 公开 | 仅 v2 ** |
| `crimes` | Public 公开 | 仅 v2 ** |
| `hof` | Public 公开 | 仅 v2 ** |
| `itemammo` | Public 公开 | 仅 v2 ** |
| `itemmods` | Public 公开 | 仅 v2 ** |
| `merits` | Public 公开 | 仅 v2 ** |
| `museum` | Public 公开 | 仅 v2 ** |
| `organizedcrimes` | Public 公开 | 仅 v2 ** |
| `subcrimes` | Public 公开 | 仅 v2 ** |
| `chainreport` | Public 公开 | 仅 v1 * |
| `dirtybombs` | Public 公开 | 仅 v1 * |
| `elimination` | Public 公开 | 仅 v2 ** † |
| `eliminationteam` | Public 公开 | 仅 v2 ** † |
| `pawnshop` | Public 公开 | 仅 v1 * |
| `rackets` | Public 公开 | 仅 v1 * |
| `raidreport` | Public 公开 | 仅 v1 * |
| `rankedwarreport` | Public 公开 | 仅 v1 * |
| `rankedwars` | Public 公开 | 仅 v1 * |
| `territorynames` | Public 公开 | 仅 v1 * |
| `territorywarreport` | Public 公开 | 仅 v1 * |
| `territorywars` | Public 公开 | 仅 v1 * |
| `bank` | Public 公开 | v1 + v2 |
| `cards` | Public 公开 | v1 + v2 |
| `cityshops` | Public 公开 | v1 + v2 |
| `companies` | Public 公开 | v1 + v2 |
| `competition` | Public 公开 | v1 + v2 |
| `education` | Public 公开 | v1 + v2 |
| `factionhof` | Public 公开 | 仅 v2 ** † |
| `factiontree` | Public 公开 | v1 + v2 |
| `gyms` | Public 公开 | v1 + v2 |
| `honors` | Public 公开 | v1 + v2 |
| `itemdetails` | Public 公开 | v1 + v2 |
| `items` | Public 公开 | v1 + v2 |
| `itemstats` | Public 公开 | v1 + v2 |
| `logcategories` | Public 公开 | v1 + v2 |
| `logtypes` | Public 公开 | v1 + v2 |
| `lookup` | Public 公开 | v1 + v2 |
| `medals` | Public 公开 | v1 + v2 |
| `organisedcrimes` | Public 公开 | v1 + v2 |
| `pokertables` | Public 公开 | v1 + v2 |
| `properties` | Public 公开 | v1 + v2 |
| `raids` | Public 公开 | v1 + v2 |
| `rockpaperscissors` | Public 公开 | v1 + v2 |
| `searchforcash` | Public 公开 | v1 + v2 |
| `shoplifting` | Public 公开 | v1 + v2 |
| `stats` | Public 公开 | v1 + v2 |
| `stocks` | Public 公开 | v1 + v2 |
| `territory` | Public 公开 | v1 + v2 |
| `timestamp` | Public 公开 | v1 + v2 |

#### racing (8 项)

| Selection | 访问等级 | 版本 |
| --- | --- | --- |
| `cars` | Public 公开 | 仅 v2 ** |
| `carupgrades` | Public 公开 | 仅 v2 ** |
| `race` | Public 公开 | 仅 v2 ** |
| `races` | Public 公开 | 仅 v2 ** |
| `records` | Public 公开 | 仅 v2 ** |
| `tracks` | Public 公开 | 仅 v2 ** |
| `lookup` | Public 公开 | v1 + v2 |
| `timestamp` | Public 公开 | v1 + v2 |

#### forum (6 项)

| Selection | 访问等级 | 版本 |
| --- | --- | --- |
| `categories` | Public 公开 | 仅 v2 ** |
| `posts` | Public 公开 | 仅 v2 ** |
| `thread` | Public 公开 | 仅 v2 ** |
| `threads` | Public 公开 | 仅 v2 ** |
| `lookup` | Public 公开 | v1 + v2 |
| `timestamp` | Public 公开 | v1 + v2 |

#### key (2 项)

| Selection | 访问等级 | 版本 |
| --- | --- | --- |
| `log` | Public 公开 | 仅 v2 ** |
| `info` | Public 公开 | v1 + v2 |

### 9.4 统计

- 分类数 **9**，selection 总数 **223**（官方表格 222 项 + 实测补录 `user.publicstatus`）。
- 按访问等级：`Public` **134** 项，`Minimal Access` **56** 项，`Limited Access` **31** 项，`Full Access` **1** 项（即 `user.log`），未知 **1** 项（`user.publicstatus`，官方未收录故无从得知其权限要求）。
- 按版本（**已按实测校正**）：v1 + v2 均可用 **113** 项，仅 v2 **79** 项，仅 v1 **30** 项，v1/v2 权限不同 **1** 项（即 `user.hof`）。
- 分类条目数：`user` 73、`faction` 60、`torn` 51、`company` 11、`market` 9、`racing` 8、`forum` 6、`property` 3、`key` 2。

### 9.5 实测校验与官方文档差异

#### 9.5.1 与 `selections=lookup` 的集合比对

本文档的 selection 表从官方页面逐项解析得到，并与 `api.torn.com` 真实的 `selections=lookup` 返回值做了逐类比对：

| section | 文档条目 | 文档中 v1 可用 | 文档中仅 v2 | 接口返回 | 差集 |
| --- | --- | --- | --- | --- | --- |
| `user` | 73 | 47 | 26 | 72 | 文档多出 `publicstatus`（官方未收录） |
| `faction` | 60 | 39 | 21 | 60 | 双向为空 |
| `company` | 11 | 9 | 2 | 11 | 双向为空 |
| `property` | 3 | 3 | 0 | 3 | 双向为空 |
| `market` | 9 | 4 | 5 | 9 | 双向为空 |
| `torn` | 51 | 37 | 14 | 51 | 双向为空 |

结论：

- **接口返回的 selection 一个都不缺**：`live_not_in_doc` 在 6 个分类中均为空。
- **接口返回的集合 = 文档「v1 可用」∩ 接口 + 文档「仅 v2」**：即「接口返回里不属于 v1 可用名单的项」与「标记为仅 v2 的项」**逐类完全相等**（user 26/26、faction 21/21、company 2/2、property 0/0、market 5/5、torn 14/14）。这从另一条独立路径印证了 9.5.3 的版本校正结果是自洽的。
- 唯一一处「文档有、接口没有」是 `user.publicstatus`——它不是错误，而是官方这份 `lookup` 名单本身漏了它。

该比对覆盖存在 v1 `lookup` 端点的 6 个分类；`racing`、`forum`、`key` 同样逐项解析，但未纳入此比对。

#### 9.5.2 163 项 selection 逐个实测

2026-10-10 使用一个 **Full Access** 密钥，对该密钥允许的全部 **163 项** selection 逐个调用 v1 端点并记录返回码：

| section | 允许项 | v1 实际返回数据 | v1 拒绝（code 23，v2 专属） | 需目标 ID（code 6） | 其他 |
| --- | --- | --- | --- | --- | --- |
| `user` | 73 | 47 | 26 | – | – |
| `torn` | 51 | 31 | 14 | 5 | 1（code 17） |
| `market` | 9 | 4 | 5 | – | – |
| `racing` | 8 | 2 | 6 | – | – |
| `forum` | 6 | 2 | 4 | – | – |
| `faction` | 6 | 1 | – | 5 | – |
| `company` | 5 | 4 | – | 1 | – |
| `property` | 3 | 3 | – | – | – |
| `key` | 2 | 1 | 1 | – | – |
| **合计** | **163** | **95** | **56** | **11** | **1** |

要点：

- **code 23 是版本级限制，与权限等级无关**：Full Access 密钥同样会被拒绝，因此可作为判定「该 selection 是否为 v2 专属」的可靠依据。
- **code 6 表示 selection 本身可用，但缺少目标 ID 参数**（如 `faction.basic` 需要 `&id=` 指定帮派、`torn.itemdetails` 需要物品 ID）。这些不算不可读。
- `torn.raidreport` 稳定返回 **code 17**（Torn 后端错误，两次尝试均复现），文档称该码为暂态可重试，此处更像 Torn 侧缺陷。
- 官方 `key/?selections=info` 返回的允许清单共 163 项，且**其中包含官方表格未收录的 `user.publicstatus`**——这说明「表格 + lookup 集合」并非 selection 的全集。

#### 9.5.3 官方文档错误与遗漏（共 8 处）

| selection | 官方表格标记 | 实测结果 | 结论 |
| --- | --- | --- | --- |
| `user.property` | 无标记（v1 + v2） | v1 → code 23；v2 → 正常返回 | 实为 **v2 专属** |
| `user.properties` | `**`（v2 专属） | v1 与 v2 **均可** | 实为 **v1 + v2** |
| `user.jobranks` | 无标记 | v1 → code 23 | 实为 **v2 专属** |
| `user.bounties` | 无标记 | v1 → code 23 | 实为 **v2 专属** |
| `torn.elimination` | `*`（仅 v1） | v1 → code 23 | 实为 **v2 专属** |
| `torn.eliminationteam` | `*`（仅 v1） | v1 → code 23 | 实为 **v2 专属** |
| `torn.factionhof` | 无标记 | v1 → code 23 | 实为 **v2 专属** |
| `user.publicstatus` | **未收录** | v1 正常返回；v2 → code 22（仅 v1 可用） | 官方遗漏，实为 **v1 专属** |

> `user.property` 与 `user.properties` 这一对疑似在官方表格中**标记互换**：复数形式 `properties` 两个版本都可用，单数形式 `property` 仅 v2 可用。以实测为准的标记已写入 [selections.json](./selections.json) 的 `corrections` 字段。

#### 9.5.4 实测发现的其他 API 行为（对客户端实现有影响）

1. **v1 响应是「平铺」的，不是每个 selection 一层嵌套**：`basic`、`profile`、`bars`、`battlestats`、`workstats`、`skills`、`gym`、`money` 等选择项的字段直接挂在 JSON 根节点（如 `root.name`、`root.daily_networth`、`root.strength`）；而 `life`、`job`、`faction`、`cooldowns`、`properties`、`travel`、`notifications`、`refills`、`merits`、`jobpoints`、`personalstats`、`equipment` 等才按 selection 名嵌套。**不要假设统一结构。**
2. **`user.inventory` 已废弃，但不返回 error 对象**：返回的是纯字符串 `"The inventory selection is no longer available"`。按对象解析的客户端会静默出错，需要显式做类型判断。
3. **v2 响应带 `_metadata` 字段**（例如 `user.properties` 返回 `properties` + `_metadata`），v1 没有。
4. **`user.publicstatus` 的返回体**为 `{"status", "userID", "playername", "baned"}`——注意官方键名拼写就是 `baned`（少一个 n），不是 `banned`。
5. **`life` / `energy` / `nerve` / `happy` 等条带字段带完整回充信息**：`increment`、`interval`、`ticktime`、`fulltime`，可直接用于倒计时显示。

---

## 10. 错误码

| 错误码 | 名称 | 说明（官方原文） | 中文说明 |
| --- | --- | --- | --- |
| 0 | Unknown error | Unhandled error, should not occur. | 未知错误：未处理的错误，理论上不应发生。 |
| 1 | Key is empty | Private key is empty in current request. | 密钥为空：当前请求中的私有密钥为空。 |
| 2 | Incorrect Key | Private key is wrong/incorrect format. | 密钥错误：私有密钥错误或格式不正确。 |
| 3 | Wrong type | Requesting an incorrect basic type. | 类型错误：请求了不正确的基本类型。 |
| 4 | Wrong fields | Requesting incorrect selection fields. | 字段错误：请求了不正确的 selection 字段。 |
| 5 | Too many requests | Requests are blocked for a small period of time because of too many requests per user (max 100 per minute). | 请求过多：因每分钟请求数超过上限（每用户最多 100 次/分钟）被短期封锁。 |
| 6 | Incorrect ID | Wrong ID value. | ID 错误：ID 值不正确。 |
| 7 | Incorrect ID-entity relation | A requested selection is private (For example, personal data of another user / faction). | ID 与实体关系错误：所请求的 selection 属私有数据（例如他人的用户/帮派个人数据）。 |
| 8 | IP block | Current IP is banned for a small period of time because of abuse. | IP 封禁：当前 IP 因滥用被短期封禁。 |
| 9 | API disabled | Api system is currently disabled. | API 已禁用：API 系统当前处于关闭状态。 |
| 10 | Key owner is in federal jail | Current key can't be used because owner is in federal jail. | 密钥所有者处于联邦监狱：在此期间该密钥无法使用。 |
| 11 | Key change error | You can only change your API key once every 60 seconds. | 密钥修改错误：API 密钥每 60 秒只能修改一次。 |
| 12 | Key read error | Error reading key from Database. | 密钥读取错误：从数据库读取密钥失败。 |
| 13 | The key is temporarily disabled due to owner inactivity | The key owner hasn't been online for more than 7 days. | 密钥因所有者不活跃被临时禁用：所有者已超过 7 天未上线。 |
| 14 | Daily read limit reached | Too many records have been pulled today by this user from our cloud services. | 已达每日读取上限：该用户当天从官方云服务拉取的记录过多。 |
| 15 | Temporary error | An error code specifically for testing purposes that has no dedicated meaning. | 临时错误：专用于测试目的、没有具体含义的错误码。 |
| 16 | Access level of this key is not high enough | A selection is being called of which this key does not have permission to access. | 密钥权限等级不足：所调用的 selection 超出该密钥的访问权限。 |
| 17 | — | Backend error occurred, please try again. | 后端发生错误，请重试。 |
| 18 | — | API key has been paused by the owner. | API 密钥已被所有者暂停。 |
| 19 | — | Must be migrated to crimes 2.0. | 必须迁移到 Crimes 2.0。 |
| 20 | — | Race not yet finished. | 比赛尚未结束。 |
| 21 | Incorrect category | Wrong cat value. | 分类错误：cat 值不正确。 |
| 22 | — | This selection is only available in API v1. | 该 selection 仅在 API v1 中可用。 |
| 23 | — | This selection is only available in API v2. | 该 selection 仅在 API v2 中可用。 |
| 24 | — | Closed temporarily. | 暂时关闭。 |
| 25 | — | Invalid stat requested. | 请求了无效的 stat。 |
| 26 | — | Only category or stats can be requested. | 只能请求 category 或 stats 其中之一。 |
| 27 | — | Must be migrated to organized crimes 2.0. | 必须迁移到 Organized Crimes 2.0。 |
| 28 | — | Incorrect log ID. | 日志 ID 不正确。 |
| 29 | — | Category selection is not available for interaction logs. | 交互日志不支持 category 选择。 |
| 30 | — | File does not exist | 文件不存在。 |

官方页面列出的错误码共 **31 个（0–30）**。

---

## 11. 官方链接

| 内容 | 链接 |
| --- | --- |
| API 文档主页 | <https://www.torn.com/api.html> |
| API v2 Swagger | <https://www.torn.com/swagger.php> |
| API v2 Playground | <https://api-playground.torn.com/> |
| 密钥使用日志 selection | <https://www.torn.com/swagger.php#/Key/get_key_log> |
| Torn 脚本规则 | <https://www.torn.com/rules.php> |
| 联系 Torn 官方人员 | <https://www.torn.com/staff.php> |
| 广告/收费申请邮箱 | <mailto:webmaster@torn.com> |

---

## 附：维护方式

本目录下的数据可在官方页面更新后重新生成：

- `selections.json` — 9 大类 selection 清单（含 `access`、`version`、`version_source` 字段，以及 `corrections`、`empirical_validation` 两段实测记录）。
- `README.md` — 本文件；第 9.3 节与第 10 章的表由脚本生成后嵌入。

重新生成时注意：

1. **官方 selection 表不在 api.html 的静态 HTML 里**，而由 `apipublic.php?lookup=true` 动态返回；该接口需要带 Torn 会话（未登录直接请求会返回 403）。
2. 官方表格中的版本标记（`*` / `**` / `***`）**存在错标**，不能直接采信。修正方式：用任意密钥逐个调用 v1 端点，返回 **code 23** 即该 selection 为 v2 专属；返回正常数据则为 v1 可用；返回 **code 22** 则为 v1 专属。此判定与密钥权限等级无关，因此普通密钥即可完成校验。
3. 逐个实测 163 项约需 163 次请求，注意 Torn 的 **100 次/分钟** 限制，建议分批并留出间隔。
4. 校验数据时**不要**把真实密钥写进仓库或提交到 git。
