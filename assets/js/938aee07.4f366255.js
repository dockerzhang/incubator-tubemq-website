"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[25970],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=u(a),g=r,k=m["".concat(p,".").concat(g)]||m[g]||s[g]||l;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},86358:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={title:"Configuration",sidebar_position:3},i=void 0,o={unversionedId:"modules/manager/configure",id:"version-1.12.0/modules/manager/configure",title:"Configuration",description:"Basic Configuration",source:"@site/versioned_docs/version-1.12.0/modules/manager/configure.md",sourceDirName:"modules/manager",slug:"/modules/manager/configure",permalink:"/docs/modules/manager/configure",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.12.0/modules/manager/configure.md",tags:[],version:"1.12.0",sidebarPosition:3,frontMatter:{title:"Configuration",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/modules/manager/quick_start"},next:{title:"Overview",permalink:"/docs/modules/dashboard/overview"}},p={},u=[{value:"Basic Configuration",id:"basic-configuration",level:2},{value:"Log Configuration",id:"log-configuration",level:2},{value:"Datasource Configuration",id:"datasource-configuration",level:2},{value:"Audit Configuration",id:"audit-configuration",level:2}],d={toc:u},m="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"basic-configuration"},"Basic Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"application.properties")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"server.host"),(0,r.kt)("td",{parentName:"tr",align:null},"server address"),(0,r.kt)("td",{parentName:"tr",align:null},"127.0.0.1"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"server.port"),(0,r.kt)("td",{parentName:"tr",align:null},"server port"),(0,r.kt)("td",{parentName:"tr",align:null},"8083"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"default.admin.user"),(0,r.kt)("td",{parentName:"tr",align:null},"usename"),(0,r.kt)("td",{parentName:"tr",align:null},"admin"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"default.admin.password"),(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"server.servlet.context-path"),(0,r.kt)("td",{parentName:"tr",align:null},"context path"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Form part of the url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.application.name"),(0,r.kt)("td",{parentName:"tr",align:null},"server name"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.profiles.active"),(0,r.kt)("td",{parentName:"tr",align:null},"dev/prod/test"),(0,r.kt)("td",{parentName:"tr",align:null},"dev"),(0,r.kt)("td",{parentName:"tr",align:null},"Used to differentiate between different environments")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.mvc.pathmatch.matching-strategy"),(0,r.kt)("td",{parentName:"tr",align:null},"ANT_PATH_MATCHER/PATH_PATTERN_PARSER"),(0,r.kt)("td",{parentName:"tr",align:null},"ANT_PATH_MATCHER"),(0,r.kt)("td",{parentName:"tr",align:null},"Path Matching Strategy of MVC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.jackson.serialization.write-dates-as-timestamps"),(0,r.kt)("td",{parentName:"tr",align:null},"true/false"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to convert date to timestamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.jackson.date-format"),(0,r.kt)("td",{parentName:"tr",align:null},"Date Format"),(0,r.kt)("td",{parentName:"tr",align:null},"yyyy-MM-dd HH:mm:ss"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.jackson.time-zone"),(0,r.kt)("td",{parentName:"tr",align:null},"Default Time Zone"),(0,r.kt)("td",{parentName:"tr",align:null},"GMT+8"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mybatis.mapper-locations"),(0,r.kt)("td",{parentName:"tr",align:null},"Path of mapper file"),(0,r.kt)("td",{parentName:"tr",align:null},"classpath:mappers/*.xml"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mybatis.type-aliases-package"),(0,r.kt)("td",{parentName:"tr",align:null},"Path of entity class"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.inlong.manager.dao.entity"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mybatis.configuration.map-underscore-to-camel-case"),(0,r.kt)("td",{parentName:"tr",align:null},"true/false"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to map the underlined table field to the entity class attribute of hump type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pagehelper.helperDialect"),(0,r.kt)("td",{parentName:"tr",align:null},"Database Type"),(0,r.kt)("td",{parentName:"tr",align:null},"mysql"),(0,r.kt)("td",{parentName:"tr",align:null},"Database type used to specify paging")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pagehelper.reasonable"),(0,r.kt)("td",{parentName:"tr",align:null},"true/false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether paging is reasonable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pagehelper.params"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported parameter configuration"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Used to support parameter configuration, such as pagehelper. params=count=countSql")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common.http-client.maxTotal"),(0,r.kt)("td",{parentName:"tr",align:null},"Total connections"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of connections in use at the same time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common.http-client.defaultMaxPerRoute"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum number of connections being used by the same host: port at the same time"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"The default number of connections per route, and the number of requests that a service can receive in parallel each time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common.http-client.validateAfterInactivity"),(0,r.kt)("td",{parentName:"tr",align:null},"Check time after inactive connection"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When obtaining a connection from the connection pool, how long after the connection is inactive should it be verified")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common.http-client.connectionTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection establishment timeout"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"In Milliseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common.http-client.readTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Data transmission timeout"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"In Milliseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common.http-client.connectionRequestTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Get connection timeout"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"In Milliseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlong.auth.type"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom Authentication Configuration"),(0,r.kt)("td",{parentName:"tr",align:null},"default"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlong.encrypt.version"),(0,r.kt)("td",{parentName:"tr",align:null},"Encrypted version"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlong.encrypt.key.value1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openapi.auth.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"true/false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable openApi authentication")))),(0,r.kt)("h2",{id:"log-configuration"},"Log Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"application-dev.properties, application-prod.properties, application-test.properties")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logging.level.{effective_area}"),(0,r.kt)("td",{parentName:"tr",align:null},"info/warn/error"),(0,r.kt)("td",{parentName:"tr",align:null},"info"),(0,r.kt)("td",{parentName:"tr",align:null},"effective_ Area is the effective area at the log level. Root represents the entire project. It can also be set to a package name")))),(0,r.kt)("h2",{id:"datasource-configuration"},"Datasource Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"application-dev.properties, application-prod.properties, application-test.properties")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.datasource.druid.url"),(0,r.kt)("td",{parentName:"tr",align:null},"database url"),(0,r.kt)("td",{parentName:"tr",align:null},"jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true&serverTimezone=GMT%2b8"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.datasource.druid.username"),(0,r.kt)("td",{parentName:"tr",align:null},"database username"),(0,r.kt)("td",{parentName:"tr",align:null},"root"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.datasource.druid.password"),(0,r.kt)("td",{parentName:"tr",align:null},"database password"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.datasource.druid.driver-class-name"),(0,r.kt)("td",{parentName:"tr",align:null},"datasource driver class name"),(0,r.kt)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.Driver"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.datasource.druid.validationQuery"),(0,r.kt)("td",{parentName:"tr",align:null},"sql statement"),(0,r.kt)("td",{parentName:"tr",align:null},"SELECT 'x'"),(0,r.kt)("td",{parentName:"tr",align:null},"Verify whether the database is available through the sql statement when the system starts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.datasource.druid.initialSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Initialization size of database connection pool"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.datasource.druid.minIdle"),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum size of database connection pool"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.datasource.druid.maxActive"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum size of database connection pool"),(0,r.kt)("td",{parentName:"tr",align:null},"300"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.datasource.druid.maxWait"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum waiting time when getting a connection"),(0,r.kt)("td",{parentName:"tr",align:null},"600000"),(0,r.kt)("td",{parentName:"tr",align:null},"In milliseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.datasource.druid.minEvictableIdleTimeMillis"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum time that the connection remains idle without being evicted"),(0,r.kt)("td",{parentName:"tr",align:null},"3600000"),(0,r.kt)("td",{parentName:"tr",align:null},"In milliseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.datasource.druid.testWhileIdle"),(0,r.kt)("td",{parentName:"tr",align:null},"true/false"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable idle connection detection for recycling")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.datasource.druid.testOnBorrow"),(0,r.kt)("td",{parentName:"tr",align:null},"true/false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to detect connection availability when obtaining connections from the connection pool. Enabling the connection will have a certain impact on performance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.datasource.druid.testOnReturn"),(0,r.kt)("td",{parentName:"tr",align:null},"true/false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the connection availability is detected when the connection is released to the connection pool. Enabling the connection will have a certain impact on the performance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.datasource.druid.filters"),(0,r.kt)("td",{parentName:"tr",align:null},"stat,wall,log4j"),(0,r.kt)("td",{parentName:"tr",align:null},"stat,wall"),(0,r.kt)("td",{parentName:"tr",align:null},"Configure filters for monitoring statistics interception, stat:monitoring statistics, log4j:log, wall:defense against SQL injection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.datasource.druid.connectionProperties"),(0,r.kt)("td",{parentName:"tr",align:null},"datasource connection properties"),(0,r.kt)("td",{parentName:"tr",align:null},"druid.stat.mergeSql=true;druid.stat.slowSqlMillis=5000"),(0,r.kt)("td",{parentName:"tr",align:null},"Open the mergeSql function through the connectProperties property, Slow SQL records")))),(0,r.kt)("h2",{id:"audit-configuration"},"Audit Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"application-dev.properties, application-prod.properties, application-test.properties")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"audit.query.source"),(0,r.kt)("td",{parentName:"tr",align:null},"MYSQL/ELASTICSEARCH/CLICKHOUSE"),(0,r.kt)("td",{parentName:"tr",align:null},"MYSQL"),(0,r.kt)("td",{parentName:"tr",align:null},"Audit query source that decide what data source to query, currently only supports MYSQL, ELASTICSEARCH, CLICKHOUSE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"es.index.search.hostname"),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch hostname"),(0,r.kt)("td",{parentName:"tr",align:null},"127.0.0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch host split by coma if more than one host, such as 'host1,host2'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"es.index.search.port"),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch port"),(0,r.kt)("td",{parentName:"tr",align:null},"9200"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"es.auth.enable"),(0,r.kt)("td",{parentName:"tr",align:null},"true/false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch support authentication flag")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"es.auth.user"),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch user of authentication info"),(0,r.kt)("td",{parentName:"tr",align:null},"admin"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"es.auth.password"),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch password of authentication info"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"audit.ck.jdbcUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"ClickHouse jdbc url"),(0,r.kt)("td",{parentName:"tr",align:null},"jdbc:clickhouse://127.0.0.1:8123/apache_inlong_audit"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"audit.ck.username"),(0,r.kt)("td",{parentName:"tr",align:null},"ClickHouse usename"),(0,r.kt)("td",{parentName:"tr",align:null},"default"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"audit.ck.password"),(0,r.kt)("td",{parentName:"tr",align:null},"ClickHouse password"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);