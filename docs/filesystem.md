---
title: Linux filesystem
sidebar_label: Filesystem
---
The information about your system partitions can be found in the file
`/proc/partition`:
```bash
$ cat /proc/partitions

major minor  #blocks  name

   7        0      56264 loop0
   7        1      63580 loop1
   7        2     246576 loop2
   7        3      50980 loop3
   7        4      27740 loop4
   7        5      30992 loop5
   7        6      56648 loop6
   7        7      50980 loop7
  11        0    1048575 sr0
   8        0   41943040 sda
   8        1     524288 sda1
   8        2          1 sda2
   8        5   41415680 sda5
   7        8     223124 loop8
```

There are multiple ways to know about the partitions. Another command is:
```bash
sudo fdisk -l
```

Another is:
```bash
$ lsblk
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
loop0    7:0    0    55M  1 loop /snap/core18/1705
loop1    7:1    0  55.3M  1 loop /snap/core18/1885
loop2    7:2    0 240.8M  1 loop /snap/gnome-3-34-1804/24
loop3    7:3    0 217.9M  1 loop /snap/gnome-3-34-1804/60
loop4    7:4    0  62.1M  1 loop /snap/gtk-common-themes/1506
loop5    7:5    0  49.8M  1 loop /snap/snap-store/433
loop6    7:6    0  49.8M  1 loop /snap/snap-store/467
loop7    7:7    0  27.1M  1 loop /snap/snapd/7264
loop8    7:8    0  30.3M  1 loop /snap/snapd/9279
sda      8:0    0    40G  0 disk
├─sda1   8:1    0   512M  0 part /boot/efi
├─sda2   8:2    0     1K  0 part
└─sda5   8:5    0  39.5G  0 part /
sr0     11:0    1  1024M  0 rom
```

Check the partitions that are mounted on boot:
```bash
cat /etc/fstab
```

Amount of free space available:
```bash
df
df -h
```

Check filesystem types:
```bash
df -Th
```

Formatting a partition:
```bash
sudo mkfs -t ext4 /dev/sdb3
```

Mounting a filesystem: it maps the filesystem with a directory.
```bash
sudo mount /dev/sdb3 /newdrive
```

Mounting Windows network drive in WSL:
```bash
sudo mkdir /mnt/k
sudo mount -t drvfs K: /mnt/k
```

CPU info:
```bash
cat /proc/cpuinfo
```

RAM info:
```bash
free
```

### dd : duplicate disc using Ubuntu bootable USB
You may need to set legacy boot option in the BIOS. By making a clone of a full
disc of Windows 10 machine, I was able to boot from the new drive:
```bash
sudo dd if=/dev/sda of=/dev/sdb conv=sync,noerror bs=1M status=progress

# the above option will copy byte by byte, you will need disc with same
# or higher capacity.

# the below option to compress the data
sudo dd if=/dev/sda bs=1M conv=sync,noerror | gzip -c > /path/to/backup.img.gz
gunzip -c /path/to/backup.img.gz | sudo dd of=/dev/sdb status=progress bs=1M
```

Note that optimal block size may not be 1MB for all drives, and should be found
out by running tests/ benchmarks.

### Disk partitioning

Check overview of current partition table:
```bash
sudo fdisk -l
```

We will work on a partition that is not in the boot device. We can specifically
check the a certain device:
```bash
sudo fdisk -l /dev/sdb
```

We will partition the device `/dev/sdb`:
```bash
sudo fdisk /dev/sdb
```

- To get a list of all available commands enter `m`
- Use the `p` command to list the current partition scheme
- Enter `g` to create a new empty GPT partition table
- Enter `n` command to create a new partition. We will choose default values for
partition number and first sector. Here we want to create a partition size of
20GB, so we will enter `+20G` as the last sector input.
- Save the changes by running the `w` command.

### Resources
- <https://linuxize.com/post/fdisk-command-in-linux/>
