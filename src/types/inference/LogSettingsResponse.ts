// Original file: proto/grpc_service.proto

export interface _inference_LogSettingsResponse_SettingValue {
  boolParam?: boolean;
  uint32Param?: number;
  stringParam?: string;
  parameterChoice?: "boolParam" | "uint32Param" | "stringParam";
}

export interface _inference_LogSettingsResponse_SettingValue__Output {
  boolParam?: boolean;
  uint32Param?: number;
  stringParam?: string;
  parameterChoice: "boolParam" | "uint32Param" | "stringParam";
}

export interface LogSettingsResponse {
  settings?: { [key: string]: _inference_LogSettingsResponse_SettingValue };
}

export interface LogSettingsResponse__Output {
  settings: { [key: string]: _inference_LogSettingsResponse_SettingValue__Output };
}
