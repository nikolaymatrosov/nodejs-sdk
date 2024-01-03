/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.cdn.v1";

/** Provider side statuses of Raw logs processing. */
export enum RawLogsStatus {
  RAW_LOGS_STATUS_UNSPECIFIED = 0,
  /** RAW_LOGS_STATUS_NOT_ACTIVATED - Raw logs wasn't activated. */
  RAW_LOGS_STATUS_NOT_ACTIVATED = 1,
  /** RAW_LOGS_STATUS_OK - Raw logs was activated, and logs storing process works as expected. */
  RAW_LOGS_STATUS_OK = 2,
  /** RAW_LOGS_STATUS_FAILED - Raw logs was activated, but CDN provider has been failed to store logs. */
  RAW_LOGS_STATUS_FAILED = 3,
  /** RAW_LOGS_STATUS_PENDING - Raw logs was activated, but logs storing process is expected. */
  RAW_LOGS_STATUS_PENDING = 4,
  UNRECOGNIZED = -1,
}

export function rawLogsStatusFromJSON(object: any): RawLogsStatus {
  switch (object) {
    case 0:
    case "RAW_LOGS_STATUS_UNSPECIFIED":
      return RawLogsStatus.RAW_LOGS_STATUS_UNSPECIFIED;
    case 1:
    case "RAW_LOGS_STATUS_NOT_ACTIVATED":
      return RawLogsStatus.RAW_LOGS_STATUS_NOT_ACTIVATED;
    case 2:
    case "RAW_LOGS_STATUS_OK":
      return RawLogsStatus.RAW_LOGS_STATUS_OK;
    case 3:
    case "RAW_LOGS_STATUS_FAILED":
      return RawLogsStatus.RAW_LOGS_STATUS_FAILED;
    case 4:
    case "RAW_LOGS_STATUS_PENDING":
      return RawLogsStatus.RAW_LOGS_STATUS_PENDING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RawLogsStatus.UNRECOGNIZED;
  }
}

export function rawLogsStatusToJSON(object: RawLogsStatus): string {
  switch (object) {
    case RawLogsStatus.RAW_LOGS_STATUS_UNSPECIFIED:
      return "RAW_LOGS_STATUS_UNSPECIFIED";
    case RawLogsStatus.RAW_LOGS_STATUS_NOT_ACTIVATED:
      return "RAW_LOGS_STATUS_NOT_ACTIVATED";
    case RawLogsStatus.RAW_LOGS_STATUS_OK:
      return "RAW_LOGS_STATUS_OK";
    case RawLogsStatus.RAW_LOGS_STATUS_FAILED:
      return "RAW_LOGS_STATUS_FAILED";
    case RawLogsStatus.RAW_LOGS_STATUS_PENDING:
      return "RAW_LOGS_STATUS_PENDING";
    case RawLogsStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** User settings for Raw logs. */
export interface RawLogsSettings {
  $type: "yandex.cloud.cdn.v1.RawLogsSettings";
  /** Destination S3 bucket name, note that the suer should be owner of the bucket. */
  bucketName: string;
  /** Bucket region, unused for now, could be blank. */
  bucketRegion: string;
  /**
   * file_prefix: prefix each log object name with specified prefix.
   *
   * The prefix makes it simpler for you to locate the log objects.
   * For example, if you specify the prefix value logs/, each log object that
   * S3 creates begins with the logs/ prefix in its key, so pseudo S3 folders
   * could be setup.
   */
  filePrefix: string;
}

function createBaseRawLogsSettings(): RawLogsSettings {
  return { $type: "yandex.cloud.cdn.v1.RawLogsSettings", bucketName: "", bucketRegion: "", filePrefix: "" };
}

export const RawLogsSettings = {
  $type: "yandex.cloud.cdn.v1.RawLogsSettings" as const,

  encode(message: RawLogsSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketName !== "") {
      writer.uint32(10).string(message.bucketName);
    }
    if (message.bucketRegion !== "") {
      writer.uint32(18).string(message.bucketRegion);
    }
    if (message.filePrefix !== "") {
      writer.uint32(26).string(message.filePrefix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RawLogsSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRawLogsSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bucketName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bucketRegion = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.filePrefix = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RawLogsSettings {
    return {
      $type: RawLogsSettings.$type,
      bucketName: isSet(object.bucketName) ? globalThis.String(object.bucketName) : "",
      bucketRegion: isSet(object.bucketRegion) ? globalThis.String(object.bucketRegion) : "",
      filePrefix: isSet(object.filePrefix) ? globalThis.String(object.filePrefix) : "",
    };
  },

  toJSON(message: RawLogsSettings): unknown {
    const obj: any = {};
    if (message.bucketName !== "") {
      obj.bucketName = message.bucketName;
    }
    if (message.bucketRegion !== "") {
      obj.bucketRegion = message.bucketRegion;
    }
    if (message.filePrefix !== "") {
      obj.filePrefix = message.filePrefix;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RawLogsSettings>, I>>(base?: I): RawLogsSettings {
    return RawLogsSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RawLogsSettings>, I>>(object: I): RawLogsSettings {
    const message = createBaseRawLogsSettings();
    message.bucketName = object.bucketName ?? "";
    message.bucketRegion = object.bucketRegion ?? "";
    message.filePrefix = object.filePrefix ?? "";
    return message;
  },
};

messageTypeRegistry.set(RawLogsSettings.$type, RawLogsSettings);

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
