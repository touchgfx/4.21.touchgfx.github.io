"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7478],{3905:function(t,n,a){a.d(n,{Zo:function(){return m},kt:function(){return g}});var e=a(67294);function l(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function r(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}function i(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}function p(t,n){if(null==t)return{};var a,e,l=function(t,n){if(null==t)return{};var a,e,l={},r=Object.keys(t);for(e=0;e<r.length;e++)a=r[e],n.indexOf(a)>=0||(l[a]=t[a]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)a=r[e],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=e.createContext({}),d=function(t){var n=e.useContext(o),a=n;return t&&(a="function"==typeof t?t(n):i(i({},n),t)),a},m=function(t){var n=d(t.components);return e.createElement(o.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},k=e.forwardRef((function(t,n){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(a),g=l,N=k["".concat(o,".").concat(g)]||k[g]||u[g]||r;return a?e.createElement(N,i(i({ref:n},m),{},{components:a})):e.createElement(N,i({ref:n},m))}));function g(t,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=k;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var d=2;d<r;d++)i[d]=a[d];return e.createElement.apply(null,i)}return e.createElement.apply(null,a)}k.displayName="MDXCreateElement"},43861:function(t,n,a){var e=a(67294);class l extends e.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return e.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}n.Z=l},57540:function(t,n,a){a.r(n),a.d(n,{assets:function(){return h},contentTitle:function(){return c},default:function(){return _},frontMatter:function(){return N},metadata:function(){return s},toc:function(){return b}});var e=a(3905),l=a(39130),r=a(43861),i=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,k=(t,n,a)=>n in t?i(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,g=(t,n)=>{for(var a in n||(n={}))m.call(n,a)&&k(t,a,n[a]);if(d)for(var a of d(n))u.call(n,a)&&k(t,a,n[a]);return t};const N={title:"Globals"},c=void 0,s={unversionedId:"api/namespacetouchgfx_1_1paint_1_1rgb565",id:"api/namespacetouchgfx_1_1paint_1_1rgb565",title:"Globals",description:"",source:"@site/docs/api/namespacetouchgfx_1_1paint_1_1rgb565.mdx",sourceDirName:"api",slug:"/api/namespacetouchgfx_1_1paint_1_1rgb565",permalink:"/4.21/ja/docs/api/namespacetouchgfx_1_1paint_1_1rgb565",draft:!1,tags:[],version:"current",frontMatter:{title:"Globals"}},h={},b=[{value:"Functions",id:"functions",level:2},{value:"alphaBlend",id:"alphablend",level:3},{value:"alphaBlend",id:"alphablend-1",level:3},{value:"getNativeColor",id:"getnativecolor",level:3},{value:"lineFromARGB8888",id:"linefromargb8888",level:3},{value:"lineFromColor",id:"linefromcolor",level:3},{value:"lineFromL8ARGB8888",id:"linefroml8argb8888",level:3},{value:"lineFromL8RGB888",id:"linefroml8rgb888",level:3},{value:"lineFromRGB565",id:"linefromrgb565",level:3}],f={toc:b};function _(t){var n,a=t,{components:i}=a,k=((t,n)=>{var a={};for(var e in t)m.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(null!=t&&d)for(var e of d(t))n.indexOf(e)<0&&u.call(t,e)&&(a[e]=t[e]);return a})(a,["components"]);return(0,e.kt)("wrapper",(n=g(g({},f),k),p(n,o({components:i,mdxType:"MDXLayout"}))),(0,e.kt)("p",null,"The global touchgfx namespace.",(0,e.kt)("br",null),"\nAll TouchGFX framework enums, Type definitions, global functions and global variables are placed in this namespace."),(0,e.kt)("h2",g({},{id:"functions"}),"Functions"),(0,e.kt)(r.Z,{url:"namespacetouchgfx_1_1paint_1_1rgb565#function-alphablend",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",g({},{id:"alphablend"}),"alphaBlend"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null}),"FORCE_INLINE_FUNCTION uint16_t","\xa0",(0,e.kt)(l.Z,{to:"namespacetouchgfx_1_1paint_1_1rgb565#function-alphablend",mdxType:"Link"},"alphaBlend")),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"uint16_t"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"newpix ,"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"uint16_t"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"bufpix ,"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"uint8_t"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"alpha"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,"Mix colors from a new pixel and a buffer pixel with the given alpha applied to the new pixel, and the inverse alpha applied to the buffer pixel. "),(0,e.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,e.kt)("div",{class:"api-content-indented",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null}),"newpix"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"The new pixel value.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null}),"bufpix"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"The buffer pixel value.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null}),"alpha"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"The alpha to apply to the new pixel."))))),(0,e.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,e.kt)("div",{class:"api-content-indented",markdown:"1"},(0,e.kt)("p",null,"The result of blending the two colors into a new color. ")),(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"Location:")," ",(0,e.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/PaintRGB565Impl.hpp")))),(0,e.kt)(r.Z,{url:"namespacetouchgfx_1_1paint_1_1rgb565#function-alphablend",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",g({},{id:"alphablend-1"}),"alphaBlend"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null}),"FORCE_INLINE_FUNCTION uint16_t","\xa0",(0,e.kt)(l.Z,{to:"namespacetouchgfx_1_1paint_1_1rgb565#function-alphablend",mdxType:"Link"},"alphaBlend")),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"uint16_t"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"R ,"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"uint16_t"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"G ,"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"uint16_t"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"B ,"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"uint16_t"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"bufpix ,"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"uint8_t"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"alpha"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,"Mix colors from a new pixel and a buffer pixel with the given alpha applied to the new pixel, and the inverse alpha applied to the buffer pixel. "),(0,e.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,e.kt)("div",{class:"api-content-indented",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null}),"R"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"The red color (0-31 shifted into RMASK).")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null}),"G"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"The green color (0-63 shifted into GMASK).")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null}),"B"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"The blue color (0-31 shifted into BMASK).")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null}),"bufpix"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"The buffer pixel value.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null}),"alpha"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"The alpha of the R,G,B."))))),(0,e.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,e.kt)("div",{class:"api-content-indented",markdown:"1"},(0,e.kt)("p",null,"The result of blending the two colors into a new color. ")),(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"Location:")," ",(0,e.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/PaintRGB565Impl.hpp")))),(0,e.kt)(r.Z,{url:"namespacetouchgfx_1_1paint_1_1rgb565#function-getnativecolor",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",g({},{id:"getnativecolor"}),"getNativeColor"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null}),"FORCE_INLINE_FUNCTION uint16_t","\xa0",(0,e.kt)(l.Z,{to:"namespacetouchgfx_1_1paint_1_1rgb565#function-getnativecolor",mdxType:"Link"},"getNativeColor")),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",g({parentName:"tr"},{align:null}),(0,e.kt)("a",g({parentName:"td"},{href:"classes/structtouchgfx_1_1colortype"}),"colortype")),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"color"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,"Generates a color representation to be used on the ",(0,e.kt)("a",g({parentName:"p"},{href:"classes/classtouchgfx_1_1_l_c_d"}),"LCD"),", based on 24 bit RGB values. "),(0,e.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,e.kt)("div",{class:"api-content-indented",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null}),"color"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"The color."))))),(0,e.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,e.kt)("div",{class:"api-content-indented",markdown:"1"},(0,e.kt)("p",null,"The color representation depending on ",(0,e.kt)("a",g({parentName:"p"},{href:"classes/classtouchgfx_1_1_l_c_d"}),"LCD")," color format. ")),(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"Location:")," ",(0,e.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/PaintRGB565Impl.hpp")))),(0,e.kt)(r.Z,{url:"namespacetouchgfx_1_1paint_1_1rgb565#function-linefromargb8888",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",g({},{id:"linefromargb8888"}),"lineFromARGB8888"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null}),"void","\xa0",(0,e.kt)(l.Z,{to:"namespacetouchgfx_1_1paint_1_1rgb565#function-linefromargb8888",mdxType:"Link"},"lineFromARGB8888")),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"uint16_t *const"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"ptr ,"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"const uint32_t *const"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"data ,"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"const unsigned"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"count ,"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"const uint8_t"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"alpha"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"Location:")," ",(0,e.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/PaintRGB565Impl.hpp")))),(0,e.kt)(r.Z,{url:"namespacetouchgfx_1_1paint_1_1rgb565#function-linefromcolor",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",g({},{id:"linefromcolor"}),"lineFromColor"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null}),"void","\xa0",(0,e.kt)(l.Z,{to:"namespacetouchgfx_1_1paint_1_1rgb565#function-linefromcolor",mdxType:"Link"},"lineFromColor")),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"uint16_t *const"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"ptr ,"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"const unsigned"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"count ,"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"const uint32_t"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"color ,"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"const uint8_t"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"alpha ,"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"const uint32_t"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"color565"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"Location:")," ",(0,e.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/PaintRGB565Impl.hpp")))),(0,e.kt)(r.Z,{url:"namespacetouchgfx_1_1paint_1_1rgb565#function-linefroml8argb8888",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",g({},{id:"linefroml8argb8888"}),"lineFromL8ARGB8888"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null}),"void","\xa0",(0,e.kt)(l.Z,{to:"namespacetouchgfx_1_1paint_1_1rgb565#function-linefroml8argb8888",mdxType:"Link"},"lineFromL8ARGB8888")),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"uint16_t *const"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"ptr ,"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"const uint8_t *const"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"data ,"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"const unsigned"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"count ,"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"const uint8_t"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"alpha"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"Location:")," ",(0,e.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/PaintRGB565Impl.hpp")))),(0,e.kt)(r.Z,{url:"namespacetouchgfx_1_1paint_1_1rgb565#function-linefroml8rgb888",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",g({},{id:"linefroml8rgb888"}),"lineFromL8RGB888"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null}),"void","\xa0",(0,e.kt)(l.Z,{to:"namespacetouchgfx_1_1paint_1_1rgb565#function-linefroml8rgb888",mdxType:"Link"},"lineFromL8RGB888")),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"uint16_t *const"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"ptr ,"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"const uint8_t *const"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"data ,"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"const unsigned"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"count ,"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"const uint8_t"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"alpha"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"Location:")," ",(0,e.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/PaintRGB565Impl.hpp")))),(0,e.kt)(r.Z,{url:"namespacetouchgfx_1_1paint_1_1rgb565#function-linefromrgb565",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",g({},{id:"linefromrgb565"}),"lineFromRGB565"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})),(0,e.kt)("th",g({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null}),"void","\xa0",(0,e.kt)(l.Z,{to:"namespacetouchgfx_1_1paint_1_1rgb565#function-linefromrgb565",mdxType:"Link"},"lineFromRGB565")),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"uint16_t *const"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"ptr ,"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"const uint16_t *const"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"data ,"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"const unsigned"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"count ,"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"const uint8_t"),(0,e.kt)("td",g({parentName:"tr"},{align:null}),"alpha"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})),(0,e.kt)("td",g({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"Location:")," ",(0,e.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/PaintRGB565Impl.hpp")))))}_.isMDXComponent=!0}}]);