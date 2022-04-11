"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8758],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(k,i(i({ref:e},c),{},{components:n})):r.createElement(k,i({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25072:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"Deployment",sidebar_position:2},p=void 0,s={unversionedId:"modules/sort/quick_start",id:"modules/sort/quick_start",title:"Deployment",description:"Set up flink environment",source:"@site/docs/modules/sort/quick_start.md",sourceDirName:"modules/sort",slug:"/modules/sort/quick_start",permalink:"/docs/next/modules/sort/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/modules/sort/quick_start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Deployment",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/next/modules/sort/overview"},next:{title:"Dataflow Example",permalink:"/docs/next/modules/sort/dataflow_example"}},c={},u=[{value:"Set up flink environment",id:"set-up-flink-environment",level:2},{value:"Prepare installation files",id:"prepare-installation-files",level:2},{value:"Starting an inlong-sort application",id:"starting-an-inlong-sort-application",level:2},{value:"Necessary configurations",id:"necessary-configurations",level:2},{value:"All configurations",id:"all-configurations",level:2}],m={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"set-up-flink-environment"},"Set up flink environment"),(0,l.kt)("p",null,"Currently inlong-sort is based on flink, before you run an inlong-sort application,\nyou need to set up ",(0,l.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/overview/"},"flink environment"),"."),(0,l.kt)("p",null,"Currently, inlong-sort relys on flink-1.13.5. Chose ",(0,l.kt)("inlineCode",{parentName:"p"},"flink-1.13.5-bin-scala_2.11.tgz")," when downloading package."),(0,l.kt)("p",null,"Once your flink environment is set up, you can visit web ui of flink, whose address is stored in ",(0,l.kt)("inlineCode",{parentName:"p"},"/${your_flink_path}/conf/masters"),"."),(0,l.kt)("h2",{id:"prepare-installation-files"},"Prepare installation files"),(0,l.kt)("p",null,"All installation files at ",(0,l.kt)("inlineCode",{parentName:"p"},"inlong-sort")," directory."),(0,l.kt)("h2",{id:"starting-an-inlong-sort-application"},"Starting an inlong-sort application"),(0,l.kt)("p",null,"Now you can submit job to flink with the jar compiled, refer to ",(0,l.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/cli/#submitting-a-job"},"how to submit job to flink"),"."),(0,l.kt)("p",null,"Example\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./bin/flink run -c org.apache.inlong.sort.flink.Entrance inlong-sort/sort-[version].jar \\\n--cluster-id debezium2hive --dataflow.info.file /YOUR_DATAFLOW_INFO_DIR/debezium-to-hive.json \\\n--source.type pulsar --sink.type hive --sink.hive.rolling-policy.rollover-interval 60000 \\\n--metrics.audit.proxy.hosts 127.0.0.1:10081 --sink.hive.rolling-policy.check-interval 30000\n")),(0,l.kt)("p",null,"Notice\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"-c org.apache.inlong.sort.flink.Entrance")," is the main class name")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"inlong-sort/sort-[version].jar")," is the compiled jar"))),(0,l.kt)("h2",{id:"necessary-configurations"},"Necessary configurations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--cluster-id ")," represent a specified inlong-sort application, same as the configuration of ",(0,l.kt)("inlineCode",{parentName:"li"},"sort.appName")," in inlong-manager"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--dataflow.info.file")," dataflow configuration file path"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--source.type"),' source of the application, currently "pulsar" is supported'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--sink.type"),' sink of the application, currently "clickhouse", "hive", "iceberg", "kafka" are supported'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--metrics.audit.proxy.hosts")," audit proxy host address for reporting audit metrics")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"--cluster-id debezium2kafka-canal --dataflow.info.file /YOUR_DATAFLOW_INFO_DIR/debezium-to-kafka-canal.json \\\n--source.type pulsar --sink.type kafka\n")),(0,l.kt)("h2",{id:"all-configurations"},"All configurations"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"necessary"),(0,l.kt)("th",{parentName:"tr",align:"center"},"default value"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cluster-id"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"center"},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"used to represent a specified inlong-sort application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source.type"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"center"},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},'source of the application, currently "pulsar" is supported')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.type"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"center"},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},'sink of the application, currently "clickhouse", "hive", "iceberg" and "kafka" are supported')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source.parallelism"),(0,l.kt)("td",{parentName:"tr",align:"center"},"N"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"parallelism of source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deserialization.parallelism"),(0,l.kt)("td",{parentName:"tr",align:"center"},"N"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"parallelism of deserialization")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transformation.parallelism"),(0,l.kt)("td",{parentName:"tr",align:"center"},"N"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"parallelism of transformation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.parallelism"),(0,l.kt)("td",{parentName:"tr",align:"center"},"N"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"parallelism of sink")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"checkpoint.interval"),(0,l.kt)("td",{parentName:"tr",align:"center"},"N"),(0,l.kt)("td",{parentName:"tr",align:"center"},"600000"),(0,l.kt)("td",{parentName:"tr",align:null},"checkpoint interval\uff0cunit: ms")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"min.pause.between.checkpoints.ms"),(0,l.kt)("td",{parentName:"tr",align:"center"},"N"),(0,l.kt)("td",{parentName:"tr",align:"center"},"500"),(0,l.kt)("td",{parentName:"tr",align:null},"the minimal checkpoint interval, unit\uff1ams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"checkpoint.timeout.ms"),(0,l.kt)("td",{parentName:"tr",align:"center"},"N"),(0,l.kt)("td",{parentName:"tr",align:"center"},"600000"),(0,l.kt)("td",{parentName:"tr",align:null},"checkpoint timeout\uff0cunit: ms")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.field.type.string.nullable"),(0,l.kt)("td",{parentName:"tr",align:"center"},"N"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the sink field of string type can be null or empty")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.field.type.int.nullable"),(0,l.kt)("td",{parentName:"tr",align:"center"},"N"),(0,l.kt)("td",{parentName:"tr",align:"center"},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the sink field of string type can be null or empty")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.field.type.short.nullable"),(0,l.kt)("td",{parentName:"tr",align:"center"},"N"),(0,l.kt)("td",{parentName:"tr",align:"center"},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the sink field of string type can be null or empty")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.field.type.long.nullable"),(0,l.kt)("td",{parentName:"tr",align:"center"},"N"),(0,l.kt)("td",{parentName:"tr",align:"center"},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the sink field of string type can be null or empty")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.hive.rolling-policy.file-size"),(0,l.kt)("td",{parentName:"tr",align:"center"},"N"),(0,l.kt)("td",{parentName:"tr",align:"center"},"134217728"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum part file size before rolling\uff0cunit: byte")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.hive.rolling-policy.rollover-interval"),(0,l.kt)("td",{parentName:"tr",align:"center"},"N"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1800000"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum time duration a part file can stay open before rolling(by default long enough to avoid too many small files). The frequency at which this is checked is controlled by the 'sink.rolling-policy.check-interval' option. Unit: ms")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.hive.rolling-policy.check-interval"),(0,l.kt)("td",{parentName:"tr",align:"center"},"N"),(0,l.kt)("td",{parentName:"tr",align:"center"},"60000"),(0,l.kt)("td",{parentName:"tr",align:null},"The interval for checking time based rolling policies. This controls the frequency to check whether a part file should rollover based on 'sink.rolling-policy.rollover-interval'. Unit: ms")))))}d.isMDXComponent=!0}}]);