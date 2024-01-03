/* eslint-disable */
import { ChannelCredentials, Client, makeGenericClientConstructor, Metadata } from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.dataproc.manager.v1";

export enum InitActsState {
  /** INIT_ACTS_STATE_UNSPECIFIED - No init acts on cluster */
  INIT_ACTS_STATE_UNSPECIFIED = 0,
  /** FAILED - At least one failed init act */
  FAILED = 1,
  /** SUCCESSFUL - All init acts succeeded */
  SUCCESSFUL = 2,
  /** IN_PROGRESS - Some init acts not finished */
  IN_PROGRESS = 3,
  UNRECOGNIZED = -1,
}

export function initActsStateFromJSON(object: any): InitActsState {
  switch (object) {
    case 0:
    case "INIT_ACTS_STATE_UNSPECIFIED":
      return InitActsState.INIT_ACTS_STATE_UNSPECIFIED;
    case 1:
    case "FAILED":
      return InitActsState.FAILED;
    case 2:
    case "SUCCESSFUL":
      return InitActsState.SUCCESSFUL;
    case 3:
    case "IN_PROGRESS":
      return InitActsState.IN_PROGRESS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InitActsState.UNRECOGNIZED;
  }
}

export function initActsStateToJSON(object: InitActsState): string {
  switch (object) {
    case InitActsState.INIT_ACTS_STATE_UNSPECIFIED:
      return "INIT_ACTS_STATE_UNSPECIFIED";
    case InitActsState.FAILED:
      return "FAILED";
    case InitActsState.SUCCESSFUL:
      return "SUCCESSFUL";
    case InitActsState.IN_PROGRESS:
      return "IN_PROGRESS";
    case InitActsState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface HbaseNodeInfo {
  $type: "yandex.cloud.dataproc.manager.v1.HbaseNodeInfo";
  name: string;
  requests: number;
  heapSizeMb: number;
  maxHeapSizeMb: number;
}

export interface HbaseInfo {
  $type: "yandex.cloud.dataproc.manager.v1.HbaseInfo";
  available: boolean;
  regions: number;
  requests: number;
  averageLoad: number;
  liveNodes: HbaseNodeInfo[];
  deadNodes: HbaseNodeInfo[];
}

export interface HDFSNodeInfo {
  $type: "yandex.cloud.dataproc.manager.v1.HDFSNodeInfo";
  name: string;
  used: number;
  remaining: number;
  capacity: number;
  numBlocks: number;
  state: string;
}

export interface HDFSInfo {
  $type: "yandex.cloud.dataproc.manager.v1.HDFSInfo";
  available: boolean;
  percentRemaining: number;
  used: number;
  free: number;
  totalBlocks: number;
  missingBlocks: number;
  missingBlocksReplicaOne: number;
  liveNodes: HDFSNodeInfo[];
  deadNodes: HDFSNodeInfo[];
  safemode: string;
  decommissioningNodes: HDFSNodeInfo[];
  decommissionedNodes: HDFSNodeInfo[];
  /** Actual list of decommission hosts in HDFS namenode memory */
  requestedDecommissionHosts: string[];
}

export interface HiveInfo {
  $type: "yandex.cloud.dataproc.manager.v1.HiveInfo";
  available: boolean;
  queriesSucceeded: number;
  queriesFailed: number;
  queriesExecuting: number;
  sessionsOpen: number;
  sessionsActive: number;
}

export interface YarnNodeInfo {
  $type: "yandex.cloud.dataproc.manager.v1.YarnNodeInfo";
  name: string;
  state: string;
  numContainers: number;
  usedMemoryMb: number;
  availableMemoryMb: number;
  updateTime: number;
}

export interface YarnInfo {
  $type: "yandex.cloud.dataproc.manager.v1.YarnInfo";
  available: boolean;
  liveNodes: YarnNodeInfo[];
  /** Actual list of decommission hosts in Yarn resource manager memory */
  requestedDecommissionHosts: string[];
}

export interface ZookeeperInfo {
  $type: "yandex.cloud.dataproc.manager.v1.ZookeeperInfo";
  alive: boolean;
}

export interface OozieInfo {
  $type: "yandex.cloud.dataproc.manager.v1.OozieInfo";
  alive: boolean;
}

export interface LivyInfo {
  $type: "yandex.cloud.dataproc.manager.v1.LivyInfo";
  alive: boolean;
}

export interface InitActs {
  $type: "yandex.cloud.dataproc.manager.v1.InitActs";
  state: InitActsState;
  /** fqdns of nodes for error message */
  fqdns: string[];
}

export interface Info {
  $type: "yandex.cloud.dataproc.manager.v1.Info";
  hdfs?: HDFSInfo | undefined;
  yarn?: YarnInfo | undefined;
  hive?: HiveInfo | undefined;
  zookeeper?: ZookeeperInfo | undefined;
  hbase?: HbaseInfo | undefined;
  oozie?:
    | OozieInfo
    | undefined;
  /**
   * Report count is incremented every time report is sent by Dataproc Agent.
   * So Worker can use this property to make sure that Dataproc Agent got data sent by Worker through Dataproc Manager
   * for synchronization purposes
   */
  reportCount: number;
  livy?: LivyInfo | undefined;
  initActs?: InitActs | undefined;
}

/** The request message containing the host status report. */
export interface ReportRequest {
  $type: "yandex.cloud.dataproc.manager.v1.ReportRequest";
  cid: string;
  topologyRevision: number;
  info?: Info | undefined;
  collectedAt?: Date | undefined;
}

/** The response message containing the agent commands to apply on host. */
export interface ReportReply {
  $type: "yandex.cloud.dataproc.manager.v1.ReportReply";
  decommissionTimeout: number;
  yarnHostsToDecommission: string[];
  hdfsHostsToDecommission: string[];
}

function createBaseHbaseNodeInfo(): HbaseNodeInfo {
  return {
    $type: "yandex.cloud.dataproc.manager.v1.HbaseNodeInfo",
    name: "",
    requests: 0,
    heapSizeMb: 0,
    maxHeapSizeMb: 0,
  };
}

export const HbaseNodeInfo = {
  $type: "yandex.cloud.dataproc.manager.v1.HbaseNodeInfo" as const,

  encode(message: HbaseNodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.requests !== 0) {
      writer.uint32(16).int64(message.requests);
    }
    if (message.heapSizeMb !== 0) {
      writer.uint32(24).int64(message.heapSizeMb);
    }
    if (message.maxHeapSizeMb !== 0) {
      writer.uint32(32).int64(message.maxHeapSizeMb);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HbaseNodeInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHbaseNodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.requests = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.heapSizeMb = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.maxHeapSizeMb = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HbaseNodeInfo {
    return {
      $type: HbaseNodeInfo.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      requests: isSet(object.requests) ? globalThis.Number(object.requests) : 0,
      heapSizeMb: isSet(object.heapSizeMb) ? globalThis.Number(object.heapSizeMb) : 0,
      maxHeapSizeMb: isSet(object.maxHeapSizeMb) ? globalThis.Number(object.maxHeapSizeMb) : 0,
    };
  },

  toJSON(message: HbaseNodeInfo): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.requests !== 0) {
      obj.requests = Math.round(message.requests);
    }
    if (message.heapSizeMb !== 0) {
      obj.heapSizeMb = Math.round(message.heapSizeMb);
    }
    if (message.maxHeapSizeMb !== 0) {
      obj.maxHeapSizeMb = Math.round(message.maxHeapSizeMb);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HbaseNodeInfo>, I>>(base?: I): HbaseNodeInfo {
    return HbaseNodeInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HbaseNodeInfo>, I>>(object: I): HbaseNodeInfo {
    const message = createBaseHbaseNodeInfo();
    message.name = object.name ?? "";
    message.requests = object.requests ?? 0;
    message.heapSizeMb = object.heapSizeMb ?? 0;
    message.maxHeapSizeMb = object.maxHeapSizeMb ?? 0;
    return message;
  },
};

messageTypeRegistry.set(HbaseNodeInfo.$type, HbaseNodeInfo);

function createBaseHbaseInfo(): HbaseInfo {
  return {
    $type: "yandex.cloud.dataproc.manager.v1.HbaseInfo",
    available: false,
    regions: 0,
    requests: 0,
    averageLoad: 0,
    liveNodes: [],
    deadNodes: [],
  };
}

export const HbaseInfo = {
  $type: "yandex.cloud.dataproc.manager.v1.HbaseInfo" as const,

  encode(message: HbaseInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.available === true) {
      writer.uint32(8).bool(message.available);
    }
    if (message.regions !== 0) {
      writer.uint32(16).int64(message.regions);
    }
    if (message.requests !== 0) {
      writer.uint32(24).int64(message.requests);
    }
    if (message.averageLoad !== 0) {
      writer.uint32(33).double(message.averageLoad);
    }
    for (const v of message.liveNodes) {
      HbaseNodeInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.deadNodes) {
      HbaseNodeInfo.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HbaseInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHbaseInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.available = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.regions = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.requests = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.averageLoad = reader.double();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.liveNodes.push(HbaseNodeInfo.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.deadNodes.push(HbaseNodeInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HbaseInfo {
    return {
      $type: HbaseInfo.$type,
      available: isSet(object.available) ? globalThis.Boolean(object.available) : false,
      regions: isSet(object.regions) ? globalThis.Number(object.regions) : 0,
      requests: isSet(object.requests) ? globalThis.Number(object.requests) : 0,
      averageLoad: isSet(object.averageLoad) ? globalThis.Number(object.averageLoad) : 0,
      liveNodes: globalThis.Array.isArray(object?.liveNodes)
        ? object.liveNodes.map((e: any) => HbaseNodeInfo.fromJSON(e))
        : [],
      deadNodes: globalThis.Array.isArray(object?.deadNodes)
        ? object.deadNodes.map((e: any) => HbaseNodeInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: HbaseInfo): unknown {
    const obj: any = {};
    if (message.available === true) {
      obj.available = message.available;
    }
    if (message.regions !== 0) {
      obj.regions = Math.round(message.regions);
    }
    if (message.requests !== 0) {
      obj.requests = Math.round(message.requests);
    }
    if (message.averageLoad !== 0) {
      obj.averageLoad = message.averageLoad;
    }
    if (message.liveNodes?.length) {
      obj.liveNodes = message.liveNodes.map((e) => HbaseNodeInfo.toJSON(e));
    }
    if (message.deadNodes?.length) {
      obj.deadNodes = message.deadNodes.map((e) => HbaseNodeInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HbaseInfo>, I>>(base?: I): HbaseInfo {
    return HbaseInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HbaseInfo>, I>>(object: I): HbaseInfo {
    const message = createBaseHbaseInfo();
    message.available = object.available ?? false;
    message.regions = object.regions ?? 0;
    message.requests = object.requests ?? 0;
    message.averageLoad = object.averageLoad ?? 0;
    message.liveNodes = object.liveNodes?.map((e) => HbaseNodeInfo.fromPartial(e)) || [];
    message.deadNodes = object.deadNodes?.map((e) => HbaseNodeInfo.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(HbaseInfo.$type, HbaseInfo);

function createBaseHDFSNodeInfo(): HDFSNodeInfo {
  return {
    $type: "yandex.cloud.dataproc.manager.v1.HDFSNodeInfo",
    name: "",
    used: 0,
    remaining: 0,
    capacity: 0,
    numBlocks: 0,
    state: "",
  };
}

export const HDFSNodeInfo = {
  $type: "yandex.cloud.dataproc.manager.v1.HDFSNodeInfo" as const,

  encode(message: HDFSNodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.used !== 0) {
      writer.uint32(16).int64(message.used);
    }
    if (message.remaining !== 0) {
      writer.uint32(24).int64(message.remaining);
    }
    if (message.capacity !== 0) {
      writer.uint32(32).int64(message.capacity);
    }
    if (message.numBlocks !== 0) {
      writer.uint32(40).int64(message.numBlocks);
    }
    if (message.state !== "") {
      writer.uint32(50).string(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HDFSNodeInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHDFSNodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.used = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.remaining = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.capacity = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.numBlocks = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.state = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HDFSNodeInfo {
    return {
      $type: HDFSNodeInfo.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      used: isSet(object.used) ? globalThis.Number(object.used) : 0,
      remaining: isSet(object.remaining) ? globalThis.Number(object.remaining) : 0,
      capacity: isSet(object.capacity) ? globalThis.Number(object.capacity) : 0,
      numBlocks: isSet(object.numBlocks) ? globalThis.Number(object.numBlocks) : 0,
      state: isSet(object.state) ? globalThis.String(object.state) : "",
    };
  },

  toJSON(message: HDFSNodeInfo): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.used !== 0) {
      obj.used = Math.round(message.used);
    }
    if (message.remaining !== 0) {
      obj.remaining = Math.round(message.remaining);
    }
    if (message.capacity !== 0) {
      obj.capacity = Math.round(message.capacity);
    }
    if (message.numBlocks !== 0) {
      obj.numBlocks = Math.round(message.numBlocks);
    }
    if (message.state !== "") {
      obj.state = message.state;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HDFSNodeInfo>, I>>(base?: I): HDFSNodeInfo {
    return HDFSNodeInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HDFSNodeInfo>, I>>(object: I): HDFSNodeInfo {
    const message = createBaseHDFSNodeInfo();
    message.name = object.name ?? "";
    message.used = object.used ?? 0;
    message.remaining = object.remaining ?? 0;
    message.capacity = object.capacity ?? 0;
    message.numBlocks = object.numBlocks ?? 0;
    message.state = object.state ?? "";
    return message;
  },
};

messageTypeRegistry.set(HDFSNodeInfo.$type, HDFSNodeInfo);

function createBaseHDFSInfo(): HDFSInfo {
  return {
    $type: "yandex.cloud.dataproc.manager.v1.HDFSInfo",
    available: false,
    percentRemaining: 0,
    used: 0,
    free: 0,
    totalBlocks: 0,
    missingBlocks: 0,
    missingBlocksReplicaOne: 0,
    liveNodes: [],
    deadNodes: [],
    safemode: "",
    decommissioningNodes: [],
    decommissionedNodes: [],
    requestedDecommissionHosts: [],
  };
}

export const HDFSInfo = {
  $type: "yandex.cloud.dataproc.manager.v1.HDFSInfo" as const,

  encode(message: HDFSInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.available === true) {
      writer.uint32(8).bool(message.available);
    }
    if (message.percentRemaining !== 0) {
      writer.uint32(17).double(message.percentRemaining);
    }
    if (message.used !== 0) {
      writer.uint32(24).int64(message.used);
    }
    if (message.free !== 0) {
      writer.uint32(32).int64(message.free);
    }
    if (message.totalBlocks !== 0) {
      writer.uint32(40).int64(message.totalBlocks);
    }
    if (message.missingBlocks !== 0) {
      writer.uint32(48).int64(message.missingBlocks);
    }
    if (message.missingBlocksReplicaOne !== 0) {
      writer.uint32(56).int64(message.missingBlocksReplicaOne);
    }
    for (const v of message.liveNodes) {
      HDFSNodeInfo.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.deadNodes) {
      HDFSNodeInfo.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.safemode !== "") {
      writer.uint32(90).string(message.safemode);
    }
    for (const v of message.decommissioningNodes) {
      HDFSNodeInfo.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.decommissionedNodes) {
      HDFSNodeInfo.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.requestedDecommissionHosts) {
      writer.uint32(114).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HDFSInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHDFSInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.available = reader.bool();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.percentRemaining = reader.double();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.used = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.free = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.totalBlocks = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.missingBlocks = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.missingBlocksReplicaOne = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.liveNodes.push(HDFSNodeInfo.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.deadNodes.push(HDFSNodeInfo.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.safemode = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.decommissioningNodes.push(HDFSNodeInfo.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.decommissionedNodes.push(HDFSNodeInfo.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.requestedDecommissionHosts.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HDFSInfo {
    return {
      $type: HDFSInfo.$type,
      available: isSet(object.available) ? globalThis.Boolean(object.available) : false,
      percentRemaining: isSet(object.percentRemaining) ? globalThis.Number(object.percentRemaining) : 0,
      used: isSet(object.used) ? globalThis.Number(object.used) : 0,
      free: isSet(object.free) ? globalThis.Number(object.free) : 0,
      totalBlocks: isSet(object.totalBlocks) ? globalThis.Number(object.totalBlocks) : 0,
      missingBlocks: isSet(object.missingBlocks) ? globalThis.Number(object.missingBlocks) : 0,
      missingBlocksReplicaOne: isSet(object.missingBlocksReplicaOne)
        ? globalThis.Number(object.missingBlocksReplicaOne)
        : 0,
      liveNodes: globalThis.Array.isArray(object?.liveNodes)
        ? object.liveNodes.map((e: any) => HDFSNodeInfo.fromJSON(e))
        : [],
      deadNodes: globalThis.Array.isArray(object?.deadNodes)
        ? object.deadNodes.map((e: any) => HDFSNodeInfo.fromJSON(e))
        : [],
      safemode: isSet(object.safemode) ? globalThis.String(object.safemode) : "",
      decommissioningNodes: globalThis.Array.isArray(object?.decommissioningNodes)
        ? object.decommissioningNodes.map((e: any) => HDFSNodeInfo.fromJSON(e))
        : [],
      decommissionedNodes: globalThis.Array.isArray(object?.decommissionedNodes)
        ? object.decommissionedNodes.map((e: any) => HDFSNodeInfo.fromJSON(e))
        : [],
      requestedDecommissionHosts: globalThis.Array.isArray(object?.requestedDecommissionHosts)
        ? object.requestedDecommissionHosts.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: HDFSInfo): unknown {
    const obj: any = {};
    if (message.available === true) {
      obj.available = message.available;
    }
    if (message.percentRemaining !== 0) {
      obj.percentRemaining = message.percentRemaining;
    }
    if (message.used !== 0) {
      obj.used = Math.round(message.used);
    }
    if (message.free !== 0) {
      obj.free = Math.round(message.free);
    }
    if (message.totalBlocks !== 0) {
      obj.totalBlocks = Math.round(message.totalBlocks);
    }
    if (message.missingBlocks !== 0) {
      obj.missingBlocks = Math.round(message.missingBlocks);
    }
    if (message.missingBlocksReplicaOne !== 0) {
      obj.missingBlocksReplicaOne = Math.round(message.missingBlocksReplicaOne);
    }
    if (message.liveNodes?.length) {
      obj.liveNodes = message.liveNodes.map((e) => HDFSNodeInfo.toJSON(e));
    }
    if (message.deadNodes?.length) {
      obj.deadNodes = message.deadNodes.map((e) => HDFSNodeInfo.toJSON(e));
    }
    if (message.safemode !== "") {
      obj.safemode = message.safemode;
    }
    if (message.decommissioningNodes?.length) {
      obj.decommissioningNodes = message.decommissioningNodes.map((e) => HDFSNodeInfo.toJSON(e));
    }
    if (message.decommissionedNodes?.length) {
      obj.decommissionedNodes = message.decommissionedNodes.map((e) => HDFSNodeInfo.toJSON(e));
    }
    if (message.requestedDecommissionHosts?.length) {
      obj.requestedDecommissionHosts = message.requestedDecommissionHosts;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HDFSInfo>, I>>(base?: I): HDFSInfo {
    return HDFSInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HDFSInfo>, I>>(object: I): HDFSInfo {
    const message = createBaseHDFSInfo();
    message.available = object.available ?? false;
    message.percentRemaining = object.percentRemaining ?? 0;
    message.used = object.used ?? 0;
    message.free = object.free ?? 0;
    message.totalBlocks = object.totalBlocks ?? 0;
    message.missingBlocks = object.missingBlocks ?? 0;
    message.missingBlocksReplicaOne = object.missingBlocksReplicaOne ?? 0;
    message.liveNodes = object.liveNodes?.map((e) => HDFSNodeInfo.fromPartial(e)) || [];
    message.deadNodes = object.deadNodes?.map((e) => HDFSNodeInfo.fromPartial(e)) || [];
    message.safemode = object.safemode ?? "";
    message.decommissioningNodes = object.decommissioningNodes?.map((e) => HDFSNodeInfo.fromPartial(e)) || [];
    message.decommissionedNodes = object.decommissionedNodes?.map((e) => HDFSNodeInfo.fromPartial(e)) || [];
    message.requestedDecommissionHosts = object.requestedDecommissionHosts?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(HDFSInfo.$type, HDFSInfo);

function createBaseHiveInfo(): HiveInfo {
  return {
    $type: "yandex.cloud.dataproc.manager.v1.HiveInfo",
    available: false,
    queriesSucceeded: 0,
    queriesFailed: 0,
    queriesExecuting: 0,
    sessionsOpen: 0,
    sessionsActive: 0,
  };
}

export const HiveInfo = {
  $type: "yandex.cloud.dataproc.manager.v1.HiveInfo" as const,

  encode(message: HiveInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.available === true) {
      writer.uint32(8).bool(message.available);
    }
    if (message.queriesSucceeded !== 0) {
      writer.uint32(16).int64(message.queriesSucceeded);
    }
    if (message.queriesFailed !== 0) {
      writer.uint32(24).int64(message.queriesFailed);
    }
    if (message.queriesExecuting !== 0) {
      writer.uint32(32).int64(message.queriesExecuting);
    }
    if (message.sessionsOpen !== 0) {
      writer.uint32(40).int64(message.sessionsOpen);
    }
    if (message.sessionsActive !== 0) {
      writer.uint32(48).int64(message.sessionsActive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HiveInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHiveInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.available = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.queriesSucceeded = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.queriesFailed = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.queriesExecuting = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.sessionsOpen = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.sessionsActive = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HiveInfo {
    return {
      $type: HiveInfo.$type,
      available: isSet(object.available) ? globalThis.Boolean(object.available) : false,
      queriesSucceeded: isSet(object.queriesSucceeded) ? globalThis.Number(object.queriesSucceeded) : 0,
      queriesFailed: isSet(object.queriesFailed) ? globalThis.Number(object.queriesFailed) : 0,
      queriesExecuting: isSet(object.queriesExecuting) ? globalThis.Number(object.queriesExecuting) : 0,
      sessionsOpen: isSet(object.sessionsOpen) ? globalThis.Number(object.sessionsOpen) : 0,
      sessionsActive: isSet(object.sessionsActive) ? globalThis.Number(object.sessionsActive) : 0,
    };
  },

  toJSON(message: HiveInfo): unknown {
    const obj: any = {};
    if (message.available === true) {
      obj.available = message.available;
    }
    if (message.queriesSucceeded !== 0) {
      obj.queriesSucceeded = Math.round(message.queriesSucceeded);
    }
    if (message.queriesFailed !== 0) {
      obj.queriesFailed = Math.round(message.queriesFailed);
    }
    if (message.queriesExecuting !== 0) {
      obj.queriesExecuting = Math.round(message.queriesExecuting);
    }
    if (message.sessionsOpen !== 0) {
      obj.sessionsOpen = Math.round(message.sessionsOpen);
    }
    if (message.sessionsActive !== 0) {
      obj.sessionsActive = Math.round(message.sessionsActive);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HiveInfo>, I>>(base?: I): HiveInfo {
    return HiveInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HiveInfo>, I>>(object: I): HiveInfo {
    const message = createBaseHiveInfo();
    message.available = object.available ?? false;
    message.queriesSucceeded = object.queriesSucceeded ?? 0;
    message.queriesFailed = object.queriesFailed ?? 0;
    message.queriesExecuting = object.queriesExecuting ?? 0;
    message.sessionsOpen = object.sessionsOpen ?? 0;
    message.sessionsActive = object.sessionsActive ?? 0;
    return message;
  },
};

messageTypeRegistry.set(HiveInfo.$type, HiveInfo);

function createBaseYarnNodeInfo(): YarnNodeInfo {
  return {
    $type: "yandex.cloud.dataproc.manager.v1.YarnNodeInfo",
    name: "",
    state: "",
    numContainers: 0,
    usedMemoryMb: 0,
    availableMemoryMb: 0,
    updateTime: 0,
  };
}

export const YarnNodeInfo = {
  $type: "yandex.cloud.dataproc.manager.v1.YarnNodeInfo" as const,

  encode(message: YarnNodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.state !== "") {
      writer.uint32(18).string(message.state);
    }
    if (message.numContainers !== 0) {
      writer.uint32(24).int64(message.numContainers);
    }
    if (message.usedMemoryMb !== 0) {
      writer.uint32(32).int64(message.usedMemoryMb);
    }
    if (message.availableMemoryMb !== 0) {
      writer.uint32(40).int64(message.availableMemoryMb);
    }
    if (message.updateTime !== 0) {
      writer.uint32(48).int64(message.updateTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): YarnNodeInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseYarnNodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.state = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.numContainers = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.usedMemoryMb = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.availableMemoryMb = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.updateTime = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): YarnNodeInfo {
    return {
      $type: YarnNodeInfo.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      state: isSet(object.state) ? globalThis.String(object.state) : "",
      numContainers: isSet(object.numContainers) ? globalThis.Number(object.numContainers) : 0,
      usedMemoryMb: isSet(object.usedMemoryMb) ? globalThis.Number(object.usedMemoryMb) : 0,
      availableMemoryMb: isSet(object.availableMemoryMb) ? globalThis.Number(object.availableMemoryMb) : 0,
      updateTime: isSet(object.updateTime) ? globalThis.Number(object.updateTime) : 0,
    };
  },

  toJSON(message: YarnNodeInfo): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.state !== "") {
      obj.state = message.state;
    }
    if (message.numContainers !== 0) {
      obj.numContainers = Math.round(message.numContainers);
    }
    if (message.usedMemoryMb !== 0) {
      obj.usedMemoryMb = Math.round(message.usedMemoryMb);
    }
    if (message.availableMemoryMb !== 0) {
      obj.availableMemoryMb = Math.round(message.availableMemoryMb);
    }
    if (message.updateTime !== 0) {
      obj.updateTime = Math.round(message.updateTime);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<YarnNodeInfo>, I>>(base?: I): YarnNodeInfo {
    return YarnNodeInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<YarnNodeInfo>, I>>(object: I): YarnNodeInfo {
    const message = createBaseYarnNodeInfo();
    message.name = object.name ?? "";
    message.state = object.state ?? "";
    message.numContainers = object.numContainers ?? 0;
    message.usedMemoryMb = object.usedMemoryMb ?? 0;
    message.availableMemoryMb = object.availableMemoryMb ?? 0;
    message.updateTime = object.updateTime ?? 0;
    return message;
  },
};

messageTypeRegistry.set(YarnNodeInfo.$type, YarnNodeInfo);

function createBaseYarnInfo(): YarnInfo {
  return {
    $type: "yandex.cloud.dataproc.manager.v1.YarnInfo",
    available: false,
    liveNodes: [],
    requestedDecommissionHosts: [],
  };
}

export const YarnInfo = {
  $type: "yandex.cloud.dataproc.manager.v1.YarnInfo" as const,

  encode(message: YarnInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.available === true) {
      writer.uint32(8).bool(message.available);
    }
    for (const v of message.liveNodes) {
      YarnNodeInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.requestedDecommissionHosts) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): YarnInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseYarnInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.available = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.liveNodes.push(YarnNodeInfo.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.requestedDecommissionHosts.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): YarnInfo {
    return {
      $type: YarnInfo.$type,
      available: isSet(object.available) ? globalThis.Boolean(object.available) : false,
      liveNodes: globalThis.Array.isArray(object?.liveNodes)
        ? object.liveNodes.map((e: any) => YarnNodeInfo.fromJSON(e))
        : [],
      requestedDecommissionHosts: globalThis.Array.isArray(object?.requestedDecommissionHosts)
        ? object.requestedDecommissionHosts.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: YarnInfo): unknown {
    const obj: any = {};
    if (message.available === true) {
      obj.available = message.available;
    }
    if (message.liveNodes?.length) {
      obj.liveNodes = message.liveNodes.map((e) => YarnNodeInfo.toJSON(e));
    }
    if (message.requestedDecommissionHosts?.length) {
      obj.requestedDecommissionHosts = message.requestedDecommissionHosts;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<YarnInfo>, I>>(base?: I): YarnInfo {
    return YarnInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<YarnInfo>, I>>(object: I): YarnInfo {
    const message = createBaseYarnInfo();
    message.available = object.available ?? false;
    message.liveNodes = object.liveNodes?.map((e) => YarnNodeInfo.fromPartial(e)) || [];
    message.requestedDecommissionHosts = object.requestedDecommissionHosts?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(YarnInfo.$type, YarnInfo);

function createBaseZookeeperInfo(): ZookeeperInfo {
  return { $type: "yandex.cloud.dataproc.manager.v1.ZookeeperInfo", alive: false };
}

export const ZookeeperInfo = {
  $type: "yandex.cloud.dataproc.manager.v1.ZookeeperInfo" as const,

  encode(message: ZookeeperInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alive === true) {
      writer.uint32(8).bool(message.alive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ZookeeperInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZookeeperInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.alive = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ZookeeperInfo {
    return { $type: ZookeeperInfo.$type, alive: isSet(object.alive) ? globalThis.Boolean(object.alive) : false };
  },

  toJSON(message: ZookeeperInfo): unknown {
    const obj: any = {};
    if (message.alive === true) {
      obj.alive = message.alive;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ZookeeperInfo>, I>>(base?: I): ZookeeperInfo {
    return ZookeeperInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ZookeeperInfo>, I>>(object: I): ZookeeperInfo {
    const message = createBaseZookeeperInfo();
    message.alive = object.alive ?? false;
    return message;
  },
};

messageTypeRegistry.set(ZookeeperInfo.$type, ZookeeperInfo);

function createBaseOozieInfo(): OozieInfo {
  return { $type: "yandex.cloud.dataproc.manager.v1.OozieInfo", alive: false };
}

export const OozieInfo = {
  $type: "yandex.cloud.dataproc.manager.v1.OozieInfo" as const,

  encode(message: OozieInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alive === true) {
      writer.uint32(8).bool(message.alive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OozieInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOozieInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.alive = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OozieInfo {
    return { $type: OozieInfo.$type, alive: isSet(object.alive) ? globalThis.Boolean(object.alive) : false };
  },

  toJSON(message: OozieInfo): unknown {
    const obj: any = {};
    if (message.alive === true) {
      obj.alive = message.alive;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OozieInfo>, I>>(base?: I): OozieInfo {
    return OozieInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OozieInfo>, I>>(object: I): OozieInfo {
    const message = createBaseOozieInfo();
    message.alive = object.alive ?? false;
    return message;
  },
};

messageTypeRegistry.set(OozieInfo.$type, OozieInfo);

function createBaseLivyInfo(): LivyInfo {
  return { $type: "yandex.cloud.dataproc.manager.v1.LivyInfo", alive: false };
}

export const LivyInfo = {
  $type: "yandex.cloud.dataproc.manager.v1.LivyInfo" as const,

  encode(message: LivyInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alive === true) {
      writer.uint32(8).bool(message.alive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LivyInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLivyInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.alive = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LivyInfo {
    return { $type: LivyInfo.$type, alive: isSet(object.alive) ? globalThis.Boolean(object.alive) : false };
  },

  toJSON(message: LivyInfo): unknown {
    const obj: any = {};
    if (message.alive === true) {
      obj.alive = message.alive;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LivyInfo>, I>>(base?: I): LivyInfo {
    return LivyInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LivyInfo>, I>>(object: I): LivyInfo {
    const message = createBaseLivyInfo();
    message.alive = object.alive ?? false;
    return message;
  },
};

messageTypeRegistry.set(LivyInfo.$type, LivyInfo);

function createBaseInitActs(): InitActs {
  return { $type: "yandex.cloud.dataproc.manager.v1.InitActs", state: 0, fqdns: [] };
}

export const InitActs = {
  $type: "yandex.cloud.dataproc.manager.v1.InitActs" as const,

  encode(message: InitActs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    for (const v of message.fqdns) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitActs {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitActs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fqdns.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InitActs {
    return {
      $type: InitActs.$type,
      state: isSet(object.state) ? initActsStateFromJSON(object.state) : 0,
      fqdns: globalThis.Array.isArray(object?.fqdns) ? object.fqdns.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: InitActs): unknown {
    const obj: any = {};
    if (message.state !== 0) {
      obj.state = initActsStateToJSON(message.state);
    }
    if (message.fqdns?.length) {
      obj.fqdns = message.fqdns;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InitActs>, I>>(base?: I): InitActs {
    return InitActs.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InitActs>, I>>(object: I): InitActs {
    const message = createBaseInitActs();
    message.state = object.state ?? 0;
    message.fqdns = object.fqdns?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(InitActs.$type, InitActs);

function createBaseInfo(): Info {
  return {
    $type: "yandex.cloud.dataproc.manager.v1.Info",
    hdfs: undefined,
    yarn: undefined,
    hive: undefined,
    zookeeper: undefined,
    hbase: undefined,
    oozie: undefined,
    reportCount: 0,
    livy: undefined,
    initActs: undefined,
  };
}

export const Info = {
  $type: "yandex.cloud.dataproc.manager.v1.Info" as const,

  encode(message: Info, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hdfs !== undefined) {
      HDFSInfo.encode(message.hdfs, writer.uint32(10).fork()).ldelim();
    }
    if (message.yarn !== undefined) {
      YarnInfo.encode(message.yarn, writer.uint32(18).fork()).ldelim();
    }
    if (message.hive !== undefined) {
      HiveInfo.encode(message.hive, writer.uint32(26).fork()).ldelim();
    }
    if (message.zookeeper !== undefined) {
      ZookeeperInfo.encode(message.zookeeper, writer.uint32(34).fork()).ldelim();
    }
    if (message.hbase !== undefined) {
      HbaseInfo.encode(message.hbase, writer.uint32(42).fork()).ldelim();
    }
    if (message.oozie !== undefined) {
      OozieInfo.encode(message.oozie, writer.uint32(50).fork()).ldelim();
    }
    if (message.reportCount !== 0) {
      writer.uint32(56).int64(message.reportCount);
    }
    if (message.livy !== undefined) {
      LivyInfo.encode(message.livy, writer.uint32(66).fork()).ldelim();
    }
    if (message.initActs !== undefined) {
      InitActs.encode(message.initActs, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Info {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hdfs = HDFSInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.yarn = YarnInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hive = HiveInfo.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.zookeeper = ZookeeperInfo.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.hbase = HbaseInfo.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.oozie = OozieInfo.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.reportCount = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.livy = LivyInfo.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.initActs = InitActs.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Info {
    return {
      $type: Info.$type,
      hdfs: isSet(object.hdfs) ? HDFSInfo.fromJSON(object.hdfs) : undefined,
      yarn: isSet(object.yarn) ? YarnInfo.fromJSON(object.yarn) : undefined,
      hive: isSet(object.hive) ? HiveInfo.fromJSON(object.hive) : undefined,
      zookeeper: isSet(object.zookeeper) ? ZookeeperInfo.fromJSON(object.zookeeper) : undefined,
      hbase: isSet(object.hbase) ? HbaseInfo.fromJSON(object.hbase) : undefined,
      oozie: isSet(object.oozie) ? OozieInfo.fromJSON(object.oozie) : undefined,
      reportCount: isSet(object.reportCount) ? globalThis.Number(object.reportCount) : 0,
      livy: isSet(object.livy) ? LivyInfo.fromJSON(object.livy) : undefined,
      initActs: isSet(object.initActs) ? InitActs.fromJSON(object.initActs) : undefined,
    };
  },

  toJSON(message: Info): unknown {
    const obj: any = {};
    if (message.hdfs !== undefined) {
      obj.hdfs = HDFSInfo.toJSON(message.hdfs);
    }
    if (message.yarn !== undefined) {
      obj.yarn = YarnInfo.toJSON(message.yarn);
    }
    if (message.hive !== undefined) {
      obj.hive = HiveInfo.toJSON(message.hive);
    }
    if (message.zookeeper !== undefined) {
      obj.zookeeper = ZookeeperInfo.toJSON(message.zookeeper);
    }
    if (message.hbase !== undefined) {
      obj.hbase = HbaseInfo.toJSON(message.hbase);
    }
    if (message.oozie !== undefined) {
      obj.oozie = OozieInfo.toJSON(message.oozie);
    }
    if (message.reportCount !== 0) {
      obj.reportCount = Math.round(message.reportCount);
    }
    if (message.livy !== undefined) {
      obj.livy = LivyInfo.toJSON(message.livy);
    }
    if (message.initActs !== undefined) {
      obj.initActs = InitActs.toJSON(message.initActs);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Info>, I>>(base?: I): Info {
    return Info.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Info>, I>>(object: I): Info {
    const message = createBaseInfo();
    message.hdfs = (object.hdfs !== undefined && object.hdfs !== null) ? HDFSInfo.fromPartial(object.hdfs) : undefined;
    message.yarn = (object.yarn !== undefined && object.yarn !== null) ? YarnInfo.fromPartial(object.yarn) : undefined;
    message.hive = (object.hive !== undefined && object.hive !== null) ? HiveInfo.fromPartial(object.hive) : undefined;
    message.zookeeper = (object.zookeeper !== undefined && object.zookeeper !== null)
      ? ZookeeperInfo.fromPartial(object.zookeeper)
      : undefined;
    message.hbase = (object.hbase !== undefined && object.hbase !== null)
      ? HbaseInfo.fromPartial(object.hbase)
      : undefined;
    message.oozie = (object.oozie !== undefined && object.oozie !== null)
      ? OozieInfo.fromPartial(object.oozie)
      : undefined;
    message.reportCount = object.reportCount ?? 0;
    message.livy = (object.livy !== undefined && object.livy !== null) ? LivyInfo.fromPartial(object.livy) : undefined;
    message.initActs = (object.initActs !== undefined && object.initActs !== null)
      ? InitActs.fromPartial(object.initActs)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Info.$type, Info);

function createBaseReportRequest(): ReportRequest {
  return {
    $type: "yandex.cloud.dataproc.manager.v1.ReportRequest",
    cid: "",
    topologyRevision: 0,
    info: undefined,
    collectedAt: undefined,
  };
}

export const ReportRequest = {
  $type: "yandex.cloud.dataproc.manager.v1.ReportRequest" as const,

  encode(message: ReportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cid !== "") {
      writer.uint32(10).string(message.cid);
    }
    if (message.topologyRevision !== 0) {
      writer.uint32(16).int64(message.topologyRevision);
    }
    if (message.info !== undefined) {
      Info.encode(message.info, writer.uint32(26).fork()).ldelim();
    }
    if (message.collectedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.collectedAt), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReportRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cid = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.topologyRevision = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.info = Info.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.collectedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReportRequest {
    return {
      $type: ReportRequest.$type,
      cid: isSet(object.cid) ? globalThis.String(object.cid) : "",
      topologyRevision: isSet(object.topologyRevision) ? globalThis.Number(object.topologyRevision) : 0,
      info: isSet(object.info) ? Info.fromJSON(object.info) : undefined,
      collectedAt: isSet(object.collectedAt) ? fromJsonTimestamp(object.collectedAt) : undefined,
    };
  },

  toJSON(message: ReportRequest): unknown {
    const obj: any = {};
    if (message.cid !== "") {
      obj.cid = message.cid;
    }
    if (message.topologyRevision !== 0) {
      obj.topologyRevision = Math.round(message.topologyRevision);
    }
    if (message.info !== undefined) {
      obj.info = Info.toJSON(message.info);
    }
    if (message.collectedAt !== undefined) {
      obj.collectedAt = message.collectedAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReportRequest>, I>>(base?: I): ReportRequest {
    return ReportRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReportRequest>, I>>(object: I): ReportRequest {
    const message = createBaseReportRequest();
    message.cid = object.cid ?? "";
    message.topologyRevision = object.topologyRevision ?? 0;
    message.info = (object.info !== undefined && object.info !== null) ? Info.fromPartial(object.info) : undefined;
    message.collectedAt = object.collectedAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ReportRequest.$type, ReportRequest);

function createBaseReportReply(): ReportReply {
  return {
    $type: "yandex.cloud.dataproc.manager.v1.ReportReply",
    decommissionTimeout: 0,
    yarnHostsToDecommission: [],
    hdfsHostsToDecommission: [],
  };
}

export const ReportReply = {
  $type: "yandex.cloud.dataproc.manager.v1.ReportReply" as const,

  encode(message: ReportReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.decommissionTimeout !== 0) {
      writer.uint32(8).int64(message.decommissionTimeout);
    }
    for (const v of message.yarnHostsToDecommission) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.hdfsHostsToDecommission) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReportReply {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReportReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.decommissionTimeout = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.yarnHostsToDecommission.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hdfsHostsToDecommission.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReportReply {
    return {
      $type: ReportReply.$type,
      decommissionTimeout: isSet(object.decommissionTimeout) ? globalThis.Number(object.decommissionTimeout) : 0,
      yarnHostsToDecommission: globalThis.Array.isArray(object?.yarnHostsToDecommission)
        ? object.yarnHostsToDecommission.map((e: any) => globalThis.String(e))
        : [],
      hdfsHostsToDecommission: globalThis.Array.isArray(object?.hdfsHostsToDecommission)
        ? object.hdfsHostsToDecommission.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: ReportReply): unknown {
    const obj: any = {};
    if (message.decommissionTimeout !== 0) {
      obj.decommissionTimeout = Math.round(message.decommissionTimeout);
    }
    if (message.yarnHostsToDecommission?.length) {
      obj.yarnHostsToDecommission = message.yarnHostsToDecommission;
    }
    if (message.hdfsHostsToDecommission?.length) {
      obj.hdfsHostsToDecommission = message.hdfsHostsToDecommission;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReportReply>, I>>(base?: I): ReportReply {
    return ReportReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReportReply>, I>>(object: I): ReportReply {
    const message = createBaseReportReply();
    message.decommissionTimeout = object.decommissionTimeout ?? 0;
    message.yarnHostsToDecommission = object.yarnHostsToDecommission?.map((e) => e) || [];
    message.hdfsHostsToDecommission = object.hdfsHostsToDecommission?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(ReportReply.$type, ReportReply);

/** Data Proc manager service definition. */
export type DataprocManagerServiceService = typeof DataprocManagerServiceService;
export const DataprocManagerServiceService = {
  /** Sends a status report from a host. */
  report: {
    path: "/yandex.cloud.dataproc.manager.v1.DataprocManagerService/Report",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ReportRequest) => Buffer.from(ReportRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ReportRequest.decode(value),
    responseSerialize: (value: ReportReply) => Buffer.from(ReportReply.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ReportReply.decode(value),
  },
} as const;

export interface DataprocManagerServiceServer extends UntypedServiceImplementation {
  /** Sends a status report from a host. */
  report: handleUnaryCall<ReportRequest, ReportReply>;
}

export interface DataprocManagerServiceClient extends Client {
  /** Sends a status report from a host. */
  report(
    request: ReportRequest,
    callback: (error: ServiceError | null, response: ReportReply) => void,
  ): ClientUnaryCall;
  report(
    request: ReportRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ReportReply) => void,
  ): ClientUnaryCall;
  report(
    request: ReportRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ReportReply) => void,
  ): ClientUnaryCall;
}

export const DataprocManagerServiceClient = makeGenericClientConstructor(
  DataprocManagerServiceService,
  "yandex.cloud.dataproc.manager.v1.DataprocManagerService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): DataprocManagerServiceClient;
  service: typeof DataprocManagerServiceService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
