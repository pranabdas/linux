---
title: The commandline
sidebar_label: Commandline
keywords: ["linux", "unix", "commandline", "shell", "ssh", "sed", "grep", "wget", "openssl"]
---

## Navigating around

Print current working directory:
```bash
pwd
```

List files and folders current directory:
```bash
ls
```

List a directory with more details:
```bash
ls -l
```

Above `-l` stands for long. In some shells, the above command is aliased to
`ll`.

List hidden (all) files:
```bash
ls -la
```

You can list not only current directory but another directory:
```bash
ls sub_directory
```

**Common `ls` options:**

| Option | Description |
| ------ | ----------- |
| -a     | List all files |
| -h     | Display file sizes in more human readable format instead of bytes |
| -l     | Long format |
| -r     | Reverse order |
| -S     | Sort by size |
| -t     | Sort by time |

Your current directory is denoted by `.`, and parent directory by `..`

There is a nice utility **tree** which displays the tree structure of a
directory:
```bash
tree
tree -aCd -L 2 /
```

Change directory:
```bash
cd home
cd ..
```

Go to previous working directory:
```bash
cd -
```

Go to home directory (any of the below):
```bash
cd
cd ~
```

## Files and folders

Determine a file content with `file` command:
```bash
file profile.jpg
```

Copy ```file_original``` to ```file_final```:
```bash
cp file_original file_final
```

Move file or directory:
```bash
mv file_source file_destination
```

Copy a directory along with the contents inside recursively:
```bash
cp -r source_path destination_path
```

Sometimes we need to copy files along with permissions, timestamps, and other
attributes, use the `-p` flag:
```bash
cp -rp source_path destination_path
```

Create new directory:
```bash
mkdir new_dir
```

Delete a directory:
```bash
rm -rf my_dir
```

Delete an empty directory:
```bash
rmdir empty_dir
# or use its alias
rd empty_dir
```

:::tip

One of the fastest way to delete a large directory:
```bash
mkdir empty && \
  rsync -r --delete empty/ large_dir && \
  rm -r large_dir empty
```

:::

Disk usage, find folder size:
```bash
du -hs
du -hs path/

# list all folders with wild card
du -hs *

# list folder sizes and sort
du -hs * | sort -n

# total usage line in the end
du -hsc *

# list sizes by controlling depth
du -d 2 -h
```

Display string/variable:
```bash
echo string
echo $variable

# with variable expansion
echo ${variable}

# write/rewrite to a file
echo string > file

# append to an existing file
echo string >> existing-file
```

Print (concatenate the contents to the standard output) the contents of a file:
```bash
cat file.txt
```

Print only the head (default first 10 lines) of a file:
```bash
head file.txt
```

You can print particular number of lines:
```bash
head -20 file.txt
```

Print as much as fits in the shell window:
```bash
more file.txt
```

See the end of a file:
```bash
tail file.txt
tail -20 file.txt
```

Print the contents to a file:
```bash
cat file.txt > file-copy.txt
```

This seems same as copy. But you can use this to combine multiple files:
```bash
cat file.txt, file2.txt > file-copy.txt
```

Instead of overwriting file, you can append:
```bash
cat file3.txt >> file-copy.txt
```

You can use *paste* to combine files as well:
```bash
paste file* > file-all.txt
```

Text redirect with `sudo`:

```bash
echo "something" | sudo tee /ect/something.config
```

If you need to append instead of overwriting:

```bash
echo "something" | sudo tee -a /ect/something.config
```

Redirect multiple lines with `cat`:

```bash
# cat << EOF > test.txt
cat > test.txt << EOF
Hello World!
Have a good day.
EOF
```

Redirect multiple lines with `sudo` privilege:
```bash
cat << EOF | sudo tee /etc/jupyter/jupyter_server_config.py > /dev/null
c.ServerApp.ip = '0.0.0.0'
c.ServerApp.allow_root = True
c.ServerApp.open_browser = False
EOF
```

Look for lines containing certain word. This will list the lines that contain
the word *file* in the *cat* manual:
```bash
man cat | grep file
```

Working with large files:
```bash
less file.txt
man top | less
cat file.txt | less
```
**Common `less` keyboard shortcuts:**

Shortcut | Description
-------- | -----------
space    | Scroll forward one page
b        | Scroll back one page
G        | Move to the end of file
g        | Move to the beginning of file
/char    | Search forward
n        | Search for next occurrence
q        | Quit

Redirecting output:
```bash
# throw away output
npm install &> /dev/null
```

Writing stdout and stderr to a file
```bash
npm install &> log.txt

# or
npm install >log.txt 2>&1

# write to separate files
npm install > result_log.txt 2> error_log.txt

# throw away stderr
npm install > result_log.txt 2> /dev/null

npm install 2>&1 > result_log.txt
```

Create symbolic links:
```bash
ln -s /path/to/file.txt /path/to/link.txt
```

Bash expansion: If you need to create/copy/move/delete a series of files:
```bash
touch file_{01..05}.txt
```
It will create file_01.txt, file_02.txt and so on.

Recall previous command:
```bash
apt update
sudo !!
```

## tar
Create a tar archive of files:
```bash
tar -czvf files.tar.gz file1.pdf file2.pdf
```

:::warning

It is important that the `-f` or `--file` flag is used just preceding the output
file name.

:::

Create a tar archive of a directory:
```bash
tar -czvf files.tar.gz /home/files
```

Untar an archive:
```bash
tar -xzvf files.tar.gz
```

Extract on a different directory:
```bash
tar -xzvf files.tar.gz -C /tmp/
```

List contents of a tar file:
```bash
tar -tf files.tar.gz
```

## zip

If you have got a zip file to unzip. You need to install *unzip*.
```bash
sudo apt install zip unzip
sudo dnf install zip unzip
```

Then:
```bash
unzip filename.zip
unzip filename.zip -d /home/destination

# see contents of zip file without unzipping
unzip -l filename.zip
```

Zip file(s) or folders:
```bash
zip output.zip file1.txt file2.md
zip -r output.zip source_dir
zip -rq output.zip source_dir
```

Encrypt ZIP files using [7-zip](https://www.7-zip.org/). The ZIP files are
compatible with Windows (use 7-zip, or WinZip/WinRAR) and macOS (use [Keka](
https://www.keka.io)).

```bash
# install 7-zip in ubuntu/debian
sudo apt update
sudo apt install 7zip

# encrypt and add to zip archive
7zz a archive.zip file1.txt file2.pdf -mem=AES256 -p -tzip

# encrypt directory
7zz a -mem=AES256 -p -tzip archive.zip dir

7zz a -mem=AES256 -p -tzip archive.zip -r dir/*

7zz a -tzip archive.zip -r src/*.c src/*.h

# alternatively you can provide password with the `-p${passwd}` flag

# list contents of archive
7zz l archive.zip

# extract files
7zz x archive.zip

# set output directory
7zz x archive.zip -o./new-dir
```

:::caution

The above method does not encrypt the file/directory names while using ZIP
format. If you want to encrypt archive headers, use `-mhe` switch with other
compression methods such as `7z`. Find more details [here](
https://sevenzip.osdn.jp/chm/cmdline/commands/index.htm) and [here](
https://sevenzip.osdn.jp/chm/cmdline/switches/index.htm).

:::

Verify the checksum
```bash
md5 path/file.iso
shasum -a 256 path/file.iso
shasum -a 512 path/file.iso
```

## find
Search for files using `find` command:
```bash
find /home/pranab -type f -name profile.jpg

# find in several directories
find /home/pranab /users/pranab -type f -name profile.jpg

# case insensitive search
find /home/pranab -type f -iname profile.jpg

# by filetype
find /home/pranab -type f -name *.pdf
```
Useful `-type` flags: `f`: regular files, `d`: directory, `l`: symbolic link.

Find by file permission:
```bash
find . -perm 0600  -print
find . -perm 0644  -type f -name tests.py -print

# without permission
find . -type f ! -perm 777

# find all executables
find . -perm /a=x
```

Find by file size:
```bash
find /tmp -type f -size 1024c

# less than 1 megabyte
find . -type f -size -1M

# bigger than 1 kilobyte
find . -type f -size +1k

# between 512 MB and 1 GB
find . -type f -size +512M -size -1G
```

Find files based on modification time
```bash
# find files modified in last 7 days
find . -name "*.md" -mtime 7

# modified in last hour
find . -name "*.md" -mmin 60

# last modified more than 7 days before
find . -name "*.md" -mtime +7 -daystart
```

Find and delete file:
```bash
find . -type f -name .DS_Store -delete
```

:::danger

Run above command with caution. First run the command without the `-delete` flag
to be sure what your are deleting. If the expression prior to `-delete` is what
you did not mean, it could delete something that you did not want.

:::

Look for multiple filetype at once:
```bash
find . -type f \( -name \*.jpg -o -name \*.png \)
```

## grep
Find specific string/words in a file or set of files.
```bash
grep estimation output.txt
grep "energy estimation" output.txt

# find in multiple files
grep estimation output.txt output2.txt

# find in all files in a directory
grep estimation *

# ignore case
grep -i estimation *

# search subdirectories
grep -r estimation *

# list of matching files
grep -l estimation *

# count number of matches
grep -c estimation *

# search for multiple strings
grep -e estimation -e "total energy" *
```

## sed

Use **s**tream **ed**itor to find and replace text.

```bash
# substitute first string occurrence in every line
sed s/pattern/replace_string/ file.txt

# substitute all string occurrences in every line
sed s/pattern/replace_string/g file.txt

# substitute al string occurrences in range of lines
sed 1,5s/pattern/replace_string/g file.txt

# case insensitive search
sed s/pattern/replace_string/gI file.txt

# write the output to a file
sed s/pattern/replace_string/gI file.txt > newfile.txt

# save changes to the same file
sed -i.bak s/pattern/replace_string/gI file.txt
```

In the last command it will create a backup of the original file named
`file.txt.bak`.

## wget
Download a file using `wget`:
```bash
wget https://example.com/pic.jpg
```

Download and save to a path/name:
```bash
wget https://example.com/pic.jpg -O images/profile.jpg
```

Continue with interrupted download:
```bash
wget -c http://example.com/file.ext
```

Mirror a website locally using wget:
```bash
wget --mirror \
  --convert-links \
  --html-extension \
  --wait=1 \
  --user-agent="Mozilla/5.0 (Linux x86_64; rv:97.0) Gecko/20100101 Firefox/97.0" \
  -o log \
  http://example.com
```

`--convert-links` will convert the links suitable for viewing with local paths;
`--html-extensions` will handle if there are no extension at the end of URLs;
`--wait` to specify waiting time between successive retrievals in seconds.

## ssh

ssh can be used to connect to remote machines. First make sure you have the ssh
installed in your machines:
```bash
sudo apt install --no-install-recommends openssh-server
```

You need to know the IP address or hostname of remote machine:
```bash
ip addr
```

Connecting to a ssh server:
```bash
ssh <username>@<xxx.xx.xx.xxx> -p <yyyy>
```
where `xxx.xx.xx.xxx` is the IP address and `yyyy` is the port number.

You can disconnect from the remote ssh by pressing **[control]+[d]** or typing
`exit` on the terminal.

Running ssh server on Windows Subsystem for Linux. Open the following file:
```bash
sudo vi /etc/ssh/sshd_config
```

Change the port to anything above `1000` (default `22` might conflict with host
Windows system if you are using WSL).
Change `PasswordAuthentication yes`
Add `AllowUsers <your username>`

Save and exit. Following commands should be self explanatory:
```bash
service ssh status
sudo service ssh start
sudo service ssh stop
sudo service ssh --full-restart
```

Port forwarding. Let's say you are working on a python jupyter notebook on the
remote server via ssh and you want to see the notebook in your local browser.
You can forward the specific port to your local machine:
```bash
ssh -L 8888:127.0.0.1:8888 pranab@xxx.xx.x.xxx -p yyyy -i ~/.ssh/id_rsa
```

Now you can see the notebook in your client machine.

Adding SSH key-pair to connect to a server. Generate the key-pair in your client
computer:
```bash
ssh-keygen

# generate key with specific algorithm
ssh-keygen -t ed25519 -C "email@example.com"

# for legacy systems use 4096 bit RSA
ssh-keygen -t rsa -b 4096 -C "email@example.com"

# find bit length of an existing key
ssh-keygen -l -f ~/.ssh/id_ed25519.pub

# add or change password of an existing key
ssh-keygen -p -f ~/.ssh/id_ed25519
```
You may leave everything default and press enter. It will generate public and
private key pair inside `~/.ssh` directory. Now we need to copy the public key
to the host machine. Connect to remote host using password. Create a `.ssh`
directory in the remote home directory. You can print the public key in your
terminal `cat id_rsa.pub` and copy it to clipboard.

```bash
ssh <username>@<xxx.xx.xx.xxx> -p <yyyy>
mkdir .ssh
vi .ssh/authorized_keys
```

Paste the public key, save and exit. Then open `/etc/ssh/sshd_config` with
`sudo vi` and uncomment the line `PubkeyAuthentication yes`. You may choose to
set `PasswordAuthentication no` if you want. Set the following permissions:
```bash
sudo chmod 700 .ssh
sudo chmod 600 .ssh/authorized_keys
```

Restart the ssh service on remote host
```bash
sudo service ssh restart
```

Now you can connect from your local computer using:
```bash
ssh pranab@xxx.xx.x.xxx -p yyyy -i ~/.ssh/id_rsa
```

Copying files via scp from remote to local or vice-versa:
```bash
scp remote_username@10.10.0.2:/remote/file.txt /local/directory
scp file.txt remote_username@10.10.0.2:/remote/directory
```

You can use `scp` to transfer files as well using ssh-keys:
```bash
scp -i ~/.ssh/id_rsa remote_username@10.10.0.2:/remote/file.txt /local/directory
scp -P yyyy -i ~/.ssh/id_rsa file.txt remote_username@10.10.0.2:remote/directory
```

We can secure copy a directory using `-r` flag:
```bash
scp -i "ssh_key.pem" -r ~/Documents/mydir user@domain.com:Downloads/mydir
```

## diff

Compare two files:
```bash
diff file.txt file_new.txt
```

Compare two folders:
```bash
diff -rq folder folder_new
```
Here the `q` flag is for the brief mode, otherwise it would not only show which
files are different but also show line-by-line differences.

## openssl

There are various encription options available in openssl. In the above, we have
used AES-256 (Advanced Encryption Standard with 256 bit key length) symmetric
encryption in CBC (Cipher Blocker Chaining) mode, used salt hashing, pbkdf2
(Password-Based Key Derivation Function 2) key stretching, and armor output
(`-a`). Check openssl documentation for more details.

Some good set of options:
```bash
# to encrypt
openssl enc -e -aes-256-cbc \
  -salt \
  -iter 1000000 \
  -md sha512 \
  -base64 \
  -in somefile.txt \
  -out somefile.enc

# to decrypt
openssl enc -d -aes-256-cbc \
  -salt \
  -iter 1000000 \
  -md sha512 \
  -base64 \
  -in somefile.enc \
  -out somefile.txt
```

:::note

It is very important to write down which encryption options you use in order to
decrypt them. Default options may not be the best choice.

`-salt` flag is very crucial, it is used by default while encrypting using
openssl. Use of `-iter` also enables `-pbkdf2` for key stretching.

The ASCII armor (base64) output will increase the file size. If you don't need
to copy and pase the output (say, you need to send via an email message), it is
better to leave them as binary.

If you are going to compress your data, you should do it before encrypting.
After encryption, it is basically random gibberish which won't benefit from
compression algorithms (e.g., dictionary based compression).

You can also use [GPG](./pgp) program to perform symmetric encryption.

:::

For on the fly encryption and decryption with terminal input and output:
```bash
openssl enc -e -aes-256-cbc \
  -salt \
  -iter 1000000 \
  -md sha512 \
  -base64 <<< "Secret message."

openssl enc -d -aes-256-cbc \
  -salt \
  -iter 1000000 \
  -md sha512 \
  -base64 <<< "U2FsdGVkX18Y9d6MT+d8kbrmfsgd1j/vnNlZ5T7LQ6I="
```

If you are on Windows, you can get OpenSSL by installing git. You can consider
having the [portable git version](https://git-scm.com/download/win) if you don't
need to install git in your computer. Run using full path to executable:
`'C:\Program Files\Git\usr\bin\openssl.exe'` if the bin directory is not added
to `PATH` environment variable.

## File permissions

When we list a file using `ls -la` or similar, we see permissions strings. What
does they mean?

r → read <br/>
w → write <br/>
x → execute <br/>

and they are listed for user, group, and others. We can set the file permissions
by using numeric conventions. r=4 (binary 100), w=2 (010), and x=1 (001). Say we
want to set `rwx` for user, `rx` for group and only `x` for others, we can set
that by:
```bash
chmod 751 file.sh
```

Alternatively, in symbolic notation, we can assign or add or remove permissions:
```bash
chmod u=rwx, g=rx, o= file.sh
chmod u+x file.sh
chmod g-x file.sh
```

We can change file permissions recursively as well:
```bash
chmod -R ugo-x /home/pranab
chmod -R a-x /home/pranab
```

Make a script file executable:
1. Create a file filename.sh
2. Write down your script
3. Make the file executable: `chmod +x filename.sh`
4. Run the script: `./filename.sh`

## rsync
It can be used to mirror/copy files and folders in a local machine as well as
to / from remote machines. It is a very powerful tool with lots of options and
customizations. Here are few common ones:

Copy / sync files locally:
```bash
rsync -avh backup.tar /tmp/backups/
```

Copy folders locally:
```bash
rsync -avh /root/rpmpkgs /tmp/backups/
rsync -avh /root/rpmpkgs/ /tmp/backups/rpmpkgs
```

Copy files over ssh:
```bash
rsync -avzhe "ssh -i ~/.ssh/id_rsa -p yyyy" pranab@xxx.xx.x.xxx:file.txt ~/Desktop/
rsync -avzhe "ssh -i ~/.ssh/id_rsa -p yyyy" ~/Desktop/file.txt pranab@xxx.xx.x.xxx:docs
```

By default rsync won't remove deleted files from the destination. If you want to
delete:
```bash
rsync -avh --delete /home/file.txt /usr/desktop/
```

While using the `--delete` flag, it is a good idea to first run the command with
`--dry-run` flag to see the changes before actually deleting the files. The
`--dry-run` flag let you see the output without actually applying the command.

Exclude a file or directory from syncing:
```bash
rsync -avh --delete --exclude .git /home/my-project/ /mnt/d/my-project
rsync -avh --delete --exclude *.iso /home/my-project/ /mnt/d/my-project
rsync -avh --max-size=500m /home/my-project/ /mnt/d/my-project
rsync -avh --exclude={'*.log','dir-x','dir-y'} /home/my-project/ /mnt/d/my-project
rsync -avh --exclude-from='exclude.txt' /home/my-project/ /mnt/d/my-project
```

Where `exclude.txt` contains list of files and directories:
```bash title="exclude.txt"
.gitignore
.git
*.log
test*
```

Commonly used flags:

Flags | Description
----- | -----------
-v    | verbose
-r    | copies data recursively, doesn’t preserve timestamps and permission
-a    | archive mode, copies recursively and preserves ownerships and timestamps
-z    | compress data while transferring
-h    | human-readable
-e    | with protocol option.

If you are looking for more advanced and secure backup options, check out
https://borgbackup.readthedocs.io/en/stable/

## Processes
See processes in the current shell
```bash
ps
```

Show all processes:
```bash
ps -ef
```

Show all processes of all users
```bash
ps -aux
ps -aux | head -10
```
You can exit by typing `q`. You can press `k` and provide PID to kill a process.

You can kill a process by:
```bash
kill -SIGKILL <pid>
```

On the command line, you can terminate a command by `CTRL+C` or suspend by
`CTRL+Z`.

View process tree:
```bash
ps tree
```

Check load balance:
```bash
top
```

## tmux
tmux has many use case scenarios, one them is running something on a remote
machine without interruption. Say you are working on a remote machine over ssh,
and you need to update your remote machine. The updating process can be
catastrophic if it is interrupted, it can leave your system on a broken state.
Therefore it is a good idea to run the process using tmux so that even if you
are disconnected from the ssh session, the process can continue.

Installing tmux:
```bash
sudo apt install tmux
```

Launch a tmux window:
```bash
tmux
```

Run a process/command there. Now we can detach from tmux using keyboard
shortcut: first send the tmux bind-key `[control] + [b]` followed by `[d]`.
Now we get back our main terminal. We can create multiple tmux sessions. We can
list tmux sessions by:
```bash
tmux ls
```

We can attach particular session:
```bash
tmux attach -c 2
```

Or attach the last working session or if there is only one session:
```bash
tmux attach
```

When we are in one of tmux window, we can use `[control] + [b]` followed by
`[w]` for tmux window list.

We can exit the tmux session by typing `exit` on the tmux window. Or when we are
in main terminal:
```bash
tmux kill-session -t 0
```

## Terminal shortcuts
Shortcuts | Description
--------- | -----------
CTRL + A  | Move to the beginning of a line
CTRL + E  | Move to the end of a line
CTRL + K  | Kill/delete/cut from the cursor to the end
CTRL + U  | Delete from the cursor to the start of the line
Ctrl + X + Backspace | removes all the text from the cursor to the beginning
CTRL + W  | Delete from cursor to the start of word
CTRL + Y  | Undo last deletion
ALT + Left arrow | Move left one word
ALT + Right arrow | Move right one word
CTRL + L  | Clear screen
CTRL + C  | Terminate the foreground process
CTRL + Z  | Suspend the foreground process
CTRL + D  | Exit shell.

## HereDoc
```bash
[COMMAND] <<[-] 'DELIMITER'
  Line 1
  Line 2
  ...
DELIMITER
```

- `COMMAND` is optional. Works for any command that accepts redirection.
- `<<` is the redirection operator for forwarding a HereDoc to the `COMMAND`.
- `-` is an optional parameter for tab suppression. Tab (not spaces) can be used
for indentation.
- `DELIMITER` in the first line defines a HereDoc delimiter token. `END`, `EOT`,
and `EOF` are most common, but any multi-character word that won't appear in the
body works. Omit single quotes on the first line to allow command and variable
expansion. The `DELIMITER` in the last line indicates the end of a HereDoc. Use
the same word from the first line without the leading whitespaces.


## Base64

Encode a string into base64 string:

```bash
echo "TestString" | base64
```

In the above method string would contain newline char in the end. We can remove
the trailing newline char by:

```bash
echo -n "TestString" | base64
printf "TestString" | base64
```

If we have `null` chars in the input string, we can use `\0`:

```bash
printf "FirstPart\0SecondPart" | base64
echo -ne "FirstPart\0SecondPart" | base64
```

Decoding base64 output:

```bash
echo "VGVzdFN0cmluZw==" | base64 -d
```

The base64 output length is not multiples of 4, it is padded with `=` to make it
so. If you need to remove the padding chars:

```bash
printf "TestString" | base64 | sed 's/=//'
```

If you need to send output as a string query parameter, it is often encoded into
base64url format, where `+` is replaced by `-`, and `/` by `_`, because `+` and
`/` have special meanings in url.

```bash
printf "<<???>>" | base64 | sed 's/=//' | sed 's/+/-/' | sed 's/\//_/'
```

Sometimes we need to url-encode. We can use [jq](https://jqlang.github.io/jq/):

```bash
printf "TestString" | base64 | jq -sRr @uri
```

[jq](https://jqlang.github.io/jq/) can be installed using linux package mangers
or homebrew:

```bash
brew install jq

# debian/ubuntu
apt install jq

# fedora/rhel
dnf install jq
```


## Learn more
- [Art of commandline](https://github.com/jlevy/the-art-of-command-line)
- [IBM Linux tutorials](https://developer.ibm.com/technologies/linux/series/learn-linux-101/)
- *The Linux command line: a complete introduction* by *William E. Shotts*.
- [Managing SSH keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
