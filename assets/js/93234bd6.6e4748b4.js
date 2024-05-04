"use strict";(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([[458],{7060:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var s=r(4848),a=r(8453);const c={title:"Docker",keywords:["docker","developer tools","container"]},o=void 0,i={id:"docker",title:"Docker",description:"Follow the installation instruction from [Docker website](",source:"@site/docs/docker.md",sourceDirName:".",slug:"/docker",permalink:"/linux/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/linux/blob/main/docs/docker.md",tags:[],version:"current",frontMatter:{title:"Docker",keywords:["docker","developer tools","container"]},sidebar:"docs",previous:{title:"Git",permalink:"/linux/git"},next:{title:"Shell scripting",permalink:"/linux/shell-scripting"}},l={},d=[{value:"Running GUI apps on docker",id:"running-gui-apps-on-docker",level:2},{value:"Running apache on docker",id:"running-apache-on-docker",level:2},{value:"Dockerfile",id:"dockerfile",level:2},{value:"Docker hub",id:"docker-hub",level:2},{value:"Transferring image offline",id:"transferring-image-offline",level:2}];function t(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Follow the installation instruction from ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"Docker website"})," in your system. Once docker service has\nstarted, you can check:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker info\n\n# or\ndocker version\n"})}),"\n",(0,s.jsx)(n.p,{children:"List images:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker images\n"})}),"\n",(0,s.jsx)(n.p,{children:"Run an image:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run -ti ubuntu:latest bash\ndocker run <image-id>\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-ti"})," stands for terminal interactive. If the image is not present locally, it\nwill pull from the docker hub. Alternatively, you can use ",(0,s.jsx)(n.code,{children:"docker pull"})," to\ndownload locally an image prior to running."]}),"\n",(0,s.jsx)(n.p,{children:"List docker process:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# running containers\ndocker ps\n\n# all containers\ndocker ps -a\n\n# last exited container\ndocker ps -l\n"})}),"\n",(0,s.jsx)(n.p,{children:"Create images from container:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker commit <container-id>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Give a name to the image:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker tag <SHA-256-image-id> <my-image-name>\n"})}),"\n",(0,s.jsx)(n.p,{children:"We can assign name at the same time with commit:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker commit <container-id> <image-name>\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will save the state of the container in the latest image."}),"\n",(0,s.jsx)(n.p,{children:"Start a detached container:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run -d -ti ubuntu:latest bash\n"})}),"\n",(0,s.jsx)(n.p,{children:"Attach running detached container:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker attach <container-name-or-id>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Exit from the docker container without killing the process: [control] + [P],\n[control] + [Q]"}),"\n",(0,s.jsx)(n.p,{children:"Sharing volumes (shared folder with the host):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run -v /home/host/docs:/home -ti centos bash\ndocker run -v ${PWD}:/home -ti ubuntu bash\n"})}),"\n",(0,s.jsx)(n.p,{children:"Check docker storage usage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker system df\n"})}),"\n",(0,s.jsx)(n.p,{children:"Remove build cache:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker builder prune\n"})}),"\n",(0,s.jsx)(n.p,{children:"Delete container:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker rm <id-or-name>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Delete all idle containers:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker container prune\n"})}),"\n",(0,s.jsx)(n.p,{children:"Delete images:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker rmi <image-name>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Reclaim space immediately (otherwise it may take several minutes to reflect\nstorage space after a cleanup operation):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run --privileged --pid=host --rm docker/desktop-reclaim-space\n"})}),"\n",(0,s.jsx)(n.p,{children:"Delete all the stopped containers and images:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker system prune -a\n"})}),"\n",(0,s.jsx)(n.p,{children:"Run and remove when docker instance exits:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run --rm <image-name>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Use host network:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run -it --net=host centos bash\n"})}),"\n",(0,s.jsx)(n.p,{children:"Port forwarding:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run -ti -p 8888:8888 -v ${PWD}:/home jupyter bash\n"})}),"\n",(0,s.jsx)(n.p,{children:"Set MAC address:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run -it --mac-address 02:42:ac:11:0d:11 ubuntu bash\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also pass environment variables with ",(0,s.jsx)(n.code,{children:"-e"})," flag, e.g.,",(0,s.jsx)(n.code,{children:"-e LANG=C.UTF-8"}),",\n",(0,s.jsx)(n.code,{children:"-e TZ=Asia/Singapore"}),". You can pass multiple ",(0,s.jsx)(n.code,{children:"-e"})," flags to pass multiple such\nvariables."]}),"\n",(0,s.jsx)(n.h2,{id:"running-gui-apps-on-docker",children:"Running GUI apps on docker"}),"\n",(0,s.jsxs)(n.p,{children:["First we need to install a X-window system. On linux, we can choose X11. On\nmacOS ",(0,s.jsx)(n.a,{href:"https://www.xquartz.org",children:"X-Quartz"}),", on Windows ",(0,s.jsx)(n.a,{href:"https://sourceforge.net/projects/xming/",children:"xming"}),". On macOS, allow connections from\nnetwork clients:"]}),"\n",(0,s.jsxs)("picture",{children:[(0,s.jsx)("source",{type:"image/webp",srcSet:r(2513).A}),(0,s.jsx)("img",{src:r(5148).A,alt:"x-quartz",width:"450px"})]}),"\n",(0,s.jsxs)(n.p,{children:["After launching XQuartz (you may launch for terminal by ",(0,s.jsx)(n.code,{children:"open -a XQuartz"}),"),\nissue ",(0,s.jsx)(n.code,{children:"xhost +"}),". More about X-window system ",(0,s.jsx)(n.a,{href:"https://developer.ibm.com/tutorials/l-lpic1-106-1/",children:"here"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# macOS\ndocker run --rm -tid -e DISPLAY=docker.for.mac.host.internal:0 ubuntu firefox\n\n# linux\ndocker run --rm -tid --net=host -e DISPLAY=:0 ubuntu firefox\n\n# Windows\ndocker run --rm -tid -e DISPLAY=host.docker.internal:0 ubuntu firefox\n"})}),"\n",(0,s.jsx)(n.p,{children:"I assumed you have the X version of firefox is installed in the ubuntu image."}),"\n",(0,s.jsx)(n.h2,{id:"running-apache-on-docker",children:"Running apache on docker"}),"\n",(0,s.jsx)(n.p,{children:"Here we will install centos docker image:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker pull centos\n"})}),"\n",(0,s.jsx)(n.p,{children:"Run docker:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run -ti centos bash\n"})}),"\n",(0,s.jsx)(n.p,{children:"Once inside centos update the os:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dnf up\n"})}),"\n",(0,s.jsx)(n.p,{children:"Install apache:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo dnf install httpd\nexit\ndocker commit <container-id> centos\ndocker run --net=host centos httpd -D FOREGROUND &\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now if you browse your host IP address you should be able to view the default\nwebsite. We can stop the httpd, by killing the container."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker ps\ndocker kill <container-id>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Stop all running containers:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker stop $(docker ps -a -q)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"dockerfile",children:"Dockerfile"}),"\n",(0,s.jsxs)(n.p,{children:["Write the ",(0,s.jsx)(n.code,{children:"Dockerfile"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-docker",children:"# Start from Ubuntu 22.04 LTS\nFROM ubuntu:jammy\n\n# Update OS\nRUN apt update \\\n && apt upgrade -y\n\n# Install software packages\nRUN apt install -y python3 \\\n && apt install -y python3-pip \\\n && apt install -y git \\\n && apt install -y fonts-open-sans\n\n# Install pip packages\nRUN pip3 install jupyterlab numpy scipy matplotlib\n\n# bashrc settings\nRUN echo 'alias jupyter-notebook=\"jupyter-notebook --allow-root --no-browser\"' \\\n>> $HOME/.bashrc\n\n# clone code from git repository\nWORKDIR /root\nRUN git clone https://github.com/pranabdas/arpespythontools.git\n\n# leave in `/home` which we can map with the host\nWORKDIR /home\n"})}),"\n",(0,s.jsx)(n.p,{children:"Build docker image (the file is named Dockerfile):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker build -t arptools .\n"})}),"\n",(0,s.jsx)(n.p,{children:"If the file is named other than Dockerfile:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker build -t arptools -f arptools.dockerfile .\n"})}),"\n",(0,s.jsx)(n.p,{children:"Launch:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run -ti --net=host -v /host/path:/home arptools bash\n"})}),"\n",(0,s.jsx)(n.p,{children:"Add non-root user and group:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-docker",children:"RUN groupadd -r noroot && useradd -r -g noroot noroot\n\n# make owner of certain directory / executables\nRUN chown -R noroot:noroot build_dir\n\n# set user\nUSER noroot\n"})}),"\n",(0,s.jsxs)(n.p,{children:["More details on ",(0,s.jsx)(n.code,{children:"adduser"})," (also check ",(0,s.jsx)(n.code,{children:"useradd --help"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-docker",children:'ENV NON_ROOT_USER="noroot"\nARG NON_ROOT_USER_PASSWORD="gf3r-trf5-6etd"\nENV NON_ROOT_USER_GROUP="noroot"\n\nRUN groupadd -r $NON_ROOT_USER_GROUP -g 1000 \\\n && useradd \\\n    --uid 1000 \\\n    --system \\\n    --gid $NON_ROOT_USER_GROUP \\\n    --create-home \\\n    --home-dir /home/$NON_ROOT_USER/ \\\n    --shell /bin/bash \\\n    --comment "non-root user" \\\n    $NON_ROOT_USER \\\n && chmod 755 /home/$NON_ROOT_USER/ \\\n && echo "$NON_ROOT_USER:$NON_ROOT_USER_PASSWORD" | chpasswd\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Running ",(0,s.jsx)(n.code,{children:"chown"})," on a large directory may increase the image size significantly.\nIn such case build the directory using another instance, and copy it to new\nimage using:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"COPY --chown=noroot:noroot /home/build_dir /noroot/build_dir\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"docker-hub",children:"Docker hub"}),"\n",(0,s.jsx)(n.p,{children:"Login:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo docker login docker.io\n"})}),"\n",(0,s.jsx)(n.p,{children:"Tag a local image:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo docker tag localimage:latest username/localimage:latest\n"})}),"\n",(0,s.jsx)(n.p,{children:"Push a local image:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo docker push username/localimage:latest\n"})}),"\n",(0,s.jsx)(n.h2,{id:"transferring-image-offline",children:"Transferring image offline"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker pull ubuntu\ndocker save -o ubuntu_image.docker ubuntu\ndocker load -i ubuntu_image.docker\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},5148:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/x-quartz-974150ba5bd6302e708851024e6fdb40.png"},2513:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/x-quartz-e5d9e3cd472d4f5f4f4719243b206b00.webp"},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var s=r(6540);const a={},c=s.createContext(a);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);