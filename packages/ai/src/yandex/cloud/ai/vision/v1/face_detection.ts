/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";
import { Polygon } from "./primitives";

export const protobufPackage = "yandex.cloud.ai.vision.v1";

export interface FaceAnnotation {
  $type: "yandex.cloud.ai.vision.v1.FaceAnnotation";
  /** An array of detected faces for the specified image. */
  faces: Face[];
}

export interface Face {
  $type: "yandex.cloud.ai.vision.v1.Face";
  /** Area on the image where the face is located. */
  boundingBox?: Polygon | undefined;
}

function createBaseFaceAnnotation(): FaceAnnotation {
  return { $type: "yandex.cloud.ai.vision.v1.FaceAnnotation", faces: [] };
}

export const FaceAnnotation = {
  $type: "yandex.cloud.ai.vision.v1.FaceAnnotation" as const,

  encode(message: FaceAnnotation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.faces) {
      Face.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FaceAnnotation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFaceAnnotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.faces.push(Face.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FaceAnnotation {
    return {
      $type: FaceAnnotation.$type,
      faces: globalThis.Array.isArray(object?.faces) ? object.faces.map((e: any) => Face.fromJSON(e)) : [],
    };
  },

  toJSON(message: FaceAnnotation): unknown {
    const obj: any = {};
    if (message.faces?.length) {
      obj.faces = message.faces.map((e) => Face.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FaceAnnotation>, I>>(base?: I): FaceAnnotation {
    return FaceAnnotation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FaceAnnotation>, I>>(object: I): FaceAnnotation {
    const message = createBaseFaceAnnotation();
    message.faces = object.faces?.map((e) => Face.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(FaceAnnotation.$type, FaceAnnotation);

function createBaseFace(): Face {
  return { $type: "yandex.cloud.ai.vision.v1.Face", boundingBox: undefined };
}

export const Face = {
  $type: "yandex.cloud.ai.vision.v1.Face" as const,

  encode(message: Face, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.boundingBox !== undefined) {
      Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Face {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.boundingBox = Polygon.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Face {
    return {
      $type: Face.$type,
      boundingBox: isSet(object.boundingBox) ? Polygon.fromJSON(object.boundingBox) : undefined,
    };
  },

  toJSON(message: Face): unknown {
    const obj: any = {};
    if (message.boundingBox !== undefined) {
      obj.boundingBox = Polygon.toJSON(message.boundingBox);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Face>, I>>(base?: I): Face {
    return Face.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Face>, I>>(object: I): Face {
    const message = createBaseFace();
    message.boundingBox = (object.boundingBox !== undefined && object.boundingBox !== null)
      ? Polygon.fromPartial(object.boundingBox)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Face.$type, Face);

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
