(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{157:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,d=u["".concat(i,".").concat(f)]||u[f]||b[f]||o;return r?a.a.createElement(d,s(s({ref:t},l),{},{components:r})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(157)),i={title:"SPSS Tutorial",sidebar_label:"SPSS"},s={unversionedId:"tutorials/formats/spss-tutorial",id:"tutorials/formats/spss-tutorial",isDocsHomePage:!1,title:"SPSS Tutorial",description:"This functionality requires an experimental spss plugin. Read More",source:"@site/../docs/tutorials/formats/spss-tutorial.md",slug:"/tutorials/formats/spss-tutorial",permalink:"/docs/tutorials/formats/spss-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/formats/spss-tutorial.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1614589886,sidebar_label:"SPSS",sidebar:"tutorials",previous:{title:"Pandas Tutorial",permalink:"/docs/tutorials/formats/pandas-tutorial"},next:{title:"SQL Tutorial",permalink:"/docs/tutorials/formats/sql-tutorial"}},c=[{value:"Reading from SPSS",id:"reading-from-spss",children:[]},{value:"Writing to SPSS",id:"writing-to-spss",children:[]},{value:"Configuring SPSS",id:"configuring-spss",children:[]}],l={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This functionality requires an experimental ",Object(o.b)("inlineCode",{parentName:"p"},"spss")," plugin. ",Object(o.b)("a",{parentName:"p",href:"/docs/references/plugins-reference"},"Read More"))),Object(o.b)("p",null,"Frictionless supports reading and writing SPSS files."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"! pip install frictionless[spss]\n")),Object(o.b)("h2",{id:"reading-from-spss"},"Reading from SPSS"),Object(o.b)("p",null,"You can read SPSS files:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Package\n\npackage = Package.from_pandas(basepath='<dir with your .SAV files>')\nprint(package)\nfor resource in package.resources:\n  print(resource.read_rows())\n")),Object(o.b)("h2",{id:"writing-to-spss"},"Writing to SPSS"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"[NOTE]")," Timezone information is ignored for ",Object(o.b)("inlineCode",{parentName:"p"},"datetime")," and ",Object(o.b)("inlineCode",{parentName:"p"},"time")," types.")),Object(o.b)("p",null,"You can write SPSS files:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Package\n\npackage = Package('path/to/datapackage.json')\npackage.to_spss(basepath='target')\n")),Object(o.b)("h2",{id:"configuring-spss"},"Configuring SPSS"),Object(o.b)("p",null,"There are no options available in ",Object(o.b)("inlineCode",{parentName:"p"},"SpssDialect"),"."),Object(o.b)("p",null,"References:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/references/formats-reference#spss"},"SPSS Dialect"))))}p.isMDXComponent=!0}}]);