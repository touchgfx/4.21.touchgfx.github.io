"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3887],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=s(t),m=i,d=g["".concat(l,".").concat(m)]||g[m]||p[m]||a;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},22425:function(e,n,t){var r=t(67294);class i extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}n.Z=i},44035:function(e,n,t){var r=t(67294),i=t(25026);n.Z=function(e){const n=e.noShadow||!1,t=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return n?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:t,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:t,height:a,src:o})),r.createElement("p",null,e.children))}},29415:function(e,n,t){var r=t(67294),i=t(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}n.Z=o},88678:function(e,n,t){var r=t(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}n.Z=i},78209:function(e,n,t){t.r(n),t.d(n,{assets:function(){return h},contentTitle:function(){return v},default:function(){return w},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return b}});var r=t(3905),i=t(44035),a=t(29415),o=t(39130),c=t(22425),l=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,C=(e,n)=>{for(var t in n||(n={}))g.call(n,t)&&d(e,t,n[t]);if(p)for(var t of p(n))m.call(n,t)&&d(e,t,n[t]);return e};const k={id:"custom-triggers-and-actions",title:"\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u548c\u64cd\u4f5c"},v=void 0,f={unversionedId:"development/ui-development/touchgfx-engine-features/custom-triggers-and-actions",id:"development/ui-development/touchgfx-engine-features/custom-triggers-and-actions",title:"\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u548c\u64cd\u4f5c",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions",permalink:"/4.21/zh-CN/docs/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions",draft:!1,tags:[],version:"current",frontMatter:{id:"custom-triggers-and-actions",title:"\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u548c\u64cd\u4f5c"},sidebar:"docs",previous:{title:"TouchGFX Engine Features",permalink:"/4.21/zh-CN/docs/category/touchgfx-engine-features"},next:{title:"Position and size",permalink:"/4.21/zh-CN/docs/development/ui-development/touchgfx-engine-features/position-size"}},h={},b=[{value:"\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6",id:"custom-triggers",level:2},{value:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6",id:"adding-custom-triggers",level:3},{value:"\u4ece\u4ea4\u4e92\u7cfb\u7edf\u53d1\u9001\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6",id:"emitting-custom-triggers-from-interactions",level:3},{value:"\u4ece\u7528\u6237\u4ee3\u7801\u53d1\u9001\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6",id:"emitting-custom-triggers-from-user-code",level:3},{value:"\u4ece\u4ea4\u4e92\u7cfb\u7edf\u54cd\u5e94\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6",id:"reacting-to-custom-triggers-from-interactions",level:3},{value:"\u4ece\u7528\u6237\u4ee3\u7801\u54cd\u5e94\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6",id:"reacting-to-custom-triggers-from-user-code",level:3},{value:"\u81ea\u5b9a\u4e49\u64cd\u4f5c",id:"custom-actions",level:2},{value:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u64cd\u4f5c",id:"adding-custom-actions",level:3},{value:"\u4ece\u4ea4\u4e92\u7cfb\u7edf\u8c03\u7528\u81ea\u5b9a\u4e49\u64cd\u4f5c",id:"calling-custom-action-from-interactions",level:3},{value:"\u4ece\u7528\u6237\u4ee3\u7801\u8c03\u7528\u81ea\u5b9a\u4e49\u64cd\u4f5c",id:"calling-custom-action-from-user-code",level:3},{value:"\u4ece\u4ea4\u4e92\u7cfb\u7edf\u4e3a\u81ea\u5b9a\u4e49\u64cd\u4f5c\u6dfb\u52a0\u884c\u4e3a",id:"adding-behaviour-to-custom-actions-from-interactions",level:3},{value:"\u4ece\u7528\u6237\u4ee3\u7801\u4e3a\u81ea\u5b9a\u4e49\u64cd\u4f5c\u6dfb\u52a0\u884c\u4e3a",id:"adding-behaviour-to-custom-actions-from-user-code",level:3}],x={toc:b};function w(e){var n,t=e,{components:l}=t,d=((e,n)=>{var t={};for(var r in e)g.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&p)for(var r of p(e))n.indexOf(r)<0&&m.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=C(C({},x),d),s(n,u({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u901a\u8fc7TouchGFX Designer\uff0c\u60a8\u53ef\u4ee5\u81ea\u5df1\u5b9a\u4e49\u5177\u6709\u89e6\u53d1\u6761\u4ef6\u548c\u64cd\u4f5c\u7684\u4ea4\u4e92\u7ec4\u4ef6\u3002 \u60a8\u5e94\u7528\u4e2d\u7684\u6bcf\u4e2a\u754c\u9762\u90fd\u53ef\u4ee5\u5305\u542b\u64cd\u4f5c\u96c6\u5408\uff08\u8fd9\u4e9b\u662fC++\u4e2d\u7684\u7b80\u5355void\u65b9\u6cd5\uff09\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7TouchGFX Designer\u6216\u8005\u5728\u4ee3\u7801\u4e2d\u6765\u8c03\u7528\u8fd9\u4e9b\u64cd\u4f5c\uff0c\u5e76\u4e14\u81ea\u5b9a\u4e49\u5bb9\u5668\u4e5f\u53ef\u4ee5\u5305\u542b\u53ef\u5728\u5e94\u7528\u4e2d\u5f97\u5230\u54cd\u5e94\u7684\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\uff08\u76f8\u5f53\u4e8eC++\u4e2d\u7684\u56de\u8c03\uff09\u3002 \u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u6b64\u529f\u80fd\uff0c\u4ee5\u63a2\u7d22\u4f7f\u7528\u5b83\u521b\u5efa\u66f4\u7b80\u6d01\u3001\u52a8\u6001\u7684TouchGFX\u5e94\u7528\u3002"),(0,r.kt)("h2",C({},{id:"custom-triggers"}),"\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6"),(0,r.kt)("p",null,"\u81ea\u5b9a\u4e49\u5bb9\u5668\u4e5f\u80fd\u591f\u521b\u5efa\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u3002 \u5b83\u4eec\u4ee5C++\u56de\u8c03\u7684\u5f62\u5f0f\u751f\u6210\uff0c\u53ef\u5728\u4ea4\u4e92\u7cfb\u7edf\u6216\u7528\u6237\u4ee3\u7801\u4e2d\u88ab\u6fc0\u53d1\u6216\u5bf9\u6b64\u505a\u51fa\u54cd\u5e94\u3002"),(0,r.kt)("h3",C({},{id:"adding-custom-triggers"}),"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6"),(0,r.kt)("p",null,"\u901a\u8fc7\u81ea\u5b9a\u4e49\u5bb9\u5668\u7684\u5c5e\u6027\u9009\u9879\u5361\u6dfb\u52a0\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\uff0c\u65b9\u6cd5\u662f\u70b9\u51fb\u4e0b\u56fe\u4e2d\u7a81\u51fa\u663e\u793a\u7684",(0,r.kt)("strong",{parentName:"p"},"\u89e6\u53d1\u6761\u4ef6"),"\u90e8\u5206\u4e2d\u7684\u201c+\u201d\u6309\u94ae\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/adding-custom-trigger-4.17.webp",mdxType:"Figure"},"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6"),(0,r.kt)("p",null,"\u5728\u521b\u5efa\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u540e\uff0c\u4f1a\u6709\u66f4\u591a\u9009\u9879\u53ef\u4f9b\u4f7f\u7528\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/editing-custom-trigger-4.17.webp",mdxType:"Figure"},"\u7f16\u8f91\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u540d\u79f0"),(0,r.kt)("br",null)," \u5728\u6b64\u6307\u5b9a\u7684\u540d\u79f0\u5c06\u5728\u4ea4\u4e92\u7cfb\u7edf\u5185\u90e8\u548c\u751f\u6210\u7684\u4ee3\u7801\u6587\u4ef6\u4e2d\u7684\u5f15\u7528\uff0c\u5982\u4e0b\u9762\u7684\u4ee3\u7801\u793a\u4f8b\u6240\u793a\uff1a"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"CustomContainer1Base.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{11-14,24-30,37}","{11-14,24-30,37}":!0}),"class CustomContainer1Base : public touchgfx::Container\n{\npublic:\n    CustomContainer1Base();\n    virtual ~CustomContainer1Base() {}\n    virtual void initialize();\n\n    /*\n     * Custom Trigger Callback Setters\n     */\n    void setTrigger1Callback(touchgfx::GenericCallback<>& callback)\n    {\n        this->trigger1Callback = &callback;\n    }\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Custom Trigger Emitters\n     */\n    virtual void emitTrigger1Callback()\n    {\n        if (trigger1Callback && trigger1Callback->isValid())\n        {\n            this->trigger1Callback->execute();\n        }\n    }\n\nprivate:\n\n    /*\n     * Custom Trigger Callback Declarations\n     */\n    touchgfx::GenericCallback<>* trigger1Callback;\n\n};\n")),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"CustomContainer1Base.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{2}","{2}":!0}),"CustomContainer1Base::CustomContainer1Base() :\n    trigger1Callback(0)\n{\n    setWidth(250);\n    setHeight(250);\n}\n\nvoid CustomContainer1Base::initialize()\n{\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf4\u660e"),(0,r.kt)("br",null)," \u6b64\u5904\u5199\u5165\u7684\u6587\u672c\u5c06\u7528\u5728\u4ea4\u4e92\u7cfb\u7edf\u4e2d\uff0c\u5728\u4ea4\u4e92\u7cfb\u7edf\u4e2d\u9009\u4e2d\u89e6\u53d1\u6761\u4ef6\u65f6\uff0c\u5c06\u9f20\u6807\u5149\u6807\u60ac\u505c\u5728\u89e6\u53d1\u6761\u4ef6\u4e0a\u53ef\u663e\u793a\u6b64\u6587\u672c\u3002 \u5982\u679c\u6ca1\u6709\u6307\u5b9a\u8bf4\u660e\uff0c\u5c06\u521b\u5efa\u6807\u51c6\u8bf4\u660e\uff0c\u5982",(0,r.kt)("a",C({parentName:"p"},{href:"#emitting-custom-triggers-from-interactions"}),"Emitting Custom Triggers from Interactions"),"\u4e00\u8282\u4e2d\u6240\u793a\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7c7b\u578b"),(0,r.kt)("br",null)," \u542f\u7528\u201c\u7c7b\u578b\u201d\u5c06\u80fd\u521b\u5efa\u89e6\u53d1\u6761\u4ef6\uff0c\u89e6\u53d1\u6761\u4ef6\u53ef\u8fd4\u56de\u7ed9\u5b9a\u7c7b\u578b\u7684\u503c\u3002 \u7c7b\u578b\u65e2\u53ef\u4ee5\u4ece\u5217\u8868\u4e2d\u9009\u62e9\uff0c\u4e5f\u53ef\u4ee5\u624b\u52a8\u8f93\u5165\u3002 \u4e0b\u9762\u663e\u793a\u7684\u662f\u5f53\u9009\u62e9",(0,r.kt)("inlineCode",{parentName:"p"},"bool"),"\u7c7b\u578b\u65f6\u751f\u6210\u7684\u4ee3\u7801\u3002"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"CustomContainer1Base.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{11-14,24-30,37}","{11-14,24-30,37}":!0}),"class CustomContainer1Base : public touchgfx::Container\n{\npublic:\n    CustomContainer1Base();\n    virtual ~CustomContainer1Base() {}\n    virtual void initialize();\n\n    /*\n     * Custom Trigger Callback Setters\n     */\n    void setTrigger1Callback(touchgfx::GenericCallback<bool>& callback)\n    {\n        this->trigger1Callback = &callback;\n    }\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Custom Trigger Emitters\n     */\n    virtual void emitTrigger1Callback(bool value)\n    {\n        if (trigger1Callback && trigger1Callback->isValid())\n        {\n            this->trigger1Callback->execute(value);\n        }\n    }\n\nprivate:\n\n    /*\n     * Custom Trigger Callback Declarations\n     */\n    touchgfx::GenericCallback<bool>* trigger1Callback;\n\n};\n")),(0,r.kt)("h3",C({},{id:"emitting-custom-triggers-from-interactions"}),"\u4ece\u4ea4\u4e92\u7cfb\u7edf\u53d1\u9001\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6"),(0,r.kt)("p",null,"\u53ef\u4f7f\u7528\u4ea4\u4e92\u7cfb\u7edf\u53d1\u9001\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u3002 \u53ea\u9700\u8f6c\u81f3\u62e5\u6709\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u7684\u81ea\u5b9a\u4e49\u5bb9\u5668\u7684\u201c\u4ea4\u4e92\u201d\u9009\u9879\u5361\uff0c\u521b\u5efa\u65b0\u7684\u4ea4\u4e92\u5e76\u9009\u62e9\u201c\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u201d\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/emitting-a-custom-trigger-from-interaction-4.17.webp",mdxType:"Figure"},"\u4ece\u4ea4\u4e92\u7cfb\u7edf\u53d1\u9001\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6"),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u5728\u70b9\u51fb\u5df2\u6dfb\u52a0\u5230\u81ea\u5b9a\u4e49\u5bb9\u5668\u7684\u6309\u94ae\u65f6\uff0c\u5c06\u53d1\u9001\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u7684\u7c7b\u578b\u5df2\u7ecf\u4f7f\u80fd\uff0c\u5b83\u7684\u503c\u6216\u8005\u53d8\u91cf\u5fc5\u987b\u88ab\u6307\u5b9a\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u7c7b\u578b\u88ab\u6307\u5b9a\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"bool"),"\u7c7b\u578b\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/parameter-specification-when-emitting-custom-trigger-from-interaction-4.17.webp",mdxType:"Figure"},"\u4e3a\u4ece\u4ea4\u4e92\u7cfb\u7edf\u53d1\u9001\u7684\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u6307\u5b9a\u53c2\u6570"),(0,r.kt)("h3",C({},{id:"emitting-custom-triggers-from-user-code"}),"\u4ece\u7528\u6237\u4ee3\u7801\u53d1\u9001\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6"),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4ece\u7ee7\u627f\u751f\u6210\u7684\u81ea\u5b9a\u4e49\u5bb9\u5668\u7684\u7528\u6237\u4ee3\u7801\u7c7b\u6587\u4ef6\u53d1\u9001\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u3002 \u5728\u751f\u6210\u7684\u81ea\u5b9a\u4e49\u5bb9\u5668\u4e2d\uff0c\u4ee5\u4e0b\u4e3a\u540d\u4e3a\u201ctrigger1\u201d\u7684\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u7684\u751f\u6210\u4ee3\u7801\u3002"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"CustomContainer1Base.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{24-30}","{24-30}":!0}),"virtual void emitTrigger1Callback(bool value)\n{\n    if (trigger1Callback && trigger1Callback->isValid())\n    {\n        this->trigger1Callback->execute(value);\n    }\n}\n")),(0,r.kt)("p",null,"\u6b64\u51fd\u6570\u53ef\u5728\u7ee7\u627f\u81ea\u5b83\u7684\u7528\u6237\u4ee3\u7801\u7c7b\u6587\u4ef6\u4e2d\u8fdb\u884c\u91cd\u5199\u6216\u8c03\u7528\u3002"),(0,r.kt)("h3",C({},{id:"reacting-to-custom-triggers-from-interactions"}),"\u4ece\u4ea4\u4e92\u7cfb\u7edf\u54cd\u5e94\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6"),(0,r.kt)("p",null,"\u5982\u679c\u5411\u754c\u9762\u6dfb\u52a0\u4e86\u5177\u6709\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u7684\u81ea\u5b9a\u4e49\u5bb9\u5668\uff0c\u53ef\u5c06\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u7528\u4f5c\u754c\u9762\u4e0a\u4ea4\u4e92\u7cfb\u7edf\u7684\u89e6\u53d1\u6761\u4ef6\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,r.kt)("p",null,"\u5f53\u9009\u62e9\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u4f5c\u4e3a\u4ea4\u4e92\u7684\u201c\u89e6\u53d1\u6761\u4ef6\u201d\u65f6\uff0c\u5176\u547d\u540d\u6a21\u5f0f\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"<Custom Container Name><Custom Trigger name>\u53d1\u751f"),"\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/selecting-custom-trigger-as-trigger-on-interaction-4.17.webp",mdxType:"Figure"},"\u5728\u4ea4\u4e92\u7cfb\u7edf\u4e0a\u9009\u62e9\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u4f5c\u4e3a\u89e6\u53d1\u6761\u4ef6"),(0,r.kt)("p",null,"\u5982\u679c\u6709\u591a\u4e2a\u76f8\u540c\u5730\u5305\u542b\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u81ea\u5b9a\u4e49\u5bb9\u5668\u7ec4\u4ef6\uff0c\u5728\u9009\u62e9\u201c\u89e6\u53d1\u6761\u4ef6\u201d\u540e\uff0c\u9700\u8981\u9009\u62e9\u76f8\u5e94\u7684\u7ec4\u4ef6\u3002 \u4f46\u662f\uff0c\u5982\u679c\u53ea\u6709\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u5b83\u4f1a\u88ab\u81ea\u52a8\u586b\u5165\u3002"),(0,r.kt)("h3",C({},{id:"reacting-to-custom-triggers-from-user-code"}),"\u4ece\u7528\u6237\u4ee3\u7801\u54cd\u5e94\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u5e94\u7528\u56de\u8c03\u51fd\u6570\u6765\u5bf9\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u505a\u51fa\u54cd\u5e94\uff0c\u5982\u4e0b\u5217\u4ee3\u7801\u793a\u4f8b\uff0c\u5728\u81ea\u5b9a\u4e49\u5bb9\u5668\u4e2d\u6dfb\u52a0\u540d\u4e3a\u201ctrigger1\u201d\u7684\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u7684\u4ee3\u7801\u6dfb\u52a0\u65b9\u6cd5\u3002 \u5728\u7ee7\u627f\u81ea\u754c\u9762\u7684\u7528\u6237\u4ee3\u7801\u7c7b\u6587\u4ef6\u4e2d\uff0c\u6dfb\u52a0\u4e86\u4e0b\u5217\u9ad8\u4eae\u663e\u793a\u884c\u6765\u5b9e\u73b0\u56de\u8c03/\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u3002"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{10-18}","{10-18}":!0}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n\nprivate:\n    /*\n     * Callback Declarations\n     */\n    touchgfx::Callback<Screen1View> customContainer1Trigger1Callback;\n\n    /*\n     * Callback Handler Declarations\n     */\n    void customContainer1Trigger1CallbackHandler();\n};\n\n")),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{4,6,19-22}","{4,6,19-22}":!0}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View():\n    customContainer1Trigger1Callback(this, &Screen1View::customContainer1Trigger1CallbackHandler)\n{\n    customContainer1.setTrigger1Callback(customContainer1Trigger1Callback);\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n\nvoid Screen1View::customContainer1Trigger1CallbackHandler()\n{\n    //Your code here.\n}\n")),(0,r.kt)("h2",C({},{id:"custom-actions"}),"\u81ea\u5b9a\u4e49\u64cd\u4f5c"),(0,r.kt)("p",null,"\u754c\u9762\u548c\u81ea\u5b9a\u4e49\u5bb9\u5668\u80fd\u591f\u521b\u5efa\u81ea\u5b9a\u4e49\u64cd\u4f5c\u3002 \u5b83\u4eec\u4ee5C++\u865a\u51fd\u6570\u7684\u65b9\u6cd5\u5f62\u5f0f\u751f\u6210\uff0c\u53ef\u4ece\u4ea4\u4e92\u7cfb\u7edf\u6216\u7528\u6237\u4ee3\u7801\u6267\u884c\u3002 \u81ea\u5b9a\u4e49\u64cd\u4f5c\u7684\u5b9e\u73b0\u548c\u884c\u4e3a\u65e2\u53ef\u4ee5\u5728\u4ea4\u4e92\u7cfb\u7edf\u914d\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5728\u7528\u6237\u4ee3\u7801\u7c7b\u6587\u4ef6\u4e2d\u91cd\u5199\u751f\u6210\u7684C++\u65b9\u6cd5\u8fdb\u884c\u914d\u7f6e\u3002"),(0,r.kt)("h3",C({},{id:"adding-custom-actions"}),"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u64cd\u4f5c"),(0,r.kt)("p",null,"\u901a\u8fc7\u754c\u9762\u6216\u81ea\u5b9a\u4e49\u5bb9\u5668\u7684\u5c5e\u6027\u9009\u9879\u5361\u6dfb\u52a0\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\uff0c\u65b9\u6cd5\u662f\u70b9\u51fb\u4e0b\u56fe\u4e2d\u7a81\u51fa\u663e\u793a\u7684",(0,r.kt)("strong",{parentName:"p"},"ACTIONS"),"\u90e8\u5206\u4e2d\u7684\u201c+\u201d\u6309\u94ae\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/adding-custom-action-4.17.webp",mdxType:"Figure"},"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u64cd\u4f5c"),(0,r.kt)("p",null,"\u5728\u521b\u5efa\u81ea\u5b9a\u4e49\u64cd\u4f5c\u540e\uff0c\u4f1a\u6709\u66f4\u591a\u9009\u9879\u53ef\u4f9b\u4f7f\u7528\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/editing-custom-action-4.17.webp",mdxType:"Figure"},"\u7f16\u8f91\u81ea\u5b9a\u4e49\u64cd\u4f5c"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u540d\u79f0"),(0,r.kt)("br",null)," \u5728\u6b64\u6307\u5b9a\u7684\u540d\u79f0\u5c06\u5728\u4ea4\u4e92\u7cfb\u7edf\u548c\u751f\u6210\u7684\u4ee3\u7801\u6587\u4ef6\u4e2d\u7684\u8fdb\u4e00\u6b65\u5f15\u7528\uff0c\u5982\u4e0b\u9762\u7684\u4ee3\u7801\u793a\u4f8b\u6240\u793a\uff1a"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"CustomContainer1Base.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{11}","{11}":!0}),"class CustomContainer1Base : public touchgfx::Container\n{\npublic:\n    CustomContainer1Base();\n    virtual ~CustomContainer1Base() {}\n    virtual void initialize();\n\n    /*\n     * Custom Actions\n     */\n    virtual void action1();\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\nprivate:\n\n};\n")),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"CustomContainer1Base.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{12-15}","{12-15}":!0}),"CustomContainer1Base::CustomContainer1Base()\n{\n    setWidth(250);\n    setHeight(250);\n}\n\nvoid CustomContainer1Base::initialize()\n{\n\n}\n\nvoid CustomContainer1Base::action1()\n{\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf4\u660e"),(0,r.kt)("br",null)," \u6b64\u5904\u5199\u5165\u7684\u6587\u672c\u5c06\u7528\u5728\u4ea4\u4e92\u7cfb\u7edf\u4e2d\uff0c\u5728\u4ea4\u4e92\u7cfb\u7edf\u4e2d\u9009\u4e2d\u64cd\u4f5c\u65f6\uff0c\u5c06\u9f20\u6807\u5149\u6807\u60ac\u505c\u5728\u64cd\u4f5c\u4e0a\u53ef\u663e\u793a\u6b64\u6587\u672c\u3002 \u5982\u679c\u6ca1\u6709\u6307\u5b9a\u8bf4\u660e\uff0c\u5c06\u6309\u7167\u4ee5\u4e0b\u6a21\u5f0f\u521b\u5efa\u6807\u51c6\u8bf4\u660e\uff0c\u5982\u4ece\u4ea4\u4e92\u7cfb\u7edf\u8c03\u7528\u81ea\u5b9a\u4e49\u64cd\u4f5c\u4e00\u8282\u4e2d\u6240\u793a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"\u5728<Screen or Custom Container Name>"),"\u4e0a\u8c03\u7528","<","Name",">","\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," \u7c7b\u578b ")," ",(0,r.kt)("br",null)," \u542f\u7528\u201c\u7c7b\u578b\u201d\u5c06\u80fd\u521b\u5efa\u64cd\u4f5c\uff0c\u64cd\u4f5c\u9700\u8981\u7ed9\u5b9a\u7c7b\u578b\u7684\u53c2\u6570\u3002 \u7c7b\u578b\u65e2\u53ef\u4ee5\u4ece\u5217\u8868\u4e2d\u9009\u62e9\uff0c\u4e5f\u53ef\u4ee5\u624b\u52a8\u8f93\u5165\u3002 \u4e0b\u9762\u663e\u793a\u7684\u662f\u5f53\u9009\u62e9",(0,r.kt)("inlineCode",{parentName:"p"},"bool"),"\u7c7b\u578b\u65f6\u751f\u6210\u7684\u4ee3\u7801\u3002"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"CustomContainer1Base.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{11}","{11}":!0}),"/*\n * Custom Actions\n */\nvirtual void action1(bool value);\n")),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"CustomContainer1Base.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp"}),"void CustomContainer1Base::action1(bool value)\n{\n\n}\n")),(0,r.kt)("h3",C({},{id:"calling-custom-action-from-interactions"}),"\u4ece\u4ea4\u4e92\u7cfb\u7edf\u8c03\u7528\u81ea\u5b9a\u4e49\u64cd\u4f5c"),(0,r.kt)("p",null,"\u5728\u521b\u5efa\u81ea\u5b9a\u4e49\u64cd\u4f5c\u540e\uff0c\u53ef\u4ee5\u4ece\u4ea4\u4e92\u7cfb\u7edf\u5185\u90e8\u6267\u884c\u64cd\u4f5c\u3002 \u5982\u679c\u5728\u81ea\u5b9a\u4e49\u5bb9\u5668\u4e0a\u521b\u5efa\u64cd\u4f5c\u5e76\u5c06\u81ea\u5b9a\u4e49\u5bb9\u5668\u6dfb\u52a0\u5230\u754c\u9762\uff0c\u5219\u53ef\u4ee5\u4ece\u754c\u9762\u201c\u4ea4\u4e92\u201d\u9009\u9879\u5361\u6267\u884c\u64cd\u4f5c\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/executing-custom-action-from-interaction-4.17.webp",mdxType:"Figure"},"\u4ece\u201c\u4ea4\u4e92\u201d\u9009\u9879\u5361\u6267\u884c\u81ea\u5b9a\u4e49\u64cd\u4f5c"),(0,r.kt)("p",null,"\u5728\u9009\u62e9\u64cd\u4f5c\u540e\uff0c\u5982\u679c\u6709\u540c\u4e00\u81ea\u5b9a\u4e49\u5bb9\u5668\u7684\u591a\u4e2a\u7ec4\u4ef6\uff0c\u5219\u9700\u8981\u9009\u62e9\u7ec4\u4ef6\u3002 \u4f46\u662f\uff0c\u5982\u679c\u53ea\u6709\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u5b83\u4f1a\u88ab\u81ea\u52a8\u586b\u5165\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u81ea\u5b9a\u4e49\u64cd\u4f5c\u6709\u542f\u7528\u7684\u7c7b\u578b\uff0c\u5219\u5fc5\u987b\u5982\u4e0b\u56fe\u6240\u793a\u6307\u5b9a\u53c2\u6570\u503c\u6216\u53d8\u91cf\uff0c\u5176\u4e2d\u5df2\u5c06\u201c\u7c7b\u578b\u201d\u6307\u5b9a\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"bool"),"\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/parameter-specification-when-executing-custom-action-from-interaction-4.17.webp",mdxType:"Figure"},"\u4e3a\u4ece\u4ea4\u4e92\u7cfb\u7edf\u6267\u884c\u7684\u81ea\u5b9a\u4e49\u64cd\u4f5c\u6307\u5b9a\u53c2\u6570"),(0,r.kt)("h3",C({},{id:"calling-custom-action-from-user-code"}),"\u4ece\u7528\u6237\u4ee3\u7801\u8c03\u7528\u81ea\u5b9a\u4e49\u64cd\u4f5c"),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4ece\u7528\u6237\u4ee3\u7801\u76f4\u63a5\u8c03\u7528\u81ea\u5b9a\u4e49\u64cd\u4f5c\u3002 \u5728\u4e0b\u9762\u7684\u4ee3\u7801\u793a\u4f8b\u4e2d\uff0c\u521b\u5efa\u4e86\u4e00\u4e2a\u81ea\u5b9a\u4e49\u5bb9\u5668\uff0c\u5b83\u5177\u6709\u540d\u4e3a\u201caction1\u201d\u7684\u81ea\u5b9a\u4e49\u64cd\u4f5c\u3002 \u901a\u8fc7\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\u5c06\u81ea\u5b9a\u4e49\u5bb9\u5668\u6dfb\u52a0\u5230\u754c\u9762\u4e0a\u3002"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{4-6}","{4-6}":!0}),"Screen1ViewBase::Screen1ViewBase()\n{\n\n    customContainer11.setXY(50, 11);\n\n    add(customContainer11);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n    customContainer11.initialize();\n}\n")),(0,r.kt)("p",null,"\u53ef\u5728\u7528\u6237\u4ee3\u7801\u7c7b\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1View"),"\uff08\u7ee7\u627f\u81ea",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1ViewBase"),"\uff09\u8c03\u7528\u81ea\u5b9a\u4e49\u64cd\u4f5c\u201caction1\u201d\uff0c\u5982\u4e0b\u6587\u6240\u793a\u3002"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{3}","{3}":!0}),"Screen1View::Screen1View()\n{\n    customContainer11.action1();\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n")),(0,r.kt)("h3",C({},{id:"adding-behaviour-to-custom-actions-from-interactions"}),"\u4ece\u4ea4\u4e92\u7cfb\u7edf\u4e3a\u81ea\u5b9a\u4e49\u64cd\u4f5c\u6dfb\u52a0\u884c\u4e3a"),(0,r.kt)("p",null,"\u53ef\u4f7f\u7528\u4ea4\u4e92\u7cfb\u7edf\u4e3a\u81ea\u5b9a\u4e49\u64cd\u4f5c\u6dfb\u52a0\u884c\u4e3a\u3002 \u53ea\u9700\u8f6c\u81f3\u62e5\u6709\u81ea\u5b9a\u4e49\u64cd\u4f5c\u7684\u754c\u9762\u6216\u81ea\u5b9a\u4e49\u5bb9\u5668\u7684\u201c\u4ea4\u4e92\u201d\u9009\u9879\u5361\uff0c\u521b\u5efa\u65b0\u7684\u4ea4\u4e92\u5e76\u9009\u62e9\u201c\u81ea\u5b9a\u4e49\u64cd\u4f5c\u201d\u4f5c\u4e3a\u89e6\u53d1\u6761\u4ef6\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/selecting-custom-action-as-trigger-on-interaction-4.17.webp",mdxType:"Figure"},"\u5728\u4ea4\u4e92\u7cfb\u7edf\u4e0a\u9009\u62e9\u81ea\u5b9a\u4e49\u64cd\u4f5c\u4f5c\u4e3a\u89e6\u53d1\u6761\u4ef6"),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u5728\u4efb\u4f55\u65f6\u5019\u8c03\u7528\u81ea\u5b9a\u4e49\u64cd\u4f5c\uff0c\u90fd\u5c06\u6267\u884c\u5728\u4ea4\u4e92\u4e2d\u5b9a\u4e49\u7684\u4efb\u4f55\u64cd\u4f5c\u3002"),(0,r.kt)("h3",C({},{id:"adding-behaviour-to-custom-actions-from-user-code"}),"\u4ece\u7528\u6237\u4ee3\u7801\u4e3a\u81ea\u5b9a\u4e49\u64cd\u4f5c\u6dfb\u52a0\u884c\u4e3a"),(0,r.kt)("p",null,"\u81ea\u5b9a\u4e49\u64cd\u4f5c\u8fd8\u53ef\u901a\u8fc7\u91cd\u5199\u7528\u6237\u4ee3\u7801\u7c7b",(0,r.kt)("inlineCode",{parentName:"p"},"CustomContainer1"),"\uff08\u7ee7\u627f\u81ea",(0,r.kt)("inlineCode",{parentName:"p"},"CustomContainer1Base"),"\uff09\u4e2d\u7684\u64cd\u4f5c\u6765\u5b9e\u73b0\u5176\u884c\u4e3a\u3002"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"CustomContainer1.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{9}","{9}":!0}),"class CustomContainer1 : public CustomContainer1Base\n{\npublic:\n    CustomContainer1();\n    virtual ~CustomContainer1() {}\n\n    virtual void initialize();\n\n    void action1();\n\nprotected:\n};\n")),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"CustomContainer1.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{11-14}","{11-14}":!0}),"CustomContainer1::CustomContainer1()\n{\n\n}\n\nvoid CustomContainer1::initialize()\n{\n    CustomContainer1Base::initialize();\n}\n\nvoid CustomContainer1::action1()\n{\n    //Your code here\n}\n")),(0,r.kt)(a.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(o.Z,{to:"../../../tutorials/tutorial-05",mdxType:"Link"},"Tutorial 5: Creating Custom Triggers and Actions"))))}w.isMDXComponent=!0}}]);