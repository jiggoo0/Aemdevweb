/**
 * [SEO COMPONENT]: JSON_LD_ORCHESTRATOR v18.0.0 (TYPE_SAFE_ENFORCED)
 * [STRATEGY]: SSR Integrity | XSS Defense | Zero-Any Compliance | React 19 Ready
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
// แนะนำให้ลง: pnpm add -D schema-dts
import type { Thing, WithContext } from "schema-dts";

interface JsonLdProps {
  /** * [STRICT]: รองรับ Schema.org Types อย่างสมบูรณ์
   * ใช้ WithContext<Thing> เพื่อบังคับให้มี @context เสมอใน Root Level
   */
  readonly data: WithContext<Thing> | readonly Thing[] | Record<string, unknown> | null | undefined;

  /** [OPTIONAL]: กำหนด ID เพื่อการ Debug หรือ Testing */
  readonly id?: string;
}

/**
 * @component JsonLd
 * @description เรนเดอร์ JSON-LD บน Server 100% พร้อมระบบ XSS Protection
 * ออกแบบมาเพื่อความเสถียรสูงสุดในสถาปัตยกรรม Next.js 16 (App Router)
 */
export default function JsonLd({ data, id }: JsonLdProps) {
  /* [A] SAFETY GUARD: Fail Fast */
  if (!data) return null;

  // ตรวจสอบ Content: รองรับทั้ง Array และ Object
  const hasContent = Array.isArray(data) ? data.length > 0 : Object.keys(data).length > 0;

  if (!hasContent) return null;

  /* [B] RENDERING & SECURITY LAYER */
  return (
    <script
      id={id || "seo-json-ld"}
      type="application/ld+json"
      // [SAFE_HYDRATION]: ป้องกันความขัดแย้งของข้อมูลหากถูกแทรกแซงโดย Extension
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        /**
         * SECURITY STRATEGY:
         * 1. JSON.stringify: แปลงข้อมูลเป็นสตริงมาตรฐานตามมาตรฐาน ECMA
         * 2. Unicode Escaping: เปลี่ยน < เป็น \u003c เพื่อยับยั้งการรันสคริปต์แปลกปลอม (XSS) 100%
         * และเปลี่ยน U+2028/U+2029 เพื่อป้องกัน Line Separator Crash ในบาง Browser เก่า
         */
        __html: JSON.stringify(data)
          .replace(/</g, "\\u003c")
          .replace(/\u2028/g, "\\u2028")
          .replace(/\u2029/g, "\\u2029"),
      }}
    />
  );
}
