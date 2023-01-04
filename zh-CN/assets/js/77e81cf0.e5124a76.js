"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8770],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return u}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=d(a),u=n,m=s["".concat(p,".").concat(u)]||s[u]||k[u]||i;return a?r.createElement(m,o(o({ref:e},c),{},{components:a})):r.createElement(m,o({ref:e},c))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},43861:function(t,e,a){var r=a(67294);class n extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=n},38483:function(t,e,a){a.r(e),a.d(e,{assets:function(){return b},contentTitle:function(){return g},default:function(){return N},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return _}});var r=a(3905),n=a(39130),i=a(43861),o=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,s=(t,e,a)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,u=(t,e)=>{for(var a in e||(e={}))c.call(e,a)&&s(t,a,e[a]);if(d)for(var a of d(e))k.call(e,a)&&s(t,a,e[a]);return t};const m={title:"BlitOp"},g=void 0,h={unversionedId:"api/classes/structtouchgfx_1_1_blit_op",id:"api/classes/structtouchgfx_1_1_blit_op",title:"BlitOp",description:"",source:"@site/docs/api/classes/structtouchgfx_1_1_blit_op.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_blit_op",permalink:"/4.21/zh-CN/docs/api/classes/structtouchgfx_1_1_blit_op",draft:!1,tags:[],version:"current",frontMatter:{title:"BlitOp"},sidebar:"docs",previous:{title:"BitmapData",permalink:"/4.21/zh-CN/docs/api/classes/structtouchgfx_1_1_bitmap_1_1_bitmap_data"},next:{title:"BlockTransition",permalink:"/4.21/zh-CN/docs/api/classes/classtouchgfx_1_1_block_transition"}},b={},_=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"alpha",id:"alpha",level:3},{value:"color",id:"color",level:3},{value:"dstFormat",id:"dstformat",level:3},{value:"dstLoopStride",id:"dstloopstride",level:3},{value:"nLoops",id:"nloops",level:3},{value:"nSteps",id:"nsteps",level:3},{value:"operation",id:"operation",level:3},{value:"pClut",id:"pclut",level:3},{value:"pDst",id:"pdst",level:3},{value:"pSrc",id:"psrc",level:3},{value:"replaceBgAlpha",id:"replacebgalpha",level:3},{value:"replaceFgAlpha",id:"replacefgalpha",level:3},{value:"srcFormat",id:"srcformat",level:3},{value:"srcLoopStride",id:"srcloopstride",level:3}],v={toc:_};function N(t){var e,a=t,{components:o}=a,s=((t,e)=>{var a={};for(var r in t)c.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&d)for(var r of d(t))e.indexOf(r)<0&&k.call(t,r)&&(a[r]=t[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(e=u(u({},v),s),l(e,p({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/BlitOp.hpp")),(0,r.kt)("p",null,"BlitOp instances carry the required information for performing operations on the LCD (framebuffer) using DMA. "),(0,r.kt)("h2",u({},{id:"public-attributes"}),"Public Attributes"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:"right"})),(0,r.kt)("th",u({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"uint8_t"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-alpha",mdxType:"Link"},"alpha")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"The alpha to use.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),(0,r.kt)("a",u({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-color",mdxType:"Link"},"color")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Color to fill.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"uint8_t"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-dstformat",mdxType:"Link"},"dstFormat")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"The destination format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"uint16_t"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-dstloopstride",mdxType:"Link"},"dstLoopStride")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"The number of bytes to stride the destination after every loop.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"uint16_t"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-nloops",mdxType:"Link"},"nLoops")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"The number of lines.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"uint16_t"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-nsteps",mdxType:"Link"},"nSteps")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"The number of pixels in a line.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"uint32_t"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-operation",mdxType:"Link"},"operation")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"The operation to perform.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"const uint8_t *"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-pclut",mdxType:"Link"},"pClut")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Pointer to the source CLUT entires.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"uint16_t *"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-pdst",mdxType:"Link"},"pDst")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Pointer to the destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"const uint16_t *"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-psrc",mdxType:"Link"},"pSrc")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Pointer to the source (pixels or indexes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"bool"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-replacebgalpha",mdxType:"Link"},"replaceBgAlpha")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Replace the background per pixel alpha value with 255 = solid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"bool"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-replacefgalpha",mdxType:"Link"},"replaceFgAlpha")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Replace the fourground per pixel alpha value with 255 = solid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"uint8_t"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-srcformat",mdxType:"Link"},"srcFormat")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"The source format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"uint16_t"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-srcloopstride",mdxType:"Link"},"srcLoopStride")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"The number of bytes to stride the source after every loop.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"right"})),(0,r.kt)("td",u({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",u({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-alpha",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",u({},{id:"alpha"}),"alpha"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint8_t alpha ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The alpha to use. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-color",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",u({},{id:"color"}),"color"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"structtouchgfx_1_1colortype"}),"colortype")," color ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Color to fill. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-dstformat",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",u({},{id:"dstformat"}),"dstFormat"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint8_t dstFormat ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The destination format. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-dstloopstride",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",u({},{id:"dstloopstride"}),"dstLoopStride"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint16_t dstLoopStride ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The number of bytes to stride the destination after every loop. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-nloops",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",u({},{id:"nloops"}),"nLoops"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint16_t nLoops ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The number of lines. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-nsteps",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",u({},{id:"nsteps"}),"nSteps"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint16_t nSteps ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The number of pixels in a line. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-operation",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",u({},{id:"operation"}),"operation"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint32_t operation ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The operation to perform. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-pclut",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",u({},{id:"pclut"}),"pClut"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint8_t * pClut ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Pointer to the source CLUT entires. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-pdst",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",u({},{id:"pdst"}),"pDst"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint16_t * pDst ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Pointer to the destination. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-psrc",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",u({},{id:"psrc"}),"pSrc"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t * pSrc ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Pointer to the source (pixels or indexes) "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-replacebgalpha",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",u({},{id:"replacebgalpha"}),"replaceBgAlpha"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"bool replaceBgAlpha ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Replace the background per pixel alpha value with 255 = solid. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-replacefgalpha",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",u({},{id:"replacefgalpha"}),"replaceFgAlpha"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"bool replaceFgAlpha ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Replace the fourground per pixel alpha value with 255 = solid. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-srcformat",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",u({},{id:"srcformat"}),"srcFormat"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint8_t srcFormat ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The source format. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-srcloopstride",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",u({},{id:"srcloopstride"}),"srcLoopStride"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint16_t srcLoopStride ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The number of bytes to stride the source after every loop. "))))}N.isMDXComponent=!0}}]);