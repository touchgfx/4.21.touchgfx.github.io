"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7217],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),g=a,d=s["".concat(u,".").concat(g)]||s[g]||c[g]||i;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},82985:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}t.Z=a},68904:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return v},default:function(){return y},frontMatter:function(){return f},metadata:function(){return h},toc:function(){return w}});var r=n(3905),a=n(44035),i=n(82985),l=n(29415),o=n(39130),u=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))g.call(t,n)&&d(e,n,t[n]);return e};const f={id:"config-view",title:"\u914d\u7f6e\u5716"},v=void 0,h={unversionedId:"development/ui-development/designer-user-guide/config-view",id:"development/ui-development/designer-user-guide/config-view",title:"\u914d\u7f6e\u5716",description:"",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/config-view.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/config-view",permalink:"/4.21/zh-TW/docs/development/ui-development/designer-user-guide/config-view",draft:!1,tags:[],version:"current",frontMatter:{id:"config-view",title:"\u914d\u7f6e\u5716"},sidebar:"docs",previous:{title:"\u6587\u5b57\u8996\u5716",permalink:"/4.21/zh-TW/docs/development/ui-development/designer-user-guide/texts-view"},next:{title:"\u4ea4\u4e92",permalink:"/4.21/zh-TW/docs/development/ui-development/designer-user-guide/interactions-view"}},b={},w=[{value:"General (\u4e00\u822c)",id:"general",level:2},{value:"Display (\u986f\u793a\u5668)",id:"display",level:2},{value:"Default Image Configuration (\u9810\u8a2d\u5716\u50cf\u914d\u7f6e)",id:"default-image-configuration",level:2},{value:"Text Configuration (\u6587\u5b57\u914d\u7f6e)",id:"text-configuration",level:2},{value:"Simulator (\u6a21\u64ec\u5668)",id:"simulator",level:2},{value:"Build (\u5efa\u69cb)",id:"build",level:2},{value:"Framework Features (\u6846\u67b6\u7279\u6027)",id:"framework-features",level:2}],N={toc:w};function y(e){var t,n=e,{components:u}=n,d=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=k(k({},N),d),p(t,m({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u5728\u201c\u914d\u7f6e\u5716\u201d\u4e2d\u7684\u4ee5\u4e0b\u90e8\u5206\uff0c\u53ef\u4ee5\u914d\u7f6e\u4f5c\u7528\u65bc\u5c08\u6848\u7684\u5404\u7a2e\u8a2d\u7f6e\uff1a ",(0,r.kt)("a",k({parentName:"p"},{href:"#general"}),"General (\u4e00\u822c)"),", ",(0,r.kt)("a",k({parentName:"p"},{href:"#display"}),"Display (\u986f\u793a\u5668)"),", ",(0,r.kt)("a",k({parentName:"p"},{href:"#default-image-configuration"}),"Default Image Configuration (\u9810\u8a2d\u5716\u50cf\u914d\u7f6e)"),", ",(0,r.kt)("a",k({parentName:"p"},{href:"#text-configuration"}),"Text Configuration (\u6587\u5b57\u914d\u7f6e)"),", ",(0,r.kt)("a",k({parentName:"p"},{href:"#simulator"}),"Simulator (\u6a21\u64ec\u5668)"),", ",(0,r.kt)("a",k({parentName:"p"},{href:"#simulator"}),"Build (\u69cb\u5efa)")," \u548c",(0,r.kt)("a",k({parentName:"p"},{href:"#framework-features"}),"Framework Features (\u6846\u67b6\u7279\u6027)"),"\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-4.17.webp",mdxType:"Figure"},"\u201c\u914d\u7f6e\u5716\u201d\u4e2d\u7684\u4e00\u822c\u8a2d\u7f6e"),(0,r.kt)("h2",k({},{id:"general"}),"General (\u4e00\u822c)"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-general-4.17.webp",mdxType:"Figure"},"\u201c\u914d\u7f6e\u5716\u201d\u4e2d\u7684\u4e00\u822c\u8a2d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Application Name (\u61c9\u7528\u540d\u7a31)"),(0,r.kt)("br",null)," \u61c9\u7528\u540d\u7a31\u662f\u4e00\u500b\u552f\u8b80\u6b04\u4f4d\uff0c\u986f\u793a\u5275\u5efa\u61c9\u7528\u6642\u70ba\u61c9\u7528\u9078\u64c7\u7684\u540d\u7a31\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TouchGFX Board Setup (\u958b\u767c\u677f\u8a2d\u7f6e)"),(0,r.kt)("br",null),"\u8a72\u6b04\u4f4d\u986f\u793a\u5275\u5efa\u61c9\u7528\u6642\u4f7f\u7528\u7684TouchGFX\u958b\u767c\u677f\u8a2d\u7f6e\uff0c\u5982\u679c\u6b64\u8cc7\u8a0a\u672a\u4f7f\u7528\uff0c\u5c07\u986f\u793a\u201cN/A\u201d\u3002",(0,r.kt)("br",null),"\u5982\u679c\u4f7f\u7528\u6b64\u8cc7\u8a0a\uff0c\u5c07\u986f\u793aTouchGFX\u958b\u767c\u677f\u8a2d\u7f6e\u7684\u540d\u7a31\u548c\u7248\u672c\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Selected Language (\u9078\u64c7\u7684\u8a9e\u8a00)"),(0,r.kt)("br",null)," \u6b64\u4e0b\u62c9\u6e05\u55ae\u5305\u542b\u5728",(0,r.kt)("a",k({parentName:"p"},{href:"texts-view"}),"Texts (\u6587\u5b57)"),"\u4e2d\u914d\u7f6e\u7684\u8a9e\u8a00\uff0c\u7528\u65bc\u9078\u64c7\u5c08\u6848\u555f\u52d5\u6642\u61c9\u986f\u793a\u7684\u8a9e\u8a00\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Skin (\u76ae\u819a)"),(0,r.kt)("br",null)," \u6b64\u4e0b\u62c9\u6e05\u55ae\u8a2d\u7f6e\u5169\u7a2e\u5167\u5efa\u7684\u98a8\u683c\u4ee5\u652f\u63f4\u98a8\u683c\u8a2d\u7f6e\u7684\u5c0f\u5de5\u5177\u4f7f\u7528\uff0c\u53ef\u4ee5\u9078\u64c7\u201c\u85cd\u8272\u201d\u6216\u201c\u9ed1\u8272\u201d\u3002 ",(0,r.kt)("em",{parentName:"p"},"\u5982\u679c\u5c0f\u5de5\u5177\u5df2\u914d\u7f6e\u201c\u85cd\u8272\u201d\u76ae\u819a\u7684\u98a8\u683c\uff0c\u5c07\u76ae\u819a\u66f4\u6539\u70ba\u201c\u9ed1\u8272\u201d\uff0c\u5c0f\u5de5\u5177\u5c07\u81ea\u52d5\u5207\u63db\u81f3\u201c\u9ed1\u8272\u201d\u76ae\u819a\u7684\u76f8\u61c9\u98a8\u683c\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Startup Screen (\u555f\u52d5\u756b\u9762)"),(0,r.kt)("br",null)," \u6b64\u4e0b\u62c9\u6e05\u55ae\u5305\u542b\u6240\u6709\u5df2\u6dfb\u52a0\u5230\u5c08\u6848\u7684\u87a2\u5e55\uff0c\u7528\u65bc\u9078\u64c7\u5728\u5c08\u6848\u555f\u52d5\u6642\u8981\u986f\u793a\u7684\u87a2\u5e55\u3002"),(0,r.kt)("h2",k({},{id:"display"}),"Display (\u986f\u793a\u5668)"),(0,r.kt)("p",null,"\u5728\u8a72\u5340\u57df\uff0c\u53ef\u4ee5\u914d\u7f6e\u986f\u793a\u5668\u8a2d\u7f6e\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-display-4.17.webp",mdxType:"Figure"},"\u201c\u914d\u7f6e\u5716\u201d\u4e2d\u7684\u986f\u793a\u5668\u8a2d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dimensions"),(0,r.kt)("br",null)," \u986f\u793a\u7684\u5927\u5c0f\u53ef\u4ee5\u900f\u904e ",(0,r.kt)("em",{parentName:"p"},"W(\u5bec\u5ea6) "),"\u548c",(0,r.kt)("em",{parentName:"p"},"H(\u9ad8\u5ea6)")," \u5c6c\u6027\u9032\u884c\u8a2d\u7f6e\u3002 \u4f46\u662f\uff0c\u5982\u679c\u5df2\u7d93\u901a\u904eTouchGFX\u958b\u767c\u677f\u8a2d\u7f6e\u914d\u7f6e\u4e86\u5c3a\u5bf8\uff0c\u5c3a\u5bf8\u914d\u7f6e\u6703\u88ab\u7981\u7528\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Display Orientation (\u986f\u793a\u5668\u65b9\u5411)"),(0,r.kt)("br",null)," \u986f\u793a\u5668\u65b9\u5411\u53ef\u4ee5\u5728\u6a6b\u5c4f\u548c\u8c4e\u5c4f\u4e4b\u9593\u5207\u63db\u3002 \u9019\u9084\u6703\u5f71\u97ff\u5c08\u6848\u4e2d\u6240\u7528\u5716\u50cf\u8f49\u63db\u70bacpp\u6a94\u7684\u65b9\u5f0f\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Color Depth (\u8272\u6df1)"),(0,r.kt)("br",null),"\u6b64\u4e0b\u62c9\u6e05\u55ae\u5305\u542b\u53ef\u4f9b\u5c08\u6848\u4f7f\u7528\u7684\u8272\u6df1\u3002 \u9019\u4e9b\u90fd\u53d6\u6c7a\u65bc\u5275\u5efa\u5c08\u6848\u6642\u4f7f\u7528\u7684TouchGFX\u958b\u767c\u677f\u8a2d\u7f6e\u3002"),(0,r.kt)("h2",k({},{id:"default-image-configuration"}),"Default Image Configuration (\u9810\u8a2d\u5716\u50cf\u914d\u7f6e)"),(0,r.kt)("p",null,"\u5728\u8a72\u5340\u57df\uff0c\u53ef\u4ee5\u8a2d\u7f6e\u5c08\u6848\u4e2d\u7684\u5716\u50cf\u4f7f\u7528\u7684\u9810\u8a2d\u8a2d\u7f6e\u3002 \u9019\u4e9b\u8a2d\u7f6e\u5c07\u4f5c\u7528\u65bc\u5c08\u6848\u4e2d\u7684\u6240\u6709\u5716\u50cf\uff0c\u9664\u975e\u5b83\u5011\u5728",(0,r.kt)("a",k({parentName:"p"},{href:"images-view"}),"\u5716\u50cf"),"\u8996\u5716\u4e2d\u88ab\u8986\u84cb"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-default-image-configuration-4.17.webp",mdxType:"Figure"},"\u201c\u914d\u7f6e\u5716\u201d\u4e2d\u7684\u201c\u9810\u8a2d\u5716\u50cf\u914d\u7f6e\u201d\u8a2d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Opaque Image Format (\u4e0d\u900f\u660e\u5716\u50cf\u683c\u5f0f)"),(0,r.kt)("br",null)," \u6b64\u4e0b\u62c9\u6e05\u55ae\u8a2d\u7f6e\u751f\u6210\u51fa\u7684\u4e0d\u900f\u660e\u50cf\u7d20\u8cc7\u6599\u7684\u5716\u50cf\u683c\u5f0f\u3002 \u6b64\u4e0b\u62c9\u6e05\u55ae\u4e2d\u7684\u53ef\u7528\u5716\u50cf\u683c\u5f0f\u53d6\u6c7a\u65bc\u5c08\u6848\u7684\u9078\u5b9a\u8272\u6df1\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Non Opaque Image Format (\u900f\u660e\u5716\u50cf\u683c\u5f0f)"),(0,r.kt)("br",null)," \u6b64\u4e0b\u62c9\u6e05\u55ae\u8a2d\u7f6e\u61c9\u4ee5\u54ea\u7a2e\u683c\u5f0f\u751f\u6210\u900f\u660e\u50cf\u7d20\u8cc7\u6599\u7684\u5716\u50cf\u3002 \u6b64\u4e0b\u62c9\u6e05\u55ae\u4e2d\u7684\u53ef\u7528\u5716\u50cf\u683c\u5f0f\u53d6\u6c7a\u65bc\u5c08\u6848\u7684\u9078\u5b9a\u8272\u6df1\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Section (\u5340\u6bb5)"),(0,r.kt)("br",null)," \u6b64\u4e0b\u62c9\u6e05\u55ae\u8a2d\u7f6e\u5716\u50cf\u8cc7\u6599\u5728\u76ee\u6a19\u786c\u9ad4\u4e0a\u7684\u5b58\u5132\u4f4d\u7f6e\u3002 \u6b64\u4e0b\u62c9\u6e05\u55ae\u4e2d\u7684\u53ef\u7528\u5206\u5340\u53d6\u6c7a\u65bc\u5275\u5efa\u5c08\u6848\u6642\u4f7f\u7528\u7684TouchGFX\u958b\u767c\u677f\u8a2d\u7f6e\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extra Section (\u984d\u5916\u5340\u6bb5)"),(0,r.kt)("br",null)," \u5728\u4f7f\u7528L8\u5716\u50cf\u683c\u5f0f\u6642\uff0c\u60a8\u53ef\u4ee5\u9078\u64c7\u4f7f\u7528\u6b64\u4e0b\u62c9\u6e05\u55ae\u5c07\u984f\u8272\u8868\u5b58\u5132\u5728\u53e6\u4e00\u500b\u5206\u5340\u3002 \u6b64\u4e0b\u62c9\u6e05\u55ae\u4e2d\u7684\u53ef\u7528\u5206\u5340\u53d6\u6c7a\u65bc\u5275\u5efa\u5c08\u6848\u6642\u4f7f\u7528\u7684TouchGFX\u958b\u767c\u677f\u8a2d\u7f6e\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dither Algorithm (\u6296\u52d5\u6f14\u7b97\u6cd5)"),(0,r.kt)("br",null)," \u6b64\u4e0b\u62c9\u6e05\u55ae\u8a2d\u7f6e\u5716\u50cf\u4f7f\u7528\u7684\u6296\u52d5\u6f14\u7b97\u6cd5\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No dither: ",(0,r.kt)("em",{parentName:"li"},"\u5c0d\u5716\u50cf\u4e0d\u4f7f\u7528\u6296\u8272\u6f14\u7b97\u6cd5\uff0c \u7531\u65bc\u4e0d\u505a\u4efb\u4f55\u6539\u8b8a\uff0c\u56e0\u6b64\u9019\u662f\u6027\u80fd\u6700\u9ad8\u7684\u8a2d\u7f6e\u3002 \u4f46\u662f\uff0c\u8272\u6df1\u8f03\u4f4e\u6642\u53ef\u80fd\u6703\u770b\u5230\u5716\u50cf\u54c1\u8cea\u4e0b\u964d\uff0c\u5177\u9ad4\u53d6\u6c7a\u65bc\u5716\u50cf\u3002")),(0,r.kt)("li",{parentName:"ul"},"Floyd-Steinberg\u6f14\u7b97\u6cd5: ",(0,r.kt)("em",{parentName:"li"},"\u5c07\u8aa4\u5dee\u64f4\u6563\u5230\u76f8\u9130\u50cf\u7d20\uff0c\u5c0e\u81f4\u7d30\u7d30\u5fae\u6027\u6296\u52d5\uff0c\u4f46\u6703\u72a7\u7272\u6e05\u6670\u3002")),(0,r.kt)("li",{parentName:"ul"},"Jarvis\u3001Judice\u548cNinke\u6f14\u7b97\u6cd5: ",(0,r.kt)("em",{parentName:"li"},"\u8207Floyd-Steinberg\u6f14\u7b97\u6cd5\u76f8\u6bd4\uff0c\u5c07\u8aa4\u5dee\u9032\u4e00\u6b65\u64f4\u6563\u5230\u66f4\u9060\u50cf\u7d20\uff0c\u56e0\u6b64\u6296\u52d5\u66f4\u7c97\u7cd9\uff0c\u4f46\u5716\u50cf\u66f4\u6e05\u6670\u3002 3\u7a2e\u8aa4\u5dee\u64f4\u6563\u6296\u52d5\u6f14\u7b97\u6cd5\u4e2d\u6700\u6162\u7684\u4e00\u7a2e\u3002")),(0,r.kt)("li",{parentName:"ul"},"Stucki\u6f14\u7b97\u6cd5: ",(0,r.kt)("em",{parentName:"li"},"\u57fa\u65bc\u6700\u5c0f\u5e73\u5747\u8aa4\u5dee\u6296\u52d5\uff0c\u4f46\u66f4\u5feb\u66f4\u6e05\u6670\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Alpha Dither (Alpha\u6296\u52d5)"),(0,r.kt)("br",null)," \u6b64\u4e0b\u62c9\u6e05\u55ae\u8a2d\u7f6e\u662f\u5426\u901a\u904eAlpha\u901a\u9053\u4f7f\u7528\u6296\u52d5\u6f14\u7b97\u6cd5\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Layout Rotaion"),(0,r.kt)("br",null)," \u6b64\u4e0b\u62c9\u6e05\u55ae\u6307\u5b9a\u5716\u50cf\u8cc7\u6599\u751f\u6210\u6642\u7684\u65cb\u8f49\u3002 \u5982\u679c\u87a2\u5e55\u65b9\u5411\u767c\u751f\u8b8a\u5316\uff0c\u4f7f\u7528\u6b64\u4e0b\u62c9\u6e05\u55ae\u6309\u65b0\u65b9\u5411\u6b63\u78ba\u6e32\u67d3\u5716\u50cf\u3002"),(0,r.kt)("h2",k({},{id:"text-configuration"}),"Text Configuration (\u6587\u5b57\u914d\u7f6e)"),(0,r.kt)("p",null,"\u5728\u8a72\u5340\u57df\uff0c\u53ef\u901a\u904e\u9078\u64c7\u7b26\u5408\u5c08\u6848\u9700\u6c42\u7684\u9078\u9805\u4f86\u914d\u7f6e\u6587\u5b57\u6e32\u67d3\u548c\u5b58\u5132\u9078\u9805\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-text-configuration-4.17.webp",mdxType:"Figure"},"\u201c\u914d\u7f6e\u5716\u201d\u4e2d\u7684\u201cText Configuration (\u6587\u5b57\u914d\u7f6e)\u201d\u8a2d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Remap texts (\u91cd\u65b0\u6620\u5c04\u6587\u5b57)"),(0,r.kt)("br",null)," \u6b64\u9078\u9805\u5b9a\u7fa9\u76f8\u540c\u8f49\u63db\u662f\u5426\u61c9\u91cd\u65b0\u6620\u5c04\u3002 \u91cd\u65b0\u6620\u5c04\u6587\u5b57\u5c07\u5728\u6240\u6709\u8a9e\u8a00\uff0c\u5b57\u5143\u8868\u4ee5\u53ca\u5c0d\u9f4a\u65b9\u5f0f\u4e2d\u5c07\u76f8\u540c\u7684\u7ffb\u8b6f\u53ca\u5c3e\u78bc\u7d71\u4e00\u8d77\u4f86\uff0c\u9019\u5c07\u7e2e\u6e1b\u8cc7\u6599\u5927\u5c0f\u3002 ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"\u8a72\u9078\u9805\u8207'\u4e8c\u9032\u4f4d\u7ffb\u8b6f\u6a94'\u9078\u9805\u4e92\u65a5\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A4"),(0,r.kt)("br",null)," \u6b64\u9078\u9805\u5b9a\u7fa9\u5b57\u5f62\u7684\u6c34\u5e73\u50cf\u7d20\u8cc7\u6599\u662f\u5426\u63a1\u7528A4\u683c\u5f0f ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"\u8a72\u9078\u9805\u53ea\u5f71\u97ff\u914d\u7f6e\u70ba4bp\u7684\u5b57\u5f62\u8868")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Binary translation files\uff08\u4e8c\u9032\u4f4d\u7ffb\u8b6f\u6a94\uff09"),(0,r.kt)("br",null)," \u6b64\u9078\u9805\u5b9a\u7fa9\u662f\u5426\u5c07\u5c08\u6848\u4e2d\u7684\u8b6f\u6587\u79fb\u52d5\u5230\u53ef\u5728\u57f7\u884c\u6642\u9593\u8f09\u5165\u7684\u4e8c\u9032\u4f4d\u6a94\u6848\u4e2d\u3002 ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"\u8a72\u9078\u9805\u8207\u2018\u91cd\u65b0\u6620\u5c04\u6587\u5b57\u2019\u9078\u9805\u4e92\u65a5\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Binary font files (\u4e8c\u9032\u4f4d\u5b57\u9ad4\u6a94)"),(0,r.kt)("br",null)," \u6b64\u9078\u9805\u5b9a\u7fa9\u662f\u5426\u61c9\u5c07\u5c08\u6848\u4e2d\u7684\u5b57\u9ad4\u6a94\u79fb\u52d5\u5230\u53ef\u5728\u57f7\u884c\u6642\u9593\u8f09\u5165\u7684\u4e8c\u9032\u4f4d\u6a94\u6848\u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mapped storage format (\u6620\u5c04\u5b58\u5132\u683c\u5f0f)"),(0,r.kt)("br",null)," \u6b64\u9078\u9805\u5b9a\u7fa9\u662f\u5426\u61c9\u5c07\u5c08\u6848\u4e2d\u7684\u5b57\u9ad4\u6a94\u4ee5\u6620\u5c04\u5b58\u5132\u683c\u5f0f\u8f38\u51fa\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Unmapped storage format (\u672a\u6620\u5c04\u5b58\u5132\u683c\u5f0f)"),(0,r.kt)("br",null)," \u6b64\u9078\u9805\u5b9a\u7fa9\u662f\u5426\u61c9\u5c07\u5c08\u6848\u4e2d\u7684\u5b57\u9ad4\u6a94\u4ee5\u672a\u6620\u5c04\u5b58\u5132\u683c\u5f0f\u8f38\u51fa\u3002"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)(o.Z,{to:"../touchgfx-engine-features/texts-and-fonts",mdxType:"Link"},"Text and Fonts")),(0,r.kt)("h2",k({},{id:"simulator"}),"Simulator (\u6a21\u64ec\u5668)"),(0,r.kt)("p",null,"\u5728\u8a72\u5340\u57df\uff0c\u53ef\u4ee5\u5728\u904b\u884c\u6a21\u64ec\u5668\u6642\u70ba\u5176\u6dfb\u52a0\u76ae\u819a\u3002 \u53ef\u4ee5\u70ba\u6a6b\u5c4f\u548c\u8c4e\u5c4f\u986f\u793a\u5c08\u6848\u6dfb\u52a0\u76ae\u819a\u3002 ",(0,r.kt)("em",{parentName:"p"},"X "),"\u548c",(0,r.kt)("em",{parentName:"p"},"Y "),"\u5c6c\u6027\u6c7a\u5b9a\u6a21\u64ec\u5668\u5728\u76ae\u819a\u4e2d\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-4.17.webp",mdxType:"Figure"},"\u201c\u914d\u7f6e\u5716\u201d\u4e2d\u7684\u6a21\u64ec\u5668\u8a2d\u7f6e"),(0,r.kt)("p",null,"\u4e0b\u9762\u5c31\u662f\u4e00\u500b\u5e36\u76ae\u819a\u6a21\u64ec\u5668\u904b\u884c\u6642\u7684\u7bc4\u4f8b\u3002 ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"\u7576\u5e36\u76ae\u819a\u7684\u6a21\u64ec\u5668\u904b\u884c\u6642\uff0c\u6a19\u6e96\u8996\u7a97\u63a7\u5236\u9805\u6703\u88ab\u96b1\u85cf\u8d77\u4f86\u3002 \u95dc\u9589\u6a21\u64ec\u5668\u8acb\u6309")," ",(0,r.kt)(i.Z,{mdxType:"Shortcut"},"Esc\u9375")),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-skin.webp",mdxType:"Figure"},"\u904b\u884c\u4e2d\u7684\u6709\u76ae\u819a\u7684\u6a21\u64ec\u5668"),(0,r.kt)("h2",k({},{id:"build"}),"Build (\u5efa\u69cb)"),(0,r.kt)("p",null,"\u5728\u8a72\u5340\u57df\uff0c\u53ef\u4ee5\u91cd\u5beb\u9ede\u64ca",(0,r.kt)("a",k({parentName:"p"},{href:"main-window#run-simulator"}),"\u201cRun Simulator (\u904b\u884c\u6a21\u64ec\u5668)\u201d"),"\u3001",(0,r.kt)("a",k({parentName:"p"},{href:"main-window#run-target"}),"\u201cRun Target (\u904b\u884c\u76ee\u6a19)\u201d"),"\u548c",(0,r.kt)("a",k({parentName:"p"},{href:"main-window#generate-code"}),"\u201cGenerate Code (\u751f\u6210\u7a0b\u5f0f\u78bc)\u201d"),"\u6642\u57f7\u884c\u7684\u6307\u4ee4\u3002"),(0,r.kt)("p",null,"\u5982\u9700\u91cd\u5beb\u6307\u4ee4\uff0c\u53ea\u9700\u5728\u6587\u5b57\u65b9\u584a\u4e2d\u5beb\u5165\u4efb\u610f\u6307\u4ee4\u3002 \u5982\u9700\u5728\u91cd\u5beb\u5f8c\u91cd\u7f6e\u6307\u4ee4\uff0c\u9ede\u64ca\u6307\u4ee4\u540d\u7a31\u65c1\u908a\u7684\u201cReset (\u91cd\u7f6e)\u201d\u6a19\u7c64\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-build-4.17.webp",mdxType:"Figure"},"\u201c\u914d\u7f6e\u5716\u201d\u4e2d\u7684\u5efa\u69cb\u8a2d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Generate Assets Command (\u751f\u6210\u8cc7\u7522\u6307\u4ee4)"),(0,r.kt)("br",null)),(0,r.kt)("p",null,"\u901a\u5e38\u8a2d\u7f6e\u6b64\u6307\u4ee4\u4f86\u751f\u6210\u6587\u5b57\u548c\u5716\u50cf\uff0c\u5728TouchGFX Designer\u751f\u6210\u7a0b\u5f0f\u78bc\u5f8c\u57f7\u884c\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Post Generate Command (\u767c\u4f48\u751f\u6210\u6307\u4ee4)"),(0,r.kt)("br",null)," \u6b64\u6307\u4ee4\u901a\u5e38\u7528\u65bc\u66f4\u65b0\u5404\u7a2e\u5c08\u6848\u6a94\u6848\u3002 \u5167\u7f6e\u6307\u4ee4\u5217\u5de5\u5177",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx update_project"),"\u652f\u63f4\u66f4\u65b0\u4ee5\u4e0b\u5c08\u6848\u6a94\u6848\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Visual Studio (.vcxproj)"),(0,r.kt)("li",{parentName:"ul"},"Keil (.uvprojx)"),(0,r.kt)("li",{parentName:"ul"},"IAR (.ewp & .ipcf)"),(0,r.kt)("li",{parentName:"ul"},"STM32CubeIDE (.project & .cproject)"),(0,r.kt)("li",{parentName:"ul"},"STM32CubeMX (.ioc)")),(0,r.kt)("p",null,"\u4f46\u662f\uff0c\u53ef\u4ee5\u5728\u9019\u88e1\u5beb\u5165\u4efb\u4f55\u9700\u8981\u5728\u751f\u6210\u7a0b\u5f0f\u78bc\u5f8c\u57f7\u884c\u7684\u6307\u4ee4\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Compile Simulator Command (\u7de8\u8b6f\u6a21\u64ec\u5668\u6307\u4ee4)"),(0,r.kt)("br",null)," \u8a72\u6307\u4ee4\u901a\u5e38\u901a\u904e\u57f7\u884cTouchGFX Designer\u751f\u6210\u7684Makefile\u4f86\u57f7\u884c\u6a21\u64ec\u5668\u7684\u5c08\u6848\u7de8\u8b6f\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Run Simulator Command (\u904b\u884c\u6a21\u64ec\u5668\u6307\u4ee4)"),(0,r.kt)("br",null)," \u8a72\u6307\u4ee4\u57f7\u884csimulator.exe\u7684\u555f\u52d5\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Post Generate Target Command (\u767c\u4f48\u751f\u6210\u76ee\u6a19\u6307\u4ee4)"),(0,r.kt)("br",null)," \u8a72\u6307\u4ee4\u901a\u5e38\u7528\u65bc\u66f4\u65b0\u5404\u7a2e\u5c08\u6848\u6a94\u6848\uff0c\u591a\u6578\u70baSTM32CubeMX (.ioc) \u5c08\u6848\u6a94\u6848\u3002"),(0,r.kt)("p",null,"\u4f46\u662f\uff0c\u53ef\u4ee5\u5728\u9019\u88e1\u5beb\u5165\u4efb\u4f55\u9700\u8981\u5728\u751f\u6210\u7a0b\u5f0f\u78bc\u5f8c\u57f7\u884c\u7684\u6307\u4ee4\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Compile Target Command (\u7de8\u8b6f\u76ee\u6a19\u6307\u4ee4)"),(0,r.kt)("br",null)," \u8a72\u6307\u4ee4\u57f7\u884c\u76ee\u6a19\u786c\u9ad4\u7684\u5c08\u6848\u7de8\u8b6f\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Flash Target Command (\u5feb\u9583\u8a18\u61b6\u9ad4\u76ee\u6a19\u6307\u4ee4)"),(0,r.kt)("br",null),"\u8a72\u6307\u4ee4\u57f7\u884c\u5c08\u6848\u5230\u76ee\u6a19\u786c\u9ad4\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u3002"),(0,r.kt)("h2",k({},{id:"framework-features"}),"Framework Features (\u6846\u67b6\u7279\u6027)"),(0,r.kt)("p",null,"\u5728\u8a72\u5340\u57df\uff0c\u53ef\u4ee5\u555f\u7528/\u7981\u7528\u6846\u67b6\u4e2d\u7684\u7279\u6027\uff0c\u7279\u5225\u662f\u7d0b\u7406\u6620\u5c04\u5668\u5c0f\u5de5\u5177\u652f\u63f4\u7684\u5716\u50cf\u683c\u5f0f\u3002 \u53ef\u7528\u65bc\u512a\u5316\u76ee\u6a19\u786c\u9ad4\u4e0a\u5c08\u6848\u4f54\u7528\u7684\u7a0b\u5f0f\u78bc\u91cf\u3002"),(0,r.kt)("p",null,"\u672c\u90e8\u5206\u986f\u793a\u7684\u53ef\u7528\u9078\u9805\u53d6\u6c7a\u65bc\u70ba\u5c08\u6848\u9078\u64c7\u7684\u8272\u6df1\u3002 \u4e0b\u5716\u986f\u793a\u4e8624\u4f4d\u5143\u8272\u6df1\u7d0b\u7406\u6620\u5c04\u5668\u7684\u5716\u50cf\u683c\u5f0f\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-framework-features-4.17.webp",mdxType:"Figure"},"\u201c\u914d\u7f6e\u5716\u201d\u4e2d24bpp\u7684\u6846\u67b6\u7279\u6027\u8a2d\u7f6e"))}y.isMDXComponent=!0}}]);