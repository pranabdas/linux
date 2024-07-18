project_name="my-project"
doc_only=false

echo "Installing Docusaurus ..."
npx @docusaurus/init@latest init ${project_name} classic &> /dev/null

# install dependencies
echo "Installing dependencies ..."
cd ${project_name}
npm install --save rehype-katex@5 &> /dev/null 
npm install --save remark-math@3 &> /dev/null
npm install --save-dev gh-pages &> /dev/null

# apply customization
echo "Applying customizations ..."
# set dark code theme
sed -i.bak 's/dracula/nightOwl/gI' docusaurus.config.js 

# add katex-math
katex_math=`echo "const math = require('remark-math');\nconst katex = require('rehype-katex');\n"; cat docusaurus.config.js`
echo "$katex_math" > docusaurus.config.js

rm src/css/custom.css
wget https://raw.githubusercontent.com/pranabdas/dotfiles/main/docusaurus-custom.css -O src/css/custom.css
rm docusaurus.config.js.bak
