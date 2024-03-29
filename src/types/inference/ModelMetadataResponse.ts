// Original file: proto/grpc_service.proto

import type { Long } from "@grpc/proto-loader";

/**
 * @@
 * @@  .. cpp:var:: message TensorMetadata
 * @@
 * @@     Metadata for a tensor.
 * @@
 */
export interface _inference_ModelMetadataResponse_TensorMetadata {
  /**
   * @@
   * @@    .. cpp:var:: string name
   * @@
   * @@       The tensor name.
   * @@
   */
  name?: string;
  /**
   * @@
   * @@    .. cpp:var:: string datatype
   * @@
   * @@       The tensor data type.
   * @@
   */
  datatype?: string;
  /**
   * @@
   * @@    .. cpp:var:: int64 shape (repeated)
   * @@
   * @@       The tensor shape. A variable-size dimension is represented
   * @@       by a -1 value.
   * @@
   */
  shape?: (number | string | Long)[];
}

/**
 * @@
 * @@  .. cpp:var:: message TensorMetadata
 * @@
 * @@     Metadata for a tensor.
 * @@
 */
export interface _inference_ModelMetadataResponse_TensorMetadata__Output {
  /**
   * @@
   * @@    .. cpp:var:: string name
   * @@
   * @@       The tensor name.
   * @@
   */
  name: string;
  /**
   * @@
   * @@    .. cpp:var:: string datatype
   * @@
   * @@       The tensor data type.
   * @@
   */
  datatype: string;
  /**
   * @@
   * @@    .. cpp:var:: int64 shape (repeated)
   * @@
   * @@       The tensor shape. A variable-size dimension is represented
   * @@       by a -1 value.
   * @@
   */
  shape: string[];
}

/**
 * @@
 * @@.. cpp:var:: message ModelMetadataResponse
 * @@
 * @@   Response message for ModelMetadata.
 * @@
 */
export interface ModelMetadataResponse {
  /**
   * @@
   * @@  .. cpp:var:: string name
   * @@
   * @@     The model name.
   * @@
   */
  name?: string;
  /**
   * @@
   * @@  .. cpp:var:: string versions (repeated)
   * @@
   * @@     The versions of the model.
   * @@
   */
  versions?: string[];
  /**
   * @@
   * @@  .. cpp:var:: string platform
   * @@
   * @@     The model's platform.
   * @@
   */
  platform?: string;
  /**
   * @@
   * @@  .. cpp:var:: TensorMetadata inputs (repeated)
   * @@
   * @@     The model's inputs.
   * @@
   */
  inputs?: _inference_ModelMetadataResponse_TensorMetadata[];
  /**
   * @@
   * @@  .. cpp:var:: TensorMetadata outputs (repeated)
   * @@
   * @@     The model's outputs.
   * @@
   */
  outputs?: _inference_ModelMetadataResponse_TensorMetadata[];
}

/**
 * @@
 * @@.. cpp:var:: message ModelMetadataResponse
 * @@
 * @@   Response message for ModelMetadata.
 * @@
 */
export interface ModelMetadataResponse__Output {
  /**
   * @@
   * @@  .. cpp:var:: string name
   * @@
   * @@     The model name.
   * @@
   */
  name: string;
  /**
   * @@
   * @@  .. cpp:var:: string versions (repeated)
   * @@
   * @@     The versions of the model.
   * @@
   */
  versions: string[];
  /**
   * @@
   * @@  .. cpp:var:: string platform
   * @@
   * @@     The model's platform.
   * @@
   */
  platform: string;
  /**
   * @@
   * @@  .. cpp:var:: TensorMetadata inputs (repeated)
   * @@
   * @@     The model's inputs.
   * @@
   */
  inputs: _inference_ModelMetadataResponse_TensorMetadata__Output[];
  /**
   * @@
   * @@  .. cpp:var:: TensorMetadata outputs (repeated)
   * @@
   * @@     The model's outputs.
   * @@
   */
  outputs: _inference_ModelMetadataResponse_TensorMetadata__Output[];
}
