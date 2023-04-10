"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[32604],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>b});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),s=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(d.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=o,b=c["".concat(d,".").concat(m)]||c[m]||u[m]||a;return t?n.createElement(b,i(i({ref:r},p),{},{components:t})):n.createElement(b,i({ref:r},p))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},41526:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const a={title:"Deployment",sidebar_position:2},i=void 0,l={unversionedId:"modules/dashboard/quick_start",id:"modules/dashboard/quick_start",title:"Deployment",description:"Option 1 : Dashboard in Docker",source:"@site/docs/modules/dashboard/quick_start.md",sourceDirName:"modules/dashboard",slug:"/modules/dashboard/quick_start",permalink:"/docs/next/modules/dashboard/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/modules/dashboard/quick_start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Deployment",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/next/modules/dashboard/overview"},next:{title:"Overview",permalink:"/docs/next/modules/sort-standalone/overview"}},d={},s=[{value:"Option 1 : Dashboard in Docker",id:"option-1--dashboard-in-docker",level:2},{value:"Prepare Docker Image",id:"prepare-docker-image",level:3},{value:"Run",id:"run",level:3},{value:"Option 2 : Dashboard in Nginx",id:"option-2--dashboard-in-nginx",level:2}],p={toc:s},c="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(c,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"option-1--dashboard-in-docker"},"Option 1 : Dashboard in Docker"),(0,o.kt)("h3",{id:"prepare-docker-image"},"Prepare Docker Image"),(0,o.kt)("p",null,"pull image from central hub\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker pull inlong/dashboard:latest\n")),(0,o.kt)("h3",{id:"run"},"Run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# MANAGER_API_ADDRESS must be replaced by inlong-manager address\ndocker run -d --name dashboard -e MANAGER_API_ADDRESS=127.0.0.1:8083 -p 80:80 inlong/dashboard\n")),(0,o.kt)("h2",{id:"option-2--dashboard-in-nginx"},"Option 2 : Dashboard in Nginx"),(0,o.kt)("p",null,"For example, please replace the value according to the path of ",(0,o.kt)("inlineCode",{parentName:"p"},"inlong-dashboard")," and the manager service address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"server {\nlisten       80;\nlisten       [::]:80;\nserver_name  _;\nroot         ${dashboard_installed_path};\n# API prefix of InlongManager\nlocation /inlong/manager {\nproxy_pass      http://{manager_api_address};\n}\n}\n")))}u.isMDXComponent=!0}}]);