/* ============================================================
   路线图生成器：registry.js → docs/ROADMAP.md
   跟注册表同源，改了 registry 跑一次 all.js 就同步，不用手工维护
   ============================================================ */
const fs = require('fs'), path = require('path');
const SITE = path.join(__dirname, '..');
const { SITE_NAME, PATCH, TIER_PATCH } = require('./config.js');

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

/* 下一批建议：只从未完成项里选；完成后自动掉出清单。
   组合优先级按「现有前置能否直接复用」排，不拿外部强度榜替代产品优先级。
   verified 字段只表示构成已按当前补丁核过，不表示强度推荐。 */
const SPEC_PRIORITY = [
  'paladin/holy', 'monk/mistweaver', 'priest/holy', 'mage/fire', 'druid/feral',
];
const COMP_PRIORITY = ['cupid', 'dh-boomkin', 'hero-cleave', 'phdk', 'jungle', 'god-comp', 'mlp'];
const specPriority = s => {
  const i = SPEC_PRIORITY.indexOf(s.key);
  return i < 0 ? 999 : i;
};
const compPriority = c => {
  const i = COMP_PRIORITY.indexOf(c.id);
  return i < 0 ? 999 : i;
};
const nextSpecs = todoSpecs.slice().sort((a, b) =>
  specPriority(a) - specPriority(b) || tierRank(a.tier) - tierRank(b.tier)).slice(0, 5);
const nextComps = todoComps.filter(c => c.bracket === '3v3')
  .sort((a, b) => compPriority(a) - compPriority(b)).slice(0, 3);

/* 存量补齐：拿注册表现算，别手写数字 */
const partial = doneSpecs.concat(doneComps).filter(x => x.st.some(v => v < 2));
const axeGaps = AX.map((name, i) => ({
  name, n: doneSpecs.concat(doneComps).filter(x => x.st[i] < 2).length,
})).filter(a => a.n > 0);

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

每个训练器都要六轴齐全才算做完。${REG.skipped.length ? `${REG.skipped.length} 个专精不做，不计入分母——见下方「不做」一节。` : ''}

## 建议的下一批

**先解锁组合，不按强度榜平铺专精。** 下面清单只从注册表里的未完成项生成，做完会自动掉出；
组合优先复用已上线专精。标记「${PATCH} 已核」只表示构成已按当前补丁复核，未标记的组合开工前必须先核版本。
组合是这站唯一别处没有的东西；单专精页 Icy Veins 和 Murlok 都有。

### 专精
${nextSpecs.map((s, i) => (i + 1) + '. **' + s.n + s.clsName + '**（' + (s.role === 'heal' ? '治疗' : s.tier || '—') + '） — ' + s.en).join('\n')}

### 组合
${nextComps.map((c, i) => (i + 1) + '. **' + c.name + '** — ' + c.make + '（' + (c.verified === PATCH ? PATCH + ' 已核' : '待核当前版本') + '）').join('\n')}

### 存量补齐
${partial.length
  ? axeGaps.map(a => '- **' + a.name + '**：' + a.n + ' 个训练器未满').join('\n')
  : '已上线的训练器六轴都是满的，没有欠账。'}

---

## 职业专精（${REG.stats.total}）

### 已上线（${doneSpecs.length}）

${specTable(doneSpecs)}

### 未开工（${todoSpecs.length}）

${specTable(todoSpecs)}
${REG.skipped.length ? `
### 不做（${REG.skipped.length} 个）

不计入分母。**「还没做」和「不会做」混在一起，进度条上会一直挂着永远不会清的账。**

| 专精 | 职业 | 角色 | 为什么不做 |
|---|---|---|---|
${REG.skipped.map(s => '| **' + s.n + '** | ' + s.clsName + ' | ' + REG.roles[s.role] + ' | ' + s.skip + ' |').join('\n')}
` : ''}
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
- [ ] 许愿池升级到邮件投递——现在走 GitHub Issue 预填（通的，但要用户有账号且内容公开）。
      去 [web3forms.com](https://web3forms.com) 填收件邮箱拿 access key，粘进 [\`_build/config.js\`](../_build/config.js) 的 \`WISH_KEY\`，
      前端会自动切到邮件通道，不用改代码
- [ ] 仓库名与站名对齐（现为 \`wow-pvp-trainer\`，站名已是「${SITE_NAME}」）
- [ ] 补丁升级流程：12.1 出来后需要复核天赋使用率、梯队、组合清单
`;

fs.mkdirSync(path.join(SITE, 'docs'), { recursive: true });
fs.writeFileSync(path.join(SITE, 'docs/ROADMAP.md'), md);
console.log('docs/ROADMAP.md  ' + (Buffer.byteLength(md) / 1024).toFixed(1) + 'KB · 专精 ' +
  REG.stats.done + '/' + REG.stats.total + ' · 组合 ' + REG.compStats.done + '/' + REG.compStats.total);
