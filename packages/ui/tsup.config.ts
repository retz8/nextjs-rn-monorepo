import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => [
  {
    entry: ["src/**/index.ts"],
    banner: {
      js: '"use client";',
    },
    format: ["cjs", "esm"],
    target: "es2018",
    dts: true,
    clean: true,
    external: ["react"],
    ...options,
  },
]);
