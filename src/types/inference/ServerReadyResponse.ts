// Original file: proto/grpc_service.proto

/**
 * @@
 * @@.. cpp:var:: message ServerReadyResponse
 * @@
 * @@   Response message for ServerReady.
 * @@
 */
export interface ServerReadyResponse {
  /**
   * @@
   * @@  .. cpp:var:: bool ready
   * @@
   * @@     True if the inference server is ready, false it not ready.
   * @@
   */
  ready?: boolean;
}

/**
 * @@
 * @@.. cpp:var:: message ServerReadyResponse
 * @@
 * @@   Response message for ServerReady.
 * @@
 */
export interface ServerReadyResponse__Output {
  /**
   * @@
   * @@  .. cpp:var:: bool ready
   * @@
   * @@     True if the inference server is ready, false it not ready.
   * @@
   */
  ready: boolean;
}
