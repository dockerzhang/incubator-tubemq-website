"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[43271],{3905:(t,a,e)=>{e.d(a,{Zo:()=>k,kt:()=>N});var n=e(67294);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function u(t,a){if(null==t)return{};var e,n,l=function(t,a){if(null==t)return{};var e,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(l[e]=t[e]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var p=n.createContext({}),d=function(t){var a=n.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},k=function(t){var a=d(t.components);return n.createElement(p.Provider,{value:a},t.children)},m="mdxType",o={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(t,a){var e=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,k=u(t,["components","mdxType","originalType","parentName"]),m=d(e),s=l,N=m["".concat(p,".").concat(s)]||m[s]||o[s]||r;return e?n.createElement(N,i(i({ref:a},k),{},{components:e})):n.createElement(N,i({ref:a},k))}));function N(t,a){var e=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=e.length,i=new Array(r);i[0]=s;var u={};for(var p in a)hasOwnProperty.call(a,p)&&(u[p]=a[p]);u.originalType=t,u[m]="string"==typeof t?t:l,i[1]=u;for(var d=2;d<r;d++)i[d]=e[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}s.displayName="MDXCreateElement"},23801:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>u,toc:()=>d});var n=e(87462),l=(e(67294),e(3905));const r={title:"\u53c2\u6570\u914d\u7f6e",sidebar_position:3},i=void 0,u={unversionedId:"modules/audit/configure",id:"version-1.12.0/modules/audit/configure",title:"\u53c2\u6570\u914d\u7f6e",description:"\u6982\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.12.0/modules/audit/configure.md",sourceDirName:"modules/audit",slug:"/modules/audit/configure",permalink:"/zh-CN/docs/modules/audit/configure",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.12.0/modules/audit/configure.md",tags:[],version:"1.12.0",sidebarPosition:3,frontMatter:{title:"\u53c2\u6570\u914d\u7f6e",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/modules/audit/overview"},next:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/modules/audit/quick_start"}},p={},d=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u5ba1\u8ba1\u4ee3\u7406\u5c42 audit-proxy source-channel-sink \u7ba1\u9053\u914d\u7f6e\uff08audit-proxy-{tube|pulsar|kafka}.conf\uff09",id:"\u5ba1\u8ba1\u4ee3\u7406\u5c42-audit-proxy-source-channel-sink-\u7ba1\u9053\u914d\u7f6eaudit-proxy-tubepulsarkafkaconf",level:2},{value:"\u901a\u7528\u8bbe\u7f6e",id:"\u901a\u7528\u8bbe\u7f6e",level:3},{value:"sources \u76f8\u5173\u8bbe\u7f6e",id:"sources-\u76f8\u5173\u8bbe\u7f6e",level:3},{value:"channel \u76f8\u5173\u914d\u7f6e",id:"channel-\u76f8\u5173\u914d\u7f6e",level:3},{value:"sink \u76f8\u5173\u914d\u7f6e",id:"sink-\u76f8\u5173\u914d\u7f6e",level:3},{value:"\u5ba1\u8ba1\u5b58\u50a8\u670d\u52a1 audit-store \u914d\u7f6e <code>application.properties</code>",id:"\u5ba1\u8ba1\u5b58\u50a8\u670d\u52a1-audit-store-\u914d\u7f6e-applicationproperties",level:2},{value:"MQ\u914d\u7f6e",id:"mq\u914d\u7f6e",level:3},{value:"DB \u76f8\u5173\u8bbe\u7f6e",id:"db-\u76f8\u5173\u8bbe\u7f6e",level:3},{value:"ElasticSearch \u914d\u7f6e",id:"elasticsearch-\u914d\u7f6e",level:3},{value:"clickhouse \u76f8\u5173\u914d\u7f6e",id:"clickhouse-\u76f8\u5173\u914d\u7f6e",level:3}],k={toc:d},m="wrapper";function o(t){let{components:a,...e}=t;return(0,l.kt)(m,(0,n.Z)({},k,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,l.kt)("p",null,"\u5ba1\u8ba1\u4ee3\u7406\u670d\u52a1 audit-proxy \u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"audit-proxy-{tube|pulsar|kafka}.conf"),"\u4e2d\u8bbe\u7f6e\u3002 \u5ba1\u8ba1\u5b58\u50a8\u670d\u52a1 audit-store \u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"application.properties"),"\u4e2d\u8bbe\u7f6e\u3002"),(0,l.kt)("h2",{id:"\u5ba1\u8ba1\u4ee3\u7406\u5c42-audit-proxy-source-channel-sink-\u7ba1\u9053\u914d\u7f6eaudit-proxy-tubepulsarkafkaconf"},"\u5ba1\u8ba1\u4ee3\u7406\u5c42 audit-proxy source-channel-sink \u7ba1\u9053\u914d\u7f6e\uff08audit-proxy-{tube|pulsar|kafka}.conf\uff09"),(0,l.kt)("h3",{id:"\u901a\u7528\u8bbe\u7f6e"},"\u901a\u7528\u8bbe\u7f6e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"agent1.sources"),(0,l.kt)("td",{parentName:"tr",align:null},"source\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},"tcp-source"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"agent1.channels"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u7684channel"),(0,l.kt)("td",{parentName:"tr",align:null},"ch-msg1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"agent1.sinks"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u7684sink"),(0,l.kt)("td",{parentName:"tr",align:null},"pulsar-sink-msg1"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"|"),(0,l.kt)("h3",{id:"sources-\u76f8\u5173\u8bbe\u7f6e"},"sources \u76f8\u5173\u8bbe\u7f6e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"agent1.sources.tcp-source.channels"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49source\u4e2d\u4f7f\u7528\u5230\u7684channel"),(0,l.kt)("td",{parentName:"tr",align:null},"ch-msg1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"agent1.sources.tcp-source.host"),(0,l.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1ip"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0.0.0"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"agent1.sources.tcp-source.port"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76d1\u542c\u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},"10081"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"channel-\u76f8\u5173\u914d\u7f6e"},"channel \u76f8\u5173\u914d\u7f6e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"agent1.channels.ch-msg1.type"),(0,l.kt)("td",{parentName:"tr",align:null},"memory channel\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},"memory"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"agent1.channels.ch-msg2.type"),(0,l.kt)("td",{parentName:"tr",align:null},"file channel\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},"file"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"sink-\u76f8\u5173\u914d\u7f6e"},"sink \u76f8\u5173\u914d\u7f6e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"agent1.sinks.pulsar-sink-msg1.channel"),(0,l.kt)("td",{parentName:"tr",align:null},"sink\u7684\u4e0a\u6e38channel\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"ch-msg1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"agent1.sinks.pulsar-sink-msg1.type"),(0,l.kt)("td",{parentName:"tr",align:null},"sink\u7c7b\u5b9e\u73b0"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.inlong.audit.sink.PulsarSink"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"agent1.sinks.pulsar-sink-msg1.pulsar_server_url"),(0,l.kt)("td",{parentName:"tr",align:null},"pulsar\u96c6\u7fa4broker\u8282\u70b9"),(0,l.kt)("td",{parentName:"tr",align:null},"pulsar://localhost:6650"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"agent1.sinks.pulsar-sink-msg1.topic"),(0,l.kt)("td",{parentName:"tr",align:null},"pulsar\u96c6\u7fa4topic"),(0,l.kt)("td",{parentName:"tr",align:null},"persistent://public/default/inlong-audit"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"agent1.sinks.pulsar-sink-msg1.enable_token_auth"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u9700\u8981\u5b89\u5168\u8ba4\u8bc1"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"agent1.sinks.pulsar-sink-msg1.auth_token"),(0,l.kt)("td",{parentName:"tr",align:null},"pulsar\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"\u5ba1\u8ba1\u5b58\u50a8\u670d\u52a1-audit-store-\u914d\u7f6e-applicationproperties"},"\u5ba1\u8ba1\u5b58\u50a8\u670d\u52a1 audit-store \u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"h2"},"application.properties")),(0,l.kt)("h3",{id:"mq\u914d\u7f6e"},"MQ\u914d\u7f6e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"audit.config.proxy.type"),(0,l.kt)("td",{parentName:"tr",align:null},"MQ\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},"pulsar"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"audit.pulsar.server.url"),(0,l.kt)("td",{parentName:"tr",align:null},"pulsar\u7684\u96c6\u7fa4\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null},"pulsar://127.0.0.1:6650"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"audit.pulsar.topic"),(0,l.kt)("td",{parentName:"tr",align:null},"pulsar topic"),(0,l.kt)("td",{parentName:"tr",align:null},"persistent://public/default/inlong-audit"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"audit.pulsar.consumer.sub.name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605\u7ec4"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-audit-subscription"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"audit.pulsar.enable.auth"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u9700\u8981\u5b89\u5168\u8ba4\u8bc1"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"audit.pulsar.token"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba4\u8bc1token"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"db-\u76f8\u5173\u8bbe\u7f6e"},"DB \u76f8\u5173\u8bbe\u7f6e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spring.datasource.druid.driver-class-name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6eDriver\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.Driver"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spring.datasource.druid.url"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc\u7684URL"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL&allowPublicKeyRetrieval=true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spring.datasource.druid.username"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d26\u53f7\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"root"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spring.datasource.druid.password"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"elasticsearch-\u914d\u7f6e"},"ElasticSearch \u914d\u7f6e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"elasticsearch.host"),(0,l.kt)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null},"127.0.0.1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"elasticsearch.port"),(0,l.kt)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},"9200"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"elasticsearch.authEnable"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u8ba4\u8bc1"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"elasticsearch.username"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d26\u53f7\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"elastic"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"elasticsearch.password"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"elasticsearch.indexDeleteDay"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7d22\u5f15\u4fdd\u5b58\u65f6\u95f4\uff0c\u5929"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"elasticsearch.auditIdSet"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u5199\u5165\u7684\u5ba1\u8ba1ID\u5217\u8868"),(0,l.kt)("td",{parentName:"tr",align:null},"1,2"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"clickhouse-\u76f8\u5173\u914d\u7f6e"},"clickhouse \u76f8\u5173\u914d\u7f6e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse.driver"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6eDriver\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},"ru.yandex.clickhouse.ClickHouseDriver"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse.url"),(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse\u7684URL"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:clickhouse://127.0.0.1:8123/default"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse.username"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d26\u53f7\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"default"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse.password"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,l.kt)("td",{parentName:"tr",align:null},"default"),(0,l.kt)("td",{parentName:"tr",align:null})))))}o.isMDXComponent=!0}}]);