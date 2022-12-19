"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[78],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),a=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=a(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=a(n),h=o,f=d["".concat(l,".").concat(h)]||d[h]||s[h]||i;return n?r.createElement(f,u(u({ref:t},p),{},{components:n})):r.createElement(f,u({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var a=2;a<i;a++)u[a]=n[a];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class o extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=o},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},37793:function(e,t,n){var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class u extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=u},24680:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return b}});var r=n(3905),o=n(37793),i=n(22425),u=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(a)for(var n of a(t))s.call(t,n)&&d(e,n,t[n]);return e};const f={id:"prerequisites",title:"\u5148\u6c7a\u689d\u4ef6"},m=void 0,g={unversionedId:"introduction/prerequisites",id:"introduction/prerequisites",title:"\u5148\u6c7a\u689d\u4ef6",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/introduction/prerequisites.mdx",sourceDirName:"introduction",slug:"/introduction/prerequisites",permalink:"/4.21/zh-TW/docs/introduction/prerequisites",draft:!1,tags:[],version:"current",frontMatter:{id:"prerequisites",title:"\u5148\u6c7a\u689d\u4ef6"},sidebar:"docs",previous:{title:"\u4ec0\u9ebc\u662fTouchGFX\uff1f",permalink:"/4.21/zh-TW/docs/introduction/what-is-touchgfx"},next:{title:"\u5b89\u88dd",permalink:"/4.21/zh-TW/docs/introduction/installation"}},v={},b=[{value:"\u5728Windows\u4e0a\u4f7f\u7528TouchGFX",id:"\u5728windows\u4e0a\u4f7f\u7528touchgfx",level:2},{value:"\u5728Linux\u4e0a\u4f7f\u7528TouchGFX",id:"\u5728linux\u4e0a\u4f7f\u7528touchgfx",level:2},{value:"\u5728Ubuntu 20.04\u4e0a\u4f7f\u7528TouchGFX",id:"\u5728ubuntu-2004\u4e0a\u4f7f\u7528touchgfx",level:3}],k={toc:b};function y(e){var t,n=e,{components:u}=n,d=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},k),d),c(t,l({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX\u4e3b\u8981\u70baWindows 10\u7cfb\u7d71\u800c\u958b\u767c\u3002 TouchGFX \u8a2d\u8a08\u5668\u53ea\u80fd\u5728Windows\u4e0a\u904b\u884c\uff0c\u4f46\u5e95\u5c64\u5de5\u5177\u4e5f\u53ef\u5728Linux\u4e0a\u904b\u884c\u3002"),(0,r.kt)("h2",h({},{id:"\u5728windows\u4e0a\u4f7f\u7528touchgfx"}),"\u5728Windows\u4e0a\u4f7f\u7528TouchGFX"),(0,r.kt)("p",null,"\u5f9e4.18\u7248\u958b\u59cb\uff0cTouchGFX\u50c5\u5728Windows 10\u4e0a\u904b\u884c\u3002"),(0,r.kt)("p",null,"TouchGFX\u9644\u5e36\u4e86\u958b\u767c\u6240\u9700\u7684\u6240\u6709\u57fa\u672c\u5de5\u5177\u3002 \u60a8\u4e0d\u9700\u8981\u5b89\u88ddC++\u7de8\u8b6f\u5668\uff0c\u56e0\u70baTouchGFX\u6346\u7d81\u4e86g++\u3002"),(0,r.kt)("p",null,"\u6709\u95dcTouchGFX\u7684\u5b89\u88dd\u548c\u5176\u4ed6\u71d2\u9304\u5de5\u5177\u7684\u8aaa\u660e\uff0c\u8acb\u53c3\u95b1",(0,r.kt)("a",h({parentName:"p"},{href:"installation"}),"\u5b89\u88dd\u6587\u7ae0"),"\u3002"),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u5982\u679c\u60a8\u7684\u7cfb\u7d71\u662fWindows 7\uff0c\u8acb\u7e7c\u7e8c\u4f7f\u75284.16\u7248\u672c\u3002 \u4e0d\u8981\u66f4\u65b0\u5230\u8f03\u65b0\u7684\u7248\u672c\u3002"),(0,r.kt)("h2",h({},{id:"\u5728linux\u4e0a\u4f7f\u7528touchgfx"}),"\u5728Linux\u4e0a\u4f7f\u7528TouchGFX"),(0,r.kt)("p",null,"TouchGFX\u4e5f\u53ef\u4ee5\u5728Linux\u4e0a\u4f7f\u7528\uff0c\u5373\u4f7fTouchGFX Designer\u4e0d\u80fd\u5728Linux\u4e0a\u904b\u884c\uff0cTouchGFX Designer\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u4e5f\u53ef\u4ee5\u5728Linux\u548cWindows\u4e0a\u904b\u884c\u3002"),(0,r.kt)("p",null,"\u5efa\u8b70\u7684\u89e3\u6c7a\u65b9\u6848\u662f\u5728\u904b\u884cWindows\u7684\u865b\u64ec\u6a5f\u5668\u4e2d\u904b\u884cTouchGFX Designer\u3002 \u5f9e\u800c\u5141\u8a31\u958b\u767c\u4eba\u54e1\u5728\u9700\u8981\u6642\u4f7f\u7528\u8a2d\u8a08\u5668\uff0c\u4e26\u5728\u5176\u4ed6\u5730\u65b9\u4f7f\u7528\u5e38\u898f\u7684Linux\u7cfb\u7d71\u3002"),(0,r.kt)("p",null,"\u5728Linux\u4e0a\u4f7f\u7528TouchGFX\u9700\u8981\u4e00\u4e9b\u984d\u5916\u7684\u5de5\u5177\u548c\u5eab\u3002 \u4e0b\u4e00\u7bc0\u5c07\u5c0dUbuntu\u9032\u884c\u8aaa\u660e\u3002 Linux\u5176\u4ed6\u767c\u884c\u7248\u672c\u7684\u8981\u6c42\u8207\u6b64\u985e\u4f3c\u3002"),(0,r.kt)("h3",h({},{id:"\u5728ubuntu-2004\u4e0a\u4f7f\u7528touchgfx"}),"\u5728Ubuntu 20.04\u4e0a\u4f7f\u7528TouchGFX"),(0,r.kt)("p",null,"\u5728\u5168\u65b0\u7684Ubuntu 20.04 LTS\u4e2d\u4f7f\u7528TouchGFX\u5de5\u5177\u4e4b\u524d\uff0c\u60a8\u9700\u8981\u5b89\u88dd\u4ee5\u4e0b\u8edf\u9ad4:"),(0,r.kt)("p",null,"\u9996\u5148\u5b89\u88ddruby\uff1a\u6307\u4ee4\u662f"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"sudo apt install ruby\n")),(0,r.kt)("p",null,"\u70ba\u60a8\u63d0\u4f9b2.7\u7248\u7684ruby\u3002 Windows\u4e0a\u7684TouchGFX\u5305\u62ec3.0\u7248\u672c\uff0c\u4f46\u8a72\u7248\u672c\u76ee\u524d\u5728Ubuntu\u5b58\u5132\u5eab\u4e2d\u4e0d\u53ef\u7528\u3002 2.7\u7248\u672c\u61c9\u8a72\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528\u3002"),(0,r.kt)("p",null,'\u63a5\u4e0b\u4f86\u5b89\u88dd"roo" gem:'),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"sudo gem install roo\n")),(0,r.kt)("p",null,"\u5b89\u88ddmake\u548cg++\uff0c\u4ee5\u4fbf\u7de8\u8b6fC++\u7a0b\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"sudo  apt install make g++\n")),(0,r.kt)("p",null,"\u6700\u5f8c\u4e00\u90e8\u5206\u662fSDL2\u5eab\u548c\u6a19\u982d\u6a94\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"sudo apt install libsdl2-dev libsdl2-image-dev\n")),(0,r.kt)("p",null,"\u9ed8\u8a8d\u7684g++\u7248\u672c\u70ba9.3.0\u7248\u3002 \u6b64\u7248\u672c\u4f7f\u7528\u7684\u8b66\u544a\u7d1a\u5225\u4e0d\u540c\u65bcTouchGFX\u4e2d\u5305\u542b\u7684\u9069\u7528\u65bcWindows\u7684g++\u3002 \u5fc5\u9808\u5c0d\u6a21\u64ec\u5668\u7684g++\u6a19\u8a8c\u548c\u9023\u7d50\u5668\u6a19\u8a8c\u9032\u884c\u5169\u9805\u66f4\u6539\uff1a"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"config/gcc/app.mk"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{15-16}","{15-16}":!0}),"# Copyright (c) 2018(-2021) STMicroelectronics.\n# \u4fdd\u7559\u6240\u6709\u6b0a\u5229\u3002\n# # \u6b64\u6a94\u662fTouchGFX 4.18.1\u767c\u884c\u7248\u672c\u7684\u4e00\u90e8\u5206\u3002\n# # \u8a72\u8edf\u9ad4\u7684\u8a31\u53ef\u689d\u6b3e\u53ef\u5728\u8edf\u9ad4\u5143\u4ef6\u6839\u76ee\u9304\u4e2d\u7684#LICENSE\u6a94\u4e2d\u627e\u5230\u3002\n# \u5982\u679c\u6b64\u8edf\u9ad4\u6c92\u6709\u9644\u5e36\u6388\u6b0a\u6a94\u6848\uff0c\u5247\u8868\u793a\u5176\u6309\u539f\u59cb\u72c0\u614b\u63d0\u4f9b\u3002\n#\n###############################################################################/\n# Relative location of the TouchGFX framework from root of application\ntouchgfx_path := ../../../touchgfx\n\n# Optional additional compiler flags\nuser_cflags := -DUSE_BPP=16 -Wformat-truncation=0\nlinker_options := -no-pie\n")),(0,r.kt)("p",null,"Linux ruby\u5c07\u5411\u60a8\u767c\u51fa\u8b66\u544a\uff0c\u56e0\u70baTouchGFX\u6a94\u4f7f\u7528\u7684\u662fWindows\u884c\u5c3e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"ruby: warning: shebang line ending with \\r may cause problems\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u904e\u5c07\u5169\u500b\u6a94\u66f4\u6539\u70baUnix\u884c\u5c3e\uff08\u6216\u522a\u9664\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"#\uff01"),"\u958b\u982d\u7684\u6574\u500b\u7b2c\u4e00\u884c\uff09\u4f86\u522a\u9664\u6b64\u8b66\u544a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"dos2unix touchgfx/framework/tools/textconvert/main.rb\ndos2unix touchgfx/framework/tools/videoconvert/videoconvert.rb\n")))}y.isMDXComponent=!0}}]);