// Original file: proto/model_config.proto

import type { Long } from "@grpc/proto-loader";
import type {
  DataType as _inference_DataType,
  DataType__Output as _inference_DataType__Output,
} from "../inference/DataType";
import type {
  ModelTensorReshape as _inference_ModelTensorReshape,
  ModelTensorReshape__Output as _inference_ModelTensorReshape__Output,
} from "../inference/ModelTensorReshape";

// Original file: proto/model_config.proto

export const _inference_ModelInput_Format = {
  FORMAT_NONE: "FORMAT_NONE",
  FORMAT_NHWC: "FORMAT_NHWC",
  FORMAT_NCHW: "FORMAT_NCHW",
} as const;

export type _inference_ModelInput_Format =
  | "FORMAT_NONE"
  | 0
  | "FORMAT_NHWC"
  | 1
  | "FORMAT_NCHW"
  | 2;

export type _inference_ModelInput_Format__Output =
  (typeof _inference_ModelInput_Format)[keyof typeof _inference_ModelInput_Format];

export interface ModelInput {
  name?: string;
  dataType?: _inference_DataType;
  format?: _inference_ModelInput_Format;
  dims?: (number | string | Long)[];
  reshape?: _inference_ModelTensorReshape | null;
  isShapeTensor?: boolean;
  allowRaggedBatch?: boolean;
  optional?: boolean;
}

export interface ModelInput__Output {
  name: string;
  dataType: _inference_DataType__Output;
  format: _inference_ModelInput_Format__Output;
  dims: string[];
  reshape: _inference_ModelTensorReshape__Output | null;
  isShapeTensor: boolean;
  allowRaggedBatch: boolean;
  optional: boolean;
}
