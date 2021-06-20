---
title: NextCloud
---

Installing Nextcloud server using snap:
```bash
sudo snap install nextcloud
```

Now you can head over to the browser and visit your ip address. There you can
create admin account, and user accounts.

Stop nextcloud server:
```bash
sudo snap stop nextcloud
```

Check status of snap services:
```bash
snap services
```

Disable nextcloud service:
```bash
sudo snap stop --disable nextcloud.apache
```

Uninstalling:
```bash
sudo snap remove nextcloud
```

Uninstalling apps in Ubuntu
```bash
sudo apt remove <package-name>
sudo apt autoremove
```
