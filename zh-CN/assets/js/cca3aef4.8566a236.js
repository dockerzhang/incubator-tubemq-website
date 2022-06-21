"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5419],{3905:function(t,n,a){a.d(n,{Zo:function(){return m},kt:function(){return k}});var e=a(67294);function r(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function l(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}function i(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}function d(t,n){if(null==t)return{};var a,e,r=function(t,n){if(null==t)return{};var a,e,r={},l=Object.keys(t);for(e=0;e<l.length;e++)a=l[e],n.indexOf(a)>=0||(r[a]=t[a]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(e=0;e<l.length;e++)a=l[e],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=e.createContext({}),p=function(t){var n=e.useContext(o),a=n;return t&&(a="function"==typeof t?t(n):i(i({},n),t)),a},m=function(t){var n=p(t.components);return e.createElement(o.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},N=e.forwardRef((function(t,n){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),N=p(a),k=r,g=N["".concat(o,".").concat(k)]||N[k]||u[k]||l;return a?e.createElement(g,i(i({ref:n},m),{},{components:a})):e.createElement(g,i({ref:n},m))}));function k(t,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return e.createElement.apply(null,i)}return e.createElement.apply(null,a)}N.displayName="MDXCreateElement"},65396:function(t,n,a){a.r(n),a.d(n,{assets:function(){return m},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return u}});var e=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],d={title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},o=void 0,p={unversionedId:"modules/sort-standalone/quick_start",id:"version-1.0.0/modules/sort-standalone/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.0/modules/sort-standalone/quick_start.md",sourceDirName:"modules/sort-standalone",slug:"/modules/sort-standalone/quick_start",permalink:"/zh-CN/docs/1.0.0/modules/sort-standalone/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.0.0/modules/sort-standalone/quick_start.md",tags:[],version:"1.0.0",sidebarPosition:2,frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.0.0/modules/sort-standalone/overview"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.0.0/modules/audit/overview"}},m={},u=[{value:"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6",id:"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6",level:2},{value:"\u542f\u52a8inlong-sort-standalone\u5e94\u7528",id:"\u542f\u52a8inlong-sort-standalone\u5e94\u7528",level:2},{value:"conf/common.properties\u914d\u7f6e",id:"confcommonproperties\u914d\u7f6e",level:2},{value:"SortClusterConfig\u914d\u7f6e",id:"sortclusterconfig\u914d\u7f6e",level:2},{value:"SortTaskConfig\u914d\u7f6e",id:"sorttaskconfig\u914d\u7f6e",level:3},{value:"Hive\u5206\u53d1\u4efb\u52a1\u7684idParams",id:"hive\u5206\u53d1\u4efb\u52a1\u7684idparams",level:3},{value:"Hive\u5206\u53d1\u4efb\u52a1\u7684sinkParams",id:"hive\u5206\u53d1\u4efb\u52a1\u7684sinkparams",level:3},{value:"Pulsar\u5206\u53d1\u4efb\u52a1\u7684idParams",id:"pulsar\u5206\u53d1\u4efb\u52a1\u7684idparams",level:3},{value:"Pulsar\u5206\u53d1\u4efb\u52a1\u7684sinkParams",id:"pulsar\u5206\u53d1\u4efb\u52a1\u7684sinkparams",level:3},{value:"Hive\u914d\u7f6e\u6837\u4f8b",id:"hive\u914d\u7f6e\u6837\u4f8b",level:3}],N={toc:u};function k(t){var n=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,e.Z)({},N,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6"},"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6"),(0,l.kt)("p",null,"\u5b89\u88c5\u6587\u4ef6\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"inlong-sort-standalone/sort-standalone-dist/target/"),"\u76ee\u5f55\u4e0b\uff0c\u6587\u4ef6\u540d\u662fapache-inlong-sort-standalone-${project.version}-bin.tar.gz\u3002"),(0,l.kt)("h2",{id:"\u542f\u52a8inlong-sort-standalone\u5e94\u7528"},"\u542f\u52a8inlong-sort-standalone\u5e94\u7528"),(0,l.kt)("p",null,"\u6709\u4e86\u4e0a\u8ff0\u7f16\u8bd1\u9636\u6bb5\u4ea7\u51fa\u7684tar.gz\u5305\u540e\uff0c\u89e3\u538b\u540e\u5c31\u53ef\u4ee5\u542f\u52a8inlong-sort-standalone\u7684\u5e94\u7528\u4e86\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./bin/sort-start.sh\n")),(0,l.kt)("h2",{id:"confcommonproperties\u914d\u7f6e"},"conf/common.properties\u914d\u7f6e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clusterId"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6765\u552f\u4e00\u6807\u8bc6\u4e00\u4e2ainlong-sort-standalone\u96c6\u7fa4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sortSource.type"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.inlong.sort.standalone.source.readapi.ReadApiSource"),(0,l.kt)("td",{parentName:"tr",align:null},"Source\u7c7b\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sortChannel.type"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.inlong.sort.standalone.channel.BufferQueueChannel"),(0,l.kt)("td",{parentName:"tr",align:null},"Channel\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sortSink.type"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.inlong.sort.standalone.sink.hive.HiveSink"),(0,l.kt)("td",{parentName:"tr",align:null},"Sink\u7c7b\u540d\uff0c\u4e0d\u540c\u7684\u5206\u53d1\u7c7b\u578b\u4f7f\u7528\u4e0d\u540c\u7684Sink\u7c7b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sortClusterConfig.type"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.inlong.sort.standalone.config.loader.ClassResourceSortClusterConfigLoader"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u53d1\u96c6\u7fa4\u914d\u7f6e\u52a0\u8f7d\u7c7b\u540d\uff0cClassResourceSortClusterConfigLoader\u4eceClassPath\u7684SortClusterConfig.conf\u6e90\u6587\u4ef6\u8bfb\u53d6\u5206\u53d1\u96c6\u7fa4\u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sortClusterConfig.managerPath"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u53d1\u96c6\u7fa4\u914d\u7f6e\u52a0\u8f7d\u7c7borg.apache.inlong.sort.standalone.config.loader.ManagerSortClusterConfigLoader\u7684\u53c2\u6570\uff0c\u6307\u5b9aInlong Manager\u7684URL\u8def\u5f84\uff0c\t\u5982http://${manager ip:port}/api/inlong/manager/openapi/sort/standalone/getClusterConfig")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eventFormatHandler"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.inlong.sort.standalone.sink.hive.DefaultEventFormatHandler"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u53d1Hive\u524d\u7684\u683c\u5f0f\u8f6c\u6362\u7c7b\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxThreads"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"sink\u7684\u5e76\u884c\u5ea6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reloadInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"60000"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u53d1\u96c6\u7fa4\u914d\u7f6e\u7684\u66f4\u65b0\u52a0\u8f7d\u5468\u671f\uff0c\u5355\u4f4d\u6beb\u79d2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"processInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u53d1\u5206\u7ec4\u5904\u7406\u95f4\u9694\uff0c\u5355\u4f4d\u6beb\u79d2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metricDomains"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"Sort"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u6807\u6c47\u603b\u57df\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metricDomains.Sort.domainListeners"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u6807\u6c47\u603b\u76d1\u542c\u5668\u7c7b\u540d\u5217\u8868\uff0c\u7a7a\u683c\u5206\u9694")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prometheusHttpPort"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"8080"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener\u7684\u53c2\u6570\uff0cPrometheus\u7684HttpServer\u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metricDomains.Sort.snapshotInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"60000"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605tube\u7684\u91cd\u8bd5\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3ams")))),(0,l.kt)("h2",{id:"sortclusterconfig\u914d\u7f6e"},"SortClusterConfig\u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4eceClassPath\u7684SortClusterConfig.conf\u6e90\u6587\u4ef6\u8bfb\u53d6\uff0c\u4f46\u4e0d\u652f\u6301\u5b9e\u65f6\u66f4\u65b0"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4eceInlong Manager\u7684HTTP\u63a5\u53e3\u83b7\u53d6\u914d\u7f6e",(0,l.kt)("br",{parentName:"li"}),"|  \u914d\u7f6e\u540d | \u662f\u5426\u5fc5\u987b  | \u9ed8\u8ba4\u503c  |\u63cf\u8ff0   |\n| ------------ | ------------ | ------------ | ------------ |\n|clusterName   | Y | NA  |  \u7528\u6765\u552f\u4e00\u6807\u8bc6\u4e00\u4e2ainlong-sort-standalone\u96c6\u7fa4 |\n|sortTasks   | Y  | NA  | \u5206\u53d1\u4efb\u52a1\u5217\u8868  |")),(0,l.kt)("h3",{id:"sorttaskconfig\u914d\u7f6e"},"SortTaskConfig\u914d\u7f6e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u53d1\u4efb\u52a1\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},'\u5206\u53d1\u4efb\u52a1\u7c7b\u578b\uff0c\u5982HIVE("hive"), TUBE("tube"), KAFKA("kafka"), PULSAR("pulsar"), ElasticSearch("ElasticSearch"), UNKNOWN("n")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"idParams"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Inlong\u6570\u636e\u6d41\u53c2\u6570\u5217\u8868")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sinkParams"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u53d1\u4efb\u52a1\u7684\u53c2\u6570")))),(0,l.kt)("h3",{id:"hive\u5206\u53d1\u4efb\u52a1\u7684idparams"},"Hive\u5206\u53d1\u4efb\u52a1\u7684idParams"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inlongGroupId"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"inlongGroupId")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inlongStreamId"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"inlongStreamId")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"separator"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u9694\u7b26")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partitionIntervalMs"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"3600000"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u533a\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"idRootPath"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Inlong\u6570\u636e\u6d41\u7684Hdfs\u6839\u76ee\u5f55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partitionSubPath"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Inlong\u6570\u636e\u6d41\u7684\u5206\u533a\u5b50\u76ee\u5f55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hiveTableName"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Inlong\u6570\u636e\u6d41\u7684Hive\u8868\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partitionFieldName"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"dt"),(0,l.kt)("td",{parentName:"tr",align:null},"Inlong\u6570\u636e\u6d41\u7684\u5206\u533a\u5b57\u6bb5\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partitionFieldPattern"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Inlong\u6570\u636e\u6d41\u7684\u5206\u533a\u5b57\u6bb5\u503c\u683c\u5f0f\uff0c\u5982{yyyyMMdd}\u3001{yyyyMMddHH}\u3001{yyyyMMddHHmm}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msgTimeFieldPattern"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u751f\u6210\u65f6\u95f4\u7684\u5b57\u6bb5\u503c\u683c\u5f0f\uff0cJava\u65f6\u95f4\u683c\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxPartitionOpenDelayHour"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u533a\u6700\u5927\u6253\u5f00\u5ef6\u8fdf\u65f6\u95f4\uff0c\u5355\u4f4d\u5c0f\u65f6")))),(0,l.kt)("h3",{id:"hive\u5206\u53d1\u4efb\u52a1\u7684sinkparams"},"Hive\u5206\u53d1\u4efb\u52a1\u7684sinkParams"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hdfsPath"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"HDFS\u7684NameNode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxFileOpenDelayMinute"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5355\u4e2aHDFS\u6587\u4ef6\u6700\u5927\u5199\u5165\u65f6\u95f4\uff0c\u5355\u4f4d\u5206\u949f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tokenOvertimeMinute"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5355\u4e2aInlong\u6570\u636e\u6d41\u7684\u5206\u533a\u521b\u5efatoken\u6700\u5927\u5360\u7528\u65f6\u95f4\uff0c\u5355\u4f4d\u5206\u949f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxOutputFileSizeGb"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5355\u4e2aHDFS\u6587\u4ef6\u6700\u5927\u5927\u5c0f\uff0c\u5355\u4f4dGB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hiveJdbcUrl"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Hive\u7684JDBC\u8def\u5f84")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hiveDatabase"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Hive\u7684\u6570\u636e\u5e93")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hiveUsername"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Hive\u7684\u7528\u6237\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hivePassword"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Hive\u7684\u5bc6\u7801")))),(0,l.kt)("h3",{id:"pulsar\u5206\u53d1\u4efb\u52a1\u7684idparams"},"Pulsar\u5206\u53d1\u4efb\u52a1\u7684idParams"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inlongGroupId"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"inlongGroupId")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inlongStreamId"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"inlongStreamId")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topic"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Pulsar\u7684Topic")))),(0,l.kt)("h3",{id:"pulsar\u5206\u53d1\u4efb\u52a1\u7684sinkparams"},"Pulsar\u5206\u53d1\u4efb\u52a1\u7684sinkParams"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"serviceUrl"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Pulsar\u670d\u52a1\u8def\u5f84")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"authentication"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Pulsar\u96c6\u7fa4\u9274\u6743")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enableBatching"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"enableBatching")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batchingMaxBytes"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"5242880"),(0,l.kt)("td",{parentName:"tr",align:null},"batchingMaxBytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batchingMaxMessages"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"3000"),(0,l.kt)("td",{parentName:"tr",align:null},"batchingMaxMessages")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batchingMaxPublishDelay"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"batchingMaxPublishDelay")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxPendingMessages"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"maxPendingMessages")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxPendingMessagesAcrossPartitions"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"50000"),(0,l.kt)("td",{parentName:"tr",align:null},"maxPendingMessagesAcrossPartitions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sendTimeout"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"sendTimeout")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compressionType"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"NONE"),(0,l.kt)("td",{parentName:"tr",align:null},"compressionType")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blockIfQueueFull"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"blockIfQueueFull")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"roundRobinRouterBatchingPartitionSwitchFrequency"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"roundRobinRouterBatchingPartitionSwitchFrequency")))),(0,l.kt)("h3",{id:"hive\u914d\u7f6e\u6837\u4f8b"},"Hive\u914d\u7f6e\u6837\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "data":{\n        "clusterName":"hivev3-sz-sz1",\n        "sortTasks":[\n            {\n                "idParams":[\n                    {\n                        "inlongGroupId":"0fc00000046",\n                        "inlongStreamId":"",\n                        "separator":"|",\n                        "partitionIntervalMs":3600000,\n                        "idRootPath":"/user/hive/warehouse/t_inlong_v1_0fc00000046",\n                        "partitionSubPath":"/{yyyyMMdd}/{yyyyMMddHH}",\n                        "hiveTableName":"t_inlong_v1_0fc00000046",\n                        "partitionFieldName":"dt",\n                        "partitionFieldPattern":"yyyyMMddHH",\n                        "msgTimeFieldPattern":"yyyy-MM-dd HH:mm:ss",\n                        "maxPartitionOpenDelayHour":8\n                    },\n                    {\n                        "inlongGroupId":"03600000045",\n                        "inlongStreamId":"",\n                        "separator":"|",\n                        "partitionIntervalMs":3600000,\n                        "idRootPath":"/user/hive/warehouse/t_inlong_v1_03600000045",\n                        "partitionSubPath":"/{yyyyMMdd}/{yyyyMMddHH}",\n                        "hiveTableName":"t_inlong_v1_03600000045",\n                        "partitionFieldName":"dt",\n                        "partitionFieldPattern":"yyyyMMddHH",\n                        "msgTimeFieldPattern":"yyyy-MM-dd HH:mm:ss",\n                        "maxPartitionOpenDelayHour":8\n                    },\n                    {\n                        "inlongGroupId":"05100054990",\n                        "inlongStreamId":"",\n                        "separator":"|",\n                        "partitionIntervalMs":3600000,\n                        "idRootPath":"/user/hive/warehouse/t_inlong_v1_05100054990",\n                        "partitionSubPath":"/{yyyyMMdd}/{yyyyMMddHH}",\n                        "hiveTableName":"t_inlong_v1_05100054990",\n                        "partitionFieldName":"dt",\n                        "partitionFieldPattern":"yyyyMMddHH",\n                        "msgTimeFieldPattern":"yyyy-MM-dd HH:mm:ss",\n                        "maxPartitionOpenDelayHour":8\n                    },\n                    {\n                        "inlongGroupId":"09c00014434",\n                        "inlongStreamId":"",\n                        "separator":"|",\n                        "partitionIntervalMs":3600000,\n                        "idRootPath":"/user/hive/warehouse/t_inlong_v1_09c00014434",\n                        "partitionSubPath":"/{yyyyMMdd}/{yyyyMMddHH}",\n                        "hiveTableName":"t_inlong_v1_09c00014434",\n                        "partitionFieldName":"dt",\n                        "partitionFieldPattern":"yyyyMMddHH",\n                        "msgTimeFieldPattern":"yyyy-MM-dd HH:mm:ss",\n                        "maxPartitionOpenDelayHour":8\n                    },\n                    {\n                        "inlongGroupId":"0c900035509",\n                        "inlongStreamId":"",\n                        "separator":"|",\n                        "partitionIntervalMs":3600000,\n                        "idRootPath":"/user/hive/warehouse/t_inlong_v1_0c900035509",\n                        "partitionSubPath":"/{yyyyMMdd}/{yyyyMMddHH}",\n                        "hiveTableName":"t_inlong_v1_0c900035509",\n                        "partitionFieldName":"dt",\n                        "partitionFieldPattern":"yyyyMMddHH",\n                        "msgTimeFieldPattern":"yyyy-MM-dd HH:mm:ss",\n                        "maxPartitionOpenDelayHour":8\n                    }\n                ],\n                "name":"sid_hive_inlong6th_v3",\n                "sinkParams":{\n                    "hdfsPath":"hdfs://127.0.0.1:9000",\n                    "maxFileOpenDelayMinute":"5",\n                    "tokenOvertimeMinute":"60",\n                    "maxOutputFileSizeGb":"2",\n                    "hiveJdbcUrl":"jdbc:hive2://127.0.0.2:10000",\n                    "hiveDatabase":"default",\n                    "hiveUsername":"hive",\n                    "hivePassword":"hive"\n                },\n                "type":"HIVE"\n            }\n        ]\n    },\n    "errCode":0,\n    "md5":"md5",\n    "result":true\n}\n')))}k.isMDXComponent=!0}}]);