// Original file: proto/grpc_service.proto

/**
 * @@
 * @@.. cpp:var:: message ServerLiveResponse
 * @@
 * @@   Response message for ServerLive.
 * @@
 */
export interface ServerLiveResponse {
  /**
   * @@
   * @@  .. cpp:var:: bool live
   * @@
   * @@     True if the inference server is live, false it not live.
   * @@
   */
  live?: boolean;
}

/**
 * @@
 * @@.. cpp:var:: message ServerLiveResponse
 * @@
 * @@   Response message for ServerLive.
 * @@
 */
export interface ServerLiveResponse__Output {
  /**
   * @@
   * @@  .. cpp:var:: bool live
   * @@
   * @@     True if the inference server is live, false it not live.
   * @@
   */
  live: boolean;
}
