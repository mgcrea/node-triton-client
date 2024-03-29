// Original file: proto/model_config.proto

import type { Long } from "@grpc/proto-loader";
import type {
  ModelQueuePolicy as _inference_ModelQueuePolicy,
  ModelQueuePolicy__Output as _inference_ModelQueuePolicy__Output,
} from "../inference/ModelQueuePolicy";

/**
 * @@
 * @@.. cpp:var:: message ModelDynamicBatching
 * @@
 * @@   Dynamic batching configuration. These settings control how dynamic
 * @@   batching operates for the model.
 * @@
 */
export interface ModelDynamicBatching {
  /**
   * @@  .. cpp:var:: int32 preferred_batch_size (repeated)
   * @@
   * @@     Preferred batch sizes for dynamic batching. If a batch of one of
   * @@     these sizes can be formed it will be executed immediately.  If
   * @@     not specified a preferred batch size will be chosen automatically
   * @@     based on model and GPU characteristics.
   * @@
   */
  preferredBatchSize?: number[];
  /**
   * @@  .. cpp:var:: uint64 max_queue_delay_microseconds
   * @@
   * @@     The maximum time, in microseconds, a request will be delayed in
   * @@     the scheduling queue to wait for additional requests for
   * @@     batching. Default is 0.
   * @@
   */
  maxQueueDelayMicroseconds?: number | string | Long;
  /**
   * @@  .. cpp:var:: bool preserve_ordering
   * @@
   * @@     Should the dynamic batcher preserve the ordering of responses to
   * @@     match the order of requests received by the scheduler. Default is
   * @@     false. If true, the responses will be returned in the same order as
   * @@     the order of requests sent to the scheduler. If false, the responses
   * @@     may be returned in arbitrary order. This option is specifically
   * @@     needed when a sequence of related inference requests (i.e. inference
   * @@     requests with the same correlation ID) are sent to the dynamic
   * @@     batcher to ensure that the sequence responses are in the correct
   * @@     order.
   * @@
   */
  preserveOrdering?: boolean;
  /**
   * @@  .. cpp:var:: uint64 priority_levels
   * @@
   * @@     The number of priority levels to be enabled for the model,
   * @@     the priority level starts from 1 and 1 is the highest priority.
   * @@     Requests are handled in priority order with all priority 1 requests
   * @@     processed before priority 2, all priority 2 requests processed before
   * @@     priority 3, etc. Requests with the same priority level will be
   * @@     handled in the order that they are received.
   * @@
   */
  priorityLevels?: number | string | Long;
  /**
   * @@  .. cpp:var:: uint64 default_priority_level
   * @@
   * @@     The priority level used for requests that don't specify their
   * @@     priority. The value must be in the range [ 1, 'priority_levels' ].
   * @@
   */
  defaultPriorityLevel?: number | string | Long;
  /**
   * @@  .. cpp:var:: ModelQueuePolicy default_queue_policy
   * @@
   * @@     The default queue policy used for requests that don't require
   * @@     priority handling and requests that specify priority levels where
   * @@     there is no specific policy given. If not specified, a policy with
   * @@     default field values will be used.
   * @@
   */
  defaultQueuePolicy?: _inference_ModelQueuePolicy | null;
  /**
   * @@  .. cpp:var:: map<uint64, ModelQueuePolicy> priority_queue_policy
   * @@
   * @@     Specify the queue policy for the priority level. The default queue
   * @@     policy will be used if a priority level doesn't specify a queue
   * @@     policy.
   * @@
   */
  priorityQueuePolicy?: { [key: number]: _inference_ModelQueuePolicy };
}

/**
 * @@
 * @@.. cpp:var:: message ModelDynamicBatching
 * @@
 * @@   Dynamic batching configuration. These settings control how dynamic
 * @@   batching operates for the model.
 * @@
 */
export interface ModelDynamicBatching__Output {
  /**
   * @@  .. cpp:var:: int32 preferred_batch_size (repeated)
   * @@
   * @@     Preferred batch sizes for dynamic batching. If a batch of one of
   * @@     these sizes can be formed it will be executed immediately.  If
   * @@     not specified a preferred batch size will be chosen automatically
   * @@     based on model and GPU characteristics.
   * @@
   */
  preferredBatchSize: number[];
  /**
   * @@  .. cpp:var:: uint64 max_queue_delay_microseconds
   * @@
   * @@     The maximum time, in microseconds, a request will be delayed in
   * @@     the scheduling queue to wait for additional requests for
   * @@     batching. Default is 0.
   * @@
   */
  maxQueueDelayMicroseconds: string;
  /**
   * @@  .. cpp:var:: bool preserve_ordering
   * @@
   * @@     Should the dynamic batcher preserve the ordering of responses to
   * @@     match the order of requests received by the scheduler. Default is
   * @@     false. If true, the responses will be returned in the same order as
   * @@     the order of requests sent to the scheduler. If false, the responses
   * @@     may be returned in arbitrary order. This option is specifically
   * @@     needed when a sequence of related inference requests (i.e. inference
   * @@     requests with the same correlation ID) are sent to the dynamic
   * @@     batcher to ensure that the sequence responses are in the correct
   * @@     order.
   * @@
   */
  preserveOrdering: boolean;
  /**
   * @@  .. cpp:var:: uint64 priority_levels
   * @@
   * @@     The number of priority levels to be enabled for the model,
   * @@     the priority level starts from 1 and 1 is the highest priority.
   * @@     Requests are handled in priority order with all priority 1 requests
   * @@     processed before priority 2, all priority 2 requests processed before
   * @@     priority 3, etc. Requests with the same priority level will be
   * @@     handled in the order that they are received.
   * @@
   */
  priorityLevels: string;
  /**
   * @@  .. cpp:var:: uint64 default_priority_level
   * @@
   * @@     The priority level used for requests that don't specify their
   * @@     priority. The value must be in the range [ 1, 'priority_levels' ].
   * @@
   */
  defaultPriorityLevel: string;
  /**
   * @@  .. cpp:var:: ModelQueuePolicy default_queue_policy
   * @@
   * @@     The default queue policy used for requests that don't require
   * @@     priority handling and requests that specify priority levels where
   * @@     there is no specific policy given. If not specified, a policy with
   * @@     default field values will be used.
   * @@
   */
  defaultQueuePolicy: _inference_ModelQueuePolicy__Output | null;
  /**
   * @@  .. cpp:var:: map<uint64, ModelQueuePolicy> priority_queue_policy
   * @@
   * @@     Specify the queue policy for the priority level. The default queue
   * @@     policy will be used if a priority level doesn't specify a queue
   * @@     policy.
   * @@
   */
  priorityQueuePolicy: { [key: number]: _inference_ModelQueuePolicy__Output };
}
