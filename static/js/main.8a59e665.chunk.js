(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,a){},,function(e,t,a){e.exports=a(17)},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),s=a.n(l);a(13),a(14);var o=e=>{let{name:t,username:a,email:n,id:l}=e;return r.a.createElement("div",{className:"tc dib br3 pa3 ma2 grow bw2 shadow-5",id:"card"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(l)}),r.a.createElement("div",{class:"card__overlay"},r.a.createElement("div",{class:"overlay__text"},r.a.createElement("h2",null,t),r.a.createElement("h5",null,t),r.a.createElement("hr",{style:{height:"1px",border:"none",backgroundColor:"#ADE2D0FF"}}),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",{id:"textType"},"User:")," ",a),r.a.createElement("li",null,r.a.createElement("span",{id:"textType"},"Email:")," ",n)))),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,t)))};var c=e=>{let{robots:t}=e;const a=t.map((e,a)=>r.a.createElement(o,{key:a,id:t[a].id,name:t[a].name,username:t[a].username,email:t[a].email}));return r.a.createElement("div",null,a)};a(2);var i=e=>{let{searchChange:t}=e;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{id:"round",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))};var m=e=>r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid rgba(132, 215, 225, 0.5)",height:"800px"}},e.children);var h=class extends n.Component{constructor(e){super(e),this.state={hasError:!1}}componentDidCatch(e,t){this.setState({hasError:!0})}render(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. That's not good"):this.props.children}};a(15);var d=class extends n.Component{constructor(){super(),this.onSearchChange=(e=>{this.setState({searchfield:e.target.value})}),this.state={robots:[],searchfield:""}}componentDidMount(){fetch("https://jsonplaceholder.typicode.com/users").then(e=>e.json()).then(e=>this.setState({robots:e}))}render(){const{robots:e,searchfield:t}=this.state,a=e.filter(e=>e.name.toLowerCase().includes(t.toLowerCase()));return e.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1",id:"titleMargin"},"Robo",r.a.createElement("span",null,"Aliens")),r.a.createElement("h5",{className:"f2",id:"alienTitleMargin"},r.a.createElement("span",null,"RoboA"),"liens"),r.a.createElement(i,{id:"round",searchChange:this.onSearchChange}),r.a.createElement(m,null,r.a.createElement(h,null,r.a.createElement(c,{robots:a})))):r.a.createElement("h1",{className:"tc"},"Loading")}};var u=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then(t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:l,getTTFB:s}=t;a(e),n(e),r(e),l(e),s(e)})};a(16);s.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null))),u()}],[[4,1,2]]]);
//# sourceMappingURL=main.8a59e665.chunk.js.map