import{S as a,i as s,s as t,W as e,e as r,t as n,k as o,j as i,c,a as l,g as p,d as $,n as f,m as h,b as d,H as m,f as u,F as g,o as v,v as x,r as w,w as T,T as b}from"../chunks/vendor-dcd22399.js";import{b as E}from"../chunks/paths-45dac81d.js";function k(a){let s;return{c(){s=n("Tooltip on a span.")},l(a){s=p(a,"Tooltip on a span.")},m(a,t){u(a,s,t)},d(a){a&&$(s)}}}function I(a){let s,t,e,m,E;return m=new b({props:{unbounded:!0,$$slots:{default:[k]},$$scope:{ctx:a}}}),{c(){s=r("span"),t=n("Material UI tooltip example"),e=o(),i(m.$$.fragment),this.h()},l(a){s=c(a,"SPAN",{tabindex:!0});var r=l(s);t=p(r,"Material UI tooltip example"),r.forEach($),e=f(a),h(m.$$.fragment,a),this.h()},h(){d(s,"tabindex","0")},m(a,r){u(a,s,r),g(s,t),u(a,e,r),v(m,a,r),E=!0},p(a,s){const t={};1&s&&(t.$$scope={dirty:s,ctx:a}),m.$set(t)},i(a){E||(x(m.$$.fragment,a),E=!0)},o(a){w(m.$$.fragment,a),E=!1},d(a){a&&$(s),a&&$(e),T(m,a)}}}function y(a){let s,t,b,k,y,A,S,j,P,H,K,M,U;return M=new e({props:{$$slots:{default:[I]},$$scope:{ctx:a}}}),{c(){s=r("h1"),t=n("SvelteKit App Trial"),b=o(),k=r("p"),y=n("Is this working?wer?"),A=o(),S=r("p"),j=r("a"),P=n("Testing page"),H=o(),K=r("div"),i(M.$$.fragment),this.h()},l(a){s=c(a,"H1",{});var e=l(s);t=p(e,"SvelteKit App Trial"),e.forEach($),b=f(a),k=c(a,"P",{});var r=l(k);y=p(r,"Is this working?wer?"),r.forEach($),A=f(a),S=c(a,"P",{});var n=l(S);j=c(n,"A",{href:!0});var o=l(j);P=p(o,"Testing page"),o.forEach($),n.forEach($),H=f(a),K=c(a,"DIV",{class:!0,style:!0});var i=l(K);h(M.$$.fragment,i),i.forEach($),this.h()},h(){d(j,"href",E+"/test"),d(K,"class","container svelte-9bfamv"),m(K,"display","flex"),m(K,"flex-wrap","wrap"),m(K,"align-items","center")},m(a,e){u(a,s,e),g(s,t),u(a,b,e),u(a,k,e),g(k,y),u(a,A,e),u(a,S,e),g(S,j),g(j,P),u(a,H,e),u(a,K,e),v(M,K,null),U=!0},p(a,[s]){const t={};1&s&&(t.$$scope={dirty:s,ctx:a}),M.$set(t)},i(a){U||(x(M.$$.fragment,a),U=!0)},o(a){w(M.$$.fragment,a),U=!1},d(a){a&&$(s),a&&$(b),a&&$(k),a&&$(A),a&&$(S),a&&$(H),a&&$(K),T(M)}}}function A(a){return console.log(E),[]}export default class extends a{constructor(a){super(),s(this,a,A,y,t,{})}}