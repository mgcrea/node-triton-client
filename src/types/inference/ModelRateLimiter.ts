// Original file: proto/model_config.proto

export interface _inference_ModelRateLimiter_Resource {
  name?: string;
  global?: boolean;
  count?: number;
}

export interface _inference_ModelRateLimiter_Resource__Output {
  name: string;
  global: boolean;
  count: number;
}

export interface ModelRateLimiter {
  resources?: _inference_ModelRateLimiter_Resource[];
  priority?: number;
}

export interface ModelRateLimiter__Output {
  resources: _inference_ModelRateLimiter_Resource__Output[];
  priority: number;
}
