(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,function(e,t,n){e.exports={list:"Statistics_list__3aQ7t",item:"Statistics_item__1ZthC"}},,,function(e,t,n){e.exports={btn:"FeedbackOptions_btn__24Yz1",button:"FeedbackOptions_button__2Jm6j"}},,function(e,t,n){e.exports={Container:"Container_Container__ANeVq"}},function(e,t,n){e.exports={title:"Notification_title__OvSRS"}},,,,,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),c=n(7),s=n.n(c),r=(n(14),n(4)),o=n(8),u=n.n(o),l=n(0),b=function(e){var t=e.children;return Object(l.jsx)("div",{className:u.a.Container,children:t})},d=n(1),j=n.n(d),m=function(e){var t=e.title,n=e.children;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{className:h.title,children:t}),n]})};m.propType={title:j.a.string.isRequired,children:j.a.node};var h=m,O=n(6),p=n.n(O),f=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(l.jsx)("div",{className:p.a.btn,children:Object.keys(t).map((function(e){return Object(l.jsx)("button",{className:p.a.button,type:"button",name:e,onClick:function(){return n(e)},children:e},e)}))})},x=n(3),v=n.n(x),k=function(e){var t=e.good,n=e.neutral,a=e.bad,i=e.total,c=e.positivePercentage;return Object(l.jsxs)("ul",{className:v.a.list,children:[Object(l.jsxs)("li",{className:v.a.item,children:["Good: ",t]}),Object(l.jsxs)("li",{className:v.a.item,children:["Neutral: ",n]}),Object(l.jsxs)("li",{className:v.a.item,children:["Bad: ",a]}),Object(l.jsxs)("li",{className:v.a.item,children:["Total: ",i]}),Object(l.jsxs)("li",{className:v.a.item,children:["Positive feedback: ",c,"%"]})]})};k.propType={good:j.a.number.isRequired,neutral:j.a.number.isRequired,bad:j.a.number.isRequired,total:j.a.number.isRequired,positivePercentage:j.a.number.isRequired};var _=k,g=n(9),N=n.n(g),R=function(e){var t=e.message;return Object(l.jsx)("p",{className:N.a.title,children:t})};R.propType={message:j.a.string.isRequired};var q=R;function y(e,t){return e+t}function C(){var e=Object(a.useReducer)(y,0),t=Object(r.a)(e,2),n=t[0],i=t[1],c=Object(a.useReducer)(y,0),s=Object(r.a)(c,2),o=s[0],u=s[1],d=Object(a.useReducer)(y,0),j=Object(r.a)(d,2),m=j[0],O=j[1],p=function(){return n+o+m};return Object(l.jsxs)(b,{children:[Object(l.jsx)(h,{title:"Please leave feedback",children:Object(l.jsx)(f,{options:{good:n,neutral:o,bad:m},onLeaveFeedback:function(e){switch(e){case"good":i(1);break;case"neutral":u(1);break;case"bad":O(1);break;default:return}}})}),p()?Object(l.jsx)(h,{title:"Statistics",children:Object(l.jsx)(_,{good:n,neutral:o,bad:m,total:p(),positivePercentage:Math.round(n/p()*100)})}):Object(l.jsx)(q,{message:"No feedback given"})]})}s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.7c31b332.chunk.js.map