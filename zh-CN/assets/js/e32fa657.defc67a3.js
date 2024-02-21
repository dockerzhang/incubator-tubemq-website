"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[10779],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,g=u["".concat(d,".").concat(f)]||u[f]||c[f]||o;return t?r.createElement(g,i(i({ref:n},s),{},{components:t})):r.createElement(g,i({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},75104:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={title:"DataProxy \u63d2\u4ef6",sidebar_position:7},i=void 0,l={unversionedId:"design_and_concept/how_to_write_plugin_dataproxy",id:"version-1.10.0/design_and_concept/how_to_write_plugin_dataproxy",title:"DataProxy \u63d2\u4ef6",description:"\u603b\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.10.0/design_and_concept/how_to_write_plugin_dataproxy.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/how_to_write_plugin_dataproxy",permalink:"/zh-CN/docs/design_and_concept/how_to_write_plugin_dataproxy",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.10.0/design_and_concept/how_to_write_plugin_dataproxy.md",tags:[],version:"1.10.0",sidebarPosition:7,frontMatter:{title:"DataProxy \u63d2\u4ef6",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Manager \u63d2\u4ef6",permalink:"/zh-CN/docs/design_and_concept/how_to_extend_data_node_for_manager"},next:{title:"\u5982\u4f55\u7f16\u8bd1",permalink:"/zh-CN/docs/quick_start/how_to_build"}},d={},p=[{value:"\u603b\u89c8",id:"\u603b\u89c8",level:2},{value:"\u6982\u5ff5\u548c\u6a21\u578b",id:"\u6982\u5ff5\u548c\u6a21\u578b",level:2},{value:"\u6570\u636e\u6d41\u56fe\u793a",id:"\u6570\u636e\u6d41\u56fe\u793a",level:2},{value:"\u5f00\u53d1\u6d41\u7a0b",id:"\u5f00\u53d1\u6d41\u7a0b",level:2},{value:"\u63a5\u53e3",id:"\u63a5\u53e3",level:2},{value:"MessageQueueHandler",id:"messagequeuehandler",level:3},{value:"EventHandler",id:"eventhandler",level:3},{value:"\u63d2\u4ef6\u914d\u7f6e",id:"\u63d2\u4ef6\u914d\u7f6e",level:2},{value:"dataproxy.conf",id:"dataproxyconf",level:3}],s={toc:p},u="wrapper";function c(e){let{components:n,...o}=e;return(0,a.kt)(u,(0,r.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,a.kt)("p",null,"DataProxy \u5b9e\u73b0\u4e86\u7edf\u4e00\u62bd\u8c61 MQ (Message Queue) Sink \u6a21\u578b\uff0c\u652f\u6301\u5728\u6807\u51c6 MessageQueueZoneSink \u4e0b\u65b9\u4fbf\u7075\u6d3b\u6dfb\u52a0\u4e0d\u540c\u7c7b\u578b\u7684 MQ \u6d41\u5411\uff0c\u9ed8\u8ba4\u652f\u6301 Apache Pulsar\u3001Apache Kafka \u548c InLong TubeMQ\u3002\u672c\u6587\u5c06\u6307\u5bfc\u5f00\u53d1\u8005\u5982\u4f55\u6269\u5c55\u652f\u6301\u65b0\u7684 MQ \u7c7b\u578b\u3002"),(0,a.kt)("h2",{id:"\u6982\u5ff5\u548c\u6a21\u578b"},"\u6982\u5ff5\u548c\u6a21\u578b"),(0,a.kt)("p",null,"DataProxy \u662f\u57fa\u4e8e Apache Flume \u7684\u6570\u636e\u63a5\u6536\u548c\u6d41\u8f6c\u6846\u67b6\uff0c\u91c7\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Source")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"Channel")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"Sink")," \u67b6\u6784\u6a21\u578b\uff0c\u672c\u6587\u91cd\u70b9\u5173\u6ce8 Sink \u90e8\u5206\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MessageQueueZoneSink"),": DataProxy \u7684\u6807\u51c6 MQ Sink\uff0c\u6240\u6709\u7c7b\u578b\u6d88\u606f\u961f\u5217\u7edf\u4e00\u5728\u6b64 Sink \u4e0b\u6269\u5c55\u548c\u652f\u6301"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MessageQueueHandler"),": \u5177\u4f53\u67d0\u7c7b MQ \u7684\u8fde\u63a5\u3001\u6570\u636e\u53d1\u9001\u3001\u5173\u95ed\u7684\u5904\u7406\u63a5\u53e3\uff0c\u9ed8\u8ba4\u4f7f\u7528 PulsarHandler \u5b9e\u73b0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EventHandler"),": \u6d88\u606f\u6253\u5305\u5668\u63a5\u53e3\uff0c\u53ef\u7528\u4e8e\u53d1\u9001\u4e0b\u6e38 MQ \u4e4b\u524d\u8f6c\u6362 Header/Body \u534f\u8bae, \u9ed8\u8ba4\u900f\u4f20")),(0,a.kt)("p",null,"\u5f53\u6269\u5c55\u65b0\u7684 MQ \u7c7b\u578b\u65f6\uff0c\u9700\u8981\u5f00\u53d1\u81f3\u5c11\u5b9e\u73b0 MessageQueueHandler \u4f5c\u4e3a\u63d2\u4ef6\uff0c\u5982\u679c\u9700\u8981\u8f6c\u6362\u6570\u636e\u534f\u8bae\uff0c\u53ef\u4ee5\u540c\u65f6\u6269\u5c55 EventHandler \u505a\u76f8\u5e94\u7684\u5904\u7406\u3002MessageQueueHandler \u548c EventHandler \u4f5c\u4e3a\u5143\u6570\u636e\u914d\u7f6e\u7531 Manager \u4e0b\u53d1\uff0c\u8fbe\u5230\u7075\u6d3b\u90e8\u7f72\u6269\u5c55\u7684\u6548\u679c\u3002 "),(0,a.kt)("h2",{id:"\u6570\u636e\u6d41\u56fe\u793a"},"\u6570\u636e\u6d41\u56fe\u793a"),(0,a.kt)("p",null,"\u4e0a\u8ff0\u76f8\u5173\u6a21\u5757\u548c\u63a5\u53e3\u5728\u6570\u636e\u6d41\u8f6c\u8fc7\u7a0b\u4e2d\u7684\u5173\u7cfb\u53ef\u4ee5\u7528\u4e0b\u56fe\u8868\u793a\uff1a\n",(0,a.kt)("img",{src:t(99807).Z,width:"959",height:"511"})),(0,a.kt)("h2",{id:"\u5f00\u53d1\u6d41\u7a0b"},"\u5f00\u53d1\u6d41\u7a0b"),(0,a.kt)("p",null,"\u4ee5\u6269\u5c55 Kafka \u7c7b\u578b MQ \u548c \u53d1\u9001 ProtoBuffer \u6d88\u606f\u4e3a\u4f8b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u5f00\u53d1 MessageQueueHandler \u7684\u5b50\u7c7b\u63d2\u4ef6 KafKaHandler, \u5b9e\u73b0 init / star t /stop / send \u63a5\u53e3\u903b\u8f91"),(0,a.kt)("li",{parentName:"ul"},"\u6309\u9700\u8981\u5b9e\u73b0 EventHandler \u63a5\u53e3 parseHeader / parseBody \u63d2\u4ef6\u903b\u8f91, \u5982 ProtoBufferEventHandler")),(0,a.kt)("h2",{id:"\u63a5\u53e3"},"\u63a5\u53e3"),(0,a.kt)("h3",{id:"messagequeuehandler"},"MessageQueueHandler"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"private class KafkaHandler implements MessageQueueHandler {\n\n    private EventHandler handler;\n    \n    @Override\n    public void init(CacheClusterConfig config, MessageQueueZoneSinkContext sinkContext) {\n        // \u521d\u59cb\u5316\u914d\u7f6e\u548cEventHandler\n    }\n    \n    @Override\n    public void start() {\n        // \u521b\u5efa Kafka Producer\n    }\n\n    @Override\n    public void stop() {\n       // \u5173\u95ed Kafka Producer\n    }\n\n  @Override\n    public boolean send(BatchPackProfile event) {\n        // \u5904\u7406\u5e76\u53d1\u9001\n    }\n}\n")),(0,a.kt)("h3",{id:"eventhandler"},"EventHandler"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class ProtoBufferEventHandler implements EventHandler {\n\n    @Override\n    public Map<String, String> parseHeader(IdTopicConfig idConfig, BatchPackProfile profile, String nodeId,\n            INLONG_COMPRESSED_TYPE compressType) {\n        // \u5904\u7406\u3001\u8f6c\u6362\u6d88\u606f\u5934\u90e8\n    }\n\n    @Override\n    public byte[] parseBody(IdTopicConfig idConfig, BatchPackProfile profile, INLONG_COMPRESSED_TYPE compressType)\n            throws IOException {\n        // \u5904\u7406\u3001\u8f6c\u6362\u6d88\u606f\u4f53\u4e3apb\n    }\n}\n")),(0,a.kt)("p",null,"\uff08\u5b8c\u6574\u793a\u4f8b\u53c2\u8003 Inlong \u4ee3\u7801\u5e93 org.apache.inlong.dataproxy.sink.mq.kafka.KafkaHandler \u5b9e\u73b0\uff09"),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u914d\u7f6e"},"\u63d2\u4ef6\u914d\u7f6e"),(0,a.kt)("h3",{id:"dataproxyconf"},"dataproxy.conf"),(0,a.kt)("p",null,"Sink \u90e8\u5206\u914d\u7f6e\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/modules/dataproxy/configuration"},"Sink \u914d\u7f6e\u793a\u4f8b")))}c.isMDXComponent=!0},99807:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/dataproxy_mq_sink-19727a38bb02c1b70852b63593013a8b.png"}}]);