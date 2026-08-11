/* ============================================================
   一键构建：CSS → 专精页 → 首页 → sitemap
   跑法： node all.js
   ============================================================ */
const { execSync } = require('child_process');
const fs = require('fs'), path = require('path');
const SITE = path.join(__dirname, '..');
const { DOMAIN } = require('./config.js');

const step = (name, cmd) => {
  console.log('\n▸ ' + name);
  execSync('node ' + cmd, { cwd: __dirname, stdio: 'inherit' });
};

step('样式', 'css.js');
step('专精页与组合页', 'build.js');
step('首页', 'buildhome.js');

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

console.log('\n' + (bad + synErr + h1Err === 0 ? '✅ 全部通过' : '⚠️  有 ' + (bad + synErr + h1Err) + ' 处问题'));
