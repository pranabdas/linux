# docker build -t firefox --no-cache -f firefox.debian.dockerfile .
# docker run -e DISPLAY=docker.for.mac.host.internal:0 -ti --rm firefox bash
FROM debian:bookworm

ENV NON_ROOT_USER="firefox"
ENV NON_ROOT_USER_GROUP="firefox"
ARG NON_ROOT_USER_PASSWORD="SECRET-PASSWORD"
ARG ROOT_USER_PASSWORD="SUPER-SECRET-PASSWORD"

RUN DEBIAN_FRONTEND=noninteractive apt update && apt upgrade -y && \
  apt install -y --no-install-recommends \
  gpg \
  firefox-esr \
  mesa-utils \
  openbox \
  libgl1-mesa-glx \
  vim \
  wget \
  xorg && \
  echo "root:$ROOT_USER_PASSWORD" | chpasswd && \
  rm -rf /var/lib/apt/lists/*

RUN groupadd -r $NON_ROOT_USER_GROUP -g 1000 \
  && useradd \
    --uid 1000 \
    --system \
    --gid $NON_ROOT_USER_GROUP \
    --create-home \
    --home-dir /home/$NON_ROOT_USER/ \
    --shell /bin/bash \
    --comment "non-root user" \
    $NON_ROOT_USER \
  && chmod 755 /home/$NON_ROOT_USER/ \
  && echo "$NON_ROOT_USER:$NON_ROOT_USER_PASSWORD" | chpasswd

USER $NON_ROOT_USER
