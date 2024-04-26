"use strict";(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([[214],{1111:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=s(4848),t=s(8453);const l={title:"Setting up Linux",sidebar_label:"Linux setup"},o=void 0,i={id:"setup",title:"Setting up Linux",description:"Specifically, here we will install Ubuntu. Ubuntu is very stable and popular",source:"@site/docs/setup.md",sourceDirName:".",slug:"/setup",permalink:"/linux/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/linux/blob/main/docs/setup.md",tags:[],version:"current",frontMatter:{title:"Setting up Linux",sidebar_label:"Linux setup"},sidebar:"docs",previous:{title:"Misc",permalink:"/linux/category/misc"},next:{title:"PGP Encryption",permalink:"/linux/pgp"}},r={},c=[{value:"Installing fonts in Ubuntu/Debian",id:"installing-fonts-in-ubuntudebian",level:3},{value:"Python packages",id:"python-packages",level:3},{value:"Mkdocs",id:"mkdocs",level:3},{value:"Nodejs",id:"nodejs",level:3},{value:"Jekyll",id:"jekyll",level:3},{value:"Dropbox",id:"dropbox",level:3},{value:"Proton VPN",id:"proton-vpn",level:3},{value:"Zsh",id:"zsh",level:3},{value:"Graphical apps",id:"graphical-apps",level:3},{value:"Changing hostname",id:"changing-hostname",level:3},{value:"Finding dependencies in apt",id:"finding-dependencies-in-apt",level:3},{value:"Installing snap on RHEL",id:"installing-snap-on-rhel",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Specifically, here we will install Ubuntu. Ubuntu is very stable and popular\nLinux operating system. Most of the packages are well supported and the\ncommunity support is the best. Here I am installing the latest version of Ubuntu\n(20.04 LTS), and setting it up for everyday use. I am doing a minimal\ninstallation in oder to avoid some unwanted games and apps being installed. Try\nto use the command line tools as much as possible. Not all tasks can be done by\ngraphical programs. Graphical programs certainly need more system resources,\nthey have more dependencies, and therefore prone to have more bugs and security\nissues. I will use the minimal network boot ISO for installation."}),"\n",(0,a.jsxs)(n.p,{children:["Get the minimal ISO of ",(0,a.jsx)(n.a,{href:"http://archive.ubuntu.com/ubuntu/dists/focal/main/installer-amd64/current/legacy-images/netboot/mini.iso",children:"Ubuntu 20.04 here"}),".\nFor newer versions, the minimal ISO images are no longer maintained, you may try\n",(0,a.jsx)(n.a,{href:"https://ubuntu.com/download/server",children:"server image"})," instead."]}),"\n",(0,a.jsx)(n.p,{children:"During installation, I selected:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Text interface for installation"}),"\n",(0,a.jsx)(n.li,{children:"Default filesystem partition"}),"\n",(0,a.jsx)(n.li,{children:"No automatic updates"}),"\n",(0,a.jsx)(n.li,{children:"Ubuntu minimal desktop only"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Once boot into the system, make sure everything is up to date:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt update && sudo apt upgrade\n"})}),"\n",(0,a.jsx)(n.p,{children:"Install essentials:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt install --no-install-recommends \\\n  build-essential \\\n  git \\\n  vim \\\n  wget\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Oh-my-bash: ",(0,a.jsx)(n.a,{href:"https://github.com/ohmybash/oh-my-bash",children:"https://github.com/ohmybash/oh-my-bash"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/ohmybash/oh-my-bash.git ~/.oh-my-bash\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Append the following to your ",(0,a.jsx)(n.code,{children:".bashrc"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'export OSH=$HOME/.oh-my-bash\nOSH_THEME="standard"\nDISABLE_AUTO_UPDATE="true"\n\ncompletions=(\n  git\n  composer\n  ssh\n)\n\naliases=(\n  general\n)\n\nplugins=(\n  git\n  bashmarks\n)\n\nsource $OSH/oh-my-bash.sh\n'})}),"\n",(0,a.jsx)(n.p,{children:"Terminal size: 96 by 30 col. Text and background color: gray on black, Palette:\nsolarized."}),"\n",(0,a.jsx)(n.h3,{id:"installing-fonts-in-ubuntudebian",children:"Installing fonts in Ubuntu/Debian"}),"\n",(0,a.jsx)(n.p,{children:"You can get a nice collection of fonts by installing the powerline fonts:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt install fonts-powerline\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can also manually install fonts (either .ttf or .otf) by putting them in the\nfollowing path, and rebuilding the font cache:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mkdir ~/.local/share/fonts\nsudo fc-cache -f -v ~/.local/share/fonts\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://fonts.google.com",children:"https://fonts.google.com"})," has a large collection of awesome fonts. Choose to\nyour liking."]}),"\n",(0,a.jsx)(n.p,{children:"If you are going to access your system remotely via SSH, install the SSH server."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt install openssh-server\n"})}),"\n",(0,a.jsx)(n.h3,{id:"python-packages",children:"Python packages"}),"\n",(0,a.jsx)(n.p,{children:"Setting up Python development. It will depend on your needs though."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt install python3 python3-pip\npip3 install jupyterlab \\\n    numpy \\\n    scipy \\\n    matplotlib \\\n    bokeh \\\n    seaborn \\\n    pandas \\\n    geopandas \\\n    xlrd \\\n    openpyxl \\\n    virtualenv\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Append following to your ",(0,a.jsx)(n.code,{children:".bashrc"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'export PATH="/home/<username>/.local/bin:$PATH"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"mkdocs",children:"Mkdocs"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pip3 install mkdocs mkdocs-material\n"})}),"\n",(0,a.jsx)(n.h3,{id:"nodejs",children:"Nodejs"}),"\n",(0,a.jsx)(n.p,{children:"Your package manager might have older version of nodejs, in order install the\ncurrent LTS version:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'sudo apt-get update && sudo apt-get install -y ca-certificates curl gnupg\ncurl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg\nNODE_MAJOR=20\necho "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list\nsudo apt-get update && sudo apt-get install nodejs -y\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Find more details ",(0,a.jsx)(n.a,{href:"https://deb.nodesource.com",children:"here"})," and ",(0,a.jsx)(n.a,{href:"https://github.com/nodesource/distributions",children:"here"})]}),"\n",(0,a.jsx)(n.h3,{id:"jekyll",children:"Jekyll"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt install ruby-full build-essential zlib1g-dev\necho '# Install Ruby Gems to ~/gems' >> ~/.zshrc\necho 'export GEM_HOME=\"$HOME/gems\"' >> ~/.zshrc\necho 'export PATH=\"$HOME/gems/bin:$PATH\"' >> ~/.zshrc\nsource ~/.zshrc\ngem install jekyll bundler\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Jekyll on CentOS or RHEL prerequisite:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo dnf install ruby ruby-devel\nsudo dnf install gcc-c++\n"})}),"\n",(0,a.jsx)(n.h3,{id:"dropbox",children:"Dropbox"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'cd ~ && wget -O - "https://www.dropbox.com/download?plat=lnx.x86_64" | tar xzf -\n~/.dropbox-dist/dropboxd\n'})}),"\n",(0,a.jsx)(n.h3,{id:"proton-vpn",children:"Proton VPN"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt install -y openvpn dialog python3-pip python3-setuptools\nsudo pip3 install protonvpn-cli\nsudo protonvpn init\nprotonvpn c -r\nprotonvpn c -f\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"-r"})," or ",(0,a.jsx)(n.code,{children:"-f"})," flags for connecting random and fastest servers, respectively."]}),"\n",(0,a.jsx)(n.h3,{id:"zsh",children:"Zsh"}),"\n",(0,a.jsx)(n.p,{children:"You may try Z-shell (instead of BASH) with Oh My Zsh. It has tab auto\ncompletion, better history recall, and other cool features."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt install git\nsudo apt install zsh\ngit clone https://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh\ncp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc\nsudo chsh -s /bin/zsh\nexec zsh\nsource ~/.zshrc\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Go to ",(0,a.jsx)(n.code,{children:"~/.zshrc"})," and uncomment"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"export PATH=$HOME/bin:/usr/local/bin:$PATH\n"})}),"\n",(0,a.jsx)(n.p,{children:"You may need to logout and log back in to take effect the full changes. These\nare some useful Oh My Zsh extensions:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"zsh-syntax-highlighting"}),"\n",(0,a.jsx)(n.li,{children:"zsh-autosuggestions"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"graphical-apps",children:"Graphical apps"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Visual Studio Code"}),"\n",(0,a.jsx)(n.li,{children:"Standard Notes"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Always backup your user files (documents you create, codes you write, important\nnotes etc.) in a safe and secure place. You may encrypt your files and upload to\na cloud service. You may keep another copy in an external drive."}),"\n",(0,a.jsx)(n.h3,{id:"changing-hostname",children:"Changing hostname"}),"\n",(0,a.jsxs)(n.p,{children:["Print the current name and other information with ",(0,a.jsx)(n.code,{children:"hostnamectl"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'hostnamectl --static set-hostname="ubuntu-work"\nhostnamectl --pretty set-hostname="ubuntu-work"\n'})}),"\n",(0,a.jsx)(n.p,{children:"You need to restart the system to take effect the changes."}),"\n",(0,a.jsx)(n.h3,{id:"finding-dependencies-in-apt",children:"Finding dependencies in apt"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"apt-cache depends <package-name>\n"})}),"\n",(0,a.jsx)(n.h3,{id:"installing-snap-on-rhel",children:"Installing snap on RHEL"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm\nsudo dnf upgrade\nsudo dnf install snapd\nsudo systemctl enable --now snapd.socket\nsudo ln -s /var/lib/snapd/snap /snap\nsudo reboot\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var a=s(6540);const t={},l=a.createContext(t);function o(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);