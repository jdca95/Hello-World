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
        // Paleta principal — inspirada en logos de transporte profesional
        // Azul marino oscuro (primary)
        navy: {
          50:  "#e8eef5",
          100: "#c5d3e5",
          200: "#9eb5d2",
          300: "#7797be",
          400: "#5980af",
          500: "#3c6aa0",
          600: "#2a5a94",
          700: "#1a4680",
          800: "#0e3368",
          900: "#051e4a",
          950: "#020f2e",
        },
        // Azul acento (secundario)
        blue: {
          brand: "#1d6fa4",
        },
        // Naranja para CTAs de alta visibilidad
        orange: {
          brand: "#f97316",
          hover: "#ea6c0a",
        },
        // Grises industriales
        steel: {
          50:  "#f8fafb",
          100: "#f1f4f6",
          200: "#e2e8ed",
          300: "#c8d2db",
          400: "#9aaab8",
          500: "#6b7d8e",
          600: "#4d5e6d",
          700: "#374859",
          800: "#243040",
          900: "#141e29",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Montserrat", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(135deg, #020f2e 0%, #051e4a 40%, #0e3368 70%, #1a4680 100%)",
        "gradient-card":
          "linear-gradient(135deg, #0e3368 0%, #1a4680 100%)",
      },
      boxShadow: {
        card: "0 4px 24px rgba(5, 30, 74, 0.12)",
        "card-hover": "0 8px 40px rgba(5, 30, 74, 0.22)",
        cta: "0 4px 20px rgba(249, 115, 22, 0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.5s ease-out both",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
