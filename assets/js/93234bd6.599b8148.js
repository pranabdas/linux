"use strict";(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([[669],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),k=r,m=p["".concat(s,".").concat(k)]||p[k]||d[k]||o;return t?a.createElement(m,l(l({ref:n},u),{},{components:t})):a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=k;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},3844:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],i={title:"Docker",keywords:["docker","developer tools","container"]},s=void 0,c={unversionedId:"docker",id:"docker",title:"Docker",description:"Follow the installation instruction from [Docker website](",source:"@site/docs/docker.md",sourceDirName:".",slug:"/docker",permalink:"/linux/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/linux/blob/main/docs/docker.md",tags:[],version:"current",frontMatter:{title:"Docker",keywords:["docker","developer tools","container"]},sidebar:"docs",previous:{title:"Git",permalink:"/linux/git"},next:{title:"Shell scripting",permalink:"/linux/shell-scripting"}},u={},p=[{value:"Running GUI apps on docker",id:"running-gui-apps-on-docker",level:2},{value:"Running apache on docker",id:"running-apache-on-docker",level:2},{value:"Dockerfile",id:"dockerfile",level:2},{value:"Docker hub",id:"docker-hub",level:2},{value:"Transferring image offline",id:"transferring-image-offline",level:2}],d={toc:p},k="wrapper";function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)(k,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Follow the installation instruction from ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Docker website")," in your system. Once docker service has\nstarted, you can check:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker info\n\n# or\ndocker version\n")),(0,o.kt)("p",null,"List images:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker images\n")),(0,o.kt)("p",null,"Run an image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -ti ubuntu:latest bash\ndocker run <image-id>\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-ti")," stands for terminal interactive. If the image is not present locally, it\nwill pull from the docker hub. Alternatively, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"docker pull")," to\ndownload locally an image prior to running."),(0,o.kt)("p",null,"List docker process:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# running containers\ndocker ps\n\n# all containers\ndocker ps -a\n\n# last exited container\ndocker ps -l\n")),(0,o.kt)("p",null,"Create images from container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker commit <container-id>\n")),(0,o.kt)("p",null,"Give a name to the image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker tag <SHA-256-image-id> <my-image-name>\n")),(0,o.kt)("p",null,"We can assign name at the same time with commit:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker commit <container-id> <image-name>\n")),(0,o.kt)("p",null,"This will save the state of the container in the latest image."),(0,o.kt)("p",null,"Start a detached container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d -ti ubuntu:latest bash\n")),(0,o.kt)("p",null,"Attach running detached container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker attach <container-name-or-id>\n")),(0,o.kt)("p",null,"Exit from the docker container without killing the process: ","[control]"," + ","[P]",",\n","[control]"," + ","[Q]"),(0,o.kt)("p",null,"Sharing volumes (shared folder with the host):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -v /home/host/docs:/home -ti centos bash\ndocker run -v ${PWD}:/home -ti ubuntu bash\n")),(0,o.kt)("p",null,"Check docker storage usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker system df\n")),(0,o.kt)("p",null,"Remove build cache:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker builder prune\n")),(0,o.kt)("p",null,"Delete container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm <id-or-name>\n")),(0,o.kt)("p",null,"Delete all idle containers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker container prune\n")),(0,o.kt)("p",null,"Delete images:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker rmi <image-name>\n")),(0,o.kt)("p",null,"Reclaim space immediately (otherwise it may take several minutes to reflect\nstorage space after a cleanup operation):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --privileged --pid=host --rm docker/desktop-reclaim-space\n")),(0,o.kt)("p",null,"Delete all the stopped containers and images:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker system prune -a\n")),(0,o.kt)("p",null,"Run and remove when docker instance exits:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm <image-name>\n")),(0,o.kt)("p",null,"Use host network:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --net=host centos bash\n")),(0,o.kt)("p",null,"Port forwarding:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -ti -p 8888:8888 -v ${PWD}:/home jupyter bash\n")),(0,o.kt)("p",null,"Set MAC address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --mac-address 02:42:ac:11:0d:11 ubuntu bash\n")),(0,o.kt)("p",null,"You can also pass environment variables with ",(0,o.kt)("inlineCode",{parentName:"p"},"-e")," flag, e.g.,",(0,o.kt)("inlineCode",{parentName:"p"},"-e LANG=C.UTF-8"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"-e TZ=Asia/Singapore"),". You can pass multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"-e")," flags to pass multiple such\nvariables."),(0,o.kt)("h2",{id:"running-gui-apps-on-docker"},"Running GUI apps on docker"),(0,o.kt)("p",null,"First we need to install a X-window system. On linux, we can choose X11. On\nmacOS ",(0,o.kt)("a",{parentName:"p",href:"https://www.xquartz.org"},"X-Quartz"),", on Windows ",(0,o.kt)("a",{parentName:"p",href:"https://sourceforge.net/projects/xming/"},"xming"),". On macOS, once you launch XQuartz (you\nmay launch for terminal by ",(0,o.kt)("inlineCode",{parentName:"p"},"open -a XQuartz"),"), issue ",(0,o.kt)("inlineCode",{parentName:"p"},"xhost +"),". More about\nX-window system ",(0,o.kt)("a",{parentName:"p",href:"https://developer.ibm.com/technologies/linux/tutorials/l-lpic1-106-1/"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# macOS\ndocker run --rm -tid -e DISPLAY=docker.for.mac.host.internal:0 ubuntu firefox\n\n# linux\ndocker run --rm -tid --net=host -e DISPLAY=:0 ubuntu firefox\n\n# Windows\ndocker run --rm -tid -e DISPLAY=host.docker.internal:0 ubuntu firefox\n")),(0,o.kt)("p",null,"I assumed you have the X version of firefox is installed in the ubuntu image."),(0,o.kt)("h2",{id:"running-apache-on-docker"},"Running apache on docker"),(0,o.kt)("p",null,"Here we will install centos docker image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull centos\n")),(0,o.kt)("p",null,"Run docker:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -ti centos bash\n")),(0,o.kt)("p",null,"Once inside centos update the os:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dnf up\n")),(0,o.kt)("p",null,"Install apache:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install httpd\nexit\ndocker commit <container-id> centos\ndocker run --net=host centos httpd -D FOREGROUND &\n")),(0,o.kt)("p",null,"Now if you browse your host IP address you should be able to view the default\nwebsite. We can stop the httpd, by killing the container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\ndocker kill <container-id>\n")),(0,o.kt)("h2",{id:"dockerfile"},"Dockerfile"),(0,o.kt)("p",null,"Write the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"# Start from Ubuntu 20.04 LTS\nFROM ubuntu:focal\n\n# Update OS\nRUN apt update \\\n && apt upgrade -y\n\n# Install software packages\nRUN apt install -y python3 \\\n && apt install -y python3-pip \\\n && apt install -y git \\\n && apt install -y fonts-open-sans\n\n# Install pip packages\nRUN pip3 install jupyterlab numpy scipy matplotlib\n\n# bashrc settings\nRUN echo 'alias jupyter-notebook=\"jupyter-notebook --allow-root --no-browser\"' \\\n>> $HOME/.bashrc\n\n# clone code from git repository\nWORKDIR /root\nRUN git clone https://github.com/pranabdas/arpespythontools.git\n\n# leave in `/home` which we can map with the host\nWORKDIR /home\n")),(0,o.kt)("p",null,"Build docker image (the file is named Dockerfile):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t arptools .\n")),(0,o.kt)("p",null,"If the file is named other than Dockerfile:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t arptools -f arptools.dockerfile .\n")),(0,o.kt)("p",null,"Launch:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -ti --net=host -v /host/path:/home arptools bash\n")),(0,o.kt)("p",null,"Add non-root user and group:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"RUN groupadd -r noroot && useradd -r -g noroot noroot\n\n# make owner of certain directory / executables\nRUN chown -R noroot:noroot build_dir\n\n# set user\nUSER noroot\n")),(0,o.kt)("p",null,"More details on ",(0,o.kt)("inlineCode",{parentName:"p"},"adduser")," (also check ",(0,o.kt)("inlineCode",{parentName:"p"},"useradd --help"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},'ENV NON_ROOT_USER="noroot"\nARG NON_ROOT_USER_PASSWORD="gf3r-trf5-6etd"\nENV NON_ROOT_USER_GROUP="noroot"\n\nRUN groupadd -r $NON_ROOT_USER_GROUP -g 1000 \\\n && useradd \\\n    --uid 1000 \\\n    --system \\\n    --gid $NON_ROOT_USER_GROUP \\\n    --create-home \\\n    --home-dir /home/$NON_ROOT_USER/ \\\n    --shell /bin/bash \\\n    --comment "non-root user" \\\n    $NON_ROOT_USER \\\n && chmod 755 /home/$NON_ROOT_USER/ \\\n && echo "$NON_ROOT_USER:$NON_ROOT_USER_PASSWORD" | chpasswd\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"chown")," on a large directory may increase the image size significantly.\nIn such case build the directory using another instance, and copy it to new\nimage using:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"COPY --chown=noroot:noroot /home/build_dir /noroot/build_dir\n"))),(0,o.kt)("h2",{id:"docker-hub"},"Docker hub"),(0,o.kt)("p",null,"Login:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker login docker.io\n")),(0,o.kt)("p",null,"Tag a local image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker tag localimage:latest username/localimage:latest\n")),(0,o.kt)("p",null,"Push a local image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker push username/localimage:latest\n")),(0,o.kt)("h2",{id:"transferring-image-offline"},"Transferring image offline"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ubuntu\ndocker save -o ubuntu_image.docker ubuntu\ndocker load -i ubuntu_image.docker\n")))}m.isMDXComponent=!0}}]);