"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7889],{3905:function(t,a,n){n.d(a,{Zo:function(){return u},kt:function(){return k}});var e=n(67294);function r(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function l(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function i(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function o(t,a){if(null==t)return{};var n,e,r=function(t,a){if(null==t)return{};var n,e,r={},l=Object.keys(t);for(e=0;e<l.length;e++)n=l[e],a.indexOf(n)>=0||(r[n]=t[n]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(e=0;e<l.length;e++)n=l[e],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=e.createContext({}),m=function(t){var a=e.useContext(c),n=a;return t&&(n="function"==typeof t?t(a):i(i({},a),t)),n},u=function(t){var a=m(t.components);return e.createElement(c.Provider,{value:a},t.children)},s={inlineCode:"code",wrapper:function(t){var a=t.children;return e.createElement(e.Fragment,{},a)}},p=e.forwardRef((function(t,a){var n=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=m(n),k=r,d=p["".concat(c,".").concat(k)]||p[k]||s[k]||l;return n?e.createElement(d,i(i({ref:a},u),{},{components:n})):e.createElement(d,i({ref:a},u))}));function k(t,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return e.createElement.apply(null,i)}return e.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43861:function(t,a,n){var e=n(67294);class r extends e.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return e.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}a.Z=r},61518:function(t,a,n){n.r(a),n.d(a,{assets:function(){return b},contentTitle:function(){return f},default:function(){return _},frontMatter:function(){return d},metadata:function(){return g},toc:function(){return h}});var e=n(3905),r=n(39130),l=n(43861),i=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(t,a,n)=>a in t?i(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,k=(t,a)=>{for(var n in a||(a={}))u.call(a,n)&&p(t,n,a[n]);if(m)for(var n of m(a))s.call(a,n)&&p(t,n,a[n]);return t};const d={title:"PartialFrameBufferManager"},f=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_partial_frame_buffer_manager",id:"api/classes/classtouchgfx_1_1_partial_frame_buffer_manager",title:"PartialFrameBufferManager",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_partial_frame_buffer_manager.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_partial_frame_buffer_manager",permalink:"/4.21/docs/api/classes/classtouchgfx_1_1_partial_frame_buffer_manager",draft:!1,tags:[],version:"current",frontMatter:{title:"PartialFrameBufferManager"},sidebar:"docs",previous:{title:"Pair",permalink:"/4.21/docs/api/classes/structtouchgfx_1_1_pair"},next:{title:"Partition",permalink:"/4.21/docs/api/classes/classtouchgfx_1_1_partition"}},b={},h=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"transmitRemainingBlocks",id:"transmitremainingblocks",level:3},{value:"tryTransmitBlock",id:"trytransmitblock",level:3},{value:"tryTransmitBlockFromIRQ",id:"trytransmitblockfromirq",level:3}],y={toc:h};function _(t){var a,n=t,{components:i}=n,p=((t,a)=>{var n={};for(var e in t)u.call(t,e)&&a.indexOf(e)<0&&(n[e]=t[e]);if(null!=t&&m)for(var e of m(t))a.indexOf(e)<0&&s.call(t,e)&&(n[e]=t[e]);return n})(n,["components"]);return(0,e.kt)("wrapper",(a=k(k({},y),p),o(a,c({components:i,mdxType:"MDXLayout"}))),(0,e.kt)("p",null,"This class specifies strategies for transmitting block to the display using Partial Frame Buffer. "),(0,e.kt)("h2",k({},{id:"public-functions"}),"Public Functions"),(0,e.kt)("div",{class:"function-table",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",k({parentName:"tr"},{align:"right"})),(0,e.kt)("th",k({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",k({parentName:"tr"},{align:"right"}),"void"),(0,e.kt)("td",k({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_partial_frame_buffer_manager#function-transmitremainingblocks",mdxType:"Link"},"transmitRemainingBlocks")),"()")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",k({parentName:"tr"},{align:"right"})),(0,e.kt)("td",k({parentName:"tr"},{align:null}),"Transmit all remaining drawn Framebuffer blocks.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",k({parentName:"tr"},{align:"right"})),(0,e.kt)("td",k({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",k({parentName:"tr"},{align:"right"}),"void"),(0,e.kt)("td",k({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_partial_frame_buffer_manager#function-trytransmitblock",mdxType:"Link"},"tryTransmitBlock")),"()")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",k({parentName:"tr"},{align:"right"})),(0,e.kt)("td",k({parentName:"tr"},{align:null}),"Tries to transmit a drawn block.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",k({parentName:"tr"},{align:"right"})),(0,e.kt)("td",k({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",k({parentName:"tr"},{align:"right"}),"void"),(0,e.kt)("td",k({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_partial_frame_buffer_manager#function-trytransmitblockfromirq",mdxType:"Link"},"tryTransmitBlockFromIRQ")),"()")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",k({parentName:"tr"},{align:"right"})),(0,e.kt)("td",k({parentName:"tr"},{align:null}),"Tries to transmit a drawn block in interrupt context.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",k({parentName:"tr"},{align:"right"})),(0,e.kt)("td",k({parentName:"tr"},{align:null})))))),(0,e.kt)("h2",k({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,e.kt)(l.Z,{url:"classtouchgfx_1_1_partial_frame_buffer_manager#function-transmitremainingblocks",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",k({},{id:"transmitremainingblocks"}),"transmitRemainingBlocks"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",k({parentName:"tr"},{align:null})),(0,e.kt)("th",k({parentName:"tr"},{align:null})),(0,e.kt)("th",k({parentName:"tr"},{align:null})),(0,e.kt)("th",k({parentName:"tr"},{align:null})),(0,e.kt)("th",k({parentName:"tr"},{align:null})),(0,e.kt)("th",k({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",k({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_partial_frame_buffer_manager#function-transmitremainingblocks",mdxType:"Link"},"transmitRemainingBlocks")),(0,e.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",k({parentName:"tr"},{align:null})),(0,e.kt)("td",k({parentName:"tr"},{align:null})),(0,e.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",k({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,"Transmit all remaining drawn Framebuffer blocks. "),(0,e.kt)("div",{class:"api-note",markdown:"1"},(0,e.kt)("h5",null,"Note"),(0,e.kt)("p",null,"This function does not return before all blocks have been transmitted. ")))),(0,e.kt)(l.Z,{url:"classtouchgfx_1_1_partial_frame_buffer_manager#function-trytransmitblock",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",k({},{id:"trytransmitblock"}),"tryTransmitBlock"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",k({parentName:"tr"},{align:null})),(0,e.kt)("th",k({parentName:"tr"},{align:null})),(0,e.kt)("th",k({parentName:"tr"},{align:null})),(0,e.kt)("th",k({parentName:"tr"},{align:null})),(0,e.kt)("th",k({parentName:"tr"},{align:null})),(0,e.kt)("th",k({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",k({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_partial_frame_buffer_manager#function-trytransmitblock",mdxType:"Link"},"tryTransmitBlock")),(0,e.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",k({parentName:"tr"},{align:null})),(0,e.kt)("td",k({parentName:"tr"},{align:null})),(0,e.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",k({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,"Tries to transmit a drawn block. "),(0,e.kt)("div",{class:"api-note",markdown:"1"},(0,e.kt)("h5",null,"Note"),(0,e.kt)("p",null,"Will return immediately if already transmitting. ")))),(0,e.kt)(l.Z,{url:"classtouchgfx_1_1_partial_frame_buffer_manager#function-trytransmitblockfromirq",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",k({},{id:"trytransmitblockfromirq"}),"tryTransmitBlockFromIRQ"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",k({parentName:"tr"},{align:null})),(0,e.kt)("th",k({parentName:"tr"},{align:null})),(0,e.kt)("th",k({parentName:"tr"},{align:null})),(0,e.kt)("th",k({parentName:"tr"},{align:null})),(0,e.kt)("th",k({parentName:"tr"},{align:null})),(0,e.kt)("th",k({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",k({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_partial_frame_buffer_manager#function-trytransmitblockfromirq",mdxType:"Link"},"tryTransmitBlockFromIRQ")),(0,e.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",k({parentName:"tr"},{align:null})),(0,e.kt)("td",k({parentName:"tr"},{align:null})),(0,e.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",k({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,"Tries to transmit a drawn block in interrupt context. "),(0,e.kt)("div",{class:"api-note",markdown:"1"},(0,e.kt)("h5",null,"Note"),(0,e.kt)("p",null,"Will transmit next block immediately if drawn. ")))))}_.isMDXComponent=!0}}]);