(this["webpackJsonpEcom-dashboard"]=this["webpackJsonpEcom-dashboard"]||[]).push([[108],{1905:function(e,t,o){"use strict";o.r(t);var r=o(16),a=o(0),n=o(128),s=o(1e3),c=o(471),l=o(913),i=o(485),u=o(467),p=o(468),d=o(469),f=o(474),b=o(472),m=o(470),y=o(966),j=o(462),g=o(6),O=function(){return Object(g.jsx)(a.Fragment,{children:Object(g.jsx)("div",{className:"toastify-header pb-0",children:Object(g.jsxs)("div",{className:"title-wrapper",children:[Object(g.jsx)(c.a,{size:"sm",color:"success",icon:Object(g.jsx)(s.a,{})}),Object(g.jsx)("h6",{className:"toast-title",children:"Copied To Clipboard !"})]})})})};t.default=function(){var e=Object(a.useState)("Copy Me!"),t=Object(r.a)(e,2),o=t[0],s=t[1],c=Object(a.useState)(!1),h=Object(r.a)(c,2),v=(h[0],h[1]);return Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(i.a,{title:"React Copy To Clipboard",subTitle:"Copy to clipboard React component",link:"https://github.com/nkbt/react-copy-to-clipboard"}),Object(g.jsx)(u.a,{children:Object(g.jsx)(p.a,{sm:"12",children:Object(g.jsxs)(d.a,{children:[Object(g.jsx)(f.a,{children:Object(g.jsx)(b.a,{tag:"h4",children:"Clipboard"})}),Object(g.jsx)(m.a,{children:Object(g.jsxs)(u.a,{children:[Object(g.jsx)(p.a,{xl:"3",md:"4",sm:"6",className:"pr-sm-0 mb-md-0 mb-1",children:Object(g.jsx)(y.a,{value:o,onChange:function(e){var t=e.target.value;s(t),v(!1)}})}),Object(g.jsx)(p.a,{md:"2",sm:"12",children:Object(g.jsx)(l.CopyToClipboard,{onCopy:function(){v(!0),n.f.success(Object(g.jsx)(O,{}),{autoClose:3e3,hideProgressBar:!0,closeButton:!1})},text:o,children:Object(g.jsx)(j.a.Ripple,{color:"primary",outline:!0,children:"Copy!"})})})]})})]})})})]})}},467:function(e,t,o){"use strict";var r=o(14),a=o(15),n=o(0),s=o.n(n),c=o(5),l=o.n(c),i=o(58),u=o.n(i),p=o(82),d=l.a.oneOfType([l.a.number,l.a.string]),f={tag:p.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},b={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e){var t=e.className,o=e.cssModule,n=e.noGutters,c=e.tag,l=e.form,i=e.widths,d=Object(a.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];i.forEach((function(t,o){var r=e[t];if(delete d[t],r){var a=!o;f.push(a?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var b=Object(p.mapToCssModules)(u()(t,n?"no-gutters":null,l?"form-row":"row",f),o);return s.a.createElement(c,Object(r.a)({},d,{className:b}))};m.propTypes=f,m.defaultProps=b,t.a=m},468:function(e,t,o){"use strict";var r=o(14),a=o(15),n=o(0),s=o.n(n),c=o(5),l=o.n(c),i=o(58),u=o.n(i),p=o(82),d=l.a.oneOfType([l.a.number,l.a.string]),f=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:d,offset:d})]),b={tag:p.tagPropType,xs:f,sm:f,md:f,lg:f,xl:f,className:l.a.string,cssModule:l.a.object,widths:l.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},y=function(e,t,o){return!0===o||""===o?e?"col":"col-"+t:"auto"===o?e?"col-auto":"col-"+t+"-auto":e?"col-"+o:"col-"+t+"-"+o},j=function(e){var t=e.className,o=e.cssModule,n=e.widths,c=e.tag,l=Object(a.a)(e,["className","cssModule","widths","tag"]),i=[];n.forEach((function(t,r){var a=e[t];if(delete l[t],a||""===a){var n=!r;if(Object(p.isObject)(a)){var s,c=n?"-":"-"+t+"-",d=y(n,t,a.size);i.push(Object(p.mapToCssModules)(u()(((s={})[d]=a.size||""===a.size,s["order"+c+a.order]=a.order||0===a.order,s["offset"+c+a.offset]=a.offset||0===a.offset,s)),o))}else{var f=y(n,t,a);i.push(f)}}})),i.length||i.push("col");var d=Object(p.mapToCssModules)(u()(t,i),o);return s.a.createElement(c,Object(r.a)({},l,{className:d}))};j.propTypes=b,j.defaultProps=m,t.a=j},469:function(e,t,o){"use strict";var r=o(14),a=o(15),n=o(0),s=o.n(n),c=o(5),l=o.n(c),i=o(58),u=o.n(i),p=o(82),d={tag:p.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},f=function(e){var t=e.className,o=e.cssModule,n=e.color,c=e.body,l=e.inverse,i=e.outline,d=e.tag,f=e.innerRef,b=Object(a.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),m=Object(p.mapToCssModules)(u()(t,"card",!!l&&"text-white",!!c&&"card-body",!!n&&(i?"border":"bg")+"-"+n),o);return s.a.createElement(d,Object(r.a)({},b,{className:m,ref:f}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},470:function(e,t,o){"use strict";var r=o(14),a=o(15),n=o(0),s=o.n(n),c=o(5),l=o.n(c),i=o(58),u=o.n(i),p=o(82),d={tag:p.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},f=function(e){var t=e.className,o=e.cssModule,n=e.innerRef,c=e.tag,l=Object(a.a)(e,["className","cssModule","innerRef","tag"]),i=Object(p.mapToCssModules)(u()(t,"card-body"),o);return s.a.createElement(c,Object(r.a)({},l,{className:i,ref:n}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},472:function(e,t,o){"use strict";var r=o(14),a=o(15),n=o(0),s=o.n(n),c=o(5),l=o.n(c),i=o(58),u=o.n(i),p=o(82),d={tag:p.tagPropType,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,o=e.cssModule,n=e.tag,c=Object(a.a)(e,["className","cssModule","tag"]),l=Object(p.mapToCssModules)(u()(t,"card-title"),o);return s.a.createElement(n,Object(r.a)({},c,{className:l}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},474:function(e,t,o){"use strict";var r=o(14),a=o(15),n=o(0),s=o.n(n),c=o(5),l=o.n(c),i=o(58),u=o.n(i),p=o(82),d={tag:p.tagPropType,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,o=e.cssModule,n=e.tag,c=Object(a.a)(e,["className","cssModule","tag"]),l=Object(p.mapToCssModules)(u()(t,"card-header"),o);return s.a.createElement(n,Object(r.a)({},c,{className:l}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},485:function(e,t,o){"use strict";var r=o(467),a=o(468),n=o(6);t.a=function(e){return Object(n.jsx)(r.a,{className:"mb-2",children:Object(n.jsxs)(a.a,{sm:"12",className:"ml-50",children:[Object(n.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:e.title}),e.link?Object(n.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.subTitle}):Object(n.jsx)("p",{className:"text-primary",children:e.subTitle})]})})}},913:function(e,t,o){"use strict";var r=o(914).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},914:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=n(o(0)),a=n(o(915));function n(e){return e&&e.__esModule?e:{default:e}}function s(e){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?f(e):t}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function m(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var y=function(e){function t(){var e,o;i(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return m(f(o=p(this,(e=d(t)).call.apply(e,[this].concat(s)))),"onClick",(function(e){var t=o.props,n=t.text,s=t.onCopy,c=t.children,l=t.options,i=r.default.Children.only(c),u=(0,a.default)(n,l);s&&s(n,u),i&&i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e)})),o}var o,n,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),o=t,n=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),o=l(e,["text","onCopy","options","children"]),a=r.default.Children.only(t);return r.default.cloneElement(a,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(o,!0).forEach((function(t){m(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},o,{onClick:this.onClick}))}}],n&&u(o.prototype,n),s&&u(o,s),t}(r.default.PureComponent);t.CopyToClipboard=y,m(y,"defaultProps",{onCopy:void 0,options:void 0})},915:function(e,t,o){"use strict";var r=o(916),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var o,n,s,c,l,i,u=!1;t||(t={}),o=t.debug||!1;try{if(s=r(),c=document.createRange(),l=document.getSelection(),(i=document.createElement("span")).textContent=e,i.ariaHidden="true",i.style.all="unset",i.style.position="fixed",i.style.top=0,i.style.clip="rect(0, 0, 0, 0)",i.style.whiteSpace="pre",i.style.webkitUserSelect="text",i.style.MozUserSelect="text",i.style.msUserSelect="text",i.style.userSelect="text",i.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var n=a[t.format]||a.default;window.clipboardData.setData(n,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(i),c.selectNodeContents(i),l.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(p){o&&console.error("unable to copy using execCommand: ",p),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(p){o&&console.error("unable to copy using clipboardData: ",p),o&&console.error("falling back to prompt"),n=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(n,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),i&&document.body.removeChild(i),s()}return u}},916:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],r=0;r<e.rangeCount;r++)o.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=108.6c79fb26.chunk.js.map