/* 内容模块 · preservation-evoker
   主线：恩护不是血掉了再补；先用回响与持续治疗预付，危险来时才有时间做第二件事。
   事实：Icy Veins 12.1；天赋/属性：Murlok 四区 3v3 top50（2026-08-17 抓取）。
   技能名与图标：Wowhead 英中双语回验。 */
const { PATCH, SEASON } = require('../config.js');
const row=(title,sub,body,skills=[])=>'<div class="row"><div class="h" onclick="tg(this)"><span class="icrow">'+skills.map(s=>'<img class="ic" data-sk="'+s+'" style="width:20px;height:20px">').join('')+'</span><span class="t">'+title+'</span><span class="sub">'+sub+'</span><span class="ar">▸</span></div><div class="b">'+body+'</div></div>';

const classes=[
 ['warrior','战士','classicon_warrior','#C69B6D','看贴身眩晕','先用悬空与营救拉长接触距离；真窗口前交时间膨胀。','别等被晕后才开黑曜鳞片。','开门先给最可能被打的人逆转与回响。'],
 ['paladin','圣骑士','classicon_paladin','#F48CBA','看祝福与免疫','免疫期间换人；有 Scouring Flame 时用高蓄力火焰吐息拆增益。','不要为了追一个圣盾目标飞离柱子。','先确认哪些增益能驱散，再决定是否前压。'],
 ['hunter','猎人','classicon_hunter','#AAD372','看治疗控制链','翠绿之拥带出的废灵遮罩可挡下一发控制；营救也能把队友带离击杀位。','别为了梦游走进冰冻陷阱路线。','与队友错开站，别让一次控制同时拆掉治疗与救援。'],
 ['rogue','潜行者','classicon_rogue','#FFF468','看眩晕前一拍','黑曜鳞片在眩晕前交；被控时可用翡翠交融把生命联结的治疗送出去。','不要第一段压力就把回溯和静滞一起交。','回响与逆转先铺给最可能吃开门的人。'],
 ['priest','牧师','classicon_priest','#FFFFFF','看恐惧路线','牧师前压时用深呼吸穿过去，或靠翠绿之拥后的废灵遮罩吃控制。','梦游与多数治疗同属绿系，被打断会一起锁。','先留一条机动路径，不站死在柱边等恐惧。'],
 ['deathknight','死亡骑士','classicon_deathknight','#C41E3A','看拉人聚堆','用营救把队友带离近战中心，悬空回柱；时间膨胀接持续压制。','别在被拉进场中后原地长蓄力。','队伍别站一团，给营救留落点。'],
 ['shaman','萨满祭司','classicon_shaman','#0070DD','看妖术与根基','灼烧之焰可清队友身上的妖术；先打掉根基再梦游。','不要把梦游喂给根基图腾。','焦点盯治疗萨，预先决定谁处理第一发妖术。'],
 ['mage','法师','classicon_mage','#3FC7EB','看变形与锁系','用悬空、深呼吸和废灵遮罩躲控制；绿系被锁时改用活化烈焰。','不要在对方打断还在时硬读梦境吐息。','开局先留柱与悬空路线，不为输出站中场。'],
 ['warlock','术士','classicon_warlock','#8788EE','看持续压力','回响、逆转和低蓄力梦境吐息先铺；用梦游或深呼吸打断他的自由施法节奏。','不要把回溯浪费在尚未发生的大量伤害上。','先铺两条血线，别等三个人一起掉才开始。'],
 ['monk','武僧','classicon_monk','#00FF98','看扫堂腿','黑曜鳞片提前交，营救把击杀目标带出分身与爆发区。','别在他贴脸后才开始找落点。','开门就给自己保留一次悬空方向。'],
 ['druid','德鲁伊','classicon_druid','#FF7C0A','看流血与旋风','灼烧之焰能清流血；翠绿之拥后的废灵遮罩可顶一发旋风。','别为追治疗走进第二个旋风。','对野德先留灼烧之焰，对恢复德先想控制路线。'],
 ['demonhunter','恶魔猎手','classicon_demonhunter','#A330C9','看快速贴脸','先用悬空和营救拆位置，眩晕前交黑曜鳞片。','短距离不是必须站在近战堆里。','把治疗位置放在能前压、也能一跳回柱的地方。'],
 ['evoker','唤魔师','classicon_evoker','#33937F','看蓄力与机动','别追悬空目标；用自己的机动重置视野，再等对面落地。','双方都能前压，先交机动的一方先露控制缺口。','镜像先看谁的回响与逆转断档。'],
];
const match={qlbl:['1 · 他怎么制造危险','2 · 你用什么回答','3 · 最容易浪费什么','4 · 开局怎么站'],list:classes.map(x=>({id:x[0],n:x[1],ic:x[2],c:x[3],diff:x[4],one:x[4],cards:[],q:[[x[4],x[4]],[x[5],x[5]],[x[6],x[6]],[x[7],x[7]]],arena:x[5],duel:x[7]}))};

const cases=[
 ['队友刚开始承受持续伤害，身上没有回响。','先放<sk>回响</sk>，再接下一次治疗。','直接把最大的治疗交出去。','回响必须先于下一发治疗，后补不会复制已经发生的治疗。'],
 ['队友血线稳定，但对面主爆发快到了。','提前维护<sk>逆转</sk>并准备回响。','等血掉到危险线再开始铺。','恩护靠预付争取危险来时的第二个动作。'],
 ['队友持续掉血，回响已经在身上。','接<sk>翠绿之拥</sk>，再用低蓄力<sk>梦境吐息</sk>铺持续治疗。','长时间蓄满梦境吐息只追一次大数字。','低蓄力保留更强持续治疗，回响会把它复制。'],
 ['你准备使用<sk>静滞</sk>存三发治疗。','先想好要存的三发与释放场景，再启动静滞。','先按静滞，后面见什么亮按什么。','静滞存的是一套预制答案，不是三个随机技能。'],
 ['静滞已经存好，对面还没开真正爆发。','继续用普通治疗维持，把静滞留给完整窗口。','因为存好了就立刻释放。','预制包的价值来自释放时机，不来自尽快清空。'],
 ['队友正吃高爆发，你仍有正常施法时间。','先交<sk>时间膨胀</sk>把伤害摊开，再按顺序治疗。','同时交时间膨胀、回溯和静滞。','时间膨胀是第一层大牌，不该与恢复型大牌叠交。'],
 ['全队刚吃完一轮大量伤害。','用<sk>回溯</sk>追回刚刚发生的团队伤害。','在伤害还没发生前先交回溯。','回溯是回看型治疗，必须在伤害发生后才值钱。'],
 ['你即将被控制，队友身上已有生命联结。','必要时用<sk>翡翠交融</sk>，即使被控也能继续治疗。','把它当普通小治疗提前交。','翡翠交融的独特价值是控制中仍能救场。'],
 ['牧师正在向你走来准备恐惧。','用<sk>深呼吸</sk>穿过或离开控制路线。','留在原地继续读梦游。','恩护的机动首先是防守牌，不只是赶路。'],
 ['队友被拉进对面近战堆，自己仍安全。','用<sk>营救</sk>把队友带到预先选好的安全落点。','飞到近战堆里原地刷他。','营救同时改写两个人的位置，落点必须先于按钮决定。'],
 ['你被近战追击，但还没被眩晕。','提前开<sk>黑曜鳞片</sk>并用悬空回柱。','等进眩晕后再想减伤。','黑曜鳞片要在伤害发生前交，机动与减伤要连起来。'],
 ['你刚用翠绿之拥，知道下一发控制要来。','利用短暂的<sk>废灵遮罩</sk>顶掉那发控制。','无视这段窗口，继续站在控制路线。','翠绿之拥不仅治疗，还给下一发控制一个短答案。'],
 ['你想前压对面治疗打<sk>梦游</sk>，但绿系打断还在。','先等打断或用别的动作骗掉，再读梦游。','硬读梦游，中了打断再治疗。','梦游和多数核心治疗同属绿系，错误前压会把治疗一起锁死。'],
 ['队友中了流血、毒、诅咒或疾病中的可清效果。','用<sk>灼烧之焰</sk>清掉，再处理剩余血线。','忽略负面效果，只靠治疗量硬顶。','能删掉伤害来源时，不该把它全部换算成治疗。'],
 ['双方血线稳定，队友正在开爆发。','跟进梦游或伤害，让队伍保持进攻。','永远留在柱后只做治疗。','公开打法把保持队伍进攻性列为恩护的主职责之一。'],
 ['你被绿系打断，但队友仍需补血。','改用火系的活化烈焰处理这一拍。','继续尝试绿色治疗法术。','恩护有不同法术派系，被锁一系不等于完全停机。'],
 ['一轮结束，回响、逆转和机动都断档。','先重建预铺与位置，再谈下一次前压。','直接跟着队友冲进去打控制。','没有预付治疗与退路的前压，只是在把下一轮控制送给对面。'],
];
const bad=['立刻把全部大牌一起交。','为了控制走到对面柱后。','忽略回响与位置，只追血条。'];
const quiz=[]; cases.forEach((x,i)=>{
 const [s,good,wrong,k]=x,d=i%3+1;
 quiz.push({id:'pe-a-'+(i+1),t:'general',d,s,a:'现在最该做什么？',o:[good,wrong,bad[0],bad[1]],r:0,e:['正解。'+k,'这正是本题要避免的误判。','叠交会让下一轮没有答案。','位置错了，治疗量也救不回来。'],k});
 quiz.push({id:'pe-b-'+(i+1),t:'general',d:d%3+1,s:s+'<br><span class="dimtx">有人选择：「'+wrong+'」</span>',a:'这个选择错在哪？',o:[k,'只是治疗数字不够。','只是装备属性不够。','没有错，只要按得快。'],r:0,e:['正解。'+k,'问题发生在数字之前。','属性不能修复错误顺序。','反应快也救不了错误资源。'],k});
 quiz.push({id:'pe-c-'+(i+1),t:'general',d:(d+1)%3+1,s,a:'这一题最该记住哪条？',o:[k,'血越低越应该把所有牌一起交。','恩护只负责治疗，不负责控制与伤害。','机动技能只用来赶路。'],r:0,e:['正解。','叠交会制造下一轮真空。','当前公开打法明确要求保持队伍进攻。','机动是恩护最重要的防守层。'],k});
});

module.exports={
 meta:{title:'恩护唤魔师 PvP 判断训练器 · 魔兽世界 '+PATCH+' Midnight 赛季一',desc:'魔兽世界正式服 '+PATCH+' 恩护唤魔师 PvP 竞技场判断训练。含 51 道情境题、13 职业对局、英雄/PvP 天赋 top50 实测与属性优先级。',keywords:'恩护唤魔师,奶龙,治疗,PVP,竞技场,魔兽世界,'+PATCH+',preservation evoker,arena',footer:'Patch '+PATCH+' · '+SEASON+'。技能中文名与图标来自 Wowhead 官方接口双语回验；打法参考 <a href="https://www.icy-veins.com/wow/preservation-evoker-pvp-rotation-and-playstyle" target="_blank">Icy Veins 12.1</a>；天赋与属性来自 Murlok.io 四区 3v3 top50。<br><a href="index.html">← 返回全部训练器</a> · <a href="index.html#legal">数据来源与免责声明</a>',jsonld:null},
 nav:[{s:'s1',label:'骨架'},{s:'s2',label:'通用手法'},{s:'s3',label:'分职业'},{s:'s4',label:'判断训练'},{s:'s5',label:'赛前速查'}],
 sections:{
  s1:'<div class="wrap"><div class="thesis"><div class="lbl">这版本唯一要记住的一句</div><div class="big">恩护不是血掉了再补。<br>先用<sk>回响</sk>与持续治疗<b>预付下一拍</b>，危险来时才有时间做第二件事。</div></div><h2>为什么</h2><div class="rows">'+
   row('回响必须在治疗之前','顺序就是强度','<p>Icy Veins 把<sk>回响</sk>列为持续与爆发治疗的第一步。它复制目标下一次受到的治疗；<b>晚一拍放，刚才那发就永远不会回来。</b></p>',['回响'])+
   row('短射程不是让你站死近战堆','机动替你伸长治疗半径','<p><sk>悬空</sk>、<sk>营救</sk>与<sk>深呼吸</sk>让你前压控制后再回柱。没有退路的前压不是主动，是送控制。</p>',['悬空','营救'])+
   row('大牌回答不同时间方向','提前、当下、事后分开','<p><sk>时间膨胀</sk>摊开将来的伤害，<sk>静滞</sk>预存下一套治疗，<sk>回溯</sk>追回刚发生的伤害。<b>三张一起交不是保险，是把三种时钟混成一团。</b></p>',['时间膨胀','静滞','回溯'])+
   '</div><h2>该不该交大牌</h2><div class="gobox"><div class="checks" id="checks"></div><div class="verdict" id="verdict"></div></div><h2>三个时钟</h2><div class="rows" id="clocks"></div><h2>本版定盘</h2><div class="rows" id="setup"></div></div>',
  s2:'<div class="wrap"><div class="rows" id="general"></div></div>',
  s3:'<div class="wrap"><p class="lead">四问对所有敌人是同一套。</p><div class="split"><div class="sidecol"><div class="cls-grid" id="clsGrid"></div><div class="modebar" id="modebar"><button class="on" data-m="arena">竞技场</button><button data-m="duel">单挑</button></div></div><div id="clsDetail"></div></div></div>',
  s4:'<div class="wrap"><div class="statbar"><div class="stat"><span class="k">累计答题</span><span class="v" id="stPlayed">0</span></div><div class="stat"><span class="k">总正确率</span><span class="v" id="stAcc">—</span></div><div class="stat"><span class="k">最长连对</span><span class="v" id="stBest">0</span></div><div class="stat"><span class="k">错题库</span><span class="v" id="stWrong">0</span></div></div><div class="qtop"><select id="fCat"><option value="all">全部范围</option></select><select id="fDiff"><option value="all">全部难度</option><option value="1">基础 · 机制</option><option value="2">进阶 · 时机</option><option value="3">高阶 · 权衡</option></select><button class="btn" onclick="startQuiz(false)">开始一轮（10 题）</button><button class="btn ghost" onclick="startQuiz(true)">只练错题</button><button class="btn ghost" onclick="resetStats()">清空记录</button></div><div id="quizArea"></div></div>',
  s5:'<div class="wrap"><div class="sheet" id="sheet"></div></div>'},
 fragments:{
  clocks:row('预付时钟','回响 → 下一发治疗','<p>持续伤害先维护<sk>逆转</sk>；真正治疗前先放<sk>回响</sk>。顺序错了，后续大牌都会少一层。</p>',['回响','逆转'])+row('机动时钟','前压前先看退路','<p>梦游与伤害能帮队伍收人，但每次前压前先留<sk>悬空</sk>、<sk>营救</sk>或柱子路线。</p>',['悬空','营救','梦游'])+row('三种大牌时钟','未来、预存、过去','<p><sk>时间膨胀</sk>接即将到来的单点压力；<sk>静滞</sk>存一套治疗；<sk>回溯</sk>追回刚发生的全队伤害。</p>',['时间膨胀','静滞','回溯']),
  setup:row('英雄天赋：时空守卫 Chronowarden','46/50，塑焰者 4/50','<p>top50 中时空守卫占 <b>92%</b>。这说明当前主流进一步强化时间系与机动，但仍保留 4 名塑焰者，不写成唯一解。</p>')+row('PvP 天赋：两格定盘，一格按阵容','废灵遮罩 50/50 · 翡翠交融 50/50','<p><sk>废灵遮罩</sk>与<sk>翡翠交融</sk>都是 50/50；Obsidian Mettle 24/50、Scouring Flame 19/50、Time Stop 3/50。<b>第三格按对面的控制、增益和爆发类型换。</b></p>',['废灵遮罩','翡翠交融']),
  general:row('01 · 所有治疗先问回响','后放没有补票','<p><sk>回响</sk>复制下一发治疗。逆转、翠绿之拥、梦境吐息和时间膨胀前都先确认目标有没有回响。</p>',['回响'])+row('02 · 持续压力先铺，不追血','逆转 + 低蓄力梦境吐息','<p>持续伤害时先维护<sk>逆转</sk>，再用回响后的低蓄力<sk>梦境吐息</sk>留下更强持续治疗。</p>',['逆转','梦境吐息'])+row('03 · 静滞先设计再按','存的是一套答案','<p>常用治疗包围绕翠绿之拥、回响和梦境吐息。先知道下一轮要重放什么，再启动<sk>静滞</sk>。</p>',['静滞'])+row('04 · 大牌不要同窗堆','每张回答不同时间方向','<p>时间膨胀先摊伤；翡翠交融接控制中救场；回溯接全队刚吃完的伤害。按病灶交，不按血量颜色交。</p>',['时间膨胀','翡翠交融','回溯'])+row('05 · 机动是治疗的一部分','位置错了，技能就是灰的','<p><sk>悬空</sk>保持移动施法，<sk>营救</sk>同时搬两个人。每次营救先选落点，不先选按钮。</p>',['悬空','营救'])+row('06 · 前压要带回程票','梦游不是免费控制','<p><sk>梦游</sk>与多数治疗同属绿系。对面打断还在时硬读，等于把控制失败与治疗锁系绑在一起。</p>',['梦游'])+row('07 · 能删伤害源就别硬奶','灼烧之焰是治疗牌','<p><sk>灼烧之焰</sk>可移除流血、毒、诅咒和疾病。对野德、奇袭贼、术士与萨满先看能否直接删掉问题。</p>',['灼烧之焰']),
  sheet:'<div class="sc wide"><h4>三条铁律</h4><div class="big3"><div class="b3"><div class="n">1</div><div><div class="tt">回响永远在治疗之前</div><div class="dd">晚一拍放，刚才那发没有补票。</div></div></div><div class="b3"><div class="n">2</div><div><div class="tt">大牌按时间方向交</div><div class="dd">时间膨胀管未来，静滞管预存，回溯管过去。</div></div></div><div class="b3"><div class="n">3</div><div><div class="tt">前压先留回程票</div><div class="dd">悬空、营救或柱子路线至少留一个。</div></div></div></div></div>'},
 sk:{'回响':'ability_evoker_echo','逆转':'ability_evoker_reversion','梦境吐息':'ability_evoker_dreambreath','时间膨胀':'ability_evoker_timedilation','静滞':'ability_evoker_stasis','回溯':'ability_evoker_rewind','翡翠交融':'ability_evoker_green_01','黑曜鳞片':'inv_artifact_dragonscales','悬空':'ability_evoker_hover','营救':'ability_evoker_flywithme','梦游':'ability_xavius_dreamsimulacrum','灼烧之焰':'ability_evoker_fontofmagic_red','废灵遮罩':'spell_arcane_prismaticcloak'},
 enemy:[],own:null,
 cond:[{k:'echo',t:'目标已经有回响',d:'下一发治疗会被复制'},{k:'real',t:'对面真的开了主爆发',d:'不是普通持续压力'},{k:'route',t:'你还有安全落点',d:'前压或营救后能回柱'},{k:'clock',t:'这张牌回答对时间方向',d:'未来、预存与过去没有混用'}],
 verdicts:[{cls:'bad',html:'<div class="vi">◇</div><div><h3>先别交</h3><p>回响和位置都没准备好。</p><!--MISSING--></div>'},{cls:'bad',html:'<div class="vi">◇</div><div><h3>条件太少</h3><p>先重建预铺，不用大牌补顺序错误。</p><!--MISSING--></div>'},{cls:'mid',html:'<div class="vi">◈</div><div><h3>能救，但还不是完整答案</h3><p>先确认这张牌回答的是未来、当下还是过去。</p><!--MISSING--></div>'},{cls:'ok',html:'<div class="vi">◆</div><div><h3>可以交</h3><p>预铺、位置与危险都成立。</p><!--MISSING--></div>'},{cls:'ok',html:'<div class="vi">★</div><div><h3>现在就是窗口</h3><p>按预先设计的顺序交，不再叠第二张同类大牌。</p><!--MISSING--></div>'}],
 steps:null,match,roles:null,memb:null,play:null,quiz};
