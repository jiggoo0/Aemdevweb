/**
 * [SYSTEM MODULE]: ROOT_TRANSITION_ORCHESTRATOR v17.9.9 (STABILIZED)
 * [STRATEGY]: Framer Motion Re-mount | Zero-Jank Navigation
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React from "react";
import PageTransition from "@/components/layout/PageTransition";

/**
 * @template RootTemplate
 * @description ห่อหุ้มทุก Route เพื่อเปิดใช้งาน PageTransition อัตโนมัติ
 */
export default function RootTemplate({ children }: { children: React.ReactNode }) {
  return (
    <PageTransition>
      {/* [INJECTION]: เนื้อหาหลักของแต่ละหน้าจะถูกฉีดเข้าสู่ระบบ Animation */}
      {children}
    </PageTransition>
  );
}
