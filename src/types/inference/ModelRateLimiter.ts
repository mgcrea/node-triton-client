// Original file: proto/model_config.proto

/**
 * @@  .. cpp:var:: message Resource
 * @@
 * @@     The resource property.
 * @@
 */
export interface _inference_ModelRateLimiter_Resource {
  /**
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name associated with the resource.
   * @@
   */
  name?: string;
  /**
   * @@  .. cpp:var:: bool global
   * @@
   * @@     Whether or not the resource is global. If true then the resource
   * @@     is assumed to be shared among the devices otherwise specified
   * @@     count of the resource is assumed for each device associated
   * @@     with the instance.
   * @@
   */
  global?: boolean;
  /**
   * @@  .. cpp:var:: uint32 count
   * @@
   * @@     The number of resources required for the execution of the model
   * @@     instance.
   * @@
   */
  count?: number;
}

/**
 * @@  .. cpp:var:: message Resource
 * @@
 * @@     The resource property.
 * @@
 */
export interface _inference_ModelRateLimiter_Resource__Output {
  /**
   * @@  .. cpp:var:: string name
   * @@
   * @@     The name associated with the resource.
   * @@
   */
  name: string;
  /**
   * @@  .. cpp:var:: bool global
   * @@
   * @@     Whether or not the resource is global. If true then the resource
   * @@     is assumed to be shared among the devices otherwise specified
   * @@     count of the resource is assumed for each device associated
   * @@     with the instance.
   * @@
   */
  global: boolean;
  /**
   * @@  .. cpp:var:: uint32 count
   * @@
   * @@     The number of resources required for the execution of the model
   * @@     instance.
   * @@
   */
  count: number;
}

/**
 * @@
 * @@  .. cpp:var:: message ModelRateLimiter
 * @@
 * @@     The specifications required by the rate limiter to properly
 * @@     schedule the inference requests across the different models
 * @@     and their instances.
 * @@
 */
export interface ModelRateLimiter {
  /**
   * @@  .. cpp:var:: Resource resources (repeated)
   * @@
   * @@     The resources required to execute the request on a model instance.
   * @@     Resources are just names with a corresponding count. The execution
   * @@     of the instance will be blocked until the specified resources are
   * @@     available. By default an instance uses no rate-limiter resources.
   * @@
   */
  resources?: _inference_ModelRateLimiter_Resource[];
  /**
   * @@  .. cpp:var:: uint32 priority
   * @@
   * @@     The optional weighting value to be used for prioritizing across
   * @@     instances. An instance with priority 2 will be given 1/2 the
   * @@     number of scheduling chances as an instance_group with priority
   * @@     1. The default priority is 1. The priority of value 0 will be
   * @@     treated as priority 1.
   * @@
   */
  priority?: number;
}

/**
 * @@
 * @@  .. cpp:var:: message ModelRateLimiter
 * @@
 * @@     The specifications required by the rate limiter to properly
 * @@     schedule the inference requests across the different models
 * @@     and their instances.
 * @@
 */
export interface ModelRateLimiter__Output {
  /**
   * @@  .. cpp:var:: Resource resources (repeated)
   * @@
   * @@     The resources required to execute the request on a model instance.
   * @@     Resources are just names with a corresponding count. The execution
   * @@     of the instance will be blocked until the specified resources are
   * @@     available. By default an instance uses no rate-limiter resources.
   * @@
   */
  resources: _inference_ModelRateLimiter_Resource__Output[];
  /**
   * @@  .. cpp:var:: uint32 priority
   * @@
   * @@     The optional weighting value to be used for prioritizing across
   * @@     instances. An instance with priority 2 will be given 1/2 the
   * @@     number of scheduling chances as an instance_group with priority
   * @@     1. The default priority is 1. The priority of value 0 will be
   * @@     treated as priority 1.
   * @@
   */
  priority: number;
}
