// Original file: proto/grpc_service.proto

export interface ModelReadyRequest {
  name?: string;
  version?: string;
}

export interface ModelReadyRequest__Output {
  name: string;
  version: string;
}
