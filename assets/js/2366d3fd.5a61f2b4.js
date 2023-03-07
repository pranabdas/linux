"use strict";(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([[881],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=o(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4701:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],s={title:"Firewall"},c=void 0,o={unversionedId:"firewall",id:"firewall",title:"Firewall",description:"We will setup firewalld. Make sure that another firewall tool is not running",source:"@site/docs/firewall.md",sourceDirName:".",slug:"/firewall",permalink:"/linux/firewall",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/linux/blob/main/docs/firewall.md",tags:[],version:"current",frontMatter:{title:"Firewall"},sidebar:"docs",previous:{title:"Network setup",permalink:"/linux/network-setup"},next:{title:"Network security",permalink:"/linux/network-security"}},p={},u=[],m={toc:u},d="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"We will setup ",(0,l.kt)("strong",{parentName:"p"},"firewalld"),". Make sure that another firewall tool is not running\nor installed in the system that might conflict with ",(0,l.kt)("strong",{parentName:"p"},"firewalld"),". In some older\nsystems, you might have ",(0,l.kt)("strong",{parentName:"p"},"iptables")," installed. You can check if the service is\nrunning:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status iptables\n")),(0,l.kt)("p",null,"If it is there, stop the service in case it is running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl stop iptables\n")),(0,l.kt)("p",null,"If it is not running, next check if the program is installed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd /sbin/\nls -Fla iptables\n")),(0,l.kt)("p",null,"Mask the program:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl mask iptables\n")),(0,l.kt)("p",null,"Install ",(0,l.kt)("em",{parentName:"p"},"firewalld"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install firewalld\nsudo apt install firewall-config\n")),(0,l.kt)("p",null,"Check the available zones:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"firewall-cmd --get-zones\n")),(0,l.kt)("p",null,"Get default zone:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"firewall-cmd --get-default-zone\n")),(0,l.kt)("p",null,"More detailed list:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"firewall-cmd --list-all-zones\n")),(0,l.kt)("p",null,"Services available via firewalld:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"firewall-cmd --get-services\n")),(0,l.kt)("p",null,"Change default zone:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"firewall-cmd --set-default-zone=work\n")),(0,l.kt)("p",null,"Get active zones:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"firewall-cmd --get-active-zones\n")),(0,l.kt)("p",null,"Add a service to your default zone:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"firewall-cmd --add-service=mdns\n")),(0,l.kt)("p",null,"List the zone:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"firewall-cmd --list-all\n")),(0,l.kt)("p",null,"Allow ",(0,l.kt)("em",{parentName:"p"},"http")," and ",(0,l.kt)("em",{parentName:"p"},"https")," in a apache server:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"firewall-cmd --add-service=http\nfirewall-cmd --add-service=https\n")),(0,l.kt)("p",null,"Allow mail server:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"firewall-cmd --add-service=smtp\nfirewall-cmd --add-service=smtps\nfirewall-cmd --add-service=smtp-submission\nfirewall-cmd --add-service=imap\nfirewall-cmd --add-service=imaps\nfirewall-cmd --add-service=pop3\nfirewall-cmd --add-service=pop3s\n")),(0,l.kt)("p",null,"Removing services:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"firewall-cmd --remove-service=smtp\nfirewall-cmd --remove-service=imap\nfirewall-cmd --remove-service=pop3\n")),(0,l.kt)("p",null,"Emergency panic mode (stop all network connections):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"firewall-cmd --panic-on\nfirewall-cmd --query-panic\nfirewall-cmd --panic-off\n")))}f.isMDXComponent=!0}}]);