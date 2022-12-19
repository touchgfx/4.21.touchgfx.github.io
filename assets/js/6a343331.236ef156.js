"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6056],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),h=o,f=s["".concat(c,".").concat(h)]||s[h]||p[h]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class o extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=o},83557:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return h},metadata:function(){return m},toc:function(){return v}});var r=n(3905),o=n(22425),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))u.call(t,n)&&p(e,n,t[n]);return e};const h={id:"modifying-generated-behavior",title:"Modifying Generated Behavior",sidebar_label:"Modifying Generated Behavior"},f=void 0,m={unversionedId:"development/touchgfx-hal-development/generator-how-to/modifying-generated-behavior",id:"development/touchgfx-hal-development/generator-how-to/modifying-generated-behavior",title:"Modifying Generated Behavior",description:"",source:"@site/docs/development/touchgfx-hal-development/generator-how-to/modifying-generated-behavior.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to",slug:"/development/touchgfx-hal-development/generator-how-to/modifying-generated-behavior",permalink:"/4.21/docs/development/touchgfx-hal-development/generator-how-to/modifying-generated-behavior",draft:!1,tags:[],version:"current",frontMatter:{id:"modifying-generated-behavior",title:"Modifying Generated Behavior",sidebar_label:"Modifying Generated Behavior"},sidebar:"docs",previous:{title:"Generating Code",permalink:"/4.21/docs/development/touchgfx-hal-development/generator-how-to/generating-code"},next:{title:"TouchGFX Designer Project",permalink:"/4.21/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-designer-project"}},g={},v=[{value:"Extending behavior of HAL",id:"extending-behavior-of-hal",level:2},{value:"Overriding HAL configuration",id:"overriding-hal-configuration",level:2}],y={toc:v};function b(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},y),p),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"It is important to understand the structure of the generated code and how developers can use it to customize configurations\nand behavior."),(0,r.kt)("p",null,"Handwritten user code in files generated by STM32CubeMX are protected through the use of ",(0,r.kt)("strong",{parentName:"p"},"User Code")," sections placed\nstrategically throughout the code generated by STM32CubeMX (C code).\xa0In the code generated by TouchGFX Generator\n(C++ code) this flexibility is accomplished through inheritance as described in the ",(0,r.kt)("a",s({parentName:"p"},{href:"../touchgfx-architecture#abstraction-layer-classes"}),"AL architecture"),"."),(0,r.kt)("p",null,"TouchGFX Generator ",(0,r.kt)("a",s({parentName:"p"},{href:"generating-code#generated-project"}),"generates")," modifiable user classes in the ",(0,r.kt)("em",{parentName:"p"},"TouchGFX/target")," folder that allows\nthe developer to extend the behavior of the HAL and override functionality in the HAL configuration. The contents of these files are\nonly generated once when generating code for the first time using STM32CubeMX. The user contents added to the modifiable classes is\nprotected from being overwritten by STM32CubeMX when generating code again."),(0,r.kt)("h2",s({},{id:"extending-behavior-of-hal"}),"Extending behavior of HAL"),(0,r.kt)("p",null,"For some drivers TouchGFX Generator is not able to generate a fully working HAL because they are hardware specific.\nTouchGFX Generator will generate modifiable user classes, which inherits from the TouchGFX framework and has empty methods\nthe developer must implement to have a certain functionality. These classes include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"STM32TouchController.cpp")," - Defines behavior of touch controller."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TouchGFXGPIO.cpp")," - Exposes signals to GPIO's for performances measuring."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OSWrappers.cpp")," - Defines OSAL (only generated in ",(0,r.kt)("em",{parentName:"li"},"TouchGFX/tagret")," if ",(0,r.kt)("em",{parentName:"li"},"Custom")," RTOS is chosen in TouchGFX Generator)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TouchGFXDMA.cpp")," - Defines behavior of custom DMA2D (only generated if ",(0,r.kt)("em",{parentName:"li"},"Custom")," hardware acceleration is chosen in TouchGFX Generator)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TouchGFXDataReader.cpp")," - Defines behavior of Data Reader interface (only generated if ",(0,r.kt)("em",{parentName:"li"},"External Data Reader")," is enabled in TouchGFX Generator).")),(0,r.kt)("p",null,"For instance, the following empty definition of ",(0,r.kt)("inlineCode",{parentName:"p"},"sampleTouch()")," is found in ",(0,r.kt)("inlineCode",{parentName:"p"},"STM32TouchController.cpp")," for the developer to implement."),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"STM32TouchController.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"bool STM32TouchController::sampleTouch(int32_t& x, int32_t& y)\n{\n    /**\n     * By default sampleTouch returns false,\n     * return true if a touch has been detected, otherwise false.\n     *\n     * Coordinates are passed to the caller by reference by x and y.\n     *\n     * This function is called by the TouchGFX framework.\n     * By default sampleTouch is called every tick, this can be adjusted by HAL::setTouchSampleRate(int8_t);\n     *\n     */\n    return false;\n}\n")),(0,r.kt)("h2",s({},{id:"overriding-hal-configuration"}),"Overriding HAL configuration"),(0,r.kt)("p",null,"Due to the class hierarchy of the HAL, users can override HAL configurations\nor behavior that was generated by STM32CubeMX inside ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL.cpp"),"."),(0,r.kt)("p",null,"In the example below, developers can modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"initialize()")," method to configure TouchGFX additionally or to\nmodify an existing configuration set in ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedHAL"),"."),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFXHAL.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{11-14}","{11-14}":!0}),"void TouchGFXHAL::initialize()\n{\n    // Calling parent implementation of initialize().\n    //\n    // To overwrite the generated implementation, omit call to parent function\n    // and implemented needed functionality here.\n    // Please note, HAL::initialize() must be called to initialize the framework.\n\n    TouchGFXGeneratedHAL::initialize();\n\n    //Overriding configurations\n    hal.lockDMAToFrontPorch(true);\n    hal.setFingerSize(4);\n    hal...\n}\n")))}b.isMDXComponent=!0}}]);