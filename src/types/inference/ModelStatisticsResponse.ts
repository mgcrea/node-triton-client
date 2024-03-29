// Original file: proto/grpc_service.proto

import type {
  ModelStatistics as _inference_ModelStatistics,
  ModelStatistics__Output as _inference_ModelStatistics__Output,
} from "../inference/ModelStatistics";

/**
 * @@
 * @@.. cpp:var:: message ModelStatisticsResponse
 * @@
 * @@   Response message for ModelStatistics.
 * @@
 */
export interface ModelStatisticsResponse {
  /**
   * @@  .. cpp:var:: ModelStatistics model_stats (repeated)
   * @@
   * @@     Statistics for each requested model.
   * @@
   */
  modelStats?: _inference_ModelStatistics[];
}

/**
 * @@
 * @@.. cpp:var:: message ModelStatisticsResponse
 * @@
 * @@   Response message for ModelStatistics.
 * @@
 */
export interface ModelStatisticsResponse__Output {
  /**
   * @@  .. cpp:var:: ModelStatistics model_stats (repeated)
   * @@
   * @@     Statistics for each requested model.
   * @@
   */
  modelStats: _inference_ModelStatistics__Output[];
}
