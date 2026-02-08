/**
 * [SEO COMPONENT]: JSON_LD_ORCHESTRATOR v16.3 (STABILIZED)
 * [PLAN]: Structured Data Authority | Search Engine Readiness | Zero-Any Policy
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";

interface JsonLdProps {
  /**
   * ข้อมูล Schema ในรูปแบบ Object หรือ Array ที่ผ่านการประมวลผลจาก @/lib/schema.ts
   * ใช้ 'unknown' เพื่อความปลอดภัยสูงสุดในระดับ Type-checking
   */
  readonly data: Record<string, unknown> | readonly Record<string, unknown>[];
}

/**
 * @component JsonLd
 * @description หน่วยประมวลผลข้อมูลโครงสร้าง (JSON-LD)
 * เพื่อฉีด Metadata เข้าสู่ส่วนหัวของหน้าเว็บ (Head Injection) อย่างปลอดภัย
 */
const JsonLd = ({ data }: JsonLdProps) => {
  /* [A] SAFETY GUARD: ป้องกันการฉีด Script ที่ไม่มีคุณภาพหรือว่างเปล่า */
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
         * [B] SECURITY PROTOCOL: Escaping Protocol (XSS Defense)
         * - ใช้ Unicode Encoding สำหรับเครื่องหมาย < เพื่อป้องกันการแทรก Script ภายนอก
         * - มั่นใจได้ว่าข้อมูล JSON จะถูกอ่านโดย Search Engine อย่างถูกต้อง 100%
         */
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
};

/**
 * @optimization React.memo
 * ป้องกันการประมวลผลซ้ำ (Memoization) เพื่อรักษา Performance
 * เนื่องจากชุดข้อมูล SEO มักจะไม่มีการเปลี่ยนแปลงหลังจากการ Render ครั้งแรก
 */
export default memo(JsonLd);
