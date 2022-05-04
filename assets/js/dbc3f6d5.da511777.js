"use strict";(self.webpackChunklibs_documentations=self.webpackChunklibs_documentations||[]).push([[437],{9613:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return c}});var a=n(9496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,l(l({ref:e},s),{},{components:n})):a.createElement(k,l({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},499:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(2848),r=n(9213),i=(n(9496),n(9613)),l=["components"],o={id:"physics",title:"Physics",sidebar_label:"Physics"},d=void 0,p={unversionedId:"cannon/physics",id:"cannon/physics",title:"Physics",description:"To start interacting with the Physic World, we need ` component from @angular-three/cannon`",source:"@site/docs/cannon/physics.mdx",sourceDirName:"cannon",slug:"/cannon/physics",permalink:"/docs/cannon/physics",editUrl:"https://github.com/nartc/angular-three/tree/main/libs/documentations/docs/docs/cannon/physics.mdx",tags:[],version:"current",frontMatter:{id:"physics",title:"Physics",sidebar_label:"Physics"},sidebar:"docs",previous:{title:"First Physics Scene",permalink:"/docs/cannon/first-physics-scene"},next:{title:"Body",permalink:"/docs/cannon/body"}},s={},u=[{value:"Inputs",id:"inputs",level:2},{value:"Broadphases",id:"broadphases",level:3}],m={toc:u};function c(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To start interacting with the Physic World, we need ",(0,i.kt)("inlineCode",{parentName:"p"},"<ngt-physics>")," component from ",(0,i.kt)("inlineCode",{parentName:"p"},"@angular-three/cannon")),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"size"),(0,i.kt)("td",{parentName:"tr",align:null},"Used to setup the buffer size of all bodies' positions and quaternions"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NumberInput")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1000"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"shouldInvalidate"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to invalidate the scene to prepare for next frame render"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"BooleanInput")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tolerance"),(0,i.kt)("td",{parentName:"tr",align:null},"Set the tolerance on the Solver algorithm"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NumberInput")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0.001"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"stepSize"),(0,i.kt)("td",{parentName:"tr",align:null},"The fixed time step size to use that ",(0,i.kt)("inlineCode",{parentName:"td"},"World.step")," uses"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NumberInput")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1/60"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"iterations"),(0,i.kt)("td",{parentName:"tr",align:null},"The number of solver iterations determines quality of the constraints in the world. The more iterations, the more correct simulation. More iterations need more computations though. If you have a large gravity force in your world, you will need more iterations."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NumberInput")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"5"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"allowSleep"),(0,i.kt)("td",{parentName:"tr",align:null},"Makes bodies go to sleep when they've been inactive."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"BooleanInput")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"broadphase"),(0,i.kt)("td",{parentName:"tr",align:null},"The broadphase algorithm to use."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'Naive'"),", or ",(0,i.kt)("inlineCode",{parentName:"td"},"'SAP'")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'Naive'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"gravity"),(0,i.kt)("td",{parentName:"tr",align:null},"The gravity of the world."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NgtTriple")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[0, -9.81, 0]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"quatNormalizeFast"),(0,i.kt)("td",{parentName:"tr",align:null},"Set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," to use fast quaternion normalization. It is often enough accurate to use. If bodies tend to explode, set to ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"BooleanInput")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"quatNormalizeSkip"),(0,i.kt)("td",{parentName:"tr",align:null},"How often to normalize quaternions. Set to ",(0,i.kt)("inlineCode",{parentName:"td"},"0")," for every step, ",(0,i.kt)("inlineCode",{parentName:"td"},"1")," for every second etc.. A larger value increases performance. If bodies tend to explode, set to a smaller value (zero to be sure nothing can go wrong)."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NumberInput")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"solver"),(0,i.kt)("td",{parentName:"tr",align:null},"The solver algorithm to use."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'GS'"),", or ",(0,i.kt)("inlineCode",{parentName:"td"},"'Split'")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'GS'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"axisIndex"),(0,i.kt)("td",{parentName:"tr",align:null},"For ",(0,i.kt)("inlineCode",{parentName:"td"},"SAPBroadphase"),", axis to sort the bodies along. Set to ",(0,i.kt)("inlineCode",{parentName:"td"},"0")," for x axis, and ",(0,i.kt)("inlineCode",{parentName:"td"},"1")," for y axis. For best performance, pick the axis where bodies are most distributed."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"1"),", or ",(0,i.kt)("inlineCode",{parentName:"td"},"2")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"defaultContactMaterial"),(0,i.kt)("td",{parentName:"tr",align:null},"Properties to pass in the ",(0,i.kt)("inlineCode",{parentName:"td"},"World.defaultContactMaterial")," as options"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ContactMaterialOptions")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{ contactEquationStiffness: 1e6 }"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type ContactMaterialOptions = {\n  friction?: number;\n  restitution?: number;\n  contactEquationStiffness?: number;\n  contactEquationRelaxation?: number;\n  frictionEquationStiffness?: number;\n  frictionEquationRelaxation?: number;\n};\n")),(0,i.kt)("h3",{id:"broadphases"},"Broadphases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NaiveBroadphase is as simple as it gets. It considers every body to be a potential collider with every other body. This results in the maximum number of narrowphase checks."),(0,i.kt)("li",{parentName:"ul"},"SAPBroadphase sorts bodies along an axis and then moves down that list finding pairs by looking at body size and position of the next bodies. Control what axis to sort along by setting the axisIndex property.")))}c.isMDXComponent=!0}}]);