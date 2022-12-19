"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3233],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=a},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},31105:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return g},metadata:function(){return v},toc:function(){return y}});var r=n(3905),o=n(44035),i=n(29415),a=n(39130),c=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))d.call(t,n)&&m(e,n,t[n]);return e};const g={id:"widgets-and-containers",title:"\u63a7\u4ef6\u548c\u5bb9\u5668"},f=void 0,v={unversionedId:"development/ui-development/working-with-touchgfx/widgets-and-containers",id:"development/ui-development/working-with-touchgfx/widgets-and-containers",title:"\u63a7\u4ef6\u548c\u5bb9\u5668",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/widgets-and-containers.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/widgets-and-containers",permalink:"/4.21/zh-CN/docs/development/ui-development/working-with-touchgfx/widgets-and-containers",draft:!1,tags:[],version:"current",frontMatter:{id:"widgets-and-containers",title:"\u63a7\u4ef6\u548c\u5bb9\u5668"},sidebar:"docs",previous:{title:"Multiple developers on a project",permalink:"/4.21/zh-CN/docs/development/ui-development/working-with-touchgfx/multiple-developers"},next:{title:"\u6a21\u62df\u5668",permalink:"/4.21/zh-CN/docs/development/ui-development/working-with-touchgfx/simulator"}},w={},y=[{value:"\u63a7\u4ef6",id:"widgets",level:2},{value:"\u5bb9\u5668",id:"containers",level:2}],k={toc:y};function b(e){var t,n=e,{components:c}=n,m=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},k),m),l(t,u({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u672c\u8282\u5c06\u4ecb\u7ecd\u6784\u5efaTouchGFX\u5e94\u7528\u7a0b\u5e8f\u65f6\u7684\u4e24\u4e2a\u6700\u57fa\u672c\u6982\u5ff5\uff1a\u63a7\u4ef6\u548c\u5bb9\u5668\u3002 \u8fd9\u662f\u60a8\u5c06\u5728\u6574\u4e2aUI\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u7684\u4e24\u4e2a\u6784\u5efa\u5355\u5143\u3002 \u4e24\u8005\u90fd\u5305\u542bTouchGFX\u63d0\u4f9b\u7684\u9884\u5236\u7ec4\u4ef6\uff0c\u540c\u65f6\u4e5f\u8db3\u591f\u5f00\u653e\uff0c\u53ef\u652f\u6301\u521b\u5efa\u81ea\u5b9a\u4e49\u5b9e\u73b0\u3002"),(0,r.kt)("h2",h({},{id:"widgets"}),"\u63a7\u4ef6"),(0,r.kt)("p",null,"TouchGFX\u548cTouchGFX Designer\u5de5\u5177\u63d0\u4f9b\u4e86\u8bb8\u591a\u6807\u51c6\u63a7\u4ef6\uff0c\u7528\u6237\u53ef\u4ee5\u81ea\u7531\u5730\u4f7f\u7528\u8fd9\u4e9b\u63a7\u4ef6\u6765\u6784\u5efa\u81ea\u5df1\u7684UI\uff0c\u4f8b\u5982 ",(0,r.kt)("a",h({parentName:"p"},{href:"../ui-components/miscellaneous/text-area"}),"Text Area"),", ",(0,r.kt)("a",h({parentName:"p"},{href:"../ui-components/buttons/button"}),"Button")," and ",(0,r.kt)("a",h({parentName:"p"},{href:"../ui-components/images/texture-mapper"}),"Texture Mapper"),"\u3002 \u4f46\u5728\u57fa\u672c\u5c42\u9762\u4e0a\uff0cTouchGFX\u4e2d\u7684\u63a7\u4ef6\u53ea\u662f\u4e00\u4e2a\u62bd\u8c61\u7684\u5b9a\u4e49\uff0c\u53ef\u4ee5\u5728\u5c4f\u5e55\u4e0a\u7ed8\u5236\uff0c\u4e5f\u53ef\u4ee5\u4e0e\u4e4b\u4ea4\u4e92\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/ui-components/button/widget-appearance.webp",mdxType:"Figure"},"\u4e00\u4e2a\u4ee5\u56fe\u50cf\u63a7\u4ef6\u4f5c\u4e3a\u80cc\u666f\u7684\u6309\u94ae\u63a7\u4ef6"),(0,r.kt)("p",null,"\u6709\u4e86TouchGFX Designer\uff0c\u7528\u6237\u53ef\u4ee5\u5c06\u4efb\u4f55\u60f3\u8981\u7684\u63a7\u4ef6\u6dfb\u52a0\u5230\u5c4f\u5e55\u4e0a\uff0c\u5e76\u4f7f\u7528\u6240\u63d0\u4f9b\u7684\u7279\u5b9a\u4e8e\u6bcf\u4e2a\u63a7\u4ef6\u7684\u5c5e\u6027\u8fdb\u884c\u5b9a\u5236\u3002 \u8fd8\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528TouchGFX\u63d0\u4f9b\u7684\u4e0d\u540c\u7c7b\u578b\u7684\u5bb9\u5668\u5bf9\u63a7\u4ef6\u8fdb\u884c\u5206\u7ec4\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u613f\u610f\uff0c\u4e5f\u53ef\u4ee5\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u6dfb\u52a0\u63a7\u4ef6\uff0c\u65b9\u6cd5\u662f\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"add(widget_instance_name);"),"\u51fd\u6570\uff0c\u6216\u5c06\u63a7\u4ef6\u6dfb\u52a0\u5230\u5bb9\u5668\u4e2d\uff0c\u65b9\u6cd5\u662f\u4f7f\u7528\u5bb9\u5668\u6dfb\u52a0\u51fd\u6570\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"myContainer.add(widget_instance_name);"),"\u3002 \u6dfb\u52a0\u63a7\u4ef6\u7684\u987a\u5e8f\u5c06\u51b3\u5b9aZ\u8f74\u4e0a\u7684\u987a\u5e8f\u3002 \u6700\u540e\u6dfb\u52a0\u7684\u63a7\u4ef6\u5c06\u51fa\u73b0\u5728\u5c4f\u5e55\u7684\u6700\u524d\u9762\u3002"),(0,r.kt)("p",null,"\u63a7\u4ef6\u7684\u5750\u6807\u603b\u662f\u76f8\u5bf9\u4e8e\u5176\u7236\u8282\u70b9\uff0c\u5373\u6839\u5bb9\u5668\uff08\u5c4f\u5e55\uff09\u6216\u5bb9\u5668\u3002"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"\u60a8\u53ef\u4ee5\u521b\u5efa\u81ea\u5df1\u7684\u63a7\u4ef6\uff0c\u4ee5\u6ee1\u8db3\u81ea\u5df1\u53ef\u80fd\u6709\u7684\u4efb\u4f55\u7279\u5b9a\u9700\u6c42\u3002 \u5982\u9700\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)(a.Z,{to:"../touchgfx-engine-features/custom-widgets",mdxType:"Link"},"\u81ea\u5b9a\u4e49\u63a7\u4ef6"),"\u4e00\u8282\u3002"),(0,r.kt)("h2",h({},{id:"containers"}),"\u5bb9\u5668"),(0,r.kt)("p",null,"\u5bb9\u5668\u662fTouchGFX\u4e2d\u7684\u4e00\u79cd\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u5305\u542b\u5b50\u8282\u70b9\uff08\u6bd4\u5982\u63a7\u4ef6\u548c\u5176\u4ed6\u5bb9\u5668\uff09\u3002"),(0,r.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\uff0c\u53ef\u4ee5\u5728Widgets\uff08\u63a7\u4ef6\uff09\u9009\u9879\u5361\u4e2d\u7684containers\uff08\u5bb9\u5668\uff09\u7c7b\u522b\u4e0b\u627e\u5230\u5bb9\u5668\uff0c\u5411\u5bb9\u5668\u4e2d\u6dfb\u52a0\u63a7\u4ef6\u7684\u65b9\u6cd5\u5c06\u63a7\u4ef6\u62d6\u653e\u5230\u6811\u89c6\u56fe\u4e2d\u7684\u5bb9\u5668\u4e2d\u3002"),(0,r.kt)("p",null,"\u5b50\u5bb9\u5668\u5728Z\u8f74\u4e0a\u7684\u987a\u5e8f\u7531\u5411\u5bb9\u5668\u4e2d\u6dfb\u52a0\u5b50\u5bb9\u5668\u65f6\u7684\u987a\u5e8f\u51b3\u5b9a - \u6700\u540e\u6dfb\u52a0\u7684\u5b50\u5bb9\u5668\u5c06\u663e\u793a\u5728\u5c4f\u5e55\u7684\u6700\u524d\u9762\u3002"),(0,r.kt)("p",null,"\u7531\u4e8eTouchGFX\u4e2d\u63a7\u4ef6\u7684\u4f4d\u7f6e\u662f\u76f8\u5bf9\u4e8e\u5176\u7236\u5bb9\u5668\u800c\u786e\u5b9a\u7684\uff0c\u56e0\u6b64\u6539\u53d8\u7236\u5bb9\u5668\u7684\u4f4d\u7f6e\u4e5f\u4f1a\u76f8\u5e94\u5730\u79fb\u52a8\u5b50\u5bb9\u5668\u3002"),(0,r.kt)("p",null,"\u5bb9\u5668\u5145\u5f53\u89c6\u7a97\uff0c\u8fd9\u610f\u5473\u7740\u53ea\u6709\u4e0e\u5bb9\u5668\u51e0\u4f55\u56fe\u5f62\u76f8\u4ea4\u7684\u5b50\u5bb9\u5668\u90e8\u5206\u624d\u53ef\u89c1\u3002"),(0,r.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u52a8\u753b\u4e2d\uff0c\u60a8\u5c06\u770b\u5230\u5bb9\u5668\u7684\u89c6\u7a97\u90e8\u5206\u662f\u5982\u4f55\u5de5\u4f5c\u7684\u3002 \u9996\u5148\uff0c\u6211\u4eec\u770b\u5230\u8fd9\u4e2a\u6309\u94ae\u7684\u7236\u5bb9\u5668\u7684\u8f6e\u5ed3\uff1a"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/widgets-and-containers/viewport.webp",mdxType:"Figure"},"\u5145\u5f53\u89c6\u7a97\u7684\u5bb9\u5668"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"\u60a8\u53ef\u4ee5\u521b\u5efa\u81ea\u5df1\u7684\u5bb9\u5668\uff0c\u4ee5\u6ee1\u8db3\u81ea\u5df1\u53ef\u80fd\u6709\u7684\u4efb\u4f55\u7279\u5b9a\u9700\u6c42\u3002 \u5982\u9700\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)(a.Z,{to:"../touchgfx-engine-features/custom-containers",mdxType:"Link"},"\u81ea\u5b9a\u4e49\u5bb9\u5668"),"\u4e00\u8282\u3002"))}b.isMDXComponent=!0}}]);