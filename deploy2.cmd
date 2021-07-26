rem npm run build
rem git add .
rem git commit -m "deploy"
rem git push



xcopy /S /Y src\.vuepress\dist D:\temp\site
cd D:\ale\codigo\BPM
rem git pull
git checkout gh-pages
git pull
xcopy /S /Y D:\temp\site D:\ale\codigo\BPM
 
git add .
git commit -m "deploy"
git push

cd d:\ale\codigo\sigma