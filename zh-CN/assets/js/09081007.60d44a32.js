"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7602],{3905:function(t,n,e){e.d(n,{Zo:function(){return p},kt:function(){return m}});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function o(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=a.createContext({}),d=function(t){var n=a.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):l(l({},n),t)),e},p=function(t){var n=d(t.components);return a.createElement(s.Provider,{value:n},t.children)},c={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),k=d(e),m=r,u=k["".concat(s,".").concat(m)]||k[m]||c[m]||i;return e?a.createElement(u,l(l({ref:n},p),{},{components:e})):a.createElement(u,l({ref:n},p))}));function m(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var i=e.length,l=new Array(i);l[0]=k;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=e[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,e)}k.displayName="MDXCreateElement"},43861:function(t,n,e){var a=e(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}n.Z=r},43606:function(t,n,e){e.r(n),e.d(n,{assets:function(){return N},contentTitle:function(){return h},default:function(){return b},frontMatter:function(){return u},metadata:function(){return g},toc:function(){return f}});var a=e(3905),r=e(39130),i=e(43861),l=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,k=(t,n,e)=>n in t?l(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,m=(t,n)=>{for(var e in n||(n={}))p.call(n,e)&&k(t,e,n[e]);if(d)for(var e of d(n))c.call(n,e)&&k(t,e,n[e]);return t};const u={title:"SlideTransition"},h=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_slide_transition",id:"api/classes/classtouchgfx_1_1_slide_transition",title:"SlideTransition",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_slide_transition.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_slide_transition",permalink:"/4.21/zh-CN/docs/api/classes/classtouchgfx_1_1_slide_transition",draft:!1,tags:[],version:"current",frontMatter:{title:"SlideTransition"},sidebar:"docs",previous:{title:"Slider",permalink:"/4.21/zh-CN/docs/api/classes/classtouchgfx_1_1_slider"},next:{title:"Snapper",permalink:"/4.21/zh-CN/docs/api/classes/classtouchgfx_1_1_snapper"}},N={},f=[{value:"Public Functions",id:"public-functions",level:2},{value:"Protected Attributes",id:"protected-attributes",level:2},{value:"Additional inherited members",id:"additional-inherited-members",level:2},{value:'Protected Classes inherited from <Link to="classtouchgfx_1_1_transition">Transition</Link>',id:"protected-classes-inherited-from-transition",level:3},{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_transition">Transition</Link>',id:"public-functions-inherited-from-transition",level:3},{value:'Protected Attributes inherited from <Link to="classtouchgfx_1_1_transition">Transition</Link>',id:"protected-attributes-inherited-from-transition",level:3},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"handleTickEvent",id:"handletickevent",level:3},{value:"init",id:"init",level:3},{value:"SlideTransition",id:"slidetransition",level:3},{value:"tearDown",id:"teardown",level:3},{value:"Protected Attributes Documentation",id:"protected-attributes-documentation",level:2},{value:"snapshot",id:"snapshot",level:3}],_={toc:f};function b(t){var n,e=t,{components:l}=e,k=((t,n)=>{var e={};for(var a in t)p.call(t,a)&&n.indexOf(a)<0&&(e[a]=t[a]);if(null!=t&&d)for(var a of d(t))n.indexOf(a)<0&&c.call(t,a)&&(e[a]=t[a]);return e})(e,["components"]);return(0,a.kt)("wrapper",(n=m(m({},_),k),o(n,s({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," A Transition that slides from one screen to the next.\nIt does so by moving a SnapShotWidget with a snapshot of the ",(0,a.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_screen"}),"Screen")," transitioning away from, and by moving the contents of ",(0,a.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_screen"}),"Screen")," transitioning to."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See"),": ",(0,a.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_transition"}),"Transition")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition",mdxType:"Link"},"Transition")),(0,a.kt)("h2",m({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"right"})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_slide_transition#function-handletickevent",mdxType:"Link"},"handleTickEvent")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Handles the tick event when transitioning.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_slide_transition#function-init",mdxType:"Link"},"init")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Initializes the transition.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_slide_transition#function-slidetransition",mdxType:"Link"},"SlideTransition")),"(const uint8_t transitionSteps =20)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_slide_transition"}),"SlideTransition")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_slide_transition#function-teardown",mdxType:"Link"},"tearDown")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Tears down the Animation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",m({},{id:"protected-attributes"}),"Protected Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"right"})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_snapshot_widget"}),"SnapshotWidget")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_slide_transition#variable-snapshot",mdxType:"Link"},"snapshot")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The SnapshotWidget that is moved when transitioning.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",m({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,a.kt)("h3",m({},{id:"protected-classes-inherited-from-transition"}),"Protected Classes inherited from ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition",mdxType:"Link"},"Transition")),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"right"})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"class"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition_1_1_full_solid_rect",mdxType:"Link"},"FullSolidRect")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"A Widget that reports solid and but does not draw anything.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("h3",m({},{id:"public-functions-inherited-from-transition"}),"Public Functions inherited from ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition",mdxType:"Link"},"Transition")),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"right"})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-invalidate",mdxType:"Link"},"invalidate")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Invalidates the screen when starting the ",(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_transition"}),"Transition"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"bool"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-isdone",mdxType:"Link"},"isDone")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Query if the transition is done transitioning.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-setscreencontainer",mdxType:"Link"},"setScreenContainer")),"(",(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container")," & cont)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Sets the ",(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_screen"}),"Screen"),(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-transition",mdxType:"Link"},"Transition")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_transition"}),"Transition")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-~transition",mdxType:"Link"},"~Transition")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_transition"}),"Transition")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("h3",m({},{id:"protected-attributes-inherited-from-transition"}),"Protected Attributes inherited from ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition",mdxType:"Link"},"Transition")),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"right"})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"bool"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#variable-done",mdxType:"Link"},"done")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Flag that indicates when the transition is done. This should be set by implementing classes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container")," *"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#variable-screencontainer",mdxType:"Link"},"screenContainer")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The screen ",(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container")," of the ",(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_screen"}),"Screen")," transitioning to.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",m({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_slide_transition#function-handletickevent",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"handletickevent"}),"handleTickEvent"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_slide_transition#function-handletickevent",mdxType:"Link"},"handleTickEvent")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Handles the tick event when transitioning. "),(0,a.kt)("p",null,"It moves the contents of the ",(0,a.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_screen"}),"Screen"),"'s container and a ",(0,a.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_snapshot_widget"}),"SnapshotWidget")," with a snapshot of the previous ",(0,a.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_screen"}),"Screen"),". The direction of the transition determines the direction the contents of the container and the ",(0,a.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_snapshot_widget"}),"SnapshotWidget")," moves. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-handletickevent",mdxType:"Link"},"touchgfx::Transition::handleTickEvent")))),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_slide_transition#function-init",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"init"}),"init"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_slide_transition#function-init",mdxType:"Link"},"init")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes the transition. "),(0,a.kt)("p",null,"Called after the constructor is called, when the application changes the transition. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-init",mdxType:"Link"},"touchgfx::Transition::init")))),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_slide_transition#function-slidetransition",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"slidetransition"}),"SlideTransition"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_slide_transition#function-slidetransition",mdxType:"Link"},"SlideTransition")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"const uint8_t"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"transitionSteps  =20"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes a new instance of the ",(0,a.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_slide_transition"}),"SlideTransition")," class. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"transitionSteps"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"(Optional) Number of steps (ticks) in the transition animation, default is 20."))))))),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_slide_transition#function-teardown",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"teardown"}),"tearDown"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_slide_transition#function-teardown",mdxType:"Link"},"tearDown")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Tears down the Animation. "),(0,a.kt)("p",null,"Called before the destructor is called, when the application changes the transition. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_transition#function-teardown",mdxType:"Link"},"touchgfx::Transition::tearDown")))),(0,a.kt)("h2",m({},{id:"protected-attributes-documentation"}),"Protected Attributes Documentation"),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_slide_transition#variable-snapshot",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"snapshot"}),"snapshot"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_snapshot_widget"}),"SnapshotWidget")," snapshot ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The SnapshotWidget that is moved when transitioning. "))))}b.isMDXComponent=!0}}]);