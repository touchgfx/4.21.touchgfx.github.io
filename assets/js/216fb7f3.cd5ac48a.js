"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[512],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return f}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),p=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=p(n),f=r,m=s["".concat(c,".").concat(f)]||s[f]||u[f]||o;return n?a.createElement(m,l(l({ref:e},d),{},{components:n})):a.createElement(m,l({ref:e},d))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},43861:function(t,e,n){var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},96842:function(t,e,n){n.r(e),n.d(e,{assets:function(){return h},contentTitle:function(){return k},default:function(){return b},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return v}});var a=n(3905),r=n(39130),o=n(43861),l=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(t,e,n)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,f=(t,e)=>{for(var n in e||(e={}))d.call(e,n)&&s(t,n,e[n]);if(p)for(var n of p(e))u.call(e,n)&&s(t,n,e[n]);return t};const m={title:"FontProvider"},k=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_font_provider",id:"api/classes/classtouchgfx_1_1_font_provider",title:"FontProvider",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_font_provider.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_font_provider",permalink:"/4.21/docs/api/classes/classtouchgfx_1_1_font_provider",draft:!1,tags:[],version:"current",frontMatter:{title:"FontProvider"},sidebar:"docs",previous:{title:"FontManager",permalink:"/4.21/docs/api/classes/classtouchgfx_1_1_font_manager"},next:{title:"FrameBufferAllocator",permalink:"/4.21/docs/api/classes/classtouchgfx_1_1_frame_buffer_allocator"}},h={},v=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"getFont",id:"getfont",level:3},{value:"~FontProvider",id:"fontprovider",level:3}],N={toc:v};function b(t){var e,n=t,{components:l}=n,s=((t,e)=>{var n={};for(var a in t)d.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&p)for(var a of p(t))e.indexOf(a)<0&&u.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=f(f({},N),s),i(e,c({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," A generic pure virtual definition of a FontProvider, which is a class capable of returning a ",(0,a.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_font"}),"Font")," based on a FontId.\nAn application-specific derivation of this class must be implemented. "),(0,a.kt)("h2",f({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:"right"})),(0,a.kt)("th",f({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"}),"virtual","\xa0",(0,a.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_font"}),"Font")," *"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_font_provider#function-getfont",mdxType:"Link"},"getFont")),"(",(0,a.kt)("a",f({parentName:"td"},{href:"../namespacetouchgfx#typedef-fontid"}),"FontId")," fontId) =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"})),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Gets a ",(0,a.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_font"}),"Font"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"})),(0,a.kt)("td",f({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_font_provider#function-~fontprovider",mdxType:"Link"},"~FontProvider")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"})),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,a.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_font_provider"}),"FontProvider")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"})),(0,a.kt)("td",f({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",f({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(o.Z,{url:"classtouchgfx_1_1_font_provider#function-getfont",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",f({},{id:"getfont"}),"getFont"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null})),(0,a.kt)("th",f({parentName:"tr"},{align:null})),(0,a.kt)("th",f({parentName:"tr"},{align:null})),(0,a.kt)("th",f({parentName:"tr"},{align:null})),(0,a.kt)("th",f({parentName:"tr"},{align:null})),(0,a.kt)("th",f({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),"virtual","\xa0","Font *","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_font_provider#function-getfont",mdxType:"Link"},"getFont")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("a",f({parentName:"td"},{href:"../namespacetouchgfx#typedef-fontid"}),"FontId")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"fontId"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",f({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null})),(0,a.kt)("td",f({parentName:"tr"},{align:null})),(0,a.kt)("td",f({parentName:"tr"},{align:null})),(0,a.kt)("td",f({parentName:"tr"},{align:null})),(0,a.kt)("td",f({parentName:"tr"},{align:null})),(0,a.kt)("td",f({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets a ",(0,a.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_font"}),"Font"),". "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null})),(0,a.kt)("th",f({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),"fontId"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"The FontId of the font to get."))))),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The font with a font id of fontId. ")))),(0,a.kt)(o.Z,{url:"classtouchgfx_1_1_font_provider#function-~fontprovider",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",f({},{id:"fontprovider"}),"~FontProvider"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null})),(0,a.kt)("th",f({parentName:"tr"},{align:null})),(0,a.kt)("th",f({parentName:"tr"},{align:null})),(0,a.kt)("th",f({parentName:"tr"},{align:null})),(0,a.kt)("th",f({parentName:"tr"},{align:null})),(0,a.kt)("th",f({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),"virtual","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_font_provider#function-~fontprovider",mdxType:"Link"},"~FontProvider")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",f({parentName:"tr"},{align:null})),(0,a.kt)("td",f({parentName:"tr"},{align:null})),(0,a.kt)("td",f({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",f({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Finalizes an instance of the ",(0,a.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_font_provider"}),"FontProvider")," class. "))))}b.isMDXComponent=!0}}]);