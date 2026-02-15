/**
 * [SYSTEM CONFIG]: ESLINT_STABILIZER v18.0.0 (SCRIPTS_EXCISED)
 * [STRATEGY]: Full Scripts Exclusion | Zero-Any Policy | Next.js Optimized
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import js from "@eslint/js";
import tseslint from "typescript-eslint";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const nextPlugin = require("@next/eslint-plugin-next");
const unusedImports = require("eslint-plugin-unused-imports");

export default tseslint.config(
  {
    /**
     * [IGNORE ENGINE]: ระบุ Folder ที่ต้องการให้ ESLint ข้ามการตรวจสอบ
     * [ADDED]: 'scripts/**' เพื่อไม่ให้สคริปต์เบื้องหลังมารบกวนขั้นตอน Build
     */
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "public/**",
      "scripts/**", // <--- ละเว้นสคริปต์ทั้งหมดที่นี่
      "**/*.d.ts",
      "eslint.config.mjs",
      "next.config.mjs",
      "postcss.config.mjs",
      "tailwind.config.ts",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      "@next/next": nextPlugin,
      "unused-imports": unusedImports,
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
      // --- [SECTION: NEXT.JS CORE] ---
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "@next/next/no-img-element": "error",
      "react/react-in-jsx-scope": "off",

      // --- [SECTION: UNUSED ASSETS CLEANUP] ---
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // --- [SECTION: CODE QUALITY & ZERO-ANY] ---
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "no-var": "error",
      "prefer-const": "error",
    },
  },
);
