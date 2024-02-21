"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[98330],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Docker \u90e8\u7f72",sidebar_position:2},l=void 0,i={unversionedId:"deployment/docker",id:"version-1.8.0/deployment/docker",title:"Docker \u90e8\u7f72",description:"\u901a\u8fc7 Docker Compose \u90e8\u7f72 InLong\uff0c\u8fd9\u79cd\u90e8\u7f72\u65b9\u5f0f\u53ea\u9002\u7528\u4e8e\u5f00\u53d1\u4e0e\u8c03\u8bd5\uff0c\u4e0d\u9002\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.8.0/deployment/docker.md",sourceDirName:"deployment",slug:"/deployment/docker",permalink:"/zh-CN/docs/1.8.0/deployment/docker",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.8.0/deployment/docker.md",tags:[],version:"1.8.0",sidebarPosition:2,frontMatter:{title:"Docker \u90e8\u7f72",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5355\u673a\u90e8\u7f72",permalink:"/zh-CN/docs/1.8.0/deployment/standalone"},next:{title:"Kubernetes \u90e8\u7f72",permalink:"/zh-CN/docs/1.8.0/deployment/k8s"}},p={},c=[{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:2},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u96c6\u7fa4\u521d\u59cb\u5316",id:"\u96c6\u7fa4\u521d\u59cb\u5316",level:2},{value:"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e",id:"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e",level:3},{value:"\u6ce8\u518c Pulsar \u96c6\u7fa4",id:"\u6ce8\u518c-pulsar-\u96c6\u7fa4",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u9500\u6bc1",id:"\u9500\u6bc1",level:2}],d={toc:c},s="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(s,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u901a\u8fc7 Docker Compose \u90e8\u7f72 InLong\uff0c\u8fd9\u79cd\u90e8\u7f72\u65b9\u5f0f\u53ea\u9002\u7528\u4e8e\u5f00\u53d1\u4e0e\u8c03\u8bd5\uff0c\u4e0d\u9002\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u3002"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Docker Compose \u90e8\u7f72\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"\u6807\u51c6\u67b6\u6784"),"\u6240\u9700\u8981\u7684\u6240\u6709\u7ec4\u4ef6\uff0c\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/concepts-overview"},"Apache Pulsar")," \u4f5c\u4e3a\u6d88\u606f\u961f\u5217\u670d\u52a1\u3002")),(0,o.kt)("h2",{id:"\u73af\u5883\u8981\u6c42"},"\u73af\u5883\u8981\u6c42"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/other/#on-linux"},"Docker Compose 2.4+"))),(0,o.kt)("h2",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u4ece ",(0,o.kt)("a",{parentName:"p",href:"https://inlong.apache.org/zh-CN/download/"},"\u4e0b\u8f7d\u9875\u9762")," \u83b7\u53d6 ",(0,o.kt)("inlineCode",{parentName:"p"},"apache-inlong-[version]-bin.tar.gz"),"\uff0c\u6216\u8005\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.8.0/quick_start/how_to_build"},"How to Build")," \u7f16\u8bd1\u3002"),(0,o.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,o.kt)("p",null,"\u542f\u52a8\u6240\u6709\u7ec4\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd docker/docker-compose\ndocker-compose up -d\n")),(0,o.kt)("h2",{id:"\u96c6\u7fa4\u521d\u59cb\u5316"},"\u96c6\u7fa4\u521d\u59cb\u5316"),(0,o.kt)("p",null,"\u5f53\u6240\u6709\u5bb9\u5668\u90fd\u6210\u529f\u542f\u52a8\u540e\uff0c\u53ef\u4ee5\u8bbf\u95ee InLong Dashboard \u5730\u5740",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost"),"\uff0c\u5e76\u4f7f\u7528\u4ee5\u4e0b\u9ed8\u8ba4\u8d26\u53f7\u767b\u5f55:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,o.kt)("h3",{id:"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e"},"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e"),(0,o.kt)("p",null,"\u9875\u9762\u70b9\u51fb ","[\u96c6\u7fa4\u7ba1\u7406]","->","[\u6807\u7b7e\u7ba1\u7406]","->","[\u65b0\u5efa]","\uff0c\u6307\u5b9a\u96c6\u7fa4\u6807\u7b7e\u540d\u79f0\u548c\u8d1f\u8d23\u4eba\uff1a\n",(0,o.kt)("img",{src:n(77347).Z,width:"517",height:"331"})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u7531\u4e8e\u5404\u4e2a\u7ec4\u4ef6\u9ed8\u8ba4\u4e0a\u62a5\u96c6\u7fa4\u6807\u7b7e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"default_cluster"),"\uff0c\u8bf7\u52ff\u4f7f\u7528\u5176\u5b83\u540d\u79f0\u3002")),(0,o.kt)("h3",{id:"\u6ce8\u518c-pulsar-\u96c6\u7fa4"},"\u6ce8\u518c Pulsar \u96c6\u7fa4"),(0,o.kt)("p",null,"\u9875\u9762\u70b9\u51fb ","[\u96c6\u7fa4\u7ba1\u7406]","->","[\u96c6\u7fa4\u7ba1\u7406]","->","[\u65b0\u5efa\u96c6\u7fa4]","\uff0c\u6ce8\u518c Pulsar \u96c6\u7fa4\uff1a\n",(0,o.kt)("img",{src:n(26195).Z,width:"644",height:"797"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u96c6\u7fa4\u6807\u7b7e\u9009\u62e9\u521a\u521b\u5efa\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"default_cluster"),"\uff0cdocker \u90e8\u7f72\u7684 Pulsar \u96c6\u7fa4\uff1a"),(0,o.kt)("p",{parentName:"admonition"},"Service URL \u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar://pulsar:6650"),"\uff0cAdmin URL \u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"http://pulsar:8080"),"\u3002")),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("p",null,"\u521b\u5efa\u6570\u636e\u6d41\u53ef\u4ee5\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.8.0/quick_start/pulsar_example"},"Pulsar Example"),"."),(0,o.kt)("h2",{id:"\u9500\u6bc1"},"\u9500\u6bc1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker-compose down\n")))}u.isMDXComponent=!0},77347:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create_cluster_tag-c25267ed8accf193c4f1ddcd95afc6fd.png"},26195:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create_pulsar_cluster-9dd71f99b861038a89495ebe7841c7de.png"}}]);