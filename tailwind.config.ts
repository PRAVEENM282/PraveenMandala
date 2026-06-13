import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px"
      }
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pureWhite: "#FFFDF8",
        softBeige: "#F3EBDD",
        lightCream: "#FFF6D8",
        warmYellow: "#FFD95A",
        vibrantOrange: "#FF8C42",
        ink: "#1A1A1A",      // Soft black for editorial feel
        muted: "#8C8A85",    // Warm gray for secondary text
        surface: "#FFFDF8",
        border: "rgba(26, 26, 26, 0.1)" // Very subtle border
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-space)", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0, 0, 0, 0.03)",
        warm: "0 20px 60px rgba(255, 140, 66, 0.08)"
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'elastic': 'cubic-bezier(0.68, -0.55, 0.26, 1.55)',
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)'
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.05)", opacity: "1" }
        },
        fluid: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" }
        },
        wave: {
          "0%": { transform: "translateX(0) translateY(0) rotate(0deg)" },
          "50%": { transform: "translateX(-2%) translateY(2%) rotate(2deg)" },
          "100%": { transform: "translateX(0) translateY(0) rotate(0deg)" }
        }
      },
      animation: {
        breathe: "breathe 8s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        fluid: "fluid 12s ease-in-out infinite",
        wave: "wave 15s ease-in-out infinite"
      }
    }
  },
  plugins: [animate]
};

export default config;
