// Original file: proto/grpc_service.proto

import type { Long } from "@grpc/proto-loader";

/**
 * @@
 * @@.. cpp:var:: message ModelRepositoryParameter
 * @@
 * @@   An model repository parameter value.
 * @@
 */
export interface ModelRepositoryParameter {
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
   * @@    .. cpp:var:: bytes bytes_param
   * @@
   * @@       A bytes parameter value.
   * @@
   */
  bytesParam?: Buffer | Uint8Array | string;
  /**
   * @@  .. cpp:var:: oneof parameter_choice
   * @@
   * @@     The parameter value can be a string, an int64 or
   * @@     a boolean
   * @@
   */
  parameterChoice?: "boolParam" | "int64Param" | "stringParam" | "bytesParam";
}

/**
 * @@
 * @@.. cpp:var:: message ModelRepositoryParameter
 * @@
 * @@   An model repository parameter value.
 * @@
 */
export interface ModelRepositoryParameter__Output {
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
   * @@    .. cpp:var:: bytes bytes_param
   * @@
   * @@       A bytes parameter value.
   * @@
   */
  bytesParam?: Buffer;
  /**
   * @@  .. cpp:var:: oneof parameter_choice
   * @@
   * @@     The parameter value can be a string, an int64 or
   * @@     a boolean
   * @@
   */
  parameterChoice: "boolParam" | "int64Param" | "stringParam" | "bytesParam";
}
