"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[933],{7206:(e,t,a)=>{a.d(t,{eM:()=>j,H2:()=>k,Mu:()=>v,cF:()=>$,mO:()=>y,fy:()=>q});var r=a(5464),i=a(7203),p=a(7580),o=a(8300),n=a(8018),s=a(525),l=a(7836),x=a(6636),d=a(1058),m=a(7038),c=a(4502),u=a(5026),g=a(9250);const h=a.p+"static/media/leaves.ab2ea6027bcd393c10fa.png",b=a.p+"static/media/leaves@2x.be8555f976d4cbd66053.png";var f=a(7984),w=a(4232);const y=r.Ay.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 100px;
  @media (min-width: 426px) and (max-width: 1023px) {
    padding: 160px 32px 419px;
  }
  @media (min-width: 1024px) {
    margin: 0 auto;
    width: 1280px;
    padding: 306px 16px 179px;
  }
`,j=r.Ay.div`
  margin-top: 60px;
  display: grid;
  gap: 32px;
  justify-content: center;
  @media (min-width: 426px) {
    display: flex;
    gap: 32px;
    justify-content: flex-start;
  }
`,k=r.Ay.h2`
  font-family: 'VerdanaBold, sans-serif';
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;

  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #FC842D;
  margin-bottom: 60px;
  margin-top: 40px;
  text-align: center;
  @media (min-width: 426px) {
    text-align: left;
  }
`,$=r.Ay.button`
  cursor: pointer;
  margin-top: 20px;
  width: 182px;
  height: 44px;

  color: #ffffff;
  background-color: #fc842d;
  border-radius: 30px;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border: none;
  font-family: 'VerdanaBold, sans-serif';
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.04em;
`,v=r.Ay.button`
  cursor: pointer;
  margin-top: 20px;
  width: 182px;
  height: 44px;

  color: #fc842d;
  background-color: #ffffff;
  border-radius: 30px;
  border: 2px solid #fc842d;
  font-family: 'VerdanaBold, sans-serif';
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.04em;
`,q=r.Ay.div`
  @media (min-width: 426px) and (max-width: 1023px) {
    background-image: url(${u}), url(${h}),
      url(${m}), url(${f});
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-position: bottom 200px right -80px, top -97px left 0px,
      bottom 0px right 0px, bottom 0px right 0px;
    background-size: 391px 384px, 740px 842px, auto, auto;

    @media (min-resolution: 2dppx) {
      background-image: url(${b}),
        url(${g}), url(${c}),
        url(${w});
      background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
      background-position: bottom 97px left 0px, bottom 279px right -60px,
        bottom 0px right 0px, bottom 0px right 0px;
      background-size: 531px 553px, 291px 284px, 491px 431px, 494px 563px;
    }
  }
  @media (min-width: 1024px) {
    background-image: url(${i}), url(${o}), url(${p}),
      url(${n});
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-position: top 0px right 195px, top 506px right 30px,
      top 0px right 0px, bottom 0px right 0px;
    background-size: auto, auto, auto, 602px 816px;
    @media (min-resolution: 2dppx) {
      background-image: url(${s}), url(${x}),
        url(${l}), url(${d});
      background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
      background-position: top 0px right 195px, top 526px right 50px,
        top 0px right 0px, bottom 0px right 0px;
      background-size: 746px 846px, 286px 279px, 498px 450px, 602px 816px;
    }
  }
`},2115:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var r=a(5043),i=a(3892),p=a(3825),o=a(899),n=a(6879),s=a(3216),l=a(6708),x=a(3003),d=a(8425),m=a(7206),c=a(1017),u=a(9640),g=a(579);const h=o.Ik().shape({name:o.Yj().min(4,"Name must be more than or equal to 4 letters").max(50,"Name must be less than or equal to 50 letters").required("Name is required field"),password:o.Yj().min(6,"Password must be more than or equal to 6 letters").max(16,"Password must be less than or equal to 16 letters").required("Password is required field"),email:o.Yj().email("Invalid email").typeError("Email must be an email").required("Email is required field")}),b={name:"",email:"",password:""},f=()=>{var e;const t=null===(e=(0,s.zy)().state)||void 0===e?void 0:e.userDataForRegister;localStorage.setItem("params",JSON.stringify(t));const a=(0,s.Zp)(),[o,{status:f}]=(0,l.L5)(),w=(0,x.wA)(),[y]=(0,l.N8)(),[j,k]=(0,r.useState)(!1),$=()=>{k(!j)};return(0,g.jsxs)(m.fy,{children:["pending"===f&&(0,g.jsx)(c.a,{}),(0,g.jsxs)(m.mO,{children:[(0,g.jsx)(m.H2,{children:"Register"}),(0,g.jsx)(i.l1,{initialValues:b,onSubmit:async(e,r)=>{let{resetForm:i}=r;const p={...e,...t},n=await o(p).unwrap(),s={...e};delete s.name;const l=await y(s).unwrap();w((0,d.LA)(n)),w((0,d.gV)(l)),a(u.J.diary),i()},validationSchema:h,children:(0,g.jsxs)(i.lV,{children:[(0,g.jsxs)(n.B8,{style:{display:"grid",gridTemplateColumns:"revert"},children:[(0,g.jsx)("li",{children:(0,g.jsxs)("label",{children:[(0,g.jsx)(n.pd,{type:"name",name:"name",placeholder:"Name *"}),(0,g.jsx)(i.Kw,{name:"name",component:n.$D})]})}),(0,g.jsx)("li",{children:(0,g.jsxs)("label",{children:[(0,g.jsx)(n.pd,{type:"email",name:"email",placeholder:"Email *"}),(0,g.jsx)(i.Kw,{name:"email",component:n.$D})]})}),(0,g.jsx)("li",{children:(0,g.jsxs)("label",{style:{position:"relative"},children:[(0,g.jsx)(n.pd,{type:j?"text":"password",name:"password",placeholder:"Password *",maxLength:"16"}),j?(0,g.jsx)(p.cqH,{onClick:$,style:{position:"absolute",top:"0px",left:"250px",color:"#FC842D"}}):(0,g.jsx)(p.zgv,{onClick:$,style:{position:"absolute",top:"0px",left:"250px",color:"#FC842D"}}),(0,g.jsx)(i.Kw,{name:"password",component:n.$D})]})})]}),(0,g.jsxs)(m.eM,{children:[(0,g.jsx)(m.cF,{type:"submit",full:!0,style:{width:"200px"},children:"Register"}),(0,g.jsx)("div",{onClick:()=>{a(u.J.login)},children:(0,g.jsx)(m.Mu,{type:"button",full:!1,children:"Log In"})})]})]})})]})]})}}}]);
//# sourceMappingURL=933.f114c3c4.chunk.js.map