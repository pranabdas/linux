"use strict";(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([[913],{424:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=s(5893),i=s(1151);const r={title:"PGP Encryption"},a=void 0,l={id:"pgp",title:"PGP Encryption",description:"First step, check whether you have gnupg already installed in your system. If",source:"@site/docs/pgp.md",sourceDirName:".",slug:"/pgp",permalink:"/linux/pgp",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/linux/blob/main/docs/pgp.md",tags:[],version:"current",frontMatter:{title:"PGP Encryption"},sidebar:"docs",previous:{title:"Linux setup",permalink:"/linux/setup"},next:{title:"gnuplot",permalink:"/linux/gnuplot"}},o={},c=[{value:"Using PGP encryption with VIM editor",id:"using-pgp-encryption-with-vim-editor",level:2},{value:"Resources",id:"resources",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["First step, check whether you have ",(0,t.jsx)(n.em,{children:"gnupg"})," already installed in your system. If\nyou are on a standard Linux environment, that's likely the case."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --version\n"})}),"\n",(0,t.jsx)(n.p,{children:"If it prints version info, we are good to go. Otherwise, you will see some error\nmessage. In that case, we need to install. Depending on your OS and package\nmanager choose one of the following or similar command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# ubuntu / debian\napt install gnupg\n\n# fedora\ndnf install gnupg\n\n# macOS\nbrew install gnupg\n"})}),"\n",(0,t.jsx)(n.p,{children:"Create a new key pair:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --gen-key\n"})}),"\n",(0,t.jsx)(n.p,{children:"You must keep the private key to yourself and never share with anyone. The\npublic key you can give to people, so that they can encrypt messages/files with\nyour public key. You will be the only one to decrypt those messages using your\nprivate key. Private key is stored on the disc encrypted with a passphrase. If\nyou lose either your private key or the passphrase, you will not be able to\ndecrypt the messages. Therefore, backup your private key securely, also write\ndown the passphrase in a safe place."}),"\n",(0,t.jsx)(n.p,{children:"Export your public key:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --export --armor youremail@example.com > mypubkey.asc\n"})}),"\n",(0,t.jsx)(n.p,{children:"Import others public keys:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --import pubkey.asc\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can use the same command to import your own private keys as well like if you\nneed to move your key to another machine or you have obtained from another\nplace."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --import privatekey.asc\n"})}),"\n",(0,t.jsx)(n.p,{children:"List public keys in your keyring:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --list-keys\n"})}),"\n",(0,t.jsx)(n.p,{children:"List private keys:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --list-secret-keys\n"})}),"\n",(0,t.jsx)(n.p,{children:"Encrypt a file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --encrypt --recipient Pranab filename.txt\ngpg --encrypt --recipient 'Pranab' filename.txt\ngpg --encrypt --recipient 'pranab@example.com' --recipient 'Sam' filename.txt\n"})}),"\n",(0,t.jsxs)(n.p,{children:["It will generate encrypted file named ",(0,t.jsx)(n.em,{children:"filename.txt.gpg"}),".\nIf you want armor text, use that flag:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --encrypt --armor --recipient 'pranab@example.com' filename.txt\n"})}),"\n",(0,t.jsxs)(n.p,{children:["It generates encrypted file named ",(0,t.jsx)(n.em,{children:"filename.txt.asc"}),". Specify the output file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --output filename.asc --encrypt --armor --recipient 'pranab@example.com' filename.txt\n"})}),"\n",(0,t.jsx)(n.p,{children:"Decrypt a file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --decrypt filename.txt.gpg\ngpg filename.txt.gpg\ngpg --decrypt filename.txt.gpg > filename-copy.txt\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you do not provide an output file name, it will print decrypted text in the\nterminal. If it is a binary file, you should provide an output file, possibly\nwith correct file extension."}),"\n",(0,t.jsx)(n.p,{children:"Edit a key:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --edit-key 'Pranab Das'\ntrust\nquit\n"})}),"\n",(0,t.jsx)(n.p,{children:"Set the time a cache entry is valid to n seconds. The default is 600 seconds."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --default-cache-ttl n\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can download anyone's protonmail public key by visiting the URL:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"https://api.protonmail.ch/pks/lookup?op=get&search={username}@protonmail.com\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can use PGP to perform symmetric encryption as well. Encrypt a file using\npassphrase:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg -c file.txt\n# with more options\ngpg --symmetric \\\n    --armor \\\n    --cipher-algo AES256 \\\n    --output file.enc \\\n    file.txt\n"})}),"\n",(0,t.jsxs)(n.p,{children:["By default gpg uses some compression leading to output size less than that of\ninput for non armor outputs. You can change the compression algorithm and\ncompression level by ",(0,t.jsx)(n.code,{children:"--compress-algo"})," and ",(0,t.jsx)(n.code,{children:"-z"})," options, respectively. See the\nmanual for more details."]}),"\n",(0,t.jsx)(n.p,{children:"Decryption:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg -d file.txt.gpg > file-copy.txt\n"})}),"\n",(0,t.jsx)(n.h2,{id:"using-pgp-encryption-with-vim-editor",children:"Using PGP encryption with VIM editor"}),"\n",(0,t.jsxs)(n.p,{children:["Install this plugin ",(0,t.jsx)(n.a,{href:"https://github.com/jamessan/vim-gnupg",children:"https://github.com/jamessan/vim-gnupg"})]}),"\n",(0,t.jsxs)(n.p,{children:["I experienced a bug: sometimes two characters of second line is missing or\nhidden. To resolve this issue, add this to your ",(0,t.jsx)(n.code,{children:".vimrc"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vim",children:"autocmd User GnuPG call timer_start(1, 'FixRedraw', {})\nfunc FixRedraw(timer)\n        redraw!\nendfunc\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You may prefer to have following options. Just add to your ",(0,t.jsx)(n.code,{children:".vimrc"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vim",children:'let g:GPGPreferArmor=1\nlet g:GPGDefaultRecipients=["default@example.com"]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://protonmail.com/blog/what-is-pgp-encryption/",children:"https://protonmail.com/blog/what-is-pgp-encryption/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.gnupg.org/gph/en/manual.html",children:"https://www.gnupg.org/gph/en/manual.html"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://emailselfdefense.fsf.org/",children:"https://emailselfdefense.fsf.org/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://blog.ghostinthemachines.com/2015/03/01/how-to-use-gpg-command-line/",children:"https://blog.ghostinthemachines.com/2015/03/01/how-to-use-gpg-command-line/"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>a});var t=s(7294);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);