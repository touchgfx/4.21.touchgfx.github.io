"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6194],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return u}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),k=p(a),u=r,g=k["".concat(d,".").concat(u)]||k[u]||m[u]||l;return a?n.createElement(g,i(i({ref:e},c),{},{components:a})):n.createElement(g,i({ref:e},c))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},43861:function(t,e,a){var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},63420:function(t,e,a){a.r(e),a.d(e,{assets:function(){return _},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return g},metadata:function(){return N},toc:function(){return h}});var n=a(3905),r=a(39130),l=a(43861),i=Object.defineProperty,o=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,k=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,u=(t,e)=>{for(var a in e||(e={}))c.call(e,a)&&k(t,a,e[a]);if(p)for(var a of p(e))m.call(e,a)&&k(t,a,e[a]);return t};const g={title:"TimerWidgets"},s=void 0,N={unversionedId:"api/classes/classtouchgfx_1_1_application_1_1_timer_widgets",id:"api/classes/classtouchgfx_1_1_application_1_1_timer_widgets",title:"TimerWidgets",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_application_1_1_timer_widgets.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_application_1_1_timer_widgets",permalink:"/4.21/zh-TW/docs/api/classes/classtouchgfx_1_1_application_1_1_timer_widgets",draft:!1,tags:[],version:"current",frontMatter:{title:"TimerWidgets"},sidebar:"docs",previous:{title:"TiledImageButtonStyle",permalink:"/4.21/zh-TW/docs/api/classes/classtouchgfx_1_1_tiled_image_button_style"},next:{title:"ToggleButton",permalink:"/4.21/zh-TW/docs/api/classes/classtouchgfx_1_1_toggle_button"}},_={},h=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"add",id:"add",level:3},{value:"clear",id:"clear",level:3},{value:"compact",id:"compact",level:3},{value:"getCounter",id:"getcounter",level:3},{value:"getNumberOfActiveTimerWidgets",id:"getnumberofactivetimerwidgets",level:3},{value:"remove",id:"remove",level:3},{value:"tickActive",id:"tickactive",level:3}],f={toc:h};function b(t){var e,a=t,{components:i}=a,k=((t,e)=>{var a={};for(var n in t)c.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&m.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=u(u({},f),k),o(e,d({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"touchgfx/Application.hpp")),(0,n.kt)("p",null,"A class to handle and manage timer widgets. "),(0,n.kt)("h2",u({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:"right"})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_application_1_1_timer_widgets#function-add",mdxType:"Link"},"add")),"(",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," * w)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Adds timer widget.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_application_1_1_timer_widgets#function-clear",mdxType:"Link"},"clear")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Clears all timer widgets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_application_1_1_timer_widgets#function-compact",mdxType:"Link"},"compact")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Compacts the timer widgets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),"uint16_t"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_application_1_1_timer_widgets#function-getcounter",mdxType:"Link"},"getCounter")),"(const ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," * w) const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Gets a counter for a given timer widget.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),"uint16_t"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_application_1_1_timer_widgets#function-getnumberofactivetimerwidgets",mdxType:"Link"},"getNumberOfActiveTimerWidgets")),"() const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Gets number of active timer widgets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_application_1_1_timer_widgets#function-remove",mdxType:"Link"},"remove")),"(const ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," * w)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Removes the given timer widget.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_application_1_1_timer_widgets#function-tickactive",mdxType:"Link"},"tickActive")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Tick all active timer widgets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",u({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_application_1_1_timer_widgets#function-add",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"add"}),"add"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_application_1_1_timer_widgets#function-add",mdxType:"Link"},"add")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," *"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"w"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Adds timer widget. "),(0,n.kt)("p",null,"If a timer widget is added from a ",(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_application#function-handletickevent"}),"handleTickEvent()"),", the timer will not be ticket until the next tick (unless that same widget is already registered, and has not yet been ticked in this tick)."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"w"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The timer widget to add."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_application_1_1_timer_widgets#function-clear",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"clear"}),"clear"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_application_1_1_timer_widgets#function-clear",mdxType:"Link"},"clear")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Clears all timer widgets. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_application_1_1_timer_widgets#function-compact",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"compact"}),"compact"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_application_1_1_timer_widgets#function-compact",mdxType:"Link"},"compact")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Compacts the timer widgets. "),(0,n.kt)("p",null,"All widgets with a counter of 0 will be removed from the list, and the list will be compacted. Compacting the timer widgets during traversal (in ",(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_application_1_1_timer_widgets#function-tickactive"}),"tickActive()"),") is handled properly. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_application_1_1_timer_widgets#function-getcounter",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"getcounter"}),"getCounter"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"uint16_t","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_application_1_1_timer_widgets#function-getcounter",mdxType:"Link"},"getCounter")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," *"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"w"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Gets a counter for a given timer widget. "),(0,n.kt)("p",null,"Normally the counter is 1 unless a timer widget has been registered several times."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"w"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The timer widget to get the counter for."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The counter. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_application_1_1_timer_widgets#function-getnumberofactivetimerwidgets",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"getnumberofactivetimerwidgets"}),"getNumberOfActiveTimerWidgets"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"uint16_t","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_application_1_1_timer_widgets#function-getnumberofactivetimerwidgets",mdxType:"Link"},"getNumberOfActiveTimerWidgets")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"const"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Gets number of active timer widgets. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The number of active timer widgets. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_application_1_1_timer_widgets#function-remove",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"remove"}),"remove"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_application_1_1_timer_widgets#function-remove",mdxType:"Link"},"remove")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," *"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"w"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Removes the given timer widget. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"w"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The timer widget to remove."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_application_1_1_timer_widgets#function-tickactive",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"tickactive"}),"tickActive"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_application_1_1_timer_widgets#function-tickactive",mdxType:"Link"},"tickActive")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Tick all active timer widgets. "),(0,n.kt)("p",null,"Adding and removing timer widgets during ticks is supported. "))))}b.isMDXComponent=!0}}]);