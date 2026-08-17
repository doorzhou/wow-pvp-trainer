# WOW打架营地

<!-- AUTO:patch -->
**魔兽世界竞技场 PvP 判断训练** · 对应补丁 12.1（Midnight 赛季一）
<!-- /AUTO:patch -->

**站点：<https://doorzhou.github.io/wow-pvp-trainer/>**

练的是开火之前的判断：该不该开、打谁、他手上还剩几张牌。
每个训练器含情境选择题——给定局面（目标血量、剩余的牌、你的冷却状态），选技能与目标，选完给出判断依据。

---

## 现在有什么

<!-- AUTO:now -->
| 训练器 | 类型 | 题量 | 六轴完成度 |
|---|---|---:|---|
| [武器战士](https://doorzhou.github.io/wow-pvp-trainer/arms-warrior.html) | 输出 | 51 | ●●●●●● |
| [惩戒骑](https://doorzhou.github.io/wow-pvp-trainer/ret-paladin.html) | 输出 | 51 | ●●●●●● |
| [射击猎人](https://doorzhou.github.io/wow-pvp-trainer/mm-hunter.html) | 输出 | 51 | ●●●●●● |
| [狂徒贼](https://doorzhou.github.io/wow-pvp-trainer/outlaw-rogue.html) | 输出 | 51 | ●●●●●● |
| [敏锐贼](https://doorzhou.github.io/wow-pvp-trainer/subtlety-rogue.html) | 输出 | 56 | ●●●●●● |
| [戒律牧](https://doorzhou.github.io/wow-pvp-trainer/discipline-priest.html) | 治疗 | 51 | ●●●●●● |
| [暗影牧师](https://doorzhou.github.io/wow-pvp-trainer/shadow-priest.html) | 输出 | 51 | ●●●●●● |
| [邪恶死骑](https://doorzhou.github.io/wow-pvp-trainer/unholy-dk.html) | 输出 | 51 | ●●●●●● |
| [增强萨](https://doorzhou.github.io/wow-pvp-trainer/enhance-shaman.html) | 输出 | 51 | ●●●●●● |
| [恢复萨](https://doorzhou.github.io/wow-pvp-trainer/resto-shaman.html) | 治疗 | 51 | ●●●●●● |
| [冰法](https://doorzhou.github.io/wow-pvp-trainer/frost-mage.html) | 输出 | 51 | ●●●●●● |
| [痛苦术士](https://doorzhou.github.io/wow-pvp-trainer/affliction-warlock.html) | 输出 | 51 | ●●●●●● |
| [踏风武僧](https://doorzhou.github.io/wow-pvp-trainer/windwalker-monk.html) | 输出 | 51 | ●●●●●● |
| [平衡德](https://doorzhou.github.io/wow-pvp-trainer/balance-druid.html) | 输出 | 51 | ●●●●●● |
| [恢复德](https://doorzhou.github.io/wow-pvp-trainer/resto-druid.html) | 治疗 | 51 | ●●●●●● |
| [浩劫 DH](https://doorzhou.github.io/wow-pvp-trainer/havoc-dh.html) | 输出 | 51 | ●●●●●● |
| [湮灭唤魔师](https://doorzhou.github.io/wow-pvp-trainer/devastation-evoker.html) | 输出 | 51 | ●●●●●● |
| [恩护唤魔师](https://doorzhou.github.io/wow-pvp-trainer/preservation-evoker.html) | 治疗 | 51 | ●●●●●● |
| [Thug Cleave](https://doorzhou.github.io/wow-pvp-trainer/thug-cleave-3v3.html) | 3v3 组合 | 51 | ●●●◐●● |
| [RMP](https://doorzhou.github.io/wow-pvp-trainer/rmp-3v3.html) | 3v3 组合 | 51 | ●●●◐●● |
| [RMD](https://doorzhou.github.io/wow-pvp-trainer/rmd.html) | 3v3 组合 | 51 | ●●●◐●● |
| [RPS](https://doorzhou.github.io/wow-pvp-trainer/rps.html) | 3v3 组合 | 51 | ●●●◐●● |
| [RLS](https://doorzhou.github.io/wow-pvp-trainer/rls.html) | 3v3 组合 | 51 | ●●●◐●● |
| [Ret / Warrior](https://doorzhou.github.io/wow-pvp-trainer/ret-warrior.html) | 3v3 组合 | 51 | ●●●◐●● |
| [贼牧 2v2](https://doorzhou.github.io/wow-pvp-trainer/rogue-priest-2v2.html) | 2v2 组合 | 40 | ●●●◐●● |

合计 **1269 道情境判断题**，25 个训练器。
六轴依次是 骨架 / 手法 / 对阵 / 天赋 / 装备 / 训练 —— ● 完成 ◐ 部分 ○ 没有。
首页每张卡下方的六个小格就是这个。

**目标是 13 职业 34 专精 + 33 组竞技场组合全覆盖**，每个含天赋与装备属性。
当前进度 **专精 18/34 · 组合 7/33**，还剩 42 个待办。
完整清单与建议顺序见 **[路线图](docs/ROADMAP.md)**。

6 个坦克专精不做，也不计入分母 —— 竞技场没有坦克位，
把「还没做」和「不会做」混在一起，进度条上会一直挂着永远不会清的账。
<!-- /AUTO:now -->

---

## 项目文档

| | |
|---|---|
| [路线图](docs/ROADMAP.md) | 待办的完整清单与建议顺序（由注册表自动生成） |
| [架构说明](docs/架构说明.md) | 为什么是「内容 + 构建 + 静态页」三层 |
| [新增专精](docs/新增专精.md) | 加一个专精的完整步骤 |
| [贡献指南](docs/贡献指南.md) | 两条内容纪律、文案调性、动手前要知道的 |
| [更新记录](CHANGELOG.md) | 改过什么 |

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

```bash
cd _build && node all.js     # 样式 → 专精页 → 首页 → 路线图 → sitemap → 自检
python3 -m http.server 8899  # 在仓库根目录预览
```

`*.html` 与 `data/specs`、`data/quiz` 是构建产物，不要直接改。源文件在 `_build/`。

---

## 参与

| 想做的事 | 去哪 |
|---|---|
| 报错、许愿、提问题 | [Issues](https://github.com/doorzhou/wow-pvp-trainer/issues)（有模板） |
| 认领一个专精 | [新增专精](docs/新增专精.md) |
| 改之前先看 | [贡献指南](docs/贡献指南.md) |

**技能机制与数据引用类的错误优先处理。**

---

## 授权

分三层，见 [LICENSE](LICENSE)：代码 MIT · 原创内容 CC BY-NC-SA 4.0 · 暴雪素材不在本仓库授权范围内。

非官方粉丝内容，与 Blizzard Entertainment 无隶属关系，未经其认可或赞助。
《魔兽世界》及相关标识、技能图标为暴雪娱乐的商标或注册商标，按《粉丝内容使用条款》在非商业前提下使用。
若权利方认为存在不当使用，请通过 Issues 告知，将立即移除。
