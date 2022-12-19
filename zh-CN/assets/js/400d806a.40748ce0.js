"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8926],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=o(n),s=r,g=d["".concat(c,".").concat(s)]||d[s]||u[s]||i;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children))}},36401:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return y},default:function(){return k},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return v}});var a=n(3905),r=n(44035),i=n(22425),l=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&d(e,n,t[n]);return e};const g={id:"creating-dynamic-l8-images",title:"\u521b\u5efa\u52a8\u6001L8\u56fe\u50cf"},y=void 0,f={unversionedId:"development/ui-development/scenarios/creating-dynamic-l8-images",id:"development/ui-development/scenarios/creating-dynamic-l8-images",title:"\u521b\u5efa\u52a8\u6001L8\u56fe\u50cf",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/creating-dynamic-l8-images.mdx",sourceDirName:"development/ui-development/scenarios",slug:"/development/ui-development/scenarios/creating-dynamic-l8-images",permalink:"/4.21/zh-CN/docs/development/ui-development/scenarios/creating-dynamic-l8-images",draft:!1,tags:[],version:"current",frontMatter:{id:"creating-dynamic-l8-images",title:"\u521b\u5efa\u52a8\u6001L8\u56fe\u50cf"},sidebar:"docs",previous:{title:"\u4f7f\u7528L8\u56fe\u50cf\u683c\u5f0f\u51cf\u5c11\u5b58\u50a8\u7a7a\u95f4\u6d88\u8017",permalink:"/4.21/zh-CN/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption"},next:{title:"Scenarios",permalink:"/4.21/zh-CN/docs/category/scenarios-2"}},b={},v=[{value:"\u52a8\u6001L8\u56fe\u50cf",id:"dynamic-l8-images",level:2},{value:"\u752824\u4f4d\u8c03\u8272\u677f\u521b\u5efa\u52a8\u6001L8\u56fe\u50cf",id:"creating-a-dynamic-l8-image-with-24-bit-palette",level:3},{value:"\u8bbf\u95ee\u8c03\u8272\u677f",id:"accessing-the-palette",level:3},{value:"\u52a8\u6001L8\u4f4d\u56fe\u793a\u4f8b",id:"dynamic-l8-bitmap-example",level:2},{value:"\u64cd\u4f5c\u8c03\u8272\u677f",id:"manipulating-the-palette",level:3}],h={toc:v};function k(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=s(s({},h),d),p(t,c({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u52a8\u6001L8\u56fe\u50cf\u7684\u4f7f\u7528\uff0c\u7279\u522b\u662f\u5982\u4f55\u521b\u5efa\u8c03\u8272\u677f\u3002"),(0,a.kt)("p",null,"\u901a\u8bfb\u6b64\u5904\u7684",(0,a.kt)("a",s({parentName:"p"},{href:"../touchgfx-engine-features/dynamic-bitmaps"}),"\u52a8\u6001\u4f4d\u56fe"),"\u548c",(0,a.kt)("a",s({parentName:"p"},{href:"using-the-l8-image-format-to-reduce-memory-consumption"}),"L8\u56fe\u50cf\u683c\u5f0f"),"\u3002"),(0,a.kt)("h2",s({},{id:"dynamic-l8-images"}),"\u52a8\u6001L8\u56fe\u50cf"),(0,a.kt)("p",null,"\u52a8\u6001L8\u56fe\u50cf\u7684\u521b\u5efa\u4e0e\u4efb\u4f55\u5176\u4ed6\u52a8\u6001\u4f4d\u56fe\u4e00\u6837\uff0c\u533a\u522b\u5728\u4e8e\u8fd8\u5fc5\u987b\u6307\u5b9a\u8981\u4e3a\u4f4d\u56fe\u5176\u521b\u5efa\u7684\u8c03\u8272\u677f\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"TouchGFX\u652f\u63013\u79cd\u8c03\u8272\u677f\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8c03\u8272\u677f")),(0,a.kt)("th",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"CLUT_FORMAT_L8_ARGB8888"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"32\u4f4d\uff0c\u7ea2\u3001\u7eff\u3001\u84dd\u8272\u548c\u50cf\u7d20\u963f\u5c14\u6cd5\u901a\u9053\u54048\u4f4d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"CLUT_FORMAT_L8_RGB888"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"24\u4f4d\uff0c\u7ea2\u3001\u7eff\u548c\u84dd\u8272\u54048\u4f4d\uff0c\u65e0\u50cf\u7d20\u963f\u5c14\u6cd5\u901a\u9053")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"CLUT_FORMAT_L8_RGB565"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"16\u4f4d\uff0c\u7ea2\u3001\u7eff\u548c\u84dd\u8272\u5206\u522b\u4e3a5\u4f4d\u30016\u4f4d\u548c5\u4f4d\uff0c\u65e0\u50cf\u7d20\u963f\u5c14\u6cd5\u901a\u9053")))),(0,a.kt)("h3",s({},{id:"creating-a-dynamic-l8-image-with-24-bit-palette"}),"\u752824\u4f4d\u8c03\u8272\u677f\u521b\u5efa\u52a8\u6001L8\u56fe\u50cf"),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u752824\u4f4d\u8c03\u8272\u677f\u521b\u5efa\u4e00\u5e45100x100\u50cf\u7d20L8\u4f4d\u56fe\uff1a"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"BitmapId dynamicBitmap1 = Bitmap::dynamicBitmapCreateL8(100, 100, Bitmap::CLUT_FORMAT_L8_RGB888, 256);\n")),(0,a.kt)("p",null,"\u8be5\u53e5\u5b9e\u73b0\u4e86\u5728\u4f4d\u56fe\u7f13\u5b58\u4e2d\u5206\u914d\u4e86100x100\u50cf\u7d20L8\u4f4d\u56fe\u548c24\u4f4d\u8c03\u8272\u677f\u3002 \u8be5\u8c03\u8272\u677f\u53ef\u4ee5\u4e3a\u52a8\u6001\u4f4d\u56fe\u63d0\u4f9b\u7684256\u79cd\u989c\u8272\uff0c\u4f46\u4e3a\u4e86\u51cf\u5c11\u5b58\u50a8\u7a7a\u95f4\u7684\u6d6a\u8d39\uff0c\u53ef\u4ee5\u8c03\u6574\u4e3a\u9700\u8981\u7684\u6570\u91cf\u3002"),(0,a.kt)("h3",s({},{id:"accessing-the-palette"}),"\u8bbf\u95ee\u8c03\u8272\u677f"),(0,a.kt)("p",null,"\u50cf\u7d20\uff08\u524d32\u4f4d\u5bf9\u9f50\u5730\u5740\uff09\u540e\u9762\u4f9d\u6b21\u662f\u5305\u542bL8\u8c03\u8272\u677f\u683c\u5f0f\uff08\u4ee5\u5c0f\u7aef\u6a21\u5f0f\u4fdd\u5b58\uff09\u76842\u4e2a\u5b57\u8282\u3001\u5305\u542b\u8c03\u8272\u677f\u4e2d\u6761\u76ee\u6570\u91cf\u76842\u4e2a\u5b57\u8282\uff08\u4ee5\u5c0f\u7aef\u6a21\u5f0f\u4fdd\u5b58\uff09\u7136\u540e\u662f\u5b9e\u9645\u8c03\u8272\u677f\u989c\u8272\u3002 \u8fd9\u610f\u5473\u7740\u8c03\u8272\u677f\u989c\u8272\u6570\u636e\u4f4d\u4e8e\u50cf\u7d20\u6570\u636e\u540e\u97624\u4e2a\u5b57\u8282\u4e4b\u540e\uff0832\u4f4d\u5bf9\u9f50\uff09\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u83b7\u53d6\u6307\u5411\uff08\u76ee\u524d\u4e3a\u6b62\u672a\u521d\u59cb\u5316\uff09\u8c03\u8272\u677f\u7684\u6307\u9488\uff0c\u5982\u4e0b\uff1a"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"//Get a pointer to the bitmap data (pixels and palette)\nuint8_t* data = Bitmap::dynamicBitmapGetAddress(dynamicBitmap1);\n\n//1 byte pr pixel, round up to 32-bit\nuint32_t byteSize = 100*100;\nbyteSize = ((byteSize + 3) & ~3);\n\n//Palette size is saved in byte 2 and 3\nint palSize = (data[3] << 8) | data[2];\n\n//Palette starts four bytes after the pixels\nuint8_t* pal = (data + byteSize + 4);\n")),(0,a.kt)("h2",s({},{id:"dynamic-l8-bitmap-example"}),"\u52a8\u6001L8\u4f4d\u56fe\u793a\u4f8b"),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u521b\u5efa\u52a8\u6001L8\u4f4d\u56fe\u548c\u64cd\u4f5c\u8c03\u8272\u677f\u7684\u5b8c\u6574\u793a\u4f8b\u3002 \u901a\u5e38\u4e0d\u4f1a\u5bf9\u4e00\u822c\u5e94\u7528\u8fdb\u884c\u8c03\u8272\u677f\u64cd\u4f5c\u3002 \u8be5\u793a\u4f8b\u65e8\u5728\u63cf\u8ff0\u5982\u4f55\u8bbf\u95ee\u548c\u751f\u6210\u8c03\u8272\u677f\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u4f7f\u7528TouchGFX Designer\uff0c\u521b\u5efa\u4e00\u4e2a\u5c4f\u5e55\uff0c\u5e76\u5728\u80cc\u666f\u4e0a\u63d2\u5165\u4e00\u4e2a\u767d\u8272\u65b9\u6846\u548c\u4e00\u5e45\u56fe\u50cf\uff0c\u4f8b\u5982\u5728(x=140, y=8)\u7684\u4f4d\u7f6e\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/creating-dynamic-l8-images/designer-img-4.17.webp",mdxType:"Figure"},"\u521b\u5efa\u5c4f\u5e55"),(0,a.kt)("p",null,"\u73b0\u5728\u751f\u6210\u4ee3\u7801\u5e76\u6253\u5f00Screen1View.cpp\u6587\u4ef6\u3002 \u6211\u4eec\u5fc5\u987b\u5728",(0,a.kt)("em",{parentName:"p"},"setupScreen"),"\u4e2d\u63d2\u5165\u4ee3\u7801\uff0c\u8fdb\u884c\u4f4d\u56fe\u7f13\u5b58\u521d\u59cb\u5316\u5e76\u521b\u5efa\u52a8\u6001\u4f4d\u56fe\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5148\u521b\u5efa\u4e00\u5e45200*256\u50cf\u7d20\u7684\u4f4d\u56fe\u3002 \u8bb0\u4f4f\uff0cL8\u4f4d\u56fe\u4e2d\u7684\u6bcf\u4e2a\u50cf\u7d20\u4e3a\u4e00\u4e2a\u5b57\u8282\u3002 \u6211\u4eec\u5bf9\u56fe\u50cf\u7684\u6bcf\u4e00\u884c\u4f7f\u7528\u4e0d\u540c\u989c\u8272\u3002 \u7b2c\u4e00\u884c\u4e3a0\u53f7\u8272\uff0c\u6700\u540e\u4e00\u884c\u4e3a255\u53f7\u8272\u3002"),(0,a.kt)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u521d\u59cb\u5316\u8c03\u8272\u677f\u4e2d\u7684\u989c\u8272\u3002 \u8ba1\u7b97\u51fa\u8c03\u8272\u677f\u7684\u8d77\u59cb\u5730\u5740\uff0c\u5e76\u8bbe\u7f6e256\u79cd\u989c\u8272\u7684RGB\u503c\u3002 \u8fd9\u91cc\uff0c\u6211\u4eec\u521b\u5efa\u7684\u989c\u8272\u4ece\u7eff\u8272\u6e10\u53d8\u4e3a\u7ea2\u8272\u5e76\u518d\u6b21\u6e10\u53d8\u56de\u7eff\u8272\u3002"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),'#ifdef SIMULATOR\nuint32_t cacheBuffer[320*1024/4]; //simulate PSRAM\nuint16_t* psram = (uint16_t*)cacheBuffer;\n#else\nuint16_t* psram = (uint16_t*)(0xd0000000 + 480*272*2*2); //Address after two 16bit framebuffers\n#endif\n\nScreen1View::Screen1View()\n{\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n\n    //Create one dynamic bitmap\n    Bitmap::setCache(psram, 320*1024, 1); //320Kb cache\n    const uint16_t palSize = 256;\n    BitmapId dynamicBitmap1 = Bitmap::dynamicBitmapCreateL8(200, 256, Bitmap::CLUT_FORMAT_L8_RGB888, palSize);\n    imageDynamic.setBitmap(Bitmap(dynamicBitmap1));\n\n    if (dynamicBitmap1 == BITMAP_INVALID)\n    {\n        touchgfx_printf("Unable to create dynamic bitmap\\n");\n    }\n    else\n    {\n        uint8_t* data = Bitmap::dynamicBitmapGetAddress(dynamicBitmap1);\n\n        uint8_t* pixel = data;\n        //make colored rows\n        for (int y = 0; y<256; y++)\n        {\n            for (int x = 0; x<200; x++)\n            {\n                *pixel++ = y;\n            }\n        }\n\n        uint32_t byteSize = 200*256;\n        byteSize = ((byteSize + 3) & ~3);\n\n        //Palette starts four bytes after the pixels\n        uint8_t* pal = (data + byteSize + 4);\n\n        //Make palette with 256 colors from green to red to green\n        for (int i = 0; i < palSize; i++)\n        {\n            //BGR\n            pal[i * 3 + 0] = 0x00;\n            pal[i * 3 + 1] = 127 * (1 + cosf(i * 6.28f / (palSize - 1)));\n            pal[i * 3 + 2] = 255 * (sinf(i * 3.14f / (palSize - 1)));\n        }\n    }\n}\n')),(0,a.kt)("p",null,"\u6211\u4eec\u5f97\u5230\u4e86\u4e00\u4e2a\u8fd9\u6837\u7684\u5c4f\u5e55\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/creating-dynamic-l8-images/img-20200225-151937.bmp",mdxType:"Figure"},"\u663e\u793aL8\u56fe\u50cf"),(0,a.kt)("h3",s({},{id:"manipulating-the-palette"}),"\u64cd\u4f5c\u8c03\u8272\u677f"),(0,a.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u53ef\u4ee5\u8bbf\u95ee\u52a8\u6001L8\u4f4d\u56fe\u4f7f\u7528\u7684\u8c03\u8272\u677f\uff0c\u56e0\u6b64\u53ef\u4ee5\u8f7b\u677e\u5730\u64cd\u4f5c\u5b83\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5c06\u8c03\u8272\u677f\u989c\u8272\u5faa\u73af\u6539\u53d8\uff0c\u6bcf\u6b21\u5411\u4e0b\u5faa\u73af\u4e00\u4e2a\u989c\u8272\u503c\uff0c\u5e76\u5f3a\u5236\u6bcf\u5e27\u91cd\u65b0\u7ed8\u5236\u56fe\u50cf\uff1a"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"...\nvoid Screen1View::handleTickEvent()\n{\n    //get palette address\n    uint8_t* data = Bitmap::dynamicBitmapGetAddress(imageDynamic.getBitmap());\n    uint32_t byteSize = 200*256;\n    byteSize = ((byteSize + 3) & ~3);\n    const int palSize = (data[3] << 8) | data[2];\n    uint8_t* pal = (data + byteSize + 4);\n\n    //Cycle palette, copy color 0\n    int8_t blue = pal[0], green = pal[1], red = pal[2];\n\n    //Move palette down, 1->0, 2->1, ...\n    for (int i = 3; i < palSize * 3; i++)\n    {\n        pal[i - 3] = pal[i];\n    }\n\n    //Insert color 0 as color 255\n    pal[(palSize - 1) * 3 + 0] = blue;\n    pal[(palSize - 1) * 3 + 1] = green;\n    pal[(palSize - 1) * 3 + 2] = red;\n\n    //Force redraw by invalidating\n    imageDynamic.invalidate();\n}\n")),(0,a.kt)("p",null,"\u8fd9\u4f1a\u9020\u6210\u52a8\u6001\u5411\u4e0a\u79fb\u52a8\u52a8\u6001\u4f4d\u56fe\u4e2d\u7684\u989c\u8272\uff1a"),(0,a.kt)(r.Z,{width:"200",imageSource:"/img/development/ui-development/scenarios/creating-dynamic-l8-images/demo.webp",mdxType:"Figure"},"L8\u8c03\u8272\u677f\u5faa\u73af\u8272"))}k.isMDXComponent=!0}}]);