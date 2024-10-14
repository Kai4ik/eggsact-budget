import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    colors: {
      primary: {
        DEFAULT: "#805AD5",
        dark: "#6B46C1",
        light: "#662EE3",
      },

      danger: {
        DEFAULT: "#E53E3E",
        dark: "#C53030",
        light: "#F32A2A",
      },

      zinc: {
        200: "#f4f4f5",
      },

      blue: {
        600: "#2563eb",
      },

      slate: {
        500: "#64748b",
      },

      neutral: {
        800: "#262626",
      },

      gray: {
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        600: "#4b5563",
      },
      white: "#fff",
      black: "#000",
      transparent: "transparent",
      current: "currentColor",
      disabled: "#CCCCCC",
    },
    extend: {
      fontFamily: {
        rubik: ["var(--font-rubik)"],
        ubuntu: ["var(--font-ubuntu)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
export default config;
