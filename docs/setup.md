### Setting up Linux 

Ubuntu is very stable and popular Linux operating system. Most of the packages are well supported and the community support is the best. Here I am installing the latest version of Ubuntu (20.04), and setting it up for everyday use. I am doing a minimal installation in oder to avoid some unwanted games and apps being installed. Try to use the command line tools as much as possible. Not all tasks can be done by graphical programs. Graphical programs certainly need more system resources, they have more dependencies, and therefore prone to have more bugs and security issues. Make sure that everything is up to date: 
```
sudo apt update 
sudo apt upgrade 
``` 

If you are on Fedora/CentOS/Red Hat:
```
sudo dnf up
```

It is a good idea to run above two commands every couple of days. In case you get some hash mismatch error, try the following:
```
sudo rm -rf /var/lib/apt/lists/*
sudo apt clean
```

I like Z-shell (instead of BASH) with Oh My Zsh. It has tab auto completion, better history recall, and other cool features. 
```
sudo apt install git
sudo apt install zsh
git clone https://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
sudo chsh -s /bin/zsh
exec zsh 
source ~/.zshrc
```
Go to `~/.zshrc` and uncomment 
```
export PATH=$HOME/bin:/usr/local/bin:$PATH
```
You may need to logout and log back in to take effect the full changes. These are some useful Oh My Zsh extensions:
- zsh-syntax-highlighting 
- zsh-autosuggestions

Installing fonts in Ubuntu. You can get a nice collection of fonts by installing the powerline fonts:
```
sudo apt install fonts-powerline
```

You can also manually install fonts (either .ttf or .otf) by putting them in the following path, and rebuilding the font cache:
```
mkdir ~/.local/share/fonts
fc-cache -f -v
```
[https://fonts.google.com](https://fonts.google.com){:target="_blank"} has a large collection of awesome fonts. Choose to your liking. 

If you are going to access your system remotely via SSH, install the SSH server. 
```
sudo apt install openssh-server
```

Install net-tools, gcc, gfortran, mpich, vim
```
sudo apt install net-tools
sudo apt install gcc
sudo apt install gfortran
sudo apt install mpich
sudo apt install vim
```

Others:
```
sudo apt install tree
```

Setting up Python development. It will depend on your needs.  
```
sudo apt install python3 python3-pip
pip3 install jupyterlab
pip3 install numpy scipy
pip3 install matplotlib bokeh seaborn
pip3 install pandas geopandas xlrd openpyxl
pip3 install virtualenv
```

Mkdocs:
```
pip3 install mkdocs
pip3 install mkdocs-material
```

Jekyll:
```
sudo apt install ruby-full build-essential zlib1g-dev
echo '# Install Ruby Gems to ~/gems' >> ~/.zshrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.zshrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
gem install jekyll bundler
```

Jekyll on CentOS or RHEL prerequisite:
```
sudo dnf install ruby ruby-devel
sudo dnf install gcc-c++
```

Dropbox:
```
cd ~ && wget -O - "https://www.dropbox.com/download?plat=lnx.x86_64" | tar xzf -
~/.dropbox-dist/dropboxd
```

Proton VPN:
```
sudo apt install -y openvpn dialog python3-pip python3-setuptools
sudo pip3 install protonvpn-cli
sudo protonvpn init
protonvpn c -r
protonvpn c -f
```
`-r` or `-f` flags for connecting random and fastest servers, respectively. 

**Some graphical apps:**
- Visual Studio Code
- Standard Notes

Always backup your user files (documents you create, codes you write, important notes etc.) in a safe and secure place. You may encrypt your files and upload to a cloud service. You may keep another copy in an external drive. 

**Changing hostname:**
Print the current name and other information with `hostnamectl`
```
hostnamectl --static set-hostname="ubuntu-desktop"
hostnamectl --pretty set-hostname="ubuntu-desktop"
```
You need to restart the system to take effect the changes. 

**Installing snap on RHEL:**
```
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
sudo dnf upgrade
sudo dnf install snapd
sudo systemctl enable --now snapd.socket
sudo ln -s /var/lib/snapd/snap /snap
sudo reboot
```
