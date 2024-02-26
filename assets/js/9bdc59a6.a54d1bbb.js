"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[61039],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=m(a),k=r,g=s["".concat(d,".").concat(k)]||s[k]||u[k]||l;return a?n.createElement(g,i(i({ref:e},p),{},{components:a})):n.createElement(g,i({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},60904:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"Format",sidebar_position:2},i=void 0,o={unversionedId:"design_and_concept/the_format_in_inlong",id:"design_and_concept/the_format_in_inlong",title:"Format",description:"What is format ?",source:"@site/docs/design_and_concept/the_format_in_inlong.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/the_format_in_inlong",permalink:"/docs/next/design_and_concept/the_format_in_inlong",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/design_and_concept/the_format_in_inlong.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Format",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Basic Concept",permalink:"/docs/next/design_and_concept/basic_concept"},next:{title:"Agent Plugin",permalink:"/docs/next/design_and_concept/how_to_write_plugin_agent"}},d={},m=[{value:"What is format ?",id:"what-is-format-",level:2},{value:"The format in InLong",id:"the-format-in-inlong",level:2},{value:"What are the formats?",id:"what-are-the-formats",level:2},{value:"CSV",id:"csv",level:3},{value:"Key-Value",id:"key-value",level:3},{value:"JSON",id:"json",level:3}],p={toc:m},s="wrapper";function u(t){let{components:e,...l}=t;return(0,r.kt)(s,(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-format-"},"What is format ?"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(83618).Z,width:"890",height:"383"})),(0,r.kt)("p",null,"As shown in the figure, in Flink SQL, when reading and writing data, it adopts the form of Row. Inside it is an Object array ",(0,r.kt)("inlineCode",{parentName:"p"},"Object[]"),", and each element in the array represents a field of the Flink table. The information about field type , name and precision is marked by ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema")," ."),(0,r.kt)("p",null,"Format provides two interfaces : SerializationSchema and DeserializationSchema :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When Flink writes data to MQ , it needs to serialize ",(0,r.kt)("inlineCode",{parentName:"li"},"Flink Row")," into ",(0,r.kt)("inlineCode",{parentName:"li"},"key-value")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"csv")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"Json")," format . Then call the method of ",(0,r.kt)("inlineCode",{parentName:"li"},"SerializationSchema#serialize")," . Data will be serialized into Byte[] , which can be written to MQ ."),(0,r.kt)("li",{parentName:"ul"},"When Flink reads data from MQ , it works vice versa . It reads data from MQ with format Byte[] . Then deserializes them into Format and finally converts them into Flink row .")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"See\ndetails: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sort/sort-formats"},(0,r.kt)("inlineCode",{parentName:"a"},"inlong-sort/sort-formats")))),(0,r.kt)("h2",{id:"the-format-in-inlong"},"The format in InLong"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(50254).Z,width:"803",height:"271"})),(0,r.kt)("p",null,"InLong serves as a one-stop, full-scenario data integration platform , with MQ (the Cache part in the picture) as the transmission channel , which decouples DataProxy and Sort and provides better scalability . When DataProxy is reporting data , it needs to serialize the data into corresponding format ( ",(0,r.kt)("inlineCode",{parentName:"p"},"SerializationSchema#serialize")," ) . When Sort receives data, it will deserialize the MQ's data ( ",(0,r.kt)("inlineCode",{parentName:"p"},"DeserializationSchema#deserialize")," ) into ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink Row")," , and then write to the corresponding storage using Flink SQL ."),(0,r.kt)("h2",{id:"what-are-the-formats"},"What are the formats?"),(0,r.kt)("p",null,"Currently , InLong-sort provides CSV / KeyValue / JSON , and the corresponding InLongMsg packaging format ."),(0,r.kt)("h3",{id:"csv"},"CSV"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n<groupId>org.apache.inlong</groupId>\n<artifactId>sort-format-csv</artifactId>\n<version>${inlong.version}</version>\n</dependency>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.inlong.sort.formats.kv.KvFormatFactory")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Advanced"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"format.delimiter")),(0,r.kt)("td",{parentName:"tr",align:null},"char"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},",")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"format.escape-character")),(0,r.kt)("td",{parentName:"tr",align:null},"char"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"format.quote-character")),(0,r.kt)("td",{parentName:"tr",align:null},"char"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"format.null-literal")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"format.charset")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},'"UTF-8"'),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"format.ignore-errors")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"format.derive_schema")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Required if no format schema is defined ."),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Derives the format schema from the table's schema . This allows for defining schema information only once . ",(0,r.kt)("br",null)," The names , types , and fields' order of the format are determined by the table's schema . ",(0,r.kt)("br",null)," Time attributes are ignored if their origin is not a field . ",(0,r.kt)("br",null),' A "from" definition is interpreted as a field renaming in the format .')))),(0,r.kt)("h3",{id:"key-value"},"Key-Value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n<groupId>org.apache.inlong</groupId>\n<artifactId>sort-format-kv</artifactId>\n<version>${inlong.version}</version>\n</dependency>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.inlong.sort.formats.csv.CsvFormatFactory")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Advanced"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"format.entry-delimiter")),(0,r.kt)("td",{parentName:"tr",align:null},"char"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"'&'"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"format.kv-delimiter")),(0,r.kt)("td",{parentName:"tr",align:null},"char"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"'='"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"format.escape-character")),(0,r.kt)("td",{parentName:"tr",align:null},"char"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"format.quote-character")),(0,r.kt)("td",{parentName:"tr",align:null},"char"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"format.null-literal")),(0,r.kt)("td",{parentName:"tr",align:null},"char"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"format.charset")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},'"UTF-8"'),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"format.ignore-errors")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"format.derive_schema")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Required if no format schema is defined ."),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Derives the format schema from the table's schema . This allows for defining schema information only once . ",(0,r.kt)("br",null)," The names , types , and fields' order of the format are determined by the table's schema . ",(0,r.kt)("br",null)," Time attributes are ignored if their origin is not a field . ",(0,r.kt)("br",null),' A "from" definition is interpreted as a field renaming in the format .')))),(0,r.kt)("h3",{id:"json"},"JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n<groupId>org.apache.flink</groupId>\n<artifactId>flink-json</artifactId>\n<version>${flink.version}</version>\n</dependency>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.flink.formats.json.JsonFormatFactory")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.flink.formats.json.JsonOptions")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Advanced"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ignore-parse-errors")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional flag to skip fields and rows with parse errors instead of failing ; ",(0,r.kt)("br",null)," fields are set to null in case of errors , false by default .")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map-null-key.mode")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},'"FAIL"'),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},'Optional flag to control the handling mode when serializing null key for map data ." ',(0,r.kt)("br",null),' Option DROP will drop null key entries for map data ." ',(0,r.kt)("br",null)," Option LITERAL will use 'map-null-key.literal' as key literal .")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map-null-key.literal")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},'"null"'),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional flag to specify string literal for null keys when 'map-null-key.mode' is LITERAL .")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"encode.decimal-as-plain-number")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional flag to specify whether to encode all decimals as plain numbers instead of possible scientific notations , false by default .")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp-format.standard")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},'"SQL"'),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},'Optional flag to specify timestamp format , SQL by default ."',(0,r.kt)("br",null),' Option ISO-8601 will parse input timestamp in "yyyy-MM-ddTHH:mm:ss.s{precision}" format and output timestamp in the same format ."',(0,r.kt)("br",null),' Option SQL will parse input timestamp in "yyyy-MM-dd HH:mm:ss.s{precision}" format and output timestamp in the same format .')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"encode.decimal-as-plain-number")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional flag to specify whether to encode all decimals as plain numbers instead of possible scientific notations , false by default .")))))}u.isMDXComponent=!0},83618:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/format_and_flink-65dad61dae55e9aa7b697fd3fc41b910.png"},50254:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/the_format_in_inlong-f53068957d177750d03b42bd0c2cface.png"}}]);