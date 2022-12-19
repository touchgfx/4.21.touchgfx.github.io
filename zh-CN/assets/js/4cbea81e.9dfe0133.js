"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8183],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),s=i,m=d["".concat(u,".").concat(s)]||d[s]||g[s]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,l=(0,i.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=i},93054:function(e,t,n){var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=l},80766:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return b},default:function(){return y},frontMatter:function(){return h},metadata:function(){return f},toc:function(){return v}});var r=n(3905),i=n(22425),a=n(44035),l=n(93054),o=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&s(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&s(e,n,t[n]);return e};const h={id:"debugging",title:"\u8c03\u8bd5"},b=void 0,f={unversionedId:"development/ui-development/working-with-touchgfx/debugging",id:"development/ui-development/working-with-touchgfx/debugging",title:"\u8c03\u8bd5",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/debugging.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/debugging",permalink:"/4.21/zh-CN/docs/development/ui-development/working-with-touchgfx/debugging",draft:!1,tags:[],version:"current",frontMatter:{id:"debugging",title:"\u8c03\u8bd5"},sidebar:"docs",previous:{title:"\u7f16\u8bd1& \u70e7\u5f55",permalink:"/4.21/zh-CN/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing"},next:{title:"\u793a\u4f8b\u548c\u7279\u5b9a\u677f\u5361\u7684\u6f14\u793a",permalink:"/4.21/zh-CN/docs/development/ui-development/working-with-touchgfx/examples"}},k={},v=[{value:"\u76ee\u6807\u677f\u5361\u8c03\u8bd5",id:"target-debugging",level:2},{value:"\u6a21\u62df\u5668\u8c03\u8bd5",id:"simulator-debugging",level:2},{value:"\u4f7f\u7528DebugPrinter",id:"using-the-debugprinter",level:2},{value:"DebugPrinter\u7c7b",id:"debugprinter-classes",level:3}],D={toc:v};function y(e){var t,n=e,{components:o}=n,s=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},D),s),u(t,p({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u7531\u4e8eTouchGFX\u5e94\u7528\u7a0b\u5e8f\u662f\u4e00\u7ec4\u7531TouchGFX Designer\u3001TouchGFX Generator\u751f\u6210\u5e76\u7531\u5f00\u53d1\u4eba\u5458\u7f16\u5199\u7684C++\u6587\u4ef6\uff0c\u56e0\u6b64\u53ef\u4ee5\u50cf\u4efb\u4f55\u5176\u4ed6C++\u5e94\u7528\u7a0b\u5e8f\u4e00\u6837\u8c03\u8bd5\u3002"),(0,r.kt)("h2",m({},{id:"target-debugging"}),"\u76ee\u6807\u677f\u5361\u8c03\u8bd5"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u4f7f\u7528\u50cfIAR Workbench\u3001Keil uVision\u6216STM32CubeIDE\u8fd9\u6837\u7684IDE\uff0c\u5219\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528IDE\u7684\u53ef\u7528\u673a\u5236\u8fdb\u884c\u76ee\u6807\u677f\u5361\u8c03\u8bd5\u3002 \u7531TouchGFX Generator\u6216\u76f4\u63a5\u4eceTouchGFX\u677f\u4ef6\u8bbe\u7f6e\u751f\u6210\u7684TouchGFX\u9879\u76ee\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u9009\u5b9a\u7684\u5de5\u5177\u94fe\u8fdb\u884c\u8c03\u8bd5\u3002"),(0,r.kt)("p",null,"Board bring up\u4ee3\u7801\u548cTouchGFX AL\u53ea\u5728\u76ee\u6807\u677f\u5361\u4e0a\u6267\u884c\uff0c\u56e0\u6b64\u9700\u8981\u5728\u90a3\u90e8\u5206\u8fdb\u884c\u8c03\u8bd5\u3002 \u5e94\u7528\u7a0b\u5e8f\u7684UI\u90e8\u5206\u53ef\u4ee5\u5728\u76ee\u6807\u677f\u5361\u6216\u4f7f\u7528\u6a21\u62df\u5668\u8fdb\u884c\u8c03\u8bd5\u3002 \u5728\u76ee\u6807\u677f\u5361\u4e0a\uff0c\u60a8\u901a\u5e38\u4f1a\u8c03\u8bd5\u6027\u80fd\u95ee\u9898\u7b49\uff0c\u5982\u52a8\u753b\u901f\u5ea6\u3001\u66f4\u65b0\u9891\u7387\u548c\u54cd\u5e94\u80fd\u529b\u3002 \u5176\u4ed6\u7279\u5b9a\u4e8eUI\u7684\u95ee\u9898\u53ef\u4ee5\u5728\u76ee\u6807\u4e0a\u8c03\u8bd5\uff0c\u4f46\u4f7f\u7528\u6a21\u62df\u5668\u8c03\u8bd5\u901a\u5e38\u4f1a\u66f4\u5feb\u3002"),(0,r.kt)("h2",m({},{id:"simulator-debugging"}),"\u6a21\u62df\u5668\u8c03\u8bd5"),(0,r.kt)("p",null,"\u8c03\u8bd5\u4e0eUI\u76f8\u5173\u7684\u95ee\u9898\uff0c\u5982\u52a8\u753b\u52a8\u4f5c\u3001\u8f6c\u6362\u3001\u5143\u7d20\u66f4\u65b0\u3001\u7a0b\u5e8f\u903b\u8f91\u7b49\u7b49\uff1b\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528\u6a21\u62df\u5668\u8fdb\u884c\u6d4b\u8bd5\u548c\u8c03\u8bd5\u6bd4\u6bcf\u6b21\u70e7\u5f55\u677f\u5361\u8981\u9ad8\u6548\u5f97\u591a\u3002"),(0,r.kt)("p",null,"TouchGFX\u5e94\u7528\u7a0b\u5e8f\u8fd8\u652f\u6301Visual Studio\uff0c\u5e76\u4e3a\u5176\u63d0\u4f9b\u548c\u7ef4\u62a4\u4e00\u4e2a\u9879\u76ee\u6587\u4ef6\u3002 \u4f7f\u7528Visual Studio\u65f6\uff0c\u53ef\u4ee5\u5728\u8c03\u8bd5\u6a21\u5f0f\u4e0b\u8fd0\u884c\u6a21\u62df\u5668\uff0c\u53ef\u4ee5\u5229\u7528IDE\u7684\u6240\u6709\u8c03\u8bd5\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u8981\u4f7f\u7528\u6a21\u62df\u5668\u8fdb\u884c\u8c03\u8bd5\uff0c\u60a8\u53ef\u4ee5\u4e0d\u5c40\u9650\u4e8eVisual Studio\u3002 \u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u901a\u8fc7GCC\u8fdb\u884c\u7f16\u8bd1\uff0c\u5982\u679c\u4f60\u5728\u4f7f\u7528\u4e00\u4e2a\u4e0d\u540c\u7684IDE, \u53ef\u80fd\u5728\u914d\u7f6e\u8c03\u8bd5\u4e00\u4e2aGCC\u7f16\u8bd1\u901a\u8fc7\u8fc7\u7684\u9879\u76ee\u3002 \u7136\u800c, \u5bf9\u4e8e\u4f60\u9009\u62e9\u7684IDE, \u4f60\u9700\u8981\u81ea\u5df1\u8fdb\u884c\u914d\u7f6e."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/debugging/visual-studio.webp",width:"640",mdxType:"Figure"},"\u5728Visual Studio\u4e2d\u8c03\u8bd5"),(0,r.kt)("h2",m({},{id:"using-the-debugprinter"}),"\u4f7f\u7528DebugPrinter"),(0,r.kt)("p",null,"DebugPrinter\u7c7b\u662f\u4e00\u79cd\u5728\u663e\u793a\u5c4f\u4e0a\u6253\u5370\u8c03\u8bd5\u6d88\u606f\u7684\u7b80\u5355\u65b9\u6cd5\uff0c\u65e0\u9700\u5411\u5c4f\u5e55\u6dfb\u52a0TextArea\u6216\u5176\u4ed6\u63a7\u4ef6\u3002 \u4f8b\u5982\uff0c\u8fd9\u79cd\u65b9\u6cd5\u53ef\u7528\u4e8e\u663e\u793a\u6765\u81ea\u540e\u7aef\u7684\u4e8b\u4ef6\u3001\u6216FPS\u6216\u6e32\u67d3\u65f6\u95f4\u7b49\u6d4b\u91cf\u503c\u3002"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528DebugPrinter\u4e4b\u524d\uff0c\u9700\u8981\u5206\u914d\u4e00\u4e2a\u5b9e\u4f8b\u5e76\u5c06\u5176\u4f20\u9012\u7ed9Application\u7c7b\u3002 This can be done e.g. in the constructor of FrontendApplication."),(0,r.kt)("p",null,"The debug printer needs to be compatible with the framebuffer format. The table below shows the available class names. Here we add a 16bpp debug printer (compatible with LCD16bpp) in ",(0,r.kt)("inlineCode",{parentName:"p"},"gui/src/common/FrontendApplication.cpp"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/lcd/LCD16DebugPrinter.hpp>\n\nLCD16DebugPrinter lcd16DebugPrinter; // Global object\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n  : FrontendApplicationBase(m, heap)\n{\n  lcd16DebugPrinter.setPosition(0, 0, 240, 40);\n  lcd16DebugPrinter.setScale(2);\n  lcd16DebugPrinter.setColor(0x00); //black\n  Application::setDebugPrinter(&lcd16DebugPrinter);\n}\n")),(0,r.kt)("p",null,"Here we have configured the DebugPrinter to write in the upper left 240 x 40 pixels. In your application you can now print a string using:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),'#include <stdio.h>\n\nchar debugStringBuffer[30];\nvoid updateDebugString()\n{\n  static int count = 0;\n  count++;\n  snprintf(debugStringBuffer, sizeof(debugStringBuffer), "tick: %d", count);\n  Application::getDebugPrinter()->setString(debugStringBuffer);\n  Application::invalidateDebugRegion();\n}\n')),(0,r.kt)("p",null,"You don't have to call the DebugPrinter::setString method more than once in your application. But call the invalidateDebugRegion when you have changed the content of your buffer. This will make the DebugPrinter draw the new content. The DebugPrinter will also redraw if the ordinary Widgets in the area covered by DebugPrinter are redrawn."),(0,r.kt)(l.Z,{mdxType:"Note"},"Characters from ASCII 32 (space) to ASCII 126 ('~') are available."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/debugging/debugprinter.webp",mdxType:"Figure"},"\u4f7f\u7528DebugPrinter"),(0,r.kt)("h3",m({},{id:"debugprinter-classes"}),"DebugPrinter\u7c7b"),(0,r.kt)("p",null,"DebugPrinter\u5b9e\u4f8b\u5fc5\u987b\u517c\u5bb9\u6240\u4f7f\u7528\u7684LCD\u7c7b\u3002 \u8be5\u8868\u5217\u51fa\u4e86DebugPrinter\u7c7b\u540d\u79f0\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"LCD \u7c7b"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"DebugPrinter\u7c7b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD1bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD1DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD2bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD2DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD4bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD4DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD8bpp_ARGB2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD8ARGB2222DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD8bpp_ABGR2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD8ABGR2222DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD8bpp_RGBA2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD8RGBA2222DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD8bpp_BGRA2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD8BGRA2222DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD16bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD16DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD16bppSerialFlash"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD16DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD24bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD24DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD32bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD32DebugPrinter")))),(0,r.kt)("p",null,"\u4f7f\u7528\u4e0e\u6b63\u5728\u4f7f\u7528\u7684LCD\u7c7b\u5339\u914d\u7684DebugPrinter\u7c7b\u3002"),(0,r.kt)("p",null,"For Simulator projects the LCD instance is created in ",(0,r.kt)("em",{parentName:"p"},"generated/simulator/src/mainBase.cpp"),". For target projects the instance is created in ",(0,r.kt)("em",{parentName:"p"},"TouchGFX/target/generated/TouchGFXConfiguration.cpp"),":"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"TouchGFX/target/generated/TouchGFXConfiguration.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"...\nstatic LCD16bpp display;\n...\n")),(0,r.kt)("p",null,"You can check these files to verify your LCD class name."))}y.isMDXComponent=!0}}]);