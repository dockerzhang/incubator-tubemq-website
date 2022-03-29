"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3331],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73761:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"Overview",sidebar_position:1},c=void 0,l={unversionedId:"modules/tubemq/overview",id:"version-1.0.0/modules/tubemq/overview",title:"Overview",description:"1 TubeMQ Architecture:",source:"@site/versioned_docs/version-1.0.0/modules/tubemq/overview.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/overview",permalink:"/docs/modules/tubemq/overview",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-1.0.0/modules/tubemq/overview.md",tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/modules/dataproxy/quick_start"},next:{title:"Quick Start",permalink:"/docs/modules/tubemq/quick_start"}},u={},p=[{value:"1 TubeMQ Architecture:",id:"1-tubemq-architecture",level:2},{value:"2 Broker File Storage Scheme Improvement:",id:"2-broker-file-storage-scheme-improvement",level:2}],m={toc:p};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-tubemq-architecture"},"1 TubeMQ Architecture:"),(0,a.kt)("p",null,"After years of evolution, the TubeMQ cluster is divided into the following 5 parts:\n",(0,a.kt)("img",{loading:"lazy",src:n(63483).Z,width:"1031",height:"507"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Portal\uff1a")," The Portal part responsible for external interaction and maintenance operations, including API and Web.\nThe API connects to the management system outside the cluster. The Web is a page encapsulation of daily operation\nand maintenance functions based on the API;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Master\uff1a")," It is responsible for the Control part of the cluster. This part is composed of one or more Master nodes.\nMaster HA performs heartbeat keep-alive and real-time hot standby switching between master nodes (This is the reason\nwhy everyone needs to fill in the addresses of all Master nodes corresponding to the cluster when using TubeMQ Lib).\nThe main master is responsible for managing the status of the entire cluster, resource scheduling, permission\nchecking, metadata query, etc.;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Broker\uff1a")," The Store part responsible for data storage. This part is composed of independent Broker nodes.\nEach Broker node manages the Topic set in this node, including the addition, deletion, modification, and inquiring\nabout Topics. It is also responsible for message storage, consumption, aging, partition expansion, data consumption\noffset records, etc. On the topic, and the external capabilities of the cluster, including the number of topics,\nthroughput, and capacity, are completed by horizontally expanding the broker node;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Client\uff1a")," The Client part responsible for data production and consumption. We provide this part in the form of Lib.\nThe most commonly used is the consumer. Compared with the previous, the consumer now supports Push and Pull data pull\nmodes, data consumption behavior support both order and filtered consumption. For the Pull consumption mode, the\nservice supports resetting the precise offset through the client to support the business extract-once consumption.\nAt the same time, the consumer has launched a new cross-cluster switch-free Consumer client;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"ZooKeeper\uff1a")," Responsible for the ZooKeeper part of the offset storage. This part of the function has been weakened to only the persistent storage of the offset. Considering the next multi-node copy function, this module is temporarily reserved;"))),(0,a.kt)("h2",{id:"2-broker-file-storage-scheme-improvement"},"2 Broker File Storage Scheme Improvement:"),(0,a.kt)("p",null,"Systems that use disks as data persistence media are faced with various system performance problems caused by disk problems. The TubeMQ system is no exception, the performance improvement is largely to solve the problem of how to read, write and store message data. In this regard TubeMQ has made many improvements: storage instances is as the smallest Topic data management unit; each storage instance includes a file storage block and a memory cache block; each Topic can be assigned multiple storage instances. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"File storage block:")," The disk storage solution of TubeMQ is similar to Kafka, but it is not the same, as shown in the following figure: each file storage block is composed of an index file and a data file; the partiton is a logical partition in the data file; each Topic maintains and manages the file storage block separately, the related mechanisms include the aging cycle, the number of partitions, whether it is readable and writable, etc.\n",(0,a.kt)("img",{loading:"lazy",src:n(26640).Z,width:"1211",height:"700"}))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Memory cache block:")," We added a separate memory cache block on the file storage block, that is, add a block of memory to the original write disk to isolate the slow effect of the hard disk. The data is first flushed to the memory cache block, and then the memory cache block is batched flush the data to the disk file.\n",(0,a.kt)("img",{loading:"lazy",src:n(4105).Z,width:"794",height:"604"}))))}d.isMDXComponent=!0},26640:function(e,t,n){t.Z=n.p+"assets/images/store_file-afacb93118082ca4afc7f0ee3176af70.png"},4105:function(e,t,n){t.Z=n.p+"assets/images/store_mem-05a41b24e2b5e68a769c9236d1e063d4.png"},63483:function(e,t,n){t.Z=n.p+"assets/images/sys_structure-8696e2c7dfebcbe30e47b2d99e185485.png"}}]);