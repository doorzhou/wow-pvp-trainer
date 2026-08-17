/* ============================================================
   一键构建：CSS → 专精页 → 首页 → sitemap
   跑法： node all.js
   ============================================================ */
const { execSync } = require('child_process');
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const SITE = path.join(__dirname, '..');
const { DOMAIN } = require('./config.js');
const { PAGES } = require('./pages.js');

const step = (name, cmd) => {
  console.log('\n▸ ' + name);
  execSync('node ' + cmd, { cwd: __dirname, stdio: 'inherit' });
};

step('样式', 'css.js');
step('专精页与组合页', 'build.js');
step('首页', 'buildhome.js');
step('路线图', 'roadmap.js');
step('README', 'readme.js');

/* ---------- sitemap ---------- */
console.log('\n▸ sitemap');
const win = { REG: null };
new Function('window', fs.readFileSync(path.join(SITE, 'data/registry.js'), 'utf8'))(win);
const REG = win.REG;
const today = REG.updated;

const urls = [{ loc: DOMAIN + '/', pri: '1.0', freq: 'weekly' }]
  .concat(REG.flat.filter(s => s.page).map(s => ({ loc: DOMAIN + '/' + s.page, pri: '0.9', freq: 'monthly' })))
  .concat(REG.compList.filter(c => c.page).map(c => ({ loc: DOMAIN + '/' + c.page, pri: '0.8', freq: 'monthly' })));

const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map(u => '  <url>\n    <loc>' + u.loc + '</loc>\n    <lastmod>' + today +
    '</lastmod>\n    <changefreq>' + u.freq + '</changefreq>\n    <priority>' + u.pri + '</priority>\n  </url>').join('\n') +
  '\n</urlset>\n';
fs.writeFileSync(path.join(SITE, 'sitemap.xml'), xml);

// 不屏蔽任何资源目录：搜索引擎渲染页面时要能取到 CSS/JS，屏蔽了反而吃亏
const robots = 'User-agent: *\nAllow: /\n\nSitemap: ' + DOMAIN + '/sitemap.xml\n';
fs.writeFileSync(path.join(SITE, 'robots.txt'), robots);
console.log('sitemap.xml  ' + urls.length + ' 条 URL · robots.txt 已写');

/* ---------- 自检 ---------- */
console.log('\n▸ 自检');
let bad = 0, checked = 0;
const refRe = /(?:src|href)="([^":#]+?)"/g;   // 带 ?v= 指纹的要先去掉查询串
for (const f of fs.readdirSync(SITE).filter(x => x.endsWith('.html'))) {
  const h = fs.readFileSync(path.join(SITE, f), 'utf8');
  let m;
  while ((m = refRe.exec(h))) {
    const r = m[1].split('?')[0];
    if (r.startsWith('http') || r.startsWith('//') || r === '') continue;
    checked++;
    if (!fs.existsSync(path.join(SITE, r))) { console.log('  ✗ ' + f + ' → ' + r); bad++ }
  }
}
console.log('  本地引用 ' + checked + ' 条，坏链 ' + bad);

// 数据模块语法
let synErr = 0;
['data/specs', 'data/quiz'].forEach(d => {
  fs.readdirSync(path.join(SITE, d)).forEach(f => {
    try { new Function(fs.readFileSync(path.join(SITE, d, f), 'utf8')) }
    catch (e) { console.log('  ✗ ' + d + '/' + f + ': ' + e.message); synErr++ }
  });
});
['assets/js/app.js', 'assets/js/home.js', 'data/registry.js'].forEach(f => {
  try { new Function(fs.readFileSync(path.join(SITE, f), 'utf8')) }
  catch (e) { console.log('  ✗ ' + f + ': ' + e.message); synErr++ }
});
console.log('  JS 语法错误 ' + synErr + ' 处');

// 每页必须恰好一个 h1
let h1Err = 0;
for (const f of fs.readdirSync(SITE).filter(x => x.endsWith('.html'))) {
  const n = (fs.readFileSync(path.join(SITE, f), 'utf8').match(/<h1[\s>]/g) || []).length;
  if (n !== 1) { console.log('  ✗ ' + f + ' 有 ' + n + ' 个 h1'); h1Err++ }
}
console.log('  h1 数量异常 ' + h1Err + ' 页');

// 技能行里的图标必须有本地 src。只写 data-sk 不会报错，但浏览器会安静地显示空白。
// 2026-08-17 做恢复萨时顺手照全站，翻出 RMP 同类存量问题。
let iconErr = 0;
for (const f of fs.readdirSync(SITE).filter(x => x.endsWith('.html'))) {
  const h = fs.readFileSync(path.join(SITE, f), 'utf8');
  const empty = h.match(/<img\b(?=[^>]*\bdata-sk=)(?![^>]*\bsrc=)[^>]*>/g) || [];
  if (empty.length) {
    console.log('  ✗ ' + f + '：' + empty.length + ' 个技能图标没有 src');
    iconErr += empty.length;
  }
}
console.log('  技能图标空源 ' + iconErr + ' 处');

// 题库结构。重点是最后一条：答题引擎会打乱选项顺序，
// 所以「B 和 C 都对」「以上都对」这类写法在页面上必然是错的 —— 靠人眼看不出来，只能焊在这里。
let quizErr = 0;
const qbad = (id, why) => { console.log('  ✗ ' + id + '：' + why); quizErr++ };
for (const f of fs.readdirSync(path.join(__dirname, 'content')).filter(x => !x.startsWith('_'))) {
  const c = require(path.join(__dirname, 'content', f));
  const seen = new Set();
  (c.quiz || []).forEach(q => {
    const at = f.replace('.js', '') + '/' + q.id;
    if (seen.has(q.id)) qbad(at, 'id 重复');
    seen.add(q.id);
    if (!Array.isArray(q.o) || q.o.length !== 4) qbad(at, '选项不是 4 个');
    if (!Array.isArray(q.e) || q.e.length !== (q.o || []).length) qbad(at, '解析数与选项数对不上');
    if (!(q.r >= 0 && q.r < (q.o || []).length)) qbad(at, '正确答案下标越界');
    if (![1, 2, 3].includes(q.d)) qbad(at, '难度不是 1/2/3');
    if (!q.k) qbad(at, '缺「可迁移的那一条」');
    [...(q.o || []), ...(q.e || [])].forEach(t => {
      if (/\b[ABCD]\s*和\s*[ABCD]\b|以上都|上述都|选项\s*[1234一二三四]/.test(String(t)))
        qbad(at, '引用了选项位置，但选项会被打乱：' + String(t).slice(0, 30));
    });
  });
}
console.log('  题库问题 ' + quizErr + ' 处');

// 专精页结构。第一版新增专精时照着一个已经跑偏的页面抄，结果 setup/general 空着、
// 对手缺 arena/duel、s5 硬编码 —— 页面照样渲染得出来，只有跟标准逐字段比才发现。
let structErr = 0;
for (const f of fs.readdirSync(path.join(__dirname, 'content')).filter(x => !x.startsWith('_'))) {
  const c = require(path.join(__dirname, 'content', f));
  const id = f.replace('.js', '');
  if (!c.match || !c.match.list || c.match.list.length < 13) continue;   // 只查专精页
  const bad = (why) => { console.log('  ✗ ' + id + '：' + why); structErr++ };
  ['clocks', 'setup', 'general', 'sheet'].forEach(k => {
    if (!c.fragments[k]) bad('缺 fragments.' + k);
  });
  const noMode = c.match.list.filter(m => !m.arena || !m.duel);
  if (noMode.length) bad(noMode.length + ' 个对手缺 arena/duel（分职业页有模式切换）');
  if ((c.sections.s5 || '').length > 200) bad('s5 应该是空壳，内容放 fragments.sheet');
}
console.log('  专精页结构问题 ' + structErr + ' 处');

// 空段。导航承诺一段，正文就得有那一段 —— Thug Cleave 的「击杀链」曾经只有一句
// 导语加一个空容器（steps 数据从来没写过），页面渲染正常、构建全绿，
// 但用户点进去看到的是空白。导航是承诺，这道检查确认承诺兑现了。
let emptyErr = 0;
for (const f of fs.readdirSync(path.join(__dirname, 'content')).filter(x => !x.startsWith('_'))) {
  const c = require(path.join(__dirname, 'content', f));
  const id = f.replace('.js', '');
  if (!c.nav) continue;
  const cfg = PAGES.find(p => p.file === id) || {};
  const html = fs.readFileSync(path.join(SITE, id + '.html'), 'utf8');
  // 容器摆在那儿但喂它的数据是空的 —— 页面会渲染出一块什么都没有的区域
  if (/id="stepBody"/.test(html) && !(c.steps || []).length) {
    console.log('  ✗ ' + id + '：有 stepBody 容器但 steps 是空的，那一段会渲染成空白');
    emptyErr++;
  }
  // 运行时才填内容的容器 → 喂它的数据。有数据就不算空段。
  const fed = { stepBody: (c.steps || []).length, quizArea: (c.quiz || []).length };
  for (const n of c.nav) {
    if (n.s === cfg.quizSec) continue;                  // 题库是运行时填的
    const m = html.match(new RegExp('id="' + n.s + '"[\\s\\S]*?(?=<section|$)'));
    const seg = m ? m[0] : '';
    if (Object.keys(fed).some(k => fed[k] && seg.includes('id="' + k + '"'))) continue;
    const txt = seg.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (txt.length < 120) {
      console.log('  ✗ ' + id + ' 的「' + n.label + '」(' + n.s + ') 只有 ' + txt.length + ' 字，导航承诺了这一段');
      emptyErr++;
    }
  }
}
console.log('  空段 ' + emptyErr + ' 处');

// 天赋树的 slug 在一份树里必须唯一。恢复德撞过一次：英雄天赋和 PvP 天赋
// 各有一个叫 Early Spring 的格子，效果完全不同（一个减 1 秒冷却，一个让野性成长瞬发），
// 而描述是按 slug 取的 —— 页面会给其中一个配上另一个的说明，看着完全正常。
// 顺带查描述缺失：格子有 slug 而 desc 里没有，浮窗就是空的。
let slugErr = 0;
for (const f of fs.readdirSync(path.join(__dirname, 'tree')).filter(x => x.endsWith('.json') && !x.endsWith('.desc.json'))) {
  const id = f.replace('.json', '');
  const tree = JSON.parse(fs.readFileSync(path.join(__dirname, 'tree', f), 'utf8'));
  const dp = path.join(__dirname, 'tree', id + '.desc.json');
  const desc = fs.existsSync(dp) ? JSON.parse(fs.readFileSync(dp, 'utf8')) : {};
  const seen = new Map(), noDesc = [];
  for (const b of tree) for (const g of b.groups) for (const c of g.cells) {
    if (seen.has(c.s)) {
      console.log('  ✗ ' + id + '：slug「' + c.s + '」在 ' + seen.get(c.s) + ' 与 ' + b.k +
        ' 两棵树里重复（' + c.n + '），描述会串台');
      slugErr++;
    } else seen.set(c.s, b.k);
    if (!desc[c.s] || !desc[c.s].desc) noDesc.push(c.n);
  }
  if (noDesc.length) { console.log('  ✗ ' + id + '：' + noDesc.length + ' 格没有中文描述 —— ' + noDesc.slice(0, 5).join('、')); slugErr++ }
}
console.log('  天赋树 slug 与描述问题 ' + slugErr + ' 处');

// 指纹算的是文件内容，而题库文件是在算完指纹之后才写出来的 —— 新增页面的
// 第一次构建拿到的永远是 ?v=0（ver.js 里文件不存在的兜底值）。跑第二次就对了。
// 影响：带 v=0 的资源没有缓存指纹，以后更新题库时回访用户会拿到旧的。
let fpErr = 0;
const fpFiles = fs.readdirSync(SITE).filter(x => x.endsWith('.html')).map(x => x)
  .concat(fs.readdirSync(path.join(SITE, 'data', 'specs')).map(x => 'data/specs/' + x));
const actualHash = f => crypto.createHash('md5').update(fs.readFileSync(path.join(SITE, f))).digest('hex').slice(0, 8);
for (const f of fpFiles) {
  const txt = fs.readFileSync(path.join(SITE, f), 'utf8');
  for (const m of txt.matchAll(/([a-zA-Z0-9_./-]+)\?v=([0-9a-f]+)/g)) {
    const target = m[1], got = m[2];
    if (!fs.existsSync(path.join(SITE, target))) continue;
    const want = actualHash(target);
    if (got !== want) {
      console.log('  ✗ ' + f + ' → ' + target + ' 指纹过期（' + got + '，应为 ' + want + '），再跑一次 node all.js');
      fpErr++;
    }
  }
}
console.log('  资源指纹缺失或过期 ' + fpErr + ' 处');

const total = bad + synErr + h1Err + iconErr + quizErr + structErr + emptyErr + slugErr + fpErr;
console.log('\n' + (total === 0 ? '✅ 全部通过' : '⚠️  有 ' + total + ' 处问题'));
