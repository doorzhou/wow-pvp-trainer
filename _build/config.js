/* 全站唯一配置。换域名或站名只改这里，然后跑 node all.js */
module.exports = {
  DOMAIN: 'https://doorzhou.github.io/wow-pvp-trainer',   // 结尾不要斜杠
  SITE_NAME: 'WOW打架营地',
  TAGLINE: '魔兽世界竞技场 PvP 判断训练',
  MARK: '营',                                             // 站标里的那个字
  ISSUES: 'https://github.com/doorzhou/wow-pvp-trainer/issues',

  /* 许愿池：Web3Forms 的 access key。
     去 https://web3forms.com 填收件邮箱，它会把 key 发到你邮箱里，粘到这里。
     邮箱地址本身不会出现在页面上——页面只带这个 key。
     留空时许愿池仍可打开，但提交会走「复制内容 + 去 GitHub 提交」的退路。 */
  WISH_KEY: '',
};
