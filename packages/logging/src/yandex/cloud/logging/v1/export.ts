/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { LogLevel_Level, logLevel_LevelFromJSON, logLevel_LevelToJSON } from "./log_entry";

export const protobufPackage = "yandex.cloud.logging.v1";

export interface Export {
  $type: "yandex.cloud.logging.v1.Export";
  /** Export ID. */
  id: string;
  /** Export folder ID. */
  folderId: string;
  /** Export cloud ID. */
  cloudId: string;
  /** Export creation time. */
  createdAt?:
    | Date
    | undefined;
  /** Export name. */
  name: string;
  /** Export description. */
  description: string;
  /** Export lables. */
  labels: { [key: string]: string };
  /** Group logs are exported from. */
  groupId: string;
  /** Sink logs are exported to. */
  sinkId: string;
  /** Parameters of logs filtration. */
  params?: ExportParams | undefined;
}

export interface Export_LabelsEntry {
  $type: "yandex.cloud.logging.v1.Export.LabelsEntry";
  key: string;
  value: string;
}

export interface ExportParams {
  $type: "yandex.cloud.logging.v1.ExportParams";
  resourceTypes: string[];
  resourceIds: string[];
  streamNames: string[];
  levels: LogLevel_Level[];
  filter: string;
}

function createBaseExport(): Export {
  return {
    $type: "yandex.cloud.logging.v1.Export",
    id: "",
    folderId: "",
    cloudId: "",
    createdAt: undefined,
    name: "",
    description: "",
    labels: {},
    groupId: "",
    sinkId: "",
    params: undefined,
  };
}

export const Export = {
  $type: "yandex.cloud.logging.v1.Export" as const,

  encode(message: Export, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.cloudId !== "") {
      writer.uint32(26).string(message.cloudId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Export_LabelsEntry.encode(
        { $type: "yandex.cloud.logging.v1.Export.LabelsEntry", key: key as any, value },
        writer.uint32(58).fork(),
      ).ldelim();
    });
    if (message.groupId !== "") {
      writer.uint32(66).string(message.groupId);
    }
    if (message.sinkId !== "") {
      writer.uint32(74).string(message.sinkId);
    }
    if (message.params !== undefined) {
      ExportParams.encode(message.params, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Export {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.folderId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cloudId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.name = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          const entry7 = Export_LabelsEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.labels[entry7.key] = entry7.value;
          }
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.groupId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.sinkId = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.params = ExportParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Export {
    return {
      $type: Export.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      cloudId: isSet(object.cloudId) ? globalThis.String(object.cloudId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      groupId: isSet(object.groupId) ? globalThis.String(object.groupId) : "",
      sinkId: isSet(object.sinkId) ? globalThis.String(object.sinkId) : "",
      params: isSet(object.params) ? ExportParams.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: Export): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
    }
    if (message.cloudId !== "") {
      obj.cloudId = message.cloudId;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    if (message.sinkId !== "") {
      obj.sinkId = message.sinkId;
    }
    if (message.params !== undefined) {
      obj.params = ExportParams.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Export>, I>>(base?: I): Export {
    return Export.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Export>, I>>(object: I): Export {
    const message = createBaseExport();
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.cloudId = object.cloudId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.groupId = object.groupId ?? "";
    message.sinkId = object.sinkId ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? ExportParams.fromPartial(object.params)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Export.$type, Export);

function createBaseExport_LabelsEntry(): Export_LabelsEntry {
  return { $type: "yandex.cloud.logging.v1.Export.LabelsEntry", key: "", value: "" };
}

export const Export_LabelsEntry = {
  $type: "yandex.cloud.logging.v1.Export.LabelsEntry" as const,

  encode(message: Export_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Export_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExport_LabelsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Export_LabelsEntry {
    return {
      $type: Export_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Export_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Export_LabelsEntry>, I>>(base?: I): Export_LabelsEntry {
    return Export_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Export_LabelsEntry>, I>>(object: I): Export_LabelsEntry {
    const message = createBaseExport_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Export_LabelsEntry.$type, Export_LabelsEntry);

function createBaseExportParams(): ExportParams {
  return {
    $type: "yandex.cloud.logging.v1.ExportParams",
    resourceTypes: [],
    resourceIds: [],
    streamNames: [],
    levels: [],
    filter: "",
  };
}

export const ExportParams = {
  $type: "yandex.cloud.logging.v1.ExportParams" as const,

  encode(message: ExportParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resourceTypes) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.resourceIds) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.streamNames) {
      writer.uint32(26).string(v!);
    }
    writer.uint32(34).fork();
    for (const v of message.levels) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.filter !== "") {
      writer.uint32(42).string(message.filter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExportParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceTypes.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resourceIds.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.streamNames.push(reader.string());
          continue;
        case 4:
          if (tag === 32) {
            message.levels.push(reader.int32() as any);

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.levels.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.filter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExportParams {
    return {
      $type: ExportParams.$type,
      resourceTypes: globalThis.Array.isArray(object?.resourceTypes)
        ? object.resourceTypes.map((e: any) => globalThis.String(e))
        : [],
      resourceIds: globalThis.Array.isArray(object?.resourceIds)
        ? object.resourceIds.map((e: any) => globalThis.String(e))
        : [],
      streamNames: globalThis.Array.isArray(object?.streamNames)
        ? object.streamNames.map((e: any) => globalThis.String(e))
        : [],
      levels: globalThis.Array.isArray(object?.levels) ? object.levels.map((e: any) => logLevel_LevelFromJSON(e)) : [],
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ExportParams): unknown {
    const obj: any = {};
    if (message.resourceTypes?.length) {
      obj.resourceTypes = message.resourceTypes;
    }
    if (message.resourceIds?.length) {
      obj.resourceIds = message.resourceIds;
    }
    if (message.streamNames?.length) {
      obj.streamNames = message.streamNames;
    }
    if (message.levels?.length) {
      obj.levels = message.levels.map((e) => logLevel_LevelToJSON(e));
    }
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExportParams>, I>>(base?: I): ExportParams {
    return ExportParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExportParams>, I>>(object: I): ExportParams {
    const message = createBaseExportParams();
    message.resourceTypes = object.resourceTypes?.map((e) => e) || [];
    message.resourceIds = object.resourceIds?.map((e) => e) || [];
    message.streamNames = object.streamNames?.map((e) => e) || [];
    message.levels = object.levels?.map((e) => e) || [];
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExportParams.$type, ExportParams);

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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
