// Original file: proto/grpc_service.proto

import type { Long } from "@grpc/proto-loader";
import type {
  InferBatchStatistics as _inference_InferBatchStatistics,
  InferBatchStatistics__Output as _inference_InferBatchStatistics__Output,
} from "../inference/InferBatchStatistics";
import type {
  InferResponseStatistics as _inference_InferResponseStatistics,
  InferResponseStatistics__Output as _inference_InferResponseStatistics__Output,
} from "../inference/InferResponseStatistics";
import type {
  InferStatistics as _inference_InferStatistics,
  InferStatistics__Output as _inference_InferStatistics__Output,
} from "../inference/InferStatistics";
import type {
  MemoryUsage as _inference_MemoryUsage,
  MemoryUsage__Output as _inference_MemoryUsage__Output,
} from "../inference/MemoryUsage";

/**
 * @@
 * @@.. cpp:var:: message ModelStatistics
 * @@
 * @@   Statistics for a specific model and version.
 * @@
 */
export interface ModelStatistics {
  /**
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the model. If not given returns statistics for all
   * @@
   */
  name?: string;
  /**
   * @@  .. cpp:var:: string version
   * @@
   * @@     The version of the model.
   * @@
   */
  version?: string;
  /**
   * @@  .. cpp:var:: uint64 last_inference
   * @@
   * @@     The timestamp of the last inference request made for this model,
   * @@     as milliseconds since the epoch.
   * @@
   */
  lastInference?: number | string | Long;
  /**
   * @@  .. cpp:var:: uint64 last_inference
   * @@
   * @@     The cumulative count of successful inference requests made for this
   * @@     model. Each inference in a batched request is counted as an
   * @@     individual inference. For example, if a client sends a single
   * @@     inference request with batch size 64, "inference_count" will be
   * @@     incremented by 64. Similarly, if a clients sends 64 individual
   * @@     requests each with batch size 1, "inference_count" will be
   * @@     incremented by 64. The "inference_count" value DOES NOT include
   * @@     cache hits.
   * @@
   */
  inferenceCount?: number | string | Long;
  /**
   * @@  .. cpp:var:: uint64 last_inference
   * @@
   * @@     The cumulative count of the number of successful inference executions
   * @@     performed for the model. When dynamic batching is enabled, a single
   * @@     model execution can perform inferencing for more than one inference
   * @@     request. For example, if a clients sends 64 individual requests each
   * @@     with batch size 1 and the dynamic batcher batches them into a single
   * @@     large batch for model execution then "execution_count" will be
   * @@     incremented by 1. If, on the other hand, the dynamic batcher is not
   * @@     enabled for that each of the 64 individual requests is executed
   * @@     independently, then "execution_count" will be incremented by 64.
   * @@     The "execution_count" value DOES NOT include cache hits.
   * @@
   */
  executionCount?: number | string | Long;
  /**
   * @@  .. cpp:var:: InferStatistics inference_stats
   * @@
   * @@     The aggregate statistics for the model/version.
   * @@
   */
  inferenceStats?: _inference_InferStatistics | null;
  /**
   * @@  .. cpp:var:: InferBatchStatistics batch_stats (repeated)
   * @@
   * @@     The aggregate statistics for each different batch size that is
   * @@     executed in the model. The batch statistics indicate how many actual
   * @@     model executions were performed and show differences due to different
   * @@     batch size (for example, larger batches typically take longer to
   * @@     compute).
   * @@
   */
  batchStats?: _inference_InferBatchStatistics[];
  /**
   * @@  .. cpp:var:: MemoryUsage memory_usage (repeated)
   * @@
   * @@     The memory usage detected during model loading, which may be used to
   * @@     estimate the memory to be released once the model is unloaded. Note
   * @@     that the estimation is inferenced by the profiling tools and
   * @@     framework's memory schema, therefore it is advised to perform
   * @@     experiments to understand the scenario that the reported memory usage
   * @@     can be relied on. As a starting point, the GPU memory usage for
   * @@     models in ONNX Runtime backend and TensorRT backend is usually
   * @@     aligned.
   * @@
   */
  memoryUsage?: _inference_MemoryUsage[];
  /**
   * @@  .. cpp:var:: map<string, InferResponseStatistics> response_stats
   * @@
   * @@     The key and value pairs for all responses statistics. The key is a
   * @@     string identifying a set of response statistics aggregated together
   * @@     (i.e. index of the response sent). The value is the aggregated
   * @@     response statistics.
   * @@
   */
  responseStats?: { [key: string]: _inference_InferResponseStatistics };
}

/**
 * @@
 * @@.. cpp:var:: message ModelStatistics
 * @@
 * @@   Statistics for a specific model and version.
 * @@
 */
export interface ModelStatistics__Output {
  /**
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the model. If not given returns statistics for all
   * @@
   */
  name: string;
  /**
   * @@  .. cpp:var:: string version
   * @@
   * @@     The version of the model.
   * @@
   */
  version: string;
  /**
   * @@  .. cpp:var:: uint64 last_inference
   * @@
   * @@     The timestamp of the last inference request made for this model,
   * @@     as milliseconds since the epoch.
   * @@
   */
  lastInference: string;
  /**
   * @@  .. cpp:var:: uint64 last_inference
   * @@
   * @@     The cumulative count of successful inference requests made for this
   * @@     model. Each inference in a batched request is counted as an
   * @@     individual inference. For example, if a client sends a single
   * @@     inference request with batch size 64, "inference_count" will be
   * @@     incremented by 64. Similarly, if a clients sends 64 individual
   * @@     requests each with batch size 1, "inference_count" will be
   * @@     incremented by 64. The "inference_count" value DOES NOT include
   * @@     cache hits.
   * @@
   */
  inferenceCount: string;
  /**
   * @@  .. cpp:var:: uint64 last_inference
   * @@
   * @@     The cumulative count of the number of successful inference executions
   * @@     performed for the model. When dynamic batching is enabled, a single
   * @@     model execution can perform inferencing for more than one inference
   * @@     request. For example, if a clients sends 64 individual requests each
   * @@     with batch size 1 and the dynamic batcher batches them into a single
   * @@     large batch for model execution then "execution_count" will be
   * @@     incremented by 1. If, on the other hand, the dynamic batcher is not
   * @@     enabled for that each of the 64 individual requests is executed
   * @@     independently, then "execution_count" will be incremented by 64.
   * @@     The "execution_count" value DOES NOT include cache hits.
   * @@
   */
  executionCount: string;
  /**
   * @@  .. cpp:var:: InferStatistics inference_stats
   * @@
   * @@     The aggregate statistics for the model/version.
   * @@
   */
  inferenceStats: _inference_InferStatistics__Output | null;
  /**
   * @@  .. cpp:var:: InferBatchStatistics batch_stats (repeated)
   * @@
   * @@     The aggregate statistics for each different batch size that is
   * @@     executed in the model. The batch statistics indicate how many actual
   * @@     model executions were performed and show differences due to different
   * @@     batch size (for example, larger batches typically take longer to
   * @@     compute).
   * @@
   */
  batchStats: _inference_InferBatchStatistics__Output[];
  /**
   * @@  .. cpp:var:: MemoryUsage memory_usage (repeated)
   * @@
   * @@     The memory usage detected during model loading, which may be used to
   * @@     estimate the memory to be released once the model is unloaded. Note
   * @@     that the estimation is inferenced by the profiling tools and
   * @@     framework's memory schema, therefore it is advised to perform
   * @@     experiments to understand the scenario that the reported memory usage
   * @@     can be relied on. As a starting point, the GPU memory usage for
   * @@     models in ONNX Runtime backend and TensorRT backend is usually
   * @@     aligned.
   * @@
   */
  memoryUsage: _inference_MemoryUsage__Output[];
  /**
   * @@  .. cpp:var:: map<string, InferResponseStatistics> response_stats
   * @@
   * @@     The key and value pairs for all responses statistics. The key is a
   * @@     string identifying a set of response statistics aggregated together
   * @@     (i.e. index of the response sent). The value is the aggregated
   * @@     response statistics.
   * @@
   */
  responseStats: { [key: string]: _inference_InferResponseStatistics__Output };
}
