"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[21684],{3905:(t,a,e)=>{e.d(a,{Zo:()=>k,kt:()=>c});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=n.createContext({}),d=function(t){var a=n.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},k=function(t){var a=d(t.components);return n.createElement(p.Provider,{value:a},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),u=d(e),s=r,c=u["".concat(p,".").concat(s)]||u[s]||m[s]||l;return e?n.createElement(c,i(i({ref:a},k),{},{components:e})):n.createElement(c,i({ref:a},k))}));function c(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=s;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=e[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}s.displayName="MDXCreateElement"},13344:(t,a,e)=>{e.d(a,{Y:()=>n});const n={inLongVersion:"1.4.0-SNAPSHOT"}},46751:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>k});var n=e(87462),r=(e(67294),e(3905)),l=e(13344);const i={title:"Kafka",sidebar_position:10},o=void 0,p={unversionedId:"data_node/load_node/kafka",id:"version-1.4.0/data_node/load_node/kafka",title:"Kafka",description:"\u6982\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.4.0/data_node/load_node/kafka.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/kafka",permalink:"/zh-CN/docs/1.4.0/data_node/load_node/kafka",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.4.0/data_node/load_node/kafka.md",tags:[],version:"1.4.0",sidebarPosition:10,frontMatter:{title:"Kafka",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Iceberg",permalink:"/zh-CN/docs/1.4.0/data_node/load_node/iceberg"},next:{title:"MySQL",permalink:"/zh-CN/docs/1.4.0/data_node/load_node/mysql"}},d={},k=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u652f\u6301\u7684\u7248\u672c",id:"\u652f\u6301\u7684\u7248\u672c",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"Maven \u4f9d\u8d56",id:"maven-\u4f9d\u8d56",level:3},{value:"\u5982\u4f55\u521b\u5efa Kafka Load \u8282\u70b9",id:"\u5982\u4f55\u521b\u5efa-kafka-load-\u8282\u70b9",level:2},{value:"SQL API \u7528\u6cd5",id:"sql-api-\u7528\u6cd5",level:3},{value:"InLong Dashboard \u7528\u6cd5",id:"inlong-dashboard-\u7528\u6cd5",level:3},{value:"InLong Manager Client \u7528\u6cd5",id:"inlong-manager-client-\u7528\u6cd5",level:3},{value:"Kafka Load \u8282\u70b9\u53c2\u6570",id:"kafka-load-\u8282\u70b9\u53c2\u6570",level:2},{value:"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5",id:"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5",level:2},{value:"\u7279\u5f81",id:"\u7279\u5f81",level:2},{value:"\u652f\u6301\u52a8\u6001 Schema \u5199\u5165",id:"\u652f\u6301\u52a8\u6001-schema-\u5199\u5165",level:3},{value:"\u52a8\u6001 Topic \u63d0\u53d6",id:"\u52a8\u6001-topic-\u63d0\u53d6",level:4},{value:"\u52a8\u6001 Partition \u63d0\u53d6",id:"\u52a8\u6001-partition-\u63d0\u53d6",level:4},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],u={toc:k},m="wrapper";function s(t){let{components:a,...i}=t;return(0,r.kt)(m,(0,n.Z)({},u,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Kafka Load")," \u8282\u70b9\u652f\u6301\u5199\u6570\u636e\u5230 Kafka topics\u3002 \u5b83\u652f\u6301\u4ee5\u666e\u901a\u7684\u65b9\u5f0f\u5199\u5165\u6570\u636e\u548c Upsert \u7684\u65b9\u5f0f\u5199\u5165\u6570\u636e\u3002 upsert-kafka \u8fde\u63a5\u5668\u53ef\u4ee5\u6d88\u8d39 changelog \u6d41\u3002\u5b83\u4f1a\u5c06 INSERT/UPDATE_AFTER \u6570\u636e\u4f5c\u4e3a\u6b63\u5e38\u7684 Kafka \u6d88\u606f\u5199\u5165\uff0c\u5e76\u5c06 DELETE \u6570\u636e\u4ee5 value \u4e3a\u7a7a\u7684 Kafka \u6d88\u606f\u5199\u5165\uff08\u8868\u793a\u5bf9\u5e94 key \u7684\u6d88\u606f\u88ab\u5220\u9664\uff09\u3002"),(0,r.kt)("h2",{id:"\u652f\u6301\u7684\u7248\u672c"},"\u652f\u6301\u7684\u7248\u672c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Load \u8282\u70b9"),(0,r.kt)("th",{parentName:"tr",align:null},"Kafka \u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.4.0/data_node/load_node/kafka"},"Kafka")),(0,r.kt)("td",{parentName:"tr",align:null},"0.10+")))),(0,r.kt)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,r.kt)("p",null,"\u4e3a\u4e86\u8bbe\u7f6e Kafka Load \u8282\u70b9, \u4e0b\u9762\u63d0\u4f9b\u4e86\u4f7f\u7528\u6784\u5efa\u81ea\u52a8\u5316\u5de5\u5177\uff08\u4f8b\u5982 Maven \u6216 SBT\uff09\u548c\u5e26\u6709 Sort Connector JAR \u5305\u7684 SQL \u5ba2\u6237\u7aef\u7684\u4e24\u4e2a\u9879\u76ee\u7684\u4f9d\u8d56\u5173\u7cfb\u4fe1\u606f\u3002"),(0,r.kt)("h3",{id:"maven-\u4f9d\u8d56"},"Maven \u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-kafka</artifactId>\n    <version>${l.Y.inLongVersion}</version>\n</dependency>\n`)),(0,r.kt)("h2",{id:"\u5982\u4f55\u521b\u5efa-kafka-load-\u8282\u70b9"},"\u5982\u4f55\u521b\u5efa Kafka Load \u8282\u70b9"),(0,r.kt)("h3",{id:"sql-api-\u7528\u6cd5"},"SQL API \u7528\u6cd5"),(0,r.kt)("p",null,"\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink SQL")," \u521b\u5efa\u4e00\u4e2a Kafka Load \u8282\u70b9:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u5668\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"kafka-inlong"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u4f7f\u7528 Flink SQL \u521b\u5efa Kafka \u8868 'kafka_load_node'\nFlink SQL> CREATE TABLE kafka_load_node (\n           `id` INT,\n           `name` STRINTG\n           ) WITH (\n           'connector' = 'kafka-inlong',\n           'topic' = 'user',\n           'properties.bootstrap.servers' = 'localhost:9092',\n           'properties.group.id' = 'testGroup',\n           'format' = 'csv'\n           )\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u5668\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"upsert-kafka"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u4f7f\u7528 Flink SQL \u521b\u5efa Kafka \u8868 'kafka_load_node'\nFlink SQL> CREATE TABLE kafka_load_node (\n          `id` INT,\n          `name` STRINTG,\n           PRIMARY KEY (`id`) NOT ENFORCED\n          ) WITH (\n          'connector' = 'upsert-kafka-inlong',\n          'topic' = 'user',\n          'properties.bootstrap.servers' = 'localhost:9092',\n          'key.format' = 'csv',\n          'value.format' = 'csv'\n          )   \n")),(0,r.kt)("h3",{id:"inlong-dashboard-\u7528\u6cd5"},"InLong Dashboard \u7528\u6cd5"),(0,r.kt)("p",null,"\u521b\u5efa\u6570\u636e\u6d41\u65f6\uff0c\u6570\u636e\u6d41\u65b9\u5411\u9009\u62e9",(0,r.kt)("inlineCode",{parentName:"p"},"Kafka"),"\uff0c\u70b9\u51fb\u201c\u6dfb\u52a0\u201d\u8fdb\u884c\u914d\u7f6e\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Kafka Configuration",src:e(74709).Z,width:"1479",height:"661"})),(0,r.kt)("h3",{id:"inlong-manager-client-\u7528\u6cd5"},"InLong Manager Client \u7528\u6cd5"),(0,r.kt)("p",null,"TODO: \u5c06\u5728\u672a\u6765\u652f\u6301\u6b64\u529f\u80fd\u3002"),(0,r.kt)("h2",{id:"kafka-load-\u8282\u70b9\u53c2\u6570"},"Kafka Load \u8282\u70b9\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u9009"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connector"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u8fde\u63a5\u5668  1. Upsert Kafka \u8fde\u63a5\u5668\u4f7f\u7528\uff1a ",(0,r.kt)("inlineCode",{parentName:"td"},"upsert-kafka-inlong"),"  2. Kafka\u8fde\u63a5\u5668\u4f7f\u7528\uff1a ",(0,r.kt)("inlineCode",{parentName:"td"},"kafka-inlong"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8868\u7528\u4f5c source \u65f6\u8bfb\u53d6\u6570\u636e\u7684 topic \u540d\u3002\u4ea6\u652f\u6301\u7528\u5206\u53f7\u95f4\u9694\u7684 topic \u5217\u8868\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"td"},"topic-1;topic-2"),"\u3002\u6ce8\u610f\uff0c\u5bf9 source \u8868\u800c\u8a00\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"topic")," \u548c ",(0,r.kt)("inlineCode",{parentName:"td"},"topic-pattern")," \u4e24\u4e2a\u9009\u9879\u53ea\u80fd\u4f7f\u7528\u5176\u4e2d\u4e00\u4e2a\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic-pattern"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u52a8\u6001 Topic \u63d0\u53d6\u6a21\u5f0f, \u5f62\u5982 '${VARIABLE_NAME}', \u4ec5\u7528\u4e8e Kafka \u591a Sink \u573a\u666f\u4e14\u5f53 'format' \u4e3a 'raw' \u65f6\u6709\u6548\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.multiple.format"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Kafka \u539f\u59cb\u6570\u636e\u7684 Format, \u76ee\u524d\u4ec5\u652f\u6301 ","[canal-json","|","debezium-json]"," \u4ec5\u7528\u4e8e Kafka \u591a Sink \u573a\u666f\u4e14\u5f53 'format' \u4e3a 'raw' \u65f6\u6709\u6548\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"properties.bootstrap.servers"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9017\u53f7\u5206\u9694\u7684 Kafka broker \u5217\u8868\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"properties.*"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u8bbe\u7f6e\u548c\u4f20\u9012\u4efb\u610f Kafka \u7684\u914d\u7f6e\u9879\u3002\u540e\u7f00\u540d\u5fc5\u987b\u5339\u914d\u5728 ",(0,r.kt)("a",{parentName:"td",href:"https://kafka.apache.org/documentation/#configuration"},"Kafka \u914d\u7f6e\u6587\u6863")," \u4e2d\u5b9a\u4e49\u7684\u914d\u7f6e\u952e\u3002Flink \u5c06\u79fb\u9664 \"properties.\" \u914d\u7f6e\u952e\u524d\u7f00\u5e76\u5c06\u53d8\u6362\u540e\u7684\u914d\u7f6e\u952e\u548c\u503c\u4f20\u5165\u5e95\u5c42\u7684 Kafka \u5ba2\u6237\u7aef\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 'properties.allow.auto.create.topics' = 'false' \u6765\u7981\u7528 topic \u7684\u81ea\u52a8\u521b\u5efa\u3002\u4f46\u662f\u67d0\u4e9b\u914d\u7f6e\u9879\u4e0d\u652f\u6301\u8fdb\u884c\u914d\u7f6e\uff0c\u56e0\u4e3a Flink \u4f1a\u8986\u76d6\u8fd9\u4e9b\u914d\u7f6e\uff0c\u4f8b\u5982 'key.deserializer' \u548c 'value.deserializer'\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"format"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u4e8e Kafka \u5fc5\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6765\u5e8f\u5217\u5316\u6216\u53cd\u5e8f\u5217\u5316 Kafka \u6d88\u606f\u7684\u683c\u5f0f\u3002 \u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"td",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/"},"\u683c\u5f0f")," \u9875\u9762\u4ee5\u83b7\u53d6\u66f4\u591a\u5173\u4e8e\u683c\u5f0f\u7684\u7ec6\u8282\u548c\u76f8\u5173\u914d\u7f6e\u9879\u3002 \u6ce8\u610f\uff1a\u8be5\u914d\u7f6e\u9879\u548c 'value.format' \u4e8c\u8005\u5fc5\u9700\u5176\u4e00\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key.format"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6765\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316 Kafka \u6d88\u606f\u952e\uff08Key\uff09\u7684\u683c\u5f0f\u3002 \u8bf7\u53c2\u9605 \u683c\u5f0f \u9875\u9762\u4ee5\u83b7\u53d6\u66f4\u591a\u5173\u4e8e\u683c\u5f0f\u7684\u7ec6\u8282\u548c\u76f8\u5173\u914d\u7f6e\u9879\u3002 \u6ce8\u610f\uff1a\u5982\u679c\u5b9a\u4e49\u4e86\u952e\u683c\u5f0f\uff0c\u5219\u914d\u7f6e\u9879 'key.fields' \u4e5f\u662f\u5fc5\u9700\u7684\u3002 \u5426\u5219 Kafka \u8bb0\u5f55\u5c06\u4f7f\u7528\u7a7a\u503c\u4f5c\u4e3a\u952e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key.fields"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"List<String>")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u7ed3\u6784\u4e2d\u7528\u6765\u914d\u7f6e\u6d88\u606f\u952e\uff08Key\uff09\u683c\u5f0f\u6570\u636e\u7c7b\u578b\u7684\u5b57\u6bb5\u5217\u8868\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u8be5\u5217\u8868\u4e3a\u7a7a\uff0c\u56e0\u6b64\u6d88\u606f\u952e\u6ca1\u6709\u5b9a\u4e49\u3002 \u5217\u8868\u683c\u5f0f\u4e3a 'field1;field2'\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key.fields-prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e3a\u6240\u6709\u6d88\u606f\u952e\uff08Key\uff09\u683c\u5f0f\u5b57\u6bb5\u6307\u5b9a\u81ea\u5b9a\u4e49\u524d\u7f00\uff0c\u4ee5\u907f\u514d\u4e0e\u6d88\u606f\u4f53\uff08Value\uff09\u683c\u5f0f\u5b57\u6bb5\u91cd\u540d\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u524d\u7f00\u4e3a\u7a7a\u3002 \u5982\u679c\u5b9a\u4e49\u4e86\u524d\u7f00\uff0c\u8868\u7ed3\u6784\u548c\u914d\u7f6e\u9879 'key.fields' \u90fd\u9700\u8981\u4f7f\u7528\u5e26\u524d\u7f00\u7684\u540d\u79f0\u3002 \u5f53\u6784\u5efa\u6d88\u606f\u952e\u683c\u5f0f\u5b57\u6bb5\u65f6\uff0c\u524d\u7f00\u4f1a\u88ab\u79fb\u9664\uff0c\u6d88\u606f\u952e\u683c\u5f0f\u5c06\u4f1a\u4f7f\u7528\u65e0\u524d\u7f00\u7684\u540d\u79f0\u3002 \u8bf7\u6ce8\u610f\u8be5\u914d\u7f6e\u9879\u8981\u6c42\u5fc5\u987b\u5c06 'value.fields-include' \u914d\u7f6e\u4e3a 'EXCEPT_KEY'\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value.format"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009 for upsert Kafka"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5bf9 Kafka \u6d88\u606f\u4e2d value \u90e8\u5206\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u7684\u683c\u5f0f\u3002\u652f\u6301\u7684\u683c\u5f0f\u5305\u62ec 'csv'\u3001'json'\u3001'avro'\u3002\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"td",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/connectors/table/formats/overview/"},"\u683c\u5f0f")," \u9875\u9762\u4ee5\u83b7\u53d6\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u548c\u683c\u5f0f\u53c2\u6570\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value.fields-include"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"ALL"),(0,r.kt)("td",{parentName:"tr",align:null},"Enum Possible values: ","[ALL, EXCEPT_KEY]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a7\u5236\u54ea\u4e9b\u5b57\u6bb5\u5e94\u8be5\u51fa\u73b0\u5728 value \u4e2d\u3002\u53ef\u53d6\u503c\uff1a",(0,r.kt)("br",null)," ALL\uff1a\u6d88\u606f\u7684 value \u90e8\u5206\u5c06\u5305\u542b schema \u4e2d\u6240\u6709\u7684\u5b57\u6bb5\uff0c\u5305\u62ec\u5b9a\u4e49\u4e3a\u4e3b\u952e\u7684\u5b57\u6bb5\u3002",(0,r.kt)("br",null)," EXCEPT_KEY\uff1a\u8bb0\u5f55\u7684 value \u90e8\u5206\u5305\u542b schema \u7684\u6240\u6709\u5b57\u6bb5\uff0c\u5b9a\u4e49\u4e3a\u4e3b\u952e\u7684\u5b57\u6bb5\u9664\u5916\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.partitioner"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"'default'"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Flink partition \u5230 Kafka partition \u7684\u5206\u533a\u6620\u5c04\u5173\u7cfb\uff0c\u53ef\u9009\u503c\u6709\uff1a",(0,r.kt)("br",null),"default\uff1a\u4f7f\u7528 Kafka \u9ed8\u8ba4\u7684\u5206\u533a\u5668\u5bf9\u6d88\u606f\u8fdb\u884c\u5206\u533a\u3002",(0,r.kt)("br",null),"fixed\uff1a\u6bcf\u4e2a Flink partition \u6700\u7ec8\u5bf9\u5e94\u6700\u591a\u4e00\u4e2a Kafka partition\u3002",(0,r.kt)("br",null),"round-robin\uff1aFlink partition \u6309\u8f6e\u5faa\uff08round-robin\uff09\u7684\u6a21\u5f0f\u5bf9\u5e94\u5230 Kafka partition\u3002",(0,r.kt)("br",null),"raw-hash: \u57fa\u4e8e 'sink.multiple.partition-pattern' \u63d0\u53d6\u503c\u4f5c 'hash' \u4ee5\u786e\u5b9a\u6700\u7ec8\u7684\u5206\u533a, \u4ec5\u7528\u4e8e Kafka \u591a Sink \u573a\u666f\u4e14\u5f53 'format' \u4e3a 'raw' \u65f6\u6709\u6548\u3002\u53ea\u6709\u5f53\u672a\u6307\u5b9a\u6d88\u606f\u7684\u6d88\u606f\u952e\u65f6\u751f\u6548\u3002",(0,r.kt)("br",null),"\u81ea\u5b9a\u4e49 FlinkKafkaPartitioner \u7684\u5b50\u7c7b\uff1a\u4f8b\u5982 'org.mycompany.MyPartitioner'\u3002\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"td",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/connectors/table/kafka/#sink-%E5%88%86%E5%8C%BA"},"Sink \u5206\u533a")," \u4ee5\u83b7\u53d6\u66f4\u591a\u7ec6\u8282\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.multiple.partition-pattern"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u52a8\u6001 Partition \u63d0\u53d6\u6a21\u5f0f, \u5f62\u5982 '${VARIABLE_NAME}'\u4ec5\u7528\u4e8e Kafka \u591a Sink \u573a\u666f\u4e14\u5f53 'format' \u4e3a 'raw'\u3001'sink.partitioner' \u4e3a 'raw-hash' \u65f6\u6709\u6548\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.semantic"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"at-least-once"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49 Kafka sink \u7684\u8bed\u4e49\u3002\u6709\u6548\u503c\u4e3a 'at-least-once'\uff0c'exactly-once' \u548c 'none'\u3002\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"td",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/connectors/table/kafka/#%E4%B8%80%E8%87%B4%E6%80%A7%E4%BF%9D%E8%AF%81"},"\u4e00\u81f4\u6027\u4fdd\u8bc1")," \u4ee5\u83b7\u53d6\u66f4\u591a\u7ec6\u8282\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.parallelism"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49 Kafka sink \u7b97\u5b50\u7684\u5e76\u884c\u5ea6\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5e76\u884c\u5ea6\u7531\u6846\u67b6\u5b9a\u4e49\u4e3a\u4e0e\u4e0a\u6e38\u4e32\u8054\u7684\u7b97\u5b50\u76f8\u540c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong metric \u7684\u6807\u7b7e\u503c\uff0c\u8be5\u503c\u7684\u6784\u6210\u4e3agroupId=",(0,r.kt)("inlineCode",{parentName:"td"},"{groupId}"),"&streamId=",(0,r.kt)("inlineCode",{parentName:"td"},"{streamId}"),"&nodeId=",(0,r.kt)("inlineCode",{parentName:"td"},"{nodeId}"),"\u3002")))),(0,r.kt)("h2",{id:"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5"},"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5"),(0,r.kt)("p",null,"\u652f\u6301\u4e3a\u683c\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"canal-json-inlong"),"\u5199\u5143\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.4.0/data_node/extract_node/kafka"},"Kafka Extract Node")," \u5173\u4e8e\u5143\u6570\u636e\u7684\u5217\u8868\u3002"),(0,r.kt)("h2",{id:"\u7279\u5f81"},"\u7279\u5f81"),(0,r.kt)("h3",{id:"\u652f\u6301\u52a8\u6001-schema-\u5199\u5165"},"\u652f\u6301\u52a8\u6001 Schema \u5199\u5165"),(0,r.kt)("p",null,"\u52a8\u6001 Schema \u5199\u5165\u652f\u6301\u4ece\u6570\u636e\u4e2d\u52a8\u6001\u63d0\u53d6 Topic \u548c Partition, \u5e76\u5199\u5165\u5230\u5bf9\u5e94\u7684 Topic\n\u548c Partition\u3002\u4e3a\u4e86\u652f\u6301\u52a8\u6001 Schema \u5199\u5165\uff0c\u9700\u8981\u8bbe\u7f6e Kafka \u7684 Format \u683c\u5f0f\u4e3a 'raw',\n\u540c\u65f6\u9700\u8981\u8bbe\u7f6e\u4e0a\u6e38\u6570\u636e\u7684\u5e8f\u5217\u5316\u683c\u5f0f(\u901a\u8fc7\u9009\u9879 'sink.multiple.format'\n\u6765\u8bbe\u7f6e, \u76ee\u524d\u4ec5\u652f\u6301 ","[canal-json|debezium-json]",")\u3002"),(0,r.kt)("h4",{id:"\u52a8\u6001-topic-\u63d0\u53d6"},"\u52a8\u6001 Topic \u63d0\u53d6"),(0,r.kt)("p",null,"\u52a8\u6001 Topic \u63d0\u53d6\u5373\u901a\u8fc7\u89e3\u6790 Topic Pattern \u5e76\u4ece\u6570\u636e\u4e2d\u63d0\u53d6 Topic \u3002\n\u4e3a\u4e86\u652f\u6301\u52a8\u6001\u63d0\u53d6 Topic, \u9700\u8981\u8bbe\u7f6e\u9009\u9879 'topic-pattern', Kafka Load Node \u4f1a\u89e3\u6790 'topic-pattern' \u4f5c\u4e3a\u6700\u7ec8\u7684 Topic,\n\u5982\u679c\u89e3\u6790\u5931\u8d25, \u4f1a\u5199\u5165\u901a\u8fc7 'topic' \u8bbe\u7f6e\u7684\u9ed8\u8ba4 Topic \u4e2d\u3002'topic-pattern' \u652f\u6301\u5e38\u91cf\u548c\u53d8\u91cf,\u5e38\u91cf\u5c31\u662f\u5b57\u7b26\u4e32\u5e38\u91cf,\n\u53d8\u91cf\u662f\u4e25\u683c\u901a\u8fc7 '${VARIABLE_NAME}' \u6765\u8868\u793a, \u53d8\u91cf\u7684\u53d6\u503c\u6765\u81ea\u4e8e\u6570\u636e\u672c\u8eab, \u5373\u53ef\u4ee5\u662f\u901a\u8fc7 'sink.multiple.format'\n\u6307\u5b9a\u7684\u67d0\u79cd Format \u7684\u5143\u6570\u636e\u5b57\u6bb5, \u4e5f\u53ef\u4ee5\u662f\u6570\u636e\u4e2d\u7684\u7269\u7406\u5b57\u6bb5\u3002"),(0,r.kt)("p",null,"\u5173\u4e8e 'topic-parttern' \u7684\u4f8b\u5b50\u5982\u4e0b:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"'sink.multiple.format' \u4e3a 'canal-json':")),(0,r.kt)("p",null,"\u4e0a\u6e38\u6570\u636e\u4e3a:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "data": [\n    {\n      "id": "111",\n      "name": "scooter",\n      "description": "Big 2-wheel scooter",\n      "weight": "5.18"\n    }\n  ],\n  "database": "inventory",\n  "es": 1589373560000,\n  "id": 9,\n  "isDdl": false,\n  "mysqlType": {\n    "id": "INTEGER",\n    "name": "VARCHAR(255)",\n    "description": "VARCHAR(512)",\n    "weight": "FLOAT"\n  },\n  "old": [\n    {\n      "weight": "5.15"\n    }\n  ],\n  "pkNames": [\n    "id"\n  ],\n  "sql": "",\n  "sqlType": {\n    "id": 4,\n    "name": 12,\n    "description": 12,\n    "weight": 7\n  },\n  "table": "products",\n  "ts": 1589373560798,\n  "type": "UPDATE"\n} \n')),(0,r.kt)("p",null,"'topic-pattern' \u4e3a '{database}_${table}', \u63d0\u53d6\u540e\u7684 Topic \u4e3a 'inventory_products' ('database', 'table' \u4e3a\u5143\u6570\u636e\u5b57\u6bb5)"),(0,r.kt)("p",null,"'topic-pattern' \u4e3a '{database}",(0,r.kt)("em",{parentName:"p"},"${table}"),"${id}', \u63d0\u53d6\u540e\u7684 Topic \u4e3a 'inventory_products_111' ('database', 'table' \u4e3a\u5143\u6570\u636e\u5b57\u6bb5, 'id' \u4e3a\u7269\u7406\u5b57\u6bb5)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"'sink.multiple.format' \u4e3a 'debezium-json':")),(0,r.kt)("p",null,"\u4e0a\u6e38\u6570\u636e\u4e3a:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "before": {\n    "id": 4,\n    "name": "scooter",\n    "description": "Big 2-wheel scooter",\n    "weight": 5.18\n  },\n  "after": {\n    "id": 4,\n    "name": "scooter",\n    "description": "Big 2-wheel scooter",\n    "weight": 5.15\n  },\n  "source": {\n    "db": "inventory",\n    "table": "products"\n  },\n  "op": "u",\n  "ts_ms": 1589362330904,\n  "transaction": null\n}\n')),(0,r.kt)("p",null,"'topic-pattern' \u4e3a '{database}_${table}', \u63d0\u53d6\u540e\u7684 Topic \u4e3a 'inventory_products' ('source.db', 'source.table' \u4e3a\u5143\u6570\u636e\u5b57\u6bb5)"),(0,r.kt)("p",null,"'topic-pattern' \u4e3a '{database}",(0,r.kt)("em",{parentName:"p"},"${table}"),"${id}', \u63d0\u53d6\u540e\u7684 Topic \u4e3a 'inventory_products_4' ('source.db', 'source.table' \u4e3a\u5143\u6570\u636e\u5b57\u6bb5, 'id' \u4e3a\u7269\u7406\u5b57\u6bb5)"),(0,r.kt)("h4",{id:"\u52a8\u6001-partition-\u63d0\u53d6"},"\u52a8\u6001 Partition \u63d0\u53d6"),(0,r.kt)("p",null,"\u52a8\u6001 Partition \u63d0\u53d6\u5373\u901a\u8fc7\u89e3\u6790 Partition Pattern \u5e76\u4ece\u6570\u636e\u4e2d\u63d0\u53d6 Partition, \u8fd9\u548c\u52a8\u6001 Topic \u63d0\u53d6\u7c7b\u4f3c\u3002\n\u4e3a\u4e86\u652f\u6301\u52a8\u6001\u63d0\u53d6 Topic, \u9700\u8981\u8bbe\u7f6e\u9009\u9879 'sink.partitioner' \u4e3a 'raw-hash'\n\u548c\u9009\u9879 'sink.multiple.partition-pattern', Kafka Load Node \u4f1a\u89e3\u6790 'sink.multiple.partition-pattern'\n\u4f5c\u4e3a Partition key, \u5e76\u5bf9 Partition key \u8fdb\u884c Hash \u548c\u5bf9 Partition Size \u53d6\u4f59\u4ee5\u786e\u5b9a\u6700\u7ec8 Partition,\n\u5982\u679c\u89e3\u6790\u5931\u8d25, \u4f1a\u8fd4\u56de null \u5e76\u6267\u884c Kafka \u9ed8\u8ba4\u7684\u5206\u533a\u7b56\u7565\u3002'sink.multiple.partition-pattern'\n\u652f\u6301\u5e38\u91cf\u3001\u53d8\u91cf\u548c\u4e3b\u952e,\u5e38\u91cf\u5c31\u662f\u5b57\u7b26\u4e32\u5e38\u91cf, \u53d8\u91cf\u662f\u4e25\u683c\u901a\u8fc7 ${VARIABLE_NAME} \u6765\u8868\u793a, \u53d8\u91cf\u7684\u53d6\u503c\u6765\u81ea\u4e8e\u6570\u636e\u672c\u8eab,\n\u5373\u53ef\u4ee5\u662f\u901a\u8fc7 'sink.multiple.format' \u6307\u5b9a\u7684\u67d0\u79cd Format \u7684\u5143\u6570\u636e\u5b57\u6bb5, \u4e5f\u53ef\u4ee5\u662f\u6570\u636e\u4e2d\u7684\u7269\u7406\u5b57\u6bb5,\n\u4e3b\u952e\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u5e38\u91cf 'PRIMARY_KEY', \u57fa\u4e8e\u67d0\u79cd Format \u7684\u6570\u636e\u683c\u5f0f\u4e0b\u6765\u63d0\u53d6\u8be5\u6761\u8bb0\u5f55\u7684\u4e3b\u952e\u503c\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f: \u57fa\u4e8e 'PRIMARY_KEY' \u7684 Kafka \u52a8\u6001 Partition \u63d0\u53d6, \u6709\u4e00\u4e2a\u9650\u5236, \u5373\u9700\u8981\u5728\u6570\u636e\u4e2d\u6307\u5b9a\u4e3b\u952e\u4fe1\u606f,\n\u4f8b\u5982 Format \u4e3a 'canal-json', \u5219\u5176\u4e3b\u952e Key \u4e3a 'pkNames'\u3002\u53e6\u5916\u7531\u4e8e Format 'debezium-json' \u65e0\u4e3b\u952e\u7684\u5b9a\u4e49, \u5bf9\u6b64\n\u6211\u4eec\u7ea6\u5b9a 'debezium-json' \u7684\u4e3b\u952e Key \u4e5f\u4e3a 'pkNames' \u4e14\u548c\u5176\u4ed6\u5143\u6570\u636e\u5b57\u6bb5\u5982 'table'\u3001'db' \u4e00\u6837\u5305\u542b\u5728 'source'\u4e2d,\n\u5982\u679c\u7528\u5230\u4e86\u6309\u4e3b\u952e\u5206\u533a, \u4e14 Format \u4e3a 'debezium-json', \u9700\u8981\u786e\u4fdd\u771f\u5b9e\u6570\u636e\u6ee1\u8db3\u4e0a\u8ff0\u7ea6\u5b9a\u3002"),(0,r.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.kt)("p",null,"Kafka \u5c06\u6d88\u606f\u952e\u503c\u4ee5\u4e8c\u8fdb\u5236\u8fdb\u884c\u5b58\u50a8\uff0c\u56e0\u6b64 Kafka \u5e76\u4e0d\u5b58\u5728 schema \u6216\u6570\u636e\u7c7b\u578b\u3002Kafka \u6d88\u606f\u4f7f\u7528\u683c\u5f0f\u914d\u7f6e\u8fdb\u884c\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\uff0c\u4f8b\u5982 csv\uff0cjson\uff0cavro\u3002 \u56e0\u6b64\uff0c\u6570\u636e\u7c7b\u578b\u6620\u5c04\u53d6\u51b3\u4e8e\u4f7f\u7528\u7684\u683c\u5f0f\u3002\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/connectors/table/formats/overview/"},"\u683c\u5f0f")," \u9875\u9762\u4ee5\u83b7\u53d6\u66f4\u591a\u7ec6\u8282\u3002"))}s.isMDXComponent=!0},74709:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/images/kafka-608e2ab7a2ba34e56c677584ad65b22e.png"}}]);