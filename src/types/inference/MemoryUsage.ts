// Original file: proto/grpc_service.proto

import type { Long } from "@grpc/proto-loader";

/**
 * @@
 * @@.. cpp:var:: message MemoryUsage
 * @@
 * @@   Memory usage.
 * @@
 */
export interface MemoryUsage {
  /**
   * @@  .. cpp:var:: string type
   * @@
   * @@     The type of memory, the value can be "CPU", "CPU_PINNED", "GPU".
   * @@
   */
  type?: string;
  /**
   * @@  .. cpp:var:: int64 id
   * @@
   * @@     The id of the memory, typically used with "type" to identify
   * @@     a device that hosts the memory.
   * @@
   */
  id?: number | string | Long;
  /**
   * @@  .. cpp:var:: uint64 byte_size
   * @@
   * @@     The byte size of the memory.
   * @@
   */
  byteSize?: number | string | Long;
}

/**
 * @@
 * @@.. cpp:var:: message MemoryUsage
 * @@
 * @@   Memory usage.
 * @@
 */
export interface MemoryUsage__Output {
  /**
   * @@  .. cpp:var:: string type
   * @@
   * @@     The type of memory, the value can be "CPU", "CPU_PINNED", "GPU".
   * @@
   */
  type: string;
  /**
   * @@  .. cpp:var:: int64 id
   * @@
   * @@     The id of the memory, typically used with "type" to identify
   * @@     a device that hosts the memory.
   * @@
   */
  id: string;
  /**
   * @@  .. cpp:var:: uint64 byte_size
   * @@
   * @@     The byte size of the memory.
   * @@
   */
  byteSize: string;
}
