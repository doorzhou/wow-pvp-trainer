/* ============================================================
   全站共享引擎
   页面只提供数据（window.PAGE），交互与渲染都在这里
   加一个专精 = 写一个 data/specs/<id>.js，不改这个文件
   ============================================================ */
(function () {
'use strict';
var P = window.PAGE || {};
var SKDB = window.SKDB || {};
var $ = function (id) { return document.getElementById(id) };
var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)) };

/* ---------------- 图标与技能徽章 ---------------- */
function IC(f) { return 'assets/icons/' + f + '.jpg' }
window.IC = IC;

var ENEMY = new Set(P.enemy || []);
var OWN = {};                                   // 组合页：技能归属着色
(function () {
  var o = P.own || {};
  Object.keys(o).forEach(function (k) { OWN[k] = new Set(o[k]) });
})();
function skCls(n) {
  if (ENEMY.has(n)) return 'e';
  var ks = Object.keys(OWN);
  for (var i = 0; i < ks.length; i++) if (OWN[ks[i]].has(n)) return ks[i];
  return '';
}
function skHTML(n) {
  var f = (P.sk || {})[n];
  if (!f) return n;
  return '<sk class="' + skCls(n) + '"><img class="ic" src="' + IC(f) +
    '" alt="" loading="lazy" onerror="this.style.display=\'none\'">' + n + '</sk>';
}
function paintSK(root) {
  $$('sk:not([data-done])', root || document).forEach(function (el) {
    var n = el.textContent.trim(), f = (P.sk || {})[n];
    el.dataset.done = '1';
    if (!f) { el.style.background = 'none'; el.style.border = 'none'; el.style.padding = '0'; return }
    var c = skCls(n); if (c) el.classList.add(c);
    el.innerHTML = '<img class="ic" src="' + IC(f) + '" alt="" loading="lazy" onerror="this.style.display=\'none\'">' + n;
  });
}
function icoOnly(n, s) {
  var f = (P.sk || {})[n]; if (!f) return '';
  return '<img class="ic" style="width:' + s + 'px;height:' + s + 'px" src="' + IC(f) +
    '" alt="' + n + '" data-sk="' + n + '" loading="lazy" onerror="this.style.display=\'none\'">';
}
window.paintSK = paintSK; window.skHTML = skHTML; window.icoOnly = icoOnly;

/* ---------------- 技能浮窗 ---------------- */
var _tip = null, _pin = null;
function tipEl() {
  if (!_tip) { _tip = document.createElement('div'); _tip.id = 'sktip'; document.body.appendChild(_tip) }
  return _tip;
}
function showTip(el, name) {
  var d = SKDB[name]; if (!d) return;
  var t = tipEl();
  t.innerHTML = '<div class="tn"><img src="' + IC(d.icon) + '" alt="" onerror="this.style.display=\'none\'">' + name + '</div>' +
    (d.meta ? '<div class="tm">' + d.meta + '</div>' : '') +
    '<div class="td">' + d.desc + '</div>' +
    '<div class="tf">Wowhead 官方数据 · <b>PvE 语境</b>：竞技场里控制时长与部分数值另有调整，' +
    '天赋树里的描述取自 PvP 实测源。</div>';
  t.classList.add('on');
  var r = el.getBoundingClientRect(), tr = t.getBoundingClientRect();
  var top = r.bottom + 8, left = r.left;
  if (top + tr.height > window.innerHeight - 8) top = Math.max(8, r.top - tr.height - 8);
  if (left + tr.width > window.innerWidth - 10) left = Math.max(8, window.innerWidth - tr.width - 10);
  t.style.top = top + 'px'; t.style.left = left + 'px';
}
function hideTip() { if (_tip) _tip.classList.remove('on'); _pin = null }
function skName(el) { return (el.dataset && el.dataset.sk) || el.textContent.trim() }

document.addEventListener('mouseover', function (e) {
  if (_pin) return;
  var el = e.target.closest && e.target.closest('sk,[data-sk]');
  if (el) showTip(el, skName(el)); else hideTip();
});
document.addEventListener('click', function (e) {
  var el = e.target.closest && e.target.closest('sk,[data-sk]');
  if (el) { if (_pin === el) { hideTip() } else { _pin = null; showTip(el, skName(el)); _pin = el } e.stopPropagation() }
  else hideTip();
}, true);
window.addEventListener('scroll', hideTip, { passive: true });

/* ---------------- 主题（持久化） ---------------- */
var TKEY = 'banyePvPTheme';
function applyTheme(t) { document.documentElement.dataset.theme = t === 'light' ? 'light' : '' }
try {
  var saved = localStorage.getItem(TKEY);
  if (saved) applyTheme(saved);
  else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) applyTheme('light');
} catch (e) {}
window.toggleTheme = function () {
  var next = document.documentElement.dataset.theme === 'light' ? '' : 'light';
  applyTheme(next);
  try { localStorage.setItem(TKEY, next || 'dark') } catch (e) {}
};

/* ---------------- 分栏导航 ---------------- */
window.showView = function (id) {
  $$('nav button').forEach(function (x) { x.classList.toggle('on', x.dataset.s === id) });
  $$('section').forEach(function (x) { x.classList.toggle('on', x.id === id) });
  if (history.replaceState) history.replaceState(null, '', '#' + id);
  window.scrollTo(0, 0);
};
$$('nav button').forEach(function (b) { b.onclick = function () { showView(b.dataset.s) } });

/* ---------------- 折叠 ---------------- */
window.tg = function (el) { el.parentElement.classList.toggle('open') };
window.tgm = function (el) { el.parentElement.classList.toggle('open') };
function rowHTML(o) {
  var icons = (o.icons || []).map(function (n) { return icoOnly(n, 20) }).join('');
  return '<div class="row"><div class="h" onclick="tg(this)">' +
    (icons ? '<span class="icrow">' + icons + '</span>' : '') +
    '<span class="t">' + o.t + '</span><span class="sub">' + (o.sub || '') +
    '</span><span class="ar">▸</span></div><div class="b">' + o.b + '</div></div>';
}
window.rowHTML = rowHTML;

/* ---------------- 视角切换（组合页） ---------------- */
if (P.views && $('vsw')) {
  var VKEY = 'banyeView_' + P.id;
  var view = P.views[0].k;
  try { view = localStorage.getItem(VKEY) || view } catch (e) {}
  var applyView = function (v) {
    view = v;
    document.documentElement.dataset.view = v;
    $$('#vsw button').forEach(function (b) { b.classList.toggle('on', b.dataset.v === v) });
    try { localStorage.setItem(VKEY, v) } catch (e) {}
    // 题库筛选设成「跟随当前视角」时，换视角要重开一轮
    var fw = $('fWho');
    if (fw && fw.value === 'cur' && window.QUIZ && window.startQuiz) window.startQuiz(false);
  };
  $('vsw').innerHTML = P.views.map(function (x) {
    return '<button data-v="' + x.k + '">' + x.label + '</button>';
  }).join('');
  $('vsw').onclick = function (e) { var b = e.target.closest('[data-v]'); if (b) applyView(b.dataset.v) };
  applyView(view);
}

/* ---------------- 静态片段注入 ----------------
   必须最先跑：分步器等组件的挂载点就藏在这些片段里 */
Object.keys(P.html || {}).forEach(function (id) {
  var el = $(id); if (el) el.innerHTML = P.html[id];
});

/* ---------------- 开火决策器 ---------------- */
if (P.cond && $('checks')) {
  var goState = {};
  P.cond.forEach(function (c) { goState[c.k] = false });
  $('checks').innerHTML = P.cond.map(function (c) {
    return '<button class="check" data-k="' + c.k + '"><span class="bx">✓</span><span>' +
      '<span class="ct">' + c.t + '</span><span class="cd">' + c.d + '</span></span></button>';
  }).join('');
  $('checks').onclick = function (e) {
    var b = e.target.closest('[data-k]'); if (!b) return;
    var k = b.dataset.k; goState[k] = !goState[k];
    b.classList.toggle('on', goState[k]); renderVerdict();
  };
  function renderVerdict() {
    var on = 0; P.cond.forEach(function (c) { if (goState[c.k]) on++ });
    var lv = P.verdicts[Math.min(on, P.verdicts.length - 1)];
    var missing = P.cond.filter(function (c) { return !goState[c.k] });
    var tags = missing.length
      ? missing.map(function (c) { return '<span class="tagm">缺：' + c.t + '</span>' }).join('')
      : '<span class="tagm g">' + P.cond.length + ' 项齐备</span>';
    $('verdict').className = 'verdict ' + lv.cls;
    $('verdict').innerHTML = lv.html.replace('<!--MISSING-->', '<div class="missing">' + tags + '</div>');
    paintSK($('verdict'));
  }
  renderVerdict();
}

/* ---------------- 开场分步器 ---------------- */
if (P.steps && $('stepBody')) {
  var step = 0;
  function renderStep() {
    var s = P.steps[step];
    $('stepBody').innerHTML =
      '<div class="dots">' + P.steps.map(function (_, i) {
        return '<i class="' + (i < step ? 'done' : i === step ? 'active' : '') + '"></i>'
      }).join('') + '</div>' +
      '<div class="sn">STEP ' + (step + 1) + '</div>' +
      '<div class="st">' + (s[2] ? icoOnly(s[2], 22) : '') + '<span>' + s[0] + '</span></div>' +
      '<div class="sd">' + s[1] + '</div>' +
      '<div class="sf"><button class="btn ghost" onclick="stepGo(-1)" ' + (step === 0 ? 'disabled' : '') + '>← 上一步</button>' +
      '<button class="btn" onclick="stepGo(1)">' + (step === P.steps.length - 1 ? '重新开始 ↺' : '下一步 →') + '</button>' +
      '<span class="sc">' + (step + 1) + ' / ' + P.steps.length + '</span></div>';
    paintSK($('stepBody'));
  }
  window.stepGo = function (d) {
    step = (d > 0 && step === P.steps.length - 1) ? 0 : Math.max(0, step + d);
    renderStep();
  };
  renderStep();
}

/* ---------------- 对阵（专精页 / 组合页两种形态） ----------------
   面板在构建期就全渲进 HTML 了（爬虫要读得到），这里只负责切换显示；
   万一没预渲染（新页还没跑构建），退回运行时渲染 */
if (P.prerendered && $('clsGrid')) {
  var pgrid = $('clsGrid'), pmode = 'arena';
  pgrid.onclick = function (e) {
    var b = e.target.closest('[data-c]'); if (!b) return;
    $$('.cls-btn', pgrid).forEach(function (x) { x.classList.toggle('on', x === b) });
    $$('#clsDetail .mpanel').forEach(function (p) { p.classList.toggle('on', p.dataset.cid === b.dataset.c) });
  };
  if ($('modebar')) $('modebar').onclick = function (e) {
    var b = e.target.closest('[data-m]'); if (!b) return;
    pmode = b.dataset.m;
    $$('#modebar button').forEach(function (x) { x.classList.toggle('on', x.dataset.m === pmode) });
    $$('#clsDetail .modetip').forEach(function (t) { t.classList.toggle('on', t.dataset.m === pmode) });
  };
} else if (P.match && $('clsGrid')) {
  var M = P.match, list = M.list, sel = list[0].id, mode = 'arena';
  var grid = $('clsGrid'), detail = $('clsDetail');
  grid.innerHTML = list.map(function (c) {
    return '<button class="cls-btn' + (c.id === sel ? ' on' : '') + '" data-c="' + c.id + '"' +
      (c.c ? ' style="--cc:' + c.c + '"' : '') + '>' +
      (c.ic ? '<img src="' + IC(c.ic) + '" alt="" loading="lazy" onerror="this.style.display=\'none\'">' : '') +
      c.n + '</button>';
  }).join('');
  grid.onclick = function (e) {
    var b = e.target.closest('[data-c]'); if (!b) return;
    sel = b.dataset.c;
    $$('.cls-btn', grid).forEach(function (x) { x.classList.toggle('on', x.dataset.c === sel) });
    showMatch();
  };
  if ($('modebar')) $('modebar').onclick = function (e) {
    var b = e.target.closest('[data-m]'); if (!b) return;
    mode = b.dataset.m;
    $$('#modebar button').forEach(function (x) { x.classList.toggle('on', x.dataset.m === mode) });
    showMatch();
  };
  function memberCols(m) {
    var mem = M.members || [];
    return '<div class="' + (mem.length === 3 ? 'trio' : 'duo') + '">' +
      mem.map(function (x) {
        return '<div class="c' + x.cls + '"><div class="who">' +
          (x.icon ? '<img src="' + IC(x.icon) + '" alt="" onerror="this.style.display=\'none\'">' : '') +
          x.label + '</div><div class="txt">' + (m[x.k] || '') + '</div></div>';
      }).join('') +
      (m.l ? '<div class="link"><span class="lk">耦合点</span><div>' + m.l + '</div></div>' : '') + '</div>';
  }
  function showMatch() {
    var m = list.find(function (x) { return x.id === sel });
    var html = '<div class="cdetail">';
    if (m.ic) {
      html += '<div class="top"><img src="' + IC(m.ic) + '" alt="" onerror="this.style.display=\'none\'">' +
        '<h3 style="--cc:' + m.c + '">' + m.n + '</h3>' +
        (m.diff ? '<span class="diff">体感：' + m.diff + '</span>' : '') + '</div>';
    } else {
      html += '<h3 style="--cc:' + m.c + '">' + m.n + '</h3>';
    }
    html += '<div class="oneline">' + m.one + '</div>';
    if (m.cards) html += '<div class="cards-line"><span class="lb">他手上的牌</span>' + m.cards.map(skHTML).join('') + '</div>';
    if (m.eg) html += '<div class="egs"><span class="lb">典型</span>' + m.eg.map(function (e) { return '<span class="eg">' + e + '</span>' }).join('') + '</div>';
    if (m.threat) html += '<p style="margin-bottom:10px"><b>威胁在哪：</b>' + m.threat + '</p>';
    if (m.q) html += '<div class="rows">' + m.q.map(function (q, i) {
      return rowHTML({ t: M.qlbl[i], sub: q[0], b: '<p style="margin-top:8px">' + q[1] + '</p>' });
    }).join('') + '</div>';
    if (M.members) html += memberCols(m);
    if (m[mode] && $('modebar')) html += '<div class="modetip"><b>' +
      (mode === 'arena' ? '竞技场判断：' : '单挑补充：') + '</b> ' + m[mode] + '</div>';
    detail.innerHTML = html + '</div>';
    paintSK(detail);
  }
  showMatch();
}

/* ---------------- 角色分配器（3v3） ---------------- */
if (P.assign && $('rgrid')) {
  var A = P.assign, assign = {};
  A.roles.forEach(function (r, i) {
    assign[r.id] = (A.defaults && A.defaults[r.id]) || Object.keys(A.memb)[i];
  });
  $('rgrid').innerHTML = A.roles.map(function (r) {
    return '<div class="rcol"><div class="rn">' + r.n + '</div><div class="rd">' + r.d + '</div>' +
      '<div class="rpick" data-r="' + r.id + '">' +
      Object.keys(A.memb).map(function (k) {
        return '<button data-m="' + k + '"' + (assign[r.id] === k ? ' class="on"' : '') + '>' + A.memb[k] + '</button>';
      }).join('') + '</div></div>';
  }).join('');
  $('rgrid').onclick = function (e) {
    var b = e.target.closest('[data-m]'); if (!b) return;
    var role = b.parentElement.dataset.r;
    assign[role] = b.dataset.m;
    $$('[data-m]', b.parentElement).forEach(function (x) { x.classList.toggle('on', x === b) });
    renderAssign();
  };
  function renderAssign() {
    var vals = A.roles.map(function (r) { return assign[r.id] });
    var uniq = new Set(vals).size;
    var v = A.rules.ok, dup = null;
    if (uniq < A.roles.length) {
      dup = vals.filter(function (x, i) { return vals.indexOf(x) !== i })[0];
      v = { cls: 'bad', ico: '◇', title: A.memb[dup] + ' 被分到了两个角色', desc: A.rules.dupDesc };
    } else {
      for (var i = 0; i < A.rules.warn.length; i++) {
        var w = A.rules.warn[i];
        if (assign[w.role] === w.memb) { v = w; break }
      }
    }
    var out = $('rout');
    out.className = 'rout ' + v.cls;
    var body = '<h3>' + v.ico + ' ' + v.title + '</h3><p>' + v.desc + '</p>';
    if (uniq === A.roles.length) {
      body += '<div class="trio" style="margin-top:4px">' + Object.keys(A.memb).map(function (k) {
        var role = A.roles.find(function (r) { return assign[r.id] === k });
        var mm = A.icons[k];
        return '<div class="c' + mm.cls + '"><div class="who">' +
          '<img src="' + IC(mm.icon) + '" alt="" onerror="this.style.display=\'none\'">' +
          A.memb[k].slice(2) + ' · ' + role.n + '</div>' +
          '<div class="txt">' + A.play[role.id + '_' + k] + '</div></div>';
      }).join('') + '</div>';
    }
    out.innerHTML = body;
    paintSK(out);
  }
  renderAssign();
}

/* 天赋树热力图 —— 布局与使用率来自 Murlok top50 实测，
   分歧格（pages.js 的 picks）在树上高亮，点一下跳到对应判断 */
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;') }
function treeHTML(blocks, picks) {
  var mark = {};
  picks.forEach(function (p, i) { mark[p.en || p.n] = i });
  var h = '<div class="ttree">';
  blocks.forEach(function (b) {
    var cells = [];
    b.groups.forEach(function (g) { g.cells.forEach(function (c) { cells.push(c) }) });
    var cols = Math.max.apply(null, cells.map(function (c) { return c.col || 1 }));
    var picked = cells.filter(function (c) { return c.u > 0 }).length;
    h += '<div class="ttb"><div class="tth">' + b.n +
      '<span>' + cells.length + ' 格 · top50 点过 ' + picked + '</span></div>';
    b.groups.forEach(function (g, gi) {
      h += '<div class="ttg" style="grid-template-columns:repeat(' + cols + ',1fr)">';
      g.cells.forEach(function (c) {
        var st = c.u === 0 ? 'no' : c.u >= 44 ? 'yes' : 'mid';
        var pi = mark[c.n];
        h += '<div class="ttc ' + st + (pi != null ? ' pick' : '') + (c.ch ? ' ch' : '') + '"' +
          ' style="grid-column:' + (c.col || 'auto') + '"' +
          ' role="button" tabindex="0" data-tal="' + esc(c.s || '') + '"' +
          ' data-tn="' + esc(c.n) + '" data-tu="' + c.u + '" data-ti="' + esc(c.ic || '') + '"' +
          (c.ch ? ' data-ch="1"' : '') +
          (pi != null ? ' data-pick="' + pi + '"' : '') +
          ' title="' + esc(c.n) + ' · ' + c.u + '/50' + (c.ch ? ' · 二选一格' : '') + '">' +
          (c.ic ? '<img src="' + IC(c.ic) + '" alt="" loading="lazy" onerror="this.style.visibility=\'hidden\'">' : '') +
          '<span class="cu">' + c.u + '</span></div>';
      });
      h += '</div>';
      if (g.label && b.groups.length > 1 && b.k === 'hero') h += '<div class="ttl">' + esc(g.label) + '</div>';
    });
    h += '</div>';
  });
  return h + '</div><div class="ttlg"><span class="s yes"></span>人人都点' +
    '<span class="s mid"></span>有分歧<span class="s no"></span>没人点' +
    '<span class="s pick"></span>需要你判断（点一下看）' +
    '<span class="s ch"></span>二选一格</div>' +
    '<p class="ttnote">带 <b>⇄</b> 的是<b>二选一格</b>：同一格有两个天赋，只能选一个。' +
    '数据源只统计了多数派选中的那个，<b>另一个选项拿不到分布</b>——' +
    '所以这类格子的「34/50」不等于「16 个人空着这一格」。</p>';
}
/* 天赋描述懒加载：点第一格时才请求，不进首屏 */
var _descState = 0;   // 0 未加载 1 加载中 2 已加载 3 失败
function loadDesc(then) {
  if (_descState === 2 || _descState === 3) return then();
  if (!P.talent || !P.talent.descSrc) { _descState = 3; return then() }
  if (_descState === 1) return;
  _descState = 1;
  var s = document.createElement('script');
  s.src = P.talent.descSrc;
  s.onload = function () { _descState = 2; then() };
  s.onerror = function () { _descState = 3; then() };
  document.head.appendChild(s);
}

/* 天赋浮窗：复用 #sktip 的外观，数据换成 TALDESC（Murlok 英文原文） */
function showTalTip(c) {
  var db = window.TALDESC || {};
  var d = db[c.dataset.tal] || null, t = tipEl();
  var pi = c.dataset.pick;
  t.innerHTML = '<div class="tn">' +
    (c.dataset.ti ? '<img src="' + IC(c.dataset.ti) + '" alt="" onerror="this.style.display=\'none\'">' : '') +
    '<span class="tnn">' + c.dataset.tn + '</span>' +
    (d && d.en ? '<button type="button" class="tfen">EN</button>' : '') + '</div>' +
    (d && d.meta ? '<div class="tm">' + d.meta + '</div>' : '') +
    '<div class="td">' + (d ? d.desc : _descState === 1 ? '载入中…'
      : _descState === 3 ? '描述没加载成功，刷新一下试试。' : '这一格暂时没抓到描述。') + '</div>' +
    (pi != null ? '<div class="tj">这一格需要判断 —— 点这里看什么局面选哪边 ▸</div>' : '') +
    '<div class="tf">top50 里 <b>' + c.dataset.tu + '</b> 人点 · 译自 Murlok.io' +
    (c.dataset.ch ? '<br><b>⇄ 二选一格</b>：同格另一个天赋的分布数据源没给，' +
      '剩下的人不是空着这格，是选了另一个。' : '') + '</div>';
  t.classList.add('on');
  var r = c.getBoundingClientRect(), tr = t.getBoundingClientRect();
  var top = r.bottom + 8, left = r.left;
  if (top + tr.height > window.innerHeight - 8) top = Math.max(8, r.top - tr.height - 8);
  if (left + tr.width > window.innerWidth - 10) left = Math.max(8, window.innerWidth - tr.width - 10);
  t.style.top = top + 'px'; t.style.left = left + 'px';
  var j = t.querySelector('.tj');
  if (j) j.onclick = function () { hideTip(); jumpPick(document.getElementById('talentBox'), pi) };
  var en = t.querySelector('.tfen');
  if (en) {
    var zh = true, body = t.querySelector('.td');
    en.onclick = function (e) {
      e.stopPropagation();
      zh = !zh;
      body.textContent = zh ? d.desc : d.en;
      body.classList.toggle('rawen', !zh);
      en.textContent = zh ? 'EN' : '中';
      en.classList.toggle('on', !zh);
    };
  }
  _pin = c;   // 钉住，否则全局 mouseover 会把刚弹出来的浮窗立刻关掉
}
function bindTree(el) {
  var open = function (c) {
    showTalTip(c);                                  // 先弹出（可能是「载入中…」）
    loadDesc(function () { if (_pin === c) showTalTip(c) });  // 数据到了就地重画
  };
  el.addEventListener('click', function (e) {
    var c = e.target.closest('.ttc'); if (!c) return;
    e.stopPropagation(); open(c);
  });
  el.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var c = e.target.closest && e.target.closest('.ttc'); if (!c) return;
    e.preventDefault(); open(c);
  });
}
function jumpPick(el, i) {
  var cards = el.querySelectorAll('.pk'), t = cards[+i]; if (!t) return;
  [].forEach.call(cards, function (x) { x.classList.remove('lit') });
  t.classList.add('lit');
  t.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/* ---------------- 天赋 / 装备（新版块） ---------------- */
function renderTalent() {
  var T = P.talent, el = $('talentBox'); if (!el) return;
  if (!T) { el.innerHTML = todoHTML('天赋定盘'); return }
  var h = '';
  if (T.imp) {
    h += '<div class="imp"><div class="impk">' +
      '<span class="impt">天赋导入串</span>' +
      '<code class="impc">' + T.imp.str + '</code>' +
      '<button class="impb" type="button">复制</button></div>' +
      '<div class="impn"><b>来源：' + T.imp.who + '</b>（' + T.imp.where +
      ' · ' + T.imp.rating + '）。' + T.imp.note +
      (T.imp.at ? '<br><span class="dimtx">' + T.imp.at +
        ' 的快照。玩家随时会改配点，这串只代表当时那一套。</span>' : '') +
      '</div></div>';
  }
  h += '<div class="tal">';
  (T.rows || []).forEach(function (r) {
    h += '<div class="talrow' + (r.todo ? ' locked' : '') + '"><div class="lb">' + r.lb + '</div>' +
      '<div class="vv">' + (r.todo ? '<span class="pend">待补充</span>' : r.vv) + '</div></div>';
  });
  h += '</div>';
  if (T.note) h += '<div class="note" style="margin-top:12px">' + T.note + '</div>';
  var TR = T.tree;
  if (TR) {
    h += '<h2>职业树 / 专精树</h2><div class="stread">' + TR.survey + '</div>';
    if (T.treeData) h += treeHTML(T.treeData, TR.picks || []);
    h += '<div class="picks">' + (TR.picks || []).map(function (p) {
      return '<div class="pk"><div class="pkh"><span class="pn">' + p.n +
        (p.en ? '<i>' + p.en + '</i>' : '') + '</span>' +
        '<span class="pt">' + p.tree + '</span>' +
        '<span class="pbar"><i style="width:' + (p.u / 50 * 100) + '%"></i></span>' +
        '<span class="pu"><b>' + p.u + '</b>/50</span></div>' +
        '<div class="pkb">' + p.b + '</div></div>';
    }).join('') + '</div>';
    if (TR.src) h += '<div class="stsrc">' + TR.src + '</div>';
  }
  el.innerHTML = h; paintSK(el);
  if (TR && T.treeData) bindTree(el);
  var ib = el.querySelector('.impb');
  if (ib) ib.onclick = function () { copyStr(T.imp.str, ib) };
}
/* 复制：clipboard API → execCommand → 都不行就把串选中让用户自己按 Ctrl+C。
   前两条都依赖页面有焦点、是安全上下文，不能假定一定可用 */
function copyStr(s, btn) {
  var done = function (ok) {
    if (!ok) selectStr(btn);
    btn.textContent = ok ? '已复制' : '已选中，按 Ctrl/⌘+C';
    btn.classList.toggle('done', ok);
    setTimeout(function () { btn.textContent = '复制'; btn.classList.remove('done') }, 2600);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(s).then(function () { done(true) }, function () { done(fallback(s)) });
  } else done(fallback(s));
}
function selectStr(btn) {
  var code = btn.parentElement.querySelector('.impc'); if (!code) return;
  code.classList.add('sel');
  try {
    var r = document.createRange(); r.selectNodeContents(code);
    var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
  } catch (e) {}
}
function fallback(s) {
  try {
    var t = document.createElement('textarea');
    t.value = s; t.style.position = 'fixed'; t.style.opacity = '0';
    document.body.appendChild(t); t.select();
    var ok = document.execCommand('copy');
    document.body.removeChild(t);
    return ok;
  } catch (e) { return false }
}
function renderGear() {
  var G = P.gear, el = $('gearBox'); if (!el) return;
  var h = '';
  if (G && G.stats) {
    h += '<h2>属性优先级</h2><div class="stats">' + G.stats.map(function (s) {
      return '<div class="strow' + (s.pct == null ? ' unknown' : '') + (s.mid ? ' mid' : '') + (s.dim ? ' dim' : '') + '"><span class="sn">' + s.n + '</span>' +
        '<span class="sbar"><i style="width:' + (s.pct == null ? 100 : s.pct) + '%"></i></span>' +
        '<span class="sv">' + (s.v || '待实测') + '</span></div>';
    }).join('') + '</div>';
    if (G.statRead) h += '<div class="stread">' + G.statRead + '</div>';
    if (G.statSrc) h += '<div class="stsrc">' + G.statSrc + '</div>';
  } else if (G && G.refer) {
    h += '<h2>属性优先级</h2><div class="stread">' + G.referNote + '</div>';
    h += '<div class="refer">' + G.refer.map(function (m) {
      var ico = '<img class="ic" src="' + IC(m.ic) + '" alt="" loading="lazy" onerror="this.style.display=\'none\'">';
      var body = ico + '<span class="n">' + m.n + '</span>';
      return m.page
        ? '<a class="rfc" href="' + m.page + '">' + body + '<span class="go">看属性 ▸</span></a>'
        : '<div class="rfc off">' + body + '<span class="go">待补充</span></div>';
    }).join('') + '</div>';
  } else {
    h += '<h2>属性优先级</h2>' + todoHTML('本专精的副属性排序');
  }
  var whatRow = {
    t: '四个副属性在 PvP 里各自意味着什么', sub: '全能双向 / 精通逐专精',
    b: '<div class="stwhat">' + GEAR_COMMON.what.map(function (w) {
      return '<div class="stw"><div class="h">' + w.h + '</div><div class="d">' + w.d + '</div></div>';
    }).join('') + '</div>'
  };
  h += '<h2>装备通则（所有专精共用）</h2><div class="rows">' +
    rowHTML(whatRow) + GEAR_COMMON.rows.map(rowHTML).join('') + '</div>';
  if (G && G.extra) h += G.extra;
  el.innerHTML = h; paintSK(el);
}
function todoHTML(what) {
  return '<div class="todo"><span class="tag">待补充</span><span class="tx">' + what + '</span></div>';
}

/* PvP 装备通则 —— 全站共用，写机制不写数值 */
var GEAR_COMMON = {
  what: [
    { h: '全能 Versatility', d: '同时提高伤害和降低受到的伤害。<b>PvP 里唯一双向生效的副属性</b>——不知道该堆什么的时候，堆它通常不亏。' },
    { h: '急速 Haste', d: '缩短公共冷却与施法时间，等于<b>同一个窗口里能多按几下</b>。要抢窗口、要接控制链的专精吃得最多。' },
    { h: '爆击 Critical Strike', d: '提高上限但增大方差。<b>能打出斩杀窗口，也可能这一轮就是打不动</b>。压制型玩法喜欢，稳定型玩法不喜欢。' },
    { h: '精通 Mastery', d: '每个专精的效果完全不同，<b>没有通用结论</b>——必须看自己专精的精通具体加什么。这也是唯一必须逐专精查的副属性。' },
  ],
  rows: [
    {
      t: 'PvP 装备为什么必须穿 PvP 装', sub: '装等在 PvP 场景里会重算',
      b: '<p>PvP 装备进到评级 PvP 场景里会按 <b>PvP 装等</b>生效，普通 PvE 装备不会。' +
        '这意味着<b>一件装等更高的 PvE 装，在竞技场里可能反而更弱</b>。</p>' +
        '<p style="margin-top:8px">PvE 装备可以用 <b>PvP 涂层（PvP varnish）</b>获得同样的 PvP 装等缩放，' +
        '花费与直接买 PvP 件相同的征服点。所以想留一件特效好的 PvE 装，是有办法的——但要付代价。</p>' +
        '<div class="note" style="margin-top:10px">12.0.7 将各条 PvP 装备线的装等整体上调 9。' +
        '本站按相对关系描述：<b>PvP 场景内，带 PvP 缩放的一律优于不带的</b>。</div>'
    },
    {
      t: '两种货币，两个阶段', sub: '荣誉起步，征服收尾',
      b: '<p><b>荣誉点</b>——起步装。刷战场/随机 PvP 就有，用来把身上的空位快速填满。' +
        '目标是<b>先没有短板</b>，不是先有一件好的。</p>' +
        '<p style="margin-top:8px"><b>征服点</b>——毕业装，每周有上限，赛季第一周上限较低、之后逐周累加。' +
        '因为有周上限，<b>先买哪个部位是真的要选</b>。</p>' +
        '<p style="margin-top:8px"><b>血腥代币</b>——每周 PvP 任务给的替代货币，换到的装等与荣誉装同级，用来补位。</p>' +
        '<div class="note" style="margin-top:10px"><b>先买大件。</b>头 / 胸 / 腿征服点消耗高、属性收益也最大；' +
        '手 / 肩便宜，可先用荣誉装顶着。<b>周上限强制排序，不要平均分配。</b></div>'
    },
    {
      t: '套装是通过催化器转的', sub: '不是刷出来的',
      b: '<p>征服装买回来之后，去<b>催化器（Catalyst）</b>转成套装部位。充能是<b>每两周一次</b>，' +
        '达到一定评级会额外送充能。</p>' +
        '<p style="margin-top:8px"><b>套装成型有固定时间表。</b>赛季前几周不可能有 4 件套，' +
        '这段时间的配装目标是<b>把属性和装等拉起来</b>，不是凑套装。</p>'
    },
    {
      t: '饰品：一个位置是留给解控的', sub: '这不是配装问题，是生死问题',
      b: '<p>PvP 饰品栏里<b>必须有一个解控位</b>。你可以为了输出把另一个位置换成属性饰品，' +
        '但把两个都换掉，等于把"被控住就直接死"写进了自己的配装。</p>' +
        '<p style="margin-top:8px"><b>人类种族的额外解控是被动的</b>——这就是为什么很多 PvP 玩家选人类：' +
        '它相当于白送一个饰品位。</p>' +
        '<div class="note" style="margin-top:10px">对所有专精成立，治疗尤其——治疗被控住的代价最大。</div>'
    },
    {
      t: '附魔、宝石、合剂', sub: '按属性优先级走，别按 PvE 攻略',
      b: '<p>这三样的选择<b>完全跟着你的属性优先级走</b>。PvE 攻略里的推荐经常不适用——' +
        'PvE 追求的是持续输出，PvP 追求的是<b>在窗口里活着并打出伤害</b>。</p>' +
        '<p style="margin-top:8px">制造装上的<b>镶嵌特效（embellishment）</b>是另一条线，' +
        '输出与治疗的推荐不同，且每个赛季都在变——这块请查当前赛季的专精攻略。</p>'
    },
  ],
};

/* ---------------- 相关专精导航 ---------------- */
function renderRelated() {
  var el = $('related'); if (!el || !window.REG) return;
  var R = window.REG;
  var items = (R.flat || []).filter(function (s) { return s.page && s.page !== P.file })
    .map(function (s) { return { n: s.full, en: s.en, page: s.page, ics: [s.ic] } })
    .concat((R.compList || []).filter(function (c) { return c.page && c.page !== P.file }).map(function (c) {
      return {
        n: c.name, en: c.bracket + ' · ' + c.make, page: c.page,
        ics: c.members.map(function (m) {
          var cl = R.classes.find(function (x) { return x.id === m });
          return cl ? cl.ic : null;
        }).filter(Boolean),
      };
    }));
  el.innerHTML = items.map(function (s) {
    var icons = s.ics.map(function (i, n) {
      return '<img src="' + IC(i) + '" alt=""' + (n ? ' style="margin-left:-13px"' : '') +
        ' onerror="this.style.display=\'none\'">';
    }).join('');
    return '<a class="rel" href="' + s.page + '"><span style="display:flex;flex-shrink:0">' + icons + '</span>' +
      '<span><span class="n">' + s.n + '</span><br><span class="e">' + (s.en || '') + '</span></span></a>';
  }).join('');
}

/* ---------------- 判断训练 ---------------- */
// 题库到位之前先占住这几个全局，免得手快点到按钮报错
window.startQuiz = window.clearFilter = window.resetStats = window.next = function () {};
window.pick = function () {};

function bootQuiz() {
  var Q = window.QUIZ || [], LBL = P.quiz.label || {}, ICOM = P.quiz.icon || {};
  var DIFF = { 1: ['基础 · 机制', 'd1'], 2: ['进阶 · 时机', 'd2'], 3: ['高阶 · 权衡', 'd3'] };
  var SEC = P.quiz.section || 's4', STORE = P.quiz.store;
  // 两种筛选形态：
  //   专精页 fCat —— 按题目分类（q.t），选项在这里动态补
  //   组合页 fWho —— 按视角（q.w，r/p/h/b），选项写死在 HTML 里，还有个「跟随当前视角」
  var KEY = P.quiz.key || 't';
  var fSel = $(P.quiz.filterId || 'fCat'), fDiff = $('fDiff');
  var V2C = P.quiz.v2c || null;
  if (KEY === 't') {
    Array.from(new Set(Q.map(function (q) { return q.t }))).forEach(function (t) {
      var o = document.createElement('option'); o.value = t;
      o.textContent = (LBL[t] || t) + '（' + Q.filter(function (q) { return q.t === t }).length + '）';
      fSel.appendChild(o);
    });
  }
  if (fSel) fSel.onchange = function () { startQuiz(false) };
  if (fDiff) fDiff.onchange = function () { startQuiz(false) };

  var stats = { played: 0, correct: 0, best: 0, wrong: [] };
  try { stats = Object.assign(stats, JSON.parse(localStorage.getItem(STORE) || '{}')) } catch (e) {}
  var run = [], qi = 0, score = 0, streak = 0, answered = false, wrongMode = false;

  function save() { try { localStorage.setItem(STORE, JSON.stringify(stats)) } catch (e) {} updStats() }
  function updStats() {
    var acc = stats.played ? Math.round(stats.correct / stats.played * 100) + '%' : '—';
    if ($('stPlayed')) $('stPlayed').textContent = stats.played;
    if ($('stAcc')) $('stAcc').textContent = acc;
    if ($('stBest')) $('stBest').textContent = stats.best;
    if ($('stWrong')) $('stWrong').textContent = stats.wrong.length;
    if ($('topAcc')) $('topAcc').textContent = '正确率 ' + acc;
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t }
    return a;
  }
  window.clearFilter = function () { fSel.value = 'all'; fDiff.value = 'all'; startQuiz(false) };
  window.startQuiz = function (w) {
    wrongMode = !!w;
    var v = fSel.value;
    // 组合页：'cur' 跟随当前视角；'b'（双方/全队）的题在任何视角下都练
    var wf = (KEY === 'w' && v === 'cur') ? (document.documentElement.dataset.view || 'all') : v;
    var pool = Q.filter(function (q) {
      var okKey = KEY === 'w'
        ? (wf === 'all' || q.w === 'b' || q.w === (V2C ? V2C[wf] : wf))
        : (v === 'all' || q.t === v);
      return okKey && (fDiff.value === 'all' || q.d === +fDiff.value);
    });
    if (wrongMode) pool = pool.filter(function (q) { return stats.wrong.indexOf(q.id) >= 0 });
    if (!pool.length) {
      $('quizArea').innerHTML = '<div class="qcard done"><div class="big">○</div><p>' +
        (wrongMode ? '错题库里没有符合这个筛选的题。先做一轮普通训练，答错的会自动进来。' : '这个筛选下没有题目，换一个范围或难度。') +
        '</p><button class="btn" onclick="clearFilter()">开始混合训练</button></div>';
      return;
    }
    run = shuffle(pool).slice(0, 10);
    run.forEach(function (q) { q._perm = null });
    qi = 0; score = 0; streak = 0; answered = false; render();
  };
  function render() {
    var area = $('quizArea'), q = run[qi]; answered = false;
    if (!q._perm) q._perm = shuffle(q.o.map(function (_, i) { return i }));
    var kv = q[KEY];
    var ico = ICOM[kv] ? '<img src="' + IC(ICOM[kv]) + '" alt="" onerror="this.style.display=\'none\'">' : '';
    var tcls = (KEY === 'w' ? 'who ' : '') + (P.quiz.tagCls ? (P.quiz.tagCls[kv] || '') : '');
    area.innerHTML = '<div class="qcard">' +
      '<div class="qmeta"><span class="qtag ' + tcls + '">' + ico + (LBL[kv] || kv) + '</span>' +
      '<span class="qtag ' + DIFF[q.d][1] + '">' + DIFF[q.d][0] + '</span>' +
      '<span class="qtag">' + (wrongMode ? '错题重练 ' : '') + (qi + 1) + ' / ' + run.length + '</span></div>' +
      '<div class="prog"><i style="width:' + (qi / run.length * 100) + '%"></i></div>' +
      '<div class="qscene">' + q.s + '</div><div class="qask">' + q.a + '</div>' +
      '<div class="opts">' + q._perm.map(function (oi, i) {
        return '<div><button class="opt" data-i="' + i + '" onclick="pick(' + i + ')">' +
          '<span class="idx">' + (i + 1) + '</span><span>' + q.o[oi] + '</span></button>' +
          '<div class="fb" id="fb' + i + '"></div></div>';
      }).join('') + '</div>' +
      '<div class="rule" id="rule"><div class="h">可迁移的那一条</div><div class="t">' + q.k + '</div></div>' +
      '<div class="qfoot"><button class="btn" id="next" onclick="next()" disabled>' +
      (qi === run.length - 1 ? '查看结果' : '下一题 →') + '</button>' +
      '<span style="color:var(--tx3);font-size:12.5px" id="hint">按 <span class="kbd">1</span><span class="kbd">2</span>' +
      '<span class="kbd">3</span><span class="kbd">4</span> 选择，<span class="kbd">Enter</span> 下一题</span></div></div>';
    paintSK(area);
  }
  window.pick = function (i) {
    if (answered) return; answered = true;
    var q = run[qi], orig = q._perm[i], ok = orig === q.r;
    stats.played++;
    if (ok) {
      stats.correct++; score++; streak++;
      stats.best = Math.max(stats.best, streak);
      stats.wrong = stats.wrong.filter(function (x) { return x !== q.id });
    } else {
      streak = 0;
      if (stats.wrong.indexOf(q.id) < 0) stats.wrong.push(q.id);
    }
    save();
    $$('.opt').forEach(function (b) {
      var bi = +b.dataset.i, bo = q._perm[bi];
      b.classList.add('locked');
      if (bo === q.r) b.classList.add('right'); else if (bi === i) b.classList.add('wrong'); else b.classList.add('dim');
      if (bo === q.r || bi === i) {
        var fb = $('fb' + bi);
        fb.className = 'fb show ' + (bo === q.r ? 'g' : 'b');
        fb.innerHTML = '<span class="h">' + (bo === q.r ? '✓ 正解' : '✕ 你的选择') + '</span>' + q.e[bo];
      }
    });
    paintSK($('quizArea'));
    $('rule').classList.add('show');
    $('next').disabled = false;
    $('hint').innerHTML = ok ? '判断正确 · <span class="kbd">Enter</span> 继续' : '想清楚为什么 · <span class="kbd">Enter</span> 继续';
  };
  window.next = function () {
    if (!answered) return;
    if (qi < run.length - 1) {
      qi++; render();
      var nv = document.querySelector('nav');
      if (nv) window.scrollTo({ top: nv.offsetTop, behavior: 'smooth' });
    } else {
      var pct = Math.round(score / run.length * 100);
      var t = P.quiz.done || {};
      var txt = pct >= 90 ? (t.hi || '你已经在看"条件"，不是在背技能。')
        : pct >= 70 ? (t.mid || '基础判断成立，把错题再过一轮。')
          : (t.lo || '先回骨架页把判断条件过一遍。');
      $('quizArea').innerHTML = '<div class="qcard done"><div class="big">' + score + ' / ' + run.length + '</div>' +
        '<p>' + pct + '% · ' + txt + '</p><div style="display:flex;gap:9px;justify-content:center;flex-wrap:wrap">' +
        '<button class="btn" onclick="startQuiz(false)">再来 10 题</button>' +
        (stats.wrong.length ? '<button class="btn ghost" onclick="startQuiz(true)">练错题（' + stats.wrong.length + '）</button>' : '') +
        '<button class="btn ghost" onclick="showView(\'s1\')">回看骨架</button></div></div>';
    }
  };
  window.resetStats = function () {
    if (confirm('清空这台浏览器里的训练记录？')) {
      stats = { played: 0, correct: 0, best: 0, wrong: [] }; save(); startQuiz(false);
    }
  };
  document.addEventListener('keydown', function (e) {
    var s = $(SEC); if (!s || !s.classList.contains('on')) return;
    if (['1', '2', '3', '4'].indexOf(e.key) >= 0 && !answered) {
      var b = document.querySelector('.opt[data-i="' + (+e.key - 1) + '"]'); if (b) b.click();
    }
    if (e.key === 'Enter' && answered) { var n = $('next'); if (n && !n.disabled) n.click() }
  });
  updStats(); startQuiz(false);
}

/* 题库延迟加载：点开「判断训练」那一刻才去拿，首屏不背它 */
if (P.quiz && $('quizArea')) {
  if ($('pcount')) $('pcount').textContent = P.quiz.count + ' 道判断题';
  var quizLoaded = false;
  var loadQuiz = function () {
    if (quizLoaded) return; quizLoaded = true;
    $('quizArea').innerHTML = '<div class="qcard done"><div class="big">⋯</div><p>正在载入题库…</p></div>';
    var s = document.createElement('script');
    s.src = P.quiz.src;
    s.onload = function () { bootQuiz() };
    s.onerror = function () {
      $('quizArea').innerHTML = '<div class="qcard done"><div class="big">✕</div><p>题库没加载成功，刷新一下试试。</p></div>';
    };
    document.head.appendChild(s);
  };
  var quizSec = $(P.quiz.section);
  var _showView = window.showView;
  window.showView = function (id) {
    _showView(id);
    if (id === P.quiz.section) loadQuiz();
  };
  if (quizSec && quizSec.classList.contains('on')) loadQuiz();
  if (location.hash === '#' + P.quiz.section) loadQuiz();
}

/* ---------------- 启动 ---------------- */
renderTalent();
renderGear();
renderRelated();
paintSK(document);
if (location.hash && $(location.hash.slice(1)) && $(location.hash.slice(1)).tagName === 'SECTION') {
  showView(location.hash.slice(1));
}
})();
