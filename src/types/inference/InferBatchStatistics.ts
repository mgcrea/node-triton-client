// Original file: proto/grpc_service.proto

import type { Long } from "@grpc/proto-loader";
import type {
  StatisticDuration as _inference_StatisticDuration,
  StatisticDuration__Output as _inference_StatisticDuration__Output,
} from "../inference/StatisticDuration";

/**
 * @@
 * @@.. cpp:var:: message InferBatchStatistics
 * @@
 * @@   Inference batch statistics.
 * @@
 */
export interface InferBatchStatistics {
  /**
   * @@  .. cpp:var:: uint64 batch_size
   * @@
   * @@     The size of the batch.
   * @@
   */
  batchSize?: number | string | Long;
  /**
   * @@  .. cpp:var:: StatisticDuration compute_input
   * @@
   * @@     The count and cumulative duration to prepare input tensor data as
   * @@     required by the model framework / backend with the given batch size.
   * @@     For example, this duration should include the time to copy input
   * @@     tensor data to the GPU.
   * @@
   */
  computeInput?: _inference_StatisticDuration | null;
  /**
   * @@  .. cpp:var:: StatisticDuration compute_infer
   * @@
   * @@     The count and cumulative duration to execute the model with the given
   * @@     batch size.
   * @@
   */
  computeInfer?: _inference_StatisticDuration | null;
  /**
   * @@  .. cpp:var:: StatisticDuration compute_output
   * @@
   * @@     The count and cumulative duration to extract output tensor data
   * @@     produced by the model framework / backend with the given batch size.
   * @@     For example, this duration should include the time to copy output
   * @@     tensor data from the GPU.
   * @@
   */
  computeOutput?: _inference_StatisticDuration | null;
}

/**
 * @@
 * @@.. cpp:var:: message InferBatchStatistics
 * @@
 * @@   Inference batch statistics.
 * @@
 */
export interface InferBatchStatistics__Output {
  /**
   * @@  .. cpp:var:: uint64 batch_size
   * @@
   * @@     The size of the batch.
   * @@
   */
  batchSize: string;
  /**
   * @@  .. cpp:var:: StatisticDuration compute_input
   * @@
   * @@     The count and cumulative duration to prepare input tensor data as
   * @@     required by the model framework / backend with the given batch size.
   * @@     For example, this duration should include the time to copy input
   * @@     tensor data to the GPU.
   * @@
   */
  computeInput: _inference_StatisticDuration__Output | null;
  /**
   * @@  .. cpp:var:: StatisticDuration compute_infer
   * @@
   * @@     The count and cumulative duration to execute the model with the given
   * @@     batch size.
   * @@
   */
  computeInfer: _inference_StatisticDuration__Output | null;
  /**
   * @@  .. cpp:var:: StatisticDuration compute_output
   * @@
   * @@     The count and cumulative duration to extract output tensor data
   * @@     produced by the model framework / backend with the given batch size.
   * @@     For example, this duration should include the time to copy output
   * @@     tensor data from the GPU.
   * @@
   */
  computeOutput: _inference_StatisticDuration__Output | null;
}
