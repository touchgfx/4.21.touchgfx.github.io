"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2584],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=u(n),s=a,h=m["".concat(c,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(h,o(o({ref:e},p),{},{components:n})):r.createElement(h,o({ref:e},p))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44035:function(t,e,n){var r=n(67294),a=n(25026);e.Z=function(t){const e=t.noShadow||!1,n=t.width,l=t.height,o=(0,a.Z)(t.imageSource);return e?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,t.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,t.children))}},88678:function(t,e,n){var r=n(67294);class a extends r.Component{render(){const t=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:t},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}e.Z=a},93054:function(t,e,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}e.Z=o},84541:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(67294),a=n(86010),l=n(99492),o=n(39130),i=n(35096),c=n(33084),u="cardContainer_fWXF",p="cardTitle_rnsV",d="cardDescription_PWke";function m({href:t,children:e}){return r.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",u)},e)}function s({href:t,icon:e,title:n,description:l}){return r.createElement(m,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",p),title:n},e," ",n),l&&r.createElement("p",{className:(0,a.Z)("text--truncate",d),title:l},l))}function h({item:t}){const e=(0,l.Wl)(t);return e?r.createElement(s,{href:e,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function k({item:t}){var e;const n=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,l.xz)(null!=(e=t.docId)?e:void 0);return r.createElement(s,{href:t.href,icon:n,title:t.label,description:null==a?void 0:a.description})}function g({item:t}){switch(t.type){case"link":return r.createElement(k,{item:t});case"category":return r.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f({items:t,className:e}){return r.createElement("section",{className:(0,a.Z)("row",e)},function(t){return t.filter((t=>"category"!==t.type||!!(0,l.Wl)(t)))}(t).map(((t,e)=>r.createElement("article",{key:e,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:t})))))}},84290:function(t,e,n){n.r(e),n.d(e,{assets:function(){return y},contentTitle:function(){return b},default:function(){return T},frontMatter:function(){return f},metadata:function(){return N},toc:function(){return v}});var r=n(3905),a=n(39130),l=n(44035),o=n(93054),i=n(84541),c=n(99492),u=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,k=(t,e,n)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,g=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&k(t,n,e[n]);if(m)for(var n of m(e))h.call(e,n)&&k(t,n,e[n]);return t};const f={id:"board-introduction",title:"\u642d\u5efa\u958b\u767c\u677f"},b=void 0,N={unversionedId:"development/board-bring-up/board-introduction",id:"development/board-bring-up/board-introduction",title:"\u642d\u5efa\u958b\u767c\u677f",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/board-bring-up/board-introduction.mdx",sourceDirName:"development/board-bring-up",slug:"/development/board-bring-up/board-introduction",permalink:"/4.21/zh-TW/docs/development/board-bring-up/board-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"board-introduction",title:"\u642d\u5efa\u958b\u767c\u677f"},sidebar:"docs",previous:{title:"\u5916\u90e8\u8a18\u61b6\u9ad4",permalink:"/4.21/zh-TW/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories"},next:{title:"1. \u5275\u5efa\u5c08\u6848",permalink:"/4.21/zh-TW/docs/development/board-bring-up/how-to/01-create-project"}},y={},v=[{value:"\u884c\u696d\u5de5\u5177\u5de5\u5177\u4ecb\u7d39",id:"tools-of-the-trade",level:2},{value:"\u529f\u80fd\u9a57\u8b49",id:"verification-of-functionality",level:2},{value:"\u7e3d\u9ad4\u6d41\u7a0b",id:"overall-process",level:2}],w={toc:v};function T(t){var e,n=t,{components:u}=n,k=((t,e)=>{var n={};for(var r in t)s.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&m)for(var r of m(t))e.indexOf(r)<0&&h.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=g(g({},w),k),p(e,d({components:u,mdxType:"MDXLayout"}))),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/activities-selected-001.webp",noShadow:!0,width:"600",mdxType:"Figure"},"\u5c08\u6848\u8a2d\u7f6e"),(0,r.kt)("p",null,"\u672c\u7ae0\u5c07\u5354\u52a9\u60a8\u5728\u65b0\u5e73\u81fa\u4e0a\u642d\u5efaTouchGFX\u3002 \u642d\u5efa\u958b\u767c\u677f\u610f\u5473\u8457\u5728\u5c07TouchGFX\u6dfb\u52a0\u9032\u4f86\u4e4b\u524d\uff0c\u5fc5\u9808\u78ba\u4fdd\u6240\u6709\u5fc5\u8981\u7684\u677f\u8f09\u90e8\u4ef6\u548c\u76f8\u61c9\u7684\u9a45\u52d5\u7a0b\u5f0f\u5747\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5df2\u64c1\u6709\u4e00\u500b\u5e36\u6709\u986f\u793a\u5668\u7684\u958b\u767c\u677f\uff0c\u5247\u6b64\u968e\u6bb5\u7684\u8a31\u591a\u64cd\u4f5c\u5c07\u5f88\u5bb9\u6613\u3002 \u5982\u679c\u60a8\u64c1\u6709\u7684\u662f\u584a\u5168\u65b0\u7684\u5b9a\u88fd\u677f\uff0c\u5247\u6b64\u968e\u6bb5\u53ef\u80fd\u9700\u8981\u82b1\u8cbb\u597d\u5e7e\u5929\u624d\u80fd\u5b8c\u6210\u3002 \u7531\u65bc\u5728\u4e0d\u7a69\u5b9a\u7684\u5e73\u81fa\u4e0a\u5f88\u96e3\u7de8\u5beb\u51fa\u826f\u597d\u7684\u7a0b\u5f0f\uff0c\u56e0\u6b64\u524d\u671f\u6e96\u5099\u5de5\u4f5c\u662f\u5f88\u91cd\u8981\u7684\u3002 \u6b64\u5916\uff0c\u7a69\u5b9a\u53ef\u9760\u7684\u5e73\u53f0\u8b93\u60a8\u66f4\u5c08\u6ce8\u65bc\u61c9\u7528\u7a0b\u5f0f\u7684\u958b\u767c\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5c31\u662f\u8ca0\u8cac\u677f\u4e0a\u786c\u9ad4\u548c\u5e95\u5c64\u8edf\u9ad4\u7684\u958b\u767c\u4eba\u54e1\uff0c\u5247\u672c\u7ae0\u5f88\u9069\u5408\u60a8\u3002 \u5982\u679c\u60a8\u53ea\u95dc\u6ce8\u61c9\u7528\u7a0b\u5f0f\u7684\u5be6\u969bUI\u4ecb\u9762\u958b\u767c\uff0c\u5247\u672c\u7ae0\u4e0d\u592a\u9069\u5408\u60a8\u3002"),(0,r.kt)("p",null,"\u5728\u642d\u5efa\u958b\u767c\u677f\u6642\uff0c\u60a8\u61c9\u5b8c\u5168\u77ad\u89e3\u677f\u7684\u5143\u4ef6\u548c\u5916\u8a2d\u3001\u5143\u4ef6\u4e4b\u9593\u7684\u9023\u63a5\u3001\u6240\u7528\u5230\u7684\u901a\u8a0a\u5354\u5b9a\u4ee5\u53ca\u5404\u500b\u53ef\u7528\u548c/\u6216\u6240\u9700\u7684\u9a45\u52d5\u7a0b\u5f0f\u7a0b\u5f0f\u78bc\u3002"),(0,r.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}),(0,r.kt)("p",null,"\u4e0b\u4e00\u7ae0",(0,r.kt)(a.Z,{to:"../touchgfx-hal-development/touchgfx-al-development-introduction",mdxType:"Link"},"TouchGFX AL\u958b\u767c"),"\u5c07\u8a0e\u8ad6\u5982\u4f55\u5275\u5efa\u5141\u8a31TouchGFX\u5728\u786c\u9ad4\u548c\u9a45\u52d5\u7a0b\u5f0f\u4e4b\u4e0a\u904b\u884c\u7684\u62bd\u8c61\u5c64\u3002"),(0,r.kt)("h2",g({},{id:"tools-of-the-trade"}),"\u884c\u696d\u5de5\u5177\u5de5\u5177\u4ecb\u7d39"),(0,r.kt)("p",null,"\u4e0b\u8868\u5217\u51fa\u4e86\u642d\u5efaSTM32\u7684\u958b\u767c\u677f\u6642\u6240\u9700\u7684\u4e00\u4e9b\u91cd\u8981\u5de5\u5177\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u5de5\u5177"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"STM32CubeMX"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u4e00\u7a2e\u6613\u65bc\u4f7f\u7528\u7684\u5de5\u5177\uff0c\u7528\u65bc\u914d\u7f6eMCU\u4e26\u751f\u6210\u5305\u62ec\u5167\u90e8\u5468\u908a\u7684\u6574\u500b\u5c08\u6848\u521d\u59cb\u5316\u539f\u59cb\u7a0b\u5f0f\u78bc\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"STM32Cube\u97cc\u9ad4\u5957\u4ef6"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"MCU\u5404\u7cfb\u5217\u7684STM32Cube\u97cc\u9ad4\u5305\u542b\u5468\u908a\u7684\u7bc4\u4f8b\u4ee5\u53ca\u5404\u7a2e\u61c9\u7528\u5c08\u6848\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u4f9b\u61c9\u5546\u8cc7\u6599\u624b\u518a"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5916\u90e8\u88dd\u7f6e\uff08\u5982\u986f\u793a\u5668\u6216\u5feb\u9583\u8a18\u61b6\u9ad4\uff09\u7684\u8cc7\u6599\u624b\u518a\u5305\u542b\u6b63\u78ba\u8a2d\u5b9aMCU\uff08\u6bd4\u5982\u901a\u904eSTM32CubeMX\uff09\u6216\u5916\u90e8\u8a2d\u5099\u7684\u91cd\u8981\u8cc7\u6599\uff0c\u4f8b\u5982\u96fb\u58d3\u3001\u6642\u8108\u7684\u8a2d\u5b9a\u7b49\u2026\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u4f9b\u61c9\u5546\u7684\u9a45\u52d5\u7a0b\u5f0f"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u70ba\u4e86\u7bc0\u7701\u6642\u9593\uff0c\u60a8\u61c9\u5411\u4f9b\u61c9\u5546\u7d22\u53d6\u5916\u90e8\u8a2d\u5099/\u5143\u4ef6\u7684\u9a45\u52d5\u7a0b\u5f0f\u78bc\u3002 \u901a\u5e38\u9700\u8981\u5c07\u4f9b\u61c9\u5546\u7684\u9a45\u52d5\u7a0b\u5f0f\u7a0b\u5f0f\u78bc\u79fb\u690d\u5230STM32\u7684MCU\u4e2d\uff0c\u9019\u81f3\u5c11\u6bd4\u5f9e\u982d\u958b\u59cb\u7de8\u5beb\u9a45\u52d5\u7a0b\u5f0f\u7a0b\u5f0f\u78bc\u66f4\u7c21\u55ae\u3002")))),(0,r.kt)("p",null,"\u5728\u958b\u767c\u677f\u642d\u5efa\u968e\u6bb5\u7684\u6240\u6709\u6e96\u5099\u5de5\u4f5c\u5747\u8207TouchGFX\u7121\u95dc\uff0c\u4e5f\u4e0d\u61c9\u6d89\u53ca\u4efb\u4f55TouchGFX\u7a0b\u5f0f\u78bc\u3002 \u76f8\u53cd\uff0c\u6240\u505a\u7684\u5de5\u4f5c\u548c\u6240\u7522\u751f\u7684\u7a0b\u5f0f\u78bc\u5c07\u70ba\u958b\u767cTouchGFX\u62bd\u8c61\u5c64\u5960\u5b9a\u5805\u5be6\u7684\u57fa\u790e\u3002"),(0,r.kt)("p",null,"\u5176\u4e3b\u8981\u76ee\u6a19\u5728\u65bc\u78ba\u4fdd\u786c\u9ad4\u548c\u5e95\u5c64\u8edf\u9ad4\u5be6\u969b\u4e0a\u6309\u7167\u6700\u7d42\u61c9\u7528\u7684\u9810\u671f\u904b\u884c\u3002"),(0,r.kt)("h2",g({},{id:"verification-of-functionality"}),"\u529f\u80fd\u9a57\u8b49"),(0,r.kt)("p",null,"\u5728\u958b\u767c\u677f\u4e2d\u57f7\u884c\u7684\u7a0b\u5f0f\u78bc\uff08\u57fa\u65bc\u4e00\u500b\u6216\u591a\u500b\u6e2c\u8a66\u5c08\u6848\uff09\u5c07\u7528\u65bc\u5169\u500b\u76ee\u7684\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null})),(0,r.kt)("th",g({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u62bd\u8c61\u5c64"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u958b\u767c\u677f\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\u662f\u5efa\u69cbTouchGFXAL\u4ee5\u53ca\u6700\u7d42\u57f7\u884c\u7684UI\u61c9\u7528\u7a0b\u5f0f\u7684\u57fa\u790e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u6e2c\u8a66\u7a0b\u5f0f\u78bc"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5982\u679c\u6700\u7d42\u57f7\u884c\u60c5\u6cc1\u4e0d\u7b26\u5408\u9810\u671f\uff0c\u5247\u9700\u8981\u6839\u64da\u73fe\u6709\u958b\u767c\u677f\u7684\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\u7de8\u5beb\u9a57\u8b49\u7a0b\u5f0f\u3002 \u5728\u958b\u767c\u677f\u642d\u5efa\u968e\u6bb5\uff0c\u5c07\u6703\u5275\u5efa\u8a31\u591a\u5c0f\u7a0b\u5f0f\uff0c\u4ee5\u9a57\u8b49\u6574\u500b\u958b\u767c\u677f\u548c\u6bcf\u500b\u5143\u4ef6\u6309\u7167\u9810\u671f\u5de5\u4f5c\u3002 \u9019\u4e9b\u9a57\u8b49\u7a0b\u5f0f\u5728\u6574\u500b\u642d\u5efa\u904e\u7a0b\u4e2d\u5f88\u6709\u50f9\u503c\uff0c\u5c24\u5176\u5728\u6e2c\u8a66\u60c5\u6cc1\u8b8a\u5f97\u4e0d\u78ba\u5b9a\u6642\uff0c\u53ef\u4ee5\u5c0d\u5176\u91cd\u65b0\u4fee\u6539\u4e26\u4e88\u4ee5\u5b8c\u5584\u3002")))),(0,r.kt)("p",null,"\u9452\u65bc\u4e0a\u8ff0\u5169\u500b\u539f\u56e0\uff0c\u6709\u7cfb\u7d71\u5730\u4fdd\u5b58\u5404\u985e\u9a57\u8b49\u7a0b\u5f0f\u6703\u975e\u5e38\u6709\u76ca\u3002 \u60a8\u4ee5\u5f8c\u53ef\u4ee5\u518d\u6b21\u4f7f\u7528\u9019\u4e9b\u6e2c\u8a66\u7a0b\u5f0f\u3002 \u4f8b\u5982\uff0c\u7576\u66f4\u8907\u96dc\u7684\u61c9\u7528\u610f\u5916\u5931\u6557\u6642\uff0c\u53ef\u4f7f\u7528\u9019\u4e9b\u6e2c\u8a66\u7a0b\u5f0f\u9a57\u8b49\u65b0\u7248\u672c\u786c\u9ad4\u6216\u7528\u4f86\u67e5\u627e\u554f\u984c\u3002 \u9084\u5efa\u8b70\u7cfb\u7d71\u6027\u5730\u8a18\u9304\u5728\u958b\u767c\u671f\u9593\u5b8c\u6210\u7684\u4efb\u4f55\u6e2c\u91cf\u8cc7\u6599\uff0c\u5982\u8a18\u61b6\u9ad4\u983b\u5bec\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/components-selected-001.webp",noShadow:!0,width:"600",mdxType:"Figure"},"\u958b\u767c\u677f\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\u662fTouchGFXAL\u7684\u57fa\u790e"),(0,r.kt)("h2",g({},{id:"overall-process"}),"\u7e3d\u9ad4\u6d41\u7a0b"),(0,r.kt)("p",null,"\u7531\u65bc\u6211\u5011\u7121\u6cd5\u77ad\u89e3\u60a8\u786c\u9ad4\u7684\u5177\u9ad4\u69cb\u9020\uff0c\u56e0\u6b64\u4ee5\u4e0b",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(a.Z,{to:"how-to/01-create-project",mdxType:"Link"},"\u64cd\u4f5c")),"\u6307\u5357\u5c07\u4f5c\u70ba\u555f\u52d5\u548c\u6e96\u5099\u7528\u65bc\u904b\u884cTouchGFX\u958b\u767c\u677f\u7684\u4e00\u822c\u6027\u5206\u6b65\u6307\u5357\u3002"),(0,r.kt)("p",null,"\u672c\u6307\u5357\u7684\u6bcf\u4e00\u6b65\u90fd\u6d89\u53ca\u60a8\u7684\u786c\u9ad4\u548c/\u6216\u8edf\u9ad4\u5143\u4ef6\u7684\u4e00\u500b\u7279\u5b9a\u90e8\u5206\u53ca\u5176\u555f\u52d5\u3002 \u786c\u9ad4\u7684\u81ea\u5b9a\u7fa9\u5143\u4ef6\u90e8\u5206\u7684\u4e00\u500b\u7bc4\u4f8b\u53ef\u4ee5\u662f\u89f8\u63a7\u63a7\u5236\u5668\u3002 \u7e3d\u9ad4\u76ee\u6a19\u662f\u8207\u89f8\u63a7\u63a7\u5236\u5668\u9032\u884c\u901a\u4fe1\uff0c\u4ee5\u7372\u53d6\u6709\u95dc\u986f\u793a\u5668\u4e0a\u7684\u4efb\u4f55\u89f8\u63a7\u8cc7\u8a0a\u3002 \u767c\u9001\u7d66\u89f8\u63a7\u63a7\u5236\u5668\u7684\u7279\u5b9a\u6307\u4ee4\u53d6\u6c7a\u65bc\u60a8\u5728\u786c\u9ad4\u4e0a\u4f7f\u7528\u7684\u7279\u5b9a\u63a7\u5236\u5668\uff0c\u56e0\u6b64\u672c\u6307\u5357\u7121\u6cd5\u63d0\u4f9b\u5b8c\u6574\u7684\u9a45\u52d5\u7a0b\u5f0f\u3002 \u70ba\u6b64\uff0c\u958b\u767c\u6642\u9700\u8981\u5c07\u6307\u5357\u8207\u89f8\u6478\u63a7\u5236\u5668\u6578\u64da\u624b\u518a\u4e2d\u7684\u8cc7\u8a0a\u76f8\u7d50\u5408\u3002"),(0,r.kt)(o.Z,{mdxType:"Note"},"\u95b1\u8b80\u4e26\u57f7\u884c\u6709\u95dc\u5b9a\u88fd\u958b\u767c\u677f\u7684\u642d\u5efa\u555f\u52d5\u7684\u5206\u6b65\u6307\u5357\u6642\uff0c\u6211\u5011\u5efa\u8b70\uff1a",(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u6bcf\u6b21\u50c5\u57f7\u884c\u4e00\u6b65"),(0,r.kt)("li",null,"\u5728\u7e7c\u7e8c\u4e0b\u4e00\u6b65\u4e4b\u524d\uff0c\u8acb\u5fb9\u5e95\u9a57\u8b49\u6bcf\u500b\u6b65\u9a5f"),(0,r.kt)("li",null,"\u7576\u67d0\u90e8\u5206\u672a\u80fd\u6309\u9810\u671f\u5de5\u4f5c\u6642\uff0c\u672c\u6307\u5357\u5c07\u4f5c\u70ba\u9664\u932f\u65b9\u6cd5\uff0c\u6216\u8005\u8fd4\u56de\u4e26\u91cd\u65b0\u57f7\u884c\u5148\u524d\u7684\u6b65\u9a5f\uff0c\u4ee5\u78ba\u4fdd\u6c92\u6709\u9055\u53cd\u9019\u4e9b\u6b65\u9a5f"),(0,r.kt)("li",null,"\u5982\u679c\u60a8\u9047\u5230\u610f\u5916\u60c5\u6cc1\uff0c\u8acb\u4e0d\u5fc5\u9a5a\u614c\uff0c\u7562\u7adf\u958b\u767c\u677f\u7684\u555f\u52d5\u642d\u5efa\u4e26\u4e0d\u662f\u4e00\u4ef6\u5bb9\u6613\u7684\u4e8b"))),(0,r.kt)("p",null,"\u6307\u5357\u4e2d\u7684\u6bcf\u4e00\u6b65\u90fd\u5c07\u9075\u5faa\u4ee5\u4e0b\u7d50\u69cb\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u52d5\u6a5f")," \u6b64\u90e8\u5206\u5c07\u89e3\u91cb\u6b65\u9a5f\uff0c\u4e26\u8aaa\u660e\u70ba\u4ec0\u9ebc\u8a72\u6b65\u9a5f\u662f\u6e96\u5099\u5728\u786c\u9ad4\u4e0a\u904b\u884cTouchGFX\u6642\u7684\u91cd\u8981\u6b65\u9a5f\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u76ee\u6a19")," \u76ee\u6a19\u90e8\u5206\u5217\u51fa\u4e86\u6b64\u6b65\u9a5f\u7684\u76ee\u6a19\u3002 \u9a57\u8b49\u9ede\u5217\u8868\u8a73\u8ff0\u4e86\u60a8\u61c9\u57f7\u884c\u7684\u7279\u5b9a\u6e2c\u8a66\u3002 \u9019\u4e9b\u9a57\u8b49\u9ede\u78ba\u4fdd\u60a8\u7684\u8edf\u9ad4\u6eff\u8db3\u5728\u786c\u9ad4\u4e0a\u6210\u529f\u904b\u884cTouchGFX\u7684\u689d\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5148\u6c7a\u689d\u4ef6")," \u6211\u5011\u5728\u9019\u88e1\u5217\u51fa\u4e86\u57f7\u884c\u4efb\u52d9\u6240\u9700\u7684\u5c08\u6848\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u57f7\u884c")," \u6b64\u90e8\u5206\u76e1\u53ef\u80fd\u5177\u9ad4\u5730\u89e3\u91cb\u5982\u4f55\u7de8\u5beb\u914d\u7f6e\u548c\u4f7f\u7528\u786c\u9ad4\u6240\u9700\u7684\u8edf\u9ad4\u3002 \u7531\u65bc\u8edf\u9ad4\u5728\u5f88\u5927\u7a0b\u5ea6\u4e0a\u53d6\u6c7a\u65bc\u60a8\u6240\u4f7f\u7528\u7684\u786c\u9ad4\uff0c\u67d0\u4e9b\u6b65\u9a5f\u4e0d\u53ef\u80fd\u975e\u5e38\u6e96\u78ba\u3002 \u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u6b64\u90e8\u5206\u5728\u66f4\u9ad8\u968e\u5c64\u9762\u4e0a\u5217\u51fa\u4e86\u6b65\u9a5f\uff0c\u60a8\u9084\u5fc5\u9808\u627e\u5230\u8207\u60a8\u81ea\u5df1\u7684\u786c\u9ad4\u76f8\u95dc\u7684\u8a73\u7d30\u8cc7\u8a0a\u3002")),(0,r.kt)("p",null,"\u5404\u500b\u52d5\u4f5c\u6b65\u9a5f\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u6b65\u9a5f"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u5167\u5bb9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/01-create-project"}),"\u5275\u5efa\u5c08\u6848")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5728STM32CubeMX\u5efa\u7acb\u4e00\u500b\u7a7a\u5c08\u6848")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/02-cpu-running"}),"CPU\u7684\u57f7\u884c")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u78ba\u4fddMCU\u4ee5\u9700\u8981\u7684\u901f\u5ea6\u57f7\u884c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/03-display-internal"}),"\u986f\u793a\u4f4d\u65bc\u5167\u90e8RAM\u4e2d\u7684\u5f71\u50cf\u7de9\u885d\u5340")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5728\u5167\u90e8RAM\u4e2d\u5206\u914d\u5f71\u50cf\u7de9\u885d\u5340\u4e26\u5c07\u5167\u5bb9\u50b3\u8f38\u5230\u986f\u793a\u5668")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/04-enable-external-ram"}),"\u5916\u90e8RAM")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u555f\u52d5\u5916\u90e8RAM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/05-display-external"}),"\u986f\u793a\u4f4d\u65bc\u5916\u90e8RAM\u4e2d\u7684\u5f71\u50cf\u7de9\u885d\u5340")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5c07\u5f71\u50cf\u7de9\u885d\u5340\u79fb\u81f3\u5916\u90e8RAM\uff0c\u4e26\u5c07\u50b3\u8f38\u5230\u986f\u793a\u5668")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/06-flash-external-addressable"}),"\u5916\u90e8\u53ef\u5b9a\u5740\u5feb\u9583\u8a18\u61b6\u9ad4")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u555f\u52d5\u5916\u90e8\u5b58\u5132\u6620\u5c04\u5feb\u9583\u8a18\u61b6\u9ad4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/07-flash-external-nonaddressable"}),"\u5916\u90e8\u584a\u6a21\u5f0f\u5feb\u9583\u8a18\u61b6\u9ad4")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u555f\u52d5\u5916\u90e8\u584a\u6a21\u5f0f\u5feb\u9583\u8a18\u61b6\u9ad4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/08-hardware-acceleration"}),"\u786c\u9ad4\u52a0\u901f\u5668")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u555f\u52d5Chrom-ART\u5716\u5f62\u52a0\u901f\u5668")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/09-touch-controller"}),"\u89f8\u63a7\u63a7\u5236\u5668")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u8a2d\u7f6e\u8207\u89f8\u63a7\u63a7\u5236\u5668\u7684\u901a\u4fe1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/10-physical-buttons"}),"\u6309\u9215")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u914d\u7f6e\u5c0d\u6309\u9215\u7684\u8a2a\u554f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/11-flash-loader"}),"\u5feb\u9583\u8a18\u61b6\u9ad4\u88dd\u8f09\u8edf\u9ad4")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u958b\u767c\u4e00\u7a2e\u65b9\u6cd5\u5c07\u6578\u64da\u5beb\u5165\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4")))))}T.isMDXComponent=!0}}]);