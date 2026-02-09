/**
 * [SEO COMPONENT]: JSON_LD_ORCHESTRATOR v17.5.5 (STABILIZED)
 * [STRATEGY]: Structured Data Authority | XSS Defense | SSR Integrity
 * [MANDATE]: Zero-Any Policy | Readonly Immutability
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";

/**
 * [INTERFACE]: JsonLdProps
 * ใช้ Readonly เพื่อความปลอดภัยของข้อมูลตาม System Mandate
 */
interface JsonLdProps {
  /**
   * ข้อมูล Schema ที่ผ่านการประมวลผลจาก @/lib/schema.ts
   * รองรับทั้งรูปแบบ Object เดี่ยว และ Array Graph (@graph)
   */
  readonly data?: Record<string, unknown> | readonly Record<string, unknown>[];
}

/**
 * @component JsonLd
 * @description หน่วยฉีดข้อมูลโครงสร้าง (JSON-LD) เข้าสู่ DOM 
 * เพื่อสร้าง "Digital Identity" ให้กับ Search Engine Bots (Google/Bing)
 */
const JsonLd = ({ data }: JsonLdProps) => {
  /* [A] SAFETY GUARD: ตรวจสอบความสมบูรณ์ของข้อมูลก่อนเรนเดอร์ */
  if (!data) return null;

  // ตรวจสอบว่ามีข้อมูลจริงๆ (ป้องกัน Empty Object {} หรือ Array [])
  const hasContent = Array.isArray(data) 
    ? data.length > 0 
    : Object.keys(data).length > 0;

  if (!hasContent) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        /**
         * [B] SECURITY PROTOCOL: Unicode Escaping (XSS Defense)
         * - แทนที่เครื่องหมาย < ด้วย Unicode (\u003c) เพื่อป้องกัน Malicious Script Injection
         * - ข้อมูลจะถูกฉีดเข้าสู่ Server Side (SSR/SSG) เพื่อให้ Bot อ่านได้ทันทีตั้งแต่ Request แรก
         */
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
};

/**
 * @optimization React.memo
 * ข้อมูล SEO มักจะ Static ตามรอบการ Build หรือเปลี่ยนไม่บ่อย
 * การใช้ memo ช่วยลดภาระของ Main Thread ในช่วง Hydration ได้อย่างมีประสิทธิภาพ
 */
export default memo(JsonLd);
