import { formatWithOptions } from "node:util";

declare global {
  // eslint-disable-next-line no-var
  var d: (...args: unknown[]) => void;
}

export const log = (...args: unknown[]) =>
  console.log(formatWithOptions({ depth: 10, colors: true }, ...args));

export const d = (...args: unknown[]) =>
  console.log(
    `🔴 ${formatWithOptions({ depth: 10, colors: true }, args.length === 1 ? args[0] : args)}`,
  );

globalThis.d = d;
