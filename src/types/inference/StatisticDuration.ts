// Original file: proto/grpc_service.proto

import type { Long } from "@grpc/proto-loader";

export interface StatisticDuration {
  count?: number | string | Long;
  ns?: number | string | Long;
}

export interface StatisticDuration__Output {
  count: string;
  ns: string;
}
