"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2060],{11754:function(e,t,l){l.r(t),l.d(t,{default:function(){return i}});var n=l(67855),a=l(67294),r=l(72389),c=(l(44996),JSON.parse('{"zh-CN":{"synopsis":["InLong \u56e2\u961f\u7531\u6210\u5458\u548c\u8d21\u732e\u8005\u7ec4\u6210\u3002 \u6210\u5458\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee InLong \u9879\u76ee\u7684\u6e90\u4ee3\u7801\u5e76\u79ef\u6781\u6539\u8fdb\u4ee3\u7801\u5e93\u3002","\u8d21\u732e\u8005\u901a\u8fc7\u5411\u6210\u5458\u63d0\u4ea4\u8865\u4e01\u548c\u5efa\u8bae\u6765\u6539\u8fdb\u9879\u76ee\u3002 \u8be5\u9879\u76ee\u7684\u8d21\u732e\u8005\u6570\u91cf\u4e0d\u9650\u3002 \u975e\u5e38\u611f\u8c22\u5bf9 InLong \u7684\u6240\u6709\u8d21\u732e\uff0c","\u65e0\u8bba\u662f\u5fae\u4e0d\u8db3\u9053\u7684\u6e05\u7406\u3001\u91cd\u5927\u7684\u65b0\u529f\u80fd\u8fd8\u662f\u5176\u4ed6\u7269\u8d28\u5956\u52b1\u3002 \u66f4\u591a\u8be6\u60c5\u8bf7\u770b\u8fd9\u91cc\u3002"],"members":"\u6210\u5458\u5305\u62ec\u9879\u76ee\u7ba1\u7406\u4f1a\u6210\u5458\u548c\u59d4\u5458\u3002\u8fd9\u4e2a\u540d\u5355\u662f\u6309\u5b57\u6bcd\u987a\u5e8f\u6392\u5217\u7684\u3002","code_contributors":"\u4ee3\u7801\u8d21\u732e\u8005\uff1a","doc_contributors":"\u6587\u6863\u8d21\u732e\u8005\uff1a"},"en":{"synopsis":["The InLong team is composed of members and contributors. Members can directly access the source code of the InLong project and actively improve the code base.","Contributors improve the project by submitting patches and suggestions to members. The number of contributors to the project is unlimited. Thank you very much for all","contributions to InLong, Whether it\'s trivial cleanup, major new features or other material rewards. For more details, please see here."],"members":"Members include members and committee members of the project management committee. This list is arranged in alphabetical order.","code_contributors":"Code contributors","doc_contributors":"Document contributors"}}')),u=l(42773),m=l(9669),o=l.n(m);function i(){var e=(0,r.Z)(),t=(0,a.useState)(!1),l=(t[0],t[1],(0,a.useState)(!1)),m=(l[0],l[1],e&&0===location.pathname.indexOf("/zh-CN/")?"zh-CN":"en"),i=null==c?void 0:c[m];e&&o()({url:"https://api.github.com/repos/apache/incubator-inlong/contributors",method:"get",headers:{Authorization:"token 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"},params:{per_page:100}}).then((function(e){for(var t,l=e.data,a=document.getElementById("conID"),r=(0,n.Z)(l);!(t=r()).done;){var c=t.value,u=document.createElement("li");u.className="mb-2",u.innerHTML="<a href='"+c.html_url+"' target='_blank'><img src='"+c.avatar_url+"'/><span>"+c.login+"</span></a>",a.appendChild(u)}})),e&&o()({url:"https://api.github.com/repos/apache/incubator-inlong-website/contributors",method:"get",headers:{Authorization:"token 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"},params:{per_page:100}}).then((function(e){for(var t,l=e.data,a=document.getElementById("docID"),r=(0,n.Z)(l);!(t=r()).done;){var c=t.value,u=document.createElement("li");u.className="mb-2",u.innerHTML="<a href='"+c.html_url+"' target='_blank'><img src='"+c.avatar_url+"'/><span>"+c.login+"</span></a>",a.appendChild(u)}}));return a.createElement(u.Z,null,a.createElement("div",{className:"team-div"},a.createElement("br",null),a.createElement("h1",null,"InLong Team"),a.createElement("div",null,a.createElement("p",null,i.synopsis[0]),a.createElement("p",null,i.synopsis[1]),a.createElement("p",null,i.synopsis[2])),a.createElement("h2",null,"Members"),a.createElement("p",null,i.members),a.createElement("table",null,a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,a.createElement("b",null,"Apache ID")),a.createElement("td",null,a.createElement("b",null,"GitHub User Name")),a.createElement("td",null,a.createElement("b",null,"Public Name"))),a.createElement("tr",null,a.createElement("td",null,"aloyszhang"),a.createElement("td",null,"aloyszhang"),a.createElement("td",null,"Aloys Zhang")),a.createElement("tr",null,a.createElement("td",null,"dockerzhang"),a.createElement("td",null,"dockerzhang"),a.createElement("td",null,"Charles Zhang")),a.createElement("tr",null,a.createElement("td",null,"gosonzhang"),a.createElement("td",null,"gosonzhang"),a.createElement("td",null,"Guocheng Zhang")),a.createElement("tr",null,a.createElement("td",null,"gxcheng"),a.createElement("td",null,"guangxuCheng"),a.createElement("td",null,"Guangxu Cheng")),a.createElement("tr",null,a.createElement("td",null,"jshao"),a.createElement("td",null,"jerryshao"),a.createElement("td",null,"Jerry Shao")),a.createElement("tr",null,a.createElement("td",null,"junjie"),a.createElement("td",null,"chenjunjiedada"),a.createElement("td",null,"Junjie Chen")),a.createElement("tr",null,a.createElement("td",null,"kaynewu"),a.createElement("td",null,"kaynewu"),a.createElement("td",null,"ZhongBo Wu")),a.createElement("tr",null,a.createElement("td",null,"ke4qqq"),a.createElement("td",null,"David"),a.createElement("td",null,"Nalley")),a.createElement("tr",null,a.createElement("td",null,"lamberliu"),a.createElement("td",null,"lamberliu"),a.createElement("td",null,"Lamber Liu")),a.createElement("tr",null,a.createElement("td",null,"osgooli"),a.createElement("td",null,"lizhiboo"),a.createElement("td",null,"Osgoo Li")),a.createElement("tr",null,a.createElement("td",null,"tison"),a.createElement("td",null,"tisonkun"),a.createElement("td",null,"Zili Chen")),a.createElement("tr",null,a.createElement("td",null,"xiangli"),a.createElement("td",null,"waterlx"),a.createElement("td",null,"Xiang Li")),a.createElement("tr",null,a.createElement("td",null,"yihengw"),a.createElement("td",null,"yiheng"),a.createElement("td",null,"Yiheng Wang")),a.createElement("tr",null,a.createElement("td",null,"zakwu"),a.createElement("td",null,"wf123537200"),a.createElement("td",null,"Zak Wu")))),a.createElement("h2",null,"Committer"),a.createElement("table",null,a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,a.createElement("b",null,"Apache ID")),a.createElement("td",null,a.createElement("b",null,"GitHub User Name")),a.createElement("td",null,a.createElement("b",null,"Public Name"))),a.createElement("tr",null,a.createElement("td",null,"technoboy"),a.createElement("td",null,"technoboy-"),a.createElement("td",null,"Guo Jiwei")),a.createElement("tr",null,a.createElement("td",null,"charleli"),a.createElement("td",null,"charlely"),a.createElement("td",null,"Haiji Li")),a.createElement("tr",null,a.createElement("td",null,"healchow"),a.createElement("td",null,"healchow"),a.createElement("td",null,"Heal Chow")),a.createElement("tr",null,a.createElement("td",null,"yuanbo"),a.createElement("td",null,"yuanboliu"),a.createElement("td",null,"Yuanbo Liu")),a.createElement("tr",null,a.createElement("td",null,"alfredlu"),a.createElement("td",null,"TszKitLo40"),a.createElement("td",null,"Zijie Lu")))),a.createElement("h2",null,"Contributors"),a.createElement("p",null,i.code_contributors),a.createElement("div",{className:"contributors-div"},a.createElement("ul",{id:"conID",className:"ul-flex"})),a.createElement("p",null,i.doc_contributors),a.createElement("div",{className:"contributors-div"},a.createElement("ul",{id:"docID",className:"ul-flex"}))))}}}]);