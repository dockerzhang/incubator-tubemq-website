"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[70420],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),m=o(a),s=r,c=m["".concat(p,".").concat(s)]||m[s]||k[s]||l;return a?n.createElement(c,i(i({ref:e},d),{},{components:a})):n.createElement(c,i({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u[m]="string"==typeof t?t:r,i[1]=u;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},82941:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={title:"Configuration",sidebar_position:3},i=void 0,u={unversionedId:"modules/audit/configure",id:"modules/audit/configure",title:"Configuration",description:"Overview",source:"@site/docs/modules/audit/configure.md",sourceDirName:"modules/audit",slug:"/modules/audit/configure",permalink:"/docs/next/modules/audit/configure",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/modules/audit/configure.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Configuration",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/next/modules/audit/overview"},next:{title:"Deployment",permalink:"/docs/next/modules/audit/quick_start"}},p={},o=[{value:"Overview",id:"overview",level:2},{value:"Audit-proxy source-channel-sink pipeline configuration (<code>audit-proxy-{tube|pulsar|kafka}.conf</code>)",id:"audit-proxy-source-channel-sink-pipeline-configuration-audit-proxy-tubepulsarkafkaconf",level:2},{value:"Basic Configuration",id:"basic-configuration",level:3},{value:"sources Configuration",id:"sources-configuration",level:3},{value:"channel Configuration",id:"channel-configuration",level:3},{value:"sink Configuration",id:"sink-configuration",level:3},{value:"Audit-store storage service configuration (<code>application.properties</code>)",id:"audit-store-storage-service-configuration-applicationproperties",level:2},{value:"MQ configuration",id:"mq-configuration",level:3},{value:"DB configuration",id:"db-configuration",level:3},{value:"ElasticSearch configuration",id:"elasticsearch-configuration",level:3},{value:"clickhouse configuration",id:"clickhouse-configuration",level:3}],d={toc:o},m="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Audit-proxy source-channel-sink pipeline configuration (audit-proxy-{tube|pulsar|kafka}.conf).Audit-store storage service\nconfiguration (application.properties)"),(0,r.kt)("h2",{id:"audit-proxy-source-channel-sink-pipeline-configuration-audit-proxy-tubepulsarkafkaconf"},"Audit-proxy source-channel-sink pipeline configuration (",(0,r.kt)("inlineCode",{parentName:"h2"},"audit-proxy-{tube|pulsar|kafka}.conf"),")"),(0,r.kt)("h3",{id:"basic-configuration"},"Basic Configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"agent1.sources"),(0,r.kt)("td",{parentName:"tr",align:null},"source  typpe"),(0,r.kt)("td",{parentName:"tr",align:null},"tcp-source"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"agent1.channels"),(0,r.kt)("td",{parentName:"tr",align:null},"used channel"),(0,r.kt)("td",{parentName:"tr",align:null},"ch-msg1"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"agent1.sinks"),(0,r.kt)("td",{parentName:"tr",align:null},"used sink"),(0,r.kt)("td",{parentName:"tr",align:null},"pulsar-sink-msg1"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"|"),(0,r.kt)("h3",{id:"sources-configuration"},"sources Configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"agent1.sources.tcp-source.channels"),(0,r.kt)("td",{parentName:"tr",align:null},"Define the channel used in the source"),(0,r.kt)("td",{parentName:"tr",align:null},"ch-msg1"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"agent1.sources.tcp-source.host"),(0,r.kt)("td",{parentName:"tr",align:null},"tcp ip binding and listening"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0.0.0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"agent1.sources.tcp-source.port"),(0,r.kt)("td",{parentName:"tr",align:null},"tcp port binding"),(0,r.kt)("td",{parentName:"tr",align:null},"10081"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"channel-configuration"},"channel Configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"agent1.channels.ch-msg1.type"),(0,r.kt)("td",{parentName:"tr",align:null},"memory channel type"),(0,r.kt)("td",{parentName:"tr",align:null},"memory"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"agent1.channels.ch-msg2.type"),(0,r.kt)("td",{parentName:"tr",align:null},"file channel type"),(0,r.kt)("td",{parentName:"tr",align:null},"file"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"sink-configuration"},"sink Configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"agent1.sinks.pulsar-sink-msg1.channel"),(0,r.kt)("td",{parentName:"tr",align:null},"The upstream channel name of the sink"),(0,r.kt)("td",{parentName:"tr",align:null},"ch-msg1"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"agent1.sinks.pulsar-sink-msg1.type"),(0,r.kt)("td",{parentName:"tr",align:null},"The sink class is implemented, where the message pushes data to the pulsar cluster"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.inlong.audit.sink.PulsarSink"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"agent1.sinks.pulsar-sink-msg1.pulsar_server_url"),(0,r.kt)("td",{parentName:"tr",align:null},"pulsar broker"),(0,r.kt)("td",{parentName:"tr",align:null},"pulsar://localhost:6650"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"agent1.sinks.pulsar-sink-msg1.topic"),(0,r.kt)("td",{parentName:"tr",align:null},"pulsar topic"),(0,r.kt)("td",{parentName:"tr",align:null},"persistent://public/Default value/inlong-audit"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"agent1.sinks.pulsar-sink-msg1.enable_token_auth"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether security certification is required"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"agent1.sinks.pulsar-sink-msg1.auth_token"),(0,r.kt)("td",{parentName:"tr",align:null},"pulsar authentication token"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"audit-store-storage-service-configuration-applicationproperties"},"Audit-store storage service configuration (",(0,r.kt)("inlineCode",{parentName:"h2"},"application.properties"),")"),(0,r.kt)("h3",{id:"mq-configuration"},"MQ configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"audit.config.proxy.type"),(0,r.kt)("td",{parentName:"tr",align:null},"MQ type"),(0,r.kt)("td",{parentName:"tr",align:null},"pulsar"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"audit.pulsar.server.url"),(0,r.kt)("td",{parentName:"tr",align:null},"pulsar broker"),(0,r.kt)("td",{parentName:"tr",align:null},"pulsar://127.0.0.1:6650"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"audit.pulsar.topic"),(0,r.kt)("td",{parentName:"tr",align:null},"pulsar topic"),(0,r.kt)("td",{parentName:"tr",align:null},"persistent://public/Default value/inlong-audit"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"audit.pulsar.consumer.sub.name"),(0,r.kt)("td",{parentName:"tr",align:null},"consumer"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-audit-subscription"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"audit.pulsar.enable.auth"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether security certification is required"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"audit.pulsar.token"),(0,r.kt)("td",{parentName:"tr",align:null},"pulsar authentication token"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"db-configuration"},"DB configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.datasource.druid.driver-class-name"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the driver type"),(0,r.kt)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.Driver"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.datasource.druid.url"),(0,r.kt)("td",{parentName:"tr",align:null},"jdbc URL"),(0,r.kt)("td",{parentName:"tr",align:null},"jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL&allowPublicKeyRetrieval=true"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.datasource.druid.username"),(0,r.kt)("td",{parentName:"tr",align:null},"account name"),(0,r.kt)("td",{parentName:"tr",align:null},"root"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.datasource.druid.password"),(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"elasticsearch-configuration"},"ElasticSearch configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elasticsearch.host"),(0,r.kt)("td",{parentName:"tr",align:null},"broker"),(0,r.kt)("td",{parentName:"tr",align:null},"127.0.0.1"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elasticsearch.port"),(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},"9200"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elasticsearch.authEnable"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether security certification is required"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elasticsearch.username"),(0,r.kt)("td",{parentName:"tr",align:null},"account name"),(0,r.kt)("td",{parentName:"tr",align:null},"elastic"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elasticsearch.password"),(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elasticsearch.indexDeleteDay"),(0,r.kt)("td",{parentName:"tr",align:null},"Index retention time, days"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elasticsearch.auditIdSet"),(0,r.kt)("td",{parentName:"tr",align:null},"List of audit IDs that are allowed to write"),(0,r.kt)("td",{parentName:"tr",align:null},"1,2"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"clickhouse-configuration"},"clickhouse configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clickhouse.driver"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the driver type"),(0,r.kt)("td",{parentName:"tr",align:null},"ru.yandex.clickhouse.ClickHouseDriver"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clickhouse.url"),(0,r.kt)("td",{parentName:"tr",align:null},"clickhouse URL"),(0,r.kt)("td",{parentName:"tr",align:null},"jdbc:clickhouse://127.0.0.1:8123/Default value"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clickhouse.username"),(0,r.kt)("td",{parentName:"tr",align:null},"account name"),(0,r.kt)("td",{parentName:"tr",align:null},"Default value"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clickhouse.password"),(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"Default value"),(0,r.kt)("td",{parentName:"tr",align:null})))))}k.isMDXComponent=!0}}]);