// Original file: proto/model_config.proto

import type {
  BatchInput as _inference_BatchInput,
  BatchInput__Output as _inference_BatchInput__Output,
} from "../inference/BatchInput";
import type {
  BatchOutput as _inference_BatchOutput,
  BatchOutput__Output as _inference_BatchOutput__Output,
} from "../inference/BatchOutput";
import type {
  ModelDynamicBatching as _inference_ModelDynamicBatching,
  ModelDynamicBatching__Output as _inference_ModelDynamicBatching__Output,
} from "../inference/ModelDynamicBatching";
import type {
  ModelEnsembling as _inference_ModelEnsembling,
  ModelEnsembling__Output as _inference_ModelEnsembling__Output,
} from "../inference/ModelEnsembling";
import type {
  ModelInput as _inference_ModelInput,
  ModelInput__Output as _inference_ModelInput__Output,
} from "../inference/ModelInput";
import type {
  ModelInstanceGroup as _inference_ModelInstanceGroup,
  ModelInstanceGroup__Output as _inference_ModelInstanceGroup__Output,
} from "../inference/ModelInstanceGroup";
import type {
  ModelOperations as _inference_ModelOperations,
  ModelOperations__Output as _inference_ModelOperations__Output,
} from "../inference/ModelOperations";
import type {
  ModelOptimizationPolicy as _inference_ModelOptimizationPolicy,
  ModelOptimizationPolicy__Output as _inference_ModelOptimizationPolicy__Output,
} from "../inference/ModelOptimizationPolicy";
import type {
  ModelOutput as _inference_ModelOutput,
  ModelOutput__Output as _inference_ModelOutput__Output,
} from "../inference/ModelOutput";
import type {
  ModelParameter as _inference_ModelParameter,
  ModelParameter__Output as _inference_ModelParameter__Output,
} from "../inference/ModelParameter";
import type {
  ModelRepositoryAgents as _inference_ModelRepositoryAgents,
  ModelRepositoryAgents__Output as _inference_ModelRepositoryAgents__Output,
} from "../inference/ModelRepositoryAgents";
import type {
  ModelResponseCache as _inference_ModelResponseCache,
  ModelResponseCache__Output as _inference_ModelResponseCache__Output,
} from "../inference/ModelResponseCache";
import type {
  ModelSequenceBatching as _inference_ModelSequenceBatching,
  ModelSequenceBatching__Output as _inference_ModelSequenceBatching__Output,
} from "../inference/ModelSequenceBatching";
import type {
  ModelTransactionPolicy as _inference_ModelTransactionPolicy,
  ModelTransactionPolicy__Output as _inference_ModelTransactionPolicy__Output,
} from "../inference/ModelTransactionPolicy";
import type {
  ModelVersionPolicy as _inference_ModelVersionPolicy,
  ModelVersionPolicy__Output as _inference_ModelVersionPolicy__Output,
} from "../inference/ModelVersionPolicy";
import type {
  ModelWarmup as _inference_ModelWarmup,
  ModelWarmup__Output as _inference_ModelWarmup__Output,
} from "../inference/ModelWarmup";

/**
 * @@
 * @@.. cpp:var:: message ModelConfig
 * @@
 * @@   A model configuration.
 * @@
 */
export interface ModelConfig {
  /**
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the model.
   * @@
   */
  name?: string;
  /**
   * @@  .. cpp:var:: string platform
   * @@
   * @@     Additional backend-specific configuration for the model.
   * @@     Please refer to the backend documentation on whether this field
   * @@     should be specified.
   * @@
   */
  platform?: string;
  /**
   * @@  .. cpp:var:: ModelVersionPolicy version_policy
   * @@
   * @@     Policy indicating which version(s) of the model will be served.
   * @@
   */
  versionPolicy?: _inference_ModelVersionPolicy | null;
  /**
   * @@  .. cpp:var:: int32 max_batch_size
   * @@
   * @@     Maximum batch size allowed for inference. This can only decrease
   * @@     what is allowed by the model itself. A max_batch_size value of 0
   * @@     indicates that batching is not allowed for the model and the
   * @@     dimension/shape of the input and output tensors must exactly
   * @@     match what is specified in the input and output configuration. A
   * @@     max_batch_size value > 0 indicates that batching is allowed and
   * @@     so the model expects the input tensors to have an additional
   * @@     initial dimension for the batching that is not specified in the
   * @@     input (for example, if the model supports batched inputs of
   * @@     2-dimensional tensors then the model configuration will specify
   * @@     the input shape as [ X, Y ] but the model will expect the actual
   * @@     input tensors to have shape [ N, X, Y ]). For max_batch_size > 0
   * @@     returned outputs will also have an additional initial dimension
   * @@     for the batch.
   * @@
   */
  maxBatchSize?: number;
  /**
   * @@  .. cpp:var:: ModelInput input (repeated)
   * @@
   * @@     The inputs request by the model.
   * @@
   */
  input?: _inference_ModelInput[];
  /**
   * @@  .. cpp:var:: ModelOutput output (repeated)
   * @@
   * @@     The outputs produced by the model.
   * @@
   */
  output?: _inference_ModelOutput[];
  /**
   * @@  .. cpp:var:: ModelInstanceGroup instance_group (repeated)
   * @@
   * @@     Instances of this model. If not specified, one instance
   * @@     of the model will be instantiated on each available GPU.
   * @@
   */
  instanceGroup?: _inference_ModelInstanceGroup[];
  /**
   * @@  .. cpp:var:: string default_model_filename
   * @@
   * @@     Optional filename of the model file to use if a
   * @@     compute-capability specific model is not specified in
   * @@     :cpp:var:`cc_model_filenames`. If not specified the default name
   * @@     is 'model.graphdef', 'model.savedmodel', 'model.plan' or
   * @@     'model.pt' depending on the model type.
   * @@
   */
  defaultModelFilename?: string;
  /**
   * @@  .. cpp:var:: map<string,string> cc_model_filenames
   * @@
   * @@     Optional map from CUDA compute capability to the filename of
   * @@     the model that supports that compute capability. The filename
   * @@     refers to a file within the model version directory.
   * @@
   */
  ccModelFilenames?: { [key: string]: string };
  /**
   * @@  .. cpp:var:: map<string,string> metric_tags
   * @@
   * @@     Optional metric tags. User-specific key-value pairs for metrics
   * @@     reported for this model. These tags are applied to the metrics
   * @@     reported on the HTTP metrics port.
   * @@
   */
  metricTags?: { [key: string]: string };
  /**
   * @@    .. cpp:var:: ModelDynamicBatching dynamic_batching
   * @@
   * @@       If specified, enables the dynamic-batching scheduling
   * @@       policy. With dynamic-batching the scheduler may group
   * @@       together independent requests into a single batch to
   * @@       improve inference throughput.
   * @@
   */
  dynamicBatching?: _inference_ModelDynamicBatching | null;
  /**
   * @@  .. cpp:var:: ModelOptimizationPolicy optimization
   * @@
   * @@     Optimization configuration for the model. If not specified
   * @@     then default optimization policy is used.
   * @@
   */
  optimization?: _inference_ModelOptimizationPolicy | null;
  /**
   * @@    .. cpp:var:: ModelSequenceBatching sequence_batching
   * @@
   * @@       If specified, enables the sequence-batching scheduling
   * @@       policy. With sequence-batching, inference requests
   * @@       with the same correlation ID are routed to the same
   * @@       model instance. Multiple sequences of inference requests
   * @@       may be batched together into a single batch to
   * @@       improve inference throughput.
   * @@
   */
  sequenceBatching?: _inference_ModelSequenceBatching | null;
  /**
   * @@  .. cpp:var:: map<string,ModelParameter> parameters
   * @@
   * @@     Optional model parameters. User-specified parameter values.
   * @@
   */
  parameters?: { [key: string]: _inference_ModelParameter };
  /**
   * @@    .. cpp:var:: ModelEnsembling ensemble_scheduling
   * @@
   * @@       If specified, enables the model-ensembling scheduling
   * @@       policy. With model-ensembling, inference requests
   * @@       will be processed according to the specification, such as an
   * @@       execution sequence of models. The input specified in this model
   * @@       config will be the input for the ensemble, and the output
   * @@       specified will be the output of the ensemble.
   * @@
   */
  ensembleScheduling?: _inference_ModelEnsembling | null;
  /**
   * @@  .. cpp:var:: ModelWarmup model_warmup (repeated)
   * @@
   * @@     Warmup setting of this model. If specified, all instances
   * @@     will be run with the request samples in sequence before
   * @@     serving the model.
   * @@     This field can only be specified if the model is not an ensemble
   * @@     model.
   * @@
   */
  modelWarmup?: _inference_ModelWarmup[];
  /**
   * @@  .. cpp:var:: string backend
   * @@
   * @@     The backend used by the model.
   * @@
   */
  backend?: string;
  /**
   * @@  .. cpp:var:: ModelOperations model_operations
   * @@
   * @@     Optional metadata of the libraries providing custom operations for
   * @@     this model.
   * @@
   */
  modelOperations?: _inference_ModelOperations | null;
  /**
   * @@  .. cpp:var:: ModelTransactionPolicy model_transaction_policy
   * @@
   * @@     Optional specification that describes the nature of transactions
   * @@     to be expected from the model.
   * @@
   */
  modelTransactionPolicy?: _inference_ModelTransactionPolicy | null;
  /**
   * @@  .. cpp:var:: BatchInput batch_input (repeated)
   * @@
   * @@     The model input(s) that the server should use to communicate
   * @@     batch related values to the model.
   * @@
   */
  batchInput?: _inference_BatchInput[];
  /**
   * @@  .. cpp:var:: BatchOutput batch_output (repeated)
   * @@
   * @@     The outputs produced by the model that requires special handling
   * @@     by the model backend.
   * @@
   */
  batchOutput?: _inference_BatchOutput[];
  /**
   * @@  .. cpp:var:: ModelRepositoryAgents model_repository_agents
   * @@
   * @@     Optional specification of the agent(s) that should be invoked
   * @@     with repository actions are performed for this model.
   * @@
   */
  modelRepositoryAgents?: _inference_ModelRepositoryAgents | null;
  /**
   * @@  .. cpp:var:: ModelResponseCache response_cache
   * @@
   * @@     Optional setting for utilizing the response cache for this
   * @@     model.
   * @@
   */
  responseCache?: _inference_ModelResponseCache | null;
  /**
   * @@  .. cpp:var:: string runtime
   * @@
   * @@     The name of the backend library file used by the model.
   * @@
   */
  runtime?: string;
  /**
   * @@  .. cpp:var:: oneof scheduling_choice
   * @@
   * @@     The scheduling policy for the model. If not specified the
   * @@     default scheduling policy is used for the model. The default
   * @@     policy is to execute each inference request independently.
   * @@
   */
  schedulingChoice?: "dynamicBatching" | "sequenceBatching" | "ensembleScheduling";
}

/**
 * @@
 * @@.. cpp:var:: message ModelConfig
 * @@
 * @@   A model configuration.
 * @@
 */
export interface ModelConfig__Output {
  /**
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the model.
   * @@
   */
  name: string;
  /**
   * @@  .. cpp:var:: string platform
   * @@
   * @@     Additional backend-specific configuration for the model.
   * @@     Please refer to the backend documentation on whether this field
   * @@     should be specified.
   * @@
   */
  platform: string;
  /**
   * @@  .. cpp:var:: ModelVersionPolicy version_policy
   * @@
   * @@     Policy indicating which version(s) of the model will be served.
   * @@
   */
  versionPolicy: _inference_ModelVersionPolicy__Output | null;
  /**
   * @@  .. cpp:var:: int32 max_batch_size
   * @@
   * @@     Maximum batch size allowed for inference. This can only decrease
   * @@     what is allowed by the model itself. A max_batch_size value of 0
   * @@     indicates that batching is not allowed for the model and the
   * @@     dimension/shape of the input and output tensors must exactly
   * @@     match what is specified in the input and output configuration. A
   * @@     max_batch_size value > 0 indicates that batching is allowed and
   * @@     so the model expects the input tensors to have an additional
   * @@     initial dimension for the batching that is not specified in the
   * @@     input (for example, if the model supports batched inputs of
   * @@     2-dimensional tensors then the model configuration will specify
   * @@     the input shape as [ X, Y ] but the model will expect the actual
   * @@     input tensors to have shape [ N, X, Y ]). For max_batch_size > 0
   * @@     returned outputs will also have an additional initial dimension
   * @@     for the batch.
   * @@
   */
  maxBatchSize: number;
  /**
   * @@  .. cpp:var:: ModelInput input (repeated)
   * @@
   * @@     The inputs request by the model.
   * @@
   */
  input: _inference_ModelInput__Output[];
  /**
   * @@  .. cpp:var:: ModelOutput output (repeated)
   * @@
   * @@     The outputs produced by the model.
   * @@
   */
  output: _inference_ModelOutput__Output[];
  /**
   * @@  .. cpp:var:: ModelInstanceGroup instance_group (repeated)
   * @@
   * @@     Instances of this model. If not specified, one instance
   * @@     of the model will be instantiated on each available GPU.
   * @@
   */
  instanceGroup: _inference_ModelInstanceGroup__Output[];
  /**
   * @@  .. cpp:var:: string default_model_filename
   * @@
   * @@     Optional filename of the model file to use if a
   * @@     compute-capability specific model is not specified in
   * @@     :cpp:var:`cc_model_filenames`. If not specified the default name
   * @@     is 'model.graphdef', 'model.savedmodel', 'model.plan' or
   * @@     'model.pt' depending on the model type.
   * @@
   */
  defaultModelFilename: string;
  /**
   * @@  .. cpp:var:: map<string,string> cc_model_filenames
   * @@
   * @@     Optional map from CUDA compute capability to the filename of
   * @@     the model that supports that compute capability. The filename
   * @@     refers to a file within the model version directory.
   * @@
   */
  ccModelFilenames: { [key: string]: string };
  /**
   * @@  .. cpp:var:: map<string,string> metric_tags
   * @@
   * @@     Optional metric tags. User-specific key-value pairs for metrics
   * @@     reported for this model. These tags are applied to the metrics
   * @@     reported on the HTTP metrics port.
   * @@
   */
  metricTags: { [key: string]: string };
  /**
   * @@    .. cpp:var:: ModelDynamicBatching dynamic_batching
   * @@
   * @@       If specified, enables the dynamic-batching scheduling
   * @@       policy. With dynamic-batching the scheduler may group
   * @@       together independent requests into a single batch to
   * @@       improve inference throughput.
   * @@
   */
  dynamicBatching?: _inference_ModelDynamicBatching__Output | null;
  /**
   * @@  .. cpp:var:: ModelOptimizationPolicy optimization
   * @@
   * @@     Optimization configuration for the model. If not specified
   * @@     then default optimization policy is used.
   * @@
   */
  optimization: _inference_ModelOptimizationPolicy__Output | null;
  /**
   * @@    .. cpp:var:: ModelSequenceBatching sequence_batching
   * @@
   * @@       If specified, enables the sequence-batching scheduling
   * @@       policy. With sequence-batching, inference requests
   * @@       with the same correlation ID are routed to the same
   * @@       model instance. Multiple sequences of inference requests
   * @@       may be batched together into a single batch to
   * @@       improve inference throughput.
   * @@
   */
  sequenceBatching?: _inference_ModelSequenceBatching__Output | null;
  /**
   * @@  .. cpp:var:: map<string,ModelParameter> parameters
   * @@
   * @@     Optional model parameters. User-specified parameter values.
   * @@
   */
  parameters: { [key: string]: _inference_ModelParameter__Output };
  /**
   * @@    .. cpp:var:: ModelEnsembling ensemble_scheduling
   * @@
   * @@       If specified, enables the model-ensembling scheduling
   * @@       policy. With model-ensembling, inference requests
   * @@       will be processed according to the specification, such as an
   * @@       execution sequence of models. The input specified in this model
   * @@       config will be the input for the ensemble, and the output
   * @@       specified will be the output of the ensemble.
   * @@
   */
  ensembleScheduling?: _inference_ModelEnsembling__Output | null;
  /**
   * @@  .. cpp:var:: ModelWarmup model_warmup (repeated)
   * @@
   * @@     Warmup setting of this model. If specified, all instances
   * @@     will be run with the request samples in sequence before
   * @@     serving the model.
   * @@     This field can only be specified if the model is not an ensemble
   * @@     model.
   * @@
   */
  modelWarmup: _inference_ModelWarmup__Output[];
  /**
   * @@  .. cpp:var:: string backend
   * @@
   * @@     The backend used by the model.
   * @@
   */
  backend: string;
  /**
   * @@  .. cpp:var:: ModelOperations model_operations
   * @@
   * @@     Optional metadata of the libraries providing custom operations for
   * @@     this model.
   * @@
   */
  modelOperations: _inference_ModelOperations__Output | null;
  /**
   * @@  .. cpp:var:: ModelTransactionPolicy model_transaction_policy
   * @@
   * @@     Optional specification that describes the nature of transactions
   * @@     to be expected from the model.
   * @@
   */
  modelTransactionPolicy: _inference_ModelTransactionPolicy__Output | null;
  /**
   * @@  .. cpp:var:: BatchInput batch_input (repeated)
   * @@
   * @@     The model input(s) that the server should use to communicate
   * @@     batch related values to the model.
   * @@
   */
  batchInput: _inference_BatchInput__Output[];
  /**
   * @@  .. cpp:var:: BatchOutput batch_output (repeated)
   * @@
   * @@     The outputs produced by the model that requires special handling
   * @@     by the model backend.
   * @@
   */
  batchOutput: _inference_BatchOutput__Output[];
  /**
   * @@  .. cpp:var:: ModelRepositoryAgents model_repository_agents
   * @@
   * @@     Optional specification of the agent(s) that should be invoked
   * @@     with repository actions are performed for this model.
   * @@
   */
  modelRepositoryAgents: _inference_ModelRepositoryAgents__Output | null;
  /**
   * @@  .. cpp:var:: ModelResponseCache response_cache
   * @@
   * @@     Optional setting for utilizing the response cache for this
   * @@     model.
   * @@
   */
  responseCache: _inference_ModelResponseCache__Output | null;
  /**
   * @@  .. cpp:var:: string runtime
   * @@
   * @@     The name of the backend library file used by the model.
   * @@
   */
  runtime: string;
  /**
   * @@  .. cpp:var:: oneof scheduling_choice
   * @@
   * @@     The scheduling policy for the model. If not specified the
   * @@     default scheduling policy is used for the model. The default
   * @@     policy is to execute each inference request independently.
   * @@
   */
  schedulingChoice: "dynamicBatching" | "sequenceBatching" | "ensembleScheduling";
}
