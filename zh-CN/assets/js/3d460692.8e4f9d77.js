"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4989],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(n),d=a,f=g["".concat(u,".").concat(d)]||g[d]||s[d]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},61847:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return m}});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&p(e,n,t[n]);return e};const g={id:"languages-and-characters",title:"\u8bed\u8a00\u548c\u5b57\u7b26"},d=void 0,f={unversionedId:"development/ui-development/touchgfx-engine-features/languages-and-characters",id:"development/ui-development/touchgfx-engine-features/languages-and-characters",title:"\u8bed\u8a00\u548c\u5b57\u7b26",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/languages-and-characters.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/languages-and-characters",permalink:"/4.21/zh-CN/docs/development/ui-development/touchgfx-engine-features/languages-and-characters",draft:!1,tags:[],version:"current",frontMatter:{id:"languages-and-characters",title:"\u8bed\u8a00\u548c\u5b57\u7b26"},sidebar:"docs",previous:{title:"\u6587\u672c\u548c\u5b57\u4f53",permalink:"/4.21/zh-CN/docs/development/ui-development/touchgfx-engine-features/texts-and-fonts"},next:{title:"MJPEG\u89c6\u9891",permalink:"/4.21/zh-CN/docs/development/ui-development/touchgfx-engine-features/video"}},h={},m=[{value:"\u8bed\u8a00",id:"languages",level:2},{value:"\u5b57\u7b26",id:"characters",level:2},{value:"\u4e66\u5199\u65b9\u5411",id:"writing-direction",level:2},{value:"\u4e0a\u4e0b\u6587\u5851\u9020",id:"contextual-shaping",level:2},{value:"\u652f\u6301\u7684\u8bed\u8a00\u5217\u8868",id:"list-of-supported-languages",level:2},{value:"\u4ece\u5de6\u5411\u53f3\u5f0f\u8bed\u8a00",id:"left-to-right-languages",level:3},{value:"\u4ece\u53f3\u5411\u5de6\u5f0f\u8bed\u8a00",id:"right-to-left-languages",level:3},{value:"\u4e0d\u652f\u6301\u7684\u8bed\u8a00",id:"unsupported-languages",level:2}],v={toc:m};function k(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},v),p),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u4e3a\u6b64\uff0cTouchGFX\u652f\u6301\u5404\u79cd\u8bed\u8a00\u548c\u5b57\u7b26\uff0c\u5e76\u7406\u89e3\u6587\u672c\u5e03\u5c40\u673a\u5236\uff0c\u5982\u4e66\u5199\u65b9\u5411\u548c\u4e0a\u4e0b\u6587\u5851\u9020\u3002"),(0,r.kt)("h2",s({},{id:"languages"}),"\u8bed\u8a00"),(0,r.kt)("p",null,"\u652f\u6301\u7684\u8bed\u8a00\u662f Unicode \u57fa\u672c\u591a\u8bed\u8a00\u5e73\u9762\u7684\u8bed\u8a00\uff0c\u5176\u9650\u5236\u662f\u4ec5\u652f\u6301\u4ece\u5de6\u5230\u53f3\u6216\u4ece\u53f3\u5230\u5de6\u4e66\u5199\u7cfb\u7edf\u3002 \u8fd9\u610f\u5473\u7740\u652f\u6301\u963f\u62c9\u4f2f\u8bed\u3001\u4e2d\u6587\u3001\u82f1\u8bed\u548c\u8bb8\u591a\u5176\u4ed6\u8bed\u8a00\uff0c\u4f46\u53ef\u80fd\u6709\u4e00\u70b9\u9650\u5236\u3002 \u4e4c\u5c14\u90fd\u8bed\u548c\u7f05\u7538\u8bed\u662f\u76ee\u524d\u4e0d\u652f\u6301\u7684\u8bed\u8a00\u7684\u4f8b\u5b50\u3002"),(0,r.kt)("h2",s({},{id:"characters"}),"\u5b57\u7b26"),(0,r.kt)("p",null,"\u5b57\u7b26\u7f16\u7801\u57fa\u4e8e\u7edf\u4e00\u7801\u6807\u51c6\u3002 16-bit Unicodes are supported, i.e. \u652f\u6301\u4ece0x0000\u81f30xFFFF\u7684\u7edf\u4e00\u7801\u3002 \u4e00\u4e9b\u8bed\u8a00\u53ef\u80fd\u5bf9\u91c7\u7528\u7ed9\u5b9a\u5b57\u4f53\u7684\u7279\u6b8a\u5b57\u7b26\uff08\u5982\u5929\u57ce\u4f53\uff09\u4f7f\u75280xE000-0xE3FF\u4e2d\u7684\u79c1\u4eba\u4f7f\u7528\u533a\u3002"),(0,r.kt)("h2",s({},{id:"writing-direction"}),"\u4e66\u5199\u65b9\u5411"),(0,r.kt)("p",null,"TouchGFX\u652f\u6301\u4ece\u5de6\u5411\u53f3\uff08LTR\uff09\u548c\u4ece\u53f3\u5411\u5de6\uff08RTL\uff09\u4e66\u5199\u4f53\u7cfb\u3002 \u6ca1\u6709\u5bf9\u4ece\u4e0a\u81f3\u4e0b\u4e66\u5199\u4f53\u7cfb\u7684\u5185\u7f6e\u652f\u6301\u3002"),(0,r.kt)("p",null,'\u5e94\u6ce8\u610f\uff0cRTL\u4e0d\u662f\u6307\u5411\u540e\u4e66\u5199\u6587\u672c\uff08\u4e0eLTR\u76f8\u6bd4\uff09\u3002 \u5b83\u8868\u793a\u4ece\u53f3\u8fb9\u5f00\u59cb\u5411\u5de6\u4e66\u5199\u6587\u5b57\u3002 \u5bf9\u4e8e\u963f\u62c9\u4f2f\u8bed\u548c\u5e0c\u4f2f\u6765\u8bed\u800c\u8a00\uff0c\u8fd9\u662f\u6b63\u786e\u8bbe\u7f6e\u3002 "TouchGFX" will not be written "XFGhcuoT" but the direction of words (or collection of words) can be controlled using the RTL/LTR setting.'),(0,r.kt)("p",null,"TouchGFX\u4e2d\u5bf9LTR\u548cRTL\u4e66\u5199\u7684\u5904\u7406\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u5141\u8bb8\u4e24\u8005\u6df7\u5408\u4f7f\u7528\u3002 \u8fd9\u79f0\u4e3a\u53cc\u5411\u811a\u672c\u652f\u6301\u3002 TouchGFX\u652f\u6301\u53cc\u5411\u4e66\u5199\u7684\u5b98\u65b9\u89c4\u5219\u5b50\u96c6\u3002 \u8fd9\u610f\u5473\u7740\u627f\u8ba4\u8bf8\u5982\u201c10:45\u201d\u3001\u201c3.14159\u201d\u3001\u201cSTMicroelectronics TouchGFX\u201d\u7b49\u4ee5\u53ca\u5176\u4ed6\u5199\u6cd5\uff0c\u751a\u81f3\u5728RTL\u6587\u672c\u4e2d\u5b8c\u5168\u4f7f\u7528LTR\u4e66\u5199\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e RTL \u6587\u672c\uff0c\u6587\u672c\u7684\u67d0\u4e9b\u90e8\u5206\u56e0\u6b64\u5fc5\u987b\u5199\u4e3a LTR\u3002 \u6b64\u6587\u672c\u5df2\u627e\u5230\u5e76\u6536\u96c6\uff1b \u6536\u96c6\u6240\u6709\u975e RTL \u5b57\u6bcd\u7684\u5b57\u7b26\u3002 \u989c\u8272 (:)\u3001\u70b9 (.)\u3001\u9017\u53f7 (,)\u3001\u7a7a\u683c ( ) \u7b49\u5b57\u7b26\u4e5f\u4f1a\u201c\u6346\u7ed1\u201d\u4e24\u4e2a\u8fde\u7eed\u7684 LTR \u90e8\u5206\u3002 \u8fd9\u662f\u786e\u4fdd\u201c10:45\u201d\u4f5c\u4e3a\u5355\u4e2a LTR \u5b9e\u4f53\u5904\u7406\u7684\u539f\u56e0\uff0c\u800c\u201cMark:\u201d\uff08\u4ee5\u989c\u8272\u7ed3\u5c3e\uff09\u5c06\u628a\u5192\u53f7\u653e\u5728\u5de6\u8fb9\uff0c\u5c31\u50cf\u963f\u62c9\u4f2f\u8bed\u548c\u5e0c\u4f2f\u6765\u8bed\u56fd\u5bb6\u6240\u671f\u671b\u7684\u90a3\u6837\uff0c\u5373\u201c","<","some Arabic message",">",' :Mark"\uff0c\u5176\u4e2d\u5192\u53f7\u4f4d\u4e8e RTL \u6587\u672c\u7684\u5de6\u4fa7\u3002'),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u62c9\u4e01\u5b57\u7b26\u96c6\uff080-9\uff09\u4e2d\u4f7f\u7528\u7684\u6570\u5b57\u548c\u963f\u62c9\u4f2f\u8bed\u5b57\u7b26\u96c6\u4e2d\u4f7f\u7528\u7684\u6570\u5b57\u90fd\u6309LTR\u5b57\u7b26\u5904\u7406\uff0c\u76ee\u7684\u662f\u786e\u4fdd\u6570\u5b57\u5728\u663e\u793a\u5c4f\u4e0a\u6b63\u5e38\u663e\u793a\u3002"),(0,r.kt)("p",null,"\u8fd8\u5e94\u6ce8\u610f\u7684\u662f\uff0c\u5f53\u6587\u672c\u5305\u542bLTR\u5b9e\u4f53\u548cRTL\u5b9e\u4f53\u7684\u6df7\u5408\u4f53\u65f6\uff0c\u4e66\u5199\u65b9\u5411\u5341\u5206\u91cd\u8981\u3002 \u53e6\u5916\uff0c\u5982\u679c\u6587\u672c\u662fRTL\u6216LTR\uff0c\u5c06\u4e0d\u80fd\u901a\u8fc7\u68c0\u67e5\u6587\u672c\u4e2d\u7684\u5b57\u7b26\u6765\u786e\u5b9a\u3002 If a text contains first a Hebrew word (RTL) and then an English word (LTR), the output on display will depend on the writing direction of the text. \u5982\u679c\u5c06\u6587\u672c\u8bbe\u7f6e\u4e3aRTL\uff0c\u8f93\u51fa\u770b\u8d77\u6765\u4f1a\u662f\u8fd9\u6837\uff1a\u201cEnglish werbeH\u201d\uff0c\u8fd9\u662f\u56e0\u4e3a\u6574\u4e2a\u6587\u672c\u662fRTL\uff0c\u56e0\u6b64\u7b2c\u4e00\u4e2a\u5b57\u5fc5\u987b\u5199\u5728\u6700\u53f3\u7aef\uff0c\u4f46\u5982\u679c\u5c06\u6587\u672c\u8bbe\u7f6e\u4e3aLTR\uff0c\u5219\u8f93\u51fa\u770b\u8d77\u6765\u4f1a\u662f\u8fd9\u6837\uff1a\u201cwerbeH English\u201d\uff0c\u8fd9\u662f\u56e0\u4e3a\u6587\u672c\u5e94\u5728\u6700\u5de6\u7aef\u5f00\u59cb\u4e66\u5199\u7b2c\u4e00\u4e2a\u5b57\u3002 \u7531\u4e8e\u82f1\u8bed\u6587\u672c\u53ef\u80fd\u5305\u542b\u5e0c\u4f2f\u6765\u8bed\u5b57\u8bcd\uff0c\u5c31\u50cf\u5e0c\u4f2f\u6765\u8bed\u6587\u672c\u53ef\u80fd\u5305\u542b\u82f1\u8bed\u5b57\u8bcd\u4e00\u6837\uff0c\u56e0\u6b64\u4e0d\u80fd\u81ea\u52a8\u786e\u5b9a\u91c7\u7528RTL\u8fd8\u662fLTR\u8bbe\u7f6e\u3002"),(0,r.kt)("p",null,"\u53e6\u4e00\u4e2a\u4e0eRTL\u6587\u672c\u6709\u5173\u7684\u91cd\u8981\u95ee\u9898\u662f\u62ec\u53f7\u5b57\u7b26\u7684\u81ea\u52a8\u66ff\u6362\u3002 \u5b83\u4eec\u662f (, ), {, }, ","[, ]",", <, >\u3002 \u6240\u6709\u8fd9\u4e9b\u90fd\u4f1a\u81ea\u52a8\u4e0e\u76f8\u53cd\u7684\u5b57\u7b26\u4ea4\u6362\uff0c\u4ee5\u786e\u4fdd\u6587\u672c\u770b\u8d77\u6765\u6b63\u786e\u3002 \u8bf7\u6ce8\u610f\uff0c\u62c9\u4e01\u6570\u5b57\u4e0d\u4f1a\u81ea\u52a8\u8f6c\u6362\u4e3a\u963f\u62c9\u4f2f\u6570\u5b57\u3002 \u5982\u679c\u9700\u8981\uff0c\u8fd9\u5fc5\u987b\u7531\u7528\u6237\u5728\u663e\u793a\u6587\u672c\u4e4b\u524d\u5b8c\u6210\u3002"),(0,r.kt)("h2",s({},{id:"contextual-shaping"}),"\u4e0a\u4e0b\u6587\u5851\u9020"),(0,r.kt)("p",null,"\u6839\u636e\u5b57\u7b26\u7684\u4e0a\u4e0b\u6587\uff0c\u7279\u5b9a\u811a\u672c\u5c06\u9009\u62e9\u4e0d\u540c\u5f62\u5f0f\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u5b57\u7b26/\u5b57\u5f62\u3002 \u4f8b\u5982\uff0c\u6839\u636e\u5b57\u4e2d\u7684\u5b57\u6bcd\u4f4d\u7f6e\uff0c\u963f\u62c9\u4f2f\u5b57\u6bcd\u8868\u4e2d\u7684\u5b57\u6bcd\u6709\u4e0d\u540c\u7684\u4e0a\u4e0b\u6587\u5f62\u5f0f\u3002 TouchGFX supports such contextual shaping of languages by implementing a simplified set of rules for combining characters. \u6b64\u5916\uff0c\u4f7f\u7528\u81ea\u5b9a\u4e49\u903b\u8f91\u653e\u7f6e\u4e00\u4e9b\u53d8\u97f3\u7b26\u53f7\u6765\u786e\u5b9a\u5782\u76f4\u4f4d\u7f6e - \u8fd9\u5bf9\u4e8e\u963f\u62c9\u4f2f\u8bed\u3001\u6cf0\u8bed\u548c\u68b5\u6587\u5c24\u5176\u5982\u6b64\u3002"),(0,r.kt)("h2",s({},{id:"list-of-supported-languages"}),"\u652f\u6301\u7684\u8bed\u8a00\u5217\u8868"),(0,r.kt)("p",null,"\u5f88\u96be\u63d0\u4f9b\u6240\u6709\u53d7\u652f\u6301\u8bed\u8a00\u7684\u8be6\u5c3d\u5217\u8868\u3002 \u901a\u5e38\uff0c\u652f\u6301\u6ca1\u6709\u7279\u6b8a\u91cd\u65b0\u6392\u5e8f\u6216\u5b9a\u4f4d\u89c4\u5219\u7684\u6807\u51c6\u5b57\u5f62\u3002 TouchGFX \u4e2d\u5305\u542b\u4e86\u4e00\u4e9b\u5177\u6709\u7279\u6b8a\u89c4\u5219\u7684\u8bed\u8a00\uff0c\u4f8b\u5982\u5370\u5730\u8bed\uff08\u5929\u57ce\u6587\uff09\u548c\u963f\u62c9\u4f2f\u8bed\u3002"),(0,r.kt)("h3",s({},{id:"left-to-right-languages"}),"\u4ece\u5de6\u5411\u53f3\u5f0f\u8bed\u8a00"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Simple languages using Latin characters")),(0,r.kt)("p",null,"\u603b\u4f53\u800c\u8a00\uff0c\u652f\u6301\u4f7f\u7528\u65e0\u9700\u4e13\u95e8\u91cd\u65b0\u6392\u5217\u6216\u5b9a\u4f4d\u7684\u5b57\u7b26\u548c\u5b57\u5f62\u7684\u7b80\u5355\u8bed\u8a00\u3002 \u8fd9\u4e9b\u8bed\u8a00\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bosnian, Bulgarian, Croatian, Czech, Danish, Dutch, English, Estonian, Finnish, French, German, Hungarian, Italian, Latvian, Lithuanian, Norwegian, Polish, Portuguese, Romanian, Serbian, Slovenian, Slovak, Spanish, Swedish, Turkish, Ukrainian")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u7279\u6b8a\u5b57\u7b26\u96c6\u7684\u7b80\u5355\u8bed\u8a00")),(0,r.kt)("p",null,"\u4e00\u4e9b\u8bed\u8a00\u4ecd\u7136\u9075\u5faa\u7b80\u5355\u7684\u5b9a\u4f4d\u89c4\u5219\uff0c\u4f46\u4f7f\u7528\u4e0d\u540c\u7684\u5b57\u7b26\u548c\u5b57\u5f62\u96c6\u3002 \u6b64\u5916\uff0c\u8fd8\u652f\u6301\u548c\u5305\u542b\uff08\u4f46\u4e0d\u9650\u4e8e\uff09\u4ee5\u4e0b\u8bed\u8a00\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e2d\u6587\u3001\u5e0c\u814a\u8bed\u3001\u65e5\u8bed\u548c\u4fc4\u8bed")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5176\u5b83")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6709\u9650\u652f\u6301\u6cf0\u8bed\u3002 \u4f7f\u7528 TouchGFX \u89c4\u5219\uff08\u5782\u76f4\uff09\u5b9a\u4f4d\u97f3\u8c03\u6807\u8bb0\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6709\u9650\u652f\u6301\u5370\u5730\u8bed\uff08\u5929\u57ce\u4f53\uff09\u3002 \u4e00\u4e9b\u5b57\u7b26\u53ef\u4ee5\u7a0d\u5fae\u653e\u9519\uff0c\u4f46\u6587\u672c\u4e0d\u5e94\u4e0d\u53ef\u8bfb\u3002")),(0,r.kt)("h3",s({},{id:"right-to-left-languages"}),"\u4ece\u53f3\u5411\u5de6\u5f0f\u8bed\u8a00"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u7279\u6b8a\u5b57\u7b26\u96c6\u7684\u7b80\u5355\u8bed\u8a00")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hebrew, Indonesian, Kazakh")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5177\u6709\u4e0d\u540c\u5f62\u5f0f\uff08\u5355\u72ec\u3001\u521d\u59cb\u3001\u4e2d\u95f4\u548c\u6700\u7ec8\uff09\u7684\u4e0d\u7528\u8fde\u5b57\u7684\u8bed\u8a00")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u963f\u62c9\u4f2f\u8bed\uff08\u8d85\u8fc7\u56db\u4e2a\u5b57\u7b26\u7684\u5e8f\u5217\u4e0d\u4f1a\u88ab\u8bc6\u522b\u548c\u8f6c\u6362\u4e3a\u4e00\u4e2a\u8fde\u5b57\u3002 \u5305\u62ec\uff1aSallallahou Alayhe Wasallam\u3001Jallajalalouhou\u548cRial Sign\uff09\u3002 \u4e00\u4e9b\u53d8\u97f3\u7b26\u7684\u4f4d\u7f6e\u53ef\u80fd\u7a0d\u6709\u9519\u8bef\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6ce2\u65af\u8bed"),(0,r.kt)("li",{parentName:"ul"},"\u9a6c\u6765\u8bed\uff08\u4ec5\u652f\u6301\u9694\u79bb\u5f0f\u7684\u0762 \u201c\u4e0a\u65b9\u6709\u70b9\u7684Keheh\u201d\uff09")),(0,r.kt)("h2",s({},{id:"unsupported-languages"}),"\u4e0d\u652f\u6301\u7684\u8bed\u8a00"),(0,r.kt)("p",null,"\u5df2\u77e5\u4e0d\u652f\u6301\u4e0b\u5217\u5927\u91cf\u4f7f\u7528\u8fde\u5b57\u3001\u5408\u4f53\u5b57\u6bcd\u548c\u5782\u76f4\u5b9a\u4f4d\u7684\u8bed\u8a00\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e4c\u5c14\u90fd\u8bed\u3001\u7f05\u7538\u8bed")))}k.isMDXComponent=!0}}]);