import * as module from "src/index";
import { describe, expect, test } from "vitest";

describe("module", () => {
  test("exports", async () => {
    expect(Object.keys(module)).toMatchInlineSnapshot(`
      [
        "createClient",
        "bufferToFloat32Array",
        "bytesBufferToStringArray",
      ]
    `);
  });
});
