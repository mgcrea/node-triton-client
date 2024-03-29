// Original file: proto/grpc_service.proto

import type {
  ModelInferResponse as _inference_ModelInferResponse,
  ModelInferResponse__Output as _inference_ModelInferResponse__Output,
} from "../inference/ModelInferResponse";

export interface ModelStreamInferResponse {
  errorMessage?: string;
  inferResponse?: _inference_ModelInferResponse | null;
}

export interface ModelStreamInferResponse__Output {
  errorMessage: string;
  inferResponse: _inference_ModelInferResponse__Output | null;
}
