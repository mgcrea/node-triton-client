// Original file: proto/grpc_service.proto

/**
 * @@
 * @@  .. cpp:var:: message SettingValue
 * @@
 * @@     The values to be associated with a trace setting.
 * @@     If no value is provided, the setting will be clear and
 * @@     the global setting value will be used.
 * @@
 */
export interface _inference_TraceSettingRequest_SettingValue {
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
 * @@     If no value is provided, the setting will be clear and
 * @@     the global setting value will be used.
 * @@
 */
export interface _inference_TraceSettingRequest_SettingValue__Output {
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
 * @@.. cpp:var:: message TraceSettingRequest
 * @@
 * @@   Request message for TraceSetting.
 * @@
 */
export interface TraceSettingRequest {
  /**
   * @@  .. cpp:var:: map<string,SettingValue> settings
   * @@
   * @@     The new setting values to be updated,
   * @@     settings that are not specified will remain unchanged.
   * @@
   */
  settings?: { [key: string]: _inference_TraceSettingRequest_SettingValue };
  /**
   * @@
   * @@  .. cpp:var:: string model_name
   * @@
   * @@     The name of the model to apply the new trace settings.
   * @@     If not given, the new settings will be applied globally.
   * @@
   */
  modelName?: string;
}

/**
 * @@
 * @@.. cpp:var:: message TraceSettingRequest
 * @@
 * @@   Request message for TraceSetting.
 * @@
 */
export interface TraceSettingRequest__Output {
  /**
   * @@  .. cpp:var:: map<string,SettingValue> settings
   * @@
   * @@     The new setting values to be updated,
   * @@     settings that are not specified will remain unchanged.
   * @@
   */
  settings: { [key: string]: _inference_TraceSettingRequest_SettingValue__Output };
  /**
   * @@
   * @@  .. cpp:var:: string model_name
   * @@
   * @@     The name of the model to apply the new trace settings.
   * @@     If not given, the new settings will be applied globally.
   * @@
   */
  modelName: string;
}
