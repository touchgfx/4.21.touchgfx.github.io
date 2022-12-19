"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8523],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),h=o,m=s["".concat(l,".").concat(h)]||s[h]||d[h]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},70814:function(e,t,r){var n=r(67294),o=r(88678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},n.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class i extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:a},this.props.children)}}t.Z=i},22425:function(e,t,r){var n=r(67294);class o extends n.Component{render(){return n.createElement("div",{className:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children))}},88678:function(e,t,r){var n=r(67294);class o extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},29249:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return T},frontMatter:function(){return g},metadata:function(){return v},toc:function(){return y}});var n=r(3905),o=r(44035),a=r(22425),i=r(70814),c=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&h(e,r,t[r]);if(u)for(var r of u(t))s.call(t,r)&&h(e,r,t[r]);return e};const g={id:"upgrading-projects",title:"Upgrading Project",sidebar_label:"Upgrading Project"},f=void 0,v={unversionedId:"development/touchgfx-hal-development/generator-how-to/upgrading-projects",id:"development/touchgfx-hal-development/generator-how-to/upgrading-projects",title:"Upgrading Project",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/upgrading-projects.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to",slug:"/development/touchgfx-hal-development/generator-how-to/upgrading-projects",permalink:"/4.21/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/upgrading-projects",draft:!1,tags:[],version:"current",frontMatter:{id:"upgrading-projects",title:"Upgrading Project",sidebar_label:"Upgrading Project"},sidebar:"docs",previous:{title:"TouchGFX Designer Project",permalink:"/4.21/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-designer-project"},next:{title:"Scenarios",permalink:"/4.21/zh-CN/docs/category/scenarios"}},b={},y=[],w=(C="Note",function(e){return console.warn("Component "+C+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",m({},e))});var C;const O={toc:y};function T(e){var t,r=e,{components:c}=r,h=((e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},O),h),l(t,p({components:c,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"TouchGFX Generator parameters are stored in ",(0,n.kt)("em",{parentName:"p"},".ioc")," files (STM32CubeMX project). When a new version of TouchGFX Generator is released the parameters of the old version may be incompatible with the new version and may require migration. This section describes the steps required to successfully migrate and update a project in STM32CubeMX."),(0,n.kt)("p",null,"Since STM32CubeMX does not support upgrading between X-CUBE versions the upgrade is automatically performed by TouchGFX Designer when ",(0,n.kt)("em",{parentName:"p"},"Generate Code")," is pressed due to the following command in the ",(0,n.kt)("inlineCode",{parentName:"p"},"PostGenerateTargetCommand")," section of the ",(0,n.kt)("inlineCode",{parentName:"p"},".touchgfx")," file."),(0,n.kt)(a.Z,{mdxType:"CodeHeader"},".touchgfx"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),'"PostGenerateTargetCommand" : "touchgfx update_project --project-file=../upgrade.ioc --platform=m7"\n')),(0,n.kt)("p",null,"The command will read the ",(0,n.kt)("inlineCode",{parentName:"p"},".ioc")," file and update the parameters to fit the current version of X-CUBE-TOUCHGFX. Below is an example of running the script (X-CUBE-TOUCHGFX 4.14.0) by hand on an .ioc file created with X-CUBE-TOUCHGFX 4.13.0."),(0,n.kt)(a.Z,{mdxType:"CodeHeader"},"Upgrade example using STM32F746 DISCO TouchGFX Board Setup from 4.13.0 to 4.14.0"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"$ touchgfx update_project --project-file=../STM32F746G_DISCO.ioc\n  TouchGFX Generator 4.13.0 found\n  Creating backup of ../STM32F746G_DISCO.ioc as ../backup_STM32F746G_DISCO.ioc\n  Performing upgrade 4.13.0 -> 4.14.0 ... OK\n")),(0,n.kt)("p",null,"Opening the updated project with STM32CubeMX prompts the user to install the version of X-CUBE-TOUCHGFX that is represented by the .ioc file (if not already installed). Clicking ",(0,n.kt)("em",{parentName:"p"},"Download now")," will download and install X-Cube-TouchGFX-4.14.0."),(0,n.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/cubemx-additional-software-manager-settings-missing-x-cube-touchgfx-4.14.0.webp",noShadow:!1,mdxType:"Figure"},"Additional Software Component Missing: TouchGFX Generator 4.14.0"),(0,n.kt)("p",null,"All configurations in TouchGFX Generator will be kept during the upgrade procedure and a backup of the .ioc file will be placed beside the original on prepended with ",(0,n.kt)("inlineCode",{parentName:"p"},"backup_"),"."),(0,n.kt)(w,{mdxType:"Note"},"To use the new features provided by TouchGFX Generator, ",(0,n.kt)("i",null,"Generate Code")," must be performed in STM32CubeMX."),(0,n.kt)(i.Z,{mdxType:"Caution"},"If upgrading X-CUBE-TOUCHGFX through STM32CubeMX for an existing TouchGFX Project and the upgrade process is not run by TouchGFX Designer, TouchGFX Generator parameters will be reset to default since they are applicable to a different version."))}T.isMDXComponent=!0}}]);