import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts", "src/bin/cli.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  hash: false,
});
