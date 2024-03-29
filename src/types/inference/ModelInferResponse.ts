// Original file: proto/grpc_service.proto

import type { Long } from "@grpc/proto-loader";
import type {
  InferParameter as _inference_InferParameter,
  InferParameter__Output as _inference_InferParameter__Output,
} from "../inference/InferParameter";
import type {
  InferTensorContents as _inference_InferTensorContents,
  InferTensorContents__Output as _inference_InferTensorContents__Output,
} from "../inference/InferTensorContents";

export interface _inference_ModelInferResponse_InferOutputTensor {
  name?: string;
  datatype?: string;
  shape?: (number | string | Long)[];
  parameters?: { [key: string]: _inference_InferParameter };
  contents?: _inference_InferTensorContents | null;
}

export interface _inference_ModelInferResponse_InferOutputTensor__Output {
  name: string;
  datatype: string;
  shape: string[];
  parameters: { [key: string]: _inference_InferParameter__Output };
  contents: _inference_InferTensorContents__Output | null;
}

export interface ModelInferResponse {
  modelName?: string;
  modelVersion?: string;
  id?: string;
  parameters?: { [key: string]: _inference_InferParameter };
  outputs?: _inference_ModelInferResponse_InferOutputTensor[];
  rawOutputContents?: (Buffer | Uint8Array | string)[];
}

export interface ModelInferResponse__Output {
  modelName: string;
  modelVersion: string;
  id: string;
  parameters: { [key: string]: _inference_InferParameter__Output };
  outputs: _inference_ModelInferResponse_InferOutputTensor__Output[];
  rawOutputContents: Buffer[];
}
