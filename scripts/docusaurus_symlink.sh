#!/bin/bash
base_path="${HOME}/Documents/github"

repo_list=()
#repo_list+=(arpes-manual)
repo_list+=(condmat-notes)
#repo_list+=(espresso)
#repo_list+=(fortran)
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
  do cd ${i}
    progress=$((progress + 1))
    echo "Updating ${i} (${progress} of ${len})"

    echo "Deleting node_modules ..."
    mkdir empty && \
      rsync -r --delete empty/ node_modules && \
      rm -r node_modules empty &> /dev/null

    echo "Creating symbolic link ..."
    ln -s ~/Documents/github/arpespythontools/node_modules ~/Documents/github/${i}/node_modules

    cd ${base_path}
    printf "Done ${i}.\n\n"
done
cd ${current_pwd}
echo "All done."
