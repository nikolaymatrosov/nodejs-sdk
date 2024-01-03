/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.opensearch.v1";

export interface AuthSettings {
  $type: "yandex.cloud.mdb.opensearch.v1.AuthSettings";
  /** SAML settings */
  saml?: SAMLSettings | undefined;
}

export interface SAMLSettings {
  $type: "yandex.cloud.mdb.opensearch.v1.SAMLSettings";
  enabled: boolean;
  /** Required. The entity ID of your IdP. */
  idpEntityId: string;
  /** Required. The SAML 2.0 metadata file of your IdP. */
  idpMetadataFile: Buffer;
  /** Required. The entity ID of the service provider. */
  spEntityId: string;
  /** Required. The OpenSearch Dashboards base URL. */
  dashboardsUrl: string;
  /** Optional. The attribute in the SAML response where the roles are stored. If not configured, no roles are used. */
  rolesKey: string;
  /** Optional. The attribute in the SAML response where the subject is stored. If not configured, the NameID attribute is used. */
  subjectKey: string;
}

function createBaseAuthSettings(): AuthSettings {
  return { $type: "yandex.cloud.mdb.opensearch.v1.AuthSettings", saml: undefined };
}

export const AuthSettings = {
  $type: "yandex.cloud.mdb.opensearch.v1.AuthSettings" as const,

  encode(message: AuthSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.saml !== undefined) {
      SAMLSettings.encode(message.saml, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.saml = SAMLSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthSettings {
    return { $type: AuthSettings.$type, saml: isSet(object.saml) ? SAMLSettings.fromJSON(object.saml) : undefined };
  },

  toJSON(message: AuthSettings): unknown {
    const obj: any = {};
    if (message.saml !== undefined) {
      obj.saml = SAMLSettings.toJSON(message.saml);
    }
    return obj;
  },

  create(base?: DeepPartial<AuthSettings>): AuthSettings {
    return AuthSettings.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AuthSettings>): AuthSettings {
    const message = createBaseAuthSettings();
    message.saml = (object.saml !== undefined && object.saml !== null)
      ? SAMLSettings.fromPartial(object.saml)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(AuthSettings.$type, AuthSettings);

function createBaseSAMLSettings(): SAMLSettings {
  return {
    $type: "yandex.cloud.mdb.opensearch.v1.SAMLSettings",
    enabled: false,
    idpEntityId: "",
    idpMetadataFile: Buffer.alloc(0),
    spEntityId: "",
    dashboardsUrl: "",
    rolesKey: "",
    subjectKey: "",
  };
}

export const SAMLSettings = {
  $type: "yandex.cloud.mdb.opensearch.v1.SAMLSettings" as const,

  encode(message: SAMLSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.idpEntityId !== "") {
      writer.uint32(18).string(message.idpEntityId);
    }
    if (message.idpMetadataFile.length !== 0) {
      writer.uint32(26).bytes(message.idpMetadataFile);
    }
    if (message.spEntityId !== "") {
      writer.uint32(34).string(message.spEntityId);
    }
    if (message.dashboardsUrl !== "") {
      writer.uint32(42).string(message.dashboardsUrl);
    }
    if (message.rolesKey !== "") {
      writer.uint32(50).string(message.rolesKey);
    }
    if (message.subjectKey !== "") {
      writer.uint32(58).string(message.subjectKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SAMLSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSAMLSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.idpEntityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.idpMetadataFile = reader.bytes() as Buffer;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.spEntityId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.dashboardsUrl = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.rolesKey = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.subjectKey = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SAMLSettings {
    return {
      $type: SAMLSettings.$type,
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      idpEntityId: isSet(object.idpEntityId) ? globalThis.String(object.idpEntityId) : "",
      idpMetadataFile: isSet(object.idpMetadataFile)
        ? Buffer.from(bytesFromBase64(object.idpMetadataFile))
        : Buffer.alloc(0),
      spEntityId: isSet(object.spEntityId) ? globalThis.String(object.spEntityId) : "",
      dashboardsUrl: isSet(object.dashboardsUrl) ? globalThis.String(object.dashboardsUrl) : "",
      rolesKey: isSet(object.rolesKey) ? globalThis.String(object.rolesKey) : "",
      subjectKey: isSet(object.subjectKey) ? globalThis.String(object.subjectKey) : "",
    };
  },

  toJSON(message: SAMLSettings): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.idpEntityId !== "") {
      obj.idpEntityId = message.idpEntityId;
    }
    if (message.idpMetadataFile.length !== 0) {
      obj.idpMetadataFile = base64FromBytes(message.idpMetadataFile);
    }
    if (message.spEntityId !== "") {
      obj.spEntityId = message.spEntityId;
    }
    if (message.dashboardsUrl !== "") {
      obj.dashboardsUrl = message.dashboardsUrl;
    }
    if (message.rolesKey !== "") {
      obj.rolesKey = message.rolesKey;
    }
    if (message.subjectKey !== "") {
      obj.subjectKey = message.subjectKey;
    }
    return obj;
  },

  create(base?: DeepPartial<SAMLSettings>): SAMLSettings {
    return SAMLSettings.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SAMLSettings>): SAMLSettings {
    const message = createBaseSAMLSettings();
    message.enabled = object.enabled ?? false;
    message.idpEntityId = object.idpEntityId ?? "";
    message.idpMetadataFile = object.idpMetadataFile ?? Buffer.alloc(0);
    message.spEntityId = object.spEntityId ?? "";
    message.dashboardsUrl = object.dashboardsUrl ?? "";
    message.rolesKey = object.rolesKey ?? "";
    message.subjectKey = object.subjectKey ?? "";
    return message;
  },
};

messageTypeRegistry.set(SAMLSettings.$type, SAMLSettings);

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
