/**
 * [INFRASTRUCTURE]: CLIENT_BRIDGE_NODE v18.0.5 (PRODUCTION_READY)
 * [STRATEGY]: De-coupled Hydration | Next.js 16 Compatibility | TBT Optimization
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import dynamic from "next/dynamic";
import { SITE_CONFIG } from "@/constants/site-config";

// --- [OPTIMIZED]: Dynamic Imports (Client-Side Only) ---
// [ENGINEERING]: การใช้ { ssr: false } ช่วยลด Payload ของ Initial HTML และป้องกันปัญหา Hydration Mismatch 100%

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
 * @description ศูนย์กลางควบคุม UI Components ที่ทำงานเฉพาะฝั่ง Client (Browser APIs)
 * ออกแบบมาเพื่อรักษาคะแนน Core Web Vitals ในส่วนของ LCP และ CLS
 */
const ClientInfrastructure = () => {
  return (
    <>
      {/* [CORE]: Navigation Progress Indicator 
          จัดการผ่าน TopLoader เพื่อให้ User Experience มีความลื่นไหลในขณะสลับ Node ข้อมูล
      */}
      <TopLoader color={SITE_CONFIG.themeColor} />

      {/* [CONVERSION]: High-Intent Contact FAB 
          ปุ่ม Line ลอยตัวพร้อมระบบ Tracking Conversion รายหน้า
      */}
      <LineStickyButton source="global_infrastructure" />

      {/* [UI]: Global Notification System 
          ใช้ Sonner สำหรับระบบ Toast ที่มีความเบา (Lightweight) และรองรับ Accessibility
      */}
      <Toaster position="top-center" richColors expand={false} closeButton theme="system" />
    </>
  );
};

ClientInfrastructure.displayName = "ClientInfrastructure";

export default memo(ClientInfrastructure);
