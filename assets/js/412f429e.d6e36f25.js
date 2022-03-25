"use strict";(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([[995],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2868:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],u={title:"Security Enhanced Linux",sidebar_label:"SELinux"},l=void 0,c={unversionedId:"selinux",id:"selinux",title:"Security Enhanced Linux",description:"I am testing SELinux on Red Hat Enterprise Linux 8. It works similarly on",source:"@site/docs/selinux.md",sourceDirName:".",slug:"/selinux",permalink:"/linux/selinux",editUrl:"https://github.com/pranabdas/linux/blob/main/docs/selinux.md",tags:[],version:"current",frontMatter:{title:"Security Enhanced Linux",sidebar_label:"SELinux"},sidebar:"docs",previous:{title:"NextCloud",permalink:"/linux/nextcloud"},next:{title:"HPC",permalink:"/linux/hpc"}},s={},p=[{value:"Resources",id:"resources",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I am testing SELinux on Red Hat Enterprise Linux 8. It works similarly on\nFedora, CentOS, and SUSE linux. If you are on Ubuntu, you may use apparmor\ninstead. However, you can uninstall apparmor and move into SELinux if you are\nalready familiar."),(0,a.kt)("p",null,"Check the current mode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"getenforce\n")),(0,a.kt)("p",null,"We can change SELinux modes using"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"setenforce\n")),(0,a.kt)("p",null,"For example, you may choose ",(0,a.kt)("inlineCode",{parentName:"p"},"setenforce 0")," for permissive mode while\ntroubleshooting. Never disable selinux. SELinux configurations are in the file:\n",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/selinux/config"),". You can open it in a text editor and make changes."),(0,a.kt)("p",null,"Look into the context using ",(0,a.kt)("inlineCode",{parentName:"p"},"Z")," flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ls -lZ\n")),(0,a.kt)("p",null,"There are three different types of context: users, roles and type. Like every\nfiles and directories, process has context too."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-basg"},"ps -auxZ\n")),(0,a.kt)("p",null,"The unconfined processes are those that selinux does not monitor."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/using_selinux/index"},"Red Hat SELinux documentation"))))}m.isMDXComponent=!0}}]);