---
title: Storage Management
keywords: ["linux", "swap"]
---

## Swap
Instructions on how to create swap space in RHEL/Fedora systems.

Check swap memory status by using one or more of the following commands:

```bash
swapon -s
cat /proc/swaps
free -h
```

Example output in a system where there was no swap memory set:
```bash
[root@almalinux ~]# free -h
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       417Mi       7.3Gi        16Mi       227Mi       7.3Gi
Swap:             0B          0B          0B
```

Create an empty file of size 4GB for swap:
```bash
dd if=/dev/zero of=/swapfile bs=1024 count=4194304
```

Set file permissions:
```bash
chmod 0600 /swapfile
```

Make it swap:
```bash
mkswap /swapfile
```

Edit the `/etc/fstab` file with the following entries to enable the swap file at
boot time and make it permanent:
```bash
/swapfile none swap defaults 0 0
```

Optionally, adjust the kernel parameters by adding following to
`/etc/sysctl.conf`:
```bash
vm.swappiness=10
```

Restart daemons:
```bash
systemctl daemon-reload
```

Activate the swap file immediately:
```bash
swapon /swapfile
```

Now use the first set of commands to check the status of swap memory.
```bash
[root@almalinux ~]# free -h
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       405Mi       3.3Gi        16Mi       4.2Gi       7.3Gi
Swap:          4.0Gi          0B       4.0Gi
```

## References

- [Getting started with swap | Red Hat Product Documentation](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/managing_storage_devices/getting-started-with-swap_managing-storage-devices#creating-a-swap-file_getting-started-with-swap)
