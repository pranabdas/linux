#!/bin/bash

OMPI_VER="5.0.3"
OMPI_DOWNLOAD_URL=https://download.open-mpi.org/release/open-mpi/v5.0/openmpi-${OMPI_VER}.tar.gz
wget --retry-connrefused --tries=3 --waitretry=5 $OMPI_DOWNLOAD_URL
tar -xvf openmpi-${OMPI_VER}.tar.gz
cd openmpi-${OMPI_VER}
./configure --prefix=${INSTALL_PREFIX}/openmpi-${OMPI_VER} CC=gcc CXX=g++ F77=gfortran FC=gfortran --enable-mpirun-prefix-by-default --with-platform=contrib/platform/mellanox/optimized --with-ucx=/opt/ucx-1.16.0 --enable-mpi-ext --with-sge
# --with-hcoll=${HCOLL_HOME} --enable-mpi-cxx --with-tm=${PBS_HOME}
make -j$(nproc)
make install
