# Build command  : docker build -t mkdocs -f mkdocs.dockerfile .
# Run docker     : docker run -ti -v ${PWD}:/home -p 8000:8000 mkdocs bash
# Launch mkdocs  : mkdocs new mydocs && cd mydocs
# Serve          : mkdocs serve --dev-addr=0.0.0.0:8000
#                : notebook will be served at http://127.0.0.1:8000 on the host
# Build          : mkdocs build
#                : docker run -ti -v ${PWD}:/home mkdocs mkdocs build

FROM ubuntu:focal
RUN apt update && apt upgrade -y
RUN apt install -y python3 python3-pip
RUN pip3 install mkdocs mkdocs-material
WORKDIR /home
