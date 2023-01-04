"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5063],{3905:function(t,e,a){a.d(e,{Zo:function(){return k},kt:function(){return c}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},k=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,k=l(t,["components","mdxType","originalType","parentName"]),m=p(a),c=r,u=m["".concat(d,".").concat(c)]||m[c]||s[c]||i;return a?n.createElement(u,o(o({ref:e},k),{},{components:a})):n.createElement(u,o({ref:e},k))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},43861:function(t,e,a){var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},16131:function(t,e,a){a.r(e),a.d(e,{assets:function(){return _},contentTitle:function(){return h},default:function(){return b},frontMatter:function(){return u},metadata:function(){return g},toc:function(){return v}});var n=a(3905),r=a(39130),i=a(43861),o=Object.defineProperty,l=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(t,e,a)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,c=(t,e)=>{for(var a in e||(e={}))k.call(e,a)&&m(t,a,e[a]);if(p)for(var a of p(e))s.call(e,a)&&m(t,a,e[a]);return t};const u={title:"VGShape"},h=void 0,g={unversionedId:"api/classes/structtouchgfx_1_1_v_g_shape",id:"api/classes/structtouchgfx_1_1_v_g_shape",title:"VGShape",description:"",source:"@site/docs/api/classes/structtouchgfx_1_1_v_g_shape.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_v_g_shape",permalink:"/4.21/docs/api/classes/structtouchgfx_1_1_v_g_shape",draft:!1,tags:[],version:"current",frontMatter:{title:"VGShape"},sidebar:"docs",previous:{title:"VGObject",permalink:"/4.21/docs/api/classes/structtouchgfx_1_1_v_g_object"},next:{title:"VideoController",permalink:"/4.21/docs/api/classes/classtouchgfx_1_1_video_controller"}},_={},v=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"boundingbox",id:"boundingbox",level:3},{value:"commands",id:"commands",level:3},{value:"drawingMode",id:"drawingmode",level:3},{value:"fillAlpha",id:"fillalpha",level:3},{value:"fillMode",id:"fillmode",level:3},{value:"fillPaint",id:"fillpaint",level:3},{value:"next",id:"next",level:3},{value:"numCommands",id:"numcommands",level:3},{value:"numPoints",id:"numpoints",level:3},{value:"points",id:"points",level:3},{value:"strokeAlpha",id:"strokealpha",level:3},{value:"strokeLineCap",id:"strokelinecap",level:3},{value:"strokeLineJoin",id:"strokelinejoin",level:3},{value:"strokeMiterLimit",id:"strokemiterlimit",level:3},{value:"strokeMode",id:"strokemode",level:3},{value:"strokePaint",id:"strokepaint",level:3},{value:"strokeWidth",id:"strokewidth",level:3},{value:"transformation",id:"transformation",level:3}],f={toc:v};function b(t){var e,a=t,{components:o}=a,m=((t,e)=>{var a={};for(var n in t)k.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&s.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=c(c({},f),m),l(e,d({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/VGData.hpp")),(0,n.kt)("p",null," Data structure for a vector shape (polygon, circle, path, etc.).\nShapes can be linked in a list using the next member. Shapes are linked to by a ",(0,n.kt)("a",c({parentName:"p"},{href:"structtouchgfx_1_1_v_g_object"}),"VGObject"),". Which thereby consists of a number of Shapes. Each shape has attributes, e.g. strokeWidth, that is used when drawing the paths in the ",(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_shape"}),"Shape"),"."),(0,n.kt)("p",null,"All coordinates and sizes (e.g. strokeWidth) are not translated by any transform given in the svg. This has to be done when drawing. "),(0,n.kt)("h2",c({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:"right"})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"float"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_v_g_shape#variable-boundingbox",mdxType:"Link"},"boundingbox")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Un-transformed bounding box for this ",(0,n.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_shape"}),"Shape")," ","[xmin, ymin, xmax, ymax]"," excluding strokeWidth.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"const uint8_t *"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_v_g_shape#variable-commands",mdxType:"Link"},"commands")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The paths commands.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),(0,n.kt)("a",c({parentName:"td"},{href:"../namespacetouchgfx#enum-vgfillmode"}),"VGFillMode")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_v_g_shape#variable-drawingmode",mdxType:"Link"},"drawingMode")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Polygon fill mode for this shape.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"uint8_t"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_v_g_shape#variable-fillalpha",mdxType:"Link"},"fillAlpha")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Alpha of this shape's fill in the range ","[0;255]",".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),(0,n.kt)("a",c({parentName:"td"},{href:"../namespacetouchgfx#enum-vgcolormode"}),"VGColorMode")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_v_g_shape#variable-fillmode",mdxType:"Link"},"fillMode")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Fill coloring mode for this shape.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"const void *"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_v_g_shape#variable-fillpaint",mdxType:"Link"},"fillPaint")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Filling painter object or null if not filled.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"const ",(0,n.kt)("a",c({parentName:"td"},{href:"structtouchgfx_1_1_v_g_shape"}),"VGShape")," *"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_v_g_shape#variable-next",mdxType:"Link"},"next")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Pointer to the next ",(0,n.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_shape"}),"Shape"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"uint16_t"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_v_g_shape#variable-numcommands",mdxType:"Link"},"numCommands")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Number of commands in the paths.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"uint16_t"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_v_g_shape#variable-numpoints",mdxType:"Link"},"numPoints")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Number of coordinate floats in the paths.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"const float *"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_v_g_shape#variable-points",mdxType:"Link"},"points")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The paths coordinates.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"uint8_t"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_v_g_shape#variable-strokealpha",mdxType:"Link"},"strokeAlpha")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Alpha of this shape's stroke in the range ","[0;255]",".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),(0,n.kt)("a",c({parentName:"td"},{href:"../namespacetouchgfx#enum-vgstrokelinecap"}),"VGStrokeLineCap")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_v_g_shape#variable-strokelinecap",mdxType:"Link"},"strokeLineCap")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The stroke line cap visual.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),(0,n.kt)("a",c({parentName:"td"},{href:"../namespacetouchgfx#enum-vgstrokelinejoin"}),"VGStrokeLineJoin")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_v_g_shape#variable-strokelinejoin",mdxType:"Link"},"strokeLineJoin")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The stroke line join.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"float"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_v_g_shape#variable-strokemiterlimit",mdxType:"Link"},"strokeMiterLimit")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The stroke miter limit.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),(0,n.kt)("a",c({parentName:"td"},{href:"../namespacetouchgfx#enum-vgcolormode"}),"VGColorMode")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_v_g_shape#variable-strokemode",mdxType:"Link"},"strokeMode")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Stroke coloring mode for this shape.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"const void *"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_v_g_shape#variable-strokepaint",mdxType:"Link"},"strokePaint")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Stroking painter object or null if not stroked.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"float"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_v_g_shape#variable-strokewidth",mdxType:"Link"},"strokeWidth")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Stroke width to use when drawing this shape.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"float"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_v_g_shape#variable-transformation",mdxType:"Link"},"transformation")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The transformation matrix to apply before drawing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",c({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_shape#variable-boundingbox",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"boundingbox"}),"boundingbox"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"float boundingbox ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Un-transformed bounding box for this ",(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_shape"}),"Shape")," ","[xmin, ymin, xmax, ymax]"," excluding strokeWidth. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_shape#variable-commands",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"commands"}),"commands"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"const uint8_t * commands ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The paths commands. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_shape#variable-drawingmode",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"drawingmode"}),"drawingMode"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"../namespacetouchgfx#enum-vgfillmode"}),"VGFillMode")," drawingMode ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Polygon fill mode for this shape. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_shape#variable-fillalpha",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"fillalpha"}),"fillAlpha"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint8_t fillAlpha ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Alpha of this shape's fill in the range ","[0;255]",". "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_shape#variable-fillmode",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"fillmode"}),"fillMode"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"../namespacetouchgfx#enum-vgcolormode"}),"VGColorMode")," fillMode ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Fill coloring mode for this shape. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_shape#variable-fillpaint",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"fillpaint"}),"fillPaint"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"const void * fillPaint ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Filling painter object or null if not filled. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_shape#variable-next",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"next"}),"next"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"const ",(0,n.kt)("a",c({parentName:"p"},{href:"structtouchgfx_1_1_v_g_shape"}),"VGShape")," * next ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Pointer to the next ",(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_shape"}),"Shape"),". "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_shape#variable-numcommands",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"numcommands"}),"numCommands"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint16_t numCommands ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Number of commands in the paths. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_shape#variable-numpoints",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"numpoints"}),"numPoints"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint16_t numPoints ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Number of coordinate floats in the paths. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_shape#variable-points",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"points"}),"points"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"const float * points ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The paths coordinates. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_shape#variable-strokealpha",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"strokealpha"}),"strokeAlpha"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint8_t strokeAlpha ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Alpha of this shape's stroke in the range ","[0;255]",". "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_shape#variable-strokelinecap",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"strokelinecap"}),"strokeLineCap"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"../namespacetouchgfx#enum-vgstrokelinecap"}),"VGStrokeLineCap")," strokeLineCap ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The stroke line cap visual. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_shape#variable-strokelinejoin",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"strokelinejoin"}),"strokeLineJoin"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"../namespacetouchgfx#enum-vgstrokelinejoin"}),"VGStrokeLineJoin")," strokeLineJoin ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The stroke line join. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_shape#variable-strokemiterlimit",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"strokemiterlimit"}),"strokeMiterLimit"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"float strokeMiterLimit ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The stroke miter limit. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_shape#variable-strokemode",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"strokemode"}),"strokeMode"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"../namespacetouchgfx#enum-vgcolormode"}),"VGColorMode")," strokeMode ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Stroke coloring mode for this shape. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_shape#variable-strokepaint",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"strokepaint"}),"strokePaint"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"const void * strokePaint ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Stroking painter object or null if not stroked. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_shape#variable-strokewidth",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"strokewidth"}),"strokeWidth"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"float strokeWidth ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Stroke width to use when drawing this shape. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_v_g_shape#variable-transformation",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"transformation"}),"transformation"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"float transformation ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The transformation matrix to apply before drawing. "))))}b.isMDXComponent=!0}}]);