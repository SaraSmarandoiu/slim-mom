"use strict";(self.webpackChunkslim_mom=self.webpackChunkslim_mom||[]).push([[933],{7206:(e,t,o)=>{o.d(t,{Iw:()=>v,eM:()=>j,H2:()=>$,mO:()=>y,fy:()=>k});var i=o(5464),a=o(7203),r=o(7580),p=o(8300),n=o(8018),s=o(525),l=o(7836),x=o(6636),d=o(1058),m=o(7038),u=o(4502),c=o(5026),h=o(9250);const g=o.p+"static/media/leaves.ab2ea6027bcd393c10fa.png",b=o.p+"static/media/leaves@2x.be8555f976d4cbd66053.png";var f=o(7984),w=o(4232);const y=i.Ay.div`
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
`,j=i.Ay.div`
  margin-top: 60px;
  display: grid;
  gap: 32px;
  justify-content: center;
  @media (min-width: 426px) {
    display: flex;
    gap: 32px;
    justify-content: flex-start;
  }
`,$=i.Ay.h2`
  font-family: ${e=>e.theme.fonts.body};
  font-weight: 700;
  font-size: ${e=>e.theme.fontSizes[0]};
  line-height: ${e=>e.theme.lineHeights[0]};

  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: ${e=>e.theme.colors.orange};
  margin-bottom: 60px;
  margin-top: 40px;
  text-align: center;
  @media (min-width: 426px) {
    text-align: left;
  }
`,k=i.Ay.div`
  @media (min-width: 426px) and (max-width: 1023px) {
    background-image: url(${c}), url(${g}),
      url(${m}), url(${f});
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-position: bottom 200px right -80px, top -97px left 0px,
      bottom 0px right 0px, bottom 0px right 0px;
    background-size: 391px 384px, 740px 842px, auto, auto;

    @media (min-resolution: 2dppx) {
      background-image: url(${b}),
        url(${h}), url(${u}),
        url(${w});
      background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
      background-position: bottom 97px left 0px, bottom 279px right -60px,
        bottom 0px right 0px, bottom 0px right 0px;
      background-size: 531px 553px, 291px 284px, 491px 431px, 494px 563px;
    }
  }
  @media (min-width: 1024px) {
    background-image: url(${a}), url(${p}), url(${r}),
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
`,v=i.Ay.a`
  text-decoration: none;
  font-family: ${e=>e.theme.fonts.body};
  line-height: ${e=>e.theme.lineHeights.body};
  font-size: ${e=>e.theme.fontSizes[0]};

  border-radius: 30px;
  border: ${e=>e.theme.borders.btn};
  color: ${e=>e.theme.colors.orange};
  width: 182px;
  height: 44px;
  transition: background 250ms cubic-bezier(0.42, 0, 1, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover,
  &:focus {
    background: ${e=>e.theme.colors.hover};
    color: ${e=>e.theme.colors.white};
  }
`},2115:(e,t,o)=>{o.r(t),o.d(t,{default:()=>j});var i=o(5043),a=o(3892),r=o(3825),p=o(899),n=o(6879),s=o(5408),l=o(3216),x=o(6708),d=o(3003),m=o(8425),u=o(7206),c=o(1017),h=o(9689),g=o(7478),b=o(9640),f=o(579);const w=p.Ik().shape({name:p.Yj().min(4,"Name must be more than or equal to 4 letters").max(50,"Name must be less than or equal to 50 letters").required("Name is required field"),password:p.Yj().min(6,"Password must be more than or equal to 6 letters").max(16,"Password must be less than or equal to 16 letters").required("Password is required field"),email:p.Yj().email("Invalid email").typeError("Email must be an email").required("Email is required field")}),y={name:"",email:"",password:""},j=()=>{var e;const{isChristmas:t}=(0,i.useContext)(g.D),o=null===(e=(0,l.zy)().state)||void 0===e?void 0:e.userDataForRegister;localStorage.setItem("params",JSON.stringify(o));const p=(0,l.Zp)(),[j,{status:$}]=(0,x.L5)(),k=(0,d.wA)(),[v]=(0,x.N8)(),[q,z]=(0,i.useState)(!1),C=()=>{z(!q)};return(0,f.jsxs)(u.fy,{children:[t&&(0,f.jsx)(h.A,{}),"pending"===$&&(0,f.jsx)(c.a,{}),(0,f.jsxs)(u.mO,{children:[(0,f.jsx)(u.H2,{children:"Register"}),(0,f.jsx)(a.l1,{initialValues:y,onSubmit:async(e,t)=>{let{resetForm:i}=t;const a={...e,...o},r=await j(a).unwrap(),n={...e};delete n.name;const s=await v(n).unwrap();k((0,m.LA)(r)),k((0,m.gV)(s)),p(b.J.diary),i()},validationSchema:w,children:(0,f.jsxs)(a.lV,{children:[(0,f.jsxs)(n.B8,{style:{display:"grid",gridTemplateColumns:"revert"},children:[(0,f.jsx)("li",{children:(0,f.jsxs)("label",{children:[(0,f.jsx)(n.pd,{type:"name",name:"name",placeholder:"Name *"}),(0,f.jsx)(a.Kw,{name:"name",component:n.$D})]})}),(0,f.jsx)("li",{children:(0,f.jsxs)("label",{children:[(0,f.jsx)(n.pd,{type:"email",name:"email",placeholder:"Email *"}),(0,f.jsx)(a.Kw,{name:"email",component:n.$D})]})}),(0,f.jsx)("li",{children:(0,f.jsxs)("label",{style:{position:"relative"},children:[(0,f.jsx)(n.pd,{type:q?"text":"password",name:"password",placeholder:"Password *",maxLength:"16"}),q?(0,f.jsx)(r.cqH,{onClick:C,style:{position:"absolute",top:"0px",left:"250px",color:"#FC842D"}}):(0,f.jsx)(r.zgv,{onClick:C,style:{position:"absolute",top:"0px",left:"250px",color:"#FC842D"}}),(0,f.jsx)(a.Kw,{name:"password",component:n.$D})]})})]}),(0,f.jsxs)(u.eM,{children:[(0,f.jsx)(s.$,{type:"submit",full:!0,style:{width:"200px"},children:"Register"}),(0,f.jsx)("div",{onClick:()=>{p(b.J.login)},children:(0,f.jsx)(s.$,{type:"button",full:!1,children:"Log In"})}),(0,f.jsx)(u.Iw,{href:"http://localhost:5000/api/auth/google-signup",children:"Register Google"})]})]})})]})]})}}}]);
//# sourceMappingURL=933.4747ecdd.chunk.js.map