// Original file: proto/grpc_service.proto

import type { Long } from "@grpc/proto-loader";

/**
 * @@
 * @@.. cpp:var:: message InferParameter
 * @@
 * @@   An inference parameter value.
 * @@
 */
export interface InferParameter {
  /**
   * @@    .. cpp:var:: bool bool_param
   * @@
   * @@       A boolean parameter value.
   * @@
   */
  boolParam?: boolean;
  /**
   * @@    .. cpp:var:: int64 int64_param
   * @@
   * @@       An int64 parameter value.
   * @@
   */
  int64Param?: number | string | Long;
  /**
   * @@    .. cpp:var:: string string_param
   * @@
   * @@       A string parameter value.
   * @@
   */
  stringParam?: string;
  /**
   * @@    .. cpp:var:: double double_param
   * @@
   * @@       A double parameter value.
   * @@
   */
  doubleParam?: number | string;
  /**
   * @@    .. cpp:var:: uint64 uint64_param
   * @@
   * @@       A uint64 parameter value.
   * @@
   * @@       Not supported for custom parameters
   * @@
   */
  uint64Param?: number | string | Long;
  /**
   * @@  .. cpp:var:: oneof parameter_choice
   * @@
   * @@     The parameter value can be a string, an int64,
   * @@     an uint64, a double, or a boolean
   * @@
   * @@     Note: double and uint64 are currently
   * @@           placeholders for future use and
   * @@           are not supported for custom parameters
   * @@
   */
  parameterChoice?: "boolParam" | "int64Param" | "stringParam" | "doubleParam" | "uint64Param";
}

/**
 * @@
 * @@.. cpp:var:: message InferParameter
 * @@
 * @@   An inference parameter value.
 * @@
 */
export interface InferParameter__Output {
  /**
   * @@    .. cpp:var:: bool bool_param
   * @@
   * @@       A boolean parameter value.
   * @@
   */
  boolParam?: boolean;
  /**
   * @@    .. cpp:var:: int64 int64_param
   * @@
   * @@       An int64 parameter value.
   * @@
   */
  int64Param?: string;
  /**
   * @@    .. cpp:var:: string string_param
   * @@
   * @@       A string parameter value.
   * @@
   */
  stringParam?: string;
  /**
   * @@    .. cpp:var:: double double_param
   * @@
   * @@       A double parameter value.
   * @@
   */
  doubleParam?: number;
  /**
   * @@    .. cpp:var:: uint64 uint64_param
   * @@
   * @@       A uint64 parameter value.
   * @@
   * @@       Not supported for custom parameters
   * @@
   */
  uint64Param?: string;
  /**
   * @@  .. cpp:var:: oneof parameter_choice
   * @@
   * @@     The parameter value can be a string, an int64,
   * @@     an uint64, a double, or a boolean
   * @@
   * @@     Note: double and uint64 are currently
   * @@           placeholders for future use and
   * @@           are not supported for custom parameters
   * @@
   */
  parameterChoice: "boolParam" | "int64Param" | "stringParam" | "doubleParam" | "uint64Param";
}
