"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8239],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,g=m["".concat(d,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children))}},29415:function(e,t,n){var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},31217:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}t.Z=r},37793:function(e,t,n){var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=l},62609:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return v},default:function(){return C},frontMatter:function(){return b},metadata:function(){return N},toc:function(){return y}});var a=n(3905),r=n(44035),i=n(29415),l=n(37793),o=n(31217),d=n(39130),s=n(22425),c=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&k(e,n,t[n]);if(u)for(var n of u(t))h.call(t,n)&&k(e,n,t[n]);return e};const b={id:"slider",title:"Slider"},v=void 0,N={unversionedId:"development/ui-development/ui-components/miscellaneous/slider",id:"development/ui-development/ui-components/miscellaneous/slider",title:"Slider",description:"",source:"@site/docs/development/ui-development/ui-components/miscellaneous/slider.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/slider",permalink:"/4.21/zh-TW/docs/development/ui-development/ui-components/miscellaneous/slider",draft:!1,tags:[],version:"current",frontMatter:{id:"slider",title:"Slider"},sidebar:"docs",previous:{title:"Miscellaneous",permalink:"/4.21/zh-TW/docs/category/miscellaneous"},next:{title:"Text Area",permalink:"/4.21/zh-TW/docs/development/ui-development/ui-components/miscellaneous/text-area"}},w={},y=[{value:"Widget Group",id:"widget-group",level:2},{value:"Properties",id:"properties",level:2},{value:"Interactions",id:"interactions",level:2},{value:"Actions",id:"actions",level:3},{value:"Triggers",id:"triggers",level:3},{value:"Performance",id:"performance",level:2},{value:"Examples",id:"examples",level:2},{value:"Generated Code",id:"generated-code",level:3},{value:"User Code",id:"user-code",level:3},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",level:3},{value:"API Reference",id:"api-reference",level:2}],x={toc:y};function C(e){var t,n=e,{components:c}=n,k=((e,t)=>{var n={};for(var a in e)g.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&h.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=f(f({},x),k),p(t,m({components:c,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"A Slider uses three images to display a slider either in a vertical or horizontal orientation. The indicator image of a Slider can be dragged to modify an internal integer value that is broadcasted through callbacks. The value broadcasted operates on an integer value range ",(0,a.kt)("em",{parentName:"p"},"e.g. 0 to 100"),"."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/slider/widget-appearance.gif",mdxType:"Figure"},"Slider running in the simulator"),(0,a.kt)("h2",f({},{id:"widget-group"}),"Widget Group"),(0,a.kt)("p",null,"The Slider can be found in the Miscellaneous widget group in TouchGFX Designer."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/slider/widget-group-v4.17.png",mdxType:"Figure"},"Slider in TouchGFX Designer"),(0,a.kt)("h2",f({},{id:"properties"}),"Properties"),(0,a.kt)("p",null,"The properties for a Slider in TouchGFX Designer."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Property Group")),(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,a.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Type")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Type")," specifies whether the Slider should be vertically or horizontally oriented.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Location")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," and ",(0,a.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"W")," and ",(0,a.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"The size of a Slider is taken from the size of the associated images and cannot be altered except by changing the images."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Style")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Style")," specifies a predefined setup of the widget, that sets select properties to predefined values.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"These styles contain images that are free to use"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Image")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Background Image")," specifies the background image that the indicator slides across.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Background Filled Image")," specifies the image filling the area on top of the background image behind the indicator.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Indicator Image")," specifies the image that can be dragged to change the value of the slider.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"The background image and background filled image must both be the same size."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Positions")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Background Position X")," and ",(0,a.kt)("em",{parentName:"td"},"Background Position Y")," specify the top left corner position of the ",(0,a.kt)("em",{parentName:"td"},"Background Image")," and ",(0,a.kt)("em",{parentName:"td"},"Background Filled Image"),".",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Indicator Position Min")," and ",(0,a.kt)("em",{parentName:"td"},"Indicator Position Max")," specify the minimum and maximum positions of the ",(0,a.kt)("em",{parentName:"td"},"Indicator Image"),".",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"For a horizontal slider these two values are in the x-axis and for a vertical slider they are in the y-axis"),".",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Indicator Position Y")," specifies the indicator image's position in the y-axis.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"If the slider is vertically oriented this value instead adjusts in the x-axis."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Values")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Min")," and ",(0,a.kt)("em",{parentName:"td"},"Max")," specifies the internal integer range that is broadcast from the Slider using callbacks.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Start")," specifies the initial internal value in the Slider. ",(0,a.kt)("em",{parentName:"td"},"This also changes the initial position of the indicator."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixins")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,a.kt)("em",{parentName:"td"},"X")," and ",(0,a.kt)("em",{parentName:"td"},"Y")," values.")))),(0,a.kt)("h2",f({},{id:"interactions"}),"Interactions"),(0,a.kt)("p",null,"The actions and triggers supported by the Slider are described in the following sections."),(0,a.kt)("h3",f({},{id:"actions"}),"Actions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Standard widget action")),(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Move widget")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Hide widget")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Show widget")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,a.kt)("h3",f({},{id:"triggers"}),"Triggers"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Trigger")),(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Slider adjustment initiated")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"A Slider has been clicked or dragged.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Slider adjustment confirmed")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"A Slider indicator is no longer being dragged.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Slider value changed")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"A Sliders value has changed.")))),(0,a.kt)("h2",f({},{id:"performance"}),"Performance"),(0,a.kt)("p",null,"A Slider consists of three images. Therefore, a Slider is dependent on image drawing and is considered a fast performing widget on most platforms."),(0,a.kt)("p",null,"For more details on image drawing performance, read the ",(0,a.kt)("a",f({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,a.kt)("h2",f({},{id:"examples"}),"Examples"),(0,a.kt)("h3",f({},{id:"generated-code"}),"Generated Code"),(0,a.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a Slider."),(0,a.kt)(s.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <texts/TextKeysAndLanguages.hpp>\n#include <touchgfx/Color.hpp>\n\nmainViewBase::mainViewBase()\n{\n    slider.setXY(71, 173);\n    slider.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_SLIDER_HORIZONTAL_MEDIUM_SLIDER2_ROUND_BACK_ID), touchgfx::Bitmap(BITMAP_BLUE_SLIDER_HORIZONTAL_MEDIUM_SLIDER2_ROUND_FILL_ID), touchgfx::Bitmap(BITMAP_BLUE_SLIDER_HORIZONTAL_MEDIUM_INDICATORS_SLIDER2_ROUND_NOB_ID));\n    slider.setupHorizontalSlider(2, 6, 0, 0, 284);\n    slider.setValueRange(0, 100);\n    slider.setValue(0);\n\n    add(slider);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,a.kt)(l.Z,{mdxType:"Tip"},"You can use these functions and the others available in the Slider class in user code. Remember to force a redraw by calling ",(0,a.kt)(o.Z,{mdxType:"InlineCode"},"slider.invalidate()")," if you change the appearance of the widget."),(0,a.kt)("h3",f({},{id:"user-code"}),"User Code"),(0,a.kt)("p",null,"The following code example shows how to set up the three callbacks of a Slider:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Z,{mdxType:"InlineCode"},"setStartValueCallback")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Z,{mdxType:"InlineCode"},"setNewValueCallback")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Z,{mdxType:"InlineCode"},"setStopValueCallback"))),(0,a.kt)(s.Z,{mdxType:"CodeHeader"},"mainView.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"#ifndef MAINVIEW_HPP\n#define MAINVIEW_HPP\n\n#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <gui/main_screen/mainPresenter.hpp>\n\nclass mainView : public mainViewBase\n{\npublic:\n    mainView();\n    virtual ~mainView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\nprotected:\n\n    /*\n     * Callback Declarations\n     */\n    touchgfx::Callback<mainView, const touchgfx::Slider&, int> sliderValueStartedChangeCallback;\n    touchgfx::Callback<mainView, const touchgfx::Slider&, int> sliderValueChangedCallback;\n    touchgfx::Callback<mainView, const touchgfx::Slider&, int> sliderValueConfirmedCallback;\n\n    /*\n     * Callback Handler Declarations\n     */\n    void sliderValueStartedChangeCallbackHandler(const touchgfx::Slider& src, int value);\n    void sliderValueChangedCallbackHandler(const touchgfx::Slider& src, int value);\n    void sliderValueConfirmedCallbackHandler(const touchgfx::Slider& src, int value);\n};\n\n#endif // MAINVIEW_HPP\n")),(0,a.kt)(s.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView():\n    sliderValueStartedChangeCallback(this, &mainView::sliderValueStartedChangeCallbackHandler),\n    sliderValueChangedCallback(this, &mainView::sliderValueChangedCallbackHandler),\n    sliderValueConfirmedCallback(this, &mainView::sliderValueConfirmedCallbackHandler)\n{\n\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n    slider.setStartValueCallback(sliderValueStartedChangeCallback);\n    slider.setNewValueCallback(sliderValueChangedCallback);\n    slider.setStopValueCallback(sliderValueConfirmedCallback);\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::sliderValueStartedChangeCallbackHandler(const touchgfx::Slider& src, int value)\n{\n    if (&src == &slider)\n    {\n        //execute code whenever the slider starts changing value.\n    }\n}\n\nvoid mainView::sliderValueChangedCallbackHandler(const touchgfx::Slider& src, int value)\n{\n    if (&src == &slider)\n    {\n        //execute code whenever the value of the slider changes.\n    }\n}\n\nvoid mainView::sliderValueConfirmedCallbackHandler(const touchgfx::Slider& src, int value)\n{\n    if (&src == &slider)\n    {\n        //execute code whenever the slider stops the changing value.\n    }\n}\n")),(0,a.kt)("h3",f({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,a.kt)("p",null,"To further explore the Slider, try creating a new application within TouchGFX Designer with one of the following Examples:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/slider-example-v4.17.png",mdxType:"Figure"},"Slider Example in TouchGFX Designer"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/pool-demo-v4.17.png",mdxType:"Figure"},"Pool Demo in TouchGFX Designer"),(0,a.kt)("h2",f({},{id:"api-reference"}),"API Reference"),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(d.Z,{to:"../../../../api/classes/classtouchgfx_1_1_slider",mdxType:"Link"},"API reference for the Slider class"))))}C.isMDXComponent=!0}}]);