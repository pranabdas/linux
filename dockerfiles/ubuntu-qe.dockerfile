# Ubuntu for high performance computing
# Consult: https://github.com/rinnocente/ubuntu-18.04-homebrew
# docker build -t qe -f ubuntu-qe.dockerfile .

FROM ubuntu:focal

ENV DEBIAN_FRONTEND=noninteractive
WORKDIR /root

RUN apt update --fix-missing; apt upgrade -yq; \
    apt install -yq --no-install-recommends \
    autoconf \
    patch \
    ca-certificates \
    build-essential \
    zlib1g-dev \
    gfortran \
    fftw3-dev \
    openmpi-bin \
    openmpi-common \
    libscalapack-openmpi-dev \
#    mpich \
#    libscalapack-mpi-dev \
#    libscalapack-mpich-dev \
    libmatheval-dev \
    libopenblas-base \
    libopenblas-dev \
    libopenmpi-dev \
    libgsl-dev \
    gsl-bin \
    wget

RUN wget https://github.com/QEF/q-e/releases/download/qe-6.7.0/qe-6.7-ReleasePack.tgz && \
    tar xzf qe-6.7-ReleasePack.tgz && \
    rm qe-6.7-ReleasePack.tgz && \
    cd qe-6.7 && \
    ./configure && \
    make all && \
    echo 'export PATH="/root/qe-6.7/bin:$PATH"' >> ~/.bashrc

WORKDIR /home

