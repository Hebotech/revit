_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{Hh6j:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return d}));var r=n("nKUr"),c=n("o0o1"),s=n.n(c);function a(e,t,n,r,c,s,a){try{var o=e[s](a),i=o.value}catch(l){return void n(l)}o.done?t(i):Promise.resolve(i).then(r,c)}var o=n("q1tI"),i=n("YFqc"),l=n.n(i);var u=function(e){var t=e.id,n=Object(o.useState)("pending"),c=n[0],i=n[1],u=Object(o.useState)("fetchingData"),d=u[0],f=u[1];switch(Object(o.useEffect)((function(){(function(){var e,n=(e=s.a.mark((function e(){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://apihebo.online/revit/product/".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,c=r.data,f(c),i("resolved"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),i("error"),f(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})),function(){var t=this,n=arguments;return new Promise((function(r,c){var s=e.apply(t,n);function o(e){a(s,r,c,o,i,"next",e)}function i(e){a(s,r,c,o,i,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}})()()}),[]),c){case"pending":return Object(r.jsx)("div",{className:"col",children:"Loading..."});case"resolved":return Object(r.jsx)("div",{className:"col-2 my-5",children:Object(r.jsx)(l.a,{href:"/productos/".concat(d.slug),children:Object(r.jsxs)("a",{children:[Object(r.jsx)("img",{className:"img-fluid",src:d.images[0].src,alt:d.name}),Object(r.jsx)("small",{children:d.name})]})})},d.slug);case"error":return Object(r.jsx)("div",{})}},d=!0;t.default=function(e){var t=e.product;return Object(r.jsx)("div",{className:"container-fluid ",children:Object(r.jsxs)("div",{className:"row m-0 px-5 align-items-center",children:[Object(r.jsxs)("div",{className:"col-12",children:[Object(r.jsx)("nav",{"aria-label":"breadcrumb",children:Object(r.jsxs)("ol",{class:"breadcrumb",children:[Object(r.jsx)("li",{class:"breadcrumb-item",children:Object(r.jsx)("a",{href:"#",children:"Inicio"})}),Object(r.jsx)("li",{class:"breadcrumb-item",children:Object(r.jsx)("a",{href:"#",children:"Categor\xeda"})}),Object(r.jsx)("li",{class:"breadcrumb-item active","aria-current":"page",children:t.name})]})}),Object(r.jsx)("h1",{className:"text-md-left text-center",children:t.name})]}),Object(r.jsx)("div",{className:"col-6",children:t.images.map((function(e,n){return Object(r.jsx)("img",{src:e.src,alt:t.name},n)}))}),Object(r.jsxs)("div",{className:"col-4 align-self-start mt-5",children:[Object(r.jsx)("h2",{children:"Acerca del producto"}),Object(r.jsx)("span",{dangerouslySetInnerHTML:{__html:t.short_description}})]}),""!==t.description?Object(r.jsxs)("div",{className:"text-center row m-0 justify-content-center align-items-center",children:[Object(r.jsx)("div",{className:"col-12",children:Object(r.jsxs)("h3",{children:["About  ","",Object(r.jsx)("strong",{children:"this product"})]})}),Object(r.jsx)("div",{className:"col",children:Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:t.description}})})]}):"",Object(r.jsxs)("div",{className:"row m-0 align-items-center justify-content-center",children:[Object(r.jsx)("div",{className:"col-12 text-center",children:Object(r.jsxs)("h4",{children:["Complete  ","",Object(r.jsx)("strong",{children:"your look"})]})}),t.related_ids.map((function(e){return Object(r.jsx)(u,{id:e},e)}))]})]})})}},Hrk1:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/productos/[name]",function(){return n("Hh6j")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var s,a=c(n("q1tI")),o=n("elyg"),i=n("nOHt"),l=new Map,u=window.IntersectionObserver,d={};var f=function(e,t){var n=s||(u?s=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function h(e,t,n,r){(0,o.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),d[t+"%"+n]=!0)}var j=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),c=n&&n.pathname||"/",s=a.default.useMemo((function(){var t=(0,o.resolveHref)(c,e.href,!0),n=r(t,2),s=n[0],a=n[1];return{href:s,as:e.as?(0,o.resolveHref)(c,e.as):a||s}}),[c,e.href,e.as]),l=s.href,j=s.as,p=e.children,b=e.replace,v=e.shallow,m=e.scroll,x=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var O=a.Children.only(p),g=O&&"object"===typeof O&&O.ref,w=a.default.useRef(),y={ref:a.default.useCallback((function(e){(w.current&&(w.current(),w.current=void 0),t&&u&&e&&e.tagName&&(0,o.isLocalURL)(l))&&(d[l+"%"+j]||(w.current=f(e,(function(){h(n,l,j,{locale:"undefined"!==typeof x?x:n&&n.locale})}))));g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[t,g,l,j,n,x]),onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,s,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:s,locale:i}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,l,j,b,v,m,x)}};return t&&(y.onMouseEnter=function(e){(0,o.isLocalURL)(l)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),h(n,l,j,{priority:!0}))}),(e.passHref||"a"===O.type&&!("href"in O.props))&&(y.href=(0,o.addBasePath)((0,o.addLocale)(j,"undefined"!==typeof x?x:n&&n.locale,n&&n.defaultLocale))),a.default.cloneElement(O,y)};t.default=j}},[["Hrk1",0,1,2]]]);