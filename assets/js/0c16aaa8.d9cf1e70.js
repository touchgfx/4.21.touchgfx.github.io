"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[852],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),u=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,m=d["".concat(c,".").concat(p)]||d[p]||h[p]||a;return r?o.createElement(m,l(l({ref:t},s),{},{components:r})):o.createElement(m,l({ref:t},s))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22425:function(e,t,r){var o=r(67294);class n extends o.Component{render(){return o.createElement("div",{className:"code-header"},o.createElement("div",null,o.createElement("h5",null,this.props.children)))}}t.Z=n},44035:function(e,t,r){var o=r(67294),n=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,l=(0,n.Z)(e.imageSource);return t?o.createElement("div",{className:"figure noshadow"},o.createElement("a",{href:l,target:"_blank"},o.createElement("img",{width:r,height:a,src:l})),o.createElement("p",null,e.children)):o.createElement("div",{className:"figure"},o.createElement("a",{href:l,target:"_blank"},o.createElement("img",{width:r,height:a,src:l})),o.createElement("p",null,e.children))}},88678:function(e,t,r){var o=r(67294);class n extends o.Component{render(){const e=`highlight highlight-${this.props.type}`;return o.createElement("div",{className:e},o.createElement("div",{className:"highlight-heading"},o.createElement("h5",null,o.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),o.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=n},93054:function(e,t,r){var o=r(67294),n=r(88678);const a=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends o.Component{render(){return o.createElement(n.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=l},45349:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return y}});var o=r(3905),n=r(44035),a=r(93054),l=r(22425),i=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))d.call(t,r)&&p(e,r,t[r]);return e};const f={id:"09-touch-controller",title:"9. Touch Controller",sidebar_label:"9. Touch Controller"},g=void 0,b={unversionedId:"development/board-bring-up/how-to/09-touch-controller",id:"development/board-bring-up/how-to/09-touch-controller",title:"9. Touch Controller",description:"",source:"@site/docs/development/board-bring-up/how-to/09-touch-controller.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/09-touch-controller",permalink:"/4.21/docs/development/board-bring-up/how-to/09-touch-controller",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"09-touch-controller",title:"9. Touch Controller",sidebar_label:"9. Touch Controller"},sidebar:"docs",previous:{title:"8. Hardware acceleration",permalink:"/4.21/docs/development/board-bring-up/how-to/08-hardware-acceleration"},next:{title:"10. Physical Buttons",permalink:"/4.21/docs/development/board-bring-up/how-to/10-physical-buttons"}},v={},y=[{value:"Motivation",id:"motivation",level:2},{value:"Goal",id:"goal",level:2},{value:"Verification",id:"verification",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Do",id:"do",level:2},{value:"Performance is as expected",id:"performance-is-as-expected",level:3}],k={toc:y};function w(e){var t,r=e,{components:i}=r,p=((e,t)=>{var r={};for(var o in e)h.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&s)for(var o of s(e))t.indexOf(o)<0&&d.call(e,o)&&(r[o]=e[o]);return r})(r,["components"]);return(0,o.kt)("wrapper",(t=m(m({},k),p),c(t,u({components:i,mdxType:"MDXLayout"}))),(0,o.kt)("h2",m({},{id:"motivation"}),"Motivation"),(0,o.kt)("p",null,"Touch coordinates must be readable from a touch controller for the user to be able to interact with the application. The code developed in this step will be used later to develop the TouchGFX abstraction layer at a later stage."),(0,o.kt)(a.Z,{mdxType:"Note"},"Skip this step if a touch controller is not relevant for your board bring up."),(0,o.kt)("h2",m({},{id:"goal"}),"Goal"),(0,o.kt)("p",null,"The goal of this step is to ensure that touch coordinates can be read from the touch controller on your display."),(0,o.kt)("h3",m({},{id:"verification"}),"Verification"),(0,o.kt)("p",null,"Here are the verification points for this section:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",m({parentName:"tr"},{align:null}),"Verification Point"),(0,o.kt)("th",m({parentName:"tr"},{align:null}),"Rationale"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",m({parentName:"tr"},{align:null}),"Touch controller and MCU are configured"),(0,o.kt)("td",m({parentName:"tr"},{align:null}),"MCU must be configured to read from the touch controller over e.g. I2C.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",m({parentName:"tr"},{align:null}),"Touch controller registers can be read"),(0,o.kt)("td",m({parentName:"tr"},{align:null}),"The TouchGFX abstraction layer can use this code to get the touch coordinates from the controller.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",m({parentName:"tr"},{align:null}),"Reading performs as expected"),(0,o.kt)("td",m({parentName:"tr"},{align:null}),"Polling is a part of application render time. If polling takes too long touch polling should be moved to a different thread or made interrupt based.")))),(0,o.kt)("h2",m({},{id:"prerequisites"}),"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Display with touch controller"),(0,o.kt)("li",{parentName:"ul"},"Drivers to read from touch controller")),(0,o.kt)("h2",m({},{id:"do"}),"Do"),(0,o.kt)("p",null,"This step consists of two elements: Configure the MCU to communicate with the touch controller, and write driver code to talk to the touch controller."),(0,o.kt)("p",null,"Most touch controllers are connected to a I2C bus. The I2C communication is configured in STM32CubeMX under Connectivity -> I2C1:"),(0,o.kt)(n.Z,{imageSource:"/img/development/board-bring-up/touch/cubemx-01.webp",noShadow:!1,width:"600",mdxType:"Figure"},"Configuring I2C"),(0,o.kt)("p",null,"Many STM32 MCUs have more than one I2C controller, so select the one connected to your touch controller. Remember to configure the relevant GPIOs also."),(0,o.kt)("p",null,'If you do not have driver code for your touch controller you need to\nwrite it from scratch. The STM32Cube Firmware for your MCU contains\nexamples for I2C communication. These can be a start. Check the\ndatasheet for the touch controller what registers to read to get the\ntouch coordinates. The first thing to check is the I2C address of the\ntouch controller and then read a "device id" registers for testing.'),(0,o.kt)("p",null,"When you have the basic I2C running you need to develop a driver\nfunction that we will need when integrating with TouchGFX later. The\nfunction should return true if there is a touch, false if not, and\nalso provide the coordinates."),(0,o.kt)("p",null,"The code example below shows how this code might look, driver code\nbeing abstracted by the function ",(0,o.kt)("inlineCode",{parentName:"p"},"myTouchController_GetState"),":"),(0,o.kt)(l.Z,{mdxType:"CodeHeader"},"main.c"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"    uint16_t x;\n    uint16_t y;\n\n    TouchControllerState state;\n    if (myTouchController_GetState(&state))\n    {\n        x = state.touchY;\n        y = state.touchX;\n        //break point here\n    }\n")),(0,o.kt)("p",null,"Check with your debugger that the correct x and y values are received\nfrom the touch controller."),(0,o.kt)("p",null,"Some touch controllers are able to report multiple touch points. This\nis not supported by TouchGFX and can be ignored. Most often you just\nselect the first touch point."),(0,o.kt)("p",null,'In the "TouchGFX AL Development" article ',(0,o.kt)("a",m({parentName:"p"},{href:"../../touchgfx-hal-development/touchgfx-architecture#report-touch-and-physical-button-events"}),"Abstraction Layer")," it is explained how to send these\nvalues to TouchGFX."),(0,o.kt)("h3",m({},{id:"performance-is-as-expected"}),"Performance is as expected"),(0,o.kt)("p",null,"Sampling touch should be possible within 1 ms if the code is executed\nin the same thread as the TouchGFX Application. If not fast enough,\nconsider moving the code to a separate task, at a later stage."))}w.isMDXComponent=!0}}]);