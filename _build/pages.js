/* 每页配置 —— 加一个专精就在 PAGES 里加一条 */
const { PATCH } = require('./config.js');
const PAGES = [
  {
    file: 'subtlety-rogue', kind: 'spec', cls: 'rogue', spec: 'subtlety',
    h1: '敏锐贼 PvP 判断训练器', short: '敏锐贼',
    icon: 'ability_stealth', tier: 'S', color: '#FFF468',
    crumb: ['潜行者', '敏锐'], store: 'banyeSubPvP1207', quizSec: 's4',
    catLabel: { general: '通用手法' },
    done: { hi: '你已经在看"条件"，不是在背技能。', mid: '基础判断成立，把错题再过一轮。', lo: '先回骨架页把"该不该开"的四条件过一遍。' },
    talent: {
      rows: [
        { lb: '英雄天赋', vv: '<b>诡术师 Trickster</b> —— top50 三对三里 50 人全用，死亡追猎者 <b>0 人</b>。这不是推荐，是唯一解。' },
        { lb: 'PvP 天赋 · 唯一必带', vv: '<sk>烟雾弹</sk> —— <b>50/50</b>，没有例外' },
        {
          lb: 'PvP 天赋 · 另两格',
          vv: '<b>Preemptive Maneuver</b>（45/50）—— 近乎必带<br>' +
            '<sk>卸除武装</sk>（39/50）—— <b>12.1 从 29 涨到 39</b>，现在是明显优先<br>' +
            '<sk>偷天换日</sk>（12/50）—— <b>12.1 从 23 跌到 12</b>，已经不是主流<br>' +
            '<span class="dimtx">三者占了这两格全部选择的 96%。</span>'
        },
      ],
      note: '「Preemptive Maneuver」暂无官方简体中文名。' +
        '<b>12.1 职业树上那个二选一格整个翻面了</b>：<sk>嫁祸诀窍</sk>从 25 人跌到 0 人，' +
        '同格的<sk>劈头棒击</sk>从 0 人涨到 34 人。' +
        '<sk>偷天换日</sk>跟着从 23 跌到 12——它的加成挂在前者身上，前者没人点，它自然失去意义。',
      imp: {
        str: 'CUQAphyM11FofNMFa1K3vFEDUCgZ2mBAAAAAmtZmZZiZZbmxMjZgZmZmlxsNmZmllhBzMGwMGAAAAzwMsYWmxsMDjFG2mZbahWmNmZYmZmBzYA',
        who: 'Stunion', where: 'US · Stormrage', rating: '3v3 3220', at: '2026-08-13',
        note: '这是<b>一个人的配点</b>，不是 top50 的平均——平均配点没有对应的串。' +
          '选它的理由是：<b>下面 8 个分歧格里，有多数派的 7 格他全部一致（7/7）</b>。' +
          '（第 8 格 <b>Nimble Fingers</b> 25/50 正好对半，本来就没有多数派。）' +
          '<b>粘进游戏当起点，那 8 格再按自己的局面调。</b>',
      },
      tree: {
        survey: '职业树 44 格 + 专精树 41 格 + 英雄天赋 28 格，共 <b>113 格</b>。' +
          'top50 的实测分布里，<b>105 格是定死的</b>——要么人人都点，要么没人点。' +
          '真正需要你判断的只有下面 <b>8 格</b>。',
        picks: [
          {
            n: 'Superior Mixture', tree: '职业', u: 41,
            b: '致残药膏的减速再多 10%。' +
              '<br><b>这格 12.1 之前是 88%、几乎算定死的，现在掉到 82% 进了分歧区。</b>' +
              '它管的是黏人，不是打伤害——对面有位移或解控能挣脱你的减速时，' +
              '这一点换成别的更实在。'
          },
          {
            n: 'Weaponmaster', tree: '专精', u: 38,
            b: '暗影打击与暗殁之刺有 <b>20% 几率</b>产生影分身，复制一次攻击造成 50% 伤害。' +
              '<br>纯伤害，不看对面。<b>但它是随机的</b>——敏锐是攒一个窗口一次结账的打法，' +
              '20% 的触发在单个窗口里可能一次都不来。不点的那 12 人是把这一点换成了稳定的东西。'
          },
          {
            n: '毒刃', en: 'Shiv', tree: '职业', u: 36,
            b: '副手攻击，<b>驱散目标身上所有激怒效果</b>，并施加浓缩的非致命药膏。' +
              '<br><b>全树最明确的一格「看对面」。</b>对面带激怒类增益 —— 驱掉就是白赚一整个窗口；' +
              '对面没有激怒，这一点是空的。开局看到对面阵容就能定。'
          },
          {
            n: 'Unbreakable Stride', tree: '职业', u: 32,
            b: '减速效果的持续时间缩短 30%。' +
              '<br>敏锐要靠反复进出打窗口，<b>被黏住就等于开不了</b>。' +
              '对面减速手段密集时点它；对面靠硬控而不是减速的，这一点收益小。'
          },
          {
            n: '劈头棒击', en: 'Blackjack', tree: '职业', u: 34,
            b: '致盲或闷棍的效果在敌人身上结束后，该敌人造成的伤害和治疗效果降低 30%，持续 6 秒。' +
              '<br><b>这一格 12.1 彻底翻了面</b>：它和<sk>嫁祸诀窍</sk>共用一格、二选一，' +
              '上个版本 25 人选那个、没人选它，这个版本反过来。' +
              '<br>它把控制的收尾接了一段——你闷棍完一个人转身走，那人醒来的头 6 秒是软的。' +
              '<b>要用上得靠打法配合</b>：控制打在治疗身上、且队友的爆发正好压在这 6 秒里才算数。'
          },
          {
            n: 'Nimble Fingers', tree: '职业', u: 25,
            b: '佯攻与猩红之瓶的能量消耗降低 10。' +
              '<br>省的是<b>防守动作</b>的能量。被压着打、需要反复佯攻和喝药的局才值；' +
              '你是压制方的那些局，这一点几乎不动。'
          },
          {
            n: 'Toxic Stiletto', tree: '职业', u: 15,
            b: '毒刃的能量消耗 −20、冷却 −15 秒、射程 +3 码。' +
              '<br><b>它只强化毒刃。</b>毒刃 36 人点，它 15 人点——' +
              '也就是说要毒刃的人里超过一半觉得不值第二点。' +
              '对面激怒刷得勤、需要毒刃转得更快时才追加。'
          },
          {
            n: 'Perforated Veins', tree: '专精', u: 13,
            b: '在「破绽」生效期间，背刺、影袭风暴、暗殁之刺伤害提高 10%。' +
              '<br>条件伤害，只在已经很强的窗口里再加一层。<b>26% 是这 8 格里最低的</b>——' +
              '敏锐的短板通常不是窗口内不够疼，是窗口外没威胁。'
          },
        ],
        src: '使用率：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 敏锐贼 top 50</b> 实测配点。' +
          '「什么时候点」为编者按天赋效果与该专精打法推导，非实测结论。' +
          '暂无官方简体中文名的天赋使用英文原名。',
      },
    },
    gear: {
      stats: [
        { n: '精通', v: '主堆', pct: 100 },
        { n: '全能', v: '主堆', pct: 92 },
        { n: '急速', v: '次要', pct: 23, mid: 1 },
        { n: '爆击', v: '可弃', pct: 8, dim: 1 },
      ],
      statRead: '<b>精通和全能几乎并列，之后是断崖。</b>这两条一起堆，不用在它们之间做取舍；' +
        '<b>急速和爆击装备上带多少算多少</b>，不要为了它们放弃前两条。',
      statSrc: '数据：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 敏锐贼 top 50</b> 实测配装。' +
        '档位划分为编者按断层位置判定。',
    },
  },
  {
    file: 'arms-warrior', kind: 'spec', cls: 'warrior', spec: 'arms',
    h1: '武器战士 PvP 判断训练器', short: '武器战士',
    icon: 'ability_warrior_savageblow', tier: 'S', color: '#C69B6D',
    crumb: ['战士', '武器'], store: 'banyeArmsWarPvP1207', quizSec: 's4',
    catLabel: { general: '通用手法' },
    done: { hi: '', mid: '', lo: '' },
    talent: {
      rows: [
        {
          lb: '英雄天赋 · 唯一真正对半的一格',
          vv: '<b>Slayer</b>（29/50 · 58%）　vs　<b>Colossus</b>（21/50 · 42%）<br>' +
            '<span class="dimtx">另外四个已上线专精的英雄天赋都是一边倒' +
            '（敏锐贼 50/0、狂徒贼 50/0、冰法 50/0、戒律牧 42/8），' +
            '武器战士是唯一一个 top50 内部也没共识的。</span>'
        },
        {
          lb: 'PvP 天赋 · 三格四个候选',
          vv: '<sk>打磨利刃</sk>（49/50）—— 减疗，98% 必带<br>' +
            '<sk>捍卫</sk>（34/50）—— 给队友的减伤<br>' +
            '<sk>缴械</sk>（31/50）—— 对面伤害来自武器<br>' +
            '<b>Berserker Roar</b>（29/50）<br>' +
            '<span class="dimtx">四项占全部选择的 95%。50 人 × 3 格 = 150，实测总和正好 150。</span>'
        },
      ],
      note: '「Berserker Roar」暂无官方简体中文名，使用英文原名。',
      imp: {
        str: 'CcEAjLzRlq54bI5v+r8Sr9Xw4DzMzsMzMmZAAAAMMhxMzYjZmZYGzMDAAAAgxiZgtMzYZbWMz2wmhhZmZahmZG2AmxiZZMsMz2AMzAwMGGA',
        who: 'Vîces', where: 'US · Sargeras', rating: '3v3 3190', at: '2026-08-13',
        note: '这是<b>一个人的配点</b>，不是 top50 的平均——平均配点没有对应的串。' +
          '选它的理由是：<b>它在 9 个分歧格上与多数派一致 8 格</b>，' +
          '唯一偏离的是 <b>Dreadnaught</b>（33/50）。' +
          '<b>它走的是 Slayer 线</b>——那一格 58 比 42，本来就没有正确答案，' +
          '想走 Colossus 的话这串不适用。',
      },
      tree: {
        survey: '职业树 40 格 + 专精树 36 格 + 英雄天赋 28 格，共 <b>104 格</b>。' +
          '<b>英雄天赋那 28 格不算逐格分歧</b>——它们是「走 Slayer 还是 Colossus」' +
          '这<b>一个</b>决策的产物，而那一格 58 比 42，没有正确答案。' +
          '职业树与专精树的 76 格里，<b>67 格定死，9 格需要判断</b>，下面是其中 6 格。',
        picks: [
          {
            n: 'Crackling Thunder', tree: '职业', u: 42,
            b: '<sk>雷霆一击</sk>半径增加 50%，并加深其减速效果。' +
              '<br>84% 的使用率，接近定盘。<b>战士的问题从来不是打不动，是够不着</b>——' +
              '这一格买的是「让对面跑不掉」。'
          },
          {
            n: 'Broad Strokes', tree: '专精', u: 42,
            b: '<sk>巨人打击</sk>直接给你<sk>横扫攻击</sk>。' +
              '<br>把单体爆发窗口顺带变成双目标窗口。<b>与上一格同为 42 人</b>，' +
              '是同一套主流配点里的两块。'
          },
          {
            n: 'Massacre', tree: '专精', u: 36,
            b: '斩杀类技能的可用血线从 20% 提到 <b>35%</b>。' +
              '<br><b>这一格改变的是「什么时候算进入处决阶段」。</b>' +
              '35% 意味着提前一大截进入高伤害区间——想靠斩杀收人的打法必点。'
          },
          {
            n: 'Powerful Momentum', tree: '专精', u: 37,
            b: '<sk>横扫攻击</sk>对副目标额外造成 25% 伤害。' +
              '<br>依附于 Broad Strokes 的加成。<b>3v3 里副目标常有，2v2 里经常没有</b>——' +
              '这一格的价值直接跟你打几人赛制挂钩。'
          },
          {
            n: 'Dreadnaught', tree: '专精', u: 33,
            b: '<sk>压制</sk>产生一道地震波，对身前所有敌人造成伤害。' +
              '<br><sk>压制</sk>是武器最高频的技能之一，这一格把它顺带变成小范围伤害。'
          },
          {
            n: 'Shattering Throw', tree: '职业', u: 20,
            b: '投掷武器，<b>移除目标身上的魔法免疫</b>并造成伤害。' +
              '<br><b>全树最明确的一格「看对面」。</b>对面有<sk>寒冰屏障</sk>、圣盾术、' +
              '<sk>暗影斗篷</sk>这类免疫牌——它能把对面最硬的那张牌直接撕掉；' +
              '对面没有免疫，这一点是纯浪费。40% 的使用率正好反映「看阵容」这件事。'
          },
        ],
        src: '使用率：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 武器战士 top 50</b> 实测配点。' +
          '另外 3 格分歧（Tactical Edge 28/50 · Rumbling Earth 26/50 · Critical Thinking 14/50）不单列。' +
          '「什么时候点」为编者按天赋效果推导，非实测结论。',
      },
    },
    gear: {
      stats: [
        { n: '全能', v: '主堆', pct: 100 },
        { n: '急速', v: '兼顾', pct: 49, mid: 1 },
        { n: '精通', v: '可弃', pct: 14, dim: 1 },
        { n: '爆击', v: '可弃', pct: 1, dim: 1 },
      ],
      statRead: '<b>全能一枝独秀，急速跟上，之后归零。</b>' +
        '全能同时提高伤害与减伤——<b>对一个要站在人堆里输出的近战，这条的性价比压过一切</b>。' +
        '精通与爆击在 top50 的配装里几乎为零。',
      statSrc: '数据：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 武器战士 top 50</b> 实测配装。' +
        '档位划分为编者按断层位置判定。',
    },
  },
  {
    file: 'outlaw-rogue', kind: 'spec', cls: 'rogue', spec: 'outlaw',
    h1: '狂徒贼 PvP 判断训练器', short: '狂徒贼',
    icon: 'ability_rogue_waylay', tier: 'A', color: '#FFF468',
    crumb: ['潜行者', '狂徒'], store: 'banyeOutlawPvP1207', quizSec: 's4',
    catLabel: { general: '通用手法' },
    done: { hi: '你已经在读"我现在有多强"，不是在背循环。', mid: '基础判断成立，把错题再过一轮。', lo: '先回骨架页把骰面和爆发窗口的关系过一遍。' },
    talent: {
      rows: [
        { lb: '英雄天赋', vv: '<b>诡术师 Trickster</b> —— <b>46/50</b>；命运之缚 Fatebound 只有 4 人。' },
        {
          lb: 'PvP 天赋 · 三格从这四个里选',
          vv: '<sk>烟雾弹</sk>（44/50）—— 最接近必带<br>' +
            '<b>Preemptive Maneuver</b>（38/50）—— 被控住时的减伤<br>' +
            '<sk>卸除武装</sk>（31/50）—— 对面伤害来自武器<br>' +
            '<b>Turn the Tables</b>（18/50） · <sk>偷天换日</sk>（14/50）—— 剩下那格的两个候选<br>' +
            '<span class="dimtx">五项占了全部选择的 96%。50 人 × 3 格 = 150，实测总和正好 150。</span>'
        },
      ],
      note: '「Preemptive Maneuver」「Turn the Tables」暂无官方简体中文名。',
      imp: {
        str: 'CQQAphyM11FofNMFa1K3vFEDUCgZAGzwMbzMzMzYMLbmZmZbabGz2MAAAAAAbLzMDmZMzYmZMAAAAmhBGMbziZmZ0MzGzGLbTLsZGgZGMwA',
        who: 'Dázèd', where: 'US · Stormrage', rating: '3v3 3139', at: '2026-08-13',
        note: '这是<b>一个人的配点</b>，不是 top50 的平均——平均配点没有对应的串。' +
          '选它的理由是：<b>它在 10 个分歧格上与多数派一致 9 格</b>，在 top50 前五名里贴合度最高。' +
          '唯一偏离的是<sk>嫁祸诀窍</sk>那格（26/50 · 52%），本来就接近对半。' +
          '<b>粘进游戏当起点，那 10 格再按自己的局面调。</b>',
      },
      tree: {
        survey: '职业树 44 格 + 专精树 38 格 + 英雄天赋 28 格，共 <b>110 格</b>。' +
          '扣掉没人走的命运之缚整条线、以及诡术师线里跟着「走这条线」一起点掉的 11 格，' +
          'top50 的实测里 <b>100 格是定死的</b>。' +
          '真正需要你判断的是 <b>10 格</b>，下面是其中 7 格。',
        picks: [
          {
            n: 'Soothing Darkness', tree: '职业', u: 42,
            b: '<sk>消失</sk>后 6 秒内回复 15% 最大生命。' +
              '<br><b>这一格与下面两格使用人数完全相同（都是 42）</b>——它们是同一套配点里的三件套，' +
              '全部围绕<sk>消失</sk>。狂徒的生存不靠减伤靠脱身，这是那条路线的地基。'
          },
          {
            n: 'Subterfuge', tree: '职业', u: 42,
            b: '潜行被打断后，仍可在 6 秒内使用需要潜行的技能。' +
              '<br>把开场窗口从「被发现即结束」延长成「被发现后还能补一手」。' +
              '<b>与另外两格同进同退。</b>'
          },
          {
            n: 'Without a Trace', tree: '职业', u: 42,
            b: '<sk>消失</sk>多一层充能。' +
              '<br>三件套的最后一块。<b>不点这三格的那 8 个人，是把点数挪去了输出。</b>'
          },
          {
            n: 'Blinding Powder', tree: '专精', u: 36,
            b: '<sk>致盲</sk>冷却缩短 25%、射程增加 5 码。' +
              '<br><sk>致盲</sk>是狂徒手上最强的软控。冷却缩短意味着<b>一局里多一次断节奏的机会</b>。'
          },
          {
            n: 'Blackjack', tree: '职业', u: 33,
            b: '<sk>致盲</sk>或<sk>闷棍</sk>效果结束后，目标伤害与治疗降低 30%，持续 6 秒。' +
              '<br><b>跟上面那格几乎同一批人（36 与 33）。</b>点了这两格，' +
              '<sk>致盲</sk>就不只是控——<b>控完那 6 秒才是你真正的输出窗口</b>。'
          },
          {
            n: 'Iron Stomach', tree: '职业', u: 31,
            b: '<sk>猩红之瓶</sk>、治疗药水与治疗石的回复量提高 25%。' +
              '<br>纯自保。<b>被压着打的局值，你是压制方的局这一点几乎不动。</b>'
          },
          {
            n: 'Shadowrunner', tree: '职业', u: 15,
            b: '潜行或暗影之舞期间移动速度提高 20%。' +
              '<br><b>狂徒没有暗影之舞</b>——这一格只在潜行时生效，也就是只影响开场找位置。' +
              '30% 的使用率说明多数人认为不值。'
          },
        ],
        src: '使用率：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 狂徒贼 top 50</b> 实测配点。' +
          '「什么时候点」为编者按天赋效果与该专精打法推导，非实测结论。' +
          '暂无官方简体中文名的天赋使用英文原名。',
      },
    },
    gear: {
      stats: [
        { n: '全能', v: '主堆', pct: 100 },
        { n: '急速', v: '兼顾', pct: 57, mid: 1 },
        { n: '爆击', v: '可弃', pct: 8, dim: 1 },
        { n: '精通', v: '可弃', pct: 7, dim: 1 },
      ],
      statRead: '<b>全能一枝独秀，急速跟上，之后是断崖。</b>' +
        '爆击和精通在 top50 的配装里几乎为零——<b>不用为这两条做任何取舍</b>。',
      statSrc: '数据：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 狂徒贼 top 50</b> 实测配装。' +
        '档位划分为编者按断层位置判定。',
    },
  },
  {
    file: 'frost-mage', kind: 'spec', cls: 'mage', spec: 'frost',
    h1: '冰法 PvP 判断训练器', short: '冰法',
    icon: 'spell_frost_frostbolt02', tier: 'A+', color: '#3FC7EB',
    crumb: ['法师', '冰霜'], store: 'banyeFrostMagePvP1207', quizSec: 's4',
    catLabel: { general: '通用手法' },
    done: { hi: '你已经在算"他还能不能动"，不是在背连招。', mid: '基础判断成立，把错题再过一轮。', lo: '先回骨架页把控制链和杀窗的关系过一遍。' },
    talent: {
      rows: [
        { lb: '英雄天赋', vv: '<b>法术之刃 Spellslinger</b> —— 50/50 全用。' },
        { lb: 'PvP 天赋 · 两个必带', vv: '<b>Overpowered Barrier</b>（50/50） + <b>Improved Mass Invisibility</b>（50/50）' },
        { lb: 'PvP 天赋 · 情境', vv: '<b>Master Shepherd</b>（36/50） · <sk>冰墙</sk>（9/50）' },
      ],
      note: '上述 PvP 天赋暂无官方简体中文名，使用英文原名。',
      imp: {
        str: 'CAEAMhlVtghLZL4RZzExaQoBYNstMzyMzMbziZmYwMzMzMziZmZMjZmlZamZbWAAzMzssMz0GAAsAAAAsBw2yYmZGYZeAjZGLAAAMzCwMMmBMYA',
        who: 'Ventús', where: 'EU · Ravencrest', rating: '3v3 3252', at: '2026-08-13',
        note: '这是<b>一个人的配点</b>，不是 top50 的平均——平均配点没有对应的串。' +
          '选它的理由是：<b>它在下面 3 个分歧格上与多数派完全一致（3/3）</b>，' +
          '在 top50 前五名里贴合度最高。<b>粘进游戏当起点，那 3 格再按自己的局面调。</b>',
      },
      tree: {
        survey: '职业树 43 格 + 专精树 38 格 + 英雄天赋 28 格，共 <b>109 格</b>。' +
          '扣掉没人走的霜火整条线，<b>106 格是定死的</b>——' +
          '<b>这是站上几个专精里最没得选的一棵树</b>。真正要判断的只有 <b>3 格</b>，' +
          '另外三格 top50 里只有个位数在点。',
        picks: [
          {
            n: 'Improved Blink', tree: '职业', u: 40,
            b: '<sk>闪现术</sk>冷却缩短 2 秒。' +
              '<br>冰法的命是位移，不是血量。<b>80% 的使用率说明这几乎是定盘</b>——' +
              '不点的那 10 个人得给出别的理由。'
          },
          {
            n: 'Improved Spellsteal', tree: '职业', u: 35,
            b: '<sk>法术吸取</sk>在 4 秒后重复一次效果，但自身获得 4 秒冷却。' +
              '<br><b>全树最明确的一格「看对面」。</b>对面带值钱增益（增强萨、部分骑士与牧师的强 buff）——' +
              '偷两次直接改变一轮的强弱；对面没什么可偷的，这一点是空的。'
          },
          {
            n: 'Frost Conditioning', tree: '职业', u: 17,
            b: '寒冷症（<sk>寒冰屏障</sk>用完后的虚弱状态）持续时间缩短 10 秒。' +
              '<br>它缩短的是<b>你交完冰箱之后的空窗期</b>。被反复集火、需要频繁交冰箱的局才值；' +
              '你是压制方的那些局，这一格几乎不起作用。'
          },
        ],
        src: '使用率：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 冰法 top 50</b> 实测配点。' +
          '另外三格（Overflowing Energy 6/50 · Improved Frost Nova 6/50 · Piercing Cold 5/50）' +
          '使用率都在 12% 以下，不单列。' +
          '「什么时候点」为编者按天赋效果与该专精打法推导，非实测结论。',
      },
    },
    gear: {
      stats: [
        { n: '全能', v: '主堆', pct: 100 },
        { n: '急速', v: '兼顾', pct: 77, mid: 1 },
        { n: '精通', v: '可弃', pct: 6, dim: 1 },
        { n: '爆击', v: '可弃', pct: 0, dim: 1 },
      ],
      statRead: '<b>全能和急速一起堆，之后直接归零。</b>' +
        'top50 的爆击是<b>零</b>——不是少，是没有。这一档没有取舍空间。',
      statSrc: '数据：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 冰法 top 50</b> 实测配装。' +
        '档位划分为编者按断层位置判定。',
    },
  },
  {
    file: 'discipline-priest', kind: 'spec', cls: 'priest', spec: 'discipline',
    h1: '戒律牧 PvP 判断训练器', short: '戒律牧',
    icon: 'spell_holy_powerwordshield', tier: null, color: '#FFFFFF',
    crumb: ['牧师', '戒律'], store: 'banyeDiscPriestPvP1207', quizSec: 's4',
    catLabel: { general: '通用手法' },
    done: { hi: '你已经在铺"血掉之前"，不是在追血条。', mid: '基础判断成立，把错题再过一轮。', lo: '先回骨架页把救赎的预铺逻辑过一遍。' },
    talent: {
      rows: [
        { lb: '英雄天赋', vv: '<b>Oracle 先知</b> —— 45/50（90%）。' },
        { lb: 'PvP 天赋 · 近乎必带', vv: '<b>Ultimate Radiance</b>（49/50） + <b>Phase Shift</b>（48/50）' },
        { lb: 'PvP 天赋 · 情境', vv: '<b>Inner Light</b>（33/50）' },
      ],
      note: '上述 PvP 天赋暂无官方简体中文名，使用英文原名。',
      imp: {
        str: 'CAQAR03Gt7xPmcDNOjs2Zlb3yCDsMzDwyMjZmBMbzYmZGjZGAAAAAAAAAAzMzyMYMGLzMzMssYamYwYmZDDhxsNWstYMGLGAAGzwYwAzMzMzEMD',
        who: 'Eniram', where: 'EU · Ravencrest', rating: '3v3 3165', at: '2026-08-13',
        note: '这是<b>一个人的配点</b>，不是 top50 的平均——平均配点没有对应的串。' +
          '选它的理由是：<b>它在全部 16 个分歧格上与多数派完全一致（16/16）</b>。' +
          '戒律牧是站上几个专精里配点空间最大的一个，' +
          '<b>这串只是一个起点，下面那 7 格更值得你按自己的局面重调。</b>',
      },
      tree: {
        survey: '职业树 48 格 + 专精树 42 格 + 英雄天赋 28 格，共 <b>118 格</b>。' +
          '扣掉只有 8 人走的虚空编织者整条线、以及先知线里跟着「走这条线」一起点掉的 12 格，' +
          '仍有 <b>16 格</b>存在真实分歧——' +
          '<b>这是站上几个专精里配点空间最大的一棵树</b>，下面是其中最值得想的 7 格。',
        picks: [
          {
            n: 'Move with Grace', tree: '职业', u: 39,
            b: '<sk>信仰飞跃</sk>冷却缩短 30 秒。' +
              '<br><sk>信仰飞跃</sk>是把队友从死地里拽回来的那一手。冷却缩短直接等于<b>一局多救一次</b>。' +
              '78% 的使用率，接近定盘。'
          },
          {
            n: 'Binding Heals', tree: '职业', u: 27,
            b: '<sk>快速治疗</sk>与暗影愈合对他人治疗量的 20% 同时治疗你自己。' +
              '<br><b>正好对半分的一格。</b>判据不是强弱，是<b>这局挨打的是谁</b>：' +
              '你被集火时它一直在生效；对面打你队友时，这一点是空的。'
          },
          {
            n: 'Desperate Measures', tree: '英雄', u: 27,
            b: '<sk>绝望祷言</sk>持续时间延长 10 秒，天使壁垒的吸收量提高。' +
              '<br>同样对半。<b>它救的是「一波爆发打不死你」</b>——' +
              '对面是爆发型阵容时值，对面是磨血型时收益小。'
          },
          {
            n: 'Shadow Tap', tree: '专精', u: 18,
            b: '<sk>心灵震爆</sk>伤害提高 150%，但法力消耗提高 40%。' +
              '<br>戒律靠伤害转治疗，所以这不只是输出天赋。<b>它是拿蓝换治疗量</b>——' +
              '短局值，拖到蓝见底的长局反而害你。'
          },
          {
            n: 'Occultist', tree: '专精', u: 18,
            b: '暗影系伤害与治疗提高 15%。' +
              '<br>与上面那格同为 36%——<b>大约三分之一的人在打「输出型戒律」</b>。' +
              '这条路线要求你有余裕去输出；被压着打的局它一点用没有。'
          },
          {
            n: 'Strength of Resolve', tree: '职业', u: 17,
            b: '耐力提高 6%。' +
              '<br>纯血量。<b>对面能一波把你打死时，血量比任何治疗量都有用。</b>'
          },
          {
            n: 'Translucent Image', tree: '职业', u: 12,
            b: '<sk>渐隐术</sk>使你受到的伤害降低 10%。' +
              '<br><sk>渐隐术</sk>冷却短，等于一个高频小减伤。' +
              '24% 的使用率偏低——多数人把这一点留给了别处。'
          },
        ],
        src: '使用率：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 戒律牧 top 50</b> 实测配点。' +
          '另外 10 格分歧使用率都在 16% 以下，不单列。' +
          '「什么时候点」为编者按天赋效果与该专精打法推导，非实测结论。',
      },
    },
    gear: {
      stats: [
        { n: '精通', v: '主堆', pct: 100 },
        { n: '全能', v: '主堆', pct: 96 },
        { n: '急速', v: '兼顾', pct: 64, mid: 1 },
        { n: '爆击', v: '可弃', pct: 1, dim: 1 },
      ],
      statRead: '<b>三条都有分量，断层只在爆击之前。</b>' +
        '精通领先、全能紧跟、急速也不低——<b>前三条按拿到什么用什么</b>，不用为了排序去换件。',
      statSrc: '数据：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 戒律牧 top 50</b> 实测配装。' +
        '档位划分为编者按断层位置判定。',
    },
  },
  {
    file: 'unholy-dk', kind: 'spec', cls: 'deathknight', spec: 'unholy',
    h1: '邪恶死骑 PvP 判断训练器', short: '邪恶死骑',
    icon: 'spell_deathknight_unholypresence', tier: 'S', color: '#C41E3A',
    crumb: ['死亡骑士', '邪恶'], store: 'banyeUnholyDKPvP1207', quizSec: 's4',
    catLabel: { general: '通用手法' },
    done: {
      hi: '你已经在看「病铺没铺满」，不是在看冷却好没好。',
      mid: '基础判断成立，把错题再过一轮。',
      lo: '先回骨架页把「该不该开」的四条件过一遍。',
    },
    talent: {
      rows: [
        { lb: '英雄天赋', vv: '<b>天启骑手 Rider of the Apocalypse</b> —— top50 三对三里 50 人全用，圣血 San\'layn <b>0 人</b>。这不是推荐，是唯一解。' },
        { lb: 'PvP 天赋 · 唯一必带', vv: '<b>Necrotic Wounds</b> —— <b>50/50</b>，没有例外。减疗靠疫病顺带完成' },
        {
          lb: 'PvP 天赋 · 另两格',
          vv: '<b>Spellwarden</b>（41/50）—— 抗法术，对面法系多就带<br>' +
            '<sk>绞袭</sk>（38/50）—— 4 秒沉默，卡治疗读条<br>' +
            '<b>Bloodforged Armor</b>（12/50）—— 抗物理，只在对面双近战时换上<br>' +
            '<span class="dimtx">三者占了这两格全部选择的 91%。</span>'
        },
      ],
      note: '「Necrotic Wounds」「Spellwarden」「Bloodforged Armor」暂无官方简体中文名，使用英文原名。',
      imp: {
        str: 'CwPAkXBWxkyfx9CbGaHonEAhLBYmBjZmZYWGzMTzmxMzMMDAAAAAAAgZGzMDAWmxMDzMmZGwmZzwQGY2YoxCDwMAMmZGzAMzMMG',
        who: 'Dandyz', where: 'US · Trollbane', rating: '3v3 3151', at: '2026-08-13',
        note: '这是<b>一个人的配点</b>，不是 top50 的平均——平均配点没有对应的串。' +
          '选它的理由是：<b>它在下面 5 个分歧格上与多数派完全一致（5/5）</b>。' +
          '<b>邪恶死骑的配点比站上其他专精分散得多</b>——前五名里另外几个只对上 2 格。' +
          '这说明这 5 格是真的看局面，不是有个标准答案而别人没抄对。' +
          '<b>粘进游戏当起点，那 5 格更要按自己的阵容重调。</b>',
      },
      tree: {
        survey: '职业树 44 格 + 专精树 37 格 + 英雄天赋 28 格，共 <b>109 格</b>。' +
          '扣掉没人走的圣血整条线、以及天启骑手线里跟着「走这条线」一起点掉的 13 格，' +
          'top50 的实测里 <b>104 格是定死的</b>。真正需要你判断的只有下面 <b>5 格</b>。',
        picks: [
          {
            n: 'Blood Draw', tree: '职业', u: 35,
            b: '血量跌破 30% 时，从附近敌人身上吸取生命，并在随后一段时间里降低受到的伤害、' +
              '让<sk>天灾契约</sk>之外的自保更便宜。两分钟只能触发一次。' +
              '<br><b>它是被动保命，不是主动牌。</b>70% 的人带它，说明大多数局面里邪恶会被打到 30% 以下——' +
              '你要判断的是：这一局你是集火目标吗？不是的话，这一点可以换成输出。'
          },
          {
            n: 'Grip of the Dead', tree: '职业', u: 34,
            b: '<sk>枯萎凋零</sk>范围内的敌人移动速度大幅降低，随时间递减。' +
              '<br><b>邪恶抓人靠<sk>死亡之握</sk>，黏人靠这个。</b>' +
              '对面靠位移拉扯（法师、德鲁伊、DH）时它把地面变成陷阱；' +
              '对面是站桩型阵容，这一点几乎不动。'
          },
          {
            n: 'Cycle of Death', tree: '专精', u: 31,
            b: '腐化与<sk>枯萎凋零</sk>互相缩短对方的冷却。' +
              '<br>它买的是<b>「地面能不能一直铺着」</b>。' +
              '3v3 里目标多、<sk>枯萎凋零</sk>能打到的人多，转得就快；' +
              '2v2 或者对面很分散的时候，这个循环转不起来。'
          },
          {
            n: 'Coldthirst', tree: '职业', u: 29,
            b: '用<sk>心灵冰冻</sk>成功打断后回复符文能量，并缩短它的冷却。' +
              '<br><b>只在对面有读条时才有价值。</b>对面两个法系，你一局能打断很多次，' +
              '这一点等于白送资源；对面纯近战，它是死点。' +
              '58% 的使用率正好反映「看阵容」这件事。'
          },
          {
            n: 'Infected Claws', tree: '专精', u: 19,
            b: '食尸鬼的爪击有几率让目标染病，造成一段持续暗影伤害。' +
              '<br>依附于宠物能不能持续打到人。<b>38% 是这 5 格里最低的</b>——' +
              '对面机动性高的时候，宠物本来就贴不上，这一点跟着一起落空。'
          },
        ],
        src: '使用率：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 邪恶死骑 top 50</b> 实测配点。' +
          '「什么时候点」为编者按天赋效果与该专精打法推导，非实测结论。' +
          '暂无官方简体中文名的天赋使用英文原名。',
      },
    },
    gear: {
      stats: [
        { n: '全能', v: '主堆', pct: 100 },
        { n: '精通', v: '兼顾', pct: 58, mid: 1 },
        { n: '急速', v: '次要', pct: 28, mid: 1 },
        { n: '爆击', v: '可弃', pct: 4, dim: 1 },
      ],
      statRead: '<b>全能一枝独秀，之后是断层。</b>全能同时给伤害和减伤——' +
        '邪恶是站着输出的专精，两头都吃得到。<b>精通和急速拿到什么用什么</b>，不用为它们放弃全能。',
      statSrc: '数据：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 邪恶死骑 top 50</b> 实测配装。' +
        '档位划分为编者按断层位置判定。',
    },
  },
  {
    file: 'windwalker-monk', kind: 'spec', cls: 'monk', spec: 'windwalker',
    h1: '踏风武僧 PvP 判断训练器', short: '踏风武僧',
    icon: 'spell_monk_windwalker_spec', tier: 'S', color: '#00FF98',
    crumb: ['武僧', '踏风'], store: 'banyeWWMonkPvP1207', quizSec: 's4',
    catLabel: { general: '通用手法' },
    done: {
      hi: '你已经在看「他什么时候开」，不是在看自己冷却好没好。',
      mid: '基础判断成立，把错题再过一轮。',
      lo: '先回骨架页把「该不该开」的四条件过一遍。',
    },
    talent: {
      rows: [
        { lb: '英雄天赋', vv: '<b>影踏 Shado-Pan</b>（48/50）—— 天神引导只有 2 人。围绕 Flurry Strikes 与<sk>怒雷破</sk>展开。' },
        { lb: 'PvP 天赋 · 唯一必带', vv: '<b>Turbo Fists</b> —— <b>50/50</b>，没有例外。<sk>怒雷破</sk>期间减速 90% + 招架全部攻击' },
        {
          lb: 'PvP 天赋 · 另两格',
          vv: '<b>Ride the Wind</b>（35/50）—— 清减速并给队友铺路<br>' +
            '<b>Grapple Weapon</b>（32/50）—— 缴械，对面物理输出重时上<br>' +
            '<b>Wind Waker</b>（30/50）—— 强化位移增益<br>' +
            '<span class="dimtx">四项占了全部选择的 98%，三格分得很匀 —— 这两格是真的看阵容。</span>'
        },
      ],
      note: '上述 PvP 天赋暂无官方简体中文名，使用英文原名。',
      imp: {
        str: 'C0QAQnG51S19isUJoJoTeJ/IKbmZMYMDbzMz2MAAAAAAAAAAAALDjwMz2wAwMmZMzYWmFGmlZCAYzMLzMMzMzABwmxysMmmtZpZmZWAGGYmxAwCjBzY28B',
        who: 'Doritoxd', where: 'US · Duskwood', rating: '3v3 3183', at: '2026-08-14',
        note: '这是<b>一个人的配点</b>，不是 top50 的平均——平均配点没有对应的串。' +
          '选它的理由是：<b>它在下面 6 个分歧格上与多数派一致 5 格</b>。' +
          '<b>踏风的分歧格有 17 个，是站上最多的之一</b>——这串只是一个起点，' +
          '那些格子更要按自己的阵容重调。',
      },
      tree: {
        survey: '职业树 52 格 + 专精树 47 格 + 英雄天赋 28 格，共 <b>127 格</b>。' +
          '扣掉只有 2 人走的天神引导整条线、以及影踏线里跟着「走这条线」一起点掉的格子，' +
          'top50 的实测里 <b>110 格是定死的</b>。真正需要判断的有 <b>17 格</b>，' +
          '<b>这是站上分歧最多的一棵树之一</b>，下面是其中 6 格。',
        picks: [
          {
            n: 'Universal Energy', tree: '专精', u: 42,
            b: '你的法术伤害提高 8%。' +
              '<br>纯增伤，不看对面。<b>84% 接近定盘</b>——踏风的伤害里法术部分占比不低（真气类技能），' +
              '所以这一格比看起来值。不点的那 8 人是把它换成了保命或机动。'
          },
          {
            n: 'Windwalking', tree: '职业', u: 36,
            b: '你和 10 码内的盟友移动速度提高 4%，可与其他效果叠加。' +
              '<br><b>它是给队伍的，不是给你的。</b>队友里有需要跑位的（治疗、法系）时价值翻倍；' +
              '双近战阵容里这一点几乎不动。'
          },
          {
            n: 'Peace and Prosperity', tree: '职业', u: 33,
            b: '<sk>平心之环</sk>冷却降低 5 秒，<sk>赤精之歌</sk>施法时间缩短。' +
              '<br>买的是<b>「环能不能多放一次」</b>。对面靠贴身输出（双近战）时，' +
              '多一个环等于多一次把人踢出去的机会；对面是远程阵容，这一点收益有限。'
          },
          {
            n: 'Knowledge of the Broken Temple', tree: '专精', u: 32,
            b: '<sk>风领主之击</sk>和<sk>升龙霸</sk>授予 4 层 Teachings，且层数上限提到 8 层。' +
              '<br><b>它把爆发窗口的层数直接拉满。</b>' +
              '你打法偏「攒一个大窗口一次结账」就点它；偏持续输出的话，8 层上限用不满。'
          },
          {
            n: 'Ironshell Brew', tree: '职业', u: 29, ch: 1,
            b: '<sk>壮胆酒</sk>激活期间，最大生命值再 +10%、受到伤害再 −10%。' +
              '<br><b>这是二选一格</b>——同格另一个选项数据源没给。' +
              '它把<sk>壮胆酒</sk>从「一般减伤」变成「真正扛得住一波」，' +
              '你是集火目标的局值，不是的话换成输出更实在。'
          },
          {
            n: 'Stillstep Coil', tree: '职业', u: 29,
            b: '<sk>扫堂腿</sk>结束时对目标施加 Disable（重减速），持续 5 秒。' +
              '<br><b>把一次性的昏迷接成一段黏人</b>。对面靠跑位拉扯时很值；' +
              '对面是站桩型阵容，昏迷结束他本来也不走，这一点是空的。'
          },
        ],
        src: '使用率：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 踏风武僧 top 50</b> 实测配点。' +
          '「什么时候点」为编者按天赋效果与该专精打法推导，非实测结论。' +
          '暂无官方简体中文名的天赋使用英文原名。',
      },
    },
    gear: {
      stats: [
        { n: '精通', v: '主堆', pct: 100 },
        { n: '全能', v: '主堆', pct: 82 },
        { n: '爆击', v: '可弃', pct: 11, dim: 1 },
        { n: '急速', v: '可弃', pct: 8, dim: 1 },
      ],
      statRead: '<b>精通和全能一组，之后是断崖。</b>' +
        '<b>急速排在最后是这个专精的特点</b>——踏风的伤害靠层数和窗口，不靠出手快。' +
        '前两条一起堆，后两条装备上带多少算多少。',
      statSrc: '数据：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 踏风武僧 top 50</b> 实测配装。' +
        '档位划分为编者按断层位置判定。',
    },
  },
  {
    file: 'ret-paladin', kind: 'spec', cls: 'paladin', spec: 'retribution',
    h1: '惩戒骑 PvP 判断训练器', short: '惩戒骑',
    icon: 'spell_holy_auraoflight', tier: 'A+', color: '#F48CBA',
    crumb: ['圣骑士', '惩戒'], store: 'banyeRetPalaPvP1207', quizSec: 's4',
    catLabel: { general: '通用手法' },
    done: {
      hi: '你已经在算 Forbearance 的时间轴，不是看谁血低就给牌。',
      mid: '基础判断成立，把错题再过一轮。',
      lo: '先回骨架页把「该不该开」的四条件过一遍。',
    },
    talent: {
      rows: [
        { lb: '英雄天赋', vv: '<b>晨光使者 Herald of the Sun</b> —— top50 里 50 人全用，圣殿武士 <b>0 人</b>。这不是推荐，是唯一解。' },
        { lb: 'PvP 天赋 · 两格接近必带', vv: '<sk>庇护祝福</sk>（50/50）—— 拆控制链<br><b>Hallowed Ground</b>（49/50）—— <sk>奉献</sk>清队友身上的减速' },
        {
          lb: 'PvP 天赋 · 第三格看阵容',
          vv: '<b>Blessing of Spellwarding</b>（28/50）—— 免疫魔法版的保护祝福，对面法系重时换上<br>' +
            '<b>Searing Glare</b>（14/50）—— 范围致盲<br>' +
            '<span class="dimtx">四项占了全部选择的 94%。</span>'
        },
      ],
      note: '「Hallowed Ground」「Blessing of Spellwarding」「Searing Glare」暂无官方简体中文名，使用英文原名。',
      imp: {
        str: 'CYEAzbn3egSOtoSwvPw1U1vTLAAAAAANLbzMzyYmZMAAAAAAzUmlZYG2GPw2wMbz4BMmZYGLsNAMLz2Mzs0Mz0yMzyMAgNADgxYmtxgZMsglZmZGGDDG',
        who: 'Budgetcara', where: 'EU · Stormscale', rating: '3v3 3172', at: '2026-08-14',
        note: '这是<b>一个人的配点</b>，不是 top50 的平均——平均配点没有对应的串。' +
          '选它的理由是：<b>它在下面 6 个分歧格上与多数派一致 4 格</b>，在前几名里贴合度最高。' +
          '<b>惩戒的 14 个分歧格里有不少是「给队友的加成」</b>——' +
          '这类格子跟你的队伍构成关系很大，粘完更要按自己的队友重调。',
      },
      tree: {
        survey: '职业树 54 格 + 专精树 34 格 + 英雄天赋 28 格，共 <b>116 格</b>。' +
          '扣掉没人走的圣殿武士整条线、以及晨光使者线里跟着「走这条线」一起点掉的格子，' +
          'top50 的实测里 <b>102 格是定死的</b>。真正需要判断的是 <b>14 格</b>，下面是其中 6 格。',
        picks: [
          {
            n: 'Holy Ritual', tree: '职业', u: 42,
            b: '对盟友施放<sk>保护祝福</sk>或<sk>牺牲祝福</sk>时，额外为其治疗一次。' +
              '<br><b>84% 接近定盘。</b>它把「救人」这个动作的收益翻了一倍——' +
              '你本来就要给牌，顺带还回一口血。<b>惩戒的价值一半在队友身上，这一格正是那一半的加成。</b>'
          },
          {
            n: 'Heart of the Crusader', tree: '专精', u: 41,
            b: '<sk>十字军打击</sk>和自动攻击伤害提高，爆击伤害也提高。' +
              '<br>纯输出加成，不看对面。<b>82% 说明多数人认为惩戒的基础输出值得投资</b>——' +
              '不点的那 9 人是把这一点换成了生存或机动。'
          },
          {
            n: 'Blessed Champion', tree: '专精', u: 36,
            b: '<sk>十字军打击</sk>和<sk>审判</sk>额外命中 4 个目标，但对次要目标伤害降低。' +
              '<br><b>它买的是「多目标压力」。</b>3v3 里对面站得近、需要同时给三个人上压力时值；' +
              '打法偏单点集火的话，这一点的收益就薄了。'
          },
          {
            n: 'Crusading Strikes', tree: '专精', u: 32, ch: 1,
            b: '<sk>十字军打击</sk>取代自动攻击，但自动攻击速度降低。' +
              '<br><b>这是二选一格</b>——它把你的输出模式从「按技能」改成「自动流」。' +
              '好处是不占 GCD，坏处是节奏变钝。<b>64% 说明这个改动不是无脑正确</b>，' +
              '手法密集的打法反而不喜欢它。'
          },
          {
            n: 'Blessed Calling', tree: '职业', u: 30,
            b: '受你祝福影响的盟友移动速度提高。' +
              '<br><b>又一个「价值在队友身上」的格子。</b>队友需要跑位（治疗、法系）时价值高；' +
              '双近战阵容里这一点几乎不动。'
          },
          {
            n: 'Blessing of Protection', tree: '职业', u: 26,
            b: '祝福一名队友，使其短时间内免疫物理伤害和有害效果，并造成 20 秒 Forbearance。' +
              '<br><b>只有一半的人点它，这件事本身值得想。</b>它是全游戏最强的外部牌之一，' +
              '但它带 Forbearance——<b>点了它，你的<sk>圣疗术</sk>就会被它挤占</b>。' +
              '不点的那一半是选择把治疗留得更灵活。'
          },
        ],
        src: '使用率：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 惩戒骑 top 50</b> 实测配点。' +
          '「什么时候点」为编者按天赋效果与该专精打法推导，非实测结论。' +
          '暂无官方简体中文名的天赋使用英文原名。',
      },
    },
    gear: {
      stats: [
        { n: '全能', v: '主堆', pct: 100 },
        { n: '精通', v: '兼顾', pct: 46, mid: 1 },
        { n: '急速', v: '可弃', pct: 10, dim: 1 },
        { n: '爆击', v: '可弃', pct: 0, dim: 1 },
      ],
      statRead: '<b>全能一枝独秀，之后是断崖。</b>全能同时提高伤害和减伤——' +
        '对一个既要输出又要给队友挡刀的专精，两头都吃得到。' +
        '<b>爆击实测接近 0</b>，完全不用考虑。',
      statSrc: '数据：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 惩戒骑 top 50</b> 实测配装。' +
        '档位划分为编者按断层位置判定。',
    },
  },
  {
    file: 'enhance-shaman', kind: 'spec', cls: 'shaman', spec: 'enhancement',
    h1: '增强萨 PvP 判断训练器', short: '增强萨',
    icon: 'spell_shaman_improvedstormstrike', tier: 'A+', color: '#0070DD',
    crumb: ['萨满祭司', '增强'], store: 'banyeEnhShamPvP1207', quizSec: 's4',
    catLabel: { general: '通用手法' },
    done: {
      hi: '你已经在算「什么时候花层数」，不是一味贴脸打。',
      mid: '基础判断成立，把错题再过一轮。',
      lo: '先回骨架页把「该不该开」的四条件过一遍。',
    },
    talent: {
      rows: [
        { lb: '英雄天赋 · 有主流但有得选', vv: '<b>唤雷者 Stormbringer</b>（36/50）　vs　<b>图腾师 Totemic</b>（14/50）<br>' +
          '<span class="dimtx">28% 的人走另一条线 —— 这不是 50/0 那种唯一解，这一格有真实的讨论空间。</span>' },
        { lb: 'PvP 天赋 · 三格几乎固定', vv: '<b>Shamanism</b>（50/50）—— 嗜血冷却降到 60 秒且不受疲惫限制<br>' +
          '<b>Burrow</b>（48/50）—— 钻地免疫 + 清减速<br>' +
          '<sk>根基图腾</sk>（43/50）—— 吸掉一个针对队友的有害法术<br>' +
          '<span class="dimtx">三项占了全部选择的 94%。<b>其中两格是救命牌不是输出牌</b>。</span>' },
      ],
      note: '「Shamanism」「Burrow」暂无官方简体中文名，使用英文原名。',
      imp: {
        str: 'CcQALMl7AwW51MWzGneuHE3tPOzMDMzMzMzMMzMDAAAAAAAAwGWw2yMmZ2W0ssNMDzMNYBgZbwYstMjFmZ2GLmZmhZ2GzAAMDzMzYmJmZmZwgxA',
        who: 'Frogtide', where: 'US · Tichondrius', rating: '3v3 3227', at: '2026-08-14',
        note: '这是<b>一个人的配点</b>，不是 top50 的平均——平均配点没有对应的串。' +
          '选它的理由是：<b>它在下面 6 个分歧格上与多数派完全一致（6/6）</b>。' +
          '<b>但增强萨有 20 个分歧格，是站上最多的</b>——' +
          '这串只是一个起点，剩下那些格子更要按自己的阵容重调。',
      },
      tree: {
        survey: '职业树 46 格 + 专精树 37 格 + 英雄天赋 28 格，共 <b>111 格</b>。' +
          'top50 的实测里 91 格定死，<b>需要判断的有 20 格 —— 站上分歧最多的一棵树</b>。' +
          '英雄天赋 36 比 14 也不是一边倒。' +
          '这个专精的配点自由度明显高于多数专精，下面是其中 6 格。',
        picks: [
          {
            n: "Storm's Wrath", tree: '专精', u: 41,
            b: '精通「Enhanced Elements」触发 Windfury 和 Stormsurge 的几率大幅提高。' +
              '<br><b>82% 接近定盘。</b>它加快的是触发频率，也就是<b>攒漩涡武器的速度</b>——' +
              '对一个靠层数吃饭的专精，这一格买的是资源效率。'
          },
          {
            n: 'Flurry', tree: '专精', u: 36,
            b: '法术或技能爆击后，接下来 3 次近战挥击的攻击速度提高。' +
              '<br>同样是攒层效率。<b>它依附于爆击</b>——而增强萨的爆击实测只有 3，' +
              '所以这一格的实际触发频率比看起来低。72% 的人仍然点它，说明近战出手速度本身就值。'
          },
          {
            n: 'Converging Storms', tree: '专精', u: 36,
            b: '<sk>毁灭闪电</sk>每击中一个目标，你下一次<sk>风暴打击</sk>的伤害提高，最多叠 6 层。' +
              '<br><b>它的价值直接跟对面站多近挂钩。</b>3v3 里对面挤在一起时能叠满；' +
              '对面分散或者你在打单体，这一格只能叠一两层。'
          },
          {
            n: 'Ascendance', tree: '专精', u: 36, ch: 1,
            b: '化身风之升腾者，攻击转为无视护甲的远程风之攻击，并释放<sk>毁灭之风</sk>。' +
              '<br><b>这是二选一格</b>——同格另一个选项数据源没给。' +
              '它解决的是增强萨最大的结构问题：<b>贴不上人就攒不了资源</b>。' +
              '对面机动性强、总把你赶开时，这一格是刚需；对面站桩硬打，它只是普通爆发。'
          },
          {
            n: 'Chaining Storms', tree: '专精', u: 35,
            b: '<sk>闪电链</sk>额外跳跃到 2 个目标，伤害提高。' +
              '<br><b>它加的是「花层数那一下」的收益。</b>' +
              '3v3 里目标多、闪电链跳得满时很值；单体局面下这一格的加成打折。'
          },
          {
            n: "Nature's Protection", tree: '英雄', u: 35, ch: 1,
            b: 'Lightning Shield 使你受到的伤害降低。' +
              '<br><b>又一个二选一格。</b>纯生存加成，不看对面伤害类型。' +
              '70% 的使用率说明多数人认为增强萨在 PvP 里挨打太多——' +
              '你不是集火目标的局，这一点可以换成输出。'
          },
        ],
        src: '使用率：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 增强萨 top 50</b> 实测配点。' +
          '「什么时候点」为编者按天赋效果与该专精打法推导，非实测结论。' +
          '暂无官方简体中文名的天赋使用英文原名。',
      },
    },
    gear: {
      stats: [
        { n: '全能', v: '主堆', pct: 100 },
        { n: '急速', v: '兼顾', pct: 65, mid: 1 },
        { n: '精通', v: '可弃', pct: 15, dim: 1 },
        { n: '爆击', v: '可弃', pct: 3, dim: 1 },
      ],
      statRead: '<b>全能领先、急速紧跟，之后是断崖。</b>' +
        '急速对增强萨的价值高于多数专精 —— 它加快近战出手，也就加快漩涡武器的攒层速度。' +
        '<b>前两条一起堆，精通和爆击装备上带多少算多少。</b>',
      statSrc: '数据：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 增强萨 top 50</b> 实测配装。' +
        '档位划分为编者按断层位置判定。',
    },
  },
  {
    file: 'balance-druid', kind: 'spec', cls: 'druid', spec: 'balance',
    h1: '平衡德 PvP 判断训练器', short: '平衡德',
    icon: 'spell_nature_starfall', tier: 'A+', color: '#FF7C0A',
    crumb: ['德鲁伊', '平衡'], store: 'banyeBalanceDruidPvP1207', quizSec: 's4',
    catLabel: { general: '通用手法' },
    done: {
      hi: '你已经在想「这一局旋风该给谁」，不是见人就控。',
      mid: '基础判断成立，把错题再过一轮。',
      lo: '先回骨架页把「该不该开」的四条件过一遍。',
    },
    talent: {
      rows: [
        { lb: '英雄天赋', vv: '<b>丛林守护者 Keeper of the Grove</b>（49/50）—— 艾露恩之眷只有 1 人。这不是推荐，是唯一解。' },
        {
          lb: 'PvP 天赋 · 三格四个候选',
          vv: '<b>Moonkin Aura</b>（46/50）—— <sk>星涌术</sk>给队友法术爆击加成<br>' +
            '<b>Owlkin Adept</b>（43/50）—— 缩短<sk>旋风</sk>与<sk>纠缠根须</sk>施法时间<br>' +
            '<b>High Winds</b>（37/50）—— 增加<sk>旋风</sk>、<sk>台风</sk>、<sk>纠缠根须</sk>距离<br>' +
            '<b>Faerie Swarm</b>（13/50）—— 缴械并减速<br>' +
            '<span class="dimtx">注意前三个里有<b>两个在强化控制</b> —— top50 的共识是控场优先于伤害。</span>'
        },
      ],
      note: '上述 PvP 天赋暂无官方简体中文名，使用英文原名。',
      imp: {
        str: 'CYGADBD3hSPCL9Y9gz68WcKvMAAAAAAAAAAAAAAAAAWoMLNjxMD8AmtxMzMLwwMLjlhZMzwsMjZmZwGGAM22mx22MbzyMNzsMTAAAA2MzMzMYzwYMDgZGYGYA',
        who: 'Cowkiri', where: 'EU · Tarren Mill', rating: '3v3 3240', at: '2026-08-14',
        note: '这是<b>一个人的配点</b>，不是 top50 的平均——平均配点没有对应的串。' +
          '选它的理由是：<b>它在下面 6 个分歧格上与多数派一致 4 格</b>。' +
          '偏离的两格里，<sk>清除腐蚀</sk>是<b>典型的看阵容格</b>——' +
          '对面没有诅咒和中毒效果时，那一点确实是空的。',
      },
      tree: {
        survey: '职业树 53 格 + 专精树 38 格 + 英雄天赋 28 格，共 <b>119 格</b>。' +
          '扣掉几乎没人走的艾露恩之眷整条线，top50 的实测里 <b>104 格是定死的</b>。' +
          '真正需要判断的是 <b>15 格</b>，下面是其中 6 格。',
        picks: [
          {
            n: 'Forestwalk', tree: '职业', u: 42,
            b: '施放<sk>愈合</sk>使你的移动速度和受到的治疗提高，持续数秒。' +
              '<br><b>84% 接近定盘。</b>它买的是<b>「被贴脸之后能不能跑掉」</b>——' +
              '平衡德靠距离活着，这一格直接服务于那个前提。'
          },
          {
            n: 'Total Eclipse', tree: '专精', u: 42,
            b: '进入任一日蚀时有几率同时获得两种日蚀的加成。' +
              '<br>纯输出加成，不看对面。<b>它的价值是「减少切换日蚀的操作成本」</b>——' +
              '触发时你不用纠结该放哪种伤害类型的技能。'
          },
          {
            n: 'Umbral Intensity', tree: '专精', u: 40,
            b: '<sk>愤怒</sk>和<sk>星火术</sk>的伤害提高。' +
              '<br>基础输出加成。<b>这两个是你最常按的技能</b>，所以这一格的实际收益比看起来稳定。'
          },
          {
            n: 'Sunseeker Mushroom', tree: '专精', u: 39, ch: 1,
            b: '<sk>阳炎术</sk>的伤害有几率在目标位置长出蘑菇并爆炸，造成伤害并<b>减速 50%</b>。' +
              '<br><b>这是二选一格。</b>注意它带减速——<b>对平衡德来说「让对面走不掉」的价值不亚于伤害</b>。' +
              '对面机动性强时这一格更值。'
          },
          {
            n: 'Remove Corruption', tree: '职业', u: 38,
            b: '移除友方目标身上的所有诅咒和中毒效果。' +
              '<br><b>它是团队功能不是个人输出。</b>对面有大量诅咒/中毒（术士、盗贼）时是刚需；' +
              '对面阵容里没有这类效果，这一点就是空的。'
          },
          {
            n: 'Ursine Vigor', tree: '职业', u: 36,
            b: '切换到熊形态后数秒内，生命值和护甲提高。' +
              '<br><b>又一个「活下来」的格子。</b>被近战贴住时切熊形态硬扛几秒，' +
              '是平衡德的应急手段之一——<b>72% 的使用率说明这种场面很常见</b>。'
          },
        ],
        src: '使用率：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 平衡德 top 50</b> 实测配点。' +
          '「什么时候点」为编者按天赋效果与该专精打法推导，非实测结论。' +
          '暂无官方简体中文名的天赋使用英文原名。',
      },
    },
    gear: {
      stats: [
        { n: '全能', v: '主堆', pct: 100 },
        { n: '急速', v: '主堆', pct: 85 },
        { n: '精通', v: '可弃', pct: 12, dim: 1 },
        { n: '爆击', v: '可弃', pct: 1, dim: 1 },
      ],
      statRead: '<b>全能和急速几乎并列，之后是断崖。</b>' +
        '急速在这里价值特别高 —— <b>它缩短施法时间，而平衡德的控制和输出大多要读条</b>。' +
        '前两条一起堆，精通和爆击装备上带多少算多少。',
      statSrc: '数据：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 平衡德 top 50</b> 实测配装。' +
        '档位划分为编者按断层位置判定。',
    },
  },
  {
    file: 'devastation-evoker', kind: 'spec', cls: 'evoker', spec: 'devastation',
    h1: '湮灭唤魔师 PvP 判断训练器', short: '湮灭唤魔师',
    icon: 'classicon_evoker', tier: 'A+', color: '#33937F',
    crumb: ['唤魔师', '湮灭'], store: 'banyeDevoEvokerPvP1207', quizSec: 's4',
    catLabel: { general: '通用手法' },
    done: {
      hi: '你已经在算「现在敢不敢站住」，不是无脑蓄满。',
      mid: '基础判断成立，把错题再过一轮。',
      lo: '先回骨架页把「该不该开」的四条件过一遍。',
    },
    talent: {
      rows: [
        { lb: '英雄天赋', vv: '<b>龙鳞指挥官 Scalecommander</b>（49/50）—— 塑焰者只有 1 人。围绕<sk>深呼吸</sk>展开。' },
        { lb: 'PvP 天赋 · 唯一必带', vv: '<b>Unburdened Flight</b>（49/50）—— <sk>悬空</sk>期间移动速度不会被降到 100% 以下，<b>等于免疫减速</b>' },
        {
          lb: 'PvP 天赋 · 另两格',
          vv: '<b>Time Stop</b>（43/50）—— 冻结盟友时间流让他无敌<br>' +
            '<b>Scouring Flame</b>（30/50）—— <sk>火焰吐息</sk>灼烧有益魔法效果<br>' +
            '<b>Obsidian Mettle</b>（26/50）—— <sk>黑曜鳞片</sk>期间<b>免疫打断和沉默</b><br>' +
            '<span class="dimtx">Obsidian Mettle 的使用率不算高，但<b>对上打断多的阵容它价值飙升</b> —— ' +
            '你的技能全要蓄力或引导，被打断就等于没输出。</span>'
        },
      ],
      note: '上述 PvP 天赋暂无官方简体中文名，使用英文原名。',
      imp: {
        str: 'CsbBPJc41CfcseY0baneJ1IHrBAAAAAAAAAAgZmZGmZYGmhZGYMTjZmJDWGzMzYmZmZGgZMjHYmZZMDMwYwGsMGN2GQmJAbYgZGYMA',
        who: 'Shenlongx', where: 'EU · Aegwynn', rating: '3v3 3158', at: '2026-08-14',
        note: '这是<b>一个人的配点</b>，不是 top50 的平均——平均配点没有对应的串。' +
          '选它的理由是：<b>它在下面 6 个分歧格上与多数派一致 5 格</b>。' +
          '<b>但湮灭有 22 个分歧格，是站上最多的之一</b>——' +
          '这串只是一个起点，剩下的格子更要按自己的阵容和打法重调。',
      },
      tree: {
        survey: '职业树 48 格 + 专精树 39 格 + 英雄天赋 28 格，共 <b>115 格</b>。' +
          '扣掉几乎没人走的塑焰者整条线，top50 的实测里 93 格定死，' +
          '<b>需要判断的有 22 格 —— 站上分歧最多的之一</b>。' +
          '注意这跟英雄天赋 49/1 并不矛盾：<b>大方向没得选，细节上自由度很高</b>。下面是其中 6 格。',
        picks: [
          {
            n: 'Potent Mana', tree: '职业', u: 42,
            b: '魔法源泉使目标的治疗和伤害提高。' +
              '<br><b>它是给队友的，不是给你的。</b>84% 的使用率说明这个增益在 3v3 里很值——' +
              '但如果队伍里没有能吃到它的治疗，这一点就打折了。'
          },
          {
            n: 'Honed Aggression', tree: '专精', u: 41,
            b: '你的法术爆击几率提高。' +
              '<br>纯输出加成，不看对面。<b>注意湮灭的爆击实测只有 13</b>——' +
              '这一格补的正是那个短板，所以 82% 的人点它。'
          },
          {
            n: 'Innate Magic', tree: '职业', u: 36,
            b: '精华的回复速度提高。' +
              '<br><b>资源效率格。</b>你的<sk>裂解</sk>和<sk>葬火</sk>都要花精华，' +
              '回复越快，窗口里能按出的技能越多。'
          },
          {
            n: 'Strike from Above', tree: '职业', u: 34,
            b: '滑翔速度和高度提高。' +
              '<br><b>纯机动格。</b>68% 的人点它——对一个「站定输出、怕被贴脸」的专精，' +
              '机动性直接换成了活着的时间。'
          },
          {
            n: 'Power Nexus', tree: '专精', u: 33,
            b: '最大精华提高到 6 点。' +
              '<br><b>它买的是「爆发窗口的容量」</b>——上限越高，' +
              '你能在<sk>狂龙之怒</sk>期间连续按出的消耗技能越多。'
          },
          {
            n: "Eternity's Span", tree: '专精', u: 31,
            b: '<sk>永恒之涌</sk>命中的目标数量翻倍。' +
              '<br><b>典型的看赛制格。</b>3v3 里对面站近时收益翻倍；' +
              '打单体或者对面很分散，这一点几乎不动。62% 的分布正反映这种不确定性。'
          },
        ],
        src: '使用率：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 湮灭唤魔师 top 50</b> 实测配点。' +
          '「什么时候点」为编者按天赋效果与该专精打法推导，非实测结论。' +
          '暂无官方简体中文名的天赋使用英文原名。',
      },
    },
    gear: {
      stats: [
        { n: '全能', v: '主堆', pct: 100 },
        { n: '精通', v: '兼顾', pct: 59, mid: 1 },
        { n: '急速', v: '兼顾', pct: 46, mid: 1 },
        { n: '爆击', v: '可弃', pct: 13, dim: 1 },
      ],
      statRead: '<b>全能领先，精通和急速跟在后面，只有爆击掉队。</b>' +
        '这是站上属性分布最平均的专精之一 —— <b>前三条拿到什么用什么</b>，' +
        '不用为了排序去换件。',
      statSrc: '数据：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 湮灭唤魔师 top 50</b> 实测配装。' +
        '档位划分为编者按断层位置判定。',
    },
  },
  {
    file: 'mm-hunter', kind: 'spec', cls: 'hunter', spec: 'marksmanship',
    h1: '射击猎人 PvP 判断训练器', short: '射击猎人',
    icon: 'ability_hunter_focusedaim', tier: 'A', color: '#AAD372',
    crumb: ['猎人', '射击'], store: 'banyeMMHunterPvP1207', quizSec: 's4',
    catLabel: { general: '通用手法' },
    done: {
      hi: '你已经在问「这一波我打不打得赢」，不是见血就慌。',
      mid: '基础判断成立，把错题再过一轮。',
      lo: '先回骨架页把「该不该开」的四条件过一遍。',
    },
    talent: {
      rows: [
        { lb: '英雄天赋', vv: '<b>黑暗游侠 Dark Ranger</b>（48/50）—— 哨兵只有 2 人。' +
          '它把<sk>夺命射击</sk>换成 Black Arrow，<b>敌人血量高于 80% 时也能用</b> —— 等于多了个开场技能。' },
        { lb: 'PvP 天赋 · 唯一必带', vv: '<b>Survival Tactics</b>（50/50）—— <sk>假死</sk>期间大幅减伤，<b>把脱战技能变成保命技能</b>' },
        {
          lb: 'PvP 天赋 · 另两格',
          vv: '<b>Chimaeral Sting</b>（39/50）—— 三段毒液：减速 → 沉默 → 减疗<br>' +
            '<b>Diamond Ice</b>（33/50）—— 冰冻陷阱不可驱散，但只有 4 秒<br>' +
            '<b>Ranger\'s Finesse</b>（21/50）—— 强化乱射并缩短灵龟守护冷却<br>' +
            '<span class="dimtx">Diamond Ice 是典型的取舍格：<b>不可驱散换更短时长</b>，对面有驱散就换上。</span>'
        },
      ],
      note: '上述 PvP 天赋暂无官方简体中文名，使用英文原名。',
      imp: {
        str: 'C4PAD57yiELKEty14ekTDtZEqYbZWGDjZMTjlZG2yMMbAAAAAAAAgZYMjFjZmZmxwoZMzY2W2mZmZmhZsNGLDmBAAMzYmZmZGMjtFMDwGjlZMA',
        who: 'Elopolice', where: 'EU · Argent Dawn', rating: '3v3 3167', at: '2026-08-14',
        note: '这是<b>一个人的配点</b>，不是 top50 的平均——平均配点没有对应的串。' +
          '选它的理由是：<b>它在下面 6 个分歧格上与多数派一致 4 格</b>。' +
          '偏离的两格（Born To Be Wild、Dark Chains）都是「机动与控场」类——' +
          '<b>这类格子跟你常遇到的阵容关系很大</b>，粘完更要按自己的对手重调。',
      },
      tree: {
        survey: '职业树 44 格 + 专精树 38 格 + 英雄天赋 28 格，共 <b>110 格</b>。' +
          '扣掉几乎没人走的哨兵整条线，top50 的实测里 <b>102 格是定死的</b>。' +
          '<b>真正需要判断的只有 8 格 —— 站上分歧最少的之一</b>，' +
          '这说明射击猎人的难点不在配点，在牌的使用时机和陷阱预判上。',
        picks: [
          {
            n: "Guardian's Hide", tree: '职业', u: 35, ch: 1,
            b: '宠物时刻保护你，使你受到的伤害降低，被减免的伤害由宠物承受。' +
              '<br><b>这是二选一格。</b>它把宠物变成了你的减伤来源——' +
              '<b>但宠物死了或被控住，这一点就没了</b>。对面会打宠物的话价值下降。'
          },
          {
            n: 'Penetrating Shots', tree: '专精', u: 35,
            b: '获得等于爆击几率 25% 的爆击伤害。' +
              '<br>纯输出加成。<b>注意射击猎人的爆击实测只有 3</b>——' +
              '这一格的实际收益取决于你能堆多少爆击，装备不同差别很大。'
          },
          {
            n: 'Born To Be Wild', tree: '职业', u: 33,
            b: '<sk>猎豹守护</sk>和<sk>灵龟守护</sk>的冷却时间降低 60 秒。' +
              '<br><b>它买的是「你能重置几次」。</b>猎人的核心资源就是这些牌——' +
              '冷却缩短等于多了几次推掉对面攻势的机会。'
          },
          {
            n: 'Dark Chains', tree: '英雄', u: 31, ch: 1,
            b: '战斗中<sk>逃脱</sk>会把最近的目标锁在地面，使其移动速度降低，直到他离开一定距离。' +
              '<br><b>把一个纯位移技能加上了控场效果。</b>对面近战多时价值高；' +
              '对面是远程阵容，锁不锁他都无所谓。'
          },
          {
            n: 'Improved Aspect of the Cheetah', tree: '职业', u: 26,
            b: '<sk>猎豹守护</sk>的冷却时间再降低 30 秒。' +
              '<br><b>52% 正好对半分。</b>它和 Born To Be Wild 是叠加的——' +
              '两个都点意味着你把资源全压在「跑得快」上，' +
              '不点的那一半人选择把这一点换成输出或生存。'
          },
          {
            n: 'Master Marksman', tree: '专精', u: 22,
            b: '你的远程技能爆击使目标流血，额外造成一段持续伤害。' +
              '<br><b>依附于爆击。</b>射击猎人的爆击本来就低（实测 3），' +
              '所以这一格的触发频率不高——44% 的分布正反映这种不确定性。'
          },
        ],
        src: '使用率：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 射击猎人 top 50</b> 实测配点。' +
          '「什么时候点」为编者按天赋效果与该专精打法推导，非实测结论。' +
          '暂无官方简体中文名的天赋使用英文原名。',
      },
    },
    gear: {
      stats: [
        { n: '全能', v: '主堆', pct: 100 },
        { n: '精通', v: '主堆', pct: 79 },
        { n: '急速', v: '可弃', pct: 14, dim: 1 },
        { n: '爆击', v: '可弃', pct: 3, dim: 1 },
      ],
      statRead: '<b>全能和精通一组，之后是断崖。</b>' +
        '<b>爆击实测只有 3</b> —— 这直接影响了几个依附爆击的天赋（Penetrating Shots、Master Marksman）的实际价值，' +
        '也是它们使用率不高的原因之一。',
      statSrc: '数据：Murlok.io · ' + PATCH + ' 赛季一 · 美/欧/韩/台四区 <b>3v3 射击猎人 top 50</b> 实测配装。' +
        '档位划分为编者按断层位置判定。',
    },
  },
  {
    file: 'rogue-priest-2v2', kind: 'comp', h1: '贼 + 戒律牧 · 2v2 组合训练器', short: '贼牧 2v2',
    icon: 'classicon_rogue', icon2: 'classicon_priest', tier: null, color: '#8b6fd4',
    crumb: ['组合', '2v2 贼牧'], store: 'banyeRoguePriest2v2_1207', quizSec: 's5',
    views: [{ k: 'rogue', label: '🗡 贼' }, { k: 'priest', label: '✚ 牧' }],
    v2c: { rogue: 'r', priest: 'p' },              // 视角名 → 题目 w 标记
    members: [
      { k: 'r', cls: 'R', label: '贼', icon: 'classicon_rogue' },
      { k: 'p', cls: 'P', label: '牧师', icon: 'classicon_priest' },
    ],
    ownKeys: { r: 'ROGUE_SK', p: 'PRIEST_SK' },
    catLabel: { r: '🗡 贼', p: '✚ 牧师', b: '⚔ 双方' },
    tagCls: { r: 'r', p: 'p', b: '' },
    done: { hi: '你们已经在轮流当主角，不是各打各的。', mid: '基础配合成立，把错题再过一轮。', lo: '先回骨架页把"谁是这一轮的主角"过一遍。' },
    talent: { rows: [{ lb: '两人的天赋定盘', todo: 1 }] },
    gear: {
      referNote: '<b>属性跟着专精走，两个人各自按自己的专精堆。</b>' +
        '组合层面没有额外取舍——队友是谁不改变副属性的收益。',
      refer: [
        { n: '敏锐贼', ic: 'classicon_rogue', page: 'subtlety-rogue.html' },
        { n: '戒律牧', ic: 'classicon_priest', page: 'discipline-priest.html' },
      ],
    },
  },
  {
    file: 'thug-cleave-3v3', kind: 'comp', h1: 'Thug Cleave · 贼 + 牧 + 猎 3v3', short: 'Thug Cleave',
    icon: 'classicon_rogue', icon2: 'classicon_priest', icon3: 'classicon_hunter', tier: null, color: '#8b6fd4',
    crumb: ['组合', '3v3 Thug Cleave'], store: 'banyeThugCleave3v3_1207', quizSec: 's6',
    views: [{ k: 'rogue', label: '🗡 贼' }, { k: 'priest', label: '✚ 牧' }, { k: 'hunter', label: '🏹 猎' }],
    v2c: { rogue: 'r', priest: 'p', hunter: 'h' },  // 视角名 → 题目 w 标记
    members: [
      { k: 'r', cls: 'R', label: '贼', icon: 'classicon_rogue' },
      { k: 'p', cls: 'P', label: '牧师', icon: 'classicon_priest' },
      { k: 'h', cls: 'H', label: '猎人', icon: 'classicon_hunter' },
    ],
    ownKeys: { r: 'R_SK', p: 'P_SK', h: 'H_SK' },
    catLabel: { r: '🗡 贼', p: '✚ 牧师', h: '🏹 猎人', b: '⚔ 全队' },
    tagCls: { r: 'r', p: 'p', h: 'h', b: '' },
    done: { hi: '你们已经在接控制链，不是三个人各打各的。', mid: '基础配合成立，把错题再过一轮。', lo: '先回骨架页把三个角色的分配过一遍。' },
    assign: {
      defaults: { lock: 'r', kill: 'h', relay: 'p' },   // 贼锁 / 猎杀 / 牧接 —— 成立的那个分法
      icons: { r: { cls: 'R', icon: 'classicon_rogue' }, p: { cls: 'P', icon: 'classicon_priest' }, h: { cls: 'H', icon: 'classicon_hunter' } },
      rules: {
        ok: { cls: 'good', ico: '◆', title: '这个分配成立', desc: '三个角色各有其人，控制链有两个来源，杀手能专心输出。' },
        dupDesc: '<b>一个人不能同时当两个角色。</b>3v3 的全部优势就在于三个人可以同时做三件不同的事——<b>重复分配等于自愿退回 2v2</b>。重新分一次。',
        warn: [
          { role: 'lock', memb: 'p', cls: 'warn', ico: '◐', title: '牧师当锁匠：能打，但很勉强', desc: '牧师只有 <sk>心灵尖啸</sk> 一个控制，<b>用它去锁治疗，应急时你就没牌了</b>。而且它是恐惧类，对面解控/免疫恐惧的手段通常比解眩晕多。<b>只在贼和猎人确实都腾不出手时才这么分。</b>' },
          { role: 'kill', memb: 'p', cls: 'warn', ico: '◐', title: '牧师当杀手：应急方案', desc: '戒律牧的输出没有取舍成本（<sk>救赎</sk> 让输出＝治疗），<b>但爆发上限不如贼和猎人</b>。这个分配只在另外两个都被压住时成立——<b>而那种局面下你更该先解决"为什么他们被压住"</b>。' },
          { role: 'relay', memb: 'r', cls: 'warn', ico: '◐', title: '贼当接手：浪费了最强的爆发', desc: '贼的爆发窗口是这个组合最高的伤害峰值，<b>让他当接手等于把它闲置</b>。除非对面控制极多、需要一个随时能 <sk>消失</sk> 脱身的人来兜底，否则换个分法。' },
        ],
      },
    },
    talent: { rows: [{ lb: '三人的天赋定盘', todo: 1 }] },
    gear: {
      referNote: '<b>属性跟着专精走，三个人各自按自己的专精堆。</b>' +
        '组合层面没有额外取舍——队友是谁不改变副属性的收益。',
      refer: [
        { n: '敏锐贼', ic: 'classicon_rogue', page: 'subtlety-rogue.html' },
        { n: '戒律牧', ic: 'classicon_priest', page: 'discipline-priest.html' },
        { n: '猎人', ic: 'classicon_hunter' },
      ],
    },
  },
];

module.exports = { PAGES };
