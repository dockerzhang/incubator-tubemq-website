"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[15872],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),d=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=d(t.components);return a.createElement(l.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=d(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(g,i(i({ref:e},c),{},{components:n})):a.createElement(g,i({ref:e},c))}));function g(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[p]="string"==typeof t?t:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74485:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const r={title:"Sort Plugin",sidebar_position:3},i=void 0,s={unversionedId:"design_and_concept/how_to_extend_data_node_for_sort",id:"version-1.3.0/design_and_concept/how_to_extend_data_node_for_sort",title:"Sort Plugin",description:"Overview",source:"@site/versioned_docs/version-1.3.0/design_and_concept/how_to_extend_data_node_for_sort.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/how_to_extend_data_node_for_sort",permalink:"/docs/1.3.0/design_and_concept/how_to_extend_data_node_for_sort",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.3.0/design_and_concept/how_to_extend_data_node_for_sort.md",tags:[],version:"1.3.0",sidebarPosition:3,frontMatter:{title:"Sort Plugin",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Agent Plugin",permalink:"/docs/1.3.0/design_and_concept/how_to_write_plugin_agent"},next:{title:"Dashboard Plugin",permalink:"/docs/1.3.0/design_and_concept/how_to_write_plugin_dashboard"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Extend Extract Node",id:"extend-extract-node",level:2},{value:"Extend Load Node",id:"extend-load-node",level:2},{value:"Integrate Entrance",id:"integrate-entrance",level:2}],c={toc:d},p="wrapper";function u(t){let{components:e,...r}=t;return(0,o.kt)(p,(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"InLong Sort is an ETL service based on Apache Flink SQL, the powerful expressive power of Flink SQL brings high scalability and flexibility.\nBasically, the semantics supported by Flink SQL are supported by InLong Sort. In some scenarios, when the built-in functions of Flink SQL do not meet the requirements,\nthey can also be extended through various UDFs in InLong Sort. At the same time, it will be easier for those who have used SQL, especially Flink SQL, to get started."),(0,o.kt)("p",null,"This article describes how to extend a new source (abstracted as extract node in inlong) or a new sink (abstracted as load node in inlong) in InLong Sort.\nThe architecture of inlong sort can be represented by UML object relation diagram as:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sort_UML",src:n(93987).Z,width:"2576",height:"869"})),(0,o.kt)("p",null,"The concepts of each component are:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Name")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Group")),(0,o.kt)("td",{parentName:"tr",align:null},"data flow group, including multiple data flows, one group represents one data access")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Stream")),(0,o.kt)("td",{parentName:"tr",align:null},"data flow, a data flow has a specific flow direction")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"GroupInfo")),(0,o.kt)("td",{parentName:"tr",align:null},"encapsulation of data flow in sort. a groupinfo can contain multiple dataflowinfo")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"StreamInfo")),(0,o.kt)("td",{parentName:"tr",align:null},"abstract of data flow in sort, including various sources, transformations, destinations, etc.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Node")),(0,o.kt)("td",{parentName:"tr",align:null},"abstraction of data source, data transformation and data destination in data synchronization")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"ExtractNode")),(0,o.kt)("td",{parentName:"tr",align:null},"source-side abstraction for data synchronization")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"TransformNode")),(0,o.kt)("td",{parentName:"tr",align:null},"transformation process abstraction of data synchronization")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"LoadNode")),(0,o.kt)("td",{parentName:"tr",align:null},"destination abstraction for data synchronization")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"NodeRelationShip")),(0,o.kt)("td",{parentName:"tr",align:null},"abstraction of each node relationship in data synchronization")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"FieldRelationShip")),(0,o.kt)("td",{parentName:"tr",align:null},"abstraction of the relationship between upstream and downstream node fields in data synchronization")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"FieldInfo")),(0,o.kt)("td",{parentName:"tr",align:null},"node field")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"MetaFieldInfo")),(0,o.kt)("td",{parentName:"tr",align:null},"node meta fields")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Function")),(0,o.kt)("td",{parentName:"tr",align:null},"abstraction of transformation function")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"FunctionParam")),(0,o.kt)("td",{parentName:"tr",align:null},"input parameter abstraction of function")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"ConstantParam")),(0,o.kt)("td",{parentName:"tr",align:null},"constant parameters")))),(0,o.kt)("p",null,"To extend the extract node or load node, you need to do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Inherit the node class (such as MyExtractNode) and build specific extract or load usage logic;"),(0,o.kt)("li",{parentName:"ul"},"In a specific node class (such as MyExtractNode), specify the corresponding Flink connector;"),(0,o.kt)("li",{parentName:"ul"},"Use specific node classes in specific ETL implementation logic (such as MyExtractNode)")),(0,o.kt)("p",null,"In the second step, you can use the existing flick connector or extend it yourself. How to extend the flink connector, please refer to the official flink documentation",(0,o.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/datastream/overview/#datastream-connectors"},"DataStream Connectors "),"."),(0,o.kt)("h2",{id:"extend-extract-node"},"Extend Extract Node"),(0,o.kt)("p",null,"There are three steps to extend an ExtractNode: "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1"),"\uff1aInherit the ExtractNode class,the location of the class is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"inlong-sort/sort-common/src/main/java/org/apache/inlong/sort/protocol/node/ExtractNode.java\n")),(0,o.kt)("p",null,"Specify the connector in the implemented ExtractNode."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Java"},'// Inherit ExtractNode class and implement specific classes, such as MongoExtractNode\n@EqualsAndHashCode(callSuper = true)\n@JsonTypeName("MongoExtract")\n@Data\npublic class MongoExtractNode extends ExtractNode implements Serializable {\n    @JsonInclude(Include.NON_NULL)\n    @JsonProperty("primaryKey")\n    private String primaryKey;\n    ...\n\n    @JsonCreator\n    public MongoExtractNode(@JsonProperty("id") String id, ...) { ... }\n\n    @Override\n    public Map<String, String> tableOptions() {\n        Map<String, String> options = super.tableOptions();\n        // configure the specified connector, here is mongodb-cdc\n        options.put("connector", "mongodb-cdc");\n        ...\n        return options;\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2"),"\uff1aadd the Extract to JsonSubTypes in ExtractNode and Node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// add field in JsonSubTypes of ExtractNode and Node\n...\n@JsonSubTypes({\n        @JsonSubTypes.Type(value = MongoExtractNode.class, name = "mongoExtract")\n})\n...\npublic abstract class ExtractNode implements Node{...}\n\n...\n@JsonSubTypes({\n        @JsonSubTypes.Type(value = MongoExtractNode.class, name = "mongoExtract")\n})\npublic interface Node {...}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3"),"\uff1aExpand the Sort connector and check whether the corresponding connector already exists in the (",(0,o.kt)("inlineCode",{parentName:"p"},"InLong Agentinlong-sort/sort-connectors/mongodb-cdc"),") directory. If you haven't already,\nyou need to refer to the official flink documentation ",(0,o.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/datastream/overview/#datastream-connectors"},"DataStream Connectors")," to extend,\ndirectly call the existing flink-connector (such as",(0,o.kt)("inlineCode",{parentName:"p"},"inlong-sort/sort-connectors/mongodb-cdc"),") or implement the related connector by yourself."),(0,o.kt)("h2",{id:"extend-load-node"},"Extend Load Node"),(0,o.kt)("p",null,"There are three steps to extend an LoadNode: "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1"),"\uff1aInherit the LoadNode class, the location of the class is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"inlong-sort/sort-common/src/main/java/org/apache/inlong/sort/protocol/node/LoadNode.java\n")),(0,o.kt)("p",null,"specify the connector in the implemented LoadNode."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Inherit LoadNode class and implement specific classes, such as KafkaLoadNode\n@EqualsAndHashCode(callSuper = true)\n@JsonTypeName("kafkaLoad")\n@Data\n@NoArgsConstructor\npublic class KafkaLoadNode extends LoadNode implements Serializable {\n    @Nonnull\n    @JsonProperty("topic")\n    private String topic;\n    ...\n\n    @JsonCreator\n    public KafkaLoadNode(@Nonnull @JsonProperty("topic") String topic, ...) {...}\n\n    // configure and use different connectors according to different conditions\n    @Override\n    public Map<String, String> tableOptions() {\n      ...\n        if (format instanceof JsonFormat || format instanceof AvroFormat || format instanceof CsvFormat) {\n            if (StringUtils.isEmpty(this.primaryKey)) {\n                // kafka connector\n                options.put("connector", "kafka");\n                options.putAll(format.generateOptions(false));\n            } else {\n                options.put("connector", "upsert-kafka"); // upsert-kafka connector\n                options.putAll(format.generateOptions(true));\n            }\n        } else if (format instanceof CanalJsonFormat || format instanceof DebeziumJsonFormat) {\n            // kafka-inlong connector\n            options.put("connector", "kafka-inlong");\n            options.putAll(format.generateOptions(false));\n        } else {\n            throw new IllegalArgumentException("kafka load Node format is IllegalArgument");\n        }\n        return options;\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2"),"\uff1aadd the Load to JsonSubTypes in ExtractNode and Node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// add field in JsonSubTypes of LoadNode and Node\n...\n@JsonSubTypes({\n        @JsonSubTypes.Type(value = KafkaLoadNode.class, name = "kafkaLoad")\n})\n...\npublic abstract class LoadNode implements Node{...}\n\n...\n@JsonSubTypes({\n        @JsonSubTypes.Type(value = KafkaLoadNode.class, name = "kafkaLoad")\n})\npublic interface Node {...}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3"),"\uff1aExtend the Sort connector, Kafka's sort connector is in ",(0,o.kt)("inlineCode",{parentName:"p"},"inlong-sort/sort-connectors/kafka"),"."),(0,o.kt)("h2",{id:"integrate-entrance"},"Integrate Entrance"),(0,o.kt)("p",null,"To integrate extract and load into the InLong Sort mainstream, you need to implement the semantics mentioned in the overview section: group, stream, node, etc. The entry class of InLong Sort is in :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"inlong-sort/sort-core/src/main/java/org/apache/inlong/sort/Entrance.java\n")),(0,o.kt)("p",null,"How to integrate extract and load into InLong Sort can refer to the following ut. First, build the corresponding extractnode and loadnode, then build noderelation, streaminfo and groupinfo, and finally use FlinkSqlParser to execute."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class MongoExtractToKafkaLoad extends AbstractTestBase {\n\n    // create MongoExtractNode\n    private MongoExtractNode buildMongoNode() {\n        List<FieldInfo> fields = Arrays.asList(new FieldInfo("name", new StringFormatInfo()), ...);\n        return new MongoExtractNode(..., fields, ...);\n    }\n\n    // create KafkaLoadNode\n    private KafkaLoadNode buildAllMigrateKafkaNode() {\n        List<FieldInfo> fields = Arrays.asList(new FieldInfo("name", new StringFormatInfo()), ...);\n        List<FieldRelation> relations = Arrays.asList(new FieldRelation(new FieldInfo("name", new StringFormatInfo()), ...), ...);\n        CsvFormat csvFormat = new CsvFormat();\n        return new KafkaLoadNode(..., fields, relations, csvFormat, ...);\n    }\n\n    // create NodeRelation\n    private NodeRelation buildNodeRelation(List<Node> inputs, List<Node> outputs) {\n        List<String> inputIds = inputs.stream().map(Node::getId).collect(Collectors.toList());\n        List<String> outputIds = outputs.stream().map(Node::getId).collect(Collectors.toList());\n        return new NodeRelation(inputIds, outputIds);\n    }\n\n    // test the main flow: mongodb to kafka\n    @Test\n    public void testMongoDbToKafka() throws Exception {\n        EnvironmentSettings settings = EnvironmentSettings. ... .build();\n        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();\n        ...\n        StreamTableEnvironment tableEnv = StreamTableEnvironment.create(env, settings);\n        Node inputNode = buildMongoNode();\n        Node outputNode = buildAllMigrateKafkaNode();\n        StreamInfo streamInfo = new StreamInfo("1", Arrays.asList(inputNode, outputNode), ...);\n        GroupInfo groupInfo = new GroupInfo("1", Collections.singletonList(streamInfo));\n        FlinkSqlParser parser = FlinkSqlParser.getInstance(tableEnv, groupInfo);\n        ParseResult result = parser.parse();\n        Assert.assertTrue(result.tryExecute());\n    }\n}\n')))}u.isMDXComponent=!0},93987:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/sort_uml-d90bb6f0835781e064b7417f266b7b30.png"}}]);