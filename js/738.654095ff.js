"use strict";(globalThis["webpackChunkcontactlistsystem"]=globalThis["webpackChunkcontactlistsystem"]||[]).push([[738],{7738:(e,l,a)=>{a.r(l),a.d(l,{default:()=>Z});a(9665);var u=a(9835),o=a(6970),t=a(3703),n=a(8339),s=a(8109),c=a(558),i=a(499);const d={class:"text-center q-pt-lg"},r={class:"col text-h6 ellipsis"},m={class:"justify-between row q-gutter-xs"},p={__name:"LoginPage",setup(e){const l=(0,n.tv)(),a=(0,u.FN)().appContext.config.globalProperties,p=(0,i.iH)(""),v=(0,i.iH)(""),g=(0,i.iH)(""),y=(0,i.iH)(""),b=(0,i.iH)("heridonvi_tagaban12@yahoo.com"),w=(0,i.iH)("Donvie12"),h=(0,i.iH)(!1);async function f(){(0,c.e5)(a.$auth,b.value,w.value).then((e=>{const l=e.user;console.log("user",l),q(l)})).catch((e=>{e.code,e.message;console.log("error",e)}))}async function k(){(0,c.Xb)(a.$auth,b.value,w.value).then((e=>{const l=e.user;console.log("user",l),V(l)})).catch((e=>{e.code,e.message;console.log("error",e)}))}async function q(e){console.log("user",e);const l=(0,s.JU)(a.$db,"users",e.uid),u=await(0,s.QT)(l);u.exists()?(console.log("Document data:",u.data()),_(u.data())):(V(e),console.log("No such document!"))}async function V(e){const l={name:p.value,position:"",avatar:`https://robohash.org/${p.value}`,email:b.value,company_email:b.value,website:v.value,phone:g.value,secondary_phone:g.value,address:y.value,uid:e.uid},u=(0,s.JU)(a.$db,"users",e.uid);await(0,s.pl)(u,l,{merge:!0}),_(l)}function _(e){t.Z.set("user",e),l.push("/")}return(e,l)=>{const a=(0,u.up)("q-icon"),t=(0,u.up)("q-avatar"),n=(0,u.up)("q-card-section"),s=(0,u.up)("q-input"),c=(0,u.up)("q-btn"),i=(0,u.up)("q-form"),q=(0,u.up)("q-card"),V=(0,u.up)("q-page"),_=(0,u.up)("q-page-container"),W=(0,u.up)("q-layout");return(0,u.wg)(),(0,u.j4)(W,null,{default:(0,u.w5)((()=>[(0,u.Wm)(_,null,{default:(0,u.w5)((()=>[(0,u.Wm)(V,{class:"flex bg-image flex-center"},{default:(0,u.w5)((()=>[(0,u.Wm)(q,{style:(0,o.j5)(e.$q.screen.lt.sm?{width:"80%"}:{width:"30%"})},{default:(0,u.w5)((()=>[(0,u.Wm)(n,null,{default:(0,u.w5)((()=>[(0,u.Wm)(t,{size:"103px",class:"absolute-center bg-primary shadow-10"},{default:(0,u.w5)((()=>[(0,u.Wm)(a,{name:"contact_phone",color:"white"})])),_:1})])),_:1}),(0,u.Wm)(n,null,{default:(0,u.w5)((()=>[(0,u._)("div",d,[(0,u._)("div",r,(0,o.zw)(h.value?"Sign up":"Log in"),1)])])),_:1}),(0,u.Wm)(n,null,{default:(0,u.w5)((()=>[(0,u.Wm)(i,{class:"q-gutter-md"},{default:(0,u.w5)((()=>[h.value?((0,u.wg)(),(0,u.j4)(s,{key:0,filled:"",modelValue:p.value,"onUpdate:modelValue":l[0]||(l[0]=e=>p.value=e),label:"Name","lazy-rules":""},null,8,["modelValue"])):(0,u.kq)("",!0),h.value?((0,u.wg)(),(0,u.j4)(s,{key:1,filled:"",modelValue:v.value,"onUpdate:modelValue":l[1]||(l[1]=e=>v.value=e),label:"Website","lazy-rules":""},null,8,["modelValue"])):(0,u.kq)("",!0),h.value?((0,u.wg)(),(0,u.j4)(s,{key:2,filled:"",modelValue:g.value,"onUpdate:modelValue":l[2]||(l[2]=e=>g.value=e),label:"Phone","lazy-rules":""},null,8,["modelValue"])):(0,u.kq)("",!0),h.value?((0,u.wg)(),(0,u.j4)(s,{key:3,filled:"",modelValue:y.value,"onUpdate:modelValue":l[3]||(l[3]=e=>y.value=e),label:"Address","lazy-rules":""},null,8,["modelValue"])):(0,u.kq)("",!0),(0,u.Wm)(s,{filled:"",modelValue:b.value,"onUpdate:modelValue":l[4]||(l[4]=e=>b.value=e),label:"Email","lazy-rules":""},null,8,["modelValue"]),(0,u.Wm)(s,{type:"password",filled:"",modelValue:w.value,"onUpdate:modelValue":l[5]||(l[5]=e=>w.value=e),label:"Password","lazy-rules":""},null,8,["modelValue"]),(0,u._)("div",m,[(0,u.Wm)(c,{outline:"",onClick:l[6]||(l[6]=e=>h.value=!h.value),label:h.value?"Go back to login":"Create an account",type:"button",color:"primary"},null,8,["label"]),h.value?((0,u.wg)(),(0,u.j4)(c,{key:0,onClick:l[7]||(l[7]=e=>k()),label:"Register",type:"button",color:"primary"})):((0,u.wg)(),(0,u.j4)(c,{key:1,onClick:l[8]||(l[8]=e=>f()),label:"Login",type:"button",color:"primary"}))])])),_:1})])),_:1})])),_:1},8,["style"])])),_:1})])),_:1})])),_:1})}}};var v=a(7605),g=a(2133),y=a(9885),b=a(4458),w=a(3190),h=a(1357),f=a(2857),k=a(8326),q=a(2543),V=a(8879),_=a(9984),W=a.n(_);const Q=p,Z=Q;W()(p,"components",{QLayout:v.Z,QPageContainer:g.Z,QPage:y.Z,QCard:b.Z,QCardSection:w.Z,QAvatar:h.Z,QIcon:f.Z,QForm:k.Z,QInput:q.Z,QBtn:V.Z})}}]);