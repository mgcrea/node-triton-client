import type * as grpc from "@grpc/grpc-js";
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
  CudaSharedMemoryRegisterRequest as _inference_CudaSharedMemoryRegisterRequest,
  CudaSharedMemoryRegisterRequest__Output as _inference_CudaSharedMemoryRegisterRequest__Output,
} from "./inference/CudaSharedMemoryRegisterRequest";
import type {
  CudaSharedMemoryRegisterResponse as _inference_CudaSharedMemoryRegisterResponse,
  CudaSharedMemoryRegisterResponse__Output as _inference_CudaSharedMemoryRegisterResponse__Output,
} from "./inference/CudaSharedMemoryRegisterResponse";
import type {
  CudaSharedMemoryStatusRequest as _inference_CudaSharedMemoryStatusRequest,
  CudaSharedMemoryStatusRequest__Output as _inference_CudaSharedMemoryStatusRequest__Output,
} from "./inference/CudaSharedMemoryStatusRequest";
import type {
  CudaSharedMemoryStatusResponse as _inference_CudaSharedMemoryStatusResponse,
  CudaSharedMemoryStatusResponse__Output as _inference_CudaSharedMemoryStatusResponse__Output,
} from "./inference/CudaSharedMemoryStatusResponse";
import type {
  CudaSharedMemoryUnregisterRequest as _inference_CudaSharedMemoryUnregisterRequest,
  CudaSharedMemoryUnregisterRequest__Output as _inference_CudaSharedMemoryUnregisterRequest__Output,
} from "./inference/CudaSharedMemoryUnregisterRequest";
import type {
  CudaSharedMemoryUnregisterResponse as _inference_CudaSharedMemoryUnregisterResponse,
  CudaSharedMemoryUnregisterResponse__Output as _inference_CudaSharedMemoryUnregisterResponse__Output,
} from "./inference/CudaSharedMemoryUnregisterResponse";
import type {
  GRPCInferenceServiceClient as _inference_GRPCInferenceServiceClient,
  GRPCInferenceServiceDefinition as _inference_GRPCInferenceServiceDefinition,
} from "./inference/GRPCInferenceService";
import type {
  InferBatchStatistics as _inference_InferBatchStatistics,
  InferBatchStatistics__Output as _inference_InferBatchStatistics__Output,
} from "./inference/InferBatchStatistics";
import type {
  InferParameter as _inference_InferParameter,
  InferParameter__Output as _inference_InferParameter__Output,
} from "./inference/InferParameter";
import type {
  InferResponseStatistics as _inference_InferResponseStatistics,
  InferResponseStatistics__Output as _inference_InferResponseStatistics__Output,
} from "./inference/InferResponseStatistics";
import type {
  InferStatistics as _inference_InferStatistics,
  InferStatistics__Output as _inference_InferStatistics__Output,
} from "./inference/InferStatistics";
import type {
  InferTensorContents as _inference_InferTensorContents,
  InferTensorContents__Output as _inference_InferTensorContents__Output,
} from "./inference/InferTensorContents";
import type {
  LogSettingsRequest as _inference_LogSettingsRequest,
  LogSettingsRequest__Output as _inference_LogSettingsRequest__Output,
} from "./inference/LogSettingsRequest";
import type {
  LogSettingsResponse as _inference_LogSettingsResponse,
  LogSettingsResponse__Output as _inference_LogSettingsResponse__Output,
} from "./inference/LogSettingsResponse";
import type {
  MemoryUsage as _inference_MemoryUsage,
  MemoryUsage__Output as _inference_MemoryUsage__Output,
} from "./inference/MemoryUsage";
import type {
  ModelConfig as _inference_ModelConfig,
  ModelConfig__Output as _inference_ModelConfig__Output,
} from "./inference/ModelConfig";
import type {
  ModelConfigRequest as _inference_ModelConfigRequest,
  ModelConfigRequest__Output as _inference_ModelConfigRequest__Output,
} from "./inference/ModelConfigRequest";
import type {
  ModelConfigResponse as _inference_ModelConfigResponse,
  ModelConfigResponse__Output as _inference_ModelConfigResponse__Output,
} from "./inference/ModelConfigResponse";
import type {
  ModelDynamicBatching as _inference_ModelDynamicBatching,
  ModelDynamicBatching__Output as _inference_ModelDynamicBatching__Output,
} from "./inference/ModelDynamicBatching";
import type {
  ModelEnsembling as _inference_ModelEnsembling,
  ModelEnsembling__Output as _inference_ModelEnsembling__Output,
} from "./inference/ModelEnsembling";
import type {
  ModelInferRequest as _inference_ModelInferRequest,
  ModelInferRequest__Output as _inference_ModelInferRequest__Output,
} from "./inference/ModelInferRequest";
import type {
  ModelInferResponse as _inference_ModelInferResponse,
  ModelInferResponse__Output as _inference_ModelInferResponse__Output,
} from "./inference/ModelInferResponse";
import type {
  ModelInput as _inference_ModelInput,
  ModelInput__Output as _inference_ModelInput__Output,
} from "./inference/ModelInput";
import type {
  ModelInstanceGroup as _inference_ModelInstanceGroup,
  ModelInstanceGroup__Output as _inference_ModelInstanceGroup__Output,
} from "./inference/ModelInstanceGroup";
import type {
  ModelMetadataRequest as _inference_ModelMetadataRequest,
  ModelMetadataRequest__Output as _inference_ModelMetadataRequest__Output,
} from "./inference/ModelMetadataRequest";
import type {
  ModelMetadataResponse as _inference_ModelMetadataResponse,
  ModelMetadataResponse__Output as _inference_ModelMetadataResponse__Output,
} from "./inference/ModelMetadataResponse";
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
  ModelReadyRequest as _inference_ModelReadyRequest,
  ModelReadyRequest__Output as _inference_ModelReadyRequest__Output,
} from "./inference/ModelReadyRequest";
import type {
  ModelReadyResponse as _inference_ModelReadyResponse,
  ModelReadyResponse__Output as _inference_ModelReadyResponse__Output,
} from "./inference/ModelReadyResponse";
import type {
  ModelRepositoryAgents as _inference_ModelRepositoryAgents,
  ModelRepositoryAgents__Output as _inference_ModelRepositoryAgents__Output,
} from "./inference/ModelRepositoryAgents";
import type {
  ModelRepositoryParameter as _inference_ModelRepositoryParameter,
  ModelRepositoryParameter__Output as _inference_ModelRepositoryParameter__Output,
} from "./inference/ModelRepositoryParameter";
import type {
  ModelResponseCache as _inference_ModelResponseCache,
  ModelResponseCache__Output as _inference_ModelResponseCache__Output,
} from "./inference/ModelResponseCache";
import type {
  ModelSequenceBatching as _inference_ModelSequenceBatching,
  ModelSequenceBatching__Output as _inference_ModelSequenceBatching__Output,
} from "./inference/ModelSequenceBatching";
import type {
  ModelStatistics as _inference_ModelStatistics,
  ModelStatistics__Output as _inference_ModelStatistics__Output,
} from "./inference/ModelStatistics";
import type {
  ModelStatisticsRequest as _inference_ModelStatisticsRequest,
  ModelStatisticsRequest__Output as _inference_ModelStatisticsRequest__Output,
} from "./inference/ModelStatisticsRequest";
import type {
  ModelStatisticsResponse as _inference_ModelStatisticsResponse,
  ModelStatisticsResponse__Output as _inference_ModelStatisticsResponse__Output,
} from "./inference/ModelStatisticsResponse";
import type {
  ModelStreamInferResponse as _inference_ModelStreamInferResponse,
  ModelStreamInferResponse__Output as _inference_ModelStreamInferResponse__Output,
} from "./inference/ModelStreamInferResponse";
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
import type {
  RepositoryIndexRequest as _inference_RepositoryIndexRequest,
  RepositoryIndexRequest__Output as _inference_RepositoryIndexRequest__Output,
} from "./inference/RepositoryIndexRequest";
import type {
  RepositoryIndexResponse as _inference_RepositoryIndexResponse,
  RepositoryIndexResponse__Output as _inference_RepositoryIndexResponse__Output,
} from "./inference/RepositoryIndexResponse";
import type {
  RepositoryModelLoadRequest as _inference_RepositoryModelLoadRequest,
  RepositoryModelLoadRequest__Output as _inference_RepositoryModelLoadRequest__Output,
} from "./inference/RepositoryModelLoadRequest";
import type {
  RepositoryModelLoadResponse as _inference_RepositoryModelLoadResponse,
  RepositoryModelLoadResponse__Output as _inference_RepositoryModelLoadResponse__Output,
} from "./inference/RepositoryModelLoadResponse";
import type {
  RepositoryModelUnloadRequest as _inference_RepositoryModelUnloadRequest,
  RepositoryModelUnloadRequest__Output as _inference_RepositoryModelUnloadRequest__Output,
} from "./inference/RepositoryModelUnloadRequest";
import type {
  RepositoryModelUnloadResponse as _inference_RepositoryModelUnloadResponse,
  RepositoryModelUnloadResponse__Output as _inference_RepositoryModelUnloadResponse__Output,
} from "./inference/RepositoryModelUnloadResponse";
import type {
  ServerLiveRequest as _inference_ServerLiveRequest,
  ServerLiveRequest__Output as _inference_ServerLiveRequest__Output,
} from "./inference/ServerLiveRequest";
import type {
  ServerLiveResponse as _inference_ServerLiveResponse,
  ServerLiveResponse__Output as _inference_ServerLiveResponse__Output,
} from "./inference/ServerLiveResponse";
import type {
  ServerMetadataRequest as _inference_ServerMetadataRequest,
  ServerMetadataRequest__Output as _inference_ServerMetadataRequest__Output,
} from "./inference/ServerMetadataRequest";
import type {
  ServerMetadataResponse as _inference_ServerMetadataResponse,
  ServerMetadataResponse__Output as _inference_ServerMetadataResponse__Output,
} from "./inference/ServerMetadataResponse";
import type {
  ServerReadyRequest as _inference_ServerReadyRequest,
  ServerReadyRequest__Output as _inference_ServerReadyRequest__Output,
} from "./inference/ServerReadyRequest";
import type {
  ServerReadyResponse as _inference_ServerReadyResponse,
  ServerReadyResponse__Output as _inference_ServerReadyResponse__Output,
} from "./inference/ServerReadyResponse";
import type {
  StatisticDuration as _inference_StatisticDuration,
  StatisticDuration__Output as _inference_StatisticDuration__Output,
} from "./inference/StatisticDuration";
import type {
  SystemSharedMemoryRegisterRequest as _inference_SystemSharedMemoryRegisterRequest,
  SystemSharedMemoryRegisterRequest__Output as _inference_SystemSharedMemoryRegisterRequest__Output,
} from "./inference/SystemSharedMemoryRegisterRequest";
import type {
  SystemSharedMemoryRegisterResponse as _inference_SystemSharedMemoryRegisterResponse,
  SystemSharedMemoryRegisterResponse__Output as _inference_SystemSharedMemoryRegisterResponse__Output,
} from "./inference/SystemSharedMemoryRegisterResponse";
import type {
  SystemSharedMemoryStatusRequest as _inference_SystemSharedMemoryStatusRequest,
  SystemSharedMemoryStatusRequest__Output as _inference_SystemSharedMemoryStatusRequest__Output,
} from "./inference/SystemSharedMemoryStatusRequest";
import type {
  SystemSharedMemoryStatusResponse as _inference_SystemSharedMemoryStatusResponse,
  SystemSharedMemoryStatusResponse__Output as _inference_SystemSharedMemoryStatusResponse__Output,
} from "./inference/SystemSharedMemoryStatusResponse";
import type {
  SystemSharedMemoryUnregisterRequest as _inference_SystemSharedMemoryUnregisterRequest,
  SystemSharedMemoryUnregisterRequest__Output as _inference_SystemSharedMemoryUnregisterRequest__Output,
} from "./inference/SystemSharedMemoryUnregisterRequest";
import type {
  SystemSharedMemoryUnregisterResponse as _inference_SystemSharedMemoryUnregisterResponse,
  SystemSharedMemoryUnregisterResponse__Output as _inference_SystemSharedMemoryUnregisterResponse__Output,
} from "./inference/SystemSharedMemoryUnregisterResponse";
import type {
  TraceSettingRequest as _inference_TraceSettingRequest,
  TraceSettingRequest__Output as _inference_TraceSettingRequest__Output,
} from "./inference/TraceSettingRequest";
import type {
  TraceSettingResponse as _inference_TraceSettingResponse,
  TraceSettingResponse__Output as _inference_TraceSettingResponse__Output,
} from "./inference/TraceSettingResponse";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  inference: {
    BatchInput: MessageTypeDefinition<_inference_BatchInput, _inference_BatchInput__Output>;
    BatchOutput: MessageTypeDefinition<_inference_BatchOutput, _inference_BatchOutput__Output>;
    CudaSharedMemoryRegisterRequest: MessageTypeDefinition<
      _inference_CudaSharedMemoryRegisterRequest,
      _inference_CudaSharedMemoryRegisterRequest__Output
    >;
    CudaSharedMemoryRegisterResponse: MessageTypeDefinition<
      _inference_CudaSharedMemoryRegisterResponse,
      _inference_CudaSharedMemoryRegisterResponse__Output
    >;
    CudaSharedMemoryStatusRequest: MessageTypeDefinition<
      _inference_CudaSharedMemoryStatusRequest,
      _inference_CudaSharedMemoryStatusRequest__Output
    >;
    CudaSharedMemoryStatusResponse: MessageTypeDefinition<
      _inference_CudaSharedMemoryStatusResponse,
      _inference_CudaSharedMemoryStatusResponse__Output
    >;
    CudaSharedMemoryUnregisterRequest: MessageTypeDefinition<
      _inference_CudaSharedMemoryUnregisterRequest,
      _inference_CudaSharedMemoryUnregisterRequest__Output
    >;
    CudaSharedMemoryUnregisterResponse: MessageTypeDefinition<
      _inference_CudaSharedMemoryUnregisterResponse,
      _inference_CudaSharedMemoryUnregisterResponse__Output
    >;
    DataType: EnumTypeDefinition;
    /**
     * @@
     * @@.. cpp:var:: service InferenceService
     * @@
     * @@   Inference Server GRPC endpoints.
     * @@
     */
    GRPCInferenceService: SubtypeConstructor<
      typeof grpc.Client,
      _inference_GRPCInferenceServiceClient
    > & { service: _inference_GRPCInferenceServiceDefinition };
    InferBatchStatistics: MessageTypeDefinition<
      _inference_InferBatchStatistics,
      _inference_InferBatchStatistics__Output
    >;
    InferParameter: MessageTypeDefinition<
      _inference_InferParameter,
      _inference_InferParameter__Output
    >;
    InferResponseStatistics: MessageTypeDefinition<
      _inference_InferResponseStatistics,
      _inference_InferResponseStatistics__Output
    >;
    InferStatistics: MessageTypeDefinition<
      _inference_InferStatistics,
      _inference_InferStatistics__Output
    >;
    InferTensorContents: MessageTypeDefinition<
      _inference_InferTensorContents,
      _inference_InferTensorContents__Output
    >;
    LogSettingsRequest: MessageTypeDefinition<
      _inference_LogSettingsRequest,
      _inference_LogSettingsRequest__Output
    >;
    LogSettingsResponse: MessageTypeDefinition<
      _inference_LogSettingsResponse,
      _inference_LogSettingsResponse__Output
    >;
    MemoryUsage: MessageTypeDefinition<_inference_MemoryUsage, _inference_MemoryUsage__Output>;
    ModelConfig: MessageTypeDefinition<_inference_ModelConfig, _inference_ModelConfig__Output>;
    ModelConfigRequest: MessageTypeDefinition<
      _inference_ModelConfigRequest,
      _inference_ModelConfigRequest__Output
    >;
    ModelConfigResponse: MessageTypeDefinition<
      _inference_ModelConfigResponse,
      _inference_ModelConfigResponse__Output
    >;
    ModelDynamicBatching: MessageTypeDefinition<
      _inference_ModelDynamicBatching,
      _inference_ModelDynamicBatching__Output
    >;
    ModelEnsembling: MessageTypeDefinition<
      _inference_ModelEnsembling,
      _inference_ModelEnsembling__Output
    >;
    ModelInferRequest: MessageTypeDefinition<
      _inference_ModelInferRequest,
      _inference_ModelInferRequest__Output
    >;
    ModelInferResponse: MessageTypeDefinition<
      _inference_ModelInferResponse,
      _inference_ModelInferResponse__Output
    >;
    ModelInput: MessageTypeDefinition<_inference_ModelInput, _inference_ModelInput__Output>;
    ModelInstanceGroup: MessageTypeDefinition<
      _inference_ModelInstanceGroup,
      _inference_ModelInstanceGroup__Output
    >;
    ModelMetadataRequest: MessageTypeDefinition<
      _inference_ModelMetadataRequest,
      _inference_ModelMetadataRequest__Output
    >;
    ModelMetadataResponse: MessageTypeDefinition<
      _inference_ModelMetadataResponse,
      _inference_ModelMetadataResponse__Output
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
    ModelReadyRequest: MessageTypeDefinition<
      _inference_ModelReadyRequest,
      _inference_ModelReadyRequest__Output
    >;
    ModelReadyResponse: MessageTypeDefinition<
      _inference_ModelReadyResponse,
      _inference_ModelReadyResponse__Output
    >;
    ModelRepositoryAgents: MessageTypeDefinition<
      _inference_ModelRepositoryAgents,
      _inference_ModelRepositoryAgents__Output
    >;
    ModelRepositoryParameter: MessageTypeDefinition<
      _inference_ModelRepositoryParameter,
      _inference_ModelRepositoryParameter__Output
    >;
    ModelResponseCache: MessageTypeDefinition<
      _inference_ModelResponseCache,
      _inference_ModelResponseCache__Output
    >;
    ModelSequenceBatching: MessageTypeDefinition<
      _inference_ModelSequenceBatching,
      _inference_ModelSequenceBatching__Output
    >;
    ModelStatistics: MessageTypeDefinition<
      _inference_ModelStatistics,
      _inference_ModelStatistics__Output
    >;
    ModelStatisticsRequest: MessageTypeDefinition<
      _inference_ModelStatisticsRequest,
      _inference_ModelStatisticsRequest__Output
    >;
    ModelStatisticsResponse: MessageTypeDefinition<
      _inference_ModelStatisticsResponse,
      _inference_ModelStatisticsResponse__Output
    >;
    ModelStreamInferResponse: MessageTypeDefinition<
      _inference_ModelStreamInferResponse,
      _inference_ModelStreamInferResponse__Output
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
    RepositoryIndexRequest: MessageTypeDefinition<
      _inference_RepositoryIndexRequest,
      _inference_RepositoryIndexRequest__Output
    >;
    RepositoryIndexResponse: MessageTypeDefinition<
      _inference_RepositoryIndexResponse,
      _inference_RepositoryIndexResponse__Output
    >;
    RepositoryModelLoadRequest: MessageTypeDefinition<
      _inference_RepositoryModelLoadRequest,
      _inference_RepositoryModelLoadRequest__Output
    >;
    RepositoryModelLoadResponse: MessageTypeDefinition<
      _inference_RepositoryModelLoadResponse,
      _inference_RepositoryModelLoadResponse__Output
    >;
    RepositoryModelUnloadRequest: MessageTypeDefinition<
      _inference_RepositoryModelUnloadRequest,
      _inference_RepositoryModelUnloadRequest__Output
    >;
    RepositoryModelUnloadResponse: MessageTypeDefinition<
      _inference_RepositoryModelUnloadResponse,
      _inference_RepositoryModelUnloadResponse__Output
    >;
    ServerLiveRequest: MessageTypeDefinition<
      _inference_ServerLiveRequest,
      _inference_ServerLiveRequest__Output
    >;
    ServerLiveResponse: MessageTypeDefinition<
      _inference_ServerLiveResponse,
      _inference_ServerLiveResponse__Output
    >;
    ServerMetadataRequest: MessageTypeDefinition<
      _inference_ServerMetadataRequest,
      _inference_ServerMetadataRequest__Output
    >;
    ServerMetadataResponse: MessageTypeDefinition<
      _inference_ServerMetadataResponse,
      _inference_ServerMetadataResponse__Output
    >;
    ServerReadyRequest: MessageTypeDefinition<
      _inference_ServerReadyRequest,
      _inference_ServerReadyRequest__Output
    >;
    ServerReadyResponse: MessageTypeDefinition<
      _inference_ServerReadyResponse,
      _inference_ServerReadyResponse__Output
    >;
    StatisticDuration: MessageTypeDefinition<
      _inference_StatisticDuration,
      _inference_StatisticDuration__Output
    >;
    SystemSharedMemoryRegisterRequest: MessageTypeDefinition<
      _inference_SystemSharedMemoryRegisterRequest,
      _inference_SystemSharedMemoryRegisterRequest__Output
    >;
    SystemSharedMemoryRegisterResponse: MessageTypeDefinition<
      _inference_SystemSharedMemoryRegisterResponse,
      _inference_SystemSharedMemoryRegisterResponse__Output
    >;
    SystemSharedMemoryStatusRequest: MessageTypeDefinition<
      _inference_SystemSharedMemoryStatusRequest,
      _inference_SystemSharedMemoryStatusRequest__Output
    >;
    SystemSharedMemoryStatusResponse: MessageTypeDefinition<
      _inference_SystemSharedMemoryStatusResponse,
      _inference_SystemSharedMemoryStatusResponse__Output
    >;
    SystemSharedMemoryUnregisterRequest: MessageTypeDefinition<
      _inference_SystemSharedMemoryUnregisterRequest,
      _inference_SystemSharedMemoryUnregisterRequest__Output
    >;
    SystemSharedMemoryUnregisterResponse: MessageTypeDefinition<
      _inference_SystemSharedMemoryUnregisterResponse,
      _inference_SystemSharedMemoryUnregisterResponse__Output
    >;
    TraceSettingRequest: MessageTypeDefinition<
      _inference_TraceSettingRequest,
      _inference_TraceSettingRequest__Output
    >;
    TraceSettingResponse: MessageTypeDefinition<
      _inference_TraceSettingResponse,
      _inference_TraceSettingResponse__Output
    >;
  };
}
