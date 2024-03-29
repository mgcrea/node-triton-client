#!/usr/bin/env node

import { createClient } from "src";
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

const client = createClient(URL);

const main = async () => {
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
      const [name = "text_detection", version = "1"] = args as [string, string];
      const result = await client.modelMetadata({ name, version });
      log(result);
      break;
    }
    default:
      log(help);
  }
};

main();
