/* eslint-disable */
import { Duration } from "@yandex-cloud/core/dist/generated/google/protobuf/duration";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { Payload } from "./payload";

export const protobufPackage = "yandex.cloud.apploadbalancer.v1";

/**
 * A virtual host resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#virtual-host).
 */
export interface VirtualHost {
  $type: "yandex.cloud.apploadbalancer.v1.VirtualHost";
  /** Name of the virtual host. The name is unique within the HTTP router. */
  name: string;
  /**
   * List of domains that are attributed to the virtual host.
   *
   * The host is selected to process the request received by the load balancer
   * if the domain specified in the HTTP/1.1 `Host` header or the HTTP/2 `:authority` pseudo-header matches a domain
   * specified in the host.
   *
   * A wildcard asterisk character (`*`) matches 0 or more characters.
   *
   * If not specified, all domains are attributed to the host, which is the same as specifying a `*` value.
   * An HTTP router must not contain more than one virtual host to which all domains are attributed.
   */
  authority: string[];
  /**
   * Routes of the virtual host.
   *
   * A route contains a set of conditions (predicates) that are used by the load balancer to select the route
   * for the request and an action on the request.
   * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#routes).
   *
   * The order of routes matters: the first route whose predicate matches the request is selected.
   * The most specific routes should be at the top of the list, so that they are not overridden.
   * For example, if the first HTTP route is configured, via [HttpRoute.match], to match paths prefixed with just `/`,
   * other routes are never matched.
   */
  routes: Route[];
  /** Deprecated, use route_options.modify_request_headers. */
  modifyRequestHeaders: HeaderModification[];
  /** Deprecated, use route_options.modify_response_headers. */
  modifyResponseHeaders: HeaderModification[];
  routeOptions?: RouteOptions | undefined;
}

export interface RouteOptions {
  $type: "yandex.cloud.apploadbalancer.v1.RouteOptions";
  /** Apply the following modifications to the request headers. */
  modifyRequestHeaders: HeaderModification[];
  /** Apply the following modifications to the response headers. */
  modifyResponseHeaders: HeaderModification[];
  rbac?:
    | RBAC
    | undefined;
  /** Security profile that will take effect to all requests routed via particular virtual host. */
  securityProfileId: string;
}

/**
 * Role Based Access Control (RBAC) provides router, virtual host, and route access control for the ALB
 * service. Requests are allowed or denied based on the `action` and whether a matching principal is
 * found. For instance, if the action is ALLOW and a matching principal is found the request should be
 * allowed.
 */
export interface RBAC {
  $type: "yandex.cloud.apploadbalancer.v1.RBAC";
  /** The action to take if a principal matches. Every action either allows or denies a request. */
  action: RBAC_Action;
  /** Required. A match occurs when at least one matches the request. */
  principals: Principals[];
}

export enum RBAC_Action {
  ACTION_UNSPECIFIED = 0,
  /** ALLOW - Allows the request if and only if there is a principal that matches the request. */
  ALLOW = 1,
  /** DENY - Allows the request if and only if there are no principal that match the request. */
  DENY = 2,
  UNRECOGNIZED = -1,
}

export function rBAC_ActionFromJSON(object: any): RBAC_Action {
  switch (object) {
    case 0:
    case "ACTION_UNSPECIFIED":
      return RBAC_Action.ACTION_UNSPECIFIED;
    case 1:
    case "ALLOW":
      return RBAC_Action.ALLOW;
    case 2:
    case "DENY":
      return RBAC_Action.DENY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RBAC_Action.UNRECOGNIZED;
  }
}

export function rBAC_ActionToJSON(object: RBAC_Action): string {
  switch (object) {
    case RBAC_Action.ACTION_UNSPECIFIED:
      return "ACTION_UNSPECIFIED";
    case RBAC_Action.ALLOW:
      return "ALLOW";
    case RBAC_Action.DENY:
      return "DENY";
    case RBAC_Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Principals define a group of identities for a request. */
export interface Principals {
  $type: "yandex.cloud.apploadbalancer.v1.Principals";
  /** Required. A match occurs when all principals match the request. */
  andPrincipals: Principal[];
}

/** Principal defines an identity for a request. */
export interface Principal {
  $type: "yandex.cloud.apploadbalancer.v1.Principal";
  /** A header (or pseudo-header such as :path or :method) of the incoming HTTP request. */
  header?:
    | Principal_HeaderMatcher
    | undefined;
  /** A CIDR block or IP that describes the request remote/origin address, e.g. ``192.0.0.0/24`` or``192.0.0.4`` . */
  remoteIp?:
    | string
    | undefined;
  /** When any is set, it matches any request. */
  any?: boolean | undefined;
}

export interface Principal_HeaderMatcher {
  $type: "yandex.cloud.apploadbalancer.v1.Principal.HeaderMatcher";
  /** Specifies the name of the header in the request. */
  name: string;
  /**
   * Specifies how the header match will be performed to route the request.
   * In the absence of value a request that has specified header name will match,
   * regardless of the header's value.
   */
  value?: StringMatch | undefined;
}

/** A header modification resource. */
export interface HeaderModification {
  $type: "yandex.cloud.apploadbalancer.v1.HeaderModification";
  /** Name of the header. */
  name: string;
  /**
   * Appends the specified string to the header value.
   *
   * Variables [defined for Envoy proxy](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_conn_man/headers#custom-request-response-headers)
   * are supported.
   */
  append?:
    | string
    | undefined;
  /**
   * Replaces the value of the header with the specified string.
   *
   * Variables [defined for Envoy proxy](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_conn_man/headers#custom-request-response-headers)
   * are supported.
   */
  replace?:
    | string
    | undefined;
  /** Removes the header. */
  remove?:
    | boolean
    | undefined;
  /**
   * Replaces the name of the header with the specified string.
   * This operation is only supported for ALB Virtual Hosts.
   */
  rename?: string | undefined;
}

/**
 * A route resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#routes).
 */
export interface Route {
  $type: "yandex.cloud.apploadbalancer.v1.Route";
  /** Name of the route. */
  name: string;
  /** HTTP route configuration. */
  http?:
    | HttpRoute
    | undefined;
  /** gRPC route configuration. */
  grpc?: GrpcRoute | undefined;
  routeOptions?: RouteOptions | undefined;
}

/** An HTTP route configuration resource. */
export interface HttpRoute {
  $type: "yandex.cloud.apploadbalancer.v1.HttpRoute";
  /** Condition (predicate) used to select the route. */
  match?:
    | HttpRouteMatch
    | undefined;
  /** Forwards the request to a backend group for processing as configured. */
  route?:
    | HttpRouteAction
    | undefined;
  /** Redirects the request as configured. */
  redirect?:
    | RedirectAction
    | undefined;
  /** Instructs the load balancer to respond directly as configured. */
  directResponse?: DirectResponseAction | undefined;
}

/** A gRPC route configuration resource. */
export interface GrpcRoute {
  $type: "yandex.cloud.apploadbalancer.v1.GrpcRoute";
  /** Condition (predicate) used to select the route. */
  match?:
    | GrpcRouteMatch
    | undefined;
  /** Forwards the request to a backend group for processing as configured. */
  route?:
    | GrpcRouteAction
    | undefined;
  /** Instructs the load balancer to respond directly with a specified status. */
  statusResponse?: GrpcStatusResponseAction | undefined;
}

/** An HTTP route condition (predicate) resource. */
export interface HttpRouteMatch {
  $type: "yandex.cloud.apploadbalancer.v1.HttpRouteMatch";
  /** HTTP method specified in the request. */
  httpMethod: string[];
  /**
   * Match settings for the path specified in the request.
   *
   * If not specified, the route matches all paths.
   */
  path?: StringMatch | undefined;
}

/** A gRPC route condition (predicate) resource. */
export interface GrpcRouteMatch {
  $type: "yandex.cloud.apploadbalancer.v1.GrpcRouteMatch";
  /**
   * Match settings for gRPC service method called in the request.
   *
   * A match string must be a fully qualified method name, e.g. `foo.bar.v1.BazService/Get`, or a prefix of such.
   *
   * If not specified, the route matches all methods.
   */
  fqmn?: StringMatch | undefined;
}

/** A string matcher resource. */
export interface StringMatch {
  $type: "yandex.cloud.apploadbalancer.v1.StringMatch";
  /** Exact match string. */
  exactMatch?:
    | string
    | undefined;
  /** Prefix match string. */
  prefixMatch?:
    | string
    | undefined;
  /** Regular expression match string. */
  regexMatch?: string | undefined;
}

/** A redirect action resource. */
export interface RedirectAction {
  $type: "yandex.cloud.apploadbalancer.v1.RedirectAction";
  /**
   * URI scheme replacement.
   *
   * If `http` or `https` scheme is to be replaced and `80` or `443` port is specified in the original URI,
   * the port is also removed.
   *
   * If not specified, the original scheme and port are used.
   */
  replaceScheme: string;
  /**
   * URI host replacement.
   *
   * If not specified, the original host is used.
   */
  replaceHost: string;
  /**
   * URI host replacement.
   *
   * If not specified, the original host is used.
   */
  replacePort: number;
  /** Replacement for the whole path. */
  replacePath?:
    | string
    | undefined;
  /**
   * Replacement for the path prefix matched by [StringMatch].
   *
   * For instance, if [StringMatch.prefix_match] value is `/foo` and `replace_prefix` value is `/bar`,
   * a request with `https://example.com/foobaz` URI is redirected to `https://example.com/barbaz`.
   * For [StringMatch.exact_match], the whole path is replaced.
   */
  replacePrefix?:
    | string
    | undefined;
  /** Removes URI query. */
  removeQuery: boolean;
  /** HTTP status code to use in redirect responses. */
  responseCode: RedirectAction_RedirectResponseCode;
}

/** HTTP status codes supported for use in redirect responses. */
export enum RedirectAction_RedirectResponseCode {
  /** MOVED_PERMANENTLY - `301 Moved Permanently` status code. */
  MOVED_PERMANENTLY = 0,
  /** FOUND - `302 Found` status code. */
  FOUND = 1,
  /** SEE_OTHER - `303 See Other` status code. */
  SEE_OTHER = 2,
  /** TEMPORARY_REDIRECT - `307 Temporary Redirect` status code. */
  TEMPORARY_REDIRECT = 3,
  /** PERMANENT_REDIRECT - `308 Permanent Redirect` status code. */
  PERMANENT_REDIRECT = 4,
  UNRECOGNIZED = -1,
}

export function redirectAction_RedirectResponseCodeFromJSON(object: any): RedirectAction_RedirectResponseCode {
  switch (object) {
    case 0:
    case "MOVED_PERMANENTLY":
      return RedirectAction_RedirectResponseCode.MOVED_PERMANENTLY;
    case 1:
    case "FOUND":
      return RedirectAction_RedirectResponseCode.FOUND;
    case 2:
    case "SEE_OTHER":
      return RedirectAction_RedirectResponseCode.SEE_OTHER;
    case 3:
    case "TEMPORARY_REDIRECT":
      return RedirectAction_RedirectResponseCode.TEMPORARY_REDIRECT;
    case 4:
    case "PERMANENT_REDIRECT":
      return RedirectAction_RedirectResponseCode.PERMANENT_REDIRECT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RedirectAction_RedirectResponseCode.UNRECOGNIZED;
  }
}

export function redirectAction_RedirectResponseCodeToJSON(object: RedirectAction_RedirectResponseCode): string {
  switch (object) {
    case RedirectAction_RedirectResponseCode.MOVED_PERMANENTLY:
      return "MOVED_PERMANENTLY";
    case RedirectAction_RedirectResponseCode.FOUND:
      return "FOUND";
    case RedirectAction_RedirectResponseCode.SEE_OTHER:
      return "SEE_OTHER";
    case RedirectAction_RedirectResponseCode.TEMPORARY_REDIRECT:
      return "TEMPORARY_REDIRECT";
    case RedirectAction_RedirectResponseCode.PERMANENT_REDIRECT:
      return "PERMANENT_REDIRECT";
    case RedirectAction_RedirectResponseCode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A direct response action resource. */
export interface DirectResponseAction {
  $type: "yandex.cloud.apploadbalancer.v1.DirectResponseAction";
  /** HTTP status code to use in responses. */
  status: number;
  /** Response body. */
  body?: Payload | undefined;
}

/** A gRPC status response action resource. */
export interface GrpcStatusResponseAction {
  $type: "yandex.cloud.apploadbalancer.v1.GrpcStatusResponseAction";
  /** gRPC [status code](https://grpc.github.io/grpc/core/md_doc_statuscodes.html) to use in responses. */
  status: GrpcStatusResponseAction_Status;
}

/** gRPC status code supported for use in responses. */
export enum GrpcStatusResponseAction_Status {
  /** OK - `OK` (0) status code. */
  OK = 0,
  /** INVALID_ARGUMENT - `INVALID_ARGUMENT` (3) status code. */
  INVALID_ARGUMENT = 1,
  /** NOT_FOUND - `NOT_FOUND` (5) status code. */
  NOT_FOUND = 2,
  /** PERMISSION_DENIED - `PERMISSION_DENIED` (7) status code. */
  PERMISSION_DENIED = 3,
  /** UNAUTHENTICATED - `UNAUTHENTICATED` (16) status code. */
  UNAUTHENTICATED = 4,
  /** UNIMPLEMENTED - `UNIMPLEMENTED` (12) status code. */
  UNIMPLEMENTED = 5,
  /** INTERNAL - `INTERNAL` (13) status code. */
  INTERNAL = 6,
  /** UNAVAILABLE - `UNAVAILABLE` (14) status code. */
  UNAVAILABLE = 7,
  UNRECOGNIZED = -1,
}

export function grpcStatusResponseAction_StatusFromJSON(object: any): GrpcStatusResponseAction_Status {
  switch (object) {
    case 0:
    case "OK":
      return GrpcStatusResponseAction_Status.OK;
    case 1:
    case "INVALID_ARGUMENT":
      return GrpcStatusResponseAction_Status.INVALID_ARGUMENT;
    case 2:
    case "NOT_FOUND":
      return GrpcStatusResponseAction_Status.NOT_FOUND;
    case 3:
    case "PERMISSION_DENIED":
      return GrpcStatusResponseAction_Status.PERMISSION_DENIED;
    case 4:
    case "UNAUTHENTICATED":
      return GrpcStatusResponseAction_Status.UNAUTHENTICATED;
    case 5:
    case "UNIMPLEMENTED":
      return GrpcStatusResponseAction_Status.UNIMPLEMENTED;
    case 6:
    case "INTERNAL":
      return GrpcStatusResponseAction_Status.INTERNAL;
    case 7:
    case "UNAVAILABLE":
      return GrpcStatusResponseAction_Status.UNAVAILABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GrpcStatusResponseAction_Status.UNRECOGNIZED;
  }
}

export function grpcStatusResponseAction_StatusToJSON(object: GrpcStatusResponseAction_Status): string {
  switch (object) {
    case GrpcStatusResponseAction_Status.OK:
      return "OK";
    case GrpcStatusResponseAction_Status.INVALID_ARGUMENT:
      return "INVALID_ARGUMENT";
    case GrpcStatusResponseAction_Status.NOT_FOUND:
      return "NOT_FOUND";
    case GrpcStatusResponseAction_Status.PERMISSION_DENIED:
      return "PERMISSION_DENIED";
    case GrpcStatusResponseAction_Status.UNAUTHENTICATED:
      return "UNAUTHENTICATED";
    case GrpcStatusResponseAction_Status.UNIMPLEMENTED:
      return "UNIMPLEMENTED";
    case GrpcStatusResponseAction_Status.INTERNAL:
      return "INTERNAL";
    case GrpcStatusResponseAction_Status.UNAVAILABLE:
      return "UNAVAILABLE";
    case GrpcStatusResponseAction_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** An HTTP route action resource. */
export interface HttpRouteAction {
  $type: "yandex.cloud.apploadbalancer.v1.HttpRouteAction";
  /**
   * Backend group to forward requests to.
   *
   * Stream (TCP) backend groups are not supported.
   */
  backendGroupId: string;
  /**
   * Overall timeout for an HTTP connection between a load balancer node an a backend from the backend group:
   * the maximum time the connection is kept alive for, regardless of whether data is transferred over it.
   *
   * If a connection times out, the load balancer responds to the client with a `504 Gateway Timeout` status code.
   *
   * Default value: `60`.
   */
  timeout?:
    | Duration
    | undefined;
  /**
   * Idle timeout for an HTTP connection between a load balancer node an a backend from the backend group:
   * the maximum time the connection is allowed to be idle, i.e. without any data transferred over it.
   *
   * Specifying meaningful values for both [timeout] and `idle_timeout` is useful for implementing
   * server-push mechanisms such as long polling, server-sent events (`EventSource` interface) etc.
   *
   * If a connection times out, the load balancer responds to the client with a `504 Gateway Timeout` status code.
   *
   * If not specified, no idle timeout is used, and an alive connection may be idle for any duration (see [timeout]).
   */
  idleTimeout?:
    | Duration
    | undefined;
  /** Host replacement. */
  hostRewrite?:
    | string
    | undefined;
  /** Automatically replaces the host with that of the target. */
  autoHostRewrite?:
    | boolean
    | undefined;
  /**
   * Replacement for the path prefix matched by [StringMatch].
   *
   * For instance, if [StringMatch.prefix_match] value is `/foo` and `prefix_rewrite` value is `/bar`,
   * a request with `/foobaz` path is forwarded with `/barbaz` path.
   * For [StringMatch.exact_match], the whole path is replaced.
   *
   * If not specified, the path is not changed.
   */
  prefixRewrite: string;
  /** Supported values for HTTP `Upgrade` header. E.g. `websocket`. */
  upgradeTypes: string[];
}

/** A gRPC route action resource. */
export interface GrpcRouteAction {
  $type: "yandex.cloud.apploadbalancer.v1.GrpcRouteAction";
  /** Backend group to forward requests to. */
  backendGroupId: string;
  /**
   * Overall timeout for an underlying HTTP connection between a load balancer node an a backend from the backend group:
   * the maximum time the connection is kept alive for, regardless of whether data is transferred over it.
   *
   * If a client specifies a lower timeout in HTTP `grpc-timeout` header, the `max_timeout` value is ignored.
   *
   * If a connection times out, the load balancer responds to the client with an `UNAVAILABLE` status code.
   *
   * Default value: `60`.
   */
  maxTimeout?:
    | Duration
    | undefined;
  /**
   * Idle timeout for an underlying HTTP connection between a load balancer node an a backend from the backend group:
   * the maximum time the connection is allowed to be idle, i.e. without any data transferred over it.
   *
   * Specifying meaningful values for both [max_timeout] and `idle_timeout` is useful for implementing
   * server-push mechanisms such as long polling, server-sent events etc.
   *
   * If a connection times out, the load balancer responds to the client with an `UNAVAILABLE` status code.
   *
   * If not specified, no idle timeout is used, and an alive connection may be idle for any duration
   * (see [max_timeout]).
   */
  idleTimeout?:
    | Duration
    | undefined;
  /** Host replacement. */
  hostRewrite?:
    | string
    | undefined;
  /** Automatically replaces the host with that of the target. */
  autoHostRewrite?: boolean | undefined;
}

function createBaseVirtualHost(): VirtualHost {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.VirtualHost",
    name: "",
    authority: [],
    routes: [],
    modifyRequestHeaders: [],
    modifyResponseHeaders: [],
    routeOptions: undefined,
  };
}

export const VirtualHost = {
  $type: "yandex.cloud.apploadbalancer.v1.VirtualHost" as const,

  encode(message: VirtualHost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.authority) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.routes) {
      Route.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.modifyRequestHeaders) {
      HeaderModification.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.modifyResponseHeaders) {
      HeaderModification.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.routeOptions !== undefined) {
      RouteOptions.encode(message.routeOptions, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualHost {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualHost();
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

          message.authority.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.routes.push(Route.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.modifyRequestHeaders.push(HeaderModification.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.modifyResponseHeaders.push(HeaderModification.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.routeOptions = RouteOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VirtualHost {
    return {
      $type: VirtualHost.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      authority: globalThis.Array.isArray(object?.authority)
        ? object.authority.map((e: any) => globalThis.String(e))
        : [],
      routes: globalThis.Array.isArray(object?.routes) ? object.routes.map((e: any) => Route.fromJSON(e)) : [],
      modifyRequestHeaders: globalThis.Array.isArray(object?.modifyRequestHeaders)
        ? object.modifyRequestHeaders.map((e: any) => HeaderModification.fromJSON(e))
        : [],
      modifyResponseHeaders: globalThis.Array.isArray(object?.modifyResponseHeaders)
        ? object.modifyResponseHeaders.map((e: any) => HeaderModification.fromJSON(e))
        : [],
      routeOptions: isSet(object.routeOptions) ? RouteOptions.fromJSON(object.routeOptions) : undefined,
    };
  },

  toJSON(message: VirtualHost): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.authority?.length) {
      obj.authority = message.authority;
    }
    if (message.routes?.length) {
      obj.routes = message.routes.map((e) => Route.toJSON(e));
    }
    if (message.modifyRequestHeaders?.length) {
      obj.modifyRequestHeaders = message.modifyRequestHeaders.map((e) => HeaderModification.toJSON(e));
    }
    if (message.modifyResponseHeaders?.length) {
      obj.modifyResponseHeaders = message.modifyResponseHeaders.map((e) => HeaderModification.toJSON(e));
    }
    if (message.routeOptions !== undefined) {
      obj.routeOptions = RouteOptions.toJSON(message.routeOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VirtualHost>, I>>(base?: I): VirtualHost {
    return VirtualHost.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VirtualHost>, I>>(object: I): VirtualHost {
    const message = createBaseVirtualHost();
    message.name = object.name ?? "";
    message.authority = object.authority?.map((e) => e) || [];
    message.routes = object.routes?.map((e) => Route.fromPartial(e)) || [];
    message.modifyRequestHeaders = object.modifyRequestHeaders?.map((e) => HeaderModification.fromPartial(e)) || [];
    message.modifyResponseHeaders = object.modifyResponseHeaders?.map((e) => HeaderModification.fromPartial(e)) || [];
    message.routeOptions = (object.routeOptions !== undefined && object.routeOptions !== null)
      ? RouteOptions.fromPartial(object.routeOptions)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(VirtualHost.$type, VirtualHost);

function createBaseRouteOptions(): RouteOptions {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.RouteOptions",
    modifyRequestHeaders: [],
    modifyResponseHeaders: [],
    rbac: undefined,
    securityProfileId: "",
  };
}

export const RouteOptions = {
  $type: "yandex.cloud.apploadbalancer.v1.RouteOptions" as const,

  encode(message: RouteOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.modifyRequestHeaders) {
      HeaderModification.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.modifyResponseHeaders) {
      HeaderModification.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.rbac !== undefined) {
      RBAC.encode(message.rbac, writer.uint32(26).fork()).ldelim();
    }
    if (message.securityProfileId !== "") {
      writer.uint32(34).string(message.securityProfileId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RouteOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouteOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.modifyRequestHeaders.push(HeaderModification.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.modifyResponseHeaders.push(HeaderModification.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rbac = RBAC.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.securityProfileId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RouteOptions {
    return {
      $type: RouteOptions.$type,
      modifyRequestHeaders: globalThis.Array.isArray(object?.modifyRequestHeaders)
        ? object.modifyRequestHeaders.map((e: any) => HeaderModification.fromJSON(e))
        : [],
      modifyResponseHeaders: globalThis.Array.isArray(object?.modifyResponseHeaders)
        ? object.modifyResponseHeaders.map((e: any) => HeaderModification.fromJSON(e))
        : [],
      rbac: isSet(object.rbac) ? RBAC.fromJSON(object.rbac) : undefined,
      securityProfileId: isSet(object.securityProfileId) ? globalThis.String(object.securityProfileId) : "",
    };
  },

  toJSON(message: RouteOptions): unknown {
    const obj: any = {};
    if (message.modifyRequestHeaders?.length) {
      obj.modifyRequestHeaders = message.modifyRequestHeaders.map((e) => HeaderModification.toJSON(e));
    }
    if (message.modifyResponseHeaders?.length) {
      obj.modifyResponseHeaders = message.modifyResponseHeaders.map((e) => HeaderModification.toJSON(e));
    }
    if (message.rbac !== undefined) {
      obj.rbac = RBAC.toJSON(message.rbac);
    }
    if (message.securityProfileId !== "") {
      obj.securityProfileId = message.securityProfileId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RouteOptions>, I>>(base?: I): RouteOptions {
    return RouteOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RouteOptions>, I>>(object: I): RouteOptions {
    const message = createBaseRouteOptions();
    message.modifyRequestHeaders = object.modifyRequestHeaders?.map((e) => HeaderModification.fromPartial(e)) || [];
    message.modifyResponseHeaders = object.modifyResponseHeaders?.map((e) => HeaderModification.fromPartial(e)) || [];
    message.rbac = (object.rbac !== undefined && object.rbac !== null) ? RBAC.fromPartial(object.rbac) : undefined;
    message.securityProfileId = object.securityProfileId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RouteOptions.$type, RouteOptions);

function createBaseRBAC(): RBAC {
  return { $type: "yandex.cloud.apploadbalancer.v1.RBAC", action: 0, principals: [] };
}

export const RBAC = {
  $type: "yandex.cloud.apploadbalancer.v1.RBAC" as const,

  encode(message: RBAC, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== 0) {
      writer.uint32(8).int32(message.action);
    }
    for (const v of message.principals) {
      Principals.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RBAC {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRBAC();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.action = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.principals.push(Principals.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RBAC {
    return {
      $type: RBAC.$type,
      action: isSet(object.action) ? rBAC_ActionFromJSON(object.action) : 0,
      principals: globalThis.Array.isArray(object?.principals)
        ? object.principals.map((e: any) => Principals.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RBAC): unknown {
    const obj: any = {};
    if (message.action !== 0) {
      obj.action = rBAC_ActionToJSON(message.action);
    }
    if (message.principals?.length) {
      obj.principals = message.principals.map((e) => Principals.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RBAC>, I>>(base?: I): RBAC {
    return RBAC.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RBAC>, I>>(object: I): RBAC {
    const message = createBaseRBAC();
    message.action = object.action ?? 0;
    message.principals = object.principals?.map((e) => Principals.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(RBAC.$type, RBAC);

function createBasePrincipals(): Principals {
  return { $type: "yandex.cloud.apploadbalancer.v1.Principals", andPrincipals: [] };
}

export const Principals = {
  $type: "yandex.cloud.apploadbalancer.v1.Principals" as const,

  encode(message: Principals, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.andPrincipals) {
      Principal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Principals {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrincipals();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.andPrincipals.push(Principal.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Principals {
    return {
      $type: Principals.$type,
      andPrincipals: globalThis.Array.isArray(object?.andPrincipals)
        ? object.andPrincipals.map((e: any) => Principal.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Principals): unknown {
    const obj: any = {};
    if (message.andPrincipals?.length) {
      obj.andPrincipals = message.andPrincipals.map((e) => Principal.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Principals>, I>>(base?: I): Principals {
    return Principals.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Principals>, I>>(object: I): Principals {
    const message = createBasePrincipals();
    message.andPrincipals = object.andPrincipals?.map((e) => Principal.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Principals.$type, Principals);

function createBasePrincipal(): Principal {
  return { $type: "yandex.cloud.apploadbalancer.v1.Principal", header: undefined, remoteIp: undefined, any: undefined };
}

export const Principal = {
  $type: "yandex.cloud.apploadbalancer.v1.Principal" as const,

  encode(message: Principal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Principal_HeaderMatcher.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.remoteIp !== undefined) {
      writer.uint32(18).string(message.remoteIp);
    }
    if (message.any !== undefined) {
      writer.uint32(24).bool(message.any);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Principal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrincipal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.header = Principal_HeaderMatcher.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.remoteIp = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.any = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Principal {
    return {
      $type: Principal.$type,
      header: isSet(object.header) ? Principal_HeaderMatcher.fromJSON(object.header) : undefined,
      remoteIp: isSet(object.remoteIp) ? globalThis.String(object.remoteIp) : undefined,
      any: isSet(object.any) ? globalThis.Boolean(object.any) : undefined,
    };
  },

  toJSON(message: Principal): unknown {
    const obj: any = {};
    if (message.header !== undefined) {
      obj.header = Principal_HeaderMatcher.toJSON(message.header);
    }
    if (message.remoteIp !== undefined) {
      obj.remoteIp = message.remoteIp;
    }
    if (message.any !== undefined) {
      obj.any = message.any;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Principal>, I>>(base?: I): Principal {
    return Principal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Principal>, I>>(object: I): Principal {
    const message = createBasePrincipal();
    message.header = (object.header !== undefined && object.header !== null)
      ? Principal_HeaderMatcher.fromPartial(object.header)
      : undefined;
    message.remoteIp = object.remoteIp ?? undefined;
    message.any = object.any ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Principal.$type, Principal);

function createBasePrincipal_HeaderMatcher(): Principal_HeaderMatcher {
  return { $type: "yandex.cloud.apploadbalancer.v1.Principal.HeaderMatcher", name: "", value: undefined };
}

export const Principal_HeaderMatcher = {
  $type: "yandex.cloud.apploadbalancer.v1.Principal.HeaderMatcher" as const,

  encode(message: Principal_HeaderMatcher, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== undefined) {
      StringMatch.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Principal_HeaderMatcher {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrincipal_HeaderMatcher();
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

          message.value = StringMatch.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Principal_HeaderMatcher {
    return {
      $type: Principal_HeaderMatcher.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      value: isSet(object.value) ? StringMatch.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Principal_HeaderMatcher): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.value !== undefined) {
      obj.value = StringMatch.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Principal_HeaderMatcher>, I>>(base?: I): Principal_HeaderMatcher {
    return Principal_HeaderMatcher.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Principal_HeaderMatcher>, I>>(object: I): Principal_HeaderMatcher {
    const message = createBasePrincipal_HeaderMatcher();
    message.name = object.name ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? StringMatch.fromPartial(object.value)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Principal_HeaderMatcher.$type, Principal_HeaderMatcher);

function createBaseHeaderModification(): HeaderModification {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.HeaderModification",
    name: "",
    append: undefined,
    replace: undefined,
    remove: undefined,
    rename: undefined,
  };
}

export const HeaderModification = {
  $type: "yandex.cloud.apploadbalancer.v1.HeaderModification" as const,

  encode(message: HeaderModification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.append !== undefined) {
      writer.uint32(18).string(message.append);
    }
    if (message.replace !== undefined) {
      writer.uint32(26).string(message.replace);
    }
    if (message.remove !== undefined) {
      writer.uint32(32).bool(message.remove);
    }
    if (message.rename !== undefined) {
      writer.uint32(42).string(message.rename);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HeaderModification {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeaderModification();
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

          message.append = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.replace = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.remove = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.rename = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HeaderModification {
    return {
      $type: HeaderModification.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      append: isSet(object.append) ? globalThis.String(object.append) : undefined,
      replace: isSet(object.replace) ? globalThis.String(object.replace) : undefined,
      remove: isSet(object.remove) ? globalThis.Boolean(object.remove) : undefined,
      rename: isSet(object.rename) ? globalThis.String(object.rename) : undefined,
    };
  },

  toJSON(message: HeaderModification): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.append !== undefined) {
      obj.append = message.append;
    }
    if (message.replace !== undefined) {
      obj.replace = message.replace;
    }
    if (message.remove !== undefined) {
      obj.remove = message.remove;
    }
    if (message.rename !== undefined) {
      obj.rename = message.rename;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HeaderModification>, I>>(base?: I): HeaderModification {
    return HeaderModification.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HeaderModification>, I>>(object: I): HeaderModification {
    const message = createBaseHeaderModification();
    message.name = object.name ?? "";
    message.append = object.append ?? undefined;
    message.replace = object.replace ?? undefined;
    message.remove = object.remove ?? undefined;
    message.rename = object.rename ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(HeaderModification.$type, HeaderModification);

function createBaseRoute(): Route {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.Route",
    name: "",
    http: undefined,
    grpc: undefined,
    routeOptions: undefined,
  };
}

export const Route = {
  $type: "yandex.cloud.apploadbalancer.v1.Route" as const,

  encode(message: Route, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.http !== undefined) {
      HttpRoute.encode(message.http, writer.uint32(18).fork()).ldelim();
    }
    if (message.grpc !== undefined) {
      GrpcRoute.encode(message.grpc, writer.uint32(26).fork()).ldelim();
    }
    if (message.routeOptions !== undefined) {
      RouteOptions.encode(message.routeOptions, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Route {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoute();
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

          message.http = HttpRoute.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.grpc = GrpcRoute.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.routeOptions = RouteOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Route {
    return {
      $type: Route.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      http: isSet(object.http) ? HttpRoute.fromJSON(object.http) : undefined,
      grpc: isSet(object.grpc) ? GrpcRoute.fromJSON(object.grpc) : undefined,
      routeOptions: isSet(object.routeOptions) ? RouteOptions.fromJSON(object.routeOptions) : undefined,
    };
  },

  toJSON(message: Route): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.http !== undefined) {
      obj.http = HttpRoute.toJSON(message.http);
    }
    if (message.grpc !== undefined) {
      obj.grpc = GrpcRoute.toJSON(message.grpc);
    }
    if (message.routeOptions !== undefined) {
      obj.routeOptions = RouteOptions.toJSON(message.routeOptions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Route>, I>>(base?: I): Route {
    return Route.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Route>, I>>(object: I): Route {
    const message = createBaseRoute();
    message.name = object.name ?? "";
    message.http = (object.http !== undefined && object.http !== null) ? HttpRoute.fromPartial(object.http) : undefined;
    message.grpc = (object.grpc !== undefined && object.grpc !== null) ? GrpcRoute.fromPartial(object.grpc) : undefined;
    message.routeOptions = (object.routeOptions !== undefined && object.routeOptions !== null)
      ? RouteOptions.fromPartial(object.routeOptions)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Route.$type, Route);

function createBaseHttpRoute(): HttpRoute {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.HttpRoute",
    match: undefined,
    route: undefined,
    redirect: undefined,
    directResponse: undefined,
  };
}

export const HttpRoute = {
  $type: "yandex.cloud.apploadbalancer.v1.HttpRoute" as const,

  encode(message: HttpRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.match !== undefined) {
      HttpRouteMatch.encode(message.match, writer.uint32(10).fork()).ldelim();
    }
    if (message.route !== undefined) {
      HttpRouteAction.encode(message.route, writer.uint32(18).fork()).ldelim();
    }
    if (message.redirect !== undefined) {
      RedirectAction.encode(message.redirect, writer.uint32(26).fork()).ldelim();
    }
    if (message.directResponse !== undefined) {
      DirectResponseAction.encode(message.directResponse, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpRoute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.match = HttpRouteMatch.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.route = HttpRouteAction.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.redirect = RedirectAction.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.directResponse = DirectResponseAction.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HttpRoute {
    return {
      $type: HttpRoute.$type,
      match: isSet(object.match) ? HttpRouteMatch.fromJSON(object.match) : undefined,
      route: isSet(object.route) ? HttpRouteAction.fromJSON(object.route) : undefined,
      redirect: isSet(object.redirect) ? RedirectAction.fromJSON(object.redirect) : undefined,
      directResponse: isSet(object.directResponse) ? DirectResponseAction.fromJSON(object.directResponse) : undefined,
    };
  },

  toJSON(message: HttpRoute): unknown {
    const obj: any = {};
    if (message.match !== undefined) {
      obj.match = HttpRouteMatch.toJSON(message.match);
    }
    if (message.route !== undefined) {
      obj.route = HttpRouteAction.toJSON(message.route);
    }
    if (message.redirect !== undefined) {
      obj.redirect = RedirectAction.toJSON(message.redirect);
    }
    if (message.directResponse !== undefined) {
      obj.directResponse = DirectResponseAction.toJSON(message.directResponse);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HttpRoute>, I>>(base?: I): HttpRoute {
    return HttpRoute.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HttpRoute>, I>>(object: I): HttpRoute {
    const message = createBaseHttpRoute();
    message.match = (object.match !== undefined && object.match !== null)
      ? HttpRouteMatch.fromPartial(object.match)
      : undefined;
    message.route = (object.route !== undefined && object.route !== null)
      ? HttpRouteAction.fromPartial(object.route)
      : undefined;
    message.redirect = (object.redirect !== undefined && object.redirect !== null)
      ? RedirectAction.fromPartial(object.redirect)
      : undefined;
    message.directResponse = (object.directResponse !== undefined && object.directResponse !== null)
      ? DirectResponseAction.fromPartial(object.directResponse)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(HttpRoute.$type, HttpRoute);

function createBaseGrpcRoute(): GrpcRoute {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcRoute",
    match: undefined,
    route: undefined,
    statusResponse: undefined,
  };
}

export const GrpcRoute = {
  $type: "yandex.cloud.apploadbalancer.v1.GrpcRoute" as const,

  encode(message: GrpcRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.match !== undefined) {
      GrpcRouteMatch.encode(message.match, writer.uint32(10).fork()).ldelim();
    }
    if (message.route !== undefined) {
      GrpcRouteAction.encode(message.route, writer.uint32(18).fork()).ldelim();
    }
    if (message.statusResponse !== undefined) {
      GrpcStatusResponseAction.encode(message.statusResponse, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GrpcRoute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrpcRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.match = GrpcRouteMatch.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.route = GrpcRouteAction.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.statusResponse = GrpcStatusResponseAction.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GrpcRoute {
    return {
      $type: GrpcRoute.$type,
      match: isSet(object.match) ? GrpcRouteMatch.fromJSON(object.match) : undefined,
      route: isSet(object.route) ? GrpcRouteAction.fromJSON(object.route) : undefined,
      statusResponse: isSet(object.statusResponse)
        ? GrpcStatusResponseAction.fromJSON(object.statusResponse)
        : undefined,
    };
  },

  toJSON(message: GrpcRoute): unknown {
    const obj: any = {};
    if (message.match !== undefined) {
      obj.match = GrpcRouteMatch.toJSON(message.match);
    }
    if (message.route !== undefined) {
      obj.route = GrpcRouteAction.toJSON(message.route);
    }
    if (message.statusResponse !== undefined) {
      obj.statusResponse = GrpcStatusResponseAction.toJSON(message.statusResponse);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GrpcRoute>, I>>(base?: I): GrpcRoute {
    return GrpcRoute.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GrpcRoute>, I>>(object: I): GrpcRoute {
    const message = createBaseGrpcRoute();
    message.match = (object.match !== undefined && object.match !== null)
      ? GrpcRouteMatch.fromPartial(object.match)
      : undefined;
    message.route = (object.route !== undefined && object.route !== null)
      ? GrpcRouteAction.fromPartial(object.route)
      : undefined;
    message.statusResponse = (object.statusResponse !== undefined && object.statusResponse !== null)
      ? GrpcStatusResponseAction.fromPartial(object.statusResponse)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(GrpcRoute.$type, GrpcRoute);

function createBaseHttpRouteMatch(): HttpRouteMatch {
  return { $type: "yandex.cloud.apploadbalancer.v1.HttpRouteMatch", httpMethod: [], path: undefined };
}

export const HttpRouteMatch = {
  $type: "yandex.cloud.apploadbalancer.v1.HttpRouteMatch" as const,

  encode(message: HttpRouteMatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.httpMethod) {
      writer.uint32(10).string(v!);
    }
    if (message.path !== undefined) {
      StringMatch.encode(message.path, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpRouteMatch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpRouteMatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.httpMethod.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.path = StringMatch.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HttpRouteMatch {
    return {
      $type: HttpRouteMatch.$type,
      httpMethod: globalThis.Array.isArray(object?.httpMethod)
        ? object.httpMethod.map((e: any) => globalThis.String(e))
        : [],
      path: isSet(object.path) ? StringMatch.fromJSON(object.path) : undefined,
    };
  },

  toJSON(message: HttpRouteMatch): unknown {
    const obj: any = {};
    if (message.httpMethod?.length) {
      obj.httpMethod = message.httpMethod;
    }
    if (message.path !== undefined) {
      obj.path = StringMatch.toJSON(message.path);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HttpRouteMatch>, I>>(base?: I): HttpRouteMatch {
    return HttpRouteMatch.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HttpRouteMatch>, I>>(object: I): HttpRouteMatch {
    const message = createBaseHttpRouteMatch();
    message.httpMethod = object.httpMethod?.map((e) => e) || [];
    message.path = (object.path !== undefined && object.path !== null)
      ? StringMatch.fromPartial(object.path)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(HttpRouteMatch.$type, HttpRouteMatch);

function createBaseGrpcRouteMatch(): GrpcRouteMatch {
  return { $type: "yandex.cloud.apploadbalancer.v1.GrpcRouteMatch", fqmn: undefined };
}

export const GrpcRouteMatch = {
  $type: "yandex.cloud.apploadbalancer.v1.GrpcRouteMatch" as const,

  encode(message: GrpcRouteMatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fqmn !== undefined) {
      StringMatch.encode(message.fqmn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GrpcRouteMatch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrpcRouteMatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fqmn = StringMatch.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GrpcRouteMatch {
    return { $type: GrpcRouteMatch.$type, fqmn: isSet(object.fqmn) ? StringMatch.fromJSON(object.fqmn) : undefined };
  },

  toJSON(message: GrpcRouteMatch): unknown {
    const obj: any = {};
    if (message.fqmn !== undefined) {
      obj.fqmn = StringMatch.toJSON(message.fqmn);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GrpcRouteMatch>, I>>(base?: I): GrpcRouteMatch {
    return GrpcRouteMatch.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GrpcRouteMatch>, I>>(object: I): GrpcRouteMatch {
    const message = createBaseGrpcRouteMatch();
    message.fqmn = (object.fqmn !== undefined && object.fqmn !== null)
      ? StringMatch.fromPartial(object.fqmn)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(GrpcRouteMatch.$type, GrpcRouteMatch);

function createBaseStringMatch(): StringMatch {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.StringMatch",
    exactMatch: undefined,
    prefixMatch: undefined,
    regexMatch: undefined,
  };
}

export const StringMatch = {
  $type: "yandex.cloud.apploadbalancer.v1.StringMatch" as const,

  encode(message: StringMatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exactMatch !== undefined) {
      writer.uint32(10).string(message.exactMatch);
    }
    if (message.prefixMatch !== undefined) {
      writer.uint32(18).string(message.prefixMatch);
    }
    if (message.regexMatch !== undefined) {
      writer.uint32(26).string(message.regexMatch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringMatch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringMatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.exactMatch = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.prefixMatch = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.regexMatch = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StringMatch {
    return {
      $type: StringMatch.$type,
      exactMatch: isSet(object.exactMatch) ? globalThis.String(object.exactMatch) : undefined,
      prefixMatch: isSet(object.prefixMatch) ? globalThis.String(object.prefixMatch) : undefined,
      regexMatch: isSet(object.regexMatch) ? globalThis.String(object.regexMatch) : undefined,
    };
  },

  toJSON(message: StringMatch): unknown {
    const obj: any = {};
    if (message.exactMatch !== undefined) {
      obj.exactMatch = message.exactMatch;
    }
    if (message.prefixMatch !== undefined) {
      obj.prefixMatch = message.prefixMatch;
    }
    if (message.regexMatch !== undefined) {
      obj.regexMatch = message.regexMatch;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StringMatch>, I>>(base?: I): StringMatch {
    return StringMatch.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StringMatch>, I>>(object: I): StringMatch {
    const message = createBaseStringMatch();
    message.exactMatch = object.exactMatch ?? undefined;
    message.prefixMatch = object.prefixMatch ?? undefined;
    message.regexMatch = object.regexMatch ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(StringMatch.$type, StringMatch);

function createBaseRedirectAction(): RedirectAction {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.RedirectAction",
    replaceScheme: "",
    replaceHost: "",
    replacePort: 0,
    replacePath: undefined,
    replacePrefix: undefined,
    removeQuery: false,
    responseCode: 0,
  };
}

export const RedirectAction = {
  $type: "yandex.cloud.apploadbalancer.v1.RedirectAction" as const,

  encode(message: RedirectAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.replaceScheme !== "") {
      writer.uint32(10).string(message.replaceScheme);
    }
    if (message.replaceHost !== "") {
      writer.uint32(18).string(message.replaceHost);
    }
    if (message.replacePort !== 0) {
      writer.uint32(24).int64(message.replacePort);
    }
    if (message.replacePath !== undefined) {
      writer.uint32(34).string(message.replacePath);
    }
    if (message.replacePrefix !== undefined) {
      writer.uint32(42).string(message.replacePrefix);
    }
    if (message.removeQuery === true) {
      writer.uint32(48).bool(message.removeQuery);
    }
    if (message.responseCode !== 0) {
      writer.uint32(56).int32(message.responseCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedirectAction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedirectAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.replaceScheme = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.replaceHost = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.replacePort = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.replacePath = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.replacePrefix = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.removeQuery = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.responseCode = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RedirectAction {
    return {
      $type: RedirectAction.$type,
      replaceScheme: isSet(object.replaceScheme) ? globalThis.String(object.replaceScheme) : "",
      replaceHost: isSet(object.replaceHost) ? globalThis.String(object.replaceHost) : "",
      replacePort: isSet(object.replacePort) ? globalThis.Number(object.replacePort) : 0,
      replacePath: isSet(object.replacePath) ? globalThis.String(object.replacePath) : undefined,
      replacePrefix: isSet(object.replacePrefix) ? globalThis.String(object.replacePrefix) : undefined,
      removeQuery: isSet(object.removeQuery) ? globalThis.Boolean(object.removeQuery) : false,
      responseCode: isSet(object.responseCode) ? redirectAction_RedirectResponseCodeFromJSON(object.responseCode) : 0,
    };
  },

  toJSON(message: RedirectAction): unknown {
    const obj: any = {};
    if (message.replaceScheme !== "") {
      obj.replaceScheme = message.replaceScheme;
    }
    if (message.replaceHost !== "") {
      obj.replaceHost = message.replaceHost;
    }
    if (message.replacePort !== 0) {
      obj.replacePort = Math.round(message.replacePort);
    }
    if (message.replacePath !== undefined) {
      obj.replacePath = message.replacePath;
    }
    if (message.replacePrefix !== undefined) {
      obj.replacePrefix = message.replacePrefix;
    }
    if (message.removeQuery === true) {
      obj.removeQuery = message.removeQuery;
    }
    if (message.responseCode !== 0) {
      obj.responseCode = redirectAction_RedirectResponseCodeToJSON(message.responseCode);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RedirectAction>, I>>(base?: I): RedirectAction {
    return RedirectAction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RedirectAction>, I>>(object: I): RedirectAction {
    const message = createBaseRedirectAction();
    message.replaceScheme = object.replaceScheme ?? "";
    message.replaceHost = object.replaceHost ?? "";
    message.replacePort = object.replacePort ?? 0;
    message.replacePath = object.replacePath ?? undefined;
    message.replacePrefix = object.replacePrefix ?? undefined;
    message.removeQuery = object.removeQuery ?? false;
    message.responseCode = object.responseCode ?? 0;
    return message;
  },
};

messageTypeRegistry.set(RedirectAction.$type, RedirectAction);

function createBaseDirectResponseAction(): DirectResponseAction {
  return { $type: "yandex.cloud.apploadbalancer.v1.DirectResponseAction", status: 0, body: undefined };
}

export const DirectResponseAction = {
  $type: "yandex.cloud.apploadbalancer.v1.DirectResponseAction" as const,

  encode(message: DirectResponseAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int64(message.status);
    }
    if (message.body !== undefined) {
      Payload.encode(message.body, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DirectResponseAction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDirectResponseAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.body = Payload.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DirectResponseAction {
    return {
      $type: DirectResponseAction.$type,
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      body: isSet(object.body) ? Payload.fromJSON(object.body) : undefined,
    };
  },

  toJSON(message: DirectResponseAction): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.body !== undefined) {
      obj.body = Payload.toJSON(message.body);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DirectResponseAction>, I>>(base?: I): DirectResponseAction {
    return DirectResponseAction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DirectResponseAction>, I>>(object: I): DirectResponseAction {
    const message = createBaseDirectResponseAction();
    message.status = object.status ?? 0;
    message.body = (object.body !== undefined && object.body !== null) ? Payload.fromPartial(object.body) : undefined;
    return message;
  },
};

messageTypeRegistry.set(DirectResponseAction.$type, DirectResponseAction);

function createBaseGrpcStatusResponseAction(): GrpcStatusResponseAction {
  return { $type: "yandex.cloud.apploadbalancer.v1.GrpcStatusResponseAction", status: 0 };
}

export const GrpcStatusResponseAction = {
  $type: "yandex.cloud.apploadbalancer.v1.GrpcStatusResponseAction" as const,

  encode(message: GrpcStatusResponseAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GrpcStatusResponseAction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrpcStatusResponseAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GrpcStatusResponseAction {
    return {
      $type: GrpcStatusResponseAction.$type,
      status: isSet(object.status) ? grpcStatusResponseAction_StatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: GrpcStatusResponseAction): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = grpcStatusResponseAction_StatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GrpcStatusResponseAction>, I>>(base?: I): GrpcStatusResponseAction {
    return GrpcStatusResponseAction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GrpcStatusResponseAction>, I>>(object: I): GrpcStatusResponseAction {
    const message = createBaseGrpcStatusResponseAction();
    message.status = object.status ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GrpcStatusResponseAction.$type, GrpcStatusResponseAction);

function createBaseHttpRouteAction(): HttpRouteAction {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.HttpRouteAction",
    backendGroupId: "",
    timeout: undefined,
    idleTimeout: undefined,
    hostRewrite: undefined,
    autoHostRewrite: undefined,
    prefixRewrite: "",
    upgradeTypes: [],
  };
}

export const HttpRouteAction = {
  $type: "yandex.cloud.apploadbalancer.v1.HttpRouteAction" as const,

  encode(message: HttpRouteAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(18).fork()).ldelim();
    }
    if (message.idleTimeout !== undefined) {
      Duration.encode(message.idleTimeout, writer.uint32(26).fork()).ldelim();
    }
    if (message.hostRewrite !== undefined) {
      writer.uint32(34).string(message.hostRewrite);
    }
    if (message.autoHostRewrite !== undefined) {
      writer.uint32(40).bool(message.autoHostRewrite);
    }
    if (message.prefixRewrite !== "") {
      writer.uint32(50).string(message.prefixRewrite);
    }
    for (const v of message.upgradeTypes) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpRouteAction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpRouteAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backendGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.timeout = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.idleTimeout = Duration.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.hostRewrite = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.autoHostRewrite = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.prefixRewrite = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.upgradeTypes.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HttpRouteAction {
    return {
      $type: HttpRouteAction.$type,
      backendGroupId: isSet(object.backendGroupId) ? globalThis.String(object.backendGroupId) : "",
      timeout: isSet(object.timeout) ? Duration.fromJSON(object.timeout) : undefined,
      idleTimeout: isSet(object.idleTimeout) ? Duration.fromJSON(object.idleTimeout) : undefined,
      hostRewrite: isSet(object.hostRewrite) ? globalThis.String(object.hostRewrite) : undefined,
      autoHostRewrite: isSet(object.autoHostRewrite) ? globalThis.Boolean(object.autoHostRewrite) : undefined,
      prefixRewrite: isSet(object.prefixRewrite) ? globalThis.String(object.prefixRewrite) : "",
      upgradeTypes: globalThis.Array.isArray(object?.upgradeTypes)
        ? object.upgradeTypes.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: HttpRouteAction): unknown {
    const obj: any = {};
    if (message.backendGroupId !== "") {
      obj.backendGroupId = message.backendGroupId;
    }
    if (message.timeout !== undefined) {
      obj.timeout = Duration.toJSON(message.timeout);
    }
    if (message.idleTimeout !== undefined) {
      obj.idleTimeout = Duration.toJSON(message.idleTimeout);
    }
    if (message.hostRewrite !== undefined) {
      obj.hostRewrite = message.hostRewrite;
    }
    if (message.autoHostRewrite !== undefined) {
      obj.autoHostRewrite = message.autoHostRewrite;
    }
    if (message.prefixRewrite !== "") {
      obj.prefixRewrite = message.prefixRewrite;
    }
    if (message.upgradeTypes?.length) {
      obj.upgradeTypes = message.upgradeTypes;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HttpRouteAction>, I>>(base?: I): HttpRouteAction {
    return HttpRouteAction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HttpRouteAction>, I>>(object: I): HttpRouteAction {
    const message = createBaseHttpRouteAction();
    message.backendGroupId = object.backendGroupId ?? "";
    message.timeout = (object.timeout !== undefined && object.timeout !== null)
      ? Duration.fromPartial(object.timeout)
      : undefined;
    message.idleTimeout = (object.idleTimeout !== undefined && object.idleTimeout !== null)
      ? Duration.fromPartial(object.idleTimeout)
      : undefined;
    message.hostRewrite = object.hostRewrite ?? undefined;
    message.autoHostRewrite = object.autoHostRewrite ?? undefined;
    message.prefixRewrite = object.prefixRewrite ?? "";
    message.upgradeTypes = object.upgradeTypes?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(HttpRouteAction.$type, HttpRouteAction);

function createBaseGrpcRouteAction(): GrpcRouteAction {
  return {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcRouteAction",
    backendGroupId: "",
    maxTimeout: undefined,
    idleTimeout: undefined,
    hostRewrite: undefined,
    autoHostRewrite: undefined,
  };
}

export const GrpcRouteAction = {
  $type: "yandex.cloud.apploadbalancer.v1.GrpcRouteAction" as const,

  encode(message: GrpcRouteAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    if (message.maxTimeout !== undefined) {
      Duration.encode(message.maxTimeout, writer.uint32(18).fork()).ldelim();
    }
    if (message.idleTimeout !== undefined) {
      Duration.encode(message.idleTimeout, writer.uint32(26).fork()).ldelim();
    }
    if (message.hostRewrite !== undefined) {
      writer.uint32(34).string(message.hostRewrite);
    }
    if (message.autoHostRewrite !== undefined) {
      writer.uint32(40).bool(message.autoHostRewrite);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GrpcRouteAction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrpcRouteAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.backendGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.maxTimeout = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.idleTimeout = Duration.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.hostRewrite = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.autoHostRewrite = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GrpcRouteAction {
    return {
      $type: GrpcRouteAction.$type,
      backendGroupId: isSet(object.backendGroupId) ? globalThis.String(object.backendGroupId) : "",
      maxTimeout: isSet(object.maxTimeout) ? Duration.fromJSON(object.maxTimeout) : undefined,
      idleTimeout: isSet(object.idleTimeout) ? Duration.fromJSON(object.idleTimeout) : undefined,
      hostRewrite: isSet(object.hostRewrite) ? globalThis.String(object.hostRewrite) : undefined,
      autoHostRewrite: isSet(object.autoHostRewrite) ? globalThis.Boolean(object.autoHostRewrite) : undefined,
    };
  },

  toJSON(message: GrpcRouteAction): unknown {
    const obj: any = {};
    if (message.backendGroupId !== "") {
      obj.backendGroupId = message.backendGroupId;
    }
    if (message.maxTimeout !== undefined) {
      obj.maxTimeout = Duration.toJSON(message.maxTimeout);
    }
    if (message.idleTimeout !== undefined) {
      obj.idleTimeout = Duration.toJSON(message.idleTimeout);
    }
    if (message.hostRewrite !== undefined) {
      obj.hostRewrite = message.hostRewrite;
    }
    if (message.autoHostRewrite !== undefined) {
      obj.autoHostRewrite = message.autoHostRewrite;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GrpcRouteAction>, I>>(base?: I): GrpcRouteAction {
    return GrpcRouteAction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GrpcRouteAction>, I>>(object: I): GrpcRouteAction {
    const message = createBaseGrpcRouteAction();
    message.backendGroupId = object.backendGroupId ?? "";
    message.maxTimeout = (object.maxTimeout !== undefined && object.maxTimeout !== null)
      ? Duration.fromPartial(object.maxTimeout)
      : undefined;
    message.idleTimeout = (object.idleTimeout !== undefined && object.idleTimeout !== null)
      ? Duration.fromPartial(object.idleTimeout)
      : undefined;
    message.hostRewrite = object.hostRewrite ?? undefined;
    message.autoHostRewrite = object.autoHostRewrite ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(GrpcRouteAction.$type, GrpcRouteAction);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
