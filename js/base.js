wfQuery.fn.extend({each:function(t){return this.forEach(function(n,i){t.call(n,i,n)}),this},cross_each:function(t,n){var t=wfQuery(t);return this.each(function(){var i=this;t.forEach(function(t){n(i,t)})})},_attr:function(t,n,i,e){var r=this;if("string"==typeof t&&"undefined"!=typeof n){var f={};return f[t]=n,this._attr(f,null,i,e)}if("object"==typeof t){for(var h in t)!function(t,n){r.each(function(){e.call(this,t,n)})}(h,t[h]);return this}return this.length?i.call(this[0],t):null},_get_set:function(t,n){return this.length?"undefined"==typeof n?this[0][t]:this.each(function(){this[t]=n}):void 0}});