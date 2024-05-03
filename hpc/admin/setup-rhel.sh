#!/bin/bash
dnf -y up
dnf -y install \
  autoconf \
  bzip2 \
  environment-modules \
  gcc \
  make \
  perl \
  python3 \
  python3-pip \
  ruby \
  vim \
  wget

gem install fpm
