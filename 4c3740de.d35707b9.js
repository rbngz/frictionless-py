(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{131:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,b=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return r?i.a.createElement(b,o(o({ref:t},u),{},{components:r})):i.a.createElement(b,o({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<a;u++)l[u]=r[u];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},95:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),i=r(7),a=(r(0),r(131)),l={title:"Filelike Tutorial",sidebar_label:"Filelike"},o={unversionedId:"tutorials/filelike-tutorial",id:"tutorials/filelike-tutorial",isDocsHomePage:!1,title:"Filelike Tutorial",description:"Frictionless supports loading Filelike data.",source:"@site/../docs/tutorials/filelike-tutorial.md",slug:"/tutorials/filelike-tutorial",permalink:"/docs/tutorials/filelike-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/filelike-tutorial.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1612363034,sidebar_label:"Filelike",sidebar:"tutorials",previous:{title:"Tutorials Overview",permalink:"/docs/tutorials/tutorials-overview"},next:{title:"Local Tutorial",permalink:"/docs/tutorials/local-tutorial"}},c=[{value:"Reading Filelike Data",id:"reading-filelike-data",children:[]},{value:"Writing Filelike Data",id:"writing-filelike-data",children:[]},{value:"Configuring Filelike Data",id:"configuring-filelike-data",children:[]}],u={toc:c};function s(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Frictionless supports loading Filelike data."),Object(a.b)("h2",{id:"reading-filelike-data"},"Reading Filelike Data"),Object(a.b)("p",null,"You can read Filelike using ",Object(a.b)("inlineCode",{parentName:"p"},"Package/Resource")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Table")," API, for example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nwith open('data/table.csv', 'rb') as file:\n  resource = Resource(path=file, format='csv')\n  print(resource.read_rows())\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', '\u4e2d\u56fd\u4eba')])]\n")),Object(a.b)("h2",{id:"writing-filelike-data"},"Writing Filelike Data"),Object(a.b)("p",null,"The same is actual for writing CSV:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nresource.write(scheme='filelike', format='csv')\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"<_io.BufferedReader name='/tmp/tmplh6mlh54'>\n")),Object(a.b)("h2",{id:"configuring-filelike-data"},"Configuring Filelike Data"),Object(a.b)("p",null,"There are no options available in ",Object(a.b)("inlineCode",{parentName:"p"},"FilelikeControl"),"."),Object(a.b)("p",null,"References:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://frictionlessdata.io/tooling/python/controls-reference/#filelike"},"Filelike Control"))))}s.isMDXComponent=!0}}]);