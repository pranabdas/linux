#!/bin/bash
base_path="${HOME}/Documents/github"

repo_list=()
repo_list+=(arpespythontools)
repo_list+=(espresso)
repo_list+=(fortran)
repo_list+=(linux)
repo_list+=(machine-learning)
repo_list+=(openmx)
repo_list+=(python-tutorial)
repo_list+=(suvtools)

current_pwd=${PWD}
cd ${base_path}
len=${#repo_list[@]}
progress=0

for i in "${repo_list[@]}"
do cd ${i}
  progress=$((progress + 1))
  echo "Deploying ${i} (${progress} of ${len})"
  rm -rf build
  echo "Building ..."
  npm run build &> /dev/null
  echo "Deploy in progress ..."
  npm run gh-deploy &> /dev/null
  cd ${base_path}
  printf "Deployed ${i}.\n\n"
done
cd ${current_pwd}
echo "All deployed."
