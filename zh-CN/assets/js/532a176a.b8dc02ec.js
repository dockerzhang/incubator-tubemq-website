"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6272],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(t),d=a,m=g["".concat(u,".").concat(d)]||g[d]||s[d]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},38265:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},u=void 0,c={unversionedId:"modules/agent/quick_start",id:"version-0.12.0/modules/agent/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u914d\u7f6e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.12.0/modules/agent/quick_start.md",sourceDirName:"modules/agent",slug:"/modules/agent/quick_start",permalink:"/zh-CN/docs/0.12.0/modules/agent/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-0.12.0/modules/agent/quick_start.md",tags:[],version:"0.12.0",sidebarPosition:2,frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/0.12.0/modules/agent/overview"},next:{title:"\u6587\u4ef6",permalink:"/zh-CN/docs/0.12.0/modules/agent/file"}},p={},s=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2},{value:"\u5b9e\u65f6\u6dfb\u52a0job\u914d\u7f6e",id:"\u5b9e\u65f6\u6dfb\u52a0job\u914d\u7f6e",level:2}],g={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd inlong-agent\n")),(0,o.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,"\u7ebf\u4e0a\u8fd0\u884c\u9700\u8981\u4eceinlong-manager\u62c9\u53d6\u914d\u7f6e\uff0c\u914d\u7f6econf/agent.properties\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"# whether enable http service\nagent.http.enable=true\n# http default port\nagent.http.port=\u53ef\u7528\u7aef\u53e3\nagent.fetcher.classname=org.apache.inlong.agent.plugin.fetcher.ManagerFetcher (\u8bbe\u7f6e\u4efb\u52a1\u83b7\u53d6\u7684\u7c7b\u540d\uff0c\u9ed8\u8ba4\u4e3aManagerFetcher\uff09\nagent.local.ip=\u5199\u5165\u672c\u673aip\nagent.manager.vip.http.host=manager web host\nagent.manager.vip.http.port=manager web port\n")),(0,o.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,o.kt)("p",null,"\u89e3\u538b\u540e\u5982\u4e0b\u547d\u4ee4\u8fd0\u884c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sh agent.sh start\n")),(0,o.kt)("h2",{id:"\u5b9e\u65f6\u6dfb\u52a0job\u914d\u7f6e"},"\u5b9e\u65f6\u6dfb\u52a0job\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'http://localhost:8008/config/job\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n"job": {\n"dir": {\n"path": "",\n"pattern": "/data/inlong-agent/test.log"\n},\n"trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",\n"id": 1,\n"thread": {\n"running": {\n"core": "4"\n}\n},\n"name": "fileAgentTest",\n"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n},\n"proxy": {\n"inlongGroupId": "groupId10",\n"inlongStreamId": "streamId10"\n},\n"op": "add"\n}\'\n')),(0,o.kt)("p",null,"\u5176\u4e2d\u5404\u4e2a\u53c2\u6570\u542b\u4e49\u4e3a\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"job.dir.pattern: \u914d\u7f6e\u8bfb\u53d6\u7684\u6587\u4ef6\u8def\u5f84\uff0c\u53ef\u5305\u542b\u6b63\u5219\u8868\u8fbe\u5f0f"),(0,o.kt)("li",{parentName:"ul"},"job.trigger: \u89e6\u53d1\u5668\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3aDirectoryTrigger\uff0c\u529f\u80fd\u4e3a\u76d1\u542c\u6587\u4ef6\u5939\u4e0b\u7684\u6587\u4ef6\u4ea7\u751f\u4e8b\u4ef6\uff0c\u4efb\u52a1\u8fd0\u884c\u65f6\u5df2\u6709\u7684\u6587\u4ef6\u4e0d\u4f1a\u8bfb\u53d6"),(0,o.kt)("li",{parentName:"ul"},"job.source: \u4f7f\u7528\u7684\u6570\u636e\u6e90\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3aTextFileSource\uff0c\u8bfb\u53d6\u6587\u672c\u6587\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"job.sink\uff1a\u4f7f\u7528\u7684\u5199\u5165\u5668\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3aProxySink\uff0c\u53d1\u9001\u6d88\u606f\u5230dataproxy\u4e2d"),(0,o.kt)("li",{parentName:"ul"},"proxy.groupId: \u5199\u5165proxy\u65f6\u4f7f\u7528\u7684groupId\uff0cgroupId\u662f\u6307manager\u754c\u9762\u4e2d\uff0c\u6570\u636e\u63a5\u5165\u4e2d\u4e1a\u52a1\u4fe1\u606f\u7684\u4e1a\u52a1ID\uff0c\u6b64\u5904\u4e0d\u662f\u521b\u5efa\u7684tube topic\u540d\u79f0"),(0,o.kt)("li",{parentName:"ul"},"proxy.streamId: \u5199\u5165proxy\u65f6\u4f7f\u7528\u7684streamId\uff0cstreamId\u662f\u6307manager\u754c\u9762\u4e2d\uff0c\u6570\u636e\u63a5\u5165\u4e2d\u6570\u636e\u6d41\u7684\u6570\u636e\u6d41ID")))}d.isMDXComponent=!0}}]);