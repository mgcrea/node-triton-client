import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  GRPCInferenceServiceClient as _inference_GRPCInferenceServiceClient,
  GRPCInferenceServiceDefinition as _inference_GRPCInferenceServiceDefinition,
} from "./inference/GRPCInferenceService";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  inference: {
    BatchInput: MessageTypeDefinition;
    BatchOutput: MessageTypeDefinition;
    CudaSharedMemoryRegisterRequest: MessageTypeDefinition;
    CudaSharedMemoryRegisterResponse: MessageTypeDefinition;
    CudaSharedMemoryStatusRequest: MessageTypeDefinition;
    CudaSharedMemoryStatusResponse: MessageTypeDefinition;
    CudaSharedMemoryUnregisterRequest: MessageTypeDefinition;
    CudaSharedMemoryUnregisterResponse: MessageTypeDefinition;
    DataType: EnumTypeDefinition;
    GRPCInferenceService: SubtypeConstructor<
      typeof grpc.Client,
      _inference_GRPCInferenceServiceClient
    > & { service: _inference_GRPCInferenceServiceDefinition };
    InferBatchStatistics: MessageTypeDefinition;
    InferParameter: MessageTypeDefinition;
    InferResponseStatistics: MessageTypeDefinition;
    InferStatistics: MessageTypeDefinition;
    InferTensorContents: MessageTypeDefinition;
    LogSettingsRequest: MessageTypeDefinition;
    LogSettingsResponse: MessageTypeDefinition;
    MemoryUsage: MessageTypeDefinition;
    ModelConfig: MessageTypeDefinition;
    ModelConfigRequest: MessageTypeDefinition;
    ModelConfigResponse: MessageTypeDefinition;
    ModelDynamicBatching: MessageTypeDefinition;
    ModelEnsembling: MessageTypeDefinition;
    ModelInferRequest: MessageTypeDefinition;
    ModelInferResponse: MessageTypeDefinition;
    ModelInput: MessageTypeDefinition;
    ModelInstanceGroup: MessageTypeDefinition;
    ModelMetadataRequest: MessageTypeDefinition;
    ModelMetadataResponse: MessageTypeDefinition;
    ModelOperations: MessageTypeDefinition;
    ModelOptimizationPolicy: MessageTypeDefinition;
    ModelOutput: MessageTypeDefinition;
    ModelParameter: MessageTypeDefinition;
    ModelQueuePolicy: MessageTypeDefinition;
    ModelRateLimiter: MessageTypeDefinition;
    ModelReadyRequest: MessageTypeDefinition;
    ModelReadyResponse: MessageTypeDefinition;
    ModelRepositoryAgents: MessageTypeDefinition;
    ModelRepositoryParameter: MessageTypeDefinition;
    ModelResponseCache: MessageTypeDefinition;
    ModelSequenceBatching: MessageTypeDefinition;
    ModelStatistics: MessageTypeDefinition;
    ModelStatisticsRequest: MessageTypeDefinition;
    ModelStatisticsResponse: MessageTypeDefinition;
    ModelStreamInferResponse: MessageTypeDefinition;
    ModelTensorReshape: MessageTypeDefinition;
    ModelTransactionPolicy: MessageTypeDefinition;
    ModelVersionPolicy: MessageTypeDefinition;
    ModelWarmup: MessageTypeDefinition;
    RepositoryIndexRequest: MessageTypeDefinition;
    RepositoryIndexResponse: MessageTypeDefinition;
    RepositoryModelLoadRequest: MessageTypeDefinition;
    RepositoryModelLoadResponse: MessageTypeDefinition;
    RepositoryModelUnloadRequest: MessageTypeDefinition;
    RepositoryModelUnloadResponse: MessageTypeDefinition;
    ServerLiveRequest: MessageTypeDefinition;
    ServerLiveResponse: MessageTypeDefinition;
    ServerMetadataRequest: MessageTypeDefinition;
    ServerMetadataResponse: MessageTypeDefinition;
    ServerReadyRequest: MessageTypeDefinition;
    ServerReadyResponse: MessageTypeDefinition;
    StatisticDuration: MessageTypeDefinition;
    SystemSharedMemoryRegisterRequest: MessageTypeDefinition;
    SystemSharedMemoryRegisterResponse: MessageTypeDefinition;
    SystemSharedMemoryStatusRequest: MessageTypeDefinition;
    SystemSharedMemoryStatusResponse: MessageTypeDefinition;
    SystemSharedMemoryUnregisterRequest: MessageTypeDefinition;
    SystemSharedMemoryUnregisterResponse: MessageTypeDefinition;
    TraceSettingRequest: MessageTypeDefinition;
    TraceSettingResponse: MessageTypeDefinition;
  };
}
