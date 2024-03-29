// Original file: proto/grpc_service.proto

import type { Long } from "@grpc/proto-loader";

export interface _inference_ModelMetadataResponse_TensorMetadata {
  name?: string;
  datatype?: string;
  shape?: (number | string | Long)[];
}

export interface _inference_ModelMetadataResponse_TensorMetadata__Output {
  name: string;
  datatype: string;
  shape: string[];
}

export interface ModelMetadataResponse {
  name?: string;
  versions?: string[];
  platform?: string;
  inputs?: _inference_ModelMetadataResponse_TensorMetadata[];
  outputs?: _inference_ModelMetadataResponse_TensorMetadata[];
}

export interface ModelMetadataResponse__Output {
  name: string;
  versions: string[];
  platform: string;
  inputs: _inference_ModelMetadataResponse_TensorMetadata__Output[];
  outputs: _inference_ModelMetadataResponse_TensorMetadata__Output[];
}
