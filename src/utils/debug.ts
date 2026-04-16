import { formatWithOptions } from "node:util";

export const log = (...args: unknown[]) =>
  console.log(formatWithOptions({ depth: 10, colors: true }, ...args));

export const d = (...args: unknown[]) =>
  console.log(
    `🔴 ${formatWithOptions({ depth: 10, colors: true }, args.length === 1 ? args[0] : args)}`,
  );
