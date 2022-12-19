"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[204],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),g=a,m=s["".concat(c,".").concat(g)]||s[g]||p[g]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:i},this.props.children)}}t.Z=o},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=o},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=o},34885:function(e,t,n){n.r(t),n.d(t,{assets:function(){return E},contentTitle:function(){return T},default:function(){return Z},frontMatter:function(){return R},metadata:function(){return N},toc:function(){return O}});var r=n(3905),a=n(44035),i=n(70814),o=n(37793),l=n(67294),c=n(88678);const d=l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class u extends l.Component{render(){return l.createElement(c.Z,{color:"var(--highlight-color-try)",header:"Things to try",type:"try",icon:d},this.props.children)}}var p=u,s=n(29415),g=n(31217),m=n(39130),h=n(22425),f=Object.defineProperty,v=Object.defineProperties,k=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))x.call(t,n)&&C(e,n,t[n]);if(w)for(var n of w(t))y.call(t,n)&&C(e,n,t[n]);return e};const R={id:"custom-widgets",title:"\ucee4\uc2a4\ud140 \uc704\uc82f"},T=void 0,N={unversionedId:"development/ui-development/touchgfx-engine-features/custom-widgets",id:"development/ui-development/touchgfx-engine-features/custom-widgets",title:"\ucee4\uc2a4\ud140 \uc704\uc82f",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/custom-widgets.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/custom-widgets",permalink:"/4.21/ko/docs/development/ui-development/touchgfx-engine-features/custom-widgets",draft:!1,tags:[],version:"current",frontMatter:{id:"custom-widgets",title:"\ucee4\uc2a4\ud140 \uc704\uc82f"},sidebar:"docs",previous:{title:"\ube44\ud2b8\ub9f5 \uce90\uc2f1",permalink:"/4.21/ko/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"},next:{title:"\uce94\ubc84\uc2a4 \uc704\uc82f",permalink:"/4.21/ko/docs/development/ui-development/touchgfx-engine-features/canvas-widgets"}},E={},O=[{value:"\ucee4\uc2a4\ud140 \uc704\uc82f \uc811\uadfc \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud574\uc57c \ud558\ub294 \uacbd\uc6b0",id:"when-to-use-the-custom-widget-approach",level:2},{value:"TouchGFX Designer\uc5d0\uc11c \ucee4\uc2a4\ud140 \uc704\uc82f \uc0dd\uc131\ud558\uae30",id:"in-touchgfx-designer",level:2},{value:"\ucf54\ub4dc\uc5d0\uc11c \ucee4\uc2a4\ud140 \uc704\uc82f \uc0dd\uc131\ud558\uae30",id:"in-code",level:2},{value:"\uc0ac\uc6a9\uc790 \uace0\uc720\uc758 \ucee4\uc2a4\ud140 \uc704\uc82f",id:"your-own-custom-widget",level:3},{value:"\ubd80\ubd84 \uadf8\ub9ac\uae30",id:"partial-drawing",level:3},{value:"\ubd88\ud22c\uba85\ud55c \uc601\uc5ed",id:"solid-area",level:3},{value:"\uc18c\uc2a4 \ucf54\ub4dc \uc608\uc81c",id:"example-source-code",level:3},{value:"\ud45c\uc900 \uc704\uc82f/\ucee8\ud14c\uc774\ub108 \uc218\uc815\ud558\uae30",id:"modifying-standard-widgetscontainers",level:2}],Q={toc:O};function Z(e){var t,n=e,{components:l}=n,c=((e,t)=>{var n={};for(var r in e)x.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&w)for(var r of w(e))t.indexOf(r)<0&&y.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=b(b({},Q),c),v(t,k({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud560 \ub54c TouchGFX \ubc30\ud3ec\ud310\uc5d0 \ud3ec\ud568\ub418\uc9c0 \uc54a\uc740 \uc704\uc82f\uc774 \ud544\uc694\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. TouchGFX\uc5d0\ub294 \uc0ac\uc6a9\uc790\uac00 \uc790\uc2e0\ub9cc\uc758 \uadf8\ub798\ud53d \uc694\uc18c\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\ub294 \uba87 \uac00\uc9c0 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uac00\uc7a5 \uc190\uc26c\uc6b4 \ubc29\ubc95\uc740 ",(0,r.kt)("a",b({parentName:"p"},{href:"custom-containers"}),"\ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108 \ubc29\uc2dd"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \uae30\uc874 \uc704\uc82f\uc744 \uc870\ud569\ud558\uc5ec \uc0ac\uc6a9\uc790 \uace0\uc720\uc758 \uc704\uc82f\uc744 \uc0dd\uc131\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc774 \uc139\uc158\uc5d0\uc11c\ub294 \uace0\uae09 \uc811\uadfc \ubc29\uc2dd\uc73c\ub85c\uc11c, \ud504\ub808\uc784\ubc84\ud37c\ub97c \uc644\uc804\ud788 \uc81c\uc5b4\ud560 \uc218 \uc788\ub294 \uc704\uc82f\uc744 \uc0dd\uc131\ud558\uc5ec \uc6d0\ud558\ub294 \uac83\uc744 \uc815\ubc00\ud558\uac8c \uadf8\ub9ac\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",b({},{id:"when-to-use-the-custom-widget-approach"}),"\ucee4\uc2a4\ud140 \uc704\uc82f \uc811\uadfc \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud574\uc57c \ud558\ub294 \uacbd\uc6b0"),(0,r.kt)("p",null,"\ucee4\uc2a4\ud140 \uc704\uc82f \uc0dd\uc131\uc740 \uc0ac\uc6a9\uc790 \uace0\uc720\uc758 \uc704\uc82f\uc744 \uc0dd\uc131\ud558\ub294 \uc791\uc5c5\uc73c\ub85c\uc11c \uac00\uc7a5 \uc77c\ubc18\uc801\uc778 \ubc29\ubc95\uc740 \uc544\ub2d9\ub2c8\ub2e4. \uc694\uac74\uc5d0 \ubd80\ud569\ud55c\ub2e4\uba74 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108 \uc811\uadfc \ubc29\uc2dd\uc744 \uc120\ud638\ud558\uc9c0\ub9cc \uc774 \ubc29\ubc95\ub9cc\uc73c\ub85c\ub294 \ubd80\uc871\ud55c \uacbd\uc6b0\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ud504\ub808\uc784\ubc84\ud37c\ub97c \uc644\uc804\ud788 \uc81c\uc5b4\ud558\ub824\uba74 \ucee4\uc2a4\ud140 \uc704\uc82f \uc811\uadfc \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ucee4\uc2a4\ud140 \uc704\uc82f \uc811\uadfc \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud574 \uc704\uc82f\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uace0, \uc0dd\uc131\ud574\uc57c \ud558\ub294 \uc608\ub97c \ub4e4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc138\ud53c\uc544(Sepia) \ud544\ud130"),(0,r.kt)("li",{parentName:"ul"},"\ub9cc\ub378\ube0c\ub85c \ud504\ub799\ud0c8(Mandelbrot fractal) \uc704\uc82f"),(0,r.kt)("li",{parentName:"ul"},"\ud30c\uc77c\uc758 \ub370\uc774\ud130\ub97c \ud45c\uc2dc\ud558\ub294 \uc704\uc82f(\uc608: gif \uc560\ub2c8\uba54\uc774\uc158 \ub4f1)")),(0,r.kt)("h2",b({},{id:"in-touchgfx-designer"}),"TouchGFX Designer\uc5d0\uc11c \ucee4\uc2a4\ud140 \uc704\uc82f \uc0dd\uc131\ud558\uae30"),(0,r.kt)("p",null,"TouchGFX Designer\ub294 \ud604\uc7ac \ucee4\uc2a4\ud140 \uc704\uc82f \uc0dd\uc131\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \ucee4\uc2a4\ud140 \uc704\uc82f \ucf54\ub4dc\ub97c \uc9c1\uc811 \uc791\uc131\ud55c \ud6c4(\uc791\uc131 \ubc29\ubc95\uc740 \ubcf8 \uc139\uc158\uc758 \ub098\uba38\uc9c0 \ubd80\ubd84 \ucc38\uc870), View\uc5d0\uc11c \uc0ac\uc6a9\uc790 \ucf54\ub4dc \uad6c\uac04\uc5d0 \uc704\uc82f\uc744 \uc0bd\uc785\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h2",b({},{id:"in-code"}),"\ucf54\ub4dc\uc5d0\uc11c \ucee4\uc2a4\ud140 \uc704\uc82f \uc0dd\uc131\ud558\uae30"),(0,r.kt)("p",null,"\uc0ac\uc6a9\uc790 \uace0\uc720\uc758 \ucee4\uc2a4\ud140 \uc704\uc82f\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"Widget")," \ud074\ub798\uc2a4\ub97c \ud655\uc7a5\ud558\uc5ec \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc774\ub54c \uc0ac\uc6a9\uc790\uc758 \uc218\uc791\uc5c5\uc774 \ub2e4\uc18c \ud544\uc694\ud558\uc9c0\ub9cc, \uc704\uc82f\uc5d0\uc11c \uadf8\ub824\uc9c0\ub294 \ubaa8\ub4e0 \ud53d\uc140\ub4e4\uc744 \uc644\ubcbd\ud558\uac8c \uc81c\uc5b4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucee4\uc2a4\ud140 \uc704\uc82f\uc774 \ubc18\ub4dc\uc2dc \uae30\uc874 \uc704\uc82f\uc744 \uc774\uc6a9\ud560 \ud544\uc694\ub294 \uc5c6\uc9c0\ub9cc \ud53d\uc140\uc758 \uc0c9\uc0c1\uc744 \uc9c0\uc815\ud558\uc5ec \uadf8\ub9ac\ub294  \ubc29\uc2dd\uc744 \uc815\uc758\ud569\ub2c8\ub2e4. \ucee4\uc2a4\ud140 \uc704\uc82f \uc811\uadfc \ubc29\uc2dd\uc740 \uc77c\ubc18\uc801\uc73c\ub85c \ucc28\uc9c0\ud558\ub294 \uba54\ubaa8\ub9ac \uacf5\uac04\uc774 \ube44\uad50\uc801 \uc801\uc5b4\uc11c \uacbd\uc6b0\uc5d0 \ub530\ub77c \ub9e4\uc6b0 \uc911\uc694\ud558\uac8c \uc0ac\uc6a9\ub418\uae30\ub3c4 \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ucee4\uc2a4\ud140 \uc704\uc82f\uc758 \ud55c \uac00\uc9c0 \uc608\ub85c QR \ucf54\ub4dc \uc704\uc82f\uc774 \uc788\uc2b5\ub2c8\ub2e4. QR \ucf54\ub4dc \uc704\uc82f\uc774 \ub300\ud45c\uc801\uc778 \uc608\uc774\ubbc0\ub85c \ub2e4\uc74c \uc139\uc158\uc5d0\uc11c\ub294 \uc774 \uc704\uc82f\uc744 \uc0dd\uc131\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc774 \uc608\uc2dc\uc5d0\uc11c QR \ucf54\ub4dc \uc704\uc82f\uc740 \ud751\ubc31 \ud53d\uc140\uc758 NxN \ub9e4\ud2b8\ub9ad\uc2a4\uc785\ub2c8\ub2e4. \uc704\uc82f\uc758 \ud06c\uae30\uc640 \uac01 \ud53d\uc140\uc758 \uc0c9\uc0c1\uc740 \ub7f0\ud0c0\uc784\uc5d0\uc11c \uacb0\uc815\ub418\uba70, QR \ucf54\ub4dc \ub370\uc774\ud130 \uac1d\uccb4\uc758 \uc815\ubcf4\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9d1\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub2e4\uc74c\uc740 QR \ucf54\ub4dc \uc704\uc82f\uc758 \ud615\ud0dc\ub97c \ub098\ud0c0\ub0b8 \ub450 \uac00\uc9c0 \uc608\uc2dc\uc785\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/qr-examples.webp",noShadow:!0,mdxType:"Figure"},"QR \ucf54\ub4dc \uc704\uc82f \uc608\uc2dc"),(0,r.kt)(i.Z,{mdxType:"Caution"},"\ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108 \uc811\uadfc \ubc29\uc2dd\uc5d0\uc11c\ub3c4 N*N \ud751\ubc31 \ubc15\uc2a4\ub97c \ud558\uc704 \uc704\uc82f\uc73c\ub85c \ucd94\uac00\ud558\uba74 QR \ucf54\ub4dc \uc704\uc82f\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc774\ub807\uac8c \ud558\uba74 \ucc28\uc9c0\ud558\ub294 \uba54\ubaa8\ub9ac \uacf5\uac04\uc774 \ud06c\uac8c \ub298\uc5b4\ub098\uae30 \ub54c\ubb38\uc5d0 \ud6a8\uc728\uc801\uc774\uac70\ub098 \uc720\uc5f0\ud558\uc9c0 \ubabb\ud569\ub2c8\ub2e4."),(0,r.kt)(o.Z,{mdxType:"Tip"},"\ud45c\uc900 ",(0,r.kt)(g.Z,{mdxType:"InlineCode"},"touchgfx::Button")," \uba54\uc18c\ub4dc(\ud504\ub808\uc784\uc6cc\ud06c\uc640 \ud568\uaed8 \uc81c\uacf5\ub428)\ub294 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uac00 \uc544\ub2cc \ucee4\uc2a4\ud140 \uc704\uc82f\uc73c\ub85c \uc0dd\uc131\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc2a4\ud06c\ub9b0\uc5d0\uc11c \ubc84\ud2bc\ubcc4 \uba54\ubaa8\ub9ac \uc810\uc720\ub7c9\uc744 \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",b({},{id:"your-own-custom-widget"}),"\uc0ac\uc6a9\uc790 \uace0\uc720\uc758 \ucee4\uc2a4\ud140 \uc704\uc82f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Widget")," \ud074\ub798\uc2a4\ub97c \ud655\uc7a5\ud558\ub294 \uc704\uc82f\uc744 \uc0dd\uc131\ud558\ub824\uba74 \ub450 \uac00\uc9c0\ub97c \uc124\uba85\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc704\uc82f\uc774 \uadf8\ub824\uc9c0\ub294 \ubc29\ubc95"),(0,r.kt)("li",{parentName:"ul"},"\uc704\uc82f\uc5d0\uc11c \ubd88\ud22c\uba85\ud55c(solid) \uc601\uc5ed")),(0,r.kt)("h3",b({},{id:"partial-drawing"}),"\ubd80\ubd84 \uadf8\ub9ac\uae30"),(0,r.kt)("p",null,"\ucee4\uc2a4\ud140 \uc704\uc82f\uc744 \ud3ec\ud568\ud574 \ubaa8\ub4e0 \uc704\uc82f\uc740 \ubd80\ubd84 \uadf8\ub9ac\uae30\ub97c \uc9c0\uc6d0\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774 \ub9d0\uc740 \uc704\uc82f\uc774 \uc77c\ubd80\ubd84\ub9cc \uadf8\ub9b4 \uc218 \uc788\uc5b4\uc57c \ud568\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub294 \ub450 \uac00\uc9c0 \uc0ac\ud56d\uc5d0\uc11c \uae30\uc778\ud558\ub294\ub370, \ud558\ub098\ub294, \uc2a4\ud06c\ub9b0 \uc804\uccb4\ub97c \ub2e4\uc2dc \uadf8\ub9ac\ub294 \uac83 \ubcf4\ub2e4\ub294 \uc77c\ubd80\ubd84\ub9cc \uadf8\ub824\uc57c \ud558\ub294 \uacbd\uc6b0\uac00 \ub9ce\uae30 \ub54c\ubb38\uc774\uba70 \ub098\uba38\uc9c0 \ud558\ub098\ub294, TouchGFX\uc758 \uc54c\uace0\ub9ac\uc998\uc740 \uadf8\ub824\uc9c0\ub294 \uc804\uccb4 \ud53d\uc140 \uc218\uc758 \ucd5c\uc18c\ud654\ub97c \uc704\ud574 \uc2a4\ud06c\ub9b0\uc758 \uadf8\ub9bc\uc744 \uc5ec\ub7ec \ubd80\ubd84\uc758 \uadf8\ub9bc\uc73c\ub85c \ubd84\ub9ac\ud560 \uc218 \uc788\uae30  \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacbd\uc6b0\uc5d0\ub294 \uc2a4\ud06c\ub9b0\uc758 \ubd80\ubd84 \uadf8\ub9ac\uae30\ub294 \uc704\uc82f\uc5d0\uac8c \ubd80\ubd84\uc801\uc73c\ub85c\ub9cc \uadf8\ub9ac\ub3c4\ub85d \uc694\uccad\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 QR \uc704\uc82f \uc5ed\uc2dc \ub2e4\uc74c\uacfc \uac19\uc774 \uac15\uc870\ub41c \uc601\uc5ed\ub9cc \uadf8\ub9ac\ub294 \uae30\ub2a5\uc744 \uc9c0\uc6d0\ud560 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/qr-partial-drawing.webp",noShadow:!0,mdxType:"Figure"},"QR \ucf54\ub4dc \uc704\uc82f \ubd80\ubd84 \uadf8\ub9ac\uae30"),(0,r.kt)("p",null,"\ucf54\ub4dc\uc5d0\uc11c \ubd80\ubd84 \uadf8\ub9ac\uae30\ub97c \uc218\ud589\ud558\ub824\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"draw")," \uba54\uc18c\ub4dc\ub97c \uc7ac\uc815\uc758\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"virtual void draw(const touchgfx::Rect& invalidatedArea) const\n{\n    //run through the pixels of the invalidated area\n    //draw a black pixel if the qr data object has a value at this position\n    //draw a white pixel otherwise\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"invalidatedArea"),"\ub294 \uc704\uc82f\uc5d0\uc11c \uc5c5\ub370\uc774\ud2b8\uac00 \ud544\uc694\ud55c \uc601\uc5ed\uc785\ub2c8\ub2e4. QR \ucf54\ub4dc \uc608\uc5d0\uc11c \uac15\uc870\ub41c \uc601\uc5ed\uc774 \ubb34\ud6a8\ud654 \uc601\uc5ed\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4. \uc774 \uc601\uc5ed\uc740 \uc704\uc82f\uc758 \uc67c\ucabd \uc0c1\ub2e8 \ubaa8\ud241\uc774\ub97c \uae30\uc900\uc73c\ub85c \uc88c\ud45c\ub85c \ud45c\ud604\ub429\ub2c8\ub2e4."),(0,r.kt)(i.Z,{mdxType:"Caution"},"\ubb34\ud6a8\ud654\ub41c \uc601\uc5ed \ub0b4\uc5d0 \uadf8\ub9ac\ub294 \uac83\uc740 \uc704\uc82f\uc774 \ud574\uc57c\ud560 \uc77c \uc785\ub2c8\ub2e4. \ubb34\ud6a8\ud654\ub41c \uc601\uc5ed\uc744 \ubc97\uc5b4\ub098\uc11c \uadf8\ub9ac\uac8c \ub418\uba74 \uc804\uccb4\uc801\uc73c\ub85c \uc2a4\ud06c\ub9b0 \ub3d9\uc791\uc758 \uc815\ud655\ub3c4\uac00 \ub5a8\uc5b4\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.Z,{mdxType:"Tip"},"\uc704\uc5d0\uc11c ",(0,r.kt)(g.Z,{mdxType:"InlineCode"},"draw")," \uba54\uc18c\ub4dc\ub294 ",(0,r.kt)(g.Z,{mdxType:"InlineCode"},"const\uc785\ub2c8\ub2e4.")," \ucd5c\uc801\ud654\ub41c \uadf8\ub9ac\uae30 \uc54c\uace0\ub9ac\uc998\uc774 \uc704\uc82f \uadf8\ub9ac\uae30\ub97c \ub2e4\uc218\uc758 \uadf8\ub9ac\uae30 \ud638\ucd9c\ub85c \ubd84\ud560\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc704\uc5d0\uc11c ",(0,r.kt)(g.Z,{mdxType:"InlineCode"},"const\uc785\ub2c8\ub2e4.")," \uc774\ub807\uac8c \ub2e4\uc218\uc758 ",(0,r.kt)(g.Z,{mdxType:"InlineCode"},"draw")," \uba54\uc18c\ub4dc\ub97c \uc2e4\ud589\ud558\ub294 \ub3c4\uc911 \uc704\uc82f\uc774 \uc6c0\uc9c1\uc774\uac70\ub098 \uc5c5\ub370\uc774\ud2b8\ub418\uc9c0 \uc54a\ub3c4\ub85d \ubcf4\uc7a5\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",b({},{id:"solid-area"}),"\ubd88\ud22c\uba85\ud55c \uc601\uc5ed"),(0,r.kt)("p",null,"\ub610\ud55c \uc704\uc82f\uc740 \ubd88\ud22c\uba85\ud55c \uc601\uc5ed\uc774 \uc5bc\ub9c8\ub098 \ud070\uc9c0 \ubcf4\uace0\ud560 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c \ubd88\ud22c\uba85\uc774\ub780 \uc2a4\ud06c\ub9b0\uc5d0\uc11c \uc704\uc82f\uc5d0 \uac00\ub824\uc9c4 \ubd80\ubd84\uc744 \ubcfc \uc218 \uc5c6\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ube68\uac04\uc0c9 \ud45c\uc900 \ubc15\uc2a4\ub294 \uc644\uc804 \ubd88\ud22c\uba85\uc778 \ubc18\uba74 \uc54c\ud30c \uac12\uc774 50%\uc778 \uc774\ubbf8\uc9c0\ub294 \uc644\uc804 \ubd88\ud22c\uba85\uc774 \uc544\ub2c8\uae30 \ub54c\ubb38\uc5d0 \uac00\ub824\uc9c4 \ubd80\ubd84\uc744 \ubaa8\ub450 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ubd88\ud22c\uba85\ud55c \uc704\uc82f\uc740 TouchGFX\uc5d0\uc11c \ub354\uc6b1 \ube60\ub974\uac8c \uadf8\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubd88\ud22c\uba85\ud55c \uc601\uc5ed \uc544\ub798\ub85c\ub294 \uc704\uc82f\uc744 \uadf8\ub9b4 \ud544\uc694\uac00 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \uadf8\ub824\uc57c \ud560 \ud53d\uc140\uc774 \ube44\uad50\uc801 \uc801\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ucf54\ub4dc\uc5d0\uc11c \ubd88\ud22c\uba85\ud55c \uc601\uc5ed\uc744 \ubcf4\uace0\ud558\ub824\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"getSolidRect")," \uba54\uc18c\ub4dc\ub97c \uc7ac\uc815\uc758\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"virtual Rect getSolidRect() const;\n")),(0,r.kt)("p",null,"\uadf8\ub7ec\uba74 QR \ucf54\ub4dc \uc704\uc82f\uc774 \uc644\uc804\ud788 \ubd88\ud22c\uba85\ud574\uc9d1\ub2c8\ub2e4. \uacb0\uad6d \ud751\ubc31 \ud53d\uc140\uc5d0 \uac00\ub824\uc9c4 \ubd80\ubd84\uc740 \uc544\ubb34\uac83\ub3c4 \ubcfc \uc218 \uc5c6\uac8c \ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \ub2e4\uc74c\uacfc \uac19\uc774 \uba54\uc18c\ub4dc\uac00 \uc2e4\uc81c \uc704\uc82f \ud06c\uae30\ub85c \uc9c1\uc0ac\uac01\ud615\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"virtual Rect getSolidRect() const\n{\n    return touchgfx::Rect(0, 0, getWidth(), getHeight());\n}\n")),(0,r.kt)("h3",b({},{id:"example-source-code"}),"\uc18c\uc2a4 \ucf54\ub4dc \uc608\uc81c"),(0,r.kt)("p",null,"\uacb0\uacfc\uc801\uc73c\ub85c \uc81c\uacf5\ub418\ub294 \ub370\uc774\ud130\uc5d0 \ub530\ub77c \ub2e4\uc74c\uacfc \uac19\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \uc704\uc82f\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/qr-screenshot.webp",noShadow:!0,mdxType:"Figure"},"QR \ucf54\ub4dc \uc704\uc82f \uc2a4\ud06c\ub9b0\uc0f7"),(0,r.kt)("p",null,"\uc804\uccb4 \uc704\uc82f \ucf54\ub4dc\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)(h.Z,{mdxType:"CodeHeader"},"gui/include/gui/common/QRCodeWidget.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"\n#ifndef QR_CODE_WIDGET_HPP\n#define QR_CODE_WIDGET_HPP\n\n#include <touchgfx/widgets/Widget.hpp>\n\nclass QRCodeWidget : public touchgfx::Widget\n{\npublic:\n    QRCodeWidget();\n\n    virtual void draw(const touchgfx::Rect& invalidatedArea) const;\n    virtual touchgfx::Rect getSolidRect() const;\n\n    void setQRCodeData(QRCodeData* data);\n    void setScale(uint8_t s);\n\nprivate:\n    void updateSize();\n\n    QRCodeData* data;\n    uint8_t scale;\n};\n#endif\n")),(0,r.kt)("p",null,"\ud5e4\ub354 \ud30c\uc77c\uc5d0\uc11c \uc704\uc82f\uc744 ",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx::Widget")," \ud074\ub798\uc2a4\uc758 \ud655\uc7a5\uc73c\ub85c \uc815\uc758\ud569\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"draw")," \uba54\uc18c\ub4dc\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"getSolidRect")," \uba54\uc18c\ub4dc\ub97c \uc7ac\uc815\uc758\ud558\uc5ec \uc704\uc82f\uc758 \uadf8\ub9ac\uae30 \ubc29\uc2dd\uc744 \uc815\uc758\ud569\ub2c8\ub2e4. QR \ucf54\ub4dc\uc758 \ub370\uc774\ud130\ub97c \uc124\uc815\ud558\ub294 \uba54\uc18c\ub4dc\uc640 QR \ucf54\ub4dc\uc758 \uc2a4\ucf00\uc77c\ub9c1 \uacc4\uc218\ub97c \uc124\uc815\ud558\ub294 \uba54\uc18c\ub4dc\ub97c \uc120\uc5b8\ud569\ub2c8\ub2e4."),(0,r.kt)(h.Z,{mdxType:"CodeHeader"},"gui/src/common/QRCodeWidget.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"#include <gui/common/QRCodeWidget.hpp>\n\nQRCodeWidget::QRCodeWidget() :\n    data(0),\n    scale(1)\n{\n}\n\nvoid QRCodeWidget::draw(const touchgfx::Rect& invalidatedArea) const\n{\n    if (!data)\n    {\n        return;\n    }\n\n    touchgfx::Rect absolute = getAbsoluteRect();\n\n    uint16_t* framebuffer = touchgfx::HAL::getInstance()->lockFrameBuffer();\n\n    for (int y = invalidatedArea.y; y < invalidatedArea.bottom(); y++)\n    {\n        for (int x = invalidatedArea.x; x < invalidatedArea.right(); x++)\n        {\n            framebuffer[absolute.x + x + (absolute.y + y) * touchgfx::HAL::DISPLAY_WIDTH] =\n              data->at(x / scale, y / scale) ? 0x0000 : 0xffff;\n        }\n    }\n\n    touchgfx::HAL::getInstance()->unlockFrameBuffer();\n}\n\ntouchgfx::Rect QRCodeWidget::getSolidRect() const\n{\n    return touchgfx::Rect(0, 0, getWidth(), getHeight());\n}\n\nvoid QRCodeWidget::setQRCodeData(QRCodeData* qrCode)\n{\n    data = qrCode;\n    updateSize();\n}\n\nvoid QRCodeWidget::setScale(uint8_t s)\n{\n    scale = s;\n    updateSize();\n}\n\nvoid QRCodeWidget::updateSize()\n{\n    if (data)\n    {\n        setWidth(data->getSize() * scale);\n        setHeight(data->getSize() * scale);\n    }\n}\n")),(0,r.kt)("p",null,"\uc18c\uc2a4 \ud30c\uc77c\uc5d0\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"draw")," \uba54\uc18c\ub4dc\ub97c \uc815\uc758\ud569\ub2c8\ub2e4. \uc774 \uba54\uc18c\ub4dc\ub294 \ubb34\ud6a8\ud654 \uc601\uc5ed\uc758 \uac01 \ud53d\uc140\uc744 \ud655\uc778\ud55c \ud6c4 \ub370\uc774\ud130 \uac1d\uccb4\uc758 \ub0b4\uc6a9\uacfc \uc2a4\ucf00\uc77c\ub9c1 \uacc4\uc218\uc5d0 \ub530\ub77c \ud504\ub808\uc784\ubc84\ud37c\uc758 \uc0c9\uc0c1\uc744 \uacb0\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getSolidRect")," \uba54\uc18c\ub4dc\ub294 \uc704\uc82f\uc774 \uc644\uc804\ud788 \ubd88\ud22c\uba85\ud55c \uac83\uc73c\ub85c \ubcf4\uace0\ud569\ub2c8\ub2e4."),(0,r.kt)(i.Z,{mdxType:"Caution"},"\uc704 \uc608\uc81c\ub97c \ubcf4\uba74 ",(0,r.kt)(g.Z,{mdxType:"InlineCode"},"draw")," \uba54\uc18c\ub4dc\uc5d0\uc11c \ud504\ub808\uc784\ubc84\ud37c\ub97c \uc7a0\uadfc \ud6c4 \ub2e4\uc2dc \uc7a0\uae08 \ud574\uc81c\ud588\uc2b5\ub2c8\ub2e4. \uc774\uc720\ub294 \uadf8\ub9ac\uae30\ub97c \uc2dc\uc791\ud560 \ub54c DMA\ub97c \uc0ac\uc6a9\ud574 \uadf8\ub9ac\uae30\ub97c \ub9c8\uce58\uae30 \uc704\ud574\uc11c\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ucf54\ub4dc \uc5ed\uc2dc \uc791\uc740 \ud074\ub798\uc2a4/\uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud574 QR \ucf54\ub4dc \ub370\uc774\ud130\uc5d0 \uc561\uc138\uc2a4\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"class QRCodeData\n{\npublic:\n    uint8_t getSize();\n    bool at(uint8_t x, uint8_t y);\n};\n")),(0,r.kt)(s.Z,{mdxType:"FurtherReading"},(0,r.kt)(m.Z,{to:"/download/widgets/qr-code.zip",target:"_blank",mdxType:"Link"},"QRCode")," \ubc0f ",(0,r.kt)(m.Z,{to:"/download/widgets/lens.zip",target:"_blank",mdxType:"Link"},"Lens")," \uc704\uc82f\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud558\uc5ec \ud655\uc778\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)(p,{mdxType:"Try"},(0,r.kt)("li",null,"\ud770\uc0c9 \ud53d\uc140\uc774 \uc644\uc804\ud788 \ud22c\uba85\ud574\uc9c8 \ub54c\uae4c\uc9c0 QR \ucf54\ub4dc \uc704\uc82f\uc744 \uc218\uc815\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("li",null,"\uc138\ud53c\uc544 \ud544\ud130, \ub9cc\ub378\ube0c\ub85c \ud504\ub799\ud0c8, gif \uc774\ubbf8\uc9c0 \ub4f1\uc744 \ud45c\uc2dc\ud558\ub294 \ucee4\uc2a4\ud140 \uc704\uc82f\uc744 \uc0dd\uc131\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("li",null,"\ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\ub97c \uc0ac\uc6a9\ud560 \ub54c \uc5b4\ub5a4 \uc704\uc82f\uc744 \uac00\uc7a5 \uc27d\uac8c \uc0dd\uc131\ud560 \uc218 \uc788\ub294\uc9c0, \uadf8\ub9ac\uace0 \ucee4\uc2a4\ud140 \uc704\uc82f \uc811\uadfc \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud560 \ub54c \uc5b4\ub5a4 \uc704\uc82f\uc744 \uac00\uc7a5 \uc27d\uac8c \uc0dd\uc131\ud560 \uc218 \uc788\ub294\uc9c0 \uace0\ub824\ud558\uc2ed\uc2dc\uc624.")),(0,r.kt)("h2",b({},{id:"modifying-standard-widgetscontainers"}),"\ud45c\uc900 \uc704\uc82f/\ucee8\ud14c\uc774\ub108 \uc218\uc815\ud558\uae30"),(0,r.kt)("p",null,"TouchGFX\ub97c \uc124\uce58\ud558\uba74 \ud45c\uc900 \uc704\uc82f\uc758 \uc18c\uc2a4 \ucf54\ub4dc\ub3c4 \ud568\uaed8 \uc81c\uacf5\ub429\ub2c8\ub2e4. \uc774\ub4e4 \ucf54\ub4dc\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc694\uac74\uc5d0 \ub9de\uac8c \uc218\uc815\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ud45c\uc900 \uc704\uc82f\uacfc \ucee8\ud14c\uc774\ub108\uc758 \uc18c\uc2a4 \ucf54\ub4dc\ub294 \uc544\ub798 \ud3f4\ub354\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{}),"Middlewares\\ST\\touchgfx\\framework\\source\\touchgfx\\widgets\n")),(0,r.kt)("p",null,"\ucf54\uc5b4 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0\ub294 \ud558\uc704 \ud638\ud658\uc131\uc744 \uc720\uc9c0\ud558\uae30 \uc704\ud574 \ud45c\uc900\uacfc \ucee8\ud14c\uc774\ub108\uc758 \ucef4\ud30c\uc77c \ubc84\uc804\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc774\ub7ec\ud55c \ud30c\uc77c\uc744 \ucef4\ud30c\uc77c\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)(i.Z,{mdxType:"Caution"},"\ud45c\uc900 \uc704\uc82f/\ucee8\ud14c\uc774\ub108\ub97c \uc9c1\uc811 \uc218\uc815\ud558\ub294 \uac83\uc740 \uad8c\uc7a5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc18c\uc2a4 \ucf54\ub4dc\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \uc544\uc774\ub514\uc5b4\ub97c \uc81c\uacf5\ud558\ub294 \ub3d9\uc2dc\uc5d0 TouchGFX \uc704\uc82f\uc758 \ub0b4\ubd80 \uc2e4\ud589 \uc54c\uc544\ubcf4\ub294 \ub370 \ubaa9\uc801\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ud45c\uc900 \uad6c\ud604\uccb4\uc640 \ub2e4\ub978 \ub3d9\uc791\uc744 \uc6d0\ud55c\ub2e4\uba74 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\ub97c \ud558\uc704 \ubd84\ub958\ud558\uac70\ub098 \uc0dd\uc131\ud558\uc5ec \uc6d0\ud558\ub294 \ub3d9\uc791\uc744 \uad6c\ud604\ud560 \uc218 \uc788\uc73c\uba70, \uc774 \uc5ed\uc2dc \uad8c\uc7a5\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub7ec\ud55c \ubc29\uc2dd\uc744 \uad8c\uc7a5\ud558\ub294 \uc774\uc720\ub294 \ub450 \uac00\uc9c0\uc785\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uccab\uc9f8, \uc0ac\uc6a9\uc790 \ubcc0\uacbd \uc0ac\ud56d\uc740 \uc0ac\uc6a9\uc790\uac00 \uc9c1\uc811 \ubcd1\ud569\ud574\uc57c \ud558\ubbc0\ub85c \ucd5c\uc2e0 TouchGFX \ubc84\uc804\uc73c\ub85c \uc5c5\uadf8\ub808\uc774\ub4dc\ud558\uae30\uac00 \ub354\uc6b1 \uc5b4\ub824\uc6cc\uc9d1\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub458\uc9f8, \ud2b9\uc815 \ub3d9\uc791\uc5d0 \ub530\ub77c \ud45c\uc900 \uc704\uc82f\uacfc \ucee8\ud14c\uc774\ub108\uac00 \uc798\ubabb\ub420 \uc704\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\ub530\ub77c\uc11c \ud45c\uc900 \uc704\uc82f/\ucee8\ud14c\uc774\ub108\ub97c \uc218\uc815\ud574\uc57c \ud55c\ub2e4\uba74 \uc18c\uc2a4 \ucf54\ub4dc\ub97c \uc9c1\uc811 \ubcc0\uacbd\ud558\uc9c0 \ub9d0\uace0 \uba3c\uc800 \ubcf5\uc0ac\ud558\uc5ec \uc774\ub984\uc744 \ubcc0\uacbd\ud55c \ud6c4 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub807\uae30\ub294 \ud574\ub3c4 \uc633\ub2e4\uace0 \ud310\ub2e8\ud558\ub294 \uc791\uc5c5\uc774\uba74 \ubb34\uc5c7\uc774\ub4e0 \uc790\uc720\ub86d\uac8c \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud45c\uc900 \uc704\uc82f\uc758 \uc18c\uc2a4 \ucf54\ub4dc\ub97c \ud504\ub85c\uc81d\ud2b8\uc5d0 \ucd94\uac00\ud558\uba74 \ub9c1\ucee4\uac00 \ucf54\uc5b4 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0 \uc788\ub294 \ubc84\uc804\uc774 \uc544\ub2cc \uc774 \ubc84\uc804\uc744 \uc120\ud0dd\ud558\uac8c \ub429\ub2c8\ub2e4. \uacb0\uacfc\uc801\uc73c\ub85c \uc18c\uc2a4 \ucf54\ub4dc\ub97c \ucef4\ud30c\uc77c \ubc84\uc804\uc5d0 \ucd94\uac00\ud558\uc5ec \ud45c\uc900 \uc704\uc82f\uc744 \uc218\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}Z.isMDXComponent=!0}}]);