/**
 * [SEO COMPONENT]: JSON_LD_ORCHESTRATOR v17.1.0 (STABILIZED)
 * [STRATEGY]: Structured Data Authority | XSS Defense | Memoized Injection
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";

interface JsonLdProps {
  /**
   * ข้อมูล Schema ในรูปแบบ Object หรือ Array ที่ผ่านการประมวลผลจาก @/lib/schema.ts
   * [TYPE]: unknown เพื่อความปลอดภัยสูงสุดในการทำ Type-checking
   */
  readonly data: Record<string, unknown> | readonly Record<string, unknown>[];
}

/**
 * @component JsonLd
 * @description หน่วยประมวลผลข้อมูลโครงสร้าง (JSON-LD)
 * ทำหน้าที่ฉีด Metadata เข้าสู่ Head Injection ของหน้าเว็บเพื่อสร้าง Search Authority
 */
const JsonLd = ({ data }: JsonLdProps) => {
  /* [A] SAFETY GUARD: ป้องกันการฉีด Script ที่ไม่มีคุณภาพหรือค่าว่าง */
  const isValidObject = data && !Array.isArray(data) && Object.keys(data).length > 0;
  const isValidArray = Array.isArray(data) && data.length > 0;

  if (!isValidObject && !isValidArray) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        /**
         * [B] SECURITY PROTOCOL: Unicode Escaping (XSS Defense)
         * - แทนที่เครื่องหมาย < ด้วย Unicode เพื่อป้องกันการทำ Script Injection
         * - การใช้ dangerouslySetInnerHTML เป็นวิธีมาตรฐานสำหรับ JSON-LD ใน React
         */
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
};

/**
 * @optimization React.memo
 * ป้องกันการประมวลผลซ้ำ (Memoization) เนื่องจากข้อมูล SEO มักจะ Static
 * ช่วยรักษา Performance ของ Main Thread ตาม Mandate ของระบบ
 */
export default memo(JsonLd);
