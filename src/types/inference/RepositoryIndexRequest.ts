// Original file: proto/grpc_service.proto

/**
 * @@
 * @@.. cpp:var:: message RepositoryIndexRequest
 * @@
 * @@   Request message for RepositoryIndex.
 * @@
 */
export interface RepositoryIndexRequest {
  /**
   * @@  .. cpp:var:: string repository_name
   * @@
   * @@     The name of the repository. If empty the index is returned
   * @@     for all repositories.
   * @@
   */
  repositoryName?: string;
  /**
   * @@  .. cpp:var:: bool ready
   * @@
   * @@     If true returned only models currently ready for inferencing.
   * @@
   */
  ready?: boolean;
}

/**
 * @@
 * @@.. cpp:var:: message RepositoryIndexRequest
 * @@
 * @@   Request message for RepositoryIndex.
 * @@
 */
export interface RepositoryIndexRequest__Output {
  /**
   * @@  .. cpp:var:: string repository_name
   * @@
   * @@     The name of the repository. If empty the index is returned
   * @@     for all repositories.
   * @@
   */
  repositoryName: string;
  /**
   * @@  .. cpp:var:: bool ready
   * @@
   * @@     If true returned only models currently ready for inferencing.
   * @@
   */
  ready: boolean;
}
