/**
 * [SEO COMPONENT]: JSON_LD_ORCHESTRATOR v17.2.3 (SECURITY_STABILIZED)
 * [STRATEGY]: Structured Data Authority | XSS Defense | Memoized Injection
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";

/**
 * [MANDATE]: Zero-Any Policy | Readonly Immutability
 */
interface JsonLdProps {
  /**
   * ข้อมูล Schema ในรูปแบบ Object หรือ Array ที่ผ่านการประมวลผลจาก @/lib/schema.ts
   * [TYPE]: การใช้ unknown เพื่อให้มั่นใจว่าข้อมูลผ่านกระบวนการ Type-checking
   */
  readonly data?: Record<string, unknown> | readonly Record<string, unknown>[];
}

/**
 * @component JsonLd
 * @description หน่วยประมวลผลข้อมูลโครงสร้าง (JSON-LD) 
 * ทำหน้าที่ฉีด Metadata เข้าสู่ระบบ Search Engine เพื่อสร้าง Authority
 */
const JsonLd = ({ data }: JsonLdProps) => {
  /* [A] SAFETY GUARD: ป้องกันการเรนเดอร์สคริปต์หากไม่มีข้อมูล */
  if (!data) return null;

  const isValidObject = !Array.isArray(data) && Object.keys(data).length > 0;
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
         * - แทนที่เครื่องหมาย < ด้วย Unicode เพื่อป้องกันการทำ Malicious Script Injection
         * - การใช้ dangerouslySetInnerHTML เป็นวิธีมาตรฐานสำหรับ JSON-LD ใน Next.js 16
         */
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
};

/**
 * @optimization React.memo
 * ป้องกันการประมวลผลซ้ำ (Unnecessary Re-renders) เนื่องจากข้อมูล SEO มักจะ Static
 * ช่วยรักษาประสิทธิภาพของ Main Thread ให้มีความเสถียรสูงสุด
 */
export default memo(JsonLd);
