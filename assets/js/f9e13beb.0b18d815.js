"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7252],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(e,t,n){var o=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,i=(0,r.Z)(e.imageSource);return t?o.createElement("div",{className:"figure noshadow"},o.createElement("a",{href:i,target:"_blank"},o.createElement("img",{width:n,height:a,src:i})),o.createElement("p",null,e.children)):o.createElement("div",{className:"figure"},o.createElement("a",{href:i,target:"_blank"},o.createElement("img",{width:n,height:a,src:i})),o.createElement("p",null,e.children))}},45135:function(e,t,n){var o=n(67294);class r extends o.Component{render(){var e=`https://www.youtube.com/embed/${function(e){const t=/https:\/\/www\.youtube\.com\/watch\?v=(\w+)/;if(t.test(e))return t.exec(e)[1];const n=/https:\/\/youtu\.be\/(\w+)/;if(n.test(e))return n.exec(e)[1];return e}(this.props.url)}`;return o.createElement("div",{className:"videoWrapper"},o.createElement("iframe",{src:e,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}}t.Z=r},64206:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return h},default:function(){return v},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return w}});var o=n(3905),r=n(44035),a=n(45135),i=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&d(e,n,t[n]);return e};const f={id:"welcome",title:"TouchGFX Documentation",sidebar_label:"Welcome",description:"The documentation site for TouchGFX - a user-friendly graphical C++ tool for creating powerful embedded touch applications."},h=void 0,g={unversionedId:"introduction/welcome",id:"introduction/welcome",title:"TouchGFX Documentation",description:"The documentation site for TouchGFX - a user-friendly graphical C++ tool for creating powerful embedded touch applications.",source:"@site/docs/introduction/welcome.mdx",sourceDirName:"introduction",slug:"/introduction/welcome",permalink:"/4.21/docs/introduction/welcome",draft:!1,tags:[],version:"current",frontMatter:{id:"welcome",title:"TouchGFX Documentation",sidebar_label:"Welcome",description:"The documentation site for TouchGFX - a user-friendly graphical C++ tool for creating powerful embedded touch applications."},sidebar:"docs",previous:{title:"Introduction",permalink:"/4.21/docs/category/introduction"},next:{title:"What is TouchGFX?",permalink:"/4.21/docs/introduction/what-is-touchgfx"}},y={},w=[{value:"About this documentation",id:"about-this-documentation",level:2},{value:"Target User",id:"target-user",level:3}],b={toc:w};function v(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&p.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=m(m({},b),d),c(t,u({components:i,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"Welcome to the official documentation of TouchGFX!"),(0,o.kt)(a.Z,{url:"https://youtu.be/t0SlRZnERms",mdxType:"YouTube"}),(0,o.kt)("p",null,"If you are new to this documentation and/or TouchGFX, we recommend that you read on to get an overview of what this documentation has to offer.\nThe table of contents in the sidebar should let you easily access the documentation for your topic of interest.\nYou can also use the search function in the top right corner."),(0,o.kt)("h2",m({},{id:"about-this-documentation"}),"About this documentation"),(0,o.kt)("p",null,"The main documentation for the site is organized into the following sections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"what-is-touchgfx"}),(0,o.kt)("strong",{parentName:"a"},"Introduction"))," - read surface-level information on TouchGFX and installation guide."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"../basic-concepts/embedded-graphics"}),(0,o.kt)("strong",{parentName:"a"},"Basic Concepts"))," - introduction to key graphics concepts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"../development/development-introduction"}),(0,o.kt)("strong",{parentName:"a"},"Development"))," - how to develop a TouchGFX application including, structure, workflow and tools."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"../tutorials/tutorial-01"}),(0,o.kt)("strong",{parentName:"a"},"Tutorials"))," - a collection of TouchGFX tutorials.")),(0,o.kt)(r.Z,{imageSource:"/img/introduction/welcome/frontpage-4.17.png",noShadow:"true",mdxType:"Figure"}),(0,o.kt)("h3",m({},{id:"target-user"}),"Target User"),(0,o.kt)("p",null,"The TouchGFX documentation is targeting software developers with a basic skill-set within C++ and embedded GUI development on STM32. Newcomers to Embedded GUI Development are supported in the section Basic Concepts, while step by step guides and tutorials support everyone towards a smooth learning in TouchGFX development as well."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"We would really like to improve this documentation in any way possible."),"\n",(0,o.kt)("em",{parentName:"p"},"If you don\u2019t understand something, or cannot find what you are looking for in the docs, help us make the documentation better by letting us know in the ",(0,o.kt)("a",m({parentName:"em"},{href:"https://community.st.com/s/topic/0TO0X0000003iw6WAA/touchgfx"}),"forum"),"!")))}v.isMDXComponent=!0}}]);