// Original file: proto/model_config.proto

import type { Long } from "@grpc/proto-loader";
import type {
  DataType as _inference_DataType,
  DataType__Output as _inference_DataType__Output,
} from "../inference/DataType";
import type {
  ModelTensorReshape as _inference_ModelTensorReshape,
  ModelTensorReshape__Output as _inference_ModelTensorReshape__Output,
} from "../inference/ModelTensorReshape";

// Original file: proto/model_config.proto

/**
 * @@
 * @@  .. cpp:enum:: Format
 * @@
 * @@     The format for the input.
 * @@
 */
export const _inference_ModelInput_Format = {
  /**
   * @@    .. cpp:enumerator:: Format::FORMAT_NONE = 0
   * @@
   * @@       The input has no specific format. This is the default.
   * @@
   */
  FORMAT_NONE: "FORMAT_NONE",
  /**
   * @@    .. cpp:enumerator:: Format::FORMAT_NHWC = 1
   * @@
   * @@       HWC image format. Tensors with this format require 3 dimensions
   * @@       if the model does not support batching (max_batch_size = 0) or 4
   * @@       dimensions if the model does support batching (max_batch_size
   * @@       >= 1). In either case the 'dims' below should only specify the
   * @@       3 non-batch dimensions (i.e. HWC or CHW).
   * @@
   */
  FORMAT_NHWC: "FORMAT_NHWC",
  /**
   * @@    .. cpp:enumerator:: Format::FORMAT_NCHW = 2
   * @@
   * @@       CHW image format. Tensors with this format require 3 dimensions
   * @@       if the model does not support batching (max_batch_size = 0) or 4
   * @@       dimensions if the model does support batching (max_batch_size
   * @@       >= 1). In either case the 'dims' below should only specify the
   * @@       3 non-batch dimensions (i.e. HWC or CHW).
   * @@
   */
  FORMAT_NCHW: "FORMAT_NCHW",
} as const;

/**
 * @@
 * @@  .. cpp:enum:: Format
 * @@
 * @@     The format for the input.
 * @@
 */
export type _inference_ModelInput_Format =
  /**
   * @@    .. cpp:enumerator:: Format::FORMAT_NONE = 0
   * @@
   * @@       The input has no specific format. This is the default.
   * @@
   */
  | "FORMAT_NONE"
  | 0
  /**
   * @@    .. cpp:enumerator:: Format::FORMAT_NHWC = 1
   * @@
   * @@       HWC image format. Tensors with this format require 3 dimensions
   * @@       if the model does not support batching (max_batch_size = 0) or 4
   * @@       dimensions if the model does support batching (max_batch_size
   * @@       >= 1). In either case the 'dims' below should only specify the
   * @@       3 non-batch dimensions (i.e. HWC or CHW).
   * @@
   */
  | "FORMAT_NHWC"
  | 1
  /**
   * @@    .. cpp:enumerator:: Format::FORMAT_NCHW = 2
   * @@
   * @@       CHW image format. Tensors with this format require 3 dimensions
   * @@       if the model does not support batching (max_batch_size = 0) or 4
   * @@       dimensions if the model does support batching (max_batch_size
   * @@       >= 1). In either case the 'dims' below should only specify the
   * @@       3 non-batch dimensions (i.e. HWC or CHW).
   * @@
   */
  | "FORMAT_NCHW"
  | 2;

/**
 * @@
 * @@  .. cpp:enum:: Format
 * @@
 * @@     The format for the input.
 * @@
 */
export type _inference_ModelInput_Format__Output =
  (typeof _inference_ModelInput_Format)[keyof typeof _inference_ModelInput_Format];

/**
 * @@
 * @@.. cpp:var:: message ModelInput
 * @@
 * @@   An input required by the model.
 * @@
 */
export interface ModelInput {
  /**
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the input.
   * @@
   */
  name?: string;
  /**
   * @@  .. cpp:var:: DataType data_type
   * @@
   * @@     The data-type of the input.
   * @@
   */
  dataType?: _inference_DataType;
  /**
   * @@  .. cpp:var:: Format format
   * @@
   * @@     The format of the input. Optional.
   * @@
   */
  format?: _inference_ModelInput_Format;
  /**
   * @@  .. cpp:var:: int64 dims (repeated)
   * @@
   * @@     The dimensions/shape of the input tensor that must be provided
   * @@     when invoking the inference API for this model.
   * @@
   */
  dims?: (number | string | Long)[];
  /**
   * @@  .. cpp:var:: ModelTensorReshape reshape
   * @@
   * @@     The shape expected for this input by the backend. The input will
   * @@     be reshaped to this before being presented to the backend. The
   * @@     reshape must have the same number of elements as the input shape
   * @@     specified by 'dims'. Optional.
   * @@
   */
  reshape?: _inference_ModelTensorReshape | null;
  /**
   * @@  .. cpp:var:: bool is_shape_tensor
   * @@
   * @@     Whether or not the input is a shape tensor to the model. This field
   * @@     is currently supported only for the TensorRT model. An error will be
   * @@     generated if this specification does not comply with underlying
   * @@     model.
   * @@
   */
  isShapeTensor?: boolean;
  /**
   * @@  .. cpp:var:: bool allow_ragged_batch
   * @@
   * @@     Whether or not the input is allowed to be "ragged" in a dynamically
   * @@     created batch. Default is false indicating that two requests will
   * @@     only be batched if this tensor has the same shape in both requests.
   * @@     True indicates that two requests can be batched even if this tensor
   * @@     has a different shape in each request.
   * @@
   */
  allowRaggedBatch?: boolean;
  /**
   * @@  .. cpp:var:: bool optional
   * @@
   * @@     Whether or not the input is optional for the model execution.
   * @@     If true, the input is not required in the inference request.
   * @@     Default value is false.
   * @@
   */
  optional?: boolean;
}

/**
 * @@
 * @@.. cpp:var:: message ModelInput
 * @@
 * @@   An input required by the model.
 * @@
 */
export interface ModelInput__Output {
  /**
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the input.
   * @@
   */
  name: string;
  /**
   * @@  .. cpp:var:: DataType data_type
   * @@
   * @@     The data-type of the input.
   * @@
   */
  dataType: _inference_DataType__Output;
  /**
   * @@  .. cpp:var:: Format format
   * @@
   * @@     The format of the input. Optional.
   * @@
   */
  format: _inference_ModelInput_Format__Output;
  /**
   * @@  .. cpp:var:: int64 dims (repeated)
   * @@
   * @@     The dimensions/shape of the input tensor that must be provided
   * @@     when invoking the inference API for this model.
   * @@
   */
  dims: string[];
  /**
   * @@  .. cpp:var:: ModelTensorReshape reshape
   * @@
   * @@     The shape expected for this input by the backend. The input will
   * @@     be reshaped to this before being presented to the backend. The
   * @@     reshape must have the same number of elements as the input shape
   * @@     specified by 'dims'. Optional.
   * @@
   */
  reshape: _inference_ModelTensorReshape__Output | null;
  /**
   * @@  .. cpp:var:: bool is_shape_tensor
   * @@
   * @@     Whether or not the input is a shape tensor to the model. This field
   * @@     is currently supported only for the TensorRT model. An error will be
   * @@     generated if this specification does not comply with underlying
   * @@     model.
   * @@
   */
  isShapeTensor: boolean;
  /**
   * @@  .. cpp:var:: bool allow_ragged_batch
   * @@
   * @@     Whether or not the input is allowed to be "ragged" in a dynamically
   * @@     created batch. Default is false indicating that two requests will
   * @@     only be batched if this tensor has the same shape in both requests.
   * @@     True indicates that two requests can be batched even if this tensor
   * @@     has a different shape in each request.
   * @@
   */
  allowRaggedBatch: boolean;
  /**
   * @@  .. cpp:var:: bool optional
   * @@
   * @@     Whether or not the input is optional for the model execution.
   * @@     If true, the input is not required in the inference request.
   * @@     Default value is false.
   * @@
   */
  optional: boolean;
}
