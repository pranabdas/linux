#!/bin/bash
# can be used to build deb or rpm packages

GCC_VER=12.3.0
INSTALL_DIR=/opt/libraries/gcc-${GCC_VER}
BUILD_TYPE=deb  # deb | rpm

BUILD_DIR=/tmp/_build_$(date +'%Y%m%d%H%M%S')
mkdir $BUILD_DIR

fpm --verbose --force --debug \
  --workdir $BUILD_DIR \
  --input-type dir \
  --output-type ${BUILD_TYPE} \
  --${BUILD_TYPE}-user root \
  --${BUILD_TYPE}-group root \
  --chdir "${INSTALL_DIR}" \
  --name "gcc-${GCC_VER}" \
  --prefix "${INSTALL_DIR}" \
  --version "1" \
  --iteration "1" \
  --url "https://github.com/pranabdas/linux/" \
  --maintainer "https://pranabdas.github.io" \
  --architecture "x86_64" \
  --description "GCC ${GCC_VER}."
rm -rf $BUILD_DIR
