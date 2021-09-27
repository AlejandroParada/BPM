cd src/.vuepress/dist/

target="\/BPM\/assets"
cdn="https:\/\/cdn.jsdelivr.net\/gh\/AlejandroParada\/BPM@gh-pages\/assets"

js="s/$target\/js\//$cdn\/js\//g"
css="s/$target\/css\//$cdn\/css\//g"
img="s/$target\/img\//$cdn\/img\//g"
clear
echo 
echo 
echo fixing cdn in js
echo
find -type f -name "*.html" | xargs echo 
find -type f -name "*.html" | xargs sed -i $js
echo
echo --------------------------------------------  
echo
echo fixing cdn in css
echo
find -type f -name "*.html" | xargs echo 
find -type f -name "*.html" | xargs sed -i $css
echo
#echo --------------------------------------------
#echo fixing cdn in img
#echo
#find -type f -name "*.html" | xargs echo 
#find -type f -name "*.html" | xargs sed -i $img
sleep 5
