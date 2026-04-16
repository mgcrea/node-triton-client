#!/usr/bin/env node

import { createClient } from "src/client";
import { log } from "src/utils";

const name = "triton-client";
const [action = "help", ...args] = process.argv.slice(2);

const actions = {
  serverLive: {
    description: "Check if the server is live",
    example: "serverLive",
  },
  serverReady: {
    description: "Check if the server is ready",
    example: "serverReady",
  },
  repositoryIndex: {
    description: "List all models in the repository",
    example: "repositoryIndex",
  },
  modelMetadata: {
    description: "Get metadata for a model",
    example: "modelMetadata text_detection 1",
  },
};

const help = `
Usage: ${name} <action> [args]
${Object.entries(actions)
  .map(
    ([action, { description, example }]) => `\n  ${action}: ${description}
    Example: ${name} ${example}`,
  )
  .join("\n")}
`;

const URL = process.env["URL"] || "localhost:8001";

const main = async () => {
  const client = createClient(URL);
  try {
    switch (action as keyof typeof actions) {
      case "serverLive": {
        const result = await client.serverLive({});
        log(result);
        break;
      }
      case "serverReady": {
        const result = await client.serverReady({});
        log(result);
        break;
      }
      case "repositoryIndex": {
        const result = await client.repositoryIndex({});
        log(result);
        break;
      }
      case "modelMetadata": {
        const [name = "text_detection", version = "1"] = args;
        const result = await client.modelMetadata({ name, version });
        log(result);
        break;
      }
      default:
        log(help);
    }
  } finally {
    client.close();
  }
};

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
