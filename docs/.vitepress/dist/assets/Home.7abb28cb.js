import{_ as d,l as m,m as k,q as i,u as e,o,c as a,b as c,s as F,v as n,t as l,i as x,N as g,F as I,e as L,a as A,d as h,x as y}from"./app.a3acf172.js";const B={key:0,class:"home-hero"},C={key:0,class:"figure"},N=["src","alt"],b={key:1,id:"main-title",class:"title"},w={key:2,class:"tagline"},V=m({setup(p){const{site:s,frontmatter:t}=k(),_=i(()=>{const{heroImage:r,heroText:u,tagline:$,actionLink:H,actionText:T}=t.value;return r||u||$||H&&T}),v=i(()=>t.value.heroText||s.value.title),f=i(()=>t.value.tagline||s.value.description);return(r,u)=>e(_)?(o(),a("header",B,[e(t).heroImage?(o(),a("figure",C,[c("img",{class:"image",src:e(F)(e(t).heroImage),alt:e(t).heroAlt},null,8,N)])):n("",!0),e(v)?(o(),a("h1",b,l(e(v)),1)):n("",!0),e(f)?(o(),a("p",w,l(e(f)),1)):n("",!0),e(t).actionLink&&e(t).actionText?(o(),x(g,{key:3,item:{link:e(t).actionLink,text:e(t).actionText},class:"action"},null,8,["item"])):n("",!0),e(t).altActionLink&&e(t).altActionText?(o(),x(g,{key:4,item:{link:e(t).altActionLink,text:e(t).altActionText},class:"action alt"},null,8,["item"])):n("",!0)])):n("",!0)}});var D=d(V,[["__scopeId","data-v-370f18c0"]]);const S={key:0,class:"home-features"},j={class:"wrapper"},q={class:"container"},E={class:"features"},z={key:0,class:"title"},G={key:1,class:"details"},J=m({setup(p){const{frontmatter:s}=k(),t=i(()=>s.value.features&&s.value.features.length>0),_=i(()=>s.value.features?s.value.features:[]);return(v,f)=>e(t)?(o(),a("div",S,[c("div",j,[c("div",q,[c("div",E,[(o(!0),a(I,null,L(e(_),(r,u)=>(o(),a("section",{key:u,class:"feature"},[r.title?(o(),a("h2",z,l(r.title),1)):n("",!0),r.details?(o(),a("p",G,l(r.details),1)):n("",!0)]))),128))])])])])):n("",!0)}});var K=d(J,[["__scopeId","data-v-e39c13e0"]]);const M={key:0,class:"footer"},O={class:"container"},P={class:"text"},Q=m({setup(p){const{frontmatter:s}=k();return(t,_)=>e(s).footer?(o(),a("footer",M,[c("div",O,[c("p",P,l(e(s).footer),1)])])):n("",!0)}});var R=d(Q,[["__scopeId","data-v-30918238"]]);const U={class:"home","aria-labelledby":"main-title"},W={class:"home-content"},X=m({setup(p){return(s,t)=>{const _=A("Content");return o(),a("main",U,[h(D),y(s.$slots,"hero",{},void 0,!0),h(K),c("div",W,[h(_)]),y(s.$slots,"features",{},void 0,!0),h(R),y(s.$slots,"footer",{},void 0,!0)])}}});var Z=d(X,[["__scopeId","data-v-10122c92"]]);export{Z as default};
