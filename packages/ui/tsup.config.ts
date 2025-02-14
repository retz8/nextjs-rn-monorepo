import { defineConfig, Options } from "tsup";
import fs from "fs-extra";

export default defineConfig((options: Options) => [
  {
    entry: {
      index: "src/index.web.ts",
    },
    outDir: "dist/web",
    treeshake: true,
    splitting: true,
    banner: { js: '"use client"; import * as React from "react";' },
    format: ["cjs", "esm"],
    target: "es2018",
    dts: true,
    clean: true,
    external: ["react"],
    ...options,
    onSuccess: async () => {
      // Move CSS files to dist/css
      await fs.ensureDir("dist/css");
      await fs.remove("dist/css/index.css");
      await fs.copy("dist/web/index.css", "dist/css/index.css");
      await fs.remove("dist/web/index.css");
    },
  },
  {
    entry: {
      index: "src/index.native.ts",
    },
    outDir: "dist/native",
    treeshake: true,
    splitting: true,
    banner: { js: 'import * as React from "react";' },
    format: ["cjs", "esm"],
    target: "es2018",
    dts: true,
    clean: true,
    external: ["react-native"],
    ...options,
    onSuccess: async () => {
      // Move CSS files to dist/css
      await fs.ensureDir("dist/css");
      await fs.remove("dist/css/index.css");
      await fs.copy("dist/native/index.css", "dist/css/index.css");
      await fs.remove("dist/native/index.css");
    },
  },
]);
