---
title: Apache webserver
sidebar_label: Apache
---

Web server is a piece of software that listens for web requests (via browser,
applications, or tools like wget and curl) and responds to it. A server can be
static or dynamic. Static servers response with prebuilt files as is. While
dynamic servers builds webpages on-demand based on the user requests and
possibly acquiring data from a database.

First, we need a server software package. There are a few popular ones like
**apache** and **nginx**. Here we will try to setup an **apache** on a Ubuntu
machine. We can install from our package manager:
```bash
sudo apt-get update
sudo apt-get install apache2
```

We can start, restart or stop the server using following commands:
```bash
sudo service apache2 start
sudo service apache2 restart
sudo service apache2 stop
```

You can check the status of apache whether running:
```bash
service apache2 status
service --status-all
```

Once the server is started, you can visit your ip address: `http://xxx.xx.x.xxx`
using a browser and you will see a pre-configured webpage.

If you want to serve your own page just replace the `index.html` file located in
the `/var/www/html/` directory. Not only the `index.html`, but you can have a
full website with directory structure and css and javascript. This is basically
all you need to do setting up and running a simple website. But there is a whole
lot more about server to explore.

The main server configuration file is located at `/etc/apache2/apache2.conf`.

## Server logs
Apache has two logs: *access.log* and *error.log*. We can look them up in the
`/var/log/apache2` directory.

## Create a self-signed certificate
In general, you have a get a certificate from a certificate authority. But you
can self-sign a certificate for your own purpose.

```bash
openssl genrsa -out ca.key 2048
openssl req -new -key ca.key -out ca.csr
openssl x509 -req -days 365 -in ca.csr -signkey ca.key -out ca.crt
```

## Setting up apache in CentOS / Fedora

Installation:
```bash
sudo dnf groupinstall "Basic web server"
sudo systemctl start httpd
sudo systemctl restart httpd
sudo systemctl stop httpd
systemctl status httpd
```

Set DNS
```bash
sudo vi /etc/httpd/conf/httpd.conf
```
In Ubuntu, it is in `/etc/apache2/apache2.conf`.

Add correct ServerName and restart httpd
```bash
ServerName ec2-xx-xxx-xx-xx.ap-southeast-1.compute.amazonaws.com
```
Note that if you are using AWS or another cloud service to host your server, you
may need to add HTTP/HTTPS rule for inbound traffic in the security policy
before you can access over internet.

## Security hardening
Open `/etc/httpd/conf/httpd.conf` and consider following settings:

Disable trace route:
```bash
TraceEnable off
```

Disable server banner that will hide the apache version:
```bash
ServerSignature Off
ServerTokens Prod
```

Disable directory listing:
```bash
<Directory />
Options None
Order allow,deny
Allow from all
</Directory>
```

Limit allowed HTTP methods:
```bash
<Directory />
    <LimitExcept GET HEAD>
        deny from all
    </LimitExcept>
</Directory>
```

Disable Etag:
```bash
FileETag None
```

Protection against click-jacking:
```bash
Header set X-Frame-Options "DENY"
```

Always keep your system up to date.
