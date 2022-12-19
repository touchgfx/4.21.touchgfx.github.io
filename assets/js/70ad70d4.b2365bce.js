"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6940],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=d(n),s=a,g=h["".concat(c,".").concat(s)]||h[s]||u[s]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=i},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},17795:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return w},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return T}});var r=n(3905),a=n(44035),o=n(29415),i=n(39130),l=n(22425),c=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&g(e,n,t[n]);if(u)for(var n of u(t))s.call(t,n)&&g(e,n,t[n]);return e};const f={id:"generating-code",title:"Generating Code",sidebar_label:"Generating Code"},b=void 0,k={unversionedId:"development/touchgfx-hal-development/generator-how-to/generating-code",id:"development/touchgfx-hal-development/generator-how-to/generating-code",title:"Generating Code",description:"",source:"@site/docs/development/touchgfx-hal-development/generator-how-to/generating-code.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to",slug:"/development/touchgfx-hal-development/generator-how-to/generating-code",permalink:"/4.21/docs/development/touchgfx-hal-development/generator-how-to/generating-code",draft:!1,tags:[],version:"current",frontMatter:{id:"generating-code",title:"Generating Code",sidebar_label:"Generating Code"},sidebar:"docs",previous:{title:"Video Decoding",permalink:"/4.21/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding"},next:{title:"Modifying Generated Behavior",permalink:"/4.21/docs/development/touchgfx-hal-development/generator-how-to/modifying-generated-behavior"}},v={},T=[{value:"Generated project",id:"generated-project",level:2},{value:"Generated Code Structure",id:"generated-code-structure",level:2}],y={toc:T};function w(e){var t,n=e,{components:c}=n,g=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},y),g),d(t,p({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"This section describes what the Touchgfx Generator outputs when generating code in STM32CubeMX."),(0,r.kt)("h2",m({},{id:"generated-project"}),"Generated project"),(0,r.kt)("p",null,"Other than the GCC compiler that is bundled with TouchGFX and used when ",(0,r.kt)("a",m({parentName:"p"},{href:"../../ui-development/designer-user-guide/main-window#run-target"}),"run target"),"\nis pressed in TouchGFX Designer, TouchGFX also works with (at least) the following IDEs when generating code using the\n",(0,r.kt)("strong",{parentName:"p"},"Generate Code")," button in STM32CubeMX:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"EWARM"),(0,r.kt)("li",{parentName:"ol"},"MDK-ARM"),(0,r.kt)("li",{parentName:"ol"},"STM32CubeIDE")),(0,r.kt)("p",null,"For optimal project structure navigate to ",(0,r.kt)("strong",{parentName:"p"},"Project Manager")," and select the following options for project generation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Application structure: ",(0,r.kt)("strong",{parentName:"li"},"Advanced")),(0,r.kt)("li",{parentName:"ul"},"Disable ",(0,r.kt)("strong",{parentName:"li"},"Generate under root")," (STM32CubeIDE only)")),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/project-manager.webp",noShadow:!1,mdxType:"Figure"},"Select Advanced application structure and deselect Generate under root"),(0,r.kt)("p",null,"After generating code STM32CubeMX will generate code for the selected middlewares, utilities, drivers, toolchain etc. "),(0,r.kt)("p",null,"STM32CubeMX will also generate a ",(0,r.kt)("em",{parentName:"p"},"TouchGFX")," folder in the root of the project folder with the following structure:"),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/folder-b.webp",noShadow:!1,mdxType:"Figure"},"TouchGFX folder structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"App")," folder which contains code to initialize and start TouchGFX."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"target")," folder which contains read-only generated code (inside generated/) and modifiable user classes (",(0,r.kt)("inlineCode",{parentName:"li"},"STM32TouchController.cpp"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"TouchGFXGPIO.cpp")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"TouchGFXHAL.cpp"),")."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},".part")," file which is opened with the TouchGFX Designer in order to create a full TouchGFX project complete with TouchGFX header files and libraries. The part file contains relevant application information such as pixel format, and canvas dimensions that the designer uses when generating TouchGFX application code.")),(0,r.kt)("p",null,"Once code is generated through STM32CubeMX, the TouchGFX project can be opened through TouchGFX Designer where the UI is developed.\nTouchGFX Designer automatically adds any additional generated code files to the target IDE project configured for the project in STM32CubeMX."),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"See the ",(0,r.kt)(i.Z,{to:"../../ui-development/ui-development-introduction",mdxType:"Link"},"UI Development")," section for more information about UI development using the TouchGFX Designer."),(0,r.kt)("h2",m({},{id:"generated-code-structure"}),"Generated Code Structure"),(0,r.kt)("p",null,"Some files are always generated in the ",(0,r.kt)("em",{parentName:"p"},"TouchGFX")," folder regardless of the configurations made in TouchGFX Generator, while others\nare only generated if certain features are enable/disabled (e.g. Video Decoders or Custom DMA2D class). The contents of the\ngenerated files are updated whenever developer generate code in STM32CubeMX to reflect changes made in TouchGFX Generator AL configurations."),(0,r.kt)("p",null,"The listing below shows an overview of the content of a STM32CubeMX project with TouchGFX Generator ",(0,r.kt)("em",{parentName:"p"},"enabled"),", with emphasis on\nTouchGFX related files that are always generated."),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFX Folder"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"\u2502   .mxproject\n\u2502   myproject.ioc\n\u251c\u2500\u2500\u2500Core\n\u251c\u2500\u2500\u2500Drivers\n\u251c\u2500\u2500\u2500EWARM\n\u251c\u2500\u2500\u2500Middlewares\n\u2514\u2500\u2500\u2500TouchGFX\n    \u2502   ApplicationTemplate.touchgfx.part\n    \u251c\u2500\u2500\u2500App\n    \u2502       app_touchgfx.c\n    \u2502       app_touchgfx.h\n    \u2514\u2500\u2500\u2500target\n        \u2502   STM32TouchController.cpp\n        \u2502   STM32TouchController.hpp\n        \u2502   TouchGFXGPIO.cpp\n        \u2502   TouchGFXHAL.cpp\n        \u2502   TouchGFXHAL.hpp\n        \u2502\n        \u2514\u2500\u2500\u2500generated\n                OSWrappers.cpp\n                TouchGFXConfiguration.cpp\n                TouchGFXGeneratedHAL.cpp\n                TouchGFXGeneratedHAL.hpp\n")),(0,r.kt)("p",null,"The following table outlines the responsibility of the most important entries."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Folder"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Responsibility"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"myproject.ioc"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"STM32CubeMX Project file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Core"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"main.c")," and startup code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Drivers"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"CMSIS, MCU family drivers, and Board Support Packages (BSP)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"EWARM"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"IDE project folder. Can be EWARM, MDK-ARM or STM32CubeIDE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Middlewares"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Contains TouchGFX library/headerfiles and third party software like FreeRTOS.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ApplicationTemplate.touchgfx.part"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"The .part file is updated by STM32CubeMX with information that is relevant to TouchGFX Designer project, e.g. screen dimensions and bit depth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"App"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"X-CUBE interface to STM32CubeMX. ",(0,r.kt)("inlineCode",{parentName:"td"},"app_touchgfx.c")," contains definitions for the functions ",(0,r.kt)("inlineCode",{parentName:"td"},"MX_TouchGFX_Process(void)")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"MX_TouchGFX_Init(void)")," which are used to initialize TouchGFX and start its main loop.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"target/generated"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"This sub-folder contains the read-only files that get overwritten by STM32CubeMX when configurations change. ",(0,r.kt)("inlineCode",{parentName:"td"},"TouchGFXGeneratedHAL.cpp")," is a sub-class of the TouchGFX class ",(0,r.kt)("inlineCode",{parentName:"td"},"HAL")," and contains the code that STM32CubeMX can generate based on its current configuration. ",(0,r.kt)("inlineCode",{parentName:"td"},"OSWrappers.cpp")," (The OSAL) contains the functions required to synchronize with TouchGFX Engine, and finally ",(0,r.kt)("inlineCode",{parentName:"td"},"TouchGFXConfiguration.cpp")," which contains the code to construct and configure TouchGFX, including the HAL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"target"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Contains the bulk of files that can be modified by the user to extend the behavior of the HAL or to override configurations generated by STM32CubeMX. ",(0,r.kt)("inlineCode",{parentName:"td"},"STM32TouchController.cpp")," contains an empty touch controller interface. ",(0,r.kt)("inlineCode",{parentName:"td"},"TouchGFXHAL.cpp")," defines a sub-class, ",(0,r.kt)("inlineCode",{parentName:"td"},"TouchGFXHAL"),", of ",(0,r.kt)("inlineCode",{parentName:"td"},"TouchGFXGeneratedHAL"),".")))),(0,r.kt)("p",null,"It is important to know that ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXConfiguration.cpp")," contains a function that constructs the HAL and a function\nthat starts the main loop of TouchGFX. Additional configuration can be done in the editable user-classes."),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"Please read ",(0,r.kt)(i.Z,{to:"../../touchgfx-hal-development/generator-how-to/modifying-generated-behavior",mdxType:"Link"},"Modifying Generated Behavior")," section on how to apply additional configurations in editable user-classes."))}w.isMDXComponent=!0}}]);