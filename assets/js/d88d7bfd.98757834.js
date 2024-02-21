"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[62779],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=m(n),p=r,h=c["".concat(s,".").concat(p)]||c[p]||u[p]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},31286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const o={title:"Overview",sidebar_position:1},i=void 0,l={unversionedId:"modules/dataproxy/overview",id:"version-1.10.0/modules/dataproxy/overview",title:"Overview",description:"InLong DataProxy mainly consists of connection convergence, routing, data compression, and protocol conversion. DataProxy acts as a bridge from the InLong Agent to the message queue, When the DataProxy pulls the metadata of the data streams from the Manager module, the corresponding relationship between the data streams and the topic name of the message queue is determined. When DataProxy receives a message, it will first be sent to Memory Channel for compression.",source:"@site/versioned_docs/version-1.10.0/modules/dataproxy/overview.md",sourceDirName:"modules/dataproxy",slug:"/modules/dataproxy/overview",permalink:"/docs/modules/dataproxy/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.10.0/modules/dataproxy/overview.md",tags:[],version:"1.10.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Monitor Metrics",permalink:"/docs/modules/agent/metrics"},next:{title:"Deployment",permalink:"/docs/modules/dataproxy/quick_start"}},s={},m=[{value:"Architecture",id:"architecture",level:2},{value:"Monitor Metrics configuration",id:"monitor-metrics-configuration",level:2}],d={toc:m},c="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"InLong DataProxy mainly consists of connection convergence, routing, data compression, and protocol conversion. DataProxy acts as a bridge from the InLong Agent to the message queue, When the DataProxy pulls the metadata of the data streams from the Manager module, the corresponding relationship between the data streams and the topic name of the message queue is determined. When DataProxy receives a message, it will first be sent to Memory Channel for compression.\nAnd use the local Producer to send data to the back-end Cache layer (ie message queue). When the message queue fails to send abnormally, DataProxy will cache the message to the Disk Channel, the local disk.\nThe overall architecture of InLong DataProxy is based on Apache Flume, which extends the source layer and sinks layer. It optimizes disaster recovery forwarding to improve the stability of the system."),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(32022).Z,width:"1462",height:"1026"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The source layer opens port monitoring, which is realized through netty server. The decoded data is sent to the channel layer"),(0,r.kt)("li",{parentName:"ul"},"The channel layer has a selector, which is used to choose which type of channel to go. If the memory is eventually full, the data will be processed."),(0,r.kt)("li",{parentName:"ul"},"The data of the channel layer will be forwarded through the sink layer. The main purpose here is to convert the data to the TDMsg1 format and push it to the cache layer (tube is more commonly used here)")),(0,r.kt)("h2",{id:"monitor-metrics-configuration"},"Monitor Metrics configuration"),(0,r.kt)("p",null,"  DataProxy provide monitor indicator based on JMX, user can implement the code that read the metrics and report to user-defined monitor system.\nSource-module and Sink-module can add monitor metric class that is the subclass of org.apache.inlong.commons.config.metrics.MetricItemSet, and register it to MBeanServer. User-defined plugin can get module metric with JMX, and report metric data to different monitor system."),(0,r.kt)("p",null,'  User can describe the configuration in the file "common.properties ". For example:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"metricDomains=DataProxy\nmetricDomains.DataProxy.domainListeners=org.apache.inlong.dataproxy.metrics.prometheus.PrometheusMetricListener\nmetricDomains.DataProxy.snapshotInterval=60000\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The JMX domain name of DataProxy is "DataProxy". '),(0,r.kt)("li",{parentName:"ul"},'It is defined by the parameter "metricDomains".'),(0,r.kt)("li",{parentName:"ul"},'The listeners of JMX domain is defined by the parameter "metricDomains.$domainName.domainListeners".'),(0,r.kt)("li",{parentName:"ul"},"The class names of the listeners is separated by the space char."),(0,r.kt)("li",{parentName:"ul"},'The listener class need to implement the interface "org.apache.inlong.dataproxy.metrics.MetricListener".'),(0,r.kt)("li",{parentName:"ul"},'The snapshot interval of the listeners is defined by the parameter "metricDomains.$domainName.snapshotInterval", the parameter unit is "millisecond".')),(0,r.kt)("p",null,"The method proto of org.apache.inlong.dataproxy.metrics.MetricListener is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public void snapshot(String domain, List itemValues);\n")),(0,r.kt)("p",null,'The field of MetricItemValue.dimensions has these dimensions(The fields of DataProxyMetricItem defined by the Annotation "@Dimension"):'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clusterId"),(0,r.kt)("td",{parentName:"tr",align:null},"DataProxy cluster ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"DataProxy source component name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sourceDataId"),(0,r.kt)("td",{parentName:"tr",align:null},"DataProxy source component data id, when source is a TCP source, it will be port number.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlongGroupId"),(0,r.kt)("td",{parentName:"tr",align:null},"Inlong data group ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlongStreamId"),(0,r.kt)("td",{parentName:"tr",align:null},"Inlong data stream ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sinkId"),(0,r.kt)("td",{parentName:"tr",align:null},"DataProxy sink component name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sinkDataId"),(0,r.kt)("td",{parentName:"tr",align:null},"DataProxy sink component data id, when sink is a pulsar sink, it will be topic name.")))),(0,r.kt)("p",null,'The field of MetricItemValue.metrics has these metrics(The fields of DataProxyMetricItem defined by the Annotation "@CountMetric"):'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readSuccessCount"),(0,r.kt)("td",{parentName:"tr",align:null},"Successful event count reading from source component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readSuccessSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Successful event body size reading from source component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readFailCount"),(0,r.kt)("td",{parentName:"tr",align:null},"Failure event count reading from source component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readFailSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Failure event body size reading from source component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendCount"),(0,r.kt)("td",{parentName:"tr",align:null},"Event count sending to sink destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Event body size sending to sink destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendSuccessCount"),(0,r.kt)("td",{parentName:"tr",align:null},"Successful event count sending to sink destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendSuccessSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Successful event body size sending to sink destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendFailCount"),(0,r.kt)("td",{parentName:"tr",align:null},"Failure event count sending to sink destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendFailSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Failure event body size sending to sink destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sinkDuration"),(0,r.kt)("td",{parentName:"tr",align:null},"The unit is millisecond, the duration is between current timepoint and the timepoint in sending to sink destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nodeDuration"),(0,r.kt)("td",{parentName:"tr",align:null},"The unit is millisecond, the duration is between current timepoint and the timepoint in getting event from source.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wholeDuration"),(0,r.kt)("td",{parentName:"tr",align:null},"The unit is millisecond, the duration is between current timepoint and the timepoint in generating event.")))),(0,r.kt)("p",null,"Monitor indicators have registered to MBeanServer, user can append JMX parameters when running DataProxy, remote server can get monitor metrics with RMI."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"-Dcom.sun.management.jmxremote\n-Djava.rmi.server.hostname=127.0.0.1\n-Dcom.sun.management.jmxremote.port=9999\n-Dcom.sun.management.jmxremote.authenticate=false\n-Dcom.sun.management.jmxremote.ssl=false\n")))}u.isMDXComponent=!0},32022:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/architecture-138d6143f4f9784999e3161f0797676e.png"}}]);