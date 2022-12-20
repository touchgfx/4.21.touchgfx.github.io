"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7804],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}t.Z=o},25615:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return h},metadata:function(){return b},toc:function(){return y}});var r=n(3905),a=n(44035),l=n(93054),o=n(22425),i=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))s.call(t,n)&&m(e,n,t[n]);return e};const h={id:"05-display-external",title:"5. \u5916\u90e8RAM\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u914d\u7f6e\u3055\u308c\u305f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4",sidebar_label:"5. \u5916\u90e8RAM\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u914d\u7f6e\u3055\u308c\u305f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4"},g=void 0,b={unversionedId:"development/board-bring-up/how-to/05-display-external",id:"development/board-bring-up/how-to/05-display-external",title:"5. \u5916\u90e8RAM\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u914d\u7f6e\u3055\u308c\u305f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/05-display-external.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/05-display-external",permalink:"/4.21/ja/docs/development/board-bring-up/how-to/05-display-external",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"05-display-external",title:"5. \u5916\u90e8RAM\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u914d\u7f6e\u3055\u308c\u305f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4",sidebar_label:"5. \u5916\u90e8RAM\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u914d\u7f6e\u3055\u308c\u305f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4"},sidebar:"docs",previous:{title:"4. \u5916\u90e8RAM",permalink:"/4.21/ja/docs/development/board-bring-up/how-to/04-enable-external-ram"},next:{title:"6. \u5916\u90e8Flash\uff08\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9\uff65\u30e2\u30fc\u30c9\uff09",permalink:"/4.21/ja/docs/development/board-bring-up/how-to/06-flash-external-addressable"}},v={},y=[{value:"\u52d5\u6a5f",id:"motivation",level:2},{value:"\u76ee\u6a19",id:"goal",level:2},{value:"\u691c\u8a3c",id:"verification",level:3},{value:"\u524d\u63d0\u6761\u4ef6",id:"prerequisites",level:2},{value:"\u4f5c\u696d\u5185\u5bb9",id:"do",level:2},{value:"LTDC\u30ec\u30a4\u30e4\u306e\u8a2d\u5b9a",id:"ltdc-layer-configuration",level:3}],k={toc:y};function w(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},k),m),c(t,p({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("h2",f({},{id:"motivation"}),"\u52d5\u6a5f"),(0,r.kt)("p",null,"\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u5185\u90e8RAM\u304b\u3089\u5916\u90e8RAM\u306b\u79fb\u52d5\u3057\u3001\u5916\u90e8RAM\u304b\u3089\u3067\u3082\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u8ee2\u9001\u3067\u304d\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,r.kt)(l.Z,{mdxType:"Note"},"\u5916\u4ed8\u3051RAM\u304c\u3054\u4f7f\u7528\u306e\u30dc\u30fc\u30c9\u306b\u95a2\u4fc2\u306a\u3044\u5834\u5408\u306f\u3001\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3092\u30b9\u30ad\u30c3\u30d7\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u306f\u8ee2\u9001\u901f\u5ea6\u306b\u95a2\u3057\u3066\u4e00\u5b9a\u306e\u8981\u6c42\u304c\u3042\u308b\u305f\u3081\u3001\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u306f\u5916\u90e8RAM\u306b\u5bfe\u3057\u3066\u30b9\u30c8\u30ec\u30b9\uff65\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 \u305d\u306e\u30c6\u30b9\u30c8\u3067\u306f\u3001\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002 \u4e00\u822c\u7684\u306a\u30a8\u30e9\u30fc\u306f\u3001\u5916\u90e8RAM\u306e\u30d0\u30f3\u30c9\u5e45\u4e0d\u8db3\u306b\u3088\u308bLTDC\u306e\u30a2\u30f3\u30c0\u30fc\u30e9\u30f3\u3001\u307e\u305f\u306fRAM\u306e\u8aa4\u8a2d\u5b9a\u306b\u3088\u308b\u300c\u4ed5\u69d8\u5916\u300d\u306e\u52d5\u4f5c\u3092\u539f\u56e0\u3068\u3059\u308b\u30d4\u30af\u30bb\u30eb\uff65\u30a8\u30e9\u30fc\u3067\u3059\u3002"),(0,r.kt)("h2",f({},{id:"goal"}),"\u76ee\u6a19"),(0,r.kt)("p",null,"\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u306e\u76ee\u6a19\u306f\u3001\u5185\u90e8RAM\u304b\u3089\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u914d\u5217\u3092\u524a\u9664\u3057\u3001\u5916\u90e8RAM\u5185\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("h3",f({},{id:"verification"}),"\u691c\u8a3c"),(0,r.kt)("p",null,"\u6b21\u306e\u8868\u306b\u3001\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306e\u691c\u8a3c\u30dd\u30a4\u30f3\u30c8\u3092\u793a\u3057\u307e\u3059\u3002 \u3053\u308c\u3089\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u5185\u90e8RAM\u306b\u914d\u7f6e\u3057\u305f\u5834\u5408\u306b\u4f3c\u3066\u3044\u307e\u3059\u304c\u3001\u5916\u90e8\u30e1\u30e2\u30ea\u306e\u901f\u5ea6\u304c\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3078\u306e\u9001\u4fe1\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u305f\u3081\u3001\u518d\u5ea6\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),"\u691c\u8a3c\u30dd\u30a4\u30f3\u30c8"),(0,r.kt)("th",f({parentName:"tr"},{align:null}),"\u691c\u8a3c\u5185\u5bb9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u8868\u793a\u3055\u308c\u308b"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u307e\u305f\u306fSPI\u304c\u8a2d\u5b9a\u3055\u308c\u52d5\u4f5c\u3057\u3066\u3044\u308b\u3053\u3068\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u66f4\u65b0\u3055\u308c\u305f\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u8868\u793a\u3055\u308c\u308b"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u7e70\u308a\u8fd4\u3057\u9001\u4fe1\u3059\u308b\u4ed5\u7d44\u307f\u304c\u308f\u304b\u308b\u3053\u3068\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u30d5\u30ec\u30fc\u30e0\u30ec\u30fc\u30c8\u304c\u6b63\u3057\u3044"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"\u30d4\u30af\u30bb\u30eb\uff65\u30af\u30ed\u30c3\u30af\u3068\u30dd\u30fc\u30c1\u304c\u5fc5\u8981\u306a\u30d5\u30ec\u30fc\u30e0\u30ec\u30fc\u30c8\u3092\u5f97\u3089\u308c\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3002")))),(0,r.kt)("h2",f({},{id:"prerequisites"}),"\u524d\u63d0\u6761\u4ef6"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306b\u3001\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u306e\u524d\u63d0\u6761\u4ef6\u3092\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5916\u90e8RAM\u5185\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30a2\u30c9\u30ec\u30b9")),(0,r.kt)("h2",f({},{id:"do"}),"\u4f5c\u696d\u5185\u5bb9"),(0,r.kt)("p",null,"\u6b21\u306e2\u3064\u306e\u4f5c\u696d\u3092\u5b9f\u65bd\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u5916\u90e8RAM\u5185\u306b\u914d\u7f6e\u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},"\u5916\u90e8RAM\u304b\u3089\u8aad\u307f\u51fa\u3059\u3088\u3046\u306b\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u8a2d\u5b9a\u3059\u308b")),(0,r.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u5916\u90e8RAM\u306b\u914d\u7f6e\u3059\u308b\u5834\u5408\u306f\u3001\u914d\u5217\u3092\u5272\u308a\u5f53\u3066\u306a\u3044\u3053\u3068\u304c\u4e00\u822c\u7684\u3067\u3059\u3002 \u9069\u5207\u306a\u30a2\u30c9\u30ec\u30b9\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u3092\u5ba3\u8a00\u3059\u308b\u3060\u3051\u3067\u3001 \u5916\u90e8RAM\u5185\u306e\u30a2\u30c9\u30ec\u30b9\u306f\u624b\u52d5\u3067\u9078\u629e\u3057\u307e\u3059\u3002 \u5916\u90e8RAM\u5185\u306e\u4efb\u610f\u306e\u5834\u6240\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u304c\u3001\u901a\u5e38\u306fRAM\u306e\u958b\u59cb\u30a2\u30c9\u30ec\u30b9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"uint16_t* framebuffer = (uint16_t*)0xC0000000;  //16 bpp framebuffer\n")),(0,r.kt)("p",null,(0,r.kt)("a",f({parentName:"p"},{href:"03-display-internal"}),"\u5185\u90e8RAM\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1"),"\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u4f5c\u6210\u3057\u305f\u5c0f\u3055\u306a\u30c6\u30b9\u30c8\uff65\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u518d\u5229\u7528\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h3",f({},{id:"ltdc-layer-configuration"}),"LTDC\u30ec\u30a4\u30e4\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,"LTDC \u30ec\u30a4\u30e4\u306e\u8a2d\u5b9a\u3092\u5fd8\u308c\u305a\u306b\u5909\u66f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u3053\u3053\u3067\u306f\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306b\u5bfe\u3057\u3066\u56fa\u6709\u306e\u30a2\u30c9\u30ec\u30b9\u304c\u3042\u308b\u305f\u3081\u3001CubeMX\u3067\u305d\u306e\u30a2\u30c9\u30ec\u30b9\uff08\u30ab\u30e9\u30fc\uff65\u30d5\u30ec\u30fc\u30e0\uff65\u30d0\u30c3\u30d5\u30a1\u306e\u958b\u59cb\u30a2\u30c9\u30ec\u30b9\uff09\u3092\u633f\u5165\u3057\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-03.webp",noShadow:!1,width:"600",mdxType:"Figure"},"LTDC\u30ec\u30a4\u30e4\uff65\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u6b21\u306e\u884c\u304a\u3088\u3073\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u914d\u5217\u3092\u524a\u9664\u3059\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"  /* USER CODE BEGIN 2 */\n  HAL_LTDC_SetAddress(&hltdc, framebuffer, LTDC_LAYER_1);\n  /* USER CODE END 2 */\n")),(0,r.kt)("p",null,"\u5185\u90e8RAM\u306e\u5bb9\u91cf\u4e0d\u8db3\u306b\u3088\u308a\u3001",(0,r.kt)("a",f({parentName:"p"},{href:"03-display-internal"}),"\u30b9\u30c6\u30c3\u30d703"),"\u3067LTDC\u30ec\u30a4\u30e4\u306e\u30b5\u30a4\u30ba\u3092\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u4e00\u90e8\u306e\u307f\u3092\u66f4\u65b0\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u305f\u5834\u5408\u306f\u3001\u3053\u3053\u3067\u305d\u306e\u8a2d\u5b9a\u3092\u3084\u308a\u76f4\u3057\u307e\u3059\u3002 \u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u5168\u4f53\u3092\u30ab\u30d0\u30fc\u3059\u308b\u3088\u3046\u306bLTDC\u30ec\u30a4\u30e4\u3092\u518d\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}w.isMDXComponent=!0}}]);