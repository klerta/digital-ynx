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
        brand: {
          DEFAULT: "#6D071A",
          darker: "#5e0717"
        }
      }
    },
    boxShadow: {
      card: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
    }
  },
  plugins: [],
};
export default config;
