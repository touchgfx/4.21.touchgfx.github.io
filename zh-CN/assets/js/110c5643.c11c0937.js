"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3327],{3905:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return g}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var d=a.createContext({}),p=function(t){var e=a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,d=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),k=p(r),g=n,s=k["".concat(d,".").concat(g)]||k[g]||c[g]||i;return r?a.createElement(s,o(o({ref:e},m),{},{components:r})):a.createElement(s,o({ref:e},m))}));function g(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=k;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},81910:function(t,e,r){r.r(e),r.d(e,{assets:function(){return N},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return g},metadata:function(){return u},toc:function(){return _}});var a=r(3905),n=r(39130),i=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(t,e,r)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,k=(t,e)=>{for(var r in e||(e={}))p.call(e,r)&&c(t,r,e[r]);if(d)for(var r of d(e))m.call(e,r)&&c(t,r,e[r]);return t};const g={title:"CWRVectorRendererRGB565"},s=void 0,u={unversionedId:"api/classes/classtouchgfx_1_1_c_w_r_vector_renderer_r_g_b565",id:"api/classes/classtouchgfx_1_1_c_w_r_vector_renderer_r_g_b565",title:"CWRVectorRendererRGB565",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_c_w_r_vector_renderer_r_g_b565.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_c_w_r_vector_renderer_r_g_b565",permalink:"/4.21/zh-CN/docs/api/classes/classtouchgfx_1_1_c_w_r_vector_renderer_r_g_b565",draft:!1,tags:[],version:"current",frontMatter:{title:"CWRVectorRendererRGB565"},sidebar:"docs",previous:{title:"CWRVectorRenderer",permalink:"/4.21/zh-CN/docs/api/classes/classtouchgfx_1_1_c_w_r_vector_renderer"},next:{title:"CWRVectorRendererRGB888",permalink:"/4.21/zh-CN/docs/api/classes/classtouchgfx_1_1_c_w_r_vector_renderer_r_g_b888"}},N={},_=[{value:"Additional inherited members",id:"additional-inherited-members",level:2},{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_c_w_r_vector_renderer">CWRVectorRenderer</Link>',id:"public-functions-inherited-from-cwrvectorrenderer",level:3},{value:'Public Types inherited from <Link to="classtouchgfx_1_1_vector_renderer">VectorRenderer</Link>',id:"public-types-inherited-from-vectorrenderer",level:3},{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_vector_renderer">VectorRenderer</Link>',id:"public-functions-inherited-from-vectorrenderer",level:3}],f={toc:_};function h(t){var e,r=t,{components:i}=r,c=((t,e)=>{var r={};for(var a in t)p.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&d)for(var a of d(t))e.indexOf(a)<0&&m.call(t,a)&&(r[a]=t[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(e=k(k({},f),c),o(e,l({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Implementation of the CWRVectorRendererInterface for the RGB565 framebuffer format. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_c_w_r_vector_renderer",mdxType:"Link"},"CWRVectorRenderer"),",  ",(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_vector_renderer",mdxType:"Link"},"VectorRenderer")),(0,a.kt)("h2",k({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,a.kt)("h3",k({},{id:"public-functions-inherited-from-cwrvectorrenderer"}),"Public Functions inherited from ",(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_c_w_r_vector_renderer",mdxType:"Link"},"CWRVectorRenderer")),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:"right"})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_c_w_r_vector_renderer#function-drawpath",mdxType:"Link"},"drawPath")),"(const uint8_t ",(0,a.kt)("em",{parentName:"td"}," cmds, uint32_t nCmds, const float ")," points, uint32_t nPoints, const float * bbox =0)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Draw a Path defined by the given array of primitives (commands) and an array of the corresponding floating point coordinates.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_c_w_r_vector_renderer#function-setalpha",mdxType:"Link"},"setAlpha")),"(uint8_t a)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Set the alpha value (opacity) used for future drawings.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_c_w_r_vector_renderer#function-setcolor",mdxType:"Link"},"setColor")),"(",(0,a.kt)("a",k({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")," c)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Set a constant color used for future drawings.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_c_w_r_vector_renderer#function-setlineargradient",mdxType:"Link"},"setLinearGradient")),"(float x0, float y0, float x1, float y1, uint32_t stops, const float ",(0,a.kt)("em",{parentName:"td"}," stopPositions, const uint32_t ")," stopColors, float width, float height, bool solid, const uint32_t * palette)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Set a linear gradient used for future drawings.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_c_w_r_vector_renderer#function-setmode",mdxType:"Link"},"setMode")),"(",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_vector_renderer#enum-drawmode"}),"DrawMode")," mode)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Set the drawing mode for the VectorRenderer.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_c_w_r_vector_renderer#function-setradialgradient",mdxType:"Link"},"setRadialGradient")),"(float cx, float cy, float radius, uint32_t stops, const float ",(0,a.kt)("em",{parentName:"td"}," stopPositions, const ",(0,a.kt)("a",k({parentName:"em"},{href:"structtouchgfx_1_1colortype"}),"colortype")," ")," stopColors)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Set a radial gradient used for future drawings.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_c_w_r_vector_renderer#function-setstrokelinecap",mdxType:"Link"},"setStrokeLineCap")),"(",(0,a.kt)("a",k({parentName:"td"},{href:"../namespacetouchgfx#enum-vgstrokelinecap"}),"VGStrokeLineCap")," lineCap)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Sets stroke line cap type.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_c_w_r_vector_renderer#function-setstrokelinejoin",mdxType:"Link"},"setStrokeLineJoin")),"(",(0,a.kt)("a",k({parentName:"td"},{href:"../namespacetouchgfx#enum-vgstrokelinejoin"}),"VGStrokeLineJoin")," lineJoin)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Sets stroke line join type.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_c_w_r_vector_renderer#function-setstrokemiterlimit",mdxType:"Link"},"setStrokeMiterLimit")),"(float miterLimit)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Sets stroke miter limit.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_c_w_r_vector_renderer#function-setstrokewidth",mdxType:"Link"},"setStrokeWidth")),"(float w)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Set the width used for future drawings using the VECTOR_STROKE drawing mode.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_c_w_r_vector_renderer#function-settransformationmatrix",mdxType:"Link"},"setTransformationMatrix")),"(const ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_matrix3x3"}),"Matrix3x3")," & m)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Sets the transformation matrix used for future drawings.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_c_w_r_vector_renderer#function-setup",mdxType:"Link"},"setup")),"(const ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_widget"}),"Widget")," & renderer, const ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & drawingArea)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Start a new drawing in the given area.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_c_w_r_vector_renderer#function-teardown",mdxType:"Link"},"tearDown")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Finalizes the current drawing.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("h3",k({},{id:"public-types-inherited-from-vectorrenderer"}),"Public Types inherited from ",(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_vector_renderer",mdxType:"Link"},"VectorRenderer")),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:"right"})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"enum"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_vector_renderer#enum-drawmode",mdxType:"Link"},"DrawMode"))," { STROKE, FILL_EVEN_ODD, FILL_NON_ZERO }")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"A list of vector graphics drawing modes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("h3",k({},{id:"public-functions-inherited-from-vectorrenderer"}),"Public Functions inherited from ",(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_vector_renderer",mdxType:"Link"},"VectorRenderer")),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:"right"})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_vector_renderer#function-drawpath",mdxType:"Link"},"drawPath")),"(const uint8_t ",(0,a.kt)("em",{parentName:"td"}," cmds, uint32_t nCmds, const float ")," points, uint32_t nPoints, const float * bbox =0) =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Draw a Path defined by the given array of primitives (commands) and an array of the corresponding floating point coordinates.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_vector_renderer#function-setalpha",mdxType:"Link"},"setAlpha")),"(uint8_t a) =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Set the alpha value (opacity) used for future drawings.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_vector_renderer#function-setcolor",mdxType:"Link"},"setColor")),"(",(0,a.kt)("a",k({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")," c) =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Set a constant color used for future drawings.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_vector_renderer#function-setlineargradient",mdxType:"Link"},"setLinearGradient")),"(float x0, float y0, float x1, float y1, uint32_t stops, const float ",(0,a.kt)("em",{parentName:"td"}," stopPositions, const uint32_t ")," stopColors, float width, float height, bool solid, const uint32_t * palette) =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Set a linear gradient used for future drawings.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_vector_renderer#function-setmode",mdxType:"Link"},"setMode")),"(",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_vector_renderer#enum-drawmode"}),"DrawMode")," mode) =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Set the drawing mode for the ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_vector_renderer"}),"VectorRenderer"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_vector_renderer#function-setstrokelinecap",mdxType:"Link"},"setStrokeLineCap")),"(",(0,a.kt)("a",k({parentName:"td"},{href:"../namespacetouchgfx#enum-vgstrokelinecap"}),"VGStrokeLineCap")," lineCap) =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Sets stroke line cap type.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_vector_renderer#function-setstrokelinejoin",mdxType:"Link"},"setStrokeLineJoin")),"(",(0,a.kt)("a",k({parentName:"td"},{href:"../namespacetouchgfx#enum-vgstrokelinejoin"}),"VGStrokeLineJoin")," lineJoin) =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Sets stroke line join type.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_vector_renderer#function-setstrokemiterlimit",mdxType:"Link"},"setStrokeMiterLimit")),"(float miterLimit) =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Sets stroke miter limit.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_vector_renderer#function-setstrokewidth",mdxType:"Link"},"setStrokeWidth")),"(float w) =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Set the width used for future drawings using the VECTOR_STROKE drawing mode.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_vector_renderer#function-settransformationmatrix",mdxType:"Link"},"setTransformationMatrix")),"(const ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_matrix3x3"}),"Matrix3x3")," & m) =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Sets the transformation matrix used for future drawings.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_vector_renderer#function-setup",mdxType:"Link"},"setup")),"(const ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_widget"}),"Widget")," & renderer, const ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & drawingArea) =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Start a new drawing in the given area.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_vector_renderer#function-teardown",mdxType:"Link"},"tearDown")),"() =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Finalizes the current drawing.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_vector_renderer#function-~vectorrenderer",mdxType:"Link"},"~VectorRenderer")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Virtual destructor.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_vector_renderer"}),"VectorRenderer")," *"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"classtouchgfx_1_1_vector_renderer#function-getinstance",mdxType:"Link"},"getInstance")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Gets the ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_vector_renderer"}),"VectorRenderer")," instance.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))))}h.isMDXComponent=!0}}]);