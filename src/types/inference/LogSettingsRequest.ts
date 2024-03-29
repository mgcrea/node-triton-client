// Original file: proto/grpc_service.proto

export interface _inference_LogSettingsRequest_SettingValue {
  boolParam?: boolean;
  uint32Param?: number;
  stringParam?: string;
  parameterChoice?: "boolParam" | "uint32Param" | "stringParam";
}

export interface _inference_LogSettingsRequest_SettingValue__Output {
  boolParam?: boolean;
  uint32Param?: number;
  stringParam?: string;
  parameterChoice: "boolParam" | "uint32Param" | "stringParam";
}

export interface LogSettingsRequest {
  settings?: { [key: string]: _inference_LogSettingsRequest_SettingValue };
}

export interface LogSettingsRequest__Output {
  settings: { [key: string]: _inference_LogSettingsRequest_SettingValue__Output };
}
