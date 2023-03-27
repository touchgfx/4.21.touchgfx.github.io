"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4216],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=u(n),s=a,h=d["".concat(p,".").concat(s)]||d[s]||m[s]||l;return n?r.createElement(h,o(o({ref:e},c),{},{components:n})):r.createElement(h,o({ref:e},c))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(t,e,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}e.Z=a},44035:function(t,e,n){var r=n(67294),a=n(25026);e.Z=function(t){const e=t.noShadow||!1,n=t.width,l=t.height,o=(0,a.Z)(t.imageSource);return e?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,t.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,t.children))}},88678:function(t,e,n){var r=n(67294);class a extends r.Component{render(){const t=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:t},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}e.Z=a},37793:function(t,e,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}e.Z=o},90862:function(t,e,n){n.r(e),n.d(e,{assets:function(){return f},contentTitle:function(){return g},default:function(){return y},frontMatter:function(){return k},metadata:function(){return N},toc:function(){return b}});var r=n(3905),a=n(44035),l=n(37793),o=n(22425),i=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,h=(t,e)=>{for(var n in e||(e={}))m.call(e,n)&&s(t,n,e[n]);if(c)for(var n of c(e))d.call(e,n)&&s(t,n,e[n]);return t};const k={id:"touchgfx-on-lowcost-hardware",title:"\u4f4e\u786c\u9ad4\u6210\u672c\u4e0a\u7684TouchGFX"},g=void 0,N={unversionedId:"development/scenarios/touchgfx-on-lowcost-hardware",id:"development/scenarios/touchgfx-on-lowcost-hardware",title:"\u4f4e\u786c\u9ad4\u6210\u672c\u4e0a\u7684TouchGFX",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/scenarios/touchgfx-on-lowcost-hardware.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/touchgfx-on-lowcost-hardware",permalink:"/4.21/zh-TW/docs/development/scenarios/touchgfx-on-lowcost-hardware",draft:!1,tags:[],version:"current",frontMatter:{id:"touchgfx-on-lowcost-hardware",title:"\u4f4e\u786c\u9ad4\u6210\u672c\u4e0a\u7684TouchGFX"},sidebar:"docs",previous:{title:"Scenarios",permalink:"/4.21/zh-TW/docs/category/scenarios-2"},next:{title:"NeoChrom\u4e0a\u7684TouchGFX",permalink:"/4.21/zh-TW/docs/development/scenarios/touchgfx-on-gpu2d"}},f={},b=[{value:"\u786c\u9ad4\u6982\u8ff0",id:"hardware-overview",level:2},{value:"GPIO\u914d\u7f6e",id:"gpio-allocation",level:3},{value:"\u555f\u52d5\u5c08\u6848",id:"starting-a-project",level:3},{value:"\u986f\u793a\u5668\u66f4\u65b0",id:"display-updates",level:2},{value:"\u7e6a\u88fd\u901f\u5ea6",id:"drawing-speed",level:3},{value:"\u4f7f\u7528\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u6642TouchGFX\u7684\u9650\u5236",id:"touchgfx-limitations-with-serial-flash",level:2},{value:"\u7d0b\u7406\u6620\u5c04\u5668",id:"texture-mapper",level:3},{value:"\u9ede\u9663\u5716\u7e6a\u88fd\u5668",id:"bitmap-painter",level:3},{value:"L8\u8abf\u8272\u677f",id:"l8-palette",level:3},{value:"\u9a45\u52d5\u7a0b\u5f0f",id:"drivers",level:2},{value:"\u986f\u793a\u5668",id:"display",level:3},{value:"\u521d\u59cb\u5316",id:"initialization",level:4},{value:"\u6495\u88c2\u6548\u61c9",id:"tearing-effect",level:4},{value:"\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4",id:"external-flash",level:3},{value:"\u9023\u7d50\u5668\u8173\u672c",id:"linker-script",level:4},{value:"\u5feb\u9583\u8a18\u61b6\u9ad4\u4e0b\u8f09",id:"flash-loader",level:4},{value:"\u6309\u9215",id:"buttons",level:3}],v={toc:b};function y(t){var e,n=t,{components:i}=n,s=((t,e)=>{var n={};for(var r in t)m.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&c)for(var r of c(t))e.indexOf(r)<0&&d.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=h(h({},v),s),p(e,u({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u672c\u7bc0\u8a0e\u8ad6\u5982\u4f55\u5728RAM\u548cFlash\u5927\u5c0f\u6709\u9650\u3001\u7121\u52a0\u901f\u4e14\u8207\u5916\u90e8Flash\u548c\u986f\u793a\u5668\u7684SPI\u9023\u7dda\u901f\u5ea6\u6162\u7684\u4f4e\u6210\u672c\u786c\u9ad4\u4e0a\u4f7f\u7528TouchGFX\u3002"),(0,r.kt)("p",null,"\u6211\u5011\u5c07\u63d0\u4f9b\u4e00\u4e9b\u95dc\u65bc\u70ba\u6307\u5b9a\u786c\u9ad4\u7de8\u5beb\u6700\u4f73\u61c9\u7528\u7a0b\u5f0f\u7684\u5efa\u8b70\u3002"),(0,r.kt)("p",null,"\u672c\u7bc0\u5c07\u4ee5STM32G071 Nucleo\u958b\u767c\u677f\u548cX-Nucleo-GFX01M1\u64f4\u5c55\u958b\u767c\u677f\u70ba\u4f8b\uff0c\u63cf\u8ff0\u5982\u4f55\u5c0d\u786c\u9ad4\u4f7f\u7528TouchGFX\u958b\u767c\u677f\u8a2d\u7f6e\u3002 \u64f4\u5c55\u958b\u767c\u677f\u5177\u670916\u4f4d\u5143\u986f\u793a\u5668\u548c\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/g071-with-gfx01m1.webp",mdxType:"Figure"},"Nucleo-G071RB\u548cX-Nucleo-GFX01M1\u64f4\u5c55\u677f"),(0,r.kt)("h2",h({},{id:"hardware-overview"}),"\u786c\u9ad4\u6982\u8ff0"),(0,r.kt)("p",null,"\u8a72\u5957\u4ef6\u4e2d\u7684\u786c\u9ad4\u8a2d\u5b9a\u5305\u62ecSTM32G071 MCU\u3001SPI NOR flash\u3001SPI\u986f\u793a\u5668\u548c\u6416\u6746\u6309\u9215\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5143\u4ef6")),(0,r.kt)("th",h({parentName:"tr"},{align:"right"}),"\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"MCU"),(0,r.kt)("td",h({parentName:"tr"},{align:"right"}),"STM32G071RB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"MCU RAM"),(0,r.kt)("td",h({parentName:"tr"},{align:"right"}),"32 Kb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"MCU Flash"),(0,r.kt)("td",h({parentName:"tr"},{align:"right"}),"128 Kb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u986f\u793a\u5668"),(0,r.kt)("td",h({parentName:"tr"},{align:"right"}),"Displaytech DT022CTFT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u986f\u793a\u5668\u89e3\u6790\u5ea6"),(0,r.kt)("td",h({parentName:"tr"},{align:"right"}),"240 x 320")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u986f\u793a\u683c\u5f0f"),(0,r.kt)("td",h({parentName:"tr"},{align:"right"}),"16\u4f4dRGB565")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u986f\u793a\u5668\u63a7\u5236\u5668"),(0,r.kt)("td",h({parentName:"tr"},{align:"right"}),"ILI9341V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u986f\u793a\u5668\u9023\u63a5"),(0,r.kt)("td",h({parentName:"tr"},{align:"right"}),"SPI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u986f\u793a\u5668\u9023\u7dda\u901f\u5ea6"),(0,r.kt)("td",h({parentName:"tr"},{align:"right"}),"32 MHz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"NOR Flash"),(0,r.kt)("td",h({parentName:"tr"},{align:"right"}),"Macronix MX25L6433F")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"NOR Flash\u5927\u5c0f"),(0,r.kt)("td",h({parentName:"tr"},{align:"right"}),"64 Mbit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"NOR Flash\u9023\u7dda\u901f\u5ea6"),(0,r.kt)("td",h({parentName:"tr"},{align:"right"}),"32 MHz")))),(0,r.kt)("p",null,"\u986f\u793a\u5668\u9023\u63a5\u5230SPI1\u5916\u8a2d\uff0c\u800c\u5feb\u9583\u8a18\u61b6\u9ad4\u9023\u63a5\u5230SPI2\u5916\u8a2d\u3002 \u56e0\u6b64\uff0cMCU\u80fd\u5920\u5728\u5411\u986f\u793a\u5668\u767c\u9001\u8cc7\u6599\u7684\u540c\u6642\u5f9e\u5feb\u9583\u8a18\u61b6\u9ad4\u8b80\u53d6\u8cc7\u6599\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/g071-gfx01m1-architecture.webp",width:"500px",mdxType:"Figure"},"\u5177\u6709X-Nucleo-GFX01M1\u67b6\u69cb\u7684Nucleo-G071RB"),(0,r.kt)("h3",h({},{id:"gpio-allocation"}),"GPIO\u914d\u7f6e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u4fe1\u865f")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"GPIO\u5f15\u8173")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u986f\u793aCS"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"PB5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u986f\u793aDCX"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"PB3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u986f\u793aSCK"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"PA5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u986f\u793aMOSI"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"PA7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u986f\u793aTE"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"PA0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Flash CS"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"PB9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Flash SCK"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"PB13")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Flash MOSI"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"PC3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Flash MISO"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"PC2")))),(0,r.kt)("p",null,"\u4e0a\u8868\u5217\u51fa\u4e86\u5feb\u9583\u8a18\u61b6\u9ad4\u548c\u986f\u793a\u5668\u4fe1\u865f\u7684GPIO\u5206\u914d\u3002 \u9019\u4e9b\u4fe1\u865f\u53ef\u901a\u904e\u793a\u6ce2\u5668\u6216\u908f\u8f2f\u5206\u6790\u5100\u9032\u884c\u76e3\u6e2c\u3002 \u9019\u5728\u8af8\u5982\u6027\u80fd\u7b49\u554f\u984c\u7684Debug\u4e2d\u975e\u5e38\u5be6\u7528\u3002"),(0,r.kt)("h3",h({},{id:"starting-a-project"}),"\u555f\u52d5\u5c08\u6848"),(0,r.kt)("p",null,'\u5728TouchGFX Designer\u4e2d\uff0c\u53ef\u4ee5\u8f15\u9b06\u5730\u70baSTM32G071RB Nucleo\u8a55\u4f30\u5957\u4ef6\u555f\u52d5\u4e00\u500b\u5c08\u6848\u3002 \u9ede\u64ca"Create New"\uff0c\u7136\u5f8c\u9078\u64c7STM32G071 Nucleo\u3002  \u6b64\u7bc4\u672c\u5c08\u70baNucleo-G071RB\u5957\u4ef6\u548cX-Nucleo-GFX01M1\u986f\u793a\u677f\u800c\u958b\u767c\u3002'),(0,r.kt)(a.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/g071-start-new-project-4.17.webp",mdxType:"Figure"},"Nucleo-G071RB\u7684\u65b0\u5c08\u6848"),(0,r.kt)("p",null,"\u8a72\u7bc4\u672c\u652f\u63f4NOR flash\u3001\u986f\u793a\u5668\u548c\u6309\u9215\u3002 \u986f\u793a\u5668\u6709\u8c4e\u5c4f\u548c\u6a6b\u5c4f\u5169\u7a2e\u4f7f\u7528\u6a21\u5f0f\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5728TouchGFX Designer\u4e2d\u7684",(0,r.kt)("em",{parentName:"p"},"Config  -> Display"),"\u90e8\u5206\u4fee\u6539\u986f\u793a\u5668\u65b9\u5411\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/portrait-4.17.webp",mdxType:"Figure"},"\u9078\u64c7\u8c4e\u5c4f\u6216\u6a6b\u5c4f\u986f\u793a"),(0,r.kt)("p",null,"X-Nucleo-GFX01M1 Shield\u4e0a\u7684\u986f\u793a\u5668\u539f\u672c\u662f\u8c4e\u5c4f\uff08\u9ad8\u5ea6\u5927\u65bc\u5bec\u5ea6\uff09\uff0c\u4f46\u5f88\u5bb9\u6613\u6539\u70ba\u6a6b\u5c4f\u3002"),(0,r.kt)("h2",h({},{id:"display-updates"}),"\u986f\u793a\u5668\u66f4\u65b0"),(0,r.kt)("p",null,"\u5982\u4e0a\u6587\u6240\u8ff0\uff0c\u986f\u793a\u5668\u89e3\u6790\u5ea6\u70ba240 x 320\u50cf\u7d20\u3002 \u7e3d\u517176,800\u50cf\u7d20\u6216153,600\u4f4d\u5143\u7d44\u3002 MCU\u8207\u986f\u793a\u5668\u4e4b\u9593\u7684SPI\u9023\u63a5\u7684\u904b\u884c\u983b\u7387\u70ba32 MHz\u3002 \u56e0\u6b64\uff0c\u50b3\u9001\u901f\u7387\u53ef\u4ee5\u9054\u52304 MB/s\u62162M\u50cf\u7d20/s\u3002"),(0,r.kt)("p",null,"\u986f\u793a\u5668\u7684\u5237\u65b0\u983b\u7387\u70ba76.1 Hz\uff0c\u56e0\u6b64\u6bcf\u5e40\u70ba13.14 ms\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/display-te.webp",mdxType:"Figure"},"\u986f\u793a\u5668\u7684\u6495\u88c2\u6548\u61c9\u4fe1\u865f"),(0,r.kt)("p",null,"\u9019\u610f\u5473\u8457\u6709\u6700\u591a13 ms\u7684\u6642\u9593\u4f86\u767c\u9001\u4e0b\u4e00\u5e40\u7684\u8cc7\u6599\u3002 \u5728\u6b64\u671f\u9593\uff0c\u6211\u5011\u53ef\u4ee5\u767c\u90012.000.000\u50cf\u7d20/\u79d2/76 fps=26.280\u50cf\u7d20/\u5e40\u621634%\u7684\u5168\u5c4f\u3002 \u5be6\u969b\u4e0a\uff0c\u7531\u65bc\u5354\u5b9a\u7684\u9650\u5236\uff0c\u6211\u5011\u7121\u6cd5\u7dad\u6301SPI\u532f\u6d41\u6392\u4e0a\u7684\u50b3\u9001\u901f\u7387\uff0c\u56e0\u6b64\u4e0d\u80fd\u767c\u9001\u8d85\u904e\u4e00\u500b\u5b8c\u6574\u5e40\u768430%\u5de6\u53f3\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u61c9\u7528\u66f4\u65b0\u7684\u50cf\u7d20\u6578\u8d85\u904e\u6b64\u503c\uff0c\u786c\u9ad4\u5c07\u7121\u6cd5\u5728\u6bcf\u5e40\u7684\u6642\u9593\u4ee5\u5167\u5b8c\u6210\u767c\u9001\u3002 \u7d50\u679c\u662f\u986f\u793a\u5668\u5c07\u5728\u5168\u90e8\u66f4\u65b0\u7d50\u675f\u524d\u958b\u59cb\u986f\u793a\u66f4\u65b0\u7684\u5e40\u3002 \u56e0\u6b64\uff0c\u7528\u6236\u6709\u6642\u6703\u770b\u5230\u539f\u4f86\u7684\u5e40\u8207\u65b0\u7684\u5e40\u6df7\u5408\u5728\u4e00\u8d77\u3002"),(0,r.kt)("p",null,"\u5c0d\u65bc\u4e00\u4e9b\u52d5\u756b\u800c\u8a00\uff0c\u7528\u6236\u6ce8\u610f\u4e0d\u5230\u9019\u4e00\u9ede\uff0c\u4f46\u5728\u5176\u4ed6\u60c5\u6cc1\u4e0b\u53ef\u80fd\u7121\u6cd5\u63a5\u53d7\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u5011\u5efa\u8b70\u5c07\u66f4\u65b0\u7387\u7dad\u6301\u572830%\u4ee5\u4e0b\u3002 \u5982 \u901a\u904e\u6f38\u9032\u5f0f\u5730\u5206\u6b65\u66f4\u65b0\u5e40\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u4e00\u822c\u4f86\u8aaa\u6700\u597d\u5728\u87a2\u5e55\u4e0a\u64f4\u5c55\u7269\u4ef6\uff0c\u800c\u4e0d\u662f\u79fb\u52d5\u7269\u4ef6\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/star.webp",width:"400",mdxType:"Figure"},"\u986f\u793a\u5668\u7684\u6495\u88c2\u6548\u61c9\u4fe1\u865f"),(0,r.kt)("p",null,"\u7576\u661f\u5f62\u79fb\u52d5\u5230\u53f3\u5074\u6642\uff0c\u5fc5\u9808\u66f4\u65b0\u661f\u5f62\u8986\u84cb\u7684\u6240\u6709\u50cf\u7d20\u3002 \u5982\u679c\u53ea\u64f4\u5c55\u661f\u5f62\uff0c\u5247\u53ea\u9700\u66f4\u65b0\u65b0\u50cf\u7d20\u3002 \u5728\u4e0a\u4e00\u5e40\u66f4\u65b0\u7684\u50cf\u7d20\u4fdd\u6301\u4e0d\u8b8a\u3002"),(0,r.kt)("h3",h({},{id:"drawing-speed"}),"\u7e6a\u88fd\u901f\u5ea6"),(0,r.kt)("p",null,"\u5411\u986f\u793a\u5668\u767c\u9001\u8cc7\u6599\u7684\u983b\u7387\u70ba\u6700\u9ad832 MHz\u3002"),(0,r.kt)("p",null,"\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u80fd\u4ee5\u8207\u986f\u793a\u5668\u767c\u9001\u76f8\u540c\u7684\u901f\u5ea6\u904b\u884c\u3002 \u9019\u610f\u5473\u8457\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u901f\u5ea6\u8db3\u5920\u5feb\uff0c\u80fd\u4ee5\u6700\u9ad8\u901f\u5ea6\u5411\u986f\u793a\u5668\u4f9b\u61c9\u8cc7\u6599\u3002"),(0,r.kt)("p",null,"\u9019\u53ea\u6709\u5728\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u7684\u5f71\u50cf\u4f4d\u5143\u683c\u5f0f\u70baRGB565\u6642\u624d\u80fd\u5be6\u73fe\u3002 \u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u5f9e\u5feb\u9583\u8a18\u61b6\u9ad4\u8b80\u53d6\u7684\u5169\u500b\u4f4d\u5143\u7d44\u7b49\u65bc1\u500b\u50cf\u7d20\uff0c\u4e5f\u5c31\u662f\u986f\u793a\u5668\u4e0a\u7684\u5169\u500b\u5b57\u5143\u3002 \u5982\u679c\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u7684\u50cf\u7d20\u683c\u5f0f\u70baARGB8888\uff0c\u6211\u5011\u9700\u8981\u5f9e\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u8b80\u53d6\u5169\u500d\u7684\u8cc7\u6599\u91cf\u624d\u80fd\u5728\u986f\u793a\u5668\u4e0a\u7522\u751f\u50cf\u7d20\uff0c\u800c\u4e32\u5217Flash\u5c07\u7121\u6cd5\u8ddf\u4e0a\u986f\u793a\u5668\u7684\u901f\u5ea6\u3002"),(0,r.kt)("p",null,"\u7576\u767c\u751f\u9019\u7a2e\u60c5\u6cc1\u6642\uff0c\u4e0d\u518d\u7e7c\u7e8c\u5411\u986f\u793a\u5668\u767c\u9001\u8cc7\u6599\uff0c\u4e26\u4e14\u5c07\u4e0d\u53ef\u80fd\u66f4\u65b0\u986f\u793a\u5668\u4e0a\u4e00\u500b\u5e40\u8cc7\u6599\u768430%\u3002 \u6709\u4e00\u7a2e\u53ef\u80fd\u7684\u8fa6\u6cd5\u662f\u5c07\u5f71\u50cf\u79fb\u52d5\u5230\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\uff0c\u53e6\u4e00\u7a2e\u8fa6\u6cd5\u662f\u66f4\u6539\u50cf\u7d20\u683c\u5f0f\u3002"),(0,r.kt)("p",null,"\u5176\u4ed6\u7684\u5de5\u5177\u4e0d\u53d7\u5feb\u9583\u8a18\u61b6\u9ad4\u901f\u5ea6\u7684\u9650\u5236\u3002 \u5982 \u65b9\u6846\u5c0f\u5de5\u5177\uff0c\u7528\u65bc\u7e6a\u88fd\u5f69\u8272\u77e9\u5f62\u3002 \u6b64\u5de5\u5177\u901f\u5ea6\u5f88\u5feb\uff0c\u6bd4\u986f\u793a\u5668\u8cc7\u6599\u767c\u9001\u901f\u5ea6\u8981\u5feb\u8a31\u591a\u3002 \u5176\u4ed6\u5c0f\u5de5\u5177\uff08\u5982\u76f4\u7dda\u548c\u5713\uff09\u9700\u8981\u4f7f\u7528\u66f4\u591aCPU\u8cc7\u6e90\u3002 \u9019\u4e9b\u5c0f\u5de5\u5177\u7121\u6cd5\u4ee5\u767c\u9001\u5230\u986f\u793a\u5668\u7684\u901f\u5ea6\u4f86\u751f\u6210\u50cf\u7d20\u3002 \u5c0d\u65bc\u4f7f\u7528\u9019\u4e9b\u5c0f\u5de5\u5177\u7684\u61c9\u7528\uff0c\u4e0d\u80fd\u671f\u671b\u80fd\u5920\u66f4\u65b0\u986f\u793a\u5668\u4e0a\u6bcf\u5e40\u768430%\u3002"),(0,r.kt)("p",null,"\u9ede\u64ca",(0,r.kt)("a",h({parentName:"p"},{href:"../../basic-concepts/performance#the-complexity-of-rendering-the-pixels"}),"\u9019\u88e1"),"\u77ad\u89e3\u50cf\u7d20\u6e32\u67d3\u7684\u8907\u96dc\u6027"),(0,r.kt)("h2",h({},{id:"touchgfx-limitations-with-serial-flash"}),"\u4f7f\u7528\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u6642TouchGFX\u7684\u9650\u5236"),(0,r.kt)("p",null,"\u61c9\u7528\u7a0b\u5f0f\u64b0\u5beb\u8005\u5fc5\u9808\u8a8d\u8b58\u5230\uff0c\u5728\u5177\u6709\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u7684STM32G0\u4e0a\u4f7f\u7528TouchGFX\u6642\u7684\u5e7e\u9ede\u9650\u5236\u3002"),(0,r.kt)("h3",h({},{id:"texture-mapper"}),"\u7d0b\u7406\u6620\u5c04\u5668"),(0,r.kt)("p",null,"\u7d0b\u7406\u6620\u5c04\u5668\u5c0f\u5de5\u5177\uff08TextureMapper\u3001AnimationTextureMapper\u548c ScalableImage\uff09\u4e0d\u80fd\u7e6a\u88fd\u5b58\u5132\u5728\u5916\u90e8SPI\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u7684\u5716\u50cf\u3002 \u539f\u56e0\u5728\u65bc\uff0c\u7528\u5b58\u5132\u5728\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u7684\u5f71\u50cf\u7121\u6cd5\u7372\u5f97\u53ef\u63a5\u53d7\u7684\u6027\u80fd\uff0c\u5982\u5716\u50cf\u65cb\u8f49\u3002"),(0,r.kt)("p",null,"\u70ba\u4e86\u901a\u904e\u7d0b\u7406\u6620\u5c04\u5668\u4f7f\u7528\u5716\u50cf\uff0c\u5fc5\u9808\u5c07\u5716\u50cf\u4fdd\u5b58\u5728\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u6216RAM\u4e2d\u3002 \u901a\u904e\u5728TouchGFX Designer\u4e2d\u4fee\u6539\u5716\u50cf\u914d\u7f6e\uff0c\u53ef\u4ee5\u8f15\u9b06\u5730\u5c07\u5716\u50cf\u4fdd\u5b58\u5728\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u3002"),(0,r.kt)("p",null,"\u8f49\u81f3\u201cImages \u201d\u9078\u9805\u5361\u4e26\u9078\u4e2d\u5716\u50cf\u3002 \u5728\u8996\u7a97\u7684\u53f3\u5074\uff0c\u5c07\u201cSection\u201d\u5c6c\u6027\u66f4\u6539\u70ba\u201cIntFlashSection\u201d\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/image-internal-4.17.webp",mdxType:"Figure"},"\u5c07\u5716\u50cf\u653e\u5165\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4"),(0,r.kt)("p",null,"\u7d0b\u7406\u6620\u5c04\u5668\u7684\u7a0b\u5f0f\u78bc\u91cf\u904e\u5927\uff0c\u4e0d\u80fd\u5305\u542b\u5728\u6240\u6709\u5c08\u6848\u4e2d\u3002 \u56e0\u6b64\uff0c\u5c0d\u65bcSTM32G0\u5c08\u6848\uff0c\u9ed8\u8a8d\u7981\u7528\u7d0b\u7406\u6620\u5c04\u5668\u3002 \u9019\u610f\u5473\u8457\u60a8\u5fc5\u9808\u5148\u555f\u7528\u7d0b\u7406\u6620\u5c04\u5668\uff0c\u7136\u5f8c\u624d\u80fd\u5728STM32G0\u5c08\u6848\u4e2d\u4f7f\u7528\u5b83\u3002"),(0,r.kt)("p",null,"\u8f49\u81f3\u201cConfig\u201d\u9078\u9805\u5361\uff0c\u9078\u64c7\u201cFramework Features\u201d\uff0c\u4e26\u9ede\u64ca\u76f8\u95dc\u7684\u7d0b\u7406\u6620\u5c04\u5668\u6216\u4e00\u7d44\u7d0b\u7406\u6620\u5c04\u5668\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/enabling-texture-mapper-4.17.webp",mdxType:"Figure"},"\u70ba\u7279\u5b9a\u5716\u50cf\u683c\u5f0f\u555f\u7528\u7d0b\u7406\u6620\u5c04\u5668"),(0,r.kt)("p",null,"\u9084\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("a",h({parentName:"p"},{href:"/4.21/zh-TW/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"}),"\u9ede\u9663\u5716\u7de9\u5b58"),"\u5c07\u5716\u50cf\u66ab\u6642\u79fb\u52d5\u5230RAM"),(0,r.kt)("h3",h({},{id:"bitmap-painter"}),"\u9ede\u9663\u5716\u7e6a\u88fd\u5668"),(0,r.kt)("p",null,"\u53ef\u901a\u904e\u5716\u50cf\u70ba\u76f4\u7dda\u3001\u5713\u548cDynamicGraph\u4e0a\u8272\u3002 \u9019\u4e0d\u9069\u7528\u65bc\u5b58\u5132\u5728SPI\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u7684\u5716\u50cf\u3002 \u4f7f\u7528\u9019\u4e9b\u5c0f\u5de5\u5177\u7684\u5716\u50cf\u5fc5\u9808\u653e\u5728\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u6216RAM\u4e2d\u3002"),(0,r.kt)("h3",h({},{id:"l8-palette"}),"L8\u8abf\u8272\u677f"),(0,r.kt)("p",null,"L8\u683c\u5f0f\u7684\u5716\u50cf\u53ef\u4ee5\u7528\u5728\u5177\u6709\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u786c\u9ad4\u4e0a\u3002 \u9650\u5236\u689d\u4ef6\u662f\u8abf\u8272\u677f\u8cc7\u6599\u5fc5\u9808\u653e\u5728\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\uff08\u4e5f\u662f\u51fa\u65bc\u6027\u80fd\u8003\u91cf\uff09\u3002"),(0,r.kt)("p",null,"\u901a\u904e\u5728TouchGFX Designer\u4e2d\u5c07\u201cExtra Section\u201d\u4fee\u6539\u70ba\u201cIntFlashSection\u201d\uff0c\u53ef\u4ee5\u5c07\u8abf\u8272\u677f\u79fb\u52d5\u5230\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u3002"),(0,r.kt)("h2",h({},{id:"drivers"}),"\u9a45\u52d5\u7a0b\u5f0f"),(0,r.kt)("p",null,"\u61c9\u7528\u7bc4\u672c\u662f\u4f7f\u7528TouchGFX Generator\u5275\u5efa\u7684\u3002 Read more about the Generator ",(0,r.kt)("a",h({parentName:"p"},{href:"../touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator"}),"here"),". TouchGFX Generator\u751f\u6210HAL\u5c64\uff0c\u5b83\u9023\u63a5TouchGFX\u6846\u67b6\u8207\u4e00\u7d44\u5e95\u5c64\u9a45\u52d5\u5668\uff08\u5df2\u5728\u8a72\u61c9\u7528\u7bc4\u672c\u4e2d\u5be6\u73fe\uff09\u3002 \u8a72\u61c9\u7528\u7bc4\u672c\u7684\u5e95\u5c64\u9a45\u52d5\u4f4d\u65bc\u5c08\u6848\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Core/Src"),"\u8cc7\u6599\u593e\u4e2d\u3002"),(0,r.kt)("p",null,"\u9a45\u52d5\u5668\u4f4d\u65bc3\u500b\u6a94\u4e2d\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u9a45\u52d5\u5668")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6a94\u6848")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u986f\u793a\u5668"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Core/Src/MB1642BDisplayDriver.c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Flash"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Core/Src/MB1642BDataReader.c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u6309\u9215"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Core/Src/MB1642BButtonController.cpp")))),(0,r.kt)("h3",h({},{id:"display"}),"\u986f\u793a\u5668"),(0,r.kt)("p",null,"\u986f\u793a\u5668\u4f7f\u7528\u6a19\u6e96SPI\u5354\u5b9a\u3002 \u70ba\u4e86\u914d\u7f6e\u986f\u793a\u5668\uff0c\u53ef\u4ee5\u5c0d\u986f\u793a\u5668\u4e2d\u7684\u8a31\u591a\u66ab\u5b58\u5668\u57f7\u884c\u5beb\u5165\u3002 \u5728\u8cc7\u6599\u767c\u9001\u5230\u986f\u793a\u5668\u6642\u9396\u5b9a\u9078\u64c7\u7684\u6676\u7247\u3002 \u4f7f\u7528\u984d\u5916\u7684GPIO\uff08DCX\uff09\u5c07\u6307\u4ee4\u4f4d\u5143\u7d44\u8207\u8cc7\u6599\u4f4d\u5143\u7d44\u5340\u5206\u958b\u4f86\u3002"),(0,r.kt)("p",null,"\u9a45\u52d5\u7a0b\u5f0f\u4f7f\u7528DMA\u901a\u9053\u767c\u9001\u986f\u793a\u5668\u50cf\u7d20\u8cc7\u6599\u3002 \u9019\u6a23\u5c31\u53ef\u4ee5\u5728MCU\u8a08\u7b97\u50cf\u7d20\u7684\u540c\u6642\u9032\u884c\u767c\u9001\u3002 DMA\u5b8c\u6210\u4e2d\u65b7\u88ab\u7528\u4f86\u91cb\u653e\u5df2\u767c\u9001\u8cc7\u6599\u7684\u5b58\u5132\u7a7a\u9593\u4ee5\u4fbf\u5728\u5c07\u4f86\u7e6a\u88fd\u6642\u91cd\u8907\u4f7f\u7528\uff0c\u4ee5\u53ca\u5728\u6709\u65b0\u8cc7\u6599\u53ef\u7528\u6642\u91cd\u65b0\u958b\u59cb\u767c\u9001\u8cc7\u6599\u3002"),(0,r.kt)("p",null,"\u7531\u65bcCS\u548cCDX\u8173\u4f4d\u5fc5\u9808\u5728\u5c0f\u5c01\u88dd\u4e4b\u9593\u5207\u63db\u4e26\u4f4d\u65bc\u5176\u5167\u90e8\uff0c\u56e0\u6b64\u4e0d\u901a\u904eDMA\u767c\u9001\u914d\u7f6e\u8cc7\u6599\u3002"),(0,r.kt)("p",null,"\u5728\u767c\u9001\u914d\u7f6e\u8cc7\u6599\u6642\uff0c\u9a45\u52d5\u7a0b\u5f0f\u4f7f\u75288\u4f4d\u5143\u6a21\u5f0f\u7684SPI\uff0c\u4f46\u5728\u767c\u9001\u50cf\u7d20\u8cc7\u6599\u6642\u6539\u70ba16\u4f4d\u5143\u6a21\u5f0f\u3002 \u5176\u4e2d\u7684\u539f\u56e0\u5728\u65bc\uff0cMCU\u8a18\u61b6\u9ad4\u4ee5\u5c0f\u7aef\u6a21\u5f0f\u8b80\u53d6\u3002 RGB565\u683c\u5f0f\u7684\u50cf\u7d20\u5b58\u5132\u5728RAM\u4e2d\uff0c\u9996\u5148\u662f\u4f4e\u4f4d\u5143\u7d44\uff08G\u548cB\uff09\uff0c\u7136\u5f8c\u662f\u9ad8\u4f4d\u5143\u7d44\uff08R\u548cG\uff09\u3002 \u75768\u4f4dSPI\u70ba\u9032\u884c\u767c\u9001\u800c\u8b80\u53d6\u8a18\u61b6\u9ad4\u6642\uff0c\u7dad\u6301\u6b64\u9806\u5e8f\u4e0d\u8b8a\u3002 \u7576SPI\u70ba16\u4f4d\u5143\u6a21\u5f0f\u6642\uff0c\u630916\u4f4d\u5143RGB565\u5f9e\u8a18\u61b6\u9ad4\u8b80\u53d6\u8cc7\u6599\uff0c\u4e26\u6309\u986f\u793a\u5668\u7684\u6b63\u78ba\u9806\u5e8f\u767c\u9001\u8cc7\u6599\u3002"),(0,r.kt)("p",null,"\u5c0d\u65bc\u4e0d\u4f7f\u752816\u4f4dDMA\u7684\u9a45\u52d5\uff0c\u5fc5\u9808\u5728\u767c\u9001\u524d\u4ea4\u63db\u50cf\u7d20\u4e2d\u7684\u4f4d\u5143\u7d44\u3002"),(0,r.kt)("h4",h({},{id:"initialization"}),"\u521d\u59cb\u5316"),(0,r.kt)("p",null,"\u986f\u793a\u5668\u521d\u59cb\u5316\u5728\u51fd\u6578",(0,r.kt)("inlineCode",{parentName:"p"},"MB1642BDisplayDriver_DisplayInit(void)"),"\u4e2d\u5b8c\u6210"),(0,r.kt)("p",null,"\u9a45\u52d5\u7a0b\u5f0f\u6309\u7167\u5efa\u8b70\u7684\u4e0a\u96fb\u9806\u5e8f\u5411\u986f\u793a\u5668\u767c\u90016\u500b\u6307\u4ee4\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u9000\u51fa\u7761\u7720\u6a21\u5f0f\uff0811h\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u9032\u5165\u6b63\u5e38\u6a21\u5f0f\uff0813h\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u5229\u7528MX\u548cBGR\u4f4d\u7f6e\u8a2d\u5b9a\u8a18\u61b6\u9ad4\u5b58\u53d6\u63a7\u5236\uff0836h\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u8a2d\u7f6e\u50cf\u7d20\u683c\u5f0f\uff083Ah\uff09\u70ba16\u4f4d\u683c\u5f0f"),(0,r.kt)("li",{parentName:"ol"},"\u6495\u88c2\u6548\u61c9\u7dda\u958b\u555f\uff0835h\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u8a2d\u7f6e\u6495\u88c2\u6383\u63cf\u7dda\uff0844h\uff09\u4f7f\u5176 = 0")),(0,r.kt)("p",null,"\u9a45\u52d5\u6703\u5728\u9019\u4e9b\u6307\u4ee4\u4e4b\u9593\u4f11\u7720100 ms\u3002"),(0,r.kt)("h4",h({},{id:"tearing-effect"}),"\u6495\u88c2\u6548\u61c9"),(0,r.kt)("p",null,"\u4f86\u81ea\u986f\u793a\u5668\u7684\u6495\u88c2\u6548\u61c9\uff08TE\uff09\u4fe1\u865f\u975e\u5e38\u91cd\u8981\u3002 \u5f9e\u800c\u5141\u8a31\u61c9\u7528\u7a0b\u5f0f\u5c07\u986f\u793a\u5668\u8a18\u61b6\u9ad4\u7684\u66f4\u65b0\u8207\u986f\u793a\u5237\u65b0\u7387\u6b63\u78ba\u540c\u6b65\u3002 \u9019\u6709\u52a9\u65bc\u61c9\u7528\u7a0b\u5f0f\u907f\u514d\u986f\u793a\u5668\u4e0a\u7684\u6495\u88c2\u6548\u61c9\u3002 \u986f\u793a\u5668\u5728\u958b\u59cb\u66f4\u65b0\u9031\u671f\u6642\u751f\u6210\u4fe1\u865f\u3002 MCU\u4f7f\u7528\u6b64\u4fe1\u865f\u5411\u986f\u793a\u5668\u767c\u9001\u8cc7\u6599\u3002"),(0,r.kt)("p",null,"TE\u4fe1\u865f\u9023\u63a5\u5230MCU\u7684\u5916\u90e8\u4e2d\u65b7\u8f38\u5165\u3002 CubeMx\u751f\u6210\u4e26\u914d\u7f6e\u8a72\u5f15\u8173\u4e0a\u7684\u4e2d\u65b7\u3002"),(0,r.kt)("p",null,"\u9a45\u52d5\u4e2d\u7684callback \u6307\u793aTouchGFX\u958b\u59cb\u7e6a\u88fd\uff1a"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"MB1642BDisplayDriver.c"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"void HAL_GPIO_EXTI_Rising_Callback(uint16_t GPIO_Pin)\n{\n  ...\n  touchgfxSignalVSync();\n}\n")),(0,r.kt)("h3",h({},{id:"external-flash"}),"\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4"),(0,r.kt)("p",null,"\u986f\u793a\u677f\u5361\u4e0a\u7684SPI NOR flash\u662f\u6a19\u6e96SPI flash\u3002 \u8a72\u9a45\u52d5\u6bd4\u986f\u793a\u5668\u9a45\u52d5\u7c21\u55ae\u3002 \u7121\u9700\u7279\u5225\u521d\u59cb\u5316\u5373\u53ef\u5f9e\u5feb\u9583\u8a18\u61b6\u9ad4\u8b80\u53d6\u8cc7\u6599\u3002"),(0,r.kt)("p",null,"\u8a72\u9a45\u52d5\u53ef\u4f7f\u7528\u8f2a\u8a62SPI\uff08\u5fd9\u788c\u7b49\u5f85\u6240\u6709\u4f4d\u5143\u7d44\uff09\u6216\u4f7f\u7528DMA\u8b80\u53d6\u8cc7\u6599\u3002 \u958b\u59cbDMA\u63a5\u6536\u7684\u6642\u9593\u63a5\u8fd1\u65bc\u4ee5\u8f2a\u8a62\u6a21\u5f0f\u8b80\u53d620\u500b\u4f4d\u5143\u7d44\u6240\u9700\u7684\u6642\u9593\uff0c\u56e0\u6b64\u77ed\u8b80\u901a\u5e38\u8f03\u6162\u3002 \u53e6\u4e00\u65b9\u9762\uff0cDMA\u5728\u4e2d\u65b7\uff08\u5373sysTick\u6216\u61c9\u7528\u4e2d\u65b7\uff09\u671f\u9593\u7e7c\u7e8c\u904b\u884c\uff0c\u4e26\u4e14\u53ef\u4ee5\u5728MCU\u5fd9\u65bc\u6e32\u67d3\u50cf\u7d20\u6642\u5728\u5f8c\u81fa\u904b\u884c\u3002 \u51fa\u65bc\u9019\u500b\u539f\u56e0\u4f7f\u5f97\u5169\u7a2e\u65b9\u6cd5\u7686\u88ab\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"Flash\u9a45\u52d5\u4f7f\u7528\u8207\u986f\u793a\u5668\u9a45\u52d5\u4e0d\u540c\u7684DMA\u901a\u9053\uff0c\u56e0\u6b64\u65b0\u8cc7\u6599\u63a5\u6536\u548c\u5df2\u7e6a\u88fd\u50cf\u7d20\u767c\u9001\u53ef\u4ee5\u540c\u6642\u904b\u884c\u3002"),(0,r.kt)("h4",h({},{id:"linker-script"}),"\u9023\u7d50\u5668\u8173\u672c"),(0,r.kt)("p",null,"\u9023\u7d50\u5668\u63a7\u5236\u61c9\u7528\u4e2d\u5404\u7a2e\u8cc7\u6599\u6240\u5728\u7684\u4f4d\u7f6e\u3002 \u9019\u662f\u5728\u9023\u7d50\u5668\u8173\u672c\u4e2d\u6307\u5b9a\u7684\u3002 \u4e0b\u9762\u662fgcc\u7de8\u8b6f\u5668\u7684\u9023\u7d50\u5668\u8173\u672c\u7684\u7b2c\u4e00\u90e8\u5206\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"MEMORY\n{\n  RAM        (xrw)    : ORIGIN = 0x20000000,   LENGTH = 36K\n  FLASH      (rx)     : ORIGIN = 0x8000000,    LENGTH = 128K\n  SPI_FLASH  (r)      : ORIGIN = 0x90000000,   LENGTH = 8M\n}\n")),(0,r.kt)("p",null,"\u5b83\u5ba3\u544aNOR flash\u5f9e\u4f4d\u57400x90000000\u958b\u59cb\u3002 \u76ee\u6a19\u61c9\u7528\u7a0b\u5f0f\u4e2d\u7684Flash\u9a45\u52d5\u5668\u5f9eSPI Flash\u8b80\u53d60x90000000\u4f4d\u5740\u4e2d\u7684\u8cc7\u6599\uff08\u4f7f\u7528\u8f03\u4f4e\u768424\u4f4d\u4f5c\u70baFlash\u4e2d\u7684\u4f4d\u5740\uff09\u3002"),(0,r.kt)("p",null,"STM32CubeProgramer\u4e2d\u4f7f\u7528\u7684\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u5668\u53ef\u4ee5\u5c07\u6b64\u7bc4\u570d\u5167\u7684\u8cc7\u6599\u71d2\u9304\u5230SPI Flash\uff08\u898b\u4e0b\u6587\uff09\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e8c\u90e8\u5206\u5c07\u5716\u50cf\uff08ExtFlashSection\uff09\u548c\u5b57\u9ad4\uff08FontFlashSection\uff09\u8cc7\u6599\u653e\u5728SPI\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"  ExtFlashSection :\n  {\n    *(ExtFlashSection ExtFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n\n  FontFlashSection :\n  {\n    *(FontFlashSection FontFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n")),(0,r.kt)("p",null,"\u901a\u904e\u5411\u9023\u7d50\u5668\u8173\u672c\u4e2d\u6dfb\u52a0\u76f8\u4f3c\u5206\u5340\uff0c\u53ef\u5c07\u5176\u4ed6\u8cc7\u6599\u653e\u5165SPI\u5feb\u9583\u8a18\u61b6\u9ad4\u3002"),(0,r.kt)("h4",h({},{id:"flash-loader"}),"\u5feb\u9583\u8a18\u61b6\u9ad4\u4e0b\u8f09"),(0,r.kt)("p",null,"G071 TouchGFX\u958b\u767c\u677f\u8a2d\u7f6e\u5305\u542bSTM32CubeProgrammer\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u5668\u3002 \u6b64\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u5668\u53ef\u5c07\u8cc7\u6599\u5beb\u5165SPI NOR flash\u3002"),(0,r.kt)("p",null,"\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u5668\u4f4d\u65bc\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},"gcc/S25FL032P_STM32G071B-NUCLEO.stldr"),"\u4e2d"),(0,r.kt)("p",null,"STM32CubeIDE\u5c08\u6848\u53ef\u4ee5\u76f4\u63a5\u5f9eCubeIDE\u71d2\u9304\uff0c\u4f46IAR\u6216Keil\u61c9\u7528\u7a0b\u5f0f\u5fc5\u9808\u5f9eSTM32CubeProgrammer\u71d2\u9304\u3002"),(0,r.kt)("p",null,"STM32CubeProgrammer\u4e2d\u6700\u521d\u4e0d\u80fd\u4f7f\u7528\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u5668\uff0c\u5fc5\u9808\u5c07stldr\u8907\u88fd\u5230\u5b89\u88dd\u8cc7\u6599\u593e\u9032\u884c\u5b89\u88dd\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/copying-stldr.webp",mdxType:"Figure"},"\u5c07\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u5668\u8907\u88fd\u5230STM32CubeProgrammer\u5b89\u88dd\u8cc7\u6599\u593e"),(0,r.kt)("p",null,"\u73fe\u5728\uff0c\u53ef\u4ee5\u6b63\u5e38\u5730\u5728STM32CubeProgrammer\u4e2d\u9078\u64c7\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u5668\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/select-stldr.webp",mdxType:"Figure"},"\u5c07\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u5668\u8907\u88fd\u5230STM32CubeProgrammer\u5b89\u88dd\u8cc7\u6599\u593e"),(0,r.kt)(l.Z,{mdxType:"Tip"},"\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u5668\u5728Nucleo-G071RB\u958b\u767c\u677f\u4e0a\u50c5\u80fd\u4f7f\u7528\u7279\u5b9a\u7684GPIO\u914d\u7f6e  \u3002",(0,r.kt)("p",null,"\u5982\u679c\u5728\u81ea\u8a02\u786c\u9ad4\u4e0a\u5c0d\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u4f7f\u7528\u5176\u4ed6GPIO\u914d\u7f6e\uff0c\u5247\u5fc5\u9808\u76f8\u61c9\u5730\u4fee\u6539\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u5668\u3002")),(0,r.kt)("h3",h({},{id:"buttons"}),"\u6309\u9215"),(0,r.kt)("p",null,"\u6309\u9215\u9a45\u52d5\u5341\u5206\u7c21\u55ae\u3002 \u5b83\u5c0dMB1642B\u4e0a\u7684\u6416\u6746\u548cNucleo\u677f\u4e0a\u7684\u85cd\u8272\u6309\u9215\u4f7f\u7528\u76845\u500bGPIO\u7684\u72c0\u614b\u9032\u884c\u63a1\u6a23\u3002"),(0,r.kt)("p",null,"\u6b64\u6309\u9215\u9a45\u52d5\u4f5c\u70baBottonController\u5b89\u88dd\u5728TouchGFX\u4e2d\u3002 \u9019\u610f\u5473\u8457\u53ef\u4ee5\u76f4\u63a5\u5728TouchGFX Designer\u4e2d\u9ede\u64ca\u6309\u9215\u4ee5\u4fbf\u4f7f\u7528\u3002 \u9084\u53ef\u4ee5\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528\u5b83\u5011\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::handleKeyEvent(uint8_t key)\n{\n    if (key == '6')\n    {\n        application().gotoScreen2Screen();\n    }\n}\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u7684\u9375\u78bc\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u9375")),(0,r.kt)("th",h({parentName:"tr"},{align:"right"}),(0,r.kt)("strong",{parentName:"th"},"\u7a0b\u5f0f\u78bc")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u5de6"),(0,r.kt)("td",h({parentName:"tr"},{align:"right"}),"'4'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u53f3"),(0,r.kt)("td",h({parentName:"tr"},{align:"right"}),"'6'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u4e0a"),(0,r.kt)("td",h({parentName:"tr"},{align:"right"}),"'8'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u4e0b"),(0,r.kt)("td",h({parentName:"tr"},{align:"right"}),"'2'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u4e2d"),(0,r.kt)("td",h({parentName:"tr"},{align:"right"}),"'5'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u85cd\u8272\u6309\u9215"),(0,r.kt)("td",h({parentName:"tr"},{align:"right"}),"'0'")))),(0,r.kt)("p",null,"\u7576\u60a8\u4f7f\u7528\u9375\u76e4numpad\u904b\u884c\u6a21\u64ec\u5668(\u5728TouchGFX Designer\u4e2d\u9ede\u64ca",(0,r.kt)("inlineCode",{parentName:"p"},"F5"),") \u6642\uff0c\u9019\u4e9b\u9375\u4e5f\u53ef\u4ee5\u4f7f\u7528\u3002"))}y.isMDXComponent=!0}}]);