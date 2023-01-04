"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4251],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),k=p(n),c=r,m=k["".concat(o,".").concat(c)]||k[c]||g[c]||l;return n?a.createElement(m,i(i({ref:e},u),{},{components:n})):a.createElement(m,i({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},43861:function(t,e,n){var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},16170:function(t,e,n){n.r(e),n.d(e,{assets:function(){return h},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return m},metadata:function(){return N},toc:function(){return b}});var a=n(3905),r=n(39130),l=n(43861),i=Object.defineProperty,d=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,k=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,c=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&k(t,n,e[n]);if(p)for(var n of p(e))g.call(e,n)&&k(t,n,e[n]);return t};const m={title:"DebugPrinter"},s=void 0,N={unversionedId:"api/classes/classtouchgfx_1_1_debug_printer",id:"api/classes/classtouchgfx_1_1_debug_printer",title:"DebugPrinter",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_debug_printer.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_debug_printer",permalink:"/4.21/ko/docs/api/classes/classtouchgfx_1_1_debug_printer",draft:!1,tags:[],version:"current",frontMatter:{title:"DebugPrinter"},sidebar:"docs",previous:{title:"CWRVectorRendererRGB888",permalink:"/4.21/ko/docs/api/classes/classtouchgfx_1_1_c_w_r_vector_renderer_r_g_b888"},next:{title:"DigitalClock",permalink:"/4.21/ko/docs/api/classes/classtouchgfx_1_1_digital_clock"}},h={},b=[{value:"Public Functions",id:"public-functions",level:2},{value:"Protected Functions",id:"protected-functions",level:2},{value:"Protected Attributes",id:"protected-attributes",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"DebugPrinter",id:"debugprinter",level:3},{value:"draw",id:"draw",level:3},{value:"getRegion",id:"getregion",level:3},{value:"setColor",id:"setcolor",level:3},{value:"setPosition",id:"setposition",level:3},{value:"setScale",id:"setscale",level:3},{value:"setString",id:"setstring",level:3},{value:"~DebugPrinter",id:"debugprinter-1",level:3},{value:"Protected Functions Documentation",id:"protected-functions-documentation",level:2},{value:"getGlyph",id:"getglyph",level:3},{value:"Protected Attributes Documentation",id:"protected-attributes-documentation",level:2},{value:"debugForegroundColor",id:"debugforegroundcolor",level:3},{value:"debugRegion",id:"debugregion",level:3},{value:"debugScale",id:"debugscale",level:3},{value:"debugString",id:"debugstring",level:3}],_={toc:b};function f(t){var e,n=t,{components:i}=n,k=((t,e)=>{var n={};for(var a in t)u.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&p)for(var a of p(t))e.indexOf(a)<0&&g.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=c(c({},_),k),d(e,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx/lcd/DebugPrinter.hpp")),(0,a.kt)("p",null,"The class DebugPrinter defines the interface for printing debug messages on top of the framebuffer. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherited by"),":  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_l_c_d16_debug_printer",mdxType:"Link"},"LCD16DebugPrinter"),",  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_l_c_d1_debug_printer",mdxType:"Link"},"LCD1DebugPrinter"),",  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_l_c_d24_debug_printer",mdxType:"Link"},"LCD24DebugPrinter"),",  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_l_c_d2_debug_printer",mdxType:"Link"},"LCD2DebugPrinter"),",  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_l_c_d32_debug_printer",mdxType:"Link"},"LCD32DebugPrinter"),",  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_l_c_d4_debug_printer",mdxType:"Link"},"LCD4DebugPrinter"),",  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_l_c_d8_debug_printer_base",mdxType:"Link"},"LCD8DebugPrinterBase")),(0,a.kt)("h2",c({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:"right"})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_debug_printer#function-debugprinter",mdxType:"Link"},"DebugPrinter")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_debug_printer"}),"DebugPrinter")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_debug_printer#function-draw",mdxType:"Link"},"draw")),"(const ",(0,a.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & rect) const =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Draws the debug string on top of the framebuffer content.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"}),"const ",(0,a.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_debug_printer#function-getregion",mdxType:"Link"},"getRegion")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Returns the region where the debug string is displayed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"}),"void"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_debug_printer#function-setcolor",mdxType:"Link"},"setColor")),"(",(0,a.kt)("a",c({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")," fg)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Sets the foreground color of the debug string.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"}),"void"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_debug_printer#function-setposition",mdxType:"Link"},"setPosition")),"(int16_t x, int16_t y, int16_t w, int16_t h)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Sets the position onscreen where the debug string will be displayed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"}),"void"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_debug_printer#function-setscale",mdxType:"Link"},"setScale")),"(uint8_t scale)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Sets the font scale of the debug string.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"}),"void"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_debug_printer#function-setstring",mdxType:"Link"},"setString")),"(const char * string)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Sets the debug string to be displayed on top of the framebuffer.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_debug_printer#function-~debugprinter",mdxType:"Link"},"~DebugPrinter")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,a.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_debug_printer"}),"DebugPrinter")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",c({},{id:"protected-functions"}),"Protected Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:"right"})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"}),"uint16_t"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_debug_printer#function-getglyph",mdxType:"Link"},"getGlyph")),"(uint8_t c) const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Gets a glyph (15 bits) arranged with 3 bits wide, 5 bits high in a single uint16_t value.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",c({},{id:"protected-attributes"}),"Protected Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:"right"})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"}),(0,a.kt)("a",c({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_debug_printer#variable-debugforegroundcolor",mdxType:"Link"},"debugForegroundColor")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Font color to use when displaying the debug string.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"}),(0,a.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_debug_printer#variable-debugregion",mdxType:"Link"},"debugRegion")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Region on screen where the debug message is displayed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"}),"uint8_t"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_debug_printer#variable-debugscale",mdxType:"Link"},"debugScale")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Font scaling factor to use when displaying the debug string.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"}),"const char *"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_debug_printer#variable-debugstring",mdxType:"Link"},"debugString")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Debug string to be displayed on screen.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"right"})),(0,a.kt)("td",c({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",c({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_debug_printer#function-debugprinter",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",c({},{id:"debugprinter"}),"DebugPrinter"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_debug_printer#function-debugprinter",mdxType:"Link"},"DebugPrinter")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",c({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes a new instance of the ",(0,a.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_debug_printer"}),"DebugPrinter")," class. "))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_debug_printer#function-draw",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",c({},{id:"draw"}),"draw"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_debug_printer#function-draw",mdxType:"Link"},"draw")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"const ",(0,a.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"rect"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Draws the debug string on top of the framebuffer content. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"rect"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"The rect to draw inside."))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_l_c_d16_debug_printer#function-draw",mdxType:"Link"},"touchgfx::LCD16DebugPrinter::draw"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_l_c_d1_debug_printer#function-draw",mdxType:"Link"},"touchgfx::LCD1DebugPrinter::draw"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_l_c_d24_debug_printer#function-draw",mdxType:"Link"},"touchgfx::LCD24DebugPrinter::draw"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_l_c_d2_debug_printer#function-draw",mdxType:"Link"},"touchgfx::LCD2DebugPrinter::draw"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_l_c_d32_debug_printer#function-draw",mdxType:"Link"},"touchgfx::LCD32DebugPrinter::draw"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_l_c_d4_debug_printer#function-draw",mdxType:"Link"},"touchgfx::LCD4DebugPrinter::draw"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_l_c_d8_a_b_g_r2222_debug_printer#function-draw",mdxType:"Link"},"touchgfx::LCD8ABGR2222DebugPrinter::draw"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_l_c_d8_a_r_g_b2222_debug_printer#function-draw",mdxType:"Link"},"touchgfx::LCD8ARGB2222DebugPrinter::draw"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_l_c_d8_b_g_r_a2222_debug_printer#function-draw",mdxType:"Link"},"touchgfx::LCD8BGRA2222DebugPrinter::draw"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_l_c_d8_r_g_b_a2222_debug_printer#function-draw",mdxType:"Link"},"touchgfx::LCD8RGBA2222DebugPrinter::draw")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_debug_printer#function-getregion",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",c({},{id:"getregion"}),"getRegion"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"const Rect &","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_debug_printer#function-getregion",mdxType:"Link"},"getRegion")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Returns the region where the debug string is displayed. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_rect"}),"Rect")," The debug string region. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_debug_printer#function-setcolor",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",c({},{id:"setcolor"}),"setColor"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_debug_printer#function-setcolor",mdxType:"Link"},"setColor")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("a",c({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"fg"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Sets the foreground color of the debug string. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"fg"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"The foreground color of the debug string."))))))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_debug_printer#function-setposition",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",c({},{id:"setposition"}),"setPosition"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_debug_printer#function-setposition",mdxType:"Link"},"setPosition")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"int16_t"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"x ,"),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"int16_t"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"y ,"),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"int16_t"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"w ,"),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"int16_t"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"h"),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Sets the position onscreen where the debug string will be displayed. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"x"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"The coordinate of the region where the debug string is displayed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"y"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"The coordinate of the region where the debug string is displayed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"w"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"The width of the region where the debug string is displayed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"h"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"The height of the region where the debug string is displayed."))))))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_debug_printer#function-setscale",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",c({},{id:"setscale"}),"setScale"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_debug_printer#function-setscale",mdxType:"Link"},"setScale")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"uint8_t"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"scale"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Sets the font scale of the debug string. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"scale"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"The font scale of the debug string."))))))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_debug_printer#function-setstring",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",c({},{id:"setstring"}),"setString"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_debug_printer#function-setstring",mdxType:"Link"},"setString")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"const char *"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Sets the debug string to be displayed on top of the framebuffer. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"The string to be displayed."))))))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_debug_printer#function-~debugprinter",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",c({},{id:"debugprinter-1"}),"~DebugPrinter"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"virtual","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_debug_printer#function-~debugprinter",mdxType:"Link"},"~DebugPrinter")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",c({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Finalizes an instance of the ",(0,a.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_debug_printer"}),"DebugPrinter")," class. "))),(0,a.kt)("h2",c({},{id:"protected-functions-documentation"}),"Protected Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_debug_printer#function-getglyph",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",c({},{id:"getglyph"}),"getGlyph"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"uint16_t","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_debug_printer#function-getglyph",mdxType:"Link"},"getGlyph")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"uint8_t"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"c"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",c({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})),(0,a.kt)("td",c({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets a glyph (15 bits) arranged with 3 bits wide, 5 bits high in a single uint16_t value. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null})),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"c"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"The character to get a glyph for."))))),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The glyph. ")))),(0,a.kt)("h2",c({},{id:"protected-attributes-documentation"}),"Protected Attributes Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_debug_printer#variable-debugforegroundcolor",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",c({},{id:"debugforegroundcolor"}),"debugForegroundColor"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",c({parentName:"p"},{href:"structtouchgfx_1_1colortype"}),"colortype")," debugForegroundColor ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Font color to use when displaying the debug string. "))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_debug_printer#variable-debugregion",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",c({},{id:"debugregion"}),"debugRegion"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_rect"}),"Rect")," debugRegion ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Region on screen where the debug message is displayed. "))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_debug_printer#variable-debugscale",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",c({},{id:"debugscale"}),"debugScale"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint8_t debugScale ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Font scaling factor to use when displaying the debug string. "))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_debug_printer#variable-debugstring",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",c({},{id:"debugstring"}),"debugString"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"const char * debugString ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Debug string to be displayed on screen. "))))}f.isMDXComponent=!0}}]);