var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,r=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,a=u||f||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return a.Date.now()};function v(e,t,n){var o,i,r,u,f,a,c=0,v=!1,b=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,f=setTimeout(O,t),v?g(e):u}function h(e){var n=e-a;return void 0===a||n>=t||n<0||b&&e-c>=r}function O(){var e=d();if(h(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-a);return b?s(n,r-(e-c)):n}(e))}function T(e){return f=void 0,m&&o?g(e):(o=i=void 0,u)}function w(){var e=d(),n=h(e);if(o=arguments,i=this,a=e,n){if(void 0===f)return j(a);if(b)return f=setTimeout(O,t),g(a)}return void 0===f&&(f=setTimeout(O,t)),u}return t=y(t)||0,p(n)&&(v=!!n.leading,r=(b="maxWait"in n)?l(y(n.maxWait)||0,t):r,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=i=f=void 0},w.flush=function(){return void 0===f?u:T(d())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var u="function"==typeof e.valueOf?e.valueOf():e;e=p(u)?u+"":u}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var f=o.test(e);return f||i.test(e)?r(e.slice(2),f?2:8):n.test(e)?NaN:+e}const b=document.querySelector(".feedback-form"),m=document.querySelector("input"),g=document.querySelector("textarea");b.addEventListener("input",(function(e){e.preventDefault();const t={email:m.value,message:g.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}));
//# sourceMappingURL=03-feedback.14810a27.js.map
