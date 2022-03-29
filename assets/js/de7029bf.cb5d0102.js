"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9134],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,h=d["".concat(s,".").concat(g)]||d[g]||p[g]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80685:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Pulsar Example",sidebar_position:2},s=void 0,u={unversionedId:"quick_start/pulsar_example",id:"quick_start/pulsar_example",title:"Pulsar Example",description:"Apache InLong has increased the ability to access data through Apache Pulsar, taking full advantage of Pulsar's technical advantages that are different from other MQ, and providing complete solutions for data integration scenarios with higher data quality requirements such as finance and billing.",source:"@site/docs/quick_start/pulsar_example.md",sourceDirName:"quick_start",slug:"/quick_start/pulsar_example",permalink:"/docs/next/quick_start/pulsar_example",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/quick_start/pulsar_example.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Pulsar Example",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Hive Example",permalink:"/docs/next/quick_start/hive_example"},next:{title:"Standalone",permalink:"/docs/next/deployment/standalone"}},c={},p=[{value:"Install Pulsar",id:"install-pulsar",level:2},{value:"Install Hive",id:"install-hive",level:2},{value:"Install InLong",id:"install-inlong",level:2},{value:"Create a data ingestion",id:"create-a-data-ingestion",level:2},{value:"Configure data streams group information",id:"configure-data-streams-group-information",level:3},{value:"Configure data stream",id:"configure-data-stream",level:3},{value:"Configure data information",id:"configure-data-information",level:3},{value:"Configure Hive cluster",id:"configure-hive-cluster",level:3},{value:"Data ingestion Approval",id:"data-ingestion-approval",level:2},{value:"Configure the agent",id:"configure-the-agent",level:2},{value:"Data Check",id:"data-check",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:p};function g(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache InLong has increased the ability to access data through Apache Pulsar, taking full advantage of Pulsar's technical advantages that are different from other MQ, and providing complete solutions for data integration scenarios with higher data quality requirements such as finance and billing.\nIn the following content, we will use a complete example to introduce Apache Pulsar to access data through Apache InLong."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Create Group",src:n(88434).Z,width:"1751",height:"306"})),(0,i.kt)("h2",{id:"install-pulsar"},"Install Pulsar"),(0,i.kt)("p",null,"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/standalone/"},"Official Installation Guidelines"),"."),(0,i.kt)("h2",{id:"install-hive"},"Install Hive"),(0,i.kt)("p",null,"Hive is the necessary component. If you don't have Hive in your machine, we recommand using Docker to install it. Details can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/big-data-europe/docker-hive"},"here"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that if you use Docker, you need to add a port mapping ",(0,i.kt)("inlineCode",{parentName:"p"},"8020:8020"),", because it's the port of HDFS DefaultFS, and we need to use it later.")),(0,i.kt)("h2",{id:"install-inlong"},"Install InLong"),(0,i.kt)("p",null,"Before we begin, we need to install InLong. Here we provide two ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install InLong with Docker by according to the ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/deployment/docker"},"instructions here"),".(Recommanded)"),(0,i.kt)("li",{parentName:"ol"},"Install InLong binary according to the ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/deployment/bare_metal"},"instructions here"),".")),(0,i.kt)("p",null,"Unlike InLong TubeMQ, if you use Apache Pulsar, you need to configure Pulsar cluster information\nin the Manager component installation. The format is as follows\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Pulsar admin URL\npulsar.adminUrl=http://127.0.0.1:8080,127.0.0.2:8080,127.0.0.3:8080\n# Pulsar broker address\npulsar.serviceUrl=pulsar://127.0.0.1:6650,127.0.0.1:6650,127.0.0.1:6650\n# Default tenant of Pulsar\npulsar.defaultTenant=public\n")),(0,i.kt)("h2",{id:"create-a-data-ingestion"},"Create a data ingestion"),(0,i.kt)("h3",{id:"configure-data-streams-group-information"},"Configure data streams group information"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:n(86130).Z,width:"709",height:"886"}),"\nWhen creating data ingestion, the message middleware that the data stream group can use is Pulsar,\nand other configuration items related to Pulsar include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Queue module: Parallel or Serial, when selecting parallel, you can set the number of topic partitions"),(0,i.kt)("li",{parentName:"ul"},"Write quorum: Number of copies to store for each message"),(0,i.kt)("li",{parentName:"ul"},"Ack quorum: Number of guaranteed copies (acks to wait before write is complete)"),(0,i.kt)("li",{parentName:"ul"},"retention time: retention time for the consumed message"),(0,i.kt)("li",{parentName:"ul"},"ttl: The default Time to Live for message"),(0,i.kt)("li",{parentName:"ul"},"retention size: retention size for the consumed message")),(0,i.kt)("h3",{id:"configure-data-stream"},"Configure data stream"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:n(88233).Z,width:"1090",height:"543"}),"\nWhen configuring the message source, the file path in the file data source can be referred to ",(0,i.kt)("a",{parentName:"p",href:"https://inlong.apache.org/docs/next/modules/agent/file#file-agent-configuration"},"file-agent-configuration"),"."),(0,i.kt)("h3",{id:"configure-data-information"},"Configure data information"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:n(96338).Z,width:"1090",height:"591"})),(0,i.kt)("h3",{id:"configure-hive-cluster"},"Configure Hive cluster"),(0,i.kt)("p",null,'Save Hive cluster information, click "Ok" to submit.\n',(0,i.kt)("img",{loading:"lazy",src:n(45455).Z,width:"1006",height:"703"})),(0,i.kt)("h2",{id:"data-ingestion-approval"},"Data ingestion Approval"),(0,i.kt)("p",null,"Enter ",(0,i.kt)("strong",{parentName:"p"},"Approval")," page, click ",(0,i.kt)("strong",{parentName:"p"},"My Approval"),", abd approve the data ingestion application. After the approval is over,\nthe topics and subscriptions required for the data stream will be created in the Pulsar cluster synchronously.\nWe can use the command-line tool in the Pulsar cluster to check whether the topic is created successfully:\n",(0,i.kt)("img",{loading:"lazy",src:n(47536).Z,width:"698",height:"44"})),(0,i.kt)("h2",{id:"configure-the-agent"},"Configure the agent"),(0,i.kt)("p",null,"Create a collect job by using ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," to make a request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl --location --request POST \'http://localhost:8008/config/job\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n"job": {\n"dir": {\n"path": "",\n"pattern": "/data/collect-data/test.log"\n},\n"trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",\n"id": 1,\n"thread": {\n"running": {\n"core": "4"\n}\n},\n"name": "fileAgentTest",\n"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n},\n"proxy": {\n"inlongGroupId": "b_test_group",\n"inlongStreamId": "test_stream"\n},\n"op": "add"\n}\'\n')),(0,i.kt)("p",null,"At this point, the agent is configured successfully.\nThen we need to create a new file ",(0,i.kt)("inlineCode",{parentName:"p"},"./collect-data/test.log")," and add content to it to trigger the agent to send data to the dataproxy."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'mkdir collect-data\nEND=100000\nfor ((i=1;i<=END;i++)); do\n    sleep 3\n    echo "name_$i | $i" >> ./collect-data/test.log\ndone\n')),(0,i.kt)("h2",{id:"data-check"},"Data Check"),(0,i.kt)("p",null,"Finally, we log in to the Hive cluster and use Hive SQL commands to check\nwhether data is successfully inserted in the ",(0,i.kt)("inlineCode",{parentName:"p"},"test_stream")," table."),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If data is not correctly written to the Hive cluster, you can check whether the ",(0,i.kt)("inlineCode",{parentName:"p"},"DataProxy")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Sort")," related information are synchronized:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check whether the topic information corresponding to the data stream is correctly written in the ",(0,i.kt)("inlineCode",{parentName:"li"},"conf/topics.properties")," folder of ",(0,i.kt)("inlineCode",{parentName:"li"},"InLong DataProxy"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"b_test_group/test_stream=persistent://public/b_test_group/test_stream\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check whether the configuration information of the data stream is successfully pushed in "),(0,i.kt)("li",{parentName:"ul"},"the ZooKeeper monitored by ",(0,i.kt)("inlineCode",{parentName:"li"},"InLong Sort"),"\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"get /inlong_hive/dataflows/{{sink_id}}\n")))}g.isMDXComponent=!0},88434:function(e,t,n){t.Z=n.p+"assets/images/pulsar-arch-fc9241768fd9bc0c2f8224734e53e202.png"},96338:function(e,t,n){t.Z=n.p+"assets/images/pulsar-data-56ca16da9405a3e6a6b7017d71cb7837.png"},86130:function(e,t,n){t.Z=n.p+"assets/images/pulsar-group-762dc9b57c7903a26a2c71c8d29a4ab6.png"},45455:function(e,t,n){t.Z=n.p+"assets/images/pulsar-hive-8170f49696fc889e32eb762a4d7a748d.png"},88233:function(e,t,n){t.Z=n.p+"assets/images/pulsar-stream-235cf40d9d3a220cff9d1074b524e38b.png"},47536:function(e,t,n){t.Z=n.p+"assets/images/pulsar-topic-50208ea3f5d0cbe60861fa9ab34b7835.png"}}]);