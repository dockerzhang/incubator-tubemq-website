"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[87988],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(b,p(p({ref:t},i),{},{components:n})):r.createElement(b,p({ref:t},i))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,p[1]=l;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"Python SDK",sidebar_position:2},p=void 0,l={unversionedId:"sdk/tubemq-sdk/python",id:"version-1.6.0/sdk/tubemq-sdk/python",title:"Python SDK",description:"\u6784\u5efa TubeMQ Python SDK",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.6.0/sdk/tubemq-sdk/python.md",sourceDirName:"sdk/tubemq-sdk",slug:"/sdk/tubemq-sdk/python",permalink:"/zh-CN/docs/1.6.0/sdk/tubemq-sdk/python",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.6.0/sdk/tubemq-sdk/python.md",tags:[],version:"1.6.0",sidebarPosition:2,frontMatter:{title:"Python SDK",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"C++ SDK",permalink:"/zh-CN/docs/1.6.0/sdk/tubemq-sdk/cpp"},next:{title:"Dashboard \u6307\u5f15",permalink:"/zh-CN/docs/1.6.0/user_guide/dashboard_usage"}},s={},u=[{value:"\u6784\u5efa TubeMQ Python SDK",id:"\u6784\u5efa-tubemq-python-sdk",level:2},{value:"Python SDK API",id:"python-sdk-api",level:2},{value:"Producer",id:"producer",level:3},{value:"Consumer",id:"consumer",level:3},{value:"Example",id:"example",level:3}],i={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6784\u5efa-tubemq-python-sdk"},"\u6784\u5efa TubeMQ Python SDK"),(0,o.kt)("p",null,"Python SDK \u4e3b\u8981\u57fa\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"https://pybind11.readthedocs.io/en/stable/"},"pybind11"),"\uff0c\u5bf9 C++ SDK \u8fdb\u884c\u5c01\u88c5\uff0c\u56e0\u6b64\u5728\u6784\u5efa Python SDK \u4e4b\u524d\uff0c\u9700\u8981\u5148\u6784\u5efa\u597d C++ SDK\uff0cC++ SDK \u7684\u6784\u5efa\u8fc7\u7a0b\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.6.0/sdk/tubemq-sdk/cpp"},"\u6784\u5efaTubeMQ C++ SDK")),(0,o.kt)("p",null,"\u4e4b\u540e\u5c06 C++ SDK \u7684\u5e93\u6587\u4ef6\u548c\u6e90\u6587\u4ef6\u5b89\u88c5\u5230\u5bf9\u5e94\u7684\u4f4d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u62f7\u8d1d\u5934\u6587\u4ef6\ncp -r /tubemq-cpp/include/tubemq /usr/local/include\n\n# \u62f7\u8d1d\u4e09\u65b9\u4f9d\u8d56\uff0c\u4ee5\u53calibtubemq.a\ncp /tubemq-cpp/build/src/libtubemq.a \\\n   /tubemq-cpp/build/proto/libtubemq_proto.a \\\n   /tubemq-cpp/build/third_party/lib/lib* \\\n   /usr/local/lib64/\n\n")),(0,o.kt)("p",null,"\u4e4b\u540e\u5b89\u88c5 Python3\uff0c\u4ee5\u53ca\u76f8\u5e94\u7684\u4f9d\u8d56\uff0c\u6700\u540e\u5b89\u88c5 Python SDK"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5\u4f9d\u8d56\npip3 install -r requirements.txt\n\n# \u5b89\u88c5 python sdk\npython3 setup.py install\n")),(0,o.kt)("p",null,"\u5b89\u88c5\u540e\uff0c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"build/lib")," \u4e2d\u53ef\u4ee5\u53d1\u73b0\u7f16\u8bd1\u597d\u7684 so \u6587\u4ef6\u4ee5\u53ca Python \u5e93\uff0c\u76f4\u63a5\u6dfb\u52a0\u5230 Python\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"site-packages")," \u6216\u8005\u73af\u5883\u53d8\u91cf ",(0,o.kt)("inlineCode",{parentName:"p"},"PYTHONPATH")," \u4e2d\u5747\u53ef\u3002"),(0,o.kt)("h2",{id:"python-sdk-api"},"Python SDK API"),(0,o.kt)("p",null,"\u4e0e C++ SDK \u7c7b\u4f3c\uff0cPython SDK \u4e5f\u5206\u4e3a Producer \u548c Consumer \u4e24\u90e8\u5206\uff0c\u4e0b\u9762\u5bf9\u5176\u8fdb\u884c\u4ecb\u7ecd\u3002"),(0,o.kt)("h3",{id:"producer"},"Producer"),(0,o.kt)("p",null,"\u9996\u5148\u521d\u59cb\u5316 ",(0,o.kt)("inlineCode",{parentName:"p"},"tubemq.Producer")," \u5b9e\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import tubemq\n\nmaster_addr = "127.0.0.1:8000"\nproducer = tubemq.Producer(master_addr)\n')),(0,o.kt)("p",null,"\u4e4b\u540e\u8ba2\u9605\u60f3\u8981\u53d1\u9001\u6d88\u606f\u7684 topic \u5217\u8868\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'topic_list = ["topic_0", "topic_1"]\nproducer.publish(topic_list)\n')),(0,o.kt)("p",null,"\u8ba2\u9605\u5b8c\u6210\u540e\uff0c\u76f4\u63a5\u6784\u9020 ",(0,o.kt)("inlineCode",{parentName:"p"},"tubemq.Message")," \u5e76\u53d1\u9001\u6d88\u606f\u5373\u53ef"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'send_data = "hello_tubemq"\ntopic_name = "demo"\nmsg = tubemq_message.Message(topic_name, send_data, len(send_data))\nif is_sync:\n    result = producer.send(msg, is_sync=True)\nelse:\n    producer.send(msg, callback=func) # \u9ed8\u8ba4\u4e3a\u5f02\u6b65\u53d1\u9001\n')),(0,o.kt)("p",null,"Python SDK \u4e5f\u4e3a\u540c\u6b65\u548c\u5f02\u6b65\u4e24\u79cd\u53d1\u9001\u65b9\u5f0f\uff0c\u548c C++ SDK \u7684 API \u7c7b\u4f3c\uff0c\u5f02\u6b65\u53d1\u9001\u65f6\uff0c\u9700\u8981\u63d0\u4f9b\u53ef\u8c03\u7528\u7684\u5bf9\u8c61"),(0,o.kt)("p",null,"\u6700\u540e\uff0c\u505c\u6b62 producer \u5373\u53ef"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"producer.stop()\n")),(0,o.kt)("h3",{id:"consumer"},"Consumer"),(0,o.kt)("p",null,"Python SDK \u7684 Consumer API \u4e0e Producer \u57fa\u672c\u76f8\u4f3c\uff0c\u4e0b\u9762\u4e3a\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import tubemq\n\nmaster_addr = "127.0.0.1:8000"\ntopic_list = ["demo"]\ngroup_name = "test_group"\nconsumer = tubemq.Consumer(master_addr, group_name, topic_list) # \u521d\u59cb\u5316 consumer\n\nmsgs = consumer.receive()\nif msgs:\n    consumer.acknowledge()\n\nconsumer.stop()\n')),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"\u5173\u4e8e Python SDK \u7684\u66f4\u52a0\u8be6\u7ec6\u7684\u7528\u4f8b\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-tubemq/tubemq-client-twins/tubemq-client-python/src/python/example"},"Python SDK Example"),"\u3002"))}d.isMDXComponent=!0}}]);