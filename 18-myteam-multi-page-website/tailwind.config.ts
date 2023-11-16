import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "hsl(0deg 0% 100%)",
      black: "hsl(0deg 0% 0%)",
      coral: "hsl(0deg 87% 73%)",
      blue: "hsl(179deg 42% 63%)",
      green: {
        600: "hsl(186deg 98% 17%)",
        700: "hsl(186deg 100% 14%)",
        800: "hsl(186deg 96% 10%)",
        900: "hsl(186deg 100% 8%)",
      },
    },
  },
  plugins: [],
};
export default config;
