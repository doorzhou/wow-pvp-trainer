#!/bin/bash
# 用法：./set-domain.sh https://你的域名
# 例：  ./set-domain.sh https://wowpvp.example.com
#      ./set-domain.sh https://yourname.github.io/wow-pvp
[ -z "$1" ] && { echo "用法: ./set-domain.sh https://你的域名（结尾不要斜杠）"; exit 1; }
D="${1%/}"
cd "$(dirname "$0")"
n=$(grep -rl "YOUR-DOMAIN" --include="*.html" --include="*.xml" --include="*.txt" . | wc -l | tr -d ' ')
grep -rl "YOUR-DOMAIN" --include="*.html" --include="*.xml" --include="*.txt" . | while read f; do
  sed -i '' "s|https://YOUR-DOMAIN|$D|g" "$f" 2>/dev/null || sed -i "s|https://YOUR-DOMAIN|$D|g" "$f"
done
echo "已把 $n 个文件里的域名替换为：$D"
grep -rn "YOUR-DOMAIN" --include="*.html" --include="*.xml" --include="*.txt" . && echo "⚠️ 仍有残留" || echo "✓ 无残留"
