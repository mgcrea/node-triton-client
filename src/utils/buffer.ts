export const bufferToFloat32Array = (buf: Buffer): Float32Array => {
  // Check if the byteOffset is already a multiple of 4
  if (buf.byteOffset % 4 === 0) {
    return new Float32Array(buf.buffer, buf.byteOffset, buf.byteLength / 4);
  } else {
    // If not aligned, create a new ArrayBuffer that is correctly aligned
    // This copies the buffer data to a new ArrayBuffer
    const alignedBuffer = new ArrayBuffer(buf.byteLength);
    const uint8View = new Uint8Array(alignedBuffer);
    uint8View.set(new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength));
    return new Float32Array(alignedBuffer);
  }
};
