"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1078],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,g=m["".concat(p,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=i},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=i},8926:function(e,t,n){n.r(t),n.d(t,{assets:function(){return T},contentTitle:function(){return x},default:function(){return w},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return N}});var r=n(3905),a=n(44035),l=n(29415),i=n(37793),o=n(31217),p=n(39130),u=n(22425),c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&h(e,n,t[n]);if(s)for(var n of s(t))k.call(t,n)&&h(e,n,t[n]);return e};const v={id:"text-area",title:"Text Area\uff08\u30c6\u30ad\u30b9\u30c8\uff65\u30a8\u30ea\u30a2\uff09"},x=void 0,b={unversionedId:"development/ui-development/ui-components/miscellaneous/text-area",id:"development/ui-development/ui-components/miscellaneous/text-area",title:"Text Area\uff08\u30c6\u30ad\u30b9\u30c8\uff65\u30a8\u30ea\u30a2\uff09",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/text-area.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/text-area",permalink:"/4.21/ja/docs/development/ui-development/ui-components/miscellaneous/text-area",draft:!1,tags:[],version:"current",frontMatter:{id:"text-area",title:"Text Area\uff08\u30c6\u30ad\u30b9\u30c8\uff65\u30a8\u30ea\u30a2\uff09"},sidebar:"docs",previous:{title:"Slider\uff08\u30b9\u30e9\u30a4\u30c0\u30fc\uff09",permalink:"/4.21/ja/docs/development/ui-development/ui-components/miscellaneous/slider"},next:{title:"Analog Clock\uff08\u30a2\u30ca\u30ed\u30b0\uff65\u30af\u30ed\u30c3\u30af\uff09",permalink:"/4.21/ja/docs/development/ui-development/ui-components/miscellaneous/analog-clock"}},T={},N=[{value:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7",id:"widget-group",level:2},{value:"\u30d7\u30ed\u30d1\u30c6\u30a3",id:"properties",level:2},{value:"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3",id:"interactions",level:2},{value:"\u30a2\u30af\u30b7\u30e7\u30f3",id:"actions",level:3},{value:"\u30c8\u30ea\u30ac",id:"triggers",level:3},{value:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9",id:"performance",level:2},{value:"\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9",id:"generated-code",level:3},{value:"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9",id:"user-code",level:3},{value:"TouchGFX Designer\u306e\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c2\u7167",id:"api-reference",level:2}],y={toc:N};function w(e){var t,n=e,{components:c}=n,h=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},y),h),d(t,m({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Text Area\u306f\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u306b\u30c6\u30ad\u30b9\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\u3002 Text Area\u5185\u306e\u30c6\u30ad\u30b9\u30c8\u306f\u3001\u30b5\u30a4\u30ba\u3001\u8272\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30d5\u30a9\u30f3\u30c8\u3001\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30c6\u30ad\u30b9\u30c8\u306a\u3069\u3067\u5b8c\u5168\u306b\u8a2d\u5b9a\u53ef\u80fd\u3067\u3059\u3002 TouchGFX Designer\u3067\u306e\u30c6\u30ad\u30b9\u30c8\u306e\u51e6\u7406\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,r.kt)("a",f({parentName:"p"},{href:"../../touchgfx-engine-features/texts-and-fonts"}),"\u30c6\u30ad\u30b9\u30c8\u3068\u30d5\u30a9\u30f3\u30c8"),"\u300d\u306e\u8a18\u4e8b\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/text-area/widget-appearance.webp",mdxType:"Figure"},"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3067\u5b9f\u884c\u3055\u308c\u308bText Area"),(0,r.kt)("h2",f({},{id:"widget-group"}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7"),(0,r.kt)("p",null,"Text Area\u306f\u3001TouchGFX Designer\u306eMiscellaneous\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7\u5185\u306b\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/text-area/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u306eText Area"),(0,r.kt)("h2",f({},{id:"properties"}),"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,r.kt)("p",null,"TouchGFX Designer\u306eText Area\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\uff65\u30b0\u30eb\u30fc\u30d7")),(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u8aac\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u540d\u524d\u3002 Name\u306f\u3001TouchGFX Designer\u304a\u3088\u3073\u30b3\u30fc\u30c9\u3067\u4f7f\u7528\u3055\u308c\u308b\u4e00\u610f\u306e\u8b58\u5225\u5b50\u3067\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"X\u304a\u3088\u3073Y\u306f\u3001\u89aa\u3092\u57fa\u6e96\u3068\u3057\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5de6\u4e0a\u9685\u306e\u4f4d\u7f6e\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"W\u304a\u3088\u3073H\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5e45\u3068\u9ad8\u3055\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"<br/Auto-size\u306f\u3001\u30c6\u30ad\u30b9\u30c8\u5165\u529b\u306b\u5f93\u3063\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30b5\u30a4\u30ba\u3092\u81ea\u52d5\u7684\u306b\u8a2d\u5b9a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Lock\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u73fe\u5728\u306eX\u3001Y\u3001W\u3001H\u3067\u30ed\u30c3\u30af\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30ed\u30c3\u30af\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u901a\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3082\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Visible\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u53ef\u8996\u6027\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 ",(0,r.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u901a\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3082\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Text")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"ID\u306f\u3001\u4f7f\u7528\u3055\u308c\u308b\u30c6\u30ad\u30b9\u30c8\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u81ea\u52d5\u751f\u6210\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001ID\u306b\u306f'Auto-generated'\u3068\u8868\u793a\u3055\u308c\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Translation\u306f\u3001\u8868\u793a\u3055\u308c\u308b\u30c6\u30ad\u30b9\u30c8\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Typography\u306f\u3001\u30c6\u30ad\u30b9\u30c8\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Alignment\u306f\u3001\u30c6\u30ad\u30b9\u30c8\u306e\u6c34\u5e73\u65b9\u5411\u306e\u914d\u7f6e\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30c6\u30ad\u30b9\u30c8\u5165\u529b\u7528\u306b\u6700\u59272\u3064\u306e\u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u3089\u306f'","<","tag",">","'\u3068\u793a\u3055\u308c\u307e\u3059\uff08'tag'\u306b\u306f\u4efb\u610f\u306e\u6587\u5b57\u5217\u3092\u5165\u308c\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff09\u3002 ",(0,r.kt)("br",null),(0,r.kt)("br",null),"\u30c6\u30ad\u30b9\u30c8\u8a2d\u5b9a\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,r.kt)("a",f({parentName:"td"},{href:"../../touchgfx-engine-features/texts-and-fonts"}),"\u30c6\u30ad\u30b9\u30c8\u3068\u30d5\u30a9\u30f3\u30c8\u306e\u4f7f\u7528"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Color\u306f\u3001\u8868\u793a\u3055\u308c\u308b\u30c6\u30ad\u30b9\u30c8\u306e\u8272\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Alpha\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u900f\u660e\u5ea6\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30a2\u30eb\u30d5\u30a1\u5024\u306e\u7bc4\u56f2\u306f0\u301c255\u3067\u3059\u3002 0\u306f\u5b8c\u5168\u306b\u900f\u660e\u3067\u3001255\u306f\u5857\u308a\u3064\u3076\u3055\u308c\u305f\u72b6\u614b\u3067\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Line Spacing\u306f\u3001\u30e9\u30a4\u30f3\u9593\u306e\u30b9\u30da\u30fc\u30b9\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Text Rotation\u306f\u3001\u30c6\u30ad\u30b9\u30c8\u306e\u56de\u8ee2\u89d2\u5ea6\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Draggable\u306f\u3001\u5b9f\u884c\u6642\u306b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30c9\u30e9\u30c3\u30b0\u53ef\u80fd\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"ClickListener\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u3068\u304d\u306b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u767a\u884c\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"FadeAnimator\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304cAlpha\u5024\u3078\u306e\u5909\u66f4\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"MoveAnimator\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304cX\u304a\u3088\u3073Y\u5024\u3078\u306e\u5909\u66f4\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")))),(0,r.kt)("h2",f({},{id:"interactions"}),"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001Text Area\u306b\u3088\u3063\u3066\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u30a2\u30af\u30b7\u30e7\u30f3\u3068\u30c8\u30ea\u30ac\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",f({},{id:"actions"}),"\u30a2\u30af\u30b7\u30e7\u30f3"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u56fa\u6709\u306e\u30a2\u30af\u30b7\u30e7\u30f3")),(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Set text")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Resize widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30b5\u30a4\u30ba\u3092\u5909\u66f4\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Set wildcard")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002 \u3053\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u6a5f\u80fd\u3055\u305b\u308b\u305f\u3081\u306b\u306f\u3001\u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u3092Text Area\u306b\u8ffd\u52a0\u3057\u3066\u304a\u304f\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30a2\u30af\u30b7\u30e7\u30f3")),(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u6642\u9593\u306e\u7d4c\u904e\u306b\u4f34\u3063\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u65b0\u3057\u3044\u4f4d\u7f6e\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u6642\u9593\u306e\u7d4c\u904e\u306b\u4f34\u3063\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30a2\u30eb\u30d5\u30a1\u5024\u3092\u5909\u66f4\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092false\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u975e\u8868\u793a\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092true\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")))),(0,r.kt)("h3",f({},{id:"triggers"}),"\u30c8\u30ea\u30ac"),(0,r.kt)("p",null,"Text Area\u306f\u30c8\u30ea\u30ac\u3092\u767a\u884c\u3057\u307e\u305b\u3093\u3002"),(0,r.kt)("h2",f({},{id:"performance"}),"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),(0,r.kt)("p",null,"Text Area\u306f\u30c6\u30ad\u30b9\u30c8\u63cf\u753b\u306b\u4f9d\u5b58\u3057\u307e\u3059\u3002 \u30c6\u30ad\u30b9\u30c8\u63cf\u753b\u306f\u4e00\u822c\u7684\u306a\u753b\u50cf\u63cf\u753b\u3068\u975e\u5e38\u306b\u3088\u304f\u4f3c\u3066\u3044\u307e\u3059\uff08\u305f\u3060\u3057\u3001\u30c6\u30ad\u30b9\u30c8\u6587\u5b57\u306e\u7279\u6027\u304b\u3089\u3001\u304b\u306a\u308a\u306e\u91cf\u306e\u30a2\u30eb\u30d5\u30a1\u30d6\u30ec\u30f3\u30c7\u30a3\u30f3\u30b0\u304c\u884c\u308f\u308c\u307e\u3059\uff09\u3002 \u3053\u306e\u305f\u3081\u3001Text Area\u306f\u307b\u3068\u3093\u3069\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u4e0a\u3067\u9ad8\u901f\u51e6\u7406\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u3042\u308b\u3068\u898b\u306a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30c6\u30ad\u30b9\u30c8\u63cf\u753b\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,r.kt)("a",f({parentName:"p"},{href:"../general-ui-component-performance"}),"\u4e00\u822c\u7684\u306aUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",f({},{id:"examples"}),"\u4f8b"),(0,r.kt)("h3",f({},{id:"generated-code"}),"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9"),(0,r.kt)("p",null,"View\u57fa\u5e95\u30af\u30e9\u30b9\u306e\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9\u3092\u898b\u308b\u3068\u3001TouchGFX Designer\u306b\u3088\u308bText Area\u306e\u8a2d\u5b9a\u65b9\u6cd5\u304c\u308f\u304b\u308a\u307e\u3059\u3002"),(0,r.kt)(u.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"touchgfx::TextAreaWithOneWildcard textArea;\n\n/*\n * Wildcard Buffers\n */\nstatic const uint16_t TEXTAREA_SIZE = 20;\ntouchgfx::Unicode::UnicodeChar textAreaBuffer[TEXTAREA_SIZE];\n")),(0,r.kt)(u.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'textArea.setPosition(40, 111, 400, 50);\ntextArea.setColor(touchgfx::Color::getColorFromRGB(60, 180, 230));\ntextArea.setLinespacing(0);\nUnicode::snprintf(textAreaBuffer, TEXTAREA_SIZE, "%s", touchgfx::TypedText(T_TOUCHGFXID).getText());\ntextArea.setWildcard(textAreaBuffer);\ntextArea.setTypedText(touchgfx::TypedText(T_SINGLEUSEID1));\n')),(0,r.kt)(i.Z,{mdxType:"Tip"},"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u3067\u306f\u3001\u3053\u308c\u3089\u306e\u95a2\u6570\u3084\u3001TextArea\u30af\u30e9\u30b9\u3067\u4f7f\u7528\u53ef\u80fd\u306a\u305d\u306e\u4ed6\u306e\u95a2\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5916\u89b3\u3092\u5909\u66f4\u3059\u308b\u5834\u5408\u306b\u306f\u3001 ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"textArea.invalidate()")," \u307e\u305f\u306f",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"textArea.invalidateContent()")," \u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u518d\u63cf\u753b\u3092\u884c\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5206\u7bc0\u4e0d\u5099")," ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"textArea.invalidateContent()")),(0,r.kt)("p",null,"\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u8868\u793a\u306e\u5909\u66f4\u524d\u5f8c\u306b ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"textArea.invalidateContent()")," \u3092\u547c\u3073\u51fa\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff08\u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\uff65\u30d0\u30c3\u30d5\u30a1\u306e\u5185\u5bb9\u3092\u5909\u66f4\u3059\u308b\u5834\u5408\u306a\u3069\uff09\u3002"),(0,r.kt)("p",null,"\u8a00\u8a9e\u3092\u5909\u66f4\u3059\u308b\u5834\u5408\u306b\u306f\u3001\u5883\u754c\u9818\u57df\uff08\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u9818\u57df\uff09\u306e\u518d\u8a08\u7b97\u3092\u30c8\u30ea\u30ac\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u305f\u3081\u306b\u306f\u3001\u8a00\u8a9e\u306e\u5909\u66f4\u304c\u5b8c\u4e86\u3057\u305f\u5f8c\u306b ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"textArea.setTypedText(...)"),"\n\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002")),(0,r.kt)("h3",f({},{id:"user-code"}),"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9"),(0,r.kt)("p",null,"\u6b21\u306e\u4f8b\u306f\u3001\u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u3092\u4f7f\u7528\u3057\u3066\u5b9f\u884c\u6642\u306b\u30c6\u30ad\u30b9\u30c8\u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u306b\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"handleTickEvent()"),"\u95a2\u6570\u3092\u5b9f\u88c5\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002 \u3053\u306e\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001",(0,r.kt)("a",f({parentName:"p"},{href:"text-area"}),"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306e\u5192\u982d"),"\u3067\u793a\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(u.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n\n    virtual void handleTickEvent();\nprotected:\n    uint8_t counter;\n    bool flag;\n};\n")),(0,r.kt)(u.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'Screen1View::Screen1View():\n    counter(0),\n    flag(true)\n{}\n\nvoid Screen1View::handleTickEvent()\n{\n    counter++;\n    if(counter%120 == 0) // every 2s\n    {\n        if(flag)\n        {\n            Unicode::snprintf(textAreaBuffer, TEXTAREA_SIZE, "%s", touchgfx::TypedText(T_STMICROID).getText());\n            flag = false;\n        }\n        else\n        {\n            Unicode::snprintf(textAreaBuffer, TEXTAREA_SIZE, "%s", touchgfx::TypedText(T_TOUCHGFXID).getText());\n            flag = true;\n        }\n        textArea.invalidate();\n        counter = 0;\n    }\n}\n')),(0,r.kt)("h3",f({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u306e\u4f8b"),(0,r.kt)("p",null,"Text Area\u3092\u3055\u3089\u306b\u63a2\u7d22\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u4f8b\u306e\u3044\u305a\u308c\u304b\u3092\u4f7f\u7528\u3057\u3066\u3001TouchGFX Designer\u5185\u3067\u65b0\u3057\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/text-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u306eText Example"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/arabic-text-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u306eArabic Text Example"),(0,r.kt)("h2",f({},{id:"api-reference"}),"API\u53c2\u7167"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(p.Z,{to:"../../../../api/classes/classtouchgfx_1_1_text_area",mdxType:"Link"},"API reference for the TextArea class"))))}w.isMDXComponent=!0}}]);