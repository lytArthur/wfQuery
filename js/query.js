var p=document.createElement("p"),w3cMatches=["matchesSelector","webkitMatchesSelector","msMatchesSelector","mozMatchesSelector","oMatchesSelector"].filter(function(t){return p[t]})[0];wfQuery.fn.extend({first:function(){return wfQuery(this[0])},eq:function(t){return wfQuery(this[(this.length+t)%this.length])},index:function(){return this.parent().children().indexOf(this[0])},last:function(){return wfQuery(this[this.length-1])},next:function(){return wfQuery(this[0]?this[0].nextElementSibling:null)},prev:function(){return wfQuery(this[0]?this[0].previousElementSibling:null)},parent:function(){return wfQuery(this[0]?this[0].parentNode:null)},parents:function(t,e){var n=[],r=this[0];for(e=e||document;r&&r!=e&&(r=r.parentNode);)n.push(r);return wfQuery(n).filter(t)},filter:function(t){var e=[];return t?("function"==typeof t?e=[].filter.call(this,t):this.each(function(){var n=this;n[w3cMatches]&&n[w3cMatches](t)&&e.push(n)}),wfQuery(e)):this},not:function(t){var e=this;return wfQuery([].filter.call(e,function(e){var n;try{n=e[w3cMatches]&&e[w3cMatches](t)}catch(r){n=e===wfQuery(t)[0]}return!n}))},siblings:function(t){return this.parent().children(t).not(this)},nextAll:function(t){var e=[];return this.each(function(){var t=$(this).parent().children(),n=t.indexOf(this);e=e.concat(t.slice(n+1))}),wfQuery(e).filter(t)},find:function(t){var e=[];return this.each(function(){e=[].concat.apply(e,wfQuery(this.querySelectorAll(t)))}),wfQuery(e)},children:function(t){var e=[];return this.each(function(){var t=this,n=t.children;n||(n=[].filter.call(t.childNodes,function(t){return!!t.tagName})),e=[].concat.apply(e,wfQuery(n))}),wfQuery(e).filter(t)}});