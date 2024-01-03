/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { LogOptions } from "./logging";
import { Target } from "./target_group";

export const protobufPackage = "yandex.cloud.apploadbalancer.v1";

/**
 * An application load balancer resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/application-load-balancer).
 */
export interface LoadBalancer {
  $type: "yandex.cloud.apploadbalancer.v1.LoadBalancer";
  /** ID of the application load balancer. Generated at creation time. */
  id: string;
  /** Name of the application load balancer. The name is unique within the folder. */
  name: string;
  /** Description of the application load balancer. */
  description: string;
  /** ID of the folder that the application load balancer belongs to. */
  folderId: string;
  /**
   * Application load balancer labels as `key:value` pairs.
   * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
   */
  labels: { [key: string]: string };
  /** Status of the application load balancer. */
  status: LoadBalancer_Status;
  /** ID of the region that the application load balancer is located at. */
  regionId: string;
  /** ID of the network that the application load balancer belongs to. */
  networkId: string;
  /**
   * Listeners that belong to the application load balancer.
   *
   * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#listener).
   */
  listeners: Listener[];
  /**
   * Locality settings of the application load balancer.
   *
   * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#lb-location).
   */
  allocationPolicy?:
    | AllocationPolicy
    | undefined;
  /**
   * ID of the log group that stores access logs of the application load balancer.
   *
   * The logs can be accessed using a Cloud Functions [trigger for Cloud Logs](/docs/functions/operations/trigger/cloudlogs-trigger-create).
   */
  logGroupId: string;
  /**
   * ID's of the security groups attributed to the application load balancer.
   *
   * For details about the concept,
   * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#security-groups).
   */
  securityGroupIds: string[];
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /**
   * Scaling settings of the application load balancer.
   *
   * The scaling settings relate to a special internal instance group which facilitates the balancer's work.
   * Instances in this group are called _resource units_. The group is scaled automatically based on incoming load
   * and within limitations specified in these settings.
   *
   * For details about the concept,
   * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#lcu-scaling).
   */
  autoScalePolicy?:
    | AutoScalePolicy
    | undefined;
  /** Cloud logging settings of the application load balancer. */
  logOptions?: LogOptions | undefined;
}

export enum LoadBalancer_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - The application load balancer is being created. */
  CREATING = 1,
  /** STARTING - The application load balancer is being started. */
  STARTING = 2,
  /** ACTIVE - The application load balancer is active and sends traffic to the targets. */
  ACTIVE = 3,
  /** STOPPING - The application load balancer is being stopped. */
  STOPPING = 4,
  /** STOPPED - The application load balancer is stopped and doesn't send traffic to the targets. */
  STOPPED = 5,
  /** DELETING - The application load balancer is being deleted. */
  DELETING = 6,
  UNRECOGNIZED = -1,
}

export function loadBalancer_StatusFromJSON(object: any): LoadBalancer_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return LoadBalancer_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return LoadBalancer_Status.CREATING;
    case 2:
    case "STARTING":
      return LoadBalancer_Status.STARTING;
    case 3:
    case "ACTIVE":
      return LoadBalancer_Status.ACTIVE;
    case 4:
    case "STOPPING":
      return LoadBalancer_Status.STOPPING;
    case 5:
    case "STOPPED":
      return LoadBalancer_Status.STOPPED;
    case 6:
    case "DELETING":
      return LoadBalancer_Status.DELETING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LoadBalancer_Status.UNRECOGNIZED;
  }
}

export function loadBalancer_StatusToJSON(object: LoadBalancer_Status): string {
  switch (object) {
    case LoadBalancer_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case LoadBalancer_Status.CREATING:
      return "CREATING";
    case LoadBalancer_Status.STARTING:
      return "STARTING";
    case LoadBalancer_Status.ACTIVE:
      return "ACTIVE";
    case LoadBalancer_Status.STOPPING:
      return "STOPPING";
    case LoadBalancer_Status.STOPPED:
      return "STOPPED";
    case LoadBalancer_Status.DELETING:
      return "DELETING";
    case LoadBalancer_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface LoadBalancer_LabelsEntry {
  $type: "yandex.cloud.apploadbalancer.v1.LoadBalancer.LabelsEntry";
  key: string;
  value: string;
}

/** An endpoint address resource. */
export interface Address {
  $type: "yandex.cloud.apploadbalancer.v1.Address";
  /** Public IPv4 endpoint address. */
  externalIpv4Address?:
    | ExternalIpv4Address
    | undefined;
  /**
   * Internal IPv4 endpoint address.
   *
   * To enable the use of listeners with internal addresses, [contact support](https://console.cloud.yandex.ru/support).
   */
  internalIpv4Address?:
    | InternalIpv4Address
    | undefined;
  /** Public IPv6 endpoint address. */
  externalIpv6Address?: ExternalIpv6Address | undefined;
}

/** A public (external) IPv4 endpoint address resource. */
export interface ExternalIpv4Address {
  $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv4Address";
  /** IPv4 address. */
  address: string;
}

/** An internal IPv4 endpoint address resource. */
export interface InternalIpv4Address {
  $type: "yandex.cloud.apploadbalancer.v1.InternalIpv4Address";
  /** IPv4 address. */
  address: string;
  /** ID of the subnet that the address belongs to. */
  subnetId: string;
}

/** A public (external) IPv4 endpoint address resource. */
export interface ExternalIpv6Address {
  $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv6Address";
  /** IPv6 address. */
  address: string;
}

/**
 * An application load balancer location resource.
 *
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#lb-location).
 */
export interface Location {
  $type: "yandex.cloud.apploadbalancer.v1.Location";
  /**
   * ID of the availability zone where the application load balancer resides.
   *
   * Each availability zone can only be specified once.
   */
  zoneId: string;
  /** ID of the subnet that the application load balancer belongs to. */
  subnetId: string;
  /**
   * Disables the load balancer node in the specified availability zone.
   *
   * Backends in the availability zone are not directly affected by this setting.
   * They still may receive traffic from the load balancer nodes in other availability zones,
   * subject to [LoadBalancingConfig.locality_aware_routing_percent] and [LoadBalancingConfig.strict_locality] settings.
   */
  disableTraffic: boolean;
}

/** A locality settings (allocation policy) resource. */
export interface AllocationPolicy {
  $type: "yandex.cloud.apploadbalancer.v1.AllocationPolicy";
  /** Availability zones and subnets that the application load balancer resides. */
  locations: Location[];
}

/**
 * A listener resource.
 *
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#listener).
 */
export interface Listener {
  $type: "yandex.cloud.apploadbalancer.v1.Listener";
  /**
   * Name of the listener. The name is unique within the application load balancer.
   * The string length in characters is 3-63.
   */
  name: string;
  /**
   * Endpoints of the listener.
   *
   * Endpoints are defined by their IP addresses and ports.
   */
  endpoints: Endpoint[];
  /** Unencrypted HTTP listener settings. */
  http?:
    | HttpListener
    | undefined;
  /**
   * TLS-encrypted HTTP or TCP stream listener settings.
   *
   * All handlers within a listener ([TlsListener.default_handler] and [TlsListener.sni_handlers]) must be of one
   * type, [HttpHandler] or [StreamHandler]. Mixing HTTP and TCP stream traffic in a TLS-encrypted listener is not
   * supported.
   */
  tls?:
    | TlsListener
    | undefined;
  /** Unencrypted stream (TCP) listener settings. */
  stream?: StreamListener | undefined;
}

/** An endpoint resource. */
export interface Endpoint {
  $type: "yandex.cloud.apploadbalancer.v1.Endpoint";
  /** Endpoint public (external) and internal addresses. */
  addresses: Address[];
  /** Endpoint ports. */
  ports: number[];
}

/** An HTTP listener resource. */
export interface HttpListener {
  $type: "yandex.cloud.apploadbalancer.v1.HttpListener";
  /**
   * Settings for handling HTTP requests.
   *
   * Only one of `handler` and [redirects] can be specified.
   */
  handler?:
    | HttpHandler
    | undefined;
  /**
   * Redirects settings.
   *
   * Only one of `redirects` and [handler] can be specified.
   */
  redirects?: Redirects | undefined;
}

/** TLS-encrypted (HTTP or TCP stream) listener resource. */
export interface TlsListener {
  $type: "yandex.cloud.apploadbalancer.v1.TlsListener";
  /**
   * Settings for handling requests by default, with Server Name
   * Indication (SNI) not matching any of the [sni_handlers].
   */
  defaultHandler?:
    | TlsHandler
    | undefined;
  /**
   * Settings for handling requests with Server Name Indication (SNI)
   * matching one of [SniMatch.server_names] values.
   */
  sniHandlers: SniMatch[];
}

/** A stream (TCP) listener resource. */
export interface StreamListener {
  $type: "yandex.cloud.apploadbalancer.v1.StreamListener";
  /** Settings for handling stream (TCP) requests. */
  handler?: StreamHandler | undefined;
}

/** An HTTP/2 options resource. */
export interface Http2Options {
  $type: "yandex.cloud.apploadbalancer.v1.Http2Options";
  /** Maximum number of concurrent HTTP/2 streams in a connection. */
  maxConcurrentStreams: number;
}

/** A stream (TCP) handler resource. */
export interface StreamHandler {
  $type: "yandex.cloud.apploadbalancer.v1.StreamHandler";
  /**
   * ID of the backend group processing requests. For details about the concept, see
   * [documentation](/docs/application-load-balancer/concepts/backend-group).
   *
   * The backend group type, specified via [BackendGroup.backend], must be `stream`.
   *
   * To get the list of all available backend groups, make a [BackendGroupService.List] request.
   */
  backendGroupId: string;
}

/** An HTTP handler resource. */
export interface HttpHandler {
  $type: "yandex.cloud.apploadbalancer.v1.HttpHandler";
  /**
   * ID of the HTTP router processing requests. For details about the concept, see
   * [documentation](/docs/application-load-balancer/concepts/http-router).
   *
   * To get the list of all available HTTP routers, make a [HttpRouterService.List] request.
   */
  httpRouterId: string;
  /**
   * HTTP/2 settings.
   *
   * If specified, incoming HTTP/2 requests are supported by the listener.
   */
  http2Options?:
    | Http2Options
    | undefined;
  /** Enables support for incoming HTTP/1.0 and HTTP/1.1 requests and disables it for HTTP/2 requests. */
  allowHttp10?:
    | boolean
    | undefined;
  /** When unset, will preserve the incoming x-request-id header, otherwise would rewrite it with a new value. */
  rewriteRequestId: boolean;
}

/** A listener redirects resource. */
export interface Redirects {
  $type: "yandex.cloud.apploadbalancer.v1.Redirects";
  /**
   * Redirects all unencrypted HTTP requests to the same URI with scheme changed to `https`.
   *
   * The setting has the same effect as a single, catch-all [HttpRoute]
   * with [RedirectAction.replace_scheme] set to `https`.
   */
  httpToHttps: boolean;
}

/** A SNI handler resource. */
export interface SniMatch {
  $type: "yandex.cloud.apploadbalancer.v1.SniMatch";
  /** Name of the SNI handler. */
  name: string;
  /** Server names that are matched by the SNI handler. */
  serverNames: string[];
  /** Settings for handling requests with Server Name Indication (SNI) matching one of [server_names] values. */
  handler?: TlsHandler | undefined;
}

/** A TLS-encrypted (HTTP or TCP stream) handler resource. */
export interface TlsHandler {
  $type: "yandex.cloud.apploadbalancer.v1.TlsHandler";
  /** HTTP handler. */
  httpHandler?:
    | HttpHandler
    | undefined;
  /** Stream (TCP) handler. */
  streamHandler?:
    | StreamHandler
    | undefined;
  /**
   * ID's of the TLS server certificates from [Certificate Manager](/docs/certificate-manager/).
   *
   * RSA and ECDSA certificates are supported, and only the first certificate of each type is used.
   */
  certificateIds: string[];
}

/** A target state resource. */
export interface TargetState {
  $type: "yandex.cloud.apploadbalancer.v1.TargetState";
  /** Health of the target, i.e. its statuses in all availability zones. */
  status?:
    | TargetState_HealthcheckStatus
    | undefined;
  /** Target. */
  target?: Target | undefined;
}

/** Supported target statuses. */
export enum TargetState_Status {
  STATUS_UNSPECIFIED = 0,
  /**
   * HEALTHY - All of the health checks specified in [HttpBackend.healthchecks] or [GrpcBackend.healthchecks] are passed
   * (the number depends on the [HealthCheck.healthy_threshold] setting) and the target is ready to receive traffic.
   */
  HEALTHY = 1,
  /**
   * PARTIALLY_HEALTHY - Some of the health checks specified in [HttpBackend.healthchecks] or [GrpcBackend.healthchecks] failed
   * (the number depends on the [HealthCheck.unhealthy_threshold] setting).
   * The target is ready to receive traffic from the load balancer nodes which, based on their health checks,
   * consider the target healthy.
   */
  PARTIALLY_HEALTHY = 2,
  /**
   * UNHEALTHY - All of the health checks specified in [HttpBackend.healthchecks] or [GrpcBackend.healthchecks] failed
   * (the number depends on the [HealthCheck.unhealthy_threshold] setting) and the target is not receiving traffic.
   */
  UNHEALTHY = 3,
  /** DRAINING - Target is being deleted and the application load balancer is no longer sending traffic to this target. */
  DRAINING = 4,
  TIMEOUT = 5,
  UNRECOGNIZED = -1,
}

export function targetState_StatusFromJSON(object: any): TargetState_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return TargetState_Status.STATUS_UNSPECIFIED;
    case 1:
    case "HEALTHY":
      return TargetState_Status.HEALTHY;
    case 2:
    case "PARTIALLY_HEALTHY":
      return TargetState_Status.PARTIALLY_HEALTHY;
    case 3:
    case "UNHEALTHY":
      return TargetState_Status.UNHEALTHY;
    case 4:
    case "DRAINING":
      return TargetState_Status.DRAINING;
    case 5:
    case "TIMEOUT":
      return TargetState_Status.TIMEOUT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TargetState_Status.UNRECOGNIZED;
  }
}

export function targetState_StatusToJSON(object: TargetState_Status): string {
  switch (object) {
    case TargetState_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case TargetState_Status.HEALTHY:
      return "HEALTHY";
    case TargetState_Status.PARTIALLY_HEALTHY:
      return "PARTIALLY_HEALTHY";
    case TargetState_Status.UNHEALTHY:
      return "UNHEALTHY";
    case TargetState_Status.DRAINING:
      return "DRAINING";
    case TargetState_Status.TIMEOUT:
      return "TIMEOUT";
    case TargetState_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Health of the target. */
export interface TargetState_HealthcheckStatus {
  $type: "yandex.cloud.apploadbalancer.v1.TargetState.HealthcheckStatus";
  /** Statuses of the target in its availability zones. */
  zoneStatuses: TargetState_ZoneHealthcheckStatus[];
}

/** Health of the target in the availability zone. */
export interface TargetState_ZoneHealthcheckStatus {
  $type: "yandex.cloud.apploadbalancer.v1.TargetState.ZoneHealthcheckStatus";
  /** ID of the availability zone. */
  zoneId: string;
  /** Status of the target in the availability zone. */
  status: TargetState_Status;
  /**
   * Indicates whether the target has been marked `UNHEALTHY` due to failing active health checks,
   * which determine target statuses as configured in [HttpBackend.healthchecks] or [GrpcBackend.healthchecks].
   *
   * Currently the only type of health checks is active, as described above.
   * Passive health checks, which determine the health of a target based on its responses to production requests
   * (HTTP 5xx status codes, connection errors etc.), are not implemented yet.
   */
  failedActiveHc: boolean;
}

/** A resource for scaling settings of an application load balancer. */
export interface AutoScalePolicy {
  $type: "yandex.cloud.apploadbalancer.v1.AutoScalePolicy";
  /**
   * Lower limit for the number of resource units in each availability zone.
   *
   * If not specified previously (using other instruments such as management console), the default value is 2.
   * To revert to it, specify it explicitly.
   *
   * The minimum value is 2.
   */
  minZoneSize: number;
  /**
   * Upper limit for the total number of resource units across all availability zones.
   *
   * If a positive value is specified, it must be at least [min_zone_size] multiplied by the size of
   * [AllocationPolicy.locations].
   *
   * If the value is 0, there is no upper limit.
   */
  maxSize: number;
}

function createBaseLoadBalancer(): LoadBalancer {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.LoadBalancer",
    id: "",
    name: "",
    description: "",
    folderId: "",
    labels: {},
    status: 0,
    regionId: "",
    networkId: "",
    listeners: [],
    allocationPolicy: undefined,
    logGroupId: "",
    securityGroupIds: [],
    createdAt: undefined,
    autoScalePolicy: undefined,
    logOptions: undefined,
  };
}

export const LoadBalancer = {
  $type: "yandex.cloud.apploadbalancer.v1.LoadBalancer" as const,

  encode(message: LoadBalancer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.folderId !== "") {
      writer.uint32(34).string(message.folderId);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      LoadBalancer_LabelsEntry.encode({
        $type: "yandex.cloud.apploadbalancer.v1.LoadBalancer.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.regionId !== "") {
      writer.uint32(58).string(message.regionId);
    }
    if (message.networkId !== "") {
      writer.uint32(66).string(message.networkId);
    }
    for (const v of message.listeners) {
      Listener.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.allocationPolicy !== undefined) {
      AllocationPolicy.encode(message.allocationPolicy, writer.uint32(82).fork()).ldelim();
    }
    if (message.logGroupId !== "") {
      writer.uint32(90).string(message.logGroupId);
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(98).string(v!);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(106).fork()).ldelim();
    }
    if (message.autoScalePolicy !== undefined) {
      AutoScalePolicy.encode(message.autoScalePolicy, writer.uint32(114).fork()).ldelim();
    }
    if (message.logOptions !== undefined) {
      LogOptions.encode(message.logOptions, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoadBalancer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadBalancer();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.folderId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = LoadBalancer_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.regionId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.networkId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.listeners.push(Listener.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.allocationPolicy = AllocationPolicy.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.logGroupId = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.securityGroupIds.push(reader.string());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.autoScalePolicy = AutoScalePolicy.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.logOptions = LogOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoadBalancer {
    return {
      $type: LoadBalancer.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      folderId: isSet(object.folderId) ? globalThis.String(object.folderId) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      status: isSet(object.status) ? loadBalancer_StatusFromJSON(object.status) : 0,
      regionId: isSet(object.regionId) ? globalThis.String(object.regionId) : "",
      networkId: isSet(object.networkId) ? globalThis.String(object.networkId) : "",
      listeners: globalThis.Array.isArray(object?.listeners)
        ? object.listeners.map((e: any) => Listener.fromJSON(e))
        : [],
      allocationPolicy: isSet(object.allocationPolicy) ? AllocationPolicy.fromJSON(object.allocationPolicy) : undefined,
      logGroupId: isSet(object.logGroupId) ? globalThis.String(object.logGroupId) : "",
      securityGroupIds: globalThis.Array.isArray(object?.securityGroupIds)
        ? object.securityGroupIds.map((e: any) => globalThis.String(e))
        : [],
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      autoScalePolicy: isSet(object.autoScalePolicy) ? AutoScalePolicy.fromJSON(object.autoScalePolicy) : undefined,
      logOptions: isSet(object.logOptions) ? LogOptions.fromJSON(object.logOptions) : undefined,
    };
  },

  toJSON(message: LoadBalancer): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.folderId !== "") {
      obj.folderId = message.folderId;
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
    if (message.status !== 0) {
      obj.status = loadBalancer_StatusToJSON(message.status);
    }
    if (message.regionId !== "") {
      obj.regionId = message.regionId;
    }
    if (message.networkId !== "") {
      obj.networkId = message.networkId;
    }
    if (message.listeners?.length) {
      obj.listeners = message.listeners.map((e) => Listener.toJSON(e));
    }
    if (message.allocationPolicy !== undefined) {
      obj.allocationPolicy = AllocationPolicy.toJSON(message.allocationPolicy);
    }
    if (message.logGroupId !== "") {
      obj.logGroupId = message.logGroupId;
    }
    if (message.securityGroupIds?.length) {
      obj.securityGroupIds = message.securityGroupIds;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.autoScalePolicy !== undefined) {
      obj.autoScalePolicy = AutoScalePolicy.toJSON(message.autoScalePolicy);
    }
    if (message.logOptions !== undefined) {
      obj.logOptions = LogOptions.toJSON(message.logOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoadBalancer>, I>>(base?: I): LoadBalancer {
    return LoadBalancer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoadBalancer>, I>>(object: I): LoadBalancer {
    const message = createBaseLoadBalancer();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.folderId = object.folderId ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.status = object.status ?? 0;
    message.regionId = object.regionId ?? "";
    message.networkId = object.networkId ?? "";
    message.listeners = object.listeners?.map((e) => Listener.fromPartial(e)) || [];
    message.allocationPolicy = (object.allocationPolicy !== undefined && object.allocationPolicy !== null)
      ? AllocationPolicy.fromPartial(object.allocationPolicy)
      : undefined;
    message.logGroupId = object.logGroupId ?? "";
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.createdAt = object.createdAt ?? undefined;
    message.autoScalePolicy = (object.autoScalePolicy !== undefined && object.autoScalePolicy !== null)
      ? AutoScalePolicy.fromPartial(object.autoScalePolicy)
      : undefined;
    message.logOptions = (object.logOptions !== undefined && object.logOptions !== null)
      ? LogOptions.fromPartial(object.logOptions)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(LoadBalancer.$type, LoadBalancer);

function createBaseLoadBalancer_LabelsEntry(): LoadBalancer_LabelsEntry {
  return { $type: "yandex.cloud.apploadbalancer.v1.LoadBalancer.LabelsEntry", key: "", value: "" };
}

export const LoadBalancer_LabelsEntry = {
  $type: "yandex.cloud.apploadbalancer.v1.LoadBalancer.LabelsEntry" as const,

  encode(message: LoadBalancer_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoadBalancer_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadBalancer_LabelsEntry();
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

  fromJSON(object: any): LoadBalancer_LabelsEntry {
    return {
      $type: LoadBalancer_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: LoadBalancer_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoadBalancer_LabelsEntry>, I>>(base?: I): LoadBalancer_LabelsEntry {
    return LoadBalancer_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoadBalancer_LabelsEntry>, I>>(object: I): LoadBalancer_LabelsEntry {
    const message = createBaseLoadBalancer_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(LoadBalancer_LabelsEntry.$type, LoadBalancer_LabelsEntry);

function createBaseAddress(): Address {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.Address",
    externalIpv4Address: undefined,
    internalIpv4Address: undefined,
    externalIpv6Address: undefined,
  };
}

export const Address = {
  $type: "yandex.cloud.apploadbalancer.v1.Address" as const,

  encode(message: Address, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.externalIpv4Address !== undefined) {
      ExternalIpv4Address.encode(message.externalIpv4Address, writer.uint32(10).fork()).ldelim();
    }
    if (message.internalIpv4Address !== undefined) {
      InternalIpv4Address.encode(message.internalIpv4Address, writer.uint32(18).fork()).ldelim();
    }
    if (message.externalIpv6Address !== undefined) {
      ExternalIpv6Address.encode(message.externalIpv6Address, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Address {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.externalIpv4Address = ExternalIpv4Address.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.internalIpv4Address = InternalIpv4Address.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.externalIpv6Address = ExternalIpv6Address.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Address {
    return {
      $type: Address.$type,
      externalIpv4Address: isSet(object.externalIpv4Address)
        ? ExternalIpv4Address.fromJSON(object.externalIpv4Address)
        : undefined,
      internalIpv4Address: isSet(object.internalIpv4Address)
        ? InternalIpv4Address.fromJSON(object.internalIpv4Address)
        : undefined,
      externalIpv6Address: isSet(object.externalIpv6Address)
        ? ExternalIpv6Address.fromJSON(object.externalIpv6Address)
        : undefined,
    };
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    if (message.externalIpv4Address !== undefined) {
      obj.externalIpv4Address = ExternalIpv4Address.toJSON(message.externalIpv4Address);
    }
    if (message.internalIpv4Address !== undefined) {
      obj.internalIpv4Address = InternalIpv4Address.toJSON(message.internalIpv4Address);
    }
    if (message.externalIpv6Address !== undefined) {
      obj.externalIpv6Address = ExternalIpv6Address.toJSON(message.externalIpv6Address);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Address>, I>>(base?: I): Address {
    return Address.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Address>, I>>(object: I): Address {
    const message = createBaseAddress();
    message.externalIpv4Address = (object.externalIpv4Address !== undefined && object.externalIpv4Address !== null)
      ? ExternalIpv4Address.fromPartial(object.externalIpv4Address)
      : undefined;
    message.internalIpv4Address = (object.internalIpv4Address !== undefined && object.internalIpv4Address !== null)
      ? InternalIpv4Address.fromPartial(object.internalIpv4Address)
      : undefined;
    message.externalIpv6Address = (object.externalIpv6Address !== undefined && object.externalIpv6Address !== null)
      ? ExternalIpv6Address.fromPartial(object.externalIpv6Address)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Address.$type, Address);

function createBaseExternalIpv4Address(): ExternalIpv4Address {
  return { $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv4Address", address: "" };
}

export const ExternalIpv4Address = {
  $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv4Address" as const,

  encode(message: ExternalIpv4Address, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalIpv4Address {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalIpv4Address();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExternalIpv4Address {
    return {
      $type: ExternalIpv4Address.$type,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
    };
  },

  toJSON(message: ExternalIpv4Address): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExternalIpv4Address>, I>>(base?: I): ExternalIpv4Address {
    return ExternalIpv4Address.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExternalIpv4Address>, I>>(object: I): ExternalIpv4Address {
    const message = createBaseExternalIpv4Address();
    message.address = object.address ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExternalIpv4Address.$type, ExternalIpv4Address);

function createBaseInternalIpv4Address(): InternalIpv4Address {
  return { $type: "yandex.cloud.apploadbalancer.v1.InternalIpv4Address", address: "", subnetId: "" };
}

export const InternalIpv4Address = {
  $type: "yandex.cloud.apploadbalancer.v1.InternalIpv4Address" as const,

  encode(message: InternalIpv4Address, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.subnetId !== "") {
      writer.uint32(18).string(message.subnetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InternalIpv4Address {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInternalIpv4Address();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subnetId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InternalIpv4Address {
    return {
      $type: InternalIpv4Address.$type,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
    };
  },

  toJSON(message: InternalIpv4Address): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InternalIpv4Address>, I>>(base?: I): InternalIpv4Address {
    return InternalIpv4Address.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InternalIpv4Address>, I>>(object: I): InternalIpv4Address {
    const message = createBaseInternalIpv4Address();
    message.address = object.address ?? "";
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(InternalIpv4Address.$type, InternalIpv4Address);

function createBaseExternalIpv6Address(): ExternalIpv6Address {
  return { $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv6Address", address: "" };
}

export const ExternalIpv6Address = {
  $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv6Address" as const,

  encode(message: ExternalIpv6Address, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalIpv6Address {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalIpv6Address();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExternalIpv6Address {
    return {
      $type: ExternalIpv6Address.$type,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
    };
  },

  toJSON(message: ExternalIpv6Address): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExternalIpv6Address>, I>>(base?: I): ExternalIpv6Address {
    return ExternalIpv6Address.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExternalIpv6Address>, I>>(object: I): ExternalIpv6Address {
    const message = createBaseExternalIpv6Address();
    message.address = object.address ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExternalIpv6Address.$type, ExternalIpv6Address);

function createBaseLocation(): Location {
  return { $type: "yandex.cloud.apploadbalancer.v1.Location", zoneId: "", subnetId: "", disableTraffic: false };
}

export const Location = {
  $type: "yandex.cloud.apploadbalancer.v1.Location" as const,

  encode(message: Location, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }
    if (message.subnetId !== "") {
      writer.uint32(18).string(message.subnetId);
    }
    if (message.disableTraffic === true) {
      writer.uint32(24).bool(message.disableTraffic);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Location {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.zoneId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subnetId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.disableTraffic = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Location {
    return {
      $type: Location.$type,
      zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "",
      subnetId: isSet(object.subnetId) ? globalThis.String(object.subnetId) : "",
      disableTraffic: isSet(object.disableTraffic) ? globalThis.Boolean(object.disableTraffic) : false,
    };
  },

  toJSON(message: Location): unknown {
    const obj: any = {};
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    if (message.subnetId !== "") {
      obj.subnetId = message.subnetId;
    }
    if (message.disableTraffic === true) {
      obj.disableTraffic = message.disableTraffic;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Location>, I>>(base?: I): Location {
    return Location.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Location>, I>>(object: I): Location {
    const message = createBaseLocation();
    message.zoneId = object.zoneId ?? "";
    message.subnetId = object.subnetId ?? "";
    message.disableTraffic = object.disableTraffic ?? false;
    return message;
  },
};

messageTypeRegistry.set(Location.$type, Location);

function createBaseAllocationPolicy(): AllocationPolicy {
  return { $type: "yandex.cloud.apploadbalancer.v1.AllocationPolicy", locations: [] };
}

export const AllocationPolicy = {
  $type: "yandex.cloud.apploadbalancer.v1.AllocationPolicy" as const,

  encode(message: AllocationPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locations) {
      Location.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllocationPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllocationPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.locations.push(Location.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AllocationPolicy {
    return {
      $type: AllocationPolicy.$type,
      locations: globalThis.Array.isArray(object?.locations)
        ? object.locations.map((e: any) => Location.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AllocationPolicy): unknown {
    const obj: any = {};
    if (message.locations?.length) {
      obj.locations = message.locations.map((e) => Location.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AllocationPolicy>, I>>(base?: I): AllocationPolicy {
    return AllocationPolicy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AllocationPolicy>, I>>(object: I): AllocationPolicy {
    const message = createBaseAllocationPolicy();
    message.locations = object.locations?.map((e) => Location.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(AllocationPolicy.$type, AllocationPolicy);

function createBaseListener(): Listener {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.Listener",
    name: "",
    endpoints: [],
    http: undefined,
    tls: undefined,
    stream: undefined,
  };
}

export const Listener = {
  $type: "yandex.cloud.apploadbalancer.v1.Listener" as const,

  encode(message: Listener, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.http !== undefined) {
      HttpListener.encode(message.http, writer.uint32(26).fork()).ldelim();
    }
    if (message.tls !== undefined) {
      TlsListener.encode(message.tls, writer.uint32(34).fork()).ldelim();
    }
    if (message.stream !== undefined) {
      StreamListener.encode(message.stream, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Listener {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListener();
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

          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.http = HttpListener.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.tls = TlsListener.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.stream = StreamListener.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Listener {
    return {
      $type: Listener.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      endpoints: globalThis.Array.isArray(object?.endpoints)
        ? object.endpoints.map((e: any) => Endpoint.fromJSON(e))
        : [],
      http: isSet(object.http) ? HttpListener.fromJSON(object.http) : undefined,
      tls: isSet(object.tls) ? TlsListener.fromJSON(object.tls) : undefined,
      stream: isSet(object.stream) ? StreamListener.fromJSON(object.stream) : undefined,
    };
  },

  toJSON(message: Listener): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.endpoints?.length) {
      obj.endpoints = message.endpoints.map((e) => Endpoint.toJSON(e));
    }
    if (message.http !== undefined) {
      obj.http = HttpListener.toJSON(message.http);
    }
    if (message.tls !== undefined) {
      obj.tls = TlsListener.toJSON(message.tls);
    }
    if (message.stream !== undefined) {
      obj.stream = StreamListener.toJSON(message.stream);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Listener>, I>>(base?: I): Listener {
    return Listener.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Listener>, I>>(object: I): Listener {
    const message = createBaseListener();
    message.name = object.name ?? "";
    message.endpoints = object.endpoints?.map((e) => Endpoint.fromPartial(e)) || [];
    message.http = (object.http !== undefined && object.http !== null)
      ? HttpListener.fromPartial(object.http)
      : undefined;
    message.tls = (object.tls !== undefined && object.tls !== null) ? TlsListener.fromPartial(object.tls) : undefined;
    message.stream = (object.stream !== undefined && object.stream !== null)
      ? StreamListener.fromPartial(object.stream)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Listener.$type, Listener);

function createBaseEndpoint(): Endpoint {
  return { $type: "yandex.cloud.apploadbalancer.v1.Endpoint", addresses: [], ports: [] };
}

export const Endpoint = {
  $type: "yandex.cloud.apploadbalancer.v1.Endpoint" as const,

  encode(message: Endpoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addresses) {
      Address.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.ports) {
      writer.int64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Endpoint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndpoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addresses.push(Address.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag === 16) {
            message.ports.push(longToNumber(reader.int64() as Long));

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ports.push(longToNumber(reader.int64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Endpoint {
    return {
      $type: Endpoint.$type,
      addresses: globalThis.Array.isArray(object?.addresses)
        ? object.addresses.map((e: any) => Address.fromJSON(e))
        : [],
      ports: globalThis.Array.isArray(object?.ports) ? object.ports.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: Endpoint): unknown {
    const obj: any = {};
    if (message.addresses?.length) {
      obj.addresses = message.addresses.map((e) => Address.toJSON(e));
    }
    if (message.ports?.length) {
      obj.ports = message.ports.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Endpoint>, I>>(base?: I): Endpoint {
    return Endpoint.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Endpoint>, I>>(object: I): Endpoint {
    const message = createBaseEndpoint();
    message.addresses = object.addresses?.map((e) => Address.fromPartial(e)) || [];
    message.ports = object.ports?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Endpoint.$type, Endpoint);

function createBaseHttpListener(): HttpListener {
  return { $type: "yandex.cloud.apploadbalancer.v1.HttpListener", handler: undefined, redirects: undefined };
}

export const HttpListener = {
  $type: "yandex.cloud.apploadbalancer.v1.HttpListener" as const,

  encode(message: HttpListener, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.handler !== undefined) {
      HttpHandler.encode(message.handler, writer.uint32(10).fork()).ldelim();
    }
    if (message.redirects !== undefined) {
      Redirects.encode(message.redirects, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpListener {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpListener();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.handler = HttpHandler.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.redirects = Redirects.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HttpListener {
    return {
      $type: HttpListener.$type,
      handler: isSet(object.handler) ? HttpHandler.fromJSON(object.handler) : undefined,
      redirects: isSet(object.redirects) ? Redirects.fromJSON(object.redirects) : undefined,
    };
  },

  toJSON(message: HttpListener): unknown {
    const obj: any = {};
    if (message.handler !== undefined) {
      obj.handler = HttpHandler.toJSON(message.handler);
    }
    if (message.redirects !== undefined) {
      obj.redirects = Redirects.toJSON(message.redirects);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HttpListener>, I>>(base?: I): HttpListener {
    return HttpListener.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HttpListener>, I>>(object: I): HttpListener {
    const message = createBaseHttpListener();
    message.handler = (object.handler !== undefined && object.handler !== null)
      ? HttpHandler.fromPartial(object.handler)
      : undefined;
    message.redirects = (object.redirects !== undefined && object.redirects !== null)
      ? Redirects.fromPartial(object.redirects)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(HttpListener.$type, HttpListener);

function createBaseTlsListener(): TlsListener {
  return { $type: "yandex.cloud.apploadbalancer.v1.TlsListener", defaultHandler: undefined, sniHandlers: [] };
}

export const TlsListener = {
  $type: "yandex.cloud.apploadbalancer.v1.TlsListener" as const,

  encode(message: TlsListener, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultHandler !== undefined) {
      TlsHandler.encode(message.defaultHandler, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.sniHandlers) {
      SniMatch.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TlsListener {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTlsListener();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.defaultHandler = TlsHandler.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sniHandlers.push(SniMatch.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TlsListener {
    return {
      $type: TlsListener.$type,
      defaultHandler: isSet(object.defaultHandler) ? TlsHandler.fromJSON(object.defaultHandler) : undefined,
      sniHandlers: globalThis.Array.isArray(object?.sniHandlers)
        ? object.sniHandlers.map((e: any) => SniMatch.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TlsListener): unknown {
    const obj: any = {};
    if (message.defaultHandler !== undefined) {
      obj.defaultHandler = TlsHandler.toJSON(message.defaultHandler);
    }
    if (message.sniHandlers?.length) {
      obj.sniHandlers = message.sniHandlers.map((e) => SniMatch.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TlsListener>, I>>(base?: I): TlsListener {
    return TlsListener.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TlsListener>, I>>(object: I): TlsListener {
    const message = createBaseTlsListener();
    message.defaultHandler = (object.defaultHandler !== undefined && object.defaultHandler !== null)
      ? TlsHandler.fromPartial(object.defaultHandler)
      : undefined;
    message.sniHandlers = object.sniHandlers?.map((e) => SniMatch.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(TlsListener.$type, TlsListener);

function createBaseStreamListener(): StreamListener {
  return { $type: "yandex.cloud.apploadbalancer.v1.StreamListener", handler: undefined };
}

export const StreamListener = {
  $type: "yandex.cloud.apploadbalancer.v1.StreamListener" as const,

  encode(message: StreamListener, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.handler !== undefined) {
      StreamHandler.encode(message.handler, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamListener {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamListener();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.handler = StreamHandler.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamListener {
    return {
      $type: StreamListener.$type,
      handler: isSet(object.handler) ? StreamHandler.fromJSON(object.handler) : undefined,
    };
  },

  toJSON(message: StreamListener): unknown {
    const obj: any = {};
    if (message.handler !== undefined) {
      obj.handler = StreamHandler.toJSON(message.handler);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamListener>, I>>(base?: I): StreamListener {
    return StreamListener.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamListener>, I>>(object: I): StreamListener {
    const message = createBaseStreamListener();
    message.handler = (object.handler !== undefined && object.handler !== null)
      ? StreamHandler.fromPartial(object.handler)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(StreamListener.$type, StreamListener);

function createBaseHttp2Options(): Http2Options {
  return { $type: "yandex.cloud.apploadbalancer.v1.Http2Options", maxConcurrentStreams: 0 };
}

export const Http2Options = {
  $type: "yandex.cloud.apploadbalancer.v1.Http2Options" as const,

  encode(message: Http2Options, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxConcurrentStreams !== 0) {
      writer.uint32(8).int64(message.maxConcurrentStreams);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Http2Options {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttp2Options();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.maxConcurrentStreams = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Http2Options {
    return {
      $type: Http2Options.$type,
      maxConcurrentStreams: isSet(object.maxConcurrentStreams) ? globalThis.Number(object.maxConcurrentStreams) : 0,
    };
  },

  toJSON(message: Http2Options): unknown {
    const obj: any = {};
    if (message.maxConcurrentStreams !== 0) {
      obj.maxConcurrentStreams = Math.round(message.maxConcurrentStreams);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Http2Options>, I>>(base?: I): Http2Options {
    return Http2Options.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Http2Options>, I>>(object: I): Http2Options {
    const message = createBaseHttp2Options();
    message.maxConcurrentStreams = object.maxConcurrentStreams ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Http2Options.$type, Http2Options);

function createBaseStreamHandler(): StreamHandler {
  return { $type: "yandex.cloud.apploadbalancer.v1.StreamHandler", backendGroupId: "" };
}

export const StreamHandler = {
  $type: "yandex.cloud.apploadbalancer.v1.StreamHandler" as const,

  encode(message: StreamHandler, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamHandler {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamHandler();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backendGroupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamHandler {
    return {
      $type: StreamHandler.$type,
      backendGroupId: isSet(object.backendGroupId) ? globalThis.String(object.backendGroupId) : "",
    };
  },

  toJSON(message: StreamHandler): unknown {
    const obj: any = {};
    if (message.backendGroupId !== "") {
      obj.backendGroupId = message.backendGroupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamHandler>, I>>(base?: I): StreamHandler {
    return StreamHandler.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamHandler>, I>>(object: I): StreamHandler {
    const message = createBaseStreamHandler();
    message.backendGroupId = object.backendGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StreamHandler.$type, StreamHandler);

function createBaseHttpHandler(): HttpHandler {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.HttpHandler",
    httpRouterId: "",
    http2Options: undefined,
    allowHttp10: undefined,
    rewriteRequestId: false,
  };
}

export const HttpHandler = {
  $type: "yandex.cloud.apploadbalancer.v1.HttpHandler" as const,

  encode(message: HttpHandler, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.httpRouterId !== "") {
      writer.uint32(10).string(message.httpRouterId);
    }
    if (message.http2Options !== undefined) {
      Http2Options.encode(message.http2Options, writer.uint32(18).fork()).ldelim();
    }
    if (message.allowHttp10 !== undefined) {
      writer.uint32(24).bool(message.allowHttp10);
    }
    if (message.rewriteRequestId === true) {
      writer.uint32(32).bool(message.rewriteRequestId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpHandler {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpHandler();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.httpRouterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.http2Options = Http2Options.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.allowHttp10 = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.rewriteRequestId = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HttpHandler {
    return {
      $type: HttpHandler.$type,
      httpRouterId: isSet(object.httpRouterId) ? globalThis.String(object.httpRouterId) : "",
      http2Options: isSet(object.http2Options) ? Http2Options.fromJSON(object.http2Options) : undefined,
      allowHttp10: isSet(object.allowHttp10) ? globalThis.Boolean(object.allowHttp10) : undefined,
      rewriteRequestId: isSet(object.rewriteRequestId) ? globalThis.Boolean(object.rewriteRequestId) : false,
    };
  },

  toJSON(message: HttpHandler): unknown {
    const obj: any = {};
    if (message.httpRouterId !== "") {
      obj.httpRouterId = message.httpRouterId;
    }
    if (message.http2Options !== undefined) {
      obj.http2Options = Http2Options.toJSON(message.http2Options);
    }
    if (message.allowHttp10 !== undefined) {
      obj.allowHttp10 = message.allowHttp10;
    }
    if (message.rewriteRequestId === true) {
      obj.rewriteRequestId = message.rewriteRequestId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HttpHandler>, I>>(base?: I): HttpHandler {
    return HttpHandler.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HttpHandler>, I>>(object: I): HttpHandler {
    const message = createBaseHttpHandler();
    message.httpRouterId = object.httpRouterId ?? "";
    message.http2Options = (object.http2Options !== undefined && object.http2Options !== null)
      ? Http2Options.fromPartial(object.http2Options)
      : undefined;
    message.allowHttp10 = object.allowHttp10 ?? undefined;
    message.rewriteRequestId = object.rewriteRequestId ?? false;
    return message;
  },
};

messageTypeRegistry.set(HttpHandler.$type, HttpHandler);

function createBaseRedirects(): Redirects {
  return { $type: "yandex.cloud.apploadbalancer.v1.Redirects", httpToHttps: false };
}

export const Redirects = {
  $type: "yandex.cloud.apploadbalancer.v1.Redirects" as const,

  encode(message: Redirects, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.httpToHttps === true) {
      writer.uint32(8).bool(message.httpToHttps);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Redirects {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedirects();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.httpToHttps = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Redirects {
    return {
      $type: Redirects.$type,
      httpToHttps: isSet(object.httpToHttps) ? globalThis.Boolean(object.httpToHttps) : false,
    };
  },

  toJSON(message: Redirects): unknown {
    const obj: any = {};
    if (message.httpToHttps === true) {
      obj.httpToHttps = message.httpToHttps;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Redirects>, I>>(base?: I): Redirects {
    return Redirects.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Redirects>, I>>(object: I): Redirects {
    const message = createBaseRedirects();
    message.httpToHttps = object.httpToHttps ?? false;
    return message;
  },
};

messageTypeRegistry.set(Redirects.$type, Redirects);

function createBaseSniMatch(): SniMatch {
  return { $type: "yandex.cloud.apploadbalancer.v1.SniMatch", name: "", serverNames: [], handler: undefined };
}

export const SniMatch = {
  $type: "yandex.cloud.apploadbalancer.v1.SniMatch" as const,

  encode(message: SniMatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.serverNames) {
      writer.uint32(18).string(v!);
    }
    if (message.handler !== undefined) {
      TlsHandler.encode(message.handler, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SniMatch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSniMatch();
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

          message.serverNames.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.handler = TlsHandler.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SniMatch {
    return {
      $type: SniMatch.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      serverNames: globalThis.Array.isArray(object?.serverNames)
        ? object.serverNames.map((e: any) => globalThis.String(e))
        : [],
      handler: isSet(object.handler) ? TlsHandler.fromJSON(object.handler) : undefined,
    };
  },

  toJSON(message: SniMatch): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.serverNames?.length) {
      obj.serverNames = message.serverNames;
    }
    if (message.handler !== undefined) {
      obj.handler = TlsHandler.toJSON(message.handler);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SniMatch>, I>>(base?: I): SniMatch {
    return SniMatch.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SniMatch>, I>>(object: I): SniMatch {
    const message = createBaseSniMatch();
    message.name = object.name ?? "";
    message.serverNames = object.serverNames?.map((e) => e) || [];
    message.handler = (object.handler !== undefined && object.handler !== null)
      ? TlsHandler.fromPartial(object.handler)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(SniMatch.$type, SniMatch);

function createBaseTlsHandler(): TlsHandler {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.TlsHandler",
    httpHandler: undefined,
    streamHandler: undefined,
    certificateIds: [],
  };
}

export const TlsHandler = {
  $type: "yandex.cloud.apploadbalancer.v1.TlsHandler" as const,

  encode(message: TlsHandler, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.httpHandler !== undefined) {
      HttpHandler.encode(message.httpHandler, writer.uint32(18).fork()).ldelim();
    }
    if (message.streamHandler !== undefined) {
      StreamHandler.encode(message.streamHandler, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.certificateIds) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TlsHandler {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTlsHandler();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.httpHandler = HttpHandler.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.streamHandler = StreamHandler.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.certificateIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TlsHandler {
    return {
      $type: TlsHandler.$type,
      httpHandler: isSet(object.httpHandler) ? HttpHandler.fromJSON(object.httpHandler) : undefined,
      streamHandler: isSet(object.streamHandler) ? StreamHandler.fromJSON(object.streamHandler) : undefined,
      certificateIds: globalThis.Array.isArray(object?.certificateIds)
        ? object.certificateIds.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: TlsHandler): unknown {
    const obj: any = {};
    if (message.httpHandler !== undefined) {
      obj.httpHandler = HttpHandler.toJSON(message.httpHandler);
    }
    if (message.streamHandler !== undefined) {
      obj.streamHandler = StreamHandler.toJSON(message.streamHandler);
    }
    if (message.certificateIds?.length) {
      obj.certificateIds = message.certificateIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TlsHandler>, I>>(base?: I): TlsHandler {
    return TlsHandler.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TlsHandler>, I>>(object: I): TlsHandler {
    const message = createBaseTlsHandler();
    message.httpHandler = (object.httpHandler !== undefined && object.httpHandler !== null)
      ? HttpHandler.fromPartial(object.httpHandler)
      : undefined;
    message.streamHandler = (object.streamHandler !== undefined && object.streamHandler !== null)
      ? StreamHandler.fromPartial(object.streamHandler)
      : undefined;
    message.certificateIds = object.certificateIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(TlsHandler.$type, TlsHandler);

function createBaseTargetState(): TargetState {
  return { $type: "yandex.cloud.apploadbalancer.v1.TargetState", status: undefined, target: undefined };
}

export const TargetState = {
  $type: "yandex.cloud.apploadbalancer.v1.TargetState" as const,

  encode(message: TargetState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== undefined) {
      TargetState_HealthcheckStatus.encode(message.status, writer.uint32(10).fork()).ldelim();
    }
    if (message.target !== undefined) {
      Target.encode(message.target, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TargetState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTargetState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.status = TargetState_HealthcheckStatus.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.target = Target.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TargetState {
    return {
      $type: TargetState.$type,
      status: isSet(object.status) ? TargetState_HealthcheckStatus.fromJSON(object.status) : undefined,
      target: isSet(object.target) ? Target.fromJSON(object.target) : undefined,
    };
  },

  toJSON(message: TargetState): unknown {
    const obj: any = {};
    if (message.status !== undefined) {
      obj.status = TargetState_HealthcheckStatus.toJSON(message.status);
    }
    if (message.target !== undefined) {
      obj.target = Target.toJSON(message.target);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TargetState>, I>>(base?: I): TargetState {
    return TargetState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TargetState>, I>>(object: I): TargetState {
    const message = createBaseTargetState();
    message.status = (object.status !== undefined && object.status !== null)
      ? TargetState_HealthcheckStatus.fromPartial(object.status)
      : undefined;
    message.target = (object.target !== undefined && object.target !== null)
      ? Target.fromPartial(object.target)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(TargetState.$type, TargetState);

function createBaseTargetState_HealthcheckStatus(): TargetState_HealthcheckStatus {
  return { $type: "yandex.cloud.apploadbalancer.v1.TargetState.HealthcheckStatus", zoneStatuses: [] };
}

export const TargetState_HealthcheckStatus = {
  $type: "yandex.cloud.apploadbalancer.v1.TargetState.HealthcheckStatus" as const,

  encode(message: TargetState_HealthcheckStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.zoneStatuses) {
      TargetState_ZoneHealthcheckStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TargetState_HealthcheckStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTargetState_HealthcheckStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.zoneStatuses.push(TargetState_ZoneHealthcheckStatus.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TargetState_HealthcheckStatus {
    return {
      $type: TargetState_HealthcheckStatus.$type,
      zoneStatuses: globalThis.Array.isArray(object?.zoneStatuses)
        ? object.zoneStatuses.map((e: any) => TargetState_ZoneHealthcheckStatus.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TargetState_HealthcheckStatus): unknown {
    const obj: any = {};
    if (message.zoneStatuses?.length) {
      obj.zoneStatuses = message.zoneStatuses.map((e) => TargetState_ZoneHealthcheckStatus.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TargetState_HealthcheckStatus>, I>>(base?: I): TargetState_HealthcheckStatus {
    return TargetState_HealthcheckStatus.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TargetState_HealthcheckStatus>, I>>(
    object: I,
  ): TargetState_HealthcheckStatus {
    const message = createBaseTargetState_HealthcheckStatus();
    message.zoneStatuses = object.zoneStatuses?.map((e) => TargetState_ZoneHealthcheckStatus.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(TargetState_HealthcheckStatus.$type, TargetState_HealthcheckStatus);

function createBaseTargetState_ZoneHealthcheckStatus(): TargetState_ZoneHealthcheckStatus {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.TargetState.ZoneHealthcheckStatus",
    zoneId: "",
    status: 0,
    failedActiveHc: false,
  };
}

export const TargetState_ZoneHealthcheckStatus = {
  $type: "yandex.cloud.apploadbalancer.v1.TargetState.ZoneHealthcheckStatus" as const,

  encode(message: TargetState_ZoneHealthcheckStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.failedActiveHc === true) {
      writer.uint32(24).bool(message.failedActiveHc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TargetState_ZoneHealthcheckStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTargetState_ZoneHealthcheckStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.zoneId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.failedActiveHc = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TargetState_ZoneHealthcheckStatus {
    return {
      $type: TargetState_ZoneHealthcheckStatus.$type,
      zoneId: isSet(object.zoneId) ? globalThis.String(object.zoneId) : "",
      status: isSet(object.status) ? targetState_StatusFromJSON(object.status) : 0,
      failedActiveHc: isSet(object.failedActiveHc) ? globalThis.Boolean(object.failedActiveHc) : false,
    };
  },

  toJSON(message: TargetState_ZoneHealthcheckStatus): unknown {
    const obj: any = {};
    if (message.zoneId !== "") {
      obj.zoneId = message.zoneId;
    }
    if (message.status !== 0) {
      obj.status = targetState_StatusToJSON(message.status);
    }
    if (message.failedActiveHc === true) {
      obj.failedActiveHc = message.failedActiveHc;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TargetState_ZoneHealthcheckStatus>, I>>(
    base?: I,
  ): TargetState_ZoneHealthcheckStatus {
    return TargetState_ZoneHealthcheckStatus.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TargetState_ZoneHealthcheckStatus>, I>>(
    object: I,
  ): TargetState_ZoneHealthcheckStatus {
    const message = createBaseTargetState_ZoneHealthcheckStatus();
    message.zoneId = object.zoneId ?? "";
    message.status = object.status ?? 0;
    message.failedActiveHc = object.failedActiveHc ?? false;
    return message;
  },
};

messageTypeRegistry.set(TargetState_ZoneHealthcheckStatus.$type, TargetState_ZoneHealthcheckStatus);

function createBaseAutoScalePolicy(): AutoScalePolicy {
  return { $type: "yandex.cloud.apploadbalancer.v1.AutoScalePolicy", minZoneSize: 0, maxSize: 0 };
}

export const AutoScalePolicy = {
  $type: "yandex.cloud.apploadbalancer.v1.AutoScalePolicy" as const,

  encode(message: AutoScalePolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minZoneSize !== 0) {
      writer.uint32(8).int64(message.minZoneSize);
    }
    if (message.maxSize !== 0) {
      writer.uint32(16).int64(message.maxSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AutoScalePolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutoScalePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.minZoneSize = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.maxSize = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AutoScalePolicy {
    return {
      $type: AutoScalePolicy.$type,
      minZoneSize: isSet(object.minZoneSize) ? globalThis.Number(object.minZoneSize) : 0,
      maxSize: isSet(object.maxSize) ? globalThis.Number(object.maxSize) : 0,
    };
  },

  toJSON(message: AutoScalePolicy): unknown {
    const obj: any = {};
    if (message.minZoneSize !== 0) {
      obj.minZoneSize = Math.round(message.minZoneSize);
    }
    if (message.maxSize !== 0) {
      obj.maxSize = Math.round(message.maxSize);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AutoScalePolicy>, I>>(base?: I): AutoScalePolicy {
    return AutoScalePolicy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AutoScalePolicy>, I>>(object: I): AutoScalePolicy {
    const message = createBaseAutoScalePolicy();
    message.minZoneSize = object.minZoneSize ?? 0;
    message.maxSize = object.maxSize ?? 0;
    return message;
  },
};

messageTypeRegistry.set(AutoScalePolicy.$type, AutoScalePolicy);

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
  const seconds = date.getTime() / 1_000;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
