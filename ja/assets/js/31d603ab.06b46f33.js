"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3847],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),_=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=_(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=_(a),k=r,m=d["".concat(p,".").concat(k)]||d[k]||u[k]||l;return a?n.createElement(m,i(i({ref:e},c),{},{components:a})):n.createElement(m,i({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var _=2;_<l;_++)i[_]=a[_];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},43861:function(t,e,a){var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},43395:function(t,e,a){a.r(e),a.d(e,{assets:function(){return N},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return h}});var n=a(3905),r=a(39130),l=a(43861),i=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,k=(t,e)=>{for(var a in e||(e={}))c.call(e,a)&&d(t,a,e[a]);if(_)for(var a of _(e))u.call(e,a)&&d(t,a,e[a]);return t};const m={title:"Q15"},s=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q15",id:"api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q15",title:"Q15",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q15.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q15",permalink:"/4.21/ja/docs/api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q15",draft:!1,tags:[],version:"current",frontMatter:{title:"Q15"},sidebar:"docs",previous:{title:"Q10",permalink:"/4.21/ja/docs/api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q10"},next:{title:"Q5",permalink:"/4.21/ja/docs/api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q5"}},N={},h=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"operator int",id:"operator-int",level:3},{value:"operator+",id:"operator",level:3},{value:"operator-",id:"operator-",level:3},{value:"operator/",id:"operator-1",level:3},{value:"Q15",id:"q15",level:3}],f={toc:h};function b(t){var e,a=t,{components:i}=a,d=((t,e)=>{var a={};for(var n in t)c.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&_)for(var n of _(t))e.indexOf(n)<0&&u.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=k(k({},f),d),o(e,p({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,' Defines a "floating point number" with 15 bits reserved for the fractional part of the decimal number.\n',(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")," is only used for sine/cosine and for intermediate calculations when multiplying."),(0,n.kt)("p",null,"Q5*Q5=",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10"),", Q10/Q5=",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5"),", ..."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See"),": ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5"),", ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")),(0,n.kt)("h2",k({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:"right"})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-operator int",mdxType:"Link"},"operator int")),"() const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Gets the ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")," as an integer without conversion.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-operator+",mdxType:"Link"},"operator+")),"(const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")," & q15) const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Addition operator.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-operator-",mdxType:"Link"},"operator-")),"() const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Negation operator.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-operator/",mdxType:"Link"},"operator/")),"(const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5")," & q5) const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Calculate ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")," / Q5 as a ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-q15",mdxType:"Link"},"Q15")),"(int i)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Constructor from integer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",k({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-operator int",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"operator-int"}),"operator int"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-operator int",mdxType:"Link"},"operator int")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"const"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Gets the ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")," as an integer without conversion. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The unconverted ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")," value. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-operator+",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"operator"}),"operator+"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Q15","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-operator+",mdxType:"Link"},"operator+")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")," &"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"q15"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Addition operator. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"q15"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")," to add to this."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The result of the operation. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-operator-",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"operator-"}),"operator-"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Q15","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-operator-",mdxType:"Link"},"operator-")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"const"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Negation operator. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The negative value of this. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-operator/",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"operator-1"}),"operator/"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Q10","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-operator/",mdxType:"Link"},"operator/")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5")," &"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"q5"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Calculate ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")," / Q5 as a ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10"),". "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"q5"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5")," to divide this by."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The result of the operation. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-q15",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"q15"}),"Q15"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"explicit","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-q15",mdxType:"Link"},"Q15")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"int"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"i"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Constructor from integer. "),(0,n.kt)("p",null,"No conversion is done - the integer is assumed to already be in ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")," format."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"i"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"int pre-formattet in ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")," format."))))))))}b.isMDXComponent=!0}}]);