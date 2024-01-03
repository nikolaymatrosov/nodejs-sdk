/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { LogLevel_Level, logLevel_LevelFromJSON, logLevel_LevelToJSON } from "./log_entry";

export const protobufPackage = "yandex.cloud.logging.v1";

export interface ExportParams {
  $type: "yandex.cloud.logging.v1.ExportParams";
  resourceTypes: string[];
  resourceIds: string[];
  streamNames: string[];
  levels: LogLevel_Level[];
  filter: string;
}

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
