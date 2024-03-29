// Original file: proto/model_config.proto

import type {
  DataType as _inference_DataType,
  DataType__Output as _inference_DataType__Output,
} from "../inference/DataType";

// Original file: proto/model_config.proto

/**
 * @@
 * @@    .. cpp:enum:: Kind
 * @@
 * @@       The kind of the batch input.
 * @@
 */
export const _inference_BatchInput_Kind = {
  /**
   * @@      .. cpp:enumerator:: Kind::BATCH_ELEMENT_COUNT = 0
   * @@
   * @@         The element count of the 'source_input' will be added as
   * @@         input with shape [1].
   * @@
   */
  BATCH_ELEMENT_COUNT: "BATCH_ELEMENT_COUNT",
  /**
   * @@      .. cpp:enumerator:: Kind::BATCH_ACCUMULATED_ELEMENT_COUNT = 1
   * @@
   * @@         The accumulated element count of the 'source_input' will be
   * @@         added as input with shape [1]. For example, if there is a
   * @@         batch of two request, each with 2 elements, an input of value
   * @@         2 will be added to the first request, and an input of value
   * @@         4 will be added to the second request.
   * @@
   */
  BATCH_ACCUMULATED_ELEMENT_COUNT: "BATCH_ACCUMULATED_ELEMENT_COUNT",
  /**
   * @@      .. cpp:enumerator::
   * @@         Kind::BATCH_ACCUMULATED_ELEMENT_COUNT_WITH_ZERO = 2
   * @@
   * @@         The accumulated element count of the 'source_input' will be
   * @@         added as input with shape [1], except for the first request
   * @@         in the batch. For the first request in the batch, the input
   * @@         will have shape [2] where the first element is value 0.
   * @@
   */
  BATCH_ACCUMULATED_ELEMENT_COUNT_WITH_ZERO: "BATCH_ACCUMULATED_ELEMENT_COUNT_WITH_ZERO",
  /**
   * @@      .. cpp:enumerator:: Kind::BATCH_MAX_ELEMENT_COUNT_AS_SHAPE = 3
   * @@
   * @@         Among the requests in the batch, the max element count of the
   * @@         'source_input' will be added as input with shape
   * @@         [max_element_count] for the first request in the batch.
   * @@         For other requests, such input will be with shape [0].
   * @@         The data of the tensor will be uninitialized.
   * @@
   */
  BATCH_MAX_ELEMENT_COUNT_AS_SHAPE: "BATCH_MAX_ELEMENT_COUNT_AS_SHAPE",
  /**
   * @@      .. cpp:enumerator:: Kind::BATCH_ITEM_SHAPE = 4
   * @@
   * @@         Among the requests in the batch, the shape of the
   * @@         'source_input' will be added as input with shape
   * @@         [batch_size, len(input_dim)]. For example, if one
   * @@         batch-2 input with shape [3, 1] and batch-1 input
   * @@         with shape [2, 2] are batched, the batch input will
   * @@         have shape [3, 2] and value [ [3, 1], [3, 1], [2, 2]].
   * @@
   */
  BATCH_ITEM_SHAPE: "BATCH_ITEM_SHAPE",
  /**
   * @@      .. cpp:enumerator:: Kind::BATCH_ITEM_SHAPE_FLATTEN = 5
   * @@
   * @@         Among the requests in the batch, the shape of the
   * @@         'source_input' will be added as input with single dimensional
   * @@         shape [batch_size * len(input_dim)]. For example, if one
   * @@         batch-2 input with shape [3, 1] and batch-1 input
   * @@         with shape [2, 2] are batched, the batch input will
   * @@         have shape [6] and value [3, 1, 3, 1, 2, 2].
   * @@
   */
  BATCH_ITEM_SHAPE_FLATTEN: "BATCH_ITEM_SHAPE_FLATTEN",
} as const;

/**
 * @@
 * @@    .. cpp:enum:: Kind
 * @@
 * @@       The kind of the batch input.
 * @@
 */
export type _inference_BatchInput_Kind =
  /**
   * @@      .. cpp:enumerator:: Kind::BATCH_ELEMENT_COUNT = 0
   * @@
   * @@         The element count of the 'source_input' will be added as
   * @@         input with shape [1].
   * @@
   */
  | "BATCH_ELEMENT_COUNT"
  | 0
  /**
   * @@      .. cpp:enumerator:: Kind::BATCH_ACCUMULATED_ELEMENT_COUNT = 1
   * @@
   * @@         The accumulated element count of the 'source_input' will be
   * @@         added as input with shape [1]. For example, if there is a
   * @@         batch of two request, each with 2 elements, an input of value
   * @@         2 will be added to the first request, and an input of value
   * @@         4 will be added to the second request.
   * @@
   */
  | "BATCH_ACCUMULATED_ELEMENT_COUNT"
  | 1
  /**
   * @@      .. cpp:enumerator::
   * @@         Kind::BATCH_ACCUMULATED_ELEMENT_COUNT_WITH_ZERO = 2
   * @@
   * @@         The accumulated element count of the 'source_input' will be
   * @@         added as input with shape [1], except for the first request
   * @@         in the batch. For the first request in the batch, the input
   * @@         will have shape [2] where the first element is value 0.
   * @@
   */
  | "BATCH_ACCUMULATED_ELEMENT_COUNT_WITH_ZERO"
  | 2
  /**
   * @@      .. cpp:enumerator:: Kind::BATCH_MAX_ELEMENT_COUNT_AS_SHAPE = 3
   * @@
   * @@         Among the requests in the batch, the max element count of the
   * @@         'source_input' will be added as input with shape
   * @@         [max_element_count] for the first request in the batch.
   * @@         For other requests, such input will be with shape [0].
   * @@         The data of the tensor will be uninitialized.
   * @@
   */
  | "BATCH_MAX_ELEMENT_COUNT_AS_SHAPE"
  | 3
  /**
   * @@      .. cpp:enumerator:: Kind::BATCH_ITEM_SHAPE = 4
   * @@
   * @@         Among the requests in the batch, the shape of the
   * @@         'source_input' will be added as input with shape
   * @@         [batch_size, len(input_dim)]. For example, if one
   * @@         batch-2 input with shape [3, 1] and batch-1 input
   * @@         with shape [2, 2] are batched, the batch input will
   * @@         have shape [3, 2] and value [ [3, 1], [3, 1], [2, 2]].
   * @@
   */
  | "BATCH_ITEM_SHAPE"
  | 4
  /**
   * @@      .. cpp:enumerator:: Kind::BATCH_ITEM_SHAPE_FLATTEN = 5
   * @@
   * @@         Among the requests in the batch, the shape of the
   * @@         'source_input' will be added as input with single dimensional
   * @@         shape [batch_size * len(input_dim)]. For example, if one
   * @@         batch-2 input with shape [3, 1] and batch-1 input
   * @@         with shape [2, 2] are batched, the batch input will
   * @@         have shape [6] and value [3, 1, 3, 1, 2, 2].
   * @@
   */
  | "BATCH_ITEM_SHAPE_FLATTEN"
  | 5;

/**
 * @@
 * @@    .. cpp:enum:: Kind
 * @@
 * @@       The kind of the batch input.
 * @@
 */
export type _inference_BatchInput_Kind__Output =
  (typeof _inference_BatchInput_Kind)[keyof typeof _inference_BatchInput_Kind];

/**
 * @@  .. cpp:var:: message BatchInput
 * @@
 * @@     A batch input is an additional input that must be added by
 * @@     the backend based on all the requests in a batch.
 * @@
 */
export interface BatchInput {
  /**
   * @@    .. cpp:var:: Kind kind
   * @@
   * @@       The kind of this batch input.
   * @@
   */
  kind?: _inference_BatchInput_Kind;
  /**
   * @@    .. cpp:var:: string target_name (repeated)
   * @@
   * @@       The name of the model inputs that the backend will create
   * @@       for this batch input.
   * @@
   */
  targetName?: string[];
  /**
   * @@    .. cpp:var:: DataType data_type
   * @@
   * @@       The input's datatype. The data type can be TYPE_INT32 or
   * @@       TYPE_FP32.
   * @@
   */
  dataType?: _inference_DataType;
  /**
   * @@    .. cpp:var:: string source_input (repeated)
   * @@
   * @@       The backend derives the value for each batch input from one or
   * @@       more other inputs. 'source_input' gives the names of those
   * @@       inputs.
   * @@
   */
  sourceInput?: string[];
}

/**
 * @@  .. cpp:var:: message BatchInput
 * @@
 * @@     A batch input is an additional input that must be added by
 * @@     the backend based on all the requests in a batch.
 * @@
 */
export interface BatchInput__Output {
  /**
   * @@    .. cpp:var:: Kind kind
   * @@
   * @@       The kind of this batch input.
   * @@
   */
  kind: _inference_BatchInput_Kind__Output;
  /**
   * @@    .. cpp:var:: string target_name (repeated)
   * @@
   * @@       The name of the model inputs that the backend will create
   * @@       for this batch input.
   * @@
   */
  targetName: string[];
  /**
   * @@    .. cpp:var:: DataType data_type
   * @@
   * @@       The input's datatype. The data type can be TYPE_INT32 or
   * @@       TYPE_FP32.
   * @@
   */
  dataType: _inference_DataType__Output;
  /**
   * @@    .. cpp:var:: string source_input (repeated)
   * @@
   * @@       The backend derives the value for each batch input from one or
   * @@       more other inputs. 'source_input' gives the names of those
   * @@       inputs.
   * @@
   */
  sourceInput: string[];
}
