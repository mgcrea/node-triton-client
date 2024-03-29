// Original file: proto/grpc_service.proto

import type { Long } from "@grpc/proto-loader";

export interface MemoryUsage {
  type?: string;
  id?: number | string | Long;
  byteSize?: number | string | Long;
}

export interface MemoryUsage__Output {
  type: string;
  id: string;
  byteSize: string;
}
