import{e as d,_ as c,o as r,c as t,j as m,w as g,t as s,i as a,F as n,k as l,d as i,T as f}from"./index-e773a4b0.js";const h=d({name:"AppFlashMessage",props:{message:{type:String,default:null},error:{type:[Object,String],default:null}},computed:{errorKeys(){return!this.error||this.getType(this.error)==="string"?null:Object.keys(this.error)}},methods:{getErrors(e){return this.error[e]},getType(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},filterTitleCase(e){return e.replace("_"," ")}}}),y={class:"mt-2 text-sm text-green-500",key:"message"},_={key:"error",class:"mt-2 text-sm text-red-500"},T={class:"mt-2 text-sm text-red-500",key:"error-list"},b={class:"font-bold capitalize"},k={class:"ml-2"};function C(e,j,$,F,S,w){return r(),t("div",null,[m(f,{name:"fade"},{default:g(()=>[e.message?(r(),t("p",y,s(e.message),1)):a("",!0),e.error&&e.getType(e.error)==="string"?(r(),t("p",_,s(e.error),1)):a("",!0),e.getType(e.error)==="object"?(r(),t("ul",T,[(r(!0),t(n,null,l(e.errorKeys,o=>(r(),t("li",{key:o},[i("b",b,s(e.filterTitleCase(o)),1),i("ul",k,[(r(!0),t(n,null,l(e.getErrors(o),(p,u)=>(r(),t("li",{key:`${u}-error`},s(p),1))),128))])]))),128))])):a("",!0)]),_:1})])}const E=c(h,[["render",C]]);export{E as default};
