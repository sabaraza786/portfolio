/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6366F1",
          50: "#eef0fd",
          100: "#dde1fb",
          200: "#b8bff7",
          300: "#939ef3",
          400: "#7c85f2",
          500: "#6366F1",
          600: "#4548d8",
          700: "#3639ab",
          800: "#282a7e",
          900: "#1a1c52",
        },
        secondary: {
          DEFAULT: "#8B5CF6",
          400: "#a481f8",
          500: "#8B5CF6",
          600: "#7238f3",
        },
        accent: {
          DEFAULT: "#06B6D4",
          400: "#22d3ee",
          500: "#06B6D4",
          600: "#0891b2",
        },
        dark: {
          DEFAULT: "#0F172A",
          soft: "#141B2E",
          card: "#161F35",
          border: "#22304d",
        },
        light: {
          DEFAULT: "#FFFFFF",
          soft: "#F6F7FB",
          card: "#FFFFFF",
          border: "#E7E9F3",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(to right, rgba(15,23,42,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.045) 1px, transparent 1px)",
        "gradient-brand": "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #06B6D4 100%)",
        "gradient-radial-glow":
          "radial-gradient(circle at center, rgba(99,102,241,0.35) 0%, rgba(99,102,241,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(99, 102, 241, 0.25)",
        "glow-cyan": "0 0 40px rgba(6, 182, 212, 0.25)",
        soft: "0 8px 30px rgba(15, 23, 42, 0.08)",
        "soft-dark": "0 8px 30px rgba(0, 0, 0, 0.45)",
      },
      backgroundSize: {
        "grid-size": "44px 44px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: 0.5, transform: "scale(1)" },
          "50%": { opacity: 0.9, transform: "scale(1.06)" },
        },
        "dash-flow": {
          to: { strokeDashoffset: -200 },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "dash-flow": "dash-flow 6s linear infinite",
        blink: "blink 1s step-end infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
