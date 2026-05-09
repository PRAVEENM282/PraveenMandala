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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        primary: "#2563eb",
        "primary-dark": "#1d4ed8",
        accent: "#14b8a6",
        ink: "#0f172a",
        muted: "#64748b",
        surface: "#ffffff",
        subtle: "#f1f5f9"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-space)", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 10px 40px rgba(37, 99, 235, 0.15)",
        "glow-lg": "0 20px 60px rgba(37, 99, 235, 0.18)",
        soft: "0 20px 60px rgba(15, 23, 42, 0.08)"
      },
      backgroundImage: {
        "grid": "linear-gradient(to right, rgba(15, 23, 42, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.08) 1px, transparent 1px)",
        "aurora": "radial-gradient(circle at top, rgba(37, 99, 235, 0.18), transparent 45%), radial-gradient(circle at 20% 20%, rgba(20, 184, 166, 0.18), transparent 50%), radial-gradient(circle at 80% 30%, rgba(59, 130, 246, 0.14), transparent 45%)",
        "hero-glow": "radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.18), transparent 60%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-22px)" }
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        },
        glow: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.75" }
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(20px, -20px) scale(1.05)" },
          "66%": { transform: "translate(-10px, 25px) scale(0.98)" }
        },
        grid: {
          "0%": { backgroundPosition: "0 0, 0 0" },
          "100%": { backgroundPosition: "120px 120px, 120px 120px" }
        },
        spotlight: {
          "0%": { transform: "translate(-40%, -20%) scale(0.9)", opacity: "0.4" },
          "100%": { transform: "translate(0%, 0%) scale(1.1)", opacity: "0.9" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 12s ease-in-out infinite",
        marquee: "marquee 24s linear infinite",
        "marquee-reverse": "marquee-reverse 28s linear infinite",
        shimmer: "shimmer 8s ease infinite",
        glow: "glow 5s ease-in-out infinite",
        blob: "blob 16s ease-in-out infinite",
        grid: "grid 18s linear infinite",
        spotlight: "spotlight 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s ease forwards"
      }
    }
  },
  plugins: [animate]
};

export default config;
