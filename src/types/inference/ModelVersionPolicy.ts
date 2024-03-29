// Original file: proto/model_config.proto

import type { Long } from "@grpc/proto-loader";

export interface _inference_ModelVersionPolicy_All {}

export interface _inference_ModelVersionPolicy_All__Output {}

export interface _inference_ModelVersionPolicy_Latest {
  numVersions?: number;
}

export interface _inference_ModelVersionPolicy_Latest__Output {
  numVersions: number;
}

export interface _inference_ModelVersionPolicy_Specific {
  versions?: (number | string | Long)[];
}

export interface _inference_ModelVersionPolicy_Specific__Output {
  versions: string[];
}

export interface ModelVersionPolicy {
  latest?: _inference_ModelVersionPolicy_Latest | null;
  all?: _inference_ModelVersionPolicy_All | null;
  specific?: _inference_ModelVersionPolicy_Specific | null;
  policyChoice?: "latest" | "all" | "specific";
}

export interface ModelVersionPolicy__Output {
  latest?: _inference_ModelVersionPolicy_Latest__Output | null;
  all?: _inference_ModelVersionPolicy_All__Output | null;
  specific?: _inference_ModelVersionPolicy_Specific__Output | null;
  policyChoice: "latest" | "all" | "specific";
}
