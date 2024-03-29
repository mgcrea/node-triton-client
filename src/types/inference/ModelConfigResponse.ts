// Original file: proto/grpc_service.proto

import type {
  ModelConfig as _inference_ModelConfig,
  ModelConfig__Output as _inference_ModelConfig__Output,
} from "../inference/ModelConfig";

/**
 * @@
 * @@.. cpp:var:: message ModelConfigResponse
 * @@
 * @@   Response message for ModelConfig.
 * @@
 */
export interface ModelConfigResponse {
  /**
   * @@
   * @@  .. cpp:var:: ModelConfig config
   * @@
   * @@     The model configuration.
   * @@
   */
  config?: _inference_ModelConfig | null;
}

/**
 * @@
 * @@.. cpp:var:: message ModelConfigResponse
 * @@
 * @@   Response message for ModelConfig.
 * @@
 */
export interface ModelConfigResponse__Output {
  /**
   * @@
   * @@  .. cpp:var:: ModelConfig config
   * @@
   * @@     The model configuration.
   * @@
   */
  config: _inference_ModelConfig__Output | null;
}
