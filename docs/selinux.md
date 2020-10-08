### Security Enhanced Linux

I am testing SELinux on Red Hat Enterprise Linux 8. It works similarly on Fedora, CentOS, and SUSE linux. If you are on Ubuntu, you may use apparmor instead. However, you can uninstall apparmor and move into SELinux if you are already familiar. 

Check the current mode:
```
getenforce
```

We can change SELinux modes using 
```
setenforce
```

For example, you may choose `setenforce 0` for permissive mode while troubleshooting. Never disable selinux. SELinux configurations are in the file: `/etc/selinux/config`. You can open it in a text editor and make changes. 

Look into the context using `Z` flag:
```
ls -lZ
```
There are three different types of context: users, roles and type. Like every files and directories, process has context too. 
```
ps -auxZ
```
The unconfined processes are those that selinux does not monitor. 

**Resources:**
- [Red Hat SELinux documentation](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/using_selinux/index){:target="_blank"}
