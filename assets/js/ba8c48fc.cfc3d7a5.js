"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[939],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),d=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return o.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return t?o.createElement(f,i(i({ref:n},p),{},{components:t})):o.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},32475:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=t(87462),r=(t(67294),t(3905));const a={title:"Dashboard Plugin",sidebar_position:4},i=void 0,l={unversionedId:"design_and_concept/how_to_write_plugin_dashboard",id:"version-1.2.0/design_and_concept/how_to_write_plugin_dashboard",title:"Dashboard Plugin",description:"Overview",source:"@site/versioned_docs/version-1.2.0/design_and_concept/how_to_write_plugin_dashboard.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/how_to_write_plugin_dashboard",permalink:"/docs/design_and_concept/how_to_write_plugin_dashboard",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.2.0/design_and_concept/how_to_write_plugin_dashboard.md",tags:[],version:"1.2.0",sidebarPosition:4,frontMatter:{title:"Dashboard Plugin",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Sort Plugin",permalink:"/docs/design_and_concept/how_to_extend_data_node_for_sort"},next:{title:"Manager Plugin",permalink:"/docs/design_and_concept/how_to_extend_data_node_for_manager"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Extend a new Load Node",id:"extend-a-new-load-node",level:2}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This article is aimed at InLong Dashboard plug-in developers, trying to describe the process of developing a Dashboard plug-in as comprehensively as possible, helping developers quickly add a data storage LoadNode, and making plug-in development easier.\nThe InLong Dashboard itself acts as a front-end console, built with the React framework."),(0,r.kt)("h2",{id:"extend-a-new-load-node"},"Extend a new Load Node"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"inlong-dashboard/src/components/MetaData")," directory, create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageExample.tsx")," file, and at the same time export the file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," file in the current directory (refer to the existing LoadNode writing method ), which completes a new sink named ",(0,r.kt)("inlineCode",{parentName:"p"},"Example"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// export in index\nexport const Storages: StoragesType[] = [\n  // ... omit existing code\n  {\n    label: 'Example',\n    value: 'Example',\n    ...StorageExample,\n  },\n];\n")),(0,r.kt)("p",null,"Next, we will introduce how to define the internal structure of the LoadNode."),(0,r.kt)("p",null,"In the definition of LoadNode, we can view the unified specification of our agreement through the type declaration in the ",(0,r.kt)("inlineCode",{parentName:"p"},"import type { GetStorageFormFieldsType, GetStorageColumnsType } from '@/utils/metaData';")," file, here we show a simplest LoadNode definition (emphasis inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"--Focus--")," tag):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { getColsFromFields, GetStorageFormFieldsType } from '@/utils/metaData';\nimport { ColumnsType } from 'antd/es/table';\nimport { excludeObject } from '@/utils';\n\nconst getForm: GetStorageFormFieldsType = (\n  type: 'form' | 'col' = 'form',\n  { currentValues, isEdit } = {} as any,\n) => {\n  // -- Focus Start --\n  const fileds = [\n    {\n      name: 'name',\n      type: 'input',\n      label: 'Name',\n      _inTable: true,\n    },\n    {\n      name: 'sex',\n      type: 'radio',\n      label: 'Sex',\n      initialValue: 'female',\n      props: {\n        options: [\n          {\n            label: 'female',\n            value: 'female',\n          },\n          {\n            label: 'male',\n            value: 'male',\n          },\n        ],\n        disabled: isEdit && [110, 130].includes(currentValues?.status),\n      },\n      _inTable: true,\n    },\n    {\n      name: 'age',\n      type: 'inputnumber',\n      label: 'Age',\n      props: {\n        min: 1,\n        max: 200,\n      },\n    },\n    // -- Focus End --\n  ];\n  // The following is a generic return\n  return type === 'col'\n    ? getColsFromFields(fileds)\n    : fileds.map(item => excludeObject(['_inTable'], item));\n};\n// The following is a generic export\nconst tableColumns = getForm('col') as ColumnsType;\n\nexport const StorageExample = {\n  getForm,\n  tableColumns,\n};\n")),(0,r.kt)("p",null,"In the above example, we define a sink of ",(0,r.kt)("inlineCode",{parentName:"p"},"Example"),", which consists of three fields: name, sex, age. The field name corresponds to the name attribute (the API interface field that interacts with the manager), and the type attribute represents the display on the front-end page. The input form usually includes input, inputnumber, radio, select and other forms. More complex display forms or the complete definition of the entire object can be obtained through the ts type description."))}c.isMDXComponent=!0}}]);