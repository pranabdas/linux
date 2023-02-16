"use strict";(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([[589],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,d=p["".concat(c,".").concat(m)]||p[m]||k[m]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5516:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={title:"Linux network setup",sidebar_label:"Network setup"},c=void 0,s={unversionedId:"network-setup",id:"network-setup",title:"Linux network setup",description:"Show network devices:",source:"@site/docs/network-setup.md",sourceDirName:".",slug:"/network-setup",permalink:"/linux/network-setup",draft:!1,editUrl:"https://github.com/pranabdas/linux/blob/main/docs/network-setup.md",tags:[],version:"current",frontMatter:{title:"Linux network setup",sidebar_label:"Network setup"},sidebar:"docs",previous:{title:"Filesystem",permalink:"/linux/filesystem"},next:{title:"Firewall",permalink:"/linux/firewall"}},u={},p=[],k={toc:p},m="wrapper";function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)(m,(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Show network devices:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ip addr\n")),(0,o.kt)("p",null,"More details about a specific network adapter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ethtool enp0s3\n")),(0,o.kt)("p",null,"About network names: en \u2192 ethernet (could be wl \u2192 wireless), p0 \u2192 bus PCI-0\n(could be u \u2192 USB), s3 \u2192 slot 3."),(0,o.kt)("p",null,"Check if NetworkManager is running in your system:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status NetworkManager\n")),(0,o.kt)("p",null,"If it is not active, start NetworkManager:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start NetworkManager\n")),(0,o.kt)("p",null,"If NetworkManager is not installed in your system:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install NetworkManager\nsudo apt install network-manager\n")),(0,o.kt)("p",null,"Check the device status:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nmcli device\n")),(0,o.kt)("p",null,"Network setting files in Centos: ",(0,o.kt)("inlineCode",{parentName:"p"},"/ect/sysconfig/network-scripts"),".\nNetwork setting files in Ubuntu: ",(0,o.kt)("inlineCode",{parentName:"p"},"/ect/NetworkManager/NetworkManager.conf"),"."),(0,o.kt)("p",null,"If you make any changes, you need to restart the NetworkManager service to take\neffect."),(0,o.kt)("p",null,"Details about a network connection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nmcli connection show Wired\\ Connection\\ 1\n")),(0,o.kt)("p",null,"If there is no connection name for a network device, you can try the device name\ninstead."),(0,o.kt)("p",null,"Edit a connection profile:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nmcli connection edit Wired\\ Connection\\ 1\n")),(0,o.kt)("p",null,"Print details about a specific section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nmcli> print ipv4\n")),(0,o.kt)("p",null,"Make changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nmcli> set ipv4.method auto\nnmcli> save\nnmcli> quit\n")),(0,o.kt)("p",null,"We can restart the connection to reflect the changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nmcli connection down Wired\\ Connection\\ 1\nnmcli connection up Wired\\ Connection\\ 1\n")))}d.isMDXComponent=!0}}]);