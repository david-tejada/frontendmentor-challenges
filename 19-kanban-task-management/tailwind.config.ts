import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "body-md": ["0.75rem", { lineHeight: "1.25", fontWeight: "bold" }],
      "body-lg": ["0.8125rem", "1.7692"],
      "heading-sm": [
        "0.75rem",
        { lineHeight: "1.25", fontWeight: "bold", letterSpacing: "0.2em" },
      ],
      "heading-md": ["0.9375rem", { lineHeight: "1.2667", fontWeight: "bold" }],
      "heading-lg": ["1.125rem", { lineHeight: "1.2778", fontWeight: "bold" }],
      "heading-xl": ["1.5rem", { lineHeight: "1.25", fontWeight: "bold" }],
    },
  },
  plugins: [],
};
export default config;
