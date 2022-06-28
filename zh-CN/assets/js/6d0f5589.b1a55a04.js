"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8394],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=p(n),s=r,g=c["".concat(d,".").concat(s)]||c[s]||k[s]||l;return n?a.createElement(g,o(o({ref:e},m),{},{components:n})):a.createElement(g,o({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},50271:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"InLong Sort ETL \u65b9\u6848\u89e3\u6790"},o="\u57fa\u4e8e Apache Flink SQL \u7684 InLong Sort ETL \u65b9\u6848\u89e3\u6790",i={permalink:"/zh-CN/blog/2022/06/16/inlong-sort-etl",editUrl:"https://github.com/apache/inlong-website/edit/master/blog/blog/2022-06-16-inlong-sort-etl.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2022-06-16-inlong-sort-etl.md",title:"InLong Sort ETL \u65b9\u6848\u89e3\u6790",description:"1. \u80cc\u666f",date:"2022-06-16T00:00:00.000Z",formattedDate:"2022\u5e746\u670816\u65e5",tags:[],readingTime:12.845,truncated:!1,authors:[],frontMatter:{title:"InLong Sort ETL \u65b9\u6848\u89e3\u6790"},prevItem:{title:"1.2.0 \u7248\u672c\u53d1\u5e03",permalink:"/zh-CN/blog/2022/06/22/release-1.2.0"},nextItem:{title:"1.1.0 \u7248\u672c\u53d1\u5e03",permalink:"/zh-CN/blog/2022/04/25/release-1.1.0"}},d={authorsImageUrls:[]},p=[{value:"1. \u80cc\u666f",id:"1-\u80cc\u666f",level:2},{value:"2. \u65b9\u6848\u4ecb\u7ecd",id:"2-\u65b9\u6848\u4ecb\u7ecd",level:2},{value:"2.1 \u65b9\u6848\u9700\u6c42",id:"21-\u65b9\u6848\u9700\u6c42",level:3},{value:"2.2 \u4f7f\u7528\u573a\u666f",id:"22-\u4f7f\u7528\u573a\u666f",level:3},{value:"2.3 \u8bbe\u8ba1\u76ee\u6807",id:"23-\u8bbe\u8ba1\u76ee\u6807",level:3},{value:"2.4 \u57fa\u672c\u6982\u5ff5",id:"24-\u57fa\u672c\u6982\u5ff5",level:3},{value:"2.5 \u9886\u57df\u6a21\u578b",id:"25-\u9886\u57df\u6a21\u578b",level:3},{value:"2.6 \u529f\u80fd\u7528\u4f8b\u56fe",id:"26-\u529f\u80fd\u7528\u4f8b\u56fe",level:3},{value:"3. \u7cfb\u7edf\u6982\u8981\u8bbe\u8ba1",id:"3-\u7cfb\u7edf\u6982\u8981\u8bbe\u8ba1",level:2},{value:"3.1 \u7cfb\u7edf\u67b6\u6784\u56fe",id:"31-\u7cfb\u7edf\u67b6\u6784\u56fe",level:3},{value:"3.2 InLong Sort \u5185\u90e8\u8fd0\u884c\u6d41\u7a0b\u56fe",id:"32-inlong-sort-\u5185\u90e8\u8fd0\u884c\u6d41\u7a0b\u56fe",level:3},{value:"3.3 \u6a21\u5757\u8bbe\u8ba1",id:"33-\u6a21\u5757\u8bbe\u8ba1",level:3},{value:"3.3.1 \u6a21\u5757\u7ed3\u6784",id:"331-\u6a21\u5757\u7ed3\u6784",level:4},{value:"3.3.2 \u6a21\u5757\u5212\u5206",id:"332-\u6a21\u5757\u5212\u5206",level:4},{value:"4. \u7cfb\u7edf\u8be6\u7ec6\u8bbe\u8ba1",id:"4-\u7cfb\u7edf\u8be6\u7ec6\u8bbe\u8ba1",level:2},{value:"4.1 Node \u751f\u6210 SQL",id:"41-node-\u751f\u6210-sql",level:3},{value:"4.1.1 ExtractNode \u751f\u6210 SQL",id:"411-extractnode-\u751f\u6210-sql",level:4},{value:"4.1.2 TransformNode \u751f\u6210 SQL",id:"412-transformnode-\u751f\u6210-sql",level:4},{value:"4.1.3 LoadNode \u751f\u6210 SQL",id:"413-loadnode-\u751f\u6210-sql",level:4},{value:"4.2 \u5b57\u6bb5 T \u751f\u6210 SQL",id:"42-\u5b57\u6bb5-t-\u751f\u6210-sql",level:3},{value:"4.2.1 \u8fc7\u6ee4\u7b97\u5b50",id:"421-\u8fc7\u6ee4\u7b97\u5b50",level:4},{value:"4.2.2 \u6c34\u4f4d\u7ebf",id:"422-\u6c34\u4f4d\u7ebf",level:4}],m={toc:p};function k(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-\u80cc\u666f"},"1. \u80cc\u666f"),(0,r.kt)("p",null,"\u968f\u7740 Apache InLong(incubating) \u7684\u7528\u6237\u548c\u5f00\u53d1\u8005\u9010\u6e10\u589e\u591a\uff0c\u66f4\u4e30\u5bcc\u7684\u4f7f\u7528\u573a\u666f\u548c\u4f4e\u6210\u672c\u8fd0\u8425\u8bc9\u6c42\u8d8a\u6765\u8d8a\u5f3a\u70c8\uff0c\u5176\u4e2d\uff0cInLong \u5168\u94fe\u8def\u589e\u52a0 Transform\uff08T\uff09\u7684\u9700\u6c42\u53cd\u9988\u6700\u591a\u3002\u7ecf\u8fc7@yunqingmoswu\u3001@EMsnap\u3001@gong\u3001@thexiay \u793e\u533a\u5f00\u53d1\u8005\u7684\u8c03\u7814\u548c\u8bbe\u8ba1\uff0c\u5b8c\u6210\u4e86\u57fa\u4e8e Flink SQL \u7684 InLong Sort ETL \u65b9\u6848\uff0c\u672c\u6587\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u8be5\u65b9\u6848\u7684\u5b9e\u73b0\u7ec6\u8282\u3002"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u57fa\u4e8e Apache Flink SQL \u4e3b\u8981\u6709\u4ee5\u4e0b\u65b9\u9762\u7684\u8003\u91cf\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Flink SQL \u62e5\u6709\u5f3a\u5927\u7684\u8868\u8fbe\u80fd\u529b\u5e26\u6765\u7684\u9ad8\u53ef\u6269\u5c55\u6027\u3001\u7075\u6d3b\u6027\uff0c\u57fa\u672c\u4e0a Flink SQL \u80fd\u652f\u6301\u793e\u533a\u5927\u591a\u6570\u9700\u6c42\u573a\u666f\u3002\u5f53 Flink SQL \u5185\u7f6e\u7684\u51fd\u6570\u4e0d\u6ee1\u8db3\u9700\u6c42\u65f6\uff0c\u6211\u4eec\u8fd8\u53ef\u901a\u8fc7\u5404\u79cdUDF\u6765\u6269\u5c55\u3002"),(0,r.kt)("li",{parentName:"ul"},"Flink SQL \u76f8\u6bd4 Flink \u5e95\u5c42 API \u5b9e\u73b0\u5f00\u53d1\u6210\u672c\u66f4\u4f4e\uff0c\u53ea\u6709\u7b2c\u4e00\u6b21\u9700\u8981\u5b9e\u73b0 Flink SQL \u7684\u8f6c\u6362\u903b\u8f91\uff0c\u540e\u7eed\u53ef\u4e13\u6ce8\u4e8e Flink SQL \u80fd\u529b\u672c\u8eab\u7684\u6784\u5efa\uff0c\u6bd4\u5982\u6269\u5c55 Connector\u3001\u81ea\u5b9a\u4e49\u51fd\u6570UDF\u7b49\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u822c\u6765\u8bf4\uff0cFlink SQL \u5c06\u66f4\u5065\u58ee\u3001\u8fd0\u884c\u4e5f\u5c06\u66f4\u7a33\u5b9a\u3002\u539f\u56e0\u5728\u4e8e Flink SQL \u5c4f\u853d\u4e86 Flink \u5e95\u5c42\u5927\u91cf\u7684\u7ec6\u8282\uff0c\u6709\u5f3a\u5927\u7684\u793e\u533a\u652f\u6301\uff0c\u5e76\u4e14\u7ecf\u8fc7\u5927\u91cf\u7528\u6237\u7684\u5b9e\u8df5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u7528\u6237\u6765\u8bf4\uff0cFlink SQL \u4e5f\u66f4\u52a0\u901a\u4fd7\u6613\u61c2\uff0c\u7279\u522b\u662f\u5bf9\u4f7f\u7528\u8fc7 SQL \u7528\u6237\u6765\u8bf4\uff0c\u4f7f\u7528\u65b9\u5f0f\u7b80\u5355\u3001\u719f\u6089\uff0c\u8fd9\u6709\u52a9\u4e8e\u7528\u6237\u5feb\u901f\u843d\u5730\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5b58\u91cf\u5b9e\u65f6\u4efb\u52a1\u7684\u8fc1\u79fb\uff0c\u5982\u679c\u5176\u539f\u672c\u5c31\u662f SQL \u7c7b\u578b\u7684\u4efb\u52a1\uff0c\u5c24\u5176\u662f Flink SQL \u4efb\u52a1\uff0c\u5176\u8fc1\u79fb\u6210\u672c\u6781\u4f4e\uff0c\u90e8\u5206\u60c5\u51b5\u4e0b\u751a\u81f3\u90fd\u4e0d\u7528\u505a\u4efb\u4f55\u6539\u52a8\u3002")),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u672c\u65b9\u6848\u7684\u6240\u6709\u4ee3\u7801\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/tree/master/inlong-sort"},"Apache InLong Sort")," \u6a21\u5757\uff0c\u6240\u542b\u529f\u80fd\u53ef\u5728\u5373\u5c06\u53d1\u5e03\u7684 1.2.0 \u7248\u672c\u4e2d\u4e0b\u8f7d\u4f7f\u7528\u3002"),(0,r.kt)("h2",{id:"2-\u65b9\u6848\u4ecb\u7ecd"},"2. \u65b9\u6848\u4ecb\u7ecd"),(0,r.kt)("h3",{id:"21-\u65b9\u6848\u9700\u6c42"},"2.1 \u65b9\u6848\u9700\u6c42"),(0,r.kt)("p",null,"\u8be5\u65b9\u6848\u7684\u4e3b\u8981\u9700\u6c42\uff0c\u662f\u5b8c\u6210\u7684 InLong Sort \u6a21\u5757 Transform\uff08T\uff09\u80fd\u529b\uff0c\u5305\u62ec\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Transform"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u7a97\u53e3\u5185\u53bb\u91cd"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5728\u4e00\u4e2a\u65f6\u95f4\u7a97\u53e3\u5185\u5bf9\u6570\u636e\u53bb\u91cd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u65f6\u95f4\u7a97\u53e3\u805a\u5408"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5728\u4e00\u4e2a\u65f6\u95f4\u7a97\u53e3\u5185\u5bf9\u6570\u636e\u8fdb\u884c\u805a\u5408\u64cd\u4f5c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u65f6\u95f4\u683c\u5f0f\u8f6c\u6362"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5c06\u4e00\u4e2a\u5b57\u6bb5\u7684\u503c\u8f6c\u6362\u4e3a\u76ee\u6807\u65f6\u95f4\u683c\u5f0f\u7684\u5b57\u7b26\u4e32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5b57\u6bb5\u5206\u5272"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5c06\u4e00\u4e2a\u5b57\u6bb5\u901a\u8fc7\u67d0\u4e2a\u5206\u5272\u7b26\u5206\u5272\u4e3a\u591a\u4e2a\u65b0\u7684\u5b57\u6bb5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5b57\u7b26\u4e32\u66ff\u6362"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5c06\u66ff\u6362\u4e00\u4e2a\u5b57\u7b26\u4e32\u5b57\u6bb5\u4e2d\u7684\u90e8\u5206\u6216\u5168\u90e8\u5185\u5bb9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6570\u636e\u8fc7\u6ee4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5c06\u6ee1\u8db3\u8fc7\u6ee4\u6761\u4ef6\u7684\u6570\u636e\u820d\u5f03\u6216\u8005\u4fdd\u7559")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5185\u5bb9\u63d0\u53d6"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u63d0\u53d6\u4e00\u4e2a\u5b57\u6bb5\u7684\u4e00\u90e8\u5206\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684\u5b57\u6bb5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8fde\u63a5"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u652f\u6301\u4e24\u8868 Join")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u503c\u66ff\u6362"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u7ed9\u5b9a\u4e00\u4e2a\u5339\u914d\u503c\uff0c\u5982\u679c\u8be5\u5b57\u6bb5\u7684\u503c\u7b49\u4e8e\u8be5\u503c\uff0c\u5219\u5c06\u5176\u66ff\u6362\u4e3a\u76ee\u6807\u503c")))),(0,r.kt)("h3",{id:"22-\u4f7f\u7528\u573a\u666f"},"2.2 \u4f7f\u7528\u573a\u666f"),(0,r.kt)("p",null,"\u5927\u6570\u636e\u96c6\u6210\u7684\u7528\u6237\uff0c\u5728\u5f88\u591a\u4e1a\u52a1\u573a\u666f\u4e0b\u90fd\u6709\u6570\u636e\u8f6c\u6362\u3001\u8fde\u63a5\u3001\u8fc7\u6ee4\u7b49 Transform \u9700\u6c42\u3002"),(0,r.kt)("h3",{id:"23-\u8bbe\u8ba1\u76ee\u6807"},"2.3 \u8bbe\u8ba1\u76ee\u6807"),(0,r.kt)("p",null,"\u672c\u6b21\u8bbe\u8ba1\u9700\u8981\u8fbe\u5230\u4ee5\u4e0b\u76ee\u6807\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u529f\u80fd\u6027\uff1a\u5728 InLong Sort \u73b0\u6709\u67b6\u6784\u3001\u6570\u636e\u6d41\u6a21\u578b\u4e0b\uff0c\u8986\u76d6\u57fa\u672c\u7684 Transform \u80fd\u529b\uff0c\u5e76\u5177\u5907\u5feb\u901f\u6269\u5f20\u7684\u80fd\u529b\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u517c\u5bb9\u6027\uff1a\u65b0\u7684 InLong Sort \u6570\u636e\u6a21\u578b\u5411\u524d\u517c\u5bb9\uff0c\u786e\u4fdd\u5386\u53f2\u4efb\u52a1\u80fd\u591f\u6b63\u5e38\u914d\u7f6e\u8fd0\u884c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u7ef4\u62a4\u6027\uff1aInLong Sort \u6570\u636e\u6a21\u578b\u8f6c Flink SQL \u53ea\u9700\u5b9e\u73b0\u4e00\u904d\uff0c\u540e\u671f\u6709\u65b0\u589e\u7684\u529f\u80fd\u9700\u6c42\u65f6\uff0c\u8fd9\u5757\u4e0d\u9700\u8981\u6539\u52a8\uff0c\u54ea\u6015\u6709\u6539\u52a8\u4e5f\u662f\u5c11\u91cf\u6539\u52a8\u5373\u53ef\u652f\u6301\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u6269\u5c55\u6027\uff1a\u5f53\u51fa\u73b0\u5f00\u6e90 Flink Connector \u6216\u8005\u5185\u7f6e Flink SQL \u51fd\u6570\u4e0d\u6ee1\u8db3\u9700\u6c42\u65f6\uff0c\u53ef\u901a\u8fc7\u81ea\u5b9a\u4e49 Flink Connector\u3001UDF \u6765\u5b9e\u73b0\u5176\u529f\u80fd\u6269\u5c55\u3002")),(0,r.kt)("h3",{id:"24-\u57fa\u672c\u6982\u5ff5"},"2.4 \u57fa\u672c\u6982\u5ff5"),(0,r.kt)("p",null,"\u6838\u5fc3\u6982\u5ff5\u53c2\u7167\u6982\u8981\u8bbe\u8ba1\u4e2d\u7684\u540d\u8bcd\u89e3\u91ca"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"InLong Dashborad"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Inlong \u524d\u7aef\u7ba1\u7406\u754c\u9762")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"InLong Manager Client"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5c06 Manager \u5f53\u4e2d\u7684\u63a5\u53e3\u8fdb\u884c\u5305\u88c5\uff0c\u4f9b\u5916\u90e8\u7528\u6237\u7a0b\u5e8f\u8c03\u7528\uff0c\u4e0d\u7ecf\u8fc7\u524d\u7aef InLong Dashboard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"InLong Manager Openapi"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Inlong manager \u4e0e\u5916\u90e8\u7cfb\u7edf\u8c03\u7528\u63a5\u53e3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"InLong Manager metaData"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Inlong manager \u5143\u6570\u636e\u7ba1\u7406\uff0c\u5305\u62ec group\u3001stream \u7eac\u5ea6\u7684\u5143\u6570\u636e\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"InLong Manager task manager"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Inlong manager\u4e2d\u7ba1\u7406\u6570\u636e\u6e90\u91c7\u96c6\u4efb\u52a1\u6a21\u5757\uff0c\u7ba1\u7406agent\u7684\u4efb\u52a1\u4e0b\u53d1\uff0c\u6307\u4ee4\u4e0b\u53d1\uff0c\u5fc3\u8df3\u4e0a\u62a5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"InLong Group"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6570\u636e\u6d41\u7ec4\uff0c\u5305\u542b\u591a\u4e2a\u6570\u636e\u6d41\uff0c\u4e00\u4e2a Group \u4ee3\u8868\u4e00\u4e2a\u6570\u636e\u63a5\u5165")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"InLong Stream"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6570\u636e\u6d41\uff0c\u4e00\u4e2a\u6570\u636e\u6d41\u6709\u5177\u4f53\u7684\u6d41\u5411")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Stream Source"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6d41\u4e2d\u6709\u5bf9\u5e94\u7684\u91c7\u96c6\u7aef\u548c sink \u7aef\uff0c\u672c\u8bbe\u8ba1\u4e2d\u53ea\u6d89\u53ca\u5230 stream source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Stream Info"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Sort \u4e2d\u6570\u636e\u6d41\u5411\u7684\u62bd\u8c61\uff0c\u5305\u542b\u8be5\u6570\u636e\u6d41\u7684\u5404\u79cd\u6765\u6e90\u3001\u8f6c\u6362\u3001\u53bb\u5411\u7b49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Group Info"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Sort \u4e2d\u5bf9\u6570\u636e\u6d41\u5411\u7684\u5c01\u88c5\uff0c\u4e00\u4e2a GroupInfo \u53ef\u5305\u542b\u591a\u4e2a Stream Info")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Node"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6570\u636e\u540c\u6b65\u4e2d\u6570\u636e\u6e90\u3001\u6570\u636e\u8f6c\u6362\u3001\u6570\u636e\u53bb\u5411\u7684\u62bd\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Extract Node"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6570\u636e\u540c\u6b65\u7684\u6765\u6e90\u7aef\u62bd\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Load Node"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6570\u636e\u540c\u6b65\u7684\u53bb\u5411\u7aef\u62bd\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"MySQL Extract Node"),(0,r.kt)("td",{parentName:"tr",align:"center"},"MySQL \u6570\u636e\u6765\u6e90\u62bd\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Kafka Load Node"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Kafka \u6570\u636e\u53bb\u5411\u62bd\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Transform Node"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6570\u636e\u540c\u6b65\u7684\u8f6c\u6362\u8fc7\u7a0b\u62bd\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Aggregate Transform Node"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6570\u636e\u540c\u6b65\u805a\u5408\u7c7b\u8f6c\u6362\u8fc7\u7a0b\u62bd\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Node Relation"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6570\u636e\u540c\u6b65\u4e2d\u5404\u4e2a\u8282\u70b9\u5173\u7cfb\u62bd\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Field Relation"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6570\u636e\u540c\u6b65\u4e2d\u4e0a\u4e0b\u6e38\u8282\u70b9\u5b57\u6bb5\u95f4\u5173\u7cfb\u7684\u62bd\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8f6c\u6362\u51fd\u6570\u7684\u62bd\u8c61\uff0c\u5373\u6570\u636e\u540c\u6b65T\u4e2d\u5404\u4e2a T \u80fd\u529b\u5b9e\u73b0\u7684\u62bd\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Substring Function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5b57\u7b26\u4e32\u622a\u53d6\u51fd\u6570\u7684\u62bd\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Filter Function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6570\u636e\u8fc7\u6ee4\u51fd\u6570\u7684\u62bd\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Function Param"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u51fd\u6570\u7684\u5165\u53c2\u62bd\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Constant Param"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5e38\u91cf\u53c2\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Field Info"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8282\u70b9\u5b57\u6bb5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Meta FieldInfo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8282\u70b9\u5143\u4fe1\u606f\u5b57\u6bb5")))),(0,r.kt)("h3",{id:"25-\u9886\u57df\u6a21\u578b"},"2.5 \u9886\u57df\u6a21\u578b"),(0,r.kt)("p",null,"\u672c\u6b21\u8bbe\u8ba1\u4e3b\u8981\u6d89\u53ca\u5230\u4ee5\u4e0b\u5b9e\u4f53\uff1a"),(0,r.kt)("p",null,"Group\u3001Stream\u3001GroupInfo\u3001StreamInfo\u3001Node\u3001NodeRelation\u3001FieldRelation\u3001Function\u3001FilterFunction\u3001SubstringFunction\u3001FunctionParam\u3001FieldInfo\u3001MetaFieldInfo\u3001MySQLExtractNode\u3001KafkaLoadNode \u7b49"),(0,r.kt)("p",null,"\u4e3a\u4e86\u4fbf\u4e8e\u7406\u89e3\uff0c\u672c\u5c0f\u8282\u5c06\u5bf9\u5b9e\u4f53\u4e4b\u95f4\u5173\u7cfb\u8fdb\u884c\u5efa\u6a21\u5206\u6790\u3002\u9886\u57df\u6a21\u578b\u7684\u5b9e\u4f53\u5bf9\u5e94\u5173\u7cfb\u8bf4\u660e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a Group \u5bf9\u5e94 1 \u4e2a GroupInfo"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a Stream \u5bf9\u5e94 1 \u4e2a StreamInfo"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a Group \u5305\u542b 1 \u4e2a\u6216\u591a\u4e2a Stream"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a GroupInfo \u5305\u542b 1 \u4e2a\u6216\u591a\u4e2a StreamInfo"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a StreamInfo \u5305\u542b\u591a\u4e2a Node"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a StreamInfo \u5305\u542b 1 \u4e2a\u6216\u591a\u4e2a NodeRelation"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a NodeRelation \u5305\u542b 1 \u4e2a\u6216\u591a\u4e2a FieldRelation"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a NodeRelation \u5305\u542b 0 \u4e2a\u6216\u591a\u4e2a FilterFunction"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a FieldRelation \u5305\u542b 1 \u4e2a Function \u6216 1 \u4e2a FieldInfo \u4f5c\u4e3a\u6765\u6e90\u5b57\u6bb5\uff0c1 \u4e2a FieldInfo \u4f5c\u4e3a\u76ee\u6807\u5b57\u6bb5"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a Function \u5305\u542b 1 \u4e2a\u6216\u591a\u4e2a FunctionParam")),(0,r.kt)("p",null,"\u4e0a\u8ff0\u5173\u7cfb\u7531 UML \u5bf9\u8c61\u5173\u7cfb\u56fe\u53ef\u4ee5\u8868\u793a\u4e3a\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sort_UML",src:n(83918).Z,width:"2576",height:"869"})),(0,r.kt)("h3",{id:"26-\u529f\u80fd\u7528\u4f8b\u56fe"},"2.6 \u529f\u80fd\u7528\u4f8b\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sort-usecase",src:n(71564).Z,width:"606",height:"356"})),(0,r.kt)("h2",{id:"3-\u7cfb\u7edf\u6982\u8981\u8bbe\u8ba1"},"3. \u7cfb\u7edf\u6982\u8981\u8bbe\u8ba1"),(0,r.kt)("h3",{id:"31-\u7cfb\u7edf\u67b6\u6784\u56fe"},"3.1 \u7cfb\u7edf\u67b6\u6784\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"architecture",src:n(31264).Z,width:"461",height:"741"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Serialization\uff1a\u5e8f\u5217\u5316\u5b9e\u73b0\u6a21\u5757"),(0,r.kt)("li",{parentName:"ul"},"Deserialization\uff1a\u53cd\u5e8f\u5217\u5316\u5b9e\u73b0\u6a21\u5757"),(0,r.kt)("li",{parentName:"ul"},"Flink Source\uff1a\u81ea\u5b9a\u4e49 Flink source\u5b9e\u73b0\u6a21\u5757"),(0,r.kt)("li",{parentName:"ul"},"Flink Sink\uff1a\u81ea\u5b9a\u4e49\u7684 Flink sink \u5b9e\u73b0\u6a21\u5757"),(0,r.kt)("li",{parentName:"ul"},"Transformation\uff1a\u81ea\u5b9a\u4e49\u7684 Transform \u5b9e\u73b0\u6a21\u5757"),(0,r.kt)("li",{parentName:"ul"},"GroupInfo\uff1a\u5bf9\u5e94 Inlong group"),(0,r.kt)("li",{parentName:"ul"},"StreamInfo\uff1a\u5bf9\u5e94 Inlong stream"),(0,r.kt)("li",{parentName:"ul"},"Node\uff1a\u5bf9\u6570\u636e\u540c\u6b65\u4e2d\u6570\u636e\u6765\u6e90\u3001\u6570\u636e\u8f6c\u6362\u3001\u6570\u636e\u53bb\u5411\u7684\u62bd\u8c61"),(0,r.kt)("li",{parentName:"ul"},"FlinkSQLParser\uff1aSQL \u89e3\u6790\u5668")),(0,r.kt)("h3",{id:"32-inlong-sort-\u5185\u90e8\u8fd0\u884c\u6d41\u7a0b\u56fe"},"3.2 InLong Sort \u5185\u90e8\u8fd0\u884c\u6d41\u7a0b\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(37544).Z,width:"771",height:"61"})),(0,r.kt)("h3",{id:"33-\u6a21\u5757\u8bbe\u8ba1"},"3.3 \u6a21\u5757\u8bbe\u8ba1"),(0,r.kt)("p",null,"\u672c\u6b21\u8bbe\u8ba1\u53ea\u5bf9\u539f\u6709\u7cfb\u7edf\u589e\u52a0 Flink Connector\u3001FlinkSQL Generator \u4e24\u4e2a\u6a21\u5757\uff0c\u5bf9 Data Model \u6a21\u5757\u6709\u4fee\u6539\u3002"),(0,r.kt)("h4",{id:"331-\u6a21\u5757\u7ed3\u6784"},"3.3.1 \u6a21\u5757\u7ed3\u6784"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(67344).Z,width:"771",height:"1011"})),(0,r.kt)("h4",{id:"332-\u6a21\u5757\u5212\u5206"},"3.3.2 \u6a21\u5757\u5212\u5206"),(0,r.kt)("p",null,"\u91cd\u8981\u6a21\u5757\u5212\u5206\u8bf4\u660e\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"FlinkSQLParser"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u7528\u4e8e\u751f\u6210 FlinkSQL \u6838\u5fc3\u7c7b\uff0c\u5305\u542b GroupInfo \u7684\u5f15\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"GroupInfo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Sort \u5185\u90e8\u5bf9 InlongGroup \u7684\u62bd\u8c61\uff0c\u7528\u4e8e\u5c01\u88c5\u6574\u4e2a InlongGroup \u540c\u6b65\u76f8\u5173\u4fe1\u606f\uff0c\u5305\u542b\u5bf9 List\\<StreamInfo",">"," \u7684\u5f15\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"StreamInfo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Sort \u5185\u90e8\u5bf9 InlongStream \u7684\u62bd\u8c61\uff0c\u7528\u4e8e\u5c01\u88c5 InlongStream \u540c\u6b65\u76f8\u5173\u4fe1\u606f\uff0c\u5305\u542bList\\<Node",">","\u3001List\\<NodeRelation",">"," \u7684\u5f15\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Node"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u540c\u6b65\u8282\u70b9\u7684\u9876\u5c42\u63a5\u53e3\uff0c\u5b83\u7684\u5404\u4e2a\u5b50\u7c7b\u5b9e\u73b0\u4e3b\u8981\u7528\u4e8e\u5bf9\u540c\u6b65\u6570\u636e\u6e90\u3001\u8f6c\u6362\u8282\u70b9\u7684\u6570\u636e\u5c01\u88c5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ExtractNode"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6570\u636eextract\u8282\u70b9\u62bd\u8c61\uff0c\u7ee7\u627f\u81ea Node")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"LoadNode"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6570\u636eload\u8282\u70b9\u62bd\u8c61\uff0c\u7ee7\u627f\u81ea Node")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"TransformNode"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6570\u636e\u8f6c\u6362\u8282\u70b9\u62bd\u8c61\uff0c\u7ee7\u627f\u81ea Node")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"NodeRelation"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5b9a\u4e49\u8282\u70b9\u95f4\u7684\u5173\u7cfb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"FieldRelation"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5b9a\u4e49\u8282\u70b9\u95f4\u5b57\u6bb5\u7684\u5173\u7cfb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"T\u80fd\u529b\u6267\u884c\u51fd\u6570\u7684\u62bd\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"FilterFunction"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u7528\u4e8e\u6570\u636e\u8fc7\u6ee4\u7684 Function \u62bd\u8c61\uff0c\u7ee7\u627f\u81ea Function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"SubstringFunction"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u7528\u4e8e\u5b57\u7b26\u4e32\u622a\u53d6 Function \u62bd\u8c61\uff0c\u7ee7\u627f\u81ea Function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"FunctionParam"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u7528\u4e8e\u51fd\u6570\u53c2\u6570\u7684\u62bd\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ConstantParam"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u51fd\u6570\u5e38\u91cf\u53c2\u6570\u7684\u5c01\u88c5\uff0c\u7ee7\u627f\u81ea FunctionParam")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"FieldInfo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8282\u70b9\u5b57\u6bb5\u7684\u5c01\u88c5\uff0c\u4e5f\u53ef\u505a\u51fd\u6570\u5165\u53c2\u4f7f\u7528\uff0c\u7ee7\u627f\u81ea FunctionParam")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"MetaFieldInfo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5185\u7f6e\u5b57\u6bb5\u7684\u5c01\u88c5\uff0c\u76ee\u524d\u4e3b\u8981\u7528\u4e8e canal-json \u7684\u5143\u6570\u636e\u5b57\u6bb5\u573a\u666f\uff0c\u7ee7\u627f\u81ea FieldInfo")))),(0,r.kt)("h2",{id:"4-\u7cfb\u7edf\u8be6\u7ec6\u8bbe\u8ba1"},"4. \u7cfb\u7edf\u8be6\u7ec6\u8bbe\u8ba1"),(0,r.kt)("p",null,"\u4e0b\u9762\u4ee5\u540c\u6b65 MySQL \u4e2d\u7684\u6570\u636e\u5230 Kafka \u4e3a\u4f8b\u6765\u8bf4\u660e SQL \u7684\u751f\u6210\u539f\u7406\u3002"),(0,r.kt)("h3",{id:"41-node-\u751f\u6210-sql"},"4.1 Node \u751f\u6210 SQL"),(0,r.kt)("h4",{id:"411-extractnode-\u751f\u6210-sql"},"4.1.1 ExtractNode \u751f\u6210 SQL"),(0,r.kt)("p",null,"\u8282\u70b9\u914d\u7f6e\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},' private Node buildMySQLExtractNode() {\n        List<FieldInfo> fields = Arrays.asList(\n                new FieldInfo("name", new StringFormatInfo()),\n                new FieldInfo("age", new IntFormatInfo()));\n        return new MySqlExtractNode("1", "mysql_input", fields,\n                null, null, "id",\n                Collections.singletonList("tableName"), "localhost", "root", "password",\n                "inlong", null, null,\n                null, null);\n    }\n')),(0,r.kt)("p",null,"\u751f\u6210\u7684 SQL \u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `mysql_1` (`name` string,`age` int) \nwith \n('connector' = 'mysql-cdc-inlong',\n'hostname' = 'localhost',\n'username' = 'root',\n'password' = 'password',\n'database-name' = 'inlong',\n'table-name' = 'tableName')\n")),(0,r.kt)("h4",{id:"412-transformnode-\u751f\u6210-sql"},"4.1.2 TransformNode \u751f\u6210 SQL"),(0,r.kt)("p",null,"\u8282\u70b9\u914d\u7f6e\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},' List<FilterFunction> filters = Arrays.asList(\n                new SingleValueFilterFunction(EmptyOperator.getInstance(),\n                        new FieldInfo("age", new IntFormatInfo()),\n                        LessThanOperator.getInstance(), new ConstantParam(25)),\n                new SingleValueFilterFunction(AndOperator.getInstance(),\n                        new FieldInfo("age", new IntFormatInfo()),\n                        MoreThanOrEqualOperator.getInstance(), new ConstantParam(18))\n        );\n')),(0,r.kt)("p",null,"\u751f\u6210\u7684 SQL \u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT `name` AS `name`,`age` AS `age` FROM `mysql_1` WHERE `age` < 25 AND `age` >= 18\n")),(0,r.kt)("h4",{id:"413-loadnode-\u751f\u6210-sql"},"4.1.3 LoadNode \u751f\u6210 SQL"),(0,r.kt)("p",null,"\u8282\u70b9\u914d\u7f6e\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},' private Node buildKafkaLoadNode(FilterStrategy filterStrategy) {\n        List<FieldInfo> fields = Arrays.asList(\n                new FieldInfo("name", new StringFormatInfo()),\n                new FieldInfo("age", new IntFormatInfo())\n        );\n        List<FieldRelation> relations = Arrays\n                .asList(\n                        new FieldRelation(new FieldInfo("name", new StringFormatInfo()),\n                                new FieldInfo("name", new StringFormatInfo())),\n                        new FieldRelation(new FieldInfo("age", new IntFormatInfo()),\n                                new FieldInfo("age", new IntFormatInfo()))\n                );\n        List<FilterFunction> filters = Arrays.asList(\n                new SingleValueFilterFunction(EmptyOperator.getInstance(),\n                        new FieldInfo("age", new IntFormatInfo()),\n                        LessThanOperator.getInstance(), new ConstantParam(25)),\n                new SingleValueFilterFunction(AndOperator.getInstance(),\n                        new FieldInfo("age", new IntFormatInfo()),\n                        MoreThanOrEqualOperator.getInstance(), new ConstantParam(18))\n        );\n        return new KafkaLoadNode("2", "kafka_output", fields, relations, filters,\n                filterStrategy, "topic1", "localhost:9092",\n                new CanalJsonFormat(), null,\n                null, "id");\n    }\n')),(0,r.kt)("p",null,"\u751f\u6210\u7684 SQL \u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `kafka_3` (`name` string,`age` int) \nwith (\n'connector' = 'kafka-inlong',\n'topic' = 'topic1',\n'properties.bootstrap.servers' = 'localhost:9092',\n'format' = 'canal-json-inlong',\n'canal-json-inlong.ignore-parse-errors' = 'true',\n'canal-json-inlong.map-null-key.mode' = 'DROP',\n'canal-json-inlong.encode.decimal-as-plain-number' = 'true',\n'canal-json-inlong.timestamp-format.standard' = 'SQL',\n'canal-json-inlong.map-null-key.literal' = 'null'\n)\n")),(0,r.kt)("h3",{id:"42-\u5b57\u6bb5-t-\u751f\u6210-sql"},"4.2 \u5b57\u6bb5 T \u751f\u6210 SQL"),(0,r.kt)("h4",{id:"421-\u8fc7\u6ee4\u7b97\u5b50"},"4.2.1 \u8fc7\u6ee4\u7b97\u5b50"),(0,r.kt)("p",null,"\u76f8\u5173\u914d\u7f6e\u89c1 4.1 \u8282\u70b9\u914d\u7f6e"),(0,r.kt)("p",null,"\u751f\u6210\u7684 SQL \u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO `kafka_3` SELECT `name` AS `name`,`age` AS `age` FROM `mysql_1` WHERE `age` < 25 AND `age` >= 18\n")),(0,r.kt)("h4",{id:"422-\u6c34\u4f4d\u7ebf"},"4.2.2 \u6c34\u4f4d\u7ebf"),(0,r.kt)("p",null,"GroupInfo \u5b8c\u6574\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private Node buildMySqlExtractNode() {\n        List<FieldInfo> fields = Arrays.asList(\n                new FieldInfo("name", new StringFormatInfo()),\n                new FieldInfo("age", new IntFormatInfo()),\n                new FieldInfo("ts", new TimestampFormatInfo()));\n        WatermarkField wk = new WatermarkField(new FieldInfo("ts", new TimestampFormatInfo()),\n                new StringConstantParam("1"),\n                new TimeUnitConstantParam(TimeUnit.MINUTE));\n        return new MySqlExtractNode("1", "mysql_input", fields,\n                wk, null, "id",\n                Collections.singletonList("tableName"), "localhost", "root", "password",\n                "inlong", null, null,\n                null, null);\n    }\n\n    private Node buildKafkaNode() {\n        List<FieldInfo> fields = Arrays.asList(\n                new FieldInfo("name", new StringFormatInfo()),\n                new FieldInfo("age", new IntFormatInfo()),\n                new FieldInfo("ts", new TimestampFormatInfo()));\n        List<FieldRelation> relations = Arrays\n                .asList(new FieldRelation(new FieldInfo("name", new StringFormatInfo()),\n                                new FieldInfo("name", new StringFormatInfo())),\n                        new FieldRelation(new FieldInfo("age", new IntFormatInfo()),\n                                new FieldInfo("age", new IntFormatInfo()))\n                );\n        return new KafkaLoadNode("2", "kafka_output", fields, relations, null, null,\n                "topic", "localhost:9092", new JsonFormat(),\n                1, null, "id");\n    }\n\n    private NodeRelation buildNodeRelation(List<Node> inputs, List<Node> outputs) {\n        List<String> inputIds = inputs.stream().map(Node::getId).collect(Collectors.toList());\n        List<String> outputIds = outputs.stream().map(Node::getId).collect(Collectors.toList());\n        return new NodeRelation(inputIds, outputIds);\n    }\n\n    @Override\n    public GroupInfo getTestObject() {\n        Node input = buildMySqlExtractNode();\n        Node output = buildKafkaNode();\n        StreamInfo streamInfo = new StreamInfo("1", Arrays.asList(input, output), Collections.singletonList(\n                buildNodeRelation(Collections.singletonList(input), Collections.singletonList(output))));\n        return new GroupInfo("1", Collections.singletonList(streamInfo));\n    }\n')))}k.isMDXComponent=!0},31264:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/architecture-b4c0fb3783a6ed2f2868f534df98e74b.png"},67344:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/sort-module-structure-4dd424ae93043cb912dba69c08590b33.png"},37544:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/sort-operation-flow-77363f12a68a011beba26db9ccc6fedb.png"},71564:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/sort-usecase-fb8639f9724899ab3afcbf35b8a21902.png"},83918:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/sort_UML-896d751427509d769add998680df9516.png"}}]);