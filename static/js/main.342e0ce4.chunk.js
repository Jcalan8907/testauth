(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{89:function(e,t,a){e.exports=a(90)},90:function(e,t,a){"use strict";a.r(t);var n=a(73),i=a(74),l=a(88),c=a(75),o=a(87),r=a(18),s=a(76),m=a(1),u=a.n(m),p=a(23),d=a.n(p),h=a(82),g=a.n(h),b=a(86),f=a.n(b),E=a(79),v=a.n(E),y=a(47),w=a.n(y),C=a(84),k=a.n(C),S=a(85),j=a.n(S),O=a(49),x=a.n(O),D=a(48),N=a.n(D),F=a(83),q=a.n(F),A=a(81),R=a.n(A),W=a(46),_=a.n(W),T=(a(95),a(24)),I=function(e){return{layout:Object(s.a)({display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}},J=function(e){function t(e){var a;return Object(n.a)(this,t),console.log("call constructor"),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={email:""},a.handleChange=a.handleChange.bind(Object(r.a)(Object(r.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(r.a)(Object(r.a)(a))),a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState({email:e.target.value})}},{key:"handleSubmit",value:function(e){console.log("handle submit"),this.setState({validate:!0})}},{key:"setupStitch",value:function(){var e=new T.a("https://skerschb.github.io/testauth/");this.stitchClient=T.b.hasAppClient("ref_data-bnbxq")?T.b.defaultAppClient:T.b.initializeDefaultAppClient("ref_data-bnbxq"),this.stitchClient.auth.loginWithRedirect(e)}},{key:"componentDidMount",value:function(){var e=this;console.log("component Did mount running"),this.setupStitch(),this.stitchClient.callFunction("fetchDocuments",["ref_data/atlas_api",{path:{$regex:/^\/api\/atlas/}}]).then(function(t){e.setState({documents:t,currentDetails:[]})})}},{key:"componentDidUpdate",value:function(){console.log("Parameters component updated")}},{key:"set",value:function(e){this.setState({hello:"duh"}),console.log(this.state)}},{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"login"},u.a.createElement("div",{className:"login-container"},u.a.createElement(v.a,null),u.a.createElement("main",{className:I.layout},u.a.createElement(R.a,{className:I.paper},u.a.createElement(g.a,{className:I.avatar},u.a.createElement(q.a,null)),u.a.createElement(_.a,{component:"h1",variant:"h5"},"Sign in"),u.a.createElement("form",{className:I.form},u.a.createElement(w.a,{margin:"normal",required:!0,fullWidth:!0},u.a.createElement(N.a,{htmlFor:"email"},"Email Address"),u.a.createElement(x.a,{id:"email",onChange:this.handleChange,value:this.state.email,name:"email",autoComplete:"email",autoFocus:!0})),u.a.createElement(w.a,{margin:"normal",required:!0,fullWidth:!0},u.a.createElement(N.a,{htmlFor:"password"},"Password"),u.a.createElement(x.a,{name:"password",type:"password",id:"password",autoComplete:"current-password"})),u.a.createElement(k.a,{control:u.a.createElement(j.a,{value:"remember",color:"primary"}),label:"Remember me"}),u.a.createElement(f.a,{component:"button",type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:I.submit},"Sign in")))))))}}]),t}(u.a.Component);d.a.render(u.a.createElement(J,null),document.getElementById("root"))},95:function(e,t,a){}},[[89,2,1]]]);
//# sourceMappingURL=main.342e0ce4.chunk.js.map