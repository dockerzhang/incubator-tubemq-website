"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[786],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(k,a(a({ref:t},s),{},{components:n})):r.createElement(k,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const l={title:"Docker \u90e8\u7f72",sidebar_position:2},a=void 0,i={unversionedId:"deployment/docker",id:"version-1.0.0/deployment/docker",title:"Docker \u90e8\u7f72",description:"\u901a\u8fc7Docker Compose\u90e8\u7f72InLong, \u8fd9\u79cd\u90e8\u7f72\u65b9\u5f0f\u53ea\u9002\u7528\u4e8e\u5f00\u53d1\u8c03\u8bd5\uff0c\u4e0d\u9002\u7528\u4e8e\u751f\u4ea7\u73af\u5883.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.0/deployment/docker.md",sourceDirName:"deployment",slug:"/deployment/docker",permalink:"/zh-CN/docs/1.0.0/deployment/docker",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.0.0/deployment/docker.md",tags:[],version:"1.0.0",sidebarPosition:2,frontMatter:{title:"Docker \u90e8\u7f72",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5355\u673a\u90e8\u7f72",permalink:"/zh-CN/docs/1.0.0/deployment/standalone"},next:{title:"Kubernetes \u90e8\u7f72",permalink:"/zh-CN/docs/1.0.0/deployment/k8s"}},c={},p=[{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u4f7f\u7528InLong",id:"\u4f7f\u7528inlong",level:2},{value:"\u9500\u6bc1",id:"\u9500\u6bc1",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u901a\u8fc7Docker Compose\u90e8\u7f72InLong, \u8fd9\u79cd\u90e8\u7f72\u65b9\u5f0f\u53ea\u9002\u7528\u4e8e\u5f00\u53d1\u8c03\u8bd5\uff0c\u4e0d\u9002\u7528\u4e8e\u751f\u4ea7\u73af\u5883."),(0,o.kt)("p",null,"\u51c6\u5907\u6761\u4ef6:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+"),(0,o.kt)("li",{parentName:"ul"},"Docker Compose 1.29.2+")),(0,o.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,o.kt)("p",null,"\u624b\u52a8\u62f7\u8d1d",(0,o.kt)("inlineCode",{parentName:"p"},"inlong-manager/sql"),"\u76ee\u5f55\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"docker/compose/sql"),"\u76ee\u5f55."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cp inlong-manager/sql/apache_inlong_manager.sql  docker/docker-compose/sql\n")),(0,o.kt)("p",null,"\u7136\u540e\u542f\u52a8\u6240\u6709\u7ec4\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker-compose up -d\n")),(0,o.kt)("h2",{id:"\u4f7f\u7528inlong"},"\u4f7f\u7528InLong"),(0,o.kt)("p",null,"\u5f53\u6240\u6709\u5bb9\u5668\u90fd\u6210\u529f\u542f\u52a8\u540e\uff0c\u53ef\u4ee5\u8bbf\u95ee",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost"),"\uff0c\u5e76\u4f7f\u7528\u4ee5\u4e0b\u9ed8\u8ba4\u8d26\u53f7\u767b\u5f55:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,o.kt)("h2",{id:"\u9500\u6bc1"},"\u9500\u6bc1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker-compose down\n")))}d.isMDXComponent=!0}}]);