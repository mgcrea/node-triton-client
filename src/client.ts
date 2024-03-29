import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import type { ProtoGrpcType } from "src/types/grpc_service";
import "src/utils/debug";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROTO_DIR = resolve(__dirname, "..", "proto");

const loaderDefaults: protoLoader.Options = {
  keepCase: false,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

export const createClient = (
  url: string,
  loaderOptions: protoLoader.Options = {},
  credentials: grpc.ChannelCredentials = grpc.credentials.createInsecure(),
) => {
  const servicePackageDefinition = protoLoader.loadSync(join(PROTO_DIR, "grpc_service.proto"), {
    ...loaderDefaults,
    ...loaderOptions,
  });

  const proto = grpc.loadPackageDefinition(servicePackageDefinition) as unknown as ProtoGrpcType;

  const client = new proto.inference.GRPCInferenceService(url, credentials);

  return Object.assign(client, {
    close: promisify(client.close).bind(client),
    cudaSharedMemoryRegister: promisify(client.cudaSharedMemoryRegister).bind(client),
    cudaSharedMemoryStatus: promisify(client.cudaSharedMemoryStatus).bind(client),
    cudaSharedMemoryUnregister: promisify(client.cudaSharedMemoryUnregister).bind(client),
    logSettings: promisify(client.logSettings).bind(client),
    modelConfig: promisify(client.modelConfig).bind(client),
    modelInfer: promisify(client.modelInfer).bind(client),
    modelMetadata: promisify(client.modelMetadata).bind(client),
    modelReady: promisify(client.modelReady).bind(client),
    modelStatistics: promisify(client.modelStatistics).bind(client),
    repositoryIndex: promisify(client.repositoryIndex).bind(client),
    repositoryModelLoad: promisify(client.repositoryModelLoad).bind(client),
    repositoryModelUnload: promisify(client.repositoryModelUnload).bind(client),
    serverLive: promisify(client.serverLive).bind(client),
    serverMetadata: promisify(client.serverMetadata).bind(client),
    serverReady: promisify(client.serverReady).bind(client),
    systemSharedMemoryRegister: promisify(client.systemSharedMemoryRegister).bind(client),
    systemSharedMemoryStatus: promisify(client.systemSharedMemoryStatus).bind(client),
    systemSharedMemoryUnregister: promisify(client.systemSharedMemoryUnregister).bind(client),
    traceSetting: promisify(client.traceSetting).bind(client),
  });
};
