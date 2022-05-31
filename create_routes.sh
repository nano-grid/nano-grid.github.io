cd dist

files=("home")

for f in ${files[@]}; do
  rm -r -f -v ${f}.html
  echo "<meta http-equiv='refresh' content='0; URL=index.html?route=${f}'>" >> ${f}.html
done