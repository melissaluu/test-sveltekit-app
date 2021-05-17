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
class Jt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ot("app-exp",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}function Zt(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!=typeof r||!r)throw Yt.create("bad-app-name",{appName:String(r)});if(Wt.has(r))throw Yt.create("duplicate-app",{appName:r});const i=new Vt(r);for(const o of Gt.values())i.addComponent(o);const s=new Jt(t,n,i);return Wt.set(r,s),s}function te(t,e,n){var r;let i=null!==(r=Kt[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void zt.warn(t.join(" "))}Xt(new Ot(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
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
 */var ee;Xt(new Ot("platform-logger",(t=>new jt(t)),"PRIVATE")),te("@firebase/app-exp","0.0.900-exp.894b5da5a",ee),te("fire-js","");
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
var ne=function(t,e){return(ne=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function re(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var ie,se="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},oe=oe||{},ae=se||self;function ce(){}function ue(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function le(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var he="closure_uid_"+(1e9*Math.random()>>>0),fe=0;function de(t,e,n){return t.call.apply(t.bind,arguments)}function pe(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function me(t,e,n){return(me=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?de:pe).apply(null,arguments)}function ge(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function ye(){return Date.now()}function ve(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Kb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function we(){this.j=this.j,this.i=this.i}we.prototype.j=!1,we.prototype.ja=function(){var t;!this.j&&(this.j=!0,this.G(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,he)&&t[he]||(t[he]=++fe))},we.prototype.G=function(){if(this.i)for(;this.i.length;)this.i.shift()()};var Ee=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},be=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i="string"==typeof t?t.split(""):t,s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function Te(t){return Array.prototype.concat.apply([],arguments)}function _e(t){var e=t.length;if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ae(t){return/^[\s\xa0]*$/.test(t)}var Se,Ie=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function xe(t,e){return-1!=t.indexOf(e)}function Ce(t,e){return t<e?-1:t>e?1:0}t:{var Ne=ae.navigator;if(Ne){var De=Ne.userAgent;if(De){Se=De;break t}}Se=""}function Re(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function Oe(t){var e={};for(var n in t)e[n]=t[n];return e}var ke="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Le(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])t[n]=r[n];for(var s=0;s<ke.length;s++)n=ke[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Pe(t){return Pe[" "](t),t}Pe[" "]=ce;var Me,Ve,Ue=xe(Se,"Opera"),Fe=xe(Se,"Trident")||xe(Se,"MSIE"),He=xe(Se,"Edge"),$e=He||Fe,Be=xe(Se,"Gecko")&&!(xe(Se.toLowerCase(),"webkit")&&!xe(Se,"Edge"))&&!(xe(Se,"Trident")||xe(Se,"MSIE"))&&!xe(Se,"Edge"),qe=xe(Se.toLowerCase(),"webkit")&&!xe(Se,"Edge");function je(){var t=ae.document;return t?t.documentMode:void 0}t:{var ze="",Ke=(Ve=Se,Be?/rv:([^\);]+)(\)|;)/.exec(Ve):He?/Edge\/([\d\.]+)/.exec(Ve):Fe?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Ve):qe?/WebKit\/(\S+)/.exec(Ve):Ue?/(?:Version)[ \/]?(\S+)/.exec(Ve):void 0);if(Ke&&(ze=Ke?Ke[1]:""),Fe){var We=je();if(null!=We&&We>parseFloat(ze)){Me=String(We);break t}}Me=ze}var Ge,Qe={};function Xe(t){return function(t,e){var n=Qe;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(){for(var e=0,n=Ie(String(Me)).split("."),r=Ie(String(t)).split("."),i=Math.max(n.length,r.length),s=0;0==e&&s<i;s++){var o=n[s]||"",a=r[s]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],0==o[0].length&&0==a[0].length)break;e=Ce(0==o[1].length?0:parseInt(o[1],10),0==a[1].length?0:parseInt(a[1],10))||Ce(0==o[2].length,0==a[2].length)||Ce(o[2],a[2]),o=o[3],a=a[3]}while(0==e)}return 0<=e}))}if(ae.document&&Fe){var Ye=je();Ge=Ye||(parseInt(Me,10)||void 0)}else Ge=void 0;var Je=Ge,Ze=!Fe||9<=Number(Je),tn=Fe&&!Xe("9"),en=function(){if(!ae.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ae.addEventListener("test",ce,e),ae.removeEventListener("test",ce,e)}catch(n){}return t}();function nn(t,e){this.type=t,this.a=this.target=e,this.defaultPrevented=!1}function rn(t,e){if(nn.call(this,t?t.type:""),this.relatedTarget=this.a=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.c=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.a=e,e=t.relatedTarget){if(Be){t:{try{Pe(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:sn[t.pointerType]||"",this.c=t,t.defaultPrevented&&this.b()}}nn.prototype.b=function(){this.defaultPrevented=!0},ve(rn,nn);var sn={2:"touch",3:"pen",4:"mouse"};rn.prototype.b=function(){rn.X.b.call(this);var t=this.c;if(t.preventDefault)t.preventDefault();else if(t.returnValue=!1,tn)try{(t.ctrlKey||112<=t.keyCode&&123>=t.keyCode)&&(t.keyCode=-1)}catch(e){}};var on="closure_listenable_"+(1e6*Math.random()|0),an=0;function cn(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ca=i,this.key=++an,this.Y=this.Z=!1}function un(t){t.Y=!0,t.listener=null,t.proxy=null,t.src=null,t.ca=null}function ln(t){this.src=t,this.a={},this.b=0}function hn(t,e){var n=e.type;if(n in t.a){var r,i=t.a[n],s=Ee(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(un(e),0==t.a[n].length&&(delete t.a[n],t.b--))}}function fn(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.Y&&s.listener==e&&s.capture==!!n&&s.ca==r)return i}return-1}ln.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.a[s])||(t=this.a[s]=[],this.b++);var o=fn(t,e,r,i);return-1<o?(e=t[o],n||(e.Z=!1)):((e=new cn(e,this.src,s,!!r,i)).Z=n,t.push(e)),e};var dn="closure_lm_"+(1e6*Math.random()|0),pn={};function mn(t,e,n,r,i){if(r&&r.once)return yn(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)mn(t,e[s],n,r,i);return null}return n=Sn(n),t&&t[on]?t.va(e,n,le(r)?!!r.capture:!!r,i):gn(t,e,n,!1,r,i)}function gn(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=le(i)?!!i.capture:!!i;if(o&&!Ze)return null;var a=_n(t);if(a||(t[dn]=a=new ln(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){var t=Tn,e=Ze?function(n){return t.call(e.src,e.listener,n)}:function(n){if(!(n=t.call(e.src,e.listener,n)))return n};return e}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)en||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(En(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function yn(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)yn(t,e[s],n,r,i);return null}return n=Sn(n),t&&t[on]?t.wa(e,n,le(r)?!!r.capture:!!r,i):gn(t,e,n,!0,r,i)}function vn(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)vn(t,e[s],n,r,i);else r=le(r)?!!r.capture:!!r,n=Sn(n),t&&t[on]?(t=t.c,(e=String(e).toString())in t.a&&(-1<(n=fn(s=t.a[e],n,r,i))&&(un(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.a[e],t.b--)))):t&&(t=_n(t))&&(e=t.a[e.toString()],t=-1,e&&(t=fn(e,n,r,i)),(n=-1<t?e[t]:null)&&wn(n))}function wn(t){if("number"!=typeof t&&t&&!t.Y){var e=t.src;if(e&&e[on])hn(e.c,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(En(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=_n(e))?(hn(n,t),0==n.b&&(n.src=null,e[dn]=null)):un(t)}}}function En(t){return t in pn?pn[t]:pn[t]="on"+t}function bn(t,e){var n=t.listener,r=t.ca||t.src;return t.Z&&wn(t),n.call(r,e)}function Tn(t,e){if(t.Y)return!0;if(!Ze){if(!e)t:{e=["window","event"];for(var n=ae,r=0;r<e.length;r++)if(null==(n=n[e[r]])){e=null;break t}e=n}return bn(t,e=new rn(e,this))}return bn(t,new rn(e,this))}function _n(t){return(t=t[dn])instanceof ln?t:null}var An="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sn(t){return"function"==typeof t?t:(t[An]||(t[An]=function(e){return t.handleEvent(e)}),t[An])}function In(){we.call(this),this.c=new ln(this),this.J=this,this.C=null}function xn(t,e){var n,r=t.C;if(r)for(n=[];r;r=r.C)n.push(r);if(t=t.J,r=e.type||e,"string"==typeof e)e=new nn(e,t);else if(e instanceof nn)e.target=e.target||t;else{var i=e;Le(e=new nn(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.a=n[s];i=Cn(o,r,!0,e)&&i}if(i=Cn(o=e.a=t,r,!0,e)&&i,i=Cn(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=Cn(o=e.a=n[s],r,!1,e)&&i}function Cn(t,e,n,r){if(!(e=t.c.a[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.Y&&o.capture==n){var a=o.listener,c=o.ca||o.src;o.Z&&hn(t.c,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}ve(In,we),In.prototype[on]=!0,(ie=In.prototype).addEventListener=function(t,e,n,r){mn(this,t,e,n,r)},ie.removeEventListener=function(t,e,n,r){vn(this,t,e,n,r)},ie.G=function(){if(In.X.G.call(this),this.c){var t,e=this.c;for(t in e.a){for(var n=e.a[t],r=0;r<n.length;r++)un(n[r]);delete e.a[t],e.b--}}this.C=null},ie.va=function(t,e,n,r){return this.c.add(String(t),e,!1,n,r)},ie.wa=function(t,e,n,r){return this.c.add(String(t),e,!0,n,r)};var Nn=ae.JSON.stringify;function Dn(){this.b=this.a=null}var Rn,On=new(function(){function t(t,e){this.c=t,this.f=e,this.b=0,this.a=null}return t.prototype.get=function(){var t;return 0<this.b?(this.b--,t=this.a,this.a=t.next,t.next=null):t=this.c(),t},t}())((function(){return new Ln}),(function(t){t.reset()}));function kn(){var t=Un,e=null;return t.a&&(e=t.a,t.a=t.a.next,t.a||(t.b=null),e.next=null),e}function Ln(){this.next=this.b=this.a=null}function Pn(t){ae.setTimeout((function(){throw t}),0)}function Mn(t,e){Rn||function(){var t=ae.Promise.resolve(void 0);Rn=function(){t.then(Fn)}}(),Vn||(Rn(),Vn=!0),Un.add(t,e)}Dn.prototype.add=function(t,e){var n=On.get();n.set(t,e),this.b?this.b.next=n:this.a=n,this.b=n},Ln.prototype.set=function(t,e){this.a=t,this.b=e,this.next=null},Ln.prototype.reset=function(){this.next=this.b=this.a=null};var Vn=!1,Un=new Dn;function Fn(){for(var t;t=kn();){try{t.a.call(t.b)}catch(n){Pn(n)}var e=On;e.f(t),100>e.b&&(e.b++,t.next=e.a,e.a=t)}Vn=!1}function Hn(t,e){In.call(this),this.b=t||1,this.a=e||ae,this.f=me(this.Za,this),this.g=ye()}function $n(t){t.aa=!1,t.M&&(t.a.clearTimeout(t.M),t.M=null)}function Bn(t,e,n){if("function"==typeof t)n&&(t=me(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=me(t.handleEvent,t)}return 2147483647<Number(e)?-1:ae.setTimeout(t,e||0)}function qn(t){t.a=Bn((function(){t.a=null,t.c&&(t.c=!1,qn(t))}),t.h);var e=t.b;t.b=null,t.g.apply(null,e)}ve(Hn,In),(ie=Hn.prototype).aa=!1,ie.M=null,ie.Za=function(){if(this.aa){var t=ye()-this.g;0<t&&t<.8*this.b?this.M=this.a.setTimeout(this.f,this.b-t):(this.M&&(this.a.clearTimeout(this.M),this.M=null),xn(this,"tick"),this.aa&&($n(this),this.start()))}},ie.start=function(){this.aa=!0,this.M||(this.M=this.a.setTimeout(this.f,this.b),this.g=ye())},ie.G=function(){Hn.X.G.call(this),$n(this),delete this.a};var jn=function(t){function e(e,n){var r=t.call(this)||this;return r.g=e,r.h=n,r.b=null,r.c=!1,r.a=null,r}return function(t,e){function n(){this.constructor=t}ne(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.f=function(t){this.b=arguments,this.a?this.c=!0:qn(this)},e.prototype.G=function(){t.prototype.G.call(this),this.a&&(ae.clearTimeout(this.a),this.a=null,this.c=!1,this.b=null)},e}(we);function zn(t){we.call(this),this.b=t,this.a={}}ve(zn,we);var Kn=[];function Wn(t,e,n,r){Array.isArray(n)||(n&&(Kn[0]=n.toString()),n=Kn);for(var i=0;i<n.length;i++){var s=mn(e,n[i],r||t.handleEvent,!1,t.b||t);if(!s)break;t.a[s.key]=s}}function Gn(t){Re(t.a,(function(t,e){this.a.hasOwnProperty(e)&&wn(t)}),t),t.a={}}function Qn(){this.a=!0}function Xn(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.a)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Nn(n)}catch(a){return e}}(t,n)+(r?" "+r:"")}))}zn.prototype.G=function(){zn.X.G.call(this),Gn(this)},zn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qn.prototype.info=function(){};var Yn={},Jn=null;function Zn(){return Jn=Jn||new In}function tr(t){nn.call(this,Yn.Fa,t)}function er(t){var e=Zn();xn(e,new tr(e,t))}function nr(t,e){nn.call(this,Yn.STAT_EVENT,t),this.stat=e}function rr(t){var e=Zn();xn(e,new nr(e,t))}function ir(t){nn.call(this,Yn.Ga,t)}function sr(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return ae.setTimeout((function(){t()}),e)}Yn.Fa="serverreachability",ve(tr,nn),Yn.STAT_EVENT="statevent",ve(nr,nn),Yn.Ga="timingevent",ve(ir,nn);var or={NO_ERROR:0,$a:1,nb:2,mb:3,hb:4,lb:5,ob:6,Da:7,TIMEOUT:8,rb:9},ar={fb:"complete",Bb:"success",Ea:"error",Da:"abort",tb:"ready",ub:"readystatechange",TIMEOUT:"timeout",pb:"incrementaldata",sb:"progress",ib:"downloadprogress",Jb:"uploadprogress"};function cr(){}function ur(t){var e;return(e=t.a)||(e=t.a={}),e}function lr(){}cr.prototype.a=null;var hr,fr={OPEN:"a",eb:"b",Ea:"c",qb:"d"};function dr(){nn.call(this,"d")}function pr(){nn.call(this,"c")}function mr(){}function gr(t,e,n,r){this.g=t,this.c=e,this.f=n,this.S=r||1,this.J=new zn(this),this.P=yr,t=$e?125:void 0,this.R=new Hn(t),this.B=null,this.b=!1,this.j=this.l=this.i=this.H=this.u=this.T=this.o=null,this.s=[],this.a=null,this.D=0,this.h=this.m=null,this.N=-1,this.A=!1,this.O=0,this.F=null,this.V=this.C=this.U=this.I=!1}ve(dr,nn),ve(pr,nn),ve(mr,cr),hr=new mr;var yr=45e3,vr={},wr={};function Er(t,e,n){t.H=1,t.i=Br(Mr(e)),t.j=n,t.I=!0,br(t,null)}function br(t,e){t.u=ye(),Ar(t),t.l=Mr(t.i);var n=t.l,r=t.S;Array.isArray(r)||(r=[String(r)]),ei(n.b,"t",r),t.D=0,t.a=Qi(t.g,t.g.C?e:null),0<t.O&&(t.F=new jn(me(t.Ca,t,t.a),t.O)),Wn(t.J,t.a,"readystatechange",t.Xa),e=t.B?Oe(t.B):{},t.j?(t.m||(t.m="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.a.ba(t.l,t.m,t.j,e)):(t.m="GET",t.a.ba(t.l,t.m,null,e)),er(1),function(t,e,n,r,i,s){t.info((function(){if(t.a)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.c,t.m,t.l,t.f,t.S,t.j)}function Tr(t,e,n){for(var r=!0;!t.A&&t.D<n.length;){var i=_r(t,n);if(i==wr){4==e&&(t.h=4,rr(14),r=!1),Xn(t.c,t.f,null,"[Incomplete Response]");break}if(i==vr){t.h=4,rr(15),Xn(t.c,t.f,n,"[Invalid Chunk]"),r=!1;break}Xn(t.c,t.f,i,null),Nr(t,i)}4==e&&0==n.length&&(t.h=1,rr(16),r=!1),t.b=t.b&&r,r?0<n.length&&!t.V&&(t.V=!0,(e=t.g).a==t&&e.U&&!e.F&&(e.c.info("Great, no buffering proxy detected. Bytes received: "+n.length),$i(e),e.F=!0,rr(11))):(Xn(t.c,t.f,n,"[Invalid Chunked Response]"),Cr(t),xr(t))}function _r(t,e){var n=t.D,r=e.indexOf("\n",n);return-1==r?wr:(n=Number(e.substring(n,r)),isNaN(n)?vr:(r+=1)+n>e.length?wr:(e=e.substr(r,n),t.D=r+n,e))}function Ar(t){t.T=ye()+t.P,Sr(t,t.P)}function Sr(t,e){if(null!=t.o)throw Error("WatchDog timer not null");t.o=sr(me(t.Va,t),e)}function Ir(t){t.o&&(ae.clearTimeout(t.o),t.o=null)}function xr(t){0==t.g.v||t.A||ji(t.g,t)}function Cr(t){Ir(t);var e=t.F;e&&"function"==typeof e.ja&&e.ja(),t.F=null,$n(t.R),Gn(t.J),t.a&&(e=t.a,t.a=null,e.abort(),e.ja())}function Nr(t,e){try{var n=t.g;if(0!=n.v&&(n.a==t||ci(n.b,t)))if(n.I=t.N,!t.C&&ci(n.b,t)&&3==n.v){try{var r=n.ka.a.parse(e)}catch(g){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.j){if(n.a){if(!(n.a.u+3e3<t.u))break t;qi(n),Oi(n)}Hi(n),rr(18)}}else n.oa=i[1],0<n.oa-n.P&&37500>i[2]&&n.H&&0==n.o&&!n.m&&(n.m=sr(me(n.Sa,n),6e3));if(1>=ai(n.b)&&n.ea){try{n.ea()}catch(g){}n.ea=void 0}}else Ki(n,11)}else if((t.C||n.a==t)&&qi(n),!Ae(e))for(e=r=n.ka.a.parse(e),r=0;r<e.length;r++)if(i=e[r],n.P=i[0],i=i[1],2==n.v)if("c"==i[0]){n.J=i[1],n.ga=i[2];var s=i[3];null!=s&&(n.ha=s,n.c.info("VER="+n.ha));var o=i[4];null!=o&&(n.pa=o,n.c.info("SVER="+n.pa));var a=i[5];if(null!=a&&"number"==typeof a&&0<a){var c=1.5*a;n.D=c,n.c.info("backChannelRequestTimeoutMs_="+c)}c=n;var u=t.a;if(u){var l=u.a?u.a.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=c.b;!h.a&&(xe(l,"spdy")||xe(l,"quic")||xe(l,"h2"))&&(h.f=h.g,h.a=new Set,h.b&&(ui(h,h.b),h.b=null))}if(c.A){var f=u.a?u.a.getResponseHeader("X-HTTP-Session-Id"):null;f&&(c.na=f,$r(c.B,c.A,f))}}n.v=3,n.f&&n.f.ta(),n.U&&(n.N=ye()-t.u,n.c.info("Handshake RTT: "+n.N+"ms"));var d=t;if((c=n).la=Gi(c,c.C?c.ga:null,c.fa),d.C){li(c.b,d);var p=d,m=c.D;m&&p.setTimeout(m),p.o&&(Ir(p),Ar(p)),c.a=d}else Fi(c);0<n.g.length&&Pi(n)}else"stop"!=i[0]&&"close"!=i[0]||Ki(n,7);else 3==n.v&&("stop"==i[0]||"close"==i[0]?"stop"==i[0]?Ki(n,7):Ri(n):"noop"!=i[0]&&n.f&&n.f.sa(i),n.o=0);er(4)}catch(g){}}function Dr(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(ue(t)||"string"==typeof t)be(t,e,void 0);else{if(t.L&&"function"==typeof t.L)var n=t.L();else if(t.K&&"function"==typeof t.K)n=void 0;else if(ue(t)||"string"==typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;i=(r=function(t){if(t.K&&"function"==typeof t.K)return t.K();if("string"==typeof t)return t.split("");if(ue(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t)).length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Rr(t,e){this.b={},this.a=[],this.c=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Rr)for(n=t.L(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Or(t){if(t.c!=t.a.length){for(var e=0,n=0;e<t.a.length;){var r=t.a[e];kr(t.b,r)&&(t.a[n++]=r),e++}t.a.length=n}if(t.c!=t.a.length){var i={};for(n=e=0;e<t.a.length;)kr(i,r=t.a[e])||(t.a[n++]=r,i[r]=1),e++;t.a.length=n}}function kr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(ie=gr.prototype).setTimeout=function(t){this.P=t},ie.Xa=function(t){t=t.target;var e=this.F;e&&3==xi(t)?e.f():this.Ca(t)},ie.Ca=function(t){try{if(t==this.a)t:{var e=xi(this.a),n=this.a.ua(),r=this.a.W();if(!(3>e||3==e&&!$e&&!this.a.$())){this.A||4!=e||7==n||er(8==n||0>=r?3:2),Ir(this);var i=this.a.W();this.N=i;var s=this.a.$();if(this.b=200==i,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.c,this.m,this.l,this.f,this.S,e,i),this.b){if(this.U&&!this.C){e:{if(this.a){var o,a=this.a;if((o=a.a?a.a.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ae(o)){var c=o;break e}}c=null}if(!c){this.b=!1,this.h=3,rr(12),Cr(this),xr(this);break t}Xn(this.c,this.f,c,"Initial handshake response via X-HTTP-Initial-Response"),this.C=!0,Nr(this,c)}this.I?(Tr(this,e,s),$e&&this.b&&3==e&&(Wn(this.J,this.R,"tick",this.Wa),this.R.start())):(Xn(this.c,this.f,s,null),Nr(this,s)),4==e&&Cr(this),this.b&&!this.A&&(4==e?ji(this.g,this):(this.b=!1,Ar(this)))}else 400==i&&0<s.indexOf("Unknown SID")?(this.h=3,rr(12)):(this.h=0,rr(13)),Cr(this),xr(this)}}}catch(u){}},ie.Wa=function(){if(this.a){var t=xi(this.a),e=this.a.$();this.D<e.length&&(Ir(this),Tr(this,t,e),this.b&&4!=t&&Ar(this))}},ie.cancel=function(){this.A=!0,Cr(this)},ie.Va=function(){this.o=null;var t=ye();0<=t-this.T?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.c,this.l),2!=this.H&&(er(3),rr(17)),Cr(this),this.h=2,xr(this)):Sr(this,this.T-t)},(ie=Rr.prototype).K=function(){Or(this);for(var t=[],e=0;e<this.a.length;e++)t.push(this.b[this.a[e]]);return t},ie.L=function(){return Or(this),this.a.concat()},ie.get=function(t,e){return kr(this.b,t)?this.b[t]:e},ie.set=function(t,e){kr(this.b,t)||(this.c++,this.a.push(t)),this.b[t]=e},ie.forEach=function(t,e){for(var n=this.L(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var Lr=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Pr(t,e){if(this.c=this.j=this.f="",this.h=null,this.i=this.g="",this.a=!1,t instanceof Pr){this.a=void 0!==e?e:t.a,Vr(this,t.f),this.j=t.j,Ur(this,t.c),Fr(this,t.h),this.g=t.g,e=t.b;var n=new Yr;n.c=e.c,e.a&&(n.a=new Rr(e.a),n.b=e.b),Hr(this,n),this.i=t.i}else t&&(n=String(t).match(Lr))?(this.a=!!e,Vr(this,n[1]||"",!0),this.j=qr(n[2]||""),Ur(this,n[3]||"",!0),Fr(this,n[4]),this.g=qr(n[5]||"",!0),Hr(this,n[6]||"",!0),this.i=qr(n[7]||"")):(this.a=!!e,this.b=new Yr(null,this.a))}function Mr(t){return new Pr(t)}function Vr(t,e,n){t.f=n?qr(e,!0):e,t.f&&(t.f=t.f.replace(/:$/,""))}function Ur(t,e,n){t.c=n?qr(e,!0):e}function Fr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.h=e}else t.h=null}function Hr(t,e,n){e instanceof Yr?(t.b=e,function(t,e){e&&!t.f&&(Jr(t),t.c=null,t.a.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Zr(this,e),ei(this,n,t))}),t)),t.f=e}(t.b,t.a)):(n||(e=jr(e,Qr)),t.b=new Yr(e,t.a))}function $r(t,e,n){t.b.set(e,n)}function Br(t){return $r(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^ye()).toString(36)),t}function qr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function jr(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,zr),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function zr(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Pr.prototype.toString=function(){var t=[],e=this.f;e&&t.push(jr(e,Kr,!0),":");var n=this.c;return(n||"file"==e)&&(t.push("//"),(e=this.j)&&t.push(jr(e,Kr,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.h)&&t.push(":",String(n))),(n=this.g)&&(this.c&&"/"!=n.charAt(0)&&t.push("/"),t.push(jr(n,"/"==n.charAt(0)?Gr:Wr,!0))),(n=this.b.toString())&&t.push("?",n),(n=this.i)&&t.push("#",jr(n,Xr)),t.join("")};var Kr=/[#\/\?@]/g,Wr=/[#\?:]/g,Gr=/[#\?]/g,Qr=/[#\?@]/g,Xr=/#/g;function Yr(t,e){this.b=this.a=null,this.c=t||null,this.f=!!e}function Jr(t){t.a||(t.a=new Rr,t.b=0,t.c&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.c,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Zr(t,e){Jr(t),e=ni(t,e),kr(t.a.b,e)&&(t.c=null,t.b-=t.a.get(e).length,kr((t=t.a).b,e)&&(delete t.b[e],t.c--,t.a.length>2*t.c&&Or(t)))}function ti(t,e){return Jr(t),e=ni(t,e),kr(t.a.b,e)}function ei(t,e,n){Zr(t,e),0<n.length&&(t.c=null,t.a.set(ni(t,e),_e(n)),t.b+=n.length)}function ni(t,e){return e=String(e),t.f&&(e=e.toLowerCase()),e}(ie=Yr.prototype).add=function(t,e){Jr(this),this.c=null,t=ni(this,t);var n=this.a.get(t);return n||this.a.set(t,n=[]),n.push(e),this.b+=1,this},ie.forEach=function(t,e){Jr(this),this.a.forEach((function(n,r){be(n,(function(n){t.call(e,n,r,this)}),this)}),this)},ie.L=function(){Jr(this);for(var t=this.a.K(),e=this.a.L(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},ie.K=function(t){Jr(this);var e=[];if("string"==typeof t)ti(this,t)&&(e=Te(e,this.a.get(ni(this,t))));else{t=this.a.K();for(var n=0;n<t.length;n++)e=Te(e,t[n])}return e},ie.set=function(t,e){return Jr(this),this.c=null,ti(this,t=ni(this,t))&&(this.b-=this.a.get(t).length),this.a.set(t,[e]),this.b+=1,this},ie.get=function(t,e){return t&&0<(t=this.K(t)).length?String(t[0]):e},ie.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var t=[],e=this.a.L(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.K(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.c=t.join("&")};var ri=function(t,e){this.b=t,this.a=e};function ii(t){this.g=t||si,ae.PerformanceNavigationTiming?t=0<(t=ae.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(ae.ia&&ae.ia.ya&&ae.ia.ya()&&ae.ia.ya().Lb),this.f=t?this.g:1,this.a=null,1<this.f&&(this.a=new Set),this.b=null,this.c=[]}var si=10;function oi(t){return!!t.b||!!t.a&&t.a.size>=t.f}function ai(t){return t.b?1:t.a?t.a.size:0}function ci(t,e){return t.b?t.b==e:!!t.a&&t.a.has(e)}function ui(t,e){t.a?t.a.add(e):t.b=e}function li(t,e){t.b&&t.b==e?t.b=null:t.a&&t.a.has(e)&&t.a.delete(e)}function hi(t){var e,n;if(null!=t.b)return t.c.concat(t.b.s);if(null!=t.a&&0!==t.a.size){var r=t.c;try{for(var i=re(t.a.values()),s=i.next();!s.done;s=i.next()){var o=s.value;r=r.concat(o.s)}}catch(a){e={error:a}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}return _e(t.c)}function fi(){}function di(){this.a=new fi}function pi(t,e,n){var r=n||"";try{Dr(t,(function(t,n){var i=t;le(t)&&(i=Nn(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function mi(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}ii.prototype.cancel=function(){var t,e;if(this.c=hi(this),this.b)this.b.cancel(),this.b=null;else if(this.a&&0!==this.a.size){try{for(var n=re(this.a.values()),r=n.next();!r.done;r=n.next()){r.value.cancel()}}catch(i){t={error:i}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.a.clear()}},fi.prototype.stringify=function(t){return ae.JSON.stringify(t,void 0)},fi.prototype.parse=function(t){return ae.JSON.parse(t,void 0)};var gi=ae.JSON.parse;function yi(t){In.call(this),this.headers=new Rr,this.H=t||null,this.b=!1,this.s=this.a=null,this.B="",this.h=0,this.f="",this.g=this.A=this.l=this.u=!1,this.o=0,this.m=null,this.I=vi,this.D=this.F=!1}ve(yi,In);var vi="",wi=/^https?$/i,Ei=["POST","PUT"];function bi(t){return"content-type"==t.toLowerCase()}function Ti(t,e){t.b=!1,t.a&&(t.g=!0,t.a.abort(),t.g=!1),t.f=e,t.h=5,_i(t),Si(t)}function _i(t){t.u||(t.u=!0,xn(t,"complete"),xn(t,"error"))}function Ai(t){if(t.b&&void 0!==oe&&(!t.s[1]||4!=xi(t)||2!=t.W()))if(t.l&&4==xi(t))Bn(t.za,0,t);else if(xn(t,"readystatechange"),4==xi(t)){t.b=!1;try{var e,n=t.W();t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}if(!(e=r)){var i;if(i=0===n){var s=String(t.B).match(Lr)[1]||null;if(!s&&ae.self&&ae.self.location){var o=ae.self.location.protocol;s=o.substr(0,o.length-1)}i=!wi.test(s?s.toLowerCase():"")}e=i}if(e)xn(t,"complete"),xn(t,"success");else{t.h=6;try{var a=2<xi(t)?t.a.statusText:""}catch(c){a=""}t.f=a+" ["+t.W()+"]",_i(t)}}finally{Si(t)}}}function Si(t,e){if(t.a){Ii(t);var n=t.a,r=t.s[0]?ce:null;t.a=null,t.s=null,e||xn(t,"ready");try{n.onreadystatechange=r}catch(i){}}}function Ii(t){t.a&&t.D&&(t.a.ontimeout=null),t.m&&(ae.clearTimeout(t.m),t.m=null)}function xi(t){return t.a?t.a.readyState:0}function Ci(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=function(t){var e="";return Re(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):$r(t,e,n))}function Ni(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Di(t){this.pa=0,this.g=[],this.c=new Qn,this.ga=this.la=this.B=this.fa=this.a=this.na=this.A=this.V=this.i=this.O=this.l=null,this.Oa=this.R=0,this.La=Ni("failFast",!1,t),this.H=this.m=this.j=this.h=this.f=null,this.S=!0,this.I=this.oa=this.P=-1,this.T=this.o=this.u=0,this.Ha=Ni("baseRetryDelayMs",5e3,t),this.Ra=Ni("retryDelaySeedMs",1e4,t),this.Ma=Ni("forwardChannelMaxRetries",2,t),this.ma=Ni("forwardChannelRequestTimeoutMs",2e4,t),this.Na=t&&t.g||void 0,this.D=void 0,this.C=t&&t.supportsCrossDomainXhr||!1,this.J="",this.b=new ii(t&&t.concurrentRequestLimit),this.ka=new di,this.da=t&&t.fastHandshake||!1,this.Ia=t&&t.b||!1,t&&t.f&&(this.c.a=!1),t&&t.forceLongPolling&&(this.S=!1),this.U=!this.da&&this.S&&t&&t.detectBufferingProxy||!1,this.ea=void 0,this.N=0,this.F=!1,this.s=null,(this.Ka=t&&t.c||!1)&&this.c.info("Opt-in to enable Chrome Origin Trials.")}function Ri(t){if(ki(t),3==t.v){var e=t.R++,n=Mr(t.B);$r(n,"SID",t.J),$r(n,"RID",e),$r(n,"TYPE","terminate"),Vi(t,n),(e=new gr(t,t.c,e,void 0)).H=2,e.i=Br(Mr(n)),n=!1,ae.navigator&&ae.navigator.sendBeacon&&(n=ae.navigator.sendBeacon(e.i.toString(),"")),!n&&ae.Image&&((new Image).src=e.i,n=!0),n||(e.a=Qi(e.g,null),e.a.ba(e.i)),e.u=ye(),Ar(e)}Wi(t)}function Oi(t){t.a&&($i(t),t.a.cancel(),t.a=null)}function ki(t){Oi(t),t.j&&(ae.clearTimeout(t.j),t.j=null),qi(t),t.b.cancel(),t.h&&("number"==typeof t.h&&ae.clearTimeout(t.h),t.h=null)}function Li(t,e){t.g.push(new ri(t.Oa++,e)),3==t.v&&Pi(t)}function Pi(t){oi(t.b)||t.h||(t.h=!0,Mn(t.Ba,t),t.u=0)}function Mi(t,e){var n;n=e?e.f:t.R++;var r=Mr(t.B);$r(r,"SID",t.J),$r(r,"RID",n),$r(r,"AID",t.P),Vi(t,r),t.i&&t.l&&Ci(r,t.i,t.l),n=new gr(t,t.c,n,t.u+1),null===t.i&&(n.B=t.l),e&&(t.g=e.s.concat(t.g)),e=Ui(t,n,1e3),n.setTimeout(Math.round(.5*t.ma)+Math.round(.5*t.ma*Math.random())),ui(t.b,n),Er(n,r,e)}function Vi(t,e){t.f&&Dr({},(function(t,n){$r(e,n,t)}))}function Ui(t,e,n){n=Math.min(t.g.length,n);var r=t.f?me(t.f.Ja,t.f,t):null;t:for(var i=t.g,s=-1;;){var o=["count="+n];-1==s?0<n?(s=i[0].b,o.push("ofs="+s)):s=0:o.push("ofs="+s);for(var a=!0,c=0;c<n;c++){var u=i[c].b,l=i[c].a;if(0>(u-=s))s=Math.max(0,i[c].b-100),a=!1;else try{pi(l,o,"req"+u+"_")}catch(h){r&&r(l)}}if(a){r=o.join("&");break t}}return t=t.g.splice(0,n),e.s=t,r}function Fi(t){t.a||t.j||(t.T=1,Mn(t.Aa,t),t.o=0)}function Hi(t){return!(t.a||t.j||3<=t.o)&&(t.T++,t.j=sr(me(t.Aa,t),zi(t,t.o)),t.o++,!0)}function $i(t){null!=t.s&&(ae.clearTimeout(t.s),t.s=null)}function Bi(t){t.a=new gr(t,t.c,"rpc",t.T),null===t.i&&(t.a.B=t.l),t.a.O=0;var e=Mr(t.la);$r(e,"RID","rpc"),$r(e,"SID",t.J),$r(e,"CI",t.H?"0":"1"),$r(e,"AID",t.P),Vi(t,e),$r(e,"TYPE","xmlhttp"),t.i&&t.l&&Ci(e,t.i,t.l),t.D&&t.a.setTimeout(t.D);var n=t.a;t=t.ga,n.H=1,n.i=Br(Mr(e)),n.j=null,n.I=!0,br(n,t)}function qi(t){null!=t.m&&(ae.clearTimeout(t.m),t.m=null)}function ji(t,e){var n=null;if(t.a==e){qi(t),$i(t),t.a=null;var r=2}else{if(!ci(t.b,e))return;n=e.s,li(t.b,e),r=1}if(t.I=e.N,0!=t.v)if(e.b)if(1==r){n=e.j?e.j.length:0,e=ye()-e.u;var i=t.u;xn(r=Zn(),new ir(r,n,e,i)),Pi(t)}else Fi(t);else if(3==(i=e.h)||0==i&&0<t.I||!(1==r&&function(t,e){return!(ai(t.b)>=t.b.f-(t.h?1:0)||(t.h?(t.g=e.s.concat(t.g),0):1==t.v||2==t.v||t.u>=(t.La?0:t.Ma)||(t.h=sr(me(t.Ba,t,e),zi(t,t.u)),t.u++,0)))}(t,e)||2==r&&Hi(t)))switch(n&&0<n.length&&(e=t.b,e.c=e.c.concat(n)),i){case 1:Ki(t,5);break;case 4:Ki(t,10);break;case 3:Ki(t,6);break;default:Ki(t,2)}}function zi(t,e){var n=t.Ha+Math.floor(Math.random()*t.Ra);return t.f||(n*=2),n*e}function Ki(t,e){if(t.c.info("Error code "+e),2==e){var n=null;t.f&&(n=null);var r=me(t.Ya,t);n||(n=new Pr("//www.google.com/images/cleardot.gif"),ae.location&&"http"==ae.location.protocol||Vr(n,"https"),Br(n)),function(t,e){var n=new Qn;if(ae.Image){var r=new Image;r.onload=ge(mi,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ge(mi,n,r,"TestLoadImage: error",!1,e),r.onabort=ge(mi,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ge(mi,n,r,"TestLoadImage: timeout",!1,e),ae.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else rr(2);t.v=0,t.f&&t.f.ra(e),Wi(t),ki(t)}function Wi(t){t.v=0,t.I=-1,t.f&&(0==hi(t.b).length&&0==t.g.length||(t.b.c.length=0,_e(t.g),t.g.length=0),t.f.qa())}function Gi(t,e,n){var r=function(t){return t instanceof Pr?Mr(t):new Pr(t,void 0)}(n);if(""!=r.c)e&&Ur(r,e+"."+r.c),Fr(r,r.h);else{var i=ae.location;r=function(t,e,n,r){var i=new Pr(null,void 0);return t&&Vr(i,t),e&&Ur(i,e),n&&Fr(i,n),r&&(i.g=r),i}(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.V&&Re(t.V,(function(t,e){$r(r,e,t)})),e=t.A,n=t.na,e&&n&&$r(r,e,n),$r(r,"VER",t.ha),Vi(t,r),r}function Qi(t,e){if(e&&!t.C)throw Error("Can't create secondary domain capable XhrIo object.");return(e=new yi(t.Na)).F=t.C,e}function Xi(){}function Yi(){if(Fe&&!(10<=Number(Je)))throw Error("Environmental error: no available transport.")}function Ji(t,e){In.call(this),this.a=new Di(e),this.o=t,this.b=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.a.l=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.a&&(t?t["X-WebChannel-Client-Profile"]=e.a:t={"X-WebChannel-Client-Profile":e.a}),this.a.O=t,(t=e&&e.httpHeadersOverwriteParam)&&!Ae(t)&&(this.a.i=t),this.m=e&&e.supportsCrossDomainXhr||!1,this.l=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ae(e)&&(this.a.A=e,null!==(t=this.b)&&e in t&&(e in(t=this.b)&&delete t[e])),this.f=new es(this)}function Zi(t){dr.call(this);var e=t.__sm__;if(e){t:{for(var n in e){t=n;break t}t=void 0}(this.c=t)?(t=this.c,this.data=null!==e&&t in e?e[t]:void 0):this.data=e}else this.data=t}function ts(){pr.call(this),this.status=1}function es(t){this.a=t}(ie=yi.prototype).ba=function(t,e,n,r){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.B+"; newUri="+t);e=e?e.toUpperCase():"GET",this.B=t,this.f="",this.h=0,this.u=!1,this.b=!0,this.a=new XMLHttpRequest,this.s=this.H?ur(this.H):ur(hr),this.a.onreadystatechange=me(this.za,this);try{this.A=!0,this.a.open(e,String(t),!0),this.A=!1}catch(s){return void Ti(this,s)}t=n||"";var i=new Rr(this.headers);r&&Dr(r,(function(t,e){i.set(e,t)})),r=function(t){t:{for(var e=bi,n=t.length,r="string"==typeof t?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.L()),n=ae.FormData&&t instanceof ae.FormData,!(0<=Ee(Ei,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.a.setRequestHeader(e,t)}),this),this.I&&(this.a.responseType=this.I),"withCredentials"in this.a&&this.a.withCredentials!==this.F&&(this.a.withCredentials=this.F);try{Ii(this),0<this.o&&((this.D=function(t){return Fe&&Xe(9)&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.a))?(this.a.timeout=this.o,this.a.ontimeout=me(this.xa,this)):this.m=Bn(this.xa,this.o,this)),this.l=!0,this.a.send(t),this.l=!1}catch(s){Ti(this,s)}},ie.xa=function(){void 0!==oe&&this.a&&(this.f="Timed out after "+this.o+"ms, aborting",this.h=8,xn(this,"timeout"),this.abort(8))},ie.abort=function(t){this.a&&this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1,this.h=t||7,xn(this,"complete"),xn(this,"abort"),Si(this))},ie.G=function(){this.a&&(this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1),Si(this,!0)),yi.X.G.call(this)},ie.za=function(){this.j||(this.A||this.l||this.g?Ai(this):this.Ua())},ie.Ua=function(){Ai(this)},ie.W=function(){try{return 2<xi(this)?this.a.status:-1}catch(Ve){return-1}},ie.$=function(){try{return this.a?this.a.responseText:""}catch(Ve){return""}},ie.Pa=function(t){if(this.a){var e=this.a.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),gi(e)}},ie.ua=function(){return this.h},ie.Qa=function(){return"string"==typeof this.f?this.f:String(this.f)},(ie=Di.prototype).ha=8,ie.v=1,ie.Ba=function(t){if(this.h)if(this.h=null,1==this.v){if(!t){this.R=Math.floor(1e5*Math.random()),t=this.R++;var e,n=new gr(this,this.c,t,void 0),r=this.l;if(this.O&&(r?Le(r=Oe(r),this.O):r=this.O),null===this.i&&(n.B=r),this.da)t:{for(var i=e=0;i<this.g.length;i++){var s=this.g[i];if(void 0===(s="__data__"in s.a&&"string"==typeof(s=s.a.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=i;break t}if(4096===e||i===this.g.length-1){e=i+1;break t}}e=1e3}else e=1e3;e=Ui(this,n,e),$r(i=Mr(this.B),"RID",t),$r(i,"CVER",22),this.A&&$r(i,"X-HTTP-Session-Id",this.A),Vi(this,i),this.i&&r&&Ci(i,this.i,r),ui(this.b,n),this.Ia&&$r(i,"TYPE","init"),this.da?($r(i,"$req",e),$r(i,"SID","null"),n.U=!0,Er(n,i,null)):Er(n,i,e),this.v=2}}else 3==this.v&&(t?Mi(this,t):0==this.g.length||oi(this.b)||Mi(this))},ie.Aa=function(){if(this.j=null,Bi(this),this.U&&!(this.F||null==this.a||0>=this.N)){var t=2*this.N;this.c.info("BP detection timer enabled: "+t),this.s=sr(me(this.Ta,this),t)}},ie.Ta=function(){this.s&&(this.s=null,this.c.info("BP detection timeout reached."),this.c.info("Buffering proxy detected and switch to long-polling!"),this.H=!1,this.F=!0,rr(10),Oi(this),Bi(this))},ie.Sa=function(){null!=this.m&&(this.m=null,Oi(this),Hi(this),rr(19))},ie.Ya=function(t){t?(this.c.info("Successfully pinged google.com"),rr(2)):(this.c.info("Failed to ping google.com"),rr(1))},(ie=Xi.prototype).ta=function(){},ie.sa=function(){},ie.ra=function(){},ie.qa=function(){},ie.Ja=function(){},Yi.prototype.a=function(t,e){return new Ji(t,e)},ve(Ji,In),Ji.prototype.g=function(){this.a.f=this.f,this.m&&(this.a.C=!0);var t=this.a,e=this.o,n=this.b||void 0;rr(0),t.fa=e,t.V=n||{},t.H=t.S,t.B=Gi(t,null,t.fa),Pi(t)},Ji.prototype.close=function(){Ri(this.a)},Ji.prototype.h=function(t){if("string"==typeof t){var e={};e.__data__=t,Li(this.a,e)}else this.l?((e={}).__data__=Nn(t),Li(this.a,e)):Li(this.a,t)},Ji.prototype.G=function(){this.a.f=null,delete this.f,Ri(this.a),delete this.a,Ji.X.G.call(this)},ve(Zi,dr),ve(ts,pr),ve(es,Xi),es.prototype.ta=function(){xn(this.a,"a")},es.prototype.sa=function(t){xn(this.a,new Zi(t))},es.prototype.ra=function(t){xn(this.a,new ts(t))},es.prototype.qa=function(){xn(this.a,"b")},Yi.prototype.createWebChannel=Yi.prototype.a,Ji.prototype.send=Ji.prototype.h,Ji.prototype.open=Ji.prototype.g,Ji.prototype.close=Ji.prototype.close,or.NO_ERROR=0,or.TIMEOUT=8,or.HTTP_ERROR=6,ar.COMPLETE="complete",lr.EventType=fr,fr.OPEN="a",fr.CLOSE="b",fr.ERROR="c",fr.MESSAGE="d",In.prototype.listen=In.prototype.va,yi.prototype.listenOnce=yi.prototype.wa,yi.prototype.getLastError=yi.prototype.Qa,yi.prototype.getLastErrorCode=yi.prototype.ua,yi.prototype.getStatus=yi.prototype.W,yi.prototype.getResponseJson=yi.prototype.Pa,yi.prototype.getResponseText=yi.prototype.$,yi.prototype.send=yi.prototype.ba;var ns=or,rs=ar,is=Yn,ss=10,os=11,as=lr,cs=yi;
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
class us{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.t(t),this.i=t=>e.writeSequenceNumber(t))}t(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.i&&this.i(t),t}}us.o=-1;
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
const ls={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class hs extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */const fs=new qt("@firebase/firestore");function ds(){return fs.logLevel}function ps(t,...e){if(fs.logLevel<=Pt.DEBUG){const n=e.map(ys);fs.debug(`Firestore (8.4.1): ${t}`,...n)}}function ms(t,...e){if(fs.logLevel<=Pt.ERROR){const n=e.map(ys);fs.error(`Firestore (8.4.1): ${t}`,...n)}}function gs(t,...e){if(fs.logLevel<=Pt.WARN){const n=e.map(ys);fs.warn(`Firestore (8.4.1): ${t}`,...n)}}function ys(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(n){return t}
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
 */function vs(t="Unexpected state"){const e="FIRESTORE (8.4.1) INTERNAL ASSERTION FAILED: "+t;throw ms(e),new Error(e)}function ws(t,e){t||vs()}function Es(t,e){return t}
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
 */function bs(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */function Ts(t,e){return t<e?-1:t>e?1:0}function _s(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
 */class As{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new hs(ls.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new hs(ls.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new hs(ls.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new hs(ls.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return As.fromMillis(Date.now())}static fromDate(t){return As.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new As(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Ts(this.nanoseconds,t.nanoseconds):Ts(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class Ss{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ss(t)}static min(){return new Ss(new As(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function Is(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}
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
class Cs{constructor(t,e,n){void 0===e?e=0:e>t.length&&vs(),void 0===n?n=t.length-e:n>t.length-e&&vs(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Cs.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Cs?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ns extends Cs{construct(t,e,n){return new Ns(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new hs(ls.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ns(e)}static emptyPath(){return new Ns([])}}const Ds=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rs extends Cs{construct(t,e,n){return new Rs(t,e,n)}static isValidIdentifier(t){return Ds.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rs.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Rs(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new hs(ls.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new hs(ls.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new hs(ls.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new hs(ls.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Rs(e)}static emptyPath(){return new Rs([])}}
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
 */class Os{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Os(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Os(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ts(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Os.EMPTY_BYTE_STRING=new Os("");const ks=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ls(t){if(ws(!!t),"string"==typeof t){let e=0;const n=ks.exec(t);if(ws(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ps(t.seconds),nanos:Ps(t.nanos)}}function Ps(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ms(t){return"string"==typeof t?Os.fromBase64String(t):Os.fromUint8Array(t)}
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
 */function Vs(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Us(t){const e=t.mapValue.fields.__previous_value__;return Vs(e)?Us(e):e}function Fs(t){const e=Ls(t.mapValue.fields.__local_write_time__.timestampValue);return new As(e.seconds,e.nanos)}
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
 */function Hs(t){return null==t}function $s(t){return 0===t&&1/t==-1/0}
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
 */class Bs{constructor(t){this.path=t}static fromPath(t){return new Bs(Ns.fromString(t))}static fromName(t){return new Bs(Ns.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===Ns.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ns.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Bs(new Ns(t.slice()))}}
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
 */function qs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vs(t)?4:10:vs()}function js(t,e){const n=qs(t);if(n!==qs(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fs(t).isEqual(Fs(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ls(t.timestampValue),r=Ls(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r=e,Ms(t.bytesValue).isEqual(Ms(r.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ps(t.geoPointValue.latitude)===Ps(e.geoPointValue.latitude)&&Ps(t.geoPointValue.longitude)===Ps(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ps(t.integerValue)===Ps(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ps(t.doubleValue),r=Ps(e.doubleValue);return n===r?$s(n)===$s(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return _s(t.arrayValue.values||[],e.arrayValue.values||[],js);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Is(n)!==Is(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!js(n[i],r[i])))return!1;return!0}(t,e);default:return vs()}var r}function zs(t,e){return void 0!==(t.values||[]).find((t=>js(t,e)))}function Ks(t,e){const n=qs(t),r=qs(e);if(n!==r)return Ts(n,r);switch(n){case 0:return 0;case 1:return Ts(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ps(t.integerValue||t.doubleValue),r=Ps(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Ws(t.timestampValue,e.timestampValue);case 4:return Ws(Fs(t),Fs(e));case 5:return Ts(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ms(t),r=Ms(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=Ts(n[i],r[i]);if(0!==t)return t}return Ts(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Ts(Ps(t.latitude),Ps(e.latitude));return 0!==n?n:Ts(Ps(t.longitude),Ps(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Ks(n[i],r[i]);if(t)return t}return Ts(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=Ts(r[o],s[o]);if(0!==t)return t;const e=Ks(n[r[o]],i[s[o]]);if(0!==e)return e}return Ts(r.length,s.length)}(t.mapValue,e.mapValue);default:throw vs()}}function Ws(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Ts(t,e);const n=Ls(t),r=Ls(e),i=Ts(n.seconds,r.seconds);return 0!==i?i:Ts(n.nanos,r.nanos)}function Gs(t){return Qs(t)}function Qs(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ls(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ms(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Bs.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Qs(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Qs(t.fields[i])}`;return n+"}"}(t.mapValue):vs();var e,n}function Xs(t){return!!t&&"integerValue"in t}function Ys(t){return!!t&&"arrayValue"in t}function Js(t){return!!t&&"nullValue"in t}function Zs(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function to(t){return!!t&&"mapValue"in t}
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
 */class eo{constructor(t){this.overlayMap=new Map,this.partialValue=t}static empty(){return new eo({mapValue:{}})}field(t){return eo.extractNestedValue(this.buildProto(),t)}toProto(){return this.field(Rs.emptyPath())}set(t,e){this.setOverlay(t,e)}setAll(t){t.forEach(((t,e)=>{t?this.set(e,t):this.delete(e)}))}delete(t){this.setOverlay(t,null)}isEqual(t){return js(this.buildProto(),t.buildProto())}setOverlay(t,e){let n=this.overlayMap;for(let r=0;r<t.length-1;++r){const e=t.get(r);let i=n.get(e);i instanceof Map?n=i:i&&10===qs(i)?(i=new Map(Object.entries(i.mapValue.fields||{})),n.set(e,i),n=i):(i=new Map,n.set(e,i),n=i)}n.set(t.lastSegment(),e)}applyOverlay(t,e){let n=!1;const r=eo.extractNestedValue(this.partialValue,t),i=to(r)?Object.assign({},r.mapValue.fields):{};return e.forEach(((e,r)=>{if(e instanceof Map){const s=this.applyOverlay(t.child(r),e);null!=s&&(i[r]=s,n=!0)}else null!==e?(i[r]=e,n=!0):i.hasOwnProperty(r)&&(delete i[r],n=!0)})),n?{mapValue:{fields:i}}:null}buildProto(){const t=this.applyOverlay(Rs.emptyPath(),this.overlayMap);return null!=t&&(this.partialValue=t,this.overlayMap.clear()),this.partialValue}static extractNestedValue(t,e){if(e.isEmpty())return t;{let n=t;for(let t=0;t<e.length-1;++t){if(!n.mapValue.fields)return null;if(n=n.mapValue.fields[e.get(t)],!to(n))return null}return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}clone(){return new eo(this.buildProto())}}
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
 */class no{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new no(t,0,Ss.min(),eo.empty(),0)}static newFoundDocument(t,e,n){return new no(t,1,e,n,0)}static newNoDocument(t,e){return new no(t,2,e,eo.empty(),0)}static newUnknownDocument(t,e){return new no(t,3,e,eo.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=eo.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=eo.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof no&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new no(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.toProto())}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class ro{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.h=null}}function io(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ro(t,e,n,r,i,s,o)}function so(t){const e=Es(t);if(null===e.h){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+Gs(t.value)}(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),Hs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=wo(e.startAt)),e.endAt&&(t+="|ub:",t+=wo(e.endAt)),e.h=t}return e.h}function oo(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!bo(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!js(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_o(t.startAt,e.startAt)&&_o(t.endAt,e.endAt)}function ao(t){return Bs.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class co extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.l(t,e,n):new uo(t,e,n):"array-contains"===e?new po(t,n):"in"===e?new mo(t,n):"not-in"===e?new go(t,n):"array-contains-any"===e?new yo(t,n):new co(t,e,n)}static l(t,e,n){return"in"===e?new lo(t,n):new ho(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.m(Ks(e,this.value)):null!==e&&qs(this.value)===qs(e)&&this.m(Ks(e,this.value))}m(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return vs()}}g(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class uo extends co{constructor(t,e,n){super(t,e,n),this.key=Bs.fromName(n.referenceValue)}matches(t){const e=Bs.comparator(t.key,this.key);return this.m(e)}}class lo extends co{constructor(t,e){super(t,"in",e),this.keys=fo("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ho extends co{constructor(t,e){super(t,"not-in",e),this.keys=fo("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function fo(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Bs.fromName(t.referenceValue)))}class po extends co{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ys(e)&&zs(e.arrayValue,this.value)}}class mo extends co{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&zs(this.value.arrayValue,e)}}class go extends co{constructor(t,e){super(t,"not-in",e)}matches(t){if(zs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!zs(this.value.arrayValue,e)}}class yo extends co{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ys(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>zs(this.value.arrayValue,t)))}}class vo{constructor(t,e){this.position=t,this.before=e}}function wo(t){return`${t.before?"b":"a"}:${t.position.map((t=>Gs(t))).join(",")}`}class Eo{constructor(t,e="asc"){this.field=t,this.dir=e}}function bo(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function To(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Bs.comparator(Bs.fromName(o.referenceValue),n.key):Ks(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function _o(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!js(t.position[n],e.position[n]))return!1;return!0}
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
 */class Ao{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.p=null,this.T=null,this.startAt,this.endAt}}function So(t){return new Ao(t)}function Io(t){return!Hs(t.limit)&&"F"===t.limitType}function xo(t){return!Hs(t.limit)&&"L"===t.limitType}function Co(t){const e=Es(t);if(null===e.p){e.p=[];const t=function(t){for(const e of t.filters)if(e.g())return e.field;return null}(e),n=function(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}(e);if(null!==t&&null===n)t.isKeyField()||e.p.push(new Eo(t)),e.p.push(new Eo(Rs.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.p.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.p.push(new Eo(Rs.keyField(),t))}}}return e.p}function No(t){const e=Es(t);if(!e.T)if("F"===e.limitType)e.T=io(e.path,e.collectionGroup,Co(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Co(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Eo(i.field,e))}const n=e.endAt?new vo(e.endAt.position,!e.endAt.before):null,r=e.startAt?new vo(e.startAt.position,!e.startAt.before):null;e.T=io(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.T}function Do(t,e){return oo(No(t),No(e))&&t.limitType===e.limitType}function Ro(t){return`${so(No(t))}|lt:${t.limitType}`}function Oo(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Gs(e.value)}`;var e})).join(", ")}]`),Hs(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: "+wo(t.startAt)),t.endAt&&(e+=", endAt: "+wo(t.endAt)),`Target(${e})`}(No(t))}; limitType=${t.limitType})`}function ko(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Bs.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(r=e,!((n=t).startAt&&!To(n.startAt,Co(n),r)||n.endAt&&To(n.endAt,Co(n),r)));var n,r}function Lo(t){return(e,n)=>{let r=!1;for(const i of Co(t)){const t=Po(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Po(t,e,n){const r=t.field.isKeyField()?Bs.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Ks(r,i):vs()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return vs()}}
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
class Mo{constructor(){this._=void 0}}function Vo(t,e,n){return t instanceof Fo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Ho?$o(t,e):t instanceof Bo?qo(t,e):function(t,e){const n=function(t,e){return t instanceof jo?Xs(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}(t,e),r=zo(n)+zo(t.A);return Xs(n)&&Xs(t.A)?function(t){return{integerValue:""+t}}(r):function(t,e){if(t.I){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$s(e)?"-0":e}}(t.R,r)}(t,e)}function Uo(t,e,n){return t instanceof Ho?$o(t,e):t instanceof Bo?qo(t,e):n}class Fo extends Mo{}class Ho extends Mo{constructor(t){super(),this.elements=t}}function $o(t,e){const n=Ko(e);for(const r of t.elements)n.some((t=>js(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Bo extends Mo{constructor(t){super(),this.elements=t}}function qo(t,e){let n=Ko(e);for(const r of t.elements)n=n.filter((t=>!js(t,r)));return{arrayValue:{values:n}}}class jo extends Mo{constructor(t,e){super(),this.R=t,this.A=e}}function zo(t){return Ps(t.integerValue||t.doubleValue)}function Ko(t){return Ys(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Wo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Go{}function Qo(t,e,n){var r;t instanceof Zo?function(t,e,n){const r=t.value.clone(),i=na(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof ta?function(t,e,n){if(!Wo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=na(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(ea(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):(r=n,e.convertToNoDocument(r.version).setHasCommittedMutations())}function Xo(t,e,n){var r;t instanceof Zo?function(t,e,n){if(!Wo(t.precondition,e))return;const r=t.value.clone(),i=ra(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(Jo(e),r).setHasLocalMutations()}(t,e,n):t instanceof ta?function(t,e,n){if(!Wo(t.precondition,e))return;const r=ra(t.fieldTransforms,n,e),i=e.data;i.setAll(ea(t)),i.setAll(r),e.convertToFoundDocument(Jo(e),i).setHasLocalMutations()}(t,e,n):(r=e,Wo(t.precondition,r)&&r.convertToNoDocument(Ss.min()))}function Yo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&_s(n,r,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,r=e.transform,n instanceof Ho&&r instanceof Ho||n instanceof Bo&&r instanceof Bo?_s(n.elements,r.elements,js):n instanceof jo&&r instanceof jo?js(n.A,r.A):n instanceof Fo&&r instanceof Fo);var n,r}(t,e))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask)));var n,r}function Jo(t){return t.isFoundDocument()?t.version:Ss.min()}class Zo extends Go{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class ta extends Go{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function ea(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function na(t,e,n){const r=new Map;ws(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Uo(o,a,n[i]))}return r}function ra(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Vo(t,s,e))}return r}
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
 */class ia{constructor(t){this.count=t}}
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
 */var sa,oa;function aa(t){if(void 0===t)return ms("GRPC error has no .code"),ls.UNKNOWN;switch(t){case sa.OK:return ls.OK;case sa.CANCELLED:return ls.CANCELLED;case sa.UNKNOWN:return ls.UNKNOWN;case sa.DEADLINE_EXCEEDED:return ls.DEADLINE_EXCEEDED;case sa.RESOURCE_EXHAUSTED:return ls.RESOURCE_EXHAUSTED;case sa.INTERNAL:return ls.INTERNAL;case sa.UNAVAILABLE:return ls.UNAVAILABLE;case sa.UNAUTHENTICATED:return ls.UNAUTHENTICATED;case sa.INVALID_ARGUMENT:return ls.INVALID_ARGUMENT;case sa.NOT_FOUND:return ls.NOT_FOUND;case sa.ALREADY_EXISTS:return ls.ALREADY_EXISTS;case sa.PERMISSION_DENIED:return ls.PERMISSION_DENIED;case sa.FAILED_PRECONDITION:return ls.FAILED_PRECONDITION;case sa.ABORTED:return ls.ABORTED;case sa.OUT_OF_RANGE:return ls.OUT_OF_RANGE;case sa.UNIMPLEMENTED:return ls.UNIMPLEMENTED;case sa.DATA_LOSS:return ls.DATA_LOSS;default:return vs()}}(oa=sa||(sa={}))[oa.OK=0]="OK",oa[oa.CANCELLED=1]="CANCELLED",oa[oa.UNKNOWN=2]="UNKNOWN",oa[oa.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oa[oa.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oa[oa.NOT_FOUND=5]="NOT_FOUND",oa[oa.ALREADY_EXISTS=6]="ALREADY_EXISTS",oa[oa.PERMISSION_DENIED=7]="PERMISSION_DENIED",oa[oa.UNAUTHENTICATED=16]="UNAUTHENTICATED",oa[oa.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oa[oa.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oa[oa.ABORTED=10]="ABORTED",oa[oa.OUT_OF_RANGE=11]="OUT_OF_RANGE",oa[oa.UNIMPLEMENTED=12]="UNIMPLEMENTED",oa[oa.INTERNAL=13]="INTERNAL",oa[oa.UNAVAILABLE=14]="UNAVAILABLE",oa[oa.DATA_LOSS=15]="DATA_LOSS";
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
class ca{constructor(t,e){this.comparator=t,this.root=e||la.EMPTY}insert(t,e){return new ca(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,la.BLACK,null,null))}remove(t){return new ca(this.comparator,this.root.remove(t,this.comparator).copy(null,null,la.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ua(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ua(this.root,t,this.comparator,!1)}getReverseIterator(){return new ua(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ua(this.root,t,this.comparator,!0)}}class ua{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class la{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:la.RED,this.left=null!=r?r:la.EMPTY,this.right=null!=i?i:la.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new la(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return la.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return la.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,la.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,la.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw vs();if(this.right.isRed())throw vs();const t=this.left.check();if(t!==this.right.check())throw vs();return t+(this.isRed()?0:1)}}la.EMPTY=null,la.RED=!0,la.BLACK=!1,la.EMPTY=new class{constructor(){this.size=0}get key(){throw vs()}get value(){throw vs()}get color(){throw vs()}get left(){throw vs()}get right(){throw vs()}copy(t,e,n,r,i){return this}insert(t,e,n){return new la(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class ha{constructor(t){this.comparator=t,this.data=new ca(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new fa(this.data.getIterator())}getIteratorFrom(t){return new fa(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof ha))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ha(this.comparator);return e.data=t,e}}class fa{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
 */const da=new ca(Bs.comparator);function pa(){return da}const ma=new ca(Bs.comparator);function ga(){return ma}const ya=new ha(Bs.comparator);function va(...t){let e=ya;for(const n of t)e=e.add(n);return e}const wa=new ha(Ts);function Ea(){return wa}
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
 */class ba{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Ta.createSynthesizedTargetChangeForCurrentChange(t,e)),new ba(Ss.min(),n,Ea(),pa(),va())}}class Ta{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Ta(Os.EMPTY_BYTE_STRING,e,va(),va(),va())}}
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
 */class _a{constructor(t,e,n,r){this.P=t,this.removedTargetIds=e,this.key=n,this.v=r}}class Aa{constructor(t,e){this.targetId=t,this.V=e}}class Sa{constructor(t,e,n=Os.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Ia{constructor(){this.S=0,this.D=Na(),this.C=Os.EMPTY_BYTE_STRING,this.N=!1,this.k=!0}get current(){return this.N}get resumeToken(){return this.C}get O(){return 0!==this.S}get $(){return this.k}M(t){t.approximateByteSize()>0&&(this.k=!0,this.C=t)}F(){let t=va(),e=va(),n=va();return this.D.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:vs()}})),new Ta(this.C,this.N,t,e,n)}L(){this.k=!1,this.D=Na()}B(t,e){this.k=!0,this.D=this.D.insert(t,e)}q(t){this.k=!0,this.D=this.D.remove(t)}U(){this.S+=1}K(){this.S-=1}j(){this.k=!0,this.N=!0}}class xa{constructor(t){this.W=t,this.G=new Map,this.H=pa(),this.J=Ca(),this.Y=new ha(Ts)}X(t){for(const e of t.P)t.v&&t.v.isFoundDocument()?this.Z(e,t.v):this.tt(e,t.key,t.v);for(const e of t.removedTargetIds)this.tt(e,t.key,t.v)}et(t){this.forEachTarget(t,(e=>{const n=this.nt(e);switch(t.state){case 0:this.st(e)&&n.M(t.resumeToken);break;case 1:n.K(),n.O||n.L(),n.M(t.resumeToken);break;case 2:n.K(),n.O||this.removeTarget(e);break;case 3:this.st(e)&&(n.j(),n.M(t.resumeToken));break;case 4:this.st(e)&&(this.it(e),n.M(t.resumeToken));break;default:vs()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.G.forEach(((t,n)=>{this.st(n)&&e(n)}))}rt(t){const e=t.targetId,n=t.V.count,r=this.ot(e);if(r){const t=r.target;if(ao(t))if(0===n){const n=new Bs(t.path);this.tt(e,n,no.newNoDocument(n,Ss.min()))}else ws(1===n);else this.ct(e)!==n&&(this.it(e),this.Y=this.Y.add(e))}}ut(t){const e=new Map;this.G.forEach(((n,r)=>{const i=this.ot(r);if(i){if(n.current&&ao(i.target)){const e=new Bs(i.target.path);null!==this.H.get(e)||this.at(r,e)||this.tt(r,e,no.newNoDocument(e,t))}n.$&&(e.set(r,n.F()),n.L())}}));let n=va();this.J.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.ot(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))}));const r=new ba(t,e,this.Y,this.H,n);return this.H=pa(),this.J=Ca(),this.Y=new ha(Ts),r}Z(t,e){if(!this.st(t))return;const n=this.at(t,e.key)?2:0;this.nt(t).B(e.key,n),this.H=this.H.insert(e.key,e),this.J=this.J.insert(e.key,this.ht(e.key).add(t))}tt(t,e,n){if(!this.st(t))return;const r=this.nt(t);this.at(t,e)?r.B(e,1):r.q(e),this.J=this.J.insert(e,this.ht(e).delete(t)),n&&(this.H=this.H.insert(e,n))}removeTarget(t){this.G.delete(t)}ct(t){const e=this.nt(t).F();return this.W.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}U(t){this.nt(t).U()}nt(t){let e=this.G.get(t);return e||(e=new Ia,this.G.set(t,e)),e}ht(t){let e=this.J.get(t);return e||(e=new ha(Ts),this.J=this.J.insert(t,e)),e}st(t){const e=null!==this.ot(t);return e||ps("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.G.get(t);return e&&e.O?null:this.W.lt(t)}it(t){this.G.set(t,new Ia),this.W.getRemoteKeysForTarget(t).forEach((e=>{this.tt(t,e,null)}))}at(t,e){return this.W.getRemoteKeysForTarget(t).has(e)}}function Ca(){return new ca(Bs.comparator)}function Na(){return new ca(Bs.comparator)}
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
 */const Da={asc:"ASCENDING",desc:"DESCENDING"},Ra={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Oa{constructor(t,e){this.databaseId=t,this.I=e}}function ka(t){return ws(!!t),Ss.fromTimestamp(function(t){const e=Ls(t);return new As(e.seconds,e.nanos)}(t))}function La(t){const e=Ns.fromString(t);return ws(Ya(e)),e}function Pa(t,e){const n=La(e);if(n.get(1)!==t.databaseId.projectId)throw new hs(ls.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new hs(ls.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Bs(Ua(n))}function Ma(t,e){return function(t,e){return(n=t,new Ns(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}(t.databaseId,e)}function Va(t){return new Ns(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ua(t){return ws(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Fa(t,e){return{documents:[Ma(t,e.path)]}}function Ha(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Ma(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ma(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Zs(t.value))return{unaryFilter:{field:Wa(t.field),op:"IS_NAN"}};if(Js(t.value))return{unaryFilter:{field:Wa(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Zs(t.value))return{unaryFilter:{field:Wa(t.field),op:"IS_NOT_NAN"}};if(Js(t.value))return{unaryFilter:{field:Wa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wa(t.field),op:Ka(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>{return{field:Wa((e=t).field),direction:za(e.dir)};var e}))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=(a=t,c=e.limit,a.I||Hs(c)?c:{value:c});var a,c;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=qa(e.startAt)),e.endAt&&(n.structuredQuery.endAt=qa(e.endAt)),n}function $a(t){let e=function(t){const e=La(t);return 4===e.length?Ns.emptyPath():Ua(e)}(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ws(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Ba(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new Eo(Ga((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Hs(e)?null:e}(n.limit));let c=null;n.startAt&&(c=ja(n.startAt));let u=null;return n.endAt&&(u=ja(n.endAt)),function(t,e,n,r,i,s,o,a){return new Ao(t,e,n,r,i,s,o,a)}(e,i,o,s,a,"F",c,u)}function Ba(t){return t?void 0!==t.unaryFilter?[Xa(t)]:void 0!==t.fieldFilter?[Qa(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Ba(t))).reduce(((t,e)=>t.concat(e))):vs():[]}function qa(t){return{before:t.before,values:t.position}}function ja(t){const e=!!t.before,n=t.values||[];return new vo(n,e)}function za(t){return Da[t]}function Ka(t){return Ra[t]}function Wa(t){return{fieldPath:t.canonicalString()}}function Ga(t){return Rs.fromServerFormat(t.fieldPath)}function Qa(t){return co.create(Ga(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return vs()}}(t.fieldFilter.op),t.fieldFilter.value)}function Xa(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ga(t.unaryFilter.field);return co.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ga(t.unaryFilter.field);return co.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ga(t.unaryFilter.field);return co.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ga(t.unaryFilter.field);return co.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return vs()}}function Ya(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
class Ja{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class Za{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&vs(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Za(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Za?e:Za.resolve(e)}catch(e){return Za.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Za.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Za.reject(e)}static resolve(t){return new Za(((e,n)=>{e(t)}))}static reject(t){return new Za(((e,n)=>{n(t)}))}static waitFor(t){return new Za(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Za.resolve(!1);for(const n of t)e=e.next((t=>t?Za.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}}function tc(t){return"IndexedDbTransactionError"===t.name}
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
 */class ec{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Qo(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Xo(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Xo(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(Ss.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),va())}isEqual(t){return this.batchId===t.batchId&&_s(this.mutations,t.mutations,((t,e)=>Yo(t,e)))&&_s(this.baseMutations,t.baseMutations,((t,e)=>Yo(t,e)))}}
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
 */class nc{constructor(t,e,n,r,i=Ss.min(),s=Ss.min(),o=Os.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new nc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new nc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new nc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class rc{constructor(t){this.Lt=t}}function ic(t){const e=$a({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?function(t,e,n){return new Ao(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(e,e.limit,"L"):e}
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
 */class sc{constructor(){this.Bt=new oc}addToCollectionParentIndex(t,e){return this.Bt.add(e),Za.resolve()}getCollectionParents(t,e){return Za.resolve(this.Bt.getEntries(e))}}class oc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new ha(Ns.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new ha(Ns.comparator)).toArray()}}
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
 */class ac{constructor(t){this.Ht=t}next(){return this.Ht+=2,this.Ht}static Jt(){return new ac(0)}static Yt(){return new ac(-1)}}
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
 */async function cc(t){if(t.code!==ls.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;ps("LocalStore","Unexpectedly lost primary lease")}
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
 */class uc{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){xs(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(this.inner)}}
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
class lc{constructor(t,e,n){this.Ue=t,this._n=e,this.Ut=n}mn(t,e){return this._n.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.gn(t,e,n)))}gn(t,e,n){return this.Ue.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}yn(t,e){t.forEach(((t,n)=>{for(const r of e)r.applyToLocalView(n)}))}pn(t,e){return this.Ue.getEntries(t,e).next((e=>this.En(t,e).next((()=>e))))}En(t,e){return this._n.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.yn(e,t)))}getDocumentsMatchingQuery(t,e,n){return r=e,Bs.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.Tn(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.In(t,e,n):this.An(t,e,n);var r}Tn(t,e){return this.mn(t,new Bs(e)).next((t=>{let e=ga();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}In(t,e,n){const r=e.collectionGroup;let i=ga();return this.Ut.getCollectionParents(t,r).next((s=>Za.forEach(s,(s=>{const o=(a=e,c=s.child(r),new Ao(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.An(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}An(t,e,n){let r,i;return this.Ue.getDocumentsMatchingQuery(t,e,n).next((n=>(r=n,this._n.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(i=e,this.Rn(t,i,r).next((t=>{r=t;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=no.newInvalidDocument(n),r=r.insert(n,i)),Xo(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((t,n)=>{ko(e,n)||(r=r.remove(t))})),r)))}Rn(t,e,n){let r=va();for(const s of e)for(const t of s.mutations)t instanceof ta&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.Ue.getEntries(t,r).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))})),i)))}}
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
 */class hc{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Pn=n,this.bn=r}static vn(t,e){let n=va(),r=va();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new hc(t,e.fromCache,n,r)}}
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
 */class fc{Vn(t){this.Sn=t}getDocumentsMatchingQuery(t,e,n,r){return 0===(i=e).filters.length&&null===i.limit&&null==i.startAt&&null==i.endAt&&(0===i.explicitOrderBy.length||1===i.explicitOrderBy.length&&i.explicitOrderBy[0].field.isKeyField())||n.isEqual(Ss.min())?this.Dn(t,e):this.Sn.pn(t,r).next((i=>{const s=this.Cn(e,i);return(Io(e)||xo(e))&&this.Nn(e.limitType,s,r,n)?this.Dn(t,e):(ds()<=Pt.DEBUG&&ps("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Oo(e)),this.Sn.getDocumentsMatchingQuery(t,e,n).next((t=>(s.forEach((e=>{t=t.insert(e.key,e)})),t))))}));var i}Cn(t,e){let n=new ha(Lo(t));return e.forEach(((e,r)=>{ko(t,r)&&(n=n.add(r))})),n}Nn(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Dn(t,e){return ds()<=Pt.DEBUG&&ps("QueryEngine","Using full collection scan to execute query:",Oo(e)),this.Sn.getDocumentsMatchingQuery(t,e,Ss.min())}}
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
 */class dc{constructor(t,e,n,r){this.persistence=t,this.xn=e,this.R=r,this.kn=new ca(Ts),this.On=new uc((t=>so(t)),oo),this.$n=Ss.min(),this._n=t.getMutationQueue(n),this.Mn=t.getRemoteDocumentCache(),this.qe=t.getTargetCache(),this.Fn=new lc(this.Mn,this._n,this.persistence.getIndexManager()),this.Ke=t.getBundleCache(),this.xn.Vn(this.Fn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.kn)))}}async function pc(t,e){const n=Es(t);let r=n._n,i=n.Fn;const s=await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n._n.getAllMutationBatches(t).next((o=>(s=o,r=n.persistence.getMutationQueue(e),i=new lc(n.Mn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t)))).next((e=>{const n=[],r=[];let o=va();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.pn(t,o).next((t=>({Ln:t,removedBatchIds:n,addedBatchIds:r})))}))}));return n._n=r,n.Fn=i,n.xn.Vn(n.Fn),s}function mc(t){const e=Es(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.qe.getLastRemoteSnapshotVersion(t)))}function gc(t,e){const n=Es(t),r=e.snapshotVersion;let i=n.kn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Mn.newChangeBuffer({trackRemovals:!0});i=n.kn;const o=[];e.targetChanges.forEach(((e,s)=>{const a=i.get(s);if(!a)return;o.push(n.qe.removeMatchingKeys(t,e.removedDocuments,s).next((()=>n.qe.addMatchingKeys(t,e.addedDocuments,s))));const c=e.resumeToken;if(c.approximateByteSize()>0){const f=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(s,f),u=a,h=e,ws((l=f).resumeToken.approximateByteSize()>0),(0===u.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||h.addedDocuments.size+h.modifiedDocuments.size+h.removedDocuments.size>0)&&o.push(n.qe.updateTargetData(t,f))}var u,l,h}));let a=pa();if(e.documentUpdates.forEach(((r,i)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(function(t,e,n,r,i){let s=va();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=pa();return n.forEach(((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(Ss.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):ps("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}(t,s,e.documentUpdates,r,void 0).next((t=>{a=t}))),!r.isEqual(Ss.min())){const e=n.qe.getLastRemoteSnapshotVersion(t).next((e=>n.qe.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Za.waitFor(o).next((()=>s.apply(t))).next((()=>n.Fn.En(t,a))).next((()=>a))})).then((t=>(n.kn=i,t)))}async function yc(t,e,n){const r=Es(t),i=r.kn.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(o){if(!tc(o))throw o;ps("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.kn=r.kn.remove(e),r.On.delete(i.target)}function vc(t,e,n){const r=Es(t);let i=Ss.min(),s=va();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Es(t),i=r.On.get(n);return void 0!==i?Za.resolve(r.kn.get(i)):r.qe.getTargetData(e,n)}(r,t,No(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.qe.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.xn.getDocumentsMatchingQuery(t,e,n?i:Ss.min(),n?s:va()))).next((t=>({documents:t,Bn:s})))))}
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
 */class wc{constructor(t){this.R=t,this.Qn=new Map,this.jn=new Map}getBundleMetadata(t,e){return Za.resolve(this.Qn.get(e))}saveBundleMetadata(t,e){var n;return this.Qn.set(e.id,{id:(n=e).id,version:n.version,createTime:ka(n.createTime)}),Za.resolve()}getNamedQuery(t,e){return Za.resolve(this.jn.get(e))}saveNamedQuery(t,e){return this.jn.set(e.name,{name:(n=e).name,query:ic(n.bundledQuery),readTime:ka(n.readTime)}),Za.resolve();var n}}
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
 */class Ec{constructor(){this.Wn=new ha(bc.Gn),this.zn=new ha(bc.Hn)}isEmpty(){return this.Wn.isEmpty()}addReference(t,e){const n=new bc(t,e);this.Wn=this.Wn.add(n),this.zn=this.zn.add(n)}Jn(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Yn(new bc(t,e))}Xn(t,e){t.forEach((t=>this.removeReference(t,e)))}Zn(t){const e=new Bs(new Ns([])),n=new bc(e,t),r=new bc(e,t+1),i=[];return this.zn.forEachInRange([n,r],(t=>{this.Yn(t),i.push(t.key)})),i}ts(){this.Wn.forEach((t=>this.Yn(t)))}Yn(t){this.Wn=this.Wn.delete(t),this.zn=this.zn.delete(t)}es(t){const e=new Bs(new Ns([])),n=new bc(e,t),r=new bc(e,t+1);let i=va();return this.zn.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new bc(t,0),n=this.Wn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class bc{constructor(t,e){this.key=t,this.ns=e}static Gn(t,e){return Bs.comparator(t.key,e.key)||Ts(t.ns,e.ns)}static Hn(t,e){return Ts(t.ns,e.ns)||Bs.comparator(t.key,e.key)}}
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
 */class Tc{constructor(t,e){this.Ut=t,this.referenceDelegate=e,this._n=[],this.ss=1,this.rs=new ha(bc.Gn)}checkEmpty(t){return Za.resolve(0===this._n.length)}addMutationBatch(t,e,n,r){const i=this.ss;this.ss++,this._n.length>0&&this._n[this._n.length-1];const s=new ec(i,e,n,r);this._n.push(s);for(const o of r)this.rs=this.rs.add(new bc(o.key,i)),this.Ut.addToCollectionParentIndex(t,o.key.path.popLast());return Za.resolve(s)}lookupMutationBatch(t,e){return Za.resolve(this.os(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.cs(n),i=r<0?0:r;return Za.resolve(this._n.length>i?this._n[i]:null)}getHighestUnacknowledgedBatchId(){return Za.resolve(0===this._n.length?-1:this.ss-1)}getAllMutationBatches(t){return Za.resolve(this._n.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new bc(e,0),r=new bc(e,Number.POSITIVE_INFINITY),i=[];return this.rs.forEachInRange([n,r],(t=>{const e=this.os(t.ns);i.push(e)})),Za.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ha(Ts);return e.forEach((t=>{const e=new bc(t,0),r=new bc(t,Number.POSITIVE_INFINITY);this.rs.forEachInRange([e,r],(t=>{n=n.add(t.ns)}))})),Za.resolve(this.us(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Bs.isDocumentKey(i)||(i=i.child(""));const s=new bc(new Bs(i),0);let o=new ha(Ts);return this.rs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ns)),!0)}),s),Za.resolve(this.us(o))}us(t){const e=[];return t.forEach((t=>{const n=this.os(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ws(0===this.hs(e.batchId,"removed")),this._n.shift();let n=this.rs;return Za.forEach(e.mutations,(r=>{const i=new bc(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.rs=n}))}Gt(t){}containsKey(t,e){const n=new bc(e,0),r=this.rs.firstAfterOrEqual(n);return Za.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this._n.length,Za.resolve()}hs(t,e){return this.cs(t)}cs(t){return 0===this._n.length?0:t-this._n[0].batchId}os(t){const e=this.cs(t);return e<0||e>=this._n.length?null:this._n[e]}}
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
 */class _c{constructor(t,e){this.Ut=t,this.ls=e,this.docs=new ca(Bs.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.ls(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Ut.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Za.resolve(n?n.document.clone():no.newInvalidDocument(e))}getEntries(t,e){let n=pa();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():no.newInvalidDocument(t))})),Za.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=pa();const i=new Bs(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||ko(e,i)&&(r=r.insert(i.key,i.clone()))}return Za.resolve(r)}fs(t,e){return Za.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Ac(this)}getSize(t){return Za.resolve(this.size)}}class Ac extends class{constructor(){this.changes=new uc((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:Ss.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:no.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Za.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.Ie=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?e.push(this.Ie.addEntry(t,r.document,this.getReadTime(n))):this.Ie.removeEntry(n)})),Za.waitFor(e)}getFromCache(t,e){return this.Ie.getEntry(t,e)}getAllFromCache(t,e){return this.Ie.getEntries(t,e)}}
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
 */class Sc{constructor(t){this.persistence=t,this.ds=new uc((t=>so(t)),oo),this.lastRemoteSnapshotVersion=Ss.min(),this.highestTargetId=0,this.ws=0,this._s=new Ec,this.targetCount=0,this.gs=ac.Jt()}forEachTarget(t,e){return this.ds.forEach(((t,n)=>e(n))),Za.resolve()}getLastRemoteSnapshotVersion(t){return Za.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Za.resolve(this.ws)}allocateTargetId(t){return this.highestTargetId=this.gs.next(),Za.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ws&&(this.ws=e),Za.resolve()}te(t){this.ds.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.gs=new ac(e),this.highestTargetId=e),t.sequenceNumber>this.ws&&(this.ws=t.sequenceNumber)}addTargetData(t,e){return this.te(e),this.targetCount+=1,Za.resolve()}updateTargetData(t,e){return this.te(e),Za.resolve()}removeTargetData(t,e){return this.ds.delete(e.target),this._s.Zn(e.targetId),this.targetCount-=1,Za.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.ds.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.ds.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Za.waitFor(i).next((()=>r))}getTargetCount(t){return Za.resolve(this.targetCount)}getTargetData(t,e){const n=this.ds.get(e)||null;return Za.resolve(n)}addMatchingKeys(t,e,n){return this._s.Jn(e,n),Za.resolve()}removeMatchingKeys(t,e,n){this._s.Xn(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Za.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this._s.Zn(e),Za.resolve()}getMatchingKeysForTargetId(t,e){const n=this._s.es(e);return Za.resolve(n)}containsKey(t,e){return Za.resolve(this._s.containsKey(e))}}
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
 */class Ic{constructor(t,e){var n;this.ys={},this.Ne=new us(0),this.xe=!1,this.xe=!0,this.referenceDelegate=t(this),this.qe=new Sc(this),this.Ut=new sc,this.Ue=(n=this.Ut,new _c(n,(t=>this.referenceDelegate.ps(t)))),this.R=new rc(e),this.Ke=new wc(this.R)}start(){return Promise.resolve()}shutdown(){return this.xe=!1,Promise.resolve()}get started(){return this.xe}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ut}getMutationQueue(t){let e=this.ys[t.toKey()];return e||(e=new Tc(this.Ut,this.referenceDelegate),this.ys[t.toKey()]=e),e}getTargetCache(){return this.qe}getRemoteDocumentCache(){return this.Ue}getBundleCache(){return this.Ke}runTransaction(t,e,n){ps("MemoryPersistence","Starting transaction:",t);const r=new xc(this.Ne.next());return this.referenceDelegate.Es(),n(r).next((t=>this.referenceDelegate.Ts(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Is(t,e){return Za.or(Object.values(this.ys).map((n=>()=>n.containsKey(t,e))))}}class xc extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class Cc{constructor(t){this.persistence=t,this.As=new Ec,this.Rs=null}static Ps(t){return new Cc(t)}get bs(){if(this.Rs)return this.Rs;throw vs()}addReference(t,e,n){return this.As.addReference(n,e),this.bs.delete(n.toString()),Za.resolve()}removeReference(t,e,n){return this.As.removeReference(n,e),this.bs.add(n.toString()),Za.resolve()}markPotentiallyOrphaned(t,e){return this.bs.add(e.toString()),Za.resolve()}removeTarget(t,e){this.As.Zn(e.targetId).forEach((t=>this.bs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.bs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Es(){this.Rs=new Set}Ts(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Za.forEach(this.bs,(n=>{const r=Bs.fromPath(n);return this.vs(t,r).next((t=>{t||e.removeEntry(r)}))})).next((()=>(this.Rs=null,e.apply(t))))}updateLimboDocument(t,e){return this.vs(t,e).next((t=>{t?this.bs.delete(e.toString()):this.bs.add(e.toString())}))}ps(t){return 0}vs(t,e){return Za.or([()=>Za.resolve(this.As.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Is(t,e)])}}
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
 */class Nc{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Nc.UNAUTHENTICATED=new Nc(null),Nc.GOOGLE_CREDENTIALS=new Nc("google-credentials-uid"),Nc.FIRST_PARTY=new Nc("first-party-uid");class Dc{constructor(){this.activeTargetIds=Ea()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}Cs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ss(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Rc{constructor(){this.li=new Dc,this.fi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.li.Ds(t),this.fi[t]||"not-current"}updateQueryState(t,e,n){this.fi[t]=e}removeLocalQueryTarget(t){this.li.Cs(t)}isLocalQueryTarget(t){return this.li.activeTargetIds.has(t)}clearQueryState(t){delete this.fi[t]}getAllActiveQueryTargets(){return this.li.activeTargetIds}isActiveQueryTarget(t){return this.li.activeTargetIds.has(t)}start(){return this.li=new Dc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
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
 */class Oc{di(t){}shutdown(){}}
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
 */class kc{constructor(){this.wi=()=>this._i(),this.mi=()=>this.gi(),this.yi=[],this.pi()}di(t){this.yi.push(t)}shutdown(){window.removeEventListener("online",this.wi),window.removeEventListener("offline",this.mi)}pi(){window.addEventListener("online",this.wi),window.addEventListener("offline",this.mi)}_i(){ps("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.yi)t(0)}gi(){ps("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.yi)t(1)}static gt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const Lc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class Pc{constructor(t){this.Ei=t.Ei,this.Ti=t.Ti}Ii(t){this.Ai=t}Ri(t){this.Pi=t}onMessage(t){this.bi=t}close(){this.Ti()}send(t){this.Ei(t)}vi(){this.Ai()}Vi(t){this.Pi(t)}Si(t){this.bi(t)}}
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
 */class Mc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Di=e+"://"+t.host,this.Ci="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Ni(t,e,n,r){const i=this.xi(t,e);ps("RestConnection","Sending: ",i,n);const s={};return this.ki(s,r),this.Oi(t,i,s,n).then((t=>(ps("RestConnection","Received: ",t),t)),(e=>{throw gs("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}$i(t,e,n,r){return this.Ni(t,e,n,r)}ki(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/8.4.1",t["X-Firebase-GMPID"]=this.databaseInfo.appId,t["Content-Type"]="text/plain",e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}xi(t,e){const n=Lc[t];return`${this.Di}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling}Oi(t,e,n,r){return new Promise(((i,s)=>{const o=new cs;o.listenOnce(rs.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case ns.NO_ERROR:const e=o.getResponseJson();ps("Connection","XHR received:",JSON.stringify(e)),i(e);break;case ns.TIMEOUT:ps("Connection",'RPC "'+t+'" timed out'),s(new hs(ls.DEADLINE_EXCEEDED,"Request time out"));break;case ns.HTTP_ERROR:const n=o.getStatus();if(ps("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(ls).indexOf(e)>=0?e:ls.UNKNOWN}(t.status);s(new hs(e,t.message))}else s(new hs(ls.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new hs(ls.UNAVAILABLE,"Connection failed."));break;default:vs()}}finally{ps("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}Mi(t,e){const n=[this.Di,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=new Yi,i=Zn(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};var o,a;this.ki(s.initMessageHeaders,e),"undefined"!=typeof window&&(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())||"object"==typeof navigator&&"ReactNative"===navigator.product||xt().indexOf("Electron/")>=0||((a=xt()).indexOf("MSIE ")>=0||a.indexOf("Trident/")>=0)||xt().indexOf("MSAppHost/")>=0||"object"==typeof(o="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)&&void 0!==o.id||(s.httpHeadersOverwriteParam="$httpHeaders");const c=n.join("");ps("Connection","Creating WebChannel: "+c,s);const u=r.createWebChannel(c,s);let l=!1,h=!1;const f=new Pc({Ei:t=>{h?ps("Connection","Not sending because WebChannel is closed:",t):(l||(ps("Connection","Opening WebChannel transport."),u.open(),l=!0),ps("Connection","WebChannel sending:",t),u.send(t))},Ti:()=>u.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(u,as.EventType.OPEN,(()=>{h||ps("Connection","WebChannel transport opened.")})),d(u,as.EventType.CLOSE,(()=>{h||(h=!0,ps("Connection","WebChannel transport closed"),f.Vi())})),d(u,as.EventType.ERROR,(t=>{h||(h=!0,gs("Connection","WebChannel transport errored:",t),f.Vi(new hs(ls.UNAVAILABLE,"The operation could not be completed")))})),d(u,as.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];ws(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){ps("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=sa[t];if(void 0!==e)return aa(e)}(t),n=i.message;void 0===e&&(e=ls.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,f.Vi(new hs(e,n)),u.close()}else ps("Connection","WebChannel received:",n),f.Si(n)}})),d(i,is.STAT_EVENT,(t=>{t.stat===ss?ps("Connection","Detected buffering proxy"):t.stat===os&&ps("Connection","Detected no buffering proxy")})),setTimeout((()=>{f.vi()}),0),f}}function Vc(){return"undefined"!=typeof document?document:null}
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
 */function Uc(t){return new Oa(t,!0)}class Fc{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Se=t,this.timerId=e,this.Fi=n,this.Li=r,this.Bi=i,this.qi=0,this.Ui=null,this.Ki=Date.now(),this.reset()}reset(){this.qi=0}Qi(){this.qi=this.Bi}ji(t){this.cancel();const e=Math.floor(this.qi+this.Wi()),n=Math.max(0,Date.now()-this.Ki),r=Math.max(0,e-n);r>0&&ps("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.qi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ui=this.Se.enqueueAfterDelay(this.timerId,r,(()=>(this.Ki=Date.now(),t()))),this.qi*=this.Li,this.qi<this.Fi&&(this.qi=this.Fi),this.qi>this.Bi&&(this.qi=this.Bi)}Gi(){null!==this.Ui&&(this.Ui.skipDelay(),this.Ui=null)}cancel(){null!==this.Ui&&(this.Ui.cancel(),this.Ui=null)}Wi(){return(Math.random()-.5)*this.qi}}
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
 */class Hc extends class{constructor(t,e,n,r,i,s){this.Se=t,this.zi=n,this.Hi=r,this.Ji=i,this.listener=s,this.state=0,this.Yi=0,this.Xi=null,this.stream=null,this.Zi=new Fc(t,e)}tr(){return 1===this.state||2===this.state||4===this.state}er(){return 2===this.state}start(){3!==this.state?this.auth():this.nr()}async stop(){this.tr()&&await this.close(0)}sr(){this.state=0,this.Zi.reset()}ir(){this.er()&&null===this.Xi&&(this.Xi=this.Se.enqueueAfterDelay(this.zi,6e4,(()=>this.rr())))}cr(t){this.ur(),this.stream.send(t)}async rr(){if(this.er())return this.close(0)}ur(){this.Xi&&(this.Xi.cancel(),this.Xi=null)}async close(t,e){this.ur(),this.Zi.cancel(),this.Yi++,3!==t?this.Zi.reset():e&&e.code===ls.RESOURCE_EXHAUSTED?(ms(e.toString()),ms("Using maximum backoff delay to prevent overloading the backend."),this.Zi.Qi()):e&&e.code===ls.UNAUTHENTICATED&&this.Ji.invalidateToken(),null!==this.stream&&(this.ar(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ri(e)}ar(){}auth(){this.state=1;const t=this.hr(this.Yi),e=this.Yi;this.Ji.getToken().then((t=>{this.Yi===e&&this.lr(t)}),(e=>{t((()=>{const t=new hs(ls.UNKNOWN,"Fetching auth token failed: "+e.message);return this.dr(t)}))}))}lr(t){const e=this.hr(this.Yi);this.stream=this.wr(t),this.stream.Ii((()=>{e((()=>(this.state=2,this.listener.Ii())))})),this.stream.Ri((t=>{e((()=>this.dr(t)))})),this.stream.onMessage((t=>{e((()=>this.onMessage(t)))}))}nr(){this.state=4,this.Zi.ji((async()=>{this.state=0,this.start()}))}dr(t){return ps("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(3,t)}hr(t){return e=>{this.Se.enqueueAndForget((()=>this.Yi===t?e():(ps("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}{constructor(t,e,n,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle",e,n,i),this.R=r}wr(t){return this.Hi.Mi("Listen",t)}onMessage(t){this.Zi.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i="NO_CHANGE"===(r=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:vs(),s=e.targetChange.targetIds||[],o=function(t,e){return t.I?(ws(void 0===e||"string"==typeof e),Os.fromBase64String(e||"")):(ws(void 0===e||e instanceof Uint8Array),Os.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?ls.UNKNOWN:aa(t.code);return new hs(e,t.message||"")}(a);n=new Sa(i,s,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Pa(t,r.document.name),s=ka(r.document.updateTime),o=new eo({mapValue:{fields:r.document.fields}}),a=no.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new _a(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Pa(t,r.document),s=r.readTime?ka(r.readTime):Ss.min(),o=no.newNoDocument(i,s),a=r.removedTargetIds||[];n=new _a([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Pa(t,r.document),s=r.removedTargetIds||[];n=new _a([],s,i,null)}else{if(!("filter"in e))return vs();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new ia(r),s=t.targetId;n=new Aa(s,i)}}var r;return n}(this.R,t),n=function(t){if(!("targetChange"in t))return Ss.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Ss.min():e.readTime?ka(e.readTime):Ss.min()}(t);return this.listener._r(e,n)}mr(t){const e={};e.database=Va(this.R),e.addTarget=function(t,e){let n;const r=e.target;return n=ao(r)?{documents:Fa(t,r)}:{query:Ha(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=function(t,e){return t.I?e.toBase64():e.toUint8Array()}(t,e.resumeToken):e.snapshotVersion.compareTo(Ss.min())>0&&(n.readTime=function(t,e){return t.I?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}(t,e.snapshotVersion.toTimestamp())),n}(this.R,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return vs()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.R,t);n&&(e.labels=n),this.cr(e)}gr(t){const e={};e.database=Va(this.R),e.removeTarget=t,this.cr(e)}}
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
 */class $c extends class{}{constructor(t,e,n){super(),this.credentials=t,this.Hi=e,this.R=n,this.Rr=!1}Pr(){if(this.Rr)throw new hs(ls.FAILED_PRECONDITION,"The client has already been terminated.")}Ni(t,e,n){return this.Pr(),this.credentials.getToken().then((r=>this.Hi.Ni(t,e,n,r))).catch((t=>{throw t.code===ls.UNAUTHENTICATED&&this.credentials.invalidateToken(),t}))}$i(t,e,n){return this.Pr(),this.credentials.getToken().then((r=>this.Hi.$i(t,e,n,r))).catch((t=>{throw t.code===ls.UNAUTHENTICATED&&this.credentials.invalidateToken(),t}))}terminate(){this.Rr=!1}}class Bc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.br=0,this.vr=null,this.Vr=!0}Sr(){0===this.br&&(this.Dr("Unknown"),this.vr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.vr=null,this.Cr("Backend didn't respond within 10 seconds."),this.Dr("Offline"),Promise.resolve()))))}Nr(t){"Online"===this.state?this.Dr("Unknown"):(this.br++,this.br>=1&&(this.kr(),this.Cr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Dr("Offline")))}set(t){this.kr(),this.br=0,"Online"===t&&(this.Vr=!1),this.Dr(t)}Dr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Cr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Vr?(ms(e),this.Vr=!1):ps("OnlineStateTracker",e)}kr(){null!==this.vr&&(this.vr.cancel(),this.vr=null)}}
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
 */class qc{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Or=[],this.$r=new Map,this.Mr=new Set,this.Fr=[],this.Lr=i,this.Lr.di((t=>{n.enqueueAndForget((async()=>{Jc(this)&&(ps("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Es(t);e.Mr.add(4),await zc(e),e.Br.set("Unknown"),e.Mr.delete(4),await jc(e)}(this))}))})),this.Br=new Bc(n,r)}}async function jc(t){if(Jc(t))for(const e of t.Fr)await e(!0)}async function zc(t){for(const e of t.Fr)await e(!1)}function Kc(t,e){const n=Es(t);n.$r.has(e.targetId)||(n.$r.set(e.targetId,e),Yc(n)?Xc(n):iu(n).er()&&Gc(n,e))}function Wc(t,e){const n=Es(t),r=iu(n);n.$r.delete(e),r.er()&&Qc(n,e),0===n.$r.size&&(r.er()?r.ir():Jc(n)&&n.Br.set("Unknown"))}function Gc(t,e){t.qr.U(e.targetId),iu(t).mr(e)}function Qc(t,e){t.qr.U(e),iu(t).gr(e)}function Xc(t){t.qr=new xa({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.$r.get(e)||null}),iu(t).start(),t.Br.Sr()}function Yc(t){return Jc(t)&&!iu(t).tr()&&t.$r.size>0}function Jc(t){return 0===Es(t).Mr.size}function Zc(t){t.qr=void 0}async function tu(t){t.$r.forEach(((e,n)=>{Gc(t,e)}))}async function eu(t,e){Zc(t),Yc(t)?(t.Br.Nr(e),Xc(t)):t.Br.set("Unknown")}async function nu(t,e,n){if(t.Br.set("Online"),e instanceof Sa&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.$r.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.$r.delete(r),t.qr.removeTarget(r))}(t,e)}catch(r){ps("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ru(t,r)}else if(e instanceof _a?t.qr.X(e):e instanceof Aa?t.qr.rt(e):t.qr.et(e),!n.isEqual(Ss.min()))try{const e=await mc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.qr.ut(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.$r.get(r);i&&t.$r.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.$r.get(e);if(!n)return;t.$r.set(e,n.withResumeToken(Os.EMPTY_BYTE_STRING,n.snapshotVersion)),Qc(t,e);const r=new nc(n.target,e,1,n.sequenceNumber);Gc(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(i){ps("RemoteStore","Failed to raise snapshot:",i),await ru(t,i)}}async function ru(t,e,n){if(!tc(e))throw e;t.Mr.add(1),await zc(t),t.Br.set("Offline"),n||(n=()=>mc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ps("RemoteStore","Retrying IndexedDB access"),await n(),t.Mr.delete(1),await jc(t)}))}function iu(t){return t.Ur||(t.Ur=function(t,e,n){const r=Es(t);return r.Pr(),new Hc(e,r.Hi,r.credentials,r.R,n)}(t.datastore,t.asyncQueue,{Ii:tu.bind(null,t),Ri:eu.bind(null,t),_r:nu.bind(null,t)}),t.Fr.push((async e=>{e?(t.Ur.sr(),Yc(t)?Xc(t):t.Br.set("Unknown")):(await t.Ur.stop(),Zc(t))}))),t.Ur
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
 */}class su{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Ja,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new su(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new hs(ls.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ou(t,e){if(ms("AsyncQueue",`${e}: ${t}`),tc(t))return new hs(ls.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class au{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Bs.comparator(e.key,n.key):(t,e)=>Bs.comparator(t.key,e.key),this.keyedMap=ga(),this.sortedSet=new ca(this.comparator)}static emptySet(t){return new au(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof au))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new au;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class cu{constructor(){this.Qr=new ca(Bs.comparator)}track(t){const e=t.doc.key,n=this.Qr.get(e);n?0!==t.type&&3===n.type?this.Qr=this.Qr.insert(e,t):3===t.type&&1!==n.type?this.Qr=this.Qr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Qr=this.Qr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Qr=this.Qr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Qr=this.Qr.remove(e):1===t.type&&2===n.type?this.Qr=this.Qr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Qr=this.Qr.insert(e,{type:2,doc:t.doc}):vs():this.Qr=this.Qr.insert(e,t)}jr(){const t=[];return this.Qr.inorderTraversal(((e,n)=>{t.push(n)})),t}}class uu{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new uu(t,e,au.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Do(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class lu{constructor(){this.Wr=void 0,this.listeners=[]}}class hu{constructor(){this.queries=new uc((t=>Ro(t)),Do),this.onlineState="Unknown",this.Gr=new Set}}function fu(t,e){const n=Es(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Hr(i)&&(r=!0);e.Wr=i}}r&&pu(n)}function du(t,e,n){const r=Es(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function pu(t){t.Gr.forEach((t=>{t.next()}))}class mu{constructor(t,e,n){this.query=t,this.Jr=e,this.Yr=!1,this.Xr=null,this.onlineState="Unknown",this.options=n||{}}Hr(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new uu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.Yr?this.Zr(t)&&(this.Jr.next(t),e=!0):this.eo(t,this.onlineState)&&(this.no(t),e=!0),this.Xr=t,e}onError(t){this.Jr.error(t)}zr(t){this.onlineState=t;let e=!1;return this.Xr&&!this.Yr&&this.eo(this.Xr,t)&&(this.no(this.Xr),e=!0),e}eo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.so&&n||t.docs.isEmpty()&&"Offline"!==e)}Zr(t){if(t.docChanges.length>0)return!0;const e=this.Xr&&this.Xr.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}no(t){t=uu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Yr=!0,this.Jr.next(t)}}
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
 */class gu{constructor(t){this.key=t}}class yu{constructor(t){this.key=t}}class vu{constructor(t,e){this.query=t,this.uo=e,this.ao=null,this.current=!1,this.ho=va(),this.mutatedKeys=va(),this.lo=Lo(t),this.fo=new au(this.lo)}get wo(){return this.uo}_o(t,e){const n=e?e.mo:new cu,r=e?e.fo:this.fo;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Io(this.query)&&r.size===this.query.limit?r.last():null,c=xo(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=ko(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.yo(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.lo(l,a)>0||c&&this.lo(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),Io(this.query)||xo(this.query))for(;s.size>this.query.limit;){const t=Io(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{fo:s,mo:n,Nn:o,mutatedKeys:i}}yo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.fo;this.fo=t.fo,this.mutatedKeys=t.mutatedKeys;const i=t.mo.jr();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return vs()}};return n(t)-n(e)}(t.type,e.type)||this.lo(t.doc,e.doc))),this.po(n);const s=e?this.Eo():[],o=0===this.ho.size&&this.current?1:0,a=o!==this.ao;return this.ao=o,0!==i.length||a?{snapshot:new uu(this.query,t.fo,r,i,t.mutatedKeys,0===o,a,!1),To:s}:{To:s}}zr(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({fo:this.fo,mo:new cu,mutatedKeys:this.mutatedKeys,Nn:!1},!1)):{To:[]}}Io(t){return!this.uo.has(t)&&!!this.fo.has(t)&&!this.fo.get(t).hasLocalMutations}po(t){t&&(t.addedDocuments.forEach((t=>this.uo=this.uo.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.uo=this.uo.delete(t))),this.current=t.current)}Eo(){if(!this.current)return[];const t=this.ho;this.ho=va(),this.fo.forEach((t=>{this.Io(t.key)&&(this.ho=this.ho.add(t.key))}));const e=[];return t.forEach((t=>{this.ho.has(t)||e.push(new yu(t))})),this.ho.forEach((n=>{t.has(n)||e.push(new gu(n))})),e}Ao(t){this.uo=t.Bn,this.ho=va();const e=this._o(t.documents);return this.applyChanges(e,!0)}Ro(){return uu.fromInitialDocuments(this.query,this.fo,this.mutatedKeys,0===this.ao)}}class wu{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Eu{constructor(t){this.key=t,this.Po=!1}}class bu{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.bo={},this.vo=new uc((t=>Ro(t)),Do),this.Vo=new Map,this.So=new Set,this.Do=new ca(Bs.comparator),this.Co=new Map,this.No=new Ec,this.xo={},this.ko=new Map,this.Oo=ac.Yt(),this.onlineState="Unknown",this.$o=void 0}get isPrimaryClient(){return!0===this.$o}}async function Tu(t,e){const n=function(t){const e=Es(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Au.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Iu.bind(null,e),e.bo._r=fu.bind(null,e.eventManager),e.bo.Fo=du.bind(null,e.eventManager),e}(t);let r,i;const s=n.vo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ro();else{const t=await function(t,e){const n=Es(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.qe.getTargetData(t,e).next((i=>i?(r=i,Za.resolve(r)):n.qe.allocateTargetId(t).next((i=>(r=new nc(e,i,0,t.currentSequenceNumber),n.qe.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.kn.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.kn=n.kn.insert(t.targetId,t),n.On.set(e,t.targetId)),t}))}(n.localStore,No(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await async function(t,e,n,r){t.Mo=(e,n,r)=>async function(t,e,n,r){let i=e.view._o(n);i.Nn&&(i=await vc(t.localStore,e.query,!1).then((({documents:t})=>e.view._o(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return Nu(t,e.targetId,o.To),o.snapshot}(t,e,n,r);const i=await vc(t.localStore,e,!0),s=new vu(e,i.Bn),o=s._o(i.documents),a=Ta.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);Nu(t,n,c.To);const u=new wu(e,n,s);return t.vo.set(e,u),t.Vo.has(n)?t.Vo.get(n).push(e):t.Vo.set(n,[e]),c.snapshot}(n,e,r,"current"===s),n.isPrimaryClient&&Kc(n.remoteStore,t)}return i}async function _u(t,e){const n=Es(t),r=n.vo.get(e),i=n.Vo.get(r.targetId);if(i.length>1)return n.Vo.set(r.targetId,i.filter((t=>!Do(t,e)))),void n.vo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await yc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Wc(n.remoteStore,r.targetId),xu(n,r.targetId)})).catch(cc)):(xu(n,r.targetId),await yc(n.localStore,r.targetId,!0))}async function Au(t,e){const n=Es(t);try{const t=await gc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Co.get(e);r&&(ws(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Po=!0:t.modifiedDocuments.size>0?ws(r.Po):t.removedDocuments.size>0&&(ws(r.Po),r.Po=!1))})),await Ou(n,t,e)}catch(r){await cc(r)}}function Su(t,e,n){const r=Es(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.vo.forEach(((n,r)=>{const i=r.view.zr(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Es(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.zr(e)&&(r=!0)})),r&&pu(n)}(r.eventManager,e),t.length&&r.bo._r(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Iu(t,e,n){const r=Es(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Co.get(e),s=i&&i.key;if(s){let t=new ca(Bs.comparator);t=t.insert(s,no.newNoDocument(s,Ss.min()));const n=va().add(s),i=new ba(Ss.min(),new Map,new ha(Ts),t,n);await Au(r,i),r.Do=r.Do.remove(s),r.Co.delete(e),Ru(r)}else await yc(r.localStore,e,!1).then((()=>xu(r,e,n))).catch(cc)}function xu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vo.get(e))t.vo.delete(r),n&&t.bo.Fo(r,n);t.Vo.delete(e),t.isPrimaryClient&&t.No.Zn(e).forEach((e=>{t.No.containsKey(e)||Cu(t,e)}))}function Cu(t,e){t.So.delete(e.path.canonicalString());const n=t.Do.get(e);null!==n&&(Wc(t.remoteStore,n),t.Do=t.Do.remove(e),t.Co.delete(n),Ru(t))}function Nu(t,e,n){for(const r of n)r instanceof gu?(t.No.addReference(r.key,e),Du(t,r)):r instanceof yu?(ps("SyncEngine","Document no longer in limbo: "+r.key),t.No.removeReference(r.key,e),t.No.containsKey(r.key)||Cu(t,r.key)):vs()}function Du(t,e){const n=e.key,r=n.path.canonicalString();t.Do.get(n)||t.So.has(r)||(ps("SyncEngine","New document in limbo: "+n),t.So.add(r),Ru(t))}function Ru(t){for(;t.So.size>0&&t.Do.size<t.maxConcurrentLimboResolutions;){const e=t.So.values().next().value;t.So.delete(e);const n=new Bs(Ns.fromString(e)),r=t.Oo.next();t.Co.set(r,new Eu(n)),t.Do=t.Do.insert(n,r),Kc(t.remoteStore,new nc(No(So(n.path)),r,2,us.o))}}async function Ou(t,e,n){const r=Es(t),i=[],s=[],o=[];r.vo.isEmpty()||(r.vo.forEach(((t,a)=>{o.push(r.Mo(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=hc.vn(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.bo._r(i),await async function(t,e){const n=Es(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Za.forEach(e,(e=>Za.forEach(e.Pn,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Za.forEach(e.bn,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(r){if(!tc(r))throw r;ps("LocalStore","Failed to update sequence numbers: "+r)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.kn.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.kn=n.kn.insert(t,i)}}}(r.localStore,s))}async function ku(t,e){const n=Es(t);if(!n.currentUser.isEqual(e)){ps("SyncEngine","User change. New user:",e.toKey());const t=await pc(n.localStore,e);n.currentUser=e,(r=n).ko.forEach((t=>{t.forEach((t=>{t.reject(new hs(ls.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.ko.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Ou(n,t.Ln)}var r}function Lu(t,e){const n=Es(t),r=n.Co.get(e);if(r&&r.Po)return va().add(r.key);{let t=va();const r=n.Vo.get(e);if(!r)return t;for(const e of r){const r=n.vo.get(e);t=t.unionWith(r.view.wo)}return t}}class Pu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.R=Uc(t.databaseInfo.databaseId),this.sharedClientState=this.Bo(t),this.persistence=this.qo(t),await this.persistence.start(),this.gcScheduler=this.Uo(t),this.localStore=this.Ko(t)}Uo(t){return null}Ko(t){return function(t,e,n,r){return new dc(t,e,n,r)}(this.persistence,new fc,t.initialUser,this.R)}qo(t){return new Ic(Cc.Ps,this.R)}Bo(t){return new Rc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Mu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Su(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ku.bind(null,this.syncEngine),await async function(t,e){const n=Es(t);e?(n.Mr.delete(2),await jc(n)):e||(n.Mr.add(2),await zc(n),n.Br.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new hu}createDatastore(t){const e=Uc(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Mc(r));var r,i;return i=t.credentials,new $c(i,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Su(this.syncEngine,t,0),s=kc.gt()?new kc:new Oc,new qc(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new bu(t,e,n,r,i,s);return o&&(a.$o=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Es(t);ps("RemoteStore","RemoteStore shutting down."),e.Mr.add(5),await zc(e),e.Lr.shutdown(),e.Br.set("Unknown")}(this.remoteStore)}}
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
 */class Vu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.jo(this.observer.next,t)}error(t){this.observer.error?this.jo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Wo(){this.muted=!0}jo(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
 */class Uu{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=Nc.UNAUTHENTICATED,this.clientId=class{static u(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=bs(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}.u(),this.credentialListener=()=>{},this.receivedInitialUser=new Ja,this.credentials.setChangeListener((t=>{ps("FirestoreClient","Received user=",t.uid),this.user=t,this.credentialListener(t),this.receivedInitialUser.resolve()}))}async getConfiguration(){return await this.receivedInitialUser.promise,{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t,this.receivedInitialUser.promise.then((()=>this.credentialListener(this.user)))}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new hs(ls.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ja;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.removeChangeListener(),t.resolve()}catch(e){const n=ou(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Fu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(ps("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),ps("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((n=>{r.isEqual(n)||(r=n,t.asyncQueue.enqueueRetryable((async()=>{await pc(e.localStore,n)})))})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new Pu)),t.offlineComponents}(t);ps("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((n=>t.asyncQueue.enqueueRetryable((()=>async function(t,e){const n=Es(t);n.asyncQueue.verifyOperationInProgress(),ps("RemoteStore","RemoteStore received new credentials");const r=Jc(n);n.Mr.add(3),await zc(n),r&&n.Br.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Mr.delete(3),await jc(n)}(e.remoteStore,n))))),t.onlineComponents=e}async function Hu(t){const e=await async function(t){return t.onlineComponents||(ps("FirestoreClient","Using default OnlineComponentProvider"),await Fu(t,new Mu)),t.onlineComponents}(t),n=e.eventManager;return n.onListen=Tu.bind(null,e.syncEngine),n.onUnlisten=_u.bind(null,e.syncEngine),n}function $u(t,e,n={}){const r=new Ja;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new Vu({next:n=>{e.enqueueAndForget((()=>async function(t,e){const n=Es(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}(t,o))),n.fromCache&&"server"===r.source?i.reject(new hs(ls.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new mu(n,s,{includeMetadataChanges:!0,so:!0});return async function(e,n){const r=Es(e),i=n.query;let s=!1,o=r.queries.get(i);if(o||(s=!0,o=new lu),s)try{o.Wr=await r.onListen(i)}catch(t){const r=ou(t,`Initialization of query '${Oo(n.query)}' failed`);return void n.onError(r)}r.queries.set(i,o),o.listeners.push(n),n.zr(r.onlineState),o.Wr&&n.Hr(o.Wr)&&pu(r)}(t,o)}(await Hu(t),t.asyncQueue,e,n,r))),r.promise}class Bu{constructor(t,e,n,r,i,s,o){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o}}class qu{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof qu&&t.projectId===this.projectId&&t.database===this.database}}
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
 */const ju=new Map;
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
 */class zu{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${t}`}}class Ku{constructor(){this.changeListener=null}getToken(){return Promise.resolve(null)}invalidateToken(){}setChangeListener(t){this.changeListener=t,t(Nc.UNAUTHENTICATED)}removeChangeListener(){this.changeListener=null}}class Wu{constructor(t){this.oc=null,this.currentUser=Nc.UNAUTHENTICATED,this.receivedInitialUser=!1,this.cc=0,this.changeListener=null,this.forceRefresh=!1,this.oc=()=>{this.cc++,this.currentUser=this.uc(),this.receivedInitialUser=!0,this.changeListener&&this.changeListener(this.currentUser)},this.cc=0,this.auth=t.getImmediate({optional:!0}),this.auth?this.auth.addAuthTokenListener(this.oc):(this.oc(null),t.get().then((t=>{this.auth=t,this.oc&&this.auth.addAuthTokenListener(this.oc)}),(()=>{})))}getToken(){const t=this.cc,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.cc!==t?(ps("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ws("string"==typeof e.accessToken),new zu(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}setChangeListener(t){this.changeListener=t,this.receivedInitialUser&&t(this.currentUser)}removeChangeListener(){this.auth&&this.auth.removeAuthTokenListener(this.oc),this.oc=null,this.changeListener=null}uc(){const t=this.auth&&this.auth.getUid();return ws(null===t||"string"==typeof t),new Nc(t)}}class Gu{constructor(t,e,n){this.ac=t,this.hc=e,this.lc=n,this.type="FirstParty",this.user=Nc.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.hc},e=this.ac.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.lc&&(t["X-Goog-Iam-Authorization-Token"]=this.lc),t}}class Qu{constructor(t,e,n){this.ac=t,this.hc=e,this.lc=n}getToken(){return Promise.resolve(new Gu(this.ac,this.hc,this.lc))}setChangeListener(t){t(Nc.FIRST_PARTY)}removeChangeListener(){}invalidateToken(){}}
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
 */function Xu(t){if(Bs.isDocumentKey(t))throw new hs(ls.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Yu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new hs(ls.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=function(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){if(t.constructor){const e=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());if(e&&e.length>1)return e[1]}return null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":vs()}(t);throw new hs(ls.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
 */class Ju{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new hs(ls.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new hs(ls.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,function(t,e,n,r){if(!0===e&&!0===r)throw new hs(ls.INVALID_ARGUMENT,"experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,t.experimentalForceLongPolling,0,t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties}}
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
 */class Zu{constructor(t,e){this._persistenceKey="(lite)",this._settings=new Ju({}),this._settingsFrozen=!1,t instanceof qu?(this._databaseId=t,this._credentials=new Ku):(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new hs(ls.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qu(t.options.projectId)}(t),this._credentials=new Wu(e))}get app(){if(!this._app)throw new hs(ls.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new hs(ls.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ju(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new Ku;switch(t.type){case"gapi":const e=t.client;return ws(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Qu(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new hs(ls.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ju.get(t);e&&(ps("ComponentProvider","Removing Datastore"),ju.delete(t),e.terminate())}(this),Promise.resolve()}}
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
 */class tl{constructor(t,e,n){this._converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nl(this.firestore,this._converter,this._key.path.popLast())}withConverter(t){return new tl(this.firestore,t,this._key)}}class el{constructor(t,e,n){this._converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new el(this.firestore,t,this._query)}}class nl extends el{constructor(t,e,n){super(t,e,So(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new tl(this.firestore,null,new Bs(t))}withConverter(t){return new nl(this.firestore,t,this._path)}}function rl(t,e,...n){if(t=(r=t)&&r._delegate?r._delegate:r,function(t,e,n){if(!n)throw new hs(ls.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}("collection","path",e),t instanceof Zu){const r=Ns.fromString(e,...n);return Xu(r),new nl(t,null,r)}var r;{if(!(t instanceof tl||t instanceof nl))throw new hs(ls.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=Ns.fromString(t.path,...n).child(Ns.fromString(e));return Xu(r),new nl(t.firestore,null,r)}}
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
 */class il{constructor(){this.fc=Promise.resolve(),this.dc=[],this.wc=!1,this._c=[],this.mc=null,this.gc=!1,this.yc=[],this.Zi=new Fc(this,"async_queue_retry"),this.Ec=()=>{const t=Vc();t&&ps("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Zi.Gi()};const t=Vc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ec)}get isShuttingDown(){return this.wc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Tc(),this.Ic(t)}enterRestrictedMode(){if(!this.wc){this.wc=!0;const t=Vc();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ec)}}enqueue(t){return this.Tc(),this.wc?new Promise((t=>{})):this.Ic(t)}enqueueRetryable(t){this.enqueueAndForget((()=>(this.dc.push(t),this.Ac())))}async Ac(){if(0!==this.dc.length){try{await this.dc[0](),this.dc.shift(),this.Zi.reset()}catch(t){if(!tc(t))throw t;ps("AsyncQueue","Operation failed with retryable error: "+t)}this.dc.length>0&&this.Zi.ji((()=>this.Ac()))}}Ic(t){const e=this.fc.then((()=>(this.gc=!0,t().catch((t=>{throw this.mc=t,this.gc=!1,ms("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.gc=!1,t))))));return this.fc=e,e}enqueueAfterDelay(t,e,n){this.Tc(),this.yc.indexOf(t)>-1&&(e=0);const r=su.createAndSchedule(this,t,e,n,(t=>this.Rc(t)));return this._c.push(r),r}Tc(){this.mc&&vs()}verifyOperationInProgress(){}async Pc(){let t;do{t=this.fc,await t}while(t!==this.fc)}bc(t){for(const e of this._c)if(e.timerId===t)return!0;return!1}vc(t){return this.Pc().then((()=>{this._c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this._c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Pc()}))}Vc(t){this.yc.push(t)}Rc(t){const e=this._c.indexOf(t);this._c.splice(e,1)}}class sl extends Zu{constructor(t,e){super(t,e),this._queue=new il,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||al(this),this._firestoreClient.terminate()}}function ol(t=function(t="[DEFAULT]"){const e=Wt.get(t);if(!e)throw Yt.create("no-app",{appName:t});return e}()){return(e=t,n="firestore-exp",e.container.getProvider(n)).getImmediate();var e,n}function al(t){var e;const n=t._freezeSettings(),r=(i=t._databaseId,s=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new Bu(i,s,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling));var i,s,o,a;t._firestoreClient=new Uu(t._credentials,t._queue,r)}
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
 */class cl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new hs(ls.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rs(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
 */class ul{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ul(Os.fromBase64String(t))}catch(e){throw new hs(ls.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ul(Os.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class ll{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new hs(ls.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new hs(ls.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Ts(this._lat,t._lat)||Ts(this._long,t._long)}}const hl=new RegExp("[~\\*/\\[\\]]");function fl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new hs(ls.INVALID_ARGUMENT,a+t+c)
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
 */}class dl{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new tl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new pl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.toProto())}}get(t){if(this._document){const e=this._document.data.field(ml("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class pl extends dl{data(){return super.data()}}function ml(t,e){return"string"==typeof e?function(t,e,n){if(e.search(hl)>=0)throw fl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new cl(...e.split("."))._internalPath}catch(r){throw fl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e):e instanceof cl?e._internalPath:e._delegate._internalPath}
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
 */class gl{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class yl extends dl{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new vl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.toProto(),t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ml("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class vl extends yl{data(t={}){return super.data(t)}}class wl{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new gl(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new vl(this._firestore,this._userDataWriter,n.key,n,new gl(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query._converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new hs(ls.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new vl(t._firestore,t._userDataWriter,n.doc.key,n.doc,new gl(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query._converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new vl(t._firestore,t._userDataWriter,e.doc.key,e.doc,new gl(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query._converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:El(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function El(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return vs()}}
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
 */class bl extends
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
class{convertValue(t,e="none"){switch(qs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ps(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ms(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw vs()}}convertObject(t,e){const n={};return xs(t.fields||{},((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new ll(Ps(t.latitude),Ps(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Us(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Fs(t));default:return null}}convertTimestamp(t){const e=Ls(t);return new As(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ns.fromString(t);ws(Ya(n));const r=new qu(n.get(1),n.get(3)),i=new Bs(n.popFirst(5));return r.isEqual(e)||ms(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new ul(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new tl(this.firestore,null,e)}}function Tl(t){t=Yu(t,el);const e=Yu(t.firestore,sl),n=function(t){return t._firestoreClient||al(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}(e),r=new bl(e);return function(t){if(xo(t)&&0===t.explicitOrderBy.length)throw new hs(ls.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query),$u(n,t._query).then((n=>new wl(e,r,t,n)))}Xt(new Ot("firestore-exp",((t,{options:e})=>{const n=t.getProvider("app-exp").getImmediate(),r=new sl(n,t.getProvider("auth-internal"));return e&&r._setSettings(e),r}),"PUBLIC")),te("@firebase/firestore","0.0.900-exp.894b5da5a",undefined);
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
te("firebase-exp","9.0.0-beta.1","app");
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
var _l,Al,Sl=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();
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
 */(Al=_l||(_l={})).RICH="mdc-tooltip--rich",Al.SHOWN="mdc-tooltip--shown",Al.SHOWING="mdc-tooltip--showing",Al.SHOWING_TRANSITION="mdc-tooltip--showing-transition",Al.HIDE="mdc-tooltip--hide",Al.HIDE_TRANSITION="mdc-tooltip--hide-transition",Al.MULTILINE_TOOLTIP="mdc-tooltip--multiline",Al.SURFACE="mdc-tooltip__surface",Al.TOOLTIP_CARET_TOP="mdc-tooltip__caret-surface-top",Al.TOOLTIP_CARET_BOTTOM="mdc-tooltip__caret-surface-bottom";var Il,xl,Cl,Nl,Dl,Rl,Ol=4,kl=8,Ll=8,Pl=600,Ml=500,Vl=24,Ul=200,Fl=24,Hl="aria-expanded",$l="aria-haspopup",Bl="data-mdc-tooltip-persistent",ql="data-mdc-tooltip-has-caret";(xl=Il||(Il={}))[xl.DETECTED=0]="DETECTED",xl[xl.START=1]="START",xl[xl.CENTER=2]="CENTER",xl[xl.END=3]="END",(Nl=Cl||(Cl={}))[Nl.DETECTED=0]="DETECTED",Nl[Nl.ABOVE=1]="ABOVE",Nl[Nl.BELOW=2]="BELOW",(Rl=Dl||(Dl={}))[Rl.BOUNDED=0]="BOUNDED",Rl[Rl.UNBOUNDED=1]="UNBOUNDED";var jl,zl,Kl="left",Wl="right",Gl="center",Ql="top",Xl="bottom";(zl=jl||(jl={}))[zl.DETECTED=0]="DETECTED",zl[zl.ABOVE_START=1]="ABOVE_START",zl[zl.ABOVE_CENTER=2]="ABOVE_CENTER",zl[zl.ABOVE_END=3]="ABOVE_END",zl[zl.TOP_SIDE_START=4]="TOP_SIDE_START",zl[zl.CENTER_SIDE_START=5]="CENTER_SIDE_START",zl[zl.BOTTOM_SIDE_START=6]="BOTTOM_SIDE_START",zl[zl.TOP_SIDE_END=7]="TOP_SIDE_END",zl[zl.CENTER_SIDE_END=8]="CENTER_SIDE_END",zl[zl.BOTTOM_SIDE_END=9]="BOTTOM_SIDE_END",zl[zl.BELOW_START=10]="BELOW_START",zl[zl.BELOW_CENTER=11]="BELOW_CENTER",zl[zl.BELOW_END=12]="BELOW_END";
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
var Yl=function(){function t(){this.rafIDs=new Map}return t.prototype.request=function(t,e){var n=this;this.cancel(t);var r=requestAnimationFrame((function(r){n.rafIDs.delete(t),e(r)}));this.rafIDs.set(t,r)},t.prototype.cancel=function(t){var e=this.rafIDs.get(t);e&&(cancelAnimationFrame(e),this.rafIDs.delete(t))},t.prototype.cancelAll=function(){var t=this;this.rafIDs.forEach((function(e,n){t.cancel(n)}))},t.prototype.getQueue=function(){var t=[];return this.rafIDs.forEach((function(e,n){t.push(n)})),t},t}(),Jl={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};
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
 */function Zl(t,e){if(function(t){return Boolean(t.document)&&"function"==typeof t.document.createElement}(t)&&e in Jl){var n=t.document.createElement("div"),r=Jl[e],i=r.standard,s=r.prefixed;return i in n.style?i:s}return e}
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
 */var th="Unknown",eh="Backspace",nh="Enter",rh="Spacebar",ih="PageUp",sh="PageDown",oh="End",ah="Home",ch="ArrowLeft",uh="ArrowUp",lh="ArrowRight",hh="ArrowDown",fh="Delete",dh="Escape",ph="Tab",mh=new Set;mh.add(eh),mh.add(nh),mh.add(rh),mh.add(ih),mh.add(sh),mh.add(oh),mh.add(ah),mh.add(ch),mh.add(uh),mh.add(lh),mh.add(hh),mh.add(fh),mh.add(dh),mh.add(ph);var gh=8,yh=13,vh=32,wh=33,Eh=34,bh=35,Th=36,_h=37,Ah=38,Sh=39,Ih=40,xh=46,Ch=27,Nh=9,Dh=new Map;Dh.set(gh,eh),Dh.set(yh,nh),Dh.set(vh,rh),Dh.set(wh,ih),Dh.set(Eh,sh),Dh.set(bh,oh),Dh.set(Th,ah),Dh.set(_h,ch),Dh.set(Ah,uh),Dh.set(Sh,lh),Dh.set(Ih,hh),Dh.set(xh,fh),Dh.set(Ch,dh),Dh.set(Nh,ph);var Rh=new Set;Rh.add(ih),Rh.add(sh),Rh.add(oh),Rh.add(ah),Rh.add(ch),Rh.add(uh),Rh.add(lh),Rh.add(hh);
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
var Oh,kh=_l.RICH,Lh=_l.SHOWN,Ph=_l.SHOWING,Mh=_l.SHOWING_TRANSITION,Vh=_l.HIDE,Uh=_l.HIDE_TRANSITION,Fh=_l.MULTILINE_TOOLTIP;(Oh||(Oh={})).POLL_ANCHOR="poll_anchor";var Hh="undefined"!=typeof window,$h=function(t){function e(n){var r=t.call(this,Et(Et({},e.defaultAdapter),n))||this;return r.tooltipShown=!1,r.anchorGap=Ol,r.xTooltipPos=Il.DETECTED,r.yTooltipPos=Cl.DETECTED,r.tooltipPositionWithCaret=jl.DETECTED,r.minViewportTooltipThreshold=Ll,r.hideDelayMs=Pl,r.showDelayMs=Ml,r.anchorRect=null,r.parentRect=null,r.frameId=null,r.hideTimeout=null,r.showTimeout=null,r.addAncestorScrollEventListeners=new Array,r.removeAncestorScrollEventListeners=new Array,r.animFrame=new Yl,r.anchorBlurHandler=function(t){r.handleAnchorBlur(t)},r.documentClickHandler=function(t){r.handleDocumentClick(t)},r.documentKeydownHandler=function(t){r.handleKeydown(t)},r.richTooltipMouseEnterHandler=function(){r.handleRichTooltipMouseEnter()},r.richTooltipMouseLeaveHandler=function(){r.handleRichTooltipMouseLeave()},r.richTooltipFocusOutHandler=function(t){r.handleRichTooltipFocusOut(t)},r.windowScrollHandler=function(){r.handleWindowChangeEvent()},r.windowResizeHandler=function(){r.handleWindowChangeEvent()},r}return wt(e,t),Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttribute:function(){return null},setAttribute:function(){},addClass:function(){},hasClass:function(){return!1},removeClass:function(){},getComputedStyleProperty:function(){return""},setStyleProperty:function(){},setSurfaceStyleProperty:function(){},getViewportWidth:function(){return 0},getViewportHeight:function(){return 0},getTooltipSize:function(){return{width:0,height:0}},getAnchorBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getParentBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getAnchorAttribute:function(){return null},setAnchorAttribute:function(){return null},isRTL:function(){return!1},anchorContainsElement:function(){return!1},tooltipContainsElement:function(){return!1},focusAnchorElement:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){},registerAnchorEventHandler:function(){},deregisterAnchorEventHandler:function(){},registerDocumentEventHandler:function(){},deregisterDocumentEventHandler:function(){},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){},notifyHidden:function(){},getTooltipCaretSize:function(){return null},setTooltipCaretStyle:function(){},clearTooltipCaretStyles:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.richTooltip=this.adapter.hasClass(kh),this.persistentTooltip="true"===this.adapter.getAttribute(Bl),this.interactiveTooltip=!!this.adapter.getAnchorAttribute(Hl)&&"dialog"===this.adapter.getAnchorAttribute($l),this.hasCaret=this.richTooltip&&"true"===this.adapter.getAttribute(ql)},e.prototype.isShown=function(){return this.tooltipShown},e.prototype.isRich=function(){return this.richTooltip},e.prototype.isPersistent=function(){return this.persistentTooltip},e.prototype.handleAnchorMouseEnter=function(){var t=this;this.tooltipShown?this.show():(this.clearHideTimeout(),this.showTimeout=setTimeout((function(){t.show()}),this.showDelayMs))},e.prototype.handleAnchorTouchstart=function(){var t=this;this.showTimeout=setTimeout((function(){t.show()}),this.showDelayMs),this.adapter.registerWindowEventHandler("contextmenu",this.preventContextMenuOnLongTouch)},e.prototype.preventContextMenuOnLongTouch=function(t){t.preventDefault()},e.prototype.handleAnchorTouchend=function(){this.clearShowTimeout(),this.isShown()||this.adapter.deregisterWindowEventHandler("contextmenu",this.preventContextMenuOnLongTouch)},e.prototype.handleAnchorFocus=function(t){var e=this,n=t.relatedTarget;n instanceof HTMLElement&&this.adapter.tooltipContainsElement(n)||(this.showTimeout=setTimeout((function(){e.show()}),this.showDelayMs))},e.prototype.handleAnchorMouseLeave=function(){var t=this;this.clearShowTimeout(),this.hideTimeout=setTimeout((function(){t.hide()}),this.hideDelayMs)},e.prototype.handleAnchorClick=function(){this.tooltipShown?this.hide():this.show()},e.prototype.handleDocumentClick=function(t){var e=t.target instanceof HTMLElement&&(this.adapter.anchorContainsElement(t.target)||this.adapter.tooltipContainsElement(t.target));this.richTooltip&&this.persistentTooltip&&e||this.hide()},e.prototype.handleKeydown=function(t){(function(t){var e=t.key;return mh.has(e)?e:Dh.get(t.keyCode)||th})(t)===dh&&(document.activeElement instanceof HTMLElement&&this.adapter.tooltipContainsElement(document.activeElement)&&this.adapter.focusAnchorElement(),this.hide())},e.prototype.handleAnchorBlur=function(t){if(this.richTooltip&&(t.relatedTarget instanceof HTMLElement&&this.adapter.tooltipContainsElement(t.relatedTarget)))return;this.hide()},e.prototype.handleRichTooltipMouseEnter=function(){this.show()},e.prototype.handleRichTooltipMouseLeave=function(){var t=this;this.clearShowTimeout(),this.hideTimeout=setTimeout((function(){t.hide()}),this.hideDelayMs)},e.prototype.handleRichTooltipFocusOut=function(t){t.relatedTarget instanceof HTMLElement&&(this.adapter.anchorContainsElement(t.relatedTarget)||this.adapter.tooltipContainsElement(t.relatedTarget))||this.hide()},e.prototype.handleWindowChangeEvent=function(){var t=this;this.animFrame.request(Oh.POLL_ANCHOR,(function(){t.repositionTooltipOnAnchorMove()}))},e.prototype.show=function(){var t,e,n=this;if(this.clearHideTimeout(),this.clearShowTimeout(),!this.tooltipShown){this.tooltipShown=!0,this.parseShowTooltipOptions().hideFromScreenreader||this.adapter.setAttribute("aria-hidden","false"),this.richTooltip&&(this.interactiveTooltip&&this.adapter.setAnchorAttribute("aria-expanded","true"),this.adapter.registerEventHandler("focusout",this.richTooltipFocusOutHandler),this.persistentTooltip||(this.adapter.registerEventHandler("mouseenter",this.richTooltipMouseEnterHandler),this.adapter.registerEventHandler("mouseleave",this.richTooltipMouseLeaveHandler))),this.adapter.removeClass(Vh),this.adapter.addClass(Ph),this.isTooltipMultiline()&&!this.richTooltip&&this.adapter.addClass(Fh),this.anchorRect=this.adapter.getAnchorBoundingRect(),this.parentRect=this.adapter.getParentBoundingRect(),this.richTooltip?this.positionRichTooltip():this.positionPlainTooltip(),this.hasCaret&&this.setCaretPositionStyles(this.tooltipPositionWithCaret),this.adapter.registerAnchorEventHandler("blur",this.anchorBlurHandler),this.adapter.registerDocumentEventHandler("click",this.documentClickHandler),this.adapter.registerDocumentEventHandler("keydown",this.documentKeydownHandler),this.adapter.registerWindowEventHandler("scroll",this.windowScrollHandler),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler);try{for(var r=_t(this.addAncestorScrollEventListeners),i=r.next();!i.done;i=r.next()){(0,i.value)()}}catch(s){t={error:s}}finally{try{i&&!i.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}this.frameId=requestAnimationFrame((function(){n.clearAllAnimationClasses(),n.adapter.addClass(Lh),n.adapter.addClass(Mh)}))}},e.prototype.hide=function(){var t,e;if(this.clearHideTimeout(),this.clearShowTimeout(),this.tooltipShown){this.frameId&&cancelAnimationFrame(this.frameId),this.tooltipShown=!1,this.adapter.setAttribute("aria-hidden","true"),this.adapter.deregisterEventHandler("focusout",this.richTooltipFocusOutHandler),this.richTooltip&&(this.interactiveTooltip&&this.adapter.setAnchorAttribute("aria-expanded","false"),this.persistentTooltip||(this.adapter.deregisterEventHandler("mouseenter",this.richTooltipMouseEnterHandler),this.adapter.deregisterEventHandler("mouseleave",this.richTooltipMouseLeaveHandler))),this.clearAllAnimationClasses(),this.adapter.addClass(Vh),this.adapter.addClass(Uh),this.adapter.removeClass(Lh),this.adapter.deregisterAnchorEventHandler("blur",this.anchorBlurHandler),this.adapter.deregisterDocumentEventHandler("click",this.documentClickHandler),this.adapter.deregisterDocumentEventHandler("keydown",this.documentKeydownHandler),this.adapter.deregisterWindowEventHandler("scroll",this.windowScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("contextmenu",this.preventContextMenuOnLongTouch);try{for(var n=_t(this.removeAncestorScrollEventListeners),r=n.next();!r.done;r=n.next()){(0,r.value)()}}catch(i){t={error:i}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}}},e.prototype.handleTransitionEnd=function(){var t=this.adapter.hasClass(Vh);this.adapter.removeClass(Ph),this.adapter.removeClass(Mh),this.adapter.removeClass(Vh),this.adapter.removeClass(Uh),t&&this.adapter.notifyHidden()},e.prototype.clearAllAnimationClasses=function(){this.adapter.removeClass(Mh),this.adapter.removeClass(Uh)},e.prototype.setTooltipPosition=function(t){var e=t.xPos,n=t.yPos,r=t.withCaretPos;this.hasCaret&&r?this.tooltipPositionWithCaret=r:(e&&(this.xTooltipPos=e),n&&(this.yTooltipPos=n))},e.prototype.setAnchorBoundaryType=function(t){t===Dl.UNBOUNDED?this.anchorGap=kl:this.anchorGap=Ol},e.prototype.parseShowTooltipOptions=function(){return{hideFromScreenreader:Boolean(this.adapter.getAnchorAttribute("data-tooltip-id"))}},e.prototype.isTooltipMultiline=function(){var t=this.adapter.getTooltipSize();return t.height>Vl&&t.width>=Ul},e.prototype.positionPlainTooltip=function(){var t=this.calculateTooltipStyles(this.anchorRect),e=t.top,n=t.yTransformOrigin,r=t.left,i=t.xTransformOrigin,s=Hh?Zl(window,"transform"):"transform";this.adapter.setSurfaceStyleProperty(s+"-origin",n+" "+i),this.adapter.setStyleProperty("top",e+"px"),this.adapter.setStyleProperty("left",r+"px")},e.prototype.positionRichTooltip=function(){var t,e,n,r,i=this.adapter.getComputedStyleProperty("width");this.adapter.setStyleProperty("width",i);var s=this.calculateTooltipStyles(this.anchorRect),o=s.top,a=s.yTransformOrigin,c=s.left,u=s.xTransformOrigin,l=Hh?Zl(window,"transform"):"transform";this.adapter.setSurfaceStyleProperty(l+"-origin",a+" "+u);var h=c-(null!==(e=null===(t=this.parentRect)||void 0===t?void 0:t.left)&&void 0!==e?e:0),f=o-(null!==(r=null===(n=this.parentRect)||void 0===n?void 0:n.top)&&void 0!==r?r:0);this.adapter.setStyleProperty("top",f+"px"),this.adapter.setStyleProperty("left",h+"px")},e.prototype.calculateTooltipStyles=function(t){if(!t)return{top:0,left:0};var e=this.adapter.getTooltipSize(),n=this.calculateYTooltipDistance(t,e.height),r=this.calculateXTooltipDistance(t,e.width);return{top:n.distance,yTransformOrigin:n.yTransformOrigin,left:r.distance,xTransformOrigin:r.xTransformOrigin}},e.prototype.calculateXTooltipDistance=function(t,e){var n,r,i,s,o,a=!this.adapter.isRTL();this.richTooltip?(n=a?t.left-e:t.right,r=a?t.right:t.left-e,s=a?Wl:Kl,o=a?Kl:Wl):(n=a?t.left:t.right-e,r=a?t.right-e:t.left,i=t.left+(t.width-e)/2,s=a?Kl:Wl,o=a?Wl:Kl);var c=this.richTooltip?this.determineValidPositionOptions(n,r):this.determineValidPositionOptions(i,n,r);if(this.xTooltipPos===Il.START&&c.has(n))return{distance:n,xTransformOrigin:s};if(this.xTooltipPos===Il.END&&c.has(r))return{distance:r,xTransformOrigin:o};if(this.xTooltipPos===Il.CENTER&&c.has(i))return{distance:i,xTransformOrigin:Gl};var u=(this.richTooltip?[{distance:r,xTransformOrigin:o},{distance:n,xTransformOrigin:s}]:[{distance:i,xTransformOrigin:Gl},{distance:n,xTransformOrigin:s},{distance:r,xTransformOrigin:o}]).find((function(t){var e=t.distance;return c.has(e)}));return u||(t.left<0?{distance:this.minViewportTooltipThreshold,xTransformOrigin:Kl}:{distance:this.adapter.getViewportWidth()-(e+this.minViewportTooltipThreshold),xTransformOrigin:Wl})},e.prototype.determineValidPositionOptions=function(){for(var t,e,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=new Set,s=new Set;try{for(var o=_t(n),a=o.next();!a.done;a=o.next()){var c=a.value;this.positionHonorsViewportThreshold(c)?i.add(c):this.positionDoesntCollideWithViewport(c)&&s.add(c)}}catch(u){t={error:u}}finally{try{a&&!a.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}return i.size?i:s},e.prototype.positionHonorsViewportThreshold=function(t){var e=this.adapter.getViewportWidth();return t+this.adapter.getTooltipSize().width<=e-this.minViewportTooltipThreshold&&t>=this.minViewportTooltipThreshold},e.prototype.positionDoesntCollideWithViewport=function(t){var e=this.adapter.getViewportWidth();return t+this.adapter.getTooltipSize().width<=e&&t>=0},e.prototype.calculateYTooltipDistance=function(t,e){var n=t.bottom+this.anchorGap,r=t.top-(this.anchorGap+e),i=this.determineValidYPositionOptions(r,n);return this.yTooltipPos===Cl.ABOVE&&i.has(r)?{distance:r,yTransformOrigin:Xl}:this.yTooltipPos===Cl.BELOW&&i.has(n)||i.has(n)?{distance:n,yTransformOrigin:Ql}:i.has(r)?{distance:r,yTransformOrigin:Xl}:{distance:n,yTransformOrigin:Ql}},e.prototype.determineValidYPositionOptions=function(t,e){var n=new Set,r=new Set;return this.yPositionHonorsViewportThreshold(t)?n.add(t):this.yPositionDoesntCollideWithViewport(t)&&r.add(t),this.yPositionHonorsViewportThreshold(e)?n.add(e):this.yPositionDoesntCollideWithViewport(e)&&r.add(e),n.size?n:r},e.prototype.yPositionHonorsViewportThreshold=function(t){var e=this.adapter.getViewportHeight();return t+this.adapter.getTooltipSize().height+this.minViewportTooltipThreshold<=e&&t>=this.minViewportTooltipThreshold},e.prototype.yPositionDoesntCollideWithViewport=function(t){var e=this.adapter.getViewportHeight();return t+this.adapter.getTooltipSize().height<=e&&t>=0},e.prototype.repositionTooltipOnAnchorMove=function(){var t=this.adapter.getAnchorBoundingRect();t&&this.anchorRect&&(t.top===this.anchorRect.top&&t.left===this.anchorRect.left&&t.height===this.anchorRect.height&&t.width===this.anchorRect.width||(this.anchorRect=t,this.parentRect=this.adapter.getParentBoundingRect(),this.richTooltip?this.positionRichTooltip():this.positionPlainTooltip()))},e.prototype.setCaretPositionStyles=function(t){var e=this.calculateCaretPositionOnTooltip(t);return e?(this.adapter.clearTooltipCaretStyles(),this.adapter.setTooltipCaretStyle(e.yAlignment,e.yAxisPx),this.adapter.setTooltipCaretStyle(e.xAlignment,e.xAxisPx),this.adapter.setTooltipCaretStyle("transform","rotate("+e.rotation+")"),this.adapter.setTooltipCaretStyle("transform-origin",e.yAlignment+" "+e.xAlignment),{yTransformOrigin:e.yAxisPx,xTransformOrigin:e.xAxisPx}):{yTransformOrigin:0,xTransformOrigin:0}},e.prototype.calculateCaretPositionOnTooltip=function(t){var e=!this.adapter.isRTL(),n=this.adapter.getComputedStyleProperty("width"),r=this.adapter.getComputedStyleProperty("height"),i=this.adapter.getTooltipCaretSize();if(n&&r&&i){var s=i.width*Math.sqrt(2),o="calc(("+n+" - "+s+"px) / 2)",a="calc(("+r+" - "+s+"px) / 2)",c="0",u=Fl+"px",l="45deg",h="-45deg";switch(t){case jl.BELOW_CENTER:return{yAlignment:Ql,xAlignment:Kl,yAxisPx:c,xAxisPx:o,rotation:h};case jl.BELOW_END:return{yAlignment:Ql,xAlignment:e?Wl:Kl,yAxisPx:c,xAxisPx:u,rotation:e?l:h};case jl.BELOW_START:return{yAlignment:Ql,xAlignment:e?Kl:Wl,yAxisPx:c,xAxisPx:u,rotation:e?h:l};case jl.TOP_SIDE_END:return{yAlignment:Ql,xAlignment:e?Kl:Wl,yAxisPx:u,xAxisPx:c,rotation:e?l:h};case jl.CENTER_SIDE_END:return{yAlignment:Ql,xAlignment:e?Kl:Wl,yAxisPx:a,xAxisPx:c,rotation:e?l:h};case jl.BOTTOM_SIDE_END:return{yAlignment:Xl,xAlignment:e?Kl:Wl,yAxisPx:u,xAxisPx:c,rotation:e?h:l};case jl.TOP_SIDE_START:return{yAlignment:Ql,xAlignment:e?Wl:Kl,yAxisPx:u,xAxisPx:c,rotation:e?h:l};case jl.CENTER_SIDE_START:return{yAlignment:Ql,xAlignment:e?Wl:Kl,yAxisPx:a,xAxisPx:c,rotation:e?h:l};case jl.BOTTOM_SIDE_START:return{yAlignment:Xl,xAlignment:e?Wl:Kl,yAxisPx:u,xAxisPx:c,rotation:e?l:h};case jl.ABOVE_CENTER:return{yAlignment:Xl,xAlignment:Kl,yAxisPx:c,xAxisPx:o,rotation:l};case jl.ABOVE_END:return{yAlignment:Xl,xAlignment:e?Wl:Kl,yAxisPx:c,xAxisPx:u,rotation:e?h:l};default:case jl.ABOVE_START:return{yAlignment:Xl,xAlignment:e?Kl:Wl,yAxisPx:c,xAxisPx:u,rotation:e?l:h}}}},e.prototype.clearShowTimeout=function(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)},e.prototype.clearHideTimeout=function(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)},e.prototype.attachScrollHandler=function(t){var e=this;this.addAncestorScrollEventListeners.push((function(){t("scroll",e.windowScrollHandler)}))},e.prototype.removeScrollHandler=function(t){var e=this;this.removeAncestorScrollEventListeners.push((function(){t("scroll",e.windowScrollHandler)}))},e.prototype.destroy=function(){var t,e;this.frameId&&(cancelAnimationFrame(this.frameId),this.frameId=null),this.clearHideTimeout(),this.clearShowTimeout(),this.adapter.removeClass(Lh),this.adapter.removeClass(Mh),this.adapter.removeClass(Ph),this.adapter.removeClass(Vh),this.adapter.removeClass(Uh),this.richTooltip&&(this.adapter.deregisterEventHandler("focusout",this.richTooltipFocusOutHandler),this.persistentTooltip||(this.adapter.deregisterEventHandler("mouseenter",this.richTooltipMouseEnterHandler),this.adapter.deregisterEventHandler("mouseleave",this.richTooltipMouseLeaveHandler))),this.adapter.deregisterDocumentEventHandler("click",this.documentClickHandler),this.adapter.deregisterDocumentEventHandler("keydown",this.documentKeydownHandler),this.adapter.deregisterWindowEventHandler("scroll",this.windowScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler);try{for(var n=_t(this.removeAncestorScrollEventListeners),r=n.next();!r.done;r=n.next()){(0,r.value)()}}catch(i){t={error:i}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.animFrame.cancelAll()},e}(Sl);const Bh=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,qh=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function jh(t){let e,n=[];const r=t.$on;function i(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}(t,e)}return t.$on=(i,s)=>{let o=i,a=()=>{};e?a=e(o,s):n.push([o,s]);const c=o.match(Bh),u=o.match(qh),l=c||u;if(c&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',o),l){const t=o.split(c?":":"$");o=t[0]}const h=r.call(t,o,s);return(...t)=>(a(),h(...t))},t=>{const r=[],s={};e=(e,n)=>{let o=e,a=n,c=!1;const u=o.match(Bh),l=o.match(qh);if(u||l){const t=o.split(u?":":"$");o=t[0],c=Object.fromEntries(t.slice(1).map((t=>[t,!0]))),c.nonpassive&&(c.passive=!1,delete c.nonpassive),c.preventDefault&&(h=a,a=function(t){return t.preventDefault(),h.call(this,t)},delete c.preventDefault),c.stopPropagation&&(a=function(t){return function(e){return e.stopPropagation(),t.call(this,e)}}(a),delete c.stopPropagation)}var h;const f=C(t,o,a,c),d=()=>{f();const t=r.indexOf(d);t>-1&&r.splice(t,1)};return r.push(d),!o in s&&(s[o]=C(t,o,i)),d};for(let i=0;i<n.length;i++)e(n[i][0],n[i][1]);return{destroy:()=>{for(let t=0;t<r.length;t++)r[t]();for(let t of Object.entries(s))t[1]()}}}}function zh(t){return Object.entries(t).filter((([t,e])=>""!==t&&e)).map((([t])=>t)).join(" ")}function Kh(t,e){let n=Object.getOwnPropertyNames(t);const r={};for(let i=0;i<n.length;i++){const s=n[i],o=s.indexOf("$");-1!==o&&-1!==e.indexOf(s.substring(0,o+1))||-1===e.indexOf(s)&&(r[s]=t[s])}return r}function Wh(t,e){let n=Object.getOwnPropertyNames(t);const r={};for(let i=0;i<n.length;i++){const s=n[i];s.substring(0,e.length)===e&&(r[s.substring(e.length)]=t[s])}return r}function Gh(t,e){let n=[];if(e)for(let r=0;r<e.length;r++){const i=Array.isArray(e[r]),s=i?e[r][0]:e[r];i&&e[r].length>1?n.push(s(t,e[r][1])):n.push(s(t))}return{update(t){if((t&&t.length||0)!=n.length)throw new Error("You must not change the length of an actions array.");if(t)for(let e=0;e<t.length;e++)if(n[e]&&"update"in n[e]){Array.isArray(t[e])&&t[e].length>1?n[e].update(t[e][1]):n[e].update()}},destroy(){for(let t=0;t<n.length;t++)n[t]&&"destroy"in n[t]&&n[t].destroy()}}}function Qh(t){let e,n,r,i,o,c,u,f,d,m,y,v,w,S;const I=t[28].default,x=p(I,t,t[27],null);let N=[{class:r=zh({[t[6]]:!0,"mdc-tooltip__surface":!0,"mdc-tooltip__surface-animation":!0})},{style:i=Object.entries(t[13]).map(Yh).concat([t[7]]).join(" ")},Wh(t[18],"surface$")],k={};for(let s=0;s<N.length;s+=1)k=a(k,N[s]);let L=[{class:o=zh(s({[t[1]]:!0,"mdc-tooltip":!0,"mdc-tooltip--rich":t[17]},t[10]))},{style:c=Object.entries(t[11]).map(Jh).concat([t[2]]).join(" ")},{role:u=t[17]&&t[5]?"dialog":"tooltip"},{"aria-hidden":"true"},{id:t[3]},{tabindex:f=t[17]&&t[4]?"-1":null},{"data-mdc-tooltip-persist":d=t[17]&&t[4]?"true":null},{"data-mdc-tooltip-persistent":m=t[17]&&t[4]?"true":null},t[12],Kh(t[18],["surface$"])],P={};for(let s=0;s<L.length;s+=1)P=a(P,L[s]);return{c(){e=A("div"),n=A("div"),x&&x.c(),this.h()},l(t){e=O(t,"DIV",{class:!0,style:!0,role:!0,"aria-hidden":!0,id:!0,tabindex:!0,"data-mdc-tooltip-persist":!0,"data-mdc-tooltip-persistent":!0});var r=R(e);n=O(r,"DIV",{class:!0,style:!0});var i=R(n);x&&x.l(i),i.forEach(_),r.forEach(_),this.h()},h(){D(n,k),D(e,P)},m(r,i){T(r,e,i),b(e,n),x&&x.m(n,null),t[29](e),v=!0,w||(S=[E(y=Gh.call(null,e,t[0])),E(t[14].call(null,e)),C(e,"transitionend",t[30])],w=!0)},p(t,a){x&&x.p&&(!v||134217728&a[0])&&g(x,I,t,t[27],a,null,null),D(n,k=at(N,[(!v||64&a[0]&&r!==(r=zh({[t[6]]:!0,"mdc-tooltip__surface":!0,"mdc-tooltip__surface-animation":!0})))&&{class:r},(!v||8320&a[0]&&i!==(i=Object.entries(t[13]).map(Yh).concat([t[7]]).join(" ")))&&{style:i},262144&a[0]&&Wh(t[18],"surface$")])),D(e,P=at(L,[(!v||1026&a[0]&&o!==(o=zh(s({[t[1]]:!0,"mdc-tooltip":!0,"mdc-tooltip--rich":t[17]},t[10]))))&&{class:o},(!v||2052&a[0]&&c!==(c=Object.entries(t[11]).map(Jh).concat([t[2]]).join(" ")))&&{style:c},(!v||32&a[0]&&u!==(u=t[17]&&t[5]?"dialog":"tooltip"))&&{role:u},{"aria-hidden":"true"},(!v||8&a[0])&&{id:t[3]},(!v||16&a[0]&&f!==(f=t[17]&&t[4]?"-1":null))&&{tabindex:f},(!v||16&a[0]&&d!==(d=t[17]&&t[4]?"true":null))&&{"data-mdc-tooltip-persist":d},(!v||16&a[0]&&m!==(m=t[17]&&t[4]?"true":null))&&{"data-mdc-tooltip-persistent":m},4096&a[0]&&t[12],262144&a[0]&&Kh(t[18],["surface$"])])),y&&h(y.update)&&1&a[0]&&y.update.call(null,t[0])},i(t){v||(st(x,t),v=!0)},o(t){ot(x,t),v=!1},d(n){n&&_(e),x&&x.d(n),t[29](null),w=!1,l(S)}}}let Xh=0;const Yh=([t,e])=>`${t}: ${e};`,Jh=([t,e])=>`${t}: ${e};`;function Zh(t,e,n){const r=["use","class","style","id","unbounded","xPos","yPos","persistent","interactive","surface$class","surface$style","attachScrollHandler","removeScrollHandler","getElement"];let i,s,o=v(e,r),{$$slots:c={},$$scope:u}=e;const l=jh(F());let h,f,{use:p=[]}=e,{class:m=""}=e,{style:g=""}=e,{id:E="SMUI-tooltip-"+Xh++}=e,{unbounded:b=!1}=e,{xPos:T="detected"}=e,{yPos:_="detected"}=e,{persistent:A=!1}=e,{interactive:S=A}=e,{surface$class:I=""}=e,{surface$style:x=""}=e,C={setParent(t){Object.defineProperty(this,"parent",{value:t})},setNextSibling(t){Object.defineProperty(this,"nextSibling",{value:t})}},N={},D={},R={},O={},k=q("SMUI:tooltip:wrapper:anchor");d(t,k,(t=>n(26,i=t)));let L=q("SMUI:tooltip:wrapper:tooltip");d(t,L,(t=>n(31,s=t)));const P=q("SMUI:tooltip:rich");let M=null;var V;function U(t){t.removeEventListener("focusout",Y),P&&A?(t.removeEventListener("click",J),t.removeEventListener("keydown",J)):(t.removeEventListener("mouseenter",Z),t.removeEventListener("focusin",tt),t.removeEventListener("mouseleave",et),t.removeEventListener("touchstart",nt),t.removeEventListener("touchend",rt)),P&&S?(t.removeAttribute("aria-haspopup"),t.removeAttribute("aria-expanded"),t.removeAttribute("data-tooltip-id")):t.removeAttribute("aria-describedby"),f.destroy()}function $(t){t.addEventListener("focusout",Y),P&&A?(t.addEventListener("click",J),t.addEventListener("keydown",J)):(t.addEventListener("mouseenter",Z),t.addEventListener("focusin",tt),t.addEventListener("mouseleave",et),t.addEventListener("touchstart",nt),t.addEventListener("touchend",rt)),P&&S?(t.setAttribute("aria-haspopup","dialog"),t.setAttribute("aria-expanded","false"),t.setAttribute("data-tooltip-id",E)):t.setAttribute("aria-describedby",E),P||i&&document.body!==it().parentNode&&(C.setParent(it().parentNode),C.setNextSibling(it().nextSibling),document.body.appendChild(it())),f.init()}function B(t){return t in N?N[t]:it().classList.contains(t)}function j(t){N[t]||n(10,N[t]=!0,N)}function K(t){t in N&&!N[t]||n(10,N[t]=!1,N)}function W(t,e){D[t]!=e&&(""===e||null==e?(delete D[t],n(11,D)):n(11,D[t]=e,D))}function G(t,e){O[t]!=e&&(""===e||null==e?(delete O[t],n(13,O)):n(13,O[t]=e,O))}function Q(t){return t in R?R[t]:it().getAttribute(t)}function X(t,e){R[t]!==e&&n(12,R[t]=e,R)}function Y(t){h.contains(t.relatedTarget)||f&&f.hide()}function J(t){"keydown"===t.type&&"Enter"!==t.key&&" "!==t.key||f&&f.handleAnchorClick()}function Z(){f&&f.handleAnchorMouseEnter()}function tt(t){f&&f.handleAnchorFocus(t)}function et(){f&&f.handleAnchorMouseLeave()}function nt(){f&&f.handleAnchorTouchstart()}function rt(){f&&f.handleAnchorTouchend()}function it(){return h}H((()=>(n(8,f=new $h({getAttribute:Q,setAttribute:X,addClass:j,hasClass:B,removeClass:K,getComputedStyleProperty:t=>{const e=it();let n=getComputedStyle(e).getPropertyValue(t);return"auto"===n&&(e.classList.add("smui-banner--force-show"),n=getComputedStyle(e).getPropertyValue(t),e.classList.remove("smui-banner--force-show")),n},setStyleProperty:W,setSurfaceStyleProperty:G,getViewportWidth:()=>window.innerWidth,getViewportHeight:()=>window.innerHeight,getTooltipSize:()=>{const t=it();let e={width:t.offsetWidth,height:t.offsetHeight};return 0!==e.width&&0!==e.height||(t.classList.add("smui-banner--force-show"),e={width:t.offsetWidth,height:t.offsetHeight},t.classList.remove("smui-banner--force-show")),e},getAnchorBoundingRect:()=>i?i.getBoundingClientRect():null,getParentBoundingRect:()=>{let t=it().parentNode;return P||(t=document.body),t.getBoundingClientRect()||null},getAnchorAttribute:t=>i?i.getAttribute(t):null,setAnchorAttribute:(t,e)=>{i&&i.setAttribute(t,e)},isRTL:()=>"rtl"===getComputedStyle(it()).direction,anchorContainsElement:t=>!(!i||!i.contains(t)),tooltipContainsElement:t=>it().contains(t),focusAnchorElement:()=>{i&&i.focus()},registerEventHandler:(t,e)=>{it().addEventListener(t,e)},deregisterEventHandler:(t,e)=>{it().removeEventListener(t,e)},registerAnchorEventHandler:(t,e)=>{i&&i.addEventListener(t,e)},deregisterAnchorEventHandler:(t,e)=>{i&&i.removeEventListener(t,e)},registerDocumentEventHandler:(t,e)=>{document.body.addEventListener(t,e)},deregisterDocumentEventHandler:(t,e)=>{document.body.removeEventListener(t,e)},registerWindowEventHandler:(t,e)=>{window.addEventListener(t,e,"scroll"===t&&{capture:!0,passive:!0})},deregisterWindowEventHandler:(t,e)=>{window.removeEventListener(t,e,"scroll"===t&&{capture:!0,passive:!0})},notifyHidden:()=>{!function(t,e,n={},r={bubbles:!0}){if("undefined"!=typeof Event&&t){const i=new Event(e,r);i.detail=n,("getElement"in t?t.getElement():t).dispatchEvent(i)}}(it(),"MDCTooltip:hidden")}})),w(L,s=h,s),()=>{i&&U(i)}))),V=()=>{!P&&"undefined"!=typeof document&&document.body===it().parentNode&&C.parent.insertBefore&&C.parent.insertBefore(it(),C.nextSibling)},F().$$.on_destroy.push(V);return t.$$set=t=>{e=a(a({},e),y(t)),n(18,o=v(e,r)),"use"in t&&n(0,p=t.use),"class"in t&&n(1,m=t.class),"style"in t&&n(2,g=t.style),"id"in t&&n(3,E=t.id),"unbounded"in t&&n(19,b=t.unbounded),"xPos"in t&&n(20,T=t.xPos),"yPos"in t&&n(21,_=t.yPos),"persistent"in t&&n(4,A=t.persistent),"interactive"in t&&n(5,S=t.interactive),"surface$class"in t&&n(6,I=t.surface$class),"surface$style"in t&&n(7,x=t.surface$style),"$$scope"in t&&n(27,u=t.$$scope)},t.$$.update=()=>{100663552&t.$$.dirty[0]&&f&&M!==i&&(M&&U(M),i&&$(i),n(25,M=i)),524544&t.$$.dirty[0]&&f&&f.setAnchorBoundaryType(Dl[b?"UNBOUNDED":"BOUNDED"]),3145984&t.$$.dirty[0]&&f&&f.setTooltipPosition({xPos:Il[T.toUpperCase()],yPos:Cl[_.toUpperCase()]})},[p,m,g,E,A,S,I,x,f,h,N,D,R,O,l,k,L,P,o,b,T,_,function(t){f&&f.attachScrollHandler(t)},function(t){f&&f.removeScrollHandler(t)},it,M,i,u,c,function(t){z[t?"unshift":"push"]((()=>{h=t,n(9,h)}))},()=>f&&f.handleTransitionEnd()]}class tf extends mt{constructor(t){super(),pt(this,t,Zh,Qh,f,{use:0,class:1,style:2,id:3,unbounded:19,xPos:20,yPos:21,persistent:4,interactive:5,surface$class:6,surface$style:7,attachScrollHandler:22,removeScrollHandler:23,getElement:24},[-1,-1])}get attachScrollHandler(){return this.$$.ctx[22]}get removeScrollHandler(){return this.$$.ctx[23]}get getElement(){return this.$$.ctx[24]}}function ef(t){let e;const n=t[12].default,r=p(n,t,t[11],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,i){r&&r.p&&(!e||2048&i)&&g(r,n,t,t[11],i,null,null)},i(t){e||(st(r,t),e=!0)},o(t){ot(r,t),e=!1},d(t){r&&r.d(t)}}}function nf(t){let e,n,r,i,s,o;const c=t[12].default,u=p(c,t,t[11],null);let f=[{class:n=zh({[t[1]]:!0,"mdc-tooltip-wrapper--rich":!0})},t[7]],d={};for(let l=0;l<f.length;l+=1)d=a(d,f[l]);return{c(){e=A("div"),u&&u.c(),this.h()},l(t){e=O(t,"DIV",{class:!0});var n=R(e);u&&u.l(n),n.forEach(_),this.h()},h(){D(e,d)},m(n,a){T(n,e,a),u&&u.m(e,null),t[13](e),i=!0,s||(o=[E(r=Gh.call(null,e,t[0])),E(t[4].call(null,e))],s=!0)},p(t,s){u&&u.p&&(!i||2048&s)&&g(u,c,t,t[11],s,null,null),D(e,d=at(f,[(!i||2&s&&n!==(n=zh({[t[1]]:!0,"mdc-tooltip-wrapper--rich":!0})))&&{class:n},128&s&&t[7]])),r&&h(r.update)&&1&s&&r.update.call(null,t[0])},i(t){i||(st(u,t),i=!0)},o(t){ot(u,t),i=!1},d(n){n&&_(e),u&&u.d(n),t[13](null),s=!1,l(o)}}}function rf(t){let e,n,r,i;const s=[nf,ef],o=[];function a(t,e){return t[2]?0:1}return e=a(t),n=o[e]=s[e](t),{c(){n.c(),r=x()},l(t){n.l(t),r=x()},m(t,n){o[e].m(t,n),T(t,r,n),i=!0},p(t,[i]){let c=e;e=a(t),e===c?o[e].p(t,i):(rt(),ot(o[c],1,1,(()=>{o[c]=null})),it(),n=o[e],n?n.p(t,i):(n=o[e]=s[e](t),n.c()),st(n,1),n.m(r.parentNode,r))},i(t){i||(st(n),i=!0)},o(t){ot(n),i=!1},d(t){o[e].d(t),t&&_(r)}}}function sf(t,e,n){const r=["use","class","rich","getElement"];let i,s,o=v(e,r),{$$slots:c={},$$scope:u}=e;const l=jh(F());let h,{use:f=[]}=e,{class:p=""}=e,{rich:m=!1}=e;const g=yt(null);d(t,g,(t=>n(10,s=t)));const E=yt(null);return d(t,E,(t=>n(9,i=t))),B("SMUI:tooltip:wrapper:anchor",g),B("SMUI:tooltip:wrapper:tooltip",E),B("SMUI:tooltip:rich",m),t.$$set=t=>{e=a(a({},e),y(t)),n(7,o=v(e,r)),"use"in t&&n(0,f=t.use),"class"in t&&n(1,p=t.class),"rich"in t&&n(2,m=t.rich),"$$scope"in t&&n(11,u=t.$$scope)},t.$$.update=()=>{1536&t.$$.dirty&&i&&!s&&w(g,s=i.previousElementSibling,s)},[f,p,m,h,l,g,E,o,function(){return h},i,s,u,c,function(t){z[t?"unshift":"push"]((()=>{h=t,n(3,h)}))}]}class of extends mt{constructor(t){super(),pt(this,t,sf,rf,f,{use:0,class:1,rich:2,getElement:8})}get getElement(){return this.$$.ctx[8]}}var af={value:()=>{}};function cf(){for(var t,e=0,n=arguments.length,r={};e<n;++e){if(!(t=arguments[e]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t);r[t]=[]}return new uf(r)}function uf(t){this._=t}function lf(t,e){return t.trim().split(/^|\s+/).map((function(t){var n="",r=t.indexOf(".");if(r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:n}}))}function hf(t,e){for(var n,r=0,i=t.length;r<i;++r)if((n=t[r]).name===e)return n.value}function ff(t,e,n){for(var r=0,i=t.length;r<i;++r)if(t[r].name===e){t[r]=af,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=n&&t.push({name:e,value:n}),t}uf.prototype=cf.prototype={constructor:uf,on:function(t,e){var n,r=this._,i=lf(t+"",r),s=-1,o=i.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++s<o;)if(n=(t=i[s]).type)r[n]=ff(r[n],t.name,e);else if(null==e)for(n in r)r[n]=ff(r[n],t.name,null);return this}for(;++s<o;)if((n=(t=i[s]).type)&&(n=hf(r[n],t.name)))return n},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new uf(t)},call:function(t,e){if((n=arguments.length-2)>0)for(var n,r,i=new Array(n),s=0;s<n;++s)i[s]=arguments[s+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(s=0,n=(r=this._[t]).length;s<n;++s)r[s].value.apply(e,i)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,s=r.length;i<s;++i)r[i].value.apply(e,n)}};var df="http://www.w3.org/1999/xhtml",pf={svg:"http://www.w3.org/2000/svg",xhtml:df,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function mf(t){var e=t+="",n=e.indexOf(":");return n>=0&&"xmlns"!==(e=t.slice(0,n))&&(t=t.slice(n+1)),pf.hasOwnProperty(e)?{space:pf[e],local:t}:t}function gf(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===df&&e.documentElement.namespaceURI===df?e.createElement(t):e.createElementNS(n,t)}}function yf(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function vf(t){var e=mf(t);return(e.local?yf:gf)(e)}function wf(){}function Ef(t){return null==t?wf:function(){return this.querySelector(t)}}function bf(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function Tf(){return[]}function _f(t){return null==t?Tf:function(){return this.querySelectorAll(t)}}function Af(t){return function(){return this.matches(t)}}function Sf(t){return function(e){return e.matches(t)}}var If=Array.prototype.find;function xf(){return this.firstElementChild}var Cf=Array.prototype.filter;function Nf(){return this.children}function Df(t){return new Array(t.length)}function Rf(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}function Of(t){return function(){return t}}function kf(t,e,n,r,i,s){for(var o,a=0,c=e.length,u=s.length;a<u;++a)(o=e[a])?(o.__data__=s[a],r[a]=o):n[a]=new Rf(t,s[a]);for(;a<c;++a)(o=e[a])&&(i[a]=o)}function Lf(t,e,n,r,i,s,o){var a,c,u,l=new Map,h=e.length,f=s.length,d=new Array(h);for(a=0;a<h;++a)(c=e[a])&&(d[a]=u=o.call(c,c.__data__,a,e)+"",l.has(u)?i[a]=c:l.set(u,c));for(a=0;a<f;++a)u=o.call(t,s[a],a,s)+"",(c=l.get(u))?(r[a]=c,c.__data__=s[a],l.delete(u)):n[a]=new Rf(t,s[a]);for(a=0;a<h;++a)(c=e[a])&&l.get(d[a])===c&&(i[a]=c)}function Pf(t){return t.__data__}function Mf(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function Vf(t){return function(){this.removeAttribute(t)}}function Uf(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Ff(t,e){return function(){this.setAttribute(t,e)}}function Hf(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function $f(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttribute(t):this.setAttribute(t,n)}}function Bf(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function qf(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function jf(t){return function(){this.style.removeProperty(t)}}function zf(t,e,n){return function(){this.style.setProperty(t,e,n)}}function Kf(t,e,n){return function(){var r=e.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,n)}}function Wf(t,e){return t.style.getPropertyValue(e)||qf(t).getComputedStyle(t,null).getPropertyValue(e)}function Gf(t){return function(){delete this[t]}}function Qf(t,e){return function(){this[t]=e}}function Xf(t,e){return function(){var n=e.apply(this,arguments);null==n?delete this[t]:this[t]=n}}function Yf(t){return t.trim().split(/^|\s+/)}function Jf(t){return t.classList||new Zf(t)}function Zf(t){this._node=t,this._names=Yf(t.getAttribute("class")||"")}function td(t,e){for(var n=Jf(t),r=-1,i=e.length;++r<i;)n.add(e[r])}function ed(t,e){for(var n=Jf(t),r=-1,i=e.length;++r<i;)n.remove(e[r])}function nd(t){return function(){td(this,t)}}function rd(t){return function(){ed(this,t)}}function id(t,e){return function(){(e.apply(this,arguments)?td:ed)(this,t)}}function sd(){this.textContent=""}function od(t){return function(){this.textContent=t}}function ad(t){return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}function cd(){this.innerHTML=""}function ud(t){return function(){this.innerHTML=t}}function ld(t){return function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}}function hd(){this.nextSibling&&this.parentNode.appendChild(this)}function fd(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function dd(){return null}function pd(){var t=this.parentNode;t&&t.removeChild(this)}function md(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function gd(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function yd(t){return t.trim().split(/^|\s+/).map((function(t){var e="",n=t.indexOf(".");return n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),{type:t,name:e}}))}function vd(t){return function(){var e=this.__on;if(e){for(var n,r=0,i=-1,s=e.length;r<s;++r)n=e[r],t.type&&n.type!==t.type||n.name!==t.name?e[++i]=n:this.removeEventListener(n.type,n.listener,n.options);++i?e.length=i:delete this.__on}}}function wd(t,e,n){return function(){var r,i=this.__on,s=function(t){return function(e){t.call(this,e,this.__data__)}}(e);if(i)for(var o=0,a=i.length;o<a;++o)if((r=i[o]).type===t.type&&r.name===t.name)return this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=n),void(r.value=e);this.addEventListener(t.type,s,n),r={type:t.type,name:t.name,value:e,listener:s,options:n},i?i.push(r):this.__on=[r]}}function Ed(t,e,n){var r=qf(t),i=r.CustomEvent;"function"==typeof i?i=new i(e,n):(i=r.document.createEvent("Event"),n?(i.initEvent(e,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(e,!1,!1)),t.dispatchEvent(i)}function bd(t,e){return function(){return Ed(this,t,e)}}function Td(t,e){return function(){return Ed(this,t,e.apply(this,arguments))}}Rf.prototype={constructor:Rf,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}},Zf.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var _d=[null];function Ad(t,e){this._groups=t,this._parents=e}function Sd(){return new Ad([[document.documentElement]],_d)}function Id(t){return"string"==typeof t?new Ad([[document.querySelector(t)]],[document.documentElement]):new Ad([[t]],_d)}function xd(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function Cd(t,e){var n=Object.create(t.prototype);for(var r in e)n[r]=e[r];return n}function Nd(){}Ad.prototype=Sd.prototype={constructor:Ad,select:function(t){"function"!=typeof t&&(t=Ef(t));for(var e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i)for(var s,o,a=e[i],c=a.length,u=r[i]=new Array(c),l=0;l<c;++l)(s=a[l])&&(o=t.call(s,s.__data__,l,a))&&("__data__"in s&&(o.__data__=s.__data__),u[l]=o);return new Ad(r,this._parents)},selectAll:function(t){t="function"==typeof t?function(t){return function(){var e=t.apply(this,arguments);return null==e?[]:bf(e)}}(t):_f(t);for(var e=this._groups,n=e.length,r=[],i=[],s=0;s<n;++s)for(var o,a=e[s],c=a.length,u=0;u<c;++u)(o=a[u])&&(r.push(t.call(o,o.__data__,u,a)),i.push(o));return new Ad(r,i)},selectChild:function(t){return this.select(null==t?xf:function(t){return function(){return If.call(this.children,t)}}("function"==typeof t?t:Sf(t)))},selectChildren:function(t){return this.selectAll(null==t?Nf:function(t){return function(){return Cf.call(this.children,t)}}("function"==typeof t?t:Sf(t)))},filter:function(t){"function"!=typeof t&&(t=Af(t));for(var e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i)for(var s,o=e[i],a=o.length,c=r[i]=[],u=0;u<a;++u)(s=o[u])&&t.call(s,s.__data__,u,o)&&c.push(s);return new Ad(r,this._parents)},data:function(t,e){if(!arguments.length)return Array.from(this,Pf);var n=e?Lf:kf,r=this._parents,i=this._groups;"function"!=typeof t&&(t=Of(t));for(var s=i.length,o=new Array(s),a=new Array(s),c=new Array(s),u=0;u<s;++u){var l=r[u],h=i[u],f=h.length,d=bf(t.call(l,l&&l.__data__,u,r)),p=d.length,m=a[u]=new Array(p),g=o[u]=new Array(p),y=c[u]=new Array(f);n(l,h,m,g,y,d,e);for(var v,w,E=0,b=0;E<p;++E)if(v=m[E]){for(E>=b&&(b=E+1);!(w=g[b])&&++b<p;);v._next=w||null}}return(o=new Ad(o,r))._enter=a,o._exit=c,o},enter:function(){return new Ad(this._enter||this._groups.map(Df),this._parents)},exit:function(){return new Ad(this._exit||this._groups.map(Df),this._parents)},join:function(t,e,n){var r=this.enter(),i=this,s=this.exit();return r="function"==typeof t?t(r):r.append(t+""),null!=e&&(i=e(i)),null==n?s.remove():n(s),r&&i?r.merge(i).order():i},merge:function(t){if(!(t instanceof Ad))throw new Error("invalid merge");for(var e=this._groups,n=t._groups,r=e.length,i=n.length,s=Math.min(r,i),o=new Array(r),a=0;a<s;++a)for(var c,u=e[a],l=n[a],h=u.length,f=o[a]=new Array(h),d=0;d<h;++d)(c=u[d]||l[d])&&(f[d]=c);for(;a<r;++a)o[a]=e[a];return new Ad(o,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var r,i=t[e],s=i.length-1,o=i[s];--s>=0;)(r=i[s])&&(o&&4^r.compareDocumentPosition(o)&&o.parentNode.insertBefore(r,o),o=r);return this},sort:function(t){function e(e,n){return e&&n?t(e.__data__,n.__data__):!e-!n}t||(t=Mf);for(var n=this._groups,r=n.length,i=new Array(r),s=0;s<r;++s){for(var o,a=n[s],c=a.length,u=i[s]=new Array(c),l=0;l<c;++l)(o=a[l])&&(u[l]=o);u.sort(e)}return new Ad(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r=t[e],i=0,s=r.length;i<s;++i){var o=r[i];if(o)return o}return null},size:function(){let t=0;for(const e of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var e=this._groups,n=0,r=e.length;n<r;++n)for(var i,s=e[n],o=0,a=s.length;o<a;++o)(i=s[o])&&t.call(i,i.__data__,o,s);return this},attr:function(t,e){var n=mf(t);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((null==e?n.local?Uf:Vf:"function"==typeof e?n.local?Bf:$f:n.local?Hf:Ff)(n,e))},style:function(t,e,n){return arguments.length>1?this.each((null==e?jf:"function"==typeof e?Kf:zf)(t,e,null==n?"":n)):Wf(this.node(),t)},property:function(t,e){return arguments.length>1?this.each((null==e?Gf:"function"==typeof e?Xf:Qf)(t,e)):this.node()[t]},classed:function(t,e){var n=Yf(t+"");if(arguments.length<2){for(var r=Jf(this.node()),i=-1,s=n.length;++i<s;)if(!r.contains(n[i]))return!1;return!0}return this.each(("function"==typeof e?id:e?nd:rd)(n,e))},text:function(t){return arguments.length?this.each(null==t?sd:("function"==typeof t?ad:od)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?cd:("function"==typeof t?ld:ud)(t)):this.node().innerHTML},raise:function(){return this.each(hd)},lower:function(){return this.each(fd)},append:function(t){var e="function"==typeof t?t:vf(t);return this.select((function(){return this.appendChild(e.apply(this,arguments))}))},insert:function(t,e){var n="function"==typeof t?t:vf(t),r=null==e?dd:"function"==typeof e?e:Ef(e);return this.select((function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)}))},remove:function(){return this.each(pd)},clone:function(t){return this.select(t?gd:md)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,e,n){var r,i,s=yd(t+""),o=s.length;if(!(arguments.length<2)){for(a=e?wd:vd,r=0;r<o;++r)this.each(a(s[r],e,n));return this}var a=this.node().__on;if(a)for(var c,u=0,l=a.length;u<l;++u)for(r=0,c=a[u];r<o;++r)if((i=s[r]).type===c.type&&i.name===c.name)return c.value},dispatch:function(t,e){return this.each(("function"==typeof e?Td:bd)(t,e))},[Symbol.iterator]:function*(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r,i=t[e],s=0,o=i.length;s<o;++s)(r=i[s])&&(yield r)}};var Dd=1/.7,Rd="\\s*([+-]?\\d+)\\s*",Od="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",kd="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Ld=/^#([0-9a-f]{3,8})$/,Pd=new RegExp("^rgb\\("+[Rd,Rd,Rd]+"\\)$"),Md=new RegExp("^rgb\\("+[kd,kd,kd]+"\\)$"),Vd=new RegExp("^rgba\\("+[Rd,Rd,Rd,Od]+"\\)$"),Ud=new RegExp("^rgba\\("+[kd,kd,kd,Od]+"\\)$"),Fd=new RegExp("^hsl\\("+[Od,kd,kd]+"\\)$"),Hd=new RegExp("^hsla\\("+[Od,kd,kd,Od]+"\\)$"),$d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function Bd(){return this.rgb().formatHex()}function qd(){return this.rgb().formatRgb()}function jd(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=Ld.exec(t))?(n=e[1].length,e=parseInt(e[1],16),6===n?zd(e):3===n?new Qd(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===n?Kd(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===n?Kd(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=Pd.exec(t))?new Qd(e[1],e[2],e[3],1):(e=Md.exec(t))?new Qd(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=Vd.exec(t))?Kd(e[1],e[2],e[3],e[4]):(e=Ud.exec(t))?Kd(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=Fd.exec(t))?Zd(e[1],e[2]/100,e[3]/100,1):(e=Hd.exec(t))?Zd(e[1],e[2]/100,e[3]/100,e[4]):$d.hasOwnProperty(t)?zd($d[t]):"transparent"===t?new Qd(NaN,NaN,NaN,0):null}function zd(t){return new Qd(t>>16&255,t>>8&255,255&t,1)}function Kd(t,e,n,r){return r<=0&&(t=e=n=NaN),new Qd(t,e,n,r)}function Wd(t){return t instanceof Nd||(t=jd(t)),t?new Qd((t=t.rgb()).r,t.g,t.b,t.opacity):new Qd}function Gd(t,e,n,r){return 1===arguments.length?Wd(t):new Qd(t,e,n,null==r?1:r)}function Qd(t,e,n,r){this.r=+t,this.g=+e,this.b=+n,this.opacity=+r}function Xd(){return"#"+Jd(this.r)+Jd(this.g)+Jd(this.b)}function Yd(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function Jd(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function Zd(t,e,n,r){return r<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new ep(t,e,n,r)}function tp(t){if(t instanceof ep)return new ep(t.h,t.s,t.l,t.opacity);if(t instanceof Nd||(t=jd(t)),!t)return new ep;if(t instanceof ep)return t;var e=(t=t.rgb()).r/255,n=t.g/255,r=t.b/255,i=Math.min(e,n,r),s=Math.max(e,n,r),o=NaN,a=s-i,c=(s+i)/2;return a?(o=e===s?(n-r)/a+6*(n<r):n===s?(r-e)/a+2:(e-n)/a+4,a/=c<.5?s+i:2-s-i,o*=60):a=c>0&&c<1?0:o,new ep(o,a,c,t.opacity)}function ep(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}function np(t,e,n){return 255*(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)}xd(Nd,jd,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:Bd,formatHex:Bd,formatHsl:function(){return tp(this).formatHsl()},formatRgb:qd,toString:qd}),xd(Qd,Gd,Cd(Nd,{brighter:function(t){return t=null==t?Dd:Math.pow(Dd,t),new Qd(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Qd(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Xd,formatHex:Xd,formatRgb:Yd,toString:Yd})),xd(ep,(function(t,e,n,r){return 1===arguments.length?tp(t):new ep(t,e,n,null==r?1:r)}),Cd(Nd,{brighter:function(t){return t=null==t?Dd:Math.pow(Dd,t),new ep(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new ep(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*e,i=2*n-r;return new Qd(np(t>=240?t-240:t+120,i,r),np(t,i,r),np(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}));var rp=t=>()=>t;function ip(t){return 1==(t=+t)?sp:function(e,n){return n-e?function(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(r){return Math.pow(t+r*e,n)}}(e,n,t):rp(isNaN(e)?n:e)}}function sp(t,e){var n=e-t;return n?function(t,e){return function(n){return t+n*e}}(t,n):rp(isNaN(t)?e:t)}var op=function t(e){var n=ip(e);function r(t,e){var r=n((t=Gd(t)).r,(e=Gd(e)).r),i=n(t.g,e.g),s=n(t.b,e.b),o=sp(t.opacity,e.opacity);return function(e){return t.r=r(e),t.g=i(e),t.b=s(e),t.opacity=o(e),t+""}}return r.gamma=t,r}(1);function ap(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}var cp=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,up=new RegExp(cp.source,"g");function lp(t,e){var n,r,i,s=cp.lastIndex=up.lastIndex=0,o=-1,a=[],c=[];for(t+="",e+="";(n=cp.exec(t))&&(r=up.exec(e));)(i=r.index)>s&&(i=e.slice(s,i),a[o]?a[o]+=i:a[++o]=i),(n=n[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:ap(n,r)})),s=up.lastIndex;return s<e.length&&(i=e.slice(s),a[o]?a[o]+=i:a[++o]=i),a.length<2?c[0]?function(t){return function(e){return t(e)+""}}(c[0].x):function(t){return function(){return t}}(e):(e=c.length,function(t){for(var n,r=0;r<e;++r)a[(n=c[r]).i]=n.x(t);return a.join("")})}var hp,fp=180/Math.PI,dp={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function pp(t,e,n,r,i,s){var o,a,c;return(o=Math.sqrt(t*t+e*e))&&(t/=o,e/=o),(c=t*n+e*r)&&(n-=t*c,r-=e*c),(a=Math.sqrt(n*n+r*r))&&(n/=a,r/=a,c/=a),t*r<e*n&&(t=-t,e=-e,c=-c,o=-o),{translateX:i,translateY:s,rotate:Math.atan2(e,t)*fp,skewX:Math.atan(c)*fp,scaleX:o,scaleY:a}}function mp(t,e,n,r){function i(t){return t.length?t.pop()+" ":""}return function(s,o){var a=[],c=[];return s=t(s),o=t(o),function(t,r,i,s,o,a){if(t!==i||r!==s){var c=o.push("translate(",null,e,null,n);a.push({i:c-4,x:ap(t,i)},{i:c-2,x:ap(r,s)})}else(i||s)&&o.push("translate("+i+e+s+n)}(s.translateX,s.translateY,o.translateX,o.translateY,a,c),function(t,e,n,s){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),s.push({i:n.push(i(n)+"rotate(",null,r)-2,x:ap(t,e)})):e&&n.push(i(n)+"rotate("+e+r)}(s.rotate,o.rotate,a,c),function(t,e,n,s){t!==e?s.push({i:n.push(i(n)+"skewX(",null,r)-2,x:ap(t,e)}):e&&n.push(i(n)+"skewX("+e+r)}(s.skewX,o.skewX,a,c),function(t,e,n,r,s,o){if(t!==n||e!==r){var a=s.push(i(s)+"scale(",null,",",null,")");o.push({i:a-4,x:ap(t,n)},{i:a-2,x:ap(e,r)})}else 1===n&&1===r||s.push(i(s)+"scale("+n+","+r+")")}(s.scaleX,s.scaleY,o.scaleX,o.scaleY,a,c),s=o=null,function(t){for(var e,n=-1,r=c.length;++n<r;)a[(e=c[n]).i]=e.x(t);return a.join("")}}}var gp,yp,vp=mp((function(t){const e=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?dp:pp(e.a,e.b,e.c,e.d,e.e,e.f)}),"px, ","px)","deg)"),wp=mp((function(t){return null==t?dp:(hp||(hp=document.createElementNS("http://www.w3.org/2000/svg","g")),hp.setAttribute("transform",t),(t=hp.transform.baseVal.consolidate())?pp((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):dp)}),", ",")",")"),Ep=0,bp=0,Tp=0,_p=0,Ap=0,Sp=0,Ip="object"==typeof performance&&performance.now?performance:Date,xp="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Cp(){return Ap||(xp(Np),Ap=Ip.now()+Sp)}function Np(){Ap=0}function Dp(){this._call=this._time=this._next=null}function Rp(t,e,n){var r=new Dp;return r.restart(t,e,n),r}function Op(){Ap=(_p=Ip.now())+Sp,Ep=bp=0;try{!function(){Cp(),++Ep;for(var t,e=gp;e;)(t=Ap-e._time)>=0&&e._call.call(null,t),e=e._next;--Ep}()}finally{Ep=0,function(){var t,e,n=gp,r=1/0;for(;n;)n._call?(r>n._time&&(r=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:gp=e);yp=t,Lp(r)}(),Ap=0}}function kp(){var t=Ip.now(),e=t-_p;e>1e3&&(Sp-=e,_p=t)}function Lp(t){Ep||(bp&&(bp=clearTimeout(bp)),t-Ap>24?(t<1/0&&(bp=setTimeout(Op,t-Ip.now()-Sp)),Tp&&(Tp=clearInterval(Tp))):(Tp||(_p=Ip.now(),Tp=setInterval(kp,1e3)),Ep=1,xp(Op)))}function Pp(t,e,n){var r=new Dp;return e=null==e?0:+e,r.restart((n=>{r.stop(),t(n+e)}),e,n),r}Dp.prototype=Rp.prototype={constructor:Dp,restart:function(t,e,n){if("function"!=typeof t)throw new TypeError("callback is not a function");n=(null==n?Cp():+n)+(null==e?0:+e),this._next||yp===this||(yp?yp._next=this:gp=this,yp=this),this._call=t,this._time=n,Lp()},stop:function(){this._call&&(this._call=null,this._time=1/0,Lp())}};var Mp=cf("start","end","cancel","interrupt"),Vp=[];function Up(t,e,n,r,i,s){var o=t.__transition;if(o){if(n in o)return}else t.__transition={};!function(t,e,n){var r,i=t.__transition;function s(t){n.state=1,n.timer.restart(o,n.delay,n.time),n.delay<=t&&o(t-n.delay)}function o(s){var u,l,h,f;if(1!==n.state)return c();for(u in i)if((f=i[u]).name===n.name){if(3===f.state)return Pp(o);4===f.state?(f.state=6,f.timer.stop(),f.on.call("interrupt",t,t.__data__,f.index,f.group),delete i[u]):+u<e&&(f.state=6,f.timer.stop(),f.on.call("cancel",t,t.__data__,f.index,f.group),delete i[u])}if(Pp((function(){3===n.state&&(n.state=4,n.timer.restart(a,n.delay,n.time),a(s))})),n.state=2,n.on.call("start",t,t.__data__,n.index,n.group),2===n.state){for(n.state=3,r=new Array(h=n.tween.length),u=0,l=-1;u<h;++u)(f=n.tween[u].value.call(t,t.__data__,n.index,n.group))&&(r[++l]=f);r.length=l+1}}function a(e){for(var i=e<n.duration?n.ease.call(null,e/n.duration):(n.timer.restart(c),n.state=5,1),s=-1,o=r.length;++s<o;)r[s].call(t,i);5===n.state&&(n.on.call("end",t,t.__data__,n.index,n.group),c())}function c(){for(var r in n.state=6,n.timer.stop(),delete i[e],i)return;delete t.__transition}i[e]=n,n.timer=Rp(s,0,n.time)}(t,n,{name:e,index:r,group:i,on:Mp,tween:Vp,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:0})}function Fp(t,e){var n=$p(t,e);if(n.state>0)throw new Error("too late; already scheduled");return n}function Hp(t,e){var n=$p(t,e);if(n.state>3)throw new Error("too late; already running");return n}function $p(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function Bp(t,e){var n,r;return function(){var i=Hp(this,t),s=i.tween;if(s!==n)for(var o=0,a=(r=n=s).length;o<a;++o)if(r[o].name===e){(r=r.slice()).splice(o,1);break}i.tween=r}}function qp(t,e,n){var r,i;if("function"!=typeof n)throw new Error;return function(){var s=Hp(this,t),o=s.tween;if(o!==r){i=(r=o).slice();for(var a={name:e,value:n},c=0,u=i.length;c<u;++c)if(i[c].name===e){i[c]=a;break}c===u&&i.push(a)}s.tween=i}}function jp(t,e,n){var r=t._id;return t.each((function(){var t=Hp(this,r);(t.value||(t.value={}))[e]=n.apply(this,arguments)})),function(t){return $p(t,r).value[e]}}function zp(t,e){var n;return("number"==typeof e?ap:e instanceof jd?op:(n=jd(e))?(e=n,op):lp)(t,e)}function Kp(t){return function(){this.removeAttribute(t)}}function Wp(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Gp(t,e,n){var r,i,s=n+"";return function(){var o=this.getAttribute(t);return o===s?null:o===r?i:i=e(r=o,n)}}function Qp(t,e,n){var r,i,s=n+"";return function(){var o=this.getAttributeNS(t.space,t.local);return o===s?null:o===r?i:i=e(r=o,n)}}function Xp(t,e,n){var r,i,s;return function(){var o,a,c=n(this);if(null!=c)return(o=this.getAttribute(t))===(a=c+"")?null:o===r&&a===i?s:(i=a,s=e(r=o,c));this.removeAttribute(t)}}function Yp(t,e,n){var r,i,s;return function(){var o,a,c=n(this);if(null!=c)return(o=this.getAttributeNS(t.space,t.local))===(a=c+"")?null:o===r&&a===i?s:(i=a,s=e(r=o,c));this.removeAttributeNS(t.space,t.local)}}function Jp(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function Zp(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function tm(t,e){var n,r;function i(){var i=e.apply(this,arguments);return i!==r&&(n=(r=i)&&Zp(t,i)),n}return i._value=e,i}function em(t,e){var n,r;function i(){var i=e.apply(this,arguments);return i!==r&&(n=(r=i)&&Jp(t,i)),n}return i._value=e,i}function nm(t,e){return function(){Fp(this,t).delay=+e.apply(this,arguments)}}function rm(t,e){return e=+e,function(){Fp(this,t).delay=e}}function im(t,e){return function(){Hp(this,t).duration=+e.apply(this,arguments)}}function sm(t,e){return e=+e,function(){Hp(this,t).duration=e}}function om(t,e){if("function"!=typeof e)throw new Error;return function(){Hp(this,t).ease=e}}function am(t,e,n){var r,i,s=function(t){return(t+"").trim().split(/^|\s+/).every((function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||"start"===t}))}(e)?Fp:Hp;return function(){var o=s(this,t),a=o.on;a!==r&&(i=(r=a).copy()).on(e,n),o.on=i}}var cm=Sd.prototype.constructor;function um(t){return function(){this.style.removeProperty(t)}}function lm(t,e,n){return function(r){this.style.setProperty(t,e.call(this,r),n)}}function hm(t,e,n){var r,i;function s(){var s=e.apply(this,arguments);return s!==i&&(r=(i=s)&&lm(t,s,n)),r}return s._value=e,s}function fm(t){return function(e){this.textContent=t.call(this,e)}}function dm(t){var e,n;function r(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&fm(r)),e}return r._value=t,r}var pm=0;function mm(t,e,n,r){this._groups=t,this._parents=e,this._name=n,this._id=r}function gm(){return++pm}var ym=Sd.prototype;mm.prototype={constructor:mm,select:function(t){var e=this._name,n=this._id;"function"!=typeof t&&(t=Ef(t));for(var r=this._groups,i=r.length,s=new Array(i),o=0;o<i;++o)for(var a,c,u=r[o],l=u.length,h=s[o]=new Array(l),f=0;f<l;++f)(a=u[f])&&(c=t.call(a,a.__data__,f,u))&&("__data__"in a&&(c.__data__=a.__data__),h[f]=c,Up(h[f],e,n,f,h,$p(a,n)));return new mm(s,this._parents,e,n)},selectAll:function(t){var e=this._name,n=this._id;"function"!=typeof t&&(t=_f(t));for(var r=this._groups,i=r.length,s=[],o=[],a=0;a<i;++a)for(var c,u=r[a],l=u.length,h=0;h<l;++h)if(c=u[h]){for(var f,d=t.call(c,c.__data__,h,u),p=$p(c,n),m=0,g=d.length;m<g;++m)(f=d[m])&&Up(f,e,n,m,d,p);s.push(d),o.push(c)}return new mm(s,o,e,n)},filter:function(t){"function"!=typeof t&&(t=Af(t));for(var e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i)for(var s,o=e[i],a=o.length,c=r[i]=[],u=0;u<a;++u)(s=o[u])&&t.call(s,s.__data__,u,o)&&c.push(s);return new mm(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,r=e.length,i=n.length,s=Math.min(r,i),o=new Array(r),a=0;a<s;++a)for(var c,u=e[a],l=n[a],h=u.length,f=o[a]=new Array(h),d=0;d<h;++d)(c=u[d]||l[d])&&(f[d]=c);for(;a<r;++a)o[a]=e[a];return new mm(o,this._parents,this._name,this._id)},selection:function(){return new cm(this._groups,this._parents)},transition:function(){for(var t=this._name,e=this._id,n=gm(),r=this._groups,i=r.length,s=0;s<i;++s)for(var o,a=r[s],c=a.length,u=0;u<c;++u)if(o=a[u]){var l=$p(o,e);Up(o,t,n,u,a,{time:l.time+l.delay+l.duration,delay:0,duration:l.duration,ease:l.ease})}return new mm(r,this._parents,t,n)},call:ym.call,nodes:ym.nodes,node:ym.node,size:ym.size,empty:ym.empty,each:ym.each,on:function(t,e){var n=this._id;return arguments.length<2?$p(this.node(),n).on.on(t):this.each(am(n,t,e))},attr:function(t,e){var n=mf(t),r="transform"===n?wp:zp;return this.attrTween(t,"function"==typeof e?(n.local?Yp:Xp)(n,r,jp(this,"attr."+t,e)):null==e?(n.local?Wp:Kp)(n):(n.local?Qp:Gp)(n,r,e))},attrTween:function(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(null==e)return this.tween(n,null);if("function"!=typeof e)throw new Error;var r=mf(t);return this.tween(n,(r.local?tm:em)(r,e))},style:function(t,e,n){var r="transform"==(t+="")?vp:zp;return null==e?this.styleTween(t,function(t,e){var n,r,i;return function(){var s=Wf(this,t),o=(this.style.removeProperty(t),Wf(this,t));return s===o?null:s===n&&o===r?i:i=e(n=s,r=o)}}(t,r)).on("end.style."+t,um(t)):"function"==typeof e?this.styleTween(t,function(t,e,n){var r,i,s;return function(){var o=Wf(this,t),a=n(this),c=a+"";return null==a&&(this.style.removeProperty(t),c=a=Wf(this,t)),o===c?null:o===r&&c===i?s:(i=c,s=e(r=o,a))}}(t,r,jp(this,"style."+t,e))).each(function(t,e){var n,r,i,s,o="style."+e,a="end."+o;return function(){var c=Hp(this,t),u=c.on,l=null==c.value[o]?s||(s=um(e)):void 0;u===n&&i===l||(r=(n=u).copy()).on(a,i=l),c.on=r}}(this._id,t)):this.styleTween(t,function(t,e,n){var r,i,s=n+"";return function(){var o=Wf(this,t);return o===s?null:o===r?i:i=e(r=o,n)}}(t,r,e),n).on("end.style."+t,null)},styleTween:function(t,e,n){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==e)return this.tween(r,null);if("function"!=typeof e)throw new Error;return this.tween(r,hm(t,e,null==n?"":n))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var e=t(this);this.textContent=null==e?"":e}}(jp(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(null==t)return this.tween(e,null);if("function"!=typeof t)throw new Error;return this.tween(e,dm(t))},remove:function(){return this.on("end.remove",(t=this._id,function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}));var t},tween:function(t,e){var n=this._id;if(t+="",arguments.length<2){for(var r,i=$p(this.node(),n).tween,s=0,o=i.length;s<o;++s)if((r=i[s]).name===t)return r.value;return null}return this.each((null==e?Bp:qp)(n,t,e))},delay:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?nm:rm)(e,t)):$p(this.node(),e).delay},duration:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?im:sm)(e,t)):$p(this.node(),e).duration},ease:function(t){var e=this._id;return arguments.length?this.each(om(e,t)):$p(this.node(),e).ease},easeVarying:function(t){if("function"!=typeof t)throw new Error;return this.each(function(t,e){return function(){var n=e.apply(this,arguments);if("function"!=typeof n)throw new Error;Hp(this,t).ease=n}}(this._id,t))},end:function(){var t,e,n=this,r=n._id,i=n.size();return new Promise((function(s,o){var a={value:o},c={value:function(){0==--i&&s()}};n.each((function(){var n=Hp(this,r),i=n.on;i!==t&&((e=(t=i).copy())._.cancel.push(a),e._.interrupt.push(a),e._.end.push(c)),n.on=e})),0===i&&s()}))},[Symbol.iterator]:ym[Symbol.iterator]};var vm={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};function wm(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}Sd.prototype.interrupt=function(t){return this.each((function(){!function(t,e){var n,r,i,s=t.__transition,o=!0;if(s){for(i in e=null==e?null:e+"",s)(n=s[i]).name===e?(r=n.state>2&&n.state<5,n.state=6,n.timer.stop(),n.on.call(r?"interrupt":"cancel",t,t.__data__,n.index,n.group),delete s[i]):o=!1;o&&delete t.__transition}}(this,t)}))},Sd.prototype.transition=function(t){var e,n;t instanceof mm?(e=t._id,t=t._name):(e=gm(),(n=vm).time=Cp(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,s=0;s<i;++s)for(var o,a=r[s],c=a.length,u=0;u<c;++u)(o=a[u])&&Up(o,t,e,u,a,n||wm(o,e));return new mm(r,this._parents,t,e)};export{a as A,rt as B,yt as C,p as D,g as E,b as F,o as G,Zt as H,rl as I,M as J,Id as K,z as L,ol as R,mt as S,tf as T,of as W,Tl as Z,R as a,N as b,O as c,_ as d,A as e,T as f,k as g,P as h,pt as i,ut as j,I as k,x as l,lt as m,L as n,ht as o,at as p,ct as q,ot as r,f as s,S as t,it as u,st as v,ft as w,B as x,$ as y,H as z};
