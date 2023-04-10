"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[55589],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(r),f=o,p=c["".concat(l,".").concat(f)]||c[f]||m[f]||s;return r?n.createElement(p,a(a({ref:t},d),{},{components:r})):n.createElement(p,a({ref:t},d))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},77295:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const s={title:"Overview",sidebar_position:1},a="overview",i={unversionedId:"modules/sort/overview",id:"version-1.0.0/modules/sort/overview",title:"Overview",description:"Inlong-sort is used to extract data from different source systems, then transforms the data and finally loads the data into diffrent storage systems.",source:"@site/versioned_docs/version-1.0.0/modules/sort/overview.md",sourceDirName:"modules/sort",slug:"/modules/sort/overview",permalink:"/docs/1.0.0/modules/sort/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.0.0/modules/sort/overview.md",tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Performance testing of TubeMQ vs Kafka",permalink:"/docs/1.0.0/modules/tubemq/tubemq_perf_test_vs_Kafka_cn"},next:{title:"Deployment",permalink:"/docs/1.0.0/modules/sort/quick_start"}},l={},u=[{value:"1 multi-tenancy",id:"1-multi-tenancy",level:2},{value:"2 change meta data without restart",id:"2-change-meta-data-without-restart",level:2},{value:"3 supported sources",id:"3-supported-sources",level:2},{value:"4 supported storages",id:"4-supported-storages",level:2},{value:"5 limitations",id:"5-limitations",level:2},{value:"6 future plans",id:"6-future-plans",level:2},{value:"6.1 More kinds of source systems",id:"61-more-kinds-of-source-systems",level:3},{value:"6.2 More kinds of storage systems",id:"62-more-kinds-of-storage-systems",level:3},{value:"6.3 More kinds of file format in hive sink",id:"63-more-kinds-of-file-format-in-hive-sink",level:3}],d={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"overview"),(0,o.kt)("p",null,"Inlong-sort is used to extract data from different source systems, then transforms the data and finally loads the data into diffrent storage systems.\nInlong-sort is simply an Flink application, and relys on Inlong-manager to manage meta data(such as the source informations and storage informations)"),(0,o.kt)("h1",{id:"features"},"features"),(0,o.kt)("h2",{id:"1-multi-tenancy"},"1 multi-tenancy"),(0,o.kt)("p",null,"Inlong-sort is an multi-tenancy system, which means you can extract data from different sources(these sources must be of the same source type) and load data into different sinks(these sinks must be of the same storage type).\ne.g. you can extract data form different topics of inlong-tubemq and the load them to different hive clusters."),(0,o.kt)("h2",{id:"2-change-meta-data-without-restart"},"2 change meta data without restart"),(0,o.kt)("p",null,"Inlong-sort uses zookeeper to manage its meta data, every time you change meta data on zk, inlong-sort application will be informed immediately.\ne.g if you want to change the schema of your data, just change the meta data on zk without restart your inlong-sort application."),(0,o.kt)("h2",{id:"3-supported-sources"},"3 supported sources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"inlong-tubemq"),(0,o.kt)("li",{parentName:"ul"},"pulsar")),(0,o.kt)("h2",{id:"4-supported-storages"},"4 supported storages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"clickhouse"),(0,o.kt)("li",{parentName:"ul"},"hive (Currently we just support parquet file format)")),(0,o.kt)("h2",{id:"5-limitations"},"5 limitations"),(0,o.kt)("p",null,"Currently, we just support extracting specified fields in the stage of ",(0,o.kt)("strong",{parentName:"p"},"Transform"),"."),(0,o.kt)("h2",{id:"6-future-plans"},"6 future plans"),(0,o.kt)("h3",{id:"61-more-kinds-of-source-systems"},"6.1 More kinds of source systems"),(0,o.kt)("p",null,"kafka and etc"),(0,o.kt)("h3",{id:"62-more-kinds-of-storage-systems"},"6.2 More kinds of storage systems"),(0,o.kt)("p",null,"Hbase, Elastic Search, and etc"),(0,o.kt)("h3",{id:"63-more-kinds-of-file-format-in-hive-sink"},"6.3 More kinds of file format in hive sink"),(0,o.kt)("p",null,"sequence file, orc"))}m.isMDXComponent=!0}}]);