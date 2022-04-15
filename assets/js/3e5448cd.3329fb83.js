"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4053],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},33831:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={title:"Dashboard Plugin",sidebar_position:5},s="Overview",p={unversionedId:"design_and_concept/how_to_write_plugin_dashboard",id:"design_and_concept/how_to_write_plugin_dashboard",title:"Dashboard Plugin",description:"This article is aimed at InLong-Dashboard plug-in developers, trying to describe the process of developing a Dashboard plug-in as comprehensively as possible, helping developers quickly add a data storage LoadNode, and making plug-in development easier.",source:"@site/docs/design_and_concept/how_to_write_plugin_dashboard.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/how_to_write_plugin_dashboard",permalink:"/docs/next/design_and_concept/how_to_write_plugin_dashboard",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/design_and_concept/how_to_write_plugin_dashboard.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Dashboard Plugin",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Manager Plugin",permalink:"/docs/next/design_and_concept/how_to_write_plugin_manager"},next:{title:"How to Build",permalink:"/docs/next/quick_start/how_to_build"}},d={},c=[{value:"Before",id:"before",level:2},{value:"Extend a new sink",id:"extend-a-new-sink",level:2}],u={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This article is aimed at InLong-Dashboard plug-in developers, trying to describe the process of developing a Dashboard plug-in as comprehensively as possible, helping developers quickly add a data storage LoadNode, and making plug-in development easier."),(0,a.kt)("h2",{id:"before"},"Before"),(0,a.kt)("p",null,"The InLong Dashboard itself acts as a front-end console, built with the React framework."),(0,a.kt)("h2",{id:"extend-a-new-sink"},"Extend a new sink"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"/inlong-dashboard/src/components/MetaData")," directory, create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"StorageExample.tsx")," file, and at the same time export the file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," file in the current directory (refer to the existing LoadNode writing method ), which completes a new sink named ",(0,a.kt)("inlineCode",{parentName:"p"},"Example"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// export in index\nexport const Storages: StoragesType[] = [\n  // ... omit existing code\n  {\n    label: 'Example',\n    value: 'Example',\n    ...StorageExample,\n  },\n];\n")),(0,a.kt)("p",null,"Next, we will introduce how to define the internal structure of the LoadNode."),(0,a.kt)("p",null,"In the definition of LoadNode, we can view the unified specification of our agreement through the type declaration in the ",(0,a.kt)("inlineCode",{parentName:"p"},"import type { GetStorageFormFieldsType, GetStorageColumnsType } from '@/utils/metaData';")," file, here we show a simplest LoadNode definition (emphasis inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"--Focus--")," tag):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { getColsFromFields, GetStorageFormFieldsType } from '@/utils/metaData';\nimport { ColumnsType } from 'antd/es/table';\nimport { excludeObject } from '@/utils';\n\nconst getForm: GetStorageFormFieldsType = (\n  type: 'form' | 'col' = 'form',\n  { currentValues, isEdit } = {} as any,\n) => {\n  // -- Focus Start --\n  const fileds = [\n    {\n      name: 'name',\n      type: 'input',\n      label: 'Name',\n      _inTable: true,\n    },\n    {\n      name: 'sex',\n      type: 'radio',\n      label: 'Sex',\n      initialValue: 'female',\n      props: {\n        options: [\n          {\n            label: 'female',\n            value: 'female',\n          },\n          {\n            label: 'male',\n            value: 'male',\n          },\n        ],\n        disabled: isEdit && [110, 130].includes(currentValues?.status),\n      },\n      _inTable: true,\n    },\n    {\n      name: 'age',\n      type: 'inputnumber',\n      label: 'Age',\n      props: {\n        min: 1,\n        max: 200,\n      },\n    },\n    // -- Focus End --\n  ];\n  // The following is a generic return\n  return type === 'col'\n    ? getColsFromFields(fileds)\n    : fileds.map(item => excludeObject(['_inTable'], item));\n};\n// The following is a generic export\nconst tableColumns = getForm('col') as ColumnsType;\n\nexport const StorageExample = {\n  getForm,\n  tableColumns,\n};\n")),(0,a.kt)("p",null,"In the above example, we define a sink of ",(0,a.kt)("inlineCode",{parentName:"p"},"Example"),", which consists of three fields: name, sex, age. The field name corresponds to the name attribute (the API interface field that interacts with the manager), and the type attribute represents the display on the front-end page. The input form usually includes input, inputnumber, radio, select and other forms. More complex display forms or the complete definition of the entire object can be obtained through the ts type description."))}m.isMDXComponent=!0}}]);