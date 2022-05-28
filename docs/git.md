---
title: Git
keywords: ["git", "github", "version control"]
---

Git is a content aware filesystem. It is used for version control. It is used by
millions of developers. It is used by big projects for distributed software
development. But you can use it to keep track of almost anything from your
manuscripts, drawings to complicated code structure. It can provide you with
many advantages. It's worth putting some effort to learn git. Happy learning!

### Configuration

Check if you have git already installed by issuing following command in Terminal
```bash
git --version
```

If you see error. Go [here](https://git-scm.com) download and install git. If
you are on Windows, use of Git bash is recommenced. In MacOS or Linux, use
Terminal.

Configure git
```bash
git config --global user.name "User Name"
git config --global user.email "user@example.com"
```

Check a particular entry
```bash
git config --global user.name
```

If you want to add a text editor which will let you type long commit messages.
For Visual Studio Code/Atom, use following (choose one):
```bash
git config --global core.editor "code --wait"
git config --global core.editor "atom --wait"
```

You can check your setting by:
```bash
git config --list
```

We can save/move to another computer our git configuration in a `~/.gitconfig`
file:
```
[user]
	name = Pranab Das
	email = 31024886+pranabdas@users.noreply.github.com
[core]
	editor = code --wait
[push]
	default = current
[github]
	user = pranabdas
```

### Basics

Initialize current project directory:
```bash
git init
```

Now start working/modifying your files. Then you need to add files individually
or whole directory for staging.
```bash
git add filename
```

Add current directory to staging. You can use either one of the following:
```bash
git add .
git add --all
```

This will add the files to the staging area. Note that if you make further
changes on the files before commit, those new changes will not be included in
the commit. Commit will record precisely when you ran the git add. You can check
the status of your project by:
```bash
git status
```

There is a short status version, which will output a concise status message:
```bash
git status -s
```

### gitignore

Often you want to ignore some files or directories in your project. You can do
that by creating a *.gitignore* in your project root, and including the files
and folders that you want to exclude. You can use patterns/wildcards to indicate
those files.
```bash
vi .gitignore
```

Then this is how the contents of *.gitignore* should look like:
```bash
# Ignore all bin files
*.bin

# Track lib.bin even though we ignore all other .bin
!lib.bin

# Ignore everything on the output directory
output/

# ignore a specific file
result.log

# ignore all .pdf files in the doc/ directory and any of its subdirectories
doc/**/*.pdf

# ignore all sub-directories __pycache__
/**/__pycache__
```

Note that .gitignore applies to un-tracked files. Once, you include them in git
add, they won't be removed automatically by .gitignore inclusion. You can remove
them manually by:
```bash
git rm --cached filename
git rm --cached folder/
```

Blank lines or the lines that start with `#` are ignored. You can visit this
page <https://github.com/github/gitignore>, where GitHub maintains a list of
*.gitignore* for various popular projects.

Remove a file from staging environment:
```bash
git checkout filename
```

You can also do for all files, certain directory, or wildcards:
```bash
git checkout --.
git checkout --*.html
```

### diff

To see what changes you have made but not staged:
```bash
git diff
```

To see what changes you have staged:
```bash
git diff --staged
```

Check the difference with another branch or commit
```bash
git diff <commit-hash or branch-name>
```

Check the difference for a particular file:
```bash
git diff -path/file.md
```

You can also remove something, or everything from staging using:
```bash
git reset HEAD filename
git reset HEAD
```

### commit

Commit git (save staging state):
```bash
git commit -m "commit comment"
```

You can add all changes and commit by combing:
```bash
git commit -a -m "commit all changes"
```

You can also have multi-line commit messages:
```bash
git commit -m "commit message one" -m "another message"
```

Often you forget some files to add or commit to early. You can add those files
and amend the commit:
```bash
git commit --amend
git commit --amend --no-edit
```

Empty commit to trigger GitHub action
```bash
git commit --allow-empty -m "empty commit to trigger github actions"
git commit --allow-empty --amend --no-edit
```

Check the records/commits of your project:
```bash
git log
git shortlog
git log --pretty=oneline --abbrev-commit
```

Show the changes in a commit
```bash
git show --pretty=oneline --abbrev-commit HEAD
```

Go back to (undo) previous commits
```bash
git checkout <commit-hash>
```

### branch

It will create a separate branch (main branch is called master). You can check
branches by:
```bash
git branch
```

You can list remotes brach as well with:
```bash
git branch -a
```

Go back to master:
```bash
git checkout master
```

You can keep the other by creating a new branch:
```bash
git branch <new-branch> <commit-hash>
```

Switch to new branch by using
```bash
git checkout <new-branch>
```

You can create a new branch from current master as well
```bash
git branch <branch-name>
```

Bring over changes from a branch to the master. Once you merge, you bring over
all the changes from another branch to the working directory (you do not bring
the commit history from other branch). If there are files modified on both
branch, there will be conflict merge, you may need to manually resolve those
files. Once everything is alright, you can make commit to keep a permanent
record.
```bash
git checkout master
git merge <branch-name>
```

Rename a branch:
```bash
git branch -m <old-name> <new-name>
```

Delete a brach:
```bash
git branch -d <branch-name>
```

The above command will fail with warning if there are changes that are not
merged. If you want to delete a branch irrespective of whether the changes were
merged:
```bash
git branch -D <branch-name>
```

### reset

Following will reset all changes after the specified commit. This preserves the
history locally.
```bash
git reset <commit hash>
```

Discard all changes without history:
```bash
git reset --hard <commit hash>
```

Reset changes after last commit (HEAD represents the current working directory).
This will keep the changes un-staged. If you want to reset fully use the flag
`--hard`.
```bash
git reset HEAD
git reset --hard HEAD
```
Resetting history which is already pushed to remote can have unintended side
effects. Do it with caution.

You can undo a merge by using either of following two:
```bash
git merge --abort
git reset --hard HEAD
```

### rebase

Collapse/combine multiple commits into one: say we have following situation:
```bash
commit 4baeaaf9168beccd43d726b6f3baad8c35a47366 (HEAD -> master)
Author: Pranab Das <31024886+pranabdas@users.noreply.github.com>
Date:   Thu Mar 3 23:29:59 2022 +0800

    a patch for feature y

commit ec716b0b25095b6c81a34b2bc9351bae3fb64101
Author: Pranab Das <31024886+pranabdas@users.noreply.github.com>
Date:   Thu Mar 3 23:29:31 2022 +0800

    added feature y

commit 43503465d89a0ae6fd2db795e061820268c4456e
Author: Pranab Das <31024886+pranabdas@users.noreply.github.com>
Date:   Thu Mar 3 23:28:54 2022 +0800

    added feature x

commit ff239cdc856b641cae95f537c3227e32318a42bc
Author: Pranab Das <31024886+pranabdas@users.noreply.github.com>
Date:   Thu Mar 3 23:28:21 2022 +0800

    first commit
```

We want to merge last two commits into one.

```bash
git reset --soft HEAD~2
# or
git reset --soft ec716b0
```

This will reset the commit index to desired commit, but leave the changes ready
to be committed.
```bash
git commit -m "added feature y"
```

What if we need to combine the very first and the next one?
```bash
git rebase -i --root
```

This will give you interactive editor with helpful hint:
```bash
pick ff239cd first commit
pick 4350346 added feature x
pick ec716b0 added feature y
pick 4baeaaf a patch for feature y

# Rebase ff239cd..4baeaaf onto ff239cd (3 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup [-C | -c] <commit> = like "squash" but keep only the previous
#                    commit's log message, unless -C is used, in which case
#                    keep only this commit's message; -c is same as -C but
#                    opens the editor
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified); use -c <commit> to reword the commit message
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

We can squash the second commit
```bash
pick ff239cd first commit
squash 4350346 added feature x
pick ec716b0 added feature y
pick 4baeaaf a patch for feature y
```

### Working with remotes

Here I use the example of GitHub. You can choose another provider, like Gitlab,
Bitbucket.

Clone a github repository locally:
```bash
git clone https://github.com/user/repository.git
```

If you want to have your repository with a different name, just pass the new
name as second argument:
```bash
git clone https://github.com/user/repository.git my-repo-name
```

Clone a specific branch:
```bash
git clone --branch <branchname> <remote-repo-url>
```

Shallow cloning:
```bash
git clone --depth 1 https://github.com/user/repository.git
```

What if I want to have full histroy later:
```bash
git fetch --unshallow
```

Add GitHub remote directory:
```bash
git remote add <short-name> <url>
git remote add origin https://github.com/user/repository.git
```

You can have multiple remotes. You can check the remotes:
```bash
git remote -v
```

Change remote to a new url:
```bash
git remote set-url origin <new-url>
```

Push changes to the GitHub:
```bash
git push <remote> <branch>
git push origin master
```

Force Push:
```bash
git push origin --force --all
```

Fetch from remote. It fetches the meta-data from the remote:
```bash
git fetch <short-name or url>
```

Then you can run a diff:
```bash
git diff master origin/master
git diff <local> <remote/branch>
```

If everything is alright, you can pull the data from remote:
```bash
git pull <remote> <remote-master>
git pull origin master
git pull --all
```

What happens if the remote is force pushed, therefore the commit hash changed:
```bash
# reset local to parent commit
# carefull --hard will remove everything after specified commit
git reset --hard HEAD~
git pull origin main --no-rebase
# if you have more than only parent commit hash mismatch
git reset --hard HEAD~<number of commits to reset>
```

Rename remote:
```bash
git remote rename <old-name> <new-name>
```

Remove remote:
```bash
git remote remove <short-name>
```

Pull upstream changes:
```bash
# set aside working files
git stash
# bring in upstream changes
git pull
# apply stash
git stash apply
```

Pull changes and discard local changes (not recommended, do it with caution):
```bash
git fetch
git reset --hard origin/master
```

### Override language stat

How can we make GitHub ignore certain languages or recognize as different
language in GitHub language statistics? Create a `.gitattributes` file in the
project root with content:
```bash
# reclassifies `.ipynb` files as Python:
*.ipynb linguist-language=Python

# ignore certain paths
not-actual-project-code/* linguist-vendored
```
More info [here](
https://github.com/github/linguist/blob/master/docs/overrides.md).

## Resources
- <https://git-scm.com/book/en/v2>
- <https://github.com/pluralsight/git-internals-pdf>
