// Original file: proto/grpc_service.proto

/**
 * @@
 * @@.. cpp:var:: message ServerMetadataResponse
 * @@
 * @@   Response message for ServerMetadata.
 * @@
 */
export interface ServerMetadataResponse {
  /**
   * @@
   * @@  .. cpp:var:: string name
   * @@
   * @@     The server name.
   * @@
   */
  name?: string;
  /**
   * @@
   * @@  .. cpp:var:: string version
   * @@
   * @@     The server version.
   * @@
   */
  version?: string;
  /**
   * @@
   * @@  .. cpp:var:: string extensions (repeated)
   * @@
   * @@     The extensions supported by the server.
   * @@
   */
  extensions?: string[];
}

/**
 * @@
 * @@.. cpp:var:: message ServerMetadataResponse
 * @@
 * @@   Response message for ServerMetadata.
 * @@
 */
export interface ServerMetadataResponse__Output {
  /**
   * @@
   * @@  .. cpp:var:: string name
   * @@
   * @@     The server name.
   * @@
   */
  name: string;
  /**
   * @@
   * @@  .. cpp:var:: string version
   * @@
   * @@     The server version.
   * @@
   */
  version: string;
  /**
   * @@
   * @@  .. cpp:var:: string extensions (repeated)
   * @@
   * @@     The extensions supported by the server.
   * @@
   */
  extensions: string[];
}
