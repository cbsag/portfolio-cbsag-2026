import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,md,mdx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.25rem",
        screens: { "2xl": "1200px" }
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"]
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-700px 0" },
          "100%": { backgroundPosition: "700px 0" }
        },
        floaty: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        aurora: {
          "0%": { transform: "translateX(-10%) translateY(-10%)" },
          "50%": { transform: "translateX(10%) translateY(10%)" },
          "100%": { transform: "translateX(-10%) translateY(-10%)" }
        },
        beam: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(360%)" }
        },
        gridPan: {
          "0%": { backgroundPosition: "0 0, 0 0" },
          "100%": { backgroundPosition: "72px 36px, 36px 72px" }
        },
        softPulse: {
          "0%,100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.95", transform: "scale(1.08)" }
        },
        floatSlow: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        drift: {
          "0%,100%": { transform: "translate3d(-2%, -1%, 0) scale(1)" },
          "50%": { transform: "translate3d(2%, 1%, 0) scale(1.04)" }
        },
        breathe: {
          "0%,100%": { opacity: "0.35", transform: "translate(-50%, 0)" },
          "50%": { opacity: "0.9", transform: "translate(-50%, 6px)" }
        }
      },
      animation: {
        shimmer: "shimmer 2.5s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        aurora: "aurora 10s ease-in-out infinite",
        beam: "beam 4.8s linear infinite",
        "grid-pan": "gridPan 16s linear infinite",
        "soft-pulse": "softPulse 4.2s ease-in-out infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite",
        breathe: "breathe 1.8s ease-in-out infinite"
      }
    }
  },
  plugins: [typography]
};

export default config;
