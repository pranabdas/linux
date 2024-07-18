# Build command  : docker build -t latex -f latex.dockerfile .
# Run docker     : docker run -ti -v ${PWD}:/home latex bash
#                : docker run -ti --rm -v ${PWD}:/home latex pdflatex main.tex

FROM fedora

RUN dnf up -y && dnf in -y texlive-scheme-basic \
    'tex(beamer.cls)' \
    'tex(beamerthememetropolis.sty)' \
# fonts
    'tex(universalis.sty)' \
    'tex(sourcesanspro.sty)' 'tex(ly1enc.def)' \
    'tex(duerer.sty)' \
# styling
    'tex(appendix.sty)' \
    'tex(lastpage.sty)' \
    'tex(microtype.sty)' \
    'tex(titling.sty)' \
    'tex(ifoddpage.sty)' \
    'tex(appendixnumberbeamer.sty)' \
# math packages
    'tex(mathtools.sty)' \
    'tex(algorithm2e.sty)' \
# graphics
#    'tex(ccicons.sty)' \
#    'tex(qrcode.sty)' \
    'tex(tikzpagenodes.sty)'
# tables
#    'tex(multirow.sty)' \
# code highlight
#    'tex(minted.sty)'

# leave in `/home` which we can map with the host
WORKDIR /home
