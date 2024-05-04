#!/bin/bash

export DEBIAN_FRONTEND=noninteractive
apt update
apt upgrade -y
apt install -y --no-install-recommends \
  autoconf \
  build-essential \
  bzip2 \
  environment-modules \
  gawk \
  gcc \
  git \
  make \
  perl \
  python3 \
  python3-pip \
  rpm \
  ruby \
  vim \
  wget

gem install fpm
