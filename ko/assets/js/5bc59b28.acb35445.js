"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9382],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,f=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=l},45291:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return v}});var r=n(3905),a=n(44035),o=n(93054),l=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&u(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&u(e,n,t[n]);return e};const f={id:"07-flash-external-nonaddressable",title:"7. External flash in block mode",sidebar_label:"7. External flash in block mode"},m=void 0,b={unversionedId:"development/board-bring-up/how-to/07-flash-external-nonaddressable",id:"development/board-bring-up/how-to/07-flash-external-nonaddressable",title:"7. External flash in block mode",description:"",source:"@site/docs/development/board-bring-up/how-to/07-flash-external-nonaddressable.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/07-flash-external-nonaddressable",permalink:"/4.21/ko/docs/development/board-bring-up/how-to/07-flash-external-nonaddressable",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"07-flash-external-nonaddressable",title:"7. External flash in block mode",sidebar_label:"7. External flash in block mode"},sidebar:"docs",previous:{title:"6. External addressable flash",permalink:"/4.21/ko/docs/development/board-bring-up/how-to/06-flash-external-addressable"},next:{title:"8. Hardware acceleration",permalink:"/4.21/ko/docs/development/board-bring-up/how-to/08-hardware-acceleration"}},g={},v=[{value:"Motivation",id:"motivation",level:2},{value:"Goal",id:"goal",level:2},{value:"Verification",id:"verification",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Do",id:"do",level:2},{value:"Code",id:"code",level:3}],y={toc:v};function k(e){var t,n=e,{components:l}=n,u=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},y),u),i(t,s({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("h2",h({},{id:"motivation"}),"Motivation"),(0,r.kt)("p",null,"When working with Non-Memory-Mapped Flash memory, such as NAND flash, a driver must be developed in order for TouchGFX to use the assets stored within."),(0,r.kt)("p",null,"Read more about this topic in the Using Non-Memory Mapped flash for storing ",(0,r.kt)("a",h({parentName:"p"},{href:"../../scenarios/using-non-memory-mapped-flash"}),"images"),"\nsection."),(0,r.kt)(o.Z,{mdxType:"Note"},"Skip this step if nonaddressable external flash is not relevant for your board bring up."),(0,r.kt)("h2",h({},{id:"goal"}),"Goal"),(0,r.kt)("p",null,"The goal of this step is to create a driver that can read a number of\nbytes from a location in the non-mapped flash memory and store it in\nan array."),(0,r.kt)("h3",h({},{id:"verification"}),"Verification"),(0,r.kt)("p",null,"The verification points for this section are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),"Verification Point"),(0,r.kt)("th",h({parentName:"tr"},{align:null}),"Rationale"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Ensure contents of flash"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Ensure that the contents read from the flash are correct.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Verify performance"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Ensure that read performance is in accordance with MCU configuration.")))),(0,r.kt)("h2",h({},{id:"prerequisites"}),"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Information about the flash, typically from a datasheet."),(0,r.kt)("li",{parentName:"ul"},"Information about the connections between the MCU and the external flash."),(0,r.kt)("li",{parentName:"ul"},"The flash speed.")),(0,r.kt)("h2",h({},{id:"do"}),"Do"),(0,r.kt)("p",null,"Typically, the NAND flash is configured via the FMC on your MCU."),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/nonmappedflash/cubemx-nand-fmc.png",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"Remember to configure the GPIOs that are connected to the flash."),(0,r.kt)("p",null,"A non-memory-mapped QSPI flash is configured in STM32CubeMX like a memory-mapped QSPI flash."),(0,r.kt)("h3",h({},{id:"code"}),"Code"),(0,r.kt)("p",null,"Write code that can read a number of bytes from a specific address of\nthe flash. An example of how this might look is provided below. The\nimplementation of the driver depends on your flash chip."),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"void readNonaddressableFlash(uint32_t from, uint8_t *into, uint32_t n)\n{\n  ...\n}\n\nuint8_t bytes[1000];\n\n//read external Flash\nreadNonaddressableFlash(0xab001212, bytes, 1000);\n")),(0,r.kt)("p",null,"This code will be used later to develop the TouchGFX abstraction layer."))}k.isMDXComponent=!0}}]);