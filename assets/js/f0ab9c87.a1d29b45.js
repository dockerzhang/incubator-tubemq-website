"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[97872],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=d(a),k=r,g=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(g,i(i({ref:e},s),{},{components:a})):n.createElement(g,i({ref:e},s))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},49353:(t,e,a)=>{a.d(e,{Y:()=>n});const n={inLongVersion:"1.13.0-SNAPSHOT"}},59356:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905)),l=a(49353);const i={title:"Pulsar",sidebar_position:9},o=void 0,p={unversionedId:"data_node/extract_node/pulsar",id:"data_node/extract_node/pulsar",title:"Pulsar",description:"Overview",source:"@site/docs/data_node/extract_node/pulsar.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/pulsar",permalink:"/docs/next/data_node/extract_node/pulsar",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/data_node/extract_node/pulsar.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Pulsar",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL-CDC",permalink:"/docs/next/data_node/extract_node/postgresql-cdc"},next:{title:"SQLServer-CDC",permalink:"/docs/next/data_node/extract_node/sqlserver-cdc"}},d={},s=[{value:"Overview",id:"overview",level:2},{value:"Version",id:"version",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Usage",id:"usage",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"Pulsar Extract Node Options",id:"pulsar-extract-node-options",level:2},{value:"Available Metadata",id:"available-metadata",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],u={toc:s},m="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/"},"Apache Pulsar")," is a distributed, open source pub-sub messaging and steaming platform for real-time workloads, managing hundreds of billions of events per day."),(0,r.kt)("h2",{id:"version"},"Version"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Extract Node"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/data_node/extract_node/pulsar"},"Pulsar")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/docs/next/"},"Pulsar"),": >= 2.8.x",(0,r.kt)("br",null))))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-pulsar</artifactId>\n    <version>${l.Y.inLongVersion}</version>\n</dependency>\n`)),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,r.kt)("p",null,"Step.1 Ready for sql client"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.12/dev/table/sqlClient.html"},"SQL Client")," is used to write SQL queries for manipulating data in Pulsar, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-addclasspath")," option to add ",(0,r.kt)("inlineCode",{parentName:"p"},"sort-connector-pulsar-{{INLONG_VERSION}}.jar")," package."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./bin/sql-client.sh embedded --jar sort-connector-pulsar_{{INLONG_VERSION}}.jar\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note\nIf you put the JAR package of our connector under ",(0,r.kt)("inlineCode",{parentName:"p"},"$FLINK_HOME/lib"),", do not use ",(0,r.kt)("inlineCode",{parentName:"p"},"--jar")," again to specify the package of the connector.")),(0,r.kt)("p",null,"Step.2 Read data from pulsar"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE pulsar (\n  `physical_1` STRING,\n  `physical_2` INT,\n  `eventTime` TIMESTAMP(3) METADATA,\n  `properties` MAP<STRING, STRING> METADATA ,\n  `topic` STRING METADATA VIRTUAL,\n  `sequenceId` BIGINT METADATA VIRTUAL,\n  `key` STRING ,\n  `physical_3` BOOLEAN\n) WITH (\n  'connector' = 'pulsar-inlong',\n  'topic' = 'persistent://public/default/topic82547611',\n  'key.format' = 'raw',\n  'key.fields' = 'key',\n  'value.format' = 'avro',\n  'service-url' = 'pulsar://localhost:6650',\n  'admin-url' = 'http://localhost:8080',\n  'scan.startup.mode' = 'earliest' \n)\n\nINSERT INTO `sink_table` \n    SELECT \n    `physical_1` AS `physical_1`,\n    `physical_2` AS `physical_2`\n    FROM `pulsar`\nINSERT INTO pulsar \nVALUES\n ('data 1', 1, TIMESTAMP '2020-03-08 13:12:11.123', MAP['k11', 'v11', 'k12', 'v12'], 'key1', TRUE),\n ('data 2', 2, TIMESTAMP '2020-03-09 13:12:11.123', MAP['k21', 'v21', 'k22', 'v22'], 'key2', FALSE),\n ('data 3', 3, TIMESTAMP '2020-03-10 13:12:11.123', MAP['k31', 'v31', 'k32', 'v32'], 'key3', TRUE)\n")),(0,r.kt)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h2",{id:"pulsar-extract-node-options"},"Pulsar Extract Node Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connector"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the connector type. Available options are ",(0,r.kt)("inlineCode",{parentName:"td"},"pulsar-inlong"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the input or output topic, use half comma for multiple and concatenate topics. Choose one with the topic-pattern.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic-pattern"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Use regular to get the matching topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service-url"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the Pulsar broker service address.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin-url"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the Pulsar administration service address.",(0,r.kt)("strong",{parentName:"td"},"When this parameter is not passed in, the ",(0,r.kt)("inlineCode",{parentName:"strong"},"startup mode")," only supports ",(0,r.kt)("inlineCode",{parentName:"strong"},"earliest")," and ",(0,r.kt)("inlineCode",{parentName:"strong"},"latest"),", and the offset in the pulsar cluster cannot be updated."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scan.startup.mode"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"latest"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Configure the Source's startup mode. Available options are ",(0,r.kt)("inlineCode",{parentName:"td"},"earliest"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"latest"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"external-subscription"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"specific-offsets"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scan.startup.specific-offsets"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"This parameter is required when the ",(0,r.kt)("inlineCode",{parentName:"td"},"specific-offsets")," parameter is specified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scan.startup.sub-name"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"This parameter is required when the ",(0,r.kt)("inlineCode",{parentName:"td"},"external-subscription")," parameter is specified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"discovery topic interval"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the time interval for partition discovery, in unit of milliseconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.message-router"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"key-hash"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the routing method for writing messages to the Pulsar partition. Available options are ",(0,r.kt)("inlineCode",{parentName:"td"},"key-hash"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"round-robin"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"custom MessageRouter"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.semantic"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"at-least-once"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The Sink writes the assurance level of the message. Available options are ",(0,r.kt)("inlineCode",{parentName:"td"},"at-least-once"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"exactly-once"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"none"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"properties"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"empty"),(0,r.kt)("td",{parentName:"tr",align:null},"Map"),(0,r.kt)("td",{parentName:"tr",align:null},"Set Pulsar's optional configurations, in a format of ",(0,r.kt)("inlineCode",{parentName:"td"},"properties.key='value'"),". For details, see ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/streamnative/pulsar-flink#configuration-parameters"},"Configuration parameters"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key.format"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the key-based serialization format for Pulsar messages. Available options are ",(0,r.kt)("inlineCode",{parentName:"td"},"No format"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"optional raw"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Avro"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"JSON"),", etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key.fields"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The SQL definition field to be used when serializing Key, multiple by half comma ",(0,r.kt)("inlineCode",{parentName:"td"},",")," concatenated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key.fields-prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Define a custom prefix for all fields in the key format to avoid name conflicts with fields in the value format. By default, the prefix is empty. If a custom prefix is defined, the Table schema and ",(0,r.kt)("inlineCode",{parentName:"td"},"key.fields")," are used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"format or value.format"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the name with a prefix. When constructing data types in the key format, the prefix is removed and non-prefixed names are used within the key format. Pulsar message value serialization format, support JSON, Avro, etc. For more information, see the Flink format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value.fields-include"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"ALL"),(0,r.kt)("td",{parentName:"tr",align:null},"Enum"),(0,r.kt)("td",{parentName:"tr",align:null},"The Pulsar message value contains the field policy, optionally ALL, and EXCEPT_KEY.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Inlong metric label, format of value is groupId=",(0,r.kt)("inlineCode",{parentName:"td"},"{groupId}"),"&streamId=",(0,r.kt)("inlineCode",{parentName:"td"},"{streamId}"),"&nodeId=",(0,r.kt)("inlineCode",{parentName:"td"},"{nodeId}"),".")))),(0,r.kt)("h2",{id:"available-metadata"},"Available Metadata"),(0,r.kt)("p",null,"The METADATA flag is used to read and write metadata in Pulsar messages. The support list is as follows."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note\nThe R/W column defines whether a metadata field is readable (R) and/or writable (W). Read-only columns must be declared VIRTUAL to exclude them during an INSERT INTO operation.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"R/W"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Topic name of the Pulsar message."),(0,r.kt)("td",{parentName:"tr",align:null},"R")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"messageId"),(0,r.kt)("td",{parentName:"tr",align:null},"BYTES NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Message ID of the Pulsar message."),(0,r.kt)("td",{parentName:"tr",align:null},"R")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sequenceId"),(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"sequence ID of the Pulsar message."),(0,r.kt)("td",{parentName:"tr",align:null},"R")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"publishTime"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP(3) WITH LOCAL TIME ZONE NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Publishing time of the Pulsar message."),(0,r.kt)("td",{parentName:"tr",align:null},"R")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventTime"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP(3) WITH LOCAL TIME ZONE NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Generation time of the Pulsar message."),(0,r.kt)("td",{parentName:"tr",align:null},"R/W")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"properties"),(0,r.kt)("td",{parentName:"tr",align:null},"MAP<STRING, STRING> NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Extensions information of the Pulsar message."),(0,r.kt)("td",{parentName:"tr",align:null},"R/W")))),(0,r.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.kt)("p",null,"Pulsar stores message keys and values as bytes, so Pulsar doesn\u2019t have schema or data types. The Pulsar messages are deserialized and serialized by formats, e.g. csv, json, avro. Thus, the data type mapping is determined by specific formats. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/"},"Formats")," pages for more details."))}k.isMDXComponent=!0}}]);