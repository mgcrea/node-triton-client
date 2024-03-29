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

export interface ModelConfig {
  name?: string;
  platform?: string;
  versionPolicy?: _inference_ModelVersionPolicy | null;
  maxBatchSize?: number;
  input?: _inference_ModelInput[];
  output?: _inference_ModelOutput[];
  instanceGroup?: _inference_ModelInstanceGroup[];
  defaultModelFilename?: string;
  ccModelFilenames?: { [key: string]: string };
  metricTags?: { [key: string]: string };
  dynamicBatching?: _inference_ModelDynamicBatching | null;
  optimization?: _inference_ModelOptimizationPolicy | null;
  sequenceBatching?: _inference_ModelSequenceBatching | null;
  parameters?: { [key: string]: _inference_ModelParameter };
  ensembleScheduling?: _inference_ModelEnsembling | null;
  modelWarmup?: _inference_ModelWarmup[];
  backend?: string;
  modelOperations?: _inference_ModelOperations | null;
  modelTransactionPolicy?: _inference_ModelTransactionPolicy | null;
  batchInput?: _inference_BatchInput[];
  batchOutput?: _inference_BatchOutput[];
  modelRepositoryAgents?: _inference_ModelRepositoryAgents | null;
  responseCache?: _inference_ModelResponseCache | null;
  runtime?: string;
  schedulingChoice?: "dynamicBatching" | "sequenceBatching" | "ensembleScheduling";
}

export interface ModelConfig__Output {
  name: string;
  platform: string;
  versionPolicy: _inference_ModelVersionPolicy__Output | null;
  maxBatchSize: number;
  input: _inference_ModelInput__Output[];
  output: _inference_ModelOutput__Output[];
  instanceGroup: _inference_ModelInstanceGroup__Output[];
  defaultModelFilename: string;
  ccModelFilenames: { [key: string]: string };
  metricTags: { [key: string]: string };
  dynamicBatching?: _inference_ModelDynamicBatching__Output | null;
  optimization: _inference_ModelOptimizationPolicy__Output | null;
  sequenceBatching?: _inference_ModelSequenceBatching__Output | null;
  parameters: { [key: string]: _inference_ModelParameter__Output };
  ensembleScheduling?: _inference_ModelEnsembling__Output | null;
  modelWarmup: _inference_ModelWarmup__Output[];
  backend: string;
  modelOperations: _inference_ModelOperations__Output | null;
  modelTransactionPolicy: _inference_ModelTransactionPolicy__Output | null;
  batchInput: _inference_BatchInput__Output[];
  batchOutput: _inference_BatchOutput__Output[];
  modelRepositoryAgents: _inference_ModelRepositoryAgents__Output | null;
  responseCache: _inference_ModelResponseCache__Output | null;
  runtime: string;
  schedulingChoice: "dynamicBatching" | "sequenceBatching" | "ensembleScheduling";
}
