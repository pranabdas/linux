#!/bin/bash
# install LAPACK in Ubuntu/Debian (http://www.netlib.org/lapack/)
# Run : sh lapack_install.sh
version="3.10.0"
apt update && apt upgrade -y
DEBIAN_FRONTEND=noninteractive apt install -y --no-install-recommends wget \
    ca-certificates \
    build-essential \
    gfortran \
    mpich \
    fftw3-dev
wget https://github.com/Reference-LAPACK/lapack/archive/refs/tags/v${version}.tar.gz
tar -xzvf v${version}.tar.gz
cd lapack-${version}
cp make.inc.example make.inc
make blaslib
make lapacklib
make tmglib
cp librefblas.a /usr/local/lib/libblas.a
cp liblapack.a /usr/local/lib/liblapack.a
cp libtmglib.a /usr/local/lib/libtmg.a
cd -
rm v${version}.tar.gz
rm -rf lapack-${version}
