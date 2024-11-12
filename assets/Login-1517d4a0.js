import{e as _,q as c,r as u,o as f,c as x,j as t,d as n,A as y,B as v,I as A,h as p,w as g,g as b}from"./index-e773a4b0.js";const V=["onSubmit"],k={class:"flex items-center justify-between mt-4"},B=n("label",{class:"flex items-center"},[n("input",{type:"checkbox",class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50i mb-4",name:"remember"}),n("span",{class:"ml-2 mb-3 text-sm text-gray-600"}," Recuérdame ")],-1),I=_({__name:"FormLogin",props:{error:[Object,String],sending:Boolean},emits:["submit"],setup(o,{emit:r}){const e=c(null),a=c(null),l=async()=>{r("submit",{email:e.value,password:a.value})};return(i,s)=>{const d=u("AppInput"),w=u("AppBtn"),h=u("AppFlashMessage");return f(),x("form",{onSubmit:y(l,["prevent"])},[t(d,{type:"email",label:"Correo Electrónico",name:"email",modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=m=>e.value=m),autocomplete:"email",placeholder:"email@domain.ext",class:"mb-2","data-testid":"email-input"},null,8,["modelValue"]),t(d,{type:"password",label:"Contraseña",name:"password",placeholder:"password",modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=m=>a.value=m),class:"mb-4","data-testid":"password-input"},null,8,["modelValue"]),n("div",k,[B,t(w,{type:"submit",text:o.sending?"Iniciando sesión...":"Iniciar sesión",isDisabled:o.sending,"data-testid":"submit-btn"},null,8,["text","isDisabled"])]),t(h,{error:o.error},null,8,["error"])],40,V)}}});function L(){const o=v(),r=c(null),e=c(!1);return{login:async l=>{l.email,l.password,new Promise(i=>{e.value=!0,setTimeout(()=>{i(o.push("/dashboard"))},300),e.value=!1})},sending:e,error:r}}const j={class:"p-5 m-auto w-full sm:w-4/12"},C=n("h2",{class:"my-4 text-2xl text-center"},"Inicio de Sesión",-1),S={class:"mt-2 text-center text-gray-500"},$=n("br",null,null,-1),M=_({__name:"Login",setup(o){const{login:r,sending:e,error:a}=L();return(l,i)=>{const s=u("AppLink");return f(),x("div",j,[t(A,{class:"flex justify-center pt-4 sm:justify-start sm:pt-0 w-1/4 y-1/4 h-auto m-auto bg-transparent"}),C,t(I,{class:"p-5 bg-base-200 border rounded shadow",onSubmit:i[0]||(i[0]=d=>p(r)(d)),sending:p(e),"error?":p(a)},null,8,["sending","error?"]),n("p",S,[t(s,{to:"/register",class:"text-gray-500 transition hover:text-gray-600","data-testid":"register-link"},{default:g(()=>[b(" Regístrese para obtener una cuenta ")]),_:1}),$,t(s,{to:"/forgot-password",class:"underline text-sm text-gray-600 hover:text-gray-900","data-testid":"forgot-password-link"},{default:g(()=>[b(" ¿Olvidaste tu contraseña? ")]),_:1})])])}}});export{M as default};
