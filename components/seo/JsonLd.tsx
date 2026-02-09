/**
 * [SEO COMPONENT]: JSON_LD_ORCHESTRATOR v17.4.5 (STABILIZED_FINAL)
 * [STRATEGY]: Structured Data Authority | XSS Defense | SSR Integrity
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";

/**
 * [MANDATE]: Zero-Any Policy | Readonly Immutability
 */
interface JsonLdProps {
  /**
   * ข้อมูล Schema ที่ผ่านการประมวลผลจาก @/lib/schema.ts
   * รองรับทั้งรูปแบบ Object เดี่ยว และ Array Graph
   */
  readonly data?: Record<string, unknown> | readonly Record<string, unknown>[];
}

/**
 * @component JsonLd
 * @description หน่วยฉีดข้อมูลโครงสร้าง (JSON-LD) เข้าสู่ DOM
 * เพื่อสร้าง "Digital Identity" ให้กับ Search Engine Bots (Google/Bing)
 */
const JsonLd = ({ data }: JsonLdProps) => {
  /* [A] SAFETY GUARD: ป้องกันการเรนเดอร์หากข้อมูลไม่สมบูรณ์ */
  if (!data) return null;

  // ตรวจสอบว่ามีข้อมูลจริงๆ หรือไม่ (ป้องกัน empty object/array)
  const hasContent = Array.isArray(data) ? data.length > 0 : Object.keys(data).length > 0;

  if (!hasContent) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        /**
         * [B] SECURITY PROTOCOL: Unicode Escaping (XSS Defense)
         * - แทนที่เครื่องหมาย < ด้วย Unicode (\u003c) เพื่อป้องกัน Malicious Script Injection
         * - การใช้ dangerouslySetInnerHTML เป็นวิธีที่ Next.js แนะนำสำหรับ JSON-LD
         * - ข้อมูลจะถูก Inject ตั้งแต่ Server Side (SSR/SSG) เพื่อให้ Bot อ่านได้ทันที
         */
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
};

/**
 * @optimization React.memo
 * ข้อมูล SEO มักจะ Static ตามรอบการ Build หรือเปลี่ยนไม่บ่อย
 * การใช้ memo ช่วยลดภาระของ Main Thread ในช่วง Hydration ได้อย่างมีนัยสำคัญ
 */
export default memo(JsonLd);
