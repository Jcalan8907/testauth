(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{89:function(e,a,t){e.exports=t(90)},90:function(e,a,t){"use strict";t.r(a);var n=t(73),i=t(74),l=t(88),o=t(75),c=t(87),r=t(18),s=t(76),m=t(1),u=t.n(m),p=t(23),d=t.n(p),h=t(82),g=t.n(h),b=t(86),f=t.n(b),E=t(79),v=t.n(E),y=t(47),w=t.n(y),C=t(84),k=t.n(C),j=t(85),O=t.n(j),S=t(49),x=t.n(S),N=t(48),D=t.n(N),q=t(83),A=t.n(q),F=t(81),R=t.n(F),W=t(46),T=t.n(W),I=(t(95),t(24)),J=function(e){return{layout:Object(s.a)({display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}},L=function(e){function a(e){var t;return Object(n.a)(this,a),console.log("call constructor"),(t=Object(l.a)(this,Object(o.a)(a).call(this,e))).state={email:""},t.handleChange=t.handleChange.bind(Object(r.a)(Object(r.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(r.a)(Object(r.a)(t))),t}return Object(c.a)(a,e),Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState({email:e.target.value})}},{key:"handleSubmit",value:function(e){console.log("handle submit"),this.setState({validate:!0})}},{key:"setupStitch",value:function(){var e=new I.a("https://skerschb.github.io/testauth/");this.stitchClient=I.b.hasAppClient("ref_data-bnbxq")?I.b.defaultAppClient:I.b.initializeDefaultAppClient("ref_data-bnbxq"),this.stitchClient.auth.loginWithRedirect(e)}},{key:"componentDidMount",value:function(){console.log("component Did mount running"),this.setupStitch()}},{key:"componentDidUpdate",value:function(){console.log("Parameters component updated")}},{key:"set",value:function(e){this.setState({hello:"duh"}),console.log(this.state)}},{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"login"},u.a.createElement("div",{className:"login-container"},u.a.createElement(v.a,null),u.a.createElement("main",{className:J.layout},u.a.createElement(R.a,{className:J.paper},u.a.createElement(g.a,{className:J.avatar},u.a.createElement(A.a,null)),u.a.createElement(T.a,{component:"h1",variant:"h5"},"Sign in"),u.a.createElement("form",{className:J.form},u.a.createElement(w.a,{margin:"normal",required:!0,fullWidth:!0},u.a.createElement(D.a,{htmlFor:"email"},"Email Address"),u.a.createElement(x.a,{id:"email",onChange:this.handleChange,value:this.state.email,name:"email",autoComplete:"email",autoFocus:!0})),u.a.createElement(w.a,{margin:"normal",required:!0,fullWidth:!0},u.a.createElement(D.a,{htmlFor:"password"},"Password"),u.a.createElement(x.a,{name:"password",type:"password",id:"password",autoComplete:"current-password"})),u.a.createElement(k.a,{control:u.a.createElement(O.a,{value:"remember",color:"primary"}),label:"Remember me"}),u.a.createElement(f.a,{component:"button",type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:J.submit},"Sign in")))))))}}]),a}(u.a.Component);d.a.render(u.a.createElement(L,null),document.getElementById("root"))},95:function(e,a,t){}},[[89,2,1]]]);
//# sourceMappingURL=main.a7f2c8ca.chunk.js.map