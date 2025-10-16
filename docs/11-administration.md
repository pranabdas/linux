---
title: Linux administration
---

## User administration

For below examples, I am logged into a RHEL compatible linux distribution.

### Create user

In order to add new user we need to switch to `root` account. We can do that by:

```bash
su -
# su stands for switch user
# in some systems
sudo su -
```

Once we are logged into the system as `root`, we can add new user:

```bash
useradd <username>
useradd linuxfan
```

We can check the info of the newly added user by:

```bash
id <username>
```

And it will print the following:

```bash
uid=1001(linuxfan) gid=1001(linuxfan) groups=1001(linuxfan)
```

We see that along with the newly created user, a group with the same name is
also created, and the new user is added to that group by default.

We can also look for the user information in the `/etc/passwd` file:

```bash
cat /etc/passwd | grep linuxfan
```

That prints out:

```bash
linuxfan:x:1001:1001::/home/linuxfan:/bin/bash
```

We can provide additional options to `useradd`. Please see help for more
details.

```bash
[root@host:~]# useradd --help
Usage: useradd [options] LOGIN
       useradd -D
       useradd -D [options]

Options:
      --badname                 do not check for bad names
  -b, --base-dir BASE_DIR       base directory for the home directory of the
                                new account
      --btrfs-subvolume-home    use BTRFS subvolume for home directory
  -c, --comment COMMENT         GECOS field of the new account
  -d, --home-dir HOME_DIR       home directory of the new account
  -D, --defaults                print or change default useradd configuration
  -e, --expiredate EXPIRE_DATE  expiration date of the new account
  -f, --inactive INACTIVE       password inactivity period of the new account
  -g, --gid GROUP               name or ID of the primary group of the new
                                account
  -G, --groups GROUPS           list of supplementary groups of the new
                                account
  -h, --help                    display this help message and exit
  -k, --skel SKEL_DIR           use this alternative skeleton directory
  -K, --key KEY=VALUE           override /etc/login.defs defaults
  -l, --no-log-init             do not add the user to the lastlog and
                                faillog databases
  -m, --create-home             create the user's home directory
  -M, --no-create-home          do not create the user's home directory
  -N, --no-user-group           do not create a group with the same name as
                                the user
  -o, --non-unique              allow to create users with duplicate
                                (non-unique) UID
  -p, --password PASSWORD       encrypted password of the new account
  -r, --system                  create a system account
  -R, --root CHROOT_DIR         directory to chroot into
  -P, --prefix PREFIX_DIR       prefix directory where are located the /etc/* files
  -s, --shell SHELL             login shell of the new account
  -u, --uid UID                 user ID of the new account
  -U, --user-group              create a group with the same name as the user
  -Z, --selinux-user SEUSER     use a specific SEUSER for the SELinux user mapping
```

Assign password for a user:

```bash
passwd <username>
```

Encrypted password info is saved in `/etc/shadow`.

```bash
cat /etc/shadow | grep linuxfan

linuxfan:$6$YwIUOQqwKk6HwgU9$M.KOwYx9D.21U3kNREw79ToghJXx2tzVIGnjwr/lzR8YDveAeEF9U56fAU6mhVDM1W.Zt6TMzvgh.2z5OkOrU.:19845:0:99999:7:::
```

Change username:

```bash
usermod -l <new-username> <current-username>
usermod -l codingfan linuxfan
```

Now if we look for information of `codingfan` in `/ect/passwd`:

```bash
[root@host:~]# cat /etc/passwd | grep codingfan
codingfan:x:1001:1001::/home/linuxfan:/bin/bash
```

Notice that the home directory name is still the previous one.

Delete a user:

```bash
userdel <username>
```

Lock a user:

```bash
usermod -L <username>
```

Unlock a user:

```bash
usermod -U <username>
```

### Create group

```bash
groupadd projectX
```

We can see group list in

```bash
[root@host:~]# cat /etc/group
[snipped]
linuxfan:x:1001:
projectX:x:1002:
```

Add a user to a new group.

```bash
usermod -G projectX linuxfan

[root@host:~]# cat /etc/group | grep projectX
projectX:x:1002:linuxfan

[root@host:~]# id linuxfan
uid=1001(linuxfan) gid=1001(linuxfan) groups=1001(linuxfan),1002(projectX)
```

Delete a group:

```bash
groupdel <groupname>
```

### System info

```bash
uname -a
```

```bash
arch
```

```bash
hostname
```

```bash
dmidecode
```

```bash
cat /etc/os-release
```

## System monitoring

```bash
who
```

```bash
w
```

```bash
last
```

```bash
tail -f /var/log/secure
```

```bash
systemctl list-units --type=service

systemctl status sshd
systemctl stop sshd
systemctl start sshd
```

## Resource management

```bash
top
```

Exit `top` screen by pressing `q` key in the keyboard.

```bash
free
```

```bash
df
df -h
```

```bash
du /path
du -hs /path
du -h /path | sort -nr
```

```bash
uptime
```

```bash
dmesg
dmesg | more
```

```bash
ps
```

```bash
cat /var/log/messages
```

## Networking

```bash
ping google.com
```

```bash
ifconfig

# newer replacement
ip
ip addr show
ip route show
ip link set eth0 up
```

## System update

Update the full system:
```bash
yum update

# newer dnf is replacing yum
dnf update
```

```bash
dnf list installed
dnf list installed | wc -l

dnf repoinfo

dnf search openssh
dnf install openssh

dnf list installed | grep openssl
rpm -qa | grep openssl
rpm -ql openssl

dnf remove openssh
```
