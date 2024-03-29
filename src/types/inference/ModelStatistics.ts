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

export interface ModelStatistics {
  name?: string;
  version?: string;
  lastInference?: number | string | Long;
  inferenceCount?: number | string | Long;
  executionCount?: number | string | Long;
  inferenceStats?: _inference_InferStatistics | null;
  batchStats?: _inference_InferBatchStatistics[];
  memoryUsage?: _inference_MemoryUsage[];
  responseStats?: { [key: string]: _inference_InferResponseStatistics };
}

export interface ModelStatistics__Output {
  name: string;
  version: string;
  lastInference: string;
  inferenceCount: string;
  executionCount: string;
  inferenceStats: _inference_InferStatistics__Output | null;
  batchStats: _inference_InferBatchStatistics__Output[];
  memoryUsage: _inference_MemoryUsage__Output[];
  responseStats: { [key: string]: _inference_InferResponseStatistics__Output };
}
