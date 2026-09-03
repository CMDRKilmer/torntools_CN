// filepath: src/extension/utils/i18n/zh-CN.ts
/**
 * 简体中文 locale 表
 *
 * 翻译风格:
 *   - 纯中文,专有品牌名保留原文(枪械型号、药品品牌、车辆品牌、酒类品牌、能量饮料等)
 *   - 遵循 TORN 中文玩家社区约定译法:
 *       Energy=能量  Nerve=勇气  Happy=幸福度  Life=生命值
 *       Merits=功勋点  Rank=段位  Respect=面子  Bust=劫狱
 *   - 词典基础:torn-cn-dictionary.md(锅巴汉化 + 官方 Wiki)
 *
 * 维护说明:
 *   - 若某个 key 在 EN 中存在但 zh-CN 缺失,t() 会回退到英文原文
 *   - 翻译词汇需补充时,在对应分类下追加键值对即可
 */
import type { LocaleTable } from "./types";

export const ZH_CN: LocaleTable = {
	popup: {
		Dashboard: "面板",
		Market: "市场",
		Calculator: "计算器",
		Stocks: "股票",
		Notifications: "通知",
		Settings: "设置",
		Loading: "加载中...",
	},
	options: {
		About: "关于",
		Changelog: "更新日志",
		Preferences: "偏好设置",
		Export: "导出",
		"Missing Permissions": "缺失权限",
		Connections: "外部连接",
		Financial: "财务",
		Global: "全局",
		Internal: "内部",
		QoL: "体验优化",
		Notifications: "通知",
		Popup: "弹窗",
		API: "API",
		Sidebar: "侧边栏",
		Chat: "聊天",
		Advanced: "高级",
		Money: "金钱",
		Markets: "市场",
		Items: "物品",
		Information: "信息",
		Combat: "战斗",
		Travel: "旅行",
		Faction: "帮派",
		Profile: "个人资料",
		Companies: "公司",
		Gym: "健身房",
		Speed: "速度",
		Racing: "赛车",
		Services: "服务",
		Targets: "目标",
		"Popup Tabs": "弹窗标签页",
		"Quick Links": "快捷链接",
		Theme: "主题",
		Language: "语言",
		Save: "保存",
		Cancel: "取消",
		Reset: "重置",
	},
	common: {
		Yes: "是",
		No: "否",
		On: "开",
		Off: "关",
		Enabled: "已启用",
		Disabled: "已禁用",
		Search: "搜索",
		Filter: "筛选",
		Apply: "应用",
		Close: "关闭",
		Open: "打开",
		Confirm: "确认",
	},
	overlay: {},
};
