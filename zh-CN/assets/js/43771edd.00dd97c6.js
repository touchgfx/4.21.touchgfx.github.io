"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[696],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||r;return n?o.createElement(m,i(i({ref:t},s),{},{components:n})):o.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70814:function(e,t,n){var o=n(67294),a=n(88678);const r=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class i extends o.Component{render(){return o.createElement(a.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:r},this.props.children)}}t.Z=i},22425:function(e,t,n){var o=n(67294);class a extends o.Component{render(){return o.createElement("div",{className:"code-header"},o.createElement("div",null,o.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var o=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,i=(0,a.Z)(e.imageSource);return t?o.createElement("div",{className:"figure noshadow"},o.createElement("a",{href:i,target:"_blank"},o.createElement("img",{width:n,height:r,src:i})),o.createElement("p",null,e.children)):o.createElement("div",{className:"figure"},o.createElement("a",{href:i,target:"_blank"},o.createElement("img",{width:n,height:r,src:i})),o.createElement("p",null,e.children))}},88678:function(e,t,n){var o=n(67294);class a extends o.Component{render(){const e=`highlight highlight-${this.props.type}`;return o.createElement("div",{className:e},o.createElement("div",{className:"highlight-heading"},o.createElement("h5",null,o.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),o.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=a},37793:function(e,t,n){var o=n(67294),a=n(88678);const r=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends o.Component{render(){return o.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:r},this.props.children)}}t.Z=i},45843:function(e,t,n){n.r(t),n.d(t,{assets:function(){return _},contentTitle:function(){return k},default:function(){return v},frontMatter:function(){return f},metadata:function(){return T},toc:function(){return X}});var o=n(3905),a=n(44035),r=n(22425),i=n(70814),l=n(37793),c=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(h)for(var n of h(t))d.call(t,n)&&m(e,n,t[n]);return e};const f={id:"scenarios-configure-rtos",title:"Real Time Operating System"},k=void 0,T={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-configure-rtos",id:"development/touchgfx-hal-development/scenarios/scenarios-configure-rtos",title:"Real Time Operating System",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-configure-rtos.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-configure-rtos",permalink:"/4.21/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-configure-rtos",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-configure-rtos",title:"Real Time Operating System"},sidebar:"docs",previous:{title:"\u5e27\u7f13\u5b58\u7b56\u7565",permalink:"/4.21/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies"},next:{title:"\u89c6\u9891\u89e3\u7801",permalink:"/4.21/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding"}},_={},X=[{value:"No OS",id:"no-os",level:2},{value:"FreeRTOS (CMSIS V1 &amp; CMSIS V2)",id:"freertos-cmsis-v1--cmsis-v2",level:2},{value:"Custom task",id:"custom-task",level:3},{value:"TouchGFX Task",id:"touchgfx-task",level:3},{value:"ThreadX",id:"threadx",level:2},{value:"Native Middleware configuration",id:"native-middleware-configuration",level:3},{value:"X-CUBE-AZRTOS configuration",id:"x-cube-azrtos-configuration",level:3}],C={toc:X};function v(e){var t,n=e,{components:c}=n,m=((e,t)=>{var n={};for(var o in e)u.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&h)for(var o of h(e))t.indexOf(o)<0&&d.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=g(g({},C),m),p(t,s({components:c,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"This section shows how to configure different Real Time Operating System in STM32CubeMX to work with the code generated by the ",(0,o.kt)("a",g({parentName:"p"},{href:"../generator-how-to/touchgfx-al-configuration/driver#real-time-operating-system"}),"TouchGFX Generator")," to have a functional TouchGFX OSAL."),(0,o.kt)("p",null,"Generally, the TouchGFX main loop is started by calling the function ",(0,o.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()"),". The call to this function should be inside the task handler where developers wish to run TouchGFX."),(0,o.kt)("h2",g({},{id:"no-os"}),"No OS"),(0,o.kt)("p",null,"When TouchGFX runs without and operating system, the TouchGFX main loop runs in the infinite while-loop in ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," where the MCU is pooling for a ",(0,o.kt)("inlineCode",{parentName:"p"},"VSYNC")," signal by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()"),"."),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"main.c"),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{6}","{6}":!0}),"/* Infinite loop */\n/* USER CODE BEGIN WHILE */\nwhile (1)\n{\n  /* USER CODE END WHILE */\n  MX_TouchGFX_Process();\n  /* USER CODE BEGIN 3 */\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()")," calls forward to ",(0,o.kt)("inlineCode",{parentName:"p"},"touchgfx_taskEntry()"),", where TouchGFX starts to process the next frame when a ",(0,o.kt)("inlineCode",{parentName:"p"},"VSYNC")," has been detected."),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{8-11}","{8-11}":!0}),"void touchgfx_taskEntry()\n{\n    /*\n     * Main event loop will check for VSYNC signal, and then process next frame.\n     *\n     * Note This function returns immediately if there is no VSYNC signal.\n     */\n     if (OSWrappers::isVSyncAvailable())\n     {\n         hal.backPorchExited();\n     }\n}\n")),(0,o.kt)("h2",g({},{id:"freertos-cmsis-v1--cmsis-v2"}),"FreeRTOS (CMSIS V1 & CMSIS V2)"),(0,o.kt)("p",null,"The following example shows how to configure FreeRTOS (CMSIS V2) to work with TouchGFX. The same configurations apply if running CMSIS V1."),(0,o.kt)("p",null,"Having ",(0,o.kt)("a",g({parentName:"p"},{href:"../generator-how-to/touchgfx-al-configuration/driver#threadx"}),"enabled FreeRTOS")," in a project navigate to the ",(0,o.kt)("em",{parentName:"p"},"FREERTOS")," menu found under ",(0,o.kt)("em",{parentName:"p"},"Middleware"),' in the "Categories" list on the left side of the project menu in STM32CubeMX. Set ',(0,o.kt)("inlineCode",{parentName:"p"},"TICK_RATE_HZ")," to ",(0,o.kt)("strong",{parentName:"p"},"1000")," to get ticks once per millisecond. Configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"Memory Management scheme")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TOTAL_HEAP_SIZE"),". In this example we use ",(0,o.kt)("strong",{parentName:"p"},"heap_4")," and a heap size of ",(0,o.kt)("strong",{parentName:"p"},"70000 bytes")," to have a large enough heap for the touchgfx application."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/freertos-configure.webp",width:"700",mdxType:"Figure"},"Creating the TouchGFX Task for FreeRTOS"),(0,o.kt)(l.Z,{mdxType:"Tip"},"A more optimal ",(0,o.kt)("i",null,"TOTAL_HEAP_SIZE")," can be found through trial and error for your specific application."),(0,o.kt)("p",null,"The TouchGFX main loop is entered when calling the following function."),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"void MX_TouchGFX_Process(void);\n")),(0,o.kt)("p",null,"Developers can either configure their own custom task in STM32CubeMX where the TouchGFX main loop should run or use the ",(0,o.kt)("inlineCode",{parentName:"p"},"TouchGFX_Task()")," handle which is generated by TouchGFX Generator."),(0,o.kt)("h3",g({},{id:"custom-task"}),"Custom task"),(0,o.kt)("p",null,"The function ",(0,o.kt)("inlineCode",{parentName:"p"},"void\xa0touchgfx_taskEntry(void)")," is called by ",(0,o.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{4}","{4}":!0}),"void MX_TouchGFX_Process(void)\n{\n  // Calling forward to touchgfx_taskEntry in C++ domain\n  touchgfx_taskEntry();\n}\n")),(0,o.kt)("p",null,"Developers are required to call ",(0,o.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()")," in the task handler for the task they intend to run the TouchGFX main loop in. If the developer has configured a FeeRTOS task in STM32CubeMX called ",(0,o.kt)("inlineCode",{parentName:"p"},"MyTask")," for instance, then the following example shows how ",(0,o.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()")," should be called in the custom task handler to start TouchGFX."),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{4}","{4}":!0}),"void StartMyTask(void *argument)\n{\n  /* USER CODE BEGIN 5 */\n  MX_TouchGFX_Process();\n  /* USER CODE END 5 */ \n}\n")),(0,o.kt)("h3",g({},{id:"touchgfx-task"}),"TouchGFX Task"),(0,o.kt)("p",null,"The TouchGFX main loop can run in the ",(0,o.kt)("em",{parentName:"p"},"TouchGFX Task"),". The TouchGFX Generator defines a task handler that calls ",(0,o.kt)("inlineCode",{parentName:"p"},"touchgfx_taskEntry()")," named ",(0,o.kt)("inlineCode",{parentName:"p"},"TouchGFX_Task()")," inside ",(0,o.kt)("inlineCode",{parentName:"p"},"app_touchgfx.c"),"."),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"app_touchgfx.c"),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{4}","{4}":!0}),"void TouchGFX_Task(void *argument)\n{\n  // Calling forward to touchgfx_taskEntry in C++ domain\n  touchgfx_taskEntry();\n}\n")),(0,o.kt)("p",null,"To have this task scheduled by the FreeRTOS scheduler, the task must be created in STM32CubeMX in the ",(0,o.kt)("em",{parentName:"p"},"FREERTOS")," menu. In the ",(0,o.kt)("em",{parentName:"p"},"Tasks and Queues")," tab, add a task with ",(0,o.kt)("strong",{parentName:"p"},'"TouchGFX_Task"')," as ",(0,o.kt)("em",{parentName:"p"},"Entry Function")," and a large enough stack with ",(0,o.kt)("em",{parentName:"p"},"Code Generation Option")," ",(0,o.kt)("strong",{parentName:"p"},"As external"),"."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/freertos-touchgfx-task.webp",mdxType:"Figure"},"Creating the TouchGFX Task for FreeRTOS"),(0,o.kt)("p",null,"STM32CubeMX will create the TouchGFX Task in ",(0,o.kt)("inlineCode",{parentName:"p"},"main.c")," when generating code, which will start the TouchGFX main loop."),(0,o.kt)("h2",g({},{id:"threadx"}),"ThreadX"),(0,o.kt)("p",null,"This section shows how to configure a TouchGFX project using ThreadX either as an ",(0,o.kt)("em",{parentName:"p"},"X-CUBE")," Software Pack or Native ThreadX Middleware."),(0,o.kt)("h3",g({},{id:"native-middleware-configuration"}),"Native Middleware configuration"),(0,o.kt)("p",null,"The following example shows how to configure ThreadX for an STM32U5 MCU, which has ThreadX available as native middleware."),(0,o.kt)("p",null,"Having ",(0,o.kt)("a",g({parentName:"p"},{href:"../generator-how-to/touchgfx-al-configuration/driver#threadx"}),"enabled Thread native middleware")," in a project navigate to the ",(0,o.kt)("em",{parentName:"p"},"THREADX")," menu found under ",(0,o.kt)("em",{parentName:"p"},"Middleware"),' in the "Categories" list on the left side of the project menu in STM32CubeMX. Enable the ',(0,o.kt)("inlineCode",{parentName:"p"},"Core")," from the ",(0,o.kt)("em",{parentName:"p"},"Mode")," list. Set ",(0,o.kt)("inlineCode",{parentName:"p"},"TX_TIMER_TICKS_PER_SECOND")," to ",(0,o.kt)("strong",{parentName:"p"},"1000")," to get ticks once per millisecond and set ",(0,o.kt)("inlineCode",{parentName:"p"},"Memory Pool Allocation")," to ",(0,o.kt)("strong",{parentName:"p"},"Use Static Allocation"),"."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/enable-and-configure-native-threadx-mw.webp",width:"700",mdxType:"Figure"},"Enabling and Configuring Native ThreadX Middleware"),(0,o.kt)(i.Z,{mdxType:"Caution"},(0,o.kt)("li",null,"STM32CubeMX will only generate a full OSAL when ",(0,o.kt)("b",null,"Memory Pool Allocation")," is set to ",(0,o.kt)("b",null,"Use Static Allocation")," when using ",(0,o.kt)("b",null,"Native ThreadX Middleware")),(0,o.kt)("ul",null,(0,o.kt)("li",null,"If ",(0,o.kt)("b",null,"Memory Pool Allocation")," is set to ",(0,o.kt)("b",null,"Use Dynamic Allocation")," then :"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"User will have to add missing code in the ",(0,o.kt)("i",null,"USER CODE BEGIN DYNAMIC_MEM_ALLOC")," section in the generated ",(0,o.kt)("b",null,(0,o.kt)("i",null,"app_azure_rtos.c"))," file."),(0,o.kt)("li",null,"User will need also to update the linker files following the recommendation described by code comments in the generated ",(0,o.kt)("b",null,(0,o.kt)("i",null,"app_azure_rtos.c"))," file."),(0,o.kt)("li",null,"Depending on the STM32CubeMX version, the ",(0,o.kt)("b",null,"Dynamic Allocation")," may not work properly.")))),(0,o.kt)("p",null,"STM32CubeMX is not responsible for generating the code that allocates and schedules tasks when using ThreadX. For this reason, a call to the function ",(0,o.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_PreOSInit()"),", which will initialize the TouchGFX framework, will be generated by STM32CubeMX. After this, another call to the function ",(0,o.kt)("inlineCode",{parentName:"p"},"MX_ThreadX_Init()"),", which will initialize and start the ThreadX kernel, is generated."),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"main.c"),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{5,7}","{5,7}":!0}),"int main(void)\n{\n...\n  /* Call PreOsInit function */\n  MX_TouchGFX_PreOSInit();\n...\n  MX_ThreadX_Init();\n...\n}\n")),(0,o.kt)("p",null,"TouchGFX Generator will generate the ",(0,o.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Init()")," function, which will create the TouchGFX thread."),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"app_touchgfx.c"),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{13-20}","{13-20}":!0}),'UINT MX_TouchGFX_Init(VOID *memory_ptr)\n{\n  UINT ret = TX_SUCCESS;\n  CHAR *pointer = 0;\n\n  /* Allocate the stack for TouchGFX Thread.  */\n  if (tx_byte_allocate((TX_BYTE_POOL*)memory_ptr, (VOID **) &pointer,\n                       TOUCHGFX_STACK_SIZE, TX_NO_WAIT) != TX_SUCCESS)\n  {\n    ret = TX_POOL_ERROR;\n  }\n\n  /* Create TouchGFX Thread */\n  else if (tx_thread_create(&TouchGFXThread, (CHAR *)"TouchGFX", TouchGFX_Task, 0,\n                       pointer, TOUCHGFX_STACK_SIZE,\n                       5, 5,\n                       TX_NO_TIME_SLICE, TX_AUTO_START) != TX_SUCCESS)\n  {\n    ret = TX_THREAD_ERROR;\n  }\n\n  return ret;\n}\n')),(0,o.kt)("p",null,"TouchGFX Generator will then generate code that creates the TouchGFX task byte pool and calls ",(0,o.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Init()"),". This code is inserted in the appropriate location into the function ",(0,o.kt)("inlineCode",{parentName:"p"},"tx_application_define()")," in the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"app_azure_rtos.c"))," file where the TouchGFX Task byte pool is defined."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"tx_application_define()")," function is called by the ThreadX kernel at initialization time. The TouchGFX thread will then be started later when the ThreadX kernel is started."),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"app_azure_rtos.c"),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{3-4,9,22}","{3-4,9,22}":!0}),'#include "app_touchgfx.h"\n...\n__ALIGN_BEGIN static UCHAR touchgfx_byte_pool_buffer[TOUCHGFX_APP_MEM_POOL_SIZE] __ALIGN_END;\nstatic TX_BYTE_POOL touchgfx_app_byte_pool;\n...\nVOID tx_application_define(VOID *first_unused_memory)\n{\n  ...\n  if (tx_byte_pool_create(&touchgfx_app_byte_pool, "TouchGFX App memory pool", touchgfx_byte_pool_buffer, TOUCHGFX_APP_MEM_POOL_SIZE) != TX_SUCCESS)\n  {\n    /* USER CODE BEGIN TouchGFX_Byte_Pool_Error */\n\n    /* USER CODE END TouchGFX_Byte_Pool_Error */\n  }\n  else\n  {\n    /* USER CODE BEGIN TouchGFX_Byte_Pool_Success */\n\n    /* USER CODE END TouchGFX_Byte_Pool_Success */\n\n    memory_ptr = (VOID *)&touchgfx_app_byte_pool;\n    if (MX_TouchGFX_Init(memory_ptr) != TX_SUCCESS)\n    {\n      /* USER CODE BEGIN  MX_X-CUBE-TOUCHGFX_Init_Error */\n\n      /* USER CODE END  MX_X-CUBE-TOUCHGFX_Init_Error */\n    }\n    /* USER CODE BEGIN  MX_X-CUBE-TOUCHGFX_Init_Success */\n\n    /* USER CODE END  MX_X-CUBE-TOUCHGFX_Init_Success */\n  }\n\n  ...\n}\n')),(0,o.kt)("h3",g({},{id:"x-cube-azrtos-configuration"}),"X-CUBE-AZRTOS configuration"),(0,o.kt)("p",null,"The following example shows have to configure ThreadX for an STM32H7 MCU, which has ThreadX available as an ",(0,o.kt)("em",{parentName:"p"},"X-CUBE")," Software Pack."),(0,o.kt)("p",null,"Having ",(0,o.kt)("a",g({parentName:"p"},{href:"../generator-how-to/touchgfx-al-configuration/driver#threadx"}),"enabled Thread as an ",(0,o.kt)("em",{parentName:"a"},"X-CUBE")," Software Pack")," in a project navigate to the ",(0,o.kt)("em",{parentName:"p"},"X-CUBE-AZRTOS-XX")," menu found under ",(0,o.kt)("em",{parentName:"p"},"Software Packs"),' in the "Categories" list on the left side of the project menu in STM32CubeMX and set the ',(0,o.kt)("inlineCode",{parentName:"p"},"Memory Allocation")," setting to ",(0,o.kt)("strong",{parentName:"p"},"Use Static MemPool Allocation"),"."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/x-cube-azurertos-config1.webp",width:"800",mdxType:"Figure"},"ThreadX Configuration - X-CUBE-AZRTOS Software Pack"),(0,o.kt)("p",null,"Select the ",(0,o.kt)("em",{parentName:"p"},"ThreadX")," setting tab and set ",(0,o.kt)("inlineCode",{parentName:"p"},"TX_TIMER_TICKS_PER_SECOND")," to ",(0,o.kt)("strong",{parentName:"p"},"1000")," to get ticks once per millisecond."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/x-cube-azurertos-config2.webp",width:"400",mdxType:"Figure"},"ThreadX Configuration - X-CUBE-AZRTOS Software Pack"),(0,o.kt)("p",null,"Once configuration is done in ",(0,o.kt)("em",{parentName:"p"},"X-CUBE-AZRTOS-XX")," menu, navigate to TouchGFX Generator and select ",(0,o.kt)("inlineCode",{parentName:"p"},"ThreadX")," as ",(0,o.kt)("em",{parentName:"p"},"Real Time Operating System")," and define the ",(0,o.kt)("inlineCode",{parentName:"p"},"Memory Pool Size")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Memory Stack Size")," for the TouchGFX task."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/threadx-config-in-generator.webp",width:"400",mdxType:"Figure"},"Creating the TouchGFX Task for FreeRTOS"),(0,o.kt)(i.Z,{mdxType:"Caution"},"As per TouchGFX 4.21.0, the code generated by the newest versions of ",(0,o.kt)("i",null,"X-CUBE-AZRTOS-XX")," will, unfortunately, not create and initialize the TouchGFX Task in the ThreadX driver. This requires the developer to ",(0,o.kt)("b",null,"manually add code")," from the code snippets shown in the ",(0,o.kt)("i",null,"Native Middleware configuration")," section in order to have a working application."))}v.isMDXComponent=!0}}]);