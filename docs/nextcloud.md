### File hosting using NextCloud


Installing Nextcloud server using snap:
```
sudo snap install nextcloud
```

Now you can head over to the browser and visit your ip address. There you can create admin account, and user accounts. 

Stop nextcloud server:
```
sudo snap stop nextcloud
```

Check status of snap services:
```
snap services
```

Disable nextcloud service:
```
sudo snap stop --disable nextcloud.apache
```

Uninstalling:
```
sudo snap remove nextcloud
```

Uninstalling apps in Ubuntu 
```
sudo apt remove <package-name>
sudo apt autoremove
```
