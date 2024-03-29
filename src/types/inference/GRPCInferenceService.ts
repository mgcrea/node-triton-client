// Original file: proto/grpc_service.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  CudaSharedMemoryRegisterRequest as _inference_CudaSharedMemoryRegisterRequest,
  CudaSharedMemoryRegisterRequest__Output as _inference_CudaSharedMemoryRegisterRequest__Output,
} from "../inference/CudaSharedMemoryRegisterRequest";
import type {
  CudaSharedMemoryRegisterResponse as _inference_CudaSharedMemoryRegisterResponse,
  CudaSharedMemoryRegisterResponse__Output as _inference_CudaSharedMemoryRegisterResponse__Output,
} from "../inference/CudaSharedMemoryRegisterResponse";
import type {
  CudaSharedMemoryStatusRequest as _inference_CudaSharedMemoryStatusRequest,
  CudaSharedMemoryStatusRequest__Output as _inference_CudaSharedMemoryStatusRequest__Output,
} from "../inference/CudaSharedMemoryStatusRequest";
import type {
  CudaSharedMemoryStatusResponse as _inference_CudaSharedMemoryStatusResponse,
  CudaSharedMemoryStatusResponse__Output as _inference_CudaSharedMemoryStatusResponse__Output,
} from "../inference/CudaSharedMemoryStatusResponse";
import type {
  CudaSharedMemoryUnregisterRequest as _inference_CudaSharedMemoryUnregisterRequest,
  CudaSharedMemoryUnregisterRequest__Output as _inference_CudaSharedMemoryUnregisterRequest__Output,
} from "../inference/CudaSharedMemoryUnregisterRequest";
import type {
  CudaSharedMemoryUnregisterResponse as _inference_CudaSharedMemoryUnregisterResponse,
  CudaSharedMemoryUnregisterResponse__Output as _inference_CudaSharedMemoryUnregisterResponse__Output,
} from "../inference/CudaSharedMemoryUnregisterResponse";
import type {
  LogSettingsRequest as _inference_LogSettingsRequest,
  LogSettingsRequest__Output as _inference_LogSettingsRequest__Output,
} from "../inference/LogSettingsRequest";
import type {
  LogSettingsResponse as _inference_LogSettingsResponse,
  LogSettingsResponse__Output as _inference_LogSettingsResponse__Output,
} from "../inference/LogSettingsResponse";
import type {
  ModelConfigRequest as _inference_ModelConfigRequest,
  ModelConfigRequest__Output as _inference_ModelConfigRequest__Output,
} from "../inference/ModelConfigRequest";
import type {
  ModelConfigResponse as _inference_ModelConfigResponse,
  ModelConfigResponse__Output as _inference_ModelConfigResponse__Output,
} from "../inference/ModelConfigResponse";
import type {
  ModelInferRequest as _inference_ModelInferRequest,
  ModelInferRequest__Output as _inference_ModelInferRequest__Output,
} from "../inference/ModelInferRequest";
import type {
  ModelInferResponse as _inference_ModelInferResponse,
  ModelInferResponse__Output as _inference_ModelInferResponse__Output,
} from "../inference/ModelInferResponse";
import type {
  ModelMetadataRequest as _inference_ModelMetadataRequest,
  ModelMetadataRequest__Output as _inference_ModelMetadataRequest__Output,
} from "../inference/ModelMetadataRequest";
import type {
  ModelMetadataResponse as _inference_ModelMetadataResponse,
  ModelMetadataResponse__Output as _inference_ModelMetadataResponse__Output,
} from "../inference/ModelMetadataResponse";
import type {
  ModelReadyRequest as _inference_ModelReadyRequest,
  ModelReadyRequest__Output as _inference_ModelReadyRequest__Output,
} from "../inference/ModelReadyRequest";
import type {
  ModelReadyResponse as _inference_ModelReadyResponse,
  ModelReadyResponse__Output as _inference_ModelReadyResponse__Output,
} from "../inference/ModelReadyResponse";
import type {
  ModelStatisticsRequest as _inference_ModelStatisticsRequest,
  ModelStatisticsRequest__Output as _inference_ModelStatisticsRequest__Output,
} from "../inference/ModelStatisticsRequest";
import type {
  ModelStatisticsResponse as _inference_ModelStatisticsResponse,
  ModelStatisticsResponse__Output as _inference_ModelStatisticsResponse__Output,
} from "../inference/ModelStatisticsResponse";
import type {
  ModelStreamInferResponse as _inference_ModelStreamInferResponse,
  ModelStreamInferResponse__Output as _inference_ModelStreamInferResponse__Output,
} from "../inference/ModelStreamInferResponse";
import type {
  RepositoryIndexRequest as _inference_RepositoryIndexRequest,
  RepositoryIndexRequest__Output as _inference_RepositoryIndexRequest__Output,
} from "../inference/RepositoryIndexRequest";
import type {
  RepositoryIndexResponse as _inference_RepositoryIndexResponse,
  RepositoryIndexResponse__Output as _inference_RepositoryIndexResponse__Output,
} from "../inference/RepositoryIndexResponse";
import type {
  RepositoryModelLoadRequest as _inference_RepositoryModelLoadRequest,
  RepositoryModelLoadRequest__Output as _inference_RepositoryModelLoadRequest__Output,
} from "../inference/RepositoryModelLoadRequest";
import type {
  RepositoryModelLoadResponse as _inference_RepositoryModelLoadResponse,
  RepositoryModelLoadResponse__Output as _inference_RepositoryModelLoadResponse__Output,
} from "../inference/RepositoryModelLoadResponse";
import type {
  RepositoryModelUnloadRequest as _inference_RepositoryModelUnloadRequest,
  RepositoryModelUnloadRequest__Output as _inference_RepositoryModelUnloadRequest__Output,
} from "../inference/RepositoryModelUnloadRequest";
import type {
  RepositoryModelUnloadResponse as _inference_RepositoryModelUnloadResponse,
  RepositoryModelUnloadResponse__Output as _inference_RepositoryModelUnloadResponse__Output,
} from "../inference/RepositoryModelUnloadResponse";
import type {
  ServerLiveRequest as _inference_ServerLiveRequest,
  ServerLiveRequest__Output as _inference_ServerLiveRequest__Output,
} from "../inference/ServerLiveRequest";
import type {
  ServerLiveResponse as _inference_ServerLiveResponse,
  ServerLiveResponse__Output as _inference_ServerLiveResponse__Output,
} from "../inference/ServerLiveResponse";
import type {
  ServerMetadataRequest as _inference_ServerMetadataRequest,
  ServerMetadataRequest__Output as _inference_ServerMetadataRequest__Output,
} from "../inference/ServerMetadataRequest";
import type {
  ServerMetadataResponse as _inference_ServerMetadataResponse,
  ServerMetadataResponse__Output as _inference_ServerMetadataResponse__Output,
} from "../inference/ServerMetadataResponse";
import type {
  ServerReadyRequest as _inference_ServerReadyRequest,
  ServerReadyRequest__Output as _inference_ServerReadyRequest__Output,
} from "../inference/ServerReadyRequest";
import type {
  ServerReadyResponse as _inference_ServerReadyResponse,
  ServerReadyResponse__Output as _inference_ServerReadyResponse__Output,
} from "../inference/ServerReadyResponse";
import type {
  SystemSharedMemoryRegisterRequest as _inference_SystemSharedMemoryRegisterRequest,
  SystemSharedMemoryRegisterRequest__Output as _inference_SystemSharedMemoryRegisterRequest__Output,
} from "../inference/SystemSharedMemoryRegisterRequest";
import type {
  SystemSharedMemoryRegisterResponse as _inference_SystemSharedMemoryRegisterResponse,
  SystemSharedMemoryRegisterResponse__Output as _inference_SystemSharedMemoryRegisterResponse__Output,
} from "../inference/SystemSharedMemoryRegisterResponse";
import type {
  SystemSharedMemoryStatusRequest as _inference_SystemSharedMemoryStatusRequest,
  SystemSharedMemoryStatusRequest__Output as _inference_SystemSharedMemoryStatusRequest__Output,
} from "../inference/SystemSharedMemoryStatusRequest";
import type {
  SystemSharedMemoryStatusResponse as _inference_SystemSharedMemoryStatusResponse,
  SystemSharedMemoryStatusResponse__Output as _inference_SystemSharedMemoryStatusResponse__Output,
} from "../inference/SystemSharedMemoryStatusResponse";
import type {
  SystemSharedMemoryUnregisterRequest as _inference_SystemSharedMemoryUnregisterRequest,
  SystemSharedMemoryUnregisterRequest__Output as _inference_SystemSharedMemoryUnregisterRequest__Output,
} from "../inference/SystemSharedMemoryUnregisterRequest";
import type {
  SystemSharedMemoryUnregisterResponse as _inference_SystemSharedMemoryUnregisterResponse,
  SystemSharedMemoryUnregisterResponse__Output as _inference_SystemSharedMemoryUnregisterResponse__Output,
} from "../inference/SystemSharedMemoryUnregisterResponse";
import type {
  TraceSettingRequest as _inference_TraceSettingRequest,
  TraceSettingRequest__Output as _inference_TraceSettingRequest__Output,
} from "../inference/TraceSettingRequest";
import type {
  TraceSettingResponse as _inference_TraceSettingResponse,
  TraceSettingResponse__Output as _inference_TraceSettingResponse__Output,
} from "../inference/TraceSettingResponse";

export interface GRPCInferenceServiceClient extends grpc.Client {
  CudaSharedMemoryRegister(
    argument: _inference_CudaSharedMemoryRegisterRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_CudaSharedMemoryRegisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  CudaSharedMemoryRegister(
    argument: _inference_CudaSharedMemoryRegisterRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_CudaSharedMemoryRegisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  CudaSharedMemoryRegister(
    argument: _inference_CudaSharedMemoryRegisterRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_CudaSharedMemoryRegisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  CudaSharedMemoryRegister(
    argument: _inference_CudaSharedMemoryRegisterRequest,
    callback: grpc.requestCallback<_inference_CudaSharedMemoryRegisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  cudaSharedMemoryRegister(
    argument: _inference_CudaSharedMemoryRegisterRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_CudaSharedMemoryRegisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  cudaSharedMemoryRegister(
    argument: _inference_CudaSharedMemoryRegisterRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_CudaSharedMemoryRegisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  cudaSharedMemoryRegister(
    argument: _inference_CudaSharedMemoryRegisterRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_CudaSharedMemoryRegisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  cudaSharedMemoryRegister(
    argument: _inference_CudaSharedMemoryRegisterRequest,
    callback: grpc.requestCallback<_inference_CudaSharedMemoryRegisterResponse__Output>,
  ): grpc.ClientUnaryCall;

  CudaSharedMemoryStatus(
    argument: _inference_CudaSharedMemoryStatusRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_CudaSharedMemoryStatusResponse__Output>,
  ): grpc.ClientUnaryCall;
  CudaSharedMemoryStatus(
    argument: _inference_CudaSharedMemoryStatusRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_CudaSharedMemoryStatusResponse__Output>,
  ): grpc.ClientUnaryCall;
  CudaSharedMemoryStatus(
    argument: _inference_CudaSharedMemoryStatusRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_CudaSharedMemoryStatusResponse__Output>,
  ): grpc.ClientUnaryCall;
  CudaSharedMemoryStatus(
    argument: _inference_CudaSharedMemoryStatusRequest,
    callback: grpc.requestCallback<_inference_CudaSharedMemoryStatusResponse__Output>,
  ): grpc.ClientUnaryCall;
  cudaSharedMemoryStatus(
    argument: _inference_CudaSharedMemoryStatusRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_CudaSharedMemoryStatusResponse__Output>,
  ): grpc.ClientUnaryCall;
  cudaSharedMemoryStatus(
    argument: _inference_CudaSharedMemoryStatusRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_CudaSharedMemoryStatusResponse__Output>,
  ): grpc.ClientUnaryCall;
  cudaSharedMemoryStatus(
    argument: _inference_CudaSharedMemoryStatusRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_CudaSharedMemoryStatusResponse__Output>,
  ): grpc.ClientUnaryCall;
  cudaSharedMemoryStatus(
    argument: _inference_CudaSharedMemoryStatusRequest,
    callback: grpc.requestCallback<_inference_CudaSharedMemoryStatusResponse__Output>,
  ): grpc.ClientUnaryCall;

  CudaSharedMemoryUnregister(
    argument: _inference_CudaSharedMemoryUnregisterRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_CudaSharedMemoryUnregisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  CudaSharedMemoryUnregister(
    argument: _inference_CudaSharedMemoryUnregisterRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_CudaSharedMemoryUnregisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  CudaSharedMemoryUnregister(
    argument: _inference_CudaSharedMemoryUnregisterRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_CudaSharedMemoryUnregisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  CudaSharedMemoryUnregister(
    argument: _inference_CudaSharedMemoryUnregisterRequest,
    callback: grpc.requestCallback<_inference_CudaSharedMemoryUnregisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  cudaSharedMemoryUnregister(
    argument: _inference_CudaSharedMemoryUnregisterRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_CudaSharedMemoryUnregisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  cudaSharedMemoryUnregister(
    argument: _inference_CudaSharedMemoryUnregisterRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_CudaSharedMemoryUnregisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  cudaSharedMemoryUnregister(
    argument: _inference_CudaSharedMemoryUnregisterRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_CudaSharedMemoryUnregisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  cudaSharedMemoryUnregister(
    argument: _inference_CudaSharedMemoryUnregisterRequest,
    callback: grpc.requestCallback<_inference_CudaSharedMemoryUnregisterResponse__Output>,
  ): grpc.ClientUnaryCall;

  LogSettings(
    argument: _inference_LogSettingsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_LogSettingsResponse__Output>,
  ): grpc.ClientUnaryCall;
  LogSettings(
    argument: _inference_LogSettingsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_LogSettingsResponse__Output>,
  ): grpc.ClientUnaryCall;
  LogSettings(
    argument: _inference_LogSettingsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_LogSettingsResponse__Output>,
  ): grpc.ClientUnaryCall;
  LogSettings(
    argument: _inference_LogSettingsRequest,
    callback: grpc.requestCallback<_inference_LogSettingsResponse__Output>,
  ): grpc.ClientUnaryCall;
  logSettings(
    argument: _inference_LogSettingsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_LogSettingsResponse__Output>,
  ): grpc.ClientUnaryCall;
  logSettings(
    argument: _inference_LogSettingsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_LogSettingsResponse__Output>,
  ): grpc.ClientUnaryCall;
  logSettings(
    argument: _inference_LogSettingsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_LogSettingsResponse__Output>,
  ): grpc.ClientUnaryCall;
  logSettings(
    argument: _inference_LogSettingsRequest,
    callback: grpc.requestCallback<_inference_LogSettingsResponse__Output>,
  ): grpc.ClientUnaryCall;

  ModelConfig(
    argument: _inference_ModelConfigRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ModelConfigResponse__Output>,
  ): grpc.ClientUnaryCall;
  ModelConfig(
    argument: _inference_ModelConfigRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_ModelConfigResponse__Output>,
  ): grpc.ClientUnaryCall;
  ModelConfig(
    argument: _inference_ModelConfigRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ModelConfigResponse__Output>,
  ): grpc.ClientUnaryCall;
  ModelConfig(
    argument: _inference_ModelConfigRequest,
    callback: grpc.requestCallback<_inference_ModelConfigResponse__Output>,
  ): grpc.ClientUnaryCall;
  modelConfig(
    argument: _inference_ModelConfigRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ModelConfigResponse__Output>,
  ): grpc.ClientUnaryCall;
  modelConfig(
    argument: _inference_ModelConfigRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_ModelConfigResponse__Output>,
  ): grpc.ClientUnaryCall;
  modelConfig(
    argument: _inference_ModelConfigRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ModelConfigResponse__Output>,
  ): grpc.ClientUnaryCall;
  modelConfig(
    argument: _inference_ModelConfigRequest,
    callback: grpc.requestCallback<_inference_ModelConfigResponse__Output>,
  ): grpc.ClientUnaryCall;

  ModelInfer(
    argument: _inference_ModelInferRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ModelInferResponse__Output>,
  ): grpc.ClientUnaryCall;
  ModelInfer(
    argument: _inference_ModelInferRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_ModelInferResponse__Output>,
  ): grpc.ClientUnaryCall;
  ModelInfer(
    argument: _inference_ModelInferRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ModelInferResponse__Output>,
  ): grpc.ClientUnaryCall;
  ModelInfer(
    argument: _inference_ModelInferRequest,
    callback: grpc.requestCallback<_inference_ModelInferResponse__Output>,
  ): grpc.ClientUnaryCall;
  modelInfer(
    argument: _inference_ModelInferRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ModelInferResponse__Output>,
  ): grpc.ClientUnaryCall;
  modelInfer(
    argument: _inference_ModelInferRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_ModelInferResponse__Output>,
  ): grpc.ClientUnaryCall;
  modelInfer(
    argument: _inference_ModelInferRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ModelInferResponse__Output>,
  ): grpc.ClientUnaryCall;
  modelInfer(
    argument: _inference_ModelInferRequest,
    callback: grpc.requestCallback<_inference_ModelInferResponse__Output>,
  ): grpc.ClientUnaryCall;

  ModelMetadata(
    argument: _inference_ModelMetadataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ModelMetadataResponse__Output>,
  ): grpc.ClientUnaryCall;
  ModelMetadata(
    argument: _inference_ModelMetadataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_ModelMetadataResponse__Output>,
  ): grpc.ClientUnaryCall;
  ModelMetadata(
    argument: _inference_ModelMetadataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ModelMetadataResponse__Output>,
  ): grpc.ClientUnaryCall;
  ModelMetadata(
    argument: _inference_ModelMetadataRequest,
    callback: grpc.requestCallback<_inference_ModelMetadataResponse__Output>,
  ): grpc.ClientUnaryCall;
  modelMetadata(
    argument: _inference_ModelMetadataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ModelMetadataResponse__Output>,
  ): grpc.ClientUnaryCall;
  modelMetadata(
    argument: _inference_ModelMetadataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_ModelMetadataResponse__Output>,
  ): grpc.ClientUnaryCall;
  modelMetadata(
    argument: _inference_ModelMetadataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ModelMetadataResponse__Output>,
  ): grpc.ClientUnaryCall;
  modelMetadata(
    argument: _inference_ModelMetadataRequest,
    callback: grpc.requestCallback<_inference_ModelMetadataResponse__Output>,
  ): grpc.ClientUnaryCall;

  ModelReady(
    argument: _inference_ModelReadyRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ModelReadyResponse__Output>,
  ): grpc.ClientUnaryCall;
  ModelReady(
    argument: _inference_ModelReadyRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_ModelReadyResponse__Output>,
  ): grpc.ClientUnaryCall;
  ModelReady(
    argument: _inference_ModelReadyRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ModelReadyResponse__Output>,
  ): grpc.ClientUnaryCall;
  ModelReady(
    argument: _inference_ModelReadyRequest,
    callback: grpc.requestCallback<_inference_ModelReadyResponse__Output>,
  ): grpc.ClientUnaryCall;
  modelReady(
    argument: _inference_ModelReadyRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ModelReadyResponse__Output>,
  ): grpc.ClientUnaryCall;
  modelReady(
    argument: _inference_ModelReadyRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_ModelReadyResponse__Output>,
  ): grpc.ClientUnaryCall;
  modelReady(
    argument: _inference_ModelReadyRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ModelReadyResponse__Output>,
  ): grpc.ClientUnaryCall;
  modelReady(
    argument: _inference_ModelReadyRequest,
    callback: grpc.requestCallback<_inference_ModelReadyResponse__Output>,
  ): grpc.ClientUnaryCall;

  ModelStatistics(
    argument: _inference_ModelStatisticsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ModelStatisticsResponse__Output>,
  ): grpc.ClientUnaryCall;
  ModelStatistics(
    argument: _inference_ModelStatisticsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_ModelStatisticsResponse__Output>,
  ): grpc.ClientUnaryCall;
  ModelStatistics(
    argument: _inference_ModelStatisticsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ModelStatisticsResponse__Output>,
  ): grpc.ClientUnaryCall;
  ModelStatistics(
    argument: _inference_ModelStatisticsRequest,
    callback: grpc.requestCallback<_inference_ModelStatisticsResponse__Output>,
  ): grpc.ClientUnaryCall;
  modelStatistics(
    argument: _inference_ModelStatisticsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ModelStatisticsResponse__Output>,
  ): grpc.ClientUnaryCall;
  modelStatistics(
    argument: _inference_ModelStatisticsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_ModelStatisticsResponse__Output>,
  ): grpc.ClientUnaryCall;
  modelStatistics(
    argument: _inference_ModelStatisticsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ModelStatisticsResponse__Output>,
  ): grpc.ClientUnaryCall;
  modelStatistics(
    argument: _inference_ModelStatisticsRequest,
    callback: grpc.requestCallback<_inference_ModelStatisticsResponse__Output>,
  ): grpc.ClientUnaryCall;

  ModelStreamInfer(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions,
  ): grpc.ClientDuplexStream<
    _inference_ModelInferRequest,
    _inference_ModelStreamInferResponse__Output
  >;
  ModelStreamInfer(
    options?: grpc.CallOptions,
  ): grpc.ClientDuplexStream<
    _inference_ModelInferRequest,
    _inference_ModelStreamInferResponse__Output
  >;
  modelStreamInfer(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions,
  ): grpc.ClientDuplexStream<
    _inference_ModelInferRequest,
    _inference_ModelStreamInferResponse__Output
  >;
  modelStreamInfer(
    options?: grpc.CallOptions,
  ): grpc.ClientDuplexStream<
    _inference_ModelInferRequest,
    _inference_ModelStreamInferResponse__Output
  >;

  RepositoryIndex(
    argument: _inference_RepositoryIndexRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_RepositoryIndexResponse__Output>,
  ): grpc.ClientUnaryCall;
  RepositoryIndex(
    argument: _inference_RepositoryIndexRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_RepositoryIndexResponse__Output>,
  ): grpc.ClientUnaryCall;
  RepositoryIndex(
    argument: _inference_RepositoryIndexRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_RepositoryIndexResponse__Output>,
  ): grpc.ClientUnaryCall;
  RepositoryIndex(
    argument: _inference_RepositoryIndexRequest,
    callback: grpc.requestCallback<_inference_RepositoryIndexResponse__Output>,
  ): grpc.ClientUnaryCall;
  repositoryIndex(
    argument: _inference_RepositoryIndexRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_RepositoryIndexResponse__Output>,
  ): grpc.ClientUnaryCall;
  repositoryIndex(
    argument: _inference_RepositoryIndexRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_RepositoryIndexResponse__Output>,
  ): grpc.ClientUnaryCall;
  repositoryIndex(
    argument: _inference_RepositoryIndexRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_RepositoryIndexResponse__Output>,
  ): grpc.ClientUnaryCall;
  repositoryIndex(
    argument: _inference_RepositoryIndexRequest,
    callback: grpc.requestCallback<_inference_RepositoryIndexResponse__Output>,
  ): grpc.ClientUnaryCall;

  RepositoryModelLoad(
    argument: _inference_RepositoryModelLoadRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_RepositoryModelLoadResponse__Output>,
  ): grpc.ClientUnaryCall;
  RepositoryModelLoad(
    argument: _inference_RepositoryModelLoadRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_RepositoryModelLoadResponse__Output>,
  ): grpc.ClientUnaryCall;
  RepositoryModelLoad(
    argument: _inference_RepositoryModelLoadRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_RepositoryModelLoadResponse__Output>,
  ): grpc.ClientUnaryCall;
  RepositoryModelLoad(
    argument: _inference_RepositoryModelLoadRequest,
    callback: grpc.requestCallback<_inference_RepositoryModelLoadResponse__Output>,
  ): grpc.ClientUnaryCall;
  repositoryModelLoad(
    argument: _inference_RepositoryModelLoadRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_RepositoryModelLoadResponse__Output>,
  ): grpc.ClientUnaryCall;
  repositoryModelLoad(
    argument: _inference_RepositoryModelLoadRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_RepositoryModelLoadResponse__Output>,
  ): grpc.ClientUnaryCall;
  repositoryModelLoad(
    argument: _inference_RepositoryModelLoadRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_RepositoryModelLoadResponse__Output>,
  ): grpc.ClientUnaryCall;
  repositoryModelLoad(
    argument: _inference_RepositoryModelLoadRequest,
    callback: grpc.requestCallback<_inference_RepositoryModelLoadResponse__Output>,
  ): grpc.ClientUnaryCall;

  RepositoryModelUnload(
    argument: _inference_RepositoryModelUnloadRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_RepositoryModelUnloadResponse__Output>,
  ): grpc.ClientUnaryCall;
  RepositoryModelUnload(
    argument: _inference_RepositoryModelUnloadRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_RepositoryModelUnloadResponse__Output>,
  ): grpc.ClientUnaryCall;
  RepositoryModelUnload(
    argument: _inference_RepositoryModelUnloadRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_RepositoryModelUnloadResponse__Output>,
  ): grpc.ClientUnaryCall;
  RepositoryModelUnload(
    argument: _inference_RepositoryModelUnloadRequest,
    callback: grpc.requestCallback<_inference_RepositoryModelUnloadResponse__Output>,
  ): grpc.ClientUnaryCall;
  repositoryModelUnload(
    argument: _inference_RepositoryModelUnloadRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_RepositoryModelUnloadResponse__Output>,
  ): grpc.ClientUnaryCall;
  repositoryModelUnload(
    argument: _inference_RepositoryModelUnloadRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_RepositoryModelUnloadResponse__Output>,
  ): grpc.ClientUnaryCall;
  repositoryModelUnload(
    argument: _inference_RepositoryModelUnloadRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_RepositoryModelUnloadResponse__Output>,
  ): grpc.ClientUnaryCall;
  repositoryModelUnload(
    argument: _inference_RepositoryModelUnloadRequest,
    callback: grpc.requestCallback<_inference_RepositoryModelUnloadResponse__Output>,
  ): grpc.ClientUnaryCall;

  ServerLive(
    argument: _inference_ServerLiveRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ServerLiveResponse__Output>,
  ): grpc.ClientUnaryCall;
  ServerLive(
    argument: _inference_ServerLiveRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_ServerLiveResponse__Output>,
  ): grpc.ClientUnaryCall;
  ServerLive(
    argument: _inference_ServerLiveRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ServerLiveResponse__Output>,
  ): grpc.ClientUnaryCall;
  ServerLive(
    argument: _inference_ServerLiveRequest,
    callback: grpc.requestCallback<_inference_ServerLiveResponse__Output>,
  ): grpc.ClientUnaryCall;
  serverLive(
    argument: _inference_ServerLiveRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ServerLiveResponse__Output>,
  ): grpc.ClientUnaryCall;
  serverLive(
    argument: _inference_ServerLiveRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_ServerLiveResponse__Output>,
  ): grpc.ClientUnaryCall;
  serverLive(
    argument: _inference_ServerLiveRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ServerLiveResponse__Output>,
  ): grpc.ClientUnaryCall;
  serverLive(
    argument: _inference_ServerLiveRequest,
    callback: grpc.requestCallback<_inference_ServerLiveResponse__Output>,
  ): grpc.ClientUnaryCall;

  ServerMetadata(
    argument: _inference_ServerMetadataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ServerMetadataResponse__Output>,
  ): grpc.ClientUnaryCall;
  ServerMetadata(
    argument: _inference_ServerMetadataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_ServerMetadataResponse__Output>,
  ): grpc.ClientUnaryCall;
  ServerMetadata(
    argument: _inference_ServerMetadataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ServerMetadataResponse__Output>,
  ): grpc.ClientUnaryCall;
  ServerMetadata(
    argument: _inference_ServerMetadataRequest,
    callback: grpc.requestCallback<_inference_ServerMetadataResponse__Output>,
  ): grpc.ClientUnaryCall;
  serverMetadata(
    argument: _inference_ServerMetadataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ServerMetadataResponse__Output>,
  ): grpc.ClientUnaryCall;
  serverMetadata(
    argument: _inference_ServerMetadataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_ServerMetadataResponse__Output>,
  ): grpc.ClientUnaryCall;
  serverMetadata(
    argument: _inference_ServerMetadataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ServerMetadataResponse__Output>,
  ): grpc.ClientUnaryCall;
  serverMetadata(
    argument: _inference_ServerMetadataRequest,
    callback: grpc.requestCallback<_inference_ServerMetadataResponse__Output>,
  ): grpc.ClientUnaryCall;

  ServerReady(
    argument: _inference_ServerReadyRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ServerReadyResponse__Output>,
  ): grpc.ClientUnaryCall;
  ServerReady(
    argument: _inference_ServerReadyRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_ServerReadyResponse__Output>,
  ): grpc.ClientUnaryCall;
  ServerReady(
    argument: _inference_ServerReadyRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ServerReadyResponse__Output>,
  ): grpc.ClientUnaryCall;
  ServerReady(
    argument: _inference_ServerReadyRequest,
    callback: grpc.requestCallback<_inference_ServerReadyResponse__Output>,
  ): grpc.ClientUnaryCall;
  serverReady(
    argument: _inference_ServerReadyRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ServerReadyResponse__Output>,
  ): grpc.ClientUnaryCall;
  serverReady(
    argument: _inference_ServerReadyRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_ServerReadyResponse__Output>,
  ): grpc.ClientUnaryCall;
  serverReady(
    argument: _inference_ServerReadyRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_ServerReadyResponse__Output>,
  ): grpc.ClientUnaryCall;
  serverReady(
    argument: _inference_ServerReadyRequest,
    callback: grpc.requestCallback<_inference_ServerReadyResponse__Output>,
  ): grpc.ClientUnaryCall;

  SystemSharedMemoryRegister(
    argument: _inference_SystemSharedMemoryRegisterRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_SystemSharedMemoryRegisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  SystemSharedMemoryRegister(
    argument: _inference_SystemSharedMemoryRegisterRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_SystemSharedMemoryRegisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  SystemSharedMemoryRegister(
    argument: _inference_SystemSharedMemoryRegisterRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_SystemSharedMemoryRegisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  SystemSharedMemoryRegister(
    argument: _inference_SystemSharedMemoryRegisterRequest,
    callback: grpc.requestCallback<_inference_SystemSharedMemoryRegisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  systemSharedMemoryRegister(
    argument: _inference_SystemSharedMemoryRegisterRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_SystemSharedMemoryRegisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  systemSharedMemoryRegister(
    argument: _inference_SystemSharedMemoryRegisterRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_SystemSharedMemoryRegisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  systemSharedMemoryRegister(
    argument: _inference_SystemSharedMemoryRegisterRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_SystemSharedMemoryRegisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  systemSharedMemoryRegister(
    argument: _inference_SystemSharedMemoryRegisterRequest,
    callback: grpc.requestCallback<_inference_SystemSharedMemoryRegisterResponse__Output>,
  ): grpc.ClientUnaryCall;

  SystemSharedMemoryStatus(
    argument: _inference_SystemSharedMemoryStatusRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_SystemSharedMemoryStatusResponse__Output>,
  ): grpc.ClientUnaryCall;
  SystemSharedMemoryStatus(
    argument: _inference_SystemSharedMemoryStatusRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_SystemSharedMemoryStatusResponse__Output>,
  ): grpc.ClientUnaryCall;
  SystemSharedMemoryStatus(
    argument: _inference_SystemSharedMemoryStatusRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_SystemSharedMemoryStatusResponse__Output>,
  ): grpc.ClientUnaryCall;
  SystemSharedMemoryStatus(
    argument: _inference_SystemSharedMemoryStatusRequest,
    callback: grpc.requestCallback<_inference_SystemSharedMemoryStatusResponse__Output>,
  ): grpc.ClientUnaryCall;
  systemSharedMemoryStatus(
    argument: _inference_SystemSharedMemoryStatusRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_SystemSharedMemoryStatusResponse__Output>,
  ): grpc.ClientUnaryCall;
  systemSharedMemoryStatus(
    argument: _inference_SystemSharedMemoryStatusRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_SystemSharedMemoryStatusResponse__Output>,
  ): grpc.ClientUnaryCall;
  systemSharedMemoryStatus(
    argument: _inference_SystemSharedMemoryStatusRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_SystemSharedMemoryStatusResponse__Output>,
  ): grpc.ClientUnaryCall;
  systemSharedMemoryStatus(
    argument: _inference_SystemSharedMemoryStatusRequest,
    callback: grpc.requestCallback<_inference_SystemSharedMemoryStatusResponse__Output>,
  ): grpc.ClientUnaryCall;

  SystemSharedMemoryUnregister(
    argument: _inference_SystemSharedMemoryUnregisterRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_SystemSharedMemoryUnregisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  SystemSharedMemoryUnregister(
    argument: _inference_SystemSharedMemoryUnregisterRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_SystemSharedMemoryUnregisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  SystemSharedMemoryUnregister(
    argument: _inference_SystemSharedMemoryUnregisterRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_SystemSharedMemoryUnregisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  SystemSharedMemoryUnregister(
    argument: _inference_SystemSharedMemoryUnregisterRequest,
    callback: grpc.requestCallback<_inference_SystemSharedMemoryUnregisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  systemSharedMemoryUnregister(
    argument: _inference_SystemSharedMemoryUnregisterRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_SystemSharedMemoryUnregisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  systemSharedMemoryUnregister(
    argument: _inference_SystemSharedMemoryUnregisterRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_SystemSharedMemoryUnregisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  systemSharedMemoryUnregister(
    argument: _inference_SystemSharedMemoryUnregisterRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_SystemSharedMemoryUnregisterResponse__Output>,
  ): grpc.ClientUnaryCall;
  systemSharedMemoryUnregister(
    argument: _inference_SystemSharedMemoryUnregisterRequest,
    callback: grpc.requestCallback<_inference_SystemSharedMemoryUnregisterResponse__Output>,
  ): grpc.ClientUnaryCall;

  TraceSetting(
    argument: _inference_TraceSettingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_TraceSettingResponse__Output>,
  ): grpc.ClientUnaryCall;
  TraceSetting(
    argument: _inference_TraceSettingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_TraceSettingResponse__Output>,
  ): grpc.ClientUnaryCall;
  TraceSetting(
    argument: _inference_TraceSettingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_TraceSettingResponse__Output>,
  ): grpc.ClientUnaryCall;
  TraceSetting(
    argument: _inference_TraceSettingRequest,
    callback: grpc.requestCallback<_inference_TraceSettingResponse__Output>,
  ): grpc.ClientUnaryCall;
  traceSetting(
    argument: _inference_TraceSettingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_TraceSettingResponse__Output>,
  ): grpc.ClientUnaryCall;
  traceSetting(
    argument: _inference_TraceSettingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_inference_TraceSettingResponse__Output>,
  ): grpc.ClientUnaryCall;
  traceSetting(
    argument: _inference_TraceSettingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_inference_TraceSettingResponse__Output>,
  ): grpc.ClientUnaryCall;
  traceSetting(
    argument: _inference_TraceSettingRequest,
    callback: grpc.requestCallback<_inference_TraceSettingResponse__Output>,
  ): grpc.ClientUnaryCall;
}

export interface GRPCInferenceServiceHandlers extends grpc.UntypedServiceImplementation {
  CudaSharedMemoryRegister: grpc.handleUnaryCall<
    _inference_CudaSharedMemoryRegisterRequest__Output,
    _inference_CudaSharedMemoryRegisterResponse
  >;

  CudaSharedMemoryStatus: grpc.handleUnaryCall<
    _inference_CudaSharedMemoryStatusRequest__Output,
    _inference_CudaSharedMemoryStatusResponse
  >;

  CudaSharedMemoryUnregister: grpc.handleUnaryCall<
    _inference_CudaSharedMemoryUnregisterRequest__Output,
    _inference_CudaSharedMemoryUnregisterResponse
  >;

  LogSettings: grpc.handleUnaryCall<
    _inference_LogSettingsRequest__Output,
    _inference_LogSettingsResponse
  >;

  ModelConfig: grpc.handleUnaryCall<
    _inference_ModelConfigRequest__Output,
    _inference_ModelConfigResponse
  >;

  ModelInfer: grpc.handleUnaryCall<
    _inference_ModelInferRequest__Output,
    _inference_ModelInferResponse
  >;

  ModelMetadata: grpc.handleUnaryCall<
    _inference_ModelMetadataRequest__Output,
    _inference_ModelMetadataResponse
  >;

  ModelReady: grpc.handleUnaryCall<
    _inference_ModelReadyRequest__Output,
    _inference_ModelReadyResponse
  >;

  ModelStatistics: grpc.handleUnaryCall<
    _inference_ModelStatisticsRequest__Output,
    _inference_ModelStatisticsResponse
  >;

  ModelStreamInfer: grpc.handleBidiStreamingCall<
    _inference_ModelInferRequest__Output,
    _inference_ModelStreamInferResponse
  >;

  RepositoryIndex: grpc.handleUnaryCall<
    _inference_RepositoryIndexRequest__Output,
    _inference_RepositoryIndexResponse
  >;

  RepositoryModelLoad: grpc.handleUnaryCall<
    _inference_RepositoryModelLoadRequest__Output,
    _inference_RepositoryModelLoadResponse
  >;

  RepositoryModelUnload: grpc.handleUnaryCall<
    _inference_RepositoryModelUnloadRequest__Output,
    _inference_RepositoryModelUnloadResponse
  >;

  ServerLive: grpc.handleUnaryCall<
    _inference_ServerLiveRequest__Output,
    _inference_ServerLiveResponse
  >;

  ServerMetadata: grpc.handleUnaryCall<
    _inference_ServerMetadataRequest__Output,
    _inference_ServerMetadataResponse
  >;

  ServerReady: grpc.handleUnaryCall<
    _inference_ServerReadyRequest__Output,
    _inference_ServerReadyResponse
  >;

  SystemSharedMemoryRegister: grpc.handleUnaryCall<
    _inference_SystemSharedMemoryRegisterRequest__Output,
    _inference_SystemSharedMemoryRegisterResponse
  >;

  SystemSharedMemoryStatus: grpc.handleUnaryCall<
    _inference_SystemSharedMemoryStatusRequest__Output,
    _inference_SystemSharedMemoryStatusResponse
  >;

  SystemSharedMemoryUnregister: grpc.handleUnaryCall<
    _inference_SystemSharedMemoryUnregisterRequest__Output,
    _inference_SystemSharedMemoryUnregisterResponse
  >;

  TraceSetting: grpc.handleUnaryCall<
    _inference_TraceSettingRequest__Output,
    _inference_TraceSettingResponse
  >;
}

export interface GRPCInferenceServiceDefinition extends grpc.ServiceDefinition {
  CudaSharedMemoryRegister: MethodDefinition<
    _inference_CudaSharedMemoryRegisterRequest,
    _inference_CudaSharedMemoryRegisterResponse,
    _inference_CudaSharedMemoryRegisterRequest__Output,
    _inference_CudaSharedMemoryRegisterResponse__Output
  >;
  CudaSharedMemoryStatus: MethodDefinition<
    _inference_CudaSharedMemoryStatusRequest,
    _inference_CudaSharedMemoryStatusResponse,
    _inference_CudaSharedMemoryStatusRequest__Output,
    _inference_CudaSharedMemoryStatusResponse__Output
  >;
  CudaSharedMemoryUnregister: MethodDefinition<
    _inference_CudaSharedMemoryUnregisterRequest,
    _inference_CudaSharedMemoryUnregisterResponse,
    _inference_CudaSharedMemoryUnregisterRequest__Output,
    _inference_CudaSharedMemoryUnregisterResponse__Output
  >;
  LogSettings: MethodDefinition<
    _inference_LogSettingsRequest,
    _inference_LogSettingsResponse,
    _inference_LogSettingsRequest__Output,
    _inference_LogSettingsResponse__Output
  >;
  ModelConfig: MethodDefinition<
    _inference_ModelConfigRequest,
    _inference_ModelConfigResponse,
    _inference_ModelConfigRequest__Output,
    _inference_ModelConfigResponse__Output
  >;
  ModelInfer: MethodDefinition<
    _inference_ModelInferRequest,
    _inference_ModelInferResponse,
    _inference_ModelInferRequest__Output,
    _inference_ModelInferResponse__Output
  >;
  ModelMetadata: MethodDefinition<
    _inference_ModelMetadataRequest,
    _inference_ModelMetadataResponse,
    _inference_ModelMetadataRequest__Output,
    _inference_ModelMetadataResponse__Output
  >;
  ModelReady: MethodDefinition<
    _inference_ModelReadyRequest,
    _inference_ModelReadyResponse,
    _inference_ModelReadyRequest__Output,
    _inference_ModelReadyResponse__Output
  >;
  ModelStatistics: MethodDefinition<
    _inference_ModelStatisticsRequest,
    _inference_ModelStatisticsResponse,
    _inference_ModelStatisticsRequest__Output,
    _inference_ModelStatisticsResponse__Output
  >;
  ModelStreamInfer: MethodDefinition<
    _inference_ModelInferRequest,
    _inference_ModelStreamInferResponse,
    _inference_ModelInferRequest__Output,
    _inference_ModelStreamInferResponse__Output
  >;
  RepositoryIndex: MethodDefinition<
    _inference_RepositoryIndexRequest,
    _inference_RepositoryIndexResponse,
    _inference_RepositoryIndexRequest__Output,
    _inference_RepositoryIndexResponse__Output
  >;
  RepositoryModelLoad: MethodDefinition<
    _inference_RepositoryModelLoadRequest,
    _inference_RepositoryModelLoadResponse,
    _inference_RepositoryModelLoadRequest__Output,
    _inference_RepositoryModelLoadResponse__Output
  >;
  RepositoryModelUnload: MethodDefinition<
    _inference_RepositoryModelUnloadRequest,
    _inference_RepositoryModelUnloadResponse,
    _inference_RepositoryModelUnloadRequest__Output,
    _inference_RepositoryModelUnloadResponse__Output
  >;
  ServerLive: MethodDefinition<
    _inference_ServerLiveRequest,
    _inference_ServerLiveResponse,
    _inference_ServerLiveRequest__Output,
    _inference_ServerLiveResponse__Output
  >;
  ServerMetadata: MethodDefinition<
    _inference_ServerMetadataRequest,
    _inference_ServerMetadataResponse,
    _inference_ServerMetadataRequest__Output,
    _inference_ServerMetadataResponse__Output
  >;
  ServerReady: MethodDefinition<
    _inference_ServerReadyRequest,
    _inference_ServerReadyResponse,
    _inference_ServerReadyRequest__Output,
    _inference_ServerReadyResponse__Output
  >;
  SystemSharedMemoryRegister: MethodDefinition<
    _inference_SystemSharedMemoryRegisterRequest,
    _inference_SystemSharedMemoryRegisterResponse,
    _inference_SystemSharedMemoryRegisterRequest__Output,
    _inference_SystemSharedMemoryRegisterResponse__Output
  >;
  SystemSharedMemoryStatus: MethodDefinition<
    _inference_SystemSharedMemoryStatusRequest,
    _inference_SystemSharedMemoryStatusResponse,
    _inference_SystemSharedMemoryStatusRequest__Output,
    _inference_SystemSharedMemoryStatusResponse__Output
  >;
  SystemSharedMemoryUnregister: MethodDefinition<
    _inference_SystemSharedMemoryUnregisterRequest,
    _inference_SystemSharedMemoryUnregisterResponse,
    _inference_SystemSharedMemoryUnregisterRequest__Output,
    _inference_SystemSharedMemoryUnregisterResponse__Output
  >;
  TraceSetting: MethodDefinition<
    _inference_TraceSettingRequest,
    _inference_TraceSettingResponse,
    _inference_TraceSettingRequest__Output,
    _inference_TraceSettingResponse__Output
  >;
}
