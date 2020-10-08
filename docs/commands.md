### Basic Linux/UNIX commands 

- Print working directory:
```
pwd
```

- List current directory:
```
ls
```

- List a directory with details and hidden files:
```
ls -la
```

- You can list not only current directory but another directory:
```
ls sub_directory
```

- Your current directory is represented by ```.```
```
ls .
```

- Parent directory is represented by ```..```
```
cd ..
```

There is a nice utility **tree** which displays the tree structure of a directory:
```
tree 
tree -aCd -L 2 /
```

- Create new directory:
```
mkdir new_dir
```

- Change directory:
```
cd dir_name
```

- Previous working directory:
```
cd -
```

- Copy ```file_original``` to ```file_final```:
```
cp file_original file_final
```

- Move file:
```
mv file_source file_destination
```

- Copy a directory along with the contents inside recursively:
```
cp -r source_path destination_path
```

- Sometimes we need to copy files along with permissions, timestamps, and other attributes, use the `-p` flag:
```
cp -rp source_path destination_path
```

- Move directory:
```
mv dir_source dir_destination
```

- Disk usage, find folder size: 
```
du -hs 
du -hs path/
``` 

- Display string/variable:
```
echo string
echo $varialble
echo string > file
echo string > existing-file
```

- Print (concatenate the contents to the standard output) the contents of a file: 
```
cat file.txt 
``` 

- Print only the head (default first 5 lines) of a file: 
```
head file.txt 
``` 

- You can print particular number of lines: 
``` 
head -3 file.txt 
``` 

- Print as much as fits in the shell window: 
```
more file.txt 
``` 

- See the end of a file: 
``` 
tail file.txt 
tail -10 file.txt 
``` 

- Print the contents to a file: 
``` 
cat file.txt > file-copy.txt 
``` 

- This seems same as copy. But you can use this to combine multiple files: 
``` 
cat file.txt, file2.txt > file-copy.txt 
``` 

- Instead of overwriting file, you can append: 
``` 
cat file3.txt >> file-copy.txt 
```

- You can use *paste* to combine files as well:
```
paste file* > file-all.txt 
```

- Look for lines containing certain word. This will list the lines that contain the word *file* in the *cat* manual: 
``` 
man cat | grep file 
``` 

- Working with large files:
```
less file.txt
man top | less
cat file.txt | less
```

- Create symbolic links:
```
ln -s /path/to/file.txt /path/to/link.txt
```

- Bash expansion: If you need to create/copy/move/delete a series of files:
```
touch file_{01..05}.txt
```
It will create file_01.txt, file_02.txt and so on. 

- Previous command: 
```
apt update
sudo !!
```

- Check IP address: 
```
ip addr
```

- Connecting to a ssh server: 
```
ssh <username>@<xxx.xx.xx.xxx> -p <yyyy>
```
where xxx.xx.xx.xxx is the IP address and yyyy is the port. 

- You can disconnect from the remote ssh by pressing [control] + [d] or typing `exit` on the terminal. 

- Running ssh server on Windows Subsystem for Linux. Open the following file: 
```
sudo vi /etc/ssh/sshd_config
``` 
- Change the port to anything above 1000 (default 22 might conflict with host Windows system). 
- Change `PasswordAuthentication yes` 
- Add `AllowUsers <your username>` 

- Save and exit. Following commands should be self explanatory: 
```
service ssh status 
sudo service ssh start 
sudo service ssh stop 
sudo service ssh --full-restart 
``` 

- Port forwarding. Let's say you are working on a python jupyter notebook on the remote server via ssh and you want to see the notebook in your local browser. You can forward the specific port to your local machine: 
```
ssh -L 8888:127.0.0.1:8888 pranab@xxx.xx.x.xxx -p yyyy -i ~/.ssh/id_rsa 
```
Now you can see the notebook in your client machine. 

- Adding SSH key-pair to connect to a server. Generate the key-pair in your client computer:
```
ssh-keygen
```
You may leave everything default and press enter. It will generate public and private key pair inside `~/.ssh` directory. Now we need to copy the public key to the host machine. Connect to remote host using password. Create a `.ssh` directory in the remote home directory. You can print the public key in your terminal `cat id_rsa.pub` and copy it to clipboard.

```
ssh <username>@<xxx.xx.xx.xxx> -p <yyyy>
mkdir .ssh
vi .ssh/authorized_keys
```
Paste the public key, save and exit. Then open `/etc/ssh/sshd_config` with `sudo vi` and uncomment the line `PubkeyAuthentication yes`. You may choose to set `PasswordAuthentication no` if you want. Set the following permissions: 
```
sudo chmod 700 .ssh
sudo chmod 600 .ssh/authorized_keys
```

Restart the ssh service on remote host
```
sudo service ssh restart 
```

Now you can connect from your remote computer using:
```
ssh pranab@172.16.1.183 -p 2127 -i ~/.ssh/id_rsa
```

- Copying files via scp from remote to local or remote to local: 
```
scp remote_username@10.10.0.2:/remote/file.txt /local/directory
scp file.txt remote_username@10.10.0.2:/remote/directory
```

You can use `scp` to transfer files as well using ssh-keys:
```
scp -i ~/.ssh/id_rsa remote_username@10.10.0.2:/remote/file.txt /local/directory
scp -P yyyy -i ~/.ssh/id_rsa file.txt remote_username@10.10.0.2:remote/directory
```

We can secure copy a directory using `-r` flag:
```
scp -i "ssh_key.pem" -r ~/Documents/mydir user@domain.com:Downloads/mydir 
```

- Untar files: 
```
tar -zxvf file.tar.gz
``` 

If you have got a zip file to unzip. You need to install *unzip*.
```
sudo apt install unzip 
sudo dnf install unzip
```
Then: 
```
unzip filename.zip
```

- Make a script file executable: 
1. Create a file filename.sh 
2. Write down your script 
3. Make the file executable: `chmod +x filename.sh` 
4. Run the script: `./filename.sh`

- Verify the checksum 
```
md5 path/file.iso 
shasum -a 256 path/file.iso 
shasum -a 512 path/file.iso
```

#### Encrypt/decrypt using Openssl
```
openssl aes-256-cbc -a -salt -pbkdf2 -in message.txt -out message.txt.enc
openssl aes-256-cbc -d -a -salt -pbkdf2 -in message.txt.enc -out message-copy.txt
```
There are various options available in openssl. In the above, we have used AES-256 (Advanced Encryption Standard with 256 bit key length) symmetric encryption in CBC (Cipher Blocker Chaining) mode, used salt hashing, pbkdf2 (Password-Based Key Derivation Function 2) key stretching, and armor output (`-a`). Check openssl documentation for more details. 

#### File permissions

When we list a file using `ls -la` or similar, we see permissions strings. What does they mean? 
r => read
w => write 
x => execute 

and they are listed for user, group, and others. We can set the file permissions by using numeric conventions. r = 4, w = 2, and x = 1. Say we want to set rwx for user, rx for group and only x for others, we can set that by:
```
chmod 751 file.sh
```
Similarly, in symbolic notation, we can assign or add or remove permissions:
```
chmod u=rwx, g=rx, o= file.sh
chmod u+x file.sh
chmod g-x file.sh
```
We can change file permissions recursively as well:
```
chmod -R ugo-x /home/pranab
chmod -R a-x /home/pranab
```

#### Backup files using `rsync`
It can be used to mirror/copy files and folders in a local machine as well as to/from remote machines. It is a very powerful tool with lots of options and customizations. Here are few common ones: 

- Copy/Sync files locally:
```
rsync -avh backup.tar /tmp/backups/
```

- Copy folders locally:
```
rsync -avzh /root/rpmpkgs /tmp/backups/
```

- Copy files over ssh:
```
rsync -avzhe "ssh -i ~/.ssh/id_rsa -p yyyy" pranab@xxx.xx.x.xxx:file.txt ~/Desktop/
rsync -avzhe "ssh -i ~/.ssh/id_rsa -p yyyy" ~/Desktop/file.txt pranab@xxx.xx.x.xxx:docs
```

- By default rsync won't remove deleted files from the destination. If you want to delete:
```
rsync -avzh --delete /home/file.txt /usr/desktop/
```

- Commonly used flags:
-v : verbose
-r : copies data recursively (but don’t preserve timestamps and permission while transferring data
-a : archive mode, archive mode allows copying files recursively and it also preserves symbolic links, file permissions, user & group ownerships and timestamps
-z : compress file data
-h : human-readable
-e : protocol option. 

If you are looking for more advanced and secure backup options, check out [https://borgbackup.readthedocs.io/en/stable/](https://borgbackup.readthedocs.io/en/stable/){:target="_blank"}

#### System process:
See processes in the current shell
```
ps
```

Show all processes:
```
ps -ef
```

Show all processes of all users
```
ps -aux
ps -aux | head -10
```
You can exit by typing `q`. You can press `k` and provide PID to kill a process.

You can kill a process by:
```
kill -SIGKILL <pid>
```

On the command line, you can terminate a command by `CTRL+C` or suspend by `CTRL+Z`. 

View process tree:
```
ps tree
```

Check load balance:
```
top
``` 

#### Using tmux 
tmux has many use case scenarios, one them is running something on a remote machine without interruption. Say you are working on a remote machine over ssh, and you need to update your remote machine. The updating process can be catastrophic if it is interrupted, it can leave your system on a broken state. Therefore it is a good idea to run the process using tmux so that even if you are disconnected from the ssh session, the process can continue. 

Installing tmux: 
```
sudo apt install tmux
```

Launch a tmux window:
```
tmux
```

Run a process/command there. Now we can detach from tmux using keyboard shortcut: first send the tmux bind-key `[control] + [b]` followed by `[d]`. Now we get back our main terminal. We can create multiple tmux sessions. We can list tmux sessions by: 
```
tmux ls
```

We can attach particular session:
```
tmux attach -c 2
```

Or attach the last working session or if there is only one session:
```
tmux attach
```

When we are in one of tmux window, we can use `[control] + [b]` followed by `[w]` for tmux window list. 

We can exit the tmux session by typing `exit` on the tmux window. Or when we are in main terminal: 
```
tmux kill-session -t 0
```

#### Keyboard shortcuts 
These works on macOS:
- CTRL-A: Move to the beginning of a line
- CTRL-E: Move to the end of a line
- ALT-LEFT: Move left one word
- ALT-RIGHT: Move right one word
- CTRL-K: kill/delete/cut from the cursor to the end
- Ctrl-X + Backspace: removes all the text from the cursor to the beginning
- CTRL-L: Clear screen
- CTRL-C: Terminate the foreground process
- CTRL-Z: Suspend the foreground process
- CTRL-D: Exit shell.
