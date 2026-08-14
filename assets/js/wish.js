/* ============================================================
   许愿池 —— 收集「想先看哪个」。两条投递路径：

     有 KEY  经 Web3Forms 转发到站长邮箱（纯静态站自己发不了邮件）
     没 KEY  开一个填好内容的 GitHub Issue，用户点「提交」即可

   没有 key 时**不要把入口藏起来**——藏起来等于一条信号都收不到，
   而 GitHub 这条路是通的，只是多一步登录。

   access key 写在 window.WISH_KEY（由构建注入），邮箱地址不出现在页面里。
   ============================================================ */
(function () {
'use strict';
var $ = function (i) { return document.getElementById(i) };
var KEY = window.WISH_KEY || '';
var MAIL = !!KEY;                                    // 邮件通道是否可用
var ISSUES = window.WISH_ISSUES || '';
var ENDPOINT = 'https://api.web3forms.com/submit';
var box = null, sending = false;

/* 拼一个填好标题与正文的 GitHub Issue 地址 */
function issueURL(topic, msg, from) {
  if (!ISSUES) return '';
  var body = '## 想看的内容\n' + (topic || '未指定') +
    '\n\n## 具体想说什么\n' + msg +
    (from ? '\n\n## 联系方式\n' + from : '') +
    '\n\n<sub>来自站内许愿池</sub>';
  return ISSUES + '/new?title=' + encodeURIComponent('【许愿】' + (topic || '未指定')) +
    '&body=' + encodeURIComponent(body);
}

/* 待做清单：从注册表现算，不用手工维护 */
function todoOptions() {
  var R = window.REG; if (!R) return '';
  var out = '<option value="">不指定 / 只是想说点别的</option>';
  var specs = (R.flat || []).filter(function (s) { return !s.page });
  if (specs.length) {
    out += '<optgroup label="职业专精（' + specs.length + ' 个未开工）">';
    specs.forEach(function (s) { out += '<option>' + s.n + s.clsName + '</option>' });
    out += '</optgroup>';
  }
  var comps = (R.compList || []).filter(function (c) { return !c.page });
  if (comps.length) {
    out += '<optgroup label="竞技场组合（' + comps.length + ' 组未开工）">';
    comps.forEach(function (c) { out += '<option>' + c.bracket + ' ' + c.name + '</option>' });
    out += '</optgroup>';
  }
  out += '<optgroup label="其他"><option>网站功能建议</option><option>内容纠错</option><option>其他</option></optgroup>';
  return out;
}

function build() {
  box = document.createElement('div');
  box.id = 'wishbox';
  box.innerHTML =
    '<div class="wmask"></div>' +
    '<div class="wpanel" role="dialog" aria-modal="true" aria-labelledby="wtitle">' +
      '<button class="wx" title="关闭">✕</button>' +
      '<h3 id="wtitle">许愿池</h3>' +
      '<p class="wsub">想先看哪个专精或组合，或者对站点有什么建议，写在这里。</p>' +
      '<form id="wform">' +
        '<label class="wl">想看的内容</label>' +
        '<select id="wtopic">' + todoOptions() + '</select>' +
        '<label class="wl">具体想说什么 <span class="wreq">必填</span></label>' +
        '<textarea id="wmsg" rows="5" maxlength="1000" required ' +
          'placeholder="比如：想先看火法，尤其是怎么在被贴脸的时候把窗口做出来"></textarea>' +
        '<div class="wcount"><span id="wnum">0</span> / 1000</div>' +
        '<label class="wl">联系方式 <span class="wopt">选填，想收到回复就留一个</span></label>' +
        '<input id="wfrom" type="text" maxlength="120" placeholder="邮箱 / QQ / 游戏ID，随便哪个">' +
        '<input type="checkbox" id="wbot" tabindex="-1" autocomplete="off" class="wbot">' +
        '<div class="wfoot">' +
          '<button type="submit" class="btn" id="wsend">' +
            (MAIL ? '投进许愿池' : '去 GitHub 提交') + '</button>' +
          '<span class="wnote">' + (MAIL
            ? '不会公开显示，只发到站长邮箱。'
            : '会带着你写的内容打开 GitHub，点一下提交就行——内容公开可见。') + '</span>' +
        '</div>' +
        '<div class="wres" id="wres"></div>' +
      '</form>' +
    '</div>';
  document.body.appendChild(box);

  box.querySelector('.wmask').onclick = close;
  box.querySelector('.wx').onclick = close;
  $('wmsg').addEventListener('input', function () { $('wnum').textContent = this.value.length });
  $('wform').addEventListener('submit', send);
}

function open() {
  if (!box) build();
  box.classList.add('on');
  document.body.style.overflow = 'hidden';
  setTimeout(function () { $('wmsg').focus() }, 60);
}
function close() {
  if (!box) return;
  box.classList.remove('on');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && box && box.classList.contains('on')) close();
});

function result(kind, html) {
  var r = $('wres');
  r.className = 'wres show ' + kind;
  r.innerHTML = html;
}

function send(e) {
  e.preventDefault();
  if (sending) return;
  var msg = $('wmsg').value.trim();
  if (msg.length < 4) { result('bad', '写具体一点，四个字以上。'); return }
  if ($('wbot').checked) return;                     // 蜜罐：机器人才会勾上

  /* 没有邮件通道：直接开填好的 Issue，不走「先失败再退路」 */
  if (!MAIL) {
    var url = issueURL($('wtopic').value, msg, $('wfrom').value.trim());
    if (url) {
      window.open(url, '_blank', 'noopener');
      result('ok', 'GitHub 已经打开了，内容替你填好——<b>点那边的绿色按钮提交就成。</b>');
    } else {
      fallback('提交通道还没配好。');
    }
    return;
  }
  sending = true;
  $('wsend').disabled = true;
  $('wsend').textContent = '发送中…';

  var topic = $('wtopic').value || '（未指定）';
  var from = $('wfrom').value.trim() || '（未留）';
  var payload = {
    access_key: KEY,
    subject: '【许愿池】' + topic,
    from_name: 'WOW打架营地',
    botcheck: false,
    '想看的内容': topic,
    '内容': msg,
    '联系方式': from,
    '来源页面': location.pathname.replace(/^.*\//, '') || 'index.html',
  };
  var done = false;
  var timer = setTimeout(function () {
    if (!done) { done = true; reset(); fallback('网络超时。'); }
  }, 12000);

  fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  })
    .then(function (r) { return r.json() })
    .then(function (d) {
      if (done) return; done = true; clearTimeout(timer); reset();
      if (d && d.success) {
        result('ok', '收到了。<b>感谢——排下一个做什么的时候会看这些。</b>');
        $('wmsg').value = ''; $('wfrom').value = ''; $('wnum').textContent = '0';
      } else {
        fallback('服务端没收下：' + ((d && d.message) || '未知原因') + '。');
      }
    })
    .catch(function () {
      if (done) return; done = true; clearTimeout(timer); reset();
      fallback('没发出去。');
    });
}
function reset() {
  sending = false;
  $('wsend').disabled = false;
  $('wsend').textContent = '投进许愿池';
}

/* 发不出去时的退路：把内容复制走，自己发 issue */
function fallback(why) {
  var topic = $('wtopic').value, msg = $('wmsg').value.trim(), from = $('wfrom').value.trim();
  var txt = '【许愿池】' + (topic || '未指定') + '\n\n' + msg +
    '\n\n联系方式：' + (from || '未留');
  result('bad', why + '内容没丢——' +
    '<button type="button" class="wcopy" id="wcopy">复制内容</button>' +
    '<a href="' + (issueURL(topic, msg, from) || ISSUES || '#') +
    '" target="_blank" rel="noopener">去 GitHub 提交</a>');
  var b = $('wcopy'); if (!b) return;
  b.onclick = function () {
    if (navigator.clipboard) navigator.clipboard.writeText(txt).then(function () { b.textContent = '已复制 ✓' });
    else { var t = document.createElement('textarea'); t.value = txt; document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove(); b.textContent = '已复制 ✓' }
  };
}

window.openWish = open;
document.addEventListener('click', function (e) {
  if (e.target.closest && e.target.closest('[data-wish]')) { e.preventDefault(); open() }
});
})();
