"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4395],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||c;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,c=e.height,a=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:c,src:a})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:c,src:a})),n.createElement("p",null,e.children))}},45135:function(e,t,r){var n=r(67294);class o extends n.Component{render(){var e=`https://www.youtube.com/embed/${function(e){const t=/https:\/\/www\.youtube\.com\/watch\?v=(\w+)/;if(t.test(e))return t.exec(e)[1];const r=/https:\/\/youtu\.be\/(\w+)/;if(r.test(e))return r.exec(e)[1];return e}(this.props.url)}`;return n.createElement("div",{className:"videoWrapper"},n.createElement("iframe",{src:e,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}}t.Z=o},90229:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return b},default:function(){return O},frontMatter:function(){return h},metadata:function(){return y},toc:function(){return w}});var n=r(3905),o=r(39130),c=r(44035),a=r(45135),i=Object.defineProperty,u=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&f(e,r,t[r]);if(p)for(var r of p(t))m.call(t,r)&&f(e,r,t[r]);return e};const h={id:"welcome",title:"TouchGFX\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",sidebar_label:"Welcome",description:"TouchGFX\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\xb7\u30b5\u30a4\u30c8 - \u7d44\u8fbc\u307f\u30bf\u30c3\u30c1\xb7\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3067\u304d\u308b\u3001\u4f7f\u3044\u3084\u3059\u3044\u30b0\u30e9\u30d5\u30a3\u30ab\u30ebC++\u30c4\u30fc\u30eb"},b=void 0,y={unversionedId:"introduction/welcome",id:"introduction/welcome",title:"TouchGFX\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",description:"TouchGFX\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\xb7\u30b5\u30a4\u30c8 - \u7d44\u8fbc\u307f\u30bf\u30c3\u30c1\xb7\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3067\u304d\u308b\u3001\u4f7f\u3044\u3084\u3059\u3044\u30b0\u30e9\u30d5\u30a3\u30ab\u30ebC++\u30c4\u30fc\u30eb",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/introduction/welcome.mdx",sourceDirName:"introduction",slug:"/introduction/welcome",permalink:"/4.21/ja/docs/introduction/welcome",draft:!1,tags:[],version:"current",frontMatter:{id:"welcome",title:"TouchGFX\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",sidebar_label:"Welcome",description:"TouchGFX\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\xb7\u30b5\u30a4\u30c8 - \u7d44\u8fbc\u307f\u30bf\u30c3\u30c1\xb7\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3067\u304d\u308b\u3001\u4f7f\u3044\u3084\u3059\u3044\u30b0\u30e9\u30d5\u30a3\u30ab\u30ebC++\u30c4\u30fc\u30eb"},sidebar:"docs",previous:{title:"Introduction",permalink:"/4.21/ja/docs/category/introduction"},next:{title:"TouchGFX\u3068\u306f",permalink:"/4.21/ja/docs/introduction/what-is-touchgfx"}},g={},w=[{value:"\u672c\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u3064\u3044\u3066",id:"about-this-documentation",level:2},{value:"\u5bfe\u8c61\u30e6\u30fc\u30b6",id:"target-user",level:3}],v={toc:w};function O(e){var t,r=e,{components:i}=r,f=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},v),f),u(t,l({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u672c\u30b5\u30a4\u30c8\u3067\u306f\u3001TouchGFX\u30c4\u30fc\u30eb\u304a\u3088\u3073\u4f7f\u7528\u65b9\u6cd5\u3092\u3054\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,n.kt)(a.Z,{url:"https://youtu.be/t0SlRZnERms",mdxType:"YouTube"}),(0,n.kt)("p",null,"TouchGFX\u3092\u521d\u3081\u3066\u4f7f\u7528\u3059\u308b\u5834\u5408\u306b\u306f\u3001\u672c\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u4e8b\u524d\u306b\u3054\u78ba\u8a8d\u3044\u305f\u3060\u304d\u6982\u8981\u3092\u628a\u63e1\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002 \u5de6\u30b5\u30a4\u30c9\u306e\u76ee\u6b21\u3092\u4f7f\u7528\u3057\u3066\u3001\u3054\u95a2\u5fc3\u306e\u3042\u308b\u30c8\u30d4\u30c3\u30af\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u7c21\u5358\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002 \u53f3\u4e0a\u9685\u306b\u3042\u308b\u691c\u7d22\u6a5f\u80fd\u3082\u3054\u4f7f\u7528\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",d({},{id:"about-this-documentation"}),"\u672c\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u3064\u3044\u3066"),(0,n.kt)("p",null,"\u672c\u30b5\u30a4\u30c8\u306f\u6b21\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u69cb\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"what-is-touchgfx"}),(0,n.kt)("strong",{parentName:"a"},"\u306f\u3058\u3081\u306b")),"\uff1aTouchGFX\u3068\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff65\u30ac\u30a4\u30c9\u306e\u6982\u8981"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"../basic-concepts/embedded-graphics"}),(0,n.kt)("strong",{parentName:"a"},"\u57fa\u672c\u6982\u5ff5")),"\uff1a\u4e3b\u8981\u306a\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u6982\u5ff5"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"../development/development-introduction"}),(0,n.kt)("strong",{parentName:"a"},"\u958b\u767a")),"\uff1a\u69cb\u9020\u3084\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3001\u30c4\u30fc\u30eb\u3092\u542b\u3080TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u65b9\u6cd5"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"../tutorials/tutorial-01"}),(0,n.kt)("strong",{parentName:"a"},"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb")),"\uff1aTouchGFX\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb")),(0,n.kt)(c.Z,{imageSource:"/img/introduction/welcome/frontpage-4.17.webp",noShadow:"true",mdxType:"Figure"}),(0,n.kt)("h3",d({},{id:"target-user"}),"\u5bfe\u8c61\u30e6\u30fc\u30b6"),(0,n.kt)("p",null,"TouchGFX\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u3001C++\u304a\u3088\u3073STM32\u4e0a\u306e\u7d44\u8fbc\u307fGUI\u958b\u767a\u306b\u95a2\u3059\u308b\u57fa\u672c\u7684\u306a\u6280\u80fd\u3092\u6301\u3064\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u958b\u767a\u8005\u3092\u5bfe\u8c61\u3068\u3057\u3066\u3044\u307e\u3059\u3002 \u7d44\u8fbc\u307fGUI\u958b\u767a\u306e\u521d\u5fc3\u8005\u306e\u65b9\u5411\u3051\u306b\u3001\u300c\u57fa\u672c\u6982\u5ff5\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u307e\u305f\u3001TouchGFX\u306e\u958b\u767a\u306b\u304a\u3044\u3066\u8ab0\u3082\u304c\u5186\u6ed1\u306b\u5b66\u7fd2\u3067\u304d\u308b\u3088\u3046\u306b\u3001\u6bb5\u968e\u3092\u8ffd\u3063\u305f\u30ac\u30a4\u30c9\u3084\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u7528\u610f\u3057\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u3088\u308a\u826f\u3044\u958b\u767a\u30c4\u30fc\u30eb\u3084\u30b5\u30fc\u30d3\u30b9\u3092\u3054\u63d0\u4f9b\u3067\u304d\u308b\u3088\u3046\u306b\u3001\u5f0a\u793e\u3067\u306f\u672c\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u6539\u5584\u3092\u5b9f\u65bd\u3057\u3066\u3044\u307e\u3059\u3002 \u7406\u89e3\u3067\u304d\u306a\u3044\u5834\u5408\u3001\u3042\u308b\u3044\u306f\u63a2\u3057\u3066\u3044\u308b\u5185\u5bb9\u304c\u672c\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306f\u3001",(0,n.kt)(o.Z,{to:"https://community.st.com/s/topic/0TO0X0000003iw6WAA/touchgfx",target:"_blank",mdxType:"Link"},"\u30d5\u30a9\u30fc\u30e9\u30e0"),"\u3067\u304a\u77e5\u3089\u305b\u304f\u3060\u3055\u3044\u3002\u672c\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u6539\u5584\u306b\u7e4b\u3052\u307e\u3059\u3002"))}O.isMDXComponent=!0}}]);