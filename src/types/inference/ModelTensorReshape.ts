// Original file: proto/model_config.proto

import type { Long } from "@grpc/proto-loader";

/**
 * @@
 * @@.. cpp:var:: message ModelTensorReshape
 * @@
 * @@   Reshape specification for input and output tensors.
 * @@
 */
export interface ModelTensorReshape {
  /**
   * @@  .. cpp:var:: int64 shape (repeated)
   * @@
   * @@     The shape to use for reshaping.
   * @@
   */
  shape?: (number | string | Long)[];
}

/**
 * @@
 * @@.. cpp:var:: message ModelTensorReshape
 * @@
 * @@   Reshape specification for input and output tensors.
 * @@
 */
export interface ModelTensorReshape__Output {
  /**
   * @@  .. cpp:var:: int64 shape (repeated)
   * @@
   * @@     The shape to use for reshaping.
   * @@
   */
  shape: string[];
}
