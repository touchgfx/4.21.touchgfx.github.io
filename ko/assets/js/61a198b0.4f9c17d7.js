"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4992],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=m(a),p=n,u=h["".concat(s,".").concat(p)]||h[p]||c[p]||o;return a?r.createElement(u,i(i({ref:t},d),{},{components:a})):r.createElement(u,i({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var m=2;m<o;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},44035:function(e,t,a){var r=a(67294),n=a(25026);t.Z=function(e){const t=e.noShadow||!1,a=e.width,o=e.height,i=(0,n.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:a,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:a,height:o,src:i})),r.createElement("p",null,e.children))}},88678:function(e,t,a){var r=a(67294);class n extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=n},93054:function(e,t,a){var r=a(67294),n=a(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends r.Component{render(){return r.createElement(n.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=i},58633:function(e,t,a){a.r(t),a.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return u},metadata:function(){return g},toc:function(){return y}});var r=a(3905),n=a(44035),o=a(93054),i=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&h(e,a,t[a]);if(m)for(var a of m(t))c.call(t,a)&&h(e,a,t[a]);return e};const u={id:"hardware-selection-external-memories",title:"External Memories"},f=void 0,g={unversionedId:"development/hardware-selection/hardware-components/hardware-selection-external-memories",id:"development/hardware-selection/hardware-components/hardware-selection-external-memories",title:"External Memories",description:"",source:"@site/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories.mdx",sourceDirName:"development/hardware-selection/hardware-components",slug:"/development/hardware-selection/hardware-components/hardware-selection-external-memories",permalink:"/4.21/ko/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories",draft:!1,tags:[],version:"current",frontMatter:{id:"hardware-selection-external-memories",title:"External Memories"},sidebar:"docs",previous:{title:"Display",permalink:"/4.21/ko/docs/development/hardware-selection/hardware-components/hardware-selection-display"},next:{title:"Board Bring Up Introduction",permalink:"/4.21/ko/docs/development/board-bring-up/board-introduction"}},v={},y=[{value:"Non-volatile Memories",id:"non-volatile-memories",level:2},{value:"NOR Flash",id:"nor-flash",level:3},{value:"Serial NOR Flash Memories",id:"serial-nor-flash-memories",level:4},{value:"NOR Single, Dual, Quad, Octo Flash Memories",id:"nor-single-dual-quad-octo-flash-memories",level:5},{value:"Parallel NOR Flash Memories",id:"parallel-nor-flash-memories",level:4},{value:"NAND Flash Memories",id:"nand-flash-memories",level:3},{value:"eMMC Memories",id:"emmc-memories",level:3},{value:"Volatile Memories",id:"volatile-memories",level:2},{value:"SRAM",id:"sram",level:3},{value:"SDRAM",id:"sdram",level:3},{value:"PSRAM",id:"psram",level:3},{value:"Additional memories",id:"additional-memories",level:3},{value:"Selection of External RAM Density",id:"selection-of-external-ram-density",level:3}],b={toc:y};function w(e){var t,a=e,{components:i}=a,h=((e,t)=>{var a={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&c.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=p(p({},b),h),l(t,s({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"This chapter focuses on helping you choose the external memories for your embedded graphical user interface.\nBefore reading this chapter, it is recommended to read the ",(0,r.kt)("a",p({parentName:"p"},{href:"../preliminary-considerations"}),"Preliminary Considerations"),"\nand ",(0,r.kt)("a",p({parentName:"p"},{href:"hardware-selection-mcu"}),"MCU"),"\nso you are aware of some of the dependencies which are important when choosing the right external memories."),(0,r.kt)("p",null,"Running a TouchGFX GUI application sometimes requires external memories for storing the framebuffer(s), bitmaps, fonts, translations, etc.\nA TouchGFX GUI is not dependent on external memories to run, but needs either internal RAM (in MCU) or external RAM for storing the framebuffer(s), and internal and/or external flash for storing data."),(0,r.kt)("p",null,"The overview below shows some external memories which can be used with an STM32 MCU. Some of the different memory examples are available with both serial and parallel interfaces."),(0,r.kt)(n.Z,{imageSource:"/img/development/hardware-selection/external-memories/memory-overview.png",noShadow:!0,mdxType:"Figure"},"Memory overview"),(0,r.kt)("p",null,"The different STM32 microcontrollers come with different external memory interfaces, allowing to connect different external memories."),(0,r.kt)("h2",p({},{id:"non-volatile-memories"}),"Non-volatile Memories"),(0,r.kt)("p",null,"In a GUI application, the non-volatile storage (flash) is mainly used for storing some or all graphical data assets, such as bitmaps, fonts, translations, and TouchGFX application code.\nThe non-volatile memories are supported by the STM32 products and can be connected with different types of MCU interfaces using either parallel or serial memories and different configurations."),(0,r.kt)(n.Z,{imageSource:"/img/development/hardware-selection/external-memories/non-volatile-memory-overview.png",noShadow:!0,mdxType:"Figure"},"Non-volatile memories"),(0,r.kt)("p",null,"The choice of the non-volatile storage depends on:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Density"),(0,r.kt)("li",{parentName:"ul"},"Performance"),(0,r.kt)("li",{parentName:"ul"},"Type of the interface (parallel/serial)"),(0,r.kt)("li",{parentName:"ul"},"Bill of Material")),(0,r.kt)("h3",p({},{id:"nor-flash"}),"NOR Flash"),(0,r.kt)("p",null,"The NOR flash is a non-volatile memory that allows random access to any area in the memory."),(0,r.kt)("p",null,"NOR flash ranges typically between ",(0,r.kt)("strong",{parentName:"p"},"128 Mbits")," to ",(0,r.kt)("strong",{parentName:"p"},"2 Gbits"),"."),(0,r.kt)("p",null,"For example, for 480x320 resolution and 16 bits per pixel as color depth, the user interface needs ~300Kbytes for a full screen background image. This does not take into account the additional bitmaps needed for buttons, sliders, icons, fonts used, number of languages, etc.\nA 256 Mbits (32 MB) NOR flash can store up to ~100 unique full screen images, and less when adding the rest of the graphical assets needed."),(0,r.kt)("p",null,"The NOR flash can be used in ",(0,r.kt)("strong",{parentName:"p"},"memory mapped")," mode where the external flash is seen as an internal memory for read operations.\nThis mode allows the system masters (such as DMA, LTDC, DMA2D, GFXMMU or SDMMC) to access the memory autonomously even in low-power mode when the CPU is stopped, which is ideal for mobile and wearable applications."),(0,r.kt)("p",null,"The NOR flash memory is available with different interface options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parallel NOR flash (with x8 or x16 interfaces)"),(0,r.kt)("li",{parentName:"ul"},"Serial NOR flash (single, dual, quad and octo data lines for serial memories, and hyperbus flash)")),(0,r.kt)("h4",p({},{id:"serial-nor-flash-memories"}),"Serial NOR Flash Memories"),(0,r.kt)("p",null,"Serial NOR flash memory is widely used as storage in graphical applications."),(0,r.kt)("p",null,"This type of memory has benefits such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"High frequency"),(0,r.kt)("li",{parentName:"ul"},"Simplifying and reducing the printed circuit board (PCB) area"),(0,r.kt)("li",{parentName:"ul"},"Memory mapped mode up to ",(0,r.kt)("strong",{parentName:"li"},"256Mbytes")," of addressable area"),(0,r.kt)("li",{parentName:"ul"},"Number of needed pins is between ",(0,r.kt)("strong",{parentName:"li"},"4")," to ",(0,r.kt)("strong",{parentName:"li"},"12")," pins")),(0,r.kt)("h5",p({},{id:"nor-single-dual-quad-octo-flash-memories"}),"NOR Single, Dual, Quad, Octo Flash Memories"),(0,r.kt)("p",null,"The NOR flash memories are available with different data lines configurations."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Single"),(0,r.kt)("li",{parentName:"ul"},"Dual"),(0,r.kt)("li",{parentName:"ul"},"Quad"),(0,r.kt)("li",{parentName:"ul"},"Octo")),(0,r.kt)("p",null,"Switching to the serial NOR flash memories with more data lines enhances the performance and the bandwidth of the memory interface, but also requires more pins to interface with the STM32 products."),(0,r.kt)("p",null,"Below is an overview of the different SPI memories depending on the number of data lines:"),(0,r.kt)(n.Z,{imageSource:"/img/development/hardware-selection/external-memories/serial-modes.png",noShadow:!0,mdxType:"Figure"},"Serial interface overview"),(0,r.kt)("h4",p({},{id:"parallel-nor-flash-memories"}),"Parallel NOR Flash Memories"),(0,r.kt)("p",null,"Parallel NOR flash memory has the same advantages as the serial flash memory in term of performance and configuration.\nThe parallel NOR flash can be configured in memory mapped mode and can be accessed as if it was an internal memory.\nThe differences between the parallel and serial NOR flash is the number of pins and the complexity of the printed circuit board (PCB)."),(0,r.kt)("p",null,"Up to ",(0,r.kt)("strong",{parentName:"p"},"47 pins")," are needed for the NOR flash memory with up to 24 pins for address and 16 pins for data."),(0,r.kt)("h3",p({},{id:"nand-flash-memories"}),"NAND Flash Memories"),(0,r.kt)("p",null,"NAND flash memory is ideal for graphical applications requiring a high volume of graphical assets and ",(0,r.kt)("strong",{parentName:"p"},"faster write and erase operations"),".\nThe NAND flash memories cannot be configured in a memory mapped mode and as a consequence, the NAND flash memories are ",(0,r.kt)("strong",{parentName:"p"},"not recommended for code execution"),"."),(0,r.kt)("p",null,"NAND flash ranges between ",(0,r.kt)("strong",{parentName:"p"},"1 Gbits")," to ",(0,r.kt)("strong",{parentName:"p"},"512 Gbits"),"."),(0,r.kt)("p",null,"Using a cache in RAM is often necessary when using NAND flash. This enables moving the currently used graphics assets to RAM and drawing them from the cache."),(0,r.kt)(n.Z,{imageSource:"/img/development/hardware-selection/external-memories/nand-flash.png",noShadow:!0,width:"500",mdxType:"Figure"},"NAND flash memory"),(0,r.kt)("h3",p({},{id:"emmc-memories"}),"eMMC Memories"),(0,r.kt)("p",null,"eMMC (Embedded Multi Media Card), established by the MMC Association, is equivalent to a NAND flash in addition to a master integrated controller.\nOne obvious advantage of eMMC is the integration of a controller in the package that provides standard interfaces and management for the flash memory, allowing manufacturers to concentrate on other parts of product development and shorten the time to market."),(0,r.kt)("p",null,"The eMMC flash ranges between ",(0,r.kt)("strong",{parentName:"p"},"2 Gbits")," to ",(0,r.kt)("strong",{parentName:"p"},"128 Gbits"),"."),(0,r.kt)("p",null,"The eMMC has relatively lower random read performance compared to NAND and NOR. eMMC can require adding a cache to overcome slow random read."),(0,r.kt)("p",null,"Up to ",(0,r.kt)("strong",{parentName:"p"},"10 pins")," are needed for the eMMC flash memory with 8 pins for data and 2 pins for control."),(0,r.kt)(n.Z,{imageSource:"/img/development/hardware-selection/external-memories/emmc-flash.png",noShadow:!0,width:"500",mdxType:"Figure"},"eMMC memory"),(0,r.kt)("h2",p({},{id:"volatile-memories"}),"Volatile Memories"),(0,r.kt)("p",null,'External volatile memory is mainly used for storing the framebuffer(s), if the internal MCU RAM is insufficient, and in some cases to cache assets from non-memory mapped flash. This section focuses on SRAM, SDRAM and PSRAM as they are commonly used in embedded systems running a GUI. But there are other available variants, and the memory manufactures are using different naming schemes for their memories for example "hyper RAM", "IoT RAM", "octal RAM". Common for most of them is that it is possible to find an STM32 MCU which supports it.'),(0,r.kt)(n.Z,{imageSource:"/img/development/hardware-selection/external-memories/volatile-memory-overview.png",noShadow:!0,mdxType:"Figure"},"Volatile Memories"),(0,r.kt)("p",null,"When selecting the right external RAM, we recommend having the following in mind:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Density"),(0,r.kt)("li",{parentName:"ul"},"Performance"),(0,r.kt)("li",{parentName:"ul"},"Power consumption"),(0,r.kt)("li",{parentName:"ul"},"Interface / pin size"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"../../../basic-concepts/framebuffer#amount-of-framebuffers"}),"Framebuffer strategy"))),(0,r.kt)("h3",p({},{id:"sram"}),"SRAM"),(0,r.kt)("p",null,"SRAM is a static random-access memory which retains the bit data as long as the power is supplied. Generally SRAM provides faster access, but can be more expensive than DRAM and it comes in smaller densities.\nSRAM typically has a faster access time compared to DRAM and is therefore more suitable for GUIs needing more animations, scaling, rotation etc.\nSRAM comes in both synchronous and asynchronous modes, where the synchronous modes offers higher bandwidth capabilities, but also a more complex interface."),(0,r.kt)(o.Z,{mdxType:"Note"},"Also available as a non-volatile random-access memory called nvSRAM which also has the ability to store and recall data."),(0,r.kt)("h3",p({},{id:"sdram"}),"SDRAM"),(0,r.kt)("p",null,"SDRAM is a dynamic random-access memory and stores each bit of data on capacitors, which requires less physical space to store the same amount of data compared to SRAM. As it requires constant refresh in order to keep the data, it requires more power compared to SRAM."),(0,r.kt)("p",null,"SDRAM densities typically come in 16 Mbits up to 512 Mbits, available in 8, 16, and 32 bit interfaces, running frequencies between 100-200 MHz."),(0,r.kt)("p",null,"A suitable SDRAM for storing two framebuffers running a 24bpp 800*480 resolution would be a 32 Mbits SDRAM as a double framebuffer strategy requires ~18Mbits of RAM."),(0,r.kt)("h3",p({},{id:"psram"}),"PSRAM"),(0,r.kt)("p",null,"PSRAM is pseudo static random access memory, with an internal structure of a DRAM (control logic) with an SRAM interface. It typically comes in 8-256 Mbits densities. PSRAM compared to traditional SDRAM and SRAM has the advantages of higher speed and lower power consumption."),(0,r.kt)("h3",p({},{id:"additional-memories"}),"Additional memories"),(0,r.kt)("p",null,"New octal RAM and Hyper RAM memories use serial 8 bit interfaces in a single and dual data rate mode, offering high throughput speed and good integration."),(0,r.kt)("h3",p({},{id:"selection-of-external-ram-density"}),"Selection of External RAM Density"),(0,r.kt)("p",null,"If your strategy is to place the framebuffer(s) in external RAM, this table gives you an overview of different RAM densities available in the market."),(0,r.kt)("p",null,"It also provides you with an overview of needed RAM for running double framebuffer setup in 1, 2, 4, 8, 16, and 24 bits per pixel (dividing by 2 gives you the required density for a single framebuffer)."),(0,r.kt)("p",null,"In some cases the single framebuffer setup is sufficient and in some STM32 microcontrollers, you have enough internal RAM for placing the framebuffer(s)."),(0,r.kt)(n.Z,{imageSource:"/img/development/hardware-selection/external-memories/sdram-octospi-densities.png",noShadow:!0,mdxType:"Figure"},"SDRAM and OctoSPI Densities"),(0,r.kt)(n.Z,{imageSource:"/img/development/hardware-selection/external-memories/required-ram-for-double-framebuffer-setup.png",noShadow:!0,mdxType:"Figure"},"Required RAM for double framebuffer setup"))}w.isMDXComponent=!0}}]);