(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/logo2.b41ba097.jpg"},30:function(e){e.exports={a:[{itemId:1,item:"Cafe americano",price:5},{itemId:2,item:"Cafe con leche",price:7},{itemId:3,item:"Sandwich de jam\xf3n y queso",price:10},{itemId:4,item:"Jugo de frutas natural",price:7},{itemId:5,item:"Chilaquiles verdes o rojos",price:10},{itemId:6,item:"Molletes",price:12}]}},31:function(e){e.exports={a:[{item:"Hamburguesa sencilla",price:10},{item:"Hamburguesa doble",price:15},{item:"Papas a la francesa",price:5},{item:"Aros de cebolla",price:5},{item:"Refresco 500/ml",price:7},{item:"Refresco 750/ml",price:10},{item:"Agua 500/ml",price:5},{item:"Agua 750/ml",price:7}]}},36:function(e,t,a){e.exports=a(63)},41:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},62:function(e,t){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),s=(a(41),a(4)),i=a(5),m=a(7),o=a(6),u=a(8),d=(a(14),a(10)),b=a(15),p=a(27),E=a.n(p),f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"display-1"},"BURGUER QUEEN ",r.a.createElement("i",{className:"fas fa-hamburger"}))),r.a.createElement("div",{className:"Nav-menu"},r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement(d.b,{to:"/Waiter",className:"btn btn-lg"}," Waiter "),r.a.createElement(d.b,{to:"/Kitchen",className:"btn btn-lg"}," Kitchen "))),r.a.createElement("div",{className:"Welcome"},r.a.createElement("img",{src:E.a,className:"img-fluid",alt:"welcome"})))},h=a(35),v=a(30),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={menuBreakfast:v.a},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.menuBreakfast;return r.a.createElement("div",{className:"breakfast"},r.a.createElement("div",{className:"containerFood"},r.a.createElement("div",{className:"menuBreakfast"},t.map(function(t,a){return r.a.createElement("div",{className:"card-group"},r.a.createElement("div",{className:"card",key:a},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.item),r.a.createElement("p",{className:"card-text"},"Precio $",t.price),r.a.createElement("button",{className:"btn btn-sm",onClick:function(){return e.props.addOrder(t)}},"Agregar"))))}))))}}]),t}(n.Component),O=a(31),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={menuMeals:O.a},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.menuMeals;return r.a.createElement("div",{className:"dailyMeals"},r.a.createElement("div",{className:"containerFood"},r.a.createElement("div",{className:"menuMeals"},t.map(function(t,a){return r.a.createElement("div",{className:"card-group"},r.a.createElement("div",{className:"card",key:a},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.item),r.a.createElement("p",{className:"card-text"},"Precio $",t.price),r.a.createElement("button",{className:"btn btn-sm",onClick:function(){return e.props.addOrder(t)}},"Agregar"))))}))))}}]),t}(n.Component),g=a(32),k=function(e){return r.a.createElement("div",Object(g.a)({className:"col-md-4 account-background"},"className","account"),r.a.createElement("h4",null," Mesa No ",e.numberTable),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Producto"),r.a.createElement("th",{scope:"col"},"Precio"),r.a.createElement("th",{scope:"col"},r.a.createElement("i",{class:"fas fa-trash-alt"})))),r.a.createElement("tbody",null,e.orders.map(function(t,a){return r.a.createElement("tr",null,r.a.createElement("td",null,t.item),r.a.createElement("td",null,"$",t.price),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-sm",onClick:function(){return e.removeOrder(a)}},r.a.createElement("i",{className:"fas fa-trash-alt"}))))}),r.a.createElement("tr",null,r.a.createElement("td",{className:"h5"},"  TOTAL: "),r.a.createElement("td",{className:"h5"}," $",e.total),r.a.createElement("td",null," ",r.a.createElement("button",{type:"button",className:"bt btn-success"},"Enviar a Cocina"))))),r.a.createElement("div",null))},y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={noTable:"",orders:[],numberTable:"",total:0},a.getTableNumber=function(e){a.setState({noTable:e.target.value})},a.addNumberTable=function(e){a.setState({numberTable:e})},a.addOrder=function(e){a.setState({orders:[].concat(Object(h.a)(a.state.orders),[e])},function(){return a.sumItemPrice(e.price)})},a.sumItemPrice=function(e){a.setState({total:a.state.total+e})},a.removeOrder=function(e){var t=a.state.orders[e].price;a.setState({orders:a.state.orders.filter(function(t,a){return a!==e}),total:a.state.total-t})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=(e.noTable,e.orders),a=e.numberTable,n=e.total;return r.a.createElement("div",{className:"Waiter"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"display-1"},"BURGUER QUEEN ",r.a.createElement("i",{className:"fas fa-hamburger"}))),r.a.createElement("div",{className:"Nav-menu"},r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement(d.b,{className:"btn btn-lg",to:"/Kitchen"}," Kitchen "),r.a.createElement(d.b,{className:"btn btn-lg",to:"/"}," Home "))),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement(N,{addOrder:this.addOrder}),r.a.createElement(j,{addOrder:this.addOrder}),r.a.createElement(k,{orders:t,numberTable:a,total:n,removeOrder:this.removeOrder}))))}}]),t}(n.Component),I=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"addNote",value:function(){this.props.addNote(this.textInput.value),this.textInput.value=""}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"NoteForm"},r.a.createElement("input",{ref:function(t){e.textInput=t},type:"text"}),r.a.createElement("button",{onClick:function(){return e.addNote()}},"Pedido"))}}]),t}(n.Component),C=(a(50),a(18)),w=(a(51),a(33)),A={apiKey:"AIzaSyAQfimpS7NGDUkSD62vQWEwilUZ5JSI2pU",authDomain:"burguerqueen-2a905.firebaseapp.com",databaseURL:"https://burguerqueen-2a905.firebaseio.com",projectId:"burguerqueen-2a905",storageBucket:"burguerqueen-2a905.appspot.com",messagingSenderId:"443666053228",appId:"1:443666053228:web:2076095d4fde5538"},S=(a(61),a(62),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={notes:[]},a.app=w.initializeApp(A),a.db=a.app.database().ref().child("orders"),a.addNote=a.addNote.bind(Object(C.a)(a)),a.removeNote=a.removeNote.bind(Object(C.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.notes;this.db.on("child_added",function(a){t.push({noteId:a.key,noteContent:a.val().noteContent}),e.setState({notes:t})})}},{key:"addNote",value:function(e){this.db.push().set({noteContent:e})}},{key:"removeNote",value:function(e){this.db.remove({noteId:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"notesContainer"},r.a.createElement("div",{className:"notesHeader"},r.a.createElement("h1",null,"Orden",r.a.createElement("i",{className:"fas fa-pencil-alt"}))),r.a.createElement("div",{className:"notesBody"},r.a.createElement("ul",null,this.state.notes.map(function(t){return r.a.createElement("li",{className:"Note",key:t.noteId},r.a.createElement("span",{onClick:e.removeNote},r.a.createElement("i",{className:"fas fa-trash-alt"})),r.a.createElement("p",null,t.noteContent))}))),r.a.createElement("div",{className:"notesFooter"},r.a.createElement(I,{addNote:this.addNote})))}}]),t}(n.Component)),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={breakfast:[{itemId:1,item:"Cafe americano",price:5},{itemId:2,item:"Cafe con leche",price:7},{itemId:3,item:"Sandwich de jam\xf3n y queso",price:10},{itemId:4,item:"Jugo de frutas natural",price:7},{itemId:5,item:"Chilaquiles verdes o rojos",price:10},{itemId:6,item:"Molletes",price:12}],mealFood:[{itemId:1,item:"Hamburguesa sencilla",price:10},{itemId:2,item:"Papas a la francesa",price:5},{itemId:3,item:"Aros de cebolla",price:5},{itemId:4,item:"Refresco 500/ml",price:7}]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"display-1"},"BURGUER QUEEN ",r.a.createElement("i",{className:"fas fa-hamburger"}))),r.a.createElement("div",{className:"Nav-menu"},r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement(d.b,{className:"btn btn-lg",to:"/Waiter"}," Waiter "),r.a.createElement(d.b,{className:"btn btn-lg",to:"/"}," Home "))),r.a.createElement("div",{className:"containerFood"},r.a.createElement("div",{className:"ordersContainer"},r.a.createElement(S,null))))}}]),t}(n.Component),T=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(b.a,{exact:!0,path:"/",render:function(){return r.a.createElement(f,null)}}),r.a.createElement(b.a,{path:"/Waiter",render:function(){return r.a.createElement(y,null)}}),r.a.createElement(b.a,{path:"/Kitchen",render:function(){return r.a.createElement(U,null)}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.06c24cc2.chunk.js.map