"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8109],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(d,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=l},69371:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return v},default:function(){return T},frontMatter:function(){return x},metadata:function(){return b},toc:function(){return w}});var r=n(3905),a=n(44035),i=n(29415),l=n(37793),o=n(31217),d=n(39130),p=n(22425),c=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&f(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&f(e,n,t[n]);return e};const x={id:"text-area",title:"Text Area"},v=void 0,b={unversionedId:"development/ui-development/ui-components/miscellaneous/text-area",id:"development/ui-development/ui-components/miscellaneous/text-area",title:"Text Area",description:"",source:"@site/docs/development/ui-development/ui-components/miscellaneous/text-area.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/text-area",permalink:"/4.21/ko/docs/development/ui-development/ui-components/miscellaneous/text-area",draft:!1,tags:[],version:"current",frontMatter:{id:"text-area",title:"Text Area"},sidebar:"docs",previous:{title:"Slider",permalink:"/4.21/ko/docs/development/ui-development/ui-components/miscellaneous/slider"},next:{title:"Analog Clock",permalink:"/4.21/ko/docs/development/ui-development/ui-components/miscellaneous/analog-clock"}},N={},w=[{value:"Widget Group",id:"widget-group",level:2},{value:"Properties",id:"properties",level:2},{value:"Interactions",id:"interactions",level:2},{value:"Actions",id:"actions",level:3},{value:"Triggers",id:"triggers",level:3},{value:"Performance",id:"performance",level:2},{value:"Examples",id:"examples",level:2},{value:"Generated Code",id:"generated-code",level:3},{value:"User Code",id:"user-code",level:3},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",level:3},{value:"API Reference",id:"api-reference",level:2}],y={toc:w};function T(e){var t,n=e,{components:c}=n,f=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=k(k({},y),f),s(t,u({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"A Text Area displays text on the screen. The text of a Text Area can be entirely configured in size, color, custom fonts, dynamic texts etc. For more information on how to handle texts in TouchGFX Designer, read the ",(0,r.kt)("a",k({parentName:"p"},{href:"../../touchgfx-engine-features/texts-and-fonts"}),"Texts and Fonts")," article."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/text-area/widget-appearance.gif",mdxType:"Figure"},"Text Area running in the simulator"),(0,r.kt)("h2",k({},{id:"widget-group"}),"Widget Group"),(0,r.kt)("p",null,"The Text Area can be found in the Miscellaneous widget group in TouchGFX Designer."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/text-area/widget-group-v4.17.png",mdxType:"Figure"},"Text Area in TouchGFX Designer"),(0,r.kt)("h2",k({},{id:"properties"}),"Properties"),(0,r.kt)("p",null,"The properties for a Text Area in TouchGFX Designer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Group")),(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,r.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," and ",(0,r.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Auto-size")," specifies whether the size of the widget will be automatically set according to the text input.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget. ",(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Text")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"ID")," specifies the text that is used. ",(0,r.kt)("em",{parentName:"td"},"If the widget uses an auto-generated text, the ID will display 'Auto-generated'"),".",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"Translation")," specifies the content of the text to be displayed.",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"Typography")," specifies the format of the text.",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"Alignment")," specifies the horizontal alignment of the text.",(0,r.kt)("br",null),(0,r.kt)("br",null)," Up to two wildcards can be created for dynamic text input, which are indicated as '","<","tag",">","'  where 'tag' can be any string. ",(0,r.kt)("br",null),(0,r.kt)("br",null)," For more details on text configuration, refer to the ",(0,r.kt)("a",k({parentName:"td"},{href:"../../touchgfx-engine-features/texts-and-fonts"}),"Using texts and fonts")," section.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Color")," specifies the color of the displayed text.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Alpha")," specifies the transparency of the widget.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Line Spacing")," specifies the space between lines.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Text Rotation")," sets the rotation in degrees for the text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,r.kt)("em",{parentName:"td"},"Alpha")," value.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," values.")))),(0,r.kt)("h2",k({},{id:"interactions"}),"Interactions"),(0,r.kt)("p",null,"The actions and triggers supported by the Text Area are described in the following sections."),(0,r.kt)("h3",k({},{id:"actions"}),"Actions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Widget specific action")),(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Set text")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Set the text of the widget.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Resize widget")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Resize the widget.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Set wildcard")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Set the wildcard of the widget. A wildcard has to be already added to the Text Area for this action to work.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Standard widget action")),(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,r.kt)("h3",k({},{id:"triggers"}),"Triggers"),(0,r.kt)("p",null,"The Text Area does not emit any triggers."),(0,r.kt)("h2",k({},{id:"performance"}),"Performance"),(0,r.kt)("p",null,"A Text Area is dependent on text drawing. Text drawing is very similar to general image drawing (though due to the nature of text characters, a significant amount of alpha blending takes place). Therefore, the Text Area is considered a fast performing widget on most platforms."),(0,r.kt)("p",null,"For more details on text drawing performance, read the ",(0,r.kt)("a",k({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,r.kt)("h2",k({},{id:"examples"}),"Examples"),(0,r.kt)("h3",k({},{id:"generated-code"}),"Generated Code"),(0,r.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a Text Area."),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"touchgfx::TextAreaWithOneWildcard textArea;\n\n/*\n * Wildcard Buffers\n */\nstatic const uint16_t TEXTAREA_SIZE = 20;\ntouchgfx::Unicode::UnicodeChar textAreaBuffer[TEXTAREA_SIZE];\n")),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),'textArea.setPosition(40, 111, 400, 50);\ntextArea.setColor(touchgfx::Color::getColorFromRGB(60, 180, 230));\ntextArea.setLinespacing(0);\nUnicode::snprintf(textAreaBuffer, TEXTAREA_SIZE, "%s", touchgfx::TypedText(T_TOUCHGFXID).getText());\ntextArea.setWildcard(textAreaBuffer);\ntextArea.setTypedText(touchgfx::TypedText(T_SINGLEUSEID1));\n')),(0,r.kt)(l.Z,{mdxType:"Tip"},"You can use these functions and the others available in the TextArea class in user code. Remember to force a redraw by calling ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"textArea.invalidate()")," or",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"textArea.invalidateContent()")," if you change the appearance of the widget.",(0,r.kt)("p",null,"When using ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"textArea.invalidateContent()")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You must call ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"textArea.invalidateContent()")," before and after you change\nthe appearance of the widget, e.g. when changing the content of a wildcard buffer.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You must trigger a recalculation of the bounding area (area of the widget content), when changing\nlanguage. This can be done be calling ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"textArea.setTypedText(...)"),"\nafter you have changed the language.")))),(0,r.kt)("h3",k({},{id:"user-code"}),"User Code"),(0,r.kt)("p",null,"The following example illustrates how to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"handleTickEvent()")," function to change the text at runtime using a wildcard. Running this code creates the application shown at the ",(0,r.kt)("a",k({parentName:"p"},{href:"text-area"}),"beginning of this section"),"."),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n\n    virtual void handleTickEvent();\nprotected:\n    uint8_t counter;\n    bool flag;\n};\n")),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),'Screen1View::Screen1View():\n    counter(0),\n    flag(true)\n{}\n\nvoid Screen1View::handleTickEvent()\n{\n    counter++;\n    if(counter%120 == 0) // every 2s\n    {\n        if(flag)\n        {\n            Unicode::snprintf(textAreaBuffer, TEXTAREA_SIZE, "%s", touchgfx::TypedText(T_STMICROID).getText());\n            flag = false;\n        }\n        else\n        {\n            Unicode::snprintf(textAreaBuffer, TEXTAREA_SIZE, "%s", touchgfx::TypedText(T_TOUCHGFXID).getText());\n            flag = true;\n        }\n        textArea.invalidate();\n        counter = 0;\n    }\n}\n')),(0,r.kt)("h3",k({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,r.kt)("p",null,"To further explore the Text Area, try creating a new application within TouchGFX Designer with one of the following Examples:"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/text-example-v4.17.png",mdxType:"Figure"},"Text Example in TouchGFX Designer"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/arabic-text-example-v4.17.png",mdxType:"Figure"},"Arabic Text Example in TouchGFX Designer"),(0,r.kt)("h2",k({},{id:"api-reference"}),"API Reference"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(d.Z,{to:"../../../../api/classes/classtouchgfx_1_1_text_area",mdxType:"Link"},"API reference for the TextArea class"))))}T.isMDXComponent=!0}}]);