"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[39118],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=d(n),c=r,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(g,l(l({ref:e},p),{},{components:n})):a.createElement(g,l({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},94975:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={title:"HTTP \u4e0a\u62a5",sidebar_position:3},l=void 0,o={unversionedId:"sdk/dataproxy-sdk/http",id:"version-1.6.0/sdk/dataproxy-sdk/http",title:"HTTP \u4e0a\u62a5",description:"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.6.0/sdk/dataproxy-sdk/http.md",sourceDirName:"sdk/dataproxy-sdk",slug:"/sdk/dataproxy-sdk/http",permalink:"/zh-CN/docs/1.6.0/sdk/dataproxy-sdk/http",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.6.0/sdk/dataproxy-sdk/http.md",tags:[],version:"1.6.0",sidebarPosition:3,frontMatter:{title:"HTTP \u4e0a\u62a5",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Java SDK",permalink:"/zh-CN/docs/1.6.0/sdk/dataproxy-sdk/java"},next:{title:"\u793a\u4f8b",permalink:"/zh-CN/docs/1.6.0/sdk/manager-sdk/example"}},s={},d=[{value:"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1",id:"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1",level:2},{value:"\u65b9\u5f0f\u4e00\uff1a\u8c03\u7528 URL \u4e0a\u62a5",id:"\u65b9\u5f0f\u4e00\u8c03\u7528-url-\u4e0a\u62a5",level:2},{value:"\u65b9\u5f0f\u4e8c\uff1a\u5c01\u88c5 HTTP Client\uff08Java)",id:"\u65b9\u5f0f\u4e8c\u5c01\u88c5-http-clientjava",level:2}],p={toc:d},u="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1"},"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1"),(0,r.kt)("p",null,"\u5728 Dashboard \u6216\u8005\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u521b\u5efa\u4efb\u52a1\uff0c\u6570\u636e\u6e90\u7c7b\u578b\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Auto Push")," (\u81ea\u4e3b\u63a8\u9001)\u3002"),(0,r.kt)("h2",{id:"\u65b9\u5f0f\u4e00\u8c03\u7528-url-\u4e0a\u62a5"},"\u65b9\u5f0f\u4e00\uff1a\u8c03\u7528 URL \u4e0a\u62a5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -d 'groupId=give_your_group_id&streamId=give_your_stream_id&dt=data_time&body=give_your_data_body&cnt=1' http://dataproxy_url:46802/dataproxy/message\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u8bf4\u660e\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"groupId"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u6d41\u7ec4 id"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"streamId"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u6d41 ID"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a8\u9001\u7684\u6570\u636e\u5185\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a8\u9001\u7684\u6570\u636e\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cnt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a8\u9001\u6761\u6570"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u503c\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u7801"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6210\u529f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u975e1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5931\u8d25")))),(0,r.kt)("h2",{id:"\u65b9\u5f0f\u4e8c\u5c01\u88c5-http-clientjava"},"\u65b9\u5f0f\u4e8c\uff1a\u5c01\u88c5 HTTP Client\uff08Java)"),(0,r.kt)("p",null,"\u9700\u8981 ",(0,r.kt)("inlineCode",{parentName:"p"},"httpclient"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"commons-lang3"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"jackson-databind"),"\uff0c\u4ee3\u7801\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class DataPush {\n\n    private static CloseableHttpClient httpClient;\n    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();\n    private final Random rand = new Random();\n\n    private String sendByHttp(List<String> bodies, String groupId, String streamId, long dataTime,\n            long timeout, TimeUnit timeUnit, List<String> addresses) throws Exception {\n        if (null == addresses || addresses.isEmpty()) {\n            throw new RuntimeException("addresses are null");\n        }\n        HttpPost httpPost = null;\n        CloseableHttpResponse response = null;\n        try {\n            if (httpClient == null) {\n                httpClient = constructHttpClient(timeout, timeUnit);\n            }\n            int randomNum = rand.nextInt((addresses.size() - 1) + 1);\n            String url = "http://" + addresses.get(randomNum) + "/dataproxy/message";\n\n            httpPost = new HttpPost(url);\n            httpPost.setHeader(HttpHeaders.CONNECTION, "close");\n            httpPost.setHeader(HttpHeaders.CONTENT_TYPE, "application/x-www-form-urlencoded");\n            ArrayList<BasicNameValuePair> contents = getContents(bodies, groupId, streamId, dataTime);\n            String s = URLEncodedUtils.format(contents, StandardCharsets.UTF_8);\n            httpPost.setEntity(new StringEntity(s));\n\n            response = httpClient.execute(httpPost);\n            String returnStr = EntityUtils.toString(response.getEntity());\n\n            if (StringUtils.isNotBlank(returnStr) && response.getStatusLine().getStatusCode() == 200) {\n                JsonNode jsonNode = OBJECT_MAPPER.readTree(returnStr);\n                if (jsonNode.has("code")) {\n                    int code = jsonNode.get("code").asInt();\n                    if (code == 0) {\n                        return "success";\n                    } else {\n                        return "fail";\n                    }\n                }\n\n            } else {\n                throw new Exception("exception to get response from request " + returnStr + " "\n                        + response.getStatusLine().getStatusCode());\n            }\n\n        } finally {\n            if (httpPost != null) {\n                httpPost.releaseConnection();\n            }\n            if (response != null) {\n                response.close();\n            }\n        }\n        return "fail";\n    }\n\n    private static synchronized CloseableHttpClient constructHttpClient(long timeout, TimeUnit timeUnit) {\n        if (httpClient != null) {\n            return httpClient;\n        }\n        long timeoutInMs = timeUnit.toMillis(timeout);\n        RequestConfig requestConfig = RequestConfig.custom()\n                .setConnectTimeout((int) timeoutInMs)\n                .setSocketTimeout((int) timeoutInMs).build();\n        HttpClientBuilder httpClientBuilder = HttpClientBuilder.create();\n        httpClientBuilder.setDefaultRequestConfig(requestConfig);\n        return httpClientBuilder.build();\n    }\n\n    private static ArrayList<BasicNameValuePair> getContents(List<String> bodies,\n            String groupId, String streamId, long dt) {\n        ArrayList<BasicNameValuePair> params = new ArrayList<BasicNameValuePair>();\n        params.add(new BasicNameValuePair("groupId", groupId));\n        params.add(new BasicNameValuePair("streamId", streamId));\n        params.add(new BasicNameValuePair("dt", String.valueOf(dt)));\n        params.add(new BasicNameValuePair("body", StringUtils.join(bodies, "\\n")));\n        params.add(new BasicNameValuePair("cnt", String.valueOf(bodies.size())));\n        return params;\n    }\n}\n')))}m.isMDXComponent=!0}}]);