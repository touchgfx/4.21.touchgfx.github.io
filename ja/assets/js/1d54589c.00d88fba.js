"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2430],{3905:function(t,n,a){a.d(n,{Zo:function(){return d},kt:function(){return u}});var e=a(67294);function r(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function i(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}function l(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}function o(t,n){if(null==t)return{};var a,e,r=function(t,n){if(null==t)return{};var a,e,r={},i=Object.keys(t);for(e=0;e<i.length;e++)a=i[e],n.indexOf(a)>=0||(r[a]=t[a]);return r}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(e=0;e<i.length;e++)a=i[e],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=e.createContext({}),c=function(t){var n=e.useContext(s),a=n;return t&&(a="function"==typeof t?t(n):l(l({},n),t)),a},d=function(t){var n=c(t.components);return e.createElement(s.Provider,{value:n},t.children)},k={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},p=e.forwardRef((function(t,n){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),p=c(a),u=r,m=p["".concat(s,".").concat(u)]||p[u]||k[u]||i;return a?e.createElement(m,l(l({ref:n},d),{},{components:a})):e.createElement(m,l({ref:n},d))}));function u(t,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return e.createElement.apply(null,l)}return e.createElement.apply(null,a)}p.displayName="MDXCreateElement"},43861:function(t,n,a){var e=a(67294);class r extends e.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return e.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}n.Z=r},95881:function(t,n,a){a.r(n),a.d(n,{assets:function(){return N},contentTitle:function(){return h},default:function(){return b},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return f}});var e=a(3905),r=a(39130),i=a(43861),l=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,p=(t,n,a)=>n in t?l(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,u=(t,n)=>{for(var a in n||(n={}))d.call(n,a)&&p(t,a,n[a]);if(c)for(var a of c(n))k.call(n,a)&&p(t,a,n[a]);return t};const m={title:"Transition"},h=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_transition",id:"api/classes/classtouchgfx_1_1_transition",title:"Transition",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_transition.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_transition",permalink:"/4.21/ja/docs/api/classes/classtouchgfx_1_1_transition",draft:!1,tags:[],version:"current",frontMatter:{title:"Transition"},sidebar:"docs",previous:{title:"TouchController",permalink:"/4.21/ja/docs/api/classes/classtouchgfx_1_1_touch_controller"},next:{title:"TwoWildcardTextButtonStyle",permalink:"/4.21/ja/docs/api/classes/classtouchgfx_1_1_two_wildcard_text_button_style"}},N={},f=[{value:"Protected Classes",id:"protected-classes",level:2},{value:"Public Functions",id:"public-functions",level:2},{value:"Protected Attributes",id:"protected-attributes",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"handleTickEvent",id:"handletickevent",level:3},{value:"init",id:"init",level:3},{value:"invalidate",id:"invalidate",level:3},{value:"isDone",id:"isdone",level:3},{value:"setScreenContainer",id:"setscreencontainer",level:3},{value:"tearDown",id:"teardown",level:3},{value:"Transition",id:"transition",level:3},{value:"~Transition",id:"transition-1",level:3},{value:"Protected Attributes Documentation",id:"protected-attributes-documentation",level:2},{value:"done",id:"done",level:3},{value:"screenContainer",id:"screencontainer",level:3}],_={toc:f};function b(t){var n,a=t,{components:l}=a,p=((t,n)=>{var a={};for(var e in t)d.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(null!=t&&c)for(var e of c(t))n.indexOf(e)<0&&k.call(t,e)&&(a[e]=t[e]);return a})(a,["components"]);return(0,e.kt)("wrapper",(n=u(u({},_),p),o(n,s({components:l,mdxType:"MDXLayout"}))),(0,e.kt)("p",null," The Transition class is the base class for Transitions.\nImplementations of ",(0,e.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_transition"}),"Transition")," defines what happens when transitioning between Screens, which typically involves visual effects. An example of a transition implementation can be seen in example custom_transition_example. The most basic transition is the ",(0,e.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_no_transition"}),"NoTransition")," class that does a transition without any visual effects."),(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"See"),": ",(0,e.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_no_transition"}),"NoTransition"),", ",(0,e.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_slide_transition"}),"SlideTransition")),(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"Inherited by"),":  ",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_block_transition",mdxType:"Link"},"BlockTransition"),",  ",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_cover_transition",mdxType:"Link"},"CoverTransition","<"," templateDirection ",">"),",  ",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_no_transition",mdxType:"Link"},"NoTransition"),",  ",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_slide_transition",mdxType:"Link"},"SlideTransition","<"," templateDirection ",">"),",  ",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_wipe_transition",mdxType:"Link"},"WipeTransition","<"," templateDirection ",">")),(0,e.kt)("h2",u({},{id:"protected-classes"}),"Protected Classes"),(0,e.kt)("div",{class:"function-table",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:null}),"class"),(0,e.kt)("td",u({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_transition_1_1_full_solid_rect",mdxType:"Link"},"FullSolidRect")))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:null})),(0,e.kt)("td",u({parentName:"tr"},{align:null}),"A Widget that reports solid and but does not draw anything.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:null})),(0,e.kt)("td",u({parentName:"tr"},{align:null})))))),(0,e.kt)("h2",u({},{id:"public-functions"}),"Public Functions"),(0,e.kt)("div",{class:"function-table",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",u({parentName:"tr"},{align:"right"})),(0,e.kt)("th",u({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,e.kt)("td",u({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-handletickevent",mdxType:"Link"},"handleTickEvent")),"()")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"})),(0,e.kt)("td",u({parentName:"tr"},{align:null}),"Called for every tick when transitioning.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"})),(0,e.kt)("td",u({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,e.kt)("td",u({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-init",mdxType:"Link"},"init")),"()")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"})),(0,e.kt)("td",u({parentName:"tr"},{align:null}),"Initializes the transition.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"})),(0,e.kt)("td",u({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,e.kt)("td",u({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-invalidate",mdxType:"Link"},"invalidate")),"()")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"})),(0,e.kt)("td",u({parentName:"tr"},{align:null}),"Invalidates the screen when starting the ",(0,e.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_transition"}),"Transition"),".")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"})),(0,e.kt)("td",u({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"}),"bool"),(0,e.kt)("td",u({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-isdone",mdxType:"Link"},"isDone")),"() const")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"})),(0,e.kt)("td",u({parentName:"tr"},{align:null}),"Query if the transition is done transitioning.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"})),(0,e.kt)("td",u({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,e.kt)("td",u({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-setscreencontainer",mdxType:"Link"},"setScreenContainer")),"(",(0,e.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container")," & cont)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"})),(0,e.kt)("td",u({parentName:"tr"},{align:null}),"Sets the ",(0,e.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_screen"}),"Screen"),(0,e.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container"),".")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"})),(0,e.kt)("td",u({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,e.kt)("td",u({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-teardown",mdxType:"Link"},"tearDown")),"()")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"})),(0,e.kt)("td",u({parentName:"tr"},{align:null}),"Tears down the Animation.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"})),(0,e.kt)("td",u({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"})),(0,e.kt)("td",u({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-transition",mdxType:"Link"},"Transition")),"()")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"})),(0,e.kt)("td",u({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,e.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_transition"}),"Transition")," class.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"})),(0,e.kt)("td",u({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,e.kt)("td",u({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-~transition",mdxType:"Link"},"~Transition")),"()")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"})),(0,e.kt)("td",u({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,e.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_transition"}),"Transition")," class.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"})),(0,e.kt)("td",u({parentName:"tr"},{align:null})))))),(0,e.kt)("h2",u({},{id:"protected-attributes"}),"Protected Attributes"),(0,e.kt)("div",{class:"function-table",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",u({parentName:"tr"},{align:"right"})),(0,e.kt)("th",u({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"}),"bool"),(0,e.kt)("td",u({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_transition#variable-done",mdxType:"Link"},"done")))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"})),(0,e.kt)("td",u({parentName:"tr"},{align:null}),"Flag that indicates when the transition is done. This should be set by implementing classes.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"})),(0,e.kt)("td",u({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"}),(0,e.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container")," *"),(0,e.kt)("td",u({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_transition#variable-screencontainer",mdxType:"Link"},"screenContainer")))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"})),(0,e.kt)("td",u({parentName:"tr"},{align:null}),"The screen ",(0,e.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container")," of the ",(0,e.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_screen"}),"Screen")," transitioning to.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:"right"})),(0,e.kt)("td",u({parentName:"tr"},{align:null})))))),(0,e.kt)("h2",u({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,e.kt)(i.Z,{url:"classtouchgfx_1_1_transition#function-handletickevent",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",u({},{id:"handletickevent"}),"handleTickEvent"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-handletickevent",mdxType:"Link"},"handleTickEvent")),(0,e.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",u({parentName:"tr"},{align:null})),(0,e.kt)("td",u({parentName:"tr"},{align:null})),(0,e.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",u({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,"Called for every tick when transitioning. "),(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_block_transition#function-handletickevent",mdxType:"Link"},"touchgfx::BlockTransition::handleTickEvent"),", ",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_cover_transition#function-handletickevent",mdxType:"Link"},"touchgfx::CoverTransition::handleTickEvent"),", ",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_no_transition#function-handletickevent",mdxType:"Link"},"touchgfx::NoTransition::handleTickEvent"),", ",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_slide_transition#function-handletickevent",mdxType:"Link"},"touchgfx::SlideTransition::handleTickEvent"),", ",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_wipe_transition#function-handletickevent",mdxType:"Link"},"touchgfx::WipeTransition::handleTickEvent")))),(0,e.kt)(i.Z,{url:"classtouchgfx_1_1_transition#function-init",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",u({},{id:"init"}),"init"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-init",mdxType:"Link"},"init")),(0,e.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",u({parentName:"tr"},{align:null})),(0,e.kt)("td",u({parentName:"tr"},{align:null})),(0,e.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",u({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,"Initializes the transition. "),(0,e.kt)("p",null,"Called after the constructor is called, when the application changes the transition. "),(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_block_transition#function-init",mdxType:"Link"},"touchgfx::BlockTransition::init"),", ",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_cover_transition#function-init",mdxType:"Link"},"touchgfx::CoverTransition::init"),", ",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_slide_transition#function-init",mdxType:"Link"},"touchgfx::SlideTransition::init"),", ",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_wipe_transition#function-init",mdxType:"Link"},"touchgfx::WipeTransition::init")))),(0,e.kt)(i.Z,{url:"classtouchgfx_1_1_transition#function-invalidate",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",u({},{id:"invalidate"}),"invalidate"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-invalidate",mdxType:"Link"},"invalidate")),(0,e.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",u({parentName:"tr"},{align:null})),(0,e.kt)("td",u({parentName:"tr"},{align:null})),(0,e.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",u({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,"Invalidates the screen when starting the ",(0,e.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_transition"}),"Transition"),". "),(0,e.kt)("p",null,"Default is to invalidate the whole screen. Subclasses can do partial invalidation. "),(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_block_transition#function-invalidate",mdxType:"Link"},"touchgfx::BlockTransition::invalidate"),", ",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_wipe_transition#function-invalidate",mdxType:"Link"},"touchgfx::WipeTransition::invalidate")))),(0,e.kt)(i.Z,{url:"classtouchgfx_1_1_transition#function-isdone",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",u({},{id:"isdone"}),"isDone"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:null}),"bool","\xa0",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-isdone",mdxType:"Link"},"isDone")),(0,e.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",u({parentName:"tr"},{align:null})),(0,e.kt)("td",u({parentName:"tr"},{align:null})),(0,e.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",u({parentName:"tr"},{align:null}),"const"))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,"Query if the transition is done transitioning. "),(0,e.kt)("p",null,"It is the responsibility of the inheriting class to set the underlying done flag once the transition has been completed."),(0,e.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,e.kt)("div",{class:"api-content-indented",markdown:"1"},(0,e.kt)("p",null,"True if the transition is done, false otherwise. ")))),(0,e.kt)(i.Z,{url:"classtouchgfx_1_1_transition#function-setscreencontainer",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",u({},{id:"setscreencontainer"}),"setScreenContainer"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-setscreencontainer",mdxType:"Link"},"setScreenContainer")),(0,e.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",u({parentName:"tr"},{align:null}),(0,e.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container")," &"),(0,e.kt)("td",u({parentName:"tr"},{align:null}),"cont"),(0,e.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",u({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:null})),(0,e.kt)("td",u({parentName:"tr"},{align:null})),(0,e.kt)("td",u({parentName:"tr"},{align:null})),(0,e.kt)("td",u({parentName:"tr"},{align:null})),(0,e.kt)("td",u({parentName:"tr"},{align:null})),(0,e.kt)("td",u({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,"Sets the ",(0,e.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_screen"}),"Screen"),(0,e.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_container"}),"Container"),". "),(0,e.kt)("p",null,"Is used by ",(0,e.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_screen"}),"Screen")," to enable the transition to access the ",(0,e.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_container"}),"Container"),"."),(0,e.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,e.kt)("div",{class:"api-content-indented",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:null}),"cont"),(0,e.kt)("td",u({parentName:"tr"},{align:null}),"The ",(0,e.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container")," the transition should have access to."))))))),(0,e.kt)(i.Z,{url:"classtouchgfx_1_1_transition#function-teardown",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",u({},{id:"teardown"}),"tearDown"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-teardown",mdxType:"Link"},"tearDown")),(0,e.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",u({parentName:"tr"},{align:null})),(0,e.kt)("td",u({parentName:"tr"},{align:null})),(0,e.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",u({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,"Tears down the Animation. "),(0,e.kt)("p",null,"Called before the destructor is called, when the application changes the transition. "),(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_block_transition#function-teardown",mdxType:"Link"},"touchgfx::BlockTransition::tearDown"),", ",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_cover_transition#function-teardown",mdxType:"Link"},"touchgfx::CoverTransition::tearDown"),", ",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_slide_transition#function-teardown",mdxType:"Link"},"touchgfx::SlideTransition::tearDown"),", ",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_wipe_transition#function-teardown",mdxType:"Link"},"touchgfx::WipeTransition::tearDown")))),(0,e.kt)(i.Z,{url:"classtouchgfx_1_1_transition#function-transition",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",u({},{id:"transition"}),"Transition"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:null}),(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-transition",mdxType:"Link"},"Transition")),(0,e.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",u({parentName:"tr"},{align:null})),(0,e.kt)("td",u({parentName:"tr"},{align:null})),(0,e.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",u({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,"Initializes a new instance of the ",(0,e.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_transition"}),"Transition")," class. "))),(0,e.kt)(i.Z,{url:"classtouchgfx_1_1_transition#function-~transition",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",u({},{id:"transition-1"}),"~Transition"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})),(0,e.kt)("th",u({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",u({parentName:"tr"},{align:null}),"virtual","\xa0",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-~transition",mdxType:"Link"},"~Transition")),(0,e.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",u({parentName:"tr"},{align:null})),(0,e.kt)("td",u({parentName:"tr"},{align:null})),(0,e.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",u({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,"Finalizes an instance of the ",(0,e.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_transition"}),"Transition")," class. "))),(0,e.kt)("h2",u({},{id:"protected-attributes-documentation"}),"Protected Attributes Documentation"),(0,e.kt)(i.Z,{url:"classtouchgfx_1_1_transition#variable-done",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",u({},{id:"done"}),"done"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,e.kt)("p",null,"bool done ")),(0,e.kt)("div",{class:"api-container-content",markdown:"1"},(0,e.kt)("p",null,"Flag that indicates when the transition is done. This should be set by implementing classes. "))),(0,e.kt)(i.Z,{url:"classtouchgfx_1_1_transition#variable-screencontainer",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",u({},{id:"screencontainer"}),"screenContainer"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,e.kt)("p",null,(0,e.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_container"}),"Container")," * screenContainer ")),(0,e.kt)("div",{class:"api-container-content",markdown:"1"},(0,e.kt)("p",null,"The screen ",(0,e.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_container"}),"Container")," of the ",(0,e.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_screen"}),"Screen")," transitioning to. "))))}b.isMDXComponent=!0}}]);