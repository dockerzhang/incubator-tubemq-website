"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[54090],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>N});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=a.createContext({}),o=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=o(t.components);return a.createElement(d.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),m=o(n),g=l,N=m["".concat(d,".").concat(g)]||m[g]||u[g]||r;return n?a.createElement(N,i(i({ref:e},k),{},{components:n})):a.createElement(N,i({ref:e},k))}));function N(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=g;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[m]="string"==typeof t?t:l,i[1]=p;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},38498:(t,e,n)=>{n.d(e,{Y:()=>a});const a={inLongVersion:"1.11.0-SNAPSHOT"}},65734:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>k});var a=n(87462),l=(n(67294),n(3905)),r=n(38498);const i={title:"Iceberg",sidebar_position:9},p=void 0,d={unversionedId:"data_node/load_node/iceberg",id:"version-1.11.0/data_node/load_node/iceberg",title:"Iceberg",description:"\u6982\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.11.0/data_node/load_node/iceberg.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/iceberg",permalink:"/zh-CN/docs/1.11.0/data_node/load_node/iceberg",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.11.0/data_node/load_node/iceberg.md",tags:[],version:"1.11.0",sidebarPosition:9,frontMatter:{title:"Iceberg",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Hive",permalink:"/zh-CN/docs/1.11.0/data_node/load_node/hive"},next:{title:"Kafka",permalink:"/zh-CN/docs/1.11.0/data_node/load_node/kafka"}},o={},k=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u7248\u672c",id:"\u7248\u672c",level:2},{value:"\u4f9d\u8d56\u9879",id:"\u4f9d\u8d56\u9879",level:2},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"SQL API \u7528\u6cd5",id:"sql-api-\u7528\u6cd5",level:3},{value:"InLong Dashboard \u7528\u6cd5",id:"inlong-dashboard-\u7528\u6cd5",level:3},{value:"InLong Manager Client \u7528\u6cd5",id:"inlong-manager-client-\u7528\u6cd5",level:3},{value:"\u7279\u5f81",id:"\u7279\u5f81",level:2},{value:"\u591a\u8868\u5199\u5165",id:"\u591a\u8868\u5199\u5165",level:3},{value:"\u52a8\u6001\u8868\u540d\u6620\u5c04",id:"\u52a8\u6001\u8868\u540d\u6620\u5c04",level:3},{value:"\u52a8\u6001\u5efa\u5e93\u3001\u5efa\u8868",id:"\u52a8\u6001\u5efa\u5e93\u5efa\u8868",level:3},{value:"\u52a8\u6001schema\u53d8\u66f4",id:"\u52a8\u6001schema\u53d8\u66f4",level:3},{value:"Iceberg Load \u8282\u70b9\u53c2\u6570",id:"iceberg-load-\u8282\u70b9\u53c2\u6570",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],m={toc:k},u="wrapper";function g(t){let{components:e,...n}=t;return(0,l.kt)(u,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://iceberg.apache.org/"},"Apache Iceberg"),"\u662f\u4e00\u79cd\u7528\u4e8e\u5927\u578b\u5206\u6790\u8868\u7684\u9ad8\u6027\u80fd\u683c\u5f0f\u3002"),(0,l.kt)("h2",{id:"\u7248\u672c"},"\u7248\u672c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u63d0\u53d6\u8282\u70b9"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.11.0/data_node/load_node/iceberg"},"Iceberg")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://dev.mysql.com/doc"},"Iceberg"),"\uff1a0.12.x\uff0c0.13.x")))),(0,l.kt)("h2",{id:"\u4f9d\u8d56\u9879"},"\u4f9d\u8d56\u9879"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-iceberg</artifactId>\n    <version>${r.Y.inLongVersion}</version>\n</dependency>\n`)),(0,l.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,l.kt)("h3",{id:"sql-api-\u7528\u6cd5"},"SQL API \u7528\u6cd5"),(0,l.kt)("p",null,"\u5728 flink \u4e2d\u521b\u5efaIceberg\u8868\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-stable/dev/table/sqlClient.html"},"Flink SQL Client"),"\uff0c\u56e0\u4e3a\u5b83\u66f4\u4fbf\u4e8e\u7528\u6237\u7406\u89e3\u6982\u5ff5\u3002"),(0,l.kt)("p",null,"Step.1 \u5728hadoop\u73af\u5883\u4e0b\u542f\u52a8\u4e00\u4e2a\u72ec\u7acb\u7684flink\u96c6\u7fa4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# HADOOP_HOME is your hadoop root directory after unpack the binary package.\nexport HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n\n# Start the flink standalone cluster\n./bin/start-cluster.sh\n")),(0,l.kt)("p",null,"Step.2 \u542f\u52a8flink SQL\u5ba2\u6237\u7aef\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"flink-runtime"),"\u5728 iceberg \u9879\u76ee\u4e2d\u521b\u5efa\u4e86\u4e00\u4e2a\u5355\u72ec\u7684\u6a21\u5757\u6765\u751f\u6210\u4e00\u4e2a\u6346\u7ed1\u7684 jar\uff0c\u53ef\u4ee5\u76f4\u63a5\u7531 flink SQL \u5ba2\u6237\u7aef\u52a0\u8f7d\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60f3\u8981",(0,l.kt)("inlineCode",{parentName:"p"},"flink-runtime"),"\u624b\u52a8\u6784\u5efa\u6346\u7ed1\u7684 jar\uff0c\u53ea\u9700\u6784\u5efa",(0,l.kt)("inlineCode",{parentName:"p"},"inlong"),"\u9879\u76ee\uff0c\u5b83\u5c06\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"<inlong-root-dir>/inlong-sort/sort-connectors/iceberg/target"),"\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0ciceberg \u5305\u542b\u7528\u4e8e hadoop \u76ee\u5f55\u7684 hadoop jars\u3002\u5982\u679c\u6211\u4eec\u8981\u4f7f\u7528 hive \u76ee\u5f55\uff0c\u6211\u4eec\u9700\u8981\u5728\u6253\u5f00 flink sql \u5ba2\u6237\u7aef\u65f6\u52a0\u8f7d hive jars\u3002\u5e78\u8fd0\u7684\u662f\uff0capache inlong\u5c06 \u4e00\u4e2a\u6346\u7ed1\u7684hive jar\u6253\u5305\u8fdb\u5165Iceberg\u3002\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u5982\u4e0b\u6253\u5f00sql\u5ba2\u6237\u7aef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# HADOOP_HOME is your hadoop root directory after unpack the binary package.\nexport HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n\n./bin/sql-client.sh embedded -j <flink-runtime-directory>/iceberg-flink-runtime-xxx.jar shell\n")),(0,l.kt)("p",null,"Step.3 \u5728\u5f53\u524d Flink \u76ee\u5f55\u4e2d\u521b\u5efa\u8868"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u521b\u5efa\u76ee\u5f55\uff0c\u53ea\u9700\u4f7f\u7528\u5185\u5b58\u76ee\u5f55\u5373\u53ef\u3002\u5728\u76ee\u5f55\u4e2d\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"catalog-database.catalog-table"),"\u4e0d\u5b58\u5728\uff0c\u4f1a\u81ea\u52a8\u521b\u5efa\u3002\u8fd9\u91cc\u6211\u4eec\u53ea\u662f\u52a0\u8f7d\u6570\u636e\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5728 Hive \u76ee\u5f55\u4e2d\u7ba1\u7406\u7684\u8868")),(0,l.kt)("p",null,"\u4e0b\u9762\u7684 SQL \u4f1a\u5728\u5f53\u524d Flink \u76ee\u5f55\u4e2d\u521b\u5efa\u4e00\u4e2a Flink \u8868\uff0c\u6620\u5c04\u5230 iceberg \u76ee\u5f55\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},"default_database.iceberg_table"),"\u7ba1\u7406\u7684 iceberg \u8868\u3002\u7531\u4e8e\u76ee\u5f55\u7c7b\u578b\u9ed8\u8ba4\u662f hive\uff0c\u6240\u4ee5\u8fd9\u91cc\u4e0d\u9700\u8981\u653e",(0,l.kt)("inlineCode",{parentName:"p"},"catalog-type"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE TABLE flink_table (\n    id   BIGINT,\n    data STRING\n) WITH (\n    'connector'='iceberg',\n    'catalog-name'='hive_prod',\n    'uri'='thrift://localhost:9083',\n    'warehouse'='hdfs://nn:8020/path/to/warehouse'\n);\n")),(0,l.kt)("p",null,"\u5982\u679c\u8981\u521b\u5efa Flink \u8868\u6620\u5c04\u5230 Hive \u76ee\u5f55\u4e2d\u7ba1\u7406\u7684\u4e0d\u540cIceberg\u8868\uff08\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"hive_db.hive_iceberg_table"),"\u5728 Hive \u4e2d\uff09\uff0c\u5219\u53ef\u4ee5\u521b\u5efa Flink \u8868\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE TABLE flink_table (\n    id   BIGINT,\n    data STRING\n) WITH (\n    'connector'='iceberg',\n    'catalog-name'='hive_prod',\n    'catalog-database'='hive_db',\n    'catalog-table'='hive_iceberg_table',\n    'uri'='thrift://localhost:9083',\n    'warehouse'='hdfs://nn:8020/path/to/warehouse'\n);\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5c06\u8bb0\u5f55\u5199\u5165 Flink \u8868\u65f6\uff0c\u5982\u679c\u5e95\u5c42\u76ee\u5f55\u6570\u636e\u5e93\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"hive_db"),"\u4e0a\u4f8b\u4e2d\uff09\u4e0d\u5b58\u5728\uff0c\u5219\u4f1a\u81ea\u52a8\u521b\u5efa\u5b83\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5728 hadoop \u76ee\u5f55\u4e2d\u7ba1\u7406\u7684\u8868")),(0,l.kt)("p",null,"\u4ee5\u4e0b SQL \u5c06\u5728\u5f53\u524d Flink \u76ee\u5f55\u4e2d\u521b\u5efa\u4e00\u4e2a Flink \u8868\uff0c\u8be5\u8868\u6620\u5c04\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"default_database.flink_table"),"hadoop \u76ee\u5f55\u4e2d\u7ba1\u7406Iceberg\u8868\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE TABLE flink_table (\n    id   BIGINT,\n    data STRING\n) WITH (\n    'connector'='iceberg',\n    'catalog-name'='hadoop_prod',\n    'catalog-type'='hadoop',\n    'warehouse'='hdfs://nn:8020/path/to/warehouse'\n);\n")),(0,l.kt)("p",null,"Step.6 \u5411Iceberg\u8868\u4e2d\u63d2\u5165\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"INSERT INTO `flink_table` \n    SELECT \n    `id` AS `id`,\n    `d` AS `name`\n    FROM `source_table`\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5728\u81ea\u5b9a\u4e49Catalog\u4e2d\u7ba1\u7406\u7684\u8868")),(0,l.kt)("p",null,"\u4ee5\u4e0b SQL \u5c06\u5728\u5f53\u524d Flink \u76ee\u5f55\u4e2d\u521b\u5efa\u4e00\u4e2a Flink \u8868\uff0c\u8be5\u8868\u6620\u5c04\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"default_database.flink_table"),"\u81ea\u5b9a\u4e49\u76ee\u5f55\u4e2d\u7ba1\u7406\u7684Iceberg\u8868\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE TABLE flink_table (\n    id   BIGINT,\n    data STRING\n) WITH (\n    'connector'='iceberg',\n    'catalog-name'='custom_prod',\n    'catalog-type'='custom',\n    'catalog-impl'='com.my.custom.CatalogImpl',\n     -- More table properties for the customized catalog\n    'my-additional-catalog-config'='my-value',\n     ...\n);\n")),(0,l.kt)("p",null,"\u8bf7\u68c0\u67e5\u201c\u96c6\u6210\u201d\u9009\u9879\u5361\u4e0b\u7684\u90e8\u5206\u4ee5\u83b7\u53d6\u6240\u6709\u81ea\u5b9a\u4e49\u76ee\u5f55\u3002"),(0,l.kt)("h3",{id:"inlong-dashboard-\u7528\u6cd5"},"InLong Dashboard \u7528\u6cd5"),(0,l.kt)("p",null,"TODO"),(0,l.kt)("h3",{id:"inlong-manager-client-\u7528\u6cd5"},"InLong Manager Client \u7528\u6cd5"),(0,l.kt)("p",null,"TODO"),(0,l.kt)("h2",{id:"\u7279\u5f81"},"\u7279\u5f81"),(0,l.kt)("h3",{id:"\u591a\u8868\u5199\u5165"},"\u591a\u8868\u5199\u5165"),(0,l.kt)("p",null,"\u76ee\u524d Iceberg \u652f\u6301\u591a\u8868\u540c\u65f6\u5199\u5165\uff0c\u9700\u8981\u5728 FLINK SQL \u7684\u5efa\u8868\u53c2\u6570\u4e0a\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"'sink.multiple.enable' = 'true'")," \u5e76\u4e14\u76ee\u6807\u8868\u7684schema\n\u53ea\u80fd\u5b9a\u4e49\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"BYTES")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"STRING")," \uff0c\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5efa\u8868\u8bed\u53e5\u4e3e\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE TABLE `table_2`(\n    `data` STRING)\nWITH (\n    'connector'='iceberg-inlong',\n    'catalog-name'='hive_prod',\n    'uri'='thrift://localhost:9083',\n    'warehouse'='hdfs://localhost:8020/hive/warehouse',\n    'sink.multiple.enable' = 'true',\n    'sink.multiple.format' = 'canal-json',\n    'sink.multiple.add-column.policy' = 'TRY_IT_BEST',\n    'sink.multiple.database-pattern' = '${database}',\n    'sink.multiple.table-pattern' = 'test_${table}',\n    'sink.multiple.auto-create-table-when-snapshot' = 'true'\n);\n")),(0,l.kt)("p",null,"\u8981\u652f\u6301\u591a\u8868\u5199\u5165\u540c\u65f6\u9700\u8981\u8bbe\u7f6e\u4e0a\u6e38\u6570\u636e\u7684\u5e8f\u5217\u5316\u683c\u5f0f(\u901a\u8fc7\u9009\u9879 'sink.multiple.format'\n\u6765\u8bbe\u7f6e, \u76ee\u524d\u4ec5\u652f\u6301 ","[canal-json|debezium-json]",")\u3002"),(0,l.kt)("h3",{id:"\u52a8\u6001\u8868\u540d\u6620\u5c04"},"\u52a8\u6001\u8868\u540d\u6620\u5c04"),(0,l.kt)("p",null,"Iceberg \u5728\u591a\u8868\u5199\u5165\u7684\u65f6\u53ef\u4ee5\u81ea\u5b9a\u4e49\u6620\u5c04\u7684\u6570\u636e\u5e93\u540d\u548c\u8868\u540d\u7684\u89c4\u5219\uff0c\u53ef\u4ee5\u586b\u5145\u5360\u4f4d\u7b26\u7136\u540e\u6dfb\u52a0\u524d\u540e\u7f00\u6765\u4fee\u6539\u6620\u5c04\u7684\u76ee\u6807\u8868\u540d\u79f0\u3002\nIceberg Load Node \u4f1a\u89e3\u6790 ",(0,l.kt)("inlineCode",{parentName:"p"},"'sink.multiple.database-pattern'")," \u4f5c\u4e3a\u76ee\u7684\u7aef\u7684 \u6570\u636e\u5e93\u540d, \u89e3\u6790 ",(0,l.kt)("inlineCode",{parentName:"p"},"'sink.multiple.table-pattern'"),"\n\u4f5c\u4e3a\u76ee\u7684\u7aef\u7684\u8868\u540d\uff0c\u5360\u4f4d\u7b26\u662f\u4ece\u6570\u636e\u4e2d\u89e3\u6790\u51fa\u6765\u7684\uff0c\u53d8\u91cf\u662f\u4e25\u683c\u901a\u8fc7 '${VARIABLE_NAME}' \u6765\u8868\u793a, \u53d8\u91cf\u7684\u53d6\u503c\u6765\u81ea\u4e8e\u6570\u636e\u672c\u8eab,\n\u5373\u53ef\u4ee5\u662f\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"'sink.multiple.format'")," \u6307\u5b9a\u7684\u67d0\u79cd Format \u7684\u5143\u6570\u636e\u5b57\u6bb5, \u4e5f\u53ef\u4ee5\u662f\u6570\u636e\u4e2d\u7684\u7269\u7406\u5b57\u6bb5\u3002\n\u5173\u4e8e 'topic-parttern' \u7684\u4f8b\u5b50\u5982\u4e0b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"'sink.multiple.format' \u4e3a 'canal-json':")),(0,l.kt)("p",null,"\u4e0a\u6e38\u6570\u636e\u4e3a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "data": [\n    {\n      "id": "111",\n      "name": "scooter",\n      "description": "Big 2-wheel scooter",\n      "weight": "5.18"\n    }\n  ],\n  "database": "inventory",\n  "es": 1589373560000,\n  "id": 9,\n  "isDdl": false,\n  "mysqlType": {\n    "id": "INTEGER",\n    "name": "VARCHAR(255)",\n    "description": "VARCHAR(512)",\n    "weight": "FLOAT"\n  },\n  "old": [\n    {\n      "weight": "5.15"\n    }\n  ],\n  "pkNames": [\n    "id"\n  ],\n  "sql": "",\n  "sqlType": {\n    "id": 4,\n    "name": 12,\n    "description": 12,\n    "weight": 7\n  },\n  "table": "products",\n  "ts": 1589373560798,\n  "type": "UPDATE"\n} \n')),(0,l.kt)("p",null,"'topic-pattern' \u4e3a '{database}_${table}', \u63d0\u53d6\u540e\u7684 Topic \u4e3a 'inventory_products' ('database', 'table' \u4e3a\u5143\u6570\u636e\u5b57\u6bb5,\n'id' \u4e3a\u7269\u7406\u5b57\u6bb5)"),(0,l.kt)("p",null,"'topic-pattern' \u4e3a '{database}",(0,l.kt)("em",{parentName:"p"},"${table}"),"${id}', \u63d0\u53d6\u540e\u7684 Topic \u4e3a 'inventory_products_111' ('database', 'table'\n\u4e3a\u5143\u6570\u636e\u5b57\u6bb5, 'id' \u4e3a\u7269\u7406\u5b57\u6bb5)"),(0,l.kt)("h3",{id:"\u52a8\u6001\u5efa\u5e93\u5efa\u8868"},"\u52a8\u6001\u5efa\u5e93\u3001\u5efa\u8868"),(0,l.kt)("p",null,"Iceberg\u5728\u591a\u8868\u5199\u5165\u65f6\u9047\u5230\u4e0d\u5b58\u5728\u7684\u8868\u548c\u4e0d\u5b58\u5728\u7684\u5e93\u65f6\u4f1a\u81ea\u52a8\u521b\u5efa\u6570\u636e\u5e93\u548c\u6570\u636e\u8868\uff0c\u5e76\u4e14\u652f\u6301\u5728\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u65b0\u589e\u6355\u83b7\u989d\u5916\u7684\u8868\u5165\u5e93\u3002\n\u9ed8\u8ba4\u7684Iceberg\u8868\u53c2\u6570\u4e3a\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"'format-version' = '2'"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"'write.upsert.enabled' = 'true''"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"'engine.hive.enabled' = 'true'")),(0,l.kt)("h3",{id:"\u52a8\u6001schema\u53d8\u66f4"},"\u52a8\u6001schema\u53d8\u66f4"),(0,l.kt)("p",null,"Iceberg\u5728\u591a\u8868\u5199\u5165\u65f6\u652f\u6301\u540c\u6b65\u6e90\u8868\u7ed3\u6784\u53d8\u66f4\u5230\u76ee\u6807\u8868\uff08DDL\u540c\u6b65\uff09\uff0c\u652f\u6301\u7684schema\u53d8\u66f4\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"schema\u53d8\u66f4\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5217\u589e\u52a0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5217\u51cf\u5c11"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5217\u4f4d\u7f6e\u53d8\u66f4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5217\u91cd\u547d\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5217\u7c7b\u578b\u53d8\u66f4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,l.kt)("h2",{id:"iceberg-load-\u8282\u70b9\u53c2\u6570"},"Iceberg Load \u8282\u70b9\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connector"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u8fde\u63a5\u5668\uff0c\u8fd9\u91cc\u5e94\u8be5\u662f",(0,l.kt)("inlineCode",{parentName:"td"},"'iceberg'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"catalog-type"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.kt)("td",{parentName:"tr",align:null},"hive"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"hive"),"\u6216",(0,l.kt)("inlineCode",{parentName:"td"},"hadoop"),"\u7528\u4e8e\u5185\u7f6e\u76ee\u5f55\uff0c\u6216\u4e3a\u4f7f\u7528 catalog-impl \u7684\u81ea\u5b9a\u4e49\u76ee\u5f55\u5b9e\u73b0\u672a\u8bbe\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"catalog-name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76ee\u5f55\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"catalog-database"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728Iceberg\u76ee\u5f55\u4e2d\u7ba1\u7406\u7684\u6570\u636e\u5e93\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"catalog-table"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u5e95\u5c42Iceberg\u76ee\u5f55\u548c\u6570\u636e\u5e93\u4e2d\u7ba1\u7406\u7684\u8868\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"catalog-impl"),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49custom \u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u672a\u8bbe\u7f6e\uff0c\u5219\u5fc5\u987b\u8bbe\u7f6e\u5b8c\u5168\u9650\u5b9a\u7684\u7c7b\u540d\u81ea\u5b9a\u4e49\u76ee\u5f55\u5b9e\u73b0",(0,l.kt)("inlineCode",{parentName:"td"},"catalog-type"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cache-enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528\u76ee\u5f55\u7f13\u5b58\uff0c\u9ed8\u8ba4\u503c\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uri"),(0,l.kt)("td",{parentName:"tr",align:null},"hive catalog\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Hive \u5143\u5b58\u50a8\u7684 thrift URI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clients"),(0,l.kt)("td",{parentName:"tr",align:null},"hive catalog\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Hive Metastore \u5ba2\u6237\u7aef\u6c60\u5927\u5c0f\uff0c\u9ed8\u8ba4\u503c\u4e3a 2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"warehouse"),(0,l.kt)("td",{parentName:"tr",align:null},"hive catalog\u6216hadoop catalog\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u4e8e Hive \u76ee\u5f55\uff0c\u662f Hive \u4ed3\u5e93\u4f4d\u7f6e\uff0c\u5982\u679c\u65e2\u4e0d\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"td"},"hive-conf-dir"),"\u6307\u5b9a\u5305\u542b",(0,l.kt)("inlineCode",{parentName:"td"},"hive-site.xml"),"\u914d\u7f6e\u6587\u4ef6\u7684\u4f4d\u7f6e\u4e5f\u4e0d\u6dfb\u52a0\u6b63\u786e",(0,l.kt)("inlineCode",{parentName:"td"},"hive-site.xml"),"\u7684\u7c7b\u8def\u5f84\uff0c\u7528\u6237\u5e94\u6307\u5b9a\u6b64\u8def\u5f84\u3002\u5bf9\u4e8ehadoop\u76ee\u5f55\uff0cHDFS\u76ee\u5f55\u5b58\u653e\u5143\u6570\u636e\u6587\u4ef6\u548c\u6570\u636e\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hive-conf-dir"),(0,l.kt)("td",{parentName:"tr",align:null},"hive catalog\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"hive-site.xml"),"\u5305\u542b\u5c06\u7528\u4e8e\u63d0\u4f9b\u81ea\u5b9a\u4e49 Hive \u914d\u7f6e\u503c\u7684\u914d\u7f6e\u6587\u4ef6\u7684\u76ee\u5f55\u7684\u8def\u5f84\u3002\u5982\u679c\u540c\u65f6\u8bbe\u7f6e\u548c\u521b\u5efaIceberg\u76ee\u5f55\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"hive.metastore.warehouse.dir"),"from ",(0,l.kt)("inlineCode",{parentName:"td"},"<hive-conf-dir>/hive-site.xml"),"\uff08\u6216\u6765\u81ea\u7c7b\u8def\u5f84\u7684 hive \u914d\u7f6e\u6587\u4ef6\uff09\u7684\u503c\u5c06\u88ab\u8be5\u503c\u8986\u76d6\u3002",(0,l.kt)("inlineCode",{parentName:"td"},"warehouse``hive-conf-dir``warehouse"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"(none)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong metric \u7684\u6807\u7b7e\u503c\uff0c\u8be5\u503c\u7684\u6784\u6210\u4e3agroupId=",(0,l.kt)("inlineCode",{parentName:"td"},"{groupId}"),"&streamId=",(0,l.kt)("inlineCode",{parentName:"td"},"{streamId}"),"&nodeId=",(0,l.kt)("inlineCode",{parentName:"td"},"{nodeId}"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.multiple.enable"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u591a\u8def\u5199\u5165")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.multiple.schema-update.policy"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"TRY_IT_BEST"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9047\u5230\u6570\u636e\u4e2dschema\u548c\u76ee\u6807\u8868\u4e0d\u4e00\u81f4\u65f6\u7684\u5904\u7406\u7b56\u7565",(0,l.kt)("br",null),"TRY_IT_BEST\uff1a\u5c3d\u529b\u800c\u4e3a\uff0c\u5c3d\u53ef\u80fd\u5904\u7406\uff0c\u5904\u7406\u4e0d\u4e86\u7684\u5219\u5ffd\u7565",(0,l.kt)("br",null),"IGNORE_WITH_LOG\uff1a\u5ffd\u7565\u5e76\u4e14\u8bb0\u5f55\u65e5\u5fd7\uff0c\u540e\u7eed\u8be5\u8868\u6570\u636e\u4e0d\u518d\u5904\u7406",(0,l.kt)("br",null)," THROW_WITH_STOP\uff1a\u629b\u5f02\u5e38\u5e76\u4e14\u505c\u6b62\u4efb\u52a1\uff0c\u76f4\u5230\u7528\u6237\u624b\u52a8\u5904\u7406schema\u4e0d\u4e00\u81f4\u7684\u60c5\u51b5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.multiple.pk-auto-generated"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u81ea\u52a8\u751f\u6210\u4e3b\u952e\uff0c\u5bf9\u4e8e\u591a\u8def\u5199\u5165\u81ea\u52a8\u5efa\u8868\u65f6\u5f53\u6e90\u8868\u65e0\u4e3b\u952e\u65f6\u662f\u5426\u5c06\u6240\u6709\u5b57\u6bb5\u5f53\u4f5c\u4e3b\u952e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.multiple.typemap-compatible-with-spark"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u9002\u914dspark\u7684\u7c7b\u578b\u7cfb\u7edf\uff0c\u5bf9\u4e8e\u591a\u8def\u5199\u5165\u81ea\u52a8\u5efa\u8868\u65f6\u662f\u5426\u9700\u8981\u9002\u914dspark\u7684\u7c7b\u578b\u7cfb\u7edf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.multiple.auto-create-table-when-snapshot"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5728\u5b58\u91cf\u9636\u6bb5\u81ea\u52a8\u521b\u5efa Iceberg \u8868")))),(0,l.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://iceberg.apache.org/spec/#schemas-and-data-types"},"Iceberg\u6570\u636e\u7c7b\u578b"),"\u8be6\u7ec6\u4fe1\u606f\u3002\u8fd9\u91cc\u4ecb\u7ecd\u4e86\u52a0\u8f7d\u6570\u636e\u5982\u4f55\u5c06 Iceberg \u7c7b\u578b\u8f6c\u6362\u4e3a Flink \u7c7b\u578b\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flink SQL \u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"Iceberg \u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CHAR"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VARCHAR"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BINARY"),(0,l.kt)("td",{parentName:"tr",align:null},"FIXED(L)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VARBINARY"),(0,l.kt)("td",{parentName:"tr",align:null},"BINARY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL(P,S)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,l.kt)("td",{parentName:"tr",align:null},"INT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,l.kt)("td",{parentName:"tr",align:null},"INT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:null},"INT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.kt)("td",{parentName:"tr",align:null},"LONG")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATE"),(0,l.kt)("td",{parentName:"tr",align:null},"DATE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIME"),(0,l.kt)("td",{parentName:"tr",align:null},"TIME")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP_LTZ"),(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMPTZ")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INTERVAL"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY"),(0,l.kt)("td",{parentName:"tr",align:null},"LIST")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MULTISET"),(0,l.kt)("td",{parentName:"tr",align:null},"MAP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MAP"),(0,l.kt)("td",{parentName:"tr",align:null},"MAP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ROW"),(0,l.kt)("td",{parentName:"tr",align:null},"STRUCT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAW"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))))}g.isMDXComponent=!0}}]);