"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2948],{3905:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return k}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),u=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=u(t.components);return a.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),p=u(r),k=n,h=p["".concat(c,".").concat(k)]||p[k]||s[k]||i;return r?a.createElement(h,o(o({ref:e},d),{},{components:r})):a.createElement(h,o({ref:e},d))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},43861:function(t,e,r){var a=r(67294);class n extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=n},35738:function(t,e,r){r.r(e),r.d(e,{assets:function(){return g},contentTitle:function(){return m},default:function(){return _},frontMatter:function(){return h},metadata:function(){return f},toc:function(){return b}});var a=r(3905),n=r(39130),i=r(43861),o=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(t,e,r)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,k=(t,e)=>{for(var r in e||(e={}))d.call(e,r)&&p(t,r,e[r]);if(u)for(var r of u(e))s.call(e,r)&&p(t,r,e[r]);return t};const h={title:"TextureSurface"},m=void 0,f={unversionedId:"api/classes/structtouchgfx_1_1_texture_surface",id:"api/classes/structtouchgfx_1_1_texture_surface",title:"TextureSurface",description:"",source:"@site/docs/api/classes/structtouchgfx_1_1_texture_surface.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_texture_surface",permalink:"/4.21/docs/api/classes/structtouchgfx_1_1_texture_surface",draft:!1,tags:[],version:"current",frontMatter:{title:"TextureSurface"},sidebar:"docs",previous:{title:"TextureMapper",permalink:"/4.21/docs/api/classes/classtouchgfx_1_1_texture_mapper"},next:{title:"TiledImage",permalink:"/4.21/docs/api/classes/classtouchgfx_1_1_tiled_image"}},g={},b=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"data",id:"data",level:3},{value:"extraData",id:"extradata",level:3},{value:"height",id:"height",level:3},{value:"stride",id:"stride",level:3},{value:"width",id:"width",level:3}],x={toc:b};function _(t){var e,r=t,{components:o}=r,p=((t,e)=>{var r={};for(var a in t)d.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&u)for(var a of u(t))e.indexOf(a)<0&&s.call(t,a)&&(r[a]=t[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(e=k(k({},x),p),l(e,c({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," A texture source.\nContains a pointer to the data and the width and height of the texture. The alpha channel is used in 565 rendering with alpha. The stride is the width used when moving to the next line of the texture. "),(0,a.kt)("h2",k({},{id:"public-attributes"}),"Public Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:"right"})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"const uint16_t *"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_texture_surface#variable-data",mdxType:"Link"},"data")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The pixel bits or indexes for color in CLUT entries.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"const uint8_t *"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_texture_surface#variable-extradata",mdxType:"Link"},"extraData")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The alpha channel or clut data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"int32_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_texture_surface#variable-height",mdxType:"Link"},"height")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The height.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"int32_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_texture_surface#variable-stride",mdxType:"Link"},"stride")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The stride.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"int32_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_texture_surface#variable-width",mdxType:"Link"},"width")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The width.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",k({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_texture_surface#variable-data",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"data"}),"data"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"const uint16_t * data ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The pixel bits or indexes for color in CLUT entries. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_texture_surface#variable-extradata",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"extradata"}),"extraData"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"const uint8_t * extraData ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The alpha channel or clut data. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_texture_surface#variable-height",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"height"}),"height"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"int32_t height ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The height. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_texture_surface#variable-stride",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"stride"}),"stride"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"int32_t stride ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The stride. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_texture_surface#variable-width",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"width"}),"width"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"int32_t width ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The width. "))))}_.isMDXComponent=!0}}]);