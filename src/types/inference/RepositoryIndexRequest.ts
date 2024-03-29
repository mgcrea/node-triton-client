// Original file: proto/grpc_service.proto

export interface RepositoryIndexRequest {
  repositoryName?: string;
  ready?: boolean;
}

export interface RepositoryIndexRequest__Output {
  repositoryName: string;
  ready: boolean;
}
