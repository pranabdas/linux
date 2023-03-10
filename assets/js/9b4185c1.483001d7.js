"use strict";(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([[775],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5520:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={title:"Privacy and security tips",sidebar_label:"Privacy tips",keywords:["privacy and security","PGP","ProtonMail","encryption","metadata","VPN"]},l=void 0,c={unversionedId:"privacy",id:"privacy",title:"Privacy and security tips",description:"Delete unnecessary accounts to reduce your online footprints. Setup",source:"@site/docs/privacy.md",sourceDirName:".",slug:"/privacy",permalink:"/linux/privacy",draft:!1,editUrl:"https://github.com/pranabdas/linux/blob/main/docs/privacy.md",tags:[],version:"current",frontMatter:{title:"Privacy and security tips",sidebar_label:"Privacy tips",keywords:["privacy and security","PGP","ProtonMail","encryption","metadata","VPN"]},sidebar:"docs",previous:{title:"Homebrew",permalink:"/linux/brew"},next:{title:"LaTeX",permalink:"/linux/latex"}},p={},u=[{value:"Metadata",id:"metadata",level:3},{value:"File integrity checks",id:"file-integrity-checks",level:3},{value:"Redact sensitive information",id:"redact-sensitive-information",level:3},{value:"Encryption for local and remote files",id:"encryption-for-local-and-remote-files",level:3},{value:"VPN",id:"vpn",level:3},{value:"Email",id:"email",level:3},{value:"Browser and search engines",id:"browser-and-search-engines",level:3},{value:"Resources",id:"resources",level:3}],d={toc:u},m="wrapper";function f(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)(m,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Delete unnecessary accounts to reduce your online footprints. Setup\ntwo-factor-authentication wherever possible. Use complex and long passwords, and\nuse a password manager (such as Bitwarden) or secure note (such as Standard\nNotes) to write down your passwords. Use ",(0,o.kt)("a",{parentName:"p",href:"https://bitwarden.com/password-generator/"},"specialized tools")," to create complex passwords or\npassphrases; your password should look like: ",(0,o.kt)("inlineCode",{parentName:"p"},"LeIH}gZ9We#Z5X")," or even more\nrandom and longer."),(0,o.kt)("p",null,"You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"openssl")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"gpg")," to generate random passwords:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ openssl rand -base64 30\nC4/uLe3fJwhyatLO0yuLX2oMQZ5scnvWXHxFrjmi\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gpg --gen-random -a 0 90 | fold -w 40\n0cC0ba287A5EE+ctd1lQAGWKXZIcZhZXbe+47/bu\neCpRDZRhQrzsaQS5Y0vVPpLAXAuNgksb3J8Xd2kF\nOwJzQBhgP6l+yy1V1qoa1L/VJcpNYQidhfAKkKOu\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Keep your devices and apps up to date:")," One of the best thing you can do to\nkeep your devices safe is keeping them up to date. Go to settings, and install\nall available operating system and app updates."),(0,o.kt)("h3",{id:"metadata"},"Metadata"),(0,o.kt)("p",null,"Be mindful of metadata when sharing various files. For example, your photos may\ncontain geo-location, camera (phone) model; your office files may contain names\nof your collaborators. If you are on Windows, you can open the file properties\nfrom the right-click context menu, see the metadata and remove them."),(0,o.kt)("div",null,(0,o.kt)("picture",null,(0,o.kt)("source",{type:"image/webp",srcSet:a(587).Z}),(0,o.kt)("img",{src:a(666).Z,alt:"metadata-removal-1"}))),(0,o.kt)("br",null),(0,o.kt)("div",null,(0,o.kt)("picture",null,(0,o.kt)("source",{type:"image/webp",srcSet:a(8261).Z}),(0,o.kt)("img",{src:a(5612).Z,alt:"metadata-removal-2"}))),(0,o.kt)("p",null,"There is a cross-platform exifdata removal tool particularly for images -\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/exiftool/exiftool"},"https://github.com/exiftool/exiftool"),". If you are on macOS, you can install it\nusing homebrew."),(0,o.kt)("h3",{id:"file-integrity-checks"},"File integrity checks"),(0,o.kt)("p",null,"When you download various installers, it is good idea to verify its SHASUM. On\nLinux and macOS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"shasum -a 512 installer.ext\n")),(0,o.kt)("p",null,"On Windows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"CertUtil -hashfile installer.exe SHA512\n")),(0,o.kt)("h3",{id:"redact-sensitive-information"},"Redact sensitive information"),(0,o.kt)("p",null,"Use professional tools to redact documents and images to hide sensitive\ninformation. Adobe Acrobat Pro has redact tool to remove text and other data\nfrom PDF files."),(0,o.kt)("h3",{id:"encryption-for-local-and-remote-files"},"Encryption for local and remote files"),(0,o.kt)("p",null,"Use full disc encryption for your computer/laptop hard drives. Mac FileVault,\nWindows BitLocker, and Linux LUKS are good options. You can also use full disc\nencryption tools like VeraCrypt. When uploading sensitive information to popular\ncloud storage providers (Dropbox, OneDrive, Google Drive all allow files to be\nreviewed by certain employees and subjected to law enforcement requests),\nencrypt using AES-256, or PGP encryption. You can have a look at ",(0,o.kt)("a",{parentName:"p",href:"https://cryptomator.org"},"Cryptomator")," for encrypting your files before uploading to any\ncloud. Create regular backups of your data, always encrypt locally before\nbacking up to a cloud service."),(0,o.kt)("h3",{id:"vpn"},"VPN"),(0,o.kt)("p",null,"When you use a VPN, your traffic is visible to your VPN provider, it is\nimportant whom you can trust. If you are on a public WiFi, it is always a good\nidea to use a trustable VPN service. I believe ProtonVPN is a good option.\nToday's internet is full of trackers, using a VPN will help you hide your real\nIP address. You can also use ",(0,o.kt)("a",{parentName:"p",href:"https://www.startpage.com"},"https://www.startpage.com")," along with its\nanonymous view for the same purpose. TOR is another option, however many popular\nwebsites may not function optimally via TOR."),(0,o.kt)("h3",{id:"email"},"Email"),(0,o.kt)("p",null,"Use privacy friendly email services such as ProtonMail. However, note that\nProtonMail is private but not anonymous; they might share various metadata (not\nyour email content and attachments) with law enforcement agencies. If you are\ncomfortable with technical inconveniences, you should setup ",(0,o.kt)("a",{parentName:"p",href:"https://emailselfdefense.fsf.org/"},"PGP encryption"),". If possible, communicate less via email and\nuse services like Signal (enable disappearing messages). Email providers collect\nmore metadata than Signal."),(0,o.kt)("h3",{id:"browser-and-search-engines"},"Browser and search engines"),(0,o.kt)("p",null,"Use privacy respecting web browsers like Mozilla Firefox or Tor, and search\nengines like ",(0,o.kt)("a",{parentName:"p",href:"https://www.startpage.com"},"https://www.startpage.com")," or duckduckgo. Clear your browsing\nhistory and cookies regularly or set to clear when you quit browser."),(0,o.kt)("h3",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/drduh/macOS-Security-and-Privacy-Guide"},"macOS Security and Privacy Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.torproject.org/browser-fingerprinting-introduction-and-challenges-ahead/"},"https://blog.torproject.org/browser-fingerprinting-introduction-and-challenges-ahead/"))))}f.isMDXComponent=!0},666:function(e,t,a){t.Z=a.p+"assets/images/metadata-removal-1-4f66437908c12634e7a7556f8d22479b.png"},587:function(e,t,a){t.Z=a.p+"assets/images/metadata-removal-1-6d4cb1acdf731878d68c9238ff7fe823.webp"},5612:function(e,t,a){t.Z=a.p+"assets/images/metadata-removal-2-10d8e6a5a1cd26683f2e7ef935d0a981.png"},8261:function(e,t,a){t.Z=a.p+"assets/images/metadata-removal-2-ceb4c83ad7ece594f8dc3510a81e74bd.webp"}}]);