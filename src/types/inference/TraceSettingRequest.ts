// Original file: proto/grpc_service.proto

export interface _inference_TraceSettingRequest_SettingValue {
  value?: string[];
}

export interface _inference_TraceSettingRequest_SettingValue__Output {
  value: string[];
}

export interface TraceSettingRequest {
  settings?: { [key: string]: _inference_TraceSettingRequest_SettingValue };
  modelName?: string;
}

export interface TraceSettingRequest__Output {
  settings: { [key: string]: _inference_TraceSettingRequest_SettingValue__Output };
  modelName: string;
}
