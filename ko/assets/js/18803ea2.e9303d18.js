"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2058],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),p=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=p(a),k=r,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||o;return a?n.createElement(m,l(l({ref:e},s),{},{components:a})):n.createElement(m,l({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},43861:function(t,e,a){var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},51464:function(t,e,a){a.r(e),a.d(e,{assets:function(){return h},contentTitle:function(){return _},default:function(){return N},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return f}});var n=a(3905),r=a(39130),o=a(43861),l=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(t,e,a)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,k=(t,e)=>{for(var a in e||(e={}))s.call(e,a)&&d(t,a,e[a]);if(p)for(var a of p(e))u.call(e,a)&&d(t,a,e[a]);return t};const m={title:"AbstractPainterColor"},_=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_abstract_painter_color",id:"api/classes/classtouchgfx_1_1_abstract_painter_color",title:"AbstractPainterColor",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_abstract_painter_color.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_abstract_painter_color",permalink:"/4.21/ko/docs/api/classes/classtouchgfx_1_1_abstract_painter_color",draft:!1,tags:[],version:"current",frontMatter:{title:"AbstractPainterColor"},sidebar:"docs",previous:{title:"AbstractPainterBW",permalink:"/4.21/ko/docs/api/classes/classtouchgfx_1_1_abstract_painter_b_w"},next:{title:"AbstractPainterGRAY2",permalink:"/4.21/ko/docs/api/classes/classtouchgfx_1_1_abstract_painter_g_r_a_y2"}},h={},f=[{value:"Public Functions",id:"public-functions",level:2},{value:"Protected Attributes",id:"protected-attributes",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"AbstractPainterColor",id:"abstractpaintercolor",level:3},{value:"getColor",id:"getcolor",level:3},{value:"setColor",id:"setcolor",level:3},{value:"~AbstractPainterColor",id:"abstractpaintercolor-1",level:3},{value:"Protected Attributes Documentation",id:"protected-attributes-documentation",level:2},{value:"painterColor",id:"paintercolor",level:3}],b={toc:f};function N(t){var e,a=t,{components:l}=a,d=((t,e)=>{var a={};for(var n in t)s.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&u.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=k(k({},b),d),i(e,c({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"touchgfx/widgets/canvas/AbstractPainterColor.hpp")),(0,n.kt)("p",null," An abstract class for creating painter classes for drawing canvas widgets.\nAll canvas widgets need a painter to fill the shape drawn with a ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_canvas_widget_renderer"}),"CanvasWidgetRenderer"),". The painter must provide the color of a pixel on a given coordinate, which will the be blended into the framebuffer depending on the position of the canvas widget and the transparency of the given pixel."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_abstract_painter"}),"AbstractPainter")," also implements a function which will blend each pixel in a scanline snippet into the framebuffer, but for better performance, the function should be reimplemented in each painter. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Inherited by"),":  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_a_b_g_r2222",mdxType:"Link"},"PainterABGR2222"),",  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_a_r_g_b2222",mdxType:"Link"},"PainterARGB2222"),",  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_a_r_g_b8888",mdxType:"Link"},"PainterARGB8888"),",  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_b_g_r_a2222",mdxType:"Link"},"PainterBGRA2222"),",  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_b_w",mdxType:"Link"},"PainterBW"),",  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_g_r_a_y2",mdxType:"Link"},"PainterGRAY2"),",  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_g_r_a_y4",mdxType:"Link"},"PainterGRAY4"),",  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_r_g_b565",mdxType:"Link"},"PainterRGB565"),",  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_r_g_b888",mdxType:"Link"},"PainterRGB888"),",  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_r_g_b_a2222",mdxType:"Link"},"PainterRGBA2222"),",  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_x_r_g_b8888",mdxType:"Link"},"PainterXRGB8888")),(0,n.kt)("h2",k({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:"right"})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter_color#function-abstractpaintercolor",mdxType:"Link"},"AbstractPainterColor")),"(",(0,n.kt)("a",k({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")," color =0)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Constructor.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),(0,n.kt)("a",k({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter_color#function-getcolor",mdxType:"Link"},"getColor")),"() const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Gets the current color.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter_color#function-setcolor",mdxType:"Link"},"setColor")),"(",(0,n.kt)("a",k({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")," color)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Sets color to use when drawing the CanvasWidget.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter_color#function-~abstractpaintercolor",mdxType:"Link"},"~AbstractPainterColor")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Destructor.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",k({},{id:"protected-attributes"}),"Protected Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:"right"})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),(0,n.kt)("a",k({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter_color#variable-paintercolor",mdxType:"Link"},"painterColor")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The color.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",k({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(o.Z,{url:"classtouchgfx_1_1_abstract_painter_color#function-abstractpaintercolor",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"abstractpaintercolor"}),"AbstractPainterColor"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter_color#function-abstractpaintercolor",mdxType:"Link"},"AbstractPainterColor")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"color  =0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Constructor. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"color"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"(Optional) The color to use in the painter."))))))),(0,n.kt)(o.Z,{url:"classtouchgfx_1_1_abstract_painter_color#function-getcolor",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"getcolor"}),"getColor"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"colortype","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter_color#function-getcolor",mdxType:"Link"},"getColor")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"const"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Gets the current color. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The color. ")))),(0,n.kt)(o.Z,{url:"classtouchgfx_1_1_abstract_painter_color#function-setcolor",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"setcolor"}),"setColor"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter_color#function-setcolor",mdxType:"Link"},"setColor")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"color"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Sets color to use when drawing the CanvasWidget. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"color"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The color."))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_a_b_g_r2222#function-setcolor",mdxType:"Link"},"touchgfx::PainterABGR2222::setColor"),", ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_a_r_g_b2222#function-setcolor",mdxType:"Link"},"touchgfx::PainterARGB2222::setColor"),", ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_a_r_g_b8888#function-setcolor",mdxType:"Link"},"touchgfx::PainterARGB8888::setColor"),", ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_b_g_r_a2222#function-setcolor",mdxType:"Link"},"touchgfx::PainterBGRA2222::setColor"),", ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_b_w#function-setcolor",mdxType:"Link"},"touchgfx::PainterBW::setColor"),", ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_g_r_a_y2#function-setcolor",mdxType:"Link"},"touchgfx::PainterGRAY2::setColor"),", ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_g_r_a_y4#function-setcolor",mdxType:"Link"},"touchgfx::PainterGRAY4::setColor"),", ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_r_g_b565#function-setcolor",mdxType:"Link"},"touchgfx::PainterRGB565::setColor"),", ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_r_g_b888#function-setcolor",mdxType:"Link"},"touchgfx::PainterRGB888::setColor"),", ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_r_g_b_a2222#function-setcolor",mdxType:"Link"},"touchgfx::PainterRGBA2222::setColor"),", ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_x_r_g_b8888#function-setcolor",mdxType:"Link"},"touchgfx::PainterXRGB8888::setColor")))),(0,n.kt)(o.Z,{url:"classtouchgfx_1_1_abstract_painter_color#function-~abstractpaintercolor",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"abstractpaintercolor-1"}),"~AbstractPainterColor"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter_color#function-~abstractpaintercolor",mdxType:"Link"},"~AbstractPainterColor")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Destructor. "))),(0,n.kt)("h2",k({},{id:"protected-attributes-documentation"}),"Protected Attributes Documentation"),(0,n.kt)(o.Z,{url:"classtouchgfx_1_1_abstract_painter_color#variable-paintercolor",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"paintercolor"}),"painterColor"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",k({parentName:"p"},{href:"structtouchgfx_1_1colortype"}),"colortype")," painterColor ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The color. "))))}N.isMDXComponent=!0}}]);