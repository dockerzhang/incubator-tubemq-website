"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={title:"Standalone",sidebar_position:1},o=void 0,i={unversionedId:"deployment/standalone",id:"version-1.8.0/deployment/standalone",title:"Standalone",description:"Environment Requirements",source:"@site/versioned_docs/version-1.8.0/deployment/standalone.md",sourceDirName:"deployment",slug:"/deployment/standalone",permalink:"/docs/deployment/standalone",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.8.0/deployment/standalone.md",tags:[],version:"1.8.0",sidebarPosition:1,frontMatter:{title:"Standalone",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Pulsar Example",permalink:"/docs/quick_start/pulsar_example"},next:{title:"Docker",permalink:"/docs/deployment/docker"}},s={},c=[{value:"Environment Requirements",id:"environment-requirements",level:2},{value:"Prepare Message Queue",id:"prepare-message-queue",level:2},{value:"Download the Binary Package",id:"download-the-binary-package",level:2},{value:"DB Dependencies",id:"db-dependencies",level:2},{value:"Configure",id:"configure",level:2},{value:"Start",id:"start",level:2},{value:"Cluster Initialize",id:"cluster-initialize",level:2},{value:"Create Cluster Tag",id:"create-cluster-tag",level:3},{value:"Register Message Queue Cluster",id:"register-message-queue-cluster",level:3},{value:"Use",id:"use",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MySQL 5.7+"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/try-flink/local_installation/"},"Flink 1.13.5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+")),(0,r.kt)("h2",{id:"prepare-message-queue"},"Prepare Message Queue"),(0,r.kt)("p",null,"InLong Support the following Message Queue services now, ",(0,r.kt)("strong",{parentName:"p"},"you can choose one of them"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/modules/tubemq/quick_start"},"Apache InLong TubeMQ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/docs/2.8.x/getting-started-home/"},"Apache Pulsar 2.8.x")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kafka.apache.org/quickstart"},"Apache Kafka 2.x"))),(0,r.kt)("h2",{id:"download-the-binary-package"},"Download the Binary Package"),(0,r.kt)("p",null,"You can get binary package from ",(0,r.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"Download Page")," ,or you can build the InLong refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/quick_start/how_to_build"},"How to Build"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Extract ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-inlong-[version]-bin.tar.gz")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-inlong-[version]-sort-connectors.tar.gz"),", and make sure the ",(0,r.kt)("inlineCode",{parentName:"p"},"inlong-sort/connectors/")," directory contains ",(0,r.kt)("inlineCode",{parentName:"p"},"sort-connector-[type]-[version].jar"),".")),(0,r.kt)("h2",{id:"db-dependencies"},"DB Dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the backend database is MySQL, please download ",(0,r.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar"},"mysql-connector-java-8.0.27.jar")," and put it into the following directories:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"inlong-agent/lib/\ninlong-audit/lib/\ninlong-manager/lib/\ninlong-tubemq-manager/lib/\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the backend database is PostgreSQL, there's no need for additional dependencies.")),(0,r.kt)("h2",{id:"configure"},"Configure"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/inlong.conf"),", configure the parameters according to the actual situation, mainly include:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# local IP\nlocal_ip=\n# message queue: pulsar or kafka\nmq_type=pulsar\n# Configure Database, MySQL or PostgreSQL\nspring_datasource_hostname=\nspring_datasource_port=3306\nspring_datasource_username=root\nspring_datasource_password=inlong\n# the REST server address for Flink\nflink_rest_address=\n# the REST server Port for Flink\nflink_rest_port=8081\n")),(0,r.kt)("h2",{id:"start"},"Start"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bin/inlong-daemon start standalone\n")),(0,r.kt)("h2",{id:"cluster-initialize"},"Cluster Initialize"),(0,r.kt)("p",null,"When all containers are successfully started, you can access the Inlong dashboard address ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost"),", and use the following default account to log in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,r.kt)("h3",{id:"create-cluster-tag"},"Create Cluster Tag"),(0,r.kt)("p",null,"Click ","[Clusters]","->","[ClusterTags]","->","[Create]"," on the page to specify the cluster label name and person in charge:\n",(0,r.kt)("img",{src:n(40882).Z,width:"515",height:"328"})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Since each component reports the ClusterTags as ",(0,r.kt)("inlineCode",{parentName:"p"},"default_cluster")," by default, do not use other names.")),(0,r.kt)("h3",{id:"register-message-queue-cluster"},"Register Message Queue Cluster"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Option 1 : Apache Pulsar\nClick ","[Clusters]","->","[Clusters]","->","[Create]"," on the page to register Pulsar Cluster:\n",(0,r.kt)("img",{src:n(84306).Z,width:"646",height:"800"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Option 2 : Apache Kafka\nClick ","[Clusters]","->","[Clusters]","->","[Create]"," on the page to register Kafka Cluster:\n",(0,r.kt)("img",{src:n(82951).Z,width:"646",height:"609"})))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ClusterTags selects the newly created ",(0,r.kt)("inlineCode",{parentName:"p"},"default_cluster"),", and then configuring the Message Queue cluster info.")),(0,r.kt)("h2",{id:"use"},"Use"),(0,r.kt)("p",null,"You can refer ",(0,r.kt)("a",{parentName:"p",href:"/docs/quick_start/pulsar_example"},"Pulsar Example")," to create Data Stream."))}d.isMDXComponent=!0},40882:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create_cluster_tag-6a90b8b65f0e4d3259bbed710a5d50ef.png"},82951:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create_kafka_cluster-632ec9cd643d274f9621e2275a7bc13c.png"},84306:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create_pulsar_cluster-57792270c123117d0c57f3bc008bcd40.png"}}]);