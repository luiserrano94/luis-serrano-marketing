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
        // Editorial palette — warm cream, sun-baked neutrals, olive + terracotta
        background: "#FBF9F6",
        surface: "#FFFFFF",
        "surface-2": "#F4EFE8",
        ink: "#1A1614",
        "ink-soft": "#3D362F",
        line: "#E5DDD2",
        accent: "#4D7C0F",
        "accent-deep": "#3F6212",
        "accent-soft": "#ECFCCB",
        terracotta: "#C2410C",
        "terracotta-soft": "#FFEDD5",
        sky: "#7FA8C9",
        "mid-gray": "#6B6259",
        "light-gray": "#3D362F",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 1px 3px rgba(26,22,20,0.04), 0 8px 24px -8px rgba(26,22,20,0.08)",
        lift: "0 2px 6px rgba(26,22,20,0.06), 0 18px 40px -12px rgba(26,22,20,0.16)",
        editorial: "0 30px 70px -24px rgba(26,22,20,0.28)",
      },
      animation: {
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        float: "float 3s ease-in-out infinite",
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
      },
    },
  },
  plugins: [],
};

export default config;
