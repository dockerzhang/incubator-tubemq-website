"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[48905],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>c});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),k=l,c=m["".concat(d,".").concat(k)]||m[k]||s[k]||r;return n?a.createElement(c,o(o({ref:e},u),{},{components:n})):a.createElement(c,o({ref:e},u))}));function c(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,o=new Array(r);o[0]=k;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[m]="string"==typeof t?t:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},39322:(t,e,n)=>{n.d(e,{Y:()=>a});const a={inLongVersion:"1.6.0"}},34362:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=n(87462),l=(n(67294),n(3905)),r=n(39322);const o={title:"ClickHouse",sidebar_position:3},i=void 0,d={unversionedId:"data_node/load_node/clickhouse",id:"version-1.6.0/data_node/load_node/clickhouse",title:"ClickHouse",description:"Overview",source:"@site/versioned_docs/version-1.6.0/data_node/load_node/clickhouse.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/clickhouse",permalink:"/docs/1.6.0/data_node/load_node/clickhouse",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.6.0/data_node/load_node/clickhouse.md",tags:[],version:"1.6.0",sidebarPosition:3,frontMatter:{title:"ClickHouse",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Auto Consumption",permalink:"/docs/1.6.0/data_node/load_node/auto_consumption"},next:{title:"Elasticsearch",permalink:"/docs/1.6.0/data_node/load_node/elasticsearch"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Supported Version",id:"supported-version",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Maven dependency",id:"maven-dependency",level:3},{value:"How to create a ClickHouse Load Node",id:"how-to-create-a-clickhouse-load-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"ClickHouse Load Node Options",id:"clickhouse-load-node-options",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],m={toc:u},s="wrapper";function k(t){let{components:e,...o}=t;return(0,l.kt)(s,(0,a.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ClickHouse Load Node")," supports to write data into ClickHouse database. This document describes how to set up the ClickHouse Load\nNode to run SQL queries against ClickHouse database."),(0,l.kt)("h2",{id:"supported-version"},"Supported Version"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Load Node"),(0,l.kt)("th",{parentName:"tr",align:null},"Driver"),(0,l.kt)("th",{parentName:"tr",align:null},"Group Id"),(0,l.kt)("th",{parentName:"tr",align:null},"Artifact Id"),(0,l.kt)("th",{parentName:"tr",align:null},"JAR"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/1.6.0/data_node/load_node/clickhouse"},"ClickHouse")),(0,l.kt)("td",{parentName:"tr",align:null},"ClickHouse"),(0,l.kt)("td",{parentName:"tr",align:null},"ru.yandex.clickhouse"),(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse-jdbc"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/ru.yandex.clickhouse/clickhouse-jdbc"},"Download"))))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("p",null,"In order to set up the ",(0,l.kt)("inlineCode",{parentName:"p"},"ClickHouse Load Node"),", the following provides dependency information for both projects using a\nbuild automation tool (such as Maven or SBT) and SQL Client with Sort Connectors JAR bundles."),(0,l.kt)("h3",{id:"maven-dependency"},"Maven dependency"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-jdbc</artifactId>\n    <version>${r.Y.inLongVersion}</version>\n</dependency>\n`)),(0,l.kt)("h2",{id:"how-to-create-a-clickhouse-load-node"},"How to create a ClickHouse Load Node"),(0,l.kt)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"\n-- MySQL extract node\nCREATE TABLE `mysql_extract_table`(\n  PRIMARY KEY (`id`) NOT ENFORCED,\n  `id` BIGINT,\n  `name` STRING,\n  `age` INT\n) WITH (\n  'connector' = 'mysql-cdc-inlong',\n  'url' = 'jdbc:mysql://localhost:3306/read',\n  'username' = 'inlong',\n  'password' = 'inlong',\n  'table-name' = 'user'\n)\n\n-- ClickHouse load node\nCREATE TABLE `clickhouse_load_table`(\n  PRIMARY KEY (`id`) NOT ENFORCED,\n  `id` BIGINT,\n  `name` STRING,\n  `age` INT\n) WITH (\n  'connector' = 'jdbc-inlong',\n  'dialect-impl' = 'org.apache.inlong.sort.jdbc.dialect.ClickHouseDialect',\n  'url' = 'jdbc:clickhouse://localhost:8123/demo',\n  'username' = 'inlong',\n  'password' = 'inlong',\n  'table-name' = 'demo.user'\n)\n\n-- write data into ClickHouse\nINSERT INTO clickhouse_load_table \nSELECT id, name , age FROM mysql_extract_table;  \n\n")),(0,l.kt)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,l.kt)("p",null,"When creating a data flow, select ",(0,l.kt)("inlineCode",{parentName:"p"},"ClickHouse"),' for the data stream direction, and click "Add" to configure it.'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"ClickHouse Configuration",src:n(82784).Z,width:"1484",height:"1153"})),(0,l.kt)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,l.kt)("p",null,"TODO: It will be supported in the future."),(0,l.kt)("h2",{id:"clickhouse-load-node-options"},"ClickHouse Load Node Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connector"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify what connector to use, here should be 'jdbc-inlong'.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The JDBC database url.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dialect-impl"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"org.apache.inlong.sort.jdbc.dialect.ClickHouseDialect"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table-name"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of JDBC table to connect, for example ",(0,l.kt)("inlineCode",{parentName:"td"},"database.tableName"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"driver"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The class name of the JDBC driver to use to connect to this URL, if not set, it will automatically be derived from the URL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The JDBC user name. 'username' and 'password' must both be specified if any of them is specified.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The JDBC password.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection.max-retry-timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"60s"),(0,l.kt)("td",{parentName:"tr",align:null},"Duration"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum timeout between retries. The timeout should be in second granularity and shouldn't be smaller than 1 second.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.buffer-flush.max-rows"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"The max size of buffered records before flush. Can be set to zero to disable it.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.buffer-flush.interval"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"1s"),(0,l.kt)("td",{parentName:"tr",align:null},"Duration"),(0,l.kt)("td",{parentName:"tr",align:null},"The flush interval mills, over this time, asynchronous threads will flush data. Can be set to '0' to disable it. Note, 'sink.buffer-flush.max-rows' can be set to '0' with the flush interval set allowing for complete async processing of buffered actions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.max-retries"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"The max retry times if writing records to database failed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.parallelism"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the parallelism of the JDBC sink operator. By default, the parallelism is determined by the framework using the same parallelism of the upstream chained operator.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.ignore.changelog"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Ignore all ",(0,l.kt)("inlineCode",{parentName:"td"},"RowKind"),", ingest them as ",(0,l.kt)("inlineCode",{parentName:"td"},"INSERT"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Inlong metric label, format of value is groupId=",(0,l.kt)("inlineCode",{parentName:"td"},"{groupId}"),"&streamId=",(0,l.kt)("inlineCode",{parentName:"td"},"{streamId}"),"&nodeId=",(0,l.kt)("inlineCode",{parentName:"td"},"{nodeId}"),".")))),(0,l.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ClickHouse type"),(0,l.kt)("th",{parentName:"tr",align:null},"Flink SQL type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"CHAR")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"String ",(0,l.kt)("br",null)," IP ",(0,l.kt)("br",null)," UUID"),(0,l.kt)("td",{parentName:"tr",align:null},"VARCHAR")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"String ",(0,l.kt)("br",null)," EnumL"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FixedString"),(0,l.kt)("td",{parentName:"tr",align:null},"BYTES")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Decimal ",(0,l.kt)("br",null)," Int128 ",(0,l.kt)("br",null)," Int256 ",(0,l.kt)("br",null)," UInt64 ",(0,l.kt)("br",null)," UInt128 ",(0,l.kt)("br",null)," UInt256"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int8"),(0,l.kt)("td",{parentName:"tr",align:null},"TINYINT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int16 ",(0,l.kt)("br",null)," UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"SMALLINT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int32 ",(0,l.kt)("br",null)," UInt16 ",(0,l.kt)("br",null)," Interval"),(0,l.kt)("td",{parentName:"tr",align:null},"INTEGER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int64 ",(0,l.kt)("br",null)," UInt32"),(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Float32"),(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Date"),(0,l.kt)("td",{parentName:"tr",align:null},"DATE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"TIME")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP_LTZ")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int32"),(0,l.kt)("td",{parentName:"tr",align:null},"INTERVAL_YEAR_MONTH")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int64"),(0,l.kt)("td",{parentName:"tr",align:null},"INTERVAL_DAY_TIME")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Map"),(0,l.kt)("td",{parentName:"tr",align:null},"MAP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Not supported"),(0,l.kt)("td",{parentName:"tr",align:null},"ROW")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Not supported"),(0,l.kt)("td",{parentName:"tr",align:null},"MULTISET")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Not supported"),(0,l.kt)("td",{parentName:"tr",align:null},"RAW")))))}k.isMDXComponent=!0},82784:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/clickhouse-2681892cd085b810b8c1cc23a9534c49.png"}}]);