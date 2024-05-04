#!/bin/bash

UCX_VER="1.16.0"
INSTALL_PREFIX=/opt
wget https://github.com/openucx/ucx/releases/download/v${UCX_VER}/ucx-${UCX_VER}.tar.gz
tar -xvf ucx-${UCX_VER}.tar.gz
cd ucx-${UCX_VER}
./contrib/configure-release --enable-optimizations --prefix=${INSTALL_PREFIX}/ucx-${UCX_VER}
make -j$(nproc)
make install
