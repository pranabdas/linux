"use strict";(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([[920],{2027:function(e,t,r){r.r(t),r.d(t,{default:function(){return M}});var n=r(7855),a=r(4165),l=r(5861),u=r(7294),c=r(2263),s=r(8765),o=r(5742),i=r(9960),m=r(5999),h=["zero","one","two","few","many","other"];function f(e){return h.filter((function(t){return e.includes(t)}))}var p={locale:"en",pluralForms:f(["one","other"]),select:function(e){return 1===e?"one":"other"}};function g(){var e=(0,c.Z)().i18n.currentLocale;return(0,u.useMemo)((function(){try{return t=e,r=new Intl.PluralRules(t),{locale:t,pluralForms:f(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),p}var t,r}),[e])}function d(){var e=g();return{selectMessage:function(t,r){return function(e,t,r){var n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);var a=r.select(t),l=r.pluralForms.indexOf(a);return n[Math.min(l,n.length-1)]}(r,t,e)}}}var v=r(6550),E=r(412);var y=function(){var e=(0,v.k6)(),t=(0,v.TH)(),r=(0,c.Z)().siteConfig.baseUrl,n=E.Z.canUseDOM?new URLSearchParams(t.search):null,a=(null==n?void 0:n.get("q"))||"",l=(null==n?void 0:n.get("ctx"))||"",u=(null==n?void 0:n.get("version"))||"",s=function(e){var r=new URLSearchParams(t.search);return e?r.set("q",e):r.delete("q"),r};return{searchValue:a,searchContext:l,searchVersion:u,updateSearchPath:function(t){var r=s(t);e.replace({search:r.toString()})},generateSearchPageLink:function(e){var t=s(e);return r+"search?"+t.toString()}}},S=r(22),w=r(8202),x=r(2539),b=r(726),I=r(1073),P=r(311),F=r(3926),R=r(1029),Z="searchQueryInput_CFBF",_="searchResultItem_U687",k="searchResultItemPath_uIbk",C="searchResultItemSummary_oZHr";function T(){var e=(0,c.Z)().siteConfig.baseUrl,t=d().selectMessage,r=y(),n=r.searchValue,s=r.searchContext,i=r.searchVersion,h=r.updateSearchPath,f=(0,u.useState)(n),p=f[0],g=f[1],v=(0,u.useState)(),E=v[0],x=v[1],b=(0,u.useState)(),I=b[0],F=b[1],R=""+e+i,_=(0,u.useMemo)((function(){return p?(0,m.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:p}):(0,m.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})}),[p]);(0,u.useEffect)((function(){h(p),E&&(p?E(p,(function(e){F(e)})):F(void 0))}),[p,E]);var k=(0,u.useCallback)((function(e){g(e.target.value)}),[]);return(0,u.useEffect)((function(){n&&n!==p&&g(n)}),[n]),(0,u.useEffect)((function(){function e(){return(e=(0,l.Z)((0,a.Z)().mark((function e(){var t,r,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,S.w)(R,s);case 2:t=e.sent,r=t.wrappedIndexes,n=t.zhDictionary,x((function(){return(0,w.v)(r,n,100)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s,R]),u.createElement(u.Fragment,null,u.createElement(o.Z,null,u.createElement("meta",{property:"robots",content:"noindex, follow"}),u.createElement("title",null,_)),u.createElement("div",{className:"container margin-vert--lg"},u.createElement("h1",null,_),u.createElement("input",{type:"search",name:"q",className:Z,"aria-label":"Search",onChange:k,value:p,autoComplete:"off",autoFocus:!0}),!E&&p&&u.createElement("div",null,u.createElement(P.Z,null)),I&&(I.length>0?u.createElement("p",null,t(I.length,(0,m.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:I.length}))):u.createElement("p",null,(0,m.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),u.createElement("section",null,I&&I.map((function(e){return u.createElement(q,{key:e.document.i,searchResult:e})})))))}function q(e){var t=e.searchResult,r=t.document,a=t.type,l=t.page,c=t.tokens,s=t.metadata,o=0===a,m=2===a,h=(o?r.b:l.b).slice(),f=m?r.s:r.t;o||h.push(l.t);var p="";if(R.vc&&c.length>0){for(var g,d=new URLSearchParams,v=(0,n.Z)(c);!(g=v()).done;){var E=g.value;d.append("_highlight",E)}p="?"+d.toString()}return u.createElement("article",{className:_},u.createElement("h2",null,u.createElement(i.Z,{to:r.u+p+(r.h||""),dangerouslySetInnerHTML:{__html:m?(0,x.C)(f,c):(0,b.o)(f,(0,I.m)(s,"t"),c,100)}})),h.length>0&&u.createElement("p",{className:k},(0,F.e)(h)),m&&u.createElement("p",{className:C,dangerouslySetInnerHTML:{__html:(0,b.o)(r.t,(0,I.m)(s,"t"),c,100)}}))}var M=function(){return u.createElement(s.Z,null,u.createElement(T,null))}}}]);