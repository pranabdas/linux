# Build command : docker build -t jekyll -f jekyll.dockerfile .
# Run docker    : docker run -ti -v ${PWD}:/home -p 4000:4000 jekyll bash
# Create new    : jekyll new myblog && cd myblog
# Serve         : bundle exec jekyll serve --host 0.0.0.0 --port 4000
#               : alternatively, you can specify host and port in _config.yml
#               : website will be served at http://127.0.0.1:4000 on the host
# Jekyll build  : bundle exec jekyll build
#               : docker run -ti -v ${PWD}:/home -e LANG=C.UTF-8 ubuntu bundle exec jekyll build
# Bundler       : bundle init
#               : bundle install
#               : bundle update

FROM ubuntu:focal

RUN apt update && apt upgrade -y

RUN DEBIAN_FRONTEND=noninteractive apt install -y ruby-full build-essential \
    zlib1g-dev nodejs locales

RUN echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc && \
    echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc && \
    echo "en_US UTF-8" > /etc/locale.gen && \
    locale-gen en_US.UTF-8 && \
    echo 'export LANG=en_US.UTF-8' >> $HOME/.bashrc && \
    echo 'export LANGUAGE=en_US:en' >> $HOME/.bashrc && \
    echo 'export LC_ALL=en_US.UTF-8' >> $HOME/.bashrc

RUN gem install jekyll bundler

WORKDIR /home
