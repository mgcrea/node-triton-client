// Original file: proto/grpc_service.proto

import type {
  ModelRepositoryParameter as _inference_ModelRepositoryParameter,
  ModelRepositoryParameter__Output as _inference_ModelRepositoryParameter__Output,
} from "../inference/ModelRepositoryParameter";

/**
 * @@
 * @@.. cpp:var:: message RepositoryModelLoadRequest
 * @@
 * @@   Request message for RepositoryModelLoad.
 * @@
 */
export interface RepositoryModelLoadRequest {
  /**
   * @@  .. cpp:var:: string repository_name
   * @@
   * @@     The name of the repository to load from. If empty the model
   * @@     is loaded from any repository.
   * @@
   */
  repositoryName?: string;
  /**
   * @@  .. cpp:var:: string repository_name
   * @@
   * @@     The name of the model to load, or reload.
   * @@
   */
  modelName?: string;
  /**
   * @@  .. cpp:var:: map<string,ModelRepositoryParameter> parameters
   * @@
   * @@     Optional model repository request parameters.
   * @@
   */
  parameters?: { [key: string]: _inference_ModelRepositoryParameter };
}

/**
 * @@
 * @@.. cpp:var:: message RepositoryModelLoadRequest
 * @@
 * @@   Request message for RepositoryModelLoad.
 * @@
 */
export interface RepositoryModelLoadRequest__Output {
  /**
   * @@  .. cpp:var:: string repository_name
   * @@
   * @@     The name of the repository to load from. If empty the model
   * @@     is loaded from any repository.
   * @@
   */
  repositoryName: string;
  /**
   * @@  .. cpp:var:: string repository_name
   * @@
   * @@     The name of the model to load, or reload.
   * @@
   */
  modelName: string;
  /**
   * @@  .. cpp:var:: map<string,ModelRepositoryParameter> parameters
   * @@
   * @@     Optional model repository request parameters.
   * @@
   */
  parameters: { [key: string]: _inference_ModelRepositoryParameter__Output };
}
