"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1704],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),c=r,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},50686:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=["components"],i={title:"Quick Start",sidebar_position:2},s=void 0,u={unversionedId:"modules/tubemq/quick_start",id:"version-1.1.0/modules/tubemq/quick_start",title:"Quick Start",description:"1 Deploy and Start",source:"@site/versioned_docs/version-1.1.0/modules/tubemq/quick_start.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/quick_start",permalink:"/docs/modules/tubemq/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/modules/tubemq/quick_start.md",tags:[],version:"1.1.0",sidebarPosition:2,frontMatter:{title:"Quick Start",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/modules/tubemq/overview"},next:{title:"Producer Example",permalink:"/docs/modules/tubemq/producer_example"}},p={},m=[{value:"1 Deploy and Start",id:"1-deploy-and-start",level:2},{value:"1.1 Configuration Example",id:"11-configuration-example",level:3},{value:"1.2 Prerequisites",id:"12-prerequisites",level:3},{value:"1.3 Configure Master",id:"13-configure-master",level:3},{value:"1.4 Configure Broker",id:"14-configure-broker",level:3},{value:"1.5 Start Master",id:"15-start-master",level:3},{value:"1.5.1 Configure Broker Metadata",id:"151-configure-broker-metadata",level:4},{value:"1.6 Start Broker",id:"16-start-broker",level:3},{value:"2 Quick Start",id:"2-quick-start",level:2},{value:"3.1 Add Topic",id:"31-add-topic",level:3},{value:"2.2 Run Example",id:"22-run-example",level:3},{value:"2.2.1 Produce Messages",id:"221-produce-messages",level:4},{value:"2.2.2 Consume Messages",id:"222-consume-messages",level:4},{value:"3 Deploy Manager",id:"3-deploy-manager",level:2},{value:"4 The End",id:"4-the-end",level:2}],d={toc:m};function c(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-deploy-and-start"},"1 Deploy and Start"),(0,o.kt)("h3",{id:"11-configuration-example"},"1.1 Configuration Example"),(0,o.kt)("p",null,"There're two components in the cluster: ",(0,o.kt)("strong",{parentName:"p"},"Master")," and ",(0,o.kt)("strong",{parentName:"p"},"Broker"),". Master and Broker\ncan be deployed on the same server or different servers. In this example, we setup our cluster\nlike this, and all services run on the same node. Zookeeper should be setup in your environment also."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Role"),(0,o.kt)("th",{parentName:"tr",align:null},"TCP Port"),(0,o.kt)("th",{parentName:"tr",align:null},"TLS Port"),(0,o.kt)("th",{parentName:"tr",align:null},"Web Port"),(0,o.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Master"),(0,o.kt)("td",{parentName:"tr",align:null},"8099"),(0,o.kt)("td",{parentName:"tr",align:null},"8199"),(0,o.kt)("td",{parentName:"tr",align:null},"8080"),(0,o.kt)("td",{parentName:"tr",align:null},"Meta data is stored in ZooKeeper /tubemq")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Broker"),(0,o.kt)("td",{parentName:"tr",align:null},"8123"),(0,o.kt)("td",{parentName:"tr",align:null},"8124"),(0,o.kt)("td",{parentName:"tr",align:null},"8081"),(0,o.kt)("td",{parentName:"tr",align:null},"Message is stored at /stage/msg_data")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Zookeeper"),(0,o.kt)("td",{parentName:"tr",align:null},"2181"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Master metadata or Broker offset information are stored at /tubemq")))),(0,o.kt)("h3",{id:"12-prerequisites"},"1.2 Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ZooKeeper Cluster")),(0,o.kt)("p",null,"After you extract the package file, here's the folder structure."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/INSTALL_PATH/inlong-tubemq-server/\n\u251c\u2500\u2500 bin\n\u251c\u2500\u2500 conf\n\u251c\u2500\u2500 lib\n\u251c\u2500\u2500 logs\n\u2514\u2500\u2500 resources\n")),(0,o.kt)("h3",{id:"13-configure-master"},"1.3 Configure Master"),(0,o.kt)("p",null,"You can change configurations in ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/master.ini")," according to cluster information."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Master IP and Port")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[master]\nhostName=YOUR_SERVER_IP                  // replaced with your server IP\nport=8099\nwebPort=8080\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Access Authorization Token")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"confModAuthToken=abc                    // for configuring Web Resources\\API etc\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"meta_zookeeper Cluster")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},'[meta_zookeeper]                        // Masters in the same cluster must use the same zookeeper environment and have the same configuration\nzkNodeRoot=/tubemq\nzkServerAddr=localhost:2181             // multi zookeeper addresses can separate with ","\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"meta_bdb Strategy(Optional)\n",(0,o.kt)("strong",{parentName:"li"},"Note"),': Due to the LICENSE problem of Apache dependency packages, the packages released by TubeMQ from version 1.1.0 no longer contain BDB packages. If you need BDB to store metadata, you need to download com.sleepycat.je-7.3.7 by yourself. .jar package, otherwise a "java.lang.ClassNotFoundException: com.sleepycat.je.ReplicaConsistencyPolicy" error will be reported when the system is running.')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[meta_bdb]\nrepGroupName=tubemqGroup1                // The Master of the same cluster must use the same group name, and the group names of different clusters must be different\nrepNodeName=tubemqGroupNode1             // The master node names of the same cluster must be different names\nmetaDataPath=/stage/meta_data\nrepHelperHost=FIRST_MASTER_NODE_IP:9001  // helperHost is used for building HA master.\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(Optional) Master High Availability\nIn the example above, we run the services on a single node. However, in real production environment, you\nneed to run multiple master services on different servers for high availability purpose. Here's\nthe introduction of availability level.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"HA Level"),(0,o.kt)("th",{parentName:"tr",align:null},"Master Number"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"High"),(0,o.kt)("td",{parentName:"tr",align:null},"3 masters"),(0,o.kt)("td",{parentName:"tr",align:null},"After any master crashed, the cluster meta data is still in read/write state and can accept new producers/consumers.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Medium"),(0,o.kt)("td",{parentName:"tr",align:null},"2 masters"),(0,o.kt)("td",{parentName:"tr",align:null},"After one master crashed, the cluster meta data is in read only state. There's no affect on existing producers and consumers.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Minimum"),(0,o.kt)("td",{parentName:"tr",align:null},"1 master"),(0,o.kt)("td",{parentName:"tr",align:null},"After the master crashed, there's no affect on existing producer and consumer.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Notice"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Based on the need of Docker containerization, the ","[meta_zookeeper]"," or ","[meta_bdb]"," above 3 parameters in the master.ini file are all the default settings used, and the actual information of the Master node needs to be configured when used in actual networking."),(0,o.kt)("li",{parentName:"ul"},'The IP information of all master nodes should be mapped to the hostName in the hosts configuration file, such as "192.168.0.1 192-168-0-1"'),(0,o.kt)("li",{parentName:"ul"},"It is necessary to ensure the clock synchronization between all master nodes")),(0,o.kt)("h3",{id:"14-configure-broker"},"1.4 Configure Broker"),(0,o.kt)("p",null,"You can change configurations in ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/broker.ini")," according to cluster information."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Broker IP and Port")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[broker]\nbrokerId=0\nhostName=YOUR_SERVER_IP                 // replaced with your server IP\nport=8123\nwebPort=8081\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Master Address")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},'masterAddressList=MASTER_NODE_IP1:8099,MASTER_NODE_IP2:8099   // multi addresses can separate with ","\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Metadata Path")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"primaryPath=/stage/msg_data\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ZooKeeper Cluster")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},'[zookeeper]                             // Master and Broker in the same cluster must use the same zookeeper environment and have the same configuration\nzkNodeRoot=/tubemq\nzkServerAddr=localhost:2181             // multi zookeeper addresses can separate with ","\n')),(0,o.kt)("h3",{id:"15-start-master"},"1.5 Start Master"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Please go to the ",(0,o.kt)("inlineCode",{parentName:"li"},"bin")," folder and run this command to start\nthe master service.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./tubemq.sh master start\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You should be able to access ",(0,o.kt)("inlineCode",{parentName:"li"},"http://your-master-ip:8080")," to see the\nweb GUI now.")),(0,o.kt)("h4",{id:"151-configure-broker-metadata"},"1.5.1 Configure Broker Metadata"),(0,o.kt)("p",null,"Before we start a broker service, we need to configure it on master web GUI first. Go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Broker List")," page, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Single Broker"),", and input the new broker information.\nIn this example, we only need to input broker IP and authToken:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"broker IP: broker server ip"),(0,o.kt)("li",{parentName:"ol"},"authToken: A token pre-configured in the ",(0,o.kt)("inlineCode",{parentName:"li"},"conf/master.ini")," file. Please check the\n",(0,o.kt)("inlineCode",{parentName:"li"},"confModAuthToken")," field in your ",(0,o.kt)("inlineCode",{parentName:"li"},"master.ini")," file.")),(0,o.kt)("p",null,"Click the online link to activate the new added broker."),(0,o.kt)("h3",{id:"16-start-broker"},"1.6 Start Broker"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Please go to the ",(0,o.kt)("inlineCode",{parentName:"li"},"bin")," folder and run this command to start the broker service")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./tubemq.sh broker start\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Refresh the GUI broker list page, you can see that the broker now is registered.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"After the sub-state of the broker changed to ",(0,o.kt)("inlineCode",{parentName:"p"},"idle"),", we can add topics to that broker."))),(0,o.kt)("h2",{id:"2-quick-start"},"2 Quick Start"),(0,o.kt)("h3",{id:"31-add-topic"},"3.1 Add Topic"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"3.1.1 We can add or manage the cluster topics on the web GUI. To add a new topic, go to the\ntopic list page and click the add new topic button")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"3.1.2 Then select the brokers which you want to deploy the topics to.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"3.1.3 We can see the publish and subscribe state of the new added topic is still grey. We need\nto go to the broker list page to reload the broker configuration.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"3.1.4 When the broker sub-state changed to idle, go to the topic list page. We can see\nthat the topic publish/subscribe state is active now.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"3.1.5 Now we can use the topic to send messages."))),(0,o.kt)("h3",{id:"22-run-example"},"2.2 Run Example"),(0,o.kt)("p",null,"Now we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"demo")," topic which created before to test our cluster."),(0,o.kt)("h4",{id:"221-produce-messages"},"2.2.1 Produce Messages"),(0,o.kt)("p",null,"Please don't forget replace ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR_MASTER_IP:port")," with your server ip and port, and start producer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /INSTALL_PATH/apache-inlong-tubemq-server-[TUBEMQ-VERSION]-bin\n./bin/tubemq-producer-test.sh --master-servers YOUR_MASTER_IP1:port,YOUR_MASTER_IP2:port --topicName demo\n")),(0,o.kt)("p",null,"From the log, we can see the message is sent out.\n",(0,o.kt)("img",{alt:"Demo 1",src:a(71700).Z,width:"1906",height:"251"})),(0,o.kt)("h4",{id:"222-consume-messages"},"2.2.2 Consume Messages"),(0,o.kt)("p",null,"Please don't forget replace YOUR_MASTER_IP:port with your server ip and port, and start consumer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /INSTALL_PATH/apache-inlong-tubemq-server-[TUBEMQ-VERSION]-bin\n./bin/tubemq-consumer-test.sh --master-servers YOUR_MASTER_IP1:port,YOUR_MASTER_IP2:port --topicName demo --groupName test_consume\n")),(0,o.kt)("p",null,"From the log, we can see the message received by the consumer.\n",(0,o.kt)("img",{alt:"Demo 2",src:a(18739).Z,width:"1900",height:"334"})),(0,o.kt)("h2",{id:"3-deploy-manager"},"3 Deploy Manager"),(0,o.kt)("p",null,"You can refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/modules/tubemq/tubemq-manager/quick_start"},"InLong TubeMQ Manager")),(0,o.kt)("h2",{id:"4-the-end"},"4 The End"),(0,o.kt)("p",null,'Here, the compilation, deployment, system configuration, startup, production and consumption of TubeMQ have been completed. If you need to understand more in-depth content, please check the relevant content in "TubeMQ HTTP API" and make the corresponding configuration settings.'),(0,o.kt)("hr",null))}c.isMDXComponent=!0},18739:function(e,t,a){t.Z=a.p+"assets/images/tubemq-consume-message-a27f49fde7c5f5bcc565ca6ed2537088.png"},71700:function(e,t,a){t.Z=a.p+"assets/images/tubemq-send-message-3ceedb761daf672ee43b0a9a67905d87.png"}}]);