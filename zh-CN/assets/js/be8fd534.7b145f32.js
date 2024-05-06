"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[43025],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},g="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),g=d(n),k=r,s=g["".concat(p,".").concat(k)]||g[k]||m[k]||l;return n?a.createElement(s,i(i({ref:e},u),{},{components:n})):a.createElement(s,i({ref:e},u))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[g]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},99771:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u603b\u89c8",sidebar_position:1},i=void 0,o={unversionedId:"modules/agent/overview",id:"version-1.12.0/modules/agent/overview",title:"\u603b\u89c8",description:"InLong Agent \u662f\u4e00\u4e2a\u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\u7c7b\u578b\u7684\u6536\u96c6\u5de5\u5177\uff0c\u81f4\u529b\u4e8e\u5b9e\u73b0\u5305\u62ec File\u3001Sql\u3001Binlog\u3001Metrics \u7b49\u591a\u79cd\u5f02\u6784\u6570\u636e\u6e90\u4e4b\u95f4\u7a33\u5b9a\u9ad8\u6548\u7684\u6570\u636e\u91c7\u96c6\u529f\u80fd\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.12.0/modules/agent/overview.md",sourceDirName:"modules/agent",slug:"/modules/agent/overview",permalink:"/zh-CN/docs/modules/agent/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.12.0/modules/agent/overview.md",tags:[],version:"1.12.0",sidebarPosition:1,frontMatter:{title:"\u603b\u89c8",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Bare Metal \u90e8\u7f72",permalink:"/zh-CN/docs/deployment/bare_metal"},next:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/modules/agent/quick_start"}},p={},d=[{value:"\u8bbe\u8ba1\u7406\u5ff5",id:"\u8bbe\u8ba1\u7406\u5ff5",level:2},{value:"InLong-Agent \u67b6\u6784\u4ecb\u7ecd",id:"inlong-agent-\u67b6\u6784\u4ecb\u7ecd",level:2},{value:"InLong-Agent \u91c7\u96c6\u5206\u7c7b",id:"inlong-agent-\u91c7\u96c6\u5206\u7c7b",level:2},{value:"\u6587\u4ef6",id:"\u6587\u4ef6",level:3},{value:"\u6587\u4ef6\u91c7\u96c6\u53c2\u6570",id:"\u6587\u4ef6\u91c7\u96c6\u53c2\u6570",level:4},{value:"Sql",id:"sql",level:3},{value:"Binlog",id:"binlog",level:3}],u={toc:d},g="wrapper";function m(t){let{components:e,...l}=t;return(0,r.kt)(g,(0,a.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"InLong Agent \u662f\u4e00\u4e2a\u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\u7c7b\u578b\u7684\u6536\u96c6\u5de5\u5177\uff0c\u81f4\u529b\u4e8e\u5b9e\u73b0\u5305\u62ec File\u3001Sql\u3001Binlog\u3001Metrics \u7b49\u591a\u79cd\u5f02\u6784\u6570\u636e\u6e90\u4e4b\u95f4\u7a33\u5b9a\u9ad8\u6548\u7684\u6570\u636e\u91c7\u96c6\u529f\u80fd\u3002"),(0,r.kt)("h2",{id:"\u8bbe\u8ba1\u7406\u5ff5"},"\u8bbe\u8ba1\u7406\u5ff5"),(0,r.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u6570\u636e\u6e90\u591a\u6837\u6027\u95ee\u9898\uff0cInLong-agent \u5c06\u591a\u79cd\u6570\u636e\u6e90\u62bd\u8c61\u6210\u7edf\u4e00\u7684source\u6982\u5ff5\uff0c\u5e76\u62bd\u8c61\u51fasink\u6765\u5bf9\u6570\u636e\u8fdb\u884c\u5199\u5165\u3002\u5f53\u9700\u8981\u63a5\u5165\u4e00\u4e2a\u65b0\u7684\u6570\u636e\u6e90\u7684\u65f6\u5019\uff0c\u53ea\u9700\u8981\u914d\u7f6e\u597d\u6570\u636e\u6e90\u7684\u683c\u5f0f\u4e0e\u8bfb\u53d6\u53c2\u6570\u4fbf\u80fd\u8ddf\u505a\u5230\u9ad8\u6548\u8bfb\u53d6\u3002"),(0,r.kt)("h2",{id:"inlong-agent-\u67b6\u6784\u4ecb\u7ecd"},"InLong-Agent \u67b6\u6784\u4ecb\u7ecd"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(31032).Z,width:"1652",height:"506"})),(0,r.kt)("p",null,"InLong Agent\u672c\u8eab\u4f5c\u4e3a\u6570\u636e\u91c7\u96c6\u6846\u67b6\uff0c\u91c7\u7528channel + plugin\u67b6\u6784\u6784\u5efa\u3002\u5c06\u6570\u636e\u6e90\u8bfb\u53d6\u548c\u5199\u5165\u62bd\u8c61\u6210\u4e3aReader/Writer\u63d2\u4ef6\uff0c\u7eb3\u5165\u5230\u6574\u4e2a\u6846\u67b6\u4e2d\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reader\uff1aReader\u4e3a\u6570\u636e\u91c7\u96c6\u6a21\u5757\uff0c\u8d1f\u8d23\u91c7\u96c6\u6570\u636e\u6e90\u7684\u6570\u636e\uff0c\u5c06\u6570\u636e\u53d1\u9001\u7ed9channel\u3002"),(0,r.kt)("li",{parentName:"ul"},"Writer\uff1a Writer\u4e3a\u6570\u636e\u5199\u5165\u6a21\u5757\uff0c\u8d1f\u8d23\u4e0d\u65ad\u5411channel\u53d6\u6570\u636e\uff0c\u5e76\u5c06\u6570\u636e\u5199\u5165\u5230\u76ee\u7684\u7aef\u3002"),(0,r.kt)("li",{parentName:"ul"},"Channel\uff1aChannel\u7528\u4e8e\u8fde\u63a5reader\u548cwriter\uff0c\u4f5c\u4e3a\u4e24\u8005\u7684\u6570\u636e\u4f20\u8f93\u901a\u9053\uff0c\u5e76\u8d77\u5230\u4e86\u6570\u636e\u7684\u5199\u5165\u8bfb\u53d6\u76d1\u63a7\u4f5c\u7528")),(0,r.kt)("h2",{id:"inlong-agent-\u91c7\u96c6\u5206\u7c7b"},"InLong-Agent \u91c7\u96c6\u5206\u7c7b"),(0,r.kt)("h3",{id:"\u6587\u4ef6"},"\u6587\u4ef6"),(0,r.kt)("p",null,"\u6587\u4ef6\u91c7\u96c6\u5305\u542b\u5982\u4e0b\u529f\u80fd\uff1a\n\u7528\u6237\u914d\u7f6e\u7684\u8def\u5f84\u76d1\u542c\uff0c\u80fd\u591f\u76d1\u542c\u51fa\u521b\u5efa\u7684\u6587\u4ef6\u4fe1\u606f\n\u76ee\u5f55\u6b63\u5219\u8fc7\u6ee4\uff0c\u652f\u6301YYYYMMDD+\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u8def\u5f84\u914d\u7f6e\n\u65ad\u70b9\u91cd\u4f20\uff0cInLong-Agent\u91cd\u542f\u65f6\uff0c\u80fd\u591f\u652f\u6301\u81ea\u52a8\u4ece\u4e0a\u6b21\u8bfb\u53d6\u4f4d\u7f6e\u91cd\u65b0\u8bfb\u53d6\uff0c\u4fdd\u8bc1\u4e0d\u91cd\u8bfb\u4e0d\u6f0f\u8bfb\u3002\\"),(0,r.kt)("h4",{id:"\u6587\u4ef6\u91c7\u96c6\u53c2\u6570"},"\u6587\u4ef6\u91c7\u96c6\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pattern"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u6b63\u5219\u5339\u914d\uff0c\u4f8b\u5982: /root/","[*]",".log")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeOffset"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u504f\u79fb\u5339\u914d\u9488\u5bf9\u6587\u4ef6\u6587\u4ef6\u540d\u79f0\u4e3a: ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"}," YYYYMMDDHH "))," YYYY \u8868\u793a\u5e74\uff0c MM \u8868\u793a\u6708\uff0c DD \u8868\u793a\u5929\uff0c  HH \u8868\u793a\u5c0f\u65f6\uff0c *** \u8868\u793a\u4efb\u610f\u7684\u5b57\u7b26\uff1b'1m' \u8868\u793a\u4e00\u5206\u949f\u4ee5\u540e\uff0c '-1m' \u8868\u793a\u4e00\u5206\u949f\u4ee5\u524d\uff0c '1h' \u4e00\u5c0f\u65f6\u4ee5\u540e\uff0c '-1h' \u4e00\u5c0f\u65f6\u4ee5\u524d\uff0c '1d' \u4e00\u5929\u4ee5\u540e\uff0c '-1d' \u4e00\u5929\u4ee5\u524d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"collectType"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"FULL"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'"FULL" \u76ee\u5f55\u4e0b\u6240\u6709\u5339\u914d\u7684\u6587\u4ef6\uff0c "INCREMENT" \u4efb\u52a1\u542f\u52a8\u540e\u5339\u914d\u65b0\u589e\u7684\u6587\u4ef6\u3002')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lineEndPattern"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"'\\n'"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u884c\u7ed3\u675f\u6b63\u5219\u5339\u914d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contentCollectType"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"FULL"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'\u6587\u4ef6\u5185\u5bb9\u91c7\u96c6\u65b9\u5f0f\u5168\u91cf"FULL"\u3001\u589e\u91cf"INCREMENT" \u3002')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"envList"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u91c7\u96c6\u643a\u5e26\u73af\u5883\u4fe1\u606f\uff0c\u4f8b\u5982\u5728\u5bb9\u5668\u73af\u5883\u4e0b: kubernetes \u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataContentStyle"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u91c7\u96c6\u540e\u6570\u636e\u8f93\u51fa\u65b9\u5f0f\uff0c Json \u683c\u5f0f\u8bbe\u7f6e\u4e3a json \uff1b CSV \u683c\u5f0f\u8bbe\u7f6e\u5206\u5272\u7c7b\u578b: ",(0,r.kt)("inlineCode",{parentName:"td"},",")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},":"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSeparator"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u6570\u636e\u539f\u59cb\u5217\u5206\u5272\u65b9\u5f0f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitorStatus"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u76d1\u63a7\u5f00\u5173 1 \u5f00\u542f \u3001 0 \u5173\u95ed\u3002\u573a\u666f\uff1a\u5728\u6279\u91cf\u91c7\u96c6\u662f\u8bbe\u7f6e\u4e3a 0\uff0c\u5b9e\u65f6\u6570\u636e\u91c7\u96c6\u65f6 1\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitorInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u76d1\u63a7\u63a2\u6d4b\u9891\u7387\uff0c\u6beb\u79d2/\u5355\u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitorExpire"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u76d1\u63a7\u63a2\u6d4b\u8fc7\u671f\u65f6\u95f4\uff0c\u6beb\u79d2/\u5355\u4f4d")))),(0,r.kt)("h3",{id:"sql"},"Sql"),(0,r.kt)("p",null,"\u8fd9\u7c7b\u6570\u636e\u662f\u6307\u901a\u8fc7SQL\u6267\u884c\u7684\u65b9\u5f0f\nSQL\u6b63\u5219\u5206\u89e3\uff0c\u8f6c\u5316\u6210\u591a\u6761SQL\u8bed\u53e5\n\u5206\u522b\u6267\u884cSQL\uff0c\u62c9\u53d6\u6570\u636e\u96c6\uff0c\u62c9\u53d6\u8fc7\u7a0b\u9700\u8981\u6ce8\u610f\u5bf9mysql\u672c\u8eab\u7684\u5f71\u54cd\n\u6267\u884c\u5468\u671f\uff0c\u8fd9\u79cd\u4e00\u822c\u662f\u5b9a\u65f6\u6267\u884c"),(0,r.kt)("h3",{id:"binlog"},"Binlog"),(0,r.kt)("p",null,"\u8fd9\u7c7b\u91c7\u96c6\u901a\u8fc7\u914d\u7f6emysql slave\u7684\u65b9\u5f0f\uff0c\u8bfb\u53d6binlog\uff0c\u5e76\u8fd8\u539f\u6570\u636e\n\u9700\u8981\u6ce8\u610fbinlog\u8bfb\u53d6\u7684\u65f6\u5019\u591a\u7ebf\u7a0b\u89e3\u6790\uff0c\u591a\u7ebf\u7a0b\u89e3\u6790\u7684\u6570\u636e\u9700\u8981\u6253\u4e0a\u987a\u5e8f\u6807\u7b7e\n\u4ee3\u7801\u57fa\u4e8e\u8001\u7248\u672c\u7684dbsync\uff0c\u4e3b\u8981\u7684\u4fee\u6539\u662f\u5c06tdbus-sender\u7684\u53d1\u9001\u6539\u4e3a\u63a8\u9001\u5230agent-channel\u7684\u65b9\u5f0f\u505a\u878d\u5408"))}m.isMDXComponent=!0},31032:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/architecture-4c55eb883104dccdff77e8b8e57f2678.png"}}]);