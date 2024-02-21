"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[47915],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,d=p["".concat(s,".").concat(b)]||p[b]||c[b]||l;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},88527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u5b89\u88c5\u90e8\u7f72"},o=void 0,i={unversionedId:"modules/tubemq/tubemq-manager/quick_start",id:"version-1.9.0/modules/tubemq/tubemq-manager/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u5b89\u88c5\u6587\u4ef6\u5728inlong-tubemq-manager\u76ee\u5f55.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.9.0/modules/tubemq/tubemq-manager/quick_start.md",sourceDirName:"modules/tubemq/tubemq-manager",slug:"/modules/tubemq/tubemq-manager/quick_start",permalink:"/zh-CN/docs/1.9.0/modules/tubemq/tubemq-manager/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.9.0/modules/tubemq/tubemq-manager/quick_start.md",tags:[],version:"1.9.0",frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72"},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.9.0/modules/tubemq/tubemq-manager/overview"},next:{title:"\u547d\u4ee4\u884c\u5de5\u5177",permalink:"/zh-CN/docs/1.9.0/modules/tubemq/commandline_tools"}},s={},u=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2},{value:"\u91cd\u542f",id:"\u91cd\u542f",level:2},{value:"\u521d\u59cb\u5316TubeMQ\u96c6\u7fa4",id:"\u521d\u59cb\u5316tubemq\u96c6\u7fa4",level:2}],m={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5b89\u88c5\u6587\u4ef6\u5728inlong-tubemq-manager\u76ee\u5f55."),(0,a.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u5e76\u542f\u52a8 MySQL 5.7+"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u4e0b\u8ff0\u547d\u4ee4\u52a0\u8f7d",(0,a.kt)("inlineCode",{parentName:"li"},"sql/apache_tube_manager.sql"),"\uff0c\u5b8c\u6210\u8868\u7ed3\u6784\u53ca\u57fa\u7840\u6570\u636e\u7684\u521d\u59cb\u5316\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u901a\u8fc7\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u521b\u5efa DB \u548c\u8868\uff1a\nmysql -uDB_USER -pDB_PASSWD < sql/apache_tube_manager.sql\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"# MySQL configuration for Manager\nspring.datasource.url=jdbc:mysql://mysql_ip:mysql_port/apache_tube_manager\nspring.datasource.username=mysql_username\nspring.datasource.password=mysql_password\n\n# \u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f JDK 11+ \u7248\u672c\uff0c\u8bf7\u989d\u5916\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\nspring.jaxb-compatibility-mode=true\nspring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect\n")),(0,a.kt)("h3",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bf7\u4e0b\u8f7d ",(0,a.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/org/hibernate/common/hibernate-commons-annotations/5.1.2.Final/hibernate-commons-annotations-5.1.2.Final.jar"},"hibernate-commons-annotations-5.1.2.Final.jar"),",\n",(0,a.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/org/hibernate/hibernate-core/5.6.7.Final/hibernate-core-5.6.7.Final.jar"},"hibernate-core-5.6.7.Final.jar"),",\n",(0,a.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/antlr/antlr/2.7.7/antlr-2.7.7.jar"},"antlr-2.7.7.jar"),",\n",(0,a.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/org/jboss/logging/jboss-logging/3.4.3.Final/jboss-logging-3.4.3.Final.jar"},"jboss-logging-3.4.3.Final.jar"),",  \u5e76\u5c06\u5176\u653e\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"lib/")," \u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 MySQL \u6570\u636e\u5e93\uff0c\u8bf7\u4e0b\u8f7d ",(0,a.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.28/mysql-connector-java-8.0.28.jar"},"mysql-connector-java-8.0.28.jar"),", \u5e76\u5c06\u5176\u653e\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"lib/")," \u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 PostgreSQL \u6570\u636e\u5e93\uff0c\u4e0d\u9700\u8981\u5f15\u5165\u989d\u5916\u4f9d\u8d56\u3002")),(0,a.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ bin/start-manager.sh \n")),(0,a.kt)("h2",{id:"\u91cd\u542f"},"\u91cd\u542f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ bin/restart-manager.sh \n")),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316tubemq\u96c6\u7fa4"},"\u521d\u59cb\u5316TubeMQ\u96c6\u7fa4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vim bin/init-tube-cluster.sh\n")),(0,a.kt)("p",null,"\u66ff\u6362\u5982\u4e0b\u516d\u4e2a\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"TUBE_MANAGER_IP=   //tube manager\u670d\u52a1\u542f\u52a8ip\nTUBE_MANAGER_PORT=   //tube manager\u670d\u52a1\u542f\u52a8port\nTUBE_MASTER_IP=   //tube \u96c6\u7fa4master ip\nTUBE_MASTER_PORT=\nTUBE_MASTER_WEB_PORT=\nTUBE_MASTER_TOKEN=\n")),(0,a.kt)("p",null,"\u7136\u540e\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sh bin/init-tube-cluster.sh\n")),(0,a.kt)("p",null,"\u5982\u4e0a\u64cd\u4f5c\u4f1a\u521b\u5efa\u4e00\u4e2aclusterId\u4e3a1\u7684tube\u96c6\u7fa4\uff0c\u6ce8\u610f\u8be5\u64cd\u4f5c\u53ea\u8fdb\u884c\u4e00\u6b21\uff0c\u4e4b\u540e\u91cd\u542f\u670d\u52a1\u65e0\u9700\u65b0\u5efa\u96c6\u7fa4"))}c.isMDXComponent=!0}}]);