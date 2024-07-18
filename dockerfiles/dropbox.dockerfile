# Build command  : docker build -t dropbox -f dropbox.dockerfile .
# Run docker     : docker run -ti --rm --mac-address $(printf '02:42:ac:%02X:%02X:%02X' $[RANDOM%256] $[RANDOM%256] $[RANDOM%256]) dropbox bash
# Launch dropbox : ~/.dropbox-dist/dropboxd

FROM ubuntu:noble

RUN apt update

RUN DEBIAN_FRONTEND=noninteractive apt install -y wget libc6 libglapi-mesa \
    libxdamage1 libxfixes3 libxcb-glx0 libxcb-dri2-0 libxcb-dri3-0 \
    libxcb-present0 libxcb-sync1 libxshmfence1 libxxf86vm1 libglib2.0-0

RUN cd ~ && wget -O - "https://www.dropbox.com/download?plat=lnx.x86_64" | tar xzf -

WORKDIR /home
