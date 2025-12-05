---
title: Singularity and Apptainer
---

Apptainer is a fork of Singularity project, both projects are maintained
separately. We can use `apptainer` and `singularity` commands interchangeably.

Install Apptainer in RHEL based systems:
```bash
dnf install -y epel-release
dnf install -y apptainer
```

Install in Debian based systems:
```bash
sudo apt update && sudo apt install -y \
    wget \
    curl \
    fuse3 \
    libfuse3-3 \
    uidmap \
    squashfs-tools

# download latest version of apptainer
VER=$(curl -s https://api.github.com/repos/apptainer/apptainer/releases/latest | grep tag_name | cut -d '"' -f 4 | sed 's/v//')
wget https://github.com/apptainer/apptainer/releases/download/v${VER}/apptainer_${VER}_amd64.deb

sudo apt install -y ./apptainer_${VER}_amd64.deb
rm apptainer_${VER}_amd64.deb
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

## Sandbox mode

We can test commands interactively in sandbox mode. Create a sandbox with
`--sandbox` or `-s`:
```bash
apptainer build --sandbox test_sandbox/ docker://ubuntu:latest
```

This will create a standard directory named test_sandbox that contains full
Linux OS tree (`/bin`, `/etc`, `/usr`).

Now to install packages and save them to the sandbox folder, we need to enter
into the container in writable mode (use `--writable` or `-w` flag). We will
also need `--fakeroot` or `-f` flag to install software as root inside the
container:
```bash
apptainer shell --writable --fakeroot test_sandbox/
```

Inside the apptainer shell, we can install packages and experiment
interactively, for example:
```bash
dnf install python3
```

We can package the sandbox directory into a SIF image:
```bash
apptainer build -f espresso.sif test_sandbox/
```

After the container is build and saved as SIF image, we may delete our sandbox
folder. We need to set appropriate permission in order to be able to delete:
```bash
chmod -R u+rwX test_sandbox
rm -rf test_sandbox
```

Cleanup apptainer cache:
```bash
apptainer cache clean --force
```

## Managing SIF images with ORAS

Install ORAS in macos:
```bash
brew install oras
```

Login to GitHub Container Registry with ORAS (requires GitHub personal access
token with sufficient permission):
```bash
echo $CR_PAT | oras login ghcr.io -u pranabdas --password-stdin
```

Push a file to GHCR:
```bash
oras push ghcr.io/pranabdas/drive:1.0.0 \
    --artifact-type application/text \
    ./sample.txt
```

Fetch details about an object:
```bash
oras manifest fetch ghcr.io/pranabdas/drive:1.0.0
```

Print SHA-256-SUM of an object:
```bash
oras manifest fetch ghcr.io/pranabdas/drive:1.0.0 | jq '.layers[0].digest' | awk -F: '{print $2}'
```

Pull an object:
```bash
oras pull ghcr.io/pranabdas/drive:1.0.0
```

Pull and write object to a specific directory:
```bash
oras pull ghcr.io/pranabdas/drive:1.0.0 --output /opt
```

An ORAS image can be made associated with a repository by uploading to the
repository namespace:
```bash
ghcr.io/pranabdas/<repository>/<image>:<tag>
```

We may need to specify per file media type `<file-name>:<media-type>` to set
artifact type correctly:
```bash
oras push ghcr.io/pranabdas/ubuntu.sif \
  --artifact-type "application/vnd.sylabs.sif.layer.v1.sif" \
  "qe.sif:application/vnd.sylabs.sif.layer.v1.sif"
```

## Run apptainer in GitHub Codespaces
1. Enable via docker-in-docker:
```json
"features": {
    "ghcr.io/devcontainers/features/docker-in-docker:2": {
      "enableNonRootDocker": "true"
    }
  },
```

2. If you do not need full docker-in-docker functionality, execute following
commands to enable required permissions:
```json
{
  "name": "My Codespace",
  "runArgs": [
      "--cap-add=SYS_ADMIN",
      "--security-opt", "apparmor=unconfined",
      "--device=/dev/fuse",
      "--security-opt", "systempaths=unconfined"
  ],
}
```

3. Run `--privileged` mode (less secure than option 2):
```json
{
  "name": "My Codespace",
  "runArgs": [
    "--privileged"
  ],
}
```


## Resources
- https://docs.sylabs.io/guides/latest/user-guide/
- https://apptainer.org/docs/user/main/index.html
- https://oras.land
- [Singularity: Simple, secure containers for compute-driven workloads](https://doi.org/10.1145/3332186.3332192)
- [Apptainer Without Setuid](https://doi.org/10.1051/epjconf/202429507005)
- [Evaluation and Benchmarking of Singularity MPI containers on EU Research e-Infrastructure](https://doi.org/10.1109/CANOPIE-HPC49598.2019.00006)
- [Singularity Containers Improve Reproducibility and Ease of Use in Computational Image Analysis Workflows](https://doi.org/10.3389/fbinf.2021.757291)
- [Feasibility of Running Singularity Containers with Hybrid MPI on NASA High-End Computing Resources](https://doi.org/10.1109/CANOPIEHPC54579.2021.00007)
- [Singularity: Scientific containers for mobility of compute](https://doi.org/10.1371/journal.pone.0177459)
- [Enhancing reproducibility in scientific computing: Metrics and registry for Singularity containers](https://doi.org/10.1371/journal.pone.0188511)
