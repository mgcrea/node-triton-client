// Original file: proto/grpc_service.proto

import type { Long } from "@grpc/proto-loader";

export interface CudaSharedMemoryRegisterRequest {
  name?: string;
  rawHandle?: Buffer | Uint8Array | string;
  deviceId?: number | string | Long;
  byteSize?: number | string | Long;
}

export interface CudaSharedMemoryRegisterRequest__Output {
  name: string;
  rawHandle: Buffer;
  deviceId: string;
  byteSize: string;
}
