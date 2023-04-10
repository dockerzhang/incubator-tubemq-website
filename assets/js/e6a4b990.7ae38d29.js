"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[87816],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=l,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(k,a(a({ref:t},p),{},{components:r})):n.createElement(k,a({ref:t},p))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:l,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28101:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),l=(r(67294),r(3905));const o={title:"Docker",sidebar_position:2},a=void 0,s={unversionedId:"deployment/docker",id:"version-1.2.0/deployment/docker",title:"Docker",description:"Deploy all InLong module by Docker Compose, it's only available for development.",source:"@site/versioned_docs/version-1.2.0/deployment/docker.md",sourceDirName:"deployment",slug:"/deployment/docker",permalink:"/docs/1.2.0/deployment/docker",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.2.0/deployment/docker.md",tags:[],version:"1.2.0",sidebarPosition:2,frontMatter:{title:"Docker",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Standalone",permalink:"/docs/1.2.0/deployment/standalone"},next:{title:"Kubernetes",permalink:"/docs/1.2.0/deployment/k8s"}},i={},c=[{value:"Environment Requirements",id:"environment-requirements",level:2},{value:"Build",id:"build",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Register Cluster",id:"register-cluster",level:2},{value:"DataProxy Cluster",id:"dataproxy-cluster",level:3},{value:"Pulsar Cluster",id:"pulsar-cluster",level:3},{value:"Usage",id:"usage",level:2},{value:"Destroy",id:"destroy",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,l.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Deploy all InLong module by Docker Compose, it's only available for development. "),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Notice: The default message queue is Apache Pulsar for Docker.")),(0,l.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+"),(0,l.kt)("li",{parentName:"ul"},"Docker Compose 1.29.2+")),(0,l.kt)("h2",{id:"build"},"Build"),(0,l.kt)("p",null,"You can refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.2.0/quick_start/how_to_build"},"How to Build"),"."),(0,l.kt)("h2",{id:"deploy"},"Deploy"),(0,l.kt)("p",null,"Start all components."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd docker/docker-compose\ndocker-compose up -d\n")),(0,l.kt)("h2",{id:"register-cluster"},"Register Cluster"),(0,l.kt)("h3",{id:"dataproxy-cluster"},"DataProxy Cluster"),(0,l.kt)("p",null,"Open the Inlong-Dashboard page (the default is ",(0,l.kt)("a",{parentName:"p",href:"http://127.0.0.1"},"http://127.0.0.1"),"), and select to add a DataProxy cluster on the ","[Clusters]"," tab:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:r(9954).Z,width:"840",height:"373"})),(0,l.kt)("p",null,"Click the ","[Create]"," button, and fill in the cluster name, cluster label, and responsible person in the pop-up box to save."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: ","[Cluster Tag]"," is a logical concept. Tags with the same name will be regarded as the same cluster."),(0,l.kt)("p",{parentName:"blockquote"},"For example, the DataProxy cluster and the Pulsar cluster with the same cluster tag belong to the same cluster.")),(0,l.kt)("p",null,"Then add nodes to this DataProxy cluster - a DataProxy cluster can support adding multiple nodes:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:r(7411).Z,width:"840",height:"406"})),(0,l.kt)("p",null,"Just fill in the IP and port of the DataProxy node."),(0,l.kt)("p",null,(0,l.kt)("img",{src:r(62319).Z,width:"1570",height:"381"})),(0,l.kt)("h3",{id:"pulsar-cluster"},"Pulsar Cluster"),(0,l.kt)("p",null,"Similar to the above entry for adding a DataProxy cluster, the filling example is as follows:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:r(76183).Z,width:"528",height:"580"})),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"After all containers run successfully, you can access ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost")," with default account:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"User: admin\nPassword: inlong\n")),(0,l.kt)("h2",{id:"destroy"},"Destroy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose down\n")))}d.isMDXComponent=!0},9954:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dp_cluster-9ca83abff697fcd5f31cea7b2a77d893.png"},7411:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dp_cluster_node-600a1dbd2e1cd2b214b46e2630378b31.png"},62319:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dp_cluster_node_save-ec7999be73bf56a10224a31f65a61d64.png"},76183:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pulsar_cluster_save-c98ec05acb56df935d7f508f97ec1caa.png"}}]);