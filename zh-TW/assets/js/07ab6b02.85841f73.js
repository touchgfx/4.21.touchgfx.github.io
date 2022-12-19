"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2785],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),h=o,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88678:function(e,t,r){var n=r(67294);class o extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},93054:function(e,t,r){var n=r(67294),o=r(88678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=i},84541:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(67294),o=r(86010),a=r(99492),i=r(39130),l=r(35096),c=r(33084),u="cardContainer_fWXF",s="cardTitle_rnsV",p="cardDescription_PWke";function d({href:e,children:t}){return n.createElement(i.Z,{href:e,className:(0,o.Z)("card padding--lg",u)},t)}function h({href:e,icon:t,title:r,description:a}){return n.createElement(d,{href:e},n.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:r},t," ",r),a&&n.createElement("p",{className:(0,o.Z)("text--truncate",p),title:a},a))}function f({item:e}){const t=(0,a.Wl)(e);return t?n.createElement(h,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function m({item:e}){var t;const r=(0,l.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(h,{href:e.href,icon:r,title:e.label,description:null==o?void 0:o.description})}function g({item:e}){switch(e.type){case"link":return n.createElement(m,{item:e});case"category":return n.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function y({items:e,className:t}){return n.createElement("section",{className:(0,o.Z)("row",t)},function(e){return e.filter((e=>"category"!==e.type||!!(0,a.Wl)(e)))}(e).map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},520:function(e,t,r){r.r(t),r.d(t,{assets:function(){return w},contentTitle:function(){return g},default:function(){return O},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return v}});var n=r(3905),o=r(93054),a=r(84541),i=r(99492),l=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&h(e,r,t[r]);if(s)for(var r of s(t))d.call(t,r)&&h(e,r,t[r]);return e};const m={id:"tutorial-06-introduction",title:"Tutorial 6: Using TextAreas"},g=void 0,y={unversionedId:"tutorials/tutorial-06/tutorial-06-introduction",id:"tutorials/tutorial-06/tutorial-06-introduction",title:"Tutorial 6: Using TextAreas",description:"In this tutorial, you will learn how to use TextAreas for more advanced usage. We will create an application that will show texts, in multiple languages and different typographies. We will also see how to change the appearance of our text and how to use wildcards through TouchGFX Designer and through code. To follow this tutorial more easily, we invite you to do tutorial 2 beforehand.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/tutorials/tutorial-06/tutorial-06-introduction.mdx",sourceDirName:"tutorials/tutorial-06",slug:"/tutorials/tutorial-06/tutorial-06-introduction",permalink:"/4.21/zh-TW/docs/tutorials/tutorial-06/tutorial-06-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-06-introduction",title:"Tutorial 6: Using TextAreas"},sidebar:"docs",previous:{title:"\u6559\u7a0b5\uff1a\u5275\u5efa\u81ea\u8a02\u89f8\u767c\u689d\u4ef6\u548c\u64cd\u4f5c",permalink:"/4.21/zh-TW/docs/tutorials/tutorial-05"},next:{title:"Part 1 \u2013 Typography and Language",permalink:"/4.21/zh-TW/docs/tutorials/tutorial-06/tutorial-06-part-1"}},w={},v=[],b={toc:v};function O(e){var t,r=e,{components:l}=r,h=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},b),h),c(t,u({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"In this tutorial, you will learn how to use TextAreas for more advanced usage. We will create an application that will show texts, in multiple languages and different typographies. We will also see how to change the appearance of our text and how to use wildcards through TouchGFX Designer and through code. To follow this tutorial more easily, we invite you to do ",(0,n.kt)("a",f({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/tutorials/tutorial-02"}),"tutorial 2")," beforehand."),(0,n.kt)("p",null,"This tutorial has been prepared in two parts. In the first part of this tutorial, you will learn how to add different typographies and how to use them. You will also see how to use different languages in your application. In the second part, this tutorial will teach you how to manage the appearance of a TextArea and how to use wilcards."),(0,n.kt)(o.Z,{mdxType:"Note"},"To do the Part 2 you must have done the Part 1, because the Part 2 is a continuation of the Part 1."),(0,n.kt)(a.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}O.isMDXComponent=!0}}]);