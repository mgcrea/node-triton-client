import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { d, log } from "./debug";

describe("log", () => {
  let consoleSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleSpy = vi.spyOn(console, "log").mockImplementation(() => undefined);
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("calls console.log once", () => {
    log("hello");
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it("formats multiple arguments into the output", () => {
    log("hello", 42);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    const output = consoleSpy.mock.calls[0]![0] as string;
    expect(output).toContain("hello");
    expect(output).toContain("42");
  });

  it("handles a plain object argument", () => {
    log({ key: "value" });
    const output = consoleSpy.mock.calls[0]![0] as string;
    expect(output).toContain("key");
    expect(output).toContain("value");
  });
});

describe("d", () => {
  let consoleSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleSpy = vi.spyOn(console, "log").mockImplementation(() => undefined);
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("calls console.log once", () => {
    d("test");
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it("prefixes output with the red dot emoji", () => {
    d("something");
    const output = consoleSpy.mock.calls[0]![0] as string;
    expect(output).toMatch(/^🔴/);
  });

  it("with a single argument does not wrap it in an array", () => {
    d("onlyone");
    const output = consoleSpy.mock.calls[0]![0] as string;
    expect(output).toContain("onlyone");
    // should NOT include array bracket notation
    expect(output).not.toContain("[ 'onlyone' ]");
  });

  it("with multiple arguments includes all values", () => {
    d("first", "second");
    const output = consoleSpy.mock.calls[0]![0] as string;
    expect(output).toContain("first");
    expect(output).toContain("second");
  });
});
