import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1d75d9", // AMZ Blue
          hover: "#155eb0",
          glow: "rgba(29, 117, 217, 0.3)",
        },
        secondary: {
          DEFAULT: "#001b3d", // AMZ Dark Navy
          hover: "#000f24",
          glow: "rgba(0, 27, 61, 0.3)",
        },
        accent: {
          DEFAULT: "#0dcaf0",
          hover: "#0bacce",
        },
        background: "#ffffff",
        foreground: "#333333",
        card: "#ffffff",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "primary-gradient": "linear-gradient(90deg, #1d75d9 0%, #0dcaf0 100%)",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
