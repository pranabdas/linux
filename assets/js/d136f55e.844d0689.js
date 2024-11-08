"use strict";(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([[292],{9011:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"jenkins","title":"CI/CD with Jenkins","description":"Installing Jenkins","source":"@site/docs/jenkins.md","sourceDirName":".","slug":"/jenkins","permalink":"/linux/jenkins","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/linux/blob/main/docs/jenkins.md","tags":[],"version":"current","frontMatter":{"title":"CI/CD with Jenkins"},"sidebar":"docs","previous":{"title":"SELinux","permalink":"/linux/selinux"},"next":{"title":"HPC","permalink":"/linux/hpc"}}');var t=s(4848),a=s(8453);const l={title:"CI/CD with Jenkins"},r=void 0,c={},o=[{value:"Installing Jenkins",id:"installing-jenkins",level:2},{value:"Running jenkins in docker",id:"running-jenkins-in-docker",level:2},{value:"Jenkins CLI tool",id:"jenkins-cli-tool",level:2},{value:"Backup and restore Jenkins data",id:"backup-and-restore-jenkins-data",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"installing-jenkins",children:"Installing Jenkins"}),"\n",(0,t.jsxs)(e.p,{children:["Install jenkins by following the instructions specific to your operating system\nof choice - ",(0,t.jsx)(e.a,{href:"https://www.jenkins.io/doc/book/installing/",children:"Installing Jenkins"}),"."]}),"\n",(0,t.jsx)(e.p,{children:"We can use bellow commands to install Jenkins in RHEL 9 system:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"dnf install -y wget java-17-openjdk\nwget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo\nrpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key\ndnf install -y jenkins\n"})}),"\n",(0,t.jsx)(e.p,{children:"Then we can use systemd to start the jenkins service:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"service jenkins start\n"})}),"\n",(0,t.jsx)(e.h2,{id:"running-jenkins-in-docker",children:"Running jenkins in docker"}),"\n",(0,t.jsx)(e.p,{children:"Pull the LTS Jenkins image:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"docker pull jenkins/jenkins:lts\n"})}),"\n",(0,t.jsx)(e.p,{children:"Run jenkins:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"docker run --detach --publish 8080:8080 --volume jenkins_home:/var/jenkins_home --name jenkins jenkins/jenkins:lts\n"})}),"\n",(0,t.jsx)(e.p,{children:"Print the initial admin password:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Go to ",(0,t.jsx)(e.a,{href:"http://localhost:8080",children:"http://localhost:8080"}),", provide the above admin password. Next step, we may\nselect install suggested plugins."]}),"\n",(0,t.jsx)(e.p,{children:"Alternatively, we could share an existing JENKINS_HOME data directory with the\ncontainer."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"export JENKINS_HOME=/workspaces/jenkins_home\ndocker run -d --rm -p 8080:8080 -v $JENKINS_HOME:/var/lib/jenkins -e JENKINS_HOME=/var/lib/jenkins jenkins/jenkins:lts\n"})}),"\n",(0,t.jsx)(e.h2,{id:"jenkins-cli-tool",children:"Jenkins CLI tool"}),"\n",(0,t.jsxs)(e.p,{children:["When the Jenkins server is running, the CLI tool can be downloaded from:\n",(0,t.jsx)(e.code,{children:"$JENKINS_URL/jnlpJars/jenkins-cli.jar"}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"wget http://localhost:8080/jnlpJars/jenkins-cli.jar\nchmod +x jenkins-cli.jar\n"})}),"\n",(0,t.jsx)(e.p,{children:"Perhaps the most important command: getting help."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"java -jar /usr/bin/jenkins-cli.jar -s http://localhost:8080 -auth $JENKINS_USER:$SECRET help\n"})}),"\n",(0,t.jsx)(e.p,{children:"List installed plugins:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"java -jar /usr/bin/jenkins-cli.jar -s http://localhost:8080 -auth $JENKINS_USER:$SECRET list-plugins\n"})}),"\n",(0,t.jsx)(e.p,{children:"Install a plugin:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"java -jar /usr/bin/jenkins-cli.jar -s http://localhost:8080 -auth $JENKINS_USER:$SECRET install-plugin <plugin-name>\njava -jar /usr/bin/jenkins-cli.jar -s http://localhost:8080 -auth $JENKINS_USER:$SECRET install-plugin git\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Update Jenkins plugins (",(0,t.jsx)(e.a,{href:"https://stackoverflow.com/a/25647793",children:"ref"}),"):"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"UPDATE_LIST=$( java -jar /root/jenkins-cli.jar -s http://localhost:8080/ -auth $JENKINS_USER:$SECRET list-plugins | grep -e ')$' | awk '{ print $1 }' );\nif [ ! -z \"${UPDATE_LIST}\" ]; then\n    echo Updating Jenkins Plugins: ${UPDATE_LIST};\n    java -jar /root/jenkins-cli.jar -s http://localhost:8080/ -auth $JENKINS_USER:$SECRET install-plugin ${UPDATE_LIST};\n    java -jar /root/jenkins-cli.jar -s http://localhost:8080/ -auth $JENKINS_USER:$SECRET safe-restart;\nfi\n"})}),"\n",(0,t.jsx)(e.h2,{id:"backup-and-restore-jenkins-data",children:"Backup and restore Jenkins data"}),"\n",(0,t.jsxs)(e.p,{children:["See ",(0,t.jsx)(e.a,{href:"https://www.jenkins.io/doc/book/system-administration/backing-up/",children:"https://www.jenkins.io/doc/book/system-administration/backing-up/"})]})]})}function h(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>r});var i=s(6540);const t={},a=i.createContext(t);function l(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);