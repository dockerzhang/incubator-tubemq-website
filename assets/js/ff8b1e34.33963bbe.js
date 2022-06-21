"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9985],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=l,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5713:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(87462),l=r(63366),o=(r(67294),r(3905)),a=["components"],s={title:"Docker",sidebar_position:2},i=void 0,u={unversionedId:"deployment/docker",id:"deployment/docker",title:"Docker",description:"Deploy all InLong module by Docker Compose, it's only available for development.",source:"@site/docs/deployment/docker.md",sourceDirName:"deployment",slug:"/deployment/docker",permalink:"/docs/next/deployment/docker",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/deployment/docker.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Docker",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Standalone",permalink:"/docs/next/deployment/standalone"},next:{title:"Kubernetes",permalink:"/docs/next/deployment/k8s"}},c={},p=[{value:"Build",id:"build",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Register Cluster",id:"register-cluster",level:2},{value:"DataProxy Cluster",id:"dataproxy-cluster",level:3},{value:"Pulsar Cluster",id:"pulsar-cluster",level:3},{value:"Usage",id:"usage",level:2},{value:"Destroy",id:"destroy",level:2}],d={toc:p};function m(e){var t=e.components,s=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Deploy all InLong module by Docker Compose, it's only available for development. "),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Notice: The default message queue is Apache Pulsar for Docker.")),(0,o.kt)("p",null,"Requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+"),(0,o.kt)("li",{parentName:"ul"},"Docker Compose 1.29.2+")),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("p",null,"You can refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/quick_start/how_to_build"},"How to Build"),"."),(0,o.kt)("h2",{id:"deploy"},"Deploy"),(0,o.kt)("p",null,"Start all components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd docker/docker-compose\ndocker-compose up -d\n")),(0,o.kt)("h2",{id:"register-cluster"},"Register Cluster"),(0,o.kt)("h3",{id:"dataproxy-cluster"},"DataProxy Cluster"),(0,o.kt)("p",null,"Open the Inlong-Dashboard page (the default is ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1"},"http://127.0.0.1"),"), and select to add a DataProxy cluster on the ","[Clusters]"," tab:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(92717).Z,width:"840",height:"373"})),(0,o.kt)("p",null,"Click the ","[Create]"," button, and fill in the cluster name, cluster label, and responsible person in the pop-up box to save."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: ","[Cluster Tag]"," is a logical concept. Tags with the same name will be regarded as the same cluster."),(0,o.kt)("p",{parentName:"blockquote"},"For example, the DataProxy cluster and the Pulsar cluster with the same cluster tag belong to the same cluster.")),(0,o.kt)("p",null,"Then add nodes to this DataProxy cluster - a DataProxy cluster can support adding multiple nodes:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(22275).Z,width:"840",height:"406"})),(0,o.kt)("p",null,"Just fill in the IP and port of the DataProxy node."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(3746).Z,width:"840",height:"429"})),(0,o.kt)("h3",{id:"pulsar-cluster"},"Pulsar Cluster"),(0,o.kt)("p",null,"Similar to the above entry for adding a DataProxy cluster, the filling example is as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(99369).Z,width:"517",height:"564"})),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"After all containers run successfully, you can access ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost")," with default account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"User: admin\nPassword: inlong\n")),(0,o.kt)("h2",{id:"destroy"},"Destroy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose down\n")))}m.isMDXComponent=!0},92717:function(e,t,r){t.Z=r.p+"assets/images/dp_cluster-9ca83abff697fcd5f31cea7b2a77d893.png"},22275:function(e,t,r){t.Z=r.p+"assets/images/dp_cluster_node-600a1dbd2e1cd2b214b46e2630378b31.png"},3746:function(e,t,r){t.Z=r.p+"assets/images/dp_cluster_node_save-2f88e25a2d07a7392a4e16a049ce7eb6.png"},99369:function(e,t,r){t.Z=r.p+"assets/images/pulsar_cluster_save-d4ad1df3102d20dde714cb9a703a498b.png"}}]);