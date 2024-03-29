// Original file: proto/grpc_service.proto

import type {
  ModelConfig as _inference_ModelConfig,
  ModelConfig__Output as _inference_ModelConfig__Output,
} from "../inference/ModelConfig";

export interface ModelConfigResponse {
  config?: _inference_ModelConfig | null;
}

export interface ModelConfigResponse__Output {
  config: _inference_ModelConfig__Output | null;
}
