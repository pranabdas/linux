"use strict";(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([[678],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return t?a.createElement(d,l(l({ref:n},c),{},{components:t})):a.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4903:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],o={title:"High Performance Computing",sidebar_label:"HPC"},s=void 0,p={unversionedId:"hpc",id:"hpc",title:"High Performance Computing",description:"Basic Libraries/utilities",source:"@site/docs/hpc.md",sourceDirName:".",slug:"/hpc",permalink:"/linux/hpc",draft:!1,editUrl:"https://github.com/pranabdas/linux/blob/main/docs/hpc.md",tags:[],version:"current",frontMatter:{title:"High Performance Computing",sidebar_label:"HPC"},sidebar:"docs",previous:{title:"SELinux",permalink:"/linux/selinux"},next:{title:"Modules",permalink:"/linux/module"}},c={},u=[{value:"Basic Libraries/utilities",id:"basic-librariesutilities",level:2},{value:"MPI Libraries",id:"mpi-libraries",level:2},{value:"Math Libraries",id:"math-libraries",level:2},{value:"Intel oneAPI and MKL",id:"intel-oneapi-and-mkl",level:2},{value:"Compile Intel FFTW",id:"compile-intel-fftw",level:3},{value:"OpenMPI",id:"openmpi",level:3},{value:"Resources",id:"resources",level:2}],m={toc:u},f="wrapper";function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)(f,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"basic-librariesutilities"},"Basic Libraries/utilities"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install make\nsudo apt install gcc\nsudo apt install gfortran\n")),(0,i.kt)("h2",{id:"mpi-libraries"},"MPI Libraries"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install mpich\n")),(0,i.kt)("h2",{id:"math-libraries"},"Math Libraries"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FFTW")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install libfftw3-3\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"LAPACK, BLAS, TMGLIB"),"\nResources: ",(0,i.kt)("a",{parentName:"p",href:"http://www.netlib.org/lapack/"},"http://www.netlib.org/lapack/")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/Reference-LAPACK/lapack/archive/refs/tags/v3.10.0.tar.gz\ntar -xzvf v3.10.0.tar.gz\ncd lapack-3.10.0\ncp make.inc.example make.inc\nmake blaslib\nmake lapacklib\nmake tmglib\nsudo cp librefblas.a /usr/local/lib/libblas.a\nsudo cp liblapack.a /usr/local/lib/liblapack.a\nsudo cp libtmglib.a /usr/local/lib/libtmg.a\n")),(0,i.kt)("h2",{id:"intel-oneapi-and-mkl"},"Intel oneAPI and MKL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# download Intel oneAPI Base Toolkit\nwget https://registrationcenter-download.intel.com/akdlm/irc_nas/18673/l_BaseKit_p_2022.2.0.262_offline.sh\n\n# launch the interactive cli installation\n# sh ./l_BaseKit_p_2022.2.0.262_offline.sh -a --cli\n\n# list components included in oneAPI Base Toolkit\n# sh ./l_BaseKit_p_2022.2.0.262_offline.sh -a --list-components\n\n# install a subset of components\nsh ./l_BaseKit_p_2022.2.0.262_offline.sh -a --silent --eula accept --components intel.oneapi.lin.dpcpp-cpp-compiler:intel.oneapi.lin.mkl.devel\n\n# remove installer\nrm l_BaseKit_p_2022.2.0.262_offline.sh\n\n# download, install HPC Toolkit\nwget https://registrationcenter-download.intel.com/akdlm/irc_nas/18679/l_HPCKit_p_2022.2.0.191_offline.sh\nsh ./l_HPCKit_p_2022.2.0.191_offline.sh -a --silent --eula accept\nrm l_HPCKit_p_2022.2.0.191_offline.sh\n\n# download, install MKL library\nwget https://registrationcenter-download.intel.com/akdlm/irc_nas/18483/l_onemkl_p_2022.0.2.136_offline.sh\nsh ./l_onemkl_p_2022.0.2.136_offline.sh -a --silent --eula accept\nrm l_onemkl_p_2022.0.2.136_offline.sh\n\n# source oneAPI environment variables\nsource /opt/intel/oneapi/setvars.sh\n# source /opt/intel/oneapi/setvars.sh intel64 --force\n")),(0,i.kt)("h3",{id:"compile-intel-fftw"},"Compile Intel FFTW"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${MKLROOT}/interfaces/fftw3xf\nmake libintel64\ncp libfftw3xf_intel.a ${MKLROOT}/lib/\n")),(0,i.kt)("h3",{id:"openmpi"},"OpenMPI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# compile Open MPI with intel compiler\nwget https://download.open-mpi.org/release/open-mpi/v4.1/openmpi-4.1.4.tar.gz\ntar zxvf openmpi-4.1.4.tar.gz\ncd openmpi-4.1.4\n./configure --prefix=/opt/openmpi CC=icc CXX=icpc F77=ifort FC=ifort\nmake -j4\nmake -j4 install\necho 'export PATH=/opt/openmpi/bin:$PATH' >> ~/.bashrc\nsource ~/.bashrc\n")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://web.corral.tacc.utexas.edu/CompEdu/pdf/stc/EijkhoutIntroToHPC.pdf"},"https://web.corral.tacc.utexas.edu/CompEdu/pdf/stc/EijkhoutIntroToHPC.pdf"))))}d.isMDXComponent=!0}}]);