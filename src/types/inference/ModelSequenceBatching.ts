// Original file: proto/model_config.proto

import type { Long } from "@grpc/proto-loader";
import type {
  DataType as _inference_DataType,
  DataType__Output as _inference_DataType__Output,
} from "../inference/DataType";

export interface _inference_ModelSequenceBatching_Control {
  kind?: _inference_ModelSequenceBatching_Control_Kind;
  int32FalseTrue?: number[];
  fp32FalseTrue?: (number | string)[];
  boolFalseTrue?: boolean[];
  dataType?: _inference_DataType;
}

export interface _inference_ModelSequenceBatching_Control__Output {
  kind: _inference_ModelSequenceBatching_Control_Kind__Output;
  int32FalseTrue: number[];
  fp32FalseTrue: number[];
  boolFalseTrue: boolean[];
  dataType: _inference_DataType__Output;
}

export interface _inference_ModelSequenceBatching_ControlInput {
  name?: string;
  control?: _inference_ModelSequenceBatching_Control[];
}

export interface _inference_ModelSequenceBatching_ControlInput__Output {
  name: string;
  control: _inference_ModelSequenceBatching_Control__Output[];
}

export interface _inference_ModelSequenceBatching_InitialState {
  dataType?: _inference_DataType;
  dims?: (number | string | Long)[];
  zeroData?: boolean;
  dataFile?: string;
  name?: string;
  stateData?: "zeroData" | "dataFile";
}

export interface _inference_ModelSequenceBatching_InitialState__Output {
  dataType: _inference_DataType__Output;
  dims: string[];
  zeroData?: boolean;
  dataFile?: string;
  name: string;
  stateData: "zeroData" | "dataFile";
}

// Original file: proto/model_config.proto

export const _inference_ModelSequenceBatching_Control_Kind = {
  CONTROL_SEQUENCE_START: "CONTROL_SEQUENCE_START",
  CONTROL_SEQUENCE_READY: "CONTROL_SEQUENCE_READY",
  CONTROL_SEQUENCE_END: "CONTROL_SEQUENCE_END",
  CONTROL_SEQUENCE_CORRID: "CONTROL_SEQUENCE_CORRID",
} as const;

export type _inference_ModelSequenceBatching_Control_Kind =
  | "CONTROL_SEQUENCE_START"
  | 0
  | "CONTROL_SEQUENCE_READY"
  | 1
  | "CONTROL_SEQUENCE_END"
  | 2
  | "CONTROL_SEQUENCE_CORRID"
  | 3;

export type _inference_ModelSequenceBatching_Control_Kind__Output =
  (typeof _inference_ModelSequenceBatching_Control_Kind)[keyof typeof _inference_ModelSequenceBatching_Control_Kind];

export interface _inference_ModelSequenceBatching_State {
  inputName?: string;
  outputName?: string;
  dataType?: _inference_DataType;
  dims?: (number | string | Long)[];
  initialState?: _inference_ModelSequenceBatching_InitialState[];
  useSameBufferForInputOutput?: boolean;
  useGrowableMemory?: boolean;
}

export interface _inference_ModelSequenceBatching_State__Output {
  inputName: string;
  outputName: string;
  dataType: _inference_DataType__Output;
  dims: string[];
  initialState: _inference_ModelSequenceBatching_InitialState__Output[];
  useSameBufferForInputOutput: boolean;
  useGrowableMemory: boolean;
}

export interface _inference_ModelSequenceBatching_StrategyDirect {
  maxQueueDelayMicroseconds?: number | string | Long;
  minimumSlotUtilization?: number | string;
}

export interface _inference_ModelSequenceBatching_StrategyDirect__Output {
  maxQueueDelayMicroseconds: string;
  minimumSlotUtilization: number;
}

export interface _inference_ModelSequenceBatching_StrategyOldest {
  maxCandidateSequences?: number;
  preferredBatchSize?: number[];
  maxQueueDelayMicroseconds?: number | string | Long;
  preserveOrdering?: boolean;
}

export interface _inference_ModelSequenceBatching_StrategyOldest__Output {
  maxCandidateSequences: number;
  preferredBatchSize: number[];
  maxQueueDelayMicroseconds: string;
  preserveOrdering: boolean;
}

export interface ModelSequenceBatching {
  maxSequenceIdleMicroseconds?: number | string | Long;
  controlInput?: _inference_ModelSequenceBatching_ControlInput[];
  direct?: _inference_ModelSequenceBatching_StrategyDirect | null;
  oldest?: _inference_ModelSequenceBatching_StrategyOldest | null;
  state?: _inference_ModelSequenceBatching_State[];
  iterativeSequence?: boolean;
  strategyChoice?: "direct" | "oldest";
}

export interface ModelSequenceBatching__Output {
  maxSequenceIdleMicroseconds: string;
  controlInput: _inference_ModelSequenceBatching_ControlInput__Output[];
  direct?: _inference_ModelSequenceBatching_StrategyDirect__Output | null;
  oldest?: _inference_ModelSequenceBatching_StrategyOldest__Output | null;
  state: _inference_ModelSequenceBatching_State__Output[];
  iterativeSequence: boolean;
  strategyChoice: "direct" | "oldest";
}
