export * from "./client";

import type { ProtoGrpcType } from "./types/grpc_service";

export type ServerLiveRequest = ProtoGrpcType["inference"]["ServerLiveRequest"];
export type ServerLiveResponse = ProtoGrpcType["inference"]["ServerLiveResponse"];
export type ServerReadyRequest = ProtoGrpcType["inference"]["ServerReadyRequest"];
export type ServerReadyResponse = ProtoGrpcType["inference"]["ServerReadyResponse"];
export type RepositoryIndexRequest = ProtoGrpcType["inference"]["RepositoryIndexRequest"];
export type RepositoryIndexResponse = ProtoGrpcType["inference"]["RepositoryIndexResponse"];
export type ModelMetadataRequest = ProtoGrpcType["inference"]["ModelMetadataRequest"];
export type ModelMetadataResponse = ProtoGrpcType["inference"]["ModelMetadataResponse"];
export type ModelInferRequest = ProtoGrpcType["inference"]["ModelInferRequest"];
export type ModelInferResponse = ProtoGrpcType["inference"]["ModelInferResponse"];

export type { ProtoGrpcType };
