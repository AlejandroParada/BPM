rem npm run build
rem git add .
rem git commit -m "deploy"
rem git push


echo paso 1
rm -R D:\temp\site
xcopy /S /Y D:\ale\codigo\BPM\src\.vuepress\dist D:\temp\site
cd D:\ale\codigo\BPM
rem git pull
git checkout gh-pages
git pull
echo paso 2
pause
xcopy /S /Y D:\temp\site D:\ale\codigo\BPM
echo paso 3
git add .
git commit -m "deploy"
git push

cd d:\ale\codigo\sigma