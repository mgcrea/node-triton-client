// Original file: proto/grpc_service.proto

export interface _inference_RepositoryIndexResponse_ModelIndex {
  name?: string;
  version?: string;
  state?: string;
  reason?: string;
}

export interface _inference_RepositoryIndexResponse_ModelIndex__Output {
  name: string;
  version: string;
  state: string;
  reason: string;
}

export interface RepositoryIndexResponse {
  models?: _inference_RepositoryIndexResponse_ModelIndex[];
}

export interface RepositoryIndexResponse__Output {
  models: _inference_RepositoryIndexResponse_ModelIndex__Output[];
}
