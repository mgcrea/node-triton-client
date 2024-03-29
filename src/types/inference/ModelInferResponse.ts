// Original file: proto/grpc_service.proto

import type { Long } from "@grpc/proto-loader";
import type {
  InferParameter as _inference_InferParameter,
  InferParameter__Output as _inference_InferParameter__Output,
} from "../inference/InferParameter";
import type {
  InferTensorContents as _inference_InferTensorContents,
  InferTensorContents__Output as _inference_InferTensorContents__Output,
} from "../inference/InferTensorContents";

/**
 * @@
 * @@  .. cpp:var:: message InferOutputTensor
 * @@
 * @@     An output tensor returned for an inference request.
 * @@
 */
export interface _inference_ModelInferResponse_InferOutputTensor {
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
   * @@       The tensor shape.
   * @@
   */
  shape?: (number | string | Long)[];
  /**
   * @@    .. cpp:var:: map<string,InferParameter> parameters
   * @@
   * @@       Optional output tensor parameters.
   * @@
   */
  parameters?: { [key: string]: _inference_InferParameter };
  /**
   * @@    .. cpp:var:: InferTensorContents contents
   * @@
   * @@       The tensor contents using a data-type format. This field
   * @@       must not be specified if tensor contents are being specified
   * @@       in ModelInferResponse.raw_output_contents.
   * @@
   */
  contents?: _inference_InferTensorContents | null;
}

/**
 * @@
 * @@  .. cpp:var:: message InferOutputTensor
 * @@
 * @@     An output tensor returned for an inference request.
 * @@
 */
export interface _inference_ModelInferResponse_InferOutputTensor__Output {
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
   * @@       The tensor shape.
   * @@
   */
  shape: string[];
  /**
   * @@    .. cpp:var:: map<string,InferParameter> parameters
   * @@
   * @@       Optional output tensor parameters.
   * @@
   */
  parameters: { [key: string]: _inference_InferParameter__Output };
  /**
   * @@    .. cpp:var:: InferTensorContents contents
   * @@
   * @@       The tensor contents using a data-type format. This field
   * @@       must not be specified if tensor contents are being specified
   * @@       in ModelInferResponse.raw_output_contents.
   * @@
   */
  contents: _inference_InferTensorContents__Output | null;
}

/**
 * @@
 * @@.. cpp:var:: message ModelInferResponse
 * @@
 * @@   Response message for ModelInfer.
 * @@
 */
export interface ModelInferResponse {
  /**
   * @@  .. cpp:var:: string model_name
   * @@
   * @@     The name of the model used for inference.
   * @@
   */
  modelName?: string;
  /**
   * @@  .. cpp:var:: string model_version
   * @@
   * @@     The version of the model used for inference.
   * @@
   */
  modelVersion?: string;
  /**
   * @@  .. cpp:var:: string id
   * @@
   * @@     The id of the inference request if one was specified.
   * @@
   */
  id?: string;
  /**
   * @@  .. cpp:var:: map<string,InferParameter> parameters
   * @@
   * @@     Optional inference response parameters.
   * @@
   */
  parameters?: { [key: string]: _inference_InferParameter };
  /**
   * @@
   * @@  .. cpp:var:: InferOutputTensor outputs (repeated)
   * @@
   * @@     The output tensors holding inference results.
   * @@
   */
  outputs?: _inference_ModelInferResponse_InferOutputTensor[];
  /**
   * @@
   * @@  .. cpp:var:: bytes raw_output_contents
   * @@
   * @@     The data contained in an output tensor can be represented in
   * @@     "raw" bytes form or in the repeated type that matches the
   * @@     tensor's data type. Using the "raw" bytes form will
   * @@     typically allow higher performance due to the way protobuf
   * @@     allocation and reuse interacts with GRPC. For example, see
   * @@     https://github.com/grpc/grpc/issues/23231.
   * @@
   * @@     To use the raw representation 'raw_output_contents' must be
   * @@     initialized with data for each tensor in the same order as
   * @@     'outputs'. For each tensor, the size of this content must
   * @@     match what is expected by the tensor's shape and data
   * @@     type. The raw data must be the flattened, one-dimensional,
   * @@     row-major order of the tensor elements without any stride
   * @@     or padding between the elements. Note that the FP16 and BF16 data
   * @@     types must be represented as raw content as there is no
   * @@     specific data type for a 16-bit float type.
   * @@
   * @@     If this field is specified then InferOutputTensor::contents
   * @@     must not be specified for any output tensor.
   * @@
   */
  rawOutputContents?: (Buffer | Uint8Array | string)[];
}

/**
 * @@
 * @@.. cpp:var:: message ModelInferResponse
 * @@
 * @@   Response message for ModelInfer.
 * @@
 */
export interface ModelInferResponse__Output {
  /**
   * @@  .. cpp:var:: string model_name
   * @@
   * @@     The name of the model used for inference.
   * @@
   */
  modelName: string;
  /**
   * @@  .. cpp:var:: string model_version
   * @@
   * @@     The version of the model used for inference.
   * @@
   */
  modelVersion: string;
  /**
   * @@  .. cpp:var:: string id
   * @@
   * @@     The id of the inference request if one was specified.
   * @@
   */
  id: string;
  /**
   * @@  .. cpp:var:: map<string,InferParameter> parameters
   * @@
   * @@     Optional inference response parameters.
   * @@
   */
  parameters: { [key: string]: _inference_InferParameter__Output };
  /**
   * @@
   * @@  .. cpp:var:: InferOutputTensor outputs (repeated)
   * @@
   * @@     The output tensors holding inference results.
   * @@
   */
  outputs: _inference_ModelInferResponse_InferOutputTensor__Output[];
  /**
   * @@
   * @@  .. cpp:var:: bytes raw_output_contents
   * @@
   * @@     The data contained in an output tensor can be represented in
   * @@     "raw" bytes form or in the repeated type that matches the
   * @@     tensor's data type. Using the "raw" bytes form will
   * @@     typically allow higher performance due to the way protobuf
   * @@     allocation and reuse interacts with GRPC. For example, see
   * @@     https://github.com/grpc/grpc/issues/23231.
   * @@
   * @@     To use the raw representation 'raw_output_contents' must be
   * @@     initialized with data for each tensor in the same order as
   * @@     'outputs'. For each tensor, the size of this content must
   * @@     match what is expected by the tensor's shape and data
   * @@     type. The raw data must be the flattened, one-dimensional,
   * @@     row-major order of the tensor elements without any stride
   * @@     or padding between the elements. Note that the FP16 and BF16 data
   * @@     types must be represented as raw content as there is no
   * @@     specific data type for a 16-bit float type.
   * @@
   * @@     If this field is specified then InferOutputTensor::contents
   * @@     must not be specified for any output tensor.
   * @@
   */
  rawOutputContents: Buffer[];
}
