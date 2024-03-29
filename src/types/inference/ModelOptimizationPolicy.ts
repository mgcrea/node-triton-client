// Original file: proto/model_config.proto

import type { Long } from "@grpc/proto-loader";

export interface _inference_ModelOptimizationPolicy_ExecutionAccelerators_Accelerator {
  name?: string;
  parameters?: { [key: string]: string };
}

export interface _inference_ModelOptimizationPolicy_ExecutionAccelerators_Accelerator__Output {
  name: string;
  parameters: { [key: string]: string };
}

export interface _inference_ModelOptimizationPolicy_Cuda {
  graphs?: boolean;
  busyWaitEvents?: boolean;
  graphSpec?: _inference_ModelOptimizationPolicy_Cuda_GraphSpec[];
  outputCopyStream?: boolean;
}

export interface _inference_ModelOptimizationPolicy_Cuda__Output {
  graphs: boolean;
  busyWaitEvents: boolean;
  graphSpec: _inference_ModelOptimizationPolicy_Cuda_GraphSpec__Output[];
  outputCopyStream: boolean;
}

export interface _inference_ModelOptimizationPolicy_ExecutionAccelerators {
  gpuExecutionAccelerator?: _inference_ModelOptimizationPolicy_ExecutionAccelerators_Accelerator[];
  cpuExecutionAccelerator?: _inference_ModelOptimizationPolicy_ExecutionAccelerators_Accelerator[];
}

export interface _inference_ModelOptimizationPolicy_ExecutionAccelerators__Output {
  gpuExecutionAccelerator: _inference_ModelOptimizationPolicy_ExecutionAccelerators_Accelerator__Output[];
  cpuExecutionAccelerator: _inference_ModelOptimizationPolicy_ExecutionAccelerators_Accelerator__Output[];
}

export interface _inference_ModelOptimizationPolicy_Graph {
  level?: number;
}

export interface _inference_ModelOptimizationPolicy_Graph__Output {
  level: number;
}

export interface _inference_ModelOptimizationPolicy_Cuda_GraphSpec {
  batchSize?: number;
  input?: { [key: string]: _inference_ModelOptimizationPolicy_Cuda_GraphSpec_Shape };
  graphLowerBound?: _inference_ModelOptimizationPolicy_Cuda_GraphSpec_LowerBound | null;
}

export interface _inference_ModelOptimizationPolicy_Cuda_GraphSpec__Output {
  batchSize: number;
  input: { [key: string]: _inference_ModelOptimizationPolicy_Cuda_GraphSpec_Shape__Output };
  graphLowerBound: _inference_ModelOptimizationPolicy_Cuda_GraphSpec_LowerBound__Output | null;
}

export interface _inference_ModelOptimizationPolicy_Cuda_GraphSpec_LowerBound {
  batchSize?: number;
  input?: { [key: string]: _inference_ModelOptimizationPolicy_Cuda_GraphSpec_Shape };
}

export interface _inference_ModelOptimizationPolicy_Cuda_GraphSpec_LowerBound__Output {
  batchSize: number;
  input: { [key: string]: _inference_ModelOptimizationPolicy_Cuda_GraphSpec_Shape__Output };
}

// Original file: proto/model_config.proto

export const _inference_ModelOptimizationPolicy_ModelPriority = {
  PRIORITY_DEFAULT: "PRIORITY_DEFAULT",
  PRIORITY_MAX: "PRIORITY_MAX",
  PRIORITY_MIN: "PRIORITY_MIN",
} as const;

export type _inference_ModelOptimizationPolicy_ModelPriority =
  | "PRIORITY_DEFAULT"
  | 0
  | "PRIORITY_MAX"
  | 1
  | "PRIORITY_MIN"
  | 2;

export type _inference_ModelOptimizationPolicy_ModelPriority__Output =
  (typeof _inference_ModelOptimizationPolicy_ModelPriority)[keyof typeof _inference_ModelOptimizationPolicy_ModelPriority];

export interface _inference_ModelOptimizationPolicy_PinnedMemoryBuffer {
  enable?: boolean;
}

export interface _inference_ModelOptimizationPolicy_PinnedMemoryBuffer__Output {
  enable: boolean;
}

export interface _inference_ModelOptimizationPolicy_Cuda_GraphSpec_Shape {
  dim?: (number | string | Long)[];
}

export interface _inference_ModelOptimizationPolicy_Cuda_GraphSpec_Shape__Output {
  dim: string[];
}

export interface ModelOptimizationPolicy {
  graph?: _inference_ModelOptimizationPolicy_Graph | null;
  priority?: _inference_ModelOptimizationPolicy_ModelPriority;
  cuda?: _inference_ModelOptimizationPolicy_Cuda | null;
  executionAccelerators?: _inference_ModelOptimizationPolicy_ExecutionAccelerators | null;
  inputPinnedMemory?: _inference_ModelOptimizationPolicy_PinnedMemoryBuffer | null;
  outputPinnedMemory?: _inference_ModelOptimizationPolicy_PinnedMemoryBuffer | null;
  gatherKernelBufferThreshold?: number;
  eagerBatching?: boolean;
}

export interface ModelOptimizationPolicy__Output {
  graph: _inference_ModelOptimizationPolicy_Graph__Output | null;
  priority: _inference_ModelOptimizationPolicy_ModelPriority__Output;
  cuda: _inference_ModelOptimizationPolicy_Cuda__Output | null;
  executionAccelerators: _inference_ModelOptimizationPolicy_ExecutionAccelerators__Output | null;
  inputPinnedMemory: _inference_ModelOptimizationPolicy_PinnedMemoryBuffer__Output | null;
  outputPinnedMemory: _inference_ModelOptimizationPolicy_PinnedMemoryBuffer__Output | null;
  gatherKernelBufferThreshold: number;
  eagerBatching: boolean;
}
