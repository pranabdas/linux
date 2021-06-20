---
title: Firewall
---

We will setup **firewalld**. Make sure that another firewall tool is not running
or installed in the system that might conflict with **firewalld**. In some older
systems, you might have **iptables** installed. You can check if the service is
running:
```bash
systemctl status iptables
```

If it is there, stop the service in case it is running:
```bash
systemctl stop iptables
```

If it is not running, next check if the program is installed:
```bash
cd /sbin/
ls -Fla iptables
```

Mask the program:
```bash
systemctl mask iptables
```

Install *firewalld*:
```bash
sudo apt install firewalld
sudo apt install firewall-config
```

Check the available zones:
```bash
firewall-cmd --get-zones
```

Get default zone:
```bash
firewall-cmd --get-default-zone
```

More detailed list:
```bash
firewall-cmd --list-all-zones
```

Services available via firewalld:
```bash
firewall-cmd --get-services
```

Change default zone:
```bash
firewall-cmd --set-default-zone=work
```

Get active zones:
```bash
firewall-cmd --get-active-zones
```

Add a service to your default zone:
```bash
firewall-cmd --add-service=mdns
```

List the zone:
```bash
firewall-cmd --list-all
```

Allow *http* and *https* in a apache server:
```bash
firewall-cmd --add-service=http
firewall-cmd --add-service=https
```

Allow mail server:
```bash
firewall-cmd --add-service=smtp
firewall-cmd --add-service=smtps
firewall-cmd --add-service=smtp-submission
firewall-cmd --add-service=imap
firewall-cmd --add-service=imaps
firewall-cmd --add-service=pop3
firewall-cmd --add-service=pop3s
```

Removing services:
```bash
firewall-cmd --remove-service=smtp
firewall-cmd --remove-service=imap
firewall-cmd --remove-service=pop3
```

Emergency panic mode (stop all network connections):
```bash
firewall-cmd --panic-on
firewall-cmd --query-panic
firewall-cmd --panic-off
```
