"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6803],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,d=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(d,i(i({ref:t},f),{},{components:n})):a.createElement(d,i({ref:t},f))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:l,src:i})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:l,src:i})),a.createElement("p",null,e.children))}},6771:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("p",null,a.createElement("div",{className:"videoWrapper"},a.createElement("video",{controls:!0},a.createElement("source",{src:this.props.url,type:"video/mp4"}))))}}t.Z=r},49548:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return h},metadata:function(){return k},toc:function(){return b}});var a=n(3905),r=n(44035),l=n(22425),i=n(6771),o=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(f)for(var n of f(t))c.call(t,n)&&m(e,n,t[n]);return e};const h={id:"lowering-memory-usage-with-partial-framebuffer",title:"Lowering Memory Usage with Partial Framebuffer"},g=void 0,k={unversionedId:"development/scenarios/lowering-memory-usage-with-partial-framebuffer",id:"development/scenarios/lowering-memory-usage-with-partial-framebuffer",title:"Lowering Memory Usage with Partial Framebuffer",description:"",source:"@site/docs/development/scenarios/lowering-memory-usage-with-partial-framebuffer.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/lowering-memory-usage-with-partial-framebuffer",permalink:"/4.21/ja/docs/development/scenarios/lowering-memory-usage-with-partial-framebuffer",draft:!1,tags:[],version:"current",frontMatter:{id:"lowering-memory-usage-with-partial-framebuffer",title:"Lowering Memory Usage with Partial Framebuffer"},sidebar:"docs",previous:{title:"TouchGFX on NeoChrom",permalink:"/4.21/ja/docs/development/scenarios/touchgfx-on-gpu2d"},next:{title:"Using Non-Memory Mapped Flash for Storing Images",permalink:"/4.21/ja/docs/development/scenarios/using-non-memory-mapped-flash"}},y={},b=[{value:"Full-size Frame Buffer Memory",id:"full-size-frame-buffer-memory",level:2},{value:"Partial Frame Buffer Memory",id:"partial-frame-buffer-memory",level:2},{value:"Display Tearing",id:"display-tearing",level:2},{value:"Display Update Example",id:"display-update-example",level:2},{value:"Configuring Partial Frame Buffers",id:"configuring-partial-frame-buffers",level:2},{value:"Transferring Frame Buffers to the Screen",id:"transferring-frame-buffers-to-the-screen",level:2},{value:"Transferring Frame Buffers to the X-NUCLEO-GFX01M1 SPI Display",id:"transferring-frame-buffers-to-the-x-nucleo-gfx01m1-spi-display",level:3},{value:"Transferring Frame Buffers on DSI Display",id:"transferring-frame-buffers-on-dsi-display",level:3},{value:"Transferring Frame Buffers on SPI Display",id:"transferring-frame-buffers-on-spi-display",level:3},{value:"Conclusion",id:"conclusion",level:2}],T={toc:b};function w(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&f)for(var a of f(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},T),m),s(t,u({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"This section explains, by exemplifying with a clock application, how\nto configure and use Partial Frame Buffers, to lower memory\nrequirements at the expense of some performance."),(0,a.kt)("p",null,"A video of the application running on the STM32L4R9Discovery\nevaluation kit can be seen below"),(0,a.kt)(i.Z,{url:"http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/knowledgebase/Partial%20framebuffer/Partial%20framebuffer.mp4",mdxType:"Video"}),(0,a.kt)("h2",d({},{id:"full-size-frame-buffer-memory"}),"Full-size Frame Buffer Memory"),(0,a.kt)("p",null,"Normally, your frame buffer is a big memory array with enough memory\nto hold all the pixels available on your display.\nIf you are running on a 24-bit display with a resolution of 480 x 272,\na full-size frame buffer holds 480 x 272 x 3 bytes = 391.680 bytes."),(0,a.kt)("p",null,'Some applications may have 2- ("Double buffering") or even 3 frame\nbuffers. The total memory requirement in these cases would then be\n783.360 and 1.175.040 bytes.'),(0,a.kt)("p",null,"TouchGFX writes pixel values to the frame buffer when drawing any part\nof the UI, after all drawing operations have completed, the frame\nbuffer is transferred to the display. Typically, the whole frame\nbuffer is transferred to the display even if only a part of the UI is\nupdated.\nGenerally, the framebuffer can be updated in many small blocks before\nitis transferred."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Update1, Update 2, Update 3, ..., Update N, Transfer to display")),(0,a.kt)("p",null,"In some cases, particularly in low cost solutions with no external\nRAM, frame buffers are required to be small enough to allow the rest\nof the application to fit in the internal RAM together with the\nframebuffer. This is where partial frame buffers are useful."),(0,a.kt)("h2",d({},{id:"partial-frame-buffer-memory"}),"Partial Frame Buffer Memory"),(0,a.kt)("p",null,"Partial frame buffers allows a TouchGFX application to run on top of a\nfew, less than full-size frame buffers. The number and size of the\nframe buffers are configurable.\nThis technique can lower the memory requirements of an application by\na substantial amount, but comes with some limitations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Partial frame buffers will only work on displays that have built-in memory. These are typically DSI displays or displays with a parallel bus connection (DBI type A/B, 8080/6800) or SPI-bus connection."),(0,a.kt)("li",{parentName:"ul"},"Potential tearing for complex applications.")),(0,a.kt)("p",null,"Rather than using a frame buffer representing every pixel on the\ndisplay, partial frame buffers typically cover a smaller part.\nIn the clock example used in this article, three frame buffers of\n11.700 bytes each are used. This results in a memory footprint for\nframe buffers of 35.100 bytes."),(0,a.kt)("p",null,"Whenever the application needs to update a part of the UI, TouchGFX\nwill select one of the configured, partial frame buffers, complete its\ndrawing operation in the partial framebuffer, and transfer that part\nto the display. This is repeated for all areas of the UI that need to\nbe rendered - This changes the formula for updating and transferring\ndata to:"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Update1, Transfer1, Update2, Transfer2, Update3, Transfer3, ..., UpdateN, TransferN")),(0,a.kt)("p",null,"In some cases the transfer of one partial frame buffer can run while\nthe update of the next buffer is running."),(0,a.kt)("h2",d({},{id:"display-tearing"}),"Display Tearing"),(0,a.kt)("p",null,"Contrary to using full-size frame buffers, TouchGFX will transfer\nparts of the UI as soon as they are updated, when using partial frame\nbuffers.\nThe display will show the received updates on its glass after at most 16 ms (for\n60 fps displays) because the display needs to be refreshed regularly.\nBecause of this, the first updates to the display can potentially be\nvisible to the user before all updates have been transferred."),(0,a.kt)("p",null,"If the total sequence of draw operations and transfers take a long\ntime to complete ( > 16 ms) it is highly possible that the user will see a\ncombination of the previous frame and some of the new updates. This is\ncalled display tearing and is not desirable.\nFor this reason, partial frame buffers are not suitable for\napplications that make use of complex animations that take a long time\nto render."),(0,a.kt)("h2",d({},{id:"display-update-example"}),"Display Update Example"),(0,a.kt)("p",null,"Before we get into how to configure partial frame buffers in your application let's have a look at a concrete example showing a digital clock with a moving circle arc representing seconds. The green circle arc is moving 6 degrees each second and does a full rotation in a minute. The UI is built from four Widgets as seen in the image below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"../ui-development/ui-components/shapes/line"}),"Line")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"../ui-development/ui-components/shapes/circle"}),"Circle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"../ui-development/ui-components/miscellaneous/digital-clock"}),"Digital Clock")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"../ui-development/ui-components/shapes/box"}),"Box"))),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/touchgfx-designer-with-widgets-4.17.png",mdxType:"Figure"}),(0,a.kt)("p",null,"Here is the code that updates the digital clock and circle arc:"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"MainView.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{21-25}","{21-25}":!0}),"void MainView::handleTickEvent()\n{\n  ticks++;\n  if (ticks == 10)\n  {\n      ticks = 0;\n      secs += 1;\n      if (secs == 60)  //increment minutes\n      {\n        secs = 0;\n        min += 1;\n        if (min == 60) //increment hours\n        {\n          min = 0;\n          hour += 1;\n          if (hour == 24)\n          {\n            hour = 0;\n          }\n        }\n        //Only update digital clock when minutes or hours change\n        digitalClock.setTime24Hour(hour, min, secs);\n      }\n    //Always update seconds\n    circleSeconds.updateArc(secs*6 - 20, secs*6);\n  }\n}\n")),(0,a.kt)("p",null,"The following images shows the areas that are updated in the first few\nseconds when the circle arc approaches the top and digital clock is\nupdated (the grey rectangles). In the first two frames, only the\nseconds are changing (58 and 59 seconds). In the third the seconds\nreaches 60 and the hour and minutes text is updated:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/simulator-updated-areas-1.png",mdxType:"Figure"}),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/simulator-updated-areas-2.png",mdxType:"Figure"}),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/simulator-updated-areas-3.png",mdxType:"Figure"}),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/simulator-updated-areas-4.png",mdxType:"Figure"}),(0,a.kt)("p",null,"The rectangles updated in the third image above are 154 x 60 pixels,\n20 x 12 pixels, and 33 x 8 pixels. When using standard frame buffers\nthese three rectangles would be drawn into the full frame buffer\n(overwriting the previous pixels), which would afterwards be\ntransferred to the display. When using partial frame buffers, these\nthree rectangles would be drawn into their own little frame buffers\nwhich would then immediately be transferred to the display and shown."),(0,a.kt)("h2",d({},{id:"configuring-partial-frame-buffers"}),"Configuring Partial Frame Buffers"),(0,a.kt)("p",null,"The following steps are required for TouchGFX to use  partial frame buffers:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Creating a frame buffer allocator object with a memory buffer"),(0,a.kt)("li",{parentName:"ol"},"Configuring TouchGFX HAL class to use that allocator"),(0,a.kt)("li",{parentName:"ol"},"Write code to transmit the buffers to the display")),(0,a.kt)("p",null,"Steps 1 and 2 are automatically generated by TouchGFX Generator through STM32CubeMX while step 3 is a proprietary driver to transfer pixels to the display."),(0,a.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/partial-strategy.png",width:"450",mdxType:"Figure"}),(0,a.kt)("p",null,"The above configuration generates the following code:"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"// Block Allocator for Partial Framebuffer strategy\nstatic ManyBlockAllocator<1920, /* block size */\n                          3,    /* number of blocks */\n                          2     /* bytes per pixel */\n                          > blockAllocator;\n")),(0,a.kt)("p",null,"This frame buffer allocator allocates 3 blocks, each 1920 bytes. TouchGFX HAL is automatically configured to use the Partial Framebuffer Strategy and to use the Block Allocator."),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{8-10}","{8-10}":!0}),"void TouchGFXGeneratedHAL::initialize()\n{\n    HAL::initialize();\n\n    registerEventListener(*(Application::getInstance()));\n    enableLCDControllerInterrupt();\n    enableInterrupts();\n    // Partial framebuffer strategy\n    setFrameBufferAllocator(&blockAllocator);\n    setFrameRefreshStrategy(HAL::REFRESH_STRATEGY_PARTIAL_FRAMEBUFFER);\n}\n")),(0,a.kt)("p",null,"With this configuration TouchGFX will allocate small frame buffers and\ndraw the UI in them. What is left now, is to transfer the small frame\nbuffers to the display."),(0,a.kt)("p",null,"Lets first see the position and size of the two frame buffers\nallocated to draw the small circle updates (second image above):"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Rectangle")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"x")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"y")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"width")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"height")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Pixels")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Rectangle 1"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"112"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"56"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"22"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"14"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"308 pixels = 924 bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Rectangle 2"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"153"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"42"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"29"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"11"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"319 pixels = 957 bytes")))),(0,a.kt)("p",null,"Both these rectangles are so small, they can fit into the blocks allocated by the frame buffer allocator."),(0,a.kt)("p",null,"In the third image above, we have 3 updated rectangles: The small\nupdates to the circle, and the larger rectangle covering the text:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Rectangle")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"x")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"y")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"width")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"height")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Pixels")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Rectangle 1"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"126"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"51"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"20"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"12"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"240 pixels = 720 bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Rectangle 2"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"165"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"42"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"33"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"8"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"264 pixels = 792 bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Rectangle 3"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"118"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"165"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"154"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"60"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"9.240 pixels = 27.720 bytes")))),(0,a.kt)("p",null,"Again, the rectangle 1 and 2 are so small, they can fit into the\nblocks allocated by the frame buffer allocator, but frame buffer 3 is\ntoo large.\nThis rectangle is to large and will be split into multiple rectangles\nthat each can fit into the frame buffers (11.700 bytes)."),(0,a.kt)("p",null,"Here the third rectangle to be updated is too big and will not fit into the last third block. In this situation TouchGFX will wait for the first blocks to be transferred and then reuse the blocks."),(0,a.kt)("h2",d({},{id:"transferring-frame-buffers-to-the-screen"}),"Transferring Frame Buffers to the Screen"),(0,a.kt)("p",null,"TouchGFX will allocate a frame buffer from the FrameBufferAllocator,\nwhen a rectangle needs to be redrawn. After drawing to the buffer\nTouchGFX will call this method:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"void HAL::flushFrameBuffer(const Rect& rect);\n")),(0,a.kt)("p",null,"This function can be overridden in a HAL subclass to transfer the\nframe buffer to the screen. This special implementation is required\nfor partial framebuffers to work.\nThe following sections will illustrate how to configure this for the\nSTM32G071 evaluation kit with a SPI displays, and the\nSTM32L4R9Discovery evaluation kit which has a DSI display."),(0,a.kt)("h3",d({},{id:"transferring-frame-buffers-to-the-x-nucleo-gfx01m1-spi-display"}),"Transferring Frame Buffers to the X-NUCLEO-GFX01M1 SPI Display"),(0,a.kt)("p",null,'In this section we will discuss the TouchGFX board setup for the\nSTM32G071 nucleo board with the X-Nucleo-GFX01M1 expansion board. This\nexpansion board, MB1642B, contains a 2.2" 240x320 SPI display and a\n64-Mbit SPI NOR flash.'),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/g071-with-gfx01m1.png",width:"400px",mdxType:"Figure"},"Nucleo-G071RB with X-Nucleo-GFX01M1 expansion board"),(0,a.kt)("p",null,"In this TouchGFX board setup we use a C++ class from the framework to\nhelp managing the partial framebuffer blocks. This makes the code in\nthe TouchGFX board setup a little shorter."),(0,a.kt)("p",null,"The TouchGFX board setup is build with the TouchGFX Generator. Read\nmore about that\n",(0,a.kt)("a",d({parentName:"p"},{href:"../touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/display"}),"here")),(0,a.kt)("p",null,"The most important part is the flushFrameBuffer function:"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{5-5}","{5-5}":!0}),"void TouchGFXGeneratedHAL::flushFrameBuffer(const touchgfx::Rect& rect)\n{\n    HAL::flushFrameBuffer(rect);\n    // Try transmitting a block\n    PartialFrameBufferManager::tryTransmitBlock();\n}\n")),(0,a.kt)("p",null,"Here we just call the ",(0,a.kt)("em",{parentName:"p"},"PartialFrameBufferManager")," framework class to\nget the block transmitted."),(0,a.kt)("p",null,"In the TouchGFXGeneratedHAL::endFrame function we call\n",(0,a.kt)("em",{parentName:"p"},"PartialFrameBufferManager")," to get any remaining framebuffer blocks\ntransmitted also:"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{5-5}","{5-5}":!0}),"void TouchGFXGeneratedHAL::endFrame()\n{\n    // We must guard the next frame until we're done transferring all blocks over our display interface\n    // through either a semaphore if user is running an OS or a simple variable if not\n    PartialFrameBufferManager::transmitRemainingBlocks();\n\n    HAL::endFrame();\n    touchgfx::OSWrappers::signalRenderingDone();\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"PartialFrameBufferManager")," uses three functions to interact with\nthe display driver code. These must be implemented in the TouchGFX board setup:"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{4-4,12-12,20-20}","{4-4,12-12,20-20}":!0}),"/**\n * Check if a Frame Buffer Block is beeing transmitted.\n */\n__weak int transmitActive()\n{\n    return touchgfxDisplayDriverTransmitActive();\n}\n\n/**\n * Check if a Frame Buffer Block ending at bottom may be sent.\n */\n__weak int shouldTransferBlock(uint16_t bottom)\n{\n    return touchgfxDisplayDriverShouldTransferBlock(bottom);\n}\n\n/**\n * Transmit a Frame Buffer Block.\n */\n__weak void transmitBlock(const uint8_t* pixels, uint16_t x, uint16_t y, uint16_t w, uint16_t h)\n{\n    touchgfxDisplayDriverTransmitBlock(pixels, x, y, w, h);\n}\n")),(0,a.kt)("p",null,"The code above just forwards the calls to C functions in the MB1642B\ndriver code."),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"MB1642BDisplayDriver.c"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"int touchgfxDisplayDriverTransmitActive(void)\n{\n  return IsTransmittingBlock_;\n}\n\nvoid touchgfxDisplayDriverTransmitBlock(const uint8_t* pixels, uint16_t x, uint16_t y, uint16_t w, uint16_t h)\n{\n  Display_Bitmap((uint16_t*)pixels, x, y, w, h);\n}\n")),(0,a.kt)("p",null,"The implementation of this driver code depends highly on the display\nused. For the MB1642B module this involves two GPIO to control SPI\nchip select and data/command mode."),(0,a.kt)("p",null,"The transmission state is implemented using a volatile uint8",(0,a.kt)("em",{parentName:"p"},"t\nvariable *IsTransmittingBlock"),"*. This variable is set to 1 when a\ntransmission is started and set to zero in the DMA callback:"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"MB1642BDisplayDriver.c"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"void MB1642BDisplayDriver_DMACallback(void)\n{\n  /* Transfer Complete Interrupt management ***********************************/\n  if ((0U != (DMA1->ISR & (DMA_FLAG_TC1))) && (0U != (hdma_spi1_tx.Instance->CCR & DMA_IT_TC)))\n  {\n    /* Disable the transfer complete and error interrupt */\n    __HAL_DMA_DISABLE_IT(&hdma_spi1_tx, DMA_IT_TE | DMA_IT_TC);\n\n    /* Clear the transfer complete flag */\n    __HAL_DMA_CLEAR_FLAG(&hdma_spi1_tx, DMA_FLAG_TC1);\n\n    IsTransmittingBlock_ = 0;\n\n    ...\n\n    // Signal Transfer Complete to TouchGFX\n    DisplayDriver_TransferCompleteCallback();\n")),(0,a.kt)("p",null,"As we see above, the DMA callback also calls the transfer complete\ncallback. This function is implemented in the generated HAL:"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),'extern "C"\nvoid DisplayDriver_TransferCompleteCallback()\n{\n    // After completed transmission start new transfer if blocks are ready.\n    PartialFrameBufferManager::tryTransmitBlockFromIRQ();\n}\n')),(0,a.kt)("p",null,"The call to the ",(0,a.kt)("em",{parentName:"p"},"PartialFrameBufferManager")," here makes it start a new\ntransfer if possible."),(0,a.kt)("h3",d({},{id:"transferring-frame-buffers-on-dsi-display"}),"Transferring Frame Buffers on DSI Display"),(0,a.kt)("p",null,"The STM32L4R9Discovery evaluation kit uses a DSI display. The normal\nHAL class is called STM32HAL_DSI (located in STM32HAL_DSI.cpp)."),(0,a.kt)("p",null,"We override the HAL::flushFrameBuffer method to notify the FrameBufferAllocator that a block has been drawn:"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXHAL.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{3-3}","{3-3}":!0}),"void TouchGFXHAL::flushFrameBuffer(const Rect& rect)\n{\n    frameBufferAllocator->markBlockReadyForTransfer();\n    HAL::flushFrameBuffer(rect); //call normal implementation\n}\n")),(0,a.kt)("p",null,"The FrameBufferAllocator subclass ManyBlockAllocator will call the\nglobal function FrameBufferAllocatorSignalBlockDrawn() when a block is\nready for transfer. This method must be implemented in the BSP layer:"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{5-5}","{5-5}":!0}),"void FrameBufferAllocatorSignalBlockDrawn()\n  {\n    if (!dsiIsTransferring)\n    {\n      sendBlock();\n    }\n  }\n")),(0,a.kt)("p",null,'This function is calling the sendBlock function, unless a transfer is\nalready ongoing on the DSI. For the first block drawn by TouchGFX,\nthis will never be the case, so a transfer is started.\nIf another block drawing is completed while the DSI transfer is still\nrunning, the block will be kept in the "ready to transfer state", and\ndrawing will continue in another free block (if available).'),(0,a.kt)("p",null,"When a DSI transfer is completed, we must first free the transferred\nblock, so it can be reused for another rectangle, and then check to\nsee if the next block is ready for transfer. This is all done in the\nER interrupt:"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXHAL.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{8-8,11-11}","{8-8,11-11}":!0}),"__irq void DSI_IRQHandler(void) {\n  if (__HAL_DSI_GET_FLAG(&hdsi, DSI_IT_ER))\n  {\n    // End-of-refresh interrupt. Meaning last DSI transfer is complete\n    __HAL_DSI_CLEAR_FLAG(&hdsi, DSI_IT_ER);\n    if (dsiIsTransferring)\n    {\n      HAL::getInstance()->getFrameBufferAllocator()->freeBlockAfterTransfer();\n      dsiIsTransferring = 0;\n    }\n    sendBlock(); //transfer next block if availble\n  }\n")),(0,a.kt)("p",null,"The function sendBlock is more complicated. Here we configure the LTDC\nand DSI peripherals to transfer the framebuffer. We also configure the\ndisplay to put the transferred data into the correct place in the\ndisplay memory. This part of the code is dependent on the specific\ndisplay. Check the display datasheet for the command specifications."),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXHAL.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{18-18,40-40,51-51}","{18-18,40-40,51-51}":!0}),"static void sendBlock()\n{\n    FrameBufferAllocator* fbAllocator = HAL::getInstance()->getFrameBufferAllocator();\n\n    //Is a block ready for transfer?\n    if (fbAllocator->hasBlockReadyForTransfer())\n    {\n        Rect transfer_rect;\n        const uint8_t* src = fbAllocator->getBlockForTransfer(transfer_rect);\n        dsiIsTransferring = 1;\n\n        //1. Setup LTDC and layer address and dimension\n        //2. Configure display active area\n        //3. Start DSI\n\n        __HAL_DSI_WRAPPER_DISABLE(&hdsi);\n\n        //1: Setup LTDC\n        LTDC_Layer1->CFBAR = (uint32_t)src;\n\n        const uint32_t width = transfer_rect.width;\n        const uint32_t height = transfer_rect.height;\n\n        LTDC->AWCR = ((width + 1) << 16) | (height + 1);\n        LTDC->TWCR = ((width + 1 + 1) << 16) | (height + 1 + 1);\n\n        const uint16_t layer_x0 = 2 + 0;\n        const uint16_t layer_x1 = 2 + width - 1;\n        LTDC_Layer1->WHPCR = (layer_x1 << 16) | layer_x0;\n\n        const uint16_t layer_y0 = 2 + 0;\n        const uint16_t layer_y1 = 2 + height - 1;\n        LTDC_Layer1->WVPCR = (layer_y1 << 16) | layer_y0;\n\n        LTDC_Layer1->CFBLR = ((width * 3) << 16) | (width * 3 + 3);\n        LTDC_Layer1->CFBLNR = height;\n\n        LTDC->SRCR = (uint32_t)LTDC_SRCR_IMR;\n\n        //2: Configure display\n        const int16_t x = transfer_rect.x + 4;\n        const int16_t x2 = transfer_rect.x + 4 + width - 1;\n        uint8_t InitParam1[4] = { (uint8_t)(x >> 8), (uint8_t)(x & 0xFF), (uint8_t)(x2 >> 8), (uint8_t)(x2 & 0xFF)};\n        HAL_DSI_LongWrite(&hdsi, 0, DSI_DCS_LONG_PKT_WRITE, 4, DSI_SET_COLUMN_ADDRESS, InitParam1);\n\n        const int16_t y = transfer_rect.y;\n        const int16_t y2 = transfer_rect.y + height - 1;\n        uint8_t InitParam2[4] = { (uint8_t)(y >> 8), (uint8_t)(y & 0xFF), (uint8_t)(y2 >> 8), (uint8_t)(y2 & 0xFF) };\n        HAL_DSI_LongWrite(&hdsi, 0, DSI_DCS_LONG_PKT_WRITE, 4, DSI_SET_PAGE_ADDRESS, InitParam2);\n\n        //3: Start DSI transfer\n        __HAL_DSI_WRAPPER_ENABLE(&hdsi);\n        HAL_DSI_Refresh(&hdsi);\n    }\n}\n")),(0,a.kt)("h3",d({},{id:"transferring-frame-buffers-on-spi-display"}),"Transferring Frame Buffers on SPI Display"),(0,a.kt)("p",null,"The principle for transferring the rectangles to the display is the same as for the DSI,\nbut some details are different."),(0,a.kt)("p",null,"First, when a rectangle is drawn, we start a transfer if none is already in progress:"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXHAL.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{4-4,10-10}","{4-4,10-10}":!0}),"void TouchGFXHAL::flushFrameBuffer(const touchgfx::Rect& rect)\n{\n    HAL::flushFrameBuffer(rect);\n    frameBufferAllocator->markBlockReadyForTransfer();\n    //start transfer if not running already!\n    if (!LCDManager_IsTransmittingData())\n    {\n        touchgfx::Rect r;\n        const uint8_t* pixels = frameBufferAllocator->getBlockForTransfer(r);\n        LCDManager_SendFrameBufferBlockWithPosition((uint8_t*)pixels, r.x, r.y, r.width, r.height);\n    }\n}\n")),(0,a.kt)("p",null,"The function ",(0,a.kt)("em",{parentName:"p"},"LCDManager_SendFrameBufferBlockWithPosition")," starts a\nSPI transfer to the display using DMA."),(0,a.kt)("p",null,"The SPI transfer complete handler calls a function when the transfer\nis complete:"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXHAL.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{11-11}","{11-11}":!0}),"void HAL_SPI_TxCpltCallback(SPI_HandleTypeDef *hspi)\n{\n    UNUSED(hspi);\n    LCD_CS_HIGH();\n    isTransmittingData = 0;\n\n    //Change to SPI datasize to 8 bit from 16 bit\n    heval_Spi.Instance->CR2 &= ~(SPI_DATASIZE_16BIT - SPI_DATASIZE_8BIT);\n\n    //signal transfer complete\n    LCDManager_TransferComplete();\n}\n")),(0,a.kt)("p",null,"The LCDManager_TransferComplete functions starts a new transfer:"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXHAL.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{3-3,16-16}","{3-3,16-16}":!0}),"void LCDManager_TransferComplete()\n{\n    touchgfx::startNewTransfer();\n}\n\nvoid startNewTransfer()\n{\n    FrameBufferAllocator* fba = HAL::getInstance()->getFrameBufferAllocator();\n    fba->freeBlockAfterTransfer();\n    blockIsTransferred = true;\n\n    if (fba->hasBlockReadyForTransfer())\n    {\n        touchgfx::Rect r;\n        const uint8_t* pixels = fba->getBlockForTransfer(r);\n        LCDManager_SendFrameBufferBlockWithPosition((uint8_t*)pixels, r.x, r.y, r.width, r.height);\n    }\n}\n\n")),(0,a.kt)("h2",d({},{id:"conclusion"}),"Conclusion"),(0,a.kt)("p",null,"In this article we saw how the partial frame buffer strategy can help\nlowering the memory requirements for platforms that have displays with\nintegrated frame buffer memory."),(0,a.kt)("p",null,"The method for configuring and setting up partial framebuffers is the\nsame across all platforms, but the method of sending the content of\nthe blocks to the display varies. We saw how, for an LTDC/DSI based\nplatform (STM32L4R9-DISCO) we were able to reconfigure the LTDC Layer\nto fit the next block ready for transfer on DSI, while on a platform\nwith no LCD controller (STM32G071) we were able to send the blocks to\nthe display using SPI."))}w.isMDXComponent=!0}}]);