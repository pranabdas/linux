#!/bin/bash
mkdir github_backup_$(date +'%Y%m%d') && cd $_

repo_list=()
repo_list+=(Access-OneDrive-via-Microsoft-Graph-Python)
repo_list+=(arpes)
repo_list+=(arpes-manual)
repo_list+=(arpespythontools)
repo_list+=(c-cpp)
repo_list+=(cheatsheets)
repo_list+=(condmat-notes)
repo_list+=(cryptomator)
repo_list+=(data-projects)
repo_list+=(deploy-jekyll-github-action)
repo_list+=(dotfiles)
repo_list+=(drive)
repo_list+=(espresso)
repo_list+=(finance)
repo_list+=(fortran)
repo_list+=(fullprof)
repo_list+=(github-backup)
repo_list+=(gnu-c-intro-ref)
repo_list+=(grid)
repo_list+=(grid-dev)
repo_list+=(homepage)
repo_list+=(homepage-beta)
repo_list+=(javascript)
repo_list+=(LaTeX)
repo_list+=(linux)
repo_list+=(machine-learning)
repo_list+=(mkdocs-template)
repo_list+=(openmx)
repo_list+=(openssl.vim)
repo_list+=(orientx)
repo_list+=(other-projects)
repo_list+=(passphrase)
repo_list+=(planets)
repo_list+=(playground)
repo_list+=(pranab)
repo_list+=(pranabdas.github.io)
repo_list+=(python-tutorial)
repo_list+=(react-learning)
repo_list+=(retasks)
repo_list+=(rust)
repo_list+=(sg-tax-calculator)
repo_list+=(sg-traffic-camera)
repo_list+=(suvapp)
repo_list+=(suvtools)
repo_list+=(vim-gnupg)
repo_list+=(wasm-rust-react)
repo_list+=(xps)

len=${#repo_list[@]}
progress=0

for i in "${repo_list[@]}"
do mkdir ${i}
    cd ${i}

    progress=$((progress + 1))
    echo "Mirroring ${i} (${progress} of ${len})"

    git clone --mirror https://github.com/pranabdas/${i}.git .git
    git config --unset core.bare
    git reset --hard
    cd ..
    printf "Done ${i}.\n\n"
done

cd ..
echo "All done."
