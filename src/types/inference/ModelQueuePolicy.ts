// Original file: proto/model_config.proto

import type { Long } from "@grpc/proto-loader";

// Original file: proto/model_config.proto

export const _inference_ModelQueuePolicy_TimeoutAction = {
  REJECT: "REJECT",
  DELAY: "DELAY",
} as const;

export type _inference_ModelQueuePolicy_TimeoutAction = "REJECT" | 0 | "DELAY" | 1;

export type _inference_ModelQueuePolicy_TimeoutAction__Output =
  (typeof _inference_ModelQueuePolicy_TimeoutAction)[keyof typeof _inference_ModelQueuePolicy_TimeoutAction];

export interface ModelQueuePolicy {
  timeoutAction?: _inference_ModelQueuePolicy_TimeoutAction;
  defaultTimeoutMicroseconds?: number | string | Long;
  allowTimeoutOverride?: boolean;
  maxQueueSize?: number;
}

export interface ModelQueuePolicy__Output {
  timeoutAction: _inference_ModelQueuePolicy_TimeoutAction__Output;
  defaultTimeoutMicroseconds: string;
  allowTimeoutOverride: boolean;
  maxQueueSize: number;
}
