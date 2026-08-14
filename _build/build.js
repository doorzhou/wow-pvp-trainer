/* ============================================================
   生成器：数据 + 模板 → 静态页
   跑法： node build.js
   加一个专精：往 PAGES 里加一条 + 提供内容，不改模板
   ============================================================ */
const fs = require('fs'), path = require('path');
const SITE = path.join(__dirname, '..');
// 内容模块：每个专精一个文件，构建期读取，不发给浏览器
const C = {};
for (const f of fs.readdirSync(path.join(__dirname, 'content'))) {
  if (f.endsWith('.js') && !f.startsWith('_')) C[f.replace('.js','')] = require('./content/' + f);
}
const { DOMAIN, SITE_NAME, TAGLINE, MARK, ISSUES, WISH_KEY, PATCH, SEASON, SEASON_EN } = require('./config.js');
const NUM = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨'];

/* ---------- 每页配置 ---------- */
const { PAGES } = require('./pages.js');
const v = require('./ver.js');

/* ---------- 把静态片段塞进容器（爬虫要看得见，不能靠 JS 注入） ---------- */
function fill(html, id, content) {
  const re = new RegExp('(<(\\w+)[^>]*\\bid="' + id + '"[^>]*>)(\\s*)(</\\2>)');
  if (!re.test(html)) return { html, ok: false };
  return { html: html.replace(re, (_, open, tag, ws, close) => open + content + close), ok: true };
}

/* ---------- 构建期渲染对阵面板（全部进 DOM，JS 只负责切换显示） ---------- */
function IC(f) { return 'assets/icons/' + f + '.jpg' }
function skHTMLb(n, SK, sets) {
  const f = SK[n]; if (!f) return n;
  let c = '';
  if (sets.enemy.has(n)) c = 'e';
  else for (const k of Object.keys(sets.own || {})) if (sets.own[k].has(n)) { c = k; break }
  return '<sk class="' + c + '"><img class="ic" src="' + IC(f) +
    '" alt="" loading="lazy" onerror="this.style.display=\'none\'">' + n + '</sk>';
}
function rowHTMLb(o, SK, sets) {
  const icons = (o.icons || []).map(n => {
    const f = SK[n]; if (!f) return '';
    return '<img class="ic" style="width:20px;height:20px" src="' + IC(f) + '" alt="' + n +
      '" data-sk="' + n + '" loading="lazy" onerror="this.style.display=\'none\'">';
  }).join('');
  return '<div class="row"><div class="h" onclick="tg(this)">' +
    (icons ? '<span class="icrow">' + icons + '</span>' : '') +
    '<span class="t">' + o.t + '</span><span class="sub">' + (o.sub || '') +
    '</span><span class="ar">▸</span></div><div class="b">' + o.b + '</div></div>';
}
function matchPanels(M, SK, sets, cfg) {
  return M.list.map((m, idx) => {
    let h = '<div class="mpanel' + (idx === 0 ? ' on' : '') + '" data-cid="' + m.id + '"><div class="cdetail">';
    if (m.ic) {
      h += '<div class="top"><img src="' + IC(m.ic) + '" alt="" onerror="this.style.display=\'none\'">' +
        '<h3 style="--cc:' + m.c + '">' + m.n + '</h3>' +
        (m.diff ? '<span class="diff">体感：' + m.diff + '</span>' : '') + '</div>';
    } else h += '<h3 style="--cc:' + m.c + '">' + m.n + '</h3>';
    h += '<div class="oneline">' + m.one + '</div>';
    if (m.cards) h += '<div class="cards-line"><span class="lb">他手上的牌</span>' +
      m.cards.map(n => skHTMLb(n, SK, sets)).join('') + '</div>';
    if (m.eg) h += '<div class="egs"><span class="lb">典型</span>' +
      m.eg.map(e => '<span class="eg">' + e + '</span>').join('') + '</div>';
    if (m.threat) h += '<p style="margin-bottom:10px"><b>威胁在哪：</b>' + m.threat + '</p>';
    if (m.q) h += '<div class="rows">' + m.q.map((q, i) =>
      rowHTMLb({ t: M.qlbl[i], sub: q[0], b: '<p style="margin-top:8px">' + q[1] + '</p>' }, SK, sets)).join('') + '</div>';
    if (M.members) {
      const mem = M.members;
      h += '<div class="' + (mem.length === 3 ? 'trio' : 'duo') + '">' + mem.map(x =>
        '<div class="c' + x.cls + '"><div class="who"><img src="' + IC(x.icon) +
        '" alt="" onerror="this.style.display=\'none\'">' + x.label + '</div><div class="txt">' +
        (m[x.k] || '') + '</div></div>').join('') +
        (m.l ? '<div class="link"><span class="lk">耦合点</span><div>' + m.l + '</div></div>' : '') + '</div>';
    }
    if (m.arena) h += '<div class="modetip on" data-m="arena"><b>竞技场判断：</b> ' + m.arena + '</div>';
    if (m.duel) h += '<div class="modetip" data-m="duel"><b>单挑补充：</b> ' + m.duel + '</div>';
    return h + '</div></div>';
  }).join('\n');
}

/* ---------- 生成数据模块（运行时用的那份） ---------- */
function dataModule(cfg) {
  const c = C[cfg.file];
  const P = {
    id: cfg.file, file: cfg.file + '.html', kind: cfg.kind,
    sk: c.sk, enemy: c.enemy, html: {},
  };
  // 已在构建期内联进 HTML 的片段不再走 JS 注入
  const done = cfg._filled || new Set();
  Object.keys(c.fragments).forEach(k => { if (c.fragments[k] && !done.has(k)) P.html[k] = c.fragments[k] });
  if (done.has('clsDetail')) P.prerendered = true;

  if (c.own) P.own = c.own;
  if (cfg.views) P.views = cfg.views;
  if (c.cond && c.verdicts) { P.cond = c.cond; P.verdicts = c.verdicts }
  if (c.steps) P.steps = c.steps;
  if (!P.prerendered && c.match) P.match = c.match;   // 已预渲染的话，对阵数据就不用再发一份
  if (cfg.assign && c.roles) {
    P.assign = Object.assign({ roles: c.roles, memb: c.memb, play: c.play }, cfg.assign);
  }
  // 题库分类标签与图标
  const label = Object.assign({}, cfg.catLabel);
  const icon = {};
  if (c.match && c.match.qlbl) c.match.list.forEach(x => { label[x.id] = x.n; icon[x.id] = x.ic });
  // 题库单独成文件，点开「判断训练」才加载 —— 首屏不背这 40KB
  const bank = c.quiz;
  // 题目分类字段：专精页用 t（通用手法/各职业），组合页用 w（哪个位置的视角）
  const key = bank.length && bank[0].w !== undefined ? 'w' : 't';
  P.quiz = {
    src: v('data/quiz/' + cfg.file + '.js'), count: bank.length,
    key, filterId: key === 'w' ? 'fWho' : 'fCat',
    v2c: key === 'w' ? (cfg.v2c || null) : null,
    label, icon, tagCls: cfg.tagCls || null,
    store: cfg.store, section: cfg.quizSec, done: cfg.done,
  };
  P.talent = cfg.talent || null;
  // 天赋树实测布局：解析 Murlok heatmap 得来，与 pages.js 里的判断层分开存，
  // 重抓数据不动判断。文件不存在就没有树，页面照常渲染其余部分。
  const treeFile = path.join(__dirname, 'tree', cfg.file + '.json');
  if (P.talent && fs.existsSync(treeFile)) {
    P.talent.treeData = JSON.parse(fs.readFileSync(treeFile, 'utf8'));
    // 天赋描述只在点开某一格时才要，跟题库一样单独成文件，不进首屏
    const descFile = path.join(__dirname, 'tree', cfg.file + '.desc.json');
    if (fs.existsSync(descFile)) {
      fs.mkdirSync(path.join(SITE, 'data/taldesc'), { recursive: true });
      fs.writeFileSync(path.join(SITE, 'data/taldesc', cfg.file + '.js'),
        'window.TALDESC=' + fs.readFileSync(descFile, 'utf8') + ';\n');
      P.talent.descSrc = v('data/taldesc/' + cfg.file + '.js');
    }
  }
  P.gear = cfg.gear || null;
  return {
    page: 'window.PAGE=' + JSON.stringify(P) + ';\n',
    quiz: 'window.QUIZ=' + JSON.stringify(bank) + ';\n',
  };
}

/* ---------- 生成页面 ---------- */
function page(cfg) {
  const CT = C[cfg.file];
  const m = CT.meta;
  const secs = CT.sections;
  // 导航：插入两个新项，重新编号
  const nav = CT.nav.map(n => ({ s: n.s, label: n.label }));
  const quizIdx = nav.findIndex(n => /判断训练/.test(n.label));
  const at = quizIdx < 0 ? nav.length : quizIdx;
  nav.splice(at, 0, { s: 'sTal', label: '天赋' }, { s: 'sGear', label: '装备与属性' });
  const navHTML = nav.map((n, i) =>
    '<button' + (i === 0 ? ' class="on"' : '') + ' data-s="' + n.s + '">' + NUM[i] + ' ' + n.label + '</button>'
  ).join('\n    ');

  // 专精页头（插到 s1 最前面）
  const icons = [cfg.icon, cfg.icon2, cfg.icon3].filter(Boolean);
  const heroImgs = icons.map(ic => '<img src="assets/icons/' + ic + '.jpg" alt="" onerror="this.style.display=\'none\'">').join('');
  const tierBadge = cfg.tier ? '<span class="tier ' + (cfg.tier === 'A+' ? 'Ap' : cfg.tier) + '">' + cfg.tier + ' 梯队</span>' : '';
  const hero = '<div class="spechero">' + heroImgs +
    '<div><h1>' + cfg.h1 + '</h1><div class="meta">' + tierBadge +
    '<span class="badge">' + cfg.crumb.join(' · ') + '</span>' +
    `<span class="badge hot">${PATCH} · ${SEASON_EN}</span></div></div></div>\n\n`;

  // 章节
  const order = [];
  Object.keys(secs).sort((a, b) => +a.slice(1) - +b.slice(1)).forEach(k => order.push(k));
  const newSecs = {
    sTal: '<div class="wrap">\n<div id="talentBox"></div>\n</div>',
    sGear: '<div class="wrap">\n<div id="gearBox"></div>\n</div>',
  };
  // 静态内容内联：爬虫要能直接读到，不能等 JS
  const R = CT.fragments, SK = CT.sk;
  const sets = { enemy: new Set(CT.enemy), own: {} };
  if (CT.own) Object.keys(CT.own).forEach(k => { sets.own[k] = new Set(CT.own[k]) });
  const INLINE = ['clocks', 'setup', 'general', 'sheet', 'killfail', 'defense', 'drtable', 'chainfail'];
  const filled = cfg._filled = new Set();

  let body = '';
  const inject = new Set();
  order.forEach(id => {
    let inner = secs[id];
    // 把渲染好的静态片段塞进各自的容器
    INLINE.forEach(fid => {
      if (!R[fid] || filled.has(fid)) return;
      const r = fill(inner, fid, R[fid]);
      if (r.ok) { inner = r.html; filled.add(fid) }
    });
    // 对阵：所有面板全进 DOM，JS 只切换显示
    const M = CT.match;
    if (M && !filled.has('clsDetail')) {
      let r = fill(inner, 'clsDetail', matchPanels(M, SK, sets, cfg));
      if (r.ok) {
        inner = r.html; filled.add('clsDetail');
        const grid = M.list.map((c, i) => '<button class="cls-btn' + (i === 0 ? ' on' : '') +
          '" data-c="' + c.id + '"' + (c.c ? ' style="--cc:' + c.c + '"' : '') + '>' +
          (c.ic ? '<img src="' + IC(c.ic) + '" alt="" loading="lazy" onerror="this.style.display=\'none\'">' : '') +
          c.n + '</button>').join('');
        const r2 = fill(inner, 'clsGrid', grid);
        if (r2.ok) { inner = r2.html; filled.add('clsGrid') }
      }
    }
    if (id === 's1') inner = inner.replace(/^<div class="wrap">/, '<div class="wrap">\n\n' + hero);
    body += '<section id="' + id + '"' + (id === 's1' ? ' class="on"' : '') + '>' + inner + '</section>\n\n';
    // 在原「判断训练」章节之前插入两个新章节
    if (!inject.has(1) && quizIdx >= 0 && id === CT.nav[quizIdx - 1].s) {
      body += '<section id="sTal">' + newSecs.sTal + '</section>\n\n';
      body += '<section id="sGear">' + newSecs.sGear + '</section>\n\n';
      inject.add(1);
    }
  });
  if (!inject.has(1)) {
    body += '<section id="sTal">' + newSecs.sTal + '</section>\n\n<section id="sGear">' + newSecs.sGear + '</section>\n\n';
  }

  const vsw = cfg.views ? '<div class="vswitch" id="vsw"></div>\n    ' : '';
  const url = DOMAIN + '/' + cfg.file + '.html';

  return `<!DOCTYPE html>
<html lang="zh-CN"${cfg.views ? ' data-view="' + cfg.views[0].k + '"' : ''}>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>${m.title} | ${SITE_NAME}</title>
<meta name="description" content="${m.desc || ''}">
<meta name="keywords" content="${m.keywords || ''}">
<meta name="author" content="${SITE_NAME}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="article">
<meta property="og:title" content="${m.title} | ${SITE_NAME}">
<meta property="og:description" content="${m.desc || ''}">
<meta property="og:url" content="${url}">
<meta property="og:site_name" content="${SITE_NAME}">
<meta property="og:locale" content="zh_CN">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${m.title} | ${SITE_NAME}">
<meta name="twitter:description" content="${m.desc || ''}">
<meta name="robots" content="index,follow">
<link rel="stylesheet" href="${v('assets/css/core.css')}">
${m.jsonld ? '<script type="application/ld+json">' + m.jsonld + '</script>' : ''}
</head>
<body>

<header>
  <div class="wrap hd">
    <a class="brand" href="index.html"><span class="mk">${MARK}</span>${SITE_NAME}</a>
    ${cfg.quiz !== false && (C[cfg.file].quiz || []).length
      ? '<span class="badge" id="pcount">—</span>' : ''}
    <div class="spacer"></div>
    ${vsw}${(C[cfg.file].quiz || []).length
      ? '<span class="badge" id="topAcc">正确率 —</span>' : ''}
    <button class="wishbtn" data-wish>✦ 许愿池</button>
    <button class="tbtn" onclick="toggleTheme()" title="切换深浅色">◐</button>
  </div>
  <div class="wrap"><nav>
    ${navHTML}
  </nav></div>
</header>

<div class="wrap"><div class="crumb"><a href="index.html">${SITE_NAME}</a><i>/</i><a href="index.html#matrix">${cfg.crumb[0]}</a><i>/</i><span>${cfg.crumb[1]}</span></div></div>

${body}<div class="wrap" style="margin-top:38px">
  <h2>换一个练</h2>
  <div class="related" id="related"></div>
</div>

<footer><div class="wrap">
  ${m.footer || ''}
</div></footer>

<script src="${v('assets/js/skdb.js')}"></script>
<script src="${v('data/registry.js')}"></script>
<script src="${v('data/specs/'+cfg.file+'.js')}"></script>
<script src="${v('assets/js/app.js')}"></script>
<script>window.WISH_KEY='${WISH_KEY}';window.WISH_ISSUES='${ISSUES}';</script>
<script src="${v('assets/js/wish.js')}"></script>
</body>
</html>
`;
}

/* ---------- 跑 ---------- */
fs.mkdirSync(path.join(SITE, 'data/specs'), { recursive: true });
fs.mkdirSync(path.join(SITE, 'data/quiz'), { recursive: true });
const KB = n => (n / 1024).toFixed(0).padStart(3);
let first = 0, lazy = 0;
for (const cfg of PAGES) {
  const html = page(cfg);          // 先生成页面（顺带记录哪些片段已内联）
  const dm = dataModule(cfg);      // 再生成数据（跳过已内联的）
  fs.writeFileSync(path.join(SITE, 'data/specs', cfg.file + '.js'), dm.page);
  fs.writeFileSync(path.join(SITE, 'data/quiz', cfg.file + '.js'), dm.quiz);
  fs.writeFileSync(path.join(SITE, cfg.file + '.html'), html);
  const a = Buffer.byteLength(html), b = Buffer.byteLength(dm.page), c = Buffer.byteLength(dm.quiz);
  first += a + b; lazy += c;
  console.log(cfg.file.padEnd(20) +
    '页面 ' + KB(a) + 'KB + 数据 ' + KB(b) + 'KB = 首屏 ' + KB(a + b) + 'KB' +
    '   │ 题库 ' + KB(c) + 'KB（点开才加载，' + C[cfg.file].quiz.length + ' 题）');
}
console.log('\n首屏合计 ' + (first / 1024).toFixed(0) + 'KB / ' + PAGES.length + ' 页  ·  延迟加载 ' + (lazy / 1024).toFixed(0) + 'KB');
console.log('共享且只下一次：core.css ' + KB(fs.statSync(path.join(SITE, 'assets/css/core.css')).size) +
  'KB · app.js ' + KB(fs.statSync(path.join(SITE, 'assets/js/app.js')).size) +
  'KB · skdb.js ' + KB(fs.statSync(path.join(SITE, 'assets/js/skdb.js')).size) + 'KB');
