import grpc from "@grpc/grpc-js";
import { describe, expect, test } from "vitest";

import { createClient } from "./client";

const EXPECTED_METHODS = [
  "close",
  "cudaSharedMemoryRegister",
  "cudaSharedMemoryStatus",
  "cudaSharedMemoryUnregister",
  "logSettings",
  "modelConfig",
  "modelInfer",
  "modelMetadata",
  "modelReady",
  "modelStatistics",
  "repositoryIndex",
  "repositoryModelLoad",
  "repositoryModelUnload",
  "serverLive",
  "serverMetadata",
  "serverReady",
  "systemSharedMemoryRegister",
  "systemSharedMemoryStatus",
  "systemSharedMemoryUnregister",
  "traceSetting",
] as const;

describe("client", () => {
  test("can create client", async () => {
    const client = await createClient("localhost:8001");
    expect(client).toBeDefined();
  });

  test("throws an error with an empty url", async () => {
    expect(() => createClient("")).toThrowError();
  });

  test("returned client exposes all expected promisified methods", () => {
    const client = createClient("localhost:8001");
    for (const method of EXPECTED_METHODS) {
      expect(typeof client[method], `${method} should be a function`).toBe("function");
    }
  });

  test("accepts custom loaderOptions without throwing", () => {
    expect(() => createClient("localhost:8001", { keepCase: true })).not.toThrow();
  });

  test("accepts explicit insecure credentials without throwing", () => {
    const credentials = grpc.credentials.createInsecure();
    expect(() => createClient("localhost:8001", {}, credentials)).not.toThrow();
  });
});
