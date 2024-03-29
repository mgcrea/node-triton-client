import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

export interface ProtoGrpcType {
  inference: {
    BatchInput: MessageTypeDefinition;
    BatchOutput: MessageTypeDefinition;
    DataType: EnumTypeDefinition;
    ModelConfig: MessageTypeDefinition;
    ModelDynamicBatching: MessageTypeDefinition;
    ModelEnsembling: MessageTypeDefinition;
    ModelInput: MessageTypeDefinition;
    ModelInstanceGroup: MessageTypeDefinition;
    ModelOperations: MessageTypeDefinition;
    ModelOptimizationPolicy: MessageTypeDefinition;
    ModelOutput: MessageTypeDefinition;
    ModelParameter: MessageTypeDefinition;
    ModelQueuePolicy: MessageTypeDefinition;
    ModelRateLimiter: MessageTypeDefinition;
    ModelRepositoryAgents: MessageTypeDefinition;
    ModelResponseCache: MessageTypeDefinition;
    ModelSequenceBatching: MessageTypeDefinition;
    ModelTensorReshape: MessageTypeDefinition;
    ModelTransactionPolicy: MessageTypeDefinition;
    ModelVersionPolicy: MessageTypeDefinition;
    ModelWarmup: MessageTypeDefinition;
  };
}
