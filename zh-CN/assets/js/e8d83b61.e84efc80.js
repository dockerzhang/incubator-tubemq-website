"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7928],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(t),d=o,m=g["".concat(s,".").concat(d)]||g[d]||p[d]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},92797:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={title:"\u89e3\u6790 InLongMsg",sidebar_position:1},s=void 0,c={unversionedId:"development/inlong_msg",id:"development/inlong_msg",title:"\u89e3\u6790 InLongMsg",description:"\u603b\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/inlong_msg.md",sourceDirName:"development",slug:"/development/inlong_msg",permalink:"/zh-CN/docs/next/development/inlong_msg",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/development/inlong_msg.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u89e3\u6790 InLongMsg",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u547d\u4ee4\u884c\u5de5\u5177",permalink:"/zh-CN/docs/next/user_guide/command_line_tools"},next:{title:"\u81ea\u5b9a\u4e49\u8ba4\u8bc1",permalink:"/zh-CN/docs/next/development/inlong_manager_shiro_plugin"}},u={},p=[{value:"\u603b\u89c8",id:"\u603b\u89c8",level:2},{value:"\u89e3\u6790",id:"\u89e3\u6790",level:2}],g={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,i.kt)("p",null,"\u5982\u679c\u76f4\u63a5\u4ece\u6d88\u606f\u961f\u5217\uff08InLong TubeMQ \u6216Pulsar)\u6d88\u8d39\u6570\u636e\uff0c\u9700\u8981\u5148\u5bf9",(0,i.kt)("inlineCode",{parentName:"p"},"InLongMsg")," \u8fdb\u884c\u89e3\u6790\u3002\u53ef\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u53ef\u4ee5\u89e3\u6790\u51fa\u6e90\u6570\u636e\u3002"),(0,i.kt)("h2",{id:"\u89e3\u6790"},"\u89e3\u6790"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u589e\u52a0maven \u4f9d\u8d56")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n        <groupId>org.apache.inlong</groupId>\n        <artifactId>inlong-common</artifactId>\n        <version>inlong_version</version>\n</dependency>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u589e\u52a0\u89e3\u6790\u903b\u8f91")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public static List<byte[]> parserInLongMsg(byte[] bytes) {\n    List<byte[]> originalContentByteList = new ArrayList<>();\n    InLongMsg inLongMsg = InLongMsg.parseFrom(bytes);\n    Set<String> attrs = inLongMsg.getAttrs();\n    if (CollectionUtils.isEmpty(attrs)) {\n        return originalContentByteList;\n    }\n    for (String attr : attrs) {\n        if (attr == null) {\n            continue;\n        }\n        Iterator<byte[]> iterator = inLongMsg.getIterator(attr);\n        if (iterator == null) {\n            continue;\n        }\n        while (iterator.hasNext()) {\n            byte[] bodyBytes = iterator.next();\n            if (bodyBytes == null || bodyBytes.length == 0) {\n                continue;\n            }\n            // agent \u53d1\u9001\u7684\u539f\u59cb\u7528\u6237\u6570\u636e\n            originalContentByteList.add(bodyBytes);\n        }\n    }\n    return originalContentByteList;\n}\n")))}d.isMDXComponent=!0}}]);