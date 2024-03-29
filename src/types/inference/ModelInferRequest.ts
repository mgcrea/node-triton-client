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
 * @@  .. cpp:var:: message InferInputTensor
 * @@
 * @@     An input tensor for an inference request.
 * @@
 */
export interface _inference_ModelInferRequest_InferInputTensor {
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
   * @@       Optional inference input tensor parameters.
   * @@
   */
  parameters?: { [key: string]: _inference_InferParameter };
  /**
   * @@    .. cpp:var:: InferTensorContents contents
   * @@
   * @@       The tensor contents using a data-type format. This field
   * @@       must not be specified if tensor contents are being specified
   * @@       in ModelInferRequest.raw_input_contents.
   * @@
   */
  contents?: _inference_InferTensorContents | null;
}

/**
 * @@
 * @@  .. cpp:var:: message InferInputTensor
 * @@
 * @@     An input tensor for an inference request.
 * @@
 */
export interface _inference_ModelInferRequest_InferInputTensor__Output {
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
   * @@       Optional inference input tensor parameters.
   * @@
   */
  parameters: { [key: string]: _inference_InferParameter__Output };
  /**
   * @@    .. cpp:var:: InferTensorContents contents
   * @@
   * @@       The tensor contents using a data-type format. This field
   * @@       must not be specified if tensor contents are being specified
   * @@       in ModelInferRequest.raw_input_contents.
   * @@
   */
  contents: _inference_InferTensorContents__Output | null;
}

/**
 * @@
 * @@  .. cpp:var:: message InferRequestedOutputTensor
 * @@
 * @@     An output tensor requested for an inference request.
 * @@
 */
export interface _inference_ModelInferRequest_InferRequestedOutputTensor {
  /**
   * @@
   * @@    .. cpp:var:: string name
   * @@
   * @@       The tensor name.
   * @@
   */
  name?: string;
  /**
   * @@    .. cpp:var:: map<string,InferParameter> parameters
   * @@
   * @@       Optional requested output tensor parameters.
   * @@
   */
  parameters?: { [key: string]: _inference_InferParameter };
}

/**
 * @@
 * @@  .. cpp:var:: message InferRequestedOutputTensor
 * @@
 * @@     An output tensor requested for an inference request.
 * @@
 */
export interface _inference_ModelInferRequest_InferRequestedOutputTensor__Output {
  /**
   * @@
   * @@    .. cpp:var:: string name
   * @@
   * @@       The tensor name.
   * @@
   */
  name: string;
  /**
   * @@    .. cpp:var:: map<string,InferParameter> parameters
   * @@
   * @@       Optional requested output tensor parameters.
   * @@
   */
  parameters: { [key: string]: _inference_InferParameter__Output };
}

/**
 * @@
 * @@.. cpp:var:: message ModelInferRequest
 * @@
 * @@   Request message for ModelInfer.
 * @@
 */
export interface ModelInferRequest {
  /**
   * @@  .. cpp:var:: string model_name
   * @@
   * @@     The name of the model to use for inferencing.
   * @@
   */
  modelName?: string;
  /**
   * @@  .. cpp:var:: string model_version
   * @@
   * @@     The version of the model to use for inference. If not
   * @@     given the latest/most-recent version of the model is used.
   * @@
   */
  modelVersion?: string;
  /**
   * @@  .. cpp:var:: string id
   * @@
   * @@     Optional identifier for the request. If specified will be
   * @@     returned in the response.
   * @@
   */
  id?: string;
  /**
   * @@  .. cpp:var:: map<string,InferParameter> parameters
   * @@
   * @@     Optional inference parameters.
   * @@
   */
  parameters?: { [key: string]: _inference_InferParameter };
  /**
   * @@
   * @@  .. cpp:var:: InferInputTensor inputs (repeated)
   * @@
   * @@     The input tensors for the inference.
   * @@
   */
  inputs?: _inference_ModelInferRequest_InferInputTensor[];
  /**
   * @@
   * @@  .. cpp:var:: InferRequestedOutputTensor outputs (repeated)
   * @@
   * @@     The requested output tensors for the inference. Optional, if not
   * @@     specified all outputs specified in the model config will be
   * @@     returned.
   * @@
   */
  outputs?: _inference_ModelInferRequest_InferRequestedOutputTensor[];
  /**
   * @@
   * @@  .. cpp:var:: bytes raw_input_contents
   * @@
   * @@     The data contained in an input tensor can be represented in
   * @@     "raw" bytes form or in the repeated type that matches the
   * @@     tensor's data type. Using the "raw" bytes form will
   * @@     typically allow higher performance due to the way protobuf
   * @@     allocation and reuse interacts with GRPC. For example, see
   * @@     https://github.com/grpc/grpc/issues/23231.
   * @@
   * @@     To use the raw representation 'raw_input_contents' must be
   * @@     initialized with data for each tensor in the same order as
   * @@     'inputs'. For each tensor, the size of this content must
   * @@     match what is expected by the tensor's shape and data
   * @@     type. The raw data must be the flattened, one-dimensional,
   * @@     row-major order of the tensor elements without any stride
   * @@     or padding between the elements. Note that the FP16 and BF16 data
   * @@     types must be represented as raw content as there is no
   * @@     specific data type for a 16-bit float type.
   * @@
   * @@     If this field is specified then InferInputTensor::contents
   * @@     must not be specified for any input tensor.
   * @@
   */
  rawInputContents?: (Buffer | Uint8Array | string)[];
}

/**
 * @@
 * @@.. cpp:var:: message ModelInferRequest
 * @@
 * @@   Request message for ModelInfer.
 * @@
 */
export interface ModelInferRequest__Output {
  /**
   * @@  .. cpp:var:: string model_name
   * @@
   * @@     The name of the model to use for inferencing.
   * @@
   */
  modelName: string;
  /**
   * @@  .. cpp:var:: string model_version
   * @@
   * @@     The version of the model to use for inference. If not
   * @@     given the latest/most-recent version of the model is used.
   * @@
   */
  modelVersion: string;
  /**
   * @@  .. cpp:var:: string id
   * @@
   * @@     Optional identifier for the request. If specified will be
   * @@     returned in the response.
   * @@
   */
  id: string;
  /**
   * @@  .. cpp:var:: map<string,InferParameter> parameters
   * @@
   * @@     Optional inference parameters.
   * @@
   */
  parameters: { [key: string]: _inference_InferParameter__Output };
  /**
   * @@
   * @@  .. cpp:var:: InferInputTensor inputs (repeated)
   * @@
   * @@     The input tensors for the inference.
   * @@
   */
  inputs: _inference_ModelInferRequest_InferInputTensor__Output[];
  /**
   * @@
   * @@  .. cpp:var:: InferRequestedOutputTensor outputs (repeated)
   * @@
   * @@     The requested output tensors for the inference. Optional, if not
   * @@     specified all outputs specified in the model config will be
   * @@     returned.
   * @@
   */
  outputs: _inference_ModelInferRequest_InferRequestedOutputTensor__Output[];
  /**
   * @@
   * @@  .. cpp:var:: bytes raw_input_contents
   * @@
   * @@     The data contained in an input tensor can be represented in
   * @@     "raw" bytes form or in the repeated type that matches the
   * @@     tensor's data type. Using the "raw" bytes form will
   * @@     typically allow higher performance due to the way protobuf
   * @@     allocation and reuse interacts with GRPC. For example, see
   * @@     https://github.com/grpc/grpc/issues/23231.
   * @@
   * @@     To use the raw representation 'raw_input_contents' must be
   * @@     initialized with data for each tensor in the same order as
   * @@     'inputs'. For each tensor, the size of this content must
   * @@     match what is expected by the tensor's shape and data
   * @@     type. The raw data must be the flattened, one-dimensional,
   * @@     row-major order of the tensor elements without any stride
   * @@     or padding between the elements. Note that the FP16 and BF16 data
   * @@     types must be represented as raw content as there is no
   * @@     specific data type for a 16-bit float type.
   * @@
   * @@     If this field is specified then InferInputTensor::contents
   * @@     must not be specified for any input tensor.
   * @@
   */
  rawInputContents: Buffer[];
}
