// Original file: proto/model_config.proto

import type { Long } from "@grpc/proto-loader";
import type {
  DataType as _inference_DataType,
  DataType__Output as _inference_DataType__Output,
} from "../inference/DataType";

/**
 * @@  .. cpp:var:: message Control
 * @@
 * @@     A control is a signal that the sequence batcher uses to
 * @@     communicate with a backend.
 * @@
 */
export interface _inference_ModelSequenceBatching_Control {
  /**
   * @@    .. cpp:var:: Kind kind
   * @@
   * @@       The kind of this control.
   * @@
   */
  kind?: _inference_ModelSequenceBatching_Control_Kind;
  /**
   * @@    .. cpp:var:: int32 int32_false_true (repeated)
   * @@
   * @@       The control's true and false setting is indicated by setting
   * @@       a value in an int32 tensor. The tensor must be a
   * @@       1-dimensional tensor with size equal to the batch size of
   * @@       the request. 'int32_false_true' must have two entries: the
   * @@       first the false value and the second the true value.
   * @@
   */
  int32FalseTrue?: number[];
  /**
   * @@    .. cpp:var:: float fp32_false_true (repeated)
   * @@
   * @@       The control's true and false setting is indicated by setting
   * @@       a value in a fp32 tensor. The tensor must be a
   * @@       1-dimensional tensor with size equal to the batch size of
   * @@       the request. 'fp32_false_true' must have two entries: the
   * @@       first the false value and the second the true value.
   * @@
   */
  fp32FalseTrue?: (number | string)[];
  /**
   * @@    .. cpp:var:: bool bool_false_true (repeated)
   * @@
   * @@       The control's true and false setting is indicated by setting
   * @@       a value in a bool tensor. The tensor must be a
   * @@       1-dimensional tensor with size equal to the batch size of
   * @@       the request. 'bool_false_true' must have two entries: the
   * @@       first the false value and the second the true value.
   * @@
   */
  boolFalseTrue?: boolean[];
  /**
   * @@    .. cpp:var:: DataType data_type
   * @@
   * @@       The control's datatype.
   * @@
   */
  dataType?: _inference_DataType;
}

/**
 * @@  .. cpp:var:: message Control
 * @@
 * @@     A control is a signal that the sequence batcher uses to
 * @@     communicate with a backend.
 * @@
 */
export interface _inference_ModelSequenceBatching_Control__Output {
  /**
   * @@    .. cpp:var:: Kind kind
   * @@
   * @@       The kind of this control.
   * @@
   */
  kind: _inference_ModelSequenceBatching_Control_Kind__Output;
  /**
   * @@    .. cpp:var:: int32 int32_false_true (repeated)
   * @@
   * @@       The control's true and false setting is indicated by setting
   * @@       a value in an int32 tensor. The tensor must be a
   * @@       1-dimensional tensor with size equal to the batch size of
   * @@       the request. 'int32_false_true' must have two entries: the
   * @@       first the false value and the second the true value.
   * @@
   */
  int32FalseTrue: number[];
  /**
   * @@    .. cpp:var:: float fp32_false_true (repeated)
   * @@
   * @@       The control's true and false setting is indicated by setting
   * @@       a value in a fp32 tensor. The tensor must be a
   * @@       1-dimensional tensor with size equal to the batch size of
   * @@       the request. 'fp32_false_true' must have two entries: the
   * @@       first the false value and the second the true value.
   * @@
   */
  fp32FalseTrue: number[];
  /**
   * @@    .. cpp:var:: bool bool_false_true (repeated)
   * @@
   * @@       The control's true and false setting is indicated by setting
   * @@       a value in a bool tensor. The tensor must be a
   * @@       1-dimensional tensor with size equal to the batch size of
   * @@       the request. 'bool_false_true' must have two entries: the
   * @@       first the false value and the second the true value.
   * @@
   */
  boolFalseTrue: boolean[];
  /**
   * @@    .. cpp:var:: DataType data_type
   * @@
   * @@       The control's datatype.
   * @@
   */
  dataType: _inference_DataType__Output;
}

/**
 * @@  .. cpp:var:: message ControlInput
 * @@
 * @@     The sequence control values to communicate by a model input.
 * @@
 */
export interface _inference_ModelSequenceBatching_ControlInput {
  /**
   * @@    .. cpp:var:: string name
   * @@
   * @@       The name of the model input.
   * @@
   */
  name?: string;
  /**
   * @@    .. cpp:var:: Control control (repeated)
   * @@
   * @@       The control value(s) that should be communicated to the
   * @@       model using this model input.
   * @@
   */
  control?: _inference_ModelSequenceBatching_Control[];
}

/**
 * @@  .. cpp:var:: message ControlInput
 * @@
 * @@     The sequence control values to communicate by a model input.
 * @@
 */
export interface _inference_ModelSequenceBatching_ControlInput__Output {
  /**
   * @@    .. cpp:var:: string name
   * @@
   * @@       The name of the model input.
   * @@
   */
  name: string;
  /**
   * @@    .. cpp:var:: Control control (repeated)
   * @@
   * @@       The control value(s) that should be communicated to the
   * @@       model using this model input.
   * @@
   */
  control: _inference_ModelSequenceBatching_Control__Output[];
}

/**
 * @@
 * @@  .. cpp:var:: message InitialState
 * @@
 * @@     Settings used to initialize data for implicit state.
 * @@
 */
export interface _inference_ModelSequenceBatching_InitialState {
  /**
   * @@      .. cpp:var:: DataType data_type
   * @@
   * @@         The data-type of the state.
   * @@
   */
  dataType?: _inference_DataType;
  /**
   * @@      .. cpp:var:: int64 dims (repeated)
   * @@
   * @@         The shape of the state tensor, not including the batch
   * @@         dimension.
   * @@
   */
  dims?: (number | string | Long)[];
  /**
   * @@
   * @@      .. cpp:var:: bool zero_data
   * @@
   * @@         The identifier for using zeros as initial state data.
   * @@         Note that the value of 'zero_data' will not be checked,
   * @@         instead, zero data will be used as long as the field is set.
   * @@
   */
  zeroData?: boolean;
  /**
   * @@      .. cpp:var:: string data_file
   * @@
   * @@         The file whose content will be used as the initial data for
   * @@         the state in row-major order. The file must be provided in
   * @@         sub-directory 'initial_state' under the model directory.
   * @@
   */
  dataFile?: string;
  /**
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the state initialization.
   * @@
   */
  name?: string;
  /**
   * @@      .. cpp:var:: oneof state_data
   * @@
   * @@         Specify how the initial state data is generated.
   * @@
   */
  stateData?: "zeroData" | "dataFile";
}

/**
 * @@
 * @@  .. cpp:var:: message InitialState
 * @@
 * @@     Settings used to initialize data for implicit state.
 * @@
 */
export interface _inference_ModelSequenceBatching_InitialState__Output {
  /**
   * @@      .. cpp:var:: DataType data_type
   * @@
   * @@         The data-type of the state.
   * @@
   */
  dataType: _inference_DataType__Output;
  /**
   * @@      .. cpp:var:: int64 dims (repeated)
   * @@
   * @@         The shape of the state tensor, not including the batch
   * @@         dimension.
   * @@
   */
  dims: string[];
  /**
   * @@
   * @@      .. cpp:var:: bool zero_data
   * @@
   * @@         The identifier for using zeros as initial state data.
   * @@         Note that the value of 'zero_data' will not be checked,
   * @@         instead, zero data will be used as long as the field is set.
   * @@
   */
  zeroData?: boolean;
  /**
   * @@      .. cpp:var:: string data_file
   * @@
   * @@         The file whose content will be used as the initial data for
   * @@         the state in row-major order. The file must be provided in
   * @@         sub-directory 'initial_state' under the model directory.
   * @@
   */
  dataFile?: string;
  /**
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name of the state initialization.
   * @@
   */
  name: string;
  /**
   * @@      .. cpp:var:: oneof state_data
   * @@
   * @@         Specify how the initial state data is generated.
   * @@
   */
  stateData: "zeroData" | "dataFile";
}

// Original file: proto/model_config.proto

/**
 * @@
 * @@    .. cpp:enum:: Kind
 * @@
 * @@       The kind of the control.
 * @@
 */
export const _inference_ModelSequenceBatching_Control_Kind = {
  /**
   * @@      .. cpp:enumerator:: Kind::CONTROL_SEQUENCE_START = 0
   * @@
   * @@         A new sequence is/is-not starting. If true a sequence is
   * @@         starting, if false a sequence is continuing. Must
   * @@         specify either int32_false_true, fp32_false_true or
   * @@         bool_false_true for this control. This control is optional.
   * @@
   */
  CONTROL_SEQUENCE_START: "CONTROL_SEQUENCE_START",
  /**
   * @@      .. cpp:enumerator:: Kind::CONTROL_SEQUENCE_READY = 1
   * @@
   * @@         A sequence is/is-not ready for inference. If true the
   * @@         input tensor data is valid and should be used. If false
   * @@         the input tensor data is invalid and inferencing should
   * @@         be "skipped". Must specify either int32_false_true,
   * @@         fp32_false_true or bool_false_true for this control. This
   * @@         control is optional.
   * @@
   */
  CONTROL_SEQUENCE_READY: "CONTROL_SEQUENCE_READY",
  /**
   * @@      .. cpp:enumerator:: Kind::CONTROL_SEQUENCE_END = 2
   * @@
   * @@         A sequence is/is-not ending. If true a sequence is
   * @@         ending, if false a sequence is continuing. Must specify
   * @@         either int32_false_true, fp32_false_true or bool_false_true
   * @@         for this control. This control is optional.
   * @@
   */
  CONTROL_SEQUENCE_END: "CONTROL_SEQUENCE_END",
  /**
   * @@      .. cpp:enumerator:: Kind::CONTROL_SEQUENCE_CORRID = 3
   * @@
   * @@         The correlation ID of the sequence. The correlation ID
   * @@         is an uint64_t value that is communicated in whole or
   * @@         in part by the tensor. The tensor's datatype must be
   * @@         specified by data_type and must be TYPE_UINT64, TYPE_INT64,
   * @@         TYPE_UINT32 or TYPE_INT32. If a 32-bit datatype is specified
   * @@         the correlation ID will be truncated to the low-order 32
   * @@         bits. This control is optional.
   * @@
   */
  CONTROL_SEQUENCE_CORRID: "CONTROL_SEQUENCE_CORRID",
} as const;

/**
 * @@
 * @@    .. cpp:enum:: Kind
 * @@
 * @@       The kind of the control.
 * @@
 */
export type _inference_ModelSequenceBatching_Control_Kind =
  /**
   * @@      .. cpp:enumerator:: Kind::CONTROL_SEQUENCE_START = 0
   * @@
   * @@         A new sequence is/is-not starting. If true a sequence is
   * @@         starting, if false a sequence is continuing. Must
   * @@         specify either int32_false_true, fp32_false_true or
   * @@         bool_false_true for this control. This control is optional.
   * @@
   */
  | "CONTROL_SEQUENCE_START"
  | 0
  /**
   * @@      .. cpp:enumerator:: Kind::CONTROL_SEQUENCE_READY = 1
   * @@
   * @@         A sequence is/is-not ready for inference. If true the
   * @@         input tensor data is valid and should be used. If false
   * @@         the input tensor data is invalid and inferencing should
   * @@         be "skipped". Must specify either int32_false_true,
   * @@         fp32_false_true or bool_false_true for this control. This
   * @@         control is optional.
   * @@
   */
  | "CONTROL_SEQUENCE_READY"
  | 1
  /**
   * @@      .. cpp:enumerator:: Kind::CONTROL_SEQUENCE_END = 2
   * @@
   * @@         A sequence is/is-not ending. If true a sequence is
   * @@         ending, if false a sequence is continuing. Must specify
   * @@         either int32_false_true, fp32_false_true or bool_false_true
   * @@         for this control. This control is optional.
   * @@
   */
  | "CONTROL_SEQUENCE_END"
  | 2
  /**
   * @@      .. cpp:enumerator:: Kind::CONTROL_SEQUENCE_CORRID = 3
   * @@
   * @@         The correlation ID of the sequence. The correlation ID
   * @@         is an uint64_t value that is communicated in whole or
   * @@         in part by the tensor. The tensor's datatype must be
   * @@         specified by data_type and must be TYPE_UINT64, TYPE_INT64,
   * @@         TYPE_UINT32 or TYPE_INT32. If a 32-bit datatype is specified
   * @@         the correlation ID will be truncated to the low-order 32
   * @@         bits. This control is optional.
   * @@
   */
  | "CONTROL_SEQUENCE_CORRID"
  | 3;

/**
 * @@
 * @@    .. cpp:enum:: Kind
 * @@
 * @@       The kind of the control.
 * @@
 */
export type _inference_ModelSequenceBatching_Control_Kind__Output =
  (typeof _inference_ModelSequenceBatching_Control_Kind)[keyof typeof _inference_ModelSequenceBatching_Control_Kind];

/**
 * @@  .. cpp:var:: message State
 * @@
 * @@     An input / output pair of tensors that carry state for the sequence.
 * @@
 */
export interface _inference_ModelSequenceBatching_State {
  /**
   * @@    .. cpp:var:: string input_name
   * @@
   * @@       The name of the model state input.
   * @@
   */
  inputName?: string;
  /**
   * @@    .. cpp:var:: string output_name
   * @@
   * @@       The name of the model state output.
   * @@
   */
  outputName?: string;
  /**
   * @@    .. cpp:var:: DataType data_type
   * @@
   * @@       The data-type of the state.
   * @@
   */
  dataType?: _inference_DataType;
  /**
   * @@    .. cpp:var:: int64 dim (repeated)
   * @@
   * @@       The dimension.
   * @@
   */
  dims?: (number | string | Long)[];
  /**
   * @@  .. cpp:var:: InitialState initial_state (repeated)
   * @@
   * @@     The optional field to specify the initial state for the model.
   * @@
   */
  initialState?: _inference_ModelSequenceBatching_InitialState[];
  /**
   * @@  .. cpp:var:: bool use_same_buffer_for_input_output
   * @@
   * @@     The optional field to use a single buffer for both input and output
   * @@     state. Without this option, Triton allocates separate buffers
   * @@     for input and output state
   * @@     which can be problematic if the state size is
   * @@     large. This option reduces the memory usage by allocating a single
   * @@     buffer. Enabling this option is recommended whenever
   * @@     the input state is processed before the output state is written.
   * @@     When enabled the state
   * @@     will always be updated independent of whether
   * @@     TRITONBACKEND_StateUpdate is called
   * @@     (however TRITONBACKEND_StateUpdate should still be called for
   * @@     completeness).
   * @@
   * @@     The default value is false.
   * @@
   */
  useSameBufferForInputOutput?: boolean;
  /**
   * @@  .. cpp:var:: bool use_growable_memory
   * @@
   * @@     The optional field to enable an implicit state buffer to grow
   * @@     without reallocating or copying existing memory.
   * @@     Additional memory will be appended to the end of the buffer and
   * @@     existing data will be preserved.
   * @@     This option is only available for CUDA memory and requires enabling
   * @@     use_same_buffer_for_input_output. When using this option,
   * @@     StateBuffer call will always return CUDA memory even if CPU memory
   * @@     is requested.
   * @@
   * @@     The default value is false.
   * @@
   */
  useGrowableMemory?: boolean;
}

/**
 * @@  .. cpp:var:: message State
 * @@
 * @@     An input / output pair of tensors that carry state for the sequence.
 * @@
 */
export interface _inference_ModelSequenceBatching_State__Output {
  /**
   * @@    .. cpp:var:: string input_name
   * @@
   * @@       The name of the model state input.
   * @@
   */
  inputName: string;
  /**
   * @@    .. cpp:var:: string output_name
   * @@
   * @@       The name of the model state output.
   * @@
   */
  outputName: string;
  /**
   * @@    .. cpp:var:: DataType data_type
   * @@
   * @@       The data-type of the state.
   * @@
   */
  dataType: _inference_DataType__Output;
  /**
   * @@    .. cpp:var:: int64 dim (repeated)
   * @@
   * @@       The dimension.
   * @@
   */
  dims: string[];
  /**
   * @@  .. cpp:var:: InitialState initial_state (repeated)
   * @@
   * @@     The optional field to specify the initial state for the model.
   * @@
   */
  initialState: _inference_ModelSequenceBatching_InitialState__Output[];
  /**
   * @@  .. cpp:var:: bool use_same_buffer_for_input_output
   * @@
   * @@     The optional field to use a single buffer for both input and output
   * @@     state. Without this option, Triton allocates separate buffers
   * @@     for input and output state
   * @@     which can be problematic if the state size is
   * @@     large. This option reduces the memory usage by allocating a single
   * @@     buffer. Enabling this option is recommended whenever
   * @@     the input state is processed before the output state is written.
   * @@     When enabled the state
   * @@     will always be updated independent of whether
   * @@     TRITONBACKEND_StateUpdate is called
   * @@     (however TRITONBACKEND_StateUpdate should still be called for
   * @@     completeness).
   * @@
   * @@     The default value is false.
   * @@
   */
  useSameBufferForInputOutput: boolean;
  /**
   * @@  .. cpp:var:: bool use_growable_memory
   * @@
   * @@     The optional field to enable an implicit state buffer to grow
   * @@     without reallocating or copying existing memory.
   * @@     Additional memory will be appended to the end of the buffer and
   * @@     existing data will be preserved.
   * @@     This option is only available for CUDA memory and requires enabling
   * @@     use_same_buffer_for_input_output. When using this option,
   * @@     StateBuffer call will always return CUDA memory even if CPU memory
   * @@     is requested.
   * @@
   * @@     The default value is false.
   * @@
   */
  useGrowableMemory: boolean;
}

/**
 * @@  .. cpp:var:: message StrategyDirect
 * @@
 * @@     The sequence batcher uses a specific, unique batch
 * @@     slot for each sequence. All inference requests in a
 * @@     sequence are directed to the same batch slot in the same
 * @@     model instance over the lifetime of the sequence. This
 * @@     is the default strategy.
 * @@
 */
export interface _inference_ModelSequenceBatching_StrategyDirect {
  /**
   * @@    .. cpp:var:: uint64 max_queue_delay_microseconds
   * @@
   * @@       The maximum time, in microseconds, a candidate request
   * @@       will be delayed in the sequence batch scheduling queue to
   * @@       wait for additional requests for batching. Default is 0.
   * @@
   */
  maxQueueDelayMicroseconds?: number | string | Long;
  /**
   * @@    .. cpp:var:: float minimum_slot_utilization
   * @@
   * @@       The minimum slot utilization that must be satisfied to
   * @@       execute the batch before 'max_queue_delay_microseconds' expires.
   * @@       For example, a value of 0.5 indicates that the batch should be
   * @@       executed as soon as 50% or more of the slots are ready even if
   * @@       the 'max_queue_delay_microseconds' timeout has not expired.
   * @@       The default is 0.0, indicating that a batch will be executed
   * @@       before 'max_queue_delay_microseconds' timeout expires if at least
   * @@       one batch slot is ready. 'max_queue_delay_microseconds' will be
   * @@       ignored unless minimum_slot_utilization is set to a non-zero
   * @@       value.
   * @@
   */
  minimumSlotUtilization?: number | string;
}

/**
 * @@  .. cpp:var:: message StrategyDirect
 * @@
 * @@     The sequence batcher uses a specific, unique batch
 * @@     slot for each sequence. All inference requests in a
 * @@     sequence are directed to the same batch slot in the same
 * @@     model instance over the lifetime of the sequence. This
 * @@     is the default strategy.
 * @@
 */
export interface _inference_ModelSequenceBatching_StrategyDirect__Output {
  /**
   * @@    .. cpp:var:: uint64 max_queue_delay_microseconds
   * @@
   * @@       The maximum time, in microseconds, a candidate request
   * @@       will be delayed in the sequence batch scheduling queue to
   * @@       wait for additional requests for batching. Default is 0.
   * @@
   */
  maxQueueDelayMicroseconds: string;
  /**
   * @@    .. cpp:var:: float minimum_slot_utilization
   * @@
   * @@       The minimum slot utilization that must be satisfied to
   * @@       execute the batch before 'max_queue_delay_microseconds' expires.
   * @@       For example, a value of 0.5 indicates that the batch should be
   * @@       executed as soon as 50% or more of the slots are ready even if
   * @@       the 'max_queue_delay_microseconds' timeout has not expired.
   * @@       The default is 0.0, indicating that a batch will be executed
   * @@       before 'max_queue_delay_microseconds' timeout expires if at least
   * @@       one batch slot is ready. 'max_queue_delay_microseconds' will be
   * @@       ignored unless minimum_slot_utilization is set to a non-zero
   * @@       value.
   * @@
   */
  minimumSlotUtilization: number;
}

/**
 * @@  .. cpp:var:: message StrategyOldest
 * @@
 * @@     The sequence batcher maintains up to 'max_candidate_sequences'
 * @@     candidate sequences. 'max_candidate_sequences' can be greater
 * @@     than the model's 'max_batch_size'. For inferencing the batcher
 * @@     chooses from the candidate sequences up to 'max_batch_size'
 * @@     inference requests. Requests are chosen in an oldest-first
 * @@     manner across all candidate sequences. A given sequence is
 * @@     not guaranteed to be assigned to the same batch slot for
 * @@     all inference requests of that sequence.
 * @@
 */
export interface _inference_ModelSequenceBatching_StrategyOldest {
  /**
   * @@    .. cpp:var:: int32 max_candidate_sequences
   * @@
   * @@       Maximum number of candidate sequences that the batcher
   * @@       maintains. Excess sequences are kept in an ordered backlog
   * @@       and become candidates when existing candidate sequences
   * @@       complete.
   * @@
   */
  maxCandidateSequences?: number;
  /**
   * @@    .. cpp:var:: int32 preferred_batch_size (repeated)
   * @@
   * @@       Preferred batch sizes for dynamic batching of candidate
   * @@       sequences. If a batch of one of these sizes can be formed
   * @@       it will be executed immediately. If not specified a
   * @@       preferred batch size will be chosen automatically
   * @@       based on model and GPU characteristics.
   * @@
   */
  preferredBatchSize?: number[];
  /**
   * @@    .. cpp:var:: uint64 max_queue_delay_microseconds
   * @@
   * @@       The maximum time, in microseconds, a candidate request
   * @@       will be delayed in the dynamic batch scheduling queue to
   * @@       wait for additional requests for batching. Default is 0.
   * @@
   */
  maxQueueDelayMicroseconds?: number | string | Long;
  /**
   * @@    .. cpp:var:: bool preserve_ordering
   * @@
   * @@       Should the dynamic batcher preserve the ordering of responses to
   * @@       match the order of requests received by the scheduler. Default is
   * @@       false. If true, the responses will be returned in the same order
   * @@       as the order of requests sent to the scheduler. If false, the
   * @@       responses may be returned in arbitrary order. This option is
   * @@       specifically needed when a sequence of related inference requests
   * @@       (i.e. inference requests with the same correlation ID) are sent
   * @@       to the dynamic batcher to ensure that the sequence responses are
   * @@       in the correct order.
   * @@
   * @@       When using decoupled models, setting this to true may block the
   * @@       responses from independent sequences from being returned to the
   * @@       client until the previous request completes, hurting overall
   * @@       performance. If using GRPC streaming protocol, the stream
   * @@       ordering guarantee may be sufficient alone to ensure the
   * @@       responses for each sequence are returned in sequence-order
   * @@       without blocking based on independent requests, depending on the
   * @@       use case.
   * @@
   */
  preserveOrdering?: boolean;
}

/**
 * @@  .. cpp:var:: message StrategyOldest
 * @@
 * @@     The sequence batcher maintains up to 'max_candidate_sequences'
 * @@     candidate sequences. 'max_candidate_sequences' can be greater
 * @@     than the model's 'max_batch_size'. For inferencing the batcher
 * @@     chooses from the candidate sequences up to 'max_batch_size'
 * @@     inference requests. Requests are chosen in an oldest-first
 * @@     manner across all candidate sequences. A given sequence is
 * @@     not guaranteed to be assigned to the same batch slot for
 * @@     all inference requests of that sequence.
 * @@
 */
export interface _inference_ModelSequenceBatching_StrategyOldest__Output {
  /**
   * @@    .. cpp:var:: int32 max_candidate_sequences
   * @@
   * @@       Maximum number of candidate sequences that the batcher
   * @@       maintains. Excess sequences are kept in an ordered backlog
   * @@       and become candidates when existing candidate sequences
   * @@       complete.
   * @@
   */
  maxCandidateSequences: number;
  /**
   * @@    .. cpp:var:: int32 preferred_batch_size (repeated)
   * @@
   * @@       Preferred batch sizes for dynamic batching of candidate
   * @@       sequences. If a batch of one of these sizes can be formed
   * @@       it will be executed immediately. If not specified a
   * @@       preferred batch size will be chosen automatically
   * @@       based on model and GPU characteristics.
   * @@
   */
  preferredBatchSize: number[];
  /**
   * @@    .. cpp:var:: uint64 max_queue_delay_microseconds
   * @@
   * @@       The maximum time, in microseconds, a candidate request
   * @@       will be delayed in the dynamic batch scheduling queue to
   * @@       wait for additional requests for batching. Default is 0.
   * @@
   */
  maxQueueDelayMicroseconds: string;
  /**
   * @@    .. cpp:var:: bool preserve_ordering
   * @@
   * @@       Should the dynamic batcher preserve the ordering of responses to
   * @@       match the order of requests received by the scheduler. Default is
   * @@       false. If true, the responses will be returned in the same order
   * @@       as the order of requests sent to the scheduler. If false, the
   * @@       responses may be returned in arbitrary order. This option is
   * @@       specifically needed when a sequence of related inference requests
   * @@       (i.e. inference requests with the same correlation ID) are sent
   * @@       to the dynamic batcher to ensure that the sequence responses are
   * @@       in the correct order.
   * @@
   * @@       When using decoupled models, setting this to true may block the
   * @@       responses from independent sequences from being returned to the
   * @@       client until the previous request completes, hurting overall
   * @@       performance. If using GRPC streaming protocol, the stream
   * @@       ordering guarantee may be sufficient alone to ensure the
   * @@       responses for each sequence are returned in sequence-order
   * @@       without blocking based on independent requests, depending on the
   * @@       use case.
   * @@
   */
  preserveOrdering: boolean;
}

/**
 * @@
 * @@.. cpp:var:: message ModelSequenceBatching
 * @@
 * @@   Sequence batching configuration. These settings control how sequence
 * @@   batching operates for the model.
 * @@
 */
export interface ModelSequenceBatching {
  /**
   * @@  .. cpp:var:: uint64 max_sequence_idle_microseconds
   * @@
   * @@     The maximum time, in microseconds, that a sequence is allowed to
   * @@     be idle before it is aborted. The inference server considers a
   * @@     sequence idle when it does not have any inference request queued
   * @@     for the sequence. If this limit is exceeded, the inference server
   * @@     will free the sequence slot allocated by the sequence and make it
   * @@     available for another sequence. If not specified (or specified as
   * @@     zero) a default value of 1000000 (1 second) is used.
   * @@
   */
  maxSequenceIdleMicroseconds?: number | string | Long;
  /**
   * @@  .. cpp:var:: ControlInput control_input (repeated)
   * @@
   * @@     The model input(s) that the server should use to communicate
   * @@     sequence start, stop, ready and similar control values to the
   * @@     model.
   * @@
   */
  controlInput?: _inference_ModelSequenceBatching_ControlInput[];
  /**
   * @@    .. cpp:var:: StrategyDirect direct
   * @@
   * @@       StrategyDirect scheduling strategy.
   * @@
   */
  direct?: _inference_ModelSequenceBatching_StrategyDirect | null;
  /**
   * @@    .. cpp:var:: StrategyOldest oldest
   * @@
   * @@       StrategyOldest scheduling strategy.
   * @@
   */
  oldest?: _inference_ModelSequenceBatching_StrategyOldest | null;
  /**
   * @@  .. cpp:var:: State state (repeated)
   * @@
   * @@     The optional state that can be stored in Triton for performing
   * @@     inference requests on a sequence. Each sequence holds an implicit
   * @@     state local to itself. The output state tensor provided by the
   * @@     model in 'output_name' field of the current inference request will
   * @@     be transferred as an input tensor named 'input_name' in the next
   * @@     request of the same sequence. The input state of the first request
   * @@     in the sequence contains garbage data.
   * @@
   */
  state?: _inference_ModelSequenceBatching_State[];
  /**
   * @@  .. cpp:var:: bool iterative_sequence
   * @@
   * @@     Requests for iterative sequences are processed over a number
   * @@     of iterations. An iterative sequence is initiated by a single
   * @@     request and is "rescheduled" by the model until completion.
   * @@     Requests for inflight requests will be batched together
   * @@     and can complete independently. Note this feature
   * @@     requires backend support. Default value is false.
   */
  iterativeSequence?: boolean;
  /**
   * @@  .. cpp:var:: oneof strategy_choice
   * @@
   * @@     The strategy used by the sequence batcher. Default strategy
   * @@     is 'direct'.
   * @@
   */
  strategyChoice?: "direct" | "oldest";
}

/**
 * @@
 * @@.. cpp:var:: message ModelSequenceBatching
 * @@
 * @@   Sequence batching configuration. These settings control how sequence
 * @@   batching operates for the model.
 * @@
 */
export interface ModelSequenceBatching__Output {
  /**
   * @@  .. cpp:var:: uint64 max_sequence_idle_microseconds
   * @@
   * @@     The maximum time, in microseconds, that a sequence is allowed to
   * @@     be idle before it is aborted. The inference server considers a
   * @@     sequence idle when it does not have any inference request queued
   * @@     for the sequence. If this limit is exceeded, the inference server
   * @@     will free the sequence slot allocated by the sequence and make it
   * @@     available for another sequence. If not specified (or specified as
   * @@     zero) a default value of 1000000 (1 second) is used.
   * @@
   */
  maxSequenceIdleMicroseconds: string;
  /**
   * @@  .. cpp:var:: ControlInput control_input (repeated)
   * @@
   * @@     The model input(s) that the server should use to communicate
   * @@     sequence start, stop, ready and similar control values to the
   * @@     model.
   * @@
   */
  controlInput: _inference_ModelSequenceBatching_ControlInput__Output[];
  /**
   * @@    .. cpp:var:: StrategyDirect direct
   * @@
   * @@       StrategyDirect scheduling strategy.
   * @@
   */
  direct?: _inference_ModelSequenceBatching_StrategyDirect__Output | null;
  /**
   * @@    .. cpp:var:: StrategyOldest oldest
   * @@
   * @@       StrategyOldest scheduling strategy.
   * @@
   */
  oldest?: _inference_ModelSequenceBatching_StrategyOldest__Output | null;
  /**
   * @@  .. cpp:var:: State state (repeated)
   * @@
   * @@     The optional state that can be stored in Triton for performing
   * @@     inference requests on a sequence. Each sequence holds an implicit
   * @@     state local to itself. The output state tensor provided by the
   * @@     model in 'output_name' field of the current inference request will
   * @@     be transferred as an input tensor named 'input_name' in the next
   * @@     request of the same sequence. The input state of the first request
   * @@     in the sequence contains garbage data.
   * @@
   */
  state: _inference_ModelSequenceBatching_State__Output[];
  /**
   * @@  .. cpp:var:: bool iterative_sequence
   * @@
   * @@     Requests for iterative sequences are processed over a number
   * @@     of iterations. An iterative sequence is initiated by a single
   * @@     request and is "rescheduled" by the model until completion.
   * @@     Requests for inflight requests will be batched together
   * @@     and can complete independently. Note this feature
   * @@     requires backend support. Default value is false.
   */
  iterativeSequence: boolean;
  /**
   * @@  .. cpp:var:: oneof strategy_choice
   * @@
   * @@     The strategy used by the sequence batcher. Default strategy
   * @@     is 'direct'.
   * @@
   */
  strategyChoice: "direct" | "oldest";
}
