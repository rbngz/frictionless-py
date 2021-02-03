(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{100:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return o})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(7),c=(t(0),t(131)),i={title:"Plugins Reference"},l={unversionedId:"references/plugins-reference",id:"references/plugins-reference",isDocsHomePage:!1,title:"Plugins Reference",description:"Frictionless Framework ships with a great deal of core plugins. Some of them are production ready and some of them are not. Here is current status of the plugins:",source:"@site/../docs/references/plugins-reference.md",slug:"/references/plugins-reference",permalink:"/docs/references/plugins-reference",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/references/plugins-reference.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1612363034,sidebar:"references",previous:{title:"Formats Reference",permalink:"/docs/references/formats-reference"},next:{title:"Errors Reference",permalink:"/docs/references/errors-reference"}},o=[{value:"Stable",id:"stable",children:[]},{value:"Experimental",id:"experimental",children:[]}],s={toc:o};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Frictionless Framework ships with a great deal of core plugins. Some of them are production ready and some of them are not. Here is current status of the plugins:"),Object(c.b)("h2",{id:"stable"},"Stable"),Object(c.b)("p",null,"These plugins are well-tested and can be used in production:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"csv"),Object(c.b)("li",{parentName:"ul"},"excel"),Object(c.b)("li",{parentName:"ul"},"filelike"),Object(c.b)("li",{parentName:"ul"},"inline"),Object(c.b)("li",{parentName:"ul"},"json"),Object(c.b)("li",{parentName:"ul"},"local"),Object(c.b)("li",{parentName:"ul"},"ods"),Object(c.b)("li",{parentName:"ul"},"remote"),Object(c.b)("li",{parentName:"ul"},"text")),Object(c.b)("h2",{id:"experimental"},"Experimental"),Object(c.b)("p",null,"These plugins are not recommended for production yet. There can be bugs and the API might change within the same major version of Frictionless:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"bigquery"),Object(c.b)("li",{parentName:"ul"},"ckan"),Object(c.b)("li",{parentName:"ul"},"gsheets"),Object(c.b)("li",{parentName:"ul"},"html"),Object(c.b)("li",{parentName:"ul"},"multipart"),Object(c.b)("li",{parentName:"ul"},"pandas"),Object(c.b)("li",{parentName:"ul"},"s3"),Object(c.b)("li",{parentName:"ul"},"server"),Object(c.b)("li",{parentName:"ul"},"spss"),Object(c.b)("li",{parentName:"ul"},"sql")))}u.isMDXComponent=!0},131:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=u(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(t),f=n,m=p["".concat(i,".").concat(f)]||p[f]||b[f]||c;return t?a.a.createElement(m,l(l({ref:r},s),{},{components:t})):a.a.createElement(m,l({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,i=new Array(c);i[0]=f;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<c;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);