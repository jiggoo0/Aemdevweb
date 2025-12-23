/** @format */
import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  // 1. ระบุไฟล์ที่ต้องการให้ ESLint ข้ามการตรวจสอบ (Industrial Clean-up)
  {
    ignores: [".next/*", "out/*", "node_modules/*", "public/*", "**/*.d.ts"],
  },

  // 2. ใช้ FlatCompat เพื่อโหลด Next.js Config
  // วิธีนี้จะแก้ปัญหา ERR_MODULE_NOT_FOUND ได้แน่นอน
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 3. ปรับแต่งกฎ (Custom Rules) ตามจริตการพัฒนาของเรา
  {
    rules: {
      // ✅ ลดความเข้มงวดในช่วงพัฒนา (Pragmatic Developer)
      "@typescript-eslint/no-unused-vars": "off",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-expressions": "off",

      // ✅ เพิ่มกฎเพื่อความปลอดภัย (Industrial Sharp Standard)
      "react/jsx-no-comment-textnodes": "error", // ดักจับ Error ที่เจอใน PromoBanner
    },
  },
]

export default eslintConfig
