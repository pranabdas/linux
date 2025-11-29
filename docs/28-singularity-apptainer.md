---
title: Singularity and Apptainer
---

Apptainer is a fork of Singularity project, both projects are maintained
separately. We can use `apptainer` and `singularity` commands interchangeably.

Install Apptainer in RHEL based system:
```bash
dnf install -y epel-release
dnf install -y apptainer
```

Pull a docker image (it will convert and write to SIF format):
```bash
apptainer pull docker://nvcr.io/hpc/quantum_espresso:qe-7.3.1
```

Run a program via apptainer:
```bash
apptainer exec /qe-7.4.sif /opt/q-e-qe-7.4.1/bin/pw.x -in pw.in | tee pw.out
```

Bind a directory (some directories are mapped automatically, such as current
working directory):
```bash
apptainer exec --bind /export:/export /qe-7.4.sif /opt/q-e-qe-7.4.1/bin/pw.x -in pw.in | tee pw.out
```

Launch apptainer via MPI:
```bash
mpirun -np 2 apptainer exec /qe-7.4.sif /opt/q-e-qe-7.4.1/bin/pw.x -in pw.in | tee pw.out
```

How to pass environment variable to the container:
1. We can pass variable with `--env` flag.
```bash
apptainer exec --env MY_VARIABLE="some_value" my-container.sif echo $MY_VARIABLE
```

2. We can set variables with `APPTAINERENV_` or `SINGULARITYENV_` prefix:
```bash
export APPTAINERENV_MY_VARIABLE="some_value"
apptainer exec my-container.sif env | grep MY_VARIABLE
```

Also there are `APPTAINERENV_PREPEND_PATH` and `APPTAINERENV_APPEND_PATH` to
modify `PATH` variable.

Example Apptainer definition file:
```bash title="espresso.def"
Bootstrap: docker
From: almalinux:9

%labels
    Maintainer Pranab Das
    Version QE-7.4.1

%environment
    export OMP_NUM_THREADS=1
    export PATH=/usr/lib64/openmpi/bin:$PATH
    export LD_LIBRARY_PATH=/usr/lib64/openmpi/lib:$LD_LIBRARY_PATH

%post
    dnf install -y epel-release
    dnf config-manager --set-enabled crb

    dnf groupinstall -y "Development Tools"
    dnf install -y wget \
        gcc \
        gcc-c++ \
        gcc-gfortran \
        openblas-devel \
        lapack-devel \
        fftw-devel \
        openmpi-devel \
        scalapack-openmpi-devel \
        libomp-devel

    wget https://github.com/QEF/q-e/archive/refs/tags/qe-7.4.1.tar.gz
    tar -xf qe-7.4.1.tar.gz
    rm -f qe-7.4.1.tar.gz
    cd q-e-qe-7.4.1

    export OMP_NUM_THREADS=1
    export PATH=/usr/lib64/openmpi/bin:$PATH
    export LD_LIBRARY_PATH=/usr/lib64/openmpi/lib:$LD_LIBRARY_PATH

    ./configure CC=mpicc \
        FC=mpifort \
        F77=mpifort \
        F90=mpifort \
        MPIF90=mpif90 \
        --enable-parallel \
        --enable-openmp \
        --with-scalapack=yes \
        --prefix=/opt/qe-7.4.1

    make all -j$(nproc)
    make install

    rm ..
    rm -rf q-e-qe-7.4.1
```

Build container:
```bash
apptainer build espresso.sif espresso.def
```

Recover apptainer definition file from an image. Apptainer file is embedded into
the SIF image.
```bash
apptainer exec <image_name.sif> cat /.singularity.d/Singularity
```

Cleanup apptainer cache:
```bash
apptainer cache clean --force
```

## Resources
- https://docs.sylabs.io/guides/latest/user-guide/
- https://apptainer.org/docs/user/main/index.html
- [Singularity: Simple, secure containers for compute-driven workloads](https://doi.org/10.1145/3332186.3332192)
- [Apptainer Without Setuid](https://doi.org/10.1051/epjconf/202429507005)
- [Evaluation and Benchmarking of Singularity MPI containers on EU Research e-Infrastructure](https://doi.org/10.1109/CANOPIE-HPC49598.2019.00006)
- [Singularity Containers Improve Reproducibility and Ease of Use in Computational Image Analysis Workflows](https://doi.org/10.3389/fbinf.2021.757291)
- [Feasibility of Running Singularity Containers with Hybrid MPI on NASA High-End Computing Resources](https://doi.org/10.1109/CANOPIEHPC54579.2021.00007)
- [Singularity: Scientific containers for mobility of compute](https://doi.org/10.1371/journal.pone.0177459)
- [Enhancing reproducibility in scientific computing: Metrics and registry for Singularity containers](https://doi.org/10.1371/journal.pone.0188511)
