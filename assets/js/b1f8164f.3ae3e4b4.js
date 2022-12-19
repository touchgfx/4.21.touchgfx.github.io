"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2014],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,m=s["".concat(u,".").concat(d)]||s[d]||g[d]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}t.Z=o},39071:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return b},default:function(){return D},frontMatter:function(){return h},metadata:function(){return f},toc:function(){return y}});var r=n(3905),a=n(22425),i=n(44035),o=n(93054),l=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&d(e,n,t[n]);return e};const h={id:"debugging",title:"Debugging"},b=void 0,f={unversionedId:"development/ui-development/working-with-touchgfx/debugging",id:"development/ui-development/working-with-touchgfx/debugging",title:"Debugging",description:"",source:"@site/docs/development/ui-development/working-with-touchgfx/debugging.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/debugging",permalink:"/4.21/docs/development/ui-development/working-with-touchgfx/debugging",draft:!1,tags:[],version:"current",frontMatter:{id:"debugging",title:"Debugging"},sidebar:"docs",previous:{title:"Compiling & Flashing",permalink:"/4.21/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing"},next:{title:"Examples and Board Specific Demos",permalink:"/4.21/docs/development/ui-development/working-with-touchgfx/examples"}},k={},y=[{value:"Target Debugging",id:"target-debugging",level:2},{value:"Simulator Debugging",id:"simulator-debugging",level:2},{value:"Using the DebugPrinter",id:"using-the-debugprinter",level:2},{value:"DebugPrinter Classes",id:"debugprinter-classes",level:3}],v={toc:y};function D(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},v),d),u(t,c({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"As a TouchGFX application is a set of C++ files generated by TouchGFX Designer, TouchGFX Generator and written by the developer, it can be debugged as any other C++ application."),(0,r.kt)("h2",m({},{id:"target-debugging"}),"Target Debugging"),(0,r.kt)("p",null,"If you are using an IDE like IAR Workbench, Keil uVision or STM32CubeIDE, debugging on target is straight forward using the available mechanisms of that IDE. TouchGFX projects generated by TouchGFX Generator or directly from a TouchGFX Board Setup is ready for debugging using the selected tool chain."),(0,r.kt)("p",null,"Board bring up code and TouchGFX AL is executed only on your target board and needs to be debugged there. The UI part of your application can be debugged either on target or using the simulator. On target you will typically debug things like performance issues, such as animation speed, update frequency and responsiveness. Other UI specific issues can be debugged on target but is often faster to debug using the simulator."),(0,r.kt)("h2",m({},{id:"simulator-debugging"}),"Simulator Debugging"),(0,r.kt)("p",null,"Debugging UI related issues such as animation movements, transitions, element updates, program logic and so on, is in most cases much more efficient to test and debug using the simulator instead of flashing your board each time."),(0,r.kt)("p",null,"TouchGFX applications comes with support for Visual Studio and supplies and maintains a project file for it. Using Visual Studio you are able to run the simulator in debug mode, utilizing all the debug features of the IDE."),(0,r.kt)("p",null,"You are not restricted to Visual Studio if you want to debug using the simulator. The application can be compiled with GCC and if you are using a different IDE this can most likely be set up to debug a GCC compiled project. However, you need to configure your IDE to do this on your own."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/debugging/visual-studio.webp",width:"640",mdxType:"Figure"},"Debugging in Visual Studio"),(0,r.kt)("h2",m({},{id:"using-the-debugprinter"}),"Using the DebugPrinter"),(0,r.kt)("p",null,"The DebugPrinter class is an easy way to print debug messages on the display without adding a TextArea or other widgets to the screens. For example, this can be used to show events from a backend or measurements like FPS or rendering time."),(0,r.kt)("p",null,"Before you can use the DebugPrinter you need to allocate an instance and pass it to the Application class. This can be done e.g. in the constructor of FrontendApplication."),(0,r.kt)("p",null,"The debug printer needs to be compatible with the framebuffer\nformat. The table below shows the available class names. Here we add a\n16bpp debug printer (compatible with LCD16bpp) in\n",(0,r.kt)("inlineCode",{parentName:"p"},"gui/src/common/FrontendApplication.cpp"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/lcd/LCD16DebugPrinter.hpp>\n\nLCD16DebugPrinter lcd16DebugPrinter; // Global object\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n  : FrontendApplicationBase(m, heap)\n{\n  lcd16DebugPrinter.setPosition(0, 0, 240, 40);\n  lcd16DebugPrinter.setScale(2);\n  lcd16DebugPrinter.setColor(0x00); //black\n  Application::setDebugPrinter(&lcd16DebugPrinter);\n}\n")),(0,r.kt)("p",null,"Here we have configured the DebugPrinter to write in the upper left 240 x 40 pixels.\nIn your application you can now print a string using:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),'#include <stdio.h>\n\nchar debugStringBuffer[30];\nvoid updateDebugString()\n{\n  static int count = 0;\n  count++;\n  snprintf(debugStringBuffer, sizeof(debugStringBuffer), "tick: %d", count);\n  Application::getDebugPrinter()->setString(debugStringBuffer);\n  Application::invalidateDebugRegion();\n}\n')),(0,r.kt)("p",null,"You don't have to call the DebugPrinter::setString method more than\nonce in your application. But call the invalidateDebugRegion when you\nhave changed the content of your buffer. This will make the\nDebugPrinter draw the new content. The DebugPrinter will also redraw\nif the ordinary Widgets in the area covered by DebugPrinter are\nredrawn."),(0,r.kt)(o.Z,{mdxType:"Note"},"Characters from ASCII 32 (space) to ASCII 126 ('~') are available."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/debugging/debugprinter.webp",mdxType:"Figure"},"Using the DebugPrinter"),(0,r.kt)("h3",m({},{id:"debugprinter-classes"}),"DebugPrinter Classes"),(0,r.kt)("p",null,"The DebugPrinter instance must be compatible to the LCD class used. This table lists the DebugPrinter class names:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"LCD class"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"DebugPrinter class"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD1bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD1DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD2bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD2DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD4bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD4DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD8bpp_ARGB2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD8ARGB2222DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD8bpp_ABGR2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD8ABGR2222DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD8bpp_RGBA2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD8RGBA2222DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD8bpp_BGRA2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD8BGRA2222DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD16bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD16DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD16bppSerialFlash"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD16DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD24bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD24DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD32bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LCD32DebugPrinter")))),(0,r.kt)("p",null,"Use the DebugPrinter class that matches the LCD class you are using."),(0,r.kt)("p",null,"For Simulator projects the LCD instance is created in\n",(0,r.kt)("em",{parentName:"p"},"generated/simulator/src/mainBase.cpp"),". For target projects the\ninstance is created in\n",(0,r.kt)("em",{parentName:"p"},"TouchGFX/target/generated/TouchGFXConfiguration.cpp"),":"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"TouchGFX/target/generated/TouchGFXConfiguration.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"...\nstatic LCD16bpp display;\n...\n")),(0,r.kt)("p",null,"You can check these files to verify your LCD class name."))}D.isMDXComponent=!0}}]);