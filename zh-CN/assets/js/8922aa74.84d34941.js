"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8417],{3905:function(e,t,r){r.d(t,{Zo:function(){return h},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=d(r),u=a,m=p["".concat(c,".").concat(u)]||p[u]||s[u]||o;return r?n.createElement(m,i(i({ref:t},h),{},{components:r})):n.createElement(m,i({ref:t},h))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children))}},29415:function(e,t,r){var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=i},88678:function(e,t,r){var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,r){var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=i},82985:function(e,t,r){var n=r(67294);class a extends n.Component{render(){return n.createElement("code",{className:"shortcut"},this.props.children)}}t.Z=a},84380:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return k},default:function(){return S},frontMatter:function(){return b},metadata:function(){return T},toc:function(){return w}});var n=r(3905),a=r(44035),o=r(29415),i=r(39130),l=r(93054),c=r(82985),d=Object.defineProperty,h=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&g(e,r,t[r]);if(p)for(var r of p(t))m.call(t,r)&&g(e,r,t[r]);return e};const b={id:"driver",title:"Driver",sidebar_label:"Driver"},k=void 0,T={unversionedId:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver",id:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver",title:"Driver",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",slug:"/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver",permalink:"/4.21/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver",draft:!1,tags:[],version:"current",frontMatter:{id:"driver",title:"Driver",sidebar_label:"Driver"},sidebar:"docs",previous:{title:"Display",permalink:"/4.21/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/display"},next:{title:"Additional Features",permalink:"/4.21/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features"}},v={},w=[{value:"Application Tick Source",id:"application-tick-source",level:2},{value:"DMA2D Accelerator (ChromART)",id:"graphics-accelerator",level:2},{value:"GPU2D Accelerator (NeoChrom)",id:"gpu2d-accelerator",level:2},{value:"Real-Time Operating System",id:"real-time-operating-system",level:2},{value:"No OS",id:"no-os",level:3},{value:"FreeRTOS",id:"freertos-middleware-os",level:3},{value:"ThreadX",id:"threadx",level:3},{value:"Enabling ThreadX from <em>Middleware</em> category",id:"threadx-middleware",level:4},{value:"Enabling ThreadX from <em>X-CUBE</em> Software Pack",id:"threadx-xcube",level:4},{value:"Other CMSIS compliant OS",id:"other-cmsis-compliant-os",level:3}],y={toc:w};function S(e){var t,r=e,{components:d}=r,g=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},y),g),h(t,s({components:d,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"The driver section allows developers to select drivers for various responsibilities of a TouchGFX AL."),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/driver-settings.webp",width:"350",mdxType:"Figure"},"TouchGFX Generator Driver settings"),(0,n.kt)("h2",f({},{id:"application-tick-source"}),"Application Tick Source"),(0,n.kt)("p",null,"The application tick source for an application defines how to drive an application forward. The developer has the following options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"LTDC"),' - If LTDC is selected as the interface in the "Display" group the Application Tick Source can be "LTDC". This means that TouchGFX Generator will generate a driver function (LTDC interrupt handler) in ',(0,n.kt)("inlineCode",{parentName:"li"},"TouchGFXGeneratedHAL")," class that drives the application forward by calling ",(0,n.kt)("inlineCode",{parentName:"li"},"OSWrappers::signalVSync()"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Custom and FMC")," - In this case, the developer is required to implement a handler that drives the application forward by calling ",(0,n.kt)("inlineCode",{parentName:"li"},"OSWrappers::signalVSync()")," repeatedly.")),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},"See the ",(0,n.kt)(i.Z,{to:"../../scenarios/scenarios-fmc",mdxType:"Link"},"FMC and SPI Display Interface")," scenario for more information about implementing a custom application tick source"),(0,n.kt)("h2",f({},{id:"graphics-accelerator"}),"DMA2D Accelerator (ChromART)"),(0,n.kt)("p",null,"The developer has three options when it comes to DMA2D graphics acceleration:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"None")," - The application renders using only the CPU."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DMA2D Accelerator (ChromART)")," -\xa0The application uses the ChromART chip when possible to move and blend pixels, freeing up CPU cycles. The driver is generated by TouchGFX Generator and does not require any action from the developer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Custom")," - TouchGFX Generator generates a generic TouchGFX DMA class that inherits from the DMA interface in the TouchGFX Engine with member functions that the developer must implement for a custom graphics accelerator.")),(0,n.kt)("p",null,"To be able to select DMA2D Accelerator in TouchGFX Generator it must be enabled in the ",(0,n.kt)("i",null,"Multimedia")," category in STM32CubeMX:"),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/multimedia-group-dma2d.webp",width:"250",mdxType:"Figure"},"DMA2D is enabled in the Multimedia category in STM32CubeMX, for MCUs that support it."),(0,n.kt)("p",null,"The DMA2D (ChromART) driver generated by TouchGFX Generator supports two ways of receiving a TransferCompleteInterrupt:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Uses the STM32Cube HAL driver where it registers a callback function to the dma2d handle ",(0,n.kt)("inlineCode",{parentName:"li"},"hdma2d.XferCpltCallback"),"."),(0,n.kt)("li",{parentName:"ol"},"Uses the ",(0,n.kt)("inlineCode",{parentName:"li"},"DMA2D_IRQHandler()")," interrupt handler directly.")),(0,n.kt)("p",null,"Switching between these two is done by enabling or disabling the DMA2D global interrupt in the NVIC Settings in STM32CubeMX for DMA2D IP:"),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/dma2d-interrupt.webp",width:"400",mdxType:"Figure"},"DMA2D global interrupt is enabled/disabled in the NVIC settings under System Core category in STM32CubeMX"),(0,n.kt)("p",null,"Enabling the global interrupt generates code for option 1), disabling the global interrupt generates code for option 2)."),(0,n.kt)(l.Z,{mdxType:"Note"},(0,n.kt)("li",null,'When using global interrupt for DMA2D, ensure that the "IRQ handler" calls the "DMA2D HAL handler". This is default behavior.'),(0,n.kt)("li",null,'If disabling "IRQ handler" and "Call HAL handler" for DMA2D while global interrupt is enabled it will cause the registered callback to never be called.')),(0,n.kt)("h2",f({},{id:"gpu2d-accelerator"}),"GPU2D Accelerator (NeoChrom)"),(0,n.kt)("p",null,"GPU2D (NeoChrom) is a graphics accelerator capable of accelerating many of the drawing operations in TouchGFX, including texture mapping and ",(0,n.kt)("a",f({parentName:"p"},{href:"additional-features#vector-rendering"}),"Vector Rendering"),". It supports framebuffers in RGB565, RGB888, and ARGB8888 formats."),(0,n.kt)("p",null,"The developer has two options when it comes to GPU2D graphics acceleration:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Disabled")," - The application draws using only the CPU."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"GPU2D Accelerator (NeoChrom)")," -\xa0The application uses the NeoChrom chip when possible to accelerate many drawing operations done by TouchGFX. The driver is generated by TouchGFX Generator and does not require any action from the developer.")),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/multimedia-group-gpu2d.webp",width:"250",mdxType:"Figure"},"GPU2D is enabled in the Multimedia category in CubeMX, for MCUs that support it."),(0,n.kt)(l.Z,{mdxType:"Note"},"The GPU2D option is only visible if GPU2D has been enabled in the ",(0,n.kt)("i",null,"Multimedia")," section for your project in STM32CubeMX. It is only available for STM32U599 devices, and can only be enabled for use with TouchGFX if the ThreadX RTOS from the ",(0,n.kt)("i",null,"Middlewares")," section is also enabled or if running a bare metal application (No OS)."),(0,n.kt)("p",null,"When enabled, a new section (",(0,n.kt)("strong",{parentName:"p"},"GPU2D Driver"),") will appear in the TouchGFX Generator:"),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/gpu2d-driver.webp",width:"300",mdxType:"Figure"},"GPU2D Driver settings"),(0,n.kt)("p",null,"The setting ",(0,n.kt)("em",{parentName:"p"},"GPU2D Command List Size")," sets the size in bytes of the command list used by the GPU2D."),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"GPU2D Memory Pool Location")," setting allows user to configure the location of the memory pool used by the GPU2D. The buffer must be 8-byte aligned in memory. The following options are available:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"By Allocation")," - Lets the linker place the memory pool in a 8-byte aligned address."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"By Address")," - Allows the user to define a start address of the memory pool. If the entered address is not 8-byte aligned, an error in the TouchGFX Generator will appear.")),(0,n.kt)(l.Z,{mdxType:"Note"},"The total size of the memory pool created by TouchGFX Generator is dependant on the ",(0,n.kt)(i.Z,{to:"additional-features#vector-rendering",mdxType:"Link"},"Vector Rendering")," configuration.",(0,n.kt)("ul",null,(0,n.kt)("li",null,"If Vector Rendering is ",(0,n.kt)("b",null,"Disabled")," the total size of the memory pool is: ",(0,n.kt)("i",null,"1kb ring buffer")," + ",(0,n.kt)("i",null,"GPU2D Command List Size")," + ",(0,n.kt)("i",null,"4kb extra margin"),".")),(0,n.kt)("ul",null,(0,n.kt)("li",null,"If Vector Rendering is ",(0,n.kt)("b",null,"Enabled")," the total size of the memory pool is: ",(0,n.kt)("i",null,"1kb ring buffer")," + ",(0,n.kt)("i",null,"GPU2D Command List Size")," + ",(0,n.kt)("i",null,"(Display Width * Display Height bytes)")," + ",(0,n.kt)("i",null,"256bytes LUT")," + ",(0,n.kt)("i",null,"512bytes Gradient")," + ",(0,n.kt)("i",null,"4kb extra margin"),"."))),(0,n.kt)("h2",f({},{id:"real-time-operating-system"}),"Real-Time Operating System"),(0,n.kt)("p",null,"Developers can use any RTOS with TouchGFX (even No OS). As described in ",(0,n.kt)("a",f({parentName:"p"},{href:"../../touchgfx-architecture"}),"Abstraction Layer Architecture")," the TouchGFX Engine uses the ",(0,n.kt)("inlineCode",{parentName:"p"},"OSWrappers")," interface to synchronize its main event loop as well as framebuffer(s) access with the users choice of RTOS. When developers choose an operating system in TouchGFX Generator, code will be generated to synchronize internally via primitives for the OS of choice. The operating system still has to be configured through STM32CubeMX to determine stack size, among other things."),(0,n.kt)("p",null,"FreeRTOS (CMSIS OS V1 and V2) and ThreadX (Native Middleware or Azure RTOS Software Packs) can be configured directly from within STM32CubeMX and TouchGFX Generator provides the user with generated code for both task definitions and TouchGFX RTOS driver. TouchGFX Generator can generate CMSIS V1 and CMSIS V2 compliant RTOS drivers which work with any CMSIS compliant RTOS, a driver for ThreadX, and a driver for running bare metal without an operating system (No OS)."),(0,n.kt)("h3",f({},{id:"no-os"}),"No OS"),(0,n.kt)("p",null,"If it is desired to run TouchGFX with no operating system the ",(0,n.kt)("em",{parentName:"p"},"No OS")," option in TouchGFX Generator becomes available if no operating system is enabled in the ",(0,n.kt)("em",{parentName:"p"},"Middleware")," category or selected as an ",(0,n.kt)("em",{parentName:"p"},"X-CUBE")," in STM32CubeMX."),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},"See the ",(0,n.kt)(i.Z,{to:"../../scenarios/scenarios-configure-rtos",mdxType:"Link"},"Real Time Operating System")," scenario for more information about the code generated by the TouchGFX Generator when running a bare metal application."),(0,n.kt)("h3",f({},{id:"freertos-middleware-os"}),"FreeRTOS"),(0,n.kt)("p",null,"To be able to select CMSIS_RTOS_V1 or CMSIS_RTOS_V2 in TouchGFX Generator, FreeRTOS must be enabled in the ",(0,n.kt)("em",{parentName:"p"},"Middleware")," category in STM32CubeMX:"),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/free-rtos-middleware.webp",width:"250",mdxType:"Figure"},"FreeRTOS enabled in STM32CubeMX project"),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},"See the ",(0,n.kt)(i.Z,{to:"../../scenarios/scenarios-configure-rtos",mdxType:"Link"},"Real Time Operating System")," scenario for more information about how to configure FreeRTOS (CMSIS_RTOS_V1 and CMSIS_RTOS_V2) to for your TouchGFX Application."),(0,n.kt)("h3",f({},{id:"threadx"}),"ThreadX"),(0,n.kt)("p",null,"ThreadX can be enabled either by selecting an ",(0,n.kt)("em",{parentName:"p"},"X-CUBE")," Software Pack or by enabling the Native ThreadX Middleware from STM32CubeMX, if available for the selected MCU device."),(0,n.kt)("p",null,"The developer should find out if ThreadX is configured as an ",(0,n.kt)("em",{parentName:"p"},"X-CUBE")," Software Pack or as Native ThreadX Middleware for their specific MCU family."),(0,n.kt)(l.Z,{mdxType:"Note"},(0,n.kt)("li",null,"All new STM32 MCU devices will support, by default, ThreadX directly from STM32CubeMX ",(0,n.kt)("i",null,"Middleware")," category without requiring additional pack downloads. TouchGFX Board Support packages will slowly transition to using either ThreadX middleware, where available, or X-CUBE-AZRTOS software packs."),(0,n.kt)("li",null,"X-CUBE-AZRTOS-XX Software Packages providing ThreadX support are already available for a wide range of STM32 MCU families and can be found in the ",(0,n.kt)("i",null,"Embedded Software Packages Manager")," in STM32CubeMX.")),(0,n.kt)("p",null,"The following sections will show how to enable ThreadX as a ",(0,n.kt)("em",{parentName:"p"},"Middleware")," or as an ",(0,n.kt)("em",{parentName:"p"},"AZRTOS Software Pack")," for your application."),(0,n.kt)("h4",f({},{id:"threadx-middleware"}),"Enabling ThreadX from ",(0,n.kt)("em",{parentName:"h4"},"Middleware")," category"),(0,n.kt)("p",null,"To be able to select ThreadX in TouchGFX Generator ThreadX must be enabled in the ",(0,n.kt)("em",{parentName:"p"},"Middleware")," category in STM32CubeMX."),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/threadx-middleware.webp",width:"250",mdxType:"Figure"},"ThreadX from Middleware enabled in STM32CubeMX project"),(0,n.kt)("p",null,"Once enabled the ThreadX option becomes available in TouchGFX Generator."),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},"See the ",(0,n.kt)(i.Z,{to:"../../scenarios/scenarios-configure-rtos",mdxType:"Link"},"Real Time Operating System")," scenario for more information about how to configure ThreadX as native middleware to for your TouchGFX Application."),(0,n.kt)("h4",f({},{id:"threadx-xcube"}),"Enabling ThreadX from ",(0,n.kt)("em",{parentName:"h4"},"X-CUBE")," Software Pack"),(0,n.kt)("p",null,"To be able to select ThreadX in TouchGFX Generator the AZRTOS Software Pack must be enabled in the ",(0,n.kt)("em",{parentName:"p"},"Software Packs Component Selector"),' in STM32CubeMX. In your project click the "Select Components" button or ',(0,n.kt)(c.Z,{mdxType:"Shortcut"},"Alt + o")," in the project menu in STM32CubeMX."),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/enable-generator.webp",width:"700",mdxType:"Figure"},"Selecting Additional Software in STM32CubeMX"),(0,n.kt)("p",null,"The following figure shows how AZRTOS Software Pack can be enabled for a project. Select ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"RTOS")," ThreadX")," and tick the ",(0,n.kt)("strong",{parentName:"p"},"Core")," check box to enable ThreadX. Download and Install the package if not already done."),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/x-cube-azurertos.webp",width:"400",mdxType:"Figure"},"Enabling ThreadX from an X-CUBE-AZRTOS Software Pack"),(0,n.kt)("p",null,"Having added ThreadX Software Pack to the project the ",(0,n.kt)("em",{parentName:"p"},"X-CUBE"),' should be visible in the "Catagories" menu on the left side of the project menu in STM32CubeMX under ',(0,n.kt)("em",{parentName:"p"},"Software Packs")," where it can be enabled."),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/threadx-enabled.webp",width:"250",mdxType:"Figure"},"ThreadX from X-CUBE-AZRTOS enabled in STM32CubeMX project"),(0,n.kt)("p",null,"Once enabled the ThreadX option becomes available in TouchGFX Generator."),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},"See the ",(0,n.kt)(i.Z,{to:"../../scenarios/scenarios-configure-rtos",mdxType:"Link"},"Real Time Operating System")," scenario for more information about how to configure ThreadX as an X-CUBE for your TouchGFX Application."),(0,n.kt)("h3",f({},{id:"other-cmsis-compliant-os"}),"Other CMSIS compliant OS"),(0,n.kt)("p",null,"When developers require a different CMSIS compliant OS than what STM32CubeMX can offer (FreeRTOS and ThreadX) they must perform RTOS configuration and task definition manually. TouchGFX Generator will generate an empty ",(0,n.kt)("inlineCode",{parentName:"p"},"OSWrappers")," interface that the developer must implement. Generally, the following manual steps are required:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Configure the RTOS"),(0,n.kt)("li",{parentName:"ol"},"Implement ",(0,n.kt)("inlineCode",{parentName:"li"},"OSWrappers")," interface"),(0,n.kt)("li",{parentName:"ol"},"Define a task to run TouchGFX (",(0,n.kt)("inlineCode",{parentName:"li"},"MX_TouchGFX_Process"),")"),(0,n.kt)("li",{parentName:"ol"},"Start the scheduler")),(0,n.kt)("p",null,"Call ",(0,n.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process")," to start the TouchGFX Engine Main Loop inside the task handler."),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"void\xa0MX_TouchGFX_Process(void);\n")))}S.isMDXComponent=!0}}]);