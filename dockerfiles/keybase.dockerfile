# Build    : docker build -t keybase -f keybase.dockerfile .
# Run      : docker run -ti -v ${PWD}:/home keybase bash
# Launch   : run_keybase -g
# Commands : keybase --pinentry=none login
#          : keybase signup
#          : keybase fs ls /keybase/public/{username}
#          : keybase fs cp -r data /keybase/private/{username}
#          : keybase oneshot -u kbuser --paperkey "your paper key"

FROM ubuntu:focal

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update --fix-missing; apt upgrade -yq; \
    apt install -yq --no-install-recommends \
    wget \
    ca-certificates && \

    groupadd -r noroot && useradd -r -g noroot noroot && \
    mkdir /kbfs && \
    chown -R noroot:noroot /kbfs && \
    chown -R noroot:noroot /home && \

    wget https://prerelease.keybase.io/keybase_amd64.deb && \
    apt install -yq --no-install-recommends ./keybase_amd64.deb && \
    rm keybase_amd64.deb

# leave in `/kbfs`which can be mapped with host, while `/home` maybe required
# by keybase config
WORKDIR /kbfs
USER noroot
