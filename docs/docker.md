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
