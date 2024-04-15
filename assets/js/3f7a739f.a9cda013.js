"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[35880],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=o(a),c=l,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(k,r(r({ref:t},s),{},{components:a})):n.createElement(k,r({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=c;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[m]="string"==typeof e?e:l,r[1]=d;for(var o=2;o<i;o++)r[o]=a[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6154:(e,t,a)=>{a.d(t,{Y:()=>n});const n={inLongVersion:"1.11.0-SNAPSHOT"}},19059:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var n=a(87462),l=(a(67294),a(3905));a(6154);const i={title:"Redis",sidebar_position:19},r=void 0,d={unversionedId:"data_node/load_node/redis",id:"version-1.11.0/data_node/load_node/redis",title:"Redis",description:"Summary",source:"@site/versioned_docs/version-1.11.0/data_node/load_node/redis.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/redis",permalink:"/docs/data_node/load_node/redis",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.11.0/data_node/load_node/redis.md",tags:[],version:"1.11.0",sidebarPosition:19,frontMatter:{title:"Redis",sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"Hudi",permalink:"/docs/data_node/load_node/hudi"},next:{title:"C++ SDK",permalink:"/docs/sdk/dataproxy-sdk/cpp"}},p={},o=[{value:"Summary",id:"summary",level:2},{value:"Data Type",id:"data-type",level:3},{value:"Plain",id:"plain",level:4},{value:"Hash",id:"hash",level:4},{value:"Set",id:"set",level:4},{value:"BitMap",id:"bitmap",level:4},{value:"SchemaMappingMode",id:"schemamappingmode",level:3},{value:"Dynamic",id:"dynamic",level:4},{value:"Static Prefix Match",id:"static-prefix-match",level:4},{value:"Static KV Pair",id:"static-kv-pair",level:4},{value:"SQL Demo",id:"sql-demo",level:3},{value:"Plain",id:"plain-1",level:4},{value:"Hash with Prefix Match",id:"hash-with-prefix-match",level:4},{value:"Hash with Static KV Pair",id:"hash-with-static-kv-pair",level:4},{value:"Hash with dynamic",id:"hash-with-dynamic",level:4},{value:"BitMap with static KV pair",id:"bitmap-with-static-kv-pair",level:4}],s={toc:o},m="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Redis Load")," Node supports writing data to redis."),(0,l.kt)("h3",{id:"data-type"},"Data Type"),(0,l.kt)("p",null,"See detail: ",(0,l.kt)("a",{parentName:"p",href:"https://redis.io/topics/data-types-intro"},"Redis Data Type")),(0,l.kt)("h4",{id:"plain"},"Plain"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"c1"),(0,l.kt)("th",{parentName:"tr",align:null},"c2"),(0,l.kt)("th",{parentName:"tr",align:null},"c3"),(0,l.kt)("th",{parentName:"tr",align:null},"c4"),(0,l.kt)("th",{parentName:"tr",align:null},"c5"),(0,l.kt)("th",{parentName:"tr",align:null},"c6"),(0,l.kt)("th",{parentName:"tr",align:null},"c7"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rowKey"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Redis strings commands are used for managing string values in Redis"),(0,l.kt)("p",null,"The first element is Redis row key,must be string type, and the remaining fields(",(0,l.kt)("inlineCode",{parentName:"p"},"c2"),"~",(0,l.kt)("inlineCode",{parentName:"p"},"c6"),") will be serialized into one value and put into Redis."),(0,l.kt)("h4",{id:"hash"},"Hash"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A Redis hash is a data type that represents a mapping between a string field and a string\nvalue. There are two members in hash DataType:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Redis Hash  "),(0,l.kt)("li",{parentName:"ul"},"Redis Hash value  ")),(0,l.kt)("h4",{id:"set"},"Set"),(0,l.kt)("p",null,"Redis SET are simply lists of strings, sorted by insertion order. You can add elements in Redis SET in the head or the tail of the list."),(0,l.kt)("h4",{id:"bitmap"},"BitMap"),(0,l.kt)("p",null,"BitMaps are not an actual data type, but a set of bit-oriented operations defined on the String type.Since strings are binary safe blobs and their maximum length is 512 MB, they are suitable to set up to 2^32 different bits.  "),(0,l.kt)("h3",{id:"schemamappingmode"},"SchemaMappingMode"),(0,l.kt)("h4",{id:"dynamic"},"Dynamic"),(0,l.kt)("p",null,"The DYNAMIC mode witch mapping a java.util.Map to RedisDataType. There are two members in DYNAMIC mode:  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Redis key"),(0,l.kt)("li",{parentName:"ul"},"java.util.Map object, witch will be iterated, the entry key is redis key, and the entry value is redis value.  ")),(0,l.kt)("h4",{id:"static-prefix-match"},"Static Prefix Match"),(0,l.kt)("p",null,"The are at least two fields, the first member is redis key, and each field from the second field represents a redis value.  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"key, field, value1, value2, value3, [value]...\n")),(0,l.kt)("h4",{id:"static-kv-pair"},"Static KV Pair"),(0,l.kt)("p",null,"There are two fields, the first field is key, and the other fields are pairs of field and value.  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"}," key, field1, value1,field2,value2,field3,value3,[field,value]...\n")),(0,l.kt)("h3",{id:"sql-demo"},"SQL Demo"),(0,l.kt)("h4",{id:"plain-1"},"Plain"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Plain only support STATIC_PREFIX_MATCH schema mapping mode")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sink (\n    key STRING,\n    aaa STRING,\n    bbb DOUBLE,    \n    ccc BIGINT,    \n    PRIMARY KEY (`key`) NOT ENFORCED\n) WITH (  \n    'connector' = 'redis-inlong',  \n    'sink.batch-size' = '1',  \n    'format' = 'csv',  \n    'data-type' = 'PLAIN',  \n    'redis-mode' = 'standalone',  \n    'host' = 'localhost',  \n    'port' = '56615',  \n    'maxIdle' = '8',  \n    'minIdle' = '1',  \n    'maxTotal' = '2',  \n    'timeout' = '2000'\n);\n")),(0,l.kt)("h4",{id:"hash-with-prefix-match"},"Hash with Prefix Match"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"c1"),(0,l.kt)("th",{parentName:"tr",align:null},"c2"),(0,l.kt)("th",{parentName:"tr",align:null},"c3"),(0,l.kt)("th",{parentName:"tr",align:null},"c4"),(0,l.kt)("th",{parentName:"tr",align:null},"c5"),(0,l.kt)("th",{parentName:"tr",align:null},"c6"),(0,l.kt)("th",{parentName:"tr",align:null},"c7"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rowKey"),(0,l.kt)("td",{parentName:"tr",align:null},"field: String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"The first element is Redis row key, must be string type.\nThe second element is Redis field name in Hash DataType.\nThe remaining fields(",(0,l.kt)("inlineCode",{parentName:"p"},"c2"),"~",(0,l.kt)("inlineCode",{parentName:"p"},"c7"),") will be serialized into one value and put into redis"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sink (\n    key STRING, \n    field_name STRING, \n    value_1 DOUBLE,\n    value_2 BIGINT, \n    PRIMARY KEY (`key`) NOT ENFORCED\n) WITH (\n   'connector' = 'redis-inlong',\n   'sink.batch-size' = '1',\n   'format' = 'csv',\n   'data-type' = 'HASH',\n   'redis-mode' = 'standalone',\n   'host' = 'localhost',\n   'port' = '56869',\n   'maxIdle' = '8',\n   'minIdle' = '1',\n   'maxTotal' = '2',\n   'timeout' = '2000'\n);\n")),(0,l.kt)("h4",{id:"hash-with-static-kv-pair"},"Hash with Static KV Pair"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"c1"),(0,l.kt)("th",{parentName:"tr",align:null},"c2"),(0,l.kt)("th",{parentName:"tr",align:null},"c3"),(0,l.kt)("th",{parentName:"tr",align:null},"c4"),(0,l.kt)("th",{parentName:"tr",align:null},"c5"),(0,l.kt)("th",{parentName:"tr",align:null},"c6"),(0,l.kt)("th",{parentName:"tr",align:null},"c7"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rowKey"),(0,l.kt)("td",{parentName:"tr",align:null},"field1: String"),(0,l.kt)("td",{parentName:"tr",align:null},"value 1:String"),(0,l.kt)("td",{parentName:"tr",align:null},"field 2: String"),(0,l.kt)("td",{parentName:"tr",align:null},"value 2:String"),(0,l.kt)("td",{parentName:"tr",align:null},"field 3: String"),(0,l.kt)("td",{parentName:"tr",align:null},"value 3:String")))),(0,l.kt)("p",null,"The first element is Redis row key, must be string type.\nThe odd elements(",(0,l.kt)("inlineCode",{parentName:"p"},"c2")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"c4")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"c6"),") are Redis field names in Hash DataType, must be String type.\nThe even elements(",(0,l.kt)("inlineCode",{parentName:"p"},"c3")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"c5")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"c7"),") are Redis field values in Hash DataType, must be String type."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sink (\n    key STRING,\n    field1 STRING,\n    value1 STRING,\n    field2 STRING,\n    value2 STRING,\n    PRIMARY KEY (`key`) NOT ENFORCED\n) WITH (\n  'connector' = 'redis-inlong',\n  'sink.batch-size' = '1',\n  'format' = 'csv',\n  'data-type' = 'HASH',\n  'schema-mapping-mode' = 'STATIC_KV_PAIR',\n  'redis-mode' = 'standalone',\n  'host' = 'localhost',\n  'port' = '6379',\n  'maxIdle' = '8',\n  'minIdle' = '1',\n  'maxTotal' = '2',\n  'timeout' = '2000'\n);\n")),(0,l.kt)("h4",{id:"hash-with-dynamic"},"Hash with dynamic"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"c1"),(0,l.kt)("th",{parentName:"tr",align:null},"c2"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rowKey"),(0,l.kt)("td",{parentName:"tr",align:null},"fieldValueMap")))),(0,l.kt)("p",null,"The first element is Redis row key, must be string type.\nThe second element is must be ",(0,l.kt)("inlineCode",{parentName:"p"},"Map<String,String>")," type: key is fieldName, value is fieldValue."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sink (\n    key STRING,\n    fieldValueMap MAP<STRING,STRING>,\n    PRIMARY KEY (`key`) NOT ENFORCED\n) WITH (\n  'connector' = 'redis-inlong',\n  'sink.batch-size' = '1',\n  'format' = 'csv',\n  'data-type' = 'HASH',\n  'schema-mapping-mode' = 'DYNAMIC',\n  'redis-mode' = 'standalone',\n  'host' = 'localhost',\n  'port' = '6379',\n  'maxIdle' = '8',\n  'minIdle' = '1',\n  'maxTotal' = '2',\n  'timeout' = '2000'\n)\"\n")),(0,l.kt)("h4",{id:"bitmap-with-static-kv-pair"},"BitMap with static KV pair"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"c1"),(0,l.kt)("th",{parentName:"tr",align:null},"c2"),(0,l.kt)("th",{parentName:"tr",align:null},"c3"),(0,l.kt)("th",{parentName:"tr",align:null},"c4"),(0,l.kt)("th",{parentName:"tr",align:null},"c5"),(0,l.kt)("th",{parentName:"tr",align:null},"c6"),(0,l.kt)("th",{parentName:"tr",align:null},"c7"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rowKey"),(0,l.kt)("td",{parentName:"tr",align:null},"field1: Long"),(0,l.kt)("td",{parentName:"tr",align:null},"value 1:Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"field 2: Long"),(0,l.kt)("td",{parentName:"tr",align:null},"value 2:Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"field 3: Long"),(0,l.kt)("td",{parentName:"tr",align:null},"value 3:Boolean")))),(0,l.kt)("p",null,"The first element is Redis row key, must be string type.\nThe odd elements(",(0,l.kt)("inlineCode",{parentName:"p"},"c2")," /",(0,l.kt)("inlineCode",{parentName:"p"},"c4")," /",(0,l.kt)("inlineCode",{parentName:"p"},"c6")," ) are Redis offsets in Bitmap DataType, must be Long type.\nThe even elements(",(0,l.kt)("inlineCode",{parentName:"p"},"c3")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"c5")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"c7"),") are Redis values in Bitmap DataType, must be Boolean type."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sink (\n    key STRING,\n    offset_1 BIGINT,\n    value_1 BOOLEAN,\n    offset_2 BIGINT,\n    value_2 BOOLEAN,\n    PRIMARY KEY (`key`) NOT ENFORCED\n) WITH (\n  'connector' = 'redis-inlong',\n  'sink.batch-size' = '1',\n  'format' = 'csv',\n  'data-type' = 'BITMAP',\n  'schema-mapping-mode' = 'STATIC_KV_PAIR',\n  'redis-mode' = 'standalone',\n  'host' = 'localhost',\n  'port' = '6379',\n  'maxIdle' = '8',\n  'minIdle' = '1',\n  'maxTotal' = '2',\n  'timeout' = '2000'\n)\n")))}u.isMDXComponent=!0}}]);