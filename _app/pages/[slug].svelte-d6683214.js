import{S as a,i as s,s as t,e as r,t as e,k as n,c as o,a as i,g as c,d as p,n as u,f,F as d,h,G as l}from"../chunks/vendor-0e6e5f79.js";import{d as m}from"../chunks/data-19359c77.js";function g(a){let s,t,g,j,k,v,E,I,P,w,x,S,A,J,N=a[1].id+"",O=a[1].name+"",$=m.id+"",y=m.name+"";return{c(){s=r("h1"),t=e(a[0]),g=n(),j=r("p"),k=e("API fetch: "),v=e(N),E=e(" - "),I=e(O),P=n(),w=r("p"),x=e("JSON Import: "),S=e($),A=e(" - "),J=e(y)},l(r){s=o(r,"H1",{});var e=i(s);t=c(e,a[0]),e.forEach(p),g=u(r),j=o(r,"P",{});var n=i(j);k=c(n,"API fetch: "),v=c(n,N),E=c(n," - "),I=c(n,O),n.forEach(p),P=u(r),w=o(r,"P",{});var f=i(w);x=c(f,"JSON Import: "),S=c(f,$),A=c(f," - "),J=c(f,y),f.forEach(p)},m(a,r){f(a,s,r),d(s,t),f(a,g,r),f(a,j,r),d(j,k),d(j,v),d(j,E),d(j,I),f(a,P,r),f(a,w,r),d(w,x),d(w,S),d(w,A),d(w,J)},p(a,[s]){1&s&&h(t,a[0]),2&s&&N!==(N=a[1].id+"")&&h(v,N),2&s&&O!==(O=a[1].name+"")&&h(I,O)},i:l,o:l,d(a){a&&p(s),a&&p(g),a&&p(j),a&&p(P),a&&p(w)}}}async function j({page:{params:{slug:a}},fetch:s}){const t=await s("data.json");return t.ok?{props:{slug:a,api:await t.json()}}:{status:t.status,error:new Error}}function k(a,s,t){let{slug:r}=s,{api:e}=s;return a.$$set=a=>{"slug"in a&&t(0,r=a.slug),"api"in a&&t(1,e=a.api)},[r,e]}export default class extends a{constructor(a){super(),s(this,a,k,g,t,{slug:0,api:1})}}export{j as load};