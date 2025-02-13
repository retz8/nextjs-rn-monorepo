/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        secondary: "#64748b",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
