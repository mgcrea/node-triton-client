// Original file: proto/grpc_service.proto

import type {
  ModelInferResponse as _inference_ModelInferResponse,
  ModelInferResponse__Output as _inference_ModelInferResponse__Output,
} from "../inference/ModelInferResponse";

/**
 * @@
 * @@.. cpp:var:: message ModelStreamInferResponse
 * @@
 * @@   Response message for ModelStreamInfer.
 * @@
 */
export interface ModelStreamInferResponse {
  /**
   * @@
   * @@  .. cpp:var:: string error_message
   * @@
   * @@     The message describing the error. The empty message
   * @@     indicates the inference was successful without errors.
   * @@
   */
  errorMessage?: string;
  /**
   * @@
   * @@  .. cpp:var:: ModelInferResponse infer_response
   * @@
   * @@     Holds the results of the request.
   * @@
   */
  inferResponse?: _inference_ModelInferResponse | null;
}

/**
 * @@
 * @@.. cpp:var:: message ModelStreamInferResponse
 * @@
 * @@   Response message for ModelStreamInfer.
 * @@
 */
export interface ModelStreamInferResponse__Output {
  /**
   * @@
   * @@  .. cpp:var:: string error_message
   * @@
   * @@     The message describing the error. The empty message
   * @@     indicates the inference was successful without errors.
   * @@
   */
  errorMessage: string;
  /**
   * @@
   * @@  .. cpp:var:: ModelInferResponse infer_response
   * @@
   * @@     Holds the results of the request.
   * @@
   */
  inferResponse: _inference_ModelInferResponse__Output | null;
}
