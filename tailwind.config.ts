import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f0f7f1",
          100: "#dceade",
          200: "#b8d5bd",
          300: "#8ab994",
          400: "#5d9a6a",
          500: "#3d7d4e",
          600: "#2d633b",
          700: "#244f30",
          800: "#1e3f27",
          900: "#1a3522",
          950: "#0d1e13",
        },
        alabaster: {
          50: "#fafaf8",
          100: "#f5f4ef",
          200: "#ede9e0",
          300: "#dfd8cb",
          400: "#cfc4ae",
          500: "#c1af95",
          600: "#b09a7e",
          700: "#937d65",
          800: "#796755",
          900: "#645548",
          950: "#342c25",
        },
        linen: {
          50: "#fdfcf9",
          100: "#f8f5ed",
          200: "#f0e9d8",
          300: "#e5d8bc",
          400: "#d8c29c",
          500: "#ccad80",
          600: "#be9667",
          700: "#9e7a52",
          800: "#816447",
          900: "#6a533c",
          950: "#382a1e",
        },
        brass: {
          50: "#fdf9ef",
          100: "#f9f0d4",
          200: "#f2dea6",
          300: "#eac96e",
          400: "#e3b544",
          500: "#d99e2b",
          600: "#c07b1f",
          700: "#a05b1c",
          800: "#83481e",
          900: "#6c3b1c",
          950: "#3e1d0c",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
