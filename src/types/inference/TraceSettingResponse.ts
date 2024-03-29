// Original file: proto/grpc_service.proto

export interface _inference_TraceSettingResponse_SettingValue {
  value?: string[];
}

export interface _inference_TraceSettingResponse_SettingValue__Output {
  value: string[];
}

export interface TraceSettingResponse {
  settings?: { [key: string]: _inference_TraceSettingResponse_SettingValue };
}

export interface TraceSettingResponse__Output {
  settings: { [key: string]: _inference_TraceSettingResponse_SettingValue__Output };
}
