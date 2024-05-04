#!/bin/bash

GCC_VER=12.3.0
INSTALL_DIR=/opt/libraries/gcc-${GCC_VER}

BUILD_DIR=/tmp/_build_$(date +'%Y%m%d%H%M%S')
CWD=${PWD}
mkdir ${BUILD_DIR} && cd $_

NUM_PROCS=$(nproc)
PROCS_TO_USE=$(expr $NUM_PROCS \* 3 / 2)  # use 1.5 times as the build is heavily io bound

wget https://mirror.freedif.org/GNU/gcc/gcc-${GCC_VER}/gcc-${GCC_VER}.tar.gz
tar -xf gcc-${GCC_VER}.tar.gz
cd gcc-${GCC_VER}
./contrib/download_prerequisites
cd ..
mkdir objdir
cd objdir
${PWD}/../gcc-${GCC_VER}/configure --prefix=${INSTALL_DIR} --enable-languages=c,c++,fortran --disable-multilib
make -j${PROCS_TO_USE}  # time consuming task, parallelize on large number of processors
make install

cd ..
rm gcc-${GCC_VER}.tar.gz
rm -rf gcc-${GCC_VER}
rm -rf objdir

cd ${CWD}
