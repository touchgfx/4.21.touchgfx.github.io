"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9146],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,m=d["".concat(s,".").concat(p)]||d[p]||u[p]||a;return n?r.createElement(m,i(i({ref:t},h),{},{components:n})):r.createElement(m,i({ref:t},h))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children))}},39487:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.width,n=e.height,a=e.points||[],i=(0,o.Z)(e.imageSource);return r.createElement("div",{style:{position:"relative"}},r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:t,height:n,src:i})),a.map((function(e,t){return r.createElement("svg",{style:{position:"absolute",top:0,left:0,pointerEvents:"none"},viewBox:"0 0 500 500"},r.createElement("g",{transform:"translate("+e[0]+", "+e[1]+")"},r.createElement("path",{id:"p1",d:"M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602z",fill:"white",stroke:"black"}),r.createElement("text",{x:"11.7",y:"9.5","font-size":"x-small","dominant-baseline":"middle","text-anchor":"middle"},t+1)))})),r.createElement("p",null,e.children)))}},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}t.Z=o},93054:function(e,t,n){var r=n(67294),o=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=i},37793:function(e,t,n){var r=n(67294),o=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}t.Z=i},34804:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return k},default:function(){return x},frontMatter:function(){return f},metadata:function(){return w},toc:function(){return v}});var r=n(3905),o=n(44035),a=n(39487),i=n(37793),l=n(93054),s=Object.defineProperty,c=Object.defineProperties,h=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&m(e,n,t[n]);return e};const f={id:"multiple-developers",title:"Multiple developers on a project"},k=void 0,w={unversionedId:"development/ui-development/working-with-touchgfx/multiple-developers",id:"development/ui-development/working-with-touchgfx/multiple-developers",title:"Multiple developers on a project",description:"",source:"@site/docs/development/ui-development/working-with-touchgfx/multiple-developers.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/multiple-developers",permalink:"/4.21/docs/development/ui-development/working-with-touchgfx/multiple-developers",draft:!1,tags:[],version:"current",frontMatter:{id:"multiple-developers",title:"Multiple developers on a project"},sidebar:"docs",previous:{title:"Using IDEs with TouchGFX",permalink:"/4.21/docs/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx"},next:{title:"Widgets and Containers",permalink:"/4.21/docs/development/ui-development/working-with-touchgfx/widgets-and-containers"}},b={},v=[{value:"Conflicts",id:"conflicts",level:2},{value:"The TouchGFX file",id:"the-touchgfx-file",level:3},{value:"Conflict when adding Screens",id:"conflict-when-adding-screens",level:3},{value:"Conflict when adding changing attributes",id:"conflict-when-adding-changing-attributes",level:3},{value:"The TouchGFX Text Database file",id:"the-touchgfx-text-database-file",level:3},{value:"Avoiding conflicts",id:"avoiding-conflicts",level:2},{value:"Version control systems",id:"version-control-systems",level:2},{value:"Generating TouchGFX code from the command-line",id:"generating-touchgfx-code-from-the-command-line",level:3},{value:"Ignoring specific files",id:"ignoring-specific-files",level:3}],y={toc:v};function x(e){var t,n=e,{components:s}=n,m=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=g(g({},y),m),c(t,h({components:s,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Many TouchGFX projects involve multiple developers. Two or more developers\nthat access and modify the same resources can be a problem, but if you\nfollow a few best practices, these problems can be reduced and\nhandled."),(0,r.kt)("p",null,"Before TouchGFX version 4.18, an Excel file was used to hold all text\nresources (translations). This was a problem in projects with multiple\ndevelopers since the Excel file cannot be merged, if two users both\nadded or changed a text. Texts had to be manually copied between\nvarious Excel sheets."),(0,r.kt)("p",null,"From TouchGFX version 4.18, an XML document is used to hold the texts.\nThis XML file can in most cases be merged using standard text tools."),(0,r.kt)("p",null,"Conflicts can also arise in the .touchgfx file where the TouchGFX\nDesigner saves the UI design. This file is in JSON format and can also\nbe merged using standard tools."),(0,r.kt)("p",null,"In this section we will see some examples of conflicts in the TouchGFX\nfiles and how to solve them."),(0,r.kt)("p",null,"Other sources of conflicts are the IAR or Keil project files, which we\nwill not discuss here."),(0,r.kt)("h2",g({},{id:"conflicts"}),"Conflicts"),(0,r.kt)("p",null,"Conflicts can arise when two developers modify or add to the same\nresource. When merging the two changes most tools are not able to tell\nwhich of the modifications that shall be kept (if some are to be\ndeleted) or the correct order of the two (if they both are kept)."),(0,r.kt)("p",null,"The general situation is illustrated in the figure below:"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/multiple-developers/git1.webp",mdxType:"Figure"},"Working with two branches"),(0,r.kt)("p",null,"In this example two branches are created from the main branch. The\nFeature2 branch is merged first in to the main branch. This can give a\nmerge conflict if work is also done on the main branch. Later the\nFeature1 branch is merged in to the main branch. This can give a\nconflict if the two feature branches made changes to the same files."),(0,r.kt)("p",null,"There are four major points of conflicts in a TouchGFX project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TouchGFX UI file (the .touchgfx file)"),(0,r.kt)("li",{parentName:"ul"},"TouchGFX Text Database (the texts.xml file)"),(0,r.kt)("li",{parentName:"ul"},"Ordinary C++ code in the UI and other modules"),(0,r.kt)("li",{parentName:"ul"},"Project files for IDEs")),(0,r.kt)("p",null,"In the next sections we will see how to handle and reduce the problems\nwith conflicts in the TouchGFX files."),(0,r.kt)("h3",g({},{id:"the-touchgfx-file"}),"The TouchGFX file"),(0,r.kt)("p",null,"The .touchgfx file is where the TouchGFX Designer saves the definition\nof the UI created in the Designer. This means that if two developers\nin a project both work with the TouchGFX Designer, they will both make\nchanges to this file, and conflicts can occur."),(0,r.kt)("p",null,"The .touchgfx file basically consists of two arrays. The first array\ncontains the list of Screens. The second array is the list of\nContainers."),(0,r.kt)("p",null,'Here is a very simple project created using the TouchGFX Designer. It\nconsists of one Screen with one Box widget named "box1":'),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/multiple-developers/project1.webp",mdxType:"Figure"},"A one screen project"),(0,r.kt)("p",null,"The Screens section of the .touchgfx file is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-json"}),'    "Screens": [\n      {\n        "Name": "Screen1",\n        "Components": [\n          {\n            "Type": "Box",\n            "Name": "box1",\n            "Width": 800,\n            "Height": 480,\n            "Color": {\n              "Red": 51,\n              "Green": 255\n            }\n          }\n        ],\n        "Interactions": []\n      }\n    ],\n')),(0,r.kt)("p",null,'The Screens are saved under "Screens", which in this case contains\nonly one Screen definition named Screen1. The Widgets added to Screen1\nare found under "Components" inside the Screen. So far we have only\nadded one Widget of type Box named Box1. Various attributes are set on\nBox1, e.g., Width, Height, and Color. Note that default values are not\nwritten to the .touchgfx file, so the "Blue" component of the Color\nattribute of box1 which is zero is not explicit stated.'),(0,r.kt)("h3",g({},{id:"conflict-when-adding-screens"}),"Conflict when adding Screens"),(0,r.kt)("p",null,"We will now see in detail why we can get a conflict, when more Screens\nare added, and how to resolve the conflict."),(0,r.kt)("p",null,"We take the above project as a starting point for development. Let's\nmake a couple of feature branches:"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{}),"git checkout -b feature1\ngit checkout -b feature2\n")),(0,r.kt)("p",null,"Assume now that developer1 checks out the branch feature1 and adds\nScreen2. The .touchgfx file now also contains a Screen definition for\nScreen2, after Screen1.:"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-json"}),'    "Screens": [\n      {\n        "Name": "Screen1",\n        ...\n      },\n      {\n        "Name": "Screen2",\n        "Components": [\n          {\n            "Type": "Box",\n            "Name": "box1",\n            "Width": 800,\n            "Height": 480,\n            "Color": {\n              "Red": 255,\n              "Green": 255,\n              "Blue": 255\n            }\n          }\n        ],\n        "Interactions": []\n      }\n    ],\n')),(0,r.kt)("p",null,"Assume now that developer2 checks out feature2 and also adds a new Screen\n(Screen3). His .touchgfx file will look very much like the file above."),(0,r.kt)("p",null,"The next thing the team wants to do is to merge the two feature branches\n(assuming they finished their tasks). Let's first merge feature1:"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/multiple-developers/git2.webp",mdxType:"Figure"},"Merging feature1"),(0,r.kt)("p",null,"This merge operation went well. The resulting .touchgfx file is identical to the one in feature1.\nBut when we try to merge in feature2, we are not so lucky:"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/multiple-developers/git3.webp",mdxType:"Figure"},"Merging feature2"),(0,r.kt)("p",null,"Both the feature2 branch and the main branch changed the .touchgfx\nfile, and git was not able to merge the changes. This is because both\nbranches were adding a screen just after Screen1:"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/multiple-developers/git4.webp",mdxType:"Figure"},"Merge conflict in .touchgfx file"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/multiple-developers/git5.webp",mdxType:"Figure"},"The merge conflict shown in WinMerge"),(0,r.kt)("p",null,"There are two problems in this merge. The worst problem is\nthat git tries to merge the two screen definitions (Screen2 and Screen3) into one.\nWe want two whole screen definitions. One after the other. The second\nproblem is that git (and any other version control system) cannot know\nwhich Screen you want to have first in main, Screen2 or Screen3. That\nis up to the developer."),(0,r.kt)("p",null,"We therefore need to manually merge the changes in the .touchgfx file. Be sure\nto insert the whole definition of Screen3 (from '{' to '}') after Screen2."),(0,r.kt)("p",null,"You can use this command to get the Multiple.touchgfx file back to the state before starting the merge:"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{}),"git checkout --ours Multiple.touchgfx\n")),(0,r.kt)("p",null,"You can use this command to get the .touchgfx file from feature2:"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{}),"git show feature2:Multiple1.touchgfx > feature2.touchgfx\n")),(0,r.kt)("p",null,"Now open feature2.touchgfx and Multiple1.touchgfx in you favorite\neditor and copy the whole Screen3 definition from feature2.touchgfx to\nMultiple1.touchgfx. We now have this (remember the commas between the screens):"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-json"}),'    "Screens": [\n      {\n        "Name": "Screen1",\n        ...\n      },\n      {\n        "Name": "Screen2",\n        ...\n      },\n      {\n        "Name": "Screen3",\n        ...\n      }\n    ],\n')),(0,r.kt)("p",null,"After correcting the conflict, we can commit the merge:"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{}),"git commit -m 'Merged feature2'\n")),(0,r.kt)("p",null,"Avoid having the project opened in the TouchGFX Designer while\nmerging. If you Save or Generate code (F4) from the Designer it will\noverwrite the .touchgfx file on the disk (and remove your conflict)!"),(0,r.kt)("p",null,"After merging, you can open the .touchgfx project in TouchGFX Designer and\nGenerate code."),(0,r.kt)("h3",g({},{id:"conflict-when-adding-changing-attributes"}),"Conflict when adding changing attributes"),(0,r.kt)("p",null,"Conflicts can also arise when two developers change the same\nproperty of a widget. Imagine that we create two new feature branches\nfeature3 and feature4 and in both branches change the color of the box in\nScreen1 to respectively yellow and blue."),(0,r.kt)("p",null,"Merging feature3 to main is again without problems, but when merging\nthe other feature branch we get a conflict becuase the same lines in\nthe .touchgfx file have been modified:"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/multiple-developers/git6.webp",mdxType:"Figure"},"Merging feature4"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/multiple-developers/git7.webp",mdxType:"Figure"},"Merge conflict in .touchgfx file"),(0,r.kt)("p",null,"The solution here is to decide (by talking to the developers) if you\nwant the property (i.e. the color) from feature3 or feature4. Of\ncourse it cannot be both. And it should probably not be mixed (giving\na white color). So open the .touchgfx file in your editor or favorite\ngit merge tool and select the lines you want. Here we select the\nproperties from feature3 and get:"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-json"}),'        "Name": "Screen1",\n        "Components": [\n          {\n            "Type": "Box",\n            "Name": "box1",\n            "Width": 800,\n            "Height": 480,\n            "Color": {\n              "Red": 255,\n              "Green": 255\n            }\n          }\n          ...\n')),(0,r.kt)(l.Z,{mdxType:"Note"},' The TouchGFX Designer does not include attributes in the JSON file that have the default value. This means that in the above example Blue is not mentioned under "Color" as it has the value "0". '),(0,r.kt)("h3",g({},{id:"the-touchgfx-text-database-file"}),"The TouchGFX Text Database file"),(0,r.kt)("p",null,"The TouchGFX Text Database (texts.xml file) can get conflicts that are\nvery similar to what we saw above. Let us take a look at an example.\nWe start by creating a couple of feature branches:"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{}),"git checkout -b feature5\ngit checkout -b feature6\n")),(0,r.kt)("p",null,"We will use feature5 to add a TextArea widget and a text to Screen2,\nand feature6 to add a TextArea to Screen3. This simulates two\ndevelopers working on separate Screens."),(0,r.kt)("p",null,"Assume now that developer1 checks out feature5 and adds a TextArea."),(0,r.kt)(a.Z,{points:[[420,100]],imageSource:"/img/development/ui-development/working-with-touchgfx/multiple-developers/project2.webp",mdxType:"FigureWithPoints"},"Adding a TextArea to Screen2"),(0,r.kt)("p",null,'The TextArea is given a resource ID (1) by the Designer, Screen2Headline, and\nthe text content "Screen 2". When the developer saves the project in the\nTouchGFX Designer, two files are modified on disk:'),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/multiple-developers/git8.webp",mdxType:"Figure"},"Modifications to .touchgfx and .xml files"),(0,r.kt)("p",null,"The developer adds both files and commits. The diff for the texts.xml\n(see below) shows that we have added a Text XML element with the ID\nScreen2Headline and a Translation element with the English text. The\nText element is inside a new TextGroup element. This element was\ncreated by the Designer because we did not put our new\ntext in a specific group:"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/multiple-developers/git9.webp",mdxType:"Figure"},"Modification to assets/texts/texts.xml"),(0,r.kt)("p",null,'The other developer performs similar changes although his text is called Screen3Headline and the text is "My Headline":'),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/multiple-developers/git10.webp",mdxType:"Figure"},"Modification to assets/texts/texts.xml in feature6"),(0,r.kt)("p",null,"Again when the features are done they must be merged to main. This\nis painless for the first branch, feature5, but again we get a\nconflict when merging feature6. This time in tests.xml:"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/multiple-developers/git11.webp",mdxType:"Figure"},"Conflict in assets/texts/texts.xml when merging in feature6"),(0,r.kt)("p",null,'The .touchgfx file was also changed on main and feature6 since the\nbranch was created, but git was able to merge the change sets, as\nthese changes are in separate places in the file (not in the same\nScreen). The conflict arises because both changed the first (or last)\ntext in the "Unsorted" TextGroup element:'),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/multiple-developers/git12.webp",mdxType:"Figure"},"Conflict in assets/texts/texts.xml when merging in feature6"),(0,r.kt)("p",null,"For this conflict, the order of the texts has no importance, but it is\nof course mandatory to produce correct XML, so we manually merge the text\nfile to get two full Text elements:"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/multiple-developers/git13.webp",mdxType:"Figure"},"Text conflict resolved"),(0,r.kt)("h2",g({},{id:"avoiding-conflicts"}),"Avoiding conflicts"),(0,r.kt)("p",null,"Some of the conflicts we have seen above can be avoided by following a few simple rules."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Always Create new Screens on the main branch. When Screens are\ncreated on the main branch it is impossible for two features\nbranches to insert a new Screen in the same place in the .touchgfx\nfile. Don't call the Screens Screen1, Screen2, etc. A common way\nused by many groups is to create all the Screens (empty in most\ncases) very early in the project. This is possible if you are given a\ngraphical design for most of the application at project start. If\nyou later need to add a screen consider adding it next to a Screen\nwith a logical connection and not necessarily as the last\nScreen. This is done by adding the Screen in the Designer and then\ndrag the new screen upwards to its final location.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Custom Containers exhibits the same conflicts as the Screens. As the\nneed for a custom container arises during development of a Screen,\nit is maybe not practical to create the container on main branch in\nadvance. Consider creating the custom container on the main\nbranch, rebase the feature branch to main, and continue\ndevelopment. Another way is to finish the feature branch and rebase\nto main. A conflict can arise here which can be solved by taking the\nwhole container block as of last commit in the feature branch and\nmanually put that in .touchgfx file while leaving the containers\nfrom main unchanged. Now merge to main. The main branch will\nnot see any conflicts.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Text conflicts can be reduced by using multiple TextGroups instead\nof putting all texts in the "Unsorted" group. Here we have created a\nTextGroup for Screen3 and moved the old text to this group and added\na new text (SecondHeadline):'))),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/multiple-developers/project3.webp",mdxType:"Figure"},"Separate Group for Screen3 texts"),(0,r.kt)("h2",g({},{id:"version-control-systems"}),"Version control systems"),(0,r.kt)("p",null,"When multiple developers are working on a project it is beneficial to\nuse a version control system. For example git, as we used above. This\nrises the question of which files to save in the version control\nsystem in a TouchGFX project?"),(0,r.kt)(i.Z,{mdxType:"Tip"},"General rule: Do not save any file in your version control system that is regenerated by the tools. One way to do this, is by adding those file names to a .gitignore file."),(0,r.kt)("p",null,"The reason is to avoid confusion when e.g., the .touchgfx file and the\nfiles generated from it are changed. Which modification do you keep,\nif they do not agree. If you get a conflict in the .touchgfx file, you\nwill also get the conflict in the generated files. This means more\nwork to resolve any conflict."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/multiple-developers/files0.webp",mdxType:"Figure"},"Typical layout of the project root in a TouchGFX Designer project"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null}),"Folder"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"Content"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"Save in VCS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Core"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),'main.c and other files for initialization. These are regenerated by CubeMX, but it is fine to add code to the marked "User Sections"'),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Drivers"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"The STM32 HAL and BSP software"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"EWARM"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"IAR EWARM project files. The compiler will create subdirectories for compiled files and other output files. These should not be saved."),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"(Yes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"gcc"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"ARM gcc makefile and linker script"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"LIBJPEG"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Generated by CubeMX if the LibJPEG middleware is enabled"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"MDK-ARM"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Keil project files. Do not save any subdirectory"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"(Yes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Middlewares"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Source code or header files and libraries for any enabled middleware. Including TouchGFX"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"STM32CubeIDE"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"CubeIDE project files"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"TouchGFX"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"See below"),(0,r.kt)("td",g({parentName:"tr"},{align:null}))))),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/multiple-developers/files1.webp",mdxType:"Figure"},"Typical layout of the TouchGFX folder in a project"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null}),"Folder"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"Content"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"Save in VCS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"App"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Generated by CubeMX. Functions to start TouchGFX from main.c"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"assets"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Fonts, images, and texts for TouchGFX"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"build"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Compiler output for ARM and windows gcc"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"config"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Configuration files for gcc and MSVS"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"generated"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Files generated by TouchGFX tools and Designer. The user.config file contains the path to the TouchGFX installation. These files often results in conflicts if added."),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"gui"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"User code for the Screens. These are generated by the TouchGFX Designer if they are missing."),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"simulator"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Simulator specific code"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"target"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Target specific code generated by CubeMX"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"application.config"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Configuration of image and text formats. Used by the TouchGFX Designer and other tools."),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"ApplicationTemplate.touchgfx.part"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Various information about the project. Generated by CubeMX and read by TouchGFX Designer."),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"F746TextureMapper.touchgfx"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"The UI definition created with TouchGFX Designer."),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Yes")))),(0,r.kt)("p",null,"The standard advice is to save all files generated by CubeMX in your\nversion control system. The files generated by the TouchGFX Designer\nin contrast should not be saved. The reason for this is that in many\nprojects CubeMX is used mainly in the beginning to create a hardware\nconfiguration. It is therefore preferable, that you do not need to\nopen CubeMX and generate code after each update from the version\ncontrol system. A lot more changes are made in the TouchGFX\nDesigner, so many developers will need that application open\nanyway. So it is no burden to regenerate code from within the TouchGFX\nDesigner."),(0,r.kt)("p",null,"The validity of this advice depends on your project group. If you have\nsome developers that does not work with the UI, it may be preferable\nto also commit the TouchGFX/generated folder so they have a more full\nproject directly in the VCS."),(0,r.kt)("h3",g({},{id:"generating-touchgfx-code-from-the-command-line"}),"Generating TouchGFX code from the command-line"),(0,r.kt)("p",null,"It is possible to regenerate the TouchGFX code from a command-line. A\ntypical use case is a build server or any other CI setup."),(0,r.kt)("p",null,"A command-line interface is provided by the tgfx.exe tool located in\nthe TouchGFX installation. To regenerate code for the above project,\nrun this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{}),"d:/TouchGFX/4.20.0/designer/tgfx.exe generate -p TouchGFX/F746TextureMapper.touchgfx\n")),(0,r.kt)("p",null,"Running this command corresponds to generating code (F4) within the\nTouchGFX Designer. If you use this command on your build server you\ncan avoid checking in the generated files."),(0,r.kt)("h3",g({},{id:"ignoring-specific-files"}),"Ignoring specific files"),(0,r.kt)("p",null,"Many version control systems can be configured to ignore specific\nfilenames and folders."),(0,r.kt)("p",null,"Here is a typical .gitignore for a TouchGFX project:"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{}),"TouchGFX/build/\nTouchGFX/generated/\nEWARM/settings/\nEWARM/STM32F746/\n")),(0,r.kt)("p",null,"This ignore list makes git ignore the generated TouchGFX files and any\ncompiled files. We also ignore any user settings files and build\noutput for IAR."))}x.isMDXComponent=!0}}]);