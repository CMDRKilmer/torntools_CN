// filepath: src/extension/utils/i18n/overlay.ts
/**
 * 运行时 DOM 翻译覆盖字典
 *
 * 用于 src/extension/entrypoints/i18n-overlay.content.ts,在 TORN 页面运行时
 * 把 TornTools 注入的英文 UI 翻译为中文。
 *
 * 结构:扁平 key-value 表,与 torn-cn-dictionary.md 一一对应。
 *   - 键   :英文原文(大小写敏感,优先以"TornTools UI 实际显示"为准)
 *   - 值   :简体中文(专有品牌名保留原文)
 *
 * 词典维护:
 *   - 在此文件追加键值对即可生效,content script 会热重载
 *   - 找不到 key 时保持原文,不抛错
 *   - 上游 TornTools 升级后,只需把新出现的英文条目追加到此表
 */
import type { I18nRecord } from "./types";

export const OVERLAY_DICT: I18nRecord = {
	// ========== 状态条 / 核心属性 ==========
	Energy: "能量 (Energy)",
	energy: "能量 (energy)",
	Nerve: "勇气 (Nerve)",
	nerve: "勇气 (nerve)",
	Happy: "幸福度 (Happy)",
	happy: "幸福度 (happy)",
	Life: "生命值 (Life)",
	life: "生命值 (life)",
	"Life:": "生命值: (Life:)",
	"Energy:": "能量: (Energy:)",
	"Nerve:": "勇气: (Nerve:)",
	"Happy:": "幸福度: (Happy:)",
	Merits: "功勋点 (Merits)",
	merits: "功勋点 (merits)",
	Merit: "功勋点 (Merit)",
	"Merits:": "功勋点: (Merits:)",
	Rank: "段位 (Rank)",
	Respect: "面子 (Respect)",
	Bust: "劫狱 (Bust)",
	bust: "劫狱 (bust)",

	// ========== 战斗 / 工作属性 ==========
	Strength: "力量 (Strength)",
	strength: "力量 (strength)",
	Speed: "速度",
	speed: "速度 (speed)",
	Dexterity: "敏捷 (Dexterity)",
	dexterity: "敏捷 (dexterity)",
	Defense: "防御 (Defense)",
	defense: "防御 (defense)",
	Defence: "防御 (Defence)",
	defence: "防御 (defence)",
	Intelligence: "智力 (Intelligence)",
	intelligence: "智力 (intelligence)",
	Endurance: "耐力 (Endurance)",
	endurance: "耐力 (endurance)",
	"Manual labor": "人力 (Manual labor)",
	"Manual Labor": "人力 (Manual Labor)",
	"Working stats": "工作属性 (Working stats)",
	"Battle stats": "战斗属性 (Battle stats)",
	"Total battle stats": "战斗属性总计 (Total battle stats)",
	"Total working stats": "工作属性总计 (Total working stats)",

	// ========== 通用 UI ==========
	Yes: "是",
	No: "否",
	OK: "好的",
	Ok: "好的",
	Cancel: "取消",
	Apply: "应用",
	Save: "保存",
	Close: "关闭",
	Open: "打开",
	Confirm: "确认",
	Reset: "重置",
	Refresh: "刷新",
	Reload: "重新加载",
	Edit: "编辑",
	Delete: "删除",
	Add: "添加",
	Remove: "移除",
	Search: "搜索",
	Filter: "筛选",
	Sort: "排序",
	Settings: "设置",
	Profile: "个人资料",
	About: "关于",
	Help: "帮助",
	Loading: "加载中",
	"Loading...": "加载中... (Loading...)",
	"Please wait...": "请稍候... (Please wait...)",
	Error: "错误",
	Warning: "警告",
	Info: "信息",
	Success: "成功",
	Online: "在线",
	Offline: "离线",
	Total: "总计",
	Today: "今天",
	Yesterday: "昨天",
	Now: "现在",
	Days: "天",
	Hours: "小时",
	Minutes: "分钟",
	Seconds: "秒",

	// ========== 货币 / 数值 ==========
	Money: "现金",
	Cost: "费用 (Cost)",
	Fee: "费用 (Fee)",
	Fees: "费用 (Fees)",
	Income: "收入 (Income)",
	Price: "价格 (Price)",
	Value: "价值 (Value)",
	Level: "等级 (Level)",
	EXP: "经验 (EXP)",
	XP: "经验 (XP)",

	// ========== 物品 / 城市商店 ==========
	Shop: "商店 (Shop)",
	City: "城市 (City)",
	Bank: "银行 (Bank)",
	Pharmacy: "药店 (Pharmacy)",
	Auction: "拍卖 (Auction)",
	"Auction House": "拍卖行 (Auction House)",
	Market: "市场",
	"Item Market": "物品市场 (Item Market)",
	"Points Market": "积分市场 (Points Market)",
	"Stock Market": "股市 (Stock Market)",
	"Stock Exchange": "股票交易所 (Stock Exchange)",
	Real: "房地产 (Real)",
	Estate: "房地产 (Estate)",
	Travel: "旅行",
	Traveling: "旅行中 (Traveling)",
	Abroad: "国外 (Abroad)",
	Property: "房产 (Property)",
	Properties: "房产 (Properties)",
	Company: "公司 (Company)",
	Companies: "公司",
	Faction: "帮派",
	Factions: "帮派 (Factions)",
	Gym: "健身房",
	Job: "工作 (Job)",
	Jobs: "工作 (Jobs)",
	Crime: "犯罪 (Crime)",
	Crimes: "犯罪 (Crimes)",
	Mission: "任务 (Mission)",
	Missions: "任务 (Missions)",
	Hospital: "医院 (Hospital)",
	Jail: "监狱 (Jail)",
	Casino: "赌场 (Casino)",
	Forum: "论坛 (Forum)",
	Forums: "论坛 (Forums)",
	Newspaper: "报纸 (Newspaper)",

	// ========== 物品大类 ==========
	"Primary weapon": "主武器 (Primary weapon)",
	"Secondary weapon": "副武器 (Secondary weapon)",
	"Melee weapon": "近战武器 (Melee weapon)",
	Armor: "护甲 (Armor)",
	Helmet: "头盔 (Helmet)",
	Gloves: "手套 (Gloves)",
	Boots: "靴子 (Boots)",
	Pants: "裤 (Pants)",
	Vest: "背心 (Vest)",
	Body: "防弹衣 (Body)",
	Apron: "围裙 (Apron)",
	Weapon: "武器 (Weapon)",
	Weapons: "武器 (Weapons)",
	Drug: "药品 (Drug)",
	Drugs: "药品 (Drugs)",
	Alcohol: "酒 (Alcohol)",
	"Energy Drink": "能量饮料 (Energy Drink)",
	Candy: "糖果 (Candy)",
	Flower: "花 (Flower)",
	Flowers: "花 (Flowers)",
	"Supply Pack": "补给包 (Supply Pack)",
	"Supply pack": "补给包 (Supply pack)",
	"Supply packs": "补给包 (Supply packs)",
	Plushie: "毛绒玩具 (Plushie)",
	Plushies: "毛绒玩具 (Plushies)",
	Artifact: "神器 (Artifact)",
	Artifacts: "神器 (Artifacts)",
	Book: "书 (Book)",
	Books: "书 (Books)",
	"Jewelry Item": "饰品 (Jewelry Item)",
	"Jewelry item": "饰品 (Jewelry item)",
	Boost: "消耗品 (Boost)",
	Booster: "消耗品 (Booster)",
	Boosters: "消耗品 (Boosters)",
	Material: "材料 (Material)",
	Materials: "材料 (Materials)",
	Clothing: "服装 (Clothing)",
	Tool: "工具 (Tool)",
	Tools: "工具 (Tools)",

	// ========== 武器 / 护甲名 ==========
	"Full Body Armor": "全身护甲 (Full Body Armor)",
	"Bulletproof Vest": "防弹背心 (Bulletproof Vest)",
	"Chain Mail": "锁子甲 (Chain Mail)",
	"Construction Helmet": "建筑头盔 (Construction Helmet)",
	"Flak Jacket": "防弹夹克 (Flak Jacket)",
	"Flexible Body Armor": "柔性防弹衣 (Flexible Body Armor)",
	"Hazmat Suit": "防化服 (Hazmat Suit)",
	"Hiking Boots": "登山靴 (Hiking Boots)",
	"Kevlar Gloves": "凯夫拉手套 (Kevlar Gloves)",
	"Liquid Body Armor": "液体防弹衣 (Liquid Body Armor)",
	"Medieval Helmet": "中世纪头盔 (Medieval Helmet)",
	"Motorcycle Helmet": "摩托车头盔 (Motorcycle Helmet)",
	"Outer Tactical Vest": "外置战术背心 (Outer Tactical Vest)",
	"Police Vest": "警用背心 (Police Vest)",
	"Safety Boots": "安全靴 (Safety Boots)",
	"Welding Helmet": "焊接头盔 (Welding Helmet)",
	"WWII Helmet": "二战头盔 (WWII Helmet)",
	"Gas Mask": "防毒面具 (Gas Mask)",
	"Face Mask": "面罩 (Face Mask)",
	Respirator: "呼吸器 (Respirator)",

	// ========== 药品 ==========
	Cannabis: "大麻 (Cannabis)",
	Ecstasy: "摇头丸 (Ecstasy)",
	Ketamine: "氯胺酮 (Ketamine)",
	Opium: "鸦片 (Opium)",
	Shrooms: "致幻蘑菇 (Shrooms)",
	Vicodin: "维柯丁 (Vicodin)",
	"Love Juice": "爱情果汁 (Love Juice)",
	Addiction: "成瘾 (Addiction)",
	Overdose: "过量 (Overdose)",
	"Drug Cooldown": "药物冷却 (Drug Cooldown)",
	"Medical Cooldown": "医疗冷却 (Medical Cooldown)",
	"Booster Cooldown": "增益冷却 (Booster Cooldown)",

	// ========== 医疗 ==========
	Antidote: "解毒剂 (Antidote)",
	"Blood Bag": "血袋 (Blood Bag)",
	"First Aid Kit": "急救包 (First Aid Kit)",
	"Small First Aid Kit": "小型急救包 (Small First Aid Kit)",
	"Ipecac Syrup": "吐根糖浆 (Ipecac Syrup)",
	Morphine: "吗啡 (Morphine)",
	"Neumune Tablet": "Neumune 药片 (Neumune Tablet)",
	Needles: "注射器 (Needles)",

	// ========== 酒 / 能量饮料(品牌名保留原文) ==========
	"Beer of the Month": "本月啤酒 (Beer of the Month)",
	Champagne: "香槟 (Champagne)",
	Saké: "清酒",
	Tequila: "龙舌兰 (Tequila)",
	"Red Cow": "Red Cow",
	Crocozade: "Crocozade",
	"Damp Valley": "Damp Valley",
	"Goose Juice": "Goose Juice",
	Munster: "Munster",
	"Taurine Elite": "Taurine Elite",

	// ========== 糖果 ==========
	Lollipop: "棒棒糖 (Lollipop)",
	Jawbreaker: "硬糖 (Jawbreaker)",
	"Birthday Cupcake": "生日纸杯蛋糕 (Birthday Cupcake)",
	"Chocolate Egg": "巧克力蛋 (Chocolate Egg)",
	"Bon Bons": "糖果 (Bon Bons)",
	"Chocolate Bars": "巧克力棒 (Chocolate Bars)",
	"Chocolate Kisses": "巧克力吻糖 (Chocolate Kisses)",
	"Candy Kisses": "糖果吻糖 (Candy Kisses)",
	"Chocolate Truffles": "巧克力松露 (Chocolate Truffles)",
	"Extra Strong Mints": "超强薄荷糖 (Extra Strong Mints)",
	Sherbet: "汽水粉糖 (Sherbet)",
	"Pixie Sticks": "仙女棒糖 (Pixie Sticks)",

	// ========== 工具(犯罪) ==========
	"Card Skimmer": "刷卡机 (Card Skimmer)",
	"ATM Key": "ATM 钥匙 (ATM Key)",
	"RF Detector": "射频探测器 (RF Detector)",
	"Wax Seal Stamp": "火漆印章 (Wax Seal Stamp)",
	Embosser: "压印机 (Embosser)",
	Ladder: "梯子 (Ladder)",
	"Heat Sink": "散热器 (Heat Sink)",
	Scissors: "剪刀 (Scissors)",
	"Sewing Kit": "针线包 (Sewing Kit)",
	"Hand Drill": "手钻 (Hand Drill)",
	"Fountain Pen": "钢笔 (Fountain Pen)",
	"Grinding Stone": "磨石 (Grinding Stone)",
	Jemmy: "撬棍 (Jemmy)",
	"Police Badge": "警徽 (Police Badge)",
	Printer: "打印机 (Printer)",
	Shovel: "铲子 (Shovel)",
	"Skeleton Key": "万能钥匙 (Skeleton Key)",
	"Spy Camera": "间谍相机 (Spy Camera)",
	"Window Breaker": "破窗器 (Window Breaker)",
	"Coat Hanger": "衣架 (Coat Hanger)",
	"DSLR Camera": "单反相机 (DSLR Camera)",
	"Wire Cutters": "断线钳 (Wire Cutters)",
	Wheelbarrow: "独轮车 (Wheelbarrow)",
	"Dental Mirror": "牙镜 (Dental Mirror)",
	"Bolt Cutters": "螺栓剪 (Bolt Cutters)",
	"Gold Laptop": "金色笔记本电脑 (Gold Laptop)",
	"Metal Detector": "金属探测器 (Metal Detector)",
	"Credit Card": "信用卡 (Credit Card)",
	"Permanent Marker": "永久记号笔 (Permanent Marker)",
	Lockpicks: "开锁工具 (Lockpicks)",
	Lighter: "打火机 (Lighter)",
	Blanket: "毯子 (Blanket)",
	"Car Battery": "汽车电池 (Car Battery)",
	"Remote Detonator": "遥控引爆器 (Remote Detonator)",
	"Angle Grinder": "角磨机 (Angle Grinder)",

	// ========== 补给包 / 礼物 ==========
	"Anniversary Present": "周年纪念礼物 (Anniversary Present)",
	"Birthday Present": "生日礼物 (Birthday Present)",
	"Christmas Present": "圣诞礼物 (Christmas Present)",
	Present: "礼物 (Present)",
	Parcel: "包裹 (Parcel)",
	"Goodie Bag": "福袋 (Goodie Bag)",
	"Donator Pack": "捐赠者包 (Donator Pack)",
	"Drug Pack": "药物包 (Drug Pack)",
	"Lottery Voucher": "彩票代金券 (Lottery Voucher)",

	// ========== 旅行目的地 ==========
	"China - Beijing": "中国 - 北京 (China - Beijing)",
	"Japan - Tokyo": "日本 - 东京 (Japan - Tokyo)",
	"Hawaii - Honolulu": "夏威夷 - 檀香山 (Hawaii - Honolulu)",
	"Mexico - Ciudad Juarez": "墨西哥 - 瓜达拉哈拉 (Mexico - Ciudad Juarez)",
	"Canada - Toronto": "加拿大 - 多伦多 (Canada - Toronto)",
	"Cayman Islands - George Town": "开曼群岛 - 乔治敦 (Cayman Islands - George Town)",
	"United Kingdom - London": "英国 - 伦敦 (United Kingdom - London)",
	"Switzerland - Zurich": "瑞士 - 苏黎世 (Switzerland - Zurich)",
	"UAE - Dubai": "阿联酋 - 迪拜 (UAE - Dubai)",
	"South Africa - Johannesburg": "南非 - 约翰内斯堡 (South Africa - Johannesburg)",
	"Argentina - Buenos Aires": "阿根廷 - 布宜诺斯艾利斯 (Argentina - Buenos Aires)",

	// ========== 教育课程 ==========
	Biology: "生物学 (Biology)",
	Business: "商业 (Business)",
	"Combat Training": "战斗训练 (Combat Training)",
	"Computer Science": "计算机科学 (Computer Science)",
	"General Studies": "通识教育 (General Studies)",
	"Health & Fitness": "健康与健身 (Health & Fitness)",
	History: "历史",
	Law: "法律 (Law)",
	Mathematics: "数学 (Mathematics)",
	Psychology: "心理学 (Psychology)",
	"Self Defense": "自卫 (Self Defense)",
	"Sports Science": "运动学 (Sports Science)",
	"Introduction to Biochemistry": "生物化学概论 (Introduction to Biochemistry)",

	// ========== 工作 / 公司 ==========
	"Quit Job": "退出工作 (Quit Job)",
	"Rank & Benefits": "职级与福利 (Rank & Benefits)",
	"Stats Needed": "属性要求 (Stats Needed)",
	"Job points": "工作点数 (Job points)",
	"Job Specials": "工作特殊技能 (Job Specials)",
	"Income:": "收入: (Income:)",
	"Rank:": "段位: (Rank:)",
	"Job:": "工作: (Job:)",
	Director: "董事 (Director)",
	Employee: "员工 (Employee)",
	Employees: "员工 (Employees)",
	Upgrades: "升级 (Upgrades)",
	Funds: "资金 (Funds)",
	"Staff Room": "员工室 (Staff Room)",
	Warehouse: "仓库 (Warehouse)",
	"Company Funds": "公司资金 (Company Funds)",

	// ========== 赌场游戏 ==========
	Poker: "扑克 (Poker)",
	Blackjack: "二十一点 (Blackjack)",
	"Russian Roulette": "俄罗斯轮盘 (Russian Roulette)",
	Roulette: "轮盘 (Roulette)",
	Slots: "老虎机 (Slots)",
	Lottery: "彩票 (Lottery)",
	"High-Low": "高低 (High-Low)",
	Keno: "基诺 (Keno)",
	Chess: "国际象棋 (Chess)",
	"Spin The Wheel": "旋转轮盘 (Spin The Wheel)",

	// ========== 帮派术语 ==========
	"Faction Name": "帮派名称 (Faction Name)",
	"Leader:": "帮主: (Leader:)",
	"Co-leader:": "副帮主: (Co-leader:)",
	"Members:": "帮众: (Members:)",
	"Territories:": "领土: (Territories:)",
	"Treaties:": "协定: (Treaties:)",
	"Apply to this faction": "申请加入 (Apply to this faction)",
	"Leave Faction": "离开帮派 (Leave Faction)",
	"Faction Announcements": "帮派公告 (Faction Announcements)",
	"Main News": "主要新闻 (Main News)",
	Armory: "军械库 (Armory)",
	Membership: "成员 (Membership)",
	Recruiting: "招人中 (Recruiting)",
	Planning: "计划中 (Planning)",
	Completed: "已完成 (Completed)",

	// ========== 通用游戏术语 ==========
	Chain: "连击 (Chain)",
	Chaining: "连击 (Chaining)",
	"Chain inactive": "连击无效 (Chain inactive)",
	"Chain bonus": "连击加成 (Chain bonus)",
	"Chain length": "连击长度 (Chain length)",
	"Chain active": "连击进行中 (Chain active)",
	Perks: "特权 (Perks)",
	"Property (": "房产 (",
	"Merit (": "功勋点 (",
	"Faction (": "帮派 (",
	"Job (": "工作 (",
	"Education (": "教育 (",
	"Enhancer (": "强化剂 (",
	"Company (": "公司 (",

	// ========== 犯罪 ==========
	"DO CRIME": "犯罪 (DO CRIME)",
	"CHANGE CRIME": "改变罪行 (CHANGE CRIME)",
	"TRY AGAIN": "再试一次 (TRY AGAIN)",
	"Newspaper Tutorial": "报纸教程 (Newspaper Tutorial)",
	Vandalism: "破坏 (Vandalism)",
	Theft: "盗窃 (Theft)",
	Counterfeiting: "伪造 (Counterfeiting)",
	Fraud: "欺诈 (Fraud)",
	Cybercrime: "网络犯罪 (Cybercrime)",
	Extortion: "敲诈 (Extortion)",
	Shoplifting: "商店盗窃 (Shoplifting)",
	Pickpocketing: "扒窃 (Pickpocketing)",
	Graffiti: "涂鸦 (Graffiti)",
	Bootlegging: "盗版 (Bootlegging)",
	"Card Skimming": "卡片盗刷 (Card Skimming)",
	Burglary: "入室盗窃 (Burglary)",
	Hustling: "街头诈骗 (Hustling)",
	Scamming: "网络诈骗 (Scamming)",
	Forgery: "伪造 (Forgery)",
	Assassination: "暗杀 (Assassination)",
	Arson: "纵火 (Arson)",
	Murder: "谋杀 (Murder)",
	Kidnapping: "绑架 (Kidnapping)",
	Larceny: "偷窃 (Larceny)",
	Hacking: "黑客攻击 (Hacking)",

	// ========== 旅行物品 ==========
	Airstrip: "飞机跑道 (Airstrip)",
	"Business Class": "商务舱 (Business Class)",
	"Small Suitcase": "小行李箱 (Small Suitcase)",
	"Medium Suitcase": "中行李箱 (Medium Suitcase)",
	"Large Suitcase": "大行李箱 (Large Suitcase)",
	"Lingerie Store": "内衣店 (Lingerie Store)",
	"Flower Shop": "花店 (Flower Shop)",
	"Toy Shop": "玩具店 (Toy Shop)",
	Theater: "剧院 (Theater)",
	"Detective Agency": "侦探事务所 (Detective Agency)",

	// ========== 股票 / 投资 ==========
	"Stock Trading": "股票交易 (Stock Trading)",
	"Stock Prices": "股价 (Stock Prices)",
	"Stock Benefits": "股票福利 (Stock Benefits)",
	Investment: "投资 (Investment)",
	Investments: "投资 (Investments)",
	Shares: "股份 (Shares)",
	Dividend: "分红 (Dividend)",

	// ========== 婚姻 ==========
	"Finding a Spouse": "寻找配偶 (Finding a Spouse)",
	Proposal: "求婚 (Proposal)",
	Divorce: "离婚 (Divorce)",
	"Marital status": "婚姻状况 (Marital status)",
	"Married to": "已婚于 (Married to)",

	// ========== 属性提升 / 训练 ==========
	Train: "训练 (Train)",
	TRAIN: "训练 (TRAIN)",
	Trainer: "教练 (Trainer)",
	Training: "训练 (Training)",
	"Train stats": "训练属性 (Train stats)",

	// ========== 其他 ==========
	Notes: "备注 (Notes)",
	Note: "备注 (Note)",
	Watchlist: "监视名单 (Watchlist)",
	Targets: "目标",
	Friends: "好友 (Friends)",
	Enemies: "敌人 (Enemies)",
	Attack: "攻击 (Attack)",
	Defend: "防御 (Defend)",
	Heal: "治疗 (Heal)",
	Revive: "复活 (Revive)",
	Join: "加入 (Join)",
	Leave: "离开 (Leave)",
	Use: "使用 (Use)",
	USE: "使用 (USE)",
	Buy: "购买 (Buy)",
	BUY: "购买 (BUY)",
	Pay: "支付 (Pay)",
	PAY: "支付 (PAY)",
	Create: "创建",
	Donate: "捐赠",
	Give: "给予",
	Retrieve: "取回",
	Deposit: "存入",
	Withdraw: "提取",
	Report: "举报",
	Message: "消息",
	Send: "发送",
	SEND: "发送 (SEND)",
	Reply: "回复",
	Back: "返回",
	Next: "下一步",
	Continue: "继续",
	Finish: "完成",
	Done: "完成",
	Select: "选择",
	Upgrade: "升级",
	UPGRADE: "升级 (UPGRADE)",
	Work: "工作",
	Mug: "抢劫 (Mug)",
	Arrest: "逮捕 (Arrest)",
	Bounty: "悬赏 (Bounty)",
	Bounties: "悬赏 (Bounties)",
	Trading: "交易 (Trading)",
	Communication: "交流 (Communication)",
	"Net Worth": "净资产 (Net Worth)",
	Networth: "净资产 (Networth)",
	"net worth": "净资产 (net worth)",

	// ========== 设置页 About / Changelog / Export ==========
	Version: "版本",
	"Disk space used:": "已用磁盘空间: (Disk space used:)",
	"Failed to load disk usage.": "无法读取磁盘占用。 (Failed to load disk usage.)",
	Maintenance: "维护 (Maintenance)",
	"Force update": "强制更新 (Force update)",
	Other: "其他 (Other)",
	Userdata: "用户数据 (Userdata)",
	Torndata: "Torn 数据 (Torndata)",
	Stockdata: "股票数据 (Stockdata)",
	Factiondata: "帮派数据 (Factiondata)",
	"Reinitialize timers": "重置定时器 (Reinitialize timers)",
	"Clear cache": "清空缓存 (Clear cache)",
	"Data health checks are not relevant without an API key configured.":
		"未配置 API Key 时,数据健康检查不可用。 (Data health checks are not relevant without an API key configured.)",
	"Data health": "数据健康 (Data health)",
	"checking...": "检查中... (checking...)",
	"likely okay": "正常 (likely okay)",
	"possibly corrupted": "可能损坏 (possibly corrupted)",
	Contact: "联系我们 (Contact)",
	Team: "开发团队 (Team)",
	Contributors: "贡献者 (Contributors)",
	Recommended: "推荐 (Recommended)",
	Locally: "本地 (Locally)",
	Remote: "远程 (Remote)",
	Clipboard: "剪贴板 (Clipboard)",
	File: "文件 (File)",
	"Browser Sync": "浏览器同步 (Browser Sync)",
	Export: "导出",
	Import: "导入",
	"Copy a compact version of the database, or paste one back in manually.":
		"复制数据库的紧凑版本,或粘贴回来手动导入。 (Copy a compact version of the database, or paste one back in manually.)",
	"Download a formatted file or import one from disk.": "下载格式化文件,或从磁盘导入。 (Download a formatted file or import one from disk.)",
	"Use your browsers synchronized extension storage. Make sure extensions are synced.":
		"使用浏览器的同步扩展存储。请确认扩展同步已开启。 (Use your browsers synchronized extension storage. Make sure extensions are synced.)",
	"Failed to copy the export to your clipboard.": "无法复制导出数据到剪贴板。 (Failed to copy the export to your clipboard.)",
	"Copied database to your clipboard.": "已复制数据库到剪贴板。 (Copied database to your clipboard.)",
	"Couldn't save the imported database.": "无法保存导入的数据库。 (Couldn't save the imported database.)",
	"Imported data.": "已导入数据。 (Imported data.)",
	"Import failed.": "导入失败。 (Import failed.)",
	"Failed to load sync data.": "无法加载同步数据。 (Failed to load sync data.)",
	"Loading sync status...": "正在加载同步状态... (Loading sync status...)",
	"Successfully saved your data to your browser sync.": "已成功保存数据到浏览器同步。 (Successfully saved your data to your browser sync.)",
	"Failed to export browser sync data.": "无法导出浏览器同步数据。 (Failed to export browser sync data.)",
	"Successfully loaded your data from your browser sync.": "已成功从浏览器同步加载数据。 (Successfully loaded your data from your browser sync.)",
	"Failed to import browser sync data.": "无法导入浏览器同步数据。 (Failed to import browser sync data.)",
	"Cleared browser sync data.": "已清空浏览器同步数据。 (Cleared browser sync data.)",
	"Failed to clear browser sync data.": "无法清空浏览器同步数据。 (Failed to clear browser sync data.)",
	"Your custom notification sound is larger than": "你自定义的通知声音文件超过 (Your custom notification sound is larger than)",
	"Last update:": "最后更新: (Last update:)",
	"Database size:": "数据库大小: (Database size:)",
	"Are you sure you want to clear the remote storage?": "确认要清空远程存储吗? (Are you sure you want to clear the remote storage?)",
	"Review what will be included before creating the export.": "在创建导出前确认要包含的内容。 (Review what will be included before creating the export.)",
	"Includes:": "包含: (Includes:)",
	"User ID and username": "用户 ID 与用户名 (User ID and username)",
	"Client version and database size": "客户端版本与数据库大小 (Client version and database size)",
	"Export date and time": "导出日期与时间 (Export date and time)",
	"Version notice": "版本公告 (Version notice)",
	"Filters and sorting": "筛选与排序 (Filters and sorting)",
	"Stakeouts, notes and quick items": "监视名单、备注与快捷物品 (Stakeouts, notes and quick items)",
	"Include API key": "包含 API Key (Include API key)",
	"Following items will be overwritten:": "以下条目将被覆盖: (Following items will be overwritten:)",
	Stakeouts: "监视名单",
	"Quick Items, crimes and jail bust / bail": "快捷物品、犯罪与劫狱 / 保释 (Quick Items, crimes and jail bust / bail)",
	"API Key (if present in the export)": "API Key(若导出中包含)",
	"Action failed.": "操作失败。 (Action failed.)",
	"Reset background timers.": "已重置后台定时器。 (Reset background timers.)",
	"Cleared cache.": "已清空缓存。 (Cleared cache.)",
	Fetched: "已获取 (Fetched)",

	// ========== Preferences 主导航 ==========
	Internal: "内部",
	Global: "全局",
	Financial: "财务",
	QoL: "体验优化",
	Connections: "外部连接",
	Sidebar: "侧边栏",
	Chat: "聊天",
	Advanced: "高级",
	Markets: "市场",
	Items: "物品",
	Information: "信息",
	Combat: "战斗",
	Racing: "赛车",
	Services: "服务",
	API: "API",
	Popup: "弹窗",
	Theme: "主题",

	// ========== Preferences 通用 ==========
	"Page Theme": "页面主题 (Page Theme)",
	"Popup: Dashboard": "弹窗:面板 (Popup: Dashboard)",
	"Popup: Market search": "弹窗:市场搜索 (Popup: Market search)",
	"Popup: Calculator": "弹窗:计算器 (Popup: Calculator)",
	"Popup: Stocks overview": "弹窗:股票概览 (Popup: Stocks overview)",
	"Popup: Notifications": "弹窗:通知 (Popup: Notifications)",
	"Default tab": "默认标签页 (Default tab)",
	"Show stakeouts": "显示监视名单 (Show stakeouts)",
	"Show status icons": "显示状态图标 (Show status icons)",
	"Show bar full time": "显示状态条满值时间 (Show bar full time)",
	"Populate bazaar prices using external services": "使用外部服务填充集市价格 (Populate bazaar prices using external services)",
	"Enable icon bars": "启用图标状态条 (Enable icon bars)",
	"Icon bars: Energy": "图标状态条:能量 (Icon bars: Energy)",
	"Icon bars: Nerve": "图标状态条:勇气 (Icon bars: Nerve)",
	"Icon bars: Happy": "图标状态条:幸福度 (Icon bars: Happy)",
	"Icon bars: Life": "图标状态条:生命值 (Icon bars: Life)",
	"Icon bars: Chain": "图标状态条:连击 (Icon bars: Chain)",
	"Icon bars: Travel": "图标状态条:旅行 (Icon bars: Travel)",
	"Overall Notifications": "通知总开关 (Overall Notifications)",
	"Open related page when clicking a notification": "点击通知时打开关联页面 (Open related page when clicking a notification)",
	"Require interaction for notifications": "通知需要手动关闭 (Require interaction for notifications)",
	"Sound effect": "音效 (Sound effect)",
	"Sound volume": "音量 (Sound volume)",
	"Text-to-speech": "文字转语音 (Text-to-speech)",
	"Speech rate": "语速 (Speech rate)",
	"TTS Voice": "TTS 语音 (TTS Voice)",
	"Notification: Events": "通知:事件 (Notification: Events)",
	"Notification: Messages": "通知:消息 (Notification: Messages)",
	"Notification: Status change": "通知:状态变化 (Notification: Status change)",
	"Notification: Traveling": "通知:旅行中 (Notification: Traveling)",
	"Notification: Education": "通知:教育 (Notification: Education)",
	"Notification: New day": "通知:新的一天 (Notification: New day)",
	"Notification: Offline hours": "通知:离线小时数 (Notification: Offline hours)",
	"Notification: Leaving hospital": "通知:出院 (Notification: Leaving hospital)",
	"Notification: Landing": "通知:落地 (Notification: Landing)",
	"Notification: Energy": "通知:能量 (Notification: Energy)",
	"Notification: Nerve": "通知:勇气 (Notification: Nerve)",
	"Notification: Happy": "通知:幸福度 (Notification: Happy)",
	"Notification: Life": "通知:生命值 (Notification: Life)",
	"Notification: Energy refill": "通知:能量恢复 (Notification: Energy refill)",
	"Notification: Nerve refill": "通知:勇气恢复 (Notification: Nerve refill)",
	"Notification: Cooldowns": "通知:冷却 (Notification: Cooldowns)",
	"Notification: Drug cooldown": "通知:药物冷却 (Notification: Drug cooldown)",
	"Notification: Booster cooldown": "通知:增益冷却 (Notification: Booster cooldown)",
	"Notification: Medical cooldown": "通知:医疗冷却 (Notification: Medical cooldown)",
	"Notification: Missions expiry": "通知:任务到期 (Notification: Missions expiry)",
	"Notification: Missions limit": "通知:任务上限 (Notification: Missions limit)",
	"Notification: Chain timer": "通知:连击计时 (Notification: Chain timer)",
	"Notification: Stakeouts": "通知:监视名单 (Notification: Stakeouts)",

	// ========== 通用控件 ==========
	days: "天 (days)",
	hours: "小时 (hours)",
	minutes: "分钟 (minutes)",
	seconds: "秒 (seconds)",
	Enabled: "已启用 (Enabled)",
	Disabled: "已禁用 (Disabled)",
	"Not Found - Group": "未找到 - 分组 (Not Found - Group)",
	"Not Found - Section": "未找到 - 标签 (Not Found - Section)",
	"Couldn't find your requested preferences group.": "找不到你请求的偏好分组。 (Couldn't find your requested preferences group.)",
	"Couldn't find your requested preferences section in this group.":
		"找不到该分组下的标签页。 (Couldn't find your requested preferences section in this group.)",
	"Search preferences": "搜索偏好设置 (Search preferences)",
	"Search through the TornTools preferences.": "在 TornTools 偏好设置中搜索。 (Search through the TornTools preferences.)",
	"No preferences found.": "未找到匹配的偏好。 (No preferences found.)",
	"Paste your exported JSON here.": "在此粘贴你导出的 JSON。 (Paste your exported JSON here.)",
	Clear: "清空 (Clear)",
	Dashboard: "面板",
	Calculator: "计算器",
	Stocks: "股票",
	Preferences: "偏好设置",

	// ========== Preferences 全量 label 汉化 ==========
	"Notification: Chain bonus": "通知:连击加成 (Notification: Chain bonus)",
	"Notification: NPCs enabled": "通知:NPC 启用 (Notification: NPCs enabled)",
	"Notification: NPCs": "通知:NPC (Notification: NPCs)",
	"Notification: Planned NPC attack": "通知:计划 NPC 攻击 (Notification: Planned NPC attack)",
	"API key": "API Key (API key)",
	"API comment": "API 备注 (API comment)",
	"API Usage: essential userdata interval": "API 用法:核心 userdata 间隔 (API Usage: essential userdata interval)",
	"API Usage: basic userdata interval": "API 用法:基础 userdata 间隔 (API Usage: basic userdata interval)",
	"API Usage: passive userdata interval": "API 用法:被动 userdata 间隔 (API Usage: passive userdata interval)",
	"API Usage: stakeout interval": "API 用法:监视名单间隔 (API Usage: stakeout interval)",
	"Container Theme": "容器主题 (Container Theme)",
	"CSV Delimiter": "CSV 分隔符 (CSV Delimiter)",
	"Date Format": "日期格式 (Date Format)",
	"Time Format": "时间格式 (Time Format)",
	"Show times in TCT": "用 Torn 城时间显示 (Show times in TCT)",
	"Align left": "左对齐 (Align left)",
	"Keep attack history": "保留攻击记录 (Keep attack history)",
	"Hide level upgrade": "隐藏升级提示 (Hide level upgrade)",
	"Hide tutorials": "隐藏教程 (Hide tutorials)",
	"Hide leave and quit buttons": "隐藏离开与退出按钮 (Hide leave and quit buttons)",
	"Last action in mini profile": "小资料卡显示最后动作 (Last action in mini profile)",
	"Stacking mode": "叠加模式 (Stacking mode)",
	"No outside link alert": "外链警告 (No outside link alert)",
	"Clearer page titles": "更清晰的页面标题 (Clearer page titles)",
	"URL Fill": "URL 自动填充 (URL Fill)",
	"Highlight Easter Eggs": "高亮彩蛋 (Highlight Easter Eggs)",
	"Highlight Easter Eggs alert": "彩蛋高亮提醒 (Highlight Easter Eggs alert)",
	"Revive Provider": "复活服务提供商 (Revive Provider)",
	"Sidebar notes": "侧边栏备注 (Sidebar notes)",
	"Company addiction level": "公司成瘾等级 (Company addiction level)",
	"Job points tooltip": "工作点数提示 (Job points tooltip)",
	"Make the energy and nerve bar link to a related page": "能量与勇气状态条加链接 (Make the energy and nerve bar link to a related page)",
	"Highlight energy when refill is unused": "未使用能量恢复时高亮 (Highlight energy when refill is unused)",
	"Highlight nerve when refill is unused": "未使用勇气恢复时高亮 (Highlight nerve when refill is unused)",
	"Points value": "积分价值 (Points value)",
	"Extension update notice": "扩展更新提示 (Extension update notice)",
	"Display achievements": "显示成就 (Display achievements)",
	"Show completed achievements": "显示已完成成就 (Show completed achievements)",
	"OC 1.0 ready time": "OC 1.0 就绪时间 (OC 1.0 ready time)",
	"OC 2.0 ready time": "OC 2.0 就绪时间 (OC 2.0 ready time)",
	"OC 2.0 include crime level": "OC 2.0 包含犯罪等级 (OC 2.0 include crime level)",
	"OC 2.0 include crime name and position": "OC 2.0 包含犯罪名与位置 (OC 2.0 include crime name and position)",
	"Faction OC 1.0 ready time": "帮派 OC 1.0 就绪时间 (Faction OC 1.0 ready time)",
	"Cooldown end times": "冷却结束时间 (Cooldown end times)",
	"Ranked war timer": "排名战计时器 (Ranked war timer)",
	"Virus timer": "病毒计时器 (Virus timer)",
	"Collapsible areas": "可折叠区域 (Collapsible areas)",
	"TT settings link": "TT 设置链接 (TT settings link)",
	"Hide gym highlight": "隐藏健身房高亮 (Hide gym highlight)",
	"Hide newspaper highlight": "隐藏报纸高亮 (Hide newspaper highlight)",
	"Property upkeep highlight": "房产维护费高亮 (Property upkeep highlight)",
	"NPC loot times": "NPC 战利品时间 (NPC loot times)",
	"NPC loot source": "NPC 战利品来源 (NPC loot source)",
	"Display reminders": "显示提醒 (Display reminders)",
	"Include reminders with finished tasks": "包含已完成任务的提醒 (Include reminders with finished tasks)",
	"Reminders: Energy Refill": "提醒:能量恢复 (Reminders: Energy Refill)",
	"Reminders: Nerve Refill": "提醒:勇气恢复 (Reminders: Nerve Refill)",
	"Reminders: Casino Refill": "提醒:赌场代币 (Reminders: Casino Refill)",
	"Reminders: Medical Cooldown": "提醒:医疗冷却 (Reminders: Medical Cooldown)",
	"Reminders: Booster Cooldown": "提醒:增益冷却 (Reminders: Booster Cooldown)",
	"Reminders: Drug Cooldown": "提醒:药物冷却 (Reminders: Drug Cooldown)",
	"Reminders: Bank Investment": "提醒:银行投资 (Reminders: Bank Investment)",
	"Reminders: Virus Coding": "提醒:病毒编程 (Reminders: Virus Coding)",
	"Reminders: Mission Reward": "提醒:任务奖励 (Reminders: Mission Reward)",
	"Reminders: OC": "提醒:有组织犯罪 (Reminders: OC)",
	"Reminders: OC Item": "提醒:OC 物品 (Reminders: OC Item)",
	"Reminders: Race": "提醒:赛车 (Reminders: Race)",
	"Reminders: Education": "提醒:教育 (Reminders: Education)",
	"Font size": "字体大小 (Font size)",
	"Search chat": "聊天搜索 (Search chat)",
	"Autocomplete usernames": "用户名自动补全 (Autocomplete usernames)",
	"Trade chat timer till next post": "交易聊天发帖间隔计时 (Trade chat timer till next post)",
	"Button for hiding chat": "隐藏聊天按钮 (Button for hiding chat)",
	"Make chats resizable": "聊天窗口可调大小 (Make chats resizable)",
	"Developer errors": "开发者错误 (Developer errors)",
	"Feature manager": "功能管理 (Feature manager)",
	"Feature manager: only failed": "功能管理:仅显示失败 (Feature manager: only failed)",
	"Feature manager: hide disabled": "功能管理:隐藏已禁用 (Feature manager: hide disabled)",
	"Feature manager: hide when empty": "功能管理:空时隐藏 (Feature manager: hide when empty)",
	"Show worth of points, bazaar sales and item market sales on event hover":
		"悬停显示积分、集市与物品市场销售价值 (Show worth of points, bazaar sales and item market sales on event hover)",
	"Display networth details on the homepage": "主页显示净资产详情 (Display networth details on the homepage)",
	"Trade item value": "交易物品价值 (Trade item value)",
	"Display case worth": "显示物品盒价值 (Display case worth)",
	"Total value for your crimes v2 item rewards": "OC 2.0 物品奖励总价值 (Total value for your crimes v2 item rewards)",
	"Display item values": "显示物品价值 (Display item values)",
	"Link to the item market": "链接到物品市场 (Link to the item market)",
	"Total value of items for supply pack": "补给包物品总价值 (Total value of items for supply pack)",
	"Enable bank investment info": "显示银行投资信息 (Enable bank investment info)",
	"Enable bank investment due time": "显示银行投资到期时间 (Enable bank investment due time)",
	"Display acronyms beside stock names": "股票名旁显示简称 (Display acronyms beside stock names)",
	"Display money input when buying and selling stock": "买卖股票时显示金额输入 (Display money input when buying and selling stock)",
	"Display total value of portfolio and profits": "显示组合总价值与利润 (Display total value of portfolio and profits)",
	"Show net total of casino game": "显示赌场游戏净总和 (Show net total of casino game)",
	"Show the optimal choice for blackjack": "显示二十一点最优选择 (Show the optimal choice for blackjack)",
	"Enable the high-low helper": "启用高低辅助 (Enable the high-low helper)",
	"Move high-low buttons to make it easier to click through": "高低按钮上移便于点击 (Move high-low buttons to make it easier to click through)",
	"Show the total cost of buying an item": "显示物品购买总费用 (Show the total cost of buying an item)",
	"Show the worth of the visited bazaar": "显示当前集市总价值 (Show the worth of the visited bazaar)",
	"Bazaar Fill Max": "集市一键填满 (Bazaar Fill Max)",
	"Bazaar Fill Max ignore cash on hand": "集市填满忽略现金余额 (Bazaar Fill Max ignore cash on hand)",
	"Highlight items less than the vendor sell price": "高亮低于商店回收价的物品 (Highlight items less than the vendor sell price)",
	"Shop Fill Max": "商店一键填满 (Shop Fill Max)",
	"Shop Fill Max ignore cash on hand": "商店填满忽略现金余额 (Shop Fill Max ignore cash on hand)",
	"Shop item profits": "商店物品利润 (Shop item profits)",
	"Shop item market values": "商店物品市场价值 (Shop item market values)",
	"Highlight item market items below value": "高亮低于价值的物品市场物品 (Highlight item market items below value)",
	"Play a sound when highlighting cheap items": "高亮便宜物品时播放音效 (Play a sound when highlighting cheap items)",
	"Move the market bar to the left": "市场栏移到左侧 (Move the market bar to the left)",
	"Item Market Fill Max": "物品市场一键填满 (Item Market Fill Max)",
	"Bazaar entries": "集市条目数 (Bazaar entries)",
	"Move pagination to the top of the list": "分页按钮移至顶部 (Move pagination to the top of the list)",
	"Show the quick items container": "显示快捷物品容器 (Show the quick items container)",
	"Show details about drugs": "显示药品详情 (Show details about drugs)",
	"Highlight blood bags": "高亮血袋 (Highlight blood bags)",
	"Warn if an item gives you energy over 1000": "物品能量超 1000 时警告 (Warn if an item gives you energy over 1000)",
	"Show life information when consuming medical items": "使用医疗物品时显示生命信息 (Show life information when consuming medical items)",
	"Hide the recycle message": "隐藏回收提示 (Hide the recycle message)",
	"Hide the too many items warning": "隐藏物品过多警告 (Hide the too many items warning)",
	"Display missing books": "显示缺失书籍 (Display missing books)",
	"Missing flowers": "缺失花卉 (Missing flowers)",
	"Missing plushies": "缺失毛绒玩具 (Missing plushies)",
	"Book effects": "书籍效果 (Book effects)",
	"Energy drink gains": "能量饮料收益 (Energy drink gains)",
	"Candy happy gains": "糖果幸福度收益 (Candy happy gains)",
	"Alcohol nerve gains": "酒类勇气收益 (Alcohol nerve gains)",
	"Show effective battle stats on the homepage": "主页显示有效战斗属性 (Show effective battle stats on the homepage)",
	"Highlight items on the city map": "高亮城市地图物品 (Highlight items on the city map)",
	"Combine duplicate city map items": "合并重复城市地图物品 (Combine duplicate city map items)",
	"Last action: Faction members": "最后动作:帮派成员 (Last action: Faction members)",
	"Last action: Own company employees": "最后动作:自己公司员工 (Last action: Own company employees)",
	"Last action: Other company employees": "最后动作:其他公司员工 (Last action: Other company employees)",
	"Show value of all properties": "显示所有房产价值 (Show value of all properties)",
	"Show happiness of all properties": "显示所有房产幸福度 (Show happiness of all properties)",
	"Show forum action menu": "显示论坛操作菜单 (Show forum action menu)",
	"Display button to add debugging information to forum thread": "在论坛贴显示调试信息按钮 (Display button to add debugging information to forum thread)",
	"Show a button to only show new items in a feed": "仅显示新物品按钮 (Show a button to only show new items in a feed)",
	"Grey out completed education categories": "已完成教育分类置灰 (Grey out completed education categories)",
	"Show education course finish time": "显示教育课程完成时间 (Show education course finish time)",
	"Mission hints": "任务提示 (Mission hints)",
	"Mission reward information": "任务奖励信息 (Mission reward information)",
	"Autofill number of sets in museum": "博物馆套装数量自动填充 (Autofill number of sets in museum)",
	"Show a link to the Item Market when viewing an item's details": "物品详情页加物品市场链接 (Show a link to the Item Market when viewing an item's details)",
	"Automatically show demo content on API page": "API 页自动显示示例 (Automatically show demo content on API page)",
	"Automatically fill your API key on API page": "API 页自动填入 API Key (Automatically fill your API key on API page)",
	"Automatically select pretty outputs on API page": "API 页自动选择美化输出 (Automatically select pretty outputs on API page)",
	"Make API selections clickable": "API 选择可点击 (Make API selections clickable)",
	"Filter: Stocks": "筛选:股票 (Filter: Stocks)",
	"Filter: Auction House": "筛选:拍卖行 (Filter: Auction House)",
	"Filter: Bounties": "筛选:悬赏 (Filter: Bounties)",
	"Filter: Faction Armory": "筛选:帮派军械库 (Filter: Faction Armory)",
	"Filter: Faction Members": "筛选:帮派成员 (Filter: Faction Members)",
	"Filter: Ranked War": "筛选:排名战 (Filter: Ranked War)",
	"Filter: OC2": "筛选:OC2 (Filter: OC2)",
	"Filter: Competition": "筛选:竞赛 (Filter: Competition)",
	"Filter: Friends": "筛选:好友 (Filter: Friends)",
	"Filter: Enemies": "筛选:敌人 (Filter: Enemies)",
	"Filter: Targets": "筛选:目标 (Filter: Targets)",
	"Filter: Hospital": "筛选:医院 (Filter: Hospital)",
	"Filter: Jail": "筛选:监狱 (Filter: Jail)",
	"Filter: Custom Races": "筛选:自定义赛车 (Filter: Custom Races)",
	"Filter: City Shops": "筛选:城市商店 (Filter: City Shops)",
	"Filter: Travel Items": "筛选:旅行物品 (Filter: Travel Items)",
	"Filter: Abroad People": "筛选:国外人员 (Filter: Abroad People)",
	"Filter: Userlist": "筛选:用户列表 (Filter: Userlist)",
	"Filter: Properties": "筛选:房产 (Filter: Properties)",
	"FF Scouter: Mini profiles": "FF 预测:小资料卡 (FF Scouter: Mini profiles)",
	"FF Scouter: Profiles": "FF 预测:个人资料 (FF Scouter: Profiles)",
	"FF Scouter: Attack page": "FF 预测:攻击页 (FF Scouter: Attack page)",
	"FF Scouter: Faction member lists": "FF 预测:帮派成员列表 (FF Scouter: Faction member lists)",
	"FF Scouter: Honor bars and name displays": "FF 预测:荣誉条与名字显示 (FF Scouter: Honor bars and name displays)",
	"Play a sound when attack time drops below 30 seconds": "攻击倒计时低于 30 秒时播放音效 (Play a sound when attack time drops below 30 seconds)",
	"Show FF modifier": "显示 FF 修正值 (Show FF modifier)",
	"Show weapon bonus information in attack log": "在攻击日志显示武器加成 (Show weapon bonus information in attack log)",
	"Show ally warning on profiles": "在个人资料页显示盟友警告 (Show ally warning on profiles)",
	"Disable attack button on ally profile pages": "盟友资料页禁用攻击按钮 (Disable attack button on ally profile pages)",
	"Stats Estimate": "属性预估 (Stats Estimate)",
	"Stats Estimate: max level": "属性预估:最高等级 (Stats Estimate: max level)",
	"Stats Estimate: delay requests": "属性预估:延迟请求 (Stats Estimate: delay requests)",
	"Stats Estimate: only show cached results": "属性预估:仅显示缓存 (Stats Estimate: only show cached results)",
	"Stats Estimate: show notice when no cached result": "属性预估:无缓存时提示 (Stats Estimate: show notice when no cached result)",
	"Stats Estimate: Profiles": "属性预估:个人资料 (Stats Estimate: Profiles)",
	"Stats Estimate: Enemies list": "属性预估:敌人列表 (Stats Estimate: Enemies list)",
	"Stats Estimate: Targets list": "属性预估:目标列表 (Stats Estimate: Targets list)",
	"Stats Estimate: Hall of Fame": "属性预估:名人堂 (Stats Estimate: Hall of Fame)",
	"Stats Estimate: Attacks page": "属性预估:攻击页 (Stats Estimate: Attacks page)",
	"Stats Estimate: Userlist": "属性预估:用户列表 (Stats Estimate: Userlist)",
	"Stats Estimate: Bounties": "属性预估:悬赏 (Stats Estimate: Bounties)",
	"Stats Estimate: Faction members": "属性预估:帮派成员 (Stats Estimate: Faction members)",
	"Stats Estimate: Faction wars": "属性预估:帮派战争 (Stats Estimate: Faction wars)",
	"Stats Estimate: Faction ranked wars": "属性预估:帮派排名战 (Stats Estimate: Faction ranked wars)",
	"Stats Estimate: Abroad": "属性预估:国外 (Stats Estimate: Abroad)",
	"Show a computer link while flying or abroad": "飞行/国外时显示电脑链接 (Show a computer link while flying or abroad)",
	"Show a table of all countries with their item and stocks": "显示所有国家物品与股票表 (Show a table of all countries with their item and stocks)",
	"Update country in travel table filter as per map selections":
		"根据地图选择更新旅行表国家筛选 (Update country in travel table filter as per map selections)",
	"Show the time when you would land when flying now": "显示现在飞行何时落地 (Show the time when you would land when flying now)",
	"Show warnings if cooldowns will be over when you land back in Torn":
		"返回 Torn 时若冷却将结束则警告 (Show warnings if cooldowns will be over when you land back in Torn)",
	"Show the landing time when flying": "飞行时显示落地时间 (Show the landing time when flying)",
	"Hide plane and funfact box while flying": "飞行时隐藏飞机与趣味信息 (Hide plane and funfact box while flying)",
	"Show travel time in tab title": "标签页标题显示旅行时间 (Show travel time in tab title)",
	"Show profits of items in market while abroad": "国外时显示市场物品利润 (Show profits of items in market while abroad)",
	"Show fill max button while abroad": "国外时显示一键填满按钮 (Show fill max button while abroad)",
	"Automatically fill max amount of stock while abroad": "国外时自动填满股票数量 (Automatically fill max amount of stock while abroad)",
	"Efficiently rehab to not waste any natural decay": "高效恢复不浪费自然衰减 (Efficiently rehab to not waste any natural decay)",
	"Automatically set rehab slider to the current amount": "自动设置恢复滑块为当前值 (Automatically set rehab slider to the current amount)",
	"Show button to hide the travel inventory": "显示隐藏旅行物品按钮 (Show button to hide the travel inventory)",
	"Faster hunting": "加速狩猎 (Faster hunting)",
	"Reformat faction names as FACTIONNAME [ID]": "帮派名格式化为 帮派名 [ID]",
	"Clickable balances": "余额可点击 (Clickable balances)",
	"Balance warning": "余额警告 (Balance warning)",
	"Show full faction description without scroll bar": "帮派描述完整显示无滚动 (Show full faction description without scroll bar)",
	"Make faction infobox foldable": "帮派信息框可折叠 (Make faction infobox foldable)",
	"Add numbers to every member of faction": "帮派成员加编号 (Add numbers to every member of faction)",
	"Show the finish time of wars": "显示战争结束时间 (Show the finish time of wars)",
	"Show total worth of faction armory": "显示帮派军械库总价值 (Show total worth of faction armory)",
	"Show respect required for a faction upgrade": "显示升级所需面子 (Show respect required for a faction upgrade)",
	"Show money and points balance of members": "显示成员金钱与积分 (Show money and points balance of members)",
	"Quick items in the armory": "军械库快捷物品 (Quick items in the armory)",
	"Show spy details of faction members": "显示帮派成员间谍详情 (Show spy details of faction members)",
	"Show total challenge contributions": "显示挑战总贡献 (Show total challenge contributions)",
	"CSV: Ranked war report": "CSV:排名战报告 (CSV: Ranked war report)",
	"CSV: War report": "CSV:战争报告 (CSV: War report)",
	"CSV: Chain report": "CSV:连击报告 (CSV: Chain report)",
	"CSV: Challenge contributions": "CSV:挑战贡献 (CSV: Challenge contributions)",
	"Highlight own OC": "高亮自己的 OC (Highlight own OC)",
	"Open ready OCs": "打开已就绪的 OC (Open ready OCs)",
	"Show amount of available players for OC": "显示 OC 可参战人数 (Show amount of available players for OC)",
	"Show recommended NNB per OC": "显示每个 OC 推荐 NNB (Show recommended NNB per OC)",
	"Show a user's NNB": "显示用户 NNB (Show a user's NNB)",
	"Show OC times on the faction page": "帮派页显示 OC 时间 (Show OC times on the faction page)",
	"Show last action on OC details": "OC 详情显示最后动作 (Show last action on OC details)",
	"Warn when joining a crime without passing the conditions": "犯罪不满足条件时警告 (Warn when joining a crime without passing the conditions)",
	"Show the total rewards for ranked wars": "显示排名战总奖励 (Show the total rewards for ranked wars)",
	"Highlight yourself in war reports": "在战争报告中高亮自己 (Highlight yourself in war reports)",
	"Calculate average personal stats": "计算个人属性均值 (Calculate average personal stats)",
	"Reformat profile page headings as USERNAME [ID]": "个人资料页标题格式化为 用户名 [ID]",
	"Show user's status indicator next to their name": "在用户名旁显示状态指示 (Show user's status indicator next to their name)",
	"Show profile notes": "显示个人备注 (Show profile notes)",
	"Show age of profile in words": "用文字显示年龄 (Show age of profile in words)",
	"Show the profile box": "显示个人资料卡 (Show the profile box)",
	"Profile box: automatically fetch data from the API": "个人资料卡:自动从 API 获取数据 (Profile box: automatically fetch data from the API)",
	"Profile box: display personal stats": "个人资料卡:显示个人属性 (Profile box: display personal stats)",
	"Profile box: show known spy results": "个人资料卡:显示已知间谍结果 (Profile box: show known spy results)",
	"Profile box: enable stakeout options": "个人资料卡:启用监视选项 (Profile box: enable stakeout options)",
	"Profile box: show your attack history": "个人资料卡:显示攻击记录 (Profile box: show your attack history)",
	"Reformat company names as COMPANYNAME [ID]": "公司名格式化为 公司名 [ID]",
	"Help with company specials": "公司特殊技能辅助 (Help with company specials)",
	"Show company specials on the job list": "工作列表显示公司特殊技能 (Show company specials on the job list)",
	"Automatically fill company stock based on previous day sales": "根据昨日销量自动填公司股票 (Automatically fill company stock based on previous day sales)",
	"Employee effectiveness warning": "员工效率警告 (Employee effectiveness warning)",
	"Show specialist gym requirements": "显示专科健身房要求 (Show specialist gym requirements)",
	"Allow stats to be disabled in gym": "允许在健身房禁用属性 (Allow stats to be disabled in gym)",
	"Show current steadfast bonus for each stat": "显示每项属性的坚定加成 (Show current steadfast bonus for each stat)",
	"Display estimated gym energy progress": "显示健身房能量进度预测 (Display estimated gym energy progress)",
	"Display gym stat graph": "显示健身房属性图表 (Display gym stat graph)",
	"Quick Crimes": "快捷犯罪 (Quick Crimes)",
	"Chat button in trades": "交易页聊天按钮 (Chat button in trades)",
	"No confirm: Equipping items": "免确认:装备物品 (No confirm: Equipping items)",
	"No confirm: Accepting trades": "免确认:接受交易 (No confirm: Accepting trades)",
	"No confirm: Buying points from the market": "免确认:从市场购买积分 (No confirm: Buying points from the market)",
	"No confirm: Removing points from the market": "免确认:从市场移除积分 (No confirm: Removing points from the market)",
	"No confirm: Buying items abroad": "免确认:在国外购买物品 (No confirm: Buying items abroad)",
	"No confirm: Selling your properties": "免确认:出售房产 (No confirm: Selling your properties)",
	"Show win percentage of each car": "显示每辆车胜率 (Show win percentage of each car)",
	"Show racing upgrade values": "显示赛车升级价值 (Show racing upgrade values)",
	"Auto-select your car for each race": "自动选择赛车 (Auto-select your car for each race)",
	"Enable TornStats": "启用 TornStats (Enable TornStats)",
	"TornStats API key": "TornStats API Key (TornStats API key)",
	"Enable YATA": "启用 YATA (Enable YATA)",
	"YATA API key": "YATA API Key (YATA API key)",
	"Enable Prometheus": "启用 Prometheus (Enable Prometheus)",
	"Enable LZPT": "启用 LZPT (Enable LZPT)",
	"Enable TornW3B": "启用 TornW3B (Enable TornW3B)",
	"Enable FFScouter": "启用 FFScouter (Enable FFScouter)",
	"FFScouter API key": "FFScouter API Key (FFScouter API key)",
	"Enable Torn Intel": "启用 Torn Intel (Enable Torn Intel)",

	// ========== Preferences 中 section / item title ==========
	"Stat Estimate": "属性预估 (Stat Estimate)",
	"Honour Bars": "荣誉条 (Honour Bars)",
	"Honor Bars": "荣誉条 (Honor Bars)",
	"Attack Log": "攻击日志 (Attack Log)",
	"User ID": "用户 ID (User ID)",
	Username: "用户名 (Username)",
	"User status": "用户状态 (User status)",
	"User Status": "用户状态 (User Status)",
	"Donator status": "捐赠者状态 (Donator status)",
	"Last action": "最后动作 (Last action)",
	"Online status": "在线状态 (Online status)",
	"Status effect": "状态效果 (Status effect)",
	"Job information": "工作信息 (Job information)",
	"Faction information": "帮派信息 (Faction information)",
	"Criminal record": "犯罪记录 (Criminal record)",
	"Personal perks": "个人特权 (Personal perks)",
	"Property information": "房产信息 (Property information)",
	"Property Information": "房产信息 (Property Information)",
	"Job Information": "工作信息 (Job Information)",
	"Faction Information": "帮派信息 (Faction Information)",
	"Criminal Record": "犯罪记录 (Criminal Record)",
	"Personal Perks": "个人特权 (Personal Perks)",
	"Equipped Weapons & Armor": "装备的武器与护甲 (Equipped Weapons & Armor)",
	Disable: "禁用",
	Enable: "启用",
	Active: "已激活",
	Inactive: "未激活",
	Available: "可用",
	Unavailable: "不可用",
	All: "全部",
	None: "无",

	// ========== Preferences 各大 Section 标题与 label ==========
	"Travel Data": "旅行数据 (Travel Data)",
	Flying: "飞行 (Flying)",
	"FF Scouter": "FF 预测 (FF Scouter)",
	Attacks: "攻击 (Attacks)",
	"Hide Attack Options": "隐藏攻击选项 (Hide Attack Options)",
	Pages: "页面 (Pages)",
	Spy: "间谍 (Spy)",
	"Mini profiles": "小资料卡 (Mini profiles)",
	Profiles: "个人资料 (Profiles)",
	"Attack page": "攻击页 (Attack page)",
	"Faction member lists": "帮派成员列表 (Faction member lists)",
	"Honor bars and name displays": "荣誉条与名字显示 (Honor bars and name displays)",
	"Play a sound when the time on your attack drops below 30 seconds":
		"攻击倒计时低于 30 秒时播放音效 (Play a sound when the time on your attack drops below 30 seconds)",
	"Show information about weapon bonuses in the attack log": "在攻击日志显示武器加成 (Show information about weapon bonuses in the attack log)",
	"Show estimates for users up to level": "属性预估:最高等级 (Show estimates for users up to level)",
	"Delay requests": "延迟请求 (Delay requests)",
	"Only show cached results": "仅显示缓存 (Only show cached results)",
	"Show a notice when there was no cached result": "无缓存时提示 (Show a notice when there was no cached result)",
	"Enemies list": "敌人列表 (Enemies list)",
	"Targets list": "目标列表 (Targets list)",
	"Hall of Fame": "名人堂 (Hall of Fame)",
	"Attacks page": "攻击页 (Attacks page)",
	Userlist: "用户列表 (Userlist)",
	"Faction members": "帮派成员 (Faction members)",
	"Faction wars": "帮派战争 (Faction wars)",
	"Faction ranked wars": "帮派排名战 (Faction ranked wars)",
	"Show profits of items in market": "国外时显示市场物品利润 (Show profits of items in market)",
	"Show fill max button": "国外时显示一键填满按钮 (Show fill max button)",
	"Automatically fill max amount of stock": "国外时自动填满股票数量 (Automatically fill max amount of stock)",
	"Automatically set the slider to the current amount": "自动设置恢复滑块为当前值 (Automatically set the slider to the current amount)",
	"Reformat company names as 'COMPANYNAME [ID]'": "公司名格式化为 公司名 [ID]",
	"Help with several different company specials": "公司特殊技能辅助 (Help with several different company specials)",
	"Employee Inactivity Warning": "员工不活跃警告 (Employee Inactivity Warning)",
	"Reformat faction names as 'FACTIONNAME [ID]'": "帮派名格式化为 帮派名 [ID]",
	"Show the option to show the description without scroll bar": "帮派描述完整显示无滚动 (Show the option to show the description without scroll bar)",
	"Make infobox foldable": "帮派信息框可折叠 (Make infobox foldable)",
	"Show spy details of members of a faction you are viewing": "显示所查看帮派成员的间谍详情 (Show spy details of members of a faction you are viewing)",
	"Faction Spies": "帮派间谍 (Faction Spies)",
	Banking: "财务 (Banking)",
	CSV: "CSV",
	"Ranked war report": "排名战报告 (Ranked war report)",
	"War report": "战争报告 (War report)",
	"Chain report": "连击报告 (Chain report)",
	"Challenge contributions": "挑战贡献 (Challenge contributions)",
	OCs: "OC (OCs)",
	"OCs v1": "OCs v1",
	"Show amount of available players": "显示可参战人数 (Show amount of available players)",
	"OCs v2": "OCs v2",
	"Faction Member Inactivity Warning": "帮派成员不活跃警告 (Faction Member Inactivity Warning)",
	"No Confirm": "免确认 (No Confirm)",
	"Equipping items": "装备物品 (Equipping items)",
	"Accepting trades": "接受交易 (Accepting trades)",
	"Buying points from the market": "从市场购买积分 (Buying points from the market)",
	"Removing points from the market": "从市场移除积分 (Removing points from the market)",
	"Buying items abroad": "在国外购买物品 (Buying items abroad)",
	"Selling your properties": "出售房产 (Selling your properties)",
	"Combine duplicate items": "合并重复地图物品 (Combine duplicate items)",
	"Last Action": "最后动作 (Last Action)",
	"Own company employees": "自己公司员工 (Own company employees)",
	"Other company employees": "其他公司员工 (Other company employees)",
	"Display button to add debugging information to TornTools forum thread":
		"在 TornTools 论坛贴显示调试信息按钮 (Display button to add debugging information to TornTools forum thread)",
	Education: "教育 (Education)",
	"Reward information": "任务奖励信息 (Reward information)",
	Museum: "博物馆 (Museum)",
	"Automatically show demo content": "自动显示示例 (Automatically show demo content)",
	"Automatically fill your API key": "自动填入 API Key (Automatically fill your API key)",
	"Automatically select pretty outputs": "自动选择美化输出 (Automatically select pretty outputs)",
	Filters: "筛选 (Filters)",
	"Faction Armory": "帮派军械库 (Faction Armory)",
	"Faction Members": "帮派成员 (Faction Members)",
	"Filter on revivable status.": "按可复活状态筛选。 (Filter on revivable status.)",
	"Ranked War": "排名战 (Ranked War)",
	"OC2 2": "OC2 (OC2 2)",
	Competition: "竞赛 (Competition)",
	"Custom Races": "自定义赛车 (Custom Races)",
	"City Shops": "城市商店 (City Shops)",
	"Travel Items": "旅行物品 (Travel Items)",
	"Travel People": "旅行人员 (Travel People)",
	"Allow stats to be disabled": "允许禁用属性 (Allow stats to be disabled)",
	"Display stat graph": "显示健身房属性图表 (Display stat graph)",
	"Reformat profile page headings as 'USERNAME [ID]'": "个人资料页标题格式化为 用户名 [ID]",
	"Automatically fetch data from the API": "自动从 API 获取数据 (Automatically fetch data from the API)",
	"Display personal stats": "显示个人属性 (Display personal stats)",
	"Show known spy results": "显示已知间谍结果 (Show known spy results)",
	"Enable stakeout options": "启用监视选项 (Enable stakeout options)",
	"Show your attack history": "显示攻击记录 (Show your attack history)",

	// ========== 合并自 torn-cn-dictionary.md (自动生成) ==========
	// --- Rifles ---
	Rifles: "步枪 (Rifles)",
	// --- Machine ---
	"Machine guns": "机枪 (Machine guns)",
	// --- Pistols ---
	Pistols: "手枪 (Pistols)",
	// --- Heavy ---
	"Heavy artillery": "重型火炮 (Heavy artillery)",
	"Heavy Arms Cache": "重型武器箱 (Heavy Arms Cache)",
	// --- Shotguns ---
	Shotguns: "霰弹枪 (Shotguns)",
	// --- SMGs ---
	SMGs: "冲锋枪 (SMGs)",
	// --- Clubbing ---
	Clubbing: "钝器 (Clubbing)",
	// --- Slashing ---
	Slashing: "斩击 (Slashing)",
	// --- Piercing ---
	Piercing: "穿刺 (Piercing)",
	// --- Mechanical ---
	Mechanical: "机械 (Mechanical)",
	// --- Temporary ---
	Temporary: "临时 (Temporary)",
	// --- Blood ---
	"Blood Bag : 各血型": "血袋 : A+/A-/AB+... (Blood Bag : 各血型)",
	"Blood Bag : Irradiated": "血袋 : 受辐射 (Blood Bag : Irradiated)",
	"Blood Bags": "血袋 (Blood Bags)",
	// --- Empty ---
	"Empty Blood Bag": "空血袋 (Empty Blood Bag)",
	"Empty Box": "空盒子 (Empty Box)",
	"Empty Blood Bags": "空血袋 (Empty Blood Bags)",
	// --- Bottle ---
	"Bottle of Beer": "瓶装啤酒 (Bottle of Beer)",
	"Bottle of Champagne": "香槟 (Bottle of Champagne)",
	"Bottle of Saké": "清酒 (Bottle of Saké)",
	"Bottle of Tequila": "龙舌兰酒 (Bottle of Tequila)",
	"Bottle of Green Stout": "绿色烈性黑啤 (Bottle of Green Stout)",
	"Bottle of Kandy Kane": "拐杖糖酒 (Bottle of Kandy Kane)",
	"Bottle of Pumpkin Brew": "南瓜酿造酒 (Bottle of Pumpkin Brew)",
	"Bottle of Christmas Cocktail": "圣诞鸡尾酒 (Bottle of Christmas Cocktail)",
	"Bottle of Minty Mayhem": "薄荷狂欢酒 (Bottle of Minty Mayhem)",
	"Bottle of Wicked Witch": "邪恶女巫酒 (Bottle of Wicked Witch)",
	"Bottle of Mistletoe Madness": "槲寄生疯狂酒 (Bottle of Mistletoe Madness)",
	"Bottle of Stinky Swamp Punch": "臭沼泽潘趣酒 (Bottle of Stinky Swamp Punch)",
	"Bottle of Christmas Spirit": "圣诞精神酒 (Bottle of Christmas Spirit)",
	"Bottle Cap": "瓶盖 (Bottle Cap)",
	// --- Glass ---
	"Glass of Beer": "杯装啤酒 (Glass of Beer)",
	// --- Keg ---
	"Keg of Beer": "啤酒桶 (Keg of Beer)",
	// --- Six-Pack ---
	"Six-Pack of Alcohol": "六瓶装酒 (Six-Pack of Alcohol)",
	"Six-Pack of Energy Drink": "六罐装能量饮料 (Six-Pack of Energy Drink)",
	// --- Can ---
	"Can of Red Cow": "一罐 Red Cow (Can of Red Cow)",
	"Can of Crocozade": "一罐 Crocozade (Can of Crocozade)",
	"Can of Damp Valley": "一罐 Damp Valley (Can of Damp Valley)",
	"Can of Goose Juice": "一罐 Goose Juice (Can of Goose Juice)",
	"Can of Munster": "一罐 Munster (Can of Munster)",
	"Can of Rockstar Rudolph": "一罐 Rockstar Rudolph (Can of Rockstar Rudolph)",
	"Can of Santa Shooters": "一罐 Santa Shooters (Can of Santa Shooters)",
	"Can of Taurine Elite": "一罐 Taurine Elite (Can of Taurine Elite)",
	"Can of X-MASS": "一罐 X-MASS (Can of X-MASS)",
	// --- Box ---
	"Box of Bon Bons": "盒装糖果 (Box of Bon Bons)",
	"Box of Chocolate Bars": "盒装巧克力棒 (Box of Chocolate Bars)",
	"Box of Extra Strong Mints": "盒装超强薄荷糖 (Box of Extra Strong Mints)",
	"Box of Grenades": "手榴弹箱 (Box of Grenades)",
	"Box of Medical Supplies": "医疗用品箱 (Box of Medical Supplies)",
	// --- Bag ---
	"Bag of Bon Bons": "袋装糖果 (Bag of Bon Bons)",
	"Bag of Chocolate Kisses": "袋装巧克力吻糖 (Bag of Chocolate Kisses)",
	"Bag of Candy Kisses": "袋装糖果吻糖 (Bag of Candy Kisses)",
	"Bag of Chocolate Truffles": "袋装巧克力松露 (Bag of Chocolate Truffles)",
	"Bag of Sherbet": "袋装汽水粉糖 (Bag of Sherbet)",
	// --- Big ---
	"Big Box of Chocolate Bars": "大盒巧克力棒 (Big Box of Chocolate Bars)",
	"Big Al's Gun Shop": "大艾尔枪店 (Big Al's Gun Shop)",
	// --- Adhesive ---
	"Adhesive Plastic": "粘合塑料 (Adhesive Plastic)",
	// --- Aluminum ---
	"Aluminum Plate": "铝板 (Aluminum Plate)",
	// --- Anchor ---
	Anchor: "锚 (Anchor)",
	// --- Bank ---
	"Bank Statement": "银行对账单 (Bank Statement)",
	"Bank Check": "银行支票 (Bank Check)",
	// --- Blank ---
	"Blank Casino Chips": "空白赌场筹码 (Blank Casino Chips)",
	"Blank DVDs": "空白 DVD (Blank DVDs)",
	// --- Bleach ---
	Bleach: "漂白剂 (Bleach)",
	// --- Blowtorch ---
	Blowtorch: "喷灯 (Blowtorch)",
	// --- Bond ---
	"Bond Paper": "证券纸 (Bond Paper)",
	// --- Brass ---
	"Brass Ingot": "黄铜锭 (Brass Ingot)",
	// --- Bucket ---
	Bucket: "水桶 (Bucket)",
	"Bucket Hat": "渔夫帽 (Bucket Hat)",
	// --- C4 ---
	"C4 Explosive": "C4 炸药 (C4 Explosive)",
	// --- Candle ---
	Candle: "蜡烛 (Candle)",
	// --- Cardstock ---
	Cardstock: "卡纸 (Cardstock)",
	// --- Cell ---
	"Cell Phone": "手机 (Cell Phone)",
	// --- Cesium-137 ---
	"Cesium-137": "铯-137 (Cesium-137)",
	// --- Diesel ---
	Diesel: "柴油 (Diesel)",
	// --- Disposable ---
	"Disposable Mask": "一次性口罩 (Disposable Mask)",
	// --- Dog ---
	"Dog Treats": "狗粮 (Dog Treats)",
	"Dog Poop": "狗屎 (Dog Poop)",
	// --- Fire ---
	"Fire Extinguisher": "灭火器 (Fire Extinguisher)",
	"Fire Hydrant": "消防栓 (Fire Hydrant)",
	// --- Floor ---
	"Floor Cleaner": "地板清洁剂 (Floor Cleaner)",
	// --- Gasoline ---
	Gasoline: "汽油 (Gasoline)",
	// --- Glow ---
	"Glow Stick": "荧光棒 (Glow Stick)",
	// --- Glue ---
	Glue: "胶水 (Glue)",
	// --- Hard ---
	"Hard Drive": "硬盘 (Hard Drive)",
	// --- Hydrochloric ---
	"Hydrochloric Acid": "盐酸 (Hydrochloric Acid)",
	// --- Hydrogen ---
	"Hydrogen Tank": "氢气罐 (Hydrogen Tank)",
	// --- ID ---
	"ID Badge": "ID 徽章 (ID Badge)",
	// --- Inkwell ---
	Inkwell: "墨水池 (Inkwell)",
	// --- Insurance ---
	"Insurance Policy": "保险单 (Insurance Policy)",
	// --- Kerosene ---
	Kerosene: "煤油 (Kerosene)",
	// --- Lanyard ---
	Lanyard: "挂绳 (Lanyard)",
	// --- Lubricant ---
	Lubricant: "润滑剂 (Lubricant)",
	// --- Lye ---
	Lye: "碱液 (Lye)",
	// --- Magnesium ---
	"Magnesium Shavings": "镁屑 (Magnesium Shavings)",
	// --- Medical ---
	"Medical Bill": "医疗账单 (Medical Bill)",
	Medical: "医疗 (Medical)",
	// --- Methane ---
	"Methane Tank": "甲烷罐 (Methane Tank)",
	// --- Oxygen ---
	"Oxygen Tank": "氧气罐 (Oxygen Tank)",
	// --- PVC ---
	"PVC Cards": "PVC 卡 (PVC Cards)",
	// --- Paper ---
	"Paper Towels": "纸巾 (Paper Towels)",
	"Paper Weight": "镇纸 (Paper Weight)",
	// --- Picture ---
	"Picture Frame": "相框 (Picture Frame)",
	// --- Potassium ---
	"Potassium Nitrate": "硝酸钾 (Potassium Nitrate)",
	// --- Printing ---
	"Printing Paper": "打印纸 (Printing Paper)",
	// --- Razor ---
	"Razor Wire": "剃刀铁丝网 (Razor Wire)",
	// --- Rope ---
	Rope: "绳索 (Rope)",
	// --- Sand ---
	Sand: "沙子 (Sand)",
	// --- Shaped ---
	"Shaped Charge": "聚能装药 (Shaped Charge)",
	// --- Shaving ---
	"Shaving Foam": "剃须泡沫 (Shaving Foam)",
	// --- Spray ---
	"Spray Paint : 各色": "喷漆 : 黑/蓝/绿/橙/粉/紫/红/白 (Spray Paint : 各色)",
	// --- Stick ---
	"Stick of Dynamite": "炸药棒 (Stick of Dynamite)",
	// --- Syringe ---
	Syringe: "注射器 (Syringe)",
	// --- Thermite ---
	Thermite: "铝热剂 (Thermite)",
	// --- Toner ---
	Toner: "墨粉 (Toner)",
	// --- Zip ---
	"Zip Ties": "扎带 (Zip Ties)",
	"Zip Wallet": "拉链钱包 (Zip Wallet)",
	// --- African ---
	"African Violet": "非洲紫罗兰 (African Violet)",
	// --- Banana ---
	"Banana Orchid": "香蕉兰 (Banana Orchid)",
	// --- Bunch ---
	"Bunch of Black Roses": "黑玫瑰花束 (Bunch of Black Roses)",
	"Bunch of Carnations": "康乃馨花束 (Bunch of Carnations)",
	"Bunch of Flowers": "花束 (Bunch of Flowers)",
	// --- Ceibo ---
	"Ceibo Flower": "赛波花 (Ceibo Flower)",
	// --- Cherry ---
	"Cherry Blossom": "樱花 (Cherry Blossom)",
	// --- Crocus ---
	Crocus: "番红花 (Crocus)",
	// --- Daffodil ---
	Daffodil: "水仙 (Daffodil)",
	// --- Dahlia ---
	Dahlia: "大丽花 (Dahlia)",
	// --- Dozen ---
	"Dozen Roses": "一打玫瑰 (Dozen Roses)",
	"Dozen White Roses": "一打白玫瑰 (Dozen White Roses)",
	// --- Edelweiss ---
	Edelweiss: "雪绒花 (Edelweiss)",
	// --- Funeral ---
	"Funeral Wreath": "葬礼花圈 (Funeral Wreath)",
	// --- Heather ---
	Heather: "石楠花 (Heather)",
	// --- Orchid ---
	Orchid: "兰花 (Orchid)",
	// --- Peony ---
	Peony: "牡丹 (Peony)",
	// --- Single ---
	"Single Red Rose": "单枝红玫瑰 (Single Red Rose)",
	// --- White ---
	"White Lily": "白百合 (White Lily)",
	// --- Camel ---
	"Camel Plushie": "骆驼玩偶 (Camel Plushie)",
	// --- Chamois ---
	"Chamois Plushie": "岩羚羊玩偶 (Chamois Plushie)",
	// --- Jaguar ---
	"Jaguar Plushie": "美洲豹玩偶 (Jaguar Plushie)",
	// --- Kitten ---
	"Kitten Plushie": "小猫玩偶 (Kitten Plushie)",
	// --- Lion ---
	"Lion Plushie": "狮子玩偶 (Lion Plushie)",
	// --- Monkey ---
	"Monkey Plushie": "猴子玩偶 (Monkey Plushie)",
	// --- Nessie ---
	"Nessie Plushie": "尼斯湖水怪玩偶 (Nessie Plushie)",
	// --- Panda ---
	"Panda Plushie": "熊猫玩偶 (Panda Plushie)",
	// --- Red ---
	"Red Fox Plushie": "红狐玩偶 (Red Fox Plushie)",
	// --- Sheep ---
	"Sheep Plushie": "绵羊玩偶 (Sheep Plushie)",
	// --- Stingray ---
	"Stingray Plushie": "魔鬼鱼玩偶 (Stingray Plushie)",
	// --- Teddy ---
	"Teddy Bear Plushie": "泰迪熊玩偶 (Teddy Bear Plushie)",
	// --- Wolverine ---
	"Wolverine Plushie": "狼獾玩偶 (Wolverine Plushie)",
	// --- Basalt ---
	"Basalt Point": "玄武岩矛尖 (Basalt Point)",
	// --- Chalcedony ---
	"Chalcedony Point": "玉髓矛尖 (Chalcedony Point)",
	// --- Chert ---
	"Chert Point": "燧石矛尖 (Chert Point)",
	// --- Companion ---
	"Companion Script": "随从手稿 (Companion Script)",
	// --- Egyptian ---
	"Egyptian Amulet": "埃及护身符 (Egyptian Amulet)",
	// --- Florin ---
	"Florin Coin": "弗罗林金币 (Florin Coin)",
	// --- Ganesha ---
	"Ganesha Sculpture": "象神雕塑 (Ganesha Sculpture)",
	// --- Gold ---
	"Gold Noble Coin": "金诺布尔币 (Gold Noble Coin)",
	"Gold Ring": "金戒指 (Gold Ring)",
	"Gold Necklace": "金项链 (Gold Necklace)",
	"Gold Chain": "金链 (Gold Chain)",
	"Gold Watch": "金表 (Gold Watch)",
	"Gold Tooth": "金牙 (Gold Tooth)",
	"Gold Sneakers": "金色运动鞋 (Gold Sneakers)",
	// --- Leopard ---
	"Leopard Coin": "豹币 (Leopard Coin)",
	// --- Meteorite ---
	"Meteorite Fragment": "陨石碎片 (Meteorite Fragment)",
	// --- Obsidian ---
	"Obsidian Point": "黑曜石矛尖 (Obsidian Point)",
	// --- Patagonian ---
	"Patagonian Fossil": "巴塔哥尼亚化石 (Patagonian Fossil)",
	// --- Quartz ---
	"Quartz Point": "石英矛尖 (Quartz Point)",
	// --- Quartzite ---
	"Quartzite Point": "石英岩矛尖 (Quartzite Point)",
	// --- Senet ---
	"Senet Board": "塞尼特棋盘 (Senet Board)",
	// --- Shabti ---
	"Shabti Sculpture": "沙布提雕像 (Shabti Sculpture)",
	// --- Vairocana ---
	"Vairocana Buddha Sculpture": "毗卢遮那佛像 (Vairocana Buddha Sculpture)",
	// --- Plain ---
	"Plain Silver Ring": "素银戒指 (Plain Silver Ring)",
	// --- Sapphire ---
	"Sapphire Ring": "蓝宝石戒指 (Sapphire Ring)",
	// --- Diamond ---
	"Diamond Ring": "钻戒 (Diamond Ring)",
	// --- Cluster ---
	"Cluster Ring": "群镶戒指 (Cluster Ring)",
	// --- Cocktail ---
	"Cocktail Ring": "鸡尾酒戒指 (Cocktail Ring)",
	// --- Pearl ---
	"Pearl Necklace": "珍珠项链 (Pearl Necklace)",
	// --- Silver ---
	"Silver Necklace": "银项链 (Silver Necklace)",
	"Silver Coin": "银币 (Silver Coin)",
	// --- Statement ---
	"Statement Necklace": "宣言项链 (Statement Necklace)",
	// --- Plastic ---
	"Plastic Watch": "塑料手表 (Plastic Watch)",
	// --- Stainless ---
	"Stainless Steel Watch": "不锈钢手表 (Stainless Steel Watch)",
	// --- Crystal ---
	"Crystal Bracelet": "水晶手镯 (Crystal Bracelet)",
	// --- 各色 ---
	"各色 Easter Egg": "复活节彩蛋(黑/蓝/棕/金/绿/橙/粉/紫/红/白/黄)",
	// --- Boxing ---
	"Boxing Gloves": "拳击手套 (Boxing Gloves)",
	// --- Dumbbells ---
	Dumbbells: "哑铃 (Dumbbells)",
	// --- Gift ---
	"Gift Card": "礼品卡 (Gift Card)",
	// --- Parachute ---
	Parachute: "降落伞 (Parachute)",
	"Parachute Pants": "灯笼裤 (Parachute Pants)",
	// --- Skateboard ---
	Skateboard: "滑板 (Skateboard)",
	// --- Stink ---
	"Stink Bombs": "臭弹 (Stink Bombs)",
	// --- Dirty ---
	"Dirty Bomb": "脏弹 (Dirty Bomb)",
	// --- Toilet ---
	"Toilet Paper": "卫生纸 (Toilet Paper)",
	// --- Poison ---
	"Poison Mistletoe": "毒槲寄生 (Poison Mistletoe)",
	// --- Game ---
	"Game Console": "游戏机 (Game Console)",
	// --- Television ---
	Television: "电视 (Television)",
	// --- CD ---
	"CD Player": "CD 播放器 (CD Player)",
	// --- MP3 ---
	"MP3 Player": "MP3 播放器 (MP3 Player)",
	// --- Piggy ---
	"Piggy Bank": "存钱罐 (Piggy Bank)",
	// --- Lock ---
	"Lock Picking Kit": "开锁工具包 (Lock Picking Kit)",
	// --- Casino ---
	"Casino Pass": "赌场通行证 (Casino Pass)",
	"Casino Tokens": "赌场代币 (Casino Tokens)",
	"Casino Points": "赌场积分 (Casino Points)",
	"Casino Games": "赌场游戏 (Casino Games)",
	"Casino Self-Exclusion": "赌场自我排除 (Casino Self-Exclusion)",
	// --- Business ---
	"Business Class Ticket": "商务舱机票 (Business Class Ticket)",
	"Business Efficiency": "商业效率 (Business Efficiency)",
	"Business Management": "商业管理 (Business Management)",
	// --- Small ---
	"Small Explosive Device": "小型爆炸装置 (Small Explosive Device)",
	"Small First Aid Kits": "小型急救包 (Small First Aid Kits)",
	"Small Arms Cache": "小型武器箱 (Small Arms Cache)",
	// --- First ---
	"First Aid Kits": "急救包 (First Aid Kits)",
	// --- Billfold ---
	Billfold: "钱夹 (Billfold)",
	// --- Coin ---
	"Coin Purse": "零钱包 (Coin Purse)",
	// --- Old ---
	"Old Wallet": "旧钱包 (Old Wallet)",
	// --- Cardholder ---
	Cardholder: "卡包 (Cardholder)",
	// --- Clutch ---
	Clutch: "手拿包 (Clutch)",
	// --- Advent ---
	"Advent Calendar": "降临节日历 (Advent Calendar)",
	// --- Ash ---
	"Ash Tray": "烟灰缸 (Ash Tray)",
	// --- Beach ---
	"Beach Ball": "沙滩球 (Beach Ball)",
	// --- Binoculars ---
	Binoculars: "双筒望远镜 (Binoculars)",
	// --- Birth ---
	"Birth Certificate": "出生证明 (Birth Certificate)",
	// --- Boat ---
	"Boat Engine": "船用引擎 (Boat Engine)",
	// --- Bone ---
	Bone: "骨头 (Bone)",
	// --- Broom ---
	Broom: "扫帚 (Broom)",
	// --- Car ---
	"Car Keys": "车钥匙 (Car Keys)",
	// --- Casket ---
	Casket: "棺材 (Casket)",
	// --- Cauldron ---
	Cauldron: "大锅 (Cauldron)",
	// --- Chandelier ---
	Chandelier: "枝形吊灯 (Chandelier)",
	// --- Chopsticks ---
	Chopsticks: "筷子 (Chopsticks)",
	// --- Compass ---
	Compass: "指南针 (Compass)",
	// --- Concert ---
	"Concert Ticket": "演唱会门票 (Concert Ticket)",
	// --- Cough ---
	"Cough Syrup": "止咳糖浆 (Cough Syrup)",
	// --- Croquet ---
	"Croquet Set": "槌球套装 (Croquet Set)",
	// --- DVD ---
	"DVD Player": "DVD 播放器 (DVD Player)",
	// --- Dart ---
	"Dart Board": "飞镖靶 (Dart Board)",
	// --- Dentures ---
	Dentures: "假牙 (Dentures)",
	// --- Detergent ---
	Detergent: "洗涤剂 (Detergent)",
	// --- Diploma ---
	Diploma: "文凭 (Diploma)",
	// --- Driver's ---
	"Driver's License": "驾照 (Driver's License)",
	// --- Elephant ---
	"Elephant Statue": "大象雕像 (Elephant Statue)",
	// --- Family ---
	"Family Photo": "全家福 (Family Photo)",
	// --- Fertilizer ---
	Fertilizer: "肥料 (Fertilizer)",
	// --- Fishing ---
	"Fishing Rod": "钓鱼竿 (Fishing Rod)",
	// --- Garden ---
	"Garden Gnome": "花园地精 (Garden Gnome)",
	// --- Gingerbread ---
	"Gingerbread House": "姜饼屋 (Gingerbread House)",
	"Gingerbread Man": "姜饼人 (Gingerbread Man)",
	// --- Handcuffs ---
	Handcuffs: "手铐 (Handcuffs)",
	// --- Headphones ---
	Headphones: "耳机 (Headphones)",
	// --- Hockey ---
	"Hockey Stick": "曲棍球棒 (Hockey Stick)",
	// --- Horseshoe ---
	Horseshoe: "马蹄铁 (Horseshoe)",
	// --- Hunting ---
	"Hunting Trophy": "狩猎战利品 (Hunting Trophy)",
	// --- Insulin ---
	Insulin: "胰岛素 (Insulin)",
	// --- Jade ---
	"Jade Buddha": "玉佛 (Jade Buddha)",
	// --- Jigsaw ---
	"Jigsaw Puzzle": "拼图 (Jigsaw Puzzle)",
	// --- License ---
	"License Plate": "车牌 (License Plate)",
	// --- Lipstick ---
	Lipstick: "口红 (Lipstick)",
	// --- Loaf ---
	"Loaf of Bread": "面包 (Loaf of Bread)",
	// --- Magazine ---
	Magazine: "杂志 (Magazine)",
	// --- Maneki ---
	"Maneki Neko": "招财猫 (Maneki Neko)",
	// --- Massage ---
	"Massage Oil": "按摩油 (Massage Oil)",
	// --- Microwave ---
	Microwave: "微波炉 (Microwave)",
	// --- Mistletoe ---
	Mistletoe: "槲寄生 (Mistletoe)",
	// --- Mix ---
	"Mix CD": "混音 CD (Mix CD)",
	// --- Moldy ---
	"Moldy Pizza": "发霉披萨 (Moldy Pizza)",
	// --- Mop ---
	Mop: "拖把 (Mop)",
	// --- Mouthwash ---
	Mouthwash: "漱口水 (Mouthwash)",
	// --- Natural ---
	"Natural Pearls": "天然珍珠 (Natural Pearls)",
	// --- Notepad ---
	Notepad: "记事本 (Notepad)",
	// --- Pack ---
	"Pack of Cuban Cigars": "古巴雪茄 (Pack of Cuban Cigars)",
	"Pack of Music CDs": "音乐 CD 包 (Pack of Music CDs)",
	// --- Pangolin ---
	"Pangolin Scales": "穿山甲鳞片 (Pangolin Scales)",
	// --- Paperclips ---
	Paperclips: "回形针 (Paperclips)",
	// --- Parking ---
	"Parking Permit": "停车证 (Parking Permit)",
	// --- Passport ---
	Passport: "护照 (Passport)",
	// --- Pepper ---
	"Pepper Mill": "胡椒研磨器 (Pepper Mill)",
	// --- Perfume ---
	Perfume: "香水 (Perfume)",
	// --- Persian ---
	"Persian Rug": "波斯地毯 (Persian Rug)",
	// --- Phone ---
	"Phone Card": "电话卡 (Phone Card)",
	// --- Photographs ---
	Photographs: "照片 (Photographs)",
	// --- Plunger ---
	Plunger: "皮搋子 (Plunger)",
	// --- Polar ---
	"Polar Bear Toy": "北极熊玩具 (Polar Bear Toy)",
	// --- Prescription ---
	Prescription: "处方 (Prescription)",
	// --- Priceless ---
	"Priceless Painting": "无价名画 (Priceless Painting)",
	// --- Questionnaire ---
	Questionnaire: "问卷 (Questionnaire)",
	// --- Rotten ---
	"Rotten Apple": "烂苹果 (Rotten Apple)",
	"Rotten Eggs": "臭鸡蛋 (Rotten Eggs)",
	// --- Salt ---
	"Salt Shaker": "盐瓶 (Salt Shaker)",
	// --- Scrap ---
	"Scrap Metal": "废金属 (Scrap Metal)",
	// --- Sextant ---
	Sextant: "六分仪 (Sextant)",
	// --- Shampoo ---
	Shampoo: "洗发水 (Shampoo)",
	// --- Shark ---
	"Shark Fin": "鱼翅 (Shark Fin)",
	// --- Ship ---
	"Ship in a Bottle": "瓶中船 (Ship in a Bottle)",
	// --- Smelly ---
	"Smelly Cheese": "臭奶酪 (Smelly Cheese)",
	// --- Snowboard ---
	Snowboard: "滑雪板 (Snowboard)",
	// --- Snowman ---
	Snowman: "雪人 (Snowman)",
	// --- Soap ---
	"Soap on a Rope": "绳上肥皂 (Soap on a Rope)",
	// --- Soccer ---
	"Soccer Ball": "足球 (Soccer Ball)",
	// --- Sour ---
	"Sour Milk": "酸牛奶 (Sour Milk)",
	// --- Spoiled ---
	"Spoiled Fish": "腐坏的鱼 (Spoiled Fish)",
	// --- Spoon ---
	Spoon: "勺子 (Spoon)",
	// --- Stapler ---
	Stapler: "订书机 (Stapler)",
	// --- Sticky ---
	"Sticky Notes": "便利贴 (Sticky Notes)",
	// --- Subway ---
	"Subway Pass": "地铁卡 (Subway Pass)",
	// --- Sumo ---
	"Sumo Doll": "相扑娃娃 (Sumo Doll)",
	// --- Tailor's ---
	"Tailor's Dummy": "裁缝假人 (Tailor's Dummy)",
	// --- Tangerine ---
	Tangerine: "橘子 (Tangerine)",
	// --- Tin ---
	"Tin Can": "罐头 (Tin Can)",
	// --- Tire ---
	Tire: "轮胎 (Tire)",
	// --- Toothbrush ---
	Toothbrush: "牙刷 (Toothbrush)",
	// --- Toothpaste ---
	Toothpaste: "牙膏 (Toothpaste)",
	// --- Towel ---
	Towel: "毛巾 (Towel)",
	// --- Travel ---
	"Travel Mug": "旅行杯 (Travel Mug)",
	"Travel Visa": "旅行签证 (Travel Visa)",
	"Travel Item Capacities": "旅行物品容量 (Travel Item Capacities)",
	// --- Turtle ---
	"Turtle Shell": "龟壳 (Turtle Shell)",
	// --- Umbrella ---
	Umbrella: "雨伞 (Umbrella)",
	// --- Uncut ---
	"Uncut Diamonds": "未切割钻石 (Uncut Diamonds)",
	// --- Vitamins ---
	Vitamins: "维生素 (Vitamins)",
	// --- Whale ---
	"Whale Meat": "鲸肉 (Whale Meat)",
	// --- Witch's ---
	"Witch's Cauldron": "女巫大锅 (Witch's Cauldron)",
	"Witch's Hat": "女巫帽 (Witch's Hat)",
	// --- Yucca ---
	"Yucca Plant": "丝兰植物 (Yucca Plant)",
	// --- Baseball ---
	"Baseball Cap": "棒球帽 (Baseball Cap)",
	// --- Bowler ---
	"Bowler Hat": "圆顶礼帽 (Bowler Hat)",
	// --- Bunny ---
	"Bunny Ears": "兔耳 (Bunny Ears)",
	// --- Cat ---
	"Cat Ears": "猫耳 (Cat Ears)",
	// --- Fedora ---
	Fedora: "软呢帽 (Fedora)",
	// --- Santa ---
	"Santa Hat": "圣诞帽 (Santa Hat)",
	// --- Sun ---
	"Sun Hat": "太阳帽 (Sun Hat)",
	// --- Top ---
	"Top Hat": "礼帽 (Top Hat)",
	// --- Wedding ---
	"Wedding Veil": "新娘头纱 (Wedding Veil)",
	"Wedding Dress": "婚纱 (Wedding Dress)",
	// --- Bandana ---
	Bandana: "头巾 (Bandana)",
	// --- Ski ---
	"Ski Mask": "滑雪面罩 (Ski Mask)",
	// --- Ball ---
	"Ball Gown": "舞会礼服 (Ball Gown)",
	// --- Blazer ---
	Blazer: "西装外套 (Blazer)",
	// --- Blouse ---
	Blouse: "衬衫 (Blouse)",
	// --- Cardigan ---
	Cardigan: "开衫 (Cardigan)",
	// --- Crop ---
	"Crop Top": "露脐装 (Crop Top)",
	// --- Denim ---
	"Denim Jacket": "牛仔夹克 (Denim Jacket)",
	"Denim Vest": "牛仔背心 (Denim Vest)",
	"Denim Jeans": "牛仔裤 (Denim Jeans)",
	// --- Floral ---
	"Floral Dress": "碎花连衣裙 (Floral Dress)",
	// --- Fur ---
	"Fur Coat": "皮草大衣 (Fur Coat)",
	// --- Jacket ---
	Jacket: "夹克 (Jacket)",
	// --- Peplum ---
	"Peplum Top": "喇叭上衣 (Peplum Top)",
	// --- Polo ---
	"Polo Shirt": "POLO 衫 (Polo Shirt)",
	// --- Poncho ---
	Poncho: "斗篷 (Poncho)",
	// --- Puffer ---
	"Puffer Jacket": "羽绒服 (Puffer Jacket)",
	// --- Raincoat ---
	Raincoat: "雨衣 (Raincoat)",
	// --- Sweater ---
	Sweater: "毛衣 (Sweater)",
	// --- Trench ---
	"Trench Coat": "风衣 (Trench Coat)",
	// --- Turtleneck ---
	Turtleneck: "高领毛衣 (Turtleneck)",
	// --- Waistcoat ---
	Waistcoat: "马甲 (Waistcoat)",
	// --- Wetsuit ---
	Wetsuit: "潜水服 (Wetsuit)",
	// --- Bermuda ---
	"Bermuda Shorts": "百慕大短裤 (Bermuda Shorts)",
	// --- Bikini ---
	Bikini: "比基尼 (Bikini)",
	// --- Capri ---
	"Capri Pants": "七分裤 (Capri Pants)",
	// --- Chinos ---
	Chinos: "卡其裤 (Chinos)",
	// --- Gym ---
	"Gym Shorts": "运动短裤 (Gym Shorts)",
	"Gym Gains": "健身房收益 (Gym Gains)",
	// --- Mini ---
	"Mini Skirt": "迷你裙 (Mini Skirt)",
	// --- Pencil ---
	"Pencil Skirt": "铅笔裙 (Pencil Skirt)",
	// --- Ripped ---
	"Ripped Jeans": "破洞牛仔裤 (Ripped Jeans)",
	// --- Shorts ---
	Shorts: "短裤 (Shorts)",
	// --- Skirt ---
	Skirt: "短裙 (Skirt)",
	// --- Sweatpants ---
	Sweatpants: "运动裤 (Sweatpants)",
	// --- Tights ---
	Tights: "连裤袜 (Tights)",
	// --- Tutu ---
	Tutu: "芭蕾舞裙 (Tutu)",
	// --- Yoga ---
	"Yoga Pants": "瑜伽裤 (Yoga Pants)",
	// --- Ballet ---
	"Ballet Shoes": "芭蕾鞋 (Ballet Shoes)",
	// --- Black ---
	"Black Oxfords": "牛津鞋 (Black Oxfords)",
	// --- Derby ---
	"Derby Shoes": "德比鞋 (Derby Shoes)",
	// --- Flip ---
	"Flip Flops": "人字拖 (Flip Flops)",
	// --- Knee-high ---
	"Knee-high Boots": "过膝靴 (Knee-high Boots)",
	// --- Platform ---
	"Platform Shoes": "厚底鞋 (Platform Shoes)",
	// --- Sandals ---
	Sandals: "凉鞋 (Sandals)",
	// --- Slippers ---
	Slippers: "拖鞋 (Slippers)",
	// --- Trainers ---
	Trainers: "运动鞋 (Trainers)",
	// --- Bow ---
	"Bow Tie": "领结 (Bow Tie)",
	// --- Neck ---
	"Neck Tie": "领带 (Neck Tie)",
	// --- Choker ---
	Choker: "项圈 (Choker)",
	// --- Monocle ---
	Monocle: "单片眼镜 (Monocle)",
	// --- Sunglasses ---
	Sunglasses: "太阳镜 (Sunglasses)",
	// --- Eye ---
	"Eye Patch": "眼罩 (Eye Patch)",
	// --- Equipment ---
	Equipment: "装备 (Equipment)",
	// --- Useful ---
	"Useful Supplies": "实用补给 (Useful Supplies)",
	// --- General ---
	"General Shopping": "一般购物 (General Shopping)",
	// --- Dump ---
	Dump: "垃圾场 (Dump)",
	// --- Loot ---
	Loot: "战利品 (Loot)",
	// --- Rarity ---
	Rarity: "稀有度 (Rarity)",
	// --- Unknown ---
	"Unknown Rarity": "未知稀有度 (Unknown Rarity)",
	// --- Stealth ---
	Stealth: "隐身 (Stealth)",
	// --- Source ---
	Source: "来源 (Source)",
	// --- Consumables ---
	Consumables: "消耗品 (Consumables)",
	// --- Key ---
	"Key Details": "关键详情 (Key Details)",
	// --- Patch ---
	"Patch History": "更新历史 (Patch History)",
	// --- The ---
	"The Player Model": "玩家模型 (The Player Model)",
	"The Ring": "戒指 (The Ring)",
	"The Proposal": "求婚 (The Proposal)",
	"The Witness": "见证人 (The Witness)",
	"The Ceremony": "仪式 (The Ceremony)",
	// --- Possible ---
	"Possible Outcomes": "可能结果 (Possible Outcomes)",
	// --- Winning ---
	Winning: "胜利 (Winning)",
	// --- Not ---
	"Not winning": "失败 (Not winning)",
	// --- Interruptions ---
	Interruptions: "中断 (Interruptions)",
	// --- Group ---
	"Group Attacks": "群体攻击 (Group Attacks)",
	// --- Aggression ---
	Aggression: "侵略 (Aggression)",
	// --- Suppression ---
	Suppression: "压制 (Suppression)",
	// --- Attack ---
	"Attack Settings": "攻击设置 (Attack Settings)",
	// --- Loadout ---
	Loadout: "装载 (Loadout)",
	// --- Hospitalize ---
	Hospitalize: "打住院 (Hospitalize)",
	// --- Acquisition ---
	Acquisition: "收购 (Acquisition)",
	// --- Operation ---
	Operation: "运营 (Operation)",
	// --- Popularity ---
	Popularity: "人气 (Popularity)",
	// --- Efficiency ---
	Efficiency: "效率 (Efficiency)",
	// --- Employee ---
	"Employee Effectiveness": "员工效率 (Employee Effectiveness)",
	// --- Environment ---
	Environment: "环境 (Environment)",
	// --- Advertising ---
	Advertising: "广告 (Advertising)",
	// --- Application ---
	"Application Process": "申请流程 (Application Process)",
	// --- Special ---
	"Special Positions": "特殊职位 (Special Positions)",
	"Special Branches": "特殊分支 (Special Branches)",
	"Special Events": "特殊活动 (Special Events)",
	"Special Ammo": "特殊弹药 (Special Ammo)",
	// --- Company ---
	"Company Ranking": "公司排名 (Company Ranking)",
	"Company Size": "公司规模 (Company Size)",
	"Company Sell Back": "公司回购 (Company Sell Back)",
	// --- Job ---
	"Job Points": "工作点数 (Job Points)",
	"Job Types": "工作类型 (Job Types)",
	// --- Closing ---
	"Closing Hour": "打烊时间 (Closing Hour)",
	// --- Working ---
	"Working Stats": "工作属性 (Working Stats)",
	// --- Army ---
	Army: "军队 (Army)",
	// --- Grocer ---
	Grocer: "杂货商 (Grocer)",
	// --- Light-Weight ---
	"Light-Weight Gyms": "轻量级健身房 (Light-Weight Gyms)",
	// --- Middle-Weight ---
	"Middle-Weight Gyms": "中量级健身房 (Middle-Weight Gyms)",
	// --- Heavy-Weight ---
	"Heavy-Weight Gyms": "重量级健身房 (Heavy-Weight Gyms)",
	// --- Specialist ---
	"Specialist Gyms": "专科健身房 (Specialist Gyms)",
	// --- Training ---
	"Training Formulas": "训练公式 (Training Formulas)",
	// --- Happy ---
	"Happy Loss": "幸福度损失 (Happy Loss)",
	// --- Early ---
	"Early Discharge": "提前出院 (Early Discharge)",
	// --- Restrictions ---
	Restrictions: "限制 (Restrictions)",
	// --- In ---
	"In Jail": "入狱中 (In Jail)",
	// --- Busting ---
	Busting: "劫狱 (Busting)",
	// --- Self ---
	"Self bust": "自我越狱 (Self bust)",
	// --- Bail ---
	Bail: "保释 (Bail)",
	// --- Bust ---
	"Bust success rate": "劫狱成功率 (Bust success rate)",
	"Bust yourself out of jail": "自我越狱 (Bust yourself out of jail)",
	// --- Craps ---
	Craps: "掷骰子 (Craps)",
	// --- Starting ---
	"Starting A Faction": "创建帮派 (Starting A Faction)",
	// --- Faction ---
	"Faction Warfare": "帮派战争 (Faction Warfare)",
	"Faction Raiding": "帮派突袭 (Faction Raiding)",
	"Faction Destruction": "帮派毁灭 (Faction Destruction)",
	"Faction Communication": "帮派通讯 (Faction Communication)",
	"Faction Leader": "帮主 (Faction Leader)",
	// --- Ranked ---
	"Ranked Warring": "排名战争 (Ranked Warring)",
	// --- Organized ---
	"Organized Crime Panel": "有组织犯罪面板 (Organized Crime Panel)",
	// --- Upgrades ---
	"Upgrades Panel": "升级面板 (Upgrades Panel)",
	// --- Capacity ---
	Capacity: "容量 (Capacity)",
	// --- Pay ---
	"Pay Day": "发薪日 (Pay Day)",
	// --- Applications ---
	Applications: "申请 (Applications)",
	// --- Positions ---
	Positions: "职位 (Positions)",
	// --- Challenges ---
	Challenges: "挑战 (Challenges)",
	// --- Benefits ---
	Benefits: "好处 (Benefits)",
	// --- Getting ---
	"Getting Started": "入门 (Getting Started)",
	// --- Buying ---
	"Buying and Selling": "买卖 (Buying and Selling)",
	// --- Summary ---
	"Summary Table": "汇总表 (Summary Table)",
	// --- Official ---
	"Official Races": "官方赛事 (Official Races)",
	// --- Classes ---
	Classes: "级别 (Classes)",
	// --- Racing ---
	"Racing Skill": "赛车技能 (Racing Skill)",
	"Racing Points": "赛车积分 (Racing Points)",
	// --- Track ---
	"Track List": "赛道列表 (Track List)",
	// --- Naming ---
	"Naming a Car": "车辆命名 (Naming a Car)",
	// --- Ultimate ---
	"Ultimate Racing Tournament": "终极赛车锦标赛 (Ultimate Racing Tournament)",
	// --- Shopping ---
	"Shopping Areas": "购物区 (Shopping Areas)",
	// --- Destinations ---
	Destinations: "目的地 (Destinations)",
	// --- Carrying ---
	"Carrying Items": "携带物品 (Carrying Items)",
	// --- Tourism ---
	"Tourism Day": "旅游日 (Tourism Day)",
	// --- Contraband ---
	Contraband: "违禁品 (Contraband)",
	// --- Logistics ---
	"Logistics Management": "物流管理 (Logistics Management)",
	// --- Cruise ---
	"Cruise Line Agency": "邮轮公司 (Cruise Line Agency)",
	// --- Lease ---
	Lease: "租赁 (Lease)",
	// --- Owning ---
	Owning: "拥有 (Owning)",
	// --- Moving ---
	Moving: "搬家 (Moving)",
	// --- Upkeep ---
	Upkeep: "维护费 (Upkeep)",
	// --- Standard ---
	"Standard Houses": "标准房屋 (Standard Houses)",
	// --- Fully ---
	"Fully Upgraded Houses": "完全升级房屋 (Fully Upgraded Houses)",
	// --- House ---
	"House Upgrades": "房屋升级 (House Upgrades)",
	// --- Facilities ---
	"Facilities and Modification": "设施与改造 (Facilities and Modification)",
	// --- Unique ---
	"Unique Properties": "独特房产 (Unique Properties)",
	"Unique Outcomes": "独特结果 (Unique Outcomes)",
	// --- Staff ---
	"Staff Cost": "员工成本 (Staff Cost)",
	// --- Obtaining ---
	"Obtaining Energy": "获取能量 (Obtaining Energy)",
	// --- Using ---
	"Using Energy": "使用能量 (Using Energy)",
	// --- Losing ---
	"Losing Energy": "失去能量 (Losing Energy)",
	// --- Increasing ---
	"Increasing Your Maximum Nerve Bar": "提高勇气上限 (Increasing Your Maximum Nerve Bar)",
	// --- Base ---
	"Base Happy": "基础幸福度 (Base Happy)",
	// --- Candies ---
	Candies: "糖果 (Candies)",
	// --- Free ---
	"Free Merit Reset": "免费功勋点重置 (Free Merit Reset)",
	// --- Fighting ---
	"Fighting Stats": "战斗属性 (Fighting Stats)",
	// --- Weapons ---
	"Weapons Upgrades": "武器升级 (Weapons Upgrades)",
	// --- Miscellaneous ---
	"Miscellaneous Upgrades": "杂项升级 (Miscellaneous Upgrades)",
	// --- Listing ---
	"Listing and Fees": "挂单与费用 (Listing and Fees)",
	// --- Categories ---
	Categories: "分类 (Categories)",
	// --- Awareness ---
	Awareness: "意识 (Awareness)",
	// --- Fitness ---
	"Fitness Center": "健身中心 (Fitness Center)",
	// --- Hair ---
	"Hair Salon": "美发沙龙 (Hair Salon)",
	// --- Advanced ---
	"Advanced Firewall": "高级防火墙 (Advanced Firewall)",
	// --- Clothing ---
	"Clothing Cache": "服装箱 (Clothing Cache)",
	// --- Feathery ---
	"Feathery Hotel Coupon": "羽毛酒店券 (Feathery Hotel Coupon)",
	// --- Lawyer ---
	"Lawyer Business Card": "律师名片 (Lawyer Business Card)",
	// --- Erotic ---
	"Erotic DVD": "色情 DVD (Erotic DVD)",
	// --- Illicit ---
	"Illicit Services": "非法服务 (Illicit Services)",
	// --- Disposal ---
	Disposal: "非法处理 (Disposal)",
	// --- Cracking ---
	Cracking: "破解 (Cracking)",
	// --- Illegal ---
	"Illegal production": "非法生产 (Illegal production)",
	// --- Jail ---
	"Jail time": "入狱时间 (Jail time)",
	// --- Loss ---
	"Loss of Life": "生命损失 (Loss of Life)",
	// --- Hospital ---
	"Hospital time": "住院时间 (Hospital time)",
	// --- Item ---
	"Item or money loss": "物品或金钱损失 (Item or money loss)",
	// --- Crime ---
	"Crime Chains and Progression": "犯罪连击与进度 (Crime Chains and Progression)",
	// --- Search ---
	"Search For Cash": "搜索现金 (Search For Cash)",
	"Search the Trash": "搜索垃圾 (Search the Trash)",
	"Search the Subway": "搜索地铁 (Search the Subway)",
	"Search the Junkyard": "搜索垃圾场 (Search the Junkyard)",
	"Search the Beach": "搜索海滩 (Search the Beach)",
	"Search the Cemetery": "搜索墓地 (Search the Cemetery)",
	// --- Sell ---
	"Sell counterfeit DVDs": "出售盗版 DVD (Sell counterfeit DVDs)",
	// --- East ---
	"East Side": "东区 (East Side)",
	// --- West ---
	"West Side": "西区 (West Side)",
	// --- North ---
	"North Side": "北区 (North Side)",
	// --- Residental ---
	"Residental District": "住宅区 (Residental District)",
	// --- Red-Light ---
	"Red-Light District": "红灯区 (Red-Light District)",
	// --- Financial ---
	"Financial District": "金融区 (Financial District)",
	// --- City ---
	"City Centre": "市中心 (City Centre)",
	// --- Sally's ---
	"Sally's Sweet Shop": "莎莉糖果店 (Sally's Sweet Shop)",
	// --- Bits ---
	"Bits 'n' Bobs": "Bits 'n' Bobs",
	// --- TC ---
	"TC Clothing": "TC 服装店 (TC Clothing)",
	// --- Cyber ---
	"Cyber Force": "网军商店 (Cyber Force)",
	// --- Hacking ---
	"Hacking Crimes": "黑客犯罪 (Hacking Crimes)",
	// --- Transport ---
	"Transport Drugs": "运输药品 (Transport Drugs)",
	// --- Bails ---
	Bails: "保释 (Bails)",
	// --- Sports ---
	"Sports Shop": "体育商店 (Sports Shop)",
	// --- Ammunition ---
	Ammunition: "弹药 (Ammunition)",
	// --- Viruses ---
	Viruses: "病毒 (Viruses)",
	// --- Book ---
	"Book of Carols": "颂歌之书 (Book of Carols)",

	// ========== Popup / Options 内部硬编码字符串 ==========
	FULL: "已满 (FULL)",
	"Resets in": "恢复于 (Resets in)",
	"Landing in": "落地于 (Landing in)",
	"Full in": "将于 (Full in)",
	"Cooldown over in": "冷却将于 (Cooldown over in)",
	"No bar data available.": "暂无状态条数据。 (No bar data available.)",
	Cooldowns: "冷却中",
	"No cooldowns active.": "暂无冷却。 (No cooldowns active.)",
	Overview: "概览",
	"No stakeouts added.": "未添加监视目标。 (No stakeouts added.)",
	"No faction stakeouts.": "暂无帮派监视。 (No faction stakeouts.)",
	"Add Stakeout": "添加监视 (Add Stakeout)",
	"Remove Stakeout": "移除监视 (Remove Stakeout)",
	"Last seen:": "最后出现: (Last seen:)",
	"Notes:": "备注: (Notes:)",
	"Note:": "备注: (Note:)",
	"Chain:": "连击: (Chain:)",
	"Buy price:": "买入价: (Buy price:)",
	"Sell price:": "卖出价: (Sell price:)",
	"Market price:": "市场价: (Market price:)",
	"Stock price:": "股价: (Stock price:)",
	"Total cost:": "总费用: (Total cost:)",
	"Total value:": "总价值: (Total value:)",
	"Net worth:": "净资产: (Net worth:)",
	"Stock net worth:": "股票净资产: (Stock net worth:)",
	"Item net worth:": "物品净资产: (Item net worth:)",
	"Bank net worth:": "银行净资产: (Bank net worth:)",
	"Cash net worth:": "现金净资产: (Cash net worth:)",
	"Total net worth:": "总净资产: (Total net worth:)",
	"Level:": "等级: (Level:)",
	"Age:": "年龄: (Age:)",
	"Status:": "状态: (Status:)",
	"Last action:": "最后动作: (Last action:)",
	"User ID:": "用户 ID: (User ID:)",
	"Username:": "用户名: (Username:)",
	"Faction:": "帮派: (Faction:)",
	"Company:": "公司: (Company:)",
	"Profile:": "个人资料: (Profile:)",
	"Donator:": "捐赠者: (Donator:)",
	"Active:": "激活: (Active:)",
	"Inactive:": "未激活: (Inactive:)",
	"Online:": "在线: (Online:)",
	"Offline:": "离线: (Offline:)",
	"Online now": "当前在线 (Online now)",
	"Online (Idle)": "在线(挂机)",
	"Online (Active)": "在线(活跃)",
	"last seen": "最后出现 (last seen)",
	ago: "前 (ago)",
	"ID:": "ID:",
	"XP:": "经验: (XP:)",
	"EXP:": "经验: (EXP:)",
	"Time:": "时间: (Time:)",
	"Date:": "日期: (Date:)",
	"Price:": "价格: (Price:)",
	"Quantity:": "数量: (Quantity:)",
	"Amount:": "数量: (Amount:)",
	"Total:": "总计: (Total:)",
	"Bonus:": "加成: (Bonus:)",
	"Reward:": "奖励: (Reward:)",
	"Cost:": "费用: (Cost:)",
	"Fees:": "手续费: (Fees:)",
	"Fee:": "手续费: (Fee:)",
	"Duration:": "持续时间: (Duration:)",
	"Cooldown:": "冷却: (Cooldown:)",
	"Time left:": "剩余时间: (Time left:)",
	"Time remaining:": "剩余时间: (Time remaining:)",
	"Ready in:": "就绪于: (Ready in:)",
	"Ready at:": "就绪于: (Ready at:)",
	Ready: "就绪 (Ready)",
	"Open in new tab": "在新标签页打开 (Open in new tab)",
	"Open Torn": "打开 Torn (Open Torn)",
	"Open Wiki": "打开 Wiki (Open Wiki)",
	"Refresh data": "刷新数据 (Refresh data)",
	"Refresh data.": "刷新数据。 (Refresh data.)",
	"Refresh now": "立即刷新 (Refresh now)",
	"Last updated:": "最后更新: (Last updated:)",
	"Last updated": "最后更新 (Last updated)",
	"Updated:": "更新于: (Updated:)",
	"Last sync:": "最后同步: (Last sync:)",
	"Never updated": "从未更新 (Never updated)",
	"Auto-refresh": "自动刷新 (Auto-refresh)",
	"Auto-update": "自动更新 (Auto-update)",
	"Manual refresh": "手动刷新 (Manual refresh)",
	"Force refresh": "强制刷新 (Force refresh)",
	"Force reload": "强制重载 (Force reload)",
	Database: "数据库 (Database)",
	"Database size": "数据库大小 (Database size)",
	"Database version": "数据库版本 (Database version)",
	"Storage used": "已用存储 (Storage used)",
	"Storage limit": "存储上限 (Storage limit)",
	"Cache cleared.": "已清空缓存。 (Cache cleared.)",
	"Reinitialized timers": "已重置定时器 (Reinitialized timers)",
	"Maintenance mode": "维护模式 (Maintenance mode)",
	"Developer mode": "开发者模式 (Developer mode)",
	"Debug mode": "调试模式 (Debug mode)",
	"Verbose mode": "详细模式 (Verbose mode)",
	"Silent mode": "静默模式 (Silent mode)",
	"Test mode": "测试模式 (Test mode)",
	Experimental: "实验性",
	Beta: "测试版",
	Alpha: "内测版",
	Stable: "稳定版",
	Production: "生产",
	Development: "开发",
	Section: "标签",
	Group: "分组",
	Subpage: "子页面",
	"Top bar": "顶部栏 (Top bar)",
	"Bottom bar": "底部栏 (Bottom bar)",
	Header: "头部 (Header)",
	Footer: "底部 (Footer)",
	"Main content": "主内容 (Main content)",
	"Sidebar items": "侧边栏项目 (Sidebar items)",
	"Custom links": "自定义链接 (Custom links)",
	"Add link": "添加链接 (Add link)",
	"Remove link": "移除链接 (Remove link)",
	"Link name": "链接名称 (Link name)",
	"Link URL": "链接 URL (Link URL)",
	"Link target": "链接目标 (Link target)",
	_blank: "_blank(新窗口)",
	_self: "_self(当前窗口)",
	"Drag to reorder": "拖拽以重新排序 (Drag to reorder)",
	"Reset all": "全部重置 (Reset all)",
	"Reset section": "重置当前分组 (Reset section)",
	"Reset group": "重置当前组 (Reset group)",
	"Reset preferences": "重置偏好设置 (Reset preferences)",
	"Import data": "导入数据 (Import data)",
	"Export data": "导出数据 (Export data)",
	"Import from file": "从文件导入 (Import from file)",
	"Export to file": "导出到文件 (Export to file)",
	"Import from clipboard": "从剪贴板导入 (Import from clipboard)",
	"Export to clipboard": "导出到剪贴板 (Export to clipboard)",
	"Imported successfully": "导入成功 (Imported successfully)",
	"Exported successfully": "导出成功 (Exported successfully)",
	"Import failed": "导入失败 (Import failed)",
	"Export failed": "导出失败 (Export failed)",
	"Import error": "导入错误 (Import error)",
	"Export error": "导出错误 (Export error)",
	"Invalid data": "数据无效 (Invalid data)",
	"Invalid data.": "数据无效。 (Invalid data.)",
	"Corrupted data": "数据已损坏 (Corrupted data)",
	"Corrupted data.": "数据已损坏。 (Corrupted data.)",
	"Data is too large": "数据过大 (Data is too large)",
	"Data is too large.": "数据过大。 (Data is too large.)",
	"Please try again": "请重试 (Please try again)",
	"Please try again.": "请重试。 (Please try again.)",
	"Operation successful": "操作成功 (Operation successful)",
	"Operation successful.": "操作成功。 (Operation successful.)",
	"Operation failed": "操作失败 (Operation failed)",
	"Operation failed.": "操作失败。 (Operation failed.)",
	"Are you sure?": "确认操作? (Are you sure?)",
	"Are you sure you want to do this?": "确认要进行此操作? (Are you sure you want to do this?)",
	"This action cannot be undone": "此操作无法撤销 (This action cannot be undone)",
	"This action cannot be undone.": "此操作无法撤销。 (This action cannot be undone.)",
	"Confirm action": "确认操作 (Confirm action)",
	"Cancel action": "取消操作 (Cancel action)",
	Proceed: "继续 (Proceed)",
	"Proceed anyway": "仍然继续 (Proceed anyway)",
	Confirmation: "确认 (Confirmation)",
	"Confirmation Required": "需要确认 (Confirmation Required)",
	"Confirm Action": "确认操作 (Confirm Action)",
	"Are you absolutely sure?": "你完全确定吗? (Are you absolutely sure?)",
	"Type DELETE to confirm": "输入 DELETE 以确认 (Type DELETE to confirm)",
	"Delete confirmation": "删除确认 (Delete confirmation)",
	"Confirm deletion": "确认删除 (Confirm deletion)",
	"Confirm purchase": "确认购买 (Confirm purchase)",
	"Confirm sale": "确认出售 (Confirm sale)",
	"Confirm trade": "确认交易 (Confirm trade)",
	"Confirm transfer": "确认转账 (Confirm transfer)",
	"Confirm attack": "确认攻击 (Confirm attack)",
	"Confirm bust": "确认劫狱 (Confirm bust)",
	"Confirm bail": "确认保释 (Confirm bail)",
	"Confirm join": "确认加入 (Confirm join)",
	"Confirm leave": "确认离开 (Confirm leave)",
	"Confirm donation": "确认捐赠 (Confirm donation)",
	"Confirm deposit": "确认存入 (Confirm deposit)",
	"Confirm withdrawal": "确认提取 (Confirm withdrawal)",
	"Confirm send": "确认发送 (Confirm send)",
	"Confirm accept": "确认接受 (Confirm accept)",
	"Confirm decline": "确认拒绝 (Confirm decline)",
	"Required field": "必填项 (Required field)",
	Required: "必填",
	Optional: "可选",
	"Field is required": "字段必填 (Field is required)",
	"Field is required.": "字段必填。 (Field is required.)",
	"Invalid input": "输入无效 (Invalid input)",
	"Invalid input.": "输入无效。 (Invalid input.)",
	"Please enter a valid value": "请输入有效值 (Please enter a valid value)",
	"Please enter a valid value.": "请输入有效值。 (Please enter a valid value.)",
	"Value must be positive": "值必须为正 (Value must be positive)",
	"Value must be positive.": "值必须为正。 (Value must be positive.)",
	"Value must be a number": "值必须为数字 (Value must be a number)",
	"Value must be a number.": "值必须为数字。 (Value must be a number.)",
	"Value too large": "值过大 (Value too large)",
	"Value too small": "值过小 (Value too small)",
	"Out of range": "超出范围 (Out of range)",
	"Out of range.": "超出范围。 (Out of range.)",
	"Total items": "总物品数 (Total items)",
	"Total income": "总收入 (Total income)",
	"Total spent": "总支出 (Total spent)",
	"Total earned": "总收入 (Total earned)",
	"Total kills": "总击杀 (Total kills)",
	"Total deaths": "总死亡 (Total deaths)",
	"Total wins": "总胜利 (Total wins)",
	"Total losses": "总失败 (Total losses)",
	"Win rate": "胜率 (Win rate)",
	"Loss rate": "败率 (Loss rate)",
	"Kill ratio": "击杀比 (Kill ratio)",
	"K/D ratio": "K/D 比 (K/D ratio)",
	Average: "平均",
	"Average damage": "平均伤害 (Average damage)",
	"Average cost": "平均费用 (Average cost)",
	"Average price": "平均价格 (Average price)",
	"Average value": "平均值 (Average value)",
	Maximum: "最大",
	"Maximum damage": "最大伤害 (Maximum damage)",
	"Maximum value": "最大值 (Maximum value)",
	Minimum: "最小",
	"Minimum damage": "最小伤害 (Minimum damage)",
	"Minimum value": "最小值 (Minimum value)",
	Median: "中位数",
	Mode: "众数",
	Sum: "总和",
	Range: "范围",
	Percentile: "百分位 (Percentile)",
	"Top 1%": "前 1%",
	"Top 5%": "前 5%",
	"Top 10%": "前 10%",
	"Top 25%": "前 25%",
	"Top 50%": "前 50%",
	"Bottom 50%": "后 50%",
	"Time zone": "时区 (Time zone)",
	"Local time": "本地时间 (Local time)",
	"Server time": "服务器时间 (Server time)",
	TCT: "Torn 城时间 (TCT)",
	"TCT time": "Torn 城时间 (TCT time)",
	"Time until": "倒计时 (Time until)",
	"Time since": "已过时间 (Time since)",
	"Time elapsed": "已用时间 (Time elapsed)",
	"Remaining time": "剩余时间 (Remaining time)",
	"Days left": "剩余天数 (Days left)",
	"Hours left": "剩余小时 (Hours left)",
	"Minutes left": "剩余分钟 (Minutes left)",
	"Seconds left": "剩余秒数 (Seconds left)",
	"View profile": "查看资料 (View profile)",
	"View faction": "查看帮派 (View faction)",
	"View company": "查看公司 (View company)",
	"View on market": "在市场上查看 (View on market)",
	"View in wiki": "在 Wiki 查看 (View in wiki)",
	"More details": "更多详情 (More details)",
	"Less details": "收起详情 (Less details)",
	"Full details": "完整详情 (Full details)",
	"Brief details": "简要详情 (Brief details)",
	"Quick view": "快速查看 (Quick view)",
	"Detailed view": "详细查看 (Detailed view)",
	"List view": "列表视图 (List view)",
	"Grid view": "网格视图 (Grid view)",
	"Table view": "表格视图 (Table view)",
	"Compact view": "紧凑视图 (Compact view)",
	"Expand all": "全部展开 (Expand all)",
	"Collapse all": "全部折叠 (Collapse all)",
	"Pin to top": "置顶 (Pin to top)",
	"Pin to bottom": "置底 (Pin to bottom)",
	Unpin: "取消固定 (Unpin)",
	"Mark as read": "标记为已读 (Mark as read)",
	"Mark as unread": "标记为未读 (Mark as unread)",
	"Mark all as read": "全部标记为已读 (Mark all as read)",
	"Mark all as unread": "全部标记为未读 (Mark all as unread)",
	"Delete selected": "删除选中 (Delete selected)",
	"Remove selected": "移除选中 (Remove selected)",
	"Export selected": "导出选中 (Export selected)",
	"Import selected": "导入选中 (Import selected)",
};
