var ae=Object.defineProperty;var me=(e,t,n)=>t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var R=(e,t,n)=>me(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function E(){}function se(e){return e()}function X(){return Object.create(null)}function T(e){e.forEach(se)}function ie(e){return typeof e=="function"}function le(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let I;function Y(e,t){return e===t?!0:(I||(I=document.createElement("a")),I.href=t,e===I.href)}function he(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function $(e,t,n){e.insertBefore(t,n||null)}function _(e){e.parentNode&&e.parentNode.removeChild(e)}function ge(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function S(e){return document.createTextNode(e)}function v(){return S(" ")}function o(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function pe(e){return Array.from(e.childNodes)}function F(e,t){t=""+t,e.data!==t&&(e.data=t)}let L;function A(e){L=e}function _e(){if(!L)throw new Error("Function called outside component initialization");return L}function ve(e){_e().$$.on_mount.push(e)}const x=[],Z=[];let z=[];const k=[],$e=Promise.resolve();let J=!1;function ye(){J||(J=!0,$e.then(re))}function V(e){z.push(e)}const U=new Set;let w=0;function re(){if(w!==0)return;const e=L;do{try{for(;w<x.length;){const t=x[w];w++,A(t),be(t.$$)}}catch(t){throw x.length=0,w=0,t}for(A(null),x.length=0,w=0;Z.length;)Z.pop()();for(let t=0;t<z.length;t+=1){const n=z[t];U.has(n)||(U.add(n),n())}z.length=0}while(x.length);for(;k.length;)k.pop()();J=!1,U.clear(),A(e)}function be(e){if(e.fragment!==null){e.update(),T(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}function we(e){const t=[],n=[];z.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),z=t}const q=new Set;let xe;function ue(e,t){e&&e.i&&(q.delete(e),e.i(t))}function ze(e,t,n,s){if(e&&e.o){if(q.has(e))return;q.add(e),xe.c.push(()=>{q.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function ee(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Ee(e){e&&e.c()}function fe(e,t,n){const{fragment:s,after_update:i}=e.$$;s&&s.m(t,n),V(()=>{const r=e.$$.on_mount.map(se).filter(ie);e.$$.on_destroy?e.$$.on_destroy.push(...r):T(r),e.$$.on_mount=[]}),i.forEach(V)}function oe(e,t){const n=e.$$;n.fragment!==null&&(we(n.after_update),T(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Oe(e,t){e.$$.dirty[0]===-1&&(x.push(e),ye(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ce(e,t,n,s,i,r,u=null,d=[-1]){const a=L;A(e);const l=e.$$={fragment:null,ctx:[],props:r,update:E,not_equal:i,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:X(),dirty:d,skip_bound:!1,root:t.target||a.$$.root};u&&u(l.root);let f=!1;if(l.ctx=n?n(e,t.props||{},(m,y,...b)=>{const O=b.length?b[0]:y;return l.ctx&&i(l.ctx[m],l.ctx[m]=O)&&(!l.skip_bound&&l.bound[m]&&l.bound[m](O),f&&Oe(e,m)),y}):[],l.update(),f=!0,T(l.before_update),l.fragment=s?s(l.ctx):!1,t.target){if(t.hydrate){const m=pe(t.target);l.fragment&&l.fragment.l(m),m.forEach(_)}else l.fragment&&l.fragment.c();t.intro&&ue(e.$$.fragment),fe(e,t.target,t.anchor),re()}A(a)}class de{constructor(){R(this,"$$");R(this,"$$set")}$destroy(){oe(this,1),this.$destroy=E}$on(t,n){if(!ie(n))return E;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(t){this.$$set&&!he(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Se="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Se);const Ae=[{name:"Lila luft",material:"Öl und Acryl auf Polyester",size:"90x120cm",date:"2024",ts:"1876x2502"},{name:"Maria",material:"Öl und Acryl auf Seide",size:"90x120cm",date:"2023",ts:"1904x2538"},{name:"Bel",material:"Filzstift und Acryl auf Polyester",size:"90x120",date:"2024",ts:"1952x2603"},{name:"Jeanne d'arc",material:"Öl und Acryl auf Polyester",size:"120x90cm",date:"2024",ts:"2563x1923"},{name:"Seoul",material:"Filzstift und Bleistift auf Seide",size:"120x90cm",date:"2024",ts:"2553x1915"}];function te(e,t,n){const s=e.slice();return s[1]=t[n],s}function ne(e){let t,n,s,i,r,u,d,a,l,f,m,y=e[1].name+"",b,O,P,N=e[1].material+"",D,W,C,M=e[1].size+"",H,G,j,B=e[1].date+"",K,Q;return{c(){t=h("li"),n=h("div"),s=h("img"),d=v(),a=h("div"),l=v(),f=h("div"),m=h("h3"),b=S(y),O=v(),P=h("div"),D=S(N),W=v(),C=h("div"),H=S(M),G=v(),j=h("div"),K=S(B),Q=v(),Y(s.src,i=e[1].imgSrc)||o(s,"src",i),o(s,"height",r=e[1].ts.split("x")[1]),o(s,"width",u=e[1].ts.split("x")[0]),o(s,"class","svelte-6sbdgd"),o(a,"class","box transparent_box svelte-6sbdgd"),o(m,"class","svelte-6sbdgd"),o(P,"class","svelte-6sbdgd"),o(C,"class","svelte-6sbdgd"),o(j,"class","svelte-6sbdgd"),o(f,"class","box description svelte-6sbdgd"),o(n,"class","imgcontainer svelte-6sbdgd"),o(t,"class","svelte-6sbdgd")},m(g,p){$(g,t,p),c(t,n),c(n,s),c(n,d),c(n,a),c(n,l),c(n,f),c(f,m),c(m,b),c(f,O),c(f,P),c(P,D),c(f,W),c(f,C),c(C,H),c(f,G),c(f,j),c(j,K),c(t,Q)},p(g,p){p&1&&!Y(s.src,i=g[1].imgSrc)&&o(s,"src",i),p&1&&r!==(r=g[1].ts.split("x")[1])&&o(s,"height",r),p&1&&u!==(u=g[1].ts.split("x")[0])&&o(s,"width",u),p&1&&y!==(y=g[1].name+"")&&F(b,y),p&1&&N!==(N=g[1].material+"")&&F(D,N),p&1&&M!==(M=g[1].size+"")&&F(H,M),p&1&&B!==(B=g[1].date+"")&&F(K,B)},d(g){g&&_(t)}}}function Le(e){let t,n=ee(e[0]),s=[];for(let i=0;i<n.length;i+=1)s[i]=ne(te(e,n,i));return{c(){t=h("ul");for(let i=0;i<s.length;i+=1)s[i].c();o(t,"class","svelte-6sbdgd")},m(i,r){$(i,t,r);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(t,null)},p(i,[r]){if(r&1){n=ee(i[0]);let u;for(u=0;u<n.length;u+=1){const d=te(i,n,u);s[u]?s[u].p(d,r):(s[u]=ne(d),s[u].c(),s[u].m(t,null))}for(;u<s.length;u+=1)s[u].d(1);s.length=n.length}},i:E,o:E,d(i){i&&_(t),ge(s,i)}}}function Pe(e,t,n){let s=[];return ve(async()=>{n(0,s=await Promise.all(Ae.map(async i=>({...i,imgSrc:new URL("../assets/"+i.name+".jpg",import.meta.url)}))))}),[s]}class Ne extends de{constructor(t){super(),ce(this,t,Pe,Le,le,{})}}function Ce(e){let t,n,s,i,r,u,d,a;return r=new Ne({}),{c(){t=h("div"),t.textContent="currently under construction",n=v(),s=h("div"),s.innerHTML='<h1 class="svelte-g6enff">Ann-Kristin Danzinger</h1> <div class="menu svelte-g6enff"><div class="svelte-g6enff">Curriculum</div> <div class="svelte-g6enff">Contact</div></div>',i=v(),Ee(r.$$.fragment),u=v(),d=h("div"),d.innerHTML='<a href="./impressum">Datenschutz &amp; Impressum</a>',o(t,"class","construction svelte-g6enff"),o(s,"class","header svelte-g6enff"),o(d,"class","footer svelte-g6enff")},m(l,f){$(l,t,f),$(l,n,f),$(l,s,f),$(l,i,f),fe(r,l,f),$(l,u,f),$(l,d,f),a=!0},p:E,i(l){a||(ue(r.$$.fragment,l),a=!0)},o(l){ze(r.$$.fragment,l),a=!1},d(l){l&&(_(t),_(n),_(s),_(i),_(u),_(d)),oe(r,l)}}}class Me extends de{constructor(t){super(),ce(this,t,null,Ce,le,{})}}new Me({target:document.getElementById("app")});
