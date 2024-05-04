#!/bin/bash
# login as root, and run: bash mellanox.sh
# download mellanox driver from https://network.nvidia.com/products/infiniband-drivers/linux/mlnx_ofed/
# tested on AlmaLinux 9.3

yum install -y \
  autoconf \
  automake \
  cpio \
  ethtool \
  fuse-libs \
  gcc-gfortran \
  kernel \
  kernel-devel \
  kernel-modules-extra \
  kernel-rpm-macros \
  libnl3 \
  libtool \
  libusbx \
  lsof \
  numactl-libs \
  patch \
  pciutils \
  python3-devel \
  rpm-build \
  tcsh \
  tk

KERNEL=( $(rpm -q kernel | sed 's/kernel\-//g') )
KERNEL=${KERNEL[-1]}

tar -xf MLNX_OFED_LINUX-5.8-4.1.5.0-rhel9.3-x86_64.tgz
./MLNX_OFED_LINUX-5.8-4.1.5.0-rhel9.3-x86_64/mlnxofedinstall --kernel $KERNEL --kernel-sources /usr/src/kernels/${KERNEL} --add-kernel-support --skip-repo
