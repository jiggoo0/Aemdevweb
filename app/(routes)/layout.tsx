/**
 * [ROUTE GROUP INFRASTRUCTURE]: BUSINESS_ROUTES_LAYOUT v17.0.2 (STABILIZED)
 * [STRATEGY]: Seamless Page Transitions | Full-Width Architecture | ROI Anchor
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// --- Shared Components ---
import ConversionCTA from "@/components/shared/ConversionCTA";

/**
 * @component RoutesLayout
 * @description โครงสร้างหลักสำหรับหน้า Services, Blog, และ Case Studies
 * เน้นการเปลี่ยนหน้าแบบ Smooth Transition และปิดท้ายด้วย Global CTA
 */
export default function RoutesLayout({ children }: { readonly children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="bg-surface-main relative flex min-h-screen flex-col overflow-x-hidden">
      {/* 01. TRANSITION ENGINE: จัดการจังหวะการเคลื่อนไหวเมื่อเปลี่ยนหน้า */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex w-full flex-grow flex-col"
        >
          {/* Content Hub: ปล่อยให้ Page Component ควบคุม Container/Padding เอง */}
          {children}
        </motion.div>
      </AnimatePresence>

      {/* 02. STRATEGIC FOOTER CTA: วางด่านปิดการขายไว้ทุกหน้าย่อย (Global Anchor) */}
      <section className="bg-surface-main relative z-10 border-t border-white/5 py-24">
        {/* Background Atmosphere */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.05] select-none"
          aria-hidden="true"
        >
          <div className="bg-infrastructure-grid absolute inset-0" />
          <div className="ambient-aura absolute bottom-0 left-1/2 h-[500px] w-full -translate-x-1/2 opacity-[0.1] blur-[120px]" />
        </div>

        <div className="relative z-20 mx-auto max-w-5xl px-4 text-center">
          <ConversionCTA
            title="พร้อมวางรากฐานธุรกิจสู่ปี 2026 หรือยังครับ?"
            description="ไม่ว่าธุรกิจของคุณจะอยู่ในระยะไหน ทีม Specialist ของเราพร้อมให้คำปรึกษาเพื่อหาโซลูชันที่คุ้มค่าและวัดผลได้จริง"
            buttonLabel="ปรึกษาแผนงานกับผู้เชี่ยวชาญ"
          />
        </div>
      </section>
    </div>
  );
}
