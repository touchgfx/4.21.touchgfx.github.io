"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6646],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=o,m=d["".concat(l,".").concat(p)]||d[p]||f[p]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},17459:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return P},frontMatter:function(){return g},metadata:function(){return v},toc:function(){return w}});var r=n(3905),o=n(39130),i=n(44035),a=n(67294);var c=function(e){let t;e.noShadow;const[n,r]=(0,a.useState)(0);let o=()=>{const e=t.children[0];let r=-20*n;for(let o of t.children)o.style.transform=`translateX(${-e.offsetWidth*n+r}px)`,r+=20};return(0,a.useEffect)((()=>{o()})),a.createElement("div",{className:"slide-figure"},a.createElement("div",{className:"slide-figure-container",ref:e=>t=e},e.children),a.createElement("div",{className:"slide-previous",onClick:()=>{n-1<0?n=r(t.children.length-1):r(n-1),o()}}),a.createElement("div",{className:"slide-next",onClick:()=>{n+1>=t.children.length?r(0):r(n+1),o()}}),a.createElement("div",{className:"slide-dots"},e.children.map(((e,t)=>a.createElement("div",{className:"slide-dot",dotSelected:n==t?"":null})))))},l=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(f)for(var n of f(t))p.call(t,n)&&m(e,n,t[n]);return e};const g={id:"offline-documentation",title:"Offline Documentation"},b=void 0,v={unversionedId:"resources/offline-documentation",id:"resources/offline-documentation",title:"Offline Documentation",description:"",source:"@site/docs/resources/offline-documentation.mdx",sourceDirName:"resources",slug:"/resources/offline-documentation",permalink:"/4.21/ko/docs/resources/offline-documentation",draft:!1,tags:[],version:"current",frontMatter:{id:"offline-documentation",title:"Offline Documentation"},sidebar:"docs",previous:{title:"\ud504\ub808\uc820\ud14c\uc774\uc158",permalink:"/4.21/ko/docs/resources/presentations"}},y={},w=[{value:"Progressive Web App (PWA)",id:"progressive-web-app-pwa",level:2},{value:"How to install the TouchGFX Documentation PWA",id:"how-to-install-the-touchgfx-documentation-pwa",level:3},{value:"Offline PDF",id:"offline-pdf",level:2}],O={toc:w};function P(e){var t,n=e,{components:a}=n,l=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},O),l),s(t,u({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h2",h({},{id:"progressive-web-app-pwa"}),"Progressive Web App (PWA)"),(0,r.kt)("p",null,"The documentation can be installed as a Progressive Web App. This means that PC browsers such as Google Chrome and Microsoft Edge provide the option to ",(0,r.kt)("em",{parentName:"p"},"install")," the documentation locally in such a way that it is available both when offline and online."),(0,r.kt)("h3",h({},{id:"how-to-install-the-touchgfx-documentation-pwa"}),"How to install the TouchGFX Documentation PWA"),(0,r.kt)("p",null,"The following images show where the PWA install button can be found in both Google Chrome and Microsoft Edge."),(0,r.kt)(c,{mdxType:"SlideFigure"},(0,r.kt)(i.Z,{imageSource:"/img/resources/offline-documentation/chrome-pwa.png",mdxType:"Figure"},"In Google Chrome the install button is located on the right hand side in the URL bar"),(0,r.kt)(i.Z,{imageSource:"/img/resources/offline-documentation/edge-pwa.png",mdxType:"Figure"},"In Microsoft Edge the install button is located on the right hand side in the URL bar")),(0,r.kt)("h2",h({},{id:"offline-pdf"}),"Offline PDF"),(0,r.kt)("p",null,"The documentation can also be downloaded as a PDF. The content of this PDF may not fully reflect the same experience as in the browser."),(0,r.kt)("p",null,"The offline PDF version of the documentation ",(0,r.kt)(o.Z,{to:"http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/doc/4.21/touchgfx-documentation-4.21.pdf",target:"_blank",mdxType:"Link"},"can be found here"),"."))}P.isMDXComponent=!0}}]);