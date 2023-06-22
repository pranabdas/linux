"use strict";(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([[42],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(a),g=r,h=m["".concat(s,".").concat(g)]||m[g]||p[g]||l;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2278:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={title:"Git",keywords:["git","github","version control"]},s=void 0,c={unversionedId:"git",id:"git",title:"Git",description:"Git is a content aware filesystem. It is used for version control. It is used by",source:"@site/docs/git.md",sourceDirName:".",slug:"/git",permalink:"/linux/git",draft:!1,editUrl:"https://github.com/pranabdas/linux/blob/main/docs/git.md",tags:[],version:"current",frontMatter:{title:"Git",keywords:["git","github","version control"]},sidebar:"docs",previous:{title:"Vi editor",permalink:"/linux/vi"},next:{title:"Docker",permalink:"/linux/docker"}},u={},m=[{value:"Configuration",id:"configuration",level:3},{value:"Basics",id:"basics",level:3},{value:"gitignore",id:"gitignore",level:3},{value:"diff",id:"diff",level:3},{value:"commit",id:"commit",level:3},{value:"branch",id:"branch",level:3},{value:"reset",id:"reset",level:3},{value:"rebase",id:"rebase",level:3},{value:"Working with remotes",id:"working-with-remotes",level:3},{value:"Override language stat",id:"override-language-stat",level:3},{value:"Resources",id:"resources",level:2}],p={toc:m},g="wrapper";function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)(g,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Git is a content aware filesystem. It is used for version control. It is used by\nmillions of developers. It is used by big projects for distributed software\ndevelopment. But you can use it to keep track of almost anything from your\nmanuscripts, drawings to complicated code structure. It can provide you with\nmany advantages. It's worth putting some effort to learn git. Happy learning!"),(0,l.kt)("h3",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"Check if you have git already installed by issuing following command in Terminal"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git --version\n")),(0,l.kt)("p",null,"If you see error. Go ",(0,l.kt)("a",{parentName:"p",href:"https://git-scm.com"},"here")," download and install git. If\nyou are on Windows, use of Git bash is recommenced. In MacOS or Linux, use\nTerminal."),(0,l.kt)("p",null,"Configure git"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'git config --global user.name "User Name"\ngit config --global user.email "user@example.com"\n')),(0,l.kt)("p",null,"Check a particular entry"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global user.name\n")),(0,l.kt)("p",null,"If you want to add a text editor which will let you type long commit messages.\nFor Visual Studio Code/Atom, use following (choose one):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'git config --global core.editor "code --wait"\ngit config --global core.editor "atom --wait"\n')),(0,l.kt)("p",null,"You can check your setting by:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git config --list\n")),(0,l.kt)("p",null,"We can save/move to another computer our git configuration in a ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.gitconfig"),"\nfile:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[user]\n    name = Pranab Das\n    email = 31024886+pranabdas@users.noreply.github.com\n[core]\n    editor = code --wait\n[push]\n    default = current\n[github]\n    user = pranabdas\n")),(0,l.kt)("h3",{id:"basics"},"Basics"),(0,l.kt)("p",null,"Initialize current project directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git init\n")),(0,l.kt)("p",null,"Now start working/modifying your files. Then you need to add files individually\nor whole directory for staging."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git add filename\n")),(0,l.kt)("p",null,"Add current directory to staging. You can use either one of the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git add .\ngit add --all\n")),(0,l.kt)("p",null,"This will add the files to the staging area. Note that if you make further\nchanges on the files before commit, those new changes will not be included in\nthe commit. Commit will record precisely when you ran the git add. You can check\nthe status of your project by:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git status\n")),(0,l.kt)("p",null,"There is a short status version, which will output a concise status message:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git status -s\n")),(0,l.kt)("h3",{id:"gitignore"},"gitignore"),(0,l.kt)("p",null,"Often you want to ignore some files or directories in your project. You can do\nthat by creating a ",(0,l.kt)("em",{parentName:"p"},".gitignore")," in your project root, and including the files\nand folders that you want to exclude. You can use patterns/wildcards to indicate\nthose files."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vi .gitignore\n")),(0,l.kt)("p",null,"Then this is how the contents of ",(0,l.kt)("em",{parentName:"p"},".gitignore")," should look like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Ignore all bin files\n*.bin\n\n# Track lib.bin even though we ignore all other .bin\n!lib.bin\n\n# Ignore everything on the output directory\noutput/\n\n# ignore a specific file\nresult.log\n\n# ignore all .pdf files in the doc/ directory and any of its subdirectories\ndoc/**/*.pdf\n\n# ignore all sub-directories __pycache__\n/**/__pycache__\n")),(0,l.kt)("p",null,"Note that .gitignore applies to un-tracked files. Once, you include them in git\nadd, they won't be removed automatically by .gitignore inclusion. You can remove\nthem manually by:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git rm --cached filename\ngit rm --cached folder/\n")),(0,l.kt)("p",null,"Blank lines or the lines that start with ",(0,l.kt)("inlineCode",{parentName:"p"},"#")," are ignored. You can visit this\npage ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/github/gitignore"},"https://github.com/github/gitignore"),", where GitHub maintains a list of\n",(0,l.kt)("em",{parentName:"p"},".gitignore")," for various popular projects."),(0,l.kt)("p",null,"Remove a file from staging environment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout filename\n")),(0,l.kt)("p",null,"You can also do for all files, certain directory, or wildcards:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout --.\ngit checkout --*.html\n")),(0,l.kt)("h3",{id:"diff"},"diff"),(0,l.kt)("p",null,"To see what changes you have made but not staged:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git diff\n")),(0,l.kt)("p",null,"To see what changes you have staged:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git diff --staged\n")),(0,l.kt)("p",null,"Check the difference with another branch or commit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git diff <commit-hash or branch-name>\n")),(0,l.kt)("p",null,"Check the difference for a particular file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git diff -path/file.md\n")),(0,l.kt)("p",null,"You can also remove something, or everything from staging using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git reset HEAD filename\ngit reset HEAD\n")),(0,l.kt)("h3",{id:"commit"},"commit"),(0,l.kt)("p",null,"Commit git (save staging state):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -m "commit comment"\n')),(0,l.kt)("p",null,"You can add all changes and commit by combing:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -a -m "commit all changes"\n')),(0,l.kt)("p",null,"You can also have multi-line commit messages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -m "commit message one" -m "another message"\n')),(0,l.kt)("p",null,"Often you forget some files to add or commit to early. You can add those files\nand amend the commit:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git commit --amend\ngit commit --amend --no-edit\n")),(0,l.kt)("p",null,"Empty commit to trigger GitHub action"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'git commit --allow-empty -m "empty commit to trigger github actions"\ngit commit --allow-empty --amend --no-edit\n')),(0,l.kt)("p",null,"Check the records/commits of your project:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git log\ngit shortlog\ngit log --pretty=oneline --abbrev-commit\n")),(0,l.kt)("p",null,"Show the changes in a commit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git show --pretty=oneline --abbrev-commit HEAD\n")),(0,l.kt)("p",null,"Go back to (undo) previous commits"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout <commit-hash>\n")),(0,l.kt)("h3",{id:"branch"},"branch"),(0,l.kt)("p",null,"It will create a separate branch (main branch is called master). You can check\nbranches by:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git branch\n")),(0,l.kt)("p",null,"You can list remotes brach as well with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git branch -a\n")),(0,l.kt)("p",null,"Go back to master:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout master\n")),(0,l.kt)("p",null,"You can keep the other by creating a new branch:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git branch <new-branch> <commit-hash>\n")),(0,l.kt)("p",null,"Switch to new branch by using"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout <new-branch>\n")),(0,l.kt)("p",null,"You can create a new branch from current master as well"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git branch <branch-name>\n")),(0,l.kt)("p",null,"Bring over changes from a branch to the master. Once you merge, you bring over\nall the changes from another branch to the working directory (you do not bring\nthe commit history from other branch). If there are files modified on both\nbranch, there will be conflict merge, you may need to manually resolve those\nfiles. Once everything is alright, you can make commit to keep a permanent\nrecord."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout master\ngit merge <branch-name>\n")),(0,l.kt)("p",null,"Rename a branch:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git branch -m <old-name> <new-name>\n")),(0,l.kt)("p",null,"Delete a brach:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git branch -d <branch-name>\n")),(0,l.kt)("p",null,"The above command will fail with warning if there are changes that are not\nmerged. If you want to delete a branch irrespective of whether the changes were\nmerged:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git branch -D <branch-name>\n")),(0,l.kt)("h3",{id:"reset"},"reset"),(0,l.kt)("p",null,"Following will reset all changes after the specified commit. This preserves the\nhistory locally."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git reset <commit hash>\n")),(0,l.kt)("p",null,"Discard all changes without history:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git reset --hard <commit hash>\n")),(0,l.kt)("p",null,"Reset changes after last commit (HEAD represents the current working directory).\nThis will keep the changes un-staged. If you want to reset fully use the flag\n",(0,l.kt)("inlineCode",{parentName:"p"},"--hard"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git reset HEAD\ngit reset --hard HEAD\n")),(0,l.kt)("p",null,"Resetting history which is already pushed to remote can have unintended side\neffects. Do it with caution."),(0,l.kt)("p",null,"You can undo a merge by using either of following two:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git merge --abort\ngit reset --hard HEAD\n")),(0,l.kt)("h3",{id:"rebase"},"rebase"),(0,l.kt)("p",null,"Collapse/combine multiple commits into one: say we have following situation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"commit 4baeaaf9168beccd43d726b6f3baad8c35a47366 (HEAD -> master)\nAuthor: Pranab Das <31024886+pranabdas@users.noreply.github.com>\nDate:   Thu Mar 3 23:29:59 2022 +0800\n\n    a patch for feature y\n\ncommit ec716b0b25095b6c81a34b2bc9351bae3fb64101\nAuthor: Pranab Das <31024886+pranabdas@users.noreply.github.com>\nDate:   Thu Mar 3 23:29:31 2022 +0800\n\n    added feature y\n\ncommit 43503465d89a0ae6fd2db795e061820268c4456e\nAuthor: Pranab Das <31024886+pranabdas@users.noreply.github.com>\nDate:   Thu Mar 3 23:28:54 2022 +0800\n\n    added feature x\n\ncommit ff239cdc856b641cae95f537c3227e32318a42bc\nAuthor: Pranab Das <31024886+pranabdas@users.noreply.github.com>\nDate:   Thu Mar 3 23:28:21 2022 +0800\n\n    first commit\n")),(0,l.kt)("p",null,"We want to merge last two commits into one."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git reset --soft HEAD~2\n# or\ngit reset --soft ec716b0\n")),(0,l.kt)("p",null,"This will reset the commit index to desired commit, but leave the changes ready\nto be committed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -m "added feature y"\n')),(0,l.kt)("p",null,"What if we need to combine the very first and the next one?"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git rebase -i --root\n")),(0,l.kt)("p",null,"This will give you interactive editor with helpful hint:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pick ff239cd first commit\npick 4350346 added feature x\npick ec716b0 added feature y\npick 4baeaaf a patch for feature y\n\n# Rebase ff239cd..4baeaaf onto ff239cd (3 commands)\n#\n# Commands:\n# p, pick <commit> = use commit\n# r, reword <commit> = use commit, but edit the commit message\n# e, edit <commit> = use commit, but stop for amending\n# s, squash <commit> = use commit, but meld into previous commit\n# f, fixup [-C | -c] <commit> = like \"squash\" but keep only the previous\n#                    commit's log message, unless -C is used, in which case\n#                    keep only this commit's message; -c is same as -C but\n#                    opens the editor\n# x, exec <command> = run command (the rest of the line) using shell\n# b, break = stop here (continue rebase later with 'git rebase --continue')\n# d, drop <commit> = remove commit\n# l, label <label> = label current HEAD with a name\n# t, reset <label> = reset HEAD to a label\n# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]\n# .       create a merge commit using the original merge commit's\n# .       message (or the oneline, if no original merge commit was\n# .       specified); use -c <commit> to reword the commit message\n# These lines can be re-ordered; they are executed from top to bottom.\n#\n# If you remove a line here THAT COMMIT WILL BE LOST.\n#\n# However, if you remove everything, the rebase will be aborted.\n#\n# Note that empty commits are commented out\n")),(0,l.kt)("p",null,"We can squash the second commit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pick ff239cd first commit\nsquash 4350346 added feature x\npick ec716b0 added feature y\npick 4baeaaf a patch for feature y\n")),(0,l.kt)("h3",{id:"working-with-remotes"},"Working with remotes"),(0,l.kt)("p",null,"Here I use the example of GitHub. You can choose another provider, like Gitlab,\nBitbucket."),(0,l.kt)("p",null,"Clone a github repository locally:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/user/repository.git\n")),(0,l.kt)("p",null,"If you want to have your repository with a different name, just pass the new\nname as second argument:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/user/repository.git my-repo-name\n")),(0,l.kt)("p",null,"Clone a specific branch:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --branch <branchname> <remote-repo-url>\n")),(0,l.kt)("p",null,"Shallow cloning:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --depth 1 https://github.com/user/repository.git\n")),(0,l.kt)("p",null,"Git clone with a synchronizing specific ",(0,l.kt)("inlineCode",{parentName:"p"},"git-lfs")," directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --config lfs.fetchinclude='files/figures'\n")),(0,l.kt)("p",null,"What if I want to have full history later:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git fetch --unshallow\n")),(0,l.kt)("p",null,"Add GitHub remote directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git remote add <short-name> <url>\ngit remote add origin https://github.com/user/repository.git\n")),(0,l.kt)("p",null,"You can have multiple remotes. You can check the remotes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git remote -v\n")),(0,l.kt)("p",null,"Change remote to a new url:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git remote set-url origin <new-url>\n")),(0,l.kt)("p",null,"Push changes to the GitHub:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git push <remote> <branch>\ngit push origin master\n")),(0,l.kt)("p",null,"Force Push:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git push origin --force --all\n")),(0,l.kt)("p",null,"Fetch from remote. It fetches the meta-data from the remote:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git fetch <short-name or url>\n")),(0,l.kt)("p",null,"Then you can run a diff:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git diff master origin/master\ngit diff <local> <remote/branch>\n")),(0,l.kt)("p",null,"If everything is alright, you can pull the data from remote:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git pull <remote> <remote-master>\ngit pull origin master\ngit pull --all\n")),(0,l.kt)("p",null,"What happens if the remote is force pushed, therefore the commit hash changed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# reset local to parent commit\n# carefull --hard will remove everything after specified commit\ngit reset --hard HEAD~\ngit pull origin main --no-rebase\n# if you have more than only parent commit hash mismatch\ngit reset --hard HEAD~<number of commits to reset>\n")),(0,l.kt)("p",null,"Rename remote:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git remote rename <old-name> <new-name>\n")),(0,l.kt)("p",null,"Remove remote:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git remote remove <short-name>\n")),(0,l.kt)("p",null,"Pull upstream changes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# set aside working files\ngit stash\n# bring in upstream changes\ngit pull\n# apply stash\ngit stash apply\n")),(0,l.kt)("p",null,"Pull changes and discard local changes (not recommended, do it with caution):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git fetch\ngit reset --hard origin/master\n")),(0,l.kt)("p",null,"Submodules:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# status\ngit submodule status\n\n# update\ngit submodule update --recursive --init\n")),(0,l.kt)("h3",{id:"override-language-stat"},"Override language stat"),(0,l.kt)("p",null,"How can we make GitHub ignore certain languages or recognize as different\nlanguage in GitHub language statistics? Create a ",(0,l.kt)("inlineCode",{parentName:"p"},".gitattributes")," file in the\nproject root with content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# reclassifies `.ipynb` files as Python:\n*.ipynb linguist-language=Python\n\n# ignore certain paths\nnot-actual-project-code/* linguist-vendored\n")),(0,l.kt)("p",null,"More info ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/github/linguist/blob/master/docs/overrides.md"},"here"),"."),(0,l.kt)("h2",{id:"resources"},"Resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2"},"https://git-scm.com/book/en/v2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/pluralsight/git-internals-pdf"},"https://github.com/pluralsight/git-internals-pdf"))))}h.isMDXComponent=!0}}]);