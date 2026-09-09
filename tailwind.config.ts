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
        // Warm-black editorial ground
        bg: "#0E0B0A",
        background: "#0E0B0A",
        surface: "#151010",
        ink: "#EFE7D9",
        muted: "#A9997F",
        faint: "#6E6152",
        line: "rgba(239,231,217,0.14)",
        // legacy aliases so pre-redesign pages still resolve during migration
        sand: "#A9997F",
        "sand-dim": "#6E6152",
        sky: "#A9997F",
        accent: "#EFE7D9",
        "mid-gray": "#A9997F",
        "light-gray": "#EFE7D9",
        "ink-soft": "#EFE7D9",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        serif: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
        sans: ["var(--font-body)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
