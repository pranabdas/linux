#!/bin/bash

dnf up -y
dnf install -y \
  autoconf \
  bzip2 \
  environment-modules \
  gawk \
  gcc \
  gcc-c++ \
  git \
  glibc-devel \
  make \
  perl \
  python3 \
  python3-pip \
  ruby \
  vim \
  wget

gem install fpm
