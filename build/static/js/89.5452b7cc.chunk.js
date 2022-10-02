(this["webpackJsonpEcom-dashboard"]=this["webpackJsonpEcom-dashboard"]||[]).push([[89],{1984:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o(467),s=o(468),r=o(475),c=o(228),l=o.n(c),i=o(465),p=o(480),d=o(16),j=o(462),u=o(782),b=o(6),m=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),o=t[0],n=t[1];return Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)(j.a.Ripple,{color:"primary",id:"ControlledExample",children:"Controlled"}),Object(b.jsx)(u.a,{placement:"top",isOpen:o,target:"ControlledExample",toggle:function(){return n(!o)},children:"Hello World !"})]})},g=o(1118),O=function(){return Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)(j.a,{color:"primary",id:"UnControlledExample",children:"Uncontrolled"}),Object(b.jsx)(g.a,{placement:"top",target:"UnControlledExample",children:"Hello World !"})]})},h=function(){return Object(b.jsxs)("div",{className:"demo-inline-spacing",children:[Object(b.jsx)(j.a.Ripple,{color:"primary",outline:!0,id:"positionTop",children:"Top"}),Object(b.jsx)(g.a,{placement:"top",target:"positionTop",children:"Tooltip on Top"}),Object(b.jsx)(j.a.Ripple,{color:"primary",outline:!0,id:"positionRight",children:"Right"}),Object(b.jsx)(g.a,{placement:"right",target:"positionRight",children:"Tooltip on Right"}),Object(b.jsx)(j.a.Ripple,{color:"primary",outline:!0,id:"positionBottom",children:"Bottom"}),Object(b.jsx)(g.a,{placement:"bottom",target:"positionBottom",children:"Tooltip on Bottom"}),Object(b.jsx)(j.a.Ripple,{color:"primary",outline:!0,id:"positionLeft",children:"Left"}),Object(b.jsx)(g.a,{placement:"left",target:"positionLeft",children:"Tooltip on Left"})]})},f=Object(b.jsx)("pre",{children:Object(b.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport { Button, Tooltip } from 'reactstrap'\n\nconst TooltipControlled = () => {\n  const [tooltipOpen, setTooltipOpen] = useState(false)\n\n  return (\n    <React.Fragment>\n      <Button.Ripple color='primary' id='ControlledExample'>\n        Controlled\n      </Button.Ripple>\n      <Tooltip\n        placement='top'\n        isOpen={tooltipOpen}\n        target='ControlledExample'\n        toggle={() => setTooltipOpen(!tooltipOpen)}\n      >\n        Hello World !\n      </Tooltip>\n    </React.Fragment>\n  )\n}\nexport default TooltipControlled\n"})}),x=Object(b.jsx)("pre",{children:Object(b.jsx)("code",{className:"language-jsx",children:"\n\nimport { Button, UncontrolledTooltip } from 'reactstrap'\n\nconst TooltipUncontrolled = () => {\n  return (\n    <React.Fragment>\n      <Button color='primary' id='UnControlledExample'>\n        Uncontrolled\n      </Button>\n      <UncontrolledTooltip placement='top' target='UnControlledExample'>\n        Hello World !\n      </UncontrolledTooltip>\n    </React.Fragment>\n  )\n}\nexport default TooltipUncontrolled\n"})}),T=Object(b.jsx)("pre",{children:Object(b.jsx)("code",{className:"language-jsx",children:"\n\nimport { Button, UncontrolledTooltip } from 'reactstrap'\n\nconst TooltipPosition = () => {\n  return (\n    <div className='demo-inline-spacing'>\n      <Button.Ripple color='primary' outline id='positionTop'>\n        Top\n      </Button.Ripple>\n      <UncontrolledTooltip placement='top' target='positionTop'>\n        Tooltip on Top\n      </UncontrolledTooltip>\n\n      <Button.Ripple color='primary' outline id='positionRight'>\n        Right\n      </Button.Ripple>\n      <UncontrolledTooltip placement='right' target='positionRight'>\n        Tooltip on Right\n      </UncontrolledTooltip>\n\n      <Button.Ripple color='primary' outline id='positionBottom'>\n        Bottom\n      </Button.Ripple>\n      <UncontrolledTooltip placement='bottom' target='positionBottom'>\n        Tooltip on Bottom\n      </UncontrolledTooltip>\n\n      <Button.Ripple color='primary' outline id='positionLeft'>\n        Left\n      </Button.Ripple>\n      <UncontrolledTooltip placement='left' target='positionLeft'>\n        Tooltip on Left\n      </UncontrolledTooltip>\n    </div>\n  )\n}\nexport default TooltipPosition\n"})});t.default=function(){return Object(a.useEffect)((function(){l.a.highlightAll()}),[]),Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)(i.a,{breadCrumbTitle:"Tooltips",breadCrumbParent:"Components",breadCrumbActive:"Tooltips"}),Object(b.jsxs)(n.a,{children:[Object(b.jsx)(s.a,{xl:"6",lg:"12",children:Object(b.jsxs)(p.a,{title:"Controlled Tooltip",code:f,children:[Object(b.jsxs)(r.a,{children:["For controlled tooltips you'll have to manage state of component.controlled tooltips require"," ",Object(b.jsx)("code",{children:"isOpen"})," and ",Object(b.jsx)("code",{children:"toggle"})," props to work."]}),Object(b.jsx)(m,{})]})}),Object(b.jsx)(s.a,{xl:"6",lg:"12",children:Object(b.jsxs)(p.a,{title:"Uncontrolled Tooltip",code:x,children:[Object(b.jsxs)(r.a,{children:["UncontrolledTooltip does not require",Object(b.jsx)("code",{children:"isOpen"})," nor ",Object(b.jsx)("code",{children:"toggle"})," props to work.All you have to do is provide a valid target to tooltip."]}),Object(b.jsx)(O,{})]})})]}),Object(b.jsx)(n.a,{children:Object(b.jsx)(s.a,{sm:"12",children:Object(b.jsxs)(p.a,{title:"Tooltip Positions",code:T,children:[Object(b.jsxs)(r.a,{className:"mb-0",children:["Use prop ",Object(b.jsx)("code",{children:"placement"})," to change position of tooltip."]}),Object(b.jsx)(h,{})]})})})]})}},465:function(e,t,o){"use strict";var a=o(464),n=o(1041),s=o(999),r=o(1063),c=o(1058),l=o(996),i=o(476),p=o(477),d=o(478),j=o(1271),u=o(954),b=o(963),m=o(6);t.a=function(e){var t=e.breadCrumbTitle,o=e.breadCrumbParent,g=e.breadCrumbParent2,O=e.breadCrumbParent3,h=e.breadCrumbActive;return Object(m.jsxs)("div",{className:"content-header row",children:[Object(m.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(m.jsx)("div",{className:"row breadcrumbs-top",children:Object(m.jsxs)("div",{className:"col-12",children:[t?Object(m.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(m.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(m.jsxs)(i.a,{children:[Object(m.jsx)(p.a,{tag:"li",children:Object(m.jsx)(a.b,{to:"/",children:"Home"})}),Object(m.jsx)(p.a,{tag:"li",className:"text-primary",children:o}),g?Object(m.jsx)(p.a,{tag:"li",className:"text-primary",children:g}):"",O?Object(m.jsx)(p.a,{tag:"li",className:"text-primary",children:O}):"",Object(m.jsx)(p.a,{tag:"li",active:!0,children:h})]})})]})})}),Object(m.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(m.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(m.jsxs)(d.a,{children:[Object(m.jsx)(j.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(m.jsx)(n.a,{size:14})}),Object(m.jsxs)(u.a,{tag:"ul",right:!0,children:[Object(m.jsxs)(b.a,{tag:a.b,to:"/apps/chat",children:[Object(m.jsx)(s.a,{className:"mr-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(m.jsxs)(b.a,{tag:a.b,to:"/apps/chat",children:[Object(m.jsx)(r.a,{className:"mr-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(m.jsxs)(b.a,{tag:a.b,to:"/apps/email",children:[Object(m.jsx)(c.a,{className:"mr-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(m.jsxs)(b.a,{tag:a.b,to:"/apps/calendar",children:[Object(m.jsx)(l.a,{className:"mr-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},466:function(e,t,o){"use strict";var a=o(14),n=o(0),s=o.n(n),r=o(5),c=o.n(r),l=o(473),i={children:c.a.node},p=function(e){return s.a.createElement(l.a,Object(a.a)({group:!0},e))};p.propTypes=i,t.a=p},467:function(e,t,o){"use strict";var a=o(14),n=o(15),s=o(0),r=o.n(s),c=o(5),l=o.n(c),i=o(58),p=o.n(i),d=o(82),j=l.a.oneOfType([l.a.number,l.a.string]),u={tag:d.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:j,sm:j,md:j,lg:j,xl:j},b={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e){var t=e.className,o=e.cssModule,s=e.noGutters,c=e.tag,l=e.form,i=e.widths,j=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),u=[];i.forEach((function(t,o){var a=e[t];if(delete j[t],a){var n=!o;u.push(n?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var b=Object(d.mapToCssModules)(p()(t,s?"no-gutters":null,l?"form-row":"row",u),o);return r.a.createElement(c,Object(a.a)({},j,{className:b}))};m.propTypes=u,m.defaultProps=b,t.a=m},468:function(e,t,o){"use strict";var a=o(14),n=o(15),s=o(0),r=o.n(s),c=o(5),l=o.n(c),i=o(58),p=o.n(i),d=o(82),j=l.a.oneOfType([l.a.number,l.a.string]),u=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:j,offset:j})]),b={tag:d.tagPropType,xs:u,sm:u,md:u,lg:u,xl:u,className:l.a.string,cssModule:l.a.object,widths:l.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,o){return!0===o||""===o?e?"col":"col-"+t:"auto"===o?e?"col-auto":"col-"+t+"-auto":e?"col-"+o:"col-"+t+"-"+o},O=function(e){var t=e.className,o=e.cssModule,s=e.widths,c=e.tag,l=Object(n.a)(e,["className","cssModule","widths","tag"]),i=[];s.forEach((function(t,a){var n=e[t];if(delete l[t],n||""===n){var s=!a;if(Object(d.isObject)(n)){var r,c=s?"-":"-"+t+"-",j=g(s,t,n.size);i.push(Object(d.mapToCssModules)(p()(((r={})[j]=n.size||""===n.size,r["order"+c+n.order]=n.order||0===n.order,r["offset"+c+n.offset]=n.offset||0===n.offset,r)),o))}else{var u=g(s,t,n);i.push(u)}}})),i.length||i.push("col");var j=Object(d.mapToCssModules)(p()(t,i),o);return r.a.createElement(c,Object(a.a)({},l,{className:j}))};O.propTypes=b,O.defaultProps=m,t.a=O},469:function(e,t,o){"use strict";var a=o(14),n=o(15),s=o(0),r=o.n(s),c=o(5),l=o.n(c),i=o(58),p=o.n(i),d=o(82),j={tag:d.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},u=function(e){var t=e.className,o=e.cssModule,s=e.color,c=e.body,l=e.inverse,i=e.outline,j=e.tag,u=e.innerRef,b=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),m=Object(d.mapToCssModules)(p()(t,"card",!!l&&"text-white",!!c&&"card-body",!!s&&(i?"border":"bg")+"-"+s),o);return r.a.createElement(j,Object(a.a)({},b,{className:m,ref:u}))};u.propTypes=j,u.defaultProps={tag:"div"},t.a=u},470:function(e,t,o){"use strict";var a=o(14),n=o(15),s=o(0),r=o.n(s),c=o(5),l=o.n(c),i=o(58),p=o.n(i),d=o(82),j={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},u=function(e){var t=e.className,o=e.cssModule,s=e.innerRef,c=e.tag,l=Object(n.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.mapToCssModules)(p()(t,"card-body"),o);return r.a.createElement(c,Object(a.a)({},l,{className:i,ref:s}))};u.propTypes=j,u.defaultProps={tag:"div"},t.a=u},472:function(e,t,o){"use strict";var a=o(14),n=o(15),s=o(0),r=o.n(s),c=o(5),l=o.n(c),i=o(58),p=o.n(i),d=o(82),j={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object},u=function(e){var t=e.className,o=e.cssModule,s=e.tag,c=Object(n.a)(e,["className","cssModule","tag"]),l=Object(d.mapToCssModules)(p()(t,"card-title"),o);return r.a.createElement(s,Object(a.a)({},c,{className:l}))};u.propTypes=j,u.defaultProps={tag:"div"},t.a=u},474:function(e,t,o){"use strict";var a=o(14),n=o(15),s=o(0),r=o.n(s),c=o(5),l=o.n(c),i=o(58),p=o.n(i),d=o(82),j={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object},u=function(e){var t=e.className,o=e.cssModule,s=e.tag,c=Object(n.a)(e,["className","cssModule","tag"]),l=Object(d.mapToCssModules)(p()(t,"card-header"),o);return r.a.createElement(s,Object(a.a)({},c,{className:l}))};u.propTypes=j,u.defaultProps={tag:"div"},t.a=u},475:function(e,t,o){"use strict";var a=o(14),n=o(15),s=o(0),r=o.n(s),c=o(5),l=o.n(c),i=o(58),p=o.n(i),d=o(82),j={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object},u=function(e){var t=e.className,o=e.cssModule,s=e.tag,c=Object(n.a)(e,["className","cssModule","tag"]),l=Object(d.mapToCssModules)(p()(t,"card-text"),o);return r.a.createElement(s,Object(a.a)({},c,{className:l}))};u.propTypes=j,u.defaultProps={tag:"p"},t.a=u},476:function(e,t,o){"use strict";var a=o(14),n=o(15),s=o(0),r=o.n(s),c=o(5),l=o.n(c),i=o(58),p=o.n(i),d=o(82),j={tag:d.tagPropType,listTag:d.tagPropType,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},u=function(e){var t=e.className,o=e.listClassName,s=e.cssModule,c=e.children,l=e.tag,i=e.listTag,j=e["aria-label"],u=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),b=Object(d.mapToCssModules)(p()(t),s),m=Object(d.mapToCssModules)(p()("breadcrumb",o),s);return r.a.createElement(l,Object(a.a)({},u,{className:b,"aria-label":j}),r.a.createElement(i,{className:m},c))};u.propTypes=j,u.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=u},477:function(e,t,o){"use strict";var a=o(14),n=o(15),s=o(0),r=o.n(s),c=o(5),l=o.n(c),i=o(58),p=o.n(i),d=o(82),j={tag:d.tagPropType,active:l.a.bool,className:l.a.string,cssModule:l.a.object},u=function(e){var t=e.className,o=e.cssModule,s=e.active,c=e.tag,l=Object(n.a)(e,["className","cssModule","active","tag"]),i=Object(d.mapToCssModules)(p()(t,!!s&&"active","breadcrumb-item"),o);return r.a.createElement(c,Object(a.a)({},l,{className:i,"aria-current":s?"page":void 0}))};u.propTypes=j,u.defaultProps={tag:"li"},t.a=u},478:function(e,t,o){"use strict";o.d(t,"a",(function(){return m}));var a=o(32),n=o(14),s=o(59),r=o(121),c=o(0),l=o.n(c),i=o(5),p=o.n(i),d=o(466),j=o(82);function u(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}var b=["defaultOpen"],m=function(e){function t(t){var o;return(o=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},o.toggle=o.toggle.bind(Object(s.a)(o)),o}Object(r.a)(t,e);var o=t.prototype;return o.toggle=function(){this.setState({isOpen:!this.state.isOpen})},o.render=function(){return l.a.createElement(d.a,Object(n.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(j.omit)(this.props,b)))},t}(c.Component);m.propTypes=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?u(Object(o),!0).forEach((function(t){Object(a.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({defaultOpen:p.a.bool},d.a.propTypes)},480:function(e,t,o){"use strict";var a=o(16),n=o(0),s=o(1014),r=o(470),c=o(469),l=o(474),i=o(472),p=o(718),d=o(6);t.a=function(e){var t=e.title,o=e.children,j=e.noBody,u=e.code,b=e.iconCode,m=Object(n.useState)(!1),g=Object(a.a)(m,2),O=g[0],h=g[1],f=b||Object(d.jsx)(s.a,{size:15}),x=j?n.Fragment:r.a;return Object(d.jsxs)(c.a,{className:"card-snippet",children:[Object(d.jsxs)(l.a,{children:[Object(d.jsx)(i.a,{tag:"h4",children:t}),Object(d.jsx)("div",{className:"views cursor-pointer",onClick:function(){return h(!O)},children:f})]}),Object(d.jsx)(x,{children:o}),Object(d.jsx)(p.a,{isOpen:O,children:Object(d.jsx)(r.a,{children:u})})]})}}}]);
//# sourceMappingURL=89.5452b7cc.chunk.js.map