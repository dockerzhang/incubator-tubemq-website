"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6065],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(a),k=r,c=u["".concat(d,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(c,o(o({ref:t},s),{},{components:a})):n.createElement(c,o({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58601:(e,t,a)=>{a.d(t,{Y:()=>n});const n={inLongVersion:"1.2.0-incubating"}},2477:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var n=a(87462),r=(a(67294),a(3905)),l=a(58601);const o={title:"Kafka",sidebar_position:4},i=void 0,d={unversionedId:"data_node/extract_node/kafka",id:"version-1.2.0/data_node/extract_node/kafka",title:"Kafka",description:"Overview",source:"@site/versioned_docs/version-1.2.0/data_node/extract_node/kafka.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/kafka",permalink:"/docs/data_node/extract_node/kafka",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.2.0/data_node/extract_node/kafka.md",tags:[],version:"1.2.0",sidebarPosition:4,frontMatter:{title:"Kafka",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"File",permalink:"/docs/data_node/extract_node/file"},next:{title:"MongoDB-CDC",permalink:"/docs/data_node/extract_node/mongodb-cdc"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Supported Version",id:"supported-version",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Maven dependency",id:"maven-dependency",level:3},{value:"How to create a Kafka Extract Node",id:"how-to-create-a-kafka-extract-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"Kafka Extract Node Options",id:"kafka-extract-node-options",level:2},{value:"Available Metadata",id:"available-metadata",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Kafka Extract Node")," supports to read data from Kafka topics. It can support read data in the normal fashion and read data in the\nupsert fashion. The ",(0,r.kt)("inlineCode",{parentName:"p"},"upsert-kafka")," connector produces a ",(0,r.kt)("inlineCode",{parentName:"p"},"changelog stream"),", where each data record represents an ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," event. The ",(0,r.kt)("inlineCode",{parentName:"p"},"kafka-inlong")," connector can read data and metadata.  "),(0,r.kt)("h2",{id:"supported-version"},"Supported Version"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Extract Node"),(0,r.kt)("th",{parentName:"tr",align:null},"Kafka version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/data_node/extract_node/kafka"},"Kafka")),(0,r.kt)("td",{parentName:"tr",align:null},"0.10+")))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"In order to set up the ",(0,r.kt)("inlineCode",{parentName:"p"},"Kafka Extract Node"),", the following provides dependency information for both projects using a\nbuild automation tool (such as Maven or SBT) and SQL Client with Sort Connectors JAR bundles."),(0,r.kt)("h3",{id:"maven-dependency"},"Maven dependency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-kafka</artifactId>\n    <version>"+l.Y.inLongVersion+"</version>\n</dependency>\n")),(0,r.kt)("h2",{id:"how-to-create-a-kafka-extract-node"},"How to create a Kafka Extract Node"),(0,r.kt)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,r.kt)("p",null,"The example below shows how to create a Kafka Extract Node with ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink SQL")," :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"connector is ",(0,r.kt)("inlineCode",{parentName:"li"},"kafka-inlong"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Set checkpoint every 3000 milliseconds                       \nFlink SQL> SET 'execution.checkpointing.interval' = '3s';   \n\n-- Create a Kafka table 'kafka_extract_node' in Flink SQL\nFlink SQL> CREATE TABLE kafka_extract_node (\n           `id` INT,\n           `name` STRINTG\n           ) WITH (\n           'connector' = 'kafka-inlong',\n           'topic' = 'user',\n           'properties.bootstrap.servers' = 'localhost:9092',\n           'properties.group.id' = 'testGroup',\n           'scan.startup.mode' = 'earliest-offset',\n           'format' = 'csv'\n           )\n  \n-- Read data\nFlink SQL> SELECT * FROM kafka_extract_node;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"connector is ",(0,r.kt)("inlineCode",{parentName:"li"},"upsert-kafka"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Set checkpoint every 3000 milliseconds                       \nFlink SQL> SET 'execution.checkpointing.interval' = '3s';\n\n-- Create a Kafka table 'kafka_extract_node' in Flink SQL\nFlink SQL> CREATE TABLE kafka_extract_node (\n          `id` INT,\n          `name` STRINTG,\n           PRIMARY KEY (`id`) NOT ENFORCED\n          ) WITH (\n          'connector' = 'upsert-kafka',\n          'topic' = 'user',\n          'properties.bootstrap.servers' = 'localhost:9092',\n          'properties.group.id' = 'testGroup',\n          'scan.startup.mode' = 'earliest-offset',\n          'key.format' = 'csv',\n          'value.format' = 'csv'\n          )\n    \n-- Read data\nFlink SQL> SELECT * FROM kafka_extract_node;       \n")),(0,r.kt)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,r.kt)("p",null,"TODO: It will be supported in the future."),(0,r.kt)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,r.kt)("p",null,"TODO: It will be supported in the future."),(0,r.kt)("h2",{id:"kafka-extract-node-options"},"Kafka Extract Node Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connector"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify which connector to use, valid values are:  1. for the Upsert Kafka use: ",(0,r.kt)("inlineCode",{parentName:"td"},"upsert-kafka"),"  2. for normal Kafka use: ",(0,r.kt)("inlineCode",{parentName:"td"},"kafka-inlong"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Topic name(s) to read data from when the table is used as source. It also supports  topic list for source by separating topic by semicolon like ",(0,r.kt)("inlineCode",{parentName:"td"},"topic-1;topic-2"),". Note, only one of ",(0,r.kt)("inlineCode",{parentName:"td"},"topic-pattern")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"topic")," can be specified for sources.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic-pattern"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The regular expression for a pattern of topic names to read from. All topics with names that match the specified regular expression will be subscribed by the consumer when the job starts running. Note, only one of ",(0,r.kt)("inlineCode",{parentName:"td"},"topic-pattern")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"topic")," can be specified for sources.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"properties.bootstrap.servers"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Comma separated list of Kafka brokers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"properties.group.id"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the consumer group for Kafka source.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"properties.*"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"This can set and pass arbitrary Kafka configurations. Suffix names must match the configuration key defined in ",(0,r.kt)("a",{parentName:"td",href:"https://kafka.apache.org/documentation/#configuration"},"Kafka Configuration documentation"),". Flink will remove the ",(0,r.kt)("inlineCode",{parentName:"td"},"properties.")," key prefix and pass the transformed key and values to the underlying KafkaClient. For example, you can disable automatic topic creation via ",(0,r.kt)("inlineCode",{parentName:"td"},"properties.allow.auto.create.topics")," = ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),". But there are some configurations that do not support to set, because Flink will override them, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"key.deserializer")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"value.deserializer"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"format"),(0,r.kt)("td",{parentName:"tr",align:null},"required for normal kafka"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The format used to deserialize and serialize the value part of Kafka messages. Please refer to the formats page for more details and more ",(0,r.kt)("a",{parentName:"td",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/"},"format")," options. Note: Either this option or the ",(0,r.kt)("inlineCode",{parentName:"td"},"value.format")," option are required.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key.format"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The format used to deserialize and serialize the key part of Kafka messages. Please refer to the formats page for more details and more format options. Note: If a key format is defined, the 'key.fields' option is required as well. Otherwise the Kafka records will have an empty key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key.fields"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"List<String>")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines an explicit list of physical columns from the table schema that configure the data type for the key format. By default, this list is empty and thus a key is undefined. The list should look like 'field1;field2'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key.fields-prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines a custom prefix for all fields of the key format to avoid name clashes with fields of the value format. By default, the prefix is empty. If a custom prefix is defined, both the table schema and 'key.fields' will work with prefixed names. When constructing the data type of the key format, the prefix will be removed and the non-prefixed names will be used within the key format. Please note that this option requires that 'value.fields-include' must be set to 'EXCEPT_KEY'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value.format"),(0,r.kt)("td",{parentName:"tr",align:null},"required for upsert Kafka"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/"},"format")," used to deserialize and serialize the value part of Kafka messages. Please refer to the formats page for more details and more format options.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value.fields-include"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"ALL"),(0,r.kt)("td",{parentName:"tr",align:null},"Enum Possible values: ","[ALL, EXCEPT_KEY]"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines a strategy how to deal with key columns in the data type of the value format. By default, 'ALL' physical columns of the table schema will be included in the value format which means that key columns appear in the data type for both the key and value format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scan.startup.mode"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"group-offsets"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Startup mode for Kafka consumer, valid values are 'earliest-offset', 'latest-offset', 'group-offsets', 'timestamp' and 'specific-offsets'. See the following Start Reading Position for more details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scan.startup.specific-offsets"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify offsets for each partition in case of 'specific-offsets' startup mode, e.g. 'partition:0,offset:42;partition:1,offset:300'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scan.startup.timestamp-millis"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null},"Start from the specified epoch timestamp (milliseconds) used in case of 'timestamp' startup mode.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scan.topic-partition-discovery.interval"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"Duration"),(0,r.kt)("td",{parentName:"tr",align:null},"Interval for consumer to discover dynamically created Kafka topics and partitions periodically.")))),(0,r.kt)("h2",{id:"available-metadata"},"Available Metadata"),(0,r.kt)("p",null,"The following format metadata can be exposed as read-only (VIRTUAL) columns in a table definition. It supports read metadata for format ",(0,r.kt)("inlineCode",{parentName:"p"},"canal-json-inlong"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value.table_name"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the table that contain the row")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value.database_name"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the database that contain the row")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value.op_ts"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP(3)"),(0,r.kt)("td",{parentName:"tr",align:null},"It indicates the time that the change was made in the database. If the record is read from snapshot of the table instead of the binlog, the value is always 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value.op_type"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:null},"Operation type, INSERT/UPDATE/DELETE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value.batch_id"),(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.kt)("td",{parentName:"tr",align:null},"Not important, a simple increment counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value.is_ddl"),(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.kt)("td",{parentName:"tr",align:null},"Source does not emit ddl data, value is false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value.update_before"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ARRAY<MAP<STRING, STRING>>")),(0,r.kt)("td",{parentName:"tr",align:null},"The update-before data for UPDATE record")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value.mysql_type"),(0,r.kt)("td",{parentName:"tr",align:null},"MAP<STRING, STRING>"),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL field type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value.pk_names"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ARRAY<STRING>")),(0,r.kt)("td",{parentName:"tr",align:null},"Primary key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value.sql_type"),(0,r.kt)("td",{parentName:"tr",align:null},"MAP<STRING, INT>"),(0,r.kt)("td",{parentName:"tr",align:null},"SQL field type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value.ts"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP_LTZ(3)"),(0,r.kt)("td",{parentName:"tr",align:null},"The ts_ms field is used to store the information about the local time at which the connector processed/generated the event")))),(0,r.kt)("p",null,"The extended CREATE TABLE example demonstrates the syntax for exposing these metadata fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `kafka_extract_node` (\n      `id` INT,\n      `name` STRING,\n      `database_name` string METADATA FROM 'value.database_name',\n      `table_name`    string METADATA FROM 'value.table_name',\n      `op_ts`         timestamp(3) METADATA FROM 'value.op_ts',\n      `op_type` string METADATA FROM 'value.op_type',\n      `batch_id` bigint METADATA FROM 'value.batch_id',\n      `is_ddl` boolean METADATA FROM 'value.is_ddl',\n      `update_before` ARRAY<MAP<STRING, STRING>> METADATA FROM 'value.update_before',\n      `mysql_type` MAP<STRING, STRING> METADATA FROM 'value.mysql_type',\n      `pk_names` ARRAY<STRING> METADATA FROM 'value.pk_names',\n      `data` STRING METADATA FROM 'value.data',\n      `sql_type` MAP<STRING, INT> METADATA FROM 'value.sql_type',\n      `ingestion_ts` TIMESTAMP(3) METADATA FROM 'value.ts',\n) WITH (\n      'connector' = 'kafka-inlong',\n      'topic' = 'user',\n      'properties.bootstrap.servers' = 'localhost:9092',\n      'properties.group.id' = 'testGroup',\n      'scan.startup.mode' = 'earliest-offset',\n      'format' = 'canal-json-inlong'\n)\n")),(0,r.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.kt)("p",null,"Kafka stores message keys and values as bytes, so Kafka doesn\u2019t have schema or data types. The Kafka messages are deserialized and serialized by formats, e.g. csv, json, avro. Thus, the data type mapping is determined by specific formats. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/"},"Formats")," pages for more details."))}u.isMDXComponent=!0}}]);