cd src/.vuepress/dist
git init
git add -A
git commit -am "deploy"
git push -f https://github.com/AlejandroParada/BPM.git master:gh-pages
rm -rf .git
read
cd ..
