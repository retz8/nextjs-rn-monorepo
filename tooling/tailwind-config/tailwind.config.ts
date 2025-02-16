import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import typographyPlugin from "@tailwindcss/typography";

// each package is responsible for its own content
const config: Omit<Config, "content"> = {
  theme: {},
  plugins: [animatePlugin, typographyPlugin],
};

export default config;
