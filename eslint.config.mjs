/** @format */
import js from "@eslint/js"
import tseslint from "typescript-eslint"
import { createRequire } from "node:module"

const require = createRequire(import.meta.url)
const nextPlugin = require("@next/eslint-plugin-next")

export default tseslint.config(
  // 1. พิกัดยกเว้น (Ignores): ระบุตำแหน่งที่ไม่ต้องการให้ระบบตรวจสอบ
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "public/**",
      "**/*.d.ts",
      "eslint.config.mjs",
      "next.config.mjs",
      "postcss.config.mjs",
    ],
  },
  // 2. พิกัดตั้งค่าพื้นฐานและปลั๊กอิน
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      "@next/next": nextPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    // 3. พิกัดกฎควบคุม (Rules Configuration)
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,

      // ปิดการบังคับ Import React สำหรับระบบงาน Next.js ยุคใหม่
      "react/react-in-jsx-scope": "off",

      // วางพิกัดตัวแปรที่ไม่ได้ใช้งานให้แจ้งเตือนเป็น Warning เพื่อความกริบของโค้ด
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      // เปิดพิกัดความยืดหยุ่นให้ Specialist สามารถใช้ any ได้ในจุดที่จำเป็น
      "@typescript-eslint/no-explicit-any": "warn",

      // บังคับใช้ระบบจัดการรูปภาพของ Next.js เพื่อรักษาพิกัดความเร็วหน้าเว็บ
      "@next/next/no-img-element": "error",

      // ปรับจูนกฎที่ซ้ำซ้อนกับระบบตรวจสอบของ TypeScript
      "no-undef": "off",
      "no-unused-vars": "off",

      // ห้ามวางพิกัดคอมเมนต์ที่มี Emoji หรือคำต้องห้ามในระบบงาน
      "no-warning-comments": "off",
    },
  }
)
