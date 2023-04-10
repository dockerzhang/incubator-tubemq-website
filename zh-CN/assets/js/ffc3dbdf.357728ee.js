"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[84606],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>y});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var d=n.createContext({}),p=function(t){var e=n.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=p(r),m=a,y=s["".concat(d,".").concat(m)]||s[m]||c[m]||o;return r?n.createElement(y,l(l({ref:e},u),{},{components:r})):n.createElement(y,l({ref:e},u))}));function y(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[s]="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75331:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u67b6\u6784\u4ecb\u7ecd"},l="\u4e00\u3001\u8bf4\u660e",i={unversionedId:"modules/dataproxy-sdk/architecture",id:"version-0.11.0/modules/dataproxy-sdk/architecture",title:"\u67b6\u6784\u4ecb\u7ecd",description:"\u5728\u4e1a\u52a1\u4f7f\u7528\u6d88\u606f\u63a5\u5165\u65b9\u5f0f\u65f6\uff0c\u4e1a\u52a1\u4e00\u822c\u4ec5\u9700\u5c06\u6570\u636e\u6309\u7167DataProxy\u53ef\u8bc6\u522b\u7684\u683c\u5f0f\uff08\u5982\u516d\u6bb5\u534f\u8bae\u3001\u6570\u5b57\u5316\u534f\u8bae\u7b49\uff09",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/modules/dataproxy-sdk/architecture.md",sourceDirName:"modules/dataproxy-sdk",slug:"/modules/dataproxy-sdk/architecture",permalink:"/zh-CN/docs/0.11.0/modules/dataproxy-sdk/architecture",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.11.0/modules/dataproxy-sdk/architecture.md",tags:[],version:"0.11.0",frontMatter:{title:"\u67b6\u6784\u4ecb\u7ecd"},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"\u7f16\u8bd1\u90e8\u7f72",permalink:"/zh-CN/docs/0.11.0/modules/dataproxy/quick_start"},next:{title:"\u7f16\u8bd1\u90e8\u7f72",permalink:"/zh-CN/docs/0.11.0/modules/dataproxy-sdk/quick_start"}},d={},p=[{value:"2.1 \u6574\u4f53\u529f\u80fd\u8bf4\u660e",id:"21-\u6574\u4f53\u529f\u80fd\u8bf4\u660e",level:2},{value:"2.2 \u6570\u636e\u53d1\u9001\u529f\u80fd\u8bf4\u660e",id:"22-\u6570\u636e\u53d1\u9001\u529f\u80fd\u8bf4\u660e",level:2},{value:"\u540c\u6b65\u6279\u91cf\u51fd\u6570",id:"\u540c\u6b65\u6279\u91cf\u51fd\u6570",level:3}],u={toc:p},s="wrapper";function c(t){let{components:e,...r}=t;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,a.kt)("p",null,"\u5728\u4e1a\u52a1\u4f7f\u7528\u6d88\u606f\u63a5\u5165\u65b9\u5f0f\u65f6\uff0c\u4e1a\u52a1\u4e00\u822c\u4ec5\u9700\u5c06\u6570\u636e\u6309\u7167DataProxy\u53ef\u8bc6\u522b\u7684\u683c\u5f0f\uff08\u5982\u516d\u6bb5\u534f\u8bae\u3001\u6570\u5b57\u5316\u534f\u8bae\u7b49\uff09\n\u8fdb\u884c\u7ec4\u5305\u53d1\u9001\uff0c\u5c31\u53ef\u4ee5\u5c06\u6570\u636e\u63a5\u5165\u5230inlong\u3002\u4f46\u4e3a\u4e86\u4fdd\u8bc1\u6570\u636e\u53ef\u9760\u6027\u3001\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u66f4\u65b0proxy\u5217\u8868\u7b49\u5b89\u5168\u7279\u6027\n\u7528\u6237\u7a0b\u5e8f\u5c31\u9700\u8981\u8003\u8651\u66f4\u591a\u6700\u7ec8\u5bfc\u81f4\u7a0b\u5e8f\u8fc7\u4e8e\u7e41\u7410\u81c3\u80bf\u3002"),(0,a.kt)("p",null,"API\u7684\u8bbe\u8ba1\u521d\u8877\u5c31\u662f\u4e3a\u4e86\u7b80\u5316\u7528\u6237\u63a5\u5165\uff0c\u627f\u62c5\u90e8\u5206\u53ef\u9760\u6027\u76f8\u5173\u7684\u903b\u8f91\u3002\u7528\u6237\u901a\u8fc7\u5728\u670d\u52a1\u9001\u7a0b\u5e8f\u4e2d\u96c6\u6210API\u540e\uff0c\u5373\u53ef\u5c06\u6570\u636e\u53d1\u9001\u5230DataProxy\uff0c\u800c\u4e0d\u7528\u5173\u5fc3\u7ec4\u5305\u683c\u5f0f\u3001\u8d1f\u8f7d\u5747\u8861\u7b49\u903b\u8f91\u3002"),(0,a.kt)("h1",{id:"\u4e8c\u529f\u80fd\u8bf4\u660e"},"\u4e8c\u3001\u529f\u80fd\u8bf4\u660e"),(0,a.kt)("h2",{id:"21-\u6574\u4f53\u529f\u80fd\u8bf4\u660e"},"2.1 \u6574\u4f53\u529f\u80fd\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8be6\u7ec6\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7ec4\u5305\u529f\u80fd\uff08\u65b0\uff09"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5c06\u7528\u6237\u6570\u636e\u6309\u6253\u5305\u53d1\u9001\u5230DataProxy\u53ef\u8bc6\u522b\u7684\u7ec4\u5305\u683c\u5f0f\uff08\u5982\u516d\u6bb5\u534f\u8bae\u3001\u6570\u5b57\u5316\u534f\u8bae\u7b49\uff09\u6253\u5305\u53d1\u9001\u5230DataProxy")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u538b\u7f29\u529f\u80fd"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6253\u5305\u53d1\u9001\u5230DataProxy\u524d\uff0c\u5c06\u7528\u6237\u6570\u636e\u8fdb\u884c\u538b\u7f29\uff0c\u51cf\u5c11\u7f51\u7edc\u5e26\u5bbd\u5360\u7528")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7ef4\u62a4DataProxy\u5217\u8868"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9694\u4e94\u5206\u949f\u83b7\u53d6\u6253\u5305\u53d1\u9001\u5230DataProxy\u5217\u8868 \uff0c\u4ee5\u68c0\u6d4b\u8fd0\u7ef4\u4fa7\u662f\u5426\u5b58\u5728\u4e0a\u4e0b\u7ebfDataProxy\u673a\u5668\u7684\u60c5\u51b5\uff1b\u6bcf\u969420s\u81ea\u52a8\u5254\u9664\u4e0d\u53ef\u7528\u8fde\u63a5\uff0c\u4ee5\u4fdd\u8bc1\u5df2\u8fde\u63a5\u7684DataProxy\u80fd\u6b63\u5e38\u8fd0\u4f5c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u6307\u6807\u7edf\u8ba1\uff08\u65b0\uff09"),(0,a.kt)("td",{parentName:"tr",align:null},"\u589e\u52a0\u4e1a\u52a1\u5206\u949f\u7ea7\u522b\u53d1\u9001\u91cf\u7684\u6307\u6807\uff08\u63a5\u53e3\u7ea7\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u8d1f\u8f7d\u5747\u8861\uff08\u65b0\uff09"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u65b0\u7684\u7b56\u7565\u5c06\u53d1\u9001\u7684\u6570\u636e\u5728\u591a\u4e2aDataProxy\u95f4\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\uff0c\u4e0d\u518d\u4f9d\u9760\u7b80\u5355\u7684\u968f\u673a+\u8f6e\u8be2\u673a\u5236\u6765\u4fdd\u8bc1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DataProxy\u5217\u8868\u6301\u4e45\u5316\uff08\u65b0\uff09"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u4e1a\u52a1id\u5bf9DataProxy\u5217\u8868\u6301\u4e45\u5316\uff0c\u9632\u6b62\u7a0b\u5e8f\u542f\u52a8\u65f6\u914d\u7f6e\u4e2d\u5fc3\u53d1\u751f\u6545\u969c\u65e0\u6cd5\u53d1\u9001\u6570\u636e")))),(0,a.kt)("h2",{id:"22-\u6570\u636e\u53d1\u9001\u529f\u80fd\u8bf4\u660e"},"2.2 \u6570\u636e\u53d1\u9001\u529f\u80fd\u8bf4\u660e"),(0,a.kt)("h3",{id:"\u540c\u6b65\u6279\u91cf\u51fd\u6570"},"\u540c\u6b65\u6279\u91cf\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"public SendResult sendMessage(List<byte[]> bodyList, String groupId, String streamId, long dt, long timeout, TimeUnit timeUnit)\n\n\u53c2\u6570\u8bf4\u660e\n\nbodyList\u662f\u7528\u6237\u9700\u8981\u53d1\u9001\u7684\u591a\u6761\u6570\u636e\u7684\u96c6\u5408\uff0c\u603b\u957f\u5ea6\u5efa\u8bae\u5c0f\u4e8e512k\u3002groupId\u4ee3\u8868\u4e1a\u52a1id\uff0cstreamId\u4ee3\u8868\u63a5\u53e3id\u3002dt\u8868\u793a\u8be5\u6570\u636e\u7684\u65f6\u95f4\u6233\uff0c\u7cbe\u786e\u5230\u6beb\u79d2\u7ea7\u522b\u3002\u4e5f\u53ef\u76f4\u63a5\u8bbe\u7f6e\u4e3a0\uff0c\u6b64\u65f6api\u4f1a\u540e\u53f0\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\u4f5c\u4e3a\u5176\u65f6\u95f4\u6233\u3002timeout & timeUnit:\u8fd9\u4e24\u4e2a\u53c2\u6570\u662f\u8bbe\u7f6e\u53d1\u9001\u6570\u636e\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u4e00\u822c\u5efa\u8bae\u8bbe\u7f6e\u621020s\u3002\n")),(0,a.kt)("p",null,"###\u540c\u6b65\u5355\u6761\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"public SendResult sendMessage(byte[] body, String groupId, String streamId, long dt, long timeout, TimeUnit timeUnit)\n\n\u53c2\u6570\u8bf4\u660e\n\nbody\u662f\u7528\u6237\u8981\u53d1\u9001\u7684\u5355\u6761\u6570\u636e\u5185\u5bb9\uff0c\u5176\u4f59\u5404\u53c2\u6570\u6db5\u4e49\u57fa\u672c\u4e0e\u6279\u91cf\u53d1\u9001\u63a5\u53e3\u4e00\u81f4\u3002\n")),(0,a.kt)("p",null,"###\u5f02\u6b65\u6279\u91cf\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"public void asyncSendMessage(SendMessageCallback callback, List<byte[]> bodyList, String groupId, String streamId, long dt, long timeout,TimeUnit timeUnit)\n\n\u53c2\u6570\u8bf4\u660e\n\nSendMessageCallback\xa0\u662f\u5904\u7406\u6d88\u606f\u7684callback\u3002bodyList\u4e3a\u7528\u6237\u9700\u8981\u53d1\u9001\u7684\u591a\u6761\u6570\u636e\u7684\u96c6\u5408\uff0c\u591a\u6761\u6570\u636e\u7684\u603b\u957f\u5ea6\u5efa\u8bae\u5c0f\u4e8e512k\u3002groupId\u662f\u4e1a\u52a1id\uff0cstreamId\u662f\u63a5\u53e3id\u3002dt\u8868\u793a\u8be5\u6570\u636e\u7684\u65f6\u95f4\u6233\uff0c\u7cbe\u786e\u5230\u6beb\u79d2\u7ea7\u522b\u3002\u4e5f\u53ef\u76f4\u63a5\u8bbe\u7f6e\u4e3a0\uff0c\u6b64\u65f6api\u4f1a\u540e\u53f0\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\u4f5c\u4e3a\u5176\u65f6\u95f4\u6233\u3002timeout\u548ctimeUnit\u662f\u53d1\u9001\u6570\u636e\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u4e00\u822c\u5efa\u8bae\u8bbe\u7f6e\u621020s\u3002\n")),(0,a.kt)("p",null,"###\u5f02\u6b65\u5355\u6761\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"public void asyncSendMessage(SendMessageCallback callback, byte[] body, String groupId, String streamId, long dt, long timeout, TimeUnit timeUnit)\n\n\u53c2\u6570\u8bf4\u660e\n\nbody\u4e3a\u5355\u6761\u6d88\u606f\u5185\u5bb9\uff0c\u5176\u4f59\u5404\u53c2\u6570\u6db5\u4e49\u57fa\u672c\u4e0e\u6279\u91cf\u53d1\u9001\u63a5\u53e3\u4e00\u81f4\n")))}c.isMDXComponent=!0}}]);