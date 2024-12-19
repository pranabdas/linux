(self.webpackChunklinux_tutorial=self.webpackChunklinux_tutorial||[]).push([["354"],{1336:function(e){!function(){var t,r,n,i,s,o,a,l,u,c,h,d,f,p,y,m,g,v,x,w,E,Q,b,k,S,L,T,P,I,O=function(e){var t=new O.Builder;return t.pipeline.add(O.trimmer,O.stopWordFilter,O.stemmer),t.searchPipeline.add(O.stemmer),e.call(t,t),t.build()};O.version="2.3.9",O.utils={},O.utils.warn=(t=this,function(e){t.console&&console.warn&&console.warn(e)}),O.utils.asString=function(e){return null==e?"":e.toString()},O.utils.clone=function(e){if(null==e)return e;for(var t=Object.create(null),r=Object.keys(e),n=0;n<r.length;n++){var i=r[n],s=e[i];if(Array.isArray(s)){t[i]=s.slice();continue}if("string"==typeof s||"number"==typeof s||"boolean"==typeof s){t[i]=s;continue}throw TypeError("clone is not deep and does not support nested objects")}return t},O.FieldRef=function(e,t,r){this.docRef=e,this.fieldName=t,this._stringValue=r},O.FieldRef.joiner="/",O.FieldRef.fromString=function(e){var t=e.indexOf(O.FieldRef.joiner);if(-1===t)throw"malformed field ref string";var r=e.slice(0,t),n=e.slice(t+1);return new O.FieldRef(n,r,e)},O.FieldRef.prototype.toString=function(){return void 0==this._stringValue&&(this._stringValue=this.fieldName+O.FieldRef.joiner+this.docRef),this._stringValue},O.Set=function(e){if(this.elements=Object.create(null),e){this.length=e.length;for(var t=0;t<this.length;t++)this.elements[e[t]]=!0}else this.length=0},O.Set.complete={intersect:function(e){return e},union:function(){return this},contains:function(){return!0}},O.Set.empty={intersect:function(){return this},union:function(e){return e},contains:function(){return!1}},O.Set.prototype.contains=function(e){return!!this.elements[e]},O.Set.prototype.intersect=function(e){var t,r,n,i=[];if(e===O.Set.complete)return this;if(e===O.Set.empty)return e;this.length<e.length?(t=this,r=e):(t=e,r=this),n=Object.keys(t.elements);for(var s=0;s<n.length;s++){var o=n[s];o in r.elements&&i.push(o)}return new O.Set(i)},O.Set.prototype.union=function(e){return e===O.Set.complete?O.Set.complete:e===O.Set.empty?this:new O.Set(Object.keys(this.elements).concat(Object.keys(e.elements)))},O.idf=function(e,t){var r=0;for(var n in e)"_index"!=n&&(r+=Object.keys(e[n]).length);return Math.log(1+Math.abs((t-r+.5)/(r+.5)))},O.Token=function(e,t){this.str=e||"",this.metadata=t||{}},O.Token.prototype.toString=function(){return this.str},O.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},O.Token.prototype.clone=function(e){return e=e||function(e){return e},new O.Token(e(this.str,this.metadata),this.metadata)},O.tokenizer=function(e,t){if(null==e||void 0==e)return[];if(Array.isArray(e))return e.map(function(e){return new O.Token(O.utils.asString(e).toLowerCase(),O.utils.clone(t))});for(var r=e.toString().toLowerCase(),n=r.length,i=[],s=0,o=0;s<=n;s++){var a=r.charAt(s),l=s-o;if(a.match(O.tokenizer.separator)||s==n){if(l>0){var u=O.utils.clone(t)||{};u.position=[o,l],u.index=i.length,i.push(new O.Token(r.slice(o,s),u))}o=s+1}}return i},O.tokenizer.separator=/[\s\-]+/,O.Pipeline=function(){this._stack=[]},O.Pipeline.registeredFunctions=Object.create(null),O.Pipeline.registerFunction=function(e,t){t in this.registeredFunctions&&O.utils.warn("Overwriting existing registered function: "+t),e.label=t,O.Pipeline.registeredFunctions[e.label]=e},O.Pipeline.warnIfFunctionNotRegistered=function(e){!(e.label&&e.label in this.registeredFunctions)&&O.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},O.Pipeline.load=function(e){var t=new O.Pipeline;return e.forEach(function(e){var r=O.Pipeline.registeredFunctions[e];if(r)t.add(r);else throw Error("Cannot load unregistered function: "+e)}),t},O.Pipeline.prototype.add=function(){var e=Array.prototype.slice.call(arguments);e.forEach(function(e){O.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)},this)},O.Pipeline.prototype.after=function(e,t){O.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw Error("Cannot find existingFn");r+=1,this._stack.splice(r,0,t)},O.Pipeline.prototype.before=function(e,t){O.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw Error("Cannot find existingFn");this._stack.splice(r,0,t)},O.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);if(-1!=t)this._stack.splice(t,1)},O.Pipeline.prototype.run=function(e){for(var t=this._stack.length,r=0;r<t;r++){for(var n=this._stack[r],i=[],s=0;s<e.length;s++){var o=n(e[s],s,e);if(null!=o&&""!==o){if(Array.isArray(o))for(var a=0;a<o.length;a++)i.push(o[a]);else i.push(o)}}e=i}return e},O.Pipeline.prototype.runString=function(e,t){var r=new O.Token(e,t);return this.run([r]).map(function(e){return e.toString()})},O.Pipeline.prototype.reset=function(){this._stack=[]},O.Pipeline.prototype.toJSON=function(){return this._stack.map(function(e){return O.Pipeline.warnIfFunctionNotRegistered(e),e.label})},O.Vector=function(e){this._magnitude=0,this.elements=e||[]},O.Vector.prototype.positionForIndex=function(e){if(0==this.elements.length)return 0;for(var t=0,r=this.elements.length/2,n=r-t,i=Math.floor(n/2),s=this.elements[2*i];n>1&&(s<e&&(t=i),s>e&&(r=i),s!=e);){;n=r-t,i=t+Math.floor(n/2),s=this.elements[2*i]}return s==e||s>e?2*i:s<e?(i+1)*2:void 0},O.Vector.prototype.insert=function(e,t){this.upsert(e,t,function(){throw"duplicate index"})},O.Vector.prototype.upsert=function(e,t,r){this._magnitude=0;var n=this.positionForIndex(e);this.elements[n]==e?this.elements[n+1]=r(this.elements[n+1],t):this.elements.splice(n,0,e,t)},O.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e=0,t=this.elements.length,r=1;r<t;r+=2){var n=this.elements[r];e+=n*n}return this._magnitude=Math.sqrt(e)},O.Vector.prototype.dot=function(e){for(var t=0,r=this.elements,n=e.elements,i=r.length,s=n.length,o=0,a=0,l=0,u=0;l<i&&u<s;)o=r[l],o<(a=n[u])?l+=2:o>a?u+=2:o==a&&(t+=r[l+1]*n[u+1],l+=2,u+=2);return t},O.Vector.prototype.similarity=function(e){return this.dot(e)/this.magnitude()||0},O.Vector.prototype.toArray=function(){for(var e=Array(this.elements.length/2),t=1,r=0;t<this.elements.length;t+=2,r++)e[r]=this.elements[t];return e},O.Vector.prototype.toJSON=function(){return this.elements},O.stemmer=(r={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},n={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},a=RegExp("^("+(s="[^aeiou][^aeiouy]*")+")?"+(o=(i="[aeiouy]")+"[aeiou]*")+s),l=RegExp("^("+s+")?"+o+s+o+s),u=RegExp("^("+s+")?"+o+s+"("+o+")?$"),c=RegExp("^("+s+")?"+i),h=/^(.+?)(ss|i)es$/,d=/^(.+?)([^s])s$/,f=/^(.+?)eed$/,p=/^(.+?)(ed|ing)$/,y=/.$/,m=/(at|bl|iz)$/,g=RegExp("([^aeiouylsz])\\1$"),v=RegExp("^"+s+i+"[^aeiouwxy]$"),x=/^(.+?[^aeiou])y$/,w=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,E=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,Q=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,b=/^(.+?)(s|t)(ion)$/,k=/^(.+?)e$/,S=/ll$/,L=RegExp("^"+s+i+"[^aeiouwxy]$"),T=function(e){var t,i,s,o,T,P;if(e.length<3)return e;if("y"==(s=e.substr(0,1))&&(e=s.toUpperCase()+e.substr(1)),o=h,T=d,o.test(e)?e=e.replace(o,"$1$2"):T.test(e)&&(e=e.replace(T,"$1$2")),o=f,T=p,o.test(e)){var I=o.exec(e);(o=a).test(I[1])&&(o=y,e=e.replace(o,""))}else if(T.test(e)){var I=T.exec(e);if(t=I[1],(T=c).test(t)){e=t,T=m,P=g;T.test(e)?e+="e":P.test(e)?(o=y,e=e.replace(o,"")):v.test(e)&&(e+="e")}}if((o=x).test(e)){var I=o.exec(e);e=(t=I[1])+"i"}if((o=w).test(e)){var I=o.exec(e);t=I[1],i=I[2],(o=a).test(t)&&(e=t+r[i])}if((o=E).test(e)){var I=o.exec(e);t=I[1],i=I[2],(o=a).test(t)&&(e=t+n[i])}if(o=Q,T=b,o.test(e)){var I=o.exec(e);t=I[1],(o=l).test(t)&&(e=t)}else if(T.test(e)){var I=T.exec(e);t=I[1]+I[2],(T=l).test(t)&&(e=t)}if((o=k).test(e)){var I=o.exec(e);t=I[1],o=l,T=u,P=L,(o.test(t)||T.test(t)&&!P.test(t))&&(e=t)}return o=S,T=l,o.test(e)&&T.test(e)&&(o=y,e=e.replace(o,"")),"y"==s&&(e=s.toLowerCase()+e.substr(1)),e},function(e){return e.update(T)}),O.Pipeline.registerFunction(O.stemmer,"stemmer"),O.generateStopWordFilter=function(e){var t=e.reduce(function(e,t){return e[t]=t,e},{});return function(e){if(e&&t[e.toString()]!==e.toString())return e}},O.stopWordFilter=O.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),O.Pipeline.registerFunction(O.stopWordFilter,"stopWordFilter"),O.trimmer=function(e){return e.update(function(e){return e.replace(/^\W+/,"").replace(/\W+$/,"")})},O.Pipeline.registerFunction(O.trimmer,"trimmer"),O.TokenSet=function(){this.final=!1,this.edges={},this.id=O.TokenSet._nextId,O.TokenSet._nextId+=1},O.TokenSet._nextId=1,O.TokenSet.fromArray=function(e){for(var t=new O.TokenSet.Builder,r=0,n=e.length;r<n;r++)t.insert(e[r]);return t.finish(),t.root},O.TokenSet.fromClause=function(e){return"editDistance"in e?O.TokenSet.fromFuzzyString(e.term,e.editDistance):O.TokenSet.fromString(e.term)},O.TokenSet.fromFuzzyString=function(e,t){for(var r=new O.TokenSet,n=[{node:r,editsRemaining:t,str:e}];n.length;){var i=n.pop();if(i.str.length>0){var s,o=i.str.charAt(0);o in i.node.edges?s=i.node.edges[o]:(s=new O.TokenSet,i.node.edges[o]=s),1==i.str.length&&(s.final=!0),n.push({node:s,editsRemaining:i.editsRemaining,str:i.str.slice(1)})}if(0!=i.editsRemaining){if("*"in i.node.edges)var a=i.node.edges["*"];else{var a=new O.TokenSet;i.node.edges["*"]=a}if(0==i.str.length&&(a.final=!0),n.push({node:a,editsRemaining:i.editsRemaining-1,str:i.str}),i.str.length>1&&n.push({node:i.node,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)}),1==i.str.length&&(i.node.final=!0),i.str.length>=1){if("*"in i.node.edges)var l=i.node.edges["*"];else{var l=new O.TokenSet;i.node.edges["*"]=l}1==i.str.length&&(l.final=!0),n.push({node:l,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)})}if(i.str.length>1){var u,c=i.str.charAt(0),h=i.str.charAt(1);h in i.node.edges?u=i.node.edges[h]:(u=new O.TokenSet,i.node.edges[h]=u),1==i.str.length&&(u.final=!0),n.push({node:u,editsRemaining:i.editsRemaining-1,str:c+i.str.slice(2)})}}}return r},O.TokenSet.fromString=function(e){for(var t=new O.TokenSet,r=t,n=0,i=e.length;n<i;n++){var s=e[n],o=n==i-1;if("*"==s)t.edges[s]=t,t.final=o;else{var a=new O.TokenSet;a.final=o,t.edges[s]=a,t=a}}return r},O.TokenSet.prototype.toArray=function(){for(var e=[],t=[{prefix:"",node:this}];t.length;){var r=t.pop(),n=Object.keys(r.node.edges),i=n.length;r.node.final&&(r.prefix.charAt(0),e.push(r.prefix));for(var s=0;s<i;s++){var o=n[s];t.push({prefix:r.prefix.concat(o),node:r.node.edges[o]})}}return e},O.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var e=this.final?"1":"0",t=Object.keys(this.edges).sort(),r=t.length,n=0;n<r;n++){var i=t[n],s=this.edges[i];e=e+i+s.id}return e},O.TokenSet.prototype.intersect=function(e){for(var t=new O.TokenSet,r=void 0,n=[{qNode:e,output:t,node:this}];n.length;){for(var i=Object.keys((r=n.pop()).qNode.edges),s=i.length,o=Object.keys(r.node.edges),a=o.length,l=0;l<s;l++){for(var u=i[l],c=0;c<a;c++){var h=o[c];if(h==u||"*"==u){var d=r.node.edges[h],f=r.qNode.edges[u],p=d.final&&f.final,y=void 0;h in r.output.edges?(y=r.output.edges[h]).final=y.final||p:((y=new O.TokenSet).final=p,r.output.edges[h]=y),n.push({qNode:f,output:y,node:d})}}}}return t},O.TokenSet.Builder=function(){this.previousWord="",this.root=new O.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},O.TokenSet.Builder.prototype.insert=function(e){var t,r=0;if(e<this.previousWord)throw Error("Out of order word insertion");for(var n=0;n<e.length&&n<this.previousWord.length&&e[n]==this.previousWord[n];n++)r++;this.minimize(r),t=0==this.uncheckedNodes.length?this.root:this.uncheckedNodes[this.uncheckedNodes.length-1].child;for(var n=r;n<e.length;n++){var i=new O.TokenSet,s=e[n];t.edges[s]=i,this.uncheckedNodes.push({parent:t,char:s,child:i}),t=i}t.final=!0,this.previousWord=e},O.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},O.TokenSet.Builder.prototype.minimize=function(e){for(var t=this.uncheckedNodes.length-1;t>=e;t--){var r=this.uncheckedNodes[t],n=r.child.toString();n in this.minimizedNodes?r.parent.edges[r.char]=this.minimizedNodes[n]:(r.child._str=n,this.minimizedNodes[n]=r.child),this.uncheckedNodes.pop()}},O.Index=function(e){this.invertedIndex=e.invertedIndex,this.fieldVectors=e.fieldVectors,this.tokenSet=e.tokenSet,this.fields=e.fields,this.pipeline=e.pipeline},O.Index.prototype.search=function(e){return this.query(function(t){new O.QueryParser(e,t).parse()})},O.Index.prototype.query=function(e){for(var t=new O.Query(this.fields),r=Object.create(null),n=Object.create(null),i=Object.create(null),s=Object.create(null),o=Object.create(null),a=0;a<this.fields.length;a++)n[this.fields[a]]=new O.Vector;e.call(t,t);for(var a=0;a<t.clauses.length;a++){var l=t.clauses[a],u=null,c=O.Set.empty;u=l.usePipeline?this.pipeline.runString(l.term,{fields:l.fields}):[l.term];for(var h=0;h<u.length;h++){var d=u[h];l.term=d;var f=O.TokenSet.fromClause(l),p=this.tokenSet.intersect(f).toArray();if(0===p.length&&l.presence===O.Query.presence.REQUIRED){for(var y=0;y<l.fields.length;y++){var m=l.fields[y];s[m]=O.Set.empty}break}for(var g=0;g<p.length;g++){for(var v=p[g],x=this.invertedIndex[v],w=x._index,y=0;y<l.fields.length;y++){var m=l.fields[y],E=x[m],Q=Object.keys(E),b=v+"/"+m,k=new O.Set(Q);if(l.presence==O.Query.presence.REQUIRED&&(c=c.union(k),void 0===s[m]&&(s[m]=O.Set.complete)),l.presence==O.Query.presence.PROHIBITED){void 0===o[m]&&(o[m]=O.Set.empty),o[m]=o[m].union(k);continue}if(n[m].upsert(w,l.boost,function(e,t){return e+t}),!i[b]){for(var S=0;S<Q.length;S++){var L,T=Q[S],P=new O.FieldRef(T,m),I=E[T];void 0===(L=r[P])?r[P]=new O.MatchData(v,m,I):L.add(v,m,I)}i[b]=!0}}}}if(l.presence===O.Query.presence.REQUIRED)for(var y=0;y<l.fields.length;y++){var m=l.fields[y];s[m]=s[m].intersect(c)}}for(var R=O.Set.complete,F=O.Set.empty,a=0;a<this.fields.length;a++){var m=this.fields[a];s[m]&&(R=R.intersect(s[m])),o[m]&&(F=F.union(o[m]))}var C=Object.keys(r),N=[],j=Object.create(null);if(t.isNegated()){C=Object.keys(this.fieldVectors);for(var a=0;a<C.length;a++){var P=C[a],_=O.FieldRef.fromString(P);r[P]=new O.MatchData}}for(var a=0;a<C.length;a++){var _=O.FieldRef.fromString(C[a]),D=_.docRef;if(!(!R.contains(D)||F.contains(D))){var A,z=this.fieldVectors[_],M=n[_.fieldName].similarity(z);if(void 0!==(A=j[D]))A.score+=M,A.matchData.combine(r[_]);else{var B={ref:D,score:M,matchData:r[_]};j[D]=B,N.push(B)}}}return N.sort(function(e,t){return t.score-e.score})},O.Index.prototype.toJSON=function(){var e=Object.keys(this.invertedIndex).sort().map(function(e){return[e,this.invertedIndex[e]]},this),t=Object.keys(this.fieldVectors).map(function(e){return[e,this.fieldVectors[e].toJSON()]},this);return{version:O.version,fields:this.fields,fieldVectors:t,invertedIndex:e,pipeline:this.pipeline.toJSON()}},O.Index.load=function(e){var t={},r={},n=e.fieldVectors,i=Object.create(null),s=e.invertedIndex,o=new O.TokenSet.Builder,a=O.Pipeline.load(e.pipeline);e.version!=O.version&&O.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+O.version+"' does not match serialized index '"+e.version+"'");for(var l=0;l<n.length;l++){var u=n[l],c=u[0],h=u[1];r[c]=new O.Vector(h)}for(var l=0;l<s.length;l++){var u=s[l],d=u[0],f=u[1];o.insert(d),i[d]=f}return o.finish(),t.fields=e.fields,t.fieldVectors=r,t.invertedIndex=i,t.tokenSet=o.root,t.pipeline=a,new O.Index(t)},O.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=O.tokenizer,this.pipeline=new O.Pipeline,this.searchPipeline=new O.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},O.Builder.prototype.ref=function(e){this._ref=e},O.Builder.prototype.field=function(e,t){if(/\//.test(e))throw RangeError("Field '"+e+"' contains illegal character '/'");this._fields[e]=t||{}},O.Builder.prototype.b=function(e){e<0?this._b=0:e>1?this._b=1:this._b=e},O.Builder.prototype.k1=function(e){this._k1=e},O.Builder.prototype.add=function(e,t){var r=e[this._ref],n=Object.keys(this._fields);this._documents[r]=t||{},this.documentCount+=1;for(var i=0;i<n.length;i++){var s=n[i],o=this._fields[s].extractor,a=o?o(e):e[s],l=this.tokenizer(a,{fields:[s]}),u=this.pipeline.run(l),c=new O.FieldRef(r,s),h=Object.create(null);this.fieldTermFrequencies[c]=h,this.fieldLengths[c]=0,this.fieldLengths[c]+=u.length;for(var d=0;d<u.length;d++){var f=u[d];if(void 0==h[f]&&(h[f]=0),h[f]+=1,void 0==this.invertedIndex[f]){var p=Object.create(null);p._index=this.termIndex,this.termIndex+=1;for(var y=0;y<n.length;y++)p[n[y]]=Object.create(null);this.invertedIndex[f]=p}void 0==this.invertedIndex[f][s][r]&&(this.invertedIndex[f][s][r]=Object.create(null));for(var m=0;m<this.metadataWhitelist.length;m++){var g=this.metadataWhitelist[m],v=f.metadata[g];void 0==this.invertedIndex[f][s][r][g]&&(this.invertedIndex[f][s][r][g]=[]),this.invertedIndex[f][s][r][g].push(v)}}}},O.Builder.prototype.calculateAverageFieldLengths=function(){for(var e=Object.keys(this.fieldLengths),t=e.length,r={},n={},i=0;i<t;i++){var s=O.FieldRef.fromString(e[i]),o=s.fieldName;n[o]||(n[o]=0),n[o]+=1,r[o]||(r[o]=0),r[o]+=this.fieldLengths[s]}for(var a=Object.keys(this._fields),i=0;i<a.length;i++){var l=a[i];r[l]=r[l]/n[l]}this.averageFieldLength=r},O.Builder.prototype.createFieldVectors=function(){for(var e={},t=Object.keys(this.fieldTermFrequencies),r=t.length,n=Object.create(null),i=0;i<r;i++){for(var s=O.FieldRef.fromString(t[i]),o=s.fieldName,a=this.fieldLengths[s],l=new O.Vector,u=this.fieldTermFrequencies[s],c=Object.keys(u),h=c.length,d=this._fields[o].boost||1,f=this._documents[s.docRef].boost||1,p=0;p<h;p++){var y,m,g,v=c[p],x=u[v],w=this.invertedIndex[v]._index;void 0===n[v]?(y=O.idf(this.invertedIndex[v],this.documentCount),n[v]=y):y=n[v],g=Math.round(1e3*(m=y*((this._k1+1)*x)/(this._k1*(1-this._b+this._b*(a/this.averageFieldLength[o]))+x)*d*f))/1e3,l.insert(w,g)}e[s]=l}this.fieldVectors=e},O.Builder.prototype.createTokenSet=function(){this.tokenSet=O.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},O.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new O.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},O.Builder.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},O.MatchData=function(e,t,r){for(var n=Object.create(null),i=Object.keys(r||{}),s=0;s<i.length;s++){var o=i[s];n[o]=r[o].slice()}this.metadata=Object.create(null),void 0!==e&&(this.metadata[e]=Object.create(null),this.metadata[e][t]=n)},O.MatchData.prototype.combine=function(e){for(var t=Object.keys(e.metadata),r=0;r<t.length;r++){var n=t[r],i=Object.keys(e.metadata[n]);void 0==this.metadata[n]&&(this.metadata[n]=Object.create(null));for(var s=0;s<i.length;s++){var o=i[s],a=Object.keys(e.metadata[n][o]);void 0==this.metadata[n][o]&&(this.metadata[n][o]=Object.create(null));for(var l=0;l<a.length;l++){var u=a[l];void 0==this.metadata[n][o][u]?this.metadata[n][o][u]=e.metadata[n][o][u]:this.metadata[n][o][u]=this.metadata[n][o][u].concat(e.metadata[n][o][u])}}}},O.MatchData.prototype.add=function(e,t,r){if(!(e in this.metadata)){this.metadata[e]=Object.create(null),this.metadata[e][t]=r;return}if(!(t in this.metadata[e])){this.metadata[e][t]=r;return}for(var n=Object.keys(r),i=0;i<n.length;i++){var s=n[i];s in this.metadata[e][t]?this.metadata[e][t][s]=this.metadata[e][t][s].concat(r[s]):this.metadata[e][t][s]=r[s]}},O.Query=function(e){this.clauses=[],this.allFields=e},O.Query.wildcard=new String("*"),O.Query.wildcard.NONE=0,O.Query.wildcard.LEADING=1,O.Query.wildcard.TRAILING=2,O.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},O.Query.prototype.clause=function(e){return!("fields"in e)&&(e.fields=this.allFields),!("boost"in e)&&(e.boost=1),!("usePipeline"in e)&&(e.usePipeline=!0),!("wildcard"in e)&&(e.wildcard=O.Query.wildcard.NONE),e.wildcard&O.Query.wildcard.LEADING&&e.term.charAt(0)!=O.Query.wildcard&&(e.term="*"+e.term),e.wildcard&O.Query.wildcard.TRAILING&&e.term.slice(-1)!=O.Query.wildcard&&(e.term=""+e.term+"*"),!("presence"in e)&&(e.presence=O.Query.presence.OPTIONAL),this.clauses.push(e),this},O.Query.prototype.isNegated=function(){for(var e=0;e<this.clauses.length;e++)if(this.clauses[e].presence!=O.Query.presence.PROHIBITED)return!1;return!0},O.Query.prototype.term=function(e,t){if(Array.isArray(e))return e.forEach(function(e){this.term(e,O.utils.clone(t))},this),this;var r=t||{};return r.term=e.toString(),this.clause(r),this},O.QueryParseError=function(e,t,r){this.name="QueryParseError",this.message=e,this.start=t,this.end=r},O.QueryParseError.prototype=Error(),O.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},O.QueryLexer.prototype.run=function(){for(var e=O.QueryLexer.lexText;e;)e=e(this)},O.QueryLexer.prototype.sliceString=function(){for(var e=[],t=this.start,r=this.pos,n=0;n<this.escapeCharPositions.length;n++)r=this.escapeCharPositions[n],e.push(this.str.slice(t,r)),t=r+1;return e.push(this.str.slice(t,this.pos)),this.escapeCharPositions.length=0,e.join("")},O.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},O.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},O.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return O.QueryLexer.EOS;var e=this.str.charAt(this.pos);return this.pos+=1,e},O.QueryLexer.prototype.width=function(){return this.pos-this.start},O.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},O.QueryLexer.prototype.backup=function(){this.pos-=1},O.QueryLexer.prototype.acceptDigitRun=function(){var e,t;do t=(e=this.next()).charCodeAt(0);while(t>47&&t<58);e!=O.QueryLexer.EOS&&this.backup()},O.QueryLexer.prototype.more=function(){return this.pos<this.length},O.QueryLexer.EOS="EOS",O.QueryLexer.FIELD="FIELD",O.QueryLexer.TERM="TERM",O.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",O.QueryLexer.BOOST="BOOST",O.QueryLexer.PRESENCE="PRESENCE",O.QueryLexer.lexField=function(e){return e.backup(),e.emit(O.QueryLexer.FIELD),e.ignore(),O.QueryLexer.lexText},O.QueryLexer.lexTerm=function(e){if(e.width()>1&&(e.backup(),e.emit(O.QueryLexer.TERM)),e.ignore(),e.more())return O.QueryLexer.lexText},O.QueryLexer.lexEditDistance=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(O.QueryLexer.EDIT_DISTANCE),O.QueryLexer.lexText},O.QueryLexer.lexBoost=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(O.QueryLexer.BOOST),O.QueryLexer.lexText},O.QueryLexer.lexEOS=function(e){e.width()>0&&e.emit(O.QueryLexer.TERM)},O.QueryLexer.termSeparator=O.tokenizer.separator,O.QueryLexer.lexText=function(e){for(;;){var t=e.next();if(t==O.QueryLexer.EOS)return O.QueryLexer.lexEOS;if(92==t.charCodeAt(0)){e.escapeCharacter();continue}if(":"==t)return O.QueryLexer.lexField;if("~"==t)return e.backup(),e.width()>0&&e.emit(O.QueryLexer.TERM),O.QueryLexer.lexEditDistance;if("^"==t)return e.backup(),e.width()>0&&e.emit(O.QueryLexer.TERM),O.QueryLexer.lexBoost;if("+"==t&&1===e.width()||"-"==t&&1===e.width())return e.emit(O.QueryLexer.PRESENCE),O.QueryLexer.lexText;if(t.match(O.QueryLexer.termSeparator))return O.QueryLexer.lexTerm}},O.QueryParser=function(e,t){this.lexer=new O.QueryLexer(e),this.query=t,this.currentClause={},this.lexemeIdx=0},O.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var e=O.QueryParser.parseClause;e;)e=e(this);return this.query},O.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},O.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme();return this.lexemeIdx+=1,e},O.QueryParser.prototype.nextClause=function(){var e=this.currentClause;this.query.clause(e),this.currentClause={}},O.QueryParser.parseClause=function(e){var t=e.peekLexeme();if(void 0!=t)switch(t.type){case O.QueryLexer.PRESENCE:return O.QueryParser.parsePresence;case O.QueryLexer.FIELD:return O.QueryParser.parseField;case O.QueryLexer.TERM:return O.QueryParser.parseTerm;default:var r="expected either a field or a term, found "+t.type;throw t.str.length>=1&&(r+=" with value '"+t.str+"'"),new O.QueryParseError(r,t.start,t.end)}},O.QueryParser.parsePresence=function(e){var t=e.consumeLexeme();if(void 0!=t){switch(t.str){case"-":e.currentClause.presence=O.Query.presence.PROHIBITED;break;case"+":e.currentClause.presence=O.Query.presence.REQUIRED;break;default:var r="unrecognised presence operator'"+t.str+"'";throw new O.QueryParseError(r,t.start,t.end)}var n=e.peekLexeme();if(void 0==n){var r="expecting term or field, found nothing";throw new O.QueryParseError(r,t.start,t.end)}switch(n.type){case O.QueryLexer.FIELD:return O.QueryParser.parseField;case O.QueryLexer.TERM:return O.QueryParser.parseTerm;default:var r="expecting term or field, found '"+n.type+"'";throw new O.QueryParseError(r,n.start,n.end)}}},O.QueryParser.parseField=function(e){var t=e.consumeLexeme();if(void 0!=t){if(-1==e.query.allFields.indexOf(t.str)){var r=e.query.allFields.map(function(e){return"'"+e+"'"}).join(", "),n="unrecognised field '"+t.str+"', possible fields: "+r;throw new O.QueryParseError(n,t.start,t.end)}e.currentClause.fields=[t.str];var i=e.peekLexeme();if(void 0==i){var n="expecting term, found nothing";throw new O.QueryParseError(n,t.start,t.end)}if(i.type===O.QueryLexer.TERM)return O.QueryParser.parseTerm;var n="expecting term, found '"+i.type+"'";throw new O.QueryParseError(n,i.start,i.end)}},O.QueryParser.parseTerm=function(e){var t=e.consumeLexeme();if(void 0!=t){e.currentClause.term=t.str.toLowerCase(),-1!=t.str.indexOf("*")&&(e.currentClause.usePipeline=!1);var r=e.peekLexeme();if(void 0==r){e.nextClause();return}switch(r.type){case O.QueryLexer.TERM:return e.nextClause(),O.QueryParser.parseTerm;case O.QueryLexer.FIELD:return e.nextClause(),O.QueryParser.parseField;case O.QueryLexer.EDIT_DISTANCE:return O.QueryParser.parseEditDistance;case O.QueryLexer.BOOST:return O.QueryParser.parseBoost;case O.QueryLexer.PRESENCE:return e.nextClause(),O.QueryParser.parsePresence;default:var n="Unexpected lexeme type '"+r.type+"'";throw new O.QueryParseError(n,r.start,r.end)}}},O.QueryParser.parseEditDistance=function(e){var t=e.consumeLexeme();if(void 0!=t){var r=parseInt(t.str,10);if(isNaN(r)){var n="edit distance must be numeric";throw new O.QueryParseError(n,t.start,t.end)}e.currentClause.editDistance=r;var i=e.peekLexeme();if(void 0==i){e.nextClause();return}switch(i.type){case O.QueryLexer.TERM:return e.nextClause(),O.QueryParser.parseTerm;case O.QueryLexer.FIELD:return e.nextClause(),O.QueryParser.parseField;case O.QueryLexer.EDIT_DISTANCE:return O.QueryParser.parseEditDistance;case O.QueryLexer.BOOST:return O.QueryParser.parseBoost;case O.QueryLexer.PRESENCE:return e.nextClause(),O.QueryParser.parsePresence;default:var n="Unexpected lexeme type '"+i.type+"'";throw new O.QueryParseError(n,i.start,i.end)}}},O.QueryParser.parseBoost=function(e){var t=e.consumeLexeme();if(void 0!=t){var r=parseInt(t.str,10);if(isNaN(r)){var n="boost must be numeric";throw new O.QueryParseError(n,t.start,t.end)}e.currentClause.boost=r;var i=e.peekLexeme();if(void 0==i){e.nextClause();return}switch(i.type){case O.QueryLexer.TERM:return e.nextClause(),O.QueryParser.parseTerm;case O.QueryLexer.FIELD:return e.nextClause(),O.QueryParser.parseField;case O.QueryLexer.EDIT_DISTANCE:return O.QueryParser.parseEditDistance;case O.QueryLexer.BOOST:return O.QueryParser.parseBoost;case O.QueryLexer.PRESENCE:return e.nextClause(),O.QueryParser.parsePresence;default:var n="Unexpected lexeme type '"+i.type+"'";throw new O.QueryParseError(n,i.start,i.end)}}},P=0,I=function(){return O},"function"==typeof define&&define.amd?define(I):e.exports=I()}()},4775:function(e,t,r){"use strict";let n=Symbol("Comlink.proxy"),i=Symbol("Comlink.endpoint"),s=Symbol("Comlink.releaseProxy"),o=Symbol("Comlink.finalizer"),a=Symbol("Comlink.thrown"),l=e=>"object"==typeof e&&null!==e||"function"==typeof e,u=new Map([["proxy",{canHandle:e=>l(e)&&e[n],serialize(e){let{port1:t,port2:r}=new MessageChannel;return c(e,t),[r,[r]]},deserialize:e=>(e.start(),function(e,t){let r=new Map;return e.addEventListener("message",function(e){let{data:t}=e;if(!t||!t.id)return;let n=r.get(t.id);if(!!n)try{n(t)}finally{r.delete(t.id)}}),function e(t,r,n=[],o=function(){}){let a=!1,l=new Proxy(o,{get(i,o){if(d(a),o===s)return()=>{var e;e=l,y&&y.unregister(e),f(t),r.clear(),a=!0};if("then"===o){if(0===n.length)return{then:()=>l};let e=w(t,r,{type:"GET",path:n.map(e=>e.toString())}).then(x);return e.then.bind(e)}return e(t,r,[...n,o])},set(e,i,s){d(a);let[o,l]=v(s);return w(t,r,{type:"SET",path:[...n,i].map(e=>e.toString()),value:o},l).then(x)},apply(s,o,l){d(a);let u=n[n.length-1];if(u===i)return w(t,r,{type:"ENDPOINT"}).then(x);if("bind"===u)return e(t,r,n.slice(0,-1));let[c,h]=m(l);return w(t,r,{type:"APPLY",path:n.map(e=>e.toString()),argumentList:c},h).then(x)},construct(e,i){d(a);let[s,o]=m(i);return w(t,r,{type:"CONSTRUCT",path:n.map(e=>e.toString()),argumentList:s},o).then(x)}});return!function(e,t){let r=(p.get(t)||0)+1;p.set(t,r),y&&y.register(e,t,e)}(l,t),l}(e,r,[],t)}(e))}],["throw",{canHandle:e=>l(e)&&a in e,serialize({value:e}){let t;return[t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[]]},deserialize(e){if(e.isError)throw Object.assign(Error(e.value.message),e.value);throw e.value}}]]);function c(e,t=globalThis,r=["*"]){t.addEventListener("message",function i(s){let l;if(!s||!s.data)return;if(!function(e,t){for(let r of e)if(t===r||"*"===r||r instanceof RegExp&&r.test(t))return!0;return!1}(r,s.origin)){console.warn(`Invalid origin '${s.origin}' for comlink proxy`);return}let{id:u,type:d,path:f}=Object.assign({path:[]},s.data),p=(s.data.argumentList||[]).map(x);try{let t=f.slice(0,-1).reduce((e,t)=>e[t],e),r=f.reduce((e,t)=>e[t],e);switch(d){case"GET":l=r;break;case"SET":t[f.slice(-1)[0]]=x(s.data.value),l=!0;break;case"APPLY":l=r.apply(t,p);break;case"CONSTRUCT":{let e=new r(...p);l=function(e){return Object.assign(e,{[n]:!0})}(e)}break;case"ENDPOINT":{let{port1:t,port2:r}=new MessageChannel;c(e,r),l=function(e,t){return g.set(e,t),e}(t,[t])}break;case"RELEASE":l=void 0;break;default:return}}catch(e){l={value:e,[a]:0}}Promise.resolve(l).catch(e=>({value:e,[a]:0})).then(r=>{let[n,s]=v(r);t.postMessage(Object.assign(Object.assign({},n),{id:u}),s),"RELEASE"===d&&(t.removeEventListener("message",i),h(t),o in e&&"function"==typeof e[o]&&e[o]())}).catch(e=>{let[r,n]=v({value:TypeError("Unserializable return value"),[a]:0});t.postMessage(Object.assign(Object.assign({},r),{id:u}),n)})}),t.start&&t.start()}function h(e){if("MessagePort"===e.constructor.name)e.close()}function d(e){if(e)throw Error("Proxy has been released and is not useable")}function f(e){return w(e,new Map,{type:"RELEASE"}).then(()=>{h(e)})}let p=new WeakMap,y="FinalizationRegistry"in globalThis&&new FinalizationRegistry(e=>{let t=(p.get(e)||0)-1;p.set(e,t),0===t&&f(e)});function m(e){var t;let r=e.map(v);return[r.map(e=>e[0]),(t=r.map(e=>e[1]),Array.prototype.concat.apply([],t))]}let g=new WeakMap;function v(e){for(let[t,r]of u)if(r.canHandle(e)){let[n,i]=r.serialize(e);return[{type:"HANDLER",name:t,value:n},i]}return[{type:"RAW",value:e},g.get(e)||[]]}function x(e){switch(e.type){case"HANDLER":return u.get(e.name).deserialize(e.value);case"RAW":return e.value}}function w(e,t,r,n){return new Promise(i=>{let s=function(){return[,,,,].fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}();t.set(s,i),e.start&&e.start(),e.postMessage(Object.assign({id:s},r),n)})}var E,Q,b=r("1336"),k=r.n(b),S=r("4237");let L=6;function T(e){return P(e).concat(P(e.filter(e=>{let t=e[e.length-1];return!t.trailing&&t.maybeTyping}),!0))}function P(e,t){return e.map(e=>({tokens:e.map(e=>e.value),term:e.map(e=>({value:e.value,presence:k().Query.presence.REQUIRED,wildcard:(t?e.trailing||e.maybeTyping:e.trailing)?k().Query.wildcard.TRAILING:k().Query.wildcard.NONE}))}))}(E=Q||(Q={}))[E.Title=0]="Title",E[E.Heading=1]="Heading",E[E.Description=2]="Description",E[E.Keywords=3]="Keywords",E[E.Content=4]="Content";let I=new Map;async function O(e,t){let r="".concat(e).concat(S.J.replace("{dir}",t?"-".concat(t.replace(/\//g,"-")):""));if(new URL(r,location.origin).origin!==location.origin)throw Error("Unexpected version url");let n=await (await fetch(r)).json(),i=n.map((e,t)=>{let{documents:r,index:n}=e;return{type:t,documents:r,index:k().Index.load(n)}});return{wrappedIndexes:i,zhDictionary:Array.from(n.reduce((e,t)=>{for(let r of t.index.invertedIndex)/\p{Unified_Ideograph}/u.test(r[0][0])&&e.add(r[0]);return e},new Set))}}c(class e{async fetchIndexes(e,t){await this.lowLevelFetchIndexes(e,t)}async lowLevelFetchIndexes(e,t){let r="".concat(e).concat(t),n=I.get(r);return!n&&(n=O(e,t),I.set(r,n)),n}async search(e,t,r){var n;let i=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return k()[t[0]].tokenizer(e).map(e=>e.toString());let r=/[^-\s]+/g;return t.includes("zh")&&(r=/\w+|\p{Unified_Ideograph}+/gu),e.toLowerCase().match(r)||[]}(r,S.dK);if(0===i.length)return[];let{wrappedIndexes:s,zhDictionary:o}=await this.lowLevelFetchIndexes(e,t),a=function(e,t){let r;let n=function(e,t){let r=e.map(e=>/\p{Unified_Ideograph}/u.test(e)?function(e,t){let r=[];return!function e(n,i){let s=0,o=!1;for(let a of t)if(n.substr(0,a.length)===a){let t={missed:i.missed,term:i.term.concat({value:a})};n.length>a.length?e(n.substr(a.length),t):r.push(t),o=!0}else for(let t=a.length-1;t>s;t-=1){let l=a.substr(0,t);if(n.substr(0,t)===l){s=t;let a={missed:i.missed,term:i.term.concat({value:l,trailing:!0})};n.length>t?e(n.substr(t),a):r.push(a),o=!0;break}}!o&&(n.length>0?e(n.substr(1),{missed:i.missed+1,term:i.term}):i.term.length>0&&r.push(i))}(e,{missed:0,term:[]}),r.sort((e,t)=>{let r=e.missed>0?1:0,n=t.missed>0?1:0;return r!==n?r-n:e.term.length-t.term.length}).map(e=>e.term)}(e,t):[{value:e}]).slice(0,12),n=r.filter(e=>e.length>1),i=1,s=!1;for(let e of n)if(s)e.splice(1,e.length-1);else{e.length>L&&e.splice(L,e.length-L);let t=i*e.length;if(t>=12){if(t>12){let t=Math.floor(12/i);e.splice(t,e.length-t),i*=t}else i=t;i>L&&(s=!0)}else i=t}let o=[];return!function e(t,n){if(t===r.length||n.length>=12){o.push(n.slice(0,12));return}for(let i of r[t])e(t+1,n.concat(i))}(0,[]),o}(e,t);if(0===n.length)return[{tokens:e,term:e.map(e=>({value:e,presence:k().Query.presence.REQUIRED,wildcard:k().Query.wildcard.LEADING|k().Query.wildcard.TRAILING}))}];for(let e of n)e[e.length-1].maybeTyping=!0;let i=[];for(let e of S.dK)if("en"===e)!S._k&&i.unshift(k().stopWordFilter);else{let t=k()[e];t.stopWordFilter&&i.unshift(t.stopWordFilter)}if(i.length>0){let e=e=>i.reduce((e,t)=>e.filter(e=>t(e.value)),e);r=[];let t=[];for(let i of n){let n=e(i);r.push(n),n.length<i.length&&n.length>0&&t.push(n)}n.push(...t)}else r=n.slice();let s=[];for(let e of r)if(e.length>2)for(let t=e.length-1;t>=0;t-=1)s.push(e.slice(0,t).concat(e.slice(t+1)));return T(n).concat(T(s))}(i,o),l=[];e:for(let{term:e,tokens:t}of a)for(let{documents:r,index:n,type:i}of s)if(l.push(...n.query(t=>{for(let r of e)t.term(r.value,{wildcard:r.wildcard,presence:r.presence})}).slice(0,S.qo).filter(e=>!l.some(t=>t.document.i.toString()===e.ref)).slice(0,S.qo-l.length).map(e=>{let n=r.find(t=>t.i.toString()===e.ref);return{document:n,type:i,page:i!==Q.Title&&s[0].documents.find(e=>e.i===n.p),metadata:e.matchData.metadata,tokens:t,score:e.score}})),l.length>=S.qo)break e;return(n=l).forEach((e,t)=>{e.index=t}),n.sort((e,t)=>{let r=(e.type===Q.Heading||e.type===Q.Content||e.type===Q.Description)&&e.page?n.findIndex(t=>t.document===e.page):e.index,i=(t.type===Q.Heading||t.type===Q.Content||t.type===Q.Description)&&t.page?n.findIndex(e=>e.document===t.page):t.index;if(-1===r&&(r=e.index),-1===i&&(i=t.index),r===i){let r=(0===t.type?1:0)-(0===e.type?1:0);return 0===r?e.index-t.index:r}return r-i}),!function(e){e.forEach((t,r)=>{r>0&&t.page&&e.slice(0,r).some(e=>(e.type===Q.Keywords?e.page:e.document)===t.page)&&(r<e.length-1&&e[r+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)})}(l),l}})}}]);