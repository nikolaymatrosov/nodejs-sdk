/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.mdb.postgresql.v1";

export interface SessionState {
  $type: "yandex.cloud.mdb.postgresql.v1.SessionState";
  /** Time of collecting statistics on sessions (in the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format). */
  time?:
    | Date
    | undefined;
  /** Host of the connected client. */
  host: string;
  /** Server process ID. For client connections, this is a client connection ID. */
  pid: number;
  /** Database ID. */
  database: string;
  /** User ID. */
  user: string;
  /** Application name on the connected client. */
  applicationName: string;
  /** Time when a given process was started. For client connections, this is the time when the client connected to the server. */
  backendStart?:
    | Date
    | undefined;
  /**
   * Time when a transaction of a given process was started. Returns [NULL] if no transaction is active.
   *
   * If the currently active query is the first of its transaction, the value of this parameter is equal to the value of the [query_start] parameter.
   */
  xactStart?:
    | Date
    | undefined;
  /**
   * Time when the currently active query was started.
   *
   * If the [state] parameter does not take the value [active], the parameter returns the time when the lastest query was started.
   */
  queryStart?:
    | Date
    | undefined;
  /** Time when the [state] parameter was last changed. */
  stateChange?:
    | Date
    | undefined;
  /**
   * Type of event for which the backend is waiting. Such an event is called a wait event. A backend refers to the process that maintains the client connection.
   *
   * For the list of wait events, see the [PostgreSQL documentation](https://www.postgresql.org/docs/current/monitoring-stats.html#WAIT-EVENT-TABLE). If the backend is not waiting for any event, the parameter returns [NULL].
   */
  waitEventType: string;
  /**
   * Wait event name.
   *
   * For the list of such names, see the [PostgreSQL documentation](https://www.postgresql.org/docs/current/monitoring-stats.html#WAIT-EVENT-ACTIVITY-TABLE). If the backend is not waiting for any event, the parameter returns [NULL].
   */
  waitEvent: string;
  /** Current backend state. For the list of possible values, see the [PostgreSQL documentation](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW). */
  state: string;
  /**
   * Text of the most recent query.
   *
   * If the [state] parameter takes the value [active], the parameter shows the currently executing query. For the rest of the states, the parameter shows the last query that was executed. By default, the query text is truncated to 1024 bytes.
   */
  query: string;
  /** Current backend type. For the list of possible values, see the [PostgreSQL documentation](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW). */
  backendType: string;
  /**
   * IP address of the connected client.
   *
   * The parameter returns [NULL] in the following cases:
   * - The client is connected via a Unix socket on the server.
   * - A given process is internal (for example, autovacuum).
   */
  clientAddr: string;
  /** Host name of the connected client (relevant for IP connections). */
  clientHostname: string;
  /**
   * TCP port number that the client is using for communication with the server.
   *
   * Returns [-1] if the client is connected via a Unix socket on the server. Returns [NULL] if a given process is internal (for example, autovacuum).
   */
  clientPort: number;
  /** Top-level transaction ID, if any. */
  backendXid: number;
  /** Current [xmin horizon]. */
  backendXmin: number;
  /** Process IDs that are blocking a given server process ID. */
  blockingPids: string;
  /** Query ID. */
  queryId: string;
}

export interface PrimaryKey {
  $type: "yandex.cloud.mdb.postgresql.v1.PrimaryKey";
  /** Host of the connected client. */
  host: string;
  /** User ID. */
  user: string;
  /** Database ID. */
  database: string;
  /** Returns [true] if a query is executed as a top-level SQL statement or if the [pg_stat_statements.track](https://www.postgresql.org/docs/current/pgstatstatements.html#id-1.11.7.41.9) parameter is set to the value [top]. */
  toplevel: boolean;
  /** Query ID. */
  queryId: string;
  /** Query planning ID. */
  planId: string;
}

export interface QueryStats {
  $type: "yandex.cloud.mdb.postgresql.v1.QueryStats";
  /** Time of collecting statistics on planning and execution of queries. */
  time?:
    | Date
    | undefined;
  /** Statement text. */
  query: string;
  /** Normalized query plan. */
  normalizedPlan: string;
  /** Example of a query execution plan (without normalization). */
  examplePlan: string;
  /**
   * Number of times that a query was planned.
   *
   * The parameter returns a non-zero value if the [pg_stat_statements.track_planning](https://www.postgresql.org/docs/current/pgstatstatements.html#id-1.11.7.41.9) parameter is enabled.
   */
  plans: number;
  /**
   * Total time taken to plan a query, in milliseconds.
   *
   * The parameter returns a non-zero value if the [pg_stat_statements.track_planning] parameter is enabled.
   */
  totalPlanTime: number;
  /**
   * Minimum time taken to plan a query, in milliseconds.
   *
   * The parameter returns a non-zero value if the [pg_stat_statements.track_planning] parameter is enabled.
   */
  minPlanTime: number;
  /**
   * Maximum time taken to plan a query, in milliseconds.
   *
   * The parameter returns a non-zero value if the [pg_stat_statements.track_planning] parameter is enabled.
   */
  maxPlanTime: number;
  /**
   * Average time taken to plan a query, in milliseconds.
   *
   * The parameter returns a non-zero value if the [pg_stat_statements.track_planning] parameter is enabled.
   */
  meanPlanTime: number;
  /**
   * Population standard deviation of the time taken to plan a query, in milliseconds.
   *
   * The parameter returns a non-zero value if the [pg_stat_statements.track_planning] parameter is enabled.
   */
  stddevPlanTime: number;
  /** Number of times that a query was executed. */
  calls: number;
  /** Total time taken to execute a query, in milliseconds. */
  totalTime: number;
  /** Minimum time taken to execute a query, in milliseconds. */
  minTime: number;
  /** Maximum time taken to execute a query, in milliseconds. */
  maxTime: number;
  /** Average time taken to execute a query, in milliseconds. */
  meanTime: number;
  /** Population standard deviation of the time taken to execute a query, in milliseconds. */
  stddevTime: number;
  /** Number of retrieved or affected rows. */
  rows: number;
  /** Number of shared blocks that are hit from cache. */
  sharedBlksHit: number;
  /** Number of read shared blocks. */
  sharedBlksRead: number;
  /** Number of 'dirtied' shared blocks. */
  sharedBlksDirtied: number;
  /** Number of written shared blocks. */
  sharedBlksWritten: number;
  /** Number of local blocks that are hit from cache. */
  localBlksHit: number;
  /** Number of read local blocks. */
  localBlksRead: number;
  /** Number of 'dirtied' local blocks. */
  localBlksDirtied: number;
  /** Number of written local blocks. */
  localBlksWritten: number;
  /** Number of read temporary blocks. */
  tempBlksRead: number;
  /** Number of written temporary blocks. */
  tempBlksWritten: number;
  /**
   * Time taken to read data blocks, in milliseconds.
   *
   * The parameter returns a non-zero value if the [track_io_timing](https://www.postgresql.org/docs/current/runtime-config-statistics.html#GUC-TRACK-IO-TIMING) parameter is enabled.
   */
  blkReadTime: number;
  /**
   * Time taken to record data blocks, in milliseconds.
   *
   * The parameter returns a non-zero value if the [track_io_timing] parameter is enabled.
   */
  blkWriteTime: number;
  /**
   * Time taken to read temporary data blocks, in milliseconds.
   *
   * The parameter returns a non-zero value if the [track_io_timing] parameter is enabled.
   */
  tempBlkReadTime: number;
  /**
   * Time taken to record temporary data blocks, in milliseconds.
   *
   * The parameter returns a non-zero value if the [track_io_timing] parameter is enabled.
   */
  tempBlkWriteTime: number;
  /** Number of WAL records generated during a given period. */
  walRecords: number;
  /** Number of WAL full page images generated during a given period. */
  walFpi: number;
  /** Number of WAL logs generated during a given period, in bytes. */
  walBytes: number;
  /** Number of JIT-compiled functions. */
  jitFunctions: number;
  /** Time taken to generate JIT code, in milliseconds. */
  jitGenerationTime: number;
  /** Number of times that functions have been inlined. */
  jitInliningCount: number;
  /** Time taken to inline functions, in milliseconds. */
  jitInliningTime: number;
  /** Number of times that a query was optimized. */
  jitOptimizationCount: number;
  /** Time taken to optimize a query, in milliseconds. */
  jitOptimizationTime: number;
  /** Number of times that code was emitted. */
  jitEmissionCount: number;
  /** Time taken to emit code. */
  jitEmissionTime: number;
  /** Cost of receiving a response to a query before the first row of the response is issued. */
  startupCost: number;
  /** Cost of receiving a response to a query when all the rows of the response are issued. */
  totalCost: number;
  /** Expected number of rows that a given plan node should issue. */
  planRows: number;
  /** Expected average size of rows that a given plan node should issue. */
  planWidth: number;
  /** Number of bytes that the filesystem layer has read. */
  reads: number;
  /** Number of bytes that the filesystem layer has written. */
  writes: number;
  /** User CPU time used. */
  userTime: number;
  /** System CPU time used. */
  systemTime: number;
}

export interface QueryStatement {
  $type: "yandex.cloud.mdb.postgresql.v1.QueryStatement";
  /** Primary keys in tables with the statistics on planning and execution of queries. */
  key?:
    | PrimaryKey
    | undefined;
  /** Statistics on planning and execution of queries. */
  stats?: QueryStats | undefined;
}

function createBaseSessionState(): SessionState {
  return {
    $type: "yandex.cloud.mdb.postgresql.v1.SessionState",
    time: undefined,
    host: "",
    pid: 0,
    database: "",
    user: "",
    applicationName: "",
    backendStart: undefined,
    xactStart: undefined,
    queryStart: undefined,
    stateChange: undefined,
    waitEventType: "",
    waitEvent: "",
    state: "",
    query: "",
    backendType: "",
    clientAddr: "",
    clientHostname: "",
    clientPort: 0,
    backendXid: 0,
    backendXmin: 0,
    blockingPids: "",
    queryId: "",
  };
}

export const SessionState = {
  $type: "yandex.cloud.mdb.postgresql.v1.SessionState" as const,

  encode(message: SessionState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
    }
    if (message.host !== "") {
      writer.uint32(18).string(message.host);
    }
    if (message.pid !== 0) {
      writer.uint32(24).int64(message.pid);
    }
    if (message.database !== "") {
      writer.uint32(34).string(message.database);
    }
    if (message.user !== "") {
      writer.uint32(42).string(message.user);
    }
    if (message.applicationName !== "") {
      writer.uint32(50).string(message.applicationName);
    }
    if (message.backendStart !== undefined) {
      Timestamp.encode(toTimestamp(message.backendStart), writer.uint32(58).fork()).ldelim();
    }
    if (message.xactStart !== undefined) {
      Timestamp.encode(toTimestamp(message.xactStart), writer.uint32(66).fork()).ldelim();
    }
    if (message.queryStart !== undefined) {
      Timestamp.encode(toTimestamp(message.queryStart), writer.uint32(74).fork()).ldelim();
    }
    if (message.stateChange !== undefined) {
      Timestamp.encode(toTimestamp(message.stateChange), writer.uint32(82).fork()).ldelim();
    }
    if (message.waitEventType !== "") {
      writer.uint32(90).string(message.waitEventType);
    }
    if (message.waitEvent !== "") {
      writer.uint32(98).string(message.waitEvent);
    }
    if (message.state !== "") {
      writer.uint32(106).string(message.state);
    }
    if (message.query !== "") {
      writer.uint32(114).string(message.query);
    }
    if (message.backendType !== "") {
      writer.uint32(122).string(message.backendType);
    }
    if (message.clientAddr !== "") {
      writer.uint32(130).string(message.clientAddr);
    }
    if (message.clientHostname !== "") {
      writer.uint32(138).string(message.clientHostname);
    }
    if (message.clientPort !== 0) {
      writer.uint32(144).int64(message.clientPort);
    }
    if (message.backendXid !== 0) {
      writer.uint32(152).int64(message.backendXid);
    }
    if (message.backendXmin !== 0) {
      writer.uint32(160).int64(message.backendXmin);
    }
    if (message.blockingPids !== "") {
      writer.uint32(178).string(message.blockingPids);
    }
    if (message.queryId !== "") {
      writer.uint32(186).string(message.queryId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SessionState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSessionState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.host = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.pid = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.database = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.user = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.applicationName = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.backendStart = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.xactStart = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.queryStart = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.stateChange = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.waitEventType = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.waitEvent = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.state = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.query = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.backendType = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.clientAddr = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.clientHostname = reader.string();
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.clientPort = longToNumber(reader.int64() as Long);
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.backendXid = longToNumber(reader.int64() as Long);
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.backendXmin = longToNumber(reader.int64() as Long);
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.blockingPids = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.queryId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SessionState {
    return {
      $type: SessionState.$type,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      host: isSet(object.host) ? globalThis.String(object.host) : "",
      pid: isSet(object.pid) ? globalThis.Number(object.pid) : 0,
      database: isSet(object.database) ? globalThis.String(object.database) : "",
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      applicationName: isSet(object.applicationName) ? globalThis.String(object.applicationName) : "",
      backendStart: isSet(object.backendStart) ? fromJsonTimestamp(object.backendStart) : undefined,
      xactStart: isSet(object.xactStart) ? fromJsonTimestamp(object.xactStart) : undefined,
      queryStart: isSet(object.queryStart) ? fromJsonTimestamp(object.queryStart) : undefined,
      stateChange: isSet(object.stateChange) ? fromJsonTimestamp(object.stateChange) : undefined,
      waitEventType: isSet(object.waitEventType) ? globalThis.String(object.waitEventType) : "",
      waitEvent: isSet(object.waitEvent) ? globalThis.String(object.waitEvent) : "",
      state: isSet(object.state) ? globalThis.String(object.state) : "",
      query: isSet(object.query) ? globalThis.String(object.query) : "",
      backendType: isSet(object.backendType) ? globalThis.String(object.backendType) : "",
      clientAddr: isSet(object.clientAddr) ? globalThis.String(object.clientAddr) : "",
      clientHostname: isSet(object.clientHostname) ? globalThis.String(object.clientHostname) : "",
      clientPort: isSet(object.clientPort) ? globalThis.Number(object.clientPort) : 0,
      backendXid: isSet(object.backendXid) ? globalThis.Number(object.backendXid) : 0,
      backendXmin: isSet(object.backendXmin) ? globalThis.Number(object.backendXmin) : 0,
      blockingPids: isSet(object.blockingPids) ? globalThis.String(object.blockingPids) : "",
      queryId: isSet(object.queryId) ? globalThis.String(object.queryId) : "",
    };
  },

  toJSON(message: SessionState): unknown {
    const obj: any = {};
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
    if (message.host !== "") {
      obj.host = message.host;
    }
    if (message.pid !== 0) {
      obj.pid = Math.round(message.pid);
    }
    if (message.database !== "") {
      obj.database = message.database;
    }
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.applicationName !== "") {
      obj.applicationName = message.applicationName;
    }
    if (message.backendStart !== undefined) {
      obj.backendStart = message.backendStart.toISOString();
    }
    if (message.xactStart !== undefined) {
      obj.xactStart = message.xactStart.toISOString();
    }
    if (message.queryStart !== undefined) {
      obj.queryStart = message.queryStart.toISOString();
    }
    if (message.stateChange !== undefined) {
      obj.stateChange = message.stateChange.toISOString();
    }
    if (message.waitEventType !== "") {
      obj.waitEventType = message.waitEventType;
    }
    if (message.waitEvent !== "") {
      obj.waitEvent = message.waitEvent;
    }
    if (message.state !== "") {
      obj.state = message.state;
    }
    if (message.query !== "") {
      obj.query = message.query;
    }
    if (message.backendType !== "") {
      obj.backendType = message.backendType;
    }
    if (message.clientAddr !== "") {
      obj.clientAddr = message.clientAddr;
    }
    if (message.clientHostname !== "") {
      obj.clientHostname = message.clientHostname;
    }
    if (message.clientPort !== 0) {
      obj.clientPort = Math.round(message.clientPort);
    }
    if (message.backendXid !== 0) {
      obj.backendXid = Math.round(message.backendXid);
    }
    if (message.backendXmin !== 0) {
      obj.backendXmin = Math.round(message.backendXmin);
    }
    if (message.blockingPids !== "") {
      obj.blockingPids = message.blockingPids;
    }
    if (message.queryId !== "") {
      obj.queryId = message.queryId;
    }
    return obj;
  },

  create(base?: DeepPartial<SessionState>): SessionState {
    return SessionState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SessionState>): SessionState {
    const message = createBaseSessionState();
    message.time = object.time ?? undefined;
    message.host = object.host ?? "";
    message.pid = object.pid ?? 0;
    message.database = object.database ?? "";
    message.user = object.user ?? "";
    message.applicationName = object.applicationName ?? "";
    message.backendStart = object.backendStart ?? undefined;
    message.xactStart = object.xactStart ?? undefined;
    message.queryStart = object.queryStart ?? undefined;
    message.stateChange = object.stateChange ?? undefined;
    message.waitEventType = object.waitEventType ?? "";
    message.waitEvent = object.waitEvent ?? "";
    message.state = object.state ?? "";
    message.query = object.query ?? "";
    message.backendType = object.backendType ?? "";
    message.clientAddr = object.clientAddr ?? "";
    message.clientHostname = object.clientHostname ?? "";
    message.clientPort = object.clientPort ?? 0;
    message.backendXid = object.backendXid ?? 0;
    message.backendXmin = object.backendXmin ?? 0;
    message.blockingPids = object.blockingPids ?? "";
    message.queryId = object.queryId ?? "";
    return message;
  },
};

messageTypeRegistry.set(SessionState.$type, SessionState);

function createBasePrimaryKey(): PrimaryKey {
  return {
    $type: "yandex.cloud.mdb.postgresql.v1.PrimaryKey",
    host: "",
    user: "",
    database: "",
    toplevel: false,
    queryId: "",
    planId: "",
  };
}

export const PrimaryKey = {
  $type: "yandex.cloud.mdb.postgresql.v1.PrimaryKey" as const,

  encode(message: PrimaryKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.host !== "") {
      writer.uint32(10).string(message.host);
    }
    if (message.user !== "") {
      writer.uint32(18).string(message.user);
    }
    if (message.database !== "") {
      writer.uint32(34).string(message.database);
    }
    if (message.toplevel === true) {
      writer.uint32(40).bool(message.toplevel);
    }
    if (message.queryId !== "") {
      writer.uint32(50).string(message.queryId);
    }
    if (message.planId !== "") {
      writer.uint32(58).string(message.planId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrimaryKey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrimaryKey();
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

          message.user = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.database = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.toplevel = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.queryId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.planId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PrimaryKey {
    return {
      $type: PrimaryKey.$type,
      host: isSet(object.host) ? globalThis.String(object.host) : "",
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      database: isSet(object.database) ? globalThis.String(object.database) : "",
      toplevel: isSet(object.toplevel) ? globalThis.Boolean(object.toplevel) : false,
      queryId: isSet(object.queryId) ? globalThis.String(object.queryId) : "",
      planId: isSet(object.planId) ? globalThis.String(object.planId) : "",
    };
  },

  toJSON(message: PrimaryKey): unknown {
    const obj: any = {};
    if (message.host !== "") {
      obj.host = message.host;
    }
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.database !== "") {
      obj.database = message.database;
    }
    if (message.toplevel === true) {
      obj.toplevel = message.toplevel;
    }
    if (message.queryId !== "") {
      obj.queryId = message.queryId;
    }
    if (message.planId !== "") {
      obj.planId = message.planId;
    }
    return obj;
  },

  create(base?: DeepPartial<PrimaryKey>): PrimaryKey {
    return PrimaryKey.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PrimaryKey>): PrimaryKey {
    const message = createBasePrimaryKey();
    message.host = object.host ?? "";
    message.user = object.user ?? "";
    message.database = object.database ?? "";
    message.toplevel = object.toplevel ?? false;
    message.queryId = object.queryId ?? "";
    message.planId = object.planId ?? "";
    return message;
  },
};

messageTypeRegistry.set(PrimaryKey.$type, PrimaryKey);

function createBaseQueryStats(): QueryStats {
  return {
    $type: "yandex.cloud.mdb.postgresql.v1.QueryStats",
    time: undefined,
    query: "",
    normalizedPlan: "",
    examplePlan: "",
    plans: 0,
    totalPlanTime: 0,
    minPlanTime: 0,
    maxPlanTime: 0,
    meanPlanTime: 0,
    stddevPlanTime: 0,
    calls: 0,
    totalTime: 0,
    minTime: 0,
    maxTime: 0,
    meanTime: 0,
    stddevTime: 0,
    rows: 0,
    sharedBlksHit: 0,
    sharedBlksRead: 0,
    sharedBlksDirtied: 0,
    sharedBlksWritten: 0,
    localBlksHit: 0,
    localBlksRead: 0,
    localBlksDirtied: 0,
    localBlksWritten: 0,
    tempBlksRead: 0,
    tempBlksWritten: 0,
    blkReadTime: 0,
    blkWriteTime: 0,
    tempBlkReadTime: 0,
    tempBlkWriteTime: 0,
    walRecords: 0,
    walFpi: 0,
    walBytes: 0,
    jitFunctions: 0,
    jitGenerationTime: 0,
    jitInliningCount: 0,
    jitInliningTime: 0,
    jitOptimizationCount: 0,
    jitOptimizationTime: 0,
    jitEmissionCount: 0,
    jitEmissionTime: 0,
    startupCost: 0,
    totalCost: 0,
    planRows: 0,
    planWidth: 0,
    reads: 0,
    writes: 0,
    userTime: 0,
    systemTime: 0,
  };
}

export const QueryStats = {
  $type: "yandex.cloud.mdb.postgresql.v1.QueryStats" as const,

  encode(message: QueryStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
    }
    if (message.query !== "") {
      writer.uint32(18).string(message.query);
    }
    if (message.normalizedPlan !== "") {
      writer.uint32(26).string(message.normalizedPlan);
    }
    if (message.examplePlan !== "") {
      writer.uint32(34).string(message.examplePlan);
    }
    if (message.plans !== 0) {
      writer.uint32(40).int64(message.plans);
    }
    if (message.totalPlanTime !== 0) {
      writer.uint32(49).double(message.totalPlanTime);
    }
    if (message.minPlanTime !== 0) {
      writer.uint32(57).double(message.minPlanTime);
    }
    if (message.maxPlanTime !== 0) {
      writer.uint32(65).double(message.maxPlanTime);
    }
    if (message.meanPlanTime !== 0) {
      writer.uint32(73).double(message.meanPlanTime);
    }
    if (message.stddevPlanTime !== 0) {
      writer.uint32(81).double(message.stddevPlanTime);
    }
    if (message.calls !== 0) {
      writer.uint32(88).int64(message.calls);
    }
    if (message.totalTime !== 0) {
      writer.uint32(97).double(message.totalTime);
    }
    if (message.minTime !== 0) {
      writer.uint32(105).double(message.minTime);
    }
    if (message.maxTime !== 0) {
      writer.uint32(113).double(message.maxTime);
    }
    if (message.meanTime !== 0) {
      writer.uint32(121).double(message.meanTime);
    }
    if (message.stddevTime !== 0) {
      writer.uint32(129).double(message.stddevTime);
    }
    if (message.rows !== 0) {
      writer.uint32(136).int64(message.rows);
    }
    if (message.sharedBlksHit !== 0) {
      writer.uint32(144).int64(message.sharedBlksHit);
    }
    if (message.sharedBlksRead !== 0) {
      writer.uint32(152).int64(message.sharedBlksRead);
    }
    if (message.sharedBlksDirtied !== 0) {
      writer.uint32(160).int64(message.sharedBlksDirtied);
    }
    if (message.sharedBlksWritten !== 0) {
      writer.uint32(168).int64(message.sharedBlksWritten);
    }
    if (message.localBlksHit !== 0) {
      writer.uint32(176).int64(message.localBlksHit);
    }
    if (message.localBlksRead !== 0) {
      writer.uint32(184).int64(message.localBlksRead);
    }
    if (message.localBlksDirtied !== 0) {
      writer.uint32(192).int64(message.localBlksDirtied);
    }
    if (message.localBlksWritten !== 0) {
      writer.uint32(200).int64(message.localBlksWritten);
    }
    if (message.tempBlksRead !== 0) {
      writer.uint32(208).int64(message.tempBlksRead);
    }
    if (message.tempBlksWritten !== 0) {
      writer.uint32(216).int64(message.tempBlksWritten);
    }
    if (message.blkReadTime !== 0) {
      writer.uint32(225).double(message.blkReadTime);
    }
    if (message.blkWriteTime !== 0) {
      writer.uint32(233).double(message.blkWriteTime);
    }
    if (message.tempBlkReadTime !== 0) {
      writer.uint32(241).double(message.tempBlkReadTime);
    }
    if (message.tempBlkWriteTime !== 0) {
      writer.uint32(249).double(message.tempBlkWriteTime);
    }
    if (message.walRecords !== 0) {
      writer.uint32(256).int64(message.walRecords);
    }
    if (message.walFpi !== 0) {
      writer.uint32(264).int64(message.walFpi);
    }
    if (message.walBytes !== 0) {
      writer.uint32(272).int64(message.walBytes);
    }
    if (message.jitFunctions !== 0) {
      writer.uint32(280).int64(message.jitFunctions);
    }
    if (message.jitGenerationTime !== 0) {
      writer.uint32(289).double(message.jitGenerationTime);
    }
    if (message.jitInliningCount !== 0) {
      writer.uint32(296).int64(message.jitInliningCount);
    }
    if (message.jitInliningTime !== 0) {
      writer.uint32(305).double(message.jitInliningTime);
    }
    if (message.jitOptimizationCount !== 0) {
      writer.uint32(312).int64(message.jitOptimizationCount);
    }
    if (message.jitOptimizationTime !== 0) {
      writer.uint32(321).double(message.jitOptimizationTime);
    }
    if (message.jitEmissionCount !== 0) {
      writer.uint32(328).int64(message.jitEmissionCount);
    }
    if (message.jitEmissionTime !== 0) {
      writer.uint32(337).double(message.jitEmissionTime);
    }
    if (message.startupCost !== 0) {
      writer.uint32(344).int64(message.startupCost);
    }
    if (message.totalCost !== 0) {
      writer.uint32(352).int64(message.totalCost);
    }
    if (message.planRows !== 0) {
      writer.uint32(360).int64(message.planRows);
    }
    if (message.planWidth !== 0) {
      writer.uint32(368).int64(message.planWidth);
    }
    if (message.reads !== 0) {
      writer.uint32(376).int64(message.reads);
    }
    if (message.writes !== 0) {
      writer.uint32(384).int64(message.writes);
    }
    if (message.userTime !== 0) {
      writer.uint32(393).double(message.userTime);
    }
    if (message.systemTime !== 0) {
      writer.uint32(401).double(message.systemTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.query = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.normalizedPlan = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.examplePlan = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.plans = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.totalPlanTime = reader.double();
          continue;
        case 7:
          if (tag !== 57) {
            break;
          }

          message.minPlanTime = reader.double();
          continue;
        case 8:
          if (tag !== 65) {
            break;
          }

          message.maxPlanTime = reader.double();
          continue;
        case 9:
          if (tag !== 73) {
            break;
          }

          message.meanPlanTime = reader.double();
          continue;
        case 10:
          if (tag !== 81) {
            break;
          }

          message.stddevPlanTime = reader.double();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.calls = longToNumber(reader.int64() as Long);
          continue;
        case 12:
          if (tag !== 97) {
            break;
          }

          message.totalTime = reader.double();
          continue;
        case 13:
          if (tag !== 105) {
            break;
          }

          message.minTime = reader.double();
          continue;
        case 14:
          if (tag !== 113) {
            break;
          }

          message.maxTime = reader.double();
          continue;
        case 15:
          if (tag !== 121) {
            break;
          }

          message.meanTime = reader.double();
          continue;
        case 16:
          if (tag !== 129) {
            break;
          }

          message.stddevTime = reader.double();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.rows = longToNumber(reader.int64() as Long);
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.sharedBlksHit = longToNumber(reader.int64() as Long);
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.sharedBlksRead = longToNumber(reader.int64() as Long);
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.sharedBlksDirtied = longToNumber(reader.int64() as Long);
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.sharedBlksWritten = longToNumber(reader.int64() as Long);
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.localBlksHit = longToNumber(reader.int64() as Long);
          continue;
        case 23:
          if (tag !== 184) {
            break;
          }

          message.localBlksRead = longToNumber(reader.int64() as Long);
          continue;
        case 24:
          if (tag !== 192) {
            break;
          }

          message.localBlksDirtied = longToNumber(reader.int64() as Long);
          continue;
        case 25:
          if (tag !== 200) {
            break;
          }

          message.localBlksWritten = longToNumber(reader.int64() as Long);
          continue;
        case 26:
          if (tag !== 208) {
            break;
          }

          message.tempBlksRead = longToNumber(reader.int64() as Long);
          continue;
        case 27:
          if (tag !== 216) {
            break;
          }

          message.tempBlksWritten = longToNumber(reader.int64() as Long);
          continue;
        case 28:
          if (tag !== 225) {
            break;
          }

          message.blkReadTime = reader.double();
          continue;
        case 29:
          if (tag !== 233) {
            break;
          }

          message.blkWriteTime = reader.double();
          continue;
        case 30:
          if (tag !== 241) {
            break;
          }

          message.tempBlkReadTime = reader.double();
          continue;
        case 31:
          if (tag !== 249) {
            break;
          }

          message.tempBlkWriteTime = reader.double();
          continue;
        case 32:
          if (tag !== 256) {
            break;
          }

          message.walRecords = longToNumber(reader.int64() as Long);
          continue;
        case 33:
          if (tag !== 264) {
            break;
          }

          message.walFpi = longToNumber(reader.int64() as Long);
          continue;
        case 34:
          if (tag !== 272) {
            break;
          }

          message.walBytes = longToNumber(reader.int64() as Long);
          continue;
        case 35:
          if (tag !== 280) {
            break;
          }

          message.jitFunctions = longToNumber(reader.int64() as Long);
          continue;
        case 36:
          if (tag !== 289) {
            break;
          }

          message.jitGenerationTime = reader.double();
          continue;
        case 37:
          if (tag !== 296) {
            break;
          }

          message.jitInliningCount = longToNumber(reader.int64() as Long);
          continue;
        case 38:
          if (tag !== 305) {
            break;
          }

          message.jitInliningTime = reader.double();
          continue;
        case 39:
          if (tag !== 312) {
            break;
          }

          message.jitOptimizationCount = longToNumber(reader.int64() as Long);
          continue;
        case 40:
          if (tag !== 321) {
            break;
          }

          message.jitOptimizationTime = reader.double();
          continue;
        case 41:
          if (tag !== 328) {
            break;
          }

          message.jitEmissionCount = longToNumber(reader.int64() as Long);
          continue;
        case 42:
          if (tag !== 337) {
            break;
          }

          message.jitEmissionTime = reader.double();
          continue;
        case 43:
          if (tag !== 344) {
            break;
          }

          message.startupCost = longToNumber(reader.int64() as Long);
          continue;
        case 44:
          if (tag !== 352) {
            break;
          }

          message.totalCost = longToNumber(reader.int64() as Long);
          continue;
        case 45:
          if (tag !== 360) {
            break;
          }

          message.planRows = longToNumber(reader.int64() as Long);
          continue;
        case 46:
          if (tag !== 368) {
            break;
          }

          message.planWidth = longToNumber(reader.int64() as Long);
          continue;
        case 47:
          if (tag !== 376) {
            break;
          }

          message.reads = longToNumber(reader.int64() as Long);
          continue;
        case 48:
          if (tag !== 384) {
            break;
          }

          message.writes = longToNumber(reader.int64() as Long);
          continue;
        case 49:
          if (tag !== 393) {
            break;
          }

          message.userTime = reader.double();
          continue;
        case 50:
          if (tag !== 401) {
            break;
          }

          message.systemTime = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryStats {
    return {
      $type: QueryStats.$type,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      query: isSet(object.query) ? globalThis.String(object.query) : "",
      normalizedPlan: isSet(object.normalizedPlan) ? globalThis.String(object.normalizedPlan) : "",
      examplePlan: isSet(object.examplePlan) ? globalThis.String(object.examplePlan) : "",
      plans: isSet(object.plans) ? globalThis.Number(object.plans) : 0,
      totalPlanTime: isSet(object.totalPlanTime) ? globalThis.Number(object.totalPlanTime) : 0,
      minPlanTime: isSet(object.minPlanTime) ? globalThis.Number(object.minPlanTime) : 0,
      maxPlanTime: isSet(object.maxPlanTime) ? globalThis.Number(object.maxPlanTime) : 0,
      meanPlanTime: isSet(object.meanPlanTime) ? globalThis.Number(object.meanPlanTime) : 0,
      stddevPlanTime: isSet(object.stddevPlanTime) ? globalThis.Number(object.stddevPlanTime) : 0,
      calls: isSet(object.calls) ? globalThis.Number(object.calls) : 0,
      totalTime: isSet(object.totalTime) ? globalThis.Number(object.totalTime) : 0,
      minTime: isSet(object.minTime) ? globalThis.Number(object.minTime) : 0,
      maxTime: isSet(object.maxTime) ? globalThis.Number(object.maxTime) : 0,
      meanTime: isSet(object.meanTime) ? globalThis.Number(object.meanTime) : 0,
      stddevTime: isSet(object.stddevTime) ? globalThis.Number(object.stddevTime) : 0,
      rows: isSet(object.rows) ? globalThis.Number(object.rows) : 0,
      sharedBlksHit: isSet(object.sharedBlksHit) ? globalThis.Number(object.sharedBlksHit) : 0,
      sharedBlksRead: isSet(object.sharedBlksRead) ? globalThis.Number(object.sharedBlksRead) : 0,
      sharedBlksDirtied: isSet(object.sharedBlksDirtied) ? globalThis.Number(object.sharedBlksDirtied) : 0,
      sharedBlksWritten: isSet(object.sharedBlksWritten) ? globalThis.Number(object.sharedBlksWritten) : 0,
      localBlksHit: isSet(object.localBlksHit) ? globalThis.Number(object.localBlksHit) : 0,
      localBlksRead: isSet(object.localBlksRead) ? globalThis.Number(object.localBlksRead) : 0,
      localBlksDirtied: isSet(object.localBlksDirtied) ? globalThis.Number(object.localBlksDirtied) : 0,
      localBlksWritten: isSet(object.localBlksWritten) ? globalThis.Number(object.localBlksWritten) : 0,
      tempBlksRead: isSet(object.tempBlksRead) ? globalThis.Number(object.tempBlksRead) : 0,
      tempBlksWritten: isSet(object.tempBlksWritten) ? globalThis.Number(object.tempBlksWritten) : 0,
      blkReadTime: isSet(object.blkReadTime) ? globalThis.Number(object.blkReadTime) : 0,
      blkWriteTime: isSet(object.blkWriteTime) ? globalThis.Number(object.blkWriteTime) : 0,
      tempBlkReadTime: isSet(object.tempBlkReadTime) ? globalThis.Number(object.tempBlkReadTime) : 0,
      tempBlkWriteTime: isSet(object.tempBlkWriteTime) ? globalThis.Number(object.tempBlkWriteTime) : 0,
      walRecords: isSet(object.walRecords) ? globalThis.Number(object.walRecords) : 0,
      walFpi: isSet(object.walFpi) ? globalThis.Number(object.walFpi) : 0,
      walBytes: isSet(object.walBytes) ? globalThis.Number(object.walBytes) : 0,
      jitFunctions: isSet(object.jitFunctions) ? globalThis.Number(object.jitFunctions) : 0,
      jitGenerationTime: isSet(object.jitGenerationTime) ? globalThis.Number(object.jitGenerationTime) : 0,
      jitInliningCount: isSet(object.jitInliningCount) ? globalThis.Number(object.jitInliningCount) : 0,
      jitInliningTime: isSet(object.jitInliningTime) ? globalThis.Number(object.jitInliningTime) : 0,
      jitOptimizationCount: isSet(object.jitOptimizationCount) ? globalThis.Number(object.jitOptimizationCount) : 0,
      jitOptimizationTime: isSet(object.jitOptimizationTime) ? globalThis.Number(object.jitOptimizationTime) : 0,
      jitEmissionCount: isSet(object.jitEmissionCount) ? globalThis.Number(object.jitEmissionCount) : 0,
      jitEmissionTime: isSet(object.jitEmissionTime) ? globalThis.Number(object.jitEmissionTime) : 0,
      startupCost: isSet(object.startupCost) ? globalThis.Number(object.startupCost) : 0,
      totalCost: isSet(object.totalCost) ? globalThis.Number(object.totalCost) : 0,
      planRows: isSet(object.planRows) ? globalThis.Number(object.planRows) : 0,
      planWidth: isSet(object.planWidth) ? globalThis.Number(object.planWidth) : 0,
      reads: isSet(object.reads) ? globalThis.Number(object.reads) : 0,
      writes: isSet(object.writes) ? globalThis.Number(object.writes) : 0,
      userTime: isSet(object.userTime) ? globalThis.Number(object.userTime) : 0,
      systemTime: isSet(object.systemTime) ? globalThis.Number(object.systemTime) : 0,
    };
  },

  toJSON(message: QueryStats): unknown {
    const obj: any = {};
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
    if (message.query !== "") {
      obj.query = message.query;
    }
    if (message.normalizedPlan !== "") {
      obj.normalizedPlan = message.normalizedPlan;
    }
    if (message.examplePlan !== "") {
      obj.examplePlan = message.examplePlan;
    }
    if (message.plans !== 0) {
      obj.plans = Math.round(message.plans);
    }
    if (message.totalPlanTime !== 0) {
      obj.totalPlanTime = message.totalPlanTime;
    }
    if (message.minPlanTime !== 0) {
      obj.minPlanTime = message.minPlanTime;
    }
    if (message.maxPlanTime !== 0) {
      obj.maxPlanTime = message.maxPlanTime;
    }
    if (message.meanPlanTime !== 0) {
      obj.meanPlanTime = message.meanPlanTime;
    }
    if (message.stddevPlanTime !== 0) {
      obj.stddevPlanTime = message.stddevPlanTime;
    }
    if (message.calls !== 0) {
      obj.calls = Math.round(message.calls);
    }
    if (message.totalTime !== 0) {
      obj.totalTime = message.totalTime;
    }
    if (message.minTime !== 0) {
      obj.minTime = message.minTime;
    }
    if (message.maxTime !== 0) {
      obj.maxTime = message.maxTime;
    }
    if (message.meanTime !== 0) {
      obj.meanTime = message.meanTime;
    }
    if (message.stddevTime !== 0) {
      obj.stddevTime = message.stddevTime;
    }
    if (message.rows !== 0) {
      obj.rows = Math.round(message.rows);
    }
    if (message.sharedBlksHit !== 0) {
      obj.sharedBlksHit = Math.round(message.sharedBlksHit);
    }
    if (message.sharedBlksRead !== 0) {
      obj.sharedBlksRead = Math.round(message.sharedBlksRead);
    }
    if (message.sharedBlksDirtied !== 0) {
      obj.sharedBlksDirtied = Math.round(message.sharedBlksDirtied);
    }
    if (message.sharedBlksWritten !== 0) {
      obj.sharedBlksWritten = Math.round(message.sharedBlksWritten);
    }
    if (message.localBlksHit !== 0) {
      obj.localBlksHit = Math.round(message.localBlksHit);
    }
    if (message.localBlksRead !== 0) {
      obj.localBlksRead = Math.round(message.localBlksRead);
    }
    if (message.localBlksDirtied !== 0) {
      obj.localBlksDirtied = Math.round(message.localBlksDirtied);
    }
    if (message.localBlksWritten !== 0) {
      obj.localBlksWritten = Math.round(message.localBlksWritten);
    }
    if (message.tempBlksRead !== 0) {
      obj.tempBlksRead = Math.round(message.tempBlksRead);
    }
    if (message.tempBlksWritten !== 0) {
      obj.tempBlksWritten = Math.round(message.tempBlksWritten);
    }
    if (message.blkReadTime !== 0) {
      obj.blkReadTime = message.blkReadTime;
    }
    if (message.blkWriteTime !== 0) {
      obj.blkWriteTime = message.blkWriteTime;
    }
    if (message.tempBlkReadTime !== 0) {
      obj.tempBlkReadTime = message.tempBlkReadTime;
    }
    if (message.tempBlkWriteTime !== 0) {
      obj.tempBlkWriteTime = message.tempBlkWriteTime;
    }
    if (message.walRecords !== 0) {
      obj.walRecords = Math.round(message.walRecords);
    }
    if (message.walFpi !== 0) {
      obj.walFpi = Math.round(message.walFpi);
    }
    if (message.walBytes !== 0) {
      obj.walBytes = Math.round(message.walBytes);
    }
    if (message.jitFunctions !== 0) {
      obj.jitFunctions = Math.round(message.jitFunctions);
    }
    if (message.jitGenerationTime !== 0) {
      obj.jitGenerationTime = message.jitGenerationTime;
    }
    if (message.jitInliningCount !== 0) {
      obj.jitInliningCount = Math.round(message.jitInliningCount);
    }
    if (message.jitInliningTime !== 0) {
      obj.jitInliningTime = message.jitInliningTime;
    }
    if (message.jitOptimizationCount !== 0) {
      obj.jitOptimizationCount = Math.round(message.jitOptimizationCount);
    }
    if (message.jitOptimizationTime !== 0) {
      obj.jitOptimizationTime = message.jitOptimizationTime;
    }
    if (message.jitEmissionCount !== 0) {
      obj.jitEmissionCount = Math.round(message.jitEmissionCount);
    }
    if (message.jitEmissionTime !== 0) {
      obj.jitEmissionTime = message.jitEmissionTime;
    }
    if (message.startupCost !== 0) {
      obj.startupCost = Math.round(message.startupCost);
    }
    if (message.totalCost !== 0) {
      obj.totalCost = Math.round(message.totalCost);
    }
    if (message.planRows !== 0) {
      obj.planRows = Math.round(message.planRows);
    }
    if (message.planWidth !== 0) {
      obj.planWidth = Math.round(message.planWidth);
    }
    if (message.reads !== 0) {
      obj.reads = Math.round(message.reads);
    }
    if (message.writes !== 0) {
      obj.writes = Math.round(message.writes);
    }
    if (message.userTime !== 0) {
      obj.userTime = message.userTime;
    }
    if (message.systemTime !== 0) {
      obj.systemTime = message.systemTime;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryStats>): QueryStats {
    return QueryStats.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryStats>): QueryStats {
    const message = createBaseQueryStats();
    message.time = object.time ?? undefined;
    message.query = object.query ?? "";
    message.normalizedPlan = object.normalizedPlan ?? "";
    message.examplePlan = object.examplePlan ?? "";
    message.plans = object.plans ?? 0;
    message.totalPlanTime = object.totalPlanTime ?? 0;
    message.minPlanTime = object.minPlanTime ?? 0;
    message.maxPlanTime = object.maxPlanTime ?? 0;
    message.meanPlanTime = object.meanPlanTime ?? 0;
    message.stddevPlanTime = object.stddevPlanTime ?? 0;
    message.calls = object.calls ?? 0;
    message.totalTime = object.totalTime ?? 0;
    message.minTime = object.minTime ?? 0;
    message.maxTime = object.maxTime ?? 0;
    message.meanTime = object.meanTime ?? 0;
    message.stddevTime = object.stddevTime ?? 0;
    message.rows = object.rows ?? 0;
    message.sharedBlksHit = object.sharedBlksHit ?? 0;
    message.sharedBlksRead = object.sharedBlksRead ?? 0;
    message.sharedBlksDirtied = object.sharedBlksDirtied ?? 0;
    message.sharedBlksWritten = object.sharedBlksWritten ?? 0;
    message.localBlksHit = object.localBlksHit ?? 0;
    message.localBlksRead = object.localBlksRead ?? 0;
    message.localBlksDirtied = object.localBlksDirtied ?? 0;
    message.localBlksWritten = object.localBlksWritten ?? 0;
    message.tempBlksRead = object.tempBlksRead ?? 0;
    message.tempBlksWritten = object.tempBlksWritten ?? 0;
    message.blkReadTime = object.blkReadTime ?? 0;
    message.blkWriteTime = object.blkWriteTime ?? 0;
    message.tempBlkReadTime = object.tempBlkReadTime ?? 0;
    message.tempBlkWriteTime = object.tempBlkWriteTime ?? 0;
    message.walRecords = object.walRecords ?? 0;
    message.walFpi = object.walFpi ?? 0;
    message.walBytes = object.walBytes ?? 0;
    message.jitFunctions = object.jitFunctions ?? 0;
    message.jitGenerationTime = object.jitGenerationTime ?? 0;
    message.jitInliningCount = object.jitInliningCount ?? 0;
    message.jitInliningTime = object.jitInliningTime ?? 0;
    message.jitOptimizationCount = object.jitOptimizationCount ?? 0;
    message.jitOptimizationTime = object.jitOptimizationTime ?? 0;
    message.jitEmissionCount = object.jitEmissionCount ?? 0;
    message.jitEmissionTime = object.jitEmissionTime ?? 0;
    message.startupCost = object.startupCost ?? 0;
    message.totalCost = object.totalCost ?? 0;
    message.planRows = object.planRows ?? 0;
    message.planWidth = object.planWidth ?? 0;
    message.reads = object.reads ?? 0;
    message.writes = object.writes ?? 0;
    message.userTime = object.userTime ?? 0;
    message.systemTime = object.systemTime ?? 0;
    return message;
  },
};

messageTypeRegistry.set(QueryStats.$type, QueryStats);

function createBaseQueryStatement(): QueryStatement {
  return { $type: "yandex.cloud.mdb.postgresql.v1.QueryStatement", key: undefined, stats: undefined };
}

export const QueryStatement = {
  $type: "yandex.cloud.mdb.postgresql.v1.QueryStatement" as const,

  encode(message: QueryStatement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== undefined) {
      PrimaryKey.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.stats !== undefined) {
      QueryStats.encode(message.stats, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStatement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStatement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = PrimaryKey.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.stats = QueryStats.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryStatement {
    return {
      $type: QueryStatement.$type,
      key: isSet(object.key) ? PrimaryKey.fromJSON(object.key) : undefined,
      stats: isSet(object.stats) ? QueryStats.fromJSON(object.stats) : undefined,
    };
  },

  toJSON(message: QueryStatement): unknown {
    const obj: any = {};
    if (message.key !== undefined) {
      obj.key = PrimaryKey.toJSON(message.key);
    }
    if (message.stats !== undefined) {
      obj.stats = QueryStats.toJSON(message.stats);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryStatement>): QueryStatement {
    return QueryStatement.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryStatement>): QueryStatement {
    const message = createBaseQueryStatement();
    message.key = (object.key !== undefined && object.key !== null) ? PrimaryKey.fromPartial(object.key) : undefined;
    message.stats = (object.stats !== undefined && object.stats !== null)
      ? QueryStats.fromPartial(object.stats)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryStatement.$type, QueryStatement);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
