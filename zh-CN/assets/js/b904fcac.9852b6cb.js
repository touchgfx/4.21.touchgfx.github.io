"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4380],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),s=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?i.createElement(h,r(r({ref:n},u),{},{components:t})):i.createElement(h,r({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},22425:function(e,n,t){var i=t(67294);class a extends i.Component{render(){return i.createElement("div",{className:"code-header"},i.createElement("div",null,i.createElement("h5",null,this.props.children)))}}n.Z=a},44035:function(e,n,t){var i=t(67294),a=t(25026);n.Z=function(e){const n=e.noShadow||!1,t=e.width,o=e.height,r=(0,a.Z)(e.imageSource);return n?i.createElement("div",{className:"figure noshadow"},i.createElement("a",{href:r,target:"_blank"},i.createElement("img",{width:t,height:o,src:r})),i.createElement("p",null,e.children)):i.createElement("div",{className:"figure"},i.createElement("a",{href:r,target:"_blank"},i.createElement("img",{width:t,height:o,src:r})),i.createElement("p",null,e.children))}},29415:function(e,n,t){var i=t(67294),a=t(88678);const o=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class r extends i.Component{render(){return i.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}n.Z=r},88678:function(e,n,t){var i=t(67294);class a extends i.Component{render(){const e=`highlight highlight-${this.props.type}`;return i.createElement("div",{className:e},i.createElement("div",{className:"highlight-heading"},i.createElement("h5",null,i.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),i.createElement("div",{className:"highlight-content"},this.props.children))}}n.Z=a},93054:function(e,n,t){var i=t(67294),a=t(88678);const o=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class r extends i.Component{render(){return i.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}n.Z=r},81368:function(e,n,t){t.r(n),t.d(n,{assets:function(){return b},contentTitle:function(){return f},default:function(){return E},frontMatter:function(){return x},metadata:function(){return v},toc:function(){return w}});var i=t(3905),a=t(39130),o=t(44035),r=t(29415),l=t(22425),c=t(93054),s=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,n,t)=>n in e?s(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,k=(e,n)=>{for(var t in n||(n={}))m.call(n,t)&&g(e,t,n[t]);if(d)for(var t of d(n))h.call(n,t)&&g(e,t,n[t]);return e};const x={id:"mixins",title:"Mixins"},f=void 0,v={unversionedId:"development/ui-development/touchgfx-engine-features/mixins",id:"development/ui-development/touchgfx-engine-features/mixins",title:"Mixins",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/mixins.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/mixins",permalink:"/4.21/zh-CN/docs/development/ui-development/touchgfx-engine-features/mixins",draft:!1,tags:[],version:"current",frontMatter:{id:"mixins",title:"Mixins"},sidebar:"docs",previous:{title:"\u540e\u7aef\u901a\u4fe1",permalink:"/4.21/zh-CN/docs/development/ui-development/touchgfx-engine-features/backend-communication"},next:{title:"\u6587\u672c\u548c\u5b57\u4f53",permalink:"/4.21/zh-CN/docs/development/ui-development/touchgfx-engine-features/texts-and-fonts"}},b={},w=[{value:"Move Animator",id:"move-animator",level:2},{value:"\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u4f7f\u7528Move Animator",id:"using-move-animator-in-user-code",level:3},{value:"\u7528\u6237\u4ee3\u7801\u4e2d\u7684\u56de\u8c03\u5b9e\u73b0",id:"callback-implementation-in-user-code",level:3},{value:"API\u53c2\u8003",id:"api-reference",level:3},{value:"Fade Animator",id:"fade-animator",level:2},{value:"\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u4f7f\u7528Fade Animator",id:"using-fade-animator-in-user-code",level:3},{value:"\u7528\u6237\u4ee3\u7801\u4e2d\u7684\u56de\u8c03\u5b9e\u73b0",id:"callback-implementation-in-user-code-1",level:3},{value:"API\u53c2\u8003",id:"api-reference-1",level:3},{value:"ClickListener",id:"clicklistener",level:2},{value:"\u7528\u6237\u4ee3\u7801\u4e2d\u7684\u56de\u8c03\u5b9e\u73b0",id:"callback-implementation-in-user-code-2",level:3},{value:"API\u53c2\u8003",id:"api-reference-2",level:3},{value:"Draggable",id:"draggable",level:2},{value:"API\u53c2\u8003",id:"api-reference-3",level:3},{value:"Easing Equations",id:"easing-equations",level:2},{value:"Cubic movement",id:"easing-cubic",level:3}],y={toc:w};function E(e){var n,t=e,{components:s}=t,g=((e,n)=>{var t={};for(var i in e)m.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&d)for(var i of d(e))n.indexOf(i)<0&&h.call(e,i)&&(t[i]=e[i]);return t})(t,["components"]);return(0,i.kt)("wrapper",(n=k(k({},y),g),u(n,p({components:s,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"Mixin\u7c7b\u6269\u5c55\u63a7\u4ef6\u7684\u529f\u80fd\uff0c\u4f8b\u5982\u4f7f\u4e4b\u80fd\u591f\u5c06\u79fb\u52a8\u6216\u900f\u660e\u5ea6\u503c\u53d8\u5316\u5236\u4f5c\u6210\u52a8\u753b\u3002 \u5728Move Animator\u548cFade Animator Mixin\u7684\u57fa\u7840\u4e0a\uff0cTouchGFX Designer\u4ea4\u4e92\u80fd\u591f\u751f\u6210\u5c06\u79fb\u52a8\u6216\u900f\u660e\u5ea6\u503c\u53d8\u5316\u5236\u4f5c\u6210\u52a8\u753b\u7684\u4ee3\u7801\u3002 \u8fd9\u4e9bMixin\u53ef\u901a\u8fc7TouchGFX Designer\u6216\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u624b\u52a8\u6dfb\u52a0\u5230\u63a7\u4ef6\u3002"),(0,i.kt)("p",null,"The Move and Fade Animators optionally uses easing equations to detail the progression of the animation. Read more about easing equations in the end of this ",(0,i.kt)("a",k({parentName:"p"},{href:"#easing-equations"}),"section"),"."),(0,i.kt)("h2",k({},{id:"move-animator"}),"Move Animator"),(0,i.kt)("p",null,"Move Animator Mixin\u4f7f\u63a7\u4ef6\u80fd\u591f\u5c06\u4ece\u5f53\u524d\u4f4d\u7f6e\u5230\u6307\u5b9a\u7ed3\u675f\u4f4d\u7f6e\u7684\u79fb\u52a8\u5236\u4f5c\u6210\u52a8\u753b\u3002 \u901a\u8fc7\u63d0\u4f9bEasingEquation\uff0c\u53ef\u4ee5\u5bf9\u6cbfX\u548cY\u65b9\u5411\u7684\u79fb\u52a8\u8fdb\u884c\u63cf\u8ff0\u3002"),(0,i.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\uff0c\u53ef\u901a\u8fc7\u5728\u201cMixin\u201d\u533a\u57df\u4e2d\u7ed9\u5b9a\u63a7\u4ef6\u7684\u5c5e\u6027\u4e2d\u542f\u7528Mixin\u6765\u5e94\u7528\u5b83\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u521b\u5efa\u4e86\u79fb\u52a8\u63a7\u4ef6\u7684",(0,i.kt)("a",k({parentName:"p"},{href:"../designer-user-guide/interactions-view"}),"\u4ea4\u4e92"),"\uff0cMove Animator Mixin\u4f1a\u88ab\u81ea\u52a8\u5e94\u7528\u4e8e\u63a7\u4ef6\u3002"),(0,i.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/mixins-move-animator-enabled-4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u542f\u7528\u4e86Move Animator Mixin"),(0,i.kt)("p",null,"\u542f\u7528Move Animator Mixin\u4f1a\u66f4\u6539\u751f\u6210\u7684\u63a7\u4ef6\u7684\u58f0\u660e\u7b7e\u540d\uff08\u5982\u4e0b\u6587\u6240\u793a\uff09\uff0c\u5176\u4e2d\u7684",(0,i.kt)("a",k({parentName:"p"},{href:"../ui-components/shapes/box"}),"Box"),"\u542f\u7528\u4e86Move Animator Mixin\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"touchgfx::MoveAnimator< touchgfx::Box > box;\n")),(0,i.kt)("h3",k({},{id:"using-move-animator-in-user-code"}),"\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u4f7f\u7528Move Animator"),(0,i.kt)("p",null,"\u5f53\u6709Move Animator Mixin\u5e94\u7528\u4e8e\u63a7\u4ef6\u65f6\uff0c\u63a7\u4ef6\u80fd\u591f\u5c06\u5176\u4ece\u4e00\u4e2a\u4f4d\u7f6e\u5230\u53e6\u4e00\u4e2a\u4f4d\u7f6e\u7684\u79fb\u52a8\u5236\u4f5c\u6210\u52a8\u753b\u3002 \u5728\u672c\u8282\u4e2d\uff0c\u5c06\u63d0\u4f9b\u5982\u4f55\u4f7f\u7528\u6b64\u65b0\u529f\u80fd\u7684\u6f14\u793a\u3002"),(0,i.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\u5bf9Box\u63a7\u4ef6\u542f\u7528Move Animator Mixin\u540e\uff0c\u65b9\u6cd5",(0,i.kt)("inlineCode",{parentName:"p"},"startMoveAnimation"),"\u53ef\u4f9b\u4f7f\u7528\u3002 \u6b64\u65b9\u6cd5\u6309\u4ee5\u4e0b\u987a\u5e8f\u91c7\u7528\u4e865\u4e2a\u53c2\u6570\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"endX\uff1a\u76f8\u5bf9\u4e8e\u5176\u7236\u5143\u4ef6\u7684X\u4f4d\u7f6e\uff0c\u63a7\u4ef6\u5e94\u79fb\u52a8\u5230\u6b64\u4f4d\u7f6e\u3002"),(0,i.kt)("li",{parentName:"ul"},"endY\uff1a\u76f8\u5bf9\u4e8e\u5176\u7236\u5143\u4ef6\u7684Y\u4f4d\u7f6e\uff0c\u63a7\u4ef6\u5e94\u79fb\u52a8\u5230\u6b64\u4f4d\u7f6e\u3002"),(0,i.kt)("li",{parentName:"ul"},"duration\uff1aX\u548cY\u8f74\u65b9\u5411\u7684\u79fb\u52a8\u5e94\u8017\u8d39\u7684\u65f6\u95f4\uff0c\u4ee5tick\u4e3a\u5355\u4f4d\u3002"),(0,i.kt)("li",{parentName:"ul"},"xProgressionEquation\uff1a\u5e94\u5f53\u5bf9X\u8f74\u65b9\u5411\u7684\u79fb\u52a8\u4f7f\u7528\u7684EasingEquation\u3002"),(0,i.kt)("li",{parentName:"ul"},"yProgressionEquation\uff1a\u5e94\u5f53\u5bf9Y\u8f74\u65b9\u5411\u7684\u79fb\u52a8\u4f7f\u7528\u7684EasingEquation\u3002")),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u79fb\u52a8\u5230\u5750\u6807X\u7684\u793a\u4f8b\uff1a0, X: \u57280\u523040 tick\u7684\u65f6\u95f4\u6bb5\u5185\uff0c\u5728X\u548cY\u8f74\u65b9\u5411\u4f7f\u7528\u7ebf\u6027EasingEquation\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"    box.startMoveAnimation(0, 0, 40, EasingEquations::linearEaseNone, EasingEquations::linearEaseNone);\n")),(0,i.kt)("h3",k({},{id:"callback-implementation-in-user-code"}),"\u7528\u6237\u4ee3\u7801\u4e2d\u7684\u56de\u8c03\u5b9e\u73b0"),(0,i.kt)("p",null,"\u5f53Move Animator Mixin\u5b8c\u6210\u52a8\u753b\u65f6\uff0c\u53d1\u9001\u56de\u8c03\u3002 \u5728\u672c\u8282\u4e2d\uff0c\u5c06\u6f14\u793a\u5982\u4f55\u5b9e\u73b0\u6b64\u56de\u8c03\u3002"),(0,i.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\u5bf9Box\u63a7\u4ef6\u542f\u7528Move Animator Mixin\u540e\uff0c\u4e0b\u4e00\u6b65\u662f\u4e3a\u56de\u8c03\u548c\u51fd\u6570\u6dfb\u52a0\u58f0\u660e\uff0c\u4ee5\u4fbf\u5904\u7406\u7ee7\u627f\u81ea\u57fa\u7c7b\uff08Box\u63a7\u4ef6\u7684\u4f4d\u7f6e\u6240\u5728\uff09\u7684Screen header\u7c7b\u6587\u4ef6\u4e2d\u7684\u4e8b\u4ef6\u3002"),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",k({parentName:"pre"},{className:"language-cpp",metastring:"{5-6,9-10}","{5-6,9-10}":!0}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    // Declaring callback handler for move animation ended on a Box\n    void boxMoveAnimationEndedHandler(const touchgfx::MoveAnimator<Box>& comp);\n\nprotected:\n    // Declaring callback type of MoveAnimator<Box>\n    Callback <Screen1View, const touchgfx::MoveAnimator<Box>&> boxMoveAnimationEndedCallback;\n};\n")),(0,i.kt)("p",null,"\u7136\u540e\uff0c\u9700\u8981\u5c06\u5904\u7406\u4e8b\u4ef6\u7684\u56de\u8c03\u58f0\u660e\u548c\u51fd\u6570\u7ed1\u5b9a\u5230\u89c6\u56fe\u5bf9\u8c61\u3002"),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",k({parentName:"pre"},{className:"language-cpp",metastring:"{2-3}","{2-3}":!0}),"Screen1View::Screen1View() :\n  // In constructor for callback, bind to this view object and bind which function to handle the event.\n  boxMoveAnimationEndedCallback(this, &Screen1View::boxMoveAnimationEndedHandler) { }\n")),(0,i.kt)("p",null,"\u4e0b\u4e00\u6b65\u662f\u544a\u77e5Box\u63a7\u4ef6\u5728\u5176\u79fb\u52a8\u52a8\u753b\u7ed3\u675f\u65f6\u8981\u4f7f\u7528\u54ea\u4e2a\u56de\u8c03\uff0c\u8fd9\u662f\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"setupScreen()"),"\u5b8c\u6210\u7684\uff0c\u76ee\u7684\u662f\u786e\u4fdd\u5728\u6bcf\u6b21\u8fdb\u5165\u5c4f\u5e55\u65f6\u90fd\u8bbe\u7f6e\u4e86\u56de\u8c03\u3002"),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",k({parentName:"pre"},{className:"language-cpp",metastring:"{3-4}","{3-4}":!0}),"void Screen1View::setupScreen()\n{\n  // Add the callback to box\n  box.setMoveAnimationEndedAction(boxMoveAnimationEndedCallback);\n}\n")),(0,i.kt)("p",null,"\u6700\u540e\u4e00\u6b65\u662f\u5b9e\u73b0\u51fd\u6570",(0,i.kt)("inlineCode",{parentName:"p"},"boxMoveAnimationEndedHandler"),"\uff0c\u5b83\u5c06\u5904\u7406\u56de\u8c03\u3002 \u6700\u597d\u786e\u8ba4\u79fb\u52a8\u52a8\u753b\u5df2\u7ed3\u675f\u7684Box\u786e\u5b9e\u662f\u8be5\u201c\u65b9\u5757\u201d"),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::boxMoveAnimationEndedHandler(const touchgfx::MoveAnimator<touchgfx::Box>& b)\n{\n    if (&b == &box)\n    {\n        //Implement what should happen when move animation on 'box' has ended here.\n    }\n}\n")),(0,i.kt)("h3",k({},{id:"api-reference"}),"API\u53c2\u8003"),(0,i.kt)(r.Z,{mdxType:"FurtherReading"},(0,i.kt)("li",null,(0,i.kt)(a.Z,{to:"../../../api/classes/classtouchgfx_1_1_move_animator",mdxType:"Link"},"API reference for the MoveAnimator class"))),(0,i.kt)("h2",k({},{id:"fade-animator"}),"Fade Animator"),(0,i.kt)("p",null,"Fade Animator Mixin\u4f7f\u63a7\u4ef6\u80fd\u591f\u5c06\u5176\u4ece\u5f53\u524d\u900f\u660e\u5ea6\u503c\u81f3\u6307\u5b9a\u7ed3\u675f\u900f\u660e\u5ea6\u503c\u7684\u6e10\u9690\u8fc7\u7a0b\u5236\u4f5c\u6210\u52a8\u753b\u3002 \u901a\u8fc7\u63d0\u4f9bEasingEquation\uff0c\u53ef\u4ee5\u63cf\u8ff0\u6e10\u9690\u901f\u7387\u3002"),(0,i.kt)(c.Z,{mdxType:"Note"},"\u53ea\u6709\u5e94\u7528\u900f\u660e\u5ea6\u503c\u7684\u63a7\u4ef6\u624d\u652f\u6301Fade Animator Mixin\u3002 \u8fd9\u610f\u5473\u7740\u6240\u6709\u53ef\u80fd\u5305\u542b\u5176\u4ed6\u63a7\u4ef6\u7684\u63a7\u4ef6\uff08\u5982",(0,i.kt)(a.Z,{to:"../ui-components/containers/container",mdxType:"Link"},"\u5bb9\u5668"),"\uff09\u90fd\u4e0d\u652f\u6301Fade Animator Mixin\u3002"),(0,i.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\uff0c\u53ef\u901a\u8fc7\u5728\u201cMixin\u201d\u533a\u57df\u4e2d\u7ed9\u5b9a\u63a7\u4ef6\u7684\u5c5e\u6027\u4e2d\u542f\u7528Mixin\u6765\u5e94\u7528\u5b83\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u6dfb\u52a0\u4e86\u5728\u5927\u4e8e\u96f6\u7684\u65f6\u95f4\u6bb5\u5185\u6e10\u9690\u63a7\u4ef6\u7684",(0,i.kt)("a",k({parentName:"p"},{href:"../designer-user-guide/interactions-view"}),"\u4ea4\u4e92"),"\uff0cFade Animator Mixin\u4f1a\u88ab\u81ea\u52a8\u5e94\u7528\u4e8e\u63a7\u4ef6\u3002"),(0,i.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/mixins-fade-animator-enabled-4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u542f\u7528\u4e86Fade Animator Mixin"),(0,i.kt)("p",null,"\u542f\u7528Fade Animator Mixin\u4f1a\u66f4\u6539\u751f\u6210\u7684\u63a7\u4ef6\u7684\u58f0\u660e\u7b7e\u540d\uff08\u5982\u4e0b\u6587\u6240\u793a\uff09\uff0c\u5176\u4e2d\u7684",(0,i.kt)("a",k({parentName:"p"},{href:"../ui-components/shapes/box"}),"Box"),"\u542f\u7528\u4e86Fade Animator Mixin\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"touchgfx::FadeAnimator< touchgfx::Box > box;\n")),(0,i.kt)("h3",k({},{id:"using-fade-animator-in-user-code"}),"\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u4f7f\u7528Fade Animator"),(0,i.kt)("p",null,"\u5f53\u6709Fade Animator Mixin\u5e94\u7528\u4e8e\u63a7\u4ef6\u65f6\uff0c\u63a7\u4ef6\u80fd\u591f\u5c06\u5176\u900f\u660e\u5ea6\u503c\u4ece\u4e00\u4e2a\u8bbe\u5b9a\u503c\u5230\u53e6\u4e00\u4e2a\u8bbe\u5b9a\u503c\u7684\u53d8\u5316\u8fc7\u7a0b\u5236\u4f5c\u6210\u52a8\u753b\u3002 \u5728\u672c\u8282\u4e2d\uff0c\u5c06\u63d0\u4f9b\u5982\u4f55\u4f7f\u7528\u6b64\u65b0\u529f\u80fd\u7684\u6f14\u793a\u3002"),(0,i.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\u5bf9Box\u63a7\u4ef6\u542f\u7528Fade Animator Mixin\u540e\uff0c\u65b9\u6cd5",(0,i.kt)("inlineCode",{parentName:"p"},"startFadeAnimation"),"\u53ef\u4f9b\u4f7f\u7528\u3002 \u6b64\u65b9\u6cd5\u6309\u4ee5\u4e0b\u987a\u5e8f\u91c7\u7528\u4e863\u4e2a\u53c2\u6570\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"endAlpha\uff1a\u52a8\u753b\u5b8c\u6210\u65f6\u63a7\u4ef6\u5e94\u5f53\u5177\u6709\u7684\u900f\u660e\u5ea6\u503c\u3002"),(0,i.kt)("li",{parentName:"ul"},"duration\uff1a\u52a8\u753b\u8fbe\u5230\u65b0\u7684\u900f\u660e\u5ea6\u503c\u8bbe\u7f6e\u5e94\u8017\u8d39\u7684\u65f6\u95f4\uff0c\u4ee5tick\u4e3a\u5355\u4f4d\u3002"),(0,i.kt)("li",{parentName:"ul"},"alphaProgressionEquation\uff1a\u5e94\u5f53\u5bf9\u900f\u660e\u5ea6\u503c\u53d8\u5316\u901f\u7387\u4f7f\u7528\u7684EasingEquation\u3002")),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f7f\u7528\u7ebf\u6027EasingEquation\u65f6\uff0c\u900f\u660e\u5ea6\u503c\u572840 tick\u7684\u65f6\u95f4\u5185\u53d8\u4e3a0\u7684\u793a\u4f8b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"    box.startFadeAnimation(0, 40, EasingEquations::linearEaseNone);\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"linearEaseNone")," easing equation is the default, so you don't have to supply that as argument."),(0,i.kt)("h3",k({},{id:"callback-implementation-in-user-code-1"}),"\u7528\u6237\u4ee3\u7801\u4e2d\u7684\u56de\u8c03\u5b9e\u73b0"),(0,i.kt)("p",null,"\u5f53Fade Animator Mixin\u5b8c\u6210\u52a8\u753b\u65f6\uff0c\u53d1\u9001\u56de\u8c03\u3002 \u5728\u672c\u8282\u4e2d\uff0c\u5c06\u6f14\u793a\u5982\u4f55\u5b9e\u73b0\u6b64\u56de\u8c03\u3002"),(0,i.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\u5bf9Box\u63a7\u4ef6\u542f\u7528Fade Animator Mixin\u540e\uff0c\u4e0b\u4e00\u6b65\u662f\u4e3a\u56de\u8c03\u548c\u51fd\u6570\u6dfb\u52a0\u58f0\u660e\uff0c\u4ee5\u4fbf\u5904\u7406\u7ee7\u627f\u81ea\u57fa\u7c7b\uff08Box\u63a7\u4ef6\u7684\u4f4d\u7f6e\u6240\u5728\uff09\u7684Screen header\u7c7b\u6587\u4ef6\u4e2d\u7684\u4e8b\u4ef6\u3002"),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",k({parentName:"pre"},{className:"language-cpp",metastring:"{5-6,9-10}","{5-6,9-10}":!0}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    // Declaring callback handler for fade animation ended on a Box\n    void boxFadeAnimationEndedHandler(const touchgfx::FadeAnimator<Box>& comp);\n\nprotected:\n    // Declaring callback type of FadeAnimator<Box>\n    Callback <Screen1View, const touchgfx::FadeAnimator<Box>&> boxFadeAnimationEndedCallback;\n};\n")),(0,i.kt)("p",null,"\u7136\u540e\uff0c\u9700\u8981\u5c06\u5904\u7406\u4e8b\u4ef6\u7684\u56de\u8c03\u58f0\u660e\u548c\u51fd\u6570\u7ed1\u5b9a\u5230\u89c6\u56fe\u5bf9\u8c61\u3002"),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",k({parentName:"pre"},{className:"language-cpp",metastring:"{2-3}","{2-3}":!0}),"Screen1View::Screen1View() :\n  // In constructor for callback, bind to this view object and bind which function to handle the event.\n  boxFadeAnimationEndedCallback(this, &Screen1View::boxFadeAnimationEndedHandler) { }\n")),(0,i.kt)("p",null,"\u4e0b\u4e00\u6b65\u662f\u544a\u77e5Box\u63a7\u4ef6\u5728\u5176\u79fb\u52a8\u52a8\u753b\u7ed3\u675f\u65f6\u8981\u4f7f\u7528\u54ea\u4e2a\u56de\u8c03\uff0c\u8fd9\u662f\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"setupScreen()"),"\u5b8c\u6210\u7684\uff0c\u76ee\u7684\u662f\u786e\u4fdd\u5728\u6bcf\u6b21\u8fdb\u5165\u5c4f\u5e55\u65f6\u90fd\u8bbe\u7f6e\u4e86\u56de\u8c03\u3002"),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",k({parentName:"pre"},{className:"language-cpp",metastring:"{3-4}","{3-4}":!0}),"void Screen1View::setupScreen()\n{\n  // Add the callback to box\n  box.setFadeAnimationEndedAction(boxFadeAnimationEndedCallback);\n}\n")),(0,i.kt)("p",null,"\u6700\u540e\u4e00\u6b65\u662f\u5b9e\u73b0\u51fd\u6570",(0,i.kt)("inlineCode",{parentName:"p"},"boxFadeAnimationEndedHandler"),"\uff0c\u5b83\u5c06\u5904\u7406\u56de\u8c03\u3002 \u6700\u597d\u786e\u8ba4\u6e10\u9690\u52a8\u753b\u5df2\u7ed3\u675f\u7684Box\u786e\u5b9e\u662f\u8be5\u201c\u65b9\u5757\u201d"),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::boxFadeAnimationEndedHandler(const touchgfx::FadeAnimator<touchgfx::Box>& b)\n{\n    if (&b == &box)\n    {\n        //Implement what should happen when fade animation on 'box' has ended here.\n    }\n}\n")),(0,i.kt)("h3",k({},{id:"api-reference-1"}),"API\u53c2\u8003"),(0,i.kt)(r.Z,{mdxType:"FurtherReading"},(0,i.kt)("li",null,(0,i.kt)(a.Z,{to:"../../../api/classes/classtouchgfx_1_1_fade_animator",mdxType:"Link"},"API reference for the FadeAnimator class"))),(0,i.kt)("h2",k({},{id:"clicklistener"}),"ClickListener"),(0,i.kt)("p",null,"Click Listener Mixin\u7528\u56de\u8c03\u6269\u5c55\u63a7\u4ef6\uff0c\u4f7f\u63a7\u4ef6\u80fd\u591f\u54cd\u5e94\u89e6\u63a7\u8f93\u5165\u3002"),(0,i.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\uff0c\u53ef\u901a\u8fc7\u5728\u201cMixin\u201d\u533a\u57df\u4e2d\u7ed9\u5b9a\u63a7\u4ef6\u7684\u5c5e\u6027\u4e2d\u542f\u7528Mixin\u6765\u5e94\u7528\u5b83\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,i.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/mixins-click-listener-enabled-4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u542f\u7528\u4e86Click Listener Mixin"),(0,i.kt)("p",null,"\u542f\u7528Click Listener Mixin\u4f1a\u66f4\u6539\u751f\u6210\u7684\u63a7\u4ef6\u7684\u58f0\u660e\u7b7e\u540d\uff08\u5982\u4e0b\u6587\u6240\u793a\uff09\uff0c\u5176\u4e2d\u7684",(0,i.kt)("a",k({parentName:"p"},{href:"../ui-components/shapes/box"}),"Box"),"\u542f\u7528\u4e86Click Listener Mixin\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"touchgfx::ClickListener< touchgfx::Box > box;\n")),(0,i.kt)("h3",k({},{id:"callback-implementation-in-user-code-2"}),"\u7528\u6237\u4ee3\u7801\u4e2d\u7684\u56de\u8c03\u5b9e\u73b0"),(0,i.kt)("p",null,"Click Listener Mixin\u63a5\u6536\u89e6\u63a7\u4e8b\u4ef6\uff0c\u53d1\u9001\u56de\u8c03\u3002 \u5728\u672c\u8282\u4e2d\uff0c\u5c06\u6f14\u793a\u5982\u4f55\u5b9e\u73b0\u6b64\u56de\u8c03\u3002"),(0,i.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\u5bf9Box\u63a7\u4ef6\u542f\u7528Click Listener Mixin\u540e\uff0c\u4e0b\u4e00\u6b65\u662f\u4e3a\u56de\u8c03\u548c\u51fd\u6570\u6dfb\u52a0\u58f0\u660e\uff0c\u4ee5\u4fbf\u5904\u7406\u7ee7\u627f\u81ea\u57fa\u7c7b\uff08Box\u63a7\u4ef6\u7684\u4f4d\u7f6e\u6240\u5728\uff09\u7684Screen header\u7c7b\u6587\u4ef6\u4e2d\u7684\u4e8b\u4ef6\u3002"),(0,i.kt)("p",null,"\u56de\u8c03\u5e94\u58f0\u660e\u4e09\u70b9\uff1a\u8981\u7ed1\u5b9a\u7684\u7c7b\u7c7b\u578b\uff0c\u56de\u8c03\u6e90\u81ea\u54ea\u4e2a\u63a7\u4ef6\uff0c\u4ee5\u53ca\u53d1\u751f\u7684\u4e8b\u4ef6\u7684\u7c7b\u578b\u3002 \u5728\u672c\u4f8b\u4e2d\uff0c\u5b83\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"Screen1View"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"const Box&"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"const ClickEvent&")),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",k({parentName:"pre"},{className:"language-cpp",metastring:"{5-6,9-10}","{5-6,9-10}":!0}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    // Declaring callback handler for Box\n    void boxClickHandler(const Box& b, const ClickEvent& e);\n\nprotected:\n    // Declaring callback type of box and clickEvent\n    Callback<Screen1View, const Box&, const ClickEvent&> boxClickedCallback;\n};\n")),(0,i.kt)("p",null,"\u7136\u540e\uff0c\u9700\u8981\u5c06\u5904\u7406\u4e8b\u4ef6\u7684\u56de\u8c03\u58f0\u660e\u548c\u51fd\u6570\u7ed1\u5b9a\u5230\u89c6\u56fe\u5bf9\u8c61\u3002"),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",k({parentName:"pre"},{className:"language-cpp",metastring:"{2-3}","{2-3}":!0}),"Screen1View::Screen1View() :\n    // In constructor for callback, bind to this view object and bind which function to handle the event.\n    boxClickedCallback(this, &Screen1View::boxClickHandler) { }\n")),(0,i.kt)("p",null,"\u4e0b\u4e00\u6b65\u662f\u544a\u77e5Box\u63a7\u4ef6\u5728\u5176\u88ab\u89e6\u6478\u65f6\u8981\u4f7f\u7528\u54ea\u4e2a\u56de\u8c03\uff0c\u8fd9\u662f\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"setupScreen()"),"\u5b8c\u6210\u7684\uff0c\u76ee\u7684\u662f\u786e\u4fdd\u5728\u6bcf\u6b21\u8fdb\u5165\u5c4f\u5e55\u65f6\u90fd\u8bbe\u7f6e\u4e86\u56de\u8c03\u3002"),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",k({parentName:"pre"},{className:"language-cpp",metastring:"{3-4}","{3-4}":!0}),"void Screen1View::setupScreen()\n{\n    // Add the callback to box\n    box.setClickAction(boxClickedCallback);\n}\n")),(0,i.kt)("p",null,"\u6700\u540e\u4e00\u6b65\u662f\u5b9e\u73b0\u51fd\u6570",(0,i.kt)("inlineCode",{parentName:"p"},"boxClickHandler"),"\uff0c\u5b83\u5c06\u5904\u7406\u56de\u8c03\u3002 \u6700\u597d\u786e\u8ba4\u53d1\u8d77\u56de\u8c03\u7684Box\u786e\u5b9e\u662f\u8be5\u201c\u65b9\u5757\u201d"),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::boxClickHandler(const Box& b, const ClickEvent& evt)\n{\n    if (&b == &box)\n    {\n        //Implement what should happen when 'box' is touched/clicked here.\n    }\n}\n")),(0,i.kt)("h3",k({},{id:"api-reference-2"}),"API\u53c2\u8003"),(0,i.kt)(r.Z,{mdxType:"FurtherReading"},(0,i.kt)("li",null,(0,i.kt)(a.Z,{to:"../../../api/classes/classtouchgfx_1_1_click_listener",mdxType:"Link"},"API reference for the ClickListener class"))),(0,i.kt)("h2",k({},{id:"draggable"}),"Draggable"),(0,i.kt)("p",null,"Draggable mixin\u4f7f\u63a7\u4ef6\u80fd\u591f\u901a\u8fc7\u89e6\u63a7\u8f93\u5165\u88ab\u56db\u5904\u62d6\u62fd\u3002"),(0,i.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\uff0c\u53ef\u901a\u8fc7\u5728\u201cMixin\u201d\u533a\u57df\u4e2d\u7ed9\u5b9a\u63a7\u4ef6\u7684\u5c5e\u6027\u4e2d\u542f\u7528Mixin\u6765\u5e94\u7528\u5b83\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,i.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/mixins-draggable-enabled-4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u542f\u7528\u4e86Draggable Mixin"),(0,i.kt)("p",null,"\u542f\u7528Draggable Mixin\u4f1a\u66f4\u6539\u751f\u6210\u7684\u63a7\u4ef6\u7684\u58f0\u660e\u7b7e\u540d\uff08\u5982\u4e0b\u6587\u6240\u793a\uff09\uff0c\u5176\u4e2d\u7684",(0,i.kt)("a",k({parentName:"p"},{href:"../ui-components/shapes/box"}),"Box"),"\u542f\u7528\u4e86Click Listener Mixin\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"touchgfx::Draggable< touchgfx::Box > box;\n")),(0,i.kt)("h3",k({},{id:"api-reference-3"}),"API\u53c2\u8003"),(0,i.kt)(r.Z,{mdxType:"FurtherReading"},(0,i.kt)("li",null,(0,i.kt)(a.Z,{to:"../../../api/classes/classtouchgfx_1_1_draggable",mdxType:"Link"},"API reference for the Draggable class"))),(0,i.kt)("h2",k({},{id:"easing-equations"}),"Easing Equations"),(0,i.kt)("p",null,"By default the Move and Fade animations uses a linear progression between two values. For example, if we change an alpha value from 0 to 100 in 50 steps, the alpha value will go through the steps 0, 2, 4, 6, 8, ..., 98, 100. The rate of change will be the same in all steps."),(0,i.kt)("p",null,"The linear progression can look a bit simple or unnatural, and the UI can often be improved by using another algorithm. TouchGFX comes with 30 algorithms each with different characteristics. The list of all the easing equations can be found in the API reference (see link at the end of this section)."),(0,i.kt)("p",null,"The easing equations are implemented as static functions in the EasingEquations class. These functions can easily be passed to the MoveAnimator when you start an animation:"),(0,i.kt)("pre",null,(0,i.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"    box.startMoveAnimation(0, 0, 40, EasingEquations::cubicEaseIn, EasingEquations::cubicEaseIn);\n")),(0,i.kt)("p",null,"The first easing argument is the easing equation used for the movement in x (horizontal), the second for the movement in y. Be aware, if you only pass one function it will be used for the x movement and the linear progression will be used for the y movement."),(0,i.kt)("h3",k({},{id:"easing-cubic"}),"Cubic movement"),(0,i.kt)("p",null,"The Cubic easing equations are popular in user interfaces. It is available in three editions in TouchGFX. It is important to use the correct. The images below shows the three variants. In all cases we have time on the horizontal axis (0-400) and the value of the easing equation upwards (0-200):"),(0,i.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/cubic-ease-in.webp",mdxType:"Figure"},"The cubicEaseIn easing equation. Moving slowly in the beginning, ending fast."),(0,i.kt)("p",null,"The cubicEaseIn is very good when you animate something that is already visible on the display out of the screen. The slow start looks very natural. It gains speed and get out of the display within a short time."),(0,i.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/cubic-ease-out.webp",mdxType:"Figure"},"The cubicEaseOut easing equation. Moving fast in the beginning, ending slow."),(0,i.kt)("p",null,"The cubicEaseOut is very good when you animate something in to the screen. It slows down as it approaches the final position, but has a high initial off-screen speed."),(0,i.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/cubic-ease-inout.webp",mdxType:"Figure"},"The cubicEaseInOut easing equation. Moving slowly in the beginning, also ending slow."),(0,i.kt)("p",null,"The cubicEaseInOut is a combination of the cubicEaseIn and cubicEaseOut. It starts slow and ends slow. This is a natural choice when moving elements on the screen."),(0,i.kt)("p",null,"For some short quick movements on screen (like a toggle button), the linear movement can look better because of the simplicity."),(0,i.kt)(r.Z,{mdxType:"FurtherReading"},(0,i.kt)("li",null,(0,i.kt)(a.Z,{to:"../../../api/classes/classtouchgfx_1_1_easing_equations",mdxType:"Link"},"API Reference for the available EasingEquations")),(0,i.kt)("li",null,(0,i.kt)(a.Z,{to:"https://easings.net/",mdxType:"Link"},"Graphical demonstrations of EasingEquations"))))}E.isMDXComponent=!0}}]);