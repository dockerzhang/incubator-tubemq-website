"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[726],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),g=o,d=m["".concat(u,".").concat(g)]||m[g]||s[g]||a;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},15492:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={title:"Custom Authentication",sidebar_position:2},u=void 0,c={unversionedId:"development/inlong_manager_shiro_plugin",id:"development/inlong_manager_shiro_plugin",title:"Custom Authentication",description:"Overview",source:"@site/docs/development/inlong_manager_shiro_plugin.md",sourceDirName:"development",slug:"/development/inlong_manager_shiro_plugin",permalink:"/docs/next/development/inlong_manager_shiro_plugin",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/development/inlong_manager_shiro_plugin.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Custom Authentication",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Parse InLongMsg",permalink:"/docs/next/development/inlong_msg"},next:{title:"Manager Custom Plugin",permalink:"/docs/next/development/inlong_manager_plugin"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Dependency",id:"dependency",level:2},{value:"Code",id:"code",level:2}],m={toc:s};function g(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Apache Shiro framework is used in the inlong manager to realize the functions of authentication and authorization. The manager has integrated the default implementation logic. If you want to realize the custom Shiro based authentication and authorization function in the inlong manager, you can carry out the plug-in development of relevant functions according to the following instructions."),(0,a.kt)("h2",{id:"dependency"},"Dependency"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add Maven Dependency")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n        <groupId>org.apache.inlong</groupId>\n        <artifactId>manager-common</artifactId>\n        <version>inlong_version</version>\n</dependency>\n")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implement the following interfaces")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"org.apache.inlong.manager.common.auth.InlongShiro\n\npublic interface InlongShiro {\n\n    WebSecurityManager getWebSecurityManager();\n\n    AuthorizingRealm getShiroRealm();\n\n    WebSessionManager getWebSessionManager();\n\n    CredentialsMatcher getCredentialsMatcher();\n\n    ShiroFilterFactoryBean getShiroFilter(SecurityManager securityManager);\n\n    AuthorizationAttributeSourceAdvisor getAuthorizationAttributeSourceAdvisor(SecurityManager securityManager);\n\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implement ",(0,a.kt)("em",{parentName:"li"}," InlongShiro "),' interface and specify the configuration in "@ conditionalonproperty"')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@ConditionalOnProperty(name = "type", prefix = "inlong.auth", havingValue = "Custom")\n@Component\npublic class InlongShiroImpl implements InlongShiro {\n   //todo\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Modify the application.properties under the manager web module")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"inlong.auth.type=Custom\n")))}g.isMDXComponent=!0}}]);