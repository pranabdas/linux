### Linux Firewall

We will setup **firewalld**. Make sure that another firewall tool is not running or installed in the system that might conflict with **firewalld**. In some older systems, you might have **iptables** installed. You can check if the service is running: 
```
systemctl status iptables
```
If it is there, stop the service in case it is running:
```
systemctl stop iptables
```

If it is not running, next check if the program is installed: 
```
cd /sbin/
ls -Fla iptables
```

Mask the program: 
```
systemctl mask iptables
```

Install *firewalld*:
```
sudo apt install firewalld
sudo apt install firewall-config
```

Check the available zones:
```
firewall-cmd --get-zones
```

Get default zone:
```
firewall-cmd --get-default-zone
```

More detailed list:
```
firewall-cmd --list-all-zones
```

Services available via firewalld:
```
firewall-cmd --get-services
```

Change default zone:
```
firewall-cmd --set-default-zone=work
```

Get active zones:
```
firewall-cmd --get-active-zones
```

Add a service to your default zone:
```
firewall-cmd --add-service=mdns
```

List the zone:
```
firewall-cmd --list-all
```

Allow *http* and *https* in a apache server:
```
firewall-cmd --add-service=http
firewall-cmd --add-service=https
```

Allow mail server:
```
firewall-cmd --add-service=smtp
firewall-cmd --add-service=smtps
firewall-cmd --add-service=smtp-submission
firewall-cmd --add-service=imap
firewall-cmd --add-service=imaps
firewall-cmd --add-service=pop3
firewall-cmd --add-service=pop3s
```

Removing services:
```
firewall-cmd --remove-service=smtp
firewall-cmd --remove-service=imap
firewall-cmd --remove-service=pop3
```

Emergency panic mode (stop all network connections):
```
firewall-cmd --panic-on
firewall-cmd --query-panic
firewall-cmd --panic-off
```
