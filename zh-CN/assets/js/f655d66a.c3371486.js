"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[95055],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=l,m=s["".concat(u,".").concat(d)]||s[d]||c[d]||r;return n?a.createElement(m,i(i({ref:t},g),{},{components:n})):a.createElement(m,i({ref:t},g))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={title:"1.8.0 \u7248\u672c\u53d1\u5e03",author:"Verne Deng",author_url:"https://github.com/vernedeng",author_image_url:"https://avatars.githubusercontent.com/u/45282474?v=4",tags:["Apache InLong","Version"]},i=void 0,o={permalink:"/zh-CN/blog/2023/07/24/release-1.8.0",editUrl:"https://github.com/apache/inlong-website/edit/master/blog/blog/2023-07-24-release-1.8.0.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2023-07-24-release-1.8.0.md",title:"1.8.0 \u7248\u672c\u53d1\u5e03",description:"Apache InLong\uff08\u5e94\u9f99\uff09 \u6700\u8fd1\u53d1\u5e03\u4e86 1.8.0 \u7248\u672c\uff0c\u8be5\u7248\u672c\u5173\u95ed\u4e86\u7ea6 190+ \u4e2aissue\uff0c\u5305\u542b 6+ \u4e2a\u5927\u7279\u6027\u548c 30+ \u4e2a\u4f18\u5316\uff0c\u4e3b\u8981\u5b8c\u6210\u4e86\u591a\u79df\u6237\u7ba1\u7406\u3001\u652f\u6301 Apache Flink \u591a\u7248\u672c\u3001Dashboard \u589e\u52a0\u6570\u636e\u540c\u6b65\u3001\u652f\u6301\u6570\u636e\u9884\u89c8\u3001\u4f18\u5316\u8d85\u957f\u65e5\u5fd7\u5904\u7406\u903b\u8f91\u7b49\u30021.8.0 \u53d1\u5e03\u540e\uff0cApache InLong \u56f4\u7ed5\u6570\u636e\u63a5\u5165\u3001\u6570\u636e\u540c\u6b65\u548c\u6570\u636e\u8ba2\u9605\u7684\u5168\u573a\u666f\u6570\u636e\u96c6\u6210\u5e03\u5c40\u57fa\u672c\u5b8c\u6210\uff0c\u914d\u5408\u591a\u79df\u6237\u7ba1\u7406\u3001\u591a\u96c6\u7fa4\u7ba1\u7406\u3001\u5ba1\u6279\u6d41\u7ba1\u7406\u3001\u5168\u94fe\u8def\u5ba1\u8ba1/\u6307\u6807\u7b49\u3002",date:"2023-07-24T00:00:00.000Z",formattedDate:"2023\u5e747\u670824\u65e5",tags:[{label:"Apache InLong",permalink:"/zh-CN/blog/tags/apache-in-long"},{label:"Version",permalink:"/zh-CN/blog/tags/version"}],readingTime:11.52,hasTruncateMarker:!0,authors:[{name:"Verne Deng",url:"https://github.com/vernedeng",imageURL:"https://avatars.githubusercontent.com/u/45282474?v=4"}],frontMatter:{title:"1.8.0 \u7248\u672c\u53d1\u5e03",author:"Verne Deng",author_url:"https://github.com/vernedeng",author_image_url:"https://avatars.githubusercontent.com/u/45282474?v=4",tags:["Apache InLong","Version"]},prevItem:{title:"1.9.0 \u7248\u672c\u53d1\u5e03",permalink:"/zh-CN/blog/2023/09/25/release-1.9.0"},nextItem:{title:"1.7.0 \u7248\u672c\u53d1\u5e03",permalink:"/zh-CN/blog/2023/05/19/release-1.7.0"}},u={authorsImageUrls:[void 0]},p=[{value:"\u5173\u4e8e Apache InLong",id:"\u5173\u4e8e-apache-inlong",level:2},{value:"1.8.0 \u7248\u672c\u603b\u89c8",id:"180-\u7248\u672c\u603b\u89c8",level:2},{value:"Agent \u6a21\u5757",id:"agent-\u6a21\u5757",level:3},{value:"DataProxy \u6a21\u5757",id:"dataproxy-\u6a21\u5757",level:3},{value:"Sort \u6a21\u5757",id:"sort-\u6a21\u5757",level:3},{value:"Manager \u6a21\u5757",id:"manager-\u6a21\u5757",level:3},{value:"Dashboard \u6a21\u5757",id:"dashboard-\u6a21\u5757",level:3},{value:"\u5176\u5b83",id:"\u5176\u5b83",level:3},{value:"1.8.0 \u7248\u672c\u7279\u6027\u4ecb\u7ecd",id:"180-\u7248\u672c\u7279\u6027\u4ecb\u7ecd",level:2},{value:"Agent \u4f18\u5316\u8d85\u957f\u65e5\u5fd7\u5904\u7406\u903b\u8f91\uff0c\u63d0\u5347\u6587\u4ef6\u91c7\u96c6\u6548\u7387\u548c\u7a33\u5b9a\u6027",id:"agent-\u4f18\u5316\u8d85\u957f\u65e5\u5fd7\u5904\u7406\u903b\u8f91\u63d0\u5347\u6587\u4ef6\u91c7\u96c6\u6548\u7387\u548c\u7a33\u5b9a\u6027",level:3},{value:"Agent \u91c7\u7528\u5168\u5c40\u6d41\u63a7\uff0c\u89e3\u51b3\u6587\u4ef6\u6570\u589e\u957f\u5bfc\u81f4\u7684 OOM \u95ee\u9898",id:"agent-\u91c7\u7528\u5168\u5c40\u6d41\u63a7\u89e3\u51b3\u6587\u4ef6\u6570\u589e\u957f\u5bfc\u81f4\u7684-oom-\u95ee\u9898",level:3},{value:"\u652f\u6301 Flink \u591a\u7248\u672c",id:"\u652f\u6301-flink-\u591a\u7248\u672c",level:3},{value:"\u652f\u6301\u591a\u79df\u6237\u7ba1\u7406",id:"\u652f\u6301\u591a\u79df\u6237\u7ba1\u7406",level:3},{value:"\u652f\u6301\u5b9e\u65f6\u540c\u6b65",id:"\u652f\u6301\u5b9e\u65f6\u540c\u6b65",level:3},{value:"\u652f\u6301\u6570\u636e\u9884\u89c8",id:"\u652f\u6301\u6570\u636e\u9884\u89c8",level:3},{value:"\u652f\u6301\u67e5\u8be2\u94fe\u8def\u4f20\u8f93\u65f6\u5ef6",id:"\u652f\u6301\u67e5\u8be2\u94fe\u8def\u4f20\u8f93\u65f6\u5ef6",level:3},{value:"\u540e\u7eed\u89c4\u5212",id:"\u540e\u7eed\u89c4\u5212",level:2}],g={toc:p},s="wrapper";function c(e){let{components:t,...r}=e;return(0,l.kt)(s,(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Apache InLong\uff08\u5e94\u9f99\uff09 \u6700\u8fd1\u53d1\u5e03\u4e86 1.8.0 \u7248\u672c\uff0c\u8be5\u7248\u672c\u5173\u95ed\u4e86\u7ea6 190+ \u4e2aissue\uff0c\u5305\u542b 6+ \u4e2a\u5927\u7279\u6027\u548c 30+ \u4e2a\u4f18\u5316\uff0c\u4e3b\u8981\u5b8c\u6210\u4e86\u591a\u79df\u6237\u7ba1\u7406\u3001\u652f\u6301 Apache Flink \u591a\u7248\u672c\u3001Dashboard \u589e\u52a0\u6570\u636e\u540c\u6b65\u3001\u652f\u6301\u6570\u636e\u9884\u89c8\u3001\u4f18\u5316\u8d85\u957f\u65e5\u5fd7\u5904\u7406\u903b\u8f91\u7b49\u30021.8.0 \u53d1\u5e03\u540e\uff0cApache InLong \u56f4\u7ed5\u6570\u636e\u63a5\u5165\u3001\u6570\u636e\u540c\u6b65\u548c\u6570\u636e\u8ba2\u9605\u7684\u5168\u573a\u666f\u6570\u636e\u96c6\u6210\u5e03\u5c40\u57fa\u672c\u5b8c\u6210\uff0c\u914d\u5408\u591a\u79df\u6237\u7ba1\u7406\u3001\u591a\u96c6\u7fa4\u7ba1\u7406\u3001\u5ba1\u6279\u6d41\u7ba1\u7406\u3001\u5168\u94fe\u8def\u5ba1\u8ba1/\u6307\u6807\u7b49\u3002"),(0,l.kt)("h2",{id:"\u5173\u4e8e-apache-inlong"},"\u5173\u4e8e Apache InLong"),(0,l.kt)("p",null,"\u4f5c\u4e3a\u4e1a\u754c\u9996\u4e2a\u4e00\u7ad9\u5f0f\u3001\u5168\u573a\u666f\u6d77\u91cf\u6570\u636e\u96c6\u6210\u6846\u67b6\uff0cApache InLong\uff08\u5e94\u9f99\uff09 \u63d0\u4f9b\u4e86\u81ea\u52a8\u3001\u5b89\u5168\u3001\u53ef\u9760\u548c\u9ad8\u6027\u80fd\u7684\u6570\u636e\u4f20\u8f93\u80fd\u529b\uff0c\u65b9\u4fbf\u4e1a\u52a1\u5feb\u901f\u6784\u5efa\u57fa\u4e8e\u6d41\u5f0f\u7684\u6570\u636e\u5206\u6790\u3001\u5efa\u6a21\u548c\u5e94\u7528\u3002\u76ee\u524d InLong \u6b63\u5e7f\u6cdb\u5e94\u7528\u4e8e\u5e7f\u544a\u3001\u652f\u4ed8\u3001\u793e\u4ea4\u3001\u6e38\u620f\u3001\u4eba\u5de5\u667a\u80fd\u7b49\u5404\u4e2a\u884c\u4e1a\u9886\u57df\uff0c\u670d\u52a1\u4e0a\u5343\u4e2a\u4e1a\u52a1\uff0c\u5176\u4e2d\u9ad8\u6027\u80fd\u573a\u666f\u6570\u636e\u89c4\u6a21\u8d85\u767e\u4e07\u4ebf\u6761/\u5929\uff0c\u9ad8\u53ef\u9760\u573a\u666f\u6570\u636e\u89c4\u6a21\u8d85\u5341\u4e07\u4ebf\u6761/\u5929\u3002"),(0,l.kt)("p",null,"InLong \u9879\u76ee\u5b9a\u4f4d\u7684\u6838\u5fc3\u5173\u952e\u8bcd\u662f\u201c\u4e00\u7ad9\u5f0f\u201d\u3001\u201c\u5168\u573a\u666f\u201d\u548c\u201c\u6d77\u91cf\u6570\u636e\u201d\u3002\u5bf9\u4e8e\u201c\u4e00\u7ad9\u5f0f\u201d\uff0c\u6211\u4eec\u5e0c\u671b\u5c4f\u853d\u6280\u672f\u7ec6\u8282\u3001\u63d0\u4f9b\u5b8c\u6574\u6570\u636e\u96c6\u6210\u53ca\u914d\u5957\u670d\u52a1\uff0c\u5b9e\u73b0\u5f00\u7bb1\u5373\u7528\uff1b\u5bf9\u4e8e\u201c\u5168\u573a\u666f\u201d\uff0c\u6211\u4eec\u5e0c\u671b\u63d0\u4f9b\u5168\u65b9\u4f4d\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u8986\u76d6\u5927\u6570\u636e\u9886\u57df\u5e38\u89c1\u7684\u6570\u636e\u96c6\u6210\u573a\u666f\uff1b\u5bf9\u4e8e\u201c\u6d77\u91cf\u6570\u636e\u201d\uff0c\u6211\u4eec\u5e0c\u671b\u901a\u8fc7\u67b6\u6784\u4e0a\u7684\u6570\u636e\u94fe\u8def\u5206\u5c42\u3001\u5168\u7ec4\u4ef6\u53ef\u6269\u5c55\u3001\u81ea\u5e26\u591a\u96c6\u7fa4\u7ba1\u7406\u7b49\u4f18\u52bf\uff0c\u5728\u767e\u4e07\u4ebf\u6761/\u5929\u7684\u57fa\u7840\u4e0a\uff0c\u7a33\u5b9a\u652f\u6301\u66f4\u5927\u89c4\u6a21\u7684\u6570\u636e\u91cf\u3002"),(0,l.kt)("h2",{id:"180-\u7248\u672c\u603b\u89c8"},"1.8.0 \u7248\u672c\u603b\u89c8"),(0,l.kt)("p",null,"Apache InLong\uff08\u5e94\u9f99\uff09 \u6700\u8fd1\u53d1\u5e03\u4e86 1.8.0 \u7248\u672c\uff0c\u8be5\u7248\u672c\u5173\u95ed\u4e86\u7ea6 190+ \u4e2aissue\uff0c\u5305\u542b 6+ \u4e2a\u5927\u7279\u6027\u548c 30+ \u4e2a\u4f18\u5316\uff0c\u4e3b\u8981\u5b8c\u6210\u4e86\u591a\u79df\u6237\u7ba1\u7406\u3001\u652f\u6301 Apache Flink \u591a\u7248\u672c\u3001Dashboard \u589e\u52a0\u6570\u636e\u540c\u6b65\u3001\u652f\u6301\u6570\u636e\u9884\u89c8\u3001\u4f18\u5316\u8d85\u957f\u65e5\u5fd7\u5904\u7406\u903b\u8f91\u7b49\u30021.8.0 \u53d1\u5e03\u540e\uff0cApache InLong \u56f4\u7ed5\u6570\u636e\u63a5\u5165\u3001\u6570\u636e\u540c\u6b65\u548c\u6570\u636e\u8ba2\u9605\u7684\u5168\u573a\u666f\u6570\u636e\u96c6\u6210\u5e03\u5c40\u57fa\u672c\u5b8c\u6210\uff0c\u914d\u5408\u591a\u79df\u6237\u7ba1\u7406\u3001\u591a\u96c6\u7fa4\u7ba1\u7406\u3001\u5ba1\u6279\u6d41\u7ba1\u7406\u3001\u5168\u94fe\u8def\u5ba1\u8ba1/\u6307\u6807\u7b49\uff0cApache InLong \u642d\u5efa\u5b8c\u6210\u5168\u65b9\u4f4d\u7684\u6570\u636e\u96c6\u6210\u89e3\u51b3\u65b9\u6848\uff0c\u5b9e\u73b0\u5f00\u7bb1\u673a\u7528\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u63a5\u5165\uff1a\u6570\u636e\u63a5\u5165\u662f\u5c06\u6570\u636e\u4ece\u6570\u636e\u6e90\u6c47\u805a\u5230\u540c\u4e00\u4e2a\u5b58\u50a8\u670d\u52a1\u7684\u8fc7\u7a0b\uff0c\u53ef\u7528\u4e8e\u8fdb\u4e00\u6b65\u6570\u636e\u67e5\u8be2\u548c\u5206\u6790\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u540c\u6b65\uff1a\u6570\u636e\u540c\u6b65\u662f\u5efa\u7acb\u6570\u636e\u6e90\u548c\u76ee\u6807\u6570\u636e\u5b58\u50a8\u4e4b\u95f4\u4e00\u81f4\u6027\u7684\u8fc7\u7a0b\uff0c\u53ef\u968f\u7740\u65f6\u95f4\u6301\u7eed\u534f\u8c03\u6570\u636e\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u8ba2\u9605\uff1a\u6570\u636e\u8ba2\u9605\u4e3a\u8ba2\u9605\u8005\u63d0\u4f9b\u4ed6\u4eec\u6709\u6743\u8bbf\u95ee\u7684\u6570\u636e\uff1b")),(0,l.kt)("p",null,"Apache InLong 1.8.0 \u7248\u672c\u4e2d\uff0c\u8fd8\u5b8c\u6210\u4e86\u5927\u91cf\u5176\u5b83\u7279\u6027\uff0c\u4e3b\u8981\u5305\u62ec\uff1a"),(0,l.kt)("h3",{id:"agent-\u6a21\u5757"},"Agent \u6a21\u5757"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5316\u8d85\u957f\u65e5\u5fd7\u5904\u7406\u903b\u8f91\uff0c\u63d0\u5347\u6587\u4ef6\u91c7\u96c6\u6548\u7387\u548c\u7a33\u5b9a\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u590d\u56e0\u4efb\u52a1\u505c\u6b62\u5bfc\u81f4\u7ebf\u7a0b\u6cc4\u6f0f\u7684\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"\u91c7\u7528\u6d41\u91cf\u63a7\u5236\uff0c\u89e3\u51b3\u6587\u4ef6\u6570\u589e\u957f\u5bfc\u81f4\u7684 OOM \u95ee\u9898")),(0,l.kt)("h3",{id:"dataproxy-\u6a21\u5757"},"DataProxy \u6a21\u5757"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 Golang SDK"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u57fa\u4e8e\u5b8c\u6574 IP \u6216 CIDR \u683c\u5f0f\u7684 IP \u6bb5\u914d\u7f6e\u9ed1\u767d\u540d\u5355"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u914d\u7f6e\u5199\u5165\u6700\u5927\u91cd\u8bd5\u6b21\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u914d\u7f6e\u5199\u5165\u5931\u8d25\u65f6\u5c06\u6570\u636e\u53d1\u9001\u5230\u7f3a\u7701 Topic"),(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u91cd\u6784\uff0c\u7edf\u4e00\u914d\u7f6e\u83b7\u53d6\u65b9\u5f0f")),(0,l.kt)("h3",{id:"sort-\u6a21\u5757"},"Sort \u6a21\u5757"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u589e\u5f3a\u4e86 DDL \u7684\u89e3\u6790\u80fd\u529b, \u63d0\u5347 DDL \u611f\u77e5\u573a\u666f\u7684\u7a33\u5b9a\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 Flink \u591a\u7248\u672c"),(0,l.kt)("li",{parentName:"ul"},"\u6574\u5e93\u573a\u666f\u4e0b\u652f\u6301 Decimal \u7684\u7cbe\u5ea6\u8bc6\u522b"),(0,l.kt)("li",{parentName:"ul"},"Hive \u652f\u6301\u6574\u5e93\u8fc1\u79fb\uff0c\u5b9e\u73b0\u65b9\u5f0f\u4e0e mysql \u6574\u5e93\u8fc1\u79fb\u4fdd\u6301\u4e00\u81f4"),(0,l.kt)("li",{parentName:"ul"},"Iceberg \u652f\u6301\u81ea\u52a8\u5217\u66f4\u65b0\u548c\u5217\u5220\u9664\uff0c\u6781\u5927\u4e30\u5bcc\u4e86 Schema \u53d8\u66f4\u80fd\u529b")),(0,l.kt)("h3",{id:"manager-\u6a21\u5757"},"Manager \u6a21\u5757"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 Pulsar\u3001TubeMQ \u6570\u636e\u9884\u89c8"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u52a8\u6001\u914d\u7f6e\u5ba1\u8ba1\u6570\u636e\u6e90"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u67e5\u8be2\u5ba1\u8ba1\u5ef6\u8fdf\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u79df\u6237\u7ba1\u7406")),(0,l.kt)("h3",{id:"dashboard-\u6a21\u5757"},"Dashboard \u6a21\u5757"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u6d41\u5411\u6570\u636e\u9884\u89c8"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 InLongGroup \u67e5\u770b\u8d44\u6e90\u8be6\u60c5"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u79df\u6237\u7ba1\u7406\u548c\u79df\u6237\u5207\u6362"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u6570\u636e\u540c\u6b65")),(0,l.kt)("h3",{id:"\u5176\u5b83"},"\u5176\u5b83"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u79fb\u9664 Jsqlparser \u51b2\u7a81\u7248\u672c"),(0,l.kt)("li",{parentName:"ul"},"\u5347\u7ea7 Spring-Boot-Autoconfigure \u7248\u672c\u5230 2.6.15"),(0,l.kt)("li",{parentName:"ul"},"\u5347\u7ea7 Snappy-Java \u7248\u672c\u5230 1.1.10.1"),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u590d Workflow \u914d\u7f6e\u6587\u4ef6\u8bed\u6cd5\u9519\u8bef")),(0,l.kt)("h2",{id:"180-\u7248\u672c\u7279\u6027\u4ecb\u7ecd"},"1.8.0 \u7248\u672c\u7279\u6027\u4ecb\u7ecd"),(0,l.kt)("h3",{id:"agent-\u4f18\u5316\u8d85\u957f\u65e5\u5fd7\u5904\u7406\u903b\u8f91\u63d0\u5347\u6587\u4ef6\u91c7\u96c6\u6548\u7387\u548c\u7a33\u5b9a\u6027"},"Agent \u4f18\u5316\u8d85\u957f\u65e5\u5fd7\u5904\u7406\u903b\u8f91\uff0c\u63d0\u5347\u6587\u4ef6\u91c7\u96c6\u6548\u7387\u548c\u7a33\u5b9a\u6027"),(0,l.kt)("p",null,"\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\uff0c\u7531\u4e8e\u7528\u6237\u4f7f\u7528\u4e0d\u5f53\u6216\u6570\u636e\u751f\u4ea7\u7a0b\u5e8f bug \u7b49\u95ee\u9898\uff0c\u5076\u53d1\u51fa\u73b0\u5355\u6761\u6570\u636e\u957f\u5ea6\u8fbe\u5230 MB \u751a\u81f3 GB \u7ea7\u522b\u3002 \u5bf9\u4e8e\u90e8\u7f72\u5728\u4f4e\u914d\u73af\u5883\u7684 Agent \u800c\u8a00\uff0c\u8fd9\u7c7b\u6570\u636e\u6781\u5927\u5f71\u54cd\u4e86\u53d1\u9001\u7684\u6027\u80fd\u3002 \u4f4e\u7248\u672c Agent \u6839\u636e\u6362\u884c\u7b26\u5c06\u8fd9\u7c7b\u6570\u636e\u76f4\u63a5\u8bfb\u5230\u5185\u5b58\u4e2d\u518d\u4e22\u5f03\uff0c\u4f46\u53d7\u9650\u4e8e Agent \u90e8\u7f72\u73af\u5883\u786c\u4ef6\u914d\u7f6e\uff0c \u5355\u6761\u8d85\u957f\u6570\u636e\u6781\u6613\u5bfc\u81f4 OOM \u5f02\u5e38\u3002 \u5728 1.8.0 \u7248\u672c\u4e2d\uff0c Agent \u4f18\u5316\u4e86\u8d85\u957f\u65e5\u5fd7\u7684\u5904\u7406\u903b\u8f91\uff0c \u901a\u8fc7\u5206\u6bb5\u91c7\u96c6\u3001\u5206\u6bb5\u4e22\u5f03\u7684\u65b9\u5f0f\u4fdd\u8bc1\u6570\u636e\u52a0\u8f7d\u4e0d\u4f1a\u8d85\u8fc7\u5185\u5b58\u9650\u5236\u3002 \u611f\u8c22 @justinhuang \u7684\u8d21\u732e\uff0c\u8be6\u60c5\u53ef\u89c1 INLONG-8180\u3002\n",(0,l.kt)("img",{alt:"1.8.0-agent-under-1.8.0.png",src:n(72124).Z,width:"2544",height:"1356"}),"\n",(0,l.kt)("img",{alt:"1.8.0-agent-1.8.0.png",src:n(60174).Z,width:"3334",height:"2143"})),(0,l.kt)("h3",{id:"agent-\u91c7\u7528\u5168\u5c40\u6d41\u63a7\u89e3\u51b3\u6587\u4ef6\u6570\u589e\u957f\u5bfc\u81f4\u7684-oom-\u95ee\u9898"},"Agent \u91c7\u7528\u5168\u5c40\u6d41\u63a7\uff0c\u89e3\u51b3\u6587\u4ef6\u6570\u589e\u957f\u5bfc\u81f4\u7684 OOM \u95ee\u9898"),(0,l.kt)("p",null,"\u5728\u4e4b\u524d\u7248\u672c\u4e2d\uff0c\u6bcf\u4e2a\u6587\u4ef6\u5206\u522b\u7531\u5404\u81ea\u7684\u7ebf\u7a0b\u8d1f\u8d23\u91c7\u96c6\u548c\u53d1\u9001\u3002\u867d\u7136\u6211\u4eec\u9650\u5236\u4e86\u6bcf\u4e2a\u6587\u4ef6\u7684\u6700\u5927\u91c7\u96c6 buffer\uff0c\u4f46\u662f\u968f\u7740\u7528\u6237\u6d41\u91cf\u7684\u589e\u957f\uff0c\u6587\u4ef6\u6570\u7684\u589e\u52a0\u96be\u4ee5\u907f\u514d\uff0c\u8fdb\u800c\u5bfc\u81f4\u540c\u65f6\u91c7\u96c6\u6587\u4ef6\u6570\u8fc7\u591a\uff0c\u6253\u7206\u5185\u5b58\u5f15\u53d1 OOM \u5f02\u5e38\u3002InLong \u5728 1.8.0 \u7248\u672c\u4e2d\u652f\u6301 Agent \u914d\u7f6e\u5168\u5c40\u6d41\u91cf\u63a7\u5236\u7684\u7279\u6027\uff0c\u5229\u7528\u8be5\u7279\u6027\uff0cAgent \u53ef\u4ee5\u6709\u6548\u907f\u514d\u56e0\u4e3a\u6587\u4ef6\u6570\u589e\u957f\u6216\u8005\u91c7\u7528\u5c0f\u914d\u989d\u670d\u52a1\u5668\u5bfc\u81f4\u7684\u9891\u7e41 OOM \u7684\u95ee\u9898\uff0c\u611f\u8c22 @justinhuang \u7684\u8d21\u732e\uff0c\u8be6\u60c5\u53ef\u89c1 INLONG-8251\u3002\u5982\u679c\u9700\u8981\u4f7f\u7528\u8be5\u7279\u6027\uff0c\u53ef\u4ee5\u5728 agent.properties \u4e2d\u589e\u52a0\u76f8\u5e94\u914d\u7f6e\u3002\n",(0,l.kt)("img",{alt:"1.8.0-agent-flow-controll.png",src:n(25783).Z,width:"3356",height:"1213"})),(0,l.kt)("h3",{id:"\u652f\u6301-flink-\u591a\u7248\u672c"},"\u652f\u6301 Flink \u591a\u7248\u672c"),(0,l.kt)("p",null,"\u968f\u7740\u793e\u533a\u7528\u6237\u7684\u6df1\u5165\u4f7f\u7528\uff0cInLong \u9762\u5bf9\u7684\u573a\u666f\u4e5f\u66f4\u52a0\u591a\u6837\u5316\u548c\u590d\u6742\u5316\u3002\u4e3a\u4e86\u652f\u6301\u4e0d\u540c Flink \u73af\u5883\u7684\u7528\u6237\u9700\u6c42\uff0cInLong \u5728\u5f53\u524d\u7248\u672c\u589e\u52a0\u4e86\u652f\u6301 Flink \u591a\u7248\u672c\u7684\u7279\u6027\uff0c\u7528\u6237\u53ef\u4ee5\u5728 InLong-Manager \u7684 plugins/flink-sort-plugin.properties \u914d\u7f6e\u6587\u4ef6\u4e2d\u9009\u62e9\u542f\u52a8\u7684flink \u7248\u672c\u3002"),(0,l.kt)("p",null,"\u66f4\u6362\u8fd0\u884c Sort \u7ec4\u4ef6\u6240\u9700\u8981\u7684 Flink \u7248\u672c\u65f6\uff0c\u4e5f\u9700\u8981\u66f4\u6362 InLong-Sort/connector \u76ee\u5f55\u4e2d\u7684 connectors \u4e3a\u5bf9\u5e94\u7248\u672c\u7684 jar \u5305\uff0c\u8be6\u60c5\u53ef\u4ee5\u67e5\u770b InLong \u5b98\u7f51\u6587\u6863\u3002\u611f\u8c22 @Emsnap\uff0c@GanfengTan \u548c @haifxu \u5bf9\u8be5\u80fd\u529b\u7684\u8d21\u732e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# inLong-manager/plugins/flink-sort-plugin.properties\n\n# Flink version, support [1.13|1.15]\nflink.version=1.13\n")),(0,l.kt)("h3",{id:"\u652f\u6301\u591a\u79df\u6237\u7ba1\u7406"},"\u652f\u6301\u591a\u79df\u6237\u7ba1\u7406"),(0,l.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u591a\u7528\u6237\u573a\u666f\u4e0b\u5bf9\u4e8e\u6743\u9650\u548c\u8d44\u6e90\u9694\u79bb\u6027\u7684\u8981\u6c42\uff0cInLong \u5728\u5f53\u524d\u7248\u672c\u5f15\u5165\u4e86\u591a\u79df\u6237\u67b6\u6784\u3002\u591a\u79df\u6237\u67b6\u6784\u80fd\u591f\u5728\u540c\u4e00\u7ec4\u670d\u52a1\u4e0b\uff0c\u786e\u4fdd\u4e0d\u540c\u7528\u6237\u95f4\u6570\u636e\u548c\u6743\u9650\u4e92\u4e0d\u5e72\u6270\u3002\u611f\u8c22 @vernedeng \u548c @bluewang \u5bf9\u8be5\u529f\u80fd\u7684\u8d21\u732e\uff0c\u7279\u6027\u8be6\u60c5\u53ef\u89c1 INLONG-7914\u3002\u4e0b\u56fe\u4e3a\u6838\u5fc3\u6d41\u7a0b\uff1a\n",(0,l.kt)("img",{alt:"1.8.0-multi-tenant-management.png",src:n(52360).Z,width:"2597",height:"3891"})),(0,l.kt)("p",null,"\u79df\u6237\u5bf9\u4e8e\u6838\u5fc3\u903b\u8f91\u5f00\u53d1\u8005\u800c\u8a00\u662f\u900f\u660e\u7684\u3002\u5728\u8bf7\u6c42\u7684\u5165\u53e3\u5904\uff0c\u589e\u52a0\u4e86\u79df\u6237\u9274\u6743\uff0c\u5bf9\u4e8e\u6ca1\u6709\u8bbf\u95ee\u8be5\u79df\u6237\u6743\u9650\u7684\u8bf7\u6c42\u76f4\u63a5\u9a73\u56de\uff1b\u5728\u8bbf\u95ee Database \u524d\uff0c\u589e\u52a0\u5bf9\u5e94\u7684\u79df\u6237\u8fc7\u6ee4\u6761\u4ef6\uff0c\u786e\u4fdd\u6570\u636e\u7684\u67e5\u8be2\u548c\u4fee\u6539\u8303\u56f4\u88ab\u9650\u5236\u5728\u8be5\u79df\u6237\u5185\u3002"),(0,l.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728 Dashboard \u4e0a\u5b8c\u6210\u79df\u6237\u7684\u521b\u5efa\uff0c\u79df\u6237\u89d2\u8272\u5206\u914d\u7b49\u64cd\u4f5c\u3002\n",(0,l.kt)("img",{alt:"1.8.0-create-tenant.png",src:n(39009).Z,width:"3434",height:"1790"})),(0,l.kt)("h3",{id:"\u652f\u6301\u5b9e\u65f6\u540c\u6b65"},"\u652f\u6301\u5b9e\u65f6\u540c\u6b65"),(0,l.kt)("p",null,"\u65b0\u7248\u672c\u4e2d\u652f\u6301\u4e86\u6570\u636e\u7684\u5b9e\u65f6\u540c\u6b65\uff0c\u5b9e\u65f6\u540c\u6b65\u4e0e\u6570\u636e\u63a5\u5165\u7684\u4e3b\u8981\u533a\u522b\u662f\u4e0d\u9700\u8981\u4e2d\u95f4 MQ \u5b58\u50a8\u7684\u652f\u6301\uff0c\u7531 Sort \u7ec4\u4ef6\u76f4\u63a5\u5c06\u6e90\u7aef\u6570\u636e\u5165\u5e93\uff0c\u6781\u5927\u4e30\u5bcc\u4e86\u7528\u6237\u7684\u4f7f\u7528\u573a\u666f\u3002"),(0,l.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff0cTab \u9875\u65b0\u589e \u201c\u6570\u636e\u540c\u6b65\u201d \u6807\u7b7e\uff0c\u7528\u6237\u914d\u7f6e\u5b8c\u57fa\u672c Group \u4fe1\u606f\u540e\u53ea\u9700\u8981\u8f93\u5165 \u201c\u6570\u636e\u6765\u6e90\u201d \u4ee5\u53ca \u201c\u6570\u636e\u76ee\u6807\u201d \u4fe1\u606f\u5373\u53ef\uff0c\u63d0\u4ea4\u4efb\u52a1\u540e\u4fbf\u53ef\u5b9e\u73b0\u6570\u636e\u7684\u5b9e\u65f6\u540c\u6b65\u3002"),(0,l.kt)("p",null,"\u611f\u8c22 @fuwen11 \u3001@bluewang \u3001@Emsnap \u3001@haifxu \u5bf9\u6b64\u529f\u80fd\u7684\u8d21\u732e\u3002\n",(0,l.kt)("img",{alt:"1.8.0-realtime-sync.png",src:n(61738).Z,width:"3406",height:"1730"})),(0,l.kt)("h3",{id:"\u652f\u6301\u6570\u636e\u9884\u89c8"},"\u652f\u6301\u6570\u636e\u9884\u89c8"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u521a\u63a5\u5165 InLong \u7684\u4e1a\u52a1\u800c\u8a00\uff0c\u6570\u636e\u9884\u89c8\u80fd\u591f\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u786e\u8ba4\u4e0a\u62a5\u6570\u636e\u7684\u51c6\u786e\u6027\u4ee5\u53ca\u5b9a\u4f4d\u95ee\u9898\u3002\u5728\u8be5\u7248\u672c\u4e2d\uff0cInLong \u524d\u7aef\u652f\u6301\u9884\u89c8\u7528\u6237\u5b9e\u65f6\u4e0a\u62a5\u7684\u6570\u636e\u3002\u611f\u8c22 @fuwen11 \u548c @bluewang \u7684\u8d21\u732e\uff0c\u7528\u6237\u5728\u6210\u529f\u521b\u5efa\u6570\u636e\u6d41\u5e76\u4e0a\u62a5\u6570\u636e\u540e\uff0c\u53ef\u4ee5\u5728\u6570\u636e\u6d41\u4e0b\u7684\u64cd\u4f5c\u680f\u9009\u62e9\u6570\u636e\u9884\u89c8\u3002\n",(0,l.kt)("img",{alt:"1.8.0-data-preview.png",src:n(74465).Z,width:"3454",height:"1892"})),(0,l.kt)("h3",{id:"\u652f\u6301\u67e5\u8be2\u94fe\u8def\u4f20\u8f93\u65f6\u5ef6"},"\u652f\u6301\u67e5\u8be2\u94fe\u8def\u4f20\u8f93\u65f6\u5ef6"),(0,l.kt)("p",null,"\u4f20\u8f93\u65f6\u5ef6\u5bf9\u4e8e\u67d0\u4e9b\u5b9e\u65f6\u6d88\u8d39\u573a\u666f\u81f3\u5173\u91cd\u8981\u3002\u5728\u8be5\u7248\u672c\u4e2d\uff0cInLong \u5ba1\u8ba1\u652f\u6301\u524d\u7aef\u67e5\u770b\u5e73\u5747\u4f20\u8f93\u65f6\u5ef6\u6307\u6807\u3002\u611f\u8c22 @fuwen11 \u548c @bluewang \u7684\u8d21\u732e\uff0c\u7528\u6237\u5728\u6210\u529f\u521b\u5efa\u6570\u636e\u6d41\u5e76\u4e0a\u62a5\u6570\u636e\u540e\uff0c \u53ef\u4ee5\u67e5\u8be2\u94fe\u8def\u4f20\u8f93\u65f6\u5ef6\u3002\n",(0,l.kt)("img",{alt:"1.8.0-trans-delay.png",src:n(80668).Z,width:"3418",height:"1920"})),(0,l.kt)("h2",{id:"\u540e\u7eed\u89c4\u5212"},"\u540e\u7eed\u89c4\u5212"),(0,l.kt)("p",null,"\u5728 1.8.0 \u7248\u672c\u4e2d\uff0c\u793e\u533a\u8fd8\u91cd\u6784\u4e86 DataProxy \u4ee3\u7801\uff0c\u7edf\u4e00\u4e86\u914d\u7f6e\u62c9\u53d6\u63a5\u53e3\uff0c\u652f\u6301\u5b8c\u6574 IP \u548c\u57fa\u4e8e CIDR \u7684 IP \u6bb5\u914d\u7f6e\u9ed1\u767d\u540d\u5355\u7684\u7279\u6027\uff0c\u63d0\u5347\u4e86\u6a21\u5757\u6027\u80fd\u548c\u7a33\u5b9a\u6027\u3002 Sort \u5728 DDL \u611f\u77e5\u573a\u666f\u7684\u7a33\u5b9a\u6027\u6709\u6240\u63d0\u5347\uff0c \u540c\u65f6\u652f\u6301 Hive \u6574\u5e93\u8fc1\u79fb\uff0c Iceberg \u81ea\u52a8\u5217\u66f4\u65b0\u548c\u5217\u5b58\u50a8\u7b49\u7279\u6027\u3002 \u5728\u540e\u7eed\u7684\u7248\u672c\u4e2d\uff0cInLong \u5c06\u91cd\u6784 DataProxy C++ SDK\u3001\u4e30\u5bcc Flink 1.15 Connector\u3001\u5b8c\u5584\u6570\u636e\u540c\u6b65\u529f\u80fd\u7b49\uff0c\u671f\u5f85\u66f4\u591a\u5f00\u53d1\u8005\u53c2\u4e0e\u8d21\u732e\u3002"))}c.isMDXComponent=!0},60174:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.8.0-agent-1.8.0-5605736e061b6d7909be88085fe7e328.png"},25783:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.8.0-agent-flow-controll-586153f2b9ee526b805dd01af8db56f1.png"},72124:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.8.0-agent-under-1.8.0-9125fe37a0229a983fe1e6f5a6606d31.png"},39009:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.8.0-create-tenant-0bddece982572c7109ab72d18431d5c2.png"},74465:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.8.0-data-preview-b57375e0fb1900ce7ec00e64aadade27.png"},52360:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.8.0-multi-tenant-management-c3af4313025cdb26d7601e45b2274420.png"},61738:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.8.0-realtime-sync-dff9bc08b12b5b1dd6f1573daae1f60f.png"},80668:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.8.0-trans-delay-43848139f9890a2467bf813425069b40.png"}}]);