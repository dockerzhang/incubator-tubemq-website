"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[90463],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),u=p(n),N=r,c=u["".concat(o,".").concat(N)]||u[N]||k[N]||l;return n?a.createElement(c,i(i({ref:e},m),{},{components:n})):a.createElement(c,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=N;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d[u]="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},19923:(t,e,n)=>{n.d(e,{Y:()=>a});const a={inLongVersion:"1.5.0"}},54376:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>N,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),l=n(19923);const i={title:"Hudi",sidebar_position:12},d=void 0,o={unversionedId:"data_node/extract_node/hudi",id:"version-1.5.0/data_node/extract_node/hudi",title:"Hudi",description:"\u6982\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.5.0/data_node/extract_node/hudi.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/hudi",permalink:"/zh-CN/docs/1.5.0/data_node/extract_node/hudi",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.5.0/data_node/extract_node/hudi.md",tags:[],version:"1.5.0",sidebarPosition:12,frontMatter:{title:"Hudi",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"TubeMQ",permalink:"/zh-CN/docs/1.5.0/data_node/extract_node/tube"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.5.0/data_node/load_node/overview"}},p={},m=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u652f\u6301\u7684\u7248\u672c",id:"\u652f\u6301\u7684\u7248\u672c",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:3},{value:"Maven \u4f9d\u8d56",id:"maven-\u4f9d\u8d56",level:3},{value:"\u5982\u4f55\u914d\u7f6e Hudi \u6570\u636e\u62bd\u53d6\u8282\u70b9",id:"\u5982\u4f55\u914d\u7f6e-hudi-\u6570\u636e\u62bd\u53d6\u8282\u70b9",level:2},{value:"SQL API \u7684\u4f7f\u7528",id:"sql-api-\u7684\u4f7f\u7528",level:3},{value:"Dashboard \u65b9\u5f0f",id:"dashboard-\u65b9\u5f0f",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:4},{value:"InLong Manager Client \u65b9\u5f0f",id:"inlong-manager-client-\u65b9\u5f0f",level:3},{value:"Hudi \u62bd\u53d6\u8282\u70b9\u53c2\u6570\u4fe1\u606f",id:"hudi-\u62bd\u53d6\u8282\u70b9\u53c2\u6570\u4fe1\u606f",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],u={toc:m},k="wrapper";function N(t){let{components:e,...i}=t;return(0,r.kt)(k,(0,a.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://hudi.apache.org/cn/docs/overview/"},"Apache Hudi"),' (\u53d1\u97f3\u4e3a"hoodie")\u662f\u4e0b\u4e00\u4ee3\u6d41\u5f0f\u6570\u636e\u6e56\u5e73\u53f0\u3002\nApache Hudi \u5c06\u6838\u5fc3\u4ed3\u5e93\u548c\u6570\u636e\u5e93\u529f\u80fd\u76f4\u63a5\u5e26\u5230\u6570\u636e\u6e56\u4e2d\u3002\nHudi \u63d0\u4f9b\u8868\u3001\u4e8b\u52a1\u3001\u9ad8\u6548\u7684 upserts/delete\u3001\u9ad8\u7ea7\u7d22\u5f15\u3001\u6d41\u6444\u5165\u670d\u52a1\u3001\u6570\u636e\u805a\u7c7b/\u538b\u7f29\u4f18\u5316\u548c\u5e76\u53d1\uff0c\u540c\u65f6\u4fdd\u6301\u6570\u636e\u7684\u5f00\u6e90\u6587\u4ef6\u683c\u5f0f\u3002'),(0,r.kt)("h2",{id:"\u652f\u6301\u7684\u7248\u672c"},"\u652f\u6301\u7684\u7248\u672c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Load Node"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.5.0/data_node/extract_node/hudi"},"Hudi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://hudi.apache.org/cn/docs/quick-start-guide"},"Hudi"),": 0.12+")))),(0,r.kt)("h3",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Maven")," \u5f15\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"sort-connector-hudi")," \u6784\u5efa\u81ea\u5df1\u7684\u9879\u76ee\u3002\n\u5f53\u7136\uff0c\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"INLONG")," \u63d0\u4f9b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"jar")," \u5305\u3002(",(0,r.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"sort-connector-hudi"),")"),(0,r.kt)("h3",{id:"maven-\u4f9d\u8d56"},"Maven \u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-hudi</artifactId>\n    <version>${l.Y.inLongVersion}</version>\n</dependency>\n`)),(0,r.kt)("h2",{id:"\u5982\u4f55\u914d\u7f6e-hudi-\u6570\u636e\u62bd\u53d6\u8282\u70b9"},"\u5982\u4f55\u914d\u7f6e Hudi \u6570\u636e\u62bd\u53d6\u8282\u70b9"),(0,r.kt)("h3",{id:"sql-api-\u7684\u4f7f\u7528"},"SQL API \u7684\u4f7f\u7528"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink SQL Cli")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `hudi_table_name` (\n  id STRING,\n  name STRING,\n  uv BIGINT,\n  pv BIGINT\n) WITH (\n    'connector' = 'hudi-inlong',\n    'path' = 'hdfs://127.0.0.1:90001/data/warehouse/hudi_db_name.db/hudi_table_name',\n    'uri' = 'thrift://127.0.0.1:8091',\n    'hoodie.database.name' = 'hudi_db_name',\n    'hoodie.table.name' = 'hudi_table_name',\n    'read.streaming.check-interval'='1',\n    'read.streaming.enabled'='true',\n    'read.streaming.skip_compaction'='true',\n    'read.start-commit'='20221220121000',\n    --\n    'hoodie.bucket.index.hash.field' = 'id',\n    -- compaction\n    'compaction.tasks' = '10',\n    'compaction.async.enabled' = 'true',\n    'compaction.schedule.enabled' = 'true',\n    'compaction.max_memory' = '3096',\n    'compaction.trigger.strategy' = 'num_or_time',\n    'compaction.delta_commits' = '5',\n    'compaction.max_memory' = '3096',\n    --\n    'hoodie.keep.min.commits' = '1440',\n    'hoodie.keep.max.commits' = '2880',\n    'clean.async.enabled' = 'true',\n    --\n    'write.operation' = 'upsert',\n    'write.bucket_assign.tasks' = '60',\n    'write.tasks' = '60',\n    'write.log_block.size' = '128',\n    --\n    'index.type' = 'BUCKET',\n    'metadata.enabled' = 'false',\n    'hoodie.bucket.index.num.buckets' = '20',\n    'table.type' = 'MERGE_ON_READ',\n    'clean.retain_commits' = '30',\n    'hoodie.cleaner.policy' = 'KEEP_LATEST_COMMITS'\n);\n")),(0,r.kt)("h3",{id:"dashboard-\u65b9\u5f0f"},"Dashboard \u65b9\u5f0f"),(0,r.kt)("h4",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u5728\u521b\u5efa\u6570\u636e\u6d41\u65f6\uff0c\u9009\u62e9\u6570\u636e\u843d\u5730\u4e3a 'hudi' \u7136\u540e\u70b9\u51fb 'Add' \u6765\u914d\u7f6e Hudi \u7684\u76f8\u5173\u4fe1\u606f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hudi Configuration",src:n(91698).Z,width:"1328",height:"1246"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5bf9\u5e94SQL DDL\u4e2d\u7684\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DB\u540d\u79f0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.database.name")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e93\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\u8868\u540d")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hudi_table_name")),(0,r.kt)("td",{parentName:"tr",align:null},"hudi\u8868\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\u662f\u5426\u521b\u5efa\u8d44\u6e90")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u5e93\u8868\u5df2\u7ecf\u5b58\u5728\uff0c\u4e14\u65e0\u9700\u4fee\u6539\uff0c\u5219\u9009\u3010\u4e0d\u521b\u5efa\u3011\uff1b",(0,r.kt)("br",null),"\u5426\u5219\u8bf7\u9009\u62e9\u3010\u521b\u5efa\u3011\uff0c\u7531\u7cfb\u7edf\u81ea\u52a8\u521b\u5efa\u8d44\u6e90\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Catalog URI")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uri")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5143\u6570\u636e\u670d\u52a1\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\u4ed3\u5e93\u8def\u5f84")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"hudi\u8868\u5b58\u50a8\u5728HDFS\u4e2d\u7684\u4f4d\u7f6e",(0,r.kt)("br",null),"\u5728SQL DDL\u4e2dpath\u5c5e\u6027\u662f\u5c06",(0,r.kt)("inlineCode",{parentName:"td"},"\u4ed3\u5e93\u8def\u5f84"),"\u4e0e\u5e93\u3001\u8868\u540d\u79f0\u62fc\u63a5\u5728\u4e00\u8d77")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\u8df3\u8fc7\u5408\u5e76\u4e2d\u7684\u63d0\u4ea4")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"read.streaming.skip_compaction")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d41\u8bfb\u65f6\u662f\u5426\u8df3\u8fc7 compaction \u7684 commits\uff0c\u8df3\u8fc7 compaction \u6709\u4e24\u4e2a\u7528\u9014\uff1a1\uff09\u907f\u514d upsert \u8bed\u4e49 \u4e0b\u91cd\u590d\u6d88\u8d39(compaction \u7684 instant \u4e3a\u91cd\u590d\u6570\u636e\uff0c\u5982\u679c\u4e0d\u8df3\u8fc7\uff0c\u6709\u5c0f\u6982\u7387\u4f1a\u91cd\u590d\u6d88\u8d39\uff09; 2) changelog \u6a21\u5f0f\u4e0b\u4fdd\u8bc1\u8bed\u4e49\u6b63\u786e\u6027\u3002 0.11 \u5f00\u59cb\uff0c\u4ee5\u4e0a\u4e24\u4e2a\u95ee\u9898\u5df2\u7ecf\u901a\u8fc7\u4fdd\u7559 compaction \u7684 instant time \u4fee\u590d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\u8d77\u59cb\u7684commit")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"read.start-commit")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8d77\u59cbcommit, \u683c\u5f0f\u4e3a",(0,r.kt)("inlineCode",{parentName:"td"},"yyyyMMddHHmmss"))))),(0,r.kt)("h3",{id:"inlong-manager-client-\u65b9\u5f0f"},"InLong Manager Client \u65b9\u5f0f"),(0,r.kt)("p",null,"TODO: \u672a\u6765\u7248\u672c\u652f\u6301"),(0,r.kt)("h2",{id:"hudi-\u62bd\u53d6\u8282\u70b9\u53c2\u6570\u4fe1\u606f"},"Hudi \u62bd\u53d6\u8282\u70b9\u53c2\u6570\u4fe1\u606f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connector"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8981\u4f7f\u7528\u7684Connector\uff0c\u8fd9\u91cc\u5e94\u8be5\u662f'hudi-inlong'\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uri"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u914d\u7f6e\u5355\u5143\u540c\u6b65\u7684 Metastore uris")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u4fdd\u5b58hudi\u8868\u7684\u6587\u4ef6\u76ee\u5f55")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hoodie.database.name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u7528\u4e8e\u589e\u91cf\u67e5\u8be2\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002\u5982\u679c\u4e0d\u540c\u6570\u636e\u5e93\u5728\u589e\u91cf\u67e5\u8be2\u65f6\u6709\u76f8\u540c\u7684\u8868\u540d\uff0c\u6211\u4eec\u53ef\u4ee5\u8bbe\u7f6e\u5b83\u6765\u9650\u5236\u7279\u5b9a\u6570\u636e\u5e93\u4e0b\u7684\u8868\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hoodie.table.name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u7528\u4e8e\u5411 Hive \u6ce8\u518c\u7684\u8868\u540d\u3002 \u9700\u8981\u5728\u8fd0\u884c\u4e2d\u4fdd\u6301\u4e00\u81f4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"read.start-commit")),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"td"},"yyyyMMddHHmmss"),"\u683c\u5f0f\u7684\u8d77\u59cbcommit(\u95ed\u533a\u95f4)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"read.streaming.skip_compaction")),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d41\u8bfb\u65f6\u662f\u5426\u8df3\u8fc7 compaction \u7684 commits(\u9ed8\u8ba4\u4e0d\u8df3\u8fc7)\uff0c\u8df3\u8fc7 compaction \u6709\u4e24\u4e2a\u7528\u9014\uff1a1\uff09\u907f\u514d upsert \u8bed\u4e49 \u4e0b\u91cd\u590d\u6d88\u8d39(compaction \u7684 instant \u4e3a\u91cd\u590d\u6570\u636e\uff0c\u5982\u679c\u4e0d\u8df3\u8fc7\uff0c\u6709\u5c0f\u6982\u7387\u4f1a\u91cd\u590d\u6d88\u8d39\uff09; 2) changelog \u6a21\u5f0f\u4e0b\u4fdd\u8bc1\u8bed\u4e49\u6b63\u786e\u6027\u3002 0.11 \u5f00\u59cb\uff0c\u4ee5\u4e0a\u4e24\u4e2a\u95ee\u9898\u5df2\u7ecf\u901a\u8fc7\u4fdd\u7559 compaction \u7684 instant time \u4fee\u590d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728long metric label\u4e2d\uff0cvalue\u7684\u683c\u5f0f\u4e3agroupId=xxgroup&streamId=xxstream&nodeId=xxnode\u3002")))),(0,r.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Hive type"),(0,r.kt)("th",{parentName:"tr",align:null},"Flink SQL type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"char(p)"),(0,r.kt)("td",{parentName:"tr",align:null},"CHAR(p)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"varchar(p)"),(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR(p)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tinyint"),(0,r.kt)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"smallint"),(0,r.kt)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"INT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"decimal(p, s)"),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL(p, s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"DATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp(9)"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"BINARY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"LIST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"map"),(0,r.kt)("td",{parentName:"tr",align:null},"MAP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"row"),(0,r.kt)("td",{parentName:"tr",align:null},"STRUCT")))))}N.isMDXComponent=!0},91698:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/hudi-be071c2ae4e874216b288771eca7fed2.png"}}]);