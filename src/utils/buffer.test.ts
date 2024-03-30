import { describe, expect, it } from "vitest";
import { bufferToFloat32Array } from "./buffer"; // Adjust the import path as needed

describe("bufferToFloat32Array", () => {
  it("should return a Float32Array without realignment if byteOffset is a multiple of 4", () => {
    const buffer = Buffer.from(new ArrayBuffer(16), 0, 16); // Creating a buffer that aligns
    const float32Array = bufferToFloat32Array(buffer);
    expect(float32Array).toBeInstanceOf(Float32Array);
    expect(float32Array.byteOffset % 4).toBe(0);
    expect(float32Array.length).toBe(buffer.byteLength / 4);
  });

  it("should return a Float32Array with realignment if byteOffset is not a multiple of 4", () => {
    // Ensure the buffer's byteLength after byteOffset is a multiple of 4
    const misalignedByteLength = 16; // Choose a size that's a multiple of 4
    const buffer = new ArrayBuffer(misalignedByteLength + 1); // Adding 1 to create misalignment
    const view = new Uint8Array(buffer, 1, misalignedByteLength); // Starting at 1 creates the misalignment
    const float32Array = bufferToFloat32Array(
      Buffer.from(view.buffer, view.byteOffset, view.byteLength),
    );
    expect(float32Array).toBeInstanceOf(Float32Array);
    expect(float32Array.byteLength).toBe(misalignedByteLength); // Expect the aligned byte length
    expect(float32Array.length).toBe(misalignedByteLength / 4); // Ensure the length is as expected
  });

  it("converts the buffer content to Float32Array correctly", () => {
    const originalArray = new Float32Array([1.0, 0.5, -1.0, 2.5]);
    const buffer = Buffer.from(originalArray.buffer);
    const float32Array = bufferToFloat32Array(buffer);
    expect(float32Array).toEqual(originalArray);
  });

  it("handles empty buffers gracefully", () => {
    const buffer = Buffer.from(new ArrayBuffer(0));
    const float32Array = bufferToFloat32Array(buffer);
    expect(float32Array).toBeInstanceOf(Float32Array);
    expect(float32Array.length).toBe(0);
  });
});
