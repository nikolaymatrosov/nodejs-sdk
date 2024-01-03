/* eslint-disable */
import { Duration } from "@yandex-cloud/core/dist/generated/google/protobuf/duration";
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import { Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { Payload } from "./payload";
import { ValidationContext } from "./tls";

export const protobufPackage = "yandex.cloud.apploadbalancer.v1";

/**
 * A load balancing mode resource.
 * For details about the concept, see
 * [documentation](/docs/application-load-balancer/concepts/backend-group#balancing-mode).
 */
export enum LoadBalancingMode {
  /**
   * ROUND_ROBIN - Round robin load balancing mode.
   *
   * All endpoints of the backend take their turns to receive requests attributed to the backend.
   */
  ROUND_ROBIN = 0,
  /**
   * RANDOM - Random load balancing mode. Default value.
   *
   * For a request attributed to the backend, an endpoint that receives it is picked at random.
   */
  RANDOM = 1,
  /**
   * LEAST_REQUEST - Least request load balancing mode.
   *
   * To pick an endpoint that receives a request attributed to the backend, the power of two choices algorithm is used;
   * that is, two endpoints are picked at random, and the request is sent to the one which has the fewest active
   * requests.
   */
  LEAST_REQUEST = 2,
  /**
   * MAGLEV_HASH - Maglev hashing load balancing mode.
   *
   * Each endpoint is hashed, and a hash table with 65537 rows is filled accordingly, so that every endpoint occupies
   * the same amount of rows. An attribute of each request is also hashed by the same function (if session affinity is
   * enabled for the backend group, the attribute to hash is specified in session affinity configuration). The row
   * with the same number as the resulting value is looked up in the table to determine the endpoint that receives
   * the request.
   *
   * If the backend group with session affinity enabled contains more than one backend with positive weight, endpoints
   * for backends with `MAGLEV_HASH` load balancing mode are picked at `RANDOM` instead.
   */
  MAGLEV_HASH = 3,
  UNRECOGNIZED = -1,
}

export function loadBalancingModeFromJSON(object: any): LoadBalancingMode {
  switch (object) {
    case 0:
    case "ROUND_ROBIN":
      return LoadBalancingMode.ROUND_ROBIN;
    case 1:
    case "RANDOM":
      return LoadBalancingMode.RANDOM;
    case 2:
    case "LEAST_REQUEST":
      return LoadBalancingMode.LEAST_REQUEST;
    case 3:
    case "MAGLEV_HASH":
      return LoadBalancingMode.MAGLEV_HASH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LoadBalancingMode.UNRECOGNIZED;
  }
}

export function loadBalancingModeToJSON(object: LoadBalancingMode): string {
  switch (object) {
    case LoadBalancingMode.ROUND_ROBIN:
      return "ROUND_ROBIN";
    case LoadBalancingMode.RANDOM:
      return "RANDOM";
    case LoadBalancingMode.LEAST_REQUEST:
      return "LEAST_REQUEST";
    case LoadBalancingMode.MAGLEV_HASH:
      return "MAGLEV_HASH";
    case LoadBalancingMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * A backend group resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/backend-group).
 */
export interface BackendGroup {
  $type: "yandex.cloud.apploadbalancer.v1.BackendGroup";
  /** ID of the backend group. Generated at creation time. */
  id: string;
  /** Name of the backend group. The name is unique within the folder. The string length in characters is 3-63. */
  name: string;
  /** Description of the backend group. The string is 0-256 characters long. */
  description: string;
  /** ID of the folder that the backend group belongs to. */
  folderId: string;
  /**
   * Backend group labels as `key:value` pairs.
   * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
   * The maximum number of labels is 64.
   */
  labels: { [key: string]: string };
  /** List of HTTP backends that the backend group consists of. */
  http?:
    | HttpBackendGroup
    | undefined;
  /** List of gRPC backends that the backend group consists of. */
  grpc?:
    | GrpcBackendGroup
    | undefined;
  /** List of stream (TCP) backends that the backend group consists of. */
  stream?:
    | StreamBackendGroup
    | undefined;
  /** Creation timestamp. */
  createdAt?: Date | undefined;
}

export interface BackendGroup_LabelsEntry {
  $type: "yandex.cloud.apploadbalancer.v1.BackendGroup.LabelsEntry";
  key: string;
  value: string;
}

/** A stream (TCP) backend group resource. */
export interface StreamBackendGroup {
  $type: "yandex.cloud.apploadbalancer.v1.StreamBackendGroup";
  /** List of stream (TCP) backends. */
  backends: StreamBackend[];
  /**
   * Connection-based session affinity configuration.
   *
   * For now, a connection is defined only by an IP address of the client.
   */
  connection?: ConnectionSessionAffinity | undefined;
}

/** An HTTP backend group resource. */
export interface HttpBackendGroup {
  $type: "yandex.cloud.apploadbalancer.v1.HttpBackendGroup";
  /** List of HTTP backends. */
  backends: HttpBackend[];
  /**
   * Connection-based session affinity configuration.
   *
   * For now, a connection is defined only by an IP address of the client.
   */
  connection?:
    | ConnectionSessionAffinity
    | undefined;
  /** HTTP-header-field-based session affinity configuration. */
  header?:
    | HeaderSessionAffinity
    | undefined;
  /** Cookie-based session affinity configuration. */
  cookie?: CookieSessionAffinity | undefined;
}

/** A gRPC backend group resource. */
export interface GrpcBackendGroup {
  $type: "yandex.cloud.apploadbalancer.v1.GrpcBackendGroup";
  /** List of gRPC backends. */
  backends: GrpcBackend[];
  /**
   * Connection-based session affinity configuration.
   *
   * For now, a connection is defined only by an IP address of the client.
   */
  connection?:
    | ConnectionSessionAffinity
    | undefined;
  /** HTTP-header-field-based session affinity configuration. */
  header?:
    | HeaderSessionAffinity
    | undefined;
  /** Cookie-based session affinity configuration. */
  cookie?: CookieSessionAffinity | undefined;
}

/** A resource for HTTP-header-field-based session affinity configuration. */
export interface HeaderSessionAffinity {
  $type: "yandex.cloud.apploadbalancer.v1.HeaderSessionAffinity";
  /** Name of the HTTP header field that is used for session affinity. */
  headerName: string;
}

/** A resource for cookie-based session affinity configuration. */
export interface CookieSessionAffinity {
  $type: "yandex.cloud.apploadbalancer.v1.CookieSessionAffinity";
  /** Name of the cookie that is used for session affinity. */
  name: string;
  /**
   * Maximum age of cookies that are generated for sessions.
   *
   * If set to `0`, session cookies are used, which are stored by clients in temporary memory and are deleted
   * on client restarts.
   *
   * If not set, the balancer does not generate cookies and only uses incoming ones for establishing session affinity.
   */
  ttl?: Duration | undefined;
}

/** A resource for connection-based session affinity configuration. */
export interface ConnectionSessionAffinity {
  $type: "yandex.cloud.apploadbalancer.v1.ConnectionSessionAffinity";
  /** Specifies whether an IP address of the client is used to define a connection for session affinity. */
  sourceIp: boolean;
}

/** A load balancing configuration resource. */
export interface LoadBalancingConfig {
  $type: "yandex.cloud.apploadbalancer.v1.LoadBalancingConfig";
  /**
   * Threshold for panic mode.
   *
   * If percentage of healthy backends in the group drops below threshold,
   * panic mode will be activated and traffic will be routed to all backends, regardless of their health check status.
   * This helps to avoid overloading healthy backends.
   * For details about panic mode, see [documentation](/docs/application-load-balancer/concepts/backend-group#panic-mode).
   *
   * If the value is `0`, panic mode will never be activated and traffic is routed only to healthy backends at all times.
   *
   * Default value: `0`.
   */
  panicThreshold: number;
  /**
   * Percentage of traffic that a load balancer node sends to healthy backends in its availability zone.
   * The rest is divided equally between other zones. For details about zone-aware routing, see
   * [documentation](/docs/application-load-balancer/concepts/backend-group#locality).
   *
   * If there are no healthy backends in an availability zone, all the traffic is divided between other zones.
   *
   * If [strict_locality] is `true`, the specified value is ignored.
   * A load balancer node sends all the traffic within its availability zone, regardless of backends' health.
   *
   * Default value: `0`.
   */
  localityAwareRoutingPercent: number;
  /**
   * Specifies whether a load balancer node should only send traffic to backends in its availability zone,
   * regardless of their health, and ignore backends in other zones.
   *
   * If set to `true` and there are no healthy backends in the zone, the node in this zone will respond
   * to incoming traffic with errors.
   * For details about strict locality, see [documentation](/docs/application-load-balancer/concepts/backend-group#locality).
   *
   * If `strict_locality` is `true`, the value specified in [locality_aware_routing_percent] is ignored.
   *
   * Default value: `false`.
   */
  strictLocality: boolean;
  /**
   * Load balancing mode for the backend.
   *
   * For details about load balancing modes, see
   * [documentation](/docs/application-load-balancer/concepts/backend-group#balancing-mode).
   */
  mode: LoadBalancingMode;
}

/** A stream (TCP) backend resource. */
export interface StreamBackend {
  $type: "yandex.cloud.apploadbalancer.v1.StreamBackend";
  /** Name of the backend. */
  name: string;
  /**
   * Backend weight. Traffic is distributed between backends of a backend group according to their weights.
   *
   * Weights must be set either for all backends in a group or for none of them.
   * Setting no weights is the same as setting equal non-zero weights for all backends.
   *
   * If the weight is non-positive, traffic is not sent to the backend.
   */
  backendWeight?:
    | number
    | undefined;
  /** Load balancing configuration for the backend. */
  loadBalancingConfig?:
    | LoadBalancingConfig
    | undefined;
  /** Port used by all targets to receive traffic. */
  port: number;
  /**
   * Target groups that belong to the backend. For details about target groups, see
   * [documentation](/docs/application-load-balancer/concepts/target-group).
   */
  targetGroups?:
    | TargetGroupsBackend
    | undefined;
  /**
   * Health checks to perform on targets from target groups.
   * For details about health checking, see [documentation](/docs/application-load-balancer/concepts/backend-group#health-checks).
   *
   * If no health checks are specified, active health checking is not performed.
   */
  healthchecks: HealthCheck[];
  /**
   * Settings for TLS connections between load balancer nodes and backend targets.
   *
   * If specified, the load balancer establishes TLS-encrypted TCP connections with targets and compares received
   * certificates with the one specified in [BackendTls.validation_context].
   * If not specified, the load balancer establishes unencrypted TCP connections with targets.
   */
  tls?:
    | BackendTls
    | undefined;
  /** If set, proxy protocol will be enabled for this backend. */
  enableProxyProtocol: boolean;
}

/** An HTTP backend resource. */
export interface HttpBackend {
  $type: "yandex.cloud.apploadbalancer.v1.HttpBackend";
  /** Name of the backend. */
  name: string;
  /**
   * Backend weight. Traffic is distributed between backends of a backend group according to their weights.
   *
   * Weights must be set either for all backends in a group or for none of them.
   * Setting no weights is the same as setting equal non-zero weights for all backends.
   *
   * If the weight is non-positive, traffic is not sent to the backend.
   */
  backendWeight?:
    | number
    | undefined;
  /** Load balancing configuration for the backend. */
  loadBalancingConfig?:
    | LoadBalancingConfig
    | undefined;
  /** Port used by all targets to receive traffic. */
  port: number;
  /**
   * Target groups that belong to the backend. For details about target groups, see
   * [documentation](/docs/application-load-balancer/concepts/target-group).
   */
  targetGroups?:
    | TargetGroupsBackend
    | undefined;
  /**
   * Object Storage bucket to use as the backend. For details about buckets, see
   * [documentation](/docs/storage/concepts/bucket).
   *
   * If a bucket is used as a backend, the list of bucket objects and the objects themselves must be publicly
   * accessible. For instructions, see [documentation](/docs/storage/operations/buckets/bucket-availability).
   */
  storageBucket?:
    | StorageBucketBackend
    | undefined;
  /**
   * Health checks to perform on targets from target groups.
   * For details about health checking, see [documentation](/docs/application-load-balancer/concepts/backend-group#health-checks).
   *
   * If no health checks are specified, active health checking is not performed.
   */
  healthchecks: HealthCheck[];
  /**
   * Settings for TLS connections between load balancer nodes and backend targets.
   *
   * If specified, the load balancer establishes HTTPS (HTTP over TLS) connections with targets
   * and compares received certificates with the one specified in [BackendTls.validation_context].
   * If not specified, the load balancer establishes unencrypted HTTP connections with targets.
   */
  tls?:
    | BackendTls
    | undefined;
  /**
   * Enables HTTP/2 usage in connections between load balancer nodes and backend targets.
   *
   * Default value: `false`, HTTP/1.1 is used.
   */
  useHttp2: boolean;
}

/** A gRPC backend resource. */
export interface GrpcBackend {
  $type: "yandex.cloud.apploadbalancer.v1.GrpcBackend";
  /** Name of the backend. */
  name: string;
  /**
   * Backend weight. Traffic is distributed between backends of a backend group according to their weights.
   *
   * Weights must be set either for all backends of a group or for none of them.
   * Setting no weights is the same as setting equal non-zero weights for all backends.
   *
   * If the weight is non-positive, traffic is not sent to the backend.
   */
  backendWeight?:
    | number
    | undefined;
  /** Load balancing configuration for the backend. */
  loadBalancingConfig?:
    | LoadBalancingConfig
    | undefined;
  /** Port used by all targets to receive traffic. */
  port: number;
  /** Target groups that belong to the backend. */
  targetGroups?:
    | TargetGroupsBackend
    | undefined;
  /**
   * Health checks to perform on targets from target groups.
   * For details about health checking, see [documentation](/docs/application-load-balancer/concepts/backend-group#health-checks).
   *
   * If no health checks are specified, active health checking is not performed.
   */
  healthchecks: HealthCheck[];
  /**
   * Settings for TLS connections between load balancer nodes and backend targets.
   *
   * If specified, the load balancer establishes HTTPS (HTTP over TLS) connections with targets
   * and compares received certificates with the one specified in [BackendTls.validation_context].
   * If not specified, the load balancer establishes unencrypted HTTP connections with targets.
   */
  tls?: BackendTls | undefined;
}

/** A resource for target groups that belong to the backend. */
export interface TargetGroupsBackend {
  $type: "yandex.cloud.apploadbalancer.v1.TargetGroupsBackend";
  /**
   * List of ID's of target groups that belong to the backend.
   *
   * To get the ID's of all available target groups, make a [TargetGroupService.List] request.
   */
  targetGroupIds: string[];
}

/** Transport settings to be used instead of the settings configured per-cluster */
export interface PlaintextTransportSettings {
  $type: "yandex.cloud.apploadbalancer.v1.PlaintextTransportSettings";
}

/** Transport settings to be used instead of the settings configured per-cluster */
export interface SecureTransportSettings {
  $type: "yandex.cloud.apploadbalancer.v1.SecureTransportSettings";
  /** SNI string for TLS connections. */
  sni: string;
  /** Validation context for backend TLS connections. */
  validationContext?: ValidationContext | undefined;
}

/** A resource for backend TLS settings. */
export interface BackendTls {
  $type: "yandex.cloud.apploadbalancer.v1.BackendTls";
  /** Server Name Indication (SNI) string for TLS connections. */
  sni: string;
  /** Validation context for TLS connections. */
  validationContext?: ValidationContext | undefined;
}

/**
 * A resource for Object Storage bucket used as a backend. For details about the concept,
 * see [documentation](/docs/storage/concepts/bucket).
 */
export interface StorageBucketBackend {
  $type: "yandex.cloud.apploadbalancer.v1.StorageBucketBackend";
  /** Name of the bucket. */
  bucket: string;
}

/**
 * A health check resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/backend-group#health-checks).
 */
export interface HealthCheck {
  $type: "yandex.cloud.apploadbalancer.v1.HealthCheck";
  /**
   * Health check timeout.
   *
   * The timeout is the time allowed for the target to respond to a check.
   * If the target doesn't respond in time, the check is considered failed.
   */
  timeout?:
    | Duration
    | undefined;
  /** Base interval between consecutive health checks. */
  interval?: Duration | undefined;
  intervalJitterPercent: number;
  /**
   * Number of consecutive successful health checks required to mark an unhealthy target as healthy.
   *
   * Both `0` and `1` values amount to one successful check required.
   *
   * The value is ignored when a load balancer is initialized; a target is marked healthy after one successful check.
   *
   * Default value: `0`.
   */
  healthyThreshold: number;
  /**
   * Number of consecutive failed health checks required to mark a healthy target as unhealthy.
   *
   * Both `0` and `1` values amount to one unsuccessful check required.
   *
   * The value is ignored if a health check is failed due to an HTTP `503 Service Unavailable` response from the target
   * (not applicable to TCP stream health checks). The target is immediately marked unhealthy.
   *
   * Default value: `0`.
   */
  unhealthyThreshold: number;
  /**
   * Port used for health checks.
   *
   * If not specified, the backend port ([HttpBackend.port] or [GrpcBackend.port]) is used for health checks.
   */
  healthcheckPort: number;
  /** TCP stream health check settings. */
  stream?:
    | HealthCheck_StreamHealthCheck
    | undefined;
  /** HTTP health check settings. */
  http?:
    | HealthCheck_HttpHealthCheck
    | undefined;
  /** gRPC health check settings. */
  grpc?: HealthCheck_GrpcHealthCheck | undefined;
  plaintext?: PlaintextTransportSettings | undefined;
  tls?: SecureTransportSettings | undefined;
}

/** A resource for TCP stream health check settings. */
export interface HealthCheck_StreamHealthCheck {
  $type: "yandex.cloud.apploadbalancer.v1.HealthCheck.StreamHealthCheck";
  /**
   * Message sent to targets during TCP data transfer.
   *
   * If not specified, no data is sent to the target.
   */
  send?:
    | Payload
    | undefined;
  /**
   * Data that must be contained in the messages received from targets for a successful health check.
   *
   * If not specified, no messages are expected from targets, and those that are received are not checked.
   */
  receive?: Payload | undefined;
}

/** A resource for HTTP health check settings. */
export interface HealthCheck_HttpHealthCheck {
  $type: "yandex.cloud.apploadbalancer.v1.HealthCheck.HttpHealthCheck";
  /** Value for the HTTP/1.1 `Host` header or the HTTP/2 `:authority` pseudo-header used in requests to targets. */
  host: string;
  /**
   * HTTP path used in requests to targets: request URI for HTTP/1.1 request line
   * or value for the HTTP/2 `:path` pseudo-header.
   */
  path: string;
  /**
   * Enables HTTP/2 usage in health checks.
   *
   * Default value: `false`, HTTP/1.1 is used.
   */
  useHttp2: boolean;
}

/** A resource for gRPC health check settings. */
export interface HealthCheck_GrpcHealthCheck {
  $type: "yandex.cloud.apploadbalancer.v1.HealthCheck.GrpcHealthCheck";
  /**
   * Name of the gRPC service to be checked.
   *
   * If not specified, overall health is checked.
   *
   * For details about the concept, see [GRPC Health Checking Protocol](https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
   */
  serviceName: string;
}

function createBaseBackendGroup(): BackendGroup {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.BackendGroup",
    id: "",
    name: "",
    description: "",
    folderId: "",
    labels: {},
    http: undefined,
    grpc: undefined,
    stream: undefined,
    createdAt: undefined,
  };
}

export const BackendGroup = {
  $type: "yandex.cloud.apploadbalancer.v1.BackendGroup" as const,

  encode(message: BackendGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      BackendGroup_LabelsEntry.encode({
        $type: "yandex.cloud.apploadbalancer.v1.BackendGroup.LabelsEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.http !== undefined) {
      HttpBackendGroup.encode(message.http, writer.uint32(50).fork()).ldelim();
    }
    if (message.grpc !== undefined) {
      GrpcBackendGroup.encode(message.grpc, writer.uint32(58).fork()).ldelim();
    }
    if (message.stream !== undefined) {
      StreamBackendGroup.encode(message.stream, writer.uint32(82).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BackendGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackendGroup();
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

          const entry5 = BackendGroup_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.http = HttpBackendGroup.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.grpc = GrpcBackendGroup.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.stream = StreamBackendGroup.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BackendGroup {
    return {
      $type: BackendGroup.$type,
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
      http: isSet(object.http) ? HttpBackendGroup.fromJSON(object.http) : undefined,
      grpc: isSet(object.grpc) ? GrpcBackendGroup.fromJSON(object.grpc) : undefined,
      stream: isSet(object.stream) ? StreamBackendGroup.fromJSON(object.stream) : undefined,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
    };
  },

  toJSON(message: BackendGroup): unknown {
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
    if (message.http !== undefined) {
      obj.http = HttpBackendGroup.toJSON(message.http);
    }
    if (message.grpc !== undefined) {
      obj.grpc = GrpcBackendGroup.toJSON(message.grpc);
    }
    if (message.stream !== undefined) {
      obj.stream = StreamBackendGroup.toJSON(message.stream);
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BackendGroup>, I>>(base?: I): BackendGroup {
    return BackendGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BackendGroup>, I>>(object: I): BackendGroup {
    const message = createBaseBackendGroup();
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
    message.http = (object.http !== undefined && object.http !== null)
      ? HttpBackendGroup.fromPartial(object.http)
      : undefined;
    message.grpc = (object.grpc !== undefined && object.grpc !== null)
      ? GrpcBackendGroup.fromPartial(object.grpc)
      : undefined;
    message.stream = (object.stream !== undefined && object.stream !== null)
      ? StreamBackendGroup.fromPartial(object.stream)
      : undefined;
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(BackendGroup.$type, BackendGroup);

function createBaseBackendGroup_LabelsEntry(): BackendGroup_LabelsEntry {
  return { $type: "yandex.cloud.apploadbalancer.v1.BackendGroup.LabelsEntry", key: "", value: "" };
}

export const BackendGroup_LabelsEntry = {
  $type: "yandex.cloud.apploadbalancer.v1.BackendGroup.LabelsEntry" as const,

  encode(message: BackendGroup_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BackendGroup_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackendGroup_LabelsEntry();
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

  fromJSON(object: any): BackendGroup_LabelsEntry {
    return {
      $type: BackendGroup_LabelsEntry.$type,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: BackendGroup_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BackendGroup_LabelsEntry>, I>>(base?: I): BackendGroup_LabelsEntry {
    return BackendGroup_LabelsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BackendGroup_LabelsEntry>, I>>(object: I): BackendGroup_LabelsEntry {
    const message = createBaseBackendGroup_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(BackendGroup_LabelsEntry.$type, BackendGroup_LabelsEntry);

function createBaseStreamBackendGroup(): StreamBackendGroup {
  return { $type: "yandex.cloud.apploadbalancer.v1.StreamBackendGroup", backends: [], connection: undefined };
}

export const StreamBackendGroup = {
  $type: "yandex.cloud.apploadbalancer.v1.StreamBackendGroup" as const,

  encode(message: StreamBackendGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.backends) {
      StreamBackend.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.connection !== undefined) {
      ConnectionSessionAffinity.encode(message.connection, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamBackendGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamBackendGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backends.push(StreamBackend.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.connection = ConnectionSessionAffinity.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamBackendGroup {
    return {
      $type: StreamBackendGroup.$type,
      backends: globalThis.Array.isArray(object?.backends)
        ? object.backends.map((e: any) => StreamBackend.fromJSON(e))
        : [],
      connection: isSet(object.connection) ? ConnectionSessionAffinity.fromJSON(object.connection) : undefined,
    };
  },

  toJSON(message: StreamBackendGroup): unknown {
    const obj: any = {};
    if (message.backends?.length) {
      obj.backends = message.backends.map((e) => StreamBackend.toJSON(e));
    }
    if (message.connection !== undefined) {
      obj.connection = ConnectionSessionAffinity.toJSON(message.connection);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamBackendGroup>, I>>(base?: I): StreamBackendGroup {
    return StreamBackendGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamBackendGroup>, I>>(object: I): StreamBackendGroup {
    const message = createBaseStreamBackendGroup();
    message.backends = object.backends?.map((e) => StreamBackend.fromPartial(e)) || [];
    message.connection = (object.connection !== undefined && object.connection !== null)
      ? ConnectionSessionAffinity.fromPartial(object.connection)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(StreamBackendGroup.$type, StreamBackendGroup);

function createBaseHttpBackendGroup(): HttpBackendGroup {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.HttpBackendGroup",
    backends: [],
    connection: undefined,
    header: undefined,
    cookie: undefined,
  };
}

export const HttpBackendGroup = {
  $type: "yandex.cloud.apploadbalancer.v1.HttpBackendGroup" as const,

  encode(message: HttpBackendGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.backends) {
      HttpBackend.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.connection !== undefined) {
      ConnectionSessionAffinity.encode(message.connection, writer.uint32(18).fork()).ldelim();
    }
    if (message.header !== undefined) {
      HeaderSessionAffinity.encode(message.header, writer.uint32(26).fork()).ldelim();
    }
    if (message.cookie !== undefined) {
      CookieSessionAffinity.encode(message.cookie, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpBackendGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpBackendGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backends.push(HttpBackend.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.connection = ConnectionSessionAffinity.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.header = HeaderSessionAffinity.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.cookie = CookieSessionAffinity.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HttpBackendGroup {
    return {
      $type: HttpBackendGroup.$type,
      backends: globalThis.Array.isArray(object?.backends)
        ? object.backends.map((e: any) => HttpBackend.fromJSON(e))
        : [],
      connection: isSet(object.connection) ? ConnectionSessionAffinity.fromJSON(object.connection) : undefined,
      header: isSet(object.header) ? HeaderSessionAffinity.fromJSON(object.header) : undefined,
      cookie: isSet(object.cookie) ? CookieSessionAffinity.fromJSON(object.cookie) : undefined,
    };
  },

  toJSON(message: HttpBackendGroup): unknown {
    const obj: any = {};
    if (message.backends?.length) {
      obj.backends = message.backends.map((e) => HttpBackend.toJSON(e));
    }
    if (message.connection !== undefined) {
      obj.connection = ConnectionSessionAffinity.toJSON(message.connection);
    }
    if (message.header !== undefined) {
      obj.header = HeaderSessionAffinity.toJSON(message.header);
    }
    if (message.cookie !== undefined) {
      obj.cookie = CookieSessionAffinity.toJSON(message.cookie);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HttpBackendGroup>, I>>(base?: I): HttpBackendGroup {
    return HttpBackendGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HttpBackendGroup>, I>>(object: I): HttpBackendGroup {
    const message = createBaseHttpBackendGroup();
    message.backends = object.backends?.map((e) => HttpBackend.fromPartial(e)) || [];
    message.connection = (object.connection !== undefined && object.connection !== null)
      ? ConnectionSessionAffinity.fromPartial(object.connection)
      : undefined;
    message.header = (object.header !== undefined && object.header !== null)
      ? HeaderSessionAffinity.fromPartial(object.header)
      : undefined;
    message.cookie = (object.cookie !== undefined && object.cookie !== null)
      ? CookieSessionAffinity.fromPartial(object.cookie)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(HttpBackendGroup.$type, HttpBackendGroup);

function createBaseGrpcBackendGroup(): GrpcBackendGroup {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcBackendGroup",
    backends: [],
    connection: undefined,
    header: undefined,
    cookie: undefined,
  };
}

export const GrpcBackendGroup = {
  $type: "yandex.cloud.apploadbalancer.v1.GrpcBackendGroup" as const,

  encode(message: GrpcBackendGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.backends) {
      GrpcBackend.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.connection !== undefined) {
      ConnectionSessionAffinity.encode(message.connection, writer.uint32(18).fork()).ldelim();
    }
    if (message.header !== undefined) {
      HeaderSessionAffinity.encode(message.header, writer.uint32(26).fork()).ldelim();
    }
    if (message.cookie !== undefined) {
      CookieSessionAffinity.encode(message.cookie, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GrpcBackendGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrpcBackendGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backends.push(GrpcBackend.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.connection = ConnectionSessionAffinity.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.header = HeaderSessionAffinity.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.cookie = CookieSessionAffinity.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GrpcBackendGroup {
    return {
      $type: GrpcBackendGroup.$type,
      backends: globalThis.Array.isArray(object?.backends)
        ? object.backends.map((e: any) => GrpcBackend.fromJSON(e))
        : [],
      connection: isSet(object.connection) ? ConnectionSessionAffinity.fromJSON(object.connection) : undefined,
      header: isSet(object.header) ? HeaderSessionAffinity.fromJSON(object.header) : undefined,
      cookie: isSet(object.cookie) ? CookieSessionAffinity.fromJSON(object.cookie) : undefined,
    };
  },

  toJSON(message: GrpcBackendGroup): unknown {
    const obj: any = {};
    if (message.backends?.length) {
      obj.backends = message.backends.map((e) => GrpcBackend.toJSON(e));
    }
    if (message.connection !== undefined) {
      obj.connection = ConnectionSessionAffinity.toJSON(message.connection);
    }
    if (message.header !== undefined) {
      obj.header = HeaderSessionAffinity.toJSON(message.header);
    }
    if (message.cookie !== undefined) {
      obj.cookie = CookieSessionAffinity.toJSON(message.cookie);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GrpcBackendGroup>, I>>(base?: I): GrpcBackendGroup {
    return GrpcBackendGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GrpcBackendGroup>, I>>(object: I): GrpcBackendGroup {
    const message = createBaseGrpcBackendGroup();
    message.backends = object.backends?.map((e) => GrpcBackend.fromPartial(e)) || [];
    message.connection = (object.connection !== undefined && object.connection !== null)
      ? ConnectionSessionAffinity.fromPartial(object.connection)
      : undefined;
    message.header = (object.header !== undefined && object.header !== null)
      ? HeaderSessionAffinity.fromPartial(object.header)
      : undefined;
    message.cookie = (object.cookie !== undefined && object.cookie !== null)
      ? CookieSessionAffinity.fromPartial(object.cookie)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(GrpcBackendGroup.$type, GrpcBackendGroup);

function createBaseHeaderSessionAffinity(): HeaderSessionAffinity {
  return { $type: "yandex.cloud.apploadbalancer.v1.HeaderSessionAffinity", headerName: "" };
}

export const HeaderSessionAffinity = {
  $type: "yandex.cloud.apploadbalancer.v1.HeaderSessionAffinity" as const,

  encode(message: HeaderSessionAffinity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.headerName !== "") {
      writer.uint32(10).string(message.headerName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HeaderSessionAffinity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeaderSessionAffinity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.headerName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HeaderSessionAffinity {
    return {
      $type: HeaderSessionAffinity.$type,
      headerName: isSet(object.headerName) ? globalThis.String(object.headerName) : "",
    };
  },

  toJSON(message: HeaderSessionAffinity): unknown {
    const obj: any = {};
    if (message.headerName !== "") {
      obj.headerName = message.headerName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HeaderSessionAffinity>, I>>(base?: I): HeaderSessionAffinity {
    return HeaderSessionAffinity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HeaderSessionAffinity>, I>>(object: I): HeaderSessionAffinity {
    const message = createBaseHeaderSessionAffinity();
    message.headerName = object.headerName ?? "";
    return message;
  },
};

messageTypeRegistry.set(HeaderSessionAffinity.$type, HeaderSessionAffinity);

function createBaseCookieSessionAffinity(): CookieSessionAffinity {
  return { $type: "yandex.cloud.apploadbalancer.v1.CookieSessionAffinity", name: "", ttl: undefined };
}

export const CookieSessionAffinity = {
  $type: "yandex.cloud.apploadbalancer.v1.CookieSessionAffinity" as const,

  encode(message: CookieSessionAffinity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.ttl !== undefined) {
      Duration.encode(message.ttl, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CookieSessionAffinity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCookieSessionAffinity();
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

          message.ttl = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CookieSessionAffinity {
    return {
      $type: CookieSessionAffinity.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      ttl: isSet(object.ttl) ? Duration.fromJSON(object.ttl) : undefined,
    };
  },

  toJSON(message: CookieSessionAffinity): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.ttl !== undefined) {
      obj.ttl = Duration.toJSON(message.ttl);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CookieSessionAffinity>, I>>(base?: I): CookieSessionAffinity {
    return CookieSessionAffinity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CookieSessionAffinity>, I>>(object: I): CookieSessionAffinity {
    const message = createBaseCookieSessionAffinity();
    message.name = object.name ?? "";
    message.ttl = (object.ttl !== undefined && object.ttl !== null) ? Duration.fromPartial(object.ttl) : undefined;
    return message;
  },
};

messageTypeRegistry.set(CookieSessionAffinity.$type, CookieSessionAffinity);

function createBaseConnectionSessionAffinity(): ConnectionSessionAffinity {
  return { $type: "yandex.cloud.apploadbalancer.v1.ConnectionSessionAffinity", sourceIp: false };
}

export const ConnectionSessionAffinity = {
  $type: "yandex.cloud.apploadbalancer.v1.ConnectionSessionAffinity" as const,

  encode(message: ConnectionSessionAffinity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceIp === true) {
      writer.uint32(8).bool(message.sourceIp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionSessionAffinity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionSessionAffinity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.sourceIp = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConnectionSessionAffinity {
    return {
      $type: ConnectionSessionAffinity.$type,
      sourceIp: isSet(object.sourceIp) ? globalThis.Boolean(object.sourceIp) : false,
    };
  },

  toJSON(message: ConnectionSessionAffinity): unknown {
    const obj: any = {};
    if (message.sourceIp === true) {
      obj.sourceIp = message.sourceIp;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConnectionSessionAffinity>, I>>(base?: I): ConnectionSessionAffinity {
    return ConnectionSessionAffinity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConnectionSessionAffinity>, I>>(object: I): ConnectionSessionAffinity {
    const message = createBaseConnectionSessionAffinity();
    message.sourceIp = object.sourceIp ?? false;
    return message;
  },
};

messageTypeRegistry.set(ConnectionSessionAffinity.$type, ConnectionSessionAffinity);

function createBaseLoadBalancingConfig(): LoadBalancingConfig {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.LoadBalancingConfig",
    panicThreshold: 0,
    localityAwareRoutingPercent: 0,
    strictLocality: false,
    mode: 0,
  };
}

export const LoadBalancingConfig = {
  $type: "yandex.cloud.apploadbalancer.v1.LoadBalancingConfig" as const,

  encode(message: LoadBalancingConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.panicThreshold !== 0) {
      writer.uint32(8).int64(message.panicThreshold);
    }
    if (message.localityAwareRoutingPercent !== 0) {
      writer.uint32(16).int64(message.localityAwareRoutingPercent);
    }
    if (message.strictLocality === true) {
      writer.uint32(24).bool(message.strictLocality);
    }
    if (message.mode !== 0) {
      writer.uint32(32).int32(message.mode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoadBalancingConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadBalancingConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.panicThreshold = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.localityAwareRoutingPercent = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.strictLocality = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.mode = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoadBalancingConfig {
    return {
      $type: LoadBalancingConfig.$type,
      panicThreshold: isSet(object.panicThreshold) ? globalThis.Number(object.panicThreshold) : 0,
      localityAwareRoutingPercent: isSet(object.localityAwareRoutingPercent)
        ? globalThis.Number(object.localityAwareRoutingPercent)
        : 0,
      strictLocality: isSet(object.strictLocality) ? globalThis.Boolean(object.strictLocality) : false,
      mode: isSet(object.mode) ? loadBalancingModeFromJSON(object.mode) : 0,
    };
  },

  toJSON(message: LoadBalancingConfig): unknown {
    const obj: any = {};
    if (message.panicThreshold !== 0) {
      obj.panicThreshold = Math.round(message.panicThreshold);
    }
    if (message.localityAwareRoutingPercent !== 0) {
      obj.localityAwareRoutingPercent = Math.round(message.localityAwareRoutingPercent);
    }
    if (message.strictLocality === true) {
      obj.strictLocality = message.strictLocality;
    }
    if (message.mode !== 0) {
      obj.mode = loadBalancingModeToJSON(message.mode);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoadBalancingConfig>, I>>(base?: I): LoadBalancingConfig {
    return LoadBalancingConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoadBalancingConfig>, I>>(object: I): LoadBalancingConfig {
    const message = createBaseLoadBalancingConfig();
    message.panicThreshold = object.panicThreshold ?? 0;
    message.localityAwareRoutingPercent = object.localityAwareRoutingPercent ?? 0;
    message.strictLocality = object.strictLocality ?? false;
    message.mode = object.mode ?? 0;
    return message;
  },
};

messageTypeRegistry.set(LoadBalancingConfig.$type, LoadBalancingConfig);

function createBaseStreamBackend(): StreamBackend {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.StreamBackend",
    name: "",
    backendWeight: undefined,
    loadBalancingConfig: undefined,
    port: 0,
    targetGroups: undefined,
    healthchecks: [],
    tls: undefined,
    enableProxyProtocol: false,
  };
}

export const StreamBackend = {
  $type: "yandex.cloud.apploadbalancer.v1.StreamBackend" as const,

  encode(message: StreamBackend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.backendWeight !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.backendWeight! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.loadBalancingConfig !== undefined) {
      LoadBalancingConfig.encode(message.loadBalancingConfig, writer.uint32(26).fork()).ldelim();
    }
    if (message.port !== 0) {
      writer.uint32(32).int64(message.port);
    }
    if (message.targetGroups !== undefined) {
      TargetGroupsBackend.encode(message.targetGroups, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.healthchecks) {
      HealthCheck.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.tls !== undefined) {
      BackendTls.encode(message.tls, writer.uint32(58).fork()).ldelim();
    }
    if (message.enableProxyProtocol === true) {
      writer.uint32(64).bool(message.enableProxyProtocol);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamBackend {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamBackend();
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

          message.backendWeight = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.loadBalancingConfig = LoadBalancingConfig.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.port = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.targetGroups = TargetGroupsBackend.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.healthchecks.push(HealthCheck.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.tls = BackendTls.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.enableProxyProtocol = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamBackend {
    return {
      $type: StreamBackend.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      backendWeight: isSet(object.backendWeight) ? Number(object.backendWeight) : undefined,
      loadBalancingConfig: isSet(object.loadBalancingConfig)
        ? LoadBalancingConfig.fromJSON(object.loadBalancingConfig)
        : undefined,
      port: isSet(object.port) ? globalThis.Number(object.port) : 0,
      targetGroups: isSet(object.targetGroups) ? TargetGroupsBackend.fromJSON(object.targetGroups) : undefined,
      healthchecks: globalThis.Array.isArray(object?.healthchecks)
        ? object.healthchecks.map((e: any) => HealthCheck.fromJSON(e))
        : [],
      tls: isSet(object.tls) ? BackendTls.fromJSON(object.tls) : undefined,
      enableProxyProtocol: isSet(object.enableProxyProtocol) ? globalThis.Boolean(object.enableProxyProtocol) : false,
    };
  },

  toJSON(message: StreamBackend): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.backendWeight !== undefined) {
      obj.backendWeight = message.backendWeight;
    }
    if (message.loadBalancingConfig !== undefined) {
      obj.loadBalancingConfig = LoadBalancingConfig.toJSON(message.loadBalancingConfig);
    }
    if (message.port !== 0) {
      obj.port = Math.round(message.port);
    }
    if (message.targetGroups !== undefined) {
      obj.targetGroups = TargetGroupsBackend.toJSON(message.targetGroups);
    }
    if (message.healthchecks?.length) {
      obj.healthchecks = message.healthchecks.map((e) => HealthCheck.toJSON(e));
    }
    if (message.tls !== undefined) {
      obj.tls = BackendTls.toJSON(message.tls);
    }
    if (message.enableProxyProtocol === true) {
      obj.enableProxyProtocol = message.enableProxyProtocol;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamBackend>, I>>(base?: I): StreamBackend {
    return StreamBackend.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamBackend>, I>>(object: I): StreamBackend {
    const message = createBaseStreamBackend();
    message.name = object.name ?? "";
    message.backendWeight = object.backendWeight ?? undefined;
    message.loadBalancingConfig = (object.loadBalancingConfig !== undefined && object.loadBalancingConfig !== null)
      ? LoadBalancingConfig.fromPartial(object.loadBalancingConfig)
      : undefined;
    message.port = object.port ?? 0;
    message.targetGroups = (object.targetGroups !== undefined && object.targetGroups !== null)
      ? TargetGroupsBackend.fromPartial(object.targetGroups)
      : undefined;
    message.healthchecks = object.healthchecks?.map((e) => HealthCheck.fromPartial(e)) || [];
    message.tls = (object.tls !== undefined && object.tls !== null) ? BackendTls.fromPartial(object.tls) : undefined;
    message.enableProxyProtocol = object.enableProxyProtocol ?? false;
    return message;
  },
};

messageTypeRegistry.set(StreamBackend.$type, StreamBackend);

function createBaseHttpBackend(): HttpBackend {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.HttpBackend",
    name: "",
    backendWeight: undefined,
    loadBalancingConfig: undefined,
    port: 0,
    targetGroups: undefined,
    storageBucket: undefined,
    healthchecks: [],
    tls: undefined,
    useHttp2: false,
  };
}

export const HttpBackend = {
  $type: "yandex.cloud.apploadbalancer.v1.HttpBackend" as const,

  encode(message: HttpBackend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.backendWeight !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.backendWeight! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.loadBalancingConfig !== undefined) {
      LoadBalancingConfig.encode(message.loadBalancingConfig, writer.uint32(26).fork()).ldelim();
    }
    if (message.port !== 0) {
      writer.uint32(32).int64(message.port);
    }
    if (message.targetGroups !== undefined) {
      TargetGroupsBackend.encode(message.targetGroups, writer.uint32(42).fork()).ldelim();
    }
    if (message.storageBucket !== undefined) {
      StorageBucketBackend.encode(message.storageBucket, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.healthchecks) {
      HealthCheck.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.tls !== undefined) {
      BackendTls.encode(message.tls, writer.uint32(58).fork()).ldelim();
    }
    if (message.useHttp2 === true) {
      writer.uint32(64).bool(message.useHttp2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpBackend {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpBackend();
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

          message.backendWeight = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.loadBalancingConfig = LoadBalancingConfig.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.port = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.targetGroups = TargetGroupsBackend.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.storageBucket = StorageBucketBackend.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.healthchecks.push(HealthCheck.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.tls = BackendTls.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.useHttp2 = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HttpBackend {
    return {
      $type: HttpBackend.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      backendWeight: isSet(object.backendWeight) ? Number(object.backendWeight) : undefined,
      loadBalancingConfig: isSet(object.loadBalancingConfig)
        ? LoadBalancingConfig.fromJSON(object.loadBalancingConfig)
        : undefined,
      port: isSet(object.port) ? globalThis.Number(object.port) : 0,
      targetGroups: isSet(object.targetGroups) ? TargetGroupsBackend.fromJSON(object.targetGroups) : undefined,
      storageBucket: isSet(object.storageBucket) ? StorageBucketBackend.fromJSON(object.storageBucket) : undefined,
      healthchecks: globalThis.Array.isArray(object?.healthchecks)
        ? object.healthchecks.map((e: any) => HealthCheck.fromJSON(e))
        : [],
      tls: isSet(object.tls) ? BackendTls.fromJSON(object.tls) : undefined,
      useHttp2: isSet(object.useHttp2) ? globalThis.Boolean(object.useHttp2) : false,
    };
  },

  toJSON(message: HttpBackend): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.backendWeight !== undefined) {
      obj.backendWeight = message.backendWeight;
    }
    if (message.loadBalancingConfig !== undefined) {
      obj.loadBalancingConfig = LoadBalancingConfig.toJSON(message.loadBalancingConfig);
    }
    if (message.port !== 0) {
      obj.port = Math.round(message.port);
    }
    if (message.targetGroups !== undefined) {
      obj.targetGroups = TargetGroupsBackend.toJSON(message.targetGroups);
    }
    if (message.storageBucket !== undefined) {
      obj.storageBucket = StorageBucketBackend.toJSON(message.storageBucket);
    }
    if (message.healthchecks?.length) {
      obj.healthchecks = message.healthchecks.map((e) => HealthCheck.toJSON(e));
    }
    if (message.tls !== undefined) {
      obj.tls = BackendTls.toJSON(message.tls);
    }
    if (message.useHttp2 === true) {
      obj.useHttp2 = message.useHttp2;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HttpBackend>, I>>(base?: I): HttpBackend {
    return HttpBackend.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HttpBackend>, I>>(object: I): HttpBackend {
    const message = createBaseHttpBackend();
    message.name = object.name ?? "";
    message.backendWeight = object.backendWeight ?? undefined;
    message.loadBalancingConfig = (object.loadBalancingConfig !== undefined && object.loadBalancingConfig !== null)
      ? LoadBalancingConfig.fromPartial(object.loadBalancingConfig)
      : undefined;
    message.port = object.port ?? 0;
    message.targetGroups = (object.targetGroups !== undefined && object.targetGroups !== null)
      ? TargetGroupsBackend.fromPartial(object.targetGroups)
      : undefined;
    message.storageBucket = (object.storageBucket !== undefined && object.storageBucket !== null)
      ? StorageBucketBackend.fromPartial(object.storageBucket)
      : undefined;
    message.healthchecks = object.healthchecks?.map((e) => HealthCheck.fromPartial(e)) || [];
    message.tls = (object.tls !== undefined && object.tls !== null) ? BackendTls.fromPartial(object.tls) : undefined;
    message.useHttp2 = object.useHttp2 ?? false;
    return message;
  },
};

messageTypeRegistry.set(HttpBackend.$type, HttpBackend);

function createBaseGrpcBackend(): GrpcBackend {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcBackend",
    name: "",
    backendWeight: undefined,
    loadBalancingConfig: undefined,
    port: 0,
    targetGroups: undefined,
    healthchecks: [],
    tls: undefined,
  };
}

export const GrpcBackend = {
  $type: "yandex.cloud.apploadbalancer.v1.GrpcBackend" as const,

  encode(message: GrpcBackend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.backendWeight !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.backendWeight! },
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.loadBalancingConfig !== undefined) {
      LoadBalancingConfig.encode(message.loadBalancingConfig, writer.uint32(26).fork()).ldelim();
    }
    if (message.port !== 0) {
      writer.uint32(32).int64(message.port);
    }
    if (message.targetGroups !== undefined) {
      TargetGroupsBackend.encode(message.targetGroups, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.healthchecks) {
      HealthCheck.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.tls !== undefined) {
      BackendTls.encode(message.tls, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GrpcBackend {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrpcBackend();
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

          message.backendWeight = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.loadBalancingConfig = LoadBalancingConfig.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.port = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.targetGroups = TargetGroupsBackend.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.healthchecks.push(HealthCheck.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.tls = BackendTls.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GrpcBackend {
    return {
      $type: GrpcBackend.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      backendWeight: isSet(object.backendWeight) ? Number(object.backendWeight) : undefined,
      loadBalancingConfig: isSet(object.loadBalancingConfig)
        ? LoadBalancingConfig.fromJSON(object.loadBalancingConfig)
        : undefined,
      port: isSet(object.port) ? globalThis.Number(object.port) : 0,
      targetGroups: isSet(object.targetGroups) ? TargetGroupsBackend.fromJSON(object.targetGroups) : undefined,
      healthchecks: globalThis.Array.isArray(object?.healthchecks)
        ? object.healthchecks.map((e: any) => HealthCheck.fromJSON(e))
        : [],
      tls: isSet(object.tls) ? BackendTls.fromJSON(object.tls) : undefined,
    };
  },

  toJSON(message: GrpcBackend): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.backendWeight !== undefined) {
      obj.backendWeight = message.backendWeight;
    }
    if (message.loadBalancingConfig !== undefined) {
      obj.loadBalancingConfig = LoadBalancingConfig.toJSON(message.loadBalancingConfig);
    }
    if (message.port !== 0) {
      obj.port = Math.round(message.port);
    }
    if (message.targetGroups !== undefined) {
      obj.targetGroups = TargetGroupsBackend.toJSON(message.targetGroups);
    }
    if (message.healthchecks?.length) {
      obj.healthchecks = message.healthchecks.map((e) => HealthCheck.toJSON(e));
    }
    if (message.tls !== undefined) {
      obj.tls = BackendTls.toJSON(message.tls);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GrpcBackend>, I>>(base?: I): GrpcBackend {
    return GrpcBackend.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GrpcBackend>, I>>(object: I): GrpcBackend {
    const message = createBaseGrpcBackend();
    message.name = object.name ?? "";
    message.backendWeight = object.backendWeight ?? undefined;
    message.loadBalancingConfig = (object.loadBalancingConfig !== undefined && object.loadBalancingConfig !== null)
      ? LoadBalancingConfig.fromPartial(object.loadBalancingConfig)
      : undefined;
    message.port = object.port ?? 0;
    message.targetGroups = (object.targetGroups !== undefined && object.targetGroups !== null)
      ? TargetGroupsBackend.fromPartial(object.targetGroups)
      : undefined;
    message.healthchecks = object.healthchecks?.map((e) => HealthCheck.fromPartial(e)) || [];
    message.tls = (object.tls !== undefined && object.tls !== null) ? BackendTls.fromPartial(object.tls) : undefined;
    return message;
  },
};

messageTypeRegistry.set(GrpcBackend.$type, GrpcBackend);

function createBaseTargetGroupsBackend(): TargetGroupsBackend {
  return { $type: "yandex.cloud.apploadbalancer.v1.TargetGroupsBackend", targetGroupIds: [] };
}

export const TargetGroupsBackend = {
  $type: "yandex.cloud.apploadbalancer.v1.TargetGroupsBackend" as const,

  encode(message: TargetGroupsBackend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.targetGroupIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TargetGroupsBackend {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTargetGroupsBackend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.targetGroupIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TargetGroupsBackend {
    return {
      $type: TargetGroupsBackend.$type,
      targetGroupIds: globalThis.Array.isArray(object?.targetGroupIds)
        ? object.targetGroupIds.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: TargetGroupsBackend): unknown {
    const obj: any = {};
    if (message.targetGroupIds?.length) {
      obj.targetGroupIds = message.targetGroupIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TargetGroupsBackend>, I>>(base?: I): TargetGroupsBackend {
    return TargetGroupsBackend.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TargetGroupsBackend>, I>>(object: I): TargetGroupsBackend {
    const message = createBaseTargetGroupsBackend();
    message.targetGroupIds = object.targetGroupIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(TargetGroupsBackend.$type, TargetGroupsBackend);

function createBasePlaintextTransportSettings(): PlaintextTransportSettings {
  return { $type: "yandex.cloud.apploadbalancer.v1.PlaintextTransportSettings" };
}

export const PlaintextTransportSettings = {
  $type: "yandex.cloud.apploadbalancer.v1.PlaintextTransportSettings" as const,

  encode(_: PlaintextTransportSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlaintextTransportSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaintextTransportSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): PlaintextTransportSettings {
    return { $type: PlaintextTransportSettings.$type };
  },

  toJSON(_: PlaintextTransportSettings): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<PlaintextTransportSettings>, I>>(base?: I): PlaintextTransportSettings {
    return PlaintextTransportSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlaintextTransportSettings>, I>>(_: I): PlaintextTransportSettings {
    const message = createBasePlaintextTransportSettings();
    return message;
  },
};

messageTypeRegistry.set(PlaintextTransportSettings.$type, PlaintextTransportSettings);

function createBaseSecureTransportSettings(): SecureTransportSettings {
  return { $type: "yandex.cloud.apploadbalancer.v1.SecureTransportSettings", sni: "", validationContext: undefined };
}

export const SecureTransportSettings = {
  $type: "yandex.cloud.apploadbalancer.v1.SecureTransportSettings" as const,

  encode(message: SecureTransportSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sni !== "") {
      writer.uint32(10).string(message.sni);
    }
    if (message.validationContext !== undefined) {
      ValidationContext.encode(message.validationContext, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecureTransportSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecureTransportSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sni = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.validationContext = ValidationContext.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SecureTransportSettings {
    return {
      $type: SecureTransportSettings.$type,
      sni: isSet(object.sni) ? globalThis.String(object.sni) : "",
      validationContext: isSet(object.validationContext)
        ? ValidationContext.fromJSON(object.validationContext)
        : undefined,
    };
  },

  toJSON(message: SecureTransportSettings): unknown {
    const obj: any = {};
    if (message.sni !== "") {
      obj.sni = message.sni;
    }
    if (message.validationContext !== undefined) {
      obj.validationContext = ValidationContext.toJSON(message.validationContext);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SecureTransportSettings>, I>>(base?: I): SecureTransportSettings {
    return SecureTransportSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SecureTransportSettings>, I>>(object: I): SecureTransportSettings {
    const message = createBaseSecureTransportSettings();
    message.sni = object.sni ?? "";
    message.validationContext = (object.validationContext !== undefined && object.validationContext !== null)
      ? ValidationContext.fromPartial(object.validationContext)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(SecureTransportSettings.$type, SecureTransportSettings);

function createBaseBackendTls(): BackendTls {
  return { $type: "yandex.cloud.apploadbalancer.v1.BackendTls", sni: "", validationContext: undefined };
}

export const BackendTls = {
  $type: "yandex.cloud.apploadbalancer.v1.BackendTls" as const,

  encode(message: BackendTls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sni !== "") {
      writer.uint32(10).string(message.sni);
    }
    if (message.validationContext !== undefined) {
      ValidationContext.encode(message.validationContext, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BackendTls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackendTls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sni = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.validationContext = ValidationContext.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BackendTls {
    return {
      $type: BackendTls.$type,
      sni: isSet(object.sni) ? globalThis.String(object.sni) : "",
      validationContext: isSet(object.validationContext)
        ? ValidationContext.fromJSON(object.validationContext)
        : undefined,
    };
  },

  toJSON(message: BackendTls): unknown {
    const obj: any = {};
    if (message.sni !== "") {
      obj.sni = message.sni;
    }
    if (message.validationContext !== undefined) {
      obj.validationContext = ValidationContext.toJSON(message.validationContext);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BackendTls>, I>>(base?: I): BackendTls {
    return BackendTls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BackendTls>, I>>(object: I): BackendTls {
    const message = createBaseBackendTls();
    message.sni = object.sni ?? "";
    message.validationContext = (object.validationContext !== undefined && object.validationContext !== null)
      ? ValidationContext.fromPartial(object.validationContext)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(BackendTls.$type, BackendTls);

function createBaseStorageBucketBackend(): StorageBucketBackend {
  return { $type: "yandex.cloud.apploadbalancer.v1.StorageBucketBackend", bucket: "" };
}

export const StorageBucketBackend = {
  $type: "yandex.cloud.apploadbalancer.v1.StorageBucketBackend" as const,

  encode(message: StorageBucketBackend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucket !== "") {
      writer.uint32(10).string(message.bucket);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StorageBucketBackend {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageBucketBackend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bucket = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StorageBucketBackend {
    return { $type: StorageBucketBackend.$type, bucket: isSet(object.bucket) ? globalThis.String(object.bucket) : "" };
  },

  toJSON(message: StorageBucketBackend): unknown {
    const obj: any = {};
    if (message.bucket !== "") {
      obj.bucket = message.bucket;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StorageBucketBackend>, I>>(base?: I): StorageBucketBackend {
    return StorageBucketBackend.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StorageBucketBackend>, I>>(object: I): StorageBucketBackend {
    const message = createBaseStorageBucketBackend();
    message.bucket = object.bucket ?? "";
    return message;
  },
};

messageTypeRegistry.set(StorageBucketBackend.$type, StorageBucketBackend);

function createBaseHealthCheck(): HealthCheck {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.HealthCheck",
    timeout: undefined,
    interval: undefined,
    intervalJitterPercent: 0,
    healthyThreshold: 0,
    unhealthyThreshold: 0,
    healthcheckPort: 0,
    stream: undefined,
    http: undefined,
    grpc: undefined,
    plaintext: undefined,
    tls: undefined,
  };
}

export const HealthCheck = {
  $type: "yandex.cloud.apploadbalancer.v1.HealthCheck" as const,

  encode(message: HealthCheck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(10).fork()).ldelim();
    }
    if (message.interval !== undefined) {
      Duration.encode(message.interval, writer.uint32(18).fork()).ldelim();
    }
    if (message.intervalJitterPercent !== 0) {
      writer.uint32(25).double(message.intervalJitterPercent);
    }
    if (message.healthyThreshold !== 0) {
      writer.uint32(32).int64(message.healthyThreshold);
    }
    if (message.unhealthyThreshold !== 0) {
      writer.uint32(40).int64(message.unhealthyThreshold);
    }
    if (message.healthcheckPort !== 0) {
      writer.uint32(48).int64(message.healthcheckPort);
    }
    if (message.stream !== undefined) {
      HealthCheck_StreamHealthCheck.encode(message.stream, writer.uint32(58).fork()).ldelim();
    }
    if (message.http !== undefined) {
      HealthCheck_HttpHealthCheck.encode(message.http, writer.uint32(66).fork()).ldelim();
    }
    if (message.grpc !== undefined) {
      HealthCheck_GrpcHealthCheck.encode(message.grpc, writer.uint32(74).fork()).ldelim();
    }
    if (message.plaintext !== undefined) {
      PlaintextTransportSettings.encode(message.plaintext, writer.uint32(82).fork()).ldelim();
    }
    if (message.tls !== undefined) {
      SecureTransportSettings.encode(message.tls, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheck {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealthCheck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timeout = Duration.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.interval = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.intervalJitterPercent = reader.double();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.healthyThreshold = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.unhealthyThreshold = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.healthcheckPort = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.stream = HealthCheck_StreamHealthCheck.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.http = HealthCheck_HttpHealthCheck.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.grpc = HealthCheck_GrpcHealthCheck.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.plaintext = PlaintextTransportSettings.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.tls = SecureTransportSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HealthCheck {
    return {
      $type: HealthCheck.$type,
      timeout: isSet(object.timeout) ? Duration.fromJSON(object.timeout) : undefined,
      interval: isSet(object.interval) ? Duration.fromJSON(object.interval) : undefined,
      intervalJitterPercent: isSet(object.intervalJitterPercent) ? globalThis.Number(object.intervalJitterPercent) : 0,
      healthyThreshold: isSet(object.healthyThreshold) ? globalThis.Number(object.healthyThreshold) : 0,
      unhealthyThreshold: isSet(object.unhealthyThreshold) ? globalThis.Number(object.unhealthyThreshold) : 0,
      healthcheckPort: isSet(object.healthcheckPort) ? globalThis.Number(object.healthcheckPort) : 0,
      stream: isSet(object.stream) ? HealthCheck_StreamHealthCheck.fromJSON(object.stream) : undefined,
      http: isSet(object.http) ? HealthCheck_HttpHealthCheck.fromJSON(object.http) : undefined,
      grpc: isSet(object.grpc) ? HealthCheck_GrpcHealthCheck.fromJSON(object.grpc) : undefined,
      plaintext: isSet(object.plaintext) ? PlaintextTransportSettings.fromJSON(object.plaintext) : undefined,
      tls: isSet(object.tls) ? SecureTransportSettings.fromJSON(object.tls) : undefined,
    };
  },

  toJSON(message: HealthCheck): unknown {
    const obj: any = {};
    if (message.timeout !== undefined) {
      obj.timeout = Duration.toJSON(message.timeout);
    }
    if (message.interval !== undefined) {
      obj.interval = Duration.toJSON(message.interval);
    }
    if (message.intervalJitterPercent !== 0) {
      obj.intervalJitterPercent = message.intervalJitterPercent;
    }
    if (message.healthyThreshold !== 0) {
      obj.healthyThreshold = Math.round(message.healthyThreshold);
    }
    if (message.unhealthyThreshold !== 0) {
      obj.unhealthyThreshold = Math.round(message.unhealthyThreshold);
    }
    if (message.healthcheckPort !== 0) {
      obj.healthcheckPort = Math.round(message.healthcheckPort);
    }
    if (message.stream !== undefined) {
      obj.stream = HealthCheck_StreamHealthCheck.toJSON(message.stream);
    }
    if (message.http !== undefined) {
      obj.http = HealthCheck_HttpHealthCheck.toJSON(message.http);
    }
    if (message.grpc !== undefined) {
      obj.grpc = HealthCheck_GrpcHealthCheck.toJSON(message.grpc);
    }
    if (message.plaintext !== undefined) {
      obj.plaintext = PlaintextTransportSettings.toJSON(message.plaintext);
    }
    if (message.tls !== undefined) {
      obj.tls = SecureTransportSettings.toJSON(message.tls);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HealthCheck>, I>>(base?: I): HealthCheck {
    return HealthCheck.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HealthCheck>, I>>(object: I): HealthCheck {
    const message = createBaseHealthCheck();
    message.timeout = (object.timeout !== undefined && object.timeout !== null)
      ? Duration.fromPartial(object.timeout)
      : undefined;
    message.interval = (object.interval !== undefined && object.interval !== null)
      ? Duration.fromPartial(object.interval)
      : undefined;
    message.intervalJitterPercent = object.intervalJitterPercent ?? 0;
    message.healthyThreshold = object.healthyThreshold ?? 0;
    message.unhealthyThreshold = object.unhealthyThreshold ?? 0;
    message.healthcheckPort = object.healthcheckPort ?? 0;
    message.stream = (object.stream !== undefined && object.stream !== null)
      ? HealthCheck_StreamHealthCheck.fromPartial(object.stream)
      : undefined;
    message.http = (object.http !== undefined && object.http !== null)
      ? HealthCheck_HttpHealthCheck.fromPartial(object.http)
      : undefined;
    message.grpc = (object.grpc !== undefined && object.grpc !== null)
      ? HealthCheck_GrpcHealthCheck.fromPartial(object.grpc)
      : undefined;
    message.plaintext = (object.plaintext !== undefined && object.plaintext !== null)
      ? PlaintextTransportSettings.fromPartial(object.plaintext)
      : undefined;
    message.tls = (object.tls !== undefined && object.tls !== null)
      ? SecureTransportSettings.fromPartial(object.tls)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(HealthCheck.$type, HealthCheck);

function createBaseHealthCheck_StreamHealthCheck(): HealthCheck_StreamHealthCheck {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.HealthCheck.StreamHealthCheck",
    send: undefined,
    receive: undefined,
  };
}

export const HealthCheck_StreamHealthCheck = {
  $type: "yandex.cloud.apploadbalancer.v1.HealthCheck.StreamHealthCheck" as const,

  encode(message: HealthCheck_StreamHealthCheck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.send !== undefined) {
      Payload.encode(message.send, writer.uint32(10).fork()).ldelim();
    }
    if (message.receive !== undefined) {
      Payload.encode(message.receive, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheck_StreamHealthCheck {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealthCheck_StreamHealthCheck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.send = Payload.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.receive = Payload.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HealthCheck_StreamHealthCheck {
    return {
      $type: HealthCheck_StreamHealthCheck.$type,
      send: isSet(object.send) ? Payload.fromJSON(object.send) : undefined,
      receive: isSet(object.receive) ? Payload.fromJSON(object.receive) : undefined,
    };
  },

  toJSON(message: HealthCheck_StreamHealthCheck): unknown {
    const obj: any = {};
    if (message.send !== undefined) {
      obj.send = Payload.toJSON(message.send);
    }
    if (message.receive !== undefined) {
      obj.receive = Payload.toJSON(message.receive);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HealthCheck_StreamHealthCheck>, I>>(base?: I): HealthCheck_StreamHealthCheck {
    return HealthCheck_StreamHealthCheck.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HealthCheck_StreamHealthCheck>, I>>(
    object: I,
  ): HealthCheck_StreamHealthCheck {
    const message = createBaseHealthCheck_StreamHealthCheck();
    message.send = (object.send !== undefined && object.send !== null) ? Payload.fromPartial(object.send) : undefined;
    message.receive = (object.receive !== undefined && object.receive !== null)
      ? Payload.fromPartial(object.receive)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(HealthCheck_StreamHealthCheck.$type, HealthCheck_StreamHealthCheck);

function createBaseHealthCheck_HttpHealthCheck(): HealthCheck_HttpHealthCheck {
  return { $type: "yandex.cloud.apploadbalancer.v1.HealthCheck.HttpHealthCheck", host: "", path: "", useHttp2: false };
}

export const HealthCheck_HttpHealthCheck = {
  $type: "yandex.cloud.apploadbalancer.v1.HealthCheck.HttpHealthCheck" as const,

  encode(message: HealthCheck_HttpHealthCheck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.host !== "") {
      writer.uint32(10).string(message.host);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (message.useHttp2 === true) {
      writer.uint32(24).bool(message.useHttp2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheck_HttpHealthCheck {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealthCheck_HttpHealthCheck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.host = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.path = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.useHttp2 = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HealthCheck_HttpHealthCheck {
    return {
      $type: HealthCheck_HttpHealthCheck.$type,
      host: isSet(object.host) ? globalThis.String(object.host) : "",
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      useHttp2: isSet(object.useHttp2) ? globalThis.Boolean(object.useHttp2) : false,
    };
  },

  toJSON(message: HealthCheck_HttpHealthCheck): unknown {
    const obj: any = {};
    if (message.host !== "") {
      obj.host = message.host;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.useHttp2 === true) {
      obj.useHttp2 = message.useHttp2;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HealthCheck_HttpHealthCheck>, I>>(base?: I): HealthCheck_HttpHealthCheck {
    return HealthCheck_HttpHealthCheck.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HealthCheck_HttpHealthCheck>, I>>(object: I): HealthCheck_HttpHealthCheck {
    const message = createBaseHealthCheck_HttpHealthCheck();
    message.host = object.host ?? "";
    message.path = object.path ?? "";
    message.useHttp2 = object.useHttp2 ?? false;
    return message;
  },
};

messageTypeRegistry.set(HealthCheck_HttpHealthCheck.$type, HealthCheck_HttpHealthCheck);

function createBaseHealthCheck_GrpcHealthCheck(): HealthCheck_GrpcHealthCheck {
  return { $type: "yandex.cloud.apploadbalancer.v1.HealthCheck.GrpcHealthCheck", serviceName: "" };
}

export const HealthCheck_GrpcHealthCheck = {
  $type: "yandex.cloud.apploadbalancer.v1.HealthCheck.GrpcHealthCheck" as const,

  encode(message: HealthCheck_GrpcHealthCheck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheck_GrpcHealthCheck {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealthCheck_GrpcHealthCheck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serviceName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HealthCheck_GrpcHealthCheck {
    return {
      $type: HealthCheck_GrpcHealthCheck.$type,
      serviceName: isSet(object.serviceName) ? globalThis.String(object.serviceName) : "",
    };
  },

  toJSON(message: HealthCheck_GrpcHealthCheck): unknown {
    const obj: any = {};
    if (message.serviceName !== "") {
      obj.serviceName = message.serviceName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HealthCheck_GrpcHealthCheck>, I>>(base?: I): HealthCheck_GrpcHealthCheck {
    return HealthCheck_GrpcHealthCheck.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HealthCheck_GrpcHealthCheck>, I>>(object: I): HealthCheck_GrpcHealthCheck {
    const message = createBaseHealthCheck_GrpcHealthCheck();
    message.serviceName = object.serviceName ?? "";
    return message;
  },
};

messageTypeRegistry.set(HealthCheck_GrpcHealthCheck.$type, HealthCheck_GrpcHealthCheck);

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
