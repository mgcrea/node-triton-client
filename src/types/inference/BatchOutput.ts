// Original file: proto/model_config.proto

// Original file: proto/model_config.proto

/**
 * @@
 * @@  .. cpp:enum:: Kind
 * @@
 * @@     The kind of the batch output.
 * @@
 */
export const _inference_BatchOutput_Kind = {
  /**
   * @@    .. cpp:enumerator:: Kind::BATCH_SCATTER_WITH_INPUT_SHAPE = 0
   * @@
   * @@       The output should be scattered according to the shape of
   * @@       'source_input'. The dynamic dimension of the output will
   * @@       be set to the value of the same dimension in the input.
   * @@
   */
  BATCH_SCATTER_WITH_INPUT_SHAPE: "BATCH_SCATTER_WITH_INPUT_SHAPE",
} as const;

/**
 * @@
 * @@  .. cpp:enum:: Kind
 * @@
 * @@     The kind of the batch output.
 * @@
 */
export type _inference_BatchOutput_Kind =
  /**
   * @@    .. cpp:enumerator:: Kind::BATCH_SCATTER_WITH_INPUT_SHAPE = 0
   * @@
   * @@       The output should be scattered according to the shape of
   * @@       'source_input'. The dynamic dimension of the output will
   * @@       be set to the value of the same dimension in the input.
   * @@
   */
  "BATCH_SCATTER_WITH_INPUT_SHAPE" | 0;

/**
 * @@
 * @@  .. cpp:enum:: Kind
 * @@
 * @@     The kind of the batch output.
 * @@
 */
export type _inference_BatchOutput_Kind__Output =
  (typeof _inference_BatchOutput_Kind)[keyof typeof _inference_BatchOutput_Kind];

/**
 * @@.. cpp:var:: message BatchOutput
 * @@
 * @@   A batch output is an output produced by the model that must be handled
 * @@   differently by the backend based on all the requests in a batch.
 * @@
 */
export interface BatchOutput {
  /**
   * @@  .. cpp:var:: string target_name (repeated)
   * @@
   * @@     The name of the outputs to be produced by this batch output
   * @@     specification.
   * @@
   */
  targetName?: string[];
  /**
   * @@  .. cpp:var:: Kind kind
   * @@
   * @@     The kind of this batch output.
   * @@
   */
  kind?: _inference_BatchOutput_Kind;
  /**
   * @@  .. cpp:var:: string source_input (repeated)
   * @@
   * @@     The backend derives each batch output from one or more inputs.
   * @@     'source_input' gives the names of those inputs.
   * @@
   */
  sourceInput?: string[];
}

/**
 * @@.. cpp:var:: message BatchOutput
 * @@
 * @@   A batch output is an output produced by the model that must be handled
 * @@   differently by the backend based on all the requests in a batch.
 * @@
 */
export interface BatchOutput__Output {
  /**
   * @@  .. cpp:var:: string target_name (repeated)
   * @@
   * @@     The name of the outputs to be produced by this batch output
   * @@     specification.
   * @@
   */
  targetName: string[];
  /**
   * @@  .. cpp:var:: Kind kind
   * @@
   * @@     The kind of this batch output.
   * @@
   */
  kind: _inference_BatchOutput_Kind__Output;
  /**
   * @@  .. cpp:var:: string source_input (repeated)
   * @@
   * @@     The backend derives each batch output from one or more inputs.
   * @@     'source_input' gives the names of those inputs.
   * @@
   */
  sourceInput: string[];
}
