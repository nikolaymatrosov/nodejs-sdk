/* eslint-disable */
import { Timestamp } from "@yandex-cloud/core/dist/generated/google/protobuf/timestamp";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "yandex.cloud.billing.v1";

export enum BudgetStatus {
  BUDGET_STATUS_UNSPECIFIED = 0,
  /** CREATING - The budget is being created. */
  CREATING = 1,
  /** ACTIVE - The budget is active. */
  ACTIVE = 2,
  /** FINISHED - The budget is finished. */
  FINISHED = 3,
  UNRECOGNIZED = -1,
}

export function budgetStatusFromJSON(object: any): BudgetStatus {
  switch (object) {
    case 0:
    case "BUDGET_STATUS_UNSPECIFIED":
      return BudgetStatus.BUDGET_STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return BudgetStatus.CREATING;
    case 2:
    case "ACTIVE":
      return BudgetStatus.ACTIVE;
    case 3:
    case "FINISHED":
      return BudgetStatus.FINISHED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BudgetStatus.UNRECOGNIZED;
  }
}

export function budgetStatusToJSON(object: BudgetStatus): string {
  switch (object) {
    case BudgetStatus.BUDGET_STATUS_UNSPECIFIED:
      return "BUDGET_STATUS_UNSPECIFIED";
    case BudgetStatus.CREATING:
      return "CREATING";
    case BudgetStatus.ACTIVE:
      return "ACTIVE";
    case BudgetStatus.FINISHED:
      return "FINISHED";
    case BudgetStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ResetPeriodType {
  RESET_PERIOD_TYPE_UNSPECIFIED = 0,
  /** MONTHLY - Reset budget every month. */
  MONTHLY = 1,
  /** QUARTER - Reset budget every quarter. */
  QUARTER = 2,
  /** ANNUALLY - Reset budget every year. */
  ANNUALLY = 3,
  UNRECOGNIZED = -1,
}

export function resetPeriodTypeFromJSON(object: any): ResetPeriodType {
  switch (object) {
    case 0:
    case "RESET_PERIOD_TYPE_UNSPECIFIED":
      return ResetPeriodType.RESET_PERIOD_TYPE_UNSPECIFIED;
    case 1:
    case "MONTHLY":
      return ResetPeriodType.MONTHLY;
    case 2:
    case "QUARTER":
      return ResetPeriodType.QUARTER;
    case 3:
    case "ANNUALLY":
      return ResetPeriodType.ANNUALLY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResetPeriodType.UNRECOGNIZED;
  }
}

export function resetPeriodTypeToJSON(object: ResetPeriodType): string {
  switch (object) {
    case ResetPeriodType.RESET_PERIOD_TYPE_UNSPECIFIED:
      return "RESET_PERIOD_TYPE_UNSPECIFIED";
    case ResetPeriodType.MONTHLY:
      return "MONTHLY";
    case ResetPeriodType.QUARTER:
      return "QUARTER";
    case ResetPeriodType.ANNUALLY:
      return "ANNUALLY";
    case ResetPeriodType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Define the unit of the [ThesholdRule.amount]. */
export enum ThresholdType {
  THRESHOLD_TYPE_UNSPECIFIED = 0,
  /** PERCENT - Percent. */
  PERCENT = 1,
  /** AMOUNT - The same as budget amount. */
  AMOUNT = 2,
  UNRECOGNIZED = -1,
}

export function thresholdTypeFromJSON(object: any): ThresholdType {
  switch (object) {
    case 0:
    case "THRESHOLD_TYPE_UNSPECIFIED":
      return ThresholdType.THRESHOLD_TYPE_UNSPECIFIED;
    case 1:
    case "PERCENT":
      return ThresholdType.PERCENT;
    case 2:
    case "AMOUNT":
      return ThresholdType.AMOUNT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ThresholdType.UNRECOGNIZED;
  }
}

export function thresholdTypeToJSON(object: ThresholdType): string {
  switch (object) {
    case ThresholdType.THRESHOLD_TYPE_UNSPECIFIED:
      return "THRESHOLD_TYPE_UNSPECIFIED";
    case ThresholdType.PERCENT:
      return "PERCENT";
    case ThresholdType.AMOUNT:
      return "AMOUNT";
    case ThresholdType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A Budget resource. For more information, see [/docs/billing/concepts/budget]. */
export interface Budget {
  $type: "yandex.cloud.billing.v1.Budget";
  /** ID of the budget. */
  id: string;
  /** Name of the budget. */
  name: string;
  /** Creation timestamp. */
  createdAt?:
    | Date
    | undefined;
  /** ID of the billing account that the budget belongs to. */
  billingAccountId: string;
  /** Status of the budget. */
  status: BudgetStatus;
  /** Cost budget specification. */
  costBudget?:
    | CostBudgetSpec
    | undefined;
  /** Expense budget specification. */
  expenseBudget?:
    | ExpenseBudgetSpec
    | undefined;
  /** Balance budget specification. */
  balanceBudget?: BalanceBudgetSpec | undefined;
}

/** Cost budget specification describes budget that can be used to control cost of cloud resources usage. */
export interface CostBudgetSpec {
  $type: "yandex.cloud.billing.v1.CostBudgetSpec";
  /** Max cost threshold of the budget. Amount currency is the same as corresponding [yandex.cloud.billing.v1.BillingAccount.currency]. */
  amount: string;
  /**
   * IDs of the [yandex.cloud.iam.v1.UserAccount].
   * Specified users will be be notified if the budget exceeds.
   */
  notificationUserAccountIds: string[];
  /**
   * List of the [ThresholdRule].
   * Rules define intermediate cost thresholds of the budget.
   */
  thresholdRules: ThresholdRule[];
  /** Filter that can be used for specific resources selection. Only consumption cost of selected resources are used for the budget calculation. */
  filter?:
    | ConsumptionFilter
    | undefined;
  /**
   * Periodic start type that resets budget after specified period is finished.
   * First time budget is calculated in the current period, i.e. current month, quarter or year.
   */
  resetPeriod?:
    | ResetPeriodType
    | undefined;
  /**
   * Custom start date of the budget.
   * Must be the first day of a month and must be formatted like YYYY-MM-DD.
   */
  startDate?:
    | string
    | undefined;
  /**
   * End date of the budget.
   * Must be the last day of a month and must be formatted like YYYY-MM-DD.
   */
  endDate: string;
}

/** Expense budget specification describes budget that can be used to control expense of cloud resources usage. */
export interface ExpenseBudgetSpec {
  $type: "yandex.cloud.billing.v1.ExpenseBudgetSpec";
  /** Max expense threshold of the budget. Amount currency is the same as corresponding [yandex.cloud.billing.v1.BillingAccount.currency]. */
  amount: string;
  /**
   * IDs of the [yandex.cloud.iam.v1.UserAccount].
   * Specified users will be be notified if the budget exceeds.
   */
  notificationUserAccountIds: string[];
  /**
   * List of the [ThresholdRule].
   * Rules define intermediate expense thresholds of the budget.
   */
  thresholdRules: ThresholdRule[];
  /** Filter that can be used for specific resources selection. Only consumption expense of selected resources are used for the budget calculation. */
  filter?:
    | ConsumptionFilter
    | undefined;
  /**
   * Periodic start type that resets budget after specified period is finished.
   * First time budget is calculated in the current period, i.e. current month, quarter or year.
   */
  resetPeriod?:
    | ResetPeriodType
    | undefined;
  /**
   * Custom start date of the budget.
   * Must be the first day of a month and must be formatted like YYYY-MM-DD.
   */
  startDate?:
    | string
    | undefined;
  /**
   * End date of the budget.
   * Must be the last day of a month and must be formatted like YYYY-MM-DD.
   */
  endDate: string;
}

/** Balance budget specification describes budget that can be used to control [yandex.cloud.billing.v1.BillingAccount.balance]. */
export interface BalanceBudgetSpec {
  $type: "yandex.cloud.billing.v1.BalanceBudgetSpec";
  /** Max balance threshold of the budget. Amount currency is the same as corresponding [yandex.cloud.billing.v1.BillingAccount.currency]. */
  amount: string;
  /**
   * IDs of the [yandex.cloud.iam.v1.UserAccount].
   * Specified users will be be notified if the budget exceeds.
   */
  notificationUserAccountIds: string[];
  /**
   * List of the [ThresholdRule].
   * Rules define intermediate balance thresholds of the budget.
   */
  thresholdRules: ThresholdRule[];
  /**
   * Start_date of the budget.
   * Must be the first day of a month and must be formatted like YYYY-MM-DD.
   */
  startDate: string;
  /**
   * End date of the budget.
   * Must be the last day of a month and must be formatted like YYYY-MM-DD.
   */
  endDate: string;
}

/** Filter that can be used for specific resources selection. */
export interface ConsumptionFilter {
  $type: "yandex.cloud.billing.v1.ConsumptionFilter";
  /**
   * IDs of the [yandex.cloud.billing.v1.Service].
   * Only consumption of resources corresponding to the given services is used for the budget calculation.
   * Empty sequence means no services filters.
   */
  serviceIds: string[];
  /**
   * Cloud and folders consumption filter.
   * Only consumption within specified clouds and folders is used for the budget calculation.
   * Empty sequence means no cloud and folders filters.
   */
  cloudFoldersFilters: CloudFoldersConsumptionFilter[];
}

/** Filter that can be used for specific cloud and its folders selection. */
export interface CloudFoldersConsumptionFilter {
  $type: "yandex.cloud.billing.v1.CloudFoldersConsumptionFilter";
  /**
   * ID of the [yandex.cloud.resourcemanager.v1.Cloud].
   * Only consumption within specified cloud is used for the budget calculation.
   */
  cloudId: string;
  /**
   * IDs of the [yandex.cloud.resourcemanager.v1.Folder].
   * Only consumption within specified folders of the given cloud is used for the budget calculation.
   * Empty sequence means no folders filters and the whole cloud consumption will be used.
   */
  folderIds: string[];
}

/** Rules that define intermediate cost thresholds of the budget. */
export interface ThresholdRule {
  $type: "yandex.cloud.billing.v1.ThresholdRule";
  /** Type of the rule. */
  type: ThresholdType;
  /**
   * Amount of the rule.
   *  * Must be less than 100 if type is PERCENT.
   *  * Must be less than budget's amount if type is AMOUNT.
   */
  amount: string;
  /**
   * IDs of the [yandex.cloud.iam.v1.UserAccount].
   * Specified users will be be notified if the threshold exceeds.
   */
  notificationUserAccountIds: string[];
}

function createBaseBudget(): Budget {
  return {
    $type: "yandex.cloud.billing.v1.Budget",
    id: "",
    name: "",
    createdAt: undefined,
    billingAccountId: "",
    status: 0,
    costBudget: undefined,
    expenseBudget: undefined,
    balanceBudget: undefined,
  };
}

export const Budget = {
  $type: "yandex.cloud.billing.v1.Budget" as const,

  encode(message: Budget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.billingAccountId !== "") {
      writer.uint32(34).string(message.billingAccountId);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.costBudget !== undefined) {
      CostBudgetSpec.encode(message.costBudget, writer.uint32(50).fork()).ldelim();
    }
    if (message.expenseBudget !== undefined) {
      ExpenseBudgetSpec.encode(message.expenseBudget, writer.uint32(58).fork()).ldelim();
    }
    if (message.balanceBudget !== undefined) {
      BalanceBudgetSpec.encode(message.balanceBudget, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Budget {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBudget();
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

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.billingAccountId = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.costBudget = CostBudgetSpec.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.expenseBudget = ExpenseBudgetSpec.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.balanceBudget = BalanceBudgetSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Budget {
    return {
      $type: Budget.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      billingAccountId: isSet(object.billingAccountId) ? globalThis.String(object.billingAccountId) : "",
      status: isSet(object.status) ? budgetStatusFromJSON(object.status) : 0,
      costBudget: isSet(object.costBudget) ? CostBudgetSpec.fromJSON(object.costBudget) : undefined,
      expenseBudget: isSet(object.expenseBudget) ? ExpenseBudgetSpec.fromJSON(object.expenseBudget) : undefined,
      balanceBudget: isSet(object.balanceBudget) ? BalanceBudgetSpec.fromJSON(object.balanceBudget) : undefined,
    };
  },

  toJSON(message: Budget): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.billingAccountId !== "") {
      obj.billingAccountId = message.billingAccountId;
    }
    if (message.status !== 0) {
      obj.status = budgetStatusToJSON(message.status);
    }
    if (message.costBudget !== undefined) {
      obj.costBudget = CostBudgetSpec.toJSON(message.costBudget);
    }
    if (message.expenseBudget !== undefined) {
      obj.expenseBudget = ExpenseBudgetSpec.toJSON(message.expenseBudget);
    }
    if (message.balanceBudget !== undefined) {
      obj.balanceBudget = BalanceBudgetSpec.toJSON(message.balanceBudget);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Budget>, I>>(base?: I): Budget {
    return Budget.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Budget>, I>>(object: I): Budget {
    const message = createBaseBudget();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.billingAccountId = object.billingAccountId ?? "";
    message.status = object.status ?? 0;
    message.costBudget = (object.costBudget !== undefined && object.costBudget !== null)
      ? CostBudgetSpec.fromPartial(object.costBudget)
      : undefined;
    message.expenseBudget = (object.expenseBudget !== undefined && object.expenseBudget !== null)
      ? ExpenseBudgetSpec.fromPartial(object.expenseBudget)
      : undefined;
    message.balanceBudget = (object.balanceBudget !== undefined && object.balanceBudget !== null)
      ? BalanceBudgetSpec.fromPartial(object.balanceBudget)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(Budget.$type, Budget);

function createBaseCostBudgetSpec(): CostBudgetSpec {
  return {
    $type: "yandex.cloud.billing.v1.CostBudgetSpec",
    amount: "",
    notificationUserAccountIds: [],
    thresholdRules: [],
    filter: undefined,
    resetPeriod: undefined,
    startDate: undefined,
    endDate: "",
  };
}

export const CostBudgetSpec = {
  $type: "yandex.cloud.billing.v1.CostBudgetSpec" as const,

  encode(message: CostBudgetSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    for (const v of message.notificationUserAccountIds) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.thresholdRules) {
      ThresholdRule.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.filter !== undefined) {
      ConsumptionFilter.encode(message.filter, writer.uint32(34).fork()).ldelim();
    }
    if (message.resetPeriod !== undefined) {
      writer.uint32(40).int32(message.resetPeriod);
    }
    if (message.startDate !== undefined) {
      writer.uint32(50).string(message.startDate);
    }
    if (message.endDate !== "") {
      writer.uint32(58).string(message.endDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CostBudgetSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCostBudgetSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.notificationUserAccountIds.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.thresholdRules.push(ThresholdRule.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.filter = ConsumptionFilter.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.resetPeriod = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.startDate = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.endDate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CostBudgetSpec {
    return {
      $type: CostBudgetSpec.$type,
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      notificationUserAccountIds: globalThis.Array.isArray(object?.notificationUserAccountIds)
        ? object.notificationUserAccountIds.map((e: any) => globalThis.String(e))
        : [],
      thresholdRules: globalThis.Array.isArray(object?.thresholdRules)
        ? object.thresholdRules.map((e: any) => ThresholdRule.fromJSON(e))
        : [],
      filter: isSet(object.filter) ? ConsumptionFilter.fromJSON(object.filter) : undefined,
      resetPeriod: isSet(object.resetPeriod) ? resetPeriodTypeFromJSON(object.resetPeriod) : undefined,
      startDate: isSet(object.startDate) ? globalThis.String(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? globalThis.String(object.endDate) : "",
    };
  },

  toJSON(message: CostBudgetSpec): unknown {
    const obj: any = {};
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    if (message.notificationUserAccountIds?.length) {
      obj.notificationUserAccountIds = message.notificationUserAccountIds;
    }
    if (message.thresholdRules?.length) {
      obj.thresholdRules = message.thresholdRules.map((e) => ThresholdRule.toJSON(e));
    }
    if (message.filter !== undefined) {
      obj.filter = ConsumptionFilter.toJSON(message.filter);
    }
    if (message.resetPeriod !== undefined) {
      obj.resetPeriod = resetPeriodTypeToJSON(message.resetPeriod);
    }
    if (message.startDate !== undefined) {
      obj.startDate = message.startDate;
    }
    if (message.endDate !== "") {
      obj.endDate = message.endDate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CostBudgetSpec>, I>>(base?: I): CostBudgetSpec {
    return CostBudgetSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CostBudgetSpec>, I>>(object: I): CostBudgetSpec {
    const message = createBaseCostBudgetSpec();
    message.amount = object.amount ?? "";
    message.notificationUserAccountIds = object.notificationUserAccountIds?.map((e) => e) || [];
    message.thresholdRules = object.thresholdRules?.map((e) => ThresholdRule.fromPartial(e)) || [];
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? ConsumptionFilter.fromPartial(object.filter)
      : undefined;
    message.resetPeriod = object.resetPeriod ?? undefined;
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? "";
    return message;
  },
};

messageTypeRegistry.set(CostBudgetSpec.$type, CostBudgetSpec);

function createBaseExpenseBudgetSpec(): ExpenseBudgetSpec {
  return {
    $type: "yandex.cloud.billing.v1.ExpenseBudgetSpec",
    amount: "",
    notificationUserAccountIds: [],
    thresholdRules: [],
    filter: undefined,
    resetPeriod: undefined,
    startDate: undefined,
    endDate: "",
  };
}

export const ExpenseBudgetSpec = {
  $type: "yandex.cloud.billing.v1.ExpenseBudgetSpec" as const,

  encode(message: ExpenseBudgetSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    for (const v of message.notificationUserAccountIds) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.thresholdRules) {
      ThresholdRule.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.filter !== undefined) {
      ConsumptionFilter.encode(message.filter, writer.uint32(34).fork()).ldelim();
    }
    if (message.resetPeriod !== undefined) {
      writer.uint32(40).int32(message.resetPeriod);
    }
    if (message.startDate !== undefined) {
      writer.uint32(50).string(message.startDate);
    }
    if (message.endDate !== "") {
      writer.uint32(58).string(message.endDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExpenseBudgetSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpenseBudgetSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.notificationUserAccountIds.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.thresholdRules.push(ThresholdRule.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.filter = ConsumptionFilter.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.resetPeriod = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.startDate = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.endDate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExpenseBudgetSpec {
    return {
      $type: ExpenseBudgetSpec.$type,
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      notificationUserAccountIds: globalThis.Array.isArray(object?.notificationUserAccountIds)
        ? object.notificationUserAccountIds.map((e: any) => globalThis.String(e))
        : [],
      thresholdRules: globalThis.Array.isArray(object?.thresholdRules)
        ? object.thresholdRules.map((e: any) => ThresholdRule.fromJSON(e))
        : [],
      filter: isSet(object.filter) ? ConsumptionFilter.fromJSON(object.filter) : undefined,
      resetPeriod: isSet(object.resetPeriod) ? resetPeriodTypeFromJSON(object.resetPeriod) : undefined,
      startDate: isSet(object.startDate) ? globalThis.String(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? globalThis.String(object.endDate) : "",
    };
  },

  toJSON(message: ExpenseBudgetSpec): unknown {
    const obj: any = {};
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    if (message.notificationUserAccountIds?.length) {
      obj.notificationUserAccountIds = message.notificationUserAccountIds;
    }
    if (message.thresholdRules?.length) {
      obj.thresholdRules = message.thresholdRules.map((e) => ThresholdRule.toJSON(e));
    }
    if (message.filter !== undefined) {
      obj.filter = ConsumptionFilter.toJSON(message.filter);
    }
    if (message.resetPeriod !== undefined) {
      obj.resetPeriod = resetPeriodTypeToJSON(message.resetPeriod);
    }
    if (message.startDate !== undefined) {
      obj.startDate = message.startDate;
    }
    if (message.endDate !== "") {
      obj.endDate = message.endDate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExpenseBudgetSpec>, I>>(base?: I): ExpenseBudgetSpec {
    return ExpenseBudgetSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExpenseBudgetSpec>, I>>(object: I): ExpenseBudgetSpec {
    const message = createBaseExpenseBudgetSpec();
    message.amount = object.amount ?? "";
    message.notificationUserAccountIds = object.notificationUserAccountIds?.map((e) => e) || [];
    message.thresholdRules = object.thresholdRules?.map((e) => ThresholdRule.fromPartial(e)) || [];
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? ConsumptionFilter.fromPartial(object.filter)
      : undefined;
    message.resetPeriod = object.resetPeriod ?? undefined;
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExpenseBudgetSpec.$type, ExpenseBudgetSpec);

function createBaseBalanceBudgetSpec(): BalanceBudgetSpec {
  return {
    $type: "yandex.cloud.billing.v1.BalanceBudgetSpec",
    amount: "",
    notificationUserAccountIds: [],
    thresholdRules: [],
    startDate: "",
    endDate: "",
  };
}

export const BalanceBudgetSpec = {
  $type: "yandex.cloud.billing.v1.BalanceBudgetSpec" as const,

  encode(message: BalanceBudgetSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    for (const v of message.notificationUserAccountIds) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.thresholdRules) {
      ThresholdRule.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.startDate !== "") {
      writer.uint32(34).string(message.startDate);
    }
    if (message.endDate !== "") {
      writer.uint32(42).string(message.endDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalanceBudgetSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalanceBudgetSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.notificationUserAccountIds.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.thresholdRules.push(ThresholdRule.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.startDate = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.endDate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BalanceBudgetSpec {
    return {
      $type: BalanceBudgetSpec.$type,
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      notificationUserAccountIds: globalThis.Array.isArray(object?.notificationUserAccountIds)
        ? object.notificationUserAccountIds.map((e: any) => globalThis.String(e))
        : [],
      thresholdRules: globalThis.Array.isArray(object?.thresholdRules)
        ? object.thresholdRules.map((e: any) => ThresholdRule.fromJSON(e))
        : [],
      startDate: isSet(object.startDate) ? globalThis.String(object.startDate) : "",
      endDate: isSet(object.endDate) ? globalThis.String(object.endDate) : "",
    };
  },

  toJSON(message: BalanceBudgetSpec): unknown {
    const obj: any = {};
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    if (message.notificationUserAccountIds?.length) {
      obj.notificationUserAccountIds = message.notificationUserAccountIds;
    }
    if (message.thresholdRules?.length) {
      obj.thresholdRules = message.thresholdRules.map((e) => ThresholdRule.toJSON(e));
    }
    if (message.startDate !== "") {
      obj.startDate = message.startDate;
    }
    if (message.endDate !== "") {
      obj.endDate = message.endDate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BalanceBudgetSpec>, I>>(base?: I): BalanceBudgetSpec {
    return BalanceBudgetSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BalanceBudgetSpec>, I>>(object: I): BalanceBudgetSpec {
    const message = createBaseBalanceBudgetSpec();
    message.amount = object.amount ?? "";
    message.notificationUserAccountIds = object.notificationUserAccountIds?.map((e) => e) || [];
    message.thresholdRules = object.thresholdRules?.map((e) => ThresholdRule.fromPartial(e)) || [];
    message.startDate = object.startDate ?? "";
    message.endDate = object.endDate ?? "";
    return message;
  },
};

messageTypeRegistry.set(BalanceBudgetSpec.$type, BalanceBudgetSpec);

function createBaseConsumptionFilter(): ConsumptionFilter {
  return { $type: "yandex.cloud.billing.v1.ConsumptionFilter", serviceIds: [], cloudFoldersFilters: [] };
}

export const ConsumptionFilter = {
  $type: "yandex.cloud.billing.v1.ConsumptionFilter" as const,

  encode(message: ConsumptionFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.serviceIds) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.cloudFoldersFilters) {
      CloudFoldersConsumptionFilter.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsumptionFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsumptionFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serviceIds.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cloudFoldersFilters.push(CloudFoldersConsumptionFilter.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConsumptionFilter {
    return {
      $type: ConsumptionFilter.$type,
      serviceIds: globalThis.Array.isArray(object?.serviceIds)
        ? object.serviceIds.map((e: any) => globalThis.String(e))
        : [],
      cloudFoldersFilters: globalThis.Array.isArray(object?.cloudFoldersFilters)
        ? object.cloudFoldersFilters.map((e: any) => CloudFoldersConsumptionFilter.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ConsumptionFilter): unknown {
    const obj: any = {};
    if (message.serviceIds?.length) {
      obj.serviceIds = message.serviceIds;
    }
    if (message.cloudFoldersFilters?.length) {
      obj.cloudFoldersFilters = message.cloudFoldersFilters.map((e) => CloudFoldersConsumptionFilter.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConsumptionFilter>, I>>(base?: I): ConsumptionFilter {
    return ConsumptionFilter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConsumptionFilter>, I>>(object: I): ConsumptionFilter {
    const message = createBaseConsumptionFilter();
    message.serviceIds = object.serviceIds?.map((e) => e) || [];
    message.cloudFoldersFilters =
      object.cloudFoldersFilters?.map((e) => CloudFoldersConsumptionFilter.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ConsumptionFilter.$type, ConsumptionFilter);

function createBaseCloudFoldersConsumptionFilter(): CloudFoldersConsumptionFilter {
  return { $type: "yandex.cloud.billing.v1.CloudFoldersConsumptionFilter", cloudId: "", folderIds: [] };
}

export const CloudFoldersConsumptionFilter = {
  $type: "yandex.cloud.billing.v1.CloudFoldersConsumptionFilter" as const,

  encode(message: CloudFoldersConsumptionFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cloudId !== "") {
      writer.uint32(10).string(message.cloudId);
    }
    for (const v of message.folderIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CloudFoldersConsumptionFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCloudFoldersConsumptionFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cloudId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.folderIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CloudFoldersConsumptionFilter {
    return {
      $type: CloudFoldersConsumptionFilter.$type,
      cloudId: isSet(object.cloudId) ? globalThis.String(object.cloudId) : "",
      folderIds: globalThis.Array.isArray(object?.folderIds)
        ? object.folderIds.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: CloudFoldersConsumptionFilter): unknown {
    const obj: any = {};
    if (message.cloudId !== "") {
      obj.cloudId = message.cloudId;
    }
    if (message.folderIds?.length) {
      obj.folderIds = message.folderIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CloudFoldersConsumptionFilter>, I>>(base?: I): CloudFoldersConsumptionFilter {
    return CloudFoldersConsumptionFilter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CloudFoldersConsumptionFilter>, I>>(
    object: I,
  ): CloudFoldersConsumptionFilter {
    const message = createBaseCloudFoldersConsumptionFilter();
    message.cloudId = object.cloudId ?? "";
    message.folderIds = object.folderIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(CloudFoldersConsumptionFilter.$type, CloudFoldersConsumptionFilter);

function createBaseThresholdRule(): ThresholdRule {
  return { $type: "yandex.cloud.billing.v1.ThresholdRule", type: 0, amount: "", notificationUserAccountIds: [] };
}

export const ThresholdRule = {
  $type: "yandex.cloud.billing.v1.ThresholdRule" as const,

  encode(message: ThresholdRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    for (const v of message.notificationUserAccountIds) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ThresholdRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseThresholdRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.notificationUserAccountIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ThresholdRule {
    return {
      $type: ThresholdRule.$type,
      type: isSet(object.type) ? thresholdTypeFromJSON(object.type) : 0,
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      notificationUserAccountIds: globalThis.Array.isArray(object?.notificationUserAccountIds)
        ? object.notificationUserAccountIds.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: ThresholdRule): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = thresholdTypeToJSON(message.type);
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    if (message.notificationUserAccountIds?.length) {
      obj.notificationUserAccountIds = message.notificationUserAccountIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ThresholdRule>, I>>(base?: I): ThresholdRule {
    return ThresholdRule.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ThresholdRule>, I>>(object: I): ThresholdRule {
    const message = createBaseThresholdRule();
    message.type = object.type ?? 0;
    message.amount = object.amount ?? "";
    message.notificationUserAccountIds = object.notificationUserAccountIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(ThresholdRule.$type, ThresholdRule);

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
