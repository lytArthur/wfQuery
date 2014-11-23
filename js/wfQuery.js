!function(t,n){"function"==typeof define&&define.amd?define(n):(t.wfQuery=n(),window.$=window.$||t.wfQuery)}(this,function(){var t=window.document,n=function(t,e){return new n.fn.init(t,e)};n.fn=n.prototype=new Array,n.fn.constructor=n;var e=n.fn.init=function(i,r){r=r||t;var o=Object.prototype.toString.call(i);if(!i)return this;if(i.constructor===n)return i;if("[object String]"===o){var c=document.createElement("WF");return/^\s*[\<]/.test(i)?(c.innerHTML=i,new e(c.children)):new e(r.querySelectorAll(i))}if(/\[object\sHTML/.test(o)&&i.nodeType||"[object global]"===o)return this.length=1,this[0]=i,this;if("[object HTMLCollection]"===o||"[object NodeList]"===o||"[object Array]"===o){this.length=i.length;for(var u=0;u<i.length;u++)this[u]=i[u];return this}n.isFunction(i)&&i(n)};return e.prototype=n.fn,n.extend=n.fn.extend=function(){var t,e,i,r,o,c,u=arguments[0]||{},s=1,f=arguments.length,a=!1;for("boolean"==typeof u&&(a=u,u=arguments[s]||{},s++),"object"==typeof u||n.isFunction(u)||(u={}),s===f&&(u=this,s--);f>s;s++)if(null!=(t=arguments[s]))for(e in t)i=u[e],r=t[e],u!==r&&(a&&r&&(n.isPlainObject(r)||(o=n.isArray(r)))?(o?(o=!1,c=i&&n.isArray(i)?i:[]):c=i&&n.isPlainObject(i)?i:{},u[e]=n.extend(a,c,r)):void 0!==r&&(u[e]=r));return u},n.extend({isFunction:function(t){return"function"==typeof t},isArray:Array.isArray,isPlainObject:function(t){return"object"!=typeof t||t.nodeType||t===t.window?!1:t.constructor&&!Object.prototype.call(t.constructor.prototype,"isPrototypeOf")?!1:!0},cross_each:function(t,n,e){return t.map(function(t){n.forEach(function(n){e(t,n)})})}}),n.fn.extend({each:function(t){return this.forEach(t),this},cross_each:function(t,e){var t=n(t);return this.each(function(n){t.forEach(function(t){e(n,t)})})}}),n.fn.extend({first:function(){return n(this[0])},eq:function(t){return n(this[t])},last:function(){return n(this[this.length-1])},next:function(){return n(this[0]?this[0].nextElementSibling:null)},prev:function(){return n(this[0]?this[0].previousElementSibling:null)},parent:function(){return n(this[0]?this[0].parentNode:null)},parents:function(t,e){var i=[],r=this[0];for(e=e||document;r&&(r=r.parentNode)&&((t&&r.matches&&r.matches(t)||!t)&&i.push(r),r!==e););return n(i)},filter:function(t){var e=[];return this.each(function(n){n.matches&&n.matches(t)&&e.push(n)}),n(e)},find:function(t){var e=[];return this.each(function(i){e=[].concat.apply(e,n(i.querySelectorAll(t)))}),n(e)},has:function(t){return t=n(t),t[0]&&!!this.filter(function(n){return n===t[0]}).length},children:function(t){var e=[];return this.each(function(t){e=[].concat.apply(e,n(t.children))}),n(e.filter(function(n){return!t||n.matches(t)}))}}),n.fn.extend({_appender:function(){return this.length&&this[0].parentNode&&"WF"===this[0].parentNode.tagName?this.clone():this},append:function(t){return this.cross_each(n(t)._appender(),function(t,n){t.appendChild(n)})},prepend:function(t){return this.cross_each(n(t)._appender(),function(t,n){t.insertBefore(n,t.firstChild)})},before:function(t){return this.cross_each(n(t)._appender(),function(t,n){t.parentNode.insertBefore(n,t)})},after:function(t){return this.cross_each(n(t)._appender(),function(t,n){t.parentNode.insertBefore(n,t.nextSibling)})},empty:function(){return this.each(function(t){t.textContent=""})},clone:function(){return n(this.map(function(t){return t.cloneNode?t.cloneNode(!0):t}))}}),n.fn.extend({text:function(t){return"undefined"!=typeof t?this.each(function(n){n.textContent=t}):this[0].textContent},html:function(t){return"undefined"!=typeof t?this.each(function(n){n.innerHTML=t}):this[0].innerHTML},val:function(t){return this.length?"undefined"==typeof t?this[0].value:this.each(function(n){n.value=t}):null},attr:function(t,n){var e=this;if(t&&this.length){if("string"==typeof t&&"undefined"!=typeof n){var i={};return i[t]=n,this.attr(i)}if("object"==typeof t){for(var r in t)!function(t,n){e.each(function(e){e.setAttribute(t,n)})}(r,t[r]);return this}return this[0].getAttribute(t)}return null},addClass:function(t){return this.each(function(n){n.classList.add(t)})},removeClass:function(t){return this.each(function(n){n.classList.remove(t)})},toggleClass:function(t){return this.each(function(n){n.classList.contains(t)?n.classList.remove(t):n.classList.add(t)})}}),n.fn.extend({css:function(t,n){var e=this;if(t&&this.length){if("string"==typeof t&&"undefined"!=typeof n){var i={};return i[t]=n,this.css(i)}if("object"==typeof t){for(var r in t)!function(t,n){/width|height|left|right|top|bottom|size|radius/i.test(t)&&/^[\d\.]+$/.test(n)&&(n+="px"),e.each(function(e){e.style[t]=n})}(r,t[r]);return this}return window.getComputedStyle(this[0])[t]}return e},show:function(){return this.css({display:""})},hide:function(){return this.css({display:"none"})},toggle:function(){return this.each(function(t){t.style.display="none"===window.getComputedStyle(t).display?"":"none"})}}),n.fn.extend({on:function(t,e,i,r){var o=(t+"").match(/\w+/g)||[];return o.length?("function"==typeof e&&(i=e,e=null),this.cross_each(o,function(t,o){t["wf_"+o]=t["wf_"+o]||[],t["wf_"+o].push(i),t.addEventListener(o,e?function(t){var o=n(t.target),c=o.parents(e);o.filter(e).length?i.call(o,t):c.length?i.call(c,t):"function"==typeof r&&r.call(this,t)}:i,!1)})):this},off:function(t){return this.each(function(n){delete n["wf_"+t],n.removeEventListener(t)})},trigger:function(t){var n=arguments;return this.each(function(e){var i=e["wf_"+t]||[];e[t]?e[t]():i.forEach(function(t){t.apply(e,n)})})}}),n});