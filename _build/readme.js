/* ============================================================
   README 里会过期的那几块，改成从注册表现算

   为什么要有这一步：README 的训练器表、进度数字、补丁号原本全靠手写，
   连着十几次提交没人回写，线上写着「专精 4/40」而实际是 14/34。
   「记得回写 README」是纪律，纪律会被忘；构建产出不会。

   只替换 <!-- AUTO:xxx --> ... <!-- /AUTO:xxx --> 之间的内容，
   README 其余部分照旧手写。
   ============================================================ */
const fs = require('fs'), path = require('path');
const SITE = path.join(__dirname, '..');
const { DOMAIN, PATCH, SEASON } = require('./config.js');
const { PAGES } = require('./pages.js');

const win = { REG: null };
new Function('window', fs.readFileSync(path.join(SITE, 'data/registry.js'), 'utf8'))(win);
const REG = win.REG;

const mark = v => (v === 2 ? '●' : v === 1 ? '◐' : '○');
const short = file => (PAGES.find(p => p.file === file) || {}).short || file;
const quizCount = file => {
  try { return (require(path.join(__dirname, 'content', file + '.js')).quiz || []).length }
  catch (e) { return 0 }
};

/* 已上线的训练器：专精在前，组合在后，各按注册表顺序 */
const rows = REG.flat.filter(s => s.page).map(s => ({
  file: s.page.replace('.html', ''), page: s.page,
  kind: REG.roles[s.role], st: s.st,
})).concat(REG.compList.filter(c => c.page).map(c => ({
  file: c.page.replace('.html', ''), page: c.page,
  kind: c.bracket + ' 组合', st: c.st,
})));

rows.forEach(r => { r.q = quizCount(r.file) });
const totalQ = rows.reduce((n, r) => n + r.q, 0);

const table = ['| 训练器 | 类型 | 题量 | 六轴完成度 |', '|---|---|---:|---|']
  .concat(rows.map(r => '| [' + short(r.file) + '](' + DOMAIN + '/' + r.page + ') | ' +
    r.kind + ' | ' + r.q + ' | ' + r.st.map(mark).join('') + ' |')).join('\n');

const todoSpec = REG.stats.total - REG.stats.done;
const todoComp = REG.compStats.total - REG.compStats.done;

const BLOCKS = {
  patch: `**${require('./config.js').TAGLINE}** · 对应补丁 ${PATCH}（${SEASON}）`,

  now: `${table}

合计 **${totalQ} 道情境判断题**，${rows.length} 个训练器。
六轴依次是 骨架 / 手法 / 对阵 / 天赋 / 装备 / 训练 —— ● 完成 ◐ 部分 ○ 没有。
首页每张卡下方的六个小格就是这个。

**目标是 ${REG.classes.length} 职业 ${REG.stats.total} 专精 + ${REG.compStats.total} 组竞技场组合全覆盖**，每个含天赋与装备属性。
当前进度 **专精 ${REG.stats.done}/${REG.stats.total} · 组合 ${REG.compStats.done}/${REG.compStats.total}**，还剩 ${todoSpec + todoComp} 个待办。
完整清单与建议顺序见 **[路线图](docs/ROADMAP.md)**。

${REG.skipped.length} 个坦克专精不做，也不计入分母 —— 竞技场没有坦克位，
把「还没做」和「不会做」混在一起，进度条上会一直挂着永远不会清的账。`,
};

const file = path.join(SITE, 'README.md');
let md = fs.readFileSync(file, 'utf8');
let n = 0;
for (const k of Object.keys(BLOCKS)) {
  const re = new RegExp('(<!-- AUTO:' + k + ' -->)[\\s\\S]*?(<!-- /AUTO:' + k + ' -->)');
  if (!re.test(md)) { console.log('  ✗ README 里找不到 AUTO:' + k + ' 标记'); continue }
  md = md.replace(re, '$1\n' + BLOCKS[k] + '\n$2');
  n++;
}
fs.writeFileSync(file, md);
console.log('README.md  ' + n + '/' + Object.keys(BLOCKS).length + ' 块已同步 · 专精 ' +
  REG.stats.done + '/' + REG.stats.total + ' · 组合 ' + REG.compStats.done + '/' +
  REG.compStats.total + ' · ' + totalQ + ' 题');
