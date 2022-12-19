"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9735],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=s(n),c=r,h=p["".concat(m,".").concat(c)]||p[c]||u[c]||o;return n?a.createElement(h,i(i({ref:t},g),{},{components:n})):a.createElement(h,i({ref:t},g))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:o,src:i})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:o,src:i})),a.createElement("p",null,e.children))}},29415:function(e,t,n){var a=n(67294),r=n(88678);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=i},88678:function(e,t,n){var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},30504:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return k},default:function(){return w},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return N}});var a=n(3905),r=n(44035),o=n(22425),i=n(29415),l=n(39130),m=Object.defineProperty,s=Object.defineProperties,g=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&h(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&h(e,n,t[n]);return e};const f={id:"using-the-l8-image-format-to-reduce-memory-consumption",title:"Using the L8 Image Format to Reduce Memory Consumption"},k=void 0,b={unversionedId:"development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",id:"development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",title:"Using the L8 Image Format to Reduce Memory Consumption",description:"",source:"@site/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption.mdx",sourceDirName:"development/ui-development/scenarios",slug:"/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",permalink:"/4.21/ja/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",draft:!1,tags:[],version:"current",frontMatter:{id:"using-the-l8-image-format-to-reduce-memory-consumption",title:"Using the L8 Image Format to Reduce Memory Consumption"},sidebar:"docs",previous:{title:"Loading Images at Runtime",permalink:"/4.21/ja/docs/development/ui-development/scenarios/loading-images-at-runtime"},next:{title:"Creating Dynamic L8 Images",permalink:"/4.21/ja/docs/development/ui-development/scenarios/creating-dynamic-l8-images"}},y={},N=[{value:"Example L8 Image",id:"example-l8-image",level:2},{value:"Using  L8 Images in TouchGFX Designer",id:"using--l8-images-in-touchgfx-designer",level:2},{value:"Transparent Images",id:"transparent-images",level:2},{value:"Converting an image to 256 colors",id:"converting-an-image-to-256-colors",level:2},{value:"Paint.NET",id:"paintnet",level:3},{value:"ImageMagick",id:"imagemagick",level:3},{value:"Comparison",id:"comparison",level:3},{value:"Manual Configuration",id:"manual-configuration",level:2}],v={toc:N};function w(e){var t,n=e,{components:m}=n,h=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},v),h),s(t,g({components:m,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Images in the L8 format take up less flash storage and are faster to draw than e.g. ARGB8888."),(0,a.kt)("p",null,"An image in L8 format consists of a color palette and a pixel array: The color palette lists up to 256 different colors specified in either 16-bit format RGB565, 24-bit format RGB888, or 32-bit format ARGB8888. The pixel array consists of one byte for each pixel. This byte is an index into the color palette (list of colors), pointing out the color for the pixel. The TouchGFX framework draws an L8 image by reading the pixels one-by-one, looking up the colors in the palette and writing these to the framebuffer. This happens automatically and is accelerated by the STM32 Chrom-ART hardware accelerator, if available on the hardware."),(0,a.kt)("p",null,"8-bit per pixel means that one L8 image can use 256 different colors. Another L8 image can use 256 other colors, since the two images each have their own palette."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/l8-image-with-4x4-pixels-and-palette-with-4-colors.png",mdxType:"Figure"},"An L8 image with 4 x 4 pixels and a palette with 4 colors"),(0,a.kt)("p",null,"Pixels are one byte (8-bit) each. The size of the pixels is therefore width x height bytes. The palette colors can be 16-bit, 24-bit, or 32 bit colors. Each color definition will therefore take up 2, 3, or 4 bytes."),(0,a.kt)("p",null,"Solid images should be stored in L8_RGB888. If the image is transparent the 32-bit format (ARGB8888) must be used:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Format")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Framebuffer format")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Supports transparent pixels")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"}," Supported by DMA2D ")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"L8_RGB565"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"16-bit RGB565"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"L8_RGB888"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"24-bit RGB888"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"L8_ARGB8888"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Both"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Yes")))),(0,a.kt)("p",null,"The L8 format with a RGB565 palette is not supported by DMA2D. This\nmeans that drawing images in this format is not hardware accelerated.\nThis format should therefore not be used unless you are on a platform\nwithout DMA2D (for example the STM32G0 or STM32F410)."),(0,a.kt)("p",null,"If you are using a serial flash (non-memory-mapped) to store the\nimages and a 16-bit framebuffer (format RGB565), then you should use\nthe L8_RGB565 format, because the color format then matches the\nframebuffer format and is faster to copy to the framebuffer."),(0,a.kt)("p",null,"The table below shows the preferred L8 format:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Framebuffer format")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Platform has DMA2D")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"}," Platform without DMA2D ")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"RGB565"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"L8_RGB888"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"L8_RGB565")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"RGB888"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"L8_RGB888"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"L8_RGB888")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"ARGB8888"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"L8_RGB888"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"L8_RGB888")))),(0,a.kt)("p",null,"Transparent images should always be in L8_ARGB8888."),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,"Read more about palette image formats here: ",(0,a.kt)(l.Z,{to:"https://en.wikipedia.org/wiki/Indexed_color",mdxType:"Link"},"https://en.wikipedia.org/wiki/Indexed_color"))),(0,a.kt)("h2",d({},{id:"example-l8-image"}),"Example L8 Image"),(0,a.kt)("p",null,"Here is a typical logo image. This image only uses 16 different colors:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-with-16-24bit-colors.png",mdxType:"Figure"},"200 x 200 pixels L8 image with 16 different 24-bit colors."),(0,a.kt)("p",null,"The size in flash of this image is significant lower than the original image in the standard 24-bit format (RGB888). The table below lists the flash usage for this concrete image for the three different palette formats and for the non L8 format"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Format")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Size of pixels (bytes)")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Size of palette (bytes)")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Total size (bytes)")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Reduction in %")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"RGB888"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"120,000"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"0"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"120,000"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"L8_RGB565"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"40,000"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"32"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"40,032"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"66.6%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"L8_RGB888"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"40,000"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"48"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"40,048"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"66.6%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"L8_ARGB8888"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"40,000"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"64"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"40,064"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"66.6%")))),(0,a.kt)("p",null,"We see that the size reduction is very large, and that the size of the palette is insignificant on a medium sized image."),(0,a.kt)("h2",d({},{id:"using--l8-images-in-touchgfx-designer"}),"Using  L8 Images in TouchGFX Designer"),(0,a.kt)("p",null,"It is very easy to use the L8 image format in TouchGFX. The only thing to do is to configure the image converter to convert the image from PNG to L8 format. Here we will go through the whole process:"),(0,a.kt)("p",null,"Start a new project in the TouchGFX Designer. Copy your image to the assets/images folder in the new project:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-assets-images-folder.png",mdxType:"Figure"},"Images folder of TouchGFX project"),(0,a.kt)("p",null,"Now go to the TouchGFX Designer and click the ",(0,a.kt)("a",d({parentName:"p"},{href:"../designer-user-guide/images-view"}),"Images tab")," in the top bar and select the image:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-touchgfx-designer-images-4.17.png",mdxType:"Figure"},"Logo in Images view of TouchGFX Designer"),(0,a.kt)("p",null,"On the right side on the window, select image format L8_RGB888 (this example is running 24 bit colors)."),(0,a.kt)("p",null,"An image Widget can now be inserted on the canvas (here we inserted a Box in the background):"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-touchgfx-designer-canvas-4.17.png",mdxType:"Figure"},"Image widget on Canvas in TouchGFX Designer"),(0,a.kt)("p",null,"Nothing needs to be changed in the UI code. The Image Converter converts the PNG file and generates an image in L8 format because of the configuration we did in the Images tab."),(0,a.kt)("h2",d({},{id:"transparent-images"}),"Transparent Images"),(0,a.kt)("p",null,"As mentioned above it is also possible to use L8 format for images with transparency."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/button-image-32bit-non-opaque-argb8888.png",mdxType:"Figure"},"170 x 60 pixels button image in 32 bit format ARGB8888"),(0,a.kt)("p",null,"The above image uses 108 colors (many shades of blue). This image can use the format L8_ARGB8888. The size will be significantly lower:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Format")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Size of pixels (bytes)")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Size of palette (bytes)")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Total size (bytes)")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Reduction in %")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"ARGB8888"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"40,800"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"0"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"40,800"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"L8_ARGB8888"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"10,200"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"432"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"10,632"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"73.9%")))),(0,a.kt)("h2",d({},{id:"converting-an-image-to-256-colors"}),"Converting an image to 256 colors"),(0,a.kt)("p",null,"Many images use more than 256 colors. This is common for images that are photo-realistic or images with gradients. These images cannot directly be converted to L8 image format in the TouchGFX Designer, because they contain to many colors."),(0,a.kt)("p",null,"In many cases though, it is possible to reduce the number of colors used in a specific image. Ideally, a graphics artist will convert/supply the images in 256 colors, however image manipulation tools can also perform the conversion without loosing too much of the image quality."),(0,a.kt)("h3",d({},{id:"paintnet"}),"Paint.NET"),(0,a.kt)("p",null,"The simplest way is to use Paint.NET. Open the original image and use Save As to save the image in another file. In the Save Configuration dialog, select 8-bit, as pixel depth:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/paint-dot-net-convert-to-8bit.png",mdxType:"Figure"},"Paint.NET saving image in 8 bit format"),(0,a.kt)("p",null,"Now use the new PNG in your project. Remember to select the L8_ARGB8888 format in the ",(0,a.kt)("a",d({parentName:"p"},{href:"../designer-user-guide/images-view"}),"Images tab"),' in the TouchGFX Designer. Shadows are not handled very well, but icons with transparent edges looks good in many cases. It is possible to adjust the "Transparency threshold" value and in some cases improve the result.'),(0,a.kt)("h3",d({},{id:"imagemagick"}),"ImageMagick"),(0,a.kt)("p",null,"Another suitable tool, that sometimes results in better L8 images, is ImageMagick (download from ",(0,a.kt)("a",d({parentName:"p"},{href:"https://imagemagick.org/"}),"www.imagemagick.org"),"). This tool can convert images from the command line. This makes it suitable for use in scripts. To convert the clock_bg.png to an image using at most 256 colors, use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),"magick convert clock_bg.png -colors 256 clock_bg_l8_256.png\n")),(0,a.kt)("p",null,"ImageMagick can also tell you how many colors are used in an image. Use this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"magick identify -format %k Blue_Buttons_Round_Edge_small.png\n")),(0,a.kt)("h3",d({},{id:"comparison"}),"Comparison"),(0,a.kt)("p",null,"The three images (original, L8 using Paint.NET, L8 using ImageMagick) are seen below for comparison:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/clock-image-original-paint-dot-net-image-magick-comparison.png",mdxType:"Figure"},"Clock image comparison, left to right: original, Paint.NET, ImageMagick"),(0,a.kt)("p",null,"The middle clock lost the details in the border shadow. In both cases the central part of the clock background looks usable."),(0,a.kt)("h2",d({},{id:"manual-configuration"}),"Manual Configuration"),(0,a.kt)("p",null,"It is also possible to select image formats without using the TouchGFX Designer. The image formats are specified in file application.config located in the project root:"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"application.config"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "image_configuration": {\n    images": {\n      "Blue_Buttons_Round_Edge_small.png": {\n        "format": "L8_ARGB8888"\n      }\n    },\n    "dither_algorithm": "2",\n    "alpha_dither": "yes",\n    "layout_rotation": "0",\n    "opaque_image_format": "RGB888",\n    "nonopaque_image_format": "ARGB8888",\n    "section": "ExtFlashSection",\n    "extra_section": "ExtFlashSection"\n  }\n}\n')),(0,a.kt)("p",null,'The "images" section under "image_configuration" specifies the format for individual images. If an image is not mentioned here, the image will be generated in the default format (opaque_image_format or nonopaque_image_format).'),(0,a.kt)("p",null,"We recommend using the TouchGFX Designer for image configuration when possible."))}w.isMDXComponent=!0}}]);