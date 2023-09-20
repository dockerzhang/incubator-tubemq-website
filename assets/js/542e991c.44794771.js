"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[28455],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return t?a.createElement(h,l(l({ref:n},c),{},{components:t})):a.createElement(h,l({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},47087:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=t(87462),i=(t(67294),t(3905));const r={title:"Agent Plugin",sidebar_position:3},l=void 0,o={unversionedId:"design_and_concept/how_to_write_plugin_agent",id:"version-1.7.0/design_and_concept/how_to_write_plugin_agent",title:"Agent Plugin",description:"Overview",source:"@site/versioned_docs/version-1.7.0/design_and_concept/how_to_write_plugin_agent.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/how_to_write_plugin_agent",permalink:"/docs/1.7.0/design_and_concept/how_to_write_plugin_agent",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.7.0/design_and_concept/how_to_write_plugin_agent.md",tags:[],version:"1.7.0",sidebarPosition:3,frontMatter:{title:"Agent Plugin",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Format",permalink:"/docs/1.7.0/design_and_concept/the_format_in_inlong"},next:{title:"Sort Plugin",permalink:"/docs/1.7.0/design_and_concept/how_to_extend_data_node_for_sort"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Concepts and Models",id:"concepts-and-models",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Development Process",id:"development-process",level:2},{value:"Interface",id:"interface",level:2},{value:"Reader",id:"reader",level:3},{value:"Sink",id:"sink",level:3},{value:"Source",id:"source",level:3},{value:"Job",id:"job",level:3},{value:"Job Definition",id:"job-definition",level:2},{value:"Message",id:"message",level:2}],c={toc:d},p="wrapper";function u(e){let{components:n,...r}=e;return(0,i.kt)(p,(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"In Standard Architecture, we can collect various types of data through InLong Agent. InLong Agent supports extending new collection types in the form of plug-ins. This article will guide developers on customizing the new Agent collection plug-ins."),(0,i.kt)("h2",{id:"concepts-and-models"},"Concepts and Models"),(0,i.kt)("p",null,"InLong Agent is a data collection framework, adopted ",(0,i.kt)("inlineCode",{parentName:"p"},"Job")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"Task")," architectural model. And abstract data source reading and writing into Reader/Sink plugins."),(0,i.kt)("p",null,"Developers need to be clear about the concepts of Job and Task:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Job"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Job")," is used by Agent to describe the synchronization job from a source to a destination, and is the smallest business unit of Agent data synchronization. For example: read all files in a file directory"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Task"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Task")," is the smallest execution unit obtained by splitting ",(0,i.kt)("inlineCode",{parentName:"li"},"Job"),". For example, if there are multiple files in the folder that need to be read, then a job will be split into multiple tasks, and each task will read the corresponding file")),(0,i.kt)("p",null,"A Task contains the following components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reader: a data collection module, which is responsible for collecting data from the data source and sending the data to the Channel."),(0,i.kt)("li",{parentName:"ul"},"Sink: a data writing module, responsible for continuously fetching data from the Channel and writing the data to the destination."),(0,i.kt)("li",{parentName:"ul"},"Channel: connect Reader and Sink, as a data transmission channel for both, and plays a role in monitoring data writing and reading.")),(0,i.kt)("p",null,"When extending an Agent plugin, you need to develop specific Source, Reader and Sink. If the data needs to be persisted to the local disk, use the persistent Channel, otherwise use the memory Channel"),(0,i.kt)("h2",{id:"demonstration"},"Demonstration"),(0,i.kt)("p",null,"The Job/Task/Reader/Sink/Channel concept introduced above can be represented by the following figure:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("p",null,(0,i.kt)("img",{src:t(91977).Z,width:"402",height:"428"}))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The user submits a Job (via the manager), and the Job defines the Source, Channel, and Sink that need to be used (defined by the fully qualified name of the class)"),(0,i.kt)("li",{parentName:"ul"},"The framework starts the Job and creates the Source through the reflection mechanism"),(0,i.kt)("li",{parentName:"ul"},"The framework starts the Source and calls the Split interface of the Source to generate one or more Tasks"),(0,i.kt)("li",{parentName:"ul"},"When a Task is generated, a Reader (a type of Source will generate a corresponding reader), a User-configured Channel and a User-configured Sink are generated at the same time"),(0,i.kt)("li",{parentName:"ul"},"Task starts to execute, Reader starts to read data to Channel, Sink fetches data from Channel and sends it"),(0,i.kt)("li",{parentName:"ul"},"All the information needed for Job and Task execution is encapsulated in the JobProfile")),(0,i.kt)("h2",{id:"development-process"},"Development Process"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First develop Source, implement split logic, and return ReaderList"),(0,i.kt)("li",{parentName:"ul"},"The developed Reader implements the logic of reading data and writing to Channel"),(0,i.kt)("li",{parentName:"ul"},"The sink under development implements the logic of fetching data from the channel and writing it to the specified sink")),(0,i.kt)("h2",{id:"interface"},"Interface"),(0,i.kt)("p",null,"The following will introduce the classes and interfaces you need to know to develop an Agent plug-in."),(0,i.kt)("h3",{id:"reader"},"Reader"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'private class ReaderImpl implements Reader {\n\n    private int count = 0;\n\n    @Override\n    public Message read() {\n        count += 1;\n        return new DefaultMessage("".getBytes(StandardCharsets.UTF_8));\n    }\n\n    @Override\n    public boolean isFinished() {\n        return count > 99999;\n    }\n\n    @Override\n    public String getReadSource() {\n        return null;\n    }\n\n    @Override\n    public void setReadTimeout(long mill) {\n\n    }\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Reader")," interface functions as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"read"),": Called by a single Task, and returns a read message after the call, and the message inside the Agent is encapsulated by Message"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isFinished"),": judge whether the reading is completed, for example: if it is an SQL task, judge whether all the contents in the ResultSet have been read; if it is a file task, judge whether there is still data written after the waiting time set by the user"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getReadSource"),": Get the acquisition source, for example: if it is a file task, it will return the file name currently read"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setReadTimeout"),": set read timeout")),(0,i.kt)("h3",{id:"sink"},"Sink"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface Sink extends Stage {\n\n    /**\n     * Write data into data center\n     *\n     * @param message - message\n     */\n    void write(Message message);\n\n    /**\n     * set source file name where the message is generated\n     * @param sourceName\n     */\n    void setSourceName(String sourceName);\n\n    /**\n     * every sink should include a message filter to filter out stream id\n     */\n    MessageFilter initMessageFilter(JobProfile jobConf);\n}\n\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Sink")," interface functions as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"write"),": called by a single Task, reads a message from the Channel in the Task and writes it to a specific storage medium. Taking PulsarSink as an example, it needs to be sent to Pulsar through PulsarSender"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setSourceName"),": set the data source name, if it is a file, the file name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initMessageFilter"),": Initialize MessageFilter , the user can create a message filter to filter each message by setting agent.message.filter.classname in the Job configuration file. For details, please refer to the MessageFilter interface")),(0,i.kt)("h3",{id:"source"},"Source"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Source can be split into multiple reader.\n */\npublic interface Source {\n\n    /**\n     * Split source into a list of readers.\n     *\n     * @param conf job conf\n     * @return - list of reader\n     */\n    List<Reader> split(JobProfile conf);\n}\n\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Source")," interface functions as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"split"),": Called by a single job to generate multiple Readers, for example: a read file task, matching multiple files in a folder, when the job starts, it will specify TextFileSource as the Source entry,\nAfter calling the split function, TextFileSource will detect how many paths match the path matching expression in the folder set by the user, and generate TextFileReader to read")),(0,i.kt)("h3",{id:"job"},"Job"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class xxJob {\n    \n  private String username;\n  private String password;\n  private String hostname;\n  private String port;\n  private String database;\n  // ...\n  \n  public static class xxJobConfig {\n\n    private String username;\n    private String password;\n    private String hostname;\n    private String port;\n    private String database;\n    // ...\n  }\n}\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The fields in ",(0,i.kt)("inlineCode",{parentName:"li"},"config")," come from the manager and need to be consistent with the manager fields. When submitting the task, convert it into the corresponding job")),(0,i.kt)("h2",{id:"job-definition"},"Job Definition"),(0,i.kt)("p",null,"The code is written, have you ever wondered how the framework finds the entry class of the plugin? How does the framework load plugins?"),(0,i.kt)("p",null,"When submitting a task, you will find information about the plugin defined in the task, including the entry class. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n"job": {\n"name": "fileAgentTest",\n"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n}\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"source"),": The fully qualified name of the Source class, the instance of which the framework imports the plugin through reflection."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sink"),": The fully qualified name of the Sink class, the instance of which the framework imports through the reflection plugin."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"channel"),": The name of the Channel class used by the framework, the instance of the entry class of the plugin through reflection.")),(0,i.kt)("h2",{id:"message"},"Message"),(0,i.kt)("p",null,"Like the general ",(0,i.kt)("inlineCode",{parentName:"p"},"producer-consumer")," model, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Reader")," plugin and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Sink")," plugin also use ",(0,i.kt)("inlineCode",{parentName:"p"},"channel")," to achieve data transmission.\n",(0,i.kt)("inlineCode",{parentName:"p"},"channel")," can be in-memory or persistent, plugins don't have to care. Plugins write data to ",(0,i.kt)("inlineCode",{parentName:"p"},"channel")," through ",(0,i.kt)("inlineCode",{parentName:"p"},"RecordSender")," and read data from ",(0,i.kt)("inlineCode",{parentName:"p"},"channel")," through ",(0,i.kt)("inlineCode",{parentName:"p"},"RecordReceiver"),"."),(0,i.kt)("p",null,"A piece of data in ",(0,i.kt)("inlineCode",{parentName:"p"},"channel")," is a ",(0,i.kt)("inlineCode",{parentName:"p"},"Message")," object, ",(0,i.kt)("inlineCode",{parentName:"p"},"Message")," contains a byte array and attribute data represented by a Map"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Message")," has the following methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface Message {\n\n    /**\n     * Data content of message.\n     *\n     * @return bytes body\n     */\n    byte[] getBody();\n\n    /**\n     * Data attribute of message\n     *\n     * @return map header\n     */\n    Map<String, String> getHeader();\n}\n")),(0,i.kt)("p",null,"Developers can expand customized Message according to this interface. For example, ProxyMessage contains InLongGroupId, InLongStreamId and other attributes"))}u.isMDXComponent=!0},91977:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Agent_Flow-586d489bc82748d2a9d29491d176200d.png"}}]);