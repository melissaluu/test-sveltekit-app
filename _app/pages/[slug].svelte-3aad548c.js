import{S as a,i as s,s as t,e as r,t as o,k as n,c as e,a as c,g as i,d as p,n as u,f,F as l,h as d,G as h}from"../chunks/vendor-3b9888bb.js";import{d as m}from"../chunks/data-19359c77.js";function g(a){let s,t,g,j,k,v,E,I,P,b,w,x,S,A,J=a[1].id+"",N=a[1].name+"",O=m.id+"",$=m.name+"";return{c(){s=r("h1"),t=o(a[0]),g=n(),j=r("p"),k=o("API fetch: "),v=o(J),E=o(" - "),I=o(N),P=n(),b=r("p"),w=o("JSON Import: "),x=o(O),S=o(" - "),A=o($)},l(r){s=e(r,"H1",{});var o=c(s);t=i(o,a[0]),o.forEach(p),g=u(r),j=e(r,"P",{});var n=c(j);k=i(n,"API fetch: "),v=i(n,J),E=i(n," - "),I=i(n,N),n.forEach(p),P=u(r),b=e(r,"P",{});var f=c(b);w=i(f,"JSON Import: "),x=i(f,O),S=i(f," - "),A=i(f,$),f.forEach(p)},m(a,r){f(a,s,r),l(s,t),f(a,g,r),f(a,j,r),l(j,k),l(j,v),l(j,E),l(j,I),f(a,P,r),f(a,b,r),l(b,w),l(b,x),l(b,S),l(b,A)},p(a,[s]){1&s&&d(t,a[0]),2&s&&J!==(J=a[1].id+"")&&d(v,J),2&s&&N!==(N=a[1].name+"")&&d(I,N)},i:h,o:h,d(a){a&&p(s),a&&p(g),a&&p(j),a&&p(P),a&&p(b)}}}async function j({page:{params:{slug:a}},fetch:s}){const t=await s("data.json");return t.ok?{props:{slug:a,api:await t.json()}}:{status:t.status,error:new Error}}function k(a,s,t){let{slug:r}=s,{api:o}=s;return console.log(m),a.$$set=a=>{"slug"in a&&t(0,r=a.slug),"api"in a&&t(1,o=a.api)},[r,o]}export default class extends a{constructor(a){super(),s(this,a,k,g,t,{slug:0,api:1})}}export{j as load};
