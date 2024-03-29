import { describe, expect, test } from "vitest";
import { createClient } from "./client";

describe("client", () => {
  test("can create client", async () => {
    const client = await createClient("localhost:8001");
    expect(client).toBeDefined();
    // const isLive = await client.serverLive({});
    // expect(isLive).toEqual({ live: true });
  });
  test("throw an error with an empty url", async () => {
    expect(() => createClient("")).toThrowError();
  });
});
