// Original file: proto/grpc_service.proto

/**
 * @@
 * @@  .. cpp:var:: message SettingValue
 * @@
 * @@     The values to be associated with a trace setting.
 * @@
 */
export interface _inference_TraceSettingResponse_SettingValue {
  /**
   * @@
   * @@    .. cpp:var:: string value (repeated)
   * @@
   * @@       The value.
   * @@
   */
  value?: string[];
}

/**
 * @@
 * @@  .. cpp:var:: message SettingValue
 * @@
 * @@     The values to be associated with a trace setting.
 * @@
 */
export interface _inference_TraceSettingResponse_SettingValue__Output {
  /**
   * @@
   * @@    .. cpp:var:: string value (repeated)
   * @@
   * @@       The value.
   * @@
   */
  value: string[];
}

/**
 * @@
 * @@.. cpp:var:: message TraceSettingResponse
 * @@
 * @@   Response message for TraceSetting.
 * @@
 */
export interface TraceSettingResponse {
  /**
   * @@  .. cpp:var:: map<string,SettingValue> settings
   * @@
   * @@     The current trace settings, including any changes specified
   * @@     by TraceSettingRequest.
   * @@
   */
  settings?: { [key: string]: _inference_TraceSettingResponse_SettingValue };
}

/**
 * @@
 * @@.. cpp:var:: message TraceSettingResponse
 * @@
 * @@   Response message for TraceSetting.
 * @@
 */
export interface TraceSettingResponse__Output {
  /**
   * @@  .. cpp:var:: map<string,SettingValue> settings
   * @@
   * @@     The current trace settings, including any changes specified
   * @@     by TraceSettingRequest.
   * @@
   */
  settings: { [key: string]: _inference_TraceSettingResponse_SettingValue__Output };
}
