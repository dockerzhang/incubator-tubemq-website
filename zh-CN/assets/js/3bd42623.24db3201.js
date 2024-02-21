"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[13018],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),g=a,d=u["".concat(p,".").concat(g)]||u[g]||m[g]||o;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8233:(e,n,t)=>{t.d(n,{Y:()=>r});const r={inLongVersion:"1.9.0"}},49793:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=t(87462),a=(t(67294),t(3905)),o=t(8233);const i={title:"\u793a\u4f8b",sidebar_position:1},l=void 0,p={unversionedId:"sdk/manager-sdk/example",id:"version-1.9.0/sdk/manager-sdk/example",title:"\u793a\u4f8b",description:"\u603b\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.9.0/sdk/manager-sdk/example.md",sourceDirName:"sdk/manager-sdk",slug:"/sdk/manager-sdk/example",permalink:"/zh-CN/docs/1.9.0/sdk/manager-sdk/example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.9.0/sdk/manager-sdk/example.md",tags:[],version:"1.9.0",sidebarPosition:1,frontMatter:{title:"\u793a\u4f8b",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Golang SDK",permalink:"/zh-CN/docs/1.9.0/sdk/dataproxy-sdk/go"},next:{title:"C++ SDK",permalink:"/zh-CN/docs/1.9.0/sdk/tubemq-sdk/cpp"}},c={},s=[{value:"\u603b\u89c8",id:"\u603b\u89c8",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2},{value:"\u53c2\u8003Demo",id:"\u53c2\u8003demo",level:3},{value:"Kafka2Hive",id:"kafka2hive",level:3},{value:"Binlog2Kafka",id:"binlog2kafka",level:3},{value:"\u5199\u5728\u6700\u540e",id:"\u5199\u5728\u6700\u540e",level:2}],u={toc:s},m="wrapper";function g(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,a.kt)("p",null,"Apache InLong Manager \u662f\u6574\u4e2a\u6570\u636e\u96c6\u6210\u5e73\u53f0\u9762\u5411\u7528\u6237\u7684\u7edf\u4e00\u7ba1\u7406\u5165\u53e3\u3002\u4e3a\u65b9\u4fbf\u7528\u6237\u4f7f\u7528\u5728\u65e0\u754c\u9762\u7684\u573a\u666f\u4e0b\u90e8\u7f72InLong group\u4efb\u52a1\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86Manager\u7684\u5ba2\u6237\u7aefSDK\u3002"),(0,a.kt)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u589e\u52a0 maven \u4f9d\u8d56",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>manager-client</artifactId>\n    <version>${o.Y.inLongVersion}</version>\n</dependency>\n`)))),(0,a.kt)("h2",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6211\u4eec\u4ee5\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\u7684\u65b9\u5f0f\u63d0\u4f9b\u4e86\u4e24\u4e2a\u5ba2\u6237\u7aef\u7528\u4f8b, \u4f60\u53ef\u4ee5\u66f4\u6362\u5176\u4e2d\u7684\u53c2\u6570\u5e76\u5728\u81ea\u5df1\u7684\u96c6\u7fa4\u4e0a\u5b9e\u8df5;"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u6211\u4eec\u63d0\u4f9b\u7684\u7528\u4f8b\u4e2d\uff0c\u9700\u8981",(0,a.kt)("strong",{parentName:"li"},"Apache Pulsar"),"\u53ca",(0,a.kt)("strong",{parentName:"li"},"Apache Flink"),"\u7684\u652f\u6301\u3002\u4f60\u53ef\u4ee5\u5728\u81ea\u5df1\u7684Inlong\u96c6\u7fa4\u4e0a\u8fd0\u884c\u4efb\u52a1, \u6216\u501f\u52a9\u7b2c\u4e09\u65b9\u5e73\u53f0\u63d0\u4f9b\u7684\u76f8\u5173\u670d\u52a1\u8fd0\u884c\u3002")),(0,a.kt)("h3",{id:"\u53c2\u8003demo"},"\u53c2\u8003Demo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Create client configuration\nClientConfiguration configuration = createClientConfig();\n// Init Inlong client\nInlongClient inlongClient = InlongClient.create(SERVICE_URL, configuration);\ntry {\n    // Create group conf\n    InlongGroupConf groupConf = createGroupConf();\n    // Init group resource by conf\n    InlongGroup group = inlongClient.forGroup(groupConf);\n    // Create stream conf\n    InlongStreamConf streamConf = createStreamConf();\n    // Create Stream builder \n    InlongStreamBuilder streamBuilder = group.createStream(streamConf);\n    // Create stream source\n    streamBuilder.source(createSource());\n    // Create stream sink\n    streamBuilder.sink(createSink());\n    // Init stream \n    streamBuilder.initOrUpdate();\n    // Start group in server\n    InlongGroupContext inlongGroupContext = group.init();\n} catch (Exception e) {\n    e.printStackTrace();\n}\n")),(0,a.kt)("h3",{id:"kafka2hive"},"Kafka2Hive"),(0,a.kt)("p",null,"\u53c2\u8003 ",(0,a.kt)("strong",{parentName:"p"},"manager-client-examples"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/inlong-manager/manager-client-examples/src/test/java/org/apache/inlong/manager/client/Kafka2HiveExample.java"},"org.apache.inlong.manager.client.Kafka2HiveExample.java")),(0,a.kt)("h3",{id:"binlog2kafka"},"Binlog2Kafka"),(0,a.kt)("p",null,"\u53c2\u8003 ",(0,a.kt)("strong",{parentName:"p"},"manager-client-examples"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/inlong-manager/manager-client-examples/src/test/java/org/apache/inlong/manager/client/Binlog2KafkaExample.java"},"org.apache.inlong.manager.client.Binlog2KafkaExample.java")),(0,a.kt)("h2",{id:"\u5199\u5728\u6700\u540e"},"\u5199\u5728\u6700\u540e"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5728\u4f7f\u7528Manager\u5ba2\u6237\u7aef\u65f6\u6709\u4efb\u4f55\u7591\u95ee\uff0c\u8bf7\u53ca\u65f6\u4e0e\u6211\u4eec\u6c9f\u901a"))}g.isMDXComponent=!0}}]);