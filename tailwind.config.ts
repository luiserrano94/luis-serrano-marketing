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
        // Light premium palette — warm stone neutrals + near-black + gold
        background: "#FAFAF9",
        surface: "#FFFFFF",
        "surface-2": "#F5F5F4",
        ink: "#0C0A09",
        "ink-soft": "#292524",
        line: "#E7E5E4",
        accent: "#4D7C0F",
        "accent-deep": "#3F6212",
        "accent-soft": "#ECFCCB",
        "mid-gray": "#57534E",
        "light-gray": "#292524",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        geist: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        bebas: ["var(--font-bebas)", "Impact", "sans-serif"],
        poppins: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 3px rgba(12,10,9,0.04), 0 8px 24px -8px rgba(12,10,9,0.08)",
        lift: "0 2px 6px rgba(12,10,9,0.06), 0 18px 40px -12px rgba(12,10,9,0.14)",
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
