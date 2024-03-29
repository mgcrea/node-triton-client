// Original file: proto/grpc_service.proto

import type { Long } from "@grpc/proto-loader";

export interface ModelRepositoryParameter {
  boolParam?: boolean;
  int64Param?: number | string | Long;
  stringParam?: string;
  bytesParam?: Buffer | Uint8Array | string;
  parameterChoice?: "boolParam" | "int64Param" | "stringParam" | "bytesParam";
}

export interface ModelRepositoryParameter__Output {
  boolParam?: boolean;
  int64Param?: string;
  stringParam?: string;
  bytesParam?: Buffer;
  parameterChoice: "boolParam" | "int64Param" | "stringParam" | "bytesParam";
}
