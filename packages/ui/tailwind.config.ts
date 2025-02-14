import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const uiConfig: Pick<Config, "prefix" | "presets" | "content"> = {
  prefix: "ui-",
  presets: [sharedConfig, require("nativewind/preset")],
  content: ["./src/**/*.{js,ts,jsx,tsx,css}"],
};

export default uiConfig;
