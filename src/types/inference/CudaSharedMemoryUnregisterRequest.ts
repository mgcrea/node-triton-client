// Original file: proto/grpc_service.proto

/**
 * @@
 * @@.. cpp:var:: message CudaSharedMemoryUnregisterRequest
 * @@
 * @@   Request message for CudaSharedMemoryUnregister.
 * @@
 */
export interface CudaSharedMemoryUnregisterRequest {
  /**
   * @@
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the cuda region to unregister. If empty
   * @@     all cuda shared-memory regions are unregistered.
   * @@
   */
  name?: string;
}

/**
 * @@
 * @@.. cpp:var:: message CudaSharedMemoryUnregisterRequest
 * @@
 * @@   Request message for CudaSharedMemoryUnregister.
 * @@
 */
export interface CudaSharedMemoryUnregisterRequest__Output {
  /**
   * @@
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the cuda region to unregister. If empty
   * @@     all cuda shared-memory regions are unregistered.
   * @@
   */
  name: string;
}
