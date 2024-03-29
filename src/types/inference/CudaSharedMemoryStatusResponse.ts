// Original file: proto/grpc_service.proto

import type { Long } from "@grpc/proto-loader";

/**
 * @@
 * @@  .. cpp:var:: message RegionStatus
 * @@
 * @@     Status for a shared memory region.
 * @@
 */
export interface _inference_CudaSharedMemoryStatusResponse_RegionStatus {
  /**
   * @@
   * @@    .. cpp:var:: string name
   * @@
   * @@       The name for the shared memory region.
   * @@
   */
  name?: string;
  /**
   * @@    .. cpp:var:: uin64 device_id
   * @@
   * @@       The GPU device ID where the cudaIPC handle was created.
   * @@
   */
  deviceId?: number | string | Long;
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
export interface _inference_CudaSharedMemoryStatusResponse_RegionStatus__Output {
  /**
   * @@
   * @@    .. cpp:var:: string name
   * @@
   * @@       The name for the shared memory region.
   * @@
   */
  name: string;
  /**
   * @@    .. cpp:var:: uin64 device_id
   * @@
   * @@       The GPU device ID where the cudaIPC handle was created.
   * @@
   */
  deviceId: string;
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
 * @@.. cpp:var:: message CudaSharedMemoryStatusResponse
 * @@
 * @@   Response message for CudaSharedMemoryStatus.
 * @@
 */
export interface CudaSharedMemoryStatusResponse {
  /**
   * @@
   * @@  .. cpp:var:: map<string,RegionStatus> regions
   * @@
   * @@     Status for each of the registered regions, indexed by
   * @@     region name.
   * @@
   */
  regions?: { [key: string]: _inference_CudaSharedMemoryStatusResponse_RegionStatus };
}

/**
 * @@
 * @@.. cpp:var:: message CudaSharedMemoryStatusResponse
 * @@
 * @@   Response message for CudaSharedMemoryStatus.
 * @@
 */
export interface CudaSharedMemoryStatusResponse__Output {
  /**
   * @@
   * @@  .. cpp:var:: map<string,RegionStatus> regions
   * @@
   * @@     Status for each of the registered regions, indexed by
   * @@     region name.
   * @@
   */
  regions: { [key: string]: _inference_CudaSharedMemoryStatusResponse_RegionStatus__Output };
}
