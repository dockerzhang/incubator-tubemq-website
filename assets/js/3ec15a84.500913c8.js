"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8339],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91841:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"Quick Start",sidebar_position:2},s=void 0,u={unversionedId:"modules/tubemq/quick_start",id:"version-1.0.0/modules/tubemq/quick_start",title:"Quick Start",description:"1 Deploy and Start",source:"@site/versioned_docs/version-1.0.0/modules/tubemq/quick_start.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/quick_start",permalink:"/docs/modules/tubemq/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-1.0.0/modules/tubemq/quick_start.md",tags:[],version:"1.0.0",sidebarPosition:2,frontMatter:{title:"Quick Start",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/modules/tubemq/overview"},next:{title:"Producer Example",permalink:"/docs/modules/tubemq/producer_example"}},d={},p=[{value:"1 Deploy and Start",id:"1-deploy-and-start",level:2},{value:"1.1 Configuration Example",id:"11-configuration-example",level:3},{value:"1.2 Prerequisites",id:"12-prerequisites",level:3},{value:"1.3 Configure Master",id:"13-configure-master",level:3},{value:"1.4 Configure Broker",id:"14-configure-broker",level:3},{value:"1.5 Start Master",id:"15-start-master",level:3},{value:"1.5.1 Configure Broker Metadata",id:"151-configure-broker-metadata",level:4},{value:"1.6 Start Broker",id:"16-start-broker",level:3},{value:"2 Quick Start",id:"2-quick-start",level:2},{value:"3.1 Add Topic",id:"31-add-topic",level:3},{value:"2.2 Run Example",id:"22-run-example",level:3},{value:"2.2.1 Produce Messages",id:"221-produce-messages",level:4},{value:"2.2.2 Consume Messages",id:"222-consume-messages",level:4},{value:"3 The End",id:"3-the-end",level:2}],c={toc:p};function m(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-deploy-and-start"},"1 Deploy and Start"),(0,o.kt)("h3",{id:"11-configuration-example"},"1.1 Configuration Example"),(0,o.kt)("p",null,"There're two components in the cluster: ",(0,o.kt)("strong",{parentName:"p"},"Master")," and ",(0,o.kt)("strong",{parentName:"p"},"Broker"),". Master and Broker\ncan be deployed on the same server or different servers. In this example, we setup our cluster\nlike this, and all services run on the same node. Zookeeper should be setup in your environment also."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Role"),(0,o.kt)("th",{parentName:"tr",align:null},"TCP Port"),(0,o.kt)("th",{parentName:"tr",align:null},"TLS Port"),(0,o.kt)("th",{parentName:"tr",align:null},"Web Port"),(0,o.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Master"),(0,o.kt)("td",{parentName:"tr",align:null},"8099"),(0,o.kt)("td",{parentName:"tr",align:null},"8199"),(0,o.kt)("td",{parentName:"tr",align:null},"8080"),(0,o.kt)("td",{parentName:"tr",align:null},"Meta data is stored at /stage/meta_data")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Broker"),(0,o.kt)("td",{parentName:"tr",align:null},"8123"),(0,o.kt)("td",{parentName:"tr",align:null},"8124"),(0,o.kt)("td",{parentName:"tr",align:null},"8081"),(0,o.kt)("td",{parentName:"tr",align:null},"Message is stored at /stage/msg_data")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Zookeeper"),(0,o.kt)("td",{parentName:"tr",align:null},"2181"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Offset is stored at /tubemq")))),(0,o.kt)("h3",{id:"12-prerequisites"},"1.2 Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ZooKeeper Cluster")),(0,o.kt)("p",null,"After you extract the package file, here's the folder structure."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/INSTALL_PATH/inlong-tubemq-server/\n\u251c\u2500\u2500 bin\n\u251c\u2500\u2500 conf\n\u251c\u2500\u2500 lib\n\u251c\u2500\u2500 logs\n\u2514\u2500\u2500 resources\n")),(0,o.kt)("h3",{id:"13-configure-master"},"1.3 Configure Master"),(0,o.kt)("p",null,"You can change configurations in ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/master.ini")," according to cluster information."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Master IP and Port")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[master]\nhostName=YOUR_SERVER_IP                  // replaced with your server IP\nport=8099\nwebPort=8080\nmetaDataPath=/stage/meta_data\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Access Authorization Token")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"confModAuthToken=abc                    // for configuring Web Resources\\API etc\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ZooKeeper Cluster")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},'[zookeeper]                             // Master and Broker in the same cluster must use the same zookeeper environment and have the same configuration\nzkNodeRoot=/tubemq\nzkServerAddr=localhost:2181             // multi zookeeper addresses can separate with ","\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Replication Strategy ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[replication]\nrepGroupName=tubemqGroup1                // The Master of the same cluster must use the same group name, and the group names of different clusters must be different\nrepNodeName=tubemqGroupNode1             // The master node names of the same cluster must be different names\nrepHelperHost=FIRST_MASTER_NODE_IP:9001  // helperHost is used for building HA master.\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(Optional) Master High Availability\nIn the example above, we run the services on a single node. However, in real production environment, you\nneed to run multiple master services on different servers for high availability purpose. Here's\nthe introduction of availability level.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"HA Level"),(0,o.kt)("th",{parentName:"tr",align:null},"Master Number"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"High"),(0,o.kt)("td",{parentName:"tr",align:null},"3 masters"),(0,o.kt)("td",{parentName:"tr",align:null},"After any master crashed, the cluster meta data is still in read/write state and can accept new producers/consumers.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Medium"),(0,o.kt)("td",{parentName:"tr",align:null},"2 masters"),(0,o.kt)("td",{parentName:"tr",align:null},"After one master crashed, the cluster meta data is in read only state. There's no affect on existing producers and consumers.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Minimum"),(0,o.kt)("td",{parentName:"tr",align:null},"1 master"),(0,o.kt)("td",{parentName:"tr",align:null},"After the master crashed, there's no affect on existing producer and consumer.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Notice"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Based on the need of Docker containerization, the ","[replication]"," above 3 parameters in the master.ini file are all the default settings used, and the actual information of the Master node needs to be configured when used in actual networking."),(0,o.kt)("li",{parentName:"ul"},'The IP information of all master nodes should be mapped to the hostName in the hosts configuration file, such as "192.168.0.1 192-168-0-1"'),(0,o.kt)("li",{parentName:"ul"},"It is necessary to ensure the clock synchronization between all master nodes")),(0,o.kt)("h3",{id:"14-configure-broker"},"1.4 Configure Broker"),(0,o.kt)("p",null,"You can change configurations in ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/broker.ini")," according to cluster information."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Broker IP and Port")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[broker]\nbrokerId=0\nhostName=YOUR_SERVER_IP                 // replaced with your server IP\nport=8123\nwebPort=8081\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Master Address")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},'masterAddressList=MASTER_NODE_IP1:8099,MASTER_NODE_IP2:8099   // multi addresses can separate with ","\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Metadata Path")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"primaryPath=/stage/msg_data\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ZooKeeper Cluster")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},'[zookeeper]                             // Master and Broker in the same cluster must use the same zookeeper environment and have the same configuration\nzkNodeRoot=/tubemq\nzkServerAddr=localhost:2181             // multi zookeeper addresses can separate with ","\n')),(0,o.kt)("h3",{id:"15-start-master"},"1.5 Start Master"),(0,o.kt)("p",null,"Please go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"bin")," folder and run this command to start\nthe master service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./tubemq.sh master start\n")),(0,o.kt)("p",null,"You should be able to access ",(0,o.kt)("inlineCode",{parentName:"p"},"http://your-master-ip:8080")," to see the\nweb GUI now."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"TubeMQ Console GUI",src:n(54672).Z,width:"1420",height:"380"})),(0,o.kt)("h4",{id:"151-configure-broker-metadata"},"1.5.1 Configure Broker Metadata"),(0,o.kt)("p",null,"Before we start a broker service, we need to configure it on master web GUI first. Go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Broker List")," page, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Single Broker"),", and input the new broker information."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Add Broker 1",src:n(48870).Z,width:"1420",height:"646"})),(0,o.kt)("p",null,"In this example, we only need to input broker IP and authToken:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"broker IP: broker server ip"),(0,o.kt)("li",{parentName:"ol"},"authToken: A token pre-configured in the ",(0,o.kt)("inlineCode",{parentName:"li"},"conf/master.ini")," file. Please check the\n",(0,o.kt)("inlineCode",{parentName:"li"},"confModAuthToken")," field in your ",(0,o.kt)("inlineCode",{parentName:"li"},"master.ini")," file.")),(0,o.kt)("p",null,"Click the online link to activate the new added broker."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Add Broker 2",src:n(46641).Z,width:"1407",height:"590"})),(0,o.kt)("h3",{id:"16-start-broker"},"1.6 Start Broker"),(0,o.kt)("p",null,"Please go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"bin")," folder and run this command to start the broker service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./tubemq.sh broker start\n")),(0,o.kt)("p",null,"Refresh the GUI broker list page, you can see that the broker now is registered."),(0,o.kt)("p",null,"After the sub-state of the broker changed to ",(0,o.kt)("inlineCode",{parentName:"p"},"idle"),", we can add topics to that broker."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Add Broker 3",src:n(68917).Z,width:"1404",height:"355"})),(0,o.kt)("h2",{id:"2-quick-start"},"2 Quick Start"),(0,o.kt)("h3",{id:"31-add-topic"},"3.1 Add Topic"),(0,o.kt)("p",null,"We can add or manage the cluster topics on the web GUI. To add a new topic, go to the\ntopic list page and click the add new topic button"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Add Topic 1",src:n(16314).Z,width:"1414",height:"571"})),(0,o.kt)("p",null,"Then select the brokers which you want to deploy the topics to."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Add Topic 5",src:n(55591).Z,width:"684",height:"422"})),(0,o.kt)("p",null,"We can see the publish and subscribe state of the new added topic is still grey. We need\nto go to the broker list page to reload the broker configuration."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Add Topic 6",src:n(42686).Z,width:"1138",height:"125"})),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Add Topic 2",src:n(97535).Z,width:"1135",height:"119"})),(0,o.kt)("p",null,"When the broker sub-state changed to idle, go to the topic list page. We can see\nthat the topic publish/subscribe state is active now."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Add Topic 3",src:n(41649).Z,width:"1137",height:"125"})),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Add Topic 4",src:n(47925).Z,width:"1133",height:"120"})),(0,o.kt)("p",null,"Now we can use the topic to send messages."),(0,o.kt)("h3",{id:"22-run-example"},"2.2 Run Example"),(0,o.kt)("p",null,"Now we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"demo")," topic which created before to test our cluster."),(0,o.kt)("h4",{id:"221-produce-messages"},"2.2.1 Produce Messages"),(0,o.kt)("p",null,"Please don't forget replace ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR_MASTER_IP:port")," with your server ip and port, and start producer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /INSTALL_PATH/apache-inlong-tubemq-server-[TUBEMQ-VERSION]-bin\n./bin/tubemq-producer-test.sh --master-servers YOUR_MASTER_IP1:port,YOUR_MASTER_IP2:port --topicName demo\n")),(0,o.kt)("p",null,"From the log, we can see the message is sent out.\n",(0,o.kt)("img",{loading:"lazy",alt:"Demo 1",src:n(89698).Z,width:"1906",height:"251"})),(0,o.kt)("h4",{id:"222-consume-messages"},"2.2.2 Consume Messages"),(0,o.kt)("p",null,"Please don't forget replace YOUR_MASTER_IP:port with your server ip and port, and start consumer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /INSTALL_PATH/apache-inlong-tubemq-server-[TUBEMQ-VERSION]-bin\n./bin/tubemq-consumer-test.sh --master-servers YOUR_MASTER_IP1:port,YOUR_MASTER_IP2:port --topicName demo --groupName test_consume\n")),(0,o.kt)("p",null,"From the log, we can see the message received by the consumer.\n",(0,o.kt)("img",{loading:"lazy",alt:"Demo 2",src:n(84293).Z,width:"1900",height:"334"})),(0,o.kt)("h2",{id:"3-the-end"},"3 The End"),(0,o.kt)("p",null,'Here, the compilation, deployment, system configuration, startup, production and consumption of TubeMQ have been completed. If you need to understand more in-depth content, please check the relevant content in "TubeMQ HTTP API" and make the corresponding configuration settings.'),(0,o.kt)("hr",null))}m.isMDXComponent=!0},48870:function(e,t,n){t.Z=n.p+"assets/images/tubemq-add-broker-1-50044a59203725d7f55554cb551bed58.png"},46641:function(e,t,n){t.Z=n.p+"assets/images/tubemq-add-broker-2-ab5859b782891dbcb816f00c8ad87a58.png"},68917:function(e,t,n){t.Z=n.p+"assets/images/tubemq-add-broker-3-e1425119a14c1590281eea32e4f58f5f.png"},16314:function(e,t,n){t.Z=n.p+"assets/images/tubemq-add-topic-1-8ab9641b011376860472b509f5f54256.png"},97535:function(e,t,n){t.Z=n.p+"assets/images/tubemq-add-topic-2-965c75eb7881ad45f0279810f58e1dc3.png"},41649:function(e,t,n){t.Z=n.p+"assets/images/tubemq-add-topic-3-c6d1c32e626a60def177b8fcc9646015.png"},47925:function(e,t,n){t.Z=n.p+"assets/images/tubemq-add-topic-4-48ef9d8ba13c36a2f2b4208f062c1680.png"},55591:function(e,t,n){t.Z=n.p+"assets/images/tubemq-add-topic-5-f0f370c770f6855fee6592a079cac1d2.png"},42686:function(e,t,n){t.Z=n.p+"assets/images/tubemq-add-topic-6-28364b9457706ac93f128184ee874fb7.png"},54672:function(e,t,n){t.Z=n.p+"assets/images/tubemq-console-gui-123e6fb030a5e6ebadf15962dcd5d284.png"},84293:function(e,t,n){t.Z=n.p+"assets/images/tubemq-consume-message-a27f49fde7c5f5bcc565ca6ed2537088.png"},89698:function(e,t,n){t.Z=n.p+"assets/images/tubemq-send-message-3ceedb761daf672ee43b0a9a67905d87.png"}}]);