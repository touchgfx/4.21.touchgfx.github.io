"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3006],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),h=o,m=p["".concat(c,".").concat(h)]||p[h]||f[h]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},70814:function(e,t,r){var n=r(67294),o=r(88678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},n.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class i extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:a},this.props.children)}}t.Z=i},44035:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children))}},29415:function(e,t,r){var n=r(67294),o=r(88678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=i},88678:function(e,t,r){var n=r(67294);class o extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},93054:function(e,t,r){var n=r(67294),o=r(88678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=i},2692:function(e,t,r){r.r(t),r.d(t,{assets:function(){return w},contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return y},metadata:function(){return v},toc:function(){return k}});var n=r(3905),o=r(44035),a=r(29415),i=r(39130),l=r(70814),c=r(93054),s=Object.defineProperty,u=Object.defineProperties,f=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&d(e,r,t[r]);if(p)for(var r of p(t))m.call(t,r)&&d(e,r,t[r]);return e};const y={id:"display",title:"Display",sidebar_label:"Display"},b=void 0,v={unversionedId:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/display",id:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/display",title:"Display",description:"",source:"@site/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/display.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",slug:"/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/display",permalink:"/4.21/ko/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/display",draft:!1,tags:[],version:"current",frontMatter:{id:"display",title:"Display",sidebar_label:"Display"},sidebar:"docs",previous:{title:"TouchGFX AL Configuration",permalink:"/4.21/ko/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration"},next:{title:"Driver",permalink:"/4.21/ko/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver"}},w={},k=[{value:"Interface and dimensions",id:"interface-and-dimensions",level:2},{value:"Framebuffer Pixel Format",id:"framebuffer-pixel-format",level:2},{value:"Buffering Strategies &amp; Location",id:"buffering-strategies",level:2}],x={toc:k};function N(e){var t,r=e,{components:s}=r,d=((e,t)=>{var r={};for(var n in e)h.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=g(g({},x),d),u(t,f({components:s,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"Display")," group contains configurations related to display, such as interface, dimensions and buffering strategies."),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/display-settings.png",width:"350",mdxType:"Figure"},"TouchGFX Generator Display settings"),(0,n.kt)("h2",g({},{id:"interface-and-dimensions"}),"Interface and dimensions"),(0,n.kt)("p",null,"Multiple display interfaces are usable today with STM32 microcontrollers, e.g.:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Parallel RGB (LTDC)"),(0,n.kt)("li",{parentName:"ul"},"MIPI DSI"),(0,n.kt)("li",{parentName:"ul"},"FMC"),(0,n.kt)("li",{parentName:"ul"},"SPI")),(0,n.kt)("p",null,"In the case of MCUs with a display connected to an LTDC or FMC ",(0,n.kt)("em",{parentName:"p"},"TouchGFX Generator")," can generate code to transfer the framebuffer to the connected display. For DSI and SPI interfaces drivers must be implemented by developers themselves."),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"See section ",(0,n.kt)(i.Z,{to:"../../scenarios/scenarios-ltdc-parallel-rgb",mdxType:"Link"},"Scenarios")," for concrete examples of code for different display interfaces."),(0,n.kt)("h2",g({},{id:"framebuffer-pixel-format"}),"Framebuffer Pixel Format"),(0,n.kt)("p",null,'The following framebuffer pixel formats are currently supported by TouchGFX Generator. All options are available when using "Custom" display interface, otherwise options are restricted to display controller settings (e.g. configuring the LTDC Framebuffer format to "RGB565" will limit the options to "RGB565" in TouchGFX Generator).'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"BW (1bpp)"),(0,n.kt)("li",{parentName:"ol"},"Grey2 (2bpp)"),(0,n.kt)("li",{parentName:"ol"},"Grey4 (4bpp)"),(0,n.kt)("li",{parentName:"ol"},"ABRG2222 (8bpp)"),(0,n.kt)("li",{parentName:"ol"},"ARGB2222 (8bpp)"),(0,n.kt)("li",{parentName:"ol"},"BGRA2222 (8bpp)"),(0,n.kt)("li",{parentName:"ol"},"RGBA2222 (8bpp)"),(0,n.kt)("li",{parentName:"ol"},"RGB565 (16bpp)"),(0,n.kt)("li",{parentName:"ol"},"RGB888 (24bpp)"),(0,n.kt)("li",{parentName:"ol"},"ARGB8888 (32bpp)"),(0,n.kt)("li",{parentName:"ol"},"XRGB8888 (32bpp)")),(0,n.kt)(c.Z,{mdxType:"Note"},"Some pixel formats have no- or only partial ChromART (DMA2D) support."),(0,n.kt)("h2",g({},{id:"buffering-strategies"}),"Buffering Strategies & Location"),(0,n.kt)("p",null,"The following frame buffer strategies can be configured through TouchGFX generator:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Single Buffer"),' - Use only one application frame buffer. Possibly limits performance but uses less memory. Can be used with the "Buffer Location" configuration to place it in internal RAM. For further optimization the user can define a function that returns the current line being processed by the display controller. This method is used by the framework to allow updates to memory that has already been transferred to the display during this frame.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Double Buffer")," - Use two frame buffers. Usually allows for better performance at the cost of memory."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Partial Buffer")," - Use one or more user defined chunks of memory as the frame buffer. This strategy is targeted at low cost solutions that do not rely on external RAM, but have displays for which a full frame buffer would exceed available memory.")),(0,n.kt)("p",null,'In the case of Single Buffer and Double Buffer users are allowed to configure their location through the "Buffer Location" configuration which offers the following options:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"By Allocation")," - Lets the linker place frame buffer memory according to linker script. Default is in internal RAM."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"By Address")," - Allows the user to define one (Single) or two (Double) frame buffer addresses.")),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Partial Buffer")," strategy allows the user to define the following parameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Number of blocks (always placed in internal RAM)"),(0,n.kt)("li",{parentName:"ul"},"Block size (bytes)")),(0,n.kt)("p",null,"To understand some core concepts regarding the Partial Buffer strategy please read the ",(0,n.kt)("a",g({parentName:"p"},{href:"../../../scenarios/lowering-memory-usage-with-partial-framebuffer"}),"dedicated article")," on Lowering Memory requirements using partial Frame Buffers. The article shows, conceptually, how to achieve partial frame buffers and the code shown in this article will differ slightly from what is generated by TouchGFX Generator.\nPlease see ",(0,n.kt)("a",g({parentName:"p"},{href:"../../scenarios/scenarios-framebuffer-strategies"}),"Frame Buffer Strategies")," for concrete examples of the generated code for these strategies."),(0,n.kt)(l.Z,{mdxType:"Caution"},(0,n.kt)("b",null,"For STM32F7/H7"),": If the framebuffer is placed in Write Through cached memory (e.g. SRAM) then the DCache is flushed by the generated code prior to DMA2D (if configured in the Generator) accessing it. Remember to enable ",(0,n.kt)("b",null,"CPU Cache")," in the ",(0,n.kt)("b",null,"System Core")," settings for ",(0,n.kt)("b",null,"Cortex M7")," in STM32CubeMX in order for this caching mechanic to work."),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"See the ",(0,n.kt)(i.Z,{to:"../../../board-bring-up/how-to/02-cpu-running#cache-on-f7-and-h7",mdxType:"Link"},"Cache on F7 and H7")," subsection for more information about CPU caching."))}N.isMDXComponent=!0}}]);