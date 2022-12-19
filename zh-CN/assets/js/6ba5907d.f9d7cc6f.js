"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9989],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,h=m["".concat(d,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:i,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:i,src:o})),a.createElement("p",null,e.children))}},29415:function(e,t,n){var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=o},88678:function(e,t,n){var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},31217:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}t.Z=r},37793:function(e,t,n){var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=o},85201:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return v},default:function(){return T},frontMatter:function(){return k},metadata:function(){return b},toc:function(){return N}});var a=n(3905),r=n(44035),i=n(29415),o=n(37793),l=n(31217),d=n(39130),s=n(22425),p=Object.defineProperty,c=Object.defineProperties,m=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&f(e,n,t[n]);if(u)for(var n of u(t))g.call(t,n)&&f(e,n,t[n]);return e};const k={id:"modal-window",title:"Modal Window"},v=void 0,b={unversionedId:"development/ui-development/ui-components/containers/modal-window",id:"development/ui-development/ui-components/containers/modal-window",title:"Modal Window",description:"",source:"@site/docs/development/ui-development/ui-components/containers/modal-window.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/modal-window",permalink:"/4.21/zh-CN/docs/development/ui-development/ui-components/containers/modal-window",draft:!1,tags:[],version:"current",frontMatter:{id:"modal-window",title:"Modal Window"},sidebar:"docs",previous:{title:"List Layout",permalink:"/4.21/zh-CN/docs/development/ui-development/ui-components/containers/list-layout"},next:{title:"Scroll List",permalink:"/4.21/zh-CN/docs/development/ui-development/ui-components/containers/scroll-list"}},y={},N=[{value:"Widget Group",id:"widget-group",level:2},{value:"Properties",id:"properties",level:2},{value:"Interactions",id:"interactions",level:2},{value:"Actions",id:"actions",level:3},{value:"Triggers",id:"triggers",level:3},{value:"Performance",id:"performance",level:2},{value:"Examples",id:"examples",level:2},{value:"Generated Code",id:"generated-code",level:3},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",level:3},{value:"API Reference",id:"api-reference",level:2}],x={toc:N};function T(e){var t,n=e,{components:p}=n,f=((e,t)=>{var n={};for(var a in e)h.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&g.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=w(w({},x),f),c(t,m({components:p,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"The Modal Window is a ",(0,a.kt)("a",w({parentName:"p"},{href:"container"}),"Container")," type widget that displays a window and blocks touch events to the underlying view and widgets. The Modal Window consists of a background ",(0,a.kt)("a",w({parentName:"p"},{href:"../images/image"}),"Image")," and a ",(0,a.kt)("a",w({parentName:"p"},{href:"../shapes/box"}),"Box")," that acts as a shade over the underlying view and widgets with adjustable alpha. The Modal Window will fill up the entire screen and should always be added as the last element such that it is always on top of all other elements."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/modal-window/widget-appearance.gif",mdxType:"Figure"},"Modal Window running in the simulator"),(0,a.kt)("h2",w({},{id:"widget-group"}),"Widget Group"),(0,a.kt)("p",null,"The Modal Window can be found in the Containers widget group in TouchGFX Designer."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/modal-window/widget-group-v4.17.png",mdxType:"Figure"},"Modal Window in TouchGFX Designer"),(0,a.kt)("h2",w({},{id:"properties"}),"Properties"),(0,a.kt)("p",null,"The properties for a Modal Window in TouchGFX Designer."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",w({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Property Group")),(0,a.kt)("th",w({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",w({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",w({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,a.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",w({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Modal Image Location")),(0,a.kt)("td",w({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," and ",(0,a.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the image within the Modal Window.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"W")," and ",(0,a.kt)("em",{parentName:"td"},"H")," specify the width and height of the container within the Modal Window.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"The size of the container within the Modal Window is taken from the size of the associated image and cannot be altered except by changing the image."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",w({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Appearance")),(0,a.kt)("td",w({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Window Image")," specifies which image the Modal Window should use.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Shade Color")," specifies the color of the overlay shade.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Shade Alpha")," specifies the transparency of the overlay shade.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."))))),(0,a.kt)("h2",w({},{id:"interactions"}),"Interactions"),(0,a.kt)("p",null,"The actions and triggers supported by the Modal Window are described in the following sections."),(0,a.kt)("h3",w({},{id:"actions"}),"Actions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",w({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Standard widget action")),(0,a.kt)("th",w({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",w({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Hide widget")),(0,a.kt)("td",w({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",w({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Show widget")),(0,a.kt)("td",w({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,a.kt)("h3",w({},{id:"triggers"}),"Triggers"),(0,a.kt)("p",null,"The Modal Window does not emit any triggers."),(0,a.kt)("h2",w({},{id:"performance"}),"Performance"),(0,a.kt)("p",null,"A Modal Window is a ",(0,a.kt)("a",w({parentName:"p"},{href:"container"}),"Container")," type that consists of a ",(0,a.kt)("a",w({parentName:"p"},{href:"../shapes/box"}),"Box"),", a ",(0,a.kt)("a",w({parentName:"p"},{href:"container"}),"Container")," and an ",(0,a.kt)("a",w({parentName:"p"},{href:"../images/image"}),"Image"),". The Modal Window does not per default appear in the draw chain. Therefore, the performance is mostly dependent on the childrens drawing performance."),(0,a.kt)("p",null,"For more general details on drawing performance, read the ",(0,a.kt)("a",w({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,a.kt)("h2",w({},{id:"examples"}),"Examples"),(0,a.kt)("h3",w({},{id:"generated-code"}),"Generated Code"),(0,a.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a Modal Window."),(0,a.kt)(s.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",w({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <texts/TextKeysAndLanguages.hpp>\n#include <touchgfx/Color.hpp>\n\nmainViewBase::mainViewBase() :\n    buttonCallback(this, &mainViewBase::buttonCallbackHandler)\n{\n    modalWindow.setBackground(touchgfx::BitmapId(BITMAP_BLUE_BACKGROUNDS_MAIN_BG_320X240PX_ID), 80, 16);\n    modalWindow.setShadeColor(touchgfx::Color::getColorFromRGB(0, 0, 0));\n    modalWindow.setShadeAlpha(150);\n    modalWindow.hide();\n\n    add(modalWindow);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,a.kt)(o.Z,{mdxType:"Tip"},"You can use these functions and the others available in the ModalWindow class in user code. Remember to force a redraw by calling ",(0,a.kt)(l.Z,{mdxType:"InlineCode"},"modalWindow.invalidate()")," if you change the appearance of the widget."),(0,a.kt)("h3",w({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,a.kt)("p",null,"To further explore the Modal Window, try creating a new application within TouchGFX Designer with one of the following UI templates:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/modal-window-example-v4.17.png",mdxType:"Figure"},"Modal Window Example UI template in TouchGFX Designer"),(0,a.kt)("h2",w({},{id:"api-reference"}),"API Reference"),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(d.Z,{to:"../../../../api/classes/classtouchgfx_1_1_modal_window",mdxType:"Link"},"API reference for the ModalWindow class"))))}T.isMDXComponent=!0}}]);