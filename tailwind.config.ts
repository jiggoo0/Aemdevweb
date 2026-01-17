/** @format */
import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"
import typography from "@tailwindcss/typography"
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  // 🎯 1. Content Scanned
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts}",
    "./constants/**/*.{js,ts}",
    "./content/**/*.{js,ts,md,mdx}",
  ],

  // 🌓 Dark Mode Strategy
  darkMode: "class",

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // 🔤 2. Fonts: เน้นความโปร่งและอ่านง่าย (Anuphan = Modern Friendly)
      fontFamily: {
        sans: ["var(--font-prompt)", ...defaultTheme.fontFamily.sans],
        kanit: ["var(--font-kanit)"],
        prompt: ["var(--font-prompt)"],
        anuphan: ["var(--font-anuphan)"],
        mono: ["var(--font-jetbrains)", ...defaultTheme.fontFamily.mono],
      },

      // 🎨 3. Luminous Color Palette: ฉีกความหมองด้วยโทน Midnight & Aurora
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Brand Colors: ใช้ OKLCH เพื่อความสว่างที่แม่นยำ
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },

        // Aurora Accent: สีที่ช่วยให้เว็บดู "สว่างจากข้างใน"
        aurora: {
          cyan: "oklch(0.78 0.12 200)", // ความสดใสของท้องฟ้า
          violet: "oklch(0.65 0.18 280)", // ความพรีเมียมของยามค่ำคืน
          emerald: "oklch(0.82 0.18 155)", // เขียวสว่าง (Electric Emerald)
          white: "oklch(0.98 0.01 240)", // ขาวนวลลดความกระด้าง
        },

        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },

      // 🔘 4. Weightless Radius: โค้งมนระดับ Super-ellipse เพื่อความเป็นมิตรสูงสุด
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1.25rem",
        "2xl": "2rem",
        "3xl": "3rem",
        "4xl": "4.5rem",
      },

      // 🎬 5. Keyframes: เพิ่ม Aurora Movement ให้เว็บดูมีชีวิต
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // การลอยแบบนุ่มนวล (Human-like movement)
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.02)" },
        },
        // แสงออโรร่าเต้นระบำพื้นหลัง
        aurora: {
          "0%, 100%": { opacity: "0.3", transform: "translate(0, 0) scale(1)" },
          "33%": {
            opacity: "0.5",
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            opacity: "0.4",
            transform: "translate(-20px, 20px) scale(0.9)",
          },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },

      // ⚡ 6. Animations
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        aurora: "aurora 15s ease-in-out infinite",
        "fade-in-up": "fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },

      // 🪄 7. Luminous Utilities
      backgroundImage: {
        "luminous-gradient":
          "linear-gradient(135deg, oklch(0.78 0.12 200) 0%, oklch(0.82 0.18 155) 100%)",
        "midnight-mesh":
          "radial-gradient(at 0% 0%, oklch(0.15 0.05 260) 0%, transparent 50%), radial-gradient(at 100% 100%, oklch(0.12 0.03 280) 0%, transparent 50%)",
      },
      boxShadow: {
        // เงาที่ดูเบาและฟุ้ง (Soft Ambient Shadow)
        luminous: "0 20px 80px -15px rgba(0, 0, 0, 0.3)",
        "aurora-glow": "0 0 60px -10px oklch(0.78 0.12 200 / 0.3)",
      },
    },
  },

  plugins: [animate, typography],
}

export default config
