// Original file: proto/grpc_service.proto

import type {
  ModelRepositoryParameter as _inference_ModelRepositoryParameter,
  ModelRepositoryParameter__Output as _inference_ModelRepositoryParameter__Output,
} from "../inference/ModelRepositoryParameter";

/**
 * @@
 * @@.. cpp:var:: message RepositoryModelUnloadRequest
 * @@
 * @@   Request message for RepositoryModelUnload.
 * @@
 */
export interface RepositoryModelUnloadRequest {
  /**
   * @@  .. cpp:var:: string repository_name
   * @@
   * @@     The name of the repository from which the model was originally
   * @@     loaded. If empty the repository is not considered.
   * @@
   */
  repositoryName?: string;
  /**
   * @@  .. cpp:var:: string repository_name
   * @@
   * @@     The name of the model to unload.
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
 * @@.. cpp:var:: message RepositoryModelUnloadRequest
 * @@
 * @@   Request message for RepositoryModelUnload.
 * @@
 */
export interface RepositoryModelUnloadRequest__Output {
  /**
   * @@  .. cpp:var:: string repository_name
   * @@
   * @@     The name of the repository from which the model was originally
   * @@     loaded. If empty the repository is not considered.
   * @@
   */
  repositoryName: string;
  /**
   * @@  .. cpp:var:: string repository_name
   * @@
   * @@     The name of the model to unload.
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
