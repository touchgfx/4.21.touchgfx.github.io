"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2624],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=o,g=s["".concat(l,".").concat(d)]||s[d]||u[d]||a;return n?r.createElement(g,i(i({ref:t},h),{},{components:n})):r.createElement(g,i({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},93054:function(e,t,n){var r=n(67294),o=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=i},32489:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return m},default:function(){return T},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return w}});var r=n(3905),o=n(44035),a=n(93054),i=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&s(e,n,t[n]);if(p)for(var n of p(t))u.call(t,n)&&s(e,n,t[n]);return e};const g={id:"touchgfx-designer-project",title:"TouchGFX Designer Project",sidebar_label:"TouchGFX Designer Project"},m=void 0,f={unversionedId:"development/touchgfx-hal-development/generator-how-to/touchgfx-designer-project",id:"development/touchgfx-hal-development/generator-how-to/touchgfx-designer-project",title:"TouchGFX Designer Project",description:"",source:"@site/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-designer-project.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to",slug:"/development/touchgfx-hal-development/generator-how-to/touchgfx-designer-project",permalink:"/4.21/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-designer-project",draft:!1,tags:[],version:"current",frontMatter:{id:"touchgfx-designer-project",title:"TouchGFX Designer Project",sidebar_label:"TouchGFX Designer Project"},sidebar:"docs",previous:{title:"Modifying Generated Behavior",permalink:"/4.21/docs/development/touchgfx-hal-development/generator-how-to/modifying-generated-behavior"},next:{title:"Upgrading Project",permalink:"/4.21/docs/development/touchgfx-hal-development/generator-how-to/upgrading-projects"}},v={},w=[],b={toc:w};function T(e){var t,n=e,{components:i}=n,s=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},b),s),c(t,l({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX Generator ",(0,r.kt)("a",d({parentName:"p"},{href:"generating-code#generated-project"}),"generates")," the ",(0,r.kt)("em",{parentName:"p"},".part")," inside the ",(0,r.kt)("em",{parentName:"p"},"TouchGFX")," folder which is opened with\nthe TouchGFX Designer in order to create a full TouchGFX project complete with TouchGFX header files and libraries. The\npart file contains relevant application information such as pixel format, and canvas dimensions that the TouchGFX Designer\nuses when generating TouchGFX application code."),(0,r.kt)("p",null,"The following json structure is an example of the contents of the ",(0,r.kt)("inlineCode",{parentName:"p"},".part")," file mentioned in the\n",(0,r.kt)("a",d({parentName:"p"},{href:"generating-code#generated-code-structure"}),"Generated Code Structure")," section for a project based on STM32U599.\nThe post-generate command in the example below will update the project selected by the user in STM32CubeMX Project\nManager tab (e.g. EWARM) with required libraries for TouchGFX and optional components as well as new files created\nby TouchGFX designer (e.g. new screens and assets)."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-json",metastring:"{16}","{16}":!0}),'{\n  "Application": {\n    "Name": "STM32U599J-DK",\n    "TouchGfxPath": "../Middlewares/ST/touchgfx",\n    "AvailableColorDepths": [ 24 ],\n    "AvailableLCDs":\n    {\n      "24": "LCDGPU2D"\n    },\n    "AvailableResolutions": [\n      {\n        "Width": 480,\n        "Height": 480\n      }\n    ],\n    "PostGenerateTargetCommand": "touchgfx update_project",\n    "Family": "STM32U5",\n    "SubFamily": "STM32U599/5A9",\n    "Platform": "m33",\n    "ProjectFile": "../STM32U599J-DK.ioc",\n    "OptionalComponentsRoot": "../Middlewares/ST/touchgfx_components",\n    "OptionalComponents": [\n      "GPU2D"\n    ]\n  },\n  "Version": "4.19.0"\n}\n')),(0,r.kt)("p",null,"When opening the ",(0,r.kt)("em",{parentName:"p"},".part")," file with TouchGFX Designer developers are presented with the option to load a concrete UI or start from a blank template."),(0,r.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/choose-ui-4-17.webp",noShadow:!1,mdxType:"Figure"},"Choose UI"),(0,r.kt)("p",null,"After pressing ",(0,r.kt)("em",{parentName:"p"},"Generate Code")," in TouchGFX Designer, new files and folders are generated by TouchGFX Designer in the ",(0,r.kt)("em",{parentName:"p"},"TouchGFX"),"\nfolder."),(0,r.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/designer-gen-code-4-17.webp",noShadow:!1,mdxType:"Figure"},"Generate Code in TouchGFX Designer"),(0,r.kt)("p",null,"The following image shows a concrete example of a ",(0,r.kt)("em",{parentName:"p"},"TouchGFX")," folder structure and highlights the files and folders that are new after generation."),(0,r.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/post-designer-generation.webp",noShadow:!1,mdxType:"Figure"},"TouchGFX Folder Structure"),(0,r.kt)("p",null,"TouchGFX Designer will detect the IDE selected with the Project Manager in STM32CubeMX (i.e. STM32CubeIDE, EWARM or MDK-ARM) and update the project file of that IDE with new generated files like screen definitions and image- and font assets."),(0,r.kt)("p",null,"At this point, developers can work interchangeably in STM32CubeMX, TouchGFX Designer and toolchain/IDE where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"STM32CubeMX updates the IDE project with drivers"),(0,r.kt)("li",{parentName:"ul"},"STM32CubeMX updates the TouchGFX ",(0,r.kt)("em",{parentName:"li"},".part")," file with UI related changes that are instantly picked up by the designer"),(0,r.kt)("li",{parentName:"ul"},"STM32CubeMX generates HAL code (TouchGFX/target/generated/) based on TouchGFX Generator configuration necessary for TouchGFX to work on a specific platform."),(0,r.kt)("li",{parentName:"ul"},"The TouchGFX designer updates the project with generated code.")),(0,r.kt)(a.Z,{mdxType:"Note"},'For Dual-Core projects, having enabled TouchGFX for a specific context, the TouchGFX project will usually be located in a dedicated folder for that context, e.g. "CM4/TouchGFX" or "CM7/TouchGFX".'))}T.isMDXComponent=!0}}]);