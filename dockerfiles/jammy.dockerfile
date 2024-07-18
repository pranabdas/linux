# Build : docker build -t ubuntu -f jammy.dockerfile .
# Run   : docker run -ti -v ${PWD}:/home -p 8888:8888 ubuntu bash

FROM ubuntu:jammy

ENV DEBIAN_FRONTEND=noninteractive
ENV NODE_MAJOR=20

RUN apt update --fix-missing; apt upgrade -yq; \
    apt install -yq --no-install-recommends \
        build-essential \
        curl \
        # firefox \
        fonts-open-sans \
        git \
        gnupg \
        libgl1-mesa-glx \
        locales \
        mesa-utils \
        openbox \
        python3 \
        python3-pip \
        ruby-full \
        unzip \
        vim \
        wget \
        xorg \
        zip \
        zlib1g-dev && \
#
# Install pip packages
    pip3 install \
        astropy \
        # bokeh \
        # geopandas \
        jupyterlab \
        matplotlib \
        # missingno \
        # mkdocs \
        # mkdocs-material \
        # networkx \
        numpy \
        openpyxl \
        pandas \
        # seaborn \
        # scikit-learn \
        scipy \
        xlrd && \
#
# nodejs 20.x (LTS)
    curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg && \
    echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list && \
    apt update && apt install -y --no-install-recommends nodejs && \
#
# bash configs
    echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc && \
    echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc && \
    echo "en_US UTF-8" > /etc/locale.gen && \
    locale-gen en_US.UTF-8 && \
    (echo 'export LANG=en_US.UTF-8' && \
     echo 'export LANGUAGE=en_US:en' && \
     echo 'export LC_ALL=en_US.UTF-8') >> $HOME/.bashrc && \
#
# jupyter-lab settings
    mkdir /etc/jupyter && \
    (echo "c.ServerApp.ip = '0.0.0.0'" && \
     echo "c.ServerApp.allow_root = True" && \
     echo "c.ServerApp.open_browser = False") \
       >> /etc/jupyter/jupyter_server_config.py && \
#
# Bundler and jekyll
    gem install bundler jekyll && \
#    mkdir tmpjekyll && \
#    cd tmpjekyll && \
#    wget https://raw.githubusercontent.com/pranabdas/dotfiles/main/Gemfile && \
#    bundle install && \
#    cd .. && \
#    rm -rf tmpjekyll && \
#
# remove apt lists
    rm -rf /var/lib/apt/lists/* && \
#
# oh-my-bash
    git clone https://github.com/ohmybash/oh-my-bash.git ~/.oh-my-bash && \
    wget https://raw.githubusercontent.com/pranabdas/dotfiles/main/oh-my-bash.bashrc && \
    cat oh-my-bash.bashrc >> ~/.bashrc && \
    rm oh-my-bash.bashrc && \
    wget https://raw.githubusercontent.com/pranabdas/dotfiles/main/bash_history \
    -O ~/.bash_history
#
# matplotlib customizations
# RUN mkdir -p $HOME/.config/matplotlib && \
#     wget https://raw.githubusercontent.com/pranabdas/dotfiles/main/matplotlibrc \
#     -O $HOME/.config/matplotlib/matplotlibrc

# leave in `/home` which we can map with the host
WORKDIR /home
