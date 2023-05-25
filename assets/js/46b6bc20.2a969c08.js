"use strict";(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([[854],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return b}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),i=c(t),m=r,b=i["".concat(u,".").concat(m)]||i[m]||d[m]||l;return t?a.createElement(b,o(o({ref:n},s),{},{components:t})):a.createElement(b,o({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p[i]="string"==typeof e?e:r,o[1]=p;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8256:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return i}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),o=["components"],p={title:"Homebrew"},u=void 0,c={unversionedId:"brew",id:"brew",title:"Homebrew",description:"Homebrew is very handy package manager for macOS (also",source:"@site/docs/brew.md",sourceDirName:".",slug:"/brew",permalink:"/linux/brew",draft:!1,editUrl:"https://github.com/pranabdas/linux/blob/main/docs/brew.md",tags:[],version:"current",frontMatter:{title:"Homebrew"},sidebar:"docs",previous:{title:"Modules",permalink:"/linux/module"},next:{title:"Privacy tips",permalink:"/linux/privacy"}},s={},i=[],d={toc:i},m="wrapper";function b(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew")," is very handy package manager for macOS (also\navailable for Linux). Install homebrew:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,l.kt)("p",null,"Install a package (also called formulae, usually command-line utilities):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install wget\n")),(0,l.kt)("p",null,"Info about a package:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew info gnupg\n")),(0,l.kt)("p",null,"Search for a package:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew search fftw\n")),(0,l.kt)("p",null,"Install a cask (usually graphical apps, by default placed under macOS\nApplications folder):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install --cask firefox\n")),(0,l.kt)("p",null,"List all installed packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew list\n")),(0,l.kt)("p",null,"Update a specific package:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew upgrade wget\n")),(0,l.kt)("p",null,"Update brew and cask:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew update\n")),(0,l.kt)("p",null,"Upgrade all installed packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew upgrade\n")),(0,l.kt)("p",null,"The above does not upgrade the casks if the casks are set to auto update. You\ncan upgrade anyway via brew by:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew upgrade --cask --greedy\n")),(0,l.kt)("p",null,"Switch off analytics"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew analytics off\n")),(0,l.kt)("p",null,"Cleanup (use the flag ",(0,l.kt)("inlineCode",{parentName:"p"},"--dry-run")," to list what will be deleted before actually\ndeleting):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew cleanup --prune=all --dry-run\nbrew cleanup --prune=all\n")),(0,l.kt)("p",null,"Remove dependencies no longer needed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew autoremove --dry-run\nbrew autoremove\n")),(0,l.kt)("p",null,"Troubleshooting issues:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew doctor\n")),(0,l.kt)("p",null,"Check the dependency tree:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew deps --tree --installed\nbrew deps --tree --installed gnupg\n")))}b.isMDXComponent=!0}}]);