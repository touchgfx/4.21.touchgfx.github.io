"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3925],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(r),p=o,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:i,src:a})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:i,src:a})),n.createElement("p",null,e.children))}},84541:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(67294),o=r(86010),i=r(99492),a=r(39130),c=r(35096),l=r(33084),u="cardContainer_fWXF",s="cardTitle_rnsV",d="cardDescription_PWke";function m({href:e,children:t}){return n.createElement(a.Z,{href:e,className:(0,o.Z)("card padding--lg",u)},t)}function p({href:e,icon:t,title:r,description:i}){return n.createElement(m,{href:e},n.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:r},t," ",r),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",d),title:i},i))}function f({item:e}){const t=(0,i.Wl)(e);return t?n.createElement(p,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function h({item:e}){var t;const r=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(p,{href:e.href,icon:r,title:e.label,description:null==o?void 0:o.description})}function y({item:e}){switch(e.type){case"link":return n.createElement(h,{item:e});case"category":return n.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function g({items:e,className:t}){return n.createElement("section",{className:(0,o.Z)("row",t)},function(e){return e.filter((e=>"category"!==e.type||!!(0,i.Wl)(e)))}(e).map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}},84137:function(e,t,r){r.r(t),r.d(t,{assets:function(){return w},contentTitle:function(){return y},default:function(){return O},frontMatter:function(){return h},metadata:function(){return g},toc:function(){return v}});var n=r(3905),o=r(44035),i=r(84541),a=r(99492),c=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))m.call(t,r)&&p(e,r,t[r]);return e};const h={id:"hardware-selection-introduction",title:"Hardware Selection Introduction"},y=void 0,g={unversionedId:"development/hardware-selection/hardware-selection-introduction",id:"development/hardware-selection/hardware-selection-introduction",title:"Hardware Selection Introduction",description:"",source:"@site/docs/development/hardware-selection/hardware-selection-introduction.mdx",sourceDirName:"development/hardware-selection",slug:"/development/hardware-selection/hardware-selection-introduction",permalink:"/4.21/docs/development/hardware-selection/hardware-selection-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"hardware-selection-introduction",title:"Hardware Selection Introduction"},sidebar:"docs",previous:{title:"Development Introduction",permalink:"/4.21/docs/development/development-introduction"},next:{title:"Preliminary Considerations",permalink:"/4.21/docs/development/hardware-selection/preliminary-considerations"}},w={},v=[],b={toc:v};function O(e){var t,r=e,{components:c}=r,p=((e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},b),p),l(t,u({components:c,mdxType:"MDXLayout"}))),(0,n.kt)(o.Z,{imageSource:"/img/development/hardware-selection/activities-selected-000.webp",noShadow:!0,width:"600",mdxType:"Figure"},"Project activity"),(0,n.kt)(o.Z,{imageSource:"/img/development/hardware-selection/components-selected-000.webp",noShadow:!0,width:"600",mdxType:"Figure"},"Project component"),(0,n.kt)("p",null,"There are many parameters to consider and evaluate when choosing the hardware platform for running a graphical user interface. This article attempts to address considerations about the MCU, display, external memories, UI performance, etc."),(0,n.kt)(i.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}O.isMDXComponent=!0}}]);