"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[48719],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(g,l(l({ref:n},c),{},{components:t})):r.createElement(g,l({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},83963:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},l=void 0,i={unversionedId:"modules/sort/quick_start",id:"modules/sort/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u914d\u7f6e Flink \u8fd0\u884c\u73af\u5883",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/modules/sort/quick_start.md",sourceDirName:"modules/sort",slug:"/modules/sort/quick_start",permalink:"/zh-CN/docs/next/modules/sort/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/modules/sort/quick_start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/next/modules/sort/overview"},next:{title:"\u4f7f\u7528\u793a\u4f8b",permalink:"/zh-CN/docs/next/modules/sort/example"}},s={},p=[{value:"\u914d\u7f6e Flink \u8fd0\u884c\u73af\u5883",id:"\u914d\u7f6e-flink-\u8fd0\u884c\u73af\u5883",level:2},{value:"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6",id:"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6",level:2},{value:"\u542f\u52a8 InLong Sort \u4efb\u52a1",id:"\u542f\u52a8-inlong-sort-\u4efb\u52a1",level:2},{value:"MySQL to PostgreSQL",id:"mysql-to-postgresql",level:3}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u914d\u7f6e-flink-\u8fd0\u884c\u73af\u5883"},"\u914d\u7f6e Flink \u8fd0\u884c\u73af\u5883"),(0,o.kt)("p",null,"InLong Sort \u662f\u57fa\u4e8e Flink \u7684\u4e00\u4e2a\u5e94\u7528\uff0c\u9700\u8981\u51c6\u5907\u597d ",(0,o.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/overview/"},"Apache Flink \u73af\u5883"),"\u3002"),(0,o.kt)("p",null,"\u5f53\u524d InLong Sort \u4f9d\u8d56\u7684\u662f Apache Flink 1.13.5 \u7248\u672c\uff0c\u56e0\u6b64\u5728\u4e0b\u8f7d\u90e8\u7f72\u5305\u65f6\uff0c\u8bf7\u9009\u62e9 ",(0,o.kt)("inlineCode",{parentName:"p"},"flink-1.13.5-bin-scala_2.11.tgz")),(0,o.kt)("h2",{id:"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6"},"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"InLong Sort \u8fd0\u884c\u6587\u4ef6\uff0c",(0,o.kt)("a",{parentName:"li",href:"https://inlong.apache.org/zh-CN/download/"},"\u4e0b\u8f7d")," ",(0,o.kt)("inlineCode",{parentName:"li"},"apache-inlong-[version]-bin.tar.gz")),(0,o.kt)("li",{parentName:"ul"},"\u6570\u636e\u8282\u70b9 Connectors\uff0c",(0,o.kt)("a",{parentName:"li",href:"https://inlong.apache.org/zh-CN/download/"},"\u4e0b\u8f7d")," ",(0,o.kt)("inlineCode",{parentName:"li"},"apache-inlong-[version]-sort-connectors.tar.gz"))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Connectors \u4e0b\u8f7d\u540e\u53ef\u4ee5\u5c06\u9700\u8981\u7684 jars \u653e\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"FLINK_HOME/lib/"),"\u4e0b\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"mysql-cdc-inlong")," \u8fde\u63a5\u5668\uff0c\u8bf7\u5c06 ",(0,o.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.21/mysql-connector-java-8.0.21.jar"},"mysql-connector-java:8.0.21.jar"),"  \u5305\u653e\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"FLINK_HOME/lib/"),"\u4e0b\u3002")),(0,o.kt)("h2",{id:"\u542f\u52a8-inlong-sort-\u4efb\u52a1"},"\u542f\u52a8 InLong Sort \u4efb\u52a1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./bin/flink run -c org.apache.inlong.sort.Entrance apache-inlong-[version]-bin/inlong-sort/sort-dist-[version].jar \\\n--sql.script.file [souce-to-sink].sql\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"--sql.script.file")," \u9700\u8981\u6307\u5b9a\u4e00\u4e2a SQL \u811a\u672c\u6587\u4ef6\uff0c\u5305\u542b\u591a\u4e2a Flink SQL \u8bed\u53e5\uff0c\u53ef\u4ee5\u7528\u5206\u53f7\u5206\u9694\u3002\u652f\u6301",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE TABLE"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"CRETAE VIEW"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"INSERT INTO")," \u7b49\u3002")),(0,o.kt)("h3",{id:"mysql-to-postgresql"},"MySQL to PostgreSQL"),(0,o.kt)("p",null,"\u5982\u679c\u6211\u4eec\u60f3\u4ece MySQL \u8bfb\u53d6\u6570\u636e\u5e76\u5199\u5165 PostgreSQL\uff0c\u6211\u4eec\u53ef\u4ee5\u7f16\u5199\u4ee5\u4e0b SQL \u811a\u672c\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u51c6\u5907 mysql-to-postgresql.sql")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"}," CREATE TABLE `table_1`(\n    `age` INT,\n    `name` STRING)\n    WITH (\n    'connector' = 'mysql-cdc-inlong',\n    'hostname' = 'localhost',\n    'username' = 'root',\n    'password' = 'inlong',\n    'database-name' = 'test',\n    'scan.incremental.snapshot.enabled' = 'false',\n    'server-time-zone' = 'GMT+8',\n    'table-name' = 'user'\n);\nCREATE TABLE `table_2`(\n    PRIMARY KEY (`name`) NOT ENFORCED,\n    `name` STRING,\n    `age` INT)\n    WITH (\n    'connector' = 'jdbc',\n    'url' = 'jdbc:postgresql://localhost:5432/postgres',\n    'username' = 'postgres',\n    'password' = 'inlong',\n    'table-name' = 'public.user',\n    'port' = '3306'\n);\nINSERT INTO `table_2` \n    SELECT \n    `name` AS `name`,\n    `age` AS `age`\n    FROM `table_1`;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u4efb\u52a1")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./bin/flink run -c org.apache.inlong.sort.Entrance apache-inlong-[version]-bin/inlong-sort/sort-dist-[version].jar \\\n--sql.script.file mysql-to-postgresql.sql\n")),(0,o.kt)("p",null,"Other complete usage example, you can refer to ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/next/modules/sort/example"},"Example")))}m.isMDXComponent=!0}}]);