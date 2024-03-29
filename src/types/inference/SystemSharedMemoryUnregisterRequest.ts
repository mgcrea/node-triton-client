// Original file: proto/grpc_service.proto

/**
 * @@
 * @@.. cpp:var:: message SystemSharedMemoryUnregisterRequest
 * @@
 * @@   Request message for SystemSharedMemoryUnregister.
 * @@
 */
export interface SystemSharedMemoryUnregisterRequest {
  /**
   * @@
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the system region to unregister. If empty
   * @@     all system shared-memory regions are unregistered.
   * @@
   */
  name?: string;
}

/**
 * @@
 * @@.. cpp:var:: message SystemSharedMemoryUnregisterRequest
 * @@
 * @@   Request message for SystemSharedMemoryUnregister.
 * @@
 */
export interface SystemSharedMemoryUnregisterRequest__Output {
  /**
   * @@
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the system region to unregister. If empty
   * @@     all system shared-memory regions are unregistered.
   * @@
   */
  name: string;
}
