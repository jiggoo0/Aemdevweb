/** @format */

import type { Viewport } from "next"

/**
 * การตั้งค่าหน้าจอหลัก (Global Viewport Configuration)
 * -------------------------------------------------------------------------
 * หน้าที่: ควบคุมพิกัดการแสดงผลและสภาพแวดล้อมบนอุปกรณ์พกพา
 * มาตรฐาน: Next.js 16 | Tailwind 4 (OKLCH) | Ultra-Deep Level 7
 * ควบคุมโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */

export const viewport: Viewport = {
  /**
   * [DIMENSION PROTOCOL]: ตั้งค่าขนาดหน้าจอให้พอดีกับอุปกรณ์
   * เน้นความฉับไวในการเรนเดอร์พิกัดแรก (Initial Scale)
   */
  width: "device-width",
  initialScale: 1,

  /**
   * [ACCESSIBILITY NODE]: การอนุญาตให้ขยายหน้าจอ
   * ยุทธศาสตร์: เพื่อให้ลูกค้าตรวจสอบรายละเอียดแผนงานหรือตารางราคาได้ชัดเจน
   * เราอนุญาตให้ซูมได้สูงสุด 5 เท่า ตามเกณฑ์ WCAG สากล
   */
  maximumScale: 5,
  userScalable: true,

  /**
   * [THEME EXPERIENCE]: การปรับสีแถบสถานะตามสภาพแสง
   * ใช้พิกัดสี OKLCH เพื่อความนุ่มนวลของโทนสีในระดับฮาร์ดแวร์
   */
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "oklch(1 0 0)", // สีขาวบริสุทธิ์ (Pure White)
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "oklch(0.12 0.02 260)", // สี Slate-950 พิกัดเฉพาะของ AEMDEVWEB
    },
  ],

  /**
   * [INTERACTIVE WIDGET]: ระบบควบคุมเมื่อเปิดคีย์บอร์ดบนมือถือ
   * 'resizes-visual': ป้องกันหน้าจอเลื่อนหนีพิกัดเดิมเวลาพิมพ์ข้อมูลติดต่อ
   * เพื่อความลื่นไหลในการส่งข้อมูล Lead มายัง นายเอ็มซ่ามากส์
   */
  interactiveWidget: "resizes-visual",
}
