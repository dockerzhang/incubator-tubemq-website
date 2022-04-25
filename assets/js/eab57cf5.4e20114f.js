"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[833],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},86298:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Overview"},c=void 0,l={unversionedId:"sdk/dataproxy-sdk/overview",id:"version-1.1.0/sdk/dataproxy-sdk/overview",title:"Overview",description:"DataProxy supports multi-data format for access, and users can assemble and send data according to the format recognized by DataProxy (such as six-segment protocol, digital protocol, etc.).",source:"@site/versioned_docs/version-1.1.0/sdk/dataproxy-sdk/overview.md",sourceDirName:"sdk/dataproxy-sdk",slug:"/sdk/dataproxy-sdk/overview",permalink:"/docs/sdk/dataproxy-sdk/overview",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-1.1.0/sdk/dataproxy-sdk/overview.md",tags:[],version:"1.1.0",frontMatter:{title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Example",permalink:"/docs/sdk/dataproxy-sdk/example"},next:{title:"Example",permalink:"/docs/sdk/manager-sdk/example"}},d={},u=[{value:"Functions",id:"functions",level:2},{value:"Data transmission",id:"data-transmission",level:2},{value:"Synchronous batch function",id:"synchronous-batch-function",level:3},{value:"Synchronize a single function",id:"synchronize-a-single-function",level:3},{value:"Asynchronous batch function",id:"asynchronous-batch-function",level:3},{value:"Asynchronous single function",id:"asynchronous-single-function",level:3}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"DataProxy supports multi-data format for access, and users can assemble and send data according to the format recognized by DataProxy (such as six-segment protocol, digital protocol, etc.).\nAlternatively, use the SDK provided by DataProxy for data access.\nThe DataProxy SDK provides multi-features such as load balance and dynamically updating the proxy list, which can ensure the reliability of access data, simplify the user's access logic, and reduce the user's access difficulty. It is recommended to use the SDK method to access."),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"function"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Package function (new)"),(0,o.kt)("td",{parentName:"tr",align:null},"The user data is packaged and sent to the proxy in a packet format recognized by the proxy (such as six-segment protocol, digital protocol, etc.)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Compression function"),(0,o.kt)("td",{parentName:"tr",align:null},"Before sending proxy, compress user data to reduce network bandwidth usage")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Maintain proxy list"),(0,o.kt)("td",{parentName:"tr",align:null},"Get the proxy list every five minutes to detect whether there is a proxy machine on the operation and maintenance side; automatically remove unavailable connections every 20s to ensure that the connected proxy can operate normally")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Indicator statistics (new)"),(0,o.kt)("td",{parentName:"tr",align:null},"Increase the indicator of business minute-level sending volume (interface level)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Load balancing (new)"),(0,o.kt)("td",{parentName:"tr",align:null},"Use the new strategy to load balance the sent data among multiple proxies, instead of relying on simple random + polling mechanism to ensure")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"proxy list persistence (new)"),(0,o.kt)("td",{parentName:"tr",align:null},"Persist the proxy list according to the business group id to prevent the configuration center from failing to send data when the program starts")))),(0,o.kt)("h2",{id:"data-transmission"},"Data transmission"),(0,o.kt)("h3",{id:"synchronous-batch-function"},"Synchronous batch function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    public SendResult sendMessage(List<byte[]> bodyList, String groupId, String streamId, long dt, long timeout, TimeUnit timeUnit)\n\n    Parameter Description\n\n    bodyListIt is a collection of multiple pieces of data that users need to send. The total length is recommended to be less than 512k. groupId represents the service id, and streamId represents the interface id. dt represents the time stamp of the data, accurate to the millisecond level. It can also be set to 0 directly, and the api will get the current time as its timestamp in the background. timeout & timeUnit: These two parameters are used to set the timeout time for sending data, and it is generally recommended to set it to 20s.\n")),(0,o.kt)("h3",{id:"synchronize-a-single-function"},"Synchronize a single function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    public SendResult sendMessage(byte[] body, String groupId, String streamId, long dt, long timeout, TimeUnit timeUnit)\n\n    Parameter Description\n\n    body is the content of a single piece of data that the user wants to send, and the meaning of the remaining parameters is basically the same as the batch sending interface.\n")),(0,o.kt)("h3",{id:"asynchronous-batch-function"},"Asynchronous batch function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    public void asyncSendMessage(SendMessageCallback callback, List<byte[]> bodyList, String groupId, String streamId, long dt, long timeout,TimeUnit timeUnit)\n\n    Parameter Description\n\n    SendMessageCallback is a callback for processing messages. The bodyList is a collection of multiple pieces of data that users need to send. The total length of multiple pieces of data is recommended to be less than 512k. groupId is the service id, and streamId is the interface id. dt represents the time stamp of the data, accurate to the millisecond level. It can also be set to 0 directly, and the api will get the current time as its timestamp in the background. timeout and timeUnit are the timeout time for sending data, generally recommended to be set to 20s.\n")),(0,o.kt)("h3",{id:"asynchronous-single-function"},"Asynchronous single function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    public void asyncSendMessage(SendMessageCallback callback, byte[] body, String groupId, String streamId, long dt, long timeout, TimeUnit timeUnit)\n\n    Parameter Description\n\n    The body is the content of a single message, and the meaning of the remaining parameters is basically the same as the batch sending interface\n")))}m.isMDXComponent=!0}}]);