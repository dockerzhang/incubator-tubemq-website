"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[52528],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=p(n),c=r,k=s["".concat(m,".").concat(c)]||s[c]||d[c]||l;return n?a.createElement(k,o(o({ref:e},u),{},{components:n})):a.createElement(k,o({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i[s]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},40535:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u603b\u89c8",sidebar_position:1},o=void 0,i={unversionedId:"modules/dataproxy/overview",id:"version-1.12.0/modules/dataproxy/overview",title:"\u603b\u89c8",description:"InLong DataProxy \u4e3b\u8981\u6709\u8fde\u63a5\u6536\u655b\u3001\u8def\u7531\u3001\u6570\u636e\u538b\u7f29\u548c\u534f\u8bae\u8f6c\u6362\u7b49\u4f5c\u7528\u3002DataProxy \u5145\u5f53\u4e86 InLong \u91c7\u96c6\u7aef\u5230\u6d88\u606f\u961f\u5217\u7684\u6865\u6881\uff0c",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.12.0/modules/dataproxy/overview.md",sourceDirName:"modules/dataproxy",slug:"/modules/dataproxy/overview",permalink:"/zh-CN/docs/modules/dataproxy/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.12.0/modules/dataproxy/overview.md",tags:[],version:"1.12.0",sidebarPosition:1,frontMatter:{title:"\u603b\u89c8",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u76d1\u63a7\u6307\u6807",permalink:"/zh-CN/docs/modules/agent/metrics"},next:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/modules/dataproxy/quick_start"}},m={},p=[{value:"\u67b6\u6784",id:"\u67b6\u6784",level:2},{value:"\u76d1\u63a7\u6307\u6807\u914d\u7f6e",id:"\u76d1\u63a7\u6307\u6807\u914d\u7f6e",level:2}],u={toc:p},s="wrapper";function d(t){let{components:e,...l}=t;return(0,r.kt)(s,(0,a.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"InLong DataProxy \u4e3b\u8981\u6709\u8fde\u63a5\u6536\u655b\u3001\u8def\u7531\u3001\u6570\u636e\u538b\u7f29\u548c\u534f\u8bae\u8f6c\u6362\u7b49\u4f5c\u7528\u3002DataProxy \u5145\u5f53\u4e86 InLong \u91c7\u96c6\u7aef\u5230\u6d88\u606f\u961f\u5217\u7684\u6865\u6881\uff0c\n\u5f53 DataProxy \u4ece Manager \u6a21\u5757\u62c9\u53d6\u6570\u636e\u6d41\u5143\u6570\u636e\u540e\uff0c\u6570\u636e\u6d41\u548c\u6d88\u606f\u961f\u5217 Topic \u540d\u79f0\u5bf9\u5e94\u5173\u7cfb\u4e5f\u5c31\u786e\u5b9a\u4e86\u3002\u5f53 DataProxy \u6536\u5230\u6d88\u606f\u65f6\uff0c\u4f1a\u9996\u5148\u53d1\u9001\u5230 Memory Channel \u4e2d\u8fdb\u884c\u538b\u7f29\uff0c\n\u5e76\u4f7f\u7528\u672c\u5730\u7684 Producer \u5f80\u540e\u7aef Cache \u5c42\uff08\u5373\u6d88\u606f\u961f\u5217\uff09\u53d1\u9001\u6570\u636e\u3002\u5f53\u6d88\u606f\u961f\u5217\u5f02\u5e38\u51fa\u73b0\u53d1\u9001\u5931\u8d25\u65f6\uff0cDataProxy \u4f1a\u5c06\u6d88\u606f\u7f13\u5b58\u5230 Disk Channel\uff0c\u4e5f\u5c31\u662f\u672c\u5730\u78c1\u76d8\u4e2d\u3002\nInLong DataProxy \u6574\u4f53\u67b6\u6784\u57fa\u4e8e Apache Flume\uff0c\u6269\u5c55\u4e86 Source \u5c42\u548c Sink \u5c42\uff0c\u5e76\u5bf9\u5bb9\u707e\u8f6c\u53d1\u505a\u4e86\u4f18\u5316\u5904\u7406\uff0c\u63d0\u5347\u4e86\u7cfb\u7edf\u7684\u7a33\u5b9a\u6027\u3002"),(0,r.kt)("h2",{id:"\u67b6\u6784"},"\u67b6\u6784"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(57634).Z,width:"1462",height:"1026"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Source\u5c42\u5f00\u542f\u7aef\u53e3\u76d1\u542c\uff0c\u901a\u8fc7netty server\u5b9e\u73b0\u3002\u89e3\u7801\u4e4b\u540e\u7684\u6570\u636e\u53d1\u5230channel\u5c42"),(0,r.kt)("li",{parentName:"ul"},"channel\u5c42\u6709\u4e00\u4e2aselector\uff0c\u7528\u4e8e\u9009\u62e9\u8d70\u54ea\u79cd\u7c7b\u578b\u7684channel\uff0c\u5982\u679cmemory\u6700\u7ec8\u6ee1\u4e86\uff0c\u4f1a\u5bf9\u6570\u636e\u505a\u843d\u5730\u5904\u7406"),(0,r.kt)("li",{parentName:"ul"},"channel\u5c42\u7684\u6570\u636e\u4f1a\u901a\u8fc7sink\u5c42\u505a\u8f6c\u53d1\uff0c\u8fd9\u91cc\u4e3b\u8981\u662f\u5c06\u6570\u636e\u8f6c\u4e3aTDMsg1\u7684\u683c\u5f0f\uff0c\u5e76\u63a8\u9001\u5230cache\u5c42\uff08\u8fd9\u91cc\u7528\u7684\u6bd4\u8f83\u591a\u7684\u662ftube\uff09")),(0,r.kt)("h2",{id:"\u76d1\u63a7\u6307\u6807\u914d\u7f6e"},"\u76d1\u63a7\u6307\u6807\u914d\u7f6e"),(0,r.kt)("p",null,"  DataProxy\u63d0\u4f9b\u4e86JMX\u65b9\u5f0f\u7684\u76d1\u63a7\u6307\u6807Listener\u80fd\u529b\uff0c\u7528\u6237\u53ef\u4ee5\u5b9e\u73b0MetricListener\u63a5\u53e3\uff0c\u6ce8\u518c\u540e\u53ef\u4ee5\u5b9a\u671f\u63a5\u6536\u76d1\u63a7\u6307\u6807\uff0c\u7528\u6237\u9009\u62e9\u5c06\u6307\u6807\u4e0a\u62a5\u81ea\u5b9a\u4e49\u7684\u76d1\u63a7\u7cfb\u7edf\u3002Source\u548cSink\u6a21\u5757\u53ef\u4ee5\u901a\u8fc7\u5c06\u6307\u6807\u6570\u636e\u7edf\u8ba1\u5230org.apache.inlong.commons.config.metrics.MetricItemSet\u7684\u5b50\u7c7b\u4e2d\uff0c\u5e76\u6ce8\u518c\u5230MBeanServer\u3002\u7528\u6237\u81ea\u5b9a\u4e49\u7684MetricListener\u901a\u8fc7JMX\u65b9\u5f0f\u6536\u96c6\u6307\u6807\u6570\u636e\u5e76\u4e0a\u62a5\u5230\u5916\u90e8\u76d1\u63a7\u7cfb\u7edf"),(0,r.kt)("p",null,"  \u7528\u6237\u80fd\u5728\u914d\u7f6e\u6587\u4ef6common.propetiese\u589e\u52a0\u5982\u4e0b\u914d\u7f6e\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"metricDomains=DataProxy\nmetricDomains.DataProxy.domainListeners=org.apache.inlong.dataproxy.metrics.prometheus.PrometheusMetricListener\nmetricDomains.DataProxy.snapshotInterval=60000\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u7684JMX\u57df\u540d\uff1aDataProxy\uff0c\u5e76\u5b9a\u4e49\u5728\u53c2\u6570metricDomains\u4e0b\uff1b\u81ea\u5b9a\u4e49\u7684Source\u3001Sink\u7b49\u7ec4\u4ef6\u4e5f\u53ef\u4ee5\u4e0a\u62a5\u5230\u4e0d\u540c\u7684JMX\u57df\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e00\u4e2aJMX\u57df\u540d\u7684\u76d1\u63a7\u6307\u6807MetricListener\u53ef\u4ee5\u914d\u7f6e\u5728metricDomains.$domainName.domainListeners\u53c2\u6570\u91cc\uff0c\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a\uff0c\u7528\u7a7a\u683c\u5206\u9694\u7c7b\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8fd9\u4e9b\u76d1\u63a7\u6307\u6807MetricListener\u9700\u8981\u5b9e\u73b0\u63a5\u53e3\uff1aorg.apache.inlong.dataproxy.metrics.MetricListener\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5feb\u7167\u53c2\u6570\uff1ametricDomains.$domainName.snapshotInterval\uff0c\u5b9a\u4e49\u62c9\u53d6\u4e00\u6b21\u76d1\u63a7\u6307\u6807\u6570\u636e\u7684\u95f4\u9694\u65f6\u95f4\uff0c\u53c2\u6570\u5355\u4f4d\u662f\u6beb\u79d2\u3002")),(0,r.kt)("p",null,"org.apache.inlong.dataproxy.metrics.MetricListener\u63a5\u53e3\u7684\u65b9\u6cd5\u539f\u578b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public void snapshot(String domain, List<MetricItemValue> itemValues);\n")),(0,r.kt)("p",null,'\u76d1\u63a7\u6307\u6807\u9879\u7684MetricItemValue.dimensions\u6709\u8fd9\u4e9b\u7ef4\u5ea6(DataProxyMetricItem\u7684\u8fd9\u4e9b\u5b57\u6bb5\u901a\u8fc7\u6ce8\u89e3Annotation "@Dimension"\u5b9a\u4e49):'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clusterId"),(0,r.kt)("td",{parentName:"tr",align:null},"DataProxy\u96c6\u7fa4ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"DataProxy\u7684Source\u7ec4\u4ef6\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sourceDataId"),(0,r.kt)("td",{parentName:"tr",align:null},"DataProxy\u7684Source\u7ec4\u4ef6\u6570\u636e\u6d41ID\uff0c\u5982\u679cSource\u662f\u4e00\u4e2aTCPSource\uff0c\u90a3\u4e48\u8fd9\u4e2aID\u4f1a\u662f\u4e00\u4e2a\u7aef\u53e3\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlongGroupId"),(0,r.kt)("td",{parentName:"tr",align:null},"Inlong\u6570\u636eID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlongStreamId"),(0,r.kt)("td",{parentName:"tr",align:null},"Inlong\u6570\u636e\u6d41ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sinkId"),(0,r.kt)("td",{parentName:"tr",align:null},"DataProxy\u7684Sink\u7ec4\u4ef6\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sinkDataId"),(0,r.kt)("td",{parentName:"tr",align:null},"DataProxy\u7684Sink\u7ec4\u4ef6\u6570\u636e\u6d41ID\uff0c\u5982\u679cSink\u662f\u4e00\u4e2aPulsar\u53d1\u9001\u7ec4\u4ef6\uff0c\u8fd9\u4e2aID\u4f1a\u662f\u4e00\u4e2aTopic\u540d\u3002")))),(0,r.kt)("p",null,'\u76d1\u63a7\u6307\u6807\u9879\u7684MetricItemValue.metrics\u6709\u8fd9\u4e9b\u6307\u6807(DataProxyMetricItem\u7684\u8fd9\u4e9b\u5b57\u6bb5\u901a\u8fc7\u6ce8\u89e3Annotation "@CountMetric"\u5b9a\u4e49):'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readSuccessCount"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u6210\u529f\u6761\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readSuccessSize"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u6210\u529f\u5927\u5c0f\uff0c\u5355\u4f4d\uff1abyte")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readFailCount"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u5931\u8d25\u6761\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readFailSize"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u5931\u8d25\u5927\u5c0f\uff0c\u5355\u4f4d\uff1abyte")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendCount"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6761\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendSize"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u5927\u5c0f\uff0c\u5355\u4f4d\uff1abyte")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendSuccessCount"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6210\u529f\u6761\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendSuccessSize"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6210\u529f\u5927\u5c0f\uff0c\u5355\u4f4d\uff1abyte")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendFailCount"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u5931\u8d25\u6761\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendFailSize"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u5931\u8d25\u5927\u5c0f\uff0c\u5355\u4f4d\uff1abyte")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sinkDuration"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6210\u529f\u56de\u8c03\u65f6\u95f4\u548c\u53d1\u9001\u5f00\u59cb\u65f6\u95f4\u7684\u65f6\u95f4\u5dee\uff0c\u7528\u4e8e\u8bc4\u4f30\u76ee\u6807\u96c6\u7fa4\u7684\u5904\u7406\u65f6\u5ef6\u548c\u5065\u5eb7\u72b6\u51b5\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nodeDuration"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6210\u529f\u56de\u8c03\u65f6\u95f4\u548c\u63a5\u6536\u6210\u529f\u65f6\u95f4\u7684\u65f6\u95f4\u5dee\uff0c\u7528\u4e8e\u8bc4\u4f30DataProxy\u5185\u90e8\u5904\u7406\u8017\u65f6\u548c\u5065\u5eb7\u72b6\u51b5\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wholeDuration"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6210\u529f\u56de\u8c03\u65f6\u95f4\u548c\u4e8b\u4ef6\u751f\u6210\u65f6\u95f4\u7684\u65f6\u95f4\u5dee\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2")))),(0,r.kt)("p",null,"\u76d1\u63a7\u6307\u6807\u5df2\u7ecf\u6ce8\u518c\u5230MBeanServer\uff0c\u7528\u6237\u53ef\u4ee5\u5728DataProxy\u7684\u542f\u52a8\u53c2\u6570\u4e2d\u589e\u52a0\u5982\u4e0b\u7c7b\u4f3cJMX\u5b9a\u4e49\uff08\u7aef\u53e3\u548c\u9274\u6743\u6839\u636e\u60c5\u51b5\u8fdb\u884c\u8c03\u6574\uff09\uff0c\u5b9e\u73b0\u76d1\u63a7\u6307\u6807\u4ece\u8fdc\u7aef\u91c7\u96c6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"    -Dcom.sun.management.jmxremote\n    -Djava.rmi.server.hostname=127.0.0.1\n    -Dcom.sun.management.jmxremote.port=9999\n    -Dcom.sun.management.jmxremote.authenticate=false\n    -Dcom.sun.management.jmxremote.ssl=false\n")))}d.isMDXComponent=!0},57634:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/architecture-138d6143f4f9784999e3161f0797676e.png"}}]);