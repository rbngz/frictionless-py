(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{158:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||l;return a?i.a.createElement(m,o(o({ref:t},c),{},{components:a})):i.a.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var c=2;c<l;c++)r[c]=a[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},79:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),l=(a(0),a(158)),r={title:"Quick Start"},o={unversionedId:"guides/quick-start",id:"guides/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"Let's get started with Frictionless! We will learn how to install and use the framework. The simple example below will showcase the framework's basic functionality. For an introduction to concepts behind the Frictionless Framework, please read the Frictionless Introduction.",source:"@site/../docs/guides/quick-start.md",slug:"/guides/quick-start",permalink:"/docs/guides/quick-start",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/guides/quick-start.md",version:"current",lastUpdatedBy:"Augusto Herrmann",lastUpdatedAt:1614152170,sidebar:"guides",previous:{title:"Introduction",permalink:"/docs/guides/introduction"},next:{title:"Basic Examples",permalink:"/docs/guides/basic-examples"}},s=[{value:"Installation",id:"installation",children:[{value:"Troubleshooting",id:"troubleshooting",children:[]}]},{value:"Usage",id:"usage",children:[]},{value:"Example",id:"example",children:[]}],c={toc:s};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Let's get started with Frictionless! We will learn how to install and use the framework. The simple example below will showcase the framework's basic functionality. For an introduction to concepts behind the Frictionless Framework, please read the ",Object(l.b)("a",{parentName:"p",href:"/docs/guides/introduction"},"Frictionless Introduction"),"."),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"The framework requires Python3.6+. Versioning follows the ",Object(l.b)("a",{parentName:"p",href:"https://semver.org/"},"SemVer Standard"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"pip install frictionless\npip install frictionless[sql] # to install a core plugin (optional)\n")),Object(l.b)("p",null,"The framework supports CSV, Excel, and JSON formats by default. Please use the command above to install a core plugin and add support for SQL, Pandas, HTML, and others (check the ",Object(l.b)("a",{parentName:"p",href:"https://framework.frictionlessdata.io/docs/references/plugins-reference"},"list of Frictionless Framework plugins and their status"),"). Usually, you don't need to think about it in advance\u2013frictionless will display a useful error message about a missing plugin with installation instructions."),Object(l.b)("h3",{id:"troubleshooting"},"Troubleshooting"),Object(l.b)("p",null,"Did you have an error installing Frictionless? Here are some dependencies and common errors:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"pip: command not found"),". Please see the ",Object(l.b)("a",{parentName:"li",href:"https://pip.pypa.io/en/stable/installing/"},"pip docs")," for help installing pip."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://docs.python.org/3/using/mac.html"},"Installing Python help (Mac)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://docs.python.org/3/using/windows.html"},"Installing Python help (Windows)"))),Object(l.b)("p",null,"Still having a problem? Ask us for help on our ",Object(l.b)("a",{parentName:"p",href:"https://discord.com/invite/j9DNFNw"},"Discord")," chat or open an ",Object(l.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/frictionless-py/issues"},"issue"),". We're happy to help!"),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("p",null,"The framework can be used:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"as a Python library"),Object(l.b)("li",{parentName:"ul"},"as a command-line interface"),Object(l.b)("li",{parentName:"ul"},"as a restful API server (for advanced use cases)")),Object(l.b)("p",null,"For instance, all the examples below do the same thing:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import extract\nrows = extract('data/table.csv')\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"frictionless extract data/table.csv\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text",metastring:'title="API"',title:'"API"'},"[POST] /extract {\"source': 'data/table.csv\"}\n")),Object(l.b)("p",null,"All these interfaces are as much alike as possible regarding naming conventions and the way you interact with them. Usually, it's straightforward to translate, for instance, Python code to a command-line call. Frictionless provides code completion for Python and the command-line, which should help to get useful hints in real time. You can find the API reference ",Object(l.b)("a",{parentName:"p",href:"/docs/references/api-reference"},"here"),"."),Object(l.b)("p",null,"Arguments conform to the following naming convention:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"for Python interfaces, they are snake_cased, e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"missing_values")),Object(l.b)("li",{parentName:"ul"},"within dictionaries or JSON objects, they are camelCased, e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"missingValues")),Object(l.b)("li",{parentName:"ul"},"in the command line, they use dashes, e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"--missing-values"))),Object(l.b)("p",null,"To get the documentation for a command-line interface just use the ",Object(l.b)("inlineCode",{parentName:"p"},"--help")," flag:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"frictionless --help\nfrictionless describe --help\nfrictionless extract --help\nfrictionless validate --help\nfrictionless transform --help\n")),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"For more examples, use the ",Object(l.b)("a",{parentName:"p",href:"/docs/guides/basic-examples"},"Basic Examples"))),Object(l.b)("p",null,"We will take a very messy data file:"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Download ",Object(l.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/frictionlessdata/frictionless-py/master/data/invalid.csv"},Object(l.b)("inlineCode",{parentName:"a"},"invalid.csv"))," into the ",Object(l.b)("inlineCode",{parentName:"p"},"data")," folder to reproduce the examples")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"cat data/invalid.csv\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-csv",metastring:'title="data/invalid.csv"',title:'"data/invalid.csv"'},"id,name,,name\n1,english\n1,english\n\n2,german,1,2,3\n")),Object(l.b)("p",null,"First of all, let's use ",Object(l.b)("inlineCode",{parentName:"p"},"describe")," to infer the metadata directly from the tabular data. We can then edit and save it to provide others with useful information about the data:"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"This output is in ",Object(l.b)("a",{parentName:"p",href:"https://yaml.org/"},"YAML"),", it is a default Frictionless output format.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"frictionless describe data/invalid.csv\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"# --------\n# metadata: data/invalid.csv\n# --------\n\nencoding: utf-8\nformat: csv\nscheme: file\nhashing: md5\nname: invalid\npath: data/invalid.csv\nprofile: tabular-data-resource\nschema:\n  fields:\n    - name: id\n      type: integer\n    - name: name\n      type: string\n    - name: field3\n      type: integer\n    - name: name2\n      type: integer\n")),Object(l.b)("p",null,"Now that we have inferred a table schema from the data file (e.g., expected format of the table, expected type of each value in a column, etc.), we can use ",Object(l.b)("inlineCode",{parentName:"p"},"extract")," to read the normalized tabular data from the source CSV file:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"frictionless extract data/invalid.csv\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"# ----\n# data: data/invalid.csv\n# ----\n\n====  =======  ======  =====\nid    name     field3  name2\n====  =======  ======  =====\n   1  english  None    None\n   1  english  None    None\nNone  None     None    None\n   2  german        1      2\n====  =======  ======  =====\n")),Object(l.b)("p",null,"Last but not least, let's get a validation report. This report will help us to identify and fix all the errors present in the tabular data, as comprehensive information is provided for every problem:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"frictionless validate data/invalid.csv\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'# -------\n# invalid: data/invalid.csv\n# -------\n\n====  =====  ===============  ====================================================================================\nrow   field  code             message\n====  =====  ===============  ====================================================================================\nNone      3  blank-label      Label in the header in field at position "3" is blank\nNone      4  duplicate-label  Label "name" in the header at position "4" is duplicated to a label: at position "2"\n   2      3  missing-cell     Row at position "2" has a missing cell in field "field3" at position "3"\n   2      4  missing-cell     Row at position "2" has a missing cell in field "name2" at position "4"\n   3      3  missing-cell     Row at position "3" has a missing cell in field "field3" at position "3"\n   3      4  missing-cell     Row at position "3" has a missing cell in field "name2" at position "4"\n   4  None   blank-row        Row at position "4" is completely blank\n   5      5  extra-cell       Row at position "5" has an extra value in field at position "5"\n====  =====  ===============  ====================================================================================\n')),Object(l.b)("p",null,"Now that we have all this information:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"we can clean up the table to ensure the data quality"),Object(l.b)("li",{parentName:"ul"},"we can use the metadata to describe and share the dataset"),Object(l.b)("li",{parentName:"ul"},"we can include the validation into our workflow to guarantee the validity"),Object(l.b)("li",{parentName:"ul"},"and much more: don't hesitate and read the following sections of the documentation!")))}p.isMDXComponent=!0}}]);