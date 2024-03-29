// Original file: proto/model_config.proto

import type { Long } from "@grpc/proto-loader";

// Original file: proto/model_config.proto

/**
 * @@
 * @@  .. cpp:enum:: TimeoutAction
 * @@
 * @@     The action applied to timed-out requests.
 * @@
 */
export const _inference_ModelQueuePolicy_TimeoutAction = {
  /**
   * @@    .. cpp:enumerator:: Action::REJECT = 0
   * @@
   * @@       Reject the request and return error message accordingly.
   * @@
   */
  REJECT: "REJECT",
  /**
   * @@    .. cpp:enumerator:: Action::DELAY = 1
   * @@
   * @@       Delay the request until all other requests at the same
   * @@       (or higher) priority levels that have not reached their timeouts
   * @@       are processed. A delayed request will eventually be processed,
   * @@       but may be delayed indefinitely due to newly arriving requests.
   * @@
   */
  DELAY: "DELAY",
} as const;

/**
 * @@
 * @@  .. cpp:enum:: TimeoutAction
 * @@
 * @@     The action applied to timed-out requests.
 * @@
 */
export type _inference_ModelQueuePolicy_TimeoutAction =
  /**
   * @@    .. cpp:enumerator:: Action::REJECT = 0
   * @@
   * @@       Reject the request and return error message accordingly.
   * @@
   */
  | "REJECT"
  | 0
  /**
   * @@    .. cpp:enumerator:: Action::DELAY = 1
   * @@
   * @@       Delay the request until all other requests at the same
   * @@       (or higher) priority levels that have not reached their timeouts
   * @@       are processed. A delayed request will eventually be processed,
   * @@       but may be delayed indefinitely due to newly arriving requests.
   * @@
   */
  | "DELAY"
  | 1;

/**
 * @@
 * @@  .. cpp:enum:: TimeoutAction
 * @@
 * @@     The action applied to timed-out requests.
 * @@
 */
export type _inference_ModelQueuePolicy_TimeoutAction__Output =
  (typeof _inference_ModelQueuePolicy_TimeoutAction)[keyof typeof _inference_ModelQueuePolicy_TimeoutAction];

/**
 * @@
 * @@.. cpp:var:: message ModelQueuePolicy
 * @@
 * @@   Queue policy for inference requests.
 * @@
 */
export interface ModelQueuePolicy {
  /**
   * @@
   * @@  .. cpp:var:: TimeoutAction timeout_action
   * @@
   * @@     The action applied to timed-out request.
   * @@     The default action is REJECT.
   * @@
   */
  timeoutAction?: _inference_ModelQueuePolicy_TimeoutAction;
  /**
   * @@
   * @@  .. cpp:var:: uint64 default_timeout_microseconds
   * @@
   * @@     The default timeout for every request, in microseconds.
   * @@     The default value is 0 which indicates that no timeout is set.
   * @@
   */
  defaultTimeoutMicroseconds?: number | string | Long;
  /**
   * @@
   * @@  .. cpp:var:: bool allow_timeout_override
   * @@
   * @@     Whether individual request can override the default timeout value.
   * @@     When true, individual requests can set a timeout that is less than
   * @@     the default timeout value but may not increase the timeout.
   * @@     The default value is false.
   * @@
   */
  allowTimeoutOverride?: boolean;
  /**
   * @@
   * @@  .. cpp:var:: uint32 max_queue_size
   * @@
   * @@     The maximum queue size for holding requests. A request will be
   * @@     rejected immediately if it can't be enqueued because the queue is
   * @@     full. The default value is 0 which indicates that no maximum
   * @@     queue size is enforced.
   * @@
   */
  maxQueueSize?: number;
}

/**
 * @@
 * @@.. cpp:var:: message ModelQueuePolicy
 * @@
 * @@   Queue policy for inference requests.
 * @@
 */
export interface ModelQueuePolicy__Output {
  /**
   * @@
   * @@  .. cpp:var:: TimeoutAction timeout_action
   * @@
   * @@     The action applied to timed-out request.
   * @@     The default action is REJECT.
   * @@
   */
  timeoutAction: _inference_ModelQueuePolicy_TimeoutAction__Output;
  /**
   * @@
   * @@  .. cpp:var:: uint64 default_timeout_microseconds
   * @@
   * @@     The default timeout for every request, in microseconds.
   * @@     The default value is 0 which indicates that no timeout is set.
   * @@
   */
  defaultTimeoutMicroseconds: string;
  /**
   * @@
   * @@  .. cpp:var:: bool allow_timeout_override
   * @@
   * @@     Whether individual request can override the default timeout value.
   * @@     When true, individual requests can set a timeout that is less than
   * @@     the default timeout value but may not increase the timeout.
   * @@     The default value is false.
   * @@
   */
  allowTimeoutOverride: boolean;
  /**
   * @@
   * @@  .. cpp:var:: uint32 max_queue_size
   * @@
   * @@     The maximum queue size for holding requests. A request will be
   * @@     rejected immediately if it can't be enqueued because the queue is
   * @@     full. The default value is 0 which indicates that no maximum
   * @@     queue size is enforced.
   * @@
   */
  maxQueueSize: number;
}
