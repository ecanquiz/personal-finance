import{l as w,p as y,e as h,o as _,c as p,d as s,q as k,r as v,h as i,j as o,w as r,s as $,v as C,g as m,x as z,n as c,y as S,z as H,_ as b,a as M,F as L}from"./index-22dab6d1.js";const B="/personal-finance/assets/logo-a7928607.svg",A=w({isOpen:!1,isClose:!1});function x(){return{...y(A)}}const D={type:"button",class:"inline-flex items-center space-x-2"},V=s("span",{class:"hidden sm:inline"},"Logout",-1),j=[V],F=h({__name:"Logout",setup(a){return(e,n)=>(_(),p("button",D,j))}}),I={class:"sticky top-0 z-40 flex justify-between items-center p-5 bg-base-200 border-b-1 border-gray-700"},O={class:"flex items-center"},W=s("svg",{class:"h-6 w-6",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M4 6H20M4 12H20M4 18H11",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),q=[W],N=s("img",{alt:"Vue logo",class:"logo",src:B,width:"125",height:"125"},null,-1),T=s("svg",{class:"h-6 w-6",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M4 6H20M4 12H20M4 18H11",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),P=[T],R={key:0,class:"flex items-center space-x-5 ml-3"},E=s("span",{class:"sr-only"},"Dashboard",-1),G={class:"flex items-center"},J={class:"relative"},K=s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",class:"w-8 h-10 rounded-full"},[s("path",{d:"M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"})],-1),Q=[K],U=h({__name:"Header",setup(a){const{isOpen:e,isClose:n}=x(),d=k(!1);return(g,t)=>{const l=v("AppLink");return _(),p("header",I,[s("div",O,[s("button",{onClick:t[0]||(t[0]=u=>{e.value=!0,n.value=!0}),class:"focus:outline-none lg:hidden"},q),N,s("button",{onClick:t[1]||(t[1]=u=>{n.value=!i(n),e.value=!1}),class:"focus:outline-none hidden lg:block"},P),(_(),p("div",R,[o(l,{to:"/dashboard"},{default:r(()=>[E]),_:1})]))]),s("div",G,[s("div",J,[s("button",{onClick:t[2]||(t[2]=u=>d.value=!d.value),class:"relative z-10 block h-8 w-8 rounded-full overflow-hidden focus:outline-none"},Q),$(s("div",{onClick:t[3]||(t[3]=u=>d.value=!1),class:"absolute right-0 mt-2 py-2 w-48 bg-base-100 rounded-md shadow-xl z-20"},[o(l,{to:"/profile",class:"block px-4 py-2 text-sm hover:bg-gray-400"},{default:r(()=>[m(" Profile ")]),_:1}),o(l,{to:"/",class:"block px-4 py-2 text-sm hover:bg-gray-400"},{default:r(()=>[o(F)]),_:1})],512),[[C,d.value]])])])])}}}),f=a=>(S("data-v-539b067e"),a=a(),H(),a),X={key:0,class:"flex bg-base-100"},Y={class:"py-6 px-6"},Z=f(()=>s("span",{class:"flex items-center group py-0"}," Dashboard ",-1)),ss=f(()=>s("span",{class:"flex items-center group py-0"}," Todos los movimientos ",-1)),es={class:"py-6 px-6"},ts=f(()=>s("span",{class:"flex items-center group py-0"}," Dashboard ",-1)),os=f(()=>s("span",{class:"flex items-center group py-0"}," Todos los movimientos ",-1)),ns=h({__name:"Sidebar",setup(a){const e=z(),{isOpen:n,isClose:d}=x();return(g,t)=>{const l=v("AppLink");return _(),p("div",X,[s("div",{class:c([i(n)?"block":"hidden","fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"]),onClick:t[0]||(t[0]=u=>n.value=!1)},null,2),s("div",{class:c([i(n)?"translate-x-0 ease-out":"-translate-x-full ease-in","mt-10 bg-base-200 fixed z-50 inset-y-0 left-0 transition duration-300 transform overflow-y-auto lg:static lg:inset-0 block lg:hidden"])},[s("nav",Y,[s("div",{class:c(["mb-2 py-1 px-2",i(e).path.startsWith("/dashboard")?"activeClass":"inactiveClass"])},[o(l,{to:"/dashboard"},{default:r(()=>[Z]),_:1})],2),s("div",{class:c(["mb-2 py-1 px-2",i(e).path.startsWith("/movements")?"activeClass":"inactiveClass"])},[o(l,{to:"/movements"},{default:r(()=>[ss]),_:1})],2)])],2),s("div",{class:c([i(d)?"-translate-x-full ease-in w-0":"translate-x-0 ease-out w-full","bg-base-200 fixed z-30 inset-y-0 left-0 transition duration-300 transform overflow-y-auto lg:static lg:inset-x-0 hidden lg:block"])},[s("nav",es,[s("div",{class:c(["mb-2 py-1 px-2",i(e).path.startsWith("/dashboard")?"activeClass":"inactiveClass"])},[o(l,{to:"/dashboard"},{default:r(()=>[ts]),_:1})],2),s("div",{class:c(["mb-2 py-1 px-2",i(e).path.startsWith("/movements")?"activeClass":"inactiveClass"])},[o(l,{to:"/movements"},{default:r(()=>[os]),_:1})],2)])],2)])}}});const as=b(ns,[["__scopeId","data-v-539b067e"]]),ls={},is={class:"py-5 text-center"},cs=s("p",{class:"text-gray-400"},[m(" Full documentation for how this application is built can be found at "),s("a",{href:"https://github.com/ecanquiz/personal-finance",class:"base-link",target:"_blank"},[s("strong",null,"github.com/ecanquiz/personal-finance")])],-1),rs=[cs];function ds(a,e){return _(),p("footer",is,rs)}const _s=b(ls,[["render",ds]]),ps={class:"section"},us={class:"flex-1 flex flex-col overflow-hidden"},hs={class:"flex-1 overflow-x-hidden overflow-y-auto"},fs={class:"container mx-auto p-6"},ms=h({__name:"DefaultLayout",setup(a){return(e,n)=>(_(),p(L,null,[o(U),s("div",ps,[o(as),s("div",us,[s("main",hs,[s("div",fs,[M(e.$slots,"default")])]),o(_s)])])],64))}});export{ms as default};