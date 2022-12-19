"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9441],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(l,".").concat(m)]||p[m]||h[m]||i;return n?a.createElement(d,s(s({ref:t},c),{},{components:n})):a.createElement(d,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},36234:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return w},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return k}});var a=n(3905),r=n(22425),i=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&h(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&h(e,n,t[n]);return e};const m={id:"operating-system",title:"Operating Systems"},d=void 0,g={unversionedId:"basic-concepts/operating-system",id:"basic-concepts/operating-system",title:"Operating Systems",description:"",source:"@site/docs/basic-concepts/operating-system.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/operating-system",permalink:"/4.21/ja/docs/basic-concepts/operating-system",draft:!1,tags:[],version:"current",frontMatter:{id:"operating-system",title:"Operating Systems"},sidebar:"docs",previous:{title:"Performance",permalink:"/4.21/ja/docs/basic-concepts/performance"},next:{title:"Memory Usage",permalink:"/4.21/ja/docs/basic-concepts/memory-usage"}},f={},k=[{value:"Introduction",id:"introduction",level:2},{value:"Interleaving other tasks with the user interface",id:"interleaving-other-tasks-with-the-user-interface",level:3},{value:"An example",id:"an-example",level:3},{value:"RTOS",id:"rtos",level:2},{value:"Task communication",id:"task-communication",level:3},{value:"Handling interrupts",id:"handling-interrupts",level:3},{value:"FreeRTOS",id:"freertos",level:3},{value:"TouchGFX OS Wrappers",id:"touchgfx-os-wrappers",level:3},{value:"No RTOS",id:"no-rtos",level:2},{value:"Model::tick",id:"modeltick",level:3},{value:"OSWrappers",id:"oswrappers",level:3}],y={toc:k};function w(e){var t,n=e,{components:i}=n,h=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=p(p({},y),h),s(t,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("h2",p({},{id:"introduction"}),"Introduction"),(0,a.kt)("p",null,"In this section we will discuss the use of an operating system in\ngraphical user interface applications."),(0,a.kt)("p",null,"Embedded devices are becoming more and more advanced. The majority of\nthe systems are not only handling the graphical user interface, but\noften also complex control algorithms and tasks."),(0,a.kt)("p",null,"These tasks can for example be motor control, data aquisition, or\nsecurity related tasks. Many modern devices contain communication\nprotocol stacks like TCP/IP, for communication with data centers; or\nradio stacks like Bluetooth for communication with other local\ndevices."),(0,a.kt)("h3",p({},{id:"interleaving-other-tasks-with-the-user-interface"}),"Interleaving other tasks with the user interface"),(0,a.kt)("p",null,"In a simple device with the graphical user interface and only a few\nsimple support tasks, like an egg timer, it is possible to structure the\nwhole application around the user interface code. The application does\nvery little besides the regular user interface updates, so the\nexecution of the other tasks can with fair success be embedded into\nthe user interface code."),(0,a.kt)("p",null,'As soon as the device contains more advanced functionality that "runs\nin the background" with separate timing requirements like regulating a\nmotor, it quickly becomes difficult to integrate the two tasks in one\nwhile supporting the requirements.'),(0,a.kt)("p",null,"As we discussed in the previous articles the graphics engine must keep\ndrawing new frames to support a fluent user interface. If the graphics\nengine pauses this while running other tasks, the frame rate will\ndecrease. Likewise, if the other tasks only run between the frames, in\nthe idle time, then these tasks will suffer when the user interface is\nrendering complex scenes where there is less idle time. These effects\nmakes it difficult to manually interleave the ui task with other\ncomplex tasks."),(0,a.kt)("h3",p({},{id:"an-example"}),"An example"),(0,a.kt)("p",null,"Assume for the rest of this section that we are building a bluetooth\nspeaker with a display. We have 3 major tasks: run the graphical user\ninterface, feed music to the speaker, and handle the bluetooth stack\nfor communication with other devices."),(0,a.kt)("p",null,"It is not difficult to see that an application architecture centered\non the user interface is not good: Imagine e.g. that we blend the\nmusic code with the user interface and put the code for starting\nplayback in the eventhandler for a button in the user interface. Now\nthe user interface is locked for the time it takes to start the\nmusic. Any animation running will be stopped meanwhile."),(0,a.kt)("p",null,"In general, the responsiveness of the user interface becomes\ndependant on the execution time of the music tasks (start, stop, next,\netc.). This is a general problem, that we will come back to."),(0,a.kt)("p",null,"And what happens if we also want to be able to start music from\nBluetooth? Should the user interface somehow be involved in that?"),(0,a.kt)("p",null,"And how do we give priority to the music tasks, so that the music is\nwithout pauses? At the same time we also want the user interface to\nrun with the highest performance when there is no music tasks to run."),(0,a.kt)("p",null,"All this can be solved by using an operating system with tasks,\ncommunication means, and synchronization."),(0,a.kt)("h2",p({},{id:"rtos"}),"RTOS"),(0,a.kt)("p",null,"A real-time operating system is a small piece of software that\nsupports applications with various services and distributes computing\nresources to the tasks in the application."),(0,a.kt)("p",null,"Using an RTOS allows you to structure your application in a number of\nindependent, but coorporating tasks. These tasks are then executed\nconcurrently by the RTOS when they have work to do and according to\ntheir priority."),(0,a.kt)("p",null,"We can even split a job into a high priority and a low priority\ntask. Assume that we have to read bluetooth data from a buffer very\nfast when it arrives, and put it into a larger application buffer. The\nhandling of the data can be postponed a little. This way we end up\nwith two bluetooth tasks."),(0,a.kt)("p",null,"For our example we will start 4 tasks from main:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"int main() {\n  ...\n  os_start_task(gui_task,      medium_priority);\n  os_start_task(music_task,    low_priority);\n  os_start_task(bt_comm_task,  high_priority);\n  os_start_task(bt_appl_task,  low_priority);\n  os_start_scheduler();\n}\n")),(0,a.kt)("p",null,"A similar split can be done with the music task: A high priority task\nto feed data to the speaker, and a low priority task to control what\nsong is playing and sending notifications to the user interface."),(0,a.kt)("p",null,"The result using different priorities as above is that the\nbt_comm_task is running when there is data to handle and the user\ninterface task runs otherwise. When the user interface task is waiting\nfor the display, the two low priority task can run. The operating\nsystem scheduler will handle this time distribution for us."),(0,a.kt)("p",null,"In a typical TouchGFX application the user interface is waiting for\nthe display in every frame, and it is also regularly waiting for the\ngraphics accelerator, ChromArt, to finish drawing elements. This means\nthat there will be many small pauses where the lower priority task can\nrun. The operating system scheduler will automatically change the MCU\nto run these tasks when the higher priority tasks are waiting."),(0,a.kt)("h3",p({},{id:"task-communication"}),"Task communication"),(0,a.kt)("p",null,"When we use multiple tasks we also need a safe way of communicating\nbetween the tasks. One simple case is from the user interfaced to the\nmusic task. Here we need, among other cases, the music task to wait\nuntil the gui_task asks it to start playing a song. A simple way to\nimplement that is to use a message queue. The music task sleeps until\nthere is a message in the queue. The scheduler wakes the task when\nthere is a message in the queue and when the higher priority tasks are\nnot busy."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"   ...\n   music_task_input_queue = os_create_queue(10); //10 element queue\n   ...\n")),(0,a.kt)("p",null,'In the user interface, when "Play" is pressed, we send a message to\nthe music task\'s queue:'),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"void ScreenMusic::handlePlayPressed()\n{\n   os_send_message(music_task_input_queue, play_message);\n}\n")),(0,a.kt)("p",null,"The music task can wait for a message by reading the queue. This will\nblock the task until a message arrives:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"...\nMessage message;\nos_receive_message(music_task_input_queue, &message);\n")),(0,a.kt)("p",null,"After putting the message into the queue of the music task, the user\ninterface is continuing to run and rendering the frame as fast as\npossible. We are not wasting time on handling the play message\nimmediately. But, when the rendering is done and the ui task is\nwaiting before rendering the next frame, the scheduler will change the\nexecution to the music task, which will handle the incoming messages."),(0,a.kt)("p",null,"Similary we can also give the user interface an input queue. The music\ntask can then send a notification message e.g. when the song has\nended. The user interface task should not wait for a message, but\nquickly check if a message is available without blocking, and read it\nin case."),(0,a.kt)("p",null,"This setup gives a very loose connection between the tasks in the\nsystem. We can actually test the music task without using the user\ninterface, and we can also easily start music from the bluetooth task."),(0,a.kt)("h3",p({},{id:"handling-interrupts"}),"Handling interrupts"),(0,a.kt)("p",null,"Some tasks needs to run as a response to an interrupt. In our example\nthe bluetooth communication task is such an example. We want that task\nto run when the bluetooth chip has a new package for us. Assuming that\nwe can get an interrupt in that case, we can send a message from the\ninterrupt handler:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"void BT_DataAvailable_Handler(void)\n{\n  os_send_message(bt_data_queue, data_available_message);\n}\n")),(0,a.kt)("p",null,"Other synchronization primitives than queues are also\navailable. Semaphores and mutexes for example are found in many\noperating systems."),(0,a.kt)("h3",p({},{id:"freertos"}),"FreeRTOS"),(0,a.kt)("p",null,"TouchGFX is tested with the FreeRTOS operating system during\ndevelopment. TouchGFX has very little requirements and can run on many\nother operating systems, but FreeRTOS is a good\nstarting point unless you have some specific requirements."),(0,a.kt)("p",null,"FreeRTOS is a simple operating system that is free to use in\ncommercial application. It is supplied in source code with the STM32Cube firmware with ready to use examples for all STM32\nmicrocontrollers."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",p({parentName:"p"},{href:"https://www.freertos.org/"}),"freertos.org")," for\nfurther information and license terms for FreeRTOS."),(0,a.kt)("h3",p({},{id:"touchgfx-os-wrappers"}),"TouchGFX OS Wrappers"),(0,a.kt)("p",null,"TouchGFX in its default configuration runs on FreeRTOS and uses a\nsingle message queue to synchronize with the display controller and a\nsemaphore to guard the access to the framebuffer."),(0,a.kt)("p",null,"This is handled by the OSWrappers class defined in\n",(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx/os/OSWrappers.cpp"),". This class has the following methods:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Method"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"signalVSync()"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"This method should be called from the display driver when the display is ready for the next frame.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"waitForVSync()"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Called by the graphics engine to wait. Should not return until signalVSync is called.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"isVSyncAvailable()"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"(Optional)Returns true if VSync has occured. Can be used to avoid blocking in the waitForVSync.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"signalRenderingDone()"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"(Optional)Remove any outstanding VSync signals.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"takeFrameBufferSemaphore()"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Called by the graphics engine and the accelerator to gain direct access to the framebuffer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"giveFrameBufferSemaphore()"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Called to release the direct access again.")))),(0,a.kt)("p",null,"The default implementation uses a message queue to implement the VSync\n(frame) synchronization. The graphics engine task is sleeping until\nthe next VSync arrives."),(0,a.kt)("p",null,"This OSWrapper class is generated by the TouchGFX Generator. Read more\nabout the Generator\n",(0,a.kt)("a",p({parentName:"p"},{href:"../development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver#real-time-operating-system"}),"here"),"."),(0,a.kt)("h2",p({},{id:"no-rtos"}),"No RTOS"),(0,a.kt)("p",null,"TouchGFX can also run without an operating system. In this case you\nmust start the graphics engine main loop directly in your main:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"int main()\n{\n    ...\n    touchgfx::HAL::getInstance()->taskEntry();\n\n    //never returns\n}\n")),(0,a.kt)("p",null,"Not using an RTOS does not lower the performance of TouchGFX. It may\nincrease the MCU load and it will make it more difficult to run other\ntasks together with TouchGFX."),(0,a.kt)("p",null,"As described above you now need to drive any other task manually while\nthe user interface is running in your main."),(0,a.kt)("h3",p({},{id:"modeltick"}),"Model::tick"),(0,a.kt)("p",null,"One way is to perform a task check in the Model class once in every\nframe:"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Model.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"void Model::tick()\n{\n   //run other tasks here\n   music_task_tick();\n   bluetooth_task_tick();\n}\n")),(0,a.kt)("p",null,"Using this method all tasks will be executed once in every frame. The\ntime consumed by the tasks will be added to the rendering time of the\nuser interface. This is a simple and acceptable solution for simple\nsystems, where all tasks can terminate quickly."),(0,a.kt)("h3",p({},{id:"oswrappers"}),"OSWrappers"),(0,a.kt)("p",null,"Another method is to use the hooks in the OSWrappers class. As\nexplained above the graphics engine calls method on this class when it\nneeds to wait for events. You can use this to do other work while\nwaiting for said events:"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"OSWrappers.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"static volatile uint8_t vsync_sem = 0;\n\nvoid OSWrappers::signalVSync()\n{\n    vsync_sem = 1;\n}\n\nvoid OSWrappers::waitForVSync()\n{\n    vsync_sem = 0; //clear the flag, so we wait for the next vsync\n    do {\n        // Perform other work while waiting\n        music_task_tick();\n        bluetooth_task_tick();\n    } while(!vsync_sem);\n}\n")),(0,a.kt)("p",null,"Using this method the idle task between the frame can be fully used by\nthe other tasks, but the amount of time the tasks get will vary."),(0,a.kt)("p",null,"Another solution is to use the OSWrappers::isVSyncAvailable and\nOSWrappers::signalRenderingDone functions. This will allow the\napplication to avoid having multiple while-loops. These functions are\nused by the TouchGFXGenerator when a No-operating-system configuration\nis selected."),(0,a.kt)("p",null,"It is important that the tasks can divide their work in to small steps\nof maybe 1 millisecond. Otherwise it will hurt the user interface\nperformance."))}w.isMDXComponent=!0}}]);