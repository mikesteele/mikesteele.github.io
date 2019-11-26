(this["webpackJsonpmike-dot-cool-v2"]=this["webpackJsonpmike-dot-cool-v2"]||[]).push([[0],{18:function(e,t,o){e.exports=o(44)},23:function(e,t,o){},44:function(e,t,o){"use strict";o.r(t);var i=o(2),n=o(1),c=o(0),a=o.n(c),r=o(4),s=o.n(r),l=o(8);o(23),o(17),o(16);var u=o(7);function b(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?b(o,!0).forEach((function(t){Object(i.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):b(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var S=function(e){document.querySelector("canvas").style.cursor=e},P={tension:200,friction:10},f=function(e){var t=e.isInteractive,o=e.isRotating,i=(e.xRotation,e.yRotation,e.zRotation,e.xPosition),r=e.yPosition,s=e.zPosition,b=e.xScale,f=e.yScale,g=e.zScale,m=e.onChangeHelperTextState,y=e.helperTextLabel,h=e.hoverColor,v=a.a.useState({styles:{scale:"1",color:"white",isWireframe:!1},previousStyles:{scale:"1",color:"white",isWireframe:!0}}),X=Object(n.a)(v,2),O=X[0],x=X[1],R=Object(c.useRef)();Object(l.b)((function(){o&&(R.current.rotation.x=R.current.rotation.x+.01,R.current.rotation.y=R.current.rotation.y+.01)}));var j=function(){x({styles:{scale:"1.5",color:h,isWireframe:!0},previousStyles:{scale:"1",color:"white",isWireframe:!1}})},E=function(){S("default"),x({styles:{scale:"1",color:"white",isWireframe:!1},previousStyles:{scale:"1.5",color:h,isWireframe:!0}}),m({top:0,left:0,text:"",isVisible:!1})};return a.a.createElement(u.Spring,{from:p({},O.previousStyles),to:p({},O.styles),config:P},(function(e){var o=e.scale,n=e.color,c=Number(o),l=[b*c,f*c,g*c];return a.a.createElement("mesh",{ref:R,position:[i,r,s],onPointerOver:t?j:void 0,onPointerMove:function(e){S("pointer"),m({top:e.clientY,left:e.clientX,text:y,isVisible:!0})},onPointerOut:t?E:void 0},a.a.createElement("boxBufferGeometry",{attach:"geometry",args:l}),O.isWireframe?a.a.createElement("meshBasicMaterial",{wireframe:!0,attach:"material"}):a.a.createElement("meshLambertMaterial",{color:n,attach:"material"}))}))};function g(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function m(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?g(o,!0).forEach((function(t){Object(i.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):g(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var y=function(e){var t=a.a.useState({scales:{cube1XScale:.5,cube2XScale:.5,cube3XScale:.5,cube4XScale:.5},previousScales:{cube1XScale:.5,cube2XScale:.5,cube3XScale:.5,cube4XScale:.5}}),o=Object(n.a)(t,2),i=o[0],c=o[1],r=e.previousShape,s=e.shape,l=e.onChangeHelperTextState,b={cube:{cube1XPosition:.25,cube1YPosition:.25,cube1IsRotating:!1,cube2XPosition:.25,cube2YPosition:-.25,cube2IsRotating:!1,cube3XPosition:-.25,cube3YPosition:.25,cube3IsRotating:!1,cube4XPosition:-.25,cube4YPosition:-.25,cube4IsRotating:!1},none:{cube1XPosition:.25,cube1YPosition:.25,cube1IsRotating:!1,cube2XPosition:.25,cube2YPosition:-.25,cube2IsRotating:!1,cube3XPosition:-.25,cube3YPosition:.25,cube3IsRotating:!1,cube4XPosition:-.25,cube4YPosition:-.25,cube4IsRotating:!1},projects:{cube1XPosition:1,cube1YPosition:.5,cube1IsRotating:!0,cube2XPosition:1,cube2YPosition:-.5,cube2IsRotating:!0,cube3XPosition:-1,cube3YPosition:.5,cube3IsRotating:!0,cube4XPosition:-1,cube4YPosition:-.5,cube4IsRotating:!0}},p={tension:200,friction:10},S=function(){c({scales:{cube1XScale:1,cube2XScale:.5,cube3XScale:.5,cube4XScale:.5},previousScales:{cube1XScale:.5,cube2XScale:.5,cube3XScale:.5,cube4XScale:.5}})},P=function(){c({scales:{cube1XScale:.5,cube2XScale:.5,cube3XScale:.5,cube4XScale:.5},previousScales:{cube1XScale:1,cube2XScale:.5,cube3XScale:.5,cube4XScale:.5}})},g="projects"===s;return a.a.createElement(u.Spring,{from:m({},b[r],{},i.previousScales),to:m({},b[s],{},i.scales),config:p},(function(e){var t=e.cube1XScale,o=e.cube1XPosition,i=e.cube1YPosition,n=e.cube1IsRotating,c=e.cube2XScale,r=e.cube2XPosition,s=e.cube2YPosition,u=e.cube2IsRotating,b=e.cube3XScale,p=e.cube3XPosition,m=e.cube3YPosition,y=e.cube3IsRotating,h=e.cube4XScale,v=e.cube4XPosition,X=e.cube4YPosition,O=e.cube4IsRotating;return a.a.createElement(a.a.Fragment,null,a.a.createElement(f,{xRotation:0,yRotation:0,zRotation:0,xPosition:o,yPosition:i,zPosition:0,xScale:t,yScale:.5,zScale:.5,isRotating:n,onPointerOver:S,onPointerOut:P,isInteractive:g,onChangeHelperTextState:l,helperTextLabel:"Projects",hoverColor:"salmon"}),a.a.createElement(f,{xRotation:0,yRotation:0,zRotation:0,xPosition:r,yPosition:s,zPosition:0,xScale:c,yScale:.5,zScale:.5,isRotating:u,isInteractive:g,onChangeHelperTextState:l,helperTextLabel:"Art",hoverColor:"teal"}),a.a.createElement(f,{xRotation:0,yRotation:0,zRotation:0,xPosition:p,yPosition:m,zPosition:0,xScale:b,yScale:.5,zScale:.5,isRotating:y,isInteractive:g,onChangeHelperTextState:l,helperTextLabel:"Writing",hoverColor:"gold"}),a.a.createElement(f,{xRotation:0,yRotation:0,zRotation:0,xPosition:v,yPosition:X,zPosition:0,xScale:h,yScale:.5,zScale:.5,isRotating:O,isInteractive:g,onChangeHelperTextState:l,helperTextLabel:"Etc",hoverColor:"seagreen"}))}))};s.a.render(a.a.createElement((function(){var e=a.a.useState({shape:"cube",previousShape:"none"}),t=Object(n.a)(e,2),o=t[0],i=t[1],c=a.a.useState({top:0,left:0,isVisible:!1,text:""}),r=Object(n.a)(c,2),s=r[0],u=r[1];return a.a.createElement(a.a.Fragment,null,"projects"!==o.shape&&a.a.createElement("div",{className:"heading",onClick:function(){i({shape:"projects",previousShape:"cube"})}},"Enter"),s.isVisible&&a.a.createElement("div",{style:{position:"fixed",background:"white",top:s.top,left:s.left,padding:32,zIndex:10,pointerEvents:"none",margin:16}},s.text),a.a.createElement(l.a,{camera:{position:[0,0,2]}},a.a.createElement("ambientLight",{intensity:.5}),a.a.createElement("spotLight",{intensity:.6,position:[30,30,50],angle:.2,penumbra:1,castShadow:!0}),a.a.createElement(y,{onChangeHelperTextState:function(e){u(e)},shape:o.shape,previousShape:o.previousShape})))}),null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4a3568ac.chunk.js.map