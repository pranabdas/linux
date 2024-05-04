#!/bin/bash
# Installation script for selection of Intel oneAPI 2023.1.0 components

# INSTALL_PATH="/workspaces/compilers"
CWD=${PWD}
BUILD_DIR=/tmp
cd ${BUILD_DIR}

sudo apt update
sudo apt install -y --no-install-recommends autoconf gawk gcc g++ make

wget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/89283df8-c667-47b0-b7e1-c4573e37bd3e/l_dpcpp-cpp-compiler_p_2023.1.0.46347_offline.sh
# for custom location: --install-dir ${INSTALL_PATH}/intel
# sh ./l_dpcpp-cpp-compiler_p_2023.1.0.46347_offline.sh -a --silent --eula accept --install-dir ${INSTALL_PATH}/intel
sudo sh ./l_dpcpp-cpp-compiler_p_2023.1.0.46347_offline.sh -a --silent --eula accept
rm l_dpcpp-cpp-compiler_p_2023.1.0.46347_offline.sh

wget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/150e0430-63df-48a0-8469-ecebff0a1858/l_fortran-compiler_p_2023.1.0.46348_offline.sh
# sh ./l_fortran-compiler_p_2023.1.0.46348_offline.sh -a --silent --eula accept --install-dir ${INSTALL_PATH}/intel
sudo sh ./l_fortran-compiler_p_2023.1.0.46348_offline.sh -a --silent --eula accept
rm l_fortran-compiler_p_2023.1.0.46348_offline.sh

wget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/7dcd261b-12fa-418a-b61b-b3dd4d597466/l_tbb_oneapi_p_2021.9.0.43484_offline.sh
# sh ./l_tbb_oneapi_p_2021.9.0.43484_offline.sh -a --silent --eula accept --install-dir ${INSTALL_PATH}/intel
sudo sh ./l_tbb_oneapi_p_2021.9.0.43484_offline.sh -a --silent --eula accept
rm l_tbb_oneapi_p_2021.9.0.43484_offline.sh

wget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/718d6f8f-2546-4b36-b97b-bc58d5482ebf/l_mpi_oneapi_p_2021.9.0.43482_offline.sh
# sh ./l_mpi_oneapi_p_2021.9.0.43482_offline.sh -a --silent --eula accept --install-dir ${INSTALL_PATH}/intel
sudo sh ./l_mpi_oneapi_p_2021.9.0.43482_offline.sh -a --silent --eula accept
rm l_mpi_oneapi_p_2021.9.0.43482_offline.sh

wget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/cd17b7fe-500e-4305-a89b-bd5b42bfd9f8/l_onemkl_p_2023.1.0.46342_offline.sh
# sh ./l_onemkl_p_2023.1.0.46342_offline.sh -a --silent --eula accept --install-dir ${INSTALL_PATH}/intel
sudo sh ./l_onemkl_p_2023.1.0.46342_offline.sh -a --silent --eula accept
rm l_onemkl_p_2023.1.0.46342_offline.sh

cd ${CWD}
