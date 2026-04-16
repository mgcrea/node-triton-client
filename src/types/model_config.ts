import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  BatchInput as _inference_BatchInput,
  BatchInput__Output as _inference_BatchInput__Output,
} from "./inference/BatchInput";
import type {
  BatchOutput as _inference_BatchOutput,
  BatchOutput__Output as _inference_BatchOutput__Output,
} from "./inference/BatchOutput";
import type {
  ModelConfig as _inference_ModelConfig,
  ModelConfig__Output as _inference_ModelConfig__Output,
} from "./inference/ModelConfig";
import type {
  ModelDynamicBatching as _inference_ModelDynamicBatching,
  ModelDynamicBatching__Output as _inference_ModelDynamicBatching__Output,
} from "./inference/ModelDynamicBatching";
import type {
  ModelEnsembling as _inference_ModelEnsembling,
  ModelEnsembling__Output as _inference_ModelEnsembling__Output,
} from "./inference/ModelEnsembling";
import type {
  ModelInput as _inference_ModelInput,
  ModelInput__Output as _inference_ModelInput__Output,
} from "./inference/ModelInput";
import type {
  ModelInstanceGroup as _inference_ModelInstanceGroup,
  ModelInstanceGroup__Output as _inference_ModelInstanceGroup__Output,
} from "./inference/ModelInstanceGroup";
import type {
  ModelMetrics as _inference_ModelMetrics,
  ModelMetrics__Output as _inference_ModelMetrics__Output,
} from "./inference/ModelMetrics";
import type {
  ModelOperations as _inference_ModelOperations,
  ModelOperations__Output as _inference_ModelOperations__Output,
} from "./inference/ModelOperations";
import type {
  ModelOptimizationPolicy as _inference_ModelOptimizationPolicy,
  ModelOptimizationPolicy__Output as _inference_ModelOptimizationPolicy__Output,
} from "./inference/ModelOptimizationPolicy";
import type {
  ModelOutput as _inference_ModelOutput,
  ModelOutput__Output as _inference_ModelOutput__Output,
} from "./inference/ModelOutput";
import type {
  ModelParameter as _inference_ModelParameter,
  ModelParameter__Output as _inference_ModelParameter__Output,
} from "./inference/ModelParameter";
import type {
  ModelQueuePolicy as _inference_ModelQueuePolicy,
  ModelQueuePolicy__Output as _inference_ModelQueuePolicy__Output,
} from "./inference/ModelQueuePolicy";
import type {
  ModelRateLimiter as _inference_ModelRateLimiter,
  ModelRateLimiter__Output as _inference_ModelRateLimiter__Output,
} from "./inference/ModelRateLimiter";
import type {
  ModelRepositoryAgents as _inference_ModelRepositoryAgents,
  ModelRepositoryAgents__Output as _inference_ModelRepositoryAgents__Output,
} from "./inference/ModelRepositoryAgents";
import type {
  ModelResponseCache as _inference_ModelResponseCache,
  ModelResponseCache__Output as _inference_ModelResponseCache__Output,
} from "./inference/ModelResponseCache";
import type {
  ModelSequenceBatching as _inference_ModelSequenceBatching,
  ModelSequenceBatching__Output as _inference_ModelSequenceBatching__Output,
} from "./inference/ModelSequenceBatching";
import type {
  ModelTensorReshape as _inference_ModelTensorReshape,
  ModelTensorReshape__Output as _inference_ModelTensorReshape__Output,
} from "./inference/ModelTensorReshape";
import type {
  ModelTransactionPolicy as _inference_ModelTransactionPolicy,
  ModelTransactionPolicy__Output as _inference_ModelTransactionPolicy__Output,
} from "./inference/ModelTransactionPolicy";
import type {
  ModelVersionPolicy as _inference_ModelVersionPolicy,
  ModelVersionPolicy__Output as _inference_ModelVersionPolicy__Output,
} from "./inference/ModelVersionPolicy";
import type {
  ModelWarmup as _inference_ModelWarmup,
  ModelWarmup__Output as _inference_ModelWarmup__Output,
} from "./inference/ModelWarmup";

export type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  inference: {
    BatchInput: MessageTypeDefinition<_inference_BatchInput, _inference_BatchInput__Output>;
    BatchOutput: MessageTypeDefinition<_inference_BatchOutput, _inference_BatchOutput__Output>;
    DataType: EnumTypeDefinition;
    ModelConfig: MessageTypeDefinition<_inference_ModelConfig, _inference_ModelConfig__Output>;
    ModelDynamicBatching: MessageTypeDefinition<
      _inference_ModelDynamicBatching,
      _inference_ModelDynamicBatching__Output
    >;
    ModelEnsembling: MessageTypeDefinition<
      _inference_ModelEnsembling,
      _inference_ModelEnsembling__Output
    >;
    ModelInput: MessageTypeDefinition<_inference_ModelInput, _inference_ModelInput__Output>;
    ModelInstanceGroup: MessageTypeDefinition<
      _inference_ModelInstanceGroup,
      _inference_ModelInstanceGroup__Output
    >;
    ModelMetrics: MessageTypeDefinition<_inference_ModelMetrics, _inference_ModelMetrics__Output>;
    ModelOperations: MessageTypeDefinition<
      _inference_ModelOperations,
      _inference_ModelOperations__Output
    >;
    ModelOptimizationPolicy: MessageTypeDefinition<
      _inference_ModelOptimizationPolicy,
      _inference_ModelOptimizationPolicy__Output
    >;
    ModelOutput: MessageTypeDefinition<_inference_ModelOutput, _inference_ModelOutput__Output>;
    ModelParameter: MessageTypeDefinition<
      _inference_ModelParameter,
      _inference_ModelParameter__Output
    >;
    ModelQueuePolicy: MessageTypeDefinition<
      _inference_ModelQueuePolicy,
      _inference_ModelQueuePolicy__Output
    >;
    ModelRateLimiter: MessageTypeDefinition<
      _inference_ModelRateLimiter,
      _inference_ModelRateLimiter__Output
    >;
    ModelRepositoryAgents: MessageTypeDefinition<
      _inference_ModelRepositoryAgents,
      _inference_ModelRepositoryAgents__Output
    >;
    ModelResponseCache: MessageTypeDefinition<
      _inference_ModelResponseCache,
      _inference_ModelResponseCache__Output
    >;
    ModelSequenceBatching: MessageTypeDefinition<
      _inference_ModelSequenceBatching,
      _inference_ModelSequenceBatching__Output
    >;
    ModelTensorReshape: MessageTypeDefinition<
      _inference_ModelTensorReshape,
      _inference_ModelTensorReshape__Output
    >;
    ModelTransactionPolicy: MessageTypeDefinition<
      _inference_ModelTransactionPolicy,
      _inference_ModelTransactionPolicy__Output
    >;
    ModelVersionPolicy: MessageTypeDefinition<
      _inference_ModelVersionPolicy,
      _inference_ModelVersionPolicy__Output
    >;
    ModelWarmup: MessageTypeDefinition<_inference_ModelWarmup, _inference_ModelWarmup__Output>;
  };
}
