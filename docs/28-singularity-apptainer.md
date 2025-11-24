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
