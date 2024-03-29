---
title: Linux network setup
sidebar_label: Network setup
---

Show network devices:
```bash
ip addr
```

More details about a specific network adapter:
```bash
ethtool enp0s3
```

About network names: en → ethernet (could be wl → wireless), p0 → bus PCI-0
(could be u → USB), s3 → slot 3.

Check if NetworkManager is running in your system:
```bash
sudo systemctl status NetworkManager
```

If it is not active, start NetworkManager:
```bash
sudo systemctl start NetworkManager
```

If NetworkManager is not installed in your system:
```bash
sudo dnf install NetworkManager
sudo apt install network-manager
```

Check the device status:
```bash
nmcli device
```

Network setting files in Centos: `/ect/sysconfig/network-scripts`.
Network setting files in Ubuntu: `/ect/NetworkManager/NetworkManager.conf`.

If you make any changes, you need to restart the NetworkManager service to take
effect.

Details about a network connection:
```bash
nmcli connection show Wired\ Connection\ 1
```

If there is no connection name for a network device, you can try the device name
instead.

Edit a connection profile:
```bash
nmcli connection edit Wired\ Connection\ 1
```

Print details about a specific section:
```bash
nmcli> print ipv4
```

Make changes:
```bash
nmcli> set ipv4.method auto
nmcli> save
nmcli> quit
```

We can restart the connection to reflect the changes:
```bash
nmcli connection down Wired\ Connection\ 1
nmcli connection up Wired\ Connection\ 1
```
