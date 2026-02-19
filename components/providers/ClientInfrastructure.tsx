/**
 * [INFRASTRUCTURE]: CLIENT_BRIDGE_NODE v18.0.6 (HYDRATION_FIXED)
 * [STRATEGY]: De-coupled Hydration | Next.js 16 Compatibility | TBT Optimization
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useEffect } from "react";
import dynamic from "next/dynamic";
import { SITE_CONFIG } from "@/constants/site-config";

// --- [OPTIMIZED]: Dynamic Imports (Client-Side Only) ---
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

const ClientInfrastructure = () => {
  /**
   * [CRITICAL_FIX]: สวิตช์เปิดไฟให้ระบบ
   * เติมคลาส 'hydrated' เพื่อให้ CSS Opacity เปลี่ยนจาก 0 เป็น 1
   */
  useEffect(() => {
    const body = document.body;
    if (body) {
      body.classList.add("hydrated");
    }
  }, []);

  return (
    <>
      {/* [CORE]: Navigation Progress Indicator */}
      <TopLoader color={SITE_CONFIG.themeColor} />

      {/* [CONVERSION]: High-Intent Contact FAB */}
      <LineStickyButton source="global_infrastructure" />

      {/* [UI]: Global Notification System */}
      <Toaster position="top-center" richColors expand={false} closeButton theme="system" />
    </>
  );
};

ClientInfrastructure.displayName = "ClientInfrastructure";

export default memo(ClientInfrastructure);
