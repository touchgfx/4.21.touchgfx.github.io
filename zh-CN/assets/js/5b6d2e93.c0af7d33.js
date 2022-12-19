"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9295],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29415:function(e,t,n){var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},65407:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){var t,n;const i=(0,o.Z)(e.url),l=null!=(t=e.width)?t:"100%",a=null!=(n=e.height)?n:"100%";return r.createElement("div",{className:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:l,height:a},r.createElement("source",{src:i,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},38580:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return g},default:function(){return k},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return y}});var r=n(3905),o=n(29415),i=n(39130),l=n(65407),a=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&m(e,n,t[n]);return e};const f={id:"examples",title:"\u793a\u4f8b\u548c\u7279\u5b9a\u677f\u5361\u7684\u6f14\u793a"},g=void 0,v={unversionedId:"development/ui-development/working-with-touchgfx/examples",id:"development/ui-development/working-with-touchgfx/examples",title:"\u793a\u4f8b\u548c\u7279\u5b9a\u677f\u5361\u7684\u6f14\u793a",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/examples.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/examples",permalink:"/4.21/zh-CN/docs/development/ui-development/working-with-touchgfx/examples",draft:!1,tags:[],version:"current",frontMatter:{id:"examples",title:"\u793a\u4f8b\u548c\u7279\u5b9a\u677f\u5361\u7684\u6f14\u793a"},sidebar:"docs",previous:{title:"\u8c03\u8bd5",permalink:"/4.21/zh-CN/docs/development/ui-development/working-with-touchgfx/debugging"},next:{title:"\u952e\u76d8\u5feb\u6377\u952e",permalink:"/4.21/zh-CN/docs/development/ui-development/working-with-touchgfx/keyboard-shortcuts"}},w={},y=[{value:"\u793a\u4f8b\u548c\u6f14\u793a",id:"ui-templates",level:2},{value:"\u7279\u5b9a\u4e8e\u677f\u5361\u7684\u6f14\u793a",id:"online-applications",level:2}],b={toc:y};function k(e){var t,n=e,{components:a}=n,m=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},b),m),c(t,p({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u4e3a\u4e86\u6709\u52a9\u4e8e\u8fdb\u4e00\u6b65\u63a2\u7d22TouchGFX\u7684\u53ef\u80fd\u6027\u548c\u7279\u6027\uff0c\u591a\u4e2a\u9884\u5148\u5236\u4f5c\u7684\u793a\u4f8b\u548c\u6f14\u793a\u5bf9\u7528\u6237\u53ef\u7528\u3002 \u53ef\u4ee5\u901a\u8fc7TouchGFX Designer\u7684",(0,r.kt)("a",h({parentName:"p"},{href:"../designer-user-guide/startup-window"}),"\u8d77\u59cb\u754c\u9762"),"\u8bbf\u95ee\u8fd9\u4e9b\u793a\u4f8b\u548c\u6f14\u793a\uff08\u5747\u5305\u62ec\u514d\u8d39\u4f7f\u7528\u7684\u56fe\u50cf\u548c\u4ee3\u7801\u7b49\uff09\uff0c\u8fd9\u610f\u5473\u7740\u53ef\u4ee5\u5c06\u5b83\u4eec\u4f5c\u4e3a\u57fa\u7840\uff0c\u4ee5\u6784\u5efa\u81ea\u5df1\u72ec\u6709\u7684\u5e94\u7528\u7a0b\u5e8f\u3002 \u5c06\u793a\u4f8b\u548c\u6f14\u793a\u4e0e",(0,r.kt)("a",h({parentName:"p"},{href:"../../development-introduction#application-templates-ats"}),"TouchGFX\u677f\u5361\u8bbe\u7f6e"),"\u7ed3\u5408\u53ef\u4ee5\u521b\u5efaTouchGFX\u5e94\u7528\u7a0b\u5e8f\u3002 \u5982\u679c\u60a8\u4e0d\u592a\u719f\u6089TouchGFX\uff0c\u53ef\u4ee5\u4ee5\u6b64\u4e3a\u826f\u597d\u7684\u8d77\u70b9\uff0c\u6df1\u5165\u4e86\u89e3TouchGFX\u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u4f5c\u539f\u7406\u3002"),(0,r.kt)("p",null,"\u4e00\u4e9b\u793a\u4f8b\u548c\u6f14\u793a\u53ea\u5173\u6ce8\u5355\u4e2a\u7279\u6027\uff0c\u800c\u53e6\u4e00\u4e9b\u5219\u5b9e\u73b0TouchGFX\u4e2d\u7684\u51e0\u4e2a\u4e0d\u540c\u529f\u80fd\u3002 \u6f14\u793a\u5206\u4e3a\u4e24\u4e2a\u4e0d\u540c\u7c7b\u578b\uff1a",(0,r.kt)("a",h({parentName:"p"},{href:"#ui-templates"}),"\u6f14\u793a")," \u548c",(0,r.kt)("a",h({parentName:"p"},{href:"#online-applications"}),"\u7279\u5b9a\u677f\u5361\u6f14\u793a"),"."),(0,r.kt)("h2",h({},{id:"ui-templates"}),"\u793a\u4f8b\u548c\u6f14\u793a"),(0,r.kt)("p",null,"\u793a\u4f8b\u901a\u5e38\u662f\u66f4\u5c0f\u3001\u66f4\u72ec\u7acb\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u4e3b\u8981\u5173\u6ce8\u7279\u5b9a\u7279\u6027\uff0c\u6bd4\u5982\u4e0d\u540c\u7684\u63a7\u4ef6\u3002 \u793a\u4f8b\u53ef\u4ee5\u5728\u4efb\u4f55STM32\u8bc4\u4f30\u5957\u4ef6\u548cPC\u6a21\u62df\u5668\u4e0a\u8fd0\u884c\uff0c\u4f46\u4e3a\u4e86\u83b7\u5f97\u6700\u4f73\u4f53\u9a8c\uff0c\u5efa\u8bae\u5728\u793a\u4f8b\u7684\u5206\u8fa8\u7387\u4e0e\u60a8\u7684\u677f\u4ef6\u5206\u8fa8\u7387\u5339\u914d\u7684\u60c5\u51b5\u4e0b\u521b\u5efa\u9879\u76ee\u3002 \u6709\u4e9b\u793a\u4f8b\u5728\u6784\u5efa\u65f6\u4e5f\u8003\u8651\u5230\u4e86\u7279\u5b9a\u7684\u8272\u6df1\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u4eec\u5728\u8f83\u4f4e\u7684\u8272\u6df1\u663e\u793a\u5e94\u7528\u4e2d\u7684\u663e\u793a\u6548\u679c\u53ef\u80fd\u4e0d\u4f1a\u5f88\u597d\u3002"),(0,r.kt)("p",null,"\u6f14\u793a\u5305\u62ec\u8bb8\u591aTouchGFX\u56e2\u961f\u5236\u4f5c\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u5b83\u4eec\u5c55\u793a\u4e86\u66f4\u591a\u91c7\u7528\u66f4\u9ad8\u8d28\u91cfUI\u8bbe\u8ba1\u7684\u7279\u6027\u3002 \u8fd9\u4e9b\u80fd\u591f\u8ba9\u60a8\u5f00\u59cb\u611f\u53d7TouchGFX\u7684\u80fd\u529b\u3002"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528\u793a\u4f8b\u6216\u6f14\u793a\u521b\u5efa\u5e94\u7528\u7a0b\u5e8f\uff0c\u9996\u5148\u70b9\u51fb\u8d77\u59cb\u754c\u9762\u5de6\u4e0a\u65b9\u7684\u201c\u793a\u4f8b\u201d\u6216\u201c\u6f14\u793a\u201d\uff0c\u4ee5\u67e5\u770b\u53ef\u7528\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u7136\u540e\u70b9\u51fb\u60a8\u9700\u8981\u7684\u5e94\u7528\u7a0b\u5e8f\u3002 \u6216\u8005\uff0c\u53ef\u4ee5\u5728\u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9\u53e6\u5916\u7684\u5206\u8fa8\u7387\u548c\u8272\u6df1\u3002 \u5982\u679c\u60f3\u5728\u4e00\u4e2a\u652f\u6301\u7684\u786c\u4ef6\u4e0a\u8fd0\u884c\uff0c\u70b9\u51fb\u7a97\u53e3\u9876\u90e8\u7684\u201cSelect Hardware\u201d\uff0c\u9009\u62e9\u60f3\u8981\u7684\u677f\u5361\uff0c\u7136\u540e\u6309\u201c\u9009\u62e9\u201d\u3002 \u6700\u540e\uff0c\u6309\u201cCreate\u201d\u901a\u8fc7\u9009\u5b9a\u7684TouchGFX\u677f\u5361\u8bbe\u7f6e\u548c\u793a\u4f8b\u6216\u6f14\u793a\u521b\u5efa\u5e94\u7528\u7a0b\u5e8f\u3002 \u6309\u201cRun Simulator\u201d\u6216\u201cRun Target\u201d\u67e5\u770b\u8fd0\u884c\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e9b\u6b65\u9aa4\u7684\u52a8\u753b\u6f14\u793a\u5982\u4e0b\uff1a"),(0,r.kt)(l.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/application-template-ui-template.mp4",mdxType:"LoopVideo"},"\u4f7f\u7528\u793a\u4f8b\u521b\u5efa\u9879\u76ee"),(0,r.kt)("h2",h({},{id:"online-applications"}),"\u7279\u5b9a\u4e8e\u677f\u5361\u7684\u6f14\u793a"),(0,r.kt)("p",null,"\u7279\u5b9a\u4e8e\u677f\u4ef6\u7684\u6f14\u793a\u662f\u9488\u5bf9\u7279\u5b9a\u786c\u4ef6\u89e3\u51b3\u65b9\u6848\u7684\u5f00\u7bb1\u5373\u7528\u578b\u5e94\u7528\u7a0b\u5e8f\uff0c\u56e0\u6b64\u4e0d\u53ef\u80fd\u5728\u4efb\u4f55\u5176\u4ed6STM32\u8bc4\u4f30\u5957\u4ef6\uff08\u9664\u4e86PC\u6a21\u62df\u5668\uff09\u4e0a\u8fd0\u884c\u3002 \u8fd9\u4e9b\u5e94\u7528\u7a0b\u5e8f\u901a\u5e38\u8981\u5927\u5f97\u591a\uff0c\u5e76\u4e14\u63a2\u7d22TouchGFX\u6846\u67b6\u7684\u591a\u4e2a\u4e0d\u540c\u7279\u6027\uff0c\u8fd8\u53ef\u4ee5\u5305\u542b\u4e0e\u786c\u4ef6\u7684\u96c6\u6210\u793a\u4f8b\u3002"),(0,r.kt)("p",null,"\u5982\u8981\u4f7f\u7528\u7279\u5b9a\u4e8e\u677f\u4ef6\u7684\u6f14\u793a\u521b\u5efa\u5e94\u7528\u7a0b\u5e8f\uff0c\u9996\u5148\u70b9\u51fb\u8d77\u59cb\u754c\u9762\u5de6\u4e0a\u89d2\u7684\u2018Demos\u2019\u9009\u9879\u5361\u8fdb\u884c\u8bbf\u95ee\u3002 \u70b9\u51fb\u7a97\u53e3\u9876\u90e8\u7684\u201cBoard Specific Demo\u201d\u6807\u7b7e\uff0c\u4ee5\u663e\u793a\u53ef\u7528\u7684\u5e94\u7528\u7a0b\u5e8f\u3002 \u70b9\u51fb\u60f3\u8981\u7684\u5e94\u7528\u7a0b\u5e8f\u5e76\u6309\u201cCreate\u201d\u3002 \u6309\u201cRun Simulator\u201d\u6216\u201cRun Target\u201d\u67e5\u770b\u8fd0\u884c\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e9b\u6b65\u9aa4\u7684\u52a8\u753b\u6f14\u793a\u5982\u4e0b\uff1a"),(0,r.kt)(l.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/online-application.mp4",mdxType:"LoopVideo"},"\u4f7f\u7528\u7279\u5b9a\u4e8e\u677f\u5361\u7684\u6f14\u793a\u521b\u5efa\u9879\u76ee"),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"\u5982\u9700\u8be6\u7ec6\u4e86\u89e3\u5982\u4f55\u901a\u8fc7\u793a\u4f8b\u6216\u6f14\u793a\u521b\u5efa\u5e94\u7528\u7a0b\u5e8f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)(i.Z,{to:"../designer-user-guide/startup-window",mdxType:"Link"},"\u8d77\u59cb\u754c\u9762\u90e8\u5206\u3002")))}k.isMDXComponent=!0}}]);