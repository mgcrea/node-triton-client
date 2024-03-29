// Original file: proto/model_config.proto

import type { Long } from "@grpc/proto-loader";
import type {
  DataType as _inference_DataType,
  DataType__Output as _inference_DataType__Output,
} from "../inference/DataType";

/**
 * @@
 * @@  .. cpp:var:: message Input
 * @@
 * @@     Meta data associated with an input.
 * @@
 */
export interface _inference_ModelWarmup_Input {
  /**
   * @@    .. cpp:var:: DataType data_type
   * @@
   * @@       The data-type of the input.
   * @@
   */
  dataType?: _inference_DataType;
  /**
   * @@    .. cpp:var:: int64 dims (repeated)
   * @@
   * @@       The shape of the input tensor, not including the batch dimension.
   * @@
   */
  dims?: (number | string | Long)[];
  /**
   * @@
   * @@    .. cpp:var:: bool zero_data
   * @@
   * @@       The identifier for using zeros as input data. Note that the
   * @@       value of 'zero_data' will not be checked, instead, zero data
   * @@       will be used as long as the field is set.
   * @@
   */
  zeroData?: boolean;
  /**
   * @@
   * @@    .. cpp:var:: bool random_data
   * @@
   * @@       The identifier for using random data as input data. Note that
   * @@       the value of 'random_data' will not be checked, instead,
   * @@       random data will be used as long as the field is set.
   * @@
   */
  randomData?: boolean;
  /**
   * @@    .. cpp:var:: string input_data_file
   * @@
   * @@       The file whose content will be used as raw input data in
   * @@       row-major order. The file must be provided in a sub-directory
   * @@       'warmup' under the model directory. The file contents should be
   * @@       in binary format. For TYPE_STRING data-type, an element is
   * @@       represented by a 4-byte unsigned integer giving the length
   * @@       followed by the actual bytes.
   * @@
   */
  inputDataFile?: string;
  /**
   * @@    .. cpp:var:: oneof input_data_type
   * @@
   * @@       Specify how the input data is generated. If the input has STRING
   * @@       data type and 'random_data' is set, the data generation will fall
   * @@       back to 'zero_data'.
   * @@
   */
  inputDataType?: "zeroData" | "randomData" | "inputDataFile";
}

/**
 * @@
 * @@  .. cpp:var:: message Input
 * @@
 * @@     Meta data associated with an input.
 * @@
 */
export interface _inference_ModelWarmup_Input__Output {
  /**
   * @@    .. cpp:var:: DataType data_type
   * @@
   * @@       The data-type of the input.
   * @@
   */
  dataType: _inference_DataType__Output;
  /**
   * @@    .. cpp:var:: int64 dims (repeated)
   * @@
   * @@       The shape of the input tensor, not including the batch dimension.
   * @@
   */
  dims: string[];
  /**
   * @@
   * @@    .. cpp:var:: bool zero_data
   * @@
   * @@       The identifier for using zeros as input data. Note that the
   * @@       value of 'zero_data' will not be checked, instead, zero data
   * @@       will be used as long as the field is set.
   * @@
   */
  zeroData?: boolean;
  /**
   * @@
   * @@    .. cpp:var:: bool random_data
   * @@
   * @@       The identifier for using random data as input data. Note that
   * @@       the value of 'random_data' will not be checked, instead,
   * @@       random data will be used as long as the field is set.
   * @@
   */
  randomData?: boolean;
  /**
   * @@    .. cpp:var:: string input_data_file
   * @@
   * @@       The file whose content will be used as raw input data in
   * @@       row-major order. The file must be provided in a sub-directory
   * @@       'warmup' under the model directory. The file contents should be
   * @@       in binary format. For TYPE_STRING data-type, an element is
   * @@       represented by a 4-byte unsigned integer giving the length
   * @@       followed by the actual bytes.
   * @@
   */
  inputDataFile?: string;
  /**
   * @@    .. cpp:var:: oneof input_data_type
   * @@
   * @@       Specify how the input data is generated. If the input has STRING
   * @@       data type and 'random_data' is set, the data generation will fall
   * @@       back to 'zero_data'.
   * @@
   */
  inputDataType: "zeroData" | "randomData" | "inputDataFile";
}

/**
 * @@
 * @@.. cpp:var:: message ModelWarmup
 * @@
 * @@   Settings used to construct the request sample for model warmup.
 * @@
 */
export interface ModelWarmup {
  /**
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the request sample.
   * @@
   */
  name?: string;
  /**
   * @@  .. cpp:var:: uint32 batch_size
   * @@
   * @@     The batch size of the inference request. This must be >= 1. For
   * @@     models that don't support batching, batch_size must be 1. If
   * @@     batch_size > 1, the 'inputs' specified below will be duplicated to
   * @@     match the batch size requested.
   * @@
   */
  batchSize?: number;
  /**
   * @@  .. cpp:var:: map<string, Input> inputs
   * @@
   * @@     The warmup meta data associated with every model input, including
   * @@     control tensors.
   * @@
   */
  inputs?: { [key: string]: _inference_ModelWarmup_Input };
  /**
   * @@  .. cpp:var:: uint32 count
   * @@
   * @@     The number of iterations that this warmup sample will be executed.
   * @@     For example, if this field is set to 2, 2 model executions using this
   * @@     sample will be scheduled for warmup. Default value is 0 which
   * @@     indicates that this sample will be used only once.
   * @@     Note that for sequence model, 'count' may not work well
   * @@     because the model often expect a valid sequence of requests which
   * @@     should be represented by a series of warmup samples. 'count > 1'
   * @@     essentially "resends" one of the sample, which may invalidate the
   * @@     sequence and result in unexpected warmup failure.
   * @@
   */
  count?: number;
}

/**
 * @@
 * @@.. cpp:var:: message ModelWarmup
 * @@
 * @@   Settings used to construct the request sample for model warmup.
 * @@
 */
export interface ModelWarmup__Output {
  /**
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the request sample.
   * @@
   */
  name: string;
  /**
   * @@  .. cpp:var:: uint32 batch_size
   * @@
   * @@     The batch size of the inference request. This must be >= 1. For
   * @@     models that don't support batching, batch_size must be 1. If
   * @@     batch_size > 1, the 'inputs' specified below will be duplicated to
   * @@     match the batch size requested.
   * @@
   */
  batchSize: number;
  /**
   * @@  .. cpp:var:: map<string, Input> inputs
   * @@
   * @@     The warmup meta data associated with every model input, including
   * @@     control tensors.
   * @@
   */
  inputs: { [key: string]: _inference_ModelWarmup_Input__Output };
  /**
   * @@  .. cpp:var:: uint32 count
   * @@
   * @@     The number of iterations that this warmup sample will be executed.
   * @@     For example, if this field is set to 2, 2 model executions using this
   * @@     sample will be scheduled for warmup. Default value is 0 which
   * @@     indicates that this sample will be used only once.
   * @@     Note that for sequence model, 'count' may not work well
   * @@     because the model often expect a valid sequence of requests which
   * @@     should be represented by a series of warmup samples. 'count > 1'
   * @@     essentially "resends" one of the sample, which may invalidate the
   * @@     sequence and result in unexpected warmup failure.
   * @@
   */
  count: number;
}
