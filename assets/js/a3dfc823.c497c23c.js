"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5640],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),g=a,m=u["".concat(s,".").concat(g)]||u[g]||p[g]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={title:"File",sidebar_position:3},i=void 0,l={unversionedId:"modules/agent/file",id:"version-0.12.0/modules/agent/file",title:"File",description:"File Agent Configuration",source:"@site/versioned_docs/version-0.12.0/modules/agent/file.md",sourceDirName:"modules/agent",slug:"/modules/agent/file",permalink:"/docs/0.12.0/modules/agent/file",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.12.0/modules/agent/file.md",tags:[],version:"0.12.0",sidebarPosition:3,frontMatter:{title:"File",sidebar_position:3},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/0.12.0/modules/agent/quick_start"},next:{title:"Overview",permalink:"/docs/0.12.0/modules/dataproxy/overview"}},s={},d=[{value:"File Agent Configuration",id:"file-agent-configuration",level:2},{value:"Get data time from file name",id:"get-data-time-from-file-name",level:2},{value:"Time offset reading",id:"time-offset-reading",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"file-agent-configuration"},"File Agent Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'/data/inlong-agent/test.log //Represents reading the new file test.log in the inlong-agent folder\n/data/inlong-agent/test[0-9]{1} // means to read the new file test in the inlong-agent folder followed by a number at the end\n/data/inlong-agent/test //If test is a directory, it means to read all new files under test\n/data/inlong-agent/^\\\\d+(\\\\.\\\\d+)? // Start with one or more digits, followed by. or end with one. or more digits (? stands for optional, can match Examples: "5", "1.5" and "2.21"\n')),(0,a.kt)("h2",{id:"get-data-time-from-file-name"},"Get data time from file name"),(0,a.kt)("p",null,"Agent supports obtaining the time from the file name as the production time of the data. The configuration instructions are as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/data/inlong-agent/***YYYYMMDDHH***\n")),(0,a.kt)("p",null,"Where YYYYDDMMHH represents the data time, YYYY represents the year, MM represents the month, DD represents the day, and HH represents the hour\nWhere *** is any character"),(0,a.kt)("p",null,"At the same time, you need to add the current data cycle to the job conf, the current support day cycle and hour cycle,\nWhen adding a task, add the property job.cycleUnit"),(0,a.kt)("p",null,"job.cycleUnit contains the following two types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"D: Represents the data time and day dimension"),(0,a.kt)("li",{parentName:"ul"},"H: Represents the data time and hour dimension")),(0,a.kt)("p",null,"E.g:\nThe configuration data source is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/data/inlong-agent/2021020211.log\n")),(0,a.kt)("p",null,"Write data to 2021020211.log\nConfigure job.cycleUnit as D\nThen the agent will try the 202020211.log file at the time of 202020211. When reading the data in the file, it will write all the data to the backend proxy at the time of 20210202.\nIf job.cycleUnit is configured as H\nWhen collecting data in the 2021020211.log file, all data will be written to the backend proxy at the time of 2021020211\u3002"),(0,a.kt)("p",null,"Examples of job submission\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST\'http://localhost:8008/config/job\' \\\n--header\'Content-Type: application/json\' \\\n--data\'{\n"job": {\n"dir": {\n"path": "",\n"pattern": "/data/inlong-agent/2021020211.log"\n},\n"trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",\n"id": 1,\n"thread": {\n"running": {\n"core": "4"\n}\n},\n"name": "fileAgentTest",\n"cycleUnit": "D",\n"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n},\n"proxy": {\n"inlongGroupId": "group10",\n"inlongStreamId": "group10"\n},\n"op": "add"\n}\'\n')),(0,a.kt)("h2",{id:"time-offset-reading"},"Time offset reading"),(0,a.kt)("p",null,"After the configuration is read by time, if you want to read data at other times than the current time, you can configure the time offset to complete\nConfigure the job attribute name as job.timeOffset, the value is number + time dimension, time dimension includes day and hour\nFor example, the following settings are supported:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1d Read the data one day after the current time"),(0,a.kt)("li",{parentName:"ul"},"-1h read the data one hour before the current time")),(0,a.kt)("p",null,"Examples of job submission"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST\'http://localhost:8008/config/job\' \\\n--header\'Content-Type: application/json\' \\\n--data\'{\n"job": {\n"dir": {\n"path": "",\n"pattern": "/data/inlong-agent/test.log"\n},\n"trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",\n"id": 1,\n"thread": {\n"running": {\n"core": "4"\n}\n},\n"name": "fileAgentTest",\n"cycleUnit": "D",\n"timeOffset": "-1d",\n"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n},\n"proxy": {\n"inlongGroupId": "groupId10",\n"inlongStreamId": "streamId10"\n},\n"op": "add"\n}\'\n')))}p.isMDXComponent=!0}}]);