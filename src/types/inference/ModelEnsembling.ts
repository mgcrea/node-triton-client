// Original file: proto/model_config.proto

import type { Long } from "@grpc/proto-loader";

/**
 * @@  .. cpp:var:: message Step
 * @@
 * @@     Each step specifies a model included in the ensemble,
 * @@     maps ensemble tensor names to the model input tensors,
 * @@     and maps model output tensors to ensemble tensor names
 * @@
 */
export interface _inference_ModelEnsembling_Step {
  /**
   * @@  .. cpp:var:: string model_name
   * @@
   * @@     The name of the model to execute for this step of the ensemble.
   * @@
   */
  modelName?: string;
  /**
   * @@  .. cpp:var:: int64 model_version
   * @@
   * @@     The version of the model to use for inference. If -1
   * @@     the latest/most-recent version of the model is used.
   * @@
   */
  modelVersion?: number | string | Long;
  /**
   * @@  .. cpp:var:: map<string,string> input_map
   * @@
   * @@     Map from name of an input tensor on this step's model to ensemble
   * @@     tensor name. The ensemble tensor must have the same data type and
   * @@     shape as the model input. Each model input must be assigned to
   * @@     one ensemble tensor, but the same ensemble tensor can be assigned
   * @@     to multiple model inputs.
   * @@
   */
  inputMap?: { [key: string]: string };
  /**
   * @@  .. cpp:var:: map<string,string> output_map
   * @@
   * @@     Map from name of an output tensor on this step's model to ensemble
   * @@     tensor name. The data type and shape of the ensemble tensor will
   * @@     be inferred from the model output. It is optional to assign all
   * @@     model outputs to ensemble tensors. One ensemble tensor name
   * @@     can appear in an output map only once.
   * @@
   */
  outputMap?: { [key: string]: string };
  /**
   * @@  .. cpp:var:: string model_namespace
   * @@
   * @@     [RESERVED] currently this field is reserved for internal use, users
   * @@     must not set any value to this field to avoid unexpected behavior.
   * @@
   */
  modelNamespace?: string;
}

/**
 * @@  .. cpp:var:: message Step
 * @@
 * @@     Each step specifies a model included in the ensemble,
 * @@     maps ensemble tensor names to the model input tensors,
 * @@     and maps model output tensors to ensemble tensor names
 * @@
 */
export interface _inference_ModelEnsembling_Step__Output {
  /**
   * @@  .. cpp:var:: string model_name
   * @@
   * @@     The name of the model to execute for this step of the ensemble.
   * @@
   */
  modelName: string;
  /**
   * @@  .. cpp:var:: int64 model_version
   * @@
   * @@     The version of the model to use for inference. If -1
   * @@     the latest/most-recent version of the model is used.
   * @@
   */
  modelVersion: string;
  /**
   * @@  .. cpp:var:: map<string,string> input_map
   * @@
   * @@     Map from name of an input tensor on this step's model to ensemble
   * @@     tensor name. The ensemble tensor must have the same data type and
   * @@     shape as the model input. Each model input must be assigned to
   * @@     one ensemble tensor, but the same ensemble tensor can be assigned
   * @@     to multiple model inputs.
   * @@
   */
  inputMap: { [key: string]: string };
  /**
   * @@  .. cpp:var:: map<string,string> output_map
   * @@
   * @@     Map from name of an output tensor on this step's model to ensemble
   * @@     tensor name. The data type and shape of the ensemble tensor will
   * @@     be inferred from the model output. It is optional to assign all
   * @@     model outputs to ensemble tensors. One ensemble tensor name
   * @@     can appear in an output map only once.
   * @@
   */
  outputMap: { [key: string]: string };
  /**
   * @@  .. cpp:var:: string model_namespace
   * @@
   * @@     [RESERVED] currently this field is reserved for internal use, users
   * @@     must not set any value to this field to avoid unexpected behavior.
   * @@
   */
  modelNamespace: string;
}

/**
 * @@
 * @@.. cpp:var:: message ModelEnsembling
 * @@
 * @@   Model ensembling configuration. These settings specify the models that
 * @@   compose the ensemble and how data flows between the models.
 * @@
 */
export interface ModelEnsembling {
  /**
   * @@  .. cpp:var:: Step step (repeated)
   * @@
   * @@     The models and the input / output mappings used within the ensemble.
   * @@
   */
  step?: _inference_ModelEnsembling_Step[];
}

/**
 * @@
 * @@.. cpp:var:: message ModelEnsembling
 * @@
 * @@   Model ensembling configuration. These settings specify the models that
 * @@   compose the ensemble and how data flows between the models.
 * @@
 */
export interface ModelEnsembling__Output {
  /**
   * @@  .. cpp:var:: Step step (repeated)
   * @@
   * @@     The models and the input / output mappings used within the ensemble.
   * @@
   */
  step: _inference_ModelEnsembling_Step__Output[];
}
