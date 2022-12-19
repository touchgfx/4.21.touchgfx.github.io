"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7263],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=u(r),p=o,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,i=e.height,c=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:c,target:"_blank"},n.createElement("img",{width:r,height:i,src:c})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:c,target:"_blank"},n.createElement("img",{width:r,height:i,src:c})),n.createElement("p",null,e.children))}},84541:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(67294),o=r(86010),i=r(99492),c=r(39130),a=r(35096),l=r(33084),u="cardContainer_fWXF",s="cardTitle_rnsV",d="cardDescription_PWke";function m({href:e,children:t}){return n.createElement(c.Z,{href:e,className:(0,o.Z)("card padding--lg",u)},t)}function p({href:e,icon:t,title:r,description:i}){return n.createElement(m,{href:e},n.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:r},t," ",r),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",d),title:i},i))}function f({item:e}){const t=(0,i.Wl)(e);return t?n.createElement(p,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function h({item:e}){var t;const r=(0,a.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(p,{href:e.href,icon:r,title:e.label,description:null==o?void 0:o.description})}function y({item:e}){switch(e.type){case"link":return n.createElement(h,{item:e});case"category":return n.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function g({items:e,className:t}){return n.createElement("section",{className:(0,o.Z)("row",t)},function(e){return e.filter((e=>"category"!==e.type||!!(0,i.Wl)(e)))}(e).map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}},14842:function(e,t,r){r.r(t),r.d(t,{assets:function(){return w},contentTitle:function(){return y},default:function(){return O},frontMatter:function(){return h},metadata:function(){return g},toc:function(){return v}});var n=r(3905),o=r(44035),i=r(84541),c=r(99492),a=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))m.call(t,r)&&p(e,r,t[r]);return e};const h={id:"hardware-selection-introduction",title:"\ud558\ub4dc\uc6e8\uc5b4 \uc120\ud0dd \uc18c\uac1c"},y=void 0,g={unversionedId:"development/hardware-selection/hardware-selection-introduction",id:"development/hardware-selection/hardware-selection-introduction",title:"\ud558\ub4dc\uc6e8\uc5b4 \uc120\ud0dd \uc18c\uac1c",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-selection-introduction.mdx",sourceDirName:"development/hardware-selection",slug:"/development/hardware-selection/hardware-selection-introduction",permalink:"/4.21/ko/docs/development/hardware-selection/hardware-selection-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"hardware-selection-introduction",title:"\ud558\ub4dc\uc6e8\uc5b4 \uc120\ud0dd \uc18c\uac1c"},sidebar:"docs",previous:{title:"\uac1c\ubc1c \ud65c\ub3d9 \uc18c\uac1c",permalink:"/4.21/ko/docs/development/development-introduction"},next:{title:"\uc0ac\uc804 \uace0\ub824 \uc0ac\ud56d",permalink:"/4.21/ko/docs/development/hardware-selection/preliminary-considerations"}},w={},v=[],b={toc:v};function O(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},b),p),l(t,u({components:a,mdxType:"MDXLayout"}))),(0,n.kt)(o.Z,{imageSource:"/img/development/hardware-selection/activities-selected-000.webp",noShadow:!0,width:"600",mdxType:"Figure"},"\ud504\ub85c\uc81d\ud2b8 \ud65c\ub3d9"),(0,n.kt)(o.Z,{imageSource:"/img/development/hardware-selection/components-selected-000.webp",noShadow:!0,width:"600",mdxType:"Figure"},"\ud504\ub85c\uc81d\ud2b8 \uad6c\uc131\uc694\uc18c"),(0,n.kt)("p",null,"GUI\ub97c \uc2e4\ud589\ud558\uae30 \uc704\ud55c \ud558\ub4dc\uc6e8\uc5b4 \ud50c\ub7ab\ud3fc\uc744 \uc120\ud0dd\ud560 \ub54c \uace0\ub824 \ubc0f \ud3c9\uac00\ud574\uc57c \ud560 \ub9ce\uc740 \ud30c\ub77c\ubbf8\ud130\ub4e4\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ubb38\uc11c\uc5d0\uc11c\ub294 MCU, \ub514\uc2a4\ud50c\ub808\uc774, \uc678\ubd80 \uba54\ubaa8\ub9ac, UI \uc131\ub2a5 \ub4f1\uc5d0 \uc788\uc5b4 \uace0\ub824\ud574\uc57c \ud560 \uc0ac\ud56d\uc744 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,n.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}O.isMDXComponent=!0}}]);