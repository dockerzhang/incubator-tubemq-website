"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4864],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73603:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u5b89\u88c5\u90e8\u7f72"},l=void 0,i={unversionedId:"modules/dataproxy/quick_start",id:"version-1.2.0/modules/dataproxy/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u6240\u6709\u7684\u5b89\u88c5\u6587\u4ef6\u90fd\u5728 inlong-dataproxy \u76ee\u5f55\u4e0b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2.0/modules/dataproxy/quick_start.md",sourceDirName:"modules/dataproxy",slug:"/modules/dataproxy/quick_start",permalink:"/zh-CN/docs/modules/dataproxy/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.2.0/modules/dataproxy/quick_start.md",tags:[],version:"1.2.0",frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72"},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/modules/dataproxy/overview"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/modules/tubemq/overview"}},p={},s=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u914d\u7f6e InLong-Manager \u5730\u5740",id:"\u914d\u7f6e-inlong-manager-\u5730\u5740",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2},{value:"\u68c0\u67e5",id:"\u68c0\u67e5",level:2},{value:"\u5c06 DataProxy \u6ce8\u518c\u5230 InLong-Manager",id:"\u5c06-dataproxy-\u6ce8\u518c\u5230-inlong-manager",level:2}],c={toc:s};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6240\u6709\u7684\u5b89\u88c5\u6587\u4ef6\u90fd\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-dataproxy")," \u76ee\u5f55\u4e0b\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("h3",{id:"\u914d\u7f6e-inlong-manager-\u5730\u5740"},"\u914d\u7f6e InLong-Manager \u5730\u5740"),(0,a.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"conf/common.properties"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# manager \u5730\u5740\nmanager.hosts=127.0.0.1:8083\n# audit proxy \u5730\u5740\naudit.proxys=127.0.0.1:10081\n")),(0,a.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \u9ed8\u8ba4\u4f7f\u7528 Pulsar \u6765\u7f13\u5b58\u6570\u636e\uff0c\u52a0\u8f7d dataproxy-pulsar.conf \u914d\u7f6e\u6587\u4ef6\nbash +x bin/dataproxy-start.sh\n# \u6216\u8005\nbash +x bin/dataproxy-start.sh pulsar\n# \u5982\u679c\u4f7f\u7528 Inlong TubeMQ \u6765\u7f13\u5b58\u6570\u636e\n# bash +x bin/dataproxy-start.sh tube\n")),(0,a.kt)("h2",{id:"\u68c0\u67e5"},"\u68c0\u67e5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"telnet 127.0.0.1 46801\n")),(0,a.kt)("h2",{id:"\u5c06-dataproxy-\u6ce8\u518c\u5230-inlong-manager"},"\u5c06 DataProxy \u6ce8\u518c\u5230 InLong-Manager"),(0,a.kt)("p",null,"\u5b89\u88c5\u5b8c DataProxy \u540e\uff0c\u9700\u8981\u5c06 DataProxy \u670d\u52a1\u7684 IP \u6dfb\u52a0\u5230 InLong-Manager \u4e2d\u3002"),(0,a.kt)("p",null,"\u6253\u5f00 Inlong-Dashboard \u9875\u9762\uff08\u9ed8\u8ba4\u662f ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1"},"http://127.0.0.1"),"\uff09\uff0c\u5728 ","[\u96c6\u7fa4\u7ba1\u7406]"," \u9875\u7b7e\u4e2d\u9009\u62e9\u6dfb\u52a0 DataProxy \u96c6\u7fa4\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(43604).Z,width:"840",height:"409"})),(0,a.kt)("p",null,"\u70b9\u51fb ","[\u65b0\u5efa\u96c6\u7fa4]"," \u6309\u94ae\uff0c\u5728\u5f39\u51fa\u7684\u6846\u4e2d\u586b\u5199 \u96c6\u7fa4\u540d\u79f0\u3001\u96c6\u7fa4\u6807\u7b7e\u3001\u8d23\u4efb\u4eba \u5373\u53ef\u4fdd\u5b58\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8bf4\u660e\uff1a","[\u96c6\u7fa4\u6807\u7b7e]"," \u662f\u4e00\u4e2a\u903b\u8f91\u6982\u5ff5\uff0c\u540c\u540d\u7684\u6807\u7b7e\u5c06\u88ab\u89c6\u4e3a\u540c\u4e00\u5957\u96c6\u7fa4\uff0c\u6bd4\u5982\u76f8\u540c\u96c6\u7fa4\u6807\u7b7e\u7684 DataProxy \u96c6\u7fa4\u548c Pulsar \u96c6\u7fa4\uff0c\u5c5e\u4e8e\u540c\u4e00\u5957\u96c6\u7fa4\u3002")),(0,a.kt)("p",null,"\u7136\u540e\u4e3a\u6b64 DataProxy \u96c6\u7fa4\u6dfb\u52a0\u8282\u70b9 \u2014\u2014 \u4e00\u4e2a DataProxy \u96c6\u7fa4\u53ef\u4ee5\u652f\u6301\u6dfb\u52a0\u591a\u4e2a\u8282\u70b9\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(48712).Z,width:"841",height:"400"})),(0,a.kt)("p",null,"\u586b\u5199 DataProxy \u8282\u70b9\u7684 IP \u548c\u7aef\u53e3\u5373\u53ef\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(32864).Z,width:"840",height:"457"})))}u.isMDXComponent=!0},43604:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dp_cluster_cn-520b6e359e1818d9e71f159a74902aa2.png"},48712:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dp_cluster_node_cn-8b911466b0e7d45be82d085e17c8cbeb.png"},32864:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dp_cluster_node_save_cn-bb28b7e9098fdd00d6b7e0c9efbaddd3.png"}}]);