import{H as a,R as s,Z as e,I as t,S as r,i as o,s as p,W as n,e as c,t as i,k as l,j as f,c as h,a as $,g as u,d,n as g,m as v,b as m,J as x,f as w,F as b,o as E,h as k,v as I,r as y,w as A,T as S}from"../chunks/vendor-c6512c56.js";import{b as T}from"../chunks/paths-45dac81d.js";function j(a){let s;return{c(){s=i("Tooltip on a span.")},l(a){s=u(a,"Tooltip on a span.")},m(a,e){w(a,s,e)},d(a){a&&d(s)}}}function P(a){let s,e,t,r,o;return r=new S({props:{unbounded:!0,$$slots:{default:[j]},$$scope:{ctx:a}}}),{c(){s=c("span"),e=i("Material UI tooltip example"),t=l(),f(r.$$.fragment),this.h()},l(a){s=h(a,"SPAN",{tabindex:!0});var o=$(s);e=u(o,"Material UI tooltip example"),o.forEach(d),t=g(a),v(r.$$.fragment,a),this.h()},h(){m(s,"tabindex","0")},m(a,p){w(a,s,p),b(s,e),w(a,t,p),E(r,a,p),o=!0},p(a,s){const e={};2&s&&(e.$$scope={dirty:s,ctx:a}),r.$set(e)},i(a){o||(I(r.$$.fragment,a),o=!0)},o(a){y(r.$$.fragment,a),o=!1},d(a){a&&d(s),a&&d(t),A(r,a)}}}function D(a){let s,e,t,r,o,p,S,j,D,J,K,M,N,V,z,C,H,O,U,B,F,L,R,W=JSON.stringify(a[0])+"";return L=new n({props:{$$slots:{default:[P]},$$scope:{ctx:a}}}),{c(){s=c("h1"),e=i("SvelteKit App Trial"),t=l(),r=c("p"),o=i("Is this working?wer?"),p=l(),S=c("p"),j=c("a"),D=i("Testing page"),J=l(),K=c("p"),M=c("a"),N=i("D3 page"),V=l(),z=c("p"),C=c("a"),H=i("Charts.css page"),O=l(),U=i(W),B=l(),F=c("div"),f(L.$$.fragment),this.h()},l(a){s=h(a,"H1",{});var n=$(s);e=u(n,"SvelteKit App Trial"),n.forEach(d),t=g(a),r=h(a,"P",{});var c=$(r);o=u(c,"Is this working?wer?"),c.forEach(d),p=g(a),S=h(a,"P",{});var i=$(S);j=h(i,"A",{href:!0});var l=$(j);D=u(l,"Testing page"),l.forEach(d),i.forEach(d),J=g(a),K=h(a,"P",{});var f=$(K);M=h(f,"A",{href:!0});var m=$(M);N=u(m,"D3 page"),m.forEach(d),f.forEach(d),V=g(a),z=h(a,"P",{});var x=$(z);C=h(x,"A",{href:!0});var w=$(C);H=u(w,"Charts.css page"),w.forEach(d),x.forEach(d),O=g(a),U=u(a,W),B=g(a),F=h(a,"DIV",{class:!0,style:!0});var b=$(F);v(L.$$.fragment,b),b.forEach(d),this.h()},h(){m(j,"href",T+"/test"),m(M,"href",T+"/d3"),m(C,"href",T+"/chartscss"),m(F,"class","container svelte-9bfamv"),x(F,"display","flex"),x(F,"flex-wrap","wrap"),x(F,"align-items","center")},m(a,n){w(a,s,n),b(s,e),w(a,t,n),w(a,r,n),b(r,o),w(a,p,n),w(a,S,n),b(S,j),b(j,D),w(a,J,n),w(a,K,n),b(K,M),b(M,N),w(a,V,n),w(a,z,n),b(z,C),b(C,H),w(a,O,n),w(a,U,n),w(a,B,n),w(a,F,n),E(L,F,null),R=!0},p(a,[s]){(!R||1&s)&&W!==(W=JSON.stringify(a[0])+"")&&k(U,W);const e={};2&s&&(e.$$scope={dirty:s,ctx:a}),L.$set(e)},i(a){R||(I(L.$$.fragment,a),R=!0)},o(a){y(L.$$.fragment,a),R=!1},d(a){a&&d(s),a&&d(t),a&&d(r),a&&d(p),a&&d(S),a&&d(J),a&&d(K),a&&d(V),a&&d(z),a&&d(O),a&&d(U),a&&d(B),a&&d(F),A(L)}}}async function J(){a({apiKey:"AIzaSyAupV49Mt24faf7jzkpV3ADhhajbLPwnac",authDomain:"test-sveltekit-app.firebaseapp.com",projectId:"test-sveltekit-app",storageBucket:"test-sveltekit-app.appspot.com",messagingSenderId:"1088283466021",appId:"1:1088283466021:web:e9bd4e66b40e68f55262cc"});const r=s();var o=[];return(await e(t(r,"app"))).forEach((a=>{console.log(`${a.id} => ${a.data()}`),o.push(a.data())})),{props:{values:o}}}function K(a,s,e){console.log(T);let{values:t}=s;return a.$$set=a=>{"values"in a&&e(0,t=a.values)},[t]}export default class extends r{constructor(a){super(),o(this,a,K,D,p,{values:0})}}export{J as load};
