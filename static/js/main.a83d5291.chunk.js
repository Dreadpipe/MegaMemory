(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e){e.exports=[{id:1,src:"Megaman.png",name:"Megaman"},{id:2,src:"Light.png",name:"Dr. Light"},{id:4,src:"Wily.png",name:"Wily"},{id:5,src:"Protoman.png","name:":"Protoman"},{id:6,src:"Bubbleman.png",name:"Bubbleman"},{id:7,src:"Crashman.png",name:"Crashman"},{id:8,src:"Heatman.png",name:"Heatman"},{id:9,src:"Quickman.jpg",name:"Quickman"},{id:10,src:"Metalman.jpg",name:"Metalman"},{id:11,src:"Flashman.png",name:"Flashman"},{id:12,src:"Airman.png",name:"Airman"},{id:13,src:"Woodman.jpg",name:"Woodman"}]},function(e,t,n){e.exports=n(36)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){var a={"./Airman.png":22,"./Bubbleman.png":23,"./Crashman.png":24,"./Flashman.png":25,"./Heatman.png":26,"./Light.png":27,"./Megaman.png":28,"./Metalman.jpg":29,"./Protoman.png":30,"./Quickman.jpg":31,"./Roll.png":32,"./Wily.png":33,"./Woodman.jpg":34};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=21},function(e,t,n){e.exports=n.p+"static/media/Airman.377ea704.png"},function(e,t,n){e.exports=n.p+"static/media/Bubbleman.1f84e773.png"},function(e,t,n){e.exports=n.p+"static/media/Crashman.095d1def.png"},function(e,t,n){e.exports=n.p+"static/media/Flashman.5e7ce27e.png"},function(e,t,n){e.exports=n.p+"static/media/Heatman.5607d19a.png"},function(e,t,n){e.exports=n.p+"static/media/Light.6dde7cd4.png"},function(e,t,n){e.exports=n.p+"static/media/Megaman.a42524cc.png"},function(e,t,n){e.exports=n.p+"static/media/Metalman.db74ae9b.jpg"},function(e,t,n){e.exports=n.p+"static/media/Protoman.69834465.png"},function(e,t,n){e.exports=n.p+"static/media/Quickman.1f45bd4c.jpg"},function(e,t,n){e.exports=n.p+"static/media/Roll.1cd694e6.png"},function(e,t,n){e.exports=n.p+"static/media/Wily.b6905d1b.png"},function(e,t,n){e.exports=n.p+"static/media/Woodman.b1688116.jpg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=(n(15),n(1)),s=n(2),m=n(4),l=n(3),u=n(5),p=(n(16),n(8));n(17),n(18);var d=function(e){return r.a.createElement("h1",{className:"header"},e.children)};n(19);var g=function(e){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"reset!")),r.a.createElement("li",null,"Click an image to begin!"),r.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.topScore)))};n(20);var f=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container",key:e.id,id:e.id,onClick:function(){return e.handleClick(e.id)}},r.a.createElement("img",{className:"click-item",alt:e.name,src:n(21)("./".concat(e.src))})))};n(35);var h=function(e){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"bottom"},r.a.createElement("a",{href:"https://dreadpipe.github.io/v2portfolio/index.html"},"Ben Harris Portfolio")))},b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={robots:p,score:0,topScore:0,clicked:[]},n.handleClick=function(e){var t=n.state.clicked,a=n.state.robots.sort(function(e){return Math.random(e)-.5});return n.setState({robots:a}),t.includes(e)?(n.setState({score:0,clicked:[]}),t):(n.setState({score:n.state.score+1}),t.push(e),n.state.score===n.state.topScore&&n.setState({topScore:n.state.score+1}),t)},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.robots.sort(function(e){return Math.random()-.5});this.setState({robots:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(g,{score:this.state.score,topScore:this.state.topScore}),r.a.createElement(d,null,"Play the Mega Man 2 Memory Game!",r.a.createElement("p",null,"Click a character, but don't click the same one twice!")),r.a.createElement("div",{className:"container"},this.state.robots.map(function(t){return r.a.createElement(f,{key:t.id,id:t.id,alt:t.name,src:t.src,handleClick:e.handleClick})})),r.a.createElement(h,null))}}]),t}(a.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(b,null)}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.a83d5291.chunk.js.map