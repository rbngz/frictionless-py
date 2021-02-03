(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{116:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(131)),o={title:"Multipart Tutorial",sidebar_label:"Multipart"},l={unversionedId:"tutorials/multipart-tutorial",id:"tutorials/multipart-tutorial",isDocsHomePage:!1,title:"Multipart Tutorial",description:"This functionality requires an experimental mulripart plugin. Read More",source:"@site/../docs/tutorials/multipart-tutorial.md",slug:"/tutorials/multipart-tutorial",permalink:"/docs/tutorials/multipart-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/multipart-tutorial.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1612363034,sidebar_label:"Multipart",sidebar:"tutorials",previous:{title:"Local Tutorial",permalink:"/docs/tutorials/local-tutorial"},next:{title:"Remote Tutorial",permalink:"/docs/tutorials/remote-tutorial"}},c=[{value:"Reading Multipart Data",id:"reading-multipart-data",children:[]},{value:"Writing Multipart Data",id:"writing-multipart-data",children:[]},{value:"Configuring Local Data",id:"configuring-local-data",children:[]}],u={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This functionality requires an experimental ",Object(i.b)("inlineCode",{parentName:"p"},"mulripart")," plugin. ",Object(i.b)("a",{parentName:"p",href:"/docs/references/plugins-reference"},"Read More")))),Object(i.b)("p",null,"You can read and write files split into chunks with Frictionless."),Object(i.b)("h2",{id:"reading-multipart-data"},"Reading Multipart Data"),Object(i.b)("p",null,"You can read using ",Object(i.b)("inlineCode",{parentName:"p"},"Package/Resource")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Table")," API, for example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(path=['data/chunk1.csv', 'data/chunk2.csv'])\nprint(resource.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', '\u4e2d\u56fd\u4eba')])]\n")),Object(i.b)("h2",{id:"writing-multipart-data"},"Writing Multipart Data"),Object(i.b)("p",null,"The actual for writing:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(path='data/table.json')\nresource.write('tmp/table{number}.json', scheme=\"multipart\", control={\"chunkSize\": 1000000})\n")),Object(i.b)("h2",{id:"configuring-local-data"},"Configuring Local Data"),Object(i.b)("p",null,"There is a control to configure how Frictionless read files using this scheme. For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\nfrom frictionless.plugins.multipart import MultipartControl\n\ncontrol = MultipartControl(chunk_size=1000000)\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nresource.write('tmp/table{number}.json', scheme=\"multipart\", control=control)\n")),Object(i.b)("p",null,"References:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://frictionlessdata.io/tooling/python/schemes-reference/#multipart"},"Multipart Control"))))}p.isMDXComponent=!0},131:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,b=s["".concat(o,".").concat(d)]||s[d]||m[d]||i;return r?a.a.createElement(b,l(l({ref:t},u),{},{components:r})):a.a.createElement(b,l({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);