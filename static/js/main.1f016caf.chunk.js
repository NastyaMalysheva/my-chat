(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){},115:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t),a.d(t,"Context",(function(){return K}));var c=a(2),n=a.n(c),s=a(30),r=a.n(s),i=(a(112),a(21)),o=a(166),j=a(167),u=(a(113),a(27)),l=a(98),b=a(0),d=a.n(b),O=a(4),h=a(158),x=(a(115),a(18)),f=function(){var e=Object(c.useContext)(K),t=e.auth,a=e.firebase,n=function(){var e=Object(O.a)(d.a.mark((function e(){var c,n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new a.auth.GoogleAuthProvider,e.next=3,t.signInWithPopup(c);case 3:n=e.sent,s=n.user,console.log(s);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"login",children:Object(x.jsx)(h.a,{onClick:n,color:"primary",variant:"contained",children:"Login with Google"})})},p=a(43),m=a(132),v=(a(120),a(168)),g=a(169),N=a(163),C=a(162),y=(a(121),function(e){var t=e.size,a=void 0===t?40:t,c=e.className,n=void 0===c?"":c;return Object(x.jsx)("div",{className:"loading ".concat(n),children:Object(x.jsx)(C.a,{size:a})})}),w=a(94),S=a.n(w);a(122);var A=function(e){var t=e.isLoading,a=Object(c.useState)(!1),n=Object(i.a)(a,2),s=n[0],r=(n[1],Object(c.useState)("")),o=Object(i.a)(r,2),j=o[0],u=o[1],l=Object(c.useContext)(K),b=l.auth,h=l.firestore,f=l.firebase,m=Object(p.a)(b),C=Object(i.a)(m,1)[0],w=function(){var e=Object(O.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.collection("messages").add({uid:C.uid,displayName:C.displayName,photoURL:C.photoURL,text:j,createdAt:f.firestore.FieldValue.serverTimestamp()}),u("");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"send-bar",children:Object(x.jsx)(v.a,{disabled:t,fullWidth:!0,onChange:function(e){u(e.target.value)},size:"small",label:"Send",variant:"outlined",multiline:!0,rows:3,rowsMax:3,value:j,InputProps:{endAdornment:Object(x.jsx)(g.a,{position:"end",children:s?Object(x.jsx)(y,{size:20}):Object(x.jsx)(N.a,{disabled:t,onClick:w,children:Object(x.jsx)(S.a,{color:"primary"})})})}})})},L=a(164),k=a(165),I=a(95),z=a.n(I),P=(a(125),function(e){var t=e.name,a=Object(c.useContext)(K).auth;return Object(x.jsx)("div",{className:"info-bar",children:Object(x.jsx)(L.a,{position:"relative",color:"inherit",children:Object(x.jsxs)(k.a,{variant:"dense",children:[Object(x.jsx)(N.a,{color:"inherit","aria-label":"open drawer",onClick:function(){a.signOut()},edge:"start",children:Object(x.jsx)(z.a,{})}),Object(x.jsx)("h3",{children:t})]})})})}),U=(a(126),a(170)),B=function(e){var t=e.text,a=e.isSenderUser,c=e.name,n=e.photo,s=a?"end":"start";return Object(x.jsxs)("div",{className:"message-wrapper ".concat(s),children:[Object(x.jsx)(U.a,{src:n}),Object(x.jsxs)("div",{className:"message ".concat(s),children:[!a&&Object(x.jsx)("h3",{children:c}),Object(x.jsx)("p",{children:t})]})]})},R=(a(127),function(e){var t=e.isLoading,a=e.messages,n=Object(c.useRef)(),s=Object(c.useContext)(K).auth,r=Object(p.a)(s),o=Object(i.a)(r,1)[0];return Object(c.useEffect)((function(){var e;(e=n).current.scrollTop=e.current.scrollHeight}),[t]),Object(x.jsx)("div",{className:"messages",ref:n,children:t?Object(x.jsx)(y,{}):function(e){var t=e.map((function(e,t){return Object(x.jsx)(B,{isSenderUser:o.uid===e.uid,text:e.text,name:e.displayName,photo:e.photoURL},"".concat(t,"-message"))}));return o?Object(x.jsx)("ul",{className:"messages-list",children:t}):null}(a)})}),T=a(96);var D=function(){var e=Object(c.useContext)(K).firestore,t=Object(c.useContext)(K).auth,a=Object(p.a)(t),n=Object(i.a)(a,1)[0],s=Object(T.a)(e.collection("messages").orderBy("createdAt")),r=Object(i.a)(s,2),o=r[0],j=r[1];return Object(x.jsxs)(m.a,{elevation:3,className:"chat-layout",children:[Object(x.jsx)(P,{name:n.displayName}),Object(x.jsx)(R,{isLoading:j,messages:o}),Object(x.jsx)(A,{isLoading:j})]})},E=function(){var e=Object(c.useContext)(K).auth,t=Object(p.a)(e),a=Object(i.a)(t,1)[0];return Object(x.jsx)(l.a,{children:a?Object(x.jsxs)(u.d,{children:[Object(x.jsx)(u.b,{path:"/chat",component:D,exact:!0}),Object(x.jsx)(u.a,{to:"/chat"})]}):Object(x.jsxs)(u.d,{children:[Object(x.jsx)(u.b,{path:"/login",component:f,exact:!0}),Object(x.jsx)(u.a,{to:"/login"})]})})};var G=function(){var e=Object(c.useContext)(K).auth,t=Object(p.a)(e),a=Object(i.a)(t,3),n=(a[0],a[1]);return a[2],Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(o.a,{}),Object(x.jsx)(j.a,{maxWidth:"sm",children:n?Object(x.jsx)(y,{className:"init-loading"}):Object(x.jsx)(E,{})})]})},M=a(62);M.a.initializeApp({apiKey:"AIzaSyA4DPgby7bXx-E2KfmDTPvizN38cSMCLhA",authDomain:"fir-react-chat-9f361.firebaseapp.com",projectId:"fir-react-chat-9f361",storageBucket:"fir-react-chat-9f361.appspot.com",messagingSenderId:"665637728055",appId:"1:665637728055:web:29eda696f4ca2a2a69b4b2",measurementId:"G-T67S9ZXNQB"});var W=M.a.auth(),J=M.a.firestore(),K=Object(c.createContext)(null);r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(K.Provider,{value:{auth:W,firebase:M.a,firestore:J},children:Object(x.jsx)(G,{})})}),document.getElementById("root"))}},[[130,1,2]]]);
