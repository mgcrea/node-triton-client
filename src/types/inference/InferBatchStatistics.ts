// Original file: proto/grpc_service.proto

import type { Long } from "@grpc/proto-loader";
import type {
  StatisticDuration as _inference_StatisticDuration,
  StatisticDuration__Output as _inference_StatisticDuration__Output,
} from "../inference/StatisticDuration";

export interface InferBatchStatistics {
  batchSize?: number | string | Long;
  computeInput?: _inference_StatisticDuration | null;
  computeInfer?: _inference_StatisticDuration | null;
  computeOutput?: _inference_StatisticDuration | null;
}

export interface InferBatchStatistics__Output {
  batchSize: string;
  computeInput: _inference_StatisticDuration__Output | null;
  computeInfer: _inference_StatisticDuration__Output | null;
  computeOutput: _inference_StatisticDuration__Output | null;
}
