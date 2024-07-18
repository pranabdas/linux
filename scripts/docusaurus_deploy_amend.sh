#!/bin/bash
base_path="${HOME}/Documents/github"

repo_list=()
repo_list+=(arpes-manual)
repo_list+=(arpespythontools)
repo_list+=(c-cpp)
repo_list+=(condmat-notes)
repo_list+=(espresso)
#repo_list+=(finance)
repo_list+=(fortran)
repo_list+=(javascript)
repo_list+=(linux)
repo_list+=(machine-learning)
repo_list+=(openmx)
repo_list+=(python-tutorial)
repo_list+=(rust)
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

  echo "Cloning gh-pages branch ..."
  git clone --branch gh-pages https://github.com/pranabdas/${i} &> /dev/null
  cd ${base_path}/${i}
  rm -rf build
#  npm run clear

  echo "Building site ..."
  npm run build &> /dev/null
  rsync -azh --exclude .git --delete ${base_path}/${i}/build/ ${base_path}/tmpghdeploy/${i}
  cd ${base_path}/tmpghdeploy/${i}
  find . -type f -name \*.DS_Store -delete &> /dev/null
  echo "Updating on GitHub ..."
  git add --all && git commit --amend --no-edit &> /dev/null
  git push origin gh-pages --force &> /dev/null
  printf "Deployed ${i}.\n\n"
  cd ${base_path}
  rm -rf tmpghdeploy
done

cd ${current_pwd}
echo "All deployed."
