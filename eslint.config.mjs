/** @format */
import js from "@eslint/js"
import tseslint from "typescript-eslint"
import { createRequire } from "node:module"

const require = createRequire(import.meta.url)
const nextPlugin = require("@next/eslint-plugin-next")

export default tseslint.config({
  // 1. กำหนดไฟล์ที่จะตรวจสอบและ Parser
  files: ["**/*.{ts,tsx,js,jsx}"],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      ecmaFeatures: { jsx: true },
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  // 2. พิกัดยกเว้น (Ignores)
  ignores: [
    ".next/**",
    "node_modules/**",
    "out/**",
    "public/**",
    "**/*.d.ts",
    "eslint.config.mjs",
    "next.config.mjs",
  ],
  // 3. ปลั๊กอินเสริม
  plugins: {
    "@next/next": nextPlugin,
    "@typescript-eslint": tseslint.plugin,
  },
  // 4. พิกัดกฎควบคุม (Rules Configuration)
  rules: {
    ...js.configs.recommended.rules,
    ...tseslint.configs.recommended[0]?.rules, // ปรับการดึงค่า Config ให้ปลอดภัยขึ้น
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs["core-web-vitals"].rules,

    // ปิดการบังคับ Import React (สำหรับ Next.js 13+ App Router)
    "react/react-in-jsx-scope": "off",

    // จัดการพิกัดตัวแปรที่ไม่ได้ใช้งาน (เปลี่ยนจาก off เป็น warn เพื่อความสะอาด)
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],

    // อนุญาตให้ใช้ any ได้ในจุดที่จำเป็น (Specialist Flexibility)
    "@typescript-eslint/no-explicit-any": "warn",

    // แจ้งเตือนเมื่อใช้ <img> แทน <Image> ของ Next.js เพื่อรักษาคะแนน LCP
    "@next/next/no-img-element": "error",

    // ปิดกฎที่ซ้ำซ้อนกับ TS Compiler
    "no-undef": "off",
    "no-unused-vars": "off",
  },
})
