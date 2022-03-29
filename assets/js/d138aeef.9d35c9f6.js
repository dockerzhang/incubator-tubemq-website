"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6565],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(t),p=a,f=g["".concat(s,".").concat(p)]||g[p]||d[p]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},15721:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={title:"File",sidebar_position:3},s=void 0,c={unversionedId:"modules/agent/file",id:"version-1.0.0/modules/agent/file",title:"File",description:"File Agent Configuration",source:"@site/versioned_docs/version-1.0.0/modules/agent/file.md",sourceDirName:"modules/agent",slug:"/modules/agent/file",permalink:"/docs/modules/agent/file",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-1.0.0/modules/agent/file.md",tags:[],version:"1.0.0",sidebarPosition:3,frontMatter:{title:"File",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/modules/agent/quick_start"},next:{title:"MySQL SQL",permalink:"/docs/modules/agent/sql"}},u={},d=[{value:"File Agent Configuration",id:"file-agent-configuration",level:2},{value:"Get data time from file name",id:"get-data-time-from-file-name",level:2},{value:"Time offset reading",id:"time-offset-reading",level:2}],g={toc:d};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"file-agent-configuration"},"File Agent Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'/data/inlong-agent/test.log //Represents reading the new file test.log in the inlong-agent folder\n/data/inlong-agent/test[0-9]{1} // means to read the new file test in the inlong-agent folder followed by a number at the end\n/data/inlong-agent/test //If test is a directory, it means to read all new files under test\n/data/inlong-agent/^\\\\d+(\\\\.\\\\d+)? // Start with one or more digits, followed by. or end with one. or more digits (? stands for optional, can match Examples: "5", "1.5" and "2.21"\n')),(0,o.kt)("h2",{id:"get-data-time-from-file-name"},"Get data time from file name"),(0,o.kt)("p",null,"Agent supports obtaining the time from the file name as the production time of the data. The configuration instructions are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/data/inlong-agent/***YYYYMMDDHH***\n")),(0,o.kt)("p",null,"Where YYYYDDMMHH represents the data time, YYYY represents the year, MM represents the month, DD represents the day, and HH represents the hour\nWhere *** is any character"),(0,o.kt)("p",null,"At the same time, you need to add the current data cycle to the job conf, the current support day cycle and hour cycle,\nWhen adding a task, add the property job.cycleUnit"),(0,o.kt)("p",null,"job.cycleUnit contains the following two types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"D: Represents the data time and day dimension"),(0,o.kt)("li",{parentName:"ul"},"H: Represents the data time and hour dimension")),(0,o.kt)("p",null,"E.g:\nThe configuration data source is"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/data/inlong-agent/2021020211.log\n")),(0,o.kt)("p",null,"Write data to 2021020211.log\nConfigure job.cycleUnit as D\nThen the agent will try the 202020211.log file at the time of 202020211. When reading the data in the file, it will write all the data to the backend proxy at the time of 20210202.\nIf job.cycleUnit is configured as H\nWhen collecting data in the 2021020211.log file, all data will be written to the backend proxy at the time of 2021020211\u3002"),(0,o.kt)("p",null,"Examples of job submission\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST\'http://localhost:8008/config/job\' \\\n--header\'Content-Type: application/json\' \\\n--data\'{\n"job": {\n"dir": {\n"path": "",\n"pattern": "/data/inlong-agent/2021020211.log"\n},\n"trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",\n"id": 1,\n"thread": {\n"running": {\n"core": "4"\n}\n},\n"name": "fileAgentTest",\n"cycleUnit": "D",\n"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n},\n"proxy": {\n"inlongGroupId": "group10",\n"inlongStreamId": "group10"\n},\n"op": "add"\n}\'\n')),(0,o.kt)("h2",{id:"time-offset-reading"},"Time offset reading"),(0,o.kt)("p",null,"After the configuration is read by time, if you want to read data at other times than the current time, you can configure the time offset to complete\nConfigure the job attribute name as job.timeOffset, the value is number + time dimension, time dimension includes day and hour\nFor example, the following settings are supported:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1d Read the data one day after the current time"),(0,o.kt)("li",{parentName:"ul"},"-1h read the data one hour before the current time")),(0,o.kt)("p",null,"Examples of job submission"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST\'http://localhost:8008/config/job\' \\\n--header\'Content-Type: application/json\' \\\n--data\'{\n"job": {\n"dir": {\n"path": "",\n"pattern": "/data/inlong-agent/test.log"\n},\n"trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",\n"id": 1,\n"thread": {\n"running": {\n"core": "4"\n}\n},\n"name": "fileAgentTest",\n"cycleUnit": "D",\n"timeOffset": "-1d",\n"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n},\n"proxy": {\n"inlongGroupId": "groupId10",\n"inlongStreamId": "streamId10"\n},\n"op": "add"\n}\'\n')))}p.isMDXComponent=!0}}]);