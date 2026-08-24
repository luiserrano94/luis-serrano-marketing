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
        // Burgundy ground + sand, sky blue, white
        background: "#60212E",
        "background-deep": "#4A1923",
        surface: "#6E2836",
        "surface-2": "#7C2F3E",
        ink: "#FFFFFF",
        sand: "#D8D1BD",
        "sand-dim": "#B8AF98",
        sky: "#69ACC2",
        accent: "#69ACC2",
        line: "#8A4453",
        // legacy aliases kept so existing markup stays readable on burgundy
        "mid-gray": "#D8D1BD",
        "light-gray": "#EDE8DC",
        "ink-soft": "#F3EFE6",
        "accent-soft": "#9BC8D8",
        "accent-deep": "#4E8FA6",
        terracotta: "#69ACC2",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 1px 3px rgba(0,0,0,0.16), 0 8px 24px -8px rgba(0,0,0,0.28)",
        lift: "0 2px 6px rgba(0,0,0,0.20), 0 18px 40px -12px rgba(0,0,0,0.40)",
        editorial: "0 30px 70px -24px rgba(0,0,0,0.55)",
      },
      animation: {
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        float: "float 3s ease-in-out infinite",
        "ken-burns": "ken-burns 12s ease-out both",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "100%": { transform: "scale(1.7)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1.06)" },
          "100%": { transform: "scale(1.16)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
