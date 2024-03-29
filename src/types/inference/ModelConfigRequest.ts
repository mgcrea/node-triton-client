// Original file: proto/grpc_service.proto

/**
 * @@
 * @@.. cpp:var:: message ModelConfigRequest
 * @@
 * @@   Request message for ModelConfig.
 * @@
 */
export interface ModelConfigRequest {
  /**
   * @@
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the model.
   * @@
   */
  name?: string;
  /**
   * @@  .. cpp:var:: string version
   * @@
   * @@     The version of the model. If not given the model version
   * @@     is selected automatically based on the version policy.
   * @@
   */
  version?: string;
}

/**
 * @@
 * @@.. cpp:var:: message ModelConfigRequest
 * @@
 * @@   Request message for ModelConfig.
 * @@
 */
export interface ModelConfigRequest__Output {
  /**
   * @@
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the model.
   * @@
   */
  name: string;
  /**
   * @@  .. cpp:var:: string version
   * @@
   * @@     The version of the model. If not given the model version
   * @@     is selected automatically based on the version policy.
   * @@
   */
  version: string;
}
