"use strict";(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([[637],{7449:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var t=s(5893),l=s(1151);const a={title:"gnuplot"},c=void 0,i={id:"gnuplot",title:"gnuplot",description:"Installation",source:"@site/docs/gnuplot.md",sourceDirName:".",slug:"/gnuplot",permalink:"/linux/gnuplot",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/linux/blob/main/docs/gnuplot.md",tags:[],version:"current",frontMatter:{title:"gnuplot"},sidebar:"docs",previous:{title:"PGP Encryption",permalink:"/linux/pgp"},next:{title:"Filesystem",permalink:"/linux/filesystem"}},o={},p=[{value:"Installation",id:"installation",level:2},{value:"Basic plotting",id:"basic-plotting",level:2},{value:"Two dependent y-axes",id:"two-dependent-y-axes",level:3},{value:"Sample size",id:"sample-size",level:3},{value:"Resources",id:"resources",level:2}];function r(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"On Ubuntu/Debian:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"apt install gnuplot\n"})}),"\n",(0,t.jsx)(n.p,{children:"On macOS:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"brew install aquaterm --cask\nbrew install gnuplot --with-aquaterm --with-qt5\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now you can access gnuplot by ",(0,t.jsx)(n.code,{children:"gnuplot"})," command on the terminal."]}),"\n",(0,t.jsx)(n.h2,{id:"basic-plotting",children:"Basic plotting"}),"\n",(0,t.jsx)(n.p,{children:"Plot a function:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gnuplot> plot besj0(x)\n"})}),"\n",(0,t.jsxs)("picture",{children:[(0,t.jsx)("source",{type:"image/webp",srcSet:s(6948).Z}),(0,t.jsx)("img",{src:s(1931).Z,alt:"gnuplot-01"})]}),"\n",(0,t.jsx)(n.p,{children:"Maybe you want fix the x-range:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gnuplot> plot [-pi:pi] sin(x)\n"})}),"\n",(0,t.jsxs)("picture",{children:[(0,t.jsx)("source",{type:"image/webp",srcSet:s(2944).Z}),(0,t.jsx)("img",{src:s(142).Z,alt:"gnuplot-02"})]}),"\n",(0,t.jsx)(n.p,{children:"Maybe you want fix both x and y-range:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gnuplot> plot [-pi:pi] [-1.2:1.5] sin(x)\n"})}),"\n",(0,t.jsxs)("picture",{children:[(0,t.jsx)("source",{type:"image/webp",srcSet:s(2148).Z}),(0,t.jsx)("img",{src:s(242).Z,alt:"gnuplot-03"})]}),"\n",(0,t.jsx)(n.p,{children:"Plotting multiple functions at the same time:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gnuplot> plot sin(x), besj0(x)\n"})}),"\n",(0,t.jsxs)("picture",{children:[(0,t.jsx)("source",{type:"image/webp",srcSet:s(9157).Z}),(0,t.jsx)("img",{src:s(7275).Z,alt:"gnuplot-04"})]}),"\n",(0,t.jsx)(n.p,{children:"Making surface plot"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gnuplot> splot x**2+y**2\n"})}),"\n",(0,t.jsxs)("picture",{children:[(0,t.jsx)("source",{type:"image/webp",srcSet:s(2912).Z}),(0,t.jsx)("img",{src:s(4336).Z,alt:"gnuplot-05"})]}),"\n",(0,t.jsx)(n.p,{children:"Making things look prettier, setting grid:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gnuplot> set grid\ngnuplot> plot sin(x)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["you may use ",(0,t.jsx)(n.code,{children:"replot"})," to plot previous plot"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gnuplot> set grid\ngnuplot> set xlabel \u201cTheta\u201d\ngnuplot> set ylabel \u201cSin(Theta)\u201d\ngnuplot> set title \u201cTheta vs. Sin(theta)\u201d\ngnuplot> replot\n"})}),"\n",(0,t.jsxs)("picture",{children:[(0,t.jsx)("source",{type:"image/webp",srcSet:s(7401).Z}),(0,t.jsx)("img",{src:s(5445).Z,alt:"gnuplot-06"})]}),"\n",(0,t.jsx)(n.p,{children:"Plotting data from file (the file contains two column data)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'gnuplot> plot "file.txt"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Specify columns to plot"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'gnuplot> plot "file.txt" u 1:2\n'})}),"\n",(0,t.jsx)(n.p,{children:"You can combine function plot with plot using data files"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'gnuplot> plot "file.txt", sin(x)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"two-dependent-y-axes",children:"Two dependent y-axes"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'gnuplot> set terminal aqua font "Segue UI Light, 16"\ngnuplot> set ytics nomirror\ngnuplot> set y2tics -50, 50\ngnuplot> plot sin(1/x) axis x1y1, 100*besj0(x) axis x1y2\ngnuplot> set ytics -1, 0.5\ngnuplot> set ylabel "Y1"\ngnuplot> set y2label "Y2"\ngnuplot> set xlabel "X"\ngnuplot> replot\n'})}),"\n",(0,t.jsxs)("picture",{children:[(0,t.jsx)("source",{type:"image/webp",srcSet:s(8481).Z}),(0,t.jsx)("img",{src:s(2930).Z,alt:"gnuplot-07"})]}),"\n",(0,t.jsx)(n.h3,{id:"sample-size",children:"Sample size"}),"\n",(0,t.jsx)(n.p,{children:"Set samples size in Gnuplot while plotting functions. Sometimes the finest\nfeatures of a function cannot be seen using default sample size, try this\nfollowing example."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gnuplot> plot sin(1/x)\n"})}),"\n",(0,t.jsxs)("picture",{children:[(0,t.jsx)("source",{type:"image/webp",srcSet:s(1104).Z}),(0,t.jsx)("img",{src:s(3500).Z,alt:"gnuplot-08"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gnuplot> set samples 200\ngnuplot> replot\n"})}),"\n",(0,t.jsxs)("picture",{children:[(0,t.jsx)("source",{type:"image/webp",srcSet:s(1538).Z}),(0,t.jsx)("img",{src:s(7217).Z,alt:"gnuplot-09"})]}),"\n",(0,t.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"http://www.gnuplot.info",children:"http://www.gnuplot.info"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},1931:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gnuplot-01-34db5980fc6c1e6375302ebc2933b114.png"},6948:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gnuplot-01-315973f38130efde64a0f7fc8ac07c9a.webp"},142:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gnuplot-02-8d671761e8e1a9805db56a53026b6e9d.png"},2944:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gnuplot-02-c58373b4c2e7fb58491a4f9f3d4ad63e.webp"},242:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gnuplot-03-e02bcc6d7490114eda4499163c50a676.png"},2148:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gnuplot-03-5bfd0fad6517d792ab09b867e0778e7f.webp"},7275:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gnuplot-04-ced47655e56ebfcd046411e6a047d4bf.png"},9157:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gnuplot-04-ad1276ba4d48296f3a47c539cec63aa5.webp"},4336:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gnuplot-05-0a579c9ec75731c6c2b7eeac680afafa.png"},2912:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gnuplot-05-b063144e75bcce71416559808824e50e.webp"},5445:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gnuplot-06-7385277b2d2f25823610e06d0c4b77ec.png"},7401:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gnuplot-06-30c168cd54e4cd7031f3ae21107c97c8.webp"},2930:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gnuplot-07-a2a9b19fb912e7917b8ae9ba484da4bf.png"},8481:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gnuplot-07-5af58c5d07e2a025495925f073bc5acf.webp"},3500:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gnuplot-08-ce8f7f2a4445f14421b35c54c4f6ea0e.png"},1104:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gnuplot-08-f89d4030e65a6be7c0bd766efc7574b7.webp"},7217:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gnuplot-09-1308924ca1b8a5014aa2af0e6f94c2f2.png"},1538:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gnuplot-09-aa303819a2197fbb1379462097da680b.webp"},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>c});var t=s(7294);const l={},a=t.createContext(l);function c(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);