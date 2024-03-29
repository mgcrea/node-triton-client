// Original file: proto/grpc_service.proto

import type { Long } from "@grpc/proto-loader";

export interface InferTensorContents {
  boolContents?: boolean[];
  intContents?: number[];
  int64Contents?: (number | string | Long)[];
  uintContents?: number[];
  uint64Contents?: (number | string | Long)[];
  fp32Contents?: (number | string)[];
  fp64Contents?: (number | string)[];
  bytesContents?: (Buffer | Uint8Array | string)[];
}

export interface InferTensorContents__Output {
  boolContents: boolean[];
  intContents: number[];
  int64Contents: string[];
  uintContents: number[];
  uint64Contents: string[];
  fp32Contents: number[];
  fp64Contents: number[];
  bytesContents: Buffer[];
}
