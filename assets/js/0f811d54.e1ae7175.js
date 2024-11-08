"use strict";(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([[604],{6765:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"gnuplot","title":"gnuplot","description":"Installation","source":"@site/docs/gnuplot.md","sourceDirName":".","slug":"/gnuplot","permalink":"/linux/gnuplot","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/linux/blob/main/docs/gnuplot.md","tags":[],"version":"current","frontMatter":{"title":"gnuplot"},"sidebar":"docs","previous":{"title":"PGP Encryption","permalink":"/linux/pgp"},"next":{"title":"Filesystem","permalink":"/linux/filesystem"}}');var l=t(4848),i=t(8453);const a={title:"gnuplot"},o=void 0,c={},p=[{value:"Installation",id:"installation",level:2},{value:"Basic plotting",id:"basic-plotting",level:2},{value:"Two dependent y-axes",id:"two-dependent-y-axes",level:3},{value:"Sample size",id:"sample-size",level:3},{value:"Resources",id:"resources",level:2}];function r(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsx)(n.p,{children:"On Ubuntu/Debian:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"apt install gnuplot\n"})}),"\n",(0,l.jsx)(n.p,{children:"On macOS:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"brew install aquaterm --cask\nbrew install gnuplot --with-aquaterm --with-qt5\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Now you can access gnuplot by ",(0,l.jsx)(n.code,{children:"gnuplot"})," command on the terminal."]}),"\n",(0,l.jsx)(n.h2,{id:"basic-plotting",children:"Basic plotting"}),"\n",(0,l.jsx)(n.p,{children:"Plot a function:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"gnuplot> plot besj0(x)\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"gnuplot-01",src:t(5212).A+"",width:"1654",height:"1204"})}),"\n",(0,l.jsx)(n.p,{children:"Maybe you want fix the x-range:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"gnuplot> plot [-pi:pi] sin(x)\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"gnuplot-02",src:t(9486).A+"",width:"1654",height:"1204"})}),"\n",(0,l.jsx)(n.p,{children:"Maybe you want fix both x and y-range:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"gnuplot> plot [-pi:pi] [-1.2:1.5] sin(x)\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"gnuplot-03",src:t(9209).A+"",width:"1654",height:"1204"})}),"\n",(0,l.jsx)(n.p,{children:"Plotting multiple functions at the same time:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"gnuplot> plot sin(x), besj0(x)\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"gnuplot-04",src:t(8784).A+"",width:"1537",height:"1116"})}),"\n",(0,l.jsx)(n.p,{children:"Making surface plot"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"gnuplot> splot x**2+y**2\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"gnuplot-05",src:t(9219).A+"",width:"1416",height:"1033"})}),"\n",(0,l.jsx)(n.p,{children:"Making things look prettier, setting grid:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"gnuplot> set grid\ngnuplot> plot sin(x)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["you may use ",(0,l.jsx)(n.code,{children:"replot"})," to plot previous plot"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"gnuplot> set grid\ngnuplot> set xlabel \u201cTheta\u201d\ngnuplot> set ylabel \u201cSin(Theta)\u201d\ngnuplot> set title \u201cTheta vs. Sin(theta)\u201d\ngnuplot> replot\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"gnuplot-06",src:t(3874).A+"",width:"1416",height:"1033"})}),"\n",(0,l.jsx)(n.p,{children:"Plotting data from file (the file contains two column data)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'gnuplot> plot "file.txt"\n'})}),"\n",(0,l.jsx)(n.p,{children:"Specify columns to plot"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'gnuplot> plot "file.txt" u 1:2\n'})}),"\n",(0,l.jsx)(n.p,{children:"You can combine function plot with plot using data files"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'gnuplot> plot "file.txt", sin(x)\n'})}),"\n",(0,l.jsx)(n.h3,{id:"two-dependent-y-axes",children:"Two dependent y-axes"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'gnuplot> set terminal aqua font "Segue UI Light, 16"\ngnuplot> set ytics nomirror\ngnuplot> set y2tics -50, 50\ngnuplot> plot sin(1/x) axis x1y1, 100*besj0(x) axis x1y2\ngnuplot> set ytics -1, 0.5\ngnuplot> set ylabel "Y1"\ngnuplot> set y2label "Y2"\ngnuplot> set xlabel "X"\ngnuplot> replot\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"gnuplot-07",src:t(7437).A+"",width:"1883",height:"1366"})}),"\n",(0,l.jsx)(n.h3,{id:"sample-size",children:"Sample size"}),"\n",(0,l.jsx)(n.p,{children:"Set samples size in Gnuplot while plotting functions. Sometimes the finest\nfeatures of a function cannot be seen using default sample size, try this\nfollowing example."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"gnuplot> plot sin(1/x)\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"gnuplot-08",src:t(2964).A+"",width:"1300",height:"945"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"gnuplot> set samples 200\ngnuplot> replot\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"gnuplot-09",src:t(7671).A+"",width:"1300",height:"945"})}),"\n",(0,l.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"http://www.gnuplot.info",children:"http://www.gnuplot.info"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(r,{...e})}):r(e)}},5212:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/gnuplot-01-315973f38130efde64a0f7fc8ac07c9a.webp"},9486:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/gnuplot-02-c58373b4c2e7fb58491a4f9f3d4ad63e.webp"},9209:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/gnuplot-03-5bfd0fad6517d792ab09b867e0778e7f.webp"},8784:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/gnuplot-04-ad1276ba4d48296f3a47c539cec63aa5.webp"},9219:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/gnuplot-05-b063144e75bcce71416559808824e50e.webp"},3874:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/gnuplot-06-30c168cd54e4cd7031f3ae21107c97c8.webp"},7437:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/gnuplot-07-5af58c5d07e2a025495925f073bc5acf.webp"},2964:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/gnuplot-08-f89d4030e65a6be7c0bd766efc7574b7.webp"},7671:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/gnuplot-09-aa303819a2197fbb1379462097da680b.webp"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(6540);const l={},i=s.createContext(l);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);