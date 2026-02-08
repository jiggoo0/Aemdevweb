/**
 * [SYSTEM CORE]: POSTCSS_INFRASTRUCTURE_V4 v7.2.70
 * [DNA MANDATE]: Tailwind v4 Engine | Zero-Jitter Styling Architecture
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    /**
     * [ENGINE]: Tailwind CSS v4 PostCSS Plugin
     * หน้าที่: หน่วยประมวลผลหลักที่เปลี่ยน Directives และ Utility Classes
     * ให้เป็น CSS ระดับวิศวกรรมที่รองรับ OKLCH และระบบภาพลักษณ์ใหม่
     */
    "@tailwindcss/postcss": {},

    /**
     * [COMPATIBILITY]: Autoprefixer
     * หน้าที่: เติมพิกัด Vendor Prefixes โดยอัตโนมัติ (Zero-Jitter approach)
     * เพื่อให้งานออกแบบของคุณแสดงผลได้อย่างสมบูรณ์แบบในทุกอุปกรณ์
     */
    autoprefixer: {},
  },
};

// [DNA MANDATE]: Single Execution Authority
export default config;
