"use strict";(self.webpackChunkslim_mom=self.webpackChunkslim_mom||[]).push([[937],{7206:(e,t,o)=>{o.d(t,{Iw:()=>v,eM:()=>j,H2:()=>y,mO:()=>$,fy:()=>k});var i=o(5464),r=o(7203),p=o(7580),a=o(8300),n=o(8018),s=o(525),l=o(7836),x=o(6636),d=o(1058),m=o(7038),c=o(4502),h=o(5026),g=o(9250);const u=o.p+"static/media/leaves.ab2ea6027bcd393c10fa.png",b=o.p+"static/media/leaves@2x.be8555f976d4cbd66053.png";var f=o(7984),w=o(4232);const $=i.Ay.div`
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
`,y=i.Ay.h2`
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
    background-image: url(${h}), url(${u}),
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
    background-image: url(${r}), url(${a}), url(${p}),
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
`},7031:(e,t,o)=>{o.r(t),o.d(t,{default:()=>j});var i=o(5043),r=o(3892),p=o(3825),a=o(899),n=o(3216),s=o(6708),l=o(3003),x=o(8425),d=o(9689),m=o(6879),c=o(5408),h=o(7206),g=o(1017),u=o(7478),b=o(9640),f=o(579);const w=a.Ik().shape({email:a.Yj().email().required("Email is required field"),password:a.Yj().min(6,"Password must be more than or equal to 6 letters").max(16,"Pame must be more than or equal to 16 letters").required("Password is required field")}),$={email:"",password:""},j=()=>{const e=(0,n.Zp)(),[t,{status:o}]=(0,s.N8)(),a=(0,l.wA)(),{isChristmas:j}=(0,i.useContext)(u.D),[y,k]=(0,i.useState)(!1),v=()=>{k(!y)};return(0,f.jsxs)(h.fy,{children:[j&&(0,f.jsx)(d.A,{}),"pending"===o&&(0,f.jsx)(g.a,{}),(0,f.jsxs)(h.mO,{style:{paddingBottom:"255px"},children:[(0,f.jsx)(h.H2,{children:"Log In"}),(0,f.jsx)(r.l1,{initialValues:$,onSubmit:async(o,i)=>{let{resetForm:r}=i;const p=await t(o).unwrap();a((0,x.gV)(p)),e(b.J.diary),r()},validationSchema:w,children:(0,f.jsxs)(r.lV,{children:[(0,f.jsxs)(m.B8,{style:{display:"grid",gridTemplateColumns:"revert"},children:[(0,f.jsx)("li",{children:(0,f.jsxs)("label",{children:[(0,f.jsx)(m.pd,{type:"email",name:"email",placeholder:"Email *"}),(0,f.jsx)(r.Kw,{name:"email",component:m.$D}),"rejected"===o&&(0,f.jsx)(m.$D,{children:"Email or password is wrong"})]})}),(0,f.jsx)("li",{children:(0,f.jsxs)("label",{style:{position:"relative"},children:[(0,f.jsx)(m.pd,{type:y?"text":"password",name:"password",placeholder:"Password *",maxLength:"16"}),y?(0,f.jsx)(p.cqH,{onClick:v,style:{position:"absolute",top:"0px",left:"250px",color:"#FC842D"}}):(0,f.jsx)(p.zgv,{onClick:v,style:{position:"absolute",top:"0px",left:"250px",color:"#FC842D"}}),(0,f.jsx)(r.Kw,{name:"password",component:m.$D}),"rejected"===o&&(0,f.jsx)(m.$D,{children:"Email or password is wrong"})]})})]}),(0,f.jsxs)(h.eM,{children:[(0,f.jsx)(c.$,{type:"submit",full:!0,style:{width:"200px"},children:"Log In"}),(0,f.jsx)("div",{onClick:()=>{e(b.J.register)},children:(0,f.jsx)(c.$,{type:"button",full:!1,children:"Register"})}),(0,f.jsx)(h.Iw,{href:"http://localhost:5000/api/auth/google-login",children:"log in Google"})]})]})})]})]})}}}]);
//# sourceMappingURL=937.e7c995ee.chunk.js.map