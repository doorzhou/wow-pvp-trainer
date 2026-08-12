/* 每页配置 —— 加一个专精就在 PAGES 里加一条 */
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
          lb: 'PvP 天赋 · 另两格三选二',
          vv: '<b>Preemptive Maneuver</b>（45/50）—— 近乎必带<br>' +
            '<sk>卸除武装</sk>（29/50）—— 对面伤害来自武器<br>' +
            '<sk>偷天换日</sk>（23/50）—— 让<sk>嫁祸诀窍</sk>额外给队友 15% 伤害，队友能跟你对齐爆发时<br>' +
            '<span class="dimtx">三者占了这两格全部选择的 97%，剩下的 3% 是零星试验。</span>'
        },
      ],
      note: '「Preemptive Maneuver」暂无官方简体中文名。' +
        '<b><sk>嫁祸诀窍</sk>（职业树）本身只转移威胁值</b>——给队友加 15% 伤害要靠 PvP 天赋' +
        '<sk>偷天换日</sk>，两者不是同一格。',
      imp: {
        str: 'CUQAphyM11FofNMFa1K3vFEDUCgZ2mBAAAAAmlZmZZiZZbmxMjZgZmZmlxsNmZmllhBzMGwMGAAAAzwMsY2mxsMDDMsNz20CtMbMzwMzMDmxA',
        who: 'Whââzz', where: 'EU · Tarren Mill', rating: '3v3 3254', at: '2026-08-12',
        note: '这是<b>一个人的配点</b>，不是 top50 的平均——平均配点没有对应的串。' +
          '选它的理由是：<b>它在下面 7 个分歧格上与多数派一致 6 格</b>，' +
          '在 top50 前五名里贴合度最高。唯一偏离的是<sk>嫁祸诀窍</sk>——' +
          '那一格 25/50 正好对半，本来就没有多数派。' +
          '<b>粘进游戏当起点，那 7 格再按自己的局面调。</b>',
      },
      tree: {
        survey: '职业树 44 格 + 专精树 41 格 + 英雄天赋 28 格，共 <b>113 格</b>。' +
          'top50 的实测分布里，<b>106 格是定死的</b>——要么人人都点，要么没人点。' +
          '真正需要你判断的只有下面 <b>7 格</b>。',
        picks: [
          {
            n: 'Weaponmaster', tree: '专精', u: 38,
            b: '暗影打击与暗殁之刺有 <b>20% 几率</b>产生影分身，复制一次攻击造成 50% 伤害。' +
              '<br>纯伤害，不看对面。<b>但它是随机的</b>——敏锐是攒一个窗口一次结账的打法，' +
              '20% 的触发在单个窗口里可能一次都不来。不点的那 12 人是把这一点换成了稳定的东西。'
          },
          {
            n: '毒刃', en: 'Shiv', tree: '职业', u: 34,
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
            n: '嫁祸诀窍', en: 'Tricks of the Trade', tree: '职业', u: 25,
            b: '把你产生的威胁值转移给指定队友，30 秒冷却。' +
              '<b>它本身不加伤害</b>——那 15% 要另外点 PvP 天赋<sk>偷天换日</sk>。' +
              '<br><b>全树最分裂的一格，正好对半分。</b>' +
              '单点它在竞技场几乎没用（PvP 里威胁值不决定谁挨打）——<b>它的价值全在跟' +
              '<sk>偷天换日</sk>凑成一套</b>，给队友的爆发窗口加伤害。' +
              '队友有能跟你对齐的窗口才值，否则这一点不如留给自己。'
          },
          {
            n: 'Nimble Fingers', tree: '职业', u: 23,
            b: '佯攻与猩红之瓶的能量消耗降低 10。' +
              '<br>省的是<b>防守动作</b>的能量。被压着打、需要反复佯攻和喝药的局才值；' +
              '你是压制方的那些局，这一点几乎不动。'
          },
          {
            n: 'Toxic Stiletto', tree: '职业', u: 18,
            b: '毒刃的能量消耗 −20、冷却 −15 秒、射程 +3 码。' +
              '<br><b>它只强化毒刃。</b>毒刃 34 人点，它 18 人点——' +
              '也就是说要毒刃的人里大约一半觉得不值第二点。' +
              '对面激怒刷得勤、需要毒刃转得更快时才追加。'
          },
          {
            n: 'Perforated Veins', tree: '专精', u: 13,
            b: '在「破绽」生效期间，背刺、影袭风暴、暗殁之刺伤害提高 10%。' +
              '<br>条件伤害，只在已经很强的窗口里再加一层。<b>26% 是这 7 格里最低的</b>——' +
              '敏锐的短板通常不是窗口内不够疼，是窗口外没威胁。'
          },
        ],
        src: '使用率：Murlok.io · 12.0.7 赛季一 · 美/欧/韩/台四区 <b>3v3 敏锐贼 top 50</b> 实测配点。' +
          '「什么时候点」为编者按天赋效果与该专精打法推导，非实测结论。' +
          '暂无官方简体中文名的天赋使用英文原名。',
      },
    },
    gear: {
      stats: [
        { n: '精通', v: '主堆', pct: 100 },
        { n: '全能', v: '主堆', pct: 95 },
        { n: '急速', v: '次要', pct: 21, mid: 1 },
        { n: '爆击', v: '可弃', pct: 9, dim: 1 },
      ],
      statRead: '<b>精通和全能几乎并列，之后是断崖。</b>这两条一起堆，不用在它们之间做取舍；' +
        '<b>急速和爆击装备上带多少算多少</b>，不要为了它们放弃前两条。',
      statSrc: '数据：Murlok.io · 12.0.7 赛季一 · 美/欧/韩/台四区 <b>3v3 敏锐贼 top 50</b> 实测配装。' +
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
        str: 'CQQA5HmDzx68KWyrW/8Y781L7DgZAGzwMbzMzMzYMLbmZmZbabGz2MAAAAAgZZZmZwMjZWMzMGAAAAzAYwsNLmZmRzMbMbssNtwmZAmZmZGYA',
        who: 'Dzd', where: 'US · Stormrage', rating: '3v3 3055', at: '2026-08-12',
        note: '这是<b>一个人的配点</b>，不是 top50 的平均——平均配点没有对应的串。' +
          '选它的理由是：<b>它在下面 7 个分歧格上与多数派完全一致（7/7）</b>，' +
          '在 top50 前五名里贴合度最高。<b>粘进游戏当起点，那 7 格再按自己的局面调。</b>',
      },
      tree: {
        survey: '职业树 44 格 + 专精树 38 格 + 英雄天赋 28 格，共 <b>110 格</b>。' +
          '扣掉没人走的命运之缚整条线，top50 的实测里 <b>93 格是定死的</b>。' +
          '真正需要你判断的是下面 <b>7 格</b>。',
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
        src: '使用率：Murlok.io · 12.0.7 赛季一 · 美/欧/韩/台四区 <b>3v3 狂徒贼 top 50</b> 实测配点。' +
          '「什么时候点」为编者按天赋效果与该专精打法推导，非实测结论。' +
          '暂无官方简体中文名的天赋使用英文原名。',
      },
    },
    gear: {
      stats: [
        { n: '全能', v: '主堆', pct: 100 },
        { n: '急速', v: '兼顾', pct: 58, mid: 1 },
        { n: '爆击', v: '可弃', pct: 8, dim: 1 },
        { n: '精通', v: '可弃', pct: 5, dim: 1 },
      ],
      statRead: '<b>全能一枝独秀，急速跟上，之后是断崖。</b>' +
        '爆击和精通在 top50 的配装里几乎为零——<b>不用为这两条做任何取舍</b>。',
      statSrc: '数据：Murlok.io · 12.0.7 赛季一 · 美/欧/韩/台四区 <b>3v3 狂徒贼 top 50</b> 实测配装。' +
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
        str: 'CAEAMhlVtghLZL4RZzExaQoBYNmtlZWmZmZDzMxMMzMzMzsYmZGzYmZZmmZ2mFAwMzMLLzMtBAALAAAAbAstMmZGwy8AGzMWAAAYmFgZYMDYwA',
        who: 'Yozóra', where: 'EU · Ravencrest', rating: '3v3 3257', at: '2026-08-12',
        note: '这是<b>一个人的配点</b>，不是 top50 的平均——平均配点没有对应的串。' +
          '选它的理由是：<b>它在下面 3 个分歧格上与多数派完全一致（3/3）</b>，' +
          '在 top50 前五名里贴合度最高。<b>粘进游戏当起点，那 3 格再按自己的局面调。</b>',
      },
      tree: {
        survey: '职业树 42 格 + 专精树 38 格 + 英雄天赋 28 格，共 <b>108 格</b>。' +
          '扣掉没人走的霜火整条线，<b>102 格是定死的</b>——' +
          '<b>这是四个专精里最没得选的一棵树</b>。真正要判断的只有 <b>3 格</b>，' +
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
        src: '使用率：Murlok.io · 12.0.7 赛季一 · 美/欧/韩/台四区 <b>3v3 冰法 top 50</b> 实测配点。' +
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
      statSrc: '数据：Murlok.io · 12.0.7 赛季一 · 美/欧/韩/台四区 <b>3v3 冰法 top 50</b> 实测配装。' +
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
        str: 'CAQA4VPTJ8eQb8/qEm8PyGu4yADsMzwyMjZmBMbzYmZGjZGAAAAAAAAAAzMzyMYMGLzMzMssYamYwYmZDDhxsNWstYMGLGAAGzwYwAzMzMzEM',
        who: 'Eniram', where: 'EU · Ravencrest', rating: '3v3 3165', at: '2026-08-12',
        note: '这是<b>一个人的配点</b>，不是 top50 的平均——平均配点没有对应的串。' +
          '选它的理由是：<b>它在下面 7 个分歧格上与多数派完全一致（7/7）</b>。' +
          '戒律牧是四个专精里配点空间最大的一个，' +
          '<b>这串只是一个起点，那 7 格更值得你按自己的局面重调。</b>',
      },
      tree: {
        survey: '职业树 48 格 + 专精树 41 格 + 英雄天赋 28 格，共 <b>117 格</b>。' +
          '扣掉只有 5 人走的虚空编织者整条线，仍有 <b>17 格</b>存在真实分歧——' +
          '<b>这是四个专精里配点空间最大的一棵树</b>，下面是其中最值得想的 7 格。',
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
        src: '使用率：Murlok.io · 12.0.7 赛季一 · 美/欧/韩/台四区 <b>3v3 戒律牧 top 50</b> 实测配点。' +
          '另外 10 格分歧使用率都在 16% 以下，不单列。' +
          '「什么时候点」为编者按天赋效果与该专精打法推导，非实测结论。',
      },
    },
    gear: {
      stats: [
        { n: '精通', v: '主堆', pct: 100 },
        { n: '全能', v: '主堆', pct: 89 },
        { n: '急速', v: '兼顾', pct: 60, mid: 1 },
        { n: '爆击', v: '可弃', pct: 1, dim: 1 },
      ],
      statRead: '<b>三条都有分量，断层只在爆击之前。</b>' +
        '精通领先、全能紧跟、急速也不低——<b>前三条按拿到什么用什么</b>，不用为了排序去换件。',
      statSrc: '数据：Murlok.io · 12.0.7 赛季一 · 美/欧/韩/台四区 <b>3v3 戒律牧 top 50</b> 实测配装。' +
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
