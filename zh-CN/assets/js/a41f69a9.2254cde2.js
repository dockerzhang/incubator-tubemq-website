"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[24774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},g=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,d=p["".concat(l,".").concat(g)]||p[g]||m[g]||a;return n?s.createElement(d,o(o({ref:t},c),{},{components:n})):s.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}g.displayName="MDXCreateElement"},79409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var s=n(87462),r=(n(67294),n(3905));const a={title:"JAVA SDK API"},o=void 0,i={unversionedId:"modules/tubemq/clients_java",id:"version-1.11.0/modules/tubemq/clients_java",title:"JAVA SDK API",description:"1 \u57fa\u7840\u5bf9\u8c61\u63a5\u53e3\u4ecb\u7ecd\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.11.0/modules/tubemq/clients_java.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/clients_java",permalink:"/zh-CN/docs/1.11.0/modules/tubemq/clients_java",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.11.0/modules/tubemq/clients_java.md",tags:[],version:"1.11.0",frontMatter:{title:"JAVA SDK API"},sidebar:"tutorialSidebar",previous:{title:"\u5ba2\u6237\u7aefRPC",permalink:"/zh-CN/docs/1.11.0/modules/tubemq/client_rpc"},next:{title:"\u914d\u7f6e\u53c2\u6570",permalink:"/zh-CN/docs/1.11.0/modules/tubemq/configure_introduction"}},l={},u=[{value:"1 \u57fa\u7840\u5bf9\u8c61\u63a5\u53e3\u4ecb\u7ecd\uff1a",id:"1-\u57fa\u7840\u5bf9\u8c61\u63a5\u53e3\u4ecb\u7ecd",level:2},{value:"1.1 MessageSessionFactory\uff08\u6d88\u606f\u4f1a\u8bdd\u5de5\u5382\uff09\uff1a",id:"11-messagesessionfactory\u6d88\u606f\u4f1a\u8bdd\u5de5\u5382",level:3},{value:"1.2 MasterInfo:",id:"12-masterinfo",level:3},{value:"1.3 TubeClientConfig\uff1a",id:"13-tubeclientconfig",level:3},{value:"1.4 ConsumerConfig\uff1a",id:"14-consumerconfig",level:3},{value:"1.5 Message\uff1a",id:"15-message",level:3},{value:"1.6 MessageProducer\uff1a",id:"16-messageproducer",level:3},{value:"1.7 MessageConsumer\uff1a",id:"17-messageconsumer",level:3},{value:"2 \u63a5\u53e3\u8c03\u7528\u793a\u4f8b\uff1a",id:"2-\u63a5\u53e3\u8c03\u7528\u793a\u4f8b",level:2},{value:"2.1 \u73af\u5883\u51c6\u5907\uff1a",id:"21-\u73af\u5883\u51c6\u5907",level:3},{value:"2.2 \u521b\u5efaConsumer\uff1a",id:"22-\u521b\u5efaconsumer",level:3},{value:"2.2.1 \u521d\u59cb\u5316MessageConsumerExample\u7c7b\uff1a",id:"221-\u521d\u59cb\u5316messageconsumerexample\u7c7b",level:4},{value:"2.2.2 \u8ba2\u9605Topic\uff1a",id:"222-\u8ba2\u9605topic",level:4},{value:"2.2.3 \u8fdb\u884c\u6d88\u8d39\uff1a",id:"223-\u8fdb\u884c\u6d88\u8d39",level:4},{value:"3 \u521b\u5efaProducer\uff1a",id:"3-\u521b\u5efaproducer",level:2},{value:"3.1 \u521d\u59cb\u5316MessageProducerExample\u7c7b\uff1a",id:"31-\u521d\u59cb\u5316messageproducerexample\u7c7b",level:3},{value:"3.2 \u53d1\u5e03Topic\uff1a",id:"32-\u53d1\u5e03topic",level:3},{value:"3.3 \u8fdb\u884c\u6570\u636e\u751f\u4ea7\uff1a",id:"33-\u8fdb\u884c\u6570\u636e\u751f\u4ea7",level:3},{value:"3.4 Producer\u4e0d\u540c\u7c7bMAMessageProducerExample\u5173\u6ce8\u70b9\uff1a",id:"34-producer\u4e0d\u540c\u7c7bmamessageproducerexample\u5173\u6ce8\u70b9",level:3}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-\u57fa\u7840\u5bf9\u8c61\u63a5\u53e3\u4ecb\u7ecd"},"1 \u57fa\u7840\u5bf9\u8c61\u63a5\u53e3\u4ecb\u7ecd\uff1a"),(0,r.kt)("h3",{id:"11-messagesessionfactory\u6d88\u606f\u4f1a\u8bdd\u5de5\u5382"},"1.1 MessageSessionFactory\uff08\u6d88\u606f\u4f1a\u8bdd\u5de5\u5382\uff09\uff1a"),(0,r.kt)("p",null,"TubeMQ \u91c7\u7528MessageSessionFactory\uff08\u6d88\u606f\u4f1a\u8bdd\u5de5\u5382\uff09\u6765\u7ba1\u7406\u7f51\u7edc\u8fde\u63a5\uff0c\u53c8\u6839\u636e\u4e1a\u52a1\u4e0d\u540c\u5ba2\u6237\u7aef\u662f\u5426\u590d\u7528\u8fde\u63a5\u7ec6\u5206\u4e3aTubeSingleSessionFactory\uff08\u5355\u8fde\u63a5\u4f1a\u8bdd\u5de5\u5382\uff09\u7c7b\u548cTubeMultiSessionFactory\uff08\u591a\u8fde\u63a5\u4f1a\u8bdd\u5de5\u5382\uff09\u7c7b2\u4e2a\u90e8\u5206\uff0c\u5176\u5b9e\u73b0\u903b\u8f91\u5927\u5bb6\u53ef\u4ee5\u4ece\u4ee3\u7801\u53ef\u4ee5\u770b\u5230\uff0c\u5355\u8fde\u63a5\u4f1a\u8bdd\u901a\u8fc7\u5b9a\u4e49clientFactory\u9759\u6001\u7c7b\uff0c\u5b9e\u73b0\u4e86\u8fdb\u7a0b\u5185\u4e0d\u540c\u5ba2\u6237\u7aef\u8fde\u63a5\u76f8\u540c\u76ee\u6807\u670d\u52a1\u5668\u65f6\u5e95\u5c42\u7269\u7406\u8fde\u63a5\u53ea\u5efa\u7acb\u4e00\u6761\u7684\u7279\u5f81\uff0c\u591a\u8fde\u63a5\u4f1a\u8bdd\u91cc\u5b9a\u4e49\u7684clientFactory\u4e3a\u975e\u9759\u6001\u7c7b\uff0c\u4ece\u800c\u5b9e\u73b0\u540c\u8fdb\u7a0b\u5185\u901a\u8fc7\u4e0d\u540c\u4f1a\u8bdd\u5de5\u5382\uff0c\u521b\u5efa\u7684\u5ba2\u6237\u7aef\u6240\u5c5e\u7684\u8fde\u63a5\u4f1a\u8bdd\u4e0d\u540c\u5efa\u7acb\u4e0d\u540c\u7684\u7269\u7406\u8fde\u63a5\u3002\u901a\u8fc7\u8fd9\u79cd\u6784\u9020\u89e3\u51b3\u8fde\u63a5\u521b\u5efa\u8fc7\u591a\u7684\u95ee\u9898\uff0c\u4e1a\u52a1\u53ef\u4ee5\u6839\u636e\u81ea\u8eab\u9700\u8981\u53ef\u4ee5\u9009\u62e9\u4e0d\u540c\u7684\u6d88\u606f\u4f1a\u8bdd\u5de5\u5382\u7c7b\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u6211\u4eec\u4f7f\u7528\u5355\u8fde\u63a5\u4f1a\u8bdd\u5de5\u5382\u7c7b\u3002"),(0,r.kt)("h3",{id:"12-masterinfo"},"1.2 MasterInfo:"),(0,r.kt)("p",null,"TubeMQ\u7684Master\u5730\u5740\u4fe1\u606f\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u7684\u7279\u70b9\u662f\u652f\u6301\u914d\u7f6e\u591a\u4e2aMaster\u5730\u5740\uff0c\u7531\u4e8eTubeMQ Master\u501f\u52a9BDB\u7684\u5b58\u50a8\u80fd\u529b\u8fdb\u884c\u5143\u6570\u636e\u7ba1\u7406\uff0c\u4ee5\u53ca\u670d\u52a1HA\u70ed\u5207\u80fd\u529b\uff0cMaster\u7684\u5730\u5740\u76f8\u5e94\u5730\u5c31\u9700\u8981\u914d\u7f6e\u591a\u6761\u4fe1\u606f\u3002\u8be5\u914d\u7f6e\u4fe1\u606f\u652f\u6301IP\u3001\u57df\u540d\u4e24\u79cd\u6a21\u5f0f\uff0c\u7531\u4e8eTubeMQ\u7684HA\u662f\u70ed\u5207\u6a21\u5f0f\uff0c\u5ba2\u6237\u7aef\u8981\u4fdd\u8bc1\u5230\u5404\u4e2aMaster\u5730\u5740\u90fd\u662f\u8fde\u901a\u7684\u3002\u8be5\u4fe1\u606f\u5728\u521d\u59cb\u5316TubeClientConfig\u7c7b\u5bf9\u8c61\u548cConsumerConfig\u7c7b\u5bf9\u8c61\u65f6\u4f7f\u7528\uff0c\u8003\u8651\u5230\u914d\u7f6e\u7684\u65b9\u4fbf\u6027\uff0c\u6211\u4eec\u5c06\u591a\u6761Master\u5730\u5740\u6784\u9020\u6210\u201cip1:port1,ip2:port2,ip3:port3\u201d\u683c\u5f0f\u5e76\u8fdb\u884c\u89e3\u6790\u3002"),(0,r.kt)("h3",{id:"13-tubeclientconfig"},"1.3 TubeClientConfig\uff1a"),(0,r.kt)("p",null,"MessageSessionFactory\uff08\u6d88\u606f\u4f1a\u8bdd\u5de5\u5382\uff09\u521d\u59cb\u5316\u7c7b\uff0c\u7528\u6765\u643a\u5e26\u521b\u5efa\u7f51\u7edc\u8fde\u63a5\u4fe1\u606f\u3001\u5ba2\u6237\u7aef\u63a7\u5236\u53c2\u6570\u4fe1\u606f\u7684\u5bf9\u8c61\u7c7b\uff0c\u5305\u62ecRPC\u65f6\u957f\u8bbe\u7f6e\u3001Socket\u5c5e\u6027\u8bbe\u7f6e\u3001\u8fde\u63a5\u8d28\u91cf\u68c0\u6d4b\u53c2\u6570\u8bbe\u7f6e\u3001TLS\u53c2\u6570\u8bbe\u7f6e\u3001\u8ba4\u8bc1\u6388\u6743\u4fe1\u606f\u8bbe\u7f6e\u7b49\u4fe1\u606f\u3002"),(0,r.kt)("h3",{id:"14-consumerconfig"},"1.4 ConsumerConfig\uff1a"),(0,r.kt)("p",null,"ConsumerConfig\u7c7b\u662fTubeClientConfig\u7c7b\u7684\u5b50\u7c7b\uff0c\u5b83\u662f\u5728TubeClientConfig\u7c7b\u57fa\u7840\u4e0a\u589e\u52a0\u4e86Consumer\u7c7b\u5bf9\u8c61\u521d\u59cb\u5316\u65f6\u5019\u7684\u53c2\u6570\u643a\u5e26\uff0c\u56e0\u800c\u5728\u4e00\u4e2a\u65e2\u6709Producer\u53c8\u6709Consumer\u7684MessageSessionFactory\uff08\u6d88\u606f\u4f1a\u8bdd\u5de5\u5382\uff09\u7c7b\u5bf9\u8c61\u91cc\uff0c\u4f1a\u8bdd\u5de5\u5382\u7c7b\u7684\u76f8\u5173\u8bbe\u7f6e\u4ee5MessageSessionFactory\u7c7b\u521d\u59cb\u5316\u7684\u5185\u5bb9\u4e3a\u51c6\uff0cConsumer\u7c7b\u5bf9\u8c61\u6309\u7167\u521b\u5efa\u65f6\u4f20\u9012\u7684\u521d\u59cb\u5316\u7c7b\u5bf9\u8c61\u4e3a\u51c6\u3002\u5728consumer\u91cc\u53c8\u6839\u636e\u6d88\u8d39\u884c\u4e3a\u7684\u4e0d\u540c\u5206\u4e3aPull\u6d88\u8d39\u8005\u548cPush\u6d88\u8d39\u8005\u4e24\u79cd\uff0c\u4e24\u79cd\u7279\u6709\u7684\u53c2\u6570\u901a\u8fc7\u53c2\u6570\u63a5\u53e3\u643a\u5e26\u201cpull\u201d\u6216\u201cpush\u201d\u4e0d\u540c\u7279\u5f81\u8fdb\u884c\u533a\u5206\u3002"),(0,r.kt)("h3",{id:"15-message"},"1.5 Message\uff1a"),(0,r.kt)("p",null,"Message\u7c7b\u662fTubeMQ\u91cc\u4f20\u9012\u7684\u6d88\u606f\u5bf9\u8c61\u7c7b\uff0c\u4e1a\u52a1\u8bbe\u7f6e\u7684data\u4f1a\u4ece\u751f\u4ea7\u7aef\u539f\u6837\u4f20\u9012\u7ed9\u6d88\u606f\u63a5\u6536\u7aef\uff0cattribute\u5185\u5bb9\u662f\u4e0eTubeMQ\u7cfb\u7edf\u5171\u7528\u7684\u5b57\u6bb5\uff0c\u4e1a\u52a1\u586b\u5199\u7684\u5185\u5bb9\u4e0d\u4f1a\u4e22\u5931\u548c\u6539\u5199\uff0c\u4f46\u8be5\u5b57\u6bb5\u6709\u53ef\u80fd\u4f1a\u65b0\u589eTubeMQ\u7cfb\u7edf\u586b\u5199\u7684\u5185\u5bb9\uff0c\u5e76\u5728\u540e\u7eed\u7684\u7248\u672c\u4e2d\uff0c\u65b0\u589e\u7684TubeMQ\u7cfb\u7edf\u5185\u5bb9\u6709\u53ef\u80fd\u53bb\u6389\u800c\u4e0d\u88ab\u901a\u77e5\u3002\u8be5\u90e8\u5206\u9700\u8981\u6ce8\u610f\u7684\u662fMessage.putSystemHeader(final String msgType, final String msgTime)\u63a5\u53e3\uff0c\u8be5\u63a5\u53e3\u7528\u6765\u8bbe\u7f6e\u6d88\u606f\u7684\u6d88\u606f\u7c7b\u578b\u548c\u6d88\u606f\u53d1\u9001\u65f6\u95f4\uff0cmsgType\u7528\u4e8e\u6d88\u8d39\u7aef\u8fc7\u6ee4\u7528\uff0cmsgTime\u7528\u505aTubeMQ\u8fdb\u884c\u6570\u636e\u6536\u53d1\u7edf\u8ba1\u65f6\u6d88\u606f\u65f6\u95f4\u7edf\u8ba1\u7ef4\u5ea6\u7528\u3002"),(0,r.kt)("h3",{id:"16-messageproducer"},"1.6 MessageProducer\uff1a"),(0,r.kt)("p",null,"\u6d88\u606f\u751f\u4ea7\u8005\u7c7b\uff0c\u8be5\u7c7b\u5b8c\u6210\u6d88\u606f\u7684\u751f\u4ea7\uff0c\u6d88\u606f\u53d1\u9001\u5206\u4e3a\u540c\u6b65\u53d1\u9001\u548c\u5f02\u6b65\u53d1\u9001\u4e24\u79cd\u63a5\u53e3\uff0c\u76ee\u524d\u6d88\u606f\u91c7\u7528Round Robin\u65b9\u5f0f\u53d1\u5f80\u540e\u7aef\u670d\u52a1\u5668\uff0c\u540e\u7eed\u8fd9\u5757\u5c06\u8003\u8651\u6309\u7167\u4e1a\u52a1\u6307\u5b9a\u7684\u7b97\u6cd5\u8fdb\u884c\u540e\u7aef\u670d\u52a1\u5668\u9009\u62e9\u65b9\u5f0f\u8fdb\u884c\u751f\u4ea7\u3002\u8be5\u7c7b\u4f7f\u7528\u65f6\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6211\u4eec\u652f\u6301\u5728\u521d\u59cb\u5316\u65f6\u5019\u5168\u91cfTopic\u6307\u5b9a\u7684publish\uff0c\u4e5f\u652f\u6301\u5728\u751f\u4ea7\u8fc7\u7a0b\u4e2d\u4e34\u65f6\u589e\u52a0\u5bf9\u65b0\u7684Topic\u7684publish\uff0c\u4f46\u4e34\u65f6\u589e\u52a0\u7684Topic\u4e0d\u4f1a\u7acb\u5373\u751f\u6548\uff0c\u56e0\u800c\u5728\u4f7f\u7528\u65b0\u589eTopic\u524d\uff0c\u8981\u5148\u8c03\u7528isTopicCurAcceptPublish\u63a5\u53e3\u67e5\u8be2\u8be5Topic\u662f\u5426\u5df2publish\u5e76\u4e14\u88ab\u670d\u52a1\u5668\u63a5\u53d7\uff0c\u5426\u5219\u6709\u53ef\u80fd\u6d88\u606f\u53d1\u9001\u5931\u8d25\u3002"),(0,r.kt)("h3",{id:"17-messageconsumer"},"1.7 MessageConsumer\uff1a"),(0,r.kt)("p",null,"\u8be5\u7c7b\u6709\u4e24\u4e2a\u5b50\u7c7bPullMessageConsumer\u3001PushMessageConsumer\uff0c\u901a\u8fc7\u8fd9\u4e24\u4e2a\u5b50\u7c7b\u7684\u5305\u88c5\uff0c\u5b8c\u6210\u4e86\u5bf9\u4e1a\u52a1\u4fa7\u7684Pull\u548cPush\u8bed\u4e49\u3002\u5b9e\u9645\u4e0aTubeMQ\u662f\u91c7\u7528Pull\u6a21\u5f0f\u4e0e\u540e\u7aef\u670d\u52a1\u8fdb\u884c\u4ea4\u4e92\uff0c\u4e3a\u4e86\u4fbf\u4e8e\u4e1a\u52a1\u7684\u63a5\u53e3\u4f7f\u7528\uff0c\u6211\u4eec\u8fdb\u884c\u4e86\u5c01\u88c5\uff0c\u5927\u5bb6\u53ef\u4ee5\u770b\u5230\u5176\u5dee\u522b\u5728\u4e8ePush\u5728\u542f\u52a8\u65f6\u521d\u59cb\u5316\u4e86\u4e00\u4e2a\u7ebf\u7a0b\u7ec4\uff0c\u6765\u5b8c\u6210\u4e3b\u52a8\u7684\u6570\u636e\u62c9\u53d6\u64cd\u4f5c\u3002\u9700\u8981\u6ce8\u610f\u7684\u5730\u65b9\u5728\u4e8e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a. CompleteSubscribe\u63a5\u53e3\uff0c\u5e26\u53c2\u6570\u7684\u63a5\u53e3\u652f\u6301\u5ba2\u6237\u7aef\u5bf9\u6307\u5b9a\u7684\u5206\u533a\u8fdb\u884c\u6307\u5b9aoffset\u6d88\u8d39\uff0c\u4e0d\u5e26\u53c2\u6570\u7684\u63a5\u53e3\u5219\u6309\u7167ConsumerConfig.setConsumeModel(int consumeModel)\u63a5\u53e3\u8fdb\u884c\u5bf9\u5e94\u7684\u6d88\u8d39\u6a21\u5f0f\u8bbe\u7f6e\u6765\u6d88\u8d39\u6570\u636e;"),(0,r.kt)("li",{parentName:"ul"},"b. \u5bf9subscribe\u63a5\u53e3\uff0c\u5176\u7528\u6765\u5b9a\u4e49\u8be5\u6d88\u8d39\u8005\u7684\u6d88\u8d39\u76ee\u6807\uff0c\u800cfilterConds\u53c2\u6570\u8868\u793a\u5bf9\u5f85\u6d88\u8d39\u7684Topic\u662f\u5426\u8fdb\u884c\u8fc7\u6ee4\u6d88\u8d39\uff0c\u4ee5\u53ca\u5982\u679c\u505a\u8fc7\u6ee4\u6d88\u8d39\u65f6\u8981\u8fc7\u6ee4\u7684msgType\u6d88\u606f\u7c7b\u578b\u503c\u3002\u5982\u679c\u4e0d\u9700\u8981\u8fdb\u884c\u8fc7\u6ee4\u6d88\u8d39\uff0c\u5219\u8be5\u53c2\u6570\u586b\u4e3anull\uff0c\u6216\u8005\u7a7a\u7684\u96c6\u5408\u503c\u3002")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"2-\u63a5\u53e3\u8c03\u7528\u793a\u4f8b"},"2 \u63a5\u53e3\u8c03\u7528\u793a\u4f8b\uff1a"),(0,r.kt)("h3",{id:"21-\u73af\u5883\u51c6\u5907"},"2.1 \u73af\u5883\u51c6\u5907\uff1a"),(0,r.kt)("p",null,"TubeMQ\u5f00\u6e90\u5305org.apache.inlong.tubemq.example\u91cc\u63d0\u4f9b\u4e86\u751f\u4ea7\u548c\u6d88\u8d39\u7684\u5177\u4f53\u4ee3\u7801\u793a\u4f8b\uff0c\u8fd9\u91cc\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u5b9e\u9645\u7684\u4f8b\u5b50\u6765\u4ecb\u7ecd\u5982\u4f55\u586b\u53c2\u548c\u8c03\u7528\u5bf9\u5e94\u63a5\u53e3\u3002\u9996\u5148\u6211\u4eec\u642d\u5efa\u4e00\u4e2a\u5e263\u4e2aMaster\u8282\u70b9\u7684TubeMQ\u96c6\u7fa4\uff0c3\u4e2aMaster\u5730\u5740\u53ca\u7aef\u53e3\u5206\u522b\u4e3atest_1.domain.com\uff0ctest_2.domain.com\uff0ctest_3.domain.com\uff0c\u7aef\u53e3\u5747\u4e3a8080\uff0c\u5728\u8be5\u96c6\u7fa4\u91cc\u6211\u4eec\u5efa\u7acb\u4e86\u82e5\u5e72\u4e2aBroker\uff0c\u5e76\u4e14\u9488\u5bf9Broker\u6211\u4eec\u521b\u5efa\u4e863\u4e2atopic\uff1atopic_1\uff0ctopic_2\uff0ctopic_3\u7b49Topic\u914d\u7f6e\uff1b\u7136\u540e\u6211\u4eec\u542f\u52a8\u5bf9\u5e94\u7684Broker\u7b49\u5f85Consumer\u548cProducer\u7684\u521b\u5efa\u3002"),(0,r.kt)("h3",{id:"22-\u521b\u5efaconsumer"},"2.2 \u521b\u5efaConsumer\uff1a"),(0,r.kt)("p",null,"\u89c1\u5305org.apache.inlong.tubemq.example.MessageConsumerExample\u7c7b\u6587\u4ef6\uff0cConsumer\u662f\u4e00\u4e2a\u5305\u542b\u7f51\u7edc\u4ea4\u4e92\u534f\u8c03\u7684\u5ba2\u6237\u7aef\u5bf9\u8c61\uff0c\u9700\u8981\u505a\u521d\u59cb\u5316\u5e76\u4e14\u957f\u671f\u9a7b\u7559\u5185\u5b58\u91cd\u590d\u4f7f\u7528\u7684\u6a21\u578b\uff0c\u5b83\u4e0d\u9002\u5408\u5355\u6b21\u62c9\u8d77\u6d88\u8d39\u7684\u573a\u666f\u3002\u5982\u4e0b\u56fe\u793a\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86MessageConsumerExample\u5c01\u88c5\u7c7b\uff0c\u5728\u8be5\u7c7b\u4e2d\u5b9a\u4e49\u4e86\u8fdb\u884c\u7f51\u7edc\u4ea4\u4e92\u7684\u4f1a\u8bdd\u5de5\u5382MessageSessionFactory\u7c7b\uff0c\u4ee5\u53ca\u7528\u6765\u505aPush\u6d88\u8d39\u7684PushMessageConsumer\u7c7b\uff1a"),(0,r.kt)("h4",{id:"221-\u521d\u59cb\u5316messageconsumerexample\u7c7b"},"2.2.1 \u521d\u59cb\u5316MessageConsumerExample\u7c7b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9996\u5148\u6784\u9020\u4e00\u4e2aConsumerConfig\u7c7b\uff0c\u586b\u5199\u521d\u59cb\u5316\u4fe1\u606f\uff0c\u5305\u62ec\u672c\u673aIP V4\u5730\u5740\uff0cMaster\u96c6\u7fa4\u5730\u5740\uff0c\u6d88\u8d39\u7ec4\u7ec4\u540d\u4fe1\u606f\uff0c\u8fd9\u91ccMaster\u5730\u5740\u4fe1\u606f\u4f20\u5165\u503c\u4e3a\uff1a\u201dtest_1.domain.com:8080,test_2.domain.com:8080,test_3.domain.com:8080\u201d\uff1b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7136\u540e\u8bbe\u7f6e\u6d88\u8d39\u6a21\u5f0f\uff1a\u6211\u4eec\u8bbe\u7f6e\u9996\u6b21\u4ece\u961f\u5217\u5c3e\u6d88\u8d39\uff0c\u540e\u7eed\u63a5\u7eed\u6d88\u8d39\u6a21\u5f0f\uff1b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7136\u540e\u8bbe\u7f6ePush\u6d88\u8d39\u65f6\u56de\u8c03\u51fd\u6570\u4e2a\u6570")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8fdb\u884c\u4f1a\u8bdd\u5de5\u5382\u521d\u59cb\u5316\u64cd\u4f5c\uff1a\u8be5\u573a\u666f\u91cc\u6211\u4eec\u9009\u62e9\u5efa\u7acb\u5355\u94fe\u63a5\u7684\u4f1a\u8bdd\u5de5\u5382\uff1b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u4f1a\u8bdd\u5de5\u5382\u521b\u5efa\u6a21\u5f0f\u7684\u6d88\u8d39\u8005\uff1a"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public final class MessageConsumerExample {\n    private static final Logger logger = LoggerFactory.getLogger(MessageConsumerExample.class);\n    private static final MsgRecvStats msgRecvStats = new MsgRecvStats();\n    private final String masterHostAndPort;\n    private final String localHost;\n    private final String group;\n    private PushMessageConsumer messageConsumer;\n    private MessageSessionFactory messageSessionFactory;\n    \n    public MessageConsumerExample(String localHost, String masterHostAndPort, String group, int fetchCount)\n            throws Exception {\n        this.localHost = localHost;\n        this.masterHostAndPort = masterHostAndPort;\n        this.group = group;\n        ConsumerConfig consumerConfig = new ConsumerConfig(this.localHost,this.masterHostAndPort, this.group);\n        consumerConfig.setConsumeModel(0);\n        if (fetchCount > 0) {\n            consumerConfig.setPushFetchThreadCnt(fetchCount);\n        }\n        this.messageSessionFactory = new TubeSingleSessionFactory(consumerConfig);\n        this.messageConsumer = messageSessionFactory.createPushConsumer(consumerConfig);\n    }\n}\n")),(0,r.kt)("h4",{id:"222-\u8ba2\u9605topic"},"2.2.2 \u8ba2\u9605Topic\uff1a"),(0,r.kt)("p",null,"\u6211\u4eec\u6ca1\u6709\u91c7\u7528\u6307\u5b9aOffset\u6d88\u8d39\u7684\u6a21\u5f0f\u8fdb\u884c\u8ba2\u9605\uff0c\u4e5f\u6ca1\u6709\u8fc7\u6ee4\u9700\u6c42\uff0c\u56e0\u800c\u6211\u4eec\u5728\u5982\u4e0b\u4ee3\u7801\u91cc\u53ea\u505a\u4e86Topic\u7684\u6307\u5b9a\uff0c\u5bf9\u5e94\u7684\u8fc7\u6ee4\u9879\u96c6\u5408\u6211\u4eec\u4f20\u7684\u662fnull\u503c\uff0c\u540c\u65f6\uff0c\u5bf9\u4e8e\u4e0d\u540c\u7684Topic\uff0c\u6211\u4eec\u53ef\u4ee5\u4f20\u9012\u4e0d\u540c\u7684\u6d88\u606f\u56de\u8c03\u5904\u7406\u51fd\u6570\uff1b\u6211\u4eec\u8fd9\u91cc\u8ba2\u9605\u4e863\u4e2atopic\uff0ctopic_1\uff0ctopic_2\uff0ctopic_3\uff0c\u6bcf\u4e2atopic\u5206\u522b\u8c03\u7528subscribe\u51fd\u6570\u8fdb\u884c\u5bf9\u5e94\u53c2\u6570\u8bbe\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public void subscribe(final Map<String, TreeSet<String>> topicStreamIdMap) throws TubeClientException {\n    for (Map.Entry<String, TreeSet<String>> entry : topicStreamIdMap.entrySet()) {\n        this.messageConsumer.subscribe(entry.getKey(), entry.getValue(),\n                new DefaultMessageListener(entry.getKey()));\n    }\n    messageConsumer.completeSubscribe();\n}\n")),(0,r.kt)("h4",{id:"223-\u8fdb\u884c\u6d88\u8d39"},"2.2.3 \u8fdb\u884c\u6d88\u8d39\uff1a"),(0,r.kt)("p",null,"\u5230\u6b64\uff0c\u5bf9\u96c6\u7fa4\u91cc\u5bf9\u5e94topic\u7684\u8ba2\u9605\u5c31\u5df2\u5b8c\u6210\uff0c\u7cfb\u7edf\u8fd0\u884c\u5f00\u59cb\u540e\uff0c\u56de\u8c03\u51fd\u6570\u91cc\u6570\u636e\u5c06\u4e0d\u65ad\u7684\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u63a8\u9001\u5230\u4e1a\u52a1\u5c42\u8fdb\u884c\u5904\u7406\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class DefaultMessageListener implements MessageListener {\n\n    private String topic;\n\n    public DefaultMessageListener(String topic) {\n        this.topic = topic;\n    }\n\n    public void receiveMessages(PeerInfo peerInfo, final List<Message> messages) throws InterruptedException {\n        if (messages != null && !messages.isEmpty()) {\n            msgRecvStats.addMsgCount(this.topic, messages.size());\n        }\n    }\n\n    public Executor getExecutor() {\n        return null;\n    }\n\n    public void stop() {\n    }\n}\n")),(0,r.kt)("h2",{id:"3-\u521b\u5efaproducer"},"3 \u521b\u5efaProducer\uff1a"),(0,r.kt)("p",null,"\u73b0\u7f51\u73af\u5883\u4e2d\u4e1a\u52a1\u7684\u6570\u636e\u90fd\u662f\u901a\u8fc7\u4ee3\u7406\u5c42\u6765\u505a\u63a5\u6536\u6c47\u805a\uff0c\u5305\u88c5\u4e86\u6bd4\u8f83\u591a\u7684\u5f02\u5e38\u5904\u7406\uff0c\u5927\u90e8\u5206\u7684\u4e1a\u52a1\u90fd\u6ca1\u6709\u4e5f\u4e0d\u4f1a\u63a5\u89e6\u5230TubeSDK\u7684Producer\u7c7b\uff0c\u8003\u8651\u5230\u4e1a\u52a1\u81ea\u5df1\u642d\u5efa\u96c6\u7fa4\u4f7f\u7528TubeMQ\u8fdb\u884c\u4f7f\u7528\u7684\u573a\u666f\uff0c\u8fd9\u91cc\u63d0\u4f9b\u5bf9\u5e94\u7684\u4f7f\u7528demo\uff0c\u89c1\u5305org.apache.inlong.tubemq.example.MessageProducerExample\u7c7b\u6587\u4ef6\u4f9b\u53c2\u8003\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u9700\u8981\u6ce8\u610f"),"\u7684\u662f\uff0c\u4e1a\u52a1\u9664\u975e\u4f7f\u7528\u6570\u636e\u5e73\u53f0\u7684TubeMQ\u96c6\u7fa4\u505aMQ\u670d\u52a1\uff0c\u5426\u5219\u4ecd\u8981\u6309\u7167\u73b0\u7f51\u7684\u63a5\u5165\u6d41\u7a0b\u4f7f\u7528\u4ee3\u7406\u5c42\u6765\u8fdb\u884c\u6570\u636e\u751f\u4ea7\uff1a"),(0,r.kt)("h3",{id:"31-\u521d\u59cb\u5316messageproducerexample\u7c7b"},"3.1 \u521d\u59cb\u5316MessageProducerExample\u7c7b\uff1a"),(0,r.kt)("p",null,"\u548cConsumer\u7684\u521d\u59cb\u5316\u7c7b\u4f3c\uff0c\u4e5f\u662f\u6784\u9020\u4e86\u4e00\u4e2a\u5c01\u88c5\u7c7b\uff0c\u5b9a\u4e49\u4e86\u4e00\u4e2a\u4f1a\u8bdd\u5de5\u5382\uff0c\u4ee5\u53ca\u4e00\u4e2aProducer\u7c7b\uff0c\u751f\u4ea7\u7aef\u7684\u4f1a\u8bdd\u5de5\u5382\u521d\u59cb\u5316\u901a\u8fc7TubeClientConfig\u7c7b\u8fdb\u884c\uff0c\u5982\u4e4b\u524d\u6240\u4ecb\u7ecd\u7684\uff0cConsumerConfig\u7c7b\u662fTubeClientConfig\u7c7b\u7684\u5b50\u7c7b\uff0c\u867d\u7136\u4f20\u5165\u53c2\u6570\u4e0d\u540c\uff0c\u4f46\u4f1a\u8bdd\u5de5\u5382\u662f\u901a\u8fc7TubeClientConfig\u7c7b\u5b8c\u6210\u7684\u521d\u59cb\u5316\u5904\u7406\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public final class MessageProducerExample {\n\n    private static final Logger logger =  LoggerFactory.getLogger(MessageProducerExample.class);\n    private static final ConcurrentHashMap<String, AtomicLong> counterMap =\n            new ConcurrentHashMap<String, AtomicLong>();\n    String[] arrayKey = {"aaa", "bbb", "ac", "dd", "eee", "fff", "gggg", "hhhh"};\n    private MessageProducer messageProducer;\n    private TreeSet<String> filters = new TreeSet<>();\n    private int keyCount = 0;\n    private int sentCount = 0;\n    private MessageSessionFactory messageSessionFactory;\n\n    public MessageProducerExample(final String localHost, final String masterHostAndPort) throws Exception {\n        filters.add("aaa");\n        filters.add("bbb");\n        TubeClientConfig clientConfig = new TubeClientConfig(localHost, masterHostAndPort);\n        this.messageSessionFactory = new TubeSingleSessionFactory(clientConfig);\n        this.messageProducer = this.messageSessionFactory.createProducer();\n    }\n}\n')),(0,r.kt)("h3",{id:"32-\u53d1\u5e03topic"},"3.2 \u53d1\u5e03Topic\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public void publishTopics(List<String> topicList) throws TubeClientException {\n    this.messageProducer.publish(new TreeSet<String>(topicList));\n}\n")),(0,r.kt)("h3",{id:"33-\u8fdb\u884c\u6570\u636e\u751f\u4ea7"},"3.3 \u8fdb\u884c\u6570\u636e\u751f\u4ea7\uff1a"),(0,r.kt)("p",null,"\u5982\u4e0b\u6240\u793a\uff0c\u5219\u4e3a\u5177\u4f53\u7684\u6570\u636e\u6784\u9020\u548c\u53d1\u9001\u903b\u8f91\uff0c\u6784\u9020\u4e00\u4e2aMessage\u5bf9\u8c61\u540e\u8c03\u7528sendMessage()\u51fd\u6570\u53d1\u9001\u5373\u53ef\uff0c\u6709\u540c\u6b65\u63a5\u53e3\u548c\u5f02\u6b65\u63a5\u53e3\u9009\u62e9\uff0c\u4f9d\u7167\u4e1a\u52a1\u8981\u6c42\u9009\u62e9\u4e0d\u540c\u63a5\u53e3\uff1b\u9700\u8981\u6ce8\u610f\u7684\u662f\u8be5\u4e1a\u52a1\u6839\u636e\u4e0d\u540c\u6d88\u606f\u8c03\u7528message.putSystemHeader()\u51fd\u6570\u8bbe\u7f6e\u6d88\u606f\u7684\u8fc7\u6ee4\u5c5e\u6027\u548c\u53d1\u9001\u65f6\u95f4\uff0c\u4fbf\u4e8e\u7cfb\u7edf\u8fdb\u884c\u6d88\u606f\u8fc7\u6ee4\u6d88\u8d39\uff0c\u4ee5\u53ca\u6307\u6807\u7edf\u8ba1\u7528\u3002\u5b8c\u6210\u8fd9\u4e9b\uff0c\u4e00\u6761\u6d88\u606f\u5373\u88ab\u53d1\u9001\u51fa\u53bb\uff0c\u5982\u679c\u8fd4\u56de\u7ed3\u679c\u4e3a\u6210\u529f\uff0c\u5219\u6d88\u606f\u88ab\u6210\u529f\u7684\u63a5\u7eb3\u5e76\u4e14\u8fdb\u884c\u6d88\u606f\u5904\u7406\uff0c\u5982\u679c\u8fd4\u56de\u5931\u8d25\uff0c\u5219\u4e1a\u52a1\u6839\u636e\u5177\u4f53\u9519\u8bef\u7801\u53ca\u9519\u8bef\u63d0\u793a\u8fdb\u884c\u5224\u65ad\u5904\u7406\uff0c\u76f8\u5173\u9519\u8bef\u8be6\u60c5\u89c1\u300aTubeMQ\u9519\u8bef\u4fe1\u606f\u4ecb\u7ecd.xlsx\u300b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public void sendMessageAsync(int id, long currtime, String topic, byte[] body, MessageSentCallback callback) {\n    Message message = new Message(topic, body);\n    SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmm");\n    long currTimeMillis = System.currentTimeMillis();\n    message.setAttrKeyVal("index", String.valueOf(1));\n    String keyCode = arrayKey[sentCount++ % arrayKey.length];\n    message.putSystemHeader(keyCode, sdf.format(new Date(currTimeMillis))); \n    if (filters.contains(keyCode)) {\n        keyCount++;\n    }\n    try {\n        message.setAttrKeyVal("dataTime", String.valueOf(currTimeMillis));\n        messageProducer.sendMessage(message, callback);\n    } catch (TubeClientException e) {\n        logger.error("Send message failed!", e);\n    } catch (InterruptedException e) {\n        logger.error("Send message failed!", e);\n    }\n}\n')),(0,r.kt)("h3",{id:"34-producer\u4e0d\u540c\u7c7bmamessageproducerexample\u5173\u6ce8\u70b9"},"3.4 Producer\u4e0d\u540c\u7c7bMAMessageProducerExample\u5173\u6ce8\u70b9\uff1a"),(0,r.kt)("p",null,"\u8be5\u7c7b\u521d\u59cb\u5316\u4e0eMessageProducerExample\u7c7b\u4e0d\u540c\uff0c\u91c7\u7528\u7684\u662fTubeMultiSessionFactory\u591a\u4f1a\u8bdd\u5de5\u5382\u7c7b\u8fdb\u884c\u7684\u8fde\u63a5\u521d\u59cb\u5316\uff0c\u8be5demo\u63d0\u4f9b\u4e86\u5982\u4f55\u4f7f\u7528\u591a\u4f1a\u8bdd\u5de5\u5382\u7c7b\u7684\u7279\u6027\uff0c\u53ef\u4ee5\u7528\u4e8e\u901a\u8fc7\u591a\u4e2a\u7269\u7406\u8fde\u63a5\u63d0\u5347\u7cfb\u7edf\u541e\u5410\u91cf\u7684\u573a\u666f\uff08TubeMQ\u901a\u8fc7\u8fde\u63a5\u590d\u7528\u6a21\u5f0f\u6765\u51cf\u5c11\u7269\u7406\u8fde\u63a5\u8d44\u6e90\u7684\u4f7f\u7528\uff09\uff0c\u6070\u5f53\u4f7f\u7528\u53ef\u4ee5\u63d0\u5347\u7cfb\u7edf\u7684\u751f\u4ea7\u6027\u80fd\u3002\u5728Consumer\u4fa7\u4e5f\u53ef\u4ee5\u901a\u8fc7\u591a\u4f1a\u8bdd\u5de5\u5382\u8fdb\u884c\u521d\u59cb\u5316\uff0c\u4f46\u8003\u8651\u5230\u6d88\u8d39\u662f\u957f\u65f6\u95f4\u8fc7\u7a0b\u5904\u7406\uff0c\u5bf9\u8fde\u63a5\u8d44\u6e90\u7684\u5360\u7528\u6bd4\u8f83\u5c0f\uff0c\u6d88\u8d39\u573a\u666f\u4e0d\u63a8\u8350\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u81f3\u6b64\uff0c\u6574\u4e2a\u751f\u4ea7\u548c\u6d88\u8d39\u7684\u793a\u4f8b\u5df2\u7ecf\u4ecb\u7ecd\u5b8c\uff0c\u4f60\u53ef\u4ee5\u4e0b\u8f7d\u4ee3\u7801\u5e76\u7f16\u8bd1\u8fd0\u884c\uff0c\u770b\u770b\u662f\u4e0d\u662f\u8fd9\u4e48\u7b80\u5355\ud83d\ude0a"),(0,r.kt)("hr",null),(0,r.kt)("a",{href:"#top"},"Back to top"))}m.isMDXComponent=!0}}]);