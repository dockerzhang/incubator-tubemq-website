"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[166],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u5982\u4f55\u7ef4\u62a4\u9879\u76ee\u91cc\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56",sidebar_position:9},o=void 0,p={unversionedId:"how-to-maintain-3rd-party-dependencies",id:"how-to-maintain-3rd-party-dependencies",title:"\u5982\u4f55\u7ef4\u62a4\u9879\u76ee\u91cc\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56",description:"\u4e3a\u4ec0\u4e48\u8981\u7ef4\u62a4\u7b2c\u4e09\u65b9\u4f9d\u8d56",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/how-to-maintain-3rd-party-dependencies.md",sourceDirName:".",slug:"/how-to-maintain-3rd-party-dependencies",permalink:"/zh-CN/community/how-to-maintain-3rd-party-dependencies",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/i18n/zh-CN/how-to-maintain-3rd-party-dependencies.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"\u5982\u4f55\u7ef4\u62a4\u9879\u76ee\u91cc\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u62a5\u544a\u95ee\u9898",permalink:"/zh-CN/community/how-to-report-issues"}},l={},c=[{value:"\u4e3a\u4ec0\u4e48\u8981\u7ef4\u62a4\u7b2c\u4e09\u65b9\u4f9d\u8d56",id:"\u4e3a\u4ec0\u4e48\u8981\u7ef4\u62a4\u7b2c\u4e09\u65b9\u4f9d\u8d56",level:2},{value:"\u6d89\u53ca\u7684\u64cd\u4f5c",id:"\u6d89\u53ca\u7684\u64cd\u4f5c",level:2},{value:"\u7b2c\u4e09\u65b9\u4f9d\u8d56\u68b3\u7406\u65b9\u6cd5",id:"\u7b2c\u4e09\u65b9\u4f9d\u8d56\u68b3\u7406\u65b9\u6cd5",level:2}],s={toc:c};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u7ef4\u62a4\u7b2c\u4e09\u65b9\u4f9d\u8d56"},"\u4e3a\u4ec0\u4e48\u8981\u7ef4\u62a4\u7b2c\u4e09\u65b9\u4f9d\u8d56"),(0,a.kt)("p",null,"   \u4e0d\u540c\u7684\u4f9d\u8d56\u5305\u542b\u4e86\u4e0d\u540c\u7684 LICENSE\uff0cApache \u9879\u76ee\u4f7f\u7528\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\u5fc5\u987b\u4e25\u683c\u9075\u5b88",(0,a.kt)("a",{parentName:"p",href:"https://www.apache.org/legal/resolved.html"},"ASF \u7b2c 3 \u65b9\u8bb8\u53ef\u653f\u7b56")," \uff0c\u8be5\u653f\u7b56\u5c06\u7b2c\u4e09\u65b9\u4f9d\u8d56\u7684\u5404\u79cd LICENSE \u5206\u4e3a\u4e863\u7c7b\uff1aA\u7c7b\uff0cB\u7c7b\uff0cX\u7c7b\uff0c\u5e76\u5bf9\u54ea\u79cd\u6388\u6743\u534f\u8bae\u5c5e\u4e8e\u54ea\u4e00\u7c7b\u505a\u4e86\u8be6\u7ec6\u800c\u660e\u786e\u7684\u679a\u4e3e\u5b9a\u4e49\uff1bApache \u9879\u76ee\u7684\u4ea4\u4ed8\u7269\u91cc\u7981\u6b62\u5305\u542b\u5e26\u6709X\u7c7b\u7684\u6388\u6743\u534f\u8bae\u4f9d\u8d56\u5305\uff0c\u65e0\u8bba\u662f\u76f4\u63a5\u4f9d\u8d56\u8fd8\u662f\u95f4\u63a5\u4f9d\u8d56\uff0c\u90fd\u4e0d\u5141\u8bb8\u3002"),(0,a.kt)("h2",{id:"\u6d89\u53ca\u7684\u64cd\u4f5c"},"\u6d89\u53ca\u7684\u64cd\u4f5c"),(0,a.kt)("p",null,"   \u57fa\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://www.apache.org/legal/resolved.html"},"ASF \u7b2c 3 \u65b9\u8bb8\u53ef\u653f\u7b56")," \uff0c\u6211\u4eec\u5df2\u7ecf\u5bf9 InLong \u9879\u76ee\u7684\u6240\u6709\u4f9d\u8d56\u505a\u4e86\u4e00\u6b21\u5b8c\u6574\u7684\u68b3\u7406\u53ca\u68c0\u67e5\uff0c\u786e\u4fdd\u7248\u672c\u7684\u6240\u6709\u7b2c\u4e09\u65b9\u4f9d\u8d56\u5df2\u7ecf\u662f\u7b26\u5408 Apache \u89c4\u8303\u8981\u6c42\u7684\u72b6\u6001\uff1b\u7531\u4e8e\u9879\u76ee\u662f\u4e0d\u65ad\u8fed\u4ee3\u53d1\u5c55\u7684\uff0c\u540e\u7eed\u5927\u5bb6\u9700\u8981\u6309\u7167\u7edf\u4e00\u7684\u6807\u51c6\u5bf9\u7b2c\u4e09\u65b9\u4f9d\u8d56\u5305\u8fdb\u884c\u68c0\u67e5\u548c\u7ef4\u62a4\uff0c\u5305\u62ec\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5bf9\u9879\u76ee\u65b0\u589e\u6a21\u5757\uff1b")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5bf9\u9879\u76ee\u5df2\u6709\u7684\u6a21\u5757\u8fdb\u884c\u5982\u4e0b\u64cd\u4f5c\uff1a"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u65b0\u589e\u65b0\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664\u5df2\u6709\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539\u5df2\u6709\u7b2c\u4e09\u65b9\u4f9d\u8d56\u7684\u7248\u672c\u53f7\uff1b"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7248\u672c\u53d1\u5e03\u524d\u5bf9\u4ea4\u4ed8\u7269\u8fdb\u884c\u53d1\u7248\u68c0\u67e5"),(0,a.kt)("p",{parentName:"li"},"\u4e0a\u9762\u64cd\u4f5c\u7684\u6838\u5fc3\u5373\u65b0\u589e\u6216\u4fee\u6539\u5404\u4e2a pom.xml \u65f6\uff0c\u9700\u8981\u68c0\u67e5\u9879\u76ee\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\u5e76\u5bf9\u5df2\u6709\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\u7684\u6c47\u603b\u6587\u4ef6\u8fdb\u884c\u53d8\u66f4\uff1b\u4fee\u6539\u7b2c\u4e09\u65b9\u4f9d\u8d56\u7684\u7248\u672c\u53f7\uff0c\u9700\u8981\u5c06\u4f7f\u7528\u8be5\u4f9d\u8d56\u5305\u7684\u6240\u6709\u6a21\u5757\u5bf9\u5e94\u7684LICENSE\u548cNOTICE\u8fdb\u884c\u5bf9\u5e94\u66f4\u65b0\u3002"))),(0,a.kt)("h2",{id:"\u7b2c\u4e09\u65b9\u4f9d\u8d56\u68b3\u7406\u65b9\u6cd5"},"\u7b2c\u4e09\u65b9\u4f9d\u8d56\u68b3\u7406\u65b9\u6cd5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e09\u65b9\u4f9d\u8d56\u7684 LICENSE \u53ca NOTICE \u6c47\u603b\u4f4d\u7f6e\uff1a\n\u6309\u7167\u9879\u76ee\u7684\u6a21\u5757\u540d\uff0c\u6211\u4eec\u5c06\u5404\u4e2a\u6a21\u5757\u7b2c\u4e09\u65b9\u4f9d\u8d56\u7684 LICENSE \u53ca NOTICE \u6c47\u603b\u5230 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/inlong/tree/master/licenses"},"\u7b2c\u4e09\u65b9license\u76ee\u5f55")," \uff0c \u5927\u5bb6\u5bfc\u5165\u9879\u76ee\u540e\u5373\u53ef\u770b\u5230\u5982\u4e0b\u5185\u5bb9\uff1a",(0,a.kt)("img",{src:n(29048).Z,width:"433",height:"717"})),(0,a.kt)("li",{parentName:"ol"},"\u4ea4\u4ed8\u7269\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\u5982\u4f55\u6620\u5c04\uff1a\n\u4ee5 inlong-dataproxy \u6a21\u5757\u4e3a\u4f8b\uff0c\u6211\u4eec\u9996\u5148\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"mvn clean package install")," \u547d\u4ee4\u8fdb\u884c\u672c\u5730\u6253\u5305\uff0c\u83b7\u53d6\u5404\u4e2a\u4f9d\u8d56\u5305\u7684\u8be6\u60c5\u4fe1\u606f\uff1a",(0,a.kt)("img",{src:n(79730).Z,width:"1869",height:"986"}),"\uff1b\n\u4ece\u56fe\u4e2d\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u83b7\u5f97\u4e86\u6a21\u5757\u7684 DEPENDENCIES \u6587\u4ef6\uff0c\u6839\u636e\u4ea4\u4ed8\u7269\u91cc\u4f9d\u8d56\u5305\u7684 artifactId \u67e5\u627e DEPENDENCIES \u6587\u4ef6\u5bf9\u5e94\u6761\u76ee\uff0c\u5c06\u8be5\u4f9d\u8d56\u6309\u7167 LICENSE \u7684\u7c7b\u578b\u5f52\u6863\u68b3\u7406\uff1a",(0,a.kt)("img",{src:n(43943).Z,width:"1902",height:"793"}),"\uff0c\u8fd9\u91cc\u7684\u6761\u76ee\u683c\u5f0f\u4e3a \u201cgroupId:artifactId:version - name (url), (license.name)\u201d\uff0c\u6bcf\u4e2a\u5355\u5143\u6309\u7167 artifactId \u7684\u5b57\u6bcd\u8fdb\u884c\u6392\u5e8f\uff1b\n\u8be5\u9879\u76ee\u5b58\u5728 NOTICE\uff0c\u6211\u4eec\u9700\u8981\u5c06\u5bf9\u5e94\u7684 NOTICE \u539f\u6587\u62f7\u8d1d\u5230 inlong-dataproxy \u6a21\u5757\u7684 NOTICE \u6587\u4ef6\u4e2d\uff1a",(0,a.kt)("img",{src:n(66208).Z,width:"1556",height:"807"}),"\uff0c\u5982\u679c NOTICE \u539f\u6587\u8d85\u8fc710\u884c\uff0c\u5219\u5c06\u539f\u6587\u653e\u5230 notices \u5b50\u76ee\u5f55\u91cc\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u7279\u522b\u60c5\u51b5\uff1a\u5982\u679c\u4f9d\u8d56\u5305\u91cc\u6ca1\u6709\u643a\u5e26 LICENSE \u548c NOTICE \u6587\u4ef6\uff08\u6216\u53ea\u6709 LICENSE\uff0c\u6ca1\u6709 NOTICE\uff09\uff0c\u6211\u4eec\u9700\u8981\u67e5\u627e\u8be5\u4f9d\u8d56\u5305\u5bf9\u5e94\u7684\u9879\u76ee\u6e90\u7801\u4e2d\u7684 LICENSE \u548c NOTICE\uff0c\u5e76\u6dfb\u52a0\u5230\u5982\u4e0a\u76ee\u5f55\u4e2d\uff0c\u53ef\u53c2\u8003 ZooKeeper \u7ec4\u4ef6\u7684\u68b3\u7406\u65b9\u5f0f\uff1a",(0,a.kt)("img",{src:n(63990).Z,width:"1920",height:"539"}),"\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u68b3\u7406\u76ee\u6807\uff1aApache \u9879\u76ee\u4ea4\u4ed8\u7269\u91cc\u4e0d\u80fd\u5305\u542b X \u7c7b\u7684\u6388\u6743\u534f\u8bae\u4f9d\u8d56\u5305\uff0c\u65e0\u8bba\u662f\u76f4\u63a5\u4f9d\u8d56\u8fd8\u662f\u95f4\u63a5\u4f9d\u8d56\uff0c\u90fd\u4e0d\u5141\u8bb8\u5b58\u5728\u3002"))))}d.isMDXComponent=!0},79730:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/3rdpart-to-sort-04d061366eb57cb6c0a0dd96410367dd.png"},43943:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/3rdparty-to-license-188f1958fc4b20b03e34c7d752b31073.png"},63990:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/3rdparty-to-notexist-cc1911ffb614f16e37145cddd9d1ea5e.png"},66208:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/3rdparty-to-notice-aa6cecc2f1e9ce5ec3e72c0e438ca823.png"},29048:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/main-frame-2d676ba905f847e9e56f3d25aa9f3b01.png"}}]);