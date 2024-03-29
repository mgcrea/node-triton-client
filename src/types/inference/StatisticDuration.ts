// Original file: proto/grpc_service.proto

import type { Long } from "@grpc/proto-loader";

/**
 * @@
 * @@.. cpp:var:: message StatisticDuration
 * @@
 * @@   Statistic recording a cumulative duration metric.
 * @@
 */
export interface StatisticDuration {
  /**
   * @@  .. cpp:var:: uint64 count
   * @@
   * @@     Cumulative number of times this metric occurred.
   * @@
   */
  count?: number | string | Long;
  /**
   * @@  .. cpp:var:: uint64 total_time_ns
   * @@
   * @@     Total collected duration of this metric in nanoseconds.
   * @@
   */
  ns?: number | string | Long;
}

/**
 * @@
 * @@.. cpp:var:: message StatisticDuration
 * @@
 * @@   Statistic recording a cumulative duration metric.
 * @@
 */
export interface StatisticDuration__Output {
  /**
   * @@  .. cpp:var:: uint64 count
   * @@
   * @@     Cumulative number of times this metric occurred.
   * @@
   */
  count: string;
  /**
   * @@  .. cpp:var:: uint64 total_time_ns
   * @@
   * @@     Total collected duration of this metric in nanoseconds.
   * @@
   */
  ns: string;
}
