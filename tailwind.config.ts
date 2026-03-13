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
          DEFAULT: "#0056D2", // Nodo Blue
          hover: "#0044A8",
          glow: "rgba(0, 86, 210, 0.3)",
        },
        secondary: {
          DEFAULT: "#FF4E25", // Aigocy Orange
          hover: "#E63E1A",
          glow: "rgba(255, 78, 37, 0.3)",
        },
        background: "#F1F1F1", // Aigocy Grey
        foreground: "#111111", // Aigocy Black
        card: "rgba(255, 255, 255, 0.7)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
