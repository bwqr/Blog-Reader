Array.isArray||(Array.isArray=function(t){return"[object Array]"==Object.prototype.toString.call(t)}),Array.prototype.forEach||(Array.prototype.forEach=function(t,e){for(var n=this.length>>>0,r=0;r<n;r++)r in this&&t.call(e,this[r],r,this)}),Array.prototype.map||(Array.prototype.map=function(t){var e=this.length>>>0;if("function"!=typeof t)throw new TypeError;for(var n=new Array(e),r=arguments[1],o=0;o<e;o++)o in this&&(n[o]=t.call(r,this[o],o,this));return n}),Array.prototype.filter||(Array.prototype.filter=function(t){for(var e=[],n=arguments[1],r=0;r<this.length;r++)t.call(n,this[r])&&e.push(this[r]);return e}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t){var e=this.length;if(!e)return-1;var n=arguments[1]||0;if(n>=e)return-1;for(n<0&&(n+=e);n<e;n++)if(Object.prototype.hasOwnProperty.call(this,n)&&t===this[n])return n;return-1}),function(){if(!Element.prototype.addEventListener){var t=[],e=function(e,n){var r=this,o=function(t){t.target=t.srcElement,t.currentTarget=r,void 0!==n.handleEvent?n.handleEvent(t):n.call(r,t)};if("DOMContentLoaded"==e){var i=function(t){"complete"==document.readyState&&o(t)};if(document.attachEvent("onreadystatechange",i),t.push({object:this,type:e,listener:n,wrapper:i}),"complete"==document.readyState){var l=new Event;l.srcElement=window,i(l)}}else this.attachEvent("on"+e,o),t.push({object:this,type:e,listener:n,wrapper:o})},n=function(e,n){for(var r=0;r<t.length;){var o=t[r];if(o.object==this&&o.type==e&&o.listener==n){"DOMContentLoaded"==e?this.detachEvent("onreadystatechange",o.wrapper):this.detachEvent("on"+e,o.wrapper),t.splice(r,1);break}++r}};Element.prototype.addEventListener=e,Element.prototype.removeEventListener=n,HTMLDocument&&(HTMLDocument.prototype.addEventListener=e,HTMLDocument.prototype.removeEventListener=n),Window&&(Window.prototype.addEventListener=e,Window.prototype.removeEventListener=n)}}(),function(){"use strict";"firstElementChild"in document.documentElement||Object.defineProperty(Element.prototype,"firstElementChild",{get:function(){for(var t,e=this.children,n=0,r=e.length;n<r;++n)if(t=e[n],1===t.nodeType)return t;return null}})}(),function(){"use strict";"lastElementChild"in document.documentElement||Object.defineProperty(Element.prototype,"lastElementChild",{get:function(){for(var t,e=this.children,n=e.length-1;n>=0;--n)if(t=e[n],1===t.nodeType)return t;return null}})}(),function(){"use strict";"previousElementSibling"in document.documentElement||Object.defineProperty(Element.prototype,"previousElementSibling",{get:function(){for(var t=this.previousSibling;t&&1!==t.nodeType;)t=t.previousSibling;return t}})}(),function(){"use strict";"nextElementSibling"in document.documentElement||Object.defineProperty(Element.prototype,"nextElementSibling",{get:function(){for(var t=this.nextSibling;t&&1!==t.nodeType;)t=t.nextSibling;return t}})}(),function(){"use strict";window.getComputedStyle||(window.getComputedStyle=function(t){if(!t)return null;var e=t.currentStyle,n=t.getBoundingClientRect(),r=document.createElement("div"),o=r.style;for(var i in e)o[i]=e[i];return o.cssFloat=o.styleFloat,"auto"===o.width&&(o.width=n.right-n.left+"px"),"auto"===o.height&&(o.height=n.bottom-n.top+"px"),o})}();
//# sourceMappingURL=../sourcemaps/tiny-slider.helper.ie8.js.map
