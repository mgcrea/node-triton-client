// Original file: proto/model_config.proto

import type { Long } from "@grpc/proto-loader";

/**
 * @@  .. cpp:var:: message All
 * @@
 * @@     Serve all versions of the model.
 * @@
 */
export interface _inference_ModelVersionPolicy_All {}

/**
 * @@  .. cpp:var:: message All
 * @@
 * @@     Serve all versions of the model.
 * @@
 */
export interface _inference_ModelVersionPolicy_All__Output {}

/**
 * @@  .. cpp:var:: message Latest
 * @@
 * @@     Serve only the latest version(s) of a model. This is
 * @@     the default policy.
 * @@
 */
export interface _inference_ModelVersionPolicy_Latest {
  /**
   * @@    .. cpp:var:: uint32 num_versions
   * @@
   * @@       Serve only the 'num_versions' highest-numbered versions. T
   * @@       The default value of 'num_versions' is 1, indicating that by
   * @@       default only the single highest-number version of a
   * @@       model will be served.
   * @@
   */
  numVersions?: number;
}

/**
 * @@  .. cpp:var:: message Latest
 * @@
 * @@     Serve only the latest version(s) of a model. This is
 * @@     the default policy.
 * @@
 */
export interface _inference_ModelVersionPolicy_Latest__Output {
  /**
   * @@    .. cpp:var:: uint32 num_versions
   * @@
   * @@       Serve only the 'num_versions' highest-numbered versions. T
   * @@       The default value of 'num_versions' is 1, indicating that by
   * @@       default only the single highest-number version of a
   * @@       model will be served.
   * @@
   */
  numVersions: number;
}

/**
 * @@  .. cpp:var:: message Specific
 * @@
 * @@     Serve only specific versions of the model.
 * @@
 */
export interface _inference_ModelVersionPolicy_Specific {
  /**
   * @@    .. cpp:var:: int64 versions (repeated)
   * @@
   * @@       The specific versions of the model that will be served.
   * @@
   */
  versions?: (number | string | Long)[];
}

/**
 * @@  .. cpp:var:: message Specific
 * @@
 * @@     Serve only specific versions of the model.
 * @@
 */
export interface _inference_ModelVersionPolicy_Specific__Output {
  /**
   * @@    .. cpp:var:: int64 versions (repeated)
   * @@
   * @@       The specific versions of the model that will be served.
   * @@
   */
  versions: string[];
}

/**
 * @@
 * @@.. cpp:var:: message ModelVersionPolicy
 * @@
 * @@   Policy indicating which versions of a model should be made
 * @@   available by the inference server.
 * @@
 */
export interface ModelVersionPolicy {
  /**
   * @@    .. cpp:var:: Latest latest
   * @@
   * @@       Serve only latest version(s) of the model.
   * @@
   */
  latest?: _inference_ModelVersionPolicy_Latest | null;
  /**
   * @@    .. cpp:var:: All all
   * @@
   * @@       Serve all versions of the model.
   * @@
   */
  all?: _inference_ModelVersionPolicy_All | null;
  /**
   * @@    .. cpp:var:: Specific specific
   * @@
   * @@       Serve only specific version(s) of the model.
   * @@
   */
  specific?: _inference_ModelVersionPolicy_Specific | null;
  /**
   * @@  .. cpp:var:: oneof policy_choice
   * @@
   * @@     Each model must implement only a single version policy. The
   * @@     default policy is 'Latest'.
   * @@
   */
  policyChoice?: "latest" | "all" | "specific";
}

/**
 * @@
 * @@.. cpp:var:: message ModelVersionPolicy
 * @@
 * @@   Policy indicating which versions of a model should be made
 * @@   available by the inference server.
 * @@
 */
export interface ModelVersionPolicy__Output {
  /**
   * @@    .. cpp:var:: Latest latest
   * @@
   * @@       Serve only latest version(s) of the model.
   * @@
   */
  latest?: _inference_ModelVersionPolicy_Latest__Output | null;
  /**
   * @@    .. cpp:var:: All all
   * @@
   * @@       Serve all versions of the model.
   * @@
   */
  all?: _inference_ModelVersionPolicy_All__Output | null;
  /**
   * @@    .. cpp:var:: Specific specific
   * @@
   * @@       Serve only specific version(s) of the model.
   * @@
   */
  specific?: _inference_ModelVersionPolicy_Specific__Output | null;
  /**
   * @@  .. cpp:var:: oneof policy_choice
   * @@
   * @@     Each model must implement only a single version policy. The
   * @@     default policy is 'Latest'.
   * @@
   */
  policyChoice: "latest" | "all" | "specific";
}
