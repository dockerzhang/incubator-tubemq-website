"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[23980],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},A=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),A=r,g=u["".concat(s,".").concat(A)]||u[A]||p[A]||l;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=A;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}A.displayName="MDXCreateElement"},61205:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={title:"MySQL to ClickHouse Example",sidebar_position:1},i=void 0,o={unversionedId:"quick_start/data_sync/mysql_clickhouse_example",id:"version-1.12.0/quick_start/data_sync/mysql_clickhouse_example",title:"MySQL to ClickHouse Example",description:"Here we use an example to introduce how to use Apache InLong creating MySQL -> ClickHouse data synchronization.",source:"@site/versioned_docs/version-1.12.0/quick_start/data_sync/mysql_clickhouse_example.md",sourceDirName:"quick_start/data_sync",slug:"/quick_start/data_sync/mysql_clickhouse_example",permalink:"/docs/quick_start/data_sync/mysql_clickhouse_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.12.0/quick_start/data_sync/mysql_clickhouse_example.md",tags:[],version:"1.12.0",sidebarPosition:1,frontMatter:{title:"MySQL to ClickHouse Example",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Kafka Example",permalink:"/docs/quick_start/data_ingestion/mysql_kafka_clickhouse_example"},next:{title:"MySQL to StarRocks Example",permalink:"/docs/quick_start/data_sync/mysql_starrocks_example"}},s={},c=[{value:"Deployment",id:"deployment",level:2},{value:"Install InLong",id:"install-inlong",level:3},{value:"Add Connectors",id:"add-connectors",level:3},{value:"Install ClickHouse",id:"install-clickhouse",level:3},{value:"Cluster Initialize",id:"cluster-initialize",level:2},{value:"Create Cluster Tag",id:"create-cluster-tag",level:3},{value:"Register Pulsar Cluster",id:"register-pulsar-cluster",level:3},{value:"Register ClickHouse DataNodes",id:"register-clickhouse-datanodes",level:3},{value:"Create Task",id:"create-task",level:2},{value:"Create Data Streams Group",id:"create-data-streams-group",level:3},{value:"Create Data Source",id:"create-data-source",level:3},{value:"Create Data Sink",id:"create-data-sink",level:3},{value:"Configuration Fields",id:"configuration-fields",level:3},{value:"Approve Data Stream",id:"approve-data-stream",level:3},{value:"Test Data",id:"test-data",level:2},{value:"Send Data",id:"send-data",level:3},{value:"Verify Data",id:"verify-data",level:3},{value:"FAQ",id:"faq",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here we use an example to introduce how to use Apache InLong creating ",(0,r.kt)("inlineCode",{parentName:"p"},"MySQL -> ClickHouse")," data synchronization."),(0,r.kt)("h2",{id:"deployment"},"Deployment"),(0,r.kt)("h3",{id:"install-inlong"},"Install InLong"),(0,r.kt)("p",null,"Before we begin, we need to install InLong. Here we provide two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/deployment/docker"},"Docker Deployment")," (Recommended)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/deployment/bare_metal"},"Bare Metal Deployment"))),(0,r.kt)("h3",{id:"add-connectors"},"Add Connectors"),(0,r.kt)("p",null,"Download the ",(0,r.kt)("a",{parentName:"p",href:"https://inlong.apache.org/downloads/"},"connectors")," corresponding to Flink version, and after decompression, place ",(0,r.kt)("inlineCode",{parentName:"p"},"sort-connector-jdbc-[version]-SNAPSHOT.jar")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"/inlong-sort/connectors/")," directory."),(0,r.kt)("h3",{id:"install-clickhouse"},"Install ClickHouse"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --rm --net=host --name clickhouse -e CLICKHOUSE_USER=admin -e CLICKHOUSE_PASSWORD=inlong -e CLICKHOUSE_DEFAULT_ACCESS_MANAGEMENT=1 clickhouse/clickhouse-server:22.8\n")),(0,r.kt)("h2",{id:"cluster-initialize"},"Cluster Initialize"),(0,r.kt)("p",null,"When all containers are successfully started, you can access the InLong dashboard address http://localhost, and use the following default account to log in."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,r.kt)("h3",{id:"create-cluster-tag"},"Create Cluster Tag"),(0,r.kt)("p",null,"Click ","[Clusters]"," -> ","[ClusterTags]"," -> ","[Create]"," on the page to specify the cluster label name and person in charge."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Cluster Tag",src:a(52224).Z,width:"532",height:"373"})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"default_cluster")," is the default ClusterTags reported by each component. If you decide to use a different name, make sure to update the corresponding tag configuration accordingly.")),(0,r.kt)("h3",{id:"register-pulsar-cluster"},"Register Pulsar Cluster"),(0,r.kt)("p",null,"Click ","[Clusters]"," -> ","[Cluster]"," -> ","[Create]"," on the page to register Pulsar Cluster."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Pulsar",src:a(87122).Z,width:"527",height:"650"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ClusterTags selects the newly created ",(0,r.kt)("inlineCode",{parentName:"p"},"default_cluster"),", the Pulsar cluster deployed by docker:"),(0,r.kt)("p",{parentName:"admonition"},"Service URL is ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar://pulsar:6650"),", Admin URL is ",(0,r.kt)("inlineCode",{parentName:"p"},"http://pulsar:8080"),".")),(0,r.kt)("h3",{id:"register-clickhouse-datanodes"},"Register ClickHouse DataNodes"),(0,r.kt)("p",null,"Click ","[DataNodes]"," -> ","[Create]"," on the page to register ClickHouse DataNodes."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Clickhouse Datanode",src:a(53374).Z,width:"730",height:"536"})),(0,r.kt)("h2",{id:"create-task"},"Create Task"),(0,r.kt)("h3",{id:"create-data-streams-group"},"Create Data Streams Group"),(0,r.kt)("p",null,"Click ","[Synchronization]"," \u2192 ","[Create]"," on the page and input the Group ID and Steam ID:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Group_Stream",src:a(1278).Z,width:"1481",height:"411"})),(0,r.kt)("h3",{id:"create-data-source"},"Create Data Source"),(0,r.kt)("p",null,"In the data source, click ","[New]"," \u2192 ","[MySQL]"," to configure the source name, address, databases and tables information."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Source",src:a(46211).Z,width:"674",height:"635"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Please create the test.source_table database table in advance, the schema is: CREATE TABLE test.source_table (id INT PRIMARY KEY, name VARCHAR(50));"))),(0,r.kt)("h3",{id:"create-data-sink"},"Create Data Sink"),(0,r.kt)("p",null,"In the data target, click ","[New]"," \u2192 ","[ClickHouse]"," to configure the name, DB name, table name, and created ck data node."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Sink",src:a(23090).Z,width:"1212",height:"399"})),(0,r.kt)("h3",{id:"configuration-fields"},"Configuration Fields"),(0,r.kt)("p",null,"Configure fields mapping in ","[Source Field]"," and ","[Target Field]"," respectively, and click ","[Submit]"," after completion."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Fields",src:a(86561).Z,width:"1012",height:"450"})),(0,r.kt)("h3",{id:"approve-data-stream"},"Approve Data Stream"),(0,r.kt)("p",null,"Click ","[Approval]"," -> ","[MyApproval]"," -> ","[Approval]"," -> ","[Ok]","."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Approve",src:a(43949).Z,width:"2276",height:"255"})),(0,r.kt)("p",null,"Back to ","[Synchronization]"," page, wait for ","[success]","."),(0,r.kt)("h2",{id:"test-data"},"Test Data"),(0,r.kt)("h3",{id:"send-data"},"Send Data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\n\n# MySQL info\nDB_HOST="mysql"\nDB_USER="root"\nDB_PASS="inlong"\nDB_NAME="test"\nDB_TABLE="source_table"\n\n# Insert data in a loop\nfor ((i=1; i<=1000; i++))\ndo\n# Generate data\nid=$i\nname="name_$i"\n\n    # Build an insert SQL\n    query="INSERT INTO $DB_TABLE (id, name) VALUES ($id, \'$name\');"\n\n    # Execute insert SQL\n    mysql -h $DB_HOST -u $DB_USER -p$DB_PASS $DB_NAME -e "$query"\ndone\n')),(0,r.kt)("p",null,"Insert 1000 pieces of data in total:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Source_data",src:a(82044).Z,width:"395",height:"214"})),(0,r.kt)("h3",{id:"verify-data"},"Verify Data"),(0,r.kt)("p",null,"Then enter the ClickHouse container and view the source table data:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Source_data",src:a(19584).Z,width:"508",height:"312"})),(0,r.kt)("p",null,"You can also view audit data on the page:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Source_data",src:a(87600).Z,width:"2279",height:"709"})),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("p",null,"ClickHouse fails to write data, you can view the error on the Flink page and check the permissions of the user and table engine used."))}p.isMDXComponent=!0},43949:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/approve-4b2a7b1cd1a0d5bce3fac0ef19261747.png"},87600:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/audit-6471f220923b2fe1860fae3994ff72f5.png"},53374:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/clickhouse_datanode-92d4cc2ef153bc2f7a5798d9371e34ca.png"},52224:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cluster_tag-83079ba435eef25964075381c405c176.png"},1278:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/group_stream-0428e03c91e93c6a6a0e5f8ba729a566.png"},87122:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pulsar-8931f8b43da437e42a266e4443003b48.png"},23090:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sink-ee7c26bc49ec5c3df864903dea349547.png"},19584:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sink_data-598241795b95bff65f7aeb0b60dc9d66.png"},86561:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sink_fields-3b7d1c470e3b2fd66dc78ffb03cb645a.png"},46211:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/source-7a1d7feaa66dd93a3cfab2c97fdfe1ee.png"},82044:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);