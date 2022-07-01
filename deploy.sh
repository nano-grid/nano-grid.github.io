echo "Getting ready for deployment"
git push git@github.com:nano-grid.git --delete gh-pages
npm run build
./create_routes.sh
# cd dist || exit
# git init
# git add -A
# git commit -m 'deploy'
# git push -f git@github.com:nano-grid.git master:gh-pages