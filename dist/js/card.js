!function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(6)},function(e,t,n){Nova.booting(function(e,t){e.component("nova-countdown",n(2))})},function(e,t,n){var i=n(3)(n(4),n(5),!1,null,null,null);e.exports=i.exports},function(e,t){e.exports=function(e,t,n,i,s,o){var r,a=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(r=e,a=e.default);var u,d="function"==typeof a?a.options:a;if(t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),s&&(d._scopeId=s),o?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},d._ssrRegister=u):i&&(u=i),u){var m=d.functional,f=m?d.render:d.beforeCreate;m?(d._injectStyles=u,d.render=function(e,t){return u.call(t),f(e,t)}):d.beforeCreate=f?[].concat(f,u):[u]}return{esModule:r,exports:a,options:d}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["card"],data:function(){return{timeLeft:"00:00:00",remainingTime:0,seconds:0,minutes:0,hours:0,days:0}},created:function(){this.remainingTime=this.card.to-(new Date).getTime()},mounted:function(){var e=this;this.remainingTime>0&&window.requestAnimationFrame(this.showTime),window.addEventListener("focus",function(){e.remainingTime<1e3&&(e.timeLeft="00:00:00:00",window.cancelAnimationFrame(e.showTime))})},methods:{pad:function(e){return("0"+Math.floor(e)).slice(-2)},showTime:function(){this.remainingTime=this.card.to-(new Date).getTime(),this.seconds=this.pad(this.remainingTime%6e4/1e3),this.minutes=this.pad(this.remainingTime%36e5/6e4),this.hours=this.pad(this.remainingTime%864e5/36e5),this.days=this.pad(this.remainingTime/864e5),this.remainingTime>=1e3?(this.timeLeft=this.days+":"+this.hours+":"+this.minutes+":"+this.seconds,window.requestAnimationFrame(this.showTime)):(window.cancelAnimationFrame(this.showTime),this.timeLeft="00:00:00:00")}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("card",{staticClass:"px-6 py-4"},[n("div",{staticClass:"flex mb-4"},[n("h3",{staticClass:"mr-3 text-base text-80 font-bold"},[e._v(e._s(e.card.name||"Countdown"))])]),e._v(" "),n("p",{staticClass:"flex items-center text-4xl mb-4"},[e._v(e._s(e.timeLeft))]),e._v(" "),n("div",{staticClass:"flex items-center"},[e.card.label?n("p",{staticClass:"text-80 font-bold"},[n("span",[e._v(e._s(e.card.label))])]):e._e()])])},staticRenderFns:[]}},function(e,t){}]);