/** @format */
import js from "@eslint/js"
import tseslint from "typescript-eslint"
import { createRequire } from "node:module"

const require = createRequire(import.meta.url)
const nextPlugin = require("@next/eslint-plugin-next")

export default tseslint.config(
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
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,

      // ปิดการบังคับ Import React เพราะใช้ Next.js 13+ App Router
      "react/react-in-jsx-scope": "off",

      // คุมเข้มตัวแปรที่ไม่ได้ใช้งาน ต้องมี Prefix ขีดล่างเท่านั้นถึงจะผ่าน
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      // บังคับเตือนเมื่อใช้ any เพื่อรักษาคุณภาพของไฟล์ในโฟลเดอร์ types และ lib
      "@typescript-eslint/no-explicit-any": "warn",

      // ป้องกันการใช้ <img> ทั่วไป เพื่อบังคับใช้ระบบจัดการรูปภาพของ Next.js ที่ตั้งค่าไว้
      "@next/next/no-img-element": "error",

      // ลดความซ้ำซ้อนกับตัวตรวจสอบของ TypeScript
      "no-undef": "off",
      "no-unused-vars": "off",

      // ปิดการแจ้งเตือนคอมเมนต์ Warning เพื่อไม่ให้กวนสายตาขณะทำงาน
      "no-warning-comments": "off",
    },
  }
)
