(this["webpackJsonpEcom-dashboard"]=this["webpackJsonpEcom-dashboard"]||[]).push([[134],{1937:function(e,t,a){"use strict";a.r(t);var n,c=a(16),s=a(0),l=a(479),r=a(464),i=a(471),o=a(521),d=a(539),j=a(83),m=a.n(j),u=function(e){return function(){var t=Object(d.a)(Object(o.a)().mark((function t(a){return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("http://68.183.222.133:5000/orders/",{headers:{Authorization:JSON.parse(Object(l.c)())},params:e}).then((function(t){console.log("-----"),console.log(t.data),a({type:"GET_DATA",data:t.data.orders,totalPages:t.data.total,p:e})})).catch((function(e){500===e.response.status&&(localStorage.removeItem("userData"),localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=(a(136),a(971)),h=a(1118),x=a(1083),p=a(998),g=a(1082),O=a(983),f=a(1047),v=a(1075),N=a(1030),C=a(6),S=(x.a,p.a,g.a,O.a,f.a,v.a,{"Livr\xe9e":{title:"Livr\xe9e",color:"light-primary"},"Confirm\xe9e":{title:"Confirm\xe9e",color:"light-success"},"Annul\xe9e":{title:"Annul\xe9e",color:"light-danger"},"Refus\xe9e":{title:"Refus\xe9e",color:"light-warning"},"SansR\xe9ponse":{title:"Sans r\xe9ponse",color:"light-info"},Injoignable:{title:"Injoignable",color:"light-danger"},"Report\xe9e":{title:"Report\xe9e",color:"light-danger"}}),w=function(e){var t=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.avatar?Object(C.jsx)(i.a,{className:"mr-50",img:e.avatar,width:"32",height:"32"}):Object(C.jsx)(i.a,{color:t,className:"mr-50",content:e.clientId?e.clientId.fullname:"John loe",initials:!0})},y=[{name:"Client",minWidth:"200px",selector:"client",sortable:!0,cell:function(e){var t=e.clientId?e.clientId.fullname:"John Doe",a=e.clientId?e.clientId.phone:"johnDoe@email.com";return Object(C.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[w(e),Object(C.jsxs)("div",{className:"d-flex flex-column",children:[Object(C.jsx)("h6",{className:"user-name text-truncate mb-0",children:t}),Object(C.jsx)("small",{className:"text-truncate text-muted mb-0",children:a})]})]})}},{name:"Adresse",minWidth:"330px",selector:"adr",sortable:!0,cell:function(e){var t=e.clientId?e.clientId.adr:"@adresse",a=e.clientId?e.clientId.city:"ville";return Object(C.jsx)("div",{className:"d-flex justify-content-left align-items-center",children:Object(C.jsxs)("div",{className:"d-flex flex-column",children:[Object(C.jsx)("h6",{className:"user-name text-truncate mb-0",children:t}),Object(C.jsx)("small",{className:"text-truncate text-muted mb-0",children:a})]})})}},{name:"Status",minWidth:"102px",selector:"invoiceStatus",sortable:!0,cell:function(e){return Object(C.jsx)(b.a,{color:S[e.status].color,pill:!0,children:S[e.status].title})}},{name:"Date",selector:"dueDate",sortable:!0,minWidth:"220px",cell:function(e){return Object(l.a)(e.updatedAt)}},{name:"Action",minWidth:"110px",selector:"",sortable:!0,cell:function(e){return Object(C.jsxs)("div",{className:"column-action d-flex align-items-center",children:[Object(C.jsx)(r.b,{to:"/orders/edit/".concat(e._id),id:"pw-tooltip2-".concat(e._id),children:Object(C.jsx)(N.a,{size:17,className:"mx-1"})}),Object(C.jsx)(h.a,{placement:"top",target:"pw-tooltip2-".concat(e._id),children:"Modifier de la commande"})]})}}],P=(a(465),a(467)),A=a(468),I=a(986);a(1068),a(1035),a(982),a(1099),a(950),a(1271),a(954),a(963);m.a.get("http://68.183.222.133:5000/preorders/get/byuser",{headers:{Authorization:JSON.parse(Object(l.c)())}}).then((function(e){console.log("-8888----"),console.log(e.data),n=e.data})).catch((function(e){return console.log(e)}));var k=function(e){var t=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.avatar?Object(C.jsx)(i.a,{className:"mr-50",img:e.avatar,width:"32",height:"32"}):Object(C.jsx)(i.a,{color:t,className:"mr-50",content:e?e.fullname:"John loe",initials:!0})},R=[{name:"Client",minWidth:"200px",selector:"client",sortable:!0,cell:function(e){var t=e?e.fullname:"John Doe",a=e?e.phone:"johnDoe@email.com";return Object(C.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[k(e),Object(C.jsxs)("div",{className:"d-flex flex-column",children:[Object(C.jsx)("h6",{className:"user-name text-truncate mb-0",children:t}),Object(C.jsx)("small",{className:"text-truncate text-muted mb-0",children:a})]})]})}},{name:"Adresse",minWidth:"300px",selector:"adr",sortable:!0,cell:function(e){var t=e?e.adr:"@adresse",a=e?e.city:"ville";return Object(C.jsx)("div",{className:"d-flex justify-content-left align-items-center",children:Object(C.jsxs)("div",{className:"d-flex flex-column",children:[Object(C.jsx)("h6",{className:"user-name text-truncate mb-0",children:t}),Object(C.jsx)("small",{className:"text-truncate text-muted mb-0",children:a})]})})}},{name:"Status",minWidth:"90px",selector:"invoiceStatus",sortable:!0,cell:function(e){return Object(C.jsx)(b.a,{color:"light-secondary",pill:!0,children:"En attente"})}},{},{name:"Date",selector:"dueDate",sortable:!0,minWidth:"200px",cell:function(e){return Object(l.a)(e.updatedAt)}},{name:"Action",minWidth:"190px",selector:"",sortable:!0,cell:function(e){'"'.concat(e.domaine,'"');return Object(C.jsxs)("div",{className:"column-action d-flex align-items-center",children:[Object(C.jsx)(r.b,{to:{pathname:"/orders/new",state:{order:e}},id:"pw-tooltip2-".concat(e._id),children:Object(C.jsx)(I.a,{size:17,className:"mx-1"})}),Object(C.jsx)(h.a,{placement:"top",target:"pw-tooltip2-".concat(e._id),children:"Activez la commande"})]})}}],E=function(e){e.data;return Object(C.jsx)("div",{className:"expandable-content p-2"})},T=a(490),_=a.n(T),D=a(498),z=a.n(D),L=a(469),W=a(474),J=a(472),H=a(462),F=a(1080),q=a(1001),M=function(){var e=Object(s.useState)(0),t=Object(c.a)(e,2),a=(t[0],t[1],Object(s.useState)([])),r=Object(c.a)(a,2),i=r[0],o=r[1];Object(s.useEffect)((function(){console.log(n)}),[]);return Object(C.jsxs)(L.a,{children:[Object(C.jsxs)(W.a,{children:[Object(C.jsx)(J.a,{tag:"h4"}),Object(C.jsxs)(H.a,{className:"ml-2",color:"primary",onClick:function(){m.a.get("http://68.183.222.133:5000/preorders/get/newbyuser",{headers:{Authorization:JSON.parse(Object(l.c)())}}).then((function(e){console.log("-888558----"),console.log(e.data),o([e.data])})).catch((function(e){return console.log(e)})),console.log(n)},children:[Object(C.jsx)(F.a,{size:15}),Object(C.jsx)("span",{className:"align-middle ml-50",children:"Obtenir des commandes en attente"})]})]}),Object(C.jsx)(z.a,{noHeader:!0,data:i,expandableRows:!0,columns:R,expandOnRowClicked:!0,className:"react-dataTable",sortIcon:Object(C.jsx)(q.a,{size:10}),expandableRowsComponent:Object(C.jsx)(E,{})})]})},V=(a(32),a(1),a(122),a(484),a(939),a(1108),a(995),a(1058),a(996),a(1025),a(514),a(531),a(509),a(940),a(482)),K=(a(964),a(965),a(781),a(966)),B=(a(481),a(1086),a(1079),a(1041),a(1036),a(1018),a(968),a(478),a(1853),a(601),a(475),a(503),function(){return Object(C.jsx)(s.Fragment,{children:Object(C.jsx)(P.a,{children:Object(C.jsx)(A.a,{sm:"12",children:Object(C.jsx)(M,{})})})})}),U=a(937),G=a(126),Q=(a(608),function(e){var t=e.handleFilter,a=e.value,n=e.handleStatusValue,c=e.statusValue,s=e.handlePerPage,l=e.rowsPerPage;return Object(C.jsx)("div",{className:"invoice-list-table-header w-100 py-2",children:Object(C.jsxs)(P.a,{children:[Object(C.jsx)(A.a,{lg:"6",className:"d-flex align-items-center px-0 px-lg-1",children:Object(C.jsxs)("div",{className:"d-flex align-items-center mr-2",children:[Object(C.jsx)(V.a,{for:"rows-per-page",children:"Afficher"}),Object(C.jsxs)(U.a,{className:"form-control ml-50 pr-3",type:"select",id:"rows-per-page",value:l,onChange:s,children:[Object(C.jsx)("option",{value:"10",children:"10"}),Object(C.jsx)("option",{value:"25",children:"25"}),Object(C.jsx)("option",{value:"50",children:"50"})]})]})}),Object(C.jsxs)(A.a,{lg:"6",className:"actions-right d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pr-lg-1 p-0",children:[Object(C.jsxs)("div",{className:"d-flex align-items-center",children:[Object(C.jsx)(V.a,{for:"search-invoice",children:"Search"}),Object(C.jsx)(K.a,{id:"search-invoice",className:"ml-50 mr-2 w-100",type:"text",value:a,onChange:function(e){return t(e.target.value)},placeholder:"Search Invoice"})]}),Object(C.jsxs)(K.a,{className:"w-auto ",type:"select",value:c,onChange:n,children:[Object(C.jsx)("option",{value:"",children:"Select Status"}),Object(C.jsx)("option",{value:"Livr\xe9e",children:"Livr\xe9e"}),Object(C.jsx)("option",{value:"Confirm\xe9e",children:"Confirm\xe9e"}),Object(C.jsx)("option",{value:"Annul\xe9e",children:"Annul\xe9e"}),Object(C.jsx)("option",{value:"Refus\xe9e",children:"Refus\xe9e"}),Object(C.jsx)("option",{value:"SansR\xe9ponse",children:"Sans r\xe9ponse"}),Object(C.jsx)("option",{value:"Injoignable",children:"Injoignable"}),Object(C.jsx)("option",{value:"Report\xe9e",children:"Report\xe9e"})]})]})]})})});t.default=function(e){var t=Object(G.b)(),a=Object(G.c)((function(e){return e.invoice})),n=Object(s.useState)(""),l=Object(c.a)(n,2),r=l[0],i=l[1],o=Object(s.useState)(1),d=Object(c.a)(o,2),j=d[0],m=d[1],b=Object(s.useState)(""),h=Object(c.a)(b,2),x=h[0],p=h[1],g=Object(s.useState)(10),O=Object(c.a)(g,2),f=O[0],v=O[1];Object(s.useEffect)((function(){console.log(Object({NODE_ENV:"production",PUBLIC_URL:"http://68.183.222.133:9000",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BASENAME:""})),t(u({page:j,perPage:f,status:x,q:r})).catch((function(e){console.log("llllll")}))}),[t,a.data.length]);return Object(C.jsxs)("div",{className:"invoice-list-wrapper",children:[Object(C.jsx)("div",{children:Object(C.jsx)(B,{})}),Object(C.jsx)(L.a,{children:Object(C.jsx)("div",{className:"invoice-list-dataTable",children:Object(C.jsx)(z.a,{noHeader:!0,pagination:!0,paginationServer:!0,subHeader:!0,columns:y,responsive:!0,sortIcon:Object(C.jsx)(q.a,{}),className:"react-dataTable",defaultSortField:"invoiceId",paginationDefaultPage:j,paginationComponent:function(){var e=Number((a.total/f).toFixed(0));return Object(C.jsx)(_.a,{pageCount:e||1,nextLabel:"",breakLabel:"...",previousLabel:"",activeClassName:"active",breakClassName:"page-item",breakLinkClassName:"page-link",forcePage:0!==j?j-1:0,onPageChange:function(e){return function(e){t(u({page:e.selected+1,perPage:f,status:x,q:r})),m(e.selected+1)}(e)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end p-1"})},data:function(){var e={status:x,q:r},t=Object.keys(e).some((function(t){return e[t].length>0}));return a.data.length>0?a.data:0===a.data.length&&t?[]:a.data.slice(0,f)}(),subHeaderComponent:Object(C.jsx)(Q,{value:r,statusValue:x,rowsPerPage:f,handleFilter:function(e){i(e),t(u({page:j,perPage:f,status:x,q:e}))},handlePerPage:function(e){t(u({page:j,perPage:parseInt(e.target.value),status:x,q:r})),v(parseInt(e.target.value))},handleStatusValue:function(e){p(e.target.value),t(u({page:j,perPage:f,status:e.target.value,q:r}))}})})})})]})}},465:function(e,t,a){"use strict";var n=a(464),c=a(1041),s=a(999),l=a(1063),r=a(1058),i=a(996),o=a(476),d=a(477),j=a(478),m=a(1271),u=a(954),b=a(963),h=a(6);t.a=function(e){var t=e.breadCrumbTitle,a=e.breadCrumbParent,x=e.breadCrumbParent2,p=e.breadCrumbParent3,g=e.breadCrumbActive;return Object(h.jsxs)("div",{className:"content-header row",children:[Object(h.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(h.jsx)("div",{className:"row breadcrumbs-top",children:Object(h.jsxs)("div",{className:"col-12",children:[t?Object(h.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(h.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(h.jsxs)(o.a,{children:[Object(h.jsx)(d.a,{tag:"li",children:Object(h.jsx)(n.b,{to:"/",children:"Home"})}),Object(h.jsx)(d.a,{tag:"li",className:"text-primary",children:a}),x?Object(h.jsx)(d.a,{tag:"li",className:"text-primary",children:x}):"",p?Object(h.jsx)(d.a,{tag:"li",className:"text-primary",children:p}):"",Object(h.jsx)(d.a,{tag:"li",active:!0,children:g})]})})]})})}),Object(h.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(h.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(m.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(h.jsx)(c.a,{size:14})}),Object(h.jsxs)(u.a,{tag:"ul",right:!0,children:[Object(h.jsxs)(b.a,{tag:n.b,to:"/apps/chat",children:[Object(h.jsx)(s.a,{className:"mr-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(h.jsxs)(b.a,{tag:n.b,to:"/apps/chat",children:[Object(h.jsx)(l.a,{className:"mr-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(h.jsxs)(b.a,{tag:n.b,to:"/apps/email",children:[Object(h.jsx)(r.a,{className:"mr-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(h.jsxs)(b.a,{tag:n.b,to:"/apps/calendar",children:[Object(h.jsx)(i.a,{className:"mr-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},481:function(e,t,a){},503:function(e,t,a){},608:function(e,t,a){}}]);
//# sourceMappingURL=134.fc2e64f7.chunk.js.map