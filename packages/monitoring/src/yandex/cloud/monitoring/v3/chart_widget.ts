/* eslint-disable */
import { Int64Value } from "@yandex-cloud/core/dist/generated/google/protobuf/wrappers";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { Downsampling } from "./downsampling";
import { UnitFormat, unitFormatFromJSON, unitFormatToJSON } from "./unit_format";

export const protobufPackage = "yandex.cloud.monitoring.v3";

/** Chart widget. */
export interface ChartWidget {
  $type: "yandex.cloud.monitoring.v3.ChartWidget";
  /** Required. Chart ID. */
  id: string;
  /** Queries. */
  queries?:
    | ChartWidget_Queries
    | undefined;
  /** Visualization settings. */
  visualizationSettings?:
    | ChartWidget_VisualizationSettings
    | undefined;
  /** Override settings. */
  seriesOverrides: ChartWidget_SeriesOverrides[];
  /** Name hiding settings. */
  nameHidingSettings?:
    | ChartWidget_NameHidingSettings
    | undefined;
  /** Chart description in dashboard (not enabled in UI). */
  description: string;
  /** Chart widget title. */
  title: string;
  /** Enable legend under chart. */
  displayLegend: boolean;
  /** Fixed time interval for chart. */
  freeze: ChartWidget_FreezeDuration;
}

export enum ChartWidget_FreezeDuration {
  FREEZE_DURATION_UNSPECIFIED = 0,
  /** FREEZE_DURATION_HOUR - Last hour. */
  FREEZE_DURATION_HOUR = 1,
  /** FREEZE_DURATION_DAY - Last day = last 24 hours. */
  FREEZE_DURATION_DAY = 2,
  /** FREEZE_DURATION_WEEK - Last 7 days. */
  FREEZE_DURATION_WEEK = 3,
  /** FREEZE_DURATION_MONTH - Last 31 days. */
  FREEZE_DURATION_MONTH = 4,
  UNRECOGNIZED = -1,
}

export function chartWidget_FreezeDurationFromJSON(object: any): ChartWidget_FreezeDuration {
  switch (object) {
    case 0:
    case "FREEZE_DURATION_UNSPECIFIED":
      return ChartWidget_FreezeDuration.FREEZE_DURATION_UNSPECIFIED;
    case 1:
    case "FREEZE_DURATION_HOUR":
      return ChartWidget_FreezeDuration.FREEZE_DURATION_HOUR;
    case 2:
    case "FREEZE_DURATION_DAY":
      return ChartWidget_FreezeDuration.FREEZE_DURATION_DAY;
    case 3:
    case "FREEZE_DURATION_WEEK":
      return ChartWidget_FreezeDuration.FREEZE_DURATION_WEEK;
    case 4:
    case "FREEZE_DURATION_MONTH":
      return ChartWidget_FreezeDuration.FREEZE_DURATION_MONTH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChartWidget_FreezeDuration.UNRECOGNIZED;
  }
}

export function chartWidget_FreezeDurationToJSON(object: ChartWidget_FreezeDuration): string {
  switch (object) {
    case ChartWidget_FreezeDuration.FREEZE_DURATION_UNSPECIFIED:
      return "FREEZE_DURATION_UNSPECIFIED";
    case ChartWidget_FreezeDuration.FREEZE_DURATION_HOUR:
      return "FREEZE_DURATION_HOUR";
    case ChartWidget_FreezeDuration.FREEZE_DURATION_DAY:
      return "FREEZE_DURATION_DAY";
    case ChartWidget_FreezeDuration.FREEZE_DURATION_WEEK:
      return "FREEZE_DURATION_WEEK";
    case ChartWidget_FreezeDuration.FREEZE_DURATION_MONTH:
      return "FREEZE_DURATION_MONTH";
    case ChartWidget_FreezeDuration.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Query settings. */
export interface ChartWidget_Queries {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.Queries";
  /** Required. List of targets. */
  targets: ChartWidget_Queries_Target[];
  /** Required. Downsampling settings. */
  downsampling?: Downsampling | undefined;
}

/** Query target. */
export interface ChartWidget_Queries_Target {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.Queries.Target";
  /** Required. Query. */
  query: string;
  /** Text mode. */
  textMode: boolean;
  /** Checks that target is visible or invisible. */
  hidden: boolean;
  /** Name of the query. */
  name: string;
}

/** Visualization settings. */
export interface ChartWidget_VisualizationSettings {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings";
  /** Visualization type. */
  type: ChartWidget_VisualizationSettings_VisualizationType;
  /** Normalize. */
  normalize: boolean;
  /** Interpolate. */
  interpolate: ChartWidget_VisualizationSettings_Interpolate;
  /** Aggregation. */
  aggregation: ChartWidget_VisualizationSettings_SeriesAggregation;
  /** Color scheme settings. */
  colorSchemeSettings?:
    | ChartWidget_VisualizationSettings_ColorSchemeSettings
    | undefined;
  /** Heatmap settings. */
  heatmapSettings?:
    | ChartWidget_VisualizationSettings_HeatmapSettings
    | undefined;
  /** Y axis settings. */
  yaxisSettings?:
    | ChartWidget_VisualizationSettings_YaxisSettings
    | undefined;
  /** Inside chart title. */
  title: string;
  /** Show chart labels. */
  showLabels: boolean;
}

/** Chart visualization type. */
export enum ChartWidget_VisualizationSettings_VisualizationType {
  /** VISUALIZATION_TYPE_UNSPECIFIED - Not specified (line by default). */
  VISUALIZATION_TYPE_UNSPECIFIED = 0,
  /** VISUALIZATION_TYPE_LINE - Line chart. */
  VISUALIZATION_TYPE_LINE = 1,
  /** VISUALIZATION_TYPE_STACK - Stack chart. */
  VISUALIZATION_TYPE_STACK = 2,
  /** VISUALIZATION_TYPE_COLUMN - Points as columns chart. */
  VISUALIZATION_TYPE_COLUMN = 3,
  /** VISUALIZATION_TYPE_POINTS - Points. */
  VISUALIZATION_TYPE_POINTS = 4,
  /** VISUALIZATION_TYPE_PIE - Pie aggregation chart. */
  VISUALIZATION_TYPE_PIE = 5,
  /** VISUALIZATION_TYPE_BARS - Bars aggregation chart. */
  VISUALIZATION_TYPE_BARS = 6,
  /** VISUALIZATION_TYPE_DISTRIBUTION - Distribution aggregation chart. */
  VISUALIZATION_TYPE_DISTRIBUTION = 7,
  /** VISUALIZATION_TYPE_HEATMAP - Heatmap aggregation chart. */
  VISUALIZATION_TYPE_HEATMAP = 8,
  UNRECOGNIZED = -1,
}

export function chartWidget_VisualizationSettings_VisualizationTypeFromJSON(
  object: any,
): ChartWidget_VisualizationSettings_VisualizationType {
  switch (object) {
    case 0:
    case "VISUALIZATION_TYPE_UNSPECIFIED":
      return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_UNSPECIFIED;
    case 1:
    case "VISUALIZATION_TYPE_LINE":
      return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_LINE;
    case 2:
    case "VISUALIZATION_TYPE_STACK":
      return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_STACK;
    case 3:
    case "VISUALIZATION_TYPE_COLUMN":
      return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_COLUMN;
    case 4:
    case "VISUALIZATION_TYPE_POINTS":
      return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_POINTS;
    case 5:
    case "VISUALIZATION_TYPE_PIE":
      return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_PIE;
    case 6:
    case "VISUALIZATION_TYPE_BARS":
      return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_BARS;
    case 7:
    case "VISUALIZATION_TYPE_DISTRIBUTION":
      return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_DISTRIBUTION;
    case 8:
    case "VISUALIZATION_TYPE_HEATMAP":
      return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_HEATMAP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChartWidget_VisualizationSettings_VisualizationType.UNRECOGNIZED;
  }
}

export function chartWidget_VisualizationSettings_VisualizationTypeToJSON(
  object: ChartWidget_VisualizationSettings_VisualizationType,
): string {
  switch (object) {
    case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_UNSPECIFIED:
      return "VISUALIZATION_TYPE_UNSPECIFIED";
    case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_LINE:
      return "VISUALIZATION_TYPE_LINE";
    case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_STACK:
      return "VISUALIZATION_TYPE_STACK";
    case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_COLUMN:
      return "VISUALIZATION_TYPE_COLUMN";
    case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_POINTS:
      return "VISUALIZATION_TYPE_POINTS";
    case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_PIE:
      return "VISUALIZATION_TYPE_PIE";
    case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_BARS:
      return "VISUALIZATION_TYPE_BARS";
    case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_DISTRIBUTION:
      return "VISUALIZATION_TYPE_DISTRIBUTION";
    case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_HEATMAP:
      return "VISUALIZATION_TYPE_HEATMAP";
    case ChartWidget_VisualizationSettings_VisualizationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ChartWidget_VisualizationSettings_Interpolate {
  /** INTERPOLATE_UNSPECIFIED - Not specified (linear by default). */
  INTERPOLATE_UNSPECIFIED = 0,
  /** INTERPOLATE_LINEAR - Linear. */
  INTERPOLATE_LINEAR = 1,
  /** INTERPOLATE_LEFT - Left. */
  INTERPOLATE_LEFT = 2,
  /** INTERPOLATE_RIGHT - Right. */
  INTERPOLATE_RIGHT = 3,
  UNRECOGNIZED = -1,
}

export function chartWidget_VisualizationSettings_InterpolateFromJSON(
  object: any,
): ChartWidget_VisualizationSettings_Interpolate {
  switch (object) {
    case 0:
    case "INTERPOLATE_UNSPECIFIED":
      return ChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_UNSPECIFIED;
    case 1:
    case "INTERPOLATE_LINEAR":
      return ChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_LINEAR;
    case 2:
    case "INTERPOLATE_LEFT":
      return ChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_LEFT;
    case 3:
    case "INTERPOLATE_RIGHT":
      return ChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_RIGHT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChartWidget_VisualizationSettings_Interpolate.UNRECOGNIZED;
  }
}

export function chartWidget_VisualizationSettings_InterpolateToJSON(
  object: ChartWidget_VisualizationSettings_Interpolate,
): string {
  switch (object) {
    case ChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_UNSPECIFIED:
      return "INTERPOLATE_UNSPECIFIED";
    case ChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_LINEAR:
      return "INTERPOLATE_LINEAR";
    case ChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_LEFT:
      return "INTERPOLATE_LEFT";
    case ChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_RIGHT:
      return "INTERPOLATE_RIGHT";
    case ChartWidget_VisualizationSettings_Interpolate.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Y axis type.
 * N.B. _TYPE prefix is necessary to expect name clash with Interpolate LINEAR value.
 */
export enum ChartWidget_VisualizationSettings_YaxisType {
  /** YAXIS_TYPE_UNSPECIFIED - Not specified (linear by default). */
  YAXIS_TYPE_UNSPECIFIED = 0,
  /** YAXIS_TYPE_LINEAR - Linear. */
  YAXIS_TYPE_LINEAR = 1,
  /** YAXIS_TYPE_LOGARITHMIC - Logarithmic. */
  YAXIS_TYPE_LOGARITHMIC = 2,
  UNRECOGNIZED = -1,
}

export function chartWidget_VisualizationSettings_YaxisTypeFromJSON(
  object: any,
): ChartWidget_VisualizationSettings_YaxisType {
  switch (object) {
    case 0:
    case "YAXIS_TYPE_UNSPECIFIED":
      return ChartWidget_VisualizationSettings_YaxisType.YAXIS_TYPE_UNSPECIFIED;
    case 1:
    case "YAXIS_TYPE_LINEAR":
      return ChartWidget_VisualizationSettings_YaxisType.YAXIS_TYPE_LINEAR;
    case 2:
    case "YAXIS_TYPE_LOGARITHMIC":
      return ChartWidget_VisualizationSettings_YaxisType.YAXIS_TYPE_LOGARITHMIC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChartWidget_VisualizationSettings_YaxisType.UNRECOGNIZED;
  }
}

export function chartWidget_VisualizationSettings_YaxisTypeToJSON(
  object: ChartWidget_VisualizationSettings_YaxisType,
): string {
  switch (object) {
    case ChartWidget_VisualizationSettings_YaxisType.YAXIS_TYPE_UNSPECIFIED:
      return "YAXIS_TYPE_UNSPECIFIED";
    case ChartWidget_VisualizationSettings_YaxisType.YAXIS_TYPE_LINEAR:
      return "YAXIS_TYPE_LINEAR";
    case ChartWidget_VisualizationSettings_YaxisType.YAXIS_TYPE_LOGARITHMIC:
      return "YAXIS_TYPE_LOGARITHMIC";
    case ChartWidget_VisualizationSettings_YaxisType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ChartWidget_VisualizationSettings_SeriesAggregation {
  /** SERIES_AGGREGATION_UNSPECIFIED - Not specified (avg by default). */
  SERIES_AGGREGATION_UNSPECIFIED = 0,
  /** SERIES_AGGREGATION_AVG - Average. */
  SERIES_AGGREGATION_AVG = 1,
  /** SERIES_AGGREGATION_MIN - Minimum. */
  SERIES_AGGREGATION_MIN = 2,
  /** SERIES_AGGREGATION_MAX - Maximum. */
  SERIES_AGGREGATION_MAX = 3,
  /** SERIES_AGGREGATION_LAST - Last non-NaN value. */
  SERIES_AGGREGATION_LAST = 4,
  /** SERIES_AGGREGATION_SUM - Sum. */
  SERIES_AGGREGATION_SUM = 5,
  UNRECOGNIZED = -1,
}

export function chartWidget_VisualizationSettings_SeriesAggregationFromJSON(
  object: any,
): ChartWidget_VisualizationSettings_SeriesAggregation {
  switch (object) {
    case 0:
    case "SERIES_AGGREGATION_UNSPECIFIED":
      return ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_UNSPECIFIED;
    case 1:
    case "SERIES_AGGREGATION_AVG":
      return ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_AVG;
    case 2:
    case "SERIES_AGGREGATION_MIN":
      return ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_MIN;
    case 3:
    case "SERIES_AGGREGATION_MAX":
      return ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_MAX;
    case 4:
    case "SERIES_AGGREGATION_LAST":
      return ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_LAST;
    case 5:
    case "SERIES_AGGREGATION_SUM":
      return ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_SUM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChartWidget_VisualizationSettings_SeriesAggregation.UNRECOGNIZED;
  }
}

export function chartWidget_VisualizationSettings_SeriesAggregationToJSON(
  object: ChartWidget_VisualizationSettings_SeriesAggregation,
): string {
  switch (object) {
    case ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_UNSPECIFIED:
      return "SERIES_AGGREGATION_UNSPECIFIED";
    case ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_AVG:
      return "SERIES_AGGREGATION_AVG";
    case ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_MIN:
      return "SERIES_AGGREGATION_MIN";
    case ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_MAX:
      return "SERIES_AGGREGATION_MAX";
    case ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_LAST:
      return "SERIES_AGGREGATION_LAST";
    case ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_SUM:
      return "SERIES_AGGREGATION_SUM";
    case ChartWidget_VisualizationSettings_SeriesAggregation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ChartWidget_VisualizationSettings_ColorSchemeSettings {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings";
  /** Automatic color scheme. */
  automatic?:
    | ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme
    | undefined;
  /** Standard color scheme. */
  standard?:
    | ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme
    | undefined;
  /** Gradient color scheme. */
  gradient?: ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme | undefined;
}

export interface ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.AutomaticColorScheme";
}

export interface ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.StandardColorScheme";
}

export interface ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.GradientColorScheme";
  /** Gradient green value. */
  greenValue: string;
  /** Gradient yellow value. */
  yellowValue: string;
  /** Gradient red value. */
  redValue: string;
  /** Gradient violet_value. */
  violetValue: string;
}

export interface ChartWidget_VisualizationSettings_HeatmapSettings {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.HeatmapSettings";
  /** Heatmap green value. */
  greenValue: string;
  /** Heatmap yellow value. */
  yellowValue: string;
  /** Heatmap red value. */
  redValue: string;
  /** Heatmap violet_value. */
  violetValue: string;
}

/** Y axis settings. */
export interface ChartWidget_VisualizationSettings_Yaxis {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.Yaxis";
  /** Type. */
  type: ChartWidget_VisualizationSettings_YaxisType;
  /** Title or empty. */
  title: string;
  /** Min value in extended number format or empty. */
  min: string;
  /** Max value in extended number format or empty. */
  max: string;
  /** Unit format. */
  unitFormat: UnitFormat;
  /** Tick value precision (null as default, 0-7 in other cases). */
  precision?: number | undefined;
}

export interface ChartWidget_VisualizationSettings_YaxisSettings {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.YaxisSettings";
  /** Left Y axis settings. */
  left?:
    | ChartWidget_VisualizationSettings_Yaxis
    | undefined;
  /** Right Y axis settings. */
  right?: ChartWidget_VisualizationSettings_Yaxis | undefined;
}

/** Series override settings. */
export interface ChartWidget_SeriesOverrides {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.SeriesOverrides";
  /** Series name. */
  name?:
    | string
    | undefined;
  /** Target index. */
  targetIndex?:
    | string
    | undefined;
  /** Required. Override settings. */
  settings?: ChartWidget_SeriesOverrides_SeriesOverrideSettings | undefined;
}

export enum ChartWidget_SeriesOverrides_YaxisPosition {
  /** YAXIS_POSITION_UNSPECIFIED - Not specified (left by default). */
  YAXIS_POSITION_UNSPECIFIED = 0,
  /** YAXIS_POSITION_LEFT - Left. */
  YAXIS_POSITION_LEFT = 1,
  /** YAXIS_POSITION_RIGHT - Right. */
  YAXIS_POSITION_RIGHT = 2,
  UNRECOGNIZED = -1,
}

export function chartWidget_SeriesOverrides_YaxisPositionFromJSON(
  object: any,
): ChartWidget_SeriesOverrides_YaxisPosition {
  switch (object) {
    case 0:
    case "YAXIS_POSITION_UNSPECIFIED":
      return ChartWidget_SeriesOverrides_YaxisPosition.YAXIS_POSITION_UNSPECIFIED;
    case 1:
    case "YAXIS_POSITION_LEFT":
      return ChartWidget_SeriesOverrides_YaxisPosition.YAXIS_POSITION_LEFT;
    case 2:
    case "YAXIS_POSITION_RIGHT":
      return ChartWidget_SeriesOverrides_YaxisPosition.YAXIS_POSITION_RIGHT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChartWidget_SeriesOverrides_YaxisPosition.UNRECOGNIZED;
  }
}

export function chartWidget_SeriesOverrides_YaxisPositionToJSON(
  object: ChartWidget_SeriesOverrides_YaxisPosition,
): string {
  switch (object) {
    case ChartWidget_SeriesOverrides_YaxisPosition.YAXIS_POSITION_UNSPECIFIED:
      return "YAXIS_POSITION_UNSPECIFIED";
    case ChartWidget_SeriesOverrides_YaxisPosition.YAXIS_POSITION_LEFT:
      return "YAXIS_POSITION_LEFT";
    case ChartWidget_SeriesOverrides_YaxisPosition.YAXIS_POSITION_RIGHT:
      return "YAXIS_POSITION_RIGHT";
    case ChartWidget_SeriesOverrides_YaxisPosition.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ChartWidget_SeriesOverrides_SeriesVisualizationType {
  /** SERIES_VISUALIZATION_TYPE_UNSPECIFIED - Not specified (line by default). */
  SERIES_VISUALIZATION_TYPE_UNSPECIFIED = 0,
  /** SERIES_VISUALIZATION_TYPE_LINE - Line chart. */
  SERIES_VISUALIZATION_TYPE_LINE = 1,
  /** SERIES_VISUALIZATION_TYPE_STACK - Stack chart. */
  SERIES_VISUALIZATION_TYPE_STACK = 2,
  /** SERIES_VISUALIZATION_TYPE_COLUMN - Points as columns chart. */
  SERIES_VISUALIZATION_TYPE_COLUMN = 3,
  /** SERIES_VISUALIZATION_TYPE_POINTS - Points. */
  SERIES_VISUALIZATION_TYPE_POINTS = 4,
  UNRECOGNIZED = -1,
}

export function chartWidget_SeriesOverrides_SeriesVisualizationTypeFromJSON(
  object: any,
): ChartWidget_SeriesOverrides_SeriesVisualizationType {
  switch (object) {
    case 0:
    case "SERIES_VISUALIZATION_TYPE_UNSPECIFIED":
      return ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_UNSPECIFIED;
    case 1:
    case "SERIES_VISUALIZATION_TYPE_LINE":
      return ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_LINE;
    case 2:
    case "SERIES_VISUALIZATION_TYPE_STACK":
      return ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_STACK;
    case 3:
    case "SERIES_VISUALIZATION_TYPE_COLUMN":
      return ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_COLUMN;
    case 4:
    case "SERIES_VISUALIZATION_TYPE_POINTS":
      return ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_POINTS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChartWidget_SeriesOverrides_SeriesVisualizationType.UNRECOGNIZED;
  }
}

export function chartWidget_SeriesOverrides_SeriesVisualizationTypeToJSON(
  object: ChartWidget_SeriesOverrides_SeriesVisualizationType,
): string {
  switch (object) {
    case ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_UNSPECIFIED:
      return "SERIES_VISUALIZATION_TYPE_UNSPECIFIED";
    case ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_LINE:
      return "SERIES_VISUALIZATION_TYPE_LINE";
    case ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_STACK:
      return "SERIES_VISUALIZATION_TYPE_STACK";
    case ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_COLUMN:
      return "SERIES_VISUALIZATION_TYPE_COLUMN";
    case ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_POINTS:
      return "SERIES_VISUALIZATION_TYPE_POINTS";
    case ChartWidget_SeriesOverrides_SeriesVisualizationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ChartWidget_SeriesOverrides_SeriesOverrideSettings {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.SeriesOverrides.SeriesOverrideSettings";
  /** Series name or empty. */
  name: string;
  /** Series color or empty. */
  color: string;
  /** Type. */
  type: ChartWidget_SeriesOverrides_SeriesVisualizationType;
  /** Stack name or empty. */
  stackName: string;
  /** Stack grow down. */
  growDown: boolean;
  /** Yaxis position. */
  yaxisPosition: ChartWidget_SeriesOverrides_YaxisPosition;
}

/** Name hiding settings. */
export interface ChartWidget_NameHidingSettings {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.NameHidingSettings";
  /** True if we want to show concrete series names only, false if we want to hide concrete series names. */
  positive: boolean;
  /** Series names to show or hide. */
  names: string[];
}

function createBaseChartWidget(): ChartWidget {
  return {
    $type: "yandex.cloud.monitoring.v3.ChartWidget",
    id: "",
    queries: undefined,
    visualizationSettings: undefined,
    seriesOverrides: [],
    nameHidingSettings: undefined,
    description: "",
    title: "",
    displayLegend: false,
    freeze: 0,
  };
}

export const ChartWidget = {
  $type: "yandex.cloud.monitoring.v3.ChartWidget" as const,

  encode(message: ChartWidget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.queries !== undefined) {
      ChartWidget_Queries.encode(message.queries, writer.uint32(18).fork()).ldelim();
    }
    if (message.visualizationSettings !== undefined) {
      ChartWidget_VisualizationSettings.encode(message.visualizationSettings, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.seriesOverrides) {
      ChartWidget_SeriesOverrides.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.nameHidingSettings !== undefined) {
      ChartWidget_NameHidingSettings.encode(message.nameHidingSettings, writer.uint32(42).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.title !== "") {
      writer.uint32(58).string(message.title);
    }
    if (message.displayLegend === true) {
      writer.uint32(64).bool(message.displayLegend);
    }
    if (message.freeze !== 0) {
      writer.uint32(72).int32(message.freeze);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChartWidget {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChartWidget();
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

          message.queries = ChartWidget_Queries.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.visualizationSettings = ChartWidget_VisualizationSettings.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.seriesOverrides.push(ChartWidget_SeriesOverrides.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.nameHidingSettings = ChartWidget_NameHidingSettings.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.title = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.displayLegend = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.freeze = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChartWidget {
    return {
      $type: ChartWidget.$type,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      queries: isSet(object.queries) ? ChartWidget_Queries.fromJSON(object.queries) : undefined,
      visualizationSettings: isSet(object.visualizationSettings)
        ? ChartWidget_VisualizationSettings.fromJSON(object.visualizationSettings)
        : undefined,
      seriesOverrides: globalThis.Array.isArray(object?.seriesOverrides)
        ? object.seriesOverrides.map((e: any) => ChartWidget_SeriesOverrides.fromJSON(e))
        : [],
      nameHidingSettings: isSet(object.nameHidingSettings)
        ? ChartWidget_NameHidingSettings.fromJSON(object.nameHidingSettings)
        : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      displayLegend: isSet(object.displayLegend) ? globalThis.Boolean(object.displayLegend) : false,
      freeze: isSet(object.freeze) ? chartWidget_FreezeDurationFromJSON(object.freeze) : 0,
    };
  },

  toJSON(message: ChartWidget): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.queries !== undefined) {
      obj.queries = ChartWidget_Queries.toJSON(message.queries);
    }
    if (message.visualizationSettings !== undefined) {
      obj.visualizationSettings = ChartWidget_VisualizationSettings.toJSON(message.visualizationSettings);
    }
    if (message.seriesOverrides?.length) {
      obj.seriesOverrides = message.seriesOverrides.map((e) => ChartWidget_SeriesOverrides.toJSON(e));
    }
    if (message.nameHidingSettings !== undefined) {
      obj.nameHidingSettings = ChartWidget_NameHidingSettings.toJSON(message.nameHidingSettings);
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.displayLegend === true) {
      obj.displayLegend = message.displayLegend;
    }
    if (message.freeze !== 0) {
      obj.freeze = chartWidget_FreezeDurationToJSON(message.freeze);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChartWidget>, I>>(base?: I): ChartWidget {
    return ChartWidget.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChartWidget>, I>>(object: I): ChartWidget {
    const message = createBaseChartWidget();
    message.id = object.id ?? "";
    message.queries = (object.queries !== undefined && object.queries !== null)
      ? ChartWidget_Queries.fromPartial(object.queries)
      : undefined;
    message.visualizationSettings =
      (object.visualizationSettings !== undefined && object.visualizationSettings !== null)
        ? ChartWidget_VisualizationSettings.fromPartial(object.visualizationSettings)
        : undefined;
    message.seriesOverrides = object.seriesOverrides?.map((e) => ChartWidget_SeriesOverrides.fromPartial(e)) || [];
    message.nameHidingSettings = (object.nameHidingSettings !== undefined && object.nameHidingSettings !== null)
      ? ChartWidget_NameHidingSettings.fromPartial(object.nameHidingSettings)
      : undefined;
    message.description = object.description ?? "";
    message.title = object.title ?? "";
    message.displayLegend = object.displayLegend ?? false;
    message.freeze = object.freeze ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ChartWidget.$type, ChartWidget);

function createBaseChartWidget_Queries(): ChartWidget_Queries {
  return { $type: "yandex.cloud.monitoring.v3.ChartWidget.Queries", targets: [], downsampling: undefined };
}

export const ChartWidget_Queries = {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.Queries" as const,

  encode(message: ChartWidget_Queries, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.targets) {
      ChartWidget_Queries_Target.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.downsampling !== undefined) {
      Downsampling.encode(message.downsampling, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChartWidget_Queries {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChartWidget_Queries();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.targets.push(ChartWidget_Queries_Target.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.downsampling = Downsampling.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChartWidget_Queries {
    return {
      $type: ChartWidget_Queries.$type,
      targets: globalThis.Array.isArray(object?.targets)
        ? object.targets.map((e: any) => ChartWidget_Queries_Target.fromJSON(e))
        : [],
      downsampling: isSet(object.downsampling) ? Downsampling.fromJSON(object.downsampling) : undefined,
    };
  },

  toJSON(message: ChartWidget_Queries): unknown {
    const obj: any = {};
    if (message.targets?.length) {
      obj.targets = message.targets.map((e) => ChartWidget_Queries_Target.toJSON(e));
    }
    if (message.downsampling !== undefined) {
      obj.downsampling = Downsampling.toJSON(message.downsampling);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChartWidget_Queries>, I>>(base?: I): ChartWidget_Queries {
    return ChartWidget_Queries.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChartWidget_Queries>, I>>(object: I): ChartWidget_Queries {
    const message = createBaseChartWidget_Queries();
    message.targets = object.targets?.map((e) => ChartWidget_Queries_Target.fromPartial(e)) || [];
    message.downsampling = (object.downsampling !== undefined && object.downsampling !== null)
      ? Downsampling.fromPartial(object.downsampling)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ChartWidget_Queries.$type, ChartWidget_Queries);

function createBaseChartWidget_Queries_Target(): ChartWidget_Queries_Target {
  return {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.Queries.Target",
    query: "",
    textMode: false,
    hidden: false,
    name: "",
  };
}

export const ChartWidget_Queries_Target = {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.Queries.Target" as const,

  encode(message: ChartWidget_Queries_Target, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.query !== "") {
      writer.uint32(10).string(message.query);
    }
    if (message.textMode === true) {
      writer.uint32(16).bool(message.textMode);
    }
    if (message.hidden === true) {
      writer.uint32(24).bool(message.hidden);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChartWidget_Queries_Target {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChartWidget_Queries_Target();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.query = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.textMode = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.hidden = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChartWidget_Queries_Target {
    return {
      $type: ChartWidget_Queries_Target.$type,
      query: isSet(object.query) ? globalThis.String(object.query) : "",
      textMode: isSet(object.textMode) ? globalThis.Boolean(object.textMode) : false,
      hidden: isSet(object.hidden) ? globalThis.Boolean(object.hidden) : false,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: ChartWidget_Queries_Target): unknown {
    const obj: any = {};
    if (message.query !== "") {
      obj.query = message.query;
    }
    if (message.textMode === true) {
      obj.textMode = message.textMode;
    }
    if (message.hidden === true) {
      obj.hidden = message.hidden;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChartWidget_Queries_Target>, I>>(base?: I): ChartWidget_Queries_Target {
    return ChartWidget_Queries_Target.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChartWidget_Queries_Target>, I>>(object: I): ChartWidget_Queries_Target {
    const message = createBaseChartWidget_Queries_Target();
    message.query = object.query ?? "";
    message.textMode = object.textMode ?? false;
    message.hidden = object.hidden ?? false;
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(ChartWidget_Queries_Target.$type, ChartWidget_Queries_Target);

function createBaseChartWidget_VisualizationSettings(): ChartWidget_VisualizationSettings {
  return {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings",
    type: 0,
    normalize: false,
    interpolate: 0,
    aggregation: 0,
    colorSchemeSettings: undefined,
    heatmapSettings: undefined,
    yaxisSettings: undefined,
    title: "",
    showLabels: false,
  };
}

export const ChartWidget_VisualizationSettings = {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings" as const,

  encode(message: ChartWidget_VisualizationSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.normalize === true) {
      writer.uint32(16).bool(message.normalize);
    }
    if (message.interpolate !== 0) {
      writer.uint32(24).int32(message.interpolate);
    }
    if (message.aggregation !== 0) {
      writer.uint32(32).int32(message.aggregation);
    }
    if (message.colorSchemeSettings !== undefined) {
      ChartWidget_VisualizationSettings_ColorSchemeSettings.encode(
        message.colorSchemeSettings,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.heatmapSettings !== undefined) {
      ChartWidget_VisualizationSettings_HeatmapSettings.encode(message.heatmapSettings, writer.uint32(50).fork())
        .ldelim();
    }
    if (message.yaxisSettings !== undefined) {
      ChartWidget_VisualizationSettings_YaxisSettings.encode(message.yaxisSettings, writer.uint32(58).fork()).ldelim();
    }
    if (message.title !== "") {
      writer.uint32(66).string(message.title);
    }
    if (message.showLabels === true) {
      writer.uint32(72).bool(message.showLabels);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChartWidget_VisualizationSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChartWidget_VisualizationSettings();
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
          if (tag !== 16) {
            break;
          }

          message.normalize = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.interpolate = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.aggregation = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.colorSchemeSettings = ChartWidget_VisualizationSettings_ColorSchemeSettings.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.heatmapSettings = ChartWidget_VisualizationSettings_HeatmapSettings.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.yaxisSettings = ChartWidget_VisualizationSettings_YaxisSettings.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.title = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.showLabels = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChartWidget_VisualizationSettings {
    return {
      $type: ChartWidget_VisualizationSettings.$type,
      type: isSet(object.type) ? chartWidget_VisualizationSettings_VisualizationTypeFromJSON(object.type) : 0,
      normalize: isSet(object.normalize) ? globalThis.Boolean(object.normalize) : false,
      interpolate: isSet(object.interpolate)
        ? chartWidget_VisualizationSettings_InterpolateFromJSON(object.interpolate)
        : 0,
      aggregation: isSet(object.aggregation)
        ? chartWidget_VisualizationSettings_SeriesAggregationFromJSON(object.aggregation)
        : 0,
      colorSchemeSettings: isSet(object.colorSchemeSettings)
        ? ChartWidget_VisualizationSettings_ColorSchemeSettings.fromJSON(object.colorSchemeSettings)
        : undefined,
      heatmapSettings: isSet(object.heatmapSettings)
        ? ChartWidget_VisualizationSettings_HeatmapSettings.fromJSON(object.heatmapSettings)
        : undefined,
      yaxisSettings: isSet(object.yaxisSettings)
        ? ChartWidget_VisualizationSettings_YaxisSettings.fromJSON(object.yaxisSettings)
        : undefined,
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      showLabels: isSet(object.showLabels) ? globalThis.Boolean(object.showLabels) : false,
    };
  },

  toJSON(message: ChartWidget_VisualizationSettings): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = chartWidget_VisualizationSettings_VisualizationTypeToJSON(message.type);
    }
    if (message.normalize === true) {
      obj.normalize = message.normalize;
    }
    if (message.interpolate !== 0) {
      obj.interpolate = chartWidget_VisualizationSettings_InterpolateToJSON(message.interpolate);
    }
    if (message.aggregation !== 0) {
      obj.aggregation = chartWidget_VisualizationSettings_SeriesAggregationToJSON(message.aggregation);
    }
    if (message.colorSchemeSettings !== undefined) {
      obj.colorSchemeSettings = ChartWidget_VisualizationSettings_ColorSchemeSettings.toJSON(
        message.colorSchemeSettings,
      );
    }
    if (message.heatmapSettings !== undefined) {
      obj.heatmapSettings = ChartWidget_VisualizationSettings_HeatmapSettings.toJSON(message.heatmapSettings);
    }
    if (message.yaxisSettings !== undefined) {
      obj.yaxisSettings = ChartWidget_VisualizationSettings_YaxisSettings.toJSON(message.yaxisSettings);
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.showLabels === true) {
      obj.showLabels = message.showLabels;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChartWidget_VisualizationSettings>, I>>(
    base?: I,
  ): ChartWidget_VisualizationSettings {
    return ChartWidget_VisualizationSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChartWidget_VisualizationSettings>, I>>(
    object: I,
  ): ChartWidget_VisualizationSettings {
    const message = createBaseChartWidget_VisualizationSettings();
    message.type = object.type ?? 0;
    message.normalize = object.normalize ?? false;
    message.interpolate = object.interpolate ?? 0;
    message.aggregation = object.aggregation ?? 0;
    message.colorSchemeSettings = (object.colorSchemeSettings !== undefined && object.colorSchemeSettings !== null)
      ? ChartWidget_VisualizationSettings_ColorSchemeSettings.fromPartial(object.colorSchemeSettings)
      : undefined;
    message.heatmapSettings = (object.heatmapSettings !== undefined && object.heatmapSettings !== null)
      ? ChartWidget_VisualizationSettings_HeatmapSettings.fromPartial(object.heatmapSettings)
      : undefined;
    message.yaxisSettings = (object.yaxisSettings !== undefined && object.yaxisSettings !== null)
      ? ChartWidget_VisualizationSettings_YaxisSettings.fromPartial(object.yaxisSettings)
      : undefined;
    message.title = object.title ?? "";
    message.showLabels = object.showLabels ?? false;
    return message;
  },
};

messageTypeRegistry.set(ChartWidget_VisualizationSettings.$type, ChartWidget_VisualizationSettings);

function createBaseChartWidget_VisualizationSettings_ColorSchemeSettings(): ChartWidget_VisualizationSettings_ColorSchemeSettings {
  return {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings",
    automatic: undefined,
    standard: undefined,
    gradient: undefined,
  };
}

export const ChartWidget_VisualizationSettings_ColorSchemeSettings = {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings" as const,

  encode(
    message: ChartWidget_VisualizationSettings_ColorSchemeSettings,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.automatic !== undefined) {
      ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.encode(
        message.automatic,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.standard !== undefined) {
      ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.encode(
        message.standard,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.gradient !== undefined) {
      ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.encode(
        message.gradient,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChartWidget_VisualizationSettings_ColorSchemeSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChartWidget_VisualizationSettings_ColorSchemeSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.automatic = ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.standard = ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gradient = ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChartWidget_VisualizationSettings_ColorSchemeSettings {
    return {
      $type: ChartWidget_VisualizationSettings_ColorSchemeSettings.$type,
      automatic: isSet(object.automatic)
        ? ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.fromJSON(object.automatic)
        : undefined,
      standard: isSet(object.standard)
        ? ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.fromJSON(object.standard)
        : undefined,
      gradient: isSet(object.gradient)
        ? ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.fromJSON(object.gradient)
        : undefined,
    };
  },

  toJSON(message: ChartWidget_VisualizationSettings_ColorSchemeSettings): unknown {
    const obj: any = {};
    if (message.automatic !== undefined) {
      obj.automatic = ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.toJSON(
        message.automatic,
      );
    }
    if (message.standard !== undefined) {
      obj.standard = ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.toJSON(message.standard);
    }
    if (message.gradient !== undefined) {
      obj.gradient = ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.toJSON(message.gradient);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChartWidget_VisualizationSettings_ColorSchemeSettings>, I>>(
    base?: I,
  ): ChartWidget_VisualizationSettings_ColorSchemeSettings {
    return ChartWidget_VisualizationSettings_ColorSchemeSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChartWidget_VisualizationSettings_ColorSchemeSettings>, I>>(
    object: I,
  ): ChartWidget_VisualizationSettings_ColorSchemeSettings {
    const message = createBaseChartWidget_VisualizationSettings_ColorSchemeSettings();
    message.automatic = (object.automatic !== undefined && object.automatic !== null)
      ? ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.fromPartial(object.automatic)
      : undefined;
    message.standard = (object.standard !== undefined && object.standard !== null)
      ? ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.fromPartial(object.standard)
      : undefined;
    message.gradient = (object.gradient !== undefined && object.gradient !== null)
      ? ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.fromPartial(object.gradient)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ChartWidget_VisualizationSettings_ColorSchemeSettings.$type,
  ChartWidget_VisualizationSettings_ColorSchemeSettings,
);

function createBaseChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme(): ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme {
  return {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.AutomaticColorScheme",
  };
}

export const ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme = {
  $type:
    "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.AutomaticColorScheme" as const,

  encode(
    _: ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme();
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

  fromJSON(_: any): ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme {
    return { $type: ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.$type };
  },

  toJSON(_: ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme>, I>>(
    base?: I,
  ): ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme {
    return ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme>, I>,
  >(_: I): ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme {
    const message = createBaseChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme();
    return message;
  },
};

messageTypeRegistry.set(
  ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.$type,
  ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme,
);

function createBaseChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme(): ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme {
  return {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.StandardColorScheme",
  };
}

export const ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme = {
  $type:
    "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.StandardColorScheme" as const,

  encode(
    _: ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme();
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

  fromJSON(_: any): ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme {
    return { $type: ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.$type };
  },

  toJSON(_: ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme>, I>>(
    base?: I,
  ): ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme {
    return ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme>, I>,
  >(_: I): ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme {
    const message = createBaseChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme();
    return message;
  },
};

messageTypeRegistry.set(
  ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.$type,
  ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme,
);

function createBaseChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme(): ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme {
  return {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.GradientColorScheme",
    greenValue: "",
    yellowValue: "",
    redValue: "",
    violetValue: "",
  };
}

export const ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme = {
  $type:
    "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.GradientColorScheme" as const,

  encode(
    message: ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.greenValue !== "") {
      writer.uint32(18).string(message.greenValue);
    }
    if (message.yellowValue !== "") {
      writer.uint32(26).string(message.yellowValue);
    }
    if (message.redValue !== "") {
      writer.uint32(34).string(message.redValue);
    }
    if (message.violetValue !== "") {
      writer.uint32(42).string(message.violetValue);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.greenValue = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.yellowValue = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.redValue = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.violetValue = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme {
    return {
      $type: ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.$type,
      greenValue: isSet(object.greenValue) ? globalThis.String(object.greenValue) : "",
      yellowValue: isSet(object.yellowValue) ? globalThis.String(object.yellowValue) : "",
      redValue: isSet(object.redValue) ? globalThis.String(object.redValue) : "",
      violetValue: isSet(object.violetValue) ? globalThis.String(object.violetValue) : "",
    };
  },

  toJSON(message: ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme): unknown {
    const obj: any = {};
    if (message.greenValue !== "") {
      obj.greenValue = message.greenValue;
    }
    if (message.yellowValue !== "") {
      obj.yellowValue = message.yellowValue;
    }
    if (message.redValue !== "") {
      obj.redValue = message.redValue;
    }
    if (message.violetValue !== "") {
      obj.violetValue = message.violetValue;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme>, I>>(
    base?: I,
  ): ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme {
    return ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme>, I>,
  >(object: I): ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme {
    const message = createBaseChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme();
    message.greenValue = object.greenValue ?? "";
    message.yellowValue = object.yellowValue ?? "";
    message.redValue = object.redValue ?? "";
    message.violetValue = object.violetValue ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.$type,
  ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme,
);

function createBaseChartWidget_VisualizationSettings_HeatmapSettings(): ChartWidget_VisualizationSettings_HeatmapSettings {
  return {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.HeatmapSettings",
    greenValue: "",
    yellowValue: "",
    redValue: "",
    violetValue: "",
  };
}

export const ChartWidget_VisualizationSettings_HeatmapSettings = {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.HeatmapSettings" as const,

  encode(
    message: ChartWidget_VisualizationSettings_HeatmapSettings,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.greenValue !== "") {
      writer.uint32(18).string(message.greenValue);
    }
    if (message.yellowValue !== "") {
      writer.uint32(26).string(message.yellowValue);
    }
    if (message.redValue !== "") {
      writer.uint32(34).string(message.redValue);
    }
    if (message.violetValue !== "") {
      writer.uint32(42).string(message.violetValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChartWidget_VisualizationSettings_HeatmapSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChartWidget_VisualizationSettings_HeatmapSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.greenValue = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.yellowValue = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.redValue = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.violetValue = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChartWidget_VisualizationSettings_HeatmapSettings {
    return {
      $type: ChartWidget_VisualizationSettings_HeatmapSettings.$type,
      greenValue: isSet(object.greenValue) ? globalThis.String(object.greenValue) : "",
      yellowValue: isSet(object.yellowValue) ? globalThis.String(object.yellowValue) : "",
      redValue: isSet(object.redValue) ? globalThis.String(object.redValue) : "",
      violetValue: isSet(object.violetValue) ? globalThis.String(object.violetValue) : "",
    };
  },

  toJSON(message: ChartWidget_VisualizationSettings_HeatmapSettings): unknown {
    const obj: any = {};
    if (message.greenValue !== "") {
      obj.greenValue = message.greenValue;
    }
    if (message.yellowValue !== "") {
      obj.yellowValue = message.yellowValue;
    }
    if (message.redValue !== "") {
      obj.redValue = message.redValue;
    }
    if (message.violetValue !== "") {
      obj.violetValue = message.violetValue;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChartWidget_VisualizationSettings_HeatmapSettings>, I>>(
    base?: I,
  ): ChartWidget_VisualizationSettings_HeatmapSettings {
    return ChartWidget_VisualizationSettings_HeatmapSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChartWidget_VisualizationSettings_HeatmapSettings>, I>>(
    object: I,
  ): ChartWidget_VisualizationSettings_HeatmapSettings {
    const message = createBaseChartWidget_VisualizationSettings_HeatmapSettings();
    message.greenValue = object.greenValue ?? "";
    message.yellowValue = object.yellowValue ?? "";
    message.redValue = object.redValue ?? "";
    message.violetValue = object.violetValue ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ChartWidget_VisualizationSettings_HeatmapSettings.$type,
  ChartWidget_VisualizationSettings_HeatmapSettings,
);

function createBaseChartWidget_VisualizationSettings_Yaxis(): ChartWidget_VisualizationSettings_Yaxis {
  return {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.Yaxis",
    type: 0,
    title: "",
    min: "",
    max: "",
    unitFormat: 0,
    precision: undefined,
  };
}

export const ChartWidget_VisualizationSettings_Yaxis = {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.Yaxis" as const,

  encode(message: ChartWidget_VisualizationSettings_Yaxis, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.min !== "") {
      writer.uint32(26).string(message.min);
    }
    if (message.max !== "") {
      writer.uint32(34).string(message.max);
    }
    if (message.unitFormat !== 0) {
      writer.uint32(40).int32(message.unitFormat);
    }
    if (message.precision !== undefined) {
      Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.precision! }, writer.uint32(50).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChartWidget_VisualizationSettings_Yaxis {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChartWidget_VisualizationSettings_Yaxis();
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

          message.title = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.min = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.max = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.unitFormat = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.precision = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChartWidget_VisualizationSettings_Yaxis {
    return {
      $type: ChartWidget_VisualizationSettings_Yaxis.$type,
      type: isSet(object.type) ? chartWidget_VisualizationSettings_YaxisTypeFromJSON(object.type) : 0,
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      min: isSet(object.min) ? globalThis.String(object.min) : "",
      max: isSet(object.max) ? globalThis.String(object.max) : "",
      unitFormat: isSet(object.unitFormat) ? unitFormatFromJSON(object.unitFormat) : 0,
      precision: isSet(object.precision) ? Number(object.precision) : undefined,
    };
  },

  toJSON(message: ChartWidget_VisualizationSettings_Yaxis): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = chartWidget_VisualizationSettings_YaxisTypeToJSON(message.type);
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.min !== "") {
      obj.min = message.min;
    }
    if (message.max !== "") {
      obj.max = message.max;
    }
    if (message.unitFormat !== 0) {
      obj.unitFormat = unitFormatToJSON(message.unitFormat);
    }
    if (message.precision !== undefined) {
      obj.precision = message.precision;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChartWidget_VisualizationSettings_Yaxis>, I>>(
    base?: I,
  ): ChartWidget_VisualizationSettings_Yaxis {
    return ChartWidget_VisualizationSettings_Yaxis.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChartWidget_VisualizationSettings_Yaxis>, I>>(
    object: I,
  ): ChartWidget_VisualizationSettings_Yaxis {
    const message = createBaseChartWidget_VisualizationSettings_Yaxis();
    message.type = object.type ?? 0;
    message.title = object.title ?? "";
    message.min = object.min ?? "";
    message.max = object.max ?? "";
    message.unitFormat = object.unitFormat ?? 0;
    message.precision = object.precision ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ChartWidget_VisualizationSettings_Yaxis.$type, ChartWidget_VisualizationSettings_Yaxis);

function createBaseChartWidget_VisualizationSettings_YaxisSettings(): ChartWidget_VisualizationSettings_YaxisSettings {
  return {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.YaxisSettings",
    left: undefined,
    right: undefined,
  };
}

export const ChartWidget_VisualizationSettings_YaxisSettings = {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.YaxisSettings" as const,

  encode(
    message: ChartWidget_VisualizationSettings_YaxisSettings,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.left !== undefined) {
      ChartWidget_VisualizationSettings_Yaxis.encode(message.left, writer.uint32(10).fork()).ldelim();
    }
    if (message.right !== undefined) {
      ChartWidget_VisualizationSettings_Yaxis.encode(message.right, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChartWidget_VisualizationSettings_YaxisSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChartWidget_VisualizationSettings_YaxisSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.left = ChartWidget_VisualizationSettings_Yaxis.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.right = ChartWidget_VisualizationSettings_Yaxis.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChartWidget_VisualizationSettings_YaxisSettings {
    return {
      $type: ChartWidget_VisualizationSettings_YaxisSettings.$type,
      left: isSet(object.left) ? ChartWidget_VisualizationSettings_Yaxis.fromJSON(object.left) : undefined,
      right: isSet(object.right) ? ChartWidget_VisualizationSettings_Yaxis.fromJSON(object.right) : undefined,
    };
  },

  toJSON(message: ChartWidget_VisualizationSettings_YaxisSettings): unknown {
    const obj: any = {};
    if (message.left !== undefined) {
      obj.left = ChartWidget_VisualizationSettings_Yaxis.toJSON(message.left);
    }
    if (message.right !== undefined) {
      obj.right = ChartWidget_VisualizationSettings_Yaxis.toJSON(message.right);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChartWidget_VisualizationSettings_YaxisSettings>, I>>(
    base?: I,
  ): ChartWidget_VisualizationSettings_YaxisSettings {
    return ChartWidget_VisualizationSettings_YaxisSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChartWidget_VisualizationSettings_YaxisSettings>, I>>(
    object: I,
  ): ChartWidget_VisualizationSettings_YaxisSettings {
    const message = createBaseChartWidget_VisualizationSettings_YaxisSettings();
    message.left = (object.left !== undefined && object.left !== null)
      ? ChartWidget_VisualizationSettings_Yaxis.fromPartial(object.left)
      : undefined;
    message.right = (object.right !== undefined && object.right !== null)
      ? ChartWidget_VisualizationSettings_Yaxis.fromPartial(object.right)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ChartWidget_VisualizationSettings_YaxisSettings.$type,
  ChartWidget_VisualizationSettings_YaxisSettings,
);

function createBaseChartWidget_SeriesOverrides(): ChartWidget_SeriesOverrides {
  return {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.SeriesOverrides",
    name: undefined,
    targetIndex: undefined,
    settings: undefined,
  };
}

export const ChartWidget_SeriesOverrides = {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.SeriesOverrides" as const,

  encode(message: ChartWidget_SeriesOverrides, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.targetIndex !== undefined) {
      writer.uint32(18).string(message.targetIndex);
    }
    if (message.settings !== undefined) {
      ChartWidget_SeriesOverrides_SeriesOverrideSettings.encode(message.settings, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChartWidget_SeriesOverrides {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChartWidget_SeriesOverrides();
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

          message.targetIndex = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.settings = ChartWidget_SeriesOverrides_SeriesOverrideSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChartWidget_SeriesOverrides {
    return {
      $type: ChartWidget_SeriesOverrides.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      targetIndex: isSet(object.targetIndex) ? globalThis.String(object.targetIndex) : undefined,
      settings: isSet(object.settings)
        ? ChartWidget_SeriesOverrides_SeriesOverrideSettings.fromJSON(object.settings)
        : undefined,
    };
  },

  toJSON(message: ChartWidget_SeriesOverrides): unknown {
    const obj: any = {};
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.targetIndex !== undefined) {
      obj.targetIndex = message.targetIndex;
    }
    if (message.settings !== undefined) {
      obj.settings = ChartWidget_SeriesOverrides_SeriesOverrideSettings.toJSON(message.settings);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChartWidget_SeriesOverrides>, I>>(base?: I): ChartWidget_SeriesOverrides {
    return ChartWidget_SeriesOverrides.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChartWidget_SeriesOverrides>, I>>(object: I): ChartWidget_SeriesOverrides {
    const message = createBaseChartWidget_SeriesOverrides();
    message.name = object.name ?? undefined;
    message.targetIndex = object.targetIndex ?? undefined;
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? ChartWidget_SeriesOverrides_SeriesOverrideSettings.fromPartial(object.settings)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ChartWidget_SeriesOverrides.$type, ChartWidget_SeriesOverrides);

function createBaseChartWidget_SeriesOverrides_SeriesOverrideSettings(): ChartWidget_SeriesOverrides_SeriesOverrideSettings {
  return {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.SeriesOverrides.SeriesOverrideSettings",
    name: "",
    color: "",
    type: 0,
    stackName: "",
    growDown: false,
    yaxisPosition: 0,
  };
}

export const ChartWidget_SeriesOverrides_SeriesOverrideSettings = {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.SeriesOverrides.SeriesOverrideSettings" as const,

  encode(
    message: ChartWidget_SeriesOverrides_SeriesOverrideSettings,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.color !== "") {
      writer.uint32(18).string(message.color);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.stackName !== "") {
      writer.uint32(34).string(message.stackName);
    }
    if (message.growDown === true) {
      writer.uint32(40).bool(message.growDown);
    }
    if (message.yaxisPosition !== 0) {
      writer.uint32(48).int32(message.yaxisPosition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChartWidget_SeriesOverrides_SeriesOverrideSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChartWidget_SeriesOverrides_SeriesOverrideSettings();
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

          message.color = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.stackName = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.growDown = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.yaxisPosition = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChartWidget_SeriesOverrides_SeriesOverrideSettings {
    return {
      $type: ChartWidget_SeriesOverrides_SeriesOverrideSettings.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      color: isSet(object.color) ? globalThis.String(object.color) : "",
      type: isSet(object.type) ? chartWidget_SeriesOverrides_SeriesVisualizationTypeFromJSON(object.type) : 0,
      stackName: isSet(object.stackName) ? globalThis.String(object.stackName) : "",
      growDown: isSet(object.growDown) ? globalThis.Boolean(object.growDown) : false,
      yaxisPosition: isSet(object.yaxisPosition)
        ? chartWidget_SeriesOverrides_YaxisPositionFromJSON(object.yaxisPosition)
        : 0,
    };
  },

  toJSON(message: ChartWidget_SeriesOverrides_SeriesOverrideSettings): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.color !== "") {
      obj.color = message.color;
    }
    if (message.type !== 0) {
      obj.type = chartWidget_SeriesOverrides_SeriesVisualizationTypeToJSON(message.type);
    }
    if (message.stackName !== "") {
      obj.stackName = message.stackName;
    }
    if (message.growDown === true) {
      obj.growDown = message.growDown;
    }
    if (message.yaxisPosition !== 0) {
      obj.yaxisPosition = chartWidget_SeriesOverrides_YaxisPositionToJSON(message.yaxisPosition);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChartWidget_SeriesOverrides_SeriesOverrideSettings>, I>>(
    base?: I,
  ): ChartWidget_SeriesOverrides_SeriesOverrideSettings {
    return ChartWidget_SeriesOverrides_SeriesOverrideSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChartWidget_SeriesOverrides_SeriesOverrideSettings>, I>>(
    object: I,
  ): ChartWidget_SeriesOverrides_SeriesOverrideSettings {
    const message = createBaseChartWidget_SeriesOverrides_SeriesOverrideSettings();
    message.name = object.name ?? "";
    message.color = object.color ?? "";
    message.type = object.type ?? 0;
    message.stackName = object.stackName ?? "";
    message.growDown = object.growDown ?? false;
    message.yaxisPosition = object.yaxisPosition ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  ChartWidget_SeriesOverrides_SeriesOverrideSettings.$type,
  ChartWidget_SeriesOverrides_SeriesOverrideSettings,
);

function createBaseChartWidget_NameHidingSettings(): ChartWidget_NameHidingSettings {
  return { $type: "yandex.cloud.monitoring.v3.ChartWidget.NameHidingSettings", positive: false, names: [] };
}

export const ChartWidget_NameHidingSettings = {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.NameHidingSettings" as const,

  encode(message: ChartWidget_NameHidingSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.positive === true) {
      writer.uint32(8).bool(message.positive);
    }
    for (const v of message.names) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChartWidget_NameHidingSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChartWidget_NameHidingSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.positive = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.names.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChartWidget_NameHidingSettings {
    return {
      $type: ChartWidget_NameHidingSettings.$type,
      positive: isSet(object.positive) ? globalThis.Boolean(object.positive) : false,
      names: globalThis.Array.isArray(object?.names) ? object.names.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: ChartWidget_NameHidingSettings): unknown {
    const obj: any = {};
    if (message.positive === true) {
      obj.positive = message.positive;
    }
    if (message.names?.length) {
      obj.names = message.names;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChartWidget_NameHidingSettings>, I>>(base?: I): ChartWidget_NameHidingSettings {
    return ChartWidget_NameHidingSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChartWidget_NameHidingSettings>, I>>(
    object: I,
  ): ChartWidget_NameHidingSettings {
    const message = createBaseChartWidget_NameHidingSettings();
    message.positive = object.positive ?? false;
    message.names = object.names?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(ChartWidget_NameHidingSettings.$type, ChartWidget_NameHidingSettings);

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
