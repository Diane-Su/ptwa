import{d as s}from"./vuedraggable.umd-249233aa.js";import{l as n,o as d,c as p,b as r,w as u,u as m,F as c,a,t as i}from"./index-9351c4e1.js";const _=a("h1",null,"Favorite Foods",-1),b={type:"button",class:"btn btn-primary m-1"},g=a("h1",null,"Terrible Foods",-1),y={type:"button",class:"btn btn-primary m-1"},v={__name:"draganddrop",setup(V){const o=n(["Hamburger","Pizza","Spaghetti","Tacos","Teriyaki Chicken"]),l=n(["Bat wing soup","Spicy Octopus","Anything from Taco Bell"]);return(f,t)=>(d(),p(c,null,[_,r(m(s),{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e),group:"meals"},{item:u(({element:e})=>[a("button",b,i(e),1)]),_:1},8,["modelValue"]),g,r(m(s),{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=e=>l.value=e),group:"meals"},{item:u(({element:e})=>[a("button",y,i(e),1)]),_:1},8,["modelValue"])],64))}};export{v as default};
