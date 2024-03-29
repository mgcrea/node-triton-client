// Original file: proto/model_config.proto

/**
 * @@
 * @@.. cpp:var:: message ModelResponseCache
 * @@
 * @@   The response cache setting for the model.
 * @@
 */
export interface ModelResponseCache {
  /**
   * @@
   * @@  .. cpp::var:: bool enable
   * @@
   * @@     Whether or not to use response cache for the model. If True, the
   * @@     responses from the model are cached and when identical request
   * @@     is encountered, instead of going through the model execution,
   * @@     the response from the cache is utilized. By default, response
   * @@     cache is disabled for the models.
   * @@
   */
  enable?: boolean;
}

/**
 * @@
 * @@.. cpp:var:: message ModelResponseCache
 * @@
 * @@   The response cache setting for the model.
 * @@
 */
export interface ModelResponseCache__Output {
  /**
   * @@
   * @@  .. cpp::var:: bool enable
   * @@
   * @@     Whether or not to use response cache for the model. If True, the
   * @@     responses from the model are cached and when identical request
   * @@     is encountered, instead of going through the model execution,
   * @@     the response from the cache is utilized. By default, response
   * @@     cache is disabled for the models.
   * @@
   */
  enable: boolean;
}
