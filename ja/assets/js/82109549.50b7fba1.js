"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9404],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=i,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44035:function(e,t,n){var a=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,r=(0,i.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:r,target:"_blank"},a.createElement("img",{width:n,height:o,src:r})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:r,target:"_blank"},a.createElement("img",{width:n,height:o,src:r})),a.createElement("p",null,e.children))}},29415:function(e,t,n){var a=n(67294),i=n(88678);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class r extends a.Component{render(){return a.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=r},88678:function(e,t,n){var a=n(67294);class i extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=i},83588:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return g},default:function(){return k},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return b}});var a=n(3905),i=n(44035),o=n(29415),r=n(39130),s=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&u(e,n,t[n]);if(c)for(var n of c(t))h.call(t,n)&&u(e,n,t[n]);return e};const f={id:"preliminary-considerations",title:"Preliminary Considerations"},g=void 0,y={unversionedId:"development/hardware-selection/preliminary-considerations",id:"development/hardware-selection/preliminary-considerations",title:"Preliminary Considerations",description:"",source:"@site/docs/development/hardware-selection/preliminary-considerations.mdx",sourceDirName:"development/hardware-selection",slug:"/development/hardware-selection/preliminary-considerations",permalink:"/4.21/ja/docs/development/hardware-selection/preliminary-considerations",draft:!1,tags:[],version:"current",frontMatter:{id:"preliminary-considerations",title:"Preliminary Considerations"},sidebar:"docs",previous:{title:"Hardware Selection Introduction",permalink:"/4.21/ja/docs/development/hardware-selection/hardware-selection-introduction"},next:{title:"Hardware Components",permalink:"/4.21/ja/docs/category/hardware-components"}},v={},b=[{value:"Display Resolution",id:"display-resolution",level:2},{value:"Color Depth",id:"color-depth",level:2},{value:"Framebuffer Size Calculation",id:"framebuffer-size-calculation",level:2},{value:"Display",id:"display",level:2},{value:"Interface",id:"interface",level:3},{value:"Size",id:"size",level:3},{value:"Touch",id:"touch",level:3},{value:"Capacitive",id:"capacitive",level:4},{value:"Resistive",id:"resistive",level:4},{value:"Animations",id:"animations",level:2},{value:"Mechanical Design Requirements",id:"mechanical-design-requirements",level:2},{value:"Frames Per Second",id:"frames-per-second",level:2}],w={toc:b};function k(e){var t,n=e,{components:s}=n,u=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&h.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},w),u),l(t,p({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"The purpose of this section is to give some pointers to what considerations should be accounted for before deciding upon hardware. Every product is different and as such has different criteria and requirements, so let the following serve as a source of inspiration for what questions you should ask yourself before making a decision."),(0,a.kt)(i.Z,{imageSource:"/img/development/hardware-selection/preliminary-considerations/hardware-selection.png",noShadow:!0,mdxType:"Figure"}),(0,a.kt)("p",null,"Topics being covered in the following are related to the appearance of the display, the needs of memory in the system, the desired performance of the UI and the physical design of the product."),(0,a.kt)("h2",m({},{id:"display-resolution"}),"Display Resolution"),(0,a.kt)("p",null,"Displays come in many different resolutions and aspect ratios. In general, TouchGFX is not dependent on any of these parameters. The display resolution is one of the major factors when selecting suitable hardware and, a higher resolution often equals more pixels, and therefore more data to render and transfer."),(0,a.kt)("p",null,"STM32 microcontrollers generally support up to XGA resolutions (1024*768) in 16/24 bpp, and also support non-standard resolutions like wide or round displays. For resolutions above XGA one must typically compromise on color depth, frames per second, ..."),(0,a.kt)("p",null,"Below is 3 examples of standard resolutions:"),(0,a.kt)(i.Z,{imageSource:"/img/development/hardware-selection/preliminary-considerations/display-resolution.png",noShadow:!0,width:"600",mdxType:"Figure"},"Display resolution examples"),(0,a.kt)("p",null,"Pixel density should also be considered, as a larger display size warrants a higher resolution to be perceived as sharp, though higher pixel density often correlates with higher cost."),(0,a.kt)("p",null,"Some of the questions you should ask yourself when picking a resolution for your application is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"What is the end-user target segment?")," Often consumers demand higher pixel density while some industrial applications can compromise this for lower cost or easier integration."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Are you going to be using a lot of small text in your application?")," Large blocks of small text are usually a lot more readable on higher resolution displays due to greater pixel density."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Are you generally going to be showing a lot of different elements on a screen at a time?")," Larger displays allow showing more elements, or making certain elements more clear, as more inches are available.")),(0,a.kt)("h2",m({},{id:"color-depth"}),"Color Depth"),(0,a.kt)("p",null,"Second major factor is the color depth (bits per pixel) which dictates the amount of information which can be stored per pixel in an image, which thereby means how many different colors you are able to assign to a single pixel."),(0,a.kt)(i.Z,{imageSource:"/img/development/hardware-selection/preliminary-considerations/1bpp24bpp.png",noShadow:!0,mdxType:"Figure"},"1 bit per pixel and 24 bits per pixel applications"),(0,a.kt)("p",null,"Displays are supporting different color depths, and running a 16bpp GUI application on a 24bpp display is possible, but there will be an impact the other way around running a 24bpp application on a display only capable of showing 16 bit colors."),(0,a.kt)("p",null,"Displaying complex images with a lot of nuances in color demands a higher color depth to be as close to the source image as possible. The chosen color depth has an impact on the amount of memory needed."),(0,a.kt)("p",null,"Do not underestimate what you can achieve on lower color depths, as a lot of modern UI design philosophy revolves around flattened and less color intensive applications (for example Google's Material Design). TouchGFX can help in making complex images useful on lower color depths, by applying one of a set of dithering algorithms. Below you can see some examples of what you can achieve at lower color depths:"),(0,a.kt)(i.Z,{imageSource:"/img/development/hardware-selection/preliminary-considerations/low-color.png",noShadow:!0,width:"300",mdxType:"Figure"},"Low color depth application examples"),(0,a.kt)("p",null,"Some of the questions you should ask yourself when picking a color depth for your application is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Do you need to display real life images?")," If using real life images or multi-layered composed images, it is recommended to use 24 bpp pixels both in the application and the display, as 16bpp in some cases is insufficient in showing all needed colors. 16bpp can in many cases be sufficient enough and is still one of the industry standards."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Is grey scale colors or simple 6/8 bpp perhaps all you really need to convey what your application needs?")," Perhaps your application does not need sprawling colors to convey its functionality properly and as such lower color depths can be chosen. This is also decreasing the framebuffer size and thereby the RAM needs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Do you have a limitation on RAM and/or flash?")," Limiting the color depth will decrease the size of both bitmaps and framebuffer (RAM) needs.")),(0,a.kt)("h2",m({},{id:"framebuffer-size-calculation"}),"Framebuffer Size Calculation"),(0,a.kt)("p",null,"A framebuffer is the location where pixel data for a frame is stored, rendered and transferred to the display. The size of the framebuffer is important as a higher pixel amount and higher color depth calls for a higher throughput on RAM and display interface."),(0,a.kt)("p",null,"The size in bytes of a framebuffer is calculated by:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"display width * display height * (bits per pixel / 8)")),(0,a.kt)("p",null,"As an example, an 800x480 application with a color depth of 16bpp and a single framebuffer would need a framebuffer allocated with a size of:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"800 * 480 * (16 / 8) = 768.000 bytes (768.000/1024 = 750Kbytes) ")),(0,a.kt)("p",null,"So when you decide on a resolution and color depth, be sure you have enough RAM to support it. Some applications requires 2 framebuffers, so in the above example the needed RAM is 750 Kilobytes * 2 = 1500 Kilobytes."),(0,a.kt)(i.Z,{imageSource:"/img/development/hardware-selection/preliminary-considerations/framebuffer-calculations.png",noShadow:!0,width:"600",mdxType:"Figure"},"Framebuffer calculations"),(0,a.kt)(o.Z,{mdxType:"FurtherReading"},"Note that the memory needed to support the framebuffer also heavily relies on the chosen framebuffer strategy (single, double, partial) which you can read more about in the Framebuffer strategy article ",(0,a.kt)(r.Z,{to:"../../basic-concepts/framebuffer",mdxType:"Link"},"Framebuffer"),". Some STM32 microcontrollers supports up to HVGA resolutions running only internal RAM, for a very cost-effective solution."),(0,a.kt)("h2",m({},{id:"display"}),"Display"),(0,a.kt)("h3",m({},{id:"interface"}),"Interface"),(0,a.kt)("p",null,"It is possible to select displays with different display interfaces (such as SPI, LTDC, MIPI-DSI), which all have different impacts on number of pins needed, bandwidth, supported resolutions and potentially also the amount of external RAM needed. Read more about this and the pros and cons of each in the ",(0,a.kt)("a",m({parentName:"p"},{href:"hardware-components/hardware-selection-display"}),"Display")," section."),(0,a.kt)("h3",m({},{id:"size"}),"Size"),(0,a.kt)("p",null,"The physical size of the display is also important to consider. Larger displays are generally easier to operate and easier to give precise touch commands, but also require a larger resolution to be easy on the eyes, thus impacting the need for more memory and throughput. If the information on the display is being shown 1-2 meters away, the text, icons etc. needs to be large enough."),(0,a.kt)("h3",m({},{id:"touch"}),"Touch"),(0,a.kt)("p",null,"There are two main types of touch displays:"),(0,a.kt)("h4",m({},{id:"capacitive"}),"Capacitive"),(0,a.kt)("p",null,"Capacitive touch displays have much higher touch sensitivity which is important if the application requires more advanced touch operations such as dragging, swiping etc. and is also the most used in modern devices due to this fact."),(0,a.kt)("p",null,"However, they are also more expensive and can often not operated with gloves, so if this is important, perhaps resistive is the solution."),(0,a.kt)("h4",m({},{id:"resistive"}),"Resistive"),(0,a.kt)("p",null,"This cheaper alternative is much less sensitive and has poor visibility in sunlight, but can be operated with gloves as it is less sensitive to unintended interactions, and is generally more resistant."),(0,a.kt)("p",null,"So if all your touch operations consist of simple button presses, perhaps a resistive display is enough. The STM32F429-DISCO board is using a Resistive touch display."),(0,a.kt)("h2",m({},{id:"animations"}),"Animations"),(0,a.kt)("p",null,"Running complex animations, like full screen transitions, rotation, and scaling, can have a significant impact on performance if the throughput and calculation power of the hardware is not sufficient."),(0,a.kt)("p",null,"Some of the questions you need to ask yourself when deciding on the level of animation in your application are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Do you need high speed full screen transitions?")," Full screen transitions need to render the full framebuffer and are as such dependent on enough MCU cycles, and fast enough access and transfer of pixel data. The needed system performance also depends on resolution and color depth. High resolution full screen transition are mostly recommended to be used on STM32 high performance products.\nSome transitions require additional storage, and might therefore result in a larger amount of memory needed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Do you need complex texture mapper animations like rotation and scaling?")," Animating a texture mapper can be quite intensive on the system when it comes to calculations and transferring bitmaps and as such generally needs higher MHz, and high memory throughput.")),(0,a.kt)(i.Z,{imageSource:"/img/development/hardware-selection/preliminary-considerations/animations.gif",width:"480",mdxType:"Figure"},"Animations"),(0,a.kt)("h2",m({},{id:"mechanical-design-requirements"}),"Mechanical Design Requirements"),(0,a.kt)("p",null,"Physical casing requirements of a product will vary greatly and can have an impact on the hardware chosen. Home appliances will have other requirements to hazardous industrial usage and therefore, some of the questions you should ask yourself when unveiling the physical limitations could be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Is your product required to be very small?")," An example could be a smart watch, which will have a limited casing size, which is limiting the size of the PCB, and therefore choosing the correct components is important. STM32 is offering a wide variety of MCU packages, like a WLCSP package."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Is your product going to be subject to extreme temperatures?")," Capacitive displays can under perform during extraordinary heat or extraordinary cold. So perhaps if you're installing your product in for example cold storage, a resistive display will be a better user experience. The STM32 product portfolio offers microcontrollers with ambient temperature range up to 85, 105 and 125 degrees."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Does your product need to be very resistant to outdoor environmental factors such as water or dust?")," Different technologies offer different quality and features, and adding a cover lens for protection purposes could be one option."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Is visibility in high sunlight important?")," Displays varies in candela and lumen, and the higher lumen and candela of the display the higher readability of the display. Adding a special cover lens can also improve this. Or using a another display technology which may also offer reflective features.")),(0,a.kt)("h2",m({},{id:"frames-per-second"}),"Frames Per Second"),(0,a.kt)("p",null,"A higher and stable Frames Per Second (FPS) count is often preferable since this makes an application seem much smoother."),(0,a.kt)("p",null,"Sometimes FPS is less important. For instance in a static GUI with minimum display animation updates. In such cases lower cost hardware might be suitable."),(0,a.kt)("p",null,"But having a pretty and smooth application with a lot of flashy animations can also be a huge selling point depending on the targeted user segment, so as with anything related to hardware selection, it is all about meeting the end-users expectations, and providing a good user experience."),(0,a.kt)("p",null,"The overall performance of a graphical user interface comes down to the performance at system level, accounting for components like the MCU, RAM, Flash, display, interfaces throughput, and also hardware capabilities like the STM32 Chrom-ART."),(0,a.kt)("p",null,"The figures below paint a very generalized picture of the impact of some different parameters. To select the right hardware, these parameters need to be considered. Also taking into consideration that the STM32 Chrom-ART is offloading the MCU, and thereby in some cases decreases the importance of a high MCU frequency."),(0,a.kt)(i.Z,{imageSource:"/img/development/hardware-selection/preliminary-considerations/fps-figures.png",noShadow:!0,mdxType:"Figure"},"The impact on FPS of different parameters"))}k.isMDXComponent=!0}}]);