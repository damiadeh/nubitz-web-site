_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"0Yp8":function(e,t,i){e.exports={container:"sectionSix_container__1v2tB",wrapper:"sectionSix_wrapper__dmc0f",wrapper_inverted:"sectionSix_wrapper_inverted__iD9Ju",portfolio:"sectionSix_portfolio__7U5jh",portfolio_add:"sectionSix_portfolio_add__2QnsK",title:"sectionSix_title__2c2Z7",image:"sectionSix_image__2RQz_",tagContainer:"sectionSix_tagContainer__3r_t8",tagline:"sectionSix_tagline__1pUjM",bubble:"sectionSix_bubble__26fqV"}},"6Cl6":function(e,t,i){},"7pvy":function(e,t,i){e.exports={card:"littleCards_card__2udVm",card_title:"littleCards_card_title__1kXnP",card_text:"littleCards_card_text__3pukq"}},"9a8T":function(e,t,i){e.exports=function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var i={};return t.m=e,t.c=i,t.p="dist/",t(0)}([function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},a=(n(i(1)),i(6)),s=n(a),c=n(i(7)),r=n(i(8)),l=n(i(9)),d=n(i(10)),u=n(i(11)),m=n(i(14)),b=[],h=!1,f={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},p=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(h=!0),h)return b=(0,u.default)(b,f),(0,d.default)(b,f.once),b},v=function(){b=(0,m.default)(),p()},j=function(){b.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},g=function(e){return!0===e||"mobile"===e&&l.default.mobile()||"phone"===e&&l.default.phone()||"tablet"===e&&l.default.tablet()||"function"==typeof e&&!0===e()},_=function(e){f=o(f,e),b=(0,m.default)();var t=document.all&&!window.atob;return g(f.disable)||t?j():(f.disableMutationObserver||r.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),f.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",f.easing),document.querySelector("body").setAttribute("data-aos-duration",f.duration),document.querySelector("body").setAttribute("data-aos-delay",f.delay),"DOMContentLoaded"===f.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?p(!0):"load"===f.startEvent?window.addEventListener(f.startEvent,(function(){p(!0)})):document.addEventListener(f.startEvent,(function(){p(!0)})),window.addEventListener("resize",(0,c.default)(p,f.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(p,f.debounceDelay,!0)),window.addEventListener("scroll",(0,s.default)((function(){(0,d.default)(b,f.once)}),f.throttleDelay)),f.disableMutationObserver||r.default.ready("[data-aos]",v),b)};e.exports={init:_,refresh:p,refreshHard:v}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function i(e,t,i){function n(t){var i=f,n=p;return f=p=void 0,w=t,j=e.apply(n,i)}function a(e){return w=e,g=setTimeout(d,t),N?n(e):j}function s(e){var i=t-(e-_);return k?O(i,v-(e-w)):i}function r(e){var i=e-_;return void 0===_||i>=t||i<0||k&&e-w>=v}function d(){var e=y();return r(e)?u(e):void(g=setTimeout(d,s(e)))}function u(e){return g=void 0,C&&f?n(e):(f=p=void 0,j)}function m(){void 0!==g&&clearTimeout(g),w=0,f=_=p=g=void 0}function b(){return void 0===g?j:u(y())}function h(){var e=y(),i=r(e);if(f=arguments,p=this,_=e,i){if(void 0===g)return a(_);if(k)return g=setTimeout(d,t),n(_)}return void 0===g&&(g=setTimeout(d,t)),j}var f,p,v,j,g,_,w=0,N=!1,k=!1,C=!0;if("function"!=typeof e)throw new TypeError(l);return t=c(t)||0,o(i)&&(N=!!i.leading,v=(k="maxWait"in i)?x(c(i.maxWait)||0,t):v,C="trailing"in i?!!i.trailing:C),h.cancel=m,h.flush=b,h}function n(e,t,n){var a=!0,s=!0;if("function"!=typeof e)throw new TypeError(l);return o(n)&&(a="leading"in n?!!n.leading:a,s="trailing"in n?!!n.trailing:s),i(e,t,{leading:a,maxWait:t,trailing:s})}function o(e){var t="undefined"==typeof e?"undefined":r(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==("undefined"==typeof e?"undefined":r(e))}function s(e){return"symbol"==("undefined"==typeof e?"undefined":r(e))||a(e)&&_.call(e)==u}function c(e){if("number"==typeof e)return e;if(s(e))return d;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(m,"");var i=h.test(e);return i||f.test(e)?p(e.slice(2),i?2:8):b.test(e)?d:+e}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l="Expected a function",d=NaN,u="[object Symbol]",m=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,f=/^0o[0-7]+$/i,p=parseInt,v="object"==("undefined"==typeof t?"undefined":r(t))&&t&&t.Object===Object&&t,j="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,g=v||j||Function("return this")(),_=Object.prototype.toString,x=Math.max,O=Math.min,y=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function i(e,t,i){function o(t){var i=f,n=p;return f=p=void 0,w=t,j=e.apply(n,i)}function a(e){return w=e,g=setTimeout(d,t),N?o(e):j}function c(e){var i=t-(e-y);return k?x(i,v-(e-w)):i}function l(e){var i=e-y;return void 0===y||i>=t||i<0||k&&e-w>=v}function d(){var e=O();return l(e)?u(e):void(g=setTimeout(d,c(e)))}function u(e){return g=void 0,C&&f?o(e):(f=p=void 0,j)}function m(){void 0!==g&&clearTimeout(g),w=0,f=y=p=g=void 0}function b(){return void 0===g?j:u(O())}function h(){var e=O(),i=l(e);if(f=arguments,p=this,y=e,i){if(void 0===g)return a(y);if(k)return g=setTimeout(d,t),o(y)}return void 0===g&&(g=setTimeout(d,t)),j}var f,p,v,j,g,y,w=0,N=!1,k=!1,C=!0;if("function"!=typeof e)throw new TypeError(r);return t=s(t)||0,n(i)&&(N=!!i.leading,v=(k="maxWait"in i)?_(s(i.maxWait)||0,t):v,C="trailing"in i?!!i.trailing:C),h.cancel=m,h.flush=b,h}function n(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function o(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||o(e)&&g.call(e)==d}function s(e){if("number"==typeof e)return e;if(a(e))return l;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var i=b.test(e);return i||h.test(e)?f(e.slice(2),i?2:8):m.test(e)?l:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r="Expected a function",l=NaN,d="[object Symbol]",u=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,h=/^0o[0-7]+$/i,f=parseInt,p="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,v="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,j=p||v||Function("return this")(),g=Object.prototype.toString,_=Math.max,x=Math.min,O=function(){return j.Date.now()};e.exports=i}).call(t,function(){return this}())},function(e,t){"use strict";function i(e){var t=void 0,n=void 0;for(t=0;t<e.length;t+=1){if((n=e[t]).dataset&&n.dataset.aos)return!0;if(n.children&&i(n.children))return!0}return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!n()}function a(e,t){var i=window.document,o=new(n())(s);c=t,o.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function s(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(i(t.concat(n)))return c()}))}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){};t.default={isSupported:o,ready:a}},function(e,t){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=function(){function e(){i(this,e)}return o(e,[{key:"phone",value:function(){var e=n();return!(!a.test(e)&&!s.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=n();return!(!c.test(e)&&!r.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new l},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e,t,i){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof n&&("false"===n||!i&&"true"!==n)&&e.node.classList.remove("aos-animate")},n=function(e,t){var n=window.pageYOffset,o=window.innerHeight;e.forEach((function(e,a){i(e,o+n,t)}))};t.default=n},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(i(12)),a=function(e,t){return e.forEach((function(e,i){e.node.classList.add("aos-init"),e.position=(0,o.default)(e.node,t.offset)})),e};t.default=a},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(i(13)),a=function(e,t){var i=0,n=0,a=window.innerHeight,s={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(s.offset&&!isNaN(s.offset)&&(n=parseInt(s.offset)),s.anchor&&document.querySelectorAll(s.anchor)&&(e=document.querySelectorAll(s.anchor)[0]),i=(0,o.default)(e).top,s.anchorPlacement){case"top-bottom":break;case"center-bottom":i+=e.offsetHeight/2;break;case"bottom-bottom":i+=e.offsetHeight;break;case"top-center":i+=a/2;break;case"bottom-center":i+=a/2+e.offsetHeight;break;case"center-center":i+=a/2+e.offsetHeight/2;break;case"top-top":i+=a;break;case"bottom-top":i+=e.offsetHeight+a;break;case"center-top":i+=e.offsetHeight/2+a}return s.anchorPlacement||s.offset||isNaN(t)||(n=t),i+n};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){for(var t=0,i=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),i+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:i,left:t}};t.default=i},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=i}])},EMIU:function(e,t,i){e.exports={main:"sectionFour_main__1UDIE",main_image:"sectionFour_main_image__1r4IO",bubble:"sectionFour_bubble__Z45kG",container:"sectionFour_container__3qmgl",title:"sectionFour_title__3FX0Y",distinctions:"sectionFour_distinctions__1sQBr"}},FA9x:function(e,t,i){e.exports={main:"sectionFive_main__2AbNl",bubble:"sectionFive_bubble__1L4M_",container:"sectionFive_container__28nLS",title:"sectionFive_title__2EDyh",counter:"sectionFive_counter__U1CuN",slider:"sectionFive_slider__3Ey_r",client:"sectionFive_client__1E2Yo",client_mobileArrows:"sectionFive_client_mobileArrows__20IaV",client_details:"sectionFive_client_details__1cn0d",client_remarks:"sectionFive_client_remarks__1ACP0",client_details_name:"sectionFive_client_details_name__1nUJL",client_details_title:"sectionFive_client_details_title__3HBIq"}},H1Po:function(e,t,i){e.exports={main:"sectionTwo_main__1JuR7",bubble:"sectionTwo_bubble__238Ma",container:"sectionTwo_container__3zXTB",cards:"sectionTwo_cards__tPSeD",arrows:"sectionTwo_arrows__sar3_"}},LfIP:function(e,t,i){e.exports={container:"card_container__jjeLV",card:"card_card__2-biO",white:"card_white__Jzy1b",colored:"card_colored__are8h",number:"card_number__1ok1A",title:"card_title__OBghu",text:"card_text__3XYLF"}},PJxY:function(e,t){e.exports="/_next/static/videos/hero-video-7cda4b507a27113ebbac7098ffdf0a67.mp4"},RXBc:function(e,t,i){"use strict";i.r(t);var n=i("nKUr"),o=i("q1tI"),a=i("Aiso"),s=i.n(a),c=i("YFqc"),r=i.n(c),l=i("20a2"),d=i("9a8T"),u=i.n(d),m=(i("6Cl6"),i("LfIP")),b=i.n(m),h=function(){return Object(n.jsxs)("div",{className:b.a.container,children:[Object(n.jsxs)("div",{className:b.a.card,children:[Object(n.jsx)("div",{className:b.a.number,children:"3+"}),Object(n.jsx)("p",{className:b.a.title,children:"years of experience"})]}),Object(n.jsxs)("div",{className:b.a.card,children:[Object(n.jsx)("div",{className:b.a.number,children:"200+"}),Object(n.jsx)("p",{className:b.a.title,children:"completed Projects"})]}),Object(n.jsxs)("div",{className:b.a.card,children:[Object(n.jsx)("div",{className:b.a.number,children:"30+"}),Object(n.jsx)("p",{className:b.a.title,children:"clients"})]})]})},f=i("xSRd"),p=i("wb2y"),v=i("FA9x"),j=i.n(v),g={items:[{client:"Alvin Williams",review:"I was marvelled by the services i got. Nubitz team innovative technology has greatly helped us improve our processes, thereby creating a better experience for all stakeholders. Great work, highly recommended!"},{client:"Brie Marvel",review:"I was marvelled by the services i got. Nubitz team innovative technology has greatly helped us improve our processes, thereby creating a better experience for all stakeholders. Great work, highly recommended!"},{client:"Johnathan Peters",review:"I was marvelled by the services i got. Nubitz team innovative technology has greatly helped us improve our processes, thereby creating a better experience for all stakeholders. Great work, highly recommended!"},{client:"Darcy Greene",review:"I was marvelled by the services i got. Nubitz team innovative technology has greatly helped us improve our processes, thereby creating a better experience for all stakeholders. Great work, highly recommended!"},{client:"Gertrude Doe",review:"I was marvelled by the services i got. Nubitz team innovative technology has greatly helped us improve our processes, thereby creating a better experience for all stakeholders. Great work, highly recommended!"}]},_=function(){var e=Object(o.useState)(0),t=e[0],i=e[1],a=function(){i(0===t?-100*(g.length-1):t+100)},s=function(){i(-400===t?0:t-100)};return Object(n.jsxs)("div",{className:j.a.main,children:[Object(n.jsx)("img",{src:"/assets/home/bubbles/bubble-three.svg",alt:"/",className:j.a.bubble}),Object(n.jsxs)("div",{className:j.a.container,children:[Object(n.jsxs)("div",{className:j.a.title,children:[Object(n.jsx)("p",{children:"Clients Review"}),Object(n.jsx)("h2",{children:"Testimonials"})]}),Object(n.jsx)("div",{className:j.a.counter,children:Object(n.jsxs)("p",{children:["01/",Object(n.jsx)("span",{children:"05"})]})}),Object(n.jsx)("div",{className:j.a.slider,children:g.items.map((function(e){return Object(n.jsxs)("div",{className:j.a.client,style:{transform:"translateX(".concat(t,"%)")},children:[Object(n.jsxs)("div",{className:j.a.client_details,children:[Object(n.jsx)("img",{src:"/assets/home/section_five/left_arrow.svg",alt:"left_arrow",onClick:a}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:j.a.client_details_name,children:e.client}),Object(n.jsxs)("p",{className:j.a.client_details_title,children:["Chief Consultant - ",Object(n.jsx)("b",{children:"Teckit"})]})]})]}),Object(n.jsx)(p.a,{orientation:"vertical"}),Object(n.jsxs)("div",{className:j.a.client_remarks,children:[Object(n.jsx)("p",{children:"".concat(e.review)}),Object(n.jsx)("img",{src:"/assets/home/section_five/right_arrow.svg",alt:"right_arrow",onClick:s})]}),Object(n.jsxs)("div",{className:j.a.client_mobileArrows,children:[Object(n.jsx)("img",{src:"/assets/home/section_five/left_arrow.svg",alt:"left_arrow",style:{marginRight:"20px"},onClick:a}),Object(n.jsx)("img",{src:"/assets/home/section_five/right_arrow.svg",alt:"right_arrow",onClick:s})]})]})}))})]})]})},x=i("FG6a"),O=i("EMIU"),y=i.n(O),w=function(){return Object(n.jsxs)("div",{className:y.a.main,children:[Object(n.jsx)("div",{className:y.a.main_image,children:Object(n.jsx)("img",{src:"/assets/home/bubbles/bubble-two.svg",alt:"/",className:y.a.bubble})}),Object(n.jsxs)("div",{className:y.a.container,children:[Object(n.jsxs)("div",{className:y.a.title,children:[Object(n.jsx)("p",{children:"Our distinctions"}),Object(n.jsx)("h2",{children:"Why Choose Us"})]}),Object(n.jsx)("div",{className:y.a.distinctions,children:[{number:"/assets/home/section_four/01.svg",title:"High Quality Handware",text:"We create the optimal platform to develop and run digital applications for our clients",id:1},{number:"/assets/home/section_four/02.svg",title:"High Quality Handware",text:"We create the optimal platform to develop and run digital applications for our clients",id:2},{number:"/assets/home/section_four/03.svg",title:"High Quality Handware",text:"We create the optimal platform to develop and run digital applications for our clients",id:3},{number:"/assets/home/section_four/04.svg",title:"High Quality Handware",text:"We create the optimal platform to develop and run digital applications for our clients",id:4},{number:"/assets/home/section_four/05.svg",title:"High Quality Handware",text:"We create the optimal platform to develop and run digital applications for our clients",id:5},{number:"/assets/home/section_four/06.svg",title:"High Quality Handware",text:"We create the optimal platform to develop and run digital applications for our clients",id:6}].map((function(e){return Object(n.jsx)(x.a,{number:e.number,title:e.title,description:e.text,mini:!0,width:"unset"},e.id)}))})]})]})},N=(i("gjDC"),i("rePB")),k={items:[{name:"Annexa",id:1,product:"Product Design, UI/UX",image:"/assets/home/section-six/annexa.svg",backgroundColor:"#234085",textColor:"#fff",secondname:"Docxna",secondid:2,secondproduct:"Product Design, UI/UX",secondimage:"/assets/home/section-six/docxna.svg",secondbackgroundColor:"#D1E1E1",secondtextColor:"#234085",inverted:!1},{name:"Hire Me",id:3,product:"Product Design, UI/UX",image:"/assets/home/section-six/hire.svg",backgroundColor:"#01DBF0",textColor:"#fff",secondname:"Danco",secondid:4,secondproduct:"Product Design, UI/UX",secondimage:"/assets/home/section-six/danco.svg",secondbackgroundColor:"#796AF2",secondtextColor:"#fff",inverted:!0},{name:"Telescope",id:5,product:"Product Design, UI/UX",image:"/assets/home/section-six/telescope.svg",backgroundColor:"#FF5E95",textColor:"#fff",secondname:"Hire Me",secondid:6,secondproduct:"Product Design, UI/UX",secondimage:"/assets/home/section-six/hire_green.svg",secondbackgroundColor:"#00601B",secondtextColor:"#fff",inverted:!1},{name:"Docxna",id:7,product:"Product Design, UI/UX",image:"/assets/home/section-six/docxna_grey.svg",backgroundColor:"#505252",textColor:"#fff",secondname:"Add your own project",secondid:8,inverted:!0}]},C=i("0Yp8"),S=i.n(C),E=function(){var e=Object(l.useRouter)(),t=function(t){localStorage.setItem("caseStudy",JSON.stringify(t)),e.push("/case-study")};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:S.a.container,children:[Object(n.jsx)(x.a,{welcome:"Case study",title:"Our portfolio",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel mi lobortis enim, facilisis etiam."}),Object(n.jsx)("div",{className:S.a.main_wrapper,children:k.items.map((function(e){var i;return Object(n.jsx)(n.Fragment,{children:!0!==e.inverted?Object(n.jsxs)("div",{className:S.a.wrapper,children:[Object(n.jsxs)("div",{className:S.a.portfolio,style:{backgroundColor:"".concat(e.backgroundColor)},onClick:function(){var i=JSON.parse(JSON.stringify(e));Object.keys(i).map((function(e){e.startsWith("second")&&delete i[e]})),t(i)},children:[Object(n.jsxs)("div",{className:S.a.title,style:{color:"".concat(e.textColor)},children:[Object(n.jsx)("p",{children:e.name}),Object(n.jsx)("span",{children:e.product})]}),Object(n.jsx)("div",{className:S.a.image,children:Object(n.jsx)("img",{src:e.image,alt:e.name})})]}),Object(n.jsxs)("div",{className:S.a.portfolio,style:{backgroundColor:"".concat(e.secondbackgroundColor)},onClick:function(){var i=JSON.parse(JSON.stringify(e));Object.keys(i).map((function(e){e.startsWith("second")||delete i[e]})),t(i)},children:[Object(n.jsxs)("div",{className:S.a.title,style:{color:"".concat(e.secondtextColor)},children:[Object(n.jsx)("p",{children:e.secondname}),Object(n.jsx)("span",{children:e.secondproduct})]}),Object(n.jsx)("div",{className:S.a.image,children:Object(n.jsx)("img",{src:e.secondimage,alt:e.secondname})})]})]}):Object(n.jsxs)("div",{className:S.a.wrapper_inverted,children:[Object(n.jsxs)("div",{className:S.a.portfolio,style:{backgroundColor:"".concat(e.backgroundColor)},onClick:function(){var i=JSON.parse(JSON.stringify(e));Object.keys(i).map((function(e){e.startsWith("second")&&delete i[e]})),t(i)},children:[Object(n.jsxs)("div",{className:S.a.title,style:{color:"".concat(e.textColor)},children:[Object(n.jsx)("p",{children:e.name}),Object(n.jsx)("span",{children:e.product})]}),Object(n.jsx)("div",{className:S.a.image,children:Object(n.jsx)("img",{src:e.image,alt:e.name})})]}),Object(n.jsxs)("div",{onClick:function(){var i=JSON.parse(JSON.stringify(e));Object.keys(i).map((function(e){e.startsWith("second")||delete i[e]})),t(i)},className:e.secondimage?S.a.portfolio:S.a.portfolio_add,style:e.secondimage?{backgroundColor:"".concat(e.secondbackgroundColor)}:(i={display:"flex",alignItems:"center",backgroundColor:"#EEF3FE",border:"0.5px solid #214a7e"},Object(N.a)(i,"display","flex"),Object(N.a)(i,"justifyContent","center"),Object(N.a)(i,"alignItems","center"),Object(N.a)(i,"color","#214a7e"),Object(N.a)(i,"fontWeight","bold"),i),children:[Object(n.jsxs)("div",{className:e.secondimage&&S.a.title,style:e.secondimage?{color:"".concat(e.secondtextColor)}:{marginRight:"10px",color:"#214a7e"},children:[Object(n.jsx)("p",{children:e.secondname}),Object(n.jsx)("span",{children:e.secondproduct})]}),e.secondimage?Object(n.jsx)("div",{className:S.a.image,children:Object(n.jsx)("img",{src:e.secondimage,alt:e.secondname})}):Object(n.jsx)("img",{src:"/assets/home/section-six/arrow.svg",alt:"arrow"})]})]})})}))})]}),Object(n.jsx)("div",{className:S.a.tagContainer,children:Object(n.jsx)("div",{className:S.a.main,children:Object(n.jsxs)("div",{className:S.a.tagline,children:[Object(n.jsx)("img",{src:"/assets/home/bubbles/bubble-four.svg",alt:"/",className:S.a.bubble}),Object(n.jsx)("img",{src:"/assets/home/bubbles/bubble-five.svg",alt:"/",className:S.a.bubble}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Get the best with nubitz"}),Object(n.jsx)("p",{children:"We are an IT support and IT services company existing to help businesses develop solutions that help them achieve their own desired outcomes."}),Object(n.jsx)("p",{})]}),Object(n.jsx)("div",{children:Object(n.jsx)(f.a,{text:"Get Started",primary:!0})})]})})})]})},T=i("SNlh"),M=i("7pvy"),D=i.n(M),I=function(e){var t=e.icon,i=e.title,o=e.text,a=e.slide,s=e.width,c=e.height,r=e.radius,l=e.backgroundColor,d=e.textColor,u=e.titleColor,m={background:"#214A7E",height:"".concat(c),borderRadius:"".concat(r),transform:"translateX(".concat(a,"%)")};return l&&(m={backgroundColor:"".concat(l),height:"".concat(c),borderRadius:"".concat(r),border:"0.5px solid #C2D9EB",color:"#214a7e",transform:"translateX(".concat(a,"%)")}),Object(n.jsxs)("div",{className:D.a.card,style:m,children:[Object(n.jsx)("div",{className:D.a.card_icon,children:Object(n.jsx)("img",{src:t,alt:"icon"})}),Object(n.jsx)("p",{className:D.a.card_title,style:{color:"".concat(u)},children:i}),Object(n.jsx)("p",{className:D.a.card_text,style:{color:"".concat(d),width:"".concat(s)},children:o})]})},A=i("H1Po"),q=i.n(A),P={items:[{icon:"/assets/home/section_two/lamp.svg",title:"Digital Marketing",text:"In Nubitz, we help you create campanigns and content that drives traffic with our marketing strategies.",textColor:"rgba(249, 249, 249, 0.8)",titleColor:"#ffffff"},{icon:"/assets/home/section_two/code.svg",title:"Product Development",text:"We create the optimal platform to develop and run digital applications for our clients.",backgroundColor:"rgba(234, 241, 246, 0.72)"},{icon:"/assets/home/section_two/lamp.svg",title:"Web Development",text:"In Nubitz, we help you create campanigns and content that drives traffic with our marketing strategies.",textColor:"rgba(249, 249, 249, 0.8)",titleColor:"#ffffff"},{icon:"/assets/home/section_two/code.svg",title:"Cloud Development",text:"We create the optimal platform to develop and run digital applications for our clients.",backgroundColor:"rgba(234, 241, 246, 0.72)"}]},F=function(){var e=Object(o.useState)(0),t=e[0],i=e[1];return Object(n.jsxs)("div",{className:q.a.main,children:[Object(n.jsx)("img",{src:"/assets/home/bubbles/bubble-one.svg",alt:"/",className:q.a.bubble}),Object(n.jsxs)("div",{className:q.a.container,children:[Object(n.jsx)("div",{children:Object(n.jsx)(x.a,{welcome:"Our services",title:"Our Services Are Rendered In The Areas Of Technology",description:"As one of the best IT service providers, we take pride in being able to offer you the best quality services that solves high impact buisness challenges."})}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:q.a.arrows,children:[Object(n.jsx)("img",{src:"/assets/home/section_two/left_arrow.svg",alt:"left arrow",style:{marginRight:"3vh"},onClick:function(){i(0===t?-100*(P.length-1):t+100)}}),Object(n.jsx)("img",{src:"/assets/home/section_two/right_arrow.svg",alt:"right arrow",onClick:function(){i(-200===t?0:t-100)}})]}),Object(n.jsx)("div",{className:q.a.cards,children:P.items.map((function(e){return Object(n.jsx)(I,{icon:e.icon,title:e.title,text:e.text,titleColor:e.titleColor,textColor:e.textColor,backgroundColor:e.backgroundColor,width:"520px",height:"420px",radius:"8px",slide:t},e.title)}))})]})]})]})},z=i("V6qQ"),W=i("Dq34"),U=i("dfhs"),H=i.n(U),L={items:[{image:"/assets/home/accomplishments/medtox.svg",active:"/assets/home/accomplishments-active/medtox.svg",name:"Medtox",id:1},{image:"/assets/home/accomplishments/surlatable.svg",active:"/assets/home/accomplishments-active/surlatable.svg",name:"Surlatable",id:2},{image:"/assets/home/accomplishments/singtel.svg",active:"/assets/home/accomplishments-active/singtel.svg",name:"Singtel",id:3},{image:"/assets/home/accomplishments/banamex.svg",active:"/assets/home/accomplishments-active/banamex.svg",name:"Banamex",id:4},{image:"/assets/home/accomplishments/surlatable.svg",active:"/assets/home/accomplishments-active/surlatable.svg",name:"Surlatable",id:2},{image:"/assets/home/accomplishments/singtel.svg",active:"/assets/home/accomplishments-active/singtel.svg",name:"Singtel",id:3},{image:"/assets/home/accomplishments/banamex.svg",active:"/assets/home/accomplishments-active/banamex.svg",name:"Banamex",id:4},{image:"/assets/home/accomplishments/orion.svg",active:"/assets/home/accomplishments-active/orion.svg",name:"Orion",id:5}]},R={items:[{profile:"/assets/blog/profile.png",image:"/assets/blog/post.png",title:"We are the world\u2019s leading",content:"Eget sed nunc, adipiscing lacus purus auctor at nibh nibh. Id pharetra, hac urna, condimentum. Tristique. condimentum.Tristique.condimentum. Tristique.",author:"Eric Mart",date:"28 Dec, 2020",animate:"fade-left",id:1},{profile:"/assets/blog/profile.png",image:"/assets/blog/post.png",title:"We are the world\u2019s leading",content:"Eget sed nunc, adipiscing lacus purus auctor at nibh nibh. Id pharetra, hac urna, condimentum. Tristique. condimentum.Tristique.condimentum. Tristique.",author:"Eric Mart",date:"28 Dec, 2020",animate:"fade-up",id:2},{profile:"/assets/blog/profile.png",image:"/assets/blog/post.png",title:"We are the world\u2019s leading",content:"Eget sed nunc, adipiscing lacus purus auctor at nibh nibh. Id pharetra, hac urna, condimentum. Tristique. condimentum.Tristique.condimentum. Tristique.",author:"Eric Mart",date:"28 Dec, 2020",animate:"fade-right",id:3}]};t.default=function(){var e=Object(l.useRouter)(),t=Object(o.useState)(null),a=t[0],c=t[1],d=Object(o.useState)(!1),m=d[0],b=d[1];return Object(o.useEffect)((function(){u.a.init({duration:2e3})}),[]),Object(n.jsxs)("div",{className:H.a.container,children:[Object(n.jsxs)("nav",{children:[Object(n.jsx)("div",{className:H.a.logo_container,children:Object(n.jsx)(r.a,{href:"/",children:Object(n.jsx)(s.a,{src:"/assets/home/header/logo.svg",width:"100",height:"50",alt:"nubitz-logo"})})}),Object(n.jsxs)("div",{className:H.a.nav_items,children:[Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{className:"/about"===e.pathname?H.a.active:"",children:Object(n.jsx)(r.a,{href:"/about",children:Object(n.jsx)("a",{children:"About Us"})})}),Object(n.jsx)("li",{className:"/project-request"===e.pathname?H.a.active:"",children:Object(n.jsx)(r.a,{href:"/project-request",children:Object(n.jsx)("a",{children:"Project request"})})}),Object(n.jsx)("li",{className:"/blog"===e.pathname?H.a.active:"",children:Object(n.jsx)(r.a,{href:"/blog",children:Object(n.jsx)("a",{children:"Blog"})})}),Object(n.jsx)("li",{className:"/career"===e.pathname?H.a.active:"",children:Object(n.jsx)(r.a,{href:"/career",children:Object(n.jsx)("a",{children:"Get hired"})})})]}),Object(n.jsx)(f.a,{text:"Get Started",primary:!0})]}),Object(n.jsx)("div",{className:H.a.hamburger,children:Object(n.jsx)("img",{src:"/assets/menu-white.svg",alt:"close-menu",onClick:function(){return b(!0)}})}),m&&Object(n.jsxs)("div",{className:H.a.mobileNav,children:[Object(n.jsxs)("div",{className:H.a.mobileNav_top,children:[Object(n.jsx)(r.a,{href:"/",children:Object(n.jsx)("img",{src:"/assets/logo-dark.svg",alt:"logo-mobile"})}),Object(n.jsx)("img",{src:"/assets/close.svg",alt:"close-menu",onClick:function(){return b(!1)}})]}),Object(n.jsx)("div",{className:H.a.mobileNav_lists,children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{onClick:function(){return b(!1)},children:Object(n.jsx)(r.a,{href:"/about",children:"About Us"})}),Object(n.jsx)("li",{onClick:function(){return b(!1)},children:Object(n.jsx)(r.a,{href:"/project-request",children:"Project request"})}),Object(n.jsx)("li",{onClick:function(){return b(!1)},children:Object(n.jsx)(r.a,{href:"/blog",children:"Blog"})}),Object(n.jsx)("li",{onClick:function(){return b(!1)},children:Object(n.jsx)(r.a,{href:"/career",children:"Get hired"})})]})}),Object(n.jsx)("button",{className:H.a.mobileNav_button,children:"Get Started"})]})]}),Object(n.jsxs)("div",{className:H.a.videoContainer,children:[Object(n.jsx)("video",{src:i("PJxY"),muted:!0,loop:!0,autoPlay:!0}),Object(n.jsx)("img",{src:"/assets/home-hero.png",alt:"/",className:H.a.heroImage}),Object(n.jsx)("div",{className:H.a.overlay}),Object(n.jsx)("div",{className:H.a.accomplishments,children:Object(n.jsx)(h,{})}),Object(n.jsx)("div",{className:H.a.hero,children:Object(n.jsxs)("div",{className:H.a.hero_text,children:[Object(n.jsx)("h1",{children:"We solve problems related to IT infrastructure"}),Object(n.jsx)("p",{children:"We are a software development and digital marketing company existing to help businesses develop solutions."}),Object(n.jsx)(f.a,{text:"Get Started",primary:!0})]})})]}),Object(n.jsx)("div",{className:H.a.accomplishmentsMobile,children:Object(n.jsx)(h,{})}),Object(n.jsx)(F,{}),Object(n.jsx)(T.a,{}),Object(n.jsx)(w,{}),Object(n.jsxs)("div",{className:H.a.company,children:[Object(n.jsxs)("div",{className:H.a.title,children:[Object(n.jsx)("p",{children:"Our distinctions"}),Object(n.jsx)("h2",{children:"Why Choose Us"})]}),Object(n.jsx)("div",{className:H.a.companies,children:L.items.map((function(e){return Object(n.jsx)("div",{children:a===e.id?Object(n.jsx)("img",{src:e.active,alt:e.name,onMouseLeave:function(){return c(null)}}):Object(n.jsx)("img",{src:e.image,alt:e.name,onMouseEnter:function(){return c(e.id)}})},e.id)}))})]}),Object(n.jsx)(_,{}),Object(n.jsx)(E,{}),Object(n.jsxs)("div",{className:H.a.postContainer,children:[Object(n.jsxs)("div",{className:H.a.heading,children:[Object(n.jsx)("p",{children:"Our Blog"}),Object(n.jsx)("h2",{children:"Nubitz News"})]}),Object(n.jsx)("div",{className:H.a.post,children:R.items.map((function(e){return Object(n.jsx)(r.a,{href:"/blog/".concat(encodeURIComponent(e.title)),children:Object(n.jsxs)("div",{"data-aos":"zoom-in",children:[Object(n.jsx)("img",{src:e.image,alt:"/"}),Object(n.jsxs)("div",{className:H.a.post_content,children:[Object(n.jsx)("h5",{children:e.title}),Object(n.jsx)("p",{children:e.content}),Object(n.jsxs)("div",{className:H.a.post_person,children:[Object(n.jsx)("img",{src:e.profile,alt:"/"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:e.author}),Object(n.jsx)("span",{children:e.date})]})]})]})]},e.id)})}))}),Object(n.jsx)("span",{children:"View All Articles"})]}),Object(n.jsx)(z.a,{}),Object(n.jsx)(W.a,{})]})}},dfhs:function(e,t,i){e.exports={container:"home_container__2ySor",header:"home_header__GrXUF",nav_items:"home_nav_items__Pdro6",active:"home_active__2_WLT",li:"home_li__WKbB_",hamburger:"home_hamburger__14YIF",mobileNav:"home_mobileNav__1Cl2N",slidein:"home_slidein__1RkBW",mobileNav_top:"home_mobileNav_top__EJOWy",mobileNav_lists:"home_mobileNav_lists__2DYLp",mobileNav_button:"home_mobileNav_button__DvpYp",videoContainer:"home_videoContainer__1R-TR",heroImage:"home_heroImage__63mr7",overlay:"home_overlay__29WEG",accomplishments:"home_accomplishments__1KaNb",hero:"home_hero__17fl-",hero_text:"home_hero_text__1glhM",accomplishmentsMobile:"home_accomplishmentsMobile__3fc8M",company:"home_company__1ZVk5",title:"home_title__7MU7y",companies:"home_companies__JwY4l",choose:"home_choose___9F9b",distinctions:"home_distinctions__1RRRa",postContainer:"home_postContainer__1cvWS",heading:"home_heading__3DypB",post:"home_post__2RJse",post_content:"home_post_content__Ek9TY",post_person:"home_post_person__2x82d"}},gjDC:function(e,t,i){e.exports={container:"sectionOne_container__m99AN",img:"sectionOne_img__Ar4Lr",text:"sectionOne_text__2-cxB",text_points:"sectionOne_text_points__2G214"}},vlRD:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i("RXBc")}])}},[["vlRD",0,1,2,3,4]]]);