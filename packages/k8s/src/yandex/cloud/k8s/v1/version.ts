/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.k8s.v1";

export interface VersionInfo {
  $type: "yandex.cloud.k8s.v1.VersionInfo";
  /** Current Kubernetes version, format: major.minor (e.g. 1.15). */
  currentVersion: string;
  /**
   * Newer revisions may include Kubernetes patches (e.g 1.15.1 -> 1.15.2) as well
   * as some internal component updates - new features or bug fixes in platform specific
   * components either on the master or nodes.
   */
  newRevisionAvailable: boolean;
  /**
   * Description of the changes to be applied when updating to the latest
   * revision. Empty if new_revision_available is false.
   */
  newRevisionSummary: string;
  /**
   * The current version is on the deprecation schedule, component (master or node group)
   * should be upgraded.
   */
  versionDeprecated: boolean;
}

export interface UpdateVersionSpec {
  $type: "yandex.cloud.k8s.v1.UpdateVersionSpec";
  /** Request update to a newer version of Kubernetes (1.x -> 1.y). */
  version?:
    | string
    | undefined;
  /** Request update to the latest revision for the current version. */
  latestRevision?: boolean | undefined;
}

function createBaseVersionInfo(): VersionInfo {
  return {
    $type: "yandex.cloud.k8s.v1.VersionInfo",
    currentVersion: "",
    newRevisionAvailable: false,
    newRevisionSummary: "",
    versionDeprecated: false,
  };
}

export const VersionInfo = {
  $type: "yandex.cloud.k8s.v1.VersionInfo" as const,

  encode(message: VersionInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currentVersion !== "") {
      writer.uint32(10).string(message.currentVersion);
    }
    if (message.newRevisionAvailable === true) {
      writer.uint32(16).bool(message.newRevisionAvailable);
    }
    if (message.newRevisionSummary !== "") {
      writer.uint32(26).string(message.newRevisionSummary);
    }
    if (message.versionDeprecated === true) {
      writer.uint32(32).bool(message.versionDeprecated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VersionInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.currentVersion = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.newRevisionAvailable = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.newRevisionSummary = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.versionDeprecated = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VersionInfo {
    return {
      $type: VersionInfo.$type,
      currentVersion: isSet(object.currentVersion) ? globalThis.String(object.currentVersion) : "",
      newRevisionAvailable: isSet(object.newRevisionAvailable)
        ? globalThis.Boolean(object.newRevisionAvailable)
        : false,
      newRevisionSummary: isSet(object.newRevisionSummary) ? globalThis.String(object.newRevisionSummary) : "",
      versionDeprecated: isSet(object.versionDeprecated) ? globalThis.Boolean(object.versionDeprecated) : false,
    };
  },

  toJSON(message: VersionInfo): unknown {
    const obj: any = {};
    if (message.currentVersion !== "") {
      obj.currentVersion = message.currentVersion;
    }
    if (message.newRevisionAvailable === true) {
      obj.newRevisionAvailable = message.newRevisionAvailable;
    }
    if (message.newRevisionSummary !== "") {
      obj.newRevisionSummary = message.newRevisionSummary;
    }
    if (message.versionDeprecated === true) {
      obj.versionDeprecated = message.versionDeprecated;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VersionInfo>, I>>(base?: I): VersionInfo {
    return VersionInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VersionInfo>, I>>(object: I): VersionInfo {
    const message = createBaseVersionInfo();
    message.currentVersion = object.currentVersion ?? "";
    message.newRevisionAvailable = object.newRevisionAvailable ?? false;
    message.newRevisionSummary = object.newRevisionSummary ?? "";
    message.versionDeprecated = object.versionDeprecated ?? false;
    return message;
  },
};

messageTypeRegistry.set(VersionInfo.$type, VersionInfo);

function createBaseUpdateVersionSpec(): UpdateVersionSpec {
  return { $type: "yandex.cloud.k8s.v1.UpdateVersionSpec", version: undefined, latestRevision: undefined };
}

export const UpdateVersionSpec = {
  $type: "yandex.cloud.k8s.v1.UpdateVersionSpec" as const,

  encode(message: UpdateVersionSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== undefined) {
      writer.uint32(10).string(message.version);
    }
    if (message.latestRevision !== undefined) {
      writer.uint32(16).bool(message.latestRevision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateVersionSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateVersionSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.latestRevision = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateVersionSpec {
    return {
      $type: UpdateVersionSpec.$type,
      version: isSet(object.version) ? globalThis.String(object.version) : undefined,
      latestRevision: isSet(object.latestRevision) ? globalThis.Boolean(object.latestRevision) : undefined,
    };
  },

  toJSON(message: UpdateVersionSpec): unknown {
    const obj: any = {};
    if (message.version !== undefined) {
      obj.version = message.version;
    }
    if (message.latestRevision !== undefined) {
      obj.latestRevision = message.latestRevision;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateVersionSpec>, I>>(base?: I): UpdateVersionSpec {
    return UpdateVersionSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateVersionSpec>, I>>(object: I): UpdateVersionSpec {
    const message = createBaseUpdateVersionSpec();
    message.version = object.version ?? undefined;
    message.latestRevision = object.latestRevision ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateVersionSpec.$type, UpdateVersionSpec);

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
