"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[22799],{3905:(e,t,l)=>{l.d(t,{Zo:()=>s,kt:()=>m});var r=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var l=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(l),k=a,m=d["".concat(o,".").concat(k)]||d[k]||c[k]||n;return l?r.createElement(m,i(i({ref:t},s),{},{components:l})):r.createElement(m,i({ref:t},s))}));function m(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=l.length,i=new Array(n);i[0]=k;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[d]="string"==typeof e?e:a,i[1]=u;for(var p=2;p<n;p++)i[p]=l[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,l)}k.displayName="MDXCreateElement"},24490:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>u,toc:()=>p});var r=l(87462),a=(l(67294),l(3905));const n={title:"Dashboard \u6307\u5f15",sidebar_position:1},i=void 0,u={unversionedId:"user_guide/dashboard_usage",id:"version-1.3.0/user_guide/dashboard_usage",title:"Dashboard \u6307\u5f15",description:"\u7528\u6237\u767b\u5f55",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.0/user_guide/dashboard_usage.md",sourceDirName:"user_guide",slug:"/user_guide/dashboard_usage",permalink:"/zh-CN/docs/1.3.0/user_guide/dashboard_usage",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.3.0/user_guide/dashboard_usage.md",tags:[],version:"1.3.0",sidebarPosition:1,frontMatter:{title:"Dashboard \u6307\u5f15",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u793a\u4f8b",permalink:"/zh-CN/docs/1.3.0/sdk/manager-sdk/example"},next:{title:"\u547d\u4ee4\u884c\u5de5\u5177",permalink:"/zh-CN/docs/1.3.0/user_guide/command_line_tools"}},o={},p=[{value:"\u7528\u6237\u767b\u5f55",id:"\u7528\u6237\u767b\u5f55",level:2},{value:"\u6570\u636e\u63a5\u5165",id:"\u6570\u636e\u63a5\u5165",level:2},{value:"\u6570\u636e\u6d41Group \u4fe1\u606f",id:"\u6570\u636e\u6d41group-\u4fe1\u606f",level:3},{value:"\u63a5\u5165\u8981\u6c42",id:"\u63a5\u5165\u8981\u6c42",level:4},{value:"Group \u4fe1\u606f",id:"group-\u4fe1\u606f",level:4},{value:"\u63a5\u5165\u89c4\u6a21",id:"\u63a5\u5165\u89c4\u6a21",level:4},{value:"\u6570\u636e\u6d41",id:"\u6570\u636e\u6d41",level:3},{value:"\u57fa\u7840\u4fe1\u606f",id:"\u57fa\u7840\u4fe1\u606f",level:4},{value:"\u6570\u636e\u6765\u6e90",id:"\u6570\u636e\u6765\u6e90",level:4},{value:"\u6570\u636e\u4fe1\u606f",id:"\u6570\u636e\u4fe1\u606f",level:4},{value:"\u6570\u636e\u6d41\u5411",id:"\u6570\u636e\u6d41\u5411",level:4},{value:"\u6211\u7684\u7533\u8bf7",id:"\u6211\u7684\u7533\u8bf7",level:2},{value:"\u7533\u8bf7\u6570\u636e\u63a5\u5165\u8be6\u60c5",id:"\u7533\u8bf7\u6570\u636e\u63a5\u5165\u8be6\u60c5",level:4},{value:"\u6570\u636e\u6d88\u8d39",id:"\u6570\u636e\u6d88\u8d39",level:2},{value:"\u6d88\u8d39\u4fe1\u606f",id:"\u6d88\u8d39\u4fe1\u606f",level:3}],s={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7528\u6237\u767b\u5f55"},"\u7528\u6237\u767b\u5f55"),(0,a.kt)("p",null,"\u9700\u7cfb\u7edf\u4f7f\u7528\u7528\u6237\u8f93\u5165\u8d26\u53f7\u540d\u79f0\u548c\u5bc6\u7801\uff0c\u9ed8\u8ba4\u8d26\u53f7\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"admin inlong"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"User login",src:l(34318).Z,width:"618",height:"371"})),(0,a.kt)("h2",{id:"\u6570\u636e\u63a5\u5165"},"\u6570\u636e\u63a5\u5165"),(0,a.kt)("p",null,"\u6570\u636e\u63a5\u5165\u6a21\u5757\u5c55\u793a\u76ee\u524d\u7528\u6237\u6743\u9650\u5185\u63a5\u5165\u7cfb\u7edf\u6240\u6709\u4efb\u52a1\u5217\u8868\uff0c\u53ef\u4ee5\u5bf9\u8fd9\u4e9b\u4efb\u52a1\u8be6\u60c5\u67e5\u770b\u3001\u7f16\u8f91\u66f4\u65b0\u548c\u5220\u9664\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u70b9\u51fb\u3010\u65b0\u5efa\u63a5\u5165\u3011\u63a5\u5165\u6d41\u7a0b\uff0c\u6570\u636e\u63a5\u5165\u4fe1\u606f\u586b\u5199\u6709\u4e24\u4e2a\u6b65\u9aa4\uff1aGroup \u4fe1\u606f\u3001\u6570\u636e\u6d41\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create Group",src:l(21298).Z,width:"1585",height:"492"})),(0,a.kt)("h3",{id:"\u6570\u636e\u6d41group-\u4fe1\u606f"},"\u6570\u636e\u6d41Group \u4fe1\u606f"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Group information",src:l(7869).Z,width:"841",height:"757"})),(0,a.kt)("h4",{id:"\u63a5\u5165\u8981\u6c42"},"\u63a5\u5165\u8981\u6c42"),(0,a.kt)("p",null,"\u63a5\u5165\u8981\u6c42\u9700\u8981\u7528\u6237\u8fdb\u884c\u9009\u62e9\u6d88\u606f\u4e2d\u95f4\u4ef6\uff1a\u9ad8\u541e\u5410\uff08TUBE\uff09\u6216\u8005\u9ad8\u53ef\u9760\uff08PULSAR\uff09\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9ad8\u541e\u5410\uff08InLong TubeMQ\uff09\uff1a\u9ad8\u541e\u5410\u6d88\u606f\u4f20\u8f93\u7ec4\u4ef6\uff0c\u9002\u7528\u4e8e\u65e5\u5fd7\u7c7b\u7684\u6d88\u606f\u4f20\u9012\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u9ad8\u53ef\u9760\uff08Apache Pulsar\uff09\uff1a\u9ad8\u53ef\u9760\u6d88\u606f\u4f20\u8f93\u7ec4\u4ef6\uff0c\u9002\u7528\u4e8e\u8ba1\u8d39\u7b49\u573a\u666f\u3002")),(0,a.kt)("h4",{id:"group-\u4fe1\u606f"},"Group \u4fe1\u606f"),(0,a.kt)("p",null,"\u9700\u8981\u7528\u6237\u5bf9\u63a5\u5165\u4efb\u52a1\u586b\u5199\u57fa\u7840\u6570\u636e\u6d41Group \u4fe1\u606f\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Group \u82f1\u6587\u540d\u79f0\uff1a\u7edf\u4e00\u5c0f\u5199\u82f1\u6587\u540d\u79f0\uff0c\u8bf7\u5c3d\u91cf\u5305\u542b\u4ea7\u54c1\u540d\u548c\u7b80\u6d01\u89c4\u8303\uff0c\u5982pay_base"),(0,a.kt)("li",{parentName:"ul"},"Group \u4e2d\u6587\u540d\u79f0\uff1aGroup \u7684\u4e2d\u6587\u63cf\u8ff0\uff0c\u4fbf\u4e8e\u4f7f\u7528\u4e0e\u68c0\u7d22\uff0c\u6700\u591a128\u4e2a\u5b57"),(0,a.kt)("li",{parentName:"ul"},"Group \u8d23\u4efb\u4eba\uff1a\u81f3\u5c111\u4eba\uff0cGroup \u8d23\u4efb\u4eba\u53ef\u67e5\u770b\u3001\u4fee\u6539Group \u4fe1\u606f\uff0c\u65b0\u589e\u548c\u4fee\u6539\u6240\u6709\u63a5\u5165\u914d\u7f6e\u9879"),(0,a.kt)("li",{parentName:"ul"},"Group \u4ecb\u7ecd\uff1a\u7b80\u77ed\u5bf9\u6b64\u6b21\u63a5\u5165\u4efb\u52a1Group \u80cc\u666f\u548c\u5e94\u7528\u8fdb\u884c\u4ecb\u7ecd\uff1a")),(0,a.kt)("h4",{id:"\u63a5\u5165\u89c4\u6a21"},"\u63a5\u5165\u89c4\u6a21"),(0,a.kt)("p",null,"\u63a5\u5165\u89c4\u6a21\u9700\u8981\u7528\u6237\u9884\u5148\u9488\u5bf9\u63a5\u5165\u6570\u636e\u8fdb\u884c\u89c4\u6a21\u5224\u65ad\uff0c\u4ee5\u4fbf\u540e\u7eed\u5206\u914d\u8ba1\u7b97\u548c\u5b58\u50a8\u8d44\u6e90\u3002"),(0,a.kt)("h3",{id:"\u6570\u636e\u6d41"},"\u6570\u636e\u6d41"),(0,a.kt)("p",null,"\u70b9\u51fb\u3010\u4e0b\u4e00\u6b65\u3011\u8fdb\u5165\u5230\u6570\u636e\u6d41\u4fe1\u606f\u586b\u5199\u6b65\u9aa4\uff0c\u6570\u636e\u6d41\u4fe1\u606f\u586b\u5199\u6709\u56db\u4e2a\u6a21\u5757\uff1a\u57fa\u7840\u4fe1\u606f\u3001\u6570\u636e\u6765\u6e90\u3001\u6570\u636e\u4fe1\u606f\u3001\u6570\u636e\u6d41\u5411\u3002"),(0,a.kt)("p",null,"\u5728\u6570\u636e\u6d41\u6d41\u7a0b\u4e2d\u53ef\u4ee5\u70b9\u51fb\u3010\u65b0\u5efa\u3011\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6570\u636e\u6d41\u4fe1\u606f\u586b\u5199\u9875\u9762\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create stream",src:l(33218).Z,width:"818",height:"526"})),(0,a.kt)("h4",{id:"\u57fa\u7840\u4fe1\u606f"},"\u57fa\u7840\u4fe1\u606f"),(0,a.kt)("p",null,"\u9700\u7528\u6237\u5bf9\u8be5\u63a5\u5165\u4efb\u52a1\u4e2d\u6570\u636e\u6d41\u7684\u57fa\u7840\u4fe1\u606f\u8fdb\u884c\u586b\u5199\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u6d41ID\uff1a\u524d\u7f00\u6839\u636e\u4ea7\u54c1/\u9879\u76ee\u81ea\u52a8\u751f\u6210\uff0c\u8fd9\u5728\u67d0\u4e2a\u5177\u4f53\u7684\u63a5\u5165\u4e2d\u662f\u552f\u4e00\u7684\uff0c\u4e0e\u6570\u636e\u6e90\u548c\u5165\u5e93\u7684\u8868\u4e2d\u7684\u6570\u636e\u6d41ID\u4fdd\u6301\u4e00\u81f4"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u6d41\u540d\u79f0\uff1a\u63a5\u53e3\u4fe1\u606f\u8bf4\u660e\uff0c\u957f\u5ea6\u9650\u5236\u4e3a64\u4e2a\u82f1\u6587\u5b57\u7b26\uff08\u5bf9\u5e9432\u4e2a\u4e2d\u6587\u5b57\u7b26\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u6d41\u8d23\u4efb\u4eba\uff1a\u6570\u636e\u6d41\u8d23\u4efb\u4eba\u53ef\u67e5\u770b\u3001\u4fee\u6539\u6570\u636e\u6d41\u4fe1\u606f\uff0c\u65b0\u589e\u548c\u4fee\u6539\u6240\u6709\u63a5\u5165\u914d\u7f6e\u9879"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u6d41\u4ecb\u7ecd\uff1a\u6570\u636e\u6d41\u7b80\u5355\u6587\u672c\u4ecb\u7ecd")),(0,a.kt)("h4",{id:"\u6570\u636e\u6765\u6e90"},"\u6570\u636e\u6765\u6e90"),(0,a.kt)("p",null,"\u9700\u7528\u6237\u9009\u62e9\u8be5\u6570\u636e\u6d41\u7684\u6d88\u606f\u6765\u6e90\uff0c\u76ee\u524d\u652f\u6301\u6587\u4ef6\u3001\u81ea\u4e3b\u63a8\u9001\u4e24\u79cd\u65b9\u5f0f\uff0c\u5e76\u4e14\u53ef\u4ee5\u5728\u9ad8\u7ea7\u9009\u9879\u4e2d\u8865\u5145\u8be5\u6570\u636e\u6765\u6e90\u8be6\u7ec6\u4fe1\u606f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6587\u4ef6\uff1a\u91c7\u96c6\u6570\u636e\u4ee5\u6587\u4ef6\u5f62\u5f0f\u5b58\u653e\uff0c\u91c7\u96c6\u673a\u5668\u90e8\u7f72 InLong Agent\uff0c\u6839\u636e\u5b9a\u5236\u7684\u7b56\u7565\u89c4\u5219\u8fdb\u884c\u8bfb\u53d6"),(0,a.kt)("li",{parentName:"ul"},"\u81ea\u4e3b\u63a8\u9001\uff1a\u901a\u8fc7 SDK \u5411\u6d88\u606f\u4e2d\u95f4\u4ef6\u63a8\u9001\u6570\u636e")),(0,a.kt)("h4",{id:"\u6570\u636e\u4fe1\u606f"},"\u6570\u636e\u4fe1\u606f"),(0,a.kt)("p",null,"\u9700\u7528\u6237\u586b\u5199\u8be5\u6570\u636e\u6d41\u4e2d\u6570\u636e\u76f8\u5173\u4fe1\u606f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Data info",src:l(11667).Z,width:"1495",height:"460"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u683c\u5f0f\uff1a\u6570\u636e\u6765\u6e90\u683c\u5f0f\uff0c\u662f\u666e\u901a\u6587\u672c\u7c7b\u578b\uff0c\u6216\u8005KV\u952e\u503c\u5bf9\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u7f16\u7801"),(0,a.kt)("li",{parentName:"ul"},"\u6e90\u5b57\u6bb5\u5206\u9694\u7b26"),(0,a.kt)("li",{parentName:"ul"},"\u6e90\u6570\u636e\u5b57\u6bb5")),(0,a.kt)("h4",{id:"\u6570\u636e\u6d41\u5411"},"\u6570\u636e\u6d41\u5411"),(0,a.kt)("p",null,"\u9700\u7528\u6237\u5bf9\u6b64\u4efb\u52a1\u7684\u6d41\u5411\u7ec8\u6d41\u5411\u8fdb\u884c\u9009\u62e9\uff0c\u6b64\u90e8\u5206\u4e3a\u975e\u5fc5\u586b\u9879\uff0c\u76ee\u524d\u652f\u6301Hive\u548c\u81ea\u4e3b\u63a8\u9001\u4e24\u79cd\uff1a"),(0,a.kt)("p",null,"HIVE\u6d41\u5411\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hive info",src:l(97021).Z,width:"1187",height:"727"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u76ee\u6807\u5e93\uff1ahive\u6570\u636e\u5e93\u540d\uff08\u9700\u8981\u63d0\u524d\u51c6\u5907\u521b\u5efa\u597d\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u76ee\u6807\u8868\uff1ahive\u8868\u540d"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u7ea7\u5206\u533a\uff1ahive\u6570\u636e\u5212\u5206hdfs\u6570\u636e\u4e00\u7ea7\u5b50\u76ee\u5f55\u7684\u5b57\u6bb5\u540d"),(0,a.kt)("li",{parentName:"ul"},"\u4e8c\u7ea7\u5206\u533a\uff1ahive\u6570\u636e\u5212\u5206hdfs\u6570\u636e\u4e00\u7ea7\u5b50\u76ee\u5f55\u7684\u5b57\u6bb5\u540d"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u540d\uff1ahiveserver\u8fde\u63a5\u8d26\u6237\u540d"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u5bc6\u7801\uff1ahiveserver\u8fde\u63a5\u8d26\u5bc6\u7801"),(0,a.kt)("li",{parentName:"ul"},"HDFS url\uff1ahive\u5e95\u5c42hdfs\u8fde\u63a5"),(0,a.kt)("li",{parentName:"ul"},"JDBC url\uff1ahiveserver \u7684jdbcurl"),(0,a.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u76f8\u5173\u4fe1\u606f\uff1a \u6e90\u5b57\u6bb5\u540d\u3001\u6e90\u5b57\u6bb5\u7c7b\u578b\u3001HIVE\u5b57\u6bb5\u540d\u3001HIVE\u5b57\u6bb5\u7c7b\u578b\u3001\u5b57\u6bb5\u63cf\u8ff0\uff0c\u5e76\u652f\u6301\u5220\u9664\u548c\u65b0\u589e\u5b57\u6bb5")),(0,a.kt)("h2",{id:"\u6211\u7684\u7533\u8bf7"},"\u6211\u7684\u7533\u8bf7"),(0,a.kt)("p",null,"\u5ba1\u6279\u7ba1\u7406\u529f\u80fd\u6a21\u5757\u76ee\u524d\u5305\u542b\u4e86\u6211\u7684\u7533\u8bf7\u548c\u6211\u7684\u5ba1\u6279\uff0c\u7ba1\u7406\u7cfb\u7edf\u4e2d\u6570\u636e\u63a5\u5165\u548c\u6570\u636e\u6d88\u8d39\u7533\u8bf7\u5ba1\u6279\u5168\u90e8\u4efb\u52a1\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My application",src:l(86495).Z,width:"1557",height:"531"})),(0,a.kt)("p",null,"\u5c55\u793a\u76ee\u524d\u7533\u8bf7\u4eba\u5728\u7cfb\u7edf\u4e2d\u6570\u636e\u63a5\u5165\u3001\u6d88\u8d39\u63d0\u4ea4\u7684\u4efb\u52a1\u5217\u8868\uff0c\u70b9\u51fb\u3010\u8be6\u60c5\u3011\u53ef\u4ee5\u67e5\u770b\u76ee\u524d\u8be5\u4efb\u52a1\u57fa\u7840\u4fe1\u548c\u5ba1\u6279\u8fdb\u7a0b\uff1a"),(0,a.kt)("h4",{id:"\u7533\u8bf7\u6570\u636e\u63a5\u5165\u8be6\u60c5"},"\u7533\u8bf7\u6570\u636e\u63a5\u5165\u8be6\u60c5"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Application detail",src:l(62710).Z,width:"1540",height:"748"})),(0,a.kt)("p",null,"\u6570\u636e\u63a5\u5165\u4efb\u52a1\u8be6\u7ec6\u5c55\u793a\u76ee\u524d\u8be5\u7533\u8bf7\u4efb\u52a1\u57fa\u7840\u4fe1\u606f\u5305\u62ec\uff1a\u7533\u8bf7\u4eba\u76f8\u5173\u4fe1\u606f\u3001\u7533\u8bf7\u63a5\u5165\u57fa\u7840\u4fe1\u606f\uff0c\u4ee5\u53ca\u76ee\u524d\u5ba1\u6279\u8fdb\u7a0b\u8282\u70b9\uff1a"),(0,a.kt)("h2",{id:"\u6570\u636e\u6d88\u8d39"},"\u6570\u636e\u6d88\u8d39"),(0,a.kt)("p",null,"\u6570\u636e\u6d88\u8d39\u76ee\u524d\u4e0d\u652f\u6301\u76f4\u63a5\u6d88\u8d39\u63a5\u5165\u6570\u636e\uff0c\u9700\u8d70\u6570\u636e\u5ba1\u6279\u6d41\u7a0b\u540e\u65b9\u53ef\u6b63\u5e38\u6d88\u8d39\u6570\u636e\uff1b \u70b9\u51fb\u3010\u65b0\u5efa\u6d88\u8d39\u3011\uff0c\u8fdb\u5165\u6570\u636e\u6d88\u8d39\u6d41\u7a0b\uff0c\u9700\u8981\u5bf9\u6d88\u8d39\u4fe1\u606f\u76f8\u5173\u4fe1\u606f\u8fdb\u884c\u586b\u5199\uff1a"),(0,a.kt)("h3",{id:"\u6d88\u8d39\u4fe1\u606f"},"\u6d88\u8d39\u4fe1\u606f"),(0,a.kt)("p",null,"\u7533\u8bf7\u4eba\u9700\u5728\u8be5\u4fe1\u606f\u586b\u5199\u6a21\u5757\u4e2d\u9010\u6b65\u586b\u5199\u6570\u636e\u6d88\u8d39\u7533\u8bf7\u76f8\u5173\u57fa\u7840\u6d88\u8d39\u6570\u636e\u6d41Group \u4fe1\u606f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Consumer info",src:l(80564).Z,width:"799",height:"476"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6d88\u8d39\u7ec4\u540d\u79f0\uff1a\u6d88\u8d39\u8005\u7684\u7b80\u8981\u540d\u79f0\uff0c\u5fc5\u987b\u662f\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\u7ec4\u6210\uff0c\u6700\u540e\u5ba1\u6279\u4f1a\u6839\u636e\u7b80\u79f0\u62fc\u63a5\u5206\u914d\u51fa\u6d88\u8d39\u8005\u540d\u79f0"),(0,a.kt)("li",{parentName:"ul"},"\u6d88\u8d39\u8d23\u4efb\u4eba\uff1a\u81ea\u884c\u9009\u62e9\u8d23\u4efb\u4eba\uff0c\u5fc5\u987b\u81f3\u5c112\u4eba\uff1b\u8d23\u4efb\u4eba\u53ef\u67e5\u770b\u3001\u4fee\u6539\u6d88\u8d39\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u6d88\u8d39\u76ee\u6807\u6570\u636e\u6d41Group ID\uff1a\u9700\u8981\u9009\u62e9\u6d88\u8d39\u6570\u636e\u7684\u6570\u636e\u6d41Group ID\uff0c\u53ef\u4ee5\u70b9\u51fb\u3010\u67e5\u8be2\u3011\u540e\uff0c\u5728\u5f39\u7a97\u9875\u9762\u4e2d\u9009\u62e9\u5408\u9002\u7684\u6570\u636e\u6d41Group ID\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u7528\u9014\uff1a\u9009\u62e9\u6570\u636e\u4f7f\u7528\u7528\u9014"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u7528\u9014\u8bf4\u660e\uff1a\u9700\u7533\u8bf7\u4eba\u6839\u636e\u81ea\u8eab\u6d88\u8d39\u573a\u666f\uff0c\u7b80\u8981\u8bf4\u660e\u4f7f\u7528\u7684\u9879\u76ee\u548c\u6570\u636e\u7684\u7528\u9014")),(0,a.kt)("p",null,"\u4fe1\u606f\u586b\u5b8c\u5b8c\u6210\u540e\uff0c\u70b9\u51fb\u3010\u63d0\u4ea4\u3011\u540e\uff0c\u4f1a\u5c06\u6b21\u6570\u636e\u6d88\u8d39\u6d41\u7a0b\u6b63\u5f0f\u63d0\u4ea4\u5f85\u5ba1\u6279\u4eba\u5ba1\u6279\u540e\u65b9\u53ef\u751f\u6548\u3002"))}c.isMDXComponent=!0},62710:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/application-detail-4f90ef12490d6ec4549b247a063c8273.png"},80564:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/consumer-info-5a734765a66f0a03c96c63b18c0fcd32.png"},21298:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/create-group-cf9e4460a7e932bcf729fa121855da46.png"},33218:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/create-stream-bdefdab10ca2b38ea31ae9d31af71b01.png"},11667:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/data-info-d5cc9ebc39ddbf244ee9bc8f5b4ee2bd.png"},7869:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/group-information-99c9cfafe34bb0d65e0f00693491bedf.png"},97021:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/hive-info-b286d06f2e6f431efc82ec1269bb1eab.png"},86495:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/my-application-e95eda782f1560b6a8bffc14363c16b5.png"},34318:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/user-login-6d244e01af1ca71e5d3cf148f7013575.png"}}]);