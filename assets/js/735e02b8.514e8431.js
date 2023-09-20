"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[81544],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={title:"Dashboard Plugin",sidebar_position:5},o=void 0,s={unversionedId:"design_and_concept/how_to_write_plugin_dashboard",id:"version-1.6.0/design_and_concept/how_to_write_plugin_dashboard",title:"Dashboard Plugin",description:"Overview",source:"@site/versioned_docs/version-1.6.0/design_and_concept/how_to_write_plugin_dashboard.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/how_to_write_plugin_dashboard",permalink:"/docs/1.6.0/design_and_concept/how_to_write_plugin_dashboard",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.6.0/design_and_concept/how_to_write_plugin_dashboard.md",tags:[],version:"1.6.0",sidebarPosition:5,frontMatter:{title:"Dashboard Plugin",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Sort Plugin",permalink:"/docs/1.6.0/design_and_concept/how_to_extend_data_node_for_sort"},next:{title:"Manager Plugin",permalink:"/docs/1.6.0/design_and_concept/how_to_extend_data_node_for_manager"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Basic",id:"basic",level:2},{value:"Design Summary",id:"design-summary",level:3},{value:"Directory Structure",id:"directory-structure",level:3},{value:"Data Class",id:"data-class",level:3},{value:"View Class",id:"view-class",level:3},{value:"Example",id:"example",level:3},{value:"Extend ExtractNode",id:"extend-extractnode",level:2},{value:"Extend LoadNode",id:"extend-loadnode",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This article is aimed at InLong Dashboard plug-in developers, trying to describe the process of developing a Dashboard plug-in as comprehensively as possible, helping developers quickly add a data storage LoadNode, and making plug-in development easier.\nThe InLong Dashboard itself acts as a front-end console, built with the React framework."),(0,i.kt)("h2",{id:"basic"},"Basic"),(0,i.kt)("h3",{id:"design-summary"},"Design Summary"),(0,i.kt)("p",null,"This is a schematic diagram of the design of the InLong Dashboard plugin. We treat the plugin as a separate level, and each page uses different plugins for consumption. Data and View are abstract classes provided by the system, and plugins are derived classes one by one."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dashboard_Plugin",src:n(4569).Z,width:"754",height:"462"})),(0,i.kt)("h3",{id:"directory-structure"},"Directory Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"|\n|- defaults: default public plugins provided by the InLong community\n|- extends: The extension plug-in during privatization deployment, as an internal plug-in, will not be released to the community\n|- common: the common design of the plugin, e.g. the design of `BasicInfo`\n")),(0,i.kt)("h3",{id:"data-class"},"Data Class"),(0,i.kt)("p",null,"We provide two basic data classes, and each plugin can only implement one of them to implement the data model. At the same time, in the basic data class, a ",(0,i.kt)("inlineCode",{parentName:"p"},"@I18n")," is provided, which can be used to describe the field."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DataStatic static data class"),(0,i.kt)("li",{parentName:"ul"},"DataWithBackend communicates with the backend data class")),(0,i.kt)("h3",{id:"view-class"},"View Class"),(0,i.kt)("p",null,"On the view, we provide two basic view classes, each plugin can implement one or more of them to implement the view model."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"RenderRow, in which ",(0,i.kt)("inlineCode",{parentName:"li"},"@FieldDecorator")," is provided to describe the row data view"),(0,i.kt)("li",{parentName:"ul"},"RenderList, in which ",(0,i.kt)("inlineCode",{parentName:"li"},"@ColumnDecorator")," is provided to describe the column data view")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"Below is a basic example, in the plugin, a class that communicates with backend is implemented, containing 3 fields (username, password, format). Among them, ",(0,i.kt)("inlineCode",{parentName:"p"},"BasicInfo")," comes from their different base type classes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { DataWithBackend } from '@/metas/DataWithBackend';\nimport { RenderRow } from '@/metas/RenderRow';\nimport { RenderList } from '@/metas/RenderList';\nimport { BasicInfo } from '../common/BasicInfo';\n\nconst { I18n } = DataWithBackend;\nconst { FieldDecorator } = RenderRow;\nconst { ColumnDecorator } = RenderList;\n\nexport default class Example extends BasicInfo implements DataWithBackend, RenderRow, RenderList {\n  @FieldDecorator({\n    type: 'input',\n    rules: [{ required: true }],\n  })\n  @I18n('meta.Sinks.Username')\n  username: string;\n\n  @FieldDecorator({\n    type: 'password',\n    rules: [{ required: true }],\n  })\n  @I18n('meta.Sinks.Password')\n  password: string;\n\n  @FieldDecorator({\n    type: 'radio',\n    initialValue: 'TextFile',\n    rules: [{ required: true }],\n    props: {\n      options: [\n        {\n          label: 'TextFile',\n          value: 'TextFile',\n        },\n        {\n          label: 'SequenceFile',\n          value: 'SequenceFile',\n        },\n      ],\n    },\n  })\n  @I18n('meta.Sinks.Example.Format')\n  format: string;\n}\n")),(0,i.kt)("h2",{id:"extend-extractnode"},"Extend ExtractNode"),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"inlong-dashboard/src/metas/sources/defaults")," directory, create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Example.ts")," file as a new plugin, and export it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.ts")," file in the current directory (refer to Existing writing method), which completes a new ExtractNode named ",(0,i.kt)("inlineCode",{parentName:"p"},"Example"),"."),(0,i.kt)("h2",{id:"extend-loadnode"},"Extend LoadNode"),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"inlong-dashboard/src/metas/sinks/defaults")," directory, create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Example.ts")," file as a new plugin, and export it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.ts")," file in the current directory (refer to The existing writing method), which completes a new LoadNode named ",(0,i.kt)("inlineCode",{parentName:"p"},"Example"),"."))}u.isMDXComponent=!0},4569:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dashboard_plugin-d1937ae225705973c130bc310fd47705.png"}}]);