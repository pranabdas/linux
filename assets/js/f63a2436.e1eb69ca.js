"use strict";(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([[782],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Regular Expression"},p=void 0,s={unversionedId:"regex",id:"regex",title:"Regular Expression",description:"In order to demonstrate various examples, we will use a large text file",source:"@site/docs/regex.md",sourceDirName:".",slug:"/regex",permalink:"/linux/regex",draft:!1,editUrl:"https://github.com/pranabdas/linux/blob/main/docs/regex.md",tags:[],version:"current",frontMatter:{title:"Regular Expression"},sidebar:"docs",previous:{title:"Shell scripting",permalink:"/linux/shell-scripting"},next:{title:"Misc",permalink:"/linux/category/misc"}},d={},m=[{value:"Simple character match",id:"simple-character-match",level:3},{value:"Meta-characters",id:"meta-characters",level:3},{value:"Anchors",id:"anchors",level:3},{value:"Character class",id:"character-class",level:3},{value:"Word boundaries",id:"word-boundaries",level:3},{value:"Optional",id:"optional",level:3},{value:"Repetition",id:"repetition",level:3},{value:"Range quantifiers",id:"range-quantifiers",level:3},{value:"Grouping",id:"grouping",level:3},{value:"Resources",id:"resources",level:3}],c={toc:m};function u(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In order to demonstrate various examples, we will use a large text file\n",(0,i.kt)("a",{target:"_blank",href:n(8294).Z},"A Room with a View by E. M. Forster"),"\ndownloaded from ",(0,i.kt)("a",{parentName:"p",href:"https://www.gutenberg.org/cache/epub/2641/pg2641.txt"},"Project Gutenberg"),". We will use ",(0,i.kt)("inlineCode",{parentName:"p"},"egrep"),"\nprogram to find specific matches in the file. ",(0,i.kt)("inlineCode",{parentName:"p"},"egrep")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"grep -E")," which allows\ninterpretation of pattern as extended regular expression. We will wrap our\nregular expression in ",(0,i.kt)("inlineCode",{parentName:"p"},"'")," (single quotes, they are not the part of the regular\nexpression) e.g.,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"egrep '^cat' A_Room_with_a_View_by_E_M_Forster.txt\n")),(0,i.kt)("p",null,"Similarly, when regular expressions are processed by certain languages, we need\nto provide the regular expression enclosed between ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),", they are not the part of\nregular expression but required by the parser to identify regex."),(0,i.kt)("admonition",{title:"Good to know",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"grep")," (",(0,i.kt)("inlineCode",{parentName:"p"},"g/re/p"),") stands for Global Regular Expression Print.")),(0,i.kt)("h3",{id:"simple-character-match"},"Simple character match"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"egrep 'cat' A_Room_with_a_View_by_E_M_Forster.txt\n")),(0,i.kt)("p",null,"It will match all instances of cat such as: delicate, indicated, catching,\nlocated etc."),(0,i.kt)("h3",{id:"meta-characters"},"Meta-characters"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Wild card:")," ",(0,i.kt)("inlineCode",{parentName:"p"},".")," (dot) is the wild card meta-character, it matches any\ncharacter including spaces except newline character. E.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"/h.t/")," will match\nhot, hit, hat, that, with the, wish to ect. Similarly, ",(0,i.kt)("inlineCode",{parentName:"p"},"/.a.a.a/")," will match\nbanana or papaya."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Escape meta-character:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"/9.00/")," will match 9.00, 9500, 9:00. What do we do\nif we wanted to look for 9.00? Escape character comes to rescue: ",(0,i.kt)("inlineCode",{parentName:"p"},"/9\\.00/"),". In\ncase we want a literal back slash, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"/\\\\/"),". Do not use escape\ncharacter for characters that are not meta-character such as quotation marks.\nTab character: ",(0,i.kt)("inlineCode",{parentName:"p"},"\\t"),", newline: ",(0,i.kt)("inlineCode",{parentName:"p"},"\\n"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"\\r")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"\\r\\n"),"."),(0,i.kt)("h3",{id:"anchors"},"Anchors"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Meta-character"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"^")),(0,i.kt)("td",{parentName:"tr",align:null},"Start of line")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"$")),(0,i.kt)("td",{parentName:"tr",align:null},"End of line")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"\\A")),(0,i.kt)("td",{parentName:"tr",align:null},"start of string, never the end of line")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"\\Z")),(0,i.kt)("td",{parentName:"tr",align:null},"end of string, never the end of line")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Line start:")," Regular expression contains various ",(0,i.kt)("em",{parentName:"p"},"meta-characters")," such as\n",(0,i.kt)("inlineCode",{parentName:"p"},"^")," in the above example. It means beginning of the line, i.e., ",(0,i.kt)("inlineCode",{parentName:"p"},"/^cat/")," matches\nlines that starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"cat"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Line ending:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," represents the matches at the end of the line. Note that if\nthe line ending is CRLF (",(0,i.kt)("inlineCode",{parentName:"p"},"\\r\\n"),") instead of LF (",(0,i.kt)("inlineCode",{parentName:"p"},"\\n"),"), the unix/Linux grep might\nnot work as expected. Convert the line ending from DOS to Unix:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dos2unix filename.txt\n\n# if dos2unix is not installed, below is the command for Ubuntu/ Debian\nsudo apt update\nsudo apt install dos2unix\n")),(0,i.kt)("p",null,"Let's say we want to validate a list of email addresses. We assume that valid\nTLD are either 2 or 3 character long (e.g., .in, .com etc.):\n",(0,i.kt)("inlineCode",{parentName:"p"},"/^\\w+@\\w+\\.[a-z]{2,3}$/")),(0,i.kt)("p",null,"Line start and line ending might not work as we expect in single line mode, in\norder to enable multiline mode, we may need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"m")," after the regular\nexpression: ",(0,i.kt)("inlineCode",{parentName:"p"},"/^\\w+@\\w+\\.[a-z]{2,3}$/mgi"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"g")," for global, and ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," for case\ninsensitive."),(0,i.kt)("h3",{id:"character-class"},"Character class"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Character set:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"[ea]")," can be used to match either ",(0,i.kt)("inlineCode",{parentName:"p"},"e")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),", e.g., to match\ngrey or gray, ",(0,i.kt)("inlineCode",{parentName:"p"},"/gr[ea]y/")," or equivalently, ",(0,i.kt)("inlineCode",{parentName:"p"},"/gr[ae]y/"),", however it will not\nmatch ",(0,i.kt)("inlineCode",{parentName:"p"},"great"),". If we need to find any line starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"cat")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Cat")," we could\nuse: ",(0,i.kt)("inlineCode",{parentName:"p"},"/^[Cc]at/"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Character range:")," Say we are looking for HTML heading tags, we could use:\n",(0,i.kt)("inlineCode",{parentName:"p"},"<h[123456]>")," it will match either of ",(0,i.kt)("inlineCode",{parentName:"p"},"<h1>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<h2>"),", ..., ",(0,i.kt)("inlineCode",{parentName:"p"},"<h6>"),". We could\nsimplify above expression by using range meta-character: ",(0,i.kt)("inlineCode",{parentName:"p"},"<h[1-6]>"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"[0-9]"),"\nmatches any number, ",(0,i.kt)("inlineCode",{parentName:"p"},"[a-z]")," matches any lowercase English letters. We could use\n",(0,i.kt)("inlineCode",{parentName:"p"},"31[./-]10[./-]2022")," to match certain date with any one of the usual separators.\nRange not necessarily can have numeric or uppercase/lowercase, they are the\nASCII character ranges."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Negative character set:")," in the above example, if we used ",(0,i.kt)("inlineCode",{parentName:"p"},"/<h^[7-9]>/"),", it\nmeans matches that are not ",(0,i.kt)("inlineCode",{parentName:"p"},"<h7>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<h8>")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"<h9>"),". Similarly, we could try to\nlook for words that has q followed by another letter that is not u: ",(0,i.kt)("inlineCode",{parentName:"p"},"/q[^u]/"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"/see[^mn]/"),' will match seek or seed but not seen, seem or see. However, it will\nalso match "see." or "see ". ',(0,i.kt)("inlineCode",{parentName:"p"},"/[^a-z0-9A-Z]/")," will negate all three ranges, not\njust the first one. Notice that ",(0,i.kt)("inlineCode",{parentName:"p"},"-")," is a meta-character inside a character set,\notherwise it is just a regular character. On the other hand ",(0,i.kt)("inlineCode",{parentName:"p"},"^")," has different\nmeanings: inside a character it makes negative character set, otherwise it is a\nanchor for the line beginning. Characters (except, ",(0,i.kt)("inlineCode",{parentName:"p"},"]"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"^"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"\\"),")\ninside a character set are regular characters, we do not need to escape them.\nE.g., ",(0,i.kt)("inlineCode",{parentName:"p"},".")," is not a wild card inside character set but a literal dot.\n",(0,i.kt)("inlineCode",{parentName:"p"},"/[[(][0-9][)\\]]/")," will match either a number between parentheses or square\nbrackets. Notice how we needed to escape the closing square bracket. Match\nvirtue but not virtues: ",(0,i.kt)("inlineCode",{parentName:"p"},"/virtue[^s\\s]/"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Matching any of several sub-expressions:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"^cat|ion$")," will match any line\nstarting with cat or ending with ion. ",(0,i.kt)("inlineCode",{parentName:"p"},"^cat")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ion$")," are separate\nexpressions. In our example of ",(0,i.kt)("inlineCode",{parentName:"p"},"gr[ea]y")," could be written as ",(0,i.kt)("inlineCode",{parentName:"p"},"grey|gray"),". We can\nmatch 1st or First by ",(0,i.kt)("inlineCode",{parentName:"p"},"(1|Fir)st"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Case insensitive:")," We can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"-i")," flag with ",(0,i.kt)("inlineCode",{parentName:"p"},"egrep")," to make our lookup\ncase insensitive."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Shorthand character sets:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Shorthand"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,i.kt)("th",{parentName:"tr",align:null},"Equivalent"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\d")),(0,i.kt)("td",{parentName:"tr",align:null},"Digit"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[0-9]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\w")),(0,i.kt)("td",{parentName:"tr",align:null},"Word character"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[a-zA-Z0-9_]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\s")),(0,i.kt)("td",{parentName:"tr",align:null},"Whitespace"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[\\r\\n\\t]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\D")),(0,i.kt)("td",{parentName:"tr",align:null},"Non digit"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[^0-9]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\W")),(0,i.kt)("td",{parentName:"tr",align:null},"Non word char"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[^a-zA-Z0-9_]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\S")),(0,i.kt)("td",{parentName:"tr",align:null},"Not whitespace"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[^\\r\\n\\t]"))))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/\\d\\d\\d\\d/")," matches 1947, ",(0,i.kt)("inlineCode",{parentName:"p"},"/\\w\\w\\w/")," matches cat, Car, 123, a_1. ",(0,i.kt)("inlineCode",{parentName:"p"},"/[\\w\\-]/"),"\nwill incorporate ",(0,i.kt)("inlineCode",{parentName:"p"},"-")," with the word character. Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"/^\\d\\s/")," is not the\nsame as ",(0,i.kt)("inlineCode",{parentName:"p"},"/\\D\\S/"),", it is same as ",(0,i.kt)("inlineCode",{parentName:"p"},"/\\D\\s/"),". Note that this shorthands might not be\nsupported by all regex engines."),(0,i.kt)("h3",{id:"word-boundaries"},"Word boundaries"),(0,i.kt)("p",null,"Match any word that starts with cat:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"egrep '\\<cat' A_Room_with_a_View_by_E_M_Forster.txt\n")),(0,i.kt)("p",null,"Match any word that ends with ion:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"egrep 'ion\\>' A_Room_with_a_View_by_E_M_Forster.txt\n")),(0,i.kt)("p",null,"Word boundaries will act whenever there is a word character followed by a non-\nword character. Word characters are ",(0,i.kt)("inlineCode",{parentName:"p"},"[a-z][A-Z][0-9]_"),". Any word boundaries is\ndenoted by ",(0,i.kt)("inlineCode",{parentName:"p"},"\\b"),". Find the standalone letter a's: ",(0,i.kt)("inlineCode",{parentName:"p"},"/\\ba\\b/"),"."),(0,i.kt)("h3",{id:"optional"},"Optional"),(0,i.kt)("p",null,"How to match either color or colour: ",(0,i.kt)("inlineCode",{parentName:"p"},"colou?r"),". July or Jul: ",(0,i.kt)("inlineCode",{parentName:"p"},"July?"),". January or\nJan: ",(0,i.kt)("inlineCode",{parentName:"p"},"Jan(uary)?"),". Note that the expression inside the parenthesis could be more\ncomplex, but here it used for simple grouping for the optional."),(0,i.kt)("h3",{id:"repetition"},"Repetition"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Meta-character"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"*"),(0,i.kt)("td",{parentName:"tr",align:null},"Preceding item zero, or more times")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"+"),(0,i.kt)("td",{parentName:"tr",align:null},"Preceding item one or more times")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"?"),(0,i.kt)("td",{parentName:"tr",align:null},"Preceding item one or zero times")))),(0,i.kt)("p",null,"Match ",(0,i.kt)("inlineCode",{parentName:"p"},"<h3 size=14>"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"egrep <h3 +size *= *14 *> filename.txt\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/apples*/")," will match apple, apples, or applesss. ",(0,i.kt)("inlineCode",{parentName:"p"},"/apples+/")," will match\napples, or applesss but not apple. ",(0,i.kt)("inlineCode",{parentName:"p"},"/apples?/")," will match apple and apples, but\nnot applesss."),(0,i.kt)("p",null,"Match any size value above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"egrep <h3 +size *= *[0-9]+ *> filename.txt\n")),(0,i.kt)("p",null,"Match any tag with or without size attribute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"egrep <h3( +size *= *[0-9]+)? *> filename.txt\n")),(0,i.kt)("h3",{id:"range-quantifiers"},"Range quantifiers"),(0,i.kt)("p",null,"Match 8 to 10 digit numbers: ",(0,i.kt)("inlineCode",{parentName:"p"},"[0-9]{8,10}"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"{0,1}")," is same as ",(0,i.kt)("inlineCode",{parentName:"p"},"?"),"; ",(0,i.kt)("inlineCode",{parentName:"p"},"{1,}")," is\nsame as ",(0,i.kt)("inlineCode",{parentName:"p"},"+"),"; ",(0,i.kt)("inlineCode",{parentName:"p"},"{0,}")," same as ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),". Validate US phone numbers:\n",(0,i.kt)("inlineCode",{parentName:"p"},"/\\d{3}-\\d{3}-\\d{4}/")," matches 234-456-6789."),(0,i.kt)("h3",{id:"grouping"},"Grouping"),(0,i.kt)("p",null,"We use ",(0,i.kt)("inlineCode",{parentName:"p"},"()")," to group. ",(0,i.kt)("inlineCode",{parentName:"p"},"/(abc)+/")," will match abc or abcabc or abcabcabc."),(0,i.kt)("h3",{id:"resources"},"Resources"),(0,i.kt)("p",null,"Online Regex Playground: ",(0,i.kt)("a",{parentName:"p",href:"https://regexr.com"},"https://regexr.com")))}u.isMDXComponent=!0},8294:function(e,t,n){t.Z=n.p+"assets/files/A_Room_with_a_View_by_E_M_Forster-2fda092ca8540fd6490c64898da1b08a.txt"}}]);