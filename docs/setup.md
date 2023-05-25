---
title: Setting up Linux
sidebar_label: Linux setup
---

Specifically, here we will install Ubuntu. Ubuntu is very stable and popular
Linux operating system. Most of the packages are well supported and the
community support is the best. Here I am installing the latest version of Ubuntu
(20.04 LTS), and setting it up for everyday use. I am doing a minimal
installation in oder to avoid some unwanted games and apps being installed. Try
to use the command line tools as much as possible. Not all tasks can be done by
graphical programs. Graphical programs certainly need more system resources,
they have more dependencies, and therefore prone to have more bugs and security
issues. I will use the minimal network boot ISO for installation.

Get the minimal ISO of [Ubuntu 20.04 here](
http://archive.ubuntu.com/ubuntu/dists/focal/main/installer-amd64/current/legacy-images/netboot/mini.iso).

During installation, I selected:

- Text interface for installation
- Default filesystem partition
- No automatic updates
- Ubuntu minimal desktop only

Once boot into the system, make sure everything is up to date:
```bash
sudo apt update && sudo apt upgrade
```

Install essentials:
```bash
sudo apt install --no-install-recommends \
    build-essential \
    git \
    vim \
    wget
```

Oh-my-bash: <https://github.com/ohmybash/oh-my-bash>
```bash
git clone https://github.com/ohmybash/oh-my-bash.git ~/.oh-my-bash
```

Append the following to your `.bashrc`:
```bash
export OSH=$HOME/.oh-my-bash
OSH_THEME="standard"
DISABLE_AUTO_UPDATE="true"

completions=(
  git
  composer
  ssh
)

aliases=(
  general
)

plugins=(
  git
  bashmarks
)

source $OSH/oh-my-bash.sh
```

Terminal size: 96 by 30 col. Text and background color: gray on black, Palette:
solarized.

### Installing fonts in Ubuntu / Debian

You can get a nice collection of fonts by installing the powerline fonts:
```bash
sudo apt install fonts-powerline
```

You can also manually install fonts (either .ttf or .otf) by putting them in the
following path, and rebuilding the font cache:
```bash
mkdir ~/.local/share/fonts
sudo fc-cache -f -v ~/.local/share/fonts
```
<https://fonts.google.com> has a large collection of awesome fonts. Choose to
your liking.

If you are going to access your system remotely via SSH, install the SSH server.
```bash
sudo apt install openssh-server
```

### Python packages
Setting up Python development. It will depend on your needs though.
```bash
sudo apt install python3 python3-pip
pip3 install jupyterlab \
    numpy \
    scipy \
    matplotlib \
    bokeh \
    seaborn \
    pandas \
    geopandas \
    xlrd \
    openpyxl \
    virtualenv
```

Append following to your `.bashrc`:
```bash
export PATH="/home/<username>/.local/bin:$PATH"
```

### Mkdocs
```bash
pip3 install mkdocs mkdocs-material
```

### Nodejs
Your package manager might have older version of nodejs, in order install the
current LTS version:
```bash
wget -O - https://deb.nodesource.com/setup_lts.x | bash - && \
apt update && apt install -y --no-install-recommends nodejs
```

### Jekyll
```bash
sudo apt install ruby-full build-essential zlib1g-dev
echo '# Install Ruby Gems to ~/gems' >> ~/.zshrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.zshrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
gem install jekyll bundler
```

**Jekyll on CentOS or RHEL prerequisite:**
```bash
sudo dnf install ruby ruby-devel
sudo dnf install gcc-c++
```

### Dropbox
```bash
cd ~ && wget -O - "https://www.dropbox.com/download?plat=lnx.x86_64" | tar xzf -
~/.dropbox-dist/dropboxd
```

### Proton VPN
```bash
sudo apt install -y openvpn dialog python3-pip python3-setuptools
sudo pip3 install protonvpn-cli
sudo protonvpn init
protonvpn c -r
protonvpn c -f
```
`-r` or `-f` flags for connecting random and fastest servers, respectively.

### Zsh

You may try Z-shell (instead of BASH) with Oh My Zsh. It has tab auto
completion, better history recall, and other cool features.
```bash
sudo apt install git
sudo apt install zsh
git clone https://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
sudo chsh -s /bin/zsh
exec zsh
source ~/.zshrc
```

Go to `~/.zshrc` and uncomment
```bash
export PATH=$HOME/bin:/usr/local/bin:$PATH
```
You may need to logout and log back in to take effect the full changes. These
are some useful Oh My Zsh extensions:

- zsh-syntax-highlighting
- zsh-autosuggestions

### Graphical apps

- Visual Studio Code
- Standard Notes

Always backup your user files (documents you create, codes you write, important
notes etc.) in a safe and secure place. You may encrypt your files and upload to
a cloud service. You may keep another copy in an external drive.

### Changing hostname
Print the current name and other information with `hostnamectl`
```bash
hostnamectl --static set-hostname="ubuntu-work"
hostnamectl --pretty set-hostname="ubuntu-work"
```
You need to restart the system to take effect the changes.

### Finding dependencies in apt
```bash
apt-cache depends <package-name>
```

### Installing snap on RHEL
```bash
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
sudo dnf upgrade
sudo dnf install snapd
sudo systemctl enable --now snapd.socket
sudo ln -s /var/lib/snapd/snap /snap
sudo reboot
```
