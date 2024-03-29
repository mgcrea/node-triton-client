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

/**
 * @@
 * @@.. cpp:var:: message ModelOutput
 * @@
 * @@   An output produced by the model.
 * @@
 */
export interface ModelOutput {
  /**
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the output.
   * @@
   */
  name?: string;
  /**
   * @@  .. cpp:var:: DataType data_type
   * @@
   * @@     The data-type of the output.
   * @@
   */
  dataType?: _inference_DataType;
  /**
   * @@  .. cpp:var:: int64 dims (repeated)
   * @@
   * @@     The dimensions/shape of the output tensor.
   * @@
   */
  dims?: (number | string | Long)[];
  /**
   * @@  .. cpp:var:: string label_filename
   * @@
   * @@     The label file associated with this output. Should be specified only
   * @@     for outputs that represent classifications. Optional.
   * @@
   */
  labelFilename?: string;
  /**
   * @@  .. cpp:var:: ModelTensorReshape reshape
   * @@
   * @@     The shape produced for this output by the backend. The output will
   * @@     be reshaped from this to the shape specified in 'dims' before being
   * @@     returned in the inference response. The reshape must have the same
   * @@     number of elements as the output shape specified by 'dims'. Optional.
   * @@
   */
  reshape?: _inference_ModelTensorReshape | null;
  /**
   * @@  .. cpp:var:: bool is_shape_tensor
   * @@
   * @@     Whether or not the output is a shape tensor to the model. This field
   * @@     is currently supported only for the TensorRT model. An error will be
   * @@     generated if this specification does not comply with underlying
   * @@     model.
   * @@
   */
  isShapeTensor?: boolean;
}

/**
 * @@
 * @@.. cpp:var:: message ModelOutput
 * @@
 * @@   An output produced by the model.
 * @@
 */
export interface ModelOutput__Output {
  /**
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the output.
   * @@
   */
  name: string;
  /**
   * @@  .. cpp:var:: DataType data_type
   * @@
   * @@     The data-type of the output.
   * @@
   */
  dataType: _inference_DataType__Output;
  /**
   * @@  .. cpp:var:: int64 dims (repeated)
   * @@
   * @@     The dimensions/shape of the output tensor.
   * @@
   */
  dims: string[];
  /**
   * @@  .. cpp:var:: string label_filename
   * @@
   * @@     The label file associated with this output. Should be specified only
   * @@     for outputs that represent classifications. Optional.
   * @@
   */
  labelFilename: string;
  /**
   * @@  .. cpp:var:: ModelTensorReshape reshape
   * @@
   * @@     The shape produced for this output by the backend. The output will
   * @@     be reshaped from this to the shape specified in 'dims' before being
   * @@     returned in the inference response. The reshape must have the same
   * @@     number of elements as the output shape specified by 'dims'. Optional.
   * @@
   */
  reshape: _inference_ModelTensorReshape__Output | null;
  /**
   * @@  .. cpp:var:: bool is_shape_tensor
   * @@
   * @@     Whether or not the output is a shape tensor to the model. This field
   * @@     is currently supported only for the TensorRT model. An error will be
   * @@     generated if this specification does not comply with underlying
   * @@     model.
   * @@
   */
  isShapeTensor: boolean;
}
