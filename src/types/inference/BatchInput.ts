// Original file: proto/model_config.proto

import type {
  DataType as _inference_DataType,
  DataType__Output as _inference_DataType__Output,
} from "../inference/DataType";

// Original file: proto/model_config.proto

export const _inference_BatchInput_Kind = {
  BATCH_ELEMENT_COUNT: "BATCH_ELEMENT_COUNT",
  BATCH_ACCUMULATED_ELEMENT_COUNT: "BATCH_ACCUMULATED_ELEMENT_COUNT",
  BATCH_ACCUMULATED_ELEMENT_COUNT_WITH_ZERO: "BATCH_ACCUMULATED_ELEMENT_COUNT_WITH_ZERO",
  BATCH_MAX_ELEMENT_COUNT_AS_SHAPE: "BATCH_MAX_ELEMENT_COUNT_AS_SHAPE",
  BATCH_ITEM_SHAPE: "BATCH_ITEM_SHAPE",
  BATCH_ITEM_SHAPE_FLATTEN: "BATCH_ITEM_SHAPE_FLATTEN",
} as const;

export type _inference_BatchInput_Kind =
  | "BATCH_ELEMENT_COUNT"
  | 0
  | "BATCH_ACCUMULATED_ELEMENT_COUNT"
  | 1
  | "BATCH_ACCUMULATED_ELEMENT_COUNT_WITH_ZERO"
  | 2
  | "BATCH_MAX_ELEMENT_COUNT_AS_SHAPE"
  | 3
  | "BATCH_ITEM_SHAPE"
  | 4
  | "BATCH_ITEM_SHAPE_FLATTEN"
  | 5;

export type _inference_BatchInput_Kind__Output =
  (typeof _inference_BatchInput_Kind)[keyof typeof _inference_BatchInput_Kind];

export interface BatchInput {
  kind?: _inference_BatchInput_Kind;
  targetName?: string[];
  dataType?: _inference_DataType;
  sourceInput?: string[];
}

export interface BatchInput__Output {
  kind: _inference_BatchInput_Kind__Output;
  targetName: string[];
  dataType: _inference_DataType__Output;
  sourceInput: string[];
}
