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
wget https://github.com/Reference-LAPACK/lapack/archive/v3.9.0.tar.gz
tar -xzvf v3.9.0.tar.gz
cd lapack-3.9.0
cp make.inc.example make.inc
make blaslib
make lapacklib
make tmglib
sudo cp librefblas.a /usr/local/lib/libblas.a
sudo cp liblapack.a /usr/local/lib/liblapack.a
sudo cp libtmglib.a /usr/local/lib/libtmg.a
```

## Resources
- <https://pages.tacc.utexas.edu/~eijkhout/istc/istc.html>
