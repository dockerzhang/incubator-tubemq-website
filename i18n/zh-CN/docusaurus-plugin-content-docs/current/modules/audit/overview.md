---
title: 总览
sidebar_position: 1
---

* InLong审计是独立于InLong的一个子系统，对InLong系统的Agent、DataProxy、Sort模块的入流量、出流量进行实时审计对账。
* 对账的粒度有分钟、10分钟、30分钟、小时、天等等。

审计对账以日志上报时间为统一的口径，参与审计的各个服务将按照相同的日志时间进行实时对账。通过审计对账，我们可以清晰的了解InLong
各个模块的传输情况，以及数据流是否有丢失或者重复

## 架构
![](img/audit_architecture.png)
1. 审计SDK嵌套在需要审计的服务，对服务进行审计，将审计结果发送到审计接入层。
2. 审计接入层将审计数据写到 MQ(Pulsar、Kafka 或者 TubeMQ)。
3. 分发服务消费 MQ 的审计数据，将审计数据写到 MySQL、Elasticsearch、ClickHouse、StarRocks。
4. 接口层将 MySQL、Elasticsearch、ClickHouse、StarRocks的数据进行实时聚合并且cache,对外提供OpenAPI。
5. 应用场景主要包括报表展示、审计对账等等。
6. 支持数据补录场景的审计对账。
7. 支持Flink checkpoint场景的审计对账。

## 审计维度
| | | || | | | | | |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 机器ip |  容器ID | 线程ID | 日志时间(分钟) | 审计ID | inlong_group_id | inlong_stream_id | 条数 | 大小 | 传输时延(ms) |

## 审计项ID
每个模块的接收与发送分别为一个独立的审计项ID

|Inlong服务模块 |审计ID |
|----|----|
|Inlong api接收成功	|1 |
|Inlong api发送成功	|2|
|Inlong agent接收成功	|3|
|Inlong agent发送成功	|4|
|Inlong DataProxy接收成功	|5|
|Inlong DataProxy发送成功	|6|
|Inlong分发服务1接收成功	|7|
|Inlong分发服务1发送成功	|8|
|Inlong分发服务2接收成功	|9|
|Inlong分发服务2发送成功	|10|

## 数据传输协议
sdk、接入层、分发层之间的传输协议为Protocol Buffers
```markdown
syntax = "proto3";

package org.apache.inlong.audit.protocol;

message BaseCommand {
    enum Type {
        PING          = 0;
        PONG          = 1;
        AUDITREQUEST  = 2;
        AUDITREPLY    = 3;
    }
    Type type                            = 1;
    optional AuditRequest audit_request  = 2;
    optional AuditReply audit_reply      = 3;
    optional Ping ping                   = 4;
    optional Pong pong                   = 5;
}

message Ping {
}

message Pong {
}

message AuditRequest {
  AuditMessageHeader msg_header = 1;   //包头
  repeated AuditMessageBody msg_body = 2;   //包体
}

message AuditMessageHeader {
  string ip = 1;            //sdk客户端ip
  string docker_id = 2;     //sdk所在容器ID
  string thread_id = 3;     //sdk所在的线程ID
  uint64 sdk_ts = 4;        //sdk上报时间
  uint64 packet_id = 5;     //sdk上报的包ID
}

message AuditMessageBody {
  uint64 log_ts = 1;    //日志时间
  string inlong_group_id= 2;   //inlong_group_id
  string inlong_stream_id= 3; //inlong_stream_id
  string audit_id = 4;   //审计ID
  uint64 count = 5;     //条数
  uint64 size = 6;      //大小
  int64  delay = 7;      //总传输延时
}

message AuditReply {
  enum RSP_CODE {
    SUCCESS  = 0;  //成功
    FAILED   = 1;   //失败
    DISASTER = 2; //容灾
  }
  RSP_CODE rsp_code = 1;   //服务端返回码
  optional string message = 2;
}
```
## 审计SDK实现
### 目标
***1.支持本地容灾***  
***2.数据唯一性***  
***3.减少异常重启导致的数据丢失***  

### 服务发现
* 审计sdk与接入层之间的名字发现，支持插件化，包括域名、vip等

### 容灾逻辑
* sdk发送接入层失败时，会放入失败队列  
* 失败队列达到阈值时，将写到本地容灾文件  
* 本地容灾文件达到阈值时，将淘汰旧数据(按时间淘汰)  

## 接入层实现
### 目标
***1.高可靠***
***2.at least once***

## 分发层实现
### 目标
***1.高实时性(分钟级)***   
***2.部署简单***  
***3.可去重***

## OpenAPI实现
### 主要逻辑图
![](img/audit_openapi.png)
* 审计接口层通过对多个审计数据源进行实时聚合、本地cache，对外提供OpenAPI能力。

### UI 界面展示
### 主要逻辑图
![](img/audit_ui.png)
* 前端页面通过接口层，拉取各个模块的审计数据，进行展示