// Original file: proto/model_config.proto

import type { Long } from "@grpc/proto-loader";
import type {
  ModelRateLimiter as _inference_ModelRateLimiter,
  ModelRateLimiter__Output as _inference_ModelRateLimiter__Output,
} from "../inference/ModelRateLimiter";

// Original file: proto/model_config.proto

export const _inference_ModelInstanceGroup_Kind = {
  KIND_AUTO: "KIND_AUTO",
  KIND_GPU: "KIND_GPU",
  KIND_CPU: "KIND_CPU",
  KIND_MODEL: "KIND_MODEL",
} as const;

export type _inference_ModelInstanceGroup_Kind =
  | "KIND_AUTO"
  | 0
  | "KIND_GPU"
  | 1
  | "KIND_CPU"
  | 2
  | "KIND_MODEL"
  | 3;

export type _inference_ModelInstanceGroup_Kind__Output =
  (typeof _inference_ModelInstanceGroup_Kind)[keyof typeof _inference_ModelInstanceGroup_Kind];

export interface _inference_ModelInstanceGroup_SecondaryDevice {
  kind?: _inference_ModelInstanceGroup_SecondaryDevice_SecondaryDeviceKind;
  deviceId?: number | string | Long;
}

export interface _inference_ModelInstanceGroup_SecondaryDevice__Output {
  kind: _inference_ModelInstanceGroup_SecondaryDevice_SecondaryDeviceKind__Output;
  deviceId: string;
}

// Original file: proto/model_config.proto

export const _inference_ModelInstanceGroup_SecondaryDevice_SecondaryDeviceKind = {
  KIND_NVDLA: "KIND_NVDLA",
} as const;

export type _inference_ModelInstanceGroup_SecondaryDevice_SecondaryDeviceKind = "KIND_NVDLA" | 0;

export type _inference_ModelInstanceGroup_SecondaryDevice_SecondaryDeviceKind__Output =
  (typeof _inference_ModelInstanceGroup_SecondaryDevice_SecondaryDeviceKind)[keyof typeof _inference_ModelInstanceGroup_SecondaryDevice_SecondaryDeviceKind];

export interface ModelInstanceGroup {
  name?: string;
  count?: number;
  gpus?: number[];
  kind?: _inference_ModelInstanceGroup_Kind;
  profile?: string[];
  rateLimiter?: _inference_ModelRateLimiter | null;
  passive?: boolean;
  secondaryDevices?: _inference_ModelInstanceGroup_SecondaryDevice[];
  hostPolicy?: string;
}

export interface ModelInstanceGroup__Output {
  name: string;
  count: number;
  gpus: number[];
  kind: _inference_ModelInstanceGroup_Kind__Output;
  profile: string[];
  rateLimiter: _inference_ModelRateLimiter__Output | null;
  passive: boolean;
  secondaryDevices: _inference_ModelInstanceGroup_SecondaryDevice__Output[];
  hostPolicy: string;
}
