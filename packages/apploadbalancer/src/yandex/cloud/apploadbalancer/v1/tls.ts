/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.apploadbalancer.v1";

/** A TLS validation context resource. */
export interface ValidationContext {
  $type: "yandex.cloud.apploadbalancer.v1.ValidationContext";
  trustedCaId?:
    | string
    | undefined;
  /** X.509 certificate contents in PEM format. */
  trustedCaBytes?: string | undefined;
}

function createBaseValidationContext(): ValidationContext {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.ValidationContext",
    trustedCaId: undefined,
    trustedCaBytes: undefined,
  };
}

export const ValidationContext = {
  $type: "yandex.cloud.apploadbalancer.v1.ValidationContext" as const,

  encode(message: ValidationContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trustedCaId !== undefined) {
      writer.uint32(10).string(message.trustedCaId);
    }
    if (message.trustedCaBytes !== undefined) {
      writer.uint32(18).string(message.trustedCaBytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidationContext {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidationContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trustedCaId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.trustedCaBytes = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidationContext {
    return {
      $type: ValidationContext.$type,
      trustedCaId: isSet(object.trustedCaId) ? globalThis.String(object.trustedCaId) : undefined,
      trustedCaBytes: isSet(object.trustedCaBytes) ? globalThis.String(object.trustedCaBytes) : undefined,
    };
  },

  toJSON(message: ValidationContext): unknown {
    const obj: any = {};
    if (message.trustedCaId !== undefined) {
      obj.trustedCaId = message.trustedCaId;
    }
    if (message.trustedCaBytes !== undefined) {
      obj.trustedCaBytes = message.trustedCaBytes;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidationContext>, I>>(base?: I): ValidationContext {
    return ValidationContext.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ValidationContext>, I>>(object: I): ValidationContext {
    const message = createBaseValidationContext();
    message.trustedCaId = object.trustedCaId ?? undefined;
    message.trustedCaBytes = object.trustedCaBytes ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ValidationContext.$type, ValidationContext);

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
