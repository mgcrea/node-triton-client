// Original file: proto/grpc_service.proto

/**
 * @@
 * @@.. cpp:var:: message SystemSharedMemoryStatusRequest
 * @@
 * @@   Request message for SystemSharedMemoryStatus.
 * @@
 */
export interface SystemSharedMemoryStatusRequest {
  /**
   * @@
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the region to get status for. If empty the
   * @@     status is returned for all registered regions.
   * @@
   */
  name?: string;
}

/**
 * @@
 * @@.. cpp:var:: message SystemSharedMemoryStatusRequest
 * @@
 * @@   Request message for SystemSharedMemoryStatus.
 * @@
 */
export interface SystemSharedMemoryStatusRequest__Output {
  /**
   * @@
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the region to get status for. If empty the
   * @@     status is returned for all registered regions.
   * @@
   */
  name: string;
}
