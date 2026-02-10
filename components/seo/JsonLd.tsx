/**
 * [SEO COMPONENT]: JSON_LD_ORCHESTRATOR v17.5.5 (SERVER_STABILIZED)
 * [STRATEGY]: SSR Integrity | XSS Defense | Zero-Hydration Overhead
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";

interface JsonLdProps {
  readonly data?: Record<string, unknown> | readonly Record<string, unknown>[];
}

/**
 * @component JsonLd
 * @description เรนเดอร์ JSON-LD บน Server 100% เพื่อให้ Bot เก็บข้อมูลได้เร็วที่สุด
 * และลดภาระของ Main Thread บนอุปกรณ์พกพา (Termux/Mobile)
 */
export default function JsonLd({ data }: JsonLdProps) {
  /* [A] SAFETY GUARD */
  if (!data) return null;

  const hasContent = Array.isArray(data) ? data.length > 0 : Object.keys(data).length > 0;

  if (!hasContent) return null;

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning // [FIX]: ป้องกัน Warning กรณี Browser Extensions แก้ไขข้อมูล
      dangerouslySetInnerHTML={{
        /**
         * [B] SECURITY & PERFORMANCE
         * Unicode escaping ป้องกันการแทรกสคริปต์ (\u003c แทน <)
         */
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
