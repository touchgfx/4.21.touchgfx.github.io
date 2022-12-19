"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2181],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),u=o,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},22425:function(e,t,a){var n=a(67294);class o extends n.Component{render(){return n.createElement("div",{className:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,a){var n=a(67294),o=a(25026);t.Z=function(e){const t=e.noShadow||!1,a=e.width,r=e.height,i=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:a,height:r,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:a,height:r,src:i})),n.createElement("p",null,e.children))}},2413:function(e,t,a){a.r(t),a.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return x},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return y}});var n=a(3905),o=a(44035),r=a(22425),i=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&h(e,a,t[a]);if(c)for(var a of c(t))d.call(t,a)&&h(e,a,t[a]);return e};const m={id:"using-non-memory-mapped-flash",title:"Using Non-Memory Mapped Flash for Storing Images"},f=void 0,g={unversionedId:"development/scenarios/using-non-memory-mapped-flash",id:"development/scenarios/using-non-memory-mapped-flash",title:"Using Non-Memory Mapped Flash for Storing Images",description:"",source:"@site/docs/development/scenarios/using-non-memory-mapped-flash.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/using-non-memory-mapped-flash",permalink:"/4.21/ko/docs/development/scenarios/using-non-memory-mapped-flash",draft:!1,tags:[],version:"current",frontMatter:{id:"using-non-memory-mapped-flash",title:"Using Non-Memory Mapped Flash for Storing Images"},sidebar:"docs",previous:{title:"Lowering Memory Usage with Partial Framebuffer",permalink:"/4.21/ko/docs/development/scenarios/lowering-memory-usage-with-partial-framebuffer"},next:{title:"Using Serial Flash for images and fonts",permalink:"/4.21/ko/docs/development/scenarios/using-serial-flash"}},b={},y=[{value:"Copying bitmap data from flash to cache",id:"copying-bitmap-data-from-flash-to-cache",level:3},{value:"The BitmapDatabase table",id:"the-bitmapdatabase-table",level:2},{value:"Linker script modifications",id:"linker-script-modifications",level:2},{value:"Modifying the BlockCopy function",id:"modifying-the-blockcopy-function",level:2},{value:"Linking images to RAM",id:"linking-images-to-ram",level:2}],k={toc:y};function x(e){var t,a=e,{components:i}=a,h=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=u(u({},k),h),s(t,l({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"In this section we will discuss how to link all your images to a\nbinary file that you can put in a non-memory mapped flash and how to\nuse that file at runtime together with the bitmap cache.\nTouchGFX cannot draw bitmaps that are stored in non-memory mapped\nflash, but by caching the bitmaps in RAM we can make the bitmaps\nuseable in the application."),(0,n.kt)("p",null,"See the article ",(0,n.kt)("a",u({parentName:"p"},{href:"../ui-development/touchgfx-engine-features/caching-bitmaps"}),"Caching Bitmaps"),"\nfor a general discussion on the bitmap cache."),(0,n.kt)("p",null,"In this article we assume that you have setup a bitmap cache, and\nthat you want to store your bitmaps in non-memory mapped flash. This\ncan be e.g. USB storage, NAND flash etc."),(0,n.kt)("p",null,"The goal is to link the images to a specific address, copy the images\nto a file, and help TouchGFX to copy from the file to the cache."),(0,n.kt)("h3",u({},{id:"copying-bitmap-data-from-flash-to-cache"}),"Copying bitmap data from flash to cache"),(0,n.kt)("p",null,"Recall that when you cache a bitmap, TouchGFX copies the pixels from\nthe original location to the bitmap cache."),(0,n.kt)("p",null,"This copying is done by calling this method from the HAL class:"),(0,n.kt)(r.Z,{mdxType:"CodeHeader"},"HAL.hpp"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"bool HAL::blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes);\n")),(0,n.kt)("p",null,"If your bitmaps are stored in normal addressable flash (like internal\nflash or memory mapped external flash), then the normal blockCopy\nfunction provided in the TouchGFX library is fine, and you do not need\nto do anything."),(0,n.kt)("p",null,"On the other hand, if your bitmaps is stored in storage that is not\naddressable, e.g. a filesystem, then the normal implementation is not\nsufficient and you need to provide an updated version that is able to\nread from your specific flash storage."),(0,n.kt)("p",null,"But first we need to make sure that our bitmaps is linked to a fixed\naddress."),(0,n.kt)("h2",u({},{id:"the-bitmapdatabase-table"}),"The BitmapDatabase table"),(0,n.kt)("p",null,"All bitmaps in TouchGFX is generated to .cpp files in the folder\ngenerated/images/src. Here the bitmaps are represented as byte\narrays."),(0,n.kt)("p",null,"These arrays are compiled by the C++ compiler as any other\nsource code file and are linked into the application."),(0,n.kt)("p",null,"Here is a screenshot of a simple application with a Button and a\nTexture Mapper showing a rotating logo:"),(0,n.kt)(o.Z,{imageSource:"/img/development/ui-development/scenarios/using-non-memory-mapped-flash/screen-shot.png",mdxType:"Figure"},"Button and Texture Mapper"),(0,n.kt)("p",null,"This application uses 3 images: Button_Pressed, Button_Released, and Logo."),(0,n.kt)("p",null,"These 3 bitmaps are converted to .cpp files and linked in as part of\nthe application. The images are referenced in a table called the\nbitmap_database. This table is located in the file\nBitmapDatabase.cpp. Here is the table from the above example (some details removed):"),(0,n.kt)(r.Z,{mdxType:"CodeHeader"},"BitmapDatabase.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-cpp",metastring:"{5-5}","{5-5}":!0}),"extern const unsigned char _blue_buttons_round_edge_small[];\nextern const unsigned char _blue_buttons_round_edge_small_pressed[];\nextern const unsigned char _blue_logo_touchgfx_logo[];\n\nconst touchgfx::Bitmap::BitmapData bitmap_database[] =\n{\n    { _blue_buttons_round_edge_small, ... },\n    { _blue_buttons_round_edge_small_pressed, ... },\n    { _blue_logo_touchgfx_logo, ... }\n};\n\n")),(0,n.kt)("p",null,"The arrays declared first are the arrays containing the pixels of the\nindividual bitmaps. These arrays are defined in other .cpp files. The\nbitmap_database array is holding the addresses of these\narrays. TouchGFX uses this array to find the address of the pixels of\na bitmap."),(0,n.kt)("p",null,"When the programmer requests a bitmap to be cached, TouchGFX finds the\naddress of the bitmap in flash (in the bitmap_database array) and\ncopies data from here."),(0,n.kt)("h2",u({},{id:"linker-script-modifications"}),"Linker script modifications"),(0,n.kt)("p",null,"The linker selects an address for the bitmaps. This selection is based\non the section the bitmaps are placed in. All bitmaps in TouchGFX is\nby default put into the ",(0,n.kt)("strong",{parentName:"p"},"ExtFlashSection"),"."),(0,n.kt)("p",null,"The standard linker scripts (here for GCC) puts this section into\nflash together with other read-only data."),(0,n.kt)("p",null,"In this example we will put the image data in the ExtFlashSection at\naddress ",(0,n.kt)("strong",{parentName:"p"},"0x24000000"),". You can select any address that is otherwise\nunused (not part of the code or data address space)."),(0,n.kt)("p",null,"First we define a new memory area (USB-flash at address 0x24000000),\nin addition to the normal internal FLASH and RAM areas:"),(0,n.kt)(r.Z,{mdxType:"CodeHeader"},"STM32F746.ld"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"MEMORY\n{\n  RAM (xrw)      : ORIGIN = 0x20000000, LENGTH = 320K\n  FLASH (rx)     : ORIGIN = 0x08000000, LENGTH = 1024K\n  USB(r)         : ORIGIN = 0x24000000, LENGTH = 1M\n}\n")),(0,n.kt)("p",null,"Then we instruct the linker to put the ExtFlashSection in the USB area:"),(0,n.kt)(r.Z,{mdxType:"CodeHeader"},"STM32F746.ld"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"ExtFlashSection :\n{\n   *(ExtFlashSection ExtFlashSection.*)\n} >USB\n")),(0,n.kt)("p",null,"After linking we can check the addresses of the bitmaps by inspecting the map file (application.map). Here is the relevant part:"),(0,n.kt)(r.Z,{mdxType:"CodeHeader"},"application.map"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"ExtFlashSection\n                0x24000000    0x23ec0\n *(ExtFlashSection ExtFlashSection.*)\n ExtFlashSection\n                0x24000000    0x10000 TouchGFX/build/.../Blue_Logo_touchgfx_logo.o\n                0x24000000                _blue_logo_touchgfx_logo\n ExtFlashSection\n                0x24010000     0x9f60 TouchGFX/build/.../Blue_Buttons_Round_Edge_small.o\n                0x24010000                _blue_buttons_round_edge_small\n ExtFlashSection\n                0x24019f60     0x9f60 TouchGFX/build/.../Blue_Buttons_Round_Edge_small_pressed.o\n                0x24019f60                _blue_buttons_round_edge_small_pressed\n")),(0,n.kt)("p",null,"We can see here that the total size of the images is 0x23ec0 = 147.136\nbytes. The 3 arrays holding the bitmaps are located sequentially from\naddress 0x24000000."),(0,n.kt)("p",null,"Let's now assume the you want the bitmap data to go to a SD-card. We can extract the binary data for the bitmaps from the .elf file with a simple objcopy command:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"$ arm-none-eabi-objcopy.exe --dump-section ExtFlashSection=images.bin TouchGFX/build/bin/target.elf\n$ ls -l images.bin\n-rw-r--r-- 1 christef Administrators 147136 Feb 20 11:56 images.bin\n")),(0,n.kt)("p",null,"This gives us a file (images.bin) containing the image byte arrays\nonly. This file can be copied to an USB flash, an SD-card, or\neven programmed to a flash chip."),(0,n.kt)("p",null,"The idea is now that when TouchGFX asks for data above address\n0x24000000 we take the data from the images.bin file on the SD-card."),(0,n.kt)("h2",u({},{id:"modifying-the-blockcopy-function"}),"Modifying the BlockCopy function"),(0,n.kt)("p",null,"Recall that when you cache a bitmap to RAM TouchGFX calls HAL::BlockCopy to get the data."),(0,n.kt)("p",null,"To get this linked to the data on your SD-card we can implement a new\nBlockCopy in your specific HAL class. Here we assume the class is\ncalled TouchGFXHAL (as generated by the TouchGFX Generator):"),(0,n.kt)(r.Z,{mdxType:"CodeHeader"},"TouchGFXHal.hpp"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"class TouchGFXHAL : public TouchGFXGeneratedHAL\n{\npublic:\n    ...\n    virtual bool blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes);\n}\n")),(0,n.kt)(r.Z,{mdxType:"CodeHeader"},"TouchGFXHal.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"// This function is called whenever a bitmap is cached. Must copy a number of bytes from the (non-memory-mapped) source\n// to the cache.\nbool TouchGFXHAL::blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes)\n{\n  // If requested data is located within the memory block we have assigned for ExtFlashSection,\n  // provide an implementation for data copying.\n  if (src >= 0x24000000 && src < 0x24100000)\n  {\n    void* dataOffset = src - 0x24000000;\n    // In this example we assume graphics is placed in SD card, and that we have an appropriate function\n    // for copying data from there.\n    sdcard_read(dest, dataOffset, numBytes);\n    return true;\n  }\n  else\n  {\n    // For all other addresses, just use the default implementation.\n    // This is important, as blockCopy is also used for other things in the core framework.\n    return HAL::blockCopy(dest, src, numBytes);\n  }\n}\n")),(0,n.kt)("p",null,"Now you can start caching bitmaps from the SD-card."),(0,n.kt)("p",null,"If TouchGFX tries to draw a bitmap that is not cached it will try to\nread the pixels from the address found in the ",(0,n.kt)("inlineCode",{parentName:"p"},"bitmap_database"),"\ntable. This address will be in the range 0x24000000 - 0x24100000 and\nthe read will result in an exception."),(0,n.kt)("h2",u({},{id:"linking-images-to-ram"}),"Linking images to RAM"),(0,n.kt)("p",null,"If your available RAM is big enough to hold all the images (in the\nabove example that is more than 147.136 bytes) then you do not need to\nuse the bitmap cache to copy the images."),(0,n.kt)("p",null,"The strategy is as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Select a fixed address and range in RAM for the images"),(0,n.kt)("li",{parentName:"ul"},"Remove that range from the RAM area in the linker script"),(0,n.kt)("li",{parentName:"ul"},"Create a new area IMAGES with the selected address and size"),(0,n.kt)("li",{parentName:"ul"},"Place the ExtFlashSection in IMAGES area"),(0,n.kt)("li",{parentName:"ul"},"Link the application and check the .map file"),(0,n.kt)("li",{parentName:"ul"},"Create the images.bin file from the application.elf"),(0,n.kt)("li",{parentName:"ul"},"Before TouchGFX is started, copy the whole images.bin file from the SD-card to the selected address in RAM")),(0,n.kt)("p",null,"This solution is simple, but has some drawbacks:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The available RAM must be big enough to hold all the images"),(0,n.kt)("li",{parentName:"ul"},"Start up time will be larger because of the copying from the SD-card (megabytes can take seconds)")))}x.isMDXComponent=!0}}]);