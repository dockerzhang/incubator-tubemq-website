"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[65226],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,b=d["".concat(i,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Python SDK",sidebar_position:2},l=void 0,s={unversionedId:"sdk/tubemq-sdk/python",id:"version-1.10.0/sdk/tubemq-sdk/python",title:"Python SDK",description:"Build TubeMQ Python SDK",source:"@site/versioned_docs/version-1.10.0/sdk/tubemq-sdk/python.md",sourceDirName:"sdk/tubemq-sdk",slug:"/sdk/tubemq-sdk/python",permalink:"/docs/1.10.0/sdk/tubemq-sdk/python",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.10.0/sdk/tubemq-sdk/python.md",tags:[],version:"1.10.0",sidebarPosition:2,frontMatter:{title:"Python SDK",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"C++ SDK",permalink:"/docs/1.10.0/sdk/tubemq-sdk/cpp"},next:{title:"Golang SDK",permalink:"/docs/1.10.0/sdk/tubemq-sdk/go"}},i={},p=[{value:"Build TubeMQ Python SDK",id:"build-tubemq-python-sdk",level:2},{value:"Python SDK API",id:"python-sdk-api",level:2},{value:"Producer",id:"producer",level:3},{value:"Consumer",id:"consumer",level:3},{value:"Example",id:"example",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"build-tubemq-python-sdk"},"Build TubeMQ Python SDK"),(0,o.kt)("p",null,"Python SDK is a wrapper of C++ SDK through ",(0,o.kt)("a",{parentName:"p",href:"https://pybind11.readthedocs.io/en/stable/"},"pybind11"),", so before building Python SDK\uff0censure the C++ SDK has built. The build process of C++ SDK is in  ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.10.0/sdk/tubemq-sdk/cpp"},"Build TubeMQ C++ SDK")),(0,o.kt)("p",null,"Then install the C++ SDK library and header files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# copy header files\ncp -r /tubemq-cpp/include/tubemq /usr/local/include\n\n# copy third party and tubemq library files\ncp /tubemq-cpp/build/src/libtubemq.a \\\n   /tubemq-cpp/build/proto/libtubemq_proto.a \\\n   /tubemq-cpp/build/third_party/lib/lib* \\\n   /usr/local/lib64/\n\n")),(0,o.kt)("p",null,"Install ",(0,o.kt)("inlineCode",{parentName:"p"},"python3"),", requirements and python sdk"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# install requirements\npip3 install -r requirements.txt\n\n# install python sdk\npython3 setup.py install\n")),(0,o.kt)("p",null,"After installation\uff0cthere are compliled so files and python package in ",(0,o.kt)("inlineCode",{parentName:"p"},"build/lib"),", they can be added to python's ",(0,o.kt)("inlineCode",{parentName:"p"},"site-packages"),"  or ",(0,o.kt)("inlineCode",{parentName:"p"},"PYTHONPATH")),(0,o.kt)("h2",{id:"python-sdk-api"},"Python SDK API"),(0,o.kt)("p",null,"Similar with C++ SDK \uff0cPython SDK is also divided into Producer and Consumer."),(0,o.kt)("h3",{id:"producer"},"Producer"),(0,o.kt)("p",null,"First of all, initialize ",(0,o.kt)("inlineCode",{parentName:"p"},"tubemq.Producer")," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import tubemq\n\nmaster_addr = "127.0.0.1:8000"\nproducer = tubemq.Producer(master_addr)\n')),(0,o.kt)("p",null,"then, publish the topic list"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'topic_list = ["topic_0", "topic_1"]\nproducer.publish(topic_list)\n')),(0,o.kt)("p",null,"Construct the  ",(0,o.kt)("inlineCode",{parentName:"p"},"tubemq.Message")," and send"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'send_data = "hello_tubemq"\ntopic_name = "demo"\nmsg = tubemq_message.Message(topic_name, send_data, len(send_data))\nif is_sync:\n    result = producer.send(msg, is_sync=True)\nelse:\n    producer.send(msg, callback=func) # default is async send\n')),(0,o.kt)("p",null,"The Python SDK also supports synchronous and asynchronous sending methods, which are similar to  C++ SDK. When sending asynchronously, a callable object should be provided."),(0,o.kt)("p",null,"Finally, stop the producer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"producer.stop()\n")),(0,o.kt)("h3",{id:"consumer"},"Consumer"),(0,o.kt)("p",null,"Consumer API of Python SDK is similar with Producer, this is a simple example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import tubemq\n\nmaster_addr = "127.0.0.1:8000"\ntopic_list = ["demo"]\ngroup_name = "test_group"\nconsumer = tubemq.Consumer(master_addr, group_name, topic_list) # initialize consumer\n\nmsgs = consumer.receive()\nif msgs:\n    consumer.acknowledge()\n\nconsumer.stop()\n')),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"For more detailed python sdk use cases, please refer to  ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-tubemq/tubemq-client-twins/tubemq-client-python/src/python/example"},"Python SDK Example")))}c.isMDXComponent=!0}}]);