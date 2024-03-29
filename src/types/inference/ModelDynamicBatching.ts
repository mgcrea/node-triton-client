// Original file: proto/model_config.proto

import type { Long } from "@grpc/proto-loader";
import type {
  ModelQueuePolicy as _inference_ModelQueuePolicy,
  ModelQueuePolicy__Output as _inference_ModelQueuePolicy__Output,
} from "../inference/ModelQueuePolicy";

export interface ModelDynamicBatching {
  preferredBatchSize?: number[];
  maxQueueDelayMicroseconds?: number | string | Long;
  preserveOrdering?: boolean;
  priorityLevels?: number | string | Long;
  defaultPriorityLevel?: number | string | Long;
  defaultQueuePolicy?: _inference_ModelQueuePolicy | null;
  priorityQueuePolicy?: { [key: number]: _inference_ModelQueuePolicy };
}

export interface ModelDynamicBatching__Output {
  preferredBatchSize: number[];
  maxQueueDelayMicroseconds: string;
  preserveOrdering: boolean;
  priorityLevels: string;
  defaultPriorityLevel: string;
  defaultQueuePolicy: _inference_ModelQueuePolicy__Output | null;
  priorityQueuePolicy: { [key: number]: _inference_ModelQueuePolicy__Output };
}
