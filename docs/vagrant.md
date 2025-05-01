---
title: Vagrant
---

## Vagrant commands

Typing vagrant from the command line will display a list of all available
commands.

Be sure that you are in the same directory as the `Vagrantfile` when running
these commands!

### Creating a VM
Command                  | Description
------------------------ | -----------
`vagrant init`           | Initialize Vagrant with a `Vagrantfile` and `./.vagrant` directory, using no specified base image. Before you can do vagrant up, you'll need to specify a base image in the `Vagrantfile`.
`vagrant init <boxpath>` | Initialize Vagrant with a specific box. To find a box, go to the [public Vagrant box catalog](https://app.vagrantup.com/boxes/search). When you find one you like, just replace it's name with boxpath. For example, `vagrant init almalinux/9`.


### Starting a VM
Command                      | Description
---------------------------- | -----------
`vagrant up`                 | starts vagrant environment (also provisions only on the FIRST vagrant up)
`vagrant resume`             | resume a suspended machine (vagrant up works just fine for this as well)
`vagrant provision`          | forces reprovisioning of the vagrant machine
`vagrant reload`             | restarts vagrant machine, loads new Vagrantfile configuration
`vagrant reload --provision` | restart the virtual machine and force


### Getting into a VM
Command                 | Description
----------------------- | -----------
`vagrant ssh`           | connects to machine via SSH
`vagrant ssh <boxname>` | If you give your box a name in your Vagrantfile, you can ssh into it with boxname. Works from any directory.


### Stopping a VM
Command           | Description
----------------- | -----------
`vagrant halt`    | stops the vagrant machine
`vagrant suspend` | suspends a virtual machine (remembers state)

### Cleaning Up a VM
Command              | Description
-------------------- | -----------
`vagrant destroy`    | stops and deletes all traces of the vagrant machine
`vagrant destroy -f` | same as above, without confirmation

### Boxes
Command                        | Description
------------------------------ | -----------
`vagrant box list`             | see a list of all installed boxes on your computer
`vagrant box add <name> <url>` | download a box image to your computer
`vagrant box outdated`         | check for updates vagrant box update
`vagrant box remove <name>`    | deletes a box from the machine
`vagrant package`              | packages a running virtualbox env in a reusable box

### Tips
Command                                       | Description
--------------------------------------------- | -----------
`vagrant -v`                                  | get the vagrant version
`vagrant status`                              | outputs status of the vagrant machine
`vagrant global-status`                       | outputs status of all vagrant machines
`vagrant global-status --prune`               | same as above, but prunes invalid entries
`vagrant provision --debug`                   | use the debug flag to increase the verbosity of the output
`vagrant push`                                | yes, vagrant can be configured to [deploy code](http://docs.vagrantup.com/v2/push/index.html)!
`vagrant up --provision \| tee provision.log` | Runs `vagrant up`, forces provisioning and logs all output to a file.

After destroying and cleaning up a vagrant project, you may need to manually
cleanup:
```bash
rm -rf ~/.vagrant.d
```

## How to resize (expand) Vagrant/VirtualBox disk size?

Install `vagrant-disksize` plugin and set disk size:
```bash title="Vagrantfile"
Vagrant.configure(2) do |config|
  config.vagrant.plugins = {
      "vagrant-disksize" => {"version" => "0.1.3"},
  }

  config.disksize.size = "40GB"
  ...
end
```

Bring up the vagrant box:
```bash
vagrant up <boxname>
```

SSH to the box:
```bash
vagrant ssh <boxname>
```

List storage volumes:
```bash
[root@master-vagrant-cluster-001 ~]# lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINTS
loop0 7:0 0 40G 0 loop /export
loop1 7:1 0 40G 0 loop /cluster-001-share
loop2 7:2 0 40G 0 loop /backup
sda 8:0 0 40G 0 disk
├─sda1 8:1 0 1M 0 part
├─sda2 8:2 0 200M 0 part /boot/efi
├─sda3 8:3 0 1G 0 part /boot
└─sda4 8:4 0 18.3G 0 part /
```
```bash
[root@master-vagrant-cluster-001 ~]# parted /dev/sda print free
Warning: Not all of the space available to /dev/sda appears to be used, you can fix the GPT to
use all of the space (an extra 42926080 blocks) or continue with the current setting?
Fix/Ignore? Fix
Model: ATA VBOX HARDDISK (scsi)
Disk /dev/sda: 42.9GB
Sector size (logical/physical): 512B/512B
Partition Table: gpt
Disk Flags:

Number Start End Size File system Name Flags
17.4kB 1049kB 1031kB Free Space
1 1049kB 2097kB 1049kB biosboot bios_grub
2 2097kB 212MB 210MB fat16 EFI System Partition boot, esp
3 212MB 1286MB 1074MB xfs boot
4 1286MB 21.0GB 19.7GB xfs root
21.0GB 42.9GB 22.0GB Free Space
```
```bash
[root@master-vagrant-cluster-001 ~]# parted /dev/sda resizepart 4 100%
Warning: Partition /dev/sda4 is being used. Are you sure you want to continue?
Yes/No? yes
Information: You may need to update /etc/fstab.
```
```bash
[root@master-vagrant-cluster-001 ~]# parted /dev/sda print free
Model: ATA VBOX HARDDISK (scsi)
Disk /dev/sda: 42.9GB
Sector size (logical/physical): 512B/512B
Partition Table: gpt
Disk Flags:

Number Start End Size File system Name Flags
17.4kB 1049kB 1031kB Free Space
1 1049kB 2097kB 1049kB biosboot bios_grub
2 2097kB 212MB 210MB fat16 EFI System Partition boot, esp
3 212MB 1286MB 1074MB xfs boot
4 1286MB 42.9GB 41.7GB xfs root
```
```bash
[root@master-vagrant-cluster-001 ~]# lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINTS
loop0 7:0 0 40G 0 loop /export
loop1 7:1 0 40G 0 loop /cluster-001-share
loop2 7:2 0 40G 0 loop /backup
sda 8:0 0 40G 0 disk
├─sda1 8:1 0 1M 0 part
├─sda2 8:2 0 200M 0 part /boot/efi
├─sda3 8:3 0 1G 0 part /boot
└─sda4 8:4 0 38.8G 0 part /
```

Finally,
```bash
xfs_growfs -d /
```

## Vagrant plugin error after upgrading vagrant

Error message:
```bash
Vagrant failed to initialize at a very early stage:

The plugins failed to initialize correctly. This may be due to manual
modifications made within the Vagrant home directory. Vagrant can
attempt to automatically correct this issue by running:

  vagrant plugin repair

If Vagrant was recently updated, this error may be due to incompatible
versions of dependencies. To fix this problem please remove and re-install
all plugins. Vagrant can attempt to do this automatically by running:

  vagrant plugin expunge --reinstall

Or you may want to try updating the installed plugins to their latest
versions:

  vagrant plugin update

Error message given during initialization: Unable to resolve dependency: user requested 'vagrant-cachier (= 1.2.1)'
```

To resolve this issue, rename (if you want to backup) or delete the existing
`.vagrant` directory in the project root.

## Resources
- [Vagrant command cheat sheet](https://gist.github.com/wpscholar/a49594e2e2b918f4d0c4)
- [How to automatically resize virtual box disk with vagrant](https://medium.com/@kanrangsan/how-to-automatically-resize-virtual-box-disk-with-vagrant-9f0f48aa46b3)
