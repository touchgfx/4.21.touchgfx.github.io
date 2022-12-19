"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2289],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},g=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,h=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(h,c(c({ref:t},g),{},{components:n})):r.createElement(h,c({ref:t},g))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,c=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:a,src:c})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:a,src:c})),r.createElement("p",null,e.children))}},82985:function(e,t,n){var r=n(67294);class o extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}t.Z=o},96352:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return x},frontMatter:function(){return h},metadata:function(){return s},toc:function(){return v}});var r=n(3905),o=n(44035),a=n(82985),c=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&f(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&f(e,n,t[n]);return e};const h={id:"enabling-touchgfx-generator",title:"Enabling Touchgfx Generator",sidebar_label:"Enabling Touchgfx Generator"},m=void 0,s={unversionedId:"development/touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator",id:"development/touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator",title:"Enabling Touchgfx Generator",description:"",source:"@site/docs/development/touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to",slug:"/development/touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator",permalink:"/4.21/docs/development/touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator",draft:!1,tags:[],version:"current",frontMatter:{id:"enabling-touchgfx-generator",title:"Enabling Touchgfx Generator",sidebar_label:"Enabling Touchgfx Generator"},sidebar:"docs",previous:{title:"Generator User Guide",permalink:"/4.21/docs/category/generator-user-guide"},next:{title:"TouchGFX AL Configuration",permalink:"/4.21/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration"}},b={},v=[],y={toc:v};function x(e){var t,n=e,{components:c}=n,f=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},y),f),i(t,l({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Having ",(0,r.kt)("a",d({parentName:"p"},{href:"../../../introduction/installation#using-stm32cubemx"}),"installed TouchGFX Generator in STM32CubeMX"),' it must be enabled in your project.\nUsers gain access to added functionality from X-CUBE\'s by pressing the "Select Components" button or ',(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Alt + o")," in the project menu in STM32CubeMX."),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/enable-generator.png",width:"700",mdxType:"Figure"},"Selecting Additional Software in STM32CubeMX"),(0,r.kt)("p",null,"The following figure shows how TouchGFX Generator can be enabled for a project:"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/add-generator-v4.17.png",width:"400",mdxType:"Figure"},"Enabling TouchGFX Generator"),(0,r.kt)("p",null,"If enabling TouchGFX for a Dual-Core MCU, be sure to enable for the the correct context. TouchGFX can only be enabled for a single context:"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/add-generator-dual-core-v4.17.png",width:"400",mdxType:"Figure"},"Enabling TouchGFX Generator for Dual Core"),(0,r.kt)("p",null,'Having enabled TouchGFX Generator it should be visible in the "Catagories" menu on the left side of the project menu under ',(0,r.kt)("em",{parentName:"p"},"Software Packs")," where it can be enabled:"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/generator-enabled.png",width:"250",mdxType:"Figure"},"TouchGFX Generator enabled in STM32CubeMX project"))}x.isMDXComponent=!0}}]);