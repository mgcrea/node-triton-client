// Original file: proto/model_config.proto

export interface _inference_ModelRepositoryAgents_Agent {
  name?: string;
  parameters?: { [key: string]: string };
}

export interface _inference_ModelRepositoryAgents_Agent__Output {
  name: string;
  parameters: { [key: string]: string };
}

export interface ModelRepositoryAgents {
  agents?: _inference_ModelRepositoryAgents_Agent[];
}

export interface ModelRepositoryAgents__Output {
  agents: _inference_ModelRepositoryAgents_Agent__Output[];
}
