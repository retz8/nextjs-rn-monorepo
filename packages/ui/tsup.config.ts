import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => [
  {
    entry: {
      index: "src/index.web.ts",
    },
    banner: {
      js: "'use client'",
    },
    format: ["cjs", "esm"],
    dts: true,
    outDir: "dist/web",
    clean: true,
    ...options,
  },
  {
    entry: {
      index: "src/index.native.ts",
    },
    format: ["cjs", "esm"],
    dts: true,
    outDir: "dist/native",
    clean: true,
    ...options,
  },
]);
