"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[27495],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,u=m["".concat(d,".").concat(k)]||m[k]||c[k]||l;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Kubernetes",sidebar_position:3},i=void 0,o={unversionedId:"deployment/k8s",id:"version-1.5.0/deployment/k8s",title:"Kubernetes",description:"Prerequisites",source:"@site/versioned_docs/version-1.5.0/deployment/k8s.md",sourceDirName:"deployment",slug:"/deployment/k8s",permalink:"/docs/1.5.0/deployment/k8s",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.5.0/deployment/k8s.md",tags:[],version:"1.5.0",sidebarPosition:3,frontMatter:{title:"Kubernetes",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/docs/1.5.0/deployment/docker"},next:{title:"Bare Metal",permalink:"/docs/1.5.0/deployment/bare_metal"}},d={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Install",id:"install",level:3},{value:"Access InLong Dashboard",id:"access-inlong-dashboard",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Uninstall",id:"uninstall",level:3},{value:"Development",id:"development",level:2},{value:"Quick start with kind",id:"quick-start-with-kind",level:3},{value:"Install Helm",id:"install-helm",level:3},{value:"Install the chart",id:"install-the-chart",level:3},{value:"Develop and debug",id:"develop-and-debug",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],s={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes 1.10+"),(0,r.kt)("li",{parentName:"ul"},"Helm 3.0+"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/inlong/tree/master/docker/kubernetes"},"InLong Helm Chart")),(0,r.kt)("li",{parentName:"ul"},"A dynamic provisioner for the PersistentVolumes(",(0,r.kt)("inlineCode",{parentName:"li"},"production environment"),")")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"install"},"Install"),(0,r.kt)("p",null,"If the namespace named ",(0,r.kt)("inlineCode",{parentName:"p"},"inlong")," does not exist, create it first by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace inlong\n")),(0,r.kt)("p",null,"To install the chart with a namespace named ",(0,r.kt)("inlineCode",{parentName:"p"},"inlong"),", try:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm upgrade inlong --install -n inlong ./\n")),(0,r.kt)("h3",{id:"access-inlong-dashboard"},"Access InLong Dashboard"),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"ingress.enabled")," in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/docker/kubernetes/values.yaml"},"values.yaml")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", you just access ",(0,r.kt)("inlineCode",{parentName:"p"},"http://${ingress.host}/dashboard")," in browser."),(0,r.kt)("p",null,"Otherwise, when ",(0,r.kt)("inlineCode",{parentName:"p"},"dashboard.service.type")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterIP"),", you need to execute the port-forward command like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'export DASHBOARD_POD_NAME=$(kubectl get pods -l "app.kubernetes.io/name=inlong-dashboard,app.kubernetes.io/instance=inlong" -o jsonpath="{.items[0].metadata.name}" -n inlong)\nexport DASHBOARD_CONTAINER_PORT=$(kubectl get pod $DASHBOARD_POD_NAME -o jsonpath="{.spec.containers[0].ports[0].containerPort}" -n inlong)\nkubectl port-forward $DASHBOARD_POD_NAME 8181:$DASHBOARD_CONTAINER_PORT -n inlong\n')),(0,r.kt)("p",null,"And then access ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:8181"},"http://127.0.0.1:8181")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tip: If the error of ",(0,r.kt)("inlineCode",{parentName:"p"},"unable to do port forwarding: socat not found")," appears, you need to install ",(0,r.kt)("inlineCode",{parentName:"p"},"socat")," at first.")),(0,r.kt)("p",null,"Or when ",(0,r.kt)("inlineCode",{parentName:"p"},"dashboard.service.type")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"NodePort"),", you need to execute the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'export DASHBOARD_NODE_IP=$(kubectl get nodes -o jsonpath="{.items[0].status.addresses[0].address}" -n inlong)\nexport DASHBOARD_NODE_PORT=$(kubectl get svc inlong-dashboard -o jsonpath="{.spec.ports[0].nodePort}" -n inlong)\n')),(0,r.kt)("p",null,"And then access ",(0,r.kt)("inlineCode",{parentName:"p"},"http://$DASHBOARD_NODE_IP:$DASHBOARD_NODE_PORT")),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"dashboard.service.type")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),", you need to execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'export DASHBOARD_SERVICE_IP=$(kubectl get svc inlong-dashboard --template "{{"{{ range (index .status.loadBalancer.ingress 0) }}{{.}}{{ end }}"}}"  -n inlong)\n')),(0,r.kt)("p",null,"And then access ",(0,r.kt)("inlineCode",{parentName:"p"},"http://$DASHBOARD_SERVICE_IP:30080")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: It may take a few minutes for the ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," IP to be available. You can check the status by running ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get svc inlong-dashboard -n inlong -w"))),(0,r.kt)("p",null,"The default username is ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," and the default password is ",(0,r.kt)("inlineCode",{parentName:"p"},"inlong"),". You can access the InLong Dashboard through them."),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The configuration file is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/docker/kubernetes/values.yaml"},"values.yaml"),", and the following tables lists the configurable parameters of InLong and their default values."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"timezone")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Asia/Shanghai")),(0,r.kt)("td",{parentName:"tr",align:"center"},"World time and date for cities in all time zones")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"images.pullPolicy")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"IfNotPresent")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Image pull policy. One of ",(0,r.kt)("inlineCode",{parentName:"td"},"Always"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Never"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"IfNotPresent"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"images.<component>.repository")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Docker image repository for the component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"images.<component>.tag")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"latest")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Docker image tag for the component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<component>.component")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Component name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<component>.replicas")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Replicas is the desired number of replicas of a given Template")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<component>.podManagementPolicy")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"OrderedReady")),(0,r.kt)("td",{parentName:"tr",align:"center"},"PodManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<component>.annotations")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:"center"},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"annotations")," field can be used to attach arbitrary non-identifying metadata to objects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<component>.tolerations")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Tolerations are applied to pods, and allow (but do not require) the pods to schedule onto nodes with matching taints")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<component>.nodeSelector")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:"center"},"You can add the ",(0,r.kt)("inlineCode",{parentName:"td"},"nodeSelector")," field to your Pod specification and specify the node labels you want the target node to have")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<component>.affinity")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Node affinity is conceptually similar to nodeSelector, allowing you to constrain which nodes your Pod can be scheduled on based on node labels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<component>.terminationGracePeriodSeconds")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"30")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Optional duration in seconds the pod needs to terminate gracefully")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<component>.resources")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Optionally specify how much of each resource a container needs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<component>.port(s)")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The port(s) for each component service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<component>.env")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Environment variables for each component container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("code",null,"\\<component",">",".probe.\\<liveness","|","readiness",">",".enabled")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Turn on and off liveness or readiness probe")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("code",null,"\\<component",">",".probe.\\<liveness","|","readiness",">",".failureThreshold")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Minimum consecutive successes for the probe")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("code",null,"\\<component",">",".probe.\\<liveness","|","readiness",">",".initialDelaySeconds")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Delay before the probe is initiated")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("code",null,"\\<component",">",".probe.\\<liveness","|","readiness",">",".periodSeconds")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"30")),(0,r.kt)("td",{parentName:"tr",align:"center"},"How often to perform the probe")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<component>.volumes.name")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Volume name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<component>.volumes.size")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"10Gi")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Volume size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<component>.service.annotations")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:"center"},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"annotations")," field may need to be set when service.type is ",(0,r.kt)("inlineCode",{parentName:"td"},"LoadBalancer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<component>.service.type")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"ClusterIP")),(0,r.kt)("td",{parentName:"tr",align:"center"},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"type")," field determines how the service is exposed. Valid options are ",(0,r.kt)("inlineCode",{parentName:"td"},"ClusterIP"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"NodePort"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"LoadBalancer")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"ExternalName"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<component>.service.clusterIP")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"nil")),(0,r.kt)("td",{parentName:"tr",align:"center"},"ClusterIP is the IP address of the service and is usually assigned randomly by the master")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<component>.service.nodePort")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"nil")),(0,r.kt)("td",{parentName:"tr",align:"center"},"NodePort is the port on each node on which this service is exposed when service type is ",(0,r.kt)("inlineCode",{parentName:"td"},"NodePort"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<component>.service.loadBalancerIP")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"nil")),(0,r.kt)("td",{parentName:"tr",align:"center"},"LoadBalancer will get created with the IP specified in this field when service type is ",(0,r.kt)("inlineCode",{parentName:"td"},"LoadBalancer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<component>.service.externalName")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"nil")),(0,r.kt)("td",{parentName:"tr",align:"center"},"ExternalName is the external reference that kubedns or equivalent will return as a CNAME record for this service, requires service type to be ",(0,r.kt)("inlineCode",{parentName:"td"},"ExternalName"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<component>.service.externalIPs")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:"center"},"ExternalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"external.mysql.enabled")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},"If not exists external MySQL, InLong will use the internal MySQL by default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"external.mysql.hostname")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"localhost")),(0,r.kt)("td",{parentName:"tr",align:"center"},"External MySQL hostname")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"external.mysql.port")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"3306")),(0,r.kt)("td",{parentName:"tr",align:"center"},"External MySQL port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"external.mysql.username")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"root")),(0,r.kt)("td",{parentName:"tr",align:"center"},"External MySQL username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"external.mysql.password")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"password")),(0,r.kt)("td",{parentName:"tr",align:"center"},"External MySQL password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"external.pulsar.enabled")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},"If not exists external Pulsar, InLong will use the internal TubeMQ by default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"external.pulsar.serviceUrl")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"localhost:6650")),(0,r.kt)("td",{parentName:"tr",align:"center"},"External Pulsar service URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"external.pulsar.adminUrl")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"localhost:8080")),(0,r.kt)("td",{parentName:"tr",align:"center"},"External Pulsar admin URL")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The optional components include ",(0,r.kt)("inlineCode",{parentName:"p"},"agent"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"audit"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dashboard"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dataproxy"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"manager"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tubemq-manager"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tubemq-master"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tubemq-broker"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"zookeeper")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql"),".")),(0,r.kt)("h3",{id:"uninstall"},"Uninstall"),(0,r.kt)("p",null,"To uninstall the release, try:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm uninstall inlong -n inlong\n")),(0,r.kt)("p",null,"The above command removes all the Kubernetes components except the ",(0,r.kt)("inlineCode",{parentName:"p"},"PVC")," associated with the chart, and deletes the release.\nYou can delete all ",(0,r.kt)("inlineCode",{parentName:"p"},"PVC")," if any persistent volume claims used, it will lose all data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete pvc -n inlong --all\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Deleting the PVC also delete all data. Please be cautious before doing it.")),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"A Kubernetes cluster with ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh"},"helm")," is required before development.\nBut it doesn't matter if you don't have one, the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kind"},"kind")," is recommended.\nIt runs a local Kubernetes cluster in Docker container. Therefore, it requires very little time to up and stop the Kubernetes node."),(0,r.kt)("h3",{id:"quick-start-with-kind"},"Quick start with kind"),(0,r.kt)("p",null,"You can install kind by following the ",(0,r.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start"},"Quick Start")," section of their official documentation."),(0,r.kt)("p",null,"After installing kind, you can create a Kubernetes cluster with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/.github/kind.yml"},"kind.yml"),", try:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kind create cluster --config kind.yml\n")),(0,r.kt)("p",null,"To specify another image use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--image")," flag \u2013 ",(0,r.kt)("inlineCode",{parentName:"p"},"kind create cluster --image=...."),".\nUsing a different image allows you to change the Kubernetes version of the created cluster.\nTo find images suitable for a given release currently you should check the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kind/releases"},"release notes")," for your given kind version (check with ",(0,r.kt)("inlineCode",{parentName:"p"},"kind version"),") where you'll find a complete listing of images created for a kind release."),(0,r.kt)("p",null,"After installing kind, you can interact with the created cluster, try:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl cluster-info --context kind-inlong-cluster\n")),(0,r.kt)("p",null,"Now, you have a running Kubernetes cluster for local development."),(0,r.kt)("h3",{id:"install-helm"},"Install Helm"),(0,r.kt)("p",null,"Please follow the ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install"},"installation guide")," in the official documentation to install Helm."),(0,r.kt)("h3",{id:"install-the-chart"},"Install the chart"),(0,r.kt)("p",null,"To create the namespace and Install the chart, try:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace inlong\nhelm upgrade inlong --install -n inlong ./\n")),(0,r.kt)("p",null,"It may take a few minutes. Confirm the pods are up:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"watch kubectl get pods -n inlong -o wide\n")),(0,r.kt)("h3",{id:"develop-and-debug"},"Develop and debug"),(0,r.kt)("p",null,"Follow the ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/chart_template_guide/debugging"},"template debugging guide")," in the official documentation to debug your chart."),(0,r.kt)("p",null,"Besides, you can save the rendered templates by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm template ./ --output-dir ./result\n")),(0,r.kt)("p",null,"Then, you can check the rendered templates in the ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," directory."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"We've done our best to make these charts as seamless as possible, but occasionally there are circumstances beyond our control.\nWe've collected tips and tricks for troubleshooting common issues.\nPlease examine these first before raising an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/issues/new/choose"},"issue"),", and feel free to make a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/compare"},"Pull Request"),"!"))}c.isMDXComponent=!0}}]);