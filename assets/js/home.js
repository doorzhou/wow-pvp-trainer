/* 首页交互：主题、折叠、矩阵筛选、技能浮窗 */
(function () {
'use strict';
var $ = function (i) { return document.getElementById(i) };
var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)) };

/* 主题（与专精页共用同一个键） */
var TKEY = 'banyePvPTheme';
function applyTheme(t) { document.documentElement.dataset.theme = t === 'light' ? 'light' : '' }
try {
  var saved = localStorage.getItem(TKEY);
  if (saved) applyTheme(saved);
  else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) applyTheme('light');
} catch (e) {}
window.toggleTheme = function () {
  var n = document.documentElement.dataset.theme === 'light' ? '' : 'light';
  applyTheme(n);
  try { localStorage.setItem(TKEY, n || 'dark') } catch (e) {}
};

/* 折叠 */
window.tg = function (el) { el.parentElement.classList.toggle('open') };

/* 矩阵筛选 */
var state = { role: 'all', live: 'all', q: '' };
function group(id, key) {
  var g = $(id); if (!g) return;
  g.onclick = function (e) {
    var b = e.target.closest('[data-v]'); if (!b) return;
    state[key] = b.dataset.v;
    $$('button', g).forEach(function (x) { x.classList.toggle('on', x === b) });
    apply();
  };
}
group('fRole', 'role'); group('fLive', 'live');
if ($('fq')) {
  var t = null;
  $('fq').addEventListener('input', function (e) {
    clearTimeout(t);
    var v = e.target.value.trim().toLowerCase();
    t = setTimeout(function () { state.q = v; apply() }, 120);
  });
}
function apply() {
  var shown = 0;
  $$('.clsrow').forEach(function (row) {
    var any = 0;
    $$('.spc', row).forEach(function (s) {
      var ok = (state.role === 'all' || s.dataset.role === state.role) &&
        (state.live === 'all' || s.dataset.live === state.live) &&
        (!state.q || s.dataset.q.indexOf(state.q) >= 0);
      s.classList.toggle('hidden', !ok);
      if (ok) any++;
    });
    row.classList.toggle('hidden', any === 0);
    shown += any;
  });
  var total = $$('.spc').length;
  $('fcount').textContent = shown === total ? total + ' 个专精' : '筛出 ' + shown + ' / ' + total;
}
apply();

/* 规划中的专精：点一下说明还没做 */
$$('.spc.soon').forEach(function (s) {
  s.addEventListener('click', function () {
    var n = s.querySelector('.n').textContent;
    var tip = document.createElement('div');
    tip.className = 'soontip';
    tip.textContent = n + ' 还没开工 —— 框架已就位，内容按梯队顺序往下排。';
    document.body.appendChild(tip);
    requestAnimationFrame(function () { tip.classList.add('on') });
    setTimeout(function () { tip.classList.remove('on'); setTimeout(function () { tip.remove() }, 300) }, 2400);
  });
});

/* 技能浮窗（首页也可能出现 sk 标签） */
var SKDB = window.SKDB || {}, _tip = null;
function tipEl() {
  if (!_tip) { _tip = document.createElement('div'); _tip.id = 'sktip'; document.body.appendChild(_tip) }
  return _tip;
}
document.addEventListener('mouseover', function (e) {
  var el = e.target.closest && e.target.closest('sk,[data-sk]');
  if (!el) { if (_tip) _tip.classList.remove('on'); return }
  var name = (el.dataset && el.dataset.sk) || el.textContent.trim();
  var d = SKDB[name]; if (!d) return;
  var t = tipEl();
  t.innerHTML = '<div class="tn"><img src="assets/icons/' + d.icon + '.jpg" alt="" onerror="this.style.display=\'none\'">' +
    name + '</div>' + (d.meta ? '<div class="tm">' + d.meta + '</div>' : '') +
    '<div class="td">' + d.desc + '</div><div class="tf">Wowhead 官方数据 · 简体中文</div>';
  t.classList.add('on');
  var r = el.getBoundingClientRect(), tr = t.getBoundingClientRect();
  var top = r.bottom + 8, left = r.left;
  if (top + tr.height > window.innerHeight - 8) top = Math.max(8, r.top - tr.height - 8);
  if (left + tr.width > window.innerWidth - 10) left = Math.max(8, window.innerWidth - tr.width - 10);
  t.style.top = top + 'px'; t.style.left = left + 'px';
});
})();
