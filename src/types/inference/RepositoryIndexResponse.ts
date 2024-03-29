// Original file: proto/grpc_service.proto

/**
 * @@
 * @@  .. cpp:var:: message ModelIndex
 * @@
 * @@     Index entry for a model.
 * @@
 */
export interface _inference_RepositoryIndexResponse_ModelIndex {
  /**
   * @@
   * @@    .. cpp:var:: string name
   * @@
   * @@       The name of the model.
   * @@
   */
  name?: string;
  /**
   * @@    .. cpp:var:: string version
   * @@
   * @@       The version of the model.
   * @@
   */
  version?: string;
  /**
   * @@
   * @@    .. cpp:var:: string state
   * @@
   * @@       The state of the model.
   * @@
   */
  state?: string;
  /**
   * @@
   * @@    .. cpp:var:: string reason
   * @@
   * @@       The reason, if any, that the model is in the given state.
   * @@
   */
  reason?: string;
}

/**
 * @@
 * @@  .. cpp:var:: message ModelIndex
 * @@
 * @@     Index entry for a model.
 * @@
 */
export interface _inference_RepositoryIndexResponse_ModelIndex__Output {
  /**
   * @@
   * @@    .. cpp:var:: string name
   * @@
   * @@       The name of the model.
   * @@
   */
  name: string;
  /**
   * @@    .. cpp:var:: string version
   * @@
   * @@       The version of the model.
   * @@
   */
  version: string;
  /**
   * @@
   * @@    .. cpp:var:: string state
   * @@
   * @@       The state of the model.
   * @@
   */
  state: string;
  /**
   * @@
   * @@    .. cpp:var:: string reason
   * @@
   * @@       The reason, if any, that the model is in the given state.
   * @@
   */
  reason: string;
}

/**
 * @@
 * @@.. cpp:var:: message RepositoryIndexResponse
 * @@
 * @@   Response message for RepositoryIndex.
 * @@
 */
export interface RepositoryIndexResponse {
  /**
   * @@
   * @@  .. cpp:var:: ModelIndex models (repeated)
   * @@
   * @@     An index entry for each model.
   * @@
   */
  models?: _inference_RepositoryIndexResponse_ModelIndex[];
}

/**
 * @@
 * @@.. cpp:var:: message RepositoryIndexResponse
 * @@
 * @@   Response message for RepositoryIndex.
 * @@
 */
export interface RepositoryIndexResponse__Output {
  /**
   * @@
   * @@  .. cpp:var:: ModelIndex models (repeated)
   * @@
   * @@     An index entry for each model.
   * @@
   */
  models: _inference_RepositoryIndexResponse_ModelIndex__Output[];
}
