// Original file: proto/grpc_service.proto

/**
 * @@
 * @@.. cpp:var:: message ModelMetadataRequest
 * @@
 * @@   Request message for ModelMetadata.
 * @@
 */
export interface ModelMetadataRequest {
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
   * @@     The version of the model to check for readiness. If not
   * @@     given the server will choose a version based on the
   * @@     model and internal policy.
   * @@
   */
  version?: string;
}

/**
 * @@
 * @@.. cpp:var:: message ModelMetadataRequest
 * @@
 * @@   Request message for ModelMetadata.
 * @@
 */
export interface ModelMetadataRequest__Output {
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
   * @@     The version of the model to check for readiness. If not
   * @@     given the server will choose a version based on the
   * @@     model and internal policy.
   * @@
   */
  version: string;
}
