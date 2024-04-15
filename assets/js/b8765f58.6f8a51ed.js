"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[90731],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=d(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(g,i(i({ref:e},c),{},{components:n})):a.createElement(g,i({ref:e},c))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53946:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={title:"Basic Concept",sidebar_position:1},i=void 0,l={unversionedId:"design_and_concept/basic_concept",id:"version-1.10.0/design_and_concept/basic_concept",title:"Basic Concept",description:"| Name                 | Description                                                                                                                                                   | Other                                                                                     |",source:"@site/versioned_docs/version-1.10.0/design_and_concept/basic_concept.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/basic_concept",permalink:"/docs/1.10.0/design_and_concept/basic_concept",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.10.0/design_and_concept/basic_concept.md",tags:[],version:"1.10.0",sidebarPosition:1,frontMatter:{title:"Basic Concept",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/1.10.0/introduction"},next:{title:"Format",permalink:"/docs/1.10.0/design_and_concept/the_format_in_inlong"}},s={},d=[],c={toc:d},p="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Other"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Standard"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard Architecture, contains all InLong components such as InLong Agent, Manager, MQ, Sort, Dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},"Support ",(0,r.kt)("inlineCode",{parentName:"td"},"Data Ingestion"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Data Synchronization")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"Data Subscription")," at the same time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight Architecture, contains only one component of InLong Sort, which also can be used with Manager, Dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},"The lightweight architecture is simple and flexible, only support ",(0,r.kt)("inlineCode",{parentName:"td"},"Data Synchronization"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Ingestion"),(0,r.kt)("td",{parentName:"tr",align:null},"Data ingestion is the process of moving data from a source into a landing area or an object store where it can be used for ad hoc queries and analytics"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Synchronization"),(0,r.kt)("td",{parentName:"tr",align:null},"Data synchronization is the process of establishing consistency between source and target data stores, and the continuous harmonization of the data over time"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Subscription"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Subscription provides subscribers bulk data feeds of the data they are entitled to access"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Group"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Streams Group, it contains multiple data streams, and one Group represents one data business unit."),(0,r.kt)("td",{parentName:"tr",align:null},"Group has attributes such as ID and Name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stream"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Stream, a stream has a specific data source, data format and data sink."),(0,r.kt)("td",{parentName:"tr",align:null},"Stream has attributes such as ID, Name, and data fields.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Node, including ",(0,r.kt)("inlineCode",{parentName:"td"},"Extract Node")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"Load Node"),",  stands for the data source and sink types separately."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InLongMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"InLong data format, if you consume message directly from the message queue, you need to perform ",(0,r.kt)("inlineCode",{parentName:"td"},"InLongMsg")," parsing first."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cluster"),(0,r.kt)("td",{parentName:"tr",align:null},"Each component can form a single cluster."),(0,r.kt)("td",{parentName:"tr",align:null},"Contains cluster name, label, necessary information for each component, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tag"),(0,r.kt)("td",{parentName:"tr",align:null},"Clusters of different components can use the same tag to represent a set of data stream execution units."),(0,r.kt)("td",{parentName:"tr",align:null},"Currently tag are only available for clusters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Agent"),(0,r.kt)("td",{parentName:"tr",align:null},"The standard architecture uses Agent for data collection, and Agent represents different types of collection capabilities."),(0,r.kt)("td",{parentName:"tr",align:null},"It contains File Agent, SQL Agent, Binlog Agent, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DataProxy"),(0,r.kt)("td",{parentName:"tr",align:null},"Forward received data to different message queues."),(0,r.kt)("td",{parentName:"tr",align:null},"Supports data transmission blocking, placing retransmission.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sort"),(0,r.kt)("td",{parentName:"tr",align:null},"Data stream sorting."),(0,r.kt)("td",{parentName:"tr",align:null},"Sort-flink based on Flink, sort-standalone for local sorting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TubeMQ"),(0,r.kt)("td",{parentName:"tr",align:null},"InLong's self-developed message queuing service"),(0,r.kt)("td",{parentName:"tr",align:null},"It can also be called Tube, with low-cost, high-performance features.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/"},"Apache Pulsar"),", a high-performance, high-consistency message queue service"),(0,r.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);