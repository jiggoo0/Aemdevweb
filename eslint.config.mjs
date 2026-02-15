/**
 * [SYSTEM CONFIG]: ESLINT_STABILIZER v16.4.4 (FLAT_CONFIG_OPTIMIZED)
 * [STRATEGY]: Zero-Any Policy | Unused Asset Excision | Next.js Optimized
 */

import js from "@eslint/js";
import tseslint from "typescript-eslint";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const nextPlugin = require("@next/eslint-plugin-next");
const unusedImports = require("eslint-plugin-unused-imports");

export default tseslint.config(
  {
    // [IGNORE ENGINE]
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "public/**",
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
  // --- [SECTION: SCRIPTS OVERRIDE] ---
  {
    files: ["scripts/**/*.{js,ts}"],
    languageOptions: {
      globals: {
        process: "readonly",
        console: "readonly",
        setTimeout: "readonly",
        fetch: "readonly",
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
      },
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-explicit-any": "off", // ผ่อนปรนให้ script ใช้งานได้คล่องตัว
      "no-undef": "off",
      "no-unused-vars": "off",
    },
  },
);
