(this["webpackJsonpEcom-dashboard"]=this["webpackJsonpEcom-dashboard"]||[]).push([[76],{1974:function(e,a,t){"use strict";t.r(a);var s=t(0),c=(t(465),t(467)),n=t(468),r=t(16),i=t(595),l=t(490),j=t.n(l),d=t(1001),o=t(498),b=t.n(o),m=t(469),p=t(474),u=t(472),h=t(6),x=t(32),O=(t(1),t(122),t(479)),g=t(83),f=t.n(g),v=t(497),N=(t(484),t(939)),C=t(995),k=t(1025),w=t(514),z=t(531),y=t(509),P=t(489),D=t(940),S=t(482),W=t(964),A=t(965),L=t(781),E=t(966),T=t(462),q=(t(481),function(e){var a=e.open,t=e.handleModal,c=Object(s.useState)(new Date),n=Object(r.a)(c,2),i=(n[0],n[1],Object(v.c)()),l=i.register,j=(i.errors,i.handleSubmit),d=Object(h.jsx)(N.a,{className:"cursor-pointer",size:15,onClick:t});return Object(h.jsxs)(w.a,{isOpen:a,toggle:t,className:"sidebar-sm",modalClassName:"modal-slide-in",contentClassName:"pt-0",children:[Object(h.jsx)(z.a,{className:"mb-3",toggle:t,close:d,tag:"div",children:Object(h.jsx)("h5",{className:"modal-title",children:"Nouveau Produit"})}),Object(h.jsx)(y.a,{className:"flex-grow-1",children:Object(h.jsxs)(P.a,{onSubmit:j((function(e){console.log(e),f.a.post("http://68.183.222.133:5000/products/new",e,{headers:{Authorization:JSON.parse(Object(O.c)())}}).then((function(e){t()})).catch((function(e){return console.log(e)}))})),children:[Object(h.jsxs)(D.a,{children:[Object(h.jsx)(S.a,{for:"label",children:"Produit"}),Object(h.jsxs)(W.a,{children:[Object(h.jsx)(A.a,{addonType:"prepend",children:Object(h.jsx)(L.a,{children:Object(h.jsx)(C.a,{size:15})})}),Object(h.jsx)(E.a,{id:"label",placeholder:"Produit",required:!0,name:"label",innerRef:l({required:!0,validate:function(e){return""!==e}})})]})]}),Object(h.jsxs)(D.a,{children:[Object(h.jsx)(S.a,{for:"descp",children:"Description"}),Object(h.jsxs)(W.a,{children:[Object(h.jsx)(A.a,{addonType:"prepend",children:Object(h.jsx)(L.a,{children:Object(h.jsx)(C.a,{size:15})})}),Object(h.jsx)(E.a,{id:"descp",placeholder:"Description",required:!0,name:"descp",innerRef:l({required:!0,validate:function(e){return""!==e}})})]})]}),Object(h.jsxs)(D.a,{className:"mb-4",children:[Object(h.jsx)(S.a,{for:"price",children:"Prix"}),Object(h.jsxs)(W.a,{children:[Object(h.jsx)(A.a,{addonType:"prepend",children:Object(h.jsx)(L.a,{children:Object(h.jsx)(k.a,{size:15})})}),Object(h.jsx)(E.a,{type:"number",id:"price",placeholder:"Prix",required:!0,name:"price",innerRef:l({required:!0,validate:function(e){return""!==e}})})]})]}),Object(h.jsx)(T.a,{className:"mr-1",color:"primary",children:"Submit"}),Object(h.jsx)(T.a,{color:"secondary",onClick:t,outline:!0,children:"Cancel"})]})})]})}),R=t(968),J=function(){var e=Object(s.useState)(!1),a=Object(r.a)(e,2),t=a[0],c=a[1],n=Object(s.useState)(!1),l=Object(r.a)(n,2),o=l[0],g=l[1],v=Object(s.useState)(0),N=Object(r.a)(v,2),C=N[0],k=N[1],w=Object(s.useState)(""),z=Object(r.a)(w,2),y=z[0],P=(z[1],Object(s.useState)([])),D=Object(r.a)(P,2),S=D[0],W=(D[1],function(){return c(!t)});Object(s.useEffect)((function(){f.a.get("http://68.183.222.133:5000/products/",{headers:{Authorization:JSON.parse(Object(O.c)())}}).then((function(e){console.log(e.data),g(e.data)})).catch((function(e){return console.log(e)}))}),[!t]);return Object(h.jsxs)(s.Fragment,{children:[Object(h.jsxs)(m.a,{children:[Object(h.jsxs)(p.a,{className:"flex-md-row flex-column align-md-items-center align-items-start border-bottom",children:[Object(h.jsx)(u.a,{tag:"h4",children:"Liste des produits"}),Object(h.jsx)("div",{className:"d-flex mt-md-0 mt-1",children:Object(h.jsxs)(T.a,{className:"ml-2",color:"primary",onClick:W,children:[Object(h.jsx)(R.a,{size:15}),Object(h.jsx)("span",{className:"align-middle ml-50",children:"Nouveau Produit"})]})})]}),Object(h.jsx)(b.a,{noHeader:!0,pagination:!0,columns:i.b,paginationPerPage:7,className:"react-dataTable",sortIcon:Object(h.jsx)(d.a,{size:10}),paginationDefaultPage:C+1,paginationComponent:function(){var e;return Object(h.jsx)(j.a,(e={previousLabel:"",nextLabel:"",forcePage:C,onPageChange:function(e){return function(e){k(e.selected)}(e)},pageCount:y.length?S.length/7:o.length/7||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(x.a)(e,"breakClassName","page-item"),Object(x.a)(e,"breakLinkClassName","page-link"),Object(x.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:y.length?S:o})]}),Object(h.jsx)(q,{open:t,handleModal:W})]})};t(1853),t(601),t(475),t(503),a.default=function(){return Object(h.jsx)(s.Fragment,{children:Object(h.jsx)(c.a,{children:Object(h.jsx)(n.a,{sm:"12",children:Object(h.jsx)(J,{})})})})}},465:function(e,a,t){"use strict";var s=t(464),c=t(1041),n=t(999),r=t(1063),i=t(1058),l=t(996),j=t(476),d=t(477),o=t(478),b=t(1271),m=t(954),p=t(963),u=t(6);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent,h=e.breadCrumbParent2,x=e.breadCrumbParent3,O=e.breadCrumbActive;return Object(u.jsxs)("div",{className:"content-header row",children:[Object(u.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(u.jsx)("div",{className:"row breadcrumbs-top",children:Object(u.jsxs)("div",{className:"col-12",children:[a?Object(u.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(u.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(d.a,{tag:"li",children:Object(u.jsx)(s.b,{to:"/",children:"Home"})}),Object(u.jsx)(d.a,{tag:"li",className:"text-primary",children:t}),h?Object(u.jsx)(d.a,{tag:"li",className:"text-primary",children:h}):"",x?Object(u.jsx)(d.a,{tag:"li",className:"text-primary",children:x}):"",Object(u.jsx)(d.a,{tag:"li",active:!0,children:O})]})})]})})}),Object(u.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(u.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(b.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(u.jsx)(c.a,{size:14})}),Object(u.jsxs)(m.a,{tag:"ul",right:!0,children:[Object(u.jsxs)(p.a,{tag:s.b,to:"/apps/chat",children:[Object(u.jsx)(n.a,{className:"mr-1",size:14}),Object(u.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(u.jsxs)(p.a,{tag:s.b,to:"/apps/chat",children:[Object(u.jsx)(r.a,{className:"mr-1",size:14}),Object(u.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(u.jsxs)(p.a,{tag:s.b,to:"/apps/email",children:[Object(u.jsx)(i.a,{className:"mr-1",size:14}),Object(u.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(u.jsxs)(p.a,{tag:s.b,to:"/apps/calendar",children:[Object(u.jsx)(l.a,{className:"mr-1",size:14}),Object(u.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},481:function(e,a,t){},496:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/avatar-s-20.40d668f5.jpg"},503:function(e,a,t){},542:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/avatar-s-16.1850b51c.jpg"},576:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/avatar-s-21.d383013d.jpg"},577:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/avatar-s-23.c1d416e5.jpg"},593:function(e,a,t){var s={"./avatar-s-1.jpg":34,"./avatar-s-10.jpg":88,"./avatar-s-11.jpg":86,"./avatar-s-12.jpg":229,"./avatar-s-13.jpg":135,"./avatar-s-14.jpg":230,"./avatar-s-15.jpg":231,"./avatar-s-16.jpg":542,"./avatar-s-17.jpg":629,"./avatar-s-18.jpg":236,"./avatar-s-19.jpg":630,"./avatar-s-2.jpg":47,"./avatar-s-20.jpg":496,"./avatar-s-21.jpg":576,"./avatar-s-22.jpg":237,"./avatar-s-23.jpg":577,"./avatar-s-24.jpg":631,"./avatar-s-25.jpg":232,"./avatar-s-26.jpg":235,"./avatar-s-3.jpg":23,"./avatar-s-4.jpg":61,"./avatar-s-5.jpg":46,"./avatar-s-6.jpg":84,"./avatar-s-7.jpg":60,"./avatar-s-8.jpg":35,"./avatar-s-9.jpg":19};function c(e){var a=n(e);return t(a)}function n(e){if(!t.o(s,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return s[e]}c.keys=function(){return Object.keys(s)},c.resolve=n,e.exports=c,c.id=593},595:function(e,a,t){"use strict";t.d(a,"c",(function(){return s})),t.d(a,"a",(function(){return f})),t.d(a,"b",(function(){return v})),t.d(a,"e",(function(){return N}));var s,c=t(471),n=t(83),r=t.n(n),i=t(1068),l=t(1035),j=t(982),d=t(1099),o=t(1030),b=t(950),m=t(1271),p=t(954),u=t(963),h=t(971),x=t(479),O=t(6),g={1:{title:"Current",color:"light-primary"},2:{title:"Professional",color:"light-success"},3:{title:"Rejected",color:"light-danger"},4:{title:"Resigned",color:"light-warning"},5:{title:"Applied",color:"light-info"}};r.a.get("http://68.183.222.133:5000/products/",{headers:{Authorization:JSON.parse(Object(x.c)())}}).then((function(e){console.log(e.data),s=e.data})).catch((function(e){return console.log(e)}));var f=[{name:"Name",selector:"full_name",sortable:!0,minWidth:"225px"},{name:"Email",selector:"email",sortable:!0,minWidth:"310px"},{name:"Position",selector:"post",sortable:!0,minWidth:"250px"},{name:"Age",selector:"age",sortable:!0,minWidth:"100px"},{name:"Salary",selector:"salary",sortable:!0,minWidth:"175px"}],v=[{name:"Produit",selector:"produit",sortable:!0,minWidth:"250px",cell:function(e){return Object(O.jsxs)("div",{className:"d-flex align-items-center",children:[e.avatar?Object(O.jsx)(c.a,{img:t(593)("./avatar-s-".concat(e.avatar)).default}):Object(O.jsx)(c.a,{color:"light-primary",content:e.label,initials:!0}),Object(O.jsx)("div",{className:"user-info text-truncate ml-1",children:Object(O.jsx)("span",{className:"d-block font-weight-bold text-truncate",children:e.label})})]})}},{name:"Description",selector:"descp",sortable:!0,minWidth:"250px"},{name:"Date",selector:"createdAt",sortable:!0,minWidth:"150px",cell:function(e){return Object(x.a)(e.createdAt)}},{name:"Prix (MAD)",selector:"price",sortable:!0,minWidth:"100px"},{name:"Actions",allowOverflow:!0,cell:function(e){return Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsxs)(b.a,{children:[Object(O.jsx)(m.a,{className:"pr-1",tag:"span",children:Object(O.jsx)(i.a,{size:15})}),Object(O.jsxs)(p.a,{right:!0,children:[Object(O.jsxs)(u.a,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(O.jsx)(l.a,{size:15}),Object(O.jsx)("span",{className:"align-middle ml-50",children:"Details"})]}),Object(O.jsxs)(u.a,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(O.jsx)(j.a,{size:15}),Object(O.jsx)("span",{className:"align-middle ml-50",children:"Archive"})]}),Object(O.jsxs)(u.a,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(O.jsx)(d.a,{size:15}),Object(O.jsx)("span",{className:"align-middle ml-50",children:"Delete"})]})]})]}),Object(O.jsx)(o.a,{size:15})]})}}],N=[{name:"Name",selector:"full_name",sortable:!0,minWidth:"200px"},{name:"Position",selector:"post",sortable:!0,minWidth:"250px"},{name:"Email",selector:"email",sortable:!0,minWidth:"250px"},{name:"Date",selector:"start_date",sortable:!0,minWidth:"150px"},{name:"Salary",selector:"salary",sortable:!0,minWidth:"150px"},{name:"Status",selector:"status",sortable:!0,minWidth:"150px",cell:function(e){return Object(O.jsx)(h.a,{color:g[e.status].color,pill:!0,children:g[e.status].title})}},{name:"Actions",allowOverflow:!0,cell:function(e){return Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsxs)(b.a,{children:[Object(O.jsx)(m.a,{className:"pr-1",tag:"span",children:Object(O.jsx)(i.a,{size:15})}),Object(O.jsxs)(p.a,{right:!0,children:[Object(O.jsxs)(u.a,{children:[Object(O.jsx)(l.a,{size:15}),Object(O.jsx)("span",{className:"align-middle ml-50",children:"Details"})]}),Object(O.jsxs)(u.a,{children:[Object(O.jsx)(j.a,{size:15}),Object(O.jsx)("span",{className:"align-middle ml-50",children:"Archive"})]}),Object(O.jsxs)(u.a,{children:[Object(O.jsx)(d.a,{size:15}),Object(O.jsx)("span",{className:"align-middle ml-50",children:"Delete"})]})]})]}),Object(O.jsx)(o.a,{size:15})]})}}];a.d=function(e){var a=e.data;return Object(O.jsxs)("div",{className:"expandable-content p-2",children:[Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{className:"font-weight-bold",children:"City:"})," ",a.city]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{className:"font-weight-bold",children:"Experience:"})," ",a.experience]}),Object(O.jsxs)("p",{className:"m-0",children:[Object(O.jsx)("span",{className:"font-weight-bold",children:"Post:"})," ",a.post]})]})}},629:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/avatar-s-17.ac876056.jpg"},630:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/avatar-s-19.f39063a2.jpg"},631:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/avatar-s-24.a649af23.jpg"}}]);
//# sourceMappingURL=76.a010cab2.chunk.js.map