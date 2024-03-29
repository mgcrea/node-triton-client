// Original file: proto/model_config.proto

/**
 * @@
 * @@.. cpp:enum:: DataType
 * @@
 * @@   Data types supported for input and output tensors.
 * @@
 */
export const DataType = {
  /**
   * @@  .. cpp:enumerator:: DataType::INVALID = 0
   */
  TYPE_INVALID: "TYPE_INVALID",
  /**
   * @@  .. cpp:enumerator:: DataType::BOOL = 1
   */
  TYPE_BOOL: "TYPE_BOOL",
  /**
   * @@  .. cpp:enumerator:: DataType::UINT8 = 2
   */
  TYPE_UINT8: "TYPE_UINT8",
  /**
   * @@  .. cpp:enumerator:: DataType::UINT16 = 3
   */
  TYPE_UINT16: "TYPE_UINT16",
  /**
   * @@  .. cpp:enumerator:: DataType::UINT32 = 4
   */
  TYPE_UINT32: "TYPE_UINT32",
  /**
   * @@  .. cpp:enumerator:: DataType::UINT64 = 5
   */
  TYPE_UINT64: "TYPE_UINT64",
  /**
   * @@  .. cpp:enumerator:: DataType::INT8 = 6
   */
  TYPE_INT8: "TYPE_INT8",
  /**
   * @@  .. cpp:enumerator:: DataType::INT16 = 7
   */
  TYPE_INT16: "TYPE_INT16",
  /**
   * @@  .. cpp:enumerator:: DataType::INT32 = 8
   */
  TYPE_INT32: "TYPE_INT32",
  /**
   * @@  .. cpp:enumerator:: DataType::INT64 = 9
   */
  TYPE_INT64: "TYPE_INT64",
  /**
   * @@  .. cpp:enumerator:: DataType::FP16 = 10
   */
  TYPE_FP16: "TYPE_FP16",
  /**
   * @@  .. cpp:enumerator:: DataType::FP32 = 11
   */
  TYPE_FP32: "TYPE_FP32",
  /**
   * @@  .. cpp:enumerator:: DataType::FP64 = 12
   */
  TYPE_FP64: "TYPE_FP64",
  /**
   * @@  .. cpp:enumerator:: DataType::STRING = 13
   */
  TYPE_STRING: "TYPE_STRING",
  /**
   * @@  .. cpp:enumerator:: DataType::BF16 = 14
   */
  TYPE_BF16: "TYPE_BF16",
} as const;

/**
 * @@
 * @@.. cpp:enum:: DataType
 * @@
 * @@   Data types supported for input and output tensors.
 * @@
 */
export type DataType =
  /**
   * @@  .. cpp:enumerator:: DataType::INVALID = 0
   */
  | "TYPE_INVALID"
  | 0
  /**
   * @@  .. cpp:enumerator:: DataType::BOOL = 1
   */
  | "TYPE_BOOL"
  | 1
  /**
   * @@  .. cpp:enumerator:: DataType::UINT8 = 2
   */
  | "TYPE_UINT8"
  | 2
  /**
   * @@  .. cpp:enumerator:: DataType::UINT16 = 3
   */
  | "TYPE_UINT16"
  | 3
  /**
   * @@  .. cpp:enumerator:: DataType::UINT32 = 4
   */
  | "TYPE_UINT32"
  | 4
  /**
   * @@  .. cpp:enumerator:: DataType::UINT64 = 5
   */
  | "TYPE_UINT64"
  | 5
  /**
   * @@  .. cpp:enumerator:: DataType::INT8 = 6
   */
  | "TYPE_INT8"
  | 6
  /**
   * @@  .. cpp:enumerator:: DataType::INT16 = 7
   */
  | "TYPE_INT16"
  | 7
  /**
   * @@  .. cpp:enumerator:: DataType::INT32 = 8
   */
  | "TYPE_INT32"
  | 8
  /**
   * @@  .. cpp:enumerator:: DataType::INT64 = 9
   */
  | "TYPE_INT64"
  | 9
  /**
   * @@  .. cpp:enumerator:: DataType::FP16 = 10
   */
  | "TYPE_FP16"
  | 10
  /**
   * @@  .. cpp:enumerator:: DataType::FP32 = 11
   */
  | "TYPE_FP32"
  | 11
  /**
   * @@  .. cpp:enumerator:: DataType::FP64 = 12
   */
  | "TYPE_FP64"
  | 12
  /**
   * @@  .. cpp:enumerator:: DataType::STRING = 13
   */
  | "TYPE_STRING"
  | 13
  /**
   * @@  .. cpp:enumerator:: DataType::BF16 = 14
   */
  | "TYPE_BF16"
  | 14;

/**
 * @@
 * @@.. cpp:enum:: DataType
 * @@
 * @@   Data types supported for input and output tensors.
 * @@
 */
export type DataType__Output = (typeof DataType)[keyof typeof DataType];
