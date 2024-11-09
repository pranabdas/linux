"use strict";(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([["884"],{425:function(e,n,s){s.r(n),s.d(n,{metadata:()=>o,contentTitle:()=>l,default:()=>p,assets:()=>r,toc:()=>d,frontMatter:()=>a});var o=JSON.parse('{"id":"filesystem","title":"Linux filesystem","description":"The information about your system partitions can be found in the file","source":"@site/docs/filesystem.md","sourceDirName":".","slug":"/filesystem","permalink":"/linux/filesystem","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/linux/blob/main/docs/filesystem.md","tags":[],"version":"current","frontMatter":{"title":"Linux filesystem","sidebar_label":"Filesystem"},"sidebar":"docs","previous":{"title":"gnuplot","permalink":"/linux/gnuplot"},"next":{"title":"Network setup","permalink":"/linux/network-setup"}}'),i=s("5893"),t=s("65");let a={title:"Linux filesystem",sidebar_label:"Filesystem"},l=void 0,r={},d=[{value:"dd : duplicate disc using Ubuntu bootable USB",id:"dd--duplicate-disc-using-ubuntu-bootable-usb",level:3},{value:"Disk partitioning",id:"disk-partitioning",level:3},{value:"Resources",id:"resources",level:3}];function c(e){let n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The information about your system partitions can be found in the file\n",(0,i.jsx)(n.code,{children:"/proc/partition"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ cat /proc/partitions\n\nmajor minor  #blocks  name\n\n   7        0      56264 loop0\n   7        1      63580 loop1\n   7        2     246576 loop2\n   7        3      50980 loop3\n   7        4      27740 loop4\n   7        5      30992 loop5\n   7        6      56648 loop6\n   7        7      50980 loop7\n  11        0    1048575 sr0\n   8        0   41943040 sda\n   8        1     524288 sda1\n   8        2          1 sda2\n   8        5   41415680 sda5\n   7        8     223124 loop8\n"})}),"\n",(0,i.jsx)(n.p,{children:"There are multiple ways to know about the partitions. Another command is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo fdisk -l\n"})}),"\n",(0,i.jsx)(n.p,{children:"Another is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ lsblk\nNAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\nloop0    7:0    0    55M  1 loop /snap/core18/1705\nloop1    7:1    0  55.3M  1 loop /snap/core18/1885\nloop2    7:2    0 240.8M  1 loop /snap/gnome-3-34-1804/24\nloop3    7:3    0 217.9M  1 loop /snap/gnome-3-34-1804/60\nloop4    7:4    0  62.1M  1 loop /snap/gtk-common-themes/1506\nloop5    7:5    0  49.8M  1 loop /snap/snap-store/433\nloop6    7:6    0  49.8M  1 loop /snap/snap-store/467\nloop7    7:7    0  27.1M  1 loop /snap/snapd/7264\nloop8    7:8    0  30.3M  1 loop /snap/snapd/9279\nsda      8:0    0    40G  0 disk\n\u251C\u2500sda1   8:1    0   512M  0 part /boot/efi\n\u251C\u2500sda2   8:2    0     1K  0 part\n\u2514\u2500sda5   8:5    0  39.5G  0 part /\nsr0     11:0    1  1024M  0 rom\n"})}),"\n",(0,i.jsx)(n.p,{children:"Check the partitions that are mounted on boot:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat /etc/fstab\n"})}),"\n",(0,i.jsx)(n.p,{children:"Amount of free space available:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"df\ndf -h\n"})}),"\n",(0,i.jsx)(n.p,{children:"Check filesystem types:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"df -Th\n"})}),"\n",(0,i.jsx)(n.p,{children:"Formatting a partition:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo mkfs -t ext4 /dev/sdb3\n"})}),"\n",(0,i.jsx)(n.p,{children:"Mounting a filesystem: it maps the filesystem with a directory."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo mount /dev/sdb3 /newdrive\n"})}),"\n",(0,i.jsx)(n.p,{children:"Mounting Windows network drive in WSL:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo mkdir /mnt/k\nsudo mount -t drvfs K: /mnt/k\n"})}),"\n",(0,i.jsx)(n.p,{children:"CPU info:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat /proc/cpuinfo\n"})}),"\n",(0,i.jsx)(n.p,{children:"RAM info:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"free\n"})}),"\n",(0,i.jsx)(n.h3,{id:"dd--duplicate-disc-using-ubuntu-bootable-usb",children:"dd : duplicate disc using Ubuntu bootable USB"}),"\n",(0,i.jsx)(n.p,{children:"You may need to set legacy boot option in the BIOS. By making a clone of a full\ndisc of Windows 10 machine, I was able to boot from the new drive:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo dd if=/dev/sda of=/dev/sdb conv=sync,noerror bs=1M status=progress\n\n# the above option will copy byte by byte, you will need disc with same\n# or higher capacity.\n\n# the below option to compress the data\nsudo dd if=/dev/sda bs=1M conv=sync,noerror | gzip -c > /path/to/backup.img.gz\ngunzip -c /path/to/backup.img.gz | sudo dd of=/dev/sdb status=progress bs=1M\n"})}),"\n",(0,i.jsx)(n.p,{children:"Note that optimal block size may not be 1MB for all drives, and should be found\nout by running tests/ benchmarks."}),"\n",(0,i.jsx)(n.h3,{id:"disk-partitioning",children:"Disk partitioning"}),"\n",(0,i.jsx)(n.p,{children:"Check overview of current partition table:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo fdisk -l\n"})}),"\n",(0,i.jsx)(n.p,{children:"We will work on a partition that is not in the boot device. We can specifically\ncheck the a certain device:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo fdisk -l /dev/sdb\n"})}),"\n",(0,i.jsxs)(n.p,{children:["We will partition the device ",(0,i.jsx)(n.code,{children:"/dev/sdb"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo fdisk /dev/sdb\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["To get a list of all available commands enter ",(0,i.jsx)(n.code,{children:"m"})]}),"\n",(0,i.jsxs)(n.li,{children:["Use the ",(0,i.jsx)(n.code,{children:"p"})," command to list the current partition scheme"]}),"\n",(0,i.jsxs)(n.li,{children:["Enter ",(0,i.jsx)(n.code,{children:"g"})," to create a new empty GPT partition table"]}),"\n",(0,i.jsxs)(n.li,{children:["Enter ",(0,i.jsx)(n.code,{children:"n"})," command to create a new partition. We will choose default values for\npartition number and first sector. Here we want to create a partition size of\n20GB, so we will enter ",(0,i.jsx)(n.code,{children:"+20G"})," as the last sector input."]}),"\n",(0,i.jsxs)(n.li,{children:["Save the changes by running the ",(0,i.jsx)(n.code,{children:"w"})," command."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://linuxize.com/post/fdisk-command-in-linux/",children:"https://linuxize.com/post/fdisk-command-in-linux/"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},65:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return a}});var o=s(7294);let i={},t=o.createContext(i);function a(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);