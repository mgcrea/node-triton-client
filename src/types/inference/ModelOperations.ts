// Original file: proto/model_config.proto

/**
 * @@
 * @@ .. cpp:var:: message ModelOperations
 * @@
 * @@    The metadata of libraries providing custom operations for this model.
 * @@
 */
export interface ModelOperations {
  /**
   * @@  .. cpp:var:: string op_library_filename (repeated)
   * @@
   * @@     Optional paths of the libraries providing custom operations for
   * @@     this model. Valid only for ONNX models.
   * @@
   */
  opLibraryFilename?: string[];
}

/**
 * @@
 * @@ .. cpp:var:: message ModelOperations
 * @@
 * @@    The metadata of libraries providing custom operations for this model.
 * @@
 */
export interface ModelOperations__Output {
  /**
   * @@  .. cpp:var:: string op_library_filename (repeated)
   * @@
   * @@     Optional paths of the libraries providing custom operations for
   * @@     this model. Valid only for ONNX models.
   * @@
   */
  opLibraryFilename: string[];
}
