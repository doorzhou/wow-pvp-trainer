# 魔兽世界 PvP 判断训练器

**<https://doorzhou.github.io/wow-pvp-trainer/>**

对应补丁 **12.0.7（Midnight 赛季一）**。

这不是连招表。练的是开火之前的那一个判断——该不该开、打谁、他手上还剩几张牌。
每个训练器都有情境选择题：给一个具体局面（血量、什么牌还在、你的冷却状态），你选技能和目标，选完告诉你为什么。

---

## 现有内容

| 训练器 | 题量 | 内容 |
|---|---|---|
| [敏锐贼](https://doorzhou.github.io/wow-pvp-trainer/subtlety-rogue.html) | 56 | 骨架 · 手法 · 13 职业对阵 · 天赋 · 训练 · 速查 |
| [狂徒贼](https://doorzhou.github.io/wow-pvp-trainer/outlaw-rogue.html) | 51 | 同上 |
| [冰法](https://doorzhou.github.io/wow-pvp-trainer/frost-mage.html) | 51 | 同上 |
| [戒律牧](https://doorzhou.github.io/wow-pvp-trainer/discipline-priest.html) | 51 | 同上 |
| [贼 + 戒律牧 2v2](https://doorzhou.github.io/wow-pvp-trainer/rogue-priest-2v2.html) | 40 | 双视角 · 击杀链 · 防守链 · 分对局 |
| [Thug Cleave 3v3](https://doorzhou.github.io/wow-pvp-trainer/thug-cleave-3v3.html) | 51 | 三视角 · 角色分配器 · 控制链 · 递减表 |

合计 **300 道情境判断题**。

**目标是 13 职业 40 专精全覆盖**，每个都带天赋与装备属性建议。
首页的职业矩阵里，灰色的是还没开工的——框架已就位，内容在往里填。
每张卡下面的六个小格是完成度：骨架 / 手法 / 对阵 / 天赋 / 装备 / 训练。

---

## 哪些是实测，哪些是编者推导

这条线必须划在明处。**混在一起讲，等于让读者替作者承担猜测。**

**有出处的**
- 技能中文名、图标、技能说明 —— Wowhead 官方数据接口，逐个核过
- 天赋使用率 —— Murlok.io 的 top50 实测分布
- 版本改动 —— 官方补丁说明
- 梯队排名 —— Icy Veins 12.0.7 PvP 梯队表
- 装备机制（货币、催化器、PvP 装等缩放）—— Icy Veins 配装指南

**编者推导**
- 各种判断框架（开火四条件、对局四问、三个时钟）
- 组合训练器里的控制链结构与角色模型——公开攻略几乎没有组合层面的战术展开，这部分基本是推的
- 情境题的设计与解释
- 转火 / 撤退 / 留牌这类取舍

**刻意不写具体秒数和装等数字。** 数值每次平衡都在动，写死了下个补丁就是错的，写的是相对关系。

---

## 技术

纯静态站，无后端、无埋点、无 Cookie 追踪。训练记录只写在浏览器 localStorage。

- **正文在 HTML 里**，不靠 JS 注入——百度对 JS 渲染支持很差，而站点的目的之一是被搜到
- **题库按需加载**，点开「判断训练」才下那 50KB
- **样式与引擎全站共享**，缓存一次管所有页

改内容不要直接改 `*.html` 和 `data/`，那些是构建产物。
源文件在 `_build/`，跑 `cd _build && node all.js`。

- [架构说明](_build/架构说明.md) —— 为什么是现在这个形态
- [新增专精](_build/新增专精.md) —— 加第 7 个专精的完整步骤

---

## 纠错与贡献

内容有错、有补充、或者想认领某个专精的整理，到 [Issues](https://github.com/doorzhou/wow-pvp-trainer/issues) 提。
**指出硬错误（技能机制写错、数据引用错）优先处理。**

---

## 免责

非官方粉丝内容，与 Blizzard Entertainment 无隶属关系，未经其认可或赞助。
《魔兽世界》及相关标识、技能图标为暴雪娱乐的商标或注册商标，按《粉丝内容使用条款》在非商业前提下使用。
若权利方认为存在不当使用，请通过 Issues 告知，会立即移除。
