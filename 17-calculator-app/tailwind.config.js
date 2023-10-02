/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    colors: {
      background: {
        main: "hsl(var(--color-background-main) / <alpha-value>)",
        input: "hsl(var(--color-background-input) / <alpha-value>)",
        screen: "hsl(var(--color-background-screen) / <alpha-value>)",
        key: "hsl(var(--color-background-key) / <alpha-value>)",
      },
      shadow: {
        key: "hsl(var(--color-shadow-key) / <alpha-value>)",
      },
      content: {
        DEFAULT: "hsl(var(--color-content) / <alpha-value>)",
        key: "hsl(var(--color-content-key) / <alpha-value>)",
      },
      accent: "hsl(var(--color-accent) / <alpha-value>)",
      white: "hsl(0deg 0% 100%)",
    },
    fontFamily: {
      sans: ["League Spartan", "sans-serif"],
    },
    extend: {
      screens: {
        "forced-colors": { raw: "(forced-colors: active)" },
      },
    },
  },
  plugins: [],
};
