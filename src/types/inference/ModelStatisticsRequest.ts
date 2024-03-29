// Original file: proto/grpc_service.proto

/**
 * @@
 * @@.. cpp:var:: message ModelStatisticsRequest
 * @@
 * @@   Request message for ModelStatistics.
 * @@
 */
export interface ModelStatisticsRequest {
  /**
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the model. If not given returns statistics for
   * @@     all models.
   * @@
   */
  name?: string;
  /**
   * @@  .. cpp:var:: string version
   * @@
   * @@     The version of the model. If not given returns statistics for
   * @@     all model versions.
   * @@
   */
  version?: string;
}

/**
 * @@
 * @@.. cpp:var:: message ModelStatisticsRequest
 * @@
 * @@   Request message for ModelStatistics.
 * @@
 */
export interface ModelStatisticsRequest__Output {
  /**
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the model. If not given returns statistics for
   * @@     all models.
   * @@
   */
  name: string;
  /**
   * @@  .. cpp:var:: string version
   * @@
   * @@     The version of the model. If not given returns statistics for
   * @@     all model versions.
   * @@
   */
  version: string;
}
