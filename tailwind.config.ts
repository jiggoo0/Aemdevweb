/** @format */
import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"
import typography from "@tailwindcss/typography"

const config: Config = {
  // 🎯 1. Content Scanned: ครอบคลุมทุกเลเยอร์ของ AEM DEVWEB
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts}",
    "./constants/**/*.{js,ts}",
    "./content/**/*.{js,ts,md,mdx}",
  ],

  // 🌓 Dark Mode: บังคับใช้ Class เพื่อความแม่นยำของ Midnight Theme
  darkMode: "class",

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "4rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // 🔤 2. Fonts: เชื่อมโยงกับ Next.js Fonts
      fontFamily: {
        sans: ["var(--font-prompt)", "ui-sans-serif", "system-ui"],
        prompt: ["var(--font-prompt)"],
        anuphan: ["var(--font-anuphan)"],
        mono: ["var(--font-jetbrains)", "ui-monospace"],
      },

      // 🎨 3. Luminous Palette: ดึงค่าจาก CSS Variables ใน globals.css
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },

        // Aurora Accent (Static fallback for components)
        aurora: {
          cyan: "var(--aurora-cyan)",
          violet: "var(--aurora-violet)",
          emerald: "var(--aurora-emerald)",
        },
      },

      // 🔘 4. Radius Expansion
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "3xl": "2.75rem",
        "4xl": "3.5rem",
      },

      // ⚡ 5. Essential Animations: ซิงค์กับ CSS Keyframes
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        aurora: "aurora 15s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },

      // 🪄 6. Custom Luminous Shadows
      boxShadow: {
        luminous: "var(--shadow-luminous)",
        "aurora-glow": "var(--shadow-aurora-glow)",
      },
    },
  },

  plugins: [animate, typography],
}

export default config
