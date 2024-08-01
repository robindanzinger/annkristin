var de=Object.defineProperty;var me=(e,t,n)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var R=(e,t,n)=>me(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();function q(){}function ie(e){return e()}function X(){return Object.create(null)}function T(e){e.forEach(ie)}function le(e){return typeof e=="function"}function se(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let B;function Y(e,t){return e===t?!0:(B||(B=document.createElement("a")),B.href=t,e===B.href)}function he(e){return Object.keys(e).length===0}function a(e,t){e.appendChild(t)}function $(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode&&e.parentNode.removeChild(e)}function pe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function A(e){return document.createTextNode(e)}function x(){return A(" ")}function o(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ve(e){return Array.from(e.childNodes)}function I(e,t){t=""+t,e.data!==t&&(e.data=t)}let O;function E(e){O=e}function _e(){if(!O)throw new Error("Function called outside component initialization");return O}function ge(e){_e().$$.on_mount.push(e)}const z=[],Z=[];let S=[];const k=[],$e=Promise.resolve();let J=!1;function we(){J||(J=!0,$e.then(re))}function V(e){S.push(e)}const U=new Set;let b=0;function re(){if(b!==0)return;const e=O;do{try{for(;b<z.length;){const t=z[b];b++,E(t),xe(t.$$)}}catch(t){throw z.length=0,b=0,t}for(E(null),z.length=0,b=0;Z.length;)Z.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];U.has(n)||(U.add(n),n())}S.length=0}while(z.length);for(;k.length;)k.pop()();J=!1,U.clear(),E(e)}function xe(e){if(e.fragment!==null){e.update(),T(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}function ye(e){const t=[],n=[];S.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),S=t}const F=new Set;let be;function ue(e,t){e&&e.i&&(F.delete(e),e.i(t))}function ze(e,t,n,i){if(e&&e.o){if(F.has(e))return;F.add(e),be.c.push(()=>{F.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function ee(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Se(e){e&&e.c()}function ce(e,t,n){const{fragment:i,after_update:l}=e.$$;i&&i.m(t,n),V(()=>{const r=e.$$.on_mount.map(ie).filter(le);e.$$.on_destroy?e.$$.on_destroy.push(...r):T(r),e.$$.on_mount=[]}),l.forEach(V)}function oe(e,t){const n=e.$$;n.fragment!==null&&(ye(n.after_update),T(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function qe(e,t){e.$$.dirty[0]===-1&&(z.push(e),we(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function fe(e,t,n,i,l,r,s=null,p=[-1]){const _=O;E(e);const c=e.$$={fragment:null,ctx:[],props:r,update:q,not_equal:l,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(_?_.$$.context:[])),callbacks:X(),dirty:p,skip_bound:!1,root:t.target||_.$$.root};s&&s(c.root);let d=!1;if(c.ctx=n?n(e,t.props||{},(f,g,...u)=>{const m=u.length?u[0]:g;return c.ctx&&l(c.ctx[f],c.ctx[f]=m)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](m),d&&qe(e,f)),g}):[],c.update(),d=!0,T(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){const f=ve(t.target);c.fragment&&c.fragment.l(f),f.forEach(v)}else c.fragment&&c.fragment.c();t.intro&&ue(e.$$.fragment),ce(e,t.target,t.anchor),re()}E(_)}class ae{constructor(){R(this,"$$");R(this,"$$set")}$destroy(){oe(this,1),this.$destroy=q}$on(t,n){if(!le(n))return q;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!he(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ae="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ae);const Ee=[{name:"Bel",material:"Filzstift und Acryl auf Polyester",size:"90x120",date:"2024",ts:"1952x2603"},{name:"Lila luft",material:"Öl und Acryl auf Polyester",size:"90x120cm",date:"2024",ts:"1876x2502"},{name:"Jeanne d'arc",material:"Öl und Acryl auf Polyester",size:"120x90cm",date:"2024",ts:"2563x1923"},{name:"Seoul",material:"Filzstift und Bleistift auf Seide",size:"120x90cm",date:"2024",ts:"2553x1915"},{name:"Maria",material:"Öl und Acryl auf Seide",size:"90x120cm",date:"2023",ts:"1904x2538"},{name:"Pummeluff",size:"30x40cm",material:"Öl auf Leinwand",date:"2021",ts:"2630x3506"},{name:"Prayer",size:"90x120cm",material:"Öl und Acryl auf Seide",date:"2020",ts:"2135x2846"}];function te(e,t,n){const i=e.slice();return i[1]=t[n],i}function ne(e){let t,n,i,l,r,s,p,_,c,d,f,g=e[1].name+"",u,m,P,L=e[1].material+"",D,W,N,C=e[1].size+"",H,G,M,j=e[1].date+"",K,Q;return{c(){t=h("li"),n=h("div"),i=h("img"),p=x(),_=h("div"),c=x(),d=h("div"),f=h("h3"),u=A(g),m=x(),P=h("div"),D=A(L),W=x(),N=h("div"),H=A(C),G=x(),M=h("div"),K=A(j),Q=x(),Y(i.src,l=e[1].imgSrc)||o(i,"src",l),o(i,"height",r=e[1].ts.split("x")[1]),o(i,"width",s=e[1].ts.split("x")[0]),o(i,"class","svelte-i4xw50"),o(_,"class","box transparent_box svelte-i4xw50"),o(f,"class","svelte-i4xw50"),o(P,"class","svelte-i4xw50"),o(N,"class","svelte-i4xw50"),o(M,"class","svelte-i4xw50"),o(d,"class","box description svelte-i4xw50"),o(n,"class","imgcontainer svelte-i4xw50"),o(t,"class","svelte-i4xw50")},m(w,y){$(w,t,y),a(t,n),a(n,i),a(n,p),a(n,_),a(n,c),a(n,d),a(d,f),a(f,u),a(d,m),a(d,P),a(P,D),a(d,W),a(d,N),a(N,H),a(d,G),a(d,M),a(M,K),a(t,Q)},p(w,y){y&1&&!Y(i.src,l=w[1].imgSrc)&&o(i,"src",l),y&1&&r!==(r=w[1].ts.split("x")[1])&&o(i,"height",r),y&1&&s!==(s=w[1].ts.split("x")[0])&&o(i,"width",s),y&1&&g!==(g=w[1].name+"")&&I(u,g),y&1&&L!==(L=w[1].material+"")&&I(D,L),y&1&&C!==(C=w[1].size+"")&&I(H,C),y&1&&j!==(j=w[1].date+"")&&I(K,j)},d(w){w&&v(t)}}}function Oe(e){let t,n=ee(e[0]),i=[];for(let l=0;l<n.length;l+=1)i[l]=ne(te(e,n,l));return{c(){t=h("ul");for(let l=0;l<i.length;l+=1)i[l].c();o(t,"class","svelte-i4xw50")},m(l,r){$(l,t,r);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(t,null)},p(l,[r]){if(r&1){n=ee(l[0]);let s;for(s=0;s<n.length;s+=1){const p=te(l,n,s);i[s]?i[s].p(p,r):(i[s]=ne(p),i[s].c(),i[s].m(t,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=n.length}},i:q,o:q,d(l){l&&v(t),pe(i,l)}}}function Pe(e,t,n){let i=[];return ge(async()=>{n(0,i=await Promise.all(Ee.map(async l=>({...l,imgSrc:new URL("../assets/"+l.name+".jpg",import.meta.url)}))))}),[i]}class Le extends ae{constructor(t){super(),fe(this,t,Pe,Oe,se,{})}}function Ne(e){let t,n,i,l,r,s,p,_,c,d,f,g;return p=new Le({}),{c(){t=h("div"),t.textContent="currently under construction",n=x(),i=h("div"),i.innerHTML='<h1 class="svelte-i6tnqb">Ann-Kristin Danzinger</h1> <div class="menu svelte-i6tnqb"><div class="svelte-i6tnqb">Curriculum</div> <div class="svelte-i6tnqb">Contact</div></div>',l=x(),r=h("div"),s=x(),Se(p.$$.fragment),_=x(),c=h("div"),d=x(),f=h("div"),f.innerHTML='<a href="./impressum">Datenschutz &amp; Impressum</a>',o(t,"class","construction svelte-i6tnqb"),o(i,"class","header svelte-i6tnqb"),o(r,"class","line svelte-i6tnqb"),o(c,"class","line svelte-i6tnqb"),o(f,"class","footer svelte-i6tnqb")},m(u,m){$(u,t,m),$(u,n,m),$(u,i,m),$(u,l,m),$(u,r,m),$(u,s,m),ce(p,u,m),$(u,_,m),$(u,c,m),$(u,d,m),$(u,f,m),g=!0},p:q,i(u){g||(ue(p.$$.fragment,u),g=!0)},o(u){ze(p.$$.fragment,u),g=!1},d(u){u&&(v(t),v(n),v(i),v(l),v(r),v(s),v(_),v(c),v(d),v(f)),oe(p,u)}}}class Ce extends ae{constructor(t){super(),fe(this,t,null,Ne,se,{})}}new Ce({target:document.getElementById("app")});
