/* 把抓来的原始数据整理成「写页面时要用的判断素材」。
 *
 * node _build/tools/prep.js <slug>
 *
 * 输出的每一项都是写内容前必须先看到的：
 *   - 分歧格（连描述），这是 pages.js 里 picks 要逐格写判断的那几格
 *   - 英雄天赋两条线的分布，决定 setup 里那一行怎么写
 *   - PvP 天赋分布，决定另一行怎么写
 *   - 属性比例，决定 gear.stats
 *   - 三棵树的格数，survey 要照实写
 * 这样写内容的时候不用再回头翻 JSON。
 */
const fs = require('fs'), path = require('path');
const HERE = __dirname, BUILD = path.dirname(HERE), SITE = path.dirname(BUILD);
const CACHE = '/tmp/wowcamp_refresh';

const slug = process.argv[2];
if (!slug) { console.error('用法: node prep.js <slug>'); process.exit(1); }

const tree = JSON.parse(fs.readFileSync(path.join(CACHE, slug + '.tree.new.json'), 'utf8'));
const desc = JSON.parse(fs.readFileSync(path.join(CACHE, slug + '.desc.new.json'), 'utf8'));

/* 与 refresh.py 的 picks_of 同口径：英雄线一边倒时排除未选的线，
   线内齐平的格子归为「选线」这一个决策。 */
const hero = tree.find(b => b.k === 'hero');
const dead = new Set();
let rule = '无英雄树';
if (hero) {
  const peaks = hero.groups.map(g => [g.label, Math.max(...g.cells.map(c => c.u), 0)]);
  const [lo, hi] = [...peaks].sort((a, b) => a[1] - b[1]);
  if (hi[1] - lo[1] > 15) {
    hero.groups.filter(g => g.label === lo[0]).forEach(g => g.cells.forEach(c => dead.add(c.n)));
    rule = `一边倒（${hi[1]}/${lo[1]}），排除「${lo[0]}」整条线`;
  } else {
    hero.groups.forEach(g => g.cells.forEach(c => dead.add(c.n)));
    rule = `真二选一（${hi[1]}/${lo[1]}），整棵英雄树不计逐格分歧`;
  }
  hero.groups.forEach(g => {
    const us = g.cells.map(c => c.u); if (!us.length) return;
    const pk = Math.max(...us);
    const flat = g.cells.filter(c => c.u === pk);
    if (flat.length > 1) flat.forEach(c => dead.add(c.n));
  });
}

const bySlug = {};
Object.entries(desc).forEach(([k, v]) => { bySlug[v.name] = v; });

const cells = [];
tree.filter(b => b.k !== 'pvp').forEach(b =>
  b.groups.forEach(g => g.cells.forEach(c => cells.push({ ...c, tree: b.n }))));
const picks = cells.filter(c => !dead.has(c.n) && c.u * 2 >= 20 && c.u * 2 <= 85)
  .sort((a, b) => b.u - a.u);

const counts = tree.map(b => `${b.n} ${b.groups.reduce((s, g) => s + g.cells.length, 0)} 格`);
const total = cells.length;

console.log(`\n══ ${slug} ══`);
console.log(counts.join(' + '));
console.log(`三棵树共 ${total} 格 · 定死 ${total - picks.length} · 需判断 ${picks.length}`);
console.log(`口径：${rule}\n`);

console.log('── 需要逐格写判断的格子 ──');
picks.forEach(c => {
  const d = bySlug[c.n];
  console.log(`\n  ${c.u}/50 (${c.u * 2}%)  ${c.n}  [${c.tree}]${c.ch ? ' ⇄二选一' : ''}`);
  console.log(`     ${d ? d.desc : '（无描述）'}`);
});

if (hero) {
  console.log('\n── 英雄天赋 ──');
  hero.groups.forEach(g => {
    const us = g.cells.map(c => c.u);
    console.log(`  ${g.label.replace(/&#39;/g, "'")}  峰值 ${Math.max(...us, 0)}/50 · ${g.cells.length} 格`);
  });
}

const pvp = tree.find(b => b.k === 'pvp');
if (pvp) {
  console.log('\n── PvP 天赋（只列有人点的）──');
  pvp.groups.forEach(g => g.cells.filter(c => c.u).sort((a, b) => b.u - a.u)
    .forEach(c => {
      const d = bySlug[c.n];
      console.log(`  ${String(c.u).padStart(2)}/50  ${c.n}`);
      if (d) console.log(`         ${d.desc.slice(0, 110)}`);
    }));
}

/* 属性：只采「平均评级值」那一组，百分比那组跟官方排序对不上 */
const html = fs.readFileSync(path.join(CACHE, slug + '.guide.html'), 'utf8');
const i = html.indexOf('Optimal Secondary Stats');
if (i > 0) {
  const seg = html.slice(i, i + 1400).replace(/<[^>]+>/g, '\n').replace(/[^\S\n]+/g, ' ');
  const got = [...seg.replace(/\n/g, ' ').matchAll(/(\d+)%\s*(Critical Strike|Haste|Mastery|Versatility)\s*\+([\d,]+)/g)];
  if (got.length) {
    const st = got.map(m => [m[2], +m[3].replace(/,/g, '')]).sort((a, b) => b[1] - a[1]);
    const mx = st[0][1];
    const CN = { 'Critical Strike': '爆击', Haste: '急速', Mastery: '精通', Versatility: '全能' };
    console.log('\n── 属性（最高 = 100）──');
    console.log('  ' + st.map(([n, v]) => `${CN[n]} ${Math.round(v / mx * 100)}`).join(' > '));
  }
}
console.log('');
