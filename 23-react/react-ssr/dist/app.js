(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("koa");var n=e.n(t);const a=require("@koa/router");var r=e.n(a);const o=require("koa-static");var l=e.n(o);const c=require("react");var s=e.n(c);const i=require("react-dom/server");var d=e.n(i);const u=require("react-router-dom"),p=require("react-redux"),m=require("axios");var h=e.n(m);class E extends s().Component{static getSomeData=e=>new Promise((t=>{h()("http://localhost:8080/getdata").then((n=>{console.log("fetch~~~~"),e.dispatch({type:"CHANGE_STATE",payload:{data:n.data.data}}),t(n.data.data)}))}));componentDidMount(){this.props.data||h()("http://localhost:8080/getdata").then((e=>{console.log("fetch~~~~"),this.props.dispatch({type:"CHANGE_STATE",payload:{data:e.data.data}})}))}render(){return s().createElement("div",null,s().createElement("h2",null,"Home"),s().createElement("h2",null,this.props.data))}}const v=(0,p.connect)((function(e){return{data:e.data}}),(function(e){return{dispatch:e}}))(E),g=[{path:"/",component:v,exact:!0,loadData:v.getSomeData},{path:"/count",component:()=>{let[e,t]=(0,c.useState)(0);return s().createElement("div",null,s().createElement("h2",null,"hello world"),s().createElement("div",null,e),s().createElement("button",{onClick:()=>{t(++e)}},"add"))},exact:!0}];function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(){return s().createElement("div",null,s().createElement("ul",null,s().createElement("li",null,s().createElement(u.Link,{to:"/"},"Home")),s().createElement("li",null,s().createElement(u.Link,{to:"/count"},"Count"))),s().createElement("hr",null),g.map(((e,t)=>s().createElement(u.Route,y({key:t},e)))))}const w=require("redux");let b={data:""};function S(e=b,t){return"CHANGE_STATE"===t.type?{...e,...t.payload}:e}const q=new(n()),T=new(r());T.get(["/","/count"],(async e=>{let t=(0,w.createStore)(S);const n=[];g.some((a=>{const r=(0,u.matchPath)(e.request.path,a);return r&&a.loadData&&n.push(a.loadData(t)),r}));let a=await Promise.all(n);console.log("data--------------------:",a);let r=d().renderToString(s().createElement(p.Provider,{store:t},s().createElement(u.StaticRouter,null,s().createElement(f,null))));e.response.body=`\n        <!DOCTYPE html>\n        <html lang="en">\n        <head>\n            <meta charset="UTF-8">\n            <meta http-equiv="X-UA-Compatible" content="IE=edge">\n            <meta name="viewport" content="width=device-width, initial-scale=1.0">\n            <title>Document</title>\n        </head>\n        <body>\n            <script>window.REDUX_STORE = ${JSON.stringify(t.getState())}<\/script>\n            <div id="root">${r}</div>\n            <script src="/bundle.js"><\/script>\n        </body>\n        </html>\n    `})),T.get("/getdata",(e=>{e.response.body={code:0,data:"后台返回的数据~~~~"}})),q.use(l()("dist/asset")),q.use(T.routes()).use(T.allowedMethods()),q.listen(8080,(()=>{console.log("server running 8080 ...")}))})();