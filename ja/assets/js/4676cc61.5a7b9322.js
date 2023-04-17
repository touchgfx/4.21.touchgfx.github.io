"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[909],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88678:function(e,t,r){var n=r(67294);class o extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},93054:function(e,t,r){var n=r(67294),o=r(88678);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class c extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}t.Z=c},84541:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(67294),o=r(86010),i=r(99492),c=r(39130),a=r(35096),l=r(33084),u="cardContainer_fWXF",s="cardTitle_rnsV",p="cardDescription_PWke";function f({href:e,children:t}){return n.createElement(c.Z,{href:e,className:(0,o.Z)("card padding--lg",u)},t)}function d({href:e,icon:t,title:r,description:i}){return n.createElement(f,{href:e},n.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:r},t," ",r),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",p),title:i},i))}function m({item:e}){const t=(0,i.Wl)(e);return t?n.createElement(d,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function h({item:e}){var t;const r=(0,a.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(d,{href:e.href,icon:r,title:e.label,description:null==o?void 0:o.description})}function g({item:e}){switch(e.type){case"link":return n.createElement(h,{item:e});case"category":return n.createElement(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function y({items:e,className:t}){return n.createElement("section",{className:(0,o.Z)("row",t)},function(e){return e.filter((e=>"category"!==e.type||!!(0,i.Wl)(e)))}(e).map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},67774:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return h},metadata:function(){return y},toc:function(){return b}});var n=r(3905),o=r(93054),i=r(84541),c=r(99492),a=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))f.call(t,r)&&d(e,r,t[r]);return e};const h={id:"tutorial-06-introduction",title:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb6: TextArea\u306e\u4f7f\u7528"},g=void 0,y={unversionedId:"tutorials/tutorial-06/tutorial-06-introduction",id:"tutorials/tutorial-06/tutorial-06-introduction",title:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb6: TextArea\u306e\u4f7f\u7528",description:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001TextArea\u306e\u9ad8\u5ea6\u306a\u4f7f\u7528\u65b9\u6cd5\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3059\u3002 \u30c6\u30ad\u30b9\u30c8\u3092\u8907\u6570\u306e\u8a00\u8a9e\u3068\u3055\u307e\u3056\u307e\u306a\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u3067\u8868\u793a\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u307e\u305f\u3001\u30c6\u30ad\u30b9\u30c8\u306e\u898b\u305f\u76ee\u3092\u5909\u66f4\u3059\u308b\u65b9\u6cd5\u3084\u3001TouchGFX Designer\u3084\u30b3\u30fc\u30c9\u3092\u4ecb\u3057\u3066\u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u3082\u5b66\u3073\u307e\u3059\u3002 \u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\u5185\u5bb9\u3092\u3088\u308a\u3088\u304f\u7406\u89e3\u3059\u308b\u305f\u3081\u3001\u524d\u3082\u3063\u3066\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb2\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/tutorial-06/tutorial-06-introduction.mdx",sourceDirName:"tutorials/tutorial-06",slug:"/tutorials/tutorial-06/tutorial-06-introduction",permalink:"/4.21/ja/docs/tutorials/tutorial-06/tutorial-06-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-06-introduction",title:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb6: TextArea\u306e\u4f7f\u7528"},sidebar:"docs",previous:{title:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb5: \u30ab\u30b9\u30bf\u30e0\uff65\u30c8\u30ea\u30ac\u3068\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u4f5c\u6210",permalink:"/4.21/ja/docs/tutorials/tutorial-05"},next:{title:"\u30d1\u30fc\u30c81 - \u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u3068\u8a00\u8a9e",permalink:"/4.21/ja/docs/tutorials/tutorial-06/tutorial-06-part-1"}},v={},b=[],O={toc:b};function w(e){var t,r=e,{components:a}=r,d=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&f.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},O),d),l(t,u({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001TextArea\u306e\u9ad8\u5ea6\u306a\u4f7f\u7528\u65b9\u6cd5\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3059\u3002 \u30c6\u30ad\u30b9\u30c8\u3092\u8907\u6570\u306e\u8a00\u8a9e\u3068\u3055\u307e\u3056\u307e\u306a\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u3067\u8868\u793a\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u307e\u305f\u3001\u30c6\u30ad\u30b9\u30c8\u306e\u898b\u305f\u76ee\u3092\u5909\u66f4\u3059\u308b\u65b9\u6cd5\u3084\u3001TouchGFX Designer\u3084\u30b3\u30fc\u30c9\u3092\u4ecb\u3057\u3066\u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u3082\u5b66\u3073\u307e\u3059\u3002 \u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\u5185\u5bb9\u3092\u3088\u308a\u3088\u304f\u7406\u89e3\u3059\u308b\u305f\u3081\u3001\u524d\u3082\u3063\u3066",(0,n.kt)("a",m({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/tutorials/tutorial-02"}),"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb2"),"\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306f2\u3064\u306e\u30d1\u30fc\u30c8\u306b\u5206\u304b\u308c\u3066\u3044\u307e\u3059\u3002 \u6700\u521d\u306e\u30d1\u30fc\u30c8\u3067\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u3092\u8ffd\u52a0\u3057\u3001\u305d\u308c\u3089\u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3059\u3002 \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u3067\u7570\u306a\u308b\u8a00\u8a9e\u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u3082\u5b66\u3073\u307e\u3059\u3002 2\u3064\u76ee\u306e\u30d1\u30fc\u30c8\u3067\u306f\u3001TextArea\u306e\u5916\u89b3\u306e\u7ba1\u7406\u65b9\u6cd5\u3084\u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u306e\u4f7f\u7528\u65b9\u6cd5\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3059\u3002"),(0,n.kt)(o.Z,{mdxType:"Note"},"\u30d1\u30fc\u30c82\u3092\u5b9f\u884c\u3059\u308b\u524d\u306b\u30d1\u30fc\u30c81\u3092\u5b8c\u4e86\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30d1\u30fc\u30c82\u306f\u30d1\u30fc\u30c81\u306e\u7d9a\u304d\u3060\u304b\u3089\u3067\u3059\u3002"),(0,n.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}w.isMDXComponent=!0}}]);