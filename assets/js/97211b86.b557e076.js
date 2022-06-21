"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8888],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91412:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Deployment"},u=void 0,s={unversionedId:"modules/tubemq/tubemq-manager/quick_start",id:"version-1.1.0/modules/tubemq/tubemq-manager/quick_start",title:"Deployment",description:"All deploying files at inlong-tubemq-manager directory.",source:"@site/versioned_docs/version-1.1.0/modules/tubemq/tubemq-manager/quick_start.md",sourceDirName:"modules/tubemq/tubemq-manager",slug:"/modules/tubemq/tubemq-manager/quick_start",permalink:"/docs/modules/tubemq/tubemq-manager/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/modules/tubemq/tubemq-manager/quick_start.md",tags:[],version:"1.1.0",frontMatter:{title:"Deployment"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/modules/tubemq/tubemq-manager/overview"},next:{title:"client partition assign",permalink:"/docs/modules/tubemq/client_partition_assign_introduction"}},c={},p=[{value:"Environment Preparation",id:"environment-preparation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Start",id:"start",level:2},{value:"Register TubeMQ cluster",id:"register-tubemq-cluster",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All deploying files at ",(0,i.kt)("inlineCode",{parentName:"p"},"inlong-tubemq-manager")," directory."),(0,i.kt)("h2",{id:"environment-preparation"},"Environment Preparation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install and start MySQL 5.7+"),(0,i.kt)("li",{parentName:"ul"},"Load ",(0,i.kt)("inlineCode",{parentName:"li"},"sql/apache_tube_manager.sql")," through the command to complete the initialization of the table structure and basic data:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Create database and table with username and password:\nmysql -uDB_USER -pDB_PASSWD < sql/apache_tube_manager.sql\n")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create ",(0,i.kt)("inlineCode",{parentName:"li"},"tubemanager")," and account in MySQL."),(0,i.kt)("li",{parentName:"ul"},"Add mysql information in conf/application.properties:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"# mysql configuration for manager\nspring.datasource.url=jdbc:mysql://mysql_ip:mysql_port/tubemanager\nspring.datasource.username=mysql_username\nspring.datasource.password=mysql_password\n")),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the backend database is MySQL, please download ",(0,i.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar"},"mysql-connector-java-8.0.27.jar")," and put it into ",(0,i.kt)("inlineCode",{parentName:"p"},"lib/")," directory.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the backend database is PostgreSQL, there's no need for additional dependencies."))),(0,i.kt)("h2",{id:"start"},"Start"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ bin/start-manager.sh \n")),(0,i.kt)("h2",{id:"register-tubemq-cluster"},"Register TubeMQ cluster"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"vim bin/init-tube-cluster.sh\n")),(0,i.kt)("p",null,"replace the parameters below"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"TUBE_MANAGER_IP=  \nTUBE_MANAGER_PORT=   \nTUBE_MASTER_IP=   \nTUBE_MASTER_PORT=\nTUBE_MASTER_WEB_PORT=\nTUBE_MASTER_TOKEN=\n")),(0,i.kt)("p",null,"then run\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sh bin/init-tube-cluster.sh\n")),(0,i.kt)("p",null,"this will create a cluster with id = 1, note that this operation should not be executed repeatedly."))}d.isMDXComponent=!0}}]);