"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1340],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),h=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=h(a),u=r,m=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var h=2;h<i;h++)l[h]=a[h];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},22425:function(e,t,a){var n=a(67294);class r extends n.Component{render(){return n.createElement("div",{className:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,a){var n=a(67294),r=a(25026);t.Z=function(e){const t=e.noShadow||!1,a=e.width,i=e.height,l=(0,r.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:a,height:i,src:l})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:a,height:i,src:l})),n.createElement("p",null,e.children))}},88678:function(e,t,a){var n=a(67294);class r extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},37793:function(e,t,a){var n=a(67294),r=a(88678);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends n.Component{render(){return n.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=l},63793:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return N},frontMatter:function(){return g},metadata:function(){return k},toc:function(){return b}});var n=a(3905),r=a(44035),i=a(37793),l=a(22425),o=Object.defineProperty,s=Object.defineProperties,h=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&u(e,a,t[a]);if(p)for(var a of p(t))c.call(t,a)&&u(e,a,t[a]);return e};const g={id:"touchgfx-on-lowcost-hardware",title:"TouchGFX on Low Cost Hardware"},f=void 0,k={unversionedId:"development/scenarios/touchgfx-on-lowcost-hardware",id:"development/scenarios/touchgfx-on-lowcost-hardware",title:"TouchGFX on Low Cost Hardware",description:"",source:"@site/docs/development/scenarios/touchgfx-on-lowcost-hardware.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/touchgfx-on-lowcost-hardware",permalink:"/4.21/ko/docs/development/scenarios/touchgfx-on-lowcost-hardware",draft:!1,tags:[],version:"current",frontMatter:{id:"touchgfx-on-lowcost-hardware",title:"TouchGFX on Low Cost Hardware"},sidebar:"docs",previous:{title:"Scenarios",permalink:"/4.21/ko/docs/category/scenarios-2"},next:{title:"TouchGFX on NeoChrom",permalink:"/4.21/ko/docs/development/scenarios/touchgfx-on-gpu2d"}},y={},b=[{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"GPIO Allocation",id:"gpio-allocation",level:3},{value:"Starting a Project",id:"starting-a-project",level:3},{value:"Display Updates",id:"display-updates",level:2},{value:"Drawing Speed",id:"drawing-speed",level:3},{value:"TouchGFX Limitations with Serial Flash",id:"touchgfx-limitations-with-serial-flash",level:2},{value:"Texture Mapper",id:"texture-mapper",level:3},{value:"Bitmap Painter",id:"bitmap-painter",level:3},{value:"L8 Palette",id:"l8-palette",level:3},{value:"Drivers",id:"drivers",level:2},{value:"Display",id:"display",level:3},{value:"Initialization",id:"initialization",level:4},{value:"Tearing Effect",id:"tearing-effect",level:4},{value:"External flash",id:"external-flash",level:3},{value:"Linker Script",id:"linker-script",level:4},{value:"Flash Loader",id:"flash-loader",level:4},{value:"Buttons",id:"buttons",level:3}],w={toc:b};function N(e){var t,a=e,{components:o}=a,u=((e,t)=>{var a={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},w),u),s(t,h({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,'This section discusses how to use TouchGFX on low cost hardware with\nlimited amount of RAM and flash, no acceleration and "slow" SPI connection\nto external flash and display.'),(0,n.kt)("p",null,"We will try to give some advice on writing the best applications of\nthe given hardware."),(0,n.kt)("p",null,"Throughout this section we will use the TouchGFX board setup for the\nSTM32G071 Nucleo board with the X-Nucleo-GFX01M1 expansion board as\nexample hardware. The expansion board features a 16-bit display and a\nserial flash."),(0,n.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/g071-with-gfx01m1.png",mdxType:"Figure"},"Nucleo-G071RB with X-Nucleo-GFX01M1 expansion board"),(0,n.kt)("h2",m({},{id:"hardware-overview"}),"Hardware Overview"),(0,n.kt)("p",null,"The hardware setup in this kit consist of the STM32G071 MCU, a SPI NOR flash, a SPI display, and joystick button."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Component")),(0,n.kt)("th",m({parentName:"tr"},{align:"right"}),"\xa0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"MCU"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"STM32G071RB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"MCU RAM"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"32 Kb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"MCU Flash"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"128 Kb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Display"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"Displaytech DT022CTFT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Display resolution"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"240 x 320")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Display format"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"16-bit RGB565")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Display controller"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"ILI9341V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Display connection"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"SPI")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Display connection speed"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"32 MHz")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"NOR Flash"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"Macronix MX25L6433F")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"NOR Flash size"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"64 Mbit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"NOR Flash connection speed"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"32 MHz")))),(0,n.kt)("p",null,"The display is connected to the SPI1 peripheral and the flash is\nconnected to the SPI2 peripheral. This allows the MCU to read data\nfrom the flash while transmitting data to the display."),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/g071-gfx01m1-architecture.png",width:"500px",mdxType:"Figure"},"Nucleo-G071RB with X-Nucleo-GFX01M1 architecture"),(0,n.kt)("h3",m({},{id:"gpio-allocation"}),"GPIO Allocation"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Signal")),(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"GPIO Pin")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Display CS"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PB5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Display DCX"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PB3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Display SCK"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PA5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Display MOSI"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PA7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Display TE"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PA0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Flash CS"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PB9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Flash SCK"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PB13")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Flash MOSI"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PC3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Flash MISO"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PC2")))),(0,n.kt)("p",null,"The table above lists the GPIO allocation for the signals to the flash\nand display. These signal can be monitored with a oscilloscope or\nlogic analyzer. This is very useful during debugging of\ne.g. performance problems."),(0,n.kt)("h3",m({},{id:"starting-a-project"}),"Starting a Project"),(0,n.kt)("p",null,'It is easy to start a project for the STM32G071RB Nucleo evaluation\nkit in the TouchGFX Designer. Click on the "Create New" button\nand search for STM32G071 Nucleo.  This board setup is developed\nspecifically for the Nucleo-G071RB kit with the X-Nucleo-GFX01M1\ndisplay shield.'),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/g071-start-new-project-4.17.png",mdxType:"Figure"},"New project for Nucleo-G071RB"),(0,n.kt)("p",null,"The TouchGFX board setup supports the NOR flash, the display, and the\nbuttons. The display can be used both in portrait and horizontal\nmode."),(0,n.kt)("p",null,"The display orientation can be change in the TouchGFX Designer in the\n",(0,n.kt)("em",{parentName:"p"},"Config -> Display")," section:"),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/portrait-4.17.png",mdxType:"Figure"},"Selecting portrait or horizontal display orientation"),(0,n.kt)("p",null,"The display on the X-Nucleo-GFX01M1 shield is natively portrait\noriented (higher than wide), but it can easily be used with\nhorizontal orientation."),(0,n.kt)("h2",m({},{id:"display-updates"}),"Display Updates"),(0,n.kt)("p",null,"As mentioned above the display resolution is 240 x 320 pixels. A total\nof 76.800 pixels or 153.600 bytes. The SPI connection between the MCU\nand the display is running at 32 MHz. This allows us to transfer 4\nMBytes/s or 2M pixels/s."),(0,n.kt)("p",null,"The refresh rate of the display is 76.1 Hz which gives us a frame time of 13.14 ms."),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/display-te.png",mdxType:"Figure"},"Tearing effect signal from the display"),(0,n.kt)("p",null,"This means that we have at most 13 ms to send data for the next\nframe. In that time we can send 2.000.000 pixels/s / 76 fps = 26.280\npixels / frame or 34% of a full screen.\nIn practice we cannot sustain that transfer speed on the SPI bus\nbecause of the protocol overhead so we cannot expect to send more than\napproximately 30% of a full frame."),(0,n.kt)("p",null,"If the application updates more than that amount of pixels the\nhardware cannot complete the transmission within the frame time. The\nresult is that the display will start showing the updated frame before\nit is completely updated. The user will then in some cases see a mix\nof the old frame and the new frame."),(0,n.kt)("p",null,"For some animations this is not noticeable to the user, for others the\nresult will be unacceptable."),(0,n.kt)("p",null,"We therefore recommend to keep the level of updates below the 30%\nlimit. E.g. by incrementally updating the frame step-by-step."),(0,n.kt)("p",null,"Because of this, it is generally better to expand an item on the\nscreen, than moving the item."),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/star.png",width:"400",mdxType:"Figure"},"Tearing effect signal from the display"),(0,n.kt)("p",null,"When the star is moved to the right, all the pixels covered by the\nstar must be updated. When the star is expanded only the new pixels\nmust be updated. The pixels updated in previous frame remain\nunchanged."),(0,n.kt)("h3",m({},{id:"drawing-speed"}),"Drawing Speed"),(0,n.kt)("p",null,"The transmission to the display is running at maximum 32 MHz."),(0,n.kt)("p",null,"The serial flash can run at the same speed as the display\ntransmission. This means that the serial flash is fast enough to feed\nbits to the display at maximum speed."),(0,n.kt)("p",null,"This is only achieved if the pixel format of an image in the flash is\nRGB565. In this case is two bytes read from the flash equal to 1\npixel, which is also two bytes on the display.\nIf the pixel format in the flash is ARGB8888, we need to read double\nthe amount of data from the flash to produce a pixel on the display,\nand the serial flash will not be able to keep up with the display."),(0,n.kt)("p",null,"When this happens we are not sending data to the display continuously\nand it will not be possible to update all 30% of the display in a\nframe. One possibility is to move the image to internal flash, another\nof course to change the pixel format."),(0,n.kt)("p",null,"Other widgets are not bound by the speed of the flash. E.g. the Box\nWidget, which draws a colored rectangle. This widget is of course very\nfast and much faster than the display transmission. Other widgets like\nLine and Circle uses much more CPU resources. These Widget are not\nable to produce pixels in the speed they can be transmitted to the\ndisplay. Using these Widgets an application cannot expect to be able\nto update 30% of the display in every frame."),(0,n.kt)("p",null,"Find about pixel rendering complexity ",(0,n.kt)("a",m({parentName:"p"},{href:"../../basic-concepts/performance#the-complexity-of-rendering-the-pixels"}),"here")),(0,n.kt)("h2",m({},{id:"touchgfx-limitations-with-serial-flash"}),"TouchGFX Limitations with Serial Flash"),(0,n.kt)("p",null,"TouchGFX on STM32G0 with serial flash has a few limitations that the\napplication programmer must be aware of."),(0,n.kt)("h3",m({},{id:"texture-mapper"}),"Texture Mapper"),(0,n.kt)("p",null,"The texture mapper widgets (Texture Mapper, Animation Texture Mapper,\nScalable Image) can not draw an image that is stored in the external\nSPI flash. The reason is that it is not possible to get an acceptable\nperformance of e.g. image rotation with an image stored in a serial\nflash."),(0,n.kt)("p",null,"To use an image with a texture mapper you must store the image in\ninternal flash or RAM. An image is easily stored in internal flash by\nmodifying the image configuration in TouchGFX Designer."),(0,n.kt)("p",null,'Go to the Images tab and select the image. In the right side of the\nwindow, change the "Section" attribute to "IntFlashSection".'),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/image-internal-4.17.png",mdxType:"Figure"},"Placing an image in internal flash"),(0,n.kt)("p",null,"The texture mapper code is too large to include in all projects. It is\ntherefore disabled pr. default for STM32G0 projects. This means that\nyou must enable the texture mapper before you can use it in your\nSTM32G0 projects."),(0,n.kt)("p",null,'Go to the "Config" tab, select "Framework Features", and click the\nrelevant texture mapper or a group of texture mappers.'),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/enabling-texture-mapper-4.17.png",mdxType:"Figure"},"Enabling a texture mapper for a specific image format"),(0,n.kt)("p",null,"It is also possible to temporarily move an image to RAM using the ",(0,n.kt)("a",m({parentName:"p"},{href:"/4.21/ko/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"}),"Bitmap Cache")),(0,n.kt)("h3",m({},{id:"bitmap-painter"}),"Bitmap Painter"),(0,n.kt)("p",null,"Line, Circle, and Dynamic Graph widgets can be colored with an\nimage. This is not possible with images located in the SPI\nflash. Images used with these widgets must be placed in internal flash\nor RAM."),(0,n.kt)("h3",m({},{id:"l8-palette"}),"L8 Palette"),(0,n.kt)("p",null,"Images in L8 format can be used on hardware with a serial flash. The\nlimitation is that the palette data must be in the internal flash\n(also for performance reasons)."),(0,n.kt)("p",null,'The palette can be moved to internal flash by changing the "Extra\nSection" to "IntFlashSection" in the TouchGFX Designer.'),(0,n.kt)("h2",m({},{id:"drivers"}),"Drivers"),(0,n.kt)("p",null,"The TouchGFX board setup is created using the TouchGFX Generator. Read\nmore about the Generator\n",(0,n.kt)("a",m({parentName:"p"},{href:"../touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator"}),"here"),". The\nTouchGFX Generator generates a HAL layer that links the TouchGFX\nframework with a set of low-level drivers (already implemented in this\nTouchGFX board setup). The low-level drivers for this application\ntemplate are located in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Core/Src")," folder in your project."),(0,n.kt)("p",null,"The drivers are in 3 files:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Driver")),(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"File")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Display"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Core/Src/MB1642BDisplayDriver.c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Flash"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Core/Src/MB1642BDataReader.c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Buttons"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Core/Src/MB1642BButtonController.cpp")))),(0,n.kt)("h3",m({},{id:"display"}),"Display"),(0,n.kt)("p",null,"The display uses a fairly standard SPI protocol. A number of registers\nis the display can be written to configure the display. The chip select\nis asserted when data is transmitted to the display. An extra GPIO,\nDCX, is used to differentiate command bytes from data bytes."),(0,n.kt)("p",null,"The driver uses a DMA channel to send display pixel data. This allows\nthe transmission to run while the MCU is calculating pixels. An DMA\ncomplete interrupt is used to free the memory transmitted for reuse in\na future drawing and to restart the transmission if new data is\nalready available."),(0,n.kt)("p",null,"Configuration data is not send with DMA, because the CS and CDX pins\nmust be toggled between and in the small configuration packages\naccording to the protocol of this display."),(0,n.kt)("p",null,"The driver uses the SPI in 8 bit mode when sending configuration data,\nbut changes to 16-bit mode when transmitting the pixel data. The\nreason for this is that the MCU memory is read in little endian\nmode. A pixel in RGB565 format is stored in RAM with the low byte (G\nand B) first and the high byte (R and G) second. This order is\npreserved when the 8-bit SPI is reading the memory for\ntransmission. When the SPI is in 16-bit mode, the data is read as\n16-bit RGB565 from memory and transmitted in correct order for the\ndisplay."),(0,n.kt)("p",null,"A driver not using 16-bit DMA must swap the bytes in a pixel before\ntransmitting."),(0,n.kt)("h4",m({},{id:"initialization"}),"Initialization"),(0,n.kt)("p",null,"The display initialization is found in the function ",(0,n.kt)("inlineCode",{parentName:"p"},"MB1642BDisplayDriver_DisplayInit(void)")),(0,n.kt)("p",null,"The driver sends 6 commands to the display which follows the recommended power on sequence:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Exit Sleep Mode (11h)"),(0,n.kt)("li",{parentName:"ol"},"Enter Normal Mode (13h)"),(0,n.kt)("li",{parentName:"ol"},"Set Memory Access Control (36h) with MX and BGR bits set"),(0,n.kt)("li",{parentName:"ol"},"Set Pixel Format (3Ah) with format 16 bits"),(0,n.kt)("li",{parentName:"ol"},"Tearing Effect Line On (35h)"),(0,n.kt)("li",{parentName:"ol"},"Set Tear Scanline (44h) with line = 0")),(0,n.kt)("p",null,"The driver sleeps for 100 ms between these command."),(0,n.kt)("h4",m({},{id:"tearing-effect"}),"Tearing Effect"),(0,n.kt)("p",null,"The Tearing Effect (TE) signal from the display is very important. It\nallows the application to synchronize the update of the display memory\ncorrectly with the display refresh rate. This helps the application to\navoid tearing on the display. The display asserts the signal whenever\nit starts an update cycle. The MCU uses this signal to start sending\ndata to the display."),(0,n.kt)("p",null,"The TE signal is connected to the external interrupt input of the\nMCU. CubeMx generates and configures an interrupt on this pin."),(0,n.kt)("p",null,"The callback in the driver signal TouchGFX to start drawing:"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"MB1642BDisplayDriver.c"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void HAL_GPIO_EXTI_Rising_Callback(uint16_t GPIO_Pin)\n{\n  ...\n  touchgfxSignalVSync();\n}\n")),(0,n.kt)("h3",m({},{id:"external-flash"}),"External flash"),(0,n.kt)("p",null,"The SPI NOR flash on the display shield is a standard SPI flash. The\ndriver is simpler than the display driver. No special initialization\nis required to read data from the flash."),(0,n.kt)("p",null,"The driver can read data using polled SPI (busy waiting for all the\nbytes) or use DMA. The time to start a DMA reception is similar to the\ntime it takes to read 20 bytes in polled mode, so it is often slower\nfor short reads. On the other hand, the DMA continues to run during\ninterrupts (e.g. sysTick or application interrupts) and can run in the\nbackground when the MCU is busy rendering pixels. For this reason both\nmethods are used."),(0,n.kt)("p",null,"The flash driver is using another DMA channel than the display driver,\nso both reception of new data and transmission of already drawn pixels\ncan run concurrently."),(0,n.kt)("h4",m({},{id:"linker-script"}),"Linker Script"),(0,n.kt)("p",null,"The linker controls where the various data in the application is\nlocated. This is specified in the linker script. Here is the first\npart of the linker script for the gcc compiler:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"MEMORY\n{\n  RAM        (xrw)    : ORIGIN = 0x20000000,   LENGTH = 36K\n  FLASH      (rx)     : ORIGIN = 0x8000000,    LENGTH = 128K\n  SPI_FLASH  (r)      : ORIGIN = 0x90000000,   LENGTH = 8M\n}\n")),(0,n.kt)("p",null,"It declares the NOR flash as starting from the address 0x90000000. The\nflash driver in the target application reads data in the 0x90000000\naddresses from the SPI flash (using the lower 24-bits as address in\nthe flash)."),(0,n.kt)("p",null,"The External Flash Loader used in STM32CubeProgrammer can flash data\nin this range to the SPI flash (see below)."),(0,n.kt)("p",null,"This next section puts the image (ExtFlashSection) and font\n(FontFlashSection) data in the SPI flash."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"  ExtFlashSection :\n  {\n    *(ExtFlashSection ExtFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n\n  FontFlashSection :\n  {\n    *(FontFlashSection FontFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n")),(0,n.kt)("p",null,"Other data can be put into the SPI flash by adding similar sections to the linker script."),(0,n.kt)("h4",m({},{id:"flash-loader"}),"Flash Loader"),(0,n.kt)("p",null,"The G071 TouchGFX board setup contains a flash loader for\nSTM32CubeProgrammer. This flash loader can write data to the SPI NOR\nflash."),(0,n.kt)("p",null,"The flash loader is found in the file ",(0,n.kt)("inlineCode",{parentName:"p"},"gcc/S25FL032P_STM32G071B-NUCLEO.stldr")),(0,n.kt)("p",null,"A STM32CubeIDE project can be flashed directly from the CubeIDE, but an\nIAR or Keil application must be flashed from STM32CubeProgrammer."),(0,n.kt)("p",null,"The flash loader is not available in STM32CubeProgrammer initially, so\nit must be installed by copying the stldr file to the installation:"),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/copying-stldr.png",mdxType:"Figure"},"Copy flash loader to STM32CubeProgrammer installation"),(0,n.kt)("p",null,"Now the flash loader can be selected in STM32CubeProgrammer as normal:"),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/select-stldr.png",mdxType:"Figure"},"Copy flash loader to STM32CubeProgrammer installation"),(0,n.kt)(i.Z,{mdxType:"Tip"},"The flash loader is only working with the specific GPIO configuration that is used on the Nucleo-G071RB board.",(0,n.kt)("p",null,"If a different GPIO configuration for the serial flash is used on\ncustom hardware, the flash loader must be modified similarly.")),(0,n.kt)("h3",m({},{id:"buttons"}),"Buttons"),(0,n.kt)("p",null,"The button driver is very simple. It samples the state of the 5 GPIOs\nused for the joystick on MB1642B and the blue user button on the\nNucleo board."),(0,n.kt)("p",null,"This button driver is installed as BottonController in TouchGFX. This\nmeans that the button presses are available directly in the TouchGFX\nDesigner to use in interactions. They can also be used in user code\nlike this:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::handleKeyEvent(uint8_t key)\n{\n    if (key == '6')\n    {\n        application().gotoScreen2Screen();\n    }\n}\n")),(0,n.kt)("p",null,"The key codes used are:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Key")),(0,n.kt)("th",m({parentName:"tr"},{align:"right"}),(0,n.kt)("strong",{parentName:"th"},"Code")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Left"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"'4'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Right"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"'6'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Up"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"'8'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Down"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"'2'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Center"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"'5'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Blue User Button"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"'0'")))),(0,n.kt)("p",null,"These keys are also usable when you run the Simulator (hit ",(0,n.kt)("inlineCode",{parentName:"p"},"F5")," in\nthe TouchGFX Designer) by using the keyboard numpad."))}N.isMDXComponent=!0}}]);