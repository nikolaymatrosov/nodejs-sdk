/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";

export enum MlModelType {
  ML_MODEL_TYPE_UNSPECIFIED = 0,
  /** ML_MODEL_TYPE_CATBOOST - CatBoost model. */
  ML_MODEL_TYPE_CATBOOST = 1,
  UNRECOGNIZED = -1,
}

export function mlModelTypeFromJSON(object: any): MlModelType {
  switch (object) {
    case 0:
    case "ML_MODEL_TYPE_UNSPECIFIED":
      return MlModelType.ML_MODEL_TYPE_UNSPECIFIED;
    case 1:
    case "ML_MODEL_TYPE_CATBOOST":
      return MlModelType.ML_MODEL_TYPE_CATBOOST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MlModelType.UNRECOGNIZED;
  }
}

export function mlModelTypeToJSON(object: MlModelType): string {
  switch (object) {
    case MlModelType.ML_MODEL_TYPE_UNSPECIFIED:
      return "ML_MODEL_TYPE_UNSPECIFIED";
    case MlModelType.ML_MODEL_TYPE_CATBOOST:
      return "ML_MODEL_TYPE_CATBOOST";
    case MlModelType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MlModel {
  $type: "yandex.cloud.mdb.clickhouse.v1.MlModel";
  /** Name of the the model. */
  name: string;
  /** ID of the ClickHouse cluster that the model belongs to. */
  clusterId: string;
  /** Type of the model. */
  type: MlModelType;
  /** Model file URL. You can only use models stored in Object Storage. */
  uri: string;
}

function createBaseMlModel(): MlModel {
  return { $type: "yandex.cloud.mdb.clickhouse.v1.MlModel", name: "", clusterId: "", type: 0, uri: "" };
}

export const MlModel = {
  $type: "yandex.cloud.mdb.clickhouse.v1.MlModel" as const,

  encode(message: MlModel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.clusterId !== "") {
      writer.uint32(18).string(message.clusterId);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MlModel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMlModel();
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

          message.clusterId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.uri = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MlModel {
    return {
      $type: MlModel.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      type: isSet(object.type) ? mlModelTypeFromJSON(object.type) : 0,
      uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
    };
  },

  toJSON(message: MlModel): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.type !== 0) {
      obj.type = mlModelTypeToJSON(message.type);
    }
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    return obj;
  },

  create(base?: DeepPartial<MlModel>): MlModel {
    return MlModel.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MlModel>): MlModel {
    const message = createBaseMlModel();
    message.name = object.name ?? "";
    message.clusterId = object.clusterId ?? "";
    message.type = object.type ?? 0;
    message.uri = object.uri ?? "";
    return message;
  },
};

messageTypeRegistry.set(MlModel.$type, MlModel);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
