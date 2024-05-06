"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[82716],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),s=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(i.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=s(n),g=r,d=m["".concat(i,".").concat(g)]||m[g]||u[g]||l;return n?a.createElement(d,o(o({ref:e},c),{},{components:n})):a.createElement(d,o({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=g;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[m]="string"==typeof t?t:r,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},68604:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u53c2\u6570\u914d\u7f6e",sidebar_position:3},o=void 0,p={unversionedId:"modules/dataproxy/configuration",id:"version-1.9.0/modules/dataproxy/configuration",title:"\u53c2\u6570\u914d\u7f6e",description:"\u57fa\u672c\u914d\u7f6e\uff08 common.properties \uff09",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.9.0/modules/dataproxy/configuration.md",sourceDirName:"modules/dataproxy",slug:"/modules/dataproxy/configuration",permalink:"/zh-CN/docs/1.9.0/modules/dataproxy/configuration",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.9.0/modules/dataproxy/configuration.md",tags:[],version:"1.9.0",sidebarPosition:3,frontMatter:{title:"\u53c2\u6570\u914d\u7f6e",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/1.9.0/modules/dataproxy/quick_start"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.9.0/modules/tubemq/overview"}},i={},s=[{value:"\u57fa\u672c\u914d\u7f6e\uff08 common.properties \uff09",id:"\u57fa\u672c\u914d\u7f6e-commonproperties-",level:2},{value:"\u65e5\u5fd7\u8f93\u51fa\u914d\u7f6e\uff08 log4j2.xml \uff09",id:"\u65e5\u5fd7\u8f93\u51fa\u914d\u7f6e-log4j2xml-",level:2},{value:"\u5176\u4ed6\u81ea\u52a8\u66f4\u65b0\u914d\u7f6e",id:"\u5176\u4ed6\u81ea\u52a8\u66f4\u65b0\u914d\u7f6e",level:2},{value:"source-channel-sink \u7ba1\u9053\u914d\u7f6e\uff08dataproxy-{tube|pulsar}.conf\uff09",id:"source-channel-sink-\u7ba1\u9053\u914d\u7f6edataproxy-tubepulsarconf",level:2}],c={toc:s},m="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u57fa\u672c\u914d\u7f6e-commonproperties-"},"\u57fa\u672c\u914d\u7f6e\uff08 common.properties \uff09"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manager.hosts"),(0,r.kt)("td",{parentName:"tr",align:null},"Manager \u670d\u52a1\u5668 IP \u548c\u7aef\u53e3\u5217\u8868"),(0,r.kt)("td",{parentName:"tr",align:null},"127.0.0.1:8083"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u5141\u8bb8\u4e3a\u7a7a\uff0c\u683c\u5f0f\u6309\u7167 {ip1:port1}","[,{ip2:port2}][,{ip3:port3}]"," \u683c\u5f0f\u8fdb\u884c\u914d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manager.auth.secretId"),(0,r.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u6240\u9700\u5e10\u53f7"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u4e3a\u7a7a\u4e0d\u586b\u5199")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manager.auth.secretKey"),(0,r.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u6240\u9700\u5bc6\u7801"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u4e3a\u7a7a\u4e0d\u586b\u5199")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proxy.cluster.tag"),(0,r.kt)("td",{parentName:"tr",align:null},"dataproxy \u6240\u5904\u7684\u96c6\u7fa4 Tag \u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"default_cluster"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e00\u4e2a\u96c6\u7fa4 Tag \u91cc\u53ef\u4ee5\u5305\u542b\u591a\u4e2a dataproxy\u3001MQ \u7684\u96c6\u7fa4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proxy.cluster.name"),(0,r.kt)("td",{parentName:"tr",align:null},"dataproxy \u6240\u5904\u7684\u96c6\u7fa4\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"default_dataproxy"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u533a\u5206\u4e0d\u540c\u7684\u73af\u5883")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proxy.cluster.inCharges"),(0,r.kt)("td",{parentName:"tr",align:null},"dataproxy \u6240\u5904\u7684\u96c6\u7fa4\u8d1f\u8d23\u4eba"),(0,r.kt)("td",{parentName:"tr",align:null},"admin"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"configCheckInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"conf \u76ee\u5f55\u7684\u914d\u7f6e\u6587\u4ef6\u68c0\u67e5\u53ca\u52a0\u8f7d\u95f4\u9694\uff08\u5355\u4f4d ms \uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"10000"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metricDomains"),(0,r.kt)("td",{parentName:"tr",align:null},"JMX \u57df\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"DataProxy"),(0,r.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u8be5\u914d\u7f6e\u503c\u83b7\u53d6\u5982\u4e0b \u201cmetricDomains.${metricDomains}.xxx\u201d \u7684\u914d\u7f6e\u9879")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metricDomains.DataProxy.domainListeners"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u6807\u76d1\u542c\u7684\u7c7b\uff0c\u901a\u8fc7\u8be5\u7c7b\u540d\u53cd\u5c04\u5f00\u542f\u670d\u52a1"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.inlong.dataproxy.metrics.prometheus.PrometheusMetricListener"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u5b58\u5728\u591a\u4e2a\u6307\u6807\u76d1\u542c\u7c7b\u914d\u7f6e\uff0c\u901a\u8fc7\u7a7a\u683c\u3001\u56de\u8f66\uff0c\u6216\u6362\u884c\u7b26\u8fdb\u884c\u5206\u9694")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metricDomains.DataProxy.snapshotInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5468\u671f\u6027\u4e0a\u62a5\u6307\u6807\u7684\u65f6\u9699\uff08\u5355\u4f4d ms \uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"60000"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prometheusHttpPort"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 Prometheus \u4e0a\u62a5\u65f6\u8bbe\u7f6e\u7684\u7aef\u53e3\u53f7"),(0,r.kt)("td",{parentName:"tr",align:null},"9081"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"audit.enable"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u6570\u636e\u4e0a\u62a5 InLong-Audit \u670d\u52a1"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"audit.proxys"),(0,r.kt)("td",{parentName:"tr",align:null},"InLong-Audit \u670d\u52a1\u7684\u5730\u5740"),(0,r.kt)("td",{parentName:"tr",align:null},"127.0.0.1:10081"),(0,r.kt)("td",{parentName:"tr",align:null},"\u683c\u5f0f\u6309\u7167 {ip1:port1}","[ {ip2:port2}][ {ip3:port3}]"," \u8fdb\u884c\u914d\u7f6e\uff0c\u4e0d\u540c ip:port \u95f4\u901a\u8fc7\u7a7a\u683c\u3001\u56de\u8f66\uff0c\u6216\u6362\u884c\u7b26\u8fdb\u884c\u5206\u9694")))),(0,r.kt)("h2",{id:"\u65e5\u5fd7\u8f93\u51fa\u914d\u7f6e-log4j2xml-"},"\u65e5\u5fd7\u8f93\u51fa\u914d\u7f6e\uff08 log4j2.xml \uff09"),(0,r.kt)("p",null,"DataProxy \u91c7\u7528\u7684\u662f Log4j2 \u8f93\u51fa\u65e5\u5fd7\uff0c\u76f8\u5173\u914d\u7f6e\u57fa\u4e8e Log4j2 \u8fdb\u884c\u8bbe\u7f6e\uff0c\u672c\u914d\u7f6e\u53ea\u63d0\u53ca\u5e38\u7528\u8bbe\u7f6e\u9879\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"basePath"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u6587\u4ef6\u7684\u5b58\u50a8\u8def\u5f84"),(0,r.kt)("td",{parentName:"tr",align:null},"${sys:dataproxy.log.path}"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"every_file_size"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a\u65e5\u5fd7\u6587\u4ef6\u7684\u5927\u5c0f\uff0c\u5355\u4f4d\u5b57\u8282"),(0,r.kt)("td",{parentName:"tr",align:null},"1G"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output_log_level"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u8f93\u51fa\u7ea7\u522b"),(0,r.kt)("td",{parentName:"tr",align:null},"DEBUG"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ebf\u4e0a\u4f7f\u7528\u65f6\u5efa\u8bae\u8bbe\u7f6e\u4e3a INFO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rolling_max"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u7c7b\u578b\u65e5\u5fd7\u540c\u4e00\u76ee\u5f55\u4e0b\u53ef\u5b58\u653e\u7684\u6570\u91cf"),(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"debug_max"),(0,r.kt)("td",{parentName:"tr",align:null},"DEBUG \u7c7b\u578b\u65e5\u5fd7\u540c\u4e00\u76ee\u5f55\u4e0b\u53ef\u5b58\u653e\u7684\u6570\u91cf"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info_max"),(0,r.kt)("td",{parentName:"tr",align:null},"INFO \u7c7b\u578b\u65e5\u5fd7\u540c\u4e00\u76ee\u5f55\u4e0b\u53ef\u5b58\u653e\u7684\u6570\u91cf"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"warn_max"),(0,r.kt)("td",{parentName:"tr",align:null},"WARN \u7c7b\u578b\u65e5\u5fd7\u540c\u4e00\u76ee\u5f55\u4e0b\u53ef\u5b58\u653e\u7684\u6570\u91cf"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"error_max"),(0,r.kt)("td",{parentName:"tr",align:null},"ERROR \u7c7b\u578b\u65e5\u5fd7\u540c\u4e00\u76ee\u5f55\u4e0b\u53ef\u5b58\u653e\u7684\u6570\u91cf"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"\u5176\u4ed6\u81ea\u52a8\u66f4\u65b0\u914d\u7f6e"},"\u5176\u4ed6\u81ea\u52a8\u66f4\u65b0\u914d\u7f6e"),(0,r.kt)("p",null,"DataProxy \u542f\u52a8\u5e76\u6210\u529f\u94fe\u63a5\u5230 Manager \u540e\uff0c\u4f1a\u81ea\u52a8\u4ece Manager \u540c\u6b65\u8fd0\u884c\u914d\u7f6e\uff0c\u5e76\u5b9a\u671f\u66f4\u65b0\uff0c\u5982\u4e0b\u90e8\u5206\u914d\u7f6e\u4e0d\u53ef\u4fee\u6539"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u6587\u4ef6\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mq_cluster.properties"),(0,r.kt)("td",{parentName:"tr",align:null},"MQ \u96c6\u7fa4\u914d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topics.properties"),(0,r.kt)("td",{parentName:"tr",align:null},"groupId \u5230 MQ \u7684 Topic \u7684\u6620\u5c04\u914d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"weight.properties"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u8d1f\u8f7d\u6743\u91cd\u914d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"source-channel-sink-\u7ba1\u9053\u914d\u7f6edataproxy-tubepulsarconf"},"source-channel-sink \u7ba1\u9053\u914d\u7f6e\uff08dataproxy-{tube|pulsar}.conf\uff09"),(0,r.kt)("p",null,"DataProxy \u652f\u6301\u914d\u7f6e\u5316\u7684 source-channel-sink\uff0c\u914d\u7f6e\u65b9\u5f0f\u4e0e flume \u7684\u914d\u7f6e\u6587\u4ef6\u7ed3\u6784\u4e00\u81f4\uff0c\u4fee\u6539\u8be5\u914d\u7f6e\u6587\u4ef6\u65f6\u8981\u6309\u7167 Apache flume \u7684\u914d\u7f6e\u6587\u4ef6\u5b9a\u4e49\u6765\u8fdb\u884c\u4fee\u6539\u3002\u914d\u7f6e\u6587\u4ef6\u653e\u5728 dataproxy-{tube|pulsar}.conf \u6587\u4ef6\u4e2d\uff0c\u76ee\u524d\u652f\u6301 dataproxy-pulsar.conf \u548c dataproxy-tube.conf \u4e24\u79cd\uff0c\u7528\u4e8e\u533a\u5206\u4e0d\u540c\u7684\u4e2d\u95f4\u4ef6\u7c7b\u578b\uff0c\u5177\u4f53\u7c7b\u578b\u53ef\u4ee5\u5728\u542f\u52a8\u65f6\u6307\u5b9a\uff0c\u9ed8\u8ba4\uff08\u672a\u6307\u5b9a\u65f6\uff09\u4f7f\u7528 dataproxy-pulsar.conf \u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6\u3002 \u5982\u4e0b\u662f\u9488\u5bf9\u8be5\u914d\u7f6e\u6587\u4ef6\u7684\u793a\u4f8b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Source \u914d\u7f6e\u793a\u4f8b\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"agent1.sources.tcp-source.channels = ch-msg1 ch-msg2 ch-msg3 ch-more1 ch-more2 ch-more3 ch-msg5 ch-msg6 ch-msg7 ch-msg8 ch-msg9 ch-msg10 ch-transfer ch-back\n\u5b9a\u4e49source\u4e2d\u4f7f\u7528\u5230\u7684channel\uff0c\u6ce8\u610f\u6b64source\u4e0b\u9762\u7684\u914d\u7f6e\u5982\u679c\u6709\u4f7f\u7528\u5230channel\uff0c\u5747\u9700\u8981\u5728\u6b64\u6ce8\u91ca\n\nagent1.sources.tcp-source.type = org.apache.flume.source.SimpleTcpSource\ntcp\u89e3\u6790\u7c7b\u578b\u5b9a\u4e49\uff0c\u8fd9\u91cc\u63d0\u4f9b\u7c7b\u540d\u7528\u4e8e\u5b9e\u4f8b\u5316\uff0cSimpleTcpSource\u4e3b\u8981\u662f\u521d\u59cb\u5316\u914d\u7f6e\u5e76\u542f\u52a8\u7aef\u53e3\u76d1\u542c\n\nagent1.sources.tcp-source.msg-factory-name = org.apache.flume.source.ServerMessageFactory\n\u7528\u4e8e\u6784\u9020\u6d88\u606f\u89e3\u6790\u7684handler\uff0c\u5e76\u8bbe\u7f6eread stream handler\u548cwrite stream handler\n\nagent1.sources.tcp-source.host = 0.0.0.0    \ntcp ip\u7ed1\u5b9a\u76d1\u542c\uff0c\u9ed8\u8ba4\u7ed1\u5b9a\u6240\u6709\u7f51\u5361\n\nagent1.sources.tcp-source.port = 46801\ntcp \u7aef\u53e3\u7ed1\u5b9a\uff0c\u9ed8\u8ba4\u7ed1\u5b9a46801\u7aef\u53e3\n\nagent1.sources.tcp-source.highWaterMark=2621440 \nnetty\u6982\u5ff5\uff0c\u8bbe\u7f6enetty\u9ad8\u6c34\u4f4d\u503c\n\nagent1.sources.tcp-source.max-msg-length = 524288\n\u9650\u5236\u5355\u4e2a\u5305\u5927\u5c0f\uff0c\u8fd9\u91cc\u5982\u679c\u4f20\u8f93\u7684\u662f\u538b\u7f29\u5305\uff0c\u5219\u662f\u538b\u7f29\u5305\u5927\u5c0f\uff0c\u9650\u5236512KB\n\nagent1.sources.tcp-source.topic = test_token\n\u9ed8\u8ba4topic\u503c\uff0c\u5982\u679cgroupId\u548ctopic\u7684\u6620\u5c04\u5173\u7cfb\u627e\u4e0d\u5230\uff0c\u5219\u53d1\u9001\u5230\u6b64topic\u4e2d\n\nagent1.sources.tcp-source.attr = m=9\n\u9ed8\u8ba4m\u503c\u8bbe\u7f6e\uff0c\u8fd9\u91cc\u7684m\u503c\u662finlong\u5185\u90e8TdMsg\u534f\u8bae\u7684\u7248\u672c\n\nagent1.sources.tcp-source.connections = 5000\n\u5e76\u53d1\u8fde\u63a5\u4e0a\u7ebf\uff0c\u8d85\u8fc7\u4e0a\u9650\u503c\u65f6\u4f1a\u5bf9\u65b0\u8fde\u63a5\u505a\u65ad\u94fe\u5904\u7406\n\nagent1.sources.tcp-source.max-threads = 64\nnetty\u7ebf\u7a0b\u6c60\u5de5\u4f5c\u7ebf\u7a0b\u4e0a\u9650\uff0c\u4e00\u822c\u63a8\u8350\u9009\u62e9cpu\u7684\u4e24\u500d\n\nagent1.sources.tcp-source.receiveBufferSize = 524288\nnetty server tcp\u8c03\u4f18\u53c2\u6570\n\nagent1.sources.tcp-source.sendBufferSize = 524288\nnetty server tcp\u8c03\u4f18\u53c2\u6570\n\nagent1.sources.tcp-source.custom-cp = true\n\u662f\u5426\u4f7f\u7528\u81ea\u7814\u7684channel process\uff0c\u81ea\u7814channel process\u53ef\u5728\u4e3bchannel\u963b\u585e\u65f6\uff0c\u9009\u62e9\u5907\u7528channel\u53d1\u9001\n\nagent1.sources.tcp-source.selector.type = org.apache.flume.channel.FailoverChannelSelector\n\u8fd9\u4e2achannel selector\u5c31\u662f\u81ea\u7814\u7684channel selector\uff0c\u548c\u5b98\u7f51\u7684\u5dee\u522b\u4e0d\u5927\uff0c\u4e3b\u8981\u662f\u6709channel\u4e3b\u4ece\u9009\u62e9\u903b\u8f91\n\nagent1.sources.tcp-source.selector.master = ch-msg5 ch-msg6 ch-msg7 ch-msg8 ch-msg9\n\u6307\u5b9amaster channel\uff0c\u8fd9\u4e9bchannel\u4f1a\u88ab\u4f18\u5148\u9009\u62e9\u7528\u4e8e\u6570\u636e\u63a8\u9001\u3002\u90a3\u4e9b\u4e0d\u5728master\u3001transfer\u3001fileMetric\u3001slaMetric\u914d\u7f6e\u9879\u91cc\u7684channel\uff0c\u4f46\u5728\nchannels\u91cc\u9762\u6709\u5b9a\u4e49\u7684channel\uff0c\u7edf\u5f52\u4e3aslave channel\uff0c\u5f53master channel\u90fd\u88ab\u5360\u6ee1\u65f6\uff0c\u5c31\u4f1a\u9009\u62e9\u4f7f\u7528slave channel\uff0cslave channel\u4e00\u822c\u5efa\u8bae\u4f7f\u7528file channel\u7c7b\u578b\n\nagent1.sources.tcp-source.selector.transfer = ch-msg5 ch-msg6 ch-msg7 ch-msg8 ch-msg9\n\u6307\u5b9atransfer channel\uff0c\u627f\u63a5transfer\u7c7b\u578b\u7684\u6570\u636e\uff0c\u8fd9\u91cc\u7684transfer\u4e00\u822c\u662f\u6307\u63a8\u9001\u5230\u975etube\u96c6\u7fa4\u7684\u6570\u636e\uff0c\u4ec5\u505a\u8f6c\u53d1\uff0c\u8fd9\u91cc\u9884\u7559\u51fa\u6765\u4f9b\u540e\u7eed\u529f\u80fd\u4f7f\u7528\n\nagent1.sources.tcp-source.selector.fileMetric = ch-back\n\u6307\u5b9afileMetric channel\uff0c\u7528\u4e8e\u63a5\u6536agent\u4e0a\u62a5\u7684\u6307\u6807\u6570\u636e\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Channel \u914d\u7f6e\u793a\u4f8b\uff0cmemory channel\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"agent1.channels.ch-more1.type = memory\nmemory channel\u7c7b\u578b\n\nagent1.channels.ch-more1.capacity = 10000000\nmemory channel \u961f\u5217\u5927\u5c0f\uff0c\u53ef\u7f13\u5b58\u6700\u5927\u6d88\u606f\u6761\u6570\n\nagent1.channels.ch-more1.keep-alive = 0\n\nagent1.channels.ch-more1.transactionCapacity = 20\n\u539f\u5b50\u64cd\u4f5c\u65f6\u6279\u91cf\u5904\u7406\u6700\u5927\u6761\u6570\uff0cmemory channel\u4f7f\u7528\u65f6\u9700\u8981\u7528\u5230\u52a0\u9501\uff0c\u56e0\u6b64\u4f1a\u6709\u6279\u5904\u7406\u6d41\u7a0b\u589e\u52a0\u6548\u7387\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Channel \u914d\u7f6e\u793a\u4f8b\uff0cfile channel\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"agent1.channels.ch-msg5.type = file\nfile channel\u7c7b\u578b\n\nagent1.channels.ch-msg5.capacity = 100000000\nfile channel\u6700\u5927\u53ef\u7f13\u5b58\u6d88\u606f\u6761\u6570\n\nagent1.channels.ch-msg5.maxFileSize = 1073741824\nfile channel\u6587\u4ef6\u6700\u5927\u4e0a\u9650\uff0c\u5b57\u8282\u6570\n\nagent1.channels.ch-msg5.minimumRequiredSpace = 1073741824\nfile channel\u6240\u5728\u78c1\u76d8\u6700\u5c0f\u53ef\u7528\u7a7a\u95f4\uff0c\u8bbe\u7f6e\u6b64\u503c\u53ef\u4ee5\u9632\u6b62\u78c1\u76d8\u5199\u6ee1\n\nagent1.channels.ch-msg5.checkpointDir = /data/work/file/ch-msg5/check\nfile channel checkpoint\u8def\u5f84\n\nagent1.channels.ch-msg5.dataDirs = /data/work/file/ch-msg5/data\nfile channel\u6570\u636e\u8def\u5f84\n\nagent1.channels.ch-msg5.fsyncPerTransaction = false\n\u662f\u5426\u5bf9\u6bcf\u4e2a\u539f\u5b50\u64cd\u4f5c\u505a\u540c\u6b65\u78c1\u76d8\uff0c\u5efa\u8bae\u6539false\uff0c\u5426\u5219\u4f1a\u5bf9\u6027\u80fd\u6709\u5f71\u54cd\n\nagent1.channels.ch-msg5.fsyncInterval = 5\n\u6570\u636e\u4ece\u5185\u5b58flush\u5230\u78c1\u76d8\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\u79d2\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sink \u914d\u7f6e\u793a\u4f8b\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"agent1.sinks.mq-sink-msg1.channel = ch-msg1\nsink\u7684\u4e0a\u6e38channel\u540d\u79f0\n\nagent1.sinks.mq-sink-msg1.type = org.apache.inlong.dataproxy.sink.mq.MessageQueueZoneSink\nsink\u7c7b\u5b9e\u73b0\uff0c\u6b64\u5904\u4e3a\u7edf\u4e00MQ\u6a21\u578bSink\n\nagent1.sinks.mq-sink-msg1.maxThreads = 2\n\u6700\u5927\u53d1\u9001\u7ebf\u7a0b\u6570\n\nagent1.sinks.mq-sink-msg1.dispatchTimeout = 2000\nDispatch\u961f\u5217\u8d85\u65f6\u65f6\u95f4\n\nagent1.sinks.mq-sink-msg1.dispatchMaxPackCount = 256\nDispatch\u961f\u5217\u6700\u5927\u5305\u6570\u91cf\n\nagent1.sinks.mq-sink-msg1.dispatchMaxPackSize = 3276800\nDispatch\u961f\u5217\u6700\u5927\u5305Size\n\nagent1.sinks.mq-sink-msg1.maxBufferQueueSize=131072\nDispatch\u961f\u5217\u6700\u5927\u957f\u5ea6\n\nagent1.sinks.mq-sink-msg1.processInterval=100\n\u91cd\u8bd5\u53d1\u9001\u95f4\u9694\n\nagent1.sinks.mq-sink-msg1.reloadInterval=60000\n\u914d\u7f6e\u91cd\u65b0\u52a0\u8f7d\u65f6\u95f4\u95f4\u9694\n\nagent1.sinks.mq-sink-msg1.producer.compressionType=SNAPPY\n\u6570\u636e\u538b\u7f29\u7b97\u6cd5\n")))}u.isMDXComponent=!0}}]);