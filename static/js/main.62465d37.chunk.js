(this.webpackJsonpburger=this.webpackJsonpburger||[]).push([[0],{118:function(e,a,n){e.exports=n(403)},122:function(e,a,n){},123:function(e,a,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},124:function(e,a,n){},125:function(e,a,n){},403:function(e,a,n){"use strict";n.r(a);var t=n(1),s=n.n(t),o=n(14),r=n.n(o),c=(n(122),n(110)),i=n(111),l=n(117),m=n(116),g=(n(123),n(124),n(125),function(e){return s.a.createElement("div",{className:"Person"},s.a.createElement("p",{onClick:e.click},"I'm ",e.name," and I am ",e.age," years old"),s.a.createElement("p",null,e.children),s.a.createElement("input",{type:"text",onChange:e.changed,value:e.name}))}),u=(n(126),function(e){Object(l.a)(n,e);var a=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var t=arguments.length,s=new Array(t),o=0;o<t;o++)s[o]=arguments[o];return(e=a.call.apply(a,[this].concat(s))).state={persons:[{name:"Dragos",age:33},{name:"Radu",age:35},{name:"Ioana",age:7}],showPersons:!1},e.switchNameHandler=function(a){e.setState({persons:[{name:a,age:33},{name:"Ion",age:35},{name:"Vasi",age:7}]})},e.nameChangedHandler=function(a){e.setState({persons:[{name:"Max",age:33},{name:a.target.value,age:35},{name:"Vasi",age:7}]})},e.togglePersonsHandler=function(){var a=e.state.showPersons;e.setState({showPersons:!a})},e}return Object(i.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"My React app"),s.a.createElement("button",{style:{backgroundColor:"blue",color:"white",fontSize:"16px",border:"1px solid blue",padding:"16px",cursor:"pointer"},onClick:this.togglePersonsHandler},"Toggle Persons"),!0===this.state.showPersons?s.a.createElement("div",null,s.a.createElement(g,{name:this.state.persons[0].name,age:this.state.persons[0].age}),s.a.createElement(g,{name:this.state.persons[1].name,age:this.state.persons[1].age,click:this.switchNameHandler.bind(this,"Max"),changed:this.nameChangedHandler}," My Hobbies Racing:"),s.a.createElement(g,{name:this.state.persons[2].name,age:this.state.persons[2].age})):null)}}]),n}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[118,1,2]]]);
//# sourceMappingURL=main.62465d37.chunk.js.map