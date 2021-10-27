(this.webpackJsonpcli=this.webpackJsonpcli||[]).push([[1],{110:function(e,t,a){"use strict";var r=a(2),i=a(7),n=a(36),s=a.n(n),l=a(0),o=a.n(l),c=(a(52),a(8)),u=a.n(c),d=["as","className","type","tooltip"],f={type:u.a.string,tooltip:u.a.bool,as:u.a.elementType},m=o.a.forwardRef((function(e,t){var a=e.as,n=void 0===a?"div":a,l=e.className,c=e.type,u=void 0===c?"valid":c,f=e.tooltip,m=void 0!==f&&f,b=Object(i.a)(e,d);return o.a.createElement(n,Object(r.a)({},b,{ref:t,className:s()(l,u+"-"+(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=f;var b=m,v=o.a.createContext({controlId:void 0}),p=a(37),j=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],O=o.a.forwardRef((function(e,t){var a=e.id,n=e.bsPrefix,c=e.bsCustomPrefix,u=e.className,d=e.type,f=void 0===d?"checkbox":d,m=e.isValid,b=void 0!==m&&m,O=e.isInvalid,h=void 0!==O&&O,x=e.isStatic,y=e.as,w=void 0===y?"input":y,N=Object(i.a)(e,j),P=Object(l.useContext)(v),k=P.controlId,I=P.custom?[c,"custom-control-input"]:[n,"form-check-input"],g=I[0],E=I[1];return n=Object(p.a)(g,E),o.a.createElement(w,Object(r.a)({},N,{ref:t,type:f,id:a||k,className:s()(u,n,b&&"is-valid",h&&"is-invalid",x&&"position-static")}))}));O.displayName="FormCheckInput";var h=O,x=["bsPrefix","bsCustomPrefix","className","htmlFor"],y=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.bsCustomPrefix,c=e.className,u=e.htmlFor,d=Object(i.a)(e,x),f=Object(l.useContext)(v),m=f.controlId,b=f.custom?[n,"custom-control-label"]:[a,"form-check-label"],j=b[0],O=b[1];return a=Object(p.a)(j,O),o.a.createElement("label",Object(r.a)({},d,{ref:t,htmlFor:u||m,className:s()(c,a)}))}));y.displayName="FormCheckLabel";var w=y,N=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],P=o.a.forwardRef((function(e,t){var a=e.id,n=e.bsPrefix,c=e.bsCustomPrefix,u=e.inline,d=void 0!==u&&u,f=e.disabled,m=void 0!==f&&f,j=e.isValid,O=void 0!==j&&j,x=e.isInvalid,y=void 0!==x&&x,P=e.feedbackTooltip,k=void 0!==P&&P,I=e.feedback,g=e.className,E=e.style,C=e.title,F=void 0===C?"":C,R=e.type,L=void 0===R?"checkbox":R,S=e.label,V=e.children,z=e.custom,T=e.as,B=void 0===T?"input":T,M=Object(i.a)(e,N),A="switch"===L||z,J=A?[c,"custom-control"]:[n,"form-check"],_=J[0],G=J[1];n=Object(p.a)(_,G);var Q=Object(l.useContext)(v).controlId,q=Object(l.useMemo)((function(){return{controlId:a||Q,custom:A}}),[Q,A,a]),H=A||null!=S&&!1!==S&&!V,D=o.a.createElement(h,Object(r.a)({},M,{type:"switch"===L?"checkbox":L,ref:t,isValid:O,isInvalid:y,isStatic:!H,disabled:m,as:B}));return o.a.createElement(v.Provider,{value:q},o.a.createElement("div",{style:E,className:s()(g,n,A&&"custom-"+L,d&&n+"-inline")},V||o.a.createElement(o.a.Fragment,null,D,H&&o.a.createElement(w,{title:F},S),(O||y)&&o.a.createElement(b,{type:O?"valid":"invalid",tooltip:k},I))))}));P.displayName="FormCheck",P.Input=h,P.Label=w;var k=P,I=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],g=o.a.forwardRef((function(e,t){var a=e.id,n=e.bsPrefix,c=e.bsCustomPrefix,u=e.className,d=e.isValid,f=e.isInvalid,m=e.lang,b=e.as,j=void 0===b?"input":b,O=Object(i.a)(e,I),h=Object(l.useContext)(v),x=h.controlId,y=h.custom?[c,"custom-file-input"]:[n,"form-control-file"],w=y[0],N=y[1];return n=Object(p.a)(w,N),o.a.createElement(j,Object(r.a)({},O,{ref:t,id:a||x,type:"file",lang:m,className:s()(u,n,d&&"is-valid",f&&"is-invalid")}))}));g.displayName="FormFileInput";var E=g,C=["bsPrefix","bsCustomPrefix","className","htmlFor"],F=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.bsCustomPrefix,c=e.className,u=e.htmlFor,d=Object(i.a)(e,C),f=Object(l.useContext)(v),m=f.controlId,b=f.custom?[n,"custom-file-label"]:[a,"form-file-label"],j=b[0],O=b[1];return a=Object(p.a)(j,O),o.a.createElement("label",Object(r.a)({},d,{ref:t,htmlFor:u||m,className:s()(c,a),"data-browse":d["data-browse"]}))}));F.displayName="FormFileLabel";var R=F,L=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],S=o.a.forwardRef((function(e,t){var a=e.id,n=e.bsPrefix,c=e.bsCustomPrefix,u=e.disabled,d=void 0!==u&&u,f=e.isValid,m=void 0!==f&&f,j=e.isInvalid,O=void 0!==j&&j,h=e.feedbackTooltip,x=void 0!==h&&h,y=e.feedback,w=e.className,N=e.style,P=e.label,k=e.children,I=e.custom,g=e.lang,C=e["data-browse"],F=e.as,S=void 0===F?"div":F,V=e.inputAs,z=void 0===V?"input":V,T=Object(i.a)(e,L),B=I?[c,"custom"]:[n,"form-file"],M=B[0],A=B[1];n=Object(p.a)(M,A);var J=Object(l.useContext)(v).controlId,_=Object(l.useMemo)((function(){return{controlId:a||J,custom:I}}),[J,I,a]),G=null!=P&&!1!==P&&!k,Q=o.a.createElement(E,Object(r.a)({},T,{ref:t,isValid:m,isInvalid:O,disabled:d,as:z,lang:g}));return o.a.createElement(v.Provider,{value:_},o.a.createElement(S,{style:N,className:s()(w,n,I&&"custom-file")},k||o.a.createElement(o.a.Fragment,null,I?o.a.createElement(o.a.Fragment,null,Q,G&&o.a.createElement(R,{"data-browse":C},P)):o.a.createElement(o.a.Fragment,null,G&&o.a.createElement(R,null,P),Q),(m||O)&&o.a.createElement(b,{type:m?"valid":"invalid",tooltip:x},y))))}));S.displayName="FormFile",S.Input=E,S.Label=R;var V=S,z=(a(56),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),T=o.a.forwardRef((function(e,t){var a,n,c=e.bsPrefix,u=e.bsCustomPrefix,d=e.type,f=e.size,m=e.htmlSize,b=e.id,j=e.className,O=e.isValid,h=void 0!==O&&O,x=e.isInvalid,y=void 0!==x&&x,w=e.plaintext,N=e.readOnly,P=e.custom,k=e.as,I=void 0===k?"input":k,g=Object(i.a)(e,z),E=Object(l.useContext)(v).controlId,C=P?[u,"custom"]:[c,"form-control"],F=C[0],R=C[1];if(c=Object(p.a)(F,R),w)(n={})[c+"-plaintext"]=!0,a=n;else if("file"===d){var L;(L={})[c+"-file"]=!0,a=L}else if("range"===d){var S;(S={})[c+"-range"]=!0,a=S}else if("select"===I&&P){var V;(V={})[c+"-select"]=!0,V[c+"-select-"+f]=f,a=V}else{var T;(T={})[c]=!0,T[c+"-"+f]=f,a=T}return o.a.createElement(I,Object(r.a)({},g,{type:d,size:m,ref:t,readOnly:N,id:b||E,className:s()(j,a,h&&"is-valid",y&&"is-invalid")}))}));T.displayName="FormControl";var B=Object.assign(T,{Feedback:b}),M=["bsPrefix","className","children","controlId","as"],A=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.children,u=e.controlId,d=e.as,f=void 0===d?"div":d,m=Object(i.a)(e,M);a=Object(p.a)(a,"form-group");var b=Object(l.useMemo)((function(){return{controlId:u}}),[u]);return o.a.createElement(v.Provider,{value:b},o.a.createElement(f,Object(r.a)({},m,{ref:t,className:s()(n,a)}),c))}));A.displayName="FormGroup";var J=A,_=a(75),G=["as","bsPrefix","column","srOnly","className","htmlFor"],Q=o.a.forwardRef((function(e,t){var a=e.as,n=void 0===a?"label":a,c=e.bsPrefix,u=e.column,d=e.srOnly,f=e.className,m=e.htmlFor,b=Object(i.a)(e,G),j=Object(l.useContext)(v).controlId;c=Object(p.a)(c,"form-label");var O="col-form-label";"string"===typeof u&&(O=O+" "+O+"-"+u);var h=s()(f,c,d&&"sr-only",u&&O);return m=m||j,u?o.a.createElement(_.a,Object(r.a)({ref:t,as:"label",className:h,htmlFor:m},b)):o.a.createElement(n,Object(r.a)({ref:t,className:h,htmlFor:m},b))}));Q.displayName="FormLabel",Q.defaultProps={column:!1,srOnly:!1};var q=Q,H=["bsPrefix","className","as","muted"],D=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,l=e.as,c=void 0===l?"small":l,u=e.muted,d=Object(i.a)(e,H);return a=Object(p.a)(a,"form-text"),o.a.createElement(c,Object(r.a)({},d,{ref:t,className:s()(n,a,u&&"text-muted")}))}));D.displayName="FormText";var K=D,U=o.a.forwardRef((function(e,t){return o.a.createElement(k,Object(r.a)({},e,{ref:t,type:"switch"}))}));U.displayName="Switch",U.Input=k.Input,U.Label=k.Label;var W=U,X=a(54),Y=["bsPrefix","inline","className","validated","as"],Z=Object(X.a)("form-row"),$=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.inline,l=e.className,c=e.validated,u=e.as,d=void 0===u?"form":u,f=Object(i.a)(e,Y);return a=Object(p.a)(a,"form"),o.a.createElement(d,Object(r.a)({},f,{ref:t,className:s()(l,c&&"was-validated",n&&a+"-inline")}))}));$.displayName="Form",$.defaultProps={inline:!1},$.Row=Z,$.Group=J,$.Control=B,$.Check=k,$.File=V,$.Switch=W,$.Label=q,$.Text=K;t.a=$},40:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"c",(function(){return f})),a.d(t,"b",(function(){return m}));var r=a(45),i=a.n(r),n=a(46),s=a(47),l=a.n(s);function o(e,t,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"allowed";return new Promise((function(s){var o={method:t,url:"https://service-forum.herokuapp.com/"+e,data:JSON.stringify(a),headers:{"Content-Type":"application/json",Authorization:d(r)}};l()(o).then((function(e){return c(e,s)})).catch(function(){var e=Object(n.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.response||401!==t.response.status){e.next=4;break}return a={status:"login",data:null},console.log(a),e.abrupt("return",s(a));case 4:s({status:"error",data:t});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}function c(e,t){return u.apply(this,arguments)}function u(){return(u=Object(n.a)(i.a.mark((function e(t,a){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),!(t.status<200||t.status>=300)){e.next=4;break}return r={status:"error",data:t.data},e.abrupt("return",a(r));case 4:return n={status:"ok",data:t.data},e.abrupt("return",a(n));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return"Bearer "+localStorage.getItem("token_"+e)}function f(e){return!!localStorage.getItem("token_"+e)}function m(e,t){localStorage.setItem("token_"+e,t)}},41:function(e,t,a){"use strict";var r=a(53),i=a(0),n=a.n(i),s=(a(48),a(49),a(50),a(113)),l=a(13),o=a(14),c=a(16),u=a(15),d=a(112),f=a(108),m=a(111),b=a(17),v=(a(42),a(3)),p=function e(t,a){Object(l.a)(this,e),this.text="",this.link="",this.text=t,this.link=a},j=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).state={items:[]},r}return Object(o.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsx)(d.a,{bg:"light",variant:"light",fixed:"top",children:Object(v.jsxs)(f.a,{children:[Object(v.jsx)(d.a.Brand,{children:"QR"}),Object(v.jsx)(m.a,{className:"mr-auto",children:Object(v.jsx)(b.a,{children:this.props.items.map((function(e){return Object(v.jsx)(b.b,{to:e.link,children:e.text})}))})})]})})})}}]),a}(n.a.Component),O=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).state={role:""},r}return Object(o.a)(a,[{key:"render",value:function(){var e=[];switch(this.props.role){case"visitor":e=this.visitorMenuItems();break;case"allowed":e=this.userMenuItems()}return Object(v.jsx)(j,{items:e})}},{key:"visitorMenuItems",value:function(){return[new p("Home","/"),new p("Sign In","/signin")]}},{key:"userMenuItems",value:function(){return[new p("Quotes","/quotes")]}}]),a}(n.a.Component),h={position:"fixed",left:0,bottom:0,width:"100%",zIndex:9999,margin:0,textAlign:"center"};t.a=function(e){var t=Object(i.useState)(!1),a=Object(r.a)(t,2),n=a[0],l=a[1];Object(i.useEffect)((function(){var e=function(){window.isOffline=!1,l(!1)},t=function(){window.isOffline=!0,l(!0)};return window.addEventListener("online",e),window.addEventListener("offline",t),function(){window.removeEventListener("online",e),window.removeEventListener("offline",t)}})),Object(i.useEffect)((function(){window.isOffline&&l(!0)}),[]);var o,c,u=(o=e.isLoggedIn,c=e.showBackButton,Object(v.jsx)(O,{role:o?"allowed":"visitor",showBackButton:c}));return Object(v.jsxs)("div",{children:[u,n?Object(v.jsx)(s.a,{variant:"warning",style:h,children:"Offline mode"}):null,Object(v.jsx)("br",{}),e.children]})}},42:function(e,t,a){},57:function(e,t,a){"use strict";function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return r}))},75:function(e,t,a){"use strict";var r=a(2),i=a(7),n=a(36),s=a.n(n),l=a(0),o=a.n(l),c=a(37),u=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],f=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,l=e.as,f=void 0===l?"div":l,m=Object(i.a)(e,u),b=Object(c.a)(a,"col"),v=[],p=[];return d.forEach((function(e){var t,a,r,i=m[e];if(delete m[e],"object"===typeof i&&null!=i){var n=i.span;t=void 0===n||n,a=i.offset,r=i.order}else t=i;var s="xs"!==e?"-"+e:"";t&&v.push(!0===t?""+b+s:""+b+s+"-"+t),null!=r&&p.push("order"+s+"-"+r),null!=a&&p.push("offset"+s+"-"+a)})),v.length||v.push(b),o.a.createElement(f,Object(r.a)({},m,{ref:t,className:s.a.apply(void 0,[n].concat(v,p))}))}));f.displayName="Col",t.a=f},76:function(e,t,a){"use strict";var r=a(2),i=a(7),n=a(36),s=a.n(n),l=a(0),o=a.n(l),c=a(37),u=a(44),d=["bsPrefix","variant","size","active","className","block","type","as"],f=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.variant,l=e.size,f=e.active,m=e.className,b=e.block,v=e.type,p=e.as,j=Object(i.a)(e,d),O=Object(c.a)(a,"btn"),h=s()(m,O,f&&"active",n&&O+"-"+n,b&&O+"-block",l&&O+"-"+l);if(j.href)return o.a.createElement(u.a,Object(r.a)({},j,{as:p,ref:t,className:s()(h,j.disabled&&"disabled")}));t&&(j.ref=t),v?j.type=v:p||(j.type="button");var x=p||"button";return o.a.createElement(x,Object(r.a)({},j,{className:h}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=f}}]);
//# sourceMappingURL=1.cc580111.chunk.js.map