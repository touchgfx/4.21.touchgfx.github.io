"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5882],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),m=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=m(n),c=a,k=u["".concat(i,".").concat(c)]||u[c]||d[c]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=o},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=o},69355:function(e,t,n){n.r(t),n.d(t,{assets:function(){return x},contentTitle:function(){return f},default:function(){return E},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return y}});var r=n(3905),a=n(44035),l=n(29415),o=n(37793),p=n(31217),i=n(39130),m=n(22425),s=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&h(e,n,t[n]);if(c)for(var n of c(t))g.call(t,n)&&h(e,n,t[n]);return e};const v={id:"text-progress",title:"\u57fa\u4e8e\u6587\u672c\u7684\u8fdb\u5ea6\u6307\u793a\u5668"},f=void 0,b={unversionedId:"development/ui-development/ui-components/progress-indicators/text-progress",id:"development/ui-development/ui-components/progress-indicators/text-progress",title:"\u57fa\u4e8e\u6587\u672c\u7684\u8fdb\u5ea6\u6307\u793a\u5668",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/progress-indicators/text-progress.mdx",sourceDirName:"development/ui-development/ui-components/progress-indicators",slug:"/development/ui-development/ui-components/progress-indicators/text-progress",permalink:"/4.21/zh-CN/docs/development/ui-development/ui-components/progress-indicators/text-progress",draft:!1,tags:[],version:"current",frontMatter:{id:"text-progress",title:"\u57fa\u4e8e\u6587\u672c\u7684\u8fdb\u5ea6\u6307\u793a\u5668"},sidebar:"docs",previous:{title:"\u57fa\u4e8e\u56fe\u50cf\u7684\u8fdb\u5ea6\u6761",permalink:"/4.21/zh-CN/docs/development/ui-development/ui-components/progress-indicators/image-progress"},next:{title:"\u7ebf\u6027\u8fdb\u5ea6\u6761",permalink:"/4.21/zh-CN/docs/development/ui-development/ui-components/progress-indicators/line-progress"}},x={},y=[{value:"\u63a7\u4ef6\u7ec4",id:"widget-group",level:2},{value:"\u5c5e\u6027",id:"properties",level:2},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u52a8\u4f5c",id:"actions",level:3},{value:"\u89e6\u53d1",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u793a\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u4ee3\u7801",id:"generated-code",level:3},{value:"\u7528\u6237\u4ee3\u7801",id:"user-code",level:3},{value:"TouchGFX Designer\u793a\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c2\u8003",id:"api-reference",level:2}],w={toc:y};function E(e){var t,n=e,{components:s}=n,h=((e,t)=>{var n={};for(var r in e)k.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=N(N({},w),h),d(t,u({components:s,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u57fa\u4e8e\u6587\u672c\u7684\u8fdb\u5ea6\u6307\u793a\u5668\u5c06\u4ee5\u4e00\u4e2a\u5e26\u6709\u7ed9\u5b9a\u5c0f\u6570\u7684\u6570\u5b57\u663e\u793a\u8fdb\u5ea6\u3002 \u5b83\u663e\u793a\u5f53\u524d\u8fdb\u5ea6\uff0c\u65b9\u6cd5\u662f\u5c06\u4e00\u4e2a",(0,r.kt)("a",N({parentName:"p"},{href:"../miscellaneous/text-area"}),"\u6587\u672c\u533a\u57df"),"\u7f6e\u4e8e\u80cc\u666f",(0,r.kt)("a",N({parentName:"p"},{href:"../images/image"}),"\u56fe\u50cf"),"\u4e0a\u65b9\u4f5c\u4e3a\u8fdb\u5ea6\u6307\u793a\u5668\u3002 TextArea\u7684",(0,r.kt)("em",{parentName:"p"},"\u989c\u8272"),"\u3001",(0,r.kt)("em",{parentName:"p"},"Alpha"),"\u548c",(0,r.kt)("em",{parentName:"p"},"\u6587\u672c"),"\u53ef\u4ee5\u914d\u7f6e\u3002 \u53ef\u4ee5\u521b\u5efa\u81ea\u5b9a\u4e49\u7684\u80cc\u666f\u56fe\u50cf\uff0c\u5e76\u66f4\u6539\u8fdb\u5ea6\u6307\u793a\u5668\u7684\u4e0d\u540c\u53c2\u6570\uff08\u6bd4\u5982\u4f4d\u7f6e\u548c\u5927\u5c0f\uff09\uff0c\u4ee5\u9002\u5e94\u81ea\u5b9a\u4e49\u7684\u80cc\u666f\u56fe\u50cf\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/text-progress/widget-appearance.webp",mdxType:"Figure"},"\u5728\u6a21\u62df\u5668\u4e2d\u8fd0\u884c\u7684\u57fa\u4e8e\u6587\u672c\u7684\u8fdb\u5ea6\u6307\u793a\u5668"),(0,r.kt)("h2",N({},{id:"widget-group"}),"\u63a7\u4ef6\u7ec4"),(0,r.kt)("p",null,"\u57fa\u4e8e\u6587\u672c\u7684\u8fdb\u5ea6\u6307\u793a\u5668\u4f4d\u4e8e\u8fdb\u5ea6\u6307\u793a\u5668\u63a7\u4ef6\u7ec4\u4e2d\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/text-progress/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u57fa\u4e8e\u6587\u672c\u7684\u8fdb\u5ea6\u6307\u793a\u5668"),(0,r.kt)("h2",N({},{id:"properties"}),"\u5c5e\u6027"),(0,r.kt)("p",null,"TouchGFX Designer\u4e2d\u57fa\u4e8e\u6587\u672c\u7684\u8fdb\u5ea6\u6307\u793a\u5668\u7684\u5c5e\u6027\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u7ec4")),(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u540d\u79f0")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u63a7\u4ef6\u7684",(0,r.kt)("em",{parentName:"td"},"\u540d\u79f0"),"\u3002 ",(0,r.kt)("em",{parentName:"td"},"\u540d\u79f0\u662fTouchGFX Designer\u548c\u4ee3\u7801\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u6807\u8bc6\u7b26"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u4f4d\u7f6e")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X"),"\u548c",(0,r.kt)("em",{parentName:"td"},"Y"),"\u6307\u5b9a\u63a7\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5bf9\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W"),"\u548c",(0,r.kt)("em",{parentName:"td"},"H"),"\u6307\u5b9a\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u57fa\u4e8e\u6587\u672c\u7684\u8fdb\u5ea6\u6307\u793a\u5668\u7684\u5927\u5c0f\u7531\u6240\u9009\u80cc\u666f\u56fe\u50cf\u7684\u5927\u5c0f\u51b3\u5b9a\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9501\u5b9a"),"\u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u5e94\u9501\u5b9a\u4e3a\u5176\u5f53\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u9501\u5b9a\u63a7\u4ef6\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u53ef\u89c1"),"\u6307\u5b9a\u63a7\u4ef6\u7684\u53ef\u89c1\u6027\u3002 ",(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u5c06\u63a7\u4ef6\u6807\u8bb0\u4e3a\u4e0d\u53ef\u89c1\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u6837\u5f0f")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u6837\u5f0f")," \u6307\u5b9a\u63a7\u4ef6\u7684\u9884\u5b9a\u4e49\u8bbe\u7f6e\uff0c\u7528\u4e8e\u5c06\u6240\u9009\u5c5e\u6027\u8bbe\u4e3a\u9884\u5b9a\u4e49\u7684\u503c\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u8fd9\u4e9b\u6837\u5f0f\u5305\u542b\u53ef\u514d\u8d39\u4f7f\u7528\u7684\u56fe\u50cf"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u56fe\u50cf")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u80cc\u666f"),"\u6307\u5b9a\u80cc\u666f\u56fe\u50cf\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u6587\u672c")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"ID"),"\u6307\u5b9a\u4f7f\u7528\u7684\u6587\u672c\u3002 ",(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u63a7\u4ef6\u4f7f\u7528\u81ea\u52a8\u751f\u6210\u7684\u6587\u672c\uff0cID\u5c06\u663e\u793a\u201c\u81ea\u52a8\u751f\u6210\u201d\u3002"),".",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"\u7ffb\u8bd1")," \u6307\u5b9a\u8981\u663e\u793a\u7684\u6587\u672c\u5185\u5bb9\u3002 ",(0,r.kt)("em",{parentName:"td"},'\u6587\u672c\u5b57\u6bb5\u81ea\u52a8\u8bbe\u7f6e\u4e3a\u4f7f\u7528\u901a\u914d\u7b26 "',"<","\\",">",' %"\uff0c\u8fd9\u610f\u5473\u7740\u521b\u5efa\u7684\u901a\u914d\u7b26\u5c06\u7528\u7b26\u5408\u8fdb\u5ea6\u914d\u7f6e\u7684\u6570\u5b57\u586b\u5145\u3002 \u8be5\u901a\u914d\u7b26\u662f\u57fa\u4e8e\u6587\u672c\u7684\u8fdb\u5ea6\u6307\u793a\u5668\u6b63\u5e38\u5de5\u4f5c\u7684\u5fc5\u8981\u6761\u4ef6\uff0c\u4f46\u53ef\u4ee5\u5728\u901a\u914d\u7b26\u4e4b\u524d\u548c/\u6216\u4e4b\u540e\u8bbe\u7f6e\u4efb\u4f55\u5176\u4ed6\u6587\u672c\u3002'),(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"\u5b57\u4f53\u6392\u5370"),"\u6307\u5b9a\u6587\u672c\u7684\u683c\u5f0f\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"\u5bf9\u9f50")," \u6307\u5b9a\u6587\u672c\u7684\u6c34\u5e73\u5bf9\u9f50\u65b9\u5f0f\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null)," \u5982\u9700\u8be6\u7ec6\u4e86\u89e3\u5173\u4e8e\u6587\u672c\u914d\u7f6e\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",N({parentName:"td"},{href:"../../touchgfx-engine-features/texts-and-fonts"}),"\u201c\u6587\u672c\u4e0e\u5b57\u4f53\u201d"),"\u4e00\u8282\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u6587\u672c\u4f4d\u7f6e& \u5927\u5c0f")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X"),"\u548c",(0,r.kt)("em",{parentName:"td"},"Y"),"\u6307\u5b9a\u8fdb\u5ea6\u6587\u672c\u7684\u5de6\u4e0a\u89d2\u76f8\u5bf9\u4e8e\u5176\u57fa\u4e8e\u6587\u672c\u7684\u8fdb\u5ea6\u6307\u793a\u5668\u7236\u7a97\u53e3\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W"),"\u548c",(0,r.kt)("em",{parentName:"td"},"H"),"\u6307\u5b9a\u8fdb\u5ea6\u6587\u672c\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u503c")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u6700\u5c0f\u503c"),"\u548c",(0,r.kt)("em",{parentName:"td"},"\u6700\u5927\u503c"),"\u6307\u5b9a\u6307\u793a\u5668\u7684\u6700\u5c0f\u548c\u6700\u5927\u6574\u6570\u503c\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u521d\u59cb"),"\u6307\u5b9a\u8fdb\u5ea6\u6307\u793a\u5668\u7684\u521d\u59cb\u503c\u3002",(0,r.kt)("em",{parentName:"td"},"\u603b\u6b65\u6570"),"\u6307\u5b9a\u8fdb\u5ea6\u6307\u793a\u5668\u62a5\u544a\u65b0\u503c\u7684\u7c92\u5ea6\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u9700\u8981\u4ee50%\u300110%\u300120%\u3001...\u3001100%\u7684\u5f62\u5f0f\u62a5\u544a\u8fdb\u5ea6\uff0c\u603b\u503c\u5e94\u8be5\u8bbe\u4e3a10\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u6700\u5c0f\u6b65\u6570"),"\u6307\u5b9a\u8fdb\u5ea6\u6307\u793a\u5668\u663e\u793a\u7684\u6700\u5c0f\u6b65\u6570\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5c0f\u6570\u4f4d\u6570"),"\u6307\u5b9a\u663e\u793a\u8fdb\u5ea6\u6240\u9700\u7684\u7cbe\u5ea6\u3002 \u53ef\u80fd\u7684\u503c\u4e3a0\u30011\u62162\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u5916\u89c2")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u989c\u8272"),"\u6307\u5b9a\u6240\u663e\u793a\u6587\u672c\u7684\u989c\u8272\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Alpha"),"\u6307\u5b9a\u63a7\u4ef6\u7684\u900f\u660e\u5ea6\u3002 ",(0,r.kt)("em",{parentName:"td"},"\u63a7\u4ef6\u7684Alpha\u503c\u4ecb\u4e8e0\u548c255\u4e4b\u95f4\u3002 0\u8868\u793a\u5b8c\u5168\u900f\u660e\uff0c255\u8868\u793a\u4e0d\u900f\u660e\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixin")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52a8")," \u6307\u5b9a\u5728\u8fd0\u884c\u65f6\u63a7\u4ef6\u662f\u5426\u53ef\u62d6\u52a8\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u63a7\u4ef6\u88ab\u70b9\u51fb\u65f6\u662f\u5426\u4f1a\u8c03\u7528\u56de\u8c03\u51fd\u6570\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator")," \u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236\u5176 ",(0,r.kt)("em",{parentName:"td"},"Alpha")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236 ",(0,r.kt)("em",{parentName:"td"},"X")," \u548c ",(0,r.kt)("em",{parentName:"td"},"Y")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002")))),(0,r.kt)("h2",N({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7ecd\u4e86\u57fa\u4e8e\u6587\u672c\u7684\u8fdb\u5ea6\u6307\u793a\u5668\u652f\u6301\u7684\u64cd\u4f5c\u548c\u89e6\u53d1\u6761\u4ef6\u3002"),(0,r.kt)("h3",N({},{id:"actions"}),"\u52a8\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u63a7\u4ef6\u7279\u6709\u7684\u52a8\u4f5c")),(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u8bbe\u7f6e\u503c")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u8fdb\u5ea6\u6307\u793a\u5668\u7684\u503c\u3002")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6807\u51c6\u63a7\u4ef6\u52a8\u4f5c")),(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u79fb\u52a8\u63a7\u4ef6")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u968f\u65f6\u95f4\u7684\u63a8\u79fb\u5c06\u63a7\u4ef6\u79fb\u52a8\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u6e10\u9690\u63a7\u4ef6")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u968f\u65f6\u95f4\u7684\u63a8\u79fb\u6539\u53d8\u63a7\u4ef6\u7684Alpha\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u9690\u85cf\u63a7\u4ef6")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u9690\u85cf\u63a7\u4ef6\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3afalse\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u663e\u793a\u63a7\u4ef6")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\u4f7f\u9690\u85cf\u7684\u63a7\u4ef6\u53ef\u89c1\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3atrue\uff09\u3002")))),(0,r.kt)("h3",N({},{id:"triggers"}),"\u89e6\u53d1"),(0,r.kt)("p",null,"\u57fa\u4e8e\u6587\u672c\u7684\u8fdb\u5ea6\u6307\u793a\u5668\u63a7\u4ef6\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u89e6\u53d1\u3002"),(0,r.kt)("h2",N({},{id:"performance"}),"\u6027\u80fd"),(0,r.kt)("p",null,"\u57fa\u4e8e\u6587\u672c\u7684\u8fdb\u5ea6\u6307\u793a\u5668\u5305\u542b\u4e00\u4e2a\u6587\u672c\u533a\u57df\u548c\u4e00\u5e45\u80cc\u666f\u56fe\u50cf\u3002 \u6587\u672c\u7ed8\u5236\u975e\u5e38\u7c7b\u4f3c\u4e8e\u666e\u901a\u7684\u56fe\u50cf\u7ed8\u5236\uff08\u5c3d\u7ba1\u7531\u4e8e\u6587\u672c\u5b57\u7b26\u7684\u6027\u8d28\uff0c\u4f1a\u53d1\u751f\u5927\u91cf\u7684alpha\u6df7\u5408\uff09\u3002 \u56e0\u6b64\uff0c\u5927\u90e8\u5206\u5e73\u53f0\u4f1a\u5c06\u57fa\u4e8e\u6587\u672c\u7684\u8fdb\u5ea6\u6307\u793a\u5668\u89c6\u4e3a\u975e\u5e38\u5feb\u901f\u7684\u63a7\u4ef6\u3002"),(0,r.kt)("p",null,"\u66f4\u591a\u5173\u4e8e\u6587\u672c\u7ed8\u5236\u6027\u80fd\u7684\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb",(0,r.kt)("a",N({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u7ec4\u4ef6\u6027\u80fd"),"\u4e00\u8282\u3002"),(0,r.kt)("h2",N({},{id:"examples"}),"\u793a\u4f8b"),(0,r.kt)("h3",N({},{id:"generated-code"}),"\u751f\u6210\u4ee3\u7801"),(0,r.kt)("p",null,"\u5728\u751f\u6210\u7684\u89c6\u56fe\u57fa\u7c7b\u7684\u4ee3\u7801\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770bTouchGFX Designer\u662f\u5982\u4f55\u521b\u5efa\u57fa\u4e8e\u6587\u672c\u7684\u8fdb\u5ea6\u6307\u793a\u5668\u7684\u3002"),(0,r.kt)(m.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",N({parentName:"pre"},{className:"language-cpp"}),"textProgress.setXY(198, 119);\ntextProgress.setProgressIndicatorPosition(0, 0, 84, 34);\ntextProgress.setRange(0, 100);\ntextProgress.setColor(touchgfx::Color::getColorFromRGB(0, 0, 0));\ntextProgress.setNumberOfDecimals(0);\ntextProgress.setTypedText(touchgfx::TypedText(T_SINGLEUSEID1));\ntextProgress.setBackground(touchgfx::Bitmap(BITMAP_BLUE_PROGRESSINDICATORS_BG_MEDIUM_TEXT_PROGRESS_BG_SQUARE_ID));\ntextProgress.setValue(50);\n")),(0,r.kt)("h3",N({},{id:"user-code"}),"\u7528\u6237\u4ee3\u7801"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"handleTickEvent()"),"\u51fd\u6570\u4ee5\u6a21\u62df\u8fdb\u5ea6\u6761\u3002 \u8fd0\u884c\u8fd9\u6bb5\u4ee3\u7801\u5c06\u521b\u5efa",(0,r.kt)("a",N({parentName:"p"},{href:"text-progress"}),"\u672c\u6587\u5f00\u5934"),"\u6240\u793a\u7684\u5e94\u7528\u3002"),(0,r.kt)(m.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",N({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\nprotected:\n    bool increase = true;\n    uint8_t counter;\n};\n")),(0,r.kt)(m.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",N({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::handleTickEvent()\n{\n    counter++;\n    if(counter%15 == 0) // Every 0.25 seconds\n    {\n        int currentValue = textProgress.getValue();\n        int16_t max;\n        int16_t min;\n        textProgress.getRange(min, max);\n\n        if (currentValue == min)\n        {\n            increase = true;\n        }\n        else if (currentValue == max)\n        {\n            increase = false;\n        }\n\n        int nextValue = increase == true ? currentValue+1 : currentValue-1;\n\n        counter = 0;\n        textProgress.setValue(nextValue);\n    }\n}\n")),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u53ef\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u51fd\u6570\u4ee5\u53caTextProgress\u7c7b\u4e2d\u63d0\u4f9b\u7684\u5176\u4ed6\u51fd\u6570\u3002 \u5982\u679c\u66f4\u6539\u63a7\u4ef6\u7684\u5916\u89c2\uff0c\u8bf7\u5fc5\u987b\u8c03\u7528 ",(0,r.kt)(p.Z,{mdxType:"InlineCode"},"textProgress1.invalidate()")," \u5f3a\u5236\u8fdb\u884c\u91cd\u65b0\u7ed8\u5236\u3002"),(0,r.kt)("h3",N({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u793a\u4f8b"),(0,r.kt)("p",null,"\u5982\u9700\u8fdb\u4e00\u6b65\u4e86\u89e3\u57fa\u4e8e\u6587\u672c\u7684\u8fdb\u5ea6\u6307\u793a\u5668\uff0c\u8bf7\u5c1d\u8bd5\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4ee5\u4e0bUI\u6a21\u677f\u521b\u5efa\u65b0\u5e94\u7528\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/progress-indicator-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u8fdb\u5ea6\u6307\u793a\u5668\u793a\u4f8bUI\u6a21\u677f"),(0,r.kt)("h2",N({},{id:"api-reference"}),"API\u53c2\u8003"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(i.Z,{to:"../../../../api/classes/classtouchgfx_1_1_text_progress",mdxType:"Link"},"API reference for the TextProgress class"))))}E.isMDXComponent=!0}}]);