"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3121],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),h=a,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},22425:function(e,n,t){var r=t(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}n.Z=a},44035:function(e,n,t){var r=t(67294),a=t(25026);n.Z=function(e){const n=e.noShadow||!1,t=e.width,i=e.height,o=(0,a.Z)(e.imageSource);return n?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:t,height:i,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:t,height:i,src:o})),r.createElement("p",null,e.children))}},29415:function(e,n,t){var r=t(67294),a=t(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}n.Z=o},88678:function(e,n,t){var r=t(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}n.Z=a},42923:function(e,n,t){t.r(n),t.d(n,{assets:function(){return E},contentTitle:function(){return v},default:function(){return O},frontMatter:function(){return g},metadata:function(){return P},toc:function(){return b}});var r=t(3905),a=t(44035),i=t(29415),o=t(22425),l=t(39130),c=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,n,t)=>n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,f=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&m(e,t,n[t]);if(u)for(var t of u(n))h.call(n,t)&&m(e,t,n[t]);return e};const g={id:"scenarios-measure-performance",title:"Performance Measurement"},v=void 0,P={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-measure-performance",id:"development/touchgfx-hal-development/scenarios/scenarios-measure-performance",title:"Performance Measurement",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-measure-performance.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-measure-performance",permalink:"/4.21/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-measure-performance",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-measure-performance",title:"Performance Measurement"},sidebar:"docs",previous:{title:"MIPI-DSI Video Mode",permalink:"/4.21/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode"},next:{title:"UI\u5f00\u53d1\u4ecb\u7ecd",permalink:"/4.21/zh-CN/docs/development/ui-development/ui-development-introduction"}},E={},b=[{value:"Signals exposed by TouchGFX Core",id:"performance-metrics",level:2},{value:"STM32CubeMX GPIO configuration",id:"stm32cubmx-gpio-configuration",level:2},{value:"TouchGFXGPIO Class",id:"touchgfxgpio-class",level:2}],C={toc:b};function O(e){var n,t=e,{components:c}=t,m=((e,n)=>{var t={};for(var r in e)d.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&u)for(var r of u(e))n.indexOf(r)<0&&h.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=f(f({},C),m),s(n,p({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,'TouchGFX Core exposes several signals that can be used to measure performance. Users can instrument their applications to trigger individual GPIOs when these signals are triggered internally, allowing visualization of "render time" and other useful signals. This article covers how to configure GPIOs in CubeMX and what each exposed signal does.'),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)(l.Z,{to:"../../../basic-concepts/performance",mdxType:"Link"},"Basic Concepts: Performance")),(0,r.kt)("h2",f({},{id:"performance-metrics"}),"Signals exposed by TouchGFX Core"),(0,r.kt)("p",null,"The following signals are defined within the TouchGFX Core headerfile ",(0,r.kt)("inlineCode",{parentName:"p"},"GPIO.hpp"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),"Signal"),(0,r.kt)("th",f({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"VSYNC_FREQ"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"TouchGFX applications are driven by internal or external events like interrupts from an LTDC, external peripherals or hardware timers. When the TouchGFX Engine has finished rendering it waits for the ",(0,r.kt)("inlineCode",{parentName:"td"},"VSYNC")," signal. It indicates when the display has finished updating so TouchGFX can start rendering the next frame.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"RENDER_TIME"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"This is the time from when a frame is transferred to TouchGFX to the end of the rendering phase.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"FRAME_RATE"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"This is the frame rate of the user application. The signal toggles when a frame is updated. If render time exceeds the max render time defined by the display, the frame rate will drop.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"MCU_ACTIVE"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"this signal is high whenever TouchGFX used the MCU. The MCU is active when the framebuffers are transferred and when TouchGFX is doing work i.e. not in the idle task.")))),(0,r.kt)("h2",f({},{id:"stm32cubmx-gpio-configuration"}),"STM32CubeMX GPIO configuration"),(0,r.kt)("p",null,"STM32CubeMX can be used for easy configuration of GPIO output pins. By giving each Pin a ",(0,r.kt)("i",null,"User Label"),", the code generated by by TouchGFX Generator in ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXGPIO.cpp")," know which pin to toggle when a signal is received internally from TouchGFX Core."),(0,r.kt)("p",null,"In the ",(0,r.kt)("i",null,"Pinout")," view configure four unused GPIO's as outputs. In ",(0,r.kt)("i",null,"STM32CubeMX GPIO IP")," give the ",(0,r.kt)("inlineCode",{parentName:"p"},"User Label")," for each pin a label that match the specific name defined by TouchGFX Core that should be triggered through a GPIO (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"VSYNC_FREQ"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RENDER_TIME"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"FRAME_RATE")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"MCU_ACTIVE"),". )."),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/performance-measure-gpio-config.webp",mdxType:"Figure"}),(0,r.kt)("h2",f({},{id:"touchgfxgpio-class"}),"TouchGFXGPIO Class"),(0,r.kt)("p",null,"TouchGFX Generator generates the functions for the GPIO class in the file ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXGPIO.cpp"),". TouchGFX Core calls functions on the ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXGPIO")," class which then toggles pins based on the users configuration in STM32CubeMX. ",(0,r.kt)("inlineCode",{parentName:"p"},"GPIO::set")," is shown in the snippet below:"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFXGPIO.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"void GPIO::set(GPIO_ID id)\n{\n    switch (id)\n    {\n    case GPIO::VSYNC_FREQ:\n#if defined(VSYNC_FREQ_GPIO_Port) && defined(VSYNC_FREQ_Pin)\n        HAL_GPIO_WritePin(VSYNC_FREQ_GPIO_Port, VSYNC_FREQ_Pin, GPIO_PIN_SET);\n#endif\n        break;\n    case GPIO::RENDER_TIME:\n#if defined(RENDER_TIME_GPIO_Port) && defined(RENDER_TIME_Pin)\n        HAL_GPIO_WritePin(RENDER_TIME_GPIO_Port, RENDER_TIME_Pin, GPIO_PIN_SET);\n#endif\n        break;\n    case GPIO::FRAME_RATE:\n#if defined(FRAME_RATE_GPIO_Port) && defined(FRAME_RATE_Pin)\n        HAL_GPIO_WritePin(FRAME_RATE_GPIO_Port, FRAME_RATE_Pin, GPIO_PIN_SET);\n#endif\n        break;\n    case GPIO::MCU_ACTIVE:\n#if defined(MCU_ACTIVE_GPIO_Port) && defined(MCU_ACTIVE_Pin)\n        HAL_GPIO_WritePin(MCU_ACTIVE_GPIO_Port, MCU_ACTIVE_Pin, GPIO_PIN_SET);\n#endif\n        break;\n    }\n}\n")),(0,r.kt)("p",null,"If a pin has the user label ",(0,r.kt)("inlineCode",{parentName:"p"},"VSYNC_FREQ")," CubeMX will automatically generate matching symbols for Port, Pin, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"VSYNC_FREQ_GPIO_Port"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"VSYNC_FREQ_Pin"),". To measure the configured signals use an oscilloscope or logic analyser. The image below shows a logic analyser displaying each of the four signals. The application is running on an STM32F746G-DISCO with the Animated Image UI Example. The ",(0,r.kt)("inlineCode",{parentName:"p"},"VSYNC")," signal for this application is generated by the LTDC every 16ms."),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/performance-measurement-example.webp",mdxType:"Figure"}))}O.isMDXComponent=!0}}]);