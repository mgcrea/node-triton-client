// Original file: proto/grpc_service.proto

import type {
  StatisticDuration as _inference_StatisticDuration,
  StatisticDuration__Output as _inference_StatisticDuration__Output,
} from "../inference/StatisticDuration";

/**
 * @@
 * @@.. cpp:var:: message InferResponseStatistics
 * @@
 * @@   Statistics per response.
 * @@
 */
export interface InferResponseStatistics {
  /**
   * @@  .. cpp:var:: StatisticDuration compute_infer
   * @@
   * @@     The count and cumulative duration to compute a response.
   * @@
   */
  computeInfer?: _inference_StatisticDuration | null;
  /**
   * @@  .. cpp:var:: StatisticDuration compute_output
   * @@
   * @@     The count and cumulative duration to extract the output tensors of a
   * @@     response.
   * @@
   */
  computeOutput?: _inference_StatisticDuration | null;
  /**
   * @@  .. cpp:var:: StatisticDuration success
   * @@
   * @@     The count and cumulative duration for successful responses.
   * @@
   */
  success?: _inference_StatisticDuration | null;
  /**
   * @@  .. cpp:var:: StatisticDuration fail
   * @@
   * @@     The count and cumulative duration for failed responses.
   * @@
   */
  fail?: _inference_StatisticDuration | null;
  /**
   * @@  .. cpp:var:: StatisticDuration empty_response
   * @@
   * @@     The count and cumulative duration for empty responses.
   * @@
   */
  emptyResponse?: _inference_StatisticDuration | null;
  /**
   * @@  .. cpp:var:: StatisticDuration cancel
   * @@
   * @@     The count and cumulative duration, for cleaning up resources held by
   * @@     a cancelled request, for cancelled responses.
   * @@
   */
  cancel?: _inference_StatisticDuration | null;
}

/**
 * @@
 * @@.. cpp:var:: message InferResponseStatistics
 * @@
 * @@   Statistics per response.
 * @@
 */
export interface InferResponseStatistics__Output {
  /**
   * @@  .. cpp:var:: StatisticDuration compute_infer
   * @@
   * @@     The count and cumulative duration to compute a response.
   * @@
   */
  computeInfer: _inference_StatisticDuration__Output | null;
  /**
   * @@  .. cpp:var:: StatisticDuration compute_output
   * @@
   * @@     The count and cumulative duration to extract the output tensors of a
   * @@     response.
   * @@
   */
  computeOutput: _inference_StatisticDuration__Output | null;
  /**
   * @@  .. cpp:var:: StatisticDuration success
   * @@
   * @@     The count and cumulative duration for successful responses.
   * @@
   */
  success: _inference_StatisticDuration__Output | null;
  /**
   * @@  .. cpp:var:: StatisticDuration fail
   * @@
   * @@     The count and cumulative duration for failed responses.
   * @@
   */
  fail: _inference_StatisticDuration__Output | null;
  /**
   * @@  .. cpp:var:: StatisticDuration empty_response
   * @@
   * @@     The count and cumulative duration for empty responses.
   * @@
   */
  emptyResponse: _inference_StatisticDuration__Output | null;
  /**
   * @@  .. cpp:var:: StatisticDuration cancel
   * @@
   * @@     The count and cumulative duration, for cleaning up resources held by
   * @@     a cancelled request, for cancelled responses.
   * @@
   */
  cancel: _inference_StatisticDuration__Output | null;
}
