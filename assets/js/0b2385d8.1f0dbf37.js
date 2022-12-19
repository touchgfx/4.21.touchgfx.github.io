"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8140],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(a),u=r,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},22425:function(e,t,a){var n=a(67294);class r extends n.Component{render(){return n.createElement("div",{className:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,a){var n=a(67294),r=a(25026);t.Z=function(e){const t=e.noShadow||!1,a=e.width,o=e.height,i=(0,r.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:a,height:o,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:a,height:o,src:i})),n.createElement("p",null,e.children))}},65895:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return b}});var n=a(3905),r=a(44035),o=a(22425),i=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&h(e,a,t[a]);if(d)for(var a of d(t))p.call(t,a)&&h(e,a,t[a]);return e};const m={id:"using-serial-flash",title:"Using Serial Flash for images and fonts"},f=void 0,g={unversionedId:"development/scenarios/using-serial-flash",id:"development/scenarios/using-serial-flash",title:"Using Serial Flash for images and fonts",description:"",source:"@site/docs/development/scenarios/using-serial-flash.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/using-serial-flash",permalink:"/4.21/docs/development/scenarios/using-serial-flash",draft:!1,tags:[],version:"current",frontMatter:{id:"using-serial-flash",title:"Using Serial Flash for images and fonts"},sidebar:"docs",previous:{title:"Using Non-Memory Mapped Flash for Storing Images",permalink:"/4.21/docs/development/scenarios/using-non-memory-mapped-flash"},next:{title:"Using Non-Memory Mapped Flash for Font Data",permalink:"/4.21/docs/development/scenarios/fonts-in-unmapped-flash"}},k={},b=[{value:"Configuration",id:"configuration",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Images",id:"images",level:2},{value:"Font data",id:"font-data",level:2}],y={toc:b};function v(e){var t,a=e,{components:i}=a,h=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=u(u({},y),h),s(t,l({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"This section discusses how to use a serial flash (or other\nunmapped storage) to store images and fonts. The technique described here is especially usefull on STM32G0 and\nother deviced with very little RAM."),(0,n.kt)("p",null,"See the article ",(0,n.kt)("a",u({parentName:"p"},{href:"lowering-memory-usage-with-partial-framebuffer"}),"Lowering Memory Usage with Partial\nFramebuffer")," for a\nintroduction to partial framebuffers which are often used together\nwith a serial flash.\nSee also the article ",(0,n.kt)("a",u({parentName:"p"},{href:"using-non-memory-mapped-flash"}),"Using Non-Memory Mapped Flash for storing\nimages")," for an introduction to caching\nbitmaps from unmapped flash to RAM."),(0,n.kt)("h2",u({},{id:"configuration"}),"Configuration"),(0,n.kt)("p",null,'To use a serial flash with your TouchGFX application you must change the TouchGFX Generator configuration to enable the "External Data Reader" in "Additional Features".'),(0,n.kt)(r.Z,{imageSource:"/img/development/touchgfx-hal-development/generator-user-guide/additional-features-data-reader.png",width:"520",noShadow:!0,mdxType:"Figure"},"Additional Features: Data Reader"),(0,n.kt)("p",null,"With this feature enabled the TouchGFX Generator changes the\nconfiguration to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash")," LCD class. It also\ngenerates a subclass of the ",(0,n.kt)("inlineCode",{parentName:"p"},"touchgfx::FlashDataReader"),":"),(0,n.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-cpp",metastring:"{2-2,8-9}","{2-2,8-9}":!0}),"static TouchGFXDataReader dataReader;\nstatic LCD16bppSerialFlash display(dataReader);\nstatic ApplicationFontProvider fontProvider;\n...\nvoid touchgfx_init()\n{\n    ...\n    hal.setDataReader(&dataReader);\n    fontProvider.setFlashReader(&dataReader);\n    ...\n}\n")),(0,n.kt)("p",null,"This code creates an instance of the ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader")," class and\npasses that instance to the display object, to the HAL object, and to\nthe ApplicationFontProvider object. These three objects will use the\ndataReader object to access data in the serial flash. The data can be\nboth images and font data."),(0,n.kt)("p",null,"The system programmer must finish the implementation of the\n",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader")," class to actually read data from a flash."),(0,n.kt)("h2",u({},{id:"implementation"}),"Implementation"),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"TouchGFXDataReader")," class implements the\n",(0,n.kt)("a",u({parentName:"p"},{href:"../../api/classes/classtouchgfx_1_1_flash_data_reader/#public-functions"}),(0,n.kt)("em",{parentName:"a"},"touchgfx::FlashDataReader")),"\ninterface. This interface has the following 4 methods that needs to be\nimplemented on a specific hardware."),(0,n.kt)(o.Z,{mdxType:"CodeHeader"},"include/touchgfx/hal/FlashDataReader.hpp"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"    bool addressIsAddressable(const void* address)\n    void copyData(const void* src, void* dst, uint32_t bytes)\n    void startFlashLineRead(const void* src, uint32_t bytes)\n    const uint8_t* waitFlashReadComplete()\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"addressIsAddressable")," method is used by the ",(0,n.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash"),"\nclass to decide if some data can be directly read (i.e. is located in\ninternal RAM or internal flash) or if it should be read through the\ndataReader object."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"copyData"),"*` method is used to copy data synchronously from the\nflash to RAM. This function is typically used when the data is not\nfurther processed. E.g. when copying a solid image to a framebuffer."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"startFlashLineRead")," method is used when multiple lines of data\nare required from the flash. The ",(0,n.kt)("inlineCode",{parentName:"p"},"startFlashLineRead")," method initiates\na read of data. The method can initiate an asynchronous read and\nshould return immediately after starting the read. The\n",(0,n.kt)("em",{parentName:"p"},"waitFlashReadComplete")," method should wait for the read to finish, and\nreturn a pointer to a buffer holding the data."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash")," can issue one flash read while processing the\npreviously read data (in some situations). This means that at least\ntwo buffers are required in the dataReader to gain full concurrency."),(0,n.kt)("p",null,"The TouchGFX Generator generates the ",(0,n.kt)("inlineCode",{parentName:"p"},"FlashDataReader")," in two classes:\n",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader"),". The\n",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader")," is the superclass of the two and contains\na default implementation. If that implementation is not suitable, the\napplication programmer can change the implementation of the virtual\nfunctions in the ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader")," class."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader")," implementation calls C-functions to do\nthe work. These application are implemented by the system programmer."),(0,n.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFX/target/generated/TouchGFXGeneratedDataReader.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),'extern "C" __weak void DataReader_WaitForReceiveDone();\nextern "C" __weak void DataReader_ReadData(uint32_t address24, uint8_t* buffer, uint32_t length);\nextern "C" __weak void DataReader_StartDMAReadData(uint32_t address24, uint8_t* buffer, uint32_t length);\n\nvoid TouchGFXGeneratedDataReader::startFlashLineRead(const void* src, uint32_t bytes)\n{\n    /* Start transfer using DMA */\n    DataReader_StartDMAReadData((uint32_t)src, (readToBuffer1 ? buffer1 : buffer2), bytes);\n}\n')),(0,n.kt)("p",null,"The implementation is found in the ",(0,n.kt)("inlineCode",{parentName:"p"},"MB1642BDataReader.c")," file:"),(0,n.kt)(o.Z,{mdxType:"CodeHeader"},"Core/Src/MB1642BDataReader.c"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"void DataReader_StartDMAReadData(uint32_t address24, uint8_t* buffer, uint32_t length)\n{\n    readDataDMA(address24, buffer, length);\n}\n\nvoid readDataDMA(uint32_t address24, uint8_t* buffer, uint32_t length)\n{\n    // Pull Flash CS pin low\n    isReceivingData = 1;\n    FLASH_CS_GPIO_Port->BRR = FLASH_CS_Pin;\n\n    *((__IO uint8_t*)&hspi2.Instance->DR) = CMD_READ;\n\n    ...\n}\n")),(0,n.kt)("p",null,"This implementation is specific to the protocol used by the flash and\nthe GPIO used for SPI and CS. All three C functions must be\nimplemented for the ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader")," class to work."),(0,n.kt)("h2",u({},{id:"images"}),"Images"),(0,n.kt)("p",null,"As mentioned in the introduction the ",(0,n.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash")," class can\nread image pixels through the dataReader object. For this to work we\nmust change the lnker script to put images in an address range outside\nthe internal flash range."),(0,n.kt)("p",null,"On the STM32G071 we have selected the address 0x90000000 as start address for the serial flash:"),(0,n.kt)(o.Z,{mdxType:"CodeHeader"},"gcc/STM32G071RBTX_FLASH.ld"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"MEMORY\n{\n  RAM        (xrw)    : ORIGIN = 0x20000000,   LENGTH = 36K\n  FLASH      (rx)     : ORIGIN = 0x8000000,    LENGTH = 128K\n  SPI_FLASH  (r)      : ORIGIN = 0x90000000,   LENGTH = 8M\n}\n\n/* Sections */\nSECTIONS\n{\n  ...\n\n  ExtFlashSection :\n  {\n    *(ExtFlashSection ExtFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n\n  FontFlashSection :\n  {\n    *(FontFlashSection FontFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n}\n")),(0,n.kt)("p",null,"This puts the ",(0,n.kt)("inlineCode",{parentName:"p"},"ExtFlashSection")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"FontFlashSection")," into the 0x90000000 address range."),(0,n.kt)("p",null,"The remaining task is to write the data to the external flash using a flasher tool."),(0,n.kt)("p",null,"A short description on writing flash loaders for STM32CubeProgrammer can be found in section 2.3.3 in this document: ",(0,n.kt)("a",u({parentName:"p"},{href:"https://www.st.com/resource/en/user_manual/dm00403500-stm32cubeprogrammer-software-description-stmicroelectronics.pdf#page=25"}),"UM2237 STMCubeProgrammer User Manual")),(0,n.kt)("h2",u({},{id:"font-data"}),"Font data"),(0,n.kt)("p",null,"The above linker script puts the font pixel data and the font\ncharacter metadata (with and height) into the external flash (both\ntypes of data are in the FontFlashSection). This data is also read\nthrough the dataReader object when drawing characters on the Screen"),(0,n.kt)("p",null,'If you are not using the "Unmapped Storage Format" for your you must\nchange the linker script and the file\n',(0,n.kt)("inlineCode",{parentName:"p"},"include/touchgfx/hal/Config.hpp")," to move the font character metadata\nto internal flash."),(0,n.kt)("p",null,"See the article about ",(0,n.kt)("a",u({parentName:"p"},{href:"fonts-in-unmapped-flash"}),"Fonts in unmapped\nstorage")," for more information on the font\nformats."))}v.isMDXComponent=!0}}]);