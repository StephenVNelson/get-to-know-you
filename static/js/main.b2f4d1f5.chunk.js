(this["webpackJsonpget-to-know-you"]=this["webpackJsonpget-to-know-you"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c,r,a=n(1),o=n.n(a),s=n(5),i=n.n(s),u=(n(12),n(13),n(4)),l=n(3),h=n.n(l),b=n(6);c="www.stephenvnelson.com",r="wss://";var j="".concat("https","://").concat(c);function d(e,t){return fetch("".concat(j,"/users"),{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"https://stephenvnelson.github.io/get-to-know-you/"},body:JSON.stringify({user:{name:e,birthday:t}})}).then((function(e){return e.json()})).then((function(e){return localStorage.setItem("userName",e.name),localStorage.setItem("userBirthday",e.birthday),e}))}var m=n(0),f=function(e){var t=e.changeUserName,n=e.changeUserBirthday,c=function(){var e=Object(b.a)(h.a.mark((function e(c){var r,a,o,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),r=c.target.elements,a=r.name,o=r.birthday,e.next=4,d(a.value,o.value);case 4:s=e.sent,t(s.name),n(s.birthday);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{children:"Join the game!"}),Object(m.jsxs)("form",{onSubmit:c,children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name"}),Object(m.jsx)("input",{type:"text",name:"name"}),Object(m.jsx)("label",{htmlFor:"birthday",children:" Birth Year"}),Object(m.jsx)("input",{type:"text",name:"birthday"}),Object(m.jsx)("button",{children:"Join"})]})]})},g=n(7),O=n.n(g);console.log("".concat(r).concat(c,"/connect"));var p=O.a.createConsumer("".concat(r).concat(c,"/cable"));var v=function(){return Object(a.useEffect)((function(){p.subscriptions.create({channel:"GameChannel"},{received:function(e){console.log("received",e)}})}),[]),Object(m.jsx)("div",{children:"Play games"})},y=function(){var e=Object(a.useState)(localStorage.getItem("userName")),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(localStorage.getItem("userBirthday")),o=Object(u.a)(r,2),s=o[0],i=o[1];Object(a.useEffect)((function(){n||s||console.log("No user credentials!")}),[]);var l=n?Object(m.jsx)(v,{}):Object(m.jsx)(f,{changeUserName:c,changeUserBirthday:i});return Object(m.jsx)("div",{children:l})};var x=function(){return Object(m.jsx)(y,{})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};i.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root")),w()}},[[16,1,2]]]);
//# sourceMappingURL=main.b2f4d1f5.chunk.js.map