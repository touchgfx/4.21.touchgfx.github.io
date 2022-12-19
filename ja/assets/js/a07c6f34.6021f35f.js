"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5933],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},29415:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=l},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},75073:function(e,t,n){n.r(t),n.d(t,{assets:function(){return x},contentTitle:function(){return T},default:function(){return M},frontMatter:function(){return y},metadata:function(){return I},toc:function(){return C}});var r=n(3905),a=n(39130),o=n(29415),l=n(67294);class i extends l.Component{render(){return l.createElement("i",null,this.props.children)}}var p=i,u=n(31217),s=n(22425),c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&h(e,n,t[n]);if(f)for(var n of f(t))g.call(t,n)&&h(e,n,t[n]);return e};const y={id:"backend-communication",title:"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u901a\u4fe1"},T=void 0,I={unversionedId:"development/ui-development/touchgfx-engine-features/backend-communication",id:"development/ui-development/touchgfx-engine-features/backend-communication",title:"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u901a\u4fe1",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/backend-communication.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/backend-communication",permalink:"/4.21/ja/docs/development/ui-development/touchgfx-engine-features/backend-communication",draft:!1,tags:[],version:"current",frontMatter:{id:"backend-communication",title:"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u901a\u4fe1"},sidebar:"docs",previous:{title:"\u30d0\u30a4\u30ca\u30ea\u7ffb\u8a33",permalink:"/4.21/ja/docs/development/ui-development/touchgfx-engine-features/using-binary-translations"},next:{title:"\u30df\u30c3\u30af\u30b9\u30a4\u30f3",permalink:"/4.21/ja/docs/development/ui-development/touchgfx-engine-features/mixins"}},x={},C=[{value:"\u30e2\u30c7\u30eb\uff65\u30af\u30e9\u30b9",id:"the-model-class",level:2},{value:"\u30b7\u30b9\u30c6\u30e0\u3068\u306e\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9",id:"system-interfacing",level:2},{value:"GUI\u30bf\u30b9\u30af\u304b\u3089\u306e\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0",id:"sampling-from-gui-task",level:3},{value:"\u30bb\u30ab\u30f3\u30c0\u30ea\uff65\u30bf\u30b9\u30af\u304b\u3089\u306e\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0",id:"sampling-from-secondary-task",level:3},{value:"UI\u3078\u306e\u30c7\u30fc\u30bf\u306e\u4f1d\u64ad",id:"propagating-data-to-ui",level:2},{value:"UI\u304b\u3089\u5468\u8fba\u30b7\u30b9\u30c6\u30e0\u3078\u306e\u30c7\u30fc\u30bf\u306e\u4f1d\u9001",id:"transmitting-data-from-ui-to-surrounding-system",level:2},{value:"\u4f8b",id:"examples",level:2},{value:"GUI\u30bf\u30b9\u30af\u304b\u3089",id:"from-gui-task",level:3},{value:"\u4ed6\u306e\u30bf\u30b9\u30af\u304b\u3089",id:"from-other-task",level:3},{value:"\u8907\u6570\u30bf\u30b9\u30af\u304b\u3089",id:"from-multiple-tasks",level:3},{value:"\u30bf\u30b9\u30af\u304a\u3088\u3073\u5916\u90e8\u306e\u5272\u8fbc\u307f\u30e9\u30a4\u30f3\u304b\u3089",id:"from-task-and-external-interrupt-line",level:3}],b={toc:C};function M(e){var t,n=e,{components:l}=n,i=((e,t)=>{var n={};for(var r in e)k.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=v(v({},b),i),d(t,m({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u307b\u3068\u3093\u3069\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001UI\u3092\u4f55\u3089\u304b\u306e\u65b9\u6cd5\u3067\u30b7\u30b9\u30c6\u30e0\u306e\u305d\u306e\u4ed6\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u63a5\u7d9a\u3057\u3001\u30c7\u30fc\u30bf\u3092\u9001\u53d7\u4fe1\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u305f\u3081\u306b\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30da\u30ea\u30d5\u30a7\u30e9\u30eb\uff08\u30bb\u30f3\u30b5\uff65\u30c7\u30fc\u30bf\u3001A/D\u5909\u63db\u3001\u30b7\u30ea\u30a2\u30eb\u901a\u4fe1\u306a\u3069\uff09\u3068\u306e\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3084\u3001\u4ed6\u306e\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\uff65\u30e2\u30b8\u30e5\u30fc\u30eb\u3068\u306e\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u884c\u3046\u3053\u3068\u304c\u8003\u3048\u3089\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u3053\u306e\u63a5\u7d9a\u3092\u5b9f\u88c5\u3059\u308b\u305f\u3081\u306b\u63a8\u5968\u3055\u308c\u308b\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u6700\u521d\u306e\u65b9\u6cd5\u306f",(0,r.kt)("a",v({parentName:"p"},{href:"#sampling-from-gui-task"}),"\u30af\u30a4\u30c3\u30af\uff65\u30a2\u30f3\u30c9\uff65\u30c0\u30fc\u30c6\u30a3"),"\u306a\u30a2\u30d7\u30ed\u30fc\u30c1\u3067\u3001\u4e3b\u306b\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u3092\u76ee\u7684\u3068\u3059\u308b\u3082\u306e\u3067\u3059\u3002\u4e00\u65b9\u3067\u3001",(0,r.kt)("a",v({parentName:"p"},{href:"#sampling-from-secondary-task"}),"2\u756a\u76ee\u306e\u65b9\u6cd5"),"\u306f\u3001\u73fe\u5b9f\u4e16\u754c\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067UI\u3092\u305d\u306e\u4ed6\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u6b63\u3057\u304f\u63a5\u7d9a\u3059\u308b\u305f\u3081\u306e\u5805\u5b9f\u306a\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u30fc\u306b\u57fa\u3065\u304f\u3082\u306e\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u8a18\u4e8b\u306e\u6700\u5f8c\u306b\u306f\u3001\u4e21\u65b9\u306e\u65b9\u6cd5\u3092\u7d39\u4ecb\u3059\u308b\u30b5\u30f3\u30d7\u30eb\u3078\u306e\u30ea\u30f3\u30af\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("h2",v({},{id:"the-model-class"}),"\u30e2\u30c7\u30eb\uff65\u30af\u30e9\u30b9"),(0,r.kt)("p",null,"\u3059\u3079\u3066\u306eTouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u306f\u30e2\u30c7\u30eb\uff65\u30af\u30e9\u30b9\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u3001UI\u306e\u72b6\u614b\u60c5\u5831\u3092\u4fdd\u5b58\u3059\u308b\u306e\u3068\u306f\u5225\u306b\u3001\u5468\u8fba\u30b7\u30b9\u30c6\u30e0\u3078\u306e\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3068\u3057\u3066\u6a5f\u80fd\u3059\u308b\u76ee\u7684\u3082\u6301\u3063\u3066\u3044\u307e\u3059\u3002 \u30e2\u30c7\u30eb\uff65\u30af\u30e9\u30b9\u306b\u3088\u3063\u3066\u3001\u4e21\u65b9\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30da\u30ea\u30d5\u30a7\u30e9\u30eb\u3092\u53c2\u7167\u3059\u308b\u3060\u3051\u3067\u306a\u304f\u3001\u30b7\u30b9\u30c6\u30e0\u5185\u306e\u4ed6\u306eOS\u30bf\u30b9\u30af\u3068\u3082\u901a\u4fe1\u3057\u307e\u3059\u3002 \u901a\u5e38\u3001\u4ed6\u306e\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\uff65\u30e2\u30b8\u30e5\u30fc\u30eb\u3084\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306b\u3001\u500b\u5225\u306e\u30d3\u30e5\u30fc\uff65\u30af\u30e9\u30b9\u3067\u30a2\u30af\u30bb\u30b9\u3059\u308b\u306e\u306f\u826f\u3044\u8a2d\u8a08\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"\u30e2\u30c7\u30eb\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,r.kt)(a.Z,{to:"../software-architecture/model-view-presenter-design-pattern",mdxType:"Link"},"MVP\u306e\u30d1\u30bf\u30fc\u30f3\u300d\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u7406\u7531\u304b\u3089\u3001\u30e2\u30c7\u30eb\uff65\u30af\u30e9\u30b9\u306f\u3053\u3046\u3057\u305f\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\uff65\u30b3\u30fc\u30c9\u306e\u914d\u7f6e\u306b\u3088\u304f\u9069\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u30e2\u30c7\u30eb\uff65\u30af\u30e9\u30b9\u306b\u306f ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"tick()")," \u95a2\u6570\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u6bce\u30d5\u30ec\u30fc\u30e0\u3067\u81ea\u52d5\u7684\u306b\u547c\u3073\u51fa\u3055\u308c\u3001\u4ed6\u306e\u30b5\u30d6\u30e2\u30b8\u30e5\u30fc\u30eb\u304b\u3089\u306e\u30a4\u30d9\u30f3\u30c8\u3092\u63a2\u3057\u3066\u53cd\u5fdc\u3059\u308b\u305f\u3081\u306b\u5b9f\u88c5\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u30e2\u30c7\u30eb\uff65\u30af\u30e9\u30b9\u306b\u306f\u73fe\u5728\u30a2\u30af\u30c6\u30a3\u30d6\u306a\u30d7\u30ec\u30bc\u30f3\u30bf\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u53d7\u4fe1\u3059\u308b\u30a4\u30d9\u30f3\u30c8\u3092UI\u306b\u901a\u77e5\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,r.kt)("h2",v({},{id:"system-interfacing"}),"\u30b7\u30b9\u30c6\u30e0\u3068\u306e\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9"),(0,r.kt)("p",null,"\u5468\u8fba\u30b7\u30b9\u30c6\u30e0\u3068\u306e\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306b\u306f2\u3064\u306e\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002GUI\u30bf\u30b9\u30af\u304b\u3089\u76f4\u63a5\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3059\u308b\u65b9\u6cd5\u3068\u3001\u30bb\u30ab\u30f3\u30c0\u30ea\uff65\u30bf\u30b9\u30af\u304b\u3089\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3059\u308b\u65b9\u6cd5\u3067\u3059\u3002"),(0,r.kt)("h3",v({},{id:"sampling-from-gui-task"}),"GUI\u30bf\u30b9\u30af\u304b\u3089\u306e\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0"),(0,r.kt)("p",null,"\u5468\u8fba\u30b7\u30b9\u30c6\u30e0\u3068\u306e\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u305f\u3081\u306b\u6700\u9069\u306a\u65b9\u6cd5\u306f\u3001\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u304c\u5fc5\u8981\u3068\u3055\u308c\u308b\u983b\u5ea6\u3001\u305d\u308c\u306b\u304b\u304b\u308b\u6642\u9593\u306e\u9577\u3055\u3001\u304b\u304b\u308b\u6642\u9593\u304c\u3069\u308c\u307b\u3069\u91cd\u8981\u304b\u306b\u3088\u3063\u3066\u6c7a\u307e\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u3089\u306e\u70b9\u3067\u306e\u8981\u4ef6\u304c\u7de9\u3084\u304b\u306a\u5834\u5408\u3001\u6700\u3082\u5358\u7d14\u306a\u30a2\u30d7\u30ed\u30fc\u30c1\u306f\u3001 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"Model::tick")," \u95a2\u6570\u3067\u5468\u8fba\u30b7\u30b9\u30c6\u30e0\u3092\u76f4\u63a5\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3059\u308b\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u306e\u5b9f\u884c\u983b\u5ea6\u304c\u30d5\u30ec\u30fc\u30e0\uff65\u30ec\u30fc\u30c8\uff08\u901a\u5e38\u306f60Hz\u524d\u5f8c\uff09\u3088\u308a\u3082\u4f4e\u3044\u5834\u5408\u306f\u3001\u5358\u7d14\u306b\u30ab\u30a6\u30f3\u30bf\u3092\u8ffd\u52a0\u3057\u3001N\u756a\u76ee\u306e\u30c6\u30a3\u30c3\u30af\u3054\u3068\u306b\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 \u3053\u306e\u65b9\u6cd5\u3067\u5b9f\u884c\u3059\u308b\u5834\u5408\u3001\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u64cd\u4f5c\u3092\u3042\u308b\u7a0b\u5ea6\u9ad8\u901f\uff08\u901a\u5e38\u306f1ms\u4ee5\u4e0b\uff09\u3067\u884c\u3046\u5fc5\u8981\u304c\u3042\u308a\u3001\u305d\u3046\u3067\u306a\u3044\u3068\u30d5\u30ec\u30fc\u30e0\uff65\u30ec\u30fc\u30c8\u306b\u652f\u969c\u304c\u51fa\u59cb\u3081\u307e\u3059\u3002\u3053\u306e\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u306fGUI\u30bf\u30b9\u30af\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3067\u5b9f\u884c\u3055\u308c\u3001\u30d5\u30ec\u30fc\u30e0\u306e\u63cf\u753b\u3092\u9045\u5ef6\u3055\u305b\u308b\u304b\u3089\u3067\u3059\u3002"),(0,r.kt)("h3",v({},{id:"sampling-from-secondary-task"}),"\u30bb\u30ab\u30f3\u30c0\u30ea\uff65\u30bf\u30b9\u30af\u304b\u3089\u306e\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0"),(0,r.kt)("p",null,"\u3042\u308b\u3044\u306f\u3001GUI\u30bf\u30b9\u30af\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u5185\u3067\u5468\u8fba\u30b7\u30b9\u30c6\u30e0\u3068\u76f4\u63a5\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u306e\u304c\u671b\u307e\u3057\u304f\u306a\u3044\u5834\u5408\u3001\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3092\u5b9f\u884c\u3059\u308b\u65b0\u3057\u3044OS\u30bf\u30b9\u30af\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30bf\u30b9\u30af\u306f\u3001\u7279\u5b9a\u306e\u30b7\u30ca\u30ea\u30aa\u3067\u5fc5\u8981\u3068\u3055\u308c\u308b\u6b63\u78ba\u306a\u6642\u9593\u9593\u9694\u3067\u5b9f\u884c\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002 \u307e\u305f\u3001\u30e6\u30fc\u30b6\u306e\u30cb\u30fc\u30ba\u306b\u5fdc\u3058\u3066\u3001\u3053\u306e\u65b0\u3057\u3044\u30bf\u30b9\u30af\u306e\u512a\u5148\u9806\u4f4d\u3092GUI\u30bf\u30b9\u30af\u3088\u308a\u3082\u4f4e\u304f\u3001\u307e\u305f\u306f\u9ad8\u304f\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u512a\u5148\u9806\u4f4d\u3092\u9ad8\u304f\u3059\u308b\u3068\u3001\u5b9f\u884c\u4e2d\u306eGUI\u30bf\u30b9\u30af\u306e\u5185\u5bb9\u306b\u95a2\u308f\u3089\u305a\u3001\u6307\u5b9a\u3057\u305f\u6b63\u78ba\u306a\u6642\u9593\u306b\u3053\u3061\u3089\u306e\u30bf\u30b9\u30af\u304c\u5b9f\u884c\u3055\u308c\u308b\u3053\u3068\u304c\u4fdd\u8a3c\u3055\u308c\u307e\u3059\u3002 \u305f\u3060\u3057\u6b20\u70b9\u3068\u3057\u3066\u3001\u305d\u308c\u304cCPU\u306e\u8ca0\u8377\u304c\u9ad8\u3044\u30d7\u30ed\u30bb\u30b9\u3067\u3042\u308b\u5834\u5408\u3001UI\u306e\u30d5\u30ec\u30fc\u30e0\uff65\u30ec\u30fc\u30c8\u306b\u5f71\u97ff\u3059\u308b\u6050\u308c\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4e00\u65b9\u3001\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u304c\u6642\u9593\u7684\u306b\u91cd\u8981\u3067\u306a\u3044\u5834\u5408\u306f\u3001GUI\u30bf\u30b9\u30af\u3088\u308a\u4f4e\u3044\u512a\u5148\u5ea6\u3092\u5272\u308a\u5f53\u3066\u3001UI\u30d5\u30ec\u30fc\u30e0\u30ec\u30fc\u30c8\u304c\u5468\u56f2\u306e\u30b7\u30b9\u30c6\u30e0\u306e\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u306b\u5f71\u97ff\u3055\u308c\u306a\u3044\u3088\u3046\u306b\u3067\u304d\u307e\u3059\u3002 \u63cf\u753b\u4e2d\u306f\u3001GUI\u30bf\u30b9\u30af\u306e\u30b9\u30ea\u30fc\u30d7\u6642\u9593\u304c\u9577\u304f\uff08DMA\u30d9\u30fc\u30b9\u306e\u30d4\u30af\u30bb\u30eb\u8ee2\u9001\u306e\u5b8c\u4e86\u3092\u5f85\u3064\u5834\u5408\u306a\u3069\uff09\u3001\u512a\u5148\u5ea6\u306e\u4f4e\u3044\u30bf\u30b9\u30af\u3067\u3082\u304b\u306a\u308a\u306e\u983b\u5ea6\u3067\u5b9f\u884c\u53ef\u80fd\u306b\u306a\u308b\u305f\u3081\u3001\u5927\u534a\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3068\u3063\u3066\u306f\u3053\u308c\u3067\u5341\u5206\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u30bb\u30ab\u30f3\u30c0\u30ea\uff65\u30bf\u30b9\u30af\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306b\u306f\u3001RTOS\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u30bf\u30b9\u30af\u9593\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002 \u3059\u3079\u3066\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u307b\u3068\u3093\u3069\u306eRTOS\u306f\u30ad\u30e5\u30fc / \u30e1\u30fc\u30eb\uff65\u30e1\u30ab\u30cb\u30ba\u30e0\u3092\u5099\u3048\u3066\u3044\u308b\u306e\u3067\u3001\u30bf\u30b9\u30af\u9593\u3067\u30c7\u30fc\u30bf\uff08\u901a\u5e38\u306f\u30e6\u30fc\u30b6\u5b9a\u7fa9\u306eC\u69cb\u9020\u4f53\u3001\u30d0\u30a4\u30c8\u914d\u5217\u3001\u307e\u305f\u306f\u5358\u7d14\u306a\u6574\u6570\uff09\u306e\u9001\u4fe1\u304c\u53ef\u80fd\u3067\u3059\u3002 \u65b0\u3057\u3044\u30c7\u30fc\u30bf\u3092GUI\u30bf\u30b9\u30af\u306b\u4f1d\u9001\u3059\u308b\u306b\u306f\u3001UI\u30bf\u30b9\u30af\u7528\u306e\u30e1\u30fc\u30eb\u30dc\u30c3\u30af\u30b9\u307e\u305f\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\uff65\u30ad\u30e5\u30fc\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u3001\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u3092\u4f7f\u7528\u3057\u3066\u30c7\u30fc\u30bf\u3092GUI\u30bf\u30b9\u30af\u306b\u9001\u4fe1\u3057\u307e\u3059\u3002 \u6b21\u306b\u3001 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"Model::tick")," \u3067GUI\u30bf\u30b9\u30af\u306e\u30e1\u30fc\u30eb\u30dc\u30c3\u30af\u30b9\u3092\u30dd\u30fc\u30ea\u30f3\u30b0\u3057\u3066\u3001\u65b0\u7740\u30c7\u30fc\u30bf\u304c\u306a\u3044\u304b\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002 \u305d\u306e\u5834\u5408\u3001\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u53d6\u308a\u3001\u305d\u308c\u306b\u5fdc\u3058\u3066UI\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",v({},{id:"propagating-data-to-ui"}),"UI\u3078\u306e\u30c7\u30fc\u30bf\u306e\u4f1d\u64ad"),(0,r.kt)("p",null,(0,r.kt)("a",v({parentName:"p"},{href:"#sampling-from-gui-task"}),"GUI\u30bf\u30b9\u30af\u304b\u3089\u306e\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0"),"\u3068",(0,r.kt)("a",v({parentName:"p"},{href:"#sampling-from-secondary-task"}),"\u30bb\u30ab\u30f3\u30c0\u30ea\uff65\u30bf\u30b9\u30af\u304b\u3089\u306e\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0"),"\u306e\u3069\u3061\u3089\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3067\u3082\u3001 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"Model::tick")," \u95a2\u6570\u306b\u3088\u3063\u3066\u3001GUI\u30bf\u30b9\u30af\u306fUI\u306b\u8868\u793a\u3059\u3079\u304d\u65b0\u3057\u3044\u30c7\u30fc\u30bf\u3092\u8a8d\u8b58\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002 \u5468\u8fba\u30b7\u30b9\u30c6\u30e0\u3078\u306e\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3068\u3057\u3066\u6a5f\u80fd\u3059\u308b\u306e\u3068\u306f\u5225\u306b\u3001\u30e2\u30c7\u30eb\uff65\u30af\u30e9\u30b9\u306b\u306f\u72b6\u614b\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58\u3059\u308b\u5f79\u76ee\u3082\u3042\u308b\u3053\u3068\u3092\u601d\u3044\u51fa\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3064\u307e\u308a\u3001\u3044\u304f\u3064\u304b\u72b6\u614b\u5909\u6570\u3092\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u3082\u3042\u308b\u304b\u3082\u3057\u308c\u306a\u3044\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u6e29\u5ea6\u30bb\u30f3\u30b5\u304c\u30b7\u30b9\u30c6\u30e0\u306b\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308b\u30b7\u30f3\u30d7\u30eb\u306a\u4f8b\u3092\u8003\u3048\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u3053\u3053\u3067\u306f\u73fe\u5728\u306e\u6e29\u5ea6\u304cUI\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u6e96\u5099\u3068\u3057\u3066\u3001\u4ee5\u4e0b\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u3088\u3046\u306b\u30e2\u30c7\u30eb\uff65\u30af\u30e9\u30b9\u3092\u62e1\u5f35\u3057\u307e\u3059\u3002"),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"Model.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"class Model\n{\npublic:\n  // Function that allow your Presenters to read current temperature.\n  int getCurrentTemperature() const { return currentTemperature; }\n\n  // Called automatically by framework every tick.\n  void tick();\n  ...\nprivate:\n  // Variable storing last received temperature;\n  int currentTemperature;\n  ...\n};\n")),(0,r.kt)("p",null,"\u4e0a\u8a18\u306b\u3088\u3063\u3066\u3001 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"Presenter")," \u304c\u73fe\u5728\u306e\u6e29\u5ea6\u3092\u30e2\u30c7\u30eb\u306b\u8981\u6c42\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\u3053\u308c\u3067\u3001\u6e29\u5ea6\u3092\u8868\u793a\u3059\u308b\u30b9\u30af\u30ea\u30fc\u30f3\u306b\u5165\u308b\u3068\u3001Presenter\u304c\u3053\u306e\u5024\u3092UI\uff08\u30d3\u30e5\u30fc\uff09\u306b\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002 \u6b21\u306b\u5fc5\u8981\u306a\u306e\u306f\u3001\u65b0\u3057\u3044\u6e29\u5ea6\u60c5\u5831\u3092\u53d7\u4fe1\u3057\u305f\u3068\u304d\u306b\u518d\u3073UI\u3092\u66f4\u65b0\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3067\u3059\u3002 \u3053\u306e\u305f\u3081\u306b\u306f\u3001\u30e2\u30c7\u30eb\u304c\u73fe\u5728\u30a2\u30af\u30c6\u30a3\u30d6\u306a\u30d7\u30ec\u30bc\u30f3\u30bf\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u3092\u6301\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u5229\u7528\u3057\u307e\u3059\u3002 \u3053\u306e\u30dd\u30a4\u30f3\u30bf\u306e\u30bf\u30a4\u30d7\u306f\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\uff08",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"ModelListener"),"\uff09\u3067\u3001\u9069\u5207\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u56fa\u6709\u306e\u30a4\u30d9\u30f3\u30c8\u3092\u53cd\u6620\u3059\u308b\u3088\u3046\u306b\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"ModelListener.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"class ModelListener\n{\npublic:\n  // Call this function to notify that temperature has changed.\n  // Per default, use an empty implementation so that only those\n  // Presenters interested in this specific event need to\n  // override this function.\n  virtual void notifyTemperatureChanged(int newTemperature) {}\n};\n")),(0,r.kt)("p",null,'\u3053\u308c\u3067\u3001\u3053\u306e\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306b\u63a5\u7d9a\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002\u3042\u3068\u306f\u3001\u53d7\u4fe1\u3059\u308b"',(0,r.kt)(p,{mdxType:"InlineNote"},"\u65b0\u3057\u3044\u6e29\u5ea6"),'"\u306e\u30a4\u30d9\u30f3\u30c8\u306e\u5b9f\u969b\u306e\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3092\u884c\u3044\u307e\u3059\u3002 ',(0,r.kt)(u.Z,{mdxType:"InlineCode"},"Model::tick")),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"Model.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'void Model::tick()\n{\n  // Pseudo-code for sampling data\n  if (OS_Poll(GuiTaskMBox))\n  {\n    // Here we assume that you have defined a "Message" struct containing type and data,\n    // along with some event definitions.\n    struct Message msg = OS_Read(GuiTaskMBox);\n    if (msg.eventType == EVT_TEMP_CHANGED)\n    {\n       // We received information that temperature has changed.\n       // First, update Model state variable\n       currentTemperature = msg.data;\n\n      // Second, notify the currently active Presenter that temperature has changed.\n      // The modelListener pointer points to the currently active Presenter.\n      if (modelListener != 0)\n      {\n        modelListener->notifyTemperatureChanged(currentTemperature);\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"\u4e0a\u8a18\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u3067\u306f\u6b21\u306e2\u3064\u304c\u78ba\u5b9f\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u3053\u306e ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"currentTemperature")," \u5909\u6570\u306f\u5e38\u306b\u6700\u65b0\u72b6\u614b\u306a\u306e\u3067\u3001Presenter\u306f\u3044\u3064\u3067\u3082\u73fe\u5728\u306e\u6e29\u5ea6\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u3053\u306e ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"Presenter\u306b\u306f")," \u6e29\u5ea6\u306e\u5909\u5316\u304c\u5373\u5ea7\u306b\u901a\u77e5\u3055\u308c\u3001\u9069\u5207\u306a\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002")),(0,r.kt)("p",null,"MVP\u30d1\u30bf\u30fc\u30f3\u306e1\u3064\u306e\u5229\u70b9\u306f\u3001\u73fe\u5728\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u306b\u5fdc\u3058\u3066\u901a\u77e5\u3092\u500b\u5225\u306b\u51e6\u7406\u3067\u304d\u308b\u3053\u3068\u3067\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u4f55\u304b\u306e\u8a2d\u5b9a\u30e1\u30cb\u30e5\u30fc\u3092\u8868\u793a\u3057\u3066\u3044\u308b\u3068\u304d ",(0,r.kt)(p,{mdxType:"InlineNote"},"\uff08MainMenuPresenter/MainMenuView\u304c\u30a2\u30af\u30c6\u30a3\u30d6\u306a\u5834\u5408\u306a\u3069\uff09")," \u306b\u6e29\u5ea6\u5909\u5316\u306e\u30a4\u30d9\u30f3\u30c8\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u3001\u305d\u3053\u306b\u73fe\u5728\u306e\u6e29\u5ea6\u306f\u95a2\u4fc2\u3057\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u3053\u306e ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"notifyTemperatureChanged")," \u95a2\u6570\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u7a7a\u5b9f\u88c5\u306a\u306e\u3067\u3001\u3053\u306e\u901a\u77e5\u306f ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"MainMenuPresenter\u306b\u3088\u3063\u3066\u5358\u306b\u7121\u8996\u3055\u308c\u307e\u3059\u3002"),". \u4e00\u65b9\u3001 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"TemperatureControlPresenter")," \u304c\u3042\u308b\u5834\u5408\u306f\u3001\u3053\u306ePresenter\u3067 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"notifyTemperatureChanged")," \u95a2\u6570\u3092\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3057\u3001\u66f4\u65b0\u5f8c\u306e\u6e29\u5ea6\u3092\u8868\u793a\u3059\u308b\u3088\u3046\u306b\u30d3\u30e5\u30fc\u306b\u901a\u77e5\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"TemperatureControlPresenter.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"class TemperatureControlPresenter : public ModelListener\n{\npublic:\n  // override the empty function.\n  virtual void notifyTemperatureChanged(int newTemperature) {\n    view.setTemp(newTemperature);\n  }\n};\n")),(0,r.kt)("p",null,"View\u30af\u30e9\u30b9 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"TemperatureControlView"),"\u3067\u306f\u3001\u5f53\u7136\u306a\u304c\u3089 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"setTemp")," \u30e1\u30bd\u30c3\u30c9\u3092\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("h2",v({},{id:"transmitting-data-from-ui-to-surrounding-system"}),"UI\u304b\u3089\u5468\u8fba\u30b7\u30b9\u30c6\u30e0\u3078\u306e\u30c7\u30fc\u30bf\u306e\u4f1d\u9001"),(0,r.kt)("p",null,"UI\u304b\u3089\u5468\u8fba\u30b7\u30b9\u30c6\u30e0\u3078\u306e\u30c7\u30fc\u30bf / \u30a4\u30d9\u30f3\u30c8\u306e\u53cd\u5bfe\u65b9\u5411\u306e\u4f1d\u9001\u3082\u3001\u30e2\u30c7\u30eb\u3092\u901a\u3057\u3066\u307b\u307c\u540c\u3058\u65b9\u6cd5\u3067\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002 \u65b0\u3057\u3044\u30bf\u30fc\u30b2\u30c3\u30c8\u6e29\u5ea6\u3092\u8a2d\u5b9a\u3059\u308b\u6a5f\u80fd\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u751f\u3058\u305f\u5834\u5408\u3001\u3053\u308c\u307e\u3067\u306e\u4f8b\u3092\u7d9a\u884c\u3059\u308b\u3068\u3001\u30e2\u30c7\u30eb\u306b\u4ee5\u4e0b\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"Model.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"void setNewTargetTemperature(int newTargetTemp)\n{\n  // Pseudo-code for sending an event to a task responsible for controlling temperature.\n  struct Message msg;\n  msg.eventType = EVT_SET_TARGET_TEMP;\n  msg.data = newTargetTemp;\n  OS_Send(SystemTaskMBox, &msg);\n}\n")),(0,r.kt)("p",null,"\u30e6\u30fc\u30b6\u304cUI\u3067\u65b0\u3057\u3044\u30bf\u30fc\u30b2\u30c3\u30c8\u6e29\u5ea6\u3092\u8a2d\u5b9a\u3057\u305f\u5834\u5408\u306b\u306f\u3001\u30d3\u30e5\u30fc\u304c\u3001\u30e2\u30c7\u30eb\uff65\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u3092\u4fdd\u6301\u3059\u308b\u30d7\u30ec\u30bc\u30f3\u30bf\u306b\u901a\u77e5\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u3001\u305d\u306e\u7d50\u679c ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"setNewTargetTemperature\u95a2\u6570\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")," \u95a2\u6570\u3067\u5468\u8fba\u30b7\u30b9\u30c6\u30e0\u3092\u76f4\u63a5\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3059\u308b\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("h2",v({},{id:"examples"}),"\u4f8b"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u4f8b\u306f\u3001Board Specific Demo\uff08\u30dc\u30fc\u30c9\u56fa\u6709\u306e\u30c7\u30e2: BSD\uff09\u3067\u3059\u304c\u3001\u3053\u3053\u306b\u793a\u3055\u308c\u3066\u3044\u308b\u30b3\u30fc\u30c9\u306e\u591a\u304f\u306f\u3001\u4ed6\u306e\u30c7\u30e2\uff65\u30dc\u30fc\u30c9\u3084\u30ab\u30b9\u30bf\u30e0\uff65\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3067\u518d\u5229\u7528\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u4f8b\u3067\u306f\u3001STM32CubeMX\u3067\u30bf\u30b9\u30af\u3068\u30ad\u30e5\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u6b21\u306b\u3001\u751f\u6210\u3055\u308c\u305f\u30bf\u30b9\u30af\u3092\u8a2d\u5b9a\u3057\u3001 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"\u30b5\u30f3\u30d7\u30eb\u306e\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u3092main_user.c\u306b\u5b9f\u88c5\u3057\u307e\u3059\u3002"),". \u3053\u306e\u4f8b\u3067\u306f\u3001STM32CubeMX BSP\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u7528\u3057\u3066\u3001STM32\u8a55\u4fa1\u30ad\u30c3\u30c8\u4e0a\u306eLED\u3001\u30e6\u30fc\u30b6\uff65\u30dc\u30bf\u30f3\u3001\u305d\u306e\u4ed6\u306e\u30da\u30ea\u30d5\u30a7\u30e9\u30eb\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",v({},{id:"from-gui-task"}),"GUI\u30bf\u30b9\u30af\u304b\u3089"),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u4f8b\u306eBSD\u306f\u3001TouchGFX Designer\u306e\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u3042\u308a\u307e\u3059\u3002GUI\u3067\u3001\uff3bDemos\uff3d->\uff3bBoard Specific Demo\uff3d->\uff3bSTM32F46G Discovery kit Control LED\uff3d\u306e\u9806\u306b\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u30dc\u30bf\u30f3\u306e\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u304a\u3088\u3073LED\u306e\u5236\u5fa1\u65b9\u6cd5\u3092\u30c7\u30e2\u30f3\u30b9\u30c8\u30ec\u30fc\u30b7\u30e7\u30f3\u3057\u307e\u3059\u3002 \u30e2\u30c7\u30eb\uff65\u30af\u30e9\u30b9\u306f\u30dc\u30bf\u30f3\u3092\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u72b6\u614b\u3068\u4e00\u81f4\u3059\u308b\u3088\u3046\u306bLED\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",v({},{id:"from-other-task"}),"\u4ed6\u306e\u30bf\u30b9\u30af\u304b\u3089"),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u4f8b\u306eBSD\u306f\u3001TouchGFX Designer\u306e\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u3042\u308a\u307e\u3059\u3002\uff3bDemos\uff3d->\uff3bBoard Specific Demo\uff3d->\uff3bSTM32H7B3I Evaluation Board Analog Sampler Task\uff3d\u306e\u9806\u306b\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u5225\u500b\u306e\u30b9\u30ec\u30c3\u30c9\u3067\u30a2\u30ca\u30ed\u30b0\u5165\u529b\u3092\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3059\u308b\u65b9\u6cd5\u3092\u30c7\u30e2\u30f3\u30b9\u30c8\u30ec\u30fc\u30b7\u30e7\u30f3\u3057\u307e\u3059\u3002 \u3053\u306e\u4f8b\u3067\u306f\u3001MVP\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30ca\u30ed\u30b0\u5024\u3092\u30d3\u30e5\u30fc\u306b\u8ee2\u9001\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u4f8b\u306eBSD\u306f\u3001TouchGFX Designer\u306e\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u3042\u308a\u307e\u3059\u3002\uff3bDemos\uff3d->\uff3bBoard Specific Demo\uff3d->\uff3bSTM32F46G Discovery kit Intertask Communication\uff3d\u306e\u9806\u306b\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u30bf\u30b9\u30af\u9593\u306e\u901a\u4fe1\u3068UI\u3068\u306e\u9593\u306e\u4f1d\u64ad\u306e\u30c7\u30e2\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 \u72ec\u81ea\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306e\u969b\u306b\u3001\u30d2\u30f3\u30c8\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u4f8b\u3067\u306f\u3001C\u30b3\u30fc\u30c9\u3067\u5b9f\u88c5\u3055\u308c\u305f\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\uff65\u30b7\u30b9\u30c6\u30e0\u3068C++\u306eTouchGFX GUI\u306e\u9593\u3067\u901a\u4fe1\u304c\u884c\u308f\u308c\u3066\u3044\u307e\u3059\u3002 \u3053\u306e\u4f8b\u306fSTM32F746G-DISCO\u30dc\u30fc\u30c9\u3067\u3001FreeRTOS\u4e0a\u3067\u5b9f\u884c\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("h3",v({},{id:"from-multiple-tasks"}),"\u8907\u6570\u30bf\u30b9\u30af\u304b\u3089"),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u4f8b\u306eBSD\u306f\u3001TouchGFX Designer\u306e\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u3042\u308a\u307e\u3059\u3002\uff3bDemos\uff3d->\uff3bBoard Specific Demo\uff3d->\uff3bSTM32F769I Discovery Multitast Communication Demo\uff3d\u306e\u9806\u306b\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u30dc\u30bf\u30f3\u306e\u72b6\u614b\u3092\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3057\u3001\u30dc\u30bf\u30f3\u304c\u62bc\u3055\u308c\u305f\u3089\u3001GUI\u30e1\u30c3\u30bb\u30fc\u30b8\uff65\u30ad\u30e5\u30fc\u3092\u901a\u3057\u3066\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u6e21\u3057\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u305f\u307e\u307e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u9032\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f3\u3064\u306eFreeRTOS\u30bf\u30b9\u30af\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002 1\u3064\u306fGUI\u7528\u3001\u6b8b\u308a2\u3064\u306f\u5404\u30da\u30ea\u30d5\u30a7\u30e9\u30eb\uff08LED\u3068USER Button\uff09\u7528\u3067\u3059\u3002"),(0,r.kt)("h3",v({},{id:"from-task-and-external-interrupt-line"}),"\u30bf\u30b9\u30af\u304a\u3088\u3073\u5916\u90e8\u306e\u5272\u8fbc\u307f\u30e9\u30a4\u30f3\u304b\u3089"),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u4f8b\u306eBSD\u306f\u3001TouchGFX Designer\u306e\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u3042\u308a\u307e\u3059\u3002\uff3bDemos\uff3d->\uff3bBoard Specific Demo\uff3d->\uff3bSTM32F769I Discovery External Interrup Line Demo\uff3d\u306e\u9806\u306b\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306fSTM32F769I-DISCO\u30dc\u30fc\u30c9\u5411\u3051\u306b\u8a2d\u8a08\u3055\u308c\u3066\u304a\u308a\u3001LED\u304a\u3088\u3073USER BUTTON\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u3001C\u30b3\u30fc\u30c9\u3068\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30da\u30ea\u30d5\u30a7\u30e9\u30eb\u306e\u4e21\u65b9\u3092TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u7d71\u5408\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001EXTI\u30e2\u30fc\u30c9\u3067\u30dc\u30bf\u30f3\u3092\u8a2d\u5b9a\u3057\u307e\u3059\uff08\u5916\u90e8\u5272\u8fbc\u307f\u30e9\u30a4\u30f30\uff09\u3002 \u30dc\u30bf\u30f3\u304c\u62bc\u4e0b\u3055\u308c\u308b\u3068\u5272\u8fbc\u307f\u3092\u53d7\u4fe1\u3057\u3001\u305d\u306e\u5f8c\u5272\u8fbc\u307f\u304c\u6d88\u53bb\u3055\u308c\u308b\u3068\u3044\u3046\u52d5\u4f5c\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002 GPIO\u3068\u540c\u3058\u52d5\u4f5c\u306f\u3067\u304d\u305a\u3001\u4ee3\u308f\u308a\u306b1\u30b9\u30c6\u30c3\u30d7\u305a\u3064\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u9032\u3081\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\u5272\u8fbc\u307f\u3092\u53d7\u4fe1\u3059\u308b\u305f\u3073\u306b\u3001GUI\u30e1\u30c3\u30bb\u30fc\u30b8\uff65\u30ad\u30e5\u30fc\u3092\u901a\u3057\u3066\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u9001\u4fe1\u3055\u308c\u308b\u306e\u307f\u3060\u304b\u3089\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f2\u3064\u306eFreeRTOS\u30bf\u30b9\u30af\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002 1\u3064\u306fGUI\u7528\u3001\u3082\u30461\u3064\u306fLED\u7528\u3067\u3059\u3002 \uff08\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f",(0,r.kt)("a",v({parentName:"p"},{href:"#from-multiple-tasks"}),"\u8907\u6570\u30bf\u30b9\u30af\u306e\u30c7\u30e2"),"\u306e\u30dc\u30bf\u30f3\uff65\u30bf\u30b9\u30af\u304c\u30a2\u30af\u30c6\u30a3\u30d6\u306a\u307e\u307e\u306b\u306a\u3063\u3066\u304a\u308a\u3001\u30da\u30ea\u30d5\u30a7\u30e9\u30eb\uff65\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u306e\u30b3\u30fc\u30c9\u304c\u5272\u8fbc\u307f\u30cf\u30f3\u30c9\u30e9\u306b\u79fb\u52d5\u3057\u305f\u4f8b\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002\uff09"))}M.isMDXComponent=!0}}]);