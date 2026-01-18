/** @format */

/**
 * 📄 postcss.config.mjs
 * ✅ Configured for Tailwind CSS v4 & Next.js 15
 * แก้ปัญหา Lint: Assign object to a variable before exporting
 */
const config = {
  plugins: {
    // 🚀 Tailwind v4 Engine
    "@tailwindcss/postcss": {},
    // 🛠️ Auto-prefixer for cross-browser compatibility
    autoprefixer: {},
  },
}

export default config
