(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{"6EMX":function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));var a=o("o0o1"),n=o.n(a),r=o("HaE+"),i=o("vDqi"),l=o.n(i),s=o("8SHQ"),c=function(){var e=Object(r.a)(n.a.mark((function e(t){var o,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.map((function(e){return l.a.get("".concat(s.e,"/contents/").concat(e,"/tours.json"))})),e.next=3,l.a.all(o);case 3:return a=e.sent,r=a.map((function(e){return e.data})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},"DG/x":function(e,t,o){"use strict";var a=o("nKUr"),n=(o("q1tI"),o("Y/VR")),r=o.n(n),i=o("YFqc"),l=o.n(i),s=o("sz4E"),c=o.n(s),u=o("8SHQ");t.a=function(e){var t=e.title,o=e.className,n=e.search;return Object(a.jsx)("div",{className:"".concat(c.a.breadcrumbWrapper," ").concat(o),children:Object(a.jsxs)(r.a,{separator:Object(a.jsx)("span",{className:c.a.divider,children:"/"}),children:[Object(a.jsx)(r.a.Item,{children:Object(a.jsx)(l.a,{href:u.f?"/":"/".concat(u.b),children:Object(a.jsx)("a",{className:c.a.parent,children:"HIKES"})})}),void 0!==n&&null!==n?Object(a.jsx)(r.a.Item,{children:Object(a.jsx)(l.a,{href:"/hikes/search/".concat(n),children:Object(a.jsx)("a",{className:c.a.parent,children:n})})}):null,Object(a.jsx)(r.a.Item,{className:c.a.child,children:t||null})]})})}},H3WJ:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=f(o("iCc5")),n=f(o("V7oC")),r=f(o("FYw3")),i=f(o("mRg0")),l=o("q1tI"),s=m(l),c=m(o("17x9")),u=f(o("aVg8")),d=f(o("wzuP")),p=f(o("TSYQ"));function m(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function f(e){return e&&e.__esModule?e:{default:e}}function b(e,t,o,a){var n=o.indexOf(e)===o.length-1,r=function(e,t){if(!e.breadcrumbName)return null;var o=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":("+o+")","g"),(function(e,o){return t[o]||e}))}(e,t);return n?s.createElement("span",null,r):s.createElement("a",{href:"#/"+a.join("/")},r)}var v=function(e){function t(){return(0,a.default)(this,t),(0,r.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,n.default)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,u.default)(!("linkRender"in e||"nameRender"in e),"`linkRender` and `nameRender` are removed, please use `itemRender` instead, see: https://u.ant.design/item-render.")}},{key:"render",value:function(){var e=void 0,t=this.props,o=t.separator,a=t.prefixCls,n=t.style,r=t.className,i=t.routes,c=t.params,m=void 0===c?{}:c,f=t.children,v=t.itemRender,g=void 0===v?b:v;if(i&&i.length>0){var j=[];e=i.map((function(e){e.path=e.path||"";var t=e.path.replace(/^\//,"");return Object.keys(m).forEach((function(e){t=t.replace(":"+e,m[e])})),t&&j.push(t),s.createElement(d.default,{separator:o,key:e.breadcrumbName||t},g(e,m,i,j))}))}else f&&(e=s.Children.map(f,(function(e,t){return e?((0,u.default)(e.type&&e.type.__ANT_BREADCRUMB_ITEM,"Breadcrumb only accepts Breadcrumb.Item as it's children"),(0,l.cloneElement)(e,{separator:o,key:t})):e})));return s.createElement("div",{className:(0,p.default)(r,a),style:n},e)}}]),t}(s.Component);t.default=v,v.defaultProps={prefixCls:"ant-breadcrumb",separator:"/"},v.propTypes={prefixCls:c.string,separator:c.node,routes:c.array,params:c.object,linkRender:c.func,nameRender:c.func},e.exports=t.default},XKlS:function(e,t,o){"use strict";var a=o("nKUr"),n=(o("q1tI"),o("4IMT")),r=o.n(n),i=o("zk85"),l=o.n(i),s=o("mOvS"),c=o.n(s)()().publicRuntimeConfig,u=function(e){if(e)return Object(a.jsx)("img",{src:"".concat(c.asset,"/static/dist/images/icons/filterCross.svg"),alt:"icon",className:l.a.filterCloseIcon})},d=function(e){return"download"===e?Object(a.jsx)("img",{src:"".concat(c.asset,"/static/dist/images/download.svg"),alt:"Download icon",className:l.a.downloadIcon}):null},p=function(e){return e?Object(a.jsx)("img",{src:"".concat(c.asset,"/static/dist/images/icons/codeIcon.png"),alt:"Code icon",className:l.a.codeIcon}):null},m=function(e){var t=e.title,o=e.type,n=e.color,i=e.active,s=e.selected,c=e.children,m=e.className,f=e.onClick,b=e.featured,v=e.href,g=e.target,j=e.disabled,h=e.isCode;return Object(a.jsxs)(r.a,{title:t,className:"\n      ".concat(l.a.konyButton,"\n      ").concat(l.a[o]?l.a[o]:"","\n      ").concat(l.a[n]?l.a[n]:"","\n      ").concat(i?l.a.active:"","\n      ").concat(s?l.a.selected:"","\n      ").concat(b?l.a.featured:"","\n      ").concat(m,"\n    "),onClick:f,href:v||null,target:g,disabled:j,children:[d(o),p(h),c||t,u(s)]})};m.defaultProps={title:"Button",type:"normal",color:"",active:!1,featured:!1,selected:!1,children:"",className:"",href:"",target:null,onClick:function(){},disabled:!1,isCode:!1},t.a=m},"Y/VR":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(o("H3WJ")),n=r(o("wzuP"));function r(e){return e&&e.__esModule?e:{default:e}}a.default.Item=n.default,t.default=a.default,e.exports=t.default},kACj:function(e,t,o){"use strict";o.r(t);var a=o("nKUr"),n=o("o0o1"),r=o.n(n),i=o("HaE+"),l=o("q1tI"),s=o("Djov"),c=o("9xET"),u=o.n(c),d=o("ZPTe"),p=o.n(d),m=o("DG/x"),f=o("XKlS"),b=o("PGnZ"),v=o.n(b),g=o("mOvS"),j=o.n(g),h=o("6EMX"),y=o("8SHQ"),S=o("t3Un"),x=j()().publicRuntimeConfig.hikesData;t.default=function(e){var t,o=e.url,n=Object(l.useState)(null),c=n[0],d=n[1],b=Object(l.useState)(null),g=b[0],j=b[1],O=function(){var e=Object(i.a)(r.a.mark((function e(){var t,a,n,i,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=y.f?o.asPath.substring(1):o.asPath.replace("/".concat(y.b),"").substring(1),e.next=3,Object(h.a)(x);case 3:a=e.sent,n=a.filter((function(e){return e.categoryTours.some((function(e){return e.alias==t}))})),j(n[0].categoryAlias),i=n.map((function(e){return Object.assign({},e,{categoryTours:e.categoryTours})}))[0],l=i.categoryTours.filter((function(e){return e.alias==t}))[0],d(l);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){return O(),function(){}}),[]);var I=function(e){return e.preventDefault(),e.message=function(){var e=new Date,t=Object(S.a)(null===c||void 0===c?void 0:c.fileName,g);return{namespace:"hike",msg_id:"id_".concat(e.getTime()),msg_type:"POST",request:{context:"tour",category:null===c||void 0===c?void 0:c.category,title:null===c||void 0===c?void 0:c.title,checksum:null===c||void 0===c?void 0:c.checksum,download_url:t,version:null===c||void 0===c?void 0:c.hikeVersion,filename:null===c||void 0===c?void 0:c.fileName,kuid:null===c||void 0===c?void 0:c.kuid,id:"".concat(null===c||void 0===c?void 0:c.nid).concat(null===c||void 0===c?void 0:c.fid).concat(e.getTime())}}}(),"undefined"!==typeof e.message&&(console.log(e.message),getVizSource().postMessage(e.message,"*")),!1},E=y.f?null===c||void 0===c?void 0:c.image:"/".concat(y.b).concat(null===c||void 0===c?void 0:c.image);return Object(a.jsxs)("div",{className:v.a.hikeBody,children:[Object(a.jsx)(s.a,{search:null}),Object(a.jsxs)("div",{className:v.a.tourContainer,children:[Object(a.jsx)(m.a,{title:null===c||void 0===c?void 0:c.title,search:null}),Object(a.jsxs)("div",{className:v.a.tourInfo,children:[Object(a.jsx)("div",{className:v.a.tourThumb,children:Object(a.jsx)("img",{src:E,alt:"Hike Thumbnail"})}),Object(a.jsxs)("div",{className:v.a.tourDesc,children:[Object(a.jsx)("h2",{className:v.a.tourTitle,children:null===c||void 0===c?void 0:c.title}),Object(a.jsxs)("h3",{className:v.a.tourVersion,children:["Hike Version: ",null===c||void 0===c?void 0:c.hikeVersion]}),Object(a.jsx)("div",{className:v.a.tourBody,dangerouslySetInnerHTML:{__html:null===c||void 0===c?void 0:c.description}}),Object(a.jsxs)(u.a,{className:v.a.metaData,children:[Object(a.jsxs)(p.a,{span:6,sm:24,xs:24,md:6,lg:6,className:v.a.innerTabWrapper,children:[Object(a.jsx)("h3",{className:v.a.tourHeader,children:"Platform Version"}),Object(a.jsx)("div",{className:v.a.tourContent,children:null===c||void 0===c?void 0:c.platformVersion})]}),Object(a.jsxs)(p.a,{span:6,sm:24,xs:24,md:6,lg:6,className:v.a.innerTabWrapper,children:[Object(a.jsx)("h3",{className:v.a.tourHeader,children:"Categories"}),Object(a.jsx)("ul",{className:v.a.tourContent,children:null===c||void 0===c||null===(t=c.category)||void 0===t?void 0:t.map((function(e){return Object(a.jsx)("li",{children:e})}))})]})]}),Object(a.jsx)("h3",{className:v.a.tourTime,children:"".concat(null===c||void 0===c?void 0:c.cards," Steps - ").concat(null===c||void 0===c?void 0:c.time)}),Object(a.jsx)("div",{className:v.a.tourDetails,dangerouslySetInnerHTML:{__html:null===c||void 0===c?void 0:c.details}})]})]}),Object(a.jsx)("div",{className:v.a.startBtn,children:Object(a.jsx)(f.a,{title:"START",type:"blue",onClick:function(e){return I(e)}})})]})]})}},sz4E:function(e,t,o){e.exports={poppinsRegular:'"Poppins Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsMedium:'"Poppins Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsLight:'"Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabRegular:'"RobotoSlab Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabLight:'"RobotoSlab Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabBold:'"RobotoSlab Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',bodyBg:"#f9fafc",dbxBg:"#704C9F",navText:"#9094a5",secondaryText:"#8A96AF",divider:"rgba(48, 53, 63, 0.1)",assetBg:"#f0f0f0",optionsText:"#646E83",activeColor:"#297BFF",postBackground:"#8394E0",userActive:"#6E86E7",filterActive:"#73DB9B",filterIconBg:"#64C489",titleLightBlue:"#6e87f5",titleRed:"#EE6B6B",titleText:"#30353F",breadcrumbWrapper:"_3IBeg"}},t3Un:function(e,t,o){"use strict";(function(e){o.d(t,"a",(function(){return n}));var a=o("8SHQ"),n=function(t,o){var n=(e&&e.env?"add-localization":void 0)||a.a,r="http://localhost:".concat(a.c,"/api/zip/").concat(t),i="https://raw.githubusercontent.com/".concat(a.d,"/").concat(a.b,"/").concat(n,"/public/contents/").concat(o,"/zips/").concat(t);return a.f?r:i}}).call(this,o("8oxB"))},wzuP:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=d(o("QbLZ")),n=d(o("iCc5")),r=d(o("V7oC")),i=d(o("FYw3")),l=d(o("mRg0")),s=u(o("q1tI")),c=u(o("17x9"));function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function d(e){return e&&e.__esModule?e:{default:e}}var p=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(o[a[n]]=e[a[n]])}return o},m=function(e){function t(){return(0,n.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,l.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,o=e.separator,n=e.children,r=p(e,["prefixCls","separator","children"]),i=void 0;return i="href"in this.props?s.createElement("a",(0,a.default)({className:t+"-link"},r),n):s.createElement("span",(0,a.default)({className:t+"-link"},r),n),n?s.createElement("span",null,i,s.createElement("span",{className:t+"-separator"},o)):null}}]),t}(s.Component);t.default=m,m.__ANT_BREADCRUMB_ITEM=!0,m.defaultProps={prefixCls:"ant-breadcrumb",separator:"/"},m.propTypes={prefixCls:c.string,separator:c.oneOfType([c.string,c.element]),href:c.string},e.exports=t.default},zk85:function(e,t,o){e.exports={poppinsRegular:'"Poppins Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsMedium:'"Poppins Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsLight:'"Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabRegular:'"RobotoSlab Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabLight:'"RobotoSlab Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabBold:'"RobotoSlab Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',bodyBg:"#f9fafc",dbxBg:"#704C9F",navText:"#9094a5",secondaryText:"#8A96AF",divider:"rgba(48, 53, 63, 0.1)",assetBg:"#f0f0f0",optionsText:"#646E83",activeColor:"#297BFF",postBackground:"#8394E0",userActive:"#6E86E7",filterActive:"#73DB9B",filterIconBg:"#64C489",titleLightBlue:"#6e87f5",titleRed:"#EE6B6B",titleText:"#30353F",konyButton:"_1zJKe",normal:"_3Ekqs",active:"_2LeOg",filter:"Orjkm",selected:"_2bLYr",downloadIcon:"_3AqOe",codeIcon:"_2n6ua",action:"I6ToG",download:"_2oNV4",blue:"nUQSe",red:"_1xDUH",lightBlue:"_1g8e2",skyBlue:"UHdfC",lightGreen:"_2T8V3",appPreview:"_2Hptp",featured:"_16x0J",filterCloseIcon:"shvlF"}}}]);