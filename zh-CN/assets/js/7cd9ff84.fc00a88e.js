"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[88118],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(r),m=o,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:o,l[1]=u;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79146:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={title:"\u603b\u89c8"},l=void 0,u={unversionedId:"modules/tubemq/tubemq-manager/overview",id:"version-1.4.0/modules/tubemq/tubemq-manager/overview",title:"\u603b\u89c8",description:"\u64cd\u4f5c\u63a5\u53e3",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.4.0/modules/tubemq/tubemq-manager/overview.md",sourceDirName:"modules/tubemq/tubemq-manager",slug:"/modules/tubemq/tubemq-manager/overview",permalink:"/zh-CN/docs/1.4.0/modules/tubemq/tubemq-manager/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.4.0/modules/tubemq/tubemq-manager/overview.md",tags:[],version:"1.4.0",frontMatter:{title:"\u603b\u89c8"},sidebar:"tutorialSidebar",previous:{title:"\u6d88\u8d39\u8005\u793a\u4f8b",permalink:"/zh-CN/docs/1.4.0/modules/tubemq/consumer_example"},next:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/1.4.0/modules/tubemq/tubemq-manager/quick_start"}},s={},i=[{value:"cluster",id:"cluster",level:4},{value:"topic",id:"topic",level:4},{value:"\u6dfb\u52a0topicTask",id:"\u6dfb\u52a0topictask",level:4},{value:"\u67e5\u8be2\u67d0\u4e00\u4e2atopic\u662f\u5426\u521b\u5efa\u6210\u529f\uff08\u4e1a\u52a1\u53ef\u4ee5\u5199\u5165\uff09",id:"\u67e5\u8be2\u67d0\u4e00\u4e2atopic\u662f\u5426\u521b\u5efa\u6210\u529f\u4e1a\u52a1\u53ef\u4ee5\u5199\u5165",level:4}],c={toc:i},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u64cd\u4f5c\u63a5\u53e3"),(0,o.kt)("h4",{id:"cluster"},"cluster"),(0,o.kt)("p",null,"\u67e5\u8be2clusterId\u4ee5\u53caclusterName\u5168\u91cf\u6570\u636e \uff08get)"),(0,o.kt)("p",null,"\u793a\u4f8b"),(0,o.kt)("p",null,"\u3010GET\u3011 /v1/cluster"),(0,o.kt)("p",null,"\u8fd4\u56de\u503c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n"errMsg": "",\n"errCode": 0,\n"result": true,\n"data": "[{\\"clusterId\\":1,\\"clusterName\\":\\"1124\\", \\"masterIp\\":\\"127.0.0.1\\"}]"\n}\n')),(0,o.kt)("h4",{id:"topic"},"topic"),(0,o.kt)("h4",{id:"\u6dfb\u52a0topictask"},"\u6dfb\u52a0topicTask"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"type    (\u5fc5\u586b) \u8bf7\u6c42\u7c7b\u578b\uff0c\u5b57\u6bb5\u586b\u5199\uff1aop_query\nclusterId   (\u5fc5\u586b) \u8bf7\u6c42\u96c6\u7fa4id\naddTopicTasks (\u5fc5\u586b) topicTasks\uff0c\u521b\u5efatask\u4efb\u52a1json\uff0c\nuser    (\u5fc5\u586b) \u4e4b\u540e\u63a5\u5165\u6743\u9650\u9a8c\u8bc1\u9700\u8981\u9a8c\u8bc1\u7528\u6237\uff0c\u8fd9\u91cc\u9884\u7559\u51fa\u6765\n")),(0,o.kt)("p",null,"addTopicTasks\u76ee\u524d\u53ea\u5305\u62ec\u4e00\u4e2a\u5b57\u6bb5\u4e3atopicName\n\u4e4b\u540e\u63a5\u5165region\u8bbe\u8ba1\u4f1a\u65b0\u52a0\u5165region\u5b57\u6bb5\u8868\u793a\u4e0d\u540c\u533a\u57df\u7684broker\n\u76ee\u524d\u4e00\u4e2aaddTopicTask\u4f1a\u5728cluster\u4e2d\u7684\u6240\u6709broker\u521b\u5efatopic"),(0,o.kt)("p",null,"AddTopicTasks \u4e3a\u4ee5\u4e0b\u5bf9\u8c61\u7684List\uff0c\u53ef\u643a\u5e26\u591a\u4e2a\u521b\u5efatopic\u8bf7\u6c42"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"topicName   (\u5fc5\u586b) topic\u540d\u79f0\n")),(0,o.kt)("p",null,"\u793a\u4f8b"),(0,o.kt)("p",null,"\u3010POST\u3011 /v1/task?method=addTopicTask"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n"clusterId": "1",\n"addTopicTasks": [{"topicName": "1"}],\n"user": "test"\n}\n')),(0,o.kt)("p",null,"\u8fd4\u56dejson\u683c\u5f0f\u6837\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n"errMsg": "There are topic tasks [a12322] already in adding status",\n"errCode": 200,\n"result": false,\n"data": ""\n}\n')),(0,o.kt)("p",null,"result\u4e3afalse\u4e3a\u5199\u5165task\u5931\u8d25"),(0,o.kt)("h4",{id:"\u67e5\u8be2\u67d0\u4e00\u4e2atopic\u662f\u5426\u521b\u5efa\u6210\u529f\u4e1a\u52a1\u53ef\u4ee5\u5199\u5165"},"\u67e5\u8be2\u67d0\u4e00\u4e2atopic\u662f\u5426\u521b\u5efa\u6210\u529f\uff08\u4e1a\u52a1\u53ef\u4ee5\u5199\u5165\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"clusterId   (\u5fc5\u586b) \u8bf7\u6c42\u96c6\u7fa4id\ntopicName   (\u5fc5\u586b) \u67e5\u8be2topic\u540d\u79f0\nuser    (\u5fc5\u586b) \u4e4b\u540e\u63a5\u5165\u6743\u9650\u9a8c\u8bc1\u9700\u8981\u9a8c\u8bc1\u7528\u6237\uff0c\u8fd9\u91cc\u9884\u7559\u51fa\u6765\n")),(0,o.kt)("p",null,"\u793a\u4f8b"),(0,o.kt)("p",null,"\u3010POST\u3011 /v1/topic?method=queryCanWrite"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n"clusterId": "1",\n"topicName": "1",\n"user": "test"\n}\n')),(0,o.kt)("p",null,"\u8fd4\u56dejson\u683c\u5f0f\u6837\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{ "result":true, "errCode":0, "errMsg":"OK", }\n{ "result":false, "errCode": 100, "errMsg":"topic test is not writable"}\n{ "result":false, "errCode": 101, "errMsg":"no such topic in master"}\n')),(0,o.kt)("p",null,"result\u4e3afalse\u4e3a\u4e0d\u53ef\u5199"))}d.isMDXComponent=!0}}]);