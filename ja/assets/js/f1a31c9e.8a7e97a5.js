"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9350],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},65407:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){var t,n;const i=(0,o.Z)(e.url),a=null!=(t=e.width)?t:"100%",c=null!=(n=e.height)?n:"100%";return r.createElement("div",{className:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:a,height:c},r.createElement("source",{src:i,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},90442:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return h},default:function(){return k},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return y}});var r=n(3905),o=n(44035),i=n(65407),a=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&s(e,n,t[n]);return e};const f={id:"getting-started",title:"\u4f7f\u7528\u65b9\u6cd5"},h=void 0,g={unversionedId:"introduction/getting-started",id:"introduction/getting-started",title:"\u4f7f\u7528\u65b9\u6cd5",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/introduction/getting-started.mdx",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/4.21/ja/docs/introduction/getting-started",draft:!1,tags:[],version:"current",frontMatter:{id:"getting-started",title:"\u4f7f\u7528\u65b9\u6cd5"},sidebar:"docs",previous:{title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",permalink:"/4.21/ja/docs/introduction/installation"},next:{title:"Basic Concepts",permalink:"/4.21/ja/docs/category/basic-concepts"}},v={},y=[{value:"TouchGFX Quick Start",id:"touchgfx-quick-start",level:2},{value:"TouchGFX Board Setup + \u30b5\u30f3\u30d7\u30eb\u304a\u3088\u3073\u30c7\u30e2",id:"application-template--ui-template",level:3},{value:"Board Specific Demos\uff08\u30dc\u30fc\u30c9\u56fa\u6709\u306e\u30c7\u30e2\uff09",id:"online-applications",level:3},{value:"\u6b21\u306e\u5185\u5bb9",id:"whats-next",level:2}],b={toc:y};function k(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},b),s),c(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX\u3092\u4f7f\u7528\u3057\u3066\u4f5c\u696d\u3092\u958b\u59cb\u3059\u308b\u305f\u3081\u306e\u524d\u63d0\u6761\u4ef6\u306f\u3001TouchGFX\u306e\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u3059\u3002\u3053\u308c\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,r.kt)("a",m({parentName:"p"},{href:"installation"}),"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/introduction/getting-started/computer-2-screens.webp",noShadow:!0,mdxType:"Figure"}," "),(0,r.kt)("p",null,"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u5b8c\u4e86\u3059\u308b\u3068\u3001\u6700\u521d\u306eTouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u59cb\u3059\u308b\u6e96\u5099\u304c\u6574\u3044\u307e\u3059\u3002 \u672c\u66f8\u306e\u4e3b\u8981\u306a\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u3054\u78ba\u8a8d\u3044\u305f\u3060\u304d\u3001TouchGFX\u306e\u57fa\u672c\u6982\u5ff5\u3092\u628a\u63e1\u3092\u63a8\u5968\u3057\u307e\u3059\u3002 \u6700\u3082\u91cd\u8981\u306a\u30bb\u30af\u30b7\u30e7\u30f3\u306f\u300c",(0,r.kt)("a",m({parentName:"p"},{href:"../development/development-introduction"}),"\u958b\u767a\u306e\u6982\u8981"),"\u300d\u3067\u3059\u3002\u3053\u3053\u3067\u306f\u3001\u5b8c\u5168\u306aTouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u305f\u3081\u306b\u5fc5\u8981\u306a\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u304a\u3088\u3073\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u3001\u305d\u308c\u3089\u306e\u4f5c\u6210\u306b\u5fc5\u8981\u306a\u4f5c\u696d\u3084\u30c4\u30fc\u30eb\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u3066\u3044\u307e\u3059\u3002 \u65e2\u88fd\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u7c21\u5358\u306a\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u4f5c\u6210\u3092\u958b\u59cb\u3059\u308b\u65b9\u6cd5\u3082\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("h2",m({},{id:"touchgfx-quick-start"}),"TouchGFX Quick Start"),(0,r.kt)("p",null,"If you are eager to start experimenting with TouchGFX, trying out an example UI project and maybe running it on an STM32 Evaluation Kit, a wide range of TouchGFX Board Setups together with GUI Examples and Demos exists in TouchGFX Designer."),(0,r.kt)("h3",m({},{id:"application-template--ui-template"}),"TouchGFX Board Setup + \u30b5\u30f3\u30d7\u30eb\u304a\u3088\u3073\u30c7\u30e2"),(0,r.kt)("p",null,"To create a TouchGFX project based on a TouchGFX Board Setup go ahead and start the TouchGFX Designer."),(0,r.kt)(i.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/application-template-ui-template.mp4",mdxType:"LoopVideo"},"TouchGFX Board Setup\u3067\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u3068\u30b5\u30f3\u30d7\u30eb"),(0,r.kt)("p",null,"TouchGFX Designer\u306e\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7\uff65\u30a6\u30a3\u30f3\u30c9\u30a6\u3067\u306f\u3001\u5e83\u7bc4\u56f2\u306eUI\u30b5\u30f3\u30d7\u30eb\u304b\u3089\u9078\u629e\u3057\u3001\u3053\u3053\u304b\u3089\u958b\u59cb\u3067\u304d\u307e\u3059\u3002 \u3053\u306eUI\u30b5\u30f3\u30d7\u30eb\u306f\u3001\u5e83\u7bc4\u306aSTM32\u8a55\u4fa1\u30ad\u30c3\u30c8\u306e\u30dc\u30fc\u30c9\u56fa\u6709\u306e\u30b3\u30fc\u30c9\u3068\u7d44\u307f\u5408\u308f\u305b\u3089\u308c\u308b\u306e\u3067\u3001\u7d44\u8fbc\u307f\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u4e0a\u3067\u30b5\u30f3\u30d7\u30eb\u3092\u3059\u3050\u306b\u8a66\u305b\u307e\u3059\u3002"),(0,r.kt)("p",null,"STM32\u8a55\u4fa1\u30ad\u30c3\u30c8\u304c\u306a\u3044\u5834\u5408\u306f\u3001\u304a\u4f7f\u3044\u306ePC\u4e0a\u3067TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u521d\u671f\u30b9\u30c6\u30c3\u30d7\u306e\u30ac\u30a4\u30c0\u30f3\u30b9\u304c\u5fc5\u8981\u306a\u5834\u5408\u306b\u306f\u3001\u300c",(0,r.kt)("a",m({parentName:"p"},{href:"../tutorials/tutorial-01"}),"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb"),"\u300d\u306e\u7ae0\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002 \u3053\u306e\u7ae0\u3067\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u7acb\u3061\u4e0a\u3052\u3066\u5b9f\u884c\u3057\u3001\u6700\u7d42\u7684\u306b\u3084\u3084\u8907\u96d1\u306aUI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u3068\u3053\u308d\u307e\u3067\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",m({},{id:"online-applications"}),"Board Specific Demos\uff08\u30dc\u30fc\u30c9\u56fa\u6709\u306e\u30c7\u30e2\uff09"),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3068UI\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u7d44\u307f\u5408\u308f\u305b\u308b\u3053\u3068\u304c\u53ef\u80fd\u306a\u307b\u304b\u3001TouchGFX Designer\u306b\u306f\u3001\u7279\u5b9a\u306eSTM32\u8a55\u4fa1\u30ad\u30c3\u30c8\u5411\u3051\u306e\u3059\u3050\u306b\u4f7f\u7528\u3067\u304d\u308b\u30c7\u30e2\u3082\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002 These are located in the Demos section under Board Specific Demo."),(0,r.kt)(i.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/online-application.mp4",mdxType:"LoopVideo"},"Board Specific Demo\u3067\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210"),(0,r.kt)("h2",m({},{id:"whats-next"}),"\u6b21\u306e\u5185\u5bb9"),(0,r.kt)("p",null,"\u3053\u306e\u6642\u70b9\u3067\u3001\u672c\u66f8\u5168\u4f53\u3092\u3054\u89a7\u3044\u305f\u3060\u304d\u3001\u5fc5\u8981\u3068\u601d\u308f\u308c\u308b\u7ae0\u3092\u304a\u8aad\u307f\u306b\u306a\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002 \u3053\u308c\u3067\u672c\u66f8\u306e\u6982\u8981\u3092\u628a\u63e1\u3067\u304d\u308c\u3070\u3001\u8a73\u7d30\u60c5\u5831\u3092\u5165\u624b\u3067\u304d\u308b\u5834\u6240\u304c\u308f\u304b\u308a\u3001TouchGFX\u306e\u4e3b\u8981\u6982\u5ff5\u3092\u77e5\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4e3b\u306a\u7ae0\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"../basic-concepts/embedded-graphics"}),"\u57fa\u672c\u6982\u5ff5"),"\uff1a\u3053\u306e\u7ae0\u3067\u306f\u3001\u672c\u66f8\u306e\u305d\u306e\u4ed6\u306e\u90e8\u5206\u306e\u80cc\u666f\u60c5\u5831\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002 \u5f8c\u3067\u53c2\u7167\u3059\u308b\u4e3b\u306a\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u6982\u5ff5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002 \u73fe\u6642\u70b9\u3067\u306e\u77e5\u8b58\u3084\u7406\u89e3\u5ea6\u3068\u3001\u5b9f\u884c\u4e88\u5b9a\u306eTouchGFX\u958b\u767a\u4f5c\u696d\u306b\u3088\u3063\u3066\u306f\u3001\u4e00\u90e8\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u30b9\u30ad\u30c3\u30d7\u3057\u3001\u8a73\u7d30\u304c\u4e0d\u660e\u306a\u5834\u5408\u306b\u5f8c\u304b\u3089\u95b2\u89a7\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"../development/development-introduction"}),"\u958b\u767a"),"\uff1a\u3053\u306e\u7ae0\u306f\u672c\u66f8\u306e\u4e2d\u5fc3\u3068\u306a\u308b\u7ae0\u3067\u3059\u3002 TouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u69cb\u9020\u3084\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u958b\u767a\u30b5\u30a4\u30af\u30eb\u5168\u4f53\u3067\u95a2\u4e0e\u3059\u308b\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3068\u30c4\u30fc\u30eb\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002 \u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u5404\u30b9\u30c6\u30c3\u30d7\u306b\u306f\u72ec\u81ea\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u304c\u3042\u308a\u3001\u8a73\u3057\u304f\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002 \u307e\u305f\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u4e0a\u3067\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5\u3084UI\u958b\u767a\u306e\u65b9\u6cd5\u306b\u3064\u3044\u3066\u3001\u77e5\u3063\u3066\u304a\u304f\u3079\u304d\u5185\u5bb9\u304c\u8a18\u8f09\u3055\u308c\u3066\u3044\u307e\u3059\u3002TouchGFX\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u3059\u3079\u3066\u306e\u6a5f\u80fd\u3068\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8aac\u660e\u306a\u3069\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002")))}k.isMDXComponent=!0}}]);