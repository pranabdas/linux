#!/bin/bash
apt update && apt upgrade -y
DEBIAN_FRONTEND=noninteractive apt install -y wget libc6 libglapi-mesa \
    libxdamage1 libxfixes3 libxcb-glx0 libxcb-dri2-0 libxcb-dri3-0 \
    libxcb-present0 libxcb-sync1 libxshmfence1 libxxf86vm1 libglib2.0-0
cd ~ && wget -O - "https://www.dropbox.com/download?plat=lnx.x86_64" | tar xzf -
~/.dropbox-dist/dropboxd

# docker run -d --name dropbox --net=host -e UID=1000 -e GID=1000 -v ${PWD}:/dbox/Dropbox --restart=unless-stopped bnutz/min-ubuntu-dropbox
