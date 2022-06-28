"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,c=m["".concat(s,".").concat(u)]||m[u]||g[u]||l;return n?a.createElement(c,o(o({ref:t},p),{},{components:n})):a.createElement(c,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49353:(e,t,n)=>{n.d(t,{Y:()=>a});const a={inLongVersion:"1.3.0-SNAPSHOT"}},63466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),l=n(49353);const o={title:"Example",sidebar_position:2},i=void 0,s={unversionedId:"sdk/dataproxy-sdk/example",id:"sdk/dataproxy-sdk/example",title:"Example",description:"Overview",source:"@site/docs/sdk/dataproxy-sdk/example.md",sourceDirName:"sdk/dataproxy-sdk",slug:"/sdk/dataproxy-sdk/example",permalink:"/docs/next/sdk/dataproxy-sdk/example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/sdk/dataproxy-sdk/example.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Example",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"TDSQL-PostgreSQL",permalink:"/docs/next/data_node/load_node/tdsql-postgresql"},next:{title:"Overview",permalink:"/docs/next/sdk/dataproxy-sdk/overview"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Add Dependency",id:"add-dependency",level:2},{value:"TCP Example",id:"tcp-example",level:2},{value:"Create a messageSender",id:"create-a-messagesender",level:3},{value:"Send Message",id:"send-message",level:3},{value:"HTTP Example",id:"http-example",level:2},{value:"Create MessageSender",id:"create-messagesender",level:3},{value:"Send Message",id:"send-message-1",level:3},{value:"UDP Example",id:"udp-example",level:2}],g={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Inlong-dataproxy-sdk provides access api for TCP and HTTP protocols. When using TCP or HTTP access, you need to ensure that the dataproxy server has the access configuration of the corresponding protocol (ie the TCP or HTTP source service). If the user needs to use the UDP protocol to access, the user needs to packets data according to the bytes arrays transmitted by TCP, and send them to the dataproxy server using the UDP protocol.\nand dataproxy server will handle messages in the same way as TCP.\nIn addition, access demo codes for TCP, HTTP, and UDP protocols are provided in the example directory of inlong dataproxy SDK, which you can refer to when accessing."),(0,r.kt)("p",null,"To view detailed API information ",(0,r.kt)("a",{parentName:"p",href:"./overview"},"overview"),"."),(0,r.kt)("h2",{id:"add-dependency"},"Add Dependency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>dataproxy-sdk</artifactId>\n    <version>"+l.Y.inLongVersion+"</version>\n</dependency>\n")),(0,r.kt)("h2",{id:"tcp-example"},"TCP Example"),(0,r.kt)("h3",{id:"create-a-messagesender"},"Create a messageSender"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    public DefaultMessageSender getMessageSender(String localIP, String inLongManagerAddr, String inLongManagerPort,\n            String netTag, String dataProxyGroup, boolean isLocalVisit, boolean isReadProxyIPFromLocal,\n            String configBasePath, int msgType) {\n        ProxyClientConfig dataProxyConfig = null;\n        DefaultMessageSender messageSender = null;\n        try {\n            dataProxyConfig = new ProxyClientConfig(localIP, isLocalVisit, inLongManagerAddr,\n                    Integer.valueOf(inLongManagerPort), dataProxyGroup, netTag);\n            if (StringUtils.isNotEmpty(configBasePath)) {\n                dataProxyConfig.setConfStoreBasePath(configBasePath);\n            }\n            dataProxyConfig.setReadProxyIPFromLocal(isReadProxyIPFromLocal);\n            messageSender = DefaultMessageSender.generateSenderByClusterId(dataProxyConfig);\n            messageSender.setMsgtype(msgType);\n        } catch (Exception e) {\n            logger.error("getMessageSender has exception e = {}", e);\n        }\n        return messageSender;\n    }\n')),(0,r.kt)("p",null,"The parameter description is as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"instruction"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inLongManagerAddr"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong admin server address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inLongManagerPort"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong admin server port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"netTag"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Network label, not used yet, you can pass an empty string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataProxyGroup"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"dataProxy group name, the name used for local configuration when the user enables local configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isLocalVisit"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to use local configuration, true use https to access the console, false use http to request the console")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isReadProxyIPFromLocal"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to obtain the address information of the Dataproxy server from the local configuration file, local self-test, can be set to true if the management console cannot be accessede")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"configBasePath"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The path of the local configuration file. The default is ./inlong. When isReadProxyIPFromLocal is true, the configuration file is searched from this directory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgtype"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Message assembly type, value (3, 5, 7, 8), it is recommended to use 7, each message type represents a message assembly protocol during the transmission process, please refer to the code implementation of SDK for details")))),(0,r.kt)("p",null,"When isReadProxyIPFromLocal is true, the configuration information of Dataproxy will be obtained from the local configuration file."),(0,r.kt)("p",null,"The path to the local file is :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    ${configBasePath}\n")),(0,r.kt)("p",null,"The file name is :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    ${dataProxyGroup}.local\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    configBasePath = /data/inlong\n    dataProxyGroup = inlong_test\n")),(0,r.kt)("p",null,"Then the full path of the local file is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    /data/inlong/inlong_test.local\n")),(0,r.kt)("p",null,"The file configuration content is (json format), where host is the address of the DataProxy server, and port is the corresponding port, which requires at least two configurations (the same two items can be configured):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {"isInterVisit":1,"clusterId":"1","size":1,"switch":1,"address":[{"host":"127.0.0.1","port":"46802"},{"host":"127.0.0.1","port":"46802"}]}\n')),(0,r.kt)("h3",{id:"send-message"},"Send Message"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    public void sendTcpMessage(DefaultMessageSender sender, String inlongGroupId,\n            String inlongStreamId, String messageBody, long dt) throws Exception {\n      SendResult result = sender.sendMessage(messageBody.getBytes("utf8"),inlongGroupId, inlongStreamId,\n             0, String.valueOf(dt), 20,TimeUnit.SECONDS);\n      logger.info("messageSender {} ", result);\n    }\n')),(0,r.kt)("p",null,"The parameter description is as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"instruction"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sender"),(0,r.kt)("td",{parentName:"tr",align:null},"HttpProxySender"),(0,r.kt)("td",{parentName:"tr",align:null},"The sender created in the first step")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlongGroupId"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"inglongGroupId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlongStreamId"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"inlongStreamId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"messageBody"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Sent message content")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dt"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp")))),(0,r.kt)("h2",{id:"http-example"},"HTTP Example"),(0,r.kt)("h3",{id:"create-messagesender"},"Create MessageSender"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    public HttpProxySender getMessageSender(String localIP, String inLongManagerAddr, String inLongManagerPort,\n            String netTag, String dataProxyGroup, boolean isLocalVisit, boolean isReadProxyIPFromLocal,\n            String configBasePath) {\n         ProxyClientConfig proxyConfig = null;\n         HttpProxySender sender = null;\n         try {\n              proxyConfig = new ProxyClientConfig(localIP, isLocalVisit, inLongManagerAddr,\n                        Integer.valueOf(inLongManagerPort),\n                        dataProxyGroup, netTag);\n             proxyConfig.setGroupId(dataProxyGroup);\n             proxyConfig.setConfStoreBasePath(configBasePath);\n             proxyConfig.setReadProxyIPFromLocal(isReadProxyIPFromLocal);\n             proxyConfig.setDiscardOldMessage(true);\n             sender = new HttpProxySender(proxyConfig);\n         } catch (ProxysdkException e) {\n             e.printStackTrace();\n         } catch (Exception e) {\n             e.printStackTrace();\n         }\n        return sender;\n    }\n")),(0,r.kt)("p",null,"The parameter description is as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"instruction"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inLongManagerAddr"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong admin server address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inLongManagerPort"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong admin server port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"netTag"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Network label, not used yet, you can pass an empty string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataProxyGroup"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"dataProxy group name, the name used for local configuration when the user enables local configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isLocalVisit"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to use local configuration, true use https to access the console, false use http to request the console")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isReadProxyIPFromLocal"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to obtain the address information of the Dataproxy server from the local configuration file, local self-test, can be set to true if the management console cannot be accessed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"configBasePath"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The path of the local configuration file. The default is ./inlong. When isReadProxyIPFromLocal is true, the configuration file is searched from this directory.")))),(0,r.kt)("p",null,"When isReadProxyIPFromLocal is set true, the configuration information of Dataproxy will be obtained from the local configuration file."),(0,r.kt)("p",null,"The path to the local file is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    ${configBasePath}\n")),(0,r.kt)("p",null,"The file name is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    ${dataProxyGroup}.local<br/>\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    configBasePath = /data/inlong\n    dataProxyGroup = inlong_test\n")),(0,r.kt)("p",null,"Then the full path name of the local file is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    /data/inlong/inlong_test.local\n")),(0,r.kt)("p",null,"The file configuration content is (json format), where host is the address of the DataProxy server, and port is the corresponding port, which requires at least two configurations (the same two items can be configured):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {"isInterVisit":1,"clusterId":"1","size":1,"switch":1,"address":[{"host":"127.0.0.1","port":"46802"},{"host":"127.0.0.1","port":"46802"}]}\n')),(0,r.kt)("h3",{id:"send-message-1"},"Send Message"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    public void sendHttpMessage(HttpProxySender sender, String inlongGroupId,\n            String inlongStreamId, String messageBody) throws Exception {\n        List<String> bodyList = new ArrayList<>();\n        bodyList.add(messageBody);\n        sender.asyncSendMessage(bodyList, inlongGroupId, inlongStreamId, System.currentTimeMillis(),\n             20, TimeUnit.SECONDS, new MyMessageCallBack());\n    }\n")),(0,r.kt)("p",null,"The parameter description is as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"instruction"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sender"),(0,r.kt)("td",{parentName:"tr",align:null},"HttpProxySender"),(0,r.kt)("td",{parentName:"tr",align:null},"The sender created in the first step")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlongGroupId"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"inglongGroupId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlongStreamId"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"inlongStreamId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"messageBody"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Sent message content")))),(0,r.kt)("h2",{id:"udp-example"},"UDP Example"),(0,r.kt)("p",null,"inlong-dataproxy-sdk does not support sending messages of UDP protocol. If users need it, they need to assemble them according to the message assembly method in SDK.\nOrganize binary arrays and send them in upd mode. For specific examples, refer to the relevant example codes in inlong-sdk/dataporxy-sdk."))}m.isMDXComponent=!0}}]);