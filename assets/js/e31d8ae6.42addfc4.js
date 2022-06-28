"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6634],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),g=o,m=d["".concat(c,".").concat(g)]||d[g]||s[g]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58601:(e,n,t)=>{t.d(n,{Y:()=>r});const r={inLongVersion:"1.2.0-incubating"}},21545:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=t(87462),o=(t(67294),t(3905)),i=t(58601);const a={title:"Custom Authentication",sidebar_position:2},l=void 0,c={unversionedId:"development/inlong_manager_shiro_plugin",id:"version-1.2.0/development/inlong_manager_shiro_plugin",title:"Custom Authentication",description:"Overview",source:"@site/versioned_docs/version-1.2.0/development/inlong_manager_shiro_plugin.md",sourceDirName:"development",slug:"/development/inlong_manager_shiro_plugin",permalink:"/docs/development/inlong_manager_shiro_plugin",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.2.0/development/inlong_manager_shiro_plugin.md",tags:[],version:"1.2.0",sidebarPosition:2,frontMatter:{title:"Custom Authentication",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Parse InLongMsg",permalink:"/docs/development/inlong_msg"},next:{title:"Manager Custom Plugin",permalink:"/docs/development/inlong_manager_plugin"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Dependency",id:"dependency",level:2},{value:"Code",id:"code",level:2}],s={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Apache Shiro framework is used in the inlong manager to realize the functions of authentication and authorization. The manager has integrated the default implementation logic. If you want to realize the custom Shiro based authentication and authorization function in the inlong manager, you can carry out the plug-in development of relevant functions according to the following instructions."),(0,o.kt)("h2",{id:"dependency"},"Dependency"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add Maven Dependency",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>manager-common</artifactId>\n    <version>"+i.Y.inLongVersion+"</version>\n</dependency>\n")))),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Implement the following interfaces")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"org.apache.inlong.manager.common.auth.InlongShiro\n\npublic interface InlongShiro {\n\n    WebSecurityManager getWebSecurityManager();\n\n    AuthorizingRealm getShiroRealm();\n\n    WebSessionManager getWebSessionManager();\n\n    CredentialsMatcher getCredentialsMatcher();\n\n    ShiroFilterFactoryBean getShiroFilter(SecurityManager securityManager);\n\n    AuthorizationAttributeSourceAdvisor getAuthorizationAttributeSourceAdvisor(SecurityManager securityManager);\n\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Implement ",(0,o.kt)("em",{parentName:"li"}," InlongShiro "),' interface and specify the configuration in "@ conditionalonproperty"')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@ConditionalOnProperty(name = "type", prefix = "inlong.auth", havingValue = "Custom")\n@Component\npublic class InlongShiroImpl implements InlongShiro {\n   //todo\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Modify the application.properties under the manager web module")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"inlong.auth.type=Custom\n")))}d.isMDXComponent=!0}}]);