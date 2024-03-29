// Original file: proto/model_config.proto

// Original file: proto/model_config.proto

export const _inference_BatchOutput_Kind = {
  BATCH_SCATTER_WITH_INPUT_SHAPE: "BATCH_SCATTER_WITH_INPUT_SHAPE",
} as const;

export type _inference_BatchOutput_Kind = "BATCH_SCATTER_WITH_INPUT_SHAPE" | 0;

export type _inference_BatchOutput_Kind__Output =
  (typeof _inference_BatchOutput_Kind)[keyof typeof _inference_BatchOutput_Kind];

export interface BatchOutput {
  targetName?: string[];
  kind?: _inference_BatchOutput_Kind;
  sourceInput?: string[];
}

export interface BatchOutput__Output {
  targetName: string[];
  kind: _inference_BatchOutput_Kind__Output;
  sourceInput: string[];
}
