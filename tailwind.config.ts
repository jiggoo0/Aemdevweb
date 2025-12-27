/** @format */
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 🎨 Color Tokens: นิยามสีหลักสไตล์ AEM Architecture
      colors: {
        brand: {
          navy: "#0F172A", // Deep Navy (Base)
          blue: "#1E3A8A", // Brand Blue (Signature)
          orange: "#F97316", // Vibrant Orange (Call to Action)
          slate: "#64748B", // Technical Slate
          gold: "#D4AF37", // Premium Accent
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        background: "#FFFFFF",
        surface: "#F9FAFB",
        border: "#E5E7EB",
        success: "#22C55E",
        warning: "#FACC15",
        error: "#EF4444",
        accent: "#F97316",
      },

      // 🔤 Typography Tokens: กำหนดฟอนต์ที่ใช้ในโปรเจกต์
      fontFamily: {
        sans: ["var(--font-prompt)", "sans-serif"],
        heading: ["var(--font-kanit)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        "display-xl": ["3rem", { lineHeight: "1" }],
        "display-lg": ["2.25rem", { lineHeight: "1.1" }],
        "display-md": ["1.75rem", { lineHeight: "1.2" }],
        h1: ["2rem", { lineHeight: "1.3" }],
        h2: ["1.5rem", { lineHeight: "1.4" }],
        h3: ["1.25rem", { lineHeight: "1.4" }],
        body: ["1rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.4" }],
        tiny: ["0.75rem", { lineHeight: "1.3" }],
      },

      // 📐 Spacing Tokens: ระยะห่างมาตรฐานระบบ Grid
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
        "3xl": "6rem",
      },

      // 🟦 Radius Tokens: ความมนของขอบ (Card & Button เป็น 0 ตามสไตล์ Brutalist)
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        md: "0.25rem",
        lg: "0.5rem",
        xl: "1rem",
        full: "9999px",
        card: "0",
        button: "0",
      },

      // 🕶️ Shadow Tokens: เงาแบบหนาและแข็ง (Hard Shadows)
      boxShadow: {
        soft: "0 1px 3px rgba(0,0,0,0.06)",
        "enterprise-sm": "0 2px 4px rgba(0,0,0,0.08)",
        "enterprise-md": "0 4px 8px rgba(0,0,0,0.12)",
        "enterprise-lg": "0 8px 16px rgba(0,0,0,0.16)",
        "brutal-blue": "4px 4px 0px #1E3A8A",
        "brutal-orange": "4px 4px 0px #F97316",
        "brutal-navy": "8px 8px 0px #0F172A",
        "brutal-lg": "12px 12px 0px #0F172A",
      },

      // 🎞️ Animation & Keyframes: รวมระบบ Loading และ Motion
      animation: {
        float: "float 3s ease-in-out infinite",
        fade: "fade 0.5s ease-in-out",
        slide: "slide 0.3s ease-in-out",
        scale: "scale 0.3s ease-in-out",
        "spin-slow": "spin 3s linear infinite", // ปรับความเร็วให้เหมาะกับ Loader
        shimmer: "shimmer 2s infinite", // สำหรับ Skeleton Loading
        marquee: "marquee 60s linear infinite",
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slide: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scale: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

      // 📦 Container Tokens
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-animate"), // แนะนำให้ติดตั้งเพิ่มสำหรับแอนิเมชันที่ซับซ้อนขึ้น
  ],
}

export default config
