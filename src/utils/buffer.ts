/**
 * Converts a buffer containing byte-encoded floating point values into a Float32Array.
 * If the byteOffset of the buffer is not a multiple of 4, it creates a new ArrayBuffer
 * with correct alignment and copies the buffer data to it.
 * @param buf Buffer containing byte-encoded floating point values.
 * @returns Float32Array containing the decoded floating point values.
 */
export const bufferToFloat32Array = (buf: Buffer): Float32Array => {
  // Check if the byteOffset is already a multiple of 4
  if (buf.byteOffset % 4 === 0) {
    // If aligned, create a Float32Array directly from the buffer
    return new Float32Array(buf.buffer, buf.byteOffset, buf.byteLength / 4);
  } else {
    // If not aligned, create a new ArrayBuffer that is correctly aligned
    // This copies the buffer data to a new ArrayBuffer
    const alignedBuffer = new ArrayBuffer(buf.byteLength);
    const uint8View = new Uint8Array(alignedBuffer);
    uint8View.set(new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength));
    // Create a Float32Array from the aligned ArrayBuffer
    return new Float32Array(alignedBuffer);
  }
};

/**
 * Converts a buffer containing byte-encoded strings into an array of strings.
 * Each string in the buffer is prefixed by a 4-byte length indicating its size.
 * @param buffer Buffer containing byte-encoded strings.
 * @returns Array of strings decoded from the buffer.
 */
export const bytesBufferToStringArray = (buffer: Buffer): string[] => {
  // Initialize an array to store the decoded strings
  const entries = [];
  // Initialize index pointer
  let i = 0;
  // Loop through the buffer until the end
  while (i < buffer.length) {
    // Read the length of the current string (4 bytes, little-endian)
    const length = buffer.readUInt32LE(i);
    // Extract the string from the buffer and convert it to a string
    const value = buffer.subarray(i + 4, i + 4 + length).toString();
    // Push the decoded string to the array
    entries.push(value);
    // Move the index pointer to the start of the next string
    i += 4 + length;
  }
  // Return the array of decoded strings
  return entries;
};
