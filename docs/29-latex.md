---
title: LaTeX
keywords: ["latex setup", "texlive setup", "texlive installation in ubuntu", "latex installation in ubuntu"]
---

### Installation in Ubuntu/Debian

```bash
sudo apt install -y --no-install-recommends \
    texlive-latex-recommended \
    texlive-latex-extra \
    texlive-fonts-extra \
    texlive-science \
    texlive-pictures \
    texlive-luatex \
    texinfo \
    python3 \
    python3-pygments \
    ghostscript
```

### Fix beamer xcolor bug in Ubuntu 22.04

There is a beamer bug in `v3.65` (shipped with Ubuntu 22.04): named colors are
not recognized. The bug was fixed in beamer `v3.66`. Below script replaces the
buggy beamer version:

```bash
CWD=${PWD}
sudo apt install --no-install-recommends unzip wget
cd /tmp
mkdir beamer && cd $_
wget https://file-storage.github.io/downloads/beamer.tds-v3.68.zip
unzip beamer.tds-v3.68.zip
cd tex/latex
sudo mv /usr/share/texlive/texmf-dist/tex/latex/beamer /usr/share/texlive/texmf-dist/tex/latex/beamer.bak
sudo cp -a beamer /usr/share/texlive/texmf-dist/tex/latex
cd /tmp
rm -rf beamer
cd ${CWD}
```

### Misc

- Various Fira font weights: `\firathin`, `\firaultralight`, `\firaextralight`,
`\firalight`, `\firabook`, `\firamedium`, `\firasemibold`, `\firaextrabold`,
`\firaheavy`.


### Resources
- https://www.overleaf.com/learn
- https://texfaq.org/ (On [GitHub](https://github.com/texfaq))
- https://www.learnlatex.org/en/ (On [GitHub](https://github.com/learnlatex))
- https://latexcolor.com/
- https://github.com/pranabdas/LaTeX
