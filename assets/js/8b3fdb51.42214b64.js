"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[82994],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),l=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=l(a),h=n,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||o;return a?i.createElement(m,r(r({ref:t},u),{},{components:a})):i.createElement(m,r({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=h;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[c]="string"==typeof e?e:n,r[1]=d;for(var l=2;l<o;l++)r[l]=a[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},76621:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=a(87462),n=(a(67294),a(3905));const o={title:"Release 1.6.0",author:"Charles Zhang",author_url:"https://github.com/dockerzhang",author_image_url:"https://avatars.githubusercontent.com/u/18047329?v=4",tags:["Apache InLong","Version"]},r=void 0,d={permalink:"/blog/2023/03/23/release-1.6.0",editUrl:"https://github.com/apache/inlong-website/edit/master/blog/blog/2023-03-23-release-1.6.0.md",source:"@site/blog/2023-03-23-release-1.6.0.md",title:"Release 1.6.0",description:"Apache InLong recently released version 1.6.0, which closed about 202+ issues, including 11+ major features and 80+ optimizations. Mainly completed the addition of Kudu data stream, improvement of Redis data stream, the addition of MQ cache cluster selector strategy, optimization of Audit ID allocation rules, the addition of data node connection testing, optimization of Sort Audit reconciliation benchmark time, and expansion of Audit support for using Kafka to cache audit data.",date:"2023-03-23T00:00:00.000Z",formattedDate:"March 23, 2023",tags:[{label:"Apache InLong",permalink:"/blog/tags/apache-in-long"},{label:"Version",permalink:"/blog/tags/version"}],readingTime:7.105,hasTruncateMarker:!0,authors:[{name:"Charles Zhang",url:"https://github.com/dockerzhang",imageURL:"https://avatars.githubusercontent.com/u/18047329?v=4"}],frontMatter:{title:"Release 1.6.0",author:"Charles Zhang",author_url:"https://github.com/dockerzhang",author_image_url:"https://avatars.githubusercontent.com/u/18047329?v=4",tags:["Apache InLong","Version"]},nextItem:{title:"Release 1.5.0",permalink:"/blog/2023/01/13/release-1.5.0"}},s={authorsImageUrls:[void 0]},l=[{value:"About Apache InLong",id:"about-apache-inlong",level:2},{value:"1.6.0 Overview",id:"160-overview",level:2},{value:"Agent Module",id:"agent-module",level:3},{value:"DataProxy Module",id:"dataproxy-module",level:3},{value:"Manager Module",id:"manager-module",level:3},{value:"Sort Module",id:"sort-module",level:3},{value:"Dashboard Module",id:"dashboard-module",level:3},{value:"Other",id:"other",level:3},{value:"1.6.0 Feature Introduction",id:"160-feature-introduction",level:2},{value:"Supported Kudu data stream",id:"supported-kudu-data-stream",level:3},{value:"Improved the Redis data stream",id:"improved-the-redis-data-stream",level:3},{value:"Added MQ cluster Selector strategy",id:"added-mq-cluster-selector-strategy",level:3},{value:"Optimized the Audit ID distribution rules",id:"optimized-the-audit-id-distribution-rules",level:3},{value:"Added connection test for new Data Node",id:"added-connection-test-for-new-data-node",level:3},{value:"Optimized reconciliation benchmark time for Sort Audit",id:"optimized-reconciliation-benchmark-time-for-sort-audit",level:3},{value:"Supported using Kafka as cache MQ for Audit",id:"supported-using-kafka-as-cache-mq-for-audit",level:3},{value:"Follow-up planning",id:"follow-up-planning",level:2}],u={toc:l},c="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Apache InLong recently released version 1.6.0, which closed about 202+ issues, including 11+ major features and 80+ optimizations. Mainly completed the addition of Kudu data stream, improvement of Redis data stream, the addition of MQ cache cluster selector strategy, optimization of Audit ID allocation rules, the addition of data node connection testing, optimization of Sort Audit reconciliation benchmark time, and expansion of Audit support for using Kafka to cache audit data."),(0,n.kt)("h2",{id:"about-apache-inlong"},"About Apache InLong"),(0,n.kt)("p",null,"As the industry's first one-stop open-source massive data integration framework, Apache InLong provides automatic, safe, reliable, and high-performance data transmission capabilities to facilitate businesses to build stream-based data analysis, modeling, and applications quickly. At present, InLong is widely used in various industries such as advertising, payment, social networking, games, artificial intelligence, etc., serving thousands of businesses, among which the scale of high-performance scene data exceeds 1 trillion lines per day, and the scale of high-reliability scene data exceeds 10 trillion lines per day."),(0,n.kt)("p",null,'The core keywords of InLong project positioning are "one-stop" and "massive data". For "one-stop", we hope to shield technical details, provide complete data integration and support services, and implement out-of-the-box; With its advantages, such as multi-cluster management, it can stably support larger-scale data volumes based on trillions lines per day.'),(0,n.kt)("h2",{id:"160-overview"},"1.6.0 Overview"),(0,n.kt)("p",null,"Apache InLong recently released version 1.6.0, which closed about 202+ issues, including 11+ major features and 80+ optimizations. Mainly completed the addition of Kudu data stream, improvement of Redis data stream, the addition of MQ cache cluster selector strategy, optimization of Audit ID allocation rules, the addition of data node connection testing, optimization of Sort Audit reconciliation benchmark time, and expansion of Audit support for using Kafka to cache audit data, mainly including the following:"),(0,n.kt)("h3",{id:"agent-module"},"Agent Module"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Improved the file collection stability and fixed multiple collection bugs"),(0,n.kt)("li",{parentName:"ul"},"Fixed multiple bugs such as MQTT, MongoDB")),(0,n.kt)("h3",{id:"dataproxy-module"},"DataProxy Module"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added MQ cluster Selector strategy to reduce the number of producers"),(0,n.kt)("li",{parentName:"ul"},"Added Audit report for the new MQ Sink")),(0,n.kt)("h3",{id:"manager-module"},"Manager Module"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Optimized the Audit ID distribution rules and supported multiple Load Data Node audit"),(0,n.kt)("li",{parentName:"ul"},"Optimized Clickhouse data node metadata configuration and management"),(0,n.kt)("li",{parentName:"ul"},"Added connection test for new Data Node, check the availability of nodes"),(0,n.kt)("li",{parentName:"ul"},"Added Pulsar Multi-Cluster Topic and Subscription Management"),(0,n.kt)("li",{parentName:"ul"},"Fixed multiple data stream management and status management bugs")),(0,n.kt)("h3",{id:"sort-module"},"Sort Module"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added data Audit for Kafka Source connector"),(0,n.kt)("li",{parentName:"ul"},"Added new CSV format and dirty data archive for Doris connector"),(0,n.kt)("li",{parentName:"ul"},"Supported Array, Map, Struct, and other complex types"),(0,n.kt)("li",{parentName:"ul"},"Optimized Pulsar Connector to solve the issue of data loss"),(0,n.kt)("li",{parentName:"ul"},"Fixed the writing in chaos for Canal-JSON metadata fields"),(0,n.kt)("li",{parentName:"ul"},"Optimized reconciliation benchmark time for Sort Audit")),(0,n.kt)("h3",{id:"dashboard-module"},"Dashboard Module"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Continue to optimize the Dashboard experience and reduce the threshold for first users"),(0,n.kt)("li",{parentName:"ul"},"Added node management for Redis, Kudu, and other data nodes"),(0,n.kt)("li",{parentName:"ul"},"Optimized data node parameters such as PostgreSQL, Kafka, Redis, etc."),(0,n.kt)("li",{parentName:"ul"},"Simplified the Agent node IP selection strategy"),(0,n.kt)("li",{parentName:"ul"},"Added connection test pages for data nodes")),(0,n.kt)("h3",{id:"other"},"Other"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Supported using Kafka as cache MQ for Audit"),(0,n.kt)("li",{parentName:"ul"},"Audit uniformly obtains the MQ cluster from Manager"),(0,n.kt)("li",{parentName:"ul"},"Optimized deployment steps such as Standalone, Docker-Compose, Kubernetes, and other deployment steps")),(0,n.kt)("h2",{id:"160-feature-introduction"},"1.6.0 Feature Introduction"),(0,n.kt)("h3",{id:"supported-kudu-data-stream"},"Supported Kudu data stream"),(0,n.kt)("p",null,"Apache Kudu is an open-source storage engine by Cloudera, which can provide low-delayed random read and write and efficient data analysis capabilities simultaneously. In version 1.6.0, InLong supports the Kudu data stream, including adding Kudu Connector, metadata management, metrics, etc. Kudu data stream contributed by @featzhang independently. Interested users can make an installation and experience.\n",(0,n.kt)("img",{alt:"1.6.0-create-kudu",src:a(41784).Z,width:"1488",height:"1063"})),(0,n.kt)("h3",{id:"improved-the-redis-data-stream"},"Improved the Redis data stream"),(0,n.kt)("p",null,"Redis is a viral open-source memory database with high performance and rich data structure. In version 1.6.0, InLong perfects the Redis data stream, adding SinkFunction, metadata management, indicators, and Dashboard pages in Redis Connector. Supported data formats like Redis's PLAIN, Hash, and Bitmap and realized Redis Schema conversion through the SCHEMAMAPPING mechanism. Redis data streams through the SCHEMA mapping mode, and SCHEMA can be converted into different ","[Redis Data-Type]"," (",(0,n.kt)("a",{parentName:"p",href:"https://redis.io/docs/data-types/tutorial/"},"https://redis.io/docs/data-types/tutorial/"),"). Redis data stream is mainly contributed to and fulfilled by @featzhang independently. For details, please refer to ","[INLONG-7060]"," (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/issues/7060"},"https://github.com/apache/inlong/issues/7060"),").\n",(0,n.kt)("img",{alt:"1.6.0-update-redis",src:a(93802).Z,width:"755",height:"792"})),(0,n.kt)("h3",{id:"added-mq-cluster-selector-strategy"},"Added MQ cluster Selector strategy"),(0,n.kt)("p",null,"In the multi-MQ cluster scene, if DataProxy is connected to all MQ clusters simultaneously, the number of producers in the MQ cluster will surge. At the same time, the amount of metadata of ZooKeeeper is excess, which will cause OutOfMemory. In version 1.6.0, InLong increased the selector strategy of the MQ cache cluster level (mainly for Apache Pulsar). As a result, the DataProxy node can only choose some MQ clusters under the same tag for production, thereby reducing the number of producer connections and Zookeeper metadata. @Luchunliang mainly develops this feature. For details, please refer to ","[INLONG-7231]"," (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/pull/7236"},"https://github.com/apache/inlong/pull/7236"),").\n",(0,n.kt)("img",{alt:"1.6.0-mq-selector",src:a(60456).Z,width:"1468",height:"447"})),(0,n.kt)("h3",{id:"optimized-the-audit-id-distribution-rules"},"Optimized the Audit ID distribution rules"),(0,n.kt)("p",null,"In the original design of InLong Audit, the receiving and sending number of each module is an independent audit ID, which is used to record the receiving and sending number for each module. There is a defect in this scheme. If InLong Sort sorted data to multiple targets at the same time (such as writing Hive and Clickhouse), the audit ID cannot distinguish different data streams for the Sort. In version 1.6.0, the Audit ID distribution rules are optimized, the different data stream has a different audit ID, achieving data audit of multiple sorting targets for the same data stream. This feature also involves changes in Manager and Sort module. It is developed and implemented by @FuWeng11 and @EMSNAP. For details, please refer to ","[INLONG-7389]"," (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/pull/7390"},"https://github.com/apache/inlong/pull/7390"),"), ","[INLONG-7232]"," (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/pull/7233"},"https://github.com/apache/inlong/pull/7233"),"), and ","[INLONG-7503]"," (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/pull/7552"},"https://github.com/apache/inlong/pull/7552"),")."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"('audit_sort_hive_input', 'HIVE', 0, '7'),\n('audit_sort_hive_output', 'HIVE', 1, '8'),\n('audit_sort_clickhouse_input', 'CLICKHOUSE', 0, '9'),\n('audit_sort_clickhouse_output', 'CLICKHOUSE', 1, '10'),\n('audit_sort_es_input', 'ELASTICSEARCH', 0, '11'),\n('audit_sort_es_output', 'ELASTICSEARCH', 1, '12'),\n('audit_sort_starrocks_input', 'STARROCKS', 0, '13'),\n('audit_sort_starrocks_output', 'STARROCKS', 1, '14'),\n('audit_sort_hudi_input', 'HUDI', 0, '15'),\n('audit_sort_hudi_output', 'HUDI', 1, '16'),\n('audit_sort_iceberg_input', 'ICEBERG', 0, '17'),\n('audit_sort_iceberg_output', 'ICEBERG', 1, '18'),\n('audit_sort_hbase_input', 'HBASE', 0, '19'),\n('audit_sort_hbase_output', 'HBASE', 1, '20'),\n('audit_sort_doris_input', 'DORIS', 0, '21'),\n('audit_sort_doris_output', 'DORIS', 1, '22')\n")),(0,n.kt)("h3",{id:"added-connection-test-for-new-data-node"},"Added connection test for new Data Node"),(0,n.kt)("p",null,"In the previous version, InLong added data nodes and registered MQ clusters, and did not judge the availability of the cluster. In the new version, InLong adds a connection test for the main data node and InLong system component registration, which enhances the data stream creation. This feature is mainly participated in development by @leosanqing, @Bluewang, and @Fuweng11.\n",(0,n.kt)("img",{alt:"1.6.0-connection-test",src:a(7073).Z,width:"889",height:"794"})),(0,n.kt)("h3",{id:"optimized-reconciliation-benchmark-time-for-sort-audit"},"Optimized reconciliation benchmark time for Sort Audit"),(0,n.kt)("p",null,"Before version 1.6.0, the Sort reconciliation benchmark time is the machine time for data processing. Using this time will cause the full-link reconciliation data to be inaccurate. In this version, the Sort audit reconciliation referred to the design of TimestampedCollector in Apache Flink, replaced the Simple Collector in the original Pulsar Connector, and aligned the audit index. The implementation principle is to set the Timestamp field at the Collector. When obtaining the InLongMsg data transmitted by DataProxy, the reset data time is used as the Audit time record metric when sending the message downstream. The optimized Sort audit index can be aligned with other modules, such as DataProxy, this feature was mainly developed by @Emsnap.\n",(0,n.kt)("img",{alt:"1.6.0-sort-audit-time",src:a(68700).Z,width:"1904",height:"947"})),(0,n.kt)("h3",{id:"supported-using-kafka-as-cache-mq-for-audit"},"Supported using Kafka as cache MQ for Audit"),(0,n.kt)("p",null,"InLong Audit is an independent subsystem that conducts real-time audit reconciliation of the InLong system's Agent, DataProxy, and Sort module's inflow, and outflow. The current amount of audits is minute, hour, and day. In the previous version, InLong Audit only supports the use of Pulsar to cache audit data, and this will increase the cost of user deployment when they chose Kafka. In the entire InLong Audit design, the choice of MQ type should be consistent with the data stream to avoid different use of different use MQ types. In version 1.6.0, in order to achieve the use of the same type of MQ service in Audit modules and data stream, Audit supports the use of Kafka cache audit data to achieve the unity of MQ service selection. This feature is mainly completed by @haifxu and @dockerzhang.\n",(0,n.kt)("img",{alt:"1.6.0-audit-kafka",src:a(63313).Z,width:"843",height:"732"})),(0,n.kt)("h2",{id:"follow-up-planning"},"Follow-up planning"),(0,n.kt)("p",null,"In 1.6.0, the Sort module also fixes multiple bugs such as dirty data archives, metrics, and Connectors. The Dashboard continues to optimize display and approval processes and other experience problems. For more details, please refer to the Release ","[Changelog]"," (https: // github. com/Apache/InLong/Blob/Master/Changes.md). In the subsequent version, Apache InLong will add Schema dynamic change, Schema batch import, agent installation, adding more data nodes, looking forward to more developers participating in contributions."))}p.isMDXComponent=!0},63313:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/1.6.0-audit-kafka-120f70dcf6449309dd9824c5e4d7faa1.png"},7073:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/1.6.0-connection-test-ef3deff138b5d316c137aa4e027550a9.png"},41784:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/1.6.0-create-kudu-cb72fe296daffb2196841d6ca42e8146.png"},60456:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/1.6.0-mq-selector-80659d1793454422d4f75feaa31eaed7.png"},68700:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/1.6.0-sort-audit-time-357db69618d9a1ff04731d1effd0ecfb.png"},93802:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/1.6.0-update-redis-017cd2d29c513ca867bfef88f9bf8ea6.png"}}]);