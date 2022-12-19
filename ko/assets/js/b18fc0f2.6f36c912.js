"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4647],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=u(n),s=a,h=m["".concat(c,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(h,o(o({ref:e},p),{},{components:n})):r.createElement(h,o({ref:e},p))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44035:function(t,e,n){var r=n(67294),a=n(25026);e.Z=function(t){const e=t.noShadow||!1,n=t.width,l=t.height,o=(0,a.Z)(t.imageSource);return e?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,t.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,t.children))}},88678:function(t,e,n){var r=n(67294);class a extends r.Component{render(){const t=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:t},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}e.Z=a},93054:function(t,e,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}e.Z=o},84541:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(67294),a=n(86010),l=n(99492),o=n(39130),i=n(35096),c=n(33084),u="cardContainer_fWXF",p="cardTitle_rnsV",d="cardDescription_PWke";function m({href:t,children:e}){return r.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",u)},e)}function s({href:t,icon:e,title:n,description:l}){return r.createElement(m,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",p),title:n},e," ",n),l&&r.createElement("p",{className:(0,a.Z)("text--truncate",d),title:l},l))}function h({item:t}){const e=(0,l.Wl)(t);return e?r.createElement(s,{href:e,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function k({item:t}){var e;const n=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,l.xz)(null!=(e=t.docId)?e:void 0);return r.createElement(s,{href:t.href,icon:n,title:t.label,description:null==a?void 0:a.description})}function g({item:t}){switch(t.type){case"link":return r.createElement(k,{item:t});case"category":return r.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f({items:t,className:e}){return r.createElement("section",{className:(0,a.Z)("row",e)},function(t){return t.filter((t=>"category"!==t.type||!!(0,l.Wl)(t)))}(t).map(((t,e)=>r.createElement("article",{key:e,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:t})))))}},73584:function(t,e,n){n.r(e),n.d(e,{assets:function(){return y},contentTitle:function(){return b},default:function(){return E},frontMatter:function(){return f},metadata:function(){return N},toc:function(){return v}});var r=n(3905),a=n(39130),l=n(44035),o=n(93054),i=n(84541),c=n(99492),u=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,k=(t,e,n)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,g=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&k(t,n,e[n]);if(m)for(var n of m(e))h.call(e,n)&&k(t,n,e[n]);return t};const f={id:"board-introduction",title:"\uac1c\ubc1c \uc18c\uac1c"},b=void 0,N={unversionedId:"development/board-bring-up/board-introduction",id:"development/board-bring-up/board-introduction",title:"\uac1c\ubc1c \uc18c\uac1c",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/board-bring-up/board-introduction.mdx",sourceDirName:"development/board-bring-up",slug:"/development/board-bring-up/board-introduction",permalink:"/4.21/ko/docs/development/board-bring-up/board-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"board-introduction",title:"\uac1c\ubc1c \uc18c\uac1c"},sidebar:"docs",previous:{title:"\uc678\ubd80 \uba54\ubaa8\ub9ac",permalink:"/4.21/ko/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories"},next:{title:"1. Create Project",permalink:"/4.21/ko/docs/development/board-bring-up/how-to/01-create-project"}},y={},v=[{value:"\uc791\uc5c5 \ub3c4\uad6c",id:"tools-of-the-trade",level:2},{value:"\uae30\ub2a5 \ud655\uc778",id:"verification-of-functionality",level:2},{value:"\uc804\ubc18\uc801\uc778 \ud504\ub85c\uc138\uc2a4",id:"overall-process",level:2}],w={toc:v};function E(t){var e,n=t,{components:u}=n,k=((t,e)=>{var n={};for(var r in t)s.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&m)for(var r of m(t))e.indexOf(r)<0&&h.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=g(g({},w),k),p(e,d({components:u,mdxType:"MDXLayout"}))),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/activities-selected-001.webp",noShadow:!0,width:"600",mdxType:"Figure"},"\ud504\ub85c\uc81d\ud2b8 \ud65c\ub3d9"),(0,r.kt)("p",null,"\uc774 \ucc55\ud130\uc5d0\uc11c\ub294 \uc0c8 \ud50c\ub7ab\ud3fc\uc5d0\uc11c TouchGFX \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \uc2dc\uc791\ud558\ub294 \ubcf4\ub4dc \ube0c\ub9c1\uc5c5 \uacfc\uc815\uc744 \uc548\ub0b4\ud569\ub2c8\ub2e4. \ubcf4\ub4dc\ub97c \ube0c\ub9c1\uc5c5\ud558\ub294 \uac83\uc740 TouchGFX\ub97c \ud504\ub85c\uc81d\ud2b8\uc5d0 \ucd94\uac00\ud558\uae30 \uc55e\uc11c \ubcf4\ub4dc\uc758 \ubaa8\ub4e0 \ud544\uc218 \ubd80\ud488\uacfc \ud574\ub2f9\ud558\ub294 \ub4dc\ub77c\uc774\ubc84\uac00 \uc62c\ubc14\ub974\uac8c \ub3d9\uc791\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c \uc774\ubbf8 \uc791\ub3d9 \uc911\uc778 \ubcf4\ub4dc\uac00 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc774 \ub2e8\uacc4\uc758 \ub9ce\uc740 \ud65c\ub3d9\ub4e4\uc774 \uc26c\uc6cc\uc9d1\ub2c8\ub2e4. \uc644\uc804\ud788 \uc0c8\ub85c\uc6b4 \uc0ac\uc6a9\uc790 \uc81c\uc791 \ubcf4\ub4dc\ub97c \uac00\uc9c0\uace0 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc774 \ub2e8\uacc4\ub97c \uc644\ub8cc\ud558\ub294 \ub370 \uba70\uce60\uc774 \uc18c\uc694\ub41c\ub2e4\ub294 \uac83\uc744 \uac10\uc548\ud574\uc57c \ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ud50c\ub7ab\ud3fc\uc774 \ubd88\uc548\uc815\ud558\uba74 \uc88b\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc791\uc131\ud558\uae30 \uc5b4\ub835\ub2e4\ub294 \uc810\uc5d0\uc11c \uc774\ub7ec\ud55c \uc791\uc5c5\uc740 \uc2dc\uac04\uc744 \ud22c\uc790\ud560 \uac00\uce58\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ubc18\uba74, \uc548\uc815\uc801\uc774\uace0 \uc785\uc99d\ub41c \ud50c\ub7ab\ud3fc\uc5d0\uc11c\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc9d1\uc911\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \ucc55\ud130\ub294 \ubcf4\ub4dc\uc5d0\uc11c \ud558\ub4dc\uc6e8\uc5b4 \ubc0f \ud558\uc704 \ub808\ubca8\uc758 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uad6c\uc131 \uc694\uc18c\uac00 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9\ud558\ub294 \uac83\uc744 \ubcf4\uc7a5 \ud558\ub294 \uc5c5\ubb34\ub97c \ub2f4\ub2f9\ud558\ub294 \uac1c\ubc1c\uc790\ub97c \uc704\ud574 \uc791\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc2e4\uc81c UI\ub97c \uac1c\ubc1c\ud558\ub294\ub370\ub9cc \uad00\uc2ec\uc774 \uc788\ub294 \uac1c\ubc1c\uc790\ub97c \uc704\ud55c \uac83\uc774 \uc544\ub2d9\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ubcf4\ub4dc\ub97c \ube0c\ub9c1\uc5c5\ud560 \ub54c\ub294 \ubcf4\ub4dc \uc0c1\uc758 \uad6c\uc131 \uc694\uc18c \ubc0f \uc8fc\ubcc0 \uc7a5\uce58\uc640 \uc774\ub4e4 \uac04\uc758 \uc5f0\uacb0, \uc774\ub4e4\uc774 \ud1b5\uc2e0\uc5d0 \uc0ac\uc6a9\ud558\ub294 \ud504\ub85c\ud1a0\ucf5c, \uac01\uac01\uc5d0\uc11c \uc0ac\uc6a9 \uac00\ub2a5\ud558\uac70\ub098 \ud544\uc694\ud55c \ub4dc\ub77c\uc774\ubc84 \ucf54\ub4dc \ub4f1\uc5d0 \ub300\ud574 \uc644\ubcbd\ud788 \uc774\ud574\ud558\uace0 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}),(0,r.kt)("p",null,"\uc0c8 \ucc55\ud130\uc778",(0,r.kt)(a.Z,{to:"../touchgfx-hal-development/touchgfx-al-development-introduction",mdxType:"Link"},"\xa0TouchGFX AL \uac1c\ubc1c")," \uc5d0\uc11c\ub294 TouchGFX\uac00 \ud558\ub4dc\uc6e8\uc5b4\uc640 \ub4dc\ub77c\uc774\ubc84\ub97c \ud1a0\ub300\ub85c \uc2e4\ud589\ub418\ub3c4\ub85d AL\uc744 \uc0dd\uc131\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",g({},{id:"tools-of-the-trade"}),"\uc791\uc5c5 \ub3c4\uad6c"),(0,r.kt)("p",null,"STM32 \uae30\ubc18 \ubcf4\ub4dc\ub97c \ube0c\ub9c1\uc5c5\ud560 \ub54c \uc911\uc694\ud55c \uba87 \uac00\uc9c0 \ub3c4\uad6c\uac00 \uc544\ub798 \ud45c\uc5d0 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\ub3c4\uad6c"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\uc124\uba85"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"STM32CubeMX"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\ud504\ub85c\uc81d\ud2b8\uc640 \ub0b4\ubd80 \uc8fc\ubcc0 \uc7a5\uce58\uc5d0\uc11c MCU\ub97c \uad6c\uc131\ud558\uace0 \ucd08\uae30\ud654 \uc18c\uc2a4 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud560 \ub54c \uc190\uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ub3c4\uad6c\uc785\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"STM32Cube \ud38c\uc6e8\uc5b4 \ud328\ud0a4\uc9c0"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"MCU \uc81c\ud488\uad70\uc744 \uc704\ud55c STM32Cube \ud38c\uc6e8\uc5b4\uc5d0\ub294 \ub2e4\uc591\ud55c \uc8fc\ubcc0 \uc7a5\uce58\uc758 \uc0ac\uc6a9 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc8fc\ub294 \uc608\uc81c \ud504\ub85c\uc81d\ud2b8\uc640 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ub2e4\uc218 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\uacf5\uae09\uc5c5\uccb4 \ub370\uc774\ud130 \uc2dc\ud2b8"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\ub514\uc2a4\ud50c\ub808\uc774\ub098 \ud50c\ub798\uc2dc \uac19\uc740 \uc678\ubd80 \uc7a5\uce58\uc5d0 \ub300\ud55c \ub370\uc774\ud130 \uc2dc\ud2b8\uc5d0\ub294 MCU(\uc608: STM32CubeMX\ub97c \ud1b5\ud55c)\uc640 \uc678\ubd80 \uc7a5\uce58 \ubaa8\ub450\ub97c \uc62c\ubc14\ub974\uac8c \ucd08\uae30\ud654\ud558\uae30 \uc704\ud55c \ud0c0\uc774\ubc0d\uc774\ub098 \uc804\uc555 \ub4f1 \uc911\uc694 \uc815\ubcf4\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\uacf5\uae09\uc5c5\uccb4 \ub4dc\ub77c\uc774\ubc84 \ucf54\ub4dc"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\uc2dc\uac04 \uc808\uc57d\uc744 \uc704\ud574 \uacf5\uae09\uc5c5\uccb4\uc5d0\uac8c \uc678\ubd80 \uc7a5\uce58\uc5d0 \ub300\ud55c \uc608\uc81c \ucf54\ub4dc\ub97c \uc694\uccad\ud574\uc57c \ud569\ub2c8\ub2e4. \ub4dc\ub77c\uc774\ubc84 \ucf54\ub4dc\ub294 STM32 MCU\uc5d0 \ud3ec\ud305\ud574\uc57c \ud558\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc9c0\ub9cc, \uadf8\ub798\ub3c4 \ub4dc\ub77c\uc774\ubc84 \ucf54\ub4dc\ub97c \ucc98\uc74c\ubd80\ud130 \uc0c8\ub85c \uc791\uc131\ud558\ub294 \uac83\ubcf4\ub2e4\ub294 \uac04\ub2e8\ud569\ub2c8\ub2e4.")))),(0,r.kt)("p",null,"\ubcf4\ub4dc \ube0c\ub9c1\uc5c5 \ub2e8\uacc4\uc5d0\uc11c \uc218\ud589\ub418\ub294 \ubaa8\ub4e0 \uc791\uc5c5\uc740 TouchGFX\uc640 \ubb34\uad00\ud558\uac8c \uc774\ub8e8\uc5b4\uc9c0\uae30 \ub54c\ubb38\uc5d0 TouchGFX \ucf54\ub4dc\uac00 \uc77c\uccb4 \uad00\uc5ec\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub300\uc2e0, \uc774\ub7ec\ud55c \uc791\uc5c5\uacfc \uadf8 \uacb0\uacfc\ub85c \uc0dd\uc131\ub41c \ucf54\ub4dc\ub294 TouchGFX Abstraction Layer\ub97c \uac1c\ubc1c\ud558\uae30 \uc704\ud55c \uacac\uace0\ud55c \ud1a0\ub300 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud558\ub4dc\uc6e8\uc5b4 \ubc0f \ud558\uc704 \ub808\ubca8\uc758 \uc18c\ud504\ud2b8\uc6e8\uc5b4\uac00 \uc2e4\uc81c\ub85c \ucd5c\uc885 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uae30\ub300\uc5d0 \ubd80\ud569\ud558\uac8c \uc791\ub3d9\ud558\uac8c \ub9cc\ub4dc\ub294 \uac83\uc774 \uc8fc\ub41c \ubaa9\uc801\uc785\ub2c8\ub2e4."),(0,r.kt)("h2",g({},{id:"verification-of-functionality"}),"\uae30\ub2a5 \ud655\uc778"),(0,r.kt)("p",null,"\ubcf4\ub4dc \ube0c\ub9c1\uc5c5 \ub2e8\uacc4\uc5d0\uc11c \uc0dd\uc131\ub41c \ucf54\ub4dc\ub294 1\uac1c \uc774\uc0c1\uc758 \ud14c\uc2a4\ud2b8 \ud504\ub85c\uc81d\ud2b8 \ud615\ud0dc\ub97c \uac00\uc9c0\uace0 \uc788\uc73c\uba70, \ub450 \uac00\uc9c0 \uc6a9\ub3c4\ub85c \uc0ac\uc6a9\ub429\ub2c8\ub2e4:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null})),(0,r.kt)("th",g({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"AL(Abstraction Layer)"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\ubcf4\ub4dc \ucd08\uae30\ud654 \ucf54\ub4dc\ub294 TouchGFX AL\uacfc \uad81\uadf9\uc801\uc73c\ub85c \uc791\ub3d9\ud558\uac8c \ub420 UI \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\ucd95\ud558\ub294 \ud1a0\ub300\uac00 \ub429\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\ud14c\uc2a4\ud2b8 \ucf54\ub4dc"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\ubcf4\ub4dc \ucd08\uae30\ud654 \ucf54\ub4dc\uc640 \ud568\uaed8 \uc791\uc131\ub41c \uc778\uc99d \ucf54\ub4dc\ub294 \ubcf4\ub4dc\uac00 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9\ud558\uc9c0 \uc54a\uc744 \ub54c \uad81\uadf9\uc801\uc73c\ub85c \ud655\uc778\ud574 \ubcf4\ub294 \ucf54\ub4dc\uc785\ub2c8\ub2e4. \ubcf4\ub4dc \ube0c\ub9c1\uc5c5 \ub2e8\uacc4\uc5d0\uc11c\ub294 \ubcf4\ub4dc\uc640 \uac01\uac01\uc758 \ud2b9\uc815 \uad6c\uc131 \uc694\uc18c\uac00 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9 \uc911\uc778\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud574 \uc18c\uaddc\ubaa8 \uac80\uc99d \ud504\ub85c\uadf8\ub7a8\uc744 \ub2e4\uc218 \uc0dd\uc131\ud558\uac8c \ub429\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uac80\uc99d \ud504\ub85c\uadf8\ub7a8\ub4e4\uc740 \uc791\uc5c5\uc774 \uc9c4\ud589 \uc911\uc77c \ub54c \ud070 \uac00\uce58\uac00 \uc788\uc73c\uba70, \ubb34\uc5b8\uac00\uac00 \ubd88\ud655\uc2e4\ud574\uc9c4 \uacbd\uc6b0\uc5d0\ub294 \ub2e4\uc2dc \ucc3e\uc544\uac00\uc11c \uae30\ub2a5\uc744 \uac1c\uc120\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("p",null,"\uc704\uc758 \ub450 \uac00\uc9c0 \uc774\uc720\ub85c \uc778\ud574 \ud655\uc778 \ud504\ub85c\uadf8\ub7a8\uc744 \uccb4\uacc4\uc801\uc73c\ub85c \uc800\uc7a5\ud558\uba74 \ub9e4\uc6b0 \uc720\uc6a9\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \ucd94\ud6c4\uc5d0 \ud14c\uc2a4\ud2b8 \ud504\ub85c\uadf8\ub7a8\uc744 \ub2e4\uc2dc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ub300\uc0c1 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc608\uae30\uce58 \uc54a\uc740 \uc624\ub958\uac00 \ubc1c\uc0dd\ud560 \ub54c \uc0c8\ub86d\uac8c \uc218\uc815\ub41c \ubc84\uc804\uc758 \ud558\ub4dc\uc6e8\uc5b4\ub97c \ud14c\uc2a4\ud2b8\ud558\uac70\ub098 \uadfc\ubcf8 \uc6d0\uc778\uc744 \ud30c\uc545\ud558\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uac1c\ubc1c \ub2e8\uacc4\uc5d0\uc11c \uc218\ud589\ub41c \uce21\uc815 \uc791\uc5c5(\uc608: \uba54\ubaa8\ub9ac \ub300\uc5ed\ud3ed)\uc744 \uccb4\uacc4\uc801\uc73c\ub85c \uae30\ub85d\ud574 \ub193\ub294 \uac83\ub3c4 \uc88b\uc740 \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/components-selected-001.webp",noShadow:!0,width:"600",mdxType:"Figure"},"TouchGFX AL\uc758 \ud1a0\ub300\uc778 \ubcf4\ub4dc \ucd08\uae30\ud654 \ucf54\ub4dc"),(0,r.kt)("h2",g({},{id:"overall-process"}),"\uc804\ubc18\uc801\uc778 \ud504\ub85c\uc138\uc2a4"),(0,r.kt)("p",null,"\uc6b0\ub9ac\ub294 \ud558\ub4dc\uc6e8\uc5b4\uc758 \uad6c\uccb4\uc801\uc778 \uad6c\uc131\uc744 \uc54c \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \uc544\ub798\uc640 \uac19\uc740 \uc0ac\uc6a9\xa0\uac00\uc774\ub4dc\uac00 TouchGFX\uc758 \uc2e4\ud589 \uc2dc, \ubcf4\ub4dc\ub97c \ube0c\ub9c1\uc5c5 \ubc0f \uc900\ube44\ud558\uae30 \uc704\ud55c \ub2e8\uacc4\ubcc4 \uac00\uc774\ub4dc \uc5ed\ud560\uc744 \ud558\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uac00\uc774\ub4dc\uc758 \uac01 \ub2e8\uacc4\ub294 \ud558\ub4dc\uc6e8\uc5b4\uc640 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uad6c\uc131 \uc694\uc18c\uc5d0\uc11c \ud2b9\uc815\ud55c \ud55c \ubd80\ubd84\uacfc \uc774\uc5d0 \ub300\ud55c \ube0c\ub9c1\uc5c5\uc5d0 \uad00\ub828\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ud558\ub4dc\uc6e8\uc5b4\uc758 \uc0ac\uc6a9\uc790 \uc81c\uc791 \uad6c\uc131 \uc694\uc18c \ubd80\ubd84\uc73c\ub85c \ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc804\ubc18\uc801\uc778 \ubaa9\ud45c\ub294 \ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\uc640 \ud1b5\uc2e0\ud558\uc5ec \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c\uc758 \ubaa8\ub4e0 \ud130\uce58\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uc218\uc9d1\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\uc5d0 \uc804\uc1a1\ud560 \uba85\ub839\uc740 \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c \uc0ac\uc6a9 \uc911\uc778 \ucee8\ud2b8\ub864\ub7ec\uc5d0 \ub530\ub77c \ub2e4\ub974\ubbc0\ub85c \uac00\uc774\ub4dc\uc5d0\uc11c\ub294 \uc644\ubcbd\ud55c \ub4dc\ub77c\uc774\ubc84\ub97c \uc81c\uc2dc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574\uc11c\ub294 \ud130\uce58 \ucee8\ud2b8\ub864\ub7ec \ub370\uc774\ud130 \uc2dc\ud2b8\uc758 \uc815\ubcf4\uc5d0 \uac00\uc774\ub4dc\ub97c \uacb0\ud569\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)(o.Z,{mdxType:"Note"},"\uc790\uccb4 \uc81c\uc791 \ubcf4\ub4dc \ube0c\ub9c1\uc5c5\uc744 \uc704\ud55c \ub2e8\uacc4\ubcc4 \uac00\uc774\ub4dc\ub97c \uc219\uc9c0\ud558\uace0 \uc218\ud589\ud560 \ub54c\ub294 \ub2e4\uc74c \uc0ac\ud56d\uc744 \uc720\uc758\ud574\uc57c \ud569\ub2c8\ub2e4:",(0,r.kt)("ul",null,(0,r.kt)("li",null,"\ud55c \ubc88\uc5d0 \ud55c \ub2e8\uacc4\uc529 \uc218\ud589"),(0,r.kt)("li",null,"\ub2e4\uc74c \ub2e8\uacc4\ub85c \ub118\uc5b4\uac00\uae30 \uc804\uc5d0 \uac01 \ub2e8\uacc4\ub97c \ucca0\uc800\ud558\uac8c \ud655\uc778"),(0,r.kt)("li",null,"\ubb34\uc5b8\uac00\uac00 \uc758\ub3c4\ud55c \ub300\ub85c \uc791\ub3d9\ud558\uc9c0 \uc54a\uc744 \ub54c \uac00\uc774\ub4dc\ub97c \ub514\ubc84\uae45 \uc218\ub2e8\uc73c\ub85c \ud65c\uc6a9\ud558\uac70\ub098 \uc774\uc804 \ub2e8\uacc4\ub85c \ub3cc\uc544\uac00\uc11c \uc798\ubabb \uc9c4\ud589\ud55c \ubd80\ubd84\uc774 \uc5c6\ub294\uc9c0 \ud655\uc778"),(0,r.kt)("li",null,"\ubcf4\ub4dc \ube0c\ub9c1\uc5c5\uc740 \uc0ac\uc18c\ud55c \uc791\uc5c5\uc774 \uc544\ub2c8\uae30 \ub54c\ubb38\uc5d0 \uc608\uae30\uce58 \uc54a\uc740 \ub3d9\uc791\uc774 \ubc1c\uc0dd\ud558\ub354\ub77c\ub3c4 \uacbd\uace0\ub97c \ubc1b\uc9c0 \uc54a\uc74c"))),(0,r.kt)("p",null,"\uac00\uc774\ub4dc\uc758 \uac01 \ub2e8\uacc4\ub294 \ub2e4\uc74c\uc758 \uad6c\uc870\ub97c \ub530\ub974\uac8c \ub429\ub2c8\ub2e4:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ub3d9\uae30 \ubd80\uc5ec")," \uc774 \ubd80\ubd84\uc5d0\uc11c\ub294 \ud574\ub2f9 \ub2e8\uacc4\ub97c \uc124\uba85\ud558\uace0, \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c TouchGFX \uc2e4\ud589\uc744 \uc900\ube44\ud558\ub294 \ub370 \uc911\uc694\ud55c \uc774\uc720\ub97c \uc81c\uc2dc\ud558\uc5ec \ub3d9\uae30\ub97c \ubd80\uc5ec\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ubaa9\ud45c")," \ubaa9\ud45c \ubd80\ubd84\uc5d0\ub294 \ud574\ub2f9 \ub2e8\uacc4\uc758 \ubaa9\ud45c\uac00 \ub098\uc5f4\ub429\ub2c8\ub2e4. \ud655\uc778 \uc0ac\ud56d \ubaa9\ub85d\uc5d0\ub294 \uc218\ud589\ud574\uc57c \ud558\ub294 \ud2b9\uc815 \ud14c\uc2a4\ud2b8\uac00 \uc790\uc138\ud788 \uc124\uba85\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ud655\uc778 \uc0ac\ud56d\uc744 \ud1b5\ud574 \uc18c\ud504\ud2b8\uc6e8\uc5b4\uac00 \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c TouchGFX\ub97c \uc131\uacf5\uc801\uc73c\ub85c \uc2e4\ud589\ud558\ub294 \ub370 \ud544\uc694\ud55c \uae30\ub2a5\ub4e4\uc744 \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ud544\uc218 \uc870\uac74")," \uc5ec\uae30\uc5d0\ub294 \uc791\uc5c5\uc744 \uc218\ud589\ud558\ub294 \ub370 \ud544\uc694\ud55c \ud56d\ubaa9\uc774 \ub098\uc5f4\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uc791\uc5c5 \uc218\ud589 \ubc29\ubc95")," \uc774 \ubd80\ubd84\uc5d0\ub294 \ud558\ub4dc\uc6e8\uc5b4\ub97c \uad6c\uc131\ud558\uace0 \uc0ac\uc6a9\ud558\ub294 \ub370 \ud544\uc694\ud55c \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \uc791\uc131\ud558\ub294 \ubc29\ubc95\uc774 \ucd5c\ub300\ud55c \uad6c\uccb4\uc801\uc73c\ub85c \uc124\uba85\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc77c\ubd80 \ub2e8\uacc4\uc758 \uacbd\uc6b0, \uc18c\ud504\ud2b8\uc6e8\uc5b4\uac00 \uc0ac\uc6a9 \uc911\uc778 \ud558\ub4dc\uc6e8\uc5b4\uc5d0 \uc0c1\ub2f9 \ubd80\ubd84 \uc758\uc874\ud558\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc815\ud655\ub3c4\uac00 \ub5a8\uc5b4\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacbd\uc6b0\ub97c \uc704\ud574 \uc774 \ubd80\ubd84\uc5d0\ub294 \uc0c1\uc704 \ub808\ubca8\uc5d0\uc11c \ub2e8\uacc4\ub4e4\uc744 \ub098\uc5f4\ud558\uace0 \uc788\uc5b4 \ud558\ub4dc\uc6e8\uc5b4\uc640 \uad00\ub828\uc774 \uc788\ub294 \uc138\ubd80 \uc815\ubcf4\ub97c \uc9c1\uc811 \ucc3e\uc544\ubd10\uc57c \ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uac01\uac01\uc758 \ubc29\ubc95 \ub2e8\uacc4\ub4e4\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\ub2e8\uacc4"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\ub0b4\uc6a9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/01-create-project"}),"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"STM32CubeMX\uc5d0\uc11c \ube48 \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/02-cpu-running"}),"\uc2e4\ud589 \uc911\uc778 CPU")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"MCU\uac00 \uc6d0\ud558\ub294 \uc18d\ub3c4\ub85c \uc2e4\ud589 \uc911\uc778\uc9c0 \ud655\uc778")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/03-display-internal"}),"\ub0b4\ubd80 RAM\uc5d0\uc11c \ud504\ub808\uc784 \ubc84\ud37c\ub97c \uac00\uc9c0\ub294 \ub514\uc2a4\ud50c\ub808\uc774")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\ub0b4\ubd80 RAM\uc5d0\uc11c \ud504\ub808\uc784 \ubc84\ud37c\ub97c \ud560\ub2f9\ud558\uace0 \uc774\ub97c \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uc804\uc1a1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/04-enable-external-ram"}),"\uc678\ubd80 RAM")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\uc678\ubd80 RAM \ud65c\uc131\ud654")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/05-display-external"}),"\uc678\ubd80 RAM\uc5d0\uc11c \ud504\ub808\uc784 \ubc84\ud37c\ub97c \uac00\uc9c0\ub294 \ub514\uc2a4\ud50c\ub808\uc774")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\uc678\ubd80 RAM\uc73c\ub85c \ud504\ub808\uc784 \ubc84\ud37c\ub97c \uc62e\uae30\uace0 \uc774\ub97c \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uc804\uc1a1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/06-flash-external-addressable"}),"\uc8fc\uc18c \uc9c0\uc815\uc774 \uac00\ub2a5\ud55c \uc678\ubd80 \ud50c\ub798\uc2dc")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\uba54\ubaa8\ub9ac \ub9e4\ud551\ub41c \uc678\ubd80 \ud50c\ub798\uc2dc \ud65c\uc131\ud654")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/07-flash-external-nonaddressable"}),"\ube14\ub85d \ubaa8\ub4dc\uc758 \uc678\ubd80 \ud50c\ub798\uc2dc")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\ube14\ub85d \ubaa8\ub4dc\uc758 \uc678\ubd80 \ud50c\ub798\uc2dc \ud65c\uc131\ud654")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/08-hardware-acceleration"}),"\ud558\ub4dc\uc6e8\uc5b4 \uac00\uc18d")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Chrom-ART \uadf8\ub798\ud53d \uac00\uc18d\uae30 \ud65c\uc131\ud654")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/09-touch-controller"}),"\ud130\uce58 \ucee8\ud2b8\ub864\ub7ec")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\uc5d0 \ub300\ud55c \ud1b5\uc2e0 \uc124\uc815")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/10-physical-buttons"}),"\ubb3c\ub9ac\uc801 \ubc84\ud2bc")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\ubb3c\ub9ac\uc801 \ubc84\ud2bc\uc5d0 \ub300\ud55c \uc561\uc138\uc2a4 \uad6c\uc131")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("a",g({parentName:"td"},{href:"how-to/11-flash-loader"}),"\ud50c\ub798\uc2dc \ub85c\ub354")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\uc678\ubd80 \ud50c\ub798\uc2dc\uc5d0 \ub370\uc774\ud130\ub97c \uae30\ub85d\ud558\ub294 \ubc29\ubc95 \uac1c\ubc1c")))))}E.isMDXComponent=!0}}]);