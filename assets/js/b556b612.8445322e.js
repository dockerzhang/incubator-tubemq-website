"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[85552],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Deployment"},o=void 0,l={unversionedId:"modules/manager/quick_start",id:"version-1.3.0/modules/manager/quick_start",title:"Deployment",description:"Environment Requirements",source:"@site/versioned_docs/version-1.3.0/modules/manager/quick_start.md",sourceDirName:"modules/manager",slug:"/modules/manager/quick_start",permalink:"/docs/1.3.0/modules/manager/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.3.0/modules/manager/quick_start.md",tags:[],version:"1.3.0",frontMatter:{title:"Deployment"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/1.3.0/modules/manager/overview"},next:{title:"Overview",permalink:"/docs/1.3.0/modules/dashboard/overview"}},s={},p=[{value:"Environment Requirements",id:"environment-requirements",level:2},{value:"Add Dependencies",id:"add-dependencies",level:2},{value:"Update Configuration",id:"update-configuration",level:2},{value:"Configure the Flink Plugin",id:"configure-the-flink-plugin",level:2},{value:"Start Application",id:"start-application",level:2},{value:"Register MQ Cluster",id:"register-mq-cluster",level:2},{value:"Pulsar Cluster",id:"pulsar-cluster",level:3},{value:"TubeMQ Cluster",id:"tubemq-cluster",level:3},{value:"(Optional) Enable OpenAPI Authentication",id:"optional-enable-openapi-authentication",level:2},{value:"Enable Authentication",id:"enable-authentication",level:3},{value:"Authentication Configuration",id:"authentication-configuration",level:3},{value:"Authentication Key Generation",id:"authentication-key-generation",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install and start MySQL 5.7+")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"initialize database\nthere is ",(0,r.kt)("inlineCode",{parentName:"p"},"sql/apache_inlong_manager.sql")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"inlong-manager")," directory, load this file through the\nfollowing command to complete the initialization of the table structure and basic data"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# initialize database\uff1a\nmysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_manager.sql\n")))),(0,r.kt)("h2",{id:"add-dependencies"},"Add Dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download Sort ",(0,r.kt)("a",{parentName:"li",href:"https://inlong.apache.org/download/main"},"Connector Binary file"),", and unzip it into ",(0,r.kt)("inlineCode",{parentName:"li"},"inlong-sort/connectors")," directory."),(0,r.kt)("li",{parentName:"ul"},"If using MySQL database, please download ",(0,r.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar"},"mysql-connector-java-8.0.27.jar")," and put it in the ",(0,r.kt)("inlineCode",{parentName:"li"},"lib/")," directory."),(0,r.kt)("li",{parentName:"ul"},"If you use PostgreSQL database, you don't need to download additional dependencies.")),(0,r.kt)("h2",{id:"update-configuration"},"Update Configuration"),(0,r.kt)("p",null,"Go to the decompressed ",(0,r.kt)("inlineCode",{parentName:"p"},"inlong-manager")," directory and modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/application.properties")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# manager service port number\nserver.port=8083\n\n# The configuration file used is dev\nspring.profiles.active=dev\n")),(0,r.kt)("p",null,"The dev configuration is specified above, then modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/application-dev.properties")," file:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If test or prod is specified, modify the corresponding application-xxx.properties file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"spring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true&serverTimezone=GMT%2b8\nspring.datasource.druid.username=root\nspring.datasource.druid.password=inlong\n")),(0,r.kt)("h2",{id:"configure-the-flink-plugin"},"Configure the Flink Plugin"),(0,r.kt)("p",null,"The InLong Manager can start the Sort task, you need to configure the Flink environment first. The configuration file is ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins/flink-sort-plugin.properties"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# Flink host split by coma if more than one host, such as 'host1,host2'\nflink.rest.address=127.0.0.1\n# Flink port\nflink.rest.port=8081\n# Flink job manager port\nflink.jobmanager.port=6123\n# InLong Audit Proxy Address\nmetrics.audit.proxy.hosts=127.0.0.1:10081\n")),(0,r.kt)("h2",{id:"start-application"},"Start Application"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bash +x bin/startup.sh\n")),(0,r.kt)("h2",{id:"register-mq-cluster"},"Register MQ Cluster"),(0,r.kt)("h3",{id:"pulsar-cluster"},"Pulsar Cluster"),(0,r.kt)("p",null,"If you use Pulsar as the message queue for data cache, you need to add its configuration to InLong-Manager:"),(0,r.kt)("p",null,"Open the Inlong-Dashboard page (the default is ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1"},"http://127.0.0.1"),"), and select to add a Pulsar cluster on the ","[Clusters]"," tab:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4946).Z,width:"840",height:"400"})),(0,r.kt)("p",null,"Click the ","[Create]"," button, and fill in the required information such as cluster name, cluster tag, responsible person, AdminUrl, ServiceUrl and default tenant in the pop-up box to save."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: ","[Cluster Tag]"," is a logical concept. Tags with the same name will be regarded as the same cluster."),(0,r.kt)("p",{parentName:"blockquote"},"For example, the DataProxy cluster and the Pulsar cluster with the same cluster tag belong to the same cluster.")),(0,r.kt)("p",null,"Fill in the example:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(97395).Z,width:"517",height:"564"})),(0,r.kt)("h3",{id:"tubemq-cluster"},"TubeMQ Cluster"),(0,r.kt)("p",null,"If you use InLong TubeMQ as the message queue for data cache, you need to add its configuration to InLong-Manager:"),(0,r.kt)("p",null,"Similar to the above entry for adding a Pulsar cluster, the filling example is as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(52708).Z,width:"518",height:"464"})),(0,r.kt)("h2",{id:"optional-enable-openapi-authentication"},"(Optional) Enable OpenAPI Authentication"),(0,r.kt)("h3",{id:"enable-authentication"},"Enable Authentication"),(0,r.kt)("p",null,"Manager supports the option to authenticate client component access to its open APIs. To enable authentication modify ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/application.properties"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# Manager open api authentication enabled\nopenapi.auth.enabled=true\n")),(0,r.kt)("h3",{id:"authentication-configuration"},"Authentication Configuration"),(0,r.kt)("p",null,"Components that access manager must be authenticated by secret id and secret key if enabled, for example (please configure user's own instead of the example) :"),(0,r.kt)("p",null,"Modify ",(0,r.kt)("inlineCode",{parentName:"p"},"agent.properties")," in agent's conf directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"agent.manager.auth.secretId=admin\nagent.manager.auth.secretKey=87haw3VYTPqK5fK0\n")),(0,r.kt)("p",null,"Modify ",(0,r.kt)("inlineCode",{parentName:"p"},"common.properties")," in dataproxy's conf directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"manager.auth.secretId=admin\nmanager.auth.secretKey=87haw3VYTPqK5fK0\n")),(0,r.kt)("h3",{id:"authentication-key-generation"},"Authentication Key Generation"),(0,r.kt)("p",null,"Admin user can log in inlong dashboard to allocate secret ids and keys: ",(0,r.kt)("strong",{parentName:"p"},"System->User->Create"),"."))}d.isMDXComponent=!0},4946:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pulsar_cluster-dbe1c90aae6099260bf9fb3e4cde689a.png"},97395:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pulsar_cluster_save-d4ad1df3102d20dde714cb9a703a498b.png"},52708:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tube_cluster_save-9aa455895f5cd7aa5d3473fe6dab82f1.png"}}]);