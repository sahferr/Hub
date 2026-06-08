/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#080c10",
        surface: "#0d1117",
        "surface-strong": "#161b22",
        accent: "#00e5a0",
        "accent-strong": "#00ffb2",
        "accent-alt": "#6e40f7",
        warning: "#f59e0b",
        text: "#e6edf3",
        muted: "#7d8590",
        dim: "#3d444d",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      maxWidth: {
        page: "1000px",
        hero: "900px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease both",
        "pulse-dot": "pulseDot 2s infinite",
      },
    },
  },
  plugins: [],
};
