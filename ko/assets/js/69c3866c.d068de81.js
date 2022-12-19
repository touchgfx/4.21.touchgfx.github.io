"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[733],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),u=p(a),k=r,_=u["".concat(o,".").concat(k)]||u[k]||s[k]||l;return a?n.createElement(_,i(i({ref:e},d),{},{components:a})):n.createElement(_,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},43861:function(t,e,a){var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},1449:function(t,e,a){a.r(e),a.d(e,{assets:function(){return g},contentTitle:function(){return h},default:function(){return v},frontMatter:function(){return _},metadata:function(){return m},toc:function(){return b}});var n=a(3905),r=a(39130),l=a(43861),i=Object.defineProperty,c=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,k=(t,e)=>{for(var a in e||(e={}))d.call(e,a)&&u(t,a,e[a]);if(p)for(var a of p(e))s.call(e,a)&&u(t,a,e[a]);return t};const _={title:"GraphClickEvent"},h=void 0,m={unversionedId:"api/classes/classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event",id:"api/classes/classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event",title:"GraphClickEvent",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event",permalink:"/4.21/ko/docs/api/classes/classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event",draft:!1,tags:[],version:"current",frontMatter:{title:"GraphClickEvent"},sidebar:"docs",previous:{title:"Graph",permalink:"/4.21/ko/docs/api/classes/classtouchgfx_1_1_graph"},next:{title:"GraphData",permalink:"/4.21/ko/docs/api/classes/classtouchgfx_1_1_graph_data"}},g={},b=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"GraphClickEvent",id:"graphclickevent",level:3},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"clickEvent",id:"clickevent",level:3},{value:"index",id:"index",level:3}],f={toc:b};function v(t){var e,a=t,{components:i}=a,u=((t,e)=>{var a={};for(var n in t)d.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&s.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=k(k({},f),u),c(e,o({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," An object of this type is passed with each callback that is sent when the graph is clicked.\nThe object contains the data index that was pressed and the details of the click event, e.g. PRESSED, RELEASED and screen coordinates. "),(0,n.kt)("h2",k({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:"right"})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event#function-graphclickevent",mdxType:"Link"},"GraphClickEvent")),"(int16_t i, const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," & event)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event"}),"GraphClickEvent")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",k({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:"right"})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," &"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event#variable-clickevent",mdxType:"Link"},"clickEvent")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The ClickEvent that caused the callback to be executed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"int16_t"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event#variable-index",mdxType:"Link"},"index")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The index of the item clicked.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",k({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event#function-graphclickevent",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"graphclickevent"}),"GraphClickEvent"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event#function-graphclickevent",mdxType:"Link"},"GraphClickEvent")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"int16_t"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"i ,"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," &"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"event"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Initializes a new instance of the ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event"}),"GraphClickEvent")," class. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"i"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The index of the item clicked.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"event"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," that caused the callback to be executed."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_abstract_data_graph#function-setclickaction"}),"setClickAction"))))),(0,n.kt)("h2",k({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event#variable-clickevent",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"clickevent"}),"clickEvent"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"const ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," & clickEvent ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The ClickEvent that caused the callback to be executed. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event#variable-index",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"index"}),"index"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"int16_t index ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The index of the item clicked. "))))}v.isMDXComponent=!0}}]);