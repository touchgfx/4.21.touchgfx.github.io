"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3033],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),g=a,m=s["".concat(c,".").concat(g)]||s[g]||p[g]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:i},this.props.children)}}t.Z=o},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=o},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=o},5121:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return T},default:function(){return Z},frontMatter:function(){return R},metadata:function(){return E},toc:function(){return O}});var r=n(3905),a=n(44035),i=n(70814),o=n(37793),l=n(67294),c=n(88678);const d=l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class u extends l.Component{render(){return l.createElement(c.Z,{color:"var(--highlight-color-try)",header:"Things to try",type:"try",icon:d},this.props.children)}}var p=u,s=n(29415),g=n(31217),m=n(39130),h=n(22425),f=Object.defineProperty,v=Object.defineProperties,k=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))w.call(t,n)&&C(e,n,t[n]);if(x)for(var n of x(t))y.call(t,n)&&C(e,n,t[n]);return e};const R={id:"custom-widgets",title:"\u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8"},T=void 0,E={unversionedId:"development/ui-development/touchgfx-engine-features/custom-widgets",id:"development/ui-development/touchgfx-engine-features/custom-widgets",title:"\u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/custom-widgets.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/custom-widgets",permalink:"/4.21/ja/docs/development/ui-development/touchgfx-engine-features/custom-widgets",draft:!1,tags:[],version:"current",frontMatter:{id:"custom-widgets",title:"\u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8"},sidebar:"docs",previous:{title:"\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u30ad\u30e3\u30c3\u30b7\u30e5",permalink:"/4.21/ja/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"},next:{title:"Canvas Widget\uff08\u30ad\u30e3\u30f3\u30d0\u30b9\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff09",permalink:"/4.21/ja/docs/development/ui-development/touchgfx-engine-features/canvas-widgets"}},N={},O=[{value:"\u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30a2\u30d7\u30ed\u30fc\u30c1\u3092\u4f7f\u7528\u3059\u3079\u304d\u5834\u5408",id:"when-to-use-the-custom-widget-approach",level:2},{value:"TouchGFX Designer\u3067\u306e\u64cd\u4f5c",id:"in-touchgfx-designer",level:2},{value:"\u30b3\u30fc\u30c9\u3067\u306e\u64cd\u4f5c",id:"in-code",level:2},{value:"\u72ec\u81ea\u306e\u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8",id:"your-own-custom-widget",level:3},{value:"\u90e8\u5206\u63cf\u753b",id:"partial-drawing",level:3},{value:"\u5857\u308a\u3064\u3076\u3057\u9818\u57df",id:"solid-area",level:3},{value:"\u30bd\u30fc\u30b9\uff65\u30b3\u30fc\u30c9\u306e\u4f8b",id:"example-source-code",level:3},{value:"\u6a19\u6e96\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8 / \u30b3\u30f3\u30c6\u30ca\u306e\u5909\u66f4",id:"modifying-standard-widgetscontainers",level:2}],Q={toc:O};function Z(e){var t,n=e,{components:l}=n,c=((e,t)=>{var n={};for(var r in e)w.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&x)for(var r of x(e))t.indexOf(r)<0&&y.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=b(b({},Q),c),v(t,k({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u6642\u306b\u306f\u3001TouchGFX\u914d\u5e03\u306b\u306f\u542b\u307e\u308c\u3066\u3044\u306a\u3044\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u5fc5\u8981\u306b\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002 TouchGFX\u3067\u306f\u3001\u30e6\u30fc\u30b6\u304c\u72ec\u81ea\u306e\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u8981\u7d20\u3092\u4f5c\u6210\u3067\u304d\u308b\u65b9\u6cd5\u304c\u3044\u304f\u3064\u304b\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u6700\u3082\u5358\u7d14\u306a\u306e\u306f",(0,r.kt)("a",b({parentName:"p"},{href:"custom-containers"}),"\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\uff65\u30a2\u30d7\u30ed\u30fc\u30c1"),"\u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u3067\u3001\u65e2\u5b58\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u72ec\u81ea\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306b\u7d50\u5408\u3059\u308b\u3082\u306e\u3067\u3059\u3002 \u3057\u304b\u3057\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u672c\u8cea\u7684\u306b\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u5b8c\u5168\u5236\u5fa1\u3057\u3066\u671b\u3080\u3082\u306e\u3092\u6b63\u78ba\u306b\u63cf\u753b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u4f5c\u6210\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308b\u3001\u3082\u3063\u3068\u9ad8\u5ea6\u306a\u30a2\u30d7\u30ed\u30fc\u30c1\u3092\u8a73\u3057\u304f\u53d6\u308a\u4e0a\u3052\u307e\u3059\u3002"),(0,r.kt)("h2",b({},{id:"when-to-use-the-custom-widget-approach"}),"\u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30a2\u30d7\u30ed\u30fc\u30c1\u3092\u4f7f\u7528\u3059\u3079\u304d\u5834\u5408"),(0,r.kt)("p",null,"\u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u4f5c\u6210\u306f\u3001\u72ec\u81ea\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306e\u6700\u3082\u4e00\u822c\u7684\u306a\u65b9\u6cd5\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u30e6\u30fc\u30b6\u306e\u30cb\u30fc\u30ba\u306b\u5408\u3063\u3066\u3044\u308c\u3070\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\uff65\u30a2\u30d7\u30ed\u30fc\u30c1\u306e\u65b9\u304c\u512a\u5148\u3055\u308c\u307e\u3059\u304c\u3001\u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u3067\u306f\u5341\u5206\u3067\u306a\u3044\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002 \u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u5b8c\u5168\u5236\u5fa1\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30a2\u30d7\u30ed\u30fc\u30c1\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30a2\u30d7\u30ed\u30fc\u30c1\u3092\u4f7f\u7528\u3057\u3066\u4f5c\u6210\u3067\u304d\u308b\uff08\u3042\u308b\u3044\u306f\u4f5c\u6210\u3059\u3079\u304d\uff09\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u4f8b\u3092\u6b21\u306b\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30bb\u30d4\u30a2\uff65\u30d5\u30a3\u30eb\u30bf"),(0,r.kt)("li",{parentName:"ul"},"\u30de\u30f3\u30c7\u30eb\u30d6\u30ed\uff65\u30d5\u30e9\u30af\u30bf\u30eb\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8"),(0,r.kt)("li",{parentName:"ul"},"\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u306e\u30c7\u30fc\u30bf\u3092\u8868\u793a\u3059\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff08gif\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306a\u3069\uff09")),(0,r.kt)("h2",b({},{id:"in-touchgfx-designer"}),"TouchGFX Designer\u3067\u306e\u64cd\u4f5c"),(0,r.kt)("p",null,"TouchGFX Designer\u306f\u3001\u73fe\u6642\u70b9\u3067\u306f\u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u4f5c\u6210\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093\u3002 \u3053\u306e\u305f\u3081\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u7528\u306e\u30b3\u30fc\u30c9\u3092\u624b\u52d5\u3067\u4f5c\u6210\u3057\uff08\u4f5c\u6210\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3053\u306e\u8a18\u4e8b\u306e\u6b8b\u308a\u306e\u90e8\u5206\u3092\u53c2\u7167\uff09\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30d3\u30e5\u30fc\u306e\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u90e8\u5206\u306b\u633f\u5165\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("h2",b({},{id:"in-code"}),"\u30b3\u30fc\u30c9\u3067\u306e\u64cd\u4f5c"),(0,r.kt)("p",null,"\u72ec\u81ea\u306e\u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Widget"),"\u30af\u30e9\u30b9\u3092\u62e1\u5f35\u3057\u307e\u3059\u3002 \u3053\u306e\u305f\u3081\u306b\u306f\u30e6\u30fc\u30b6\u5074\u306e\u4f5c\u696d\u304c\u3084\u3084\u591a\u304f\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u304c\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306b\u3088\u3063\u3066\u63cf\u753b\u3055\u308c\u308b\u3059\u3079\u3066\u306e\u30d4\u30af\u30bb\u30eb\u3092\u5b8c\u5168\u306b\u5236\u5fa1\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002 \u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306f\u5fc5\u305a\u3057\u3082\u65e2\u5b58\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u6d3b\u7528\u3059\u308b\u308f\u3051\u3067\u306f\u306a\u304f\u3001\u30d4\u30af\u30bb\u30eb\u306e\u8272\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u63cf\u753b\u65b9\u6cd5\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002 \u4e00\u822c\u7684\u306b\u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30a2\u30d7\u30ed\u30fc\u30c1\u306f\u30e1\u30e2\u30ea\uff65\u30d5\u30c3\u30c8\u30d7\u30ea\u30f3\u30c8\u3082\u5c0f\u3055\u304f\u3001\u5834\u5408\u306b\u3088\u3063\u3066\u306f\u3001\u3053\u306e\u3053\u3068\u304c\u6975\u3081\u3066\u91cd\u8981\u306a\u30dd\u30a4\u30f3\u30c8\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u4e00\u4f8b\u3068\u3057\u3066\u3001QR\u30b3\u30fc\u30c9\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u6319\u3052\u3089\u308c\u307e\u3059\u3002 \u3053\u306e\u7279\u5b9a\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306f\u308f\u304b\u308a\u3084\u3059\u3044\u4f8b\u306b\u306a\u308b\u306e\u3067\u3001\u4ee5\u4e0b\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3053\u306e\u4f5c\u6210\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002 \u3053\u306e\u4f8b\u3067\u3001QR\u30b3\u30fc\u30c9\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306f\u767d\u9ed2\u306e\u30d4\u30af\u30bb\u30eb\u306eN x N\u306e\u30de\u30c8\u30ea\u30c3\u30af\u30b9\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30b5\u30a4\u30ba\u3068\u5404\u30d4\u30af\u30bb\u30eb\u306e\u8272\u306f\u5b9f\u884c\u6642\u306b\u6c7a\u5b9a\u3055\u308c\u3001QR\u30b3\u30fc\u30c9\uff65\u30c7\u30fc\u30bf\uff65\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5185\u306e\u60c5\u5831\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u6b21\u306b\u3001QR\u30b3\u30fc\u30c9\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u898b\u3048\u65b9\u306e2\u3064\u306e\u4f8b\u3092\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/qr-examples.webp",noShadow:!0,mdxType:"Figure"},"QR\u30b3\u30fc\u30c9\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u4f8b"),(0,r.kt)(i.Z,{mdxType:"Caution"},"n x n\u306e\u9ed2\u307e\u305f\u306f\u767d\u306e\u30dc\u30c3\u30af\u30b9\u3092\u30b3\u30f3\u30c6\u30ca\u306e\u5b50\u3068\u3057\u3066\u6301\u3064\u3053\u3068\u3067\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\uff65\u30a2\u30d7\u30ed\u30fc\u30c1\u3067QR\u30b3\u30fc\u30c9\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002 \u305f\u3060\u3057\u3001\u3053\u306e\u65b9\u6cd5\u306f\u5927\u91cf\u306e\u30e1\u30e2\u30ea\u3092\u4f7f\u7528\u3057\u3001\u304a\u305d\u3089\u304f\u52b9\u7387\u6027\u3084\u67d4\u8edf\u6027\u304c\u4f4e\u304f\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u6a19\u6e96\u306e ",(0,r.kt)(g.Z,{mdxType:"InlineCode"},"touchgfx::Button")," \uff08\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3067\u63d0\u4f9b\u3055\u308c\u308b\uff09\u306f\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u3067\u306f\u306a\u304f\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u3057\u3066\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u306e\u30dc\u30bf\u30f3\u3054\u3068\u306e\u30e1\u30e2\u30ea\u304c\u7bc0\u7d04\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h3",b({},{id:"your-own-custom-widget"}),"\u72ec\u81ea\u306e\u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Widget"),"\u30af\u30e9\u30b9\u3092\u62e1\u5f35\u3059\u308b\u3001\u30e6\u30fc\u30b6\u72ec\u81ea\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e2\u3064\u3092\u8a18\u8ff0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u63cf\u753b\u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5857\u308a\u3064\u3076\u3057\u90e8\u5206")),(0,r.kt)("h3",b({},{id:"partial-drawing"}),"\u90e8\u5206\u63cf\u753b"),(0,r.kt)("p",null,"\u3069\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3082\uff08\u3057\u305f\u304c\u3063\u3066\u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3082\uff09\u90e8\u5206\u63cf\u753b\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306f\u305d\u306e\u4e00\u90e8\u306e\u307f\u3092\u63cf\u753b\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u305d\u306e\u7406\u7531\u306f2\u70b9\u3042\u308a\u307e\u3059\u3002 \u591a\u304f\u306e\u5834\u5408\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u5168\u4f53\u3092\u518d\u63cf\u753b\u3059\u308b\u5fc5\u8981\u306f\u306a\u304f\u3001\u4e00\u90e8\u306e\u307f\u3092\u518d\u63cf\u753b\u3057\u307e\u3059\u3002 TouchGFX\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3067\u306f\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u63cf\u753b\u3092\u8907\u6570\u306e\u90e8\u5206\u63cf\u753b\u306b\u5206\u5272\u3057\u3066\u3001\u63cf\u753b\u3055\u308c\u308b\u30d4\u30af\u30bb\u30eb\u306e\u5168\u4f53\u6570\u3092\u6700\u5c0f\u5316\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u3046\u3057\u305f\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u90e8\u5206\u63cf\u753b\u306b\u3088\u308a\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u305d\u306e\u4e00\u90e8\u306e\u307f\u3092\u63cf\u753b\u3059\u308b\u3088\u3046\u306b\u6c42\u3081\u3089\u308c\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4f8b\u3068\u3057\u3066\u3001\u3053\u306eQR\u30b3\u30fc\u30c9\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u306f\u3001\u305d\u308c\u81ea\u8eab\u306e\u30cf\u30a4\u30e9\u30a4\u30c8\u3055\u308c\u305f\u90e8\u5206\u306e\u307f\u3092\u63cf\u753b\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/qr-partial-drawing.webp",noShadow:!0,mdxType:"Figure"},"QR\u30b3\u30fc\u30c9\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u90e8\u5206\u63cf\u753b"),(0,r.kt)("p",null,"\u30b3\u30fc\u30c9\u5185\u3067\u3053\u308c\u3092\u884c\u3046\u306b\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"draw"),"\u30e1\u30bd\u30c3\u30c9\u3092\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"virtual void draw(const touchgfx::Rect& invalidatedArea) const\n{\n    //run through the pixels of the invalidated area\n    //draw a black pixel if the qr data object has a value at this position\n    //draw a white pixel otherwise\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"invalidatedArea"),"\u304c\u3001\u66f4\u65b0\u306e\u5fc5\u8981\u304c\u3042\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u90e8\u5206\u3067\u3059\u3002 \u3053\u306eQR\u30b3\u30fc\u30c9\u306e\u4f8b\u3067\u306f\u3001\u7121\u52b9\u5316\u9818\u57df\u306f\u30cf\u30a4\u30e9\u30a4\u30c8\u8868\u793a\u3055\u308c\u305f\u9818\u57df\u3067\u3059\u3002 \u9818\u57df\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5de6\u4e0a\u9685\u3092\u57fa\u6e96\u3068\u3059\u308b\u5ea7\u6a19\u3067\u8868\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(i.Z,{mdxType:"Caution"},"\u3053\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5f79\u76ee\u306f\u3001\u7121\u52b9\u5316\u9818\u57df\u306e\u5185\u90e8\u3092\u63cf\u753b\u3059\u308b\u3053\u3068\u3067\u3059\u3002 \u7121\u52b9\u5316\u9818\u57df\u4ee5\u5916\u3092\u63cf\u753b\u3057\u305f\u5834\u5408\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u5168\u4f53\u3067\u6b63\u3057\u3044\u52d5\u4f5c\u304c\u5f97\u3089\u308c\u307e\u305b\u3093\u3002"),(0,r.kt)(o.Z,{mdxType:"Tip"},"**\u5206\u7bc0\u4e0d\u5099** ",(0,r.kt)(g.Z,{mdxType:"InlineCode"},"draw")," \u30e1\u30bd\u30c3\u30c9\u306f ",(0,r.kt)(g.Z,{mdxType:"InlineCode"},"const")," \u3067\u3059\u3002\u6700\u9069\u5316\u3055\u308c\u305f\u63cf\u753b\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u63cf\u753b\u3092\u8907\u6570\u306e\u63cf\u753b\u547c\u3073\u51fa\u3057\u306b\u5206\u5272\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u304b\u3089\u3067\u3059\u3002 **\u5206\u7bc0\u4e0d\u5099** ",(0,r.kt)(g.Z,{mdxType:"InlineCode"},"const")," \u306b\u3088\u3063\u3066\u3001\u3053\u308c\u3089\u306e\u8907\u6570\u306e ",(0,r.kt)(g.Z,{mdxType:"InlineCode"},"draw")," \u5b9f\u884c\u306e\u9593\u306b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u79fb\u52d5\u3057\u305f\u308a\u3001\u66f4\u65b0\u3055\u308c\u305f\u308a\u3057\u306a\u304f\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("h3",b({},{id:"solid-area"}),"\u5857\u308a\u3064\u3076\u3057\u9818\u57df"),(0,r.kt)("p",null,"\u3055\u3089\u306b\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u3001\u305d\u308c\u81ea\u8eab\u306e\u5857\u308a\u3064\u3076\u3057\u90e8\u5206\u306e\u5927\u304d\u3055\u3092\u30ec\u30dd\u30fc\u30c8\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u5857\u308a\u3064\u3076\u3057\u3068\u306f\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u3067\u305d\u306e\u80cc\u5f8c\u306b\u3042\u308b\u3082\u306e\u304c\u898b\u3048\u306a\u3044\u72b6\u614b\u3067\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u6a19\u6e96\u306e\u8d64\u8272\u306e\u30dc\u30c3\u30af\u30b9\u306f\u5b8c\u5168\u306a\u5857\u308a\u3064\u3076\u3057\u3067\u3059\u304c\u3001\u30a2\u30eb\u30d5\u30a1\u5024\u304c50%\u306e\u753b\u50cf\u306f\u5b8c\u5168\u306a\u975e\u5857\u308a\u3064\u3076\u3057\u3067\u3059\u3002\u305d\u306e\u80cc\u5f8c\u306e\u3082\u306e\u304c\u3059\u3079\u3066\u898b\u3048\u308b\u304b\u3089\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u5857\u308a\u3064\u3076\u3057\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306b\u3088\u3063\u3066TouchGFX\u306f\u63cf\u753b\u51e6\u7406\u306e\u901f\u5ea6\u3092\u4e0a\u3052\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u5857\u308a\u3064\u3076\u3057\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u4e0b\u306b\u3042\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u63cf\u753b\u3059\u308b\u5fc5\u8981\u304c\u306a\u3044\u306e\u3067\u3001\u63cf\u753b\u306e\u5fc5\u8981\u304c\u3042\u308b\u30d4\u30af\u30bb\u30eb\u6570\u304c\u5c11\u306a\u304f\u306a\u308b\u304b\u3089\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u30b3\u30fc\u30c9\u5185\u3067\u5857\u308a\u3064\u3076\u3057\u9818\u57df\u3092\u30ec\u30dd\u30fc\u30c8\u3059\u308b\u306b\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"getSolidRect"),"\u30e1\u30bd\u30c3\u30c9\u3092\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"virtual Rect getSolidRect() const;\n")),(0,r.kt)("p",null,"\u3053\u306e\u4f8b\u306eQR\u30b3\u30fc\u30c9\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306f\u5b8c\u5168\u306a\u5857\u308a\u3064\u3076\u3057\u306b\u306a\u308a\u307e\u3059\u3002 \u9ed2\u8272\u3068\u767d\u8272\u306e\u30d4\u30af\u30bb\u30eb\u306e\u80cc\u5f8c\u306f\u4f55\u3082\u898b\u3048\u306a\u304f\u306a\u308a\u307e\u3059\u3002 \u3053\u306e\u305f\u3081\u3001\u30e1\u30bd\u30c3\u30c9\u304c\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30d5\u30eb\uff65\u30b5\u30a4\u30ba\u306e\u9577\u65b9\u5f62\u3092\u8fd4\u3059\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"virtual Rect getSolidRect() const\n{\n    return touchgfx::Rect(0, 0, getWidth(), getHeight());\n}\n")),(0,r.kt)("h3",b({},{id:"example-source-code"}),"\u30bd\u30fc\u30b9\uff65\u30b3\u30fc\u30c9\u306e\u4f8b"),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u7d42\u4e86\u3059\u308b\u3068\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\uff08\u63d0\u4f9b\u3055\u308c\u308b\u30c7\u30fc\u30bf\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\uff09\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/qr-screenshot.webp",noShadow:!0,mdxType:"Figure"},"QR\u30b3\u30fc\u30c9\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8"),(0,r.kt)("p",null,"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5b8c\u5168\u306a\u30b3\u30fc\u30c9\u3092\u4ee5\u4e0b\u306b\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)(h.Z,{mdxType:"CodeHeader"},"gui/include/gui/common/QRCodeWidget.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"\n#ifndef QR_CODE_WIDGET_HPP\n#define QR_CODE_WIDGET_HPP\n\n#include <touchgfx/widgets/Widget.hpp>\n\nclass QRCodeWidget : public touchgfx::Widget\n{\npublic:\n    QRCodeWidget();\n\n    virtual void draw(const touchgfx::Rect& invalidatedArea) const;\n    virtual touchgfx::Rect getSolidRect() const;\n\n    void setQRCodeData(QRCodeData* data);\n    void setScale(uint8_t s);\n\nprivate:\n    void updateSize();\n\n    QRCodeData* data;\n    uint8_t scale;\n};\n#endif\n")),(0,r.kt)("p",null,"\u30d8\u30c3\u30c0\uff65\u30d5\u30a1\u30a4\u30eb\u3067\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx::Widget"),"\u30af\u30e9\u30b9\u306e\u62e1\u5f35\u3068\u3057\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"draw"),"\u30e1\u30bd\u30c3\u30c9\u3068",(0,r.kt)("inlineCode",{parentName:"p"},"getSolidRect"),"\u30e1\u30bd\u30c3\u30c9\u3092\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3057\u3066\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u63cf\u753b\u65b9\u6cd5\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002 QR\u30b3\u30fc\u30c9\u306e\u30c7\u30fc\u30bf\u3092\u8a2d\u5b9a\u3059\u308b\u30e1\u30bd\u30c3\u30c9\u3068\u3001QR\u30b3\u30fc\u30c9\u306e\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\uff65\u30d5\u30a1\u30af\u30bf\u3092\u8a2d\u5b9a\u3059\u308b\u30e1\u30bd\u30c3\u30c9\u3092\u5ba3\u8a00\u3057\u307e\u3059\u3002"),(0,r.kt)(h.Z,{mdxType:"CodeHeader"},"gui/src/common/QRCodeWidget.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"#include <gui/common/QRCodeWidget.hpp>\n\nQRCodeWidget::QRCodeWidget() :\n    data(0),\n    scale(1)\n{\n}\n\nvoid QRCodeWidget::draw(const touchgfx::Rect& invalidatedArea) const\n{\n    if (!data)\n    {\n        return;\n    }\n\n    touchgfx::Rect absolute = getAbsoluteRect();\n\n    uint16_t* framebuffer = touchgfx::HAL::getInstance()->lockFrameBuffer();\n\n    for (int y = invalidatedArea.y; y < invalidatedArea.bottom(); y++)\n    {\n        for (int x = invalidatedArea.x; x < invalidatedArea.right(); x++)\n        {\n            framebuffer[absolute.x + x + (absolute.y + y) * touchgfx::HAL::DISPLAY_WIDTH] =\n              data->at(x / scale, y / scale) ? 0x0000 : 0xffff;\n        }\n    }\n\n    touchgfx::HAL::getInstance()->unlockFrameBuffer();\n}\n\ntouchgfx::Rect QRCodeWidget::getSolidRect() const\n{\n    return touchgfx::Rect(0, 0, getWidth(), getHeight());\n}\n\nvoid QRCodeWidget::setQRCodeData(QRCodeData* qrCode)\n{\n    data = qrCode;\n    updateSize();\n}\n\nvoid QRCodeWidget::setScale(uint8_t s)\n{\n    scale = s;\n    updateSize();\n}\n\nvoid QRCodeWidget::updateSize()\n{\n    if (data)\n    {\n        setWidth(data->getSize() * scale);\n        setHeight(data->getSize() * scale);\n    }\n}\n")),(0,r.kt)("p",null,"\u30bd\u30fc\u30b9\uff65\u30d5\u30a1\u30a4\u30eb\u3067\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"draw"),"\u30e1\u30bd\u30c3\u30c9\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002 \u3053\u306e\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u7121\u52b9\u5316\u9818\u57df\u5185\u306e\u30d4\u30af\u30bb\u30eb\u3054\u3068\u306b\u51e6\u7406\u3092\u9032\u3081\u3001\u30c7\u30fc\u30bf\uff65\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\uff65\u30d5\u30a1\u30af\u30bf\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u57fa\u3065\u3044\u3066\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u8272\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getSolidRect"),"\u30e1\u30bd\u30c3\u30c9\u306f\u5b8c\u5168\u306a\u5857\u308a\u3064\u3076\u3057\u3068\u3057\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30ec\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{mdxType:"Caution"},"\u3053\u3053\u3067\u306f ",(0,r.kt)(g.Z,{mdxType:"InlineCode"},"draw")," \u30e1\u30bd\u30c3\u30c9\u306e\u4e00\u90e8\u3068\u3057\u3066\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u30ed\u30c3\u30af\u304a\u3088\u3073\u30ed\u30c3\u30af\u89e3\u9664\u3057\u307e\u3057\u305f\u3002 \u3053\u308c\u306f\u3001\u63cf\u753b\u306e\u958b\u59cb\u6642\u306b\u78ba\u5b9f\u306bDMA\u304c\u63cf\u753b\u3092\u7d42\u3048\u3066\u3044\u308b\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30b3\u30fc\u30c9\u3067\u306f\u5c0f\u3055\u3044\u30af\u30e9\u30b9 / \u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u4f7f\u7528\u3057\u3066\u3001QR\u30b3\u30fc\u30c9\u306e\u30c7\u30fc\u30bf\u306b\u3082\u30a2\u30af\u30bb\u30b9\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"class QRCodeData\n{\npublic:\n    uint8_t getSize();\n    bool at(uint8_t x, uint8_t y);\n};\n")),(0,r.kt)(s.Z,{mdxType:"FurtherReading"},(0,r.kt)(m.Z,{to:"/download/widgets/qr-code.zip",target:"_blank",mdxType:"Link"},"QRCode"),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068",(0,r.kt)(m.Z,{to:"/download/widgets/lens.zip",target:"_blank",mdxType:"Link"},"Lens"),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u30c1\u30a7\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)(p,{mdxType:"Try"},(0,r.kt)("li",null,"\u767d\u8272\u306e\u30d4\u30af\u30bb\u30eb\u304c\u5b8c\u5168\u306b\u900f\u660e\u306b\u306a\u308b\u3088\u3046\u306bQR\u30b3\u30fc\u30c9\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u5909\u66f4\u3057\u307e\u3059\u3002"),(0,r.kt)("li",null,"\u30bb\u30d4\u30a2\uff65\u30d5\u30a3\u30eb\u30bf\u3001\u30de\u30f3\u30c7\u30eb\u30d6\u30ed\uff65\u30d5\u30e9\u30af\u30bf\u30eb\u3001gif\u753b\u50cf\u3001\u305d\u306e\u4ed6\u3092\u8868\u793a\u3059\u308b\u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("li",null,"\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u3092\u4f7f\u7528\u3057\u3066\u6700\u3082\u7c21\u5358\u306b\u5b9f\u884c\u3067\u304d\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3084\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30a2\u30d7\u30ed\u30fc\u30c1\u3092\u4f7f\u7528\u3057\u3066\u6700\u3082\u7c21\u5358\u306b\u5b9f\u73fe\u3067\u304d\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306b\u3064\u3044\u3066\u691c\u8a0e\u3057\u307e\u3059\u3002")),(0,r.kt)("h2",b({},{id:"modifying-standard-widgetscontainers"}),"\u6a19\u6e96\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8 / \u30b3\u30f3\u30c6\u30ca\u306e\u5909\u66f4"),(0,r.kt)("p",null,"\u6a19\u6e96\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30bd\u30fc\u30b9\uff65\u30b3\u30fc\u30c9\u306f\u3001TouchGFX\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u6642\u306b\u542b\u307e\u308c\u307e\u3059\u3002 \u3053\u308c\u3089\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30cb\u30fc\u30ba\u306b\u5408\u308f\u305b\u3066\u5909\u66f4\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u6a19\u6e96\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304a\u3088\u3073\u30b3\u30f3\u30c6\u30ca\u306e\u30bd\u30fc\u30b9\uff65\u30b3\u30fc\u30c9\u306f\u6b21\u306e\u30d5\u30a9\u30eb\u30c0\u5185\u306b\u914d\u7f6e\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{}),"Middlewares\\ST\\touchgfx\\framework\\source\\touchgfx\\widgets\n")),(0,r.kt)("p",null,"\u5f8c\u65b9\u4e92\u63db\u6027\u3092\u7dad\u6301\u3059\u308b\u305f\u3081\u306b\u3001\u30b3\u30a2\uff65\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u306f\u6a19\u6e96\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304a\u3088\u3073\u30b3\u30f3\u30c6\u30ca\u306e\u30b3\u30f3\u30d1\u30a4\u30eb\uff65\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002 \u3057\u305f\u304c\u3063\u3066\u3001\u3053\u308c\u3089\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u3067\u30b3\u30f3\u30d1\u30a4\u30eb\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,r.kt)(i.Z,{mdxType:"Caution"},"\u6a19\u6e96\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8 / \u30b3\u30f3\u30c6\u30ca\u3092\u76f4\u63a5\u5909\u66f4\u3059\u308b\u3053\u3068\u306f\u63a8\u5968\u3055\u308c\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u30bd\u30fc\u30b9\uff65\u30b3\u30fc\u30c9\u306f\u3001TouchGFX\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5185\u90e8\u52d5\u4f5c\u3092\u76f4\u611f\u7684\u306b\u7406\u89e3\u3057\u7fd2\u5f97\u3059\u308b\u3053\u3068\u3092\u4e3b\u306a\u76ee\u7684\u3068\u3057\u3066\u3044\u307e\u3059\u3002 \u4f55\u304b\u6a19\u6e96\u5b9f\u88c5\u3068\u306f\u7570\u306a\u308b\u52d5\u4f5c\u304c\u5fc5\u8981\u306a\u5834\u5408\u306b\u306f\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u3092\u30b5\u30d6\u30af\u30e9\u30b9\u5316\u307e\u305f\u306f\u4f5c\u6210\u3059\u308b\u3053\u3068\u3067\u9054\u6210\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u63a8\u5968\u3055\u308c\u308b\u30a2\u30d7\u30ed\u30fc\u30c1\u3067\u3082\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u63a8\u5968\u306e\u7406\u7531\u306f\u6b21\u306e2\u3064\u306e\u8981\u7d20\u306b\u3088\u308b\u3082\u306e\u3067\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1\u3064\u76ee\u306f\u3001\u3053\u308c\u307e\u3067\u306b\u884c\u3063\u305f\u5909\u66f4\u3092\u624b\u52d5\u3067\u30de\u30fc\u30b8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u305f\u3081\u306b\u3001TouchGFX\u306e\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u3078\u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u304c\u56f0\u96e3\u306b\u306a\u308b\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"2\u3064\u76ee\u306f\u3001\u7279\u5b9a\u306e\u52d5\u4f5c\u306b\u4f9d\u5b58\u3059\u308b\u6a19\u6e96\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304a\u3088\u3073\u30b3\u30f3\u30c6\u30ca\u3092\u58ca\u3059\u5371\u967a\u304c\u751f\u3058\u308b\u3053\u3068\u3067\u3059\u3002")),(0,r.kt)("p",null,"\u3057\u305f\u304c\u3063\u3066\u3001\u6a19\u6e96\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8 / \u30b3\u30f3\u30c6\u30ca\u3092\u5909\u66f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u30bd\u30fc\u30b9\uff65\u30b3\u30fc\u30c9\u3092\u76f4\u63a5\u5909\u66f4\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u30b3\u30d4\u30fc\u3092\u4f5c\u6210\u3057\u3001\u540d\u524d\u3092\u5909\u66f4\u3057\u3066\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3068\u306f\u8a00\u3046\u3082\u306e\u306e\u3001\u958b\u767a\u8005\u304c\u9069\u5207\u3060\u3068\u5224\u65ad\u3057\u305f\u3053\u3068\u3092\u5b9f\u884c\u3059\u308b\u306e\u306f\u81ea\u7531\u3067\u3059\u3002 \u6a19\u6e96\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30bd\u30fc\u30b9\uff65\u30b3\u30fc\u30c9\u3092\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u8ffd\u52a0\u3059\u308b\u3068\u3001\u30ea\u30f3\u30ab\u306f\uff08\u30b3\u30a2\uff65\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u3042\u308b\u3082\u306e\u3067\u306f\u306a\u304f\uff09\u305d\u3061\u3089\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u9078\u629e\u3057\u307e\u3059\u3002 \u3053\u306e\u7d50\u679c\u3001\u30bd\u30fc\u30b9\uff65\u30b3\u30fc\u30c9\u3092\u81ea\u5206\u306e\u30b3\u30f3\u30d1\u30a4\u30eb\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3067\u3001\u6a19\u6e96\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5909\u66f4\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"))}Z.isMDXComponent=!0}}]);