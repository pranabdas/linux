"use strict";(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([[855],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(n),k=l,c=s["".concat(p,".").concat(k)]||s[k]||d[k]||r;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},527:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],o={title:"VI / VIM editor",sidebar_label:"Vi editor"},p=void 0,u={unversionedId:"vi",id:"vi",title:"VI / VIM editor",description:"VI / VIM is a simple and powerful editor. If you are accessing a remote",source:"@site/docs/vi.md",sourceDirName:".",slug:"/vi",permalink:"/linux/vi",editUrl:"https://github.com/pranabdas/linux/blob/main/docs/vi.md",tags:[],version:"current",frontMatter:{title:"VI / VIM editor",sidebar_label:"Vi editor"},sidebar:"docs",previous:{title:"Commandline",permalink:"/linux/commandline"},next:{title:"Git",permalink:"/linux/git"}},m={},d=[{value:"Keyboard shortcuts",id:"keyboard-shortcuts",level:2},{value:"visual mode",id:"visual-mode",level:2},{value:"vimrc",id:"vimrc",level:2},{value:"Plugins",id:"plugins",level:2}],s={toc:d};function k(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"VI / VIM is a simple and powerful editor. If you are accessing a remote\nworkstation or cluster where you don't have the option to launch graphical\nprograms, VIM is a great option. Almost any Linux or UNIX system has VI editor\npreinstalled. Recent OS will likely have VIM (",(0,r.kt)("strong",{parentName:"p"},"V"),"i ",(0,r.kt)("strong",{parentName:"p"},"IM"),"proved) instead of\nclassic VI editor. You can check the version of VI by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vi --version\n")),(0,r.kt)("p",null,"In case it is not installed in your system, you can install using a package\nmanager:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# ubuntu / debian\napt install vim\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open / create a ",(0,r.kt)("inlineCode",{parentName:"li"},"file_name")," to read and/or write:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vi file_name\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go into ",(0,r.kt)("inlineCode",{parentName:"li"},"INSERT")," mode by (check in the bottom of the window for ",(0,r.kt)("inlineCode",{parentName:"li"},"--INSERT--"),")\nby pressing ","[shift]","+","[I]"," or simply ","[I]",".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go into ",(0,r.kt)("inlineCode",{parentName:"p"},"REPLACE")," mode (check in the bottom for ",(0,r.kt)("inlineCode",{parentName:"p"},"--REPLACE--"),") by pressing\n","[shift]"," + ","[R]",".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go into readonly / normal mode by pressing ","[esc]",".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To save file, first go into readonly mode (",(0,r.kt)("inlineCode",{parentName:"p"},"[esc]"),") and then type:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vim"},":w\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To exit vim, first go into readonly mode (",(0,r.kt)("inlineCode",{parentName:"li"},"[esc]"),") and then:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vim"},":q\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can combine both to save and exit (keyboard shortcut ","[Shift]","+","[Z Z]","):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vim"},":wq\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Exit without saving (keyboard shortcut ","[Shift]","+","[Z Q]","):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vim"},":q!\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Search in the file: Type ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," followed by the phrase you are looking for. Press\n",(0,r.kt)("inlineCode",{parentName:"p"},"N")," go to next match. You can search backwards using ",(0,r.kt)("inlineCode",{parentName:"p"},"?"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"See line numbers: ",(0,r.kt)("inlineCode",{parentName:"p"},":set nu"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Hide line numbers: ",(0,r.kt)("inlineCode",{parentName:"p"},":set nonu"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Spellcheck: ",(0,r.kt)("inlineCode",{parentName:"p"},":set spell"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Turn off spellcheck: ",(0,r.kt)("inlineCode",{parentName:"p"},":set nospell"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set user spell file: ",(0,r.kt)("inlineCode",{parentName:"p"},":set spellfile=~/.vim/en.utf-8.add"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Browse files and folders using file explorer: ",(0,r.kt)("inlineCode",{parentName:"p"},":E")))),(0,r.kt)("h2",{id:"keyboard-shortcuts"},"Keyboard shortcuts"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key bindings"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"G"),(0,r.kt)("td",{parentName:"tr",align:null},"Go to the end of the file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5G"),(0,r.kt)("td",{parentName:"tr",align:null},"Go to specific line of the file (here line 5)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5H"),(0,r.kt)("td",{parentName:"tr",align:null},"Move relative to the top line on the screen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3L"),(0,r.kt)("td",{parentName:"tr",align:null},"Move relative to the bottom line on the screen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gg"),(0,r.kt)("td",{parentName:"tr",align:null},"Go to the beginning of file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"control + F"),(0,r.kt)("td",{parentName:"tr",align:null},"Scroll forward one page")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"control + B"),(0,r.kt)("td",{parentName:"tr",align:null},"Scroll backward one page")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$"),(0,r.kt)("td",{parentName:"tr",align:null},"Go to the end of line")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Go to the beginning of line")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dd"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete a whole line")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"u"),(0,r.kt)("td",{parentName:"tr",align:null},"Undo (or type ",(0,r.kt)("inlineCode",{parentName:"td"},":u"),"; ",(0,r.kt)("inlineCode",{parentName:"td"},":2u")," (undo twice) or ",(0,r.kt)("inlineCode",{parentName:"td"},":U")," (undo all))")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"control + R"),(0,r.kt)("td",{parentName:"tr",align:null},"Redo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"control + L"),(0,r.kt)("td",{parentName:"tr",align:null},"Redraw / reload")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"z="),(0,r.kt)("td",{parentName:"tr",align:null},"Spelling suggestions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zg"),(0,r.kt)("td",{parentName:"tr",align:null},"Add new word to the user dictionary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zug"),(0,r.kt)("td",{parentName:"tr",align:null},"Remove word from the dictionary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},".")),(0,r.kt)("td",{parentName:"tr",align:null},"Repeat last command")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"db"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete one word backwards")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dw"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete one word forwards")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"d$ / D"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete to the end of line")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"d0"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete to the beginning of line")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compare two files:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vi -d file.txt file_edit.txt\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Move a line up / down: this can be achieved by few key combinations. To move one line above its current position: ",(0,r.kt)("inlineCode",{parentName:"li"},"ddkP"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dd")," to delete current line and put it in default register"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"k")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"j")," to move up or down"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"P")," to paste above current line.")))),(0,r.kt)("h2",{id:"visual-mode"},"visual mode"),(0,r.kt)("p",null,"Enter Visual mode by pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"v"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"V")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"[control] + v")," for visual character,\nline or block modes, respectively. Select text using the arrow keys on the key\nboard. You can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Press ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," it will clear the selected part and enter into insert mode.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Press ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," to copy (yanked).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can paste in another location in VIM by pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Press ",(0,r.kt)("inlineCode",{parentName:"p"},'"+y')," to copy to system clipboard, you can paste in another program\nusing your system shortcut like ",(0,r.kt)("inlineCode",{parentName:"p"},"[command] + v")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"[control] + v"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Comment multiple lines:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Enter block visual mode: ","[control]"," + v"),(0,r.kt)("li",{parentName:"ul"},"Select the lines (first col) using up / down arrow keys"),(0,r.kt)("li",{parentName:"ul"},"Enter insert mode: ","[shift]"," + i"),(0,r.kt)("li",{parentName:"ul"},"Type commenting character e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"#")),(0,r.kt)("li",{parentName:"ul"},"Press ","[esc]","."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Un-comment multiple lines:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Enter block visual mode: ","[control]"," + v"),(0,r.kt)("li",{parentName:"ul"},"Select the lines (one or multiple columns) using arrow keys"),(0,r.kt)("li",{parentName:"ul"},"Press ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," followed by ","[esc]",".")))),(0,r.kt)("h2",{id:"vimrc"},"vimrc"),(0,r.kt)("p",null,"You can customize your vi editor by creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.vimrc")," file and saving your\nsettings there. Like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vim"},'syntax on\nset tabstop=4\nset ruler\ncolorscheme darkblue\nset textwidth=80\nset cc=81\nset autoindent\nset spell\nhi SpellBad ctermbg=Yellow\nhi SpellBad ctermfg=DarkRed\nset spellfile=~/.vim/en.utf-8.add\n\n" Syntax highlight for custom filetypes\nau BufRead,BufNewFile *.in set filetype=fortran\nau BufRead,BufNewFile *.out set filetype=fortran\nau BufRead,BufNewFile matplotlibrc set filetype=python\n\nset hlsearch\nhi Search ctermbg=LightBlue\nhi Search ctermfg=black\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Convert tabs to spaces. Add the following to your ",(0,r.kt)("inlineCode",{parentName:"li"},".vimrc"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vim"},"set tabstop=4 shiftwidth=4 expandtab\n")),(0,r.kt)("p",null,"Convert existing tabs to spaces by ",(0,r.kt)("inlineCode",{parentName:"p"},":retab")," (once the above settings are added)."),(0,r.kt)("h2",{id:"plugins"},"Plugins"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Installing vimplug:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fLo ~/.vim/autoload/plug.vim --create-dirs \\\n    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Installing plugins using vimplug: add this to your ",(0,r.kt)("inlineCode",{parentName:"li"},".vimrc"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vim"},"call plug#begin('~/.vim/plugged')\nPlug 'junegunn/goyo.vim'\ncall plug#end()\n")),(0,r.kt)("p",null,"Save the file ",(0,r.kt)("inlineCode",{parentName:"p"},":w"),". Then install plugins by issuing ",(0,r.kt)("inlineCode",{parentName:"p"},":PlugInstall"),"."),(0,r.kt)("p",null,"You can modify or add your own settings to a plugin. For example, if you want to call ",(0,r.kt)("strong",{parentName:"p"},"Limelight")," along with ",(0,r.kt)("strong",{parentName:"p"},"Goyo"),". Go to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"~/.vim/plugged/goyo.vim/autoload/goyo.vim\n")),(0,r.kt)("p",null,"and add a line ",(0,r.kt)("inlineCode",{parentName:"p"},"Limelight"),". You may add other settings, say, ",(0,r.kt)("inlineCode",{parentName:"p"},"set spell")," etc."))}k.isMDXComponent=!0}}]);