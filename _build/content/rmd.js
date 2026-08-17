/* 内容模块 · rmd
   主线：恢复德先把治疗预付在场上，才有资格离开柱子接控制。
   RMD 不是更慢的 RMP；它用提前铺好的治疗，换第三个人加入 setup。
   题目 51 道（17 个局面 × 三视角）。 */
const { PATCH, SEASON } = require('../config.js');

const row = (title, sub, body, skills = []) =>
  '<div class="row"><div class="h" onclick="tg(this)"><span class="icrow">' +
  skills.map(s => '<img class="ic" data-sk="' + s + '" style="width:20px;height:20px">').join('') +
  '</span><span class="t">' + title + '</span><span class="sub">' + sub +
  '</span><span class="ar">▸</span></div><div class="b">' + body + '</div></div>';

const trio = (r, m, d, link) => '<div class="trio">' +
  '<div class="cR"><div class="who"><img src="assets/icons/classicon_rogue.jpg" alt="">贼</div><div class="txt">' + r + '</div></div>' +
  '<div class="cM"><div class="who"><img src="assets/icons/classicon_mage.jpg" alt="">法师</div><div class="txt">' + m + '</div></div>' +
  '<div class="cP"><div class="who"><img src="assets/icons/classicon_druid.jpg" alt="">恢复德</div><div class="txt">' + d + '</div></div>' +
  '<div class="link"><span class="lk">耦合点</span><div>' + link + '</div></div></div>';

const S = [
  { s:'开门后贼已经摸到治疗，法师爆发可用，但恢复德还没给可能被集火的人铺持续治疗。',
    r:'报位置但不开窗，等恢复德确认预铺完成。', m:'保留爆发，先用控制和位置保护恢复德完成预铺。', d:'先铺<sk>回春术</sk>与<sk>生命绽放</sk>，再报可以进场。', k:'RMD 的第一扇窗从预铺完成开始，不从贼摸到人开始。' },
  { s:'三个人状态完整，对面治疗没有失能递减，击杀目标也没有眩晕递减。',
    r:'控第三人、晕击杀目标，明确喊出这一轮开始。', m:'等贼的眩晕落下再交爆发，避免伤害提前泄露。', d:'用<sk>旋风</sk>接治疗控制，同时保持队友身上的持续治疗。', k:'完整 setup 要同时处理治疗、第三人和击杀目标。' },
  { s:'贼已经用<sk>闷棍</sk>控住治疗，法师准备接<sk>变形术</sk>，恢复德也在读<sk>旋风</sk>。',
    r:'立刻叫停变形，指定由旋风接下一段。', m:'取消变形，把施法预算留给伤害或第三人。', d:'完成旋风；它不和闷棍抢同一条失能递减。', k:'RMD 的价值是多一条控制类别，不是三个人同时控一个人。' },
  { s:'恢复德为了接控制离开柱子，对面两名输出立刻转火他。',
    r:'用控制截住追击者，给恢复德回柱子的路。', m:'用减速和定身切断追击，不追着原目标打。', d:'停止进攻控制，回柱并切形态自保。', k:'治疗进场是一次借款；被转火就立刻还掉位置风险。' },
  { s:'目标已经很低，但你们这一轮的爆发结束，对面治疗即将重新开始治疗。',
    r:'停止追加便宜伤害，准备下一轮控制与退场。', m:'保留下一轮资源，不为低血量追进危险位置。', d:'对低血目标补<sk>旋风</sk>，冻结血量并阻止治疗。', k:'低血旋风不是救对面，是把未结算的击杀留到下一轮。' },
  { s:'法师正在被双近战追，恢复德的持续治疗都在，贼手里还有控制。',
    r:'控住其中一个追击者，别急着单独开杀窗。', m:'向恢复德方向拉，按顺序交位移和自保。', d:'保持预铺，优先用根须或旋风减掉一份伤害。', k:'法师被压时先把二打一变成一打一，才谈反打。' },
  { s:'恢复德被长控，法师半血但身上持续治疗齐全，对面没有开主爆发。',
    r:'用短控拖时间，不替恢复德交掉整套进攻牌。', m:'相信场上的持续治疗，先拉位置而不是立刻冰箱。', d:'控结束后先恢复位置与持续治疗，不追着补满血条。', k:'持续治疗是恢复德被控期间留在场上的代理人。' },
  { s:'对面刚交完主要进攻牌，你们三人的进攻资源还没完全对齐。',
    r:'脱离并重新潜行，等下一次完整 setup。', m:'用控制维持距离，不用半套爆发换一点压力。', d:'回柱补持续治疗和法力，不为无窗口的伤害进场。', k:'对面没牌不等于我方立刻有窗；三人的资源仍要对齐。' },
  { s:'对面治疗有失能递减，但没有旋风递减；击杀目标的眩晕递减已恢复。',
    r:'按正常眩晕链开击杀目标，把治疗交给恢复德。', m:'配合贼打满伤害，不用变形硬撞失能递减。', d:'用旋风控治疗，走独立的控制类别。', k:'控制递减分道走，RMD 才比 RMP 多一扇窗。' },
  { s:'恢复德法力明显落后，对面防守牌也已减少，双方都没有立即杀窗。',
    r:'用潜行和控制减少队伍承伤，不制造新的治疗账单。', m:'控场并停手，逼对面走位而不是持续换血。', d:'留在柱后只维持必要持续治疗，争取喝水或回蓝窗口。', k:'法力落后时，最值钱的伤害是让对面打不到人。' },
  { s:'贼独自看见一个可开的目标，但法师正在被打断，恢复德也在补预铺。',
    r:'不开；先帮法师获得自由施法，再重做 setup。', m:'先骗掉打断或换位，明确报出自己还没准备好。', d:'完成预铺并用控制减压，不跟着贼追目标。', k:'贼能开窗不等于队伍能在窗里做完事。' },
  { s:'对面把防守牌全部交在上一轮，三人的控制递减和爆发都已恢复。',
    r:'先报控制分工，再开击杀目标。', m:'确认自己的伤害与控制对象，不提前破控。', d:'确认持续治疗在场，再进场接旋风。', k:'终结局也要走完整 setup；牌少只会提高收益，不会取消步骤。' },
  { s:'恢复德读旋风时被假动作骗出打断，随后获得自由施法机会。',
    r:'抓住对面没有打断的窗口开控制链。', m:'把变形留给第三人，别和旋风叠在同一目标。', d:'立刻用自由施法窗口完成旋风，再回柱。', k:'骗掉打断的奖励不是多读一次治疗，是获得一次可靠控制。' },
  { s:'你们成功控住治疗，但法师的持续伤害即将打到受控目标。',
    r:'立即提醒停手，必要时改用不怕伤害打破的旋风。', m:'取消会破控的伤害，先保住控制时长。', d:'若伤害已无法停下，用旋风接管这段控制。', k:'控制链的长度由最早落到受控目标的那一下伤害决定。' },
  { s:'对面突然从法师转火恢复德；恢复德身上没有持续治疗，<sk>树皮术</sk>还在。',
    r:'控住最危险的追击者，别把全部进攻牌交来救。', m:'减速、定身并把战线拉回恢复德附近。', d:'先给自己持续治疗并开树皮，切形态回柱。', k:'恢复德最怕的不是掉血，是被转火时自己身上没有预铺。' },
  { s:'击杀窗结束，贼与法师都想从不同方向撤退，恢复德站在中间。',
    r:'向恢复德与法师所在的一侧撤，不单独去对角。', m:'向恢复德方向移动，用控制掩护全队退场。', d:'选定同一根柱子并喊撤退方向，维持两人持续治疗。', k:'RMD 的 reset 是三个人一起消失，不是三条逃跑路线。' },
  { s:'下一轮只差恢复德的旋风递减，贼法的资源已经好；对面正在无爆发消耗。',
    r:'继续拖，不用半套资源换一轮残缺控制。', m:'用减速和变形防守，等旋风递减恢复。', d:'维持最小治疗并报递减，准备下一轮进场位置。', k:'RMD 等的是第三条控制线恢复，不只是伤害冷却变亮。' },
];

const roleName = { r:'贼', m:'法师', d:'恢复德' };
const wrong = {
  r:['立刻单人全交爆发。','追进对面柱后继续打。','把全部防守牌一次交完。','什么都不报，等队友自己跟。'],
  m:['提前把爆发打在未控制的目标上。','原地硬读直到被打断。','追离恢复德的治疗范围。','为了补控制放弃整轮伤害。'],
  d:['不管预铺直接进场读控制。','站在空地追着血条治疗。','三张大牌一起交。','为了打伤害离开柱子。'],
};
const quiz = [];
for (const w of ['r','m','d']) S.forEach((x, i) => {
  const correct = x[w];
  const opts = [correct, ...wrong[w].slice((i % 2), (i % 2) + 3)];
  while (opts.length < 4) opts.push(wrong[w][opts.length - 1]);
  quiz.push({
    id: 'rmd-' + w + '-' + String(i + 1).padStart(2, '0'), w, d: (i % 3) + 1,
    s: x.s + '<br><span class="dimtx">你是' + roleName[w] + '。</span>', a:'现在最该做什么？',
    o: opts, r: 0,
    e: ['正解。' + x.k, '这会让三个人的资源错开。', '这会把位置风险放大成下一轮压力。', 'RMD 要先完成共同条件，不靠单人补救。'],
    k: x.k,
  });
});

module.exports = {
  meta: {
    title: 'RMD 3v3 组合训练 · ' + PATCH + ' Midnight',
    desc: '魔兽世界 ' + PATCH + ' RMD（敏锐贼/冰法/恢复德）3v3 三视角判断训练。核心是恢复德先把治疗预付在场上，再离开柱子接第三条控制线。含攻防链、六类对局与 51 道判断题。',
    keywords: 'RMD,贼法德,恢复德,3v3,竞技场,魔兽世界,' + PATCH + ',rogue mage druid,arena',
    h1: 'RMD · 贼 + 法 + 恢复德 3v3',
    footer: 'Patch ' + PATCH + ' · ' + SEASON + '。组合收录与恢复德职责参考 <a href="https://www.icy-veins.com/wow/restoration-druid-pvp-best-arena-compositions" target="_blank">Icy Veins 12.1</a>；技能名与图标来自 Wowhead 官方数据接口。<br><a href="index.html">← 返回全部训练器</a> · <a href="index.html#legal">数据来源与免责声明</a>',
    jsonld: null,
  },
  nav: [
    { s:'s1', label:'骨架' }, { s:'s2', label:'准备' }, { s:'s3', label:'进攻链' },
    { s:'s4', label:'防守链' }, { s:'s5', label:'分对局' }, { s:'s6', label:'判断训练' }, { s:'s7', label:'赛前速查' },
  ],
  sections: {
    s1: '<div class="wrap"><div class="thesis"><div class="lbl">这组唯一要记住的一句</div><div class="big">恢复德先把治疗<b>预付在场上</b>，才有资格离开柱子接控制。<br>没预铺就进场，RMD 会同时失去治疗和第三条控制线。</div></div>' +
      '<h2>它不是更慢的 RMP</h2><div class="rows">' +
      row('RMP 的治疗留在后面，RMD 的治疗要进场','换人以后，第三人的职责变了','<p>牧师主要保住法师；恢复德则要先铺持续治疗，再用<sk>旋风</sk>加入 setup。<b>这不是治疗职业替换，是队伍节奏替换。</b></p>',['旋风','回春术']) +
      row('多出来的是一条控制类别','不是多一个人同时控治疗','<p><sk>闷棍</sk>/<sk>变形术</sk>共享失能递减，<sk>旋风</sk>走自己的类别。<b>让恢复德接治疗控制，法师就能把施法预算留给伤害或第三人。</b></p>',['闷棍','变形术','旋风']) +
      row('容错来自退场，不来自硬顶','三个人都有离场工具','<p>贼能重新潜行，法师能位移控场，恢复德能在持续治疗跳动时回柱。<b>一轮没杀掉就一起退，别把可重开的组合打成持续换血。</b></p>',['消失','闪现术','旅行形态']) +
      '</div><h2>三个人的分工</h2>' + trio('<b>开窗与锁击杀目标。</b>控制第三人，让另外两条控制能落在正确目标上。','<b>窗口里的主伤害。</b>控制和伤害共用施法预算，不替恢复德重复控治疗。','<b>预付治疗后接控制。</b>旋风完成就回柱，不在场中追第二个读条。','贼决定何时开，法师决定这扇窗值不值得开，恢复德决定队伍能不能在窗外继续活。') + '</div>',
    s2: '<div class="wrap"><p class="lead">RMD 的准备不是等冷却，是让三个条件同时成立。</p><div class="rows">' +
      row('先铺，再进','恢复德的入场券',['<p>最可能被集火的人身上先有<sk>回春术</sk>与<sk>生命绽放</sk>。持续治疗在跳，恢复德才有一个读<sk>旋风</sk>的空档。</p>'].join(''),['回春术','生命绽放','旋风']) +
      row('先分控制对象','治疗、第三人、击杀目标各一个','<p>默认：恢复德旋风治疗，贼处理第三人并眩晕击杀目标，法师把伤害打进眩晕。<b>同一目标堆三份控制是浪费。</b></p>',['旋风','肾击']) +
      row('先说谁还没好','沉默比错误更贵','<p>法师爆发、恢复德预铺、控制递减，任何一项没好都要说。<b>贼看到位置，只代表可以准备，不代表可以开。</b></p>') +
      '</div></div>',
    s3: '<div class="wrap"><p class="lead">一轮进攻只做六件事。</p><div class="rows">' +
      row('① 预铺完成','恢复德先报可以进场','<p>持续治疗在最可能被打的人身上；恢复德自己的退路也清楚。</p>',['回春术']) +
      row('② 贼开三点控制','第三人、治疗、击杀目标同时被处理','<p>贼先碰第三人，再把击杀目标放进眩晕。治疗留给恢复德的旋风线。</p>',['偷袭','肾击']) +
      row('③ 法师把伤害打满','不重复治疗控制','<p>恢复德已经承担治疗控制，法师的变形优先给第三人或留到下一段。</p>',['寒冰宝珠','变形术']) +
      row('④ 恢复德旋风接链','读完就走','<p><sk>旋风</sk>既不被伤害打破，也能隔绝治疗。完成这一段后立刻回柱。</p>',['旋风']) +
      row('⑤ 低血旋风冻结结算','伤害用尽而目标没死','<p>对低血击杀目标补旋风，阻止双方治疗；等下一轮资源好再收。</p>',['旋风']) +
      row('⑥ 全队一起退','没有控制就没有继续换血的理由','<p>向同一根柱子撤，贼重潜、法师控场、恢复德续上持续治疗。</p>',['潜行','旅行形态']) +
      '</div></div>',
    s4: '<div class="wrap"><p class="lead">防守目标不是把血条补满，是保住下一次 setup。</p><div class="rows">' +
      row('法师被抓','把二打一拆成一打一','<p>贼控一个追击者，恢复德用根须或防守旋风减掉另一份伤害，法师向治疗方向拉。</p>',['纠缠根须','旋风']) +
      row('恢复德被转火','预铺自己，然后回柱','<p>没有持续治疗时先给自己铺；<sk>树皮术</sk>只买路，不是留在原地硬顶的理由。</p>',['树皮术','熊形态']) +
      row('贼被抓','默认自己处理','<p>贼的<sk>消失</sk>、<sk>暗影斗篷</sk>和<sk>闪避</sk>足够脱身。队友先保住法师与恢复德的站位。</p>',['消失','暗影斗篷','闪避']) +
      row('恢复德被控','相信场上的预付治疗','<p>持续治疗齐时先拉位置；不要三个人同时交大牌。预铺的价值正是在治疗不能操作时继续工作。</p>',['回春术','生命绽放']) +
      '</div></div>',
    s5: '<div class="wrap"><p class="lead">按对面解决你们 setup 的方式分，不按职业名背答案。</p><div class="rows">' +
      row('双近战压法师','先拆追击再开窗','<p>恢复德用根须/旋风减一份伤害，贼控另一人；法师获得自由施法后再做进攻。</p>',['纠缠根须','旋风']) +
      row('双施法者','打断是一份共享预算','<p>先骗掉或控制关键打断，再让恢复德读旋风。法师与恢复德不要同时把读条暴露给同一份打断。</p>') +
      row('治疗带强解控','第一轮只逼牌','<p>目标不是一轮击杀，是把解控与免控牌换掉。下一轮控制类别恢复后再收。</p>') +
      row('高持续压制','缩短恢复德离柱时间','<p>预铺更厚、旋风只读一段就走。多读一段控制可能换来整队治疗断档。</p>',['旋风']) +
      row('高爆发 setup','防守旋风优先','<p>对面开主爆发时先把爆发者旋风掉。RMD 能重开，不需要拿全队防守牌硬换。</p>',['旋风']) +
      row('同类贼法队','谁先浪费递减谁输','<p>两边都靠 setup。记录失能、眩晕和旋风递减；残缺的一轮宁可不开。</p>') +
      '</div></div>',
    s6: '<div class="wrap"><div class="statbar"><div class="stat"><span class="k">累计答题</span><span class="v" id="stPlayed">0</span></div><div class="stat"><span class="k">总正确率</span><span class="v" id="stAcc">—</span></div><div class="stat"><span class="k">最长连对</span><span class="v" id="stBest">0</span></div><div class="stat"><span class="k">错题库</span><span class="v" id="stWrong">0</span></div></div><div class="qtop"><select id="fWho"><option value="cur">跟随当前视角</option><option value="all">三个视角都练</option><option value="rogue">只练贼</option><option value="mage">只练法师</option><option value="druid">只练恢复德</option></select><select id="fDiff"><option value="all">全部难度</option><option value="1">基础 · 机制</option><option value="2">进阶 · 时机</option><option value="3">高阶 · 权衡</option></select><button class="btn" onclick="startQuiz(false)">开始一轮（10 题）</button><button class="btn ghost" onclick="startQuiz(true)">只练错题</button><button class="btn ghost" onclick="resetStats()">清空记录</button></div><div id="quizArea"></div></div>',
    s7: '<div class="wrap"><div class="sheet"><div class="sc r"><h4 class="tt">🗡 贼</h4><div class="line">看到位置先报，不等于立刻开。</div><div class="line">第三人和击杀目标由你先处理。</div><div class="line">恢复德进场时，给他留一条回柱子的路。</div></div><div class="sc m"><h4 class="tt">❄ 法师</h4><div class="line">恢复德控治疗时，你把施法预算留给伤害。</div><div class="line">被压先向治疗方向拉，不去对角。</div><div class="line">爆发没好就说，别让贼开空窗。</div></div><div class="sc p"><h4 class="tt">✚ 恢复德</h4><div class="line">先铺持续治疗，再离柱接旋风。</div><div class="line">旋风读完就走，不追第二个读条。</div><div class="line">被转火先给自己预铺，再切形态回柱。</div></div></div></div>',
  },
  fragments: {},
  sk: {
    '回春术':'spell_nature_rejuvenation','生命绽放':'inv_misc_herb_felblossom','旋风':'spell_nature_earthbind','纠缠根须':'spell_nature_stranglevines','树皮术':'spell_nature_stoneclawtotem','熊形态':'ability_racial_bearform','旅行形态':'ability_druid_travelform',
    '闷棍':'ability_sap','偷袭':'ability_cheapshot','肾击':'ability_rogue_kidneyshot','消失':'ability_vanish','暗影斗篷':'spell_shadow_nethercloak','闪避':'spell_shadow_shadowward','潜行':'ability_stealth',
    '变形术':'spell_nature_polymorph','寒冰宝珠':'spell_frost_frozenorb','闪现术':'spell_arcane_blink'
  },
  enemy: [],
  own: {
    r:['闷棍','偷袭','肾击','消失','暗影斗篷','闪避','潜行'],
    m:['变形术','寒冰宝珠','闪现术'],
    d:['回春术','生命绽放','旋风','纠缠根须','树皮术','熊形态','旅行形态'],
  },
  cond: null, verdicts: null, steps: null, match: null,
  roles: null, memb: null, play: null,
  quiz,
};
