// Original file: proto/grpc_service.proto

import type { Long } from "@grpc/proto-loader";

/**
 * @@
 * @@  .. cpp:var:: message RegionStatus
 * @@
 * @@     Status for a shared memory region.
 * @@
 */
export interface _inference_SystemSharedMemoryStatusResponse_RegionStatus {
  /**
   * @@
   * @@    .. cpp:var:: string name
   * @@
   * @@       The name for the shared memory region.
   * @@
   */
  name?: string;
  /**
   * @@    .. cpp:var:: string shared_memory_key
   * @@
   * @@       The key of the underlying memory object that contains the
   * @@       shared memory region.
   * @@
   */
  key?: string;
  /**
   * @@    .. cpp:var:: uint64 offset
   * @@
   * @@       Offset, in bytes, within the underlying memory object to
   * @@       the start of the shared memory region.
   * @@
   */
  offset?: number | string | Long;
  /**
   * @@    .. cpp:var:: uint64 byte_size
   * @@
   * @@       Size of the shared memory region, in bytes.
   * @@
   */
  byteSize?: number | string | Long;
}

/**
 * @@
 * @@  .. cpp:var:: message RegionStatus
 * @@
 * @@     Status for a shared memory region.
 * @@
 */
export interface _inference_SystemSharedMemoryStatusResponse_RegionStatus__Output {
  /**
   * @@
   * @@    .. cpp:var:: string name
   * @@
   * @@       The name for the shared memory region.
   * @@
   */
  name: string;
  /**
   * @@    .. cpp:var:: string shared_memory_key
   * @@
   * @@       The key of the underlying memory object that contains the
   * @@       shared memory region.
   * @@
   */
  key: string;
  /**
   * @@    .. cpp:var:: uint64 offset
   * @@
   * @@       Offset, in bytes, within the underlying memory object to
   * @@       the start of the shared memory region.
   * @@
   */
  offset: string;
  /**
   * @@    .. cpp:var:: uint64 byte_size
   * @@
   * @@       Size of the shared memory region, in bytes.
   * @@
   */
  byteSize: string;
}

/**
 * @@
 * @@.. cpp:var:: message SystemSharedMemoryStatusResponse
 * @@
 * @@   Response message for SystemSharedMemoryStatus.
 * @@
 */
export interface SystemSharedMemoryStatusResponse {
  /**
   * @@
   * @@  .. cpp:var:: map<string,RegionStatus> regions
   * @@
   * @@     Status for each of the registered regions, indexed by
   * @@     region name.
   * @@
   */
  regions?: { [key: string]: _inference_SystemSharedMemoryStatusResponse_RegionStatus };
}

/**
 * @@
 * @@.. cpp:var:: message SystemSharedMemoryStatusResponse
 * @@
 * @@   Response message for SystemSharedMemoryStatus.
 * @@
 */
export interface SystemSharedMemoryStatusResponse__Output {
  /**
   * @@
   * @@  .. cpp:var:: map<string,RegionStatus> regions
   * @@
   * @@     Status for each of the registered regions, indexed by
   * @@     region name.
   * @@
   */
  regions: { [key: string]: _inference_SystemSharedMemoryStatusResponse_RegionStatus__Output };
}
