/** @format */
import type { Config } from "tailwindcss"
import animatePlugin from "tailwindcss-animate"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },

    extend: {
      colors: {
        brand: {
          blue: "#2563EB",
          navy: "#0F172A",
          green: "#22C55E",
          slate: "#64748B",
          emerald: "#065F46",
          gold: "#C5A059",
          orange: "#F97316",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      fontFamily: {
        prompt: ["var(--font-prompt)", "sans-serif"],
        sans: ["var(--font-prompt)", "var(--font-inter)", "sans-serif"],
        heading: ["var(--font-prompt)", "var(--font-inter)", "sans-serif"],
      },

      fontSize: {
        "display-2xl": [
          "clamp(4rem, 10vw, 6.25rem)",
          { lineHeight: "0.85", letterSpacing: "-0.05em", fontWeight: "900" },
        ],
        "display-xl": [
          "clamp(2.5rem, 8vw, 3.75rem)",
          { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "900" },
        ],
        "section-title": [
          "clamp(2rem, 5vw, 2.5rem)",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "800" },
        ],
      },

      boxShadow: {
        "enterprise-sm": "4px 4px 0px 0px rgba(15, 23, 42, 1)",
        "enterprise-md": "8px 8px 0px 0px rgba(15, 23, 42, 1)",
        "enterprise-lg": "12px 12px 0px 0px rgba(15, 23, 42, 1)",
        "brutal-blue": "12px 12px 0px 0px #2563EB",
        "brutal-navy": "12px 12px 0px 0px #0F172A",
        "brutal-gold": "16px 16px 0px 0px #C5A059",
        "glow-blue": "0 0 40px rgba(37, 99, 235, 0.15)",
        "glow-emerald": "0 0 40px rgba(6, 95, 70, 0.15)",
      },

      backgroundImage: {
        "industrial-grid":
          "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)",
      },

      // 🛠️ เพิ่มส่วนนี้เพื่อแก้ไข Warning duration
      transitionDuration: {
        "1500": "1500ms",
        "2000": "2000ms",
        "2500": "2500ms",
      },

      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        shimmer: "shimmer 2.5s infinite",
        float: "float 3s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animatePlugin],
}

export default config
