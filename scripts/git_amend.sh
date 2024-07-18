#!/bin/bash
base_path="${HOME}/Documents/github"

repo_list=()
repo_list+=(arpes-manual)
repo_list+=(arpespythontools)
repo_list+=(condmat-notes)
repo_list+=(espresso)
#repo_list+=(finance)
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

for i in "${repo_list[@]}"

do cd ${base_path}/${i}
  git add --all
  git commit --amend --no-edit
  git push origin main --force &> /dev/null
  progress=$((progress + 1))
  echo "Deploying ${i} (${progress} of ${len})"

  printf "Deployed ${i}.\n\n"
  cd ${base_path}
done

cd ${current_pwd}
echo "All deployed."
