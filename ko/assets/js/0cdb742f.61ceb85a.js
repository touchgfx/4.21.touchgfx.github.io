"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1406],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,h=m["".concat(s,".").concat(p)]||m[p]||u[p]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}t.Z=o},16763:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return y}});var r=n(3905),a=n(44035),i=n(93054),o=n(22425),l=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(d)for(var n of d(t))m.call(t,n)&&p(e,n,t[n]);return e};const f={id:"04-enable-external-ram",title:"4. External RAM",sidebar_label:"4. External RAM"},g=void 0,b={unversionedId:"development/board-bring-up/how-to/04-enable-external-ram",id:"development/board-bring-up/how-to/04-enable-external-ram",title:"4. External RAM",description:"",source:"@site/docs/development/board-bring-up/how-to/04-enable-external-ram.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/04-enable-external-ram",permalink:"/4.21/ko/docs/development/board-bring-up/how-to/04-enable-external-ram",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"04-enable-external-ram",title:"4. External RAM",sidebar_label:"4. External RAM"},sidebar:"docs",previous:{title:"3. Display with framebuffer in internal RAM",permalink:"/4.21/ko/docs/development/board-bring-up/how-to/03-display-internal"},next:{title:"5. Display with framebuffer in external RAM",permalink:"/4.21/ko/docs/development/board-bring-up/how-to/05-display-external"}},k={},y=[{value:"Motivation",id:"motivation",level:2},{value:"Goal",id:"goal",level:2},{value:"Verification",id:"verification",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Do",id:"do",level:2},{value:"Further configuration",id:"further-configuration",level:3},{value:"Testing the RAM",id:"testing-the-ram",level:3},{value:"Test RAM is visible in the debugger.",id:"test-ram-is-visible-in-the-debugger",level:4},{value:"RAM is readable and writeable in the whole range",id:"ram-is-readable-and-writeable-in-the-whole-range",level:4},{value:"Performance is as expected",id:"performance-is-as-expected",level:4}],v={toc:y};function w(e){var t,n=e,{components:l}=n,p=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&d)for(var r of d(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},v),p),s(t,c({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("h2",h({},{id:"motivation"}),"Motivation"),(0,r.kt)("p",null,"In this step we will enable the external SDRAM. External RAM is often\nrequired in graphical applications as the framebuffer is too big\nto fit into the internal RAM in many resolutions. Some applications use two or three\nframebuffers, making external RAM even more a necessity."),(0,r.kt)(i.Z,{mdxType:"Note"},"Skip this step if external RAM is not relevant for your board bring up."),(0,r.kt)("p",null,"When the framebuffer is to be placed in external RAM it is important\nthat we ensure that the external RAM"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can be read and written."),(0,r.kt)("li",{parentName:"ul"},"Runs at desired (typically maximum) speed.")),(0,r.kt)("h2",h({},{id:"goal"}),"Goal"),(0,r.kt)("p",null,"The goal in this section is to enable the external RAM and read and\nwrite data from it."),(0,r.kt)("h3",h({},{id:"verification"}),"Verification"),(0,r.kt)("p",null,"Here are the verification points for this section:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),"Verification Point"),(0,r.kt)("th",h({parentName:"tr"},{align:null}),"Rationale"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"External RAM is readable"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"External RAM can be used for framebuffer location")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"External RAM writable"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"External RAM can be used for framebuffer location")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"External RAM Performance"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"Graphics performance is acceptable with framebuffer in external RAM")))),(0,r.kt)("h2",h({},{id:"prerequisites"}),"Prerequisites"),(0,r.kt)("p",null,"The following are the prerequisites for this step:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Information about the RAM, typically a datasheet"),(0,r.kt)("li",{parentName:"ul"},"Information about the connections between the MCU and the external RAM")),(0,r.kt)("h2",h({},{id:"do"}),"Do"),(0,r.kt)("p",null,"The external SDRAM controller is configured in STM32CubeMX under Connectivity -> FMC -> SDRAM1:"),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/external-ram/cubemx-01.png",noShadow:!1,width:"600",mdxType:"Figure"},"Configuring SDRAM"),(0,r.kt)("p",null,'The AHB clock (HCLK) is reference clock for the FMC memory\ncontroller. Check the clock frequency under "Clock Configuration" and\nuse that to calculate the various SDRAM clock cycles.'),(0,r.kt)("p",null,"Remember to configure all the GPIOs used for the SDRAM:"),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/external-ram/cubemx-02.png",noShadow:!1,width:"600",mdxType:"Figure"},"Configuring SDRAM GPIO"),(0,r.kt)("h3",h({},{id:"further-configuration"}),"Further configuration"),(0,r.kt)("p",null,"For some RAM chips it is necessary to do additional device specific\nconfiguration. This cannot be configured in STM32CubeMX, but must be done\nin the C code. The STM32Cube HAL contains functions to send commands to the\ndevice. Here is an example:"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"FMC_SDRAM_CommandTypeDef Command;\n\n/* Step 1: Configure a clock configuration enable command */\nCommand.CommandMode            = FMC_SDRAM_CMD_CLK_ENABLE;\nCommand.CommandTarget          = FMC_SDRAM_CMD_TARGET_BANK1;\nCommand.AutoRefreshNumber      = 1;\nCommand.ModeRegisterDefinition = 0;\n\n/* Send the command */\nHAL_SDRAM_SendCommand(&hsdram1, &Command, SDRAM_TIMEOUT);\n")),(0,r.kt)("h3",h({},{id:"testing-the-ram"}),"Testing the RAM"),(0,r.kt)("p",null,"After configuring the external RAM it is important to test it. We\nshould test at least the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RAM is visible in the debugger"),(0,r.kt)("li",{parentName:"ul"},"RAM is readable and writeable in the whole range"),(0,r.kt)("li",{parentName:"ul"},"Performance is as expected")),(0,r.kt)("p",null,"The memory controller uses a fixed address mapping of external\nmemories based on their type. Check the datasheet for your\nmicrocontroller for the addresses. SDRAM is typically mapped to\n0xC0000000 (bank1) or 0xD0000000 (bank2)."),(0,r.kt)("h4",h({},{id:"test-ram-is-visible-in-the-debugger"}),"Test RAM is visible in the debugger."),(0,r.kt)("p",null,"The first test when the RAM is enabled is to access it from the\ndebugger. This will easily show if you can read and write to the\nmemory. Just open a memory viewer on the address:"),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/external-ram/iar-01.png",noShadow:!1,width:"600",mdxType:"Figure"},"Testing memory in Bank2 at 0xD0000000 in the debugger"),(0,r.kt)("h4",h({},{id:"ram-is-readable-and-writeable-in-the-whole-range"}),"RAM is readable and writeable in the whole range"),(0,r.kt)("p",null,"The next test is to write small programs to write more data to the\nexternal memory. Preferably test the whole memory. Here is a starting\npoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"uint32_t *externalRAM = 0xC000000;\nconst uint32_t size = 1000;\n\n//write external RAM\nfor(int i = 0; i < size; i++)\n{\n    externalRAM[i] = i;\n}\n")),(0,r.kt)("p",null,"Now check the memory again in the debugger. This can reveal some types\nof error, for example if some of the address pins are not connected or\nexchanged. You should also try with different value\npatterns. Writing low numbers like 0, 1, 2, 3, will not reveal if some\nof the data pins are bad."),(0,r.kt)("p",null,"We can also read the memory with a little program:"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),'uint32_t *externalRAM = 0xC000000;\nconst uint32_t size = 1000;\n\n//read external RAM\nfor(int i = 0; i < size; i++)\n{\n    ASSERT(externalRAM[i] == i, "external RAM not as expected");\n}\n')),(0,r.kt)("p",null,"Remember that a test like this will not tell if the addresses are\nincorrect."),(0,r.kt)("p",null,"Test all memory cells. Either by running a longer loop, or by changing\nthe starting address."),(0,r.kt)("h4",h({},{id:"performance-is-as-expected"}),"Performance is as expected"),(0,r.kt)("p",null,"We need now to test the performance of the external RAM. The\nperformance is important when the framebuffer is in external memory. A\nslow memory will degrade the graphics performance of your system."),(0,r.kt)("p",null,"Test the speed of reading, writing, and modifying the RAM. Typically, a\ngraphics application copies a lot of data from one memory to\nanother. There will be a lot of writing to the framebuffer during draw\noperations, and a lot of reading when transmitting to the display. We\ncan mimic that in our test programs:"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"volatile uint32_t *externalRAM = 0xC000000;\nuint32_t sourcedata[10000];\nconst uint32_t size = 10000;\n\nint begin = HAL_GetTick();\n//write external RAM\nfor(int i = 0; i < size; i++)\n{\n    externalRAM[i] = sourcedata[i];\n}\nint end = HAL_GetTick();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"int begin = HAL_GetTick();\n//Read external RAM\nfor(int i = 0; i < size; i++)\n{\n    sourcedata[i] = externalRAM[i];\n}\nint end = HAL_GetTick();\n")),(0,r.kt)("p",null,"Graphics software reads and writes data in the framebuffer when\ne.g. blending an image on a background."),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"//Time modifying external RAM\nint begin = HAL_GetTick();\nfor(int i = 0; i < size; i++)\n{\n    externalRAM[i] += 2;\n}\nint end = HAL_GetTick();\n")),(0,r.kt)("p",null,"Depending on your memory speed and the accuracy you would like, you may\nlike to loop the tests, say 100 times, to make the results more reliable."),(0,r.kt)("p",null,"If the external RAM is clocked too fast it can result in incorrect\nvalues during read or write operations. This can be difficult to see\nwith these simpler tests, but will be visible on the display."))}w.isMDXComponent=!0}}]);