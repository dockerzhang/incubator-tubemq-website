"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[97845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,k=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u5b89\u88c5\u90e8\u7f72"},i=void 0,o={unversionedId:"modules/audit/quick_start",id:"version-1.10.0/modules/audit/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u6240\u6709\u7684\u5b89\u88c5\u6587\u4ef6\u90fd\u5728 inlong-audit \u76ee\u5f55\u4e0b\uff0c\u5982\u679c\u4f7f\u7528 MySQL \u5b58\u50a8\u5ba1\u8ba1\u6570\u636e\uff0c\u9700\u8981\u5148\u901a\u8fc7sql/apacheinlongaudit.sql\u521d\u59cb\u5316\u6570\u636e\u5e93\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.10.0/modules/audit/quick_start.md",sourceDirName:"modules/audit",slug:"/modules/audit/quick_start",permalink:"/zh-CN/docs/modules/audit/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.10.0/modules/audit/quick_start.md",tags:[],version:"1.10.0",frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72"},sidebar:"tutorialSidebar",previous:{title:"\u53c2\u6570\u914d\u7f6e",permalink:"/zh-CN/docs/modules/audit/configure"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/data_node/extract_node/overview"}},u={},s=[{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"Audit Proxy",id:"audit-proxy",level:2},{value:"\u914d\u7f6e\u6d88\u606f\u961f\u5217",id:"\u914d\u7f6e\u6d88\u606f\u961f\u5217",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:3},{value:"Audit Store",id:"audit-store",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56-1",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8-1",level:3}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6240\u6709\u7684\u5b89\u88c5\u6587\u4ef6\u90fd\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"inlong-audit")," \u76ee\u5f55\u4e0b\uff0c\u5982\u679c\u4f7f\u7528 MySQL \u5b58\u50a8\u5ba1\u8ba1\u6570\u636e\uff0c\u9700\u8981\u5148\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"sql/apache_inlong_audit.sql"),"\u521d\u59cb\u5316\u6570\u636e\u5e93\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521d\u59cb\u5316 database\nmysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_audit.sql\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f7f\u7528 ClickHouse \u5b58\u50a8\u5ba1\u8ba1\u6570\u636e\uff0c\u9700\u8981\u5148\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"sql/apache_inlong_audit_clickhouse.sql"),"\u521d\u59cb\u5316\u6570\u636e\u5e93\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521d\u59cb\u5316 database\nclickhouse client -u DB_USER --password DB_PASSWD < sql/apache_inlong_audit_clickhouse.sql\n")),(0,r.kt)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 MySQL \u6570\u636e\u5e93\uff0c\u8bf7\u4e0b\u8f7d ",(0,r.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.28/mysql-connector-java-8.0.28.jar"},"mysql-connector-java-8.0.28.jar"),", \u5e76\u5c06\u5176\u653e\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},"lib/")," \u76ee\u5f55\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 PostgreSQL \u6570\u636e\u5e93\uff0c\u4e0d\u9700\u8981\u5f15\u5165\u989d\u5916\u4f9d\u8d56\u3002")),(0,r.kt)("h2",{id:"audit-proxy"},"Audit Proxy"),(0,r.kt)("h3",{id:"\u914d\u7f6e\u6d88\u606f\u961f\u5217"},"\u914d\u7f6e\u6d88\u606f\u961f\u5217"),(0,r.kt)("p",null,"\u6d88\u606f\u961f\u5217\u670d\u52a1\u76ee\u524d\u53ef\u4ee5\u4f7f\u7528 Apache Pulsar\u3001Apache Kafka \u6216\u8005 InLong TubeMQ\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u82e5\u4f7f\u7528 Pulsar\uff0c\u914d\u7f6e\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"li"},"conf/audit-proxy-pulsar.conf"),"\uff0c\u4fee\u6539\u4e0b\u5217\u914d\u7f6e\u4e2d\u7684 Pulsar Topic \u4fe1\u606f\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"agent1.sinks.pulsar-sink-msg1.topic = persistent://public/default/inlong-audit\nagent1.sinks.pulsar-sink-msg2.topic = persistent://public/default/inlong-audit\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u82e5\u4f7f\u7528 TubeMQ\uff0c\u914d\u7f6e\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"li"},"conf/audit-proxy-tube.conf"),"\uff0c\u4fee\u6539\u4e0b\u5217\u914d\u7f6e\u4e2d\u7684 TubeMQ Topic \u4fe1\u606f\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"agent1.sinks.tube-sink-msg1.topic = inlong-audit\nagent1.sinks.tube-sink-msg2.topic = inlong-audit\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u82e5\u4f7f\u7528 Kafka\uff0c\u914d\u7f6e\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"li"},"conf/audit-proxy-kafka.conf"),"\uff0c\u4fee\u6539\u4e0b\u5217\u914d\u7f6e\u4e2d\u7684 Kafka Topic \u4fe1\u606f\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"agent1.sinks.kafka-sink-msg1.topic = inlong-audit\nagent1.sinks.kafka-sink-msg2.topic = inlong-audit\n")),(0,r.kt)("h3",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"# \u9ed8\u8ba4\u4f7f\u7528 pulsar \u4f5c\u4e3a\u6d88\u606f\u961f\u5217\uff0c\u52a0\u8f7d audit-proxy-pulsar.conf \u914d\u7f6e\u6587\u4ef6\nbash +x ./bin/proxy-start.sh [pulsar\uff5ctube\uff5ckafka]\n")),(0,r.kt)("h2",{id:"audit-store"},"Audit Store"),(0,r.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/application.properties")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"# proxy.type: pulsar / tube / kafka\naudit.config.proxy.type=pulsar\n\n# store.server: mysql / elasticsearch \naudit.config.store.mode=mysql\n\n# manger config\nmanager.hosts=127.0.0.1:8083\nproxy.cluster.tag=default_cluster\n\n# audit pulsar config (optional)\naudit.pulsar.topic=persistent://public/default/inlong-audit\naudit.pulsar.consumer.sub.name=sub-audit\n\n# audit tube config (optional)\naudit.tube.topic=inlong-audit\naudit.tube.consumer.group.name=inlong-audit-consumer\n\n# kafka config (optional)\naudit.kafka.topic=inlong-audit\naudit.kafka.consumer.name=inlong-audit-consumer\naudit.kafka.group.id=audit-consumer-group\n\n# mysql config\nspring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL\nspring.datasource.druid.username=root\nspring.datasource.druid.password=inlong\n\n# es config (optional)\nelasticsearch.host=127.0.0.1\nelasticsearch.port=9200\n\n# clickhouse config (optional)\nclickhouse.url=jdbc:clickhouse://127.0.0.1:8123/default\nclickhouse.username=default\nclickhouse.password=default\n")),(0,r.kt)("h3",{id:"\u4f9d\u8d56-1"},"\u4f9d\u8d56"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 MySQL \u6570\u636e\u5e93\uff0c\u8bf7\u4e0b\u8f7d ",(0,r.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.26/mysql-connector-java-8.0.28.jar"},"mysql-connector-java-8.0.28.jar"),", \u5e76\u5c06\u5176\u653e\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},"lib/")," \u76ee\u5f55\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 PostgreSQL \u6570\u636e\u5e93\uff0c\u4e0d\u9700\u8981\u5f15\u5165\u989d\u5916\u4f9d\u8d56\u3002")),(0,r.kt)("h3",{id:"\u542f\u52a8-1"},"\u542f\u52a8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"bash +x ./bin/store-start.sh\n")),(0,r.kt)("p",null,"Audit Proxy \u9ed8\u8ba4\u76d1\u542c\u7aef\u53e3\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"10081"),"\u3002"))}d.isMDXComponent=!0}}]);