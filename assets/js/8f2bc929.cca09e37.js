"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[15961],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},42294:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={title:"Deployment",sidebar_position:2},l=void 0,i={unversionedId:"modules/sort/quick_start",id:"version-1.11.0/modules/sort/quick_start",title:"Deployment",description:"Set up Flink Environment",source:"@site/versioned_docs/version-1.11.0/modules/sort/quick_start.md",sourceDirName:"modules/sort",slug:"/modules/sort/quick_start",permalink:"/docs/modules/sort/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.11.0/modules/sort/quick_start.md",tags:[],version:"1.11.0",sidebarPosition:2,frontMatter:{title:"Deployment",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/modules/sort/overview"},next:{title:"Example",permalink:"/docs/modules/sort/example"}},s={},p=[{value:"Set up Flink Environment",id:"set-up-flink-environment",level:2},{value:"Prepare installation files",id:"prepare-installation-files",level:2},{value:"Start an InLong Sort Job",id:"start-an-inlong-sort-job",level:2},{value:"MySQL to PostgreSQL",id:"mysql-to-postgresql",level:3}],c={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"set-up-flink-environment"},"Set up Flink Environment"),(0,o.kt)("p",null,"InLong Sort is based on Apache Flink, you need to set up an ",(0,o.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/overview/"},"Apache Flink 1.13.x")," or ",(0,o.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/try-flink/local_installation/"},"1.15.x"),"."),(0,o.kt)("h2",{id:"prepare-installation-files"},"Prepare installation files"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"InLong Sort file, ",(0,o.kt)("a",{parentName:"li",href:"https://inlong.apache.org/download/"},"Download")," ",(0,o.kt)("inlineCode",{parentName:"li"},"apache-inlong-[version]-bin.tar.gz")),(0,o.kt)("li",{parentName:"ul"},"Data Nodes Connectors, ",(0,o.kt)("a",{parentName:"li",href:"https://inlong.apache.org/download/"},"Download")," ",(0,o.kt)("inlineCode",{parentName:"li"},"apache-inlong-[version]-sort-connectors.tar.gz"))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please put required Connectors jars into under ",(0,o.kt)("inlineCode",{parentName:"p"},"FLINK_HOME/lib/")," after download.",(0,o.kt)("br",{parentName:"p"}),"\n","Put ",(0,o.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.21/mysql-connector-java-8.0.21.jar"},"mysql-connector-java:8.0.21.jar")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"FLINK_HOME/lib/")," when you use ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql-cdc-inlong")," connector.",(0,o.kt)("br",{parentName:"p"}),"\n","If you change the Apache Flink version, you also need to change the ",(0,o.kt)("inlineCode",{parentName:"p"},"connectors")," of the corresponding version.")),(0,o.kt)("h2",{id:"start-an-inlong-sort-job"},"Start an InLong Sort Job"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./bin/flink run -c org.apache.inlong.sort.Entrance apache-inlong-[version]-bin/inlong-sort/sort-dist-[version].jar \\\n--sql.script.file [souce-to-sink].sql\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"--sql.script.file")," add a SQL script file includes multi Flink SQL statements that can be separated by semicolon, support ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE TABLE"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CRETAE VIEW"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"INSERT INTO")," etc.")),(0,o.kt)("h3",{id:"mysql-to-postgresql"},"MySQL to PostgreSQL"),(0,o.kt)("p",null,"We can write following SQL script if we want to read data from MySQL and write into PostgreSQL."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Prepare mysql-to-postgresql.sql")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"}," CREATE TABLE `table_1`(\n    `age` INT,\n    `name` STRING)\n    WITH (\n    'connector' = 'mysql-cdc-inlong',\n    'hostname' = 'localhost',\n    'port' = '3306',\n    'username' = 'root',\n    'password' = 'inlong',\n    'database-name' = 'test',\n    'scan.incremental.snapshot.enabled' = 'false',\n    'server-time-zone' = 'GMT+8',\n    'table-name' = 'user'\n);\nCREATE TABLE `table_2`(\n    PRIMARY KEY (`name`) NOT ENFORCED,\n    `name` STRING,\n    `age` INT)\n    WITH (\n    'connector' = 'jdbc',\n    'url' = 'jdbc:postgresql://localhost:5432/postgres',\n    'username' = 'postgres',\n    'password' = 'inlong',\n    'table-name' = 'public.user'\n);\nINSERT INTO `table_2` \n    SELECT \n    `name` AS `name`,\n    `age` AS `age`\n    FROM `table_1`;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Summit job")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./bin/flink run -c org.apache.inlong.sort.Entrance apache-inlong-[version]-bin/inlong-sort/sort-dist-[version].jar \\\n--sql.script.file mysql-to-postgresql.sql\n")),(0,o.kt)("p",null,"\u5176\u5b83\u5b8c\u6574\u4f7f\u7528\u793a\u4f8b\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/docs/modules/sort/example"},"Example")))}u.isMDXComponent=!0}}]);