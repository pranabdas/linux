"use strict";(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([[137],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5620:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],c={title:"More tips and tricks"},s=void 0,l={unversionedId:"more-tips-tricks",id:"more-tips-tricks",title:"More tips and tricks",description:"Store ENV variables in macOS keychain",source:"@site/docs/more-tips-tricks.md",sourceDirName:".",slug:"/more-tips-tricks",permalink:"/linux/more-tips-tricks",draft:!1,editUrl:"https://github.com/pranabdas/linux/blob/main/docs/more-tips-tricks.md",tags:[],version:"current",frontMatter:{title:"More tips and tricks"},sidebar:"docs",previous:{title:"WSL",permalink:"/linux/wsl"},next:{title:"Resources",permalink:"/linux/resources"}},u={},p=[{value:"Store ENV variables in macOS keychain",id:"store-env-variables-in-macos-keychain",level:3}],m={toc:p},f="wrapper";function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"store-env-variables-in-macos-keychain"},"Store ENV variables in macOS keychain"),(0,i.kt)("p",null,"Add item to keychain:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"security add-generic-password -a \"$USER\" -s 'API_KEY' -w 'xxxxyyyyzzzz'\n")),(0,i.kt)("p",null,"Get secret from keychain:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"security find-generic-password -a \"$USER\" -s 'API_KEY' -w\n")),(0,i.kt)("p",null,"Automatically export secret variables via ",(0,i.kt)("inlineCode",{parentName:"p"},".zshrc")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".bashrc"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export API_KEY=$(security find-generic-password -a "$USER" -s "API_KEY" -w)\n')))}d.isMDXComponent=!0}}]);