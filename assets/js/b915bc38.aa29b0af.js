"use strict";(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([["394"],{7691:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>m,assets:()=>c,toc:()=>h,frontMatter:()=>l});var i=JSON.parse('{"id":"shell-scripting","title":"Shell scripting","description":"Choose a unique name for the scripting file. Try following commands to see if an","source":"@site/docs/shell-scripting.mdx","sourceDirName":".","slug":"/shell-scripting","permalink":"/linux/shell-scripting","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/linux/blob/main/docs/shell-scripting.mdx","tags":[],"version":"current","frontMatter":{"title":"Shell scripting","keywords":["shell scripting","bash scripting","scripting in linux"]},"sidebar":"docs","previous":{"title":"Docker","permalink":"/linux/docker"},"next":{"title":"Regular Expression","permalink":"/linux/regex"}}'),r=s("5893"),a=s("65"),t=s("5056");let l={title:"Shell scripting",keywords:["shell scripting","bash scripting","scripting in linux"]},d=void 0,c={},h=[{value:"String substitution",id:"string-substitution",level:2},{value:"Running python code in bash script",id:"running-python-code-in-bash-script",level:3},{value:"Input password",id:"input-password",level:3},{value:"Check command availability",id:"check-command-availability",level:3},{value:"Check environment variable",id:"check-environment-variable",level:3},{value:"Assign variable using basic calculator",id:"assign-variable-using-basic-calculator",level:3},{value:"Learn more",id:"learn-more",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Choose a unique name for the scripting file. Try following commands to see if an\nexecutable with the same name exists:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"type myscript\ntype -a myscript\nwhich myscript\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then we need to store our executable in the system ",(0,r.jsx)(n.code,{children:"PATH"}),". Check the existing\npaths:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"echo $PATH\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If we want to include a new path to our ",(0,r.jsx)(n.code,{children:"$PATH"})," variable, we can include\nfollowing in our ",(0,r.jsx)(n.code,{children:".bashrc"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"PATH=$PATH:/new/path\n"})}),"\n",(0,r.jsx)(n.p,{children:"or, issue this every time you restart your terminal"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'export PATH="/new/path:$PATH"\n'})}),"\n",(0,r.jsx)(n.p,{children:"We can write our script in a file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="myscript.sh"',children:'#!/bin/bash\necho "Hello world"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Next step is to grant executable permission:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"chmod +x myscript.sh\n"})}),"\n",(0,r.jsx)(n.p,{children:"We can execute the script by:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./myscript.sh\n"})}),"\n",(0,r.jsx)(n.p,{children:"We can also run the script by:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sh myscript.sh\n\nbash myscript.sh\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"sh"})," and ",(0,r.jsx)(n.strong,{children:"bash"})," are not exactly the same, and might give slightly different\nresult in some cases. bash refers to Born Again SHell while sh refers to the\noriginal UNIX shell. To know which shell interpreter is currently running,\nissue: ",(0,r.jsx)(n.code,{children:"echo $0"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"Variables:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'my_var="/home/user/pranab"\nmy_num=0\nmy_num=$((my_num + 1))\n\necho ${my_var}\necho $my_num\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"bash"})," uses capitalized variable names for global variables (e.g., ",(0,r.jsx)(n.code,{children:"PATH"}),",\n",(0,r.jsx)(n.code,{children:"PWD"}),"). Perhaps it is a good idea to name local variables with lower case\nletters to avoid conflict."]})}),"\n",(0,r.jsx)(n.p,{children:"Array:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'my_arr=("one" "two")\n\n# add item\nmy_arr+=(three)\n\n# length of an array\nlen=${#my_arr[@]}\n'})}),"\n",(0,r.jsx)(n.p,{children:"For loop:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'for i in "${my_arr[@]}"\n  do printf "${i}\\n"\ndone\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"seq"})," to create array with increment:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ my_arr2=`seq 0 2 10`; echo $my_arr2\n0\n2\n4\n6\n8\n10\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.strong,{children:"bash"})," the array index starts from 0, while in ",(0,r.jsx)(n.strong,{children:"zsh"})," it starts from 1. If\nyou want your script to be cross compatible, you may use\n",(0,r.jsx)(n.code,{children:"${array[@]:offset:length}"})," e.g., only first element ",(0,r.jsx)(n.code,{children:"${array[@]:0:1}"}),"; only\nsecond element ",(0,r.jsx)(n.code,{children:"${array[@]:1:1}"}),"; first and second element ",(0,r.jsx)(n.code,{children:"${array[@]:0:2}"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"If condition:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# if a file exists\nif [ -e ".DS_Store" ] ; then\n    rm ".DS_Store"\nfi\n\n# if a directory exists\nif [ -d "tmpdir" ] ; then\n    rm -rf tmpdir\nfi\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Common file attribute operators:"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Operator"}),(0,r.jsx)(n.th,{children:"True if"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"-a or -e"}),(0,r.jsx)(n.td,{children:"file exists"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"-d"}),(0,r.jsx)(n.td,{children:"is a directory"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"-f"}),(0,r.jsx)(n.td,{children:"is a regular file (e.g., not a directory)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"-s"}),(0,r.jsx)(n.td,{children:"not empty"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"-r/w/x"}),(0,r.jsx)(n.td,{children:"have read/write/execute permission"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Brace expansion:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ echo {1..10}\n1 2 3 4 5 6 7 8 9 10\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ echo {2020..2021}-{01..12}\n2020-01 2020-02 2020-03 2020-04 2020-05 2020-06 2020-07 2020-08\n2020-09 2020-10 2020-11 2020-12 2021-01 2021-02 2021-03 2021-04\n2021-05 2021-06 2021-07 2021-08 2021-09 2021-10 2021-11 2021-12\n"})}),"\n",(0,r.jsx)(n.p,{children:"A bash script to convert degree Celsius to Fahrenheit:"}),"\n","\n",(0,r.jsx)(t.Z,{language:"bash",title:"src/deg_f_to_c_conv.sh",showLineNumbers:!0,children:'#!/bin/bash\n# this reports undefined variables\nshopt -s -o nounset\n\n# declare integer variables\ndeclare -i tempF\ndeclare -i tempC\n\nprintf "Fahrenheit-Celsius Conversion\\n\\n"\n\n# read value via prompt\nread -p "Enter temperature in Celsius (integer only): " tempC\ntempF="9*tempC/5+32"\nprintf "The Fahrenheit temperature is %d\\n" "$tempF"\nexit 0\n'}),"\n",(0,r.jsx)(n.h2,{id:"string-substitution",children:"String substitution"}),"\n",(0,r.jsx)(n.p,{children:"Rename files example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ ls\nitem_01.txt item_03.txt item_05.txt item_07.txt item_09.txt\nitem_02.txt item_04.txt item_06.txt item_08.txt item_10.txt\n\n# match string at end with %\n$ for i in $( ls ); do mv ${i} ${i%*.txt}.md; done; ls\nitem_01.md item_03.md item_05.md item_07.md item_09.md\nitem_02.md item_04.md item_06.md item_08.md item_10.md\n\n# match string at beginning with #\n$ for i in $( ls ); do mv ${i} slide_${i#*_*}; done; ls\nslide_01.md slide_03.md slide_05.md slide_07.md slide_09.md\nslide_02.md slide_04.md slide_06.md slide_08.md slide_10.md\n\n# or\n$ for i in $( ls ); do mv ${i} slide_${i#item_*}; done\n"})}),"\n",(0,r.jsx)(n.p,{children:"Replace spaces in the filenames with underscores:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'for file in *\\ *; do mv "$file" "${file// /_}"; done\n'})}),"\n",(0,r.jsx)(n.h3,{id:"running-python-code-in-bash-script",children:"Running python code in bash script"}),"\n",(0,r.jsx)(n.p,{children:"You can include python, ruby, or any other language code in a bash script. Here\nis an example:"}),"\n","\n",(0,r.jsx)(t.Z,{language:"bash",title:"src/github_emoji.sh",showLineNumbers:!0,children:"if [ -d \"assets\" ]; then\n  rm -rf assets\nfi\nmkdir assets\n\nwget https://api.github.com/emojis -O data.json\n\npython3 <<EOF\nimport json\n\nfid = open('data.json')\ndata = json.load(fid)\nfid.close()\n\nfid = open('wget_urls', 'w')\nfor key, value in data.items():\n    fid.write(\"wget {0} -O assets/{1}.png\\n\".format(value, key))\nfid.close()\n\nfid = open('README.md', 'w')\nfid.write(\"# GitHub emoji assets\\n\\nThis repository contains the GitHub emoji assets in PNG format. Here are all the {0} emojis:\\n\\nName | Emoji\\n---- | -----\\n\".format(len(data)))\nfor key in data.keys():\n    fid.write('{0} | <img src=\"assets/{0}.png\" alt=\"{0}\" width=20/>\\n'.format(key))\nfid.close()\nEOF\n\nsh wget_urls\nrm data.json wget_urls\n"}),"\n",(0,r.jsx)(n.h3,{id:"input-password",children:"Input password"}),"\n",(0,r.jsx)(n.p,{children:"Here is a solution for the bash:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\nread -s -p "Password: " passwd; echo\n# do something with the passwd\necho $passwd\nunset passwd\n'})}),"\n",(0,r.jsx)(n.p,{children:"A POSIX compatible alternative:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'#!/bin/sh\n# disable echo\nstty -echo\nprintf "Password: "\nread passwd\n# enable echo\nstty echo\nprintf "\\n"\necho $passwd\n'})}),"\n",(0,r.jsxs)(n.p,{children:["New line in ",(0,r.jsx)(n.code,{children:"echo"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'echo -e "First line.\\nSecond line."\n'})}),"\n",(0,r.jsx)(n.h3,{id:"check-command-availability",children:"Check command availability"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'COMMANDS=("git" "node" "python3" "ruby")\n\nfor COMMAND in $COMMANDS; do\n  if ! command -v "$COMMAND" &> /dev/null; then\n    echo "Please install $COMMAND";\n    # exit 1;\n  fi\ndone\n'})}),"\n",(0,r.jsx)(n.h3,{id:"check-environment-variable",children:"Check environment variable"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'if [ -z "$HOME" ]; then\n  echo "Seems "\\$HOME" is not defined :(";\n  # exit 1;\nfi\n'})}),"\n",(0,r.jsx)(n.h3,{id:"assign-variable-using-basic-calculator",children:"Assign variable using basic calculator"}),"\n",(0,r.jsx)(n.p,{children:"Make sure you have basic calculator installed:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"apt install bc\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'var2=$(echo "scale=7;${var}/2" | bc)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Learning the bash Shell: Unix Shell Programming"})," by ",(0,r.jsx)(n.em,{children:"C. Newham"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Linux Shell Scripting With Bash"})," by ",(0,r.jsx)(n.em,{children:"K. O. Burtch"}),"."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://tldp.org/guides.html",children:"https://tldp.org/guides.html"})}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}}}]);