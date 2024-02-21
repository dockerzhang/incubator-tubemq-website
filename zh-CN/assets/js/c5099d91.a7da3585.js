"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[34786],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},k="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),k=p(a),u=r,c=k["".concat(o,".").concat(u)]||k[u]||g[u]||l;return a?n.createElement(c,i(i({ref:e},m),{},{components:a})):n.createElement(c,i({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d[k]="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},81877:(t,e,a)=>{a.d(e,{Y:()=>n});const n={inLongVersion:"1.11.0-SNAPSHOT"}},59407:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(81877);const i={title:"Iceberg",sidebar_position:14},d=void 0,o={unversionedId:"data_node/extract_node/iceberg",id:"data_node/extract_node/iceberg",title:"Iceberg",description:"\u6982\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data_node/extract_node/iceberg.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/iceberg",permalink:"/zh-CN/docs/next/data_node/extract_node/iceberg",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/data_node/extract_node/iceberg.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Iceberg",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Hudi",permalink:"/zh-CN/docs/next/data_node/extract_node/hudi"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/next/data_node/load_node/overview"}},p={},m=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u7248\u672c",id:"\u7248\u672c",level:2},{value:"\u4f9d\u8d56\u9879",id:"\u4f9d\u8d56\u9879",level:2},{value:"\u914d\u7f6e Iceberg \u6570\u636e\u62bd\u53d6\u8282\u70b9",id:"\u914d\u7f6e-iceberg-\u6570\u636e\u62bd\u53d6\u8282\u70b9",level:2},{value:"Flink SQL API",id:"flink-sql-api",level:3},{value:"Dashboard",id:"dashboard",level:3},{value:"Manager Client",id:"manager-client",level:3},{value:"\u53c2\u6570\u4fe1\u606f",id:"\u53c2\u6570\u4fe1\u606f",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],k={toc:m},g="wrapper";function u(t){let{components:e,...i}=t;return(0,r.kt)(g,(0,n.Z)({},k,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://iceberg.apache.org/"},"Apache Iceberg")," \u662f\u4e00\u79cd\u7528\u4e8e\u5927\u578b\u5206\u6790\u8868\u7684\u9ad8\u6027\u80fd\u683c\u5f0f\u3002"),(0,r.kt)("h2",{id:"\u7248\u672c"},"\u7248\u672c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u63d0\u53d6\u8282\u70b9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/next/data_node/extract_node/iceberg"},"Iceberg")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://iceberg.apache.org/"},"Iceberg"),"\uff1a0.12.x\uff0c0.13.x")))),(0,r.kt)("h2",{id:"\u4f9d\u8d56\u9879"},"\u4f9d\u8d56\u9879"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-iceberg</artifactId>\n    <version>${l.Y.inLongVersion}</version>\n</dependency>\n`)),(0,r.kt)("h2",{id:"\u914d\u7f6e-iceberg-\u6570\u636e\u62bd\u53d6\u8282\u70b9"},"\u914d\u7f6e Iceberg \u6570\u636e\u62bd\u53d6\u8282\u70b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d ",(0,r.kt)("a",{parentName:"li",href:"https://hadoop.apache.org/releases.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Apache Hadoop"))),(0,r.kt)("li",{parentName:"ul"},"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"li"},"jobmanager.sh")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"taskmanager.sh"),"\uff0c\u52a0\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},"Hadoop")," \u73af\u5883\u53d8\u91cf\u3002\u542f\u52a8\u547d\u4ee4\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/flink/tree/master/flink-dist/src/main/flink-bin/bin"},"Apache Flink"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"li"},"docker/docker-compose")," \u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose.yml"),"\uff0c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"Hadoop")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"Flink \u542f\u52a8\u547d\u4ee4")," \u6302\u8f7d\u81f3\u5bb9\u5668\u4e2d:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'  jobmanager:\n    image: apache/flink:1.13-scala_2.11\n    container_name: jobmanager\n    user: root\n    environment:\n      - |\n        FLINK_PROPERTIES=\n        jobmanager.rpc.address: jobmanager\n    volumes:\n      # Mount Hadoop\n      - HADOOP_HOME:HADOOP_HOME\n      # Mount the modified jobmanager.sh which adds the HADOOP_HOME env correctly\n      - /jobmanager.sh:/opt/flink/bin/jobmanager.sh\n    ports:\n      - "8081:8081"\n    command: jobmanager\n\n  taskmanager:\n    image: apache/flink:1.13-scala_2.11\n    container_name: taskmanager\n    environment:\n      - |\n        FLINK_PROPERTIES=\n        jobmanager.rpc.address: jobmanager\n        taskmanager.numberOfTaskSlots: 2\n    volumes:\n      # Mount Hadoop\n      - HADOOP_HOME:HADOOP_HOME\n      # Mount the modified taskmanager.sh which adds the HADOOP_HOME env correctly\n      - /taskmanager.sh:/opt/flink/bin/taskmanager.sh\n    command: taskmanager\n')),(0,r.kt)("h3",{id:"flink-sql-api"},"Flink SQL API"),(0,r.kt)("p",null,"\u4f7f\u7528 Flink sql client \u4e4b\u524d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"sql-client.sh")," \u542f\u52a8\u547d\u4ee4\u4e5f\u9700\u8981\u6dfb\u52a0 Hadoop \u73af\u5883\u53d8\u91cf\uff0c\u5e76\u6302\u8f7d\u81f3\u5bb9\u5668\u3002\n\u542f\u52a8\u547d\u4ee4\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/flink/blob/master/flink-table/flink-sql-client/bin/sql-client.sh"},"Apache Flink")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n")),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink sql cli"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE TABLE `iceberg_table_source`(\n    PRIMARY KEY (`_id`) NOT ENFORCED,\n    `_id` STRING,\n    `id` INT,\n    `name` STRING,\n    `age` INT)\n    WITH (\n    'connector' = 'iceberg-inlong',\n    'catalog-database' = 'DATABASES',\n    'catalog-table' = 'TABLE',\n    'catalog-type' = 'HIVE',\n    'catalog-name' = 'HIVE',\n    'streaming' = 'true',\n    'uri' = 'thrift://127.0.0.1:9083'\n);\n")),(0,r.kt)("h3",{id:"dashboard"},"Dashboard"),(0,r.kt)("p",null,"\u9875\u9762\u70b9\u51fb \u6570\u636e\u6e90 \u2192 \u65b0\u5efa \u2192 Iceberg"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img.png",src:a(38328).Z,width:"674",height:"517"})),(0,r.kt)("h3",{id:"manager-client"},"Manager Client"),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h2",{id:"\u53c2\u6570\u4fe1\u606f"},"\u53c2\u6570\u4fe1\u606f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connector"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8981\u4f7f\u7528\u7684 Connector\uff0c\u8fd9\u91cc\u5e94\u8be5\u662f 'iceberg-inlong'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"catalog-database"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728 Iceberg \u76ee\u5f55\u4e2d\u7ba1\u7406\u7684\u6570\u636e\u5e93\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"catalog-table"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728 Iceberg \u76ee\u5f55\u548c\u6570\u636e\u5e93\u4e2d\u7ba1\u7406\u7684\u8868\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"catalog-type"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hive")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"td"},"hadoop")," \u7528\u4e8e\u5185\u7f6e\u76ee\u5f55")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"catalog-name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76ee\u5f55\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uri"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Hive \u5143\u5b58\u50a8\u7684 thrift URI\uff0c\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},"thrift://127.0.0.1:9083"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"warehouse"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u4e8e Hive \u76ee\u5f55\uff0c\u662f Hive \u4ed3\u5e93\u4f4d\u7f6e\u3002\u5bf9\u4e8e hadoop \u76ee\u5f55\uff0c\u662f HDFS \u76ee\u5f55\u5b58\u653e\u5143\u6570\u636e\u6587\u4ef6\u548c\u6570\u636e\u6587\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728 long metric label \u4e2d\uff0cvalue \u7684\u683c\u5f0f\u4e3a groupId=xxgroup&streamId=xxstream&nodeId=xxnode")))),(0,r.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flink SQL Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Iceberg Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CHAR"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BINARY"),(0,r.kt)("td",{parentName:"tr",align:null},"FIXED(L)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VARBINARY"),(0,r.kt)("td",{parentName:"tr",align:null},"BINARY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL(P,S)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.kt)("td",{parentName:"tr",align:null},"INT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.kt)("td",{parentName:"tr",align:null},"INT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:null},"INT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.kt)("td",{parentName:"tr",align:null},"LONG")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"DATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIME"),(0,r.kt)("td",{parentName:"tr",align:null},"TIME")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP_LTZ"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMPTZ")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTERVAL"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.kt)("td",{parentName:"tr",align:null},"LIST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MULTISET"),(0,r.kt)("td",{parentName:"tr",align:null},"MAP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MAP"),(0,r.kt)("td",{parentName:"tr",align:null},"MAP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ROW"),(0,r.kt)("td",{parentName:"tr",align:null},"STRUCT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RAW"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))))}u.isMDXComponent=!0},38328:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/iceberg-source-968077d8745a458c843ffa48720e2f3d.png"}}]);