import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

// These are hoisted before any imports — cli.ts reads process.argv at module level,
// so we must stub globals before each dynamic import.
vi.mock("src/client");
vi.mock("src/utils");

describe("cli", () => {
  let mockClient: {
    serverLive: ReturnType<typeof vi.fn>;
    serverReady: ReturnType<typeof vi.fn>;
    repositoryIndex: ReturnType<typeof vi.fn>;
    modelMetadata: ReturnType<typeof vi.fn>;
    close: ReturnType<typeof vi.fn>;
  };

  beforeEach(() => {
    // Clear the module cache so cli.ts re-executes (re-reads process.argv) on each import.
    vi.resetModules();

    mockClient = {
      serverLive: vi.fn().mockResolvedValue({ live: true }),
      serverReady: vi.fn().mockResolvedValue({ ready: true }),
      repositoryIndex: vi.fn().mockResolvedValue({ models: [] }),
      modelMetadata: vi.fn().mockResolvedValue({ name: "my_model", versions: ["1"] }),
      close: vi.fn().mockResolvedValue(undefined),
    };
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  async function runCli(argv: string[], env: Record<string, string> = {}) {
    // Configure the mocked createClient to return our mock client.
    const { createClient } = await import("src/client");
    vi.mocked(createClient).mockReturnValue(
      mockClient as unknown as ReturnType<typeof createClient>,
    );

    vi.stubGlobal("process", {
      ...process,
      argv,
      env: { ...process.env, ...env },
    });

    // Importing cli.ts triggers main() — wait for async operations to settle.
    await import("src/bin/cli");
    await vi.waitFor(() => {
      expect(mockClient.close).toHaveBeenCalled();
    });
  }

  test("serverLive command calls client.serverLive and closes client", async () => {
    await runCli(["node", "cli", "serverLive"]);

    expect(mockClient.serverLive).toHaveBeenCalledWith({});
    expect(mockClient.close).toHaveBeenCalledTimes(1);
  });

  test("serverReady command calls client.serverReady and closes client", async () => {
    await runCli(["node", "cli", "serverReady"]);

    expect(mockClient.serverReady).toHaveBeenCalledWith({});
    expect(mockClient.close).toHaveBeenCalledTimes(1);
  });

  test("repositoryIndex command calls client.repositoryIndex and closes client", async () => {
    await runCli(["node", "cli", "repositoryIndex"]);

    expect(mockClient.repositoryIndex).toHaveBeenCalledWith({});
    expect(mockClient.close).toHaveBeenCalledTimes(1);
  });

  test("modelMetadata command with explicit name and version", async () => {
    await runCli(["node", "cli", "modelMetadata", "my_model", "2"]);

    expect(mockClient.modelMetadata).toHaveBeenCalledWith({ name: "my_model", version: "2" });
    expect(mockClient.close).toHaveBeenCalledTimes(1);
  });

  test("modelMetadata command uses default name and version when omitted", async () => {
    await runCli(["node", "cli", "modelMetadata"]);

    expect(mockClient.modelMetadata).toHaveBeenCalledWith({
      name: "text_detection",
      version: "1",
    });
  });

  test("unknown action falls through to help (no client method called)", async () => {
    const { log } = await import("src/utils");
    const { createClient } = await import("src/client");
    vi.mocked(createClient).mockReturnValue(
      mockClient as unknown as ReturnType<typeof createClient>,
    );

    vi.stubGlobal("process", { ...process, argv: ["node", "cli"], env: process.env });

    await import("src/bin/cli");
    await vi.waitFor(() => {
      expect(mockClient.close).toHaveBeenCalled();
    });

    expect(mockClient.serverLive).not.toHaveBeenCalled();
    expect(mockClient.serverReady).not.toHaveBeenCalled();
    expect(mockClient.repositoryIndex).not.toHaveBeenCalled();
    expect(mockClient.modelMetadata).not.toHaveBeenCalled();
    // log should have been called with the help string
    expect(vi.mocked(log)).toHaveBeenCalled();
  });

  test("uses URL from environment variable", async () => {
    const { createClient } = await import("src/client");
    vi.mocked(createClient).mockReturnValue(
      mockClient as unknown as ReturnType<typeof createClient>,
    );

    vi.stubGlobal("process", {
      ...process,
      argv: ["node", "cli", "serverLive"],
      env: { ...process.env, URL: "myhost:9000" },
    });

    await import("src/bin/cli");
    await vi.waitFor(() => {
      expect(mockClient.close).toHaveBeenCalled();
    });

    expect(createClient).toHaveBeenCalledWith("myhost:9000");
  });

  test("error path: logs error message to stderr when client method rejects", async () => {
    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => undefined);
    const exitSpy = vi.spyOn(process, "exit").mockImplementation((_code) => undefined as never);

    mockClient.serverLive.mockRejectedValue(new Error("connection refused"));

    const { createClient } = await import("src/client");
    vi.mocked(createClient).mockReturnValue(
      mockClient as unknown as ReturnType<typeof createClient>,
    );

    vi.stubGlobal("process", {
      ...process,
      argv: ["node", "cli", "serverLive"],
      env: process.env,
      exit: exitSpy,
    });

    await import("src/bin/cli");
    await vi.waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalled();
    });

    expect(consoleErrorSpy).toHaveBeenCalledWith("connection refused");
    expect(exitSpy).toHaveBeenCalledWith(1);

    consoleErrorSpy.mockRestore();
    exitSpy.mockRestore();
  });
});
