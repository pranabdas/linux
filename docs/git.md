### Git commands

Git is a content aware filesystem. It is used for version control. It is used by millions of developers. It is used by big projects for distributed software development. But you can use it to keep track of almost anything from your manuscripts, drawings to complicated code structure. It can provide you with many advantages. It's worth putting some effort to learn git. Happy learning! 

- Check if you have git already installed by issuing following command in Terminal
```
git --version
```

- If you see error. Go to [https://git-scm.com](https://git-scm.com){:target="_blank"} download and install.

- If you are on Windows, use of Git bash is recommenced. In MacOS or Linux, use the Terminal.

- Configure git
```
git config --global user.name "User Name"
git config --global user.email "user@example.com"
```

- Check a particular entry
```
git config --global user.name
```

- If you want to add a text editor which will let you type long commit messages. For Visual Studio Code/Atom, use following (choose one):
```
git config --global core.editor "code --wait"
git config --global core.editor "atom --wait" 
```

- You can check your setting by: 
```
git config --list
```

- Initialize current project directory:
```
git init
```

- Now start working/modifying your files. Then you need to add files individually or whole directory for staging. 
```
git add filename
``` 

- Add current directory to staging. You can use either one of the following:
```
git add . 
git add --all 
```

- This will add the files to the staging area. Note that if you make further changes on the files before commit, those new changes will not be included in the commit. Commit will record precisely when you ran the git add. You can check the status of your project by:
```
git status
``` 

- There is a short status version, which will output a concise status message:
```
git status -s
```

- Often you want to ignore some files or directories in your project. You can do that by creating a *.gitignore* in your project root, and including the files and folders that you want to exclude. You can use patterns/wildcards to indicate those files. 
```
vi .gitignore
``` 

- Then this is how the contents of *.gitignore* should look like:
```
    # Ignore all bin files 
    *.bin 

    # Track lib.bin even though we ignore all other .bin
    !lib.bin 

    # Ignore everything on the output directory 
    output/
    
    result.txt

    # ignore all .pdf files in the doc/ directory and any of its subdirectories
    doc/**/*.pdf
```
- Note that .gitignore applies to un-tracked files. Once, you include them in git add, they won't be removed automatically by .gitignore inclusion. You can remove them manually by: 
```
git rm --cached filename
git rm --cached folder/
```

- Blank lines or the lines that start with "#" are ignored. You can visit this page [https://github.com/github/gitignore](https://github.com/github/gitignore){:target="_blank"}, where GitHub maintains a list of *.gitignore* for various popular projects. 

- Remove a file from staging environment:
```
git checkout filename
```

- You can also do for all files, certain directory, or wildcards:
```
git checkout --.
git checkout --*.html
```

- To see what changes you have made but not staged: 
```
git diff 
```

- To see what changes you have staged: 
```
git diff --staged 
``` 

- Check the difference with another branch or commit
```
git diff <commit-hash or branch-name>
```

- Check the difference for a particular file: 
```
git diff -- path/file.md 
```

- You can also remove something, or everything from staging using:
```
git reset HEAD filename
git reset HEAD
```

- Commit git (save staging state):
```
git commit -m "commit comment"
```

- You can add all changes and commit by combing: 
```
git commit -a -m "commit all changes"
```

- Often you forget some files to add or commit to early. You can add those files and amend the commit: 
```
git commit --amend 
```

- Check the records/commits of your project:
```
git log
```

- Go back to (undo) previous commits
```
git checkout <commit-hash>
```

- It will create a separate branch (main branch is called master). You can check branches by:
```
git branch
``` 

- You can list remotes brach as well with: 
```
git branch -a
```

- Go back to master:
```
git checkout master
```

- You can keep the other by creating a new branch:
```
git branch <new-branch> <commit-hash>
```

- Switch to new branch by using
```
git checkout <new-branch>
```

- You can create a new branch from current master as well
```
git branch <branch-name>
```

- Bring over changes from a branch to the master. Once you merge, you bring over all the changes from another branch to the working directory (you do not bring the commit history from other branch). If there are files modified on both branch, there will be conflict merge, you may need to manually resolve those files. Later everything is alright, you can make commit to keep a permanent record. 
```
git checkout master
git merge <branch-name>
```

- Rename a branch:
```
git branch -m <old-name> <new-name>
```

- Delete a brach:
```
git branch -d <branch-name>
```

- The above command will fail with warning if there are changes that are not merged. If you want to delete a branch irrespective of whether the changes were merged: 
```
git branch -D <branch-name>
``` 

- Following will reset all changes after the specified commit. This preserves the history locally. 
```
git reset <commit hash>
```

- Discard all changes without history: 
```
git reset --hard <commit hash> 
```

- Reset changes after last commit (HEAD represents the current working directory). This will keep the changes un-staged. If you want to reset fully use the flag `--hard`. 
```
git reset HEAD 
git reset --hard HEAD
```
- Resetting history which is already pushed to remote can have unintended side effects. Do it with caution. 

- You can undo a merge by using either of following two: 
```
git merge --abort  
git reset --hard HEAD 
```

<br> 
**Working with remotes:**  

Here I use the example of GitHub. You can choose another provider, like Gitlab, Bitbucket. 

- Clone a github repository locally:
```
git clone https://github.com/user/repository.git 
```

- If you want to have your repository with a different name, just pass the new name as second argument: 
```
git clone https://github.com/user/repository.git my-repo-name
``` 

- Add GitHub remote directory:
```
git remote add <short-name> <url>
git remote add origin https://github.com/user/repository.git
```

- You can have multiple remotes. You can check the remotes: 
```
git remote -v
```

- Push changes to the GitHub:
```
git push <remote> <branch>
git push origin master
```

- Force Push:
```
git push origin --force --all
```

- Fetch from remote. It fetches the meta-data from the remote: 
```
git fetch <short-name or url>
```

- Then you can run a diff: 
```
git diff master origin/master
git diff <local> <remote/branch> 
```
- If everything is alright, you can pull the data from remote: 
```
git pull <remote> <remote-master> 
git pull origin master 
git pull --all
```
- Rename remote: 
```
git remote rename <old-name> <new-name>
``` 

- Remove remote:
```
git remote remove <short-name>
```
<br/> 

**Learn more about git:** 
- [https://git-scm.com/book/en/v2](https://git-scm.com/book/en/v2){:target="_blank"} 
- [https://github.com/pluralsight/git-internals-pdf](https://github.com/pluralsight/git-internals-pdf){:target="_blank"} 
