// Original file: proto/model_config.proto

import type { Long } from "@grpc/proto-loader";
import type {
  ModelRateLimiter as _inference_ModelRateLimiter,
  ModelRateLimiter__Output as _inference_ModelRateLimiter__Output,
} from "../inference/ModelRateLimiter";

// Original file: proto/model_config.proto

/**
 * @@
 * @@  .. cpp:enum:: Kind
 * @@
 * @@     Kind of this instance group.
 * @@
 */
export const _inference_ModelInstanceGroup_Kind = {
  /**
   * @@    .. cpp:enumerator:: Kind::KIND_AUTO = 0
   * @@
   * @@       This instance group represents instances that can run on either
   * @@       CPU or GPU. If all GPUs listed in 'gpus' are available then
   * @@       instances will be created on GPU(s), otherwise instances will
   * @@       be created on CPU.
   * @@
   */
  KIND_AUTO: "KIND_AUTO",
  /**
   * @@    .. cpp:enumerator:: Kind::KIND_GPU = 1
   * @@
   * @@       This instance group represents instances that must run on the
   * @@       GPU.
   * @@
   */
  KIND_GPU: "KIND_GPU",
  /**
   * @@    .. cpp:enumerator:: Kind::KIND_CPU = 2
   * @@
   * @@       This instance group represents instances that must run on the
   * @@       CPU.
   * @@
   */
  KIND_CPU: "KIND_CPU",
  /**
   * @@    .. cpp:enumerator:: Kind::KIND_MODEL = 3
   * @@
   * @@       This instance group represents instances that should run on the
   * @@       CPU and/or GPU(s) as specified by the model or backend itself.
   * @@       The inference server will not override the model/backend
   * @@       settings.
   * @@
   */
  KIND_MODEL: "KIND_MODEL",
} as const;

/**
 * @@
 * @@  .. cpp:enum:: Kind
 * @@
 * @@     Kind of this instance group.
 * @@
 */
export type _inference_ModelInstanceGroup_Kind =
  /**
   * @@    .. cpp:enumerator:: Kind::KIND_AUTO = 0
   * @@
   * @@       This instance group represents instances that can run on either
   * @@       CPU or GPU. If all GPUs listed in 'gpus' are available then
   * @@       instances will be created on GPU(s), otherwise instances will
   * @@       be created on CPU.
   * @@
   */
  | "KIND_AUTO"
  | 0
  /**
   * @@    .. cpp:enumerator:: Kind::KIND_GPU = 1
   * @@
   * @@       This instance group represents instances that must run on the
   * @@       GPU.
   * @@
   */
  | "KIND_GPU"
  | 1
  /**
   * @@    .. cpp:enumerator:: Kind::KIND_CPU = 2
   * @@
   * @@       This instance group represents instances that must run on the
   * @@       CPU.
   * @@
   */
  | "KIND_CPU"
  | 2
  /**
   * @@    .. cpp:enumerator:: Kind::KIND_MODEL = 3
   * @@
   * @@       This instance group represents instances that should run on the
   * @@       CPU and/or GPU(s) as specified by the model or backend itself.
   * @@       The inference server will not override the model/backend
   * @@       settings.
   * @@
   */
  | "KIND_MODEL"
  | 3;

/**
 * @@
 * @@  .. cpp:enum:: Kind
 * @@
 * @@     Kind of this instance group.
 * @@
 */
export type _inference_ModelInstanceGroup_Kind__Output =
  (typeof _inference_ModelInstanceGroup_Kind)[keyof typeof _inference_ModelInstanceGroup_Kind];

/**
 * @@
 * @@  .. cpp:var:: message SecondaryDevice
 * @@
 * @@     A secondary device required for a model instance.
 * @@
 */
export interface _inference_ModelInstanceGroup_SecondaryDevice {
  /**
   * @@  .. cpp:var:: SecondaryDeviceKind kind
   * @@
   * @@     The secondary device kind.
   * @@
   */
  kind?: _inference_ModelInstanceGroup_SecondaryDevice_SecondaryDeviceKind;
  /**
   * @@  .. cpp:var:: int64 device_id
   * @@
   * @@     Identifier for the secondary device.
   * @@
   */
  deviceId?: number | string | Long;
}

/**
 * @@
 * @@  .. cpp:var:: message SecondaryDevice
 * @@
 * @@     A secondary device required for a model instance.
 * @@
 */
export interface _inference_ModelInstanceGroup_SecondaryDevice__Output {
  /**
   * @@  .. cpp:var:: SecondaryDeviceKind kind
   * @@
   * @@     The secondary device kind.
   * @@
   */
  kind: _inference_ModelInstanceGroup_SecondaryDevice_SecondaryDeviceKind__Output;
  /**
   * @@  .. cpp:var:: int64 device_id
   * @@
   * @@     Identifier for the secondary device.
   * @@
   */
  deviceId: string;
}

// Original file: proto/model_config.proto

/**
 * @@
 * @@  .. cpp:enum:: SecondaryDeviceKind
 * @@
 * @@     The kind of the secondary device.
 * @@
 */
export const _inference_ModelInstanceGroup_SecondaryDevice_SecondaryDeviceKind = {
  /**
   * @@    .. cpp:enumerator:: SecondaryDeviceKind::KIND_NVDLA = 0
   * @@
   * @@       An NVDLA core. http://nvdla.org
   * @@       Currently KIND_NVDLA is only supported by the TensorRT backend.
   * @@
   */
  KIND_NVDLA: "KIND_NVDLA",
} as const;

/**
 * @@
 * @@  .. cpp:enum:: SecondaryDeviceKind
 * @@
 * @@     The kind of the secondary device.
 * @@
 */
export type _inference_ModelInstanceGroup_SecondaryDevice_SecondaryDeviceKind =
  /**
   * @@    .. cpp:enumerator:: SecondaryDeviceKind::KIND_NVDLA = 0
   * @@
   * @@       An NVDLA core. http://nvdla.org
   * @@       Currently KIND_NVDLA is only supported by the TensorRT backend.
   * @@
   */
  "KIND_NVDLA" | 0;

/**
 * @@
 * @@  .. cpp:enum:: SecondaryDeviceKind
 * @@
 * @@     The kind of the secondary device.
 * @@
 */
export type _inference_ModelInstanceGroup_SecondaryDevice_SecondaryDeviceKind__Output =
  (typeof _inference_ModelInstanceGroup_SecondaryDevice_SecondaryDeviceKind)[keyof typeof _inference_ModelInstanceGroup_SecondaryDevice_SecondaryDeviceKind];

/**
 * @@
 * @@.. cpp:var:: message ModelInstanceGroup
 * @@
 * @@   A group of one or more instances of a model and resources made
 * @@   available for those instances.
 * @@
 */
export interface ModelInstanceGroup {
  /**
   * @@  .. cpp:var:: string name
   * @@
   * @@     Optional name of this group of instances. If not specified the
   * @@     name will be formed as <model name>_<group number>. The name of
   * @@     individual instances will be further formed by a unique instance
   * @@     number and GPU index:
   * @@
   */
  name?: string;
  /**
   * @@  .. cpp:var:: int32 count
   * @@
   * @@     For a group assigned to GPU, the number of instances created for
   * @@     each GPU listed in 'gpus'. For a group assigned to CPU the number
   * @@     of instances created. Default is 1.
   */
  count?: number;
  /**
   * @@  .. cpp:var:: int32 gpus (repeated)
   * @@
   * @@     GPU(s) where instances should be available. For each GPU listed,
   * @@     'count' instances of the model will be available. Setting 'gpus'
   * @@     to empty (or not specifying at all) is equivalent to listing all
   * @@     available GPUs.
   * @@
   */
  gpus?: number[];
  /**
   * @@  .. cpp:var:: Kind kind
   * @@
   * @@     The kind of this instance group. Default is KIND_AUTO. If
   * @@     KIND_AUTO or KIND_GPU then both 'count' and 'gpu' are valid and
   * @@     may be specified. If KIND_CPU or KIND_MODEL only 'count' is valid
   * @@     and 'gpu' cannot be specified.
   * @@
   */
  kind?: _inference_ModelInstanceGroup_Kind;
  /**
   * @@  .. cpp:var:: string profile (repeated)
   * @@
   * @@     For TensorRT models containing multiple optimization profile, this
   * @@     parameter specifies a set of optimization profiles available to this
   * @@     instance group. The inference server will choose the optimal profile
   * @@     based on the shapes of the input tensors. This field should lie
   * @@     between 0 and <TotalNumberOfOptimizationProfilesInPlanModel> - 1
   * @@     and be specified only for TensorRT backend, otherwise an error will
   * @@     be generated. If not specified, the server will select the first
   * @@     optimization profile by default.
   * @@
   */
  profile?: string[];
  /**
   * @@  .. cpp:var:: ModelRateLimiter rate_limiter
   * @@
   * @@     The rate limiter specific settings to be associated with this
   * @@     instance group. Optional, if not specified no rate limiting
   * @@     will be applied to this instance group.
   * @@
   */
  rateLimiter?: _inference_ModelRateLimiter | null;
  /**
   * @@  .. cpp:var:: bool passive
   * @@
   * @@     Whether the instances within this instance group will be accepting
   * @@     inference requests from the scheduler. If true, the instances will
   * @@     not be added to the scheduler. Default value is false.
   * @@
   */
  passive?: boolean;
  /**
   * @@  .. cpp:var:: SecondaryDevice secondary_devices (repeated)
   * @@
   * @@     Secondary devices that are required by instances specified by this
   * @@     instance group. Optional.
   * @@
   */
  secondaryDevices?: _inference_ModelInstanceGroup_SecondaryDevice[];
  /**
   * @@  .. cpp:var:: string host_policy
   * @@
   * @@     The host policy name that the instance to be associated with.
   * @@     The default value is set to reflect the device kind of the instance,
   * @@     for instance, KIND_CPU is "cpu", KIND_MODEL is "model" and
   * @@     KIND_GPU is "gpu_<gpu_id>".
   * @@
   */
  hostPolicy?: string;
}

/**
 * @@
 * @@.. cpp:var:: message ModelInstanceGroup
 * @@
 * @@   A group of one or more instances of a model and resources made
 * @@   available for those instances.
 * @@
 */
export interface ModelInstanceGroup__Output {
  /**
   * @@  .. cpp:var:: string name
   * @@
   * @@     Optional name of this group of instances. If not specified the
   * @@     name will be formed as <model name>_<group number>. The name of
   * @@     individual instances will be further formed by a unique instance
   * @@     number and GPU index:
   * @@
   */
  name: string;
  /**
   * @@  .. cpp:var:: int32 count
   * @@
   * @@     For a group assigned to GPU, the number of instances created for
   * @@     each GPU listed in 'gpus'. For a group assigned to CPU the number
   * @@     of instances created. Default is 1.
   */
  count: number;
  /**
   * @@  .. cpp:var:: int32 gpus (repeated)
   * @@
   * @@     GPU(s) where instances should be available. For each GPU listed,
   * @@     'count' instances of the model will be available. Setting 'gpus'
   * @@     to empty (or not specifying at all) is equivalent to listing all
   * @@     available GPUs.
   * @@
   */
  gpus: number[];
  /**
   * @@  .. cpp:var:: Kind kind
   * @@
   * @@     The kind of this instance group. Default is KIND_AUTO. If
   * @@     KIND_AUTO or KIND_GPU then both 'count' and 'gpu' are valid and
   * @@     may be specified. If KIND_CPU or KIND_MODEL only 'count' is valid
   * @@     and 'gpu' cannot be specified.
   * @@
   */
  kind: _inference_ModelInstanceGroup_Kind__Output;
  /**
   * @@  .. cpp:var:: string profile (repeated)
   * @@
   * @@     For TensorRT models containing multiple optimization profile, this
   * @@     parameter specifies a set of optimization profiles available to this
   * @@     instance group. The inference server will choose the optimal profile
   * @@     based on the shapes of the input tensors. This field should lie
   * @@     between 0 and <TotalNumberOfOptimizationProfilesInPlanModel> - 1
   * @@     and be specified only for TensorRT backend, otherwise an error will
   * @@     be generated. If not specified, the server will select the first
   * @@     optimization profile by default.
   * @@
   */
  profile: string[];
  /**
   * @@  .. cpp:var:: ModelRateLimiter rate_limiter
   * @@
   * @@     The rate limiter specific settings to be associated with this
   * @@     instance group. Optional, if not specified no rate limiting
   * @@     will be applied to this instance group.
   * @@
   */
  rateLimiter: _inference_ModelRateLimiter__Output | null;
  /**
   * @@  .. cpp:var:: bool passive
   * @@
   * @@     Whether the instances within this instance group will be accepting
   * @@     inference requests from the scheduler. If true, the instances will
   * @@     not be added to the scheduler. Default value is false.
   * @@
   */
  passive: boolean;
  /**
   * @@  .. cpp:var:: SecondaryDevice secondary_devices (repeated)
   * @@
   * @@     Secondary devices that are required by instances specified by this
   * @@     instance group. Optional.
   * @@
   */
  secondaryDevices: _inference_ModelInstanceGroup_SecondaryDevice__Output[];
  /**
   * @@  .. cpp:var:: string host_policy
   * @@
   * @@     The host policy name that the instance to be associated with.
   * @@     The default value is set to reflect the device kind of the instance,
   * @@     for instance, KIND_CPU is "cpu", KIND_MODEL is "model" and
   * @@     KIND_GPU is "gpu_<gpu_id>".
   * @@
   */
  hostPolicy: string;
}
