"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[32621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),k=a,m=d["".concat(p,".").concat(k)]||d[k]||u[k]||l;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},71408:(e,t,n)=>{n.d(t,{Y:()=>r});const r={inLongVersion:"1.5.0-SNAPSHOT"}},90154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));n(71408);const l={title:"C++ SDK",sidebar_position:1},i=void 0,o={unversionedId:"sdk/dataproxy-sdk/cpp",id:"version-1.6.0/sdk/dataproxy-sdk/cpp",title:"C++ SDK",description:"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.6.0/sdk/dataproxy-sdk/cpp.md",sourceDirName:"sdk/dataproxy-sdk",slug:"/sdk/dataproxy-sdk/cpp",permalink:"/zh-CN/docs/sdk/dataproxy-sdk/cpp",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.6.0/sdk/dataproxy-sdk/cpp.md",tags:[],version:"1.6.0",sidebarPosition:1,frontMatter:{title:"C++ SDK",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Hudi",permalink:"/zh-CN/docs/data_node/load_node/hudi"},next:{title:"Java SDK",permalink:"/zh-CN/docs/sdk/dataproxy-sdk/java"}},p={},c=[{value:"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1",id:"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1",level:2},{value:"\u5f15\u5165 C++ SDK",id:"\u5f15\u5165-c-sdk",level:2},{value:"\u6570\u636e\u4e0a\u62a5\u6d41\u7a0b",id:"\u6570\u636e\u4e0a\u62a5\u6d41\u7a0b",level:2},{value:"\u521d\u59cb\u5316 SDK",id:"\u521d\u59cb\u5316-sdk",level:3},{value:"\u8c03\u7528\u53d1\u9001\u63a5\u53e3\u8fdb\u884c\u6570\u636e\u4e0a\u62a5",id:"\u8c03\u7528\u53d1\u9001\u63a5\u53e3\u8fdb\u884c\u6570\u636e\u4e0a\u62a5",level:3},{value:"\u5173\u95ed SDK",id:"\u5173\u95ed-sdk",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u9644\u5f55\uff1a\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e",id:"\u9644\u5f55\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e",level:2}],s={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1"},"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1"),(0,a.kt)("p",null,"\u5728 Dashboard \u6216\u8005\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u521b\u5efa\u4efb\u52a1\uff0c\u6570\u636e\u6e90\u7c7b\u578b\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Auto Push")," (\u81ea\u4e3b\u63a8\u9001)\u3002"),(0,a.kt)("h2",{id:"\u5f15\u5165-c-sdk"},"\u5f15\u5165 C++ SDK"),(0,a.kt)("p",null,"\u9700\u8981\u5728\u9879\u76ee\u4e2d\u5305\u542bSDK\u7684\u5934\u6587\u4ef6\u548c\u5e93\uff0c\u8fdb\u884c SDK \u7684\u4f7f\u7528\u3002\u5934\u6587\u4ef6\u548c\u5e93\u63d0\u4f9b\u53ef\u4ee5\u4ece\u6e90\u7801\u81ea\u884c\u7f16\u8bd1\uff0c\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-cpp"},"SDK \u7f16\u8bd1\u4f7f\u7528"),"\u3002"),(0,a.kt)("h2",{id:"\u6570\u636e\u4e0a\u62a5\u6d41\u7a0b"},"\u6570\u636e\u4e0a\u62a5\u6d41\u7a0b"),(0,a.kt)("p",null,"\u5f15\u5165 SDK \u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 SDK \u7684",(0,a.kt)("inlineCode",{parentName:"p"},"send"),"\u76f8\u5173\u63a5\u53e3\u8fdb\u884c\u5355\u6761\uff08\u6279\u91cf\uff09\u6570\u636e\u7684\u4e0a\u62a5\uff0c\u53d1\u9001 demo \u53ef\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-cpp/release/demo/send_demo.cc"},"send_demo.cc"),"\u3002\u6574\u4f53\u6d41\u7a0b\u5305\u62ec\u4ee5\u4e0b\u4e09\u4e2a\u6b65\u9aa4\uff1a"),(0,a.kt)("h3",{id:"\u521d\u59cb\u5316-sdk"},"\u521d\u59cb\u5316 SDK"),(0,a.kt)("p",null,"SDK \u652f\u6301\u5bf9\u8c61\u5b9e\u4f8b\u5316\u548c\u914d\u7f6e\u6587\u4ef6\u521d\u59cb\u5316\u4e24\u79cd\u65b9\u5f0f\uff08\u4e8c\u9009\u4e00\u5373\u53ef\uff09\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u5b9e\u4f8b\u521d\u59cb\u5316\n\u9996\u5148\u521d\u59cb\u5316\u5ba2\u6237\u7aef\u914d\u7f6e\uff0c\u7136\u540e\u8c03\u7528\u521d\u59cb\u5316\u63a5\u53e3\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// \u521d\u59cb\u5316\u5ba2\u6237\u7aef\u914d\u7f6e\nClientConfig client;\n// \u8bbe\u7f6eclient\u76f8\u5173\u914d\u7f6e\u53c2\u6570\uff0c\u5176\u4e2dproxy_URL_\u4e3a\u5fc5\u9009\u53c2\u6570\uff08\u683c\u5f0f\u5982\u4e0b\uff09\uff0c\u5176\u4ed6\u53c2\u6570\u8be6\u89c1client_config.h\u6587\u4ef6\nclient.proxy_cluster_URL_="http://{Manager url}/inlong/manager/openapi/dataproxy/getIpList";\n// \u521d\u59cb\u5316SDK, \u8fd4\u56de\u503c\u4e3a\u96f6\u8868\u793a\u521d\u59cb\u5316\u6210\u529f\uff0c\u975e\u96f6\u8868\u793a\u5931\u8d25\nint32_t result = tc_api_init(client);\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u6587\u4ef6\u521d\u59cb\u5316\n\u914d\u7f6e\u6587\u4ef6\u91c7\u7528 json \u683c\u5f0f\uff0c\u89c1",(0,a.kt)("a",{parentName:"li",href:"#%E9%99%84%E5%BD%95%EF%BC%9A%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%AF%B4%E6%98%8E"},"\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e"),"\uff0c\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u521d\u59cb\u5316 SDK\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// \u521d\u59cb\u5316SDK\uff0c\u53c2\u6570\u4e3a\u914d\u7f6e\u6587\u4ef6\u7684\u8def\u5f84\u540d\uff1b\u8fd4\u56de\u503c\u4e3a\u96f6\u8868\u793a\u521d\u59cb\u5316\u6210\u529f\nint32_t result = tc_api_init("/home/conf/config.json");\n')),(0,a.kt)("h3",{id:"\u8c03\u7528\u53d1\u9001\u63a5\u53e3\u8fdb\u884c\u6570\u636e\u4e0a\u62a5"},"\u8c03\u7528\u53d1\u9001\u63a5\u53e3\u8fdb\u884c\u6570\u636e\u4e0a\u62a5"),(0,a.kt)("p",null,"SDK \u652f\u6301\u5355\u6761\uff08\u63a8\u8350\uff09\u548c\u6279\u91cf\u53d1\u9001\uff0c\u4e8c\u8005\u53d1\u9001\u8fc7\u7a0b\u5747\u4e3a\u5f02\u6b65\u6a21\u5f0f\uff0c\u6570\u636e\u4e0a\u62a5\u63a5\u53e3\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002\u5728\u8fdb\u884c\u6570\u636e\u4e0a\u62a5\u524d\uff0c\u53ef\u8bbe\u7f6e\u56de\u8c03\u51fd\u6570\u5728\u6570\u636e\u53d1\u9001\u5931\u8d25\u65f6\u8fdb\u884c\u56de\u8c03\u5904\u7406\uff0c\u56de\u8c03\u51fd\u6570\u7b7e\u540d\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"int32_t callBackFunc(const char* inlong_group_id, const char* inlong_stream_id, const char* msg, int32_t msg_len, const int64_t report_time, const char* client_ip);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5355\u6761\u6570\u636e\u6570\u636e\u4e0a\u62a5\u63a5\u53e3")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// \u8fd4\u56de\u503c\uff1a\u96f6\u8868\u793a\u53d1\u9001\u6210\u529f\uff0c\u975e\u96f6\u8868\u793a\u5931\u8d25\uff0c\u5177\u4f53\u5f02\u5e38\u8fd4\u56de\u503c\u8be6\u89c1tc_api.h\u4e2d\u7684SDKInvalidReuslt\nint32_t tc_api_send(const char* inlong_group_id, const char* inlong_stream_id, const char* msg, int32_t msg_len, UserCallBack call_back = NULL);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6279\u91cf\u6570\u636e\u4e0a\u62a5\u63a5\u53e3")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"int32_t tc_api_send_batch(const char* inlong_group_id, const char* inlong_stream_id, const char** msg_list, int32_t msg_cnt, UserCallBack call_back = NULL);\n")),(0,a.kt)("h3",{id:"\u5173\u95ed-sdk"},"\u5173\u95ed SDK"),(0,a.kt)("p",null,"\u8c03\u7528 close \u63a5\u53e3\u5173\u95ed SDK\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// \u8fd4\u56de\u503c\u4e3a\u96f6\u8868\u793a\u5173\u95ed\u6210\u529f\uff0c\u540e\u7eed\u65e0\u6cd5\u518d\u8fdb\u884c\u6570\u636e\u4e0a\u62a5\n// max_waitms\uff1a\u5173\u95edSDK\u524d\u7684\u7b49\u5f85\u6700\u5927\u6beb\u79d2\u6570\uff0c\u7b49\u5f85SDK\u5185\u90e8\u6570\u636e\u53d1\u9001\u5b8c\u6210\nint32_t tc_api_close(int32_t max_waitms);\n")),(0,a.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SDK \u7684\u521d\u59cb\u5316\u548c\u5173\u95ed\u90fd\u662f\u8fdb\u7a0b\u7ea7\u522b\u7684\uff0c\u53ea\u9700\u521d\u59cb\u5316\u4e00\u6b21\uff0cfork \u7684\u5b50\u8fdb\u7a0b\u4e2d\u9700\u8c03\u7528\u521d\u59cb\u5316\u63a5\u53e3\u540e\u518d\u8fdb\u884c\u6570\u636e\u4e0a\u62a5\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u91c7\u7528\u5c06 SDK \u4f5c\u4e3a\u5e38\u9a7b\u670d\u52a1\u6765\u8fdb\u884c\u6570\u636e\u4e0a\u62a5\uff0c\u907f\u514d\u540c\u4e2a\u8fdb\u7a0b\u4e2d\u9014\u9891\u7e41\u5730\u521d\u59cb\u5316\u548c\u5173\u95ed\uff0c\u91cd\u590d\u521d\u59cb\u5316\u548c\u5173\u95ed\u4f1a\u5e26\u6765\u66f4\u591a\u5f00\u9500\uff1b"),(0,a.kt)("li",{parentName:"ul"},"SDK \u53d1\u9001\u662f\u5f02\u6b65\u8fdb\u884c\u7684\uff0c\u8fd4\u56de\u503c\u4e3a 0 \u8868\u793a\u6570\u636e\u6210\u529f\u5b58\u5165\u4e86 SDK \u5185\u90e8\u7f13\u51b2\u533a\uff0c\u7b49\u5f85\u7f51\u7edc\u53d1\u9001\u3002\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"li"},"inlong_group_id"),"\u672c\u8eab\u914d\u7f6e\u6709\u8bef\u6216\u8005\u7f51\u7edc\u5f02\u5e38\uff0c\u4e5f\u4f1a\u5bfc\u81f4\u6570\u636e\u53d1\u9001\u5931\u8d25\uff0c\u6240\u4ee5\u5efa\u8bae\u7528\u6237\u5728\u8c03\u7528\u8be5\u63a5\u53e3\u65f6\u8bbe\u7f6e\u56de\u8c03\uff0c\u6570\u636e\u591a\u6b21\u91cd\u8bd5\u53d1\u9001\u4ecd\u5931\u8d25\u65f6\u6267\u884c\u56de\u8c03\u3002")),(0,a.kt)("h2",{id:"\u9644\u5f55\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e"},"\u9644\u5f55\uff1a\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e"),(0,a.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f\u548c\u91cd\u8981\u53c2\u6570\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n"init-param": {\n"thread_num": 5, // \u7f51\u7edc\u6536\u53d1\u7ebf\u7a0b\u7684\u6570\u91cf\n"enable_pack": true, // \u662f\u5426\u591a\u6761\u6253\u5305\u53d1\u9001\n"pack_size": 409600, // \u6570\u636e\u8fbe\u5230pack_size\u5927\u5c0f\uff0c\u8fdb\u884c\u6253\u5305\u53d1\u9001\uff0c\u5355\u4f4d\u5b57\u8282\n"ext_pack_size": 409600, // \u5355\u6761\u6570\u636e\u6700\u5927\u957f\u5ea6\uff0c\u5355\u4f4d\u5b57\u8282\n"enable_zip": true, // \u662f\u5426\u8fdb\u884c\u6570\u636e\u538b\u7f29\n"min_ziplen": 4096, // \u6700\u5c0f\u538b\u7f29\u957f\u5ea6\uff0c\u5355\u4f4d\u5b57\u8282\n"enable_retry": true, // \u53d1\u9001\u5931\u8d25\u662f\u5426\u8fdb\u884c\u91cd\u8bd5\n"retry_ms": 10000, // \u91cd\u8bd5\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2\n"retry_num": 3, // \u53d1\u9001\u5931\u8d25\u6700\u5927\u91cd\u8bd5\u6b21\u6570\n"max_active_proxy": 4, // tcp\u6700\u5927\u8fde\u63a5\u6570\uff0c\u7528\u4e8e\u7f51\u7edc\u6570\u636e\u6536\u53d1\n"max_buf_pool": 548576000, // \u5355\u4e2a\u6570\u636e\u7f13\u5b58\u533a\u5927\u5c0f\uff0c\u5355\u4f4d\u5b57\u8282\n"buffer_num_per_groupId": 3, // \u6bcf\u4e2agroupid\u7684\u6570\u636e\u7f13\u5b58\u533a\u4e2a\u6570\n"log_num": 10, // \u6700\u5927\u65e5\u5fd7\u6587\u4ef6\u6570\n"log_size": 10, // \u5355\u4e2a\u65e5\u5fd7\u5927\u5c0f\u9650\u5236\uff0c\u5355\u4f4dMB\n"log_level": 3, // \u65e5\u5fd7\u7ea7\u522b\uff0ctrace(4)>debug(3)>info(2)>warn(1)>error(0)\n"log_file_type": 2, // \u65e5\u5fd7\u8f93\u51fa\uff0c2->\u6587\u4ef6, 1->\u63a7\u5236\u53f0\n"log_path": "./", // \u65e5\u5fd7\u8def\u5f84\n"proxy_cfg_preurl": "http://127.0.0.1:8099/inlong/manager/openapi/dataproxy/getIpList", // \u8bbf\u95eemanager\u7684url\n"need_auth": false, // \u662f\u5426\u9700\u8981\u8ba4\u8bc1\n"auth_id": "admin", // \u8ba4\u8bc1id\n"auth_key": "adminKey" // \u8ba4\u8bc1key\n}\n}\n')))}u.isMDXComponent=!0}}]);