/* 全站唯一配置。换域名或站名只改这里，然后跑 node all.js */
module.exports = {
  DOMAIN: 'https://doorzhou.github.io/wow-pvp-trainer',   // 结尾不要斜杠
  SITE_NAME: 'WOW打架营地',
  TAGLINE: '魔兽世界竞技场 PvP 判断训练',
  MARK: '营',                                             // 站标里的那个字
  ISSUES: 'https://github.com/doorzhou/wow-pvp-trainer/issues',

  /* 补丁与赛季。新补丁上线后只改这两行，全站（页头徽章、SEO、数据出处、
     首页、路线图）跟着走。别再往别处写死版本号。
     PATCH_EN 用在英文场合（keywords、Murlok 出处），PATCH 用在中文正文。 */
  PATCH: '12.1',
  SEASON: 'Midnight 赛季一',
  SEASON_EN: 'Midnight S1',

  /* 梯队榜（S/A/B）是外部第三方按自己的节奏更新的，跟游戏补丁号不是一回事。
     它有自己的版本，只有真去重抓了榜单才动这一行 ——
     跟着 PATCH 走会让页面声称「12.1 的梯队」，而数据其实是上个版本的。 */
  TIER_PATCH: '12.0.7',
  TIER_AT: '2026-06-15',

  /* 许愿池：Web3Forms 的 access key。
     去 https://web3forms.com 填收件邮箱，它会把 key 发到你邮箱里，粘到这里。
     邮箱地址本身不会出现在页面上——页面只带这个 key。
     留空时许愿池仍可打开，但提交会走「复制内容 + 去 GitHub 提交」的退路。 */
  WISH_KEY: '',
};
