"use strict";(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([[42],{1977:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var a=i(5893),s=i(1151);const t={title:"Git",keywords:["git","github","version control"]},r=void 0,c={id:"git",title:"Git",description:"Git is a content aware filesystem. It is used for version control. It is used by",source:"@site/docs/git.md",sourceDirName:".",slug:"/git",permalink:"/linux/git",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/linux/blob/main/docs/git.md",tags:[],version:"current",frontMatter:{title:"Git",keywords:["git","github","version control"]},sidebar:"docs",previous:{title:"Vi editor",permalink:"/linux/vi"},next:{title:"Docker",permalink:"/linux/docker"}},o={},l=[{value:"Configuration",id:"configuration",level:3},{value:"Basics",id:"basics",level:3},{value:"gitignore",id:"gitignore",level:3},{value:"diff",id:"diff",level:3},{value:"commit",id:"commit",level:3},{value:"branch",id:"branch",level:3},{value:"reset",id:"reset",level:3},{value:"rebase",id:"rebase",level:3},{value:"cherry-pick",id:"cherry-pick",level:3},{value:"Working with remotes",id:"working-with-remotes",level:3},{value:"Override language stat",id:"override-language-stat",level:3},{value:"Move already committed files to git LFS",id:"move-already-committed-files-to-git-lfs",level:3},{value:"Resources",id:"resources",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Git is a content aware filesystem. It is used for version control. It is used by\nmillions of developers. It is used by big projects for distributed software\ndevelopment. But you can use it to keep track of almost anything from your\nmanuscripts, drawings to complicated code structure. It can provide you with\nmany advantages. It's worth putting some effort to learn git. Happy learning!"}),"\n",(0,a.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsx)(n.p,{children:"Check if you have git already installed by issuing following command in Terminal"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git --version\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you see error. Go ",(0,a.jsx)(n.a,{href:"https://git-scm.com",children:"here"})," download and install git. If\nyou are on Windows, use of Git bash is recommenced. In MacOS or Linux, use\nTerminal."]}),"\n",(0,a.jsx)(n.p,{children:"Configure git"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'git config --global user.name "User Name"\ngit config --global user.email "user@example.com"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Check a particular entry"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git config --global user.name\n"})}),"\n",(0,a.jsx)(n.p,{children:"If you want to add a text editor which will let you type long commit messages.\nFor Visual Studio Code/Atom, use following (choose one):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'git config --global core.editor "code --wait"\ngit config --global core.editor "atom --wait"\n'})}),"\n",(0,a.jsx)(n.p,{children:"You can check your setting by:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git config --list\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We can save/move to another computer our git configuration in a ",(0,a.jsx)(n.code,{children:"~/.gitconfig"}),"\nfile:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[user]\n\tname = Pranab Das\n\temail = 31024886+pranabdas@users.noreply.github.com\n[core]\n\teditor = code --wait\n[push]\n\tdefault = current\n[github]\n\tuser = pranabdas\n"})}),"\n",(0,a.jsx)(n.h3,{id:"basics",children:"Basics"}),"\n",(0,a.jsx)(n.p,{children:"Initialize current project directory:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git init\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now start working/modifying your files. Then you need to add files individually\nor whole directory for staging."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git add filename\n"})}),"\n",(0,a.jsx)(n.p,{children:"Add current directory to staging. You can use either one of the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git add .\ngit add --all\n"})}),"\n",(0,a.jsx)(n.p,{children:"This will add the files to the staging area. Note that if you make further\nchanges on the files before commit, those new changes will not be included in\nthe commit. Commit will record precisely when you ran the git add. You can check\nthe status of your project by:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git status\n"})}),"\n",(0,a.jsx)(n.p,{children:"There is a short status version, which will output a concise status message:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git status -s\n"})}),"\n",(0,a.jsx)(n.h3,{id:"gitignore",children:"gitignore"}),"\n",(0,a.jsxs)(n.p,{children:["Often you want to ignore some files or directories in your project. You can do\nthat by creating a ",(0,a.jsx)(n.em,{children:".gitignore"})," in your project root, and including the files\nand folders that you want to exclude. You can use patterns/wildcards to indicate\nthose files."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"vi .gitignore\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Then this is how the contents of ",(0,a.jsx)(n.em,{children:".gitignore"})," should look like:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Ignore all bin files\n*.bin\n\n# Track lib.bin even though we ignore all other .bin\n!lib.bin\n\n# Ignore everything on the output directory\noutput/\n\n# ignore a specific file\nresult.log\n\n# ignore all .pdf files in the doc/ directory and any of its subdirectories\ndoc/**/*.pdf\n\n# ignore all sub-directories __pycache__\n/**/__pycache__\n"})}),"\n",(0,a.jsx)(n.p,{children:"Note that .gitignore applies to un-tracked files. Once, you include them in git\nadd, they won't be removed automatically by .gitignore inclusion. You can remove\nthem manually by:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git rm --cached filename\ngit rm --cached folder/\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Blank lines or the lines that start with ",(0,a.jsx)(n.code,{children:"#"})," are ignored. You can visit this\npage ",(0,a.jsx)(n.a,{href:"https://github.com/github/gitignore",children:"https://github.com/github/gitignore"}),", where GitHub maintains a list of\n",(0,a.jsx)(n.em,{children:".gitignore"})," for various popular projects."]}),"\n",(0,a.jsx)(n.p,{children:"Remove a file from staging environment:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git checkout filename\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can also do for all files, certain directory, or wildcards:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git checkout --.\ngit checkout --*.html\n"})}),"\n",(0,a.jsx)(n.h3,{id:"diff",children:"diff"}),"\n",(0,a.jsx)(n.p,{children:"To see what changes you have made but not staged:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git diff\n"})}),"\n",(0,a.jsx)(n.p,{children:"To see what changes you have staged:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git diff --staged\n"})}),"\n",(0,a.jsx)(n.p,{children:"Check the difference with another branch or commit"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git diff <commit-hash or branch-name>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Check the difference for a particular file:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git diff -path/file.md\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can also remove something, or everything from staging using:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git reset HEAD filename\ngit reset HEAD\n"})}),"\n",(0,a.jsx)(n.h3,{id:"commit",children:"commit"}),"\n",(0,a.jsx)(n.p,{children:"Commit git (save staging state):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'git commit -m "commit comment"\n'})}),"\n",(0,a.jsx)(n.p,{children:"You can add all changes and commit by combing:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'git commit -a -m "commit all changes"\n'})}),"\n",(0,a.jsx)(n.p,{children:"You can also have multi-line commit messages:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'git commit -m "commit message one" -m "another message"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Often you forget some files to add or commit to early. You can add those files\nand amend the commit:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git commit --amend\ngit commit --amend --no-edit\n"})}),"\n",(0,a.jsx)(n.p,{children:"Empty commit to trigger GitHub action"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'git commit --allow-empty -m "empty commit to trigger github actions"\ngit commit --allow-empty --amend --no-edit\n'})}),"\n",(0,a.jsx)(n.p,{children:"Check the records/commits of your project:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git log\ngit shortlog\ngit log --pretty=oneline --abbrev-commit\n"})}),"\n",(0,a.jsx)(n.p,{children:"Show the changes in a commit"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git show --pretty=oneline --abbrev-commit HEAD\n"})}),"\n",(0,a.jsx)(n.p,{children:"Go back to (undo) previous commits"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git checkout <commit-hash>\n"})}),"\n",(0,a.jsx)(n.h3,{id:"branch",children:"branch"}),"\n",(0,a.jsx)(n.p,{children:"It will create a separate branch (main branch is called master). You can check\nbranches by:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git branch\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can list remotes brach as well with:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git branch -a\n"})}),"\n",(0,a.jsx)(n.p,{children:"Go back to master:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git checkout master\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can keep the other by creating a new branch:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git branch <new-branch> <commit-hash>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Switch to new branch by using"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git checkout <new-branch>\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can create a new branch from current master as well"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git branch <branch-name>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Bring over changes from a branch to the master. Once you merge, you bring over\nall the changes from another branch to the working directory (you do not bring\nthe commit history from other branch). If there are files modified on both\nbranch, there will be conflict merge, you may need to manually resolve those\nfiles. Once everything is alright, you can make commit to keep a permanent\nrecord."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git checkout master\ngit merge <branch-name>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Rename a branch:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git branch -m <old-name> <new-name>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Delete a brach:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git branch -d <branch-name>\n"})}),"\n",(0,a.jsx)(n.p,{children:"The above command will fail with warning if there are changes that are not\nmerged. If you want to delete a branch irrespective of whether the changes were\nmerged:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git branch -D <branch-name>\n"})}),"\n",(0,a.jsx)(n.h3,{id:"reset",children:"reset"}),"\n",(0,a.jsx)(n.p,{children:"Following will reset all changes after the specified commit. This preserves the\nhistory locally."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git reset <commit hash>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Discard all changes without history:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git reset --hard <commit hash>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Reset changes after last commit (HEAD represents the current working directory).\nThis will keep the changes un-staged. If you want to reset fully use the flag\n",(0,a.jsx)(n.code,{children:"--hard"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git reset HEAD\ngit reset --hard HEAD\n"})}),"\n",(0,a.jsx)(n.p,{children:"Resetting history which is already pushed to remote can have unintended side\neffects. Do it with caution."}),"\n",(0,a.jsx)(n.p,{children:"You can undo a merge by using either of following two:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git merge --abort\ngit reset --hard HEAD\n"})}),"\n",(0,a.jsx)(n.h3,{id:"rebase",children:"rebase"}),"\n",(0,a.jsx)(n.p,{children:"Collapse/combine multiple commits into one: say we have following situation:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"commit 4baeaaf9168beccd43d726b6f3baad8c35a47366 (HEAD -> master)\nAuthor: Pranab Das <31024886+pranabdas@users.noreply.github.com>\nDate:   Thu Mar 3 23:29:59 2022 +0800\n\n    a patch for feature y\n\ncommit ec716b0b25095b6c81a34b2bc9351bae3fb64101\nAuthor: Pranab Das <31024886+pranabdas@users.noreply.github.com>\nDate:   Thu Mar 3 23:29:31 2022 +0800\n\n    added feature y\n\ncommit 43503465d89a0ae6fd2db795e061820268c4456e\nAuthor: Pranab Das <31024886+pranabdas@users.noreply.github.com>\nDate:   Thu Mar 3 23:28:54 2022 +0800\n\n    added feature x\n\ncommit ff239cdc856b641cae95f537c3227e32318a42bc\nAuthor: Pranab Das <31024886+pranabdas@users.noreply.github.com>\nDate:   Thu Mar 3 23:28:21 2022 +0800\n\n    first commit\n"})}),"\n",(0,a.jsx)(n.p,{children:"We want to merge last two commits into one."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git reset --soft HEAD~2\n# or\ngit reset --soft ec716b0\n"})}),"\n",(0,a.jsx)(n.p,{children:"This will reset the commit index to desired commit, but leave the changes ready\nto be committed."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'git commit -m "added feature y"\n'})}),"\n",(0,a.jsx)(n.p,{children:"What if we need to combine the very first and the next one?"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git rebase -i --root\n"})}),"\n",(0,a.jsx)(n.p,{children:"This will give you interactive editor with helpful hint:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pick ff239cd first commit\npick 4350346 added feature x\npick ec716b0 added feature y\npick 4baeaaf a patch for feature y\n\n# Rebase ff239cd..4baeaaf onto ff239cd (3 commands)\n#\n# Commands:\n# p, pick <commit> = use commit\n# r, reword <commit> = use commit, but edit the commit message\n# e, edit <commit> = use commit, but stop for amending\n# s, squash <commit> = use commit, but meld into previous commit\n# f, fixup [-C | -c] <commit> = like \"squash\" but keep only the previous\n#                    commit's log message, unless -C is used, in which case\n#                    keep only this commit's message; -c is same as -C but\n#                    opens the editor\n# x, exec <command> = run command (the rest of the line) using shell\n# b, break = stop here (continue rebase later with 'git rebase --continue')\n# d, drop <commit> = remove commit\n# l, label <label> = label current HEAD with a name\n# t, reset <label> = reset HEAD to a label\n# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]\n# .       create a merge commit using the original merge commit's\n# .       message (or the oneline, if no original merge commit was\n# .       specified); use -c <commit> to reword the commit message\n# These lines can be re-ordered; they are executed from top to bottom.\n#\n# If you remove a line here THAT COMMIT WILL BE LOST.\n#\n# However, if you remove everything, the rebase will be aborted.\n#\n# Note that empty commits are commented out\n"})}),"\n",(0,a.jsx)(n.p,{children:"We can squash the second commit"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pick ff239cd first commit\nsquash 4350346 added feature x\npick ec716b0 added feature y\npick 4baeaaf a patch for feature y\n"})}),"\n",(0,a.jsx)(n.h3,{id:"cherry-pick",children:"cherry-pick"}),"\n",(0,a.jsxs)(n.p,{children:["git ",(0,a.jsx)(n.code,{children:"cherry-pick"})," enables arbitrary Git commits to be picked by reference and\nappended to the current working ",(0,a.jsx)(n.code,{children:"HEAD"}),". Let's assume we have following branch\nstate:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"a - b - c - d   Main\n         \\\n           e - f - g Feature\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We would like to pick ",(0,a.jsx)(n.code,{children:"f"})," commit from the feature branch and merge into the\nmain."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git checkout main\ngit cherry-pick <commit-hash>\ngit cherry-pick f\n"})}),"\n",(0,a.jsx)(n.p,{children:"After cherry picking, the branch state would be:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"a - b - c - d - f   Main\n         \\\n           e - f - g Feature\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If working with remote branches, make sure they are pulled locally first. If you\nlike to edit the commit message, use ",(0,a.jsx)(n.code,{children:"--edit"})," option; if you like to bring the\ncommit contents without creating commits, use ",(0,a.jsx)(n.code,{children:"--no-commit"})," option."]}),"\n",(0,a.jsx)(n.h3,{id:"working-with-remotes",children:"Working with remotes"}),"\n",(0,a.jsx)(n.p,{children:"Here I use the example of GitHub. You can choose another provider, like Gitlab,\nBitbucket."}),"\n",(0,a.jsx)(n.p,{children:"Clone a github repository locally:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/user/repository.git\n"})}),"\n",(0,a.jsx)(n.p,{children:"If you want to have your repository with a different name, just pass the new\nname as second argument:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/user/repository.git my-repo-name\n"})}),"\n",(0,a.jsx)(n.p,{children:"Clone a specific branch:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone --branch <branchname> <remote-repo-url>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Shallow cloning:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone --depth 1 https://github.com/user/repository.git\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Git clone with a synchronizing specific ",(0,a.jsx)(n.code,{children:"git-lfs"})," directory:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone --config lfs.fetchinclude='files/figures'\n"})}),"\n",(0,a.jsx)(n.p,{children:"What if I want to have full history later:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git fetch --unshallow\n"})}),"\n",(0,a.jsx)(n.p,{children:"Add GitHub remote directory:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git remote add <short-name> <url>\ngit remote add origin https://github.com/user/repository.git\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can have multiple remotes. You can check the remotes:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git remote -v\n"})}),"\n",(0,a.jsx)(n.p,{children:"Change remote to a new url:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git remote set-url origin <new-url>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Push changes to the GitHub:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git push <remote> <branch>\ngit push origin master\n"})}),"\n",(0,a.jsx)(n.p,{children:"Force Push:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git push origin --force --all\n"})}),"\n",(0,a.jsx)(n.p,{children:"Fetch from remote. It fetches the meta-data from the remote:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git fetch <short-name or url>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then you can run a diff:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git diff master origin/master\ngit diff <local> <remote/branch>\n"})}),"\n",(0,a.jsx)(n.p,{children:"If everything is alright, you can pull the data from remote:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git pull <remote> <remote-master>\ngit pull origin master\ngit pull --all\n"})}),"\n",(0,a.jsx)(n.p,{children:"What happens if the remote is force pushed, therefore the commit hash changed:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# reset local to parent commit\n# carefull --hard will remove everything after specified commit\ngit reset --hard HEAD~\ngit pull origin main --no-rebase\n# if you have more than only parent commit hash mismatch\ngit reset --hard HEAD~<number of commits to reset>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Rename remote:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git remote rename <old-name> <new-name>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Remove remote:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git remote remove <short-name>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Pull upstream changes:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# set aside working files\ngit stash\n# bring in upstream changes\ngit pull\n# apply stash\ngit stash apply\n"})}),"\n",(0,a.jsx)(n.p,{children:"Pull changes and discard local changes (not recommended, do it with caution):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git fetch\ngit reset --hard origin/master\n"})}),"\n",(0,a.jsx)(n.p,{children:"Submodules:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# status\ngit submodule status\n\n# update\ngit submodule update --recursive --init\n"})}),"\n",(0,a.jsx)(n.h3,{id:"override-language-stat",children:"Override language stat"}),"\n",(0,a.jsxs)(n.p,{children:["How can we make GitHub ignore certain languages or recognize as different\nlanguage in GitHub language statistics? Create a ",(0,a.jsx)(n.code,{children:".gitattributes"})," file in the\nproject root with content:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# reclassifies `.ipynb` files as Python:\n*.ipynb linguist-language=Python\n\n# ignore certain paths\nnot-actual-project-code/* linguist-vendored\n"})}),"\n",(0,a.jsxs)(n.p,{children:["More info ",(0,a.jsx)(n.a,{href:"https://github.com/github/linguist/blob/master/docs/overrides.md",children:"here"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"move-already-committed-files-to-git-lfs",children:"Move already committed files to git LFS"}),"\n",(0,a.jsxs)(n.p,{children:["Find the commit SHA where the file was added, we need to hash of the commit\nbefore it (say ",(0,a.jsx)(n.code,{children:"eafcece98d772c14a16"}),"). Find more info ",(0,a.jsx)(n.a,{href:"https://hlung.medium.com/migrating-committed-files-to-git-lfs-the-quick-way-7be728e103ff",children:"here"}),"\nand ",(0,a.jsx)(n.a,{href:"https://github.com/git-lfs/git-lfs/blob/main/docs/man/git-lfs-migrate.adoc",children:"here"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'git lfs migrate import --verbose --include="*.pdf" --include-ref=HEAD --exclude-ref=eafcece98d772c14a16\n'})}),"\n",(0,a.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://git-scm.com/book/en/v2",children:"https://git-scm.com/book/en/v2"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/pluralsight/git-internals-pdf",children:"https://github.com/pluralsight/git-internals-pdf"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository",children:"Removing sensitive data from Git/GitHub"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var a=i(7294);const s={},t=a.createContext(s);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);