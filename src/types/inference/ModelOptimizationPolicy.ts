// Original file: proto/model_config.proto

import type { Long } from "@grpc/proto-loader";

/**
 * @@
 * @@  .. cpp:var:: message Accelerator
 * @@
 * @@     Specify the accelerator to be used to execute the model.
 * @@     Accelerator with the same name may accept different parameters
 * @@     depending on the backends.
 * @@
 */
export interface _inference_ModelOptimizationPolicy_ExecutionAccelerators_Accelerator {
  /**
   * @@    .. cpp:var:: string name
   * @@
   * @@       The name of the execution accelerator.
   * @@
   */
  name?: string;
  /**
   * @@    .. cpp:var:: map<string, string> parameters
   * @@
   * @@       Additional parameters used to configure the accelerator.
   * @@
   */
  parameters?: { [key: string]: string };
}

/**
 * @@
 * @@  .. cpp:var:: message Accelerator
 * @@
 * @@     Specify the accelerator to be used to execute the model.
 * @@     Accelerator with the same name may accept different parameters
 * @@     depending on the backends.
 * @@
 */
export interface _inference_ModelOptimizationPolicy_ExecutionAccelerators_Accelerator__Output {
  /**
   * @@    .. cpp:var:: string name
   * @@
   * @@       The name of the execution accelerator.
   * @@
   */
  name: string;
  /**
   * @@    .. cpp:var:: map<string, string> parameters
   * @@
   * @@       Additional parameters used to configure the accelerator.
   * @@
   */
  parameters: { [key: string]: string };
}

/**
 * @@
 * @@  .. cpp:var:: message Cuda
 * @@
 * @@     CUDA-specific optimization settings.
 * @@
 */
export interface _inference_ModelOptimizationPolicy_Cuda {
  /**
   * @@    .. cpp:var:: bool graphs
   * @@
   * @@       Use CUDA graphs API to capture model operations and execute
   * @@       them more efficiently. Default value is false.
   * @@       Currently only recognized by TensorRT backend.
   * @@
   */
  graphs?: boolean;
  /**
   * @@    .. cpp:var:: bool busy_wait_events
   * @@
   * @@       Use busy-waiting to synchronize CUDA events to achieve minimum
   * @@       latency from event complete to host thread to be notified, with
   * @@       the cost of high CPU load. Default value is false.
   * @@       Currently only recognized by TensorRT backend.
   * @@
   */
  busyWaitEvents?: boolean;
  /**
   * @@    .. cpp:var:: GraphSpec graph_spec (repeated)
   * @@
   * @@       Specification of the CUDA graph to be captured. If not specified
   * @@       and 'graphs' is true, the default CUDA graphs will be captured
   * @@       based on model settings.
   * @@       Currently only recognized by TensorRT backend.
   * @@
   */
  graphSpec?: _inference_ModelOptimizationPolicy_Cuda_GraphSpec[];
  /**
   * @@    .. cpp:var:: bool output_copy_stream
   * @@
   * @@       Uses a CUDA stream separate from the inference stream to copy the
   * @@       output to host. However, be aware that setting this option to
   * @@       true will lead to an increase in the memory consumption of the
   * @@       model as Triton will allocate twice as much GPU memory for its
   * @@       I/O tensor buffers. Default value is false.
   * @@       Currently only recognized by TensorRT backend.
   * @@
   */
  outputCopyStream?: boolean;
}

/**
 * @@
 * @@  .. cpp:var:: message Cuda
 * @@
 * @@     CUDA-specific optimization settings.
 * @@
 */
export interface _inference_ModelOptimizationPolicy_Cuda__Output {
  /**
   * @@    .. cpp:var:: bool graphs
   * @@
   * @@       Use CUDA graphs API to capture model operations and execute
   * @@       them more efficiently. Default value is false.
   * @@       Currently only recognized by TensorRT backend.
   * @@
   */
  graphs: boolean;
  /**
   * @@    .. cpp:var:: bool busy_wait_events
   * @@
   * @@       Use busy-waiting to synchronize CUDA events to achieve minimum
   * @@       latency from event complete to host thread to be notified, with
   * @@       the cost of high CPU load. Default value is false.
   * @@       Currently only recognized by TensorRT backend.
   * @@
   */
  busyWaitEvents: boolean;
  /**
   * @@    .. cpp:var:: GraphSpec graph_spec (repeated)
   * @@
   * @@       Specification of the CUDA graph to be captured. If not specified
   * @@       and 'graphs' is true, the default CUDA graphs will be captured
   * @@       based on model settings.
   * @@       Currently only recognized by TensorRT backend.
   * @@
   */
  graphSpec: _inference_ModelOptimizationPolicy_Cuda_GraphSpec__Output[];
  /**
   * @@    .. cpp:var:: bool output_copy_stream
   * @@
   * @@       Uses a CUDA stream separate from the inference stream to copy the
   * @@       output to host. However, be aware that setting this option to
   * @@       true will lead to an increase in the memory consumption of the
   * @@       model as Triton will allocate twice as much GPU memory for its
   * @@       I/O tensor buffers. Default value is false.
   * @@       Currently only recognized by TensorRT backend.
   * @@
   */
  outputCopyStream: boolean;
}

/**
 * @@
 * @@  .. cpp:var:: message ExecutionAccelerators
 * @@
 * @@     Specify the preferred execution accelerators to be used to execute
 * @@     the model. Currently only recognized by ONNX Runtime backend and
 * @@     TensorFlow backend.
 * @@
 * @@     For ONNX Runtime backend, it will deploy the model with the execution
 * @@     accelerators by priority, the priority is determined based on the
 * @@     order that they are set, i.e. the provider at the front has highest
 * @@     priority. Overall, the priority will be in the following order:
 * @@         <gpu_execution_accelerator> (if instance is on GPU)
 * @@         CUDA Execution Provider     (if instance is on GPU)
 * @@         <cpu_execution_accelerator>
 * @@         Default CPU Execution Provider
 * @@
 */
export interface _inference_ModelOptimizationPolicy_ExecutionAccelerators {
  /**
   * @@    .. cpp:var:: Accelerator gpu_execution_accelerator (repeated)
   * @@
   * @@       The preferred execution provider to be used if the model instance
   * @@       is deployed on GPU.
   * @@
   * @@       For ONNX Runtime backend, possible value is "tensorrt" as name,
   * @@       and no parameters are required.
   * @@
   * @@       For TensorFlow backend, possible values are "tensorrt",
   * @@       "auto_mixed_precision", "gpu_io".
   * @@
   * @@       For "tensorrt", the following parameters can be specified:
   * @@         "precision_mode": The precision used for optimization.
   * @@         Allowed values are "FP32" and "FP16". Default value is "FP32".
   * @@
   * @@         "max_cached_engines": The maximum number of cached TensorRT
   * @@         engines in dynamic TensorRT ops. Default value is 100.
   * @@
   * @@         "minimum_segment_size": The smallest model subgraph that will
   * @@         be considered for optimization by TensorRT. Default value is 3.
   * @@
   * @@         "max_workspace_size_bytes": The maximum GPU memory the model
   * @@         can use temporarily during execution. Default value is 1GB.
   * @@
   * @@       For "auto_mixed_precision", no parameters are required. If set,
   * @@       the model will try to use FP16 for better performance.
   * @@       This optimization can not be set with "tensorrt".
   * @@
   * @@       For "gpu_io", no parameters are required. If set, the model will
   * @@       be executed using TensorFlow Callable API to set input and output
   * @@       tensors in GPU memory if possible, which can reduce data transfer
   * @@       overhead if the model is used in ensemble. However, the Callable
   * @@       object will be created on model creation and it will request all
   * @@       outputs for every model execution, which may impact the
   * @@       performance if a request does not require all outputs. This
   * @@       optimization will only take affect if the model instance is
   * @@       created with KIND_GPU.
   * @@
   */
  gpuExecutionAccelerator?: _inference_ModelOptimizationPolicy_ExecutionAccelerators_Accelerator[];
  /**
   * @@    .. cpp:var:: Accelerator cpu_execution_accelerator (repeated)
   * @@
   * @@       The preferred execution provider to be used if the model instance
   * @@       is deployed on CPU.
   * @@
   * @@       For ONNX Runtime backend, possible value is "openvino" as name,
   * @@       and no parameters are required.
   * @@
   */
  cpuExecutionAccelerator?: _inference_ModelOptimizationPolicy_ExecutionAccelerators_Accelerator[];
}

/**
 * @@
 * @@  .. cpp:var:: message ExecutionAccelerators
 * @@
 * @@     Specify the preferred execution accelerators to be used to execute
 * @@     the model. Currently only recognized by ONNX Runtime backend and
 * @@     TensorFlow backend.
 * @@
 * @@     For ONNX Runtime backend, it will deploy the model with the execution
 * @@     accelerators by priority, the priority is determined based on the
 * @@     order that they are set, i.e. the provider at the front has highest
 * @@     priority. Overall, the priority will be in the following order:
 * @@         <gpu_execution_accelerator> (if instance is on GPU)
 * @@         CUDA Execution Provider     (if instance is on GPU)
 * @@         <cpu_execution_accelerator>
 * @@         Default CPU Execution Provider
 * @@
 */
export interface _inference_ModelOptimizationPolicy_ExecutionAccelerators__Output {
  /**
   * @@    .. cpp:var:: Accelerator gpu_execution_accelerator (repeated)
   * @@
   * @@       The preferred execution provider to be used if the model instance
   * @@       is deployed on GPU.
   * @@
   * @@       For ONNX Runtime backend, possible value is "tensorrt" as name,
   * @@       and no parameters are required.
   * @@
   * @@       For TensorFlow backend, possible values are "tensorrt",
   * @@       "auto_mixed_precision", "gpu_io".
   * @@
   * @@       For "tensorrt", the following parameters can be specified:
   * @@         "precision_mode": The precision used for optimization.
   * @@         Allowed values are "FP32" and "FP16". Default value is "FP32".
   * @@
   * @@         "max_cached_engines": The maximum number of cached TensorRT
   * @@         engines in dynamic TensorRT ops. Default value is 100.
   * @@
   * @@         "minimum_segment_size": The smallest model subgraph that will
   * @@         be considered for optimization by TensorRT. Default value is 3.
   * @@
   * @@         "max_workspace_size_bytes": The maximum GPU memory the model
   * @@         can use temporarily during execution. Default value is 1GB.
   * @@
   * @@       For "auto_mixed_precision", no parameters are required. If set,
   * @@       the model will try to use FP16 for better performance.
   * @@       This optimization can not be set with "tensorrt".
   * @@
   * @@       For "gpu_io", no parameters are required. If set, the model will
   * @@       be executed using TensorFlow Callable API to set input and output
   * @@       tensors in GPU memory if possible, which can reduce data transfer
   * @@       overhead if the model is used in ensemble. However, the Callable
   * @@       object will be created on model creation and it will request all
   * @@       outputs for every model execution, which may impact the
   * @@       performance if a request does not require all outputs. This
   * @@       optimization will only take affect if the model instance is
   * @@       created with KIND_GPU.
   * @@
   */
  gpuExecutionAccelerator: _inference_ModelOptimizationPolicy_ExecutionAccelerators_Accelerator__Output[];
  /**
   * @@    .. cpp:var:: Accelerator cpu_execution_accelerator (repeated)
   * @@
   * @@       The preferred execution provider to be used if the model instance
   * @@       is deployed on CPU.
   * @@
   * @@       For ONNX Runtime backend, possible value is "openvino" as name,
   * @@       and no parameters are required.
   * @@
   */
  cpuExecutionAccelerator: _inference_ModelOptimizationPolicy_ExecutionAccelerators_Accelerator__Output[];
}

/**
 * @@
 * @@  .. cpp:var:: message Graph
 * @@
 * @@     Enable generic graph optimization of the model. If not specified
 * @@     the framework's default level of optimization is used. Supports
 * @@     TensorFlow graphdef and savedmodel and Onnx models. For TensorFlow
 * @@     causes XLA to be enabled/disabled for the model. For Onnx defaults
 * @@     to enabling all optimizations, -1 enables only basic optimizations,
 * @@     +1 enables only basic and extended optimizations.
 * @@
 */
export interface _inference_ModelOptimizationPolicy_Graph {
  /**
   * @@    .. cpp:var:: int32 level
   * @@
   * @@       The optimization level. Defaults to 0 (zero) if not specified.
   * @@
   * @@         - -1: Disabled
   * @@         -  0: Framework default
   * @@         -  1+: Enable optimization level (greater values indicate
   * @@            higher optimization levels)
   * @@
   */
  level?: number;
}

/**
 * @@
 * @@  .. cpp:var:: message Graph
 * @@
 * @@     Enable generic graph optimization of the model. If not specified
 * @@     the framework's default level of optimization is used. Supports
 * @@     TensorFlow graphdef and savedmodel and Onnx models. For TensorFlow
 * @@     causes XLA to be enabled/disabled for the model. For Onnx defaults
 * @@     to enabling all optimizations, -1 enables only basic optimizations,
 * @@     +1 enables only basic and extended optimizations.
 * @@
 */
export interface _inference_ModelOptimizationPolicy_Graph__Output {
  /**
   * @@    .. cpp:var:: int32 level
   * @@
   * @@       The optimization level. Defaults to 0 (zero) if not specified.
   * @@
   * @@         - -1: Disabled
   * @@         -  0: Framework default
   * @@         -  1+: Enable optimization level (greater values indicate
   * @@            higher optimization levels)
   * @@
   */
  level: number;
}

/**
 * @@    .. cpp:var:: message GraphSpec
 * @@
 * @@       Specification of the CUDA graph to be captured.
 * @@
 */
export interface _inference_ModelOptimizationPolicy_Cuda_GraphSpec {
  /**
   * @@      .. cpp:var:: int32 batch_size
   * @@
   * @@         The batch size of the CUDA graph. If 'max_batch_size' is 0,
   * @@         'batch_size' must be set to 0. Otherwise, 'batch_size' must
   * @@         be set to value between 1 and 'max_batch_size'.
   * @@
   */
  batchSize?: number;
  /**
   * @@      .. cpp:var:: map<string, Shape> input
   * @@
   * @@         The specification of the inputs. 'Shape' is the shape of the
   * @@         input without batching dimension.
   * @@
   */
  input?: { [key: string]: _inference_ModelOptimizationPolicy_Cuda_GraphSpec_Shape };
  /**
   * @@      .. cpp:var:: LowerBound graph_lower_bound
   * @@
   * @@         Specify the lower bound of the CUDA graph. Optional.
   * @@         If specified, the graph can be used for input shapes and
   * @@         batch sizes that are in closed interval between the lower
   * @@         bound specification and graph specification. For dynamic
   * @@         shape model, this allows CUDA graphs to be launched
   * @@         frequently without capturing all possible shape combinations.
   * @@         However, using graph for shape combinations different from
   * @@         the one used for capturing introduces uninitialized data for
   * @@         execution and it may distort the inference result if
   * @@         the model is sensitive to uninitialized data.
   * @@
   */
  graphLowerBound?: _inference_ModelOptimizationPolicy_Cuda_GraphSpec_LowerBound | null;
}

/**
 * @@    .. cpp:var:: message GraphSpec
 * @@
 * @@       Specification of the CUDA graph to be captured.
 * @@
 */
export interface _inference_ModelOptimizationPolicy_Cuda_GraphSpec__Output {
  /**
   * @@      .. cpp:var:: int32 batch_size
   * @@
   * @@         The batch size of the CUDA graph. If 'max_batch_size' is 0,
   * @@         'batch_size' must be set to 0. Otherwise, 'batch_size' must
   * @@         be set to value between 1 and 'max_batch_size'.
   * @@
   */
  batchSize: number;
  /**
   * @@      .. cpp:var:: map<string, Shape> input
   * @@
   * @@         The specification of the inputs. 'Shape' is the shape of the
   * @@         input without batching dimension.
   * @@
   */
  input: { [key: string]: _inference_ModelOptimizationPolicy_Cuda_GraphSpec_Shape__Output };
  /**
   * @@      .. cpp:var:: LowerBound graph_lower_bound
   * @@
   * @@         Specify the lower bound of the CUDA graph. Optional.
   * @@         If specified, the graph can be used for input shapes and
   * @@         batch sizes that are in closed interval between the lower
   * @@         bound specification and graph specification. For dynamic
   * @@         shape model, this allows CUDA graphs to be launched
   * @@         frequently without capturing all possible shape combinations.
   * @@         However, using graph for shape combinations different from
   * @@         the one used for capturing introduces uninitialized data for
   * @@         execution and it may distort the inference result if
   * @@         the model is sensitive to uninitialized data.
   * @@
   */
  graphLowerBound: _inference_ModelOptimizationPolicy_Cuda_GraphSpec_LowerBound__Output | null;
}

export interface _inference_ModelOptimizationPolicy_Cuda_GraphSpec_LowerBound {
  /**
   * @@      .. cpp:var:: int32 batch_size
   * @@
   * @@         The batch size of the CUDA graph. If 'max_batch_size' is 0,
   * @@         'batch_size' must be set to 0. Otherwise, 'batch_size' must
   * @@         be set to value between 1 and 'max_batch_size'.
   * @@
   */
  batchSize?: number;
  /**
   * @@      .. cpp:var:: map<string, Shape> input
   * @@
   * @@         The specification of the inputs. 'Shape' is the shape of
   * @@         the input without batching dimension.
   * @@
   */
  input?: { [key: string]: _inference_ModelOptimizationPolicy_Cuda_GraphSpec_Shape };
}

export interface _inference_ModelOptimizationPolicy_Cuda_GraphSpec_LowerBound__Output {
  /**
   * @@      .. cpp:var:: int32 batch_size
   * @@
   * @@         The batch size of the CUDA graph. If 'max_batch_size' is 0,
   * @@         'batch_size' must be set to 0. Otherwise, 'batch_size' must
   * @@         be set to value between 1 and 'max_batch_size'.
   * @@
   */
  batchSize: number;
  /**
   * @@      .. cpp:var:: map<string, Shape> input
   * @@
   * @@         The specification of the inputs. 'Shape' is the shape of
   * @@         the input without batching dimension.
   * @@
   */
  input: { [key: string]: _inference_ModelOptimizationPolicy_Cuda_GraphSpec_Shape__Output };
}

// Original file: proto/model_config.proto

/**
 * @@
 * @@  .. cpp:enum:: ModelPriority
 * @@
 * @@     Model priorities. A model will be given scheduling and execution
 * @@     preference over models at lower priorities. Current model
 * @@     priorities only work for TensorRT models.
 * @@
 */
export const _inference_ModelOptimizationPolicy_ModelPriority = {
  /**
   * @@    .. cpp:enumerator:: ModelPriority::PRIORITY_DEFAULT = 0
   * @@
   * @@       The default model priority.
   * @@
   */
  PRIORITY_DEFAULT: "PRIORITY_DEFAULT",
  /**
   * @@    .. cpp:enumerator:: ModelPriority::PRIORITY_MAX = 1
   * @@
   * @@       The maximum model priority.
   * @@
   */
  PRIORITY_MAX: "PRIORITY_MAX",
  /**
   * @@    .. cpp:enumerator:: ModelPriority::PRIORITY_MIN = 2
   * @@
   * @@       The minimum model priority.
   * @@
   */
  PRIORITY_MIN: "PRIORITY_MIN",
} as const;

/**
 * @@
 * @@  .. cpp:enum:: ModelPriority
 * @@
 * @@     Model priorities. A model will be given scheduling and execution
 * @@     preference over models at lower priorities. Current model
 * @@     priorities only work for TensorRT models.
 * @@
 */
export type _inference_ModelOptimizationPolicy_ModelPriority =
  /**
   * @@    .. cpp:enumerator:: ModelPriority::PRIORITY_DEFAULT = 0
   * @@
   * @@       The default model priority.
   * @@
   */
  | "PRIORITY_DEFAULT"
  | 0
  /**
   * @@    .. cpp:enumerator:: ModelPriority::PRIORITY_MAX = 1
   * @@
   * @@       The maximum model priority.
   * @@
   */
  | "PRIORITY_MAX"
  | 1
  /**
   * @@    .. cpp:enumerator:: ModelPriority::PRIORITY_MIN = 2
   * @@
   * @@       The minimum model priority.
   * @@
   */
  | "PRIORITY_MIN"
  | 2;

/**
 * @@
 * @@  .. cpp:enum:: ModelPriority
 * @@
 * @@     Model priorities. A model will be given scheduling and execution
 * @@     preference over models at lower priorities. Current model
 * @@     priorities only work for TensorRT models.
 * @@
 */
export type _inference_ModelOptimizationPolicy_ModelPriority__Output =
  (typeof _inference_ModelOptimizationPolicy_ModelPriority)[keyof typeof _inference_ModelOptimizationPolicy_ModelPriority];

/**
 * @@
 * @@  .. cpp:var:: message PinnedMemoryBuffer
 * @@
 * @@     Specify whether to use a pinned memory buffer when transferring data
 * @@     between non-pinned system memory and GPU memory. Using a pinned
 * @@     memory buffer for system from/to GPU transfers will typically provide
 * @@     increased performance. For example, in the common use case where the
 * @@     request provides inputs and delivers outputs via non-pinned system
 * @@     memory, if the model instance accepts GPU IOs, the inputs will be
 * @@     processed by two copies: from non-pinned system memory to pinned
 * @@     memory, and from pinned memory to GPU memory. Similarly, pinned
 * @@     memory will be used for delivering the outputs.
 * @@
 */
export interface _inference_ModelOptimizationPolicy_PinnedMemoryBuffer {
  /**
   * @@    .. cpp:var:: bool enable
   * @@
   * @@       Use pinned memory buffer. Default is true.
   * @@
   */
  enable?: boolean;
}

/**
 * @@
 * @@  .. cpp:var:: message PinnedMemoryBuffer
 * @@
 * @@     Specify whether to use a pinned memory buffer when transferring data
 * @@     between non-pinned system memory and GPU memory. Using a pinned
 * @@     memory buffer for system from/to GPU transfers will typically provide
 * @@     increased performance. For example, in the common use case where the
 * @@     request provides inputs and delivers outputs via non-pinned system
 * @@     memory, if the model instance accepts GPU IOs, the inputs will be
 * @@     processed by two copies: from non-pinned system memory to pinned
 * @@     memory, and from pinned memory to GPU memory. Similarly, pinned
 * @@     memory will be used for delivering the outputs.
 * @@
 */
export interface _inference_ModelOptimizationPolicy_PinnedMemoryBuffer__Output {
  /**
   * @@    .. cpp:var:: bool enable
   * @@
   * @@       Use pinned memory buffer. Default is true.
   * @@
   */
  enable: boolean;
}

/**
 * @@      .. cpp:var:: message Dims
 * @@
 * @@         Specification of tensor dimension.
 * @@
 */
export interface _inference_ModelOptimizationPolicy_Cuda_GraphSpec_Shape {
  /**
   * @@        .. cpp:var:: int64 dim (repeated)
   * @@
   * @@           The dimension.
   * @@
   */
  dim?: (number | string | Long)[];
}

/**
 * @@      .. cpp:var:: message Dims
 * @@
 * @@         Specification of tensor dimension.
 * @@
 */
export interface _inference_ModelOptimizationPolicy_Cuda_GraphSpec_Shape__Output {
  /**
   * @@        .. cpp:var:: int64 dim (repeated)
   * @@
   * @@           The dimension.
   * @@
   */
  dim: string[];
}

/**
 * @@
 * @@.. cpp:var:: message ModelOptimizationPolicy
 * @@
 * @@   Optimization settings for a model. These settings control if/how a
 * @@   model is optimized and prioritized by the backend framework when
 * @@   it is loaded.
 * @@
 */
export interface ModelOptimizationPolicy {
  /**
   * @@  .. cpp:var:: Graph graph
   * @@
   * @@     The graph optimization setting for the model. Optional.
   * @@
   */
  graph?: _inference_ModelOptimizationPolicy_Graph | null;
  /**
   * @@  .. cpp:var:: ModelPriority priority
   * @@
   * @@     The priority setting for the model. Optional.
   * @@
   */
  priority?: _inference_ModelOptimizationPolicy_ModelPriority;
  /**
   * @@  .. cpp:var:: Cuda cuda
   * @@
   * @@     CUDA-specific optimization settings. Optional.
   * @@
   */
  cuda?: _inference_ModelOptimizationPolicy_Cuda | null;
  /**
   * @@  .. cpp:var:: ExecutionAccelerators execution_accelerators
   * @@
   * @@     The accelerators used for the model. Optional.
   * @@
   */
  executionAccelerators?: _inference_ModelOptimizationPolicy_ExecutionAccelerators | null;
  /**
   * @@  .. cpp:var:: PinnedMemoryBuffer input_pinned_memory
   * @@
   * @@     Use pinned memory buffer when the data transfer for inputs
   * @@     is between GPU memory and non-pinned system memory.
   * @@     Default is true.
   * @@
   */
  inputPinnedMemory?: _inference_ModelOptimizationPolicy_PinnedMemoryBuffer | null;
  /**
   * @@  .. cpp:var:: PinnedMemoryBuffer output_pinned_memory
   * @@
   * @@     Use pinned memory buffer when the data transfer for outputs
   * @@     is between GPU memory and non-pinned system memory.
   * @@     Default is true.
   * @@
   */
  outputPinnedMemory?: _inference_ModelOptimizationPolicy_PinnedMemoryBuffer | null;
  /**
   * @@  .. cpp:var:: uint32 gather_kernel_buffer_threshold
   * @@
   * @@     The backend may use a gather kernel to gather input data if the
   * @@     device has direct access to the source buffer and the destination
   * @@     buffer. In such case, the gather kernel will be used only if the
   * @@     number of buffers to be gathered is greater or equal to
   * @@     the specified value. If 0, the gather kernel will be disabled.
   * @@     Default value is 0.
   * @@     Currently only recognized by TensorRT backend.
   * @@
   */
  gatherKernelBufferThreshold?: number;
  /**
   * @@  .. cpp:var:: bool eager_batching
   * @@
   * @@     Start preparing the next batch before the model instance is ready
   * @@     for the next inference. This option can be used to overlap the
   * @@     batch preparation with model execution, with the trade-off that
   * @@     the next batch might be smaller than what it could have been.
   * @@     Default value is false.
   * @@     Currently only recognized by TensorRT backend.
   * @@
   */
  eagerBatching?: boolean;
}

/**
 * @@
 * @@.. cpp:var:: message ModelOptimizationPolicy
 * @@
 * @@   Optimization settings for a model. These settings control if/how a
 * @@   model is optimized and prioritized by the backend framework when
 * @@   it is loaded.
 * @@
 */
export interface ModelOptimizationPolicy__Output {
  /**
   * @@  .. cpp:var:: Graph graph
   * @@
   * @@     The graph optimization setting for the model. Optional.
   * @@
   */
  graph: _inference_ModelOptimizationPolicy_Graph__Output | null;
  /**
   * @@  .. cpp:var:: ModelPriority priority
   * @@
   * @@     The priority setting for the model. Optional.
   * @@
   */
  priority: _inference_ModelOptimizationPolicy_ModelPriority__Output;
  /**
   * @@  .. cpp:var:: Cuda cuda
   * @@
   * @@     CUDA-specific optimization settings. Optional.
   * @@
   */
  cuda: _inference_ModelOptimizationPolicy_Cuda__Output | null;
  /**
   * @@  .. cpp:var:: ExecutionAccelerators execution_accelerators
   * @@
   * @@     The accelerators used for the model. Optional.
   * @@
   */
  executionAccelerators: _inference_ModelOptimizationPolicy_ExecutionAccelerators__Output | null;
  /**
   * @@  .. cpp:var:: PinnedMemoryBuffer input_pinned_memory
   * @@
   * @@     Use pinned memory buffer when the data transfer for inputs
   * @@     is between GPU memory and non-pinned system memory.
   * @@     Default is true.
   * @@
   */
  inputPinnedMemory: _inference_ModelOptimizationPolicy_PinnedMemoryBuffer__Output | null;
  /**
   * @@  .. cpp:var:: PinnedMemoryBuffer output_pinned_memory
   * @@
   * @@     Use pinned memory buffer when the data transfer for outputs
   * @@     is between GPU memory and non-pinned system memory.
   * @@     Default is true.
   * @@
   */
  outputPinnedMemory: _inference_ModelOptimizationPolicy_PinnedMemoryBuffer__Output | null;
  /**
   * @@  .. cpp:var:: uint32 gather_kernel_buffer_threshold
   * @@
   * @@     The backend may use a gather kernel to gather input data if the
   * @@     device has direct access to the source buffer and the destination
   * @@     buffer. In such case, the gather kernel will be used only if the
   * @@     number of buffers to be gathered is greater or equal to
   * @@     the specified value. If 0, the gather kernel will be disabled.
   * @@     Default value is 0.
   * @@     Currently only recognized by TensorRT backend.
   * @@
   */
  gatherKernelBufferThreshold: number;
  /**
   * @@  .. cpp:var:: bool eager_batching
   * @@
   * @@     Start preparing the next batch before the model instance is ready
   * @@     for the next inference. This option can be used to overlap the
   * @@     batch preparation with model execution, with the trade-off that
   * @@     the next batch might be smaller than what it could have been.
   * @@     Default value is false.
   * @@     Currently only recognized by TensorRT backend.
   * @@
   */
  eagerBatching: boolean;
}
