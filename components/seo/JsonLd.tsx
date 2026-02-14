/**
 * [SEO COMPONENT]: JSON_LD_ORCHESTRATOR v17.9.90 (ULTIMATE_HARDENED)
 * [STRATEGY]: SSR Integrity | XSS Defense | Zero-Any Compliance | React 19 Ready
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";

interface JsonLdProps {
  /** [STRICT]: รองรับทั้ง Single Graph Object และ Array of Entities */
  readonly data: Record<string, unknown> | readonly Record<string, unknown>[] | null | undefined;
}

/**
 * @component JsonLd
 * @description เรนเดอร์ JSON-LD บน Server 100% พร้อมระบบ XSS Protection
 * ออกแบบมาเพื่อความเสถียรสูงสุดในสถาปัตยกรรม Next.js 16 (App Router)
 */
export default function JsonLd({ data }: JsonLdProps) {
  /* [A] SAFETY GUARD: Fail Fast */
  if (!data) return null;

  // ตรวจสอบว่ามี Content จริงหรือไม่เพื่อไม่ให้เรนเดอร์ Script Tag ว่างเปล่า
  const hasContent = Array.isArray(data) ? data.length > 0 : Object.keys(data).length > 0;

  if (!hasContent) return null;

  /* [B] RENDERING & SECURITY LAYER */
  return (
    <script
      type="application/ld+json"
      // [SAFE_HYDRATION]: ป้องกันความขัดแย้งของข้อมูลหากถูกแทรกแซงโดย Extension
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        /**
         * SECURITY STRATEGY:
         * 1. JSON.stringify: แปลงข้อมูลเป็นสตริงมาตรฐานตามมาตรฐาน ECMA
         * 2. Unicode Escaping: เปลี่ยน < เป็น \u003c เพื่อยับยั้งการรันสคริปต์แปลกปลอม (XSS) 100%
         */
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
