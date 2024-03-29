// Original file: proto/model_config.proto

export const DataType = {
  TYPE_INVALID: "TYPE_INVALID",
  TYPE_BOOL: "TYPE_BOOL",
  TYPE_UINT8: "TYPE_UINT8",
  TYPE_UINT16: "TYPE_UINT16",
  TYPE_UINT32: "TYPE_UINT32",
  TYPE_UINT64: "TYPE_UINT64",
  TYPE_INT8: "TYPE_INT8",
  TYPE_INT16: "TYPE_INT16",
  TYPE_INT32: "TYPE_INT32",
  TYPE_INT64: "TYPE_INT64",
  TYPE_FP16: "TYPE_FP16",
  TYPE_FP32: "TYPE_FP32",
  TYPE_FP64: "TYPE_FP64",
  TYPE_STRING: "TYPE_STRING",
  TYPE_BF16: "TYPE_BF16",
} as const;

export type DataType =
  | "TYPE_INVALID"
  | 0
  | "TYPE_BOOL"
  | 1
  | "TYPE_UINT8"
  | 2
  | "TYPE_UINT16"
  | 3
  | "TYPE_UINT32"
  | 4
  | "TYPE_UINT64"
  | 5
  | "TYPE_INT8"
  | 6
  | "TYPE_INT16"
  | 7
  | "TYPE_INT32"
  | 8
  | "TYPE_INT64"
  | 9
  | "TYPE_FP16"
  | 10
  | "TYPE_FP32"
  | 11
  | "TYPE_FP64"
  | 12
  | "TYPE_STRING"
  | 13
  | "TYPE_BF16"
  | 14;

export type DataType__Output = (typeof DataType)[keyof typeof DataType];
