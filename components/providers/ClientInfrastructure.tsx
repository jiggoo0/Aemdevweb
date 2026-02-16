/**
 * [INFRASTRUCTURE]: CLIENT_BRIDGE_NODE v18.0.3 (BUILD_STABILIZED)
 * [STRATEGY]: De-coupled Hydration | Next.js 16 Compatibility | Zero-SSR Logic
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client"; // [MANDATORY]: บังคับให้เป็น Client Component เพื่อรองรับ ssr: false

import React, { memo } from "react";
import dynamic from "next/dynamic";
import { SITE_CONFIG } from "@/constants/site-config";

// --- [OPTIMIZED]: Dynamic Imports (Client-Side Only) ---
// การย้ายมาไว้ที่นี่ช่วยแก้ปัญหา Build Failed ใน Next.js 15/16
const TopLoader = dynamic(
  () => import("@/components/layout/TopLoader").then((mod) => mod.TopLoader),
  { ssr: false },
);

const LineStickyButton = dynamic(() => import("@/components/shared/LineStickyButton"), {
  ssr: false,
});

const Toaster = dynamic(() => import("@/components/ui/Sonner").then((mod) => mod.Toaster), {
  ssr: false,
});

/**
 * @function ClientInfrastructure
 * @description สะพานเชื่อมสำหรับ UI Components ที่ไม่ต้องทำ SSR
 * เพื่อลดค่า TBT และป้องกันปัญหา Hydration Mismatch
 */
const ClientInfrastructure = () => {
  return (
    <>
      {/* ระบบแถบโหลดด้านบน */}
      <TopLoader color={SITE_CONFIG.themeColor} />

      {/* ปุ่มติดต่อ Line ลอยตัว */}
      <LineStickyButton />

      {/* ระบบแจ้งเตือน Global Notification */}
      <Toaster position="top-center" richColors expand={false} closeButton />
    </>
  );
};

export default memo(ClientInfrastructure);
