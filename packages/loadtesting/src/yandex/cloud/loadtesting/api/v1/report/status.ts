/* eslint-disable */

export const protobufPackage = "yandex.cloud.loadtesting.api.v1.report";

/** Report status. */
export enum Status {
  /** STATUS_UNSPECIFIED - Status is not specified. */
  STATUS_UNSPECIFIED = 0,
  /** COLLECTING - Report is being collected. */
  COLLECTING = 1,
  /** CALCULATING - Report is being calculated. */
  CALCULATING = 2,
  /** READY - Report is ready. */
  READY = 3,
  UNRECOGNIZED = -1,
}

export function statusFromJSON(object: any): Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Status.STATUS_UNSPECIFIED;
    case 1:
    case "COLLECTING":
      return Status.COLLECTING;
    case 2:
    case "CALCULATING":
      return Status.CALCULATING;
    case 3:
    case "READY":
      return Status.READY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Status.UNRECOGNIZED;
  }
}

export function statusToJSON(object: Status): string {
  switch (object) {
    case Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Status.COLLECTING:
      return "COLLECTING";
    case Status.CALCULATING:
      return "CALCULATING";
    case Status.READY:
      return "READY";
    case Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
