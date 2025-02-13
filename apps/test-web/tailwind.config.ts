import type { Config } from "tailwindcss";
import uiConfig from "@repo/ui/tailwind-preset";

export default {
  presets: [uiConfig],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@repo/ui/dist/web/index.css",
  ],
  theme: {},
  plugins: [],
} satisfies Config;
