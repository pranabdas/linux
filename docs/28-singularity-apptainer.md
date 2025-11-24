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
