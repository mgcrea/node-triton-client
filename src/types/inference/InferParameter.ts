// Original file: proto/grpc_service.proto

import type { Long } from "@grpc/proto-loader";

export interface InferParameter {
  boolParam?: boolean;
  int64Param?: number | string | Long;
  stringParam?: string;
  doubleParam?: number | string;
  uint64Param?: number | string | Long;
  parameterChoice?: "boolParam" | "int64Param" | "stringParam" | "doubleParam" | "uint64Param";
}

export interface InferParameter__Output {
  boolParam?: boolean;
  int64Param?: string;
  stringParam?: string;
  doubleParam?: number;
  uint64Param?: string;
  parameterChoice: "boolParam" | "int64Param" | "stringParam" | "doubleParam" | "uint64Param";
}
