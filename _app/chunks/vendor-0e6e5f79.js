var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,i=(e,n,r)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,s=(t,s)=>{for(var o in s||(s={}))e.call(s,o)&&i(t,o,s[o]);if(n)for(var o of n(s))r.call(s,o)&&i(t,o,s[o]);return t};function o(){}function a(t,e){for(const n in e)t[n]=e[n];return t}function c(t){return t()}function u(){return Object.create(null)}function l(t){t.forEach(c)}function h(t){return"function"==typeof t}function f(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function d(t,e,n){t.$$.on_destroy.push(function(t,...e){if(null==t)return o;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}(e,n))}function p(t,e,n,r){if(t){const i=m(t,e,n,r);return t[0](i)}}function m(t,e,n,r){return t[1]&&r?a(n.ctx.slice(),t[1](r(e))):n.ctx}function g(t,e,n,r,i,s,o){const a=function(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|i[r];return t}return e.dirty|i}return e.dirty}(e,r,i,s);if(a){const i=m(e,n,r,o);t.p(i,a)}}function y(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function v(t,e){const n={};e=new Set(e);for(const r in t)e.has(r)||"$"===r[0]||(n[r]=t[r]);return n}function w(t,e,n=e){return t.set(n),e}function E(t){return t&&h(t.destroy)?t.destroy:o}function b(t,e){t.appendChild(e)}function T(t,e,n){t.insertBefore(e,n||null)}function _(t){t.parentNode.removeChild(t)}function A(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function I(){return S(" ")}function x(){return S("")}function C(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function N(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function D(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:N(t,r,e[r])}function R(t){return Array.from(t.childNodes)}function O(t,e,n,r){for(let i=0;i<t.length;i+=1){const r=t[i];if(r.nodeName===e){let e=0;const s=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)r.removeAttribute(s[t]);return t.splice(i,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):A(e)}function k(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return S(e)}function L(t){return k(t," ")}function P(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function M(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}let V;function U(t){V=t}function F(){if(!V)throw new Error("Function called outside component initialization");return V}function H(t){F().$$.on_mount.push(t)}function $(t){F().$$.after_update.push(t)}function B(t,e){F().$$.context.set(t,e)}function q(t){return F().$$.context.get(t)}const j=[],z=[],K=[],W=[],G=Promise.resolve();let Q=!1;function X(t){K.push(t)}let Y=!1;const J=new Set;function Z(){if(!Y){Y=!0;do{for(let t=0;t<j.length;t+=1){const e=j[t];U(e),tt(e.$$)}for(U(null),j.length=0;z.length;)z.pop()();for(let t=0;t<K.length;t+=1){const e=K[t];J.has(e)||(J.add(e),e())}K.length=0}while(j.length);for(;W.length;)W.pop()();Q=!1,Y=!1,J.clear()}}function tt(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}const et=new Set;let nt;function rt(){nt={r:0,c:[],p:nt}}function it(){nt.r||l(nt.c),nt=nt.p}function st(t,e){t&&t.i&&(et.delete(t),t.i(e))}function ot(t,e,n,r){if(t&&t.o){if(et.has(t))return;et.add(t),nt.c.push((()=>{et.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function at(t,e){const n={},r={},i={$$scope:1};let s=t.length;for(;s--;){const o=t[s],a=e[s];if(a){for(const t in o)t in a||(r[t]=1);for(const t in a)i[t]||(n[t]=a[t],i[t]=1);t[s]=a}else for(const t in o)i[t]=1}for(const o in r)o in n||(n[o]=void 0);return n}function ct(t){return"object"==typeof t&&null!==t?t:{}}function ut(t){t&&t.c()}function lt(t,e){t&&t.l(e)}function ht(t,e,n,r){const{fragment:i,on_mount:s,on_destroy:o,after_update:a}=t.$$;i&&i.m(e,n),r||X((()=>{const e=s.map(c).filter(h);o?o.push(...e):l(e),t.$$.on_mount=[]})),a.forEach(X)}function ft(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function dt(t,e){-1===t.$$.dirty[0]&&(j.push(t),Q||(Q=!0,G.then(Z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pt(t,e,n,r,i,s,a=[-1]){const c=V;U(t);const h=t.$$={fragment:null,ctx:null,props:s,update:o,not_equal:i,bound:u(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:e.context||[]),callbacks:u(),dirty:a,skip_bound:!1};let f=!1;if(h.ctx=n?n(t,e.props||{},((e,n,...r)=>{const s=r.length?r[0]:n;return h.ctx&&i(h.ctx[e],h.ctx[e]=s)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](s),f&&dt(t,e)),n})):[],h.update(),f=!0,l(h.before_update),h.fragment=!!r&&r(h.ctx),e.target){if(e.hydrate){const t=R(e.target);h.fragment&&h.fragment.l(t),t.forEach(_)}else h.fragment&&h.fragment.c();e.intro&&st(t.$$.fragment),ht(t,e.target,e.anchor,e.customElement),Z()}U(c)}class mt{$destroy(){ft(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const gt=[];function yt(t,e=o){let n;const r=[];function i(e){if(f(t,e)&&(t=e,n)){const e=!gt.length;for(let n=0;n<r.length;n+=1){const e=r[n];e[1](),gt.push(e,t)}if(e){for(let t=0;t<gt.length;t+=2)gt[t][0](gt[t+1]);gt.length=0}}}return{set:i,update:function(e){i(e(t))},subscribe:function(s,a=o){const c=[s,a];return r.push(c),1===r.length&&(n=e(i)||o),s(t),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(n(),n=null)}}}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var vt=function(t,e){return(vt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function wt(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}vt(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var Et=function(){return(Et=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function bt(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{c(r.next(t))}catch(e){s(e)}}function a(t){try{c(r.throw(t))}catch(e){s(e)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((r=r.apply(t,e||[])).next())}))}function Tt(t,e){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function _t(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function At(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,s=n.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function St(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It=function(){function t(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return t.prototype.wrapCallback=function(t){var e=this;return function(n,r){n?e.reject(n):e.resolve(r),"function"==typeof t&&(e.promise.catch((function(){})),1===t.length?t(n):t(n,r))}},t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ct=function(t){function e(n,r,i){var s=t.call(this,r)||this;return s.code=n,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(s,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,Nt.prototype.create),s}return wt(e,t),e}(Error),Nt=function(){function t(t,e,n){this.service=t,this.serviceName=e,this.errors=n}return t.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=e[0]||{},i=this.service+"/"+t,s=this.errors[t],o=s?Dt(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",c=new Ct(i,a,r);return c},t}();function Dt(t,e){return t.replace(Rt,(function(t,n){var r=e[n];return null!=r?String(r):"<"+n+"?>"}))}var Rt=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ot=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),kt=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}return t.prototype.get=function(t){void 0===t&&(t="[DEFAULT]");var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new It;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e=Et({identifier:"[DEFAULT]",optional:!1},t),n=e.identifier,r=e.optional,i=this.normalizeInstanceIdentifier(n);if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(l){}try{for(var r=_t(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var s=At(i.value,2),o=s[0],a=s[1],c=this.normalizeInstanceIdentifier(o);try{var u=this.getOrInitializeService({instanceIdentifier:c});a.resolve(u)}catch(l){}}}catch(h){e={error:h}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t="[DEFAULT]"),this.instancesDeferred.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return bt(this,void 0,void 0,(function(){var t;return Tt(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(St(St([],At(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),At(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t="[DEFAULT]"),this.instances.has(t)},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var r=t.instanceIdentifier,i=void 0===r?"[DEFAULT]":r,s=t.options,o=void 0===s?{}:s,a=this.normalizeInstanceIdentifier(i);if(this.isInitialized(a))throw Error(this.name+"("+a+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var c=this.getOrInitializeService({instanceIdentifier:a,options:o});try{for(var u=_t(this.instancesDeferred.entries()),l=u.next();!l.done;l=u.next()){var h=At(l.value,2),f=h[0],d=h[1];a===this.normalizeInstanceIdentifier(f)&&d.resolve(c)}}catch(p){e={error:p}}finally{try{l&&!l.done&&(n=u.return)&&n.call(u)}finally{if(e)throw e.error}}return c},t.prototype.getOrInitializeService=function(t){var e,n=t.instanceIdentifier,r=t.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(e=n,"[DEFAULT]"===e?void 0:e),options:i}),this.instances.set(n,s),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(o){}return s||null},t.prototype.normalizeInstanceIdentifier=function(t){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lt,Pt,Mt,Vt=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new kt(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function Ut(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Mt=Pt||(Pt={}))[Mt.DEBUG=0]="DEBUG",Mt[Mt.VERBOSE=1]="VERBOSE",Mt[Mt.INFO=2]="INFO",Mt[Mt.WARN=3]="WARN",Mt[Mt.ERROR=4]="ERROR",Mt[Mt.SILENT=5]="SILENT";var Ft={debug:Pt.DEBUG,verbose:Pt.VERBOSE,info:Pt.INFO,warn:Pt.WARN,error:Pt.ERROR,silent:Pt.SILENT},Ht=Pt.INFO,$t=((Lt={})[Pt.DEBUG]="log",Lt[Pt.VERBOSE]="log",Lt[Pt.INFO]="info",Lt[Pt.WARN]="warn",Lt[Pt.ERROR]="error",Lt),Bt=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(e<t.logLevel)){var i=(new Date).toISOString(),s=$t[e];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[s].apply(console,Ut(["["+i+"]  "+t.name+":"],n))}},qt=function(){function t(t){this.name=t,this._logLevel=Ht,this._logHandler=Bt,this._userLogHandler=null}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in Pt))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(t){this._logLevel="string"==typeof t?Ft[t]:t},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,Ut([this,Pt.DEBUG],t)),this._logHandler.apply(this,Ut([this,Pt.DEBUG],t))},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,Ut([this,Pt.VERBOSE],t)),this._logHandler.apply(this,Ut([this,Pt.VERBOSE],t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,Ut([this,Pt.INFO],t)),this._logHandler.apply(this,Ut([this,Pt.INFO],t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,Ut([this,Pt.WARN],t)),this._logHandler.apply(this,Ut([this,Pt.WARN],t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,Ut([this,Pt.ERROR],t)),this._logHandler.apply(this,Ut([this,Pt.ERROR],t))},t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const zt=new qt("@firebase/app"),Kt={"@firebase/app-exp":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics-exp":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/auth-exp":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions-exp":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations-exp":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging-exp":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance-exp":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config-exp":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js","firebase-exp":"fire-js-all"},Wt=new Map,Gt=new Map;function Qt(t,e){try{t.container.addComponent(e)}catch(n){zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xt(t){const e=t.name;if(Gt.has(e))return zt.debug(`There were multiple attempts to register component ${e}.`),!1;Gt.set(e,t);for(const n of Wt.values())Qt(n,t);return!0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yt=new Nt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ot("app-exp",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}function Zt(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!=typeof r||!r)throw Yt.create("bad-app-name",{appName:String(r)});if(Wt.has(r))throw Yt.create("duplicate-app",{appName:r});const i=new Vt(r);for(const o of Gt.values())i.addComponent(o);const s=new Jt(t,n,i);return Wt.set(r,s),s}function te(t="[DEFAULT]"){const e=Wt.get(t);if(!e)throw Yt.create("no-app",{appName:t});return e}function ee(){return Array.from(Wt.values())}function ne(t,e,n){var r;let i=null!==(r=Kt[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void zt.warn(t.join(" "))}Xt(new Ot(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;Xt(new Ot("platform-logger",(t=>new jt(t)),"PRIVATE")),ne("@firebase/app-exp","0.0.900-exp.894b5da5a",re),ne("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ne("firebase-exp","9.0.0-beta.1","app");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var ie=function(t,e){return(ie=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function se(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var oe,ae="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},ce=ce||{},ue=ae||self;function le(){}function he(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function fe(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var de="closure_uid_"+(1e9*Math.random()>>>0),pe=0;function me(t,e,n){return t.call.apply(t.bind,arguments)}function ge(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function ye(t,e,n){return(ye=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?me:ge).apply(null,arguments)}function ve(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function we(){return Date.now()}function Ee(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Kb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function be(){this.j=this.j,this.i=this.i}be.prototype.j=!1,be.prototype.ja=function(){var t;!this.j&&(this.j=!0,this.G(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,de)&&t[de]||(t[de]=++pe))},be.prototype.G=function(){if(this.i)for(;this.i.length;)this.i.shift()()};var Te=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},_e=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i="string"==typeof t?t.split(""):t,s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function Ae(t){return Array.prototype.concat.apply([],arguments)}function Se(t){var e=t.length;if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ie(t){return/^[\s\xa0]*$/.test(t)}var xe,Ce=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ne(t,e){return-1!=t.indexOf(e)}function De(t,e){return t<e?-1:t>e?1:0}t:{var Re=ue.navigator;if(Re){var Oe=Re.userAgent;if(Oe){xe=Oe;break t}}xe=""}function ke(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function Le(t){var e={};for(var n in t)e[n]=t[n];return e}var Pe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Me(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])t[n]=r[n];for(var s=0;s<Pe.length;s++)n=Pe[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ve(t){return Ve[" "](t),t}Ve[" "]=le;var Ue,Fe,He=Ne(xe,"Opera"),$e=Ne(xe,"Trident")||Ne(xe,"MSIE"),Be=Ne(xe,"Edge"),qe=Be||$e,je=Ne(xe,"Gecko")&&!(Ne(xe.toLowerCase(),"webkit")&&!Ne(xe,"Edge"))&&!(Ne(xe,"Trident")||Ne(xe,"MSIE"))&&!Ne(xe,"Edge"),ze=Ne(xe.toLowerCase(),"webkit")&&!Ne(xe,"Edge");function Ke(){var t=ue.document;return t?t.documentMode:void 0}t:{var We="",Ge=(Fe=xe,je?/rv:([^\);]+)(\)|;)/.exec(Fe):Be?/Edge\/([\d\.]+)/.exec(Fe):$e?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Fe):ze?/WebKit\/(\S+)/.exec(Fe):He?/(?:Version)[ \/]?(\S+)/.exec(Fe):void 0);if(Ge&&(We=Ge?Ge[1]:""),$e){var Qe=Ke();if(null!=Qe&&Qe>parseFloat(We)){Ue=String(Qe);break t}}Ue=We}var Xe,Ye={};function Je(t){return function(t,e){var n=Ye;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(){for(var e=0,n=Ce(String(Ue)).split("."),r=Ce(String(t)).split("."),i=Math.max(n.length,r.length),s=0;0==e&&s<i;s++){var o=n[s]||"",a=r[s]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],0==o[0].length&&0==a[0].length)break;e=De(0==o[1].length?0:parseInt(o[1],10),0==a[1].length?0:parseInt(a[1],10))||De(0==o[2].length,0==a[2].length)||De(o[2],a[2]),o=o[3],a=a[3]}while(0==e)}return 0<=e}))}if(ue.document&&$e){var Ze=Ke();Xe=Ze||(parseInt(Ue,10)||void 0)}else Xe=void 0;var tn=Xe,en=!$e||9<=Number(tn),nn=$e&&!Je("9"),rn=function(){if(!ue.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ue.addEventListener("test",le,e),ue.removeEventListener("test",le,e)}catch(n){}return t}();function sn(t,e){this.type=t,this.a=this.target=e,this.defaultPrevented=!1}function on(t,e){if(sn.call(this,t?t.type:""),this.relatedTarget=this.a=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.c=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.a=e,e=t.relatedTarget){if(je){t:{try{Ve(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:an[t.pointerType]||"",this.c=t,t.defaultPrevented&&this.b()}}sn.prototype.b=function(){this.defaultPrevented=!0},Ee(on,sn);var an={2:"touch",3:"pen",4:"mouse"};on.prototype.b=function(){on.X.b.call(this);var t=this.c;if(t.preventDefault)t.preventDefault();else if(t.returnValue=!1,nn)try{(t.ctrlKey||112<=t.keyCode&&123>=t.keyCode)&&(t.keyCode=-1)}catch(e){}};var cn="closure_listenable_"+(1e6*Math.random()|0),un=0;function ln(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ca=i,this.key=++un,this.Y=this.Z=!1}function hn(t){t.Y=!0,t.listener=null,t.proxy=null,t.src=null,t.ca=null}function fn(t){this.src=t,this.a={},this.b=0}function dn(t,e){var n=e.type;if(n in t.a){var r,i=t.a[n],s=Te(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(hn(e),0==t.a[n].length&&(delete t.a[n],t.b--))}}function pn(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.Y&&s.listener==e&&s.capture==!!n&&s.ca==r)return i}return-1}fn.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.a[s])||(t=this.a[s]=[],this.b++);var o=pn(t,e,r,i);return-1<o?(e=t[o],n||(e.Z=!1)):((e=new ln(e,this.src,s,!!r,i)).Z=n,t.push(e)),e};var mn="closure_lm_"+(1e6*Math.random()|0),gn={};function yn(t,e,n,r,i){if(r&&r.once)return wn(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)yn(t,e[s],n,r,i);return null}return n=xn(n),t&&t[cn]?t.va(e,n,fe(r)?!!r.capture:!!r,i):vn(t,e,n,!1,r,i)}function vn(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=fe(i)?!!i.capture:!!i;if(o&&!en)return null;var a=Sn(t);if(a||(t[mn]=a=new fn(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){var t=An,e=en?function(n){return t.call(e.src,e.listener,n)}:function(n){if(!(n=t.call(e.src,e.listener,n)))return n};return e}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)rn||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Tn(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function wn(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)wn(t,e[s],n,r,i);return null}return n=xn(n),t&&t[cn]?t.wa(e,n,fe(r)?!!r.capture:!!r,i):vn(t,e,n,!0,r,i)}function En(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)En(t,e[s],n,r,i);else r=fe(r)?!!r.capture:!!r,n=xn(n),t&&t[cn]?(t=t.c,(e=String(e).toString())in t.a&&(-1<(n=pn(s=t.a[e],n,r,i))&&(hn(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.a[e],t.b--)))):t&&(t=Sn(t))&&(e=t.a[e.toString()],t=-1,e&&(t=pn(e,n,r,i)),(n=-1<t?e[t]:null)&&bn(n))}function bn(t){if("number"!=typeof t&&t&&!t.Y){var e=t.src;if(e&&e[cn])dn(e.c,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Tn(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Sn(e))?(dn(n,t),0==n.b&&(n.src=null,e[mn]=null)):hn(t)}}}function Tn(t){return t in gn?gn[t]:gn[t]="on"+t}function _n(t,e){var n=t.listener,r=t.ca||t.src;return t.Z&&bn(t),n.call(r,e)}function An(t,e){if(t.Y)return!0;if(!en){if(!e)t:{e=["window","event"];for(var n=ue,r=0;r<e.length;r++)if(null==(n=n[e[r]])){e=null;break t}e=n}return _n(t,e=new on(e,this))}return _n(t,new on(e,this))}function Sn(t){return(t=t[mn])instanceof fn?t:null}var In="__closure_events_fn_"+(1e9*Math.random()>>>0);function xn(t){return"function"==typeof t?t:(t[In]||(t[In]=function(e){return t.handleEvent(e)}),t[In])}function Cn(){be.call(this),this.c=new fn(this),this.J=this,this.C=null}function Nn(t,e){var n,r=t.C;if(r)for(n=[];r;r=r.C)n.push(r);if(t=t.J,r=e.type||e,"string"==typeof e)e=new sn(e,t);else if(e instanceof sn)e.target=e.target||t;else{var i=e;Me(e=new sn(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.a=n[s];i=Dn(o,r,!0,e)&&i}if(i=Dn(o=e.a=t,r,!0,e)&&i,i=Dn(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=Dn(o=e.a=n[s],r,!1,e)&&i}function Dn(t,e,n,r){if(!(e=t.c.a[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.Y&&o.capture==n){var a=o.listener,c=o.ca||o.src;o.Z&&dn(t.c,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}Ee(Cn,be),Cn.prototype[cn]=!0,(oe=Cn.prototype).addEventListener=function(t,e,n,r){yn(this,t,e,n,r)},oe.removeEventListener=function(t,e,n,r){En(this,t,e,n,r)},oe.G=function(){if(Cn.X.G.call(this),this.c){var t,e=this.c;for(t in e.a){for(var n=e.a[t],r=0;r<n.length;r++)hn(n[r]);delete e.a[t],e.b--}}this.C=null},oe.va=function(t,e,n,r){return this.c.add(String(t),e,!1,n,r)},oe.wa=function(t,e,n,r){return this.c.add(String(t),e,!0,n,r)};var Rn=ue.JSON.stringify;function On(){this.b=this.a=null}var kn,Ln=new(function(){function t(t,e){this.c=t,this.f=e,this.b=0,this.a=null}return t.prototype.get=function(){var t;return 0<this.b?(this.b--,t=this.a,this.a=t.next,t.next=null):t=this.c(),t},t}())((function(){return new Mn}),(function(t){t.reset()}));function Pn(){var t=Hn,e=null;return t.a&&(e=t.a,t.a=t.a.next,t.a||(t.b=null),e.next=null),e}function Mn(){this.next=this.b=this.a=null}function Vn(t){ue.setTimeout((function(){throw t}),0)}function Un(t,e){kn||function(){var t=ue.Promise.resolve(void 0);kn=function(){t.then($n)}}(),Fn||(kn(),Fn=!0),Hn.add(t,e)}On.prototype.add=function(t,e){var n=Ln.get();n.set(t,e),this.b?this.b.next=n:this.a=n,this.b=n},Mn.prototype.set=function(t,e){this.a=t,this.b=e,this.next=null},Mn.prototype.reset=function(){this.next=this.b=this.a=null};var Fn=!1,Hn=new On;function $n(){for(var t;t=Pn();){try{t.a.call(t.b)}catch(n){Vn(n)}var e=Ln;e.f(t),100>e.b&&(e.b++,t.next=e.a,e.a=t)}Fn=!1}function Bn(t,e){Cn.call(this),this.b=t||1,this.a=e||ue,this.f=ye(this.Za,this),this.g=we()}function qn(t){t.aa=!1,t.M&&(t.a.clearTimeout(t.M),t.M=null)}function jn(t,e,n){if("function"==typeof t)n&&(t=ye(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=ye(t.handleEvent,t)}return 2147483647<Number(e)?-1:ue.setTimeout(t,e||0)}function zn(t){t.a=jn((function(){t.a=null,t.c&&(t.c=!1,zn(t))}),t.h);var e=t.b;t.b=null,t.g.apply(null,e)}Ee(Bn,Cn),(oe=Bn.prototype).aa=!1,oe.M=null,oe.Za=function(){if(this.aa){var t=we()-this.g;0<t&&t<.8*this.b?this.M=this.a.setTimeout(this.f,this.b-t):(this.M&&(this.a.clearTimeout(this.M),this.M=null),Nn(this,"tick"),this.aa&&(qn(this),this.start()))}},oe.start=function(){this.aa=!0,this.M||(this.M=this.a.setTimeout(this.f,this.b),this.g=we())},oe.G=function(){Bn.X.G.call(this),qn(this),delete this.a};var Kn=function(t){function e(e,n){var r=t.call(this)||this;return r.g=e,r.h=n,r.b=null,r.c=!1,r.a=null,r}return function(t,e){function n(){this.constructor=t}ie(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.f=function(t){this.b=arguments,this.a?this.c=!0:zn(this)},e.prototype.G=function(){t.prototype.G.call(this),this.a&&(ue.clearTimeout(this.a),this.a=null,this.c=!1,this.b=null)},e}(be);function Wn(t){be.call(this),this.b=t,this.a={}}Ee(Wn,be);var Gn=[];function Qn(t,e,n,r){Array.isArray(n)||(n&&(Gn[0]=n.toString()),n=Gn);for(var i=0;i<n.length;i++){var s=yn(e,n[i],r||t.handleEvent,!1,t.b||t);if(!s)break;t.a[s.key]=s}}function Xn(t){ke(t.a,(function(t,e){this.a.hasOwnProperty(e)&&bn(t)}),t),t.a={}}function Yn(){this.a=!0}function Jn(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.a)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Rn(n)}catch(a){return e}}(t,n)+(r?" "+r:"")}))}Wn.prototype.G=function(){Wn.X.G.call(this),Xn(this)},Wn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Yn.prototype.info=function(){};var Zn={},tr=null;function er(){return tr=tr||new Cn}function nr(t){sn.call(this,Zn.Fa,t)}function rr(t){var e=er();Nn(e,new nr(e,t))}function ir(t,e){sn.call(this,Zn.STAT_EVENT,t),this.stat=e}function sr(t){var e=er();Nn(e,new ir(e,t))}function or(t){sn.call(this,Zn.Ga,t)}function ar(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return ue.setTimeout((function(){t()}),e)}Zn.Fa="serverreachability",Ee(nr,sn),Zn.STAT_EVENT="statevent",Ee(ir,sn),Zn.Ga="timingevent",Ee(or,sn);var cr={NO_ERROR:0,$a:1,nb:2,mb:3,hb:4,lb:5,ob:6,Da:7,TIMEOUT:8,rb:9},ur={fb:"complete",Bb:"success",Ea:"error",Da:"abort",tb:"ready",ub:"readystatechange",TIMEOUT:"timeout",pb:"incrementaldata",sb:"progress",ib:"downloadprogress",Jb:"uploadprogress"};function lr(){}function hr(t){var e;return(e=t.a)||(e=t.a={}),e}function fr(){}lr.prototype.a=null;var dr,pr={OPEN:"a",eb:"b",Ea:"c",qb:"d"};function mr(){sn.call(this,"d")}function gr(){sn.call(this,"c")}function yr(){}function vr(t,e,n,r){this.g=t,this.c=e,this.f=n,this.S=r||1,this.J=new Wn(this),this.P=wr,t=qe?125:void 0,this.R=new Bn(t),this.B=null,this.b=!1,this.j=this.l=this.i=this.H=this.u=this.T=this.o=null,this.s=[],this.a=null,this.D=0,this.h=this.m=null,this.N=-1,this.A=!1,this.O=0,this.F=null,this.V=this.C=this.U=this.I=!1}Ee(mr,sn),Ee(gr,sn),Ee(yr,lr),dr=new yr;var wr=45e3,Er={},br={};function Tr(t,e,n){t.H=1,t.i=jr(Ur(e)),t.j=n,t.I=!0,_r(t,null)}function _r(t,e){t.u=we(),Ir(t),t.l=Ur(t.i);var n=t.l,r=t.S;Array.isArray(r)||(r=[String(r)]),ri(n.b,"t",r),t.D=0,t.a=Yi(t.g,t.g.C?e:null),0<t.O&&(t.F=new Kn(ye(t.Ca,t,t.a),t.O)),Qn(t.J,t.a,"readystatechange",t.Xa),e=t.B?Le(t.B):{},t.j?(t.m||(t.m="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.a.ba(t.l,t.m,t.j,e)):(t.m="GET",t.a.ba(t.l,t.m,null,e)),rr(1),function(t,e,n,r,i,s){t.info((function(){if(t.a)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.c,t.m,t.l,t.f,t.S,t.j)}function Ar(t,e,n){for(var r=!0;!t.A&&t.D<n.length;){var i=Sr(t,n);if(i==br){4==e&&(t.h=4,sr(14),r=!1),Jn(t.c,t.f,null,"[Incomplete Response]");break}if(i==Er){t.h=4,sr(15),Jn(t.c,t.f,n,"[Invalid Chunk]"),r=!1;break}Jn(t.c,t.f,i,null),Rr(t,i)}4==e&&0==n.length&&(t.h=1,sr(16),r=!1),t.b=t.b&&r,r?0<n.length&&!t.V&&(t.V=!0,(e=t.g).a==t&&e.U&&!e.F&&(e.c.info("Great, no buffering proxy detected. Bytes received: "+n.length),qi(e),e.F=!0,sr(11))):(Jn(t.c,t.f,n,"[Invalid Chunked Response]"),Dr(t),Nr(t))}function Sr(t,e){var n=t.D,r=e.indexOf("\n",n);return-1==r?br:(n=Number(e.substring(n,r)),isNaN(n)?Er:(r+=1)+n>e.length?br:(e=e.substr(r,n),t.D=r+n,e))}function Ir(t){t.T=we()+t.P,xr(t,t.P)}function xr(t,e){if(null!=t.o)throw Error("WatchDog timer not null");t.o=ar(ye(t.Va,t),e)}function Cr(t){t.o&&(ue.clearTimeout(t.o),t.o=null)}function Nr(t){0==t.g.v||t.A||Ki(t.g,t)}function Dr(t){Cr(t);var e=t.F;e&&"function"==typeof e.ja&&e.ja(),t.F=null,qn(t.R),Xn(t.J),t.a&&(e=t.a,t.a=null,e.abort(),e.ja())}function Rr(t,e){try{var n=t.g;if(0!=n.v&&(n.a==t||li(n.b,t)))if(n.I=t.N,!t.C&&li(n.b,t)&&3==n.v){try{var r=n.ka.a.parse(e)}catch(g){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.j){if(n.a){if(!(n.a.u+3e3<t.u))break t;zi(n),Li(n)}Bi(n),sr(18)}}else n.oa=i[1],0<n.oa-n.P&&37500>i[2]&&n.H&&0==n.o&&!n.m&&(n.m=ar(ye(n.Sa,n),6e3));if(1>=ui(n.b)&&n.ea){try{n.ea()}catch(g){}n.ea=void 0}}else Gi(n,11)}else if((t.C||n.a==t)&&zi(n),!Ie(e))for(e=r=n.ka.a.parse(e),r=0;r<e.length;r++)if(i=e[r],n.P=i[0],i=i[1],2==n.v)if("c"==i[0]){n.J=i[1],n.ga=i[2];var s=i[3];null!=s&&(n.ha=s,n.c.info("VER="+n.ha));var o=i[4];null!=o&&(n.pa=o,n.c.info("SVER="+n.pa));var a=i[5];if(null!=a&&"number"==typeof a&&0<a){var c=1.5*a;n.D=c,n.c.info("backChannelRequestTimeoutMs_="+c)}c=n;var u=t.a;if(u){var l=u.a?u.a.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=c.b;!h.a&&(Ne(l,"spdy")||Ne(l,"quic")||Ne(l,"h2"))&&(h.f=h.g,h.a=new Set,h.b&&(hi(h,h.b),h.b=null))}if(c.A){var f=u.a?u.a.getResponseHeader("X-HTTP-Session-Id"):null;f&&(c.na=f,qr(c.B,c.A,f))}}n.v=3,n.f&&n.f.ta(),n.U&&(n.N=we()-t.u,n.c.info("Handshake RTT: "+n.N+"ms"));var d=t;if((c=n).la=Xi(c,c.C?c.ga:null,c.fa),d.C){fi(c.b,d);var p=d,m=c.D;m&&p.setTimeout(m),p.o&&(Cr(p),Ir(p)),c.a=d}else $i(c);0<n.g.length&&Vi(n)}else"stop"!=i[0]&&"close"!=i[0]||Gi(n,7);else 3==n.v&&("stop"==i[0]||"close"==i[0]?"stop"==i[0]?Gi(n,7):ki(n):"noop"!=i[0]&&n.f&&n.f.sa(i),n.o=0);rr(4)}catch(g){}}function Or(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(he(t)||"string"==typeof t)_e(t,e,void 0);else{if(t.L&&"function"==typeof t.L)var n=t.L();else if(t.K&&"function"==typeof t.K)n=void 0;else if(he(t)||"string"==typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;i=(r=function(t){if(t.K&&"function"==typeof t.K)return t.K();if("string"==typeof t)return t.split("");if(he(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t)).length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function kr(t,e){this.b={},this.a=[],this.c=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof kr)for(n=t.L(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Lr(t){if(t.c!=t.a.length){for(var e=0,n=0;e<t.a.length;){var r=t.a[e];Pr(t.b,r)&&(t.a[n++]=r),e++}t.a.length=n}if(t.c!=t.a.length){var i={};for(n=e=0;e<t.a.length;)Pr(i,r=t.a[e])||(t.a[n++]=r,i[r]=1),e++;t.a.length=n}}function Pr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(oe=vr.prototype).setTimeout=function(t){this.P=t},oe.Xa=function(t){t=t.target;var e=this.F;e&&3==Ni(t)?e.f():this.Ca(t)},oe.Ca=function(t){try{if(t==this.a)t:{var e=Ni(this.a),n=this.a.ua(),r=this.a.W();if(!(3>e||3==e&&!qe&&!this.a.$())){this.A||4!=e||7==n||rr(8==n||0>=r?3:2),Cr(this);var i=this.a.W();this.N=i;var s=this.a.$();if(this.b=200==i,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.c,this.m,this.l,this.f,this.S,e,i),this.b){if(this.U&&!this.C){e:{if(this.a){var o,a=this.a;if((o=a.a?a.a.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ie(o)){var c=o;break e}}c=null}if(!c){this.b=!1,this.h=3,sr(12),Dr(this),Nr(this);break t}Jn(this.c,this.f,c,"Initial handshake response via X-HTTP-Initial-Response"),this.C=!0,Rr(this,c)}this.I?(Ar(this,e,s),qe&&this.b&&3==e&&(Qn(this.J,this.R,"tick",this.Wa),this.R.start())):(Jn(this.c,this.f,s,null),Rr(this,s)),4==e&&Dr(this),this.b&&!this.A&&(4==e?Ki(this.g,this):(this.b=!1,Ir(this)))}else 400==i&&0<s.indexOf("Unknown SID")?(this.h=3,sr(12)):(this.h=0,sr(13)),Dr(this),Nr(this)}}}catch(u){}},oe.Wa=function(){if(this.a){var t=Ni(this.a),e=this.a.$();this.D<e.length&&(Cr(this),Ar(this,t,e),this.b&&4!=t&&Ir(this))}},oe.cancel=function(){this.A=!0,Dr(this)},oe.Va=function(){this.o=null;var t=we();0<=t-this.T?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.c,this.l),2!=this.H&&(rr(3),sr(17)),Dr(this),this.h=2,Nr(this)):xr(this,this.T-t)},(oe=kr.prototype).K=function(){Lr(this);for(var t=[],e=0;e<this.a.length;e++)t.push(this.b[this.a[e]]);return t},oe.L=function(){return Lr(this),this.a.concat()},oe.get=function(t,e){return Pr(this.b,t)?this.b[t]:e},oe.set=function(t,e){Pr(this.b,t)||(this.c++,this.a.push(t)),this.b[t]=e},oe.forEach=function(t,e){for(var n=this.L(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var Mr=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Vr(t,e){if(this.c=this.j=this.f="",this.h=null,this.i=this.g="",this.a=!1,t instanceof Vr){this.a=void 0!==e?e:t.a,Fr(this,t.f),this.j=t.j,Hr(this,t.c),$r(this,t.h),this.g=t.g,e=t.b;var n=new Zr;n.c=e.c,e.a&&(n.a=new kr(e.a),n.b=e.b),Br(this,n),this.i=t.i}else t&&(n=String(t).match(Mr))?(this.a=!!e,Fr(this,n[1]||"",!0),this.j=zr(n[2]||""),Hr(this,n[3]||"",!0),$r(this,n[4]),this.g=zr(n[5]||"",!0),Br(this,n[6]||"",!0),this.i=zr(n[7]||"")):(this.a=!!e,this.b=new Zr(null,this.a))}function Ur(t){return new Vr(t)}function Fr(t,e,n){t.f=n?zr(e,!0):e,t.f&&(t.f=t.f.replace(/:$/,""))}function Hr(t,e,n){t.c=n?zr(e,!0):e}function $r(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.h=e}else t.h=null}function Br(t,e,n){e instanceof Zr?(t.b=e,function(t,e){e&&!t.f&&(ti(t),t.c=null,t.a.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ei(this,e),ri(this,n,t))}),t)),t.f=e}(t.b,t.a)):(n||(e=Kr(e,Yr)),t.b=new Zr(e,t.a))}function qr(t,e,n){t.b.set(e,n)}function jr(t){return qr(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^we()).toString(36)),t}function zr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Kr(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Wr),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Wr(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Vr.prototype.toString=function(){var t=[],e=this.f;e&&t.push(Kr(e,Gr,!0),":");var n=this.c;return(n||"file"==e)&&(t.push("//"),(e=this.j)&&t.push(Kr(e,Gr,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.h)&&t.push(":",String(n))),(n=this.g)&&(this.c&&"/"!=n.charAt(0)&&t.push("/"),t.push(Kr(n,"/"==n.charAt(0)?Xr:Qr,!0))),(n=this.b.toString())&&t.push("?",n),(n=this.i)&&t.push("#",Kr(n,Jr)),t.join("")};var Gr=/[#\/\?@]/g,Qr=/[#\?:]/g,Xr=/[#\?]/g,Yr=/[#\?@]/g,Jr=/#/g;function Zr(t,e){this.b=this.a=null,this.c=t||null,this.f=!!e}function ti(t){t.a||(t.a=new kr,t.b=0,t.c&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.c,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ei(t,e){ti(t),e=ii(t,e),Pr(t.a.b,e)&&(t.c=null,t.b-=t.a.get(e).length,Pr((t=t.a).b,e)&&(delete t.b[e],t.c--,t.a.length>2*t.c&&Lr(t)))}function ni(t,e){return ti(t),e=ii(t,e),Pr(t.a.b,e)}function ri(t,e,n){ei(t,e),0<n.length&&(t.c=null,t.a.set(ii(t,e),Se(n)),t.b+=n.length)}function ii(t,e){return e=String(e),t.f&&(e=e.toLowerCase()),e}(oe=Zr.prototype).add=function(t,e){ti(this),this.c=null,t=ii(this,t);var n=this.a.get(t);return n||this.a.set(t,n=[]),n.push(e),this.b+=1,this},oe.forEach=function(t,e){ti(this),this.a.forEach((function(n,r){_e(n,(function(n){t.call(e,n,r,this)}),this)}),this)},oe.L=function(){ti(this);for(var t=this.a.K(),e=this.a.L(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},oe.K=function(t){ti(this);var e=[];if("string"==typeof t)ni(this,t)&&(e=Ae(e,this.a.get(ii(this,t))));else{t=this.a.K();for(var n=0;n<t.length;n++)e=Ae(e,t[n])}return e},oe.set=function(t,e){return ti(this),this.c=null,ni(this,t=ii(this,t))&&(this.b-=this.a.get(t).length),this.a.set(t,[e]),this.b+=1,this},oe.get=function(t,e){return t&&0<(t=this.K(t)).length?String(t[0]):e},oe.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var t=[],e=this.a.L(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.K(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.c=t.join("&")};var si=function(t,e){this.b=t,this.a=e};function oi(t){this.g=t||ai,ue.PerformanceNavigationTiming?t=0<(t=ue.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(ue.ia&&ue.ia.ya&&ue.ia.ya()&&ue.ia.ya().Lb),this.f=t?this.g:1,this.a=null,1<this.f&&(this.a=new Set),this.b=null,this.c=[]}var ai=10;function ci(t){return!!t.b||!!t.a&&t.a.size>=t.f}function ui(t){return t.b?1:t.a?t.a.size:0}function li(t,e){return t.b?t.b==e:!!t.a&&t.a.has(e)}function hi(t,e){t.a?t.a.add(e):t.b=e}function fi(t,e){t.b&&t.b==e?t.b=null:t.a&&t.a.has(e)&&t.a.delete(e)}function di(t){var e,n;if(null!=t.b)return t.c.concat(t.b.s);if(null!=t.a&&0!==t.a.size){var r=t.c;try{for(var i=se(t.a.values()),s=i.next();!s.done;s=i.next()){var o=s.value;r=r.concat(o.s)}}catch(a){e={error:a}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}return Se(t.c)}function pi(){}function mi(){this.a=new pi}function gi(t,e,n){var r=n||"";try{Or(t,(function(t,n){var i=t;fe(t)&&(i=Rn(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function yi(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}oi.prototype.cancel=function(){var t,e;if(this.c=di(this),this.b)this.b.cancel(),this.b=null;else if(this.a&&0!==this.a.size){try{for(var n=se(this.a.values()),r=n.next();!r.done;r=n.next()){r.value.cancel()}}catch(i){t={error:i}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.a.clear()}},pi.prototype.stringify=function(t){return ue.JSON.stringify(t,void 0)},pi.prototype.parse=function(t){return ue.JSON.parse(t,void 0)};var vi=ue.JSON.parse;function wi(t){Cn.call(this),this.headers=new kr,this.H=t||null,this.b=!1,this.s=this.a=null,this.B="",this.h=0,this.f="",this.g=this.A=this.l=this.u=!1,this.o=0,this.m=null,this.I=Ei,this.D=this.F=!1}Ee(wi,Cn);var Ei="",bi=/^https?$/i,Ti=["POST","PUT"];function _i(t){return"content-type"==t.toLowerCase()}function Ai(t,e){t.b=!1,t.a&&(t.g=!0,t.a.abort(),t.g=!1),t.f=e,t.h=5,Si(t),xi(t)}function Si(t){t.u||(t.u=!0,Nn(t,"complete"),Nn(t,"error"))}function Ii(t){if(t.b&&void 0!==ce&&(!t.s[1]||4!=Ni(t)||2!=t.W()))if(t.l&&4==Ni(t))jn(t.za,0,t);else if(Nn(t,"readystatechange"),4==Ni(t)){t.b=!1;try{var e,n=t.W();t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}if(!(e=r)){var i;if(i=0===n){var s=String(t.B).match(Mr)[1]||null;if(!s&&ue.self&&ue.self.location){var o=ue.self.location.protocol;s=o.substr(0,o.length-1)}i=!bi.test(s?s.toLowerCase():"")}e=i}if(e)Nn(t,"complete"),Nn(t,"success");else{t.h=6;try{var a=2<Ni(t)?t.a.statusText:""}catch(c){a=""}t.f=a+" ["+t.W()+"]",Si(t)}}finally{xi(t)}}}function xi(t,e){if(t.a){Ci(t);var n=t.a,r=t.s[0]?le:null;t.a=null,t.s=null,e||Nn(t,"ready");try{n.onreadystatechange=r}catch(i){}}}function Ci(t){t.a&&t.D&&(t.a.ontimeout=null),t.m&&(ue.clearTimeout(t.m),t.m=null)}function Ni(t){return t.a?t.a.readyState:0}function Di(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=function(t){var e="";return ke(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):qr(t,e,n))}function Ri(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Oi(t){this.pa=0,this.g=[],this.c=new Yn,this.ga=this.la=this.B=this.fa=this.a=this.na=this.A=this.V=this.i=this.O=this.l=null,this.Oa=this.R=0,this.La=Ri("failFast",!1,t),this.H=this.m=this.j=this.h=this.f=null,this.S=!0,this.I=this.oa=this.P=-1,this.T=this.o=this.u=0,this.Ha=Ri("baseRetryDelayMs",5e3,t),this.Ra=Ri("retryDelaySeedMs",1e4,t),this.Ma=Ri("forwardChannelMaxRetries",2,t),this.ma=Ri("forwardChannelRequestTimeoutMs",2e4,t),this.Na=t&&t.g||void 0,this.D=void 0,this.C=t&&t.supportsCrossDomainXhr||!1,this.J="",this.b=new oi(t&&t.concurrentRequestLimit),this.ka=new mi,this.da=t&&t.fastHandshake||!1,this.Ia=t&&t.b||!1,t&&t.f&&(this.c.a=!1),t&&t.forceLongPolling&&(this.S=!1),this.U=!this.da&&this.S&&t&&t.detectBufferingProxy||!1,this.ea=void 0,this.N=0,this.F=!1,this.s=null,(this.Ka=t&&t.c||!1)&&this.c.info("Opt-in to enable Chrome Origin Trials.")}function ki(t){if(Pi(t),3==t.v){var e=t.R++,n=Ur(t.B);qr(n,"SID",t.J),qr(n,"RID",e),qr(n,"TYPE","terminate"),Fi(t,n),(e=new vr(t,t.c,e,void 0)).H=2,e.i=jr(Ur(n)),n=!1,ue.navigator&&ue.navigator.sendBeacon&&(n=ue.navigator.sendBeacon(e.i.toString(),"")),!n&&ue.Image&&((new Image).src=e.i,n=!0),n||(e.a=Yi(e.g,null),e.a.ba(e.i)),e.u=we(),Ir(e)}Qi(t)}function Li(t){t.a&&(qi(t),t.a.cancel(),t.a=null)}function Pi(t){Li(t),t.j&&(ue.clearTimeout(t.j),t.j=null),zi(t),t.b.cancel(),t.h&&("number"==typeof t.h&&ue.clearTimeout(t.h),t.h=null)}function Mi(t,e){t.g.push(new si(t.Oa++,e)),3==t.v&&Vi(t)}function Vi(t){ci(t.b)||t.h||(t.h=!0,Un(t.Ba,t),t.u=0)}function Ui(t,e){var n;n=e?e.f:t.R++;var r=Ur(t.B);qr(r,"SID",t.J),qr(r,"RID",n),qr(r,"AID",t.P),Fi(t,r),t.i&&t.l&&Di(r,t.i,t.l),n=new vr(t,t.c,n,t.u+1),null===t.i&&(n.B=t.l),e&&(t.g=e.s.concat(t.g)),e=Hi(t,n,1e3),n.setTimeout(Math.round(.5*t.ma)+Math.round(.5*t.ma*Math.random())),hi(t.b,n),Tr(n,r,e)}function Fi(t,e){t.f&&Or({},(function(t,n){qr(e,n,t)}))}function Hi(t,e,n){n=Math.min(t.g.length,n);var r=t.f?ye(t.f.Ja,t.f,t):null;t:for(var i=t.g,s=-1;;){var o=["count="+n];-1==s?0<n?(s=i[0].b,o.push("ofs="+s)):s=0:o.push("ofs="+s);for(var a=!0,c=0;c<n;c++){var u=i[c].b,l=i[c].a;if(0>(u-=s))s=Math.max(0,i[c].b-100),a=!1;else try{gi(l,o,"req"+u+"_")}catch(h){r&&r(l)}}if(a){r=o.join("&");break t}}return t=t.g.splice(0,n),e.s=t,r}function $i(t){t.a||t.j||(t.T=1,Un(t.Aa,t),t.o=0)}function Bi(t){return!(t.a||t.j||3<=t.o)&&(t.T++,t.j=ar(ye(t.Aa,t),Wi(t,t.o)),t.o++,!0)}function qi(t){null!=t.s&&(ue.clearTimeout(t.s),t.s=null)}function ji(t){t.a=new vr(t,t.c,"rpc",t.T),null===t.i&&(t.a.B=t.l),t.a.O=0;var e=Ur(t.la);qr(e,"RID","rpc"),qr(e,"SID",t.J),qr(e,"CI",t.H?"0":"1"),qr(e,"AID",t.P),Fi(t,e),qr(e,"TYPE","xmlhttp"),t.i&&t.l&&Di(e,t.i,t.l),t.D&&t.a.setTimeout(t.D);var n=t.a;t=t.ga,n.H=1,n.i=jr(Ur(e)),n.j=null,n.I=!0,_r(n,t)}function zi(t){null!=t.m&&(ue.clearTimeout(t.m),t.m=null)}function Ki(t,e){var n=null;if(t.a==e){zi(t),qi(t),t.a=null;var r=2}else{if(!li(t.b,e))return;n=e.s,fi(t.b,e),r=1}if(t.I=e.N,0!=t.v)if(e.b)if(1==r){n=e.j?e.j.length:0,e=we()-e.u;var i=t.u;Nn(r=er(),new or(r,n,e,i)),Vi(t)}else $i(t);else if(3==(i=e.h)||0==i&&0<t.I||!(1==r&&function(t,e){return!(ui(t.b)>=t.b.f-(t.h?1:0)||(t.h?(t.g=e.s.concat(t.g),0):1==t.v||2==t.v||t.u>=(t.La?0:t.Ma)||(t.h=ar(ye(t.Ba,t,e),Wi(t,t.u)),t.u++,0)))}(t,e)||2==r&&Bi(t)))switch(n&&0<n.length&&(e=t.b,e.c=e.c.concat(n)),i){case 1:Gi(t,5);break;case 4:Gi(t,10);break;case 3:Gi(t,6);break;default:Gi(t,2)}}function Wi(t,e){var n=t.Ha+Math.floor(Math.random()*t.Ra);return t.f||(n*=2),n*e}function Gi(t,e){if(t.c.info("Error code "+e),2==e){var n=null;t.f&&(n=null);var r=ye(t.Ya,t);n||(n=new Vr("//www.google.com/images/cleardot.gif"),ue.location&&"http"==ue.location.protocol||Fr(n,"https"),jr(n)),function(t,e){var n=new Yn;if(ue.Image){var r=new Image;r.onload=ve(yi,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ve(yi,n,r,"TestLoadImage: error",!1,e),r.onabort=ve(yi,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ve(yi,n,r,"TestLoadImage: timeout",!1,e),ue.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else sr(2);t.v=0,t.f&&t.f.ra(e),Qi(t),Pi(t)}function Qi(t){t.v=0,t.I=-1,t.f&&(0==di(t.b).length&&0==t.g.length||(t.b.c.length=0,Se(t.g),t.g.length=0),t.f.qa())}function Xi(t,e,n){var r=function(t){return t instanceof Vr?Ur(t):new Vr(t,void 0)}(n);if(""!=r.c)e&&Hr(r,e+"."+r.c),$r(r,r.h);else{var i=ue.location;r=function(t,e,n,r){var i=new Vr(null,void 0);return t&&Fr(i,t),e&&Hr(i,e),n&&$r(i,n),r&&(i.g=r),i}(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.V&&ke(t.V,(function(t,e){qr(r,e,t)})),e=t.A,n=t.na,e&&n&&qr(r,e,n),qr(r,"VER",t.ha),Fi(t,r),r}function Yi(t,e){if(e&&!t.C)throw Error("Can't create secondary domain capable XhrIo object.");return(e=new wi(t.Na)).F=t.C,e}function Ji(){}function Zi(){if($e&&!(10<=Number(tn)))throw Error("Environmental error: no available transport.")}function ts(t,e){Cn.call(this),this.a=new Oi(e),this.o=t,this.b=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.a.l=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.a&&(t?t["X-WebChannel-Client-Profile"]=e.a:t={"X-WebChannel-Client-Profile":e.a}),this.a.O=t,(t=e&&e.httpHeadersOverwriteParam)&&!Ie(t)&&(this.a.i=t),this.m=e&&e.supportsCrossDomainXhr||!1,this.l=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ie(e)&&(this.a.A=e,null!==(t=this.b)&&e in t&&(e in(t=this.b)&&delete t[e])),this.f=new rs(this)}function es(t){mr.call(this);var e=t.__sm__;if(e){t:{for(var n in e){t=n;break t}t=void 0}(this.c=t)?(t=this.c,this.data=null!==e&&t in e?e[t]:void 0):this.data=e}else this.data=t}function ns(){gr.call(this),this.status=1}function rs(t){this.a=t}(oe=wi.prototype).ba=function(t,e,n,r){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.B+"; newUri="+t);e=e?e.toUpperCase():"GET",this.B=t,this.f="",this.h=0,this.u=!1,this.b=!0,this.a=new XMLHttpRequest,this.s=this.H?hr(this.H):hr(dr),this.a.onreadystatechange=ye(this.za,this);try{this.A=!0,this.a.open(e,String(t),!0),this.A=!1}catch(s){return void Ai(this,s)}t=n||"";var i=new kr(this.headers);r&&Or(r,(function(t,e){i.set(e,t)})),r=function(t){t:{for(var e=_i,n=t.length,r="string"==typeof t?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.L()),n=ue.FormData&&t instanceof ue.FormData,!(0<=Te(Ti,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.a.setRequestHeader(e,t)}),this),this.I&&(this.a.responseType=this.I),"withCredentials"in this.a&&this.a.withCredentials!==this.F&&(this.a.withCredentials=this.F);try{Ci(this),0<this.o&&((this.D=function(t){return $e&&Je(9)&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.a))?(this.a.timeout=this.o,this.a.ontimeout=ye(this.xa,this)):this.m=jn(this.xa,this.o,this)),this.l=!0,this.a.send(t),this.l=!1}catch(s){Ai(this,s)}},oe.xa=function(){void 0!==ce&&this.a&&(this.f="Timed out after "+this.o+"ms, aborting",this.h=8,Nn(this,"timeout"),this.abort(8))},oe.abort=function(t){this.a&&this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1,this.h=t||7,Nn(this,"complete"),Nn(this,"abort"),xi(this))},oe.G=function(){this.a&&(this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1),xi(this,!0)),wi.X.G.call(this)},oe.za=function(){this.j||(this.A||this.l||this.g?Ii(this):this.Ua())},oe.Ua=function(){Ii(this)},oe.W=function(){try{return 2<Ni(this)?this.a.status:-1}catch(Fe){return-1}},oe.$=function(){try{return this.a?this.a.responseText:""}catch(Fe){return""}},oe.Pa=function(t){if(this.a){var e=this.a.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),vi(e)}},oe.ua=function(){return this.h},oe.Qa=function(){return"string"==typeof this.f?this.f:String(this.f)},(oe=Oi.prototype).ha=8,oe.v=1,oe.Ba=function(t){if(this.h)if(this.h=null,1==this.v){if(!t){this.R=Math.floor(1e5*Math.random()),t=this.R++;var e,n=new vr(this,this.c,t,void 0),r=this.l;if(this.O&&(r?Me(r=Le(r),this.O):r=this.O),null===this.i&&(n.B=r),this.da)t:{for(var i=e=0;i<this.g.length;i++){var s=this.g[i];if(void 0===(s="__data__"in s.a&&"string"==typeof(s=s.a.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=i;break t}if(4096===e||i===this.g.length-1){e=i+1;break t}}e=1e3}else e=1e3;e=Hi(this,n,e),qr(i=Ur(this.B),"RID",t),qr(i,"CVER",22),this.A&&qr(i,"X-HTTP-Session-Id",this.A),Fi(this,i),this.i&&r&&Di(i,this.i,r),hi(this.b,n),this.Ia&&qr(i,"TYPE","init"),this.da?(qr(i,"$req",e),qr(i,"SID","null"),n.U=!0,Tr(n,i,null)):Tr(n,i,e),this.v=2}}else 3==this.v&&(t?Ui(this,t):0==this.g.length||ci(this.b)||Ui(this))},oe.Aa=function(){if(this.j=null,ji(this),this.U&&!(this.F||null==this.a||0>=this.N)){var t=2*this.N;this.c.info("BP detection timer enabled: "+t),this.s=ar(ye(this.Ta,this),t)}},oe.Ta=function(){this.s&&(this.s=null,this.c.info("BP detection timeout reached."),this.c.info("Buffering proxy detected and switch to long-polling!"),this.H=!1,this.F=!0,sr(10),Li(this),ji(this))},oe.Sa=function(){null!=this.m&&(this.m=null,Li(this),Bi(this),sr(19))},oe.Ya=function(t){t?(this.c.info("Successfully pinged google.com"),sr(2)):(this.c.info("Failed to ping google.com"),sr(1))},(oe=Ji.prototype).ta=function(){},oe.sa=function(){},oe.ra=function(){},oe.qa=function(){},oe.Ja=function(){},Zi.prototype.a=function(t,e){return new ts(t,e)},Ee(ts,Cn),ts.prototype.g=function(){this.a.f=this.f,this.m&&(this.a.C=!0);var t=this.a,e=this.o,n=this.b||void 0;sr(0),t.fa=e,t.V=n||{},t.H=t.S,t.B=Xi(t,null,t.fa),Vi(t)},ts.prototype.close=function(){ki(this.a)},ts.prototype.h=function(t){if("string"==typeof t){var e={};e.__data__=t,Mi(this.a,e)}else this.l?((e={}).__data__=Rn(t),Mi(this.a,e)):Mi(this.a,t)},ts.prototype.G=function(){this.a.f=null,delete this.f,ki(this.a),delete this.a,ts.X.G.call(this)},Ee(es,mr),Ee(ns,gr),Ee(rs,Ji),rs.prototype.ta=function(){Nn(this.a,"a")},rs.prototype.sa=function(t){Nn(this.a,new es(t))},rs.prototype.ra=function(t){Nn(this.a,new ns(t))},rs.prototype.qa=function(){Nn(this.a,"b")},Zi.prototype.createWebChannel=Zi.prototype.a,ts.prototype.send=ts.prototype.h,ts.prototype.open=ts.prototype.g,ts.prototype.close=ts.prototype.close,cr.NO_ERROR=0,cr.TIMEOUT=8,cr.HTTP_ERROR=6,ur.COMPLETE="complete",fr.EventType=pr,pr.OPEN="a",pr.CLOSE="b",pr.ERROR="c",pr.MESSAGE="d",Cn.prototype.listen=Cn.prototype.va,wi.prototype.listenOnce=wi.prototype.wa,wi.prototype.getLastError=wi.prototype.Qa,wi.prototype.getLastErrorCode=wi.prototype.ua,wi.prototype.getStatus=wi.prototype.W,wi.prototype.getResponseJson=wi.prototype.Pa,wi.prototype.getResponseText=wi.prototype.$,wi.prototype.send=wi.prototype.ba;var is=cr,ss=ur,os=Zn,as=10,cs=11,us=fr,ls=wi;
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.t(t),this.i=t=>e.writeSequenceNumber(t))}t(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.i&&this.i(t),t}}hs.o=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fs={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ds extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=new qt("@firebase/firestore");function ms(){return ps.logLevel}function gs(t,...e){if(ps.logLevel<=Pt.DEBUG){const n=e.map(ws);ps.debug(`Firestore (8.4.1): ${t}`,...n)}}function ys(t,...e){if(ps.logLevel<=Pt.ERROR){const n=e.map(ws);ps.error(`Firestore (8.4.1): ${t}`,...n)}}function vs(t,...e){if(ps.logLevel<=Pt.WARN){const n=e.map(ws);ps.warn(`Firestore (8.4.1): ${t}`,...n)}}function ws(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(n){return t}
/**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t="Unexpected state"){const e="FIRESTORE (8.4.1) INTERNAL ASSERTION FAILED: "+t;throw ys(e),new Error(e)}function bs(t,e){t||Es()}function Ts(t,e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t,e){return t<e?-1:t>e?1:0}function Ss(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ds(fs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ds(fs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ds(fs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ds(fs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Is.fromMillis(Date.now())}static fromDate(t){return Is.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Is(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?As(this.nanoseconds,t.nanoseconds):As(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(t){this.timestamp=t}static fromTimestamp(t){return new xs(t)}static min(){return new xs(new Is(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ns(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ds{constructor(t,e,n){void 0===e?e=0:e>t.length&&Es(),void 0===n?n=t.length-e:n>t.length-e&&Es(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ds.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ds?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Rs extends Ds{construct(t,e,n){return new Rs(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ds(fs.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Rs(e)}static emptyPath(){return new Rs([])}}const Os=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ks extends Ds{construct(t,e,n){return new ks(t,e,n)}static isValidIdentifier(t){return Os.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ks.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ks(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ds(fs.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new ds(fs.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ds(fs.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new ds(fs.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ks(e)}static emptyPath(){return new ks([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Ls(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ls(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return As(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ls.EMPTY_BYTE_STRING=new Ls("");const Ps=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ms(t){if(bs(!!t),"string"==typeof t){let e=0;const n=Ps.exec(t);if(bs(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Vs(t.seconds),nanos:Vs(t.nanos)}}function Vs(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Us(t){return"string"==typeof t?Ls.fromBase64String(t):Ls.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Hs(t){const e=t.mapValue.fields.__previous_value__;return Fs(e)?Hs(e):e}function $s(t){const e=Ms(t.mapValue.fields.__local_write_time__.timestampValue);return new Is(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(t){return null==t}function qs(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t){this.path=t}static fromPath(t){return new js(Rs.fromString(t))}static fromName(t){return new js(Rs.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===Rs.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Rs.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new js(new Rs(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fs(t)?4:10:Es()}function Ks(t,e){const n=zs(t);if(n!==zs(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $s(t).isEqual($s(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ms(t.timestampValue),r=Ms(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r=e,Us(t.bytesValue).isEqual(Us(r.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Vs(t.geoPointValue.latitude)===Vs(e.geoPointValue.latitude)&&Vs(t.geoPointValue.longitude)===Vs(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Vs(t.integerValue)===Vs(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Vs(t.doubleValue),r=Vs(e.doubleValue);return n===r?qs(n)===qs(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Ss(t.arrayValue.values||[],e.arrayValue.values||[],Ks);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Cs(n)!==Cs(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Ks(n[i],r[i])))return!1;return!0}(t,e);default:return Es()}var r}function Ws(t,e){return void 0!==(t.values||[]).find((t=>Ks(t,e)))}function Gs(t,e){const n=zs(t),r=zs(e);if(n!==r)return As(n,r);switch(n){case 0:return 0;case 1:return As(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Vs(t.integerValue||t.doubleValue),r=Vs(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Qs(t.timestampValue,e.timestampValue);case 4:return Qs($s(t),$s(e));case 5:return As(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Us(t),r=Us(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=As(n[i],r[i]);if(0!==t)return t}return As(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=As(Vs(t.latitude),Vs(e.latitude));return 0!==n?n:As(Vs(t.longitude),Vs(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Gs(n[i],r[i]);if(t)return t}return As(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=As(r[o],s[o]);if(0!==t)return t;const e=Gs(n[r[o]],i[s[o]]);if(0!==e)return e}return As(r.length,s.length)}(t.mapValue,e.mapValue);default:throw Es()}}function Qs(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return As(t,e);const n=Ms(t),r=Ms(e),i=As(n.seconds,r.seconds);return 0!==i?i:As(n.nanos,r.nanos)}function Xs(t){return Ys(t)}function Ys(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ms(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Us(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,js.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Ys(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Ys(t.fields[i])}`;return n+"}"}(t.mapValue):Es();var e,n}function Js(t){return!!t&&"integerValue"in t}function Zs(t){return!!t&&"arrayValue"in t}function to(t){return!!t&&"nullValue"in t}function eo(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function no(t){return!!t&&"mapValue"in t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(t){this.overlayMap=new Map,this.partialValue=t}static empty(){return new ro({mapValue:{}})}field(t){return ro.extractNestedValue(this.buildProto(),t)}toProto(){return this.field(ks.emptyPath())}set(t,e){this.setOverlay(t,e)}setAll(t){t.forEach(((t,e)=>{t?this.set(e,t):this.delete(e)}))}delete(t){this.setOverlay(t,null)}isEqual(t){return Ks(this.buildProto(),t.buildProto())}setOverlay(t,e){let n=this.overlayMap;for(let r=0;r<t.length-1;++r){const e=t.get(r);let i=n.get(e);i instanceof Map?n=i:i&&10===zs(i)?(i=new Map(Object.entries(i.mapValue.fields||{})),n.set(e,i),n=i):(i=new Map,n.set(e,i),n=i)}n.set(t.lastSegment(),e)}applyOverlay(t,e){let n=!1;const r=ro.extractNestedValue(this.partialValue,t),i=no(r)?Object.assign({},r.mapValue.fields):{};return e.forEach(((e,r)=>{if(e instanceof Map){const s=this.applyOverlay(t.child(r),e);null!=s&&(i[r]=s,n=!0)}else null!==e?(i[r]=e,n=!0):i.hasOwnProperty(r)&&(delete i[r],n=!0)})),n?{mapValue:{fields:i}}:null}buildProto(){const t=this.applyOverlay(ks.emptyPath(),this.overlayMap);return null!=t&&(this.partialValue=t,this.overlayMap.clear()),this.partialValue}static extractNestedValue(t,e){if(e.isEmpty())return t;{let n=t;for(let t=0;t<e.length-1;++t){if(!n.mapValue.fields)return null;if(n=n.mapValue.fields[e.get(t)],!no(n))return null}return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}clone(){return new ro(this.buildProto())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new io(t,0,xs.min(),ro.empty(),0)}static newFoundDocument(t,e,n){return new io(t,1,e,n,0)}static newNoDocument(t,e){return new io(t,2,e,ro.empty(),0)}static newUnknownDocument(t,e){return new io(t,3,e,ro.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ro.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ro.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof io&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new io(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.toProto())}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.h=null}}function oo(t,e=null,n=[],r=[],i=null,s=null,o=null){return new so(t,e,n,r,i,s,o)}function ao(t){const e=Ts(t);if(null===e.h){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+Xs(t.value)}(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),Bs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=bo(e.startAt)),e.endAt&&(t+="|ub:",t+=bo(e.endAt)),e.h=t}return e.h}function co(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!_o(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Ks(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!So(t.startAt,e.startAt)&&So(t.endAt,e.endAt)}function uo(t){return js.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class lo extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.l(t,e,n):new ho(t,e,n):"array-contains"===e?new go(t,n):"in"===e?new yo(t,n):"not-in"===e?new vo(t,n):"array-contains-any"===e?new wo(t,n):new lo(t,e,n)}static l(t,e,n){return"in"===e?new fo(t,n):new po(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.m(Gs(e,this.value)):null!==e&&zs(this.value)===zs(e)&&this.m(Gs(e,this.value))}m(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Es()}}g(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ho extends lo{constructor(t,e,n){super(t,e,n),this.key=js.fromName(n.referenceValue)}matches(t){const e=js.comparator(t.key,this.key);return this.m(e)}}class fo extends lo{constructor(t,e){super(t,"in",e),this.keys=mo("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class po extends lo{constructor(t,e){super(t,"not-in",e),this.keys=mo("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function mo(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>js.fromName(t.referenceValue)))}class go extends lo{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Zs(e)&&Ws(e.arrayValue,this.value)}}class yo extends lo{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Ws(this.value.arrayValue,e)}}class vo extends lo{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ws(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Ws(this.value.arrayValue,e)}}class wo extends lo{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Zs(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Ws(this.value.arrayValue,t)))}}class Eo{constructor(t,e){this.position=t,this.before=e}}function bo(t){return`${t.before?"b":"a"}:${t.position.map((t=>Xs(t))).join(",")}`}class To{constructor(t,e="asc"){this.field=t,this.dir=e}}function _o(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ao(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?js.comparator(js.fromName(o.referenceValue),n.key):Gs(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function So(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ks(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.p=null,this.T=null,this.startAt,this.endAt}}function xo(t){return new Io(t)}function Co(t){return!Bs(t.limit)&&"F"===t.limitType}function No(t){return!Bs(t.limit)&&"L"===t.limitType}function Do(t){const e=Ts(t);if(null===e.p){e.p=[];const t=function(t){for(const e of t.filters)if(e.g())return e.field;return null}(e),n=function(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}(e);if(null!==t&&null===n)t.isKeyField()||e.p.push(new To(t)),e.p.push(new To(ks.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.p.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.p.push(new To(ks.keyField(),t))}}}return e.p}function Ro(t){const e=Ts(t);if(!e.T)if("F"===e.limitType)e.T=oo(e.path,e.collectionGroup,Do(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Do(e)){const e="desc"===i.dir?"asc":"desc";t.push(new To(i.field,e))}const n=e.endAt?new Eo(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Eo(e.startAt.position,!e.startAt.before):null;e.T=oo(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.T}function Oo(t,e){return co(Ro(t),Ro(e))&&t.limitType===e.limitType}function ko(t){return`${ao(Ro(t))}|lt:${t.limitType}`}function Lo(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Xs(e.value)}`;var e})).join(", ")}]`),Bs(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: "+bo(t.startAt)),t.endAt&&(e+=", endAt: "+bo(t.endAt)),`Target(${e})`}(Ro(t))}; limitType=${t.limitType})`}function Po(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):js.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(r=e,!((n=t).startAt&&!Ao(n.startAt,Do(n),r)||n.endAt&&Ao(n.endAt,Do(n),r)));var n,r}function Mo(t){return(e,n)=>{let r=!1;for(const i of Do(t)){const t=Vo(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Vo(t,e,n){const r=t.field.isKeyField()?js.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Gs(r,i):Es()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Es()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uo{constructor(){this._=void 0}}function Fo(t,e,n){return t instanceof $o?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Bo?qo(t,e):t instanceof jo?zo(t,e):function(t,e){const n=function(t,e){return t instanceof Ko?Js(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}(t,e),r=Wo(n)+Wo(t.A);return Js(n)&&Js(t.A)?function(t){return{integerValue:""+t}}(r):function(t,e){if(t.I){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qs(e)?"-0":e}}(t.R,r)}(t,e)}function Ho(t,e,n){return t instanceof Bo?qo(t,e):t instanceof jo?zo(t,e):n}class $o extends Uo{}class Bo extends Uo{constructor(t){super(),this.elements=t}}function qo(t,e){const n=Go(e);for(const r of t.elements)n.some((t=>Ks(t,r)))||n.push(r);return{arrayValue:{values:n}}}class jo extends Uo{constructor(t){super(),this.elements=t}}function zo(t,e){let n=Go(e);for(const r of t.elements)n=n.filter((t=>!Ks(t,r)));return{arrayValue:{values:n}}}class Ko extends Uo{constructor(t,e){super(),this.R=t,this.A=e}}function Wo(t){return Vs(t.integerValue||t.doubleValue)}function Go(t){return Zs(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Qo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Xo{}function Yo(t,e,n){var r;t instanceof ea?function(t,e,n){const r=t.value.clone(),i=ia(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof na?function(t,e,n){if(!Qo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=ia(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(ra(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):(r=n,e.convertToNoDocument(r.version).setHasCommittedMutations())}function Jo(t,e,n){var r;t instanceof ea?function(t,e,n){if(!Qo(t.precondition,e))return;const r=t.value.clone(),i=sa(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(ta(e),r).setHasLocalMutations()}(t,e,n):t instanceof na?function(t,e,n){if(!Qo(t.precondition,e))return;const r=sa(t.fieldTransforms,n,e),i=e.data;i.setAll(ra(t)),i.setAll(r),e.convertToFoundDocument(ta(e),i).setHasLocalMutations()}(t,e,n):(r=e,Qo(t.precondition,r)&&r.convertToNoDocument(xs.min()))}function Zo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Ss(n,r,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,r=e.transform,n instanceof Bo&&r instanceof Bo||n instanceof jo&&r instanceof jo?Ss(n.elements,r.elements,Ks):n instanceof Ko&&r instanceof Ko?Ks(n.A,r.A):n instanceof $o&&r instanceof $o);var n,r}(t,e))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask)));var n,r}function ta(t){return t.isFoundDocument()?t.version:xs.min()}class ea extends Xo{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class na extends Xo{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function ra(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function ia(t,e,n){const r=new Map;bs(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Ho(o,a,n[i]))}return r}function sa(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Fo(t,s,e))}return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var aa,ca;function ua(t){if(void 0===t)return ys("GRPC error has no .code"),fs.UNKNOWN;switch(t){case aa.OK:return fs.OK;case aa.CANCELLED:return fs.CANCELLED;case aa.UNKNOWN:return fs.UNKNOWN;case aa.DEADLINE_EXCEEDED:return fs.DEADLINE_EXCEEDED;case aa.RESOURCE_EXHAUSTED:return fs.RESOURCE_EXHAUSTED;case aa.INTERNAL:return fs.INTERNAL;case aa.UNAVAILABLE:return fs.UNAVAILABLE;case aa.UNAUTHENTICATED:return fs.UNAUTHENTICATED;case aa.INVALID_ARGUMENT:return fs.INVALID_ARGUMENT;case aa.NOT_FOUND:return fs.NOT_FOUND;case aa.ALREADY_EXISTS:return fs.ALREADY_EXISTS;case aa.PERMISSION_DENIED:return fs.PERMISSION_DENIED;case aa.FAILED_PRECONDITION:return fs.FAILED_PRECONDITION;case aa.ABORTED:return fs.ABORTED;case aa.OUT_OF_RANGE:return fs.OUT_OF_RANGE;case aa.UNIMPLEMENTED:return fs.UNIMPLEMENTED;case aa.DATA_LOSS:return fs.DATA_LOSS;default:return Es()}}(ca=aa||(aa={}))[ca.OK=0]="OK",ca[ca.CANCELLED=1]="CANCELLED",ca[ca.UNKNOWN=2]="UNKNOWN",ca[ca.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ca[ca.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ca[ca.NOT_FOUND=5]="NOT_FOUND",ca[ca.ALREADY_EXISTS=6]="ALREADY_EXISTS",ca[ca.PERMISSION_DENIED=7]="PERMISSION_DENIED",ca[ca.UNAUTHENTICATED=16]="UNAUTHENTICATED",ca[ca.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ca[ca.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ca[ca.ABORTED=10]="ABORTED",ca[ca.OUT_OF_RANGE=11]="OUT_OF_RANGE",ca[ca.UNIMPLEMENTED=12]="UNIMPLEMENTED",ca[ca.INTERNAL=13]="INTERNAL",ca[ca.UNAVAILABLE=14]="UNAVAILABLE",ca[ca.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class la{constructor(t,e){this.comparator=t,this.root=e||fa.EMPTY}insert(t,e){return new la(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,fa.BLACK,null,null))}remove(t){return new la(this.comparator,this.root.remove(t,this.comparator).copy(null,null,fa.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ha(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ha(this.root,t,this.comparator,!1)}getReverseIterator(){return new ha(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ha(this.root,t,this.comparator,!0)}}class ha{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class fa{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:fa.RED,this.left=null!=r?r:fa.EMPTY,this.right=null!=i?i:fa.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new fa(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return fa.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return fa.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,fa.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,fa.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Es();if(this.right.isRed())throw Es();const t=this.left.check();if(t!==this.right.check())throw Es();return t+(this.isRed()?0:1)}}fa.EMPTY=null,fa.RED=!0,fa.BLACK=!1,fa.EMPTY=new class{constructor(){this.size=0}get key(){throw Es()}get value(){throw Es()}get color(){throw Es()}get left(){throw Es()}get right(){throw Es()}copy(t,e,n,r,i){return this}insert(t,e,n){return new fa(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class da{constructor(t){this.comparator=t,this.data=new la(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new pa(this.data.getIterator())}getIteratorFrom(t){return new pa(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof da))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new da(this.comparator);return e.data=t,e}}class pa{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new la(js.comparator);function ga(){return ma}const ya=new la(js.comparator);function va(){return ya}const wa=new da(js.comparator);function Ea(...t){let e=wa;for(const n of t)e=e.add(n);return e}const ba=new da(As);function Ta(){return ba}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Aa.createSynthesizedTargetChangeForCurrentChange(t,e)),new _a(xs.min(),n,Ta(),ga(),Ea())}}class Aa{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Aa(Ls.EMPTY_BYTE_STRING,e,Ea(),Ea(),Ea())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(t,e,n,r){this.P=t,this.removedTargetIds=e,this.key=n,this.v=r}}class Ia{constructor(t,e){this.targetId=t,this.V=e}}class xa{constructor(t,e,n=Ls.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Ca{constructor(){this.S=0,this.D=Ra(),this.C=Ls.EMPTY_BYTE_STRING,this.N=!1,this.k=!0}get current(){return this.N}get resumeToken(){return this.C}get O(){return 0!==this.S}get $(){return this.k}M(t){t.approximateByteSize()>0&&(this.k=!0,this.C=t)}F(){let t=Ea(),e=Ea(),n=Ea();return this.D.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Es()}})),new Aa(this.C,this.N,t,e,n)}L(){this.k=!1,this.D=Ra()}B(t,e){this.k=!0,this.D=this.D.insert(t,e)}q(t){this.k=!0,this.D=this.D.remove(t)}U(){this.S+=1}K(){this.S-=1}j(){this.k=!0,this.N=!0}}class Na{constructor(t){this.W=t,this.G=new Map,this.H=ga(),this.J=Da(),this.Y=new da(As)}X(t){for(const e of t.P)t.v&&t.v.isFoundDocument()?this.Z(e,t.v):this.tt(e,t.key,t.v);for(const e of t.removedTargetIds)this.tt(e,t.key,t.v)}et(t){this.forEachTarget(t,(e=>{const n=this.nt(e);switch(t.state){case 0:this.st(e)&&n.M(t.resumeToken);break;case 1:n.K(),n.O||n.L(),n.M(t.resumeToken);break;case 2:n.K(),n.O||this.removeTarget(e);break;case 3:this.st(e)&&(n.j(),n.M(t.resumeToken));break;case 4:this.st(e)&&(this.it(e),n.M(t.resumeToken));break;default:Es()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.G.forEach(((t,n)=>{this.st(n)&&e(n)}))}rt(t){const e=t.targetId,n=t.V.count,r=this.ot(e);if(r){const t=r.target;if(uo(t))if(0===n){const n=new js(t.path);this.tt(e,n,io.newNoDocument(n,xs.min()))}else bs(1===n);else this.ct(e)!==n&&(this.it(e),this.Y=this.Y.add(e))}}ut(t){const e=new Map;this.G.forEach(((n,r)=>{const i=this.ot(r);if(i){if(n.current&&uo(i.target)){const e=new js(i.target.path);null!==this.H.get(e)||this.at(r,e)||this.tt(r,e,io.newNoDocument(e,t))}n.$&&(e.set(r,n.F()),n.L())}}));let n=Ea();this.J.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.ot(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))}));const r=new _a(t,e,this.Y,this.H,n);return this.H=ga(),this.J=Da(),this.Y=new da(As),r}Z(t,e){if(!this.st(t))return;const n=this.at(t,e.key)?2:0;this.nt(t).B(e.key,n),this.H=this.H.insert(e.key,e),this.J=this.J.insert(e.key,this.ht(e.key).add(t))}tt(t,e,n){if(!this.st(t))return;const r=this.nt(t);this.at(t,e)?r.B(e,1):r.q(e),this.J=this.J.insert(e,this.ht(e).delete(t)),n&&(this.H=this.H.insert(e,n))}removeTarget(t){this.G.delete(t)}ct(t){const e=this.nt(t).F();return this.W.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}U(t){this.nt(t).U()}nt(t){let e=this.G.get(t);return e||(e=new Ca,this.G.set(t,e)),e}ht(t){let e=this.J.get(t);return e||(e=new da(As),this.J=this.J.insert(t,e)),e}st(t){const e=null!==this.ot(t);return e||gs("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.G.get(t);return e&&e.O?null:this.W.lt(t)}it(t){this.G.set(t,new Ca),this.W.getRemoteKeysForTarget(t).forEach((e=>{this.tt(t,e,null)}))}at(t,e){return this.W.getRemoteKeysForTarget(t).has(e)}}function Da(){return new la(js.comparator)}function Ra(){return new la(js.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa={asc:"ASCENDING",desc:"DESCENDING"},ka={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class La{constructor(t,e){this.databaseId=t,this.I=e}}function Pa(t){return bs(!!t),xs.fromTimestamp(function(t){const e=Ms(t);return new Is(e.seconds,e.nanos)}(t))}function Ma(t){const e=Rs.fromString(t);return bs(Za(e)),e}function Va(t,e){const n=Ma(e);if(n.get(1)!==t.databaseId.projectId)throw new ds(fs.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ds(fs.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new js(Ha(n))}function Ua(t,e){return function(t,e){return(n=t,new Rs(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}(t.databaseId,e)}function Fa(t){return new Rs(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ha(t){return bs(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function $a(t,e){return{documents:[Ua(t,e.path)]}}function Ba(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Ua(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ua(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(eo(t.value))return{unaryFilter:{field:Qa(t.field),op:"IS_NAN"}};if(to(t.value))return{unaryFilter:{field:Qa(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(eo(t.value))return{unaryFilter:{field:Qa(t.field),op:"IS_NOT_NAN"}};if(to(t.value))return{unaryFilter:{field:Qa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qa(t.field),op:Ga(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>{return{field:Qa((e=t).field),direction:Wa(e.dir)};var e}))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=(a=t,c=e.limit,a.I||Bs(c)?c:{value:c});var a,c;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=za(e.startAt)),e.endAt&&(n.structuredQuery.endAt=za(e.endAt)),n}function qa(t){let e=function(t){const e=Ma(t);return 4===e.length?Rs.emptyPath():Ha(e)}(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){bs(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=ja(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new To(Xa((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Bs(e)?null:e}(n.limit));let c=null;n.startAt&&(c=Ka(n.startAt));let u=null;return n.endAt&&(u=Ka(n.endAt)),function(t,e,n,r,i,s,o,a){return new Io(t,e,n,r,i,s,o,a)}(e,i,o,s,a,"F",c,u)}function ja(t){return t?void 0!==t.unaryFilter?[Ja(t)]:void 0!==t.fieldFilter?[Ya(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>ja(t))).reduce(((t,e)=>t.concat(e))):Es():[]}function za(t){return{before:t.before,values:t.position}}function Ka(t){const e=!!t.before,n=t.values||[];return new Eo(n,e)}function Wa(t){return Oa[t]}function Ga(t){return ka[t]}function Qa(t){return{fieldPath:t.canonicalString()}}function Xa(t){return ks.fromServerFormat(t.fieldPath)}function Ya(t){return lo.create(Xa(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return Es()}}(t.fieldFilter.op),t.fieldFilter.value)}function Ja(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Xa(t.unaryFilter.field);return lo.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Xa(t.unaryFilter.field);return lo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Xa(t.unaryFilter.field);return lo.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Xa(t.unaryFilter.field);return lo.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return Es()}}function Za(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tc{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Es(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ec(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ec?e:ec.resolve(e)}catch(e){return ec.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ec.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ec.reject(e)}static resolve(t){return new ec(((e,n)=>{e(t)}))}static reject(t){return new ec(((e,n)=>{n(t)}))}static waitFor(t){return new ec(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=ec.resolve(!1);for(const n of t)e=e.next((t=>t?ec.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}}function nc(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Yo(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Jo(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Jo(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(xs.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ea())}isEqual(t){return this.batchId===t.batchId&&Ss(this.mutations,t.mutations,((t,e)=>Zo(t,e)))&&Ss(this.baseMutations,t.baseMutations,((t,e)=>Zo(t,e)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(t,e,n,r,i=xs.min(),s=xs.min(),o=Ls.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new ic(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new ic(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new ic(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(t){this.Lt=t}}function oc(t){const e=qa({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?function(t,e,n){return new Io(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(){this.Bt=new cc}addToCollectionParentIndex(t,e){return this.Bt.add(e),ec.resolve()}getCollectionParents(t,e){return ec.resolve(this.Bt.getEntries(e))}}class cc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new da(Rs.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new da(Rs.comparator)).toArray()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(t){this.Ht=t}next(){return this.Ht+=2,this.Ht}static Jt(){return new uc(0)}static Yt(){return new uc(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lc(t){if(t.code!==fs.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;gs("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){Ns(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fc{constructor(t,e,n){this.Ue=t,this._n=e,this.Ut=n}mn(t,e){return this._n.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.gn(t,e,n)))}gn(t,e,n){return this.Ue.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}yn(t,e){t.forEach(((t,n)=>{for(const r of e)r.applyToLocalView(n)}))}pn(t,e){return this.Ue.getEntries(t,e).next((e=>this.En(t,e).next((()=>e))))}En(t,e){return this._n.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.yn(e,t)))}getDocumentsMatchingQuery(t,e,n){return r=e,js.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.Tn(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.In(t,e,n):this.An(t,e,n);var r}Tn(t,e){return this.mn(t,new js(e)).next((t=>{let e=va();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}In(t,e,n){const r=e.collectionGroup;let i=va();return this.Ut.getCollectionParents(t,r).next((s=>ec.forEach(s,(s=>{const o=(a=e,c=s.child(r),new Io(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.An(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}An(t,e,n){let r,i;return this.Ue.getDocumentsMatchingQuery(t,e,n).next((n=>(r=n,this._n.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(i=e,this.Rn(t,i,r).next((t=>{r=t;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=io.newInvalidDocument(n),r=r.insert(n,i)),Jo(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((t,n)=>{Po(e,n)||(r=r.remove(t))})),r)))}Rn(t,e,n){let r=Ea();for(const s of e)for(const t of s.mutations)t instanceof na&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.Ue.getEntries(t,r).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))})),i)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Pn=n,this.bn=r}static vn(t,e){let n=Ea(),r=Ea();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new dc(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{Vn(t){this.Sn=t}getDocumentsMatchingQuery(t,e,n,r){return 0===(i=e).filters.length&&null===i.limit&&null==i.startAt&&null==i.endAt&&(0===i.explicitOrderBy.length||1===i.explicitOrderBy.length&&i.explicitOrderBy[0].field.isKeyField())||n.isEqual(xs.min())?this.Dn(t,e):this.Sn.pn(t,r).next((i=>{const s=this.Cn(e,i);return(Co(e)||No(e))&&this.Nn(e.limitType,s,r,n)?this.Dn(t,e):(ms()<=Pt.DEBUG&&gs("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Lo(e)),this.Sn.getDocumentsMatchingQuery(t,e,n).next((t=>(s.forEach((e=>{t=t.insert(e.key,e)})),t))))}));var i}Cn(t,e){let n=new da(Mo(t));return e.forEach(((e,r)=>{Po(t,r)&&(n=n.add(r))})),n}Nn(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Dn(t,e){return ms()<=Pt.DEBUG&&gs("QueryEngine","Using full collection scan to execute query:",Lo(e)),this.Sn.getDocumentsMatchingQuery(t,e,xs.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(t,e,n,r){this.persistence=t,this.xn=e,this.R=r,this.kn=new la(As),this.On=new hc((t=>ao(t)),co),this.$n=xs.min(),this._n=t.getMutationQueue(n),this.Mn=t.getRemoteDocumentCache(),this.qe=t.getTargetCache(),this.Fn=new fc(this.Mn,this._n,this.persistence.getIndexManager()),this.Ke=t.getBundleCache(),this.xn.Vn(this.Fn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.kn)))}}async function gc(t,e){const n=Ts(t);let r=n._n,i=n.Fn;const s=await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n._n.getAllMutationBatches(t).next((o=>(s=o,r=n.persistence.getMutationQueue(e),i=new fc(n.Mn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t)))).next((e=>{const n=[],r=[];let o=Ea();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.pn(t,o).next((t=>({Ln:t,removedBatchIds:n,addedBatchIds:r})))}))}));return n._n=r,n.Fn=i,n.xn.Vn(n.Fn),s}function yc(t){const e=Ts(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.qe.getLastRemoteSnapshotVersion(t)))}function vc(t,e){const n=Ts(t),r=e.snapshotVersion;let i=n.kn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Mn.newChangeBuffer({trackRemovals:!0});i=n.kn;const o=[];e.targetChanges.forEach(((e,s)=>{const a=i.get(s);if(!a)return;o.push(n.qe.removeMatchingKeys(t,e.removedDocuments,s).next((()=>n.qe.addMatchingKeys(t,e.addedDocuments,s))));const c=e.resumeToken;if(c.approximateByteSize()>0){const f=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(s,f),u=a,h=e,bs((l=f).resumeToken.approximateByteSize()>0),(0===u.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||h.addedDocuments.size+h.modifiedDocuments.size+h.removedDocuments.size>0)&&o.push(n.qe.updateTargetData(t,f))}var u,l,h}));let a=ga();if(e.documentUpdates.forEach(((r,i)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(function(t,e,n,r,i){let s=Ea();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=ga();return n.forEach(((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(xs.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):gs("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}(t,s,e.documentUpdates,r,void 0).next((t=>{a=t}))),!r.isEqual(xs.min())){const e=n.qe.getLastRemoteSnapshotVersion(t).next((e=>n.qe.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return ec.waitFor(o).next((()=>s.apply(t))).next((()=>n.Fn.En(t,a))).next((()=>a))})).then((t=>(n.kn=i,t)))}async function wc(t,e,n){const r=Ts(t),i=r.kn.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(o){if(!nc(o))throw o;gs("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.kn=r.kn.remove(e),r.On.delete(i.target)}function Ec(t,e,n){const r=Ts(t);let i=xs.min(),s=Ea();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Ts(t),i=r.On.get(n);return void 0!==i?ec.resolve(r.kn.get(i)):r.qe.getTargetData(e,n)}(r,t,Ro(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.qe.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.xn.getDocumentsMatchingQuery(t,e,n?i:xs.min(),n?s:Ea()))).next((t=>({documents:t,Bn:s})))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t){this.R=t,this.Qn=new Map,this.jn=new Map}getBundleMetadata(t,e){return ec.resolve(this.Qn.get(e))}saveBundleMetadata(t,e){var n;return this.Qn.set(e.id,{id:(n=e).id,version:n.version,createTime:Pa(n.createTime)}),ec.resolve()}getNamedQuery(t,e){return ec.resolve(this.jn.get(e))}saveNamedQuery(t,e){return this.jn.set(e.name,{name:(n=e).name,query:oc(n.bundledQuery),readTime:Pa(n.readTime)}),ec.resolve();var n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(){this.Wn=new da(_c.Gn),this.zn=new da(_c.Hn)}isEmpty(){return this.Wn.isEmpty()}addReference(t,e){const n=new _c(t,e);this.Wn=this.Wn.add(n),this.zn=this.zn.add(n)}Jn(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Yn(new _c(t,e))}Xn(t,e){t.forEach((t=>this.removeReference(t,e)))}Zn(t){const e=new js(new Rs([])),n=new _c(e,t),r=new _c(e,t+1),i=[];return this.zn.forEachInRange([n,r],(t=>{this.Yn(t),i.push(t.key)})),i}ts(){this.Wn.forEach((t=>this.Yn(t)))}Yn(t){this.Wn=this.Wn.delete(t),this.zn=this.zn.delete(t)}es(t){const e=new js(new Rs([])),n=new _c(e,t),r=new _c(e,t+1);let i=Ea();return this.zn.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new _c(t,0),n=this.Wn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class _c{constructor(t,e){this.key=t,this.ns=e}static Gn(t,e){return js.comparator(t.key,e.key)||As(t.ns,e.ns)}static Hn(t,e){return As(t.ns,e.ns)||js.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(t,e){this.Ut=t,this.referenceDelegate=e,this._n=[],this.ss=1,this.rs=new da(_c.Gn)}checkEmpty(t){return ec.resolve(0===this._n.length)}addMutationBatch(t,e,n,r){const i=this.ss;this.ss++,this._n.length>0&&this._n[this._n.length-1];const s=new rc(i,e,n,r);this._n.push(s);for(const o of r)this.rs=this.rs.add(new _c(o.key,i)),this.Ut.addToCollectionParentIndex(t,o.key.path.popLast());return ec.resolve(s)}lookupMutationBatch(t,e){return ec.resolve(this.os(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.cs(n),i=r<0?0:r;return ec.resolve(this._n.length>i?this._n[i]:null)}getHighestUnacknowledgedBatchId(){return ec.resolve(0===this._n.length?-1:this.ss-1)}getAllMutationBatches(t){return ec.resolve(this._n.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new _c(e,0),r=new _c(e,Number.POSITIVE_INFINITY),i=[];return this.rs.forEachInRange([n,r],(t=>{const e=this.os(t.ns);i.push(e)})),ec.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new da(As);return e.forEach((t=>{const e=new _c(t,0),r=new _c(t,Number.POSITIVE_INFINITY);this.rs.forEachInRange([e,r],(t=>{n=n.add(t.ns)}))})),ec.resolve(this.us(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;js.isDocumentKey(i)||(i=i.child(""));const s=new _c(new js(i),0);let o=new da(As);return this.rs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ns)),!0)}),s),ec.resolve(this.us(o))}us(t){const e=[];return t.forEach((t=>{const n=this.os(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){bs(0===this.hs(e.batchId,"removed")),this._n.shift();let n=this.rs;return ec.forEach(e.mutations,(r=>{const i=new _c(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.rs=n}))}Gt(t){}containsKey(t,e){const n=new _c(e,0),r=this.rs.firstAfterOrEqual(n);return ec.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this._n.length,ec.resolve()}hs(t,e){return this.cs(t)}cs(t){return 0===this._n.length?0:t-this._n[0].batchId}os(t){const e=this.cs(t);return e<0||e>=this._n.length?null:this._n[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t,e){this.Ut=t,this.ls=e,this.docs=new la(js.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.ls(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Ut.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ec.resolve(n?n.document.clone():io.newInvalidDocument(e))}getEntries(t,e){let n=ga();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():io.newInvalidDocument(t))})),ec.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=ga();const i=new js(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||Po(e,i)&&(r=r.insert(i.key,i.clone()))}return ec.resolve(r)}fs(t,e){return ec.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Ic(this)}getSize(t){return ec.resolve(this.size)}}class Ic extends class{constructor(){this.changes=new hc((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:xs.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:io.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ec.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.Ie=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?e.push(this.Ie.addEntry(t,r.document,this.getReadTime(n))):this.Ie.removeEntry(n)})),ec.waitFor(e)}getFromCache(t,e){return this.Ie.getEntry(t,e)}getAllFromCache(t,e){return this.Ie.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t){this.persistence=t,this.ds=new hc((t=>ao(t)),co),this.lastRemoteSnapshotVersion=xs.min(),this.highestTargetId=0,this.ws=0,this._s=new Tc,this.targetCount=0,this.gs=uc.Jt()}forEachTarget(t,e){return this.ds.forEach(((t,n)=>e(n))),ec.resolve()}getLastRemoteSnapshotVersion(t){return ec.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ec.resolve(this.ws)}allocateTargetId(t){return this.highestTargetId=this.gs.next(),ec.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ws&&(this.ws=e),ec.resolve()}te(t){this.ds.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.gs=new uc(e),this.highestTargetId=e),t.sequenceNumber>this.ws&&(this.ws=t.sequenceNumber)}addTargetData(t,e){return this.te(e),this.targetCount+=1,ec.resolve()}updateTargetData(t,e){return this.te(e),ec.resolve()}removeTargetData(t,e){return this.ds.delete(e.target),this._s.Zn(e.targetId),this.targetCount-=1,ec.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.ds.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.ds.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),ec.waitFor(i).next((()=>r))}getTargetCount(t){return ec.resolve(this.targetCount)}getTargetData(t,e){const n=this.ds.get(e)||null;return ec.resolve(n)}addMatchingKeys(t,e,n){return this._s.Jn(e,n),ec.resolve()}removeMatchingKeys(t,e,n){this._s.Xn(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),ec.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this._s.Zn(e),ec.resolve()}getMatchingKeysForTargetId(t,e){const n=this._s.es(e);return ec.resolve(n)}containsKey(t,e){return ec.resolve(this._s.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,e){var n;this.ys={},this.Ne=new hs(0),this.xe=!1,this.xe=!0,this.referenceDelegate=t(this),this.qe=new xc(this),this.Ut=new ac,this.Ue=(n=this.Ut,new Sc(n,(t=>this.referenceDelegate.ps(t)))),this.R=new sc(e),this.Ke=new bc(this.R)}start(){return Promise.resolve()}shutdown(){return this.xe=!1,Promise.resolve()}get started(){return this.xe}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ut}getMutationQueue(t){let e=this.ys[t.toKey()];return e||(e=new Ac(this.Ut,this.referenceDelegate),this.ys[t.toKey()]=e),e}getTargetCache(){return this.qe}getRemoteDocumentCache(){return this.Ue}getBundleCache(){return this.Ke}runTransaction(t,e,n){gs("MemoryPersistence","Starting transaction:",t);const r=new Nc(this.Ne.next());return this.referenceDelegate.Es(),n(r).next((t=>this.referenceDelegate.Ts(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Is(t,e){return ec.or(Object.values(this.ys).map((n=>()=>n.containsKey(t,e))))}}class Nc extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class Dc{constructor(t){this.persistence=t,this.As=new Tc,this.Rs=null}static Ps(t){return new Dc(t)}get bs(){if(this.Rs)return this.Rs;throw Es()}addReference(t,e,n){return this.As.addReference(n,e),this.bs.delete(n.toString()),ec.resolve()}removeReference(t,e,n){return this.As.removeReference(n,e),this.bs.add(n.toString()),ec.resolve()}markPotentiallyOrphaned(t,e){return this.bs.add(e.toString()),ec.resolve()}removeTarget(t,e){this.As.Zn(e.targetId).forEach((t=>this.bs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.bs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Es(){this.Rs=new Set}Ts(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ec.forEach(this.bs,(n=>{const r=js.fromPath(n);return this.vs(t,r).next((t=>{t||e.removeEntry(r)}))})).next((()=>(this.Rs=null,e.apply(t))))}updateLimboDocument(t,e){return this.vs(t,e).next((t=>{t?this.bs.delete(e.toString()):this.bs.add(e.toString())}))}ps(t){return 0}vs(t,e){return ec.or([()=>ec.resolve(this.As.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Is(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Rc.UNAUTHENTICATED=new Rc(null),Rc.GOOGLE_CREDENTIALS=new Rc("google-credentials-uid"),Rc.FIRST_PARTY=new Rc("first-party-uid");class Oc{constructor(){this.activeTargetIds=Ta()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}Cs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ss(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class kc{constructor(){this.li=new Oc,this.fi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.li.Ds(t),this.fi[t]||"not-current"}updateQueryState(t,e,n){this.fi[t]=e}removeLocalQueryTarget(t){this.li.Cs(t)}isLocalQueryTarget(t){return this.li.activeTargetIds.has(t)}clearQueryState(t){delete this.fi[t]}getAllActiveQueryTargets(){return this.li.activeTargetIds}isActiveQueryTarget(t){return this.li.activeTargetIds.has(t)}start(){return this.li=new Oc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{di(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(){this.wi=()=>this._i(),this.mi=()=>this.gi(),this.yi=[],this.pi()}di(t){this.yi.push(t)}shutdown(){window.removeEventListener("online",this.wi),window.removeEventListener("offline",this.mi)}pi(){window.addEventListener("online",this.wi),window.addEventListener("offline",this.mi)}_i(){gs("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.yi)t(0)}gi(){gs("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.yi)t(1)}static gt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t){this.Ei=t.Ei,this.Ti=t.Ti}Ii(t){this.Ai=t}Ri(t){this.Pi=t}onMessage(t){this.bi=t}close(){this.Ti()}send(t){this.Ei(t)}vi(){this.Ai()}Vi(t){this.Pi(t)}Si(t){this.bi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Di=e+"://"+t.host,this.Ci="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Ni(t,e,n,r){const i=this.xi(t,e);gs("RestConnection","Sending: ",i,n);const s={};return this.ki(s,r),this.Oi(t,i,s,n).then((t=>(gs("RestConnection","Received: ",t),t)),(e=>{throw vs("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}$i(t,e,n,r){return this.Ni(t,e,n,r)}ki(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/8.4.1",t["X-Firebase-GMPID"]=this.databaseInfo.appId,t["Content-Type"]="text/plain",e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}xi(t,e){const n=Mc[t];return`${this.Di}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling}Oi(t,e,n,r){return new Promise(((i,s)=>{const o=new ls;o.listenOnce(ss.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case is.NO_ERROR:const e=o.getResponseJson();gs("Connection","XHR received:",JSON.stringify(e)),i(e);break;case is.TIMEOUT:gs("Connection",'RPC "'+t+'" timed out'),s(new ds(fs.DEADLINE_EXCEEDED,"Request time out"));break;case is.HTTP_ERROR:const n=o.getStatus();if(gs("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(fs).indexOf(e)>=0?e:fs.UNKNOWN}(t.status);s(new ds(e,t.message))}else s(new ds(fs.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new ds(fs.UNAVAILABLE,"Connection failed."));break;default:Es()}}finally{gs("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}Mi(t,e){const n=[this.Di,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=new Zi,i=er(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};var o,a;this.ki(s.initMessageHeaders,e),"undefined"!=typeof window&&(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())||"object"==typeof navigator&&"ReactNative"===navigator.product||xt().indexOf("Electron/")>=0||((a=xt()).indexOf("MSIE ")>=0||a.indexOf("Trident/")>=0)||xt().indexOf("MSAppHost/")>=0||"object"==typeof(o="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)&&void 0!==o.id||(s.httpHeadersOverwriteParam="$httpHeaders");const c=n.join("");gs("Connection","Creating WebChannel: "+c,s);const u=r.createWebChannel(c,s);let l=!1,h=!1;const f=new Vc({Ei:t=>{h?gs("Connection","Not sending because WebChannel is closed:",t):(l||(gs("Connection","Opening WebChannel transport."),u.open(),l=!0),gs("Connection","WebChannel sending:",t),u.send(t))},Ti:()=>u.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(u,us.EventType.OPEN,(()=>{h||gs("Connection","WebChannel transport opened.")})),d(u,us.EventType.CLOSE,(()=>{h||(h=!0,gs("Connection","WebChannel transport closed"),f.Vi())})),d(u,us.EventType.ERROR,(t=>{h||(h=!0,vs("Connection","WebChannel transport errored:",t),f.Vi(new ds(fs.UNAVAILABLE,"The operation could not be completed")))})),d(u,us.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];bs(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){gs("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=aa[t];if(void 0!==e)return ua(e)}(t),n=i.message;void 0===e&&(e=fs.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,f.Vi(new ds(e,n)),u.close()}else gs("Connection","WebChannel received:",n),f.Si(n)}})),d(i,os.STAT_EVENT,(t=>{t.stat===as?gs("Connection","Detected buffering proxy"):t.stat===cs&&gs("Connection","Detected no buffering proxy")})),setTimeout((()=>{f.vi()}),0),f}}function Fc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(t){return new La(t,!0)}class $c{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Se=t,this.timerId=e,this.Fi=n,this.Li=r,this.Bi=i,this.qi=0,this.Ui=null,this.Ki=Date.now(),this.reset()}reset(){this.qi=0}Qi(){this.qi=this.Bi}ji(t){this.cancel();const e=Math.floor(this.qi+this.Wi()),n=Math.max(0,Date.now()-this.Ki),r=Math.max(0,e-n);r>0&&gs("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.qi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ui=this.Se.enqueueAfterDelay(this.timerId,r,(()=>(this.Ki=Date.now(),t()))),this.qi*=this.Li,this.qi<this.Fi&&(this.qi=this.Fi),this.qi>this.Bi&&(this.qi=this.Bi)}Gi(){null!==this.Ui&&(this.Ui.skipDelay(),this.Ui=null)}cancel(){null!==this.Ui&&(this.Ui.cancel(),this.Ui=null)}Wi(){return(Math.random()-.5)*this.qi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc extends class{constructor(t,e,n,r,i,s){this.Se=t,this.zi=n,this.Hi=r,this.Ji=i,this.listener=s,this.state=0,this.Yi=0,this.Xi=null,this.stream=null,this.Zi=new $c(t,e)}tr(){return 1===this.state||2===this.state||4===this.state}er(){return 2===this.state}start(){3!==this.state?this.auth():this.nr()}async stop(){this.tr()&&await this.close(0)}sr(){this.state=0,this.Zi.reset()}ir(){this.er()&&null===this.Xi&&(this.Xi=this.Se.enqueueAfterDelay(this.zi,6e4,(()=>this.rr())))}cr(t){this.ur(),this.stream.send(t)}async rr(){if(this.er())return this.close(0)}ur(){this.Xi&&(this.Xi.cancel(),this.Xi=null)}async close(t,e){this.ur(),this.Zi.cancel(),this.Yi++,3!==t?this.Zi.reset():e&&e.code===fs.RESOURCE_EXHAUSTED?(ys(e.toString()),ys("Using maximum backoff delay to prevent overloading the backend."),this.Zi.Qi()):e&&e.code===fs.UNAUTHENTICATED&&this.Ji.invalidateToken(),null!==this.stream&&(this.ar(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ri(e)}ar(){}auth(){this.state=1;const t=this.hr(this.Yi),e=this.Yi;this.Ji.getToken().then((t=>{this.Yi===e&&this.lr(t)}),(e=>{t((()=>{const t=new ds(fs.UNKNOWN,"Fetching auth token failed: "+e.message);return this.dr(t)}))}))}lr(t){const e=this.hr(this.Yi);this.stream=this.wr(t),this.stream.Ii((()=>{e((()=>(this.state=2,this.listener.Ii())))})),this.stream.Ri((t=>{e((()=>this.dr(t)))})),this.stream.onMessage((t=>{e((()=>this.onMessage(t)))}))}nr(){this.state=4,this.Zi.ji((async()=>{this.state=0,this.start()}))}dr(t){return gs("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(3,t)}hr(t){return e=>{this.Se.enqueueAndForget((()=>this.Yi===t?e():(gs("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}{constructor(t,e,n,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle",e,n,i),this.R=r}wr(t){return this.Hi.Mi("Listen",t)}onMessage(t){this.Zi.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i="NO_CHANGE"===(r=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Es(),s=e.targetChange.targetIds||[],o=function(t,e){return t.I?(bs(void 0===e||"string"==typeof e),Ls.fromBase64String(e||"")):(bs(void 0===e||e instanceof Uint8Array),Ls.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?fs.UNKNOWN:ua(t.code);return new ds(e,t.message||"")}(a);n=new xa(i,s,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Va(t,r.document.name),s=Pa(r.document.updateTime),o=new ro({mapValue:{fields:r.document.fields}}),a=io.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Sa(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Va(t,r.document),s=r.readTime?Pa(r.readTime):xs.min(),o=io.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Sa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Va(t,r.document),s=r.removedTargetIds||[];n=new Sa([],s,i,null)}else{if(!("filter"in e))return Es();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new oa(r),s=t.targetId;n=new Ia(s,i)}}var r;return n}(this.R,t),n=function(t){if(!("targetChange"in t))return xs.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?xs.min():e.readTime?Pa(e.readTime):xs.min()}(t);return this.listener._r(e,n)}mr(t){const e={};e.database=Fa(this.R),e.addTarget=function(t,e){let n;const r=e.target;return n=uo(r)?{documents:$a(t,r)}:{query:Ba(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=function(t,e){return t.I?e.toBase64():e.toUint8Array()}(t,e.resumeToken):e.snapshotVersion.compareTo(xs.min())>0&&(n.readTime=function(t,e){return t.I?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}(t,e.snapshotVersion.toTimestamp())),n}(this.R,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Es()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.R,t);n&&(e.labels=n),this.cr(e)}gr(t){const e={};e.database=Fa(this.R),e.removeTarget=t,this.cr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc extends class{}{constructor(t,e,n){super(),this.credentials=t,this.Hi=e,this.R=n,this.Rr=!1}Pr(){if(this.Rr)throw new ds(fs.FAILED_PRECONDITION,"The client has already been terminated.")}Ni(t,e,n){return this.Pr(),this.credentials.getToken().then((r=>this.Hi.Ni(t,e,n,r))).catch((t=>{throw t.code===fs.UNAUTHENTICATED&&this.credentials.invalidateToken(),t}))}$i(t,e,n){return this.Pr(),this.credentials.getToken().then((r=>this.Hi.$i(t,e,n,r))).catch((t=>{throw t.code===fs.UNAUTHENTICATED&&this.credentials.invalidateToken(),t}))}terminate(){this.Rr=!1}}class jc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.br=0,this.vr=null,this.Vr=!0}Sr(){0===this.br&&(this.Dr("Unknown"),this.vr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.vr=null,this.Cr("Backend didn't respond within 10 seconds."),this.Dr("Offline"),Promise.resolve()))))}Nr(t){"Online"===this.state?this.Dr("Unknown"):(this.br++,this.br>=1&&(this.kr(),this.Cr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Dr("Offline")))}set(t){this.kr(),this.br=0,"Online"===t&&(this.Vr=!1),this.Dr(t)}Dr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Cr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Vr?(ys(e),this.Vr=!1):gs("OnlineStateTracker",e)}kr(){null!==this.vr&&(this.vr.cancel(),this.vr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Or=[],this.$r=new Map,this.Mr=new Set,this.Fr=[],this.Lr=i,this.Lr.di((t=>{n.enqueueAndForget((async()=>{tu(this)&&(gs("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Ts(t);e.Mr.add(4),await Wc(e),e.Br.set("Unknown"),e.Mr.delete(4),await Kc(e)}(this))}))})),this.Br=new jc(n,r)}}async function Kc(t){if(tu(t))for(const e of t.Fr)await e(!0)}async function Wc(t){for(const e of t.Fr)await e(!1)}function Gc(t,e){const n=Ts(t);n.$r.has(e.targetId)||(n.$r.set(e.targetId,e),Zc(n)?Jc(n):ou(n).er()&&Xc(n,e))}function Qc(t,e){const n=Ts(t),r=ou(n);n.$r.delete(e),r.er()&&Yc(n,e),0===n.$r.size&&(r.er()?r.ir():tu(n)&&n.Br.set("Unknown"))}function Xc(t,e){t.qr.U(e.targetId),ou(t).mr(e)}function Yc(t,e){t.qr.U(e),ou(t).gr(e)}function Jc(t){t.qr=new Na({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.$r.get(e)||null}),ou(t).start(),t.Br.Sr()}function Zc(t){return tu(t)&&!ou(t).tr()&&t.$r.size>0}function tu(t){return 0===Ts(t).Mr.size}function eu(t){t.qr=void 0}async function nu(t){t.$r.forEach(((e,n)=>{Xc(t,e)}))}async function ru(t,e){eu(t),Zc(t)?(t.Br.Nr(e),Jc(t)):t.Br.set("Unknown")}async function iu(t,e,n){if(t.Br.set("Online"),e instanceof xa&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.$r.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.$r.delete(r),t.qr.removeTarget(r))}(t,e)}catch(r){gs("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await su(t,r)}else if(e instanceof Sa?t.qr.X(e):e instanceof Ia?t.qr.rt(e):t.qr.et(e),!n.isEqual(xs.min()))try{const e=await yc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.qr.ut(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.$r.get(r);i&&t.$r.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.$r.get(e);if(!n)return;t.$r.set(e,n.withResumeToken(Ls.EMPTY_BYTE_STRING,n.snapshotVersion)),Yc(t,e);const r=new ic(n.target,e,1,n.sequenceNumber);Xc(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(i){gs("RemoteStore","Failed to raise snapshot:",i),await su(t,i)}}async function su(t,e,n){if(!nc(e))throw e;t.Mr.add(1),await Wc(t),t.Br.set("Offline"),n||(n=()=>yc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{gs("RemoteStore","Retrying IndexedDB access"),await n(),t.Mr.delete(1),await Kc(t)}))}function ou(t){return t.Ur||(t.Ur=function(t,e,n){const r=Ts(t);return r.Pr(),new Bc(e,r.Hi,r.credentials,r.R,n)}(t.datastore,t.asyncQueue,{Ii:nu.bind(null,t),Ri:ru.bind(null,t),_r:iu.bind(null,t)}),t.Fr.push((async e=>{e?(t.Ur.sr(),Zc(t)?Jc(t):t.Br.set("Unknown")):(await t.Ur.stop(),eu(t))}))),t.Ur
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class au{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new tc,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new au(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ds(fs.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cu(t,e){if(ys("AsyncQueue",`${e}: ${t}`),nc(t))return new ds(fs.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||js.comparator(e.key,n.key):(t,e)=>js.comparator(t.key,e.key),this.keyedMap=va(),this.sortedSet=new la(this.comparator)}static emptySet(t){return new uu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof uu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new uu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(){this.Qr=new la(js.comparator)}track(t){const e=t.doc.key,n=this.Qr.get(e);n?0!==t.type&&3===n.type?this.Qr=this.Qr.insert(e,t):3===t.type&&1!==n.type?this.Qr=this.Qr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Qr=this.Qr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Qr=this.Qr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Qr=this.Qr.remove(e):1===t.type&&2===n.type?this.Qr=this.Qr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Qr=this.Qr.insert(e,{type:2,doc:t.doc}):Es():this.Qr=this.Qr.insert(e,t)}jr(){const t=[];return this.Qr.inorderTraversal(((e,n)=>{t.push(n)})),t}}class hu{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new hu(t,e,uu.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Oo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(){this.Wr=void 0,this.listeners=[]}}class du{constructor(){this.queries=new hc((t=>ko(t)),Oo),this.onlineState="Unknown",this.Gr=new Set}}function pu(t,e){const n=Ts(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Hr(i)&&(r=!0);e.Wr=i}}r&&gu(n)}function mu(t,e,n){const r=Ts(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function gu(t){t.Gr.forEach((t=>{t.next()}))}class yu{constructor(t,e,n){this.query=t,this.Jr=e,this.Yr=!1,this.Xr=null,this.onlineState="Unknown",this.options=n||{}}Hr(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new hu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.Yr?this.Zr(t)&&(this.Jr.next(t),e=!0):this.eo(t,this.onlineState)&&(this.no(t),e=!0),this.Xr=t,e}onError(t){this.Jr.error(t)}zr(t){this.onlineState=t;let e=!1;return this.Xr&&!this.Yr&&this.eo(this.Xr,t)&&(this.no(this.Xr),e=!0),e}eo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.so&&n||t.docs.isEmpty()&&"Offline"!==e)}Zr(t){if(t.docChanges.length>0)return!0;const e=this.Xr&&this.Xr.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}no(t){t=hu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Yr=!0,this.Jr.next(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(t){this.key=t}}class wu{constructor(t){this.key=t}}class Eu{constructor(t,e){this.query=t,this.uo=e,this.ao=null,this.current=!1,this.ho=Ea(),this.mutatedKeys=Ea(),this.lo=Mo(t),this.fo=new uu(this.lo)}get wo(){return this.uo}_o(t,e){const n=e?e.mo:new lu,r=e?e.fo:this.fo;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Co(this.query)&&r.size===this.query.limit?r.last():null,c=No(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=Po(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.yo(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.lo(l,a)>0||c&&this.lo(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),Co(this.query)||No(this.query))for(;s.size>this.query.limit;){const t=Co(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{fo:s,mo:n,Nn:o,mutatedKeys:i}}yo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.fo;this.fo=t.fo,this.mutatedKeys=t.mutatedKeys;const i=t.mo.jr();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Es()}};return n(t)-n(e)}(t.type,e.type)||this.lo(t.doc,e.doc))),this.po(n);const s=e?this.Eo():[],o=0===this.ho.size&&this.current?1:0,a=o!==this.ao;return this.ao=o,0!==i.length||a?{snapshot:new hu(this.query,t.fo,r,i,t.mutatedKeys,0===o,a,!1),To:s}:{To:s}}zr(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({fo:this.fo,mo:new lu,mutatedKeys:this.mutatedKeys,Nn:!1},!1)):{To:[]}}Io(t){return!this.uo.has(t)&&!!this.fo.has(t)&&!this.fo.get(t).hasLocalMutations}po(t){t&&(t.addedDocuments.forEach((t=>this.uo=this.uo.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.uo=this.uo.delete(t))),this.current=t.current)}Eo(){if(!this.current)return[];const t=this.ho;this.ho=Ea(),this.fo.forEach((t=>{this.Io(t.key)&&(this.ho=this.ho.add(t.key))}));const e=[];return t.forEach((t=>{this.ho.has(t)||e.push(new wu(t))})),this.ho.forEach((n=>{t.has(n)||e.push(new vu(n))})),e}Ao(t){this.uo=t.Bn,this.ho=Ea();const e=this._o(t.documents);return this.applyChanges(e,!0)}Ro(){return hu.fromInitialDocuments(this.query,this.fo,this.mutatedKeys,0===this.ao)}}class bu{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Tu{constructor(t){this.key=t,this.Po=!1}}class _u{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.bo={},this.vo=new hc((t=>ko(t)),Oo),this.Vo=new Map,this.So=new Set,this.Do=new la(js.comparator),this.Co=new Map,this.No=new Tc,this.xo={},this.ko=new Map,this.Oo=uc.Yt(),this.onlineState="Unknown",this.$o=void 0}get isPrimaryClient(){return!0===this.$o}}async function Au(t,e){const n=function(t){const e=Ts(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Iu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Mu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Cu.bind(null,e),e.bo._r=pu.bind(null,e.eventManager),e.bo.Fo=mu.bind(null,e.eventManager),e}(t);let r,i;const s=n.vo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ro();else{const t=await function(t,e){const n=Ts(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.qe.getTargetData(t,e).next((i=>i?(r=i,ec.resolve(r)):n.qe.allocateTargetId(t).next((i=>(r=new ic(e,i,0,t.currentSequenceNumber),n.qe.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.kn.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.kn=n.kn.insert(t.targetId,t),n.On.set(e,t.targetId)),t}))}(n.localStore,Ro(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await async function(t,e,n,r){t.Mo=(e,n,r)=>async function(t,e,n,r){let i=e.view._o(n);i.Nn&&(i=await Ec(t.localStore,e.query,!1).then((({documents:t})=>e.view._o(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return Ru(t,e.targetId,o.To),o.snapshot}(t,e,n,r);const i=await Ec(t.localStore,e,!0),s=new Eu(e,i.Bn),o=s._o(i.documents),a=Aa.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);Ru(t,n,c.To);const u=new bu(e,n,s);return t.vo.set(e,u),t.Vo.has(n)?t.Vo.get(n).push(e):t.Vo.set(n,[e]),c.snapshot}(n,e,r,"current"===s),n.isPrimaryClient&&Gc(n.remoteStore,t)}return i}async function Su(t,e){const n=Ts(t),r=n.vo.get(e),i=n.Vo.get(r.targetId);if(i.length>1)return n.Vo.set(r.targetId,i.filter((t=>!Oo(t,e)))),void n.vo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await wc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Qc(n.remoteStore,r.targetId),Nu(n,r.targetId)})).catch(lc)):(Nu(n,r.targetId),await wc(n.localStore,r.targetId,!0))}async function Iu(t,e){const n=Ts(t);try{const t=await vc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Co.get(e);r&&(bs(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Po=!0:t.modifiedDocuments.size>0?bs(r.Po):t.removedDocuments.size>0&&(bs(r.Po),r.Po=!1))})),await Lu(n,t,e)}catch(r){await lc(r)}}function xu(t,e,n){const r=Ts(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.vo.forEach(((n,r)=>{const i=r.view.zr(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Ts(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.zr(e)&&(r=!0)})),r&&gu(n)}(r.eventManager,e),t.length&&r.bo._r(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Cu(t,e,n){const r=Ts(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Co.get(e),s=i&&i.key;if(s){let t=new la(js.comparator);t=t.insert(s,io.newNoDocument(s,xs.min()));const n=Ea().add(s),i=new _a(xs.min(),new Map,new da(As),t,n);await Iu(r,i),r.Do=r.Do.remove(s),r.Co.delete(e),ku(r)}else await wc(r.localStore,e,!1).then((()=>Nu(r,e,n))).catch(lc)}function Nu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vo.get(e))t.vo.delete(r),n&&t.bo.Fo(r,n);t.Vo.delete(e),t.isPrimaryClient&&t.No.Zn(e).forEach((e=>{t.No.containsKey(e)||Du(t,e)}))}function Du(t,e){t.So.delete(e.path.canonicalString());const n=t.Do.get(e);null!==n&&(Qc(t.remoteStore,n),t.Do=t.Do.remove(e),t.Co.delete(n),ku(t))}function Ru(t,e,n){for(const r of n)r instanceof vu?(t.No.addReference(r.key,e),Ou(t,r)):r instanceof wu?(gs("SyncEngine","Document no longer in limbo: "+r.key),t.No.removeReference(r.key,e),t.No.containsKey(r.key)||Du(t,r.key)):Es()}function Ou(t,e){const n=e.key,r=n.path.canonicalString();t.Do.get(n)||t.So.has(r)||(gs("SyncEngine","New document in limbo: "+n),t.So.add(r),ku(t))}function ku(t){for(;t.So.size>0&&t.Do.size<t.maxConcurrentLimboResolutions;){const e=t.So.values().next().value;t.So.delete(e);const n=new js(Rs.fromString(e)),r=t.Oo.next();t.Co.set(r,new Tu(n)),t.Do=t.Do.insert(n,r),Gc(t.remoteStore,new ic(Ro(xo(n.path)),r,2,hs.o))}}async function Lu(t,e,n){const r=Ts(t),i=[],s=[],o=[];r.vo.isEmpty()||(r.vo.forEach(((t,a)=>{o.push(r.Mo(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=dc.vn(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.bo._r(i),await async function(t,e){const n=Ts(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ec.forEach(e,(e=>ec.forEach(e.Pn,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>ec.forEach(e.bn,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(r){if(!nc(r))throw r;gs("LocalStore","Failed to update sequence numbers: "+r)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.kn.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.kn=n.kn.insert(t,i)}}}(r.localStore,s))}async function Pu(t,e){const n=Ts(t);if(!n.currentUser.isEqual(e)){gs("SyncEngine","User change. New user:",e.toKey());const t=await gc(n.localStore,e);n.currentUser=e,(r=n).ko.forEach((t=>{t.forEach((t=>{t.reject(new ds(fs.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.ko.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Lu(n,t.Ln)}var r}function Mu(t,e){const n=Ts(t),r=n.Co.get(e);if(r&&r.Po)return Ea().add(r.key);{let t=Ea();const r=n.Vo.get(e);if(!r)return t;for(const e of r){const r=n.vo.get(e);t=t.unionWith(r.view.wo)}return t}}class Vu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.R=Hc(t.databaseInfo.databaseId),this.sharedClientState=this.Bo(t),this.persistence=this.qo(t),await this.persistence.start(),this.gcScheduler=this.Uo(t),this.localStore=this.Ko(t)}Uo(t){return null}Ko(t){return function(t,e,n,r){return new mc(t,e,n,r)}(this.persistence,new pc,t.initialUser,this.R)}qo(t){return new Cc(Dc.Ps,this.R)}Bo(t){return new kc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Uu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>xu(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Pu.bind(null,this.syncEngine),await async function(t,e){const n=Ts(t);e?(n.Mr.delete(2),await Kc(n)):e||(n.Mr.add(2),await Wc(n),n.Br.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new du}createDatastore(t){const e=Hc(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Uc(r));var r,i;return i=t.credentials,new qc(i,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>xu(this.syncEngine,t,0),s=Pc.gt()?new Pc:new Lc,new zc(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new _u(t,e,n,r,i,s);return o&&(a.$o=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Ts(t);gs("RemoteStore","RemoteStore shutting down."),e.Mr.add(5),await Wc(e),e.Lr.shutdown(),e.Br.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.jo(this.observer.next,t)}error(t){this.observer.error?this.jo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Wo(){this.muted=!0}jo(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=Rc.UNAUTHENTICATED,this.clientId=class{static u(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=_s(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}.u(),this.credentialListener=()=>{},this.receivedInitialUser=new tc,this.credentials.setChangeListener((t=>{gs("FirestoreClient","Received user=",t.uid),this.user=t,this.credentialListener(t),this.receivedInitialUser.resolve()}))}async getConfiguration(){return await this.receivedInitialUser.promise,{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t,this.receivedInitialUser.promise.then((()=>this.credentialListener(this.user)))}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ds(fs.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new tc;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.removeChangeListener(),t.resolve()}catch(e){const n=cu(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function $u(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(gs("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),gs("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((n=>{r.isEqual(n)||(r=n,t.asyncQueue.enqueueRetryable((async()=>{await gc(e.localStore,n)})))})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new Vu)),t.offlineComponents}(t);gs("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((n=>t.asyncQueue.enqueueRetryable((()=>async function(t,e){const n=Ts(t);n.asyncQueue.verifyOperationInProgress(),gs("RemoteStore","RemoteStore received new credentials");const r=tu(n);n.Mr.add(3),await Wc(n),r&&n.Br.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Mr.delete(3),await Kc(n)}(e.remoteStore,n))))),t.onlineComponents=e}async function Bu(t){const e=await async function(t){return t.onlineComponents||(gs("FirestoreClient","Using default OnlineComponentProvider"),await $u(t,new Uu)),t.onlineComponents}(t),n=e.eventManager;return n.onListen=Au.bind(null,e.syncEngine),n.onUnlisten=Su.bind(null,e.syncEngine),n}function qu(t,e,n={}){const r=new tc;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new Fu({next:n=>{e.enqueueAndForget((()=>async function(t,e){const n=Ts(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}(t,o))),n.fromCache&&"server"===r.source?i.reject(new ds(fs.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new yu(n,s,{includeMetadataChanges:!0,so:!0});return async function(e,n){const r=Ts(e),i=n.query;let s=!1,o=r.queries.get(i);if(o||(s=!0,o=new fu),s)try{o.Wr=await r.onListen(i)}catch(t){const r=cu(t,`Initialization of query '${Lo(n.query)}' failed`);return void n.onError(r)}r.queries.set(i,o),o.listeners.push(n),n.zr(r.onlineState),o.Wr&&n.Hr(o.Wr)&&gu(r)}(t,o)}(await Bu(t),t.asyncQueue,e,n,r))),r.promise}class ju{constructor(t,e,n,r,i,s,o){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o}}class zu{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof zu&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${t}`}}class Gu{constructor(){this.changeListener=null}getToken(){return Promise.resolve(null)}invalidateToken(){}setChangeListener(t){this.changeListener=t,t(Rc.UNAUTHENTICATED)}removeChangeListener(){this.changeListener=null}}class Qu{constructor(t){this.oc=null,this.currentUser=Rc.UNAUTHENTICATED,this.receivedInitialUser=!1,this.cc=0,this.changeListener=null,this.forceRefresh=!1,this.oc=()=>{this.cc++,this.currentUser=this.uc(),this.receivedInitialUser=!0,this.changeListener&&this.changeListener(this.currentUser)},this.cc=0,this.auth=t.getImmediate({optional:!0}),this.auth?this.auth.addAuthTokenListener(this.oc):(this.oc(null),t.get().then((t=>{this.auth=t,this.oc&&this.auth.addAuthTokenListener(this.oc)}),(()=>{})))}getToken(){const t=this.cc,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.cc!==t?(gs("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(bs("string"==typeof e.accessToken),new Wu(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}setChangeListener(t){this.changeListener=t,this.receivedInitialUser&&t(this.currentUser)}removeChangeListener(){this.auth&&this.auth.removeAuthTokenListener(this.oc),this.oc=null,this.changeListener=null}uc(){const t=this.auth&&this.auth.getUid();return bs(null===t||"string"==typeof t),new Rc(t)}}class Xu{constructor(t,e,n){this.ac=t,this.hc=e,this.lc=n,this.type="FirstParty",this.user=Rc.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.hc},e=this.ac.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.lc&&(t["X-Goog-Iam-Authorization-Token"]=this.lc),t}}class Yu{constructor(t,e,n){this.ac=t,this.hc=e,this.lc=n}getToken(){return Promise.resolve(new Xu(this.ac,this.hc,this.lc))}setChangeListener(t){t(Rc.FIRST_PARTY)}removeChangeListener(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(t){if(js.isDocumentKey(t))throw new ds(fs.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ds(fs.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=function(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){if(t.constructor){const e=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());if(e&&e.length>1)return e[1]}return null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Es()}(t);throw new ds(fs.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new ds(fs.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ds(fs.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,function(t,e,n,r){if(!0===e&&!0===r)throw new ds(fs.INVALID_ARGUMENT,"experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,t.experimentalForceLongPolling,0,t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(t,e){this._persistenceKey="(lite)",this._settings=new tl({}),this._settingsFrozen=!1,t instanceof zu?(this._databaseId=t,this._credentials=new Gu):(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ds(fs.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zu(t.options.projectId)}(t),this._credentials=new Qu(e))}get app(){if(!this._app)throw new ds(fs.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ds(fs.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tl(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new Gu;switch(t.type){case"gapi":const e=t.client;return bs(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Yu(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new ds(fs.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ku.get(t);e&&(gs("ComponentProvider","Removing Datastore"),Ku.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(t,e,n){this._converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new il(this.firestore,this._converter,this._key.path.popLast())}withConverter(t){return new nl(this.firestore,t,this._key)}}class rl{constructor(t,e,n){this._converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new rl(this.firestore,t,this._query)}}class il extends rl{constructor(t,e,n){super(t,e,xo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new nl(this.firestore,null,new js(t))}withConverter(t){return new il(this.firestore,t,this._path)}}function sl(t,e,...n){if(t=(r=t)&&r._delegate?r._delegate:r,function(t,e,n){if(!n)throw new ds(fs.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}("collection","path",e),t instanceof el){const r=Rs.fromString(e,...n);return Ju(r),new il(t,null,r)}var r;{if(!(t instanceof nl||t instanceof il))throw new ds(fs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=Rs.fromString(t.path,...n).child(Rs.fromString(e));return Ju(r),new il(t.firestore,null,r)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){this.fc=Promise.resolve(),this.dc=[],this.wc=!1,this._c=[],this.mc=null,this.gc=!1,this.yc=[],this.Zi=new $c(this,"async_queue_retry"),this.Ec=()=>{const t=Fc();t&&gs("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Zi.Gi()};const t=Fc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ec)}get isShuttingDown(){return this.wc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Tc(),this.Ic(t)}enterRestrictedMode(){if(!this.wc){this.wc=!0;const t=Fc();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ec)}}enqueue(t){return this.Tc(),this.wc?new Promise((t=>{})):this.Ic(t)}enqueueRetryable(t){this.enqueueAndForget((()=>(this.dc.push(t),this.Ac())))}async Ac(){if(0!==this.dc.length){try{await this.dc[0](),this.dc.shift(),this.Zi.reset()}catch(t){if(!nc(t))throw t;gs("AsyncQueue","Operation failed with retryable error: "+t)}this.dc.length>0&&this.Zi.ji((()=>this.Ac()))}}Ic(t){const e=this.fc.then((()=>(this.gc=!0,t().catch((t=>{throw this.mc=t,this.gc=!1,ys("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.gc=!1,t))))));return this.fc=e,e}enqueueAfterDelay(t,e,n){this.Tc(),this.yc.indexOf(t)>-1&&(e=0);const r=au.createAndSchedule(this,t,e,n,(t=>this.Rc(t)));return this._c.push(r),r}Tc(){this.mc&&Es()}verifyOperationInProgress(){}async Pc(){let t;do{t=this.fc,await t}while(t!==this.fc)}bc(t){for(const e of this._c)if(e.timerId===t)return!0;return!1}vc(t){return this.Pc().then((()=>{this._c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this._c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Pc()}))}Vc(t){this.yc.push(t)}Rc(t){const e=this._c.indexOf(t);this._c.splice(e,1)}}class al extends el{constructor(t,e){super(t,e),this._queue=new ol,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ul(this),this._firestoreClient.terminate()}}function cl(t=te()){return(e=t,n="firestore-exp",e.container.getProvider(n)).getImmediate();var e,n}function ul(t){var e;const n=t._freezeSettings(),r=(i=t._databaseId,s=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new ju(i,s,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling));var i,s,o,a;t._firestoreClient=new Hu(t._credentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ds(fs.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ks(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new hl(Ls.fromBase64String(t))}catch(e){throw new ds(fs.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new hl(Ls.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ds(fs.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ds(fs.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return As(this._lat,t._lat)||As(this._long,t._long)}}const dl=new RegExp("[~\\*/\\[\\]]");function pl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ds(fs.INVALID_ARGUMENT,a+t+c)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ml{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new nl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new gl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.toProto())}}get(t){if(this._document){const e=this._document.data.field(yl("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class gl extends ml{data(){return super.data()}}function yl(t,e){return"string"==typeof e?function(t,e,n){if(e.search(dl)>=0)throw pl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ll(...e.split("."))._internalPath}catch(r){throw pl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e):e instanceof ll?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class wl extends ml{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new El(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.toProto(),t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(yl("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class El extends wl{data(t={}){return super.data(t)}}class bl{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new vl(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new El(this._firestore,this._userDataWriter,n.key,n,new vl(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query._converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ds(fs.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new El(t._firestore,t._userDataWriter,n.doc.key,n.doc,new vl(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query._converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new El(t._firestore,t._userDataWriter,e.doc.key,e.doc,new vl(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query._converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Tl(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Tl(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Es()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class{convertValue(t,e="none"){switch(zs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Vs(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Us(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Es()}}convertObject(t,e){const n={};return Ns(t.fields||{},((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new fl(Vs(t.latitude),Vs(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Hs(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp($s(t));default:return null}}convertTimestamp(t){const e=Ms(t);return new Is(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Rs.fromString(t);bs(Za(n));const r=new zu(n.get(1),n.get(3)),i=new js(n.popFirst(5));return r.isEqual(e)||ys(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new hl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new nl(this.firestore,null,e)}}function Al(t){t=Zu(t,rl);const e=Zu(t.firestore,al),n=function(t){return t._firestoreClient||ul(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}(e),r=new _l(e);return function(t){if(No(t)&&0===t.explicitOrderBy.length)throw new ds(fs.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query),qu(n,t._query).then((n=>new bl(e,r,t,n)))}Xt(new Ot("firestore-exp",((t,{options:e})=>{const n=t.getProvider("app-exp").getImmediate(),r=new al(n,t.getProvider("auth-internal"));return e&&r._setSettings(e),r}),"PUBLIC")),ne("@firebase/firestore","0.0.900-exp.894b5da5a",undefined);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Sl,Il,xl=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(Il=Sl||(Sl={})).RICH="mdc-tooltip--rich",Il.SHOWN="mdc-tooltip--shown",Il.SHOWING="mdc-tooltip--showing",Il.SHOWING_TRANSITION="mdc-tooltip--showing-transition",Il.HIDE="mdc-tooltip--hide",Il.HIDE_TRANSITION="mdc-tooltip--hide-transition",Il.MULTILINE_TOOLTIP="mdc-tooltip--multiline",Il.SURFACE="mdc-tooltip__surface",Il.TOOLTIP_CARET_TOP="mdc-tooltip__caret-surface-top",Il.TOOLTIP_CARET_BOTTOM="mdc-tooltip__caret-surface-bottom";var Cl,Nl,Dl,Rl,Ol,kl,Ll=4,Pl=8,Ml=8,Vl=600,Ul=500,Fl=24,Hl=200,$l=24,Bl="aria-expanded",ql="aria-haspopup",jl="data-mdc-tooltip-persistent",zl="data-mdc-tooltip-has-caret";(Nl=Cl||(Cl={}))[Nl.DETECTED=0]="DETECTED",Nl[Nl.START=1]="START",Nl[Nl.CENTER=2]="CENTER",Nl[Nl.END=3]="END",(Rl=Dl||(Dl={}))[Rl.DETECTED=0]="DETECTED",Rl[Rl.ABOVE=1]="ABOVE",Rl[Rl.BELOW=2]="BELOW",(kl=Ol||(Ol={}))[kl.BOUNDED=0]="BOUNDED",kl[kl.UNBOUNDED=1]="UNBOUNDED";var Kl,Wl,Gl="left",Ql="right",Xl="center",Yl="top",Jl="bottom";(Wl=Kl||(Kl={}))[Wl.DETECTED=0]="DETECTED",Wl[Wl.ABOVE_START=1]="ABOVE_START",Wl[Wl.ABOVE_CENTER=2]="ABOVE_CENTER",Wl[Wl.ABOVE_END=3]="ABOVE_END",Wl[Wl.TOP_SIDE_START=4]="TOP_SIDE_START",Wl[Wl.CENTER_SIDE_START=5]="CENTER_SIDE_START",Wl[Wl.BOTTOM_SIDE_START=6]="BOTTOM_SIDE_START",Wl[Wl.TOP_SIDE_END=7]="TOP_SIDE_END",Wl[Wl.CENTER_SIDE_END=8]="CENTER_SIDE_END",Wl[Wl.BOTTOM_SIDE_END=9]="BOTTOM_SIDE_END",Wl[Wl.BELOW_START=10]="BELOW_START",Wl[Wl.BELOW_CENTER=11]="BELOW_CENTER",Wl[Wl.BELOW_END=12]="BELOW_END";
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Zl=function(){function t(){this.rafIDs=new Map}return t.prototype.request=function(t,e){var n=this;this.cancel(t);var r=requestAnimationFrame((function(r){n.rafIDs.delete(t),e(r)}));this.rafIDs.set(t,r)},t.prototype.cancel=function(t){var e=this.rafIDs.get(t);e&&(cancelAnimationFrame(e),this.rafIDs.delete(t))},t.prototype.cancelAll=function(){var t=this;this.rafIDs.forEach((function(e,n){t.cancel(n)}))},t.prototype.getQueue=function(){var t=[];return this.rafIDs.forEach((function(e,n){t.push(n)})),t},t}(),th={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function eh(t,e){if(function(t){return Boolean(t.document)&&"function"==typeof t.document.createElement}(t)&&e in th){var n=t.document.createElement("div"),r=th[e],i=r.standard,s=r.prefixed;return i in n.style?i:s}return e}
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var nh="Unknown",rh="Backspace",ih="Enter",sh="Spacebar",oh="PageUp",ah="PageDown",ch="End",uh="Home",lh="ArrowLeft",hh="ArrowUp",fh="ArrowRight",dh="ArrowDown",ph="Delete",mh="Escape",gh="Tab",yh=new Set;yh.add(rh),yh.add(ih),yh.add(sh),yh.add(oh),yh.add(ah),yh.add(ch),yh.add(uh),yh.add(lh),yh.add(hh),yh.add(fh),yh.add(dh),yh.add(ph),yh.add(mh),yh.add(gh);var vh=8,wh=13,Eh=32,bh=33,Th=34,_h=35,Ah=36,Sh=37,Ih=38,xh=39,Ch=40,Nh=46,Dh=27,Rh=9,Oh=new Map;Oh.set(vh,rh),Oh.set(wh,ih),Oh.set(Eh,sh),Oh.set(bh,oh),Oh.set(Th,ah),Oh.set(_h,ch),Oh.set(Ah,uh),Oh.set(Sh,lh),Oh.set(Ih,hh),Oh.set(xh,fh),Oh.set(Ch,dh),Oh.set(Nh,ph),Oh.set(Dh,mh),Oh.set(Rh,gh);var kh=new Set;kh.add(oh),kh.add(ah),kh.add(ch),kh.add(uh),kh.add(lh),kh.add(hh),kh.add(fh),kh.add(dh);
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Lh,Ph=Sl.RICH,Mh=Sl.SHOWN,Vh=Sl.SHOWING,Uh=Sl.SHOWING_TRANSITION,Fh=Sl.HIDE,Hh=Sl.HIDE_TRANSITION,$h=Sl.MULTILINE_TOOLTIP;(Lh||(Lh={})).POLL_ANCHOR="poll_anchor";var Bh="undefined"!=typeof window,qh=function(t){function e(n){var r=t.call(this,Et(Et({},e.defaultAdapter),n))||this;return r.tooltipShown=!1,r.anchorGap=Ll,r.xTooltipPos=Cl.DETECTED,r.yTooltipPos=Dl.DETECTED,r.tooltipPositionWithCaret=Kl.DETECTED,r.minViewportTooltipThreshold=Ml,r.hideDelayMs=Vl,r.showDelayMs=Ul,r.anchorRect=null,r.parentRect=null,r.frameId=null,r.hideTimeout=null,r.showTimeout=null,r.addAncestorScrollEventListeners=new Array,r.removeAncestorScrollEventListeners=new Array,r.animFrame=new Zl,r.anchorBlurHandler=function(t){r.handleAnchorBlur(t)},r.documentClickHandler=function(t){r.handleDocumentClick(t)},r.documentKeydownHandler=function(t){r.handleKeydown(t)},r.richTooltipMouseEnterHandler=function(){r.handleRichTooltipMouseEnter()},r.richTooltipMouseLeaveHandler=function(){r.handleRichTooltipMouseLeave()},r.richTooltipFocusOutHandler=function(t){r.handleRichTooltipFocusOut(t)},r.windowScrollHandler=function(){r.handleWindowChangeEvent()},r.windowResizeHandler=function(){r.handleWindowChangeEvent()},r}return wt(e,t),Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttribute:function(){return null},setAttribute:function(){},addClass:function(){},hasClass:function(){return!1},removeClass:function(){},getComputedStyleProperty:function(){return""},setStyleProperty:function(){},setSurfaceStyleProperty:function(){},getViewportWidth:function(){return 0},getViewportHeight:function(){return 0},getTooltipSize:function(){return{width:0,height:0}},getAnchorBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getParentBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getAnchorAttribute:function(){return null},setAnchorAttribute:function(){return null},isRTL:function(){return!1},anchorContainsElement:function(){return!1},tooltipContainsElement:function(){return!1},focusAnchorElement:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){},registerAnchorEventHandler:function(){},deregisterAnchorEventHandler:function(){},registerDocumentEventHandler:function(){},deregisterDocumentEventHandler:function(){},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){},notifyHidden:function(){},getTooltipCaretSize:function(){return null},setTooltipCaretStyle:function(){},clearTooltipCaretStyles:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.richTooltip=this.adapter.hasClass(Ph),this.persistentTooltip="true"===this.adapter.getAttribute(jl),this.interactiveTooltip=!!this.adapter.getAnchorAttribute(Bl)&&"dialog"===this.adapter.getAnchorAttribute(ql),this.hasCaret=this.richTooltip&&"true"===this.adapter.getAttribute(zl)},e.prototype.isShown=function(){return this.tooltipShown},e.prototype.isRich=function(){return this.richTooltip},e.prototype.isPersistent=function(){return this.persistentTooltip},e.prototype.handleAnchorMouseEnter=function(){var t=this;this.tooltipShown?this.show():(this.clearHideTimeout(),this.showTimeout=setTimeout((function(){t.show()}),this.showDelayMs))},e.prototype.handleAnchorTouchstart=function(){var t=this;this.showTimeout=setTimeout((function(){t.show()}),this.showDelayMs),this.adapter.registerWindowEventHandler("contextmenu",this.preventContextMenuOnLongTouch)},e.prototype.preventContextMenuOnLongTouch=function(t){t.preventDefault()},e.prototype.handleAnchorTouchend=function(){this.clearShowTimeout(),this.isShown()||this.adapter.deregisterWindowEventHandler("contextmenu",this.preventContextMenuOnLongTouch)},e.prototype.handleAnchorFocus=function(t){var e=this,n=t.relatedTarget;n instanceof HTMLElement&&this.adapter.tooltipContainsElement(n)||(this.showTimeout=setTimeout((function(){e.show()}),this.showDelayMs))},e.prototype.handleAnchorMouseLeave=function(){var t=this;this.clearShowTimeout(),this.hideTimeout=setTimeout((function(){t.hide()}),this.hideDelayMs)},e.prototype.handleAnchorClick=function(){this.tooltipShown?this.hide():this.show()},e.prototype.handleDocumentClick=function(t){var e=t.target instanceof HTMLElement&&(this.adapter.anchorContainsElement(t.target)||this.adapter.tooltipContainsElement(t.target));this.richTooltip&&this.persistentTooltip&&e||this.hide()},e.prototype.handleKeydown=function(t){(function(t){var e=t.key;return yh.has(e)?e:Oh.get(t.keyCode)||nh})(t)===mh&&(document.activeElement instanceof HTMLElement&&this.adapter.tooltipContainsElement(document.activeElement)&&this.adapter.focusAnchorElement(),this.hide())},e.prototype.handleAnchorBlur=function(t){if(this.richTooltip&&(t.relatedTarget instanceof HTMLElement&&this.adapter.tooltipContainsElement(t.relatedTarget)))return;this.hide()},e.prototype.handleRichTooltipMouseEnter=function(){this.show()},e.prototype.handleRichTooltipMouseLeave=function(){var t=this;this.clearShowTimeout(),this.hideTimeout=setTimeout((function(){t.hide()}),this.hideDelayMs)},e.prototype.handleRichTooltipFocusOut=function(t){t.relatedTarget instanceof HTMLElement&&(this.adapter.anchorContainsElement(t.relatedTarget)||this.adapter.tooltipContainsElement(t.relatedTarget))||this.hide()},e.prototype.handleWindowChangeEvent=function(){var t=this;this.animFrame.request(Lh.POLL_ANCHOR,(function(){t.repositionTooltipOnAnchorMove()}))},e.prototype.show=function(){var t,e,n=this;if(this.clearHideTimeout(),this.clearShowTimeout(),!this.tooltipShown){this.tooltipShown=!0,this.parseShowTooltipOptions().hideFromScreenreader||this.adapter.setAttribute("aria-hidden","false"),this.richTooltip&&(this.interactiveTooltip&&this.adapter.setAnchorAttribute("aria-expanded","true"),this.adapter.registerEventHandler("focusout",this.richTooltipFocusOutHandler),this.persistentTooltip||(this.adapter.registerEventHandler("mouseenter",this.richTooltipMouseEnterHandler),this.adapter.registerEventHandler("mouseleave",this.richTooltipMouseLeaveHandler))),this.adapter.removeClass(Fh),this.adapter.addClass(Vh),this.isTooltipMultiline()&&!this.richTooltip&&this.adapter.addClass($h),this.anchorRect=this.adapter.getAnchorBoundingRect(),this.parentRect=this.adapter.getParentBoundingRect(),this.richTooltip?this.positionRichTooltip():this.positionPlainTooltip(),this.hasCaret&&this.setCaretPositionStyles(this.tooltipPositionWithCaret),this.adapter.registerAnchorEventHandler("blur",this.anchorBlurHandler),this.adapter.registerDocumentEventHandler("click",this.documentClickHandler),this.adapter.registerDocumentEventHandler("keydown",this.documentKeydownHandler),this.adapter.registerWindowEventHandler("scroll",this.windowScrollHandler),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler);try{for(var r=_t(this.addAncestorScrollEventListeners),i=r.next();!i.done;i=r.next()){(0,i.value)()}}catch(s){t={error:s}}finally{try{i&&!i.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}this.frameId=requestAnimationFrame((function(){n.clearAllAnimationClasses(),n.adapter.addClass(Mh),n.adapter.addClass(Uh)}))}},e.prototype.hide=function(){var t,e;if(this.clearHideTimeout(),this.clearShowTimeout(),this.tooltipShown){this.frameId&&cancelAnimationFrame(this.frameId),this.tooltipShown=!1,this.adapter.setAttribute("aria-hidden","true"),this.adapter.deregisterEventHandler("focusout",this.richTooltipFocusOutHandler),this.richTooltip&&(this.interactiveTooltip&&this.adapter.setAnchorAttribute("aria-expanded","false"),this.persistentTooltip||(this.adapter.deregisterEventHandler("mouseenter",this.richTooltipMouseEnterHandler),this.adapter.deregisterEventHandler("mouseleave",this.richTooltipMouseLeaveHandler))),this.clearAllAnimationClasses(),this.adapter.addClass(Fh),this.adapter.addClass(Hh),this.adapter.removeClass(Mh),this.adapter.deregisterAnchorEventHandler("blur",this.anchorBlurHandler),this.adapter.deregisterDocumentEventHandler("click",this.documentClickHandler),this.adapter.deregisterDocumentEventHandler("keydown",this.documentKeydownHandler),this.adapter.deregisterWindowEventHandler("scroll",this.windowScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("contextmenu",this.preventContextMenuOnLongTouch);try{for(var n=_t(this.removeAncestorScrollEventListeners),r=n.next();!r.done;r=n.next()){(0,r.value)()}}catch(i){t={error:i}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}}},e.prototype.handleTransitionEnd=function(){var t=this.adapter.hasClass(Fh);this.adapter.removeClass(Vh),this.adapter.removeClass(Uh),this.adapter.removeClass(Fh),this.adapter.removeClass(Hh),t&&this.adapter.notifyHidden()},e.prototype.clearAllAnimationClasses=function(){this.adapter.removeClass(Uh),this.adapter.removeClass(Hh)},e.prototype.setTooltipPosition=function(t){var e=t.xPos,n=t.yPos,r=t.withCaretPos;this.hasCaret&&r?this.tooltipPositionWithCaret=r:(e&&(this.xTooltipPos=e),n&&(this.yTooltipPos=n))},e.prototype.setAnchorBoundaryType=function(t){t===Ol.UNBOUNDED?this.anchorGap=Pl:this.anchorGap=Ll},e.prototype.parseShowTooltipOptions=function(){return{hideFromScreenreader:Boolean(this.adapter.getAnchorAttribute("data-tooltip-id"))}},e.prototype.isTooltipMultiline=function(){var t=this.adapter.getTooltipSize();return t.height>Fl&&t.width>=Hl},e.prototype.positionPlainTooltip=function(){var t=this.calculateTooltipStyles(this.anchorRect),e=t.top,n=t.yTransformOrigin,r=t.left,i=t.xTransformOrigin,s=Bh?eh(window,"transform"):"transform";this.adapter.setSurfaceStyleProperty(s+"-origin",n+" "+i),this.adapter.setStyleProperty("top",e+"px"),this.adapter.setStyleProperty("left",r+"px")},e.prototype.positionRichTooltip=function(){var t,e,n,r,i=this.adapter.getComputedStyleProperty("width");this.adapter.setStyleProperty("width",i);var s=this.calculateTooltipStyles(this.anchorRect),o=s.top,a=s.yTransformOrigin,c=s.left,u=s.xTransformOrigin,l=Bh?eh(window,"transform"):"transform";this.adapter.setSurfaceStyleProperty(l+"-origin",a+" "+u);var h=c-(null!==(e=null===(t=this.parentRect)||void 0===t?void 0:t.left)&&void 0!==e?e:0),f=o-(null!==(r=null===(n=this.parentRect)||void 0===n?void 0:n.top)&&void 0!==r?r:0);this.adapter.setStyleProperty("top",f+"px"),this.adapter.setStyleProperty("left",h+"px")},e.prototype.calculateTooltipStyles=function(t){if(!t)return{top:0,left:0};var e=this.adapter.getTooltipSize(),n=this.calculateYTooltipDistance(t,e.height),r=this.calculateXTooltipDistance(t,e.width);return{top:n.distance,yTransformOrigin:n.yTransformOrigin,left:r.distance,xTransformOrigin:r.xTransformOrigin}},e.prototype.calculateXTooltipDistance=function(t,e){var n,r,i,s,o,a=!this.adapter.isRTL();this.richTooltip?(n=a?t.left-e:t.right,r=a?t.right:t.left-e,s=a?Ql:Gl,o=a?Gl:Ql):(n=a?t.left:t.right-e,r=a?t.right-e:t.left,i=t.left+(t.width-e)/2,s=a?Gl:Ql,o=a?Ql:Gl);var c=this.richTooltip?this.determineValidPositionOptions(n,r):this.determineValidPositionOptions(i,n,r);if(this.xTooltipPos===Cl.START&&c.has(n))return{distance:n,xTransformOrigin:s};if(this.xTooltipPos===Cl.END&&c.has(r))return{distance:r,xTransformOrigin:o};if(this.xTooltipPos===Cl.CENTER&&c.has(i))return{distance:i,xTransformOrigin:Xl};var u=(this.richTooltip?[{distance:r,xTransformOrigin:o},{distance:n,xTransformOrigin:s}]:[{distance:i,xTransformOrigin:Xl},{distance:n,xTransformOrigin:s},{distance:r,xTransformOrigin:o}]).find((function(t){var e=t.distance;return c.has(e)}));return u||(t.left<0?{distance:this.minViewportTooltipThreshold,xTransformOrigin:Gl}:{distance:this.adapter.getViewportWidth()-(e+this.minViewportTooltipThreshold),xTransformOrigin:Ql})},e.prototype.determineValidPositionOptions=function(){for(var t,e,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=new Set,s=new Set;try{for(var o=_t(n),a=o.next();!a.done;a=o.next()){var c=a.value;this.positionHonorsViewportThreshold(c)?i.add(c):this.positionDoesntCollideWithViewport(c)&&s.add(c)}}catch(u){t={error:u}}finally{try{a&&!a.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}return i.size?i:s},e.prototype.positionHonorsViewportThreshold=function(t){var e=this.adapter.getViewportWidth();return t+this.adapter.getTooltipSize().width<=e-this.minViewportTooltipThreshold&&t>=this.minViewportTooltipThreshold},e.prototype.positionDoesntCollideWithViewport=function(t){var e=this.adapter.getViewportWidth();return t+this.adapter.getTooltipSize().width<=e&&t>=0},e.prototype.calculateYTooltipDistance=function(t,e){var n=t.bottom+this.anchorGap,r=t.top-(this.anchorGap+e),i=this.determineValidYPositionOptions(r,n);return this.yTooltipPos===Dl.ABOVE&&i.has(r)?{distance:r,yTransformOrigin:Jl}:this.yTooltipPos===Dl.BELOW&&i.has(n)||i.has(n)?{distance:n,yTransformOrigin:Yl}:i.has(r)?{distance:r,yTransformOrigin:Jl}:{distance:n,yTransformOrigin:Yl}},e.prototype.determineValidYPositionOptions=function(t,e){var n=new Set,r=new Set;return this.yPositionHonorsViewportThreshold(t)?n.add(t):this.yPositionDoesntCollideWithViewport(t)&&r.add(t),this.yPositionHonorsViewportThreshold(e)?n.add(e):this.yPositionDoesntCollideWithViewport(e)&&r.add(e),n.size?n:r},e.prototype.yPositionHonorsViewportThreshold=function(t){var e=this.adapter.getViewportHeight();return t+this.adapter.getTooltipSize().height+this.minViewportTooltipThreshold<=e&&t>=this.minViewportTooltipThreshold},e.prototype.yPositionDoesntCollideWithViewport=function(t){var e=this.adapter.getViewportHeight();return t+this.adapter.getTooltipSize().height<=e&&t>=0},e.prototype.repositionTooltipOnAnchorMove=function(){var t=this.adapter.getAnchorBoundingRect();t&&this.anchorRect&&(t.top===this.anchorRect.top&&t.left===this.anchorRect.left&&t.height===this.anchorRect.height&&t.width===this.anchorRect.width||(this.anchorRect=t,this.parentRect=this.adapter.getParentBoundingRect(),this.richTooltip?this.positionRichTooltip():this.positionPlainTooltip()))},e.prototype.setCaretPositionStyles=function(t){var e=this.calculateCaretPositionOnTooltip(t);return e?(this.adapter.clearTooltipCaretStyles(),this.adapter.setTooltipCaretStyle(e.yAlignment,e.yAxisPx),this.adapter.setTooltipCaretStyle(e.xAlignment,e.xAxisPx),this.adapter.setTooltipCaretStyle("transform","rotate("+e.rotation+")"),this.adapter.setTooltipCaretStyle("transform-origin",e.yAlignment+" "+e.xAlignment),{yTransformOrigin:e.yAxisPx,xTransformOrigin:e.xAxisPx}):{yTransformOrigin:0,xTransformOrigin:0}},e.prototype.calculateCaretPositionOnTooltip=function(t){var e=!this.adapter.isRTL(),n=this.adapter.getComputedStyleProperty("width"),r=this.adapter.getComputedStyleProperty("height"),i=this.adapter.getTooltipCaretSize();if(n&&r&&i){var s=i.width*Math.sqrt(2),o="calc(("+n+" - "+s+"px) / 2)",a="calc(("+r+" - "+s+"px) / 2)",c="0",u=$l+"px",l="45deg",h="-45deg";switch(t){case Kl.BELOW_CENTER:return{yAlignment:Yl,xAlignment:Gl,yAxisPx:c,xAxisPx:o,rotation:h};case Kl.BELOW_END:return{yAlignment:Yl,xAlignment:e?Ql:Gl,yAxisPx:c,xAxisPx:u,rotation:e?l:h};case Kl.BELOW_START:return{yAlignment:Yl,xAlignment:e?Gl:Ql,yAxisPx:c,xAxisPx:u,rotation:e?h:l};case Kl.TOP_SIDE_END:return{yAlignment:Yl,xAlignment:e?Gl:Ql,yAxisPx:u,xAxisPx:c,rotation:e?l:h};case Kl.CENTER_SIDE_END:return{yAlignment:Yl,xAlignment:e?Gl:Ql,yAxisPx:a,xAxisPx:c,rotation:e?l:h};case Kl.BOTTOM_SIDE_END:return{yAlignment:Jl,xAlignment:e?Gl:Ql,yAxisPx:u,xAxisPx:c,rotation:e?h:l};case Kl.TOP_SIDE_START:return{yAlignment:Yl,xAlignment:e?Ql:Gl,yAxisPx:u,xAxisPx:c,rotation:e?h:l};case Kl.CENTER_SIDE_START:return{yAlignment:Yl,xAlignment:e?Ql:Gl,yAxisPx:a,xAxisPx:c,rotation:e?h:l};case Kl.BOTTOM_SIDE_START:return{yAlignment:Jl,xAlignment:e?Ql:Gl,yAxisPx:u,xAxisPx:c,rotation:e?l:h};case Kl.ABOVE_CENTER:return{yAlignment:Jl,xAlignment:Gl,yAxisPx:c,xAxisPx:o,rotation:l};case Kl.ABOVE_END:return{yAlignment:Jl,xAlignment:e?Ql:Gl,yAxisPx:c,xAxisPx:u,rotation:e?h:l};default:case Kl.ABOVE_START:return{yAlignment:Jl,xAlignment:e?Gl:Ql,yAxisPx:c,xAxisPx:u,rotation:e?l:h}}}},e.prototype.clearShowTimeout=function(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)},e.prototype.clearHideTimeout=function(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)},e.prototype.attachScrollHandler=function(t){var e=this;this.addAncestorScrollEventListeners.push((function(){t("scroll",e.windowScrollHandler)}))},e.prototype.removeScrollHandler=function(t){var e=this;this.removeAncestorScrollEventListeners.push((function(){t("scroll",e.windowScrollHandler)}))},e.prototype.destroy=function(){var t,e;this.frameId&&(cancelAnimationFrame(this.frameId),this.frameId=null),this.clearHideTimeout(),this.clearShowTimeout(),this.adapter.removeClass(Mh),this.adapter.removeClass(Uh),this.adapter.removeClass(Vh),this.adapter.removeClass(Fh),this.adapter.removeClass(Hh),this.richTooltip&&(this.adapter.deregisterEventHandler("focusout",this.richTooltipFocusOutHandler),this.persistentTooltip||(this.adapter.deregisterEventHandler("mouseenter",this.richTooltipMouseEnterHandler),this.adapter.deregisterEventHandler("mouseleave",this.richTooltipMouseLeaveHandler))),this.adapter.deregisterDocumentEventHandler("click",this.documentClickHandler),this.adapter.deregisterDocumentEventHandler("keydown",this.documentKeydownHandler),this.adapter.deregisterWindowEventHandler("scroll",this.windowScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler);try{for(var n=_t(this.removeAncestorScrollEventListeners),r=n.next();!r.done;r=n.next()){(0,r.value)()}}catch(i){t={error:i}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.animFrame.cancelAll()},e}(xl);const jh=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,zh=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function Kh(t){let e,n=[];const r=t.$on;function i(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}(t,e)}return t.$on=(i,s)=>{let o=i,a=()=>{};e?a=e(o,s):n.push([o,s]);const c=o.match(jh),u=o.match(zh),l=c||u;if(c&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',o),l){const t=o.split(c?":":"$");o=t[0]}const h=r.call(t,o,s);return(...t)=>(a(),h(...t))},t=>{const r=[],s={};e=(e,n)=>{let o=e,a=n,c=!1;const u=o.match(jh),l=o.match(zh);if(u||l){const t=o.split(u?":":"$");o=t[0],c=Object.fromEntries(t.slice(1).map((t=>[t,!0]))),c.nonpassive&&(c.passive=!1,delete c.nonpassive),c.preventDefault&&(h=a,a=function(t){return t.preventDefault(),h.call(this,t)},delete c.preventDefault),c.stopPropagation&&(a=function(t){return function(e){return e.stopPropagation(),t.call(this,e)}}(a),delete c.stopPropagation)}var h;const f=C(t,o,a,c),d=()=>{f();const t=r.indexOf(d);t>-1&&r.splice(t,1)};return r.push(d),!o in s&&(s[o]=C(t,o,i)),d};for(let i=0;i<n.length;i++)e(n[i][0],n[i][1]);return{destroy:()=>{for(let t=0;t<r.length;t++)r[t]();for(let t of Object.entries(s))t[1]()}}}}function Wh(t){return Object.entries(t).filter((([t,e])=>""!==t&&e)).map((([t])=>t)).join(" ")}function Gh(t,e){let n=Object.getOwnPropertyNames(t);const r={};for(let i=0;i<n.length;i++){const s=n[i],o=s.indexOf("$");-1!==o&&-1!==e.indexOf(s.substring(0,o+1))||-1===e.indexOf(s)&&(r[s]=t[s])}return r}function Qh(t,e){let n=Object.getOwnPropertyNames(t);const r={};for(let i=0;i<n.length;i++){const s=n[i];s.substring(0,e.length)===e&&(r[s.substring(e.length)]=t[s])}return r}function Xh(t,e){let n=[];if(e)for(let r=0;r<e.length;r++){const i=Array.isArray(e[r]),s=i?e[r][0]:e[r];i&&e[r].length>1?n.push(s(t,e[r][1])):n.push(s(t))}return{update(t){if((t&&t.length||0)!=n.length)throw new Error("You must not change the length of an actions array.");if(t)for(let e=0;e<t.length;e++)if(n[e]&&"update"in n[e]){Array.isArray(t[e])&&t[e].length>1?n[e].update(t[e][1]):n[e].update()}},destroy(){for(let t=0;t<n.length;t++)n[t]&&"destroy"in n[t]&&n[t].destroy()}}}function Yh(t){let e,n,r,i,o,c,u,f,d,m,y,v,w,S;const I=t[28].default,x=p(I,t,t[27],null);let N=[{class:r=Wh({[t[6]]:!0,"mdc-tooltip__surface":!0,"mdc-tooltip__surface-animation":!0})},{style:i=Object.entries(t[13]).map(Zh).concat([t[7]]).join(" ")},Qh(t[18],"surface$")],k={};for(let s=0;s<N.length;s+=1)k=a(k,N[s]);let L=[{class:o=Wh(s({[t[1]]:!0,"mdc-tooltip":!0,"mdc-tooltip--rich":t[17]},t[10]))},{style:c=Object.entries(t[11]).map(tf).concat([t[2]]).join(" ")},{role:u=t[17]&&t[5]?"dialog":"tooltip"},{"aria-hidden":"true"},{id:t[3]},{tabindex:f=t[17]&&t[4]?"-1":null},{"data-mdc-tooltip-persist":d=t[17]&&t[4]?"true":null},{"data-mdc-tooltip-persistent":m=t[17]&&t[4]?"true":null},t[12],Gh(t[18],["surface$"])],P={};for(let s=0;s<L.length;s+=1)P=a(P,L[s]);return{c(){e=A("div"),n=A("div"),x&&x.c(),this.h()},l(t){e=O(t,"DIV",{class:!0,style:!0,role:!0,"aria-hidden":!0,id:!0,tabindex:!0,"data-mdc-tooltip-persist":!0,"data-mdc-tooltip-persistent":!0});var r=R(e);n=O(r,"DIV",{class:!0,style:!0});var i=R(n);x&&x.l(i),i.forEach(_),r.forEach(_),this.h()},h(){D(n,k),D(e,P)},m(r,i){T(r,e,i),b(e,n),x&&x.m(n,null),t[29](e),v=!0,w||(S=[E(y=Xh.call(null,e,t[0])),E(t[14].call(null,e)),C(e,"transitionend",t[30])],w=!0)},p(t,a){x&&x.p&&(!v||134217728&a[0])&&g(x,I,t,t[27],a,null,null),D(n,k=at(N,[(!v||64&a[0]&&r!==(r=Wh({[t[6]]:!0,"mdc-tooltip__surface":!0,"mdc-tooltip__surface-animation":!0})))&&{class:r},(!v||8320&a[0]&&i!==(i=Object.entries(t[13]).map(Zh).concat([t[7]]).join(" ")))&&{style:i},262144&a[0]&&Qh(t[18],"surface$")])),D(e,P=at(L,[(!v||1026&a[0]&&o!==(o=Wh(s({[t[1]]:!0,"mdc-tooltip":!0,"mdc-tooltip--rich":t[17]},t[10]))))&&{class:o},(!v||2052&a[0]&&c!==(c=Object.entries(t[11]).map(tf).concat([t[2]]).join(" ")))&&{style:c},(!v||32&a[0]&&u!==(u=t[17]&&t[5]?"dialog":"tooltip"))&&{role:u},{"aria-hidden":"true"},(!v||8&a[0])&&{id:t[3]},(!v||16&a[0]&&f!==(f=t[17]&&t[4]?"-1":null))&&{tabindex:f},(!v||16&a[0]&&d!==(d=t[17]&&t[4]?"true":null))&&{"data-mdc-tooltip-persist":d},(!v||16&a[0]&&m!==(m=t[17]&&t[4]?"true":null))&&{"data-mdc-tooltip-persistent":m},4096&a[0]&&t[12],262144&a[0]&&Gh(t[18],["surface$"])])),y&&h(y.update)&&1&a[0]&&y.update.call(null,t[0])},i(t){v||(st(x,t),v=!0)},o(t){ot(x,t),v=!1},d(n){n&&_(e),x&&x.d(n),t[29](null),w=!1,l(S)}}}let Jh=0;const Zh=([t,e])=>`${t}: ${e};`,tf=([t,e])=>`${t}: ${e};`;function ef(t,e,n){const r=["use","class","style","id","unbounded","xPos","yPos","persistent","interactive","surface$class","surface$style","attachScrollHandler","removeScrollHandler","getElement"];let i,s,o=v(e,r),{$$slots:c={},$$scope:u}=e;const l=Kh(F());let h,f,{use:p=[]}=e,{class:m=""}=e,{style:g=""}=e,{id:E="SMUI-tooltip-"+Jh++}=e,{unbounded:b=!1}=e,{xPos:T="detected"}=e,{yPos:_="detected"}=e,{persistent:A=!1}=e,{interactive:S=A}=e,{surface$class:I=""}=e,{surface$style:x=""}=e,C={setParent(t){Object.defineProperty(this,"parent",{value:t})},setNextSibling(t){Object.defineProperty(this,"nextSibling",{value:t})}},N={},D={},R={},O={},k=q("SMUI:tooltip:wrapper:anchor");d(t,k,(t=>n(26,i=t)));let L=q("SMUI:tooltip:wrapper:tooltip");d(t,L,(t=>n(31,s=t)));const P=q("SMUI:tooltip:rich");let M=null;var V;function U(t){t.removeEventListener("focusout",Y),P&&A?(t.removeEventListener("click",J),t.removeEventListener("keydown",J)):(t.removeEventListener("mouseenter",Z),t.removeEventListener("focusin",tt),t.removeEventListener("mouseleave",et),t.removeEventListener("touchstart",nt),t.removeEventListener("touchend",rt)),P&&S?(t.removeAttribute("aria-haspopup"),t.removeAttribute("aria-expanded"),t.removeAttribute("data-tooltip-id")):t.removeAttribute("aria-describedby"),f.destroy()}function $(t){t.addEventListener("focusout",Y),P&&A?(t.addEventListener("click",J),t.addEventListener("keydown",J)):(t.addEventListener("mouseenter",Z),t.addEventListener("focusin",tt),t.addEventListener("mouseleave",et),t.addEventListener("touchstart",nt),t.addEventListener("touchend",rt)),P&&S?(t.setAttribute("aria-haspopup","dialog"),t.setAttribute("aria-expanded","false"),t.setAttribute("data-tooltip-id",E)):t.setAttribute("aria-describedby",E),P||i&&document.body!==it().parentNode&&(C.setParent(it().parentNode),C.setNextSibling(it().nextSibling),document.body.appendChild(it())),f.init()}function B(t){return t in N?N[t]:it().classList.contains(t)}function j(t){N[t]||n(10,N[t]=!0,N)}function K(t){t in N&&!N[t]||n(10,N[t]=!1,N)}function W(t,e){D[t]!=e&&(""===e||null==e?(delete D[t],n(11,D)):n(11,D[t]=e,D))}function G(t,e){O[t]!=e&&(""===e||null==e?(delete O[t],n(13,O)):n(13,O[t]=e,O))}function Q(t){return t in R?R[t]:it().getAttribute(t)}function X(t,e){R[t]!==e&&n(12,R[t]=e,R)}function Y(t){h.contains(t.relatedTarget)||f&&f.hide()}function J(t){"keydown"===t.type&&"Enter"!==t.key&&" "!==t.key||f&&f.handleAnchorClick()}function Z(){f&&f.handleAnchorMouseEnter()}function tt(t){f&&f.handleAnchorFocus(t)}function et(){f&&f.handleAnchorMouseLeave()}function nt(){f&&f.handleAnchorTouchstart()}function rt(){f&&f.handleAnchorTouchend()}function it(){return h}H((()=>(n(8,f=new qh({getAttribute:Q,setAttribute:X,addClass:j,hasClass:B,removeClass:K,getComputedStyleProperty:t=>{const e=it();let n=getComputedStyle(e).getPropertyValue(t);return"auto"===n&&(e.classList.add("smui-banner--force-show"),n=getComputedStyle(e).getPropertyValue(t),e.classList.remove("smui-banner--force-show")),n},setStyleProperty:W,setSurfaceStyleProperty:G,getViewportWidth:()=>window.innerWidth,getViewportHeight:()=>window.innerHeight,getTooltipSize:()=>{const t=it();let e={width:t.offsetWidth,height:t.offsetHeight};return 0!==e.width&&0!==e.height||(t.classList.add("smui-banner--force-show"),e={width:t.offsetWidth,height:t.offsetHeight},t.classList.remove("smui-banner--force-show")),e},getAnchorBoundingRect:()=>i?i.getBoundingClientRect():null,getParentBoundingRect:()=>{let t=it().parentNode;return P||(t=document.body),t.getBoundingClientRect()||null},getAnchorAttribute:t=>i?i.getAttribute(t):null,setAnchorAttribute:(t,e)=>{i&&i.setAttribute(t,e)},isRTL:()=>"rtl"===getComputedStyle(it()).direction,anchorContainsElement:t=>!(!i||!i.contains(t)),tooltipContainsElement:t=>it().contains(t),focusAnchorElement:()=>{i&&i.focus()},registerEventHandler:(t,e)=>{it().addEventListener(t,e)},deregisterEventHandler:(t,e)=>{it().removeEventListener(t,e)},registerAnchorEventHandler:(t,e)=>{i&&i.addEventListener(t,e)},deregisterAnchorEventHandler:(t,e)=>{i&&i.removeEventListener(t,e)},registerDocumentEventHandler:(t,e)=>{document.body.addEventListener(t,e)},deregisterDocumentEventHandler:(t,e)=>{document.body.removeEventListener(t,e)},registerWindowEventHandler:(t,e)=>{window.addEventListener(t,e,"scroll"===t&&{capture:!0,passive:!0})},deregisterWindowEventHandler:(t,e)=>{window.removeEventListener(t,e,"scroll"===t&&{capture:!0,passive:!0})},notifyHidden:()=>{!function(t,e,n={},r={bubbles:!0}){if("undefined"!=typeof Event&&t){const i=new Event(e,r);i.detail=n,("getElement"in t?t.getElement():t).dispatchEvent(i)}}(it(),"MDCTooltip:hidden")}})),w(L,s=h,s),()=>{i&&U(i)}))),V=()=>{!P&&"undefined"!=typeof document&&document.body===it().parentNode&&C.parent.insertBefore&&C.parent.insertBefore(it(),C.nextSibling)},F().$$.on_destroy.push(V);return t.$$set=t=>{e=a(a({},e),y(t)),n(18,o=v(e,r)),"use"in t&&n(0,p=t.use),"class"in t&&n(1,m=t.class),"style"in t&&n(2,g=t.style),"id"in t&&n(3,E=t.id),"unbounded"in t&&n(19,b=t.unbounded),"xPos"in t&&n(20,T=t.xPos),"yPos"in t&&n(21,_=t.yPos),"persistent"in t&&n(4,A=t.persistent),"interactive"in t&&n(5,S=t.interactive),"surface$class"in t&&n(6,I=t.surface$class),"surface$style"in t&&n(7,x=t.surface$style),"$$scope"in t&&n(27,u=t.$$scope)},t.$$.update=()=>{100663552&t.$$.dirty[0]&&f&&M!==i&&(M&&U(M),i&&$(i),n(25,M=i)),524544&t.$$.dirty[0]&&f&&f.setAnchorBoundaryType(Ol[b?"UNBOUNDED":"BOUNDED"]),3145984&t.$$.dirty[0]&&f&&f.setTooltipPosition({xPos:Cl[T.toUpperCase()],yPos:Dl[_.toUpperCase()]})},[p,m,g,E,A,S,I,x,f,h,N,D,R,O,l,k,L,P,o,b,T,_,function(t){f&&f.attachScrollHandler(t)},function(t){f&&f.removeScrollHandler(t)},it,M,i,u,c,function(t){z[t?"unshift":"push"]((()=>{h=t,n(9,h)}))},()=>f&&f.handleTransitionEnd()]}class nf extends mt{constructor(t){super(),pt(this,t,ef,Yh,f,{use:0,class:1,style:2,id:3,unbounded:19,xPos:20,yPos:21,persistent:4,interactive:5,surface$class:6,surface$style:7,attachScrollHandler:22,removeScrollHandler:23,getElement:24},[-1,-1])}get attachScrollHandler(){return this.$$.ctx[22]}get removeScrollHandler(){return this.$$.ctx[23]}get getElement(){return this.$$.ctx[24]}}function rf(t){let e;const n=t[12].default,r=p(n,t,t[11],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,i){r&&r.p&&(!e||2048&i)&&g(r,n,t,t[11],i,null,null)},i(t){e||(st(r,t),e=!0)},o(t){ot(r,t),e=!1},d(t){r&&r.d(t)}}}function sf(t){let e,n,r,i,s,o;const c=t[12].default,u=p(c,t,t[11],null);let f=[{class:n=Wh({[t[1]]:!0,"mdc-tooltip-wrapper--rich":!0})},t[7]],d={};for(let l=0;l<f.length;l+=1)d=a(d,f[l]);return{c(){e=A("div"),u&&u.c(),this.h()},l(t){e=O(t,"DIV",{class:!0});var n=R(e);u&&u.l(n),n.forEach(_),this.h()},h(){D(e,d)},m(n,a){T(n,e,a),u&&u.m(e,null),t[13](e),i=!0,s||(o=[E(r=Xh.call(null,e,t[0])),E(t[4].call(null,e))],s=!0)},p(t,s){u&&u.p&&(!i||2048&s)&&g(u,c,t,t[11],s,null,null),D(e,d=at(f,[(!i||2&s&&n!==(n=Wh({[t[1]]:!0,"mdc-tooltip-wrapper--rich":!0})))&&{class:n},128&s&&t[7]])),r&&h(r.update)&&1&s&&r.update.call(null,t[0])},i(t){i||(st(u,t),i=!0)},o(t){ot(u,t),i=!1},d(n){n&&_(e),u&&u.d(n),t[13](null),s=!1,l(o)}}}function of(t){let e,n,r,i;const s=[sf,rf],o=[];function a(t,e){return t[2]?0:1}return e=a(t),n=o[e]=s[e](t),{c(){n.c(),r=x()},l(t){n.l(t),r=x()},m(t,n){o[e].m(t,n),T(t,r,n),i=!0},p(t,[i]){let c=e;e=a(t),e===c?o[e].p(t,i):(rt(),ot(o[c],1,1,(()=>{o[c]=null})),it(),n=o[e],n?n.p(t,i):(n=o[e]=s[e](t),n.c()),st(n,1),n.m(r.parentNode,r))},i(t){i||(st(n),i=!0)},o(t){ot(n),i=!1},d(t){o[e].d(t),t&&_(r)}}}function af(t,e,n){const r=["use","class","rich","getElement"];let i,s,o=v(e,r),{$$slots:c={},$$scope:u}=e;const l=Kh(F());let h,{use:f=[]}=e,{class:p=""}=e,{rich:m=!1}=e;const g=yt(null);d(t,g,(t=>n(10,s=t)));const E=yt(null);return d(t,E,(t=>n(9,i=t))),B("SMUI:tooltip:wrapper:anchor",g),B("SMUI:tooltip:wrapper:tooltip",E),B("SMUI:tooltip:rich",m),t.$$set=t=>{e=a(a({},e),y(t)),n(7,o=v(e,r)),"use"in t&&n(0,f=t.use),"class"in t&&n(1,p=t.class),"rich"in t&&n(2,m=t.rich),"$$scope"in t&&n(11,u=t.$$scope)},t.$$.update=()=>{1536&t.$$.dirty&&i&&!s&&w(g,s=i.previousElementSibling,s)},[f,p,m,h,l,g,E,o,function(){return h},i,s,u,c,function(t){z[t?"unshift":"push"]((()=>{h=t,n(3,h)}))}]}class cf extends mt{constructor(t){super(),pt(this,t,af,of,f,{use:0,class:1,rich:2,getElement:8})}get getElement(){return this.$$.ctx[8]}}var uf={value:()=>{}};function lf(){for(var t,e=0,n=arguments.length,r={};e<n;++e){if(!(t=arguments[e]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t);r[t]=[]}return new hf(r)}function hf(t){this._=t}function ff(t,e){return t.trim().split(/^|\s+/).map((function(t){var n="",r=t.indexOf(".");if(r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:n}}))}function df(t,e){for(var n,r=0,i=t.length;r<i;++r)if((n=t[r]).name===e)return n.value}function pf(t,e,n){for(var r=0,i=t.length;r<i;++r)if(t[r].name===e){t[r]=uf,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=n&&t.push({name:e,value:n}),t}hf.prototype=lf.prototype={constructor:hf,on:function(t,e){var n,r=this._,i=ff(t+"",r),s=-1,o=i.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++s<o;)if(n=(t=i[s]).type)r[n]=pf(r[n],t.name,e);else if(null==e)for(n in r)r[n]=pf(r[n],t.name,null);return this}for(;++s<o;)if((n=(t=i[s]).type)&&(n=df(r[n],t.name)))return n},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new hf(t)},call:function(t,e){if((n=arguments.length-2)>0)for(var n,r,i=new Array(n),s=0;s<n;++s)i[s]=arguments[s+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(s=0,n=(r=this._[t]).length;s<n;++s)r[s].value.apply(e,i)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,s=r.length;i<s;++i)r[i].value.apply(e,n)}};var mf="http://www.w3.org/1999/xhtml",gf={svg:"http://www.w3.org/2000/svg",xhtml:mf,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function yf(t){var e=t+="",n=e.indexOf(":");return n>=0&&"xmlns"!==(e=t.slice(0,n))&&(t=t.slice(n+1)),gf.hasOwnProperty(e)?{space:gf[e],local:t}:t}function vf(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===mf&&e.documentElement.namespaceURI===mf?e.createElement(t):e.createElementNS(n,t)}}function wf(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Ef(t){var e=yf(t);return(e.local?wf:vf)(e)}function bf(){}function Tf(t){return null==t?bf:function(){return this.querySelector(t)}}function _f(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function Af(){return[]}function Sf(t){return null==t?Af:function(){return this.querySelectorAll(t)}}function If(t){return function(){return this.matches(t)}}function xf(t){return function(e){return e.matches(t)}}var Cf=Array.prototype.find;function Nf(){return this.firstElementChild}var Df=Array.prototype.filter;function Rf(){return this.children}function Of(t){return new Array(t.length)}function kf(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}function Lf(t){return function(){return t}}function Pf(t,e,n,r,i,s){for(var o,a=0,c=e.length,u=s.length;a<u;++a)(o=e[a])?(o.__data__=s[a],r[a]=o):n[a]=new kf(t,s[a]);for(;a<c;++a)(o=e[a])&&(i[a]=o)}function Mf(t,e,n,r,i,s,o){var a,c,u,l=new Map,h=e.length,f=s.length,d=new Array(h);for(a=0;a<h;++a)(c=e[a])&&(d[a]=u=o.call(c,c.__data__,a,e)+"",l.has(u)?i[a]=c:l.set(u,c));for(a=0;a<f;++a)u=o.call(t,s[a],a,s)+"",(c=l.get(u))?(r[a]=c,c.__data__=s[a],l.delete(u)):n[a]=new kf(t,s[a]);for(a=0;a<h;++a)(c=e[a])&&l.get(d[a])===c&&(i[a]=c)}function Vf(t){return t.__data__}function Uf(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function Ff(t){return function(){this.removeAttribute(t)}}function Hf(t){return function(){this.removeAttributeNS(t.space,t.local)}}function $f(t,e){return function(){this.setAttribute(t,e)}}function Bf(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function qf(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttribute(t):this.setAttribute(t,n)}}function jf(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function zf(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function Kf(t){return function(){this.style.removeProperty(t)}}function Wf(t,e,n){return function(){this.style.setProperty(t,e,n)}}function Gf(t,e,n){return function(){var r=e.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,n)}}function Qf(t,e){return t.style.getPropertyValue(e)||zf(t).getComputedStyle(t,null).getPropertyValue(e)}function Xf(t){return function(){delete this[t]}}function Yf(t,e){return function(){this[t]=e}}function Jf(t,e){return function(){var n=e.apply(this,arguments);null==n?delete this[t]:this[t]=n}}function Zf(t){return t.trim().split(/^|\s+/)}function td(t){return t.classList||new ed(t)}function ed(t){this._node=t,this._names=Zf(t.getAttribute("class")||"")}function nd(t,e){for(var n=td(t),r=-1,i=e.length;++r<i;)n.add(e[r])}function rd(t,e){for(var n=td(t),r=-1,i=e.length;++r<i;)n.remove(e[r])}function id(t){return function(){nd(this,t)}}function sd(t){return function(){rd(this,t)}}function od(t,e){return function(){(e.apply(this,arguments)?nd:rd)(this,t)}}function ad(){this.textContent=""}function cd(t){return function(){this.textContent=t}}function ud(t){return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}function ld(){this.innerHTML=""}function hd(t){return function(){this.innerHTML=t}}function fd(t){return function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}}function dd(){this.nextSibling&&this.parentNode.appendChild(this)}function pd(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function md(){return null}function gd(){var t=this.parentNode;t&&t.removeChild(this)}function yd(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function vd(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function wd(t){return t.trim().split(/^|\s+/).map((function(t){var e="",n=t.indexOf(".");return n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),{type:t,name:e}}))}function Ed(t){return function(){var e=this.__on;if(e){for(var n,r=0,i=-1,s=e.length;r<s;++r)n=e[r],t.type&&n.type!==t.type||n.name!==t.name?e[++i]=n:this.removeEventListener(n.type,n.listener,n.options);++i?e.length=i:delete this.__on}}}function bd(t,e,n){return function(){var r,i=this.__on,s=function(t){return function(e){t.call(this,e,this.__data__)}}(e);if(i)for(var o=0,a=i.length;o<a;++o)if((r=i[o]).type===t.type&&r.name===t.name)return this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=n),void(r.value=e);this.addEventListener(t.type,s,n),r={type:t.type,name:t.name,value:e,listener:s,options:n},i?i.push(r):this.__on=[r]}}function Td(t,e,n){var r=zf(t),i=r.CustomEvent;"function"==typeof i?i=new i(e,n):(i=r.document.createEvent("Event"),n?(i.initEvent(e,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(e,!1,!1)),t.dispatchEvent(i)}function _d(t,e){return function(){return Td(this,t,e)}}function Ad(t,e){return function(){return Td(this,t,e.apply(this,arguments))}}kf.prototype={constructor:kf,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}},ed.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var Sd=[null];function Id(t,e){this._groups=t,this._parents=e}function xd(){return new Id([[document.documentElement]],Sd)}function Cd(t){return"string"==typeof t?new Id([[document.querySelector(t)]],[document.documentElement]):new Id([[t]],Sd)}function Nd(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function Dd(t,e){var n=Object.create(t.prototype);for(var r in e)n[r]=e[r];return n}function Rd(){}Id.prototype=xd.prototype={constructor:Id,select:function(t){"function"!=typeof t&&(t=Tf(t));for(var e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i)for(var s,o,a=e[i],c=a.length,u=r[i]=new Array(c),l=0;l<c;++l)(s=a[l])&&(o=t.call(s,s.__data__,l,a))&&("__data__"in s&&(o.__data__=s.__data__),u[l]=o);return new Id(r,this._parents)},selectAll:function(t){t="function"==typeof t?function(t){return function(){var e=t.apply(this,arguments);return null==e?[]:_f(e)}}(t):Sf(t);for(var e=this._groups,n=e.length,r=[],i=[],s=0;s<n;++s)for(var o,a=e[s],c=a.length,u=0;u<c;++u)(o=a[u])&&(r.push(t.call(o,o.__data__,u,a)),i.push(o));return new Id(r,i)},selectChild:function(t){return this.select(null==t?Nf:function(t){return function(){return Cf.call(this.children,t)}}("function"==typeof t?t:xf(t)))},selectChildren:function(t){return this.selectAll(null==t?Rf:function(t){return function(){return Df.call(this.children,t)}}("function"==typeof t?t:xf(t)))},filter:function(t){"function"!=typeof t&&(t=If(t));for(var e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i)for(var s,o=e[i],a=o.length,c=r[i]=[],u=0;u<a;++u)(s=o[u])&&t.call(s,s.__data__,u,o)&&c.push(s);return new Id(r,this._parents)},data:function(t,e){if(!arguments.length)return Array.from(this,Vf);var n=e?Mf:Pf,r=this._parents,i=this._groups;"function"!=typeof t&&(t=Lf(t));for(var s=i.length,o=new Array(s),a=new Array(s),c=new Array(s),u=0;u<s;++u){var l=r[u],h=i[u],f=h.length,d=_f(t.call(l,l&&l.__data__,u,r)),p=d.length,m=a[u]=new Array(p),g=o[u]=new Array(p),y=c[u]=new Array(f);n(l,h,m,g,y,d,e);for(var v,w,E=0,b=0;E<p;++E)if(v=m[E]){for(E>=b&&(b=E+1);!(w=g[b])&&++b<p;);v._next=w||null}}return(o=new Id(o,r))._enter=a,o._exit=c,o},enter:function(){return new Id(this._enter||this._groups.map(Of),this._parents)},exit:function(){return new Id(this._exit||this._groups.map(Of),this._parents)},join:function(t,e,n){var r=this.enter(),i=this,s=this.exit();return r="function"==typeof t?t(r):r.append(t+""),null!=e&&(i=e(i)),null==n?s.remove():n(s),r&&i?r.merge(i).order():i},merge:function(t){if(!(t instanceof Id))throw new Error("invalid merge");for(var e=this._groups,n=t._groups,r=e.length,i=n.length,s=Math.min(r,i),o=new Array(r),a=0;a<s;++a)for(var c,u=e[a],l=n[a],h=u.length,f=o[a]=new Array(h),d=0;d<h;++d)(c=u[d]||l[d])&&(f[d]=c);for(;a<r;++a)o[a]=e[a];return new Id(o,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var r,i=t[e],s=i.length-1,o=i[s];--s>=0;)(r=i[s])&&(o&&4^r.compareDocumentPosition(o)&&o.parentNode.insertBefore(r,o),o=r);return this},sort:function(t){function e(e,n){return e&&n?t(e.__data__,n.__data__):!e-!n}t||(t=Uf);for(var n=this._groups,r=n.length,i=new Array(r),s=0;s<r;++s){for(var o,a=n[s],c=a.length,u=i[s]=new Array(c),l=0;l<c;++l)(o=a[l])&&(u[l]=o);u.sort(e)}return new Id(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r=t[e],i=0,s=r.length;i<s;++i){var o=r[i];if(o)return o}return null},size:function(){let t=0;for(const e of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var e=this._groups,n=0,r=e.length;n<r;++n)for(var i,s=e[n],o=0,a=s.length;o<a;++o)(i=s[o])&&t.call(i,i.__data__,o,s);return this},attr:function(t,e){var n=yf(t);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((null==e?n.local?Hf:Ff:"function"==typeof e?n.local?jf:qf:n.local?Bf:$f)(n,e))},style:function(t,e,n){return arguments.length>1?this.each((null==e?Kf:"function"==typeof e?Gf:Wf)(t,e,null==n?"":n)):Qf(this.node(),t)},property:function(t,e){return arguments.length>1?this.each((null==e?Xf:"function"==typeof e?Jf:Yf)(t,e)):this.node()[t]},classed:function(t,e){var n=Zf(t+"");if(arguments.length<2){for(var r=td(this.node()),i=-1,s=n.length;++i<s;)if(!r.contains(n[i]))return!1;return!0}return this.each(("function"==typeof e?od:e?id:sd)(n,e))},text:function(t){return arguments.length?this.each(null==t?ad:("function"==typeof t?ud:cd)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?ld:("function"==typeof t?fd:hd)(t)):this.node().innerHTML},raise:function(){return this.each(dd)},lower:function(){return this.each(pd)},append:function(t){var e="function"==typeof t?t:Ef(t);return this.select((function(){return this.appendChild(e.apply(this,arguments))}))},insert:function(t,e){var n="function"==typeof t?t:Ef(t),r=null==e?md:"function"==typeof e?e:Tf(e);return this.select((function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)}))},remove:function(){return this.each(gd)},clone:function(t){return this.select(t?vd:yd)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,e,n){var r,i,s=wd(t+""),o=s.length;if(!(arguments.length<2)){for(a=e?bd:Ed,r=0;r<o;++r)this.each(a(s[r],e,n));return this}var a=this.node().__on;if(a)for(var c,u=0,l=a.length;u<l;++u)for(r=0,c=a[u];r<o;++r)if((i=s[r]).type===c.type&&i.name===c.name)return c.value},dispatch:function(t,e){return this.each(("function"==typeof e?Ad:_d)(t,e))},[Symbol.iterator]:function*(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r,i=t[e],s=0,o=i.length;s<o;++s)(r=i[s])&&(yield r)}};var Od=1/.7,kd="\\s*([+-]?\\d+)\\s*",Ld="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",Pd="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Md=/^#([0-9a-f]{3,8})$/,Vd=new RegExp("^rgb\\("+[kd,kd,kd]+"\\)$"),Ud=new RegExp("^rgb\\("+[Pd,Pd,Pd]+"\\)$"),Fd=new RegExp("^rgba\\("+[kd,kd,kd,Ld]+"\\)$"),Hd=new RegExp("^rgba\\("+[Pd,Pd,Pd,Ld]+"\\)$"),$d=new RegExp("^hsl\\("+[Ld,Pd,Pd]+"\\)$"),Bd=new RegExp("^hsla\\("+[Ld,Pd,Pd,Ld]+"\\)$"),qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function jd(){return this.rgb().formatHex()}function zd(){return this.rgb().formatRgb()}function Kd(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=Md.exec(t))?(n=e[1].length,e=parseInt(e[1],16),6===n?Wd(e):3===n?new Yd(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===n?Gd(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===n?Gd(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=Vd.exec(t))?new Yd(e[1],e[2],e[3],1):(e=Ud.exec(t))?new Yd(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=Fd.exec(t))?Gd(e[1],e[2],e[3],e[4]):(e=Hd.exec(t))?Gd(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=$d.exec(t))?ep(e[1],e[2]/100,e[3]/100,1):(e=Bd.exec(t))?ep(e[1],e[2]/100,e[3]/100,e[4]):qd.hasOwnProperty(t)?Wd(qd[t]):"transparent"===t?new Yd(NaN,NaN,NaN,0):null}function Wd(t){return new Yd(t>>16&255,t>>8&255,255&t,1)}function Gd(t,e,n,r){return r<=0&&(t=e=n=NaN),new Yd(t,e,n,r)}function Qd(t){return t instanceof Rd||(t=Kd(t)),t?new Yd((t=t.rgb()).r,t.g,t.b,t.opacity):new Yd}function Xd(t,e,n,r){return 1===arguments.length?Qd(t):new Yd(t,e,n,null==r?1:r)}function Yd(t,e,n,r){this.r=+t,this.g=+e,this.b=+n,this.opacity=+r}function Jd(){return"#"+tp(this.r)+tp(this.g)+tp(this.b)}function Zd(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function tp(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function ep(t,e,n,r){return r<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new rp(t,e,n,r)}function np(t){if(t instanceof rp)return new rp(t.h,t.s,t.l,t.opacity);if(t instanceof Rd||(t=Kd(t)),!t)return new rp;if(t instanceof rp)return t;var e=(t=t.rgb()).r/255,n=t.g/255,r=t.b/255,i=Math.min(e,n,r),s=Math.max(e,n,r),o=NaN,a=s-i,c=(s+i)/2;return a?(o=e===s?(n-r)/a+6*(n<r):n===s?(r-e)/a+2:(e-n)/a+4,a/=c<.5?s+i:2-s-i,o*=60):a=c>0&&c<1?0:o,new rp(o,a,c,t.opacity)}function rp(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}function ip(t,e,n){return 255*(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)}Nd(Rd,Kd,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:jd,formatHex:jd,formatHsl:function(){return np(this).formatHsl()},formatRgb:zd,toString:zd}),Nd(Yd,Xd,Dd(Rd,{brighter:function(t){return t=null==t?Od:Math.pow(Od,t),new Yd(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Yd(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Jd,formatHex:Jd,formatRgb:Zd,toString:Zd})),Nd(rp,(function(t,e,n,r){return 1===arguments.length?np(t):new rp(t,e,n,null==r?1:r)}),Dd(Rd,{brighter:function(t){return t=null==t?Od:Math.pow(Od,t),new rp(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new rp(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*e,i=2*n-r;return new Yd(ip(t>=240?t-240:t+120,i,r),ip(t,i,r),ip(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}));var sp=t=>()=>t;function op(t){return 1==(t=+t)?ap:function(e,n){return n-e?function(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(r){return Math.pow(t+r*e,n)}}(e,n,t):sp(isNaN(e)?n:e)}}function ap(t,e){var n=e-t;return n?function(t,e){return function(n){return t+n*e}}(t,n):sp(isNaN(t)?e:t)}var cp=function t(e){var n=op(e);function r(t,e){var r=n((t=Xd(t)).r,(e=Xd(e)).r),i=n(t.g,e.g),s=n(t.b,e.b),o=ap(t.opacity,e.opacity);return function(e){return t.r=r(e),t.g=i(e),t.b=s(e),t.opacity=o(e),t+""}}return r.gamma=t,r}(1);function up(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}var lp=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,hp=new RegExp(lp.source,"g");function fp(t,e){var n,r,i,s=lp.lastIndex=hp.lastIndex=0,o=-1,a=[],c=[];for(t+="",e+="";(n=lp.exec(t))&&(r=hp.exec(e));)(i=r.index)>s&&(i=e.slice(s,i),a[o]?a[o]+=i:a[++o]=i),(n=n[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:up(n,r)})),s=hp.lastIndex;return s<e.length&&(i=e.slice(s),a[o]?a[o]+=i:a[++o]=i),a.length<2?c[0]?function(t){return function(e){return t(e)+""}}(c[0].x):function(t){return function(){return t}}(e):(e=c.length,function(t){for(var n,r=0;r<e;++r)a[(n=c[r]).i]=n.x(t);return a.join("")})}var dp,pp=180/Math.PI,mp={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function gp(t,e,n,r,i,s){var o,a,c;return(o=Math.sqrt(t*t+e*e))&&(t/=o,e/=o),(c=t*n+e*r)&&(n-=t*c,r-=e*c),(a=Math.sqrt(n*n+r*r))&&(n/=a,r/=a,c/=a),t*r<e*n&&(t=-t,e=-e,c=-c,o=-o),{translateX:i,translateY:s,rotate:Math.atan2(e,t)*pp,skewX:Math.atan(c)*pp,scaleX:o,scaleY:a}}function yp(t,e,n,r){function i(t){return t.length?t.pop()+" ":""}return function(s,o){var a=[],c=[];return s=t(s),o=t(o),function(t,r,i,s,o,a){if(t!==i||r!==s){var c=o.push("translate(",null,e,null,n);a.push({i:c-4,x:up(t,i)},{i:c-2,x:up(r,s)})}else(i||s)&&o.push("translate("+i+e+s+n)}(s.translateX,s.translateY,o.translateX,o.translateY,a,c),function(t,e,n,s){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),s.push({i:n.push(i(n)+"rotate(",null,r)-2,x:up(t,e)})):e&&n.push(i(n)+"rotate("+e+r)}(s.rotate,o.rotate,a,c),function(t,e,n,s){t!==e?s.push({i:n.push(i(n)+"skewX(",null,r)-2,x:up(t,e)}):e&&n.push(i(n)+"skewX("+e+r)}(s.skewX,o.skewX,a,c),function(t,e,n,r,s,o){if(t!==n||e!==r){var a=s.push(i(s)+"scale(",null,",",null,")");o.push({i:a-4,x:up(t,n)},{i:a-2,x:up(e,r)})}else 1===n&&1===r||s.push(i(s)+"scale("+n+","+r+")")}(s.scaleX,s.scaleY,o.scaleX,o.scaleY,a,c),s=o=null,function(t){for(var e,n=-1,r=c.length;++n<r;)a[(e=c[n]).i]=e.x(t);return a.join("")}}}var vp,wp,Ep=yp((function(t){const e=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?mp:gp(e.a,e.b,e.c,e.d,e.e,e.f)}),"px, ","px)","deg)"),bp=yp((function(t){return null==t?mp:(dp||(dp=document.createElementNS("http://www.w3.org/2000/svg","g")),dp.setAttribute("transform",t),(t=dp.transform.baseVal.consolidate())?gp((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):mp)}),", ",")",")"),Tp=0,_p=0,Ap=0,Sp=0,Ip=0,xp=0,Cp="object"==typeof performance&&performance.now?performance:Date,Np="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Dp(){return Ip||(Np(Rp),Ip=Cp.now()+xp)}function Rp(){Ip=0}function Op(){this._call=this._time=this._next=null}function kp(t,e,n){var r=new Op;return r.restart(t,e,n),r}function Lp(){Ip=(Sp=Cp.now())+xp,Tp=_p=0;try{!function(){Dp(),++Tp;for(var t,e=vp;e;)(t=Ip-e._time)>=0&&e._call.call(null,t),e=e._next;--Tp}()}finally{Tp=0,function(){var t,e,n=vp,r=1/0;for(;n;)n._call?(r>n._time&&(r=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:vp=e);wp=t,Mp(r)}(),Ip=0}}function Pp(){var t=Cp.now(),e=t-Sp;e>1e3&&(xp-=e,Sp=t)}function Mp(t){Tp||(_p&&(_p=clearTimeout(_p)),t-Ip>24?(t<1/0&&(_p=setTimeout(Lp,t-Cp.now()-xp)),Ap&&(Ap=clearInterval(Ap))):(Ap||(Sp=Cp.now(),Ap=setInterval(Pp,1e3)),Tp=1,Np(Lp)))}function Vp(t,e,n){var r=new Op;return e=null==e?0:+e,r.restart((n=>{r.stop(),t(n+e)}),e,n),r}Op.prototype=kp.prototype={constructor:Op,restart:function(t,e,n){if("function"!=typeof t)throw new TypeError("callback is not a function");n=(null==n?Dp():+n)+(null==e?0:+e),this._next||wp===this||(wp?wp._next=this:vp=this,wp=this),this._call=t,this._time=n,Mp()},stop:function(){this._call&&(this._call=null,this._time=1/0,Mp())}};var Up=lf("start","end","cancel","interrupt"),Fp=[];function Hp(t,e,n,r,i,s){var o=t.__transition;if(o){if(n in o)return}else t.__transition={};!function(t,e,n){var r,i=t.__transition;function s(t){n.state=1,n.timer.restart(o,n.delay,n.time),n.delay<=t&&o(t-n.delay)}function o(s){var u,l,h,f;if(1!==n.state)return c();for(u in i)if((f=i[u]).name===n.name){if(3===f.state)return Vp(o);4===f.state?(f.state=6,f.timer.stop(),f.on.call("interrupt",t,t.__data__,f.index,f.group),delete i[u]):+u<e&&(f.state=6,f.timer.stop(),f.on.call("cancel",t,t.__data__,f.index,f.group),delete i[u])}if(Vp((function(){3===n.state&&(n.state=4,n.timer.restart(a,n.delay,n.time),a(s))})),n.state=2,n.on.call("start",t,t.__data__,n.index,n.group),2===n.state){for(n.state=3,r=new Array(h=n.tween.length),u=0,l=-1;u<h;++u)(f=n.tween[u].value.call(t,t.__data__,n.index,n.group))&&(r[++l]=f);r.length=l+1}}function a(e){for(var i=e<n.duration?n.ease.call(null,e/n.duration):(n.timer.restart(c),n.state=5,1),s=-1,o=r.length;++s<o;)r[s].call(t,i);5===n.state&&(n.on.call("end",t,t.__data__,n.index,n.group),c())}function c(){for(var r in n.state=6,n.timer.stop(),delete i[e],i)return;delete t.__transition}i[e]=n,n.timer=kp(s,0,n.time)}(t,n,{name:e,index:r,group:i,on:Up,tween:Fp,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:0})}function $p(t,e){var n=qp(t,e);if(n.state>0)throw new Error("too late; already scheduled");return n}function Bp(t,e){var n=qp(t,e);if(n.state>3)throw new Error("too late; already running");return n}function qp(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function jp(t,e){var n,r;return function(){var i=Bp(this,t),s=i.tween;if(s!==n)for(var o=0,a=(r=n=s).length;o<a;++o)if(r[o].name===e){(r=r.slice()).splice(o,1);break}i.tween=r}}function zp(t,e,n){var r,i;if("function"!=typeof n)throw new Error;return function(){var s=Bp(this,t),o=s.tween;if(o!==r){i=(r=o).slice();for(var a={name:e,value:n},c=0,u=i.length;c<u;++c)if(i[c].name===e){i[c]=a;break}c===u&&i.push(a)}s.tween=i}}function Kp(t,e,n){var r=t._id;return t.each((function(){var t=Bp(this,r);(t.value||(t.value={}))[e]=n.apply(this,arguments)})),function(t){return qp(t,r).value[e]}}function Wp(t,e){var n;return("number"==typeof e?up:e instanceof Kd?cp:(n=Kd(e))?(e=n,cp):fp)(t,e)}function Gp(t){return function(){this.removeAttribute(t)}}function Qp(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Xp(t,e,n){var r,i,s=n+"";return function(){var o=this.getAttribute(t);return o===s?null:o===r?i:i=e(r=o,n)}}function Yp(t,e,n){var r,i,s=n+"";return function(){var o=this.getAttributeNS(t.space,t.local);return o===s?null:o===r?i:i=e(r=o,n)}}function Jp(t,e,n){var r,i,s;return function(){var o,a,c=n(this);if(null!=c)return(o=this.getAttribute(t))===(a=c+"")?null:o===r&&a===i?s:(i=a,s=e(r=o,c));this.removeAttribute(t)}}function Zp(t,e,n){var r,i,s;return function(){var o,a,c=n(this);if(null!=c)return(o=this.getAttributeNS(t.space,t.local))===(a=c+"")?null:o===r&&a===i?s:(i=a,s=e(r=o,c));this.removeAttributeNS(t.space,t.local)}}function tm(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function em(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function nm(t,e){var n,r;function i(){var i=e.apply(this,arguments);return i!==r&&(n=(r=i)&&em(t,i)),n}return i._value=e,i}function rm(t,e){var n,r;function i(){var i=e.apply(this,arguments);return i!==r&&(n=(r=i)&&tm(t,i)),n}return i._value=e,i}function im(t,e){return function(){$p(this,t).delay=+e.apply(this,arguments)}}function sm(t,e){return e=+e,function(){$p(this,t).delay=e}}function om(t,e){return function(){Bp(this,t).duration=+e.apply(this,arguments)}}function am(t,e){return e=+e,function(){Bp(this,t).duration=e}}function cm(t,e){if("function"!=typeof e)throw new Error;return function(){Bp(this,t).ease=e}}function um(t,e,n){var r,i,s=function(t){return(t+"").trim().split(/^|\s+/).every((function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||"start"===t}))}(e)?$p:Bp;return function(){var o=s(this,t),a=o.on;a!==r&&(i=(r=a).copy()).on(e,n),o.on=i}}var lm=xd.prototype.constructor;function hm(t){return function(){this.style.removeProperty(t)}}function fm(t,e,n){return function(r){this.style.setProperty(t,e.call(this,r),n)}}function dm(t,e,n){var r,i;function s(){var s=e.apply(this,arguments);return s!==i&&(r=(i=s)&&fm(t,s,n)),r}return s._value=e,s}function pm(t){return function(e){this.textContent=t.call(this,e)}}function mm(t){var e,n;function r(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&pm(r)),e}return r._value=t,r}var gm=0;function ym(t,e,n,r){this._groups=t,this._parents=e,this._name=n,this._id=r}function vm(){return++gm}var wm=xd.prototype;ym.prototype={constructor:ym,select:function(t){var e=this._name,n=this._id;"function"!=typeof t&&(t=Tf(t));for(var r=this._groups,i=r.length,s=new Array(i),o=0;o<i;++o)for(var a,c,u=r[o],l=u.length,h=s[o]=new Array(l),f=0;f<l;++f)(a=u[f])&&(c=t.call(a,a.__data__,f,u))&&("__data__"in a&&(c.__data__=a.__data__),h[f]=c,Hp(h[f],e,n,f,h,qp(a,n)));return new ym(s,this._parents,e,n)},selectAll:function(t){var e=this._name,n=this._id;"function"!=typeof t&&(t=Sf(t));for(var r=this._groups,i=r.length,s=[],o=[],a=0;a<i;++a)for(var c,u=r[a],l=u.length,h=0;h<l;++h)if(c=u[h]){for(var f,d=t.call(c,c.__data__,h,u),p=qp(c,n),m=0,g=d.length;m<g;++m)(f=d[m])&&Hp(f,e,n,m,d,p);s.push(d),o.push(c)}return new ym(s,o,e,n)},filter:function(t){"function"!=typeof t&&(t=If(t));for(var e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i)for(var s,o=e[i],a=o.length,c=r[i]=[],u=0;u<a;++u)(s=o[u])&&t.call(s,s.__data__,u,o)&&c.push(s);return new ym(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,r=e.length,i=n.length,s=Math.min(r,i),o=new Array(r),a=0;a<s;++a)for(var c,u=e[a],l=n[a],h=u.length,f=o[a]=new Array(h),d=0;d<h;++d)(c=u[d]||l[d])&&(f[d]=c);for(;a<r;++a)o[a]=e[a];return new ym(o,this._parents,this._name,this._id)},selection:function(){return new lm(this._groups,this._parents)},transition:function(){for(var t=this._name,e=this._id,n=vm(),r=this._groups,i=r.length,s=0;s<i;++s)for(var o,a=r[s],c=a.length,u=0;u<c;++u)if(o=a[u]){var l=qp(o,e);Hp(o,t,n,u,a,{time:l.time+l.delay+l.duration,delay:0,duration:l.duration,ease:l.ease})}return new ym(r,this._parents,t,n)},call:wm.call,nodes:wm.nodes,node:wm.node,size:wm.size,empty:wm.empty,each:wm.each,on:function(t,e){var n=this._id;return arguments.length<2?qp(this.node(),n).on.on(t):this.each(um(n,t,e))},attr:function(t,e){var n=yf(t),r="transform"===n?bp:Wp;return this.attrTween(t,"function"==typeof e?(n.local?Zp:Jp)(n,r,Kp(this,"attr."+t,e)):null==e?(n.local?Qp:Gp)(n):(n.local?Yp:Xp)(n,r,e))},attrTween:function(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(null==e)return this.tween(n,null);if("function"!=typeof e)throw new Error;var r=yf(t);return this.tween(n,(r.local?nm:rm)(r,e))},style:function(t,e,n){var r="transform"==(t+="")?Ep:Wp;return null==e?this.styleTween(t,function(t,e){var n,r,i;return function(){var s=Qf(this,t),o=(this.style.removeProperty(t),Qf(this,t));return s===o?null:s===n&&o===r?i:i=e(n=s,r=o)}}(t,r)).on("end.style."+t,hm(t)):"function"==typeof e?this.styleTween(t,function(t,e,n){var r,i,s;return function(){var o=Qf(this,t),a=n(this),c=a+"";return null==a&&(this.style.removeProperty(t),c=a=Qf(this,t)),o===c?null:o===r&&c===i?s:(i=c,s=e(r=o,a))}}(t,r,Kp(this,"style."+t,e))).each(function(t,e){var n,r,i,s,o="style."+e,a="end."+o;return function(){var c=Bp(this,t),u=c.on,l=null==c.value[o]?s||(s=hm(e)):void 0;u===n&&i===l||(r=(n=u).copy()).on(a,i=l),c.on=r}}(this._id,t)):this.styleTween(t,function(t,e,n){var r,i,s=n+"";return function(){var o=Qf(this,t);return o===s?null:o===r?i:i=e(r=o,n)}}(t,r,e),n).on("end.style."+t,null)},styleTween:function(t,e,n){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==e)return this.tween(r,null);if("function"!=typeof e)throw new Error;return this.tween(r,dm(t,e,null==n?"":n))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var e=t(this);this.textContent=null==e?"":e}}(Kp(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(null==t)return this.tween(e,null);if("function"!=typeof t)throw new Error;return this.tween(e,mm(t))},remove:function(){return this.on("end.remove",(t=this._id,function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}));var t},tween:function(t,e){var n=this._id;if(t+="",arguments.length<2){for(var r,i=qp(this.node(),n).tween,s=0,o=i.length;s<o;++s)if((r=i[s]).name===t)return r.value;return null}return this.each((null==e?jp:zp)(n,t,e))},delay:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?im:sm)(e,t)):qp(this.node(),e).delay},duration:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?om:am)(e,t)):qp(this.node(),e).duration},ease:function(t){var e=this._id;return arguments.length?this.each(cm(e,t)):qp(this.node(),e).ease},easeVarying:function(t){if("function"!=typeof t)throw new Error;return this.each(function(t,e){return function(){var n=e.apply(this,arguments);if("function"!=typeof n)throw new Error;Bp(this,t).ease=n}}(this._id,t))},end:function(){var t,e,n=this,r=n._id,i=n.size();return new Promise((function(s,o){var a={value:o},c={value:function(){0==--i&&s()}};n.each((function(){var n=Bp(this,r),i=n.on;i!==t&&((e=(t=i).copy())._.cancel.push(a),e._.interrupt.push(a),e._.end.push(c)),n.on=e})),0===i&&s()}))},[Symbol.iterator]:wm[Symbol.iterator]};var Em={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};function bm(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}xd.prototype.interrupt=function(t){return this.each((function(){!function(t,e){var n,r,i,s=t.__transition,o=!0;if(s){for(i in e=null==e?null:e+"",s)(n=s[i]).name===e?(r=n.state>2&&n.state<5,n.state=6,n.timer.stop(),n.on.call(r?"interrupt":"cancel",t,t.__data__,n.index,n.group),delete s[i]):o=!1;o&&delete t.__transition}}(this,t)}))},xd.prototype.transition=function(t){var e,n;t instanceof ym?(e=t._id,t=t._name):(e=vm(),(n=Em).time=Dp(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,s=0;s<i;++s)for(var o,a=r[s],c=a.length,u=0;u<c;++u)(o=a[u])&&Hp(o,t,e,u,a,n||bm(o,e));return new ym(r,this._parents,t,e)};export{a as A,rt as B,yt as C,p as D,g as E,b as F,o as G,sl as H,M as I,ee as J,Zt as K,te as L,Cd as M,z as N,cl as R,mt as S,nf as T,cf as W,Al as Z,R as a,N as b,O as c,_ as d,A as e,T as f,k as g,P as h,pt as i,ut as j,I as k,x as l,lt as m,L as n,ht as o,at as p,ct as q,ot as r,f as s,S as t,it as u,st as v,ft as w,B as x,$ as y,H as z};
