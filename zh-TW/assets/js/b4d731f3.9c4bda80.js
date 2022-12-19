"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2047],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},84541:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(67294),a=n(86010),o=n(99492),i=n(39130),l=n(35096),s=n(33084),c="cardContainer_fWXF",u="cardTitle_rnsV",h="cardDescription_PWke";function p({href:e,children:t}){return r.createElement(i.Z,{href:e,className:(0,a.Z)("card padding--lg",c)},t)}function d({href:e,icon:t,title:n,description:o}){return r.createElement(p,{href:e},r.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:n},t," ",n),o&&r.createElement("p",{className:(0,a.Z)("text--truncate",h),title:o},o))}function m({item:e}){const t=(0,o.Wl)(e);return t?r.createElement(d,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f({item:e}){var t;const n=(0,l.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=e.docId)?t:void 0);return r.createElement(d,{href:e.href,icon:n,title:e.label,description:null==a?void 0:a.description})}function g({item:e}){switch(e.type){case"link":return r.createElement(f,{item:e});case"category":return r.createElement(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function b({items:e,className:t}){return r.createElement("section",{className:(0,a.Z)("row",t)},function(e){return e.filter((e=>"category"!==e.type||!!(0,o.Wl)(e)))}(e).map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},27386:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return k}});var r=n(3905),a=n(44035),o=n(84541),i=n(99492),l=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&d(e,n,t[n]);return e};const f={id:"touchgfx-al-development-introduction",title:"TouchGFX AL Development Introduction",sidebar_label:"TouchGFX AL Development Introduction"},g=void 0,b={unversionedId:"development/touchgfx-hal-development/touchgfx-al-development-introduction",id:"development/touchgfx-hal-development/touchgfx-al-development-introduction",title:"TouchGFX AL Development Introduction",description:"",source:"@site/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction.mdx",sourceDirName:"development/touchgfx-hal-development",slug:"/development/touchgfx-hal-development/touchgfx-al-development-introduction",permalink:"/4.21/zh-TW/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"touchgfx-al-development-introduction",title:"TouchGFX AL Development Introduction",sidebar_label:"TouchGFX AL Development Introduction"},sidebar:"docs",previous:{title:"11. Flash Loader",permalink:"/4.21/zh-TW/docs/development/board-bring-up/how-to/11-flash-loader"},next:{title:"Abstraction Layer Architecture",permalink:"/4.21/zh-TW/docs/development/touchgfx-hal-development/touchgfx-architecture"}},y={},k=[{value:"Responsibilities of the Abstraction Layer",id:"responsibilities-of-the-abstraction-layer",level:2},{value:"Example setup: Two framebuffers - MCU with LTDC",id:"example-setup-two-framebuffers---mcu-with-ltdc",level:2}],v={toc:k};function w(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},v),d),s(t,c({components:l,mdxType:"MDXLayout"}))),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/activities-selected-002.png",noShadow:!0,width:"600",mdxType:"Figure"},"Project activity"),(0,r.kt)("p",null,"The TouchGFX Abstraction Layer (AL), in a TouchGFX application, is the software component that sits between the Board Initialization Code,\ndeveloped during the Board Bring-Up phase, and the TouchGFX Engine. Its main task is to tie together the Engine with the underlying hardware\nand operating system. This is done by abstracting the specifics of the underlying hardware and OS such that it can be treated in a unified way\nby the Engine."),(0,r.kt)("p",null,"The AL consists of two different parts, the Hardware Abstraction Layer (HAL) and the Operating System Abstraction Layer (OSAL)."),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/components-selected-002.png",noShadow:!0,width:"600",mdxType:"Figure"},"Project component"),(0,r.kt)("p",null,"In this section you will get a general introduction to the principles and responsibilities of the abstraction layer and how it interacts\nwith the TouchGFX Engine. "),(0,r.kt)("p",null,"You will also get an introduction to the TouchGFX Generator. The TouchGFX Generator, a part of X-CUBE-TOUCHGFX, is ",(0,r.kt)("em",{parentName:"p"},"the")," primary tool for\nthe creation of the Abstraction Layer. It is an STM32CubeMX Additional-Software component that helps developers configure the TouchGFX AL to run\non their hardware platform. Based on existing STM32CubeMX settings and user inputs, TouchGFX Generator will generate the files required\nto configure a working TouchGFX application. They include files for TouchGFX HAL, TouchGFX OSAL and TouchGFX Configuration."),(0,r.kt)("p",null,"In the following sections you will get an understanding of the general architecture of the TouchGFX AL. You will also find a ",(0,r.kt)("em",{parentName:"p"},"User Guide"),"\non how to use TouchGFX Generator inside STM32CubeMX. Useful scenarios are also shown to help you with common use cases."),(0,r.kt)(o.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}),(0,r.kt)("h2",m({},{id:"responsibilities-of-the-abstraction-layer"}),"Responsibilities of the Abstraction Layer"),(0,r.kt)("p",null,"As explaned in the ",(0,r.kt)("a",m({parentName:"p"},{href:"../../basic-concepts/rendering"}),"Main Loop")," section in the Basic Concepts chapter, the TouchGFX Engine has a main loop that performs three basic steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Collect input (Touch coordinates, Buttons)"),(0,r.kt)("li",{parentName:"ol"},"Update the Scene Model"),(0,r.kt)("li",{parentName:"ol"},"Render the Scene Model to the Framebuffer")),(0,r.kt)("p",null,"These three steps ensure the main responsibility of the TouchGFX engine, which is to update the framebuffer to reflect the current state of the application."),(0,r.kt)("p",null,"The actual transfer of framebuffer data to the display as well as the collection of external input is not directly handled by the engine, but instead delegated from the engine to the TouchGFX AL."),(0,r.kt)("p",null,"The main loop will continuously update the framebuffer(s) over and over again. This process must be synchronized with the actual update frequency and readyness of the display to ensure that all frames will be transferred and displayed correctly on the display. If no synchronization takes place the main loop will continuously update and potentionally overwrite the framebuffer(s) before it has been transferred. This synchronization is the responsibility of the AL."),(0,r.kt)("p",null,"The TouchGFX AL also has the responsibility of controlling the framebuffer memory area and the access to it. This means that all accesses of the framebuffer will go through the AL."),(0,r.kt)("p",null,"To detail, the responsibilities of the TouchGFX AL are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Responsibility"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Synchronize TouchGFX Engine main loop with display transfer"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"When the next frame has been calculated and rendered in the available framebuffer, the engine main loop must be halted to make sure that it does not overwrite the newly assembled framebuffer before it has been transferred to the display.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Report touch and physical button events"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Sample if a touch event has occurred and the corresponding coordinates hereof. Sample whether or not any physical button or similar has been activated. Report these events to the engine. ",(0,r.kt)("br",null),"Note that other external events are to be propagated to the TouchGFX application through a different mechanism. Read more on this in the section on ",(0,r.kt)("a",m({parentName:"td"},{href:"../ui-development/touchgfx-engine-features/backend-communication"}),"backend communication"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Synchronize framebuffer access"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"The framebuffer memory is the responsibility of the TouchGFX AL and since it can be accessed by different actors, like the main loop thread and the DMA, TouchGFX AL must offer a way to protect this memory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Report the next available framebuffer area"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"The AL must be able to answer which part of the current framebuffer can be updated next. In a standard two framebuffer setup, this will always be the complete framebuffer, since in that case you always have one entire framebuffer dedicated for rendering and one for transferring to the display. In a one or partial framebuffer setup this is more complex.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Perform render operations"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"While rendering the scene model, the engine main loop will ask the AL to render parts hereof. A specific TouchGFX AL implementation will utilize the underlying hardware to render graphics primitives. One example is rendering bitmaps on MCUs with the Chrom-ART graphics accelarator. TouchGFX comes with optimized rendering methods built-in for all available platforms, so no need to customize this.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Handle framebuffer transfer to display"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"The engine informs the AL which part of which framebuffer must be transferred. The AL should initiate this transfer making sure that the pixels eventually end up on the physical display.")))),(0,r.kt)("p",null,"Since TouchGFX AL is a passive software module, not having its own thread or similar, it must perform its actions through certain hooks (functions) called from the TouchGFX Engine main loop or through interrupts."),(0,r.kt)("p",null,"The available set of hooks and interrupts are depicted below."),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/al-introduction/al-hooks-00.png",noShadow:!0,mdxType:"Figure"},"Available hooks and interrupts"),(0,r.kt)("p",null,"It is up to the AL developer to implement these hooks so that the responsibilities of the AL are covered given the underlying hardware and operating system. If the AL developer needs other means to support the  responsibilities, the developer can setup interrupts to activate at certain points. Examples of this is LTDC vertical synchronization interrupt and a hardware timer. The ",(0,r.kt)("em",{parentName:"p"},"I1: Display ready")," interrupt is an example of a vertical synchronization interrupt. Note that the setup of these interrupts is considered a part of the AL development."),(0,r.kt)("h2",m({},{id:"example-setup-two-framebuffers---mcu-with-ltdc"}),"Example setup: Two framebuffers - MCU with LTDC"),(0,r.kt)("p",null,"One common setup is having two framebuffers with an MCU with LTDC. The AL actions for each hook will in this setup most often be as follows."),(0,r.kt)("p",null,"Setup the AL to react to the LTDC VSYNC interrupt such that I1 is executed each time the display is ready to receive a new frame. This is used to synchronize the main loop with the display."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Hooks and Interrupts"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Actions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"I1: Display ready"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Setup the LTDC VSYNC interrupt to trigger this.",(0,r.kt)("br",null)," Unblock the main loop and initiate framebuffer transfer of the framebuffer prepared in previous frame")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"H1: Report touch and physical button events"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Return any information on touch events or physical button clicks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"H2: Get next available framebuffer area"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Using the double buffer setup simply return the entire framebuffer area of the framebuffer not currently being transferred to the display")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"H3: Perform render operations"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Depends on the capabilities of the MCU. Perform the hardware assisted render operations and software fallback for the rest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"H4: Rendering of area complete"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"No action")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"H5: Rendering done"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Block the main loop")))),(0,r.kt)("p",null,"This setup gives the following execution flow:"),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/al-introduction/al-actions-00.png",noShadow:!0,mdxType:"Figure"},"Execution flow in setup with two framebuffers and an MCU with LTDC"),(0,r.kt)("p",null,"This describes the overall design of the AL for this setup. The following sections goes into depth on how to implement Abstraction Layers."))}w.isMDXComponent=!0}}]);