### Docker

Follow the installation instruction from [Docker website](https://docs.docker.com/engine/install/){:target="_blank"} in your system. Once docker service has started, you can check:
```
docker info

# or
docker version
```

List images:
```
docker images
```

Run an image:
```
docker run -ti ubuntu:latest bash
docker run <image-id>
```
`-ti` stands for terminal interactive. If the image is not present locally, it will pull from the docker hub. Alternatively, you can use `docker pull` to download locally an image prior to running. 

List docker process:
```
# running containers
docker ps

# all containers 
docker ps -a 

# last exited container 
docker ps -l
```

Create images from container:
```
docker commit <container-id>
```

Give a name to the image: 
```
docker tag <SHA-256-image-id> <my-image-name>
```

We can assign name at the same time with commit:
```
docker commit <container-id> <image-name>
```
This will save the state of the container in the latest image. 

Start a detached container:
```
docker run -d -ti ubuntu:latest bash
```

Attach running detached container:
```
docker attach <container-name-or-id>
```

Exit from the docker container without killing the process: [control] + [P], [control] + [Q]

Sharing volumes (shared folder with the host):
```
docker run -v /home/host/docs:/home -ti centos bash
```

Delete container:
```
docker rm <id-or-name>
```

Delete all idle containers: 
```
sudo docker container prune
```

Delete images:
```
sudo docker rmi <image-name>
```

Run and remove when docker instance exits:
```
docker run --rm <image-name>
```

Use host network:
```
docker run -it --net=host centos bash
```

#### Installing apache on a docker container 

Here we will install centos docker image: 
```
docker pull centos 
``` 

Run docker:
```
docker run -ti centos bash
```

Once inside centos update the os:
```
dnf up
```

Install apache:
```
sudo dnf install httpd
exit 
docker commit <container-id> centos
docker run --net=host centos httpd -D FOREGROUND &
```
Now if you browse your host IP address you should be able to view the default website. We can stop the httpd, by killing the container.
``` 
docker ps
docker kill <container-id>
``` 

#### Dockerfile 
Write the `Dockerfile`: 
```
# Start from Ubuntu 20.04 LTS
FROM ubuntu:focal

# Update OS
RUN apt update \
 && apt upgrade -y

# Install software packages 
RUN apt install -y python3 \
 && apt install -y python3-pip \
 && apt install -y git \
 && apt install -y fonts-open-sans

# Install pip packages 
RUN pip3 install jupyterlab numpy scipy matplotlib

# bashrc settings
RUN echo 'alias jupyter-notebook="jupyter-notebook --allow-root --no-browser"' \
>> $HOME/.bashrc

# clone code from git repository
WORKDIR /root
RUN git clone https://github.com/pranabdas/arpespythontools.git

# matplotlib customizations
RUN mkdir -p /root/.config/matplotlib \
 && touch /root/.config/matplotlib/matplotlibrc \
 && echo 'font.family       : sans-serif' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'font.style        : normal' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'font.weight       : regular' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'font.sans-serif   : Open Sans, DejaVu Sans' >> /root/.config/matplotlib/matplotlibrc\
 && echo 'axes.linewidth    : 0.8' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'axes.titlesize    : 16' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'axes.labelsize    : 16' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'xtick.major.size  : 8' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'xtick.minor.size  : 4' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'xtick.major.width : 0.8' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'xtick.minor.width : 0.6' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'xtick.labelsize   : 16' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'xtick.direction   : in' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'ytick.major.size  : 8' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'ytick.minor.size  : 4' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'ytick.major.width : 0.8' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'ytick.minor.width : 0.6' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'ytick.labelsize   : 16' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'ytick.direction   : in' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'image.origin      : lower' >> /root/.config/matplotlib/matplotlibrc

# leave in `/home` which we can map with the host
WORKDIR /home
```

Build docker image: 
```
docker build -t arptools .
```

Launch: 
```
docker run -ti --net=host -v /host/path:/home arptools bash
```

#### Docker hub

Login: 
```
sudo docker login docker.io
```

Tag a local image: 
```
sudo docker tag localimage:latest username/localimage:latest
```

Push a local image: 
```
sudo docker push username/localimage:latest
```

#### Transferring Docker image offline
```
docker pull ubuntu
docker save -o ubuntu_image.docker ubuntu
docker load -i ubuntu_image.docker
```
