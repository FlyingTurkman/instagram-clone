import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "background": "#060606",
        "background-secondary": "#1a1a1a",
        "primary-foreground": "#fff",
        "secondary-foreground": "#333",
        "border": "#ddd",
        "background-hover": "#1a1a1a"
      }
    },
  },
  plugins: [],
};
export default config;
