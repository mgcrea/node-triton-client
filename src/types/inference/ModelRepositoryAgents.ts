// Original file: proto/model_config.proto

/**
 * @@
 * @@  .. cpp:var:: message Agent
 * @@
 * @@     A repository agent that should be invoked for the specified
 * @@     repository actions for this model.
 * @@
 */
export interface _inference_ModelRepositoryAgents_Agent {
  /**
   * @@    .. cpp:var:: string name
   * @@
   * @@       The name of the agent.
   * @@
   */
  name?: string;
  /**
   * @@    .. cpp:var:: map<string, string> parameters
   * @@
   * @@       The parameters for the agent.
   * @@
   */
  parameters?: { [key: string]: string };
}

/**
 * @@
 * @@  .. cpp:var:: message Agent
 * @@
 * @@     A repository agent that should be invoked for the specified
 * @@     repository actions for this model.
 * @@
 */
export interface _inference_ModelRepositoryAgents_Agent__Output {
  /**
   * @@    .. cpp:var:: string name
   * @@
   * @@       The name of the agent.
   * @@
   */
  name: string;
  /**
   * @@    .. cpp:var:: map<string, string> parameters
   * @@
   * @@       The parameters for the agent.
   * @@
   */
  parameters: { [key: string]: string };
}

/**
 * @@
 * @@.. cpp:var:: message ModelRepositoryAgents
 * @@
 * @@   The repository agents for the model.
 * @@
 */
export interface ModelRepositoryAgents {
  /**
   * @@
   * @@  .. cpp:var:: Agent agents (repeated)
   * @@
   * @@     The ordered list of agents for the model. These agents will be
   * @@     invoked in order to respond to repository actions occurring for the
   * @@     model.
   * @@
   */
  agents?: _inference_ModelRepositoryAgents_Agent[];
}

/**
 * @@
 * @@.. cpp:var:: message ModelRepositoryAgents
 * @@
 * @@   The repository agents for the model.
 * @@
 */
export interface ModelRepositoryAgents__Output {
  /**
   * @@
   * @@  .. cpp:var:: Agent agents (repeated)
   * @@
   * @@     The ordered list of agents for the model. These agents will be
   * @@     invoked in order to respond to repository actions occurring for the
   * @@     model.
   * @@
   */
  agents: _inference_ModelRepositoryAgents_Agent__Output[];
}
