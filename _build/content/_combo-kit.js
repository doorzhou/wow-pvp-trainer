const { PATCH, SEASON } = require('../config.js');

function makeCombo(c) {
  const row = (x) => '<div class="row"><div class="h" onclick="tg(this)"><span class="icrow">' +
    (x.skills || []).map(s => '<img class="ic" data-sk="' + s + '" style="width:20px;height:20px">').join('') +
    '</span><span class="t">' + x.title + '</span><span class="sub">' + (x.sub || '') +
    '</span><span class="ar">▸</span></div><div class="b"><p>' + x.body + '</p></div></div>';
  const rows = list => '<div class="rows">' + list.map(row).join('') + '</div>';
  const trio = '<div class="trio">' + c.roles.map(r => '<div class="c' + r.cls + '"><div class="who"><img src="assets/icons/' + r.icon + '.jpg" alt="">' + r.label + '</div><div class="txt">' + r.job + '</div></div>').join('') + '<div class="link"><span class="lk">耦合点</span><div>' + c.link + '</div></div></div>';
  const quiz=[];
  c.scenarios.forEach((x,i)=>c.roles.forEach((r,ri)=>{
    const wrong=(c.wrong[r.k]||[]).slice(); while(wrong.length<3) wrong.push('单独交完自己的全部资源。');
    quiz.push({id:c.id+'-'+r.k+'-'+String(i+1).padStart(2,'0'),w:r.k,d:(i%3)+1,s:x.s+'<br><span class="dimtx">你是'+r.label+'。</span>',a:'现在最该做什么？',o:[x[r.k],wrong[(i+ri)%wrong.length],wrong[(i+ri+1)%wrong.length],wrong[(i+ri+2)%wrong.length]],r:0,e:['正解。'+x.k,'这会让队伍的两种压力错开。','这会把位置风险放大。','三人组合不能靠单人补救。'],k:x.k});
  }));
  return {
    meta:{title:c.title+' · '+PATCH+' Midnight',desc:c.desc,keywords:c.keywords,footer:'Patch '+PATCH+' · '+SEASON+'。组合收录与打法事实参考 '+c.source+'；技能中文名与图标来自 Wowhead 官方数据接口。<br><a href="index.html">← 返回全部训练器</a> · <a href="index.html#legal">数据来源与免责声明</a>',jsonld:null},
    nav:[{s:'s1',label:'骨架'},{s:'s2',label:'进攻链'},{s:'s3',label:'防守链'},{s:'s4',label:'分对局'},{s:'s5',label:'判断训练'},{s:'s6',label:'赛前速查'}],
    sections:{
      s1:'<div class="wrap"><div class="thesis"><div class="lbl">这组唯一要记住的一句</div><div class="big">'+c.thesis+'</div></div><h2>它不是哪一组的换皮</h2>'+rows(c.why)+'<h2>三个人的分工</h2>'+trio+'</div>',
      s2:'<div class="wrap"><p class="lead">每一轮按这个顺序收。</p>'+rows(c.attack)+'</div>',
      s3:'<div class="wrap"><p class="lead">防守不是停战，是保住下一轮的两种压力。</p>'+rows(c.defense)+'</div>',
      s4:'<div class="wrap"><p class="lead">按对面拆你们的方法分。</p>'+rows(c.matchups)+'</div>',
      s5:'<div class="wrap"><div class="statbar"><div class="stat"><span class="k">累计答题</span><span class="v" id="stPlayed">0</span></div><div class="stat"><span class="k">总正确率</span><span class="v" id="stAcc">—</span></div><div class="stat"><span class="k">最长连对</span><span class="v" id="stBest">0</span></div><div class="stat"><span class="k">错题库</span><span class="v" id="stWrong">0</span></div></div><div class="qtop"><select id="fWho"><option value="cur">跟随当前视角</option><option value="all">三个视角都练</option>'+c.roles.map(r=>'<option value="'+r.view+'">只练'+r.label+'</option>').join('')+'</select><select id="fDiff"><option value="all">全部难度</option><option value="1">基础 · 机制</option><option value="2">进阶 · 时机</option><option value="3">高阶 · 权衡</option></select><button class="btn" onclick="startQuiz(false)">开始一轮（10 题）</button><button class="btn ghost" onclick="startQuiz(true)">只练错题</button><button class="btn ghost" onclick="resetStats()">清空记录</button></div><div id="quizArea"></div></div>',
      s6:'<div class="wrap"><div class="sheet">'+c.roles.map(r=>'<div class="sc '+r.tag+'"><h4 class="tt">'+r.label+'</h4>'+r.sheet.map(x=>'<div class="line">'+x+'</div>').join('')+'</div>').join('')+'</div></div>',
    },
    fragments:{},sk:c.sk,enemy:[],own:c.own,cond:null,verdicts:null,steps:null,match:null,roles:null,memb:null,play:null,quiz,
  };
}
module.exports={makeCombo};
