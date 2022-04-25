"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1738],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return p}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),m=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=m(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=m(n),p=a,k=s["".concat(u,".").concat(p)]||s[p]||c[p]||l;return n?r.createElement(k,o(o({ref:e},d),{},{components:n})):r.createElement(k,o({ref:e},d))}));function p(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},51814:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"TubeMQ Metrics"},u=void 0,m={unversionedId:"modules/tubemq/tubemq_metrics",id:"version-1.1.0/modules/tubemq/tubemq_metrics",title:"TubeMQ Metrics",description:"1 Introduction to TubeMQ metric set",source:"@site/versioned_docs/version-1.1.0/modules/tubemq/tubemq_metrics.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/tubemq_metrics",permalink:"/docs/modules/tubemq/tubemq_metrics",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-1.1.0/modules/tubemq/tubemq_metrics.md",tags:[],version:"1.1.0",frontMatter:{title:"TubeMQ Metrics"},sidebar:"tutorialSidebar",previous:{title:"HTTP API",permalink:"/docs/modules/tubemq/http_access_api"},next:{title:"TubeMQ VS Kafka",permalink:"/docs/modules/tubemq/tubemq_perf_test_vs_Kafka"}},d={},c=[{value:"1 Introduction to TubeMQ metric set",id:"1-introduction-to-tubemq-metric-set",level:2},{value:"2 Master Metric Items",id:"2-master-metric-items",level:2},{value:"3 Broker Metric Items",id:"3-broker-metric-items",level:2}],s={toc:c};function p(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-introduction-to-tubemq-metric-set"},"1 Introduction to TubeMQ metric set"),(0,l.kt)("p",null,"TubeMQ has supported the output of JMX metric items since version 0.12.0. At present, it mainly adds overall operating metrics to the Master and Broker modules; in the future, we will consider adding corresponding metrics to the Producer and Consumer modules. At the same time, the metrics of the Master and Broker modules are implemented as needed to continue to expand."),(0,l.kt)("p",null,"The indicator output format currently only supports the standard JMX access method, next, Prometheus and HTTP access mode will be added. The metrics' values are obtained through the getMetrics() and getAndReSetMetrics() methods: getMetrics() only pulls the indicator data, and does not change the current data metric value; the getAndReSetMetrics() method performs the pull of the current metric data, for the Counter and The maximum and minimum metrics are reset to facilitate business re-statistics of system operation."),(0,l.kt)("h2",{id:"2-master-metric-items"},"2 Master Metric Items"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Metric Item"),(0,l.kt)("th",{parentName:"tr",align:null},"Metric Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consume_group_cnt"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of consumer groups currently online")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consume_group_timeout_cnt"),(0,l.kt)("td",{parentName:"tr",align:null},"Counter"),(0,l.kt)("td",{parentName:"tr",align:null},"The total number of consumer group timeouts since the last count")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client_balance_group_cnt"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of consumer groups allocated by the currently registered client partition")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clt_balance_timeout_cnt"),(0,l.kt)("td",{parentName:"tr",align:null},"Counter"),(0,l.kt)("td",{parentName:"tr",align:null},"The total number of timeouts of client partition allocation consumer group timeouts since the last statistics")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consumer_online_cnt"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of consumers currently online")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consumer_timeout_cnt"),(0,l.kt)("td",{parentName:"tr",align:null},"Counter"),(0,l.kt)("td",{parentName:"tr",align:null},"The total number of consumer timeout exits since the last count")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"producer_online_cnt"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of producers currently online")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"producer_timeout_cnt"),(0,l.kt)("td",{parentName:"tr",align:null},"Counter"),(0,l.kt)("td",{parentName:"tr",align:null},"The total number of producer timeout exits since the last count")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"broker_configure_cnt"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of Broker records currently configured")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"broker_online_cnt"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of Broker nodes currently online")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"broker_timeout_cnt"),(0,l.kt)("td",{parentName:"tr",align:null},"Counter"),(0,l.kt)("td",{parentName:"tr",align:null},"The total number of broker node timeouts since the last count")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"broker_abn_current_cnt"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of Broker nodes that currently report exceptions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"broker_abn_total_cnt"),(0,l.kt)("td",{parentName:"tr",align:null},"Counter"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of Broker nodes that have reported exceptions since the last statistics")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"broker_fbd_current_cnt"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of Broker nodes that are currently reporting exceptions and are prohibited from serving")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"broker_fbd_total_cnt"),(0,l.kt)("td",{parentName:"tr",align:null},"Counter"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of Broker nodes that have reported exceptions and are prohibited from serving since the last statistics")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"svrbalance_duration"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Current server load balancing continuous-time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"svrbalance_duration_min"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Current server load balancing minimum time consumption")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"svrbalance_duration_max"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Current server load balancing maximum time consumption")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"svrbal_reset_duration_min"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"The current minimum equalization time to reset the equalization")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"svrbal_reset_duration_max"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum equalization time consumption of the current reset equalization")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"svrbal_con_consumer_cnt"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of clients currently processing connection tasks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"svrbal_discon_consumer_cnt"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of clients currently processing disconnected tasks")))),(0,l.kt)("h2",{id:"3-broker-metric-items"},"3 Broker Metric Items"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Metric Item"),(0,l.kt)("th",{parentName:"tr",align:null},"Metric Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fSync_duration_min"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Current data synchronization to file minimum time consumption")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fSync_duration_max"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum time consumption of current data synchronization to file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zkSync_duration_min"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Current data synchronization to ZooKeeper minimum time consumption")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zkSync_duration_max"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum time consumption of current data synchronization to ZooKeeper")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zk_exception_cnt"),(0,l.kt)("td",{parentName:"tr",align:null},"Counter"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of exceptions thrown during ZooKeeper operations")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"online_timeout_cnt"),(0,l.kt)("td",{parentName:"tr",align:null},"Counter"),(0,l.kt)("td",{parentName:"tr",align:null},"The total number of times the master reported the heartbeat timeout of this node")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"io_exception_cnt"),(0,l.kt)("td",{parentName:"tr",align:null},"Counter"),(0,l.kt)("td",{parentName:"tr",align:null},"Total number of IOExceptions reported by reading and writing data disks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consumer_online_cnt"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Total number of consumers registered to this node")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consumer_timeout_cnt"),(0,l.kt)("td",{parentName:"tr",align:null},"Counter"),(0,l.kt)("td",{parentName:"tr",align:null},"The total number of heartbeat timeouts for consumers registered on this node")))),(0,l.kt)("hr",null),(0,l.kt)("a",{href:"#top"},"Back to top"))}p.isMDXComponent=!0}}]);