// Original file: proto/grpc_service.proto

/**
 * @@
 * @@.. cpp:var:: message ModelReadyRequest
 * @@
 * @@   Request message for ModelReady.
 * @@
 */
export interface ModelReadyRequest {
  /**
   * @@
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the model to check for readiness.
   * @@
   */
  name?: string;
  /**
   * @@  .. cpp:var:: string version
   * @@
   * @@     The version of the model to check for readiness. If not given the
   * @@     server will choose a version based on the model and internal policy.
   * @@
   */
  version?: string;
}

/**
 * @@
 * @@.. cpp:var:: message ModelReadyRequest
 * @@
 * @@   Request message for ModelReady.
 * @@
 */
export interface ModelReadyRequest__Output {
  /**
   * @@
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the model to check for readiness.
   * @@
   */
  name: string;
  /**
   * @@  .. cpp:var:: string version
   * @@
   * @@     The version of the model to check for readiness. If not given the
   * @@     server will choose a version based on the model and internal policy.
   * @@
   */
  version: string;
}
