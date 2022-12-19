"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[232],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return c}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(r),c=a,d=h["".concat(s,".").concat(c)]||h[c]||m[c]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children))}},11096:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return T},frontMatter:function(){return c},metadata:function(){return g},toc:function(){return k}});var n=r(3905),a=r(44035),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&m(e,r,t[r]);if(s)for(var r of s(t))u.call(t,r)&&m(e,r,t[r]);return e};const c={id:"touchgfx-on-gpu2d",title:"TouchGFX on NeoChrom"},d=void 0,g={unversionedId:"development/scenarios/touchgfx-on-gpu2d",id:"development/scenarios/touchgfx-on-gpu2d",title:"TouchGFX on NeoChrom",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/scenarios/touchgfx-on-gpu2d.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/touchgfx-on-gpu2d",permalink:"/4.21/ko/docs/development/scenarios/touchgfx-on-gpu2d",draft:!1,tags:[],version:"current",frontMatter:{id:"touchgfx-on-gpu2d",title:"TouchGFX on NeoChrom"},sidebar:"docs",previous:{title:"\uc800\uac00 \ud558\ub4dc\uc6e8\uc5b4 \uae30\ubc18\uc758 TouchGFX",permalink:"/4.21/ko/docs/development/scenarios/touchgfx-on-lowcost-hardware"},next:{title:"\ubd80\ubd84 \ud504\ub808\uc784 \ubc84\ud37c\ub97c \ud1b5\ud55c \uba54\ubaa8\ub9ac \uc0ac\uc6a9 \uc808\uac10",permalink:"/4.21/ko/docs/development/scenarios/lowering-memory-usage-with-partial-framebuffer"}},f={},k=[{value:"NeoChrom Graphical Capabilities",id:"neochrom-graphical-capabilities",level:2},{value:"Rendering Time Improvements with NeoChrom.",id:"rendering-time-improvements-with-neochrom",level:2},{value:"Rendering Time Summary",id:"rendering-time-summary",level:3},{value:"Richer User Interfaces",id:"richer-user-interfaces",level:3},{value:"Creating a project",id:"creating-a-project",level:2},{value:"Supported IDEs",id:"supported-ides",level:2},{value:"Framebuffer Formats",id:"framebuffer-formats",level:2},{value:"NeoChrom Limitations",id:"neochrom-limitations",level:2}],b={toc:k};function T(e){var t,r=e,{components:o}=r,m=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=h(h({},b),m),i(t,l({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"This section discusses how to use TouchGFX on hardware having the NeoChrom graphics accelerator. This graphics accelerator improves the performance significantly for operations like texture mapping, image scaling and rotation. This means that more advanced UIs can be built while still keeping a high frame rate."),(0,n.kt)("p",null,"The NeoChrom graphics accelerator is currently only available in the STM32U5x9 microcontrollers as found on e.g. STM32U599 Discovery Kit."),(0,n.kt)(a.Z,{width:"30%",imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/stm32u599-dk-bsd-menu.webp",mdxType:"Figure"},"STM32U599 Discovery Board"),(0,n.kt)("p",null,"The NeoChrom accelerator is also known by the name GPU2D in source code and in CubeMX."),(0,n.kt)("h2",h({},{id:"neochrom-graphical-capabilities"}),"NeoChrom Graphical Capabilities"),(0,n.kt)("p",null,"The NeoChrom accelerator is capable of performing basic blitting (drawing images), blending, scaling, rotation, and texture mapping. All suce operations are automatically used by TouchGFX when running on a microcontroller with NeoChrom."),(0,n.kt)("p",null,"Compared to the DMA2D graphics accelerator NeoChrom is capable of accelerating more graphical operations and has a richer feature set:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",h({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Graphic feature")),(0,n.kt)("th",h({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"DMA2D")),(0,n.kt)("th",h({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"GPU2D")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Supported formats (with TouchGFX)"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"ARGB8888, RGB888, RGB565, A8, A4, L8"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"ARGB8888, RGB888, RGB565, A8, A4, A2, A1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Command list based"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Drawing"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Rectangles"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Rectangles, Pixels, Line, Triangle, Quadrilaterals with  multi-sample anti-aliasing (MSAA)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Blitting"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Copy, alpha blending, pixel format conversion"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Copy, alpha blending, pixel format conversion, color keying")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Texture Mapping"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Yes")))),(0,n.kt)("p",null,"With these capabilities available even more TouchGFX Widgets are accelerated with NeoChrom:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",h({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Widget")),(0,n.kt)("th",h({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"DMA2D")),(0,n.kt)("th",h({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"GPU2D")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Box, BoxWithBorder"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Image, AnimatedImage, TiledImage, SnapshotWidget"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Button, ButtonWithIcon, ButtonWithLabel, ToggleButton"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"RadioButton, RepeatButton"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"PixelDataWidget"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"TextArea, TextAreaWithWildcard, Keyboard"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Partly"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"ScalableImage"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"TextureMapper, AnimatedTextureMapper"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Circle, Line, Graph, Gauge"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("p",null,"The operations that are not hardware accelerated are software rendered (implying a higher CPU-load, and lower performance). As the table above shows, NeoChrom can accelerate widgets like ScalableImage and TextureMapper. This means that we can use those widgets to a greater extent while keeping a high performance."),(0,n.kt)("h2",h({},{id:"rendering-time-improvements-with-neochrom"}),"Rendering Time Improvements with NeoChrom."),(0,n.kt)("p",null,"The following examples illustrate the speed-up provided by NeoChrom over DMA2D and software rendering. We have created two projects with the Designer. The first project shows an Image on a Box background. The second project shows a TextureMapper Widget on a Box background. The widget is redrawn in every frame.  In both cases the bitmap is of size 128x128, in ARGB8888 format, and stored in the internal flash. The framebuffer is in RGB565 format."),(0,n.kt)(a.Z,{width:"40%",imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/designer-image.webp",mdxType:"Figure"},"The Image project"),(0,n.kt)(a.Z,{width:"40%",imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/designer-texturemapper.webp",mdxType:"Figure"},"The TextureMapper project"),(0,n.kt)("p",null,"Both projects have been executed on a STM32F746 and a STM32U599 Discovery board."),(0,n.kt)("p",null,"We have measured the rendering times by connecting a GPIO to a logic analyzer:"),(0,n.kt)(a.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/render-time-f746-image.webp",mdxType:"Figure"},"STM32F746 running the Image project"),(0,n.kt)("p",null,"The figure above shows the frame rate and rendering time when runninng on the STM32F746. Channel 00 shows the VSYNC signal. We see that the display runs with a frame interval of 16.9 ms (A1 to A2) corresponding to a frame rate of 59.2 Hz. Channel 01 shows the render time (high when rendering, B1 to B2). The time to render the Image is thus 1.3 ms. Image rendering is fast on the STM32F746."),(0,n.kt)(a.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/render-time-f746-texturemapper.webp",mdxType:"Figure"},"STM32F746 running the TextureMapper project"),(0,n.kt)("p",null,"The figure above is the texture mapper project running on the STM32F746. The rendering time of the TextureMapper is 4.5 ms. The TextureMapper widget is much slower than the Image."),(0,n.kt)(a.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/render-time-u599-image.webp",mdxType:"Figure"},"STM32U599 running the Image project"),(0,n.kt)("p",null,"Here is the STM32U599 Discovery kit running the Image project. The STM32U599 Discovery kit display has a display frame interval of 12.26 ms corresponding to a frame rate of 81.6 Hz. The render time of the Image is 0.7 ms. We see that the Image widget is faster than on the STM32F746 kit."),(0,n.kt)(a.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/render-time-u599-texturemapper.webp",mdxType:"Figure"},"STM32U599 running the TextureMapper project"),(0,n.kt)("p",null,"The render time of the TextureMapper is 1.7 ms. The TextureMapper is also faster on STM32U599 than on the STM32F746."),(0,n.kt)("h3",h({},{id:"rendering-time-summary"}),"Rendering Time Summary"),(0,n.kt)("p",null,"The table below shows the rendering times:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",h({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Element")),(0,n.kt)("th",h({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"STM32F746")),(0,n.kt)("th",h({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"STM32U599")),(0,n.kt)("th",h({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Speed up")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Frequency"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"200 MHz"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"160 MHz"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"0.8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Image"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"1.3 ms"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"0.7 ms"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"~2x")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"TextureMapper"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"4.5 ms"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"1.7 ms"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"~3x")))),(0,n.kt)("p",null,"We see that even with a reduced clock frequency the STM32U599 greatly outperforms the STM32F746, especially with the TextureMapper."),(0,n.kt)("p",null,"These measurements are taken with the image in internal flash and the framebuffer in external SDRAM for STM32F746. The framebuffer is in internal SRAM for the STM32U599 (as this will be typical scenario). Moving the image to external flash hurts the STM32F746 as it uses QSPI flash (4-bit bus), whereas the STM32U599 uses a faster OSPI flash (8-bit bus)."),(0,n.kt)("p",null,"The STM32F746 Discovery kit can run with a 480x272 RGB565 framebuffer in the internal RAM. This improves the performance (Image down to 1.03 ms), but it is not the standard configuration for STM32F746, as it uses a very large part of the internal SRAM for the frame buffer, leaving little RAM for other application components.",(0,n.kt)("br",{parentName:"p"}),"\n","Running with a single frame buffers is also not suitable for all applications."),(0,n.kt)("h3",h({},{id:"richer-user-interfaces"}),"Richer User Interfaces"),(0,n.kt)("p",null,"The improved rendering performance can be used to create user interfaces with more advanced animations. For example more scaled or rotated elements.",(0,n.kt)("br",{parentName:"p"}),"\n","For the STM32F746, the frame refresh time was 16.8 ms. This means that the application must keep the render time below this to keep a frame rate of 60 fps. We can therefore have at most 3.75 texture mappers of that complexity (16.8 ms / 4.48 ms) on the screen, or a single larger texture mapper of size 247 x 247 (the same number of pixels and approximately the same rendering time).",(0,n.kt)("br",{parentName:"p"}),"\n","If we assume the same screen refresh rate, but use the STM32U599 CPU, we can have 14.36 texture mappers (16.8 ms / 1.17 ms), or a single texture mapper of size 485 x 485."),(0,n.kt)("p",null,"The following figure shows two applications running on respectively the STM32F746 and the STM32U599. The idea is to make a carousel-like menu where elements are scaled up when going to the center and scaled down when going out (here we just use the same texture for all the elements)."),(0,n.kt)(a.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/comparison-f746-u599.webp",mdxType:"Figure"},"STM32F746 (left) and STM32U599 (right) running the texture mapper based carousel project"),(0,n.kt)("p",null,"The STM32F746 is capable of showing three icons, one big icon, scaled up by a factor of 1.9, and two smaller icons. The STM32U599 is capable of showing 7 icons. The largest icon is scaled up by factor 2.7."),(0,n.kt)("p",null,"The rendering time of the application with 3 icons on the STM32F746 is 14.38 ms. The rendering time of the application with 7 icons on the STM32U599 is 14.93 ms. Both UIs can thus run in 60 fps, with the STM32U599 showing much more content in a higher resolution."),(0,n.kt)("h2",h({},{id:"creating-a-project"}),"Creating a project"),(0,n.kt)("p",null,"CubeMX and the TouchGFX Generator supports the NeoChrom. In CubeMX the accelerator is known by its code name GPU2D. The GPU2D accelerator is only available to TouchGFX if GPU2D is enabled in the TouchGFX configuration in CubeMX.",(0,n.kt)("br",{parentName:"p"}),"\n","If you use the STM32U599 TBS (template project) provided with the TouchGFX Designer this is already done. If you make your own custom project, make sure to enable the GPU2D Accelerator as shown below:"),(0,n.kt)(a.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/cubemx-u599-configuration.webp",mdxType:"Figure"},"Enabling GPU2D (NeoChrom) in CubeMX"),(0,n.kt)("p",null,'After enabling GPU2D press "Generate Code" in CubeMX. This regenerates the target configuration code. Now open the project in the TouchGFX Designer and generate code there also (F4).'),(0,n.kt)("p",null,"The Designer generates assets (images, fonts, and texts) and simulator code, that matches the target configuration. You are now ready to compile the code with IAR."),(0,n.kt)("p",null,"If you are starting a project from the Designer there is no need to open CubeMX unless you need to change some hardware settings."),(0,n.kt)("h2",h({},{id:"supported-ides"}),"Supported IDEs"),(0,n.kt)("p",null,"The STM32U599 TBS (version 3.0.0) is currently only supported with IAR Workbench."),(0,n.kt)("p",null,"A recent version of IAR is required (8.5x.x). Make sure that the processor variant (STM32U599NJ for the Discovery board) is supported by checking the General Options:"),(0,n.kt)(a.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/iar-configuration.webp",mdxType:"Figure"},"IAR General Options"),(0,n.kt)("h2",h({},{id:"framebuffer-formats"}),"Framebuffer Formats"),(0,n.kt)("p",null,"The STM32U599 discovery board supports three framebuffer formats: RGB565, RGB888, ARGB8888. These are configurable from CubeMX."),(0,n.kt)("h2",h({},{id:"neochrom-limitations"}),"NeoChrom Limitations"),(0,n.kt)("p",null,"The NeoChrom graphics accelerator in STM32U599 does not support the L8 image formats (L8_RGB565, L8_RGB888, L8_ARGB8888).",(0,n.kt)("br",{parentName:"p"}),"\n","If you use these image formats in a TouchGFX application running on STM32U599 the images will be drawn using DMA2D. If you use these formats with ScalableImage or TextureMapper a software fallback will be used."),(0,n.kt)("p",null,"It is therefore recommended to not use L8 images with STM32U599."))}T.isMDXComponent=!0}}]);