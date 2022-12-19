"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8573],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:o,src:i})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:o,src:i})),a.createElement("p",null,e.children))}},48262:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return T}});var a=n(3905),r=n(44035),o=n(22425),i=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))u.call(t,n)&&d(e,n,t[n]);return e};const m={id:"tutorial-06-part-2",title:"Part 2 \u2013 Appearance of TextArea and Wildcard"},g=void 0,f={unversionedId:"tutorials/tutorial-06/tutorial-06-part-2",id:"tutorials/tutorial-06/tutorial-06-part-2",title:"Part 2 \u2013 Appearance of TextArea and Wildcard",description:'To do this second part of tutorial 6, make sure you have done the first part. We will finish the implementation of the application started in the first part of the tutorial. First, we will see how to modify the textArea appearance and we will implement the "appearance" button. Then to finish we will implement the wildcards of the imformationTextArea.',source:"@site/docs/tutorials/tutorial-06/tutorial-06-part-2.mdx",sourceDirName:"tutorials/tutorial-06",slug:"/tutorials/tutorial-06/tutorial-06-part-2",permalink:"/4.21/docs/tutorials/tutorial-06/tutorial-06-part-2",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-06-part-2",title:"Part 2 \u2013 Appearance of TextArea and Wildcard"},sidebar:"docs",previous:{title:"Part 1 \u2013 Typography and Language",permalink:"/4.21/docs/tutorials/tutorial-06/tutorial-06-part-1"},next:{title:"AbstractButton",permalink:"/4.21/docs/api/classes/classtouchgfx_1_1_abstract_button"}},k={},T=[{value:"Step 1: Change the appearance of the TextArea",id:"step-4-change-the-appearance-of-the-textarea",level:2},{value:"TouchGFX Designer",id:"touchgfx-designer",level:3},{value:"Code",id:"code",level:3},{value:"Text Color",id:"text-color",level:4},{value:"Line Spacing",id:"line-spacing",level:4},{value:"Alpha value and Text Rotation",id:"alpha-value-and-text-rotation",level:4},{value:"Other functions",id:"other-functions",level:4},{value:"Step 2: Use wildcards",id:"step-5-une-wildcards",level:2},{value:"Add Line spacing value",id:"add-line-spacing-value",level:3},{value:"Add Color name",id:"add-color-name",level:3}],x={toc:T};function w(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=h(h({},x),d),l(t,p({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,'To do this second part of tutorial 6, make sure you have done the first part. We will finish the implementation of the application started in the first part of the tutorial. First, we will see how to modify the textArea appearance and we will implement the "appearance" button. Then to finish we will implement the wildcards of the ',(0,a.kt)("em",{parentName:"p"},"imformationTextArea"),"."),(0,a.kt)("h2",h({},{id:"step-4-change-the-appearance-of-the-textarea"}),"Step 1: Change the appearance of the TextArea"),(0,a.kt)("p",null,"In this section, we will see how to change the appearance of a TextArea using TouchGFX Designer and also through code. The idea would be to change the color of a text, change the line spacing for multi lined texts, and rotate the text. We will manipulate the ",(0,a.kt)("em",{parentName:"p"},"descriptionTextArea")," named widget previously created."),(0,a.kt)("h3",h({},{id:"touchgfx-designer"}),"TouchGFX Designer"),(0,a.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-06/touchgfx-designer-appearance.png",mdxType:"Figure"},"TouchGFX Designer - Appearance "),(0,a.kt)("p",null,"In TouchGFX Designer, when selecting a TextArea widget, you will be able to change the appearance under the \u201cProperties\u201d on the right panel. The first thing you can change is the color. You can either change the color with the color palette (just by clicking on a color) or, you can enter the hex color code if you know it already (for example #FF0000 for red). For this tutorial, we did select red color for ",(0,a.kt)("em",{parentName:"p"},"desciptionTextArea")," (step 1 of part 1)."),(0,a.kt)("p",null,"The second thing you can change through this \u201cAppearance\u201d section in TouchGFX Designer is the \u201cAlpha\u201d value. This is not something exclusive to TextAreas. Indeed, a lot of widgets let the user decide the alpha value (images for example). The alpha value can be defined as the transparency of an element. For example, let\u2019s say you have a screen with 2 widgets on top of each other. If your widget on the foreground has an alpha value smaller than 255, you should be able to see your 2nd widget in the background through your 1st widget. If your foreground widget has 255 as alpha value, you should not be able to see your background widget. Let us keep an alpha value of 255 for the moment."),(0,a.kt)("p",null,"Then comes the \u201cLine spacing\u201d option. This parameter will influence the text only if it has multiple lines. It can be either positive, zero (default value), or a negative value. In case of a negative value, you\u2019ll see the second line going upper and upper, and can even be above your first line. For this tutorial, put a value of 40 for line spacing."),(0,a.kt)("p",null,"Last parameter, the \u201cText rotating\u201d. This value influences the orientation of the text. A value of 0 will show the text horizontally (default value). A 180 value is also horizontal but upside down. A value of 90 will show the text vertically and oriented to the right (top of the text on the right side). And lastly, a value of 270 will show the text vertically oriented to the left. For this tutorial we will use the default value, 0."),(0,a.kt)("p",null,"Now if you press on \u201cRun Simulator\u201d (F5 shortcut), you should see something which looks like this: "),(0,a.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-06/running-the-simulator-3.png",mdxType:"Figure"},"Running the Simulator"),(0,a.kt)("p",null,"The reason you can\u2019t see the second line is because your ",(0,a.kt)("em",{parentName:"p"},"descriptionTextArea")," widget is too small to contain your text. So, go back to your canvas, and for this widget, under the \u201cLocation section\u201d, check the box for \u201cAuto-size\u201d. Run on target once again, and you will now see the full text."),(0,a.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-06/running-the-simulator-4.png",mdxType:"Figure"},"Running the Simulator"),(0,a.kt)("h3",h({},{id:"code"}),"Code"),(0,a.kt)("h4",h({},{id:"text-color"}),"Text Color"),(0,a.kt)("p",null,"In this part, we will see how to change the appearance of the text through code. For that, we are going to use the function ",(0,a.kt)("inlineCode",{parentName:"p"},"changeAppearance()"),"."),(0,a.kt)("p",null,"First, create the following interaction:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Interaction"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Properties"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"ChangeAppearance"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("ul",null,(0,a.kt)("li",null,"Trigger: Button is clicked"),(0,a.kt)("li",null,"Clicked Source: appearanceButton"),(0,a.kt)("li",null,"Action: Call new virtual function"),(0,a.kt)("li",null,"Function Name: changeAppearance")))))),(0,a.kt)("p",null,'Press "Generate Code", the Designer will generate the specified virtual function.'),(0,a.kt)("p",null,"We want to change the color of the text. We want it to be either red, blue or green, randomly. To be able to do that, we need to generate a random value between 0 and 2 and store it somewhere. So, go to your ",(0,a.kt)("inlineCode",{parentName:"p"},"Screen1ViewBase.hpp")," file and let us declare an attribute of ",(0,a.kt)("em",{parentName:"p"},"Screen1View"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    ...\nvirtual void changeAppearance();\n\nprotected:\n    ...\n};\n")),(0,a.kt)("p",null,"Now, let us add some code to get a random color value when pressing on the change Appearance button."),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFX/gui/src/screen1_screen/Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::changeAppearance()\n{   //Color\n    int randomTextColor = rand()%3;\n    switch (randomTextColor)\n    {\n    case 0:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(255,0,0));\n        break;\n    case 1:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(0,255,0));\n        break;\n    case 2:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(0,0,255));\n        break;\n    }\n}\n")),(0,a.kt)("p",null,"You will notice that as the ",(0,a.kt)("a",h({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/tutorials/tutorial-05"}),"Tutorial 5"),", we are using the ",(0,a.kt)("inlineCode",{parentName:"p"},"setColor()")," function to change the color of our text, the ",(0,a.kt)("inlineCode",{parentName:"p"},"rand()")," function to get a random value and the ",(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx::Color::getColorFromRGB()")," function to get the wanted color. For more information about these functions, please refer to the API and the previous Tutorial."),(0,a.kt)("p",null,"Do not forget to add the needed include to be able to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"rand()")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"getColorFromRGB()")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"#include <stdlib.h>\n#include <touchgfx/Color.hpp>\n")),(0,a.kt)("h4",h({},{id:"line-spacing"}),"Line Spacing"),(0,a.kt)("p",null,"Let us change the line spacing now. We want it to be a random value between 0 and 20.\nAdd these lines in the ",(0,a.kt)("inlineCode",{parentName:"p"},"changeAppearance()")," function:"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFX/gui/src/screen1_screen/Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::changeAppearance()\n{    ...\n    int randomLineSpacing = rand()%21;\n    descriptionTextArea.setLinespacing(randomLineSpacing);\n}\n")),(0,a.kt)("h4",h({},{id:"alpha-value-and-text-rotation"}),"Alpha value and Text Rotation"),(0,a.kt)("p",null,"Let\u2019s do the same thing to get a random alpha value (",(0,a.kt)("em",{parentName:"p"},"randomAlphaValue"),") and a random text rotation value (",(0,a.kt)("em",{parentName:"p"},"randomTextRotation"),"). "),(0,a.kt)("p",null,"At the end your code should look like this:"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFX/gui/src/screen1_screen/Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::changeAppearance()\n{   //Color\n    int randomTextColor = rand()%3;\n    switch (randomTextColor)\n    {\n    case 0:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(255,0,0));\n        break;\n    case 1:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(0,255,0));\n        break;\n    case 2:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(0,0,255));\n        break;\n    }\n\n    //Line spacing\n    int randomLineSpacing = rand()%21;\n    descriptionTextArea.setLinespacing(randomLineSpacing);\n\n    //Alpha value\n    int randomAlphaValue = rand()%256;\n    descriptionTextArea.setAlpha(randomAlphaValue); \n\n    //Text rotation\n    int randomTextRotation = rand()%4;\n    switch (randomTextRotation)\n    {\n    case 0:\n        descriptionTextArea.setRotation(touchgfx::TextRotation::TEXT_ROTATE_0);\n        break;\n    case 1:\n        descriptionTextArea.setRotation(touchgfx::TextRotation::TEXT_ROTATE_90);\n      break;\n    case 2:\n        descriptionTextArea.setRotation(touchgfx::TextRotation::TEXT_ROTATE_180);\n        break;\n    case 3:\n        descriptionTextArea.setRotation(touchgfx::TextRotation::TEXT_ROTATE_270);\n        break;\n    }\n    descriptionTextArea.invalidate();\n}\n")),(0,a.kt)("h4",h({},{id:"other-functions"}),"Other functions"),(0,a.kt)("p",null,"The API for the TextArea is quite large and allows multiple manipulations on the text appearance. We can list for example the ",(0,a.kt)("inlineCode",{parentName:"p"},"setIndentation()")," function which adds an indentation on the first line of a text or the ",(0,a.kt)("inlineCode",{parentName:"p"},"setBaselineY()")," function which adjusts the TextArea \u201cy\u201d coordinate to have its baseline at the specified value. Feel free to explore the API, try functions, and see the impact on the code \ud83d\ude09."),(0,a.kt)("h2",h({},{id:"step-5-une-wildcards"}),"Step 2: Use wildcards"),(0,a.kt)("p",null,"In this part, we will learn how to change text of a TextArea during runtime. That's possible through ",(0,a.kt)("a",h({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/development/ui-development/touchgfx-engine-features/texts-and-fonts#wildcards"}),"wildcards"),"."),(0,a.kt)("p",null,"We are going to use the ",(0,a.kt)("em",{parentName:"p"},"informationTextArea")," component to display the size and the color of the text inside the ",(0,a.kt)("em",{parentName:"p"},"descriptionTextArea"),"."),(0,a.kt)("h3",h({},{id:"add-line-spacing-value"}),"Add Line spacing value"),(0,a.kt)("p",null,"At first, we will get the line spacing value and assign it to the first wildcard of the ",(0,a.kt)("em",{parentName:"p"},"informationTextArea"),". To do this we will add the following line of code at the end of your ",(0,a.kt)("inlineCode",{parentName:"p"},"changeAppearance()")," function:"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFX/gui/src/screen1_screen/Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),'void Screen1View::changeAppearance()\n{\n    ...\n    Unicode::snprintf(informationTextAreaBuffer1, INFORMATIONTEXTAREABUFFER1_SIZE, "%d", randomLineSpacing);\n    informationTextArea.invalidate();\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("a",h({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/api/classes/classtouchgfx_1_1_unicode#snprintf"}),"snprintf()")," function formats and stores a series of characters and values in the array buffer. The string is formatted as when using standard printf."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"informationTextAreaBuffer1")," -> it is the 1st Buffer for the formatted string of the ",(0,a.kt)("em",{parentName:"p"},"informationTextArea"),". It is automatically generated by Designer after clicking on generate code.\nThe digit at the end is either 1 or 2 and represents the number of the wildcard in the text (means that we have a maximum of 2 wildcards per TextAreas)."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"INFORMATIONTEXTAREABUFFER1_SIZE")," -> It is the size of the buffer that we have specified when we created the wildcard on Designer."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'"%d"')," -> Means that we are going to write in our string buffer something which is an integer type."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"randomLineSpacing")," -> value of the line spacing created during step 4 (change appearance) (it\u2019s the values to insert in the format string)."),(0,a.kt)("p",null,"Now if you run the simulator, you can see that when you press the \u201cAppearance\u201d button the line spacing value changes depending on the line spacing."),(0,a.kt)("h3",h({},{id:"add-color-name"}),"Add Color name"),(0,a.kt)("p",null,"Finally, we will get the color of the ",(0,a.kt)("em",{parentName:"p"},"descriptionTextArea")," and fill the second wildcard of the ",(0,a.kt)("em",{parentName:"p"},"informationTextArea")," according to this color. To do this, we will first create texts for each color. Here red, green, and blue. Once these texts are created, we will assign the texts to the second wildcard of the ",(0,a.kt)("em",{parentName:"p"},"informationTextArea")," according to this color."),(0,a.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-06/creating-new-text.png",mdxType:"Figure"},"Creating new text"),(0,a.kt)("p",null,"Go back to Designer to the Texts tab in texts. Click on \u201c+ Add new text\u201d. Replace the following values:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Id"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Typography"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Alignment"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"GB"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"KO"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"CH"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"ColorG"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"informationTextArea"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Left"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Green"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Green"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Green")))),(0,a.kt)("p",null,"Create in the same way the two other texts: "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Id"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Typography"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Alignment"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"GB"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"KO"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"CH"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"ColorR"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"informationTextArea"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Left"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Red"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Red"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Red")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"ColorB"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"informationTextArea"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Left"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Blue"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Blue"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Blue")))),(0,a.kt)("p",null,"After creating the texts, we can use them to fill second wildcard of the ",(0,a.kt)("em",{parentName:"p"},"informationTextArea"),". For this we will use the strncpy function as follow:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"Unicode::strncpy(informationTextAreaBuffer2, TypedText(T_COLORR).getText(), INFORMATIONTEXTAREABUFFER2_SIZE);\n")),(0,a.kt)("p",null,"The function ",(0,a.kt)("a",h({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/api/classes/classtouchgfx_1_1_unicode#strncpy"}),"strncpy")," copies n characters of a string to a destination buffer."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"informationTextAreaBuffer2")," -> it is the destination buffer (second wildcard of the informationTextArea). "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"T_COLORR")," -> it is an enum value of the text we just have created in TouchGFX Designer. You can see all the enums of texts in the ",(0,a.kt)("em",{parentName:"p"},"TextKeysAndLanguages.hpp")," file. It's automatically generated by Designer after clicking on generate code."),(0,a.kt)("p",null,(0,a.kt)("a",h({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/api/classes/classtouchgfx_1_1_typed_text"}),"TypedText"),"(T_COLORR).",(0,a.kt)("a",h({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/api/classes/classtouchgfx_1_1_typed_text#gettext"}),"getText()")," -> ",(0,a.kt)("em",{parentName:"p"},"TypedText(T_COLORRR)")," will get the object and ",(0,a.kt)("em",{parentName:"p"},"getText()")," will get the text associated to this object."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"INFORMATIONTEXTAREABUFFER2_SIZE")," -> it is the maximum number of chars to copy. Here, it is the size of the second wildcard of the informationTextArea."),(0,a.kt)("p",null,"To conclude, add the last missing lines to the code: "),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFX/gui/src/screen1_screen/Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{7,11,15}","{7,11,15}":!0}),"void Screen1View::changeAppearance()\n{   randomTextColor = rand()%3;\n    switch (randomTextColor)\n    {\n    case 0:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(255,0,0));\n        Unicode::strncpy(informationTextAreaBuffer2, TypedText(T_COLORR).getText(), INFORMATIONTEXTAREABUFFER2_SIZE);\n        break;\n    case 1:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(0,255,0));\n        Unicode::strncpy(informationTextAreaBuffer2, TypedText(T_COLORG).getText(), INFORMATIONTEXTAREABUFFER2_SIZE);\n        break;\n    case 2:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(0,0,255));\n        Unicode::strncpy(informationTextAreaBuffer2, TypedText(T_COLORB).getText(), INFORMATIONTEXTAREABUFFER2_SIZE);\n        break;\n    }\n    informationTextArea.invalidate();\n    ...\n}\n")),(0,a.kt)("p",null,"Do not forget to add the needed include to be able to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"TypedText()")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"#include <texts/TextKeysAndLanguages.hpp>\n")),(0,a.kt)("p",null,"Now if you run the application and press the button \u201cAppearance\u201d you can see the line spacing value and the name color changes depending on appearance of the ",(0,a.kt)("em",{parentName:"p"},"descriptionTextArea"),"."),(0,a.kt)("p",null,"This concludes tutorial 6."))}w.isMDXComponent=!0}}]);