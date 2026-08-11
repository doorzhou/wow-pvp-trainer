# WOW打架营地

**魔兽世界竞技场 PvP 判断训练**

**<https://doorzhou.github.io/wow-pvp-trainer/>**

对应补丁 **12.0.7（Midnight 赛季一）**。

练的是开火之前的判断：该不该开、打谁、他手上还剩几张牌。
每个训练器含情境选择题——给定局面（目标血量、剩余的牌、你的冷却状态），选技能与目标，选完给出判断依据。

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

**目标覆盖 13 职业 40 专精 + 33 组竞技场组合**，每个含天赋与装备属性。
首页矩阵中灰色为尚未开工的条目；卡片下方六格为完成度：骨架 / 手法 / 对阵 / 天赋 / 装备 / 训练。

竞技场组合按 3v3 / 2v2 分段：3v3 是有公认命名的固定组合（RMP、Thug Cleave、Jungle、RLS…共 19 组），
2v2 按「输出 + 治疗」配对（14 组）。点职业图标可筛出该职业能打的组合，**多选取交集**——
选贼 + 牧就是「我们俩能带谁」。清单来源：Icy Veins 各专精 Best Arena Compositions、wowmeta 组合梯队。

---

## 内容来源

**引自公开数据**
- 技能中文名、图标、技能说明 —— Wowhead 官方数据接口
- 天赋使用率 —— Murlok.io top50 实测分布
- 版本改动 —— 官方补丁说明
- 梯队排名 —— Icy Veins 12.0.7 PvP 梯队表
- 装备机制（货币、催化器、PvP 装等缩放）—— Icy Veins 配装指南
- 竞技场组合清单与命名 —— Icy Veins 各专精 Best Arena Compositions、wowmeta

**编者推导**
- 各种判断框架（开火四条件、对局四问、三个时钟）
- 组合训练器的控制链结构与角色模型（公开攻略少有组合层面的战术展开）
- 情境题的设计与解释
- 转火 / 撤退 / 留牌等取舍

不收录具体冷却秒数与装等数值——每次平衡改动即失效，内容按相对关系描述。

---

## 技术

纯静态站，无后端、无埋点、无 Cookie 追踪。训练记录只写在浏览器 localStorage。

- **正文内联在 HTML 中**，不依赖 JS 注入
- **题库按需加载**，点开「判断训练」才请求
- **样式与引擎全站共享**，带内容哈希，缓存一次管所有页

`*.html` 与 `data/` 是构建产物，不要直接改。源文件在 `_build/`，跑 `cd _build && node all.js`。

- [架构说明](_build/架构说明.md)
- [新增专精](_build/新增专精.md) —— 完整步骤与文案调性

---

## 勘误与贡献

勘误、补充，或认领某个专精的整理，请提交至 [Issues](https://github.com/doorzhou/wow-pvp-trainer/issues)。
**技能机制与数据引用类错误优先处理。**

---

## 免责

非官方粉丝内容，与 Blizzard Entertainment 无隶属关系，未经其认可或赞助。
《魔兽世界》及相关标识、技能图标为暴雪娱乐的商标或注册商标，按《粉丝内容使用条款》在非商业前提下使用。
若权利方认为存在不当使用，请通过 Issues 告知，将立即移除。
