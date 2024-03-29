// Original file: proto/grpc_service.proto

import type { Long } from "@grpc/proto-loader";

/**
 * @@
 * @@.. cpp:var:: message InferTensorContents
 * @@
 * @@   The data contained in a tensor represented by the repeated type
 * @@   that matches the tensor's data type. Protobuf oneof is not used
 * @@   because oneofs cannot contain repeated fields.
 * @@
 */
export interface InferTensorContents {
  /**
   * @@
   * @@  .. cpp:var:: bool bool_contents (repeated)
   * @@
   * @@     Representation for BOOL data type. The size must match what is
   * @@     expected by the tensor's shape. The contents must be the flattened,
   * @@     one-dimensional, row-major order of the tensor elements.
   * @@
   */
  boolContents?: boolean[];
  /**
   * @@
   * @@  .. cpp:var:: int32 int_contents (repeated)
   * @@
   * @@     Representation for INT8, INT16, and INT32 data types. The size
   * @@     must match what is expected by the tensor's shape. The contents
   * @@     must be the flattened, one-dimensional, row-major order of the
   * @@     tensor elements.
   * @@
   */
  intContents?: number[];
  /**
   * @@
   * @@  .. cpp:var:: int64 int64_contents (repeated)
   * @@
   * @@     Representation for INT64 data types. The size must match what
   * @@     is expected by the tensor's shape. The contents must be the
   * @@     flattened, one-dimensional, row-major order of the tensor elements.
   * @@
   */
  int64Contents?: (number | string | Long)[];
  /**
   * @@
   * @@  .. cpp:var:: uint32 uint_contents (repeated)
   * @@
   * @@     Representation for UINT8, UINT16, and UINT32 data types. The size
   * @@     must match what is expected by the tensor's shape. The contents
   * @@     must be the flattened, one-dimensional, row-major order of the
   * @@     tensor elements.
   * @@
   */
  uintContents?: number[];
  /**
   * @@
   * @@  .. cpp:var:: uint64 uint64_contents (repeated)
   * @@
   * @@     Representation for UINT64 data types. The size must match what
   * @@     is expected by the tensor's shape. The contents must be the
   * @@     flattened, one-dimensional, row-major order of the tensor elements.
   * @@
   */
  uint64Contents?: (number | string | Long)[];
  /**
   * @@
   * @@  .. cpp:var:: float fp32_contents (repeated)
   * @@
   * @@     Representation for FP32 data type. The size must match what is
   * @@     expected by the tensor's shape. The contents must be the flattened,
   * @@     one-dimensional, row-major order of the tensor elements.
   * @@
   */
  fp32Contents?: (number | string)[];
  /**
   * @@
   * @@  .. cpp:var:: double fp64_contents (repeated)
   * @@
   * @@     Representation for FP64 data type. The size must match what is
   * @@     expected by the tensor's shape. The contents must be the flattened,
   * @@     one-dimensional, row-major order of the tensor elements.
   * @@
   */
  fp64Contents?: (number | string)[];
  /**
   * @@
   * @@  .. cpp:var:: bytes bytes_contents (repeated)
   * @@
   * @@     Representation for BYTES data type. The size must match what is
   * @@     expected by the tensor's shape. The contents must be the flattened,
   * @@     one-dimensional, row-major order of the tensor elements.
   * @@
   */
  bytesContents?: (Buffer | Uint8Array | string)[];
}

/**
 * @@
 * @@.. cpp:var:: message InferTensorContents
 * @@
 * @@   The data contained in a tensor represented by the repeated type
 * @@   that matches the tensor's data type. Protobuf oneof is not used
 * @@   because oneofs cannot contain repeated fields.
 * @@
 */
export interface InferTensorContents__Output {
  /**
   * @@
   * @@  .. cpp:var:: bool bool_contents (repeated)
   * @@
   * @@     Representation for BOOL data type. The size must match what is
   * @@     expected by the tensor's shape. The contents must be the flattened,
   * @@     one-dimensional, row-major order of the tensor elements.
   * @@
   */
  boolContents: boolean[];
  /**
   * @@
   * @@  .. cpp:var:: int32 int_contents (repeated)
   * @@
   * @@     Representation for INT8, INT16, and INT32 data types. The size
   * @@     must match what is expected by the tensor's shape. The contents
   * @@     must be the flattened, one-dimensional, row-major order of the
   * @@     tensor elements.
   * @@
   */
  intContents: number[];
  /**
   * @@
   * @@  .. cpp:var:: int64 int64_contents (repeated)
   * @@
   * @@     Representation for INT64 data types. The size must match what
   * @@     is expected by the tensor's shape. The contents must be the
   * @@     flattened, one-dimensional, row-major order of the tensor elements.
   * @@
   */
  int64Contents: string[];
  /**
   * @@
   * @@  .. cpp:var:: uint32 uint_contents (repeated)
   * @@
   * @@     Representation for UINT8, UINT16, and UINT32 data types. The size
   * @@     must match what is expected by the tensor's shape. The contents
   * @@     must be the flattened, one-dimensional, row-major order of the
   * @@     tensor elements.
   * @@
   */
  uintContents: number[];
  /**
   * @@
   * @@  .. cpp:var:: uint64 uint64_contents (repeated)
   * @@
   * @@     Representation for UINT64 data types. The size must match what
   * @@     is expected by the tensor's shape. The contents must be the
   * @@     flattened, one-dimensional, row-major order of the tensor elements.
   * @@
   */
  uint64Contents: string[];
  /**
   * @@
   * @@  .. cpp:var:: float fp32_contents (repeated)
   * @@
   * @@     Representation for FP32 data type. The size must match what is
   * @@     expected by the tensor's shape. The contents must be the flattened,
   * @@     one-dimensional, row-major order of the tensor elements.
   * @@
   */
  fp32Contents: number[];
  /**
   * @@
   * @@  .. cpp:var:: double fp64_contents (repeated)
   * @@
   * @@     Representation for FP64 data type. The size must match what is
   * @@     expected by the tensor's shape. The contents must be the flattened,
   * @@     one-dimensional, row-major order of the tensor elements.
   * @@
   */
  fp64Contents: number[];
  /**
   * @@
   * @@  .. cpp:var:: bytes bytes_contents (repeated)
   * @@
   * @@     Representation for BYTES data type. The size must match what is
   * @@     expected by the tensor's shape. The contents must be the flattened,
   * @@     one-dimensional, row-major order of the tensor elements.
   * @@
   */
  bytesContents: Buffer[];
}
