"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3344],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,l=(0,i.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=l},88678:function(e,t,n){var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=i},31217:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=i},37793:function(e,t,n){var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}t.Z=l},10111:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return v},default:function(){return x},frontMatter:function(){return w},metadata:function(){return b},toc:function(){return y}});var r=n(3905),i=n(44035),a=n(29415),l=n(37793),o=n(31217),s=n(39130),c=n(22425),p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&f(e,n,t[n]);if(u)for(var n of u(t))g.call(t,n)&&f(e,n,t[n]);return e};const w={id:"scroll-list",title:"Scroll List"},v=void 0,b={unversionedId:"development/ui-development/ui-components/containers/scroll-list",id:"development/ui-development/ui-components/containers/scroll-list",title:"Scroll List",description:"",source:"@site/docs/development/ui-development/ui-components/containers/scroll-list.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/scroll-list",permalink:"/4.21/ko/docs/development/ui-development/ui-components/containers/scroll-list",draft:!1,tags:[],version:"current",frontMatter:{id:"scroll-list",title:"Scroll List"},sidebar:"docs",previous:{title:"Modal Window",permalink:"/4.21/ko/docs/development/ui-development/ui-components/containers/modal-window"},next:{title:"Scroll Wheel",permalink:"/4.21/ko/docs/development/ui-development/ui-components/containers/scroll-wheel"}},N={},y=[{value:"Widget Group",id:"widget-group",level:2},{value:"Properties",id:"properties",level:2},{value:"Item Templates",id:"item-templates",level:3},{value:"Interactions",id:"interactions",level:2},{value:"Actions",id:"actions",level:3},{value:"Triggers",id:"triggers",level:3},{value:"Performance",id:"performance",level:2},{value:"Examples",id:"examples",level:2},{value:"Generated Code",id:"generated-code",level:3},{value:"User Code",id:"user-code",level:3},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",level:3},{value:"API Reference",id:"api-reference",level:2}],S={toc:y};function x(e){var t,n=e,{components:p}=n,f=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=k(k({},S),f),d(t,m({components:p,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"The Scroll List is a scrollable menu consisting of a number of items and a number of widgets, which are dynamically updated as they are scrolled into view. The Scroll List is also able to invoke callbacks when interacting with the items in the Scroll List."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/scroll-list/widget-appearance.gif",mdxType:"Figure"},"Scroll List running in the simulator"),(0,r.kt)("h2",k({},{id:"widget-group"}),"Widget Group"),(0,r.kt)("p",null,"The Scroll List can be found in the Containers widget group in TouchGFX Designer."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/scroll-list/widget-group-v4.17.png",mdxType:"Figure"},"Scroll List in TouchGFX Designer"),(0,r.kt)("h2",k({},{id:"properties"}),"Properties"),(0,r.kt)("p",null,"The properties for a Scroll List in TouchGFX Designer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Group")),(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,r.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Type")," specifies if Scroll List is oriented vertically or horizontally")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," and ",(0,r.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget. ",(0,r.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Item Template")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Item Template")," specifies which CustomContainer to use as template.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Number of Items")," specifies the number of items present in the Scroll List.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"List Appearance")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Circular")," specifies if the items in the Scroll List will loop when reaching the end.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Items Snap")," specifies if items should snap.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"If snapping is false, the items can flow freely. If snapping is true, the items will snap into place such that an item is always in the selected spot."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Item Margin")," specifies the spacing between items.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Padding Before")," and ",(0,r.kt)("em",{parentName:"td"},"Padding After")," specifies the distance offset before and after the visible drawables in the Scroll List.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Animation")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Easing")," and ",(0,r.kt)("em",{parentName:"td"},"Easing Option")," specify which easing equation to use for animations.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Swipe Acc.")," and ",(0,r.kt)("em",{parentName:"td"},"Drag Acc.")," specify the acceleration when scrolling.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," values.")))),(0,r.kt)("h3",k({},{id:"item-templates"}),"Item Templates"),(0,r.kt)("p",null,"The items in a Scroll List are based on a concept called ",(0,r.kt)("em",{parentName:"p"},"Item Template")," which is a ",(0,r.kt)("a",k({parentName:"p"},{href:"../../touchgfx-engine-features/custom-containers"}),"CustomContainer")," that serves as a base for the graphical elements for the items in the Scroll List.\nBefore creating a Scroll List, a Custom Container should be created to have an Item Template for the Scroll List."),(0,r.kt)("p",null,"After having created the Scroll List the CustomContainer can be selected under the property ",(0,r.kt)("em",{parentName:"p"},"Item Template"),". Specifying the ",(0,r.kt)("em",{parentName:"p"},"Item Template")," results in the Scroll List resizing to fit with the size property that is not in the scrollable direction (width for vertical Scroll Lists and height for horizontal Scroll Lists) of the selected Custom Container.\nChanging the other size property (height for vertical and width for horizontal) determines the number of items visible."),(0,r.kt)("h2",k({},{id:"interactions"}),"Interactions"),(0,r.kt)("p",null,"The actions and triggers supported by the Scroll List are described in the following sections."),(0,r.kt)("h3",k({},{id:"actions"}),"Actions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Standard widget action")),(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,r.kt)("h3",k({},{id:"triggers"}),"Triggers"),(0,r.kt)("p",null,"A Scroll List does not emit any triggers."),(0,r.kt)("h2",k({},{id:"performance"}),"Performance"),(0,r.kt)("p",null,"A Scroll List is a ",(0,r.kt)("a",k({parentName:"p"},{href:"container"}),"Container")," type, and does not per default appear in the draw chain. Therefore, the performance is wholly dependent on the childrens drawing performance."),(0,r.kt)("p",null,"For more details on drawing performance, read the ",(0,r.kt)("a",k({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,r.kt)("h2",k({},{id:"examples"}),"Examples"),(0,r.kt)("h3",k({},{id:"generated-code"}),"Generated Code"),(0,r.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a Scroll List."),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase() :\n    updateItemCallback(this, &Screen1ViewBase::updateItemCallbackHandler)\n{\n    scrollList.setPosition(140, 10, 200, 252);\n    scrollList.setHorizontal(false);\n    scrollList.setCircular(false);\n    scrollList.setEasingEquation(touchgfx::EasingEquations::backEaseOut);\n    scrollList.setSwipeAcceleration(10);\n    scrollList.setDragAcceleration(10);\n    scrollList.setNumberOfItems(20);\n    scrollList.setPadding(0, 0);\n    scrollList.setSnapping(false);\n    scrollList.setDrawableSize(50, 2);\n    scrollList.setDrawables(scrollListListItems, updateItemCallback);\n\n    add(scrollList);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n    scrollList.initialize();\n    for (int i = 0; i < scrollListListItems.getNumberOfDrawables(); i++)\n    {\n        scrollListListItems[i].initialize();\n    }\n}\n\nvoid Screen1ViewBase::updateItemCallbackHandler(touchgfx::DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex)\n{\n    if (items == &scrollListListItems)\n    {\n        touchgfx::Drawable* d = items->getDrawable(containerIndex);\n        TextContainer* cc = (TextContainer*)d;\n        scrollListUpdateItem(*cc, itemIndex);\n    }\n}\n')),(0,r.kt)(l.Z,{mdxType:"Tip"},"You can use these functions and the others available in the ScrollList class in user code. Remember to force a redraw by calling ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"scrollList.invalidate()")," if you change the appearance of the widget."),(0,r.kt)("h3",k({},{id:"user-code"}),"User Code"),(0,r.kt)("p",null,"After the graphical elements for the Scroll List and its properties are set, user code can be written to update the items in the Scroll List. The header file for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1ViewBase")," class which is generated by TouchGFX Designer is shown below:"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"ScreenViewBase.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp",metastring:"{8-11}","{8-11}":!0}),"class ScreenViewBase : public touchgfx::View\n{\npublic:\n    ScreenViewBase();\n    virtual ~ScreenViewBase() {}\n    virtual void setupScreen();\n\n    virtual void scrollListUpdateItem(CustomContainer& item, int16_t itemIndex)\n    {\n        // Override and implement this function in Screen\n    }\n\nprotected:\n    FrontendApplication& application() {\n         return *static_cast<FrontendApplication*>(Application::getInstance());\n    }\n    touchgfx::BoxWithBorder boxWithBorder;\n    touchgfx::ScrollList scrollList;\n    touchgfx::DrawableListItems<CustomContainer, 6> scrollListListItems;\nprivate:\n    void updateItemCallbackHandler(DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex);\n    touchgfx::Callback<ScreenViewBase, DrawableListItemsInterface*, int16_t, int16_t> updateItemCallback;\n};\n")),(0,r.kt)("p",null,"When TouchGFX Designer generates the code for Scroll List, the function ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollListUpdateItem"),", highlighted above, is created for the user to override and update the items in the Scroll List. The function is called each time an item in the Scroll List needs updating, thereby ensuring that an item is updated before it becomes visible. The ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollListUpdateItem")," has two parameters, which are used to identify the item being updated and to update it. The parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"itemIndex")," contains the index value of the item, which is used to identify which item is being updated. The parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," is a reference to a CustomContainer object which is a visible item in the Scroll List. Updating the graphics for the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," results in an update to the render for a visible item in the Scroll List."),(0,r.kt)("p",null,"An example integration of ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollListUpdateItem")," is shown below:"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"#ifndef SCREEN1_VIEW_HPP\n#define SCREEN1_VIEW_HPP\n\n#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/ScreenPresenter.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n\n    virtual void scrollListUpdateItem(CustomContainer& item, int16_t itemIndex);\nprotected:\n};\n\n#endif // SCREEN1_VIEW_HP\n")),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View()\n{\n\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n\nvoid Screen1View::scrollListUpdateItem(CustomContainer& item, int16_t itemIndex)\n{\n    item.setValue(itemIndex);\n}\n")),(0,r.kt)("p",null,"In the header file ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1View.hpp"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollListUpdateItem")," function is overidden and then implemented in ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1View.cpp"),"."),(0,r.kt)("p",null,"The goal of this example is to update the text in the Item Template with the index value of the items which are visible, like the example shown ",(0,r.kt)("a",k({parentName:"p"},{href:"scroll-list"}),"in the beginning of this section"),". Since the Item Template is based on the CustomContainer, a ",(0,r.kt)("inlineCode",{parentName:"p"},"setValue")," function is created for the CustomContainer. The setValue function is able to take the ",(0,r.kt)("inlineCode",{parentName:"p"},"itemIndex")," parameter and update the text in the item template. Calling setvalue for the parameter item will cause the items to update their appearance, thereby showing their index value."),(0,r.kt)("h3",k({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,r.kt)("p",null,"To further explore the Scroll List, try creating a new application within TouchGFX Designer with one of the following UI templates:"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-templates/scroll-wheel-and-list-example-v4.17.png",mdxType:"Figure"},"Scroll Wheel and List Example UI template in TouchGFX Designer"),(0,r.kt)("h2",k({},{id:"api-reference"}),"API Reference"),(0,r.kt)(a.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(s.Z,{to:"../../../../api/classes/classtouchgfx_1_1_scroll_list",mdxType:"Link"},"API reference for the ScrollList class"))))}x.isMDXComponent=!0}}]);