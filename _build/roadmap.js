/* ============================================================
   路线图生成器：registry.js → docs/ROADMAP.md
   跟注册表同源，改了 registry 跑一次 all.js 就同步，不用手工维护
   ============================================================ */
const fs = require('fs'), path = require('path');
const SITE = path.join(__dirname, '..');
const { SITE_NAME } = require('./config.js');

const win = { REG: null };
new Function('window', fs.readFileSync(path.join(SITE, 'data/registry.js'), 'utf8'))(win);
const REG = win.REG;

const AX = REG.axes;                          // 骨架 手法 对阵 天赋 装备 训练
const mark = v => (v === 2 ? '●' : v === 1 ? '◐' : '○');
const bar = st => st.map(mark).join('');

/* 梯队排序：先做强势的 */
const TIER_ORDER = { S: 0, 'A+': 1, A: 2, B: 3, C: 4 };
const tierRank = t => (t in TIER_ORDER ? TIER_ORDER[t] : 9);

function specTable(list) {
  return ['| 专精 | 职业 | 角色 | 梯队 | ' + AX.join(' | ') + ' | 状态 |',
    '|---|---|---|---|' + AX.map(() => '---').join('|') + '|---|']
    .concat(list.map(s =>
      '| **' + s.n + '** | ' + s.clsName + ' | ' + REG.roles[s.role] + ' | ' +
      (s.tier || '—') + ' | ' + s.st.map(mark).join(' | ') + ' | ' +
      (s.page ? '[已上线](../' + s.page + ')' : '未开工') + ' |')).join('\n');
}
function compTable(list) {
  return ['| 组合 | 分段 | 构成 | ' + AX.join(' | ') + ' | 状态 |',
    '|---|---|---|' + AX.map(() => '---').join('|') + '|---|']
    .concat(list.map(c =>
      '| **' + c.name + '** | ' + c.bracket + ' | ' + c.make + ' | ' +
      c.st.map(mark).join(' | ') + ' | ' +
      (c.page ? '[已上线](../' + c.page + ')' : '未开工') + ' |')).join('\n');
}

const specs = REG.flat.slice().sort((a, b) =>
  (a.page ? 0 : 1) - (b.page ? 0 : 1) || tierRank(a.tier) - tierRank(b.tier) || a.clsName.localeCompare(b.clsName));
const comps = REG.compList.slice().sort((a, b) =>
  (a.page ? 0 : 1) - (b.page ? 0 : 1) || a.bracket.localeCompare(b.bracket));

const doneSpecs = specs.filter(s => s.page), todoSpecs = specs.filter(s => !s.page);
const doneComps = comps.filter(c => c.page), todoComps = comps.filter(c => !c.page);

/* 下一批建议：未开工里梯队最高的 5 个专精 + 3v3 里最主流的 3 个组合 */
const nextSpecs = todoSpecs.filter(s => s.role === 'dps').sort((a, b) => tierRank(a.tier) - tierRank(b.tier)).slice(0, 5);
const nextComps = todoComps.filter(c => c.bracket === '3v3').slice(0, 3);

const md = `# 路线图

> 这份文件由 \`_build/roadmap.js\` 从 [\`data/registry.js\`](../data/registry.js) 生成。
> 不要手改——改注册表，然后跑 \`cd _build && node all.js\`。
> 最后生成：${REG.updated} · 对应补丁 ${REG.patch}（${REG.season}）

## 进度

| | 已上线 | 总数 | 覆盖 |
|---|---|---|---|
| 职业专精 | ${REG.stats.done} | ${REG.stats.total} | ${REG.stats.pct}% |
| 竞技场组合 | ${REG.compStats.done} | ${REG.compStats.total} | ${REG.compStats.pct}% |

**六个内容轴**：${AX.join(' / ')}
**图例**：● 完成 ◐ 部分 ○ 没有

每个训练器都要六轴齐全才算做完。目前已上线的六个，**天赋只做了实测到的定盘项、装备的逐专精属性排序全部欠着**——
这两块是补齐存量的优先项，比新开一个专精更值得先做。

## 建议的下一批

排序依据是 PvP 梯队（Icy Veins 12.0.7）与组合的主流程度，**不是我的判断，是公开数据的坐标**。

### 专精
${nextSpecs.map((s, i) => (i + 1) + '. **' + s.n + s.clsName + '**（${t}）'.replace('${t}', s.tier || '—') + ' — ' + s.en).join('\n')}

### 组合
${nextComps.map((c, i) => (i + 1) + '. **' + c.name + '** — ' + c.make).join('\n')}

### 存量补齐
1. 六个已上线训练器的**装备与属性**——每个专精的副属性排序，需要查 Murlok.io top50 实测配装
2. 六个已上线训练器的**完整天赋树**——职业树/专精树配点与关键分歧点

---

## 职业专精（${REG.stats.total}）

### 已上线（${doneSpecs.length}）

${specTable(doneSpecs)}

### 未开工（${todoSpecs.length}）

${specTable(todoSpecs)}

---

## 竞技场组合（${REG.compStats.total}）

3v3 是有公认命名的固定组合，2v2 按「输出 + 治疗」配对。
组合清单来源：Icy Veins 各专精 Best Arena Compositions、wowmeta 组合梯队。

### 已上线（${doneComps.length}）

${compTable(doneComps)}

### 未开工（${todoComps.length}）

${compTable(todoComps)}

---

## 站点层面

- [ ] 提交 sitemap 到 Google Search Console 与百度搜索资源平台（需登录账号，只能人工做）
- [ ] 许愿池接通（代码已就位，缺 Web3Forms access key；见 [\`_build/config.js\`](../_build/config.js)）
- [ ] 仓库名与站名对齐（现为 \`wow-pvp-trainer\`，站名已是「${SITE_NAME}」）
- [ ] 补丁升级流程：12.1 出来后需要复核天赋使用率、梯队、组合清单
`;

fs.mkdirSync(path.join(SITE, 'docs'), { recursive: true });
fs.writeFileSync(path.join(SITE, 'docs/ROADMAP.md'), md);
console.log('docs/ROADMAP.md  ' + (Buffer.byteLength(md) / 1024).toFixed(1) + 'KB · 专精 ' +
  REG.stats.done + '/' + REG.stats.total + ' · 组合 ' + REG.compStats.done + '/' + REG.compStats.total);
