---
title: High Performance Computing
sidebar_label: HPC
---

## Basic Libraries/utilities
```bash
sudo apt install make
sudo apt install gcc
sudo apt install gfortran
```

## MPI Libraries
```bash
sudo apt install mpich
```

## Math Libraries
**FFTW**
```bash
sudo apt install libfftw3-3
```

**LAPACK, BLAS, TMGLIB**
Resources: <http://www.netlib.org/lapack/>
```bash
wget https://github.com/Reference-LAPACK/lapack/archive/refs/tags/v3.10.0.tar.gz
tar -xzvf v3.10.0.tar.gz
cd lapack-3.10.0
cp make.inc.example make.inc
make blaslib
make lapacklib
make tmglib
sudo cp librefblas.a /usr/local/lib/libblas.a
sudo cp liblapack.a /usr/local/lib/liblapack.a
sudo cp libtmglib.a /usr/local/lib/libtmg.a
```

## Intel oneAPI and MKL
```bash
# download Intel oneAPI Base Toolkit
wget https://registrationcenter-download.intel.com/akdlm/irc_nas/18673/l_BaseKit_p_2022.2.0.262_offline.sh

# launch the interactive cli installation
# sh ./l_BaseKit_p_2022.2.0.262_offline.sh -a --cli

# list components included in oneAPI Base Toolkit
# sh ./l_BaseKit_p_2022.2.0.262_offline.sh -a --list-components

# install a subset of components
sh ./l_BaseKit_p_2022.2.0.262_offline.sh -a --silent --eula accept --components intel.oneapi.lin.dpcpp-cpp-compiler:intel.oneapi.lin.mkl.devel

# remove installer
rm l_BaseKit_p_2022.2.0.262_offline.sh

# download, install HPC Toolkit
wget https://registrationcenter-download.intel.com/akdlm/irc_nas/18679/l_HPCKit_p_2022.2.0.191_offline.sh
sh ./l_HPCKit_p_2022.2.0.191_offline.sh -a --silent --eula accept
rm l_HPCKit_p_2022.2.0.191_offline.sh

# download, install MKL library
wget https://registrationcenter-download.intel.com/akdlm/irc_nas/18483/l_onemkl_p_2022.0.2.136_offline.sh
sh ./l_onemkl_p_2022.0.2.136_offline.sh -a --silent --eula accept
rm l_onemkl_p_2022.0.2.136_offline.sh

# source oneAPI environment variables
source /opt/intel/oneapi/setvars.sh
# source /opt/intel/oneapi/setvars.sh intel64 --force
```

### Compile Intel FFTW
```bash
cd ${MKLROOT}/interfaces/fftw3xf
make libintel64
cp libfftw3xf_intel.a ${MKLROOT}/lib/
```

### OpenMPI
```bash
# compile Open MPI with intel compiler
wget https://download.open-mpi.org/release/open-mpi/v4.1/openmpi-4.1.4.tar.gz
tar zxvf openmpi-4.1.4.tar.gz
cd openmpi-4.1.4
./configure --prefix=/opt/openmpi CC=icc CXX=icpc F77=ifort FC=ifort
make -j4
make -j4 install
echo 'export PATH=/opt/openmpi/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

## Resources
- <https://web.corral.tacc.utexas.edu/CompEdu/pdf/stc/EijkhoutIntroToHPC.pdf>
