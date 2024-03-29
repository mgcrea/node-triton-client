// Original file: proto/grpc_service.proto

export interface _inference_LogSettingsRequest_SettingValue {
  /**
   * @@    .. cpp:var:: bool bool_param
   * @@
   * @@       A boolean parameter value.
   * @@
   */
  boolParam?: boolean;
  /**
   * @@    .. cpp:var:: uint32 uint32_param
   * @@
   * @@       An uint32 parameter value.
   * @@
   */
  uint32Param?: number;
  /**
   * @@    .. cpp:var:: string string_param
   * @@
   * @@       A string parameter value.
   * @@
   */
  stringParam?: string;
  parameterChoice?: "boolParam" | "uint32Param" | "stringParam";
}

export interface _inference_LogSettingsRequest_SettingValue__Output {
  /**
   * @@    .. cpp:var:: bool bool_param
   * @@
   * @@       A boolean parameter value.
   * @@
   */
  boolParam?: boolean;
  /**
   * @@    .. cpp:var:: uint32 uint32_param
   * @@
   * @@       An uint32 parameter value.
   * @@
   */
  uint32Param?: number;
  /**
   * @@    .. cpp:var:: string string_param
   * @@
   * @@       A string parameter value.
   * @@
   */
  stringParam?: string;
  parameterChoice: "boolParam" | "uint32Param" | "stringParam";
}

/**
 * @@
 * @@.. cpp:var:: message LogSettingsRequest
 * @@
 * @@   Request message for LogSettings.
 * @@
 */
export interface LogSettingsRequest {
  /**
   * @@  .. cpp:var:: map<string,SettingValue> settings
   * @@
   * @@     The current log settings.
   * @@
   */
  settings?: { [key: string]: _inference_LogSettingsRequest_SettingValue };
}

/**
 * @@
 * @@.. cpp:var:: message LogSettingsRequest
 * @@
 * @@   Request message for LogSettings.
 * @@
 */
export interface LogSettingsRequest__Output {
  /**
   * @@  .. cpp:var:: map<string,SettingValue> settings
   * @@
   * @@     The current log settings.
   * @@
   */
  settings: { [key: string]: _inference_LogSettingsRequest_SettingValue__Output };
}
