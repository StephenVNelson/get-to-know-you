(this["webpackJsonpget-to-know-you"]=this["webpackJsonpget-to-know-you"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(5),o=n.n(a),s=(n(12),n(13),n(4)),i=n(3),u=n.n(i),h=n(6),l="www.stephenvnelson.com",j="".concat("https","://").concat(l);function b(e,t){return fetch("".concat(j,"/users"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{name:e,birthday:t}})}).then((function(e){return e.json()})).then((function(e){return localStorage.setItem("userName",e.name),localStorage.setItem("userBirthday",e.birthday),e}))}var d=n(0),m=function(e){var t=e.changeUserName,n=e.changeUserBirthday,r=function(){var e=Object(h.a)(u.a.mark((function e(r){var c,a,o,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),c=r.target.elements,a=c.name,o=c.birthday,e.next=4,b(a.value,o.value);case 4:s=e.sent,t(s.name),n(s.birthday);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"Join the game!"}),Object(d.jsxs)("form",{onSubmit:r,children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name"}),Object(d.jsx)("input",{type:"text",name:"name"}),Object(d.jsx)("label",{htmlFor:"birthday",children:" Birth Year"}),Object(d.jsx)("input",{type:"text",name:"birthday"}),Object(d.jsx)("button",{children:"Join"})]})]})},f=n(7),g=n.n(f).a.createConsumer("ws://".concat(l,"/cable"));var O=function(){return Object(r.useEffect)((function(){g.subscriptions.create({channel:"GameChannel"},{received:function(e){console.log("received",e)}})}),[]),Object(d.jsx)("div",{children:"Play games"})},p=function(){var e=Object(r.useState)(localStorage.getItem("userName")),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(localStorage.getItem("userBirthday")),o=Object(s.a)(a,2),i=o[0],u=o[1];Object(r.useEffect)((function(){n||i||console.log("No user credentials!")}),[]);var h=n?Object(d.jsx)(O,{}):Object(d.jsx)(m,{changeUserName:c,changeUserBirthday:u});return Object(d.jsx)("div",{children:h})};var v=function(){return Object(d.jsx)(p,{})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.8b0e6b40.chunk.js.map