import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        display: ["Indie Flower"],
      },
      gridTemplateRows: {
        layout: "50px 1fr 50px",
      },
    },
  },
  plugins: [],
};
export default config;
