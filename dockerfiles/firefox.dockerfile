# Build command  : docker build -t firefox -f firefox.dockerfile .
# Run (macOS)    : docker run --rm -ti -e DISPLAY=docker.for.mac.host.internal:0 firefox
# Windows        : docker run --rm -ti -e DISPLAY=host.docker.internal:0 firefox
# Linux          : docker run --rm -ti --net=host -e DISPLAY=:0 firefox

FROM ubuntu:focal
RUN apt update && apt upgrade -y
RUN DEBIAN_FRONTEND=noninteractive apt install -y --no-install-recommends xorg \
    openbox mesa-utils libgl1-mesa-glx firefox
WORKDIR /home
# CMD firefox
