webpackJsonp([35783957827783],{237:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),n=l(r),u=a(19),d=l(u),s=a(4),i=l(s),o=a(86),c=l(o),f=a(168);a(311);var m=a(70),g=function(e,t){return{backgroundColor:"#"+t,backgroundImage:" url("+(0,f.parseImgur)(e,"large")+")"}},p=function(e){var t=e.url,a=e.image,l=e.backgroundColor;return n.default.createElement(d.default,{to:t,href:t},n.default.createElement("div",{className:"wrapper",style:g(a,l)}))},E=function(e){var t=e.title,a=e.date,l=e.url,r=e.headerImage,u=e.headerBackgroundColor,s=e.content,i=e.tags,o=(0,m.parseUrl)(a,l),f=i.split(", ");return n.default.createElement("div",{className:"col-sm-12 pb-4"},n.default.createElement("div",{className:"custom-card"},r&&n.default.createElement(p,{url:o,image:r,backgroundColor:u}),n.default.createElement("div",{className:"data"},n.default.createElement("div",{className:"content"},n.default.createElement("div",{className:"stats"},n.default.createElement("span",{className:"date"},a),f.map(function(e){return n.default.createElement(c.default,{name:e,key:e})})),n.default.createElement(d.default,{to:o,href:o},n.default.createElement("h4",{className:"title"},t)),n.default.createElement("p",{className:"d-none d-md-block"},s),n.default.createElement(d.default,{to:o,href:o},"....繼續閱讀全文內容")))))};E.propTypes={title:i.default.string.isRequired,date:i.default.string.isRequired,url:i.default.string.isRequired,headerImage:i.default.string,headerBackgroundColor:i.default.string.isRequired,content:i.default.string.isRequired,tags:i.default.string},E.defaultProps={headerImage:"",tags:""},t.default=E,e.exports=t.default},311:function(e,t){},117:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),n=l(r),u=a(4),d=l(u);a(148);var s=a(86),i=l(s),o=function(e){var t=e.img,a=e.title,l=e.subTitle,r=e.tags;return n.default.createElement("div",{className:"col-12 header",style:{padding:0}},n.default.createElement("div",{className:"img-container",style:{backgroundImage:"linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url("+t+")",marginTop:-58}},a&&n.default.createElement("h1",{style:{fontSize:24}},a),l&&n.default.createElement("h2",{style:{fontSize:22}},l),n.default.createElement("div",{className:"tag"},r&&r.map(function(e){return n.default.createElement(i.default,{name:e,key:e})}))))};o.propTypes={img:d.default.string.isRequired,title:d.default.string,subTitle:d.default.string,tags:d.default.arrayOf(d.default.string)},o.defaultProps={title:"",subTitle:"",tags:[]},t.default=o,e.exports=t.default},148:function(e,t){},239:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),n=l(r),u=a(4),d=l(u),s=a(19),i=l(s),o=function(e){var t=e.pages;return n.default.createElement("div",{className:"dropdown show page-item"},n.default.createElement("button",{className:"btn page-link dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"..."),n.default.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuLink"},n.default.createElement(i.default,{className:"dropdown-item",href:"/",to:"/",key:"/"},"Home"),t.map(function(e,t){return n.default.createElement(i.default,{className:"dropdown-item",href:e,to:e,key:e},t+1)})))};o.propTypes={pages:d.default.array.isRequired},t.default=o,e.exports=t.default},240:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),n=l(r),u=a(19),d=l(u),s=a(239),i=l(s),o=a(43),c=a(70),f=function(e){var t=e.number,a=e.content,l=e.url;return n.default.createElement("li",{className:"page-item"+(t<0?" disabled":"")},n.default.createElement(d.default,{className:"page-link",to:""+("string"==typeof a?l:"/page/"+t),href:""+("string"==typeof a?l:"/page/"+t)},a||t))},m=function(){return n.default.createElement("nav",{"aria-label":"Page navigation example"},n.default.createElement("ul",{className:"pagination justify-content-center"},n.default.createElement(f,{number:(0,c.handlePreviousPage)(),content:"Previous",url:(0,c.handlePreviousPage)()}),n.default.createElement(f,{number:1}),n.default.createElement(f,{number:2}),n.default.createElement("li",{className:"page-item"},n.default.createElement(i.default,{pages:(0,o.getPages)()})),n.default.createElement(f,{number:(0,o.getMaxPages)()-1}),n.default.createElement(f,{number:(0,o.getMaxPages)()}),n.default.createElement(f,{number:(0,c.handleNextPage)(),content:"Next",url:(0,c.handleNextPage)()})))};t.default=m,e.exports=t.default},647:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var r=a(1),n=l(r),u=a(117),d=l(u),s=a(237),i=l(s),o=a(172),c=l(o),f=a(171),m=l(f),g=a(240),p=l(g),E=a(43),h=a(169);a(1220);var v=function(e){var t=e.data,a=e.location;return n.default.createElement("div",{className:"row homepage"},n.default.createElement(d.default,{img:t.header.headerImage,title:t.header.title,titleVisible:t.header.titleVisible,subTitle:t.header.subTitle,subTitleVisible:t.header.subTitleVisible}),n.default.createElement(c.default,{totalCount:t.latestPosts.totalCount,posts:t.latestPosts.edges}),n.default.createElement("div",{className:"col-xl-6 col-lg-7 col-md-12 col-xs-12 order-2"},n.default.createElement("div",{className:"row"},t.pagePosts.edges.map(function(e,t){var a=e.node;return n.default.createElement(i.default,{title:a.title,date:(0,E.parseDate)(a.createdDate),url:a.url,headerSize:a.headerSize,headerImage:a.headerImgur,headerBackgroundColor:a.headerBackgroundColor||"ededed",key:a.title,index:t,content:(0,h.getFirstParagraph)(a.content),tags:a.tags})})),n.default.createElement(p.default,{pathname:a.pathname})),n.default.createElement("div",{className:"col-xl-2 col-lg-1 order-3"}),n.default.createElement(m.default,{url:(0,E.getPath)(),description:"Calpa's Blog",image:"https://i.imgur.com/kjt2x52.png",siteTitleAlt:"Calpa's Blog",isPost:!1}))};t.default=v;t.pageQuery="** extracted graphql fragment **"},1220:function(e,t){}});
//# sourceMappingURL=component---src-pages-index-js-9dc751262530809ddd83.js.map