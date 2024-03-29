// Original file: proto/grpc_service.proto

import type {
  StatisticDuration as _inference_StatisticDuration,
  StatisticDuration__Output as _inference_StatisticDuration__Output,
} from "../inference/StatisticDuration";

/**
 * @@
 * @@.. cpp:var:: message InferStatistics
 * @@
 * @@   Inference statistics.
 * @@
 */
export interface InferStatistics {
  /**
   * @@  .. cpp:var:: StatisticDuration success
   * @@
   * @@     Cumulative count and duration for successful inference
   * @@     request. The "success" count and cumulative duration includes
   * @@     cache hits.
   * @@
   */
  success?: _inference_StatisticDuration | null;
  /**
   * @@  .. cpp:var:: StatisticDuration fail
   * @@
   * @@     Cumulative count and duration for failed inference
   * @@     request.
   * @@
   */
  fail?: _inference_StatisticDuration | null;
  /**
   * @@  .. cpp:var:: StatisticDuration queue
   * @@
   * @@     The count and cumulative duration that inference requests wait in
   * @@     scheduling or other queues. The "queue" count and cumulative
   * @@     duration includes cache hits.
   * @@
   */
  queue?: _inference_StatisticDuration | null;
  /**
   * @@  .. cpp:var:: StatisticDuration compute_input
   * @@
   * @@     The count and cumulative duration to prepare input tensor data as
   * @@     required by the model framework / backend. For example, this duration
   * @@     should include the time to copy input tensor data to the GPU.
   * @@     The "compute_input" count and cumulative duration do not account for
   * @@     requests that were a cache hit. See the "cache_hit" field for more
   * @@     info.
   * @@
   */
  computeInput?: _inference_StatisticDuration | null;
  /**
   * @@  .. cpp:var:: StatisticDuration compute_infer
   * @@
   * @@     The count and cumulative duration to execute the model.
   * @@     The "compute_infer" count and cumulative duration do not account for
   * @@     requests that were a cache hit. See the "cache_hit" field for more
   * @@     info.
   * @@
   */
  computeInfer?: _inference_StatisticDuration | null;
  /**
   * @@  .. cpp:var:: StatisticDuration compute_output
   * @@
   * @@     The count and cumulative duration to extract output tensor data
   * @@     produced by the model framework / backend. For example, this duration
   * @@     should include the time to copy output tensor data from the GPU.
   * @@     The "compute_output" count and cumulative duration do not account for
   * @@     requests that were a cache hit. See the "cache_hit" field for more
   * @@     info.
   * @@
   */
  computeOutput?: _inference_StatisticDuration | null;
  /**
   * @@  .. cpp:var:: StatisticDuration cache_hit
   * @@
   * @@     The count of response cache hits and cumulative duration to lookup
   * @@     and extract output tensor data from the Response Cache on a cache
   * @@     hit. For example, this duration should include the time to copy
   * @@     output tensor data from the Response Cache to the response object.
   * @@     On cache hits, triton does not need to go to the model/backend
   * @@     for the output tensor data, so the "compute_input", "compute_infer",
   * @@     and "compute_output" fields are not updated. Assuming the response
   * @@     cache is enabled for a given model, a cache hit occurs for a
   * @@     request to that model when the request metadata (model name,
   * @@     model version, model inputs) hashes to an existing entry in the
   * @@     cache. On a cache miss, the request hash and response output tensor
   * @@     data is added to the cache. See response cache docs for more info:
   * @@
   * https://github.com/triton-inference-server/server/blob/main/docs/response_cache.md
   * @@
   */
  cacheHit?: _inference_StatisticDuration | null;
  /**
   * @@  .. cpp:var:: StatisticDuration cache_miss
   * @@
   * @@     The count of response cache misses and cumulative duration to lookup
   * @@     and insert output tensor data from the computed response to the
   * cache.
   * @@     For example, this duration should include the time to copy
   * @@     output tensor data from the response object to the Response Cache.
   * @@     Assuming the response cache is enabled for a given model, a cache
   * @@     miss occurs for a request to that model when the request metadata
   * @@     does NOT hash to an existing entry in the cache. See the response
   * @@     cache docs for more info:
   * @@
   * https://github.com/triton-inference-server/server/blob/main/docs/response_cache.md
   * @@
   */
  cacheMiss?: _inference_StatisticDuration | null;
}

/**
 * @@
 * @@.. cpp:var:: message InferStatistics
 * @@
 * @@   Inference statistics.
 * @@
 */
export interface InferStatistics__Output {
  /**
   * @@  .. cpp:var:: StatisticDuration success
   * @@
   * @@     Cumulative count and duration for successful inference
   * @@     request. The "success" count and cumulative duration includes
   * @@     cache hits.
   * @@
   */
  success: _inference_StatisticDuration__Output | null;
  /**
   * @@  .. cpp:var:: StatisticDuration fail
   * @@
   * @@     Cumulative count and duration for failed inference
   * @@     request.
   * @@
   */
  fail: _inference_StatisticDuration__Output | null;
  /**
   * @@  .. cpp:var:: StatisticDuration queue
   * @@
   * @@     The count and cumulative duration that inference requests wait in
   * @@     scheduling or other queues. The "queue" count and cumulative
   * @@     duration includes cache hits.
   * @@
   */
  queue: _inference_StatisticDuration__Output | null;
  /**
   * @@  .. cpp:var:: StatisticDuration compute_input
   * @@
   * @@     The count and cumulative duration to prepare input tensor data as
   * @@     required by the model framework / backend. For example, this duration
   * @@     should include the time to copy input tensor data to the GPU.
   * @@     The "compute_input" count and cumulative duration do not account for
   * @@     requests that were a cache hit. See the "cache_hit" field for more
   * @@     info.
   * @@
   */
  computeInput: _inference_StatisticDuration__Output | null;
  /**
   * @@  .. cpp:var:: StatisticDuration compute_infer
   * @@
   * @@     The count and cumulative duration to execute the model.
   * @@     The "compute_infer" count and cumulative duration do not account for
   * @@     requests that were a cache hit. See the "cache_hit" field for more
   * @@     info.
   * @@
   */
  computeInfer: _inference_StatisticDuration__Output | null;
  /**
   * @@  .. cpp:var:: StatisticDuration compute_output
   * @@
   * @@     The count and cumulative duration to extract output tensor data
   * @@     produced by the model framework / backend. For example, this duration
   * @@     should include the time to copy output tensor data from the GPU.
   * @@     The "compute_output" count and cumulative duration do not account for
   * @@     requests that were a cache hit. See the "cache_hit" field for more
   * @@     info.
   * @@
   */
  computeOutput: _inference_StatisticDuration__Output | null;
  /**
   * @@  .. cpp:var:: StatisticDuration cache_hit
   * @@
   * @@     The count of response cache hits and cumulative duration to lookup
   * @@     and extract output tensor data from the Response Cache on a cache
   * @@     hit. For example, this duration should include the time to copy
   * @@     output tensor data from the Response Cache to the response object.
   * @@     On cache hits, triton does not need to go to the model/backend
   * @@     for the output tensor data, so the "compute_input", "compute_infer",
   * @@     and "compute_output" fields are not updated. Assuming the response
   * @@     cache is enabled for a given model, a cache hit occurs for a
   * @@     request to that model when the request metadata (model name,
   * @@     model version, model inputs) hashes to an existing entry in the
   * @@     cache. On a cache miss, the request hash and response output tensor
   * @@     data is added to the cache. See response cache docs for more info:
   * @@
   * https://github.com/triton-inference-server/server/blob/main/docs/response_cache.md
   * @@
   */
  cacheHit: _inference_StatisticDuration__Output | null;
  /**
   * @@  .. cpp:var:: StatisticDuration cache_miss
   * @@
   * @@     The count of response cache misses and cumulative duration to lookup
   * @@     and insert output tensor data from the computed response to the
   * cache.
   * @@     For example, this duration should include the time to copy
   * @@     output tensor data from the response object to the Response Cache.
   * @@     Assuming the response cache is enabled for a given model, a cache
   * @@     miss occurs for a request to that model when the request metadata
   * @@     does NOT hash to an existing entry in the cache. See the response
   * @@     cache docs for more info:
   * @@
   * https://github.com/triton-inference-server/server/blob/main/docs/response_cache.md
   * @@
   */
  cacheMiss: _inference_StatisticDuration__Output | null;
}
