var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,o=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(r)for(var a of r(t))n.call(t,a)&&s(e,a,t[a]);return e};import{R as c,r as m,a as i}from"./vendor.2bfef4b8.js";const d=()=>c.createElement(c.Fragment,null,c.createElement("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold mb-4"},"Learn to code by watching others"),c.createElement("p",{className:"text-base leading-7"},"See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.")),u=()=>c.createElement("p",{className:"text-base font-light"},c.createElement("span",{className:"font-bold"},"Try it free 7 days")," then $20/mo. thereafter");function p(e){return c.createElement("svg",o({width:"24",height:"24"},e),c.createElement("g",{fill:"none",fillRule:"evenodd"},c.createElement("circle",{fill:"#FF7979",cx:"12",cy:"12",r:"12"}),c.createElement("rect",{fill:"#FFF",x:"11",y:"6",width:"2",height:"9",rx:"1"}),c.createElement("rect",{fill:"#FFF",x:"11",y:"17",width:"2",height:"2",rx:"1"})))}const b=({type:e="button",text:t="send"})=>c.createElement("button",{type:e,className:"w-full py-4 rounded-md font-semibold shadow-btn bg-cgreen uppercase active:bg-clightGreen"},t),g=()=>{const[e,r]=m.exports.useState({firstName:"",lastName:"",email:"",password:""}),l=l=>{var n,s;console.log("e: ",l.target.name),r((n=o({},e),s={[l.target.name]:l.target.value},t(n,a(s))))};return c.createElement(c.Fragment,null,c.createElement("form",{onSubmit:t=>{t.preventDefault();for(const a in e){const r=t.target.querySelector(`#${a}`);""===e[a]?(r.classList.add("border-alert"),r.previousElementSibling.classList.remove("hidden"),r.placeholder="",r.nextElementSibling.classList.remove("hidden")):(r.classList.remove("border-alert"),r.previousElementSibling.classList.add("hidden"),r.nextElementSibling.classList.add("hidden"))}}},c.createElement("div",{className:"w-full mb-6"},c.createElement("label",{className:"relative"},c.createElement(p,{className:"absolute top-1/2 -translate-y-1/2 right-3 hidden"}),c.createElement("input",{type:"text",id:"firstName",name:"firstName",className:"w-full text-sm text-gray-600 font-semibold rounded-md py-4 pl-5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent",placeholder:"First Name",onChange:e=>l(e)}),c.createElement("p",{className:"absolute -bottom-9 right-1 text-cpink italic text-xs hidden"},"First Name cannot be empty"))),c.createElement("div",{className:"w-full mb-6"},c.createElement("label",{className:"relative"},c.createElement(p,{className:"error-icon absolute top-1/2 -translate-y-1/2 right-3 hidden"}),c.createElement("input",{type:"text",id:"lastName",name:"lastName",className:"w-full text-sm text-gray-600 font-semibold rounded-md py-4 pl-5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent",placeholder:"Last Name",onChange:e=>l(e)}),c.createElement("p",{className:"absolute -bottom-9 right-1 text-cpink italic text-xs hidden"},"Last Name cannot be empty"))),c.createElement("div",{className:"w-full mb-6"},c.createElement("label",{className:"relative"},c.createElement(p,{className:"error-icon absolute top-1/2 -translate-y-1/2 right-3 hidden"}),c.createElement("input",{type:"email",id:"email",name:"email",className:"w-full text-sm text-gray-600 font-semibold rounded-md py-4 pl-5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent",placeholder:"Email Address",onChange:e=>l(e)}),c.createElement("p",{className:"absolute -bottom-9 right-1 text-red-400 italic text-xs hidden"},"Looks like this is not an email"))),c.createElement("div",{className:"w-full mb-6"},c.createElement("label",{className:"relative"},c.createElement(p,{className:"error-icon absolute top-1/2 -translate-y-1/2 right-3 hidden"}),c.createElement("input",{type:"password",id:"password",name:"password",className:"w-full text-sm text-gray-600 font-semibold rounded-md py-4 pl-5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent",placeholder:"Password",onChange:e=>l(e)}),c.createElement("p",{className:"absolute -bottom-9 right-1 text-red-400 italic text-xs hidden"},"Password cannot be empty"))),c.createElement("div",null,c.createElement(b,{type:"submit",text:"claim your free trial"}))),c.createElement("p",{className:"text-gray-400 text-xs text-center mt-3 px-4"},"By clicking the button, you are agreeing to our"," ",c.createElement("span",{className:"font-bold text-red-400"},"Terms and Services")))};function f(){return c.createElement("div",{className:"container mx-auto h-screen w-screen flex flex-col md:flex-row md:items-center"},c.createElement("section",{className:"p-6 mt-20 md:w-5/12 lg:w-6/12 text-center md:text-left"},c.createElement(d,null)),c.createElement("main",{className:"p-6 md:w-7/12 lg:w-6/12"},c.createElement("div",{className:"mb-6 rounded-lg shadow-div bg-cpurple py-6 px-14 text-center text-2xl"},c.createElement(u,null)),c.createElement("div",{className:"bg-white p-6 w-100 rounded-lg shadow-div"},c.createElement(g,null))))}i.render(c.createElement(c.StrictMode,null,c.createElement(f,null)),document.getElementById("root"));
