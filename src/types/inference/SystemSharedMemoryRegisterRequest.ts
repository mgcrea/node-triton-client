// Original file: proto/grpc_service.proto

import type { Long } from "@grpc/proto-loader";

/**
 * @@
 * @@.. cpp:var:: message SystemSharedMemoryRegisterRequest
 * @@
 * @@   Request message for SystemSharedMemoryRegister.
 * @@
 */
export interface SystemSharedMemoryRegisterRequest {
  /**
   * @@
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the region to register.
   * @@
   */
  name?: string;
  /**
   * @@  .. cpp:var:: string shared_memory_key
   * @@
   * @@     The key of the underlying memory object that contains the
   * @@     shared memory region.
   * @@
   */
  key?: string;
  /**
   * @@  .. cpp:var:: uint64 offset
   * @@
   * @@     Offset, in bytes, within the underlying memory object to
   * @@     the start of the shared memory region.
   * @@
   */
  offset?: number | string | Long;
  /**
   * @@  .. cpp:var:: uint64 byte_size
   * @@
   * @@     Size of the shared memory region, in bytes.
   * @@
   */
  byteSize?: number | string | Long;
}

/**
 * @@
 * @@.. cpp:var:: message SystemSharedMemoryRegisterRequest
 * @@
 * @@   Request message for SystemSharedMemoryRegister.
 * @@
 */
export interface SystemSharedMemoryRegisterRequest__Output {
  /**
   * @@
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the region to register.
   * @@
   */
  name: string;
  /**
   * @@  .. cpp:var:: string shared_memory_key
   * @@
   * @@     The key of the underlying memory object that contains the
   * @@     shared memory region.
   * @@
   */
  key: string;
  /**
   * @@  .. cpp:var:: uint64 offset
   * @@
   * @@     Offset, in bytes, within the underlying memory object to
   * @@     the start of the shared memory region.
   * @@
   */
  offset: string;
  /**
   * @@  .. cpp:var:: uint64 byte_size
   * @@
   * @@     Size of the shared memory region, in bytes.
   * @@
   */
  byteSize: string;
}
