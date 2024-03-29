// Original file: proto/grpc_service.proto

import type {
  StatisticDuration as _inference_StatisticDuration,
  StatisticDuration__Output as _inference_StatisticDuration__Output,
} from "../inference/StatisticDuration";

export interface InferStatistics {
  success?: _inference_StatisticDuration | null;
  fail?: _inference_StatisticDuration | null;
  queue?: _inference_StatisticDuration | null;
  computeInput?: _inference_StatisticDuration | null;
  computeInfer?: _inference_StatisticDuration | null;
  computeOutput?: _inference_StatisticDuration | null;
  cacheHit?: _inference_StatisticDuration | null;
  cacheMiss?: _inference_StatisticDuration | null;
}

export interface InferStatistics__Output {
  success: _inference_StatisticDuration__Output | null;
  fail: _inference_StatisticDuration__Output | null;
  queue: _inference_StatisticDuration__Output | null;
  computeInput: _inference_StatisticDuration__Output | null;
  computeInfer: _inference_StatisticDuration__Output | null;
  computeOutput: _inference_StatisticDuration__Output | null;
  cacheHit: _inference_StatisticDuration__Output | null;
  cacheMiss: _inference_StatisticDuration__Output | null;
}
