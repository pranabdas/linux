"use strict";(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([[637],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return f}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,p=e.originalType,s=e.parentName,i=r(e,["components","mdxType","originalType","parentName"]),c=u(n),m=l,f=c["".concat(s,".").concat(m)]||c[m]||g[m]||p;return n?a.createElement(f,o(o({ref:t},i),{},{components:n})):a.createElement(f,o({ref:t},i))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=n.length,o=new Array(p);o[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:l,o[1]=r;for(var u=2;u<p;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4930:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return c}});var a=n(7462),l=n(3366),p=(n(7294),n(3905)),o=["components"],r={title:"gnuplot"},s=void 0,u={unversionedId:"gnuplot",id:"gnuplot",title:"gnuplot",description:"Installation",source:"@site/docs/gnuplot.md",sourceDirName:".",slug:"/gnuplot",permalink:"/linux/gnuplot",draft:!1,editUrl:"https://github.com/pranabdas/linux/blob/main/docs/gnuplot.md",tags:[],version:"current",frontMatter:{title:"gnuplot"},sidebar:"docs",previous:{title:"PGP Encryption",permalink:"/linux/pgp"},next:{title:"Setup related",permalink:"/linux/setup"}},i={},c=[{value:"Installation",id:"installation",level:2},{value:"Basic plotting",id:"basic-plotting",level:2},{value:"Two dependent y-axes",id:"two-dependent-y-axes",level:3},{value:"Sample size",id:"sample-size",level:3},{value:"Resources",id:"resources",level:2}],g={toc:c};function m(e){var t=e.components,r=(0,l.Z)(e,o);return(0,p.kt)("wrapper",(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"installation"},"Installation"),(0,p.kt)("p",null,"On Ubuntu/Debian:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"apt install gnuplot\n")),(0,p.kt)("p",null,"On macOS:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"brew install aquaterm --cask\nbrew install gnuplot --with-aquaterm --with-qt5\n")),(0,p.kt)("p",null,"Now you can access gnuplot by ",(0,p.kt)("inlineCode",{parentName:"p"},"gnuplot")," command on the terminal."),(0,p.kt)("h2",{id:"basic-plotting"},"Basic plotting"),(0,p.kt)("p",null,"Plot a function:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"gnuplot> plot besj0(x)\n")),(0,p.kt)("picture",null,(0,p.kt)("source",{type:"image/webp",srcSet:n(6948).Z}),(0,p.kt)("img",{src:n(1931).Z,alt:"gnuplot-01"})),(0,p.kt)("p",null,"Maybe you want fix the x-range:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"gnuplot> plot [-pi:pi] sin(x)\n")),(0,p.kt)("picture",null,(0,p.kt)("source",{type:"image/webp",srcSet:n(2944).Z}),(0,p.kt)("img",{src:n(142).Z,alt:"gnuplot-02"})),(0,p.kt)("p",null,"Maybe you want fix both x and y-range:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"gnuplot> plot [-pi:pi] [-1.2:1.5] sin(x)\n")),(0,p.kt)("picture",null,(0,p.kt)("source",{type:"image/webp",srcSet:n(2148).Z}),(0,p.kt)("img",{src:n(242).Z,alt:"gnuplot-03"})),(0,p.kt)("p",null,"Plotting multiple functions at the same time:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"gnuplot> plot sin(x), besj0(x)\n")),(0,p.kt)("picture",null,(0,p.kt)("source",{type:"image/webp",srcSet:n(9157).Z}),(0,p.kt)("img",{src:n(7275).Z,alt:"gnuplot-04"})),(0,p.kt)("p",null,"Making surface plot"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"gnuplot> splot x**2+y**2\n")),(0,p.kt)("picture",null,(0,p.kt)("source",{type:"image/webp",srcSet:n(2912).Z}),(0,p.kt)("img",{src:n(4336).Z,alt:"gnuplot-05"})),(0,p.kt)("p",null,"Making things look prettier, setting grid:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"gnuplot> set grid\ngnuplot> plot sin(x)\n")),(0,p.kt)("p",null,"you may use ",(0,p.kt)("inlineCode",{parentName:"p"},"replot")," to plot previous plot"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"gnuplot> set grid\ngnuplot> set xlabel \u201cTheta\u201d\ngnuplot> set ylabel \u201cSin(Theta)\u201d\ngnuplot> set title \u201cTheta vs. Sin(theta)\u201d\ngnuplot> replot\n")),(0,p.kt)("picture",null,(0,p.kt)("source",{type:"image/webp",srcSet:n(7401).Z}),(0,p.kt)("img",{src:n(5445).Z,alt:"gnuplot-06"})),(0,p.kt)("p",null,"Plotting data from file (the file contains two column data)"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'gnuplot> plot "file.txt"\n')),(0,p.kt)("p",null,"Specify columns to plot"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'gnuplot> plot "file.txt" u 1:2\n')),(0,p.kt)("p",null,"You can combine function plot with plot using data files"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'gnuplot> plot "file.txt", sin(x)\n')),(0,p.kt)("h3",{id:"two-dependent-y-axes"},"Two dependent y-axes"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'gnuplot> set terminal aqua font "Segue UI Light, 16"\ngnuplot> set ytics nomirror\ngnuplot> set y2tics -50, 50\ngnuplot> plot sin(1/x) axis x1y1, 100*besj0(x) axis x1y2\ngnuplot> set ytics -1, 0.5\ngnuplot> set ylabel "Y1"\ngnuplot> set y2label "Y2"\ngnuplot> set xlabel "X"\ngnuplot> replot\n')),(0,p.kt)("picture",null,(0,p.kt)("source",{type:"image/webp",srcSet:n(8481).Z}),(0,p.kt)("img",{src:n(2930).Z,alt:"gnuplot-07"})),(0,p.kt)("h3",{id:"sample-size"},"Sample size"),(0,p.kt)("p",null,"Set samples size in Gnuplot while plotting functions. Sometimes the finest\nfeatures of a function cannot be seen using default sample size, try this\nfollowing example."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"gnuplot> plot sin(1/x)\n")),(0,p.kt)("picture",null,(0,p.kt)("source",{type:"image/webp",srcSet:n(1104).Z}),(0,p.kt)("img",{src:n(3500).Z,alt:"gnuplot-08"})),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"gnuplot> set samples 200\ngnuplot> replot\n")),(0,p.kt)("picture",null,(0,p.kt)("source",{type:"image/webp",srcSet:n(1538).Z}),(0,p.kt)("img",{src:n(7217).Z,alt:"gnuplot-09"})),(0,p.kt)("h2",{id:"resources"},"Resources"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"http://www.gnuplot.info"},"http://www.gnuplot.info"))))}m.isMDXComponent=!0},1931:function(e,t,n){t.Z=n.p+"assets/images/gnuplot-01-34db5980fc6c1e6375302ebc2933b114.png"},6948:function(e,t,n){t.Z=n.p+"assets/images/gnuplot-01-315973f38130efde64a0f7fc8ac07c9a.webp"},142:function(e,t,n){t.Z=n.p+"assets/images/gnuplot-02-8d671761e8e1a9805db56a53026b6e9d.png"},2944:function(e,t,n){t.Z=n.p+"assets/images/gnuplot-02-c58373b4c2e7fb58491a4f9f3d4ad63e.webp"},242:function(e,t,n){t.Z=n.p+"assets/images/gnuplot-03-e02bcc6d7490114eda4499163c50a676.png"},2148:function(e,t,n){t.Z=n.p+"assets/images/gnuplot-03-5bfd0fad6517d792ab09b867e0778e7f.webp"},7275:function(e,t,n){t.Z=n.p+"assets/images/gnuplot-04-ced47655e56ebfcd046411e6a047d4bf.png"},9157:function(e,t,n){t.Z=n.p+"assets/images/gnuplot-04-ad1276ba4d48296f3a47c539cec63aa5.webp"},4336:function(e,t,n){t.Z=n.p+"assets/images/gnuplot-05-0a579c9ec75731c6c2b7eeac680afafa.png"},2912:function(e,t,n){t.Z=n.p+"assets/images/gnuplot-05-b063144e75bcce71416559808824e50e.webp"},5445:function(e,t,n){t.Z=n.p+"assets/images/gnuplot-06-7385277b2d2f25823610e06d0c4b77ec.png"},7401:function(e,t,n){t.Z=n.p+"assets/images/gnuplot-06-30c168cd54e4cd7031f3ae21107c97c8.webp"},2930:function(e,t,n){t.Z=n.p+"assets/images/gnuplot-07-a2a9b19fb912e7917b8ae9ba484da4bf.png"},8481:function(e,t,n){t.Z=n.p+"assets/images/gnuplot-07-5af58c5d07e2a025495925f073bc5acf.webp"},3500:function(e,t,n){t.Z=n.p+"assets/images/gnuplot-08-ce8f7f2a4445f14421b35c54c4f6ea0e.png"},1104:function(e,t,n){t.Z=n.p+"assets/images/gnuplot-08-f89d4030e65a6be7c0bd766efc7574b7.webp"},7217:function(e,t,n){t.Z=n.p+"assets/images/gnuplot-09-1308924ca1b8a5014aa2af0e6f94c2f2.png"},1538:function(e,t,n){t.Z=n.p+"assets/images/gnuplot-09-aa303819a2197fbb1379462097da680b.webp"}}]);