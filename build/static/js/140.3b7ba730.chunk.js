(this["webpackJsonpEcom-dashboard"]=this["webpackJsonpEcom-dashboard"]||[]).push([[140],{1907:function(e,t,s){"use strict";s.r(t);var n=s(123),c=s(16),a=s(0),r=s(918),l=s.n(r),i=s(545),j=s.n(i),o=s(939),u=s(733),b=s(471),d=s(128),h=s(485),x=s(467),O=s(468),m=s(469),f=s(470),p=s(474),g=s(472),v=s(482),N=s(966),y=s(529),w=(s(1185),s(1186),s(811),s(6)),S=function(){return Object(w.jsxs)(a.Fragment,{children:[Object(w.jsxs)("div",{className:"toastify-header",children:[Object(w.jsxs)("div",{className:"title-wrapper",children:[Object(w.jsx)(b.a,{size:"sm",color:"danger",icon:Object(w.jsx)(o.a,{size:12})}),Object(w.jsx)("h6",{className:"toast-title",children:"Error!"})]}),Object(w.jsx)("small",{className:"text-muted",children:"a second ago"})]}),Object(w.jsx)("div",{className:"toastify-body",children:Object(w.jsxs)("span",{role:"img","aria-label":"toast-text",children:["\ud83d\udc4b You can only upload ",Object(w.jsx)("span",{className:"font-weight-bolder",children:".xlsx"}),","," ",Object(w.jsx)("span",{className:"font-weight-bolder",children:".xls"})," & ",Object(w.jsx)("span",{className:"font-weight-bolder",children:".csv"})," Files!."]})})]})};t.default=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),s=t[0],r=t[1],i=Object(a.useState)([]),o=Object(c.a)(i,2),b=o[0],k=o[1],C=Object(a.useState)(""),F=Object(c.a)(C,2),L=F[0],_=F[1],E=Object(a.useState)(""),z=Object(c.a)(E,2),T=z[0],X=z[1],A=new j.a({restrictions:{maxNumberOfFiles:1},autoProceed:!0});A.on("complete",(function(e){var t=new FileReader;t.onload=function(){var s=t.result,n=l.a.read(s,{type:"binary"});n.SheetNames.forEach((function(t){!function(e,t){r(e),X(t)}(l.a.utils.sheet_to_row_object_array(n.Sheets[t]),e.successful[0].data.name)}))},"xlsx"===e.successful[0].extension||"csv"===e.successful[0].extension||"xls"===e.successful[0].extension?t.readAsBinaryString(e.successful[0].data):d.f.error(Object(w.jsx)(S,{}),{hideProgressBar:!0})}));var B=s.length?s.map((function(e,t){return 0===t?Object(n.a)(Object.keys(e)):null})):[],J=L.length?b:s.length&&!L.length?s:null;return Object(w.jsxs)(a.Fragment,{children:[Object(w.jsx)(h.a,{title:"XLSX",subTitle:"Xlsx is a parser and writer for various spreadsheet formats",link:"https://github.com/AdeleD/react-paginate"}),Object(w.jsxs)(x.a,{className:"import-component",children:[Object(w.jsx)(O.a,{sm:"12",children:Object(w.jsx)(m.a,{children:Object(w.jsx)(f.a,{children:Object(w.jsx)(x.a,{children:Object(w.jsx)(O.a,{sm:"12",children:Object(w.jsx)(u.a,{uppy:A})})})})})}),s.length?Object(w.jsx)(O.a,{sm:"12",children:Object(w.jsxs)(m.a,{children:[Object(w.jsxs)(p.a,{className:"justify-content-between flex-wrap",children:[Object(w.jsx)(g.a,{tag:"h4",children:T}),Object(w.jsxs)("div",{className:"d-flex align-items-center justify-content-end",children:[Object(w.jsx)(v.a,{for:"search-input",className:"mr-1",children:"Search"}),Object(w.jsx)(N.a,{id:"search-input",type:"text",bsSize:"sm",value:L,onChange:function(e){return function(e){var t=s,n=[],c=e.target.value;if(_(c),!c.length)return null;n=t.filter((function(e){var t=Object.keys(e),s=t.filter((function(t){return e[t].toString().toLowerCase().startsWith(c.toLowerCase())})),n=t.filter((function(t){return e[t].toString().toLowerCase().includes(c.toLowerCase())}));return s.length?e[s]:!s&&n.length?e[n]:null})),k(n),_(c)}(e)}})]})]}),Object(w.jsxs)(y.a,{className:"table-hover-animation",responsive:!0,children:[Object(w.jsx)("thead",{children:Object(w.jsx)("tr",{children:B.length?B[0].map((function(e,t){return Object(w.jsx)("th",{children:e},t)})):null})}),Object(w.jsx)("tbody",{children:null!==J&&J.length?J.map((function(e,t){var s=Object.keys(e).map((function(t,s){return Object(w.jsx)("td",{children:e[t]},s)}));return Object(w.jsx)("tr",{children:s},t)})):null})]})]})}):null]})]})}},485:function(e,t,s){"use strict";var n=s(467),c=s(468),a=s(6);t.a=function(e){return Object(a.jsx)(n.a,{className:"mb-2",children:Object(a.jsxs)(c.a,{sm:"12",className:"ml-50",children:[Object(a.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:e.title}),e.link?Object(a.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.subTitle}):Object(a.jsx)("p",{className:"text-primary",children:e.subTitle})]})})}},766:function(e,t){},811:function(e,t,s){},919:function(e,t){},920:function(e,t){}}]);
//# sourceMappingURL=140.3b7ba730.chunk.js.map