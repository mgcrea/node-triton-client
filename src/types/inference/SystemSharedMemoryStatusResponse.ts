// Original file: proto/grpc_service.proto

import type { Long } from "@grpc/proto-loader";

export interface _inference_SystemSharedMemoryStatusResponse_RegionStatus {
  name?: string;
  key?: string;
  offset?: number | string | Long;
  byteSize?: number | string | Long;
}

export interface _inference_SystemSharedMemoryStatusResponse_RegionStatus__Output {
  name: string;
  key: string;
  offset: string;
  byteSize: string;
}

export interface SystemSharedMemoryStatusResponse {
  regions?: { [key: string]: _inference_SystemSharedMemoryStatusResponse_RegionStatus };
}

export interface SystemSharedMemoryStatusResponse__Output {
  regions: { [key: string]: _inference_SystemSharedMemoryStatusResponse_RegionStatus__Output };
}
