// Original file: proto/model_config.proto

import type { Long } from "@grpc/proto-loader";
import type {
  DataType as _inference_DataType,
  DataType__Output as _inference_DataType__Output,
} from "../inference/DataType";

export interface _inference_ModelWarmup_Input {
  dataType?: _inference_DataType;
  dims?: (number | string | Long)[];
  zeroData?: boolean;
  randomData?: boolean;
  inputDataFile?: string;
  inputDataType?: "zeroData" | "randomData" | "inputDataFile";
}

export interface _inference_ModelWarmup_Input__Output {
  dataType: _inference_DataType__Output;
  dims: string[];
  zeroData?: boolean;
  randomData?: boolean;
  inputDataFile?: string;
  inputDataType: "zeroData" | "randomData" | "inputDataFile";
}

export interface ModelWarmup {
  name?: string;
  batchSize?: number;
  inputs?: { [key: string]: _inference_ModelWarmup_Input };
  count?: number;
}

export interface ModelWarmup__Output {
  name: string;
  batchSize: number;
  inputs: { [key: string]: _inference_ModelWarmup_Input__Output };
  count: number;
}
