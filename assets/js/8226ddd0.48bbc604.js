"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[21201],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"Tenant Management",sidebar_position:3},o=void 0,l={unversionedId:"administration/multiple_tenant",id:"version-1.11.0/administration/multiple_tenant",title:"Tenant Management",description:"Overview",source:"@site/versioned_docs/version-1.11.0/administration/multiple_tenant.md",sourceDirName:"administration",slug:"/administration/multiple_tenant",permalink:"/docs/administration/multiple_tenant",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.11.0/administration/multiple_tenant.md",tags:[],version:"1.11.0",sidebarPosition:3,frontMatter:{title:"Tenant Management",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Approval Management",permalink:"/docs/administration/approval_management"},next:{title:"Contact Us",permalink:"/docs/contact"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Create a tenant",id:"create-a-tenant",level:2},{value:"Create tenant role",id:"create-tenant-role",level:2},{value:"Tenant switching",id:"tenant-switching",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,'Multi-tenancy is a software architecture pattern that allows a single application to serve multiple independent users or organizations (called "tenants") simultaneously.\nIn this model, each tenant is logically isolated from one another but shares the same underlying software infrastructure and resources.\nThis means that a single application instance can serve multiple tenants without the need to deploy and maintain the application separately for each tenant.\nIn order to address the requirements for permissions and resource isolation in multi-user scenarios, InLong introduced a multi-tenant architecture in version 1.8.0.'),(0,i.kt)("p",null,"For the implementation of InLong multi-tenancy, please refer to:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/issues/7914"},"https://github.com/apache/inlong/issues/7914")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Resources and permissions are isolated between different tenants, and users can only see resources under their tenant."),(0,i.kt)("li",{parentName:"ul"},"After upgrading from a lower version to version 1.8.0, all resources will be migrated to the ",(0,i.kt)("inlineCode",{parentName:"li"},"public")," tenant."))),(0,i.kt)("h2",{id:"create-a-tenant"},"Create a tenant"),(0,i.kt)("p",null,"Currently, only ",(0,i.kt)("strong",{parentName:"p"},"InLong Admins")," are allowed to create and modify tenants."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Tenant Management"),", and click ",(0,i.kt)("inlineCode",{parentName:"li"},"Create"),".\n",(0,i.kt)("img",{alt:"img.png",src:n(81175).Z,width:"1702",height:"832"})),(0,i.kt)("li",{parentName:"ul"},"Choose to ",(0,i.kt)("inlineCode",{parentName:"li"},"Create")," a new tenant.\n",(0,i.kt)("img",{alt:"img_1.png",src:n(66754).Z,width:"1709",height:"924"})),(0,i.kt)("li",{parentName:"ul"},"Complete the ",(0,i.kt)("inlineCode",{parentName:"li"},"Tenant Name")," and description, click ",(0,i.kt)("inlineCode",{parentName:"li"},"OK")," to finish creating the tenant.\n",(0,i.kt)("img",{alt:"img.png",src:n(45059).Z,width:"1712",height:"884"}),"\nThe tenant has been created at this point.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Currently only ",(0,i.kt)("inlineCode",{parentName:"p"},"InLong administrators")," are allowed to create and modify tenants.")),(0,i.kt)("h2",{id:"create-tenant-role"},"Create tenant role"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Tenant Management"),", and click ",(0,i.kt)("inlineCode",{parentName:"li"},"Create"),".\n",(0,i.kt)("img",{alt:"img.png",src:n(81175).Z,width:"1702",height:"832"})),(0,i.kt)("li",{parentName:"ul"},"Choose the target ",(0,i.kt)("inlineCode",{parentName:"li"},"Tenant Name"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"User Name"),", and the ",(0,i.kt)("inlineCode",{parentName:"li"},"Tenant Role")," you want to grant (if the tenant does not exist, please refer to ",(0,i.kt)("a",{parentName:"li",href:"#create-a-tenant"},"Create a tenant"),").\n",(0,i.kt)("img",{alt:"img.png",src:n(19570).Z,width:"1707",height:"878"})),(0,i.kt)("li",{parentName:"ul"},"After successful creation, you can see the tenants and their corresponding user roles in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Tenant Management"),".\n",(0,i.kt)("img",{alt:"img.png",src:n(36537).Z,width:"1717",height:"844"}))),(0,i.kt)("h2",{id:"tenant-switching"},"Tenant switching"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click the ",(0,i.kt)("inlineCode",{parentName:"li"},"Tenant")," field in the upper right corner and choose the tenant you switch to.\n",(0,i.kt)("img",{alt:"img.png",src:n(42783).Z,width:"1716",height:"909"}))))}m.isMDXComponent=!0},81175:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create_tenant_1-7137cbaf864c9b72b22547a187f73e64.png"},66754:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create_tenant_2-c8256d6e5fcad828850ece8c214d44a4.png"},45059:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create_tenant_3-1c72bf9b063c77154b2faa617eac1cbb.png"},19570:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create_tenant_role_1-59777a6a47a6cc684c7ff92f2e791d8f.png"},36537:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create_tenant_role_2-ed95d3eb70cb1cf596336c79d658dfe7.png"},42783:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create_tenant_role_3-33f3b047b36273c3ec7737803e2cf99a.png"}}]);