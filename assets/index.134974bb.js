import{d as e,r as t,a as n,o,c as r,b as s,w as a,e as u,f as c,u as i,t as l,g as d,h as m,i as p,j as f,O as _}from"./vendor.3cc353a3.js";let v;!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const o=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,s)=>{const a=new URL(e,o);if(self[t].moduleMap[a])return n(self[t].moduleMap[a]);const u=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(u),onerror(){s(new Error(`Failed to import: ${e}`)),r(c)},onload(){n(self[t].moduleMap[a]),r(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("assets/");const h={},y=function(e,t){if(!t)return e();if(void 0===v){const e=document.createElement("link").relList;v=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in h)return;h[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":v,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))};var w=e({setup:()=>({count:t(0)})});const x=u("默认按钮"),L=u("主要按钮"),b=u("成功按钮"),E=u("信息按钮"),j=u("警告按钮"),R=u("危险按钮");w.render=function(e,t,u,c,i,l){const d=n("el-button"),m=n("el-row");return o(),r("div",null,[s(m,null,{default:a((()=>[s(d,null,{default:a((()=>[x])),_:1}),s(d,{type:"primary"},{default:a((()=>[L])),_:1}),s(d,{type:"success"},{default:a((()=>[b])),_:1}),s(d,{type:"info"},{default:a((()=>[E])),_:1}),s(d,{type:"warning"},{default:a((()=>[j])),_:1}),s(d,{type:"danger"},{default:a((()=>[R])),_:1})])),_:1})])};var O=e({setup(){const e=i();return{count:c((()=>e.state.count)),increment:()=>{e.dispatch("increment")}}}});O.render=function(e,t,n,a,u,c){return o(),r("div",null,[s("div",null,"vuex + count: "+l(e.count),1),s("button",{onClick:t[1]||(t[1]=(...t)=>e.increment&&e.increment(...t))},"增加")])};const g=[{path:"/",name:"Home",component:w},{path:"/vuex",name:"Vuex",component:O},{path:"/axios",name:"Axios",component:()=>y((()=>__import__("./axios.12f65ba0.js")),["./assets/axios.12f65ba0.js","./assets/vendor.3cc353a3.js"])},{path:"/test",name:"Test",component:()=>y((()=>__import__("./Test.fb6f3777.js")),["./assets/Test.fb6f3777.js","./assets/vendor.3cc353a3.js"])}],k=d({history:m(),routes:g}),U={count:0};var $=p({state:()=>U,mutations:{increment(e){e.count+=1}},actions:{increment(e){e.commit("increment")}},getters:{double:e=>2*e.count}}),M=e({name:"App"});const P=u("vuex"),A=u("axios");M.render=function(e,t,u,c,i,l){const d=n("router-link"),m=n("router-view");return o(),r("div",null,[s("div",null,[s(d,{to:"/vuex"},{default:a((()=>[P])),_:1}),s(d,{to:"/axios"},{default:a((()=>[A])),_:1})]),s(m)])};f(M).use(k).use($).use(_).mount("#app");