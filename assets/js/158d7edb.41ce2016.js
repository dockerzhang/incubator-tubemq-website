"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9059],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),u=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),p=u(a),g=r,m=p["".concat(s,".").concat(g)]||p[g]||c[g]||l;return a?n.createElement(m,i(i({ref:e},d),{},{components:a})):n.createElement(m,i({ref:e},d))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[p]="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},85162:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:a,className:i}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},e)}},74866:(t,e,a)=>{a.d(e,{Z:()=>y});var n=a(87462),r=a(67294),l=a(86010),i=a(12466),o=a(76775),s=a(91980),u=a(67392),d=a(50012);function p(t){return function(t){return r.Children.map(t,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(t).map((t=>{let{props:{value:e,label:a,attributes:n,default:r}}=t;return{value:e,label:a,attributes:n,default:r}}))}function c(t){const{values:e,children:a}=t;return(0,r.useMemo)((()=>{const t=e??p(a);return function(t){const e=(0,u.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function g(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function m(t){let{queryString:e=!1,groupId:a}=t;const n=(0,o.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace({...n.location,search:e.toString()})}),[l,n])]}function k(t){const{defaultValue:e,queryString:a=!1,groupId:n}=t,l=c(t),[i,o]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((t=>t.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[s,u]=m({queryString:a,groupId:n}),[p,k]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,l]=(0,d.Nk)(a);return[n,(0,r.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:n}),h=(()=>{const t=s??p;return g({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((t=>{if(!g({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);o(t),u(t),k(t)}),[u,k,l]),tabValues:l}}var h=a(72389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(t){let{className:e,block:a,selectedValue:o,selectValue:s,tabValues:u}=t;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),c=t=>{const e=t.currentTarget,a=d.indexOf(e),n=u[a].value;n!==o&&(p(e),s(n))},g=t=>{let e=null;switch(t.key){case"Enter":c(t);break;case"ArrowRight":{const a=d.indexOf(t.currentTarget)+1;e=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(t.currentTarget)-1;e=d[a]??d[d.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},e)},u.map((t=>{let{value:e,label:a,attributes:i}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===e?0:-1,"aria-selected":o===e,key:e,ref:t=>d.push(t),onKeyDown:g,onClick:c},i,{className:(0,l.Z)("tabs__item",N.tabItem,i?.className,{"tabs__item--active":o===e})}),a??e)})))}function f(t){let{lazy:e,children:a,selectedValue:n}=t;if(a=Array.isArray(a)?a:[a],e){const t=a.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function v(t){const e=k(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",N.tabList)},r.createElement(b,(0,n.Z)({},t,e)),r.createElement(f,(0,n.Z)({},t,e)))}function y(t){const e=(0,h.Z)();return r.createElement(v,(0,n.Z)({key:String(e)},t))}},3634:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(74866),i=a(85162);const o={title:"Introduction",sidebar_position:1},s=void 0,u={unversionedId:"introduction",id:"version-1.5.0/introduction",title:"Introduction",description:"InLong (\u5e94\u9f99) is a divine beast in Chinese mythology who guides the river into the sea,",source:"@site/versioned_docs/version-1.5.0/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/1.5.0/introduction",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.5.0/introduction.md",tags:[],version:"1.5.0",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Basic Concept",permalink:"/docs/1.5.0/design_and_concept/basic_concept"}},d={},p=[{value:"About InLong",id:"about-inlong",level:2},{value:"Features",id:"features",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Modules",id:"modules",level:2},{value:"Supported Data Nodes (Updating)",id:"supported-data-nodes-updating",level:2}],c={toc:p},g="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(g,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"InLong (\u5e94\u9f99) is a divine beast in Chinese mythology who guides the river into the sea,\nand it is regarded as a metaphor of the InLong system for reporting data streams.")),(0,r.kt)("h2",{id:"about-inlong"},"About InLong"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://inlong.apache.org"},"Apache InLong")," is a one-stop integration framework for massive data ,it provides automatic, safe, reliable, and high-performance data transmission capabilities to\nfacilitate the construction of streaming-based data analysis, modeling, and applications. The Apache InLong project was originally called TubeMQ, focusing on high-performance,\nlow-cost message queuing services. To further release the surrounding ecological capabilities of TubeMQ, the community upgraded the project to InLong, focusing on creating a one-stop integration framework for massive data.\nApache InLong relies on 10 trillion-level data ingestion and processing capabilities to integrate the entire process of data collection, aggregation, storage, and sorting data processing. It is simple, flexible, stable, and reliable.\nThe project was initially donated to the Apache incubator by the Tencent Big Data team in November 2019 and officially graduated as an Apache top-level project in June 2022. Currently, InLong is widely used in various industries such as advertising,\npayment, social networking, games, artificial intelligence, etc., to provide efficient and convenient customer services in multiple fields."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ease of Use"),(0,r.kt)("p",{parentName:"li"},"InLong is a SaaS-based service platform. Users can easily and quickly report, transfer, and distribute data by publishing and subscribing to data based on topics.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Stability & Reliability"),(0,r.kt)("p",{parentName:"li"},"InLong is derived from the actual online production environment. It delivers high-performance processing capabilities for 100 trillion-level data streams and highly reliable services for 100 billion-level data streams.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Comprehensive Features"),(0,r.kt)("p",{parentName:"li"},"InLong supports various types of data access methods and can be integrated with different types of Message Queue (MQ). It also provides real-time data extract, transform, and load (ETL) and sorting capabilities based on rules. InLong also allows users to plug features to extend system capabilities.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Service Integration"),(0,r.kt)("p",{parentName:"li"},"InLong provides unified system monitoring and alert services. It provides fine-grained metrics to facilitate data visualization. Users can view the running status of queues and topic-based data statistics in a unified data metric platform. Users can also configure the alert service based on their business requirements so that users can be alerted when errors occur.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Scalability"),(0,r.kt)("p",{parentName:"li"},"InLong adopts a pluggable architecture that allows you to plug modules into the system based on specific protocols. Users can replace components and add features based on their business requirements."))),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)(l.Z,{defaultValue:"standard",values:[{label:"Standard",value:"standard"},{label:"Lightweight",value:"lightweight"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"standard",mdxType:"TabItem"}," Standard Architecture: contains all InLong components such as InLong Agent, Manager, MQ, Sort, Dashboard, which is suitable for massive data and large-scale production environments.",(0,r.kt)("img",{src:"/img/inlong-structure-en.png",align:"center",alt:"Apache InLong"})),(0,r.kt)(i.Z,{value:"lightweight",mdxType:"TabItem"}," Lightweight Architecture: contains only one component of InLong Sort, which also can be used with Manager, Dashboard, and it is simple and flexible, suitable for small-scale data.",(0,r.kt)("img",{src:"/img/inlong-structure-light.png",align:"center",style:{objectFit:"cover",height:"460px",width:"860px"},alt:"Apache InLong"}))),(0,r.kt)("h2",{id:"modules"},"Modules"),(0,r.kt)("p",null,"Apache InLong serves the entire life cycle from data collection to landing,  and provides different processing modules according to different stages of data,  including the next modules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inlong-agent"),",  data collection services, including file collection, DB collection, etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inlong-dataproxy"),",  a Proxy component based on Flume-ng,  supports data transmission blocking,  placing retransmission, and has the ability to forward received data to different MQ (message queues)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inlong-tubemq"),",  Tencent's self-developed message queuing service,  focuses on high-performance storage and transmission of massive data in big data scenarios and has a relatively good core advantage in mass practice and low cost."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inlong-sort"),",  after consuming data from different MQ services,  perform ETL processing,  and then aggregate and write the data into Apache Hive, ClickHouse,  Hbase,  IceBerg,  Hudi,  etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inlong-manager"),", provides complete data service management and control capabilities,  including metadata,  OpenAPI,  task flow,  authority,  etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inlong-dashboard"),", a front-end page for managing data access,  simplifying the use of the entire InLong control platform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inlong-audit"),", performs real-time audit and reconciliation on the incoming and outgoing traffic of the Agent, DataProxy, and Sort modules of the InLong system.")),(0,r.kt)("h2",{id:"supported-data-nodes-updating"},"Supported Data Nodes (Updating)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Architecture"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Extract Node"),(0,r.kt)("td",{parentName:"tr",align:null},"Auto Push"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"File"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Kafka"),(0,r.kt)("td",{parentName:"tr",align:null},"2.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,r.kt)("td",{parentName:"tr",align:null},"5.6, 5.7, 8.0.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"MongoDB"),(0,r.kt)("td",{parentName:"tr",align:null},">= 3.6"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"MQTT"),(0,r.kt)("td",{parentName:"tr",align:null},">= 3.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,r.kt)("td",{parentName:"tr",align:null},"11,12,19"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,r.kt)("td",{parentName:"tr",align:null},"9.6, 10, 11, 12"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar"),(0,r.kt)("td",{parentName:"tr",align:null},"2.8.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Redis"),(0,r.kt)("td",{parentName:"tr",align:null},"2.6.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"SQLServer"),(0,r.kt)("td",{parentName:"tr",align:null},"2012, 2014, 2016, 2017, 2019"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Load Node"),(0,r.kt)("td",{parentName:"tr",align:null},"Auto Consumption"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Hive"),(0,r.kt)("td",{parentName:"tr",align:null},"1.x, 2.x, 3.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Iceberg"),(0,r.kt)("td",{parentName:"tr",align:null},"0.12.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ClickHouse"),(0,r.kt)("td",{parentName:"tr",align:null},"20.7+"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Kafka"),(0,r.kt)("td",{parentName:"tr",align:null},"2.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"HBase"),(0,r.kt)("td",{parentName:"tr",align:null},"2.2.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,r.kt)("td",{parentName:"tr",align:null},"9.6, 10, 11, 12"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,r.kt)("td",{parentName:"tr",align:null},"11, 12, 19"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,r.kt)("td",{parentName:"tr",align:null},"5.6, 5.7, 8.0.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"TDSQL-PostgreSQL"),(0,r.kt)("td",{parentName:"tr",align:null},"10.17"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Greenplum"),(0,r.kt)("td",{parentName:"tr",align:null},"4.x, 5.x, 6.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch"),(0,r.kt)("td",{parentName:"tr",align:null},"6.x, 7.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"SQLServer"),(0,r.kt)("td",{parentName:"tr",align:null},"2012, 2014, 2016, 2017, 2019"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Doris"),(0,r.kt)("td",{parentName:"tr",align:null},">= 0.13"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"StarRocks"),(0,r.kt)("td",{parentName:"tr",align:null},">= 2.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"HDFS"),(0,r.kt)("td",{parentName:"tr",align:null},"2.x, 3.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")))))}m.isMDXComponent=!0}}]);