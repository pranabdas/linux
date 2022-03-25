"use strict";(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([[997],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6978:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),l=["components"],a={title:"Windows Subsystem for Linux",sidebar_label:"WSL"},u=void 0,s={unversionedId:"wsl",id:"wsl",title:"Windows Subsystem for Linux",description:"List WSL installations in your computer:",source:"@site/docs/wsl.md",sourceDirName:".",slug:"/wsl",permalink:"/linux/wsl",editUrl:"https://github.com/pranabdas/linux/blob/main/docs/wsl.md",tags:[],version:"current",frontMatter:{title:"Windows Subsystem for Linux",sidebar_label:"WSL"},sidebar:"docs",previous:{title:"LaTeX",permalink:"/linux/latex"},next:{title:"Resources",permalink:"/linux/resources"}},c={},p=[{value:"Resources",id:"resources",level:3}],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"List WSL installations in your computer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"wsl --list --verbose\n")),(0,i.kt)("p",null,"Stop a running instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"wsl --terminate {DistributionName}\n")),(0,i.kt)("h3",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/"},"https://docs.microsoft.com/en-us/windows/wsl/"))))}m.isMDXComponent=!0}}]);