"use strict";(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([[581],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(t),m=l,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return t?a.createElement(h,s(s({ref:n},u),{},{components:t})):a.createElement(h,s({ref:n},u))}));function h(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,s=new Array(o);s[0]=m;var r={};for(var i in n)hasOwnProperty.call(n,i)&&(r[i]=n[i]);r.originalType=e,r[c]="string"==typeof e?e:l,s[1]=r;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1959:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return c}});var a=t(7462),l=t(3366),o=(t(7294),t(3905)),s=["components"],r={title:"Setting up Linux",sidebar_label:"Setup related"},i=void 0,p={unversionedId:"setup",id:"setup",title:"Setting up Linux",description:"Specifically, here we will install Ubuntu. Ubuntu is very stable and popular",source:"@site/docs/setup.md",sourceDirName:".",slug:"/setup",permalink:"/linux/setup",draft:!1,editUrl:"https://github.com/pranabdas/linux/blob/main/docs/setup.md",tags:[],version:"current",frontMatter:{title:"Setting up Linux",sidebar_label:"Setup related"},sidebar:"docs",previous:{title:"gnuplot",permalink:"/linux/gnuplot"},next:{title:"Filesystem",permalink:"/linux/filesystem"}},u={},c=[{value:"Installing fonts in Ubuntu / Debian",id:"installing-fonts-in-ubuntu--debian",level:3},{value:"Python packages",id:"python-packages",level:3},{value:"Mkdocs",id:"mkdocs",level:3},{value:"Nodejs",id:"nodejs",level:3},{value:"Jekyll",id:"jekyll",level:3},{value:"Dropbox",id:"dropbox",level:3},{value:"Proton VPN",id:"proton-vpn",level:3},{value:"Zsh",id:"zsh",level:3},{value:"Graphical apps",id:"graphical-apps",level:3},{value:"Changing hostname",id:"changing-hostname",level:3},{value:"Finding dependencies in apt",id:"finding-dependencies-in-apt",level:3},{value:"Installing snap on RHEL",id:"installing-snap-on-rhel",level:3}],d={toc:c};function m(e){var n=e.components,t=(0,l.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Specifically, here we will install Ubuntu. Ubuntu is very stable and popular\nLinux operating system. Most of the packages are well supported and the\ncommunity support is the best. Here I am installing the latest version of Ubuntu\n(20.04 LTS), and setting it up for everyday use. I am doing a minimal\ninstallation in oder to avoid some unwanted games and apps being installed. Try\nto use the command line tools as much as possible. Not all tasks can be done by\ngraphical programs. Graphical programs certainly need more system resources,\nthey have more dependencies, and therefore prone to have more bugs and security\nissues. I will use the minimal network boot ISO for installation."),(0,o.kt)("p",null,"Get the minimal ISO of ",(0,o.kt)("a",{parentName:"p",href:"http://archive.ubuntu.com/ubuntu/dists/focal/main/installer-amd64/current/legacy-images/netboot/mini.iso"},"Ubuntu 20.04 here"),"."),(0,o.kt)("p",null,"During installation, I selected:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Text interface for installation"),(0,o.kt)("li",{parentName:"ul"},"Default filesystem partition"),(0,o.kt)("li",{parentName:"ul"},"No automatic updates"),(0,o.kt)("li",{parentName:"ul"},"Ubuntu minimal desktop only")),(0,o.kt)("p",null,"Once boot into the system, make sure everything is up to date:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update && sudo apt upgrade\n")),(0,o.kt)("p",null,"Install essentials:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install --no-install-recommends \\\n    build-essential \\\n    git \\\n    vim \\\n    wget\n")),(0,o.kt)("p",null,"Oh-my-bash: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ohmybash/oh-my-bash"},"https://github.com/ohmybash/oh-my-bash")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git://github.com/ohmybash/oh-my-bash.git ~/.oh-my-bash\n")),(0,o.kt)("p",null,"Append the following to your ",(0,o.kt)("inlineCode",{parentName:"p"},".bashrc"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export OSH=$HOME/.oh-my-bash\nOSH_THEME="standard"\nDISABLE_AUTO_UPDATE="true"\n\ncompletions=(\n  git\n  composer\n  ssh\n)\n\naliases=(\n  general\n)\n\nplugins=(\n  git\n  bashmarks\n)\n\nsource $OSH/oh-my-bash.sh\n')),(0,o.kt)("p",null,"Terminal size: 96 by 30 col. Text and background color: gray on black, Palette:\nsolarized."),(0,o.kt)("h3",{id:"installing-fonts-in-ubuntu--debian"},"Installing fonts in Ubuntu / Debian"),(0,o.kt)("p",null,"You can get a nice collection of fonts by installing the powerline fonts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install fonts-powerline\n")),(0,o.kt)("p",null,"You can also manually install fonts (either .ttf or .otf) by putting them in the\nfollowing path, and rebuilding the font cache:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/.local/share/fonts\nsudo fc-cache -f -v ~/.local/share/fonts\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://fonts.google.com"},"https://fonts.google.com")," has a large collection of awesome fonts. Choose to\nyour liking."),(0,o.kt)("p",null,"If you are going to access your system remotely via SSH, install the SSH server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install openssh-server\n")),(0,o.kt)("h3",{id:"python-packages"},"Python packages"),(0,o.kt)("p",null,"Setting up Python development. It will depend on your needs though."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install python3 python3-pip\npip3 install jupyterlab \\\n    numpy \\\n    scipy \\\n    matplotlib \\\n    bokeh \\\n    seaborn \\\n    pandas \\\n    geopandas \\\n    xlrd \\\n    openpyxl \\\n    virtualenv\n")),(0,o.kt)("p",null,"Append following to your ",(0,o.kt)("inlineCode",{parentName:"p"},".bashrc"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export PATH="/home/<username>/.local/bin:$PATH"\n')),(0,o.kt)("h3",{id:"mkdocs"},"Mkdocs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install mkdocs mkdocs-material\n")),(0,o.kt)("h3",{id:"nodejs"},"Nodejs"),(0,o.kt)("p",null,"Your package manager might have older version of nodejs, in order install the\ncurrent LTS version:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget -O - https://deb.nodesource.com/setup_lts.x | bash - && \\\napt update && apt install -y --no-install-recommends nodejs\n")),(0,o.kt)("h3",{id:"jekyll"},"Jekyll"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install ruby-full build-essential zlib1g-dev\necho '# Install Ruby Gems to ~/gems' >> ~/.zshrc\necho 'export GEM_HOME=\"$HOME/gems\"' >> ~/.zshrc\necho 'export PATH=\"$HOME/gems/bin:$PATH\"' >> ~/.zshrc\nsource ~/.zshrc\ngem install jekyll bundler\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Jekyll on CentOS or RHEL prerequisite:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install ruby ruby-devel\nsudo dnf install gcc-c++\n")),(0,o.kt)("h3",{id:"dropbox"},"Dropbox"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cd ~ && wget -O - "https://www.dropbox.com/download?plat=lnx.x86_64" | tar xzf -\n~/.dropbox-dist/dropboxd\n')),(0,o.kt)("h3",{id:"proton-vpn"},"Proton VPN"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install -y openvpn dialog python3-pip python3-setuptools\nsudo pip3 install protonvpn-cli\nsudo protonvpn init\nprotonvpn c -r\nprotonvpn c -f\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-r")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"-f")," flags for connecting random and fastest servers, respectively."),(0,o.kt)("h3",{id:"zsh"},"Zsh"),(0,o.kt)("p",null,"You may try Z-shell (instead of BASH) with Oh My Zsh. It has tab auto\ncompletion, better history recall, and other cool features."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install git\nsudo apt install zsh\ngit clone https://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh\ncp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc\nsudo chsh -s /bin/zsh\nexec zsh\nsource ~/.zshrc\n")),(0,o.kt)("p",null,"Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," and uncomment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=$HOME/bin:/usr/local/bin:$PATH\n")),(0,o.kt)("p",null,"You may need to logout and log back in to take effect the full changes. These\nare some useful Oh My Zsh extensions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"zsh-syntax-highlighting"),(0,o.kt)("li",{parentName:"ul"},"zsh-autosuggestions")),(0,o.kt)("h3",{id:"graphical-apps"},"Graphical apps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Visual Studio Code"),(0,o.kt)("li",{parentName:"ul"},"Standard Notes")),(0,o.kt)("p",null,"Always backup your user files (documents you create, codes you write, important\nnotes etc.) in a safe and secure place. You may encrypt your files and upload to\na cloud service. You may keep another copy in an external drive."),(0,o.kt)("h3",{id:"changing-hostname"},"Changing hostname"),(0,o.kt)("p",null,"Print the current name and other information with ",(0,o.kt)("inlineCode",{parentName:"p"},"hostnamectl")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'hostnamectl --static set-hostname="ubuntu-work"\nhostnamectl --pretty set-hostname="ubuntu-work"\n')),(0,o.kt)("p",null,"You need to restart the system to take effect the changes."),(0,o.kt)("h3",{id:"finding-dependencies-in-apt"},"Finding dependencies in apt"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt-cache depends <package-name>\n")),(0,o.kt)("h3",{id:"installing-snap-on-rhel"},"Installing snap on RHEL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm\nsudo dnf upgrade\nsudo dnf install snapd\nsudo systemctl enable --now snapd.socket\nsudo ln -s /var/lib/snapd/snap /snap\nsudo reboot\n")))}m.isMDXComponent=!0}}]);