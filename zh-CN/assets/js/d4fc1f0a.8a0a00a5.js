"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[276],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),s=a,h=m["".concat(c,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(h,o(o({ref:e},u),{},{components:n})):r.createElement(h,o({ref:e},u))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44035:function(t,e,n){var r=n(67294),a=n(25026);e.Z=function(t){const e=t.noShadow||!1,n=t.width,l=t.height,o=(0,a.Z)(t.imageSource);return e?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,t.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,t.children))}},88678:function(t,e,n){var r=n(67294);class a extends r.Component{render(){const t=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:t},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}e.Z=a},93054:function(t,e,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}e.Z=o},84541:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(67294),a=n(86010),l=n(99492),o=n(39130),i=n(35096),c=n(33084),p="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m({href:t,children:e}){return r.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",p)},e)}function s({href:t,icon:e,title:n,description:l}){return r.createElement(m,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:n},e," ",n),l&&r.createElement("p",{className:(0,a.Z)("text--truncate",d),title:l},l))}function h({item:t}){const e=(0,l.Wl)(t);return e?r.createElement(s,{href:e,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function k({item:t}){var e;const n=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,l.xz)(null!=(e=t.docId)?e:void 0);return r.createElement(s,{href:t.href,icon:n,title:t.label,description:null==a?void 0:a.description})}function g({item:t}){switch(t.type){case"link":return r.createElement(k,{item:t});case"category":return r.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f({items:t,className:e}){return r.createElement("section",{className:(0,a.Z)("row",e)},function(t){return t.filter((t=>"category"!==t.type||!!(0,l.Wl)(t)))}(t).map(((t,e)=>r.createElement("article",{key:e,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:t})))))}},16514:function(t,e,n){n.r(e),n.d(e,{assets:function(){return y},contentTitle:function(){return b},default:function(){return T},frontMatter:function(){return f},metadata:function(){return N},toc:function(){return v}});var r=n(3905),a=n(39130),l=n(44035),o=n(93054),i=n(84541),c=n(99492),p=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,k=(t,e,n)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,g=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&k(t,n,e[n]);if(m)for(var n of m(e))h.call(e,n)&&k(t,n,e[n]);return t};const f={id:"board-introduction",title:"\u542f\u52a8\u5f00\u53d1\u677f\u4ecb\u7ecd"},b=void 0,N={unversionedId:"development/board-bring-up/board-introduction",id:"development/board-bring-up/board-introduction",title:"\u542f\u52a8\u5f00\u53d1\u677f\u4ecb\u7ecd",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/board-bring-up/board-introduction.mdx",sourceDirName:"development/board-bring-up",slug:"/development/board-bring-up/board-introduction",permalink:"/4.21/zh-CN/docs/development/board-bring-up/board-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"board-introduction",title:"\u542f\u52a8\u5f00\u53d1\u677f\u4ecb\u7ecd"},sidebar:"docs",previous:{title:"\u5916\u90e8\u5b58\u50a8\u5668",permalink:"/4.21/zh-CN/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories"},next:{title:"1. \u521b\u5efa\u9879\u76ee",permalink:"/4.21/zh-CN/docs/development/board-bring-up/how-to/01-create-project"}},y={},v=[{value:"\u884c\u4e1a\u5de5\u5177",id:"tools-of-the-trade",level:2},{value:"\u529f\u80fd\u9a8c\u8bc1",id:"verification-of-functionality",level:2},{value:"\u603b\u4f53\u6d41\u7a0b",id:"overall-process",level:2}],w={toc:v};function T(t){var e,n=t,{components:p}=n,k=((t,e)=>{var n={};for(var r in t)s.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&m)for(var r of m(t))e.indexOf(r)<0&&h.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=g(g({},w),k),u(e,d({components:p,mdxType:"MDXLayout"}))),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/activities-selected-001.webp",noShadow:!0,width:"600",mdxType:"Figure"},"\u9879\u76ee\u6d3b\u52a8"),(0,r.kt)("p",null,"\u672c\u7ae0\u5c06\u5e2e\u52a9\u60a8\u9010\u6b65\u5b8c\u6210\u5728\u65b0\u5e73\u53f0\u4e0a\u5f00\u59cbTouchGFX\u7f16\u7a0b\u7684\u677f\u5361\u542f\u52a8\u9636\u6bb5\u3002 \u542f\u52a8\u677f\u5361\u610f\u5473\u7740\u5728\u5c06TouchGFX\u6dfb\u52a0\u8fdb\u6765\u4e4b\u524d\uff0c\u786e\u4fdd\u6240\u6709\u5fc5\u8981\u7684\u677f\u8f7d\u90e8\u4ef6\u548c\u76f8\u5e94\u7684\u9a71\u52a8\u7a0b\u5e8f\u5747\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5df2\u62e5\u6709\u4e00\u4e2a\u7684\u53ef\u4ee5\u5de5\u4f5c\u7684\u5e26\u663e\u793a\u5c4f\u7684\u677f\u5361\uff0c\u5219\u6b64\u9636\u6bb5\u7684\u8bb8\u591a\u64cd\u4f5c\u5c06\u5f88\u5bb9\u6613\u3002 \u5982\u679c\u60a8\u62e5\u6709\u7684\u662f\u5757\u5168\u65b0\u7684\u5b9a\u5236\u677f\uff0c\u5219\u4f60\u9700\u8981\u9884\u671f\u6b64\u9636\u6bb5\u53ef\u80fd\u9700\u8981\u82b1\u8d39\u597d\u51e0\u5929\u624d\u80fd\u5b8c\u6210\u3002 \u4e00\u4e2a\u4e0d\u7a33\u5b9a\u7684\u5e73\u53f0\u4e0a\u5f88\u96be\u7f16\u5199\u826f\u597d\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u6240\u4ee5\u8fd9\u9879\u5de5\u4f5c\u503c\u5f97\u4e00\u505a\u3002 \u4ece\u53e6\u4e00\u65b9\u9762\u8bb2\uff0c\u7a33\u5b9a\u53ef\u9760\u7684\u5e73\u53f0\u8ba9\u60a8\u66f4\u4e13\u6ce8\u4e8e\u5e94\u7528\u7a0b\u5e8f\u7684\u5f00\u53d1\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5c31\u662f\u8d1f\u8d23\u677f\u4e0a\u786c\u4ef6\u548c\u5e95\u5c42\u8f6f\u4ef6\u80fd\u591f\u6309\u9884\u671f\u5de5\u4f5c\u7684\u5f00\u53d1\u4eba\u5458\uff0c\u5219\u672c\u7ae0\u5f88\u9002\u5408\u60a8\u3002 \u5982\u679c\u60a8\u53ea\u5173\u6ce8\u5e94\u7528\u7a0b\u5e8f\u7684\u5b9e\u9645UI\u754c\u9762\uff0c\u5219\u672c\u7ae0\u4e0d\u592a\u9002\u5408\u60a8\u3002"),(0,r.kt)("p",null,"\u5728\u642d\u5efa\u5f00\u53d1\u677f\u65f6\uff0c\u60a8\u5e94\u5168\u9762\u4e86\u89e3\u677f\u7684\u7ec4\u4ef6\u548c\u5916\u8bbe\u3001\u6240\u6709\u8fd9\u4e9b\u90e8\u4ef6\u4e4b\u95f4\u7684\u8fde\u63a5\u3001\u6240\u7528\u5230\u7684\u901a\u4fe1\u534f\u8bae\u4ee5\u53ca\u5404\u4e2a\u53ef\u7528\u548c/\u6216\u6240\u9700\u7684\u9a71\u52a8\u7a0b\u5e8f\u4ee3\u7801\u3002"),(0,r.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}),(0,r.kt)("p",null,"\u4e0b\u4e00\u7ae0",(0,r.kt)(a.Z,{to:"../touchgfx-hal-development/touchgfx-al-development-introduction",mdxType:"Link"},"TouchGFX AL\u5f00\u53d1"),"\u5c06\u8ba8\u8bba\u5982\u4f55\u521b\u5efa\u5141\u8bb8TouchGFX\u5728\u786c\u4ef6\u548c\u9a71\u52a8\u7a0b\u5e8f\u4e4b\u4e0a\u8fd0\u884c\u7684\u62bd\u8c61\u5c42\u3002"),(0,r.kt)("h2",g({},{id:"tools-of-the-trade"}),"\u884c\u4e1a\u5de5\u5177"),(0,r.kt)("p",null,"\u4e0b\u8868\u5217\u51fa\u4e86\u642d\u5efa\u57fa\u4e8eSTM32\u7684\u7535\u8def\u677f\u65f6\u7684\u4e00\u4e9b\u91cd\u8981\u5de5\u5177\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u5de5\u5177"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"STM32CubeMX"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u4e00\u79cd\u6613\u4e8e\u4f7f\u7528\u7684\u5de5\u5177\uff0c\u7528\u4e8e\u914d\u7f6eMCU\u5e76\u751f\u6210\u5305\u62ec\u5185\u90e8\u5916\u8bbe\u7684\u6574\u4e2a\u5de5\u7a0b\u521d\u59cb\u5316\u6e90\u4ee3\u7801\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"STM32Cube\u56fa\u4ef6\u5305"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"MCU\u5404\u7cfb\u5217\u7684STM32Cube\u56fa\u4ef6\u5305\u542b\u90a3\u4e9b\u5982\u4f55\u4f7f\u7528\u5404\u79cd\u5916\u8bbe\u7684\u8bf8\u591a\u793a\u4f8b\u548c\u5404\u7c7b\u7efc\u5408\u5e94\u7528\u5de5\u7a0b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u4f9b\u5e94\u5546\u5668\u4ef6\u6570\u636e\u624b\u518c"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5916\u90e8\u8bbe\u5907\uff0c\u5982\u663e\u793a\u5c4f\u6216\u95ea\u5b58\u7684\u6570\u636e\u624b\u518c\u5305\u542b\u7740\u91cd\u8981\u4fe1\u606f\u5982\u65f6\u5e8f\u548c\u7535\u538b\uff0c\u8fd9\u4e9b\u5bf9 (\u6bd4\u5982\u901a\u8fc7STM32CubeMX) \u6b63\u786e\u521d\u59cb\u5316MCU\u4ee5\u53ca\u5916\u90e8\u8bbe\u5907\u90fd\u975e\u5e38\u91cd\u8981\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5668\u4ef6\u4f9b\u5e94\u5546\u7684\u9a71\u52a8\u7a0b\u5e8f"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u4e3a\u4e86\u8282\u7701\u65f6\u95f4\uff0c\u60a8\u5e94\u5411\u4f9b\u5e94\u5546\u7d22\u53d6\u5916\u90e8\u8bbe\u5907/\u5668\u4ef6\u7684\u9a71\u52a8\u4ee3\u7801\u3002 \u901a\u5e38\u9700\u8981\u5c06\u4f9b\u5e94\u5546\u7684\u9a71\u52a8\u7a0b\u5e8f\u4ee3\u7801\u79fb\u690d\u5230STM32 MCU\u4e2d\uff0c\u8fd9\u81f3\u5c11\u6bd4\u4ece\u5934\u5f00\u59cb\u7f16\u5199\u9a71\u52a8\u7a0b\u5e8f\u4ee3\u7801\u66f4\u7b80\u5355\u3002")))),(0,r.kt)("p",null,"\u5728\u677f\u642d\u5efa\u9636\u6bb5\u8981\u5b8c\u6210\u7684\u6240\u6709\u51c6\u5907\u5de5\u4f5c\u5747\u4e0d\u4f9d\u8d56\u4e8eTouchGFX\uff0c\u4e5f\u4e0d\u5e94\u6d89\u53ca\u4efb\u4f55TouchGFX\u4ee3\u7801\u3002 \u76f8\u53cd\uff0c\u6240\u505a\u7684\u5de5\u4f5c\u548c\u6240\u4ea7\u751f\u7684\u4ee3\u7801\u5c06\u4e3a\u5f00\u53d1TouchGFX\u62bd\u8c61\u5c42\u5960\u5b9a\u575a\u5b9e\u7684\u57fa\u7840\u3002"),(0,r.kt)("p",null,"\u5176\u4e3b\u8981\u76ee\u6807\u5728\u4e8e\u786e\u4fdd\u786c\u4ef6\u548c\u5e95\u5c42\u8f6f\u4ef6\u5b9e\u9645\u4e0a\u6309\u7167\u6700\u7ec8\u5e94\u7528\u7684\u9884\u671f\u8fd0\u884c\u3002"),(0,r.kt)("h2",g({},{id:"verification-of-functionality"}),"\u529f\u80fd\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u5728\u677f\u642d\u5efa\u542f\u52a8\u671f\u95f4\u6240\u4ea7\u751f\u7684\u4ee3\u7801\uff08\u57fa\u4e8e\u4e00\u4e2a\u6216\u591a\u4e2a\u6d4b\u8bd5\u9879\u76ee\uff09\u5c06\u7528\u4e8e\u4e24\u4e2a\u76ee\u7684\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null})),(0,r.kt)("th",g({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u62bd\u8c61\u5c42"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u677f\u521d\u59cb\u5316\u4ee3\u7801\u662f\u6784\u5efaTouchGFX AL\u4ee5\u53ca\u6700\u7ec8\u53ef\u8fd0\u884c\u7684UI\u5e94\u7528\u7a0b\u5e8f\u7684\u57fa\u7840")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u6d4b\u8bd5\u4ee3\u7801"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5982\u679c\u6700\u7ec8\u8fd0\u884c\u60c5\u51b5\u4e0d\u7b26\u5408\u9884\u671f\uff0c\u5219\u9700\u8981\u57fa\u4e8e\u73b0\u6709\u5f00\u53d1\u677f\u7684\u521d\u59cb\u5316\u4ee3\u7801\u7f16\u5199\u9a8c\u8bc1\u7a0b\u5e8f\u3002 \u5728\u5f00\u53d1\u677f\u642d\u5efa\u9636\u6bb5\uff0c\u5c06\u4f1a\u521b\u5efa\u8bb8\u591a\u5c0f\u9a8c\u8bc1\u7a0b\u5e8f\uff0c\u4ee5\u786e\u4fdd\u6574\u4e2a\u5f00\u53d1\u677f\u548c\u6bcf\u4e2a\u7279\u5b9a\u7ec4\u4ef6\u6309\u9884\u671f\u5de5\u4f5c\u3002 \u8fd9\u4e9b\u9a8c\u8bc1\u7a0b\u5e8f\u5728\u6574\u4e2a\u642d\u5efa\u8fc7\u7a0b\u4e2d\u5f88\u6709\u4ef7\u503c\uff0c\u5c24\u5176\u5728\u6d4b\u8bd5\u60c5\u51b5\u53d8\u5f97\u4e0d\u786e\u5b9a\u65f6\uff0c\u53ef\u4ee5\u5bf9\u5176\u91cd\u65b0\u4fee\u6539\u5e76\u4e88\u4ee5\u5b8c\u5584\u3002")))),(0,r.kt)("p",null,"\u9274\u4e8e\u4e0a\u8ff0\u4e24\u4e2a\u539f\u56e0\uff0c\u7cfb\u7edf\u5730\u4fdd\u5b58\u5404\u7c7b\u9a8c\u8bc1\u7a0b\u5e8f\u4f1a\u975e\u5e38\u6709\u76ca\u3002 \u60a8\u4ee5\u540e\u53ef\u4ee5\u518d\u6b21\u4f7f\u7528\u8fd9\u4e9b\u6d4b\u8bd5\u7a0b\u5e8f\u3002 \u4f8b\u5982\uff0c\u5f53\u66f4\u590d\u6742\u7684\u5e94\u7528\u7a0b\u5e8f\u610f\u5916\u5931\u8d25\u65f6\uff0c\u53ef\u4f7f\u7528\u8fd9\u4e9b\u6d4b\u8bd5\u7a0b\u5e8f\u9a8c\u8bc1\u65b0\u7248\u672c\u786c\u4ef6\u6216\u67e5\u627e\u6839\u6e90\u3002 \u8fd8\u5efa\u8bae\u7cfb\u7edf\u6027\u5730\u8bb0\u5f55\u5728\u5f00\u53d1\u671f\u95f4\u5b8c\u6210\u7684\u4efb\u4f55\u6d4b\u91cf\u6570\u636e\uff0c\u5982\u5b58\u50a8\u5668\u5e26\u5bbd\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/components-selected-001.webp",noShadow:!0,width:"600",mdxType:"Figure"},"\u603b\u4e4b\uff0c\u5f00\u53d1\u677f\u521d\u59cb\u5316\u4ee3\u7801\u662fTouchGFX AL\u7684\u57fa\u7840"),(0,r.kt)("h2",g({},{id:"overall-process"}),"\u603b\u4f53\u6d41\u7a0b"),(0,r.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u65e0\u6cd5\u4e86\u89e3\u60a8\u786c\u4ef6\u7684\u5177\u4f53\u6784\u9020\uff0c\u56e0\u6b64\u4ee5\u4e0b",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(a.Z,{to:"how-to/01-create-project",mdxType:"Link"},"\u64cd\u4f5c")),"\u6307\u5357\u5c06\u4f5c\u4e3a\u542f\u52a8\u548c\u51c6\u5907\u7528\u4e8e\u8fd0\u884cTouchGFX\u5f00\u53d1\u677f\u7684\u4e00\u822c\u6027\u5206\u6b65\u6307\u5357\u3002"),(0,r.kt)("p",null,"\u672c\u6307\u5357\u7684\u6bcf\u4e00\u6b65\u90fd\u6d89\u53ca\u60a8\u7684\u786c\u4ef6\u548c/\u6216\u8f6f\u4ef6\u7ec4\u4ef6\u7684\u4e00\u4e2a\u7279\u5b9a\u90e8\u5206\u53ca\u5176\u542f\u52a8\u3002 \u786c\u4ef6\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u90e8\u5206\u7684\u4e00\u4e2a\u793a\u4f8b\u53ef\u4ee5\u662f\u89e6\u6478\u63a7\u5236\u5668\u3002 \u603b\u4f53\u76ee\u6807\u662f\u4e0e\u89e6\u6478\u63a7\u5236\u5668\u8fdb\u884c\u901a\u4fe1\uff0c\u4ee5\u83b7\u53d6\u6709\u5173\u663e\u793a\u5c4f\u4e0a\u7684\u4efb\u4f55\u89e6\u6478\u4fe1\u606f\u3002 \u53d1\u9001\u7ed9\u89e6\u6478\u63a7\u5236\u5668\u7684\u7279\u5b9a\u6307\u4ee4\u53d6\u51b3\u4e8e\u60a8\u5728\u786c\u4ef6\u4e0a\u4f7f\u7528\u7684\u7279\u5b9a\u63a7\u5236\u5668\uff0c\u56e0\u6b64\u672c\u6307\u5357\u65e0\u6cd5\u63d0\u4f9b\u5b8c\u6574\u7684\u9a71\u52a8\u7a0b\u5e8f\u3002 \u4e3a\u6b64\uff0c\u5f00\u53d1\u65f6\u9700\u8981\u5c06\u6307\u5357\u4e0e\u89e6\u6478\u63a7\u5236\u5668\u6570\u636e\u624b\u518c\u4e2d\u7684\u4fe1\u606f\u76f8\u7ed3\u5408\u3002"),(0,r.kt)(o.Z,{mdxType:"Note"},"\u9605\u8bfb\u5e76\u6267\u884c\u6709\u5173\u5b9a\u5236\u5f00\u53d1\u677f\u7684\u642d\u5efa\u542f\u52a8\u7684\u5206\u6b65\u6307\u5357\u65f6\uff0c\u6211\u4eec\u5efa\u8bae\uff1a",(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u6bcf\u6b21\u4ec5\u6267\u884c\u4e00\u6b65"),(0,r.kt)("li",null,"\u5728\u7ee7\u7eed\u4e0b\u4e00\u6b65\u4e4b\u524d\uff0c\u8bf7\u5f7b\u5e95\u9a8c\u8bc1\u6bcf\u4e2a\u6b65\u9aa4"),(0,r.kt)("li",null,"\u5f53\u67d0\u90e8\u5206\u672a\u80fd\u6309\u9884\u671f\u5de5\u4f5c\u65f6\uff0c\u672c\u6307\u5357\u5c06\u4f5c\u4e3a\u8c03\u8bd5\u65b9\u6cd5\uff0c\u6216\u8005\u8fd4\u56de\u5e76\u91cd\u65b0\u6267\u884c\u4ee5\u524d\u7684\u6b65\u9aa4\uff0c\u4ee5\u786e\u4fdd\u6ca1\u6709\u8fdd\u80cc\u8fd9\u4e9b\u6b65\u9aa4"),(0,r.kt)("li",null,"\u5982\u679c\u60a8\u9047\u5230\u610f\u5916\u60c5\u51b5\uff0c\u8bf7\u4e0d\u5fc5\u60ca\u614c\uff0c\u6bd5\u7adf\u677f\u7684\u542f\u52a8\u642d\u5efa\u4e0d\u662f\u4e00\u4ef6\u5bb9\u6613\u7684\u4e8b"))),(0,r.kt)("p",null,"\u6307\u5357\u4e2d\u7684\u6bcf\u4e00\u6b65\u90fd\u5c06\u9075\u5faa\u4ee5\u4e0b\u7ed3\u6784\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Motivation")," This part will explain the step and motivate why the step is an important step in preparing for running TouchGFX on your hardware."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Goal")," The goal part lists the goals for this step. \u9a8c\u8bc1\u70b9\u5217\u8868\u8be6\u8ff0\u4e86\u60a8\u5e94\u6267\u884c\u7684\u7279\u5b9a\u6d4b\u8bd5\u3002 \u8fd9\u4e9b\u9a8c\u8bc1\u70b9\u786e\u4fdd\u60a8\u7684\u8f6f\u4ef6\u6ee1\u8db3\u5728\u786c\u4ef6\u4e0a\u6210\u529f\u8fd0\u884cTouchGFX\u7684\u9700\u6c42\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Prerequisites")," Here we list items that are required to perform the tasks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Do")," This part explains as concrete as possible how to write the software required to configure and use the hardware. \u7531\u4e8e\u8f6f\u4ef6\u5728\u5f88\u5927\u7a0b\u5ea6\u4e0a\u53d6\u51b3\u4e8e\u60a8\u6240\u4f7f\u7528\u7684\u786c\u4ef6\uff0c\u67d0\u4e9b\u6b65\u9aa4\u4e0d\u53ef\u80fd\u975e\u5e38\u51c6\u786e\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6b64\u90e8\u5206\u5728\u66f4\u9ad8\u9636\u5c42\u9762\u4e0a\u5217\u51fa\u4e86\u6b65\u9aa4\uff0c\u60a8\u8fd8\u5fc5\u987b\u627e\u5230\u4e0e\u60a8\u81ea\u5df1\u7684\u786c\u4ef6\u76f8\u5173\u7684\u8be6\u7ec6\u4fe1\u606f\u3002")),(0,r.kt)("p",null,"\u5404\u4e2a\u64cd\u4f5c\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u6b65\u9aa4"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u5185\u5bb9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/01-create-project"}),"\u521b\u5efa\u9879\u76ee")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5728STM32CubeMX\u4e0a\u521b\u5efa\u4e00\u4e2a\u7a7a\u9879\u76ee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/02-cpu-running"}),"CPU\u8fd0\u884c")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u786e\u4fddMCU\u4ee5\u6240\u9700\u901f\u5ea6\u8fd0\u884c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/03-display-internal"}),"\u663e\u793a\u5c4f\u7684\u5e27\u7f13\u5b58\u4f4d\u4e8e\u5185\u90e8RAM\u4e2d")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5728\u5185\u90e8RAM\u4e2d\u5206\u914d\u5e27\u7f13\u51b2\u5e76\u5c06\u5176\u5185\u5bb9\u4f20\u8f93\u5230\u663e\u793a\u5c4f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/04-enable-external-ram"}),"\u5916\u90e8RAM")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u4f7f\u80fd\u5916\u90e8RAM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/05-display-external"}),"\u663e\u793a\u5c4f\u7684\u5e27\u7f13\u5b58\u4f4d\u4e8e\u5916\u90e8RAM\u4e2d")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5c06\u5e27\u7f13\u51b2\u79fb\u81f3\u5916\u90e8RAM\uff0c\u5e76\u5c06\u5176\u4f20\u8f93\u5230\u663e\u793a\u5c4f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/06-flash-external-addressable"}),"\u5916\u90e8\u53ef\u5bfb\u5740\u95ea\u5b58")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u4f7f\u80fd\u5916\u90e8\u5b58\u50a8\u6620\u5c04\u95ea\u5b58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/07-flash-external-nonaddressable"}),"\u5916\u90e8\u5757\u6a21\u5f0f\u95ea\u5b58")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u4f7f\u80fd\u5916\u90e8\u5757\u6a21\u5f0f\u95ea\u5b58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/08-hardware-acceleration"}),"\u786c\u4ef6\u52a0\u901f\u5668")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u4f7f\u80fdChrom-ART\u56fe\u5f62\u52a0\u901f\u5668")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/09-touch-controller"}),"\u89e6\u6478\u63a7\u5236\u5668")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u4e0e\u89e6\u6478\u63a7\u5236\u5668\u7684\u901a\u4fe1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/10-physical-buttons"}),"\u6309\u94ae")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u914d\u7f6e\u5bf9\u6309\u94ae\u7684\u8bbf\u95ee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/11-flash-loader"}),"\u95ea\u5b58\u88c5\u8f7d\u8f6f\u4ef6")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u5f00\u53d1\u4e00\u79cd\u65b9\u6cd5\u5c06\u6570\u636e\u5199\u5165\u5916\u90e8\u95ea\u5b58")))))}T.isMDXComponent=!0}}]);