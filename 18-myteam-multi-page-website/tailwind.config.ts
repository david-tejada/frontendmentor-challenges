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
    backgroundImage: {
      "pattern-about-1": "url('/bg-pattern-about-1-mobile-nav-1.svg')",
      "pattern-about-2": "url('/bg-pattern-about-2-contact-1.svg')",
      "pattern-about-4": "url('/bg-pattern-about-4.svg')",
      "pattern-contact-2": "url('/bg-pattern-contact-2.svg')",
      "pattern-home-1": "url('/bg-pattern-home-1.svg')",
      "pattern-home-2": "url('/bg-pattern-home-2.svg')",
      "pattern-home-3": "url('/bg-pattern-home-3.svg')",
      "pattern-home-4": "url('/bg-pattern-home-4-about-3.svg')",
      "pattern-home-5": "url('/bg-pattern-home-5.svg')",
      "pattern-home-6": "url('/bg-pattern-home-6-about-5.svg')",
    },
  },
  plugins: [],
};
export default config;
