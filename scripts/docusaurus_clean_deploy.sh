#!/bin/bash
base_path="${HOME}/Documents/github"

repo_list=()
repo_list+=(arpes-manual)
repo_list+=(arpespythontools)
repo_list+=(condmat-notes)
repo_list+=(espresso)
# repo_list+=(finance)
repo_list+=(fortran)
repo_list+=(javascript)
repo_list+=(linux)
repo_list+=(machine-learning)
repo_list+=(openmx)
repo_list+=(python-tutorial)
repo_list+=(suvtools)

current_pwd=${PWD}
cd ${base_path}
len=${#repo_list[@]}
progress=0

if [ -d "tmpghdeploy" ] ; then
  rm -rf tmpghdeploy
fi

for i in "${repo_list[@]}"

do mkdir tmpghdeploy
  progress=$((progress + 1))
  echo "Deploying ${i} (${progress} of ${len})"
  cd tmpghdeploy
  touch empty
  git init &> /dev/null
  git remote add origin https://github.com/pranabdas/${i}.git &> /dev/null
  git add --all && git commit -m "Clean deploy" --date="2022-03-25 23:18:22"&> /dev/null
  git branch gh-pages &> /dev/null
  git checkout gh-pages &> /dev/null
  cd ${base_path}/${i}
  echo "Building site ..."
  rm -rf build
  npm run build &> /dev/null
  echo "Deploying ..."
  rsync -azh --exclude .git --delete ${base_path}/${i}/build/ ${base_path}/tmpghdeploy
  cd ${base_path}/tmpghdeploy
  find . -type f -name \*.DS_Store -delete &> /dev/null
  git add --all && git commit --amend --no-edit &> /dev/null
  echo "Updating on GitHub ..."
  git push origin gh-pages --force &> /dev/null
  printf "Deployed ${i}.\n\n"
  cd ${base_path}
  rm -rf tmpghdeploy
done
cd ${current_pwd}
echo "All deployed."
