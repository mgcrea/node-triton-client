// Original file: proto/grpc_service.proto

/**
 * @@
 * @@.. cpp:var:: message CudaSharedMemoryStatusRequest
 * @@
 * @@   Request message for CudaSharedMemoryStatus.
 * @@
 */
export interface CudaSharedMemoryStatusRequest {
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
 * @@.. cpp:var:: message CudaSharedMemoryStatusRequest
 * @@
 * @@   Request message for CudaSharedMemoryStatus.
 * @@
 */
export interface CudaSharedMemoryStatusRequest__Output {
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
