// Original file: proto/model_config.proto

import type { Long } from "@grpc/proto-loader";

export interface ModelTensorReshape {
  shape?: (number | string | Long)[];
}

export interface ModelTensorReshape__Output {
  shape: string[];
}
