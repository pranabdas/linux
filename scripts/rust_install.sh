#!/bin/bash
# Rust installation script for ubuntu
# Run : bash install.sh && source $HOME/.cargo/env
apt update && apt install -y curl && \
curl https://sh.rustup.rs -sSf | sh -s -- -y
