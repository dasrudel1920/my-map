class w{constructor(e){this.properties=e??[]}get(e){const r=this.properties.filter(n=>n.name===e).map(n=>n.value);if(r.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(r.length!==0)return r[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,r){const n=this.get(e);if(n!==void 0){if(r!=="json"&&typeof n!==r)throw new Error('Expected property "'+e+'" to have type "'+r+'"');return n}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,r){const n=this.get(e);if(n===void 0)throw new Error('Property "'+e+'" is missing');if(r!=="json"&&typeof n!==r)throw new Error('Expected property "'+e+'" to have type "'+r+'"');return n}getType(e){const r=this.properties.filter(n=>n.name===e).map(n=>n.type);if(r.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(r.length!==0)return r[0]}}const V="https://unpkg.com/@workadventure/scripting-api-extra@1.4.8/dist";class re{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new w(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function D(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(V+"/configuration.html"+e)}async function ne(t,e){const r=await WA.room.getTiledMap(),n=new Map;return X(r.layers,n,t,e),n}function X(t,e,r,n){for(const o of t)if(o.type==="objectgroup"){for(const s of o.objects)if(s.type==="variable"||s.class==="variable"){if(r&&o.name!==r||n&&!n.includes(s.name))continue;e.set(s.name,new re(s))}}else o.type==="group"&&X(o.layers,e,r,n)}let B;async function T(){return B===void 0&&(B=oe()),B}async function oe(){return se(await WA.room.getTiledMap())}function se(t){const e=new Map;return Y(t.layers,"",e),e}function Y(t,e,r){for(const n of t)n.type==="group"?Y(n.layers,e+n.name+"/",r):(n.name=e+n.name,r.set(n.name,n))}async function J(){const t=await T(),e=[];for(const r of t.values())if(r.type==="objectgroup")for(const n of r.objects)(n.type==="area"||n.class==="area")&&e.push(n);return e}function ae(t){let e=1/0,r=1/0,n=0,o=0;const s=t.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let a=0;a<t.height;a++)for(let i=0;i<t.width;i++)s[i+a*t.width]!==0&&(e=Math.min(e,i),o=Math.max(o,i),r=Math.min(r,a),n=Math.max(n,a));return{top:r,left:e,right:o+1,bottom:n+1}}function Q(t){let e=1/0,r=1/0,n=0,o=0;for(const s of t){const a=ae(s);a.left<e&&(e=a.left),a.top<r&&(r=a.top),a.right>o&&(o=a.right),a.bottom>n&&(n=a.bottom)}return{top:r,left:e,right:o,bottom:n}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var ie=Object.prototype.toString,S=Array.isArray||function(e){return ie.call(e)==="[object Array]"};function j(t){return typeof t=="function"}function ue(t){return S(t)?"array":typeof t}function R(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function O(t,e){return t!=null&&typeof t=="object"&&e in t}function ce(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var le=RegExp.prototype.test;function fe(t,e){return le.call(t,e)}var pe=/\S/;function de(t){return!fe(pe,t)}var ge={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function he(t){return String(t).replace(/[&<>"'`=\/]/g,function(r){return ge[r]})}var ye=/\s*/,me=/\s+/,U=/\s*=/,ve=/\s*\}/,Ae=/#|\^|\/|>|\{|&|=|!/;function be(t,e){if(!t)return[];var r=!1,n=[],o=[],s=[],a=!1,i=!1,u="",l=0;function p(){if(a&&!i)for(;s.length;)delete o[s.pop()];else s=[];a=!1,i=!1}var h,m,P;function L(A){if(typeof A=="string"&&(A=A.split(me,2)),!S(A)||A.length!==2)throw new Error("Invalid tags: "+A);h=new RegExp(R(A[0])+"\\s*"),m=new RegExp("\\s*"+R(A[1])),P=new RegExp("\\s*"+R("}"+A[1]))}L(e||g.tags);for(var f=new M(t),v,c,y,C,k,b;!f.eos();){if(v=f.pos,y=f.scanUntil(h),y)for(var _=0,te=y.length;_<te;++_)C=y.charAt(_),de(C)?(s.push(o.length),u+=C):(i=!0,r=!0,u+=" "),o.push(["text",C,v,v+1]),v+=1,C===`
`&&(p(),u="",l=0,r=!1);if(!f.scan(h))break;if(a=!0,c=f.scan(Ae)||"name",f.scan(ye),c==="="?(y=f.scanUntil(U),f.scan(U),f.scanUntil(m)):c==="{"?(y=f.scanUntil(P),f.scan(ve),f.scanUntil(m),c="&"):y=f.scanUntil(m),!f.scan(m))throw new Error("Unclosed tag at "+f.pos);if(c==">"?k=[c,y,v,f.pos,u,l,r]:k=[c,y,v,f.pos],l++,o.push(k),c==="#"||c==="^")n.push(k);else if(c==="/"){if(b=n.pop(),!b)throw new Error('Unopened section "'+y+'" at '+v);if(b[1]!==y)throw new Error('Unclosed section "'+b[1]+'" at '+v)}else c==="name"||c==="{"||c==="&"?i=!0:c==="="&&L(y)}if(p(),b=n.pop(),b)throw new Error('Unclosed section "'+b[1]+'" at '+f.pos);return We(we(o))}function we(t){for(var e=[],r,n,o=0,s=t.length;o<s;++o)r=t[o],r&&(r[0]==="text"&&n&&n[0]==="text"?(n[1]+=r[1],n[3]=r[3]):(e.push(r),n=r));return e}function We(t){for(var e=[],r=e,n=[],o,s,a=0,i=t.length;a<i;++a)switch(o=t[a],o[0]){case"#":case"^":r.push(o),n.push(o),r=o[4]=[];break;case"/":s=n.pop(),s[5]=o[2],r=n.length>0?n[n.length-1][4]:e;break;default:r.push(o)}return e}function M(t){this.string=t,this.tail=t,this.pos=0}M.prototype.eos=function(){return this.tail===""};M.prototype.scan=function(e){var r=this.tail.match(e);if(!r||r.index!==0)return"";var n=r[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n};M.prototype.scanUntil=function(e){var r=this.tail.search(e),n;switch(r){case-1:n=this.tail,this.tail="";break;case 0:n="";break;default:n=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=n.length,n};function W(t,e){this.view=t,this.cache={".":this.view},this.parent=e}W.prototype.push=function(e){return new W(e,this)};W.prototype.lookup=function(e){var r=this.cache,n;if(r.hasOwnProperty(e))n=r[e];else{for(var o=this,s,a,i,u=!1;o;){if(e.indexOf(".")>0)for(s=o.view,a=e.split("."),i=0;s!=null&&i<a.length;)i===a.length-1&&(u=O(s,a[i])||ce(s,a[i])),s=s[a[i++]];else s=o.view[e],u=O(o.view,e);if(u){n=s;break}o=o.parent}r[e]=n}return j(n)&&(n=n.call(this.view)),n};function d(){this.templateCache={_cache:{},set:function(e,r){this._cache[e]=r},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}d.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};d.prototype.parse=function(e,r){var n=this.templateCache,o=e+":"+(r||g.tags).join(":"),s=typeof n<"u",a=s?n.get(o):void 0;return a==null&&(a=be(e,r),s&&n.set(o,a)),a};d.prototype.render=function(e,r,n,o){var s=this.getConfigTags(o),a=this.parse(e,s),i=r instanceof W?r:new W(r,void 0);return this.renderTokens(a,i,n,e,o)};d.prototype.renderTokens=function(e,r,n,o,s){for(var a="",i,u,l,p=0,h=e.length;p<h;++p)l=void 0,i=e[p],u=i[0],u==="#"?l=this.renderSection(i,r,n,o,s):u==="^"?l=this.renderInverted(i,r,n,o,s):u===">"?l=this.renderPartial(i,r,n,s):u==="&"?l=this.unescapedValue(i,r):u==="name"?l=this.escapedValue(i,r,s):u==="text"&&(l=this.rawValue(i)),l!==void 0&&(a+=l);return a};d.prototype.renderSection=function(e,r,n,o,s){var a=this,i="",u=r.lookup(e[1]);function l(m){return a.render(m,r,n,s)}if(u){if(S(u))for(var p=0,h=u.length;p<h;++p)i+=this.renderTokens(e[4],r.push(u[p]),n,o,s);else if(typeof u=="object"||typeof u=="string"||typeof u=="number")i+=this.renderTokens(e[4],r.push(u),n,o,s);else if(j(u)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");u=u.call(r.view,o.slice(e[3],e[5]),l),u!=null&&(i+=u)}else i+=this.renderTokens(e[4],r,n,o,s);return i}};d.prototype.renderInverted=function(e,r,n,o,s){var a=r.lookup(e[1]);if(!a||S(a)&&a.length===0)return this.renderTokens(e[4],r,n,o,s)};d.prototype.indentPartial=function(e,r,n){for(var o=r.replace(/[^ \t]/g,""),s=e.split(`
`),a=0;a<s.length;a++)s[a].length&&(a>0||!n)&&(s[a]=o+s[a]);return s.join(`
`)};d.prototype.renderPartial=function(e,r,n,o){if(n){var s=this.getConfigTags(o),a=j(n)?n(e[1]):n[e[1]];if(a!=null){var i=e[6],u=e[5],l=e[4],p=a;u==0&&l&&(p=this.indentPartial(a,l,i));var h=this.parse(p,s);return this.renderTokens(h,r,n,p,o)}}};d.prototype.unescapedValue=function(e,r){var n=r.lookup(e[1]);if(n!=null)return n};d.prototype.escapedValue=function(e,r,n){var o=this.getConfigEscape(n)||g.escape,s=r.lookup(e[1]);if(s!=null)return typeof s=="number"&&o===g.escape?String(s):o(s)};d.prototype.rawValue=function(e){return e[1]};d.prototype.getConfigTags=function(e){return S(e)?e:e&&typeof e=="object"?e.tags:void 0};d.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!S(e))return e.escape};var g={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){E.templateCache=t},get templateCache(){return E.templateCache}},E=new d;g.clearCache=function(){return E.clearCache()};g.parse=function(e,r){return E.parse(e,r)};g.render=function(e,r,n,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+ue(e)+'" was given as the first argument for mustache#render(template, view, partials)');return E.render(e,r,n,o)};g.escape=he;g.Scanner=M;g.Context=W;g.Writer=d;class F{constructor(e,r){this.template=e,this.state=r,this.ast=g.parse(e)}getValue(){return this.value===void 0&&(this.value=g.render(this.template,this.state)),this.value}onChange(e){const r=[];for(const n of this.getUsedVariables().values())r.push(this.state.onVariableChange(n).subscribe(()=>{const o=g.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const n of r)n.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,r){for(const n of e){const o=n[0],s=n[1],a=n[4];["name","&","#","^"].includes(o)&&r.add(s),a!==void 0&&typeof a!="string"&&this.recursiveGetUsedVariables(a,r)}}}async function Se(){var t;const e=await J();for(const r of e){const n=(t=r.properties)!==null&&t!==void 0?t:[];for(const o of n){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const s=new F(o.value,WA.state);if(s.isPureString())continue;const a=s.getValue();await N(r.name,o.name,a),s.onChange(async i=>{await N(r.name,o.name,i)})}}}async function Le(){var t;const e=await T();for(const[r,n]of e.entries())if(n.type!=="objectgroup"){const o=(t=n.properties)!==null&&t!==void 0?t:[];for(const s of o){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const a=new F(s.value,WA.state);if(a.isPureString())continue;const i=a.getValue();q(r,s.name,i),a.onChange(u=>{q(r,s.name,u)})}}}async function N(t,e,r){console.log(t),(await WA.room.area.get(t)).setProperty(e,r)}function q(t,e,r){WA.room.setProperty(t,e,r),e==="visible"&&(r?WA.room.showLayer(t):WA.room.hideLayer(t))}let x,G=0,I=0;function K(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const r of e.split(`
`))WA.room.showLayer(r);e=t.properties.mustGetString("closeLayer");for(const r of e.split(`
`))WA.room.hideLayer(r)}else{let e=t.properties.mustGetString("openLayer");for(const r of e.split(`
`))WA.room.hideLayer(r);e=t.properties.mustGetString("closeLayer");for(const r of e.split(`
`))WA.room.showLayer(r)}}function Ce(t){const e=t.properties.getString("openSound"),r=t.properties.getNumber("soundRadius");let n=1;if(r){const o=ee(t.properties.mustGetString("openLayer").split(`
`));if(o>r)return;n=1-o/r}e&&WA.sound.loadSound(e).play({volume:n})}function Ee(t){const e=t.properties.getString("closeSound"),r=t.properties.getNumber("soundRadius");let n=1;if(r){const o=ee(t.properties.mustGetString("closeLayer").split(`
`));if(o>r)return;n=1-o/r}e&&WA.sound.loadSound(e).play({volume:n})}function Z(t){return t.map(e=>x.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function ee(t){const e=Z(t),r=Q(e),n=((r.right-r.left)/2+r.left)*32,o=((r.bottom-r.top)/2+r.top)*32;return Math.sqrt(Math.pow(G-n,2)+Math.pow(I-o,2))}function Te(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?Ce(t):Ee(t),K(t)}),K(t)}function $(t,e,r,n){const o=t.name;let s,a,i=!1;const u=r.getString("tag");let l=!0;u&&!WA.player.tags.includes(u)&&(l=!1);const p=!!u;function h(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=r.getString("closeTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,m()}})}function m(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=r.getString("openTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,h()}})}function P(){let c;if(t.type==="tilelayer")c=Q(Z(e.properties.mustGetString("closeLayer").split(`
`)));else{if(t.x===void 0||t.y===void 0||t.width===void 0||t.height===void 0)throw new Error(`Doorstep zone "${t.name}" is missing x, y, width or height`);c={top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}a=WA.room.website.create({name:"doorKeypad"+o,url:n+"/keypad.html#"+encodeURIComponent(o),position:{x:c.right*32,y:c.top*32,width:32*3,height:32*4},allowApi:!0})}function L(){a&&(WA.room.website.delete(a.name),a=void 0)}function f(){if(i=!0,r.getBoolean("autoOpen")&&l){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(p&&!l||!p)&&(r.getString("code")||r.getString("codeVariable"))){P();return}l&&(WA.state[e.name]?h():m())}function v(){i=!1,r.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),L()}t.type==="tilelayer"?(WA.room.onEnterLayer(o).subscribe(f),WA.room.onLeaveLayer(o).subscribe(v)):(WA.room.area.onEnter(o).subscribe(f),WA.room.area.onLeave(o).subscribe(v)),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!r.getBoolean("autoClose")&&WA.state[e.name]===!0&&h(),a&&WA.state[e.name]===!0&&L(),!r.getBoolean("autoOpen")&&WA.state[e.name]===!1&&m())})}function Me(t){const e=t.properties.mustGetString("bellSound"),r=t.properties.getNumber("soundRadius");let n=1;if(r){const o=Math.sqrt(Math.pow(t.x-G,2)+Math.pow(t.y-I,2));if(o>r)return;n=1-o/r}WA.sound.loadSound(e).play({volume:n})}function Pe(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&Me(t)})}function z(t,e,r){let n;const o=e.getString("bellPopup");if(r.type==="tilelayer"){const s=r.name;WA.room.onEnterLayer(s).subscribe(()=>{var a;o?n=WA.ui.openPopup(o,"",[{label:(a=e.getString("bellButtonText"))!==null&&a!==void 0?a:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(s).subscribe(()=>{n&&(n.close(),n=void 0)})}else{const s=r.name;WA.room.area.onEnter(s).subscribe(()=>{var a;o?n=WA.ui.openPopup(o,"",[{label:(a=e.getString("bellButtonText"))!==null&&a!==void 0?a:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.area.onLeave(s).subscribe(()=>{n&&(n.close(),n=void 0)})}}async function ke(t){t=t??V;const e=await ne();x=await T();for(const r of e.values())r.properties.get("door")&&Te(r),r.properties.get("bell")&&Pe(r);for(const r of x.values()){const n=new w(r.properties),o=n.getString("doorVariable");if(o&&r.type==="tilelayer"){const a=e.get(o);if(a===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+r.name+'"');$(r,a,n,t)}const s=n.getString("bellVariable");s&&r.type==="tilelayer"&&z(s,n,r)}for(const r of await J()){const n=new w(r.properties),o=n.getString("doorVariable");if(o){const a=e.get(o);if(a===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of object "'+r.name+'"');$(r,a,n,t)}const s=n.getString("bellVariable");s&&z(s,n,r)}WA.player.onPlayerMove(r=>{G=r.x,I=r.y})}function _e(t,e){const r=t.getString("bindVariable");if(r){const n=t.get("enterValue"),o=t.get("leaveValue"),s=t.getString("triggerMessage"),a=t.getString("tag");Be(r,e,n,o,s,a)}}function Be(t,e,r,n,o,s){s&&!WA.player.tags.includes(s)||(r!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[t]=r)}),n!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=n}))}async function Re(){const t=await T();for(const e of t.values()){const r=new w(e.properties);_e(r,e.name)}}let H;async function xe(t){const e=await WA.room.getTiledMap();t=t??V,H=await T();const r=e.layers.find(n=>n.name==="configuration");if(r){const o=new w(r.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const s of H.values()){const a=new w(s.properties),i=a.getString("openConfig");i&&s.type==="tilelayer"&&Ve(i.split(","),s.name,a)}}}function Ve(t,e,r){let n;const o=r.getString("openConfigAdminTag");let s=!0;o&&!WA.player.tags.includes(o)&&(s=!1);function a(){var u;n&&n.remove(),n=WA.ui.displayActionMessage({message:(u=r.getString("openConfigTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE or touch here to configure",callback:()=>D(t)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const u=r.getString("openConfigTrigger");s&&(u&&u==="onaction"?a():D(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{n&&n.remove(),i()})}function je(){return WA.onInit().then(()=>{ke().catch(t=>console.error(t)),Re().catch(t=>console.error(t)),xe().catch(t=>console.error(t)),Le().catch(t=>console.error(t)),Se().catch(t=>console.error(t))}).catch(t=>console.error(t))}console.log("Script started successfully");WA.onInit().then(async()=>{console.log("Scripting API ready"),je().then(()=>{console.log("Scripting API Extra ready")}).catch(e=>console.error(e)),await WA.players.configureTracking({players:!0,movement:!1}),WA.state.onVariableChange("doorState").subscribe(e=>{Ge(e)});let t;WA.room.onEnterLayer("doorsteps/inside_doorstep").subscribe(()=>{t=WA.ui.displayActionMessage({message:"Drücke 'Leertase' zum hissen der Flagge.",callback:()=>{WA.state.doorState===0?(WA.state.doorState=2,setTimeout(()=>{WA.state.doorState=1},2500)):WA.state.doorState===1&&(WA.state.doorState=3,setTimeout(()=>{WA.state.doorState=0},2500))}})}),WA.room.onLeaveLayer("doorsteps/inside_doorstep").subscribe(()=>{t!==void 0&&t.remove()})}).catch(t=>console.error(t));function Ge(t){t===0?(WA.room.showLayer("door/door_closed"),WA.room.hideLayer("door/door_opened"),WA.room.hideLayer("door/flag_up"),WA.room.hideLayer("door/flag_down")):t===1?(WA.room.hideLayer("door/door_closed"),WA.room.showLayer("door/door_opened"),WA.room.hideLayer("door/flag_up"),WA.room.hideLayer("door/flag_down")):t===2?(WA.room.hideLayer("door/door_closed"),WA.room.hideLayer("door/door_opened"),WA.room.showLayer("door/flag_up"),WA.room.hideLayer("door/flag_down")):t===3&&(WA.room.hideLayer("door/door_closed"),WA.room.hideLayer("door/door_opened"),WA.room.hideLayer("door/flag_up"),WA.room.showLayer("door/flag_down"))}
