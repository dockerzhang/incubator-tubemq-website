"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7202],{3905:function(t,e,n){n.d(e,{Zo:function(){return g},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},g=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,g=i(t,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(d,".").concat(m)]||u[m]||s[m]||l;return n?a.createElement(k,o(o({ref:e},g),{},{components:n})):a.createElement(k,o({ref:e},g))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82601:function(t,e,n){n.r(e),n.d(e,{assets:function(){return g},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"\u793a\u4f8b",sidebar_position:2},d=void 0,p={unversionedId:"sdk/dataproxy-sdk/example",id:"version-1.0.0/sdk/dataproxy-sdk/example",title:"\u793a\u4f8b",description:"\u603b\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.0/sdk/dataproxy-sdk/example.md",sourceDirName:"sdk/dataproxy-sdk",slug:"/sdk/dataproxy-sdk/example",permalink:"/zh-CN/docs/sdk/dataproxy-sdk/example",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-1.0.0/sdk/dataproxy-sdk/example.md",tags:[],version:"1.0.0",sidebarPosition:2,frontMatter:{title:"\u793a\u4f8b",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/modules/audit/quick_start"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/sdk/dataproxy-sdk/overview"}},g={},s=[{value:"\u603b\u89c8",id:"\u603b\u89c8",level:2},{value:"\u589e\u52a0\u4f9d\u8d56",id:"\u589e\u52a0\u4f9d\u8d56",level:2},{value:"TCP \u793a\u4f8b",id:"tcp-\u793a\u4f8b",level:2},{value:"\u521b\u5efa messageSender",id:"\u521b\u5efa-messagesender",level:3},{value:"\u53d1\u9001\u6d88\u606f",id:"\u53d1\u9001\u6d88\u606f",level:3},{value:"HTTP \u793a\u4f8b",id:"http-\u793a\u4f8b",level:3},{value:"\u521b\u5efa messageSender",id:"\u521b\u5efa-messagesender-1",level:3},{value:"\u53d1\u9001\u6d88\u606f",id:"\u53d1\u9001\u6d88\u606f-1",level:3},{value:"UDP \u793a\u4f8b",id:"udp-\u793a\u4f8b",level:2}],u={toc:s};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,l.kt)("p",null,"Inlong-dataproxy-sdk \u63d0\u4f9b TCP\u3001HTTP\u4e24\u79cd\u534f\u8bae\u7684\u63a5\u5165 api \uff0c\u4f7f\u7528 TCP \u6216\u8005 HTTP \u63a5\u5165\u65f6\u9700\u8981\u4fdd\u8bc1 Dataproxy \u670d\u52a1\u5668\u7aef\uff0c\u6709\u5bf9\u5e94\u7684\u534f\u8bae\u7684\u63a5\u5165\u914d\u7f6e\uff08\u5373\u5bf9\u5e94\u7684 Source \u670d\u52a1\u914d\u7f6e\uff09\u3002\u5982\u679c\uff0c\u9700\u8981\u4f7f\u7528 UDP \u65b9\u5f0f\u63a5\u5165\uff0c\n\u9700\u8981\u81ea\u5df1\u6309\u7167 TCP \u4f20\u8f93\u7684 bytes \u6570\u7ec4\u683c\u5f0f\u8fdb\u884c\u7ec4\u5305\uff0c\u91c7\u7528 UDP \u534f\u8bae\u53d1\u9001\u5230 dataproxy \u670d\u52a1\u5668\uff0c\u670d\u52a1\u5668\u7aef\u91c7\u7528\u4e0eTCP\u4e00\u6837\u7684\u65b9\u5f0f\u5bf9\u63a5\u3002\n\u6b64\u5916\uff0c\u5728 Inlong-dataproxy-sdk \u4e2d\u7684 example \u76ee\u5f55\u4e0b\u63d0\u4f9b\u4e86 TCP\u3001HTTP\u3001UDP \u4e09\u79cd\u534f\u8bae\u7684\u63a5\u5165\u6f14\u793a\u4ee3\u7801\uff0c\u5927\u5bb6\u5728\u63a5\u5165\u65f6\u53ef\u4ee5\u53c2\u8003\u3002"),(0,l.kt)("p",null,"Api \u8be6\u60c5\uff0c\u8bf7\u67e5\u770b",(0,l.kt)("a",{parentName:"p",href:"./overview"},"\u603b\u89c8")),(0,l.kt)("h2",{id:"\u589e\u52a0\u4f9d\u8d56"},"\u589e\u52a0\u4f9d\u8d56"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"   <dependency>\n           <groupId>org.apache.inlong</groupId>\n           <artifactId>dataproxy-sdk</artifactId>\n           <version>${inlong_version}</version>\n   </dependency>\n")),(0,l.kt)("h2",{id:"tcp-\u793a\u4f8b"},"TCP \u793a\u4f8b"),(0,l.kt)("h3",{id:"\u521b\u5efa-messagesender"},"\u521b\u5efa messageSender"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'    public DefaultMessageSender getMessageSender(String localIP, String inLongManagerAddr, String inLongManagerPort,\n            String netTag, String dataProxyGroup, boolean isLocalVisit, boolean isReadProxyIPFromLocal,\n            String configBasePath, int msgType) {\n        ProxyClientConfig dataProxyConfig = null;\n        DefaultMessageSender messageSender = null;\n        try {\n            dataProxyConfig = new ProxyClientConfig(localIP, isLocalVisit, inLongManagerAddr,\n                    Integer.valueOf(inLongManagerPort), dataProxyGroup, netTag);\n            if (StringUtils.isNotEmpty(configBasePath)) {\n                dataProxyConfig.setConfStoreBasePath(configBasePath);\n            }\n            dataProxyConfig.setReadProxyIPFromLocal(isReadProxyIPFromLocal);\n            messageSender = DefaultMessageSender.generateSenderByClusterId(dataProxyConfig);\n            messageSender.setMsgtype(msgType);\n        } catch (Exception e) {\n            logger.error("getMessageSender has exception e = {}", e);\n        }\n        return messageSender;\n    }\n')),(0,l.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inLongManagerAddr"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong \u7ba1\u7406\u53f0\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inLongManagerPort"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong \u7ba1\u7406\u53f0\u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"netTag"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f51\u7edc\u6807\u7b7e\uff0c\u6682\u672a\u4f7f\u7528\uff0c\u53ef\u4ee5\u4f20\u7a7a\u5b57\u7b26\u4e32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataProxyGroup"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"dataProup \u7ec4\u540d\u79f0\uff0c\u7528\u6237\u5728\u542f\u7528\u672c\u5730\u914d\u7f6e\u7684\u65f6\u5019\uff0c\u7528\u4e8e\u672c\u5730\u914d\u7f6e\u7684\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isLocalVisit"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u4f7f\u7528\u672c\u5730\u914d\u7f6e\uff0c true \u4f7f\u7528 https \u8bbf\u95ee\u7ba1\u7406\u53f0\uff0cfalse \u4f7f\u7528 http \u8bf7\u6c42\u7ba1\u7406\u53f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isReadProxyIPFromLocal"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u4ece\u672c\u5730\u914d\u7f6e\u6587\u4ef6\u4e2d\u83b7\u53d6 Dataproxy \u670d\u52a1\u5668\u5730\u5740\u4fe1\u606f\uff0c\u672c\u5730\u81ea\u6d4b\uff0c\u4e0d\u80fd\u8bbf\u95ee\u7ba1\u7406\u53f0\u7684\u60c5\u51b5\u4e0b\u53ef\u4ee5\u914d\u7f6e\u4e3a true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"configBasePath"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u914d\u7f6e\u6587\u4ef6\u7684\u8def\u5f84 \u9ed8\u8ba4 ./inlong\uff0cisReadProxyIPFromLocal \u4e3a true \u65f6\u4ece\u8fd9\u4e2a\u76ee\u5f55\u67e5\u627e\u914d\u7f6e\u6587\u4ef6/")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msgtype"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u7c7b\u578b\uff0c\u53d6\u503c\uff083\uff0c5\uff0c7\uff0c8\uff09\uff0c\u5efa\u8bae\u4f7f\u75287\uff0c\u6bcf\u79cd\u6d88\u606f\u7c7b\u578b\u4ee3\u8868\u4e00\u79cd\u4f20\u9012\u8fc7\u7a0b\u4e2d\u6d88\u606f\u7684\u62fc\u88c5\u534f\u8bae,\u5177\u4f53\u8bf7\u53c2\u7167SDK\u7684\u4ee3\u7801\u5b9e\u73b0")))),(0,l.kt)("p",null,"\u5f53 isReadProxyIPFromLocal \u4e3a true \u7684\u65f6\u5019, \u4f1a\u4ece\u672c\u5730\u914d\u7f6e\u6587\u4ef6\u4e2d\u83b7\u53d6 Dataproxy \u7684\u914d\u7f6e\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u672c\u5730\u6587\u4ef6\u7684\u8def\u5f84\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    ${configBasePath}\n")),(0,l.kt)("p",null,"\u6587\u4ef6\u540d\u79f0\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    ${dataProxyGroup}.local\n")),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    configBasePath = /data/inlong\n    dataProxyGroup = inlong_test\n")),(0,l.kt)("p",null,"\u5219\u672c\u5730\u6587\u4ef6\u7684\u5168\u8def\u5f84\u540d\u79f0\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    /data/inlong/inlong_test.local\n")),(0,l.kt)("p",null,"\u6587\u4ef6\u914d\u7f6e\u5185\u5bb9\u4e3a( json \u683c\u5f0f),\u5176\u4e2d host \u4e3a DataProxy \u670d\u52a1\u5668\u5730\u5740\uff0cport\u4e3a\u5bf9\u5e94\u7684\u7aef\u53e3\uff0c\u8fd9\u9700\u8981\u81f3\u5c11\u914d\u7f6e\u4e24\u4e2a\uff08\u53ef\u4ee5\u914d\u7f6e\u4e3a\u76f8\u540c\u7684\u4e24\u9879\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'    {"isInterVisit":1,"cluster_id":"1","size":1,"switch":1,"address":[{"host":"127.0.0.1","port":"46802"},{"host":"127.0.0.1","port":"46802"}]}\n')),(0,l.kt)("h3",{id:"\u53d1\u9001\u6d88\u606f"},"\u53d1\u9001\u6d88\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'    public void sendTcpMessage(DefaultMessageSender sender, String inlongGroupId,\n            String inlongStreamId, String messageBody, long dt) throws Exception {\n     SendResult result = sender.sendMessage(messageBody.getBytes("utf8"),inlongGroupId, inlongStreamId,\n             0, String.valueOf(dt), 20,TimeUnit.SECONDS);\n     logger.info("messageSender {} ", result);\n    }\n')),(0,l.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sender"),(0,l.kt)("td",{parentName:"tr",align:null},"HttpProxySender"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b2c\u4e00\u6b65\u521b\u5efa\u7684 sender")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inlongGroupId"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"inglongGroupId")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inlongStreamId"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"inlongStreamId")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"messageBody"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u7684\u6d88\u606f\u5185\u5bb9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dt"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65f6\u95f4\u6233")))),(0,l.kt)("h3",{id:"http-\u793a\u4f8b"},"HTTP \u793a\u4f8b"),(0,l.kt)("h3",{id:"\u521b\u5efa-messagesender-1"},"\u521b\u5efa messageSender"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"    public HttpProxySender getMessageSender(String localIP, String inLongManagerAddr, String inLongManagerPort,\n            String netTag, String dataProxyGroup, boolean isLocalVisit, boolean isReadProxyIPFromLocal,\n            String configBasePath) {\n         ProxyClientConfig proxyConfig = null;\n         HttpProxySender sender = null;\n         try {\n             proxyConfig = new ProxyClientConfig(localIP, isLocalVisit, inLongManagerAddr,\n                        Integer.valueOf(inLongManagerPort),\n                        dataProxyGroup, netTag);\n             proxyConfig.setGroupId(dataProxyGroup);\n             proxyConfig.setConfStoreBasePath(configBasePath);\n             proxyConfig.setReadProxyIPFromLocal(isReadProxyIPFromLocal);\n             proxyConfig.setDiscardOldMessage(true);\n             sender = new HttpProxySender(proxyConfig);\n         } catch (ProxysdkException e) {\n             e.printStackTrace();\n         } catch (Exception e) {\n             e.printStackTrace();\n         }\n         return sender;\n    }\n")),(0,l.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inLongManagerAddr"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong \u7ba1\u7406\u53f0\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inLongManagerPort"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong \u7ba1\u7406\u53f0\u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"netTag"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f51\u7edc\u6807\u7b7e\uff0c\u6682\u672a\u4f7f\u7528\uff0c\u53ef\u4ee5\u4f20\u7a7a\u5b57\u7b26\u4e32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataProxyGroup"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"dataProup \u7ec4\u540d\u79f0\uff0c\u7528\u6237\u5728\u542f\u7528\u672c\u5730\u914d\u7f6e\u7684\u65f6\u5019\uff0c\u7528\u4e8e\u672c\u5730\u914d\u7f6e\u7684\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isLocalVisit"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u4f7f\u7528\u672c\u5730\u914d\u7f6e\uff0c true \u4f7f\u7528 https \u8bbf\u95ee\u7ba1\u7406\u53f0\uff0cfalse \u4f7f\u7528 http \u8bf7\u6c42\u7ba1\u7406\u53f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isReadProxyIPFromLocal"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u4ece\u672c\u5730\u914d\u7f6e\u6587\u4ef6\u4e2d\u83b7\u53d6 Dataproxy \u670d\u52a1\u5668\u5730\u5740\u4fe1\u606f\uff0c\u672c\u5730\u81ea\u6d4b\uff0c\u4e0d\u80fd\u8bbf\u95ee\u7ba1\u7406\u53f0\u7684\u60c5\u51b5\u4e0b\u53ef\u4ee5\u914d\u7f6e\u4e3a true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"configBasePath"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u914d\u7f6e\u6587\u4ef6\u7684\u8def\u5f84 \u9ed8\u8ba4 ./inlong\uff0cisReadProxyIPFromLocal \u4e3a true \u65f6\u4ece\u8fd9\u4e2a\u76ee\u5f55\u67e5\u627e\u914d\u7f6e\u6587\u4ef6/")))),(0,l.kt)("p",null,"\u5f53 isReadProxyIPFromLocal \u4e3a true \u7684\u65f6\u5019, \u4f1a\u4ece\u672c\u5730\u914d\u7f6e\u6587\u4ef6\u4e2d\u83b7\u53d6 Dataproxy \u7684\u914d\u7f6e\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u672c\u5730\u6587\u4ef6\u7684\u8def\u5f84\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    ${configBasePath}\n")),(0,l.kt)("p",null,"\u6587\u4ef6\u540d\u79f0\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    ${dataProxyGroup}.local\n")),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    configBasePath = /data/inlong\n    dataProxyGroup = inlong_test\n")),(0,l.kt)("p",null,"\u5219\u672c\u5730\u6587\u4ef6\u7684\u5168\u8def\u5f84\u540d\u79f0\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    /data/inlong/inlong_test.local\n")),(0,l.kt)("p",null,"\u6587\u4ef6\u914d\u7f6e\u5185\u5bb9\u4e3a( json \u683c\u5f0f),\u5176\u4e2d host \u4e3a DataProxy \u670d\u52a1\u5668\u5730\u5740\uff0cport \u4e3a\u5bf9\u5e94\u7684\u7aef\u53e3\uff0c\u8fd9\u9700\u8981\u81f3\u5c11\u914d\u7f6e\u4e24\u4e2a\uff08\u53ef\u4ee5\u914d\u7f6e\u4e3a\u76f8\u540c\u7684\u4e24\u9879\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'    {"isInterVisit":1,"cluster_id":"1","size":1,"switch":1,"address":[{"host":"127.0.0.1","port":"46802"},{"host":"127.0.0.1","port":"46802"}]}\n')),(0,l.kt)("h3",{id:"\u53d1\u9001\u6d88\u606f-1"},"\u53d1\u9001\u6d88\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"    public void sendHttpMessage(HttpProxySender sender, String inlongGroupId,\n            String inlongStreamId, String messageBody) throws Exception {\n        List<String> bodyList = new ArrayList<>();\n        bodyList.add(messageBody);\n        sender.asyncSendMessage(bodyList, inlongGroupId, inlongStreamId, System.currentTimeMillis(),\n             20, TimeUnit.SECONDS, new MyMessageCallBack());\n    }\n")),(0,l.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sender"),(0,l.kt)("td",{parentName:"tr",align:null},"HttpProxySender"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b2c\u4e00\u6b65\u521b\u5efa\u7684 sender")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inlongGroupId"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"inglongGroupId")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inlongStreamId"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"inlongStreamId")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"messageBody"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u7684\u6d88\u606f\u5185\u5bb9")))),(0,l.kt)("h2",{id:"udp-\u793a\u4f8b"},"UDP \u793a\u4f8b"),(0,l.kt)("p",null,"Inlong-dataproxy-sdk \u4e0d\u652f\u6301\u53d1\u9001 UDP \u534f\u8bae\u7684\u6d88\u606f\uff0c\u5982\u679c\u7528\u6237\u9700\u8981\uff0c\u9700\u8981\u81ea\u5df1\u6309\u7167 SDK \u4e2d\u7684\u6d88\u606f\u62fc\u88c5\u65b9\u5f0f\uff0c\n\u7ec4\u7ec7\u4e8c\u8fdb\u5236\u6570\u7ec4\uff0c\u6309\u7167 UDP\u65b9\u5f0f\u53d1\u9001\uff0c\u5177\u4f53\u793a\u4f8b\u53c2\u7167 inlong-sdk/dataporxy-sdk \u4e2d\u7684\u76f8\u5173\u7684 example \u4ee3\u7801\u3002"))}m.isMDXComponent=!0}}]);