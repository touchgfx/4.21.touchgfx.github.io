"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4861],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},29415:function(e,t,n){var a=n(67294),r=n(88678);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=i},88678:function(e,t,n){var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=r},31217:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}t.Z=r},22797:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return T},default:function(){return M},frontMatter:function(){return v},metadata:function(){return w},toc:function(){return x}});var a=n(3905),r=n(39130),o=n(29415),i=n(67294);class s extends i.Component{render(){return i.createElement("i",null,this.props.children)}}var l=s,p=n(31217),u=n(22425),c=Object.defineProperty,d=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&y(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&y(e,n,t[n]);return e};const v={id:"backend-communication",title:"Backend Communication"},T=void 0,w={unversionedId:"development/ui-development/touchgfx-engine-features/backend-communication",id:"development/ui-development/touchgfx-engine-features/backend-communication",title:"Backend Communication",description:"",source:"@site/docs/development/ui-development/touchgfx-engine-features/backend-communication.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/backend-communication",permalink:"/4.21/ja/docs/development/ui-development/touchgfx-engine-features/backend-communication",draft:!1,tags:[],version:"current",frontMatter:{id:"backend-communication",title:"Backend Communication"},sidebar:"docs",previous:{title:"Binary Translations",permalink:"/4.21/ja/docs/development/ui-development/touchgfx-engine-features/using-binary-translations"},next:{title:"Mixins",permalink:"/4.21/ja/docs/development/ui-development/touchgfx-engine-features/mixins"}},b={},x=[{value:"The Model Class",id:"the-model-class",level:2},{value:"System Interfacing",id:"system-interfacing",level:2},{value:"Sampling from GUI Task",id:"sampling-from-gui-task",level:3},{value:"Sampling from Secondary Task",id:"sampling-from-secondary-task",level:3},{value:"Propagating Data to UI",id:"propagating-data-to-ui",level:2},{value:"Transmitting Data from UI to Surrounding System",id:"transmitting-data-from-ui-to-surrounding-system",level:2},{value:"Examples",id:"examples",level:2},{value:"From GUI Task",id:"from-gui-task",level:3},{value:"From Other Task",id:"from-other-task",level:3},{value:"From Multiple tasks",id:"from-multiple-tasks",level:3},{value:"From Task and External Interrupt Line",id:"from-task-and-external-interrupt-line",level:3}],I={toc:x};function M(e){var t,n=e,{components:i}=n,s=((e,t)=>{var n={};for(var a in e)f.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&m)for(var a of m(e))t.indexOf(a)<0&&g.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=k(k({},I),s),d(t,h({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"In most applications, the UI needs to be connected to the rest of your system somehow, and send and receive data. This could be interfacing with hardware peripherals (sensor data, A/D conversions, serial communication, ...) or interfacing with other software modules."),(0,a.kt)("p",null,"This article describes the recommended solutions for implementing this connection."),(0,a.kt)("p",null,"The first method is a ",(0,a.kt)("a",k({parentName:"p"},{href:"#sampling-from-gui-task"}),'"quick-and-dirty"')," approach, primarily intended for prototyping, whereas the ",(0,a.kt)("a",k({parentName:"p"},{href:"#sampling-from-secondary-task"}),"second method")," is an architecturally sound way of properly connecting the UI with the remaining components in a real world application."),(0,a.kt)("p",null,"In the end of this article, we link to examples of using both methods."),(0,a.kt)("h2",k({},{id:"the-model-class"}),"The Model Class"),(0,a.kt)("p",null,"All TouchGFX applications have a Model class, which apart from storing UI state information is also intended to function as the interface to your surrounding system. By this we are referring to both hardware peripherals but also communicating with other OS tasks in your system. It is normally not a good design to access other software modules or hardware in the individual View classes."),(0,a.kt)(o.Z,{mdxType:"FurtherReading"},"To learn more about the Model: ",(0,a.kt)(r.Z,{to:"../software-architecture/model-view-presenter-design-pattern",mdxType:"Link"},"MVP pattern")),(0,a.kt)("p",null,"The Model class is well suited for placing any such interface code because:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The Model class has a ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"tick()")," function which is automatically called every frame and can be implemented to look for and react to events from other sub-modules."),(0,a.kt)("li",{parentName:"ol"},"The Model class has a pointer to your currently active Presenter, in order to be able to notify the UI of incoming events.")),(0,a.kt)("h2",k({},{id:"system-interfacing"}),"System Interfacing"),(0,a.kt)("p",null,"There are two ways of interfacing with the surrounding system, either by sampling directly from the GUI Task, or by sampling from a Secondary Task"),(0,a.kt)("h3",k({},{id:"sampling-from-gui-task"}),"Sampling from GUI Task"),(0,a.kt)("p",null,"The best way of interfacing with surrounding system depends on how frequently you need to sample, how time consuming it is and how time critical it is."),(0,a.kt)("p",null,"If your requirements in those regards are lenient, the simplest approach is to just sample the surrounding system directly in the ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"Model::tick")," function."),(0,a.kt)("p",null,"If the sampling occurs less frequently than your frame rate (typically around 60Hz), you can just add a counter and only do the sampling every Nth tick. When done this way, your sampling operation must be somewhat fast (typically 1ms or less), otherwise your frame rate will begin to suffer, since the sampling is done in the context of the GUI task and will delay drawing the frame."),(0,a.kt)("h3",k({},{id:"sampling-from-secondary-task"}),"Sampling from Secondary Task"),(0,a.kt)("p",null,"Alternatively, if it is not desirable to place the interaction with the surrounding system directly within the context of the GUI task, you can create a new OS task responsible for doing the sampling."),(0,a.kt)("p",null,"You can configure this task to run at the exact time intervals you need for your specific scenario. Also depending on your needs this new task can have a lower or higher priority than the GUI task."),(0,a.kt)("p",null,"If it has a higher priority, then you are guaranteed that it runs at exactly the times you have specified, regardless of what the GUI task is doing. This has the drawback that if it is a CPU consuming process it might impact the frame rate of the UI."),(0,a.kt)("p",null,"If on the other hand the sampling is not time critical, you can assign the task a lower priority than the GUI task, such that the UI frame rate is never affected by the sampling of the surrounding system. The GUI task will sleep a lot while rendering (e.g. when waiting for a DMA-based pixel transfer to complete) so lower priority tasks will be allowed to run quite frequently and this is therefore sufficient for the vast majority of applications."),(0,a.kt)("p",null,"If you use the secondary task approach, we recommend that you take advantage of the inter-task messaging system that is provided by your RTOS. Most, if not all, RTOSes have a queue/mail mechanism which allows you to send data (typically user-defined C structs, byte arrays or simple integers) from one task to another. In order to communicate new data to the GUI task, set up a mailbox or message queue for the UI task, and send the data to the GUI task using this messaging system. You can then ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"Model::tick")," poll the mailbox of the GUI task to check if any new data has arrived. In case, read the data and update the UI accordingly."),(0,a.kt)("h2",k({},{id:"propagating-data-to-ui"}),"Propagating Data to UI"),(0,a.kt)("p",null,"Regardless of whether you use ",(0,a.kt)("a",k({parentName:"p"},{href:"#sampling-from-gui-task"}),"Sampling from GUI Task")," or ",(0,a.kt)("a",k({parentName:"p"},{href:"#sampling-from-secondary-task"}),"Sampling from Secondary Task"),", the ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"Model::tick")," function is the place where the GUI Task becomes aware of the new data to be shown in the UI. Apart from acting as an interface to your surrounding system, recall from earlier that the Model class is also responsible for holding state data, so there might be some state variables that need to be updated too."),(0,a.kt)("p",null,"Let us consider a simple example where a temperature sensor is attached to the system, and that the current temperature is to be shown in the UI. In preparation, we will augment the Model class to support this:"),(0,a.kt)(u.Z,{mdxType:"CodeHeader"},"Model.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"class Model\n{\npublic:\n  // Function that allow your Presenters to read current temperature.\n  int getCurrentTemperature() const { return currentTemperature; }\n\n  // Called automatically by framework every tick.\n  void tick();\n  ...\nprivate:\n  // Variable storing last received temperature;\n  int currentTemperature;\n  ...\n};\n")),(0,a.kt)("p",null,"With the above, your ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"Presenters")," are able to ask the model about the current temperature, allowing a Presenter to set this value in the UI (the View) when entering a screen that displays the temperature. What we need to do now is to be able to update the UI again when new temperature information is received. To do this we take advantage of the fact that the Model has a pointer to your currently active Presenter. The type of this pointer is an interface (",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"ModelListener"),") which you can modify to reflect the application-specific events that are appropriate:"),(0,a.kt)(u.Z,{mdxType:"CodeHeader"},"ModelListener.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"class ModelListener\n{\npublic:\n  // Call this function to notify that temperature has changed.\n  // Per default, use an empty implementation so that only those\n  // Presenters interested in this specific event need to\n  // override this function.\n  virtual void notifyTemperatureChanged(int newTemperature) {}\n};\n")),(0,a.kt)("p",null,'Now that we have this interface hooked up, the remaining this is to do the actual sampling of incoming "',(0,a.kt)(l,{mdxType:"InlineNote"},"new temperature"),'" events ',(0,a.kt)(p.Z,{mdxType:"InlineCode"},"Model::tick")),(0,a.kt)(u.Z,{mdxType:"CodeHeader"},"Model.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),'void Model::tick()\n{\n  // Pseudo-code for sampling data\n  if (OS_Poll(GuiTaskMBox))\n  {\n    // Here we assume that you have defined a "Message" struct containing type and data,\n    // along with some event definitions.\n    struct Message msg = OS_Read(GuiTaskMBox);\n    if (msg.eventType == EVT_TEMP_CHANGED)\n    {\n       // We received information that temperature has changed.\n       // First, update Model state variable\n       currentTemperature = msg.data;\n\n      // Second, notify the currently active Presenter that temperature has changed.\n      // The modelListener pointer points to the currently active Presenter.\n      if (modelListener != 0)\n      {\n        modelListener->notifyTemperatureChanged(currentTemperature);\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"The approach above ensures two things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"currentTemperature")," variable is always up-to-date so that your Presenter can at any time obtain the current temperature."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"Presenter")," is immediately notified of temperature changes and can take appropriate action.")),(0,a.kt)("p",null,"One advantage of the MVP pattern is that you achieve a separated handling of notifications depending on what screen you are currently on. Assume for instance that a temperature changed event occurs while displaying some kind of settings menu ",(0,a.kt)(l,{mdxType:"InlineNote"},"(e.g. MainMenuPresenter/MainMenuView is active)")," where the current temperature is of no relevance."),(0,a.kt)("p",null,"Since the ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"notifyTemperatureChanged")," function has a default empty implementation, this notification is simply disregarded by the ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"MainMenuPresenter"),". On the other hand, if you have a ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"TemperatureControlPresenter")," you can in this Presenter override the ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"notifyTemperatureChanged")," function and inform the View that it should display an updated temperature:"),(0,a.kt)(u.Z,{mdxType:"CodeHeader"},"TemperatureControlPresenter.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"class TemperatureControlPresenter : public ModelListener\n{\npublic:\n  // override the empty function.\n  virtual void notifyTemperatureChanged(int newTemperature) {\n    view.setTemp(newTemperature);\n  }\n};\n")),(0,a.kt)("p",null,"The View class ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"TemperatureControlView"),", must of course implement the ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"setTemp")," method."),(0,a.kt)("h2",k({},{id:"transmitting-data-from-ui-to-surrounding-system"}),"Transmitting Data from UI to Surrounding System"),(0,a.kt)("p",null,"The reverse direction where data/events are transferred from the UI to the surrounding system, is done through the Model in much the same way. Continuing the example from before if we need to add the ability to configure a new target temperature, we would add the following to the Model:"),(0,a.kt)(u.Z,{mdxType:"CodeHeader"},"Model.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"void setNewTargetTemperature(int newTargetTemp)\n{\n  // Pseudo-code for sending an event to a task responsible for controlling temperature.\n  struct Message msg;\n  msg.eventType = EVT_SET_TARGET_TEMP;\n  msg.data = newTargetTemp;\n  OS_Send(SystemTaskMBox, &msg);\n}\n")),(0,a.kt)("p",null,"In case the user sets a new target temperature in the UI, the View can inform the Presenter which holds a pointer to the Model object and is therefore able to call the ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"setNewTargetTemperature")," function."),(0,a.kt)("h2",k({},{id:"examples"}),"Examples"),(0,a.kt)("p",null,"The following examples are Board Specific Demos (BSD), however much of the code demonstrated can be reused for other demo boards and custom hardware. For these examples we create the Tasks and Queues in STM32CubeMX. We then populate the generated Tasks and implements example user code in ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"main_user.c"),". The examples use STM32CubeMX BSP librarie to control the LEDs, user buttons and other peripherals on the STM32 evaliation kits."),(0,a.kt)("h3",k({},{id:"from-gui-task"}),"From GUI Task"),(0,a.kt)("p",null,"An example application, a BSD, can be found in the latest version of TouchGFX Designer under Demos -> Board Specific Demo -> STM32F46G Discovery kit Control LED from GUI."),(0,a.kt)("p",null,"The application demonstrates how to sample a button and control a LED. The Model class samples a button and updates the LED to match the state of the application."),(0,a.kt)("h3",k({},{id:"from-other-task"}),"From Other Task"),(0,a.kt)("p",null,"An example application, a BSD, can be found in the latest version of TouchGFX Designer under Demos -> Board Specific Demo -> STM32H7B3I Evaluation Board Analog Sampler Task."),(0,a.kt)("p",null,"The application demonstrates how to sample an analog input in separate thread. The example uses the MVP architecture to transfer the analog value to the View."),(0,a.kt)("p",null,"An example application, a BSD, can be found in the latest version of TouchGFX Designer under Demos -> Board Specific Demo -> STM32F46G Discovery kit Intertask Communication."),(0,a.kt)("p",null,"The application demonstrates intertask communication and propagation to and from the UI. Use this as inspiration for your own setup. The example communicates between the backend system implemented in C code and the C++ TouchGFX GUI. The example runs on the STM32F746G-DISCO board on top of FreeRTOS."),(0,a.kt)("h3",k({},{id:"from-multiple-tasks"}),"From Multiple tasks"),(0,a.kt)("p",null,"An example application, a BSD, can be found in the latest version of TouchGFX Designer under Demos -> Board Specific Demo -> STM32F769I Discovery Multitast Communication Demo."),(0,a.kt)("p",null,"The application samples the state of the button, passes a message through the GUI message queue if the button is pressed down. This allows us to advance the animation in the application by keeping the button pressed."),(0,a.kt)("p",null,"The application uses three FreeRTOS tasks. One for the GUI, one for each peripheral (LED and USER Button)."),(0,a.kt)("h3",k({},{id:"from-task-and-external-interrupt-line"}),"From Task and External Interrupt Line"),(0,a.kt)("p",null,"An example application, a BSD, can be found in the latest version of TouchGFX Designer under Demos -> Board Specific Demo -> STM32F769I Discovery External Interrup Line Demo."),(0,a.kt)("p",null,"The application was designed for the STM32F769I-DISCO board and interacts with an LED and the USER BUTTON to show how to integrate both C code and hardware peripherals into your TouchGFX application."),(0,a.kt)("p",null,"This application configures the button in EXTI mode (external interrupt line 0). Behavior is to receive an interrupt when the button is pressed down after which the interrupt is cleared. This does not allow the same behavior as in GPIO, but instead we'll be single stepping the animation because a message is only sent through the gui message queue whenever an interrupt is received."),(0,a.kt)("p",null,"The application uses two FreeRTOS tasks. One for the GUI, one for the LED. (The Button task from ",(0,a.kt)("a",k({parentName:"p"},{href:"#from-multiple-tasks"}),"Multiple tasks demo")," remains active in this application to exemplify that the peripheral interaction code has been moved into an interrupt handler)."))}M.isMDXComponent=!0}}]);