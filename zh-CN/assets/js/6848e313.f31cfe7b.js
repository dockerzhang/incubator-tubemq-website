"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[48865],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),o=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},u=function(t){var e=o(t.components);return a.createElement(d.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=o(n),s=r,g=m["".concat(d,".").concat(s)]||m[s]||k[s]||l;return n?a.createElement(g,p(p({ref:e},u),{},{components:n})):a.createElement(g,p({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=s;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[m]="string"==typeof t?t:r,p[1]=i;for(var o=2;o<l;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3137:(t,e,n)=>{n.d(e,{Y:()=>a});const a={inLongVersion:"1.11.0-SNAPSHOT"}},7658:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));n(3137);const l={title:"C++ SDK",sidebar_position:1},p=void 0,i={unversionedId:"sdk/dataproxy-sdk/cpp",id:"version-1.12.0/sdk/dataproxy-sdk/cpp",title:"C++ SDK",description:"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.12.0/sdk/dataproxy-sdk/cpp.md",sourceDirName:"sdk/dataproxy-sdk",slug:"/sdk/dataproxy-sdk/cpp",permalink:"/zh-CN/docs/sdk/dataproxy-sdk/cpp",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.12.0/sdk/dataproxy-sdk/cpp.md",tags:[],version:"1.12.0",sidebarPosition:1,frontMatter:{title:"C++ SDK",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Redis",permalink:"/zh-CN/docs/data_node/load_node/redis"},next:{title:"Java SDK",permalink:"/zh-CN/docs/sdk/dataproxy-sdk/java"}},d={},o=[{value:"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1",id:"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1",level:2},{value:"\u5f15\u5165 C++ SDK",id:"\u5f15\u5165-c-sdk",level:2},{value:"\u6570\u636e\u4e0a\u62a5\u6d41\u7a0b",id:"\u6570\u636e\u4e0a\u62a5\u6d41\u7a0b",level:2},{value:"\u521b\u5efa SDK\u5b9e\u4f8b",id:"\u521b\u5efa-sdk\u5b9e\u4f8b",level:3},{value:"\u8c03\u7528\u53d1\u9001\u63a5\u53e3\u8fdb\u884c\u6570\u636e\u4e0a\u62a5",id:"\u8c03\u7528\u53d1\u9001\u63a5\u53e3\u8fdb\u884c\u6570\u636e\u4e0a\u62a5",level:3},{value:"\u5173\u95ed SDK",id:"\u5173\u95ed-sdk",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u9644\u5f55\uff1a\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e",id:"\u9644\u5f55\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e",level:2}],u={toc:o},m="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1"},"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1"),(0,r.kt)("p",null,"\u5728 Dashboard \u6216\u8005\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u521b\u5efa\u4efb\u52a1\uff0c\u6570\u636e\u6e90\u7c7b\u578b\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Auto Push")," (\u81ea\u4e3b\u63a8\u9001)\u3002"),(0,r.kt)("h2",{id:"\u5f15\u5165-c-sdk"},"\u5f15\u5165 C++ SDK"),(0,r.kt)("p",null,"\u9700\u8981\u5728\u9879\u76ee\u4e2d\u5305\u542bSDK\u7684\u5934\u6587\u4ef6\u548c\u5e93\uff0c\u8fdb\u884c SDK\n\u7684\u4f7f\u7528\u3002\u5934\u6587\u4ef6\u548c\u5e93\u63d0\u4f9b\u53ef\u4ee5\u4ece\u6e90\u7801\u81ea\u884c\u7f16\u8bd1\uff0c\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-cpp"},"SDK \u7f16\u8bd1\u4f7f\u7528"),"\u3002"),(0,r.kt)("h2",{id:"\u6570\u636e\u4e0a\u62a5\u6d41\u7a0b"},"\u6570\u636e\u4e0a\u62a5\u6d41\u7a0b"),(0,r.kt)("p",null,"\u5f15\u5165 SDK \u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 SDK \u7684",(0,r.kt)("inlineCode",{parentName:"p"},"send"),"\u76f8\u5173\u63a5\u53e3\u8fdb\u884c\u5355\u6761\uff08\u6279\u91cf\uff09\u6570\u636e\u7684\u4e0a\u62a5\uff0c\u53d1\u9001 demo\n\u53ef\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-cpp/release/demo/send_demo.cc"},"send_demo.cc"),"\n\u3002\u6574\u4f53\u6d41\u7a0b\u5305\u62ec\u4ee5\u4e0b\u4e09\u4e2a\u6b65\u9aa4\uff1a"),(0,r.kt)("h3",{id:"\u521b\u5efa-sdk\u5b9e\u4f8b"},"\u521b\u5efa SDK\u5b9e\u4f8b"),(0,r.kt)("p",null,"SDK \u652f\u6301\u8fdb\u7a0b\u521b\u5efa1\u4e2aSDK\u5b9e\u4f8b\uff0c\u591a\u7ebf\u7a0b\u5b89\u5168\uff0c\u4e5f\u652f\u6301\u8fdb\u7a0b\u521b\u5efa\u591a\u4e2aSDK\u5b9e\u4f8b\uff0c\u5404\u4e2aSDK\u5b9e\u4f8b\u76f8\u4e92\u72ec\u7acb\uff0c\u5404\u4e2aSDK\u5b9e\u4f8b\u4e5f\u7ebf\u7a0b\u5b89\u5168\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efaSDK\u5b9e\u4f8b\u5bf9\u8c61")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  InLongApi inlong_api\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u5b9e\u4f8b\u521d\u59cb\u5316 \uff0c\u914d\u7f6e\u6587\u4ef6\u91c7\u7528 json \u683c\u5f0f\uff0c\u89c1",(0,r.kt)("a",{parentName:"li",href:"#%E9%99%84%E5%BD%95%EF%BC%9A%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%AF%B4%E6%98%8E"},"\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// \u521d\u59cb\u5316SDK\uff0c\u53c2\u6570\u4e3a\u914d\u7f6e\u6587\u4ef6\u7684\u8def\u5f84\u540d\uff1b\u8fd4\u56de\u503c\u4e3a\u96f6\u8868\u793a\u521d\u59cb\u5316\u6210\u529f\nint32_t result = inlong_api.InitApi("/home/conf/config.json");\n')),(0,r.kt)("h3",{id:"\u8c03\u7528\u53d1\u9001\u63a5\u53e3\u8fdb\u884c\u6570\u636e\u4e0a\u62a5"},"\u8c03\u7528\u53d1\u9001\u63a5\u53e3\u8fdb\u884c\u6570\u636e\u4e0a\u62a5"),(0,r.kt)("p",null,"SDK \u652f\u6301\u5355\u6761\uff08\u63a8\u8350\uff09\u548c\u6279\u91cf\u53d1\u9001\uff0c\u4e8c\u8005\u53d1\u9001\u8fc7\u7a0b\u5747\u4e3a\u5f02\u6b65\u6a21\u5f0f\uff0c\u6570\u636e\u4e0a\u62a5\u63a5\u53e3\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002\u5728\u8fdb\u884c\u6570\u636e\u4e0a\u62a5\u524d\uff0c\u53ef\u8bbe\u7f6e\u56de\u8c03\u51fd\u6570\u5728\u6570\u636e\u53d1\u9001\u5931\u8d25\u65f6\u8fdb\u884c\u56de\u8c03\u5904\u7406\uff0c\u56de\u8c03\u51fd\u6570\u7b7e\u540d\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"int32_t CallBackFunc(const char* inlong_group_id, const char* inlong_stream_id,\n                     const char* msg, int32_t msg_len, \n                     const int64_t report_time, \n                     const char* client_ip);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5355\u6761\u6570\u636e\u6570\u636e\u4e0a\u62a5\u63a5\u53e3")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// \u8fd4\u56de\u503c\uff1a\u96f6\u8868\u793a\u53d1\u9001\u6210\u529f\uff0c\u975e\u96f6\u8868\u793a\u5931\u8d25\uff0c\u5177\u4f53\u5f02\u5e38\u8fd4\u56de\u503c\u8be6\u89c1tc_api.h\u4e2d\u7684SDKInvalidReuslt\n  int32_t Send(const char *inlong_group_id, const char *inlong_stream_id,\n               const char *msg, int32_t msg_len,\n               UserCallBack call_back = nullptr)\n")),(0,r.kt)("h3",{id:"\u5173\u95ed-sdk"},"\u5173\u95ed SDK"),(0,r.kt)("p",null,"\u8c03\u7528 close \u63a5\u53e3\u5173\u95ed SDK\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// \u8fd4\u56de\u503c\u4e3a\u96f6\u8868\u793a\u5173\u95ed\u6210\u529f\uff0c\u540e\u7eed\u65e0\u6cd5\u518d\u8fdb\u884c\u6570\u636e\u4e0a\u62a5\n// max_waitms\uff1a\u5173\u95edSDK\u524d\u7684\u7b49\u5f85\u6700\u5927\u6beb\u79d2\u6570\uff0c\u7b49\u5f85SDK\u5185\u90e8\u6570\u636e\u53d1\u9001\u5b8c\u6210\nint32_t CloseApi(int32_t max_waitms);\n")),(0,r.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u91c7\u7528\u5c06 SDK \u4f5c\u4e3a\u5e38\u9a7b\u670d\u52a1\u6765\u8fdb\u884c\u6570\u636e\u4e0a\u62a5\uff0c\u907f\u514d\u540c\u4e2a\u8fdb\u7a0b\u4e2d\u9014\u9891\u7e41\u5730\u521d\u59cb\u5316\u548c\u5173\u95ed\uff0c\u91cd\u590d\u521d\u59cb\u5316\u548c\u5173\u95ed\u4f1a\u5e26\u6765\u66f4\u591a\u5f00\u9500\uff1b"),(0,r.kt)("li",{parentName:"ul"},"SDK \u53d1\u9001\u662f\u5f02\u6b65\u8fdb\u884c\u7684\uff0c\u8fd4\u56de\u503c\u4e3a 0 \u8868\u793a\u6570\u636e\u6210\u529f\u5b58\u5165\u4e86 SDK \u5185\u90e8\u7f13\u51b2\u533a\uff0c\u7b49\u5f85\u7f51\u7edc\u53d1\u9001\u3002\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"li"},"inlong_group_id"),"\n\u672c\u8eab\u914d\u7f6e\u6709\u8bef\u6216\u8005\u7f51\u7edc\u5f02\u5e38\uff0c\u4e5f\u4f1a\u5bfc\u81f4\u6570\u636e\u53d1\u9001\u5931\u8d25\uff0c\u6240\u4ee5\u5efa\u8bae\u7528\u6237\u5728\u8c03\u7528\u8be5\u63a5\u53e3\u65f6\u8bbe\u7f6e\u56de\u8c03\uff0c\u6570\u636e\u591a\u6b21\u91cd\u8bd5\u53d1\u9001\u4ecd\u5931\u8d25\u65f6\u6267\u884c\u56de\u8c03\u3002")),(0,r.kt)("h2",{id:"\u9644\u5f55\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e"},"\u9644\u5f55\uff1a\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e"),(0,r.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f\u548c\u91cd\u8981\u53c2\u6570\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "init-param": {\n    "inlong_group_ids": "b_inlong_group_test_01, b_inlong_group_test_02",\n    "manager_url": "http://127.0.0.1:8099/inlong/manager/openapi/dataproxy/getIpList",\n    "manager_update_interval": 2,\n    "manager_url_timeout": 5,\n    "msg_type": 7,\n    "max_proxy_num": 8,\n    "per_groupid_thread_nums": 1,\n    "dispatch_interval_zip": 8,\n    "dispatch_interval_send": 10,\n    "recv_buf_size": 10240000,\n    "send_buf_size": 10240000,\n    "enable_pack": true,\n    "pack_size": 409600,\n    "pack_timeout": 3000,\n    "ext_pack_size": 409600,\n    "enable_zip": true,\n    "min_zip_len": 512,\n    "tcp_detection_interval": 60000,\n    "tcp_idle_time": 600000,\n    "log_num": 10,\n    "log_size": 104857600,\n    "log_level": 3,\n    "log_path": "./",\n    "need_auth": false,\n    "auth_id": "****",\n    "auth_key": "****"\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlong_group_ids"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong_group_id\u5217\u8868"),(0,r.kt)("td",{parentName:"tr",align:null},"b_inlong_group_test_01, b_inlong_group_test_02")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manager_url"),(0,r.kt)("td",{parentName:"tr",align:null},"manager\u5730\u5740"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://127.0.0.1:8099/inlong/manager/openapi/dataproxy/getIpList"},"http://127.0.0.1:8099/inlong/manager/openapi/dataproxy/getIpList"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manager_update_interval"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42manager\u95f4\u9694\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"2 \u5206\u949f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manager_url_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a8\u9001\u7684\u6570\u636e\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6beb\u79d2\u4e3a\u5355\u4f4d\u7684\u65f6\u95f4\u6233")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msg_type"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_proxy_num"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5355\u5b9e\u4f8b\u6700\u5927proxy\u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:null},"8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"per_groupid_thread_nums"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5355inlong_group_id\u7ebf\u7a0b\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dispatch_interval_zip"),(0,r.kt)("td",{parentName:"tr",align:null},"\u538b\u7f29\u6570\u636e\u95f4\u9694\u5468\u671f"),(0,r.kt)("td",{parentName:"tr",align:null},"8 ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dispatch_interval_send"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5206\u53d1\u95f4\u9694"),(0,r.kt)("td",{parentName:"tr",align:null},"10 ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"recv_buf_size"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u7f13\u51b2\u533a\u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:null},"10240000 \u5b57\u8282")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"send_buf_size"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u7f13\u51b2\u533a\u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:null},"10240000 \u5b57\u8282")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable_pack"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5141\u8bb8\u6253\u5305"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pack_size"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6253\u5305\u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:null},"409600 \u5b57\u8282")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pack_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6253\u5305\u95f4\u9694"),(0,r.kt)("td",{parentName:"tr",align:null},"3000 ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ext_pack_size"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5355\u6761\u6d88\u606f\u6700\u5927\u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:null},"409600 \u5b57\u8282")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable_zip"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5141\u8bb8\u538b\u7f29"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min_zip_len"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5c0f\u538b\u7f29\u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:null},"512 \u5b57\u8282")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tcp_detection_interval"),(0,r.kt)("td",{parentName:"tr",align:null},"tcp \u63a2\u6d4b\u5468\u671f"),(0,r.kt)("td",{parentName:"tr",align:null},"60000 ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tcp_idle_time"),(0,r.kt)("td",{parentName:"tr",align:null},"tcp \u6b7b\u4ea1\u5468\u671f"),(0,r.kt)("td",{parentName:"tr",align:null},"600000 ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_num"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u6587\u4ef6\u4e2a\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_size"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5355\u4e2a\u65e5\u5fd7\u6587\u4ef6\u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:null},"104857600 \u5b57\u8282")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_level"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u7ea7\u522b"),(0,r.kt)("td",{parentName:"tr",align:null},"3\u3002 \u65e5\u5fd7\u7ea7\u522b\uff0ctrace(4)>debug(3)>info(2)>warn(1)>error(0)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_path"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u76ee\u5f55"),(0,r.kt)("td",{parentName:"tr",align:null},"./")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"need_auth"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u8ba4\u8bc1"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"auth_id"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8d26\u53f7"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"auth_key"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bc6\u94a5"),(0,r.kt)("td",{parentName:"tr",align:null})))))}k.isMDXComponent=!0}}]);