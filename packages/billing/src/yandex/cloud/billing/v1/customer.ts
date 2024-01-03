/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.billing.v1";

/** A Customer resource. */
export interface Customer {
  $type: "yandex.cloud.billing.v1.Customer";
  /** ID of the customer. */
  id: string;
  /** ID of the [yandex.cloud.billing.v1.BillingAccount] assigned to the customer. */
  billingAccountId: string;
}

/** Person of the customer. Contains legal information. */
export interface CustomerPerson {
  $type: "yandex.cloud.billing.v1.CustomerPerson";
  /** Name of the person. */
  name: string;
  /** Long name of the person. */
  longname: string;
  /** Phone of the person. */
  phone: string;
  /** Email of the person. */
  email: string;
  /** Post code of the person. */
  postCode: string;
  /** Post address of the person. */
  postAddress: string;
  /** Legal address of the person. */
  legalAddress: string;
  /** Tax identification number of the person. */
  tin: string;
}

function createBaseCustomer(): Customer {
  return { $type: "yandex.cloud.billing.v1.Customer", id: "", billingAccountId: "" };
}

export const Customer = {
  $type: "yandex.cloud.billing.v1.Customer" as const,

  encode(message: Customer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.billingAccountId !== "") {
      writer.uint32(18).string(message.billingAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Customer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomer();
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

          message.billingAccountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Customer {
    return {
      $type: Customer.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      billingAccountId: isSet(object.billingAccountId) ? globalThis.String(object.billingAccountId) : "",
    };
  },

  toJSON(message: Customer): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.billingAccountId !== "") {
      obj.billingAccountId = message.billingAccountId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Customer>, I>>(base?: I): Customer {
    return Customer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Customer>, I>>(object: I): Customer {
    const message = createBaseCustomer();
    message.id = object.id ?? "";
    message.billingAccountId = object.billingAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Customer.$type, Customer);

function createBaseCustomerPerson(): CustomerPerson {
  return {
    $type: "yandex.cloud.billing.v1.CustomerPerson",
    name: "",
    longname: "",
    phone: "",
    email: "",
    postCode: "",
    postAddress: "",
    legalAddress: "",
    tin: "",
  };
}

export const CustomerPerson = {
  $type: "yandex.cloud.billing.v1.CustomerPerson" as const,

  encode(message: CustomerPerson, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.longname !== "") {
      writer.uint32(18).string(message.longname);
    }
    if (message.phone !== "") {
      writer.uint32(26).string(message.phone);
    }
    if (message.email !== "") {
      writer.uint32(34).string(message.email);
    }
    if (message.postCode !== "") {
      writer.uint32(42).string(message.postCode);
    }
    if (message.postAddress !== "") {
      writer.uint32(50).string(message.postAddress);
    }
    if (message.legalAddress !== "") {
      writer.uint32(58).string(message.legalAddress);
    }
    if (message.tin !== "") {
      writer.uint32(66).string(message.tin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomerPerson {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomerPerson();
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

          message.longname = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.phone = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.email = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.postCode = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.postAddress = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.legalAddress = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.tin = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CustomerPerson {
    return {
      $type: CustomerPerson.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      longname: isSet(object.longname) ? globalThis.String(object.longname) : "",
      phone: isSet(object.phone) ? globalThis.String(object.phone) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      postCode: isSet(object.postCode) ? globalThis.String(object.postCode) : "",
      postAddress: isSet(object.postAddress) ? globalThis.String(object.postAddress) : "",
      legalAddress: isSet(object.legalAddress) ? globalThis.String(object.legalAddress) : "",
      tin: isSet(object.tin) ? globalThis.String(object.tin) : "",
    };
  },

  toJSON(message: CustomerPerson): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.longname !== "") {
      obj.longname = message.longname;
    }
    if (message.phone !== "") {
      obj.phone = message.phone;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.postCode !== "") {
      obj.postCode = message.postCode;
    }
    if (message.postAddress !== "") {
      obj.postAddress = message.postAddress;
    }
    if (message.legalAddress !== "") {
      obj.legalAddress = message.legalAddress;
    }
    if (message.tin !== "") {
      obj.tin = message.tin;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CustomerPerson>, I>>(base?: I): CustomerPerson {
    return CustomerPerson.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CustomerPerson>, I>>(object: I): CustomerPerson {
    const message = createBaseCustomerPerson();
    message.name = object.name ?? "";
    message.longname = object.longname ?? "";
    message.phone = object.phone ?? "";
    message.email = object.email ?? "";
    message.postCode = object.postCode ?? "";
    message.postAddress = object.postAddress ?? "";
    message.legalAddress = object.legalAddress ?? "";
    message.tin = object.tin ?? "";
    return message;
  },
};

messageTypeRegistry.set(CustomerPerson.$type, CustomerPerson);

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
