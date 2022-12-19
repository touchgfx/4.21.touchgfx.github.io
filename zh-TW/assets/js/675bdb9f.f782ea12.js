"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6506],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?o.createElement(m,a(a({ref:t},s),{},{components:n})):o.createElement(m,a({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(e,t,n){var o=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,r.Z)(e.imageSource);return t?o.createElement("div",{className:"figure noshadow"},o.createElement("a",{href:a,target:"_blank"},o.createElement("img",{width:n,height:i,src:a})),o.createElement("p",null,e.children)):o.createElement("div",{className:"figure"},o.createElement("a",{href:a,target:"_blank"},o.createElement("img",{width:n,height:i,src:a})),o.createElement("p",null,e.children))}},65407:function(e,t,n){var o=n(67294),r=n(25026);t.Z=function(e){var t,n;const i=(0,r.Z)(e.url),a=null!=(t=e.width)?t:"100%",c=null!=(n=e.height)?n:"100%";return o.createElement("div",{className:"loop-video"},o.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:a,height:c},o.createElement("source",{src:i,type:"video/mp4"}),"Your browser does not support the video tag."),o.createElement("p",null,e.children))}},1158:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return v}});var o=n(3905),r=n(44035),i=n(65407),a=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&d(e,n,t[n]);return e};const m={id:"getting-started",title:"Getting Started"},f=void 0,g={unversionedId:"introduction/getting-started",id:"introduction/getting-started",title:"Getting Started",description:"",source:"@site/docs/introduction/getting-started.mdx",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/4.21/zh-TW/docs/introduction/getting-started",draft:!1,tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started"},sidebar:"docs",previous:{title:"Installation",permalink:"/4.21/zh-TW/docs/introduction/installation"},next:{title:"Basic Concepts",permalink:"/4.21/zh-TW/docs/category/basic-concepts"}},y={},v=[{value:"TouchGFX Quick Start",id:"touchgfx-quick-start",level:2},{value:"TouchGFX Board Setups + Examples and Demos",id:"application-template--ui-template",level:3},{value:"Board Specific Demos",id:"online-applications",level:3},{value:"What&#39;s Next",id:"whats-next",level:2}],w={toc:v};function b(e){var t,n=e,{components:a}=n,d=((e,t)=>{var n={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&u)for(var o of u(e))t.indexOf(o)<0&&p.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=h(h({},w),d),c(t,l({components:a,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"A prerequisite to get started using TouchGFX is to install the newest version of TouchGFX, which is described in the ",(0,o.kt)("a",h({parentName:"p"},{href:"installation"}),"Installation")," section."),(0,o.kt)(r.Z,{imageSource:"/img/introduction/getting-started/computer-2-screens.png",noShadow:!0,mdxType:"Figure"}," "),(0,o.kt)("p",null,"After this is done you are ready to begin your very first TouchGFX project. It is highly recommended that you read some key sections of this documentation to get familiar with the very basic of TouchGFX concepts.\nThe most essential section is the ",(0,o.kt)("a",h({parentName:"p"},{href:"../development/development-introduction"}),"Development Introduction")," which will give you an introduction to the software and hardware components needed for a complete TouchGFX project and the activities and tools involved in creating them. It also describes how to get started doing a fast prototype using premade components."),(0,o.kt)("h2",h({},{id:"touchgfx-quick-start"}),"TouchGFX Quick Start"),(0,o.kt)("p",null,"If you are eager to start experimenting with TouchGFX, trying out an example UI project and maybe running it on an STM32 Evaluation Kit, a wide range of TouchGFX Board Setups together with GUI Examples and Demos exists in TouchGFX Designer."),(0,o.kt)("h3",h({},{id:"application-template--ui-template"}),"TouchGFX Board Setups + Examples and Demos"),(0,o.kt)("p",null,"To create a TouchGFX project based on a TouchGFX Board Setup go ahead and start the TouchGFX Designer."),(0,o.kt)(i.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/application-template-ui-template.mp4",mdxType:"LoopVideo"},"Creating an application with a TouchGFX Board Setup and an Example"),(0,o.kt)("p",null,"On the lobby in TouchGFX Designer you can select from a wide range of examples and demos to start from. You can even combine this with board specific code for a range of STM32 Evaluation Kits, so you can have an UI running on the embedded hardware right away."),(0,o.kt)("p",null,"If you do not have an STM32 Evaluation Kit, you can simply run the TouchGFX application on your PC. If you want to be guided through the first steps, you can have a look at the ",(0,o.kt)("a",h({parentName:"p"},{href:"../tutorials/tutorial-01"}),"Tutorials")," chapter. Here you will be shown how to get a project up and running, ending with doing a rather complex UI application."),(0,o.kt)("h3",h({},{id:"online-applications"}),"Board Specific Demos"),(0,o.kt)("p",null,"Aside from being able to combine a TouchGFX Board Setup with an Example or a Demo, TouchGFX Designer also includes some out of the box demos for specific STM32 Evaluation Kits. These are located in the Demos section under Board Specific Demo."),(0,o.kt)(i.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/online-application.mp4",mdxType:"LoopVideo"},"Creating an application with a Board Specific Demo"),(0,o.kt)("h2",h({},{id:"whats-next"}),"What's Next"),(0,o.kt)("p",null,"At this point it is recommended that you browse through the documentation and read the chapters that look relevant to you. This will give you an overview of the documentation, so you know where to look for more information, and it will introduce you to key TouchGFX concepts."),(0,o.kt)("p",null,"The main chapters are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",h({parentName:"li"},{href:"../basic-concepts/embedded-graphics"}),"Basic Concepts"),": This chapter serves as background knowledge for the rest of the documentation. It introduces all the key graphics concepts that will be referenced later on. Depending on your current knowledge and which TouchGFX development activities you will do, you might want to skip some sections and consult them later if some details are unclear."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",h({parentName:"li"},{href:"../development/development-introduction"}),"Development"),": This chapter is the main chapter of the documentation. It explains the structure of a TouchGFX Project, the workflow and the tools involved in the entire project development cycle. Each step in the workflow has it own section and is described in details. Here you will find all you need to know on how to make your application run on your hardware and how you will do UI development, including descriptions of all features and components in the TouchGFX Framework.")))}b.isMDXComponent=!0}}]);