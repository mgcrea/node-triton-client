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

export interface ModelOutput {
  name?: string;
  dataType?: _inference_DataType;
  dims?: (number | string | Long)[];
  labelFilename?: string;
  reshape?: _inference_ModelTensorReshape | null;
  isShapeTensor?: boolean;
}

export interface ModelOutput__Output {
  name: string;
  dataType: _inference_DataType__Output;
  dims: string[];
  labelFilename: string;
  reshape: _inference_ModelTensorReshape__Output | null;
  isShapeTensor: boolean;
}
