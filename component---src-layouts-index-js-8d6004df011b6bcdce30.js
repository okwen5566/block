webpackJsonp([0x67ef26645b2a,60335399758886],{280:function(e,t){e.exports={layoutContext:{}}},603:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(48),r=n(l),o=a(1),u=n(o),c=a(635),i=n(c),s=a(280),d=n(s);t.default=function(e){return u.default.createElement(i.default,(0,r.default)({},e,d.default))},e.exports=t.default},1480:function(e,t,a){var n,l;(function(a){!function(a,r){n=[],l=function(){return r(a)}.apply(t,n),!(void 0!==l&&(e.exports=l))}("undefined"!=typeof a?a:"undefined"!=typeof window?window:this,function(e){"use strict";var t="querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype,a={ignore:"[data-scroll-ignore]",header:null,speed:500,offset:0,easing:"easeInOutCubic",customEasing:null,before:function(){},after:function(){}},n=function(){for(var e={},t=0,a=arguments.length;t<a;t++){var n=arguments[t];!function(t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])}(n)}return e},l=function(t){return parseInt(e.getComputedStyle(t).height,10)},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,a=String(e),n=a.length,l=-1,r="",o=a.charCodeAt(0);++l<n;){if(0===(t=a.charCodeAt(l)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");r+=t>=1&&t<=31||127==t||0===l&&t>=48&&t<=57||1===l&&t>=48&&t<=57&&45===o?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?a.charAt(l):"\\"+a.charAt(l)}return"#"+r},o=function(e,t){var a;return"easeInQuad"===e.easing&&(a=t*t),"easeOutQuad"===e.easing&&(a=t*(2-t)),"easeInOutQuad"===e.easing&&(a=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(a=t*t*t),"easeOutCubic"===e.easing&&(a=--t*t*t+1),"easeInOutCubic"===e.easing&&(a=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(a=t*t*t*t),"easeOutQuart"===e.easing&&(a=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(a=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(a=t*t*t*t*t),"easeOutQuint"===e.easing&&(a=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(a=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(a=e.customEasing(t)),a||t},u=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},c=function(e,t,a){var n=0;if(e.offsetParent)do n+=e.offsetTop,e=e.offsetParent;while(e);return n=Math.max(n-t-a,0)},i=function(e){return e?l(e)+e.offsetTop:0},s=function(t,a,n){n||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,a))},d=function(t){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)};return function(l,f){var m,p,h,v,g,b,E,y={};y.cancelScroll=function(){cancelAnimationFrame(E)},y.animateScroll=function(t,l,r){var d=n(m||a,r||{}),f="[object Number]"===Object.prototype.toString.call(t),p=f||!t.tagName?null:t;if(f||p){var h=e.pageYOffset;d.header&&!v&&(v=document.querySelector(d.header)),g||(g=i(v));var b,E,w,C=f?t:c(p,g,parseInt("function"==typeof d.offset?d.offset():d.offset,10)),_=C-h,N=u(),x=0,M=function(a,n){var r=e.pageYOffset;if(a==n||r==n||(h<n&&e.innerHeight+r)>=N)return y.cancelScroll(),s(t,n,f),d.after(t,l),b=null,!0},S=function(t){b||(b=t),x+=t-b,E=x/parseInt(d.speed,10),E=E>1?1:E,w=h+_*o(d,E),e.scrollTo(0,Math.floor(w)),M(w,C)||(e.requestAnimationFrame(S),b=t)};0===e.pageYOffset&&e.scrollTo(0,0),d.before(t,l),y.cancelScroll(),e.requestAnimationFrame(S)}};var w=function(e){p&&(p.id=p.getAttribute("data-scroll-id"),y.animateScroll(p,h),p=null,h=null)},C=function(t){if(!d()&&0===t.button&&!t.metaKey&&!t.ctrlKey&&(h=t.target.closest(l))&&"a"===h.tagName.toLowerCase()&&!t.target.closest(m.ignore)&&h.hostname===e.location.hostname&&h.pathname===e.location.pathname&&/#/.test(h.href)){var a;try{a=r(decodeURIComponent(h.hash))}catch(e){a=r(h.hash)}if("#"===a){t.preventDefault(),p=document.body;var n=p.id?p.id:"smooth-scroll-top";return p.setAttribute("data-scroll-id",n),p.id="",void(e.location.hash.substring(1)===n?w():e.location.hash=n)}p=document.querySelector(a),p&&(p.setAttribute("data-scroll-id",p.id),p.id="",h.hash===e.location.hash&&(t.preventDefault(),w()))}},_=function(e){b||(b=setTimeout(function(){b=null,g=i(v)},66))};return y.destroy=function(){m&&(document.removeEventListener("click",C,!1),e.removeEventListener("resize",_,!1),y.cancelScroll(),m=null,p=null,h=null,v=null,g=null,b=null,E=null)},y.init=function(l){t&&(y.destroy(),m=n(a,l||{}),v=m.header?document.querySelector(m.header):null,g=i(v),document.addEventListener("click",C,!1),e.addEventListener("hashchange",w,!1),v&&e.addEventListener("resize",_,!1))},y.init(f),y}})}).call(t,function(){return this}())},621:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),o=a(170),u=n(o),c=a(47),i=n(c);a(1206);var s=function(){return r.default.createElement("footer",{className:"footer"},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-sm-12 text-center"},r.default.createElement("p",{className:"architecture"},"Build with ",r.default.createElement(u.default,{href:"https://www.gatsbyjs.org/",title:"GatsbyJS"})," and ",r.default.createElement(u.default,{href:"https://reactjs.org/",title:"React "+r.default.version}),". Hosted on ",r.default.createElement(u.default,{href:"https://www.netlify.com/",title:"Netlify"}),".",r.default.createElement("br",null),"The code is open source and available at ",r.default.createElement(u.default,{href:"https://github.com/calpa/blog",title:"Github"}),"."),r.default.createElement("p",{className:"copyright"},"Copyright © ",i.default.title," ",(new Date).getFullYear()," Theme by Calpa Liu")))))};t.default=s,e.exports=t.default},1206:function(e,t){},622:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l);a(1207);var o=function(e){var t=e.url;return r.default.createElement("a",{href:t,className:"github-corner","aria-label":"View source on Github"},r.default.createElement("svg",{width:"60",height:"60",viewBox:"0 0 250 250","aria-hidden":"true",className:"github-corner-svg"},r.default.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),r.default.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",className:"octo-arm"}),r.default.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})))};t.default=o,e.exports=t.default},1207:function(e,t){},625:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),o=a(4),u=n(o),c=function(e){var t=e.title,a=e.list;return r.default.createElement("li",{className:"nav-item dropdown"},r.default.createElement("button",{className:"nav-link dropdown-toggle btn-link","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},t),r.default.createElement("div",{className:"dropdown-menu"},a.map(function(e){return r.default.createElement("a",{className:"dropdown-item",href:e.href,key:e.title},e.title)})))};c.propTypes={title:u.default.string.isRequired},t.default=c,e.exports=t.default},626:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),o=a(4),u=n(o),c=a(19),i=n(c),s=a(625),d=n(s),f=a(70);a(1208);var m=function(e){var t=e.url,a=e.name,n=e.list;return 0===n.length?r.default.createElement(i.default,{className:"nav-btn btn btn-link",href:t,to:t,onClick:function(){return(0,f.gotoPage)(t)}},a):r.default.createElement(d.default,{title:a,list:n})};m.propTypes={url:u.default.string.isRequired,name:u.default.string.isRequired,list:u.default.array},m.defaultProps={list:[]},t.default=m,e.exports=t.default},1208:function(e,t){},627:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(13),r=n(l),o=a(16),u=n(o),c=a(15),i=n(c),s=a(175),d=n(s),f=a(174),m=n(f),p=a(1),h=n(p),v=a(19),g=a(622),b=n(g),E=a(626),y=n(E),w=a(70),C=a(47);a(1209);var _=function(){var e=(0,m.default)(d.default.mark(function e(t){var a,n;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=document.getElementById("nav-search"),n=a.value,e.next=4,window.$(".collapse").collapse("hide");case 4:return e.next=6,(0,v.navigateTo)("/search?query="+n);case 6:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}(),N=["navbar","navbar-expand-md","sticky-top","custom-navbar"],x=function(e){function t(a){(0,r.default)(this,t);var n=(0,u.default)(this,e.call(this,a));return n.location=n.props.location,n.state={isTop:!0,searchable:!1},n}return(0,i.default)(t,e),t.prototype.componentDidMount=function(){var e=this;document.addEventListener("scroll",function(){var t=window.scrollY<55;t!==e.state.isTop&&e.setState({isTop:t})})},t.prototype.render=function(){return h.default.createElement("nav",{className:N.join(" ")+" "+(this.state.isTop===!1?"navbar-dark":"navbar-light is-fixed")},h.default.createElement("div",{className:"container"},h.default.createElement("button",{className:"navbar-brand btn btn-default",onClick:function(){return(0,w.gotoPage)("/")}},h.default.createElement("span",{className:"brand-logo"},"Calpa")," 's Blog"),h.default.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent"},h.default.createElement("span",{className:"navbar-toggler-icon"})),h.default.createElement(b.default,{url:"https://github.com/calpa/blog"}),h.default.createElement("div",{className:"collapse navbar-collapse flex-row-reverse",id:"navbarSupportedContent"},this.state.searchable&&h.default.createElement("form",{className:"form-inline my-2 my-lg-0",onSubmit:function(e){return _(e)}},h.default.createElement("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search","aria-label":"Search",id:"nav-search"}),h.default.createElement("button",{className:"btn btn-outline-secondary my-2 my-sm-0",type:"submit"},h.default.createElement("i",{className:"fa fa-search"}))),h.default.createElement("ul",{className:"navbar-nav mr-2"},C.navbarList.map(function(e){return h.default.createElement(y.default,{url:e.href,name:e.title,list:e.list,key:e.href})})))))},t}(p.Component);t.default=x,e.exports=t.default},1209:function(e,t){},634:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),o=a(221),u=a(47),c=n(u),i=function(){return r.default.createElement(o.Helmet,{defaultTitle:"Calpa's Blog",titleTemplate:"%s | Calpa's Blog"},r.default.createElement("meta",{charSet:"utf-8"}),r.default.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),r.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.default.createElement("meta",{name:"description",content:c.default.meta.description}),r.default.createElement("meta",{name:"keyword",content:c.default.meta.keyword}),r.default.createElement("meta",{name:"theme-color",content:c.default.meta.theme_color}),r.default.createElement("meta",{name:"msapplication-navbutton-color",content:c.default.meta.theme_color}),r.default.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),r.default.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:c.default.meta.theme_color}),r.default.createElement("link",{rel:"shortcut icon",href:c.default.meta.favicon||"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-person-128.png"}),r.default.createElement("link",{rel:"alternate",type:"application/atom+xml",title:c.default.title,href:"/atom.xml"}),r.default.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),r.default.createElement("meta",{name:"google-site-verification",content:c.default.meta.google_site_verification}),r.default.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap.min.css"}),r.default.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/solarized-light.min.css"}))};t.default=i,e.exports=t.default},635:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),o=a(4),u=n(o),c=a(627),i=n(c),s=a(634),d=n(s),f=a(621),m=n(f);a(1215),"undefined"!=typeof window&&a(1480)('a[href*="#"]',{offset:60});var p=function(e){var t=e.children,a=e.location;return r.default.createElement("div",{className:"layout fadeIn"},r.default.createElement(d.default,null),r.default.createElement(i.default,{location:a}),r.default.createElement("div",{className:"container-fluid"},t()),r.default.createElement(m.default,null))};p.propTypes={children:u.default.func},t.default=p,e.exports=t.default},1215:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-8d6004df011b6bcdce30.js.map