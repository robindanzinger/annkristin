import{S as R,i as U,s as W,e as o,a as c,b as D,n as C,d as G,c as V,o as X,f as d,t as S,g as E,h as i,j as b,L as Y,k as H,m as K,l as N,p as Q,q as T}from"./layout-6zzyBJdd.js";function I(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}const Z=[{name:"Bel",material:"Filzstift und Acryl auf Polyester",size:"90x120",date:"2024",ts:"1952x2603"},{name:"Lila luft",material:"Öl und Acryl auf Polyester",size:"90x120cm",date:"2024",ts:"1876x2502"},{name:"Jeanne d'arc",material:"Öl und Acryl auf Polyester",size:"120x90cm",date:"2024",ts:"2563x1923"},{name:"Seoul",material:"Filzstift und Bleistift auf Seide",size:"120x90cm",date:"2024",ts:"2553x1915"},{name:"Maria",material:"Öl und Acryl auf Seide",size:"90x120cm",date:"2023",ts:"1904x2538"},{name:"Pummeluff",size:"30x40cm",material:"Öl auf Leinwand",date:"2021",ts:"2630x3506"},{name:"Prayer",size:"90x120cm",material:"Öl und Acryl auf Seide",date:"2020",ts:"2135x2846"}];function J(a,t,s){const e=a.slice();return e[1]=t[s],e}function O(a){let t,s,e,l,r,n,g,A,B,m,p,v=a[1].name+"",P,j,h,x=a[1].material+"",y,F,$,w=a[1].size+"",L,M,_,z=a[1].date+"",q,k;return{c(){t=o("li"),s=o("div"),e=o("img"),g=d(),A=o("div"),B=d(),m=o("div"),p=o("h3"),P=S(v),j=d(),h=o("div"),y=S(x),F=d(),$=o("div"),L=S(w),M=d(),_=o("div"),q=S(z),k=d(),E(e.src,l=a[1].imgSrc)||c(e,"src",l),c(e,"height",r=a[1].ts.split("x")[1]),c(e,"width",n=a[1].ts.split("x")[0]),c(e,"class","svelte-i4xw50"),c(A,"class","box transparent_box svelte-i4xw50"),c(p,"class","svelte-i4xw50"),c(h,"class","svelte-i4xw50"),c($,"class","svelte-i4xw50"),c(_,"class","svelte-i4xw50"),c(m,"class","box description svelte-i4xw50"),c(s,"class","imgcontainer svelte-i4xw50"),c(t,"class","svelte-i4xw50")},m(u,f){D(u,t,f),i(t,s),i(s,e),i(s,g),i(s,A),i(s,B),i(s,m),i(m,p),i(p,P),i(m,j),i(m,h),i(h,y),i(m,F),i(m,$),i($,L),i(m,M),i(m,_),i(_,q),i(t,k)},p(u,f){f&1&&!E(e.src,l=u[1].imgSrc)&&c(e,"src",l),f&1&&r!==(r=u[1].ts.split("x")[1])&&c(e,"height",r),f&1&&n!==(n=u[1].ts.split("x")[0])&&c(e,"width",n),f&1&&v!==(v=u[1].name+"")&&b(P,v),f&1&&x!==(x=u[1].material+"")&&b(y,x),f&1&&w!==(w=u[1].size+"")&&b(L,w),f&1&&z!==(z=u[1].date+"")&&b(q,z)},d(u){u&&G(t)}}}function ee(a){let t,s=I(a[0]),e=[];for(let l=0;l<s.length;l+=1)e[l]=O(J(a,s,l));return{c(){t=o("ul");for(let l=0;l<e.length;l+=1)e[l].c();c(t,"class","svelte-i4xw50")},m(l,r){D(l,t,r);for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(t,null)},p(l,[r]){if(r&1){s=I(l[0]);let n;for(n=0;n<s.length;n+=1){const g=J(l,s,n);e[n]?e[n].p(g,r):(e[n]=O(g),e[n].c(),e[n].m(t,null))}for(;n<e.length;n+=1)e[n].d(1);e.length=s.length}},i:C,o:C,d(l){l&&G(t),V(e,l)}}}function te(a,t,s){let e=[];return X(async()=>{s(0,e=await Promise.all(Z.map(async l=>({...l,imgSrc:new URL("../assets/"+l.name+".jpg",import.meta.url)}))))}),[e]}class le extends R{constructor(t){super(),U(this,t,te,ee,W,{})}}function se(a){let t,s;return t=new le({}),{c(){H(t.$$.fragment)},m(e,l){K(t,e,l),s=!0},i(e){s||(N(t.$$.fragment,e),s=!0)},o(e){Q(t.$$.fragment,e),s=!1},d(e){T(t,e)}}}function ae(a){let t,s;return t=new Y({props:{$$slots:{default:[se]},$$scope:{ctx:a}}}),{c(){H(t.$$.fragment)},m(e,l){K(t,e,l),s=!0},p(e,[l]){const r={};l&1&&(r.$$scope={dirty:l,ctx:e}),t.$set(r)},i(e){s||(N(t.$$.fragment,e),s=!0)},o(e){Q(t.$$.fragment,e),s=!1},d(e){T(t,e)}}}class ne extends R{constructor(t){super(),U(this,t,null,ae,W,{})}}new ne({target:document.getElementById("app")});
