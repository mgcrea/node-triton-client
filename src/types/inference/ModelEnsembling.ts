// Original file: proto/model_config.proto

import type { Long } from "@grpc/proto-loader";

export interface _inference_ModelEnsembling_Step {
  modelName?: string;
  modelVersion?: number | string | Long;
  inputMap?: { [key: string]: string };
  outputMap?: { [key: string]: string };
  modelNamespace?: string;
}

export interface _inference_ModelEnsembling_Step__Output {
  modelName: string;
  modelVersion: string;
  inputMap: { [key: string]: string };
  outputMap: { [key: string]: string };
  modelNamespace: string;
}

export interface ModelEnsembling {
  step?: _inference_ModelEnsembling_Step[];
}

export interface ModelEnsembling__Output {
  step: _inference_ModelEnsembling_Step__Output[];
}
