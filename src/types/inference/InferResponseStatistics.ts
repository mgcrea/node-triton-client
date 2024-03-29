// Original file: proto/grpc_service.proto

import type {
  StatisticDuration as _inference_StatisticDuration,
  StatisticDuration__Output as _inference_StatisticDuration__Output,
} from "../inference/StatisticDuration";

export interface InferResponseStatistics {
  computeInfer?: _inference_StatisticDuration | null;
  computeOutput?: _inference_StatisticDuration | null;
  success?: _inference_StatisticDuration | null;
  fail?: _inference_StatisticDuration | null;
  emptyResponse?: _inference_StatisticDuration | null;
  cancel?: _inference_StatisticDuration | null;
}

export interface InferResponseStatistics__Output {
  computeInfer: _inference_StatisticDuration__Output | null;
  computeOutput: _inference_StatisticDuration__Output | null;
  success: _inference_StatisticDuration__Output | null;
  fail: _inference_StatisticDuration__Output | null;
  emptyResponse: _inference_StatisticDuration__Output | null;
  cancel: _inference_StatisticDuration__Output | null;
}
