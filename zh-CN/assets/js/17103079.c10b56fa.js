"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[88386],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>E});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},A=Object.keys(e);for(i=0;i<A.length;i++)a=A[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(i=0;i<A.length;i++)a=A[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),o=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=o(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,A=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=o(a),k=n,E=d["".concat(s,".").concat(k)]||d[k]||u[k]||A;return a?i.createElement(E,l(l({ref:t},c),{},{components:a})):i.createElement(E,l({ref:t},c))}));function E(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var A=a.length,l=new Array(A);l[0]=k;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:n,l[1]=r;for(var o=2;o<A;o++)l[o]=a[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}k.displayName="MDXCreateElement"},37221:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>A,metadata:()=>r,toc:()=>o});var i=a(87462),n=(a(67294),a(3905));const A={title:"Kafka \u793a\u4f8b",sidebar_position:3},l=void 0,r={unversionedId:"quick_start/data_ingestion/mysql_kafka_clickhouse_example",id:"version-1.9.0/quick_start/data_ingestion/mysql_kafka_clickhouse_example",title:"Kafka \u793a\u4f8b",description:"\u5728\u4e0b\u9762\u7684\u5185\u5bb9\u4e2d\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u4e00\u4e2a\u5b8c\u6574\u7684\u793a\u4f8b\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Apache InLong \u521b\u5efa MySQL -> Kafka -> ClickHouse \u6570\u636e\u63a5\u5165\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.9.0/quick_start/data_ingestion/mysql_kafka_clickhouse_example.md",sourceDirName:"quick_start/data_ingestion",slug:"/quick_start/data_ingestion/mysql_kafka_clickhouse_example",permalink:"/zh-CN/docs/1.9.0/quick_start/data_ingestion/mysql_kafka_clickhouse_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.9.0/quick_start/data_ingestion/mysql_kafka_clickhouse_example.md",tags:[],version:"1.9.0",sidebarPosition:3,frontMatter:{title:"Kafka \u793a\u4f8b",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Pulsar \u793a\u4f8b",permalink:"/zh-CN/docs/1.9.0/quick_start/data_ingestion/file_pulsar_clickhouse_example"},next:{title:"\u5355\u673a\u90e8\u7f72",permalink:"/zh-CN/docs/1.9.0/deployment/standalone"}},s={},o=[{value:"\u73af\u5883\u90e8\u7f72",id:"\u73af\u5883\u90e8\u7f72",level:2},{value:"\u5b89\u88c5 InLong",id:"\u5b89\u88c5-inlong",level:3},{value:"\u5b89\u88c5 ClickHouse",id:"\u5b89\u88c5-clickhouse",level:3},{value:"\u5b89\u88c5Kafka",id:"\u5b89\u88c5kafka",level:3},{value:"\u96c6\u7fa4\u521d\u59cb\u5316",id:"\u96c6\u7fa4\u521d\u59cb\u5316",level:2},{value:"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e",id:"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e",level:3},{value:"\u6ce8\u518c Kafka \u96c6\u7fa4",id:"\u6ce8\u518c-kafka-\u96c6\u7fa4",level:3},{value:"\u6ce8\u518c Clickhouse \u6570\u636e\u8282\u70b9",id:"\u6ce8\u518c-clickhouse-\u6570\u636e\u8282\u70b9",level:3},{value:"\u4efb\u52a1\u521b\u5efa",id:"\u4efb\u52a1\u521b\u5efa",level:2},{value:"\u65b0\u5efa\u6570\u636e\u6d41\u7ec4",id:"\u65b0\u5efa\u6570\u636e\u6d41\u7ec4",level:3},{value:"\u65b0\u5efa\u6570\u636e\u6d41",id:"\u65b0\u5efa\u6570\u636e\u6d41",level:3},{value:"\u65b0\u5efa\u6570\u636e\u6e90",id:"\u65b0\u5efa\u6570\u636e\u6e90",level:3},{value:"\u65b0\u5efa\u6570\u636e\u76ee\u6807",id:"\u65b0\u5efa\u6570\u636e\u76ee\u6807",level:3},{value:"\u5ba1\u6279\u6570\u636e\u6d41",id:"\u5ba1\u6279\u6570\u636e\u6d41",level:3},{value:"\u6d4b\u8bd5\u6570\u636e",id:"\u6d4b\u8bd5\u6570\u636e",level:2},{value:"\u53d1\u9001\u6570\u636e",id:"\u53d1\u9001\u6570\u636e",level:3},{value:"\u6570\u636e\u9a8c\u8bc1",id:"\u6570\u636e\u9a8c\u8bc1",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"\u4efb\u52a1\u914d\u7f6e\u5931\u8d25",id:"\u4efb\u52a1\u914d\u7f6e\u5931\u8d25",level:3},{value:"\u53d1\u9001\u6570\u636e\u751f\u6210\u811a\u672c",id:"\u53d1\u9001\u6570\u636e\u751f\u6210\u811a\u672c",level:3}],c={toc:o},d="wrapper";function u(e){let{components:t,...A}=e;return(0,n.kt)(d,(0,i.Z)({},c,A,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u5185\u5bb9\u4e2d\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u4e00\u4e2a\u5b8c\u6574\u7684\u793a\u4f8b\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Apache InLong \u521b\u5efa ",(0,n.kt)("inlineCode",{parentName:"p"},"MySQL -> Kafka -> ClickHouse")," \u6570\u636e\u63a5\u5165\u3002"),(0,n.kt)("h2",{id:"\u73af\u5883\u90e8\u7f72"},"\u73af\u5883\u90e8\u7f72"),(0,n.kt)("h3",{id:"\u5b89\u88c5-inlong"},"\u5b89\u88c5 InLong"),(0,n.kt)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u5b89\u88c5 InLong \u7684\u5168\u90e8\u7ec4\u4ef6\uff0c\u8fd9\u91cc\u63d0\u4f9b\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.9.0/deployment/docker"},"Docker \u90e8\u7f72"),"\uff08\u63a8\u8350\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.9.0/deployment/bare_metal"},"Bare Metal \u90e8\u7f72"))),(0,n.kt)("h3",{id:"\u5b89\u88c5-clickhouse"},"\u5b89\u88c5 ClickHouse"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --rm --net=host --name clickhouse -e CLICKHOUSE_USER=admin -e CLICKHOUSE_PASSWORD=inlong -e CLICKHOUSE_DEFAULT_ACCESS_MANAGEMENT=1 clickhouse/clickhouse-server:22.8\n")),(0,n.kt)("h3",{id:"\u5b89\u88c5kafka"},"\u5b89\u88c5Kafka"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# \u51c6\u5907 Kafka \u9700\u8981\u7684 zookeeper\ndocker run -d --name zookeeper -p 2181:2181 -t wurstmeister/zookeeper\n# \u5b89\u88c5 Kafka \ndocker run -d --name kafka -p 9092:9092 -e KAFKA_BROKER_ID=0 -e KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181 --link zookeeper -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://kafka:9092 -e KAFKA_LISTENERS=PLAINTEXT://0.0.0.0:9092 -t wurstmeister/kafka\n")),(0,n.kt)("h2",{id:"\u96c6\u7fa4\u521d\u59cb\u5316"},"\u96c6\u7fa4\u521d\u59cb\u5316"),(0,n.kt)("p",null,"\u5bb9\u5668\u542f\u52a8\u6210\u529f\u540e\uff0c\u8bbf\u95ee InLong Dashboard \u5730\u5740 http://localhost\uff0c\u5e76\u4f7f\u7528\u4ee5\u4e0b\u9ed8\u8ba4\u8d26\u53f7\u767b\u5f55\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,n.kt)("h3",{id:"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e"},"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e"),(0,n.kt)("p",null,"\u9875\u9762\u70b9\u51fb\u3010\u96c6\u7fa4\u7ba1\u7406\u3011->\u3010\u6807\u7b7e\u7ba1\u7406\u3011->\u3010\u65b0\u5efa\u3011\uff0c\u6307\u5b9a\u96c6\u7fa4\u6807\u7b7e\u540d\u79f0\u548c\u8d1f\u8d23\u4eba\uff1a\n",(0,n.kt)("img",{alt:"Create Cluster label",src:a(96349).Z,width:"520",height:"303"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\uff1adefault_cluster \u662f\u5404\u4e2a\u7ec4\u4ef6\u9ed8\u8ba4\u4e0a\u62a5\u96c6\u7fa4\u6807\u7b7e\uff0c\u8bf7\u52ff\u4f7f\u7528\u5176\u5b83\u540d\u79f0")),(0,n.kt)("h3",{id:"\u6ce8\u518c-kafka-\u96c6\u7fa4"},"\u6ce8\u518c Kafka \u96c6\u7fa4"),(0,n.kt)("p",null,"\u9875\u9762\u70b9\u51fb\u3010\u96c6\u7fa4\u7ba1\u7406\u3011->\u3010\u65b0\u5efa\u96c6\u7fa4\u3011\uff0c\u6ce8\u518c Kafka \u96c6\u7fa4\uff1a\n",(0,n.kt)("img",{alt:"Create kafka cluster",src:a(48237).Z,width:"640",height:"579"})),(0,n.kt)("h3",{id:"\u6ce8\u518c-clickhouse-\u6570\u636e\u8282\u70b9"},"\u6ce8\u518c Clickhouse \u6570\u636e\u8282\u70b9"),(0,n.kt)("p",null,"\u9875\u9762\u70b9\u51fb\u3010\u6570\u636e\u8282\u70b9\u3011->\u3010\u65b0\u5efa\u3011\uff0c\u65b0\u589e ClickHouse \u6570\u636e\u8282\u70b9\uff1a\n",(0,n.kt)("img",{alt:"Create kafka cluster",src:a(78644).Z,width:"742",height:"635"})),(0,n.kt)("h2",{id:"\u4efb\u52a1\u521b\u5efa"},"\u4efb\u52a1\u521b\u5efa"),(0,n.kt)("h3",{id:"\u65b0\u5efa\u6570\u636e\u6d41\u7ec4"},"\u65b0\u5efa\u6570\u636e\u6d41\u7ec4"),(0,n.kt)("p",null,"\u9875\u9762\u70b9\u51fb\u3010\u6570\u636e\u96c6\u6210\u3011->\u3010\u65b0\u5efa\u6570\u636e\u6d41\u7ec4\u3011\uff0c\u586b\u5199 ID\uff0c\u9009\u62e9 MQ \u7c7b\u578b\u4e3a Kafka \u5373\u53ef\uff1a\n",(0,n.kt)("img",{alt:"Create datastream",src:a(2799).Z,width:"1080",height:"421"})),(0,n.kt)("h3",{id:"\u65b0\u5efa\u6570\u636e\u6d41"},"\u65b0\u5efa\u6570\u636e\u6d41"),(0,n.kt)("p",null,"\u70b9\u51fb\u3010\u4e0b\u4e00\u6b65\u3011->\u3010\u65b0\u5efa\u6570\u636e\u6d41\u3011\uff0c\u914d\u7f6e\u6570\u636e\u6d41 ID \u53ca\u6d4b\u8bd5\u6e90\u5b57\u6bb5\u4fe1\u606f\uff1a\n",(0,n.kt)("img",{alt:"Create datastream",src:a(33786).Z,width:"1220",height:"858"})),(0,n.kt)("h3",{id:"\u65b0\u5efa\u6570\u636e\u6e90"},"\u65b0\u5efa\u6570\u636e\u6e90"),(0,n.kt)("p",null,"\u70b9\u51fb\u3010\u65b0\u5efa\u6570\u636e\u6e90\u3011->\u3010MySQL\u3011\uff0c\u914d\u7f6e\u6570\u636e\u6e90\u540d\u79f0\u3001\u5730\u5740\u3001\u7528\u6237\u5bc6\u7801\u4ee5\u53ca\u5e93\u8868\u4fe1\u606f\u7b49\uff1a\n",(0,n.kt)("img",{alt:"Create datastream",src:a(50005).Z,width:"956",height:"974"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u8bf7\u9884\u5148\u521b\u5efa ",(0,n.kt)("inlineCode",{parentName:"p"},"test_mysql_db.test_mysql_table")," \u5e93\u8868\uff0cschema \u4e3a\uff1a\nCREATE TABLE test_mysql_db.test_mysql_table (\nid INT PRIMARY KEY,\nname VARCHAR(50)\n);")),(0,n.kt)("h3",{id:"\u65b0\u5efa\u6570\u636e\u76ee\u6807"},"\u65b0\u5efa\u6570\u636e\u76ee\u6807"),(0,n.kt)("p",null,"\u70b9\u51fb\u3010\u65b0\u5efa\u6570\u636e\u76ee\u6807\u3011->\u3010ClickHouse\u3011\uff0c\u914d\u7f6e\u540d\u79f0\u3001\u5e93\u8868\u3001\u5df2\u521b\u5efa\u7684 ck \u6570\u636e\u8282\u70b9\u4ee5\u53ca Schema \u6620\u5c04\u4fe1\u606f\u7b49\uff0c\u5b8c\u6210\u540e\u70b9\u51fb \u3010\u63d0\u4ea4\u5ba1\u6279\u3011\uff1a\n",(0,n.kt)("img",{alt:"Create data object",src:a(97006).Z,width:"1484",height:"1057"})),(0,n.kt)("h3",{id:"\u5ba1\u6279\u6570\u636e\u6d41"},"\u5ba1\u6279\u6570\u636e\u6d41"),(0,n.kt)("p",null,"\u9875\u9762\u70b9\u51fb\u3010\u5ba1\u6279\u7ba1\u7406\u3011->\u3010\u6211\u7684\u5ba1\u6279\u3011->\u3010\u8be6\u60c5\u3011->\u3010\u9009\u62e9\u96c6\u7fa4\u6807\u7b7e\u3011->\u3010\u901a\u8fc7\u3011\uff1a\n",(0,n.kt)("img",{alt:"clickhouse",src:a(60893).Z,width:"1080",height:"237"})),(0,n.kt)("p",null,"\u8fd4\u56de\u3010\u6570\u636e\u96c6\u6210\u3011\uff0c\u7b49\u5f85\u4efb\u52a1\u914d\u7f6e\u6210\u529f\uff1a\n",(0,n.kt)("img",{alt:"clickhouse",src:a(73093).Z,width:"1928",height:"506"})),(0,n.kt)("h2",{id:"\u6d4b\u8bd5\u6570\u636e"},"\u6d4b\u8bd5\u6570\u636e"),(0,n.kt)("h3",{id:"\u53d1\u9001\u6570\u636e"},"\u53d1\u9001\u6570\u636e"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"clickhouse",src:a(77837).Z,width:"720",height:"435"}),"\n\u7d2f\u8ba1\u5bf9 MySQL \u6dfb\u52a0 1000 \u6761\u6570\u636e\u3002"),(0,n.kt)("h3",{id:"\u6570\u636e\u9a8c\u8bc1"},"\u6570\u636e\u9a8c\u8bc1"),(0,n.kt)("p",null,"\u67e5\u770b\u5ba1\u8ba1\u9875\u9762\u53d1\u9001\u6570\u636e\uff1a\n",(0,n.kt)("img",{alt:"clickhouse",src:a(86764).Z,width:"1971",height:"876"})),(0,n.kt)("p",null,"\u7136\u540e\u8fdb\u5165 ClickHouse \u5bb9\u5668\uff0c\u67e5\u770b\u5e93\u8868\u6570\u636e\uff1a\n",(0,n.kt)("img",{alt:"clickhouse",src:a(56065).Z,width:"785",height:"740"})),(0,n.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,n.kt)("h3",{id:"\u4efb\u52a1\u914d\u7f6e\u5931\u8d25"},"\u4efb\u52a1\u914d\u7f6e\u5931\u8d25"),(0,n.kt)("p",null,"\u4e00\u822c\u662f MQ \u6216\u8005 Flink \u96c6\u7fa4\u914d\u7f6e\u9519\u8bef\u5bfc\u81f4\uff0c\u53ef\u4ee5\u5728\u9875\u9762\u67e5\u770b\u9519\u8bef\u4fe1\u606f\uff0c\u6216\u8005\u8fdb\u5165 Manager \u5bb9\u5668\u67e5\u770b\u8be6\u7ec6\u65e5\u5fd7\u3002"),(0,n.kt)("h3",{id:"\u53d1\u9001\u6570\u636e\u751f\u6210\u811a\u672c"},"\u53d1\u9001\u6570\u636e\u751f\u6210\u811a\u672c"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\n# MySQL\u6570\u636e\u5e93\u8fde\u63a5\u4fe1\u606f\nDB_HOST="mysql"\nDB_USER="root"\nDB_PASS="inlong"\nDB_NAME="test_mysql_db"\nDB_TABLE="test_mysql_table"\n\n# \u5faa\u73af\u63d2\u5165\u6570\u636e\nfor ((i=1; i<=1000; i++))\ndo\n    # \u751f\u6210\u8981\u63d2\u5165\u7684\u6570\u636e\n    id=$i\n    name="name_$i"\n\n    # \u6784\u5efa\u63d2\u5165\u8bed\u53e5\n    query="INSERT INTO $DB_TABLE (id, name) VALUES ($id, \'$name\');"\n\n    # \u6267\u884c\u63d2\u5165\u8bed\u53e5\n    mysql -h $DB_HOST -u $DB_USER -p$DB_PASS $DB_NAME -e "$query"\ndone\n')))}u.isMDXComponent=!0},60893:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/approval-b16f981d4b1f265da513c084e757cf81.png"},96349:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/png;base64,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"},2799:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_ingestion-0e276de35d4be090db69fce3642ebbf0.png"},97006:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_sink-623d9470b5837e85e176e6da3304ac8f.png"},50005:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_source-aeea88ddfdc1eefdbb8bc2525dc657be.png"},33786:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/data_stream_config-27a89480c717fa01fe4030988d13d1d1.png"},78644:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/datanode-7bf7defc32657640e72a4b348929d4c5.png"},48237:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kafka_cluster-6914b5bd0be2ebcfa6cc7727ef3bbcdf.png"},56065:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/receive_data-0266a508aab8579ec94267ded98e0ec7.png"},73093:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/result-c2937dc804615ee913613fe0928e1fb0.png"},77837:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/send_data-43e0b438eeb5af1f226eda9051c011e9.png"},86764:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/stream_audit-fefc35d3aad06457bb08df4a616591da.png"}}]);