// Original file: proto/grpc_service.proto

import type { Long } from "@grpc/proto-loader";

/**
 * @@
 * @@.. cpp:var:: message CudaSharedMemoryRegisterRequest
 * @@
 * @@   Request message for CudaSharedMemoryRegister.
 * @@
 */
export interface CudaSharedMemoryRegisterRequest {
  /**
   * @@
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the region to register.
   * @@
   */
  name?: string;
  /**
   * @@  .. cpp:var:: bytes raw_handle
   * @@
   * @@     The raw serialized cudaIPC handle.
   * @@
   */
  rawHandle?: Buffer | Uint8Array | string;
  /**
   * @@  .. cpp:var:: int64 device_id
   * @@
   * @@     The GPU device ID on which the cudaIPC handle was created.
   * @@
   */
  deviceId?: number | string | Long;
  /**
   * @@  .. cpp:var:: uint64 byte_size
   * @@
   * @@     Size of the shared memory block, in bytes.
   * @@
   */
  byteSize?: number | string | Long;
}

/**
 * @@
 * @@.. cpp:var:: message CudaSharedMemoryRegisterRequest
 * @@
 * @@   Request message for CudaSharedMemoryRegister.
 * @@
 */
export interface CudaSharedMemoryRegisterRequest__Output {
  /**
   * @@
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the region to register.
   * @@
   */
  name: string;
  /**
   * @@  .. cpp:var:: bytes raw_handle
   * @@
   * @@     The raw serialized cudaIPC handle.
   * @@
   */
  rawHandle: Buffer;
  /**
   * @@  .. cpp:var:: int64 device_id
   * @@
   * @@     The GPU device ID on which the cudaIPC handle was created.
   * @@
   */
  deviceId: string;
  /**
   * @@  .. cpp:var:: uint64 byte_size
   * @@
   * @@     Size of the shared memory block, in bytes.
   * @@
   */
  byteSize: string;
}
