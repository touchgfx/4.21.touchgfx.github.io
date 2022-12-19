"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9912],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),h=r,f=c["".concat(s,".").concat(h)]||c[h]||p[h]||i;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children))}},88678:function(e,t,n){var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},93054:function(e,t,n){var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}t.Z=l},83729:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return k}});var a=n(3905),r=n(44035),i=n(93054),l=n(22425),o=Object.defineProperty,s=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&h(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&h(e,n,t[n]);return e};const m={id:"03-display-internal",title:"3. Display with framebuffer in internal RAM",sidebar_label:"3. Display with framebuffer in internal RAM"},g=void 0,b={unversionedId:"development/board-bring-up/how-to/03-display-internal",id:"development/board-bring-up/how-to/03-display-internal",title:"3. Display with framebuffer in internal RAM",description:"",source:"@site/docs/development/board-bring-up/how-to/03-display-internal.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/03-display-internal",permalink:"/4.21/zh-TW/docs/development/board-bring-up/how-to/03-display-internal",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"03-display-internal",title:"3. Display with framebuffer in internal RAM",sidebar_label:"3. Display with framebuffer in internal RAM"},sidebar:"docs",previous:{title:"2. CPU Running",permalink:"/4.21/zh-TW/docs/development/board-bring-up/how-to/02-cpu-running"},next:{title:"4. External RAM",permalink:"/4.21/zh-TW/docs/development/board-bring-up/how-to/04-enable-external-ram"}},y={},k=[{value:"Motivation",id:"motivation",level:2},{value:"Goal",id:"goal",level:2},{value:"Verification",id:"verification",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Do",id:"do",level:2},{value:"Parallel RGB Displays",id:"parallel-rgb-displays",level:3},{value:"Display GPIO",id:"display-gpio",level:4},{value:"LTDC Configuration",id:"ltdc-configuration",level:4},{value:"Clock Configuration",id:"clock-configuration",level:4},{value:"Setting the Framebuffer Address",id:"setting-the-framebuffer-address",level:4},{value:"Enabling LTDC interrupt",id:"enabling-ltdc-interrupt",level:4},{value:"Check the Framerate",id:"check-the-framerate",level:4},{value:"SPI Display",id:"spi-display",level:3},{value:"SPI Configuration",id:"spi-configuration",level:4},{value:"Checking the Display Colors",id:"checking-the-display-colors",level:2}],v={toc:k};function w(e){var t,n=e,{components:o}=n,h=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=f(f({},v),h),s(t,d({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("h2",f({},{id:"motivation"}),"Motivation"),(0,a.kt)("p",null,"In this step we will see the display come to life by transferring\npixel data from the internal RAM to the display.\nThis step ensures that we can transmit data to the display and that we\ncan continuously update the contents of the display."),(0,a.kt)("p",null,"In addition to transferring image data to the display we must also\nmake sure that we can continuously send new data to the display without seeing errors on the display. We are also going to measure the speed of the transfer as this has influence on the frame rate we can obtain with the display."),(0,a.kt)("p",null,"We will place a framebuffer in internal RAM as we know from last\nsection that this RAM is both readable and writable. We will update\nand transfer this framebuffer to the display repeatedly."),(0,a.kt)("p",null,"Recall that the size of the\n",(0,a.kt)("a",f({parentName:"p"},{href:"../../../basic-concepts/framebuffer"}),"framebuffer")," is calculated by this\nformula:"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"width x height x bpp")),(0,a.kt)("p",null,"So, for example, a common 16 bit display with resolution 480 x 272 will\ntake up 480x272x16/8 bytes = 261120 bytes."),(0,a.kt)("p",null,"If the display size implies a framebuffer too large to be stored in\ninternal RAM, you should not skip this step. Instead configure\nthe display controller to only update a part of the display. This way we\ncan tune the amount of RAM needed for the framebuffer and\nmake it fit internal RAM."),(0,a.kt)("p",null,"The type of display interface has a large impact on the setup and code\nneeded to transfer the framebuffer. In this section we will first\ntarget a display connected to the LTDC. If you are using e.g. a SPI\ndisplay, the code will be very different, but the tasks and goals are\nthe same."),(0,a.kt)("h2",f({},{id:"goal"}),"Goal"),(0,a.kt)("p",null,"The goal in this section is to transfer a framebuffer to the\ndisplay. You should also verify that you can modify the framebuffer\ncontent and resend the framebuffer continuously."),(0,a.kt)("h3",f({},{id:"verification"}),"Verification"),(0,a.kt)("p",null,"Here are the verification points for this section:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null}),"Verification Point"),(0,a.kt)("th",f({parentName:"tr"},{align:null}),"Rationale"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Framebuffer is shown"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Display controller or SPI is configured and running")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Updated framebuffer is shown"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"We know how to repeatedly transmit the framebuffer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Colors are correct"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"The GPIOs are correct (LTDC) and the data format of the display matches our framebuffer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Framerate is correct"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"The pixel clock and porches are configured to get the required framerate")))),(0,a.kt)("h2",f({},{id:"prerequisites"}),"Prerequisites"),(0,a.kt)("p",null,"The following are the prerequisites for this step:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Information about the display, typically a datasheet"),(0,a.kt)("li",{parentName:"ul"},"Information about the connections between the MCU and the display.")),(0,a.kt)("h2",f({},{id:"do"}),"Do"),(0,a.kt)("p",null,"Depending on the display type, the needed setup differs. But for all\ndisplay types we need a framebuffer in internal RAM. An easy way to\nallocate that memory is to just declare a global array with the\ncorrect size:"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"main.c"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"/* USER CODE BEGIN PV */\nuint16_t framebuffer[480*272];  //16 bpp framebuffer\n/* USER CODE END PV */\n")),(0,a.kt)("p",null,"If your internal RAM is not big enough to hold the array, declare a\narray corresponding to a smaller resolution, say 480x200."),(0,a.kt)("p",null,"The method to transfer the framebuffer to the display depends on the\ndisplay type. We will look at this now."),(0,a.kt)("h3",f({},{id:"parallel-rgb-displays"}),"Parallel RGB Displays"),(0,a.kt)("p",null,"We will first discuss a parallel RGB display connected to the LTDC\ncontroller on the MCU."),(0,a.kt)("p",null,"The configuration tasks for a display like this are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configure the GPIO connections to the display"),(0,a.kt)("li",{parentName:"ul"},"Configure the LTDC controller"),(0,a.kt)("li",{parentName:"ul"},"Configure the LTDC pixel clock"),(0,a.kt)("li",{parentName:"ul"},"Setting the framebuffer address"),(0,a.kt)("li",{parentName:"ul"},"Check the framerate")),(0,a.kt)("p",null,"As an illustrative example we will use a STM32F746Discovery evaluation\nkit. This board features a 480*272 display."),(0,a.kt)("h4",f({},{id:"display-gpio"}),"Display GPIO"),(0,a.kt)("p",null,"This display is running in 24 BPP mode, so we configure the 24 GPIOs\nfor the connection between the LTDC and the display. This is most\neasily done in STM32CubeMX under Multimedia -> LTDC -> GPIO Settings:"),(0,a.kt)(r.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-01.png",noShadow:!1,width:"600",mdxType:"Figure"},"Configuring display GPIOs"),(0,a.kt)("p",null,"Besides the 24 GPIOs for the pixel transfer (e.g. LTDC_B0) we also\nconfigure the 4 display control signals:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null}),"Signal"),(0,a.kt)("th",f({parentName:"tr"},{align:null}),"Function"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),"LTDC_CLK"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Pixel clock. Signals to the display when to sample the pixels from the 24 lines")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),"LTDC_DE"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Data enable. Pixels are transferred when active")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),"LTDC_HSYNC"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Horizontal synchronisation. Allows the display to find the pixel line start")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),"LTDC_VSYNC"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Vertical synchronisation. Allows the display to find the frame start")))),(0,a.kt)("p",null,"Check your hardware design and make the corresponding configurations."),(0,a.kt)("h4",f({},{id:"ltdc-configuration"}),"LTDC Configuration"),(0,a.kt)("p",null,"The LTDC configuration is found in STM32CubeMX under Multimedia -> LTDC -> Parameter\nSettings:"),(0,a.kt)(r.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-02.png",noShadow:!1,width:"600",mdxType:"Figure"},"Configuring LTDC Parameters"),(0,a.kt)("p",null,"The active width and height corresponds to the resolution of your\ndisplay. Check your display datasheet for the synchronization pulse\nwidths and the porch widths. Also pay attention to the signal polarities.\nThe values shown in grey are computed from the other values. These\nvalues are written to the LTDC registers (and can be found in the\ncode)."),(0,a.kt)("p",null,"Now go to the LTDC Layer configuration under Multimedia -> LTDC -> Layer Settings:"),(0,a.kt)(r.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-03.png",noShadow:!1,width:"600",mdxType:"Figure"},"Configuring LTDC Layer Parameters"),(0,a.kt)("p",null,"For this test and in TouchGFX in general we will only use one\nlayer. The resolution of Layer 0 should match the framebuffer\ndimension. The framebuffer address needs to be set later, so just leave\nthe address unchanged here."),(0,a.kt)("p",null,"If you declared a framebuffer array smaller than the display\nresolution, then adjust the layer size to match the framebuffer\ndimension. The LTDC will transmit the background color for the display\npixels not available in the framebuffer. It is recommended to set the\nbackground color (in the Parameter Settings tab) to something recognisable like red (Blue: 0x00,\nGreen: 0x00, Red: 0xFF)."),(0,a.kt)("h4",f({},{id:"clock-configuration"}),"Clock Configuration"),(0,a.kt)("p",null,"The clock configuration is also important. The clock must be enabled\nfor all the GPIOs and the LTDC. The pixel clock must be in the range\nacceptable by the display."),(0,a.kt)(r.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-04.png",noShadow:!1,width:"600",mdxType:"Figure"},"Clock configuration"),(0,a.kt)("p",null,"The LTDC depends on 3 clocks: HCLK, PCLK2, and LCD_CLK."),(0,a.kt)("h4",f({},{id:"setting-the-framebuffer-address"}),"Setting the Framebuffer Address"),(0,a.kt)("p",null,"In STM32CubeMX we configured the framebuffer address of layer 0 to\n0xC0000000. We need to change that to the address of our array in\ninternal RAM. This is easily done by using one of the STM32Cube Firmware HAL functions:"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"main.c"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"  /* USER CODE BEGIN 2 */\n  HAL_LTDC_SetAddress(&hltdc, (uint32_t)framebuffer, LTDC_LAYER_1);\n  /* USER CODE END 2 */\n")),(0,a.kt)("p",null,"Layers are numbered 1, 2, in the HAL functions, but 0, 1 in\nSTM32CubeMX. The LTDC is otherwise fully configured by the code generated\nby STM32CubeMX in the function ",(0,a.kt)("em",{parentName:"p"},"MX_LTDC_Init(void)"),"."),(0,a.kt)("p",null,"The LTDC controller transmits the framebuffer to the display\nrepeatedly. The image displayed depends on the values in the\nframebuffer. Try different values or patterns in the framebuffer. Use\ne.g. memset to clear the framebuffer to 0xFF to get a white display."),(0,a.kt)(i.Z,{mdxType:"Note"},"On some displays backlight must be turned on to make the frame visible."),(0,a.kt)("h4",f({},{id:"enabling-ltdc-interrupt"}),"Enabling LTDC interrupt"),(0,a.kt)("p",null,"The LTDC controller raises an interrupt for each frame, this interrupt\nmust be enabled in the NVIC (core interrupt controller) to be able to\nhandle the interrupt in your application."),(0,a.kt)(r.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-ltdc-interrupt-config.png",noShadow:!1,width:"600",mdxType:"Figure"},"LTDC interrupt configuration"),(0,a.kt)("p",null,"In addition to setting the checkmark in STM32CubeMX, the LTDC interrupts must all also manually be enabled in the code:"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"main.c"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"  /* USER CODE BEGIN LTDC_Init 2 */\n  LTDC->IER |= LTDC_IER_LIE; // Enable LTDC interrupts\n  /* USER CODE END LTDC_Init 2 */\n")),(0,a.kt)("p",null,"In the interrupt handler you must reenable the interrupt after each time it fires."),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"stm32f7xx_it.c"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{7}","{7}":!0}),"void LTDC_IRQHandler(void)\n{\n  /* USER CODE BEGIN LTDC_IRQn 0 */\n  /* USER CODE END LTDC_IRQn 0 */\n  HAL_LTDC_IRQHandler(&hltdc);\n  /* USER CODE BEGIN LTDC_IRQn 1 */\n  HAL_LTDC_ProgramLineEvent(&hltdc,0);\n  /* USER CODE END LTDC_IRQn 1 */\n}\n")),(0,a.kt)("h4",f({},{id:"check-the-framerate"}),"Check the Framerate"),(0,a.kt)("p",null,"The LTDC interrupt will be used to drive the application forward.\nYou should use a debugger to check that this interrupt is raised."),(0,a.kt)("p",null,"The time between these interrupts is the sum of clocking all the\npixels and the porches. You can adjust the porches to adjust the\nframerate. The porches were part of the LTDC configuration. It is\ncustom to lower the framerate by enhancing the vertical front porch."),(0,a.kt)("p",null,"An easy way to measure the framerate is to use the HAL_GetTick() in\nthe interrupt handler:"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"stm32f7xx_it.c"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{6-8}","{6-8}":!0}),"volatile int last = 0;\nvolatile int diff = 0;\nvoid LTDC_IRQHandler(void)\n{\n  /* USER CODE BEGIN LTDC_IRQn 0 */\n  int now = HAL_GetTick();\n  diff = now - last;\n  last = now;\n  /* USER CODE END LTDC_IRQn 0 */\n  HAL_LTDC_IRQHandler(&hltdc);\n  ...\n")),(0,a.kt)("p",null,"Remember 60 frames per second should have 1000 ms / 60 = 16 ms between each frame."),(0,a.kt)("h3",f({},{id:"spi-display"}),"SPI Display"),(0,a.kt)("p",null,"We will now discuss a display connected with an SPI bus."),(0,a.kt)("p",null,"The configuration tasks for a display like this are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configure the SPI peripheral and GPIOs"),(0,a.kt)("li",{parentName:"ul"},"Check the clocks"),(0,a.kt)("li",{parentName:"ul"},"Write or find the necessary driver code")),(0,a.kt)("h4",f({},{id:"spi-configuration"}),"SPI Configuration"),(0,a.kt)("p",null,"Start in STM32CubeMX and enable the SPI. The images here are from an STM32G081 project:"),(0,a.kt)(r.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-05.png",noShadow:!1,width:"600",mdxType:"Figure"},"SPI configuration"),(0,a.kt)("p",null,"Check the display datasheet for SPI format used (data size and bit\norder). Remember the 16 bit words are stored in little endian byte order in\nthe framebuffer. Check if you can configure the display to accept this\nformat. If not, then you have to convert data during transmission.\nAlso pay attention to the clock polarity and clock phase. These are\nalso specified in the display datasheet."),(0,a.kt)("p",null,"The SPI clock (the bit rate) is controlled by a divider to the\nFCLK. The minimum divider is 2. If the MCU is running e.g. 64 MHz, the\nmaximum SPI bit rate will be 32 MBit/s."),(0,a.kt)("p",null,"On the GPIO tab you can check the GPIO selection for the SPI peripheral:"),(0,a.kt)(r.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-06.png",noShadow:!1,width:"600",mdxType:"Figure"},"SPI GPIO configuration"),(0,a.kt)("p",null,"Select the GPIOs on Pinout view on the right:"),(0,a.kt)(r.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-07.png",noShadow:!1,width:"600",mdxType:"Figure"},"SPI GPIO selection"),(0,a.kt)("p",null,"What is left now is to configure the display and transfer the\nframebuffer on the SPI channel. STM32CubeMX cannot generate this code for\nyou, as it depends heavily on the display.\nFor many displays it is necessary to send a sequence of commands and\nfollow a specific power up sequence. After that you typically set the\ncolor mode and turn the display to ON. All this should be specified in\nthe datasheet or examples provided by the vendor."),(0,a.kt)("p",null,"The STM32Cube Firmware contains examples using SPI communication. The STM32Cube\nHAL contains various helper functions. The basic function to send data is:"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"stm32g0xx_hal_spi.h"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"HAL_StatusTypeDef HAL_SPI_Transmit(SPI_HandleTypeDef *hspi, uint8_t *pData, uint16_t Size, uint32_t Timeout);\n")),(0,a.kt)("p",null,"We recommend using these functions until communication is running\nstable. Afterwards performance can sometimes be improved by writing\ndedicated functions."),(0,a.kt)("p",null,"An SPI aware oscilloscope or SPI to usb logger can be very helpful in\nthe process of writing a SPI display driver."),(0,a.kt)(i.Z,{mdxType:"Note"},"Start with a low frequency on SPI to avoid noise problems."),(0,a.kt)("h2",f({},{id:"checking-the-display-colors"}),"Checking the Display Colors"),(0,a.kt)("p",null,"At this point where you can transmit a framebuffer to the display, it\nis advisable to thoroughly check the display colors."),(0,a.kt)("p",null,"The idea is to write a color to the framebuffer and check the display\nby visual inspection. Here are a few examples:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null}),"Test"),(0,a.kt)("th",f({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Red"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Set red color in the framebuffer. The display must be red also.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Green"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Set green color in the framebuffer. The display must be green also.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Blue"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Set blue color in the framebuffer. The display must be blue also.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Dark color"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"A dark color (e.g. 0x8000) for 50% red, must be dark on the display.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Changing color"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Change the framebuffer every second and see that the display also updates.")))),(0,a.kt)("p",null,"To put a color in the RGB565 framebuffer, the following scheme can be used:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"uint8_t r    = 0xff, g = 0x00, b = 0x00;             // Solid red\nuint16_t col = ((r>>3)<<11) | ((g>>2)<<5) | (b>>3);  // Convert colors to RGB565\n// Put colors into the framebuffer\nfor(int i = 0; i < W*H; i++)\n{\n  framebuffer[i] = col;\n}\n")),(0,a.kt)("p",null,"For a 24BPP display the code is better formulated using byte pointers\n(colors are stored in BGR order):"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"uint8_t* framebuffer[480*272*3];  //24 bit framebuffer\n...\nuint8_t *fb = framebuffer;\nwhile(fb < (uint8_t*)(framebuffer + (480*272*3)))\n{\n  *fb++ = 0x00; // Write blue color and increment pointer by one byte\n  *fb++ = 0x00; // Write green color\n  *fb++ = 0xFF; // Write red color\n}\n")),(0,a.kt)(r.Z,{imageSource:"/img/development/board-bring-up/display/red-display-test.png",noShadow:!0,width:"600",mdxType:"Figure"},"Showing a colored framebuffer"),(0,a.kt)("p",null,"Changing the framebuffer every second by using the LTDC line event callback:"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"main.c"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"/* USER CODE BEGIN 4 */\nuint8_t r = 0x00, g = 0x00, b = 0x00;\nuint16_t col = 0;\nuint8_t color = 1;\nvoid HAL_LTDC_LineEventCallback(LTDC_HandleTypeDef* hltdc)\n{\n  static int count = 0;\n  count++;\n  if (count >= 60)\n  {\n    count = 0;\n    switch (color)\n    {\n    case 1:\n      r = 0xFF; g = 0x00; b = 0x00;\n      color = 2;\n      break;\n    case 2:\n      r = 0x00; g = 0xFF; b = 0x00;\n      color = 3;\n      break;\n    case 3:\n      r = 0x00; g = 0x00; b = 0xFF;\n      color = 1;\n      break;\n    default:\n      break;\n    }\n    col = ((r>>3)<<11) | ((g>>2)<<5) | (b>>3);  // Convert colors to RGB565\n    // Put colors into the framebuffer\n    for(int i = 0; i < W*H; i++)\n    {\n      framebuffer[i] = col;\n    }\n  }\n}\n/* USER CODE END 4 */\n")))}w.isMDXComponent=!0}}]);